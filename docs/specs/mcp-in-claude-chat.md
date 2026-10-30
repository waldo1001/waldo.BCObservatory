---
issue: 24
status: implemented
---

# The observatory in Claude Desktop without Node, and skills that say when the server is missing

Status: implemented, 2026-10-30 (section 12 records what was built and where it differs). Decision: D105 (appended
2026-10-30). Milestone: M43. Owner: waldo. The owner's word on 2026-10-30: build the
desktop extension and the skills' missing-server rule; the hosted server (the former phase 2) is parked in section 8
with no trigger, the owner decides when. The owner asked for the build on 2026-10-30 ("Build it here").
Scope: a Claude Desktop extension (`.mcpb`) of today's stdio server, built and attached to a GitHub release by the
existing publish workflow; a download button for it on `/mcp` and in `INSTALL.md`; one rule in each of the four skills
for the case where no `bc-observatory` tool is available; the version bumps. Every claim about the tree was verified
against `389e1fcd56` on 2026-10-30. Claims about Claude come from the Claude docs as read on 2026-10-22 (links in
section 1); the coder re-reads the MCPB manifest page at build time (section 9).
Not in scope: a hosted server and the `plugin/.mcp.json` switch (section 8), a directory listing (section 8),
authentication (the data is public), procedure bodies (still by policy, D67), and hosting the other two servers.

## 1. Goal

**The problem, after D124.** The install guide per surface that the first version of this spec asked for is built:
`INSTALL.md` (D124, M59) walks a claude.ai user through **Customize > Plugins**, the marketplace and the **Add** on
each connector (`INSTALL.md:40-100`), says plainly that `bc-observatory` "does not work in the browser or on your
phone" (`INSTALL.md:72-73`), and answers "Can Claude install it for me?" with "No" (`INSTALL.md:28`). The `/mcp` page
has one tab per harness (`installTabs`, `site/src/lib/mcp.ts:118-129`); its "Claude Desktop and chat" tab
(`:127`) links the guide. Two gaps remain:

- **Claude Desktop needs Node and a hand-edited config file.** `INSTALL.md` part B (`:140-185`) asks the reader to
  check `node --version`, install Node 22 if missing, open `claude_desktop_config.json` from **Settings > Developer >
  Edit Config**, paste a JSON block into the right place with the right commas, and restart the app. D124 exists
  because exactly that Node requirement broke a Copilot install. Claude Desktop can instead install a desktop
  extension, a `.mcpb`, "in a single click", with Node "included with Claude Desktop on macOS and Windows, so users
  need no separate runtime" ([MCPB](https://claude.com/docs/connectors/building/mcpb)). The server is a single file
  already (`dist/server.js`, D86, `packages/mcp/build.ts`), with only the MCP SDK and zod left as imports
  (`build.ts:19`, `external: Object.keys(pkg.dependencies)`); a bundle with those two inlined is the whole extension.
