---
name: sdd-review
description: Review a pull request that builds a BC Observatory spec (a League PR on league/<issue>-<topic>, or a manual build branch) the way the owner reviews one - verify, never read, against the spec's own test plan and Definition of Done, then rank findings and apply fixes on the PR branch when asked. Use for "review PR N", "review the League's PR", "review this as you would have built it", "what did the coding agent get wrong".
---

# Reviewing a spec build

The PR body and the spec's "Built, deviations" section are claims. The review runs the checks itself and reports what
it ran, with the numbers; a check not run is not a pass. The main checkout is never touched (other sessions keep
uncommitted files there).

## 1. Read

`AGENTS.md`; the spec whole, section 12 (built, deviations) and 11 (Definition of Done) with care; the issue; the PR
body's `## League state`. Note every allowance the spec makes ("Y if X is impossible", "the coder trims ...") and every
operator step the builder could not run.

## 2. Set up

A worktree on the PR branch under `$TMPDIR` with its own install (`npm ci --ignore-scripts --no-audit --no-fund`): a
symlinked `node_modules` cannot resolve the workspace packages (`@bc-observatory/search`) and fakes failures. Node 22
(`~/.nvm/versions/node/v22*/bin` first on `PATH`).

## 3. Verify

- `npm run typecheck && npm test`, totals from the output, and the PR's CI status.
- Every command of the spec's section 7, including the operator steps the League could not run (for the MCP: build the
  bundle, drive it over stdio with `BC_OBSERVATORY_LOCAL=$PWD node packages/mcp/dist/server.js`, the spec's calls).
  Tick the Definition of Done items that pass, in the spec, with the date and "review of PR #N".
- `git diff --stat origin/main..<branch> -- content data` matches what the spec says changes (usually nothing).

## 4. Checklist

Each line is a finding when it fails; the first four are blocking.

- [ ] **Only the spec's files.** Every file in `git diff --stat origin/main..<branch>` is one the spec's section 10
      names, or section 12 explains it. A probe test, a dump, an empty "safe to delete" file: a leftover, remove it.
      Diagnostics belong under `$TMPDIR` only (`sdd-build` section 3).
- [ ] **No version left behind.** `git grep -n '<old version>' -- ':!package-lock.json' ':!docs/'` for every version the
      spec bumps: each hit is bumped or explained. The spec's own list of places is not evidence (PR #6 missed
      `.claude-plugin/marketplace.json`).
- [ ] **Every command in HANDOFF, RUNBOOK and the spec's operator steps comes from a documented procedure here**, with
      its decision or doc cited; check it against that doc (an MCP release is the `publish-mcp` dispatch, D40, not
      `npm publish`).
- [ ] **Tests and CI green on the final head**, and the PR body's "last test run" line is from that head with its
      totals, not from an earlier phase.
- [ ] **Allowances were earned.** For each "Y if X is impossible" the builder took Y on, section 12 records the attempt
      at X and why it failed. No attempt recorded: the fallback is a deviation.
- [ ] **Red was real.** The report names the failing test or `tsc` error before the change, for the stated reason.
- [ ] **Contract kept.** Pinned tests the spec names as unchanged (key lists, byte-for-byte answers) are unchanged in the
      diff; caps (description lengths, budgets) hold.
- [ ] **Ship-time edits complete.** Dnn appended with measured numbers, Mnn row `shipped <date>`, HANDOFF entry moved,
      frontmatter `status: implemented`, section 12 lists every deviation and every open operator step.

## 5. Report

Ranked: must fix before merge, should fix, would have done the same. Each finding names the file and line, what is
wrong, and what caused it (the builder, the spec, or stale reporting): the owner feeds that back to the coding agent.
A table of what was verified with the totals. Say whether to squash (League commits are `checkpoint(league): ...`;
the PR title carries the conventional prefix) and what the owner still runs after merge (publish dispatch, derive).

## 6. Fixes, when asked

On the PR branch in the review worktree: stage by name, one commit `fix(<scope>): review of PR #N: ...` with
`Co-Authored-By` as the session's attribution says, `npm run typecheck && npm test` green first, push to the PR
branch (`gh run list --workflow nightly --limit 1` first), then update the PR body's League state (phase, head, last
test run, next step) and the spec's section 12. Remove the worktree; leave the main checkout as it was.
