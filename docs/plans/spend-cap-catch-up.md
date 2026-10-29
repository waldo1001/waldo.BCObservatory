# Plan: spend-cap-catch-up (issue #56, D125, M60)

Spec: `docs/specs/spend-cap-catch-up.md`. Status: approved by the owner; built 2026-10-29.

Blast radius: **risky**. It touches `pipeline/orchestrator/` (`nightly.ts`, `execute.ts`), `config/budget.json` and
`schemas/run-report.json`. Under operator mode a risky plan stops here, so no code has been edited.

## Phases (each its own commit, tests first)

1. **Caps.** Set `config/budget.json` `spend_caps` to 15/80 and add the D125 sentence to the `$comment`. Run `npm test`
   to confirm that the existing tests read the caps from `budget()` and stay green.
2. **Override spend not counted.**
   - Tests 1 to 6 in `tests/unit/budget.test.ts` and `tests/unit/nightly.test.ts`, run red first.
   - `pipeline/lib/budget.ts`: add `cappedSpend` and `daySpend`, extend `readSpendHistory` with `today_total_usd` and
     `week_before_uncapped_usd`, and update the comment block at lines 130-133.
   - `pipeline/orchestrator/nightly.ts`: use `daySpend` at the `llm` block, carry both totals through the heartbeat
     report, and add the `spend window:` log line and the new `spend` fields.
   - `schemas/run-report.json`: add optional `llm.day_capped_usd`, `spend.week_before_uncapped_usd` and
     `spend.today_total_usd`.
3. **Executor goes on.**
   - Tests 7 to 11 in `tests/unit/execute.test.ts`, run red first. Rewrite the existing test at line 88 as test 11
     describes.
   - `pipeline/orchestrator/execute.ts`: on `LlmBudgetExhausted`, `settle` no longer sets `stop`. It holds the item
     untouched, counts `llm_held`, records `llm_exhausted_at_calls` and logs once. `LlmInfraError` still aborts. Update
     the header bullet at lines 8-9.
   - `schemas/run-report.json`: add optional `execution.llm_held` and `execution.llm_exhausted_at_calls`.

## Ship-time edits (operator mode)

- `docs/built/spend-cap-catch-up.md` holds the spec's section 12, the Definition of Done and the two status lines. The
  spec and `CLAUDE.md` are not edited.
- `docs/DECISIONS.md` gets D125 appended, `docs/PLAN.md` flips M60 to shipped, and `docs/HANDOFF.md` moves the entry
  to "Where things stand".

## Verification

`npm run typecheck && npm test` after each phase. `git diff --stat origin/main -- content data` must be empty.

The checks on the Mini in the spec's section 7 are operator steps.
