import { useEffect, useRef, useState } from 'react';
import { getBias, t, tg } from '../locales/index.js';
import { buildGame, GAME_LENGTH } from '../lib/game.js';
import { hrefBias, hrefDictionary } from '../lib/router.js';
import { resultHash } from '../lib/share.js';
import ShareBar from '../components/ShareBar.jsx';

// The closing line depends on how many landed; brackets are inclusive lower bounds.
const VERDICTS = [
  [10, 'verdict10'],
  [8, 'verdict8'],
  [5, 'verdict5'],
  [0, 'verdict0'],
];

export default function Game({ locale }) {
  const [rounds, setRounds] = useState(null);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answers, setAnswers] = useState([]);
  const nextButton = useRef(null);
  const heading = useRef(null);

  const start = () => {
    setRounds(buildGame(Math.random));
    setStep(0);
    setPicked(null);
    setAnswers([]);
  };

  // Keyboard users land on "Next" after answering, and on the new scenario after.
  useEffect(() => {
    if (picked) nextButton.current?.focus();
  }, [picked]);
  useEffect(() => {
    if (rounds) heading.current?.focus();
  }, [rounds, step]);

  if (!rounds) {
    return (
      <section className="game game--intro">
        <p className="home-hero__eyebrow">{tg(locale, 'eyebrow', { count: GAME_LENGTH })}</p>
        <h1 className="game__title">{tg(locale, 'title')}</h1>
        <p className="home-hero__lead">{tg(locale, 'lead')}</p>
        <div className="home-hero__actions">
          <button type="button" className="button button--primary game__start" onClick={start}>
            {tg(locale, 'start')}
          </button>
        </div>
      </section>
    );
  }

  const score = answers.filter((a) => a.right).length;

  if (step >= rounds.length) {
    const verdict = VERDICTS.find(([min]) => score >= min)[1];
    const missed = answers.filter((a) => !a.right);
    return (
      <section className="game game--end">
        <p className="home-hero__eyebrow">{tg(locale, 'resultEyebrow')}</p>
        <p className="game__score" ref={heading} tabIndex={-1}>
          {tg(locale, 'score', { score, total: rounds.length })}
        </p>
        <p className="home-hero__lead">{tg(locale, verdict)}</p>
        {missed.length > 0 && (
          <div className="game__missed">
            <h2 className="game__missed-title">{tg(locale, 'missedTitle')}</h2>
            <ul>
              {missed.map((a) => (
                <li key={a.answer}>
                  <a className="pill" href={hrefBias(a.answer)}>
                    {getBias(locale, a.answer).name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ShareBar
          locale={locale}
          hash={resultHash({ kind: 'game', score, total: rounds.length })}
          text={t(locale, 'shareGameText', { score, total: rounds.length })}
          card={{
            eyebrow: tg(locale, 'title'),
            big: `${score}/${rounds.length}`,
            items: [t(locale, 'shareGameLine')],
          }}
        />
        <div className="home-hero__actions">
          <button type="button" className="button" onClick={start}>
            {tg(locale, 'again')}
          </button>
          <a className="button" href={hrefDictionary()}>
            {t(locale, 'homeBrowse', { count: 62 })}
          </a>
        </div>
      </section>
    );
  }

  const round = rounds[step];
  const answer = getBias(locale, round.answer);
  const right = picked === round.answer;

  const choose = (id) => {
    if (picked) return;
    setPicked(id);
    setAnswers((list) => [...list, { answer: round.answer, right: id === round.answer }]);
  };

  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };

  return (
    <section className="game">
      <div className="game__bar">
        <span>{tg(locale, 'progress', { n: step + 1, total: rounds.length })}</span>
        <span>{tg(locale, 'score', { score, total: answers.length })}</span>
      </div>
      <div className="game__meter" aria-hidden="true">
        <span style={{ width: `${(step / rounds.length) * 100}%` }} />
      </div>

      <blockquote className="game__scenario" ref={heading} tabIndex={-1}>
        {answer.example}
      </blockquote>
      <p className="game__question">{tg(locale, 'question')}</p>

      <div className="game__options">
        {round.options.map((id) => {
          const state = !picked ? undefined : id === round.answer ? 'right' : id === picked ? 'wrong' : 'idle';
          return (
            <button
              key={id}
              type="button"
              className="game__option"
              data-state={state}
              disabled={Boolean(picked)}
              onClick={() => choose(id)}
            >
              {getBias(locale, id).name}
            </button>
          );
        })}
      </div>

      {picked && (
        <div className="game__feedback" data-right={right || undefined} aria-live="polite">
          <p className="game__verdict">
            {right ? tg(locale, 'right') : tg(locale, 'wrong', { name: answer.name })}
          </p>
          <p>{answer.description}</p>
          <p className="game__counter">
            <span className="card__example-label">{t(locale, 'counterLabel')}</span>
            {answer.counter}
          </p>
          <button type="button" className="button button--primary" ref={nextButton} onClick={next}>
            {step + 1 < rounds.length ? tg(locale, 'next') : tg(locale, 'finish')}
          </button>
        </div>
      )}
    </section>
  );
}
