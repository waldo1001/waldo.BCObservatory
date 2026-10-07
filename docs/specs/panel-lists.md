# Panel lists keep their words: the lens picker's rows, and a row grid that cannot squeeze a label

Status: proposed, 2026-10-07. Decision: D78 (reserved, appended to `docs/DECISIONS.md` at ship time). Owner: waldo.
Scope: the galaxy side panel's list rows (`site/src/components/Galaxy.astro:188-202`), the lens picker
(`site/src/scripts/galaxy.ts:1314-1318`), and a headless sweep that guards every panel list. Every claim below was
verified against the tree at `fa53a8d1ab` on 2026-10-07; the failure was measured on a build of that tree with headless
Chromium at 1440 and 390 px. Not in scope: the neighbourhood explorer's lists (flexbox, not affected), tables (D74).

## 1. Goal

The owner's screenshot (2026-10-07, AL Development system, "more lenses" → "Pick a localization") shows the panel list
written one character per line: "A u s t r a l i a ( A U )". It has been seen in other lists too.

Cause, verified:

- Every `.g-list` row is a three-column grid: `grid-template-columns: 10px 1fr auto` (`Galaxy.astro:190`), built for
  rows of a marker (`.g-dot` or `.g-shape`), a label and a count.
- The lens picker writes rows with a label only:
  `<li><button type="button" data-pick="..."><span>${label}</span></button></li>` (`galaxy.ts:1318`). The label lands in
  the first column, 10 px wide, and wraps per character.
- The picker serves both `#lens=pick:localization` and `#lens=pick:source` (`galaxy.ts:1316`), the targets of the
  Questions menu entries "Which countries change it?" and "Who writes about it?" (`site/src/lib/questions.ts`).

Measured on the built site, every panel state the galaxy offers (30 states: both pickers, a lens of each group, the
galaxy panel, three systems, a star panel, Tilt of Finance; 1440 and 390 px): rows whose label is narrower than 24 px
and taller than 40 px:

| Panel | Rows squeezed |
|---|---|
| Pick a localization | 22 of 22 |
| Pick a source | 32 of 32 |
| every other state | 0 |

A static audit agrees: of the 23 places that write `.g-list` rows (`galaxy.ts`, helpers `row`, `thingBtn`, `mediaRow`,
`targetRow`, `objectRows` and 8 inline templates), only the picker omits the marker. The grid is the fragile part:
the next row without a marker breaks the same way, silently.

After this change:

- Picker rows show a marker and a count, like every other row: a localization row has the localization dot and the
  number of stars that lens lights; a source row has the source's kind (video channel triangle, blog bar) and its count.
- A row without a marker can no longer squeeze its label: the grid gives the label the first column when there is no
  marker.
- A headless sweep, run before a release that touches the galaxy, fails on any squeezed label in any panel state.

## 2. Reader-facing behaviour, after

"Pick a localization": 22 rows, `• Australia (AU)   41`, sorted by count, highest first, then by name; the dot uses the
localization colour (`--sys-localization`, as the Countries list of Tilt does, `galaxy.ts:931`). "Pick a source": 32
rows, `▲ Microsoft Dynamics 365 Business Central   212` for a channel, `▬ Aardvark Labs   38` for a blog, the shape
from the source's kind. The count is the number of stars the lens would light (`lens.match` over `g.nodes`), computed
once when the picker opens, the same number the lens chip shows when pressed. Clicking a row sets the lens as today.
Keyboard, focus and hash behaviour are unchanged.

## 3. Decisions

**D78 A panel list row always has its three parts, and the grid survives one that does not.** Panel rows are a marker,
a label and a count; the lens picker gets all three (marker by group, count of stars the lens lights). The row grid
switches to two columns when a row has no marker (`:has()`), so a label is never placed in the 10 px marker column.
A headless sweep over every panel state guards it.

Rejected:

- Only adding markers to the picker: fixes the symptom, leaves the trap for the next row template.
- Only the CSS fallback: the picker would work but stay the one list without markers or counts, unlike its neighbours.
- `grid-template-areas` with named cells on every row: needs a class on every label span in 23 templates for the same
  result `:has()` gives in one rule. `:has()` is supported by every browser the site targets (Chrome 105+, Safari
  15.4+, Firefox 121+); without it the row falls back to today's grid, which the marker fix already makes correct.

## 4. Contract

### 4.1 CSS (`site/src/components/Galaxy.astro`)

After the row rule at line 189-191:

```css
.g-panel :global(.g-list button:not(:has(> .g-dot, > .g-shape))),
.g-panel :global(.g-list a:not(:has(> .g-dot, > .g-shape))) { grid-template-columns: minmax(0, 1fr) auto; }
```

