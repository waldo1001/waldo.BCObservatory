---
name: bcobs-spec
description: Write a feature spec for BC Observatory that a parallel coding session can pick up and build without asking. Use when the owner asks to spec, design, write up or plan a feature, a fix or a change for the observatory ("spec this", "write a spec for", "the end goal is a spec", "maak een spec"), or to revise a proposed spec in docs/specs/. Covers where to work, the one scoping round, verifying every claim against the tree, reserving decision and milestone numbers without colliding with other sessions, the spec's sections, registering it in PLAN and HANDOFF, and pushing it so the coding session finds it. A spec session writes and pushes the spec only; it installs, runs and builds nothing. Also the spec-writing flow waldo.Jarvis's League runs from /sdd-draft (operator mode: no questions, no gh, no push).
---

# Writing a spec for BC Observatory

The owner specs in one session while another session codes. The coding session finds work in exactly one place:
the **"Open specs, not yet implemented"** section of `docs/HANDOFF.md` on `origin/main`. A spec that is not
pushed, or not listed there, does not exist for the coder.

A spec has two possible builders: a manual session (from that HANDOFF list, or `/sdd-build`), or waldo.Jarvis's
League. The League reads `docs/specs/*.md` (`.league.json`) only through a YAML frontmatter block with `---` on line 1;
a spec without `issue:` is invisible to it. Its go signal is the `spec-approved` label on the spec's GitHub issue, which
only the owner applies (the HUD's Approve button does it). Writing a spec is the same work either way; the two modes
differ only where this skill says so.

**Which mode am I in?** `echo "${JARVIS_OPERATOR:-0}"`. `1` = operator mode: the League handed this session a checkout
and an issue (`/sdd-draft`), it holds git, and there is no network credential. Anything else = a manual session.

## 1. Where to work

- Operator mode: work in the checkout and on the branch you were given; no worktree.
- Manual session: work in a worktree no coding session uses. Run `git worktree list` and ask yourself which ones are busy; when
  in doubt, create your own from `origin/main`:
  `git worktree add -b spec/<slug> ../waldo.BCObservatory-spec-<slug> origin/main`.
- Never reset, check out over, or pull into a worktree that has another session's uncommitted files.
- Read `AGENTS.md`, `docs/PLAN.md`, the tail of `docs/DECISIONS.md` and the specs in `docs/specs/` that touch
  the same code before writing.

## 2. A spec session changes nothing else

- No installs (no `uv tool install`, no `claude mcp add`, no brew), no ssh that changes the Mac Mini, no nightly
  dispatch, no code edits outside `docs/`. "Install it on the Mini" in the request describes the spec's scope:
  the spec writes the install steps for the Mini (`infra/mini/*.sh`, gated) and the developer Mac
  (`docs/RUNBOOK.md`), and how to undo them.
- Reading the tree, the committed `data/`, `gh api` on public repos and read-only probes are fine.

## 3. One scoping round, then write

Operator mode: there is nobody to ask. Skip the round, take the cheapest option for each question you would have asked,
and write every open question into section 9 with the default the coder takes. When the issue is too vague to say what
to build at all, write no spec and end `NEEDS-ANSWER: <one concrete question>`.

Manual session: before writing, ask one `AskUserQuestion` round (at most four questions) for what genuinely changes the work: how
much infrastructure, whether a principle-changing phase is in or becomes its own decision, which adjacent small
tranches ride along. Recommend the cheapest option first. Keep resident servers, embeddings and new services out
unless the owner picks them. Do not ask what the repository answers.

## 4. Verify, then claim

- Every claim about the code cites a file and line, verified against a named commit: write
  "verified against the tree at `<short sha>` on <date>" in the scope paragraph.
- Every number is measured on the committed `data/` (object counts, sizes, stars per lens), with the command or
  file that gave it. A coder will check them; wrong numbers cost a round trip.
- When the spec depends on another spec, read that spec's "built, deviations" section, not its plan.
- **A version bump lists every place the version lives.** Find them by grepping the tree for the current version
  string, not from memory: `git grep -n '0\.7\.1' -- ':!package-lock.json' ':!docs/'` for the MCP, the same for the
  plugin version, and put the full list in the task. The spec behind PR #6 listed four places and missed the fifth,
  `.claude-plugin/marketplace.json`; a coder follows the list it is given.
- **A release step names the repo's release mechanism and cites its decision**: for the MCP, the `publish-mcp` workflow
  dispatch (`gh workflow run publish-mcp.yml --ref main`, D40). "Release it as the last one was" is not an instruction:
  the coder cannot look up how the last one was done and invents a command.

## 5. Reserve the numbers

Decision numbers (`Dnn`) and milestones (`Mnn`) have no lock and collided three times in one day. Take the next
free number across origin, your tree and every other worktree:

```bash
git fetch -q origin
{ for f in DECISIONS.md PLAN.md HANDOFF.md; do git show origin/main:docs/$f; done
  git worktree list --porcelain | awk '/^worktree /{print $2"/docs"}' |
    xargs -I@ find @ -maxdepth 2 -name '*.md' -exec cat {} + 2>/dev/null
} | grep -oE '\b(D[0-9]{2,3}|M[0-9]{1,2})\b' | sort -u |
  awk '{t=substr($0,1,1); n=substr($0,2)+0; if (n>m[t]) m[t]=n} END {print "highest D" m["D"] ", highest M" m["M"]}'
```

Take one above each (on 2026-10-07 the output was D73 and M11, held by the media-rows spec session, so the next
spec takes D74 and M12), write them into the spec header as "reserved", and push soon
(section 8): the push is what claims them.

The League only appends numbers a spec already reserved; it takes none at build time, so a League build and a manual
session in parallel cannot collide on a number unless both specs were written against the same stale view. A League
draft has no network and cannot fetch: its numbers come from the local `origin/main` and the worktrees it can see. In
operator mode say so in section 9 ("reserved from the tree at `<sha>` without a fetch; re-run the number command when
approving") and in the report. A real collision surfaces when the PR merges, as a conflict in `docs/DECISIONS.md`,
`docs/PLAN.md` or `docs/HANDOFF.md`: keep both entries and renumber the later spec.

## 6. The spec file

`docs/specs/<slug>.md`, kebab-case, no number in the name. Header, then numbered sections:

```
---
issue: <N>
status: draft
---

# <Title: what changes, in the reader's words>

Status: proposed, <YYYY-MM-DD>. Decision: Dnn (reserved, appended to `docs/DECISIONS.md` at ship time). Owner: waldo.
Scope: <what it touches>. Every claim below was verified against the tree at `<sha>` on <date>. Not in scope: <...>.
```

The frontmatter is what the League reads: `---` on line 1, `issue:` a number (the GitHub issue in this repository the
spec belongs to), `status:` read by its first word (`draft`, `approved`, `implemented`; bare scalars, a trailing
` # comment` is fine). The `Status:` line in the body is for people and stays in step: `draft` is `proposed`,
`implemented` is `implemented`. `tests/unit/specs-frontmatter.test.ts` checks both, and that every spec listed in
HANDOFF "Open specs" has the frontmatter.

**Never write `status: approved` and never apply the `spec-approved` label** (or any label, or create one). Approval is
the owner's act, taken after reading the spec; a spec you write is always `draft`, in both modes, even when the owner
says "go ahead".

**The issue.** Manual session: reuse the spec's `issue:` when you are revising a spec that has one; otherwise
`gh issue list --state all --search "<title>"` for an existing one, else create it just before the commit so the
number is in the file:
`gh issue create --title "<spec title>" --body "<one paragraph: the problem and the change>\n\nSpec: docs/specs/<slug>.md (<blob url on main>), Dnn, Mnn."`
and take the number from the URL it prints. No `--label`. Operator mode: no `gh`; `issue:` is the number `/sdd-draft`
was given.

1. **Goal**: the problem with evidence (file:line, measured numbers), then "After this change:" bullets.
2. **Reader- and agent-facing behaviour, after**: pages, markdown, MCP, the site; exact wording where it matters.
3. **Decisions**: the draft Dnn text, and what was rejected with the reason for each.
4. **Contract**: functions, files, schemas, config keys, data shapes, one example record.
5. **Test plan (write first)**: unit tests with their inputs and expected outputs.
6. **Tasks**: in order, grouped in phases that can ship alone; say which phase rewrites many pages (one large
   content commit) and why.
7. **Verification**: the exact commands and checks, including the site build and any real-data check.
8. **Later, not in this spec.**
9. **Risks and open questions**: with the default the coder takes when nobody answers.
10. **Files**: new and changed.
11. **Definition of Done**: checkable, including the DECISIONS, PLAN and HANDOFF edits.
12. **Proposed edits to other files (not applied)**: the Dnn text, the PLAN row, the HANDOFF entry, anything for
    `AGENTS.md` or `CONTENT-NOTICE.md`. The coder applies them at ship time, inserts "12. Built, deviations" before it
    and keeps this one as section 13, marked applied (`/sdd-build`).

Repository rules a spec must respect, never relax: the pipeline is deterministic first, LLM last and only on deltas
(`pipeline/lib/llm.ts`, roles in `config/models.json`, no API key); generated `content/` and `data/` are never
hand-edited (`data/overrides/*.yaml`); community text stays derived (`CONTENT-NOTICE.md`); stable ids, never title
matching; secrets only on the Mini.

## 7. Register it

- `docs/PLAN.md` section 5: a milestone row `| **Mnn <short name>** | <deliverables> (\`docs/specs/<slug>.md\`, Dnn, proposed) | <effort> | <token risk> |`, before the `v0.2+` row.
- `docs/HANDOFF.md`, section "Open specs, not yet implemented": one entry with the spec path, decision, milestone,
  `Status: proposed <date>, nothing implemented`, the issue as `issue #N`, where to start (the first task), and what
  readers see until it lands.
- Do not append to `docs/DECISIONS.md`: the coder does that at ship time.

## 8. Commit and push

Operator mode: commit on the branch you were given and stop. Never push, never open or merge a PR, never touch the
default branch: the League holds git. Re-run the number command of section 5 right before the commit. The rest of this
section is the manual session's.

Stage by name, never `git add -A`. Commit only the spec, PLAN and HANDOFF:

```bash
git add docs/specs/<slug>.md docs/PLAN.md docs/HANDOFF.md
git commit -m "docs: spec for <title> (Dnn, Mnn)"
if git pull --rebase origin main; then git push origin HEAD:main; else echo "rebase conflict: resolve, do not push"; fi
```

A live nightly on the Mini rebases its checkpoints over a docs push and retries until its push lands (D58, and
`pushWithRetry` since run 37664505302 aborted on two docs pushes racing a four-minute rebase), so pushing during a run
is safe. Still prefer not to push in the last minutes of a run (`gh run list --workflow nightly --limit 1`): the final
commit carries every rewritten page. If the
rebase conflicts in `docs/HANDOFF.md` or `docs/PLAN.md`, keep both sides' entries; renumber yours if another session
took the same Dnn or Mnn, and say so in the commit.

## 9. Hand-off

Manual session: end with a short message to the owner: the spec path, the issue number (and that you created it), Dnn
and Mnn, the phases, what each costs (pages rewritten, nightly time, installs), and the open questions with their
defaults. Add the two ways on: "build it by hand with `/sdd-build docs/specs/<slug>.md`, or apply the `spec-approved`
label to issue #N to hand it to the League (it stays `draft` until you do)". A manual session starts from the HANDOFF
entry; it needs nothing else from this session.

Operator mode: end with the report the operator handed you: outcome, the spec path, Dnn and Mnn as reserved, the open
questions, and that nothing was approved.
