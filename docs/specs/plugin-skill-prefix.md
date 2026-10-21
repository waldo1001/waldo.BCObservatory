---
issue: 23
status: implemented
---

# The plugin's skills are called bcobs-*, and the plugin installs in GitHub Copilot CLI

Status: implemented, 2026-10-21 (section 12 records what was built and where it differs). Decision: D104 (appended
2026-10-21). Milestone: M42. Owner: waldo.
Scope: the four skill folders and their `name:` lines in `plugin/skills/`, the three places the skills name each other,
the skill list on the MCP page (`site/src/lib/mcp.ts`), its tests, the two READMEs that list the skills, a GitHub
Copilot CLI install step, and the plugin version (0.3.2 to 0.4.0). Every claim below was verified against the tree at
`eb7b0dfc62` on 2026-10-21. Not in scope: the MCP server (`packages/mcp`, no skill name in it), the skills' text other
than their names, the repo-local dev skills in `.claude/skills/` (`bcobs-spec`, `sdd-*`), the historical docs
(DECISIONS, PLAN, HANDOFF, `docs/specs/`, `docs/research/`), which keep the names the skills had at the time.

## 1. Goal

The plugin's four skills are called `bc-lookup`, `bc-whats-new`, `bc-localization` and `bc-grounding`
(`plugin/skills/*/SKILL.md` line 2). `bc-` is the prefix every Business Central skill author reaches for. Claude Code
shows a plugin skill with the plugin's name in front (`bc-observatory:bc-lookup`), so there it cannot collide. GitHub
Copilot CLI does not: on 2026-10-21, Copilot CLI 1.0.102 with `--plugin-dir plugin` listed the skills as plain
`bc-grounding`, `bc-localization`, `bc-lookup`, `bc-whats-new`, next to its own `customize-cloud-agent` and
`github-pr-media`. Another BC plugin with a `bc-lookup` skill collides there, and a reader of the list cannot tell
whose skill it is.

The same run showed the plugin works in Copilot CLI unchanged: `copilot --plugin-dir plugin plugin list --json` read
`plugin/.claude-plugin/plugin.json` (`bc-observatory`, 0.3.2, enabled); a session listed the four skills and the three
servers of `plugin/.mcp.json` with their tools (bc-observatory 9, bc-code-atlas 21, microsoft-learn 3); a real
`get_object` call for table 36 answered `Table 36 "Sales Header"`. Nothing on the site or in the READMEs says so: the
install steps (`site/src/lib/mcp.ts:58-65`) name Claude Code, Claude Desktop and other MCP clients, and VS Code with a
hand-written `mcp.json`, which gives the servers but not the skills.

After this change:
- The skills are `bcobs-lookup`, `bcobs-whats-new`, `bcobs-localization` and `bcobs-grounding`, with the same
  descriptions and bodies; in Claude Code they read `bc-observatory:bcobs-lookup`.
- The MCP page, its markdown twin, the README and `plugin/README.md` list the new names and a GitHub Copilot CLI install
  line, `copilot plugin install waldo1001/waldo.BCObservatory:plugin`.
