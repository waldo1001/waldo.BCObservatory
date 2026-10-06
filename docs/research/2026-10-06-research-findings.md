# BC Observatory — research findings (2026-10-06)

Reference for the project that re-documents Business Central from docs + code + guidelines + YouTube + blogs.
Repo: https://github.com/waldo1001/waldo.BCObservatory (clone: ~/SourceCode/Community/waldo.BCObservatory).
Full plan: ~/.claude/plans/i-have-an-idea-flickering-axolotl.md (copied into the repo as docs/PLAN.md).

## Decisions (from the grilling session)
- Name BC Observatory; galaxy metaphor (domains = systems, hubs = stars, sources orbit, localizations = constellations,
  new content = newly lit stars, blog footprint = flight path).
- GitHub Pages at https://waldo1001.github.io/waldo.BCObservatory/ ; custom domain optional later.
- Overlay hubs, never a Learn mirror. AI agents first, kick-ass human UI second (Claude Design brief from real data in M3).
- Mac Mini runs everything via a self-hosted Actions runner on the Claude subscription (claude -p + setup-token). Never the API.
  Exception: Pages build + PR validation on ubuntu-latest (token-free; security).
- Budget: nightly 01:00–07:00 Mini time, skip above 60% (5 h) / 70% (week), newest-first, fixed quotas, heartbeat commit.
- Models: Haiku facts (JSON schema), Sonnet prose, Opus reviews hubs + flagged. Unreviewed ships with a badge.
- Content policy: Microsoft full text (Learn CC-BY, MS channel captions); community derived (summary, ≤25-word quotes,
  links) unless `full_text: true` opt-in with consent evidence. waldo.be is the example. yzhums.com held back.
- Raw community captions + LLM cache → private vault repo `waldo.BCObservatory-vault`.
- Code: 28/29 W1 + all 26 country layers extracted; BE + NL narratives first; then 30-vNext; then older.
- 24 seed blogs, 7 community channels + Microsoft; v0.1 = Ecosystem map + Change radar + Agent extras.
- Security approvals granted (re-confirm at execution): setup-token in 0600 env file, second repo-scoped runner (no PAT),
  dedicated macOS user `bcobs`, `pmset -a autorestart 1`. Still to approve: usage token, vault deploy key, npm publishing.

## Sources — what is machine-readable
- Learn docs are public git: MicrosoftDocs/dynamics365smb-docs (business-central/, TOC.md, 2,879 md) and
  MicrosoftDocs/dynamics365smb-devitpro-pb (dev-itpro/, 7,866 md; 1,904 generated method pages). CC-BY-4.0, ~50 commits/mo.
  Frontmatter: ms.date, ms.topic, ms.search.form (= BC page/report IDs, e.g. 118_Primary, Report_6627_Primary), ms.search.keywords, ai-usage.
  Pages outside the repos (release plans archive, application reference) → `curl -H "Accept: text/markdown"`.
- Release plans discontinued Sept 2026 (Release Planner retires 2026-11-15). Replacement: M365 roadmap
  https://www.microsoft.com/releasecommunications/api/v1/m365 (JSON; 81 BC items) + /rss; plus dev-itpro/whatsnew/whatsnew-update-NN-N.md.
- Code: microsoft/BCApps (MIT) has the Base App in src/Layers/<W1 + 26 countries> from 29.0 (releases/28.x has none);
  main = 30 vNext. StefanMaron/MSDyn365BC.Sandbox.Code.History (one commit per sandbox build, w1-23..w1-30-vNext, country
  branches are overlays, no license) and MSDyn365BC.Code.History (per CU, w1-15..w1-29). Blobless single-branch clone ≈ 1 s.
  GitHub compare API caps at 300 files.
- microsoft/BCQuality: MIT, 450 md knowledge files (microsoft/community/custom layers), frontmatter bc-version/domain/keywords.
  microsoft/alguidelines: link only. ALAppExtensions archived 2026-10-19.
- YouTube: channel RSS https://www.youtube.com/feeds/videos.xml?channel_id=ID returns 15 entries. Microsoft channel
  UCLErzd6kpQ0DAJSGsGjtxbA: 528 videos / 106 h since 2023-10. Captions: yt-dlp --write-auto-subs --sub-langs en-orig
  --skip-download (en auto-translated tracks 429; en-orig works). GitHub-hosted runners (Azure IPs) are blocked by YouTube;
  the Mac Mini's residential IP works. Whisper does not help (audio download blocked too).
- Blogs: WordPress /feed/ gives full content; WP REST /wp-json/wp/v2/posts?after=…&per_page=100 is open on waldo.be and
  yzhums.com (exact backfill). Two sites need HTML scraping (keytogoodcode.com, vld-bc.com). thinkaboutit.be 403s bots.
