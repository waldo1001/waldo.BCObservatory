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
- **D55 A post page is checked where check:leak reads it, and the run says where its memory goes.** The nightly of
  2026-10-07 died twice over: the heap ran out, the wrapper restarted it as designed, and then the recovery commit
  hit the leak gate on `content/posts/bertverbeek-nl/1252.md` — 25 consecutive words of the post on the page. The
  D51 guard had run (the source is not `full_text`) and found nothing, because it checks `JSON.stringify` of the
  extraction and the scanner checks the rendered page, and the two put the fields in a different order: on the page
  the post's own title sat directly above our summary, so the run spanned that seam and spanned no seam in the JSON,
  and no single field contained it. Two changes. (a) The byline moves between the title and the summary, so the
  post's own words are never adjacent to ours — a structural fix that costs nothing and rewrites every post page
  once. (b) `policyCheckedPage` checks the page itself, the bytes the scanner will read: a page that repeats is
  scrubbed and re-rendered, and if it still repeats it is not written and the item is skipped (`skip: "leak"`, like
  D51) with any older copy removed. One post goes missing instead of the nightly dying with a night's work
  uncommitted. The extract-time guard stays as the cheap early filter.
  Also: the post-loop phases log heap, rss and duration (`phase <name>: ...`). Both OOMs happened after the last
  checkpoint, which is where the run had no instrumentation at all: 133 MB at the checkpoint, 8 GB six minutes
  later, nothing in between. Probing the obvious suspects locally cleared them — `loadObjectWorld` 184 MB,
  `renderCodePages` 501 MB, a full `refreshCodeDerived` recompute 30 MB, the topic linker's planning 39 MB — so the
  next run has to name the phase rather than be guessed at.
- **D56 A model call's output is bounded like its duration.** Hunting the OOM of D55 cleared every deterministic
  path by measurement — `loadObjectWorld` 184 MB, `renderCodePages` 501 MB, a full `refreshCodeDerived` recompute
  30 MB, the topic-link planning 39 MB, the search index, objects index and graph 325 MB together — which left the
  LLM transport, and there the reader did `stdout += d` with no limit while `claude -p --output-format stream-json`
  emits a line per event. A stream that does not stop takes the heap with it, and `concurrency` of them in flight
  takes the run: both OOMs grew from ~133 MB at the last checkpoint to 8 GB about six and three quarter minutes
  later, with the V8 stack ending in a timer resolving an awaited async function. Output is now capped at 64 MB
  (stderr at 4 MB): the accumulated string is dropped, the child is SIGKILLed and the call fails like a timeout, so
  the cost is one call rather than the night. The biggest honest response in this pipeline is a few MB.
  This is a bound, not a diagnosis: if the next run still dies, its `phase ...` lines (D55) name where.
- **D57 The post-loop phases can be shed under memory pressure.** The item loop has stopped gracefully on a full
  heap since D26 (`memory_stop_fraction`), and after it there was no guard at all: a phase that grew simply killed
  the process, and the run lost everything it had not checkpointed. That is how both 2026-10-07 runs ended. The
  five LLM phases — localization narratives, roadmap links, topic links, topic reviews, hub narratives — are now
  `optionalPhase`: when the heap is already above the stop fraction they are skipped with a warning and named in
  the report's plan note. The deterministic renders (code pages, the three indexes, the search index, the objects
  index, the graph) always run, because skipping one of those would leave the content inconsistent with the data,
  and they are what the final commit needs. Catch-up picks up the shed work on the next run, which is what the
  quotas already assume. This does not stop a phase that blows the heap on its own; it stops the *next* phase from
  inheriting a heap that is already gone.
- **D58 Countries include their extension apps; four smaller fixes.** (a) The code job extracted a country as its
  base-app layer chain only (`src/Layers/<chain>/BaseApp`), and BCApps also ships every country's own extension apps
  under `src/Apps/<layer>/*/app`: 2 to 14 per country, plus 7 under NA that US, CA and MX share. Denmark and India
  have no BaseApp layer at all — their whole localization is apps — so both read as empty, which is what crashed
  their narratives. `country_apps` (`src/Apps/<layer>/*/app`) is expanded for every layer of a country's chain after
  W1, exactly like the base-app view, and `country_apps_exclude` drops the Contoso demo-data apps, which are sample
  data rather than localization and would inflate every narrative and the heatmap. On BC29: India 0 → 1,262 objects,
  Denmark 0 → 431, Belgium +22, NA +115, under a second per country. `EXTRACTOR_VERSION` 3 re-runs the code items.
  (b) A diff with no changes against W1 now waits with a reason instead of sending an empty enum, which is an
  invalid schema. (c) Topic links named a feed post by its raw key (a URL or a blogger tag id), while its page lives
  under `fileKey` of that key: 10 topic pages linked pages that do not exist. `unitPageId` translates in
  `mediaByTopic`, so link identities and Opus verdicts are untouched. (d) A topic-review call carries at most 15
  refs: a hub with 30 links came back with 29 verdicts. Big hubs split into even chunks whose verdicts merge.
  (e) The checkpoint push staged files without committing them (`commitTracked` with an empty message still ran
  `git add`), so a push that lost a race met a dirty index and `git pull --rebase` refused; it cost 3.5 minutes on
  2026-10-07. A push-only call no longer stages, and the rebase autostashes the tree the item loop is still writing.
  A real-git test reproduces the production error on the old code. Also: catch-up ends after 2026-10-06 — the
  backlogs it existed for are drained (hub narratives 0, topic reviews 12), and the day had cost $68.75.
