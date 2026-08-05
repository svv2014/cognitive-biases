// Exercises the search/filter logic against the real locale data.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { biases } from '../src/data/biases.js';
import { getBias, localeCodes } from '../src/locales/index.js';
import { filterBiases, normalize } from '../src/lib/search.js';

const build = (locale) =>
  biases.map((bias) => {
    const text = getBias(locale, bias.id);
    return { ...bias, ...text, haystack: normalize(`${text.name} ${text.description} ${text.example}`) };
  });

const en = build('en');

test('empty query returns everything', () => {
  assert.equal(filterBiases(en, '', []).length, 50);
  assert.equal(filterBiases(en, '   ', []).length, 50);
});

test('query matches the bias name', () => {
  const hits = filterBiases(en, 'anchoring', []);
  assert.equal(hits.length, 1);
  assert.equal(hits[0].id, 'anchoring');
});

test('query is case-insensitive and matches descriptions', () => {
  const hits = filterBiases(en, 'HOROSCOPE', []);
  assert.deepEqual(
    hits.map((h) => h.id),
    ['forer-effect']
  );
});

test('unmatched query returns nothing', () => {
  assert.equal(filterBiases(en, 'zzzznotathing', []).length, 0);
});

test('category filter narrows results', () => {
  const money = filterBiases(en, '', ['money']);
  assert.ok(money.length > 0 && money.length < 50);
  assert.ok(money.every((e) => e.categories.includes('money')));
});

test('multiple categories combine as OR', () => {
  const money = filterBiases(en, '', ['money']);
  const politics = filterBiases(en, '', ['politics']);
  const both = filterBiases(en, '', ['money', 'politics']);
  const union = new Set([...money, ...politics].map((e) => e.id));
  assert.equal(both.length, union.size);
  assert.ok(both.length >= Math.max(money.length, politics.length));
});

test('query and category apply together', () => {
  const hits = filterBiases(en, 'effect', ['memory']);
  assert.ok(hits.every((e) => e.categories.includes('memory')));
  assert.ok(hits.every((e) => e.haystack.includes('effect')));
});

test('diacritics are ignored when searching', () => {
  const es = build('es');
  // "Maldición del conocimiento" should be reachable without the accent.
  const hits = filterBiases(es, 'maldicion', []);
  assert.deepEqual(
    hits.map((h) => h.id),
    ['curse-of-knowledge']
  );

  const pl = build('pl');
  // "Klątwa wiedzy" reachable typing plain ASCII.
  assert.ok(filterBiases(pl, 'klatwa', []).some((h) => h.id === 'curse-of-knowledge'));
});

test('search works in every locale', () => {
  for (const code of localeCodes) {
    const entries = build(code);
    const first = entries[0];
    const hits = filterBiases(entries, first.name, []);
    assert.ok(
      hits.some((h) => h.id === first.id),
      `${code}: searching for "${first.name}" did not find it`
    );
  }
});

test('every bias is reachable by its own name in every locale', () => {
  for (const code of localeCodes) {
    const entries = build(code);
    for (const entry of entries) {
      const hits = filterBiases(entries, entry.name, []);
      assert.ok(hits.some((h) => h.id === entry.id), `${code}/${entry.id} not found by name`);
    }
  }
});
