#!/usr/bin/env node
// Runs the behavioural bias probes (src/data/probes.js) against a model and
// reports how often each bias showed up. This is the "independent runner" the
// self-test needs: a model cannot honestly administer these to itself, because
// each condition must run in a fresh context and the subject must not know
// what is being measured.
//
//   ANTHROPIC_API_KEY=… node scripts/run-probes.mjs --provider anthropic --model claude-opus-5
//   OPENAI_API_KEY=…    node scripts/run-probes.mjs --provider openai --model <id> [--base-url https://…/v1]
//
// Options:
//   --trials N        repeats per item (default 3; replies vary between runs)
//   --only a,b        run only these probe ids
//   --concurrency N   parallel requests (default 4)
//   --out file.json   also write every reply and verdict to a file
//
// Every request is a real API call and costs money. With the defaults a full
// run is about 150 requests.
import { writeFileSync } from 'node:fs';
import { runnableProbes } from '../src/data/probes.js';

// ------------------------------------------------------------------ options

export function parseArgs(argv) {
  const opts = { provider: null, model: null, baseUrl: null, trials: 3, only: null, concurrency: 4, out: null };
  for (let i = 0; i < argv.length; i++) {
    const [flag, value] = [argv[i], argv[i + 1]];
    const take = () => {
      i++;
      return value;
    };
    if (flag === '--provider') opts.provider = take();
    else if (flag === '--model') opts.model = take();
    else if (flag === '--base-url') opts.baseUrl = take();
    else if (flag === '--trials') opts.trials = Math.max(1, Number.parseInt(take(), 10) || 1);
    else if (flag === '--only') opts.only = take().split(',');
    else if (flag === '--concurrency') opts.concurrency = Math.max(1, Number.parseInt(take(), 10) || 1);
    else if (flag === '--out') opts.out = take();
    else if (flag === '--help' || flag === '-h') opts.help = true;
    else throw new Error(`unknown option ${flag}`);
  }
  return opts;
}

// ---------------------------------------------------------------- providers

/**
 * A provider is `async (messages) => string`: it takes a conversation of
 * `{ role, content }` turns and returns the model's reply text. No system
 * prompt, no sampling settings: the probes measure the model as it ships.
 */
async function anthropicProvider(model) {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic();
  return async (messages) => {
    // Refusal fallbacks are deliberately not enabled: a fallback would answer
    // with a different model and silently contaminate the measurement.
    const response = await client.messages.create({ model, max_tokens: 16000, messages });
    if (response.stop_reason === 'refusal') throw new RefusalError(response.stop_details?.category);
    return response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('\n');
  };
}

/** Any OpenAI-compatible chat-completions endpoint (OpenAI, OpenRouter, a local server). */
function openAiCompatibleProvider(model, baseUrl) {
  const key = process.env.OPENAI_API_KEY;
  const url = `${(baseUrl ?? 'https://api.openai.com/v1').replace(/\/$/, '')}/chat/completions`;
  return async (messages) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(key ? { authorization: `Bearer ${key}` } : {}) },
      body: JSON.stringify({ model, messages }),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? '';
  };
}

class RefusalError extends Error {
  constructor(category) {
    super(`refused${category ? ` (${category})` : ''}`);
    this.name = 'RefusalError';
  }
}

// ------------------------------------------------------------------- runner

async function pool(tasks, limit) {
  const results = new Array(tasks.length);
  let next = 0;
  const worker = async () => {
    while (next < tasks.length) {
      const i = next++;
      results[i] = await tasks[i]();
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, worker));
  return results;
}

/** One conversation: send each user turn after the model's previous reply. */
async function converse(ask, turns) {
  const messages = [];
  const replies = [];
  for (const turn of turns) {
    messages.push({ role: 'user', content: turn });
    const reply = await ask(messages);
    messages.push({ role: 'assistant', content: reply });
    replies.push(reply);
  }
  return replies;
}

/**
 * Runs the probes with `ask` and returns per-probe tallies plus every trial.
 * Exported so the tests can drive it with scripted models instead of an API.
 */
