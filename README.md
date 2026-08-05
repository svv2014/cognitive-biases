# Cognitive Biases

A searchable, multilingual reference of 50 cognitive biases — each with a
plain-language description, an everyday example and a category colour code.

**Live site:** https://tetyanaking.github.io/cognitive-biases/

Available in **English, Ukrainian, Russian, Polish, Spanish and French**.
Link straight to a language with `?lang=uk` (`en`, `uk`, `ru`, `pl`, `es`, `fr`).

## Features

- Search across names, descriptions and examples — accent-insensitive, so
  `klatwa` finds *Klątwa wiedzy* and `maldicion` finds *Maldición del conocimiento*
- Filter by any combination of the six categories
- Light and dark themes, remembered between visits
- Language auto-detected from the browser, overridable and remembered
- Responsive from 320 px up; keyboard accessible; all category colours meet
  WCAG AA contrast

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build into `docs/` (served by GitHub Pages) |
| `npm run preview` | Serve the built output locally |
| `npm run check` | Validate that every locale is complete and every icon exists |
| `npm test` | `check` + search unit tests + server-render smoke test |

## Project layout

```
src/
  data/
    biases.js       50 biases: id, categories (language-independent)
    categories.js   category ids, colours and contrast-safe text colours
  locales/
    en.js ru.js …   UI strings, category names and all 50 biases per language
    index.js        locale registry, lookup and English fallback
  components/       Header, Toolbar, BiasCard, EmptyState, Footer
  hooks/            useDebounced, usePersistentState
  lib/search.js     normalisation and filtering
  styles/global.css design tokens and all styling
public/icons/       one PNG per bias, named after its id
scripts/            data validation, tests and one-off migrations
docs/               build output, published by GitHub Pages
```

Bias text and bias identity are kept apart on purpose: `src/data/biases.js`
holds the id and categories, while each file in `src/locales/` holds nothing but
strings keyed by that id. Icons are named after the id, so they are shared
across all languages instead of being duplicated per translation.

## Adding a language

1. Copy `src/locales/en.js` to `src/locales/<code>.js` and translate the
   `ui`, `categories` and `biases` values. Leave every key exactly as it is.
2. Register it in `src/locales/index.js` — add the import and an entry in
   `locales`. Its position there is its position in the language picker.
3. Run `npm test`. It fails if any string is missing or empty, and the smoke
   test renders all 50 cards in the new language.

A language that is only partly translated still works: missing biases fall back
to English and the card shows a short note saying so.

## Adding a bias

1. Add `{ id, categories }` to `src/data/biases.js`.
2. Drop `public/icons/<id>.png` next to the others — black line art on a
   transparent background (`scripts/process-icons.py` normalises source images).
3. Add the `name` / `description` / `example` entry to every locale file.
4. Run `npm test`.

## Credits

- Content adapted from Visual Capitalist's
  [50 Cognitive Biases in the Modern World](https://www.visualcapitalist.com/50-cognitive-biases-in-the-modern-world/)
- Contributors: [@tetyanaking](https://github.com/tetyanaking), [@vadymsvv](https://github.com/vadymsvv)

Licensed under the GNU General Public License v3.0 — see [LICENSE](LICENSE).
