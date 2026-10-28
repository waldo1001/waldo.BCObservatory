---
issue: 56
status: draft
---

# Catch-up runs stop blocking the nightlies, and free stages run past the spend cap

Status: proposed, 2026-10-28. Decision: D125 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone:
M60 (reserved). Owner: waldo.
Scope: `config/budget.json` `spend_caps`, the spend window in `pipeline/lib/budget.ts`, the run report's `llm` and
`spend` blocks (`pipeline/orchestrator/nightly.ts`, `schemas/run-report.json`), and how the stage executor
(`pipeline/orchestrator/execute.ts`) reacts to `LlmBudgetExhausted`. Every claim below was verified against the tree
at `d95c1217eb` on 2026-10-28. Not in scope: the usage guard token (`BCOBS_USAGE_OAUTH_TOKEN`, D16), the YouTube RSS
404s, quotas, and the post-execute LLM passes, which already stop on their own at the cap (for example
`pipeline/link/topics.ts:278`).

## 1. Goal

The weekly cap (D17) is meant to stop a normal week from running away. Instead, it blocks the nightly for days after
every catch-up the owner starts on purpose.

Evidence, from `data/manifest/_runs/*.json` (`llm.day_cost_usd`, `spend.override`, `execution.stop_reason`):

| run date | day spend | override | stop |
|---|---|---|---|
| 2026-10-06 | $12.32 | yes | done |
| 2026-10-07 | $93.14 | yes | done |
| 2026-10-08 | $139.61 | yes | done |
| 2026-10-10 to 2026-10-14 | $0 each | no | spend-cap, 8 to 11 of 184 to 407 planned items run |
| 2026-10-15 to 2026-10-23 | $1.71 to $8.34 | no | done / llm-calls-max |
| 2026-10-24 | $43.12 | no (carried `today_usd` 43.12 from an earlier run that date) | spend-cap |
| 2026-10-25 | $36.60 | yes | done |
| 2026-10-26 | $35.27 | yes | done |
| 2026-10-27, 2026-10-28 | $0 each | no | spend-cap, 6 and 8 of 528 and 558 planned items run |

- Normal nightlies spend $2 to $12 a night and $26 to $40 a week (17 to 23 Oct: $26.21).
- The two blocked stretches (10 to 14 Oct, and 27 Oct onwards) both follow override runs. `readSpendHistory`
  (`pipeline/lib/budget.ts:158`) sums `llm.day_cost_usd` of the six previous run dates, whether or not a run was
  capped, and `spendAllowance` (`budget.ts:169`) subtracts that from `week_usd: 50` (`config/budget.json:34`).
- When the cap is hit, the executor stops every stage, not only the LLM ones. The first `LlmBudgetExhausted` sets
  `stop = "spend-cap"` (`execute.ts:205`), and the stage loop (`execute.ts:284`) and the worker loop
  (`execute.ts:367`) both end on `stop`. Feed ingest still runs, because it comes before the executor. But the
  yt-dlp fetch and caption stages (`pipeline/caption/fetch.ts`) are deterministic, and they never run. Example:
  Erik Hougaard's video `urLsKPqOSbc` (26 Oct) was discovered by the 28 Oct run and is still `state: discovered`,
  `attempts: 0` (`data/manifest/video/yt-hougaard/urLsKPqOSbc.json`). That run reported `parked: 1` on the youtube
  lane before it stopped.
- `llm.ts` throws `LlmBudgetExhausted` before it starts a call (`pipeline/lib/llm.ts:141`), so a stage that hits it
  has spent nothing. Cache hits are never blocked.

After this change:
- Spend from a run with a cap override (catch-up mode, `--unlimited`, `--night-cap`, `--week-cap`) no longer counts
  toward the night or week cap of a later run.
- The caps are $15 a night and $80 a week.
- When the allowance runs out, the executor keeps running stages that make no LLM call (fetch, caption, render
  inputs). Only items whose next stage needs the LLM wait for the next night.

## 2. Reader- and agent-facing behaviour, after

