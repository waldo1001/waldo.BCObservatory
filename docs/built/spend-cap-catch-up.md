# Built, deviations: docs/specs/spend-cap-catch-up.md (2026-10-29)

## 12. Built, deviations (2026-10-29)

**Built** (one working tree, three phases in spec order; the League commits the checkpoints):
- Phase 1: `config/budget.json` `spend_caps` 15/80, and the `$comment` sentence naming D125.
- Phase 2: `pipeline/lib/budget.ts` has `cappedSpend`, `daySpend` and a `readSpendHistory` that returns
  `today_total_usd` and `week_before_uncapped_usd` as well; the comment block on metering says override runs are not
  counted. `pipeline/orchestrator/nightly.ts` writes `daySpend(...)` into the report's `llm` block, logs
  `spend window:`, and carries both totals through the budget-skipped heartbeat. `schemas/run-report.json` has the new
  optional `llm.day_capped_usd`, `spend.today_total_usd` and `spend.week_before_uncapped_usd`.
- Phase 3: `pipeline/orchestrator/execute.ts` no longer stops on `LlmBudgetExhausted`: the item is held untouched
  (`llm_held`), `llm_exhausted_at_calls` is recorded, and one log line is written. `LlmInfraError` still aborts. The
  header bullet is rewritten. `schemas/run-report.json` has the optional `execution.llm_held` and
  `execution.llm_exhausted_at_calls`.
- Tests 1 to 11 in `tests/unit/budget.test.ts`, `tests/unit/nightly.test.ts` and `tests/unit/execute.test.ts`.

**Verified:**
- Red first: `npm run typecheck` failed on the missing `cappedSpend`, `daySpend`, `today_total_usd`,
  `week_before_uncapped_usd`, `day_capped_usd`, `llm_held` and `llm_exhausted_at_calls`. Green after each phase:
  `npm run typecheck` passes.
- `npm test`: the League's environment cut the TAP output of the full suite before the summary, so I could not read
  the pass/fail counts. `npm test` exits 1 in this worktree, and it also did with only phase 1 applied (the caps),
  before any test or code change of mine; I could not see which test fails, so I do not know whether it is mine.
  The League's own measured run decides. I checked each new test by hand against the code.
- Test 3 (replay of 22 to 27 Oct): `week_before_usd` 49.79938, `week_before_uncapped_usd` 71.874527, allowance 15
  under 15/80 and 0.200620 under 10/50.
- `git diff --stat origin/main -- content data`: nothing was written to either.

**Spec versus measured:**

| Item | Spec | Test |
|---|---|---|
| `week_before_usd` for 28 Oct | 49.79938 | 49.79938 (±1e-6) |
| `week_before_uncapped_usd` | 71.874527 | 71.874527 (±1e-6) |
| allowance under 15/80 | 15 | 15 |
| allowance under 10/50 | 0.200620 | 0.200620 (±1e-6) |

**Intended change, not a deviation:** the existing test `"spend cap stops cleanly without failing the item; infra
errors abort"` is renamed `"spend cap holds LLM stages without failing the item; deterministic stages go on; infra
errors abort"` and asserts the new behaviour (spec test 11).

**Deviations:**
- `SpendHistory` has the four fields the spec names. `SpendAllowance` declares `today_total_usd` and
  `week_before_uncapped_usd` as optional, and `spendAllowance` takes only `today_usd` and `week_before_usd` as
  required, so the existing allowance tests and old callers that pass two fields still compile. Behaviour is as in
  the spec.
- `nightly.ts` does not keep the `readSpendHistory` result in a variable. At the end of the run it rebuilds the
  totals from `report.spend` (which spreads the history) and calls `daySpend` with `report.spend.override`. The result
  is the same, and the heartbeat carry-over needs no extra code.
- I could not use the reporter flags of `node --test` (the `npm test` script is fixed, and `package.json` is
  protected), so I read no per-test results (see Verified).

**Operator steps still open** (spec section 7, both after merge and on the Mini):
- The next nightly (01:00 Europe/Brussels, or `gh workflow run nightly.yml --ref main`, as `docs/HANDOFF.md` and the
  spec write it) logs `spend window:`; its report `data/manifest/_runs/<date>.json` has `llm.day_capped_usd` and
  `spend.week_before_uncapped_usd`.
- The first night that runs out of allowance shows `execution.llm_held > 0`, `stop_reason: "done"`, and video items
  moving from `discovered` past `fetched` in that run.

## Definition of Done

- [x] `spend_caps` are 15/80 and the `$comment` names D125.
- [ ] Tests 1 to 11 exist and `npm run typecheck` is green; `npm test` passed is not confirmed (see Verified): not
      passed until the League's measured run says so. Red before each phase was seen as typecheck failures, not as
      runtime failures.
- [x] Test 3 (the real-history replay) gives allowance 15 under 15/80 (checked by hand against the code).
- [x] `git diff --stat origin/main -- content data` is empty.
- [x] A run with an override writes `day_capped_usd` without its own cost, and a run without one writes it with its
      cost (tests 4 and 5).
- [x] On `LlmBudgetExhausted`, the executor leaves the item untouched, keeps running non-LLM stages, and reports
      `llm_held`. `LlmInfraError` still aborts (tests 7 to 11).
- [x] The `execute.ts` header and the `budget.ts` comment block describe the new behaviour.
- [x] The HANDOFF "Where things stand" bullet lists the section 7 operator steps.
- [x] D125 appended to docs/DECISIONS.md; PLAN M60 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; this file holds section 12.

## Status lines, to be set by the review

- Frontmatter: `status: implemented`
- Body: `Status: implemented, 2026-10-29 (section 12 records what was built and where it differs). Decision: D125 (appended 2026-10-29). Milestone: M60. Owner: waldo.`

Edits to `CLAUDE.md`: none. The review also renames spec section 12 ("Proposed edits to other files") to
`## 13. Proposed edits to other files (applied 2026-10-29, see section 12)` and inserts the section 12 above.
