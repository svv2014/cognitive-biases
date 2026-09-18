/**
 * The doors on the home page. People rarely know a bias by name, but they
 * always know what they are doing, so the home page starts from the moment
 * rather than the term.
 *
 * `biasIds` is a hand-picked, ordered shortlist — the ones most likely to be in
 * the room — and `cats` is where "see all" leads in the dictionary. Titles and
 * hints live in each locale as `ui.sit<Key>` and `ui.sit<Key>Hint`.
 */
export const situations = [
  {
    id: 'money',
    key: 'Money',
    color: 'money',
    cats: ['money'],
    biasIds: ['anchoring', 'sunk-cost-fallacy', 'framing-effect', 'gamblers-fallacy', 'zero-risk-bias'],
  },
  {
    id: 'judging',
    key: 'Judging',
    color: 'social',
    cats: ['social'],
    biasIds: [
      'fundamental-attribution-error',
      'halo-effect',
      'in-group-favoritism',
      'stereotyping',
      'just-world-hypothesis',
    ],
  },
  {
    id: 'arguing',
    key: 'Arguing',
    color: 'politics',
    cats: ['politics'],
    biasIds: ['confirmation-bias', 'naive-realism', 'backfire-effect', 'false-consensus', 'availability-cascade'],
  },
  {
    id: 'learning',
    key: 'Learning',
    color: 'learning',
    cats: ['learning'],
    biasIds: ['dunning-kruger-effect', 'curse-of-knowledge', 'belief-bias', 'google-effect', 'blind-spot-bias'],
  },
  {
    id: 'remembering',
    key: 'Remembering',
    color: 'memory',
    cats: ['memory'],
    biasIds: ['false-memory', 'declinism', 'suggestibility', 'cryptomnesia', 'optimism-bias'],
  },
  {
    id: 'ai',
    key: 'Ai',
    color: 'ai-human',
    cats: ['ai-human', 'ai-agent', 'ai-loop'],
    biasIds: [
      'sycophancy',
      'automation-bias',
      'cognitive-offloading',
      'competence-misattribution',
      'eliza-effect',
      'feedback-loop-amplification',
    ],
  },
];
