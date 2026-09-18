import { useState } from 'react';
import { td } from '../../locales/index.js';

/**
 * Forer (1949): a "personal" reading that is the same for everyone. The month
 * picker does nothing, which is the point.
 */
export default function Forer({ locale, onDone }) {
  const [step, setStep] = useState('month');
  const [rating, setRating] = useState(null);
  const months = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { month: 'short' }).format(new Date(2026, i, 1))
  );

  if (step === 'month') {
    return (
      <div className="demo__step">
        <p className="demo__prompt">{td(locale, 'forer.q')}</p>
        <div className="demo__months">
          {months.map((m) => (
            <button key={m} type="button" className="demo__month" onClick={() => setStep('reading')}>
              {m}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const reading = (
    <blockquote className="demo__reading">
      {td(locale, 'forer.reading').map((line) => (
        <p key={line}>{line}</p>
      ))}
    </blockquote>
  );

  if (step === 'reading') {
    return (
      <div className="demo__step">
        {reading}
        <p className="demo__prompt demo__prompt--small">{td(locale, 'forer.rate')}</p>
        <div className="demo__rating" role="group" aria-label={td(locale, 'forer.rate')}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className="demo__month"
              onClick={() => {
                setRating(n);
                setStep('reveal');
                onDone();
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="demo__scale-labels">
          <span>{td(locale, 'forer.low')}</span>
          <span>{td(locale, 'forer.high')}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="demo__step">
      <p className="demo__result">{td(locale, 'forer.reveal', { rating })}</p>
      <p className="demo__explain">{td(locale, 'forer.explain')}</p>
    </div>
  );
}
