# BC Observatory - handoff addendum A: Layered Observatory (Tilt)

Date: 2026-10-07. Direction: **Deep field**, unchanged. This is an addendum to `design/HANDOFF.md`.
Companion file: `tokens.A-layered.json` (additions only). Read `HANDOFF.views.md` first, then
`HANDOFF.D-galaxy-honest.md`: A is not a page of its own, it is a second state of D's system level.

A is the last build step. It depends on D's layout (positions) and on C's link data. Do not start it before both exist.

Nothing on the canvas was rendered or tested by the designer. Treat every artboard as a first pass that needs a visual check.

## 1. What exists

| Artboard | What | Theme | Fidelity | Real data |
|---|---|---|---|---|
| A - Finance tilted, core sample | four planes, Table 15 focused, panel per plane | dark | medium | Finance totals (2,021 objects, 728 Learn links, 2,014 relations, 586 W1 replaced), object ids and names. Everything per object is [n]; positions and hub names are placeholders |
| A - tilt, lenses and states | tilt 0, tilting, core sample, country lens, coverage lens, list per plane | dark | sketch to medium | totals only |
| A - 390 mobile | four tabs, count columns, core sample card | dark | medium | totals only |

## 2. What does not exist yet

- Light theme (tokens proposed, not drawn). 1024 width.
- Version and source lens on the planes: buttons only.
- The picture at real density. 2,021 objects on one plane has not been drawn; see level of detail below and the risk paragraph.
- Hover state. Expected: the star tooltip from the base handoff, plus the line under the cursor going active.

## 5. Structure (changes against D)

A adds one control and one layer group to D's system level. Everything else (header, breadcrumb, lens bar, panel, ports
are hidden while tilted) is D.

Layers, back to front, while tilted:

1. Background click target: flattens (Tilt 0).
2. Four **planes**, bottom to top on screen: countries, code, topic hubs, media. Each: plane plate, plane label (screen
   space, left), its things, in-plane edges (code plane only: relations of the focused star).
3. **Lines between planes**: mentions (media to hub), Learn page names object (hub to code), country replaces W1 object
   (code to country).
4. **Core sample**: one vertical accent line through the focused star and its counterparts on every plane.
5. Screen-space UI: **Tilt** slider at the start of the lens bar, lenses (now "per plane"), "list per plane", panel.

### Levels

| State | Shows | Enter by |
|---|---|---|
| Tilt 0 | D's system level, unchanged | default, slider to 0, "Flatten", background click |
| Tilted, nothing focused | four planes, D stars at full size, remaining objects as small squares, about 150 lines | Tilt slider or T |
| Core sample | focused star, its counterparts above and below, the rest at 0.3 | click or Enter on any thing on any plane |
| Lens on a plane | the lens's two planes, the other two folded to strips | lens bar |

Tilt is a fixed transform, not a camera: no orbit, no perspective, no depth sorting beyond plane order. Canvas 2D.

### Encodings

| Channel | Means |
|---|---|
| Plane | kind of thing: media, topic hub, code object, country layer |
| x/y inside a plane | the same place as in the flat galaxy (D layout). Planes share x/y |
| Line between planes | a cross-reference of one kind (see line styles in tokens) |
| No line up from an object | no Learn page names it: the coverage gap, visible as absence |
| Vertical accent line | the core sample of the focused star |
| Shape, colour, brightness, version frame | as in D |
| Hollow small square | an object that is not a D star (shown for volume and coverage, no label) |

## 4. Components (new)

- **tilt control**: a labelled range input, 0 to 100, snaps to 0 and 100 on release; key T toggles. Accent label.
- **plane label**: mono 12px upper case plus one mono 11px line with the plane's count, left of the plane, screen space.
- **core sample panel**: D's star panel with four sections in plane order (media, topic hubs, code, countries), each with
  its count and its top rows. Tier badge is `mixed` when the sample crosses tiers (proposal, see tokens).
- **list per plane**: one tab per plane; one row per thing; one count column per other plane. Sortable. This is the
  keyboard and screen-reader view and the only view on a phone.
- **folded plane**: a 24px strip with the plane label, when a lens does not use that plane. A real button: unfolds.

## States

- Tilting: 600 ms, things slide to their plane without changing x/y, lines fade in at the end. Reduced motion: cut.
- Core sample: focused star white with accent ring, vertical line, counterparts lit, rest 0.3.
- Country lens (BE): country plane shows one country; replaced W1 objects get a dashed accent line down; media and hub
  planes fold. Panel: replaced objects, exit to the country diff.
- Coverage lens: documented things dim; things with no line up get a 2px accent outline; panel gives the count and list.
- Empty plane (a system with no media, or a country that replaces nothing here): plane stays, one mono line in its
  centre says so.

## Responsive

- 1440: as drawn. 1024: panel overlays, planes use the full width. Not drawn.
- 390: no tilt. The planes are four tabs; the lines are count columns; tapping a row opens its core sample as a card with
  one line per plane and the exit to the neighbourhood.

## 6. Accessibility notes

- The picture is never the only way: every line is a number in the list per plane, every core sample is the panel.
- Proposed keys: T tilt, 1 to 4 jump to a plane, arrows inside a plane, Enter core sample, Esc flatten.
- Lines between planes use #6F82B3 (5.1:1). Plane plates and dividers are below 3:1 and decorative.
- Absence (no line up) is also a shape (hollow) and a 0 in the list, never only a missing stroke.

## 7. Intentionally not pixel-exact

- Plane size, shear and spacing are starting values for a 1060px canvas (see `layers.tilt` in tokens).
- All positions are by eye. In the artboard the core sample is a clean vertical line because the focused star's
  counterparts are snapped to its x; whether that snap reads as honest next to slanted lines needs a look on real data.
- The 12 small hollow squares stand for about 1,900 objects.

## 8. Open questions for waldo

- Is 2,021 objects on the code plane readable at all, or should the code plane show namespace plots with counts and
  only open one plot to objects at a time?
- Which lines at rest: the D stars only (as specified), or none until something is focused?
- Country plane with no lens: 22 countries collapsed into "replaced in n countries" per object (as drawn), or 22 thin
  planes? The second is the original idea and is probably too much ink.
- Should Tilt remember its state per visitor, or always start flat?
- Events have no plane. Keep them in C only?

## What this view cannot show, and what it costs

A cannot show events or subscribers at all, and it shows relations only inside the code plane for the focused star, so
"what touches Table 18" is still better answered in C. It shows time only through the version lens, never as change you
can watch. Its honesty depends on density: at 2,021 objects and 728 links in one system the picture needs level of
detail, which means most lines are not drawn until you ask, and a reader may take "no line" for "no link" when it is
only "not drawn yet". That is the main risk of this direction and the reason it comes last. Pipeline cost: one layers
file per system, loaded only when Tilt leaves 0, holding for every object of the system its x/y (from the D namespace
treemap, extended from the D stars to all objects), its Learn page count and hub ids, its media count and its replacing
countries, plus the media and hub nodes with their links. Finance is the largest: 2,021 objects, 728 Learn links, 586
replacements. That is well over a hundred KB raw and must be measured gzipped against the budget; if it does not fit, the
non-star objects ship as position and flags only, and their links load per namespace plot. No new rendering technology.
