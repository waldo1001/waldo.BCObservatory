# Galaxy views: one place, three views (D66, M8)

Status: implemented on `dev/next` (all five phases, 2026-10-07), not pushed. Section 9 records what was built and where it differs from sections 1 to 8. Design: `design/HANDOFF.views.md`, `HANDOFF.D-galaxy-honest.md`,
`HANDOFF.C-neighbourhood.md`, `HANDOFF.A-layered.md`, the three `tokens.<view>.json` and `design/canvas/*.dc.html`.
This spec says what the pipeline and the site will do per phase, what they will not do, and where the handoffs and
the code disagree. Numbers below are measured on the data at `c18ab4a8c` (BC30 relations, 2026-10-07) unless marked
"estimate".

Layout decision (waldo, closed): hubs on the Learn table-of-contents tree, objects in namespace plots, system order
along the spiral from cross-system edge weight; deterministic; every object of a system placeable.

## 0. What exists, and what each phase extends

| Exists | What it does today | Extended by |
|---|---|---|
| `pipeline/link/graph.ts` `buildGraph` | nodes and typed edges from page frontmatter (links, mentions); `weight` = degree + 0.5 per Learn page; `ev` = Learn + linked videos + posts on hubs, features, objects, localizations; `cs` = community share of `ev`; `cv` = `changed_in` of objects; `lit_at` = `published_at` / `ga_date` | phase 1 (fields below) |
| `graph.ts` `summaryNodes` | topics, features, localizations, sources in full; the 300 heaviest objects (`TOP_OBJECTS`). Today 1,036 nodes: 605 topics, 80 features, 22 localizations, 29 sources, 300 objects | unchanged |
| `graph.ts` `spiral` + `layout` | system centres on a two-arm spiral in taxonomy order, then 300 ticks of d3-force from hashed start positions. `LAYOUT = "spiral+d3-force@seed:42"` | replaced in phase 1 |
| `data/graph/summary.json` | 580 KB raw, 50 KB gzipped | phase 1 adds fields |
| `data/graph/ego/<id>.json` | one hop per summary node (1,036 files), read by the star panel and the page locator | unchanged |
| `data/code/relations/<major>.json` | every code edge (`table_relation`, `calc_formula`, `source_table`, `runs_on`, page props, `extends`) with `via` field, and every published event with resolved subscribers. BC30: 20,561 edges, 5,187 subscriptions, 8,521 objects. Keys equal object page keys (`table/18`), checked: 0 misses | phase 1 (cross edges), phase 3 (per-system files) |
| `site/src/lib/relations.ts` | build time: `rawNeighbours` (rings `relates`, `referenced`, `pages`, `extensions`, `subscribers`), `neighbourhood` (capped at 40), `layoutRadial`, `neighbourShard` | phase 3 |
| `/code/neighbours/<major>/<type>.json` (D59) | per object type, each object's 12 heaviest neighbours as `[key, ring, weight]`; read by the "Show 2 hops" toggle | replaced in phase 3 by per-system files (one mechanism, not two) |
| `Neighbourhood.astro` | 760 px radial SVG on every object page, built at build time, 2-hop toggle | grows into C in phase 3 |
| `site/src/scripts/atlas.ts` (D47) | `segments`, `buildTree`, `squarify`: a squarified namespace treemap, pure functions | moved to a shared module in phase 1 and used by both the pipeline layout and the atlas |
| `galaxy.ts` | levels, camera, lenses (type, tier, version from `cv`, localization, source, search), panel, `#system=`, `#star=`, `#lens=`, `#q=` deep links, pulse for `lit_at` within 7 days of the browser date | phase 2 |
| `data/code/timelines/<type>.json` | per W1 object: `versions`, `introduced`, `changed[]`, `obsoleted[]`, `removed` | phase 1 (obsolete flags) |
| `data/index/objects.json` | one row per object page: namespace, obsolete state, changed-in majors, Learn count, country count (321 KB gzipped) | phase 5 reads it at pipeline time, never in the browser |

## 1. Phase 1: pipeline for D

No LLM calls. Everything below is written by `renderGraph` from `content/` and `data/code/`.

### 1.1 Layout (`pipeline/link/graph.ts`, new `pipeline/link/galaxy-layout.ts`)