- **D59 Two hops on demand; scripts stay out of the pages; the item loop reports what is in flight.** (a) The 2-hop
  neighbourhood (deferred in D45 because it would ship the 6.9 MB relations file) now comes from per-type shards
  built at site build time, `code/neighbours/<major>/<type>.json`: each object's heaviest 12 neighbours as
  [key, ring, weight]. "Show 2 hops" fetches only the shards of the types already on screen — 600 KB per major in
  all, the largest 39 KB gzipped — and the objects index for names, then draws up to 60 objects on an outer ring,
  each under the first-hop object it is most strongly tied to (an object reachable several ways is drawn once, its
  weights added). Nothing loads until the reader asks. The selection and layout are a pure module with tests.
  (b) Astro inlines a bundled script below vite's `assetsInlineLimit`; the page-galaxy locator (3.3 KB, which D53
  missed) and the new toggle (3.5 KB) were inlined into every one of 20k+ object pages. `assetsInlineLimit: 0`
  makes both shared files: an object page 41.4 → 34.9 KB. (c) The OOM hunt (D55-D57) ruled out, by measurement,
  every post-loop phase, both code job types (Code History 669 MB, BCApps with country apps 763 MB), the model
  stream, oversized posts (the largest is 13k words) and the repeat scrub. Every dying process did a burst of
  cached work, then went silent for about 6.5 minutes inside stages the heap guard cannot interrupt. So the item
  loop now samples every 5 s and logs, every 30 s and whenever the heap crosses a gigabyte, the heap and each item
  in flight with its stage and how long it has been in it: the climb itself will name the stage.
- **D60 Sources are shown in place, click-to-load, and the content stays on its origin.** Video and post pages get
  a stage above the summary that plays the YouTube video, or shows the blog post, inside the page
  (`docs/specs/source-embed.md`). (a) Nothing third-party loads before the reader clicks, with one named
  exception: the poster image (`i.ytimg.com` for videos, the post's own `og:image` for blogs), lazily, hotlinked and
  never stored. A click loads the player from `youtube-nocookie.com` (no cookie domain, `enablejsapi` so the
  chapter and quote links seek the player) or the post in a sandboxed iframe without `allow-top-navigation`, so a
  frame-busting script cannot take the page. (b) Embeddability is probed, not assumed: the pipeline GETs each post
  once (`X-Frame-Options`, `Content-Security-Policy: frame-ancestors`, `og:*`, favicon, oEmbed discovery), reads
  only up to `</head>`, writes a `preview` block into the post frontmatter and re-probes after 30 days. A blog that
  refuses framing gets a source card with a "Read on <site>" primary action instead. (c) This does not change D08:
  the embedded content is served by the source's origin to the reader's browser; the repository stores URLs, image
  dimensions and a flag, and the probe never persists a body. (d) An author sets `embed: false` on their source to
  opt out of both the frame and the poster; the operator can force a host or an item off in
  `data/overrides/embeds.yaml`. The `.md` twins and `llms.txt` are unchanged: agents read the same pages as before,
  plus the preview URLs. (e) Phase 2 widens the one exception to list pages, on purpose: the video list and the
  weekly digests show YouTube's 320x180 still per video (`mqdefault.jpg`, about 10 KB, `loading="lazy"`, so a reader
  scrolling the 617 rows fetches the rows in view, not all of them), and source pages and the posts list show the
  blog's favicon or the channel's avatar (one URL per source, cached by the browser for every row). Both are
  hotlinked, never stored, and follow the same opt-out. The rest of phase 2 loads nothing before a click: a video
  evidence chip opens the player in a dialog at its second, the video stage gains a chapter rail and a mini-player,
  and a blog that refuses framing but serves WordPress's `/embed/` card shows that card in a frame without
  `allow-same-origin`. Channel avatars come from yt-dlp's channel metadata (`data/preview/channels.json`).