- The plugin is 0.4.0 (a rename of something a user can type is a minor bump under 0.x, as the MCP's D-entries do).

Nothing changes in how the skills trigger: an agent picks a skill by its description, and the descriptions are
unchanged. The servers, their tools and `plugin/.mcp.json` are untouched.

## 2. Reader- and agent-facing behaviour, after

- **Claude Code**, after `claude plugin marketplace update` or a fresh install: the skill list shows
  `bc-observatory:bcobs-lookup`, `bc-observatory:bcobs-whats-new`, `bc-observatory:bcobs-localization`,
  `bc-observatory:bcobs-grounding`. A session open during the update keeps the old names until it restarts. A user who
  typed `/bc-observatory:bc-lookup` in their own prompt or CLAUDE.md finds it gone; the 0.4.0 line in
  `plugin/README.md` says so.
- **GitHub Copilot CLI**: `/skills list` shows the four `bcobs-*` names.
- **`bcobs-grounding`** says "see `bcobs-lookup`" (twice) and **`bcobs-lookup`** says "see `bcobs-grounding`", where
  they now say the `bc-` names (`plugin/skills/bc-grounding/SKILL.md:14`, `:21`; `plugin/skills/bc-lookup/SKILL.md:18`).
- **The MCP page** (`/mcp/` and `/mcp.md`): the skill list shows the new names (it renders `SKILLS`,
  `site/src/pages/mcp/index.astro:48`, `site/src/lib/mcp.ts:78`). The twin's heading `## The plugin (Claude Code)`
  becomes `## The plugin (Claude Code, GitHub Copilot CLI)`. A new install step, second in the list, right after the
  Claude Code plugin step:
  - client: `GitHub Copilot CLI: the plugin (server, four skills, bc-code-atlas, Microsoft Learn MCP)`
  - how: `The same plugin, installed from its folder in the repository. Copilot CLI reads the Claude Code manifest
    as it is. A plugin installed in Copilot CLI is not available in the VS Code Copilot Chat panel; use the VS Code
    step below for that.`
  - code: `copilot plugin install waldo1001/waldo.BCObservatory:plugin`
- **`README.md:19`** comment becomes `# Claude Code plugin: MCP + bcobs-lookup, bcobs-whats-new, bcobs-localization,
  bcobs-grounding`, followed by a new line
  `copilot plugin install waldo1001/waldo.BCObservatory:plugin       # the same plugin in GitHub Copilot CLI`.
- **`plugin/README.md`**: title `# BC Observatory plugin for Claude Code and GitHub Copilot CLI`; line 3 says 0.4.0;
  the install block gains the `copilot plugin install` line with one sentence ("Copilot CLI reads the same manifest;
  verified with Copilot CLI 1.0.102"); the skills table lists the `bcobs-*` names; a short note under it: "Until 0.4.0
  these were called `bc-lookup`, `bc-whats-new`, `bc-localization` and `bc-grounding`; only a name you typed yourself
  needs changing."

## 3. Decisions

**D104 draft.** *The plugin's skills are called bcobs-*, and the plugin installs in GitHub Copilot CLI (2026-10-21,
M42).* The plugin's skills `bc-lookup`, `bc-whats-new`, `bc-localization` and `bc-grounding` are renamed
`bcobs-lookup`, `bcobs-whats-new`, `bcobs-localization` and `bcobs-grounding` (plugin 0.4.0). Claude Code prefixes a
plugin skill with the plugin name, Copilot CLI does not: Copilot CLI 1.0.102 listed them bare next to its own skills,
where `bc-` is the prefix any Business Central skill would take. Descriptions and bodies are unchanged, so when a skill
triggers is unchanged; the servers are untouched. The same check showed Copilot CLI reads the plugin as it is (manifest,
skills, the three servers, a real `get_object` call), so the MCP page and both READMEs add
`copilot plugin install waldo1001/waldo.BCObservatory:plugin`. Historical docs keep the old names. Rejected:
`observatory-*` (no overlap with the repo-local `bcobs-spec` dev skill, but longer, and the project goes by bcobs);
keeping `bc-*` (fine in Claude Code, collides in Copilot CLI); a Copilot-specific manifest (`plugin.json` at the
plugin root or `.github/plugin/`), since Copilot CLI already reads `.claude-plugin/plugin.json`; documenting
`copilot plugin marketplace add` (not tested whether Copilot CLI reads `.claude-plugin/marketplace.json`; the
`owner/repo:path` form needs no marketplace).

## 4. Contract

- Folders: `plugin/skills/bc-<x>/` moved with `git mv` to `plugin/skills/bcobs-<x>/` for `x` in `lookup`, `whats-new`,
  `localization`, `grounding`. Each `SKILL.md` keeps its frontmatter except `name: bcobs-<x>`, which must equal the
  folder name.
- `site/src/lib/mcp.ts`:
  - `SKILLS[].name` (lines 33-36) take the new names; `what` unchanged.
  - New export `export const COPILOT_PLUGIN_CMD = "copilot plugin install waldo1001/waldo.BCObservatory:plugin";` next
    to `PLUGIN_CMD` (line 14).
  - `installSteps()` gets the step of section 2 at index 1, `code: COPILOT_PLUGIN_CMD`, `lang: "bash"`.
  - `mcpMarkdown()` heading at line 78 becomes `## The plugin (Claude Code, GitHub Copilot CLI)`.
- Version 0.4.0, every place `0.3.2` lives (`git grep -n '0\.3\.2' -- ':!package-lock.json' ':!docs/'` at `eb7b0dfc62`,
  exactly three hits): `.claude-plugin/marketplace.json:9`, `plugin/.claude-plugin/plugin.json:3`,
  `plugin/README.md:3`. Re-run the grep after the edit: zero hits.
- Release: none to run. The plugin is the `plugin/` folder on `main`, served by `.claude-plugin/marketplace.json` (D35);
  merging is the release. No npm publish: the MCP server does not change.

## 5. Test plan (write first)

In `tests/unit/mcp.test.ts`:

1. **New: "D104: the plugin's skills are bcobs-*, each named as its folder".** For every directory `d` in
   `plugin/skills/`: `d` starts with `bcobs-`; the `name:` line of `plugin/skills/<d>/SKILL.md` equals `d`. And no
   `SKILL.md` under `plugin/skills/` matches `/\bbc-(lookup|whats-new|localization|grounding)\b/` (catches a missed
   cross-reference). Fails before the rename (folders are `bc-*`).
2. **Changed: the D96 test (line 31)**: title and paths read `bcobs-lookup`, `bcobs-grounding`, `bcobs-localization`;
   assertions unchanged.
3. **Changed: "the twin lists every tool, skill and install step"** (line 73): also asserts
   `installSteps(repo)[1].code === COPILOT_PLUGIN_CMD` and that `md` includes `## The plugin (Claude Code, GitHub Copilot CLI)`.
4. **Changed: "every ask names a tool ... and the README's commands match"** (line 66): also asserts
   `README.md` and `plugin/README.md` include `COPILOT_PLUGIN_CMD`.
5. **Unchanged and still passing**: "the skill list is the plugin's skills folder" (line 23) and "plugin/README.md
   ... name every server and skill" (line 42) pin `SKILLS` and `plugin/README.md` to the renamed folders and the 0.4.0
   version in all three places; they fail if any of the three is missed.

## 6. Tasks

One phase; code and docs only, no page or data changes, no derive, no nightly impact.

1. Write tests 1-4; run `npm test` and see 1, 3 and 4 fail (2 fails once its paths point at missing folders).
2. `git mv` the four folders; set each `name:`; fix the three cross-references.
3. `site/src/lib/mcp.ts`: `SKILLS` names, `COPILOT_PLUGIN_CMD`, the install step, the twin heading.
4. `README.md` line 19 and the new Copilot line; `plugin/README.md` title, install block, skills table, rename note.
5. Version 0.4.0 in the three places of section 4.
6. `npm test`, `npm run typecheck`, the site build (section 7).
7. Ship-time edits (section 11).

## 7. Verification

1. `npm test` and `npm run typecheck` pass.
2. Site build on Node 22 (`export PATH="$(ls -d ~/.nvm/versions/node/v22*/bin | tail -1):$PATH"`, then the repo's site
   build): `/mcp/` and `/mcp.md` show the four `bcobs-*` names and the Copilot CLI step.
3. `git grep -nE '\bbc-(lookup|whats-new|localization|grounding)\b' -- ':!content/' ':!docs/'` returns nothing.
4. Operator step (needs the network and a Copilot sign-in, so a League build lists it and does not run it). Copilot
   CLI from the branch, no global install (Node 22, run from a scratch folder):
   `npx -y @github/copilot@latest --plugin-dir <worktree>/plugin plugin list --json` shows `bc-observatory` 0.4.0;
   `npx -y @github/copilot@latest --plugin-dir <worktree>/plugin -p "Without calling any tool: list the names of every skill you have."`
   lists the four `bcobs-*` names. About 4 Copilot AI credits.
5. Operator step after merge (writes `~/.copilot`): `npx -y @github/copilot@latest plugin install
   waldo1001/waldo.BCObservatory:plugin`, then `plugin list` shows 0.4.0; time the install (the repo pack is 419 MB;
   this tells whether a slim plugin repo is needed, section 8); `plugin uninstall bc-observatory` to undo.
6. Operator step after merge, Claude Code: `claude plugin marketplace update bc-observatory`, restart the session,
   the skill list shows `bc-observatory:bcobs-*`.

## 8. Later, not in this spec

- The remaining "Claude Code plugin" wording that is now narrower than the truth: `AGENTS.md:77`,
  `packages/mcp/README.md:11`, `site/src/pages/index.astro:70`, `site/src/pages/llms.txt.ts:45`,
  `site/src/pages/mcp/index.astro:3,17,20,23`. Correct as it stands (it is a Claude Code plugin); widen when Copilot
  CLI support has been seen by real users.
- `copilot plugin marketplace add waldo1001/waldo.BCObservatory` (untested; see D104 rejected).
- A slim plugin repository if the install time of section 7 step 5 says the 419 MB repo pack hurts.
- The test message `(D97: a release bumps both)` at `tests/unit/mcp.test.ts:59` cites D97, which is the section-alias
  decision; the marketplace version rule came with the plugin's releases. Cosmetic; fix when the test is next touched.

## 9. Risks and open questions

1. **Copilot CLI's GitHub install path is not yet seen.** `--plugin-dir` was verified; `owner/repo:path` was not.
   Default: ship the docs line; section 7 step 5 confirms it after merge. If it fails, the coder of a follow-up removes
   the line, not this spec's rename.
2. **Someone typed an old name.** Only a hand-written `/bc-observatory:bc-*` breaks. Default: the note in
   `plugin/README.md`, no aliases (a skill cannot have two names, and a duplicate skill folder would trigger twice).
3. **The `bcobs-` prefix is shared with the repo-local dev skills** (`.claude/skills/bcobs-spec`). Only visible in a
   session in this repository, where both are expected. Default: accept.

## 10. Files

Moved: `plugin/skills/bc-{lookup,whats-new,localization,grounding}/` to `plugin/skills/bcobs-{...}/` (SKILL.md edited in
each). Changed: `site/src/lib/mcp.ts`, `tests/unit/mcp.test.ts`, `README.md`, `plugin/README.md`,
`plugin/.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`. Ship time: `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, this spec. New: none (a League build adds `docs/built/plugin-skill-prefix.md`).

## 11. Definition of Done

- [x] `plugin/skills/` holds exactly `bcobs-grounding`, `bcobs-localization`, `bcobs-lookup`, `bcobs-whats-new`, each
  `SKILL.md` with `name:` equal to its folder; descriptions and bodies differ from `eb7b0dfc62` only in the three
  cross-references.
- [x] Section 7 step 3 grep returns nothing (one hit, the rename note: deviation 1 of section 12).
- [x] `SKILLS` in `site/src/lib/mcp.ts` carries the new names; `COPILOT_PLUGIN_CMD` exists and is install step 2; the
  twin heading reads `## The plugin (Claude Code, GitHub Copilot CLI)`.
- [x] `README.md` and `plugin/README.md` list the new names and the `copilot plugin install` line; `plugin/README.md`
  has the rename note.
- [x] `git grep -n '0\.3\.2' -- ':!package-lock.json' ':!docs/'` returns nothing; the three places say 0.4.0.
- [x] Tests 1-4 of section 5 written and passing; `npm test` and `npm run typecheck` pass.
- [x] Section 7 steps 4, 5 and 6 listed as operator steps, with their exact commands, in section 12 and the HANDOFF
  entry. A manual build may run step 4 and quote its output (version and skill names) in section 12.
- [x] D104 appended to docs/DECISIONS.md; PLAN M42 marked shipped; HANDOFF entry moved from "Open specs" to "Where
  things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
  implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
  status lines into docs/built/plugin-skill-prefix.md; the PR's review moves them in (sdd-build section 4, sdd-review
  section 6).

