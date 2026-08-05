// Validates that every locale covers every bias id, every UI key and every
// category, and that no entry has an empty string. Run via `npm run check`.
import { biases, biasIds } from '../src/data/biases.js';
import { locales, DEFAULT_LOCALE } from '../src/locales/index.js';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const base = locales[DEFAULT_LOCALE];
const problems = [];

const uiKeys = Object.keys(base.ui);
const catKeys = Object.keys(base.categories);

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

// Categories referenced by the manifest must exist in the locale files.
for (const b of biases) {
  for (const c of b.categories) {
    if (!catKeys.includes(c)) problems.push(`[data] bias "${b.id}" uses unknown category "${c}"`);
  }
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  problems.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

console.log(
  `OK — ${biasIds.length} biases × ${Object.keys(locales).length} locales ` +
    `(${Object.keys(locales).join(', ')}), ${files.size} icons.`
);
