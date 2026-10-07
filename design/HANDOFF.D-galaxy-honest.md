# BC Observatory - handoff addendum D: Galaxy, honest

Date: 2026-10-07. Direction: **Deep field**, unchanged. This is an addendum to `design/HANDOFF.md`, same section numbers.
Companion file: `tokens.D-galaxy-honest.json` (additions only). Sibling: `HANDOFF.C-neighbourhood.md`.

Nothing on the canvas was rendered or tested by the designer. Treat every artboard as a first pass that needs a visual check.

## 1. What exists

| Artboard | What | Theme | Fidelity | Real data |
|---|---|---|---|---|
| D - system level, star focused | Sales & Receivables, Table 18 focused, panel, exits | dark | medium | Table 18 counts (41 / 170 / 32 / 4 / 11), lens counts (899, 253), object ids and names. Positions, hub names, evidence titles are placeholders |
| D - levels and states | galaxy level, system hover, star focus, keyboard + list, landed this week, version lens | dark | sketch to medium | counts only |
| D - 390 mobile | locator strip + list | dark | medium | same as the main artboard |

## 2. What does not exist yet

- Light theme for any D artboard (tokens are proposed, not drawn). 1024 width.
- Lenses other than version and "this week": type, tier, country, source are buttons only.
- The galaxy level with real ordering: the tile shows the idea, not the 21 systems.
- Loading and empty states for the galaxy (C has them; D inherits the existing galaxy's).
- The list view itself, beyond the fragment in the states artboard.

## 5. Galaxy structure (changes against the base handoff)

Layers, back to front. New ones are marked.

1. Background click target: zooms out one level.
2. **World**: core glow, system halos, **tree guides** (new), **namespace plots** (new), newly-lit pulse rings, field stars,
   edges, **cross-system edges** (new, dashed), stars, **media bodies** (new), star labels, system labels.
3. Screen-space UI: header + breadcrumb, **lens bar** (new: type, tier, changed in BC29, changed in BC30, country, source, this
   week, list view), previous / next system, **ports** (new: labels pinned to the canvas edge where a cross-system edge
   exits), legend, star panel (380px) with the **exit dock** (new).

Levels: unchanged zooms (1 / 4.4 / 8).

| Level | Change |
|---|---|
| 1 galaxy | spiral order now comes from cross-system edge weight; top 2 edges per system drawn, width by weight |
| 2 system | hubs on the Learn tree (left), objects in namespace plots (right), media bodies beside hubs, hover tooltip as before |
| 3 star | only the focused star's edges: solid inside the system, dashed to a port per target system (max 6); panel gains "Crosses into other systems" and the exit dock |
| 4 page | "Open the page" link in the panel; still no transition designed |

Signature move, extended: clicking a port flies the camera along the dashed edge into the other system and focuses the star at
the far end.

### Encodings

| Channel | Means | Was |
|---|---|---|
| Position (hub) | place in the Learn table of contents: depth = distance from centre, order = TOC order | hash |
| Position (object) | namespace: one plot per namespace, treemap packed | hash |
| Position (system) | neighbours share the most cross-system edges | list order |
| Size | number of connections | same |
| Brightness | evidence: Learn pages + videos + posts naming the star | connections |
| Shape | circle hub, rounded square object, triangle video, bar post | circle, square |
| Colour | system hue, always with a label | same |
| Dashed teal ring | has community evidence | - |
| Accent ring + pulse | something landed in the last 7 days | newly lit |
| Accent frame | changed in the lens version | - |
| Hollow dashed square | obsolete | - |
| Solid / dashed edge | stays in the system / crosses out | one edge kind |

## 4. Components (new or changed)

- **lens bar**: row of toggle buttons, mono 12px, 32px high on desktop (44px on touch). One lens active at a time; the active
  one uses accent text, accent border, `accentSurface` fill, and shows its count. This is the base handoff's "filter bar".
- **port**: surface plate, 1px border in the target system's colour, label "Finance →" (13px/600) and one mono line naming
  the objects at the far end. A real `button`. Max 6.
- **cross-system list** (panel): one row per target system: mono system name in its colour, then the objects. Same content as
  the ports, so the ports are never the only way.
- **exit dock** (panel): "look closer with an instrument". Primary: Neighbourhood (goes to C, centred on this star, with the
  link total). Secondary, 2 columns: Versions, Events, Country diff, Atlas. Each shows one live number. Real links, 44px.
- **media body**: triangle or bar, not focusable on the canvas; reachable through the hub's evidence list.
- **legend**: one mono 11px line, top left of the canvas. Always visible at system level.
- **evidence chip, kind video**: accent family (see tokens). Fills a TODO of the base file.

## States

- Hover (system level): star tooltip, nothing else changes.
- Focused: white star, accent ring, edges draw outward (600 ms), others dim to 0.4 as today.
- Keyboard focus: accent ring 2px offset 2px, square for objects, round for hubs.
- Lens active: non-matching stars at 0.3; matches keep their brightness and get the lens mark.
- Landed this week: pulse on the hub, accent body next to it, row in the panel.
- Reduced motion: cuts instead of flies, static double ring instead of the pulse.

## Responsive

- 1440: as drawn. 1024: panel overlays the canvas (slides over, 380px) instead of sitting beside it. Not drawn.
- 390: no interactive galaxy. A 150px locator strip (static, same picture, focused star marked), then identity, the exit dock
  as a horizontal chip row, then three lists: in this system, crosses into other systems, landed this week.

## 6. Accessibility notes

- Everything the picture says is also in the panel as text: connected stars, cross-system rows, landed items, lens counts.
- "list view" in the lens bar swaps the canvas for the focused system as a sortable list (star, kind, connections, evidence,
  changed in). This closes the open item in the base handoff.
- Proposed keys: Tab walks stars in list order, arrows move to the nearest star in that direction, Enter focuses, Esc goes up
  a level. None of this exists in a prototype.
- Passive edges (#34415F, 1.9:1) and tree guides are below 3:1 and therefore treated as decoration: every edge that carries a
  fact is drawn active (#C6D6FF, 13.5:1) or listed.
- Lens state is never colour only: frame, dash or shape changes with it.

## 7. Intentionally not pixel-exact

- All star positions on the artboards are placed by eye to show the principle (tree left, plots right). The real layout comes
  from the pipeline.
- Hub names other than "Customers" and the evidence titles are placeholders in brackets or plausible stand-ins.
- The left 200 / right 160 degree split is a starting value; a system with few objects (Sustainability) may want another.

## 8. Open questions for waldo

- Tree left, plots right is the simplest honest layout. Alternative: objects orbit the hub whose Learn pages name them most
  (uses the 5,336 links). More "galaxy", but 15k objects have no Learn page and would have nowhere to go. Which one?
- Does the pipeline know cross-system edge weight per system pair today, or is that new?
- Is "evidence" for brightness Learn + videos + posts, or should code relations count too?
- Stars stay at 1,018. Should the namespace plots show the remaining objects as unlabelled field stars (cheap, honest about
  volume), or stay empty?
- Which five instruments go in the exit dock, and in what order, per star kind (a hub has no events)?

## What this view cannot show, and what it costs

D is still a map of 1,018 stars out of 16,425 objects, so "what touches Table 18" is answered only as far as other stars
and system ports go: the full 258 links live one click away in C, and an object that is not a star is not here at all. It
cannot answer who subscribes to an event, it shows version change as "which stars changed" without the member-level diff,
and coverage gaps appear only as dim stars, which you can see but not count. Relations are drawn for one focused star at a
time by design, so there is no picture of the overall relation structure. Pipeline cost: a new layout step (hub positions
from the two Learn tables of contents, object positions from a namespace treemap, system order from cross-system weights)
written into the existing galaxy JSON; per star a `cross` array (target system, target ids, kind), an `evidence` count and
`changedIn` / `obsoleteIn` flags; one small `landed.json` for the last 7 days (media id, kind, date, hub ids); and media
bodies per hub (top 6 plus a count). Estimated delta on the galaxy payload: tens of KB gzipped, well inside the budget.
No new rendering technology.
