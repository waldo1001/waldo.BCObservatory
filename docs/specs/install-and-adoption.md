---
issue: 55
status: implemented
---

# Easier plugin installs, and the site invites you to use it from your agent

Status: implemented, 2026-10-27 (section 12 records what was built and where it differs). Decision: D124 (appended
2026-10-27). Milestone: M59. Owner: waldo.
Scope: the install path for the plugin and the MCP server in every harness, and the places that invite a reader to
install it. Specifically:
- one Node.js requirement, taken from `engines`, stated the same way everywhere;
- a "Before you start" Node check, with a one-line install per OS, in every guide that needs Node, plus troubleshooting
  rows;
- a README that leads with the plugin and has a table with one row per harness;
- harness tabs on /mcp with copy buttons, one-click VS Code and Cursor links, and a "check it works" step per tab;
- the VS Code agent-plugin path, behind one manual check;
- an "Ask your agent" prompt on object, feature and code-change pages and on an empty search, built in the browser
  (zero bytes per page);
- a dismissable "Use it from your agent" pill in the header.

Every claim about the tree below was verified against `ae69af0363` on 2026-10-27. Claims about VS Code and Cursor come
from their documentation as read on 2026-10-27 (links in section 1).
Not in scope:
- A hosted server, which removes Node for good. That stays D105 phase 2 (`docs/specs/mcp-in-claude-chat.md`).
- A Claude Desktop `.mcpb` (D105 phase 1).
- Changes to the MCP server or the plugin's skills and hooks. There is no npm publish and no version bump.
- Any change to how the nightly pipeline builds content.

## 1. Goal

**The problem.** On 2026-10-27 a user reported that the plugin install in Copilot failed because Node.js was not on
their system. Nothing they read told them, at the moment it mattered. The evidence:

- **Only one server needs Node, but nothing says so.** The plugin's `bc-observatory` server is
  `npx -y bc-observatory@latest` (`plugin/.mcp.json:3-6`). The other two are HTTP (`plugin/.mcp.json:7-14`). The
  D123 hook is `node ".../bc-first.mjs"` (`plugin/hooks/hooks.json:7`), so in Claude Code a missing Node also breaks
  the hook. Copilot CLI is now installed as a standalone binary (brew, winget), so a Copilot user often has no Node.
  The error they see is a server that "failed" or tools that never appear. No message names Node.
- **The Node requirement is stated four different ways.** The real requirement is
  `"node": "^22.23.4 || ^24.22.1 || >=26.12.1"` (`packages/mcp/package.json:14`, the same in the root
  `package.json:7`, from 8dbb3be8e6, the October 2026 Node security releases). The docs disagree with it and with
  each other:
  - "Node 20 or newer": `site/src/lib/mcp.ts:84`, `site/src/pages/mcp/index.astro:71`, `INSTALL.md:209`,
    `INSTALL.md:230`, `INSTALL.md:274`.
  - "20 or higher": `INSTALL.md:129`.
  - "22 or newer": `INSTALL.md:290`.
- **The Copilot CLI guide is the thinnest one.** Its "Before you start" is one sentence (`INSTALL.md:288-290`). It has
  no "Something went wrong" table, while the Claude Code guide has one (`INSTALL.md:270-276`).
- **The README leads with the server-only install.** The first command under "Use it from an agent" is
  `claude mcp add bc-observatory -- npx -y bc-observatory@latest` (`README.md:18`). The plugin comes two lines later
  with no word on why it is better: three servers, four skills, and the D123 reminder.
- **/mcp shows six code blocks in a stack** (`site/src/lib/mcp.ts:66-75`, rendered at
  `site/src/pages/mcp/index.astro:61-64`). They have no copy buttons, no one-click links and no per-harness
  prerequisites. The only Node line is a footnote at the bottom (`index.astro:71`). VS Code is told to hand-edit
  `mcp.json` (`mcp.ts:72`).
- **VS Code can install the plugin now, and we don't say so.** VS Code installs agent plugins from a Git repository
  ("Chat: Install Plugin From Source", or `/plugin install <source>`) or from a marketplace
  (`chat.plugins.marketplaces` takes `owner/repo`), and "supports existing Copilot, Claude, and legacy OpenPlugin
  formats" (https://code.visualstudio.com/docs/agent-customization/agent-plugins, read 2026-10-27). The page also warns
  that format support "doesn't guarantee that every component works in every harness". INSTALL.md and /mcp both say a
  plugin is not available in VS Code Copilot Chat (`INSTALL.md:304`, `mcp.ts:69`). That is true of a plugin installed
  in Copilot CLI, but not of VS Code's own install.
- **The site never invites a reader to use it from an agent.**
  - The header pill is the week's news only (`site/src/layouts/Base.astro:45-51`).
  - A page's actions are "Open in Claude" (a claude.ai prompt with the page's markdown URL,
    `site/src/lib/page.ts:39-42`) and the markdown twin (`site/src/layouts/Page.astro:54-59`).
  - An empty search says only `No results for "<q>".` (`site/src/scripts/search.ts:90`).
- **Bytes.** The last Pages run measured a 714.9 MB tar (run 40501495450, 2026-10-27). The limit is 900 MB (D76).
  There are 29,593 content pages, 25,687 of them objects (`git ls-files content/** | wc -l`,
  `git ls-files content/objects/** | wc -l`). One byte added to every page costs about 29.6 KB, so nothing in this spec
  may add bytes to a page's HTML. Page-level UI is built in the one Page.astro module, and site-wide UI in `chrome.ts`
  (D76, D88).

