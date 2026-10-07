# One version pill: the galaxy's "changed in" lens as a single control

Status: implemented, 2026-10-07 (phase 1 `5c2e51635`, phase 2 `d9b3c64ac`; deviations in section 12). Decision: D72
(appended to `docs/DECISIONS.md`). Owner: waldo.
Scope: the galaxy lens bar on the home page, the Objects atlas lens picker, and every place a list of BC majors is
printed as text (object markdown, app pages, the galaxy panel and list view). Every claim below was verified against
the tree at `573ac6ae5` on 2026-10-07. Not in scope: new lens semantics (ranges, unions), the member-level
`/code/versions/` pages, the `VersionTimeline` component on object pages, the MCP server's wording.

## 1. Goal

The lens bar of the galaxy (`site/src/components/Galaxy.astro:20-35`, `site/src/scripts/galaxy.ts:154-189`) shows one
pill per BC major found in the graph: `changed in BC24` through `changed in BC30`, seven pills today. The list is
built from every distinct value of `cv` in `data/graph/summary.json` (`galaxy.ts:138`), and `cv` is the object
frontmatter `changed_in` copied by `pipeline/link/graph.ts:186`. When the galaxy-views spec described the bar
(`docs/specs/galaxy-views.md:118`) only BC28 to BC30 were snapshotted, so it said "changed in BC29", "changed in
BC30 (vNext)", "this week". D62 added the diff-only skeleton majors 23 to 27, and the bar grew with the data.

Measured on 2026-10-07 (`summary.json`, 1,135 nodes, 207 with `cv`): stars per version lens
24:129, 25:92, 26:97, 27:115, 28:113, 29:97, 30:27. BC23 never shows: it is the oldest major, nothing "changes" in
it. On a laptop with the panel open the bar is capped at `calc(100% - 720px)` (`Galaxy.astro:90`) and wraps to three
rows; on a phone it is one horizontally scrolling row (`Galaxy.astro:206`). Every pill is a real lens, but seven
nearly identical labels read as noise, push "this week" and "more lenses" off the first row, and will keep growing by
one pill per release wave.

Two smaller things sit next to it and are fixed in the same pass:

- The Objects atlas (`site/src/pages/objects/index.astro:19`, `site/src/scripts/atlas.ts:10-11,35-36`) hard-codes
  `changed in BC29` and `changed in BC30 (vNext)` as `<select>` options and `majors = ["28", "29", "30"]` for its
  "Introduced" filter. It already disagrees with the galaxy (which offers seven majors) and will disagree with
  `config/versions.json` at the next wave.
- Version lists are printed by inline code in nine places. Four collapse first and last into a range
  (`pipeline/render/object.ts:216`, `pipeline/render/app.ts:39`, `site/src/pages/apps/[slug]/index.astro:21`,
  `pipeline/link/mentions.ts:106-109`), which mislabels a gap (`[24, 26, 30]` renders as "BC24-30"). Five join with
  commas (`object.ts:223` summary sentence, `object.ts:302` "Across versions", `galaxy.ts:858` exit link, `:986` star
  badge, `:1041` list view column), so an object changed in every wave reads "changed in BC24, BC25, BC26, BC27,
  BC28, BC29, BC30".

After this change:

- The bar holds Questions, one pill `changed in BC30` with a caret, `this week`, `more lenses`, `list view`. The
  pill applies the remembered major in one click (newest by default, so today BC30); the caret opens a menu of every
  major the graph has changes for, with the count each would light. Every major stays one click away from the menu.
- Lens ids, deep links (`#lens=version:29`), the question entries (`site/src/lib/questions.ts:12-13`), the accent
  frame, the obsolete mark, the panel rows and the exit link are unchanged. One version at a time, as today.
- The galaxy's menu, the atlas picker and the atlas "Introduced" filter take their majors and labels (long label,
  vNext flag) from `config/versions.json` through the existing `majors()` (`site/src/lib/versions.ts:54-57`).
- One helper prints every version list as collapsed runs: "BC24-26, BC28", "BC28-30", "BC29". Gaps are never
  bridged.

## 2. Reader- and agent-facing behaviour, after

### 2.1 The lens bar

Order, left to right: Questions (home page only, D70), the version pill, `this week`, `more lenses` (select),
`list view`, tilt and planes (system level). The version pill is one group, `.g-vlens`, with two controls:

- `button.g-lens[data-lens="version:<remembered>"]`, text `changed in BC<remembered>` plus the `.g-lens-n` count when
  pressed. Clicking it toggles that lens exactly as any bar lens does today (`setLens(id, true)`, `galaxy.ts:184`):
  the lens works at every level, pressed state and count come from `renderChrome` (`galaxy.ts:1057-1061`).
- `details.ask.g-ask.g-vmenu` whose `summary` is the caret only, `aria-label="Other versions"`, visually fused to the
  button (shared border, radius only on the outer corners). Its `ul` lists every major in `versions` newest first,
  one `button[data-pick="version:<v>"]` per entry: `BC30 vNext` and the count `27` in `.mono-meta`, then `BC29 · 97`,
  down to `BC24 · 129`. The entry of the active lens carries `aria-current="true"`. Picking an entry sets the
  remembered major, calls `setLens("version:<v>", true)` and closes the menu. Picking the active one clears the
  lens (the toggle semantics of today's pills). Counts are `g.nodes.filter(l.match).length` per lens, computed once
  at mount, the same number the pressed pill shows.

The remembered major lives in memory only. At mount it is the newest major in `versions`. A deep link
`#lens=version:27` (`fromHash`, `galaxy.ts:1254-1270`) sets it to 27 before `setLens`, so the pill reads
`changed in BC27` and the count sits on it. Clearing the lens keeps the remembered major: the pill still reads
`changed in BC27` until the reader picks another. No `localStorage`: the deep link is the memory, and the home page
should look the same for every reader.

"vNext" and the long label never come from the graph. `Galaxy.astro` passes `data-majors` on the `section.galaxy`
root: `{"30":{"label":"2027 release wave 1 (BC30, vNext)","vnext":true},"29":{...},...}` built at build time from
`majors()` and `config/versions.json` `majors.<v>.vnext`. The graph still decides which majors get an entry (`cv`
values, `galaxy.ts:138`): a major no object changed in gets no entry, and a major in the graph that config no longer
lists falls back to `BC<v>` without a long label. The long label goes on the entry's `title`.

Keyboard: Tab reaches the button, then the caret; Enter or Space opens the menu; the entries are buttons; Esc closes
and refocuses the summary, a click outside closes (`site/src/layouts/Base.astro:81-88` handles every `details.ask`,
including this one, because the galaxy mounts after the layout script runs: the spec moves that wiring into a
function the galaxy can call for a `details` it creates, or the galaxy renders the `details` in `Galaxy.astro` and
only fills its `ul`). Pointer-coarse: 44 px for button and summary (`Galaxy.astro:103`). Reduced motion: nothing
animates here.

Mobile (`max-width: 760px`, `Galaxy.astro:206-208`): the group is one item of the scrolling row; the menu reuses the
fixed bottom-sheet rule of `.g-ask ul` (`:208`). Narrowest layout (`:215-218`): unchanged, the bar is static.

The crumb (`renderChrome`, `galaxy.ts:1048`), the panel heading (`:961`) and the list view meta line (`:1039`) keep
printing `lens.label`, so they still read `changed in BC27`: the lens objects are not touched.

### 2.2 The Objects atlas

`site/src/pages/objects/index.astro:11` takes `majors()` (every major with W1 data, oldest first) instead of the
literal `["28", "29", "30"]`. The Lens `<select>` (`:19`) renders one `changed in BC<v>` option per major newest
first, value `changed:<v>`, suffix ` (vNext)` when config flags it, after `galaxy system` and before `introduced`.
The "Introduced" select (`:22`) keeps its shape (`before BC<oldest>`, then one option per later major) and now
follows config. `atlas.ts:10-11` replaces `changed29 | changed30` with the template type `` `changed:${string}` ``
and `LENS_LABEL` with a function; `metric()` (`:35-36`) becomes one case: `share((r) => r[8].split(" ").includes(v))`.
`data/index/objects.json` column 8 already carries every major of `changed_in` as a space-joined string
(`pipeline/render/objects-index.ts:19-23`), including the skeleton majors, so no index change.

### 2.3 Printed version lists

One helper, `versionRanges`, replaces the nine inline forms. Output, with the default prefix `BC`:

| input | output |
|---|---|
| `["24","25","26","28"]` | `BC24-26, BC28` |
| `["28","29","30"]` | `BC28-30` |
| `["29"]` | `BC29` |
| `["24","26","30"]` | `BC24, BC26, BC30` |
| `["30","28","29","29"]` | `BC28-30` (sorted numerically, deduped) |
| `[]` | `""` |

Call sites and the text they produce after:

| where | today | after |
|---|---|---|
| `pipeline/render/object.ts:216` meta line `versions` | `BC24-30` (first-last) | `versionRanges(life.versions)` |
| `object.ts:223` summary sentence | `changed in BC24, BC25, BC26` | `changed in BC24-26` |
| `object.ts:302` "Across versions" bullets | `Present in: BC24, BC25, ...` / `Changed (declaration) in: ...` | both through the helper, `none` kept |
| `pipeline/render/app.ts:39` `versionsLabel` | first-last, `no snapshot` when empty | helper, `no snapshot` kept |
| `site/src/pages/apps/[slug]/index.astro:21` versions stat | first-last | helper (imported from `pipeline/lib`) |
| `pipeline/link/mentions.ts:106-109` `coveredMajors` | first-last of `snapshot` | helper (snapshot is contiguous; the result is the same text) |
| `galaxy.ts:858` Versions exit link | comma join | helper |
| `galaxy.ts:986` star badge | comma join | helper |
| `galaxy.ts:1041` list view "Changed in" | comma join + `(obsolete BC30)` | helper + the same obsolete suffix |

`present_in` is contiguous by construction (`object.ts:96-104` pushes every major in order), so its text only
changes from first-last to the same first-last; a removed-then-reintroduced object would now show the gap honestly.
The `VersionTimeline` component, the member pills (`site/src/lib/versions.ts:59`) and `data/index/*.json` are not
touched.

## 3. Decisions

**D72 One version pill in the lens bar.** The galaxy offers the version lens as one control: a pill for the
remembered major (newest by default) and a menu of every major the graph has changes for, with the count each would
light, labelled from `config/versions.json`. One version at a time, same lens ids and deep links. The Objects atlas
derives its version options and its "Introduced" filter from the same config. Version lists are printed as
collapsed runs ("BC24-26, BC28") by one helper, `pipeline/lib/versions.ts`, in pages, panel, list view and
markdown; a gap is never bridged.

Rejected:

- A segmented control (`changed in | 24 | 25 | ... | 30`): still seven targets in the bar, still scrolls on a phone,
  still grows by one per wave.
- BC29 and BC30 pills only, the rest in the `more lenses` select (the galaxy-views spec's literal text): hides four
  majors behind a `<select>` the question entries never point at, and needs a rule for which two majors are pills.
- "since BC<v>" ranges or multi-version unions: changes the one-lens model of `setLens` (`galaxy.ts:798-817`), the
  accent frame's single `lensV` (`galaxy.ts:433`) and the deep-link grammar. Deferred to section 8.
- Remembering the major in `localStorage`: every reader would see a different home page; the deep link already
  carries the version.

## 4. Contract

### 4.1 `pipeline/lib/versions.ts` (new)

Pure, no `fs`, no config read, so the site can import it the way it imports `pipeline/lib/treemap` and
`pipeline/lib/systems` (`site/src/pages/objects/index.astro:4`, `site/src/scripts/atlas.ts:7`).

```ts
/** "BC24-26, BC28": majors as collapsed runs of consecutive integers, sorted, deduped; never bridges a gap. */
export function versionRanges(majors: readonly (string | number)[], prefix = "BC"): string
```

### 4.2 `site/src/scripts/galaxy-core.ts` (pure, tested)

```ts
export interface MajorMeta { label: string; vnext?: boolean }
export interface VersionEntry { id: string; version: string; label: string; title: string; count: number; active: boolean }
/** The version menu: every major the graph has changes for, newest first; `remembered` = active ?? newest. */
export function versionMenu(
  versions: readonly string[], counts: ReadonlyMap<string, number>, majors: Record<string, MajorMeta>, active: string | null,
): { remembered: string | null; entries: VersionEntry[] }
```

`label` is `BC<v>` plus ` vNext` when flagged; `title` is the config's long label or `BC<v>`. `versions` empty
(an older `summary.json` without `cv`) returns `remembered: null` and no entries: the pill is not rendered, the bar
is Questions, `this week`, the select, as before D62.

### 4.3 `Galaxy.astro`

- `data-majors` on `section.galaxy`: JSON of `{ [version]: { label, vnext? } }` from `majors()` and
  `config/versions.json` (the component already reads `import.meta.env.BASE_URL`; `majors()` reads the config at
  build time).
- The `.g-vlens` group is created by the script next to the other bar lenses (today the bar lenses are DOM built at
  mount, `galaxy.ts:180-189`); the markup is `div.g-vlens > button.g-lens + details.ask.g-ask.g-vmenu > summary +
  ul`. CSS next to the existing rules (`Galaxy.astro:88-103`): `.g-vlens { display: inline-flex }`, the button loses
  its right radius and the summary its left one, the summary is `min-width: 32px` and shows only the caret
  (`.ask summary::after`, `site/src/styles/site.css:39`), 44 px under `pointer: coarse`, the `ul` inherits `.g-ask ul`
  (`:99`, `:208`).
- The `Base.astro:81-88` close-on-outside-click and Esc wiring is extracted into a small function applied to every
  `details.ask` at load and exported on `window` or re-run by the galaxy for the `details` it creates (either is
  fine; the test is that Esc and outside-click close the version menu).

### 4.4 `galaxy.ts`

- `barLenses` unchanged: same ids (`version:<v>`), labels, `group`, `version`, `match`, `exit`.
- `lensButtons` holds the version button and `this week`; `renderChrome` additionally rewrites the version button's
  `data-lens` and text from `versionMenu(...)` and sets `aria-current` on the menu entries.
- `fromHash`: when `l` is a known `version:<v>` lens, set the remembered major before `setLens`.
- `exitDock` (`:858`), the star badge (`:986`) and the list view (`:1041`) call `versionRanges`.

### 4.5 Atlas

`objects/index.astro` and `atlas.ts` as in 2.2. The `Lens` union keeps `system`, `introduced`, `obsolete`, `learn`,
`countries`; `changed:<v>` is validated against the options rendered in the page (an unknown value falls back to
`system`, as today's `default` branch returns 0).

### 4.6 Unchanged

`schemas/frontmatter.object.json` (`present_in`, `changed_in`), `schemas/graph.json` (`cv`, `ob`),
`data/graph/summary.json`, `data/index/objects.json` columns, `pipeline/link/graph.ts`, `questions.ts`, the
`VersionTimeline` component, the MCP server.

## 5. Test plan (write first)

- `tests/unit/versions-ranges.test.ts` (new): the six rows of the table in 2.3, plus numeric input (`[28, 29]`), a
  custom prefix, and the invariant that a gap is never bridged (`["24","26"]` is `BC24, BC26`).
- `tests/unit/galaxy-core.test.ts`: `versionMenu` orders newest first; `remembered` is the newest when nothing is
  active and the active one otherwise; `label` carries ` vNext` only when flagged; `title` falls back to `BC<v>` for
  a major absent from config; a major absent from `versions` gets no entry even when config lists it; empty
  `versions` gives `remembered: null`.
- `tests/unit/object-pages.test.ts`: the existing fixture asserts `changed_in` `["29"]` (`:33`); add a fixture with
  three consecutive changed majors and assert the summary sentence reads `changed in BC28-30` and the "Across
  versions" bullet `Changed (declaration) in: BC28-30`; keep the `none` case.
- `tests/unit/app-page.test.ts`: the versions label of an app present in `["28","29","30"]` is `BC28-30`, in
  `["28","30"]` is `BC28, BC30`.
- `tests/unit/mentions*.test.ts` (whichever covers `coveredMajors`): unchanged expectation `BC28-30`.
- Manual, section 7.

## 6. Tasks

Both phases are deterministic: no LLM call, no schema change, no Mini change, no install.

### Phase 1, the helper (ship first, alone)

1. `pipeline/lib/versions.ts` + `tests/unit/versions-ranges.test.ts`.
2. Swap the nine call sites of 2.3. `app.ts` keeps its `no snapshot` fallback around the helper.
3. `npm run typecheck && npm test`; `npm run nightly -- --dry-run` then `npm run validate:content`.
4. Expect the next nightly to rewrite every object page whose `changed_in` or `present_in` has a run of two or more
   (the summary sentence and the "Across versions" section change text): one large `content:` commit, no LLM cost
   (`object-pages.test.ts:71` documents that unchanged input rewrites nothing; here the input is unchanged but the
   renderer is, which is the intended one-time churn). Ship it on a night with no other content change (section 9).

### Phase 2, the control

5. `galaxy-core.ts` `versionMenu` + tests.
6. `Galaxy.astro`: `data-majors`, `.g-vlens` CSS, the `details.ask` wiring shared with `Base.astro`.
7. `galaxy.ts`: build the group, `renderChrome`, `fromHash`, the three `versionRanges` call sites.
8. `objects/index.astro` and `atlas.ts` as in 2.2.
9. `docs/specs/galaxy-views.md:118`: a one-line note that the version pills are superseded by this spec.
10. Append D72 to `docs/DECISIONS.md`; move the HANDOFF entry from "Open specs" to "Shipped"; record deviations in a
    section 12 of this file.

## 7. Verification

- `npm run typecheck && npm test` green.
- `cd site && npm run build` under Node 22 (the shell defaults to Node 20; prepend the nvm v22 bin) and
  `npm run preview`:
  - `/`: the bar shows Questions, `changed in BC30 ▾`, `this week`, `more lenses`, `list view`, on one row at
    1280 px with the panel closed and at most two rows with it open.
  - The menu lists BC30 vNext, BC29, ..., BC24 with counts; the counts equal today's seven pills' pressed counts
    (27, 97, 113, 115, 97, 92, 129 on the 2026-10-07 graph).
  - `/#lens=version:27`: the same stars light as on `573ac6ae5`; the pill reads `changed in BC27` with the count;
    the crumb reads `changed in BC27`; Esc and a click outside close the open menu.
  - Picking BC29 in the menu, then clicking the pill: lens cleared, pill still reads `changed in BC29`.
  - 390 px viewport (device toolbar): the bar is one scrolling row, the menu opens as the bottom sheet.
  - `/objects/`: the Lens select lists `changed in BC30 (vNext)`, `changed in BC29`, ..., `changed in BC24`; picking
    BC29 colours the treemap as `changed29` did on `573ac6ae5`; the Introduced select lists `before BC23` and BC24
    to BC30 (every major with W1 data).
  - A star changed in 24, 25, 26 and 28 (find one in the list view): badge `changed in BC24-26, BC28`, Versions exit
    link the same, list view column the same.
- `npm run nightly -- --dry-run && npm run validate:content`: object markdown validates with the new sentences.
- `npm run check:leak` unaffected (no community text involved).

## 8. Later, not in this spec

- `since BC<v>` and multi-version union lenses (`#lens=since:28`): needs a rule for the accent frame and the panel
  rows; a new decision when a reader asks for it.
- A version control on the neighbourhood explorer (`/neighbourhood/?v=`), which today takes `v` from the galaxy's
  exit link only.
- The MCP server's hard-coded `BC28-30` strings (`packages/mcp/src/server.ts:241,287`) could call `coveredMajors`.

## 9. Risks and open questions

- **Content churn.** Phase 1 rewrites thousands of object pages once. Deterministic and cheap, but the nightly
  commit and the GitHub Pages deploy are large; the search shards (`pipeline/render/search.ts`) re-render too. Ship
  phase 1 on a quiet night, verify the dry run first.
- **Two `details.ask` in one bar.** `Base.astro:81-88` wires each `details.ask` at load; the galaxy's menu is created
  later, so the wiring must be callable after mount (4.3). Opening one menu should close the other: the outside-click
  handler already does, because a click on the other summary is outside the first `details`.
- **Older graph.** A `summary.json` without `cv` (before D62) yields no version lens at all; the pill is simply not
  rendered. `data-majors` is built from config at build time, so no label mismatch is possible.
- **`present_in` gaps.** An object removed in one major and back in a later one now prints the gap (`BC24-26, BC28`);
  today's first-last hid it. This is the honest reading, and the timeline component already shows it.
- Open: should the version entry labels use the release-wave wording (`2026 release wave 2`) in the menu rather than
  only in `title`? Default no: the menu is 32 px tall per entry and `BC29` is what every other page says.

## 10. Files

Phase 1: `pipeline/lib/versions.ts` (new), `tests/unit/versions-ranges.test.ts` (new), `pipeline/render/object.ts`
(`:216`, `:223`, `:302`), `pipeline/render/app.ts` (`:39`), `pipeline/link/mentions.ts` (`:106-109`),
`site/src/pages/apps/[slug]/index.astro` (`:21`), `site/src/scripts/galaxy.ts` (`:858`, `:986`, `:1041`),
`tests/unit/object-pages.test.ts`, `tests/unit/app-page.test.ts`.

Phase 2: `site/src/scripts/galaxy-core.ts`, `tests/unit/galaxy-core.test.ts`, `site/src/components/Galaxy.astro`,
`site/src/layouts/Base.astro` (`:81-88`), `site/src/scripts/galaxy.ts` (`:138-189`, `:1046-1061`, `:1254-1270`),
`site/src/pages/objects/index.astro` (`:11`, `:19`, `:22`), `site/src/scripts/atlas.ts` (`:10-11`, `:31-43`),
`docs/specs/galaxy-views.md` (`:118`), `docs/DECISIONS.md`, `docs/HANDOFF.md`, `docs/PLAN.md` (M10 row, status).

## 11. Definition of Done

- Tests of section 5 green; `npm run typecheck`, `npm test`, the site build and the content dry run pass.
- The home page bar shows one version pill with a menu; every major of the graph is reachable from it; deep links
  and question entries unchanged.
- The Objects atlas offers the same majors as the galaxy, from config.
- Every printed version list goes through `versionRanges`; no first-last or comma join of majors remains
  (`grep -rn 'map((v) => \`BC' pipeline site/src` finds nothing).
- D72 appended, PLAN M10 row marked shipped, HANDOFF entry moved, galaxy-views spec cross-references this file.

## 12. Built, deviations

Built on `dev/next`, 2026-10-07, in two commits as section 6 orders them, then the docs commit. The edits this
section proposed before (D72 in `docs/DECISIONS.md`, the PLAN M10 row, the HANDOFF entry, the note at the
version-pills bullet of `docs/specs/galaxy-views.md`) are applied.

Measured:

- `versionRanges` gives the table of 2.3 exactly (`tests/unit/versions-ranges.test.ts`).
- A local render of the object pages from the committed `data/` (discarded afterwards): 25,423 of 25,644 object
  pages change text through the new renderer alone (old renderer versus new on the same data). Nearly every object
  is present in a run of majors, so "Present in: BC23, BC24, ..., BC30" becomes "BC23-30"; 2,292 summary sentences
  change their "changed in" clause. App pages: none change (every app is in a contiguous run already rendered
  first-last). This is the one-time churn section 6.4 and 9 announce.
- Built site, headless Chromium at 1280 px: the bar reads Questions, `changed in BC30` + caret, `this week`,
  `more lenses`, `list view` on one row (32 px) with the panel closed, two rows with it open. The menu lists
  `BC30 vNext 27`, `BC29 97`, `BC28 113`, `BC27 115`, `BC26 97`, `BC25 92`, `BC24 129`, the counts of section 7.
  `#lens=version:27` lights 115 stars, the pill reads `changed in BC27 115`, the crumb `changed in BC27`; Esc and an
  outside click close the menu, Esc refocuses the caret; picking BC29 then clicking the pill clears the lens and
  the pill keeps `changed in BC29`. At 700 px the bar is one non-wrapping row and the menu is the fixed bottom
  sheet; the caret is 44 px under touch.

Deviations:

- `Base.astro` is not changed. Of the two options 2.1 and 4.3 allow, the `details` is rendered in `Galaxy.astro`
  (`div.g-vlens[hidden] > button[data-g-vpill] + details.ask.g-ask.g-vmenu > summary + ul`) and the script fills the
  `ul` and unhides the group; the layout's existing wiring handles Esc and outside clicks.
- The remembered major is set in `setLens` for any version lens, not only in `fromHash`: a deep link, the menu and a
  question entry all pass through it, so the pill always names the last version lens chosen.
- The atlas offers `changed:<v>` for every major after the oldest (BC24 to BC30 today), not for the oldest: nothing
  "changes" in it, and the galaxy has no BC23 entry either. Its "introduced" lens label follows config too
  (`introduced in BC24+`, legend `introduced in BC24 or later`; it read BC29 before). An old `?lens=changed29` URL
  maps to `changed:29`; an unknown value falls back to `system`.
- `majors()` (`site/src/lib/versions.ts`) also returns `vnext`, so `Galaxy.astro` and the atlas need no second
  config read.
- `app.ts` exports `versionsLabel` so `app-page.test.ts` tests it directly. No mentions test covered
  `coveredMajors`, so none was changed; it reads config and still returns `BC28-30`.
- Not run here, by the brief: `npm run nightly -- --dry-run` and `validate:content` on regenerated content
  (the object-pages tests validate rendered pages, including the new sentences).
