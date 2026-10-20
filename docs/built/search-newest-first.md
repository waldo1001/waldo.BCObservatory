# Built, deviations: docs/specs/search-newest-first.md (2026-10-19)

## 12. Built, deviations (2026-10-19)

**Built (one League build, all three phases; not committed by the builder, the League commits checkpoints).**

- Phase 1: `packages/search/src/score.ts` gains `byDate` and `search(..., { sort: "match" | "date" })`;
  `site/src/scripts/search.ts` gains `dated` on the seven groups, `Sort`, `sortOf`, `showsSort`, the `sort` argument of
  `resultsHtml` (sorted before the caps, only on a dated tab, never on All), and in `mountSearch` the state, `?sort=date`
  in the URL (only while a dated tab is open), `paintSort` and the click handler; `site/src/pages/search/index.astro`
  has the switch markup and its CSS (with `.sr-sort[hidden] { display: none }`, because the flex rule would otherwise
  override `hidden`).
- Phase 2: `weekStart` in `pipeline/render/search.ts` (null for anything that is not an ISO week id, also week 54 and a
  week 53 of a year without one), and `pageRecord` dates a digest by it.
- Phase 3: MCP `search` takes `sort: "match" | "date"` (schema enum, `toolSearch`, header "keyword, newest first" and the
  semantic note, description sentence), `whats_new` description names digests, MCP 0.8.0
  (`packages/mcp/package.json`, `server.ts` VERSION, `plugin/README.md`), plugin 0.3.2 (`plugin.json`,
  `.claude-plugin/marketplace.json`, `plugin/README.md`), `packages/mcp/README.md` paragraph, `bc-whats-new` step 2,
  `AGENTS.md` clause.
- Tests: spec tests 1-4 (`search-core`), 6-11 (`live-search`; 6 and 7 and 8 and 11 as `resultsHtml` assertions), 12-15 and
  18 (`mcp`), 16-17 (`search-index`). Tests 5 and 14 are the existing tests staying green plus an assertion that the
  default answer has no "newest first".

**Verified.**

- `npm run typecheck`: clean.
- `npm test`: see the League's measured run. The builder's console truncates the output of `npm test` (the
  `--test-reporter` flags did not reach the runner through `npm test`), so the pass and fail counts are not in this file.
  The one failure the builder found itself was its own wrong expectation in test 3 (a GA month sorts after every day of
  that month under newest first: `"2026-10-05"` before `"2026-10"`), fixed.
- Not run, operator steps (not a command the builder may run): `npm run site:build` and `scripts/site-size.ts` (byte deltas for
  D101), the ten browser checks of the spec's section 7, the phase 2 derive and its real-data check, driving the built
  MCP bundle over stdio.

**Spec versus measured.** No byte numbers measured: the site size and the search chunk delta are operator steps.

**Deviations.**

- D101's "Measured" line says the byte deltas are operator steps instead of giving them.
- The spec's test 5 and 14 are existing assertions; no new test file.
- None else.

**Operator steps still open.**

1. `npm run site:build` on Node >= 22.12 and `npx tsx scripts/site-size.ts site/dist` before and after (spec section 7);
   append the byte deltas to D101.
2. The browser checks 1-10 of section 7 on the built site.
3. After the merge, the derive: `npm run nightly -- --stages derive` (AGENTS.md "Running things"); check the six digest
   records carry the dates of section 7 and `git diff --stat origin/main -- content` is empty.
4. The MCP release: `gh workflow run publish-mcp.yml --ref main` (D40; needs "Allow npm publish" on npmjs.com).

## Definition of Done

- [ ] Tests 1-18 pass; `npm run typecheck` is clean. Typecheck passed; the test run is measured by the League (not confirmed by the builder).
- [ ] The site builds; `scripts/site-size.ts` shows only `search/index.html` grew. Not passed: operator step.
- [ ] Section 7's browser checks 1-10 pass on the built site. Not passed: operator step.
- [ ] After the phase 2 derive the six digest records carry the dates of section 7. Not passed: needs the derive.
- [ ] The MCP bundle answers the section 7 calls over stdio; MCP 0.8.0 and plugin 0.3.2 in every place of task 11. Versions passed; the stdio drive is an operator step.
- [x] `AGENTS.md`, `packages/mcp/README.md` and `bc-whats-new` say what `sort: "date"` does. Passed.
- [x] D101 appended to docs/DECISIONS.md; PLAN M39 marked shipped; HANDOFF entry moved. Passed (D101 without byte deltas).
- [ ] The owner's step after the merge: `gh workflow run publish-mcp.yml --ref main` (D40). Open.

## Status lines, to be set by the review

- Frontmatter: `status: implemented`
- Body: `Status: implemented, 2026-10-19 (section 12 records what was built and where it differs). Decision: D101 (appended 2026-10-19). Milestone: M39. Owner: waldo.`

## Edits to `CLAUDE.md`

None.
