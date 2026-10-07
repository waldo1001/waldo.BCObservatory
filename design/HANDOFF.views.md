# BC Observatory - handoff addendum: one place, three views

Date: 2026-10-07. Direction: **Deep field**, unchanged. Read this before the three view addenda:
`HANDOFF.D-galaxy-honest.md`, `HANDOFF.C-neighbourhood.md` and `HANDOFF.A-layered.md`, each with its own
`tokens.<view>.json`. It records the decision that ties them together.
Artboard sources: `design/canvas/` (`.dc.html` files from the design canvas; open them as reference, they are not site code).

Nothing here was rendered or tested by the designer. No artboard exists for this document yet: the home entries and the
view switch are described, not drawn.

## The decision

Six directions were compared against the eight audience questions (see `canvas/Compare.dc.html`). Outcome:

- **D. Galaxy, honest** is the place: the home page and the locator on every page.
- **C. Neighbourhood explorer** is the object view: what touches one object, who subscribes.
- **A. Layered Observatory** comes later as a "Tilt" of one system in D: planes for media, hubs, code, countries.
- E (instrument panel) is not a home; it survives as the exit dock in D's star panel.
- B (code city) and F (3D star field) are not built.

## One place, three views

This is not a drill-down sequence (D, then C, then A) and not three separate destinations. The galaxy is the place; C and A
are other views on whatever is in focus. The scope of the focus decides which view makes sense:

| Focus | Views available |
|---|---|
| nothing (galaxy level) | D |
| a system | D flat; later A by Tilt (same stars, same x/y, planes come apart) |
| an object | D (star level, cross-system edges); C (rings, centred on it) |
| a hub | D |

What must survive a view switch, in both directions:

1. **Focus**: the same star or system stays selected. "Back to the galaxy" from C lands on that star at star level.
2. **Lens**: an active version, country or source lens carries over where the target view has it (C: version; A: all).
3. **Panel**: same position, same identity row (type, tier badge, review badge), same evidence chips.
4. **URL**: each view state is addressable, so a link, an agent and the markdown twin all point at the same thing.

A view switch is a mode change at the same place, never a navigation to an unrelated page.

## Question entries on the home page

The home offers question-shaped entries. Each is a deep link into a view with a lens preset. They are front doors into the
shared space, not separate rooms: from wherever you land you can switch view without losing focus.

| Entry | Lands in | Scope | Preset |
|---|---|---|---|
| What is new this week? | D | galaxy | "this week" lens |
| Where does this blog or channel touch BC? | D | galaxy | source lens (pick a source) |
| What changed in a system in BC29 / BC30? | D | system | version lens; exit to the version timeline for member-level diff |
| What touches an object? | C | object | relations mode (pick an object, Ctrl+K) |
| Who subscribes to an event? | C | object | events mode |
| What does a country change in a system? | A, until then D | system | country lens; exit to the country diff |
| What has no Learn page / no video? | A, until then D | system | coverage; exit to the coverage heatmap |
| Where am I, what is next to me? | D locator + C one-hop diagram | every page | none |

Until A exists, its two entries land in D with the lens on and the exit to the existing instrument (country diff, coverage
heatmap) in the panel. That is a "partly" answer and is accepted for now.

## Build order

Each step ships on its own.

1. Pipeline for D: new layout step (hub positions from the Learn tree, object positions from the namespace treemap, system
   order from cross-system weight); per star cross-system edges, evidence count, changed / obsolete flags; `landed` list.
2. D renderer: positions, dashed cross-system edges with ports, lens bar (version and "this week" first), exit dock, list view.
3. C: neighbourhood JSON per object, the explorer page, then the one-hop diagram on object pages.
4. Home question entries, once D and C exist to land in.
5. A, as Tilt at system level, on D's positions and C's link data (`HANDOFF.A-layered.md`). One thing in steps 1 to 3
   must not block it: the D layout has to be able to place every object of a system, not only the stars, and C's link
   data has to be readable per system, not only per object.

## Open questions for waldo

- D layout: hubs on the Learn tree left and objects in namespace plots right (as drawn), or objects orbiting the hub whose
  Learn pages name them? Decide before step 1.
- Is C a page of its own per object (own URL, own markdown twin) or a state of the object page?
- Where do the question entries sit on the home: above the galaxy as a row, or as the lens bar's presets? Decided (D70): neither; a "Questions" menu in the header of every page.
- The remaining open questions are in section 8 of each view addendum.
