---
issue: 54
status: draft
---

# Agents ask the Observatory before they search the web

Status: proposed, 2026-10-27. Decision: D123 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M58
(reserved). Owner: waldo.
Scope: a `PreToolUse` hook in the plugin that reminds the agent of `bc_search` when it is about to web-search a Business
Central question, one more line in the MCP server's instructions about deferred tools, sharper skill descriptions, a
small `claude plugin eval` suite that measures the change, a README note against registering the server twice, and the
version bumps (plugin 0.8.0 to 0.9.0, MCP 0.12.0 to 0.12.1). Every claim below was verified against the tree at
`d173a45695` on 2026-10-27. Not in scope: the iFacto company CLAUDE.md (repository BCCompanyGuidelines, the owner
changes it there), GitHub Copilot CLI hooks (different format, section 8), claude.ai and Claude Desktop chat (no hooks;
D105 covers the connectors).

## 1. Goal

D108 (`docs/DECISIONS.md:1213`) fixed one way agents missed the Observatory: deferred tools are found by keyword, so
the tools became `bc_*` with descriptions that start "Business Central". The owner still sees the same failure "pretty
much every time": a Business Central question, no `bc_*` call, a web search, a wrong answer. A real example from
2026-10-26: asked which events fire when company data is cleared, the agent web-searched and answered with an event
that does not exist (`OnClearDatabaseConfiguration`); asked afterwards "why didn't you use bcobs", it said the
Observatory tools were deferred, it took that for "not available", and never loaded them. The Observatory had
`OnClearCompanyConfig` and `OnClearDatabaseConfig` in codeunit 1886, every subscriber, and BCApps #13005.

What the agent had in context at that moment, verified in a Claude Code session on 2026-10-27:

- The server instructions (`packages/mcp/src/server.ts:669-679`), including "Use these tools FIRST for any Business
  Central question". They arrive, but as one block among about ten servers' instructions (the BC Telemetry Buddy block
  alone is several times longer and says MANDATORY repeatedly). More words there do not win.
- The `bc_*` tool names only: with many MCP servers Claude Code defers tool schemas behind ToolSearch. `WebSearch` is
  a built-in and costs the agent nothing to reach.
- The plugin's skills, listed every turn. That listing is the always-visible surface, and `bcobs-lookup`'s
  description (`plugin/skills/bcobs-lookup/SKILL.md:3`) says "Look up ... facts with evidence", not "use this first,
  before web search".
- Nothing deterministic. A hook runs whatever the model decides.

The owner's machine also registered the server twice (once by `claude mcp add` in the home folder, once by the plugin),
which doubles the tool names. `plugin/README.md:66-72` offers `claude mcp add bc-observatory` as "Install by hand
instead" without saying it must not be combined with the plugin.

After this change:

- An agent that calls `WebSearch` or `WebFetch` with a Business Central query gets, next to the result, one short
  reminder: the Observatory is connected, its tools may be deferred, load them with ToolSearch and call `bc_search`.
  The search still runs.
- The server instructions say in so many words that a deferred tool is available, not missing.
- `bcobs-lookup`'s description opens with "Use first for any Business Central question, before web search".
- A four-case eval, run before and after, says whether this moved anything.
- `plugin/README.md` warns against registering the server by hand next to the plugin.

## 2. Reader- and agent-facing behaviour, after

**The hook.** `plugin/hooks/hooks.json` registers one `PreToolUse` hook, matcher `WebSearch|WebFetch`. It reads the
hook's stdin JSON, takes `tool_input.query` (WebSearch) or `tool_input.url` plus `tool_input.prompt` (WebFetch), and
when that text is a Business Central question (section 4) prints:

```json
{"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":"<REMINDER>"}}
```

`<REMINDER>`, exact text:

> This looks like a Business Central question. The bc-observatory MCP server is connected and answers these with
> evidence: call bc_search first (bc_whats_new for what is new, bc_get_object for one AL object). If its tools are
> deferred, load them with ToolSearch "bc-observatory": deferred means available, not missing. Use the web only for
> what the Observatory has no answer to, and say so.

