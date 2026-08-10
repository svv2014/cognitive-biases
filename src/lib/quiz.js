import { DEFAULT_QUIZ_MODE, QUIZ_LENGTH, quizBiasIds, quizPools } from '../data/quiz.js';

/**
 * Fisher-Yates using an injectable RNG so tests can run deterministically.
 * Returns a new array; the input is untouched.
 */
export function shuffle(items, rng = Math.random) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Picks a random run of questions from one of the pools. Each question also
 * carries a coin flip deciding which side the bias-revealing answer is rendered
 * on, so the answer is not always in the same position — the site would other-
 * wise teach position bias while explaining it.
 */
export function pickQuestions(rng = Math.random, length = QUIZ_LENGTH, mode = DEFAULT_QUIZ_MODE) {
  const pool = quizPools[mode] ?? quizBiasIds;
  return shuffle(pool, rng)
    .slice(0, Math.min(length, pool.length))
    .map((biasId) => ({ biasId, biasedFirst: rng() < 0.5 }));
}

/**
 * Turns the answer map into a result. `answers` maps biasId -> true when the
 * bias-revealing option was chosen.
 */
export function scoreQuiz(questions, answers) {
  const matched = questions.map((q) => q.biasId).filter((id) => answers[id] === true);
  return {
    matched,
    count: matched.length,
    total: questions.length,
  };
}
