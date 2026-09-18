import { useEffect, useRef, useState } from 'react';
import { td } from '../locales/index.js';

// What each colour means, per scene: [palette key, caption key].
const LEGENDS = {
  'model-collapse': [['muted', 'legend.start'], ['accent', 'legend.now']],
  'feedback-loop-amplification': [['left', 'legend.oneView'], ['right', 'legend.otherView']],
  'survivorship-bias': [['ink', 'legend.holes'], ['alarm', 'legend.lost']],
  anchoring: [['alarm', 'legend.anchor'], ['accent', 'legend.truth'], ['ink', 'legend.mean']],
};

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/** Scene colours, read from the theme tokens so both themes stay in step. */
function palette() {
  return {
    left: css('--cat-belief'),
    right: css('--cat-ai-human'),
    accent: css('--accent'),
    alarm: css('--cat-memory'),
    muted: css('--border-strong'),
    ink: css('--text'),
  };
}

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme);
  useEffect(() => {
    const watch = new MutationObserver(() => setTheme(document.documentElement.dataset.theme));
    watch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => watch.disconnect();
  }, []);
  return theme;
}

/**
 * A short looping simulation of how a bias works. three.js and the scene code
 * load only when this scrolls near the viewport; without WebGL, or for readers
 * who prefer reduced motion and have not pressed play, nothing heavy runs.
 */
export default function MechanismScene({ locale, biasId }) {
  const box = useRef(null);
  const theme = useTheme();
  const [status, setStatus] = useState('idle');
  const [caption, setCaption] = useState(null);
  const [run, setRun] = useState(() =>
    typeof matchMedia === 'undefined' ? 0 : matchMedia('(prefers-reduced-motion: reduce)').matches ? -1 : 0
  );

  useEffect(() => {
    const el = box.current;
    if (!el || run < 0) return undefined;
    let dispose = null;
    let cancelled = false;
    const format = (n) => new Intl.NumberFormat(locale).format(n);

    const start = async () => {
      setStatus('loading');
      try {
        const { scenes } = await import('../lib/scenes/index.js');
        if (cancelled) return;
        dispose = scenes[biasId](el, {
          palette: palette(),
          random: Math.random,
          format,
          onCaption: (key, vars) => setCaption({ key, vars }),
        });
        setStatus('ready');
      } catch {
        setStatus('unsupported');
      }
    };

    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        near.disconnect();
        start();
      },
      { rootMargin: '200px' }
    );
    near.observe(el);

    return () => {
      cancelled = true;
      near.disconnect();
      dispose?.();
    };
    // Rebuilt on theme change (colours) and on replay; locale only affects captions.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biasId, theme, run]);

  if (status === 'unsupported') return null;
  // Read at render so the swatches follow the theme like the canvas does.
  const colors = typeof document === 'undefined' || !document.documentElement.style ? {} : palette();

  return (
    <section className="scene" aria-labelledby="scene-title">
      <div className="scene__head">
        <h2 className="scene__title" id="scene-title">
          {td(locale, 'scenes.title')}
        </h2>
        <span className="scene__badge">{td(locale, 'scenes.simulated')}</span>
      </div>
      <div className="scene__stage">
        <div className="scene__canvas" ref={box} aria-hidden="true" />
        {run < 0 && (
          <button type="button" className="button button--primary scene__play" onClick={() => setRun(1)}>
            ▶ {td(locale, 'scenes.play')}
          </button>
        )}
      </div>
      <ul className="scene__legend">
        {LEGENDS[biasId].map(([color, key]) => (
          <li key={key}>
            <span className="scene__swatch" style={{ background: colors[color] }} />
            {td(locale, `scenes.${key}`)}
          </li>
        ))}
      </ul>
      <p className="scene__caption">
        {caption ? td(locale, `scenes.${caption.key}`, caption.vars) : td(locale, `scenes.intro`)}
      </p>
    </section>
  );
}
