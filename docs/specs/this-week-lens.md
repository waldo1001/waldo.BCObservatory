# This-week rings only under the this-week lens, header pill off the home page

Status: implemented, 2026-10-07. Decision: D71 (amends D70). Owner: waldo.
Scope: the galaxy's "landed this week" marks (`site/src/scripts/galaxy.ts`) and the header pill "N new this
week" (`site/src/layouts/Base.astro`, D70). Nothing in the pipeline changes; `data/graph/landed.json` stays as it
is. Numbers are measured on the data at `573ac6ae5` (anchor 2026-10-07).

## 1. Goal

Make the gold rings opt-in. They mark the hubs that a video or post of the last 7 days links to, and they were
drawn on every lens at every level. On 2026-10-07 that is 99 hubs for 74 items (20 items link no hub at all), so
the overview flashed everywhere and the rings stopped pointing at anything. After this change the rings appear
when the reader asks for them, by choosing the this-week lens, and are absent otherwise.

Second, the home page showed the same control twice: the header pill "74 new this week" (D70, every page) and the
lens chip "this week 99" in the galaxy's lens bar. D70 already explains the two numbers (the pill counts videos and
posts, the chip counts the stars they light, as every lens chip does). The duplication goes; the numbers stay.

## 2. What exists

| Where | What it does today |
|---|---|
| `galaxy.ts` lines 130-135 | `landedMedia` (item ids) and `lit` (hub ids) from `graph/landed.json`; older graphs fall back to `lit_at` within 7 days of the browser date |
| `galaxy.ts` line 157 | the `landed` lens, label "this week", `match` = `lit.has(n.id)` |
| `galaxy.ts` lines 456-466 | the rings: gated on `lit.size` only; pulse scale .7 to 1.25, opacity .9 to 0, 2400 ms; static double ring under reduced motion |
| `galaxy.ts` line 251 | `animating()` keeps the frame loop alive while `lit.size > 0` and the view is not tilted |
| `galaxy.ts` lines 449, 595 | media bodies (triangle video, bar post) beside hubs at system and star level, `colors.mediaNew` when landed |
| `Base.astro` lines 42-46 | the pill, `href=#lens=landed`, count from `landed()` in `lib/state.ts` (items) |
| `galaxy.ts` `renderChrome` | lens chips show `lensSet.size` (stars) while on |
| `lib/questions.ts` | "What is new this week?" links to `#lens=landed` |

## 3. Behaviour contract

1. The rings and their pulse draw only while the active lens is `landed`, at every level (galaxy, system, star).
   Under `prefers-reduced-motion: reduce` the static double ring follows the same rule.
2. With any other lens, or no lens, the landed hubs are plain stars. The animation loop does not run for them.
3. The accent colour of the week's media bodies (`colors.mediaNew`) stays as it is on every lens. It colours a body
   that is drawn anyway and it is what the panel's "Landed in ..." rows point at. Not a defect; do not "fix" it.
4. The header pill renders on every page except the home page. On the home page the lens chip is the one control.
5. The lens chip keeps the star count. The panel heading under the lens already reads "N videos and posts landed",
   which bridges the item count on the pill and the star count on the chip.
6. Every entry into the lens (chip, pill, questions menu, a pasted `#lens=landed` URL) turns the rings on. Leaving
   the lens (chip again, the Galaxy crumb, another lens) turns them off.

## 4. Acceptance criteria

- Home page, idle overview: no gold ring, no pulse, the galaxy is static when nothing else animates.
- Click "this week": the chip reads the star count (99 on this data), the rings pulse on the lit hubs. Click again:
  rings gone.
- Open a system while the lens is on: its lit hubs still carry the ring.
- The home page has no header pill. Every other page has it, and it lands on the home page with `#lens=landed` and
  the rings on.
- Reduced motion: static double ring, only while the lens is on.
- `npm test` passes with the new predicate test.

## 5. Implementation

- `site/src/scripts/galaxy-core.ts`: `landedRingsOn(lensId)` = `lensId === "landed"`. Pure, tested, greppable.
- `site/src/scripts/galaxy.ts`: the ring block and `animating()` both gate on `landedRingsOn(lens?.id)`; header
  comment updated.
- `site/src/layouts/Base.astro`: the pill renders when `week.count > 0 && section !== "home"`.
- `site/src/pages/index.astro`: passes `section="home"` (the prop otherwise only feeds `aria-current` on the nav,
  and no nav id is "home").
- `tests/unit/galaxy-core.test.ts`: one test for the predicate.
- `docs/DECISIONS.md` D71, `docs/specs/galaxy-views.md` phase 2 bullet pointed here.

## 6. Test plan

Unit: `landedRingsOn("landed")` is true; `"version:30"`, `"q:sift"`, `"type:topic"`, `""`, `null`, `undefined`
are false. Browser: section 4, on the built site, dark theme, once with reduced motion emulated.

## 7. Risks

- The lens at level 1 with 99 hits draws no constellation lines (`lens.lines` is unset for `landed`), so the rings
  are the only marker under the lens. Intended.
- A graph without `landed.json` (older data) still falls back to `lit_at`; the gate applies the same way.
- Readers who learned the rings as "always there" lose the ambient signal. The pill on every other page and the
  chip on the home page are the replacement.

## 8. Files

`docs/specs/this-week-lens.md`, `site/src/scripts/galaxy-core.ts`, `site/src/scripts/galaxy.ts`,
`site/src/layouts/Base.astro`, `site/src/pages/index.astro`, `tests/unit/galaxy-core.test.ts`,
`docs/DECISIONS.md`, `docs/specs/galaxy-views.md`.

## 9. Definition of Done

Section 4 holds on the built site; `npm test` green; D71 appended; committed on main, not pushed (the owner
rebases onto the nightly checkpoints and pushes).
