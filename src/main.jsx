import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DEFAULT_LOCALE, loadLocale, resolveLocale } from './locales/index.js';
import './styles/global.css';

/**
 * The language the page will open in, by the same rules App uses: an explicit
 * ?lang= wins, then the stored choice, then the browser's language.
 */
function startingLocale() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let stored = null;
  try {
    stored = localStorage.getItem('cb-lang');
  } catch {
    /* storage unavailable */
  }
  return resolveLocale(fromUrl || stored || navigator.language || DEFAULT_LOCALE);
}

// Fetch that language before the first render, so a returning reader never
// sees a flash of English. If the chunk fails to load, English still works.
loadLocale(startingLocale())
  .catch(() => {})
  .finally(() => {
    createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
