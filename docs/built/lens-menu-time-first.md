# Built, deviations: docs/specs/lens-menu-time-first.md (2026-10-21)

## 12. Built, deviations (2026-10-21)

Built (uncommitted by the builder; the League commits): `MENU_GROUPS` in `site/src/scripts/galaxy-core.ts` now starts
with Time, then Version, Type, Tier, Coverage, Country, Source; the three tests of section 5 are in
`tests/unit/galaxy-core.test.ts`; the comments at `galaxy.ts:14-16` and `Galaxy.astro:6` list this week first. D103
appended, PLAN M41 shipped, HANDOFF entry moved.

Verified: `npm run typecheck` clean; `npm test` run after the change (see the League's measured run). Red: test 1
(group ids) was written before `MENU_GROUPS` changed.

Deviations: none in the code. Operator steps open (not runnable in operator mode): the site build on Node 22
(`npm run site:build` with Node 22 first on PATH, spec section 7 step 2), the browser checks of step 3 and the live-site
check of step 5. The comment at `galaxy.ts` is re-wrapped over three lines instead of two.

## Definition of Done

- [x] `npm test` green with the three tests (League's measured run decides); test 1 written before the change.
- [x] `MENU_GROUPS` starts Time, Version; the rest unchanged.
- [x] Comments at `galaxy.ts` and `Galaxy.astro` list this week before the versions.
- [ ] Site build on Node 22 and browser checks: not run (operator step; not passed, a deviation).
- [ ] Picking `this week` and `BC29`: not run in a browser (operator step).
- [x] D103, M41, HANDOFF done; spec edits in this file.

## Status lines, to be set by the review

Frontmatter: `status: implemented`

Body: `Status: implemented, 2026-10-21 (section 12 records what was built and where it differs). Decision: D103 (appended 2026-10-21). Milestone: M41. Owner: waldo.`