## 12. Built, deviations (2026-10-21)

Built in a manual session in one phase, commit `bb755d50bc` (code, tests, READMEs, version) on top of `d70f1f8d4a`,
and the ship-time docs commit after it. What changed: the four folders moved with `git mv` to
`plugin/skills/bcobs-{lookup,whats-new,localization,grounding}/`, each `name:` set, the three cross-references
renamed; `SKILLS`, `COPILOT_PLUGIN_CMD`, install step 2 and the twin heading in `site/src/lib/mcp.ts`; `README.md`
and `plugin/README.md` (title, install block, skills table, rename note); 0.4.0 in `.claude-plugin/marketplace.json`,
`plugin/.claude-plugin/plugin.json` and `plugin/README.md`.

Red: with the tests written and only `COPILOT_PLUGIN_CMD` exported, `tests/unit/mcp.test.ts` failed in test 1 (the
D104 test: `'bc-grounding'`, a folder without the prefix), test 2 (the D96 test: `ENOENT ... plugin/skills/bcobs-lookup/SKILL.md`),
test 3 (the twin test: install step 2 is not the Copilot CLI step) and test 4 (`both READMEs give the Copilot CLI
install (D104)`). Before the export, the whole file failed on the missing `COPILOT_PLUGIN_CMD` import.