Nothing changes on the site or in the MCP. What readers see is fewer stale days: a new video or post gets its fetch
and captions the night it is discovered. Its page follows on the first night with allowance left, because extract
and summary need the LLM.

The nightly log changes:
- `spend: $15 allowed (night cap binds)` as today, plus
  `spend window: $X counted, $Y from override runs not counted`.
- On exhaustion: `LLM allowance used up at N calls: LLM stages wait, deterministic stages go on`, once, instead of
  ending the run.

## 3. Decisions

Draft D125 text:

> **D125 Owner-approved spend stays out of the cap window; the cap stops the LLM, not the pipeline.** A run with a
> cap override (catch-up mode D41, `--unlimited`, `--night-cap`, `--week-cap`) records its spend as uncapped. The
> night and week caps sum only capped spend. When the allowance runs out, the executor leaves items whose stage
> needs the LLM untouched and keeps running the rest. Caps raised to $15 a night and $80 a week. Why: catch-ups on
> 7–8 and 24–26 Oct ($233 and $115) blocked ten nightlies, and with them even the free caption fetches. Normal weeks
> cost $26–40. Consequence: an override run's spend is unbounded by design, so the owner bounds it when starting the
> run.

Rejected:
- **Raise the week cap to about $260 so catch-ups fit.** At that level the cap never fires on a normal week, so it
  guards nothing.
- **Reset the window after a catch-up.** That needs state outside the run reports and loses the history that
  explains a bad week.
- **Mark LLM stages on each handler (`llm: true`) and skip them up front.** It works, but every handler would need
  the flag and could get it wrong. `LlmBudgetExhausted` is already thrown before any spend, so treating it as "this
  item waits" is exact without a flag.
- **Exclude only `--unlimited` and catch-up, but count `--week-cap` raises.** A `--week-cap` raise is just as
  deliberate. Counting it would block the following nights the same way (section 9, open question 1).

## 4. Contract

**Run report, `llm` block** (`nightly.ts:606`, `schemas/run-report.json:65`):
- `day_cost_usd`: unchanged, all spend on this run date. Kept for reporting.
- New `day_capped_usd`: the spend on this run date that counts against the caps. It equals the earlier runs' capped
  spend on this date (carried over), plus this run's `cost_usd` if this run has no override, or plus 0 if it does.

**Run report, `spend` block**: `today_usd` and `week_before_usd` now mean capped spend. New informational field
`week_before_uncapped_usd`.

**`pipeline/lib/budget.ts`:**
```ts
/** Spend on one run date that counts against the caps (D125). */
export function cappedSpend(report: any): number;
// 1. llm.day_capped_usd when present
// 2. else 0 when spend.override === true (legacy override report: the whole day was owner-approved)
// 3. else llm.day_cost_usd ?? llm.cost_usd (as reportSpend today)
export interface SpendHistory { today_usd: number; today_total_usd: number; week_before_usd: number; week_before_uncapped_usd: number }
```
`readSpendHistory` uses `cappedSpend` for `today_usd` and `week_before_usd`.
`week_before_uncapped_usd = Σ reportSpend − Σ cappedSpend` over the six previous dates. `reportSpend` stays as it is,
for the total.

**`nightly.ts`:** the carry-over today is `report.spend.today_usd + llmStats().cost_usd`. It becomes
`day_capped_usd = spend.today_usd + (opts.capOverride ? 0 : llmStats().cost_usd)`, and `day_cost_usd` carries all
of the date's spend. To make that possible, `readSpendHistory` also returns the date's total so far (`today_total_usd`,
from `reportSpend`); `day_cost_usd = today_total_usd + llmStats().cost_usd`.

**`execute.ts`:**
- `settle` on `LlmBudgetExhausted`: no longer sets `stop`. It sets `llmOff = true` (once, with a log line), adds the
  item to `ended`, counts `r.llm_held++`, and returns null. The item is left untouched: no attempt, no `fail()`.
- New report fields: `llm_held: number` and `llm_exhausted_at_calls?: number`.
- `stop_reason` stays `"spend-cap"` in the type, for old reports. A run whose only limit was the allowance now ends
  `"done"`.
