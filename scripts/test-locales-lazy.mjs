// Runs in its own process, before anything imports every language, so it sees
// the app's real starting state: English loaded, the rest on demand.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isLoaded, localeCodes, resolveLocale } from '../src/locales/index.js';

test('languages resolve before they are loaded', () => {
  assert.equal(isLoaded('uk'), false);
  assert.equal(resolveLocale('uk'), 'uk');
  assert.equal(resolveLocale('uk-UA'), 'uk');
  assert.equal(resolveLocale('pt-BR'), 'en');
  for (const code of localeCodes) assert.equal(resolveLocale(code), code);
});
