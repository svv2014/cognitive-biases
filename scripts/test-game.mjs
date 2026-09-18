import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildGame, EXCLUDED, GAME_LENGTH, OPTIONS } from '../src/lib/game.js';
import { biasIds } from '../src/data/biases.js';

const seeded = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

test('a game has distinct answers and valid, distinct options', () => {
  for (let s = 1; s < 60; s++) {
    const game = buildGame(seeded(s));
    assert.equal(game.length, GAME_LENGTH);
    assert.equal(new Set(game.map((r) => r.answer)).size, GAME_LENGTH);
    for (const r of game) {
      assert.equal(r.options.length, OPTIONS);
      assert.equal(new Set(r.options).size, OPTIONS);
      assert.ok(r.options.includes(r.answer));
      for (const id of r.options) assert.ok(biasIds.includes(id));
      assert.ok(!EXCLUDED.has(r.answer));
    }
  }
});

test('the answer is not always in the same slot', () => {
  const slots = new Set();
  for (let s = 1; s < 30; s++) for (const r of buildGame(seeded(s))) slots.add(r.options.indexOf(r.answer));
  assert.equal(slots.size, OPTIONS);
});

test('shared results round-trip and reject tampering', async () => {
  const { resultHash, readResult } = await import('../src/lib/share.js');
  const { parseHash } = await import('../src/lib/router.js');
  const back = (r) => readResult(parseHash(resultHash(r)).params);
  assert.deepEqual(back({ kind: 'game', score: 7, total: 10 }), { kind: 'game', score: 7, total: 10 });
  assert.deepEqual(back({ kind: 'quiz', mode: 'ai', total: 8, ids: ['sycophancy', 'position-bias'] }), {
    kind: 'quiz', mode: 'ai', total: 8, ids: ['sycophancy', 'position-bias'],
  });
  assert.deepEqual(readResult({ k: 'game', s: '999', t: '10' }), { kind: 'game', score: 10, total: 10 });
  assert.deepEqual(readResult({ k: 'quiz', m: 'x', t: '8', b: 'anchoring,<script>,anchoring' }).ids, ['anchoring']);
  assert.equal(readResult({ k: 'nope' }), null);
  assert.equal(readResult({ k: 'game', s: 'a', t: 'b' }), null);
});
