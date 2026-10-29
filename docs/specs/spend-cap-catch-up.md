---
issue: 56
status: implemented
---

# Catch-up runs stop blocking the nightlies, and free stages run past the spend cap

Status: implemented, 2026-10-29 (section 12 records what was built and where it differs). Decision: D125 (appended
2026-10-29). Milestone: M60. Owner: waldo.
Scope: `config/budget.json` `spend_caps`, the spend window in `pipeline/lib/budget.ts`, the run report's `llm` and
`spend` blocks (`pipeline/orchestrator/nightly.ts`, `schemas/run-report.json`), and how the stage executor
(`pipeline/orchestrator/execute.ts`) reacts to `LlmBudgetExhausted`. Every claim below was verified against the tree
at `d95c1217eb` on 2026-10-28. Not in scope: the usage guard token (`BCOBS_USAGE_OAUTH_TOKEN`, D16), the YouTube RSS
404s, quotas, and the post-execute LLM passes, which already stop on their own at the cap (for example
`pipeline/link/topics.ts:278`).

Blast radius (`sdd-build` section 1): **risky**, because it touches `pipeline/orchestrator/`, `config/` and
`schemas/`. A League build writes its plan and ends `plan-waiting`. The owner approves that plan, and then the build
runs. No task needs a command outside `npm test` and `npm run typecheck`. The checks on the Mini are operator steps
(section 7), not build steps.

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

A pure function, so the carry-over is unit-tested without stubbing `llmStats()`:
```ts
/** The day totals a run writes into its report's llm block (D125). */
export function daySpend(h: SpendHistory, runCostUsd: number, override: boolean): { day_cost_usd: number; day_capped_usd: number };
// day_cost_usd   = round6(h.today_total_usd + runCostUsd)
// day_capped_usd = round6(h.today_usd + (override ? 0 : runCostUsd))
```

**`nightly.ts`:** today, `nightly.ts:606` writes
`day_cost_usd: round6((report.spend?.today_usd ?? 0) + llmStats().cost_usd)`. It becomes
`...daySpend(history, llmStats().cost_usd, !!opts.capOverride)`, where `history` is the `readSpendHistory` result
already read at `nightly.ts:210` (keep it in a variable). Catch-up mode sets `opts.capOverride` at `nightly.ts:208`,
so it counts as an override with no extra code. The early budget-skip heartbeat report must carry both totals over
unchanged (the existing assertion "a budget-skipped heartbeat must not reset the day total",
`tests/unit/nightly.test.ts:200`). After `spendAllowance`, log
`spend window: $<week_before_usd> counted, $<week_before_uncapped_usd> from override runs not counted`.

**`execute.ts`:**
- `settle` on `LlmBudgetExhausted`: no longer sets `stop`. It sets `llmOff = true` (once, with a log line), adds the
  item to `ended`, counts `r.llm_held++`, and returns null. The item is left untouched: no attempt, no `fail()`.
- New report fields: `llm_held: number` and `llm_exhausted_at_calls?: number`.
- `stop_reason` stays `"spend-cap"` in the type, for old reports. A run whose only limit was the allowance now ends
  `"done"`.
- `charge()` is unchanged. An LLM item that throws keeps its quota charge for the night. That's harmless, because
  it can't run that night anyway.
- `llmOff` is not checked before a stage starts. An LLM stage finds out from `llm.ts` itself, before any spend
  (`llm.ts:141`). There is no new per-handler flag (section 3).
- On the first exhaustion, log once:
  `LLM allowance used up at <calls> calls: LLM stages wait, deterministic stages go on`. Set
  `r.llm_exhausted_at_calls` to `callCount()` at that moment.
- `schemas/run-report.json` `execution`: add `llm_held` (integer) and `llm_exhausted_at_calls` (integer), both
  optional.

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
3. Replay of real history, in a temp runs dir written by the test (the existing `put()` helper,
   `tests/unit/budget.test.ts:109`). Use the committed values of 2026-10-22 to 2026-10-27:
   `{llm:{day_cost_usd:3.235482}}`, `{llm:{day_cost_usd:3.442062}}`, `{llm:{day_cost_usd:43.121836}}`,
   `{llm:{day_cost_usd:36.604146}, spend:{override:true}}`, `{llm:{day_cost_usd:35.270381}, spend:{override:true}}`,
   `{llm:{day_cost_usd:0}}`. `readSpendHistory(dir, "2026-10-28")` gives `week_before_usd` 49.79938 (± 1e-6) and
   `week_before_uncapped_usd` 71.874527. `spendAllowance({night_usd:15, week_usd:80}, h).allowance_usd` is 15.
   With the new function and the old caps `{night_usd:10, week_usd:50}`, the allowance is 0.200620: the old cap was all but used up even
   without the catch-ups.
