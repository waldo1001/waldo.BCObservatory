# Derived data catches up with the code: a `derive` stage on push, and no "Code 0" from data that predates it

Status: built, 2026-10-08. Decision: D81. Milestone: M19. Owner: waldo.
Scope: a third orchestrator stage, `derive`, that reruns the deterministic render block on the committed content and
commits the result (`pipeline/orchestrator/nightly.ts`); `.github/workflows/nightly.yml` runs it on a push to main
that touches the code which shapes derived data; the galaxy, the header and `/changes/week/` treat a `landed.json`
without a `changes` key as "not computed yet", not as "no changes". Every claim below was verified against the tree
at `243680a2a7` on 2026-10-08. Not in scope: ingest, any LLM stage, the night window and catch-up rules (D41), the
Pages workflow, rendering anything in CI on ubuntu.

## 1. Goal

On 2026-10-08 the owner opened the this-week lens after D80 shipped and saw "Code 0", while `/changes/` listed changes
merged that day (#12198, 2026-10-08). D80's code was live at 12:32 UTC, but the data it reads was not:

- `data/graph/landed.json` on `origin/main` was last written by the run committed at 08:34 (`08b11d28ea`), before D80.
  It has 20 `items` and no `changes` key (`git show origin/main:data/graph/landed.json`).
- Only a full run writes it: the graph phase sits inside the `stages === "all"` branch, at the end of the render
  block (`nightly.ts:433-439`, branch at `:236`).
- The 06:00, 12:00 and 18:00 UTC crons (`nightly.yml:8-10`) do nothing outside catch-up. Run 37774641263 (12:07 UTC)
  logged "scheduled run at 14:08 is outside the night window and catch-up is off: nothing to do"
  (`skipScheduled`, `nightly.ts:776-787`). The next run that writes `landed.json` is 00:00 UTC.
- So a code change to derived data waits for the next night, up to about 23 hours. D79 waits the same way: its six
  source pages with roadmap titles are rewritten by `renderSourcesAndCoverage`, which is in the same block.
- Meanwhile the galaxy reads the old file as "zero code changes" and shows a disabled "Code 0" pill
  (`site/src/scripts/galaxy.ts`, `weekPanel`). That claims something false: the week's changes exist, they are just
  not computed yet.

Measured locally on the committed content at `243680a2a7` (outputs discarded):

| Render step | Time | Files changed against `origin/main` |
|---|---|---|
| `renderGraph` | 4.9 s | `data/graph/landed.json` (gains `changes`, 82) |
| `renderSearchIndex` | 1.1 s | none |
| `renderObjectsIndex` | 1.3 s | none |
| `renderSourcesAndCoverage` | 1.3 s | 6 `content/sources/*.md` (the D79 titles) |

After this change:

- A push to main that changes the pipeline's render or link code, its schemas or its config starts a `derive` run on
  the Mini. It needs no LLM and no budget, takes about a minute with `npm ci`, and commits `content: derive <date>
  (<sha>)` when something changed. Pages then deploys through the existing `workflow_run` trigger.
- `derive` can also be started by hand (`workflow_dispatch`, stages `derive`).
- When `landed.json` has no `changes` key, the galaxy shows only Videos and Posts, as before D80, and `/changes/week/`
  says the list is computed by the next run. "Code 0" appears only when the key exists and is empty.

## 2. Reader- and agent-facing behaviour, after

- **Galaxy, this-week lens.** If `week.changes` is not an array, the pill row is Videos and Posts only, there is no
  "Code changes" block, no "and N code changes →" line at levels 1 and 2, and `kinds=c` in a link is ignored (the
  existing `usableKinds` fallback turns all pills on). If it is an array, D80 applies unchanged, including "Code 0" in
  a week without change pages.
- **Header pill.** No change in markup: the PRs half already appears only when the count is above 0
  (`Base.astro`). `landed()` in `site/src/lib/state.ts` gains `hasChanges: boolean` for the week page.
- **`/changes/week/`.** If the key is missing: "This week's list is computed by the pipeline after the code that
  produces it lands; until then see [all changes](../)". If the key is present and empty: "0 code changes in the 7
  days up to <anchor>".
- **Repository history.** A derive commit reads `content: derive 2026-10-08 (243680a2a7)`, so the commit that
  triggered it is named. It writes no run report: `data/manifest/_runs/<date>.json` stays the nightly's, and the
  spend history (`pipeline/lib/budget.ts:160`, one file per run date) is untouched.
- **Agents and MCP.** Nothing new. They read the same `data/` files, just sooner.

## 3. Decisions

Draft D81:

> **D81 Derived data follows the code within the hour, not the night.** The render block of the nightly (digests,
> sources and coverage, search and objects indexes, the graph) is deterministic and runs on committed content. Until
> now it ran only in a full run inside the night window (D41), so a change to what it writes (D79's titles, D80's
> `changes` in `landed.json`) waited up to a day, and the galaxy read the old file as "Code 0". A third orchestrator
> stage, `derive`, runs that block alone: no guard, no ingest, no item loop, no LLM, no run report. It commits
> `content: derive <date> (<sha>)` through the same leak gate and `commitTracked` as the nightly. `nightly.yml` runs it on
> a push to main that touches `pipeline/link/**`, `pipeline/render/**`, `pipeline/lib/**`, `schemas/**` or
> `config/**`, and on `workflow_dispatch`, in the same concurrency group, so it queues behind a live nightly and never
> runs beside one. It ignores the night window because it spends nothing. The commit touches only `content/` and
> `data/`, which is outside the trigger paths, so it cannot trigger itself. Pages deploys after it through the existing
> `workflow_run` trigger. The galaxy treats a `landed.json` without `changes` as "not computed yet": no Code pill,
> instead of "Code 0".
> Rejected: rendering the graph in the Pages build (two truths: the site would differ from the committed `data/` that
> agents and the MCP read), a manual-only stage with a RUNBOOK line (it was needed on the day it shipped and nobody
> ran it), letting the 06/12/18 crons run full outside catch-up (that spends budget and ingests for a render problem),
> rendering in a post-push ubuntu job that commits (a second committer racing the Mini's checkpoints), keeping "Code
> 0" for missing data.

Other choices:

- **The block becomes one function, `renderDerived(opts, now, errors)`**, called by both stages, so `all` and
  `derive` cannot drift apart. `refreshTopics`, `refreshRoadmapLinks` and the change re-renders stay in `all`: they call
  LLMs or depend on tonight's ingest.
- **The run date and the graph anchor** come from `runDate(now)` (`nightly.ts:170`), the same as a nightly started at
  that moment. A derive at 14:00 moves the week window to end today, which is what a reader expects.
- **The lock.** `derive` takes the same `nightly.lock` (`runNightly`, `nightly.ts:175`), so a hand-started derive on
  the Mini during a run waits or fails like a second nightly.

## 4. Contract

### 4.1 Orchestrator (`pipeline/orchestrator/nightly.ts`)

- `NightlyOptions.stages: "ingest" | "all" | "derive"` (`:91`); `parseArgs` accepts `--stages derive`.
- `run()`: when `stages === "derive"`, run no guard, no `recoverPartialRun`, no ingest and no plan. Call
  `renderDerived`, then the leak gate (`:465-474`), then `commitTracked(repoDir, "content: derive <date> (<sha>)",
  push)` when `--commit` is set. Return a `RunReport`-shaped object without writing it (`status: "derive"`, `errors`).
  `main()` exits non-zero when `errors` is not empty.
- `skipScheduled` ignores `derive` (a derive is never scheduled).
- `export async function renderDerived(opts, now, date, manifest, errors, phase)`: the lines `:433-439` moved
  unchanged (digests, sources and coverage, search index, objects index, graph). The `all` branch calls it in place.
- `<sha>` is `git rev-parse --short HEAD` of the checkout, before the derive commit.

### 4.2 Workflow (`.github/workflows/nightly.yml`)

```yaml
on:
  push:
    branches: [main]
    paths: ["pipeline/link/**", "pipeline/render/**", "pipeline/lib/**", "schemas/**", "config/**"]
  workflow_dispatch:
    inputs:
      stages: { options: [all, ingest, derive] }   # description: "derive = re-render derived data, no ingest, no LLM"
...
env:
  STAGES: ${{ github.event_name == 'push' && 'derive' || inputs.stages || 'all' }}
run: |
  [[ "$STAGES" == all || "$STAGES" == ingest || "$STAGES" == derive ]] || { echo "invalid stages: $STAGES" >&2; exit 1; }
```

The `concurrency` group stays `observatory-nightly`, `cancel-in-progress: false` (`nightly.yml:34-36`). AGENTS.md
allows `push` to `main` as a trigger for self-hosted workflows. `infra/mini/run-nightly.sh` needs no change: it
passes the arguments through. With `derive` the memory-restart loop never fires, because there is no `stop_reason`.

### 4.3 Site

- `site/src/scripts/galaxy.ts`: `const hasCode = Array.isArray(week.changes)`. Pills are built from
  `hasCode ? ["v","p","c"] : ["v","p"]`. The code block and `codeLine` return `""` when `!hasCode`.
  `weekTotals.c` is 0 then, so `usableKinds` already turns a `kinds=c` link into all pills.
- `site/src/lib/state.ts`: `landed()` returns `hasChanges: Array.isArray(j.changes)`.
- `site/src/pages/changes/week.astro`: the two messages of section 2.

## 5. Test plan (write first)

`tests/unit/nightly.test.ts` (the existing orchestrator tests; use their fake deps):

- `--stages derive` with a fixture content dir. The graph and index files are written; the fake ingest and the fake
  LLM are never called; no file appears under `data/manifest/_runs/`; with `commit: true` and a temp git repo, the last
  commit message matches `/^content: derive \d{4}-\d{2}-\d{2} \([0-9a-f]{7,}\)$/`.
- `--stages derive` with `scheduled: true` outside the window still runs (`skipScheduled` returns null for derive).
- `--stages all` still calls the same render functions in the same order, so the existing nightly test stays green
  after the refactor.
- A derive on unchanged content makes no commit (`commitTracked` returns false).

`tests/unit/galaxy-core.test.ts`: if a `weekPills(hasCode)` helper is extracted, `false` gives `["v","p"]` and `true`
gives `["v","p","c"]`.

`tests/unit/state.test.ts`: `hasChanges` is false without the key and true with `changes: []`.

`tests/unit/workflows.test.ts` and `npm run lint:workflows` (`scripts/check-workflows.ts`): the push paths and the `STAGES` expression parse; `derive`
is an accepted input.

## 6. Tasks

Phase A, orchestrator (ships alone; nothing triggers it yet):

1. Section 5's orchestrator tests, failing.
2. Extract `renderDerived`; add the `derive` branch and `--stages derive`.
3. `npm run typecheck && npm test`; then `npm run nightly -- --stages derive` locally, without `--commit`. It
   renders into the repo's own `content/` and `data/`; check the diff (`data/graph/landed.json` gains `changes`, 6
   `content/sources/*.md`), then discard it (`git checkout -- content data`). Do not use `--dry-run` for this: it
   points `data/` at an empty temp dir and `content/` beside it (`nightly.ts:771`, `contentDirOf` at `:621-623`),
   so nothing real is rendered.

Phase B, workflow:

4. `nightly.yml` as in 4.2; `npm run lint:workflows`.
5. After the push of this phase, the push itself triggers a derive, because the phase changes `pipeline/**`. Watch it:
   `gh run list --workflow nightly --limit 1`, then check that `origin/main:data/graph/landed.json` has `changes`
   and that a `content: derive ...` commit landed. That one run is the real-data check, and it also brings D79's six
   source pages live.

Phase C, site:

6. `galaxy.ts`, `state.ts`, `week.astro`; their tests.

Phase A plus B is the fix for the owner's report. Phase C stops the false "0" in any future gap (a fresh clone, a
failed derive). No phase rewrites many pages; the first derive rewrites 6 source pages and one graph file.

