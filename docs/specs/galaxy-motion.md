---
issue: 46
status: implemented
---

# The galaxy moves: recency orbits, comets, flight paths, port traffic and turning systems

Status: implemented, 2026-10-25 (built in the owner's session on request; section 12 records what was built and how it
was checked). Decision: D114 (appended 2026-10-25). Milestone: M51. Owner: waldo.
Scope: the galaxy canvas (`site/src/scripts/galaxy.ts`, `site/src/scripts/galaxy-core.ts`), one new graph output
(`data/graph/flights.json`, `pipeline/link/graph.ts`) and its site endpoint. Every claim below was verified against the
tree at `a48fd66dc0` on 2026-10-25. Not in scope: the page galaxies (`PageGalaxy.astro`, `Neighbourhood.astro`), the
phone strip, the tilted view's own motion.

## 1. Goal

D113 made videos and posts circle their hub. The owner asked for more of the D03 metaphor to move
(`docs/DECISIONS.md:9`: "flares = new content, flight path = author footprint"), with every motion saying something about
the data, plus a slow turn of each system round its centre.

After this change:

1. **Recency orbits.** A body's distance from its star and its speed follow its age: this week's sit 6 px past the rim
   and turn fast, two years and older sit 20 px out and turn slowly (Kepler's third law against the D113 radius). Its
   colour runs from the "landed" yellow (`mediaBodyNew`, #FFD27A dark, #A85F00 light) through the week to the body grey
   at 30 days.
2. **Comets.** The first time a system opens in a visit, this week's bodies fly in from beyond the system's rim along
   the line from its centre through their hub, with a short tail, and settle into their orbit (1.8 s each, 140 ms apart).
3. **Flight path.** Under a source lens a comet flies the source's videos and posts hub to hub, oldest first (at most
   the latest 60), the last eight hops trailing; it rests 1.5 s on the last stop and flies again. The lens panel says
   "A comet flies its flight path: N stops, oldest first." Data: `data/graph/flights.json`, built by the nightly's graph
   step, loaded only when a source lens opens.
4. **Port traffic.** At star level, hovering or focusing a port (the "System →" buttons) thickens its dashed edge and
   sends 2 to 6 particles from the star to the port, one per started 10 links.
5. **Turning systems.** Every system turns clockwise round its centre once in 6 minutes at galaxy and system level. It
   freezes with a star in focus, in the tilt and in the list view, and resumes where it stopped.

Under `prefers-reduced-motion` nothing moves: bodies keep the D113 fan (at their recency radius and colour), no comets
or particles, the flight path is drawn whole and still, systems do not turn.

## 3. Decisions

- **D114 The galaxy moves where the data does (2026-10-25, M51).** Text in `docs/DECISIONS.md`.

Rejected: twinkling stars (no data behind it); particles on every port at once (the hairball D03 avoids); comets on
every visit to a system (once per visit says "new" without becoming noise); spin at star level (it would move the star
the camera is centred on and every port).

## 4. Contract

- `galaxy-core.ts`: `ageDays`, `orbitRadius`, `orbitPeriod`, `newness`, `mixHex`, `cometProgress` (`COMET_MS`,
  `COMET_STAGGER_MS`), `FlightStop`, `flightHops`, `flightAt` (`FLIGHT_HOP_MS`, `FLIGHT_REST_MS`), `particleCount`
  (`PARTICLE_MS`), `spinning`, `rotate` (`SPIN_MS`, `SPIN_FRAME_MS`); `bodyAngle` takes an optional period.
- `pipeline/link/graph.ts`: `flights(g, keep)`; `renderGraph` writes `data/graph/flights.json`:
  `{ "source/<id>": [["YYYY-MM-DD", [summary star ids]], ...] }`, oldest first, items linking no summary star left out.
  On 2026-10-25 data: 28 sources, 407 stops, 47 KB.
- `site/src/pages/graph/flights.json.ts`: serves it, `{}` while the file does not exist.
- `galaxy.ts`: nodes keep their baked spot (`home`) and are turned in place each drawn frame (`applySpin`), so hit tests,
  edges, lens lines and labels follow; the tilt's flat ends go through `flatAt` with the same turn. Frame budget:
  full rate for flies, tilts, fades and comets; 30 fps for orbits, the flight and particles; 15 fps when only the spin
  runs.

## 5. Tests

`tests/unit/galaxy-core.test.ts` (nine new tests: age, radius and period, newness, mixHex, comet progress, flight hops
and timing, particle count, spin rule and rotation) and `tests/unit/graph.test.ts` (flights.json in the main graph test,
plus ordering and leaving out items with no star).

## 11. Definition of Done

- [x] Unit tests pass; typecheck clean; the site builds.
- [x] Headless browser measurements of section 12 and screenshots of each motion shown to the owner before the push.
- [x] No change under `content/`; `data/graph/flights.json` left to the nightly.
- [x] D114 appended to docs/DECISIONS.md; PLAN M51 marked shipped; HANDOFF "Where things stand" entry.

## 12. Built, deviations

Built 2026-10-25 on `spec/media-orbits` after D113, by hand.

- Found on the way and fixed: a tilt opened from the URL (`#system=…&tilt=1`) redrew at full rate forever. A star
  caption fading in on the first flat frame left `labelsFading` set, and the tilted frame returned before the caption
  pass that clears it. Live before this change too (120 background fills in 2 s on the deployed site); the tilted path
  now clears the flag.
- Measurements (built site served under the base path, headless Chromium 1280x800, a 2 s window after 3 s settling;
  draws counted as solid full-canvas fills): galaxy 30 draws (15 fps), 2,271 pixels changed; system 60 draws (30 fps),
  35,551 pixels; system tilted from the URL or the button 0; star with a hovered port 60 draws; source lens
  (aardvarklabs-blog, 49 hops) 60 draws, 11,805 pixels, the panel sentence present; every view under
  `reducedMotion: reduce` 0 draws and 0 pixels changed. No page errors.
- Local check only: `flights.json` was generated locally from the committed content (`renderGraph` with today
  2026-10-25; every other graph file came out byte-identical) and not committed. Readers see the flight path after the
  next nightly; until then the source lens has no comet and no panel sentence.
- Not done: no phone check (the strip draws none of this), no battery measurement, no light-theme contrast review of
  the fading colour (the light "landed" amber is borderline AA already, D-galaxy tokens note).
