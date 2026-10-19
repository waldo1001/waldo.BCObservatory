---
issue: 14
status: implemented
---

# A search stays lit when you tilt, and a picked plane lists only its matches

Status: implemented, 2026-10-19 (section 12 records what was built and where it differs). Decision: D100 (appended
2026-10-19). Milestone: M38. Owner: waldo.
Scope: the header search (`site/src/scripts/live-search.ts`) and the galaxy's tilted state with a search on: the
tilted drawing, plane names, pane and list per plane (`site/src/scripts/galaxy.ts`), the pure helpers
(`site/src/scripts/layers-core.ts`, `site/src/scripts/galaxy-core.ts`), one line of the "?" sheet
(`site/src/components/Galaxy.astro`), and their tests. Also the deep link with a search and a system, and a search typed
while tilted. Every claim below was verified against the tree at `cbce3489d0` (`origin/main` on 2026-10-19, D99 just
merged; `data/` last changed by the derive `0dfe983184` of the same day); the numbers were measured on that commit with
the script in section 1. Not in scope: every lens other than the search (version, this week, type, tier, coverage,
country, source: section 8), the flat galaxy's drawing, the search panel of the flat levels, the search index and its
scorer (`packages/search`), anything under `content/`, `data/` or `pipeline/`.

## 1. Goal

waldo, 2026-10-19, with a screenshot of AL Development tilted and Media picked: searched "Telemetry", the galaxy lit
the matching stars; zoomed into AL Development, still lit; tilted: "Highlight is gone." He wants the highlight kept on
the tilted view, and a picked plane (Media in the screenshot) "still filtered on the search word".

| What is wrong today | Evidence |
|---|---|
| The tilted drawing never reads the search. `drawTilted` dims a thing only for a core sample or a tilt lens (`galaxy.ts:580-588`) and for a picked plane (`:569`); the galaxy lens (`lens`, `lensSet`) appears once, for the obsolete colour of the version lens (`:657`). Flat, the same lens dims every other star to 0.3 (`:343`) and rings each match in the accent (`:494-498`) | read |
| The tilted pane and the list per plane never read the search: `renderPanel` takes the tilted branch before the search branch (`:1116`); `tiltPanel` (`:1032-1092`) and `renderPlaneTable` (`:1094-1109`) list every thing of the plane. The screenshot's pane: "MEDIA 164, 58 videos, 106 posts", unfiltered | read, screenshot |
| The chip stays on and says the search is still there (`"Telemetry" 30 ×`, `:1251-1256`), which is why the missing highlight reads as a bug | screenshot |
| The search only knows its star hits. `SearchHits` carries the star ids (`ids`), up to 50 star-less pages (`pages`) and their count per system (`live-search.ts:14`, `:35`). No media item is a star and most objects are not, so even a tilted view that read `lensSet` would light no media and almost no code: "Telemetry" hits 153 pages, 30 of them stars; on AL Development's planes it hits 10 of 164 media (0 stars), 11 of 107 hubs (all stars), 23 of 1,768 objects (0 stars). "posting" has 2,030 star-less hits, of which `pages` keeps 50 | measured, table below |
| A non-star object is not drawn on the tilted code plane at all unless its plot is open or it is in a core sample (`:649`): the 23 code hits would stay invisible even with a highlight | read |
| A search typed while tilted leaves the system: the first search of a session jumps to the galaxy level from any level above 1 (`:937`), which flattens (`update` -> `flatten`, `:1287`) | read |
| The address bar already reads `#q=Telemetry&system=development&tilt=1&plane=media` (`setHash`, `:1273`, `:1277-1280`), but opening it lands on the galaxy level: `fromHash` hands the query to the live search and returns before it reads `system`, `star`, `tilt` or `plane` (`:1493-1494`), and the search then jumps to level 1 anyway (`:937`) | read |