Verified:

| Check (section 7) | Result |
|---|---|
| 1. `npm run typecheck`; `npm test` | exit 0; 659 tests, 658 pass, 0 fail, 1 skipped |
| 2. `npm run site:build` (Node 22) | exit 0, 29,079 pages; `site/dist/mcp/index.html` and `site/dist/mcp.md` each name the four `bcobs-*` skills and `copilot plugin install waldo1001/waldo.BCObservatory:plugin` once, `bc-lookup` zero times |
| 3. old names outside `content/` and `docs/` | one hit, the rename note `plugin/README.md:35` (deviation 1) |
| 4. Copilot CLI 1.0.102, `--plugin-dir` on the branch's `plugin/` | `plugin list --json`: `bc-observatory`, 0.4.0, enabled; a session lists `bcobs-grounding`, `bcobs-localization`, `bcobs-lookup`, `bcobs-whats-new` next to Copilot's own `customize-cloud-agent`, `github-pr-media` (2.45 AI credits) |
| version grep `0\.3\.2` outside docs and the lockfile | no hits |

Deviations:
1. **Section 7 step 3 cannot return nothing.** The rename note section 2 asks for in `plugin/README.md` names the four
   old skills on purpose. The grep returns exactly that line. Also, `git grep -nE '\bbc-...'` matches nothing at all
   on macOS (`\b` is not an ERE escape there), so the command as written passes vacuously; the check used
   `git grep -nP` and `git grep -nE '(^|[^a-z])bc-(...)'`, both giving the one line. The unit test (section 5 test 1)
   uses a JavaScript regex, where `\b` works.
