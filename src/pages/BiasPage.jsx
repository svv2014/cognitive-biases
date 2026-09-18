import { useEffect } from 'react';
import { biases, layerOf } from '../data/biases.js';
import { categoryById } from '../data/categories.js';
import { getBias, getCategoryName, t } from '../locales/index.js';
import { hrefBias, hrefDictionary } from '../lib/router.js';
import MiniBias from '../components/MiniBias.jsx';
import PromptBox from '../components/PromptBox.jsx';
import MechanismScene from '../components/MechanismScene.jsx';
import { sceneBiasIds } from '../data/scenes.js';

const icon = (id) => `${import.meta.env.BASE_URL}icons/${id}.png`;

/**
 * Biases that share the most categories with this one. Sharing an AI layer
 * outweighs any number of shared classic categories, so a machine bias is
 * shown beside its own kind. Twins are left out — they already have their own
 * line — and ties keep manifest order.
 */
function related(bias, limit = 4) {
  const layer = layerOf(bias);
  const exclude = new Set([bias.id, bias.twin, ...echoesOf(bias).map((b) => b.id)]);
  return biases
    .filter((b) => !exclude.has(b.id))
    .map((b) => ({
      b,
      score:
        b.categories.filter((c) => bias.categories.includes(c)).length +
        (layer && layerOf(b) === layer ? 10 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.b);
}

/** AI-era biases that name this classic one as their twin. */
const echoesOf = (bias) => biases.filter((b) => b.twin === bias.id);

function Pill({ locale, id }) {
  return (
    <a className="pill" href={hrefBias(id)}>
      {getBias(locale, id).name}
    </a>
  );
}

export default function BiasPage({ locale, id }) {
  const index = biases.findIndex((b) => b.id === id);
  const bias = biases[index];
  const text = bias ? getBias(locale, bias.id) : null;

  useEffect(() => {
    if (text) document.title = `${text.name} — ${t(locale, 'title')}`;
  }, [text, locale]);

  if (!bias) {
    return (
      <div className="empty">
        <p className="empty__title">{t(locale, 'notFoundTitle')}</p>
        <p className="empty__hint">{t(locale, 'notFoundHint')}</p>
        <a className="button" href={hrefDictionary()}>
          {t(locale, 'backToAll')}
        </a>
      </div>
    );
  }

  const prev = biases[(index - 1 + biases.length) % biases.length];
  const next = biases[(index + 1) % biases.length];
  const echoes = echoesOf(bias);
  const near = related(bias);

  return (
    <article className="bias-page">
      <a className="text-link bias-page__back" href={hrefDictionary()}>
        ← {t(locale, 'backToAll')}
      </a>

      <div className="bias-page__card">
        <div className="card__stripe" aria-hidden="true">
          {bias.categories.map((c) => (
            <span key={c} style={{ background: categoryById[c].color }} />
          ))}
        </div>

        <div className="bias-page__body">
          <div className="bias-page__text">
            <ul className="card__tags">
              {bias.categories.map((c) => (
                <li key={c}>
                  <a
                    className="card__tag"
                    href={hrefDictionary({ cats: [c] })}
                    style={{ '--chip-color': categoryById[c].color, '--chip-ink': categoryById[c].ink }}
                  >
                    {getCategoryName(locale, c)}
                  </a>
                </li>
              ))}
            </ul>
            <h1 className="bias-page__name">{text.name}</h1>
            <p className="bias-page__desc">{text.description}</p>
            <p className="bias-page__example">
              <span className="card__example-label">{t(locale, 'example')}</span>
              {text.example}
            </p>

            <div className="bias-page__counter">
              <span className="card__example-label">{t(locale, 'counterLabel')}</span>
              {text.counter}
            </div>

            {text.prompt && <PromptBox locale={locale} text={text.prompt} />}

            <dl className="bias-page__meta">
              {bias.twin && (
                <div>
                  <dt>{t(locale, 'twin')}</dt>
                  <dd>
                    <Pill locale={locale} id={bias.twin} />
                  </dd>
                </div>
              )}
              {echoes.length > 0 && (
                <div>
                  <dt>{t(locale, 'echo')}</dt>
                  <dd>
                    {echoes.map((b) => (
                      <Pill key={b.id} locale={locale} id={b.id} />
                    ))}
                  </dd>
                </div>
              )}
              {bias.source && (
                <div>
                  <dt>{t(locale, 'source')}</dt>
                  <dd>
                    <a className="card__source" href={bias.source.url} target="_blank" rel="noopener noreferrer">
                      {bias.source.label}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="bias-page__art">
            <img src={icon(bias.id)} alt="" decoding="async" />
          </div>
        </div>
      </div>

      {sceneBiasIds.includes(bias.id) && <MechanismScene locale={locale} biasId={bias.id} />}

      {near.length > 0 && (
        <section className="home-section" aria-labelledby="bias-related">
          <h2 className="home-section__title" id="bias-related">
            {t(locale, 'relatedTitle')}
          </h2>
          <ul className="mini-list">
            {near.map((b) => (
              <MiniBias key={b.id} locale={locale} id={b.id} />
            ))}
          </ul>
        </section>
      )}

      <nav className="bias-page__pager" aria-label={t(locale, 'pagerLabel')}>
        <a href={hrefBias(prev.id)} rel="prev">
          <span>← {t(locale, 'previous')}</span>
          {getBias(locale, prev.id).name}
        </a>
        <a href={hrefBias(next.id)} rel="next">
          <span>{t(locale, 'next')} →</span>
          {getBias(locale, next.id).name}
        </a>
      </nav>
    </article>
  );
}
