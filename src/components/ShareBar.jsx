import { useState } from 'react';
import { t } from '../locales/index.js';
import { absoluteLink, drawCard } from '../lib/share.js';

const MARK = ['#177a83', '#e95a53', '#f9b628'];

/**
 * Share a result: the system share sheet where there is one, otherwise the
 * link goes to the clipboard. "Save image" draws a card and downloads it.
 */
export default function ShareBar({ locale, hash, text, card }) {
  const [copied, setCopied] = useState(false);
  const url = absoluteLink(hash);

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: t(locale, 'title'), text, url });
        return;
      }
    } catch (err) {
      // The person closed the share sheet; nothing to do.
      if (err?.name === 'AbortError') return;
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no clipboard either — the link is still in the address bar of the card page */
    }
  };

  const save = async () => {
    const blob = await drawCard({
      brand: t(locale, 'title'),
      footer: url.replace(/^https?:\/\//, '').split('#')[0].replace(/\/$/, ''),
      colors: MARK,
      ...card,
    });
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'cognitive-biases.png';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  return (
    <div className="share">
      <button type="button" className="button button--primary" onClick={share}>
        {copied ? t(locale, 'shareCopied') : t(locale, 'share')}
      </button>
      <button type="button" className="button" onClick={save}>
        {t(locale, 'shareImage')}
      </button>
    </div>
  );
}
