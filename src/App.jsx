import { useEffect, useMemo, useState } from 'react';
import { biases } from './data/biases.js';
import { categories } from './data/categories.js';
import { DEFAULT_LOCALE, getBias, localeOptions, resolveLocale, t } from './locales/index.js';
import { useDebounced } from './hooks/useDebounced.js';
import { usePersistentState } from './hooks/usePersistentState.js';
import Header from './components/Header.jsx';
import Toolbar from './components/Toolbar.jsx';
import BiasCard from './components/BiasCard.jsx';
import EmptyState from './components/EmptyState.jsx';
import Footer from './components/Footer.jsx';
import { filterBiases, normalize } from './lib/search.js';

/**
 * `?lang=uk` makes a language link shareable and takes precedence over both the
 * stored choice and the browser's own language.
 */
function initialLocale() {
  const fromUrl =
    typeof location === 'undefined' ? null : new URLSearchParams(location.search).get('lang');
  return resolveLocale(fromUrl || navigator.language || DEFAULT_LOCALE);
}

export default function App() {
  const [storedLocale, setLocale] = usePersistentState('cb-lang', initialLocale);
  // Guards against a stale or hand-edited value in localStorage.
  const locale = resolveLocale(storedLocale);
  const [theme, setTheme] = usePersistentState('cb-theme', () =>
    typeof document !== 'undefined' ? document.documentElement.dataset.theme || 'light' : 'light'
  );
  const [query, setQuery] = useState('');
  const [activeCategories, setActiveCategories] = useState([]);

  const debouncedQuery = useDebounced(query, 200);

  // An explicit ?lang= overrides whatever was stored on a previous visit.
  useEffect(() => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl) setLocale(resolveLocale(fromUrl));
    // Runs once on mount; later changes come from the language picker.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${t(locale, 'title')} — ${t(locale, 'tagline')}`;
  }, [locale]);

  // Localised text is resolved once per language rather than per keystroke.
  const entries = useMemo(
    () =>
      biases.map((bias) => {
        const text = getBias(locale, bias.id);
        return {
          ...bias,
          ...text,
          haystack: normalize(`${text.name} ${text.description} ${text.example}`),
        };
      }),
    [locale]
  );

  const visible = useMemo(
    () => filterBiases(entries, debouncedQuery, activeCategories),
    [entries, debouncedQuery, activeCategories]
  );

  const toggleCategory = (id) =>
    setActiveCategories((current) =>
      current.includes(id) ? current.filter((c) => c !== id) : [...current, id]
    );

  const isFiltered = activeCategories.length > 0 || debouncedQuery.trim().length > 0;

  const clearFilters = () => {
    setActiveCategories([]);
    setQuery('');
  };

  return (
    <div className="app">
      <a className="skip-link" href="#biases">
        {t(locale, 'skip')}
      </a>

      <Header
        locale={locale}
        locales={localeOptions}
        onLocaleChange={setLocale}
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        count={visible.length}
        total={entries.length}
        isFiltered={isFiltered}
      />

      <main className="app__main">
        <Toolbar
          locale={locale}
          query={query}
          onQueryChange={setQuery}
          categories={categories}
          active={activeCategories}
          onToggleCategory={toggleCategory}
          onClear={clearFilters}
          canClear={isFiltered}
        />

        {visible.length > 0 ? (
          <ul className="bias-grid" id="biases">
            {visible.map((entry) => (
              <BiasCard key={entry.id} entry={entry} locale={locale} />
            ))}
          </ul>
        ) : (
          <EmptyState locale={locale} onClear={clearFilters} />
        )}
      </main>

      <Footer locale={locale} />
    </div>
  );
}