- **D61 Merged BCApps pull requests are observed as changes (spec `docs/specs/bcapps-pull-requests.md`, implemented
  2026-10-07 with every phase of its section 9).** D28 fixed the code pillar at one snapshot per major, so the observatory knows what differs between
  BC29 and BC30 but not what moved in BCApps this week or which objects a merge touched. A new pillar `change`
  (source kind `github-pr`, source `bcapps-prs`) discovers merged pull requests on the tracked branches through the
  GitHub REST list endpoint with an ETag and a per-branch cursor, one item per pull request keyed by its number,
  `input_hash` the merge commit (not `updated_at`, which moves on every later comment). Bots and backports are
  filtered from the list payload; build-, test-, translation- and docs-only pull requests are skipped at fetch;
  only pull requests that touch AL under the app folders get a Haiku facts pass (six per call) and a page under
  `content/changes/<repo>/<n>.md`. Changed files join to object pages by exact path against the base branch's
  snapshot (`data/code/<major>/files.json`), never by name; systems come from the joined objects' namespaces; a
  reverse index puts a "Recent changes" section on object pages; the digest, search index, graph and MCP
  `whats_new` carry the pages. The pull-request body is read for extraction and never stored: the public tree holds
  title, file paths and counts, a derived summary and at most one quote under 25 words (CONTENT-NOTICE, metadata
  only, D10). The nightly authenticates with the workflow token as step env (no new secret, D14); manual and
  backfill runs may set `BCOBS_GITHUB_TOKEN` from the Mini env file; a rate limit holds items and leaves the cursor
  instead of failing. Backfill three months. Built with the spec's later phases too: (a) open pull requests, the newest
  open issues and the releases per repository as lists (`data/changes/<repo>/activity.json`, the site's
  `/changes/upcoming/`, the changes `llms.txt`; no page until a pull request merges); the issues a change fixes get
  their title and state on its page. (b) The same kind for microsoft/AL-Go and microsoft/BCQuality (`al-go-prs`,
  `bcquality-prs`), whose source roots are listed in `paths`. (c) Changes are a third unit kind of the topic linker
  (link/topics.ts), so hubs list the code changes about them. (d) The pull-request source has a footprint page.
  (e) One Sonnet paragraph per week, "what moved in Microsoft's code", from the change pages only, in the digest;
  a text naming a pull request that is not that week's is rejected. Two findings changed the code: BCApps spells an
  app folder both `app/` and `App/` while the snapshot stores `app/`, so paths join without case; and the listing is
  sorted by update, so an old pull request with a fresh comment no longer stops it (the horizon is read on
  `updated_at`), and the first listing pages down to the horizon instead of ten pages.
- **D62 Older majors as diffs: BC23-27, with compact diffs.** The owner chose diffs back to 23 over full snapshots
  (2026-10-07). Base App is in BCApps only from 29, so 23-27 come from the sandbox history (w1-23 to w1-27), like 28,
  and are marked `diff_only`. Such a major's code job extracts W1 only (no countries, no apps), writes the full
  snapshot into the runner's cache (`<cache>/code-snapshots`, outside the repository) and a skeleton into data/: key,
  name, app, hash and obsolete state per object, which is exactly what the timelines read (1.8 MB for BC27, against
  38 MB for its full copy). `refreshCodeDerived` diffs consecutive majors through the cached full copies and
  computes the timelines over every major; the radar, the relations, the docs join and the object pages read full
  majors only, so an object that existed only before 28 gets no page from a skeleton. A lost cache leaves committed
  diffs untouched (logged), and a skeleton is never diffed. The timeline runs from the oldest major, as one row that
  scrolls sideways on a phone and opens at the newest. Measured on the real BC27: 9,193 objects, 23 s, 222 MB; the
  27→28 diff has 2,027 changed objects (254 added, 31 removed, +847 procedures, +481 events).
  That diff first came to 16 MB: BC28 added AutoFormatType to 12,424 fields, and a changed member was stored as a
  full before-and-after. A changed member now keeps its signature as `to` (what the country diff and the MCP need)
  and a `delta` of exactly what differs, property by property; and diffs are written as compact JSON with one object
  per line (still one JSON document, git diffs still per object). 27→28 is 5.6 MB, 28→29 2.9 → 1.2 MB, the country
  diffs 15 → 8.1 MB, so the five older transitions roughly pay for themselves. `DERIVED_VERSION` 6 rewrites every
  derived file once. At code_jobs 1 a night the extractor bump of D58 runs first (bcapps 29 and 30: DK and IN), then
  sandbox-history 23-28: the full history lands over about eight nights.
