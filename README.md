# BC Observatory

[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/waldo1001/waldo.BCObservatory)](https://gitmcp.io/waldo1001/waldo.BCObservatory)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/waldo1001/waldo.BCObservatory)

**An outside-the-box way to see all of Microsoft Dynamics 365 Business Central at once:** official docs, source code,
Microsoft's guidelines, YouTube sessions and community blogs, woven into one cross-referenced knowledge base that AI
agents can use as a source of truth and humans can travel through like a galaxy.

Site: https://waldo1001.github.io/waldo.BCObservatory/ (GitHub Pages, rebuilt every night)
Status: **milestone M3** (content flowing nightly: Learn topic hubs, 16k AL object pages for BC28-30, 22 localizations,
roadmap features, videos, community posts). Machine-generated pages are badged unreviewed until Opus reviews them.

## Use it from an agent

```bash
claude mcp add bc-observatory -- npx -y bc-observatory@latest      # MCP server (packages/mcp)
claude plugin marketplace add waldo1001/waldo.BCObservatory          # Claude Code plugin: MCP + bc-lookup, bc-whats-new, bc-localization
```

Until the npm package is published, run the server from a checkout:
`claude mcp add bc-observatory -- env BC_OBSERVATORY_LOCAL=$PWD node --import tsx packages/mcp/src/server.ts`.
Without any install: [`llms.txt`](https://waldo1001.github.io/waldo.BCObservatory/llms.txt), GitMCP and DeepWiki (badges above).

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
