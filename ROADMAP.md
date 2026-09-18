# Roadmap

The site is moving from a search box to a place people come to *feel* a bias,
name it, and leave with one thing to do about it. The dictionary stays; the
home page starts from situations, not terms.

Order is by value per unit of effort, and each step builds on the last.

| # | Step | Why this position | Status |
|---|------|-------------------|--------|
| 0 | Routes (home / dictionary / one page per bias), situation doors, bias of the day, human↔AI twins | Foundation everything else hangs off | done |
| 1 | **Live demos** — feel anchoring, framing and the Forer effect before they are named | The hook: the one thing on the page worth sharing | done |
| 2 | **Counter-moves** — a "what to do about it" line for every bias, six languages | Turns recognition into use; feeds bias pages, doors and the daily bias | done |
| 3 | **Prompts for the machine** — copy-paste prompts against each AI-era bias | The practical "work with the machine better" promise | done |
| 4 | **A visual layer (three.js)** — a 3D map of all 62 biases, with twins linked across the human/machine divide, plus animated explanations on bias pages. Lazy-loaded so the rest of the site stays light; plan below | Makes the structure of the collection visible — who errs, and how the old biases echo in the new | done |
| 5 | **Spot the bias** — a scenario, three names, pick one | Replayable entertainment built from content that already exists | done |
| 6 | **Shareable results** — a result card for the quiz and the game | Distribution: the reason a visitor sends the link on | done |
| 7 | **Static pages per bias** — prerendered HTML with its own title and description | Search engines index `#/` routes poorly; this makes each bias findable | done |

## Step 4 plan — the visual layer

three.js arrives only when a scene scrolls into view (dynamic `import()`), so
the dictionary and the first paint never pay for it. Every scene has a plain
HTML equivalent already on the page, respects `prefers-reduced-motion`, and
stands down quietly when WebGL is unavailable.

- **4a — The bias map.** *(done)* All 62 as points of light in two hemispheres: the
  classic fifty on one side, clustered by their main category and coloured to
  match; the AI-era twelve on the other, grouped by layer. Each twin pair is
  joined by an arc across the divide, so "the machine inherited our habits" is
  something you can see. Drag to turn, hover for a name, click to open the
  bias. Sits above the twins list on the home page, which stays as the
  accessible version.
- **4b — Mechanism scenes.** *(done)* Short animations for the biases whose mechanism
  is easier to see than to read: model collapse (a distribution narrowing
  generation by generation), feedback-loop amplification (a small tilt growing
  each pass), survivorship bias (only the returning planes are counted),
  anchoring (estimates pulled towards a point). Shown on those bias pages.

Done with step 7: only English ships in the main bundle now (240 kB, 77 kB
gzipped, down from 158 kB); each other language is its own 16–20 kB chunk,
fetched before first paint for readers who use it.

Deliberately left out: accounts, streaks, and anything dressed up as a
personality assessment — they add upkeep and lean towards the pseudo-science the
site is meant to take apart.
