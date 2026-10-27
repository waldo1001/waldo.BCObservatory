# BC Observatory

[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/waldo1001/waldo.BCObservatory)](https://gitmcp.io/waldo1001/waldo.BCObservatory)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/waldo1001/waldo.BCObservatory)

**An outside-the-box way to see all of Microsoft Dynamics 365 Business Central at once:** official docs, source code,
Microsoft's guidelines, YouTube sessions and community blogs, woven into one cross-referenced knowledge base that AI
agents can use as a source of truth and humans can travel through like a galaxy.

Site: https://waldo1001.github.io/waldo.BCObservatory/ (GitHub Pages, rebuilt every night)
About the project, who it is for: https://waldo1001.github.io/waldo.BCObservatory/about/ · The MCP server and the plugin, what to ask, how to install: https://waldo1001.github.io/waldo.BCObservatory/mcp/
Status: **milestone M3** (content flowing nightly: Learn topic hubs, 16k AL object pages for BC28-30, 22 localizations,
roadmap features, videos, community posts). Machine-generated pages are badged unreviewed until Opus reviews them.

## Use it from an agent

**Install the plugin, not just the server.** The plugin connects three MCP servers (the Observatory, bc-code-atlas for
AL source, Microsoft Learn) and four skills that tell your agent when to use them, plus a reminder to ask the
Observatory before it searches the web. Only the Observatory server needs Node.js 22 or newer (the current LTS is fine):
check with `node --version`; install with `winget install OpenJS.NodeJS.LTS` (Windows) or `brew install node` (Mac),
then restart the app you install into.

| You use | Install | Needs Node | You get |
|---|---|---|---|
| Claude Code | `claude plugin marketplace add waldo1001/waldo.BCObservatory` then `claude plugin install bc-observatory@bc-observatory` | yes | the plugin: 3 servers, 4 skills, the web-search reminder |
| GitHub Copilot CLI | `copilot plugin install waldo1001/waldo.BCObservatory:plugin` | yes | the plugin: 3 servers, 4 skills |
| VS Code (Copilot Chat) | one click on [the MCP page](https://waldo1001.github.io/waldo.BCObservatory/mcp/#install-vscode), or the `mcp.json` there | yes | the 3 servers |
| Cursor, Windsurf, other MCP clients | [the MCP page](https://waldo1001.github.io/waldo.BCObservatory/mcp/#install-cursor) (one click for Cursor) | yes | the 3 servers |
| Claude Desktop, claude.ai, phone | step by step for non-developers: [`INSTALL.md`](INSTALL.md) | Desktop only | skills and connectors |
| Nothing to install | [`llms.txt`](https://waldo1001.github.io/waldo.BCObservatory/llms.txt), GitMCP and DeepWiki (badges above) | no | read-only |

Then ask: *What is table 18 in Business Central? Use BC Observatory.* It should answer **Customer**. When it does not,
INSTALL.md has a "Something went wrong" table per app.

```bash
claude plugin marketplace add waldo1001/waldo.BCObservatory          # Claude Code plugin, step 1: the marketplace
claude plugin install bc-observatory@bc-observatory                  # step 2: the plugin (MCP + bcobs-lookup, bcobs-whats-new, bcobs-localization, bcobs-grounding)
copilot plugin install waldo1001/waldo.BCObservatory:plugin       # the same plugin in GitHub Copilot CLI
```

What the plugin installs (three MCP servers, four skills, what leaves your machine): [`plugin/README.md`](plugin/README.md).

Source bodies and the call graph: [bc-code-atlas](https://github.com/StefanMaron/bc-code-atlas) by Stefan Maron (MIT),
connected by the plugin. Learn pages and AL code samples: Microsoft's [Learn MCP](https://learn.microsoft.com/training/support/mcp), also connected by the plugin.

Server only, no skills: `claude mcp add bc-observatory -- npx -y bc-observatory@latest` (packages/mcp).
To run the server from a checkout instead:
`claude mcp add bc-observatory -- env BC_OBSERVATORY_LOCAL=$PWD node --import tsx packages/mcp/src/server.ts`.
Without any install: [`llms.txt`](https://waldo1001.github.io/waldo.BCObservatory/llms.txt), GitMCP and DeepWiki (badges above).

### Using this server

Business Central questions go here first (D108): features, release waves, what is new, AL objects, fields, events,
localizations, version diffs, blog and video coverage. Start with `bc_search`; `bc_whats_new` for "what is new" or "what
changed in BC 29"; `bc_get_object` and `bc_diff_object` for one object. Fall back to Microsoft Learn or web search only when
the Observatory has no answer, and say so. Every answer ends with `Data as of <date>, covers BC <versions>`; an empty one
ends with `No match in the Observatory. ...`; an error that says `unreachable` means the data source is down, and
`bc_status` (version, reachability, page counts, last deploy) tells "down" from "no answer". The server sends the same rule
as its MCP instructions ([packages/mcp/README.md](packages/mcp/README.md) has the details). For a client that does not show those, put this in the project's `CLAUDE.md` (or
`AGENTS.md`, `.github/copilot-instructions.md`):

```md
## Business Central questions
Use the BC Observatory MCP tools (bc_search, bc_whats_new, bc_get_object, bc_diff_object, ...) FIRST for any
Business Central question. Fall back to Microsoft Learn or web search only when the Observatory has no answer, and say
so. If its tools fail, run bc_status and tell me it is down; do not skip it silently.
```

## What it is

- **Overlay, not mirror.** Microsoft Learn stays the canonical documentation. BC Observatory builds hub pages per
  topic, feature, AL object and localization that summarize and deep-link to Learn articles, the actual code
  (microsoft/BCApps and the version history), BCQuality rules, videos (with timestamps) and blog posts.
- **Agents first.** Every page is markdown with strict frontmatter, every index is JSON, `llms.txt` exists per
  section, and `npx bc-observatory` is an MCP server over the same files. GitMCP and DeepWiki work out of the box.
- **A galaxy to travel.** Domains are systems, hubs are stars, sources orbit the hub they describe, localizations are
  constellations drawn over the W1 sky, and this week's changes light up. Authors get a flight path showing where
  their blog hooks into BC.
- **Change radar.** What changed in BC this week: docs commits, code diffs per object and per version, deprecations,
  roadmap items, new videos and posts, with a weekly digest and RSS.
- **Honest by construction.** Deterministic extraction first; language models (Haiku for facts, Sonnet for prose,
  Opus for review) only on deltas; every claim carries evidence; every page shows its trust tier and review state.

## How it runs

Nightly, on a Mac Mini registered as a self-hosted GitHub Actions runner, on a Claude subscription (no API keys),
inside a fixed budget window, newest content first. See `docs/PLAN.md` for the architecture and `docs/RUNBOOK.md`
for operations.

## Add your blog or channel

Open a pull request that adds an entry to `sources.yaml`. By default your content is stored as summary, quotes under
25 words and links back to you (`tier: community`). If you want your full text indexed, set `full_text: true` and add a
`consent` block pointing at your pull request. See `CONTENT-NOTICE.md`.

## License

Code: MIT (`LICENSE`). Generated content: CC BY 4.0 (`LICENSE-CONTENT`). Third-party material keeps its own terms.
Unofficial; not affiliated with Microsoft.
