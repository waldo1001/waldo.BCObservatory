# BC Observatory — implementation plan

Continuously re-document Microsoft Dynamics 365 Business Central by weaving official docs, source code,
guidelines, YouTube transcripts and community blogs into one cross-referenced, agent-first knowledge base.
GitHub repo + GitHub Actions + GitHub Pages; all LLM work on the owner's Claude subscription, executed on the
Mac Mini. Visual identity: a galaxy you travel through (domains = systems, hubs = stars, sources in orbit).

`prev` below = `/Users/waldo/SourceCode/Community/msdyn365-2026-release-wave-2`. The project repo already exists
and is cloned, still empty (no commits, branch `main`): `/Users/waldo/SourceCode/Community/waldo.BCObservatory`
(remote `https://github.com/waldo1001/waldo.BCObservatory`). All work happens there, never in the waldoAI scratch folder.

## 1. Context

- The release-wave repo proved the loop: YouTube captions → `claude -p` extraction under JSON schemas →
  cross-reference against Microsoft's feature list → static site + `llms.txt`. It was one event, one repo,
  hand-run, had no CI LLM path, and it leaked full transcripts into a public repo.
- Nobody has the cross-referenced BC knowledge base: Learn MCP is docs-only, bc-code-atlas is code-only and
  local, CentralQ is closed Q&A, Andy Wingate's digest is an RSS firehose. Nobody ties docs to code to videos.
- Goal: a living site + MCP that agents treat as a source of truth, with a top-class human UI, built step by
  step on a fixed nightly token budget, newest content first, in weeks not days.

## 2. Decisions taken with the owner (binding)

