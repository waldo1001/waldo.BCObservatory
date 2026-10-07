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
- **D36 Weekly digest, deterministic, with the deprecation radar.** `pipeline/render/digest.ts` writes
  `content/digests/<YYYY-Www>.md` (ISO weeks, UTC): roadmap features added or changed (snapshot diffs, never the
  first snapshot), videos and posts published, Learn pages with commits, code snapshots and version-diff summary,
  and the radar (obsolete elements by tag; CLEAN-guarded elements whose cleanup version has arrived). The nightly
  re-renders the current and previous week; `/rss.xml` lists the last 52; `frontmatter.digest`. Derived code files
  carry DERIVED_VERSION in their inputs so a format change rewrites them. No LLM: a Sonnet intro can come later.
- **D37 The galaxy: graph from page links, deterministic force layout, canvas on the home page.**
  `pipeline/link/graph.ts` builds nodes and typed edges from every page's `links` (topic relates, feature/video
  demonstrates, object documents topic, object/localization localizes, extension extends base, source authored) and
  groups objects by namespace into galaxy systems. Summary = topics, features, localizations, sources and the 300 most
  connected objects (523 KB; `url` omitted when it is the page path of the id); videos and posts live in
  `full.jsonl` and the one-hop `ego/<id>.json` files. Layout: d3-force from hash-seeded starts around each system on
  a ring, fixed ticks; links across systems barely pull and system radii are capped so systems never overlap. The
  home page draws it on a canvas (pan, zoom, hover, click-through) until the Claude Design pass restyles it.
- **D38 The Claude Design brief is generated from the live knowledge base.** `npm run design:brief` writes
  `docs/brief/PROMPT-design.md` in the release-wave brief's shape with real counts and real excerpts (topic hub, table
  18, BE localization, a source footprint, a one-system galaxy excerpt); the release-wave tokens and handoff are in
  `design/seed/` as the starting point. The owner runs Claude Design; its `design/tokens.json` and `design/HANDOFF.md`
  then drive the Astro components (M3 UI).
- **D39 Source footprints and coverage, deterministic.** `content/sources/<id>.md` per blog or channel with pages:
  systems, topics and AL objects it touches, roadmap features it demonstrates, first and last item, items per
  quarter (the flight path), recent items (`frontmatter.source`). `data/index/coverage.json`: galaxy system ×
  pillar (Learn pages, objects, videos, posts, features), drawn on `/coverage/` as a heatmap. Per-topic coverage is
  left out: only Learn and code attach to topics so far.
- **D40 npm via Trusted Publishing from GitHub Actions.** `.github/workflows/publish-mcp.yml` (ubuntu-latest, manual
  dispatch, `id-token: write`, Node 22 + npm ≥ 11.5.1) typechecks, runs the MCP smoke test, builds and publishes
  `bc-observatory` with provenance; no npm token exists anywhere. Owner approved 2026-10-06. Setup on npmjs.com is the
  owner's (trusted publisher: this repo, this workflow); if npm needs the package to exist first, one manual
  `npm publish` precedes it. Announcement drafts in `docs/announcement/`; the owner publishes them.
- **D41 Catch-up mode: unlimited runs four times a day until the backlog is in.** `config/budget.json`
  `catch_up.until` (2026-10-10, owner 2026-10-06): until that run date every nightly behaves as `--unlimited` and its
  report carries `catch_up`. `nightly.yml` adds cron runs at 06, 12 and 18 UTC (`--scheduled`); outside catch-up a
  scheduled run outside the night window exits at once (no report, no commit), so normal weeks keep one run a night.
  Lanes get a capacity (`lanes`): blog fetches 3 at a time, yt-dlp stays at 1 (D15). Why: one unlimited window a day
  would leave the Mini idle once the week's spend cap binds, while the Learn, video and blog backlog needs about two
  to three days of continuous work.
- **D42 The site follows the Claude Design handoff ("Deep field").** `design/tokens.json` and `design/HANDOFF.md`
  (owner 2026-10-06) drive the Astro site: `site/src/lib/tokens.ts` maps tokens.json to CSS variables, served once
  as `/tokens.css`, and fills the values the handoff left undesigned (light badges, mixed tier, video, blog and
  roadmap evidence, roadmap status, removed diff lines) with AA stand-ins until a design pass adds them to
  tokens.json. Dark first, light on `prefers-color-scheme` or the header toggle. Fonts are self-hosted through
  Fontsource (Bricolage Grotesque, JetBrains Mono). One name: "BC Observatory" (owner, 2026-10-06), no second
  "Business Central Galaxy" title. Every information page shares the handoff's skeleton (`layouts/Page.astro`), and
  the markdown body stays the main column, so the page and its markdown twin never diverge. The galaxy's system
  centres follow the handoff's two-arm spiral (taxonomy order from the core, seeded jitter, `SPIRAL_SCALE` 4.5 so
  neighbours keep apart); zoom levels are fitted to each system's radius instead of the prototype's fixed 4.4 / 8.