- `charge()`: once `llmOff` is set, an item's quota stays charged when its stage throws. That is harmless, because
  only items that cannot run that night are affected.

**`config/budget.json`:** `"spend_caps": { "night_usd": 15, "week_usd": 80 }`, and the `$comment` sentence on
spend_caps gains: "night $15 and week $80 since 2026-10-28 (D125): about twice the worst normal week; override runs
are not counted".

Example `llm` block of a catch-up run, followed by a normal nightly on the same date:
```json
{ "calls": 41, "cost_usd": 2.10, "day_cost_usd": 38.70, "day_capped_usd": 2.10 }
```
In that example, the first run (override) spent $36.60 and the nightly after it spent $2.10.

## 5. Test plan (write first)

`tests/unit/budget.test.ts`:
1. `cappedSpend`: `{llm:{day_capped_usd:2, day_cost_usd:9}}` gives 2. `{llm:{day_cost_usd:9}, spend:{override:true}}`
   gives 0. `{llm:{day_cost_usd:9}}` gives 9. `{llm:{cost_usd:4}}` gives 4. Junk gives 0.
2. `readSpendHistory` over seven dates with mixed reports: `week_before_usd` sums only capped spend,
   `week_before_uncapped_usd` sums the rest, and `today_total_usd` is the date's full `day_cost_usd`.
3. Replay of real history: the six reports for 2026-10-22 to 2026-10-27, as committed, run with caps 15/80, give
   2026-10-28 an allowance of $15 (window $49.80: 3.24 + 3.44 + 43.12, with the override days at 0). With the
   old function and caps 10/50, the allowance is 0. Fixture: copies of those six reports, trimmed to their `llm` and
   `spend` blocks.

`tests/unit/nightly.test.ts`:
4. A run with `capOverride` and stubbed `cost_usd: 5`, with an earlier same-date report of
   `day_capped_usd: 1, day_cost_usd: 1`, writes `day_cost_usd: 6, day_capped_usd: 1`. The same run without an
   override writes `6` and `6`.
5. Catch-up mode (`cfg.catch_up.until >= date`) is treated as an override: `day_capped_usd` does not grow.

`tests/unit/execute.test.ts`:
6. Three items in the plan. A's next stage throws `LlmBudgetExhausted`. B has two deterministic stages. C has one
   deterministic stage and then an LLM stage that throws. Expected: A untouched (same state, attempts 0). B advanced
   through both stages. C advanced one stage, then untouched. `stop_reason: "done"`, `llm_held: 2`,
   `failed_attempts: 0`.
7. A batch handler whose result map holds `LlmBudgetExhausted` for each item: every item stays untouched, and the
   next non-LLM item still runs.
8. Regression: `LlmInfraError` still aborts the run (`stop_reason: "aborted"`).
9. Lane case: item X, parked on lane `youtube` behind Y, still runs after an LLM item elsewhere throws
   `LlmBudgetExhausted` (the 28 Oct case). `parked_left: 0`.

## 6. Tasks

**Phase 1 — caps (ships alone, a one-line config change).**
1. `config/budget.json` `spend_caps` to 15/80, and the `$comment` sentence.

With the old window and the new caps, the 10-29 and 10-30 nightlies are still blocked: their windows are $118.44
and $115.00. Phase 1 alone unblocks from the 10-31 run ($71.87, $8.13 allowed).

**Phase 2 — override spend not counted.**
2. Tests 1 to 5.
3. `cappedSpend`, `readSpendHistory` with the new fields, and `spendAllowance` unchanged.
4. `nightly.ts`: `day_capped_usd` and `day_cost_usd` from the totals, the new log line, and
   `week_before_uncapped_usd` in the report.
5. `schemas/run-report.json`: `day_capped_usd` (optional, so old reports stay valid) and `week_before_uncapped_usd`
   (optional).

**Phase 3 — the executor goes on.**
6. Tests 6 to 9.
7. `execute.ts` `settle`, the report fields, and the file header bullet on run-level stops (`execute.ts:8-9`).

No phase rewrites content pages. Phase 3 lets more items advance on capped nights, and those land in the normal
nightly content commit.

## 7. Verification