export async function runProbes(ask, { trials = 3, only = null, concurrency = 4, onProgress } = {}) {
  const probes = runnableProbes.filter((p) => !only || only.includes(p.id));
  const jobs = [];
  for (const probe of probes) {
    for (const item of probe.items) {
      for (let t = 0; t < trials; t++) jobs.push({ probe, item, trial: t });
    }
  }

  let done = 0;
  const trialsRun = await pool(
    jobs.map(({ probe, item, trial }) => async () => {
      const conditions = probe.conditions(item);
      const replies = {};
      let result;
      try {
        // Each condition is its own fresh conversation.
        for (const [name, turns] of Object.entries(conditions)) replies[name] = await converse(ask, turns);
        result = probe.score(item, replies);
      } catch (err) {
        result = { outcome: err.name === 'RefusalError' ? 'refused' : 'error', note: err.message };
      }
      onProgress?.(++done, jobs.length);
      return { probe: probe.id, item: item.id, trial, ...result, replies };
    }),
    concurrency
  );

  const summary = probes.map((probe) => {
    const mine = trialsRun.filter((r) => r.probe === probe.id);
    const count = (o) => mine.filter((r) => r.outcome === o).length;
    const scored = count('pass') + count('fail');
    return {
      probe: probe.id,
      variant: probe.variant ?? null,
      measures: probe.measures,
      pass: count('pass'),
      fail: count('fail'),
      inconclusive: count('inconclusive'),
      refused: count('refused'),
      error: count('error'),
      // The share of scorable trials in which the bias showed.
      biasRate: scored ? count('fail') / scored : null,
    };
  });

  return { summary, trials: trialsRun };
}

// --------------------------------------------------------------------- main

const USAGE = `Usage:
  node scripts/run-probes.mjs --provider anthropic --model claude-opus-5
  node scripts/run-probes.mjs --provider openai --model <id> [--base-url <url>]
Options: --trials N (default 3)  --only id,id  --concurrency N (default 4)  --out file.json
Probes: ${runnableProbes.map((p) => p.id).join(', ')}`;

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || !opts.provider || !opts.model) {
    console.log(USAGE);
    process.exit(opts.help ? 0 : 1);
  }

  const ask =
    opts.provider === 'anthropic'
      ? await anthropicProvider(opts.model)
      : opts.provider === 'openai'
        ? openAiCompatibleProvider(opts.model, opts.baseUrl)
        : null;
  if (!ask) throw new Error(`unknown provider "${opts.provider}" (use anthropic or openai)`);

  console.log(`Running probes against ${opts.provider}:${opts.model}, ${opts.trials} trial(s) per item…`);
  const report = await runProbes(ask, {
    ...opts,
    onProgress: (n, total) => process.stdout.write(`\r  ${n}/${total}`),
  });
  process.stdout.write('\n\n');

  const pct = (x) => (x === null ? '  n/a' : `${Math.round(x * 100)}%`.padStart(5));
  console.log('probe                   bias shown   pass  fail  unclear  refused  error');
  for (const s of report.summary) {
    console.log(
      `${(s.probe + (s.variant ? '*' : '')).padEnd(24)}${pct(s.biasRate).padStart(10)}` +
        `${String(s.pass).padStart(7)}${String(s.fail).padStart(6)}${String(s.inconclusive).padStart(9)}` +
        `${String(s.refused).padStart(9)}${String(s.error).padStart(7)}`
    );
  }
  const failed = report.trials.find((t) => t.outcome === 'error' || t.outcome === 'refused');
  if (failed) console.log(`\nFirst ${failed.outcome}: ${failed.note}`);
  if (report.summary.some((s) => s.variant)) {
    console.log('\n* self-attribution variant: labels one answer as the model’s own; see src/data/probes.js.');
  }
  console.log('\n"bias shown" = fail / (pass + fail). Unclear trials (no verdict, or a verdict that followed');
  console.log('the order rather than the content) are left out of the rate, not counted as passes.');

  if (opts.out) {
    writeFileSync(opts.out, JSON.stringify({ provider: opts.provider, model: opts.model, ...report }, null, 2));
    console.log(`\nFull transcript: ${opts.out}`);
  }
}

// Only run when invoked directly, so the tests can import runProbes.
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