- **D43 Videos and posts link to topic hubs (Haiku, quota topic_links).** `pipeline/link/topics.ts`, same shape as
  the roadmap links (D20): a unit is one video or post, as derived text only; its candidates are the topic hubs of its
  galaxy systems; the answer's enums allow only that call's refs and hubs; deterministic validation drops
  non-candidates, quotes whose words are not in the item's text in order, and items with more than 3 hubs. Units are
  redone only when their hash changes, so new items link on the next run with no separate backfill. Results in
  `data/links/topics.json`; topic pages list them ("Videos and posts", links.videos/posts), the graph turns them into
  edges and source touches. Sample 2026-10-07: 48 items, 11 calls, $0.47 ($0.0097 per item), prompt v2 after v1
  linked GitHub Copilot posts to Business Central Copilot hubs and demo data to its domain. Both link passes now
  also run after a clean memory stop, not only after "done", so linking keeps pace during catch-up.
- **D44 Galaxy captions follow zoom, search lights up the galaxy.** Captions (owner 2026-10-07): a star's caption
  has a zoom threshold from its weight rank inside its system (`site/src/scripts/galaxy-labels.ts`,
  `threshold(rank) = 0.2 * (1 + rank) ** 0.75` in system-relative zoom) and fades in over 1.3x of zoom plus 300 ms,
  placed brightest first where there is room; a caption placed last frame keeps its slot. The large systems sit at
  zs ~0.13 when the galaxy fits the viewport, so the first caption per cluster appears at ~1.6x galaxy zoom and five
  are full at system zoom (HANDOFF 5). Wheel zoom never changes the level; a system that fills the view by hand
  (`dominantSystem`, 0.8x its own zoom) gets its edges and in-scope captions without touching breadcrumb, hash or
  panel. Reduced motion: a step at 1.15x, no fades. The site's TypeScript is now part of `npm run typecheck`
  (`site/tsconfig.json`); the Astro build only transpiles. Search: on pages with a galaxy, typing in the header
  field becomes an ad-hoc lens (`site/src/scripts/live-search.ts`, `GalaxyApi.setSearch`): hits with a star light
  up, systems holding star-less hits glow in proportion, the panel lists stars, systems and plain page links, hash
  `#q=`; the index loads on focus, never on page load; Enter still opens /search/. The select lens and the query are
  mutually exclusive. Why: the per-level label budget popped captions in late and all at once, nothing type-checked
  1,000 lines of galaxy code, and the search box did nothing to the picture it sits above.
- **D45 Relations between AL objects, from the metadata, into every object page.** `pipeline/code/relations.ts`
  (owner 2026-10-07) resolves field TableRelation and CalcFormula targets, page SourceTable, codeunit TableNo,
  Lookup/DrillDown/Card page ids and extension bases to objects, and places every event subscription on the
  published event of its publisher (table and page trigger events get `trigger_event` entries), by exact object
  type and name: the same app first, then W1, then the other apps; two candidates stay `ambiguous`, a value the
  extractor clipped at 300 characters stays `clipped`, a platform object that is not in the repo (`Access Control`,
  `Global Triggers`) stays `unknown`; nothing is guessed (D29). `data/code/relations/<major>.json` is written by
  `refreshCodeDerived` (BC29: 20.5k edges, 5.2k subscriptions, 1.5k unresolved, 6.9 MB). Object pages gain
  Relations, Referenced by (grouped per object, capped at 50 groups), Pages and codeunits on this table, Extended by,
  and the subscribers under each published event; the frontmatter carries the counts (`relations`) and the page
  fingerprint includes them, so a page is rewritten when something new references it. The MCP server sees it all
  through the markdown. Why: the data carried these relationships since M2 and nothing turned them into navigation;
  "what touches Customer" is the question a BC developer asks first.
