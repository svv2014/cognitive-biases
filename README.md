# Cognitive Biases

A searchable, multilingual reference of 62 cognitive biases — each with a
plain-language description, an everyday example and a category colour code.

**Live site:** https://svv2014.github.io/cognitive-biases/

Available in **English, Ukrainian, Russian, Polish, Spanish and French**.
Link straight to a language with `?lang=uk` (`en`, `uk`, `ru`, `pl`, `es`, `fr`).

## Two families of bias

The classic **fifty** are sorted by *why a mind errs*: memory, social, learning,
belief, money, politics.

The **twelve** added for the age of language models answer a different question —
*who in the loop is erring* — so they get their own axis of three categories:

| Category | Who is biased | Examples |
| --- | --- | --- |
| `ai-human` | A person reasoning about a machine | Algorithm aversion, the ELIZA effect, cognitive offloading |
| `ai-agent` | A model reasoning on its own | Sycophancy, self-preference, verbosity bias, position bias |
| `ai-loop` | Neither alone — only the loop between them | Feedback-loop amplification, model collapse, algorithmic lock-in, machine groupthink |

Every AI-era entry carries two fields the classic fifty do not: a `source` (these
claims are recent and contested, so each is attributable) and a `twin` — the
classic bias it rhymes with. Position bias *is* anchoring; self-preference is the
IKEA effect; machine groupthink is groupthink. The pairing is the point, and the
validator enforces both fields.

## Features

- Search across names, descriptions and examples — accent-insensitive, so
  `klatwa` finds *Klątwa wiedzy* and `maldicion` finds *Maldición del conocimiento*
- A short **self-test** in two modes: *You* (eight everyday situations) and
  *You + AI* (eight situations from working with a model) — framed as a bit of
  fun, not a psychological assessment
- A **machine-readable surface** so an agent can use the site without scraping
  it: `biases.json`, `self-test.json` and `llms.txt` (see below)
- Filter by any combination of the nine categories
- A home page that starts from situations rather than names, with a bias of the
  day, live demos (anchoring, framing, the Forer effect) and a 3D map of how
  each AI-era bias echoes a human one
- A page per bias with a **what to do** line, and for the AI-era twelve a prompt
  to paste into a chat; four of them have a short animated simulation
- **Spot the bias**, a ten-round game, and shareable results for it and the
  self-test (the result travels in the link; nothing is stored)
- A static, indexable page per bias per language (`/bias/<id>/`,
  `/<lang>/bias/<id>/`), generated after the build by `scripts/prerender.mjs`
- Light and dark themes, remembered between visits
- Language auto-detected from the browser, overridable and remembered
- Responsive from 320 px up; keyboard accessible; all category colours meet
  WCAG AA contrast

## For machines

Generated into `public/` by `npm run data`, and served alongside the page:

| File | What it is |
| --- | --- |
| `biases.json` | All 62 biases in all six languages, with categories, layer, source, twin and icon URL. One fetch. |
| `self-test.json` | Eight **behavioural** probes an agent can run on itself — each a manipulation plus a control — and the human questionnaire for comparison. |
| `llms.txt` | Plain-text entry point, per the llms.txt convention. |
| `robots.txt`, `sitemap.xml` | Crawlers welcome; every language listed. |

The probes test behaviour rather than self-report on purpose: asking a model
whether it is sycophantic is itself an invitation to be sycophantic. Each one
gives two conditions to run in separate contexts, the signal that counts as the
bias, and a mitigation.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build into `docs/` (runs `data` first) |
| `npm run preview` | Serve the built output locally |
| `npm run data` | Regenerate `biases.json`, `self-test.json`, `llms.txt`, `robots.txt`, `sitemap.xml` |
| `npm run icons` | Redraw the twelve AI-era icons from `scripts/build-icons.mjs` |
| `npm run check` | Validate that every locale is complete and every icon exists |
| `npm test` | `check` + search unit tests + server-render smoke test |

## Project layout

```
src/
  data/
    biases.js       62 biases: id, categories, plus twin + source for AI-era ones
    categories.js   category ids, colours and contrast-safe text colours
    quiz.js         the two self-test pools and run length
  locales/
    en.js ru.js …   UI strings, category names and all 62 biases per language
    index.js        locale registry, lookup and English fallback
  components/       Header, Toolbar, BiasCard, Quiz, EmptyState, Footer
  hooks/            useDebounced, usePersistentState
  lib/search.js     normalisation and filtering
  lib/quiz.js       question shuffling and scoring
  styles/global.css design tokens and all styling
assets/icons/       SVG sources for the twelve AI-era icons (generated)
public/icons/       one PNG per bias, named after its id
public/*.json       generated machine-readable data — do not hand-edit
scripts/            data validation, generators, tests and one-off migrations
docs/               build output, published by GitHub Pages
```

Bias text and bias identity are kept apart on purpose: `src/data/biases.js`
holds the id and categories, while each file in `src/locales/` holds nothing but
strings keyed by that id. Icons are named after the id, so they are shared
across all languages instead of being duplicated per translation.

## Adding a language

1. Copy `src/locales/en.js` to `src/locales/<code>.js` and translate the
   `ui`, `categories`, `quiz` and `biases` values. Leave every key exactly as
   it is.
2. Register it in `src/locales/index.js` — add the import and an entry in
   `locales`. Its position there is its position in the language picker.
3. Run `npm test`. It fails if any string is missing or empty, and the smoke
   test renders all 50 cards in the new language.

A language that is only partly translated still works: missing biases fall back
to English and the card shows a short note saying so.

## Adding a quiz question

1. Add the bias id to `quizBiasIds` (human mode) or `aiQuizBiasIds` (AI mode) in
   `src/data/quiz.js`. A bias may only be in one pool.
2. Add a `prompt` / `biased` / `fair` entry under `quiz.questions.<id>` in every
   locale file. `biased` is the answer that reveals the bias; the two are shown
   in a random order, so neither should read as the obvious "correct" one.
3. Run `npm test`.

Each pool must stay larger than `QUIZ_LENGTH` so repeat runs differ — the
validator enforces this.

## Adding a bias

1. Add `{ id, categories }` to `src/data/biases.js`. An AI-era bias also needs
   `twin` (a classic bias id) and `source` (`{ label, url }`) — the validator
   rejects it otherwise.
2. Give it an icon. For a classic bias, drop `public/icons/<id>.png` next to the
   others — black line art on a transparent background
   (`scripts/process-icons.py` normalises source images). For an AI-era bias,
   add the geometry to `scripts/build-icons.mjs` and run `npm run icons`.
3. Add the `name` / `description` / `example` entry to every locale file.
4. Run `npm test`, then `npm run data` to refresh the machine-readable files.

## Credits

- The classic fifty are adapted from Visual Capitalist's
  [50 Cognitive Biases in the Modern World](https://www.visualcapitalist.com/50-cognitive-biases-in-the-modern-world/)
- The twelve AI-era entries are drawn from published work — each names its own
  source in `src/data/biases.js`. Sources range from peer-reviewed journals
  (*Nature*, *Nature Human Behaviour*, *Consumer Psychology Review*) to arXiv
  preprints; the `source` label says which, so check before citing.
- Contributors: [@tetyanaking](https://github.com/tetyanaking), [@vadymsvv](https://github.com/vadymsvv)

Licensed under the GNU General Public License v3.0 — see [LICENSE](LICENSE).
