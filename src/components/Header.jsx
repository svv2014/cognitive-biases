import { t } from '../locales/index.js';
import { hrefDictionary, hrefHome, hrefPlay } from '../lib/router.js';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4.2" />
      <g strokeLinecap="round">
        <path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 14.4A8.6 8.6 0 1 1 9.6 4a7 7 0 0 0 10.4 10.4z" />
    </svg>
  );
}

/**
 * The bar that sits on every route: brand (back home), the two top-level
 * destinations, language and theme. Each page brings its own hero.
 */
export default function Header({ locale, locales, onLocaleChange, theme, onThemeToggle, route }) {
  return (
    <header className="header">
      <div className="header__bar">
        <a className="header__brand" href={hrefHome()}>
          <span className="header__mark" aria-hidden="true">
            <span style={{ background: 'var(--cat-belief)' }} />
            <span style={{ background: 'var(--cat-memory)' }} />
            <span style={{ background: 'var(--cat-politics)' }} />
          </span>
          <span className="header__wordmark">{t(locale, 'title')}</span>
        </a>

        <nav className="header__nav" aria-label={t(locale, 'navLabel')}>
          <a href={hrefHome()} aria-current={route.name === 'home' ? 'page' : undefined}>
            {t(locale, 'navHome')}
          </a>
          <a
            href={hrefDictionary()}
            aria-current={route.name === 'dictionary' || route.name === 'bias' ? 'page' : undefined}
          >
            {t(locale, 'navDictionary')}
          </a>
          <a href={hrefPlay()} aria-current={route.name === 'play' ? 'page' : undefined}>
            {t(locale, 'navPlay')}
          </a>
        </nav>

        <div className="header__controls">
          <label className="lang-select">
            <span className="visually-hidden">{t(locale, 'language')}</span>
            <select value={locale} onChange={(e) => onLocaleChange(e.target.value)}>
              {locales.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name}
                </option>
              ))}
            </select>
            <svg className="lang-select__caret" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.5 4.5 6 8l3.5-3.5" />
            </svg>
          </label>

          <button
            type="button"
            className="icon-button"
            onClick={onThemeToggle}
            aria-label={t(locale, 'theme')}
            title={t(locale, 'theme')}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function QuizIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M7.3 7.3a2.8 2.8 0 1 1 3.6 3.4c-.6.2-.9.8-.9 1.4v.4" strokeLinecap="round" />
      <circle cx="10" cy="15.6" r="0.4" />
    </svg>
  );
}