- Existing aggregators: Andy Wingate "D365BC Combined" RSS (100+ sources; use for discovery only), 365community.online,
  CentralQ.ai (Katson; AI search over Learn + blogs), ArcherPoint Developer Digest, MSDynamicsWorld roundups.

## Claude on a subscription, headless
- `claude setup-token` → one-year OAuth token; documented for CI (CLAUDE_CODE_OAUTH_TOKEN). Runs draw on the subscription.
- Risks: Anthropic announced then paused a billing change for claude -p / Agent SDK / Actions usage; `--bare` will become
  the default for -p and never reads OAuth (never pass it); the revoke button had an open bug (2026-10-01).
- Usage endpoint: GET https://api.anthropic.com/api/oauth/usage, Bearer token + `anthropic-beta: oauth-2025-04-20` →
  five_hour.utilization / seven_day.utilization. The setup-token lacks user:profile scope (403): a login-scoped token is
  needed (Jarvis: JARVIS_USAGE_OAUTH_TOKEN, specs/644).
- Haiku counts far less than Opus against limits. --model haiku|sonnet|opus; subagent frontmatter model:.

## Mac Mini (ssh alias mac-mini, over Tailscale)
- M4, 24 GB, macOS 26.5.1, 285 GB free, pmset sleep 0, autorestart 0, 17 d uptime. Timezone to verify (Jarvis logs looked UTC-7).
- Has: node 22 (keg-only /opt/homebrew/opt/node@22/bin, only in ~/.zprofile), pm2, brew, git 2.50, gh (expired token),
  Jarvis runner ~/actions-runner-jarvis (labels self-hosted,macmini; pm2-supervised). Missing: claude, yt-dlp, ffmpeg, deno, uv.
- Jarvis uses the same subscription through the Agent SDK with CLAUDE_CODE_OAUTH_TOKEN and stops claiming work above
  60% (5 h) / 70% (7 d). Non-login SSH shells get a bare PATH. Keychain is locked for daemons → env file.
- Gotcha for a service user that never logs in: LaunchAgents and `pm2 startup` only start after login → use a system
  LaunchDaemon with UserName.

## bc-code-atlas (Stefan Maron) — verdict
- Live MCP query service (search/graph/registry/build/aggregator), Python/uv, 16 stars, no releases, hosted at
  bc-code-atlas.stefanmaron.dev/mcp. Indexes Sandbox.Code.History w1-28 + two Learn repos. Embeddings need ~20 h CPU per
  version (1.1 GB sqlite-vec); graph.json ~700 MB; no Obsolete* tracking, no structured changelog, no docs↔code links.
- Reuse: tree-sitter-al (SShadowS, v4.x, pin major; PyPI/npm/crates), version regex + vNext rules (registry/resolver.py),
  blobless mirror pattern (git_ops.py), filename normalization. graphify-al (CPU, 10–20 min/version) for calls/subscribes edges.
- Our approach: own lean extractor on web-tree-sitter emitting per-object JSON (incl. Obsolete*, params, events), structured
  diffs between versions and W1↔country, ms.search.form for docs↔objects. Link to atlas as "ask your agent".

## Prior art worth stealing
- llms.txt per section + Stripe-style agent preamble; markdown twin per page; "Open in Claude" links (Mintlify).
- GitMCP (gitmcp.io/owner/repo) and DeepWiki MCP work on any public repo with a good llms.txt; pfmcp pattern: the
  static search index doubles as the MCP backend.
- Static semantic search without APIs: model2vec potion-8M, binary vectors (~2.5 MB for 80k chunks) — v0.2.
- Diátaxis page types; GOV.UK freshness banners; Karpathy's ingest/query/lint wiki; Gerardo Rentería's evidence flags.
- Astro over Quartz (OOM > few k pages), MkDocs Material (maintenance mode), Hugo (no shared TS).

## Release-wave repo (prev) — reusable + warnings
- Reuse: pipeline/lib/llm.ts (claude -p --json-schema wrapper, Ajv, retry, sha256 cache, LLM_CACHE_ONLY), lib/quotes.ts,
  01-clean-vtt, 02-extract prompts, 04-match-release-plan/fetch.ts (roadmap API), overrides.json, docs-recheck skill,
  strip-for-public.sh + check-public-leak.ts, setup-github.sh, design/tokens.json + HANDOFF.md.
- Warning: the repo is PUBLIC with 121 full transcripts, 84 raw VTTs and the LLM cache committed, against its own
  CONTENT-NOTICE. Owner decision pending.
- 84 seed VTTs in prev/data/transcripts/raw: 46 have [videoId] in the name, 38 don't (resolve via flat-playlist + title + override map).

## Name check (2026-10-06): bcobservatory free on GitHub (waldo1001), npm, .dev, .io. Rejected: Cosmos (Azure Cosmos DB),
Synapse (Azure Synapse), Constellation (Constellation Software).