`LAYOUT = "learn-tree+ns-treemap@1"`. d3-force is no longer used by `graph.ts`. The package stays in `package.json`
only if something else imports it; otherwise it goes.

1. **System order.** System weight = code edges between objects of two systems (relations of the preferred major,
   today 7,479 cross-system edges over 114 pairs, heaviest `finance|sales` 440) plus summary edges whose ends sit in
   two systems. Greedy chain: start with the heaviest pair, then repeatedly append to either end the unplaced system
   with the highest weight to that end; ties by system id. `localization` and `sources` are excluded from the chain
   (localization touches every system through `localizes` and would always win the core) and go to the two arm ends.
   The chain index replaces taxonomy order in `spiral()`; the spiral formula itself is unchanged.
2. **System radius.** From content, not from the force result: `r = k * sqrt(hubs + objects in the system)`, clamped
   so neighbouring systems never overlap (the existing 0.45 x nearest-centre cap stays).
3. **Hubs.** A system's hubs form a forest from topic frontmatter `parent` / `children` (children are in TOC order:
   `toc.ts` walks the TOC in file order). Roots are hubs whose parent is outside the system. Two TOCs feed a system
   (`business-central/TOC.md`, `dev-itpro/TOC.md`): business-central first, then dev-itpro. Radial tree on the left
   200 degrees: depth = ring (4 rings, `HUB_MAX_DEPTH` is 4), leaf order = TOC order, each subtree gets an angle span
   in proportion to its leaf count.
4. **Objects.** Every object page of the system (not only the 300 stars; country-layer objects included, since one can
   be a star), grouped by namespace
   with the atlas's `segments()`. A squarified treemap of the namespace tree fills a sector on the right 160 degrees;
   inside a plot, objects sit on a grid ordered by code-relation degree, most connected nearest the system centre.
   The function returns positions for all objects; phase 1 writes only the stars' positions to the summary, and
   phase 5 writes the rest.
5. **Nodes that have no Learn tree position**: features (80), localizations (22), sources (29). Not in the handoff.
   Proposal: features on an outer arc of their system in roadmap id order; localization nodes on a ring of the
   Localizations system in country code order; sources keep their own system on a ring in id order. Any node type
   the layout does not know (D61 adds `change`) goes on that outer arc too, so a new type never breaks the layout.
6. **Plot rectangles** are written per system (`plots: [[namespace path, x, y, w, h, objects]]`) so the renderer can
   draw them and phase 5 can reuse them.

### 1.2 New summary fields (`schemas/graph.json`, version stays 1, all fields optional)

| Field | On | Content | Source |
|---|---|---|---|
| `x`, `y` | nodes | from 1.1 | layout |
| `systems[].ord` | systems | chain index | 1.1.1 |
| `systems[].plots` | systems | namespace plots as above | 1.1.6 |
| `systems[].tree` | systems | hub tree edges `[parent, child]` for the tree guides (ids are in `nodes`) | topic frontmatter |
| `sysedges` | root | top 2 cross-system pairs per system: `[a, b, weight]` | 1.1.1 |
| `cross` | star nodes | up to 6 target systems, heaviest first: `[system, count, kind, [[id, label], ...3]]`; kind = the most frequent relation kind; ids beyond 3 are only counted. `+n systems` is `crossMore: n` | objects: code relations; hubs: summary edges to other systems |
| `ev` | existing | now also counts videos and posts that name an object exactly (`mentions` edges), not only its own `links.videos` / `links.posts` | graph edges |
| `cv` | existing | unchanged: majors the object changed in | frontmatter `changed_in` |
| `ob` | objects | majors in which the object was marked obsolete | `data/code/timelines/<type>.json` `obsoleted` |
| `ec` | objects | number of published events (exit dock "Events" number) | relations |
| `mb` | hubs | media bodies: `{ n: total, top: [[id, "v" or "p", date], ...6] }`, newest first, ties by id | `links.videos` / `links.posts` plus `mentions` |

`data/graph/landed.json` (new, separate so the summary does not change every day): `{ anchor: "2026-10-07", items:
[[id, "v" or "p", date, [hub ids]]] }` for videos and posts with `published_at` in the 7 days up to `anchor`.
`anchor` is the run date passed to `renderGraph` (the nightly date); tests pass a fixed date. Today: 56 videos and 19
posts.