| Topic | Decision |
|---|---|
| Name / repos | **BC Observatory** → public `waldo1001/waldo.BCObservatory` + private `waldo1001/waldo.BCObservatory-vault`; MCP `npx bc-observatory`; plugin marketplace in-repo |
| Hosting | **GitHub Pages**, deployed by Actions, live at `https://waldo1001.github.io/waldo.BCObservatory/` from day one. Custom domain optional later (one CNAME file, GitHub redirects github.io automatically), owner-approved |
| License | Content CC-BY-4.0, code MIT (the repo has no LICENSE yet; M0 adds `LICENSE` (MIT) + `LICENSE-CONTENT` (CC-BY-4.0) + `CONTENT-NOTICE.md`) |
| Content model | Overlay hubs; Learn stays canonical; never mirrored |
| First consumer | AI agents (markdown + strict frontmatter, JSON indexes, llms.txt, MCP). Humans get a first-class UI anyway |
| Visualization | Galaxy map, not a brain graph. Claude Design brief generated from real data in M3 |
| Runtime | Mac Mini runs every pipeline as a self-hosted Actions runner, on the Claude subscription (`claude -p` + `claude setup-token`), never the API. **One deliberate exception:** the token-free Pages build runs on `ubuntu-latest` so the site deploys even when the Mini is offline or a contributor PR merges; PR validation runs there too (security) |
| Provisioning | This repo provisions the Mini autonomously; every security/auth step is approval-gated and re-confirmed at execution |
| Approved security steps | setup-token in a 0600 env file (not Keychain); second repo-scoped runner, no PAT; dedicated macOS user `bcobs`; `pmset -a autorestart 1` after FileVault check. New items to approve: login-scoped usage token for the budget guard, vault deploy key, repo creation, npm trusted publishing |
| Budget | Nightly window 01:00–07:00 Mini time; skip when 5-h usage > 60% or weekly > 70% (Jarvis's thresholds); fixed quotas per run; newest-first; resumable; heartbeat commit even when skipped |
| Models | Haiku = structured facts under schemas; Sonnet = item summaries + hub prose; Opus = reviews every hub page + validator-flagged items. Unreviewed ships with a badge |
| Content policy | Microsoft sources full text (Learn CC-BY with attribution, Microsoft channel captions). Community = summary + quotes ≤ 25 words + deep links unless `full_text: true` opt-in with consent evidence. waldo.be is the example opt-in. yzhums.com not added yet |
| Raw material | Caption VTT = canonical intermediate for every video. Community VTTs, fetched post bodies and the whole LLM cache → private vault. First batch = 84 VTTs from `prev/data/transcripts/raw` |
| Code scope order | 28.x + 29.x W1 with all 26 country layers extracted; narratives BE + NL first → 30-vNext → older (23 sandbox, 15 on-prem) as diffs |
| Blogs | 24 INCLUDE blogs seeded in derived mode; non-English summarized in English + language tag; MAYBE list as a second PR |
| Channels | Microsoft (official) + Hougaard, Saurav Dhyani, Areopa, mibuso TechDays, Stefan Maron, BC Musings, Dynamics Corner (community) |
| v0.1 bundles | Ecosystem map, Change radar, Agent extras. Evidence & trust UI → v0.2 (its data captured from day one) |
| Contributions | Add a blog/channel by PR to `sources.yaml`, schema + policy validated on GitHub-hosted runners |

## 3. Research facts that shape the design

- **Learn is git.** `MicrosoftDocs/dynamics365smb-docs` (business-central/, 2,879 md, TOC.md) and
  `MicrosoftDocs/dynamics365smb-devitpro-pb` (dev-itpro/, 7,866 md incl. 1,904 generated method pages). CC-BY-4.0,
  ~50 commits/month each → change detection = `git log`. `ms.search.form` carries page/report IDs (`118_Primary`,
  `Report_6627_Primary`) = join key docs→objects; `ms.date`, `ms.topic`, `ms.search.keywords`, `ai-usage` drive
  taxonomy. Learn pages outside the repos (release-plan archive, application reference) return markdown with
  `Accept: text/markdown`.
- **Release plans are gone** (Sept 2026; Release Planner retires 15 Nov 2026). Replacement: M365 roadmap JSON
  `https://www.microsoft.com/releasecommunications/api/v1/m365` (81 BC items) + RSS, plus
  `dev-itpro/whatsnew/whatsnew-update-NN-N.md`. `prev/pipeline/04-match-release-plan/fetch.ts` already calls it.
- **Code.** `microsoft/BCApps` (MIT): Base App in `src/Layers/<W1 + 26 countries>` from 29.0; `releases/28.x`,
  `releases/29.x`, `main` = 30 vNext; 35k+ .al files. `StefanMaron/MSDyn365BC.Sandbox.Code.History` (one commit per
  sandbox build, `w1-23..w1-30-vNext`, country branches are overlays, no license), `MSDyn365BC.Code.History` (per CU,
  `w1-15..w1-29`). Never vendor code; blobless single-branch clone ≈ 1 s / 1.3 MB; GitHub compare API caps at 300 files.
- **bc-code-atlas** is a live MCP service: embeddings ≈ 20 h CPU/version, 700 MB graph, no Obsolete*, no structured
  changelog, no docs↔code links. Reuse: tree-sitter-al (SShadowS, v4.x, pin major; parses 100% of 36k files),
  its version-regex/vNext rules (`registry/resolver.py`), blobless mirror pattern (`git_ops.py`), filename
  normalization. Optional graphify-al for `calls`/`subscribes`/`relates_to` edges (CPU, 10–20 min/version).
- **BCQuality** (MIT, 450 md, microsoft/community/custom layers, frontmatter `bc-version`, `domain`, `keywords`,
  ~50 commits/month) is a first-class source. `microsoft/alguidelines`: link, don't duplicate.
- **YouTube.** Channel RSS = last 15 only; reconcile weekly with `yt-dlp --flat-playlist`. Captions:
  `yt-dlp --write-auto-subs --sub-langs en-orig --skip-download`, 5–10 s sleeps. GitHub-hosted runners are blocked
  (Azure IPs); the Mini's residential IP works (tested). Whisper doesn't help (audio download blocked too).
  Microsoft channel: 528 videos / 106 h since 2023-10. Of the 84 seed VTTs, 46 carry `[videoId]`, 38 don't.
- **Blogs.** WordPress `/feed/` (full content) + open WP REST (`/wp-json/wp/v2/posts?after=…&per_page=100`) for
  exact 18-month backfill; 2 sites need HTML scraping (keytogoodcode.com, vld-bc.com); thinkaboutit.be 403s bots.
- **Claude on subscription in CI** is documented (`claude setup-token`, one-year OAuth token). Risks: paused
  Anthropic billing change for `claude -p` in automation; `--bare` will become the default for `-p` and never reads
  OAuth (never pass it); revoke-button bug. Usage endpoint: `GET https://api.anthropic.com/api/oauth/usage`
  (Bearer token + `anthropic-beta: oauth-2025-04-20`) returns `five_hour.utilization`/`seven_day.utilization`;
  the setup-token lacks `user:profile` scope (403), so the guard needs a login-scoped token like Jarvis's
  `JARVIS_USAGE_OAUTH_TOKEN` (`waldo.Jarvis/specs/644-*.md`).
- **Mac Mini** (`ssh mac-mini`, over Tailscale): M4, 24 GB, macOS 26.5, 285 GB free, `sleep 0`, 17 d uptime.
  Has node 22 (keg-only, PATH only in `~/.zprofile`), pm2, brew, git, gh (expired login), Jarvis runner
  `~/actions-runner-jarvis` (labels `self-hosted,macmini`). Missing: `claude`, yt-dlp, ffmpeg, deno, uv. Jarvis shares
  the subscription and backs off at 60% / 70%. Non-login shells get a bare PATH. Timezone of the box must be
  verified (Jarvis logs suggested UTC-7).
- **GitHub limits.** Pages ≤ 1 GB, repo ideally < 1 GB, files < 100 MB, Actions free on public repos, cron on default
  branch only, scheduled workflows disabled after 60 idle days (nightly heartbeat commits prevent this).
- **Release-wave repo leak** (separate decision for the owner): public with 121 full transcripts, 84 raw VTTs and the
  LLM cache committed against its own CONTENT-NOTICE.

## 4. Architecture

### 4.1 Repositories and layout

```
waldo.BCObservatory/                  public, MIT (code) + CC-BY-4.0 (content)
├─ sources.yaml                       community-editable source registry (PR-validated)
├─ config/                            taxonomy.json, versions.json, countries.json, models.json, budget.json, tooling.json (pinned claude/yt-dlp/grammar versions)
├─ schemas/                           frontmatter.<type>.json, sources.json, manifest-item.json, graph.json, al-object.json, al-diff.json, llm/<stage>.json
├─ pipeline/
│  ├─ lib/                            llm.ts (from prev), cache.ts, budget.ts, manifest.ts, queue.ts, quotes.ts (prev), frontmatter.ts, git.ts, http.ts, text.ts
│  ├─ orchestrator/                   nightly.ts (guard→ingest→stages→render→commit), planner.ts (newest-first quotas), lock.ts, run-report.ts
│  ├─ ingest/                         docs.ts, guidelines.ts, code.ts, youtube.ts, blogs.ts, roadmap.ts (deterministic, no LLM)
│  ├─ caption/                        vtt-clean.ts (prev 01), fetch.ts (yt-dlp), import-seed.ts (84 VTTs, id resolution + override map)
│  ├─ extract/                        Haiku fact extraction per pillar; prompts/*.md with PROMPT_VERSION headers
│  ├─ code/                           extractor/ (web-tree-sitter + tree-sitter-al queries/*.scm), diff.ts, timelines.ts, deprecations.ts, link-docs.ts, graphify.ts
│  ├─ summarize/                      Sonnet item summaries + hub narratives
│  ├─ link/                           cross-ref resolver, graph.ts (nodes/edges + baked galaxy layout), footprint.ts, coverage.ts
│  ├─ validate/                       schema.ts, quotes.ts, links.ts, objects-exist.ts, leak.ts (prev shingles), policy.ts (tier/full_text rules)
│  ├─ review/                         Opus review of hubs + flagged items; applies structured edits
│  └─ render/                         markdown pages → content/, indexes → data/index, llms.txt, digest.ts, design-brief.ts
├─ content/                           GENERATED markdown + strict frontmatter: topics/ features/ objects/<type>/ localizations/<cc>/ sources/ videos/ posts/ digests/
├─ data/
│  ├─ manifest/<pillar>/<source>/*.json      one state file per item; _runs/<date>.json run reports (heartbeat)
│  ├─ captions/microsoft/<videoId>.{vtt,segments.json}   full text allowed (Microsoft channel only)
│  ├─ code/<major>/<cc>/objects-<type>-<n>.jsonl + manifest.json; code/diffs/ code/timelines/ code/deprecations/ code/events/ code/graph/
│  ├─ index/                          search.json (MiniSearch, sharded), docs-objects.json, features.json, objects.json, sources.json, coverage.json, index-manifest.json
│  ├─ graph/                          summary.json (galaxy, ≤500 KB, baked layout), ego/<nodeId>.json, full.jsonl
│  ├─ roadmap/                        dated m365 API snapshots + diff
│  └─ overrides/*.yaml                human correction layer, merged last (prev overrides.json idea)
├─ site/                              Astro project; reads ../content and ../data
├─ packages/mcp/                      npx bc-observatory
├─ plugin/ + .claude-plugin/marketplace.json   in-repo Claude Code plugin
├─ infra/mini/                        00-preflight … 70-verify provisioning; run-nightly.sh; usage-guard.ts; LaunchDaemon plist template
├─ scripts/                           setup-github.sh (prev, extended), check-*.ts
├─ tests/                             fixtures (2 Microsoft VTTs, 30 .al files, 5 Learn pages, llm-cache), unit + schema + golden tests
├─ docs/                              DECISIONS.md, RUNBOOK.md, CONTENT-NOTICE.md, brief/PROMPT-design.md (generated), design/ (tokens + HANDOFF seeded from prev)
└─ llms.txt, llms-full.txt, AGENTS.md, README.md

waldo.BCObservatory-vault/            PRIVATE; on the Mini at /Users/bcobs/observatory/vault; pushed with a repo-scoped deploy key
├─ captions/community/<sourceId>/<videoId>.{vtt,segments.json}
├─ posts/<sourceId>/<postId>.md       fetched community post bodies (input only)
└─ llm-cache/<stage>/<hash>.json      every LLM result (outputs + meta + input refs; prompts only with LLM_CACHE_DEBUG=1)
```

Why the cache lives only in the vault: community prompts contain full text. GitHub-hosted jobs never need the
cache; they build from committed `content/`.

### 4.2 Data model

**Frontmatter base** (every page; validated by `schemas/frontmatter.<type>.json`):

```yaml
id: topic/posting-groups          # <type>/<slug>, stable
type: topic                       # topic|feature|object|localization|source|video|post|digest|change
title: …
summary: one or two agent-facing sentences
tier: official|community|mixed
language: en                      # source language; summaries always en
tags: [finance, setup]
versions: {introduced: "15.0", last_changed: "29.0", deprecated: null}
review: {state: unreviewed|reviewed|flagged, by: null|opus, at: null, flags: []}
generated: {at: …, pipeline: "0.1.0", prompts: {extract-video: 3, hub-topic: 2}, input_hash: sha256}
evidence:                         # captured from day one; UI in v0.2
  - {kind: learn|code|video|blog|guideline|roadmap, url, title, date, commit: sha|null, t: seconds|null, quote: "<25 words"|null}
links: {learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], changes: []}
```

| type | extra fields |
|---|---|
| topic | `learn_toc_path`, `children`, `coverage: {learn, code, video, blog, guideline}` |
| feature | `roadmap_id`, `wave`, `status: preview|ga|announced|unclear`, `ga_date`, `preview_date`, `whatsnew_url`, `localizations`, `objects_touched` |
| object | `object_type`, `object_id`, `name`, `namespace`, `app`, `first_version`, `last_version`, `obsolete: {state, tag, reason}`, `countries`, `ms_search_form_ids`, `counts: {fields, procedures, events, subscribers}` |
| change | `number`, `repo`, `source_id`, `url`, `kind: pr`, `base_branch`, `major`, `merged_at`, `author`, `community_contribution`, `labels`, `change_class`, `change_kind`, `behavior_change`, `breaking`, `files`, `apps`, `objects_touched`, `objects_unjoined`, `obsoletions`, `backports`, `fixes_issues`, `work_items`, `systems`, `quote`, `joined_against` (D61, `schemas/frontmatter.change.json`) |
| localization | `country`, `version`, `w1_version`, `added_objects`, `replaced_objects`, `added_fields`, `added_events`, `learn_folder: LocalFunctionality/Belgium` |
| source | `source_id`, `kind`, `author`, `mvp`, `full_text`, `item_count`, `footprint: {topics: [{id, weight}], objects, features}`, `first_item`, `last_item` |
| video | `video_id`, `channel`, `published_at`, `duration_s`, `captions: full|derived`, `chapters: [{t, title}]`, `quotes: [{t, text, check}]`, `transcript_page` |
| post | `post_id`, `source_id`, `url`, `published_at`, `author`, `language`, `full_text`, `quotes`, `code_objects_mentioned` |
| digest | `week: 2026-W41`, `range`, `sections: {docs, code, videos, posts, roadmap, deprecations}` |

**`sources.yaml`** (`schemas/sources.json`): `defaults: {tier: community, full_text: false, language: en,
backfill: {months: 18}}`; per source `id` (`^[a-z0-9-]+$`), `kind: blog|youtube|docs-git|code-git|guidelines-git|
roadmap-api|discovery`, `name`, `url`, `tier`, `author: {name, mvp, github}`, `language`, `full_text`,
`consent: {evidence: <PR url>, at}`, `fetch: {feed, rest, scrape}` or `channel_id` or `repo/branch/paths/license`,
`backfill`, `enabled`. Policy rules (`validate/policy.ts`): `full_text: true` requires `tier: official` or
`consent.evidence`; `kind: discovery` (Wingate digest) never creates items, only suggestions in the run report.

**Manifest item** (`data/manifest/<pillar>/<source>/<itemKey>.json`): `id`, `pillar`, `source`, `tier`, `title`,
`url`, `published_at`, `state`, `stages.{discovered,fetched,captioned,extracted,summarized,linked,reviewed,published}`
each with `at` + stage-specific data (`hash`, `path`, `prompt@version`, `model`, `cache` key), `input_hash`,
`output_hash`, `attempts`, `last_error`, `retry_after`, `flags`, `review`, `skip`. States:
`discovered → fetched → captioned (video) → extracted → summarized → linked → reviewed → published`, plus `failed`
(after 5 attempts, exponential `retry_after`), `skipped` (`horizon|policy|no-captions`), `stale` (input hash changed,
re-enters at `fetched`). Hubs have their own manifest under `data/manifest/hubs/`.

**Graph** (`schemas/graph.json`): nodes `{id, type: topic|feature|object|localization|source|video|post|guideline|
version|author, label, tier, group (= galaxy system), weight, url, x, y}`; edges `{s, t, type: mentions|documents|
demonstrates|discusses|implements|extends|subscribes|calls|localizes|deprecates|introduced_in|relates|authored, w,
ev: [item ids]}`. `graph/summary.json` = systems, sources, topics, localizations, versions and the top 300
objects/features by degree with a baked d3-force layout (fixed seed, stable night to night); `graph/ego/<id>.json`
= one-hop neighbourhoods for page-level views.

**Per-object code JSON** (`al-object@1`, JSONL, one line per object): `version`, `build`, `country`, `layer:
base|overlay`, `app`, `namespace`, `type`, `id`, `name`, `extends`, `file`, `file_hash`, `commit`, `properties`
(Caption, Access, Extensible, ObsoleteState/Reason/Tag, SourceTable), `fields[] {id, name, type, properties,
tooltip, obsolete}`, `keys[]`, `procedures[] {name, scope, params[], returns, attributes[], event:
integration|business|internal|subscriber|null, subscribes_to, obsolete, doc}`, `triggers[]`, `hash` (canonical JSON
without file/commit). Page controls out of scope for v0.1; actions kept.

**Structured diff** (`al-diff@1`): `kind: version|country`, `from/to {version, country}`, `summary` (objects/fields/
procedures/events added/removed/changed, obsoleted, obsolete_removed), `objects[]` with per-member changes.
`kind: country` diffs the effective set `W1 ∪ overlay` (overlay wins) against W1, so `replaced` = same key,
different content.

### 4.3 Pipeline

| # | Stage | Input → Output | Tool / model | Where |
|---|---|---|---|---|
| 0 | guard | usage endpoint → `go/skip/reduced` + headroom | `infra/mini/usage-guard.ts` | Mini |
| 1 | ingest-docs | `git fetch` both Learn mirrors, `git diff --name-status` since last SHA → items (ms.date, ms.search.form, TOC path) | git, gray-matter | Mini |
| 1 | ingest-code | `git ls-remote` BCApps + Code History → new version/build → code job item | git | Mini |
| 1 | ingest-guidelines | BCQuality diff; alguidelines link index only | git | Mini |
| 1 | ingest-youtube | channel RSS nightly; `yt-dlp --flat-playlist` weekly reconcile → items | RSS, yt-dlp | Mini |
| 1 | ingest-blogs | WP REST → paged RSS → scraper (2 sites); language detect | fetch, cheerio, franc | Mini |
| 1 | ingest-roadmap | m365 API filtered on product + RSS → dated snapshot + diff items | fetch (prev `fetch.ts`) | Mini |
| 1 | ingest-changes | GitHub REST: merged pull requests per tracked branch (ETag, cursor; bots and backports from the list payload), open pull requests, issues, releases (D61) | `pipeline/ingest/github-prs.ts` | Mini |
| 2 | fetch-change | pull request + files → record, path classes, exact join to object pages (`data/code/<major>/files.json`); non-code skipped | GitHub REST, lane `github` | Mini |
| 2 | caption | yt-dlp `en-orig` auto-subs, 5–10 s sleep → VTT → segments (prev 01) | yt-dlp, deno | Mini only |
| 3 | extract | item text/segments → `{topics, features, objects, entities, links, quotes, language}` under schema | **Haiku**; 15-min / 6k-token windows then consolidate (prev 02) | Mini |
| 4 | validate-1 | schema; quotes verbatim (prev `quotes.ts`; ≤ 25 words for community); objects exist in code index; links resolve | deterministic | Mini |
| 5 | summarize | item summaries (video/post/doc delta) and hub narratives from member summaries only | **Sonnet** | Mini |
| 6 | link | resolve refs → `links`, graph nodes/edges, footprints, coverage, docs↔objects via ms.search.form | deterministic | Mini |
| 7 | review | every hub + flagged items → `{verdict, edits[], issues[]}` applied deterministically | **Opus** | Mini |
| 8 | render | markdown pages, indexes, llms.txt, weekly digest, design brief | deterministic | Mini |
| 9 | validate-2 | frontmatter schemas, leak scanner (community shingles from vault), internal links, size budget | deterministic | Mini + PR CI |
| 10 | publish | commit + push `main` with `GITHUB_TOKEN`; push vault via deploy key | git | Mini |
| 11 | site | Astro build + Pagefind + deploy | node | GitHub-hosted |

Design rules: hub narratives consume member summaries, never raw corpora (prompt size O(members); no O(n²)
cross-corpus merges). Doc text given to Haiku is the full page body, chunked (no 220-char truncation). Every item
is keyed by a stable id (videoId, Learn path, object key, post id); title matching exists only in the one-off
seed import, with a manual override map.

**Nightly orchestrator** (`pipeline/orchestrator/nightly.ts`):

1. Lock (file lock + workflow concurrency). A dirty tree from a killed run is validated and committed as
   "recover partial run" first (all writes are temp-then-rename).
2. Guard: `skip` → write `data/manifest/_runs/<date>.json` (`status: skipped-budget`, utilizations), commit
   (heartbeat keeps the schedule alive), exit 0. `reduced` (usage unreadable) → halve quotas and flag.
3. Ingest all pillars (no LLM; discovery never lags).
4. Planner: per pillar, queue = non-terminal items ordered `published_at desc` (docs by git commit date, code by
   version, guidelines by commit date), skipping future `retry_after` and items past the source horizon. Quotas from
   `config/budget.json`, e.g. `{captions: 40, video_extract: 25, docs: 60, posts: 40, guidelines: 20, code_jobs: 1,
   hub_refresh: 15, opus_reviews: 10, llm_calls_max: 450}`, scaled by guard headroom (40% → full, 20% → half,
   < 10% → Haiku-only). Pillars interleave round-robin so none starves.
5. Execute stages 2→7 per item; re-guard every 25 LLM calls; hard clock stop at 06:35 local (no new items);
   render + commit always finish before 07:00.
6. Hubs: `stale` when member set or any member `output_hash` changed → `hub_refresh` quota, newest-touched first.
7. Render, validate-2, commit, push both repos, write run report (counts per state, usage before/after, calls per
   model, failures, discovery suggestions).

Failure behaviour: item failures never abort (`attempts++`, `retry_after = 2^attempts h`, `failed` after 5, listed
in the report); infra failures (claude auth, git push) abort with `status: aborted`; next night resumes from the
manifest. A stage re-runs only when its input hash or prompt version changed; the LLM cache key is
`sha256(promptVersion, model, system, prompt, schema)`, so retries are free.

Backfill math at default quotas: 528 Microsoft videos ≈ 3 weeks at 25/night; Learn's 10.7k pages ≈ 2–3 months at
60/night (new items always sort first, so deltas keep flowing); 24 blogs × 18 months ≈ 3–4k posts ≈ 3 months at
40/night.

### 4.4 Workflows

| File | Trigger | Runner | Permissions | Concurrency | Steps |
|---|---|---|---|---|---|
| `nightly.yml` | `schedule: 0 0 * * *` (01:00 CET / 02:00 CEST) + `workflow_dispatch` (quota multiplier, pillars) | `[self-hosted, bcobs]` | `contents: write` | `observatory-nightly`, no cancel | checkout → `infra/mini/run-nightly.sh` (sources env file, PATH, orchestrator, push) → run-report artifact; `timeout-minutes: 370` |
| `code-version.yml` | `workflow_dispatch` (version, countries, graphify: bool); also dispatched by nightly when a new version appears | `[self-hosted, bcobs]` | `contents: write` | `code-extract` | sparse clone → extract → diffs → timelines → commit |
| `pages.yml` | `push` to main (paths `content/**`, `data/**`, `site/**`) + dispatch | `ubuntu-latest` | `contents: read`, `pages: write`, `id-token: write` | `pages` | `npm ci` → `astro build` → `pagefind` → size check (< 900 MB) → `deploy-pages` |
| `pr-validate.yml` | `pull_request` | `ubuntu-latest` only | `contents: read` | per PR, cancel | sources.yaml schema + policy, frontmatter schemas, typecheck, unit + golden tests (`LLM_CACHE_ONLY=1`), workflow lint (fails if any `pull_request` workflow targets self-hosted) |
| `runner-health.yml` | `schedule: 0 */6 * * *` | `ubuntu-latest` | `actions: read`, `issues: write` | — | runner online check + last nightly conclusion → open/close a pinned issue |
| `link-check.yml` | weekly | `ubuntu-latest` | `contents: write` | — | lychee over `content/` external links → `data/reports/links.json` |
| `mcp-publish.yml` | push tag `mcp-v*` | `ubuntu-latest` | `id-token: write`, `contents: read` | — | build, stdio smoke test, `npm publish --provenance` via npm Trusted Publishing (no NPM_TOKEN) |

Repo settings via `scripts/setup-github.sh` (prev, extended): Pages source = Actions, fork PR workflows require
approval, default token read-only unless declared, squash merges, topics, **no repository secrets at all**.

### 4.5 Mac Mini provisioning (`infra/mini/`, idempotent, driven from the laptop over `ssh mac-mini`)

Everything runs as a dedicated standard user `bcobs` (hidden, no GUI login) so the pipeline cannot read Jarvis's
env files, waldo's SSH keys or the lake. Because `bcobs` never logs in, the runner is a **system LaunchDaemon**
with `UserName bcobs` (LaunchAgents and `pm2 startup` only start after that user's login).

| # | Step | Gate | How |
|---|---|---|---|
| 0 | `00-preflight.sh` | auto, read-only | `sw_vers`, `fdesetup status`, `df`, `pmset -g`, timezone, Tailscale, Jarvis runner present; prints report; stops if FileVault is on (unattended reboot would wait for a password) |
| 1 | `10-brew.sh` | auto (brew is machine-wide) | `brew install yt-dlp ffmpeg deno uv gh jq`; check `brew list` first |
| 2 | `20-worker-user.sh` | **sudo approval** | `sysadminctl -addUser bcobs -fullName "BC Observatory" -password <random, discarded> -home /Users/bcobs`; `/Users/bcobs/observatory/{repo,vault,cache}`; ed25519 key for the vault deploy key (public key printed) |
| 3 | `30-claude.sh` | install auto; **auth approval** | native installer as `bcobs` → `~/.local/bin/claude` (pinned version from `config/tooling.json`); owner runs `claude setup-token` in a browser session and pastes the token; `/Users/bcobs/.config/bcobservatory/env` (0600) gets `CLAUDE_CODE_OAUTH_TOKEN`, `BCOBS_USAGE_OAUTH_TOKEN` (login-scoped; same source as Jarvis's `JARVIS_USAGE_OAUTH_TOKEN`), `BCOBS_VAULT_DIR`, `TZ=Europe/Brussels`, `PATH`; asserts `ANTHROPIC_API_KEY` unset |
| 4 | `40-runner.sh <registration-token>` | **runner approval** | laptop: `gh api -X POST repos/waldo1001/waldo.BCObservatory/actions/runners/registration-token` (short-lived); Mini as `bcobs`: download osx-arm64 runner, sha256 check, `./config.sh --unattended --replace --name macmini-bcobs --labels bcobs`; runner `.path` file = full PATH |
| 5 | `50-daemon.sh` | **sudo approval** | installs `/Library/LaunchDaemons/com.bcobservatory.runner.plist` (UserName bcobs, KeepAlive, WorkingDirectory `/Users/bcobs/actions-runner`, EnvironmentVariables PATH/HOME/TZ, logs to `/Users/bcobs/observatory/logs`); `launchctl bootstrap system …` |
| 6 | `60-vault.sh` | **owner adds deploy key (write) to the vault repo** | clone vault, test push |
| 7 | `70-power.sh` | **sudo approval** | `pmset -a autorestart 1` |
| 8 | `80-verify.sh` + `mini-selfcheck.yml` | auto | as `bcobs` with env sourced: `claude -p "reply ok" --output-format json --tools ""` (asserts `is_error=false` and model family), `yt-dlp` one caption fetch, `node -v`, runner online via API, `usage-guard.ts --dry-run` prints both utilizations, vault pull, disk, clock |

PATH for every script, `run-nightly.sh` and the runner `.path`:
`/Users/bcobs/.local/bin:/opt/homebrew/opt/node@22/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin`.
Persistent caches in `/Users/bcobs/observatory/cache/{git-mirrors,yt-dlp,llm-cache}` outside the runner's `_work`:
blobless mirrors of BCApps/Learn/BCQuality only `fetch` deltas; yt-dlp's download archive persists. No
`caffeinate` (never sleeps). Secrets exist only in the env file, read by `run-nightly.sh`, never exported into
generic job env.

Security posture: the `bcobs` runner only serves `schedule`, `workflow_dispatch` and `push`-to-`main` workflows;
every `pull_request` workflow runs on `ubuntu-latest` (enforced by workflow lint); fork PRs require approval; no
PAT, no GitHub secrets; the Jarvis runner keeps its own labels so jobs never cross.

**Budget guard** (`pipeline/lib/budget.ts` + CLI): one GET to the usage endpoint, 10 s timeout, no retries →
`{ok|over_5h|over_7d|unavailable:<not_configured|scope|http|network|malformed>, five_hour, seven_day, resets_at}`;
thresholds in `config/budget.json` (`max_5h_pct: 60, max_7d_pct: 70`); exit codes 0/3/4; never logs the token;
writes headroom to `$GITHUB_OUTPUT`; utilization recorded in the run report.

### 4.6 Source-code pillar

- **Extractor:** TypeScript on `web-tree-sitter` + `tree-sitter-al` WASM (pin major 4) so the same code runs in PR
  tests on ubuntu without node-gyp. Query files per construct (`object.scm`, `field.scm`, `procedure.scm`,
  `attribute.scm`, `property.scm`, `trigger.scm`) → `al-object@1` lines. Target: 35k files in < 10 min on the M4.
- **Version job** (`code-version.yml`): resolve source from `config/versions.json` (28/29/30 W1 + countries from
  BCApps `releases/*` / `main`; 28 countries and 23–27 from Code History country branches);
  `git clone --filter=blob:none --single-branch --depth 1 --sparse` + `sparse-checkout set src/Layers/W1`, then one
  layer at a time; write `data/code/<major>/<cc>/objects-<type>-<n>.jsonl` (≤ 20 MB per shard) + `manifest.json`
  (commit, build, counts, grammar/extractor versions). Country shards hold overlay objects only.
- **Diffs:** `version-diff` W1 n→n+1 and `country-diff` per (version, cc) by object key then member id/name →
  `data/code/diffs/<kind>/<from>__<to>.json`; summaries feed localization hubs ("what BE brings": added objects,
  replaced objects, added fields/events, Learn `LocalFunctionality/<Country>` links) and the per-version change radar.
- **Timelines:** `data/code/timelines/<type>/<id>.json` from the chain of version diffs (introduced, changed,
  obsoleted, removed per version). Object pages are version-agnostic with a timeline section; per-version detail
  JSON is fetched on demand.
- **Deprecation radar:** all `ObsoleteState` at object and member level grouped by `ObsoleteTag` (encodes the
  version) and removal ETA; new entries per run become radar items and digest lines.
- **Docs↔objects:** parse `ms.search.form` (`118_Primary` → page 118, `Report_6627_Primary` → report 6627), then
  name/caption match for codeunits/tables with confidence `exact-id|name|caption`. Drift report = objects referenced
  by docs that no longer exist, obsoleted objects documented without notice, new objects with no doc.
- **Call graph** (`docs/specs/code-atlas.md`, D67): the code pillar's `linked` stage runs the pinned graphify-al fork
  on the snapshot checkout, keeps cross-object `calls` resolved by declared type (no interface fan-out, nothing
  guessed) and `implements` edges, and writes `data/code/graph/<major>/calls.json`; object pages render Calls /
  Called by / Implements.
- **Size:** full snapshots only for versions in `versions.json.snapshot` (28, 29, 30); older versions (v0.2+) keep
  diff + hash skeleton only. Estimated 40 MB per W1 snapshot.
- **Companion:** every object page names the `bcatlas_resolve_node` call that opens it in bc-code-atlas; the plugin
  connects both servers.

### 4.7 Site, galaxy map, search, MCP, plugin

**Astro** static output (chosen over Hugo: no shared TypeScript, awkward D3 islands; over Starlight/VitePress:
docs-opinionated, strain at ~20k pages; over Quartz: OOM reports above a few thousand pages). Content collections
point at `../content`, typed by the same JSON schemas; islands only for the galaxy map and diff views; compact
templates (shared assets, no inline CSS) to stay well under the Pages cap; expected build 5–10 min on ubuntu.

Page types: home (galaxy), topic hub, feature, object (+ `/versions/<v>/` JSON), localization hub + diff view,
source footprint ("flight path"), video (+ `/transcript/` for Microsoft, excluded from Pagefind), post, weekly digest
(+ `rss.xml`), deprecation radar, drift report, coverage heatmap (topics × pillars from `coverage.json`), roadmap
tracker. Every HTML page has a markdown twin at `<path>index.md` with `<link rel="alternate" type="text/markdown">`,
a "Copy as markdown" button and an "Open in Claude" link.

**Galaxy map** (one-to-one with the data model, so the picture never lies):

| Galaxy | Data |
|---|---|
| Systems | domains (Finance, Sales, Inventory, …, Development, Platform, Localization) = `node.group` |
| Stars | hubs: features, topics, objects (brightness = number of sources; colour = official share) |
| Orbiting bodies | sources attached to a hub: Learn page, video (with second), blog post, BCQuality rule, roadmap item |
| Constellations | localizations: lines between the objects/features a country layer adds or changes (BE, NL first) |
| Newly lit stars / flares | content added in the last 7 days (feeds the Change radar) |
| Flight path | an author's footprint: the hubs a blog or channel touches, ordered in time |

Layout baked at build time (d3-force, fixed seed) into `graph/summary.json`; the browser only renders (Canvas up to
~2k nodes, PixiJS/WebGL if the summary grows), four zoom levels galaxy → system → star → page, filters by
type/tier/country/version; page-level ego graphs render SVG from `graph/ego/<id>.json`. No tokens involved.
Design tokens start from `prev/design/tokens.json` + `HANDOFF.md`.

**Search:** Pagefind over summaries/bodies with filters (`type`, `tier`, `version`, `country`); the MCP uses
`data/index/search.json` (MiniSearch, shards < 15 MB) because Pagefind fragments are awkward outside a browser.
`llms.txt` at root plus per section (`/topics/llms.txt`, `/objects/llms.txt`, …) with a Stripe-style agent preamble
(cite the tier, check version applicability, never invent object IDs); `llms-full.txt` excludes transcripts.

**MCP** (`packages/mcp`, `npx bc-observatory`): downloads `index-manifest.json` from the site on start, fetches
shards by ETag into `~/.cache/bc-observatory/<hash>/`, refreshes daily. Tools: `search(query, filters)`, `ls(path)`,
`cat(path)` over a virtual FS mirroring `content/`, `get_object(type, idOrName, version?, country?)`,
`diff_object(type, id, from, to)`, `localization(cc, version?)`, `whats_new(since|version)`,
`blog_footprint(sourceId)`, `feedback(pageId, message)` (returns a prefilled GitHub issue URL; no auth). CI smoke test
over stdio against fixture indexes. Package name availability (`bc-observatory`) verified at M4.

**Plugin:** `plugin/` with `.claude-plugin/plugin.json`, `.mcp.json` (the npx server), skills `bc-lookup`,
`bc-whats-new`, `bc-localization`; root `.claude-plugin/marketplace.json` so
`claude plugin marketplace add waldo1001/waldo.BCObservatory` works. GitMCP needs nothing beyond public + `llms.txt`
(`https://gitmcp.io/waldo1001/waldo.BCObservatory`); DeepWiki indexes the public repo; both get README badges.

### 4.8 Claude Design step (M3)

`pipeline/render/design-brief.ts` regenerates `docs/brief/PROMPT-design.md` from a template (structure of
`prev/docs/brief/PROMPT-claude-design.md`) embedding real artifacts: one topic hub, one object page with timeline,
one source footprint (`waldo.be`), one localization diff (BE vs W1), a one-system excerpt of `graph.json`
(~50 nodes), real counts, and the attachment list (`design/tokens.json`, `HANDOFF.md`). The brief states the galaxy
metaphor, agent-first constraints (markdown twin per page, evidence data per claim, trust tier visible), light/dark,
mobile, a11y, and asks for tokens + HANDOFF in the release-wave shape, with dedicated artboards for the galaxy map
and the blog flight path. Owner runs Claude Design; output lands in `design/` and drives the Astro components.

### 4.9 Seed sources (`sources.yaml`)

Official: Learn (2 repos), M365 roadmap API, BCQuality, BCApps + Code History, Microsoft YouTube
`UCLErzd6kpQ0DAJSGsGjtxbA`. Community channels: Hougaard `UCcJCTa4PvbOQj50y_HJSxXw`, Saurav Dhyani
`UC2SnEeamdCLN98MXFprKd_w`, Areopa `UCWL0RbbT6ILzzCd6Ix7t0AQ`, mibuso TechDays `UCeFUrL4JZsOa39TQVmrw2ww`,
Stefan Maron `UC96RLsspoArRJu6dhwkOsWQ`, BC Musings `UCcjRDxd_tl4UckLy-30pt3g`, Dynamics Corner
`UCiC0ZMYcrfBCUIicN1DwbJQ`. Community blogs (derived unless noted): waldo.be `/feed/` (**full_text: true**),
stefanmaron.com `/index.xml`, kauffmann.nl, demiliani.com, freddysblog.com `/feed.xml`, jpearson.blog, katson.com,
sauravdhyani.com (Blogger Atom), gerardorenteria.blog (es), bertverbeek.nl, blog.kine.cz `/index.xml`,
keytogoodcode.com (scrape), olofsimren.com, Mohana (feedburner), duiliotacconi.com, thinkaboutit.be (UA/backoff),
thatnavguy.com `/rss.xml`, dvlprlife.com, tine.staric.net `/feed.xml`, aardvarklabs.blog, vondervoort.be
`/index.php/feed/`, thedynamicsexplorer.com, vld-bc.com (scrape); hougaard.com covered by his channel. Discovery:
Wingate "D365BC Combined" feed (suggestions only). Held back: yzhums.com, 11 MAYBE blogs. Horizon: 18 months for
blogs; all videos newest-first.

## 5. Milestones

| Milestone | Deliverables | Effort | Token risk |
|---|---|---|---|
| **M0 bootstrap** | findings doc + LOG entry in waldoAI; first commit into the existing empty repo, create the private vault repo, configure both with `setup-github.sh`; skeleton, schemas, `llm.ts` port with fixes, manifest/queue/budget libs; provisioning through all gates; runner online; `nightly.yml` doing guard→ingest→commit with zero LLM calls; `pages.yml` deploying a placeholder Astro site | 3–4 days | none beyond one `claude -p` ping |
| **M1 first content** | seed import (84 VTTs, id resolution), Microsoft channel reconcile + captions, video extract/summarize, Learn ingest + topic hubs seeded from `TOC.md`, roadmap snapshots + feature stubs, first hubs Opus-reviewed with badges | 1–2 weeks | medium: 84 videos ≈ 150 Haiku + 90 Sonnet calls; docs capped at 60/night; Opus only on hubs |
| **M2 code pillar** | extractor + queries, 28/29 W1 snapshots, 26 country overlays, BE + NL localization hubs with diff views, timelines, deprecation radar, docs↔object links, object pages | 2 weeks | low: deterministic; Sonnet for ~60 localization/object-family narratives |
| **M3 blogs + galaxy + design** | 24 blogs backfilled (REST/RSS/scrape), language tagging, footprints, graph + baked layout, coverage heatmap, design brief generated, Claude Design pass, Astro UI implemented | 2–3 weeks | medium: ~3–4k posts × (1 Haiku + 1 Sonnet) at 40/night → ~3 months of background backfill; UI is token-free |
| **M4 change radar + MCP = v0.1** | weekly digest + RSS, drift report, roadmap tracker, MCP package published, plugin, GitMCP/DeepWiki badges, AGENTS.md, announcement | 1–2 weeks | low |
| **M5 source stage** | the original in the page (`docs/specs/source-embed.md`, D60): click-to-load YouTube player with chapter seeking, blog post in a sandboxed frame or a source card, deterministic embeddability probe writing `preview` frontmatter, `embed` opt-out; phase 2: evidence chips open the player at `t`, list posters, source identity | 1 week | none: deterministic, no LLM |
| **M6 code changes** | merged BCApps pull requests as observed changes (`docs/specs/bcapps-pull-requests.md`, D61): pillar `change`, pages for AL-touching merges joined by exact file path to object pages, "Recent changes" on object pages, digest section, search, graph, `whats_new`; three-month backfill | 1–2 weeks | low: one Haiku batch call per 6 pull requests, about 2 calls a night |
| **M7 discovery** | find the right hub, explain every field, point onward (`docs/specs/discovery.md`, D65): field ToolTips rendered as explanations on table pages, hubs joined to their objects through `docs-objects.json`, first-party apps placed in their system, search that ranks hubs first and says what a result is, Related on every page, app pages, page controls after a re-extraction | 2 weeks, four zero-LLM tranches | none: deterministic, no LLM |
| **M8 galaxy views** | one place, three views (`docs/specs/galaxy-views.md`, D66, shipped 2026-10-07): deterministic layout on the Learn tree and namespace plots, ports and lens bar, the neighbourhood explorer at `/neighbourhood/`, question entries, Tilt of one system | 1 week | none: deterministic, no LLM |
| **M9 code atlas** | bc-code-atlas as grounding partner (`docs/specs/code-atlas.md`, D67): plugin + `bc-grounding` skill, "Ask your agent" on object pages, graphify-al call graph (Calls / Called by / Implements, `calls` ring), mentions joined on video and post pages, graphify-al pinned on the Mini and the Mac | 1–2 weeks | none: deterministic, no LLM |
| **M10 version lens** | one "changed in" pill with a version menu in the galaxy lens bar (`docs/specs/version-lens.md`, D72, shipped 2026-10-07): same lens ids and deep links, the Objects atlas picker from `config/versions.json`, every printed version list as collapsed runs through one `versionRanges` helper | 2 to 3 days | none: deterministic, no LLM |
| **M11 media rows** | every video and post row in the galaxy panel as title over the full width, then `[video\|post] · source · date`, no star count (`docs/specs/media-rows.md`, D73, shipped 2026-10-07): the source id travels in `landed.json`, the summary's `mb` and the layers files | 1 day | none: deterministic, no LLM |
| **M12 table columns** | no one-character table columns (`docs/specs/table-columns.md`, D74, shipped 2026-10-07): `td` wraps with `break-word` not `anywhere`, markdown tables wrapped in `.table-scroll` so they fill the width, pills never wrap, video Features table drops an Evidence column that is empty on every row (~429 pages rewritten by the nightly) | half a day | none: deterministic, no LLM |
| **M13 atlas on pages** | object pages show the D67 call sections from our own graph (verify the first render, re-render once if needed); "Ask your agent" shortened to one closing paragraph for bodies and per-procedure edges; bc-grounding routes object-level callers to the observatory (`docs/specs/atlas-on-pages.md`, D75, shipped 2026-10-07) | half a day | none: deterministic, no LLM |
| **M14 site size** | the Pages check measures tar bytes with a size report and an 800 MB warning; components on object pages stop scoping per element; markdown twins of object pages to GitHub raw and a host move recorded as measured triggers (`docs/specs/site-size.md`, D76, shipped 2026-10-07) | 1 day | none: deterministic, no LLM |
| **M15 review coverage** | a fourth review state `derived` for pages without model text; Opus reviews for every video, post, code change, localization and digest narrative, tied to the input hash (`docs/specs/review-coverage.md`, D77, shipped 2026-10-08) | 2 to 3 days, then one or two unlimited runs | medium: about $120 of Opus for the backlog, then the new quotas per night |
| **M16 panel lists** | the lens picker's rows get a marker and a count; panel rows without a marker get a two-column grid; a headless sweep over every panel state (`docs/specs/panel-lists.md`, D78, shipped 2026-10-08) | half a day | none: deterministic, no LLM |
| **M17 roadmap link titles** | roadmap links print the feature's title, not its id: source pages list title, area, status, GA and count, most-shown first; video Features tables link by title (`docs/specs/roadmap-link-titles.md`, D79, proposed); 6 source and 61 video pages rewritten by the next nightly | half a day | none: deterministic, no LLM |
| **M18 week code changes** | the this-week lens gets Videos, Posts and Code pills that filter its list and lit stars, the week's change pages grouped by kind; `landed.json` gains `changes`; the header pill splits into media and code; Changes in the nav; `/changes/week/` (`docs/specs/week-code-changes.md`, D80, proposed) | 1 to 1.5 days | none: deterministic, no LLM |
| **v0.2+** | evidence chips + review-badge UI, 30-vNext, older versions as diffs back to 23/15, Jarvis budget handshake (shared intent file), static embeddings (model2vec potion-8M), MAYBE blogs, yzhums opt-in if agreed | ongoing | per-version gating |

## 6. Verification

- **Schemas:** Ajv tests for every schema with valid/invalid fixtures; all `content/` frontmatter validated in
  `pr-validate` and before every commit on the Mini.
- **Golden dry runs:** `LLM_CACHE_ONLY=1 npm run nightly -- --dry-run` against `tests/fixtures` (2 Microsoft VTTs,
  30 `.al` files from BCApps, 5 Learn pages, a sources.yaml) must reproduce golden output hashes.
- **Pillar end-to-end on the Mini:** `nightly --pillars video --quota 2` on two known videos → manifest states +
  quote checks; `code-version 29 --countries BE --limit 200` then `country-diff` assertions on known BE objects
  (e.g. table 11306 present, absent in W1); force one changed Learn page → hub `stale` → refreshed.
- **Leak scanner** on the full tree before every commit using community caption/post shingles from the vault;
  publish fails on any hit.
- **Links and size:** internal links every run, external weekly; Pages size budget in `pages.yml`; Lighthouse CI on
  home/topic/object pages (performance ≥ 90, a11y ≥ 95).
- **MCP smoke:** CI starts the server over stdio and calls `search`, `get_object`, `diff_object`; manual check with
  Claude Code via the plugin on five scripted questions.
- **Eval (later):** `tests/eval/questions.yaml` of 50 BC questions with expected page ids; weekly hit-rate report.
- **Infra:** `mini-selfcheck.yml` after provisioning and weekly; `runner-health.yml` opens an issue when the runner
  is offline or the nightly failed.

## 7. Risks and mitigations

| Risk | Mitigation |
|---|---|
| YouTube blocks/throttles yt-dlp | residential IP, 5–10 s sleeps, 40 captions/night cap, cookie-less first, `--cookies-from-browser` only as owner-gated fallback; missing captions → `skipped:no-captions`, weekly retry |
| Subscription policy or `claude -p` behaviour changes; `--bare` default | pinned CLI version in `config/tooling.json`, nightly auth + model-family smoke call before any batch, never `--bare`, run report escalates to an issue |
| Usage token for the guard expires or lacks scope | guard returns `unavailable` → `reduced` mode (half quotas) instead of blind runs; token source documented in RUNBOOK; verify Jarvis's refresh approach at M0 |
| Jarvis contention on the same plan | both honour 60/70; re-guard every 25 calls; nightly window + `llm_calls_max`; v0.2 shared intent file in `/Users/Shared/claude-plan/` |
| Pages/repo size | snapshots for 3 versions, JSONL shards ≤ 20 MB, transcripts out of Pagefind, compact templates, size check in `pages.yml`, lazy object detail JSON |
| Code licensing pre-29 (Code History has no license) | store extracted metadata only (names, signatures, properties), never source text; quotes limited to signatures; CONTENT-NOTICE.md; MIT BCApps first |
| Community pushback on derived content | derived-only default, ≤ 25-word quotes, opt-in with consent evidence, one-PR removal path, visible attribution and tier |
| Runner security on a public repo | self-hosted only for schedule/dispatch/push-main, PR jobs on ubuntu, workflow lint, hidden dedicated user, fork approvals, no PAT, 0600 env file |
| Scheduled workflow disabled after 60 idle days | every run commits a run report, even when budget-skipped |
| Learn churn outpacing hub refresh | hub refresh newest-first; unchanged members never re-summarized; drift report shows the backlog |
| Mini offline / FileVault reboot | `runner-health.yml` issue; Pages build independent of the Mini; FileVault check in preflight |

## 8. Reusable pieces from `prev`

- `pipeline/lib/llm.ts` — port with three fixes: record the real model (the `modelUsage` key with most output
  tokens, assert family, else `meta.model_mismatch`), drop the API backend, store input refs + hashes instead of
  full prompts (`LLM_CACHE_DEBUG=1` keeps them).
- `pipeline/lib/quotes.ts`, `scripts/check-quotes.ts` — verbatim quote validation (exact → snapped → fuzzy → drop).
- `pipeline/01-clean-vtt/index.ts` — VTT dedupe → segments → paragraphs.
- `pipeline/02-extract/{prompts,schema}.ts` — window-then-consolidate extraction, "hard rules" system prompt.
- `pipeline/03-merge-features/index.ts:65-96` — facts from verified evidence; model only groups and names.
- `pipeline/04-match-release-plan/fetch.ts` — roadmap API client.
- `data/release-plan/overrides.json` — human correction layer applied after the LLM.
- `.claude/skills/docs-recheck/` + `scripts/docs-recheck.ts` — subagent fan-out verifying claims against Learn MCP.
- `scripts/strip-for-public.sh`, `scripts/check-public-leak.ts` — 31-word shingle leak scanner.
- `scripts/setup-github.sh`, `.github/workflows/build-and-deploy.yml`, `scripts/get-bcle-transcripts.sh`
  (generalize channel, date filter, `[%(id)s]` in the output template).
- `AGENTS.md`, `llms.txt` generator (`06-render-markdown/index.ts:180-225`), `config/audiences.json`.
- `design/tokens.json`, `design/HANDOFF.md`, `docs/brief/PROMPT-claude-design.md` — design seed.
- `waldo.Jarvis/specs/644-*.md` — usage endpoint contract for `pipeline/lib/budget.ts`.
- Anti-patterns to avoid: single-prompt cross-corpus merges, 220-char doc truncation, title-based matching,
  one repo per wave, hand-rolled 42 KB site builder, committed LLM cache with copyrighted text.

## 9. Owner actions and approval gates (confirmed again at execution time)

1. Creation of `waldo1001/waldo.BCObservatory` (public) and `waldo1001/waldo.BCObservatory-vault` (private).
2. `sudo` on the Mini: create user `bcobs`; install the LaunchDaemon; `pmset -a autorestart 1` (after FileVault check).
3. Run `claude setup-token` once in a browser; the token goes into the Mini's 0600 env file under `bcobs`.
4. Provide the login-scoped usage token for the budget guard (same source as Jarvis's `JARVIS_USAGE_OAUTH_TOKEN`).
5. Approve runner registration (token minted from this laptop's `gh`, repo-scoped, label `bcobs`).
6. Add the vault deploy key (write) to the vault repo.
7. At M4: npm Trusted Publishing setup for `bc-observatory`.
8. Optional, later: custom domain on top of GitHub Pages.
9. Separately: decide what to do about the release-wave repo's public transcripts and cache.
