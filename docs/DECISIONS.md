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
- **D15 Tools for the pipeline user are installed per user.** yt-dlp and deno go to `bcobs` via `uv tool` on uv's
  managed Python 3.12; brew installs only uv. Why: brew would upgrade openssl@3, sqlite, readline, xz and
  ca-certificates under the running Jarvis processes. Consequence: `infra/mini/35-tools.sh`; re-run it to upgrade yt-dlp.
- **D16 Usage-guard token deferred to M1.** The setup-token lacks `user:profile` and Jarvis's login token is static
  with no refresh. Consequence: the guard runs `reduced` until a durable token source exists; M0 makes no LLM calls.
- **D17 Own metering caps LLM spend.** Until the usage guard has a durable token, every call is metered from its
  `claude -p` envelope and the nightly stops at per-night and per-week caps in `config/budget.json`. Why: works today
  without a new credential. Consequence: it sees only our calls, not Jarvis's or the owner's.
- **D18 Videos are the first M1 pillar.** Why: 84 seed VTTs exist and the extraction loop is proven on them, so it is
  the shortest path to real pages. Learn docs follow, then roadmap stubs and the first Opus-reviewed hubs.
- **D19 A status claim needs a status word.** A feature's status (ga, preview, announced) stands only when its
  verbatim evidence quote states it; "we introduced X" is not "X is generally available". Why: verbatim checks proved
  quotes existed, not that they supported the label, and summaries repeated the overclaim. Consequence: launch-event
  videos mostly read "status not stated"; real status comes from the Microsoft 365 roadmap feature pages.
- **D20 Spend caps bind, not item counts; small items are batched.** Measured with `claude -p`: a call carries ~$0.012
  of fixed CLI overhead; Haiku without thinking for facts; Learn pages go 8 per Haiku call (~$0.008 a page). Item
  quotas were raised (docs 400, videos 40, hubs 60, captions 60) so the $10 night / $50 week caps (D17) are the
  limit. Consequence: executor batch handlers; backlog in weeks instead of months.
- **D21 Reviews gate, they do not just annotate.** Opus edits pass the same validators as the first pass; a rejected
  video is skipped and a rejected hub narrative is withheld from its page. Reviews are tied to the input hash of
  what they reviewed.
- **D22 Roadmap coverage is an LLM match over same-system candidates, validated deterministically.** A video (its
  extracted features) or a Learn page is matched by Haiku against the roadmap features that share a galaxy system with
  it; the schema enums allow only that call's refs and roadmap ids, the model labels each pair `covers` or `related`
  (only `covers` is kept), and validation drops a match whose id is not a candidate of that ref, whose quote words do
  not appear in order in the evidence text, or whose ref matched more than 3 features. Roadmap features get 1 to 3
  systems from a Haiku classification on top of their area's system. Why: one area system per feature missed real
  coverage (an Expense Agent withholding-tax video is finance, the area is copilot); without the `related` escape
  Haiku linked evergreen Learn pages by topic (about half wrong). Measured 2026-10-06: backfill of 241 units in 64
  calls, ~$1.65 including the one-off classification; ~$0.021 a call (one video, or 8 Learn pages). Video matches
  are high precision; Learn matches about three quarters plausible, so they ship machine-generated and unreviewed.
  Consequence: `data/links/roadmap.json` (+ `roadmap-systems.json`), quota `roadmap_links`, units redone only when
  their text or their candidates change; a video feature takes the roadmap status when its roadmap features agree.
- **D23 Opus reviews roadmap coverage per feature, per link.** One `review` call per roadmap feature sees its full
  roadmap text and every proposed link (video feature or Learn page, with the evidence text the matcher saw) and
  keeps or drops each. Verdicts are keyed by link and unit hash in `data/links/roadmap-review.json`; views leave
  dropped links out, so a dropped video link also stops passing the roadmap status; unreviewed links are marked.
  An answer without exactly one verdict per link is not stored. Why: Haiku's Learn matches were about a quarter
  wrong and D21 says reviews gate. Measured 2026-10-06: backfill of 66 features / 305 links for $4.74 (~$0.07 a
  feature); Opus dropped 22% of video links (mostly wave 1 videos showing the older capability) and 48% of Learn
  links. Quota `coverage_reviews` (Opus calls, zero under facts-only).
- **D24 check:leak gates every nightly commit; validate:content reports.** `check:leak` (pipeline/validate/leak.ts)
  fails on: vault or LLM-cache files in the tree git would commit; captions outside `data/captions/microsoft/` or of
  a video no official source has; quotes of 25+ words on non-official pages of sources without `full_text`; and any
  run of 25 consecutive words of community raw text from the vault (captions under `vault/captions/community/<source>/`,
  post bodies under `vault/posts/<source>/`) in any committable file, VTTs read through the caption cleaner. The
  vault is required once a community item has stored raw text. Findings block the nightly commit and the killed-run
  recovery commit (status aborted). `validate:content` checks frontmatter schemas, id = path, unique ids, link ids
  and relative links; its errors go to the run report without blocking. Both run in PR CI (leak: policy only, no
  vault there). Why: 25 = the content notice's quote limit; a full repo scan takes about 2 s.
