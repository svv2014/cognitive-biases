import { useEffect, useMemo, useState } from 'react';
import { biases } from './data/biases.js';
import {
  DEFAULT_LOCALE,
  getBias,
  isLoaded,
  loadLocale,
  localeOptions,
  resolveLocale,
  t,
} from './locales/index.js';
import { usePersistentState } from './hooks/usePersistentState.js';
import { normalize } from './lib/search.js';
import { hrefBias, useRoute } from './lib/router.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Quiz from './components/Quiz.jsx';
import Home from './pages/Home.jsx';
import Dictionary from './pages/Dictionary.jsx';
import BiasPage from './pages/BiasPage.jsx';
import Game from './pages/Game.jsx';
import SharedResult from './pages/SharedResult.jsx';

/**
 * `?lang=uk` makes a language link shareable and takes precedence over both the
 * stored choice and the browser's own language.
 */
function initialLocale() {
  const fromUrl =
    typeof location === 'undefined' ? null : new URLSearchParams(location.search).get('lang');
  return resolveLocale(fromUrl || navigator.language || DEFAULT_LOCALE);
}

export default function App() {
  const route = useRoute();
  const [storedLocale, setStoredLocale] = usePersistentState('cb-lang', initialLocale);
  // Guards against a stale or hand-edited value in localStorage, and against a
  // language whose chunk has not arrived (it falls back to English until then).
  const wanted = resolveLocale(storedLocale);
  const locale = isLoaded(wanted) ? wanted : DEFAULT_LOCALE;
  // Languages load on demand; switch only once the strings are here.
  const setLocale = (code) => {
    loadLocale(code)
      .then(() => setStoredLocale(code))
      .catch(() => {});
  };
  const [theme, setTheme] = usePersistentState('cb-theme', () =>
    typeof document !== 'undefined' ? document.documentElement.dataset.theme || 'light' : 'light'
  );
  // null when closed, otherwise the mode the quiz opens in.
  const [quizMode, setQuizMode] = useState(null);

  // An explicit ?lang= overrides whatever was stored on a previous visit.
  useEffect(() => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl) setLocale(resolveLocale(fromUrl));
    // Runs once on mount; later changes come from the language picker.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // The bias page sets its own title; every other route uses the site's.
  useEffect(() => {
    document.documentElement.lang = locale;
    if (route.name !== 'bias') document.title = `${t(locale, 'title')} — ${t(locale, 'tagline')}`;
  }, [locale, route.name]);

  // Localised text is resolved once per language rather than per keystroke.
  const entries = useMemo(
    () =>
      biases.map((bias) => {
        const text = getBias(locale, bias.id);
        return {
          ...bias,
          ...text,
          haystack: normalize(`${text.name} ${text.description} ${text.example}`),
        };
      }),
    [locale]
  );

  const startQuiz = (mode) => setQuizMode(mode ?? 'human');

  let page;
  if (route.name === 'dictionary') {
    page = (
      <Dictionary
        // Remount when the route's filters change, so a new door starts fresh.
        key={JSON.stringify(route.params)}
        locale={locale}
        entries={entries}
        params={route.params}
        onStartQuiz={startQuiz}
      />
    );
  } else if (route.name === 'result') {
    page = <SharedResult locale={locale} params={route.params} onStartQuiz={startQuiz} />;
  } else if (route.name === 'play') {
    page = <Game locale={locale} />;
  } else if (route.name === 'bias') {
    page = <BiasPage key={route.id} locale={locale} id={route.id} />;
  } else {
    page = <Home locale={locale} onStartQuiz={startQuiz} />;
  }

  return (
    <div className="app">
      <a className="skip-link" href="#content">
        {t(locale, 'skip')}
      </a>

      <Header
        locale={locale}
        locales={localeOptions}
        onLocaleChange={setLocale}
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        route={route}
      />

      <main className="app__main" id="content" tabIndex={-1}>
        {page}
      </main>

      <Footer locale={locale} />

      {quizMode && (
        <Quiz
          locale={locale}
          initialMode={quizMode}
          onClose={() => setQuizMode(null)}
          onOpenBias={(id) => {
            setQuizMode(null);
            location.hash = hrefBias(id);
          }}
        />
      )}
    </div>
  );
}