### 1.3 Sizes (estimates from today's data)

| File | Before | After |
|---|---|---|
| `summary.json` | 580 KB raw, 50 KB gz | measured after phase 1: 868 KB raw, 92 KB gz. `cross` on 567 stars (hubs too) 157 KB raw / 17 KB gz; `mb` 42 KB / 8 KB; plots 9 KB gz, trees 5 KB gz. The estimate of 75 KB had counted object stars only |
| `landed.json` | none | measured: 9 KB raw, 2 KB gz (75 items on 2026-10-07) |
| `ego/` | unchanged | unchanged |

### 1.4 Tests

- Schema: summary and landed validate (`schemas/graph.json`, new `schemas/landed.json`).
- Determinism: two runs on the same fixture write nothing the second time (the existing test, extended), and
  shuffling the input file order gives the same positions.
- Golden: a fixture system with a two-level hub tree, three namespaces and a cross edge; positions, plots, `cross`,
  `mb`, `ob` compared to a checked-in JSON.
- Unit: system chain on a weight table; tree angle spans; treemap reuse (`squarify` gives the same rectangles to the
  atlas and the layout).

### 1.5 Will not do in phase 1

- Positions for non-star objects in any shipped file (phase 5).
- Any renderer change: the current galaxy draws the new positions as they are, so phase 1 ships on its own.

## 2. Phase 2: D renderer

Canvas 2D and DOM, no new runtime library, no WebGL. `site/src/scripts/galaxy.ts`, `Galaxy.astro`, tokens.

- Background layers: tree guides (`systems[].tree`), namespace plots with mono labels.
- Focused star: solid edges inside the system, dashed cross-system edges to up to 6 **ports** (real `button`s pinned
  to the canvas edge in the direction of the target system); the same content as "Crosses into other systems" in the
  panel. A port flies to the target system; when the target object is a star, it focuses that star, otherwise it
  lands at system level with the object listed (and linked to its page) in the panel. See conflict 3.4.
- One **lens bar** replacing the `<select>`: "changed in BC29", "changed in BC30 (vNext)", "this week" first, then
  type, tier, localization, source (the last two keep a picker), "list view". The search lens stays as it is.
- **Exit dock** in the star panel, real links only. Objects: Neighbourhood (object page `#neighbourhood` until phase
  3, then C), Versions (`/code/versions/<pair>/`), Events (`/events/?q=<object name>`, number = `ec`), Country diff
  (`/localizations/<cc>/` for the first replacing country; number = country count), Atlas (`/objects/?ns=<namespace>`).
  Hubs: Open page, Coverage (`/coverage/`), Atlas for the system. Left out because no route exists: none of the
  above is missing, but "Country diff" per object is a per-country page, not a per-object diff.
- Shapes: circle hub, rounded square object, triangle video body, bar post body, hollow dashed square for obsolete
  under the version lens; accent frame for "changed in the lens version"; dashed teal community ring when `cs > 0`
  (today: solid ring when `cs >= 0.5`; the handoff changes the rule).
- Brightness from `ev` (unchanged formula shape, `sqrt`; the handoff's linear formula makes most hubs near-black at
  `maxEv`; I will compare both on real data and keep `sqrt` unless the linear one reads better).
- "This week": pulse from `landed.json` (anchor date, not the browser date), accent bodies, panel rows.
- **List view** of the focused system (sortable table: star, kind, connections, evidence, changed in) and the
  **390 px** layout: static locator strip, identity, exit chips, three lists.
- Keyboard: Tab through stars in list order, arrows to the nearest star in that direction, Enter focuses, Esc up.
  Reduced motion: cuts, static double ring.
- URL: existing `#system=`, `#star=`, `#lens=` stay; `#view=list` added.
- Tokens merged into `design/tokens.json` from `tokens.D-galaxy-honest.json`; `site/src/lib/tokens.ts` maps the new
  keys (`--g-edge-cross`, `--g-tree`, `--g-plot`, `--g-media`, `--g-media-new`, `--g-community`, `--g-version`,
  `--g-obsolete`, `--g-port-*`, `--ev-video-*`).

