import { useState } from 'react';
import { td } from '../../locales/index.js';

// Half of visitors see each anchor. The truth sits between them, so neither
// anchor is absurd on its face — which is what lets it work.
const LOW = 2000;
const HIGH = 12000;
const TRUTH = 6650;

export default function Anchoring({ locale, random, onDone }) {
  const [anchor] = useState(() => (random() < 0.5 ? LOW : HIGH));
  const [step, setStep] = useState('compare');
  const [guess, setGuess] = useState('');
  const fmt = new Intl.NumberFormat(locale);
  const value = Number(String(guess).replace(/[^\d]/g, ''));

  if (step === 'compare') {
    return (
      <div className="demo__step">
        <p className="demo__prompt">{td(locale, 'anchoring.q1', { anchor: fmt.format(anchor) })}</p>
        <div className="demo__choices">
          <button type="button" className="button" onClick={() => setStep('guess')}>
            {td(locale, 'anchoring.longer')}
          </button>
          <button type="button" className="button" onClick={() => setStep('guess')}>
            {td(locale, 'anchoring.shorter')}
          </button>
        </div>
      </div>
    );
  }

  if (step === 'guess') {
    return (
      <form
        className="demo__step"
        onSubmit={(e) => {
          e.preventDefault();
          if (!(value > 0)) return;
          setStep('reveal');
          onDone();
        }}
      >
        <label className="demo__prompt" htmlFor="demo-guess">
          {td(locale, 'anchoring.q2')}
        </label>
        <div className="demo__choices">
          <span className="demo__input">
            <input
              id="demo-guess"
              inputMode="numeric"
              autoComplete="off"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              autoFocus
            />
            <span>{td(locale, 'anchoring.unit')}</span>
          </span>
          <button type="submit" className="button button--primary" disabled={!(value > 0)}>
            {td(locale, 'show')}
          </button>
        </div>
      </form>
    );
  }

  // Where the guess, the anchor and the truth sit on one scale.
  const max = Math.max(HIGH, value, TRUTH) * 1.08;
  // Kept off the very ends so a centred label never spills past the card.
  const at = (n) => `${Math.min(88, Math.max(12, (n / max) * 100))}%`;

  return (
    <div className="demo__step">
      <p className="demo__result">
        {td(locale, 'anchoring.reveal', { truth: fmt.format(TRUTH), guess: fmt.format(value) })}
      </p>
      <div className="demo__scale" aria-hidden="true">
        <span className="demo__mark demo__mark--anchor" style={{ left: at(anchor) }}>
          {td(locale, 'anchoring.markAnchor')}
        </span>
        <span className="demo__mark demo__mark--truth" style={{ left: at(TRUTH) }}>
          {td(locale, 'anchoring.markTruth')}
        </span>
        <span className="demo__mark demo__mark--you" style={{ left: at(value) }}>
          {td(locale, 'anchoring.markYou')}
        </span>
      </div>
      <p className="demo__explain">
        {td(locale, 'anchoring.explain', {
          anchor: fmt.format(anchor),
          low: fmt.format(LOW),
          high: fmt.format(HIGH),
        })}
      </p>
    </div>
  );
}
