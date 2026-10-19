---
issue: 10
status: implemented
---

# Tilt is a button, a plane you click filters the panel, and the tilted view zooms

Status: implemented, 2026-10-19 (section 12 records what was built and where it differs). Decision: D99 (appended
2026-10-19). Milestone: M37. Owner: waldo.
Scope: the galaxy's tilted state on the site: the Tilt control and the plane labels (`site/src/components/Galaxy.astro`),
the tilted drawing, pointer, pane, hash and Esc (`site/src/scripts/galaxy.ts`), the pure helpers
(`site/src/scripts/layers-core.ts`, `site/src/scripts/galaxy-core.ts`) and their tests. Every claim below was verified
against the tree at `a781b39e25` (`origin/main`, nightly of 2026-10-19; the galaxy code is unchanged since
`87958e0032`); the numbers were measured on that commit's `data/graph/` with the command in section 1. Not in scope:
the flat galaxy, the phone's Planes button and the list per plane's layout, the layers file (`pipeline/link/graph.ts`),
anything under `content/` or `data/`, keys 1 to 4 (section 8).

## 1. Goal

waldo, 2026-10-18, with a screenshot of AL Development tilted: Tilt "doesn't have to be a slider", an on/off button,
"obviously keep the animation"; a click on a plane's box or its name (Media, Topic hubs, Code, Countries) filters the
right pane to that plane and a second click unfilters, "more like highlighting", not collapsing; and "would be nice to
also be able to zoom the tilted view".

| What is wrong today | Evidence |
|---|---|
| Tilt is a range 0 to 100 inside a label (`Galaxy.astro:41`) that follows the hand while dragged and snaps to flat or tilted on release (`galaxy.ts:1277-1283`); a half tilt means nothing and is never kept. A phone already gets an on/off button, Planes (`Galaxy.astro:42`, `galaxy.ts:1284`) | read |
| A plane's name folds its plane to a 24 px strip (`galaxy.ts:687`, title "Fold this plane" at `:691`; `layers-core.ts:25-39`); the country lens folds media and hubs, the coverage lens media and countries (`galaxy.ts:1158`, `:1162`; `design/HANDOFF.A-layered.md:48`, `:72`) | read |
| The tilted pane has no part per plane to filter: four count lines, the lens controls, the lens list and up to 40 namespace plots (`galaxy.ts:1027-1039`). Only a core sample is laid out by plane (`:1015-1022`) | read |
| Zoom does nothing at full tilt. Every spot is `lerp(flat spot, plane spot, tilt)` (`galaxy.ts:536`), so at tilt 1 the camera has no weight; plates and plot tiles come from `planeGeometry` over the canvas area (`:532`, `:559-563`, `:611`). `zoomBy` moves only the flat camera (`:1285-1291`) and a drag returns early while tilted (`:1334`). The −, + buttons, wheel, pinch and the +/− keys stay live and change nothing you can see | read |
| The tilted view is crowded where zoom would help: AL Development puts 164 videos and posts on one plate and 124 namespace plots on the code plane, and a plot shows its name only when its tile is wider than 46 px (`galaxy.ts:626`) | measured, table below |
| Bug: a core sample's media rows show ids, not titles. Seen on the live site on 2026-10-18 (AL Development, tilted, hub "Developing client add-ins": 5 of its 6 media rows read like `post/aardvarklabs-blog/3680`). `mediaRow` takes its title from `byId.get(id)?.label ?? mediaTitle.get(id) ?? id` (`galaxy.ts:924`); no media item is a node of `summary.json` (818 of 818 across the 20 layers files) and `mediaTitle` holds only this week's items and the ego nodes of an opened star (`:946`, `:1114`). The layers file carries every title (`media[i][3]`, 818 of 818); the core sample does not pass it (`:1018`) | measured, live site |

Planes per system on `a781b39e25` (plots from `summary.json`, the rest from `data/graph/layers/<system>.json`):