Will not do: country and source lens as planes (A), the 1024 px overlay variant beyond what the current panel
already does (it overlays below 720 px), any port fly that curves (straight camera fly).

## 3. Phase 3: C, the neighbourhood explorer

### 3.1 Data: per-system neighbour files (replaces the D59 type shards)

`/code/neighbours/<major>/<system>.json`, built at site build time by `site/src/lib/relations.ts` (as the shards are
today), from `data/code/relations/<major>.json`, `data/index/docs-objects.json` and the graph's mentions:

```
{ major, system,
  names: { key: [type, id, name, system] },          // every object referenced in this file
  objects: { key: {
      rings: { relates: [[key, kind, dir, via[]]], referenced: [...], pages: [...], extensions: [...], subscribers: [...] },
      totals: { relates: n, ... },                   // distinct neighbours per ring
      top: { relates: [7 keys], ... },               // the 7 shown per ring side
      events: [[name, kind, obsolete, [[subscriber key, procedure]]]],
      learn: [[url, title]], media: [[id, "v" or "p"]] } } }
```

Measured without `names`, `learn` and `media`: largest file 33 KB gz (inventory 305 KB raw), Finance 32 KB gz,
Development 31 KB gz, all 18 systems 232 KB gz together. With names, estimate up to about 45 KB gz per file. The
explorer loads one file for the centre; re-centring into another system loads that file (cached). The "2 hops"
toggle moves to these files and the type shards go, so there is one mechanism. Phase 5 reads the same files per
system.

Ordering of the top 7: most connected first (distinct relation count between the two), ties by key. See section 8.

### 3.2 Site

- `/neighbourhood/` explorer page: `?o=<page key>&mode=relations|events&v=<major>`. Rail (mode toggle, ring filters
  with counts, line-style legend, version select, "Show as list"), SVG picture (rings 160/260, direction divider,
  edges by kind, one expanded neighbour at a time, "+ n more" opens the ring as a list grouped by system), panel
  (tier and review badges, link cards `"Field" -> Target."Field"` from `via`, evidence chip to the source file, Re-centre,
  Open its page, trail, "Back to the galaxy" to `/#star=<id>` when the object is a star, else `/#system=<system>`).
- DOM order: rail, list (the full list is always in the DOM and the tab order), panel. The picture is a second view.
- 390 px: rings as accordion groups with counts.
- Object pages: the 130 px one-hop diagram in the side column under the locator, inline SVG at build time, no script,
  linking into the explorer. The existing 760 px Neighbourhood section stays on the page (it carries the markdown
  section anchors); it loses its 2-hop toggle in favour of a link into the explorer. To be confirmed: see 3.4.
- Focus and version carry over: galaxy panel exit -> `/neighbourhood/?o=...&v=<lens version>`; back -> `/#star=...`.

Will not do: starting C from a hub, video or source (not drawn); a markdown twin of its own (see 3.4).

## 4. Phase 4: home question entries

Superseded by D70: the questions are a menu in the header of every page, and the galaxy opens the home page.

A row of question links above the galaxy on `index.astro`, each a deep link with a lens preset:
`/#lens=landed` (this week), `/#lens=src:` + picker, `/#system=<id>&lens=version:30`, `/neighbourhood/?mode=relations`
(with the Ctrl+K palette open), `/neighbourhood/?mode=events`, country and coverage entries landing in D with the lens
on and the exit (localization page, `/coverage/`) in the panel, until phase 5. The hash format needs two keys at once
(`#system=finance&lens=version:30`): `fromHash` is extended for that.

## 5. Phase 5: A, Tilt at system level

Before any renderer code, as you asked:

1. `/graph/layers/<system>.json` for Finance only: every object `[key, x, y, learn n, hub ids, media n, countries,
   flags]`, hub and media nodes with their links. Measured skeleton without positions and hub ids: Finance 2,021
   objects, 78 KB raw, 7 KB gz; estimate with everything: 150 to 250 KB raw, 25 to 40 KB gz. Report raw and gz.
2. Finance tilted at real density behind `?tilt=1`, local URL or screenshot, then stop. If unreadable: propose the
   level-of-detail fallback (namespace plots as count tiles on the code plane, one plot opened at a time).
