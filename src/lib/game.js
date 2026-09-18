import { biases } from '../data/biases.js';

/**
 * Spot the bias: each round shows one bias's example and three names. The
 * scenario is the dictionary's own example sentence, so the game needs no
 * extra writing and stays in step with every translation.
 *
 * Distractors share a category with the answer when possible — a wrong option
 * should be plausible, or the round teaches nothing.
 */
export const GAME_LENGTH = 10;
export const OPTIONS = 3;

// Their example sentences name the bias outright ("given a placebo",
// "morally superior"), which would make the round a word match.
export const EXCLUDED = new Set(['placebo-effect', 'moral-luck']);

export const gamePool = biases.filter((b) => !EXCLUDED.has(b.id));

function shuffle(list, random) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildRound(answer, random) {
  const shared = (b) => b.categories.filter((c) => answer.categories.includes(c)).length;
  const others = gamePool.filter((b) => b.id !== answer.id);
  // Prefer close neighbours, but keep some randomness among them.
  const ranked = shuffle(others, random).sort((a, b) => shared(b) - shared(a));
  const distractors = shuffle(ranked.slice(0, 8), random).slice(0, OPTIONS - 1);
  return { answer: answer.id, options: shuffle([answer, ...distractors], random).map((b) => b.id) };
}

export function buildGame(random, length = GAME_LENGTH) {
  return shuffle(gamePool, random)
    .slice(0, length)
    .map((b) => buildRound(b, random));
}
