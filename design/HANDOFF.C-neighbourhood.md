# BC Observatory - handoff addendum C: Neighbourhood explorer

Date: 2026-10-07. Direction: **Deep field**, unchanged. This is an addendum to `design/HANDOFF.md`.
Companion file: `tokens.C-neighbourhood.json` (additions only). Sibling: `HANDOFF.D-galaxy-honest.md`.

Nothing on the canvas was rendered or tested by the designer. Treat every artboard as a first pass that needs a visual check.

## 1. What exists

| Artboard | What | Theme | Fidelity | Real data |
|---|---|---|---|---|
| C - neighbourhood of Table 18 | relations mode, one neighbour expanded, link selected | dark | medium | ring counts (41 / 170 / 32 / 4 / 11), object ids and names, the two Sales Header relations. Which 7 are "top" is by eye; Learn and media counts are [n] |
| C - modes and states | events mode, hover, keyboard focus, "+ more" opened, per-page one-hop diagram, empty and loading | dark | sketch to medium | counts only; event and subscriber names are placeholders |
| C - 390 mobile | grouped list | dark | medium | same as the main artboard |

## 2. What does not exist yet

- Light theme (tokens proposed, not drawn). 1024 width.
- Starting from a topic hub, a video or a source instead of an object. The ring model allows it; nothing is drawn.
- The full list view ("Show as list") beyond the fragment in the states artboard.
- Events mode at full size.

## 3. Structure and layers

One page (`/neighbourhood/?o=table-18`), three columns, wrapping:

1. **Rail** (220px): mode toggle (Relations / Events), ring filters with counts, line-style legend, version select, "Show as list".
2. **Picture** (SVG, fluid): ring guides, direction divider, edges, nodes, labels, group pills.
3. **Panel** (360px): tier and review badges, the selected link in a sentence, one card per relation with kind and fields,
   evidence chip to the source file, "Re-centre", "Open its page", trail, back to the galaxy, markdown twin.

There is no camera and no zoom. The only movement is re-centring.

### Levels

| Level | Shows | Enter by |
|---|---|---|
| centre | the object and its rings, max 7 nodes per ring side | arriving, re-centre |
| selected link | active edge, panel explains the link | click or Enter on a neighbour |
| expanded neighbour | its top 2 neighbours and a count, 90px beyond the ring | E, or second click |
| group open | full list of a ring in the panel, grouped by system | click a "+ n more" or a group pill |

Never the whole second hop: one neighbour is expanded at a time.

### Encodings

| Channel | Means |
|---|---|
| Side | direction: right = the centre points to it, left = it points to the centre |
| Ring | kind of thing: ring 1 direct code relations, ring 2 grouped kinds as pills, top arc docs and media |
| Line style | relation kind: solid table_relation, dashed page and source links, dotted calc_formula and Learn links, double extends |
| Colour | system of the neighbour, always with its label |
| Shape | rounded square object, circle hub or Learn page, triangle video, diamond event |
| Order in a ring | most connected first, clockwise from the top of each side |
| Size | fixed per ring. Size means nothing here, on purpose |
| Brightness | not used |

## 4. Components (new)

- **mode toggle**: two-segment control, 44px, `aria-pressed`. Relations / Events.
- **ring filter**: checkbox + label + count (mono). Unchecking removes the ring from the picture and the list.
- **ring node**: 14px shape + label outside the ring (13px/600), mono second line on hover only.
- **group pill**: mono 11px, "+ 163 more", "extensions - 4". A real `button`; opens the group in the panel.
- **link card** (panel): mono kind label, then `"Field" → Target."Field"` in mono 13px. One card per relation between the two.
- **trail**: breadcrumb of re-centres, each a link. Esc steps back.
- **one-hop diagram** (every object page, side column, under the galaxy locator): 130px inline SVG, built at build time, no
  script: centre, top neighbour per ring, total, link into the explorer.
- **events mode**: ring 1 = published events of the object as diamonds, sized by subscriber count; selecting one fans out its
  subscribers as objects in their system colour. Events without subscribers are a count in the rail, not nodes.

## States

- Hover: edge active (2px), tooltip with kind and field. No dimming, no reflow.
- Selected: white node, accent ring, panel filled.
- Keyboard focus: accent ring 2px offset 2px on the node and on its list row at the same time.
- Group open: pill takes the accent, panel lists the group by system with bars and counts, filter by relation kind.
- Empty: centre alone on a dashed ring, one sentence, two next moves (events mode, another version).
- Loading: centre and ring guides immediately, nodes fade in ring by ring. Reduced motion: no fade, re-centre is a cut.

## Responsive

- 1440: as drawn. 1024: rail collapses into a filter button above the picture; panel becomes a bottom sheet. Not drawn.
- 390: no picture. The rings are accordion groups with counts; rows show the object, relation kind and system; tapping a
  row re-centres. Nothing is lost against desktop except the spatial sense of direction, which the group names carry.

## 6. Accessibility notes

- The picture is a second view on the list, not the other way round. DOM order: rail, list (visually hidden when the picture
  shows, but always in the tab order), panel.
- Proposed keys: Tab into a ring, arrows along it, Enter select, E expand, Esc back along the trail.
- Resting edges use #6F82B3 (5.1:1), not the galaxy edge colour (1.9:1), because here an edge is a fact.
- Relation kind is line style plus the text in the tooltip and panel, never colour.
- All targets 44px on touch; ring nodes get a 44px invisible hit area on desktop too (14px drawn).

## 7. Intentionally not pixel-exact

- Node angles, the choice of the 7 shown per ring and all label positions are by eye.
- Ring radii (160 / 260) are starting values for an 860px picture.
- The second-hop fan and the double line for `extends` are drawn roughly.

## 8. Open questions for waldo

- "Most connected first" decides which 7 of 170 you see. Better: most connected, or same system first, or changed in this
  version first?
- Should Learn pages and videos be a ring of their own in relations mode, or only the top arc as drawn?
- Subscribers are in first-party code only (about 5,200). Say so on the page, or is that obvious to this audience?
- Does the explorer get its own URL per object (shareable, agent readable, markdown twin as drawn), or is it a state of the
  object page?
- 16,425 neighbourhood files in the repo: fine for GitHub Pages, or shard by id range?

## What this view cannot show, and what it costs

C has no overview and no time: you must already know which object you care about, it cannot tell you what is new this week,
and a version is something you select, not something you see change. It cannot show absence, so "which Finance objects
have no Learn page" is not answerable here, and it cannot answer "what does BE change in Finance" because it looks at one
object at a time (it can show that this object is replaced in n countries, nothing more). Sources and blogs only appear as
individual videos or posts on the outer arc. Pipeline cost: one neighbourhood JSON per object and version in view, holding
the neighbours per ring with kind, direction, field names and system, plus the object's published events with their
subscribers; most of this already exists behind the object page, the new parts are the ordering, the per-ring top 7 and
the totals. Table 18 is a large one at 258 links; it stays in the low tens of KB gzipped, far inside the budget, and the
typical object is a fraction of that. The per-page one-hop diagram is a few hundred bytes of inline SVG written by the
same step into each of the object pages. No runtime library, no new rendering technology.
