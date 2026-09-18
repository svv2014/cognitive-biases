import { useEffect, useRef, useState } from 'react';
import { aiBiases, biases } from '../data/biases.js';
import { categoryById } from '../data/categories.js';
import { situations } from '../data/situations.js';
import { getBias, getCategoryName, t, tg, tq } from '../locales/index.js';
import { pickDaily } from '../lib/daily.js';
import { hrefBias, hrefDictionary, hrefPlay } from '../lib/router.js';
import { QuizIcon } from '../components/Header.jsx';
import MiniBias from '../components/MiniBias.jsx';
import DemoStage from '../components/demos/DemoStage.jsx';
import PromptBox from '../components/PromptBox.jsx';
import BiasMap from '../components/BiasMap.jsx';

const icon = (id) => `${import.meta.env.BASE_URL}icons/${id}.png`;

function Situations({ locale }) {
  const [openId, setOpenId] = useState(null);
  const open = situations.find((s) => s.id === openId);

  // On a narrow screen the panel opens well below the door that was tapped.
  useEffect(() => {
    if (openId) document.getElementById('situation-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [openId]);

  return (
    <section className="home-section" aria-labelledby="home-situations">
      <h2 className="home-section__title" id="home-situations">
        {t(locale, 'situationsTitle')}
      </h2>
      <p className="home-section__lead">{t(locale, 'situationsLead')}</p>

      <div className="doors">
        {situations.map((s) => {
          const selected = s.id === openId;
          return (
            <button
              key={s.id}
              type="button"
              className="door"
              data-selected={selected || undefined}
              aria-expanded={selected}
              aria-controls="situation-panel"
              onClick={() => setOpenId(selected ? null : s.id)}
              style={{ '--door-color': categoryById[s.color].color }}
            >
              <span className="door__title">{t(locale, `sit${s.key}`)}</span>
              <span className="door__hint">{t(locale, `sit${s.key}Hint`)}</span>
            </button>
          );
        })}
      </div>

      <div id="situation-panel" className="situation" hidden={!open} aria-live="polite">
        {open && (
          <>
            <ul className="mini-list">
              {open.biasIds.map((id) => (
                <MiniBias key={id} locale={locale} id={id} />
              ))}
            </ul>
            <a className="text-link" href={hrefDictionary({ cats: open.cats })}>
              {t(locale, 'situationsAll')} →
            </a>
          </>
        )}
      </div>
    </section>
  );
}

function Daily({ locale }) {
  // Computed at render; the page is not open long enough for midnight to matter.
  const bias = pickDaily(biases);
  const text = getBias(locale, bias.id);
  return (
    <section className="home-section" aria-labelledby="home-daily">
      <h2 className="home-section__title" id="home-daily">
        {t(locale, 'dailyTitle')}
      </h2>
      <p className="home-section__lead">{t(locale, 'dailyLead')}</p>
      <article className="daily">
        <img className="daily__icon" src={icon(bias.id)} alt="" decoding="async" />
        <div className="daily__text">
          <h3 className="daily__name">{text.name}</h3>
          <p className="daily__desc">{text.description}</p>
          <p className="daily__counter">
            <span className="card__example-label">{t(locale, 'counterLabel')}</span>
            {text.counter}
          </p>
          <p className="daily__example">
            <span className="card__example-label">{t(locale, 'example')}</span>
            {text.example}
          </p>
          <a className="text-link" href={hrefBias(bias.id)}>
            {t(locale, 'readMore')} →
          </a>
        </div>
      </article>
    </section>
  );
}

function Twins({ locale }) {
  const map = useRef(null);
  // Hovering a row lights up the pair on the map, when there is one.
  const highlight = (id) => map.current?.setActive(id);

  return (
    <section className="home-section" aria-labelledby="home-twins">
      <h2 className="home-section__title" id="home-twins">
        {t(locale, 'twinsTitle')}
      </h2>
      <p className="home-section__lead">{t(locale, 'twinsLead')}</p>
      <BiasMap locale={locale} controller={map} />
      <div className="twins" role="table" aria-labelledby="home-twins">
        <div className="twins__head" role="row">
          <span role="columnheader">{t(locale, 'twinsHuman')}</span>
          <span aria-hidden="true" />
          <span role="columnheader">{t(locale, 'twinsMachine')}</span>
        </div>
        {aiBiases.map((ai) => {
          const layer = ai.categories.find((c) => c.startsWith('ai-'));
          return (
            <div
              className="twins__row"
              role="row"
              key={ai.id}
              onMouseEnter={() => highlight(ai.id)}
              onMouseLeave={() => highlight(null)}
              onFocus={() => highlight(ai.id)}
              onBlur={() => highlight(null)}
            >
              <a role="cell" className="twins__cell" href={hrefBias(ai.twin)}>
                {getBias(locale, ai.twin).name}
              </a>
              <span className="twins__rhyme" aria-hidden="true">
                ≈
              </span>
              <a
                role="cell"
                className="twins__cell twins__cell--ai"
                href={hrefBias(ai.id)}
                style={{ '--chip-color': categoryById[layer].color }}
              >
                <span className="twins__layer">{getCategoryName(locale, layer)}</span>
                {getBias(locale, ai.id).name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// The three most useful day to day: agreement, order, and doing it yourself.
const FEATURED_PROMPTS = ['sycophancy', 'position-bias', 'cognitive-offloading'];

function Prompts({ locale }) {
  return (
    <section className="home-section" aria-labelledby="home-prompts">
      <h2 className="home-section__title" id="home-prompts">
        {t(locale, 'promptsTitle')}
      </h2>
      <p className="home-section__lead">{t(locale, 'promptsLead')}</p>
      <div className="prompt-grid">
        {FEATURED_PROMPTS.map((id) => {
          const bias = getBias(locale, id);
          return (
            <div key={id} className="prompt-grid__item">
              <a className="prompt-grid__name" href={hrefBias(id)}>
                {bias.name}
              </a>
              <PromptBox locale={locale} text={bias.prompt} compact />
            </div>
          );
        })}
      </div>
      <a className="text-link" href={hrefDictionary({ cats: ['ai-human', 'ai-agent', 'ai-loop'] })}>
        {t(locale, 'promptsAll')} →
      </a>
    </section>
  );
}

export default function Home({ locale, onStartQuiz }) {
  return (
    <>
      <section className="home-hero">
        <p className="home-hero__eyebrow">{t(locale, 'homeEyebrow', { count: biases.length })}</p>
        <h1 className="home-hero__title">{t(locale, 'homeTitle')}</h1>
        <p className="home-hero__lead">{t(locale, 'homeLead')}</p>
        <div className="home-hero__actions">
          <button type="button" className="header__quiz" onClick={() => onStartQuiz()}>
            <QuizIcon />
            {tq(locale, 'cta')}
          </button>
          <a className="button button--ghost" href={hrefDictionary()}>
            {t(locale, 'homeBrowse', { count: biases.length })}
          </a>
        </div>
        <DemoStage locale={locale} />
      </section>

      <Situations locale={locale} />
      <Daily locale={locale} />
      <Twins locale={locale} />
      <Prompts locale={locale} />

      <div className="home-play">
        <section className="home-section home-quiz" aria-labelledby="home-quiz">
          <h2 className="home-section__title" id="home-quiz">
            {t(locale, 'quizBlockTitle')}
          </h2>
          <p className="home-section__lead">{t(locale, 'quizBlockLead')}</p>
          <div className="home-hero__actions">
            <button type="button" className="button button--primary" onClick={() => onStartQuiz('human')}>
              {tq(locale, 'modeHuman')}
            </button>
            <button type="button" className="button" onClick={() => onStartQuiz('ai')}>
              {tq(locale, 'modeAi')}
            </button>
          </div>
        </section>

        <section className="home-section home-quiz" aria-labelledby="home-game">
          <h2 className="home-section__title" id="home-game">
            {tg(locale, 'title')}
          </h2>
          <p className="home-section__lead">{tg(locale, 'lead')}</p>
          <div className="home-hero__actions">
            <a className="button button--primary" href={hrefPlay()}>
              {tg(locale, 'start')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
