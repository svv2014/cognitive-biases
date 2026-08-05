// Exercises the quiz picking and scoring logic.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { QUIZ_LENGTH, quizBiasIds } from '../src/data/quiz.js';
import { pickQuestions, scoreQuiz, shuffle } from '../src/lib/quiz.js';

/** Deterministic RNG so runs are reproducible. */
function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
}

test('shuffle keeps every element exactly once', () => {
  const out = shuffle(quizBiasIds, seeded(1));
  assert.equal(out.length, quizBiasIds.length);
  assert.deepEqual([...out].sort(), [...quizBiasIds].sort());
});

test('shuffle does not mutate its input', () => {
  const copy = [...quizBiasIds];
  shuffle(quizBiasIds, seeded(7));
  assert.deepEqual(quizBiasIds, copy);
});

test('a run asks QUIZ_LENGTH distinct questions', () => {
  const qs = pickQuestions(seeded(3));
  assert.equal(qs.length, QUIZ_LENGTH);
  assert.equal(new Set(qs.map((q) => q.biasId)).size, QUIZ_LENGTH);
});

test('every picked question is in the pool', () => {
  for (let seed = 1; seed <= 40; seed++) {
    for (const q of pickQuestions(seeded(seed))) {
      assert.ok(quizBiasIds.includes(q.biasId), `${q.biasId} not in pool`);
    }
  }
});

test('runs differ across seeds', () => {
  const a = pickQuestions(seeded(1)).map((q) => q.biasId).join();
  const b = pickQuestions(seeded(999)).map((q) => q.biasId).join();
  assert.notEqual(a, b);
});

test('answer side is randomised, not always the same', () => {
  const flags = [];
  for (let seed = 1; seed <= 30; seed++) {
    flags.push(...pickQuestions(seeded(seed)).map((q) => q.biasedFirst));
  }
  assert.ok(flags.includes(true) && flags.includes(false), 'biased option never switches sides');
});

test('scoring counts only bias-revealing answers', () => {
  const qs = pickQuestions(seeded(5));
  const answers = {};
  qs.forEach((q, i) => {
    answers[q.biasId] = i % 2 === 0;
  });
  const result = scoreQuiz(qs, answers);
  assert.equal(result.total, QUIZ_LENGTH);
  assert.equal(result.count, Math.ceil(QUIZ_LENGTH / 2));
  assert.ok(result.matched.every((id) => answers[id] === true));
});

test('all-fair answers score zero', () => {
  const qs = pickQuestions(seeded(11));
  const answers = Object.fromEntries(qs.map((q) => [q.biasId, false]));
  assert.deepEqual(scoreQuiz(qs, answers), { matched: [], count: 0, total: QUIZ_LENGTH });
});

test('all-biased answers score full marks', () => {
  const qs = pickQuestions(seeded(13));
  const answers = Object.fromEntries(qs.map((q) => [q.biasId, true]));
  const result = scoreQuiz(qs, answers);
  assert.equal(result.count, QUIZ_LENGTH);
  assert.deepEqual(result.matched, qs.map((q) => q.biasId));
});

test('unanswered questions do not count', () => {
  const qs = pickQuestions(seeded(17));
  assert.equal(scoreQuiz(qs, {}).count, 0);
});
