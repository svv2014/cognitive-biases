import { categoryById } from '../data/categories.js';
import { getBias, getCategoryName, t } from '../locales/index.js';

export default function BiasCard({ entry, locale, onOpenBias }) {
  // Only the AI-era entries carry a twin and a source; the classic fifty
  // predate both fields, so the footer simply does not render for them.
  const twin = entry.twin ? getBias(locale, entry.twin) : null;

  return (
    <li className="card" id={`bias-${entry.id}`}>
      <div className="card__stripe" aria-hidden="true">
        {entry.categories.map((id) => (
          <span key={id} style={{ background: categoryById[id].color }} />
        ))}
      </div>

      <div className="card__body">
        <h3 className="card__name">{entry.name}</h3>

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

        {(twin || entry.source) && (
          <p className="card__meta">
            {twin && (
              <span className="card__meta-item">
                <span className="card__meta-label">{t(locale, 'twin')}</span>
                <button
                  type="button"
                  className="card__twin"
                  onClick={() => onOpenBias?.(twin.name)}
                >
                  {twin.name}
                </button>
              </span>
            )}
            {entry.source && (
              <span className="card__meta-item">
                <span className="card__meta-label">{t(locale, 'source')}</span>
                <a
                  className="card__source"
                  href={entry.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry.source.label}
                </a>
              </span>
            )}
          </p>
        )}

        {!entry.translated && <p className="card__note">{t(locale, 'untranslated')}</p>}
      </div>
    </li>
  );
}
