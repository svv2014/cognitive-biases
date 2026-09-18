// Writes one static HTML page per bias per language into the build output, so
// each bias has a real URL a search engine can index and a link preview can
// read. The interactive site lives behind hash routes (#/bias/…), which
// crawlers largely ignore; these pages are the crawlable face of the same
// content, and each links into the interactive site rather than redirecting.
//
//   docs/bias/<id>/index.html          English
//   docs/<lang>/bias/<id>/index.html   every other language
//
// Run after `vite build` (see package.json).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { biases, isAiEra } from '../src/data/biases.js';
import { categoryById } from '../src/data/categories.js';
import { locales, localeCodes, DEFAULT_LOCALE } from '../src/locales/all.js';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '../docs');
const pkg = JSON.parse(readFileSync(join(here, '../package.json'), 'utf8'));
const SITE = pkg.homepage.replace(/\/$/, '');

export const pagePath = (code, id) => (code === DEFAULT_LOCALE ? `bias/${id}/` : `${code}/bias/${id}/`);
const depthOf = (code) => (code === DEFAULT_LOCALE ? '../../' : '../../../');

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// A bias page cannot fall back per field, so the prerender refuses to publish
// a page with a hole in it; `npm run check` normally catches this first.
function text(code, id) {
  const entry = locales[code].biases[id];
  if (!entry?.name || !entry.description || !entry.example || !entry.counter) {
    throw new Error(`[${code}] ${id} is incomplete`);
  }
  return entry;
}

const CSS = `
:root{--bg:#f4f6fb;--surface:#fff;--border:#dfe4ee;--text:#1b2030;--muted:#5d6780;--subtle:#7d8699;--accent:#177a83;--ai:#7d5ba6}
@media (prefers-color-scheme:dark){:root{--bg:#12141c;--surface:#1a1d27;--border:#2c3140;--text:#e8ebf2;--muted:#a6afc2;--subtle:#858ea3;--accent:#46bcc6;--ai:#a88bd0}img.art{filter:invert(1)}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:16px/1.6 Inter,-apple-system,'Segoe UI',Roboto,sans-serif}
.wrap{max-width:760px;margin:0 auto;padding:20px 16px 56px}
header{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:28px}
.brand{display:flex;gap:10px;align-items:center;font-weight:600;color:inherit;text-decoration:none}
.mark{display:inline-flex;gap:3px}.mark i{width:7px;height:14px;border-radius:2px}
nav.langs{display:flex;flex-wrap:wrap;gap:4px}nav.langs a{padding:3px 9px;border-radius:99px;color:var(--muted);font-size:.8rem;text-decoration:none}
nav.langs a[aria-current]{background:var(--surface);color:var(--text);border:1px solid var(--border)}
article{background:var(--surface);border:1px solid var(--border);border-radius:20px;overflow:hidden}
.stripe{display:flex;height:6px}.stripe i{flex:1}
.body{padding:28px}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px;padding:0;list-style:none}
.tags li{padding:2px 10px;border:1px solid var(--border);border-radius:99px;font-size:.75rem;font-weight:600;color:var(--muted)}
h1{margin:0 0 12px;font-size:clamp(1.9rem,6vw,2.6rem);line-height:1.1;letter-spacing:-.03em}
.lead{font-size:1.15rem;margin:0 0 18px}
.art{float:right;width:120px;height:120px;margin:0 0 12px 16px;opacity:.75}
.box{margin:0 0 14px;padding:14px 16px;border-radius:12px;background:var(--bg)}
.label{display:block;margin-bottom:3px;font-size:.68rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--subtle)}
.do .label{color:var(--accent)}.do{border:1px solid color-mix(in srgb,var(--accent) 35%,transparent)}
.prompt{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9rem;border:1px solid color-mix(in srgb,var(--ai) 45%,transparent)}.prompt .label{color:var(--ai);font-family:Inter,sans-serif}
.meta{font-size:.9rem;color:var(--muted)}.meta a{color:var(--accent)}
.cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.cta a{padding:10px 18px;border-radius:99px;border:1px solid var(--border);color:var(--text);text-decoration:none;font-weight:600;font-size:.92rem;background:var(--surface)}
.cta a.primary{background:var(--accent);border-color:transparent;color:#fff}
@media (prefers-color-scheme:dark){.cta a.primary{color:#06222a}}
footer{margin-top:28px;font-size:.84rem;color:var(--subtle);text-align:center}footer a{color:inherit}
`;

