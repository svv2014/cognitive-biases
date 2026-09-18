import { useMemo, useState } from 'react';
import { isAiEra } from '../data/biases.js';
import { categories, categoryIds } from '../data/categories.js';
import { t, tq } from '../locales/index.js';
import { useDebounced } from '../hooks/useDebounced.js';
import { filterBiases } from '../lib/search.js';
import Toolbar from '../components/Toolbar.jsx';
import BiasCard from '../components/BiasCard.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { QuizIcon } from '../components/Header.jsx';

/**
 * The full, searchable list. `params` come from the route, so a home-page door
 * can land here already filtered (`#/dictionary?cat=money`).
 */
export default function Dictionary({ locale, entries, params, onStartQuiz }) {
  const [query, setQuery] = useState(params.q ?? '');
  const [activeCategories, setActiveCategories] = useState(() =>
    (params.cat ?? '').split(',').filter((id) => categoryIds.includes(id))
  );
  const debouncedQuery = useDebounced(query, 200);

  const visible = useMemo(
    () => filterBiases(entries, debouncedQuery, activeCategories),
    [entries, debouncedQuery, activeCategories]
  );

  // Search and filters span both families; only the grouping is split.
  const classic = useMemo(() => visible.filter((e) => !isAiEra(e)), [visible]);
  const ai = useMemo(() => visible.filter(isAiEra), [visible]);

  const toggleCategory = (id) =>
    setActiveCategories((current) =>
      current.includes(id) ? current.filter((c) => c !== id) : [...current, id]
    );

  const isFiltered = activeCategories.length > 0 || debouncedQuery.trim().length > 0;

  const clearFilters = () => {
    setActiveCategories([]);
    setQuery('');
  };

  const counter = isFiltered
    ? t(locale, 'counterFiltered', { count: visible.length, total: entries.length })
    : t(locale, 'counter', { count: entries.length });

  return (
    <>
      <div className="header__hero">
        <h1 className="header__title">{t(locale, 'title')}</h1>
        <p className="header__tagline">{t(locale, 'tagline')}</p>
        <p className="header__count" aria-live="polite">
          {counter}
        </p>
        <button type="button" className="header__quiz" onClick={() => onStartQuiz()}>
          <QuizIcon />
          {tq(locale, 'cta')}
        </button>
      </div>

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
        <div id="biases">
          {classic.length > 0 && (
            <section className="section" aria-labelledby="section-classic">
              <h2 className="section__title" id="section-classic">
                {t(locale, 'classicTitle')}
              </h2>
              <p className="section__lead">{t(locale, 'classicLead')}</p>
              <ul className="bias-grid">
                {classic.map((entry) => (
                  <BiasCard key={entry.id} entry={entry} locale={locale} />
                ))}
              </ul>
            </section>
          )}

          {ai.length > 0 && (
            <section className="section section--ai" aria-labelledby="section-ai">
              <h2 className="section__title" id="section-ai">
                {t(locale, 'aiTitle')}
              </h2>
              <p className="section__lead">{t(locale, 'aiLead')}</p>
              <ul className="bias-grid">
                {ai.map((entry) => (
                  <BiasCard key={entry.id} entry={entry} locale={locale} />
                ))}
              </ul>
            </section>
          )}
        </div>
      ) : (
        <EmptyState locale={locale} onClear={clearFilters} />
      )}
    </>
  );
}
