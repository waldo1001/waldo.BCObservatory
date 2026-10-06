# BC Observatory - design handoff

Date: 2026-10-06. Direction: **Deep field** (dark-first, spiral galaxy, information-first pages).
Companion file: `design/tokens.json`. Every colour, size and duration below comes from there.

Read this first: the release-wave seed files (`tokens.release-wave.json`, `HANDOFF.release-wave.md`), the BC product icon and
`data/graph/summary.json` never reached the design session. This handoff is therefore **not** in the release-wave shape, and the
design does not start from that system. Reshape as needed.

Nothing on the canvas was rendered or tested by the designer. Treat every artboard as a first pass that needs a visual check.

## 1. What exists

| Artboard | Page type | Theme | Fidelity | Real data |
|---|---|---|---|---|
| Deep field - navigation | Galaxy, 3 zoom levels, playable | dark | prototype | Finance: 50 nodes, 40 edges. Other 20 systems: placeholder scatter |
| Home | Home | dark | medium | counts, one "this week" item |
| Home - light | Home | light | medium | same |
| Topic hub - Finance | Topic hub | dark | medium | all real (10 of 15 subtopics, 2 of 256 evidence items) |
| AL object - Table 18 Customer | AL object | dark | medium | facts real, member rows placeholder |
| Localization - Belgium (BE) | Localization + diff | dark | medium | numbers real, diff lines and most names placeholder |
| Source footprint - demiliani.com | Flight path | dark | medium | post real, provenance placeholder |
| A / B / C thumbnails | Direction exploration | - | sketch | A was chosen. B and C are rejected, keep for reference only |

## 2. What does not exist yet

- Page types: roadmap feature, video, community post, weekly digest (with deprecation radar), search results. No real excerpt was available.
- Light theme for every page except home. Light galaxy at system and star level (edges, active star).
- Mobile (390) and tablet (1024) artboards. Pages are fluid and built to reflow, but no narrow layout was drawn or checked.
- Galaxy level 4 (star to page transition), filters (type / tier / country / version), free pan and zoom.
- Tier `mixed`, review `reviewed`, roadmap status badges, evidence kinds `video`, `post`, `roadmap`.
- Reduced-motion behaviour.
- The BC product icon is not used anywhere.

## 3. Page anatomy (all information pages)

Same skeleton everywhere, in this order. Information first, galaxy as a small locator.

1. `header`: wordmark "BC Observatory", "unofficial, made by waldo", search input.
2. `breadcrumb`: Galaxy / system / (group) / page.
3. Identity row: type label in the system colour (mono), `tier badge`, `review badge`. Always visible, above the title.
4. `h1`, then a one-paragraph summary or the mono namespace line.
5. Stat tiles (optional): big number + label, each a jump link to its section.
6. Actions: "Open in Claude" (primary), markdown twin (mono, file name as label), one contextual action.
7. Two columns, wrapping to one: main (`flex: 999 1 560px`) and side (`flex: 1 1 280px`).
8. Side column: locator (mini galaxy or constellation), provenance `dl` (tier, review, generated, pipeline, input hash), id in mono.

## 4. Components

Names as used in the brief.

- **galaxy**: see section 5.
- **star tooltip**: label that appears next to a star on hover at system level. 12px/600, dark translucent plate, counter-scaled.
- **evidence chip**: one row, a link. Kind tag (mono 11px, tinted background per kind) + title (mono for file paths) + right-aligned meta
  (date, or `branch @ short commit`). Wraps on narrow widths. Links straight to the source.
- **evidence list**: stacked evidence chips, a count on the section title ("2 of 256 Learn pages"), a "Show all" link.
- **tier badge**: mono 12px, 1px solid border, 3px radius. Plain wording: "official - Microsoft", "community - not Microsoft".
- **review badge**: same shape, **dashed** border for unreviewed, wording "unreviewed - machine-generated". Never red, never an icon.
- **status badge**: not designed.
- **object member table**: tabs (Fields / Procedures / Events with counts) over a table: No., Name, Type, Changed in. The changed
  version is an accent pill. Wrapped in a horizontal scroll box, min-width 520px.