- `npm test`. The three test files above must be green, and `tests/unit/specs-frontmatter.test.ts` too.
- `npx tsc --noEmit`.
- Real-data check (test 3 as a script):
  `tsx -e 'import {readSpendHistory,spendAllowance} from "./pipeline/lib/budget.ts"; const h=readSpendHistory("data/manifest/_runs","2026-10-28"); console.log(h, spendAllowance({night_usd:15,week_usd:80},h))'`.
  Expected: `week_before_usd` is about 49.80 and `allowance_usd` is 15.
- `npm run nightly -- --dry-run` on the developer Mac logs the new `spend window:` line.
- After the first real nightly on the Mini: the run report has `llm.day_capped_usd`. If the night ran out of
  allowance, it shows `execution.llm_held > 0` with `stop_reason: "done"`, and video items move from `discovered` to
  `captioned` in the same run.

## 8. Later, not in this spec

- A spend line on the status or digest page (uncapped versus capped, per week).
- The usage guard token (D16), which would measure the real subscription instead of our own calls.
- Retrying a YouTube RSS 404 within the same run (Hougaard's feed 404'd on 23, 24 and 27 Oct).

## 9. Risks and open questions

1. **Does a `--week-cap` or `--night-cap` raise count as override?** Default: yes. Any `capOverride` is owner
   approval, and `spend.override` is already set for all of them (`nightly.ts:225`).
2. **Legacy reports with an override but a mixed day.** On 2026-10-06, the override report carried $10.49 from
   earlier same-date runs. The legacy rule counts that whole day as 0. Default: accept it, because those dates leave
   the window within a week of shipping.
3. **2026-10-24 counts $43.12.** Its final report was a capped nightly that carried spend from an earlier run that
   date, probably an uncapped one, but the report does not say so. Default: count it. The $80 cap absorbs it (test 3).
4. **LLM-held items each cost a worker turn.** Measured on 28 Oct: 558 planned items, most of them LLM stages. Each
   throws before spawning anything, so the cost is microseconds per item. Default: no up-front filter.
5. **Unbounded override spend.** An override run is bounded only by its quotas, `llm_calls_max`, and the owner's
   choice of `--week-cap`. That is intended (D41), and the decision says so.

## 10. Files

Changed: `config/budget.json`, `pipeline/lib/budget.ts`, `pipeline/orchestrator/nightly.ts`,
`pipeline/orchestrator/execute.ts`, `schemas/run-report.json`, `tests/unit/budget.test.ts`,
`tests/unit/nightly.test.ts`, `tests/unit/execute.test.ts`.
New: `tests/fixtures/runs-2026-10-22..27/` (six trimmed reports).
Docs at ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [ ] `spend_caps` are 15/80 and the `$comment` names D125.
- [ ] Tests 1 to 9 exist and pass. `npm test` and `npx tsc --noEmit` are green.
- [ ] The real-data check prints `allowance_usd: 15` for 2026-10-28.
- [ ] A run with an override writes `day_capped_usd` without its own cost, and a run without one writes it with
      its cost.
- [ ] On `LlmBudgetExhausted`, the executor leaves the item untouched, keeps running non-LLM stages, and reports
      `llm_held`. `LlmInfraError` still aborts.
- [ ] The `execute.ts` header and the `budget.ts` comment block (lines 130–133) describe the new behaviour.
- [ ] D125 appended to docs/DECISIONS.md; PLAN M60 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/spend-cap-catch-up.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Proposed edits to other files (not applied)

**`docs/DECISIONS.md`**, appended: the D125 text from section 3, ending
"Spec `docs/specs/spend-cap-catch-up.md`, issue #56."

**`docs/PLAN.md`** section 5 (added at spec time, flipped to shipped at build time):
`| **M60 Spend cap without catch-ups** | override spend kept out of the cap window, executor runs deterministic stages past the cap, caps $15/$80 (\`docs/specs/spend-cap-catch-up.md\`, D125, proposed) | small | none: lowers blocked nights |`

**`docs/HANDOFF.md`** "Open specs" (added at spec time), moved to "Where things stand" at ship time with what was
built.