4. `daySpend`: `h = {today_usd:1, today_total_usd:1, ...}`, `runCostUsd` 5. With `override` true, the result is
   `{day_cost_usd:6, day_capped_usd:1}`. With `override` false, it is `{6, 6}`.

`tests/unit/nightly.test.ts`, following the existing spend tests (lines 186 to 227, `NOOP` handlers, zero LLM
cost):
5. An earlier same-date report `{llm:{day_cost_usd:9, day_capped_usd:2}}`. A run without an override reports
   `spend.today_usd` 2, `llm.day_cost_usd` 9 and `llm.day_capped_usd` 2. A run with
   `capOverride: {week_usd: 500}` reports the same. A budget-skipped heartbeat (`usage(61, 10)`) keeps both. The
   report validates against `run-report`.
6. A runs dir holding one override report of `day_cost_usd` = `budget().spend_caps.week_usd` two days back. A
   normal run's allowance is not 0 (it would be 0 today, as in the existing test at line 203).

`tests/unit/execute.test.ts`:
7. Three items in the plan. A's next stage throws `LlmBudgetExhausted`. B has two deterministic stages. C has one
   deterministic stage and then an LLM stage that throws. Expected: A untouched (same state, attempts 0). B advanced
   through both stages. C advanced one stage, then untouched. `stop_reason: "done"`, `llm_held: 2`,
   `failed_attempts: 0`.
8. A batch handler whose result map holds `LlmBudgetExhausted` for each item: every item stays untouched, and the
   next non-LLM item still runs.
9. Regression: `LlmInfraError` still aborts the run (`stop_reason: "aborted"`).
10. Lane case: item X, parked on lane `youtube` behind Y, still runs after an LLM item elsewhere throws
    `LlmBudgetExhausted` (the 28 Oct case). `parked_left: 0`.
11. One existing test asserts the old behaviour and changes on purpose. In
    `"spend cap stops cleanly without failing the item; infra errors abort"` (`tests/unit/execute.test.ts:88`),
    `r.stop_reason` becomes `"done"`. VID2 stays `["captioned", 0]` as today. The assertion
    `get(m, "VID1").state === "discovered"` ("no new item starts after the cap") becomes VID1 advancing through
    `fetched` and `captioned` (its deterministic stages in `allVideo`) and then waiting, with attempts 0 and
    `r.llm_held` 2. Rename the test to `"spend cap holds LLM stages without failing the item; deterministic stages go
    on; infra errors abort"`. The `LlmInfraError` half stays as it is. Every other existing test stays green
    unchanged. Record this rewrite in section 12 as an intended change, not a deviation.

## 6. Tasks

**Phase 1 — caps (ships alone, one commit).**
1. `config/budget.json` `spend_caps` to 15/80, and the `$comment` sentence. The existing tests read the caps from
   `budget()`, so they need no change. Run `npm test` and confirm that.

With the old window and the new caps, the 10-29 and 10-30 nightlies are still blocked: their windows are $118.44
and $115.00. Phase 1 alone unblocks from the 10-31 run ($71.87, $8.13 allowed).

**Phase 2 — override spend not counted (one commit).**
2. Tests 1 to 6, red.
3. `budget.ts`: `cappedSpend`, `daySpend`, `readSpendHistory` with the new fields, and `spendAllowance` unchanged.
   Update the comment block at `budget.ts:130-133` to say that override runs are not counted.
4. `nightly.ts`: `daySpend` at line 606, the heartbeat carry-over, the `spend window:` log line, and
   `week_before_uncapped_usd` in the report's `spend` block.
5. `schemas/run-report.json`: `llm.day_capped_usd`, `spend.week_before_uncapped_usd` and `spend.today_total_usd`,
   all optional so old reports stay valid.

**Phase 3 — the executor goes on (one commit).**
6. Tests 7 to 11, red.
7. `execute.ts`: `settle`, the report fields, the log line, and the file header bullet on run-level stops
   (`execute.ts:8-9`). `schemas/run-report.json`: the two `execution` fields.

No phase rewrites content pages. Phase 3 lets more items advance on capped nights, and those land in the normal
nightly content commit.

## 7. Verification

**Build (both modes):** `npm run typecheck` and `npm test`, green after each phase. `git diff --stat origin/main --
content data` is empty: no phase writes `content/` or `data/`.