## 7. Verification

- `npm run typecheck && npm test`, `npm run lint:workflows`, `npm run validate:content`.
- `npm run nightly -- --stages derive` (no `--commit`): the log shows the five render phases and no ingest, guard or
  LLM lines, in under 30 s on the Mac; the diff is section 1's table; then `git checkout -- content data`.
- After phase B is pushed: a nightly-workflow run with event `push` finishes green in about a minute; the commit
  `content: derive 2026-10-08 (<sha>)` exists; the `pages` run that follows is green; the live
  `graph/landed.json` has `changes` (82 on the 2026-10-08 window); the live yt-microsoft source page lists roadmap
  titles (D79).
- Phase C, on a local build against a `landed.json` with the `changes` key removed: the pill row has two pills,
  `#lens=landed&kinds=c` opens on all pills with 17 stars, and `/changes/week/` shows the "computed by the pipeline"
  line. With `changes: []`: "Code 0", and the week page reads "0 code changes".

## 8. Later, not in this spec

- Running the change pillar's re-render (`rerenderChangePages`) and the object pages' "Recent changes" in `derive`.
  They also follow code, but they are larger and tied to tonight's join.
- A "data computed at" timestamp in the galaxy panel.
- Deriving on a push of `site/**`: the site reads data, it does not shape it.