- **D46 Compact object indexes and a Ctrl+K finder.** `pipeline/render/objects-index.ts` writes
  `data/index/objects.json` (one short row per object page: page key, type, id, name, app, namespace, obsolete
  state; 1.9 MB for 16k) and `data/index/fields.json` (field name -> object pages that have it, from the preferred
  major's snapshots; 15k names, 1.1 MB) next to the search index each night. The site mounts a palette on every page
  (`site/src/scripts/palette.ts`, Ctrl/Cmd+K or the header button): `t18`, `table 18`, `cu 80`, `Customer`,
  `page customer list`, `field:Posting Date`; the indexes load when the palette first opens. Why: with 16k object
  pages, "jump to table 18" and "which tables have a Posting Date field" are the two moves a developer makes most,
  and the full-text search index (7 MB, summaries) is the wrong tool for both. Agents can use the same files.
- **D47 The codebase atlas replaces the flat object lists on /objects/.** A squarified treemap
  (`site/src/scripts/atlas.ts`) of the objects by namespace (Microsoft > Sales > Customer; objects without a
  namespace fall under their app), drawn in the browser from `index/objects.json`, which gained four columns for it
  (introduced major, changed-in majors, Learn pages, countries). Size = objects; colour = the galaxy system of the
  namespace, or a lens (changed in BC29, changed in BC30, introduced since BC29, obsolete share, Learn coverage,
  country overrides) as brightness. Filters: type, app, introduced, obsolete, name; a click zooms into a namespace
  (`?ns=`), and a filterable table lists what is in view. The per-type pages and llms.txt stay for agents and links.
  Why: 16k objects in id-sorted lists of 4,000 rows gave no sense of where the code is, what changes, or what is
  documented; the atlas answers those at a glance and in the galaxy's visual language.
- **D48 Version lens and deprecation radar pages.** `/code/versions/` renders the W1 version diffs
  (data/code/diffs/version) by area (first namespace segment, from index/objects.json) with the member changes of
  each object under a disclosure; `/code/deprecations/` renders the current major's deprecations as a cleanup
  calendar by CLEAN version (what Microsoft removes in which release) with client-side filters by area, kind and
  state, and serves the JSON at `/code/deprecations/<major>.json`. Both are static HTML over data the pipeline
  already wrote (D31) and nothing read; the weekly digest links to the radar. Why: partners act on "what breaks my
  extension in BC31" and "what changed in Sales between 28 and 29", and the data sat unused in the repo.
- **D49 Event explorer and country heatmap.** `index/events.json` (publisher page, event, kind, obsolete,
  subscribers; from the relations of the preferred major) feeds `/events/`: every published event with the
  first-party code that subscribes to it, by area and publisher, with filters (kind, with/without subscribers,
  area, text). Diff objects now carry their namespace (`ns`, DERIVED_VERSION 5), `refreshCodeDerived` writes
  `diffs/country/matrix.json` (country x area: W1 objects replaced, own objects, fields added, at each country's
  newest major), `/localizations/` draws it as a heatmap whose cells open the country page narrowed to that area
  (`?ns=`), and the localization markdown gains a "By area" table. The country diffs and the matrix are served under
  `/code/diffs/country/`. Why: "who subscribes to OnBeforePostSalesDoc" and "where does BE really touch the code"
  were questions the data could answer and no page did.
- **D50 Localization narratives tell the story per area.** The Sonnet narrative of a country layer
  (`pipeline/summarize/localization.ts`, prompt v2) now returns, next to summary, overview and key points, one entry
  per area the country touches: what it changes there, why (only when a Learn local-functionality page in the input
  explains the requirement, otherwise null and shown as "not explained by a Learn page"), and up to eight object keys
  that carry the change. The response schema allows only the areas and object keys of the country diff, so the
  model cannot invent an object. The localization page's "By area" table links each area to its section (what, why,
  the cited objects as links, and a link that narrows the code diff on the site to that area via `?ns=`). Narratives
  run for the priority countries (BE, NL) and then every known country, one call each (~$0.18), redone only when the
  diff or the Learn pages change, after a run that ends "done" or on a clean memory stop (they never ran during
  catch-up before). `npm run narrate:localization -- --country be` samples one country into a temp copy. Why: the
  owner asked for an overview of what a localization changes, where, why, and a way into the code behind it; the
  deterministic tables showed the where, not the what or why.
