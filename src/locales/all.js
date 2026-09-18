// Every language at once, loaded eagerly. For Node scripts (checks, data
// generation, prerendering); the app itself loads languages on demand through
// ./index.js.
import en from './en.js';
import uk from './uk.js';
import ru from './ru.js';
import pl from './pl.js';
import es from './es.js';
import fr from './fr.js';
import { locales as live, localeCodes, localeNames, DEFAULT_LOCALE } from './index.js';

export const locales = { en, uk, ru, pl, es, fr };
export { localeCodes, localeNames, DEFAULT_LOCALE };

// Fill the lazy registry too, so helpers such as getBias() see every language.
Object.assign(live, locales);