3. Only after your go: all systems, core sample, country lens, coverage lens, list per plane, 390 px tabs.

## 6. Conflicts between the handoffs and the code, and data the pipeline cannot derive

1. **Finance is not the largest system.** By object count, Development is (4,871 objects in 141 namespaces), because
   `objectSystem` sends every unmapped namespace there. Finance has 2,021 (64 namespaces), Integration 2,193.
   Finance is the largest domain system, so I will still build Finance first in phase 5, and also report Development
   as the worst case. D65 tranche 1 (`NS_SYSTEM` for first-party apps) will shrink Development and move objects
   between systems; every number here moves with it.
2. **Counts on the artboards are not today's counts.** "Stars stay at 1,018": the summary has 1,036. Table 18
   "41 / 170 / 32 / 4 / 11" and "258 links": BC30 has 398 edges touching Table 18, and its frontmatter says out 104,
   referenced by 260, pages 30, extended by 4, event subscribers 18 (edges, not distinct objects). The explorer will
   show what the pipeline computes, never the artboard numbers.
3. **Cross-system edge weight per system pair** does not exist today (handoff D section 8 asks). It is new and
   derivable: 7,479 code edges cross systems. For hubs there are no code edges; their cross edges come from page
   links (`relates`, `documents`, `localizes`) to stars in other systems, which is a different kind of fact. The
   ports say which kind.
4. **A port cannot always "focus the star at the far end".** Code relations mostly point at objects that are not
   among the 300 stars (Table 18 crosses into 14 systems with 179 objects). When the target is not a star, the port
   lands at the target system and the panel lists the object with a link to its page. Ports are capped at 6;
   Table 18 needs "+ 8 systems" in the panel.
5. **"Hub they mention most"** (media position): page links are yes or no, there is no mention count per hub. A body is
   drawn beside every hub that has it in its top 6.
6. **Obsolete per version** exists only for objects in `data/code/timelines/` (W1 types keyed by id); objects missing
   there get no `ob`, never a guessed one.
7. **"Landed in the last 7 days"** needs a date anchor to stay deterministic. The pipeline uses the run date; the
   browser no longer uses its own clock for the pulse.
8. **Features, localizations and sources have no Learn TOC position** (section 1.1.5). Placement proposed, not in the
   handoff.
9. **C's own URL and markdown twin**: a static per-object explorer page means 20,744 more pages. I propose one
   `/neighbourhood/` page with a query string; its machine-readable form is the per-system JSON, and the object page's
   markdown twin already lists every relation. That means the explorer has no markdown twin of its own. Your call.
10. **"16,425 neighbourhood files"** (C section 8): not needed; 18 per-system files per major replace them.
11. **Subscribers are first-party only** (5,187 subscriptions in W1 and apps). The explorer says so in one line.
12. **Video evidence chip colour**: the D tokens put video in the accent family, but `FILL` in `tokens.ts` already
    uses pink (`#F0A6CF`) for video chips since D64. Merging the token changes every existing video chip.
