---
issue: 45
status: draft
---

# Videos and posts orbit their hub in the galaxy

Status: proposed, 2026-10-25. Decision: D113 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M50
(reserved). Owner: waldo.
Scope: the flat galaxy view's media bodies (`site/src/scripts/galaxy.ts`, `site/src/scripts/galaxy-core.ts`) and their
unit tests. Every claim below was verified against the tree at `65942d74ad` on 2026-10-25. Not in scope: the tilted view
(`mediaSpot`, the media plane), the pipeline and `data/graph/`, the panel's media rows, the phone locator strip.

## 1. Goal

D03 (`docs/DECISIONS.md:9`) names the galaxy's sources "orbits", and the About page says it in public copy:
"Videos and posts orbit the hubs they link to" (`site/src/about/about.md:36`). The canvas does not orbit. At system
and star level it paints each hub's media bodies on a fixed fan: `-π/2 + i·π/6` at radius `d/2 + 10` from the star,
the same spot every frame (`site/src/scripts/galaxy.ts:514-527`). Nothing moves unless a fly, a tilt, a label fade, the
star-drawing intro or the this-week pulse runs (`animating()`, `galaxy.ts:293`).

Measured on the committed `data/graph/summary.json` (last changed in `66e014a446`): 1,165 nodes, 398 of them carry
media bodies (`mb`), 1,009 bodies in all, at most 6 per hub (`MEDIA_BODIES = 6`, `pipeline/link/graph.ts:47`); per hub
1 body: 170, 2: 82, 3: 42, 4: 29, 5: 17, 6: 58. The busiest systems draw 164 (development), 136 (copilot) and 112
(sales) bodies. The fan covers at most 150° (six bodies, 30° apart), so bodies never overlap today and will not after.

After this change:

- At system and star level (level 2 and 3) in the flat view, each hub's videos and posts circle it slowly: one turn in
  40 seconds, spaced evenly around the full circle, at today's radius.
- Neighbouring hubs are not in step: each hub starts at its own phase, taken from its id.
- With `prefers-reduced-motion: reduce` nothing moves and the bodies keep today's fan, pixel for pixel.
- The tilted view, the panel, the legend and the phone strip do not change.
- While orbits are the only motion, the canvas redraws at most 30 times a second.

## 2. Reader-facing behaviour, after

- Galaxy home, a system or a star in focus: triangles (videos) and bars (posts) travel round their star, all in the
  same direction (clockwise on screen), evenly spaced. A hub with one body has one moon; with four, four moons 90°
  apart. Colours, sizes and the 0.3 dimming of hubs outside the focused star's neighbourhood (`galaxy.ts:519`) stay.
- The bodies are decoration on the flat view: they have no hit test, no label and no focus stop today (the panel lists
  them, `galaxy.ts:1222`), so moving them moves no click target. Nothing to freeze on hover.
- Tilt (T): the planes slide out as today. The tilted media plane uses `mediaSpot` (`layers-core.ts:103`), which this
  spec does not touch, so media items stay put and clickable there. Flattening returns to orbiting bodies.
- Reduced motion: identical to today.
- Level 1 (the whole galaxy): no bodies are drawn (`level >= 2`, `galaxy.ts:515`), so no motion and no extra frames.
- A background tab: browsers stop `requestAnimationFrame`; nothing else is needed.
- The About sentence (`about.md:36`) becomes literally true; no copy changes.

## 3. Decisions

Draft D113:

- **D113 Videos and posts orbit their hub (2026-10-25, M50).** At level 2 and 3 in the flat galaxy, a hub's media
  bodies circle it: evenly spaced around the full circle, one turn per 40 s (`ORBIT_MS`), clockwise, at the existing
  radius `d/2 + 10`, each hub at a phase hashed from its id. Under `prefers-reduced-motion` and in the tilted view
  nothing orbits and the bodies keep the D-era fan (`-π/2 + i·π/6`). While orbits are the only motion the loop draws at
  most every 33 ms. Spec `docs/specs/media-orbits.md`.