- **version timeline**: equal columns, one per BC major. Dot + connecting line, mono version label, one line of text. The changed
  version uses the accent and a larger ringed dot.
- **country diff table**: one expanded object as a two-column W1 / BE block (mono 13px, additions on `diff.addedBackground`), then a
  table of the other changed objects with fields and events added.
- **flight path**: vertical ordered list, oldest first. Glowing dot per stop, dashed connector, date (mono), title, system chips,
  topic tags. Ends with an empty dashed marker for the next stop.
- **digest section**: not designed. The home "Newly lit this week" row is the closest reference.
- **search result row**: not designed.
- **filter bar**: not designed.
- **breadcrumb**: 14px, muted, links in link colour, current page in text colour.
- **markdown-twin action**: secondary button, mono, labelled with the file name (`finance.md`).
- **open in Claude action**: primary button.

## 5. Galaxy structure

Prototype: `Deep-field-navigation` artboard. It is built from positioned DOM elements. For 17k nodes, use canvas for stars and
edges and keep DOM for labels, buttons and the panel.

Expected layers, back to front:

1. Background click target: zooms out one level.
2. **World** (one transformed container, `transform-origin: 0 0`): core glow, system halos, newly-lit pulse rings, field stars,
   edges, stars, star labels, system labels.
3. Screen-space UI: wordmark + breadcrumb (top left), previous / next system buttons (bottom left, system level only),
   level indicator (bottom centre), star panel (right, 380px, slides in at star level).

Camera: `translate(vx - tx * s, vy - ty * s) scale(s)` where (tx, ty) is the target in world coordinates, s the zoom
(`galaxy.zoom`), and (vx, vy) the screen point to centre on (shifted left at star level to clear the panel). Labels counter-scale
with `scale(1 / s)` on the same duration and easing so text stays a constant size.

Levels:

| Level | Zoom | Shows | Enter by |
|---|---|---|---|
| 1 galaxy | 1 | all systems, labels, newly-lit rings | default, breadcrumb, background click |
| 2 system | 4.4 | focused system full, others dimmed to 0.4, edges, top 5 star labels, hover label | system label, prev / next |
| 3 star | 8 | star + its edges highlighted, side panel with connected stars | star click, connected-star row in panel |
| 4 page | - | not designed | "Open page" in the panel |

Signature move: clicking a connected star in the panel flies the camera along the edge to that star.

**Layout change against the current prototype**: systems are no longer on a ring. They sit on a two-arm spiral with jitter
(`galaxy.systemLayout`). The build step must produce system centres this way (or by a force layout seeded from it). Which systems
go near the core is undecided; in the prototype it is simply list order.

## 6. Accessibility notes

- Controls are real `button` / `a` / `input` + `label`. Focus ring is the accent colour, 2px, offset 2px.
- All text pairs in `tokens.json` pass AA. Light accent `#A85F00` is at 4.5:1, right on the limit: do not use below 14px.
- Star hit areas at system zoom are about 26px, **below 44px**. Mitigation in the design: every star is also reachable by Tab and
  through the connected-stars list. A list view of the focused system is still needed.
- No arrow-key or Esc handling exists in the prototype.
- The 21 system hues are not distinguishable by colour alone. Always show the label.

## 7. Intentionally not pixel-exact

- Star positions, field stars and the scatter in the 20 non-Finance systems are seeded noise, not data.
- The mini locators on the topic hub and the Belgium page are positioned by eye.
- The home galaxy band is a flattened, cropped variant of the world, not a separate layout.
- Durations and easing are starting values, untested by eye.

## 8. Open questions for waldo

- Wordmark: the header says "BC Observatory", the home title says "Business Central Galaxy". One name or two?
- Objects have no `system` field in the excerpt. "Sales system" for Table 18 is inferred from the namespace.
- Can the pipeline tell which member changed in which version? The member table's "Changed in" column depends on it.
- `links.objects` on a localization mixes changed W1 objects and the country's own objects (104000, 104059). The page needs them split.
- Is diff data mostly additions? If so, a single-column "what BE adds" list beats side-by-side, especially on a phone.
- All page copy (home intro, section titles, card notes, empty states) was written by the designer and needs your voice.