- **D63 Hybrid search in the MCP package, with static embeddings computed on the user's machine.** The owner chose the
  MCP package over a committed vector file (2026-10-07): nothing new in the repository, the site unchanged. No
  JavaScript port of model2vec exists, so `packages/mcp/src/embed.ts` implements it in about 120 lines of plain
  JavaScript (no native code, no ONNX, so `npx bc-observatory` stays light): BERT normalization and pre-tokenization,
  greedy WordPiece, the mean of the token rows, L2-normalized; like the reference, no special tokens, [UNK] dropped,
  512 tokens at most. Against Python model2vec 0.9.0 on `minishlab/potion-base-8M` (MIT) it gives the same token ids
  and vectors within 6e-8 on eight awkward cases (accents, a ligature, a 120-character word, an empty string,
  Japanese); the reference is committed and the comparison runs whenever `BC_OBSERVATORY_MODEL_DIR` names the model.
  The model (30 MB) is downloaded on the first search, pinned to revision bf8b0566 and checked by SHA-256 per file.
  Loading takes 20 ms and embedding all 22.7k pages 0.3 s, so page vectors are not cached at all: they are rebuilt
  with the index. `search` fuses MiniSearch's keyword ranking with cosine similarity by reciprocal rank (k = 60);
  `mode` picks keyword or semantic only. A local checkout downloads nothing unless a model directory is named, and
  without a model search stays keyword-only and says so. On the real index it fixes questions phrased as people ask
  them ("stock counting at the end of the year" → Phys. Inventory, Warehouse counting; "who is allowed to see what"
  → the permission sets) but does not reason: "predict incoming and outgoing money" still misses Cash Flow Forecast.
  Package 0.2.0; publishing it (the `publish-mcp` dispatch) is the owner's step.
