import { useState } from 'react';
import { getBias, td } from '../../locales/index.js';
import { hrefBias } from '../../lib/router.js';
import Anchoring from './Anchoring.jsx';
import Framing from './Framing.jsx';
import Forer from './Forer.jsx';

/**
 * Feel a bias before reading its name. Each demo runs entirely in the page —
 * nothing is sent anywhere — and ends by naming the bias and linking to it.
 */
export const demos = [
  { id: 'anchoring', biasId: 'anchoring', Component: Anchoring },
  { id: 'framing', biasId: 'framing-effect', Component: Framing },
  { id: 'forer', biasId: 'forer-effect', Component: Forer },
];

export default function DemoStage({ locale, random = Math.random }) {
  const [index, setIndex] = useState(() => Math.floor(random() * demos.length));
  // Bumped on "try another" so a revisited demo starts from its first step.
  const [run, setRun] = useState(0);
  const [done, setDone] = useState(false);
  const demo = demos[index];
  const bias = getBias(locale, demo.biasId);

  const next = () => {
    setIndex((i) => (i + 1) % demos.length);
    setRun((r) => r + 1);
    setDone(false);
  };

  return (
    <section className="demo" aria-labelledby="demo-title">
      <div className="demo__head">
        <p className="demo__kicker" id="demo-title">
          {td(locale, 'kicker')}
        </p>
        <span className="demo__count">
          {index + 1} / {demos.length}
        </span>
      </div>

      <div className="demo__body" aria-live="polite">
        <demo.Component
          key={`${demo.id}-${run}`}
          locale={locale}
          random={random}
          onDone={() => setDone(true)}
        />
      </div>

      <div className="demo__foot">
        {done && (
          <a className="text-link" href={hrefBias(demo.biasId)}>
            {td(locale, 'readAbout', { name: bias.name })} →
          </a>
        )}
        <button type="button" className="demo__another" onClick={next}>
          {td(locale, 'another')} ↻
        </button>
      </div>
    </section>
  );
}