Rejected:

- **Keep the 150° fan and rotate it as a block.** It reads as a clock hand sweeping, not as moons; even spacing is what
  makes it an orbit.
- **Different speeds per body (Kepler-like, inner faster).** All bodies sit at one radius; varying speed would make
  same-hub bodies overtake and overlap. Constant angular speed keeps them apart for free.
- **Orbit in the tilted view too.** The media plane's items are clickable things with labels and lines to hubs
  (`layers-core.ts:154`); moving them breaks aiming and redraws every line each frame. The tilt is the reading view.
- **Freeze on hover or while the panel is open.** Bodies are not targets on the flat view (section 2), so a freeze
  rule would add state for no benefit. Revisit if bodies ever become clickable.
- **A slower orbit (120 s per turn).** At the radius in use (about 15 px for a mid-size star) that is under 1 px/s and
  reads as a rendering glitch. 40 s is about 2.4 px/s: visibly moving, still calm.
- **Draw at full frame rate.** The this-week pulse does (`galaxy.ts:293`), but it only runs under one lens; orbits run
  whenever a system is open, so they get the 30 fps cap to spare laptop batteries.

## 4. Contract

New pure exports in `site/src/scripts/galaxy-core.ts` (no DOM, unit-testable):

```ts
/** D113: one turn of a hub's media bodies, in ms. */
export const ORBIT_MS = 40_000;
/** D113: frames while orbits are the only motion are at least this far apart. */
export const ORBIT_FRAME_MS = 33;
/** D113: a hub's start angle in [0, 2π), stable per id (FNV-1a over the id). */
export function orbitPhase(id: string): number;
/** D113: body i of k around its hub. t === null: the static fan (-π/2 + i·π/6, reduced motion and today's look);
 *  else evenly spaced, -π/2 + phase + 2π·i/k + 2π·(t mod ORBIT_MS)/ORBIT_MS. */
export function bodyAngle(i: number, k: number, t: number | null, phase: number): number;
/** D113: do media bodies orbit now? */
export function orbiting(s: { level: number; tilted: boolean; reduced: boolean; bodies: boolean }): boolean;
```

`orbiting` is true when `level >= 2 && !tilted && !reduced && bodies`. `bodies` is "the focused system has at least
one node with `mb`".

Changes in `site/src/scripts/galaxy.ts`:

- The media-body block (`galaxy.ts:514-527`) computes `ang = bodyAngle(i, n.mb.top.length, moving ? t : null,
  orbitPhase(n.id))` where `moving = orbiting(...)`.
- `animating()` (`galaxy.ts:293`) gains `|| orbitNow()`, with `orbitNow = () => orbiting({ level, tilted: tilted() ||
  !!tiltAnim, reduced: reduce.matches, bodies: !!focusSys && sysHasBodies.has(focusSys.id) })`; `sysHasBodies` is a
  `Set` of system ids built once from `g.nodes`.
- `loop()` (`galaxy.ts:294`): when the only reason to animate is `orbitNow()` (no `anim`, no `tiltAnim`, no label
  fade, no `drawing()`, no pulse) and less than `ORBIT_FRAME_MS` passed since the last draw, it skips `draw(t)` and
  requests the next frame.

No data shape changes. Example: hub `topic/sales-invoicing` with 3 bodies at `t = 10_000` and phase `p` draws them
at `-π/2 + p + π/2`, `+ 2π/3` and `+ 4π/3` from there.

## 5. Test plan (write first)

In `tests/unit/galaxy-core.test.ts`:

1. `bodyAngle(i, k, null, anything)` equals `-π/2 + i·π/6` for i = 0..5, k = 6 (today's fan, reduced motion).
2. `bodyAngle(0, 1, 0, 0)` is `-π/2`; `bodyAngle(0, 1, ORBIT_MS / 4, 0)` is `0` (a quarter turn clockwise on screen).
3. Even spacing: for k = 4 at any t, consecutive bodies differ by `π/2`.
4. Periodic: `bodyAngle(i, k, t, p) === bodyAngle(i, k, t + ORBIT_MS, p)` up to 1e-9.
5. `orbitPhase` is in `[0, 2π)`, the same for the same id, and differs for `topic/a` and `topic/b`.
6. `orbiting`: true for level 2 and 3 untilted, not reduced, with bodies; false at level 1, when tilted, when reduced,
   and without bodies.

## 6. Tasks

One phase, ships alone; it rewrites no content pages.

1. Write the tests of section 5 (they fail: the exports do not exist).
2. Add `ORBIT_MS`, `ORBIT_FRAME_MS`, `orbitPhase`, `bodyAngle`, `orbiting` to `galaxy-core.ts`.
3. Wire them into `galaxy.ts`: the media-body block, `animating()`, the 30 fps skip in `loop()`, `sysHasBodies`.
4. Run the unit tests, typecheck, build the site and check it in a browser (section 7).
5. Ship-time edits (section 11).

## 7. Verification

- `npm test` (or `node --test` on `tests/unit/galaxy-core.test.ts`) green; `npx tsc --noEmit -p site` clean.
- Site build: `nvm use 24 && NODE_OPTIONS=--max-old-space-size=8192 npm run build -w site` (memory
  `bcobs-local-site-build-node22`), serve `site/dist` under the base path.
- In a browser: open a system (e.g. Sales). Two screenshots 2 s apart show the media bodies in different spots around
  the same stars; a hub with two bodies has them on opposite sides. Press T: the media plane is static. Flatten: the
  orbits resume. Emulate `prefers-reduced-motion: reduce` and reload: bodies sit on the old fan and do not move.
- At level 1 with no lens, `requestAnimationFrame` stops after the fly settles (no continuous loop).

## 8. Later, not in this spec

- Clickable bodies on the flat view (hover title, click opens the page), which would then need a freeze-on-hover rule.
- A media body for each hub it links to in the tilted view (`mediaSpot` uses only `hubs[0]`, `layers-core.ts:104`).
- Two rings when a hub has more than six bodies (only if `MEDIA_BODIES` grows).

## 9. Risks and open questions

- **Battery and CPU with a system open for a long time.** Mitigated by the 30 fps cap; the full `draw()` already runs
  per frame under the this-week pulse without complaints. Default: ship with the cap, measure only if someone reports it.
- **Labels jitter.** Star captions are placed per frame (`placeStarLabels(shown, taken, t)`, `galaxy.ts:489`) but do
  not depend on body positions, so they should not move. Default: if they visibly shuffle at 30 fps, keep the cap and
  report it in section 12.
- **Is 40 s right?** Owner's taste. Default: 40 s; `ORBIT_MS` is one constant.

## 10. Files

- Changed: `site/src/scripts/galaxy-core.ts`, `site/src/scripts/galaxy.ts`, `tests/unit/galaxy-core.test.ts`.
- Ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [ ] The six tests of section 5 exist and pass; the existing unit tests still pass.
- [ ] Typecheck clean; the site builds.
- [ ] Browser check of section 7 done: bodies move at level 2 and 3, static under reduced motion and in the tilt.
- [ ] No change under `content/`, `data/` or `pipeline/`.
- [ ] D113 appended to docs/DECISIONS.md; PLAN M50 marked shipped; HANDOFF entry moved from "Open specs" to "Where
  things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
  implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
  status lines into docs/built/media-orbits.md; the PR's review moves them in (sdd-build section 4, sdd-review
  section 6).

## 12. Proposed edits to other files (not applied)

- `docs/DECISIONS.md`: append the D113 text of section 3.
- `docs/PLAN.md` section 5, before `v0.2+`: `| **M50 Media orbits** | videos and posts circle their hub at level 2 and
  3 in the flat galaxy, static under reduced motion and in the tilt (`docs/specs/media-orbits.md`, D113, proposed) |
  small | none: site only |`
- `docs/HANDOFF.md` "Open specs": the entry registered with this spec; at ship time move it to "Where things stand".