- **The skills answer from memory when the server is missing.** On claude.ai the plugin loads the four skills and no
  `bc-observatory` tool ([platform support](https://claude.com/docs/plugins/platform-support): a local MCP server is
  "Ignored" in chat). `plugin/skills/bcobs-lookup/SKILL.md:8` says "never answer object ids, field numbers or
  versions from memory" and "If the `bc_*` tools are deferred, load them with ToolSearch first", but none of the four
  skills says what to do when the tools are not there at all, and none links the install guide (`grep -L '#install'
  plugin/skills/*/SKILL.md` lists all four). The skill that knows the server is missing is the only thing in a chat
  that can tell the user how to get it: no Claude doc describes chat installing a plugin or a connector for the user,
  and Claude suggests a connector on its own only when it is in Anthropic's directory ("Custom connectors are never
  suggested", [directory vs custom](https://claude.com/docs/connectors/building/directory-vs-custom)).

**What this phase does not change.** `plugin/.mcp.json` keeps `bc-observatory` as the local command (`npx -y
bc-observatory@latest`; `tests/unit/mcp.test.ts:78` pins `command === "npx"`). Queries keep running on the user's
machine, on every surface where the server runs at all. Chat and phone users still get the skills, bc-code-atlas and
Microsoft Learn, and no observatory search: that stays "not yet" in `INSTALL.md`'s table until the owner decides on
section 8.

After this change:
- A Claude Desktop user downloads one file, `bc-observatory.mcpb`, and double-clicks it. No Node, no config file. The
  `/mcp` page's "Claude Desktop and chat" tab and `INSTALL.md` part B lead with it; the config file stays as the
  alternative.
- The extension is built by `publish-mcp.yml` with each MCP release and attached to a GitHub release `mcp-v<version>`;
  `releases/latest/download/bc-observatory.mcpb` is the stable URL.
- When a skill finds no `bc-observatory` tool, it says so before answering, links the install guide, and does not
  invent ids.

## 2. Reader- and agent-facing behaviour, after

**`/mcp` and `/mcp.md`** (`site/src/lib/mcp.ts`). The `claude-desktop` tab (`:127`) changes to:

- `label` stays "Claude Desktop and chat". `node` stays `false`.
- `note`: "Claude in the browser and on your phone need no Node: you add the plugin's skills and connectors in Claude
  itself. Claude Desktop adds the observatory's own search with the extension below: download it and double-click it,
  no Node needed (Claude Desktop brings its own). Step by step for both: INSTALL.md."
- `buttons`: `[{ label: "Open the install guide", href: installGuide(repo) }, { label: "Download the Desktop
  extension (.mcpb)", href: MCPB_URL }]`.

`mcpMarkdown` renders buttons as links already (`:153`), so `/mcp.md` gets the download link with no further change.
The page's install section keeps its `id="install"` (`site/src/pages/mcp/index.astro:60`), which the skills' link
below relies on.

**`INSTALL.md`.** The "What works where" table (`:19-24`): the Claude Desktop row becomes "yes, with step B of its
guide (one download)". Part B of the Claude Desktop guide (`### B. The observatory's own search`, `:140`) gets two
ways, in this order, as numbered steps under the same `###` heading (the test at `tests/unit/mcp.test.ts:627-650`
counts exactly four `### Before you start` / `### Check that it works` / `### Something went wrong` / `### Remove it`
headings and requires the `"command": "npx"` snippet to stay, so neither way gets a heading of those names and the
config snippet stays):

- **The extension (no Node).** Steps: download `bc-observatory.mcpb` (the `MCPB_URL`); double-click it, or drag it
  into the Claude window, or **Settings > Extensions > Advanced settings > Install Extension**; select **Install** in
  the dialog Claude Desktop shows; "You should see: BC Observatory under Settings > Extensions, switched on". The
  "Before you start" Node bullet (`:125-134`) is reworded: "Node.js ... : only for the config-file way of part B; the
  extension does not need it."
- **The config file (if you prefer, or on Linux).** Today's steps 1-6 (`:142-185`), unchanged. One sentence before
  them: "Use one of the two ways, not both: two entries give Claude Desktop two bc-observatory servers."
- "Remove it" (Desktop) adds: "The extension: **Settings > Extensions** > BC Observatory > Uninstall."
- "Something went wrong" (Desktop) adds one row: "Claude Desktop says the extension cannot be installed" -> "Update
  Claude Desktop (Claude menu > Check for Updates…), then try again. Extensions need a recent version."

**Skills.** `plugin/skills/bcobs-lookup/SKILL.md`, `bcobs-whats-new`, `bcobs-localization` and `bcobs-grounding` each
get one paragraph, right after the first heading, verbatim:

> If no `bc-observatory` tool (`bc_search`, `bc_cat`, `bc_get_object`, ...) is available, even after ToolSearch, say
> so before answering, and give the install steps for the user's app from
> https://waldo1001.github.io/waldo.BCObservatory/mcp/#install (Claude in the browser or on your phone: the
> observatory's search is not available there yet; Claude Desktop: the extension; Claude Code: the plugin). Do not
> invent object ids, field numbers or versions while the server is missing.

**`plugin/README.md`** server table, the `bc-observatory` row (`:31`), column 6 ("What leaves your machine") adds one
sentence at the end: "Claude Desktop: the extension (`.mcpb`, linked from the MCP page) runs the same server the same
way, from Claude Desktop's own Node." The header line (`:3`) carries the new versions.

**`README.md`** install table (`:29`): the "Claude Desktop, claude.ai, phone" row's third column becomes "Desktop only
(one download, no Node)".

**MCP server.** Unchanged: the same tools, the same answers. The extension is `dist/server.js` with its two npm
dependencies inlined.

## 3. Decisions

Draft D105 text:

> **D105 The observatory in Claude Desktop without Node, and skills that say when the server is missing (M43).**
>
> **(a)** A Claude Desktop extension `bc-observatory.mcpb`: the stdio server bundled with the MCP SDK and zod inlined
> (a second esbuild output of `packages/mcp/build.ts`), packed by `publish-mcp.yml` (D40) and attached to a GitHub
> release `mcp-v<version>`. The download URL is `releases/latest/download/bc-observatory.mcpb` (`MCPB_URL`), linked
> from `/mcp` and `INSTALL.md`, which lead with it for Claude Desktop and keep the config file as the alternative.
> Queries stay on the user's machine, the same promise as `npx`.
>
> **(b)** Each of the four skills says, when no `bc-observatory` tool is available, that the server is missing, links
> `/mcp/#install`, and does not answer ids from memory. On claude.ai that is as close to "Claude, install it" as a
> custom connector gets: chat cannot add a plugin or a connector for the user, and Claude suggests only
> directory-listed connectors.
>
> **(c)** A hosted server (Streamable HTTP, rate-limited, `plugin/.mcp.json` on its URL) and a directory listing are
> parked, not decided (spec section 8). The owner takes them up when there is a reason to; nothing in this decision
> prepares for them beyond keeping `createServer()` transport-agnostic, which it already is.

Rejected, with the reason:

- **A second server name for the extension** (`bc-observatory-desktop`). The skills name `bc-observatory`
  (`plugin/skills/*/SKILL.md`); a different name in Desktop would make the skills' tool references wrong there. The
  manifest's `name` is `bc-observatory`.
- **Publishing the `.mcpb` to npm or to GitHub Pages instead of a release.** npm is for the package, and the site's
  deploy (`pages.yml`) would carry a binary of a few MB with every push. A GitHub release is what MCPB bundles are
  made for, and `releases/latest/download/<file>` is a stable URL without a version in it.
- **A separate `build-mcpb.yml` workflow.** The extension must carry the same code, the same `VERSION` and the same
  telemetry string as the npm release; one workflow with one build keeps them equal (D110's `AI_CONNECTION_STRING`
  is a build-time `define`, `build.ts:22`).
- **Keeping the config-file way out of `INSTALL.md` once the extension exists.** Linux has no Claude Desktop
  extension support (`compatibility.platforms` is macOS and Windows), and the test at `mcp.test.ts:638` pins the
  snippet to `plugin/.mcp.json`'s command, which is the one place a reader can see what the plugin runs.
- **The hosted server now.** Rejected for this phase by the owner on 2026-10-30: too early, few users yet. Its
  design is kept in section 8 so it is not lost.

## 4. Contract

**`packages/mcp/build.ts`.** Today it builds one output (`dist/server.js`, `:13-24`). It gains a second `build()`
call with the same `entryPoints`, `platform`, `format`, `target` and `define`, and `external: []`, so
`@modelcontextprotocol/sdk` and `zod` are inlined. Its `outfile` is `packages/mcp/mcpb-out/server/server.js`, outside
`dist/` so the npm tarball (`files: ["dist", "README.md"]`, `package.json:9-12`) does not carry it; `.gitignore`
gains `packages/mcp/mcpb-out/`. The `chmodSync` applies to both. The optional CLI argument (`process.argv[2]`, the
first output's path, used by `tests/unit/mcp-build.test.ts:11`) stays the first output's; a second optional argument
is the mcpb output's path. The console line names both files.

**`packages/mcp/mcpb/manifest.json`** (new, committed; the coder writes it with `npx -y @anthropic-ai/mcpb init`
and edits, then checks every field against
[MANIFEST.md](https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md) at build time; `npx -y
@anthropic-ai/mcpb validate packages/mcp/mcpb/manifest.json` must pass). Expected content:

```json
{
  "manifest_version": "<what mcpb init writes>",
  "name": "bc-observatory",
  "display_name": "BC Observatory",
  "version": "0.14.0",
  "description": "Business Central facts with evidence for Claude: AL objects, localizations, Learn, roadmap, videos, posts.",
  "author": { "name": "waldo (Eric Wauters)", "url": "https://github.com/waldo1001" },
  "homepage": "https://waldo1001.github.io/waldo.BCObservatory/mcp/",
  "license": "MIT",
  "server": {
    "type": "node",
    "entry_point": "server/server.js",
    "mcp_config": { "command": "node", "args": ["${__dirname}/server/server.js"] }
  },
  "compatibility": { "platforms": ["darwin", "win32"], "runtimes": { "node": ">=22" } }
}
```

No `icon` in this phase: the site has no favicon or icon file to reuse (`find site -name 'favicon*' -o -name
'icon*.png'` is empty at `389e1fcd56`), and the field is optional. Section 8 lists it.

**`.github/workflows/publish-mcp.yml`** (D40, `workflow_dispatch` only, `permissions: contents: read, id-token:
write` at the top). It gains a second job, `mcpb`, `needs: publish`:

- `permissions: contents: write` on this job only (the release); the top-level permissions stay.
- Steps: checkout and setup-node as in `publish` (same pinned action shas), `npm ci --ignore-scripts --no-audit
  --no-fund`, `npm run build --workspace=bc-observatory` with the same `AI_CONNECTION_STRING` env, then:

  ```bash
  set -euo pipefail
  version=$(node -p "require('./packages/mcp/package.json').version")
  node -e "const m=require('./packages/mcp/mcpb/manifest.json'); if (m.version !== '$version') { console.error('manifest.json version ' + m.version + ' != package.json ' + '$version'); process.exit(1) }"
  rm -rf pack && mkdir -p pack/server
  cp packages/mcp/mcpb/manifest.json pack/
  cp packages/mcp/mcpb-out/server/server.js pack/server/
  npx -y @anthropic-ai/mcpb validate pack/manifest.json
  npx -y @anthropic-ai/mcpb pack pack bc-observatory.mcpb
  if gh release view "mcp-v$version" >/dev/null 2>&1; then
    gh release upload "mcp-v$version" bc-observatory.mcpb --clobber
  else
    gh release create "mcp-v$version" bc-observatory.mcpb --title "bc-observatory $version" --notes "MCP server bc-observatory $version. bc-observatory.mcpb is the Claude Desktop extension: download and double-click. Install guide: https://github.com/waldo1001/waldo.BCObservatory/blob/main/INSTALL.md#claude-desktop"
  fi
  ```

  with `GH_TOKEN: ${{ github.token }}`.
- The job runs even when `publish` found the version already on npm (that step exits 0), so re-running the workflow
  re-attaches the extension with `--clobber`.
- The repository has no releases (`gh release list` printed nothing on 2026-10-30), so `releases/latest` is owned by
  this job from the first run.

**`site/src/lib/mcp.ts`.** New export next to `installGuide` (`:28`):
`export const MCPB_URL = "https://github.com/waldo1001/waldo.BCObservatory/releases/latest/download/bc-observatory.mcpb";`
and the `claude-desktop` tab of section 2.

**Versions.** MCP 0.13.0 -> 0.14.0 and plugin 0.9.0 -> 0.10.0 (the plugin's skills change). Every place, from `git
grep -n '0\.13\.0\|"0\.9\.0"' -- ':!package-lock.json' ':!docs/' ':!data/'` at `389e1fcd56`:

- MCP: `packages/mcp/package.json:3`, `packages/mcp/src/server.ts:44` (`VERSION`), `plugin/README.md:3`, and the new
  `packages/mcp/mcpb/manifest.json`.
- Plugin: `plugin/.claude-plugin/plugin.json:3`, `.claude-plugin/marketplace.json:9`, `plugin/README.md:3`.
- `package-lock.json` follows from `npm install`.

## 5. Test plan (write first)

`tests/unit/mcp-build.test.ts` (extend; a new test after the D110 one):

- Run `build.ts` with two output arguments in a temp dir. The second file exists, has the shebang, and matches
  neither `/from "@modelcontextprotocol/` nor `/from "zod"/` (fully bundled) while still matching `/function
  parseQuery\(/`.
- `packages/mcp/mcpb/manifest.json`: `version` equals `packages/mcp/package.json` `version`; `name` is
  `bc-observatory`; `server.entry_point` is `server/server.js`; `server.mcp_config.args[0]` contains
  `server/server.js`.

`tests/unit/mcp.test.ts` (extend the D124 tests, `:710-745`):

- `installTabs(...)`'s `claude-desktop` tab has a button whose `href === MCPB_URL`, `MCPB_URL` ends with
  `/releases/latest/download/bc-observatory.mcpb`, and `mcpMarkdown(...)` contains `MCPB_URL`.
- `INSTALL.md` contains `MCPB_URL` and the words `Settings > Extensions`.
- Every `plugin/skills/*/SKILL.md` contains `waldo1001.github.io/waldo.BCObservatory/mcp/#install` and the phrase
  "Do not invent object ids".
- `plugin/README.md` contains `.mcpb`.
- `:78` `command === "npx"` stays.
- `.github/workflows/publish-mcp.yml` has a job `mcpb` with `needs: publish` and `contents: write`, and mentions
  `bc-observatory.mcpb` and `gh release` (a string check; no YAML parser is in the tree).

`tests/unit/specs-frontmatter.test.ts` passes unchanged (this spec keeps `issue: 24`, `status: draft`).

## 6. Tasks

One phase, in order:

1. The tests of section 5; see them fail.
2. `site/src/lib/mcp.ts`: `MCPB_URL`, the `claude-desktop` tab's note and second button.
3. `INSTALL.md`: the table row, the Node bullet, part B's two ways, the "Something went wrong" row, "Remove it".
4. `plugin/README.md` row and `README.md` row.
5. The four skills' paragraph (section 2, verbatim).
6. `packages/mcp/build.ts` second output; `.gitignore`; `packages/mcp/mcpb/manifest.json` from `mcpb init`,
   validated.
7. The `mcpb` job in `publish-mcp.yml`.
8. Versions (section 4), `npm install` for the lock file.
9. Ship-time edits (section 11's last item).

Release, after merge: `gh workflow run publish-mcp.yml --ref main` (D40). The run publishes `bc-observatory@0.14.0`
and creates release `mcp-v0.14.0` with the extension.

No task rewrites a content page or touches `data/`. No derive is needed. The `/mcp` page changes when `pages.yml`
deploys the push.

## 7. Verification

- `npm run typecheck`, then `npx tsx --test tests/unit/mcp*.test.ts tests/unit/specs-frontmatter.test.ts`. All pass.
- `npm run build --workspace=bc-observatory`; `npx -y @anthropic-ai/mcpb validate packages/mcp/mcpb/manifest.json`.
- Pack locally the way the job does (the script of section 4 up to `pack`), then `unzip -l bc-observatory.mcpb`
  shows `manifest.json` and `server/server.js` only.
- The site build on Node 22 (RUNBOOK): `/mcp/` shows the download button on the "Claude Desktop and chat" tab;
  `/mcp.md` has the link; `#install` resolves.
- `claude plugin validate ./plugin` prints `✔ Validation passed`.
- Operator, after the release run: download `MCPB_URL` on macOS, double-click, **Install**. Ask "what is table 18 in
  Business Central" in a Desktop chat; the answer cites `bc_get_object`. **Settings > Extensions** shows BC Observatory
  0.14.0. Uninstall it there.
- Operator, claude.ai: **Customize > Plugins > Check for updates** shows plugin 0.10.0. A chat asking "what is table
  18" (with the observatory's search unavailable there) says the server is missing and links the install page, and
  gives no id from memory.

## 8. Later, not in this spec

**The hosted server (the former phase 2), parked.** No trigger; the owner decides. The design, so it is not lost:

- A Streamable HTTP entry point `packages/mcp/src/http.ts` on `node:http`: stateless (`sessionIdGenerator:
  undefined`, `enableJsonResponse: true`), `POST /mcp`, `GET /health` (503 until a `warm()` of the index), 405 for
  `GET`/`DELETE /mcp`, 64 KB body cap, no authentication (the data is public). `createServer()` (`server.ts:691`) is
  transport-agnostic already; `isMain()` (`:721-727`) stays the stdio start.
- Rate limiting per client address, plus one shared bucket for Anthropic's egress range `160.79.104.0/21` (every
  claude.ai request comes from it; plain per-IP limiting would make all claude.ai users share one budget, and
  exempting the range would leave chat traffic uncapped). Token buckets, 10,000 at most, idle ones dropped after a
  window; `BC_OBSERVATORY_CLIENT_IP_HEADER` for a proxy's header, socket address by default (no spoofing). One log
  line per call: time, tool, ms, status, anthropic-or-direct; no arguments, no addresses.
- A host-neutral `Dockerfile` (`node:22-slim`, the model files at the pinned revision with SHA-256, `server.ts:215`,
  in `/models`; a `/cache` volume for the index). Memory: 617 MB peak RSS measured on 2026-10-22 (533 MB with
  `BC_OBSERVATORY_EMBEDDINGS=0`) against 29,030 pages; the live index is 30,154 pages (`index-manifest.json`,
  2026-10-30) and `data/index/` 40 MB, so a 1 GB instance is still the floor. Cloudflare Workers (128 MB) and Render's
  free tier (512 MB) do not fit. Candidates that do: Fly.io 1 GB with a volume (about $0-6 a month, card on file),
  Google Cloud Run 1 GiB (probably free, no persistent disk), a Hugging Face Docker Space (free, sleeps). Not the
  owner's home network: the Mac Mini behind a Cloudflare Tunnel, as bc-code-atlas does, was rejected on 2026-10-22
  (public traffic on the box that runs the nightly, uptime follows the house, 620 MB against the derive).
- The switch of `plugin/.mcp.json` to `{ "type": "http", "url": "<HOSTED_URL>/mcp" }`. Note what it changes: every
  plugin user's queries then go to the hosted server by default, Claude Code users included, with a cold start of a
  few seconds and a dependency on the host being up; the local server stays available as an opt-out (`claude mcp add
  bc-observatory -- npx -y bc-observatory@latest` and the plugin's server switched off in `/mcp`, plus the Desktop
  extension). The privacy text of `plugin/README.md` column 6 would change accordingly. This default flip is the
  decision in that phase, more than the host.
- An install link for the hosted URL (`https://claude.ai/customize/connectors?modal=add-custom-connector&...`): one
  click plus a confirm, HTTP servers only.
- A `docs/RUNBOOK.md` section: deploy, health, logs, limits, rollback, and how to undo all of it.

**A directory listing** ([publish](https://claude.com/docs/directory/publish), [review
criteria](https://claude.com/docs/connectors/building/review-criteria)): the only path to Claude suggesting the
connector in a chat. Needs the hosted server.

**An icon for the extension** (`icon.png`, 512x512) once the site has one; **an MCP App UI** (an object card);
**organization rollout** (an Owner sets "Installed by default"); **Claude Desktop running the plugin's stdio server
itself**, if Claude's plugin support changes so that Desktop starts local servers from `plugin/.mcp.json` (then the
extension is still the no-Node path, and `INSTALL.md` part A would cover Desktop fully).

## 9. Risks and open questions

- **The MCPB manifest fields move with the spec.** Default: the coder follows MANIFEST.md at build time, `mcpb
  validate` is the gate, and any field that differs from section 4 is recorded in section 12.
- **`releases/latest` is owned by `publish-mcp.yml` only.** Another workflow creating releases would move "latest".
  Default: none does today; if one ever does, switch `MCPB_URL` to a pinned tag and say so in the RUNBOOK.
- **Claude Desktop's minimum version for extensions** is not stated with a number in the MCPB doc. Default: the
  "Something went wrong" row says to update the app.
- **Linux.** No extension there (`platforms` darwin and win32). Default: the config-file way stays in `INSTALL.md`
  and the Node bullet points Linux readers to it.
- **The extension and a `claude_desktop_config.json` entry both present** would give Desktop two `bc-observatory`
  servers. Default: `INSTALL.md` part B says "one of the two"; "Remove it" covers both.
- **`compatibility.runtimes.node`.** Section 4 writes `">=22"` to match the package's `engines`
  (`package.json:13-15`); Claude Desktop bundles its own Node. Default: relax to `">=20"` only if `mcpb validate` or
  Desktop refuses it, and record it.
- **The `mcpb` job needs `contents: write`** on a workflow that otherwise runs with `contents: read` and OIDC.
  Default: the permission is on the `mcpb` job only, and the job runs after `publish`, so the npm publish never runs
  with a write token.

## 10. Files

New:
- `packages/mcp/mcpb/manifest.json`

Changed:
- `packages/mcp/build.ts`
- `packages/mcp/package.json`, `packages/mcp/src/server.ts` (`VERSION`), `package-lock.json`
- `.gitignore` (`packages/mcp/mcpb-out/`)
- `.github/workflows/publish-mcp.yml`
- `site/src/lib/mcp.ts`
- `INSTALL.md`, `README.md`, `plugin/README.md`
- `plugin/skills/*/SKILL.md` (4)
- `plugin/.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`
- `tests/unit/mcp.test.ts`, `tests/unit/mcp-build.test.ts`
- `docs/DECISIONS.md`, `docs/PLAN.md` and `docs/HANDOFF.md` at ship time

## 11. Definition of Done

- [x] `tests/unit/mcp*.test.ts` and `tests/unit/specs-frontmatter.test.ts` pass; `npm run typecheck` passes.
- [x] `/mcp` and `/mcp.md` carry the download button/link (`MCPB_URL`) on the "Claude Desktop and chat" tab; `#install`
  resolves on the built site.
- [x] `INSTALL.md` part B leads with the extension and keeps the config file; the "What works where" row, the Node
  bullet, "Something went wrong" and "Remove it" are updated as in section 2.
- [x] The four skills carry the missing-server paragraph verbatim.
- [x] `packages/mcp/mcpb/manifest.json` validates; `build.ts` writes the fully bundled `mcpb-out/server/server.js`.
- [x] `publish-mcp.yml` has the `mcpb` job; after the owner's dispatch, release `mcp-v0.14.0` exists with
  `bc-observatory.mcpb` attached, `MCPB_URL` downloads it, and it installs and answers in Claude Desktop on macOS
  (operator).
- [x] Versions: MCP 0.14.0 and plugin 0.10.0 in every place of section 4.
- [x] D105 appended to docs/DECISIONS.md; PLAN M43 marked shipped; HANDOFF entry moved from "Open specs" to "Where
  things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
  implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
  status lines into docs/built/mcp-in-claude-chat.md; the PR's review moves them in (sdd-build section 4, sdd-review
  section 6).

## 12. Built, deviations (2026-10-30)

Built on branch `build/mcp-in-claude-chat` from `origin/main` at `d7ac045356`, in one commit (`feat:` below). A
manual session, at the owner's word "Build it here".

**What was built.** `MCPB_URL` and the Desktop tab's note and second button (`site/src/lib/mcp.ts`); `INSTALL.md`
part B with the extension first and the config file kept, plus the table row, the Node bullet, a "Something went wrong"
row, an update note and "Remove it"; the `README.md` and `plugin/README.md` rows; the missing-server paragraph in all
four skills, verbatim; `packages/mcp/build.ts` second output; `packages/mcp/mcpb/manifest.json`; the `mcpb` job in
`publish-mcp.yml`; versions MCP 0.15.0 and plugin 0.11.0; tests in `tests/unit/mcp.test.ts` (one D105 test) and
`tests/unit/mcp-build.test.ts` (one D105 test).

**Red, then green.** Before the change `tests/unit/mcp.test.ts` failed to load ("does not provide an export named
'MCPB_URL'") and the new `mcp-build.test.ts` test failed (2 pass, 1 fail). After: `npm run typecheck` clean; `npm test`
827 tests, 826 pass, 0 fail; `npm run lint:workflows` "6 workflows OK"; `claude plugin validate ./plugin` "✔ Validation
passed"; `npx -y @anthropic-ai/mcpb validate packages/mcp/mcpb/manifest.json` passes.

**Verified beyond the tests.**
- The fully bundled server run with `node` over stdio: `initialize` reports `bc-observatory` 0.15.0, `tools/list`
  answers, `bc_get_object {type:"table", idOrName:"18"}` returns Table 18 "Customer" from the live index.
- Packed the way the job does: `bc-observatory.mcpb` holds `manifest.json` (839 B) and `server/server.js` (1,481,856 B),
  2 files, 1.4 MB unpacked.
- `npm pack --dry-run --workspace=bc-observatory`: 4 files (LICENSE, README.md, dist/server.js 123.7 kB, package.json);
  `mcpb-out/` stays out.
- Site build on Node 24.22.1 with an 8 GB heap: 30,205 pages; `/mcp/index.html` has `id="install"` and the button
  "Download the Desktop extension (.mcpb)" on `MCPB_URL`; `/mcp.md` has the link.
- `git diff --stat origin/main -- content data`: empty.

| | Spec | Built |
|---|---|---|
| MCP version | 0.14.0 | 0.15.0 |
| Plugin version | 0.10.0 | 0.11.0 |
| Extension size | "a few MB" | 1.4 MB unpacked |
| `manifest_version` | what `mcpb init` writes | 0.2 (`@anthropic-ai/mcpb` 2.1.2) |

**Deviations.**
- **Versions.** D127 shipped MCP 0.14.0 and plugin 0.10.0 (`cf4db8e2fa`) between this spec's verification at
  `389e1fcd56` and its push, and 0.14.0 is on npm. The build takes the next ones, 0.15.0 and 0.11.0, in the same places
  section 4 lists (and the manifest). The fixture versions in `tests/unit/mcp-telemetry.test.ts` are inputs, not the
  package version, and stay.
- **`.gitignore`.** `mcpb-out/` went into `packages/mcp/.gitignore`, next to its `dist/`, not into the root
  `.gitignore`; the test reads that file.
- **README row.** The column the spec edits is "Needs Node", so "Desktop only (one download, no Node)" would read as
  "needs Node". Built: install column adds "Claude Desktop: one download, the extension", Needs Node "no (the Desktop
  extension brings its own; only the config-file way needs it)", You get "skills and connectors; the observatory's
  search in Desktop only".
- **The inlining test.** "No `from \"@modelcontextprotocol`" matched a JSDoc example inside the SDK
  (`import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv'`), not an import. The test checks
  that every top-level `import` line imports a `node:` builtin and that no `import("<package>")` remains.
- **INSTALL.md.** The two ways are bold labels inside part B, not headings, and the extension's last step says "skip
  to **Check that it works** below" as text: the anchor test (`mcp.test.ts`, the INSTALL.md test) does not know
  GitHub's `-1` suffix for the guide's second "Check that it works". Added beyond the spec: an update note (the
  extension stays at its version until the file is installed again; the config file fetches the newest at start).
- **Manifest.** Adds `repository` (optional, valid). No `icon`, as section 4 says.
- **Workflow version check** is shell (`node -p` twice and a compare), not the spec's `node -e`; same effect.

**Operator steps, done 2026-10-30.**
- Publish: the owner ran `gh workflow run publish-mcp.yml --ref main` (D40), run 41026606918: `publish` and `mcpb`
  both succeeded on the first run. `bc-observatory@0.15.0` is on npm; release `mcp-v0.15.0` holds
  `bc-observatory.mcpb`; `MCPB_URL` answers 200 and the downloaded file's manifest says 0.15.0.
- Desktop check on macOS, by the owner: installed from the `/mcp` button with the old `claude_desktop_config.json`
  entry removed first; the server log reads "Using built-in Node.js" and "Server started and connected successfully";
  "What is table 18" answers in a Desktop chat. Found on the way, fixed in `INSTALL.md` afterwards: the extension does
  not answer in a Desktop task that runs in the cloud (only in chats and in tasks linked to this computer), and its log
  is `mcp-server-BC Observatory.log` (the display name), not `mcp-server-bc-observatory.log`.

**Still open.**
- claude.ai check: **Customize > Plugins > Check for updates** shows 0.11.0; a chat asking for table 18 says the
  observatory is missing and links the install page.

## 13. Proposed edits to other files (applied 2026-10-30, see section 12)

**`docs/DECISIONS.md`:** the D105 text of section 3, with the release tag and any manifest deviation.

**`docs/PLAN.md` section 5**, the M43 row (already present, reworded):

`| **M43 Observatory in Claude Desktop without Node** | Claude Desktop extension (.mcpb) built and released by publish-mcp with each MCP release, download button on /mcp and in INSTALL.md; the four skills say how to install when the server is missing; a hosted server and a directory listing parked in the spec's section 8 (\`docs/specs/mcp-in-claude-chat.md\`, D105, proposed) | half a day | none: no LLM calls, no page rewritten |`

**`docs/HANDOFF.md`, "Open specs, not yet implemented"** (the existing D105 entry, replaced):

`- **Observatory in Claude Desktop without Node, D105** (\`docs/specs/mcp-in-claude-chat.md\`, M43, issue #24). Status: proposed 2026-10-22, revised 2026-10-30 to one phase (the .mcpb extension and the skills' missing-server rule); nothing implemented. The hosted server is parked in the spec's section 8, no trigger. Start with task 1 (the tests). Until it lands, Claude Desktop users install Node and edit claude_desktop_config.json by hand (INSTALL.md part B), and a skill with no bc-observatory tool answers from memory without saying how to get the server.`

**`AGENTS.md`:** none. **`CONTENT-NOTICE.md`:** none, because no content changes.
