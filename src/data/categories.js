/**
 * The six bias categories. Colours are inherited from the original design;
 * `belief` was nudged darker (#1d8b95 -> #177a83) because neither black nor
 * white text reached WCAG AA against the old value. Every pair below is at
 * least 4.5:1, so the colours are safe to use as chip backgrounds.
 */
export const categories = [
  { id: 'memory', color: '#e95a53', ink: '#14161d' },
  { id: 'social', color: '#135771', ink: '#ffffff' },
  { id: 'learning', color: '#a7b849', ink: '#14161d' },
  { id: 'belief', color: '#177a83', ink: '#ffffff' },
  { id: 'money', color: '#27ae8d', ink: '#14161d' },
  { id: 'politics', color: '#f9b628', ink: '#14161d' },
];

export const categoryIds = categories.map((c) => c.id);

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
