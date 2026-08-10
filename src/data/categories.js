/**
 * Bias categories, in two families.
 *
 * `classic` — the six original categories, describing *why a human mind* errs.
 * Colours are inherited from the original design; `belief` was nudged darker
 * (#1d8b95 -> #177a83) because neither black nor white text reached WCAG AA
 * against the old value.
 *
 * `ai` — three categories added for the age of language models. They answer a
 * different question: *who* in the loop is biased. A human can be biased about
 * a machine, a machine can be biased on its own, and a human and a machine
 * together can produce a bias neither has alone.
 *
 * Every colour/ink pair below is at least 4.5:1, so the colours are safe to use
 * as chip backgrounds.
 */
export const categories = [
  { id: 'memory', color: '#e95a53', ink: '#14161d', era: 'classic' },
  { id: 'social', color: '#135771', ink: '#ffffff', era: 'classic' },
  { id: 'learning', color: '#a7b849', ink: '#14161d', era: 'classic' },
  { id: 'belief', color: '#177a83', ink: '#ffffff', era: 'classic' },
  { id: 'money', color: '#27ae8d', ink: '#14161d', era: 'classic' },
  { id: 'politics', color: '#f9b628', ink: '#14161d', era: 'classic' },

  // Layer A: a human reasoning about a machine.
  { id: 'ai-human', color: '#7d5ba6', ink: '#ffffff', era: 'ai' },
  // Layer B: a model or agent reasoning on its own.
  { id: 'ai-agent', color: '#a8497a', ink: '#ffffff', era: 'ai' },
  // Layer C: the loop between them, where neither party is biased alone.
  { id: 'ai-loop', color: '#b0552e', ink: '#ffffff', era: 'ai' },
];

export const categoryIds = categories.map((c) => c.id);

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

export const classicCategories = categories.filter((c) => c.era === 'classic');

export const aiCategories = categories.filter((c) => c.era === 'ai');