**Operator steps (owner, after merge; not for the League):**
- The next nightly on the Mini (scheduled 01:00 Europe/Brussels, or `gh workflow run nightly.yml --ref main`) logs
  `spend window:`. Its report `data/manifest/_runs/<date>.json` has `llm.day_capped_usd` and
  `spend.week_before_uncapped_usd`.
- The first night that runs out of allowance shows `execution.llm_held > 0`, `stop_reason: "done"`, and video items
  moving from `discovered` past `fetched` in that same run.

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
4. **The full catch-up of 2026-10-28** (workflow run 40657797703, `unlimited`) overwrites that date's report with
   `spend.override: true`. Under the legacy rule, all of 2026-10-28 counts as 0, including the capped 00:16 run,
   which spent $0. Default: nothing to do.
5. **LLM-held items each cost a worker turn.** Measured on 28 Oct: 558 planned items, most of them LLM stages. Each
   throws before spawning anything, so the cost is microseconds per item. Default: no up-front filter.
6. **Unbounded override spend.** An override run is bounded only by its quotas, `llm_calls_max`, and the owner's
   choice of `--week-cap`. That is intended (D41), and the decision says so.

## 10. Files

Changed: `config/budget.json`, `pipeline/lib/budget.ts`, `pipeline/orchestrator/nightly.ts`,
`pipeline/orchestrator/execute.ts`, `schemas/run-report.json`, `tests/unit/budget.test.ts`,
`tests/unit/nightly.test.ts`, `tests/unit/execute.test.ts`.
New: none.
Docs at ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec.

## 11. Definition of Done

Ticked 2026-10-29, review of PR #57 (the League build, taken over by hand).

- [x] `spend_caps` are 15/80 and the `$comment` names D125.
- [x] Tests 1 to 11 exist, were red before their phase, and pass. `npm test` and `npm run typecheck` are green.
      (Red was seen as `tsc` errors on the missing names, not as runtime failures; section 12.)
- [x] Test 3 (the real-history replay) gives allowance 15 under 15/80.
- [x] `git diff --stat origin/main -- content data` is empty.
- [x] A run with an override writes `day_capped_usd` without its own cost, and a run without one writes it with
      its cost.
- [x] On `LlmBudgetExhausted`, the executor leaves the item untouched, keeps running non-LLM stages, and reports
      `llm_held`. `LlmInfraError` still aborts.
- [x] The `execute.ts` header and the `budget.ts` comment block (lines 130–133) describe the new behaviour.
- [x] The HANDOFF "Where things stand" bullet lists the section 7 operator steps.
- [x] D125 appended to docs/DECISIONS.md; PLAN M60 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/spend-cap-catch-up.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Built, deviations (2026-10-29)