- **D64 Evidence chips everywhere they belong, and the badge states nobody drew.** The design handoff left tier
  `mixed`, review `reviewed`, roadmap status and the evidence kinds video, post and roadmap undesigned; D42 had filled
  most colours with stand-ins, so the gaps that remained were behaviour. (a) `EvidenceChip.astro` is the one chip:
  always an `<a>` to the source itself (a video with a second links to that second), with `data-kind` and, for a
  second of a video, `data-t` — the hook agreed with the source-stage work (D60), which opens the player on
  `a[data-kind="video"][data-t]` and keeps the href as the fallback. A quote becomes the chip's text, so several
  chips on one video read differently; a code chip that points at a pull request reads "pull request #N" instead of
  a file path (D61's change pages); `blog` is labelled "post" while `data-kind` keeps the schema's word; a kind
  nobody styled yet gets a neutral tag instead of a broken one. The logic is a pure module with tests. (b) Feature
  pages list every source as chips: the roadmap entry, each video at its second, each Learn page. Video and post pages
  are left to D60's phase 1, which owns those templates. (c) A `flagged` page showed "unreviewed - machine-generated";
  it now reads "flagged - a review found a problem", amber, solid border: never red, never an icon. Statuses
  `announced` and `unclear` get plain words. New stand-in colours (guideline, other, flagged) pass AA on both themes
  (7.4:1 to 13.6:1, computed).
- **D65 Discovery: render the extracted explanations, join hubs to their objects, rank hubs by size, derive Related
  from structure, place first-party apps by the Learn branch that documents them.** The walkthrough "new to
  Subscription Billing, search 'subscription'" failed on four counts that were all joins or rendering: the field
  ToolTips the extractor stores (12,946 in W1 BC30) were never printed; the `ms.search.form` join in
  `docs-objects.json` was used by object pages but not by hubs, so hubs said "not yet joined"; tables, which Learn
  never names directly, inherited nothing from the pages on them; search scored a 47-page reviewed hub like a 5-page
  API index and below any codeunit whose summary held the word. Fixes, all deterministic (`docs/specs/discovery.md`, built in four tranches on 2026-10-07, sections 8.1 to 8.5 record the deviations):
  (a) Fields tables show Explanation (ToolTip, else a page control's ToolTip with the page named, else Caption) and
  structural Notes; the `Tooltip` spelling counts; `EXTRACTOR_VERSION` 4. (b) Hubs fill `links.objects` and
  `coverage.code` from `by_doc` and list their pages, reports and the tables behind them; tables take `links.learn`
  and `links.topics` from their pages; topic → object edges are `documents`. (c) Search records carry a path label,
  TOC words as tags, the object caption, member count and narrative state; the score adds `log2(members+1)` and a
  review bonus for hubs, demotes objects on generic queries, and the results page groups Start here / Roadmap /
  Videos / Posts / AL objects by app. (d) `data/links/related.json`, derived from the TOC, the object join, shared
  media and same-title-other-section, with a closed set of reasons, rendered as a Related block and `relates` edges;
  one page per first-party app. (e) `NS_SYSTEM` gains the first-party apps; `development` is for developer tooling
  only. (f) Page layout and actions are extracted (`controls`, `actions`), and a projection gives table fields the
  ToolTip of the control bound to them, Card before List, with the page as provenance: Subscription Billing
  fields explained 5% → 85%, W1 42% → 51% (first-party apps 6% → 22%; measured in spec section 8.5, 2026-10-07). No LLM call was added; the nightly's `llm_calls` is unchanged.
- **D66 The galaxy is one place with three views, and its layout says something.** The design pass of 2026-10-07
  (`design/HANDOFF.views.md`) makes D (galaxy, honest) the place, C (neighbourhood explorer) the object view and A
  (layered, Tilt) a later view of one system; spec `docs/specs/galaxy-views.md`, built in five phases. Phase 1
  replaces the hashed start positions and d3-force with a deterministic layout (`learn-tree+ns-treemap@1`): system
  order along the spiral from cross-system edge weight (code relations plus page links; a chain grown from the
  heaviest pair, Finance and Sales, one arm per end, Localizations and Sources at the arm ends because they touch
  every system), hubs on their Learn table-of-contents tree, every object in a namespace plot of its system with the
  most connected nearest the centre. Stars gain `cross` (up to 6 target systems with up to 3 named objects), `mb`
  (media bodies), `ob` (obsolete in), `ec` (published events); `ev` now also counts videos and posts that name an
  object; `data/graph/landed.json` holds the week up to the run date, so "this week" no longer depends on the
  reader's clock. The namespace treemap moved from the atlas into `pipeline/lib/treemap.ts`, and the move fixed a
  bug: rows after the first were sized against the shrinking rectangle, so the atlas never filled its own frame.
  Phase 2 draws it: tree guides and plots behind the stars, a focused star's in-system edges solid and its crossings
  as dashed edges to up to 6 port buttons (the panel lists the same), a lens bar (changed in BC29 and BC30, this week,
  then the rest), an exit dock of real links, a sortable list view, and a static locator above the panel below 480 px.
  Phase 3 is C, the neighbourhood explorer at `/neighbourhood/?o=&s=&mode=&v=`, fed by one file per system and major
  (`/code/neighbours/<major>/<system>.json`, every edge touching the system's objects plus a names table); those files
  replace the D59 per-type shards and the "2 hops" toggle, and object pages get a build-time one-hop diagram that
  links in. One query-string page, not a page per object: 20,744 more pages would add 300 to 400 MB to a 480 MB site
  (the GitHub Pages limit is 1 GB) for facts the object page and its markdown twin already carry. Phase 4 puts eight
  question entries above the galaxy as deep links (`#lens=landed`, `#lens=version:30`, `#system=..&tilt=1`, ...).
  Phase 5 is A as a Tilt of one system: four planes on D's x/y from `graph/layers/<system>.json`, a core sample per
  click, a country and a coverage lens per plane, a list per plane. At Finance's 2,021 objects the code plane was
  unreadable, so it shipped with the handoff's level-of-detail fallback: one tile per namespace plot with its count
  and Learn share, the stars on top, one plot opened at a time. Summary 50 to 97 KB gzipped; a tilted Finance adds
  19 KB, its explorer file 95 KB. Sizes, deviations and the light-theme notes: the spec's section 9.
- **D67 bc-code-atlas is the observatory's grounding partner: linked everywhere, run nowhere, and its call graph
  reproduced from our own checkouts (spec `docs/specs/code-atlas.md`, every phase built 2026-10-07; sections 7.1 and 7.2 record the deviations).** Stefan Maron's
  atlas serves what this repository must never hold (D10): procedure bodies, and a call graph read from them. The
  owner chose (2026-10-07) three things and declined two. Chosen: (a) the plugin registers the hosted atlas next to
  `bc-observatory`, and a `bc-grounding` skill fixes the division of labour (observatory for identity, versions,
  obsolete state, docs and changes; atlas for behaviour and bodies, w1-28 by default) and the etiquette on a
  one-person server (resolve, don't search; never `request_version` unasked; one or two calls per question; the
  nightly never calls it); (b) object pages carry an "Ask your agent" block built from type and name, and new
  "Calls", "Called by" and "Implements" sections from a nightly graphify-al run (the pinned fork, `uv tool`, per
  user) on the code pillar's own sparse checkouts at the snapshot commit: type-resolved cross-object `calls` (declared variable type or `Object::"Name"` argument) plus `implements`; the spec said "EXTRACTED only", but the pinned fork marks every cross-object call INFERRED and reserves EXTRACTED for intra-object calls, so that rule would have kept nothing: the kept set is `context: al_calls`, interface fan-out and AMBIGUOUS edges are dropped and counted,
  aggregated per object pair with procedure names and counts, joined by the AL header label and the file path
  (D29, D45), written compact to `data/code/graph/<major>/calls.json` under a schema with an allowlist and never
  into `relations.json`; one graph a night in a `cpu` lane with its own quota; (c) video and post pages join their
  mentioned objects through `data/index/objects.json`, offline. Declined: hosting the atlas's servers on the Mini
  (3 to 5 GB resident for a graph nobody in the pipeline reads; a go/no-go rule is recorded) and tool-enabled model
  calls (D68 when a measured need exists). Bulk through the hosted MCP was ruled out on arithmetic: 16k objects at
  1 to 7 s a call is a night of someone else's CPU for a corpus that is not ours.
  Measured the same evening (spec section 7): BCApps 29 with apps, 14,343 files, graphify 32.2 min at 5.14 GB peak,
  493 MB graph.json, 15,711 object edges kept; precision 30 of 31 Sales-Post call pairs confirmed by the hosted atlas.
  Time is two minutes over the 30-minute rule, memory and precision pass, so `callgraph.apps` stays true. A spike
  lesson: `launchctl submit` keeps a job alive, so a detached run restarted itself and deleted its own output; one-shot
  work on the Mini runs in a plain session.
- **D69 The item-loop leak: idle workers multiplied their own timers.** The nightlies of 2026-10-06 and 2026-10-07
  died on the heap with nothing between checkpoints to say why; run 37586529387 died seven times in a row. Its
  heartbeats (D59) showed one item in flight (`code/bcapps/29`, extracting) and the heap going from 70 MB to 8 GB in
  four minutes. Extraction itself peaks at 1.2 GB: run alone it finishes fine. The cause was in the executor: every
  idle worker's `idle()` set its own one-second fallback timer, a firing timer woke all idle workers, and each went
  idle again with a new timer while the older ones were still pending. With concurrency 6 and one long stage holding
  the only busy worker, the timer count grew about fivefold a second (a test counts 155 in 2.5 s on the old code).
  Introduced with the waiting workers of 2026-10-06 (13538840f). Now all idle workers share one fallback timer and
  a wake clears it; the same local nightly that died in 45 s finishes with a peak heap of 371 MB. Code extraction
  also runs in its own lane of one (`config/budget.json` lanes), kept as headroom: an earlier reading of the same
  heartbeats blamed three majors in parallel, which was wrong.
- **D70 The home page opens on the galaxy.** The hero (kicker, a display title repeating the wordmark, lede, six
  count boxes, Explore/Search/llms.txt buttons) and the grid of eight question cards took a full screen before the
  galaxy began, and "what is new" sat below it. Now the galaxy is the first thing on the home page and fills the
  viewport under the header (`--hdr-h`, measured from the header). The question entries (D66) are a "Questions"
  menu, the first item of the galaxy's lens bar, top left (`site/src/lib/questions.ts`, the `questions` prop of
  `Galaxy.astro`); on narrow screens its list opens as a sheet at the bottom. A first cut put the menu in the header of
  every page; it read better inside the galaxy, where the answers appear. The links carry the home path with a lens
  hash, so only the hash changes. A pill in the header, "N new this week", counts the videos
  and posts of `graph/landed.json` and opens the this-week lens; the lens chip counts the stars they light, which is
  why its number differs. The counts live on in the Sections cards, the lede moved to the "About, and for your agent"
  block, the Search button went (the header field is the one search; Ctrl+K stays the object finder, D46). The
  header row is wider than the page (1440px) so it fits one line on a 1440 screen; narrower, the search wraps.
- **D71 The this-week rings draw only under the this-week lens; the header pill leaves the home page.** The pulse
  rings for "landed this week" (D66) were always on: every hub a video or post of the week links to carried one,
  on every lens, at every level. On 2026-10-07 that was 99 hubs for 74 items, so the whole overview flashed and
  the rings pointed at nothing. Now the rings and their pulse draw only while `this week` is the active lens
  (`landedRingsOn` in `galaxy-core.ts`, gating both the draw and the animation loop), at every level; the lens
  chip, the questions menu and the header pill all set that lens through `#lens=landed`. Idle, the hubs are plain
  stars. The accent colour of the week's media bodies beside the hubs (system and star levels) stays: it colours a
  thing that is already drawn, and the panel's "Landed in" rows point at it. The home page showed the control
  twice, D70's pill "74 new this week" in the header and "this week 99" in the lens bar, with two numbers (items
  versus stars). The chip keeps the star count, like every other lens chip; the panel heading bridges the two
  ("74 videos and posts landed"). The pill now renders on every page except the home page (`section="home"`),
  where the chip is the one control. Spec: `docs/specs/this-week-lens.md`.
- **D72 One version pill in the lens bar.** The galaxy offers the version lens as one control: a pill for the
  remembered major (newest by default; a deep link, the menu or a question entry sets it; memory only, no
  `localStorage`) and a menu of every major the graph has changes for, with the count each would light, labelled
  from `config/versions.json` (`data-majors`, built from `majors()`; `versionMenu` in `galaxy-core.ts`). One version
  at a time, same lens ids and deep links. The menu's `details` is rendered in `Galaxy.astro`, so the layout's
  `details.ask` wiring (Esc, outside click) covers it unchanged. The Objects atlas derives its `changed:<v>` lenses
  (every major after the oldest, where nothing "changes") and its "Introduced" filter from the same config; old
  `?lens=changed29` links map to `changed:29`. Version lists are printed as collapsed runs ("BC24-26, BC28") by one
  helper, `pipeline/lib/versions.ts` `versionRanges`, in pages, panel, list view and markdown; a gap is never
  bridged. Rejected: a segmented control (still seven targets), two pills plus the select (hides four majors),
  "since" ranges or unions (changes the one-lens model; later), `localStorage` (a different home page per reader).
  Spec: `docs/specs/version-lens.md`.
- **D73 Media rows: the title over the full width, then a kind pill, the source and the date.** Every video and post
  row in the galaxy panel (the "Landed in" lists, a star's "Videos and posts", the layered view's media) put a mono
  column on the right (`post · date · N stars`) that took a third of the row and squeezed long titles to six lines,
  and it never said who wrote the item. A row is now two lines: the title beside the shape icon over the full width,
  then `[video|post] · source · date` in the same mono 11px; unknown parts are left out with their separator
  (`mediaMeta` in `galaxy-core.ts`). The star count is gone: it counted hubs the reader could not act on. The source
  is plain text (the row is already one link) and its name is the source node's label, never the raw id. The bare
  source id travels as an optional last tuple element in `graph/landed.json`, the summary's `mb.top` and the layers
  files' `media`, from one map built on the "authored" edges (`mediaSources` in `graph.ts`); it is omitted, never
  null, when unknown, so older files still render. The summary grows about 1.3%. Spec: `docs/specs/media-rows.md`.
- **D74 Table columns keep their words.** Table cells wrap with `overflow-wrap: break-word`, never `anywhere`:
  `anywhere` lowers a column's min-content width to one character and lets the auto layout crush short columns.
  Markdown tables on the site are wrapped in `div.table-scroll` (the scroll container, `wrapTables` in
  `site/src/lib/links.ts`) and stay real tables, so they fill the width. Pills never wrap. A generated table leaves
  out a column that is empty on every row (first case: the video Features table's Evidence). Rejected:
  `table-layout: fixed` with per-shape widths, `nowrap` on short columns, no `overflow-wrap` at all, hiding empty
  cells with `:empty`, dropping Evidence on every video page. Spec: `docs/specs/table-columns.md`.
- **D75 The observatory shows what it holds before it points elsewhere.** Object pages carry the D67 call sections
  (Calls, Called by, Implements, Implemented by) from our own graph; the "Ask your agent" block is one closing
  paragraph, the last section of every object page, that sends agents to bc-code-atlas only for procedure bodies and
  per-procedure edges, which we do not store (D10) or aggregate away (D67 decision 4). It names the page's major
  ("from the BC29 call graph") when the page has a call section; the "full call graph" clause and the CLI line are
  gone. No fallback to another major's graph: a page reads the graph of its own major, and an object new in BC30 gets
  edges when the BC30 graph lands. `bc-grounding` routes object-level callers to the observatory (plugin 0.2.1).
  Rejected: a fallback graph (the 145 BC30-only pages are in no older graph), caching atlas answers (D10, D67
  decision 1), removing the block, keeping the CLI line. Spec: `docs/specs/atlas-on-pages.md`.
- **D76 The site's size is measured as uploaded, repeated bytes are removed before content is, and leaving GitHub
  Pages is a measured trigger.** On 2026-10-07 the Pages check refused a deploy at `du -sm` 903 MB; `du` counts disk
  blocks, 12% over the real bytes of 59,000 small files. The check now computes the GNU tar
  `upload-pages-artifact` uploads (`scripts/site-size.ts`: headers, blocks, long names, directories; equal to a real
  tar to the byte), writes tar, apparent bytes, files, headroom and the ten largest sections to the run summary,
  warns from 800 MB and fails from 900 MB (MB = 2^20). Components on every object page style under their root class
  with `is:global` (D53's rule): the version timeline, Related and the locator no longer put a `data-astro-cid-*`
  attribute on each element, and four more repeats went with no visible change (Neighbourhood's HTML comment, the
  timeline's own module tag, one script for the locator and the video dialog, `CountryDiff` global). Same local
  build: tar 698.6 → 656.7 MB, HTML 424.9 → 382.8 MB, scoped attributes on an object page 94 → 0. Markdown twins stay
  on the site (D02) until tar bytes pass 850 MB; then the object twins (about 120 MB, 25,600 files) are served from
  `raw.githubusercontent.com` at the build's commit. Past 900 MB after that, the site moves host (Cloudflare Pages
  paid, or object storage behind a CDN). Rejected: raising the budget toward 1 GB, `scopedStyleStrategy: "class"`,
  moving the twins or the host now. Spec: `docs/specs/site-size.md`.
- **D77 A page's review state says what kind of text it holds.** `derived` is a fourth `review.state` for pages whose
  text is all deterministic: object, app, source, feature pages, and hub and localization pages without a narrative. Its
  badge reads "derived - from the source, no model text". Every page type that holds model text gets an Opus review
  pass tied to the input hash of the text (D21): all videos (no longer only flagged ones), posts and code changes in
  batches, localization and digest narratives one by one; hubs, roadmap coverage and topic links keep their reviews.
  Edits pass the first pass's validators, a rejection withholds the model text and marks the page `flagged`. The backlog
  is reviewed in unlimited runs; quotas then bound a normal night. Cost measured at $0.079 per Opus call (18 calls,
  2026-10-06/07); estimated about $120 for the backlog. Built 2026-10-08 in two parts (spec sections 12a and 12b): the `derived` state on 25,853 pages, every video through `reviewed` (quota `video_reviews`), posts and changes in a `content-reviews` phase (`post_reviews`, `change_reviews`), localization and digest narratives on `opus_reviews`; the backlog runs in the first unlimited nightly.
- **D78 A panel list row always has its three parts, and the grid survives one that does not.** Panel rows are a
  marker, a label and a count; the lens picker (`#lens=pick:localization|source`) gets all three: the localization
  dot or the source's kind (youtube a triangle, blog a bar, else a dot) and the number of stars the lens lights,
  highest first. The row grid switches to two columns (`minmax(0, 1fr) auto`) when a row has no `.g-dot`/`.g-shape`
  (`:has()`), so a label is never placed in the 10 px marker column. `scripts/ui-sweep.mjs` (Playwright, not in CI)
  sweeps 15 panel states at 1440 and 390 px and fails on a squeezed label: 108 before, 0 after. Rejected: only the
  markers (leaves the trap), only the CSS fallback (the picker stays the one list without markers or counts),
  `grid-template-areas` on 23 templates. Spec: `docs/specs/panel-lists.md`.
- **D79 Roadmap links are printed by title.** A link to a roadmap feature page shows the feature's title, never its
  bare roadmap id. Lists add the area and the status, because a roadmap title often only makes sense within its
  area. The id stays in the link target and in the frontmatter. Source pages list the features they demonstrate most
  often first. Deterministic: the titles come from the feature pages and the roadmap snapshot the renderers already
  read. Rejected: title only on source pages, grouping the source list by area with H3s, source pages only, loading
  `latestRoadmap` in the source renderer. Spec: `docs/specs/roadmap-link-titles.md`.
- **D80 This week includes Microsoft's code, behind kind pills.** The this-week lens and the header pill counted only
  videos and posts (D66, D70, D73); the week's merged pull requests (82 change pages on 2026-10-08, 1,083 in all) were
  reachable only through a breadcrumb. `data/graph/landed.json` gains a `changes` array next to `items`: one tuple per
  change page merged in the window (`landedChanges` in `graph.ts`), with the summary stars it touches by id (its
  topics, its objects in the summary, the app star that `implements` each object, and the hubs whose pages list it),
  its kind, system, breaking flag and backport majors. The lens gets three pills, Videos, Posts and Code, all on by
  default; a pill filters the panel list and the lit stars, the last pill never turns off, and the state is `kinds=`
  in the hash (left out when all are on; `parseKinds`, `kindsParam`, `toggleKind` in `galaxy-core.ts`). The code list
  is grouped by `change_kind`, not `behavior_change` (65 of 82 carry it): Breaking, Features, Fixes, Other, then
  Tooling for AL-Go and BCQuality (`codeGroup`); Breaking and Features open, the reader's choice kept in
  `localStorage`. The header pill splits into "N new" and "M PRs", each a deep link with its pills; "code changes"
  wrapped the header at 1440 px. "Changes" joins the top nav, and `/changes/week/` lists the same week. Code lights
  only stars that already exist: 76 of 82 changes touch one (116 stars; 130 with the media hubs). Amends D70 (the
  pill), D71 (the rings also mark code stars under the lens) and D73 (a code row follows the media-row layout).
  Rejected: a separate "MS pull requests" chapter without filters (two controls for one job), changes inside `items`
  (old readers assume `v` or `p`), a mark on each system that has changes (new drawing code; later), list-only code
  (the map and the list would disagree), grouping by `behavior_change`, a backport subgroup (4 pages; backports show
  as "also in 29.x"), one combined count in the header (the media count drowns), media-only default pills (the
  problem stays). Spec: `docs/specs/week-code-changes.md`.
