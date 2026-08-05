import en from './en.js';
import ru from './ru.js';
import uk from './uk.js';
import pl from './pl.js';
import es from './es.js';
import fr from './fr.js';

export const DEFAULT_LOCALE = 'en';

// Order here is the order of the language switcher.
export const locales = { en, uk, ru, pl, es, fr };

export const localeCodes = Object.keys(locales);

export const localeOptions = localeCodes.map((code) => ({
  code,
  name: locales[code].meta.name,
}));

/**
 * Resolves a browser language tag ("uk-UA", "ru") to a supported locale,
 * falling back to English.
 */
export function resolveLocale(candidate) {
  if (!candidate) return DEFAULT_LOCALE;
  const lower = String(candidate).toLowerCase();
  if (locales[lower]) return lower;
  const base = lower.split(/[-_]/)[0];
  return locales[base] ? base : DEFAULT_LOCALE;
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