**After this change:**

- Every guide that needs Node says so first, in the same words, with the check, a one-line install per OS and "restart
  the app afterwards". The words come from one constant that a test ties to `engines`.
- Copilot CLI has the same "Something went wrong" table as Claude Code, with "no Node" as its first row.
- The README leads with the plugin, in a table with one row per harness: its install, whether it needs Node, and what
  you get.
- /mcp has one tab per harness: Claude Code, Copilot CLI, VS Code, Cursor, Claude Desktop and chat, Other. Each tab has
  its prerequisite, its commands with a copy button, a one-click button where the harness has one, and the "table 18 is
  Customer" check.
- VS Code leads with the plugin once the owner's one-time check passes. Otherwise it leads with a one-click server
  link.
- Object, feature and code-change pages get an "Ask your agent" button next to "Open in Claude". It opens two
  ready-made prompts about that page, each with Copy, and a link to install the plugin. An empty search says the agent
  can search this too.
- Every page except home and /mcp shows a small "Use it from your agent" pill in the header. One click on × hides it
  for 90 days.
- Object pages are byte-identical before and after, except for the bundled module's hashed name, which keeps its
  length.

## 2. Reader- and agent-facing behaviour, after

### 2.1 The Node line, one wording

`NODE_REQUIREMENT` in `site/src/lib/mcp.ts` is "Node.js 22 or newer (the current LTS is fine)". The 22 is the lowest
major in `engines`, read at test time from `packages/mcp/package.json`. Every place that names a Node version uses
exactly this phrase (INSTALL.md, README.md, plugin/README.md, the /mcp page and its twin).

The engines floor is a security floor. `npx` only warns on a mismatch, since npm's `engine-strict` is off by default,
so the docs give the major and do not repeat patch numbers. Section 9 says why.

### 2.2 INSTALL.md

**"Before you start", for the Claude Desktop part B, Claude Code and Copilot CLI guides.** Same block, same order:

> - **Node.js:** the BC Observatory server runs on it (Node.js 22 or newer (the current LTS is fine)). Check: open a
>   terminal (Mac: **Terminal**; Windows: **Command Prompt**), type `node --version`, press Enter.
>   - A version of 22 or higher (for example `v22.23.4`): you have it.
>   - "command not found" or "not recognized", or a lower version: install it.
>     - Windows: `winget install OpenJS.NodeJS.LTS`
>     - Mac: `brew install node`, or the installer from [nodejs.org](https://nodejs.org/)
>     - Linux: the LTS from [nodejs.org](https://nodejs.org/en/download) (distribution packages are often older)
>   - Then **quit and restart** the app you install into (Claude Desktop, your terminal, VS Code). An app started
>     before the install does not see Node.

The Claude Desktop block keeps its "part B needs it" lead-in. The browser and phone guide needs no Node and gets
nothing.

**"Something went wrong" for Copilot CLI (new):**

| What you see | What to do |
|---|---|
| `copilot plugin list` shows **bc-observatory**, but the agent has no `bc_` tools, or the server shows as failed | Node.js is missing or too old: see "Before you start", then restart Copilot CLI. bc-code-atlas and Microsoft Learn still work without it. |
| The install says the plugin is not found | Check the spelling: `waldo1001/waldo.BCObservatory:plugin`, with `:plugin` at the end. |
| On a company network the server never starts | `npx` must reach `registry.npmjs.org`; ask for it, or set `npm config set registry <your mirror>`. |

**The Claude Code table** keeps its rows. The `/mcp` row says "Node.js 22 or newer (the current LTS is fine)" and adds
"An error from a `bc-first.mjs` hook before a web search means the same thing: Node is missing."

**VS Code (GitHub Copilot Chat), a fifth guide, only if the VS Code check of section 6, phase 2 passes.** It has the
same four parts as the others (Before you start, Steps, Check that it works, Remove it):

- **Before you start:** VS Code with GitHub Copilot, the setting `chat.plugins.enabled` on, and Node (the block above).
- **Steps:**
  1. Open the Command Palette and run **Chat: Install Plugin From Source**.
  2. Enter `https://github.com/waldo1001/waldo.BCObservatory`.
  3. Pick **bc-observatory**.

  Whatever the check finds is what the guide says. Alternatively, add `"chat.plugins.marketplaces":
  ["waldo1001/waldo.BCObservatory"]` and install from `@agentPlugins` in the Extensions view.
- **Remove it:** whatever the check finds.

The line "A plugin installed in Copilot CLI is not available in the VS Code Copilot Chat panel" (`INSTALL.md:304`)
stays, and points at the new guide.

If the check fails, the guide is not written, `INSTALL.md:304` keeps pointing at /mcp, and section 9 records what
failed.

### 2.3 README.md "Use it from an agent"

The heading stays (other pages link to it). It becomes:

> **Install the plugin, not just the server.** The plugin connects three MCP servers (the Observatory, bc-code-atlas
> for AL source, Microsoft Learn) and four skills that tell your agent when to use them, plus a reminder to ask the
> Observatory before it searches the web. Only the Observatory server needs Node.js 22 or newer (the current LTS is
> fine).
>
> | You use | Install | Needs Node | You get |
> |---|---|---|---|
> | Claude Code | `claude plugin marketplace add waldo1001/waldo.BCObservatory` then `claude plugin install bc-observatory@bc-observatory` | yes | plugin: 3 servers, 4 skills, the reminder |
> | GitHub Copilot CLI | `copilot plugin install waldo1001/waldo.BCObservatory:plugin` | yes | plugin: 3 servers, 4 skills |
> | VS Code (Copilot Chat) | see /mcp, VS Code tab | yes | the plugin (phase 2 result), else the 3 servers |
> | Cursor, Windsurf, other MCP clients | see /mcp, Other tab (one-click for Cursor) | yes | the 3 servers |
> | Claude Desktop, claude.ai, phone | [INSTALL.md](INSTALL.md) | Desktop only | skills and connectors |
> | Nothing to install | [llms.txt](...), GitMCP, DeepWiki | no | read-only |
>
> Then ask: *What is table 18 in Business Central? Use BC Observatory.* It should answer **Customer**.

Under it, the server-only command (`claude mcp add ...`) moves to a line "Server only, no skills:", followed by the
existing checkout line.

The README cannot carry `vscode:` or `cursor:` buttons, because GitHub strips non-https links. The /mcp page carries
them.

### 2.4 /mcp, the Install section

The `#install` id stays. The section becomes a tab list built from `installTabs()` (section 4), one tab per harness,
in this order:

1. **Claude Code:** Node block, the plugin's two commands (copy button), "Server only" folded in a `<details>`, then
   "Check it works".
2. **Copilot CLI:** Node block, the one command (copy), Check it works.
3. **VS Code:** depends on phase 2.
   - If the check passed: the plugin steps of 2.2, with a "Copy repository URL" button.
   - Always: an **Install the server in VS Code** button (`vscode:mcp/install?...`, section 4) and the three-server
     `mcp.json` (copy), as "Without the plugin".
4. **Cursor:** an **Add to Cursor** button (`cursor://anysphere.cursor-deeplink/mcp/install?...`) for
   `bc-observatory`, then the three-server JSON (copy) for bc-code-atlas and Microsoft Learn.
5. **Claude Desktop and chat:** a short pointer to the INSTALL.md guides (no Node for chat; Desktop part B needs Node).
6. **Other MCP clients:** today's generic JSON (copy), the checkout line, and "Without any install".

Each tab with Node shows the Node block of 2.1 above its commands, with one line per OS. Each tab ends with:

> **Check it works.** Ask: *What is table 18 in Business Central? Use BC Observatory.* The answer says **Customer**.
> If it doesn't, see "Something went wrong" in [INSTALL.md](...).

**Without script,** the tabs are a plain `<h3>` per harness in the same order, so the page still reads top to bottom.
With script, a small inline module on this page only (one page, bytes do not matter here) turns them into
`role="tablist"`. The last chosen tab is remembered in `localStorage` (`bcobs-install-tab`, wrapped in try/catch). A
`#install-<id>` hash opens that tab.

The footnote "Needs Node 20 or newer" (`index.astro:71`) becomes `NODE_REQUIREMENT`. The markdown twin
(`mcpMarkdown`) renders one `### <tab label>` per tab, with the same code and the Node line.

### 2.5 "Ask your agent" on a page

On a page whose `.type-label` is an object type, `roadmap feature` or begins `code change`, `mountAskAgent()`
(in the Page.astro module) adds a button **Ask your agent** to `.actions`, after "Open in Claude". On click it opens a
small popover (the same pattern as the video stage dialog, built on first click, D88). The popover contains:

- two prompts, each in a `<code>` row with a **Copy** button (the object page's `copy()` fallback, moved to a shared
  module);
- a last line: "No agent set up? **Install the plugin →**" (`<base>mcp/#install`).

Prompts. `<title>` is the h1 text as shown, for example `Table 18 "Customer"`:

| Page kind | Prompt 1 | Prompt 2 |
|---|---|---|
| object (`table`, `page`, `codeunit`, ...) | `What changed in <title> between the last Business Central versions? Use BC Observatory.` | `Which events does <title> publish, and who subscribes to them? Use BC Observatory.` |
| object of a type without events (`enum`, `interface`, `controladdin`, `permissionset`, ...) | as above | `Where is <title> used in the base application? Use BC Observatory.` |
| `roadmap feature` | `What is the status of the Business Central roadmap feature "<title>", and what do Learn and the community say about it? Use BC Observatory.` | `Which AL objects does "<title>" touch? Use BC Observatory.` |
| `code change · ...` | `Explain the Business Central code change "<title>" and what it means for my extensions. Use BC Observatory.` | `Which other changes touched the same objects as "<title>"? Use BC Observatory.` |

The kinds that get the button are exactly the ones in this table. Every other kind gets nothing.

### 2.6 Empty search

When `statusLine` returns the empty text, `search.ts` adds one more line under the status (a `<p class="meta">`):

> Your agent can search this too, with every field and event: **use the Observatory from your agent →**

It links to `<base>mcp/#install`. The line is built in script, so search/index.astro gains no bytes.

### 2.7 The header pill

`mountChrome()` appends a pill to `#menu`, after the week pill, so it sits in the header on wide screens and in the
Browse sheet on narrow ones (`Base.astro:14-15`):

> **Use it from your agent →** ×

- The text links to `<base>mcp/#install`. × is a `<button aria-label="Hide for 90 days">`.
- It is not shown on the home page (`location.pathname === base`), on `<base>mcp/`, or within 90 days of a click on ×.
  The dismissal is `localStorage["bcobs-agent-pill"]`, holding the dismissal time in milliseconds; reads and writes
  are wrapped in try/catch. Without storage it shows, and × hides it for that page view.
- It reuses the `.new-pill` look, with no new colour tokens.

## 3. Decisions

**D124 (draft text):**

> **D124 The install path names Node first, the README and /mcp lead with the plugin per harness, and the site invites
> readers to use it from an agent (2026-10-27, M59).** A user's Copilot plugin install failed on a missing Node.js
> with no message naming it. The Node requirement is one phrase (`NODE_REQUIREMENT`, "Node.js 22 or newer (the current
> LTS is fine)") tied by a test to the lowest major of `engines`. Every guide that needs it says so first, with a
> one-line install per OS and "restart the app". Copilot CLI got a "Something went wrong" table. The README leads with
> the plugin in a per-harness table. /mcp shows one tab per harness, with copy buttons, `vscode:mcp/install` and
> `cursor://.../mcp/install` one-click links and a check per tab. VS Code <leads with the agent plugin | keeps the
> one-click server link, because ...> (the owner's check, <VS Code version>). Object, feature and code-change pages
> get an "Ask your agent" popover with two prompts, an empty search points at the plugin, and a header pill invites
> readers until dismissed for 90 days. All three are built in script: object pages are byte-identical. Rejected:
> hosting (D105), a Node check in a hook (the hook itself needs Node), a "get the plugin" footer in MCP answers (tokens
> on every call, aimed at people who already have it), patch numbers in the docs (`npx` only warns). Spec
> `docs/specs/install-and-adoption.md`, issue #55.

**Rejected, with reasons:**

- **A Node check in a plugin hook.** The hook runs `node`, so it cannot report that Node is missing. A shell hook would
  need one script per OS, and Copilot CLI does not run Claude-format hooks (D123 spec, section 8).
- **A Node check at server start.** The server runs on Node, so it never starts when Node is missing. An old Node
  already gets npm's engine warning.
- **Per-OS single-file binaries.** Signing and notarisation, three builds a night, for a problem D105 removes.
- **The "Ask your agent" markup in the static HTML.** About 400 bytes × 25,687 objects is about 10 MB of tar. Built
  in script, it costs 0.
- **Prompts that name fixed BC versions ("between BC 29 and 30").** They go stale at every wave. "The last Business
  Central versions" lets `bc_diff_object` pick, and the server knows which versions it has.
- **A pill that never comes back once closed** (owner, 2026-10-27: 90 days).
- **VS Code server-only as the lead** (owner, 2026-10-27: plugin first if verified).
- **"Ask your agent" on every page kind** (owner, 2026-10-27: objects, features, changes).

## 4. Contract

`site/src/lib/mcp.ts`:

```ts
/** The lowest Node major in an engines range: "^22.23.4 || ^24.22.1 || >=26.12.1" -> 22. */
export function nodeMajor(engines: string): number;
/** D124: the one phrase every install text uses. */
export const NODE_REQUIREMENT = "Node.js 22 or newer (the current LTS is fine)";
export const NODE_INSTALL = [
  { os: "Windows", how: "winget install OpenJS.NodeJS.LTS" },
  { os: "Mac", how: "brew install node" },
  { os: "Linux", how: "the LTS from https://nodejs.org/en/download" },
] as const;
export const CHECK_ASK = "What is table 18 in Business Central? Use BC Observatory.";

export interface InstallTab {
  id: "claude-code" | "copilot-cli" | "vscode" | "cursor" | "claude-desktop" | "other";
  label: string;            // "Claude Code", "Copilot CLI", "VS Code", "Cursor", "Claude Desktop and chat", "Other MCP clients"
  node: boolean;            // shows the Node block
  steps: InstallStep[];     // today's InstallStep shape: client, how, code, lang
  buttons: { label: string; href: string }[];   // one-click links; empty for most tabs
  more?: InstallStep[];     // "Server only" / "Without the plugin", folded
}
export function installTabs(repo: string, opts: { vscodePlugin: boolean }): InstallTab[];

/** vscode:mcp/install?<encodeURIComponent(JSON)>, the format of https://code.visualstudio.com/api/extension-guides/ai/mcp */
export function vscodeInstallLink(name: string, config: Record<string, unknown>): string;
/** cursor://anysphere.cursor-deeplink/mcp/install?name=<name>&config=<base64(JSON)>, https://cursor.com/docs/context/mcp/install-links */
export function cursorInstallLink(name: string, config: Record<string, unknown>): string;
/** One flag for phase 2's result: true once the owner's VS Code check passed. */
export const VSCODE_PLUGIN = false;
```

`installSteps()` stays and is exported; it becomes the flat list `installTabs` draws from, so
`tests/unit/mcp.test.ts:106,109` keep their meaning. `mcpMarkdown` renders from `installTabs`.

`site/src/scripts/ask-agent-core.ts` (pure, tested):

```ts
export type AskKind = "object" | "object-no-events" | "feature" | "change";
/** From the .type-label text: "table" -> object, "enum" -> object-no-events, "roadmap feature" -> feature,
 *  "code change · fix" -> change, anything else -> null. */
export function askKind(typeLabel: string): AskKind | null;
export function askPrompts(kind: AskKind, title: string): [string, string];
/** 90-day pill: shown when there is no stored time, or it is older than 90 days, or unparsable. */
export function pillVisible(stored: string | null, now: number): boolean;
export const PILL_KEY = "bcobs-agent-pill";
export const PILL_DAYS = 90;
export function emptySearchHint(base: string): { text: string; href: string };
```

Object types without events: `enum`, `enumextension`, `interface`, `controladdin`, `dotnet`, `permissionset`,
`permissionsetextension`, `profile`, `entitlement`, `pagecustomization`. The other nine types under `content/objects/`
(`ls content/objects` at `ae69af0363`: codeunit, page, pageextension, query, report, reportextension, table,
tableextension, xmlport) are `object`.

`site/src/scripts/ask-agent.ts`: `mountAskAgent()`, imported by the Page.astro module next to `mountObjectPage()`
(`Page.astro:89-95`).

`site/src/scripts/clipboard.ts`: `copy(text)` and `copyButton(label, text)`, moved from `object-page.ts:271-290`,
which then imports them.

`chrome.ts`: `mountAgentPill(base)`, called from `mountChrome()`.

Example. Table 18:

```
askKind("table") = "object"
askPrompts("object", 'Table 18 "Customer"') = [
  'What changed in Table 18 "Customer" between the last Business Central versions? Use BC Observatory.',
  'Which events does Table 18 "Customer" publish, and who subscribes to them? Use BC Observatory.' ]
cursorInstallLink("bc-observatory", { command: "npx", args: ["-y", "bc-observatory@latest"] })
  = "cursor://anysphere.cursor-deeplink/mcp/install?name=bc-observatory&config=" + base64('{"command":"npx","args":["-y","bc-observatory@latest"]}')
```

## 5. Test plan (write first)

In `tests/unit/mcp.test.ts`:

1. `nodeMajor("^22.23.4 || ^24.22.1 || >=26.12.1") === 22`; `nodeMajor(">=20") === 20`;
   `nodeMajor("^24.1.0 || ^22.5.0") === 22`.
2. `NODE_REQUIREMENT` contains `` `Node.js ${nodeMajor(engines)} or newer` ``, where `engines` is read from
   `packages/mcp/package.json`. Raising the floor without the text fails.
3. The drift guard. No file in `INSTALL.md`, `README.md`, `plugin/README.md`, `site/src/lib/mcp.ts` or
   `site/src/pages/mcp/index.astro` matches `/Node(\.js)? \d+ or (newer|higher)/` with a number other than
   `nodeMajor(engines)`, nor `/\b(20) or (newer|higher)\b/`. Every one of these files except the site page contains
   `NODE_REQUIREMENT` verbatim (the page renders the constant).
4. `INSTALL.md`: every guide whose "Before you start" mentions Node has `winget install OpenJS.NodeJS.LTS`,
   `brew install node` and "restart" in it. The Copilot CLI guide has `### Something went wrong`.
   - Update the four-guides assertion at `tests/unit/mcp.test.ts:644`: 4 parts, or 5 when `VSCODE_PLUGIN` is true.
   - "Something went wrong" now appears in Claude Desktop, Claude Code and Copilot CLI, plus VS Code when
     `VSCODE_PLUGIN` is true.
5. `README.md`: the first fenced or inline occurrence of `PLUGIN_CMD` comes before the first occurrence of
   `SERVER_CMD`. The README contains `COPILOT_PLUGIN_CMD`, `NODE_REQUIREMENT` and `CHECK_ASK`.
6. `installTabs(repo, { vscodePlugin: false })`:
   - The ids, in order, are `claude-code, copilot-cli, vscode, cursor, claude-desktop, other`.
   - Every `node: true` tab is a harness that runs `npx`.
   - `vscode` has one button whose href starts `vscode:mcp/install?` and whose decoded JSON has `name`, `command:
     "npx"` and `args` equal to `plugin/.mcp.json`'s `bc-observatory` args.
   - `cursor` has one button whose href starts `cursor://anysphere.cursor-deeplink/mcp/install?name=bc-observatory&config=`
     and whose `config` base64-decodes to `{ command, args }` from `plugin/.mcp.json`.
   - With `vscodePlugin: true`, the `vscode` tab's first step names "Install Plugin From Source" and the repository
     URL.
7. `mcpMarkdown` has one `### <label>` per tab, every tab's code, `NODE_REQUIREMENT` and `CHECK_ASK`. The existing
   assertions keep passing: every `installSteps` client and code is in the twin, and Copilot is step 2 (D104).

In a new `tests/unit/ask-agent.test.ts`:

8. `askKind`:
   - `"table"`, `"codeunit"`, `"page"` give `object`.
   - `"enum"`, `"interface"` give `object-no-events`.
   - `"roadmap feature"` gives `feature`; `"code change · fix · breaking"` gives `change`.
   - `"video"`, `"community post"`, `"weekly digest"`, `"localization · BC30"` and `""` give `null`.
9. `askPrompts`:
   - The Table 18 example of section 4, exactly.
   - Every prompt of every kind ends with "Use BC Observatory." and contains the title once.
   - No prompt contains a BC version number (`/\bBC ?\d{2}\b/`).
10. `pillVisible`:
    - `null` gives true; `"abc"` gives true.
    - `String(now - 89 days)` gives false; `String(now - 91 days)` gives true.
    - A future time gives false.
11. `emptySearchHint("/x/")`: `href === "/x/mcp/#install"`.
12. The clipboard move: `object-page.ts` imports `copy` from `./clipboard` and no longer defines it (a source check like
    `mcp.test.ts:18`).

## 6. Tasks

**Phase 1: Node and the docs (no site bytes, no version bump).** It can ship alone.

1. Write tests 1 to 5 (red).
2. Add `nodeMajor`, `NODE_REQUIREMENT`, `NODE_INSTALL` and `CHECK_ASK` to `site/src/lib/mcp.ts`. Replace "Node 20 or
   newer" at `mcp.ts:84` and `index.astro:71`.
3. INSTALL.md:
   - the Node block of 2.2 in the Claude Desktop (`:125-131`), Claude Code (`:230`) and Copilot CLI (`:288-290`)
     guides;
   - the reworded `/mcp` row (`:274`), and the Desktop row (`:209`);
   - the new Copilot "Something went wrong" table.
   Keep the checked-on line at the bottom and add "Node lines checked 2026-10-27".
4. README.md "Use it from an agent" as in 2.3. `plugin/README.md:3-13` gets the Node line under the install block,
   and the same "Install the plugin, not just the server" sentence.
5. Tests green, `npm run typecheck`.

**Phase 2: /mcp tabs and the VS Code check.** Ships after phase 1.

6. **The owner's VS Code check (manual, about 10 minutes, the owner's Mac).** In VS Code with GitHub Copilot, set
   `chat.plugins.enabled: true`, run **Chat: Install Plugin From Source**, enter
   `https://github.com/waldo1001/waldo.BCObservatory`. Record:
   - (a) does it find `bc-observatory` through the root `.claude-plugin/marketplace.json`, or does it need the
     `plugin` folder;
   - (b) do the three MCP servers appear and start (MCP: List Servers);
   - (c) do the four skills appear;
   - (d) does `CHECK_ASK` answer Customer in agent mode;
   - (e) how to remove it;
   - (f) the VS Code version.

   (b) and (d) passing is a pass. The hook is not required (it is Claude-only). Write the result into the spec's
   "Built, deviations" and set `VSCODE_PLUGIN`.
7. Write tests 6 and 7 (red). Add `installTabs`, `vscodeInstallLink`, `cursorInstallLink` and `VSCODE_PLUGIN`.
   `mcpMarkdown` renders from tabs.
8. `site/src/pages/mcp/index.astro`:
   - the Install section as in 2.4 (an `<h3>` per tab, no-script first);
   - a page-local `<script>` for the tab behaviour and the copy buttons (it imports `clipboard.ts`);
   - CSS in the page's style block using existing tokens.
9. If `VSCODE_PLUGIN`: the fifth INSTALL.md guide (2.2), and the four-to-five test update.
10. Tests green, site build, the checks of 7.2.

**Phase 3: invitations on the site (zero bytes per page).** It can ship before or after phase 2. It needs phase 2's
`clipboard.ts`; if phase 3 lands first, it does the move.

11. Write tests 8 to 12 (red). Add `ask-agent-core.ts`, `ask-agent.ts`, `clipboard.ts`, and `mountAgentPill` in
    `chrome.ts`. Add the empty-search line in `search.ts` (next to the `statusLine` call at `search.ts:270`).
12. Wire `mountAskAgent()` into the Page.astro module. Add CSS for the popover and the pill to the existing global
    stylesheet (one file, not per page).
13. Measure the site size before and after (7.3). The object pages must not change.

**Phase 4: measurement (the owner's step in the Azure portal, no code).**

14. Before phase 1 ships, run the RUNBOOK "by client" query (`docs/RUNBOOK.md:186-188`) over the last 30 days, and
    copy the table into the spec's "Built, deviations". `az` cannot read these Logs (wrong tenant), so use the portal.
    Thirty days after phase 3 ships, run it again and add the second table. No target is set; this is a baseline.

No phase rewrites content pages. Nothing touches `content/` or `data/`.

## 7. Verification

**7.1 Unit tests and types.** `npm test` (all, not only the new files) and `npm run typecheck`.

**7.2 Site build and pages** (Node 22 first on PATH, heap as in RUNBOOK: `npm run site:build`). Then serve
`site/dist` under the base path and check in a browser, or headless with Playwright as in RUNBOOK:

- `/mcp/`:
  - Six tabs. The keyboard moves between them (arrow keys, Home and End).
  - Every Copy button copies its block (paste into a terminal).
  - With JavaScript off, six `<h3>` sections in order.
  - `/mcp/#install-cursor` opens the Cursor tab.
  - The Add to Cursor link, opened on a Mac with Cursor, offers to install `bc-observatory`.
  - The VS Code button, opened on a Mac with VS Code, offers to install the server.
  - `mcp.md` has six `###` tab headings.
- `/objects/table/18/`:
  - **Ask your agent** is after Open in Claude. It opens two prompts with `Table 18 "Customer"`; Copy works; the
    install link goes to `/mcp/#install`.
  - Esc and a click outside close it.
  - `/objects/enum/<any>/` shows the "Where is ... used" prompt.
- `/features/573253/` and one `/changes/...` page each show their prompts. A video page shows no button.
- `/search/?q=zzzzqqq` shows the "No results" line and the hint.
- The pill:
  - It is absent on `/` and on `/mcp/`, and present on `/objects/table/18/`.
  - × hides it, and a reload keeps it hidden.
  - Setting `localStorage["bcobs-agent-pill"] = String(Date.now() - 91*864e5)` and reloading shows it again.
  - At 375 px wide, it is in the Browse sheet.
- Light and dark theme: the pill and popover use existing tokens. Read their contrast.

**7.3 Bytes.**
1. Run `npx tsx scripts/site-size.ts site/dist` on a build of `origin/main` and on the branch. Tar bytes may grow only
   by the size of the JS and CSS bundles (a few KB).
2. Byte-compare `site/dist/objects/table/18/index.html` between the two builds: equal length, and differing at most in
   a hashed asset name.
3. Same check for `features/573253/index.html` and `search/index.html`.

**7.4 The VS Code check** is task 6, with its six findings written down.

## 8. Later, not in this spec

- **D105 phase 2, a hosted server.** The real fix for "no Node". When it lands, `NODE_REQUIREMENT` drops out of every
  plugin path, the README table's "Needs Node" column becomes "no", and only the server-only `npx` lines keep it.
- **A Windsurf or JetBrains one-click link**, if they publish a deeplink format.
- **A per-harness "check it works" that the server itself answers.** For example, `bc_status` could say "you are
  connected via <client>". That is a server change and an npm publish.
- **"Ask your agent" for videos, posts and digests**, if the owner wants it after seeing the first three kinds.
- **A link from `bc_feedback` to the install page.**

## 9. Risks and open questions

Each item ends with the default the coder takes when nobody answers.

- **Does the server actually run on Node 20?** It is bundled for `target: "node20"` (`packages/mcp/build.ts:15`), and
  `npx` only warns on `engines`. The docs will say 22 because 22 is the security floor, not because 20 fails.
  **Default:** say 22, never test on 20.
- **`winget` package id and `brew install node`.** `OpenJS.NodeJS.LTS` is the published winget id; `brew install node`
  installs the current release, which is above the floor. Check both when building. **Default:** if either is wrong,
  use the nodejs.org installer link alone for that OS.
- **The VS Code check may partly pass.** For example, the servers start but the skills do not appear.
  **Default:** a pass needs (b) and (d). Skills missing is a deviation written into the guide ("the skills do not load
  in VS Code yet"). The hook is not expected to run.
- **`vscode:` links need VS Code installed, and they do nothing in a browser without it.** **Default:** the button
  sits next to the copyable JSON, never alone.
- **The Cursor link format comes from Cursor's documentation, read 2026-10-27, not from a click.**
  **Default:** if 7.2's click fails, drop the button and keep the JSON. Write it as a deviation.
- **The `vscode:mcp/install` JSON shape with a `name` key** follows the VS Code extension guide's example. The user
  docs page does not show it. **Default:** as for Cursor, verify by the click in 7.2.
- **The pill adds one more thing to the header.** On narrow screens it lives in the Browse sheet, which already
  scrolls. **Default:** ship it, and read 7.2's narrow-screen check.
- **Telemetry client names are free text** (`customDimensions.client`). The baseline compares names as read, not
  mapped to harnesses. **Default:** report the table raw.
- **Numbers reserved from `origin/main` at `ae69af0363` and every worktree on 2026-10-27:** highest D123 and M58.

## 10. Files

**New:**
- `site/src/scripts/ask-agent-core.ts`
- `site/src/scripts/ask-agent.ts`
- `site/src/scripts/clipboard.ts`
- `tests/unit/ask-agent.test.ts`

**Changed:**
- `site/src/lib/mcp.ts`
- `site/src/pages/mcp/index.astro`
- `site/src/layouts/Page.astro` (module imports only)
- `site/src/scripts/chrome.ts`
- `site/src/scripts/object-page.ts` (imports `copy`)
- `site/src/scripts/search.ts`
- `site/src/styles/site.css` (the `.new-pill` rules are at `:52-57`)
- `INSTALL.md`
- `README.md`
- `plugin/README.md`
- `tests/unit/mcp.test.ts`
- at ship time: `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec

**Not changed:**
- `packages/mcp/**`
- `plugin/.mcp.json`
- `plugin/hooks/**`
- `plugin/skills/**`
- all version strings (no bump: no server, skill or manifest change)

## 11. Definition of Done

- [x] Tests 1 to 12 exist and pass; `npm test` and `npm run typecheck` are green.
- [x] No file of test 3 names a Node version other than `NODE_REQUIREMENT`'s.
- [x] INSTALL.md: the Node block in the Desktop, Claude Code and Copilot CLI guides; Copilot has "Something went
      wrong".
- [x] README.md leads with the plugin table; the server-only command comes after it.
- [x] /mcp: six tabs, copy buttons, the VS Code and Cursor one-click links, and a check per tab. The no-script view
      reads in order. The twin matches.
- [ ] (operator step, open) The VS Code check is done, with findings (a) to (f) recorded and `VSCODE_PLUGIN` set. If it passed, the fifth
      INSTALL.md guide exists.
- [x] Ask your agent on object, feature and change pages; the empty-search hint; the header pill with its 90-day
      dismissal. All 7.2 checks pass.
- [x] 7.3: object, feature and search HTML are unchanged except hashed asset names; tar growth is the bundle size
      only.
- [ ] (operator step, open) The telemetry baseline table (task 14) is in section 12.
- [x] D124 appended to docs/DECISIONS.md; PLAN M59 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/install-and-adoption.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Built, deviations (2026-10-27)

Built on branch `build/install-and-adoption` in four commits: d5373a4e72 (phase 1: the Node phrase, INSTALL.md,
README.md, plugin/README.md), adf0063a5e (phase 2: `installTabs`, the /mcp tabs, the one-click links, `clipboard.ts`),
09e303e2b5 (phase 3: `ask-agent-core.ts`, `ask-agent.ts`, the header pill, the empty-search hint), 90c5b1d6ea (the
`:global()` rules for the markup the /mcp script injects). No version bump, no publish, nothing in `content/` or `data/`.

**Red evidence.**
- Phase 1, after adding the constants: four tests failed for the stated reasons:
  - `4 guides have "Something went wrong"`;
  - `INSTALL.md: "Node.js 20 or newer"`;
  - `Claude Desktop: "winget install OpenJS.NodeJS.LTS"`;
  - `the plugin before the server-only command`.
- Phase 2: `does not provide an export named 'installTabs'`.
- Phase 3: `Cannot find module .../ask-agent-core.js`.
- Test 12 (the clipboard move) was written after phase 2 had already done the move, so it has no red run.

**Verified.**
- `npm run typecheck`: clean. `npm test`: 781 tests, 780 pass, 1 skipped (as before), 0 fail.
- Site build on Node 24.22.1 with an 8 GB heap: 29,612 pages.
- In the built-in browser, against `site/dist` served under the base path:
  - /mcp: six tabs; arrow keys, Home and End move between them; `#install-cursor` opens Cursor; the last tab is
    remembered.
  - /mcp copy and links: seven copy buttons. The Cursor link's config decodes to `plugin/.mcp.json`'s command and
    args.
  - /mcp without script: the raw HTML has six `section.itab`, none hidden.
  - The prompts: Table 18, Enum 5, roadmap feature 573253 and change bcquality/133 show their two prompts and the
    install link. A video page has no button.
  - The pill: absent on home and /mcp, present elsewhere; × hides it on every page. A stored time 91 days old shows
    it again. At 375 px it sits in the Browse sheet.
  - Search: an empty search shows the hint.
  - Light theme reads.
- `mcp.md` has six tab headings and six checks.

| Measure | Spec | Measured |
|---|---|---|
| bytes added to an object page | 0 | 0 (`objects/table/18/index.html` 153,487 bytes on both builds, identical after masking asset hashes; the same for feature 573253, search, change bcquality/133 and home) |
| tar growth | bundle size only | +20,480 bytes (749,649,920 to 749,670,400), +3 files (the new script chunks) |

**Deviations.**
1. **The B8 popover.** Object pages already had an "Ask your agent" button (D89 B8,
   `site/src/scripts/object-page.ts` `mountAsk`), with the bc-code-atlas calls. 25,667 of 25,687 object pages have
   its section. The spec did not know that. A second button with the same name would have been confusing, so on a
   page that has the B8 popover (`#ask-pop`) the Observatory's prompts are appended to it, under "Ask the
   Observatory". Pages without it get their own button. Same reader-visible result, one button.
2. **The empty-search hint** is a `span.agent-hint` inside the existing status line, not a separate
   `<p class="meta">`, so screen readers announce it with the status.
3. **`InstallTab` has an optional `note`, and `InstallStep.lang` allows `"text"`.** These carry the Claude Desktop
   tab (no code, a pointer to INSTALL.md) and the VS Code plugin step (a URL).
4. **`installHref(base)`** is exported from `ask-agent-core.ts` and shared by the prompts, the pill and the hint.
5. **One extra test:** `pickTab` (hash, then the remembered tab, then the first).

**Operator steps still open.**
- **The VS Code check** (task 6, findings a to f). On a pass: set `VSCODE_PLUGIN = true` in `site/src/lib/mcp.ts`,
  write the fifth INSTALL.md guide (2.2), and update the README's VS Code row.
- **Click both one-click links on a Mac:** the VS Code button and Add to Cursor. If either fails, drop that button
  (section 9).
- **The telemetry baseline** (task 14): the RUNBOOK "by client" query in the Azure portal, 30 days before this
  ships, then again 30 days after.
- Readers see the site changes after the next Pages run, which follows the push; no nightly is needed.

## 13. Proposed edits to other files (applied 2026-10-27, see section 12)

**`docs/DECISIONS.md`:** the D124 text of section 3, with the VS Code result and the issue number filled in.

**`docs/PLAN.md` section 5, a row before `v0.2+`:**

```
| **M59 Install and adoption** | Node requirement from engines everywhere, Copilot troubleshooting, plugin-first README, /mcp harness tabs with one-click VS Code and Cursor links, VS Code agent plugin (if verified), "Ask your agent" on object, feature and change pages, header pill (`docs/specs/install-and-adoption.md`, D124, proposed) | medium | none (no LLM) |
```

**`docs/HANDOFF.md` "Open specs, not yet implemented":**

```
- **Install and adoption, D124** (`docs/specs/install-and-adoption.md`, M59, issue #55). Status: proposed 2026-10-27,
  nothing implemented. Start with phase 1 task 1 (tests 1 to 5); phase 2 task 6 is a manual VS Code check on the
  owner's Mac. Until it lands, a harness without Node fails with no message that names Node, the docs disagree on
  the Node version (20 vs 22; engines says 22.23.4+), and the site never invites a reader to use the plugin.
```

**Nothing for** `AGENTS.md` or `CONTENT-NOTICE.md`.