It sets no `permissionDecision`: the search runs as it would have. Otherwise it prints nothing and exits 0. It never
blocks, never writes files, never calls the network, and any error (bad JSON, missing field) exits 0 silently.
`BC_OBSERVATORY_HOOK=0` in the environment turns it off. A `WebFetch` of a URL the Observatory itself handed out
(`learn.microsoft.com`, `waldo1001.github.io`) gets no reminder: that is the agent following the Observatory, not
bypassing it.

**The instructions** gain one item, after item 2:

> 3. These tools may be deferred (only their names listed). A deferred tool is available: load it with ToolSearch
> ("bc-observatory" or "bc_search") and call it, before WebSearch or WebFetch.

The items after it renumber (3 to 7 become 4 to 8).

**`bcobs-lookup` description**, new text:

> Use FIRST for any Microsoft Dynamics 365 Business Central (BC) question, before web search: AL objects (tables,
> pages, codeunits, events, fields, procedures), ids, Learn documentation, setup, roadmap features, videos and community
> posts, with evidence, through the bc-observatory MCP server (load its tools with ToolSearch when they are deferred);
> reads a Learn page or an AL code sample through Microsoft's Learn MCP. Use when a question involves Business Central
> objects, ids, events, procedures, setup, features, "where is this documented" or "how do I set up".

The body's first line after the heading gains: "If the `bc_*` tools are deferred, load them with ToolSearch first."
The other three skills keep their descriptions.

**`plugin/README.md`** gains a section "A reminder before web search" (what the hook does, the exact reminder, that it
never blocks, `BC_OBSERVATORY_HOOK=0`, that it is Claude Code only), and the "Install by hand instead" bullet gains:
"Not next to the plugin: that registers the server twice, and the agent sees every tool twice. Claude Desktop's own
`claude_desktop_config.json` also shows up in its Code tab, so keep one of the two there as well."

## 3. Decisions

Draft D123:

> **D123 The plugin reminds the agent of the Observatory before a web search (2026-10-27, M58).** D108 made the tools
> findable; agents still did not look. The plugin now ships a `PreToolUse` hook on WebSearch and WebFetch that adds a
> one-paragraph reminder (call bc_search, load deferred tools with ToolSearch) when the query is about Business
> Central, and never blocks. The instructions say a deferred tool is available; `bcobs-lookup` says "use first, before
> web search". A four-case `claude plugin eval` measured it: <before> -> <after> (section 12 of
> `docs/specs/bc-question-routing.md`).

Rejected:

- **Deny the web search until a `bc_*` tool was called** (owner's choice 2026-10-27). Strongest push, but the hook must
  keep per-session state, and a false match blocks a legitimate search.
- **`UserPromptSubmit` on every Business Central prompt.** Catches the question before the agent picks a tool, but adds
  noise to every BC prompt, including those about this repository.
- **Only longer instructions.** They already say FIRST and were ignored (section 1).
- **`PostToolUse` instead of `PreToolUse`.** Documented to carry `additionalContext` too; kept as the fallback when
  task 1 shows the `PreToolUse` context does not reach the model (section 9).
- **Skip the eval, read D110 telemetry after the release.** Cheaper, but only noisy and after the fact (owner's choice).

## 4. Contract

`plugin/hooks/hooks.json` (Claude Code's plugin hook file: top-level `"hooks"` key, default location, per
code.claude.com/docs/en/plugins/manifest-reference):

```json
{
  "hooks": {
    "PreToolUse": [
      { "matcher": "WebSearch|WebFetch",
        "hooks": [{ "type": "command", "command": "node \"${CLAUDE_PLUGIN_ROOT}/hooks/bc-first.mjs\"" }] }
    ]
  }
}
```

`plugin/hooks/bc-first.mjs`: plain ESM, no dependencies (it runs from the installed plugin folder, where there is no
`node_modules`; the plugin already needs node for `npx`). Exports:

- `isBcQuestion(text: string): boolean`: true when any of these match, case-insensitive unless noted:
  `\bbusiness central\b`, `\bdynamics 365 bc\b`, `\bdynamics nav\b`, `\bBC ?[1-3][0-9]\b` (case-sensitive),
  `\bAL (object|language|extension|code|developer)\b`, `\b(codeunit|tableextension|pageextension|enumextension|
  reportextension)\b`, `\bBCApps\b`, `\bAL-Go\b`, `\bOn(After|Before)[A-Z]\w+\b` (case-sensitive),
  `\bbusinesscentral\b`, `/dynamics365/business-central/`.
- `REMINDER: string`: the text in section 2.
- `SKIP_HOSTS = ["learn.microsoft.com", "waldo1001.github.io"]`.
- `decide(input: unknown, env: Record<string, string | undefined>): string | null`: the JSON line to print, or null.
  Null when `env.BC_OBSERVATORY_HOOK === "0"`, when `input.tool_name` is not `WebSearch` or `WebFetch`, when a WebFetch
  URL's host is in `SKIP_HOSTS`, or when `isBcQuestion` is false on `query` (WebSearch) or `url + " " + prompt`
  (WebFetch).
- Run as a script (`import.meta.url` is the entry): read stdin, `JSON.parse`, print `decide(...)` when not null; any
  throw exits 0 with no output.

Example stdin and output:

```json
{"tool_name":"WebSearch","tool_input":{"query":"Business Central clear company data event subscriber"},"tool_use_id":"x"}
```
```json
{"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":"This looks like a Business Central question. ..."}}
```

`packages/mcp/src/server.ts`: one new `INSTRUCTIONS` item (section 2), items renumbered.

`plugin/evals/` (`claude plugin eval`'s default eval dir; layout from `claude plugin eval init --bare`, verified
2026-10-27: `<case>/prompt.md` with frontmatter `max_turns`, `allowed_tools`, and `<case>/graders/*.md` with frontmatter
`type`, `weight`). Four cases:

| Case | Prompt | Passes when |
|---|---|---|
| `clear-company-events` | "Which events fire in Business Central when company data is cleared, and who subscribes to them?" | a `bc_*` tool is called before any WebSearch/WebFetch, and the answer names `OnClearCompanyConfig` |
| `table-diff` | "What changed in the Customer table between BC 28 and BC 29?" | a `bc_*` tool is called before any WebSearch/WebFetch |
| `whats-new` | "What is new in Business Central this week?" | a `bc_*` tool is called before any WebSearch/WebFetch |
| `control-not-bc` | "What is the current Node.js LTS version?" | no `bc_*` tool is called |

`allowed_tools` for each: `[WebSearch, WebFetch, ToolSearch, Skill, mcp__plugin_bc-observatory_bc-observatory__*]`;
`max_turns: 12`. Graders: one `tool_used` grader where the eval format allows it, plus one `llm` grader for "first
source tool was a bc_* tool". `plugin/evals/results/` is git-ignored.

## 5. Test plan (write first)

`tests/unit/plugin-hook.test.ts`:

1. `isBcQuestion`: true for "Business Central clear company data", "BC29 table 18", "AL codeunit 80 posting",
   "OnAfterPostSalesDoc subscribers", "BCApps pull request 13005", "AL-Go release"; false for "Node.js LTS version",
   "bc command line calculator" (lowercase `bc`, no number), "Python AL lib", "BC Hydro outage".
2. `decide` with a WebSearch BC query returns a line that parses to `hookSpecificOutput.hookEventName === "PreToolUse"`
   and `additionalContext === REMINDER`, with no `permissionDecision`.
3. `decide` returns null for: a non-BC WebSearch; `BC_OBSERVATORY_HOOK=0`; tool_name `Bash`; WebFetch of
   `https://learn.microsoft.com/en-us/dynamics365/business-central/...`; malformed input (`null`, `{}`, a string).
4. WebFetch of `https://example.com/blog` with prompt "summarise the Business Central part" returns the reminder.
5. Spawning `node plugin/hooks/bc-first.mjs` with stdin `not json` exits 0 with empty stdout; with the example stdin of
   section 4 prints exactly one JSON line.
6. `plugin/hooks/hooks.json` parses, has the top-level `hooks` key, matcher `WebSearch|WebFetch`, and its command
   names a file that exists under `plugin/`.
7. `REMINDER` names `bc_search` and `ToolSearch` and contains no em-dash (house rule, `tests/unit/mcp.test.ts:214`).

`tests/unit/mcp.test.ts` additions:

8. `INSTRUCTIONS` contains "deferred" and "ToolSearch", and its items are numbered 1 to 8 without a gap.
9. `plugin/skills/bcobs-lookup/SKILL.md` description starts "Use FIRST for any Microsoft Dynamics 365 Business
   Central" and contains "before web search" and "ToolSearch".
10. `plugin/README.md` names `hooks/hooks.json`, `BC_OBSERVATORY_HOOK` and "registers the server twice".

The existing version test (`tests/unit/mcp.test.ts:65-68`) covers the bumps.

## 6. Tasks

Phase 1, measure first (no code):

1. On `main` as it is (plugin 0.8.0), write the four eval cases (task 6's files) in a scratch copy and run them once
   (section 7 command). Record the scores. Delete nothing from the scratch copy; reuse it in task 7.

Phase 2, build (one PR, ships alone):

2. Tests 1 to 10 (red).
3. `plugin/hooks/bc-first.mjs` and `plugin/hooks/hooks.json`.
4. The instructions item; the `bcobs-lookup` description and body line.
5. `plugin/README.md`: the new section and the "Install by hand" warning; `site/src/lib/mcp.ts:40` (`SKILLS` entry
   for `bcobs-lookup`) gains "Use first, before web search." at the start of `what` if the site test allows it.
6. `plugin/evals/` with the four cases; `.gitignore` gains `plugin/evals/results/`.
7. Live check (section 7, step 3), then the eval again; record both in section 12.
8. Version bumps, every place the versions live (found with `git grep -n '0\.8\.0'` and `git grep -n '0\.12\.0'`
   excluding `package-lock.json`, `docs/` and `data/`):
   - plugin 0.8.0 to 0.9.0: `plugin/.claude-plugin/plugin.json:3`, `.claude-plugin/marketplace.json:9`,
     `plugin/README.md:3`.
   - MCP 0.12.0 to 0.12.1: `packages/mcp/package.json:3`, `packages/mcp/src/server.ts:44`, `plugin/README.md:3`.
     `tests/unit/mcp-telemetry.test.ts:74-83` uses "0.12.0" as a fixture value: leave it.
9. Release: merge, then `gh workflow run publish-mcp.yml --ref main` (D40, `docs/DECISIONS.md:201`) for the MCP; the
   plugin ships from `main` through the marketplace.

No phase rewrites `content/` or `data/`.

## 7. Verification

1. `npm test` (all green, including tests 1 to 10).
2. `echo '{"tool_name":"WebSearch","tool_input":{"query":"Business Central OnClearCompanyConfig"}}' | node
   plugin/hooks/bc-first.mjs` prints the JSON line; with `BC_OBSERVATORY_HOOK=0` prints nothing.
3. Live, in an interactive Claude Code session with the plugin installed from this branch
   (`claude plugin marketplace update bc-observatory`, `claude plugin update bc-observatory@bc-observatory`, restart):
   ask "web search: Business Central events when company data is cleared". The model must see the reminder: run with
   `--debug` and check that the hook fired, then ask the agent to quote any system reminder it received after the
   search. If it did not get it, switch the event to `PostToolUse` (same matcher, same output with
   `hookEventName: "PostToolUse"`), adjust test 2, and record the switch in section 12.
4. Eval, before (task 1) and after (task 7):
   `claude plugin eval plugin --mocks off --allow-tools 'mcp__plugin_bc-observatory_bc-observatory__*' WebSearch WebFetch --runs 3 --no-publish --threshold 0`.
   That is 4 cases x 3 runs per arm, on the owner's own subscription; `--mocks off` starts the real servers
   (bc-observatory locally; the atlas and Learn are only reached if the agent calls them).

## 8. Later, not in this spec

- GitHub Copilot CLI hooks: Copilot's plugin hooks use a different file (`"version": 1`, camelCase `preToolUse`, `bash`
  and `powershell` command fields per docs.github.com/en/copilot/reference/copilot-cli-reference/cli-hooks-reference).
  A second hook file once the Claude one proves it helps.
- Read D110 telemetry (bc_search calls per session, by client) a week after the release, as a second measure.
- A once-per-session reminder (state in `${CLAUDE_PLUGIN_DATA}`) if the reminder turns out to be noisy.

## 9. Risks and open questions

- **`PreToolUse` `additionalContext` might not reach the model in the owner's build.** The hooks docs list it ("added
  to Claude's context alongside the tool result") without a version. Default: verification step 3 decides; fall back
  to `PostToolUse`, whose `additionalContext` is documented with an example.
- **Copilot CLI reads `hooks/hooks.json` as a legacy location.** It might reject or misread the Claude-format file.
  Default: after building, run `copilot plugin install waldo1001/waldo.BCObservatory:plugin` from the branch (or note
  that it cannot be checked without a push); if Copilot errors, move the file under a non-default path referenced from
  `plugin.json`'s `hooks` key and record that.
- **False positives.** "BC" alone is too common, so the pattern needs a version number or a BC-only word. A false
  positive costs one paragraph of context, never a blocked search.
- **The eval sandbox is not a crowded session.** The real failure happened with about ten servers connected; the eval
  has three. Default: report the numbers as they are and say so in section 12; do not add fake servers.
- **The baseline arm of `--ablation with-without` has no plugin, so no `bc_*` tools.** Its score is not the "before".
  The before is task 1 on plugin 0.8.0.
- **`tool_used` grader syntax for MCP tools is not verified.** Default: if the bare template does not accept it, use
  the `llm` grader alone.

## 10. Files

New: `plugin/hooks/hooks.json`, `plugin/hooks/bc-first.mjs`, `plugin/evals/{clear-company-events,table-diff,whats-new,control-not-bc}/prompt.md`
and `graders/*.md`, `tests/unit/plugin-hook.test.ts`.
Changed: `packages/mcp/src/server.ts`, `packages/mcp/package.json`, `plugin/skills/bcobs-lookup/SKILL.md`,
`plugin/README.md`, `plugin/.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `site/src/lib/mcp.ts`
(maybe, task 5), `tests/unit/mcp.test.ts`, `.gitignore`.

## 11. Definition of Done

- [ ] Tests 1 to 10 exist and pass; `npm test` green.
- [ ] Verification step 2 output as stated.
- [ ] Verification step 3: the reminder reached the model, with the event used (`PreToolUse` or `PostToolUse`) recorded.
- [ ] Eval run before and after, both score tables in section 12; `control-not-bc` calls no `bc_*` tool after.
- [ ] Plugin 0.9.0 and MCP 0.12.1 in every place listed in task 8; MCP published with `publish-mcp.yml`.
- [ ] D123 appended to docs/DECISIONS.md; PLAN M58 marked shipped; HANDOFF entry moved from "Open specs" to "Where
  things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
  implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
  status lines into docs/built/bc-question-routing.md; the PR's review moves them in (sdd-build section 4, sdd-review
  section 6).

## 12. Proposed edits to other files (not applied)

`docs/DECISIONS.md`: D123 as in section 3, with the eval numbers filled in.

`docs/PLAN.md` section 5, before `v0.2+`:
`| **M58 Observatory before web search** | plugin PreToolUse reminder on WebSearch/WebFetch, deferred-tools line in the instructions, bcobs-lookup "use first", four-case eval (\`docs/specs/bc-question-routing.md\`, D123, proposed) | small | eval: 24 agent runs, owner's subscription |`

`docs/HANDOFF.md`, "Open specs": the entry this spec's commit adds; at ship time it moves to "Where things stand".