- **D51 Leak provenance, the post guard covers quotes, and relations stream.** Three fixes to the failure of the
  2026-10-06 21:15 unlimited run (OOM, then the recovery gate refusing to commit). (a) The shingle scan now reasons
  about provenance: files generated from Microsoft's AL code alone (`data/code/`, `content/objects/`) are not
  scanned, because a blogger quoting an AL signature shares words with an extractor that never reads a post, and a
  run that also appears in official text the repo holds (the newest roadmap snapshot, Learn's page descriptions in
  the docs manifest) is counted as `official_runs` instead of reported. The official index is built only when a hit
  occurs, so a clean run pays nothing; every policy check still applies to every file. (b) Post extraction guards
  the whole extraction including quotes: a quote's text is already at most 24 words, but `why_it_matters` was free
  text that could copy the post, and fields that are short on their own can repeat a long run once serialized side
  by side; an extraction that still repeats after trimming is skipped (`StillRepeats`), like the video guard.
  (c) `buildRelations` (D45) held both snapshots of a major in memory, about a gigabyte per major, and was what
  exhausted the 8 GB heap in the post-pass; it now streams each snapshot twice (index pass, edge pass) keeping only
  a slim index entry per object: 308 MB peak and 2.2 s for BC28-30, same edges and subscriptions.
- **D52 A country's own objects get pages.** The 4,319 objects that exist only in a country layer (BE's CODA
  statements, NL's payment history, ...) had no page: the localization listed them as plain text and the D50
  narratives could not link them. They now render like any other object, keyed `<type>/<id>-<cc>` because 791 ids
  are used by more than one country (codeunit 9997 "Upgrade Tag Def - Country" exists in 13). The page says which
  layer it belongs to and links the localization; it carries no W1 relations, no "countries that replace it" and no
  Learn join, because a country object is in none of those. `country` in the frontmatter keeps them out of the two
  id-keyed lookups (the site's relations lookup and the field index), where their repeated ids would collide; the
  objects index, Ctrl+K and the atlas pick them up by path. 20,744 object pages, 595 MB built, 35 s.
  Also fixed: `relativeLinks` treated a `?query` link as a path, so D50's "all objects of <area> in the diff" links
  failed validate:content; a link starting with `?` addresses the page itself.
- **D53 The code pages pay for themselves in bytes.** D52 left the site at 595 MB and two list pages near a
  megabyte each, both well inside the 1 GB Pages cap but slow to open over a phone connection. Four changes, no
  facts dropped. (a) `inlineStylesheets: "never"`: Astro inlined the same ~4 KB of component CSS into each of
  20,744 object pages; one shared stylesheet that every page then reuses from cache costs one request and saves
  160 MB. (b) Three heavy components — `Neighbourhood.astro` and the two long list pages — declare `is:global`
  styles under the wrapper class their selectors already carried (`.nb`, `.radar`, `.vl`). A scoped style costs a
  `data-astro-cid-*` attribute on *every* element it covers: 31% of the version page, 25% of the radar, 10% of an
  object page. Scoping stays wherever a selector is not already wrapper-qualified. (c) The version lens splits per
  transition: the index is a bar chart of the top 12 areas per pair (15 KB, instant) and each pair gets its own
  page, so a reader loads the transition they asked about instead of all of them. An area bar links to the
  matching `<details>`, which a four-line script opens on the fragment. (d) The member list under a changed object
  caps at 12 with a link to the object page, which carries them all with version pills anyway; the cap only bites
  on 47 of 943 objects, so it is a guard against the next Table 38, not the saving. Result: 418 MB → 364 MB of
  real bytes, the version landing page 904 KB → 15 KB, the heaviest single page 834 KB → 584 KB, build 17 s.
- **D54 Opus reviews the topic links.** The roadmap links have had an Opus gate since D21; the topic links (D43)
  shipped without one, so whatever Haiku matched went straight onto the topic pages and into the galaxy. They now
  get the same contract: `review/topics.ts` judges them, a dropped link is left out of `mediaByTopic`, and the topic
  pages and the graph that reads those pages lose it with no further wiring. A verdict belongs to one link of one
  unit hash, so re-extracting a video or post makes its links due again; a call that does not answer every ref is
  distrusted whole, and those hubs stay due. What the reviewer has that the matcher did not: every link proposed to
  the same hub at once, and the hub's subtopics and the sections beside it — the commonest error is an item that
  belongs one section over, and naming the siblings is what lets the model say so. On a sample of 38 links it kept
  20 and dropped 18, among them a post about reviewing AL code *with GitHub Copilot* filed under building Copilot
  features *into* Business Central, a tradeshow schedule that mentions AI in passing, and a Dataverse video filed
  under Power Automate. A hub with two or more links gets its own call because that comparison is the point; the
  single-link hubs have nothing to compare, so six share a call — 34 calls and $2.45 became 9 calls and $0.91 for
  the same 38 verdicts. Quota `topic_reviews` 15 a night. Also fixed: `topic_links` was never in `LLM_QUOTAS`, so
  since D43 the guard neither scaled it nor stopped it when usage ran high; both link quotas are in it now, and
  `facts_only` zeroes the reviews, not the matchers.
