/**
 * The quiz pools. Each entry names a bias that has a question written for it in
 * every locale file (`quiz.questions[<id>]`), so questions live alongside the
 * rest of the translated copy and inherit the same fallback behaviour.
 *
 * Two modes share one question format:
 *
 *   `human` — the classic self-test: eight everyday situations.
 *   `ai`    — the same idea for someone working with a model. The questions ask
 *             what you *do*, not what the model does, because the only half of
 *             the loop you control is your own. Machines get their own probes,
 *             which are behavioural rather than self-reported — see
 *             `scripts/build-machine-data.mjs` and `/self-test.json`.
 *
 * Each pool is deliberately larger than QUIZ_LENGTH so repeat runs differ.
 */
export const quizBiasIds = [
  'fundamental-attribution-error',
  'self-serving-bias',
  'in-group-favoritism',
  'bandwagon-effect',
  'halo-effect',
  'curse-of-knowledge',
  'spotlight-effect',
  'availability-heuristic',
  'just-world-hypothesis',
  'dunning-kruger-effect',
  'anchoring',
  'google-effect',
  'reactance',
  'confirmation-bias',
  'sunk-cost-fallacy',
  'gamblers-fallacy',
  'status-quo-bias',
  'survivorship-bias',
];

export const aiQuizBiasIds = [
  'algorithm-aversion',
  'eliza-effect',
  'cognitive-offloading',
  'competence-misattribution',
  'sycophancy',
  'self-preference-bias',
  'verbosity-bias',
  'position-bias',
  'feedback-loop-amplification',
  'model-collapse',
  'algorithmic-lock-in',
  'machine-groupthink',
];

/** Mode id -> pool. The order here is the order of the mode switcher. */
export const quizPools = {
  human: quizBiasIds,
  ai: aiQuizBiasIds,
};

export const quizModes = Object.keys(quizPools);

export const DEFAULT_QUIZ_MODE = 'human';

/** How many questions a single run asks. */
export const QUIZ_LENGTH = 8;
