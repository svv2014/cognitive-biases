import { getCategoryName, t } from '../locales/index.js';

export default function Toolbar({
  locale,
  query,
  onQueryChange,
  categories,
  active,
  onToggleCategory,
  onClear,
  canClear,
}) {
  return (
    <div className="toolbar">
      <div className="search">
        <svg className="search__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <circle cx="9" cy="9" r="5.6" />
          <path d="M13.2 13.2 17.5 17.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          className="search__input"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={t(locale, 'search')}
          aria-label={t(locale, 'searchLabel')}
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <div
        className="chips"
        role="group"
        aria-label={t(locale, 'filterLabel')}
      >
        {categories.map((cat) => {
          const selected = active.includes(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              className="chip"
              data-selected={selected || undefined}
              aria-pressed={selected}
              onClick={() => onToggleCategory(cat.id)}
              style={{ '--chip-color': cat.color, '--chip-ink': cat.ink }}
            >
              <span className="chip__dot" aria-hidden="true" />
              {getCategoryName(locale, cat.id)}
            </button>
          );
        })}

        {canClear && (
          <button type="button" className="chip chip--clear" onClick={onClear}>
            {t(locale, 'clear')}
          </button>
        )}
      </div>
    </div>
  );
}
