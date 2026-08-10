// Validates that every locale covers every bias id, every UI key and every
// category, and that no entry has an empty string. Run via `npm run check`.
import { biases, biasIds, isAiEra } from '../src/data/biases.js';
import { locales, DEFAULT_LOCALE } from '../src/locales/index.js';
import { quizPools, QUIZ_LENGTH } from '../src/data/quiz.js';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const base = locales[DEFAULT_LOCALE];
const problems = [];

// Every question across every mode must be written in every locale.
const quizBiasIds = Object.values(quizPools).flat();

const uiKeys = Object.keys(base.ui);
const catKeys = Object.keys(base.categories);
const quizUiKeys = Object.keys(base.quiz).filter((k) => k !== 'questions');

for (const [code, loc] of Object.entries(locales)) {
  const where = (msg) => problems.push(`[${code}] ${msg}`);

  if (loc.meta?.code !== code) where(`meta.code is "${loc.meta?.code}", expected "${code}"`);

  for (const k of uiKeys) if (!loc.ui?.[k]?.trim()) where(`missing ui.${k}`);
  for (const k of Object.keys(loc.ui ?? {})) if (!uiKeys.includes(k)) where(`unknown ui key "${k}"`);

  for (const k of catKeys) if (!loc.categories?.[k]?.trim()) where(`missing category "${k}"`);
  for (const k of Object.keys(loc.categories ?? {})) if (!catKeys.includes(k)) where(`unknown category "${k}"`);

  for (const id of biasIds) {
    const b = loc.biases?.[id];
    if (!b) {
      where(`missing bias "${id}"`);
      continue;
    }
    for (const f of ['name', 'description', 'example']) {
      if (!b[f]?.trim()) where(`bias "${id}" is missing ${f}`);
    }
  }
  for (const id of Object.keys(loc.biases ?? {})) {
    if (!biasIds.includes(id)) where(`unknown bias id "${id}"`);
  }

  const names = Object.values(loc.biases ?? {}).map((b) => b.name);
  const dupes = names.filter((n, i) => names.indexOf(n) !== i);
  if (dupes.length) where(`duplicate bias names: ${[...new Set(dupes)].join(', ')}`);

  // --- quiz ---
  for (const k of quizUiKeys) if (!loc.quiz?.[k]?.trim()) where(`missing quiz.${k}`);

  for (const id of quizBiasIds) {
    const q = loc.quiz?.questions?.[id];
    if (!q) {
      where(`missing quiz question "${id}"`);
      continue;
    }
    for (const f of ['prompt', 'biased', 'fair']) {
      if (!q[f]?.trim()) where(`quiz question "${id}" is missing ${f}`);
    }
    if (q.biased?.trim() === q.fair?.trim()) where(`quiz question "${id}" has identical options`);
  }
  for (const id of Object.keys(loc.quiz?.questions ?? {})) {
    if (!quizBiasIds.includes(id)) where(`quiz question "${id}" is not in the pool`);
  }
}

// Every bias must have an icon on disk, and no icon may be orphaned.
const iconDir = join(here, '../public/icons');
const files = new Set(readdirSync(iconDir));
for (const id of biasIds) {
  if (!files.has(`${id}.png`)) problems.push(`[icons] missing public/icons/${id}.png`);
}
for (const f of files) {
  if (!biasIds.includes(f.replace(/\.png$/, ''))) problems.push(`[icons] orphaned ${f}`);
}

// Each pool must reference real biases and be larger than a single run.
for (const [mode, pool] of Object.entries(quizPools)) {
  for (const id of pool) {
    if (!biasIds.includes(id)) problems.push(`[quiz:${mode}] pooled id "${id}" is not a bias`);
  }
  if (new Set(pool).size !== pool.length) problems.push(`[quiz:${mode}] duplicate ids in pool`);
  if (pool.length <= QUIZ_LENGTH) {
    problems.push(`[quiz:${mode}] pool (${pool.length}) must exceed QUIZ_LENGTH (${QUIZ_LENGTH})`);
  }
}
// A bias may only be pooled once overall, so a result never lands twice.
if (new Set(quizBiasIds).size !== quizBiasIds.length) {
  problems.push('[quiz] the same bias appears in more than one pool');
}

// Categories referenced by the manifest must exist in the locale files.
for (const b of biases) {
  for (const c of b.categories) {
    if (!catKeys.includes(c)) problems.push(`[data] bias "${b.id}" uses unknown category "${c}"`);
  }
}

// AI-era claims are recent and contested, so each one has to name a source and
// the classic bias it rhymes with. The classic fifty predate both fields.
for (const b of biases.filter(isAiEra)) {
  if (!b.source?.url || !b.source?.label) problems.push(`[data] "${b.id}" is missing a source`);
  if (!b.twin) problems.push(`[data] "${b.id}" is missing a twin`);
  else if (!biasIds.includes(b.twin)) problems.push(`[data] "${b.id}" twins unknown "${b.twin}"`);
  else if (isAiEra(biases.find((x) => x.id === b.twin))) {
    problems.push(`[data] "${b.id}" must twin a classic bias, not another AI-era one`);
  }
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  problems.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

console.log(
  `OK — ${biasIds.length} biases × ${Object.keys(locales).length} locales ` +
    `(${Object.keys(locales).join(', ')}), ${files.size} icons, ` +
    `${quizBiasIds.length} quiz questions x ${Object.keys(locales).length}.`
);
