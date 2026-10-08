# The changes list filters by repository: BCApps, AL-Go and BCQuality pills

Status: proposed, 2026-10-08. Decision: D82 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M20
(reserved). Owner: waldo.
Scope: the site's changes index page (`site/src/pages/changes/index.astro`), one new pure helper module
`site/src/scripts/pills-core.ts` with its unit test, the three D80 pill helpers in `site/src/scripts/galaxy-core.ts`
that become wrappers over it, and one global style block in `site/src/styles/site.css`. Every claim below was verified
against the tree at `243680a2a7` on 2026-10-08. Not in scope: the pipeline, `content/`, `data/`,
`content/changes/llms.txt`, the MCP server, the change pages themselves, `/changes/week/` and `/changes/upcoming/`,
pills for `change_kind` (feature, fix, ...), deep links into the filter from other pages (section 8). Scoped with the
owner on 2026-10-08: D80 toggle semantics, state in the URL query, no ride-alongs.

## 1. Goal

The changes index is one list of every change page, with no way to see one repository's changes.

- `site/src/pages/changes/index.astro:19-28` renders every entry of the `changes` collection in one `ul.list`,
  newest first (line 7). On the committed content that is 1,083 rows (`ls content/changes/*/ | wc -l`): `bcapps` 965,
  `al-go` 28, `bcquality` 90 (`grep -h '^repo:' content/changes/*/*.md | sort | uniq -c` gives the same three numbers
  as `microsoft/BCApps`, `microsoft/AL-Go`, `microsoft/BCQuality`).
- A row never says which repository it comes from. Lines 22-25 print the title (`#2229 Surface empty BCPT results
  ...`, no repository in it), the `change_kind` badge, `breaking`, `community contribution`, the base branch, the
  major, the date, the object count and the summary. Only the link target `changes/<slug>/<n>/` carries the slug. A
  reader after AL-Go's changes scans 1,083 rows for 28.
- The page has no control. Its only split is the meta line at line 18, counts per `change_kind` across all three
  repositories (`295 feature · 577 fix · ...`), and it is text, not a filter.
- The galaxy already has the pattern (D80): pills with a count, each one a toggle, all on by default, the last one
  never off, state in the hash. The helpers `WEEK_KINDS`, `parseKinds`, `kindsParam`, `toggleKind`, `usableKinds` and
  `pillDisabled` sit at `site/src/scripts/galaxy-core.ts:92-117`, tested at `tests/unit/galaxy-core.test.ts:89-103` and
  `121-131`, and the pill markup and style at `site/src/scripts/galaxy.ts:926-935` and
  `site/src/components/Galaxy.astro:220-226`. They are bound to the three week kinds `v`, `p`, `c`.
- Two list pages already filter a static list in the browser. The deprecation radar
  (`site/src/pages/code/deprecations/index.astro:62-80`) sets `li.hidden` from `data-kind` and `data-state` on each
  row (line 32) and prints `N of M shown` in `.radar-count`; the event explorer keeps its state in the query string
  with `history.replaceState` (`site/src/scripts/events.ts:43-45` writes it, `50-51` reads it).
- The slug is the first segment of the entry id: the `changes` collection generates ids from the path under
  `content/changes` with `.md` stripped (`site/src/content.config.ts:41-44`), so `bcapps/12207`, `al-go/2229`,
  `bcquality/213`. `week.astro:14` already keys on it for the Tooling group (`codeGroup`, D80).

After this change:

- Three pills sit above the list: `BCApps 965`, `AL-Go 28`, `BCQuality 90` (counts from the build), all pressed.
- A pill toggles its repository's rows; the last pressed pill never turns off; a pill whose repository has no page is
  disabled while off and never while pressed (D80's rule, measured on the galaxy's empty-week trap).
- The filter lives in the URL as `?repo=al-go,bcquality`, left out when all three are on. A link with the parameter
  opens filtered; a link that names only repositories without pages opens on all three.
- The heading keeps the section's total. A count line beside the pills reads `118 of 1,083 shown` while filtered
  and is empty when all three are on. The kind counts line follows the shown rows.
