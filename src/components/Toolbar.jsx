import { getCategoryName, t } from '../locales/index.js';

function CategoryChip({ locale, cat, selected, onToggle }) {
  return (
    <button
      type="button"
      className="chip"
      data-selected={selected || undefined}
      aria-pressed={selected}
      onClick={() => onToggle(cat.id)}
      style={{ '--chip-color': cat.color, '--chip-ink': cat.ink }}
    >
      <span className="chip__dot" aria-hidden="true" />
      {getCategoryName(locale, cat.id)}
    </button>
  );
}

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
  // The two families answer different questions — why a mind errs, and who in
  // the loop is erring — so they are grouped rather than run together.
  const classic = categories.filter((c) => c.era === 'classic');
  const ai = categories.filter((c) => c.era === 'ai');

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

      <div className="chips" role="group" aria-label={t(locale, 'filterLabel')}>
        {classic.map((cat) => (
          <CategoryChip
            key={cat.id}
            locale={locale}
            cat={cat}
            selected={active.includes(cat.id)}
            onToggle={onToggleCategory}
          />
        ))}

        <span className="chips__divider" aria-hidden="true" />

        {ai.map((cat) => (
          <CategoryChip
            key={cat.id}
            locale={locale}
            cat={cat}
            selected={active.includes(cat.id)}
            onToggle={onToggleCategory}
          />
        ))}

        {canClear && (
          <button type="button" className="chip chip--clear" onClick={onClear}>
            {t(locale, 'clear')}
          </button>
        )}
      </div>
    </div>
  );
}
