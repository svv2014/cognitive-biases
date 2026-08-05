/**
 * The quiz pool. Each entry names a bias that has a question written for it in
 * every locale file (`quiz.questions[<id>]`), so questions live alongside the
 * rest of the translated copy and inherit the same fallback behaviour.
 *
 * The pool is deliberately larger than QUIZ_LENGTH so repeat runs differ.
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

/** How many questions a single run asks. */
export const QUIZ_LENGTH = 8;