2. **Step 4 ran here.** The spec makes it an operator step (a League build cannot run it); a manual build may, and did:
   output in the table above.

Operator steps still open (they write outside this repository, so the build left them to the owner):
- Step 5, Copilot CLI from GitHub, after merge (writes `~/.copilot`):
  `npx -y @github/copilot@latest plugin install waldo1001/waldo.BCObservatory:plugin`, then
  `npx -y @github/copilot@latest plugin list` shows `bc-observatory` 0.4.0; time the install (spec section 8, slim
  repo); `npx -y @github/copilot@latest plugin uninstall bc-observatory` to undo. Node 22 first on PATH.
- Step 6, Claude Code, after merge: `claude plugin marketplace update bc-observatory`, restart the session; the skill
  list shows `bc-observatory:bcobs-*`.

## 13. Proposed edits to other files (applied 2026-10-21, see section 12)

**`docs/DECISIONS.md`**, appended: the D104 text of section 3, ending
`Measured: the unit tests of section 5; Copilot CLI with the renamed skills is operator step 4 (or its output, when a
manual build ran it). Spec: docs/specs/plugin-skill-prefix.md.`

**`docs/PLAN.md`** section 5, the M42 row (added with this spec, before `v0.2+`); at ship time mark it shipped.

**`docs/HANDOFF.md`**, at ship time move the entry from "Open specs" to "Where things stand":
`- **Plugin skills bcobs-*, Copilot CLI install, D104** (docs/specs/plugin-skill-prefix.md, M42, issue #23). The
plugin's four skills are bcobs-lookup, bcobs-whats-new, bcobs-localization, bcobs-grounding (plugin 0.4.0); the MCP
page and READMEs add the Copilot CLI install line. Operator steps: spec section 7 steps 4, 5 and 6.`

**`AGENTS.md`**, **`CONTENT-NOTICE.md`**: nothing (section 8 keeps the `AGENTS.md:77` wording for later).

The spec's own edits (section 12 "Built, deviations" inserted before this section, which stays as 13 marked applied,
the ticked Definition of Done, `status: implemented`) are the builder's in a manual build, the PR review's in a League
build.
