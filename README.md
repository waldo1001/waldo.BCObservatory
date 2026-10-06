# BC Observatory

**An outside-the-box way to see all of Microsoft Dynamics 365 Business Central at once:** official docs, source code,
Microsoft's guidelines, YouTube sessions and community blogs, woven into one cross-referenced knowledge base that AI
agents can use as a source of truth and humans can travel through like a galaxy.

Site: https://waldo1001.github.io/waldo.BCObservatory/ (GitHub Pages, rebuilt every night)
Status: **bootstrapping** (milestone M0). Nothing to see yet; watch `docs/PLAN.md`.

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
