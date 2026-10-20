# Built, deviations: docs/specs/topic-link-second-chance.md (2026-10-19)

## 12. Built, deviations (2026-10-19)

Built by waldo.Jarvis's League (operator mode), phase 1 only. Phase 2 (the backfill) is an operator step.

- **Code** (`pipeline/link/topics.ts`): `SecondChance`, `second` on `TopicLinkUnit` and `Pending`, `secondChanceOf`,
  `exclude` on `videoUnit`/`postUnit`/`changeUnit` (internal helper `candsOf`: null only when the systems have no hub
  before exclusion), `gatherTopicUnits(…, second)`, `planTopicCalls` (first-round units first, second-chance units in
  calls of their own), `topicCallPrompt` (the "Second pass" line and `rejected` for a second-chance call only),
  `linkTopics` steps 1-6 and `run.second {due, called, matched}`. `SYSTEM` and `PROMPT_VERSION` unchanged.
- **Script** (`scripts/link-topics.ts`): prints `rejected: <path>: <reason>` under a unit with `second`; the JSON
  summary carries `run.second` through the run object.
- **Tests** (`tests/unit/topic-links.test.ts`): tests 1-11 of the spec's section 5. The existing fake's hub-line lookup
  changed from "line 2 of the prompt" to "the line starting `[{"id"`" so it also reads a second-pass prompt; no other
  existing test changed.
- **Verified**: `npm run typecheck` clean. `npm test` exits 1 in the League sandbox and its output is truncated
  (the middle, where the topic-link tests print, is cut; reporter flags are ignored by `tsx --test`), so the per-test
  result is not confirmed by the builder: the League's own measured run decides. Red evidence: before the code, the
  test file imports `secondChanceOf`/`postUnit(…, exclude)` that did not exist.
- **Spec vs measured**: none measured; the numbers of spec section 7 need the backfill.
- **Deviations**:
  - `Pending` also carries `rejected` (the dropped hubs' title, path and reason, resolved in `gatherTopicUnits`,
    which has the candidate list); the contract named only `second`. Internal.
  - A second-chance call's evidence items all carry `rejected` (an empty list when no dropped hub is still a topic
    page), so the item shape is the same within one call.
- **Operator steps still open**: phase 2 of the spec (section 6), commands as written in HANDOFF; the derive on the
  Mini after the push (RUNBOOK "Derived data", D81) changes no page.

## Definition of Done

- [ ] Tests 1-11 pass, existing tests unchanged, typecheck clean: typecheck clean and tests written; the test run
      could not be read in the builder's sandbox (see Verified). Not confirmed.
- [x] First-round prompt byte-identical (test 4 holds the stored string); `SYSTEM` and `PROMPT_VERSION` unchanged.
- [x] `run.second` is on `TopicLinkRun`, which `topic_links` in the run report is typed from (`Omit<TopicLinkRun, "errors">`).
- [ ] Phase 2 done or deferred by the owner: not done, an operator step (deviation, open).
- [x] `docs/DECISIONS.md` D102 appended (measured numbers pending phase 2), `docs/PLAN.md` M40 shipped, `docs/HANDOFF.md`
      moved to "Where things stand".

## Status lines, to be set by the review

- Frontmatter: `status: implemented`
- Body line: `Status: implemented, 2026-10-19 (section 12 records what was built and where it differs). Decision: D102 (appended 2026-10-19). Milestone: M40. Owner: waldo.`

## Edits to `CLAUDE.md`

None asked.
