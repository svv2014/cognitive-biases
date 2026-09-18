import { getBias, t, tg, tq } from '../locales/index.js';
import { readResult } from '../lib/share.js';
import { hrefBias, hrefPlay } from '../lib/router.js';

/**
 * What someone sees when they open a shared result: the result, and an
 * invitation to try it themselves. Nothing here identifies who shared it.
 */
export default function SharedResult({ locale, params, onStartQuiz }) {
  const result = readResult(params);

  if (!result) {
    return (
      <div className="empty">
        <p className="empty__title">{t(locale, 'shareBroken')}</p>
        <a className="button" href={hrefPlay()}>
          {tg(locale, 'title')}
        </a>
      </div>
    );
  }

  return (
    <section className="game game--end shared">
      <p className="home-hero__eyebrow">{t(locale, 'shareReceived')}</p>

      {result.kind === 'game' ? (
        <>
          <p className="game__score">{tg(locale, 'score', { score: result.score, total: result.total })}</p>
          <p className="home-hero__lead">{t(locale, 'shareGameLead')}</p>
          <div className="home-hero__actions">
            <a className="button button--primary" href={hrefPlay()}>
              {t(locale, 'shareBeat')}
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="game__kicker">{result.mode === 'ai' ? tq(locale, 'titleAi') : tq(locale, 'title')}</p>
          <h1 className="game__title">{t(locale, 'shareTheirs')}</h1>
          {result.ids.length ? (
            <ul className="shared__list">
              {result.ids.map((id) => (
                <li key={id}>
                  <a className="pill" href={hrefBias(id)}>
                    {getBias(locale, id).name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="home-hero__lead">{t(locale, 'shareTheirsNone')}</p>
          )}
          <div className="home-hero__actions">
            <button type="button" className="button button--primary" onClick={() => onStartQuiz(result.mode)}>
              {t(locale, 'shareFindYours')}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
