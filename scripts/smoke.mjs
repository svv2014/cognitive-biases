// Renders the app to a string for each locale and asserts the output is sane.
// Catches render-time crashes, missing strings and broken icon paths without
// needing a browser. Run via `npm run smoke`.
import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const iconFiles = new Set(
  readdirSync(join(dirname(fileURLToPath(import.meta.url)), '../public/icons'))
);

// Minimal DOM surface used during render (effects do not run in SSR).
const store = new Map();
const define = (name, value) =>
  Object.defineProperty(globalThis, name, { value, writable: true, configurable: true });

define('localStorage', {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
});
define('navigator', { language: 'en-US' });
define('document', { documentElement: { dataset: {} } });
// Routes are hash-based; each render below points this at the route under test.
define('location', { hash: '', search: '' });

const render = (App, hash) => {
  globalThis.location.hash = hash;
  return renderToStaticMarkup(React.createElement(App));
};

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'warn' });

const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
const { locales, localeCodes, loadAllLocales } = await vite.ssrLoadModule('/src/locales/index.js');
await loadAllLocales();
const { biasIds, aiBiases } = await vite.ssrLoadModule('/src/data/biases.js');
const { situations } = await vite.ssrLoadModule('/src/data/situations.js');
const aiIds = aiBiases.map((b) => b.id);

// Matches React's HTML escaping so string comparisons against markup line up.
const escapeHtml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

let failures = 0;
const fail = (msg) => {
  console.error('  ✗ ' + msg);
  failures++;
};

for (const code of localeCodes) {
  store.set('cb-lang', code);
  let html, home, page;
  try {
    html = render(App, '#/dictionary');
    home = render(App, '');
    page = render(App, '#/bias/anchoring');
  } catch (err) {
    fail(`${code}: render threw — ${err.message}`);
    continue;
  }

  const loc = locales[code];
  const before = failures;

  const missing = biasIds.filter((id) => !html.includes(escapeHtml(loc.biases[id].name)));
  if (missing.length) fail(`${code}: ${missing.length} bias name(s) not rendered, e.g. ${missing[0]}`);

  const cards = (html.match(/class="card"/g) || []).length;
  if (cards !== biasIds.length) fail(`${code}: rendered ${cards} cards, expected ${biasIds.length}`);

  const imgs = (html.match(/<img[^>]*>/g) || []).length;
  if (imgs !== biasIds.length) fail(`${code}: rendered ${imgs} images, expected ${biasIds.length}`);

  // Icon paths must resolve to a real file. BASE_URL is "/" under the dev
  // server used here and "./" in the production build, so accept either.
  const badSrc = [...html.matchAll(/src="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !/^\.?\/icons\/[a-z0-9-]+\.png$/.test(src) || !iconFiles.has(src.split('/').pop()));
  if (badSrc.length) fail(`${code}: unexpected image src "${badSrc[0]}"`);

  // Every locale is complete, so the fallback notice must never show.
  if (html.includes(escapeHtml(loc.ui.untranslated))) fail(`${code}: shows the untranslated notice`);

  // No unresolved {placeholders} leaked into the UI.
  const leaked = html.match(/\{(count|total)\}/);
  if (leaked) fail(`${code}: unresolved placeholder ${leaked[0]}`);

  if (!html.includes(escapeHtml(loc.ui.title))) fail(`${code}: title missing`);
  if (!html.includes(escapeHtml(loc.ui.tagline))) fail(`${code}: tagline missing`);
  if (!html.includes(escapeHtml(loc.ui.search))) fail(`${code}: search placeholder missing`);

  for (const cat of Object.values(loc.categories)) {
    if (!html.includes(escapeHtml(cat))) fail(`${code}: category "${cat}" missing`);
  }

  // Home: every hero, door and section string, and a twin row per AI-era bias.
  const homeKeys = ['homeTitle', 'homeLead', 'situationsTitle', 'dailyTitle', 'twinsTitle', 'quizBlockTitle'];
  for (const key of homeKeys) {
    if (!home.includes(escapeHtml(loc.ui[key]))) fail(`${code}: home is missing ui.${key}`);
  }
  for (const s of situations) {
    if (!home.includes(escapeHtml(loc.ui[`sit${s.key}`]))) fail(`${code}: home is missing door "${s.id}"`);
  }
  const twinRows = (home.match(/class="twins__row"/g) || []).length;
  if (twinRows !== aiIds.length) fail(`${code}: home rendered ${twinRows} twin rows, expected ${aiIds.length}`);
  if (/\{(count|total)\}/.test(home)) fail(`${code}: home has an unresolved placeholder`);

  // A bias page: its own name as the heading, and its AI-era echo linked.
  if (!page.includes(`<h1 class="bias-page__name">${escapeHtml(loc.biases.anchoring.name)}</h1>`)) {
    fail(`${code}: bias page heading missing`);
  }
  if (!page.includes('href="#/bias/position-bias"')) fail(`${code}: bias page does not link its echo`);
  if (!page.includes(escapeHtml(loc.biases.anchoring.counter))) fail(`${code}: bias page is missing its counter-move`);
  const play = render(App, '#/play');
  if (!play.includes(escapeHtml(loc.game.title)) || !play.includes(escapeHtml(loc.game.start))) {
    fail(`${code}: game intro is missing its title or start button`);
  }
  const aiPage = render(App, '#/bias/sycophancy');
  if (!aiPage.includes(escapeHtml(loc.biases.sycophancy.prompt))) fail(`${code}: AI-era bias page is missing its prompt`);
  if (page.includes('class="prompt"')) fail(`${code}: a classic bias page shows a prompt`);
  if ((home.match(/class="prompt /g) || []).length !== 3) fail(`${code}: home should feature three prompts`);
  const counters = (html.match(/class="card__counter"/g) || []).length;
  if (counters !== biasIds.length) fail(`${code}: ${counters} counter-moves on cards, expected ${biasIds.length}`);

  if (failures === before) console.log(`  ✓ ${code.padEnd(2)} — ${cards} cards, ${imgs} icons, home, bias page`);
}

await vite.close();

if (failures) {
  console.error(`\n${failures} smoke failure(s).`);
  process.exit(1);
}
console.log('\nSmoke test passed.');
