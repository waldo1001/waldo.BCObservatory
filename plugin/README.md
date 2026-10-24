# BC Observatory plugin for Claude Code and GitHub Copilot CLI

Plugin `bc-observatory` 0.6.0, with the `bc-observatory` MCP server 0.10.0. Install:

```bash
claude plugin marketplace add waldo1001/waldo.BCObservatory     # Claude Code, step 1: the marketplace
claude plugin install bc-observatory@bc-observatory             # Claude Code, step 2: the plugin
copilot plugin install waldo1001/waldo.BCObservatory:plugin  # GitHub Copilot CLI
```

Copilot CLI reads the same manifest; verified with Copilot CLI 1.0.102.

Claude in the browser, on your phone or in Claude Desktop: follow [`INSTALL.md`](../INSTALL.md), step by step. In the
browser and on the phone you get the skills, bc-code-atlas and microsoft-learn (each connector needs **Add** on the
plugin's **Connectors** tab); the `bc-observatory` server runs locally, so there it needs Claude Desktop or Claude Code.

This page says what that command puts in your session. The [MCP page](https://waldo1001.github.io/waldo.BCObservatory/mcp/)
lists the same servers and skills from data in `site/src/lib/mcp.ts`, and `tests/unit/mcp.test.ts` checks that data and
this page against `plugin/.mcp.json` and `plugin/skills/`, so the documentation cannot drift from the config.

## Three MCP servers

| Registered as | Run by | Transport | For | Not for | What leaves your machine |
|---|---|---|---|---|---|
| `bc-observatory` | this project (waldo), as the npm package [`bc-observatory`](https://www.npmjs.com/package/bc-observatory), run locally | stdio: `npx -y bc-observatory@latest` | Facts about Business Central with evidence and a trust tier: AL objects (ids, fields, events, public procedures, obsolete state, versions BC28-30, calls and callers per object), country localizations, what changed between versions, roadmap features, videos, community posts; Learn articles by title and by the identifiers they document | Procedure bodies (by policy), the text of Learn articles, anything before BC28 | Your queries stay on your machine: search runs locally. It downloads the site's search index (once a day, cached in `~/.cache/bc-observatory/`) and the markdown of a page when you read it, from `https://waldo1001.github.io/waldo.BCObservatory/` (GitHub Pages), so the paths of the pages you read are visible in those requests. The first run downloads a 30 MB embedding model from huggingface.co (pinned revision, SHA-256 checked); `BC_OBSERVATORY_EMBEDDINGS=0` turns it off. `bc_feedback` only returns a link |
| `bc-code-atlas` | Stefan Maron, a free hobby server ([bc-code-atlas](https://github.com/StefanMaron/bc-code-atlas), MIT) | HTTP: `https://bc-code-atlas.stefanmaron.dev/mcp` | The AL source: a procedure's body, what one procedure calls and who calls it (exact edges), semantic search over the code of one W1 version (`w1-28` by default) | Object facts, versions, localizations, what is new; bulk work | Every call to an atlas tool: the object and procedure names or the search text you (your agent) put in it, to the maintainer's server. One person runs it: be a polite client, one or two calls per question, no sweeps, no loops; do not request a version build unless you want to wait |
| `microsoft-learn` | Microsoft, the [Learn MCP server](https://learn.microsoft.com/training/support/mcp) | HTTP: `https://learn.microsoft.com/api/mcp` | Reading a Learn page the observatory points to (`microsoft_docs_fetch`), and AL code samples (`microsoft_code_sample_search`) | Object ids, field numbers and versions (read those from the observatory); its own search alone also returns NAV, GP and Dynamics 365 Finance pages for a Business Central question | Every call: the URL you fetch or the search text, to Microsoft's public endpoint. No authentication |

Nothing here needs an account or an API key.

## Four skills

| Skill | One line |
|---|---|
| `bcobs-lookup` | Business Central facts with evidence: AL objects, Learn documentation, roadmap features, videos and posts; reads a Learn page through the Learn MCP |
| `bcobs-whats-new` | Recent videos, posts and roadmap features with status, and what changed in the code between versions |
| `bcobs-localization` | Which objects a country layer adds, which W1 objects it changes, added fields and events, where Learn documents the local functionality |
| `bcobs-grounding` | The three servers together, and which one answers which question |

Until 0.4.0 these were called `bc-lookup`, `bc-whats-new`, `bc-localization` and `bc-grounding`; only a name you typed
yourself needs changing.

### Which server answers first

1. `bc-observatory` first, for identity and context: what it is, which id, fields, events, versions, countries, where it is documented.
2. `bc-code-atlas` for what the observatory deliberately lacks: a procedure body and one procedure's calls and callers.
3. `microsoft-learn` to read a Learn page the observatory points to (a how-to, setup, a concept) and for AL code samples; its search only when the observatory finds nothing.

## Using only parts of it

- **Switch one server off.** Plugin servers are not added or removed with `claude mcp add` or `claude mcp remove`; those
  commands act on servers you configured yourself. In an interactive session, `/mcp` lists the plugin's servers as
  `plugin:bc-observatory:<name>` and lets you toggle one off: Claude Code stops connecting to it, per project, without
  removing the plugin (it records the choice in `disabledMcpServers` in `~/.claude.json`). Uninstalling the plugin removes all three servers and the skills.
- **Install by hand instead.** To take only some of the servers, skip the plugin and add them yourself (user scope; the lines are in `docs/RUNBOOK.md`):

  ```bash
  claude mcp add bc-observatory -- npx -y bc-observatory@latest
  claude mcp add --transport http bc-code-atlas https://bc-code-atlas.stefanmaron.dev/mcp
  claude mcp add --transport http microsoft-learn https://learn.microsoft.com/api/mcp
  ```

  Without the plugin you do not get the four skills; the observatory server's own instructions still tell the agent how to use it.
- **You already have a Learn MCP.** Keep one connection. Claude Code connects a server defined in more than one place once, and
  matches a plugin's server against yours by endpoint: yours (local, project or user scope) wins over the plugin's when
  both point at `https://learn.microsoft.com/api/mcp`, whatever name you gave it. A Learn MCP under another URL is a
  different server, so then disable `plugin:bc-observatory:microsoft-learn` in `/mcp`. The same goes for an atlas you
  already configured, or the atlas's own CLI skill (`bc-code-atlas-cli`): use one method, not both.