Built by waldo.Jarvis's League on `league/56-catch-up-runs-stop-blocking-the-nightlie` (PR #57, checkpoint commits
`start` to `review`). The League's review blocked twice and quarantined the PR; the owner took the branch over and a
manual session finished it (review of PR #57).

**Built** (three phases in spec order):
- Phase 1: `config/budget.json` `spend_caps` 15/80, and the `$comment` sentence naming D125.
- Phase 2: `pipeline/lib/budget.ts` has `cappedSpend`, `daySpend` and a `readSpendHistory` that also returns
  `today_total_usd` and `week_before_uncapped_usd`; the metering comment block says override runs are not counted.
  `pipeline/orchestrator/nightly.ts` writes `daySpend(...)` into the report's `llm` block, logs `spend window:`, and
  carries both totals through the budget-skipped heartbeat. `schemas/run-report.json` has the optional
  `llm.day_capped_usd`, `spend.today_total_usd` and `spend.week_before_uncapped_usd`.
- Phase 3: `pipeline/orchestrator/execute.ts` no longer stops on `LlmBudgetExhausted`: the item is held untouched
  (`llm_held`), `llm_exhausted_at_calls` is recorded and one log line is written. `LlmInfraError` still aborts. The
  header bullet is rewritten. `schemas/run-report.json` has the optional `execution.llm_held` and
  `execution.llm_exhausted_at_calls`.
- Tests 1 to 11 in `tests/unit/budget.test.ts`, `tests/unit/nightly.test.ts` and `tests/unit/execute.test.ts`.
- Review of PR #57: `pipeline/summarize/changes-week.ts` stops the weekly change narrative on `LlmBudgetExhausted`
  instead of rethrowing it, with a test in `tests/unit/changes-phases.test.ts` (red first: the test failed with the
  uncaught `LlmBudgetExhausted`). See the first deviation.

**Verified** (review of PR #57, node 24.22.1, after the rebase onto `origin/main`):
- `npm run typecheck`: exit 0. `npm test`: 792 tests, 791 pass, 0 fail, 1 skipped. The League's hand-over said
  `npm test` exited 1 in its environment with the output cut; here it is green on the League's head as well (790 pass,
  0 fail, 1 skipped), so that exit 1 came from the League's environment, not from this build.
- `git diff --stat origin/main -- content data`: empty.
- Every post-execute LLM pass `nightly.ts` runs after the executor was checked for how it meets
  `LlmBudgetExhausted` (section 1 says they "already stop on their own"): all stop the pass except
  `narrateChangeWeeks`, fixed here.
- The window, replayed by `readSpendHistory` over the committed run reports of 22 to 29 Oct on `origin/main`: the
  10-29 run's window counted $46.56 (the run was capped at the old caps before this ships); the 10-30 run's counts
  $43.12 (only 24 Oct) with $96.76 from override runs left out, allowance $15; the 10-31 run's counts $0.

**Spec versus measured:**

| Item | Spec | Test |
|---|---|---|
| `week_before_usd` for 28 Oct | 49.79938 | 49.79938 (±1e-6) |
| `week_before_uncapped_usd` | 71.874527 | 71.874527 (±1e-6) |
| allowance under 15/80 | 15 | 15 |
| allowance under 10/50 | 0.200620 | 0.200620 (±1e-6) |

**Intended change, not a deviation:** the existing test `"spend cap stops cleanly without failing the item; infra
errors abort"` is renamed `"spend cap holds LLM stages without failing the item; deterministic stages go on; infra
errors abort"` and asserts the new behaviour (test 11).

**Deviations:**
- **A capped night now runs every post-execute LLM pass, and one of them crashed on the allowance (fixed in the
  review).** Before D125 a capped run ended `spend-cap`, and `nightly.ts` gives the post-execute passes quota only when
  the executor ended `done` (or `memory`). A capped run now ends `done`, so those passes run with no allowance left.
  All of them stop on `LlmBudgetExhausted` except `narrateChangeWeeks` (`pipeline/summarize/changes-week.ts`), which
  rethrew it outside any `try` in `nightly.ts`: the first capped night with a new week of changes would have ended the
  run before its report and commit. Cause: section 1 of this spec, which said the passes already stop on their own;
  the build took that on trust. The review made it stop the pass; `LlmInfraError` still throws as before.
- `SpendAllowance` declares `today_total_usd` and `week_before_uncapped_usd` optional, and `spendAllowance` requires
  only `today_usd` and `week_before_usd`, so existing callers and tests that pass two fields still compile. Behaviour
  is as in the spec.
- `nightly.ts` does not keep the `readSpendHistory` result in a variable. At the end of the run it rebuilds the totals
  from `report.spend` (which spreads the history) and calls `daySpend` with `report.spend.override`. Same result; the
  heartbeat carry-over needs no extra code.
- `settle` uses `r.llm_exhausted_at_calls === undefined` as its once-only flag instead of a separate `llmOff`.
- Process: the plan (`docs/plans/spend-cap-catch-up.md`) is rated risky, which should have ended `plan-waiting` for
  the owner's approval (section 1); the League built it without a recorded plan approval. The owner's takeover of the
  branch stands in for that approval.

**Operator steps still open** (section 7, after merge, on the Mini):
- The next nightly (01:00 Europe/Brussels, or `gh workflow run nightly.yml --ref main`) logs `spend window:`; its
  report `data/manifest/_runs/<date>.json` has `llm.day_capped_usd` and `spend.week_before_uncapped_usd`.
- The first night that runs out of allowance shows `execution.llm_held > 0`, `stop_reason: "done"`, video items
  moving from `discovered` past `fetched` in that run, and a run report written (the post-execute passes stopped on
  the allowance without ending the run).

## 13. Proposed edits to other files (applied 2026-10-29, see section 12)

**`docs/DECISIONS.md`**, appended: the D125 text from section 3, ending
"Spec `docs/specs/spend-cap-catch-up.md`, issue #56."

**`docs/PLAN.md`** section 5 (added at spec time, flipped to shipped at build time):
`| **M60 Spend cap without catch-ups** | override spend kept out of the cap window, executor runs deterministic stages past the cap, caps $15/$80 (\`docs/specs/spend-cap-catch-up.md\`, D125, proposed) | small | none: lowers blocked nights |`

**`docs/HANDOFF.md`** "Open specs" (added at spec time), moved to "Where things stand" at ship time with what was
built.