- **D25 Community video captions go to the vault; derived pages pass a per-item leak guard.** `fetched`/`captioned`
  accept community videos once the vault is a git checkout (the Mini); captions land in
  `vault/captions/community/<source>/` and run-nightly.sh pushes them to the private repo. Extraction, summary and
  Opus fixes of a community video are checked against that video's own captions before they are written: 25
  repeated words skip the item (`leak`) instead of letting the commit-time scan (D24) block the night. Community
  pages show at most 5 quotes (each under 25 words). `no-captions` skips record `skipped_at` and are retried weekly,
  4 times. Verified 2026-10-06 on one Erik Hougaard video end to end ($0.23 incl. roadmap link + Opus review); the
  full leak scan of that tree with its captions in the vault found nothing.
- **D26 The nightly commits in batches.** During stage execution the nightly commits and pushes `content/` and
  `data/` after every 50 advanced item stages, or every 20 minutes when work is slow (`checkpoint_items`,
  `checkpoint_minutes`), plus the vault when it changed. Each checkpoint passes the leak gate; temp files are never
  staged. `run-nightly.sh` pushes the vault even when the nightly exits non-zero. Why: a subscription-limit stop
  already committed, but a killed run (job timeout, reboot, cancel) lost everything because the next checkout cleans
  the workspace; long unlimited runs (`--unlimited`, workflow input `unlimited`) also produced one huge commit with
  no visible progress. Checkpoints scan only files that differ from HEAD (119 ms instead of ~23 s once the code pillar
  and object pages grew the tree): a synchronous full scan every 50 items stalled the whole run. The night's final
  commit still scans everything.
- **D27 AL extractor: labelled-node walker on web-tree-sitter, shipped preprocessor branch, CLEAN tags.**
  `pipeline/code/extract.ts` walks the tree-sitter-al grammar's labelled nodes (object_id, object_name, base_object,
  field id/name/type, procedure parameters/return_type/modifier) instead of per-construct `.scm` queries: one place,
  easier to test. `@sshadows/tree-sitter-al` 4.4.1 (MIT) ships the WASM; `web-tree-sitter` 0.27.0 loads it; both
  pinned, installed with `--ignore-scripts` (no native build). Preprocessor regions follow the shipped build (no
  symbols defined: `#if not CLEAN27` taken, its `#else` not); elements inside `#if not CLEAN<n>` /
  `#if not CLEANSCHEMA<n>` carry `clean: [...]`, Microsoft's own removal marker, next to ObsoleteState. Doc comments
  only when the caller says the source's license allows (BCApps, MIT). Pages/reports/queries get properties,
  procedures and triggers; layout and datasets are v0.2. Measured on BCApps releases/29.x W1 BaseApp: 8,137 files,
  8,057 objects, 0 parse errors, 7.7 s on the laptop; every record passes al-object@1.
- **D28 Code snapshots per BC major, countries as overlays, derived diffs.** One code item per major's
  `snapshot_source` (config/versions.json: BCApps for 29/30, Code History for 28 whose BCApps branch has no Base App)
  is checked out sparse, blobless, depth 1 and extracted into `data/code/<major>/<cc>/objects-<type>-<n>.jsonl`
  (≤ 10 MB shards, sorted by object key) + `manifest.json`. W1 = Base Application, System Application, Business
  Foundation. Countries are overlays: objects new in, or changed by, the country; BCApps countries are assembled
  through their layer chain (`layers_config.json`: AT on DACH on W1) with each layer's excluded files; regional bases
  (APAC, DACH, NA) are not countries; Code History countries are explicit (BE, NL). Shards carry no per-object
  commit/build (manifest only), and the content hash ignores location, procedure lines and doc comments, so a new
  commit rewrites only changed objects and an unchanged declaration hashes the same across majors. Derived each
  night when inputs change: version diffs (28→29→30), country diffs, timelines per object type (one file per type,
  not per object), and the deprecation radar (Obsolete* + CLEAN guards; `clean_version` is the guard's version, not
  a removal date). Measured: 29 = 9,435 W1 objects + 22 countries in 44 s; all snapshots 334 MB raw, derived 22 MB.
- **D29 Docs ↔ objects by exact id only; first-party apps get their own snapshot.** Learn's `ms.search.form`
  (page/report/query ids) is joined to the snapshots by object key (`data/index/docs-objects.json`); PLAN's
  name/caption matching is left out (AGENTS.md: no title matching). `data/code/drift.json` lists documented objects
  in no snapshot, documented obsolete objects and new pages/reports without docs. BCApps first-party apps
  (`src/Apps/W1/*/app`, ~6,900 objects, 16 MB) are `data/code/<major>/apps`, outside W1 so version diffs compare like
  with like; they resolved 370 of 583 unmatched Learn ids. 2026-10-06: 1,144 pages, 4,888 links, 213 not found
  (country apps, removed objects), 42 obsolete but documented, 39 new pages/reports undocumented.
