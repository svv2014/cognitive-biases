import { categoryById } from '../data/categories.js';
import { getCategoryName, t } from '../locales/index.js';

export default function BiasCard({ entry, locale }) {
  return (
    <li className="card">
      <div className="card__stripe" aria-hidden="true">
        {entry.categories.map((id) => (
          <span key={id} style={{ background: categoryById[id].color }} />
        ))}
      </div>

      <div className="card__body">
        <h2 className="card__name">{entry.name}</h2>

        <ul className="card__tags">
          {entry.categories.map((id) => (
            <li
              key={id}
              className="card__tag"
              style={{ '--chip-color': categoryById[id].color, '--chip-ink': categoryById[id].ink }}
            >
              {getCategoryName(locale, id)}
            </li>
          ))}
        </ul>

        <p className="card__description">{entry.description}</p>

        <div className="card__art">
          <img src={`${import.meta.env.BASE_URL}icons/${entry.id}.png`} alt="" loading="lazy" decoding="async" />
        </div>

        <p className="card__example">
          <span className="card__example-label">{t(locale, 'example')}</span>
          {entry.example}
        </p>

        {!entry.translated && <p className="card__note">{t(locale, 'untranslated')}</p>}
      </div>
    </li>
  );
}
