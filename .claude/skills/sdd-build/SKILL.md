---
name: sdd-build
description: Build one spec from docs/specs/ by path, tests first, and do the ship-time edits (DECISIONS, PLAN, HANDOFF; the spec's Built, deviations and status implemented, which a League build hands to the PR review in docs/built/<slug>.md instead of editing its own spec). Use for "/sdd-build docs/specs/<slug>.md", "build the open spec", "pick up development". One flow, two modes - waldo.Jarvis's League (entry point `build` in .league.json, operator mode) and a manual session.
---

# Building a spec

`/sdd-build <path>` builds one spec, given by its repo-relative path (`docs/specs/<slug>.md`), the way a manual
coding session builds one from HANDOFF "Open specs". Read `AGENTS.md` first, and the spec whole. The spec is the
contract; when it is unclear you ask or stop (section 6), you never guess.

## 0. Mode, and may I start

```bash
echo "${JARVIS_OPERATOR:-0}"
```

`1` = **operator mode**: the League gave you a worktree on branch `league/<issue>-<topic>`, an unprivileged user, and no
network credential. It holds git: you commit, you never push, never open or merge a PR, never touch the default
branch. Anything else = a **manual session**.

Read the spec's frontmatter (`issue:`, `status:`; the first word of `status`).

- **Operator mode:** the owner's approval happened upstream (the `spec-approved` label on the issue), so `status:` may
  read `draft` or `approved`; do not wait for it to change and never edit it: an operator-mode build does not touch the
  spec it builds or `CLAUDE.md` at all (section 4). `implemented`: end `needs-answer: spec already implemented`.
- **Manual session:** read-only claim check first, then build only if nothing claims it:
  ```bash
  git fetch -q origin
  gh issue view <issue> --json labels --jq '.labels[].name'              # spec-approved: the League owns it
  gh pr list --label league-building --state open --json number,headRefName
  git branch -r --list 'origin/league/<issue>-*'
  git worktree list                                                      # another session on it
  ```
  A `spec-approved` label, a `league-building` PR or a `league/<issue>-*` branch means the League is building or about
  to: stop and tell the owner; do not start a second build. To take it over, follow `CLAUDE.md` "Taking over from the
  League". Tell the owner not to apply `spec-approved` to an issue you are building by hand.

## 1. Set up and plan

- **Manual session:** a worktree no other session uses, from `origin/main`
  (`git worktree add -b build/<slug> ../waldo.BCObservatory-build-<slug> origin/main`). Never reset, check out over or
  pull into a worktree holding another session's uncommitted files.
- **Operator mode:** stay in the worktree and on the branch you were given.

Read `docs/PLAN.md` (the milestone row), the tail of `docs/DECISIONS.md` and the HANDOFF entry. Confirm the spec's
reserved Dnn and Mnn are still free (the number command of `.claude/skills/bcobs-spec/SKILL.md` section 5, over what
the local tree shows; no fetch in operator mode). If another entry holds one, renumber the spec's own reservation
before building and say so in the report.

Then the plan, in the form the League's preamble asks for (a manual session shows it to the owner), with a
**blast-radius rating** for this repository:

| Rating | What the spec touches |
|---|---|
| `safe` | docs, skills, tests, tool and skill text; no behaviour change |
| `low-risk` | `packages/mcp`, `packages/search`, `site/`, `pipeline/render/` and `pipeline/link/`, each with tests, and no rewrite of `content/` or `data/` |
| `risky` | `pipeline/orchestrator/`, `pipeline/lib/llm.ts`, budget or `config/`, `infra/`, `.github/`, `schemas/` (any change to a schema that content or data is validated against), or a change that rewrites `content/` or `data/` on the next derive |
| `breaking` | a removed or renamed MCP tool or parameter, changed page URLs or ids, a change to `.league.json`, an `npm` publish or release script (the `protected` globs) |

The highest row any task touches is the rating. `safe` and `low-risk`: continue. `risky` and `breaking`: write the plan
and end `plan-waiting` before editing any code (a manual session asks the owner instead). A spec that names
`**/CHANGELOG.md` or `scripts/release*` in its tasks is not edited there by the League: those become operator steps.

## 2. Red first

Section 5 of the spec is the test plan. Write those tests first and run them: `npm test` (and `npm run typecheck`)
must fail for the stated reason; keep the failing test names and messages as your red evidence for the report. A test
that passes before the change proves nothing: fix the test. Where the spec changes only docs or skills there is no
test to write: say so in the report and do not invent one.

## 3. Green, in the spec's order

Do section 6 (Tasks) in order, one phase at a time; a phase that ships alone is its own commit. Rules, both modes:

- Generated `content/` and `data/` are never hand-edited (`data/overrides/*.yaml`). A local probe that regenerates them
  is discarded before every commit: `git checkout -- data content && git clean -fdq data content`.
- LLM calls go through `pipeline/lib/llm.ts` only; no API key; the pipeline stays deterministic first.
- Stable ids, never title matching; community text derived only (`CONTENT-NOTICE.md`); secrets only on the Mini.
- Commands, operator mode: `npm test`, `npm run typecheck` and what the spec's section 7 requires that is already a
  `package.json` script. Nothing else: no installs, no `infra/mini` run, no nightly dispatch, no deploy, no `gh`, no ssh,
  no network.
- A change that does not match the spec is a deviation: record it (section 4), never hide it in the diff.
- **Diagnostics live in `$TMPDIR` only.** A probe test, a dump of a test run, a script that reads output the shell
  truncates: all of it goes under `$TMPDIR`, never under `tests/` (the runner picks it up) and never at the repo root.
  Nothing created for diagnosis survives into a commit; emptying such a file with a "safe to delete" note is not
  removing it. (PR #6 committed `probe-out.txt` and `tests/unit/zz-probe.test.ts`; the review had to strip them.)
- **"Do X, or Y if X is impossible" means attempt X first.** Try X; only when it fails take Y, and record in "Built,
  deviations" what failed and how (the command, the error). A fallback taken without the attempt is a deviation the
  spec did not allow. (PR #6 copied `editDistance` locally while `@bc-observatory/search` was already bundled.)

**What the spec needs that you may not do** (an install on the Mini, `infra/mini/*.sh`, a nightly dispatch, a deploy, a
publish, a command outside the list): build the code, and write each such step into "Built, deviations" and into the
HANDOFF entry as an operator step with the exact command. The outcome is `built` with a note naming them. When the
spec cannot be meaningfully built without one of them, end `needs-answer` with the one question.

## 4. Ship-time edits (the spec's section 12, applied)

Last, once tests and verification pass (section 5), in the same branch.

**Operator mode never edits the spec it builds, nor `CLAUDE.md`.** The League's review reads both from the pinned base
and quarantines a build whose commits change either, before any model reads the diff: "the build edited its own
contract" (waldo.Jarvis spec 696, amendment N1). PR #12 (issue #10) was quarantined on 2026-10-19 for the spec edits
this section used to ask for. So in operator mode the spec's own edits (section 12, the Definition of Done, both status
lines) go into a hand-over file, and the review of the PR applies them before merge (`sdd-review` section 6). A manual
session edits the spec itself, as below.

- **The spec** (manual session): insert `## 12. Built, deviations (<date>)` before the old section 12, which becomes
  `## 13. Proposed edits to other files (applied <date>, see section 12)`. Section 12 says what was built and in which
  commits, what was verified (commands and results), a spec-versus-measured table where the spec had numbers, every
  deviation or "none", and the operator steps still open. Tick the Definition of Done; an unticked item is a deviation.
- **The hand-over file** (operator mode, instead of the spec): `docs/built/<slug>.md`, `<slug>` the spec's. Line 1 is
  `# Built, deviations: docs/specs/<slug>.md (<date>)`; then the section 12 body exactly as the bullet above describes
  it; then the Definition of Done, each item marked passed or not (not passed is a deviation); then the two status lines
  of the "Status" bullet below, to be set by the review; then any edit the spec's proposed edits ask of `CLAUDE.md`.
  List the file in the report's `files`. The League does not show the report's `notes` in the PR, so this file is the
  only place the reviewer finds what you built and where it differs.
- **`docs/DECISIONS.md`:** append the spec's Dnn text (the reserved number), with measured numbers and deviations
  written in.
- **`docs/PLAN.md`:** the Mnn row from `proposed` to `shipped <date>`.
- **`docs/HANDOFF.md`:** move the entry from "Open specs" to "Where things stand" as a shipped bullet: what readers see
  now, what still needs a nightly or a derive, the operator steps. If it was the last one, "Open specs" reads `None open.`
  In operator mode the bullet also says that the spec's own edits wait in `docs/built/<slug>.md` for the review.
  **Every command you write into HANDOFF or RUNBOOK comes from a documented procedure in this repository**, with the
  decision or doc cited next to it (an MCP release is `gh workflow run publish-mcp.yml --ref main`, D40). Never write
  what a tool usually does: PR #6's HANDOFF said `npm publish -w packages/mcp`, which this repo never runs. When the
  spec says "as the last release was" and you cannot find how, that is an operator step, named as such, not a command.
- Whatever the spec's sections 12 and 13 name (`AGENTS.md`, `docs/RUNBOOK.md`, pointer lines in related specs). In
  operator mode an edit to `CLAUDE.md` goes into the hand-over file, never into `CLAUDE.md`.
- **Status:** frontmatter `status: implemented`, and the body line becomes `Status: implemented, <date> (section 12
  records what was built and where it differs). Decision: Dnn (appended <date>). Milestone: Mnn. Owner: waldo.` Keep
  `issue:` as it is. Only when the outcome is `built`; for `plan-waiting`, `needs-answer` and `failed` the status stays.
  Operator mode writes both lines into the hand-over file; the spec keeps the status it had.
- Nothing else. `tests/unit/specs-frontmatter.test.ts` checks that the two status lines agree.

## 5. Verify

`npm run typecheck && npm test`, then every command of the spec's section 7 that is a `package.json` script (the
others are operator steps), then `git diff --stat origin/main -- content data` against what the spec says it changes.
`pr-validate` is the CI the League requires; it also runs `validate:content`, `validate:sources` and `lint:workflows`:
run them when the spec touches what they check. Report a failure with its output. A check you skipped is a skipped
check, not a pass. Failing tests you cannot fix: outcome `failed`, status stays, no ship-time edits.

## 6. Ambiguity

- **Operator mode:** one concrete question, outcome `needs-answer`; commit finished phases only, nothing half-done.
- **Manual session:** `AskUserQuestion`, one decision per question, your recommendation first. A hard stop (a failing
  check you cannot fix, a collision you cannot resolve) is reported, not asked about.
- A spec claim that no longer matches the tree (a moved file, a shifted line number) is not ambiguity: re-verify
  against the tree, build what the spec means, list the correction under "Built, deviations". A contradiction that
  changes behaviour is ambiguity.

## 7. Git and outcome

Stage files by name, never `git add -A`. Conventional prefixes (`feat:`, `fix:`, `docs:`, `pipeline:`, `infra:`); the
commit body names the spec, Dnn and Mnn. Do not touch `**/CHANGELOG.md` or `scripts/release*` in operator mode, nor the
spec you build or `CLAUDE.md` (section 4).

- **Operator mode:** commit on the branch; stop. End with the report the League asked for. Outcomes:
  `built` (everything in the spec's tasks done and verified; operator steps listed), `plan-waiting` (rating `risky` or
  `breaking`, section 1), `needs-answer` (section 6, or the spec cannot be built without an operator step), `failed`
  (red evidence missing, a check failing that you cannot fix, or a spec that contradicts the tree beyond a deviation).
- **Manual session:** show the owner the diff summary and ask before pushing, unless they said to ship. Then:
  1. `gh run list --workflow nightly --limit 1`: a push touching `pipeline/render|link|lib` starts a derive, and a
     live nightly on the Mini loses a push race; a docs-only push is safe, still avoid the last minutes of a run.
  2. `if git rebase origin/main >/tmp/rb.log 2>&1; then echo ok; else echo "rebase conflict: resolve, do not push"; fi`,
     reading the exit status directly (never piped through `tail`). A conflict in `docs/PLAN.md`, `docs/HANDOFF.md` or
     `docs/DECISIONS.md` means another session took your numbers: keep both sides, renumber yours, say so in the commit.
  3. `npm run typecheck && npm test` on the rebased tree, then `git push origin HEAD:main`.
  4. Remove the worktree; tell the owner what needs a nightly (`gh workflow run nightly -f stages=derive`) before
     readers see the change.
