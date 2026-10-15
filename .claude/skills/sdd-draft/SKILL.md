---
name: sdd-draft
description: Draft a spec from a GitHub issue by running this repository's own spec flow (bcobs-spec) in operator mode. Entry point for waldo.Jarvis's League (`draft` in .league.json, `/sdd-draft {issue}`); also fine by hand when given an issue number. Writes one draft spec and never approves it.
---

# Drafting a spec from an issue

`/sdd-draft <issue>` turns one GitHub issue of this repository into a draft spec under `docs/specs/`, by running the
`bcobs-spec` skill (`.claude/skills/bcobs-spec/SKILL.md`) in **operator mode**. Read that skill first: it owns the
spec's sections, the frontmatter, the number reservation and the PLAN and HANDOFF registration. This skill only says
what changes when the League calls it.

## 0. Mode and input

```bash
echo "${JARVIS_OPERATOR:-0}"
```

`1` = the League: you were given a checkout, a branch and the issue's title and body in your task; there is no network
credential, so `gh` is not available and you do not need it. Outside the League, read the issue with
`gh issue view <issue> --json title,body,comments` and still follow the operator-mode rules below (no scoping round
with the owner: the issue is the brief).

If the issue gives you no title or body, or says nothing about what to build, end `NEEDS-ANSWER: <one concrete
question>` and write nothing.

## 1. Draft it

Follow `bcobs-spec` with these fixed choices:

- **Operator mode throughout:** no worktree (use the one you have), no `AskUserQuestion` round, no `gh`, no push.
  Every question you would have asked becomes an entry in section 9 with the default the coder takes.
- **Frontmatter:** `---\nissue: <issue>\nstatus: draft\n---` on line 1, the issue number you were given, and the body
  line `Status: proposed, <date>.` in step with it. Never `approved`, never a label: the owner approves by applying
  `spec-approved` to the issue.
- **Numbers:** reserve the next free Dnn and Mnn from the local tree as `bcobs-spec` section 5 says, and write in
  section 9 that they were reserved without a fetch and must be re-checked at approval.
- **Verify against the tree:** every claim cites a file and line at the local commit you name; every number is measured
  on the committed `data/` with the command beside it. A claim you cannot verify offline goes to section 9, not into
  the spec as a fact.
- **Spec only:** the files you touch are `docs/specs/<slug>.md`, the milestone row in `docs/PLAN.md` and the entry in
  `docs/HANDOFF.md` "Open specs" (with `issue #<issue>`). No code, no installs, no `infra/mini`, no nightly dispatch.
  A request to install something describes the spec's scope: write the steps into the spec.
- `slug`: kebab-case from the issue title, no number; if `docs/specs/<slug>.md` already exists, stop with
  `NEEDS-ANSWER: <slug> exists (issue #N); revise it or pick another slug?`.

## 2. Check and commit

`npm test` must pass: `tests/unit/specs-frontmatter.test.ts` checks the frontmatter and that the HANDOFF entry's spec
has it. Stage the three files by name and commit on the branch you were given
(`docs: spec for <title> (Dnn, Mnn)`). Never push, never open a PR, never touch the default branch.

## 3. Outcome

End with the report the League asked for. A written draft is `built` (note: "draft spec, status draft, awaiting
approval"); a vague issue or a slug collision is `needs-answer`; a failing check you cannot fix is `failed` with the
output. The spec is never approved by this skill.
