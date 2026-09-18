import { useState } from 'react';
import { t } from '../locales/index.js';

/**
 * A prompt the reader can paste into a chat with a model. The copy button is a
 * convenience: when the clipboard is unavailable the text is still selectable.
 */
export default function PromptBox({ locale, text, compact = false }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — the text is on screen to select by hand */
    }
  };

  return (
    <figure className={`prompt${compact ? ' prompt--compact' : ''}`}>
      <figcaption className="prompt__head">
        <span className="card__example-label">{t(locale, 'promptLabel')}</span>
        <button type="button" className="prompt__copy" onClick={copy} aria-live="polite">
          {copied ? t(locale, 'copied') : t(locale, 'copy')}
        </button>
      </figcaption>
      <blockquote className="prompt__text">{text}</blockquote>
    </figure>
  );
}
