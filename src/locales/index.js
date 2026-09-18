import en from './en.js';

export const DEFAULT_LOCALE = 'en';

/**
 * English ships in the main bundle — it is the fallback for every string — and
 * each other language is its own chunk, fetched by `loadLocale` before it is
 * shown. `locales` fills in as languages load; the helpers below read from it.
 * Node scripts that need every language at once import `./all.js` instead.
 */
const loaders = {
  uk: () => import('./uk.js'),
  ru: () => import('./ru.js'),
  pl: () => import('./pl.js'),
  es: () => import('./es.js'),
  fr: () => import('./fr.js'),
};

export const locales = { en };

// Order here is the order of the language switcher. Names are repeated from
// each file's `meta.name` so the switcher can list languages before loading
// them; `npm run check` keeps the two in step.
export const localeNames = {
  en: 'English',
  uk: 'Українська',
  ru: 'Русский',
  pl: 'Polski',
  es: 'Español',
  fr: 'Français',
};

export const localeCodes = Object.keys(localeNames);

export const localeOptions = localeCodes.map((code) => ({ code, name: localeNames[code] }));

export const isLoaded = (code) => Boolean(locales[code]);

/** Fetches a language once; resolves when its strings are available. */
export async function loadLocale(code) {
  if (!locales[code] && loaders[code]) locales[code] = (await loaders[code]()).default;
  return locales[code];
}

export const loadAllLocales = () => Promise.all(localeCodes.map(loadLocale));

/**
 * Resolves a browser language tag ("uk-UA", "ru") to a supported locale,
 * falling back to English.
 */
export function resolveLocale(candidate) {
  if (!candidate) return DEFAULT_LOCALE;
  // Checked against the languages that exist, not the ones loaded so far.
  const lower = String(candidate).toLowerCase();
  if (localeNames[lower]) return lower;
  const base = lower.split(/[-_]/)[0];
  return localeNames[base] ? base : DEFAULT_LOCALE;
}

/**
 * Reads a bias entry, falling back to English for any locale that has not
 * translated it yet. `translated` lets the UI flag partial translations.
 */
export function getBias(code, id) {
  const entry = locales[code]?.biases?.[id];
  const fallback = locales[DEFAULT_LOCALE].biases[id];
  if (!entry) return { ...fallback, translated: code === DEFAULT_LOCALE };
  return { ...entry, translated: true };
}

/** Reads a UI string with `{placeholder}` interpolation. */
export function t(code, key, vars) {
  const dict = locales[code]?.ui ?? {};
  const raw = dict[key] ?? locales[DEFAULT_LOCALE].ui[key] ?? key;
  if (!vars) return raw;
  return raw.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m));
}

export function getCategoryName(code, id) {
  return locales[code]?.categories?.[id] ?? locales[DEFAULT_LOCALE].categories[id] ?? id;
}

const dig = (root, path) => path.split('.').reduce((acc, key) => acc?.[key], root);

/**
 * Reads a quiz string by dotted path, e.g. `questions.anchoring.prompt`.
 * Falls back to English so a locale missing a question still renders.
 */
export function tq(code, path, vars) {
  const raw =
    dig(locales[code]?.quiz, path) ?? dig(locales[DEFAULT_LOCALE].quiz, path) ?? path;
  if (!vars || typeof raw !== 'string') return raw;
  return raw.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m));
}

/** A reader for one nested locale section, by dotted path, with English fallback. */
const sectionReader = (section) => (code, path, vars) => {
  const raw =
    dig(locales[code]?.[section], path) ?? dig(locales[DEFAULT_LOCALE][section], path) ?? path;
  if (!vars || typeof raw !== 'string') return raw;
  return raw.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m));
};

/** Demo and scene strings, e.g. `td(code, 'anchoring.q1')`. */
export const td = sectionReader('demos');

/** Spot-the-bias strings, e.g. `tg(code, 'start')`. */
export const tg = sectionReader('game');
