# Table columns keep their words: no more one-character columns

Status: implemented, 2026-10-07 (`4460cca46` phase 1, `dffc560d0` phase 2). Decision: D74 (in `docs/DECISIONS.md`). Owner: waldo.
Scope: the site's table CSS, a table wrapper in the site's HTML post-processing, the version pill, and the video
page's Features table. Every claim below was verified against the tree at `0b5ebf485` on 2026-10-07, and the widths
were measured on the live site with headless Chromium (1280 and 390 px viewports). Not in scope: the galaxy's and
the index pages' hand-built `<table>`s (they already sit in `.table-scroll` or are narrow), the markdown twins'
content apart from the empty Evidence column, any LLM stage.

## 1. Goal

Tables on the site squeeze short columns down to a character or two, so timestamps, types and field names break
mid-word ("7:<br>0<br>5", "Inte<br>ger", "Posti<br>ng", "Enu<br>m "Ite<br>m Led<br>ger…"), and the "Δ BC28" pill breaks
inside itself. The owner reported it on `videos/YX9UfUF0EsA/` (Features table) and `objects/table/32/` (Fields table).

Cause, in order of weight:

1. **`td { overflow-wrap: anywhere; }`** (`site/src/styles/site.css:178`, since D42 `67da363ef`). Unlike
   `break-word`, `anywhere` counts every character as a soft wrap opportunity when the browser computes a cell's
   min-content width, so the auto table layout may give any column a width of about one character, and does whenever
   a neighbouring column holds long prose. Measured, column widths in px at 1280 (now → with `break-word`):

   | Page | Table | Now | `break-word` |
   |---|---|---|---|
   | `videos/YX9UfUF0EsA/` | Feature / Status / At / Evidence | 193 / 173 / **43** / 375 | 213 / 178 / 56 / 336 |
   | `objects/table/18/` | No. / Name / Type / Explanation / Notes | 42 / **90** / **73** / 306 / 273 | 54 / 132 / 110 / 211 / 277 |
   | `objects/table/32/` | same | 43 / **88** / **77** / 273 / 302 | 54 / 136 / 99 / 203 / 292 |

   At 390 px, table 32's fifth row (Source No., a long TableRelation note) drops from 540 to 225 px high.

2. **The empty Evidence column on video pages.** `pipeline/render/video.ts:108-114` always writes four columns;
   the Evidence cell is `""` unless the status evidence was verified. Measured on the committed `content/videos/`:
   611 pages have a Features table, **429** of them have no evidence on any row. On `YX9UfUF0EsA` that empty column
   takes 375 of 784 px.

3. **The pill can wrap.** `.pill` (`site.css:197`) is `inline-block` without `white-space: nowrap`; the pill text
   `Δ BC28` comes from `site/src/lib/versions.ts:59` (`markMembers`, site build only). At 390 px it is 41×30 px (two
   lines); with `nowrap` 52×16.

4. **Short tables do not fill the width.** `.prose table { display: block; overflow-x: auto; }` (`site.css:107`)
   makes the `<table>` a block and its rows an anonymous table that shrinks to its content, so `width: 100%`
   (`site.css:176`) no longer reaches the rows: table 32's Property/Value table measures 397 of 784 px.

Table shapes affected (header row counts over committed `content/`): `| Property | Value |` 18,521;
`| No. | Name | Type | Explanation | Notes |` 4,938; `| Ordinal | Name | Caption | Notes |` 1,596;
`| Id | Name | Caption |` 648; `| Feature | Status | At | Evidence |` 611; smaller shapes on sources, localizations,
digests. Command: `grep -rh -B1 '^|---' content | grep '^| ' | sort | uniq -c | sort -rn`.

After this change:

- No table cell breaks a word unless the word alone is wider than the table (a long URL or identifier still breaks).
- The version pill never wraps.
- Markdown tables fill the content width and scroll sideways on a phone instead of crushing columns.
- Video pages with no verified evidence have a three-column Features table (Feature, Status, At).

## 2. Reader- and agent-facing behaviour, after

- **Site, every markdown table** (objects, videos, sources, localizations, digests, apps, features, changes, posts):
  columns get at least their longest word; prose columns (Explanation, Notes, Status) take what is left. On narrow
  screens the table scrolls horizontally inside its wrapper (`.table-scroll`), as it already does today.
- **Field names with a pill:** `Entry No. Δ BC28`. The name may wrap between words; the pill stays one piece.
- **Video pages, markdown twin and site:** when no feature has verified evidence, the table header is
  `| Feature | Status | At |`. When at least one does, all four columns stay and rows without evidence keep an
  empty cell (the column has content worth its width).
- **MCP / agents:** `cat` of a video page returns the three-column table for those 429 pages; nothing else changes.
  No frontmatter field changes (`features[].verified` stays).

## 3. Decisions

Draft D74: *Table cells wrap with `overflow-wrap: break-word`, never `anywhere`: `anywhere` lowers a column's
min-content width to one character and lets the auto layout crush short columns. Markdown tables on the site are
wrapped in `div.table-scroll` (the scroll container) and stay real tables, so they fill the width. Pills never wrap.
A generated table leaves out a column that is empty on every row (first case: the video Features table's Evidence).*

Rejected:

- **`table-layout: fixed` with per-shape column widths.** Needs a width map per table shape (nine shapes, more to
  come) and still clips on phones; the auto layout is right once min-content is honest.
- **`white-space: nowrap` on short columns (At, Type, No.).** Hides the cause, needs a class per column the
  markdown renderer cannot emit, and `Type` holds long values (`Enum "Item Ledger Entry Type"`) that must wrap.
- **Removing `overflow-wrap` from `td` entirely.** A bare URL or a long identifier would then widen the table past
  the screen on desktop; `break-word` still breaks those, only when nothing else fits.
- **CSS-only fix for the empty Evidence column** (`:empty` hiding). Hides cells but not the `<th>`, and the markdown
  twin agents read keeps the useless column.
- **Dropping Evidence on every video page.** 182 pages carry real quotes there; that is the evidence a reader checks the status against.

## 4. Contract

**CSS** (`site/src/styles/site.css`):

```css
/* line 107: the wrapper scrolls; the table stays a table */
.table-scroll { display: block; overflow-x: auto; }
/* line 178 */
td { overflow-wrap: break-word; }
/* line 197: add */
.pill { …existing…; white-space: nowrap; }
```

`.prose table` loses `display: block; overflow-x: auto;`.

**`wrapTables(html: string): string`**, new in `site/src/lib/links.ts`: wraps every top-level `<table>…</table>` in
`<div class="table-scroll">…</div>`; idempotent (a table already directly inside `div.table-scroll` is left alone);
nested tables do not occur in rendered markdown and need no handling. Called on the `html` of each of the ten
`site/src/pages/**/index.astro` that today call `siteLinks(...)` before `set:html` (list: `grep -rln "siteLinks("
site/src/pages`), after `siteLinks` and, on object pages, after `markMembers`.

**Video renderer** (`pipeline/render/video.ts:107-114`): compute `ev` per feature first; `const withEv =
evs.some(Boolean)`; header and separator are 4 or 3 columns accordingly; rows append `| ${ev} |` only when `withEv`.

Example, `content/videos/YX9UfUF0EsA.md` after:

```
| Feature | Status | At |
|---|---|---|
| M365 Copilot chat in Business Central | generally available (roadmap [573362](../features/573362.md)), demoed | [7:05](https://www.youtube.com/watch?v=YX9UfUF0EsA&t=425s) |
```

## 5. Test plan (write first)

- `tests/unit/video-pages.test.ts`, new cases:
  - two features, neither `status_evidence_verified` → header `| Feature | Status | At |`, separator `|---|---|---|`,
    every row has exactly 4 pipes.
  - two features, one verified with quote and `status_evidence_t` → header has `Evidence`, the other row ends `|  |`.
- `tests/unit/site-links.test.ts` (new, or extend the existing test of `siteLinks` if there is one):
  - `wrapTables("<p>x</p><table><tr><td>a</td></tr></table>")` →
    `<p>x</p><div class="table-scroll"><table><tr><td>a</td></tr></table></div>`.
  - two tables → two wrappers; input without a table → unchanged; already-wrapped input → unchanged (idempotent).
- CSS has no unit test; it is checked in section 7.

## 6. Tasks

**Phase 1, site only (ships alone, no content change):**

1. `site.css`: `td { overflow-wrap: break-word; }`, `.pill { white-space: nowrap; }`, `.prose table` rule reduced to
   `.table-scroll`.
2. `wrapTables` in `site/src/lib/links.ts` with its tests; call it in the ten page templates.
3. Build and check (section 7).

**Phase 2, the video renderer (one content commit, about 429 pages):**

4. Tests from section 5 for the video table, then the change in `pipeline/render/video.ts`.
5. Re-render. `publishedHandler` rewrites a page only when its body changed (`video.ts`, the `body()` comparison), and
   the nightly re-renders video pages (`docs/RUNBOOK.md:51`), so the next nightly rewrites the ~429 pages in its
   content commit with no LLM call. Do not hand-edit `content/`. If the coder wants it sooner, run the publish stage
   for videos locally and commit the result as one `content:` commit; either way it is one large content commit,
   because every affected page changes the same three lines.

## 7. Verification

- `npm test` green.
- Site build (Node 22, see the local-build note in `docs/RUNBOOK.md`), serve `site/dist` under the base path, then
  measure with Playwright at 1280 and 390 px:
  - `videos/YX9UfUF0EsA/`: the At column ≥ 50 px at 1280; no `td` whose text is one word has a rendered height of
    more than one line box.
  - `objects/table/32/`: Name ≥ 120 px, Type ≥ 95 px at 1280; every `.pill` height ≤ 18 px at 390.
  - `objects/table/32/`: the Property/Value table's `<table>` width equals its `.table-scroll` wrapper's width.
  - At 390 a wide Fields table scrolls inside `.table-scroll` (`scrollWidth > clientWidth`) and the page itself does
    not scroll horizontally (`document.documentElement.scrollWidth === innerWidth`).
- After phase 2: `grep -l '| Feature | Status | At | Evidence |' content/videos/*.md | wc -l` is 182 (± the night's new
  videos), and `grep -l '| Feature | Status | At |$' content/videos/*.md | wc -l` is about 429.
- Check the page size budget: the wrapper adds 31 bytes per table; 20k object pages × 2-3 tables is about 1.5 MB on
  the Pages build, well within the 900 MB budget (`0b5ebf485`).

## 8. Later, not in this spec

- Leaving out other all-empty columns (the Notes column of fields and enum tables on objects without relations) once
  the same rule has been measured on those shapes.
- A sticky first column on phone-width tables.

## 9. Risks and open questions

- **Explanation gets narrower on field tables** (273 → 203 px on table 32 at 1280; its first row grows from 78 to
  120 px) because Name and Type now get their real width. Accepted: a readable name and type outweigh one more line
  of prose. Default: ship as is.
- **Phones scroll sideways more often** (table 32 at 390: 551 px of content in a 358 px box). That is what the
  wrapper is for; today the same table is 540 px tall per row instead. Default: ship as is.
- **Something relies on `.prose table` being a block** (e.g. a `max-height` or a script measuring it). `grep -rn
  "prose table" site/src` finds only `site.css:107` at `0b5ebf485`. Default: none.
- **A coding session adds a table outside `.prose`** and expects the old scroll behaviour: it gets `.table-scroll`
  by wrapping, as the localizations and objects index pages already do.

## 10. Files

Changed: `site/src/styles/site.css`, `site/src/lib/links.ts`, the ten `site/src/pages/**/index.astro` that call
`siteLinks`, `pipeline/render/video.ts`, `tests/unit/video-pages.test.ts`. New: `tests/unit/site-links.test.ts`
(unless an existing test file covers `links.ts`). Regenerated by the pipeline: about 429 `content/videos/*.md`.
Docs at ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`.

## 11. Definition of Done

- [x] Section 5 tests written first, then green with `npm test`.
- [x] Phase 1 shipped; section 7 measurements pass on the local build and then on the live site.
- [x] Phase 2 shipped; the video counts in section 7 hold after the content commit.
- [x] D74 appended to `docs/DECISIONS.md` (text from section 3).
- [x] PLAN row M12 marked shipped; HANDOFF "Open specs" entry removed.
- [x] This section 12 renamed "Built, deviations" and filled in.

## 12. Built, deviations

Built on `dev/extract` from `28f7805db`, cited lines re-verified there (`site.css:107/178/197`, `video.ts:107-114`,
ten `siteLinks` callers) and unchanged since `0b5ebf485`. Phase 1 `4460cca46`, phase 2 `dffc560d0`. The "live
site" items of section 11 hold on the local build; they are re-checked live after the push and the next nightly.

Measured on the local build with headless Chromium, column widths in px (before → after):

| Page, viewport | Table | Before | After |
|---|---|---|---|
| `videos/YX9UfUF0EsA/`, 1280 | Feature / Status / At / Evidence | 193 / 173 / 43 / 375 | 213 / 178 / 56 / 336 |
| `objects/table/18/`, 1280 | No. / Name / Type / Explanation / Notes | 42 / 89 / 73 / 306 / 273 | 54 / 132 / 110 / 211 / 277 |
| `objects/table/32/`, 1280 | same | 42 / 89 / 76 / 279 / 298 | 54 / 136 / 99 / 203 / 292 |
| `objects/table/32/`, 1280 | Property / Value (row width) | 397 of 784 | 784 of 784 |
| `objects/table/32/`, 390 | Fields table | 358 wide, row 5 540 px high | 551 in a 358 px scroller, row 5 225 px |

One-word cells broken over two lines or more (first table rows checked per page, 1280): 37 / 142 / 87 → 0 / 0 / 0.
`.pill` height at 390: 30 → 16 px. After phase 2 rendered locally (then discarded): 182 pages with four columns,
429 with three, as section 7 expects.

Deviations:

- **The section 4 example is wrong:** `YX9UfUF0EsA` has verified evidence on some rows (e.g. "MVP private preview
  access" at 35:41), so it keeps all four columns; its Evidence column was not empty, only sparse. The 429 count is
  right; the example page is not one of them.
- **One CSS line outside tables:** `.evidence > li { min-width: 0; }`. At 390 px object pages scrolled sideways
  before this change too (`objects/table/32/` 533 px, `table/18/` 463 px): a grid item in the evidence list took
  the min-content width of a long mono source path. Section 7 requires no page scroll, so the grid item may now
  shrink and the path wraps (`break-word`). After: 390/390 on all three pages.
- **`wrapTables` is called at `set:html`** (`set:html={wrapTables(html)}`) rather than in the `const html` chain,
  so it runs last on every page, after `siteLinks`, `markMembers`, `tagSeekLinks` and `posterRows`.
- **The version pill needed CSS only** (`white-space: nowrap`); `VersionTimeline.astro` and `object.ts` untouched.
- **A local re-render touches 575 video pages, not 429:** the extra pages carry other renderer changes already on
  main but not yet in `content/` (D67 object links). The table change itself is 429 pages.
- `tests/unit/site-links.test.ts` is new (`source-stage.test.ts` covers `tagSeekLinks` only) and adds a `siteLinks`
  case.