Hits per plane (the live search's own scorer and shards: hubs, media, objects, `kinds: ["page"]`, `live-search.ts:30`):

| Query, system | All hits (stars) | Media (videos) | Hubs | Code (stars, named by Learn) | Countries | Plots holding a hit |
|---|---|---|---|---|---|---|
| "Telemetry", development (AL Development) | 153 (30) | 10 of 164 (9) | 11 of 107 | 23 of 1,768 (0, 0) | 0 of 13 | 4 of 124 (20 hits in the Telemetry plot) |
| "Telemetry", platform | 153 (30) | 31 of 82 (21) | 8 of 125 | 2 of 1,361 (0, 0) | 0 of 19 | 2 of 52 |
| "posting", finance | 2,155 (125) | 26 of 52 (18) | 14 of 57 | 164 of 2,279 (10, 31) | 6 of 20 | 34 of 126 |

AL Development holds 2,052 things on its planes (164 + 107 + 1,768 + 13); "Telemetry" hits 44 of them.

```bash
# from the repository root after npm ci; delete the file afterwards
cat > measure-hits.ts <<'EOF'
import { readFileSync as read } from "node:fs";
import { pageToRecord, prepare, search } from "@bc-observatory/search";
import { parse } from "./site/src/scripts/search.ts";
const [q, sys] = process.argv.slice(2), j = (p: string) => JSON.parse(read(p, "utf8"));
const man = j("data/index/index-manifest.json");
const idx = prepare(man.shards.filter((s: any) => ["hubs", "media", "objects"].includes(s.kind)).flatMap((s: any) => j(`data/index/${s.file}`)).map(pageToRecord));
const all = new Set(search(idx, parse(q, idx), { kinds: ["page"] }).map((h: any) => h.r.page.path.replace(/^([a-z]+)s\//, "$1/")));
const stars = new Set(j("data/graph/summary.json").nodes.map((n: any) => n.id)), L = j(`data/graph/layers/${sys}.json`);
const media = L.media.filter((m: any) => all.has(m[0])), hubs = L.hubs.filter((h: any) => all.has(h[0]));
const code = L.objects.filter((o: any) => all.has(`object/${o[0]}`)), countries = Object.keys(L.countries).filter((c) => all.has(`localization/${c}`));
console.log(`"${q}": ${all.size} hits, ${[...all].filter((id) => stars.has(id)).length} stars. ${sys}: media ${media.length}/${L.media.length} (${media.filter((m: any) => m[1] === "v").length} v), hubs ${hubs.length}/${L.hubs.length}, code ${code.length}/${L.objects.length} (${code.filter((o: any) => o[7] & 1).length} stars, ${code.filter((o: any) => o[3] > 0).length} on Learn), countries ${countries.length}/${Object.keys(L.countries).length}`);
EOF
npx tsx measure-hits.ts Telemetry development   # and: Telemetry platform, posting finance
```

The index changes with every nightly: on a later commit these numbers move. Re-run the script and use what it prints.

After this change:
- Tilting with a search on keeps it: every thing on the four planes that the search hits keeps full strength and an
  accent ring, the rest draws at 0.3, as the flat galaxy does with stars.
- The tilted pane, a picked plane and the list per plane list only the hits, with "10 of 164" counts.
- Media, hubs, every object and countries light up, not only stars: the search hands over every hit's id.
- Clearing the search (chip, the pane's button, the header field) keeps the tilt, the pick and the zoom and brings
  everything back.
- A search typed while tilted filters the planes in place instead of leaving the system.
- The link `#q=Telemetry&system=development&tilt=1&plane=media` opens what it says.

## 2. Reader-facing behaviour, after

### 2.1 Search, zoom in, tilt (the owner's path)

Type "Telemetry" at the galaxy level, click AL Development, press Tilt:

- **Canvas.** The 10 media triangles and bars, 11 hub dots and 23 code squares that the search hits draw at their
  normal strength with a 1.2 px accent ring 4 px outside the mark, alpha 0.9 (the flat ring, `galaxy.ts:494-498`).
  Every other thing draws at 0.3 of its alpha. The code plane shows the 23 hits as marks even though none is a star
  (today a non-star object is not drawn at full tilt), 20 of them inside the Telemetry plot's tile. A plot tile that
  holds no hit draws its fill, outline and name at 0.3. A line between planes keeps its strength when either end is a
  hit, else 0.3. These factors multiply with the plane factor of a pick or a tilt lens (0.4, D99) and with the
  country and coverage lenses' own dimming.
- **Core sample** (a click on a thing) with a search on: the sample decides the strength as today (`:588`); hits keep
  their ring, so the search stays visible through the sample. The sample's pane is unchanged.
- **Plane names** read `MEDIA` over `10 of 164 match` (today `164 videos and posts`), `TOPIC HUBS` `11 of 107 match`,
  `CODE` `23 of 1768 match`, `COUNTRIES` `0 of 13 match`.
- **Pane**, nothing picked:

```
system · tilted · "Telemetry"
AL Development
"Telemetry" matches 44 of the 2052 things on these planes; the rest is dimmed and left out of the lists. Click a
plane or its name to list only that plane; click it again for all four.
[Clear the search]

MEDIA 10 of 164                  (heading button, as D99)
9 videos, 1 post
  8 hit rows, then "and 2 more in the list per plane"
TOPIC HUBS 11 of 107
  8 hit rows, "and 3 more in the list per plane"
CODE 23 of 1768
0 named by a Learn page
  [no Learn page]
  8 hit rows, "and 15 more in the list per plane"
  Namespace plots 4 of 124       (only plots holding a hit; the Telemetry plot first, small "20 of 20 match")
COUNTRIES 0 of 13
replace 22 of the code plane's objects    (unchanged: it describes the plane)
  Country [none ▾]
  No match for "Telemetry" on this plane.

[List per plane] [Flatten]
```

- Rows are the hits in D99's order (`planeOrder`), each a button that opens its core sample, as today.
- "N videos, M posts" counts the hits, singular for one ("1 post"); so does "named by a Learn page".
- With the coverage lens on, its list ("No Learn page names them") lists only hits, and so does the country lens's
  ("Replaced by BE"). Their counts count the hits.
- `No match for "<query>" on this plane.` when the plane has things but no hit; `None in this system.` (D99) when the
  plane is empty.
- "Clear the search" is today's `data-clear-lens` button (handler at `:1191`).

### 2.2 Picking a plane with a search on

Click the media plate, its name or its heading:

```
system · tilted · media · "Telemetry"
AL Development
Only media matching "Telemetry". Click the plane, its name or this heading again for all four.
[Clear the search]
MEDIA 10 of 164
9 videos, 1 post
  10 hit rows (up to 60)
```

The canvas does what D99 does (accent outline, the other planes at 0.4), with the search's dimming on top. The list
per plane (button, or "and N more") opens on the picked tab with only the hits: meta line
`AL Development, media: 10 of 164 match "Telemetry"`, then the hit rows (up to 500, as today). The phone's Planes view is
this list and filters the same way.

### 2.3 Changing or clearing the search while tilted

- **Typing a new query while tilted** keeps the system, the tilt, the pick, the zoom and an open core sample; the
  planes, names, pane and list refilter. This holds for the first search of the session too (today it jumps to the
  galaxy level). At the flat galaxy, system and star levels nothing changes: a first search still goes to the galaxy
  level (D44).
- **Clearing** (the chip's ×, "Clear the search", Esc or an empty header field) keeps the tilt, the pick and the zoom:
  every thing back at full strength, the pane and the list unfiltered.
- **Esc in the galaxy** is unchanged: list view, core sample, pick, flatten; after that the search stays on at the
  system level, as it does flat today.

### 2.4 Deep links

- `#q=Telemetry&system=development&tilt=1&plane=media` opens AL Development tilted with Media picked and the search
  on; `#q=Telemetry&system=development` opens AL Development flat with the search on; `#q=Telemetry&star=<id>` opens
  the star with the search on. `view=list` is honoured as today.
- `#q=Telemetry` alone opens the galaxy level with the search on, as today.
- `setHash` already writes these (`:1271-1283`): no change there.

### 2.5 The "?" sheet

`Galaxy.astro:58` becomes: "Type in the search box to light up matching stars; <kbd>Enter</kbd> opens the full
results. A tilted system keeps the search: its matches stay lit on every plane and the panel lists only them."

## 3. Decisions

**D100 draft text** (appended at ship time):

- **D100 A search survives the tilt: the planes keep its hits lit, and every tilted list shows only them (2026-10-19,
  M38).** Tilting a system with a search on dropped the highlight while the chip stayed: the tilted drawing and pane
  never read the search, and the search knew only its star hits, while no media item and few objects are stars
  ("Telemetry" on AL Development: 10 media, 11 hubs and 23 objects hit, 0 of the media and objects stars). The live
  search now hands the galaxy every hit's id (`SearchHits.all`). Tilted, a thing whose own page is a hit (media and hubs
  by id, an object by `object/<key>`, a country by `localization/<code>`) keeps full strength and the flat lens's
  accent ring; the rest draws at 0.3, the flat lens's factor; non-star hits are drawn on the code plane. The tilted
  pane, a picked plane and the list per plane list only the hits, counted "10 of 164". Clearing the search keeps the
  tilt, pick and zoom. A search typed while tilted stays in the tilted system; flat levels keep D44's jump to the
  galaxy. A link with `q` and `system` or `star` opens that scope with the search on. Search only: the other lenses
  match stars, and the version lens would need per-object version data in the layers files. Rejected: lighting only
  the star hits (no media and none of the 23 code hits would light); the 50 star-less `pages` (2,030 for "posting");
  hiding the misses (the planes lose their shape, and flat dims); all rows with hits marked (the owner asked for
  filtered); matching titles from the layers file (title matching; the shared scorer decides, D86); the other lenses in
  this change (owner, 2026-10-19); the chip counting plane hits (it names the search galaxy-wide); jumping to the galaxy
  when a search is typed while tilted (loses the tilt). Spec: `docs/specs/tilt-keeps-search.md`.

## 4. Contract

### 4.1 `site/src/scripts/live-search.ts`

```ts
/** all (D100): every hit's node id, stars included, in score order, uncapped: the tilted planes light media and objects that are not stars. */
export interface SearchHits { q: string; ids: string[]; stars: Row[]; reach: Record<string, number>; pages: Row[]; total: number; all: string[] }
```

`hitsFor` (`:29-39`) returns `all: scored.map(({ r }) => nodeIdOf(r.path))`; `all.length === total`. Nothing else
changes. Example for "Telemetry": `ids.length` 30, `pages.length` 50, `all.length` 153, `total` 153.

### 4.2 `site/src/scripts/layers-core.ts`

```ts
/** D100: the flat lens's factor for a star it does not match (galaxy.ts:343), for a thing a search does not hit. */
export const DIM_MISS = 0.3;
/** D100: which things on each plane a search hits, each by its own page; n counts them per plane. */
export interface HitMask { media: boolean[]; hubs: boolean[]; code: boolean[]; countries: Set<string>; n: Record<PlaneId, number> }
/** media: hits.has(m[0]); hubs: hits.has(h[0]); code: hits.has(`object/${o[0]}`); countries: the codes of f.countries with hits.has(`localization/${code}`). */
export function hitMask(f: LayersFile, hits: ReadonlySet<string>): HitMask;
/** Is a thing a hit? media, hubs and code by th.i; countries by th.code (a list row's i is its row, not an object). */
export function isHit(m: HitMask, th: Thing): boolean;
/** A countries-plane mark (one per replaced object, i an object index): a hit when any country replacing it is. */
export function markHit(m: HitMask, f: LayersFile, i: number): boolean;
```

Example on the test fixture (section 5): `hitMask(f, new Set(["object/table/15", "topic/fin/vat", "video/v1",
"localization/nl"]))` -> `{ media: [true], hubs: [false, true], code: [false, true, false], countries: Set {"nl"},
n: { media: 1, hubs: 1, code: 1, countries: 1 } }`.

### 4.3 `site/src/scripts/galaxy-core.ts`

```ts
/** D100: does a first search send the reader to the galaxy level? From a flat system or star level the reader typed it at (D44); never while tilted, never when the hash named the scope. */
export function searchLeaves(s: { had: boolean; level: number; tilt: number; fromHash: boolean }): boolean {
  return !s.had && s.level > 1 && !(s.level === 2 && s.tilt > 0) && !s.fromHash;
}
```

`parseHash` is unchanged: it already keeps `q` with `system`, `star`, `tilt`, `plane` (`galaxy-core.ts:16`).

### 4.4 `site/src/scripts/galaxy.ts`

- `Lens` (`:42`) gets `hits?: Set<string>`; `setSearch` (`:935`) sets `hits: new Set(h.all)`. `lensSet` stays the star
  ids, so the flat drawing, the flat search panel and the chip's count (`lensChip(lens.label, lensSet.size)`,
  `:1253`) do not change.
- State: `let hashScope = false;` (the hash named a scope for the search to keep) and a cached mask:
  `searchMask(): HitMask | null`, null without `lens?.hits` or `layers`, else `hitMask(layers, lens.hits)` recomputed
  when `${layers.system}\n${lens.search}` changes.
- `setSearch` (`:931-941`): read and reset the flag first (`const fromHash = hashScope; hashScope = false;`, also on
  `h === null`); replace the condition at `:937` with `searchLeaves({ had, level, tilt, fromHash })`; the staying
  branch also calls `renderTable()` (the list per plane may be open).
- `drawTilted` (`:561-692`), with `sm = searchMask()`:
  - `hitA(th) = !sm || isHit(sm, th) ? 1 : DIM_MISS`; a countries mark uses `markHit(sm, f, i)`.
  - `dim(th)` (`:588`): with a core sample open, as today; without one, `(lensMatch(th) ? 1 : 0.3) * hitA(th)`.
  - After each hit's mark (countries `:612-618`, code `:646-659`, hubs `:661-664`, media `:665-670`): the accent ring,
    `lineWidth 1.2`, `globalAlpha 0.9 * k * fa(plane)`, radius 8 for media and hubs, `d / 2 + 4` for code, `d + 4` for
    a countries diamond.
  - Code (`:649`): a hit is drawn and kept for the pointer like a star (`!star && !open && !inS && !hit && k > 0.5`
    returns).
  - Tiles (`:629-644`): with `sm`, a tile whose plot holds no code hit multiplies its fill, stroke and name alpha by
    `DIM_MISS`.
  - Lines (`:603`): times `DIM_MISS` when `sm` and neither end is a hit (`isHit` on `l.from`, `l.to`; a countries end
    by its `code`).
- `placePlaneLabels` (`:694-714`): rebuild when `${f.system}|${lens?.search ?? ""}` changes (today `dataset.sys`,
  `:698`); with `sm` the small line reads `${sm.n[id]} of ${counts[id]} match`.
- `tiltPanel` (`:1032-1092`), no core sample, with `sm`: kicker `system · tilted[ · <plane>] · "<query>"`; the meta
  line and "Clear the search" of 2.1 and 2.2; heading count `<hits> of <all>` (`head`, `:1065`); `rowsOf` stays the
  cached unfiltered order, `list` (`:1068`) filters it with `isHit` before the cap and the "and N more"; the media meta
  (`:1069`, `:1077`) and the code meta (`:1079`) count the hits; the coverage list (`:1071`) and the country list
  (`:1073`) keep only code hits; plots (`:1074-1075`) only those holding a hit, by hits then size, small
  `<hits> of <n> match`, heading `Namespace plots <with a hit> of <all>`; the empty line of 2.1.
- `renderPlaneTable` (`:1094-1109`): rows filtered with `isHit`; meta `${label}, ${plane}: ${hits} of ${all} match
  "${query}"`.
- `fromHash` (`:1490-1513`): with `q`, set `hashScope = !!(h.get("system") || h.get("star"))`; when it is false, deliver
  the query and return as today; when true, handle `view`, `star`, `system`, `tilt` and `plane` as the code below
  `:1494` does, then deliver the query (`hashQueryCbs`, else `pendingQuery`). `q` and `lens` stay exclusive.
- Header comment (`:20-24`): one sentence for D100.

### 4.5 `site/src/components/Galaxy.astro`

`:58` as in 2.5. No CSS change: the ring is canvas, the counts reuse `.g-n` and `.g-plane small`.

## 5. Test plan (write first)

`tests/unit/live-search.test.ts`:
1. In "hits split into stars, star-less pages ..." (fixture at `:17-31`): `c.all` holds the four hits
   (`object/table/18`, `object/table/1800`, `topic/bc/sales/customers`, `video/v1`), `c.all.length === c.total`;
   `hitsFor(idx(rows), "zzz", () => true).all` is `[]`.
2. New: 60 star-less video rows titled `Telemetry <n>` -> `pages.length === 50`, `all.length === 60`, every id starting
   `video/`.

`tests/unit/layers-core.test.ts` (fixture `f` at `:5-15`):
3. `hitMask(f, new Set(["object/table/15", "topic/fin/vat", "video/v1", "localization/nl", "object/table/999",
   "change/bcapps/1"]))` equals the example of 4.2 (ids not on the planes are ignored).
4. With that mask: `isHit(m, { plane: "code", i: 1 })` true, `{ plane: "code", i: 0 }` false,
   `{ plane: "countries", i: 0, code: "be" }` false, `{ plane: "countries", i: 1, code: "nl" }` true;
   `markHit(m, f, 0)` true (`"be nl"`), `markHit(m, f, 2)` false (`"be"`), `markHit(m, f, 1)` false (no country).
5. Filtering rows: `planeRows(f, "countries", (id) => id).filter((r) => isHit(m, r.thing))` is the NL row only;
   `planeRows(f, "code", (id) => id).filter(...)` is `table/15` only.
6. `hitMask(f, new Set())`: every array all false, `countries` empty, every `n` 0.

`tests/unit/galaxy-core.test.ts`:
7. `parseHash("#q=Telemetry&system=development&tilt=1&plane=media")` ->
   `[["q", "Telemetry"], ["system", "development"], ["tilt", "1"], ["plane", "media"]]`.
8. `searchLeaves`: `{ had: false, level: 2, tilt: 0, fromHash: false }` true; level 3 true; level 1 false; level 2 with
   tilt 1 false; tilt 0.4 (sliding) false; `fromHash: true` false; `had: true` false.

The canvas and the DOM have no unit tests in this repository (only the pure modules do); section 7 checks them in a
browser.

## 6. Tasks

Two phases; each ships alone. Site only: no page under `content/`, no file under `data/` or `pipeline/`, so no derive
and no content commit; each is live with the Pages build of its merge.

**Phase 1: the search on the tilted view** (half a day)
1. Tests 1 to 6, failing (`tsc`: no `all`, no `DIM_MISS`, `hitMask`, `isHit`, `markHit`).
2. `live-search.ts`: `all`. `layers-core.ts`: `DIM_MISS`, `HitMask`, `hitMask`, `isHit`, `markHit`.
3. `galaxy.ts`: `Lens.hits`, `searchMask`, `drawTilted`, `placePlaneLabels`, `tiltPanel`, `renderPlaneTable`.
4. `Galaxy.astro:58`; the header comment.

**Phase 2: a search typed while tilted, and the deep link** (one to two hours)
5. Tests 7 and 8, failing (`searchLeaves` missing).
6. `galaxy-core.ts`: `searchLeaves`. `galaxy.ts`: `hashScope`, `setSearch`, `fromHash`.

**Ship** 7. DECISIONS D100, PLAN M38 shipped, HANDOFF entry moved to "Where things stand" (section 12).

## 7. Verification

```bash
npm run typecheck && npm test
export PATH=/Users/waldo/.nvm/versions/node/v22.23.1/bin:$PATH   # Astro needs Node >= 22.12
npm run site:build
```

The League runs only `npm test` and `npm run typecheck` (`.league.json` `commands`); the site build and the browser
checks below are the PR review's, as they were for D99.

Serve `site/dist` under the base path (symlink it as `<scratch>/serve/waldo.BCObservatory`, `python3 -m http.server
4173` there) and open `http://localhost:4173/waldo.BCObservatory/` in the built-in browser pane at 1440 x 900 with the
panel open. Numbers are those of section 1 on `cbce3489d0`; on a later data commit, re-run the script there first.

1. Type "Telemetry" in the header field at the galaxy level, click AL Development, press Tilt: the hits stay lit with
   accent rings, the rest at 0.3; 23 code marks visible (20 in the Telemetry tile), the other 120 tiles dimmed; names
   read `10 of 164 match`, `11 of 107 match`, `23 of 1768 match`, `0 of 13 match`; the pane opens with
   `"Telemetry" matches 44 of the 2052 things`, headings `10 of 164`, `11 of 107`, `23 of 1768`, `0 of 13`,
   `9 videos, 1 post`, `Namespace plots 4 of 124`, and countries `No match for "Telemetry" on this plane.`
2. Click the media plate: 10 rows, kicker `system · tilted · media · "Telemetry"`; the hash is
   `#q=Telemetry&system=development&tilt=1&plane=media`. "List per plane" opens 10 rows under
   `AL Development, media: 10 of 164 match "Telemetry"`.
3. Click a code hit (a non-star object): its core sample opens; its ring stays.
4. Reload the page: the same view comes back (tilted, Media picked, search on, 10 rows). Open
   `#q=Telemetry&system=development` in a fresh tab: AL Development flat with the 11 hub stars lit.
5. Click the chip's ×: still tilted, Media still picked, 164 rows, nothing dimmed by the search; the hash loses `q`.
6. Still tilted, type "posting", then go to Finance (→) and Tilt: media `26 of 52`, hubs `14 of 57`, code `164 of 2279`,
   countries `6 of 20`, plots `34 of 126`. Now clear the field and type "Telemetry" while tilted: the view stays
   tilted on Finance (no jump to the galaxy).
7. Country lens BE on Finance with "posting": "Replaced by BE" lists only code hits; coverage lens: only hits without
   a Learn page.
8. 390 wide: Planes with a search on lists only the hits per tab.
9. Flat galaxy and flat system with a search: unchanged (rings, 0.3, the search panel, the chip's 30).
10. Galaxy script chunk before and after (`ls -l site/dist/_astro/*.js`, gzipped): report the difference.

## 8. Later, not in this spec

- The other lenses on the tilted view: version (needs per-object `cv` in the layers files, `pipeline/link/graph.ts:441`
  writes only a `changed` flag), this week (the media plane could ring `landedMedia`), type, tier, coverage, country,
  source.
- The chip counting what is lit in the view in sight (plane hits while tilted, stars flat).
- Search hits counted on the plot tiles' names ("Telemetry 20 of 20").
- A search typed at a flat system or star level that stays there (D44 jumps to the galaxy).

## 9. Risks and open questions (default the coder takes)

- The chip says 30 (galaxy stars) while the pane says 44 (things on these planes). Default: keep; the pane's sentence
  says what it counts.
- A query shorter than three characters loads no objects shard (`live-search.ts:66-68`), so the code plane shows no
  hit for it, as the flat galaxy shows no object star. Default: accept.
- `hashScope` stays set if the hashed query never produces a search (under two characters, no index): the next typed
  first search then keeps the scope. Default: accept; it clears on the next `setSearch`.
- A core sample with a search on is decided by the sample (hits only keep their ring): a sample of a non-hit still
  shows its counterparts at full strength. Default: as specified; the reader asked for it by clicking.
- "posting" lights 164 objects on Finance's code plane; with rings that is busy but readable at zoom 1, and zoom (D99)
  spreads them. Default: accept.
- The index changes nightly, so section 1's numbers are a snapshot. Default: re-run the script; the checks of section 7
  compare against its output, not against these numbers.
- Issue #14 was created for this spec on 2026-10-19, without a label.
- The decision and milestone numbers were checked across origin and every worktree on 2026-10-19 (highest D99, M37).

## 10. Files

Changed: `site/src/scripts/live-search.ts`, `site/src/scripts/layers-core.ts`, `site/src/scripts/galaxy-core.ts`,
`site/src/scripts/galaxy.ts`, `site/src/components/Galaxy.astro`, `tests/unit/live-search.test.ts`,
`tests/unit/layers-core.test.ts`, `tests/unit/galaxy-core.test.ts`, `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`. New: none.

## 11. Definition of Done

- [x] Section 5 tests written first and seen failing (`tsc` errors for the missing exports and the missing `all`), then
      `npm run typecheck` and `npm test` green (637 tests: 636 pass, 0 fail, 1 skipped, the skip as on `main`).
- [x] `npm run site:build` passes on Node 22 (29,043 pages).
- [x] Section 7 checks 1 to 10 done and reported, with the chunk size difference and the numbers the script printed
      (section 12).
- [x] `git grep -n "lensSet" site/src/scripts/galaxy.ts` shows no new use inside `drawTilted`, `tiltPanel` or
      `renderPlaneTable` (the one added mention is the `Lens` comment).
- [x] D100 appended to docs/DECISIONS.md; PLAN M38 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/tilt-keeps-search.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6). (Built by hand, so this build edited the spec itself.)

## 12. Built, deviations (2026-10-19)

Built by hand (`/sdd-build`, manual session) on branch `build/tilt-keeps-search`: phase 1 in `ee08ee3fc8`, phase 2 in
`bb189a1259`, these ship-time edits in the commit after them.

**Built:** `SearchHits.all` (`live-search.ts`); `DIM_MISS`, `HitMask`, `hitMask`, `isHit`, `markHit` (`layers-core.ts`);
`searchLeaves` (`galaxy-core.ts`); in `galaxy.ts` `Lens.hits`, the cached `searchMask()`, rings and dimming in
`drawTilted` (non-star code hits drawn, tiles without a hit and lines without a hit end at 0.3), the plane names'
"N of M match", the filtered tilted pane (kicker, sentence, "Clear the search", "hits of all" headings, filtered lists,
coverage and country lists, plots by hits), the filtered list per plane, `hashScope` in `setSearch` and `fromHash`; the
"?" line in `Galaxy.astro`; the header comment.

**Red evidence:** before the code, `tsc` reported `TS2305` for `DIM_MISS`, `hitMask`, `isHit`, `markHit`
(`layers-core.test.ts`) and `TS2339 Property 'all' does not exist on type 'SearchHits'` (`live-search.test.ts`); the
runner failed `layers-core.test.ts` on the missing export and the two live-search tests. Phase 2: `TS2305` for
`searchLeaves`, and `galaxy-core.test.ts` failed to load.

**Verified:** `npm run typecheck` clean; `npm test` 637 tests, 636 pass, 0 fail, 1 skipped; `npm run site:build` on Node
22.23.1, 29,043 pages; `git diff --stat origin/main -- content data` empty. Section 7 in the built-in browser pane, the
built site served under `/waldo.BCObservatory/`, 1440 x 900 unless said:

1. "Telemetry" typed at the galaxy level, AL Development from the panel, Tilt: rings on media, hubs and code, the rest
   dimmed; the 20 Telemetry objects ringed in their tile, tiles without a hit dimmed; names `10 of 164 match`,
   `11 of 107 match`, `23 of 1768 match`, `0 of 13 match`; pane `"Telemetry" matches 44 of the 2052 things`, headings
   `10 of 164`, `11 of 107`, `23 of 1768`, `0 of 13`, `9 videos, 1 post`, `0 named by a Learn page`,
   `Namespace plots 4 of 124` (Telemetry `20 of 20 match` first), countries `No match for "Telemetry" on this plane.`
2. Media plate picked: 10 rows, kicker `system · tilted · media · "Telemetry"`, hash
   `#q=Telemetry&system=development&tilt=1&plane=media`; List per plane: 10 rows under
   `AL Development, media: 10 of 164 match "Telemetry"`.
3. A code hit (Codeunit 1350, not a star, opened from its pane row, the same `takeSample` as a canvas click): its core
   sample opens; the other hits keep their rings.
4. Reload of check 2's link: tilted, Media picked, the search on, 10 rows, the header field reads "Telemetry".
   `#q=Telemetry&system=development` fresh: AL Development flat (level 2) with the search on.
5. The chip's ×: still tilted, Media still picked, 60 rows and "and 104 more" (a pick lists up to 60, D99), names back
   to `164 videos and posts`, `q` gone from the hash. One DOM read right after the click found no plane names; the next
   frame had all four; no console error.
6. Finance tilted with no search, "posting" typed: stays tilted; media `26 of 52`, hubs `14 of 57`, code `164 of 2279`,
   countries `6 of 20`, plots `34 of 126`, `18 videos, 8 posts`, `210 of the 2408 things`. Field cleared (still tilted,
   unfiltered) and "Telemetry" typed: still tilted on Finance, code `2 of 2279`.
7. Finance, "posting": country BE lists `Replaced by BE 5` (5 rows; BE replaces 26 objects, 5 of them hits); the coverage
   lens lists `No Learn page names them 133` (60 rows, "and 73 more"); both counts match the data.
8. 390 wide, `#q=Telemetry&system=development`, Planes: `AL Development, code: 23 of 1768 match "Telemetry"`, 23 rows,
   no horizontal scroll.
9. Flat levels: the search panel (kicker "search"), rings on the stars and the chip's `"Telemetry" 30` as before
   (checks 1 and 4).
10. The galaxy script chunk: 77,111 to 79,422 bytes (+2,311); gzipped (`gzip -c`) 26,371 to 27,276 (+905). The
    baseline was built from `cf23c6bfb4`'s `site/src` the same way.

| Spec | Measured |
|---|---|
| AL Development, "Telemetry": 10 / 11 / 23 / 0 hits, 44 of 2052 | the same, in the names and the pane |
| Finance, "posting": 26 / 14 / 164 / 6, plots 34 of 126 | the same |
| galaxy chunk size difference | +2,311 bytes, +905 gzipped |

**Deviations:**
- `hashScope` is set from the resolved star or system, not from the bare `system`/`star` keys (4.4): a link with an
  unknown system id still delivers its query instead of stranding it.
- `setSearch`'s staying branch calls `renderTable()` already in phase 1 (spec: phase 2), so a refined query refreshes
  an open list per plane; it also refreshes the flat list view, which a refined query left stale before.
- "N videos, M posts" uses the singular for one also without a search ("1 video").
- Section 7 check 5 said "164 rows": a picked plane lists up to 60 (D99); seen as 60 rows and "and 104 more".
- D99 reported the baseline chunk at 26,333 bytes gzipped; `gzip -c` gives 26,371 for the same 77,111-byte file. The
  difference above compares like with like.

**Operator steps still open:** none. Site only: live with the Pages build of the push to `main`, no derive.

## 13. Proposed edits to other files (applied 2026-10-19, see section 12)

- `docs/DECISIONS.md`: the D100 text of section 3, with the measured chunk size added.
- `docs/PLAN.md` section 5, before the `v0.2+` row:
  `| **M38 Search survives the tilt** | a search on stays lit on the tilted planes (every hit's id from the live search, hits ringed, the rest at 0.3, non-star hits drawn on the code plane); the tilted pane, a picked plane and the list per plane list only the hits ("10 of 164"); clearing keeps tilt, pick and zoom; a search typed while tilted stays tilted; \`#q=\` with \`system\` or \`star\` opens that scope (\`docs/specs/tilt-keeps-search.md\`, D100, proposed) | half a day plus one to two hours, two phases | none: site only, no LLM, no page or data change |`
- `docs/HANDOFF.md`, "Open specs, not yet implemented" (replacing "None open."):
  **Search survives the tilt, D100** (`docs/specs/tilt-keeps-search.md`, M38, issue #14). Status: proposed 2026-10-19,
  nothing implemented. A search stays lit when a system is tilted: every thing on the planes the search hits keeps
  full strength and an accent ring, the rest dims to 0.3; the tilted pane, a picked plane and the list per plane list
  only the hits; a search typed while tilted stays tilted; `#q=` with `system` or `star` opens that scope. Where to
  start: the failing tests of section 5 (phase 1 ships alone). Site only, no derive; live with the Pages build of each
  merge. Until it lands: tilting drops the search's highlight and filter while the chip stays on.