13. **Light theme**: all three addenda's light values are proposals never drawn. Already borderline on paper:
    `mediaBodyNew`, `versionFrame`, `eventNode`, `coreSample`, `noLineUpLens` at 4.5:1 (#A85F00). I will list what looks
    wrong after each phase.
14. **Parallel specs touching the same files**: D65 (discovery) edits `graph.ts` (topic -> object `documents` edges,
    `related.json` edges, `app` nodes) and `galaxy.ts` panel ordering; D61 adds `change` nodes to the graph; D60 owns
    the video and post templates. Whichever lands second rebases; the layout places unknown node types on the outer
    arc so D61 cannot break it.

## 7. Answers to the handoffs' open questions (section 8 of each)

**Views**
- D layout: decided (tree left, plots right).
- C own page or state: one `/neighbourhood/` page with query string (conflict 9). Needs your yes.
- Question entries: a row above the galaxy. Lens-bar presets are hidden on a phone; a row is not.

**D**
- Evidence for brightness: Learn + videos + posts naming the star. Code relations stay out: they already decide size.
- Namespace plots with the non-star objects: plot outline and count in phase 2, dots only in phase 5 when the
  positions ship anyway. Shipping 16k positions for decoration in phase 2 would add about 40 KB gz.
- Exit dock per star kind: section 2.

**C**
- Top 7: most connected first; same-system and changed-in-version as ring filters, not as ordering.
- Learn pages and media: the top arc as drawn; a ring of their own would mix facts from code and from docs.
- Subscribers first-party only: say so (conflict 11).
- 16,425 files: no (conflict 10).

**A** (answered properly after the Finance density test)
- 2,021 on one plane: unknown until rendered; fallback ready.
- Lines at rest: D stars only, as specified, so "no line" is never read as "no link" for the rest; the coverage lens
  draws absence.
- Country plane: collapsed "replaced in n countries" per object.
- Tilt state: always start flat; the URL remembers it for links.
- Events: C only.

## 8. Shipping per phase

Each phase: `npm run typecheck`, `npm test`, `npm run validate:content`, `npm run site:build`, exit codes checked;
graph and code stages only, no nightly, no LLM calls; generated `data/` and `content/` not committed; small commits
(`pipeline:`, `feat:`, `docs:`), not pushed; a phase report with JSON sizes before and after, raw and gzipped.

## 9. Outcome (2026-10-07)

Sizes measured on the built site with the regenerated graph (gzip -9):

| File | Raw | Gzipped | Loaded |
|---|---|---|---|
| `graph/summary.json` | 899 KB (was 580) | 97 KB (was 50) | home page, every page's locator |
| `graph/landed.json` | 14 KB | 4 KB | with the galaxy |
| `graph/layers/finance.json` | 98 KB | 19 KB | on Tilt only |
| `graph/layers/development.json` (largest) | 220 KB | 41 KB | on Tilt only; all systems 164 KB gz |
| `code/neighbours/30/finance.json` | 781 KB | 95 KB | explorer, one system at a time |
| `code/neighbours/30/development.json` (largest) | 902 KB | 109 KB | explorer; all systems 661 KB gz, `index.json` 27 KB gz |
| galaxy script | 61 KB | 21 KB | home page |

Differences against sections 1 to 8:

- Phase 1: country-layer objects are placed in plots too (one can be a star); `landed.json` items carry the title;
  stars also carry `ns` (atlas path) and `nn` (distinct code neighbours, the exit dock's Neighbourhood number). The
  atlas treemap had a sizing bug (rows after the first got too little area); fixed in the shared module.
- Phase 2: edges from a focused star into another system are not drawn as lines across the galaxy: the ports and the
  panel carry them. Object stars are capped at their plot cell so they never overlap. Version lenses come from
  `changed_in` only. The evidence chip of kind video was not recoloured (conflict 12): the accent proposal is open.
- Phase 3: per-system files are 95 to 109 KB gz for the largest systems, over the 45 KB estimate: the names table and
  the full rings are what the explorer needs, and one view loads one file. Events without subscribers are a count
  (`quiet`), media rows carry a title, empty rings are left out. Events mode puts events left and the selected event's
  subscribers right (the drawn fan clipped). The explorer page is 1520 px wide. No markdown twin of its own (conflict
  9). Not built: the evidence chip to the source file (the files carry no paths), the 900 ms re-centre slide (a cut).
- Phase 4: the eight entries are a row above the galaxy; country and coverage land in D with the lens (A's panel
  carries both too once tilted).
- Phase 5: at Finance's real density (2,021 objects) the code plane was a smear, so the level-of-detail fallback of
  HANDOFF A section 8 is what shipped: the code plane is one tile per namespace plot (fill = share named by a Learn
  page, coverage lens = share not named), the stars on top, one plot opened at a time (click, or the panel's plot
  list). Planes are normalised to the system's extent, not its radius. Tilt is offered only when the graph carries
  plots (an older graph has no layers files). Finance replaces 173 objects in 20 countries, not the artboard's 586.

Light theme, never drawn by the designer, checked in screenshots: workable. Borderline or open: the 4.5:1 accent
values (`#A85F00`) for the version frame, new media and the core sample; the explorer's selected node fills the same
`#131722` as its centre; `--nb-direction` and the port colours have no light token (stand-ins in `tokens.ts`).
