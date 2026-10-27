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
- **D81 Derived data follows the code within the hour, not the night.** The render block of the nightly (digests,
  sources and coverage, search and objects indexes, the graph) is deterministic and runs on committed content. Until
  now it ran only in a full run inside the night window (D41), so a change to what it writes (D79's titles, D80's
  `changes` in `landed.json`) waited up to a day, and the galaxy read the old file as "Code 0". A third orchestrator
  stage, `derive`, runs that block alone (`renderDerived`, shared with the full run): no guard, no ingest, no item
  loop, no LLM, no run report. It commits `content: derive <date> (<sha>)` through the same leak gate and
  `commitTracked` as the nightly, and exits non-zero on any error. `nightly.yml` runs it on a push to main that
  touches `pipeline/link/**`, `pipeline/render/**`, `pipeline/lib/**`, `schemas/**` or `config/**`, and on
  `workflow_dispatch`, in the same concurrency group, so it queues behind a live nightly and never runs beside one. It
  ignores the night window because it spends nothing. Its commit touches only `content/` and `data/`, outside the
  trigger paths, so it cannot trigger itself. `run-nightly.sh` never restarts a derive on memory (the newest run
  report is the nightly's) and the run summary prints a derive line instead of that report. The galaxy treats a
  `landed.json` without `changes` as "not computed yet": Videos and Posts pills only, no "Code 0"; `/changes/week/`
  says the list is computed by the pipeline. Measured on 2026-10-08: a derive takes about 7 s on the Mac and rewrites
  `landed.json` (82 changes) and 6 source pages. Rejected: rendering the graph in the Pages build (two truths: the
  site would differ from the committed `data/` that agents and the MCP read), a manual-only stage (it was needed on
  the day it shipped and nobody ran it), letting the 06/12/18 crons run full outside catch-up (budget and ingest for a
  render problem), a post-push ubuntu job that commits (a second committer racing the Mini's checkpoints), keeping
  "Code 0" for missing data. Spec: `docs/specs/derive-on-push.md`.
- **D82 The changes list filters by repository, with the galaxy's pills.** The changes index listed every change
  page of the three repositories in one list (1,083 rows on 2026-10-08: BCApps 965, AL-Go 28, BCQuality 90) and no
  row said which repository it came from. The page gets three pills, BCApps, AL-Go and BCQuality, each with its
  count, with the semantics of the this-week pills (D80): all on by default, each one toggles, the last one never
  turns off, a pill with nothing behind it is disabled only while off. The state is `?repo=bcapps,al-go` in the
  query string (commas kept readable), left out when all three are on, and a link whose repositories have no page
  falls back to all three. A count line reads `N of M shown` while filtered; the kind counts follow the shown rows.
  The D80 helpers move into `site/src/scripts/pills-core.ts` as generic functions over any pill set (`parsePills`,
  `pillsParam`, `togglePill`, `usablePills`, `pillDisabled`); `galaxy-core.ts` keeps its names as wrappers and its
  tests, and D81's galaxy pills use the generic ones over a two- or three-pill set. The pill style is the global
  `.pills` and `.pill-btn` in `site.css` (D53: no scoped style on a 1,083-row page). Deterministic, browser-side,
  no page in `content/` or `data/` changes. Rejected: a radio row with an All pill (a second pill pattern next to
  D80's), one index page per repository (three more pages and 1,083 more rows in the tar, D53 and D76), the state in
  the hash (list pages keep theirs in the query: events, atlas, search), kind pills and deep links from the Upcoming
  page and the change page breadcrumb (later), hiding the pills without JavaScript (an inert pressed pill tells the
  truth). Spec: `docs/specs/changes-repo-pills.md`.
- **D83 The site explains itself on one page, in the owner's voice.** `/about/` is the tenth nav entry and the target
  of the wordmark's "unofficial, made by waldo"; it holds the owner's first-person Who and Why, the pipeline drawn as a
  telescope and the galaxy key as a picture (both inline SVG on the design tokens, a stacked variant under 1000 px),
  seven "for who" cards pairing a real question with the page that answers it, the install commands under `#agents`,
  live counts and the housekeeping lines. The prose is one hand-written file, `site/src/about/about.md` (the `about`
  collection), rendered by the page and served as `/about.md`; never under `content/`, no tier or review badge, a
  byline that says the owner wrote it; `tests/unit/about.test.ts` pins the owner's corrections (no Hodor, no ALOps).
  The home page's About section is a pointer; the footer links "MCP server" and "Claude Code plugin" to `#agents`;
  `llms.txt` lists About first under "Start here". Rejected: a photo; the text under `content/`; strings in the Astro
  page; About in the footer only; a model-written bio; commands in the footer; hard-coded counts; `Page.astro`.
  Spec: `docs/specs/about-page.md`.
- **D84 The MCP server has its own page and nav entry.** The owner's call on 2026-10-08, after D83 put the install
  commands on the About page: "a separate MCP menu on top, where you explain what you can do with the MCP, and how to
  install it; first MCP, then About". `/mcp/` (`site/src/pages/mcp/index.astro`, twin `/mcp.md`, data in
  `site/src/lib/mcp.ts`) holds seven example asks with the tool each reaches for, the nine tools with what they do and
  an example call, the plugin's four skills and the bc-code-atlas connection, install steps for Claude Code (plugin or
  server only), Claude Desktop / Cursor / Windsurf (`mcpServers` JSON), VS Code (`.vscode/mcp.json`, `servers`), a
  checkout (`BC_OBSERVATORY_LOCAL`) and no install at all, and how it answers (index over HTTPS, daily cache, local
  embeddings, nothing sent). Versions come from `packages/mcp/package.json` and `plugin/.claude-plugin/plugin.json`
  at build time; `tests/unit/mcp.test.ts` pins the tool list to the server's `registerTool` calls, the skill list to
  `plugin/skills/`, the atlas URL to `plugin/.mcp.json` and the commands to the README. The nav is eleven entries,
  "MCP" before "About"; to keep one header row at 1440 px the nav says "Objects" and "Countries" for the AL objects
  and Localizations sections (titles unchanged) and its gap is 12 px. About's "For your agent" keeps the two Claude
  Code commands and points to `/mcp/`; the footer's "MCP server" and "Claude Code plugin" link there; `llms.txt`
  lists MCP under "Start here". Rejected: install steps on About only (the owner wants them findable from the top);
  reading tool descriptions from the server package at build time (zod schemas in the site build; a test that pins
  the list is enough); a client-by-client table (five code blocks read better than one table of JSON). Not a spec:
  one page, one data file, no pipeline.
- **D85 The observatory watches the AL Language extension changelog, one page per extension version.** The
  marketplace page `items/ms-dynamics-smb.al/changelog` is a shell that shows the changelog of the highest version
  number; the gallery API (`extensionquery`, POST, no key) lists every upload with its date, its pre-release flag and
  an immutable changelog asset. The nightly asks it once for the full upload list (the latest-only flags answer with
  the highest version, which hides a newer stable upload), reads the newest stable and the newest pre-release asset
  only when either moved, parses the `## Version x.y` sections (62 on 2026-10-08, the three "9.3 Update n" sections
  included), merges the two tracks per version (the later upload's order and bodies win) and keeps one manifest item,
  one page (`content/releases/al-<version>.md`) and one search record per version. Snapshots and diffs
  (`data/releases/al/`) are written only on change, like the roadmap; the diff names the entries added, changed or
  removed per version, and the page lists them under "What changed on this page", so the growth of an open version's
  section is visible by date. Dates come from the gallery's uploads (first pre-release upload, first stable upload);
  a version with no upload left in the gallery (13 of 62) has no date and never shows in `whats_new`. The BC major
  comes from the wave H1 matched against `config/versions.json` labels. Microsoft's text is stored verbatim (official
  tier, full text, like Learn), review state `derived`, no model call. Readers find the pages at `/releases/` from a
  home card and the Changes index's lede (a twelfth nav entry wrapped the header to 121 px at 1440), in the weekly
  digest's Releases block and through `whats_new`. Rejected: scraping the HTML page (it shows one track); one page per
  changelog heading (unstable ids: Microsoft renames headings); a page per upload (185, mostly identical); the
  this-week lens and header pill (D80; a source that moves twice a month); a Haiku pass linking entries to hubs and
  objects (a later spec); the pre-4.0 monthly updates (no version sections, 90 KB, 2016 to 2019). Spec:
  `docs/specs/al-extension-changelog.md`. The snapshots, the release pages and the parser's test fixture
  (`tests/fixtures/al-changelog.md`, a verbatim copy of the changelog) are official-only output for the leak scan
  (`OFFICIAL_ONLY` in `pipeline/validate/leak.ts`). The fixture joined on 2026-10-20 (issue 19): a community post
  re-fetched that night quotes the changelog's release notes, and the shared 25 words blocked three runs in a row.
- **D86 One deterministic scorer, a symbols index, lazy hashed shards.** Site and MCP rank with the same code:
  `packages/search` (private workspace package, zero dependencies) parses the query (`t36`, `cu 80`, `table 36
  BE`, bare numbers as ids, `field:`/`event:`/`proc:` prefixes, `bc30`, country codes, quoted phrases, plurals, one
  typo from five letters, a committed synonym list) and scores page and symbol records with the D65 rules plus a
  layer order (base app, first-party app, country) and an importance signal (an object's references, callers,
  pages, subscribers and Learn pages, log-normalised per type). The MCP pins the exact band on top and fuses the
  rest with the D63 meaning ranking; MiniSearch goes. A symbols index (fields, events, global procedures, enum
  values of the pages' major, W1 and apps, tuple rows in content-hashed files) makes `OnAfterPostSalesDoc` and
  `Posting Date` answerable; object pages get per-member anchors at site build. Page shards are split by kind
  (hubs, media, objects) under content-hashed names; the site keeps them in Cache Storage and loads objects and
  symbols only when the query asks. Deterministic did-you-mean hints. Amends D13 (no Pagefind: the site searches its
  own index) and D35/D63 (no MiniSearch). Rejected: Pagefind (its BM25 replaces ours and body text of 25k templated
  object pages is noise), vectors on the site (9 MB), LLM query rewriting, appending meaning hits after every
  keyword hit (buries D63's paraphrase wins), a bare number as a version, a published search package. Built with
  these refinements (spec section 13): a caption equal to the query scores but lifts no demotion and pins nothing;
  app pages rank with the narrative rule as "none"; symbols are demoted on a generic query like objects and only an
  event-shaped word lifts them; a demoted hit stays out of the exact band. Spec: `docs/specs/search.md`.
- **D87 The galaxy says what a star is and what the canvas draws.** Two of the ten navigation suggestions of
  2026-10-08 (the owner's "clicking a star confuses me"). (2) The key under the canvas (`.g-legend`) was hidden on the
  galaxy level and always listed six marks, two of which (video and post bodies, cross-system edges) are not drawn
  until a system or a star is in view. It now shows on every level except a phone or a tilt, and lists only what that
  level draws: hub and AL object and the community ring at level 1, the media bodies from level 2, the dashed cross
  edge at level 3, the gold ring only under the this-week lens (`legendItems` in `galaxy-core.ts`, tested). (4) The
  galaxy panel says what a star is, once, from the summary's own counts (`starIntro`: 605 Learn hubs, 96 first-party
  apps, 80 roadmap features, 22 countries, 32 sources and the 300 most connected AL objects on 2026-10-08) and that
  videos and posts are not stars. The galaxy panel is closed by default on a wide screen, so it opens until the reader presses "Got it", which hides
  the paragraph (`localStorage` `bcobs-galaxy-intro`) and lets the panel close as before; "What is a star?" in the
  panel brings it back. Rejected: a modal or first-visit tour (the panel is the place that already explains the
  level); hard-coding the type counts (the summary changes nightly); a legend entry for the code diamond (a panel
  marker, never drawn on the canvas). Not a spec: two self-contained site changes, no pipeline, no new data.
- **D88 Bytes first: the UX work pays its own way on the Pages tar.** The owner asked on 2026-10-12 to do all 35
  proposals of `docs/research/2026-10-12-ux-review.md` within the storage limit, which is D76's Pages tar (744.2 MB
  that morning, warning from 800 MB; a 132-item night adds 13 MB). The rule for every proposal: nothing may add bytes
  to object pages. What can be built in the browser from the markup already on the page is built there (the shared
  bundle grows once, 25,666 pages do not); static additions go on single pages only; the reductions ship first and
  fund the rest. Batch 1 (M26, no spec): the video dialog's 371 bytes are built on the first video chip click
  (`stageDialogElement` in `source-stage.ts`) instead of shipped on 28,850 pages; the footer's seven instrument links
  become one link to an Instruments section on `/objects/` (A4, the home strip follows in batch 2); the header drops
  the `title` attributes that repeated an `aria-label`, the 110-character pill title and 21 placeholder characters,
  says "new this week" in every state (A5), and gets the finder's platform label and the theme word from `chrome.ts`
  and `site.css` (A6); the inline theme script is minified; the provenance block is a closed `details` without the
  64-character hash title (B7); the version timeline folds quiet majors into ranges, "BC23-25 present", and drops the
  per-major wave title (B5, `timelineCols`, tested); a member's change pills are one span with one title, "Δ BC25 Δ
  BC26" (B3, `markMembers`, tested); stat tiles are one line of chips under 600 px (B4); the search page hides empty
  tabs and the markdown path under every hit (F2, F3); digest summaries pluralise (F1); the home page loses the
  six-line help paragraph for a "?" shortcut sheet in the galaxy tools (D2); the lens bar wraps on a phone (D4) and the
  phone's system list is a closed details (D5); a video Features table says a status once when every row shares it
  (E2; the nightly's re-render rewrites those pages, no LLM). Measured on the same content, local build: 744.2 to
  695.3 MB tar, objects 501.3 to 455.2 MB, 59,135 files unchanged; Enum 89 "Gen. Journal Template Type" 13.4 to 11.6 KB,
  Table 18 "Customer" 153.5 to 150.6 KB (it changed in every major, so its timeline folds nothing). Rejected: a
  static "On this page" list (about 600 bytes on 25,666 pages, 15 MB; B1 builds it in the browser, batch 2); dropping
  the markdown twins' `<link rel="alternate">` (agents use it); a `<base href>` to shorten 18 MB of base-path prefixes
  (it breaks every in-page `#` anchor). Batches 2 and 3 of the review are specs, written with `bcobs-spec`.
- **D93 Long pages come back compact, and the MCP server slices them, not the site.** `get_object`, `cat` and
  `localization` return a page verbatim when it fits 30,000 characters (`BC_OBSERVATORY_MAX_CHARS`, 0 = no limit),
  else a compact view: the frontmatter without `generated` and with each block list cut to its first 600 characters
  (at least 3 items), the title block, one line with every section key and its row count, the first 5 rows of each
  section (200 characters a row) and one `→ n more of m: cat(path, section, offset)` line per cut section. `section`,
  `offset` and `limit` read one section by rows (a table row, or a list item with its indented lines), never more than
  the budget per answer; `frontmatter` is a section; a symbol path (`objects/codeunit/80#event-OnAfterPostSalesDoc`)
  returns that member's row. Keys are fixed for the 25 object-page headings (`events`, `subscriptions`, `calls`,
  `called_by`, `changes`, `versions`, `countries`, `learn`, ...) and the snake_case heading elsewhere; the slicer is
  `packages/mcp/src/sections.ts`. Why: Claude Code saves a result over 50,000 characters to a file and warns above
  10,000 tokens; 56 pages were over 50,000 and 233 over 30,000 on 2026-10-12, Codeunit 80 "Sales-Post" 177,746 (compact
  9,504), Table 36 "Sales Header" 182,895 (compact 14,800, the largest object). Built: the largest compact view is
  15,741 (`releases/al-18.0`, median 9,058), the largest slice 29,845, the longest section 11 calls, and 123,126 of
  123,210 symbol paths resolve to their row (1,382 characters for `OnAfterPostSalesDoc` instead of the page). The server
  already reads the markdown twins (`pageMarkdown` in `server.ts`), so the Pages tar gains nothing. Tool descriptions
  keep call forms, filters and values and lose the scoring formula (3,095 to 2,465 characters, 3,066 with the section
  sentences). `bc-observatory@0.4.0` (the 233 answers change shape, a minor bump under 0.x), plugin 0.2.3. Rejected: a
  compact view for every page (changes 28,617 answers that fit today), 20 preview rows (Table 39 at 30,927, three pages
  over the budget), `_meta["anthropic/maxResultSizeChars"]` (raises Claude Code's file threshold to 500,000, not the
  tokens), section files on the site (bytes and files on the tar, D76, D88), a `get_section` tool (a tenth tool for
  what three parameters do), JSON output (agents read the markdown; the page is the contract). Spec:
  `docs/specs/mcp-sections.md` (section 12: what was built and where it differs).
- **D89 Object pages read like a reference, built in the browser from the markup they already ship.** Items B1, B2,
  B3 (the rest of it), B6 and B8 of the 2026-10-12 UX review, under D88's rule that no object page gains a byte. One
  module (`site/src/scripts/object-page.ts`, pure helpers in `object-page-core.ts`, tested), mounted from the
  existing module script of `Page.astro` on pages with a version timeline, CSS in `site.css` and
  `Neighbourhood.astro`: (1) an "On this page" list of the main column's sections with what each lists, sticky at the
  end of a flex side column (a grid item cannot stick past its grid area), a closed details under the actions on a
  narrow screen, and a back-to-top button; (2) member sections of 12 rows or more get a filter, an order where it
  means something and a compact one-line mode, on by default; (3) "Changed in" chips per member section, single-select
  like the version pill (D72), linked to `code/versions/<from>__<to>/` and set from the timeline's changed majors,
  while the member pill loses its `title` from the HTML and gets it back from the script; (4) the neighbourhood
  captions its nodes by name, explains its marks in a CSS line, lights a kind from its legend entry and shows the
  explorer link as the section's action, with a shorter closing paragraph; (5) an "Ask your agent" button opens the
  closing paragraph's calls with copy buttons and a prompt; the paragraph stays (D75). A hash naming a member row
  (D86) clears what hides it, opens it and scrolls to it, on load, on `hashchange` and on `popstate` (a finder hit on
  the hash already in the URL fires no `hashchange`). Measured on the 2026-10-12 content: object HTML 3.34 MB smaller
  (3,501,622 B, as the spec computed), no page larger, Page module +12.7 KB once (3,313 to 16,273 B), CSS +3.2 KB, tar
  695.3 to 692.1 MB; Table 18 "Customer" 154.5 to 150.4 KB and its Fields 23,138 to 7,833 px tall, Codeunit 80's
  Events published 46,041 to 14,973 px. Rejected: tabs over the members (one table and two lists in different places;
  they hide members from find and anchors); a static section list (15 MB); a "Changed in" column; dropping "BC" from
  the pill text; hover-expanded captions; seven dash patterns; a filled primary explorer button; a positioned popover;
  a lazy chunk; a pre-paint class (1.1 MB); filter state in the URL (later). Spec: `docs/specs/object-page-reading.md`.
- **D94 Search finds Learn articles by what they document.** On 2026-10-12 `includeSourceInSymbolFile` found nothing,
  although Learn documents it: Learn articles are evidence rows of the hubs, not pages, so no search record held them,
  and identifiers live in Learn's code spans, which nothing kept. The fetched stage now records `meta.identifiers`:
  single-backtick spans holding one camelCase or PascalCase word, outside code fences, first spelling once, at most 40
  per page (p99 is 8; only a font list passes 40). The 8,050 items fetched before that get them from a phase of the
  full nightly that reads each item's fetched blob from its mirror (`backfillIdentifiers`): no stage re-runs, no LLM,
  no quota, no page rewritten. The index writer adds one shard, `learn-<sha12>.json`: a row per fetched Learn article
  (URL under one base, title, the extraction's summary else Learn's description, ms.date, the hub that lists it or its
  reference section, a system of its own, the identifiers), listed under `learn` in the index manifest, not under
  `shards`, so readers of page records and MCP releases before D94 never see it. In `packages/search` a Learn record
  is a page of type `learn`, tier official, whose id is its URL (`hrefOf` returns it); its identifier tags also meet
  their CamelCase words; nothing else in the scorer changes and the golden set holds. The site shows a "Learn
  articles" group after "Start here" and loads the shard with the first query; the MCP returns `type learn` hits with
  the url and the hub. Cost: 2.0 MB on the Pages tar (695.3 to 697.3 MB, same content), no page grows. Rejected:
  indexing Learn body text (D01: Learn stays canonical; the index would carry its prose), pages of our own per article
  (8,050 pages for what Learn already serves), folding a version into the fetched stage's input hash (every item would
  go stale and re-enter extraction, an LLM stage), PageRecord objects in the shard (3.7 MB), listing the shard
  under `shards` (MCP 0.3.0 spreads every shard as page records and would fail), splitting CamelCase in every record's
  tags (hub tags are TOC titles; their rankings would move). Spec: `docs/specs/learn-search.md`. The shard is
  official-only output for the leak scan (`OFFICIAL_ONLY` in `pipeline/validate/leak.ts`, as D85 did for release
  pages) and keeps official items only: its first derive (run 38253780457) was blocked because "AVS Error AVS0109"
  followed by Learn's own description shares 25 words with a community post that quotes the same error.
- **D91 Lists load in pages and filter by what they hold; weeks and sources are cards; the post card makes room.** The
  changes, videos and posts indexes shipped every row in one file (595,523, 621,491 and 275,632 bytes on 2026-10-12,
  2,300 rows; every new item added its row for good) and only the changes list had a filter (D82). Each now renders its
  newest 50 rows and, in a closed "by title" list, a link to every other page (299 media pages had no other static
  link: 183 videos, 108 posts, 8 changes); "Show 100 more" and every filter render the rows in the browser from the
  search index's media shard (D86), which every page can already load and which stays in Cache Storage; nothing is
  fetched until the reader acts. The media records gain what the rows print: a change's branch, major, object count and
  breaking and community flags, a video's review state and poster opt-out (+58,233 bytes); the scorer does not read
  them. Filters are pills whose counts follow the other filters: Repository, Kind, "breaking only" (the flag or the
  kind, D80's rule) and Major on changes; Channel or Blog and Year on videos and posts; Wave, Status and Area on
  features, whose tracker cells link into them. On list pages a click from "all on" keeps only that pill and later
  clicks toggle (`pickPill`), which amends D82's click rule there; the galaxy keeps D80's. A facet with more than eight
  values or 120 characters of labels sits in a closed details. Weekly digests are cards with the week's numbers and the
  radar, the running week (by the build date) marked "in progress"; sources are cards with icon, kind, tier, count, top
  three systems and their newest item, and a source page names its kind with the same words (the AL Language
  extension's says "changelog" and "63 releases", not "blog" and "posts"). The post stage's card puts its image in a
  200 px column beside the text and drops it under 600 px, CSS only: "Key points" moves from 1,080 to 814 px at 1280 x
  900. The review's "70vh iframe first" was wrong: the card has come first since D60. Measured on the 2026-10-12 build:
  the three lists 1,492,646 to 375,715 bytes (gzip 265,413 to 98,841), the media shard +58,233, the other index pages
  +35,113, the shared stylesheet +1,144, JavaScript +8,376; no object, video or post page changed size; tar 695.3 to
  694.4 MB (-1,013,760 bytes), files +2; a new item adds a 100 to 130 byte title line to its list instead of a full
  row. Rejected: paginated static pages (45 more files and about +0.24 MB, and filters would still need the shard), a
  rows JSON per list (+0.77 MB in three files), a media shard per type (a lighter "Show more", two more files and a
  manifest field; later), reading branch and major from the tags (ties the list to the tag order of `change.ts`), D82's
  toggle on long facets (20 clicks to see one of 21 blogs), a select for long facets (a second control shape), the
  running week from `generated.at` (an unchanged re-render keeps the old date), the post stage below the key points
  (the compact card is enough at 1280). Spec: `docs/specs/lists-and-media.md`.
- **D90 Wayfinding: one name per section, crumbs that follow the sections, a header that fits, instruments with
  numbers.** Items A1 to A4, D1, F5 and F6 of the 2026-10-12 UX review, under D88's byte rule. One map,
  `pipeline/lib/sections.ts`, names each section and instrument once, and the nav, crumbs, eyebrows, page titles, h1
  nouns, home cards, About's counts, the search groups and both kinds of `llms.txt` read it; the nav says AL objects,
  Localizations, Code changes, Weekly digests (reverses D84's short labels). Crumbs follow the section tree
  (`site/src/lib/crumbs.ts`); the galaxy system is a chip in the identity row, linked into the galaxy, except where
  the system is the section (localization and source pages link their section index again). Instrument pages sit
  under Galaxy / Instruments. Under 900 px the header is a 56 px bar (wordmark, search, Browse) whose sheet holds the
  week pill, the sections in three groups and Theme, through the HTML popover API with no script; from 900 px it is
  two tiers on every page, 92.5 px measured (was 120 to 151 px, 74 on the home page at 1440, and 215 on a phone). The
  theme and finder buttons are built by `chrome.ts`, the search label is an `aria-label`, the pill has no `title`.
  Eight instruments with last night's numbers (`site/src/lib/instruments.ts`) sit under the home galaxy and on
  `/objects/`; the footer and the crumb point at the home strip. The home galaxy leaves 48 px for a "Further down" line
  (amends D70). Video and post pages lead with their stage action; Open in Claude stays primary elsewhere. Object
  titles keep their AL quotes. Measured on the same content: object pages 227 bytes lighter each (Table 18 154,505 to
  154,278), tar 695.3 to 689.1 MB, shared CSS +2,552 bytes, chrome script +459, one 626-byte stylesheet added.
  Rejected: a script-built or `scripting`-gated menu (no nav when the module fails, a flash when it runs), a
  `details` or checkbox toggle, a sticky phone bar, one row on laptops (1,520 px needed), dropdown groups, visible
  group labels, short names everywhere, a strip docked in the galaxy, a 70svh cap, "Source on GitHub" as the object
  primary, unquoted titles, an Instruments nav entry. Spec: `docs/specs/wayfinding.md`.
- **D92 The galaxy's controls are two groups, lenses left and view right, and its captions and ports keep off what
  they would hide.** (D3 of the 2026-10-12 review) The lens bar mixed six control shapes (the Questions menu, a version
  pill with a caret menu, a "this week" chip, a native "more lenses" select, a "list view" chip, a tilt range or a
  "planes" toggle) in a bar capped at `calc(100% - 720px)` with the panel open: 304 px and three rows at 1024 px, 48 px
  and six rows at 768 px. Now the left group holds Questions, one Lenses menu and a chip for the lens that is on (it
  clears the lens); the menu lists every lens in groups (Version newest first with counts and config labels, Time,
  Type, Tier, Coverage, and Country and Source as entries that open the panel pickers of D78), built by `lensMenu` in
  `galaxy-core.ts`. The right group is the view: List view, Tilt (Planes on a phone), zoom, Show panel, Full screen and
  the "?" sheet. One bar wraps both, and its measured bottom sets where ports, tilt planes and the list view start.
  Both groups are `role="group"` (the `toolbar` role promised arrow keys nobody implemented, and those arrows flew the
  galaxy), they come first in the Tab order (Questions was the 22nd Tab stop, now the first), and the hash and every
  deep link are unchanged. With the panel open on Finance the bar is one row at 1440 px (bottom 116 to 82), two at 1024
  (154 to 120, and the tools row is gone), bottom 274 to 162 at 768; on a phone one row of 52 px instead of three of
  124. Amends D71 (the this-week chip becomes a menu entry: on the home page "this week" is two clicks, from Lenses or
  Questions) and D72 (the version pill and its caret become the menu's Version row; the remembered major goes).
  (D6) Measured on 21 systems at 1440 and 1024 px: ports already drew only for a focused star and captions never
  overlapped each other, so the review's two proposals were the behaviour already; what was wrong is that captions
  covered neighbouring stars (43 of 118 system-level captions at 1440), plot labels drew in the caption font (a canvas
  `font` cannot take `var()`), and ports overlapped each other (13 and 17 pairs) and, at 1024, the bar (20). Now a
  caption takes the spot around its star (right, left, below, above) that covers the fewest other stars and is
  skipped when that is more than one (`captionSpot`, `CAPTION_MAX_COVER = 1`; a box centred on the star is its own dot,
  so an overlapping object square still counts); on the same 84 states caption-star pairs fell from 370 to 81,
  captions placed rose from 400 to 453, captions over a star at system level fell from 43 to 20 at 1440 and 56 to 25 at
  1024. Plot labels are mono 10 px and yield to captions, ports, labels and the bar (`visibleLabels`; over a caption 43
  to 0, under a port 32 to 0). Ports take the nearest free slot on the canvas border (`packPorts`; port pairs 30 to 0,
  over the bar 20 to 0, over a caption 6 to 0, none hidden). Home page only: the galaxy chunk grows 3.1 KB raw and
  1.1 KB gzipped, the home CSS and `index.html` shrink, the Pages tar stays at 695.3 MB, no other page and no graph
  file changes. `scripts/galaxy-density.mjs` measures all of it. Rejected: a segmented control holding every lens
  (seven groups and 71 lenses; D72 rejected one for seven versions); keeping the version pill and the this-week chip
  beside the menu (three of the shapes and most of the width stay); one native `select` for every lens (no counts in
  a consistent place, no pressed state, no picker for 55 entries); listing the 22 countries and 33 sources in the
  menu (55 rows; the panel pickers exist); a full ARIA toolbar with roving tabindex (its arrows collide with the
  galaxy's and the tilt range's); the tools in the breadcrumb row (collides with the breadcrumb at 1024 px); a strict
  "no caption over any star" (85 of 154 captions kept on the four busiest systems, none for Platform at 1440); media
  bodies as caption obstacles (no gain on star overlap; later); hiding plot labels (the only canvas text that names
  the namespace plots). Spec: `docs/specs/galaxy-controls.md`.
- **D95 An MCP answer names what it did not find, and a symbol stands where its owner stands.** The 2026-10-13
  side-by-side test against the Microsoft Learn MCP found every object fact right and six answers wrong before the
  facts: a field of Table 36 ranked 12th of 83 same-named fields because a tooltip repeating the name outweighed the
  owner; a nonexistent event returned three meaning-only pages under a header reading "keyword"; `get_object("table",
  "18", "BE")` said BE has no table of its own although the BE diff records three added fields; `RT0005` was read as
  "report 5"; "difference between IntegrationEvent and BusinessEvent" found nothing because every word had to meet a
  record and no phrase could meet a deduplicated summary; `counts.procedures` was undefined next to "public
  procedures". Fixes, deterministic, no page under `content/` rewritten: (a) when a query asks for symbols (a `kind:`
  prefix or parameter, a type word, a digit, a member word, an event-shaped word) a symbol takes its owner's layer and
  type prior and an exact name takes no tooltip points, so base tables come first by importance (Table 36 at 4: three
  base tables are more important); every other query ranks symbols as before; (b) an empty keyword list says so first,
  a `kind:` query never pads with meaning hits, and a hit-less one answers `No <kind> named "..."` with the nearest
  names, or says the filters removed the hits; `(exact band: n)` only with keyword + meaning; (c) the symbols index
  adds the members a country layer adds to a replaced W1 object, from `data/code/diffs/country/<major>-<cc>.json`, as
  rows with a trailing country column (7,945 rows for major 29, +92 KB gzipped on the tar), layer 2 under the W1
  owner; `get_object` with a country prints the layer's additions, without one a "Replaced in" line, and `cat` of
  such an anchor answers from the diff; an installed 0.5.0 reads the rows as W1 members; (d) coded identifiers
  (`^[A-Z]{2,3}\d{4}$`) join `meta.identifiers` from code spans, bold spans and table cells under
  `identifiers_rule: 2`, backfilled from the fetched blob like D94; only coded-id tags are a Learn record's name; the
  parser keeps them whole; (e) a question-shaped query drops its question words (auxiliary openers only before a
  pronoun, `vs` only between two content words and never in `VS Code`), quoted and CamelCase phrases meet an ordered
  token sequence built per field and only where the words are, and the hint names the hub of a Learn hit in the
  first ten; (f) the schema, the `get_object` description and `bc-lookup` define `counts.*`. Two Opus reviews of the
  scorer changes caught enum values outranking Learn articles on "posting" and "purchase", names such as "Is Enabled",
  "Compare List" and "VS Code" read as questions, and a false "No field named" under a filter; all were fixed before
  the merge and are guarded by golden rows (45, from 31). Rejected: a page per replaced country object (D52); a
  "Country layers add" section on W1 pages and names on the localization table (bytes; not now); Learn rows in the
  meaning list (D94); Learn body text (D01); an LLM query rewrite; new `counts` keys (25,646 pages rewritten for a
  definition); every identifier tag as a name (`SetRange` and `AppSourceCop` then ranked a page that only mentions
  them first). Spec: `docs/specs/mcp-answer-quality.md` (section 13: built, deviations).
- **D96 The plugin reads Learn pages through Microsoft's Learn MCP.** The observatory points to Learn articles by url and
  stores no Learn text (D01), and its server never fetches Learn, so the drill-down from a hit to the page depended on
  whatever else the session had connected. The 2026-10-13 side-by-side comparison: the Learn MCP wins on reading
  procedures and concepts and on AL code samples, loses on object facts, versions, localizations, roadmap and releases,
  and its search alone returns NAV, GP or Dynamics 365 Finance pages for a Business Central question instead of "not
  found". So the plugin connects `microsoft-learn` (`https://learn.microsoft.com/api/mcp`, streamable HTTP, no auth)
  next to `bc-observatory` and `bc-code-atlas`, and the skills route: observatory first; `microsoft_docs_fetch(url)`
  for a Learn hit or a hub's `links.learn` when the question is a how-to, setup or concept; `microsoft_code_sample_search`
  with `language: "al"` for AL samples; `microsoft_docs_search` only when the observatory finds nothing or the topic is
  not Business Central, checking the url sits under `/dynamics365/business-central/`; object ids, fields and versions
  never from Learn text. The MCP server text (instructions and the Learn hit note) says the same (0.7.1; the plugin is
  0.3.0), so a client without the plugin still learns that the url can be read. Rejected: a `learn_fetch` passthrough in
  the observatory server (code and an outbound dependency that duplicate Microsoft's own server); storing Learn bodies
  (D01). `plugin/README.md` and the MCP page list what the plugin installs (the page from `PLUGIN_SERVERS` in `site/src/lib/mcp.ts`), both tested against the
  plugin config; until then bc-code-atlas was named piecemeal.
- **D97 Section words an agent types resolve on a page (2026-10-15, M35).** The page objects' `## Fields on this page`
  section is keyed `controls` (D93) and the `get_object` text, the skill and the README named `fields` for every
  object, so an agent that followed them got `No section "fields"` on a page, six times in parallel in the chat that
  prompted this. `findSection` now resolves `fields`, `columns` and `members` to `controls` when the page has a
  `controls` section and no section of that word (7,567 pages and page extensions on the committed content; the 3,798
  tables with `## Fields` keep `fields`); the not-found answer names up to two nearest keys (`Did you mean "controls"?`;
  no suggestion for an alias word or for a word with no near key); the `get_object` text, `bc-lookup` and the README say
  'controls' on a page and point id checks to `search(kind: "page")`. The 25 keys of D93 do not change. No page, no data
  file, no derive. MCP 0.7.2, plugin 0.3.1. Rejected: renaming the key; aliases in `OBJECT_KEYS`; resolving any unknown
  word to its nearest key (a wrong guess answers silently); an alias for every object type; a header-only section; a
  web client deep-link row on page objects. Spec: `docs/specs/mcp-section-aliases.md` (section 12: built, deviations).
- **D98 A Learn search result opens the hub that lists it, at the article; Learn moves to the second line
  (2026-10-19, M36).** D94's row sent its title to learn.microsoft.com and linked the hub from its label; the owner
  wants the reader kept on the observatory first. A row whose article a hub lists (3,466 of 8,054 on 2026-10-18) now
  links its title to that hub with `#learn=<path under the Learn base>`; the page module finds the article's link in
  the hub's Learn list by its URL, highlights the row, scrolls it into view and focuses the link. No id is written
  into the HTML: no hub page changes. The label keeps its text and opens Learn, marked ↗, its accessible
  name ending ", on Microsoft Learn". The 4,588 articles without a hub page keep a title that opens Learn, now marked
  ↗ the same way, and a plain label. Cost (uncompressed, measured on the built site 2026-10-19): 546 bytes on the page
  module plus `learn-target-core`, a 531-byte chunk the page module and the search page share (one more request on
  every page); 380 on the search page's script; 23 on the CSS. No HTML page grows (29,043 of 29,043 the same size).
  Rejected: an id per Learn row in the hub HTML (198,362 bytes on the Pages tar for what the browser finds from the
  existing links); a text fragment (`#:~:text=<title>`): title matching, and at least 675 of the 3,466 articles' titles
  occur earlier in their hub's body, where it would land; the hub's top (a title that is not the hub's, and lists of up
  to 205 items); the Learn address as the second line (the hub's name leaves the row); a page of our own per article
  (D94). Spec: `docs/specs/learn-row-links.md` (section 12: built, deviations).
- **D99 Tilt is a button; a picked plane filters the pane; the tilted view zooms (2026-10-19, M37).** The tilt range
  snapped to flat or tilted on release, so it was an on/off control dressed as a slider: it is one `Tilt` button,
  pressed while tilted, with the 600 ms slide kept. A click on a plane's plate, its name or its pane heading picks
  that plane: accent outline, the other three planes at 0.4, the pane listing only that plane; the same click shows
  all four. The tilted pane is four plane sections in plane order, eight rows each (60 when picked), the core sample's
  layout. No plane folds any more: the country and coverage lenses dim the planes they do not use, and a pick wins over
  a lens. The tilted view zooms (1 to 8, around the pointer, marks at fixed size) and pans once zoomed, because at full
  tilt the flat camera had no weight and zoom did nothing. Media rows take their title from the layers file (no media
  item is a summary node). Amends `design/HANDOFF.A-layered.md` (the tilt range, folded planes). Rejected: keeping
  the range (half tilts mean nothing); folding on a name click (the owner asked for a highlight); lenses that keep
  folding (one rule, dim, for picks and lenses); today's pane plus a list on pick (the unpicked pane would have no
  media part to filter); a pick that zooms the camera to its plane (zoom stays the reader's); scaling marks with the
  zoom (crowded marks stay crowded); zoom in the URL. Measured (2026-10-19, review of PR #12): the galaxy script chunk
  grows 3,377 bytes (73,734 to 77,111), 1,149 gzipped (25,184 to 26,333); the pure helpers are unit-tested
  (`layers-core`, `galaxy-core`) and the nine built-site checks of the spec's section 7 pass. Spec:
  `docs/specs/galaxy-tilt-planes.md` (section 12: built, deviations).
- **D100 A search survives the tilt: the planes keep its hits lit, and every tilted list shows only them (2026-10-19,
  M38).** Tilting a system with a search on dropped the highlight while the chip stayed: the tilted drawing and pane
  never read the search, and the search knew only its star hits, while no media item and few objects are stars
  ("Telemetry" on AL Development: 10 media, 11 hubs and 23 objects hit, 0 of the media and objects stars). The live
  search now hands the galaxy every hit's id (`SearchHits.all`). Tilted, a thing whose own page is a hit (media and hubs
  by id, an object by `object/<key>`, a country by `localization/<code>`) keeps full strength and the flat lens's
  accent ring; the rest draws at 0.3, the flat lens's factor; non-star hits are drawn on the code plane. The tilted
  pane, a picked plane and the list per plane list only the hits, counted "10 of 164". Clearing the search keeps the
  tilt, pick and zoom. A search typed while tilted stays in the tilted system; flat levels keep D44's jump to the
  galaxy. A link with `q` and `system` or `star` opens that scope with the search on. Search only: the other lenses
  match stars, and the version lens would need per-object version data in the layers files. Rejected: lighting only
  the star hits (no media and none of the 23 code hits would light); the 50 star-less `pages` (2,030 for "posting");
  hiding the misses (the planes lose their shape, and flat dims); all rows with hits marked (the owner asked for
  filtered); matching titles from the layers file (title matching; the shared scorer decides, D86); the other lenses in
  this change (owner, 2026-10-19); the chip counting plane hits (it names the search galaxy-wide); jumping to the galaxy
  when a search is typed while tilted (loses the tilt). Measured (2026-10-19, built by hand): the galaxy script chunk
  grows 2,311 bytes (77,111 to 79,422), 905 gzipped (26,371 to 27,276, `gzip -c`); the pure helpers are unit-tested
  (`live-search`, `layers-core`, `galaxy-core`) and the ten built-site checks of the spec's section 7 pass. Spec:
  `docs/specs/tilt-keeps-search.md` (section 12: built, deviations).
- **D101 Search results can be ordered newest first (2026-10-19).** The search page's dated tabs (Learn articles,
  Roadmap, Videos, Posts, Code changes, Weekly digests, Other pages) carry a switch "Best match | Newest" under the tabs.
  Best match, the scorer's order, stays the default (owner); Newest (`?sort=date`) reorders the same hits by their day,
  newest first, the same day by best match, undated last, before the 50 and 500 caps. All and the undated tabs have no
  switch. The shared scorer gains `byDate` and `search(..., { sort: "date" })` (packages/search), so the site and the
  MCP sort alike; the MCP's `search` gains `sort: "match" | "date"`, which orders the keyword matches and skips the
  meaning list (MCP 0.8.0, plugin 0.3.2). A weekly digest's index record is dated by the Monday of its ISO week, so it
  sorts, prints its date and shows in `whats_new`. The day, not the time: the index keeps the day and the owner had no
  preference. Rejected: Newest as the default (of the 10 newest "Telemetry" posts only 3 have the word in their title),
  no switch, full publish times (+25 KB, every date consumer cuts again), filtering Newest to title matches, the switch
  on All (its groups preview the best 10), sorting the fused MCP list (meaning-only hits would rise), a new tool,
  digests by path (a week id outsorts every date in a mixed list) or by Sunday (the running week would be after today).
  Measured (2026-10-21, close-out review of PR #17; two site builds of the same data, before and after the merge):
  `search/index.html` 7,412 to 7,699 bytes (+287), no other file changed size, the Pages tar unchanged at 724,520,960
  bytes; the search page script 9,971 to 10,542 bytes (+571, gzip +183), its CSS +705 (gzip +45), the shared
  index-loader chunk with the scorer +99 (gzip +45). Unit tests (scorer, page, index, MCP), the ten browser checks and
  the MCP calls of the spec's section 7 pass. Spec: docs/specs/search-newest-first.md (section 12: built, deviations).
- **D102 A video or post whose topic links were all dropped gets one second chance (2026-10-19, M40).** D54's review
  only keeps or drops, and the linker redoes a unit only when its hash changes, so a dropped link was final. On
  2026-10-19, 227 posts and 148 videos had every link dropped and sat on no hub page and in no tilted view. In all, 328
  of 619 posts and 202 of 619 videos were on no hub; the rest were "no hub fits" or had no system. The drop reasons
  often name the right home ("a tool for analysing telemetry, not instrumenting AL code"), and nothing read them. Now
  `linkTopics` gives such a unit one more pass. Its dropped hubs leave its candidates, which changes its hash, so the
  existing staleness picks it up. Their titles, Learn paths and Opus's reasons go into the prompt as `rejected`, and the
  new links go through the same review. The record keeps `second` (the dropped hubs and reasons) for good: those hubs
  are never offered again and there is no third pass. Second-chance units get their own calls after the first-round
  ones, so a first-round prompt is unchanged byte for byte and new items keep priority. Rejected: an Opus re-home call
  (about three times the cost, and the review judges the result anyway); the reviewer naming a replacement (it sees
  only siblings, which misses cross-branch moves like the owner's telemetry posts, and covering the backlog needed a
  ~$40 re-review); the 156 "no hub fits" units (no hash change, later); more than one extra pass; grouping
  second-chance calls by the full system set (154 calls instead of 71). Measured: phase 1 is built and tested. The
  backfill (phase 2) ran on 2026-10-21 on the developer Mac (`1d86ac3e72`). `link:topics --write --quota 150` made 77
  Haiku calls ($0.50, against an estimate of about 116 calls and $3) and gave all 384 due units their second pass, 271
  of them with a link (8 picks rejected as "not a candidate of this item", 2 as a quote not verbatim).
  `review:topics --write --quota 400` made 181 Opus calls over 194 hubs ($20.72 at $0.114 a call, above the estimated
  $0.058-0.081), kept 610 links, dropped 481 and cleared the queue. Unit states (spec section 7, command 1), before:
  posts open 96, kept 194, due 232, none 82; videos kept 297, due 152, none 79, open 94. After: posts kept 257, final
  84, none 189, due 74; videos kept 390, final 51, none 131, due 50; nothing open. Of the 390 units that have had their
  second pass, 92 gained a kept link (24%, above the one-in-five bar of the spec's risk 4), 135 are final and 163 found
  no hub. The 124 units newly due are the spec's risk 6: re-judging a hub whole dropped links of units that had not had
  their pass; the nightly gives them theirs within its quota. The owner's case, `post/waldo-be/318423`, is now kept on
  *Monitor and analyze telemetry*. The derive the spec named (run 39578403945) changed nothing: topic pages render only
  in the full nightly's `hubs` phase, and the graph reads them, so readers see the kept links after the 2026-10-22
  nightly. Tilted-view counts (command 2) before: 289 posts, 412 videos; after: to be measured after that nightly.
  Spec: docs/specs/topic-link-second-chance.md (built, deviations: docs/built/topic-link-second-chance.md).
- **D103 The Lenses menu lists Time first (2026-10-21, M41).** The galaxy's Lenses menu (D92) put its groups in the
  order Version, Time, Type, Tier, Coverage, Country, Source. With seven majors (BC24 to BC30) the Version group takes
  two rows of chips, so "this week", the lens that changes every night and the one the header's "N new this week" link
  and the Questions menu open, was the third row and the eighth Tab stop in the menu. Now Time comes first and Version
  second (`MENU_GROUPS` in `galaxy-core.ts`); every entry, count and label, the chip, the hash and every deep link are
  unchanged. Amends D92 (the menu order only). Measured: `lensMenu` unit tests pass with Time first; browser checks on
  the built site are operator steps. Spec: docs/specs/lens-menu-time-first.md (built, deviations:
  docs/built/lens-menu-time-first.md).
- **D104 The plugin's skills are called bcobs-\*, and the plugin installs in GitHub Copilot CLI (2026-10-21, M42).** The
  plugin's skills `bc-lookup`, `bc-whats-new`, `bc-localization` and `bc-grounding` are renamed `bcobs-lookup`,
  `bcobs-whats-new`, `bcobs-localization` and `bcobs-grounding` (plugin 0.4.0). Claude Code prefixes a plugin skill
  with the plugin name, Copilot CLI does not: Copilot CLI 1.0.102 listed them bare next to its own skills, where `bc-`
  is the prefix any Business Central skill would take. Descriptions and bodies are unchanged, so when a skill triggers
  is unchanged; the servers are untouched. The same check showed Copilot CLI reads the plugin as it is (manifest,
  skills, the three servers, a real `get_object` call), so the MCP page and both READMEs add
  `copilot plugin install waldo1001/waldo.BCObservatory:plugin`. Historical docs keep the old names. Rejected:
  `observatory-*` (no overlap with the repo-local `bcobs-spec` dev skill, but longer, and the project goes by bcobs);
  keeping `bc-*` (fine in Claude Code, collides in Copilot CLI); a Copilot-specific manifest, since Copilot CLI already
  reads `.claude-plugin/plugin.json`; documenting `copilot plugin marketplace add` (untested whether Copilot CLI reads
  `.claude-plugin/marketplace.json`). Measured: the unit tests of the spec's section 5 pass (658 of 659, 1 skipped);
  Copilot CLI 1.0.102 with `--plugin-dir` on the branch lists `bc-observatory` 0.4.0 and the four `bcobs-*` skills.
  The install from GitHub and the Claude Code update are operator steps. Spec: docs/specs/plugin-skill-prefix.md.
- **D106 Layered answers: never less than Learn, only more (2026-10-23, M44).** An answer stacks five layers, each line
  with its tier and source: how it works on Learn, the code, what changed lately, heads up, gaps. On six real questions
  the observatory showed less than the Learn MCP: Learn reached objects only through `ms.search.form` (0 of 5,729
  codeunits, 1,092 code changes, 622 videos and 623 posts had a Learn link), hubs held a title and a line per article,
  community warnings were not tied to what they apply to, and Microsoft's hotfix lists were no source. Now:
  (1) cross-links with a label from a closed set (`fixes`, `documents`, `names`, `possibly related`, `relation
  unknown`) and who made them (`code`, `override`, `model`); certain ones join `links.<kind>`, the rest stay in
  `links.related`; three sources in order: exact joins (Learn extraction objects and D94 event identifiers resolved
  exactly, shared objects, work items), a quota-limited Haiku pick among IDF-overlap Learn candidates (always
  `possibly related`), hand-checked rows in `data/overrides/links.yaml`, merged last; (2) Learn key facts, 3 to 8 per
  page in our own words, for the administration and Fabric pages (`config/learn-facts.json`; its own stage, so hub
  narratives do not go stale; D01 and D94 stand: no Learn body stored); (3) cautions on posts (Haiku, verbatim quotes)
  and videos (their disclaimers), attached to an object page only by an exactly resolved object or an event it
  publishes today, within its versions; (4) Microsoft Support update pages (28.4 to 28.6) as an official source, ID,
  area and one-line wording per entry, one page per update; (5) the MCP's `brief(query | path)` and `search` grouped by
  layer, with a Learn title band in the shared scorer; (6) a never-less check over six acceptance questions.
  Owner decisions of 2026-10-23: the Haiku confirmation in the linker; hotfix entries keep their one-line wording;
  search grouped by default; one PR per phase. Rejected: Learn body text in the index (D01, D94); title or keyword
  matching for links; deterministic links plus overrides only (every codeunit no Learn page names stays unlinked); one
  page per hotfix entry (bytes); opt-in grouping; cautions by topic overlap (waldo's v26 post would attach to every
  posting codeunit; it attaches to Table 49 and not to Codeunit 80, whose own three obsolete events are other ones).
  Measured: phase 1 adds 4.41 MB to the Pages tar (budget 5); `npm test` 710 of 711 pass, 1 skipped; on a locally
  re-rendered tree the never-less check holds for 0 of 6 questions before the first nightly (key facts, hub lines and
  hotfix pages come from it). Spec: docs/specs/layered-answers.md.
- **D107 brief reaches Learn by meaning as well as by words (2026-10-23, M45).** D106's never-less check found the
  observatory reaching 5 of 16 Learn URLs the Learn MCP returned for six questions: Learn's concept pages share too few
  words with the questions, and the D63 meaning list covers pages, not Learn rows. Now the MCP embeds the Learn rows
  (title, summary, documented identifiers) with the D63 static model; a row counts at cosine 0.45 or more, gains 0.05
  per query word its title, summary or identifiers hold; generated report pages lose 0.2 unless the query asks for a
  report; a local-functionality page gains 0.1 for the country the query names and loses 0.3 for any other (or when no
  country is named). `brief` adds up to five, labelled `(found by meaning)`; word-overlap hits are labelled
  `(found by words)`. No model (embeddings off, offline, tests): unchanged. Measured: 11 to 8 unreachable of 16. The
  never-less gate is a curated `must_reach` list per question; Learn's full list stays a coverage report. Rejected: the
  meaning list alone (put French ledger pages first for a Belgian question), top three (missed "Event types" at 5th), a
  bigger model (the MCP stays light, D63), calling the Learn MCP from the server (D96). Spec
  `docs/specs/learn-meaning-brief.md`, PR #35; published in MCP 0.10.0 with D108.
- **D108 The MCP routes Business Central questions to itself: bc_ tools, directive instructions, a data date, explicit
  empty and down answers, bc_status.** In a real chat, "what do you know about the Fabric mirror in the latest BC
  release?" never reached the observatory: its tools were deferred, the client finds deferred tools by keyword, and
  `search`, `cat`, `ls` with descriptions that never say "Business Central" matched nothing. The data was fine
  (`search("Fabric mirroring")` returned the four wave 2 posts and BCApps #12339 and #12195). Now: (1) every tool is
  `bc_<name>` (`bc_search`, `bc_brief`, `bc_ls`, `bc_cat`, `bc_get_object`, `bc_diff_object`, `bc_localization`,
  `bc_whats_new`, `bc_blog_footprint`, `bc_feedback`), renamed outright, no aliases (the owner: only this repository and
  the iFacto playbook used them); (2) every title and description starts "Business Central" and carries the words people
  type (release wave, BC 29, new feature, AL object, table, codeunit, event, diff between versions, localization), with
  when to use, when not and what it returns; `bc_whats_new` and `bc_diff_object` carry literal trigger phrases; (3) the
  server instructions are seven directive lines: use FIRST for any BC question, fall back to Learn or web search only when
  this server has no answer and say so, the coverage from the same constants the answers use (`SNAPSHOT_MAJORS`,
  `DIFF_RANGE`, pinned by a test to `config/versions.json` and `data/code/diffs/version/`), not the Learn release plan;
  (4) every data answer ends with `Data as of <date>, covers BC 28, 29, 30 (30 is vNext) AL objects, version diffs BC 23 to
  30.`, the date being the site's last deploy (the index manifest's Last-Modified, read once per index load; every
  nightly deploys), else the newest nightly item (change, video, post, release, digest, hotfix) up to today; (5) an empty
  answer ends with `No match in the Observatory. Try Microsoft Learn or web search, ...`; a data source that throws is an
  MCP error that says `unreachable` (a missing page stays a not-found answer); (6) `bc_status` reads the two manifests and
  the site's Last-Modified only, never throws, and tells "down" from "no answer". Prefix `bc_` over `bcobs_`: tools are
  namespaced by server on every client, so D104's skill clash does not apply, and "bc" is the token people type; the
  longest plugin tool name is 60 of 64 characters. The description budget of D93 moves from 3,600 to 5,200 characters
  for eleven tools. Ships as MCP 0.10.0 and plugin 0.6.0, together with the unpublished 0.9.0 work (D106, D107).
- **D109 Change pages render again after the object pages.** The `changes-relink` phase renders change pages before
  `code-pages` (the object pages read the reverse index they produce, D61), and links an object only when its page
  exists. A snapshot that drops objects then removes those pages afterwards: the nightly of 2026-10-24 took the BC30
  snapshot past BCApps#12443 (the ES SII objects renumbered), `code-pages` removed 58 `*-es` pages, and 9 change
  pages kept 134 dead links, which failed `validate:content` on main. The derived block (`renderDerived`, run by the
  nightly after `code-pages` and by `--stages derive`) now starts with a `change-pages` phase: every published change
  page is rendered again (written only when it differs, `generated.at` aside) and `changes-by-object.json` rebuilt, so a
  removed object stays named on the change page, unlinked, and a derive on committed content heals pages a nightly left
  behind. Consequence: change pages render twice a night (about a second for some 1,240 pages); an object page a snapshot
  adds tonight is linked from the change pages tonight, its "Recent changes" section the next night.
- **D110 The MCP counts its tool calls, GDPR-minimal (2026-10-24, M47).** The stdio server sends one `Obs.ToolCall`
  event per tool call to the Observatory's own Application Insights resource, the way BC Telemetry Buddy counts its MCP, with `fetch`
  and no SDK (`packages/mcp/src/telemetry.ts`): tool, outcome (`ok`, `nomatch`, `notfound`, `error`), duration, MCP
  version, client name and version from the handshake, and a random session id held in memory only. No argument, no
  device data, `ai.location.ip` `0.0.0.0`, `cloud_RoleName` `bc-observatory-mcp`, `cloud_RoleInstance` the constant
  `obs`. At most 1,000 events per process, 3 s timeout, no retry, never on the answer path. On in a published build; off
  with `BC_OBSERVATORY_TELEMETRY=0`, `DO_NOT_TRACK=1`, `CI`, `BC_OBSERVATORY_LOCAL` or no connection string. The string
  comes from the repository secret `AI_CONNECTION_STRING` through esbuild `define` in `publish-mcp`; source and repository
  never hold it. A privacy notice (MCP README, plugin README, MCP page `#privacy`) names controller, purpose, basis
  (legitimate interest, GDPR Art. 6(1)(f)), data, processor, retention and the off switch; one stderr line at startup
  points to it. Verified end to end against a local catcher: one event per call, no query text, nothing with
  `DO_NOT_TRACK=1`. Rejected: a persisted install id (ePrivacy Art. 5(3) consent, so opt-in), the SDK (dependencies,
  host data), opt-in. Spec
  `docs/specs/mcp-usage-telemetry.md`. MCP 0.11.0, plugin 0.7.0.
- **D111 Usage counts know unique users and where they are (2026-10-24, M48).** Amends D110 at the owner's request
  ("Country and city", "I also want to be able to track unique users"). The server keeps a random install id in
  `~/.cache/bc-observatory/install-id` (or under `$XDG_CACHE_HOME`), created on first use and only while counting is on,
  and sends it as `ai.user.id`, so `user_Id` counts unique installs (the Usage > Users blade works). The `ai.location.ip`
  `0.0.0.0` tag is gone: Application Insights derives country, region and city from the sender and, with IP masking on,
  stores `client_IP` as `0.0.0.0`. The privacy notice (MCP README, plugin README, MCP page, stderr line) names both; a
  user can send the file's content to see or erase their events, or delete it to start over. Owner's choice between an
  opt-out install id (taken), an opt-in one, and a monthly-rotating one; the opt-out default carries the ePrivacy
  Art. 5(3) risk D110 avoided (storing an identifier on the device), the same one BC Telemetry Buddy carries. MCP
  0.12.0, plugin 0.8.0.
- **D112 miljan.rs is a community blog source (2026-10-25, M49).** Issue #40. `miljan-rs` in `sources.yaml`, kind blog,
  tier community, derived mode: no consent block, `full_text: false`. Author Miljan Milosavljević (MVP). Fetch is the
  WordPress feed `https://miljan.rs/feed/` (10 items, back to 2024-12-06); the WordPress REST API is 404 there, so no
  deeper backfill. Rejected: full text without the author's opt-in; kind discovery (suggestions, never content). Spec
  `docs/specs/miljan-rs-blog-source.md`.
- **D113 Videos and posts orbit their hub (2026-10-25, M50).** Issue #45. At level 2 and 3 in the flat galaxy, a hub's
  media bodies circle it: evenly spaced round the full circle, one turn per 40 s (`ORBIT_MS`), clockwise, at the
  existing radius `d/2 + 10`, each hub at a phase hashed from its id (FNV-1a). Under `prefers-reduced-motion` nothing
  orbits and the bodies keep the old fan (`-π/2 + i·π/6`); the tilted view is untouched (`mediaSpot`). While orbits are
  the only motion the loop draws at most every 33 ms. Rejected: rotating the 150° fan as a block (a clock hand, not
  moons), per-body speeds (same-radius bodies would overlap), orbiting in the tilt (its media items are click targets),
  a freeze on hover (flat-view bodies are not targets), 120 s per turn (under 1 px/s reads as a glitch). Spec
  `docs/specs/media-orbits.md`.
- **D114 The galaxy moves where the data does (2026-10-25, M51).** Issue #46. Five motions, each tied to data, all off under
  `prefers-reduced-motion`: (1) a media body's orbit radius, speed and colour follow its age: 6 px past the star's rim for
  today to 20 px at two years (log scale), period by Kepler's third law against D113's radius, the "landed" yellow
  through the week fading to the body grey at 30 days; (2) this week's bodies fly in as comets the first time a system
  opens in a visit; (3) under a source lens a comet flies the source's flight path hub to hub, oldest first, from
  `data/graph/flights.json` (graph step, latest 60 items per source, loaded on first use); (4) hovering a port sends
  2 to 6 particles along its edge, by link count; (5) systems turn clockwise round their centre once in 6 minutes at
  galaxy and system level, frozen at star level, in the tilt and the list. Frames: 30 fps for orbits, flight and
  particles, 15 fps for the spin alone. Rejected: twinkling (no data), particles on every port (the hairball D03
  avoids), comets on every visit, spin at star level. Spec `docs/specs/galaxy-motion.md`.
- **D115 sshadows.dk is a community blog source (2026-10-25, M52).** Issue #47, at the owner's request. `sshadows-dk`
  in `sources.yaml`, kind blog, tier community, derived mode: no consent block, `full_text: false`. Author Torben Leth
  (the site's About page; no MVP mention). Fetch is the RSS feed `https://sshadows.dk/rss.xml` (21 posts back to
  2018-06-04, 13 inside the 18-month window); not WordPress, so no REST fetch. Rejected: full text without the author's
  opt-in; a scrape fetch. Spec `docs/specs/sshadows-dk-blog-source.md`.
- **D116 vjeko.com is a community blog source (2026-10-25, M53).** Issue #48, at the owner's request. `vjeko-com` in
  `sources.yaml`, kind blog, tier community, derived mode: no consent block, `full_text: false`. Author Vjekoslav Babić,
  MVP (the About page: "Microsoft MVP since 2010"). Fetch is the RSS feed `https://vjeko.com/rss.xml` (30 posts back to
  2021-09-15, 22 inside the 18-month window); no WordPress API. Rejected: full text without the author's opt-in; a
  scrape fetch. Spec `docs/specs/vjeko-com-blog-source.md`.
- **D117 The topic review keeps tools and practice built on a documented feature (2026-10-25, M54).** Issue #49, at the
  owner's request ("I really need the links to be 100%"). The Opus topic review (D54) dropped 715 of 1,516 links (47%):
  posts about a tool, extension or practice around a documented feature lost every hub, so freddysblog, sshadows-dk,
  tine-staric-net and kine-cz had no flight path. The keep rule now includes a tool, extension, script or practice that
  works with, extends, measures or automates what the section documents, and the review keeps when in doubt; the
  vocabulary-only, sibling-section and example-not-lesson drops stay. Verdicts carry the review standard (`v`, review
  `PROMPT_VERSION` 2): a drop under an older standard makes its hub due again, a keep stays valid. Rejected:
  re-reviewing keeps too; dropping the review; community-tooling hubs (later). Spec `docs/specs/topic-review-tooling.md`.
- **D118 The BC Docs Librarian is a community blog source (2026-10-25, M55).** Issue #50, at the owner's request.
  `nataliekarolak-com` in `sources.yaml` (https://nataliekarolak.wordpress.com), kind blog, tier community, derived
  mode: no consent block, `full_text: false`. Author Natalie Karolak, MVP (the About page: MVP 2012-2016 and again since
  2024). Fetch: the feed (10 newest) plus the public WordPress.com REST API (64 posts back to 2022-11-03, 16 inside the
  18-month window), as for `thedynamicsexplorer-com`. Rejected: feed only (misses 6 posts in the window); full text
  without opt-in. Spec `docs/specs/nataliekarolak-blog-source.md`.
- **D119 Derived mode needs no consent; yzhums.com is switched on (2026-10-25, M56).** Issue #51, the owner's call ("we
  don't need consent"). Summary, quotes of at most 24 words and a link to each post need no author consent; `full_text:
  true` still needs tier official or a consent block (`sources.yaml` header). yzhums.com (Yun Zhu, MVP), registered but
  `enabled: false` since the start, is switched on: 389 posts inside the 18-month window (WordPress REST). The hold-back
  wording leaves `sources.yaml` and `docs/PLAN.md`; the "11 MAYBE blogs" PLAN counts are named nowhere and stay out
  until named. Rejected: a hold-back list for derived mode. Spec `docs/specs/yzhums-enable.md`.
- **D120 The leak gate lets item titles and Learn titles through (2026-10-26).** Amends D51's provenance rule. The
  yzhums.com run (40223018106) and the scheduled nightly after it (40248854118) were blocked by `check:leak` (69 and 11
  findings) and committed nothing. Read on the Mini: 10 of the 11 were yzhums manifests whose title alone is 25 words
  ("Dynamics 365 Business Central: How to show a warning about low inventory on a sales document (Prohibit users from
  adding sales lines with low inventory)"), quoted in his roundup posts; 1 was a topic page with Learn's "BigInteger
  data type" running into its description, which a post quoted. A hit run is now suppressed when it lies inside a
  video's or post's own title (shown verbatim by design; counted as `title_runs`) or inside Learn's title with its
  description (`readOfficialText`); derived text around a title still counts. Verified on the blocked tree on the Mini:
  0 findings (10 title runs, 41 official runs). Tests in `tests/unit/validate.test.ts`.
- **D121 The per-item leak guard exempts the item's own title; post leak skips are retried (2026-10-26).** Amends D55
  and extends D120 to the guard that runs before the gate. yzhums.com 75873 ("Business Central 2026 release wave 2
  (BC29): Developers can define indexes that span fields ...", 35 words) was skipped at `published` with `skip: leak`:
  `policyCheckedPage` found its title on its own page, nothing was left to scrub, so no page. `repeatChecker` takes
  the item's own strings (`own`, its title) and a run inside one is no repeat, in the render and the extract guard;
  derived text that repeats the post still is. The nightly's D33 revival (two more chances from the last completed
  stage) now covers `blog` as well as `video`, so posts skipped before this fix come back without a manual step.
  Tests in `tests/unit/blog-posts.test.ts`.
- **D122 jeremyvyska.com is a community blog source (2026-10-26).** Jeremy Vyska's blog (Microsoft Business Central
  MVP per his About page) is registered as `jeremyvyska-com`, derived mode, no consent block, `full_text: false`,
  fetched from its RSS feed and the WordPress API (13 posts inside the window; the feed alone stops at 2025-08-20).
  Rejected: full text without opt-in; feed only. Spec `docs/specs/jeremyvyska-com-blog-source.md`, issue #53.
- **D123 The plugin reminds the agent of the Observatory before a web search (2026-10-27, M58).** D108 made the tools
  findable; agents still did not look, in long real sessions. The plugin ships a `PreToolUse` hook on WebSearch and
  WebFetch (`plugin/hooks/bc-first.mjs`) that adds a one-paragraph reminder (call bc_search, load deferred tools with
  ToolSearch) when the query is about Business Central; it never blocks, and `BC_OBSERVATORY_HOOK=0` turns it off. The
  instructions say a deferred tool is available (item 3); `bcobs-lookup` says "use first, before web search". Verified
  live: the model receives the `PreToolUse` context. A four-case `claude plugin eval` scored 35/36 before and 36/36
  after, and a crowded A/B never web-searched in either arm: the failure did not reproduce in fresh sessions, so this is
  measured as no regression, not as a gain. Rejected: denying the search until a bc_ call (state, false blocks),
  `UserPromptSubmit` (noise), longer instructions alone. MCP 0.12.1, plugin 0.9.0. Spec
  `docs/specs/bc-question-routing.md`, issue #54.
