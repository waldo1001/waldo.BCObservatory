# Galaxy controls: one Lenses menu beside the view tools, and captions and ports that keep off what they would hide

Status: built 2026-10-12 on `build/galaxy-controls` (phases B, C, A; deviations and measurements in section 12).
Decision: D92 (text for `docs/DECISIONS.md` in section 12). Milestone: M30. Owner: waldo.
Scope: the home galaxy's lens bar and tools (`site/src/components/Galaxy.astro`, `site/src/scripts/galaxy.ts`), the
caption, plot label and port placement on its canvas, and their pure helpers (`site/src/scripts/galaxy-core.ts`,
`site/src/scripts/galaxy-labels.ts`). Items D3 and D6 of `docs/research/2026-10-12-ux-review.md`. Every claim below
was verified against the tree at `bb3a37e016` on 2026-10-12. Every number was measured on a build of exactly that
tree with the 2026-10-12 content (`waldo.BCObservatory-ux/site/dist`), with headless Chromium (Playwright 1.63.0) by a
read-only probe described in section 7.1, unless a command is named. Not in scope: the panel's content, the header
(A1), the side-column locator of every other page (`site/src/components/PageGalaxy.astro`, `site/src/scripts/locator.ts`),
the neighbourhood explorer, the graph data and the pipeline, the galaxy's height (D1), anything D88 already shipped
(D2, D4, D5).

## 1. Goal

Two independent problems on the home page, one control problem (D3) and one density problem (D6). Both stay on the
home page: `Galaxy.astro` is used by `site/src/pages/index.astro:4,34` only, and its script and style chunks are
referenced by one HTML file of the build (`grep -rl --include='*.html' 'Galaxy.astro_astro_type_script' site/dist`
lists `index.html` only; the same for its CSS chunk `index.KsWXHiti.css`).

### 1.1 D3: the lens bar mixes six control shapes, and squeezes itself

The bar (`Galaxy.astro:27-49`, `galaxy.ts:180-242`) holds, left to right:

| Control | Shape | Where |
|---|---|---|
| Questions (home only, D70) | `details.ask` menu of 8 links | `Galaxy.astro:28-35`, `site/src/lib/questions.ts:10-17` |
| `changed in BC30` + caret (D72) | a toggle fused to a `details` menu of 7 majors | `Galaxy.astro:36-42`, `galaxy.ts:206-233` |
| `this week` (D71, D80) | a toggle chip, built by the script | `galaxy.ts:234-242` |
| `more lenses` | a native `select` with optgroups Type (5), Tier (2), Coverage (1), Localization (22), Source (33) | `Galaxy.astro:43-44`, `galaxy.ts:185-205` |
| `list view` | a toggle chip | `Galaxy.astro:45` |
| `tilt` / `planes` (system level) | a range input, or on a phone a toggle | `Galaxy.astro:46-48`, `galaxy.ts:1180-1183` |

The tools sit apart at the top right: zoom out, zoom in, `Show panel`, `Full screen` and the "?" sheet (D88)
(`Galaxy.astro:52-69`). The bar is capped at `calc(100% - 330px)`, and at `calc(100% - 720px)` while the panel is
open (`Galaxy.astro:115-116`): it keeps room for the tools, which sit on the row above it, and for the panel, so the
cap eats a fixed 720 px of every width. Measured (bar width, rows, height; panel open, the default from the system
level on, `galaxy.ts:1202`):

| Viewport | Galaxy level, panel closed | System level (Finance), panel open |
|---|---|---|
| 1440 x 900 | 674 px, 1 row, 32 px | 720 px, 2 rows, 70 px (tilt wraps) |
| 1280 x 800 | 674 px, 1 row | 560 px, 2 rows, 70 px |
| 1024 x 768 | 674 px, 1 row | **304 px, 3 rows, 108 px** |
| 768 x 1024 | 438 px, 2 rows | **48 px, 6 rows, 228 px** (each control on its own row, wider than the bar) |
| 390 x 844 | static strip: 390 px, 3 rows, 124 px; the panel starts at page y 484 | same, page y 492 |

Three more things, verified:

- The bar is `role="toolbar"` (`Galaxy.astro:27`) but nothing implements the toolbar's arrow keys. Worse, an arrow
  key on a focused bar control at system level flies to the next system, at star level to the nearest star: the
  galaxy's keydown handler skips only `select, input, .g-table` targets (`galaxy.ts:1353-1360`).
- Questions is the 22nd Tab stop at galaxy level (23rd at system level): the 21 system label buttons come first,
  because `.g-labels` precedes the bar in the DOM (`Galaxy.astro:23` before `:27`). Measured by pressing Tab from the
  focused galaxy section at 1440 px.
- The ports' top floor is fixed at 96 px (`galaxy.ts:732`; the spot rectangle at `y0 + 110`, `:454`), the tilt planes
  at 112 px (`:526`) and the list view at 128 px (`Galaxy.astro:191`), all assuming a one-row bar. At 1024 px the
  3-row bar ends at 154 px: ports overlap it 20 times in 11 of the 21 star states measured (1.2).

### 1.2 D6: system and star density

The review judged one screenshot (Finance at 1280 px). Measured instead: every one of the 21 systems at 1440 x 900 and
1024 x 768, at system level (`#system=<id>`) and at star level (`#star=<the heaviest star of the system with
crossings>`), panel open (the default), motion on, read 2.6 s after load. Boxes: star dots and media bodies, caption
plates and plot labels as the canvas draws them; ports and system labels from the DOM. Two boxes overlap when their
interiors intersect (`hit`, `galaxy.ts:85`). A star counts when drawn at alpha 0.3 or more; a caption when drawn at
alpha 0.3 or more.

The four systems the review named:

| System (star level: star) | 1440 system: captions / on a star / caption-star pairs | 1024 system | 1440 star: captions / on a star / pairs; ports, port-port, port over a plot label | 1024 star, the same, plus ports over the bar |
|---|---|---|---|---|
| Finance (`topic/.../business-functionality/finance`) | 5 / 3 / 7 | 5 / 4 / 19 | 16 / 9 / 20; 6, 0, 2 | 8 / 6 / 14; 6, 0, 1; 1 |
| Sales & Receivables (`topic/.../sales`) | 6 / 5 / 13 | 6 / 5 / 18 | 6 / 3 / 11; 6, 0, 1 | 4 / 1 / 1; 6, 0, 4; 1 |
| AL Development (`topic/dev-itpro/development`) | 7 / 1 / 1 | 7 / 4 / 10 | 9 / 2 / 6; 6, 1, 0 | 8 / 3 / 7; 6, 1, 1; 0 |
| Platform, DevOps & Performance (`topic/business-central/business-functionality`) | 3 / 3 / 10 | 3 / 3 / 13 | 6 / 3 / 6; 6, 0, 7 | 2 / 2 / 2; 6, 0, 4; 1 |

All 21 systems (sums over 21 states each):

| | 1440 system | 1440 star | 1024 system | 1024 star |
|---|---|---|---|---|
| captions placed | 118 | 103 | 113 | 66 |
| captions over at least one other star | 43 | 40 | 56 | 24 |
| caption-star pairs | 91 | 83 | 144 | 52 |
| caption-caption overlaps | 0 | 0 | 0 | 0 |
| ports drawn | **0** | 89 | **0** | 89 |
| port-port overlaps (states with one) | - | 13 (5) | - | 17 (7) |
| port over a caption | - | 0 | - | 6 |
| port over the lens bar | - | 0 | - | 20 (11) |
| port over at least one star | - | 19 | - | 37 |
| plot labels drawn; over a caption; under a port | 75; 11; - | 207; 15; 14 | 39; 10; - | 153; 7; 18 |

What this says about the review:

- **"Ports only for the focused star (today the system draws them)" is already the behaviour.** Ports are built only
  at star level: `placePorts` wants `level === 3 && focusStar?.cross?.length` (`galaxy.ts:719`), and the dashed edges
  are drawn under the same condition (`:450`). 0 ports in 42 system-level states.
- **"A collision pass that skips a caption overlapping the previous one" exists since D44**: a caption is skipped when
  it hits a taken box (`galaxy.ts:828`), and the taken boxes hold every placed caption, the system labels, the bar,
  tools, legend, ports and panel (`:768-771`, `:829`). 0 caption-caption overlaps in 84 states.
- **"Port chips overlap the ring labels and each other" does not reproduce on Finance**: 0 port-port and 0
  port-caption overlaps at 1440, 1280 and 1024 px. It does elsewhere: port-port in 5 and 7 star states (Human
  Resources 4 and 5 pairs, Sources 5 and 5), ports over the bar at 1024, ports over plot labels.
- **"The top-five captions sit on the stars" is right.** The captions do not avoid star dots, only boxes: at system
  level Finance has 3 of its 5 captions over a neighbouring star, Sales & Receivables 5 of 6, Platform 3 of 3. The
  hubs sit on the rings of the Learn tree side by side, and a caption goes to the right of its star
  (`galaxy.ts:826-827`), over the next one.
- **New: plot labels are drawn in the caption font.** `ctx.font = "400 10px var(--font-mono), ui-monospace, monospace"`
  (`galaxy.ts:405`, and `:609` for the tilted tiles): a canvas `font` cannot resolve `var()`, so the assignment is
  ignored and the label keeps the previous font. In all 84 states every plot label was drawn in
  `600 12px "Bricolage Grotesque Variable"`, the caption font of the frame before. The design asks for mono 10 px
  (`design/tokens.json` `galaxy.namespacePlot.use`); `site/src/scripts/atlas.ts:87` shows the working form.

After this change:

- The bar has two groups. Left, the lenses: Questions, one `Lenses` menu holding every lens, and a chip naming the
  lens that is on. Right, the view: `List view`, `Tilt` (`Planes` on a phone), zoom, `Show panel`, `Full screen`, "?".
  At 1440 px both fit one row (only the longest chip at system level can wrap); at 1024 px with the panel open, two
  rows instead of three plus the tools row; at 768 px about 116 px instead of 228 (estimated from the measured control
  widths); on a phone one row instead of three.
- The groups come first in the Tab order, are honest `group`s, and arrow keys on them never move the galaxy.
- Ports, tilt planes and the list view start under the bar's measured bottom, whatever its height.
- A caption picks the spot around its star that covers the fewest other stars, and gives way when every spot covers
  two or more. Plot labels are mono 10 px and give way to captions, ports and the bar. Ports never overlap each other,
  the bar or the focused star's caption.
- The hash and every deep link work as before. No other page, no graph file, no pipeline step changes.

## 2. Reader- and agent-facing behaviour, after

Agents: nothing changes (no data file, no markdown, no MCP tool). Everything below is the home page.

### 2.1 The bar

One bar, `div.g-bar`, at the place of today's lens bar (left 16 px, top 46 px, right 16 px; right 396 px while the
panel is open on a screen over 720 px). Two groups, left and right, in one wrapping flex row; when both do not fit,
the right group wraps under the left one, right-aligned. The breadcrumb keeps the row above. Exact visible text:

- Left group, `div.g-lensbar[role=group][aria-label="Lenses"]`: `Questions` (home only, unchanged), `Lenses` (a
  `details.ask` menu, 2.2), and, while a lens is on, the chip: the lens label, its star count and `×`, for example
  `changed in BC30 27 ×`.
- Right group, `div.g-viewbar[role=group][aria-label="View"]`: `List view` (toggle, `aria-pressed`), at system level
  `Tilt` and its range (or `Planes` on a phone), then `−`, `+`, `Show panel` / `Hide panel`, `Full screen` /
  `Exit full screen`, `?`. The view toggles take the tools' look (13 px UI font, 36 px high, `.g-btn`); a pressed
  toggle uses the accent border and surface, as a pressed lens did. The labels gain a capital (`list view`,
  `tilt`, `planes` become `List view`, `Tilt`, `Planes`) because they now sit among `Show panel` and `Full screen`.

Width check, measured at 1440 px on today's controls and on temporary clones in today's styles (Questions 103 px,
`Lenses` 82, the chip `changed in BC30 27 ×` 170 and a 28-character chip 271, `List view` as a `.g-btn` 76, Tilt 173
with its 110 px range and about 143 with 80 px, the tools 317): the left group is 191 px, 367 with a typical chip; the
right group 405 px, 554 at system level. With the panel open the bar has 1028 px at 1440 (one row at every level; only
the longest chip at system level can wrap), 868 at 1280 (one row without a chip), 612 at 1024 (two rows at system
level), 356 at 768 (the left group, then the right group in two rows).

### 2.2 The Lenses menu and the chip

`Lenses` opens a panel of chips grouped under small headings, in this order; a group with no lens is left out. Counts
are the stars the lens lights, the same number the chip shows (D71). On the 2026-10-12 build (`graph/summary.json`,
`graph/landed.json`):

| Heading | Entries (label, count) | Picking it |
|---|---|---|
| Version | `BC30 vNext 27`, `BC29 97`, `BC28 113`, `BC27 115`, `BC26 97`, `BC25 92`, `BC24 129`; the config's long label as `title` (D72) | the version lens, keeping the system or star in view |
| Time | `this week 45` | the this-week lens, keeping the scope; the panel's Videos, Posts and Code pills (D80) as today |
| Type | `topic hubs 605`, `roadmap features 80`, `AL objects 300`, `localizations 22`, `sources 33` | the lens, back to galaxy level (as the select did, `galaxy.ts:868`) |
| Tier | `mostly community evidence 59`, `official only 905` | the same |
| Coverage | `no Learn page, video or post 124` | the same |
| Country | `Pick a country 22` | the panel's country picker (D78), heading `Pick a country` |
| Source | `Pick a source 33` | the panel's source picker, heading `Pick a source` |

