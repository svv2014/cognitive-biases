import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hrefBias, hrefDictionary, isRouteHash, parseHash } from '../src/lib/router.js';
import { dayNumber, pickDaily } from '../src/lib/daily.js';

test('parses the three routes', () => {
  assert.deepEqual(parseHash(''), { name: 'home', params: {} });
  assert.deepEqual(parseHash('#/'), { name: 'home', params: {} });
  assert.deepEqual(parseHash('#/dictionary'), { name: 'dictionary', params: {} });
  assert.deepEqual(parseHash('#/bias/anchoring'), { name: 'bias', id: 'anchoring', params: {} });
  assert.deepEqual(parseHash('#/play'), { name: 'play', params: {} });
});

test('dictionary params round-trip', () => {
  const href = hrefDictionary({ q: 'sunk cost', cats: ['money', 'belief'] });
  assert.deepEqual(parseHash(href).params, { q: 'sunk cost', cat: 'money,belief' });
  assert.equal(hrefDictionary(), '#/dictionary');
});

test('in-page anchors are not routes', () => {
  assert.equal(isRouteHash('#content'), false);
  assert.equal(isRouteHash(hrefBias('halo-effect')), true);
});

test('bias of the day is stable within a day and changes across days', () => {
  const items = Array.from({ length: 62 }, (_, i) => i);
  const morning = new Date(2026, 8, 18, 7);
  const night = new Date(2026, 8, 18, 23, 59);
  assert.equal(pickDaily(items, morning), pickDaily(items, night));
  assert.notEqual(pickDaily(items, morning), pickDaily(items, new Date(2026, 8, 19, 7)));
});

test('bias of the day visits every entry before repeating', () => {
  const items = Array.from({ length: 62 }, (_, i) => i);
  const start = new Date(2026, 0, 1);
  const seen = new Set();
  for (let d = 0; d < 62; d++) {
    seen.add(pickDaily(items, new Date(start.getFullYear(), start.getMonth(), start.getDate() + d)));
  }
  assert.equal(seen.size, 62);
  assert.equal(dayNumber(new Date(1970, 0, 2)), 1);
});

test('bias map layout is deterministic and keeps the two families apart', async () => {
  const { layoutBiases } = await import('../src/lib/biasMap/layout.js');
  const a = layoutBiases();
  const b = layoutBiases();
  assert.deepEqual(a, b);
  assert.equal(a.nodes.length, 62);
  assert.equal(a.links.length, 12);
  for (const n of a.nodes) {
    assert.ok(n.ai ? n.position[0] > 0 : n.position[0] < 0, `${n.id} is on the wrong side`);
  }
  // No two points sit on top of each other.
  for (let i = 0; i < a.nodes.length; i++) {
    for (let j = i + 1; j < a.nodes.length; j++) {
      const [p, q] = [a.nodes[i].position, a.nodes[j].position];
      assert.ok(Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) > 0.15, `${a.nodes[i].id} overlaps ${a.nodes[j].id}`);
    }
  }
});
