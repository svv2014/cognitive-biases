// Language-independent bias manifest. Every id has a matching icon at
// `public/icons/<id>.png` and a text entry in each file under `src/locales`.
export const biases = [
  { id: 'fundamental-attribution-error', categories: ['belief', 'social'] },
  { id: 'self-serving-bias', categories: ['money', 'belief', 'social'] },
  { id: 'in-group-favoritism', categories: ['social', 'belief', 'politics'] },
  { id: 'bandwagon-effect', categories: ['social', 'belief', 'politics'] },
  { id: 'groupthink', categories: ['social', 'belief', 'politics'] },
  { id: 'halo-effect', categories: ['social', 'belief', 'politics'] },
  { id: 'moral-luck', categories: ['social', 'belief', 'politics', 'memory'] },
  { id: 'false-consensus', categories: ['social', 'belief', 'politics'] },
  { id: 'curse-of-knowledge', categories: ['social', 'belief', 'politics', 'memory'] },
  { id: 'spotlight-effect', categories: ['social', 'memory'] },
  { id: 'availability-heuristic', categories: ['belief', 'learning', 'memory', 'politics', 'money'] },
  { id: 'defensive-attribution', categories: ['social', 'memory', 'politics'] },
  { id: 'just-world-hypothesis', categories: ['social', 'memory', 'politics', 'belief'] },
  { id: 'naive-realism', categories: ['social', 'memory', 'politics', 'belief'] },
  { id: 'naive-cynicism', categories: ['social', 'memory', 'politics', 'belief'] },
  { id: 'forer-effect', categories: ['memory', 'belief'] },
  { id: 'dunning-kruger-effect', categories: ['social', 'belief', 'learning', 'memory', 'politics', 'money'] },
  { id: 'anchoring', categories: ['belief', 'learning', 'memory', 'money'] },
  { id: 'automation-bias', categories: ['belief', 'learning', 'memory'] },
  { id: 'google-effect', categories: ['belief', 'learning', 'memory'] },
  { id: 'reactance', categories: ['social', 'money', 'politics'] },
  { id: 'confirmation-bias', categories: ['learning', 'memory', 'belief', 'politics'] },
  { id: 'backfire-effect', categories: ['learning', 'memory', 'belief', 'politics'] },
  { id: 'third-person-effect', categories: ['learning', 'memory', 'belief', 'politics', 'social'] },
  { id: 'belief-bias', categories: ['learning', 'memory', 'belief', 'politics'] },
  { id: 'availability-cascade', categories: ['learning', 'memory', 'belief', 'politics', 'social', 'money'] },
  { id: 'declinism', categories: ['memory', 'belief', 'social', 'politics'] },
  { id: 'status-quo-bias', categories: ['memory', 'belief', 'social', 'politics', 'money', 'learning'] },
  { id: 'sunk-cost-fallacy', categories: ['memory', 'belief', 'money'] },
  { id: 'gamblers-fallacy', categories: ['memory', 'belief', 'money'] },
  { id: 'zero-risk-bias', categories: ['politics', 'belief', 'money'] },
  { id: 'framing-effect', categories: ['belief', 'social', 'politics', 'money', 'learning'] },
  { id: 'stereotyping', categories: ['belief', 'social', 'politics', 'learning', 'memory'] },
  { id: 'outgroup-homogeneity-bias', categories: ['belief', 'social', 'politics', 'learning', 'memory', 'money'] },
  { id: 'authority-bias', categories: ['social', 'belief', 'money', 'politics'] },
  { id: 'placebo-effect', categories: ['memory', 'belief', 'money'] },
  { id: 'survivorship-bias', categories: ['social', 'belief', 'money', 'politics'] },
  { id: 'tachypsychia', categories: ['memory', 'belief', 'learning'] },
  { id: 'law-of-triviality', categories: ['memory', 'money', 'politics', 'social'] },
  { id: 'zeigarnik-effect', categories: ['memory', 'belief'] },
  { id: 'ikea-effect', categories: ['social', 'belief', 'money'] },
  { id: 'ben-franklin-effect', categories: ['social', 'belief', 'money', 'politics'] },
  { id: 'bystander-effect', categories: ['social', 'money'] },
  { id: 'suggestibility', categories: ['memory', 'social', 'belief', 'learning'] },
  { id: 'false-memory', categories: ['memory', 'social', 'belief'] },
  { id: 'cryptomnesia', categories: ['memory', 'social', 'belief'] },
  { id: 'clustering-illusion', categories: ['memory', 'belief'] },
  { id: 'pessimism-bias', categories: ['memory', 'belief'] },
  { id: 'optimism-bias', categories: ['memory', 'belief'] },
  { id: 'blind-spot-bias', categories: ['memory', 'belief', 'learning'] },

  // ---------------------------------------------------------------------
  // The age of AI. Three layers: a human reasoning about a machine, a model
  // reasoning on its own, and the loop between them.
  //
  // Each entry carries two extra fields the classic fifty do not need:
  //   `twin`   — the classic bias it rhymes with, so a reader can see that
  //              most of these are old failures wearing new clothes.
  //   `source` — the published work the entry is drawn from. These are recent
  //              and contested claims, so every one of them is attributable.
  // ---------------------------------------------------------------------

  // Layer A — a human reasoning about a machine.
  {
    id: 'algorithm-aversion',
    categories: ['ai-human', 'belief', 'social'],
    twin: 'automation-bias',
    source: {
      label: 'Kim, Consumer Psychology Review (2026)',
      url: 'https://myscp.onlinelibrary.wiley.com/doi/abs/10.1002/arcp.70008',
    },
  },
  {
    id: 'eliza-effect',
    categories: ['ai-human', 'belief', 'social'],
    twin: 'forer-effect',
    source: {
      label: 'Weizenbaum (1966); Placani, AI and Ethics (2024)',
      url: 'https://link.springer.com/article/10.1007/s43681-024-00419-4',
    },
  },
  {
    id: 'cognitive-offloading',
    categories: ['ai-human', 'memory', 'learning'],
    twin: 'google-effect',
    source: {
      label: 'Kim, Consumer Psychology Review (2026)',
      url: 'https://myscp.onlinelibrary.wiley.com/doi/abs/10.1002/arcp.70008',
    },
  },
  {
    id: 'competence-misattribution',
    categories: ['ai-human', 'belief', 'learning'],
    twin: 'dunning-kruger-effect',
    source: {
      label: 'The LLM Fallacy, arXiv:2604.14807',
      url: 'https://arxiv.org/abs/2604.14807',
    },
  },

  // Layer B — a model or agent reasoning on its own.
  {
    id: 'sycophancy',
    categories: ['ai-agent', 'social', 'belief'],
    twin: 'confirmation-bias',
    source: {
      label: 'Justice or Prejudice?, arXiv:2410.02736',
      url: 'https://arxiv.org/abs/2410.02736',
    },
  },
  {
    id: 'self-preference-bias',
    categories: ['ai-agent', 'belief'],
    twin: 'ikea-effect',
    source: {
      label: 'Self-Preference Bias in LLM-as-a-Judge, arXiv:2410.21819',
      url: 'https://arxiv.org/abs/2410.21819',
    },
  },
  {
    id: 'verbosity-bias',
    categories: ['ai-agent', 'belief', 'learning'],
    twin: 'halo-effect',
    source: {
      label: 'Justice or Prejudice?, arXiv:2410.02736',
      url: 'https://arxiv.org/abs/2410.02736',
    },
  },
  {
    id: 'position-bias',
    categories: ['ai-agent', 'memory', 'belief'],
    twin: 'anchoring',
    source: {
      label: 'Justice or Prejudice?, arXiv:2410.02736',
      url: 'https://arxiv.org/abs/2410.02736',
    },
  },

  // Layer C — the loop, where neither party is biased alone.
  {
    id: 'feedback-loop-amplification',
    categories: ['ai-loop', 'social', 'belief', 'politics'],
    twin: 'availability-cascade',
    source: {
      label: 'Glickman & Sharot, Nature Human Behaviour (2024)',
      url: 'https://www.nature.com/articles/s41562-024-02077-2',
    },
  },
  {
    id: 'model-collapse',
    categories: ['ai-loop', 'learning', 'memory'],
    twin: 'survivorship-bias',
    source: {
      label: 'Shumailov et al., Nature (2024)',
      url: 'https://www.nature.com/articles/s41586-024-07566-y',
    },
  },
  {
    id: 'algorithmic-lock-in',
    categories: ['ai-loop', 'politics', 'belief'],
    twin: 'status-quo-bias',
    source: {
      label: 'The Lock-in Hypothesis, arXiv:2506.06166',
      url: 'https://arxiv.org/abs/2506.06166',
    },
  },
  {
    id: 'machine-groupthink',
    categories: ['ai-loop', 'social', 'politics'],
    twin: 'groupthink',
    source: {
      label: 'TRiSM for Agentic AI, Information Fusion (2026)',
      url: 'https://www.sciencedirect.com/science/article/pii/S2666651026000069',
    },
  },
];

export const biasIds = biases.map((b) => b.id);

/**
 * A bias belongs to the AI era when it carries one of the three `ai-*`
 * categories. Deriving it here keeps the fifty classic entries untouched.
 */
const AI_CATEGORIES = new Set(['ai-human', 'ai-agent', 'ai-loop']);

export const isAiEra = (bias) => bias.categories.some((c) => AI_CATEGORIES.has(c));

export const classicBiases = biases.filter((b) => !isAiEra(b));

export const aiBiases = biases.filter(isAiEra);

/** The AI layer a bias sits in, or null for the classic fifty. */
export const layerOf = (bias) => bias.categories.find((c) => AI_CATEGORIES.has(c)) ?? null;