The label column is `minmax(0, 1fr)` so a long label wraps by word, not by character (D74's `break-word` rule
applies). `a.g-media` (D73) keeps its own two-column rule; it always has a shape.

### 4.2 The picker (`site/src/scripts/galaxy.ts`)

- `pickerRows(group: "Localization" | "Source")` returns `{ id, label, n, marker }[]`: `n` =
  `g.nodes.filter(lens.match).length` per lens, `marker` = `<span class="g-dot" style="--dot: var(--sys-localization)">`
  for a localization, `g-shape tri` or `g-shape bar` for a source by its kind (the source node's `kind`, or
  `sources.yaml` kind through the graph summary: verify which field the summary carries; a source of unknown kind gets
  a plain dot).
- Rows sorted by `n` descending, then label. The row markup is the standard three parts with the count in `<small>`.
- Pure helper for sorting and counting in `galaxy-core.ts` (`pickerRows` takes the lens list and the nodes), tested.

### 4.3 The sweep (`scripts/ui-sweep.mjs` new, not part of CI)

A Playwright script, run against `site/dist` served under the base path (the memory note's method:
`npx --yes http-server` is not used; `python3 -m http.server` as in the note), that visits the 30 states of section 1
at 1440 and 390 px and fails when any `.g-panel` or `details.ask` row has a child label with at least 4 characters,
width below 24 px and height above 40 px. Playwright is not a dependency of the repository: the script imports it from
`PLAYWRIGHT_DIR` (default: the global npx cache) and exits 0 with a message when it is missing. `docs/RUNBOOK.md` says
when to run it (a change to `galaxy.ts`, `Galaxy.astro`, `explorer.ts` or the panel CSS).

## 5. Test plan (write first)

- `tests/unit/galaxy-core.test.ts`: `pickerRows` sorts by count then label; counts equal the matches; a source of kind
  `youtube` gets `tri`, `blog` gets `bar`, unknown gets the dot.
- The sweep (4.3) before the change reports 54 squeezed rows (22 + 32) per width; after, 0.

## 6. Tasks

1. `pickerRows` in `galaxy-core.ts` with tests.
2. The picker template in `galaxy.ts` uses it.
3. The `:has()` rule in `Galaxy.astro`.
4. `scripts/ui-sweep.mjs`, `docs/RUNBOOK.md` line.
5. Build, sweep, screenshots of both pickers at 1440 and 390 px in dark and light.
6. Close: D78 appended, PLAN M16 shipped, HANDOFF moved, section 12 "Built, deviations".

## 7. Verification

- `npm run typecheck && npm test`; the site build (Node 22).
- `node scripts/ui-sweep.mjs` on the build: 0 squeezed rows in 60 states.
- Manual: "Pick a localization" and "Pick a source" at 390 px read as normal rows with counts; a row click sets the
  lens; Esc and the Galaxy crumb behave as before.
- To prove the fallback, temporarily remove a marker from one helper (`row`) in a local build and rerun the sweep: 0
  squeezed rows (the `:has()` rule takes over); revert.

## 8. Later, not in this spec

- Run the sweep in CI once Playwright is a dev dependency (about 150 MB of browser download per run on
  `ubuntu-latest`; not worth it for one guard today).

## 9. Risks and open questions

- A source whose kind the summary does not carry gets a plain dot: acceptable, still a three-part row.
- Counting matches for 54 lenses when the picker opens costs 54 × 1,135 node checks: under a millisecond.

## 10. Files

New: `docs/specs/panel-lists.md` (this), `scripts/ui-sweep.mjs`.
Modified: `site/src/components/Galaxy.astro`, `site/src/scripts/galaxy.ts`, `site/src/scripts/galaxy-core.ts`,
`tests/unit/galaxy-core.test.ts`, `docs/RUNBOOK.md`, `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`.

## 11. Definition of Done

- Both pickers show markers and counts; the sweep reports 0 squeezed rows at both widths; the fallback test of
  section 7 passes.
- Tests green, site build passes.
- D78 appended, PLAN M16 shipped, HANDOFF moved.

## 12. Proposed edits to other files (not applied)

### `docs/DECISIONS.md`, append

The D78 text of section 3.

### `docs/PLAN.md` section 5, row before `v0.2+`

| **M16 panel lists** | the lens picker's rows get a marker and a count; panel rows without a marker get a two-column grid; a headless sweep over every panel state (`docs/specs/panel-lists.md`, D78) | half a day | none: deterministic, no LLM |

### `docs/HANDOFF.md`, open specs

- **Panel lists** (`docs/specs/panel-lists.md`, D78, M16). Status: proposed 2026-10-07, nothing implemented. Start with
  `pickerRows` in `galaxy-core.ts`, then the `:has()` rule in `Galaxy.astro`. Until it lands "Pick a localization" and
  "Pick a source" print every label one character per line (22 and 32 rows).