| System | Media | Hubs | Objects (named by Learn) | Countries (objects replaced) | Plots | Stars |
|---|---|---|---|---|---|---|
| development (AL Development) | 164 | 107 | 1,768 (221) | 13 (22) | 124 | 6 |
| finance | 52 | 57 | 2,279 (529) | 20 (173) | 126 | 71 |
| platform | 82 | 125 | 1,361 (122) | 19 (43) | 52 | 21 |
| copilot | 125 | 42 | 761 (74) | 0 | 10 | 17 |
| localization | 4 | 77 | 0 | 0 | 0 | 0 |
| assembly | 1 | 3 | 74 (39) | 0 | 7 | 1 |

```bash
node -e 'const cp=require("child_process"),sh=c=>cp.execSync(c,{maxBuffer:2e8}).toString();
const s=JSON.parse(sh("git show origin/main:data/graph/summary.json")),sys=new Map(s.systems.map(x=>[x.id,x]));
for(const p of sh("git ls-tree --name-only origin/main data/graph/layers/").trim().split("\n")){const L=JSON.parse(sh("git show origin/main:"+p));
console.log(L.system,L.media.length,L.hubs.length,L.objects.length,L.objects.filter(o=>o[3]>0).length,Object.keys(L.countries).length,L.objects.filter(o=>o[6]).length,(sys.get(L.system)?.plots||[]).length,L.objects.filter(o=>o[7]&1).length)}'
```

After this change:
- Tilt is one button in the view group, pressed while tilted; the 600 ms slide stays.
- A click on a plane's plate, its name, or its heading in the pane picks that plane: its plate is outlined in the
  accent, the other three dim, the pane lists only that plane. The same click again shows all four.
- The tilted pane is four plane sections (media, topic hubs, code, countries) with their top rows, the layout a core
  sample already uses.
- No plane folds, ever. The country and coverage lenses dim the two planes they do not use.
- Wheel, pinch, the −/+ buttons and keys zoom the tilted view; a drag pans it once zoomed.
- Media rows in a core sample show their titles.

## 2. Reader-facing behaviour, after

### 2.1 The Tilt button

- `<button type="button" class="g-btn" data-g-tilt aria-pressed="false" aria-describedby="g-tilt-help">Tilt</button>`
  where the range was, shown when it was (system level, a system with plots, wider than 480 px). Pressed (accent, the
  D92 `.g-btn[aria-pressed="true"]` look, `Galaxy.astro:165`) while tilted or sliding towards tilted.
- A click tilts or flattens with the existing 600 ms slide (`galaxy.ts:286-291`); a click during the slide reverses it
  from where it is. Reduced motion and widths up to 480 px cut, as today (`galaxy.ts:717`). T still toggles, Esc still
  flattens last. The help text (`Galaxy.astro:43`) stays.
- Phones keep the Planes button unchanged.

### 2.2 Picking a plane

- **Where:** a click on a plate anywhere that is not a thing (core sample) or a code-plane tile (opens a plot); a click
  on the plane's name left of the plate; a click on the plane's heading in the pane. Tab and Enter reach the names and
  headings (they are buttons).
