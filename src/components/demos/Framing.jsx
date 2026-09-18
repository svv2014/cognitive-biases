import { useState } from 'react';
import { td } from '../../locales/index.js';

/**
 * The Asian-disease problem (Tversky & Kahneman, 1981). The visitor sees one
 * frame at random, chooses, and is then shown the frame they did not see.
 */
export default function Framing({ locale, random, onDone }) {
  const [frame] = useState(() => (random() < 0.5 ? 'gain' : 'loss'));
  const [choice, setChoice] = useState(null);
  const other = frame === 'gain' ? 'loss' : 'gain';

  const options = (f) => [td(locale, `framing.${f}A`), td(locale, `framing.${f}B`)];

  if (!choice) {
    return (
      <div className="demo__step">
        <p className="demo__prompt">{td(locale, 'framing.setup')}</p>
        <div className="demo__options">
          {options(frame).map((text, i) => (
            <button
              key={i}
              type="button"
              className="demo__option"
              onClick={() => {
                setChoice(i === 0 ? 'sure' : 'gamble');
                onDone();
              }}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="demo__step">
      <p className="demo__result">
        {td(locale, choice === 'sure' ? 'framing.youSure' : 'framing.youGamble')}
      </p>
      <p className="demo__prompt demo__prompt--small">{td(locale, 'framing.reveal')}</p>
      <ul className="demo__other">
        {options(other).map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
      <p className="demo__explain">{td(locale, 'framing.explain')}</p>
    </div>
  );
}