- Nothing in `content/`, `data/` or the nightly changes; no model call; no page rewritten.

## 2. Reader- and agent-facing behaviour, after

The page `/changes/` (`https://waldo1001.github.io/waldo.BCObservatory/changes/`), top to bottom:

```
code changes
1,083 changes
<lede, unchanged>
This week: 82 changes →
[BCApps 965] [AL-Go 28] [BCQuality 90]   90 of 1,083 shown   (BCQuality pressed alone)
51 feature · 23 fix · 11 other · 5 refactor
<the list, rows of the pressed repositories only>
```

The pill row, exact markup (the counts are the build's):

```html
<div class="pills" role="group" aria-label="Repository">
  <button type="button" class="pill-btn" data-pill="bcapps" data-count="965" aria-pressed="true">BCApps <small>965</small></button>
  <button type="button" class="pill-btn" data-pill="al-go" data-count="28" aria-pressed="true">AL-Go <small>28</small></button>
  <button type="button" class="pill-btn" data-pill="bcquality" data-count="90" aria-pressed="true">BCQuality <small>90</small></button>
  <span class="pill-count mono-meta" aria-live="polite"></span>
</div>
<p class="meta" data-kinds>2 breaking · 353 feature · 619 fix · ...</p>
```

Every row carries its slug and kind: `<li data-repo="al-go" data-kind="fix">`. The row's content is unchanged.

Pill order: BCApps, AL-Go, BCQuality, the order the lede names them (line 16) and the order of the request. Labels
are the repository names without `microsoft/`.

| Reader does | List | Pills | Count line | URL |
|---|---|---|---|---|
| opens `/changes/` | all 1,083 rows | all pressed | empty | unchanged |
| clicks AL-Go | 1,055 rows (BCApps and BCQuality) | AL-Go off | `1,055 of 1,083 shown` | `?repo=bcapps,bcquality` |
| then clicks BCApps | 90 rows | BCQuality only | `90 of 1,083 shown` | `?repo=bcquality` |
| then clicks BCQuality (the last one) | all 1,083 rows | all pressed | empty | `repo` removed |
| opens `/changes/?repo=al-go` | 28 rows | AL-Go pressed only | `28 of 1,083 shown` | as opened |
| opens `/changes/?repo=al-go,nope` | 28 rows | AL-Go pressed only | `28 of 1,083 shown` | rewritten to `?repo=al-go` |
| opens `/changes/?repo=nope` | all rows | all pressed | empty | `repo` removed |
| opens `?repo=<slug>` of a repository with no page yet | all rows | all pressed, that pill disabled | empty | `repo` removed |

The kind counts line (`data-kinds`) is recomputed from the shown rows on every change: kinds A to Z as today
(line 8 sorts them), `<n> <kind>` joined with ` · `, kinds at zero left out. With all pills on it reads exactly what
the build printed.

The URL is written with `history.replaceState` (no history entry per click, as the events and atlas pages do); the
hash and every other query parameter are left alone. Slugs in the parameter are in pill order whatever the click
order was.

Keyboard: the pills are buttons, so Tab reaches them and Space or Enter toggles; `aria-pressed` carries the state,
`aria-live="polite"` on the count line announces the new count. On a coarse pointer the pills are 44 px tall, as the
galaxy's are (`Galaxy.astro:226`). At 390 px the three pills and the count wrap onto two lines; no horizontal scroll.

Without JavaScript the page is what the build wrote: all rows, all pills pressed, an empty count line; a click does
nothing. The pills are not hidden behind `<noscript>` (section 9).

Agents: nothing changes. `content/changes/llms.txt` (served as is by `site/src/pages/changes/llms.txt.ts`), the
markdown twins, the frontmatter and the MCP server are untouched; `?repo=` is reader state on one HTML page.

## 3. Decisions

Draft D82, appended to `docs/DECISIONS.md` at ship time:

> **D82 The changes list filters by repository, with the galaxy's pills.** The changes index listed every change
> page of the three repositories in one list (1,083 rows on 2026-10-08: BCApps 965, AL-Go 28, BCQuality 90) and no
> row said which repository it came from. The page gets three pills, BCApps, AL-Go and BCQuality, each with its
> count, with the semantics of the this-week pills (D80): all on by default, each one toggles, the last one never
> turns off, a pill with nothing behind it is disabled only while off. The state is `?repo=bcapps,al-go` in the
> query string, left out when all three are on, and a link whose repositories have no page falls back to all three.
> A count line reads `N of M shown` while filtered; the kind counts follow the shown rows. The D80 helpers move
> into `site/src/scripts/pills-core.ts` as generic functions over any pill set (`parsePills`, `pillsParam`,
> `togglePill`, `usablePills`, `pillDisabled`); `galaxy-core.ts` keeps its names as wrappers and its tests. The
> pill style becomes the global `.pills` and `.pill-btn` in `site.css` (D53: no scoped style on a 1,083-row page).
> Deterministic, browser-side, no page in `content/` or `data/` changes. Rejected: a radio row with an All pill
> (one click fewer to isolate a repository, but a second pill pattern next to D80's with its own helper and tests);
> one index page per repository (three more pages and 1,083 more rows in the tar, D53 and D76, for what a filter does
> on one page); the state in the hash as the galaxy does (list pages keep theirs in the query: events, atlas,
> search); kind pills and deep links from the Upcoming page and the change page breadcrumb (owner's call on
> 2026-10-08: later, section 8); hiding the pills without JavaScript (an inert pressed pill tells the truth).

Rejected in more detail:

- **Radio with an All pill.** Four pills, one pressed at a time. One click isolates a repository against two with
  toggles. Rejected because it is a second behaviour next to D80's in the same site, with its own helper and tests,
  and because "BCApps and BCQuality without AL-Go" is then impossible.
- **A page per repository (`/changes/bcapps/`, ...).** Three more index pages carrying the same 1,083 rows again.
  D53 and D76 count bytes; a filter adds about 35 bytes of attributes per row on one page instead.
- **Hash state (`#repo=`).** The galaxy keeps its whole state in the hash because it is one page with lenses and
  stars; the list pages that filter (`events.ts:43-51`, `atlas.ts:63,118`, `search.ts:156,179`) use the query. The
  changes page is a list page.
- **A server-rendered filtered list.** The site is static (GitHub Pages); there is no server to read `?repo=`.
- **Renaming the existing `.pill` class.** `site.css:202` styles a small accent chip used by `site/lib/versions.ts:59`
  (`+ BC30`) and the pattern `pill` names explorer nodes (`explorer.ts:126`). The buttons get a new class,
  `.pill-btn`, inside `.pills`.
- **Moving the galaxy's `.g-kind-pill` onto `.pill-btn` now.** Same look, but the galaxy's CSS is scoped under
  `.g-panel` and tested by the UI sweep (D78); one style for both is section 8.

## 4. Contract

### 4.1 `site/src/scripts/pills-core.ts` (new)

Pure, no DOM, the D80 functions generalised over `all`, the pill ids in pill order. Semantics are exactly
`galaxy-core.ts:94-117` with `all` in place of `WEEK_KINDS`.

```ts
/** `?repo=` or `kinds=`: unknown ids dropped, whitespace trimmed; empty, missing or all unknown means every pill. */
export function parsePills<K extends string>(s: string | null | undefined, all: readonly K[]): Set<K>;
/** The parameter value: null when every pill is on (the URL leaves it out) or none is, else the ids in pill order. */
export function pillsParam<K extends string>(on: Set<K>, all: readonly K[]): string | null;
/** Toggle one pill; switching off the last one turns every pill on, so the list is never empty. */
export function togglePill<K extends string>(on: Set<K>, k: K, all: readonly K[]): Set<K>;
/** When no pill that is on has anything behind it, every pill comes back on; an all-empty set stays as asked. */
export function usablePills<K extends string>(on: Set<K>, counts: Record<K, number>, all: readonly K[]): Set<K>;
/** A pill is disabled only when it has nothing behind it and is off: a pressed pill can always be switched off. */
export const pillDisabled: (pressed: boolean, count: number) => boolean;
/** The kind counts line: kinds A to Z, `<n> <kind>` joined with " · ", "" when there is nothing. */
export function kindsLine(kinds: Iterable<string>): string;

/** The changes list's repositories, in pill order, with the label each pill prints (the D61 source slugs). */
export const CHANGE_REPOS: readonly (readonly [slug: string, label: string])[] =
  [["bcapps", "BCApps"], ["al-go", "AL-Go"], ["bcquality", "BCQuality"]];
/** The repository slug of a change entry id (`bcapps/12207` → `bcapps`). */
export const repoOf = (id: string): string => id.split("/")[0];
```

### 4.2 `site/src/scripts/galaxy-core.ts` (changed, lines 94-117)

`parseKinds`, `kindsParam`, `toggleKind` and `usableKinds` become one-line wrappers that pass `WEEK_KINDS`;
`pillDisabled` is re-exported from `pills-core.ts`. Exports, names and behaviour unchanged, so
`tests/unit/galaxy-core.test.ts` and `galaxy.ts:56` do not change. `WEEK_KINDS` and `WeekKind` stay where they are.

### 4.3 `site/src/pages/changes/index.astro` (changed)

Frontmatter adds, after `kinds` (line 8):

```ts
import { CHANGE_REPOS, kindsLine, repoOf } from "../../scripts/pills-core";
const perRepo = new Map(CHANGE_REPOS.map(([slug]) => [slug, all.filter((c) => repoOf(c.id) === slug).length]));
```

Markup: between the this-week line (17) and the kinds line (18), the `.pills` block of section 2, one button per
`CHANGE_REPOS` entry with `data-pill`, `data-count` and `aria-pressed="true"`, then `.pill-count`. The kinds line
(18) becomes `<p class="meta" data-kinds>{kindsLine(all.map((c) => String(c.data.change_kind)))}</p>`, which prints
exactly what line 18 prints today. Each `<li>` (21) gains `data-repo={repoOf(c.id)}` and
`data-kind={String(c.data.change_kind)}`. The `h1` prints `all.length.toLocaleString("en")` as the objects page does
(`objects/index.astro:20`), so the count line and the heading agree on `1,083` (section 9, default).

Script, inline in the page as the deprecation radar's is (`deprecations/index.astro:62-80`), importing the helpers
with `import { CHANGE_REPOS, kindsLine, parsePills, pillsParam, togglePill, usablePills, pillDisabled } from
"../../scripts/pills-core";`:

1. `all = CHANGE_REPOS.map(([slug]) => slug)`; `counts` from each button's `data-count`; `rows` = every
   `ul.list > li[data-repo]`.
2. `on = usablePills(parsePills(new URLSearchParams(location.search).get("repo"), all), counts, all)`.
3. `apply()`: for each row `li.hidden = !on.has(li.dataset.repo)`; for each button `aria-pressed` and `disabled =
   pillDisabled(pressed, count)`; the count line is `` `${shown.toLocaleString("en")} of ${rows.length.toLocaleString("en")} shown` `` when
   `on.size < all.length`, else `""`; the kinds line is `kindsLine(shown rows' data-kind)`; the URL: `url.searchParams.set("repo", v)` when `pillsParam(on, all)` is a
   string, else `delete`, then `history.replaceState(null, "", url)`.
4. Each button's click: `on = togglePill(on, slug, all); apply()`.
5. `apply()` once on load (step 2 may have changed what the URL asked for).

### 4.4 `site/src/styles/site.css` (changed, next to `.pill` at line 202)

```css
.pills { display: flex; flex-wrap: wrap; gap: 6px 8px; align-items: center; margin: 12px 0 4px; }
.pill-btn { display: inline-flex; align-items: center; gap: 6px; min-height: 32px; padding: 0 10px; font: 400 12px var(--font-mono); color: var(--text-2); background: var(--surface); border: 1px solid var(--line-strong); border-radius: 999px; cursor: pointer; }
.pill-btn[aria-pressed="true"] { color: var(--accent); border-color: var(--accent); background: var(--accent-surface); }
.pill-btn:disabled { opacity: .45; cursor: default; }
.pill-btn small { font: inherit; opacity: .8; }
.pills .pill-count { margin-left: 4px; }
@media (pointer: coarse) { .pill-btn { min-height: 44px; } }
```

Copied from `Galaxy.astro:221-225` (`.g-kind-pill`), with `var(--surface)` for the background instead of the galaxy's
`--g-port-bg`. Every token used is global (`site/src/lib/tokens.ts:36-37,60` emits `surface`, `accent-surface`,
`line-strong`, `text-2`, `accent`). Global and not a page `<style>`: a scoped style puts a `data-astro-cid-*`
attribute on every element it covers (D53), and this page has 1,083 rows of six elements.

### 4.5 Data shapes

No schema, config key or data file changes. One rendered row, after:

```html
<li data-repo="al-go" data-kind="fix">
  <a href="/waldo.BCObservatory/changes/al-go/2229/">#2229 Surface empty BCPT results as a warning instead of silent success</a>
  <span class="row-meta"><span class="badge">fix</span></span>
  <div class="meta">main · 2026-07-22 · 0 objects</div>
  <div>When BCPT performance tests produce a results file with no entries, ...</div>
</li>
```

## 5. Test plan (write first)

`tests/unit/pills-core.test.ts` (new), `node:test` like the others, `R = ["bcapps", "al-go", "bcquality"]`,
`sorted(set)` = the ids joined after sorting:

| Call | Expected |
|---|---|
| `parsePills("al-go", R)` | `{al-go}` |
| `parsePills("bcquality,al-go", R)` | `{al-go, bcquality}` |
| `parsePills(" al-go , bcapps ", R)` | `{al-go, bcapps}` (trimmed) |
| `parsePills("al-go,al-go", R)` | `{al-go}` |
| `parsePills(s, R)` for `""`, `"nope"`, `"nope,x"`, `null`, `undefined` | all three |
| `pillsParam(new Set(R), R)` | `null` |
| `pillsParam(new Set(["bcquality", "al-go"]), R)` | `"al-go,bcquality"` (pill order, not insertion order) |
| `pillsParam(new Set(["bcapps"]), R)` | `"bcapps"` |
| `pillsParam(new Set(), R)` | `null` |
| `togglePill(new Set(R), "bcapps", R)` | `{al-go, bcquality}` |
| `togglePill(new Set(["al-go"]), "al-go", R)` | all three (the last never turns off) |
| `togglePill(new Set(["al-go"]), "bcquality", R)` | `{al-go, bcquality}` |
| `usablePills(new Set(["al-go"]), {bcapps: 965, al-go: 0, bcquality: 90}, R)` | all three |
| `usablePills(new Set(["al-go"]), {bcapps: 965, al-go: 28, bcquality: 90}, R)` | `{al-go}` |
| `usablePills(new Set(["al-go", "bcapps"]), {bcapps: 965, al-go: 0, bcquality: 90}, R)` | `{al-go, bcapps}` (one usable pill is enough) |
| `usablePills(new Set(["al-go"]), {bcapps: 0, al-go: 0, bcquality: 0}, R)` | `{al-go}` (an empty list stays as asked) |
| `pillDisabled(true, 0)`, `pillDisabled(false, 0)`, `pillDisabled(false, 3)` | `false`, `true`, `false` |
| `kindsLine(["fix", "feature", "fix"])` | `"1 feature · 2 fix"` |
| `kindsLine([])` | `""` |
| `CHANGE_REPOS.map(([s]) => s)` and `.map(([, l]) => l)` | `["bcapps", "al-go", "bcquality"]`, `["BCApps", "AL-Go", "BCQuality"]` |
| `repoOf("bcapps/12207")`, `repoOf("al-go/2229")` | `"bcapps"`, `"al-go"` |

Regression: `tests/unit/galaxy-core.test.ts:89-103` and `121-131` pass unchanged once `galaxy-core.ts` wraps
`pills-core.ts` (the same inputs, the same expected sets and strings).

The DOM part (section 4.3, steps 1-5) is checked on the built site (section 7), not unit-tested: it is twenty lines
of wiring around the tested helpers, as on the deprecation radar.

## 6. Tasks

One phase, ships alone. No content commit: nothing under `content/` or `data/` is rewritten, so the nightly is not
involved and no page count changes.

1. Write `tests/unit/pills-core.test.ts` (section 5); `npm test` fails on the missing module.
2. Write `site/src/scripts/pills-core.ts` (section 4.1); `npm test` passes.
3. Turn `galaxy-core.ts:94-117` into wrappers (section 4.2); `npm test` and `npm run typecheck` pass with the galaxy
   tests untouched.
4. Edit `site/src/pages/changes/index.astro` (section 4.3): frontmatter, pills, `data-repo` and `data-kind`, the
   kinds line through `kindsLine`, the formatted heading, the script.
5. Add the `.pills` and `.pill-btn` rules to `site.css` (section 4.4).
6. Build the site under Node 22 and run the checks of section 7, including the Playwright pass.
7. At ship time: the edits of section 12 (DECISIONS, PLAN, HANDOFF); rename section 12 "Built, deviations" with the
   measured numbers.

Effort: half a day. Token risk: none, deterministic, no LLM.

## 7. Verification

```bash
npm run typecheck && npm test                      # pills-core tests, galaxy-core tests unchanged
ls content/changes/*/ | wc -l                      # re-measure: 1,083 on 243680a2a7; the nightly adds pages
for d in content/changes/*/; do echo "$d $(ls $d | wc -l)"; done   # 965 / 28 / 90 on 243680a2a7
export PATH=/Users/waldo/.nvm/versions/node/v22.23.1/bin:$PATH     # the Mac's default node is 20; Astro needs 22
(cd site && npm run build)                                         # about 2 minutes, ~28,800 pages
H=site/dist/changes/index.html
grep -c 'data-repo="bcapps"' $H; grep -c 'data-repo="al-go"' $H; grep -c 'data-repo="bcquality"' $H   # the three counts
grep -o 'class="pill-btn"' $H | wc -l                                                                  # 3
grep -o 'data-count="[0-9]*"' $H                                                                       # 965, 28, 90
grep -c 'data-astro-cid' $H                                                                            # 0 (D53)
wc -c $H                                                                                               # before and after; expect about 1,083 × 35 bytes more
```

Headless check of the built page (no browser tool in these sessions): symlink `site/dist` as
`<scratchpad>/serve/waldo.BCObservatory`, `python3 -m http.server 4173` there, `npm i playwright` in the scratchpad
(Chromium is cached under `~/Library/Caches/ms-playwright`), then a script that asserts, in order, the rows of the
table in section 2:

1. `/waldo.BCObservatory/changes/`: visible `li[data-repo]` = total, every `.pill-btn[aria-pressed="true"]`,
   `.pill-count` empty, `location.search` empty.
2. Click `[data-pill="al-go"]`: visible = total minus 28, `location.search` = `?repo=bcapps,bcquality`, count line
   `1,055 of 1,083 shown` (with the re-measured numbers), `[data-kinds]` has no kind at zero.
3. Click `[data-pill="bcapps"]`: visible = 90, `?repo=bcquality`.
4. Click `[data-pill="bcquality"]`: all visible, all pressed, `location.search` empty.
5. Open `?repo=al-go`: 28 visible, only AL-Go pressed. Open `?repo=al-go,nope`: the same and the URL rewritten to
   `?repo=al-go`. Open `?repo=nope`: all visible, `repo` removed.
6. Keyboard: `Tab` to the first pill, `Space`: it toggles off.
7. Viewport 390 × 844: `document.documentElement.scrollWidth <= 390`.
8. Stop the server: `pkill -f "http.server 4173"`.

The galaxy is not touched by the wrappers, but one pass of `node scripts/ui-sweep.mjs` (D78) costs a minute and
proves it: 0 squeezed rows, as before.

## 8. Later, not in this spec

- Kind pills (`change_kind`) as a second row combined with the repository filter, replacing the kinds line; the
  helpers of 4.1 take any pill set, so it is markup and one more `apply()` term.
- Deep links into the filter: the Upcoming page's repository headings (`upcoming/index.astro:15`) and the change
  page breadcrumb (`[...id]/index.astro:21`) pointing at `/changes/?repo=<slug>`.
- The same pills on `/changes/week/`, over its kind groups.
- A `breaking` and a `community contribution` toggle (14 and 130 BCApps pages, 1 and 0 BCQuality, 0 and 0 AL-Go).
- One pill style: the galaxy's `.g-kind-pill` (`Galaxy.astro:221-225`) and `galaxy.ts:929` onto `.pill-btn`.

## 9. Risks and open questions

- **Without JavaScript the pills are inert.** Default: render them pressed, as the build wrote them, and show every
  row; no `<noscript>` hiding. The radar and the atlas make the same choice.
- **The heading's number format.** The `h1` prints `1083` today (line 15, unformatted) while the objects page prints
  `20,744` (`objects/index.astro:20`). Default: format the heading with `toLocaleString("en")` in the same edit so the
  count line and the heading agree; it is one expression on the page this spec changes.
- **Wrappers or a copy in `galaxy-core.ts`.** Default: wrappers (section 4.2); a second copy of four functions is
  what D80 would then have to keep in step.
- **Where the script lives.** Default: inline in the page, as the radar's; the pure parts are in `pills-core.ts`. A
  `site/src/scripts/changes-pills.ts` with a `mount` function is fine if the coder prefers the events page's shape.
- **Counts drift nightly.** The pills print the build's counts and the tests use the measured numbers of
  2026-10-08 only as fixtures; nothing is hard-coded on the page. The coder re-measures before the headless check.
- **A fourth repository later.** `CHANGE_REPOS` is the one place to add it; `sources.yaml:85-116` lists the three
  `github-pr` sources today. An entry with no pages yet renders a disabled pill with `0`.

## 10. Files

New:

- `site/src/scripts/pills-core.ts`
- `tests/unit/pills-core.test.ts`
- `docs/specs/changes-repo-pills.md` (this file)

Changed:

- `site/src/pages/changes/index.astro`
- `site/src/scripts/galaxy-core.ts` (lines 94-117 become wrappers)
- `site/src/styles/site.css` (the `.pills` block)
- at ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`

## 11. Definition of Done

- [ ] `tests/unit/pills-core.test.ts` holds every row of section 5 and passes; `tests/unit/galaxy-core.test.ts` is
      unchanged and passes.
- [ ] `npm run typecheck` and `npm test` pass.
- [ ] The built `/changes/` page has three `.pill-btn` buttons with the build's counts, `data-repo` and `data-kind`
      on every row, no `data-astro-cid` attribute, and the kinds line equal to the one before the change.
- [ ] The headless pass of section 7 passes all eight steps; the numbers are recorded in section 12.
- [ ] No file under `content/` or `data/` changed.
- [ ] D82 appended to `docs/DECISIONS.md` with the measured numbers; the M20 row in `docs/PLAN.md` set to shipped;
      the HANDOFF entry moved to "Where things stand"; this section 12 renamed "Built, deviations".

## 12. Proposed edits to other files (not applied)

**`docs/DECISIONS.md`**: append the D82 text from section 3, numbers re-measured, ending with
"Spec: `docs/specs/changes-repo-pills.md`."

**`docs/PLAN.md` section 5**, before `v0.2+` (committed with this spec as proposed; set to "shipped <date>" at ship
time):

`| **M20 changes repo pills** | the changes index gets BCApps, AL-Go and BCQuality pills with counts, D80 toggle semantics, `?repo=` in the URL, a "N of M shown" line and kind counts that follow the filter; the D80 helpers generalised into `pills-core.ts` (`docs/specs/changes-repo-pills.md`, D82, proposed) | half a day | none: deterministic, no LLM |`

**`docs/HANDOFF.md`**: the entry under "Open specs, not yet implemented" (committed with this spec); at ship time move
it to "Where things stand" with what shipped and any deviations.

**`AGENTS.md`**: nothing; no lookup, file or tool changes.

**`CONTENT-NOTICE.md`**: nothing; the page shows the same Microsoft metadata it shows today.
