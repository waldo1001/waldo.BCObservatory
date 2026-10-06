# Decisions

Numbered, append-only. Each entry: decision, why, consequence. See `docs/PLAN.md` for the full architecture.

- **D01 Overlay, not mirror.** Learn stays canonical; we build hubs that link out. Why: new value instead of 10k
  duplicated pages; cheapest in tokens. Consequence: no page reproduces a Learn article; hubs quote and link.
- **D02 Agents first, humans second but first-class.** Markdown + frontmatter + JSON + llms.txt + MCP are the product;
  the Astro site renders the same files. Consequence: the data model is facts, not pages.
- **D03 Galaxy metaphor.** Systems = domains, stars = hubs, orbits = sources, constellations = localizations, flares =
  new content, flight path = author footprint. Why: structured, scales, maps 1:1 onto the data model; a brain graph
  becomes a hairball.
- **D04 Mac Mini runs the pipeline on the Claude subscription.** Self-hosted Actions runner, `claude -p` with a
  `claude setup-token` OAuth token, never the API. Exception: the Pages build and PR validation run on
  `ubuntu-latest` (token-free; security). Why: YouTube blocks GitHub-hosted runners; the subscription is the only
  LLM budget; one orchestrator with logs in GitHub.
- **D05 Dedicated macOS user `bcobs` + system LaunchDaemon.** Why: isolation from Jarvis and from waldo's keys; a user
  that never logs in cannot use LaunchAgents or pm2 startup.
- **D06 Budget guard mirrors Jarvis.** Skip above 60% (5 h) / 70% (week); nightly window 01:00-07:00; fixed quotas;
  newest-first; heartbeat commit when skipped (keeps the schedule alive past GitHub's 60-day rule).
- **D07 Tiered models.** Haiku for schema-bound facts, Sonnet for prose, Opus for reviewing hubs and flagged items.
  Unreviewed content ships with a badge. Why: Opus reviewing 100% of Haiku output costs more than Sonnet writing it
  right once; validators catch most errors for free.
- **D08 Content policy.** Microsoft full text (Learn CC BY, Microsoft channel captions). Community derived only
  unless `full_text: true` with consent evidence. Raw community text + LLM cache in a private vault. Why: attribution
  satisfies CC BY, not All-Rights-Reserved; bloggers live on traffic and reputation.
- **D09 Caption VTT is the canonical video intermediate.** Seeded with the 84 release-wave VTTs; every other video
  gets the same artifact. Keyed by videoId; title matching only in the one-off seed import with an override map.
- **D10 Code pillar: own extractor on tree-sitter-al, metadata only.** Per-object JSON incl. Obsolete*, params,
  events; structured diffs version-to-version and W1-to-country; `ms.search.form` for docs-to-objects. bc-code-atlas
  is linked as a companion, graphify-al optionally supplies call/subscriber edges. Never vendor source text.
- **D11 Scope order for code.** 28/29 W1 + all country layers extracted; BE + NL narratives first; then 30-vNext;
  then older versions as diffs.
- **D12 Hubs consume member summaries, never raw corpora.** Prompt size O(members); no cross-corpus single prompts.
- **D13 Astro for the site, Pagefind for site search, MiniSearch shards for the MCP.** Semantic search (static
  model2vec vectors) is v0.2.
- **D14 Repo has no secrets.** The only secret is the env file on the Mini. Workflows push with GITHUB_TOKEN; the
  vault uses a deploy key held on the Mini.
