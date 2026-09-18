import { useEffect, useRef, useState } from 'react';
import { getBias, getCategoryName, t } from '../locales/index.js';
import { hrefBias } from '../lib/router.js';
import { layoutBiases } from '../lib/biasMap/layout.js';

const isDark = () => document.documentElement.dataset.theme === 'dark';

/**
 * The 3D bias map. three.js is imported only once the map scrolls near the
 * viewport, and if WebGL is missing the component renders nothing — the twins
 * list beside it carries the same information.
 *
 * `controller` is an optional ref the parent can use to highlight a bias from
 * outside the canvas (e.g. hovering a row in the twins list).
 */
export default function BiasMap({ locale, controller }) {
  const box = useRef(null);
  const [status, setStatus] = useState('idle');
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return undefined;
    let api = null;
    let cancelled = false;
    let themeWatch = null;

    const start = async () => {
      setStatus('loading');
      try {
        const { mount } = await import('../lib/biasMap/scene.js');
        if (cancelled) return;
        api = mount(el, layoutBiases(), {
          reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
          dark: isDark(),
          onHover: setHover,
          onSelect: (id) => {
            location.hash = hrefBias(id);
          },
        });
        if (controller) controller.current = api;
        themeWatch = new MutationObserver(() => api.setTheme(isDark()));
        themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        setStatus('ready');
      } catch {
        // No WebGL, or the chunk failed to load: the list below still works.
        setStatus('unsupported');
      }
    };

    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        near.disconnect();
        start();
      },
      { rootMargin: '300px' }
    );
    near.observe(el);

    return () => {
      cancelled = true;
      near.disconnect();
      themeWatch?.disconnect();
      api?.dispose();
      if (controller) controller.current = null;
    };
  }, [controller]);

  if (status === 'unsupported') return null;

  const hovered = hover && getBias(locale, hover.id);

  return (
    <div className="map" data-status={status}>
      <div className="map__canvas" ref={box} aria-hidden="true" />
      <p className="map__legend map__legend--left" aria-hidden="true">
        {t(locale, 'mapHuman')}
      </p>
      <p className="map__legend map__legend--right" aria-hidden="true">
        {t(locale, 'mapMachine')}
      </p>
      <p className="map__hint" aria-hidden="true">
        {t(locale, 'mapHint')}
      </p>
      {hovered && (
        <div className="map__tip" style={{ left: hover.x, top: hover.y }} aria-hidden="true">
          <strong>{hovered.name}</strong>
          <span>{getCategoryName(locale, groupOfId(hover.id))}</span>
        </div>
      )}
    </div>
  );
}

const groups = Object.fromEntries(layoutBiases().nodes.map((n) => [n.id, n.group]));
const groupOfId = (id) => groups[id];
