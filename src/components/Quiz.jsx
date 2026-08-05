import { useEffect, useMemo, useRef, useState } from 'react';
import { QUIZ_LENGTH } from '../data/quiz.js';
import { pickQuestions, scoreQuiz } from '../lib/quiz.js';
import { getBias, tq } from '../locales/index.js';

function ResultRow({ locale, biasId, onOpen }) {
  const bias = getBias(locale, biasId);
  return (
    <li className="quiz__result">
      <img
        className="quiz__result-icon"
        src={`${import.meta.env.BASE_URL}icons/${biasId}.png`}
        alt=""
        loading="lazy"
      />
      <div className="quiz__result-text">
        <p className="quiz__result-name">{bias.name}</p>
        <p className="quiz__result-desc">{bias.description}</p>
        <button type="button" className="quiz__link" onClick={() => onOpen(bias.name)}>
          {tq(locale, 'seeCard')}
        </button>
      </div>
    </li>
  );
}

export default function Quiz({ locale, onClose, onOpenBias }) {
  const [questions, setQuestions] = useState(() => pickQuestions());
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const panelRef = useRef(null);
  const headingRef = useRef(null);

  const done = step >= questions.length;
  const result = useMemo(() => scoreQuiz(questions, answers), [questions, answers]);

  // Close on Escape, and keep focus inside the dialog while it is open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const scrollLocked = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    headingRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = scrollLocked;
    };
  }, [onClose]);

  const answer = (biasId, isBiased) => {
    setAnswers((prev) => ({ ...prev, [biasId]: isBiased }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setQuestions(pickQuestions());
    setAnswers({});
    setStep(0);
  };

  const current = questions[step];

  return (
    <div className="quiz__backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="quiz"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-heading"
        ref={panelRef}
      >
        <div className="quiz__head">
          <h2 className="quiz__title" id="quiz-heading" tabIndex={-1} ref={headingRef}>
            {done ? tq(locale, 'resultTitle') : tq(locale, 'title')}
          </h2>
          <button type="button" className="quiz__close" onClick={onClose} aria-label={tq(locale, 'close')}>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {!done && (
          <>
            <div className="quiz__meter" aria-hidden="true">
              <span style={{ width: `${(step / questions.length) * 100}%` }} />
            </div>
            <p className="quiz__progress">
              {tq(locale, 'progress', { n: step + 1, total: questions.length })}
            </p>

            <p className="quiz__prompt">{tq(locale, `questions.${current.biasId}.prompt`)}</p>

            <div className="quiz__options">
              {(current.biasedFirst ? [true, false] : [false, true]).map((isBiased) => (
                <button
                  key={String(isBiased)}
                  type="button"
                  className="quiz__option"
                  onClick={() => answer(current.biasId, isBiased)}
                >
                  {tq(locale, `questions.${current.biasId}.${isBiased ? 'biased' : 'fair'}`)}
                </button>
              ))}
            </div>

            <p className="quiz__disclaimer">{tq(locale, 'disclaimer')}</p>
          </>
        )}

        {done && (
          <div className="quiz__results">
            <p className="quiz__lead">
              {result.count === 0
                ? tq(locale, 'resultNone')
                : result.count === result.total
                  ? tq(locale, 'resultAll')
                  : tq(locale, 'resultLead', { count: result.count, total: result.total })}
            </p>

            {result.count > 0 && (
              <>
                <p className="quiz__hint">{tq(locale, 'resultHint')}</p>
                <ul className="quiz__result-list">
                  {result.matched.map((id) => (
                    <ResultRow key={id} locale={locale} biasId={id} onOpen={onOpenBias} />
                  ))}
                </ul>
              </>
            )}

            {/* Kept above the buttons so it stays in view without scrolling. */}
            <p className="quiz__disclaimer quiz__disclaimer--result">{tq(locale, 'disclaimer')}</p>

            <div className="quiz__actions">
              <button type="button" className="button button--primary" onClick={restart}>
                {tq(locale, 'again')}
              </button>
              <button type="button" className="button" onClick={onClose}>
                {tq(locale, 'close')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { QUIZ_LENGTH };
