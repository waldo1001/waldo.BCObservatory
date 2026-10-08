# This week shows Microsoft's code changes: kind pills in the this-week lens, a split header pill, a Changes tab

Status: implemented, 2026-10-08 (section 12 records what was built and where it differs). Decision: D80 (appended 2026-10-08). Milestone: M18. Owner: waldo.
Scope: `data/graph/landed.json` gains the week's code changes (`pipeline/link/graph.ts`, `schemas/landed.json`); the
galaxy's this-week lens gets three kind pills (Videos, Posts, Code) that filter its panel list and the stars it lights,
with the code list grouped by kind (`site/src/scripts/galaxy.ts`, `galaxy-core.ts`, `Galaxy.astro`); the header pill
splits into a media half and a code half (`site/src/layouts/Base.astro`, `site/src/lib/state.ts`); "Changes" joins the
top nav; `/changes/week/` lists the same week. Every claim below was verified against the tree at `08b11d28ea` on
2026-10-08, and every number was measured on the `data/` and `content/` of that commit (anchor 2026-10-08). Not in
scope: the change pages themselves, the weekly digest, the MCP server, any LLM stage, new star types in the summary
graph, a distinct ring style for code (section 8).

## 1. Goal

A reader who wants to know what Microsoft changed in the code this week cannot find it from the galaxy or the header.
The owner's case: `#12152 [MCP] Clear environment description after environment copy`, merged 2026-10-05, has a page
(`content/changes/bcapps/12152.md`), but the "20 new this week" pill does not count it and the this-week lens does not
list it.

Evidence:

- `landed()` keeps only `video` and `post` nodes (`pipeline/link/graph.ts:358`); `schemas/landed.json` allows only
  `"v"` and `"p"` as the kind. That was the scope D66, D70 and D73 chose: media, not code.
- Change nodes have no date in the graph: `lit_at` is `fm.published_at ?? fm.ga_date` (`graph.ts:126`), and a change
  page carries `merged_at`, so every change node has `lit_at: null`.
- The header pill counts `landed.json` items only (`site/src/lib/state.ts:18-23`, `Base.astro:43-47`): 20 on this
  data (18 posts, 2 videos).
- `/changes/` (`site/src/pages/changes/index.astro`) is the only full list, newest first, but no nav entry links to it
  (`Base.astro:10-13`); a reader reaches it only through the "Code changes" breadcrumb of a change page.
- The weekly digest lists "the 20 most recent" behaviour changes (`pipeline/render/digest.ts`), and #12152 is not one
  of them in `content/digests/2026-W41.md`.

Measured on this week's window (2026-10-02 to 2026-10-08, change pages by `merged_at`), script in section 7:

| What | Count |
|---|---|
| change pages in the window | 82 (bcapps 67, al-go 2, bcquality 13) |
| `behavior_change: true` | 65, so it does not discriminate; this spec groups by `change_kind` |
| groups (rule in section 4.3) | breaking 4, features 17, fixes 41, other 5, tooling 15 |
| on `releases/29.x` | 4; 7 main pages list a backport in `backports[]` |
| changes that touch at least one summary star (topic, object in the top 300, app via `implements`) | 28 |
| distinct stars they touch | 55; with this week's 17 media hubs, 72 in union |
| changes that touch no star (#12152 among them: `codeunit/3702` is not in the top 300, System Application has no app star) | 54 |
| size of the new `changes` array as tuples | about 14 KB (landed.json is 5.2 KB today) |

After this change:

- The this-week lens has three pills, Videos 2, Posts 18 and Code 82. All three are on when the lens opens. A pill
  filters the panel list and the stars the lens lights, and its state lives in the URL hash.
- The code list is grouped by kind (Breaking, Features, Fixes, Other, Tooling). Breaking and Features are open, the
  rest folded, and each row shows the title, the kind, the system and the merge date. #12152 sits under Features.
- The header pill reads "20 new · 82 code changes", and each half opens the lens with its pills set.
- "Changes" is in the top nav, and `/changes/week/` lists the same 82 with the same grouping.

## 2. Reader- and agent-facing behaviour, after

### 2.1 The lens panel (`#lens=landed`)

```
lens · time
this week                                              [Clear the lens]
72 stars light up: 20 videos and posts and 82 code changes landed in the 7 days up to 2026-10-08.

[▲ Videos 2] [▬ Posts 18] [◆ Code 82]

Videos and posts                                       (only when Videos or Posts is on)
  ▬ How to Migrate Business Central Table Fields from Integer to BigInteger.
    post · Saurav Dhyani · 2026-10-08
  ...

Code changes                                           (only when Code is on)
  ▾ Breaking 4
     ◆ #12290 Remove CLEAN27 code from Service Management ...
       breaking · Service · 2026-10-07
  ▾ Features 17
     ◆ #12152 [MCP] Clear environment description after environment copy
       feature · Administration · 2026-10-05 · also in 29.x      (the last part only when backports[] is not empty)
  ▸ Fixes 41
  ▸ Other 5
  ▸ Tooling 15                                          (AL-Go and BCQuality)
  This week's changes on one page →                     (/changes/week/)

Per system / Stars                                      (as today)
```

1. **Pills.** There are three toggle buttons (`aria-pressed`), in the order Videos, Posts, Code, each with the
   shape icon the galaxy already uses (triangle, bar) and a new diamond for code. Each label carries its count
   within the current scope. A pill with a count of 0 is still drawn, disabled. Clicking toggles that kind. If
   that would switch the last pill off, all three come back on instead, so the list is never empty.
2. **What the pills filter.** The panel lists show only the kinds that are on. The lens's star set is the union of
   the stars the kinds that are on touch: media hubs (`items[i][3]`) for Videos and Posts, change stars
   (`changes[i][3]`) for Code. The chip count (`lensSet.size`, `galaxy.ts:1111`), the rings and the "Stars" list
   follow that set. With all three on, the chip reads 72 on this data. With only Code on, it reads 55.
3. **Meta line.** "N stars light up: A videos and posts and B code changes landed in the 7 days up to D." Each part
   appears only when its kinds are on and its count is not 0.
4. **Scope.** At level 2 (a system open), every count and list narrows to that system. Media narrow as today, by
   their hubs' group (`galaxy.ts:1009`). Code narrows by the change's `system`. In Administration this week that is 5
   changes, #12152 among them.
5. **Code groups.** Each group is a `<details>` whose `<summary>` reads "Breaking 4". Breaking and Features start
   open; Fixes, Other and Tooling start folded. The reader's open and folded choices are remembered per group in
   `localStorage` (`bcobs-week-groups`). Every read and write sits in try/catch, and the defaults apply when storage
   is unavailable. A group with no rows is left out.
6. **Code row.** A link to the change page (`changes/<repo>/<n>/`), using the D73 media-row layout. Line one has the
   diamond and the title. Line two has `[kind] · system label · date`, followed by `· also in 29.x` when the change
   lists backports (major from `backports[].base`). The kind pill is the `change_kind`, and the system label comes
   from `config/taxonomy` through `sysById`.
7. **Footer link.** "This week's changes on one page" goes to `/changes/week/`.

### 2.2 The hash

- `#lens=landed` means all three pills are on, as today, so every existing link keeps working.
- `#lens=landed&kinds=c` means only Code is on, and `kinds=v,p` means videos and posts. The letters are `v`, `p` and
  `c` in any order. Unknown letters are dropped, and an empty or all-unknown value means all three.
- `setHash` writes `kinds=` only while the lens is `landed` and not all three are on. Otherwise it leaves `kinds` out.

### 2.3 The galaxy panel at levels 1 and 2 without the lens

The "Landed in ..." block (`galaxy.ts:1015`, `1023`) keeps its media rows. Under it, one line is added when the scope
has code changes: "and 82 code changes →", linking to `#lens=landed&kinds=c` (with `&system=<id>` at level 2).

### 2.4 Header pill (every page but home, D71)

```
[ 20 new · 82 code changes ]
```

The pill becomes two links in one pill shape. "20 new" goes to `#lens=landed&kinds=v,p`, and "82 code changes" goes
to `#lens=landed&kinds=c`. Below 600 px the code half reads "82 PRs". Each half is left out when its count is 0, and
the pill is left out when both are. The title attribute stays "Videos, posts and code changes of the 7 days up to
<anchor>, lit in the galaxy".

### 2.5 Top nav

The order becomes Topics, Roadmap, AL objects, Localizations, Videos, Posts, **Changes**, Weekly, Sources. The
`changes` id already matches `section="changes"` on the change pages, so `aria-current` works.

### 2.6 `/changes/week/`

This is a static page built from `landed.json`'s `changes`, so it uses the same window and anchor as the galaxy:
"82 code changes in the 7 days up to 2026-10-08", in the same groups as the panel (all open, server-rendered, no
script), with the `/changes/` row markup. `/changes/` gets one line in its lede: "This week: 82 changes →". There is
no markdown twin and no `llms.txt` change, because `content/changes/llms.txt` is already newest first.

### 2.7 Agents

Nothing changes in the MCP server or `content/`. `whats_new` already covers changes.

## 3. Decisions

Draft D80:

> **D80 This week includes Microsoft's code, behind kind pills.** The this-week lens and the header pill counted only
> videos and posts (D66, D70, D73); the week's merged pull requests (82 change pages on 2026-10-08, 1,083 in all) were
> reachable only through a breadcrumb. `data/graph/landed.json` gains a `changes` array next to `items`: one tuple per
> change page merged in the window, with the summary stars it touches by id (its topics, its objects in the summary,
> the app star that `implements` each object), its kind, system, breaking flag and backport majors. The lens gets
> three pills, Videos, Posts and Code, all on by default; a pill filters the panel list and the lit stars, the last
> pill never turns off, and the state is `kinds=` in the hash (left out when all are on). The code list is grouped by
> `change_kind`, not `behavior_change` (65 of 82 carry it): Breaking, Features, Fixes, Other, then Tooling for AL-Go
> and BCQuality; Breaking and Features open. The header pill splits into "N new" and "M code changes", each a deep
> link with its pills. "Changes" joins the top nav, and `/changes/week/` lists the same week. Code lights only stars
> that already exist: 28 of 82 changes touch one, so the map understates code, and the list is complete. Amends D70
> (the pill), D71 (the rings also mark code stars under the lens) and D73 (a code row follows the media-row layout).
> Rejected: a separate "MS pull requests" chapter without filters (two controls for one job), changes inside `items`
> (old readers assume `v` or `p`), a mark on each system that has changes (new drawing code; later), list-only code
> (the map and the list would disagree), grouping by `behavior_change`, a backport subgroup (4 pages; backports show
> as "also in 29.x"), one combined count in the header (the media count drowns), media-only default pills (the
> problem stays).

Other choices made in this spec:

- **Changes get their own `changes` array and do not go into `items`.** `items` keeps its schema (`v` or `p`) and its
  role as the media list, so the header's media count, `mediaRow` and the D73 tests stay as they are. An older site
  build reading a newer `landed.json` ignores the new key.
- **Changes do not join the summary graph.** That would grow `summary.json` (1.16 MB) and reopen D66's star budget.
  They light stars that already exist, by id. Stable ids only: the app star comes from the `implements` edge, never
  from matching `apps[]` names, so the title-matching rule holds.
- **The source star is not lit**, the same as for media (`graph.ts:356` skips `source/`).
- **The window is the same `LANDED_DAYS` (7) up to the run date**, by the merge day (`merged_at` sliced to the date,
  UTC).
- **Every change page in the window counts**, all repos and branches. Bots and backports without a page are not in
  the list, because the list shows pages. The digest's "115 merged" counts every merge, so its numbers differ, and
  `/changes/week/` says "change pages".

## 4. Contract

### 4.1 `landed.json` (`schemas/landed.json`, `pipeline/link/graph.ts`)

```jsonc
{
  "anchor": "2026-10-08", "days": 7,
  "items": [ /* unchanged: [id, v|p, date, stars[], title, source?] */ ],
  "changes": [
    ["change/bcapps/12152", "feature", "2026-10-05", [], "#12152 [MCP] Clear environment description after environment copy", "administration", 0, []],
    ["change/bcapps/12255", "fix", "2026-10-06", ["object/..."], "#12255 ...", "administration", 0, ["29"]]
  ]
}
```

Tuple: `[change page id, change_kind, merge date (YYYY-MM-DD), summary stars it touches (sorted), title, system,
breaking (0 | 1), backport majors (sorted, unique; from backports[].base "releases/29.x" -> "29")]`. Order: newest
first, then id, as `items`. The schema adds `changes` as optional (`required` stays `["anchor", "days", "items"]`),
with `prefixItems` for the eight fields, `items: false` and `minItems: 8`.

In `graph.ts`:

- `buildGraph` keeps, for change pages, `aux.change: Map<id, { kind, date, system, breaking, backports, title }>` from
  the frontmatter (`change_kind`, `merged_at`, `system`, `breaking || change_kind === "breaking"`, `backports`). The
  node's `lit_at` stays null, so nothing else that reads `lit_at` changes.
- `export function landedChanges(g: Graph, keep: Set<string>, today: string): LandedChange[]`: change pages whose date
  falls in the window. A change's stars are the non-related edges from the change to a node in `keep` that is not a
  `source/` node (topics and summary objects), plus, for each object it `changes`, the `app/` node joined to that
  object by an `implements` edge, when that app is in `keep`.
- `landed()` returns `{ anchor, days, items, changes }`, and `renderGraph` writes it as today (`graph.ts:453-454`).
  `GraphRun` gains `landed_changes: number`.

### 4.2 Header count (`site/src/lib/state.ts`)

`landed()` returns `{ anchor, count, changes }`, where `changes` is `j.changes?.length ?? 0`.

### 4.3 Pure helpers (`site/src/scripts/galaxy-core.ts`, tested)

```ts
export type WeekKind = "v" | "p" | "c";
/** "c" -> {c}; "v,p" -> {v,p}; "", undefined, "x" -> all three. */
export function parseKinds(s: string | null | undefined): Set<WeekKind>;
/** null when all three are on (the hash leaves kinds out), else the letters in v,p,c order: "v,p". */
export function kindsParam(on: Set<WeekKind>): string | null;
/** Toggle one kind; switching off the last one turns all three on. */
export function toggleKind(on: Set<WeekKind>, k: WeekKind): Set<WeekKind>;
export type CodeGroup = "breaking" | "features" | "fixes" | "other" | "tooling";
/** Not change/bcapps/ -> tooling; breaking flag or kind "breaking" -> breaking; feature -> features; fix -> fixes; else other. */
export function codeGroup(id: string, kind: string, breaking: 0 | 1): CodeGroup;
/** Rows per group in the order breaking, features, fixes, other, tooling; empty groups left out; rows keep their order. */
export function groupChanges<T extends [string, string, string, string[], string, string, number, string[]]>(rows: T[]): { group: CodeGroup; rows: T[] }[];
```

`parseHash` (`galaxy-core.ts:13`) accepts `kinds`.

### 4.4 Galaxy (`site/src/scripts/galaxy.ts`, `site/src/components/Galaxy.astro`)

- `interface Landed` (`galaxy.ts:34`) gains `changes?: [...]`.
- The week state is `weekKinds: Set<WeekKind>`, from the hash or all three. `lit` (`galaxy.ts:139-143`) becomes a
  function of `weekKinds`: media hubs of the `v` and `p` items that are on, plus `changes[i][3]` when `c` is on. The
  `landed` lens's `match` reads it. A toggle re-runs `setLens("landed", true)`, `renderPanel`, `renderChrome`,
  `setHash` and `redraw`.
- The lens panel (`galaxy.ts:1007-1009`) renders the pills row, then the media list (existing `landedRows`, filtered
  by kind), then the code groups. A new `codeRow(t)` follows `mediaRow` (`galaxy.ts:875-880`) with the class `g-shape
  dia`.
- `setHash` (`galaxy.ts:1121-1130`) appends `kinds=<kindsParam>` when the lens is `landed` and the param is not null.
  `fromHash` (`galaxy.ts:1306`) reads `kinds` before `setLens`.
- The levels 1 and 2 "and N code changes →" line goes under the existing blocks (`galaxy.ts:1015`, `1023`).
- `Galaxy.astro` styles: `.g-kinds` (pill row, wraps), `.g-kind-pill[aria-pressed]`, `.g-shape.dia` (a 45° square in
  `--accent`), `details.g-group > summary`. Panel-row rules follow D78: the code row has its marker, so the
  three-column grid holds.

### 4.5 Site pages

- `Base.astro`: nav entry `["changes", "Changes"]` after Posts. The pill becomes `<span class="new-pill">` holding up
  to two `<a>`, with a `·` separator between them and `<span class="long">code changes</span><span
  class="short">PRs</span>` for the code half.
- `site/src/pages/changes/week.astro` (new): reads `data/graph/landed.json` at build time and renders the groups,
  looking up each id in the `changes` collection for its summary line. `site/src/pages/changes/index.astro` gets the
  lede line.

## 5. Test plan (write first)

`tests/unit/galaxy-core.test.ts`:

- `parseKinds`: `"c"` gives `{c}`; `"p,v"` gives `{v,p}`; `""`, `undefined`, `"x"` and `"x,y"` give `{v,p,c}`;
  `"c,c"` gives `{c}`.
- `kindsParam`: `{v,p,c}` gives `null`; `{p,v}` gives `"v,p"`; `{c}` gives `"c"`.
- `toggleKind`: `{v,p,c}` minus `c` gives `{v,p}`; `{c}` toggling `c` gives `{v,p,c}`; `{v}` plus `c` gives `{v,c}`.
- `codeGroup`: `("change/al-go/2392","feature",0)` gives tooling; `("change/bcquality/213","other",0)` gives tooling;
  `("change/bcapps/12290","obsoletion",1)` gives breaking; `("change/bcapps/1","breaking",0)` gives breaking;
  `("change/bcapps/12152","feature",0)` gives features; `fix` gives fixes; `refactor`, `performance` and `other` give
  other.
- `groupChanges`: a five-row fixture in mixed order comes back in group order, row order kept, with the empty group
  left out.
- `parseHash("#lens=landed&kinds=c")` keeps `kinds`.

`tests/unit/galaxy-layout.test.ts` (the D73 fixture at line 140 grows):

- Add `content/changes/bcapps/7.md` (merged 2026-10-06, `change_kind: fix`, `system: finance`, `links.objects:
  [object/table/17]`, `backports: [{ number: 8, base: "releases/29.x" }]`), `content/changes/al-go/9.md` (merged
  2026-10-05, no objects), and an app page whose `links.objects` holds `object/table/17` (so an `implements` edge
  exists) and that is in the summary.
- Add `content/changes/bcapps/3.md` merged 2026-09-01, outside the window.
- Expect `landed.json` to validate. `changes` is `[["change/bcapps/7","fix","2026-10-06",["app/<x>","object/table/17"],
  "<title>","finance",0,["29"]], ["change/al-go/9","feature","2026-10-05",[],"<title>","<system>",0,[]]]`, and
  `change/bcapps/3` is absent. `items` is byte-identical to the current expectation (line 125), and `r.landed_changes ===
  2`.
- A graph without change pages writes `changes: []`.

`tests/unit/state.test.ts` (new; no test covers `site/src/lib/state.ts` today): `landed()` on a file
without `changes` returns `changes: 0`.

## 6. Tasks

Phase A, data (ships alone; the site ignores the new key):

1. Section 5's tests (graph and schema), failing.
2. `schemas/landed.json`: optional `changes`.
3. `graph.ts`: `aux.change`, `landedChanges`, `landed()` returns `changes`, `GraphRun.landed_changes`.
4. `npm run typecheck && npm test`. Then render the graph locally against the committed content (there is no npm
   script; `npx tsx -e 'import("./pipeline/link/graph.ts").then(m => console.log(m.renderGraph("content", "data", "", { today: "2026-10-08" })))'`,
   the call `pipeline/orchestrator/nightly.ts:439` makes): `changes` has 82 entries and 28 of them have stars (section 7).
   Do not commit the rewritten `data/graph/`; the nightly writes it.

Phase B, galaxy:

5. Section 5's `galaxy-core` tests, failing; then the helpers and `parseHash`.
6. `galaxy.ts`: `weekKinds`, `lit` as a function, pills, code groups, `codeRow`, hash read and write, the level 1 and
   2 lines. `Galaxy.astro` styles.
7. `node scripts/ui-sweep.mjs` (D78) with three new states added: `#lens=landed`, `#lens=landed&kinds=c` and
   `#system=administration&lens=landed&kinds=c`.

Phase C, header, nav and the week page:

8. `state.ts`, `Base.astro` (nav, split pill, short label under 600 px), `/changes/week/`, the `/changes/` lede line.
9. Close: D80 appended, PLAN M18 shipped, HANDOFF entry moved, section 12 renamed "Built, deviations".

No phase rewrites `content/`. Phase A changes one data file (`data/graph/landed.json`) on the next nightly. No LLM
calls, no installs, no nightly time to speak of (one pass over the change pages already loaded by `buildGraph`).

## 7. Verification

- `npm run typecheck && npm test`, `npm run validate:content` (unchanged content, as a guard).
- Real data, after phase A on the committed tree (anchor 2026-10-08): 82 changes; groups breaking 4, features 17,
  fixes 41, other 5, tooling 15; 28 with stars, 55 distinct; `change/bcapps/12152` present with `[]` stars and system
  `administration`. The counting script this spec used is reproduced here so the coder can diff against it:

  ```bash
  node -e '
  const fs=require("fs"),m=require("gray-matter"),p=require("path");const from="2026-10-02",to="2026-10-08";const r=[];
  for(const d of fs.readdirSync("content/changes")){const dd=p.join("content/changes",d);if(!fs.statSync(dd).isDirectory())continue;
  for(const f of fs.readdirSync(dd))if(f.endsWith(".md")){const fm=m(fs.readFileSync(p.join(dd,f),"utf8")).data;const day=String(fm.merged_at).slice(0,10);if(day>=from&&day<=to)r.push([d,fm])}}
  console.log(r.length, r.filter(([,f])=>f.behavior_change).length)'   # 82 65
  ```

- Site build (Node 22, RUNBOOK), served under the base path, checked headless (`scripts/ui-sweep.mjs` plus a
  Playwright check):
  - Home, `#lens=landed`: three pills with 2, 18 and 82; the chip reads 72; Breaking and Features are open, Fixes,
    Other and Tooling folded; #12152 is under Features.
  - Click Videos and then Posts so only Code stays on: the chip reads 55 and the hash is `#lens=landed&kinds=c`.
    Click Code: all three come back on and the hash is `#lens=landed`.
  - `#system=administration&lens=landed&kinds=c`: 5 code rows (10212, 12152, 12255, 12320, BCQuality 177 under
    Tooling).
  - Any other page: the header shows "20 new · 82 code changes" on one line at 1440 px, and the halves land on the
    two hashes. At 390 px it shows "82 PRs".
  - Nav shows Changes; `/changes/week/` lists 82 with the same groups; `/changes/` links to it.
  - Reduced motion: rings static, only under the lens (D71 unchanged).
- Size: `landed.json` grows from 5.2 KB to about 19 KB (about 4 KB gzipped). `scripts/site-size.ts` (D76) reports
  one new page (`/changes/week/`).

## 8. Later, not in this spec

- A system-level mark for changes that touch no star (54 of 82): a ring or a count badge on the system. Owner's
  choice was existing stars only, for now.
- A distinct ring style for stars lit by code versus media under the lens.
- Raising the summary's object budget (`TOP_OBJECTS = 300`, `graph.ts:36`) or adding System Application as an app
  star so more changes light something. That reopens D66's size budget.
- Pills in the weekly digest and RSS.
- Remembering the pill state in `localStorage` across visits (the hash is the state for now).

## 9. Risks and open questions

- **Header width.** D70 sized the header row to fit 1440 px on one line; a nav entry and a longer pill may wrap it.
  Default: if it wraps at 1440, the code half uses the short label "PRs" from 1440 down as well, and the long label
  only above 1600 px.
- **72 rings under the lens.** D71 removed always-on rings because 99 flashed everywhere. 72 under an opt-in lens is
  within what D71 accepted, and with only Code on it is 55. Default: keep one ring style; section 8 has the follow-up.
- **The map understates code.** Two thirds of the changes light nothing. The meta line names both counts, so a reader
  sees 82 changes behind 55 stars. Default: accept, as chosen.
- **A change page without `system`.** Default: `platform`, the same fallback `buildGraph` uses (`graph.ts:100`).
- **`merged_at` missing or malformed.** The page is left out of `changes`, and `validate:content` already requires
  the field.
- **Week boundaries across the digest and the lens.** The digest uses ISO weeks and the lens a rolling 7 days up to
  the run date, so their counts differ by design (D66). `/changes/week/` says "the 7 days up to <anchor>", never
  "W41".

## 10. Files

New: `site/src/pages/changes/week.astro`, `tests/unit/state.test.ts`.

Changed: `schemas/landed.json`, `pipeline/link/graph.ts`, `site/src/lib/state.ts`, `site/src/layouts/Base.astro`,
`site/src/styles/site.css` (pill halves), `site/src/scripts/galaxy-core.ts`, `site/src/scripts/galaxy.ts`,
`site/src/components/Galaxy.astro`, `site/src/pages/changes/index.astro`, `scripts/ui-sweep.mjs`,
`tests/unit/galaxy-core.test.ts`, `tests/unit/galaxy-layout.test.ts`, `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [x] Section 5 tests written first and green; `npm run typecheck && npm test` green.
- [x] Section 7's real-data numbers reproduced, or the deviation explained in section 12.
- [x] Section 7's site checks pass on a local build; `node scripts/ui-sweep.mjs` reports 0 squeezed rows, including
      the three new states.
- [x] D80 appended to `docs/DECISIONS.md` (section 12 text); PLAN M18 row marked shipped; HANDOFF entry moved from
      "Open specs" to "Where things stand".
- [x] `docs/specs/galaxy-views.md`, `this-week-lens.md` and `media-rows.md` each get one line pointing to D80 where
      they describe `landed.json` or the pill.

## 12. Built, deviations (2026-10-08)

Built in three commits on top of the spec, one per phase (A data, B galaxy, C header, nav and week page), then the
docs. Applied: D80 in `docs/DECISIONS.md` (the section 3 text with the measured numbers), the PLAN M18 row shipped,
the HANDOFF entry moved, the `AGENTS.md` lookup line, one pointer line each in `galaxy-views.md`, `this-week-lens.md`
and `media-rows.md`.

Verified: `npm run typecheck`, `npm test` (396 tests, 395 pass, 1 skipped as before); a local render of the graph on
the committed content (anchor 2026-10-08) and a site build under Node 22 (28,830 pages); a Playwright run on the built
site; `node scripts/ui-sweep.mjs` over 34 states at 1440 and 390 px, 0 squeezed rows. The rendered `data/graph/` was
discarded; the next nightly writes it.

| Check | Spec | Measured |
|---|---|---|
| changes in the window | 82 | 82 |
| groups breaking / features / fixes / other / tooling | 4 / 17 / 41 / 5 / 15 | 4 / 17 / 41 / 5 / 15 |
| changes that light a star | 28 | **76** |
| distinct stars from code | 55 | **116** |
| chip, all pills on / code only | 72 / 55 | **130 / 116** |
| Administration, code only | 5 rows | 5 rows (10212, 12152, 12320, 12255, BCQuality 177) |
| `landed.json` size | about 19 KB | 24.9 KB |
| "also in 29.x" tags | 7 main pages with backports | 7 |

Deviations:

- **Code lights more than the spec measured.** The spec counted only the change page's own links. The graph also
  has the reverse links: a topic hub that lists a change (`links.changes`, D61 phase "topic-hub links") gives a
  `relates` edge of weight 1 (not a Related row), and `landedChanges` takes every non-Related edge from the change to a
  summary star. #12152 lights the hub "Control your data", so the owner's example shows on the map. No code change
  needed; the numbers in D80 are the measured ones.
- **The header's code half reads "M PRs" at every width.** "82 code changes" wrapped the header row at 1440 px (the
  search moved to a second row: 121 px against 73). The spec's fallback ("the long label only above 1600 px") would
  never apply, because the header row is capped at 1440 px (`site.css`, `.site-header .wrap`). The title attribute
  says "code changes (merged pull requests)". Below 1440 the header wraps as before D80 (D70).
- **Schema date pattern.** `changes[i][2]` carries a date pattern in `schemas/landed.json`; `items` keeps its schema.
- **The panel's lens chip** stays the global star count at level 2, as for every lens (unchanged behaviour).

Not done: a pixel count of the rings under the code pill. The ring code is unchanged and draws over `lit`, which the
pills now compute; the Playwright run checked the chip count and the panel, not the canvas.

## 13. Proposed edits to other files (applied 2026-10-08, see section 12)

**`docs/DECISIONS.md`**: append the D80 text from section 3, with "Spec: `docs/specs/week-code-changes.md`." at the
end.

**`docs/PLAN.md` section 5**, before `v0.2+`: the M18 row as committed with this spec (set to "shipped <date>" at ship
time).

**`docs/HANDOFF.md`**: move the entry from "Open specs" to "Where things stand" with what shipped and any deviations.

**`AGENTS.md`**: in "Lookups", `data/graph/` (the galaxy) gains "; `landed.json` also lists the week's code changes
(D80)".

**`CONTENT-NOTICE.md`**: nothing; change titles are Microsoft metadata already on the change pages.