## 9. Risks and open questions

- **A derive racing a docs push.** `commitTracked` already rebases once on a rejected push (D58). Default: same
  behaviour as the nightly's final commit.
- **A broken render on push.** A thrown render error lands in `errors`, the run exits non-zero, nothing half-written
  is committed (the leak gate and `commitTracked` run after all phases), and the next night retries. Default: accept.
- **Push storms.** Several pushes in an hour queue several derives in the concurrency group. Each takes about a
  minute, and an unchanged result commits nothing. Default: accept, and do not add `cancel-in-progress`, because a
  queued nightly must never be cancelled.
- **`pipeline/lib/**` is broad.** It includes the LLM client and the manifest, so a change there starts a derive that
  changes nothing. Default: keep it broad (cheap, safe) rather than enumerate files.

## 10. Files

Changed: `pipeline/orchestrator/nightly.ts`, `.github/workflows/nightly.yml`, `site/src/scripts/galaxy.ts`,
`site/src/lib/state.ts`, `site/src/pages/changes/week.astro`, the orchestrator, state and workflow tests,
`docs/RUNBOOK.md` (one paragraph: what `derive` is and how to start it by hand), `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [ ] Section 5 tests written first and green; typecheck, test, lint:workflows and validate:content green.
- [ ] The first push-triggered derive is green and its commit and the live `landed.json` match section 7.
- [ ] Phase C checked on a local build in both cases (key missing, key empty).
- [ ] RUNBOOK paragraph; D81 appended; PLAN M19 shipped; HANDOFF entry moved; section 12 renamed "Built, deviations".

## 12. Built, deviations

Built 2026-10-08 in three commits (phases A and B together, then C). Applied as section 12 proposed: D81 in
DECISIONS, M19 shipped in PLAN, the HANDOFF entry moved, the RUNBOOK paragraph, the AGENTS line.

- **Measured.** `npm run nightly -- --stages derive` on the committed content took 6.7 s on the Mac (digests 0.5 s,
  sources 2.1 s, search index 1.0 s, objects index 1.1 s, graph 1.6 s). The diff was section 1's table exactly:
  `data/graph/landed.json` gains `changes` (82) and the 6 `content/sources/yt-*.md` pages get D79's titles.
- **The first derive is not push-triggered.** Section 6 task 5 expected the push of phase B to trigger a derive "because
  the phase changes `pipeline/**`". It changes `pipeline/orchestrator/**` and `.github/**`, and neither is a trigger
  path, so the first derive was started by hand (`gh workflow run nightly -f stages=derive`). The paths stay as
  decided; the RUNBOOK says to start a derive by hand after an orchestrator change.
- **`run-nightly.sh` changed after all.** Section 4.2 said it needs no change. Its memory-restart loop reads the
  newest run report's stop reason; a derive writes none, so it would read the nightly's, and a nightly that stopped on
  memory would restart the derive up to six times. A derive now sets `restarts=0`.
- **The run summary prints a derive line.** `scripts/run-summary.ts` printed the newest run report, which after a
  derive is the nightly's and would read as this run's. With `STAGES=derive` it prints one line instead.
- **Digests and sources are timed phases.** In the full run they were bare calls; inside `renderDerived` all five steps
  log `phase <name>: <ms>`.
- **The galaxy toggles over the pill set it shows.** Without `changes` the pill set is `["v", "p"]` (`weekPills` in
  `galaxy-core.ts`) and the panel uses the generic helpers of `pills-core.ts` (D82) over it, so a reader who turns off
  both visible pills gets both back, instead of an invisible Code pill staying on alone over an empty panel.
- **The week page heading.** With the key missing the `h1` reads "Code changes in <span>" instead of "0 code changes
  in <span>", and the "computed by the pipeline" line follows it. With `changes: []` it reads "0 code changes in the
  7 days up to 2026-10-08" (checked on a build).
- **The first derive on the Mini** (run 37784084107, dispatched by hand) was green in 3 min 45 s, not the "about a
  minute" of section 1: `npm ci` and checkout about 1 min, the five render phases 48 s (sources 21 s, graph 9 s), the
  leak gate before the commit about 70 s. It committed `content: derive 2026-10-08 (c3b25a23)` (d687e6dee1) with
  section 1's diff exactly: `landed.json` with 82 changes and the 6 source pages. The `pages` run it started was
  green, and the live `graph/landed.json` has 82 changes.
- **Checked on the built site with headless Chromium** in all three cases: key missing (Videos 2 and Posts 18 pressed,
  no Code pill, `#lens=landed&kinds=c` opens on both and the hash drops `kinds`), 82 changes (three pills, the Code
  block), `changes: []` (three pills, "Code 0"). `scripts/ui-sweep.mjs`: 34 states, 0 squeezed rows.

**`docs/DECISIONS.md`**: the D81 text from section 3, ending with "Spec: `docs/specs/derive-on-push.md`."

**`docs/PLAN.md`**: the M19 row as committed with this spec, marked shipped at ship time.

**`docs/HANDOFF.md`**: move the entry to "Where things stand".

**`docs/RUNBOOK.md`**: "Derived data. A push to main that touches `pipeline/link|render|lib/**`, `schemas/**` or
`config/**` runs `nightly` with stages `derive` on the Mini: the render block only, no ingest, no LLM, about a minute.
By hand: Actions → nightly → Run workflow → stages `derive`."

**`AGENTS.md`**: in "Running things", add `npm run nightly -- --stages derive         # re-render derived data only (writes content/ and data/)`.