- **Toggle:** the click picks that plane; the same click on the picked plane shows all four again. A click on another
  plane moves the pick. With a core sample open, a plate or name click closes the sample and picks that plane (it
  never unpicks), so "Media" from a sample leads to the media list. A click outside every plate: closes a core sample
  if one is open, else flattens (today's background click).
- **Canvas:** the picked plate gets a 1.5 px accent outline and its name the pressed look (accent text, border and
  surface). The other three planes draw their plates, things and plot tiles at 0.4 of their alpha, and their names at
  opacity 0.6. A line between planes keeps full strength when either end is on the picked plane, else 0.4. A core
  sample's own dimming (0.3, `galaxy.ts:573`) multiplies on top.
- **Pane:** only the picked plane's section, with up to 60 rows (section 2.3).
- **URL:** `#system=development&tilt=1&plane=media`; opening that link tilts and picks. Unpicked: no `plane`.
- **Esc:** list view, then core sample, then the pick, then flatten (one step per press).
- **List per plane** (button in the pane) opens on the picked plane's tab. The pick is reset by flatten, by leaving
  the system and by tilting another system.

### 2.3 The tilted pane: four plane sections

Unpicked, top to bottom:

```
system · tilted
AL Development
Lines at rest are the stars' only: a missing line on any other object means "not drawn", not "no link". Click a plane
or its name to list only that plane; click it again for all four.

MEDIA 164                       (heading button)
58 videos, 106 posts            (meta; v and p counted from the layers file)
  8 rows, then "and 156 more in the list per plane"
TOPIC HUBS 107
  8 rows ...
CODE 1768
221 named by a Learn page
  [no Learn page]               (the coverage lens toggle, today's control)
  8 rows ...  (with the lens on: today's "No Learn page names them N" list in their place)
  Namespace plots 124           (today's plot rows; 12 here)
COUNTRIES 13
replace 22 of the code plane's objects
  Country [none ▾]              (today's country lens select)
  8 rows ...  (with a country chosen: today's "Replaced by BE N" list and country diff button in their place)

[List per plane] [Flatten]
```

- Picked: the kicker reads `system · tilted · media` (`PLANE_LABEL`), the meta line reads `Only media. Click the plane,
  its name or this heading again for all four.`, and only that section shows, with up to 60 rows (code: up to 60
  objects and every plot).
- Heading: `<h3><button type="button" class="g-planehead" data-pick="media" aria-pressed="false">Media <span class="g-n">164</span></button></h3>`,
  title "List only this plane" / "List every plane". Pressed in the accent.
- Rows are the plane's things in the list per plane's order (today's sort, `galaxy.ts:1047`, moved to `planeOrder`),
  and a click on any row opens its core sample (as `thingBtn` rows do today):
  - media: the D73 row (shape, title over the full width, then `[video|post] · source`), as a button; the title from
    the layers file;
  - topic hubs: the hub's title, small `<n> objects · <m> media`;
  - code: the object's title (`objectTitle`), small `star` or `<n> Learn`;
  - countries: the country code, small `replaces <n>`, the localization dot.
- "and N more in the list per plane" is a link-style button that opens the list per plane on that tab.
- An empty plane keeps its section with `None in this system.` (localization has no objects; copilot no countries).
- A core sample's pane is unchanged except media titles (section 2.6); "Back to the planes" returns to the pane as it
  was, pick included.

### 2.4 Lenses dim, nothing folds

- The country lens leaves code and countries at full strength and dims media and hubs to 0.4; the coverage lens leaves
  hubs and code and dims media and countries. Their other effects (marks, lines, rows) are unchanged.
- A pick wins: with a lens on and a plane picked, only the picked plane is at full strength.
- All four planes always keep full size; nothing is a 24 px strip.

### 2.5 Zooming the tilted view

- Wheel and pinch zoom around the pointer; the −/+ buttons and the +/− keys zoom around the centre of the planes area;
  from 1 (the whole picture, as today) to 8, by the same steps as flat (×1.5 per button or key).
- Zoom spreads positions; marks keep their pixel size, so crowded triangles and dots come apart. Plot names appear as
  tiles grow past 46 px, as they do now by width.
- Once zoomed, a drag pans. The planes' area always stays filled (no panning past the edges). At zoom 1 a drag does
  nothing, as today.
- Plane names follow their plate's left edge, clamped inside the canvas, and hide while their plate is out of view.
  Drawing is clipped to the planes area (under the bar, left of an open panel).
- Zoom resets to 1 when the view flattens or tilts. It is not in the URL (flat zoom is not either).

### 2.6 Media titles in a core sample

`mediaRow` takes the title from the layers file: the hub "Developing client add-ins" core sample lists six titled
rows instead of five ids.

## 3. Decisions

**D99 draft text** (appended at ship time):

- **D99 Tilt is a button; a picked plane filters the pane; the tilted view zooms (2026-10-19, M37).** The tilt range
  snapped to flat or tilted on release, so it was an on/off control dressed as a slider: it is one `Tilt` button,
  pressed while tilted, with the 600 ms slide kept. A click on a plane's plate, its name or its pane heading picks
  that plane: accent outline, the other three planes at 0.4, the pane listing only that plane; the same click shows
  all four. The tilted pane is four plane sections in plane order, eight rows each (60 when picked), the core sample's
  layout. No plane folds any more: the country and coverage lenses dim the planes they do not use, and a pick wins over
  a lens. The tilted view zooms (1 to 8, around the pointer, marks at fixed size) and pans once zoomed, because at full
  tilt the flat camera had no weight and zoom did nothing. Media rows take their title from the layers file (no media
  item is a summary node). Amends `design/HANDOFF.A-layered.md` (the tilt range, folded planes). Rejected: keeping
  the range (half tilts mean nothing); folding on a name click (the owner asked for a highlight); lenses that keep
  folding (one rule, dim, for picks and lenses); today's pane plus a list on pick (the unpicked pane would have no
  media part to filter); a pick that zooms the camera to its plane (zoom stays the reader's); scaling marks with the
  zoom (crowded marks stay crowded); zoom in the URL. Spec: `docs/specs/galaxy-tilt-planes.md`.

## 4. Contract

### 4.1 `site/src/scripts/layers-core.ts`

```ts
/** No folding (D99): four planes of equal depth. */
export interface Plane { id: PlaneId; top: number; depth: number; left: number; width: number }
export function planeGeometry(area: { x0: number; y0: number; x1: number; y1: number }): Plane[]; // folded parameter removed

/** D99: the alpha factor of a plane that is not at full strength. */
export const DIM_PLANE = 0.4;
/** Planes at full strength: the picked one; else the lens's two (country: code, countries; coverage: hubs, code); else all four. */
export function fullPlanes(picked: PlaneId | null, lens: "country" | "coverage" | null): Set<PlaneId>;

/** The list per plane's order (was galaxy.ts:1047): code stars first, then the sum of the other planes' counts, then label. */
export function planeOrder(rows: PlaneRow[], plane: PlaneId, label: (r: PlaneRow) => string): PlaneRow[];

/** The tilted view's zoom: screen p -> (x + p.x * s, y + p.y * s). */
export interface Zoom { s: number; x: number; y: number }
export const ZOOM_1: Zoom = { s: 1, x: 0, y: 0 };
export const ZOOM_MAX = 8;
export const applyZoom: (z: Zoom, p: { x: number; y: number }) => { x: number; y: number };
/** Zoom by k keeping screen point (sx, sy) fixed; s clamped to [1, ZOOM_MAX]; s 1 is ZOOM_1; then clampZoom. */
export function zoomAt(z: Zoom, k: number, sx: number, sy: number, box: Box): Zoom;
/** Pan by a screen delta, then clampZoom. */
export function panBy(z: Zoom, dx: number, dy: number, box: Box): Zoom;
/** The zoomed box always covers the box (x + box.x0 * s <= box.x0 and x + box.x1 * s >= box.x1; same for y). */
export function clampZoom(z: Zoom, box: Box): Zoom;
/** Which plate a screen point is on (inQuad over the zoomed corners), or null. */
export function plateAt(planes: Plane[], x: number, y: number, z?: Zoom): PlaneId | null;
```

`Box` is `{ x0, y0, x1, y1 }`: the bounding box of the four plates' corners at zoom 1.

### 4.2 `site/src/scripts/galaxy-core.ts`

`parseHash` accepts `plane` (`:16`). Example: `parseHash("#system=development&tilt=1&plane=media")` ->
`Map { system => development, tilt => 1, plane => media }`.

### 4.3 `site/src/scripts/galaxy.ts`

- State: `picked: PlaneId | null`, `tz: Zoom`, `planeRowsCache: Map<PlaneId, PlaneRow[]>` (cleared when a layers file
  loads, `:712`); `folded` is gone (`:245` and every use: `:532`, `:561`, `:574`, `:587`, `:597`, `:599`, `:609`,
  `:633`, `:648`, `:652`, `:660`, `:687`, `:691`, `:712`, `:1158`, `:1162`, `:1228`).
- `tiltBtn` replaces `tiltWrap` and `tiltInput` (`:105-106`, `:289`, `:711`, `:717`, `:1210`, `:1213`, `:1278-1283`);
  `tiltTo = () => tiltAnim?.to ?? tilt` drives `aria-pressed`; click: `setTilt(tiltTo() > 0 ? 0 : 1)`.
- `pickPlane(id: PlaneId | null)`: sets `picked` (and `planeTab` when not null), closes a core sample, then
  `renderPanel(); redraw(); setHash()`.
- `drawTilted`: alpha factor `full.has(plane) ? 1 : DIM_PLANE` with `full = fullPlanes(picked, tiltLens?.kind ?? null)`
  on plates, things, tiles and lines (a line uses the larger of its two ends); the picked plate's stroke is the accent at
  1.5 px, a lens plane's stays `plane.active` (`:561`). Every screen point from `spotOf`, `corners`, the tiles (`:611`) and
  the core sample line (`:660`, now first plane to last) goes through `applyZoom(tz, ·)` before the lerp:
  `lerp(toScreen(x, y), applyZoom(tz, project(...)), tilt)`. `ctx.clip()` to the planes area while tilted.
- `placePlaneLabels`: `aria-pressed = picked === id`, class `dim` when the plane is not full, click `pickPlane(picked === id ? null : id)`,
  position from the zoomed corners, clamped, hidden off view.
- Pointer: the canvas click order is thing, tile, sample-close, plate (`plateAt`), flatten (`:1353-1359`); hover sets
  the pointer cursor over a plate too (`:1338`). `zoomBy` (`:1285`) zooms `tz` with `zoomAt` when `tilted()`; pinch keeps
  its start scale from `tz.s` when tilted (`:1320`, `:1327`); a drag pans `tz` with `panBy` when tilted (replaces the
  return at `:1334`). `setTilt` and `flatten` reset `tz = ZOOM_1` and `picked = null`.
- `tiltPanel()` (`:1002-1040`) without a sample: the four sections of 2.3 from `planeOrder(planeRows(...))`, cached.
  `mediaRow(id, kind, date, source, title?, thing?)`: `title` wins over the fallbacks; with `thing` the row is a
  `<button class="g-media" data-thing=...>` instead of a link. The core sample passes `f.media[i][3]` (`:1018`).
- `setHash` adds `plane=<id>` when tilted and picked (`:1223`); `fromHash` picks it after `setTilt(1, true)` resolves
  (`:1436`). Esc (`:1385-1392`): list view, sample, pick, flatten.

### 4.4 `site/src/components/Galaxy.astro`

The button (`:41`); remove `.g-tilt` rules (`:169-171`, keep `.g-bar :global([hidden])` from `:172`); plane names:
drop the `[aria-pressed="false"]` border (`:180`), add pressed (accent) and `.dim` (opacity .6); `.g-planehead`
(inherits the h3 look, pressed in the accent); widen `.g-list a.g-media` to `.g-list .g-media` (`:225-229`, `:241`);
one more line in the "?" sheet: "Click a plane or its name to list only that plane; click again for all four. Wheel,
pinch or −/+ zoom a tilted system." Header comments (`:7-9`, `galaxy.ts:20-22`) say button, pick and zoom.

## 5. Test plan (write first)

`tests/unit/layers-core.test.ts` (fixture `f` at `:5-15`):
1. Replace `:17-24`: `planeGeometry` gives four planes, media to countries, top to bottom, all of equal depth; the
   function has no fold parameter.
2. `fullPlanes(null, null)` = all four; `fullPlanes("media", null)` = {media}; `fullPlanes(null, "country")` =
   {code, countries}; `fullPlanes(null, "coverage")` = {hubs, code}; `fullPlanes("media", "country")` = {media}.
3. `planeOrder` on `planeRows(f, "code", id => id)`: `table/17` (star) first; on countries: `be` (2) before `nl` (1);
   the same order the list per plane showed before (copy of the old sort).
4. `plateAt`: the centre of the hubs plate -> `"hubs"`; a point left of every plate -> `null`; with
   `zoomAt(ZOOM_1, 2, cx, cy, box)` around that centre, the same point -> `"hubs"`.
5. `zoomAt(ZOOM_1, 2, 50, 50, {0,0,100,100})` -> `{ s: 2, x: -50, y: -50 }`; zooming that by 0.5 -> `ZOOM_1`; by 100
   -> `s === 8`; `zoomAt(ZOOM_1, 0.5, ...)` -> `ZOOM_1`.
6. `panBy({ s: 2, x: -50, y: -50 }, 80, 0, box)` -> `x === 0` (clamped); `panBy(..., -80, 0, box)` -> `x === -100`.
7. `applyZoom({ s: 2, x: -50, y: -50 }, { x: 50, y: 50 })` -> `{ x: 50, y: 50 }` (the anchor stays put).

`tests/unit/galaxy-core.test.ts`: `parseHash("#system=development&tilt=1&plane=media")` keeps all three keys; the
`#evil=1` case (`:8`) stays.

The DOM and canvas parts have no unit tests in this repository (only the pure modules do); section 7 checks them in a
browser.

## 6. Tasks

Three phases; each ships alone. Site only: no page under `content/`, no file under `data/` or `pipeline/`, so no derive
and no content commit; each is live with the Pages build of its merge.

**Phase 1: Tilt button and media titles** (an hour)
1. `Galaxy.astro:41` button; CSS of 4.4 for `.g-tilt`; `galaxy.ts` `tiltBtn`, `tiltTo`, remove the `tiltInput` lines.
2. `mediaRow` `title` parameter; the core sample passes `f.media[i][3]`.

**Phase 2: plane pick, four sections, no folding** (half a day)
3. Tests 1 to 4 and the `parseHash` test, failing.
4. `layers-core.ts`: drop `folded`; add `DIM_PLANE`, `fullPlanes`, `planeOrder`, `plateAt` (without zoom yet).
5. `galaxy.ts`: remove `folded`; `picked`, `pickPlane`; dimming in `drawTilted`; names; canvas click and hover; the
   four-section pane with the row cache; `renderPlaneTable` uses `planeOrder`; List per plane on the picked tab; hash;
   Esc; resets.
6. `Galaxy.astro` CSS for names, headings, media buttons; the "?" line.

**Phase 3: zoom and pan the tilted view** (half a day)
7. Tests 5 to 7, failing; then `Zoom`, `ZOOM_1`, `ZOOM_MAX`, `applyZoom`, `zoomAt`, `panBy`, `clampZoom`, `plateAt`
   with zoom.
8. `galaxy.ts`: `tz` through every tilted point, the clip, `zoomBy`, pinch, drag, label clamp, resets.
9. DECISIONS D99, PLAN M37 shipped, HANDOFF entry moved to "Where things stand", the note in
   `design/HANDOFF.A-layered.md` (section 12).

## 7. Verification

```bash
npm run typecheck && npm test
export PATH=/Users/waldo/.nvm/versions/node/v22.23.1/bin:$PATH   # Astro needs Node >= 22.12
npm run site:build
```

Serve `site/dist` under the base path (symlink it as `<scratch>/serve/waldo.BCObservatory`, `python3 -m http.server
4173` there) and open `http://localhost:4173/waldo.BCObservatory/#system=development&tilt=1` in the built-in browser
pane (or headless Playwright 1.63.0, which matches the cached chromium) at 1440 x 900 with the panel open, then
1024 and 760 wide:

1. Tilt shows as a button, pressed; a click flattens with the slide and unpresses at once; a click mid-slide reverses;
   T toggles; with reduced motion it cuts.
2. Click the media plate's empty area: accent outline, the other planes dimmed, the pane shows only "Media 164" with
   60 titled rows and "and 104 more in the list per plane"; the hash ends `&plane=media`. Click it again: four
   sections, `plane` gone. Same through the name "MEDIA" and through the pane heading; Tab reaches both.
3. Click a hub (core sample), then the "MEDIA" name: the sample closes and media is picked. Esc steps: pick, then
   flatten.
4. Country lens BE (or NL) on a system with countries: no plane shrinks; media and hubs dimmed; pick Media: media full,
   the rest dimmed.
5. Open the link with `&plane=countries`: tilted, countries picked.
6. Wheel over the code plane: the plates grow around the pointer, marks stay the same size, plot names appear; drag
   pans, never past the edges; − back to 1 restores today's picture; flatten and re-tilt start at 1; nothing draws
   over the bar or under the panel.
7. A hub core sample's media rows show titles.
8. 390 wide: Planes button unchanged; the pane's headings pick and unpick.
9. Galaxy script chunk before and after (`ls -l site/dist/_astro/*.js` gzipped): report the difference.

## 8. Later, not in this spec

- Keys 1 to 4 pick a plane (proposed in `design/HANDOFF.A-layered.md` section 6).
- Level of detail by zoom: every object of the plots in view once zoomed past about 3.
- Tilt and Planes as one control on every width.
- Zoom remembered when flattening and tilting again.

## 9. Risks and open questions (default the coder takes)

- A click on an empty plate used to flatten (`design/HANDOFF.A-layered.md` section 5, layer 1); now only a click
  outside every plate does. Default: accept; Tilt, T and Esc flatten.
- On the code plane the tiles take most of the plate in big systems, so a click there opens a plot rather than picking
  Code. Default: keep (tile first); the Code name and heading pick it.
- `planeRows` builds a core sample per media item and hub: up to 125 hubs x 1,361 objects (platform). Default: cache
  per layers file; check that a pane render stays under 16 ms in the browser's performance panel.
- Zoom maximum 8 and dim factor 0.4 are by eye. Default: these values; change them in one constant each.
- A lens list (no Learn page, Replaced by BE) lives in its plane's section and hides when another plane is picked; the
  lens stays on. Default: as specified.
- The decision and milestone numbers were checked across origin and every worktree on 2026-10-19 (highest D98, M36).

## 10. Files

Changed: `site/src/components/Galaxy.astro`, `site/src/scripts/galaxy.ts`, `site/src/scripts/layers-core.ts`,
`site/src/scripts/galaxy-core.ts`, `tests/unit/layers-core.test.ts`, `tests/unit/galaxy-core.test.ts`,
`docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, `design/HANDOFF.A-layered.md` (one note). New: none.

## 11. Definition of Done

- [x] Section 5 tests written first (red: `tsc` errors for the missing exports), then typecheck green. `npm test`
      green on the final head: 630 passed, 0 failed (the League's own run and the review of PR #12, 2026-10-19).
- [x] `npm run site:build` passes on Node 22 (29,043 pages; review of PR #12, 2026-10-19).
- [x] Section 7 checks 1 to 9 done and reported, with the chunk size difference (review of PR #12, 2026-10-19; see
      section 12).
- [x] No `folded`, `tiltInput` or `.g-tilt` left (the two `folded` hits are comments: `versions.ts:65` and the code
      groups' comment now at `galaxy.ts:963`; `g-tiltlens` and `g-tilt-help` stay).
- [x] D99 appended to `docs/DECISIONS.md`; PLAN M37 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; frontmatter `status: implemented` and the body `Status: implemented`; section 12 inserted as
      "Built, deviations" and this section kept as 13, marked applied.

## 12. Built, deviations (2026-10-19)

Built by the League in one pass (all three phases together, uncommitted for the operator to checkpoint).

**Built:** the Tilt button, `pickPlane`, the four-section pane, no folding, lens dimming, the zoom and pan of the
tilted view, the `plane` hash key, media titles in core samples, the CSS and the "?" line, as sections 4 and 6 say.
Pure helpers (`planeGeometry` without folds, `DIM_PLANE`, `fullPlanes`, `planeOrder`, `Zoom`, `applyZoom`, `zoomAt`,
`panBy`, `clampZoom`, `plateAt`) are in `layers-core.ts`; `parseHash` accepts `plane`.

**Verified (League build):** `npm run typecheck` green. Red evidence: before the code, `tsc` failed with "Module layers-core.js has no
exported member 'applyZoom' / 'DIM_PLANE' / 'fullPlanes' / 'panBy' / 'planeOrder' / 'plateAt' / 'ZOOM_1' / 'ZOOM_MAX' /
'zoomAt'". `npm test` printed more than the tool shows and ended with exit 1; narrowing the run was not possible with
the commands allowed (the runner ignores extra flags), so which test fails, if one does beyond the League's own
measured run, is not known to this build. The new tests were checked by hand against the code.

**Verified (review of PR #12, 2026-10-19, head `3f8c4efb`):** `npm run typecheck` clean; `npm test` 631 tests, 630
pass, 0 fail, 1 skipped (the skip is on `main` too); the exit 1 above did not reproduce. Red confirmed: on the red
checkpoint `f9bcae82`, `tsc` reports exactly the nine missing exports listed above. `npm run site:build` on Node
22.23.1: 29,043 pages. Section 7 in the built-in browser, the built site served under `/waldo.BCObservatory/`:

1. Tilt is a button, `aria-pressed="true"`; a click unpresses at once and the canvas slides; a click mid-slide presses
   it again and the slide reverses; T toggles (with focus in the galaxy, as on `main`); reduced motion cuts
   (`setTilt`, `instant || reduce.matches`).
2. A click on the media plate's empty area: accent outline, the other three dimmed, the pane only "Media 164" with 60
   titled rows and "and 104 more in the list per plane", the hash ends `&plane=media`; a second click: four sections,
   `plane` gone. The same through the name button and the pane heading (both buttons, `tabindex 0`).
3. A hub's core sample, then the media name: the sample closes, media picked. Esc: the pick, then flat.
4. Country lens BE: no plane changes depth, media and hubs dimmed; pick Media: media full, the other three dimmed.
5. A fresh load of `#system=development&tilt=1&plane=countries`: tilted, countries picked.
6. Wheel over the code plane: the plates grow around the pointer, marks keep their size, plot names appear; a drag
   pans; `−` back to 1 and a flatten plus re-tilt give the same picture (canvas pixel hash equal); nothing draws over
   the bar or under the panel.
7. The core sample of "Defining table structures": its media rows show titles.
8. 390 wide: the Planes button is the same as on `main` (same click, same `tilt=1&view=list`); the pane headings pick
   and unpick. 1024 and 760 wide: tilted, picks work, no horizontal scroll.
9. The galaxy script chunk: 73,734 to 77,111 bytes (+3,377), gzipped 25,184 to 26,333 (+1,149).

| Spec | Measured |
|---|---|
| `git grep folded\|tiltInput\|g-tilt site/` empty | two comment hits only (above) |
| galaxy chunk size difference | +3,377 bytes, +1,149 gzipped (review of PR #12) |

**Deviations:**
- The tilted drawing clips to the planes area only while zoomed (`tz.s > 1`), not at every tilt, so flat stars sliding
  to their planes are not cut by the clip at small tilts. At zoom 1 everything lies inside the area anyway.
- The pane heading's `data-pick` is selected as `.g-planehead[data-pick]` because the lens picker also uses `data-pick`.
- `tz` is not re-clamped on a window resize; the next pan or zoom clamps it.
- The League could not run `npm run site:build` (not in the repository's League command list), so the site build, the
  browser checks 1 to 9 and the chunk size were done in the review of PR #12 (above).

**Operator steps still open:** none.

## 13. Proposed edits to other files (applied 2026-10-19, see section 12)

- `docs/DECISIONS.md`: the D99 text of section 3.
- `docs/PLAN.md` section 5, before the `v0.2+` row:
  `| **M37 Tilt button, plane pick, tilted zoom** | Tilt as an on/off button with the slide kept; a click on a plane's plate, name or pane heading picks it (accent outline, the rest at 0.4, the pane lists only that plane); the tilted pane as four plane sections; no folded planes, lenses dim; wheel, pinch and −/+ zoom the tilted view, drag pans; media titles in core samples (\`docs/specs/galaxy-tilt-planes.md\`, D99, proposed) | 1 to 1.5 days in three phases | none: site only, no LLM |`
- `docs/HANDOFF.md`, "Open specs, not yet implemented":
  **Tilt button, plane pick, tilted zoom, D99** (`docs/specs/galaxy-tilt-planes.md`, M37, issue #10). Status: proposed
  2026-10-19, nothing implemented. Tilt becomes one on/off button with the slide kept; a click on a plane's plate, name
  or pane heading picks that plane (highlight, the rest dimmed, the pane lists only it), a second click shows all four;
  the tilted pane becomes four plane sections; nothing folds (lenses dim); the tilted view zooms and pans; core sample
  media rows get their titles. Where to start: section 6 task 1 (phase 1 ships alone), then the failing tests of
  section 5. Site only, no derive; live with the Pages build of each merge. Until it lands: the tilt range, folding
  names, no zoom while tilted, ids in core sample media rows.
- `design/HANDOFF.A-layered.md` section 4, after "tilt control" and "folded plane": `(D99: Tilt is a button; no plane
  folds; a click on a plane picks it.)`