The entry of the lens that is on is pressed (`aria-pressed="true"`, accent); for a country or source lens, its
picker entry is pressed. Picking the pressed entry clears the lens (the toggle semantics of today's chips). Every
pick closes the menu and returns focus to the `Lenses` summary; a picker entry moves focus to the panel heading. The
panel picker's text becomes `Choose one: the galaxy lights up where it touches Business Central.` (today "Choose one in
the lens list above: ...", `galaxy.ts:1395`, which points at the select that goes).

The chip shows for every lens, the search lens included (`"sales post" 12 ×`). Its label is cut at 28 characters with
`…`, the full label in `title`; its accessible name is `Clear the lens: <label>`. Clicking it clears the lens exactly
as the panel's `Clear the lens` does (`setLens("", true)`); focus goes to the `Lenses` summary.

Removed: the version pill and its caret menu, the `this week` chip in the bar, the `more lenses` select and its
hidden label. The remembered major of D72 goes with the pill: the menu lists every major, the chip names the one
that is on.

### 2.3 Keyboard and accessibility

- Tab order (galaxy level): `Questions`, `Lenses`, the chip, `List view`, `−`, `+`, `Show panel`, `Full screen`, `?`,
  then the system labels, ports, the previous and next buttons and the panel, as today. The DOM order changes to
  breadcrumb, bar, labels, ports, planes, list view, legend, nav, level, panel; all are absolutely positioned, so
  nothing moves on screen (below 480 px the flex `order` already sets the visual order).
- Both groups are `role="group"` with a label, not `toolbar`: each control is its own Tab stop, and no arrow-key
  contract is announced. The galaxy's arrow keys ignore events from inside `.g-bar`.
- `Lenses` is a native `details`: Enter or Space opens it; Tab and Shift+Tab move through its chips; Esc closes it and
  refocuses the summary, an outside click closes it, and arrow keys inside it never reach the galaxy. All of this is
  the existing wiring of every `details.ask` (`site/src/scripts/chrome.ts:16-25`), which covers it because the
  `details` is rendered in `Galaxy.astro`, as D72 did.
- Esc on the galaxy is unchanged (`galaxy.ts:1345-1351`): it closes the list view, flattens a tilt, clears a lens at
  galaxy level, goes up a level.
- Touch (`pointer: coarse`): summary, chips, chip and view toggles 44 px high, as today's lens chips.
- Reduced motion: nothing here animates.

### 2.4 Narrow screens

- 481 to 720 px (the panel is a bottom sheet, `Galaxy.astro:273-282`): the bar spans the full width and wraps; the
  `Lenses` and `Questions` lists open as the fixed bottom sheet (`.g-ask ul`, `Galaxy.astro:278`). The old one-row
  scrolling bar at top 90 px and the tools at top 44 px go.
- 390 px (static strip, the panel is the page, `Galaxy.astro:283-296`): the bar is static, after the breadcrumb,
  padding 8 px 16 px. The tools stay hidden as today; the right group keeps `List view` and, at system level,
  `Planes`. Galaxy level without a lens: `Questions`, `Lenses`, `List view` on one row (273 of 358 px), so the bar
  is at most 60 px high instead of 124, and the panel starts about 60 px higher.

### 2.5 Hash and deep links: unchanged

`parseHash` (`galaxy-core.ts:9-18`) keeps its keys `system, star, lens, q, view, tilt, kinds`, and every link that
points into the galaxy works as before:

| Link | Where it comes from | After |
|---|---|---|
| `#lens=landed`, `#lens=pick:source`, `#lens=version:29`, `#lens=version:30`, `#lens=pick:localization`, `#lens=coverage` | Questions, `site/src/lib/questions.ts:10-17` | the lens on, its chip shown; `pick:` opens the panel picker |
| `#lens=landed&kinds=v,p`, `#lens=landed&kinds=c` | the header pill, `site/src/layouts/Base.astro:49,51` | unchanged |
| `#lens=landed&kinds=c` | `site/src/pages/changes/week.astro:23`; `&system=<id>` from the panel's code line, `galaxy.ts:915` | unchanged |
| `#lens=pick:localization` | `site/src/lib/about.ts:28` | unchanged |
| `#system=<id>` | breadcrumbs, `site/src/layouts/Page.astro:29`; the locator, `site/src/components/PageGalaxy.astro:9`, `site/src/scripts/locator.ts:24` | unchanged |
| `#star=<id>`, `#star=object/<k>&system=<id>` | the locator; the explorer, `site/src/scripts/explorer.ts:319` | unchanged |
| `#system=<id>&tilt=1`, `#view=list`, `#q=<query>` | written by `setHash` (`galaxy.ts:1188-1195`) and shared as URLs; `#q=` also from the header search | unchanged |

`setHash` (`galaxy.ts:1186-1197`) writes the same keys as today.

### 2.6 Captions, plot labels and ports

- A caption tries four spots around its star: right (today's), left, below, above. Of the spots inside the view that
  hit no taken box, it takes the one covering the fewest other visible stars; ties go to the spot it had in the last
  frame, then to that order. When the best spot still covers more than one other star, the caption is skipped. The
  focused, hovered and marked stars keep their caption always (the best free spot, else today's right or left spot).
  The rule applies at system and star level and while zoomed into a system by hand (`eff`, `galaxy.ts:367`); at
  galaxy level captions are few and far apart and nothing changes.
- Plot labels are drawn in `400 10px 'JetBrains Mono', ui-monospace, monospace`, after the captions are placed and
  before the stars are painted, and only where they hit no caption, port, system label, bar or panel, and no plot
  label drawn before them. They stay decoration (the list view and the panel carry the facts).
- Ports sit at their edge spot as today, clamped under the bar; a port that would overlap another port, the bar, the
  legend, the nav buttons or the focused star with its caption takes the free slot on the canvas border nearest its
  spot. A port with no free slot is hidden (the panel's "Crosses into other systems" still lists it); none is expected
  with six ports at most and at least 16 slots at 1024 px.

## 3. Decisions

**D92 (draft) The galaxy's controls are two groups, lenses left and view right, and its captions and ports keep off
what they would hide.** (D3 of the 2026-10-12 review) The lens bar mixed six control shapes (the Questions menu, a
version pill with a caret menu, a "this week" chip, a native "more lenses" select, a "list view" chip, a tilt range
or a "planes" toggle) in a bar capped at `calc(100% - 720px)` with the panel open: 304 px and three rows at 1024 px,
48 px and six rows at 768 px. Now the left group holds Questions, one Lenses menu and a chip for the lens that is on;
the menu lists every lens in groups (Version newest first with counts and config labels, Time, Type, Tier, Coverage,
and Country and Source as entries that open the panel pickers of D78), built by `lensMenu` in `galaxy-core.ts`. The
right group is the view: List view, Tilt (Planes on a phone), zoom, Show panel, Full screen and the "?" sheet. One bar
wraps both, and its measured bottom sets where ports, tilt planes and the list view start. Both groups are
`role="group"` (the `toolbar` role promised arrow keys nobody implemented, and those arrows flew the galaxy), they
come first in the Tab order (Questions was the 22nd Tab stop), and the hash and every deep link are unchanged. Amends
D71 (the this-week chip becomes a menu entry: on the home page "this week" is two clicks, from Lenses or Questions)
and D72 (the version pill and its caret become the menu's Version row; the remembered major goes). (D6) Measured on 21
systems at 1440 and 1024 px: ports already drew only for a focused star and captions never overlapped each other, so
the review's two proposals were the behaviour already; what was wrong is that captions cover neighbouring stars (43
of 118 system-level captions at 1440), plot labels drew in the caption font (a canvas `font` cannot take `var()`), and
ports overlapped each other (13 and 17 pairs) and, at 1024, the bar (20). Now a caption takes the spot around its star
that covers the fewest other stars and is skipped when that is more than one (`captionSpot`, `CAPTION_MAX_COVER = 1`;
simulated on the same 84 states: caption-star pairs 370 to 61, captions 400 to at least 370);
plot labels are mono 10 px and yield (`visibleLabels`); ports take the nearest free border slot (`packPorts`).
Home page only: no other page grows, no graph file changes.

Rejected:

- A segmented control holding every lens: seven groups and 71 lenses; D72 already rejected a segmented control for
  seven versions.
- Keeping the version pill and the this-week chip one click away beside the menu: keeps three of the shapes and most
  of the width; both stay one link away through Questions and the deep links.
- One native `select` for every lens: no counts in a consistent place, no pressed state, no picker for 55 entries.
- Listing the 22 countries and 33 sources inside the menu: 55 rows; the panel pickers exist, with markers and counts
  (D78).
- A full ARIA toolbar with roving tabindex: the arrows collide with the galaxy's own and with the tilt range; ten
  controls in two short groups are fine with Tab.
- Keeping the tools in the breadcrumb row and adding the view toggles there: the right group grows to 554 px at
  system level and collides with the breadcrumb at 1024 px whenever a system is open.
- Ports only for the focused star, and a caption pass against earlier captions: both exist (`galaxy.ts:719`, `:828`).
- A strict rule "no caption over any star": simulated on the four systems at three widths it keeps 85 of 154
  captions, and none for Platform at 1440 px.
- Media bodies as caption obstacles: simulated, no gain on star overlap (124 pairs against 115) and more captions
  moved; later (section 8).
- Hiding plot labels: they are the only canvas text that names the namespace plots.

## 4. Contract

### 4.1 `site/src/scripts/galaxy-labels.ts` (pure, tested)

```ts
export interface Box { x: number; y: number; w: number; h: number }
/** Canvas fonts as literal families: a canvas `font` cannot resolve `var()` and keeps the previous font (D92). */
export const CANVAS_FONT = {
  caption: "600 12px 'Bricolage Grotesque Variable', system-ui, sans-serif",
  plot: "400 10px 'JetBrains Mono', ui-monospace, monospace",
} as const;
/** D92: a caption may cover at most this many other stars, else it gives way. */
export const CAPTION_MAX_COVER = 1;
/**
 * D92: where a star's caption goes. Spots, in order: 0 right (x = cx + d/2 + 6, y = cy - 10), 1 left
 * (x = cx - d/2 - 6 - w), 2 below (x = cx - w/2, y = cy + d/2 + 4), 3 above (x = cx - w/2, y = cy - d/2 - 24); h = 20.
 * Valid: inside `view` and hitting no `taken` box. Best: the fewest `stars` boxes hit (a box that contains the star's
 * own centre is its own dot and is ignored); ties to `prev`, then spot order. Null when no spot is valid or the best
 * covers more than `maxCover`.
 */
export function captionSpot(
  star: { x: number; y: number; d: number }, w: number, view: ViewRect, taken: readonly Box[], stars: readonly Box[],
  maxCover = CAPTION_MAX_COVER, prev?: 0 | 1 | 2 | 3,
): { box: Box; spot: 0 | 1 | 2 | 3; cover: number } | null
/** D92: the plot labels to draw: each one that hits no `taken` box and no label kept before it; indices in order. */
export function visibleLabels(boxes: readonly Box[], taken: readonly Box[]): number[]
```

Overlap is `hit` of `galaxy.ts:85` (strict inequalities): boxes that only touch do not overlap.

### 4.2 `site/src/scripts/galaxy-core.ts` (pure, tested)

```ts
import type { Box, ViewRect } from "./galaxy-labels.js";
export type LensGroupId = "version" | "time" | "type" | "tier" | "coverage" | "country" | "source";
export interface LensEntry { id: string; label: string; n: number; on: boolean; title: string | null }
export interface LensGroup { id: LensGroupId; label: string; entries: LensEntry[] }
/**
 * D92, the Lenses menu. Lens groups map to menu groups: Version -> version "Version", Time -> time "Time", Type -> type
 * "Type", Tier -> tier "Tier", Coverage -> coverage "Coverage", Localization -> country "Country", Source -> source
 * "Source", in that order; a group with no lens is left out. Version entries come from `versionMenu` (newest first,
 * `BC30 vNext`, the config label as title; its counts keyed by version from `counts.get("version:<v>")`). Type, Tier,
 * Coverage and Time entries: the lens label and `counts.get(id) ?? 0`. Country and Source are one entry each:
 * `pick:localization` "Pick a country" and `pick:source` "Pick a source", `n` = the number of lenses in the group,
 * `on` when the active id starts with `loc:` or `src:`. `on` elsewhere: the entry's id is `active`.
 */
export function lensMenu(
  lenses: readonly { id: string; label: string; group: string; version?: string }[],
  counts: ReadonlyMap<string, number>, majors: Record<string, MajorMeta>, active: string | null,
): LensGroup[]
/** D92, the active-lens chip: the label cut to 27 characters and "…" past 28 (full label in title), the count, the name. */
export function lensChip(label: string, n: number): { text: string; count: string; aria: string; title: string | null }
/**
 * D92: where each port goes. `want` = each port's spot (from portSpot) and size, in the order of the star's `cross`
 * (heaviest first). A port first tries its box centred on the spot and clamped into `area`; if that conflicts, it takes
 * the free slot whose centre is nearest the spot (ties: top, right, bottom, left, then along the edge). Slots for a
 * w x h port: top y = y0 and bottom y = y1 - h at x = x0 + k(w + gap) while x + w <= x1; right x = x1 - w and left
 * x = x0 at y = y0 + k(h + gap) while y + h <= y1. Conflict: closer than `gap` to a port placed before it
 * (a.x < b.x + b.w + gap and b.x < a.x + a.w + gap, the same in y), or hitting an obstacle. Null when the port is
 * larger than the area or no slot is free.
 */
export function packPorts(want: readonly { x: number; y: number; w: number; h: number }[], area: ViewRect, obstacles: readonly Box[], gap = 8): (Box | null)[]
```

Example `lensMenu` output on the 2026-10-12 build, active `version:29`:

```json
[{ "id": "version", "label": "Version", "entries": [
   { "id": "version:30", "label": "BC30 vNext", "n": 27, "on": false, "title": "2027 release wave 1 (BC30, vNext)" },
   { "id": "version:29", "label": "BC29", "n": 97, "on": true, "title": "2026 release wave 2 (BC29)" }, "... BC28 to BC24" ] },
 { "id": "time", "label": "Time", "entries": [{ "id": "landed", "label": "this week", "n": 45, "on": false, "title": null }] },
 { "id": "type", "label": "Type", "entries": ["topic hubs 605, roadmap features 80, AL objects 300, localizations 22, sources 33"] },
 { "id": "tier", "label": "Tier", "entries": ["mostly community evidence 59, official only 905"] },
 { "id": "coverage", "label": "Coverage", "entries": ["no Learn page, video or post 124"] },
 { "id": "country", "label": "Country", "entries": [{ "id": "pick:localization", "label": "Pick a country", "n": 22, "on": false, "title": null }] },
 { "id": "source", "label": "Source", "entries": [{ "id": "pick:source", "label": "Pick a source", "n": 33, "on": false, "title": null }] }]
```

`versionMenu`, `portSpot`, `parseHash` and every other export stay as they are.

### 4.3 `Galaxy.astro`

Markup, in this DOM order (unchanged parts shortened):

```html
<canvas aria-hidden="true"></canvas>
<nav class="g-crumbs" aria-label="Galaxy position"></nav>
<div class="g-bar">
  <div class="g-lensbar" role="group" aria-label="Lenses">
    {questions.length > 0 && (<details class="ask g-ask">...unchanged...</details>)}
    <details class="ask g-ask g-lensmenu"><summary>Lenses</summary><ul></ul></details>
    <button type="button" class="g-lens g-chip" data-g-chip hidden><span></span> <span class="g-lens-n"></span> <span aria-hidden="true">×</span></button>
  </div>
  <div class="g-viewbar" role="group" aria-label="View">
    <button type="button" class="g-btn" data-g-view aria-pressed="false">List view</button>
    <label class="g-tilt" hidden><span>Tilt</span> <input type="range" ...unchanged... /></label>
    <button type="button" class="g-btn" data-g-planes aria-pressed="false" hidden>Planes</button>
    <span class="skip" id="g-tilt-help">...unchanged...</span>
    ...zoom out, zoom in, Show panel, Full screen, details.ask.g-keys: unchanged...
  </div>
</div>
<div class="g-labels"></div>
<div class="g-ports" role="group" aria-label="Where the focused star crosses into other systems"></div>
<div class="g-planes" hidden></div>
<div class="g-table" hidden></div>
<p class="g-legend" hidden aria-label="Key"></p>
<div class="g-nav">...</div>
<p class="g-level mono-meta" aria-live="polite"></p>
<aside class="g-panel" ...>...</aside>
```

`.g-tools` is renamed `.g-viewbar`; the `select#g-lens`, its `label.skip`, and `div.g-vlens` with its `details.g-vmenu`
go. The menu `ul` is filled by the script (4.4). CSS (in the component's scoped style):

```css
.g-bar { position: absolute; left: 16px; right: 16px; top: 46px; z-index: 2; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 6px; pointer-events: none; }
.galaxy:global(.g-panel-open) .g-bar { right: 396px; }
.g-lensbar, .g-viewbar { pointer-events: auto; display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.g-viewbar { margin-left: auto; justify-content: flex-end; }
.g-viewbar [data-g-out] { margin-left: 6px; }
.g-btn[aria-pressed="true"] { color: var(--accent); border-color: var(--accent); background: var(--accent-surface); }
.g-lensmenu summary { font-weight: 400; color: var(--text-2); border-color: var(--line-strong); }
.g-lensmenu summary:hover, .g-lensmenu[open] summary { color: var(--text); border-color: var(--text-2); }
.g-lensmenu ul { width: min(400px, calc(100vw - 32px)); padding: 10px 12px; display: grid; gap: 10px; }
.g-lensmenu :global(.g-lm-h) { margin: 0 0 4px; font: 500 11px var(--font-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
.g-lensmenu :global(.g-lm-row) { display: flex; flex-wrap: wrap; gap: 6px; }
.g-lensmenu :global(.g-lm) { min-height: 32px; padding: 0 10px; font: 400 12px var(--font-mono); color: var(--text-2); background: var(--g-port-bg); border: 1px solid var(--line-strong); border-radius: var(--r-badge); cursor: pointer; }
.g-lensmenu :global(.g-lm[aria-pressed="true"]), .g-chip { color: var(--accent); border-color: var(--accent); background: var(--accent-surface); }
.g-lensmenu :global(.g-lm small) { font: inherit; opacity: .8; margin-left: 4px; }
.g-table { top: var(--g-top, 128px); }  /* replaces the 128px of the inset */
@media (pointer: coarse) { .g-lensmenu :global(.g-lm), .g-chip, .g-viewbar .g-btn { min-height: 44px; } }
@media (max-width: 720px) { .galaxy:global(.g-panel-open) .g-bar { right: 16px; } }
@media (max-width: 480px) {
  .g-bar { position: static; order: 2; padding: 8px 16px; }
  .g-viewbar :is([data-g-out], [data-g-in], [data-g-list], [data-g-full], .g-keys) { display: none; }
}
```

Removed rules: `.g-lensbar` position and max-width (`:115-116`), `select` in the selector at `:117` and the rule at
`:121` (the `.g-lens` look of `:117-120` and `:138-140` stays for the chip), `.g-tools .icon-btn` becoming
`.g-viewbar .icon-btn` (`:161`, `:165`), `.g-vlens` and
`.g-vmenu` (`:127-137`), `.g-tools` position (`:153`, `:160`, `:275`, `:277`), the 720 px bar rule (`:276`), `.g-tools`
in the 480 px hide list (`:290`), the 480 px bar rule (`:289`, replaced by `.g-bar`). `.g-tilt input` width 110 px
becomes 80 px (`:171`); `.g-tilt` min-height 36 px. The header comment (`:2-9`) describes the two groups.

### 4.4 `galaxy.ts`

Phase A (D3):

- Remove `lensSel` (`:110`), the select's optgroups (`:201-205`), the version pill group (`:206-233`), the this-week
  chip (`:234-242`), `vRemembered` (`:211`, `:854`, `:1165-1170`), the `lensSel.value` writes (`:867`, `:872`, `:879`)
  and its change listener (`:1235`). `barLenses` keeps its meaning (the lenses that keep the scope: versions and this
  week, `:868`, `:1205-1207`); rename it `scopeLenses`.
- `renderLensMenu()`: `lensMenu(lenses, counts, majorsMeta, lens?.id ?? null)` into `.g-lensmenu ul` as
  `<li><p class="g-lm-h" id="g-lm-<group>">Version</p><div class="g-lm-row" role="group" aria-labelledby="g-lm-<group>">`
  `<button type="button" class="g-lm" data-lens="version:30" aria-pressed="false" title="...">BC30 vNext <small>27</small></button>...`.
  Counts `g.nodes.filter(l.match).length` per lens. Rendered at mount and again on the menu's `toggle` to open (the
  this-week count follows the kind pills). A click: `pick:` entries call `openPicker(group)` (the block of
  `fromHash`, `:1392-1396`, moved into a function both call; it focuses the panel `h2`, not the select); a scope lens
  `setLens(on ? "" : id, true)`; any other `setLens(on ? "" : id)`. Then `menu.open = false` and focus to the summary
  (picker entries excepted).
- `renderChrome` (`:1154`) also sets the chip from `lensChip(lens.label, lensSet.size)` (hidden without a lens) and
  every `.g-lm`'s `aria-pressed`. The chip's click: `setLens("", true)`, focus to the `Lenses` summary.
- The picker heading: `Pick a country` for `localization`, `Pick a source` for `source`; the meta line as in 2.2.
- Keydown (`:1353`): return early for arrow keys from inside `.g-bar`.
- `chromeRects` (`:768`): the two groups `.g-lensbar` and `.g-viewbar` instead of `lensBar` and `.g-tools` (not the
  bar itself, whose empty middle must not block captions).
- `top`: `chromeBottom() + 8`, where `chromeBottom()` is the largest bottom, relative to the canvas, of whichever of
  `.g-crumbs`, `.g-bar`, `.g-lensbar`, `.g-tools`, `.g-viewbar` exist and are visible (so phases B and C work before
  or after A). Measured in `resize()` and by a `ResizeObserver` on the bar, then `--g-top` is set on the root and the
  canvas redrawn. Used by the port area (Phase C), `planesNow` (`:526`, `y0: top` instead of 112) and `.g-table`.

Phase B (D6, captions and plot labels):

- Every `ctx.font =` uses `CANVAS_FONT` (`:405`, `:609` for the plot and tile labels, `:665`, `:795` for captions).
- `draw()` order: background to plot outlines and edges and ports as today; then the visibility pass of the star loop
  (`shown`, `:466-491`) without painting; then caption placement; then plot labels; then the stars, media bodies and
  rings are painted; then the caption plates and texts. The plot loop (`:406-415`) collects
  `{ text, x, y, w: min(measureText, sw - 8), h: 11, alpha }` instead of calling `fillText`; they are drawn for the
  indices `visibleLabels(boxes, taken)` returns, `taken` being the chrome, the system labels and the placed captions.
- `drawStarLabels` (`:794-843`) splits into placement and painting. Placement keeps the candidate order, the
  priorities, `max`, `lensCap`, the fades and the hysteresis; per candidate it calls `captionSpot` with the stars of
  `shown` inside the view as `stars` (at system and star level and under `eff`; an empty list at galaxy level), the
  previous frame's spot as `prev` (a new `Map<string, spot>` beside `placedAt`), and `Infinity` as `maxCover` for a
  forced caption, which falls back to today's right or left spot when no spot is valid.

Phase C (D6, ports):

- `placePorts` (`:718-742`): the push loop goes; boxes come from `packPorts(want, area, obstacles)` with
  `area = { x0: 8, y0: top, x1: W - panelW() - 8, y1: H - 8 }` and `obstacles` = the legend, nav and level rects (as
  `chromeRects` measures them) and one box around the focused star and both its caption spots
  (`x = p.x - d/2 - 6 - capW`, `w = 2 capW + d + 12`, `y = p.y - 10`, `h = 20`, `capW` from `textWidth` or
  `measureText` with `CANVAS_FONT.caption`, plus 10). A null box hides its port. The dashed edge still ends at the
  port's centre (`:739`).
- The spot rectangle (`:454`) uses `y0: top + 22` instead of `v.y0 + 110`.

### 4.5 Unchanged

`parseHash`, `setHash`, `fromHash` apart from the picker extraction, the lens ids and their `match`, the panel and its
kind pills (D80), the Questions list, `chrome.ts`, `Base.astro`, `site.css`, `PageGalaxy.astro`, `locator.ts`,
`data/graph/*`, the pipeline, the MCP server.

### 4.6 Bytes

Measured on the evidence build: the galaxy chunk `site/dist/_astro/Galaxy.astro_astro_type_script_index_0_lang.DZtsN2mx.js`
is 70,627 bytes, 24,073 gzipped (`ls -l`, `gzip -9c | wc -c`); the home CSS chunk `index.KsWXHiti.css` 23,327 bytes;
`index.html` 21,942 bytes; the tar 695.3 MB (`npx tsx scripts/site-size.ts site/dist`). Estimated growth and the caps
the coder holds:

| File | Phase A | Phase B | Phase C | Cap, all three |
|---|---|---|---|---|
| galaxy chunk (raw) | +1.0 KB (menu, chip, `top`; minus select, pill, chip code) | +1.5 KB | +1.0 KB | **+5.5 KB raw, +2.0 KB gzipped** (76,127 and 26,073 bytes) |
| home CSS chunk | +0.5 KB | 0 | 0 | +1.5 KB |
| `index.html` | about -150 B (select and pill markup out, menu and chip in) | 0 | 0 | +300 B |
| every other HTML file, `PageGalaxy.astro`, `locator.ts`, `data/graph/` | 0 | 0 | 0 | 0 |

The tar grows by under 10 KB (three files, 512-byte blocks): 0.0 MB at the size tool's resolution. The galaxy chunk
pulls in `galaxy-core.ts` and `galaxy-labels.ts` alone (no other module imports them,
`grep -rn 'from "./galaxy-core\|from "./galaxy-labels' site/src`), so no shared chunk changes.

## 5. Test plan (write first)

`tests/unit/galaxy-core.test.ts`:

1. `lensMenu`: lenses `version:29` "changed in BC29" (Version, version 29), `version:30` (Version, 30), `landed` "this
   week" (Time), `type:topic` "topic hubs" (Type), `tier:official` "official only" (Tier), `coverage` "no Learn page,
   video or post" (Coverage), `loc:localization/be` "Belgium (BE)" and `loc:localization/nl` "Netherlands (NL)"
   (Localization), `src:source/yt-microsoft` "Microsoft" (Source); counts `version:30` 27, `version:29` 97, `landed` 45,
   `type:topic` 605, `tier:official` 905, `coverage` 124; majors `30` `{label: "2027 release wave 1 (BC30, vNext)",
   vnext: true}`, `29` `{label: "2026 release wave 2 (BC29)"}`; active `version:29`. Expect group ids `version, time,
   type, tier, coverage, country, source`; Version entries `[{id: "version:30", label: "BC30 vNext", n: 27, on: false,
   title: "2027 release wave 1 (BC30, vNext)"}, {id: "version:29", label: "BC29", n: 97, on: true, title: "2026 release
   wave 2 (BC29)"}]`; Time `[{id: "landed", label: "this week", n: 45, on: false, title: null}]`; Country
   `[{id: "pick:localization", label: "Pick a country", n: 2, on: false, title: null}]`; Source
   `[{id: "pick:source", label: "Pick a source", n: 1, on: false, title: null}]`.
2. `lensMenu`, the edges: active `loc:localization/be` presses the Country entry only; active `q:sales` presses
   nothing; without Version lenses (an older graph) the first group is `time`; a lens with no count has `n: 0`.
3. `lensChip("changed in BC30", 27)` is `{text: "changed in BC30", count: "27", aria: "Clear the lens: changed in
   BC30", title: null}`; `lensChip("Microsoft Dynamics 365 Business Central", 212)` is `{text: "Microsoft Dynamics 365
   Busi…", count: "212", aria: "Clear the lens: Microsoft Dynamics 365 Business Central", title: "Microsoft Dynamics
   365 Business Central"}`; a 28-character label is kept whole.
4. `packPorts`, area `{x0: 8, y0: 100, x1: 600, y1: 500}`, gap 8, ports 220 x 44:
   - one port at spot (300, 100): `[{x: 190, y: 100, w: 220, h: 44}]` (centred, clamped under `y0`);
   - six ports, all at spot (300, 100): `(190,100), (8,152), (380,152), (8,204), (380,204), (8,256)`, each 220 x 44;
     no two grown by the gap overlap, all inside the area;
   - one port at (300, 100) with obstacle `{x: 150, y: 90, w: 300, h: 60}`: `[{x: 8, y: 152, w: 220, h: 44}]`;
   - a 220-wide port in area `{x0: 0, y0: 0, x1: 200, y1: 40}`: `[null]`;
   - the same input twice gives the same output.
5. `parseHash` keeps every link of section 2.5: `#lens=landed&kinds=v,p` gives `[["lens","landed"],["kinds","v,p"]]`;
   `#lens=pick:source`, `#lens=version:29`, `#lens=coverage`, `#system=finance&tilt=1`,
   `#star=object%2Ftable%2F18&system=sales` (`[["star","object/table/18"],["system","sales"]]`), `#view=list`,
   `#q=sales%20post` (`[["q","sales post"]]`).

`tests/unit/galaxy-labels.test.ts`:

6. `captionSpot`, view `{x0: 0, y0: 0, x1: 1000, y1: 1000}`, star `{x: 100, y: 100, d: 10}`, w 80:
   - nothing around, or only its own dot `{x: 95, y: 95, w: 10, h: 10}` in `stars`: `{box: {x: 111, y: 90, w: 80,
     h: 20}, spot: 0, cover: 0}`;
   - a star `{x: 130, y: 95, w: 10, h: 10}` on the right: spot 1, `{x: 9, y: 90, w: 80, h: 20}`;
   - stars right and `{x: 50, y: 95, w: 10, h: 10}` left: spot 2, `{x: 60, y: 109, w: 80, h: 20}`;
   - two stars in each spot, given as (x, y), all 10 x 10 (right (120, 95), (160, 95); left (20, 95), (60, 95); below
     (70, 112), (110, 112); above (70, 75), (110, 75)): null with `maxCover` 1, spot 0 with cover 2 when `maxCover`
     is 2;
   - a taken box `{x: 105, y: 85, w: 100, h: 30}` and nothing else: spot 1;
   - right and left both free, `prev` 1: spot 1;
   - star `{x: 990, y: 500, d: 10}`: the right spot leaves the view, spot 1 at `{x: 899, y: 490}`.
7. `visibleLabels([{x: 0, y: 0, w: 50, h: 11}, {x: 40, y: 0, w: 50, h: 11}, {x: 200, y: 0, w: 50, h: 11}],
   [{x: 190, y: 0, w: 30, h: 20}])` is `[0]`: the second hits the first, the third the taken box.
8. `CANVAS_FONT` values contain no `var(`, and `site/src/scripts/galaxy.ts`, read as text, has no `.font =`
   assignment whose string literal contains `var(` (a regular expression over the file).

No unit test drives the DOM; the bar, the Tab order and the overlap counts are checked by the probe (section 7).

## 6. Tasks

Three phases; each ships alone and in any order (suggested B, C, A: B fixes a bug and changes no control). All
deterministic: no pipeline change, no LLM, no content rewrite, no install, home page only.

### Phase B, captions and plot labels (D6), half a day

1. Tests 6 to 8, failing.
2. `galaxy-labels.ts`: `Box`, `CANVAS_FONT`, `CAPTION_MAX_COVER`, `captionSpot`, `visibleLabels`.
3. `galaxy.ts`: the fonts, the `draw()` order, the placement and painting split, the plot label pass (4.4).
4. `scripts/galaxy-density.mjs` (section 7.1), unless phase A or C created it; run it before (on a build of the
   previous commit) and after; record both in section 12.

### Phase C, ports (D6), half a day

5. Test 4, failing; `packPorts` in `galaxy-core.ts`.
6. `galaxy.ts`: `chromeBottom`, `top`, `placePorts` and the spot rectangle (4.4).
7. The probe at 1440 and 1024 px, all 21 systems.

### Phase A, the two groups (D3), one day

8. Tests 1 to 3 and 5, failing; `lensMenu`, `lensChip` in `galaxy-core.ts`.
9. `Galaxy.astro`: markup order, the two groups, the CSS of 4.3, the removed rules.
10. `galaxy.ts`: the removals, `renderLensMenu`, the chip, `openPicker`, the keydown guard, `chromeRects`, `top` and
    `--g-top` (4.4).
11. `scripts/ui-sweep.mjs:101-107`: read the lens states from `.g-lensmenu .g-lm[data-lens]` (the first entry of each
    group, plus every Version and Time entry) instead of `[data-g-lens] optgroup` and `.g-lensbar .g-lens[data-lens]`;
    the sweep's 0 squeezed rows must hold (the menu's chips are measured like the other `details.ask` rows).
12. The bar part of the probe at five widths (7.1).

Closing (whichever phase ships last): D92 appended, PLAN M30 shipped, HANDOFF moved, `docs/RUNBOOK.md` line,
section 12 renamed "Built, deviations" with the measured numbers.

## 7. Verification

### 7.1 The probe, `scripts/galaxy-density.mjs` (new, not in CI)

Same frame as `scripts/ui-sweep.mjs`: Playwright found the same way (`findPlaywright`), `site/dist` served under
`/waldo.BCObservatory/` with `python3 -m http.server` from a temp folder holding one symlink, the server killed on exit.
Per viewport, a context with `localStorage` `bcobs-galaxy-intro = seen` and this init script, which records what the
galaxy canvas draws in its last frame (the frame starts at `setTransform`):

```js
const P = CanvasRenderingContext2D.prototype; let path = []; const rec = (window.__probe = { cur: [] });
const gal = (c) => !!c.canvas.closest?.("section.galaxy");
const wrap = (k, f) => { const o = P[k]; P[k] = function (...a) { if (gal(this)) f.call(this, ...a); return o.apply(this, a); }; };
wrap("setTransform", () => { rec.cur = []; });
wrap("beginPath", () => { path = []; });
wrap("arc", (x, y, r, s, e) => path.push({ k: "arc", x, y, r, full: Math.abs(e - s) >= 6.28 }));
wrap("roundRect", (x, y, w, h, rad) => path.push({ k: "rr", x, y, w, h, rad }));
wrap("rect", (x, y, w, h) => path.push({ k: "rect", x, y, w, h }));
wrap("moveTo", (x, y) => path.push({ k: "mt", x, y }));
wrap("fill", function () { rec.cur.push({ op: "fill", path: path.slice(), a: this.globalAlpha, grad: typeof this.fillStyle !== "string" }); });
wrap("fillText", function (t, x, y, mw) { const w = this.measureText(t).width; rec.cur.push({ op: "text", t, x, y, w: mw === undefined ? w : Math.min(w, mw), font: this.font, base: this.textBaseline, a: this.globalAlpha }); });
```

Classification: a star is a non-gradient `fill` of one full `arc` with r at most 14, or of one `roundRect` with w = h
at most 26.5 and radius 0.12 w; a media body a fill of an 8 x 3 `rect` or of a path starting with `moveTo` (box
x - 4, y, 8 x 7); a caption a `fillText` with baseline `middle` and font `600 12px` (plate x - 5, y - 10, w + 10, 20);
a plot label a `fillText` with baseline `top` (x, y, w, 11). Ports (`.g-port:not([hidden])`), system labels on the
canvas, and the bar from the DOM, relative to the canvas. States: `#system=<id>` and `#star=<heaviest star of the
system with cross>` for all 21 systems, at 1440 x 900 and 1024 x 768, read 2.6 s after `goto` plus `reload`. Bar
part: at 1440, 1280, 1024, 768 and 390 px wide, galaxy level and `#system=finance`, the bar's rows, height and bottom,
the page y of the panel at 390, and the first Tab stop after focusing `section.galaxy`. Output: one line per state and
the sums of the tables of 1.2.

### 7.2 Commands

```bash
npm run typecheck && npm test
PATH="$HOME/.nvm/versions/node/v22.23.1/bin:$PATH" npm --prefix site run build
node scripts/ui-sweep.mjs                      # 0 squeezed rows
node scripts/galaxy-density.mjs                # the targets of 7.3
ls -l site/dist/_astro/Galaxy.astro_astro_type_script_index_0_lang.*.js
gzip -9c site/dist/_astro/Galaxy.astro_astro_type_script_index_0_lang.*.js | wc -c
wc -c site/dist/index.html
grep -rl --include='*.html' 'Galaxy.astro_astro_type_script' site/dist | wc -l    # 1
npx tsx scripts/site-size.ts site/dist          # 695.3 MB on the same content, files 59,135
```

With a build of the previous commit on the same content in `../dist-before`:
`diff -rq site/dist ../dist-before | grep -v '_astro/' | grep -v '^Files site/dist/index.html '` prints nothing
(no other HTML file and no graph file differs).

### 7.3 Targets (before on the evidence build, after on the new build)

| Measure | Before | After |
|---|---|---|
| caption-caption overlaps, 84 states | 0 | 0 |
| caption-star pairs, all 21 systems, both levels, 1440 and 1024 (84 states) | 370 | at most 90 (simulated 61) |
| captions placed, the same 84 states | 400 | at least 355 (simulated at least 370) |
| captions over a star, system level, 1440 / 1024 | 43 / 56 | at most 20 / 25 (simulated 14 / 19) |
| caption-star pairs, the four named systems at 1440, 1280 and 1024, both levels (24 states) | 251 | at most 60 (simulated 38) |
| plot labels drawn in the caption font | all | none (`400 10px` JetBrains Mono) |
| plot label over a caption, 1440 / 1024 (42 states each) | 26 / 17 | 0 / 0 |
| plot label under a port, star level, 1440 / 1024 | 14 / 18 | 0 / 0 |
| port-port overlaps, star level, 1440 / 1024 | 13 / 17 | 0 / 0 |
| port over the bar, 1024 | 20 | 0 |
| port over a caption, 1024 | 6 | 0 |
| ports hidden for lack of a slot | 0 | 0 |
| bar at 1440, system level, panel open | lens bar 2 rows, bottom 116 | 1 row, bottom at most 82 |
| bar at 1024, system level, panel open | 3 rows, bottom 154, plus the tools row | at most 2 rows, bottom at most 124 |
| bar at 768, system level, panel open | 6 rows, bottom 274 | bottom at most 170 |
| bar at 390, galaxy level | 3 rows, 124 px | at most 60 px |
| first Tab stop in the galaxy, 1440 | Finance (system label) | Questions |

Manual, dark and light, 1440 and 390 px: open Lenses, pick BC29 (chip `changed in BC29 97 ×`, the Version chip
pressed), pick it again (lens off); pick `this week` at system level (the scope stays, the kind pills in the panel);
pick `Pick a country` (the panel picker, focus on its heading); Esc closes the menu and refocuses `Lenses`; at system
level the arrow keys on `Lenses` do not change the system; `#lens=version:29`, `#lens=landed&kinds=c`,
`#lens=pick:source`, `#system=finance&tilt=1` and the header pill from another page land as before.

## 8. Later, not in this spec

- Media bodies as caption obstacles: a hub's caption at the right spot covers its own media bodies (39 and 44
  system-level captions at 1440 and 1024 over a media body). Needs a weight against star cover; simulated without
  gain on star overlap.
- Ports over stars (19 and 37 ports cover a star at star level, 1440 and 1024): ports are opaque plates on the border;
  the star stays reachable from the panel and the arrow keys.
- 721 to 1023 px with the panel open leaves a 341 to 643 px canvas; an overlay that slides away while the camera
  flies would give it back.
- A key for the list view (`L`) in the "?" sheet.
- Bringing the header pill back on the home page (D71 removed it), if two clicks to "this week" turn out to cost.

## 9. Risks and open questions

Defaults are what the coder does when nobody answers.

1. "This week" and a version go from one click to two on the home page. Default: accept; Questions lists "What is new
   this week?" and two version questions, and every deep link is one click.
2. `CAPTION_MAX_COVER` 1 or 2: on the four named systems at three widths (24 states) simulated 132 captions and 38
   caption-star pairs with 1, 140 and 54 with 2, against 154 and 251 today; on all 21 systems at 1440 and 1024 (84
   states) 370 captions and 61 pairs with 1, against 400 and 370. Default 1; a constant, so the owner can flip it in
   one line.
3. The view toggles change case (`List view`, `Tilt`, `Planes`). Default: change them, they join `Show panel` and
   `Full screen`.
4. The tools leave the breadcrumb row for the bar row, so the top right of the canvas is empty and the tools sit 36 px
   lower. Default: accept; the alternative collides with long breadcrumbs (section 3).
5. The tilt range shrinks from 110 to 80 px so the right group fits one row at 1440 with the panel open. Default: 80.
6. A caption may move between spots while zooming. Mitigation in the contract: the last frame's spot wins ties.
   Default: no further damping unless the manual check shows flicker.
7. Probe numbers come from headless Chromium in the light theme with the self-hosted fonts loaded; another machine's
   font metrics can move counts by a few. The targets in 7.3 leave room for that.
8. The 768 px "before" bottom (274) is the lens bar alone; the "after" includes the view group. Default: compare
   bottoms as listed.
9. The simulation behind 7.3 re-placed today's captions only; the real pass may admit lower-ranked captions into the
   freed spots, so "captions placed" can come out higher than the simulated 370 (84 states) and 132 (24 states).
   Default: the targets as written.

## 10. Files

New: `docs/specs/galaxy-controls.md` (this), `scripts/galaxy-density.mjs`.
Changed: `site/src/components/Galaxy.astro`, `site/src/scripts/galaxy.ts`, `site/src/scripts/galaxy-core.ts`,
`site/src/scripts/galaxy-labels.ts`, `tests/unit/galaxy-core.test.ts`, `tests/unit/galaxy-labels.test.ts`,
`scripts/ui-sweep.mjs` (phase A), `docs/RUNBOOK.md`, `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`,
`docs/specs/version-lens.md` and `docs/specs/this-week-lens.md` (one "Later:" line each).
Not changed, checked: `site/src/components/PageGalaxy.astro`, `site/src/scripts/locator.ts`, `site/src/layouts/*`,
`site/src/scripts/chrome.ts`, `site/src/styles/site.css`, `site/src/lib/questions.ts`, `data/graph/*`, `pipeline/*`.

## 11. Definition of Done

- Tests 1 to 8 green; `npm run typecheck`, `npm test` and the site build pass; `node scripts/ui-sweep.mjs` reports 0.
- `scripts/galaxy-density.mjs` meets every target of 7.3; its before and after numbers are in section 12.
- The bar shows two groups with the exact labels of 2.1 and 2.2; no `select`, version pill or this-week chip remains in
  `Galaxy.astro` or `galaxy.ts`; `role="toolbar"` is gone from the galaxy.
- Every link of 2.5 lands as before (manual list of 7.3).
- Bytes within the caps of 4.6; only `index.html` and its two chunks differ from the previous build (7.2).
- D92 appended, PLAN M30 marked shipped, HANDOFF entry moved to shipped, RUNBOOK line added, this section 12 renamed
  "Built, deviations".

## 12. Built, deviations

Built 2026-10-12 on `build/galaxy-controls` from `04b705c8fb`, in the suggested order B, C, A, tests first:
`a26d3c3b0a` (B), `454c820e23` (C), `379fcc38b0` (A), `445e34aaeb` (the probe's frame). Measured on a local build of
`379fcc38b0` with the 2026-10-12 content against the build of `04b705c8fb` on the same content
(`waldo.BCObservatory-build-base/site/dist`), headless Chromium (Playwright 1.63.0), `scripts/galaxy-density.mjs`.
On the base build the probe reproduced every "before" number of sections 1.2 and 7.3 exactly.

### 12.1 What was built, per phase

- **B, captions and plot labels.** `galaxy-labels.ts`: `Box`, `CANVAS_FONT`, `CAPTION_MAX_COVER = 1`, `captionSpot`,
  `visibleLabels` (tests 6 to 8 plus edge cases: touching boxes, no spot in view, a forced caption). `galaxy.ts`: every canvas `font` is a `CANVAS_FONT` literal; `draw()`
  collects the plot labels in the plot loop, runs the star visibility pass without painting, places the system labels
  and the captions (`placeStarLabels`, which calls `captionSpot` with the visible stars in view at system and star
  level and under `eff`, an empty list at galaxy level, last frame's spot as `prev`, `Infinity` for a forced caption
  with today's right or left spot as fallback), draws the plot labels `visibleLabels` keeps, paints the stars, media
  bodies and rings, then the caption plates (`paintStarLabels`). `scripts/galaxy-density.mjs` is the probe of 7.1.
- **C, ports.** `packPorts` in `galaxy-core.ts` (test 4). `galaxy.ts`: `chromeBottom()` and `top` (8 px under the
  measured breadcrumb and bar, set as `--g-top` on the galaxy, re-measured in `resize()` and by a `ResizeObserver` on
  the breadcrumb and bar); `placePorts` packs the ports into `{ x0: 8, y0: top, x1: v.x1 - 8, y1: v.y1 - 8 }` around
  the legend, nav, level and the focused star with both caption spots, and hides a port with no slot; the port spots
  start at `top + 22`; `planesNow` starts at `top`; `.g-table` starts at `var(--g-top)`.
- **A, the two groups.** `lensMenu` and `lensChip` in `galaxy-core.ts` (tests 1 to 3 and 5). `Galaxy.astro`: the DOM
  order of 4.3 (breadcrumb, bar, labels, ports, planes, list view, legend, nav, level, panel), `div.g-bar` with
  `div.g-lensbar[role=group]` (Questions, `details.g-lensmenu`, the chip) and `div.g-viewbar[role=group]` (List view,
  Tilt, Planes, zoom, Show panel, Full screen, "?"), the CSS of 4.3 and the removals listed there; `role="toolbar"`,
  the select, the version pill and the this-week chip are gone. `galaxy.ts`: `renderLensMenu` (at mount and when the
  menu opens), one delegated click handler on the menu, the chip in `renderChrome`, `openPicker` (used by the hash and
  the menu), the keydown guard for arrow keys inside `.g-bar`, `chromeRects` on the two groups, `barLenses` renamed
  `scopeLenses`. `scripts/ui-sweep.mjs` reads its lens states from the menu.

### 12.2 Deviations

1. **`captionSpot`'s own dot** is a box *centred* on the star (within half a pixel), not any box that *contains* the
   star's centre. The objects of a namespace plot are squares up to 26 px that overlap; with the contract's rule a
   neighbour holding the star's centre was ignored, and a caption sat on it (Finance at 1440: "Working with Value Added
   Tax (VAT)" covered two stars with the cap at one). Measured on the 84 states with phases B and C, before A: captions
   over a star at system level, 1440 px, 22 to 20 (the target is at most 20); caption-star pairs 85 to 82. Test 6's cases hold unchanged; two cases
   were added.
2. **The port area's right and bottom** come from the visible rectangle (`v.x1 - 8`, `v.y1 - 8`), not `W - panelW() -
   8` and `H - 8`. Identical above 720 px; from 481 to 720 px, with the panel as a bottom sheet, the ports stay above
   the sheet instead of under it.
3. **`.g-table` at 720 px and below** also starts at `var(--g-top)` (fallback 136 px, today's value); 4.3 named only
   the desktop inset.
4. **`.g-tilt` takes the tools' look**: 13 px UI font, `--r-card` corners, the tools' surface and text colour, besides
   the 36 px height and the 80 px range of 4.3 (the range keeps the accent). Section 2.1 asks the view toggles to take
   the tools' look; a mono accent label between `List view` and `−` read as a lens.
5. **`chromeBottom()`** measures `.g-crumbs` and `.g-bar` once phase A is in (the bar holds both groups). In the C
   commit, before A, it measured `.g-crumbs, .g-bar, .g-lensbar, .g-tools, .g-viewbar` as 4.4 says.
6. **`openPicker`** also calls `renderChrome()`, so the breadcrumb, key, chip and the menu's pressed state follow a
   `#lens=pick:` link (before, the first render of such a link left the breadcrumb empty). It leaves a lens that is on
   until the reader picks a row (the spec is silent).
7. **The ui-sweep** also visits one `loc:` and one `src:` lens (the first of each by label, from `summary.json`),
   because the menu offers those groups only as pickers; the sweep keeps the coverage it had through the select's
   optgroups. 23 states per width, 46 in all.
8. **The probe** takes an optional build folder (`node scripts/galaxy-density.mjs <dist>`, for the before), honours
   `SWEEP_PORT` (default 4189), `SYSTEMS`, `PARTS` (`states`, `bar`) and `DENSITY_JSON`, measures the four named systems
   at 1280 px too (the 24-state target), counts bar rows over the visible children of `.g-lensbar` and `.g-viewbar`,
   and measures the bar against the canvas (the section has a 1 px top border; against the section every bottom read
   1 px lower than the spec's).
9. **Added, small:** a hover state on the menu chips (`.g-lm:hover`, as the other chips have); the scoped
   `.galaxy select:focus-visible` rule went with the select; the chip's accent rule is `.g-lensbar .g-chip`, because a
   bare `.g-chip` loses to `.g-lensbar .g-lens`.
10. **Risk 9 came true, within the targets:** the real pass admits lower-ranked captions into freed spots (453 placed
    against 370 simulated), so captions over a star at system level land on the targets (20 and 25), not on the
    simulated 14 and 19. `CAPTION_MAX_COVER` stays 1.
11. The canvas serialises the plot font `400 10px 'JetBrains Mono', ...` as `10px "JetBrains Mono", ui-monospace,
    monospace` (400 is the default weight); that is the string the probe reports.
12. Seen, not changed (outside the scope): `.g-legend { display: flex }` overrides its `hidden` attribute, so the key
    still shows while a system is tilted (D87 meant it hidden there; on phones the 720 px rule hides it).

### 12.3 Measured, before and after

Overlaps (sums over 21 systems; system level `#system=<id>`, star level `#star=<heaviest star with cross>`; panel
open; before = `04b705c8fb`, after = `379fcc38b0`):

| | 1440 system | 1440 star | 1024 system | 1024 star |
|---|---|---|---|---|
| captions placed | 118 to 128 | 103 to 129 | 113 to 114 | 66 to 82 |
| captions over at least one other star | 43 to 20 | 40 to 22 | 56 to 25 | 24 to 14 |
| caption-star pairs | 91 to 20 | 83 to 22 | 144 to 25 | 52 to 14 |
| caption-caption overlaps | 0 to 0 | 0 to 0 | 0 to 0 | 0 to 0 |
| ports drawn (hidden) | 0 | 89 to 89 (0) | 0 | 89 to 89 (0) |
| port-port overlaps (states) | - | 13 (5) to 0 | - | 17 (7) to 0 |
| port over a caption | - | 0 to 0 | - | 6 to 0 |
| port over the bar (states) | - | 0 to 0 | - | 20 (11) to 0 |
| port over at least one star | - | 19 to 13 | - | 37 to 36 |
| plot labels drawn; over a caption; under a port | 75 to 61; 11 to 0; - | 207 to 159; 15 to 0; 14 to 0 | 39 to 30; 10 to 0; - | 153 to 78; 7 to 0; 18 to 0 |

The targets of 7.3:

| Measure | Before | After | Target |
|---|---|---|---|
| caption-caption overlaps, 84 states | 0 | 0 | 0 |
| caption-star pairs, 84 states | 370 | **81** | at most 90 |
| captions placed, 84 states | 400 | **453** | at least 355 |
| captions over a star, system level, 1440 / 1024 | 43 / 56 | **20 / 25** | at most 20 / 25 |
| caption-star pairs, the four named systems at 1440, 1280, 1024, both levels (24 states) | 251 | **52** (captions 154 to 179) | at most 60 |
| plot labels drawn in the caption font | all | none: `10px "JetBrains Mono"` | none |
| plot label over a caption, 1440 / 1024 | 26 / 17 | **0 / 0** | 0 / 0 |
| plot label under a port, star level, 1440 / 1024 | 14 / 18 | **0 / 0** | 0 / 0 |
| port-port overlaps, star level, 1440 / 1024 | 13 / 17 | **0 / 0** | 0 / 0 |
| port over the bar, 1024 | 20 | **0** | 0 |
| port over a caption, 1024 | 6 | **0** | 0 |
| ports hidden for lack of a slot | 0 | **0** | 0 |
| bar at 1440, system level, panel open | lens bar 2 rows, bottom 116 | **1 row, bottom 82** | 1 row, at most 82 |
| bar at 1024, system level, panel open | 3 rows, bottom 154, plus the tools row | **2 rows, bottom 120** | at most 2 rows, 124 |
| bar at 768, system level, panel open | 6 rows, bottom 274 | **3 rows, bottom 162** | at most 170 |
| bar at 390, galaxy level | 3 rows, 124 px (panel at page y 484) | **1 row, 52 px (panel at 412)** | at most 60 px |
| first Tab stop in the galaxy, 1440 | Finance (system label) | **Questions** | Questions |

Bar rows, height and bottom (relative to the canvas; before, the lens bar alone, the tools row ended at 46):

| Width | Galaxy level, before / after | `#system=finance`, before / after |
|---|---|---|
| 1440 x 900 | 1 row, 32 px, 78 / 1 row, 36 px, 82 | 2 rows, 70 px, 116 / 1 row, 36 px, 82 |
| 1280 x 800 | 1, 32, 78 / 1, 36, 82 | 2, 70, 116 / 1, 36, 82 |
| 1024 x 768 | 1, 32, 78 / 1, 36, 82 | 3, 108, 154 / 2, 74, 120 |
| 768 x 1024 | 2, 70, 116 / 1, 36, 82 | 6, 228, 274 / 3, 116, 162 |
| 390 x 844 (static) | 3, 124 px; panel at page y 484 / 1, 52 px; 412 | 3, 124 px; 492 / 1, 52 px; 420 |

With a lens on, the chip can add a row: `#system=finance&lens=version:29` measured 1 row at 1440, 2 at 1024, 4 rows
(bottom 200) at 768, 3 rows at 390.

Bytes (`ls -l`, `gzip -9c | wc -c`, `npx tsx scripts/site-size.ts site/dist`):

| File | Before | After | Cap |
|---|---|---|---|
| galaxy chunk, raw | 70,627 (`…DZtsN2mx.js`) | 73,729 (`…DI5eisSu.js`), +3,102 | 76,127 |
| galaxy chunk, gzipped | 24,073 | 25,179, +1,106 | 26,073 |
| home CSS chunk | 23,327 (`index.KsWXHiti.css`) | 22,784 (`index.C9Dv7T_0.css`), -543 | +1.5 KB |
| `index.html` | 21,942 | 21,769, -173 | +300 B |
| Pages tar | 729,118,720 B, 695.3 MB, 59,135 files | 729,118,720 B, 695.3 MB, 59,135 files (apparent +2,386 B) | under 800 MB |

`diff -rq` of the two builds: only `index.html` and its two chunks differ; one HTML file references each chunk; no
other page, no graph file.

Checks: `npm run typecheck` passes; `npm test` 492 tests, 491 pass, 1 skipped (the model2vec parity test without
`BC_OBSERVATORY_MODEL_DIR`), 0 fail; `node scripts/ui-sweep.mjs` 46 states, 0 squeezed rows. Headless, dark and
light, at 1440, 1024, 768, 480 and 390 px: no horizontal scroll, no control outside the bar, no page error; the
Lenses menu picks BC29 (chip `changed in BC29 97 ×`, the entry pressed, focus back on `Lenses`), picks it again (lens
off), picks `this week` at system level (scope kept, the Videos, Posts and Code pills in the panel), picks `Pick a
country` (the picker, heading `Pick a country`, focus on it, a pick lights the country and presses the Country
entry); Enter opens the menu, Tab enters it, arrows inside it and on `Lenses` and `List view` at system level leave
the system alone, Esc closes it and refocuses `Lenses`; the chip clears the lens and keeps the scope; a source chip
reads `Microsoft Dynamics 365 Busi… 251 ×` with the full name in `title`. Deep links land as before: `#lens=landed`,
`#lens=pick:source`, `#lens=version:29`, `#lens=version:30`, `#lens=pick:localization`, `#lens=coverage`,
`#lens=landed&kinds=v,p`, `#lens=landed&kinds=c`, `#system=finance&lens=landed&kinds=c`, `#system=finance&tilt=1`,
`#view=list`, `#star=object%2Ftable%2F18&system=sales`, `#q=sales%20post`, and the header pill clicked on
`/changes/week/`. Tab order at galaxy level: Questions, Lenses, List view, −, +, Show panel, Full screen, ?, then the
system labels. At 1024 px with a two-row bar the tilt planes start at 128 and the list view at 128 (bar bottom 120).

### 12.4 For the integrator

`docs/DECISIONS.md`, appended:

```text
- **D92 The galaxy's controls are two groups, lenses left and view right, and its captions and ports keep off what
  they would hide.** (D3 of the 2026-10-12 review) The lens bar mixed six control shapes (the Questions menu, a version
  pill with a caret menu, a "this week" chip, a native "more lenses" select, a "list view" chip, a tilt range or a
  "planes" toggle) in a bar capped at `calc(100% - 720px)` with the panel open: 304 px and three rows at 1024 px, 48 px
  and six rows at 768 px. Now the left group holds Questions, one Lenses menu and a chip for the lens that is on (it
  clears the lens); the menu lists every lens in groups (Version newest first with counts and config labels, Time,
  Type, Tier, Coverage, and Country and Source as entries that open the panel pickers of D78), built by `lensMenu` in
  `galaxy-core.ts`. The right group is the view: List view, Tilt (Planes on a phone), zoom, Show panel, Full screen and
  the "?" sheet. One bar wraps both, and its measured bottom sets where ports, tilt planes and the list view start.
  Both groups are `role="group"` (the `toolbar` role promised arrow keys nobody implemented, and those arrows flew the
  galaxy), they come first in the Tab order (Questions was the 22nd Tab stop, now the first), and the hash and every
  deep link are unchanged. With the panel open on Finance the bar is one row at 1440 px (bottom 116 to 82), two at 1024
  (154 to 120, and the tools row is gone), bottom 274 to 162 at 768; on a phone one row of 52 px instead of three of
  124. Amends D71 (the this-week chip becomes a menu entry: on the home page "this week" is two clicks, from Lenses or
  Questions) and D72 (the version pill and its caret become the menu's Version row; the remembered major goes).
  (D6) Measured on 21 systems at 1440 and 1024 px: ports already drew only for a focused star and captions never
  overlapped each other, so the review's two proposals were the behaviour already; what was wrong is that captions
  covered neighbouring stars (43 of 118 system-level captions at 1440), plot labels drew in the caption font (a canvas
  `font` cannot take `var()`), and ports overlapped each other (13 and 17 pairs) and, at 1024, the bar (20). Now a
  caption takes the spot around its star (right, left, below, above) that covers the fewest other stars and is
  skipped when that is more than one (`captionSpot`, `CAPTION_MAX_COVER = 1`; a box centred on the star is its own dot,
  so an overlapping object square still counts); on the same 84 states caption-star pairs fell from 370 to 81,
  captions placed rose from 400 to 453, captions over a star at system level fell from 43 to 20 at 1440 and 56 to 25 at
  1024. Plot labels are mono 10 px and yield to captions, ports, labels and the bar (`visibleLabels`; over a caption 43
  to 0, under a port 32 to 0). Ports take the nearest free slot on the canvas border (`packPorts`; port pairs 30 to 0,
  over the bar 20 to 0, over a caption 6 to 0, none hidden). Home page only: the galaxy chunk grows 3.1 KB raw and
  1.1 KB gzipped, the home CSS and `index.html` shrink, the Pages tar stays at 695.3 MB, no other page and no graph
  file changes. `scripts/galaxy-density.mjs` measures all of it. Rejected: a segmented control holding every lens
  (seven groups and 71 lenses; D72 rejected one for seven versions); keeping the version pill and the this-week chip
  beside the menu (three of the shapes and most of the width stay); one native `select` for every lens (no counts in
  a consistent place, no pressed state, no picker for 55 entries); listing the 22 countries and 33 sources in the
  menu (55 rows; the panel pickers exist); a full ARIA toolbar with roving tabindex (its arrows collide with the
  galaxy's and the tilt range's); the tools in the breadcrumb row (collides with the breadcrumb at 1024 px); a strict
  "no caption over any star" (85 of 154 captions kept on the four busiest systems, none for Platform at 1440); media
  bodies as caption obstacles (no gain on star overlap; later); hiding plot labels (the only canvas text that names
  the namespace plots). Spec: `docs/specs/galaxy-controls.md`.
```

`docs/PLAN.md` section 5, the M30 row:

```text
| **M30 galaxy controls** | the lens bar as two groups (Questions, a Lenses menu and the active-lens chip; List view, Tilt and the tools) in one wrapping bar whose bottom places ports, planes and the list view; captions that avoid covering stars, plot labels in their own font that give way, ports packed on the border (`docs/specs/galaxy-controls.md`, D92, shipped 2026-10-12) | 2 days | none: deterministic, no LLM |
```

`docs/HANDOFF.md`: remove the "Galaxy controls, D92" entry from "Open specs, not yet implemented", and add under a
"Shipped 2026-10-12" heading in "Where things stand":

```text
- **Galaxy controls, D92** (`docs/specs/galaxy-controls.md`, M30). Items D3 and D6 of the 2026-10-12 UX review, home
  page only. The galaxy's lens bar is one bar of two groups: left Questions, a Lenses menu with every lens in groups
  (versions with counts, this week, type, tier, coverage, and Country and Source entries that open the panel pickers)
  and a chip that names and clears the lens that is on; right List view, Tilt, zoom, panel, full screen and "?". One
  row at 1440 px with the panel open (was two), two at 1024 (was three plus the tools row), one 52 px row on a phone
  (was three, 124 px); Questions is the first Tab stop; arrow keys on the bar no longer fly the galaxy; every deep
  link lands as before. Captions take the spot around their star that covers the fewest other stars (caption-star
  pairs 370 to 81 on 84 states), plot labels are mono 10 px and give way, ports are packed on the border under the
  measured bar (port overlaps 30 to 0, over the bar 20 to 0). Galaxy chunk +3.1 KB raw (+1.1 KB gzipped), tar
  unchanged at 695.3 MB. `node scripts/galaxy-density.mjs` measures it; deviations in the spec's section 12.
```

`docs/RUNBOOK.md`, after the ui-sweep paragraph:

```text
Galaxy density probe (D92): after a change to the canvas captions or plot labels, the ports or the galaxy bar, build
the site (Node 22) and run `node scripts/galaxy-density.mjs`. It serves `site/dist` the way the ui-sweep does (port
`SWEEP_PORT`, default 4189) and counts overlapping captions, plot labels, ports and stars per system at system and star
level at 1440 and 1024 px (and the four busiest systems at 1280), plus the galaxy bar's rows and bottom at five widths
and the first Tab stop. Pass another build's `site/dist` as its argument for a before and after; `PARTS=bar` or
`PARTS=states` runs one half. The ui-sweep now reads its lens states from the galaxy's Lenses menu (23 per width).
```

Applied in this branch: the "Later:" lines in `docs/specs/version-lens.md` and `docs/specs/this-week-lens.md`.
`AGENTS.md`, `CONTENT-NOTICE.md`: nothing.