function page(code, bias) {
  const loc = locales[code];
  const ui = { ...locales[DEFAULT_LOCALE].ui, ...loc.ui };
  const b = text(code, bias.id);
  const root = depthOf(code);
  const self = `${SITE}/${pagePath(code, bias.id)}`;
  const app = `${root}?lang=${code}#/bias/${bias.id}`;
  const cat = (id) => loc.categories[id] ?? locales[DEFAULT_LOCALE].categories[id];
  const title = `${b.name} — ${ui.title}`;

  // The twin link stays within the static pages, in the same language.
  const twinLine = bias.twin
    ? `<p class="meta"><span class="label">${esc(ui.twin)}</span><a href="${root}${pagePath(code, bias.twin)}">${esc(text(code, bias.twin).name)}</a></p>`
    : '';
  const echoes = biases.filter((x) => x.twin === bias.id);
  const echoLine = echoes.length
    ? `<p class="meta"><span class="label">${esc(ui.echo)}</span>${echoes
        .map((x) => `<a href="${root}${pagePath(code, x.id)}">${esc(text(code, x.id).name)}</a>`)
        .join(', ')}</p>`
    : '';
  const sourceLine = bias.source
    ? `<p class="meta"><span class="label">${esc(ui.source)}</span><a href="${esc(bias.source.url)}" rel="noopener">${esc(bias.source.label)}</a></p>`
    : '';
  const promptBox = isAiEra(bias) && b.prompt
    ? `<div class="box prompt"><span class="label">${esc(ui.promptLabel)}</span>${esc(b.prompt)}</div>`
    : '';

  const alternates = localeCodes
    .map((c) => `<link rel="alternate" hreflang="${c}" href="${SITE}/${pagePath(c, bias.id)}" />`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${SITE}/${pagePath(DEFAULT_LOCALE, bias.id)}" />`)
    .join('\n    ');

  const langs = localeCodes
    .map(
      (c) =>
        `<a href="${root}${pagePath(c, bias.id)}" hreflang="${c}" lang="${c}"${c === code ? ' aria-current="page"' : ''}>${esc(locales[c].meta.name)}</a>`
    )
    .join('');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: b.name,
    description: b.description,
    inLanguage: code,
    url: self,
    inDefinedTermSet: { '@type': 'DefinedTermSet', name: ui.title, url: `${SITE}/` },
  };

  return `<!doctype html>
<html lang="${code}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(b.description)}" />
    <link rel="canonical" href="${self}" />
    ${alternates}
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(b.name)}" />
    <meta property="og:description" content="${esc(b.description)}" />
    <meta property="og:url" content="${self}" />
    <meta property="og:image" content="${SITE}/icons/${bias.id}.png" />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" href="${root}favicon.svg" type="image/svg+xml" />
    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
    <style>${CSS}</style>
  </head>
  <body>
    <div class="wrap">
      <header>
        <a class="brand" href="${root}?lang=${code}#/"><span class="mark"><i style="background:#177a83"></i><i style="background:#e95a53"></i><i style="background:#f9b628"></i></span>${esc(ui.title)}</a>
        <nav class="langs" aria-label="${esc(ui.language)}">${langs}</nav>
      </header>
      <article>
        <div class="stripe">${bias.categories.map((c) => `<i style="background:${categoryById[c].color}"></i>`).join('')}</div>
        <div class="body">
          <img class="art" src="${root}icons/${bias.id}.png" alt="" width="120" height="120" />
          <ul class="tags">${bias.categories.map((c) => `<li>${esc(cat(c))}</li>`).join('')}</ul>
          <h1>${esc(b.name)}</h1>
          <p class="lead">${esc(b.description)}</p>
          <div class="box"><span class="label">${esc(ui.example)}</span>${esc(b.example)}</div>
          <div class="box do"><span class="label">${esc(ui.counterLabel)}</span>${esc(b.counter)}</div>
          ${promptBox}
          ${twinLine}
          ${echoLine}
          ${sourceLine}
          <div class="cta">
            <a class="primary" href="${app}">${esc(ui.openApp)} →</a>
            <a href="${root}?lang=${code}#/dictionary">${esc(ui.navDictionary)}</a>
            <a href="${root}?lang=${code}#/play">${esc(locales[code].game?.title ?? locales[DEFAULT_LOCALE].game.title)}</a>
          </div>
        </div>
      </article>
      <footer><a href="${root}?lang=${code}#/">${esc(ui.title)}</a> · ${esc(ui.tagline)}</footer>
    </div>
  </body>
</html>
`;
}

// ------------------------------------------------------------------ home page

/**
 * A plain-HTML summary of the site, written into #root of the built
 * index.html. The app replaces it on first render; a reader that does not run
 * JavaScript gets the essentials and a link to every bias page.
 */
function homeSummary() {
  const loc = locales[DEFAULT_LOCALE];
  const items = biases
    .map((b) => `<li><a href="./${pagePath(DEFAULT_LOCALE, b.id)}">${esc(loc.biases[b.id].name)}</a> — ${esc(loc.biases[b.id].description)}</li>`)
    .join('\n        ');
  return `<div id="prerender">
      <h1>${esc(loc.ui.title)}</h1>
      <p>${esc(loc.ui.tagline)}</p>
      <p>The interactive site needs JavaScript. Everything in it is also available as plain pages and data:</p>
      <ul>
        <li><a href="./llms.txt">llms.txt</a> — a plain-text guide for models and agents</li>
        <li><a href="./biases.json">biases.json</a> — all ${biases.length} biases in six languages</li>
        <li><a href="./self-test.json">self-test.json</a> — behavioural probes for models; run them with <a href="https://github.com/svv2014/cognitive-biases/blob/main/scripts/run-probes.mjs">run-probes.mjs</a>, not on yourself</li>
      </ul>
      <h2>All ${biases.length} biases</h2>
      <ul>
        ${items}
      </ul>
    </div>`;
}

const indexFile = join(OUT, 'index.html');
const indexHtml = readFileSync(indexFile, 'utf8');
if (!indexHtml.includes('<!--prerender:home-->')) throw new Error('index.html is missing <!--prerender:home-->');
writeFileSync(indexFile, indexHtml.replace('<!--prerender:home-->', homeSummary()));

let count = 0;
for (const code of localeCodes) {
  for (const bias of biases) {
    const dir = join(OUT, pagePath(code, bias.id));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), page(code, bias));
    count++;
  }
}
console.log(`OK — prerendered the home summary and ${count} bias pages (${biases.length} × ${localeCodes.length} languages)`);
