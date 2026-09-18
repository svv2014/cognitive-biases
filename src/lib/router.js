import { useEffect, useState } from 'react';

/**
 * Hash routes, so the build keeps working from the GitHub Pages sub-path and
 * from disk without a server rewriting paths:
 *
 *   #/                         home
 *   #/dictionary?q=…&cat=a,b   the searchable list
 *   #/bias/<id>                one bias
 *   #/play                     the spot-the-bias game
 *   #/result?k=…               a shared result (see lib/share.js)
 *
 * Only hashes that start with "#/" are routes. Anything else ("#content" from
 * the skip link) is an in-page anchor and leaves the current route alone.
 */
export const isRouteHash = (hash) => typeof hash === 'string' && hash.startsWith('#/');

export function parseHash(hash) {
  if (!isRouteHash(hash)) return { name: 'home', params: {} };
  const [path, search = ''] = hash.slice(1).split('?');
  const params = Object.fromEntries(new URLSearchParams(search));
  const [, section, id] = path.split('/');
  if (section === 'dictionary') return { name: 'dictionary', params };
  if (section === 'bias' && id) return { name: 'bias', id: decodeURIComponent(id), params };
  if (section === 'play') return { name: 'play', params };
  if (section === 'result') return { name: 'result', params };
  return { name: 'home', params };
}

export const hrefHome = () => '#/';
export const hrefPlay = () => '#/play';
export const hrefBias = (id) => `#/bias/${encodeURIComponent(id)}`;

export function hrefDictionary({ q, cats } = {}) {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (cats?.length) params.set('cat', cats.join(','));
  const search = params.toString();
  return search ? `#/dictionary?${search}` : '#/dictionary';
}

const currentHash = () => (typeof location === 'undefined' ? '' : location.hash);

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash(currentHash()));

  useEffect(() => {
    const onChange = () => {
      const hash = currentHash();
      if (hash && !isRouteHash(hash)) return;
      setRoute(parseHash(hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
