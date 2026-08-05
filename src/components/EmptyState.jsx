import { t } from '../locales/index.js';

export default function EmptyState({ locale, onClear }) {
  return (
    <div className="empty" id="biases">
      <svg className="empty__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <circle cx="21" cy="21" r="13" />
        <path d="M30.5 30.5 41 41" strokeLinecap="round" />
      </svg>
      <p className="empty__title">{t(locale, 'empty')}</p>
      <p className="empty__hint">{t(locale, 'emptyHint')}</p>
      <button type="button" className="button" onClick={onClear}>
        {t(locale, 'clear')}
      </button>
    </div>
  );
}
