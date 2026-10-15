Read AGENTS.md first. It is the entry point for both humans and agents working in this repository.

<!-- waldo.Jarvis operator mode -->
## Operator mode (waldo.Jarvis)

Applies ONLY when the environment variable `JARVIS_OPERATOR=1` is set. Human sessions
ignore this section entirely. Everything else in this repository's rules still applies.

- **Approval happened upstream.** The spec you are given is approved (status
  `approved` or label `spec-approved`). That approval also covers the PLAN phase for a
  plan rated `safe` or `low-risk`: write the plan, set it `approved`, continue. A plan
  rated `risky` or `breaking` stops here: write it and end with `PLAN-WAITING`.
- **Use the repository's two entry points.** To build a spec run `/sdd-build {spec}`; to draft
  a spec from an issue run `/sdd-draft {issue}`. Follow the skill exactly; do not substitute
  your own workflow.
- **The operator holds git.** Commit on your branch as the workflow says; never push,
  never open or merge a PR, never touch the default branch.
- **Ambiguity is an answer, not a guess.** If the spec is unclear, end with
  `NEEDS-ANSWER: <question>`.
- End with the report the operator handed you.

## Taking over from the League

A branch `league/<issue>-<topic>` with an open PR labelled `league-building` is being
built by waldo.Jarvis. To take over: stop the build (HUD, phone, or the Jarvis MCP tool
`stop_league_build`), then `git fetch && git switch league/<issue>-<topic>`. The PR body
section `## League state` tells you the phase, the last test run, what is done and what
is next. Continue as a normal human session; merge when satisfied. The League will not
touch the branch again unless you hand it back.
<!-- /waldo.Jarvis operator mode -->