- **D30 Object and localization pages are deterministic facts from the code.** `pipeline/render/object.ts` writes
  `content/objects/<type>/<id>.md` for every W1 and first-party app object of the snapshot majors (16,425 pages,
  76 MB) from the current release's snapshot (`narrative_order`), and `content/localizations/<cc>.md` per country
  layer (22). Object pages: members, events, subscriptions, public procedures, life across majors, countries that
  replace it, Learn pages naming it and their topic hubs, deprecations, source link at the exact commit.
  `versions.introduced` is null for objects already in the oldest snapshot (they may be decades old). Country-only
  objects get no page (ids repeat across countries); they are listed on their localization page. No LLM; Sonnet
  narratives for BE/NL localization hubs come later. Site routes `/objects/`, `/objects/<type>/`, `/localizations/`;
  the site builds 17,268 pages in ~20 s. The deprecation radar has no page of its own until the weekly digest (M4).
- **D31 Localization narratives: Sonnet over the country diff and Learn summaries, priority countries first.**
  `pipeline/summarize/localization.ts` writes `data/hubs/localizations/<cc>.json` for `narrative_priority` (BE, NL)
  from the country's code diff and the summaries of its Learn LocalFunctionality pages (D12: never raw pages or
  code), once 80% of those pages are extracted, and again only when its input hash changes. The localization page
  then leads with the narrative (badged unreviewed) and keeps the numbers. Runs in the nightly code post-pass when
  stage execution finished, within the deadline and spend cap; ~2 Sonnet calls.
- **D32 The Learn API reference links to API pages by entity.** `api-reference/v<n>/resources/dynamics_<entity>`
  and its operation pages (`.../api/dynamics_<entity>_<op>`, longest entity prefix) document the standard API page
  (PageType API, no APIPublisher) of that APIVersion whose EntityName is the entity: an identifier join, not title
  matching. 448 of 582 API reference pages linked; docs↔objects now 1,592 Learn pages, 5,336 links, each with `via`.
- **D33 Workers stay until the plan is drained; community fields are trimmed, not skipped.** The executor's workers
  used to leave once the cursor passed the last planned item, so items parked on the yt-dlp lane (and batch peers
  handed back) were then served by one worker, stage by stage: with concurrency 6 the Mini ran 1-3 LLM calls. Idle
  workers now wait while anything is in flight, parked or requeued, and are woken when a lane frees or a batch hands
  items back; the code job yields to the event loop every 200 files. The per-item community guard (D25) trims each
  field that repeats 25+ caption words to 20 words + "..." instead of skipping the video; the 31 earlier `leak`
  skips get two more chances from their last completed stage (LLM calls are cached).
- **D34 Blogs: post text to the vault, one Haiku pass, derived pages.** `fetched` stores the post body as text in
  `vault/posts/<source>/` (WordPress REST content, else the page's article element; only with a vault checkout; one
  fetch at a time). `extracted` is one Haiku pass, 4 posts per call: summary and key points in our words, systems,
  topics, objects as named, features, versions, language, at most 3 quotes checked verbatim and under 25 words;
  community fields that repeat 25+ words of the post are trimmed (D33). No Sonnet pass per post (PLAN had one): the
  Haiku summary stands, as for Learn pages, halving the backfill cost. `published` writes
  `content/posts/<source>/<key>.md` (`frontmatter.post`), `posts/llms.txt` and site routes. Opted-in full-text
  sources are not trimmed but still show derived content only. Measured: ~$0.03 a post. Scrape-only sources wait.
- **D35 MCP server reads the published site; the index is page metadata, not a serialised search index.** The
  pipeline writes `data/index/pages-<n>.json` (path, type, title, summary, tier, system, real dates, tags, a few type
  facts) + `index-manifest.json` with sha256 per shard; the site serves them and the W1 version diffs. `packages/mcp`
  (`bc-observatory`, MCP SDK 1.32, zod 4) caches shards by hash, builds MiniSearch in memory (~0.3 s for 17k pages)
  and reads pages through their markdown twins; `BC_OBSERVATORY_LOCAL` reads a checkout instead. Tools: search, ls,
  cat, get_object, diff_object, localization, whats_new, blog_footprint, feedback (prefilled issue URL, no auth).
  `plugin/` (MCP + skills bc-lookup, bc-whats-new, bc-localization) and `.claude-plugin/marketplace.json`. The root
  package is renamed `@bc-observatory/repo` so the MCP package can be `bc-observatory`. Publishing to npm waits for
  the owner's Trusted Publishing setup (PLAN gate 7).
