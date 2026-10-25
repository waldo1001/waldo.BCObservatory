# Handoff — state of BC Observatory on 2026-10-06 (M0 complete)

Written at the end of the planning session so a fresh Claude Code session in this repository can continue
without the original conversation. Read in this order: `AGENTS.md` → this file → `docs/PLAN.md` →
`docs/DECISIONS.md` → `docs/research/2026-10-06-research-findings.md`.

## Open specs, not yet implemented


Specs are written with the `bcobs-spec` skill (`.claude/skills/bcobs-spec/SKILL.md`), pushed, and listed here with
spec path, decision, milestone, status and where to start; a coding session takes its work from this list only.
Every spec also has an issue (`issue #N` below, `issue:` in its frontmatter) so waldo.Jarvis's League can build it once
the owner applies `spec-approved` to that issue: branch `league/<issue>-<topic>`, PR label `league-building`. A spec
whose issue carries that label, or that has such a branch or PR, is the League's: do not build it by hand (take it over
with `CLAUDE.md` "Taking over from the League"), and do not approve a spec you are building. `/sdd-build <spec>` builds
one in either mode.
- **Looser topic review, D117** (`docs/specs/topic-review-tooling.md`, M54, issue #49). Status: proposed 2026-10-25,
  nothing implemented. Start with the tests of section 5. Until it lands, the review drops 47% of topic links and four
  blogs have no flight path.
- **Layered answers, D106** (`docs/specs/layered-answers.md`, M44, issue #26). Status: built 2026-10-23 on stacked
  branches `build/layered-answers` and `-p1` to `-p6`, one PR per phase (#27 docs, #28 cross-links, #29 key facts, #30
  cautions, then hotfix lists, brief and search, never-less); merge in order. Not done until the first nightly ran:
  then `npm run check:never-less` (0 of 6 hold before it), un-pend rows that hold, backfill learn-confirm, learn facts
  and cautions within their quotas, MCP 0.9.0 and plugin 0.5.0 were never published: they went out inside MCP 0.10.0 and plugin 0.6.0 (D108, 2026-10-24). Spec section 12 lists the deviations and the
  open never-less gap (Learn concept pages found only by meaning). Do not apply `spec-approved` to #26.
- **Learn by meaning in brief, D107** (`docs/specs/learn-meaning-brief.md`, M45, issue #34). Status: built 2026-10-23 on
  `build/layered-answers-p7`, stacked on #33; unreachable Learn URLs of the never-less check 11 -> 8 of 16. Shipped in MCP
  0.10.0 (D108). The rest is an owner decision (spec section 8).
- **Observatory in Claude chat and Desktop, D105** (`docs/specs/mcp-in-claude-chat.md`, M43, issue #24). Status:
  proposed 2026-10-22, nothing implemented; the owner wants it specced, not built yet, and phase 2 waits for a host
  choice (spec section 4, host criteria). Start with phase 1 task 1 (the tests). Until it lands, claude.ai users who add
  the plugin get the skills only; bc-code-atlas and microsoft-learn need Add on the plugin's Connectors tab, and
  nothing says so.

Follow-ups still open from the specs built on 2026-10-07: Discovery D65 (open questions in spec sections 8.1-8.5);
Code Atlas D67 (the message to Stefan, decision 12; compare `data/code/graph/30/manifest.json` with BC29's 15,711
edges and 1,350 unresolved, because a manual control run shared the BC30 checkout); Version lens D72 (open
questions in its section 12).

## Where things stand

**Shipped 2026-10-25 (sources only; readers see it after the ingest run):**
- **vjeko.com is a community blog source (D116, M53, issue #48).** `vjeko-com` (Vjekoslav Babić, MVP) in
  `sources.yaml`, derived mode, RSS `https://vjeko.com/rss.xml` (22 posts inside the window). Operator step, at the
  owner's request: `gh workflow run nightly.yml --ref main -f pillars=blog -f only=vjeko-com -f unlimited=true` (the
  weekly cap holds normal nightlies at $0 this week); `pages` deploys after it.

**Shipped 2026-10-25 (sources only; readers see it after the ingest run):**
- **sshadows.dk is a community blog source (D115, M52, issue #47).** `sshadows-dk` (Torben Leth) in `sources.yaml`,
  derived mode, RSS `https://sshadows.dk/rss.xml` (13 posts inside the window). Operator step, at the owner's request:
  `gh workflow run nightly.yml --ref main -f pillars=blog -f only=sshadows-dk -f unlimited=true` (the weekly cap holds
  normal nightlies at $0 this week); `pages` deploys after it.

**Shipped 2026-10-25 (site only; readers see it after the next Pages deploy):**
- **The galaxy moves where the data does (D114, M51, issue #46).** Recency orbits (closer, faster, yellow when new),
  comets for this week's bodies, a flight-path comet under a source lens, particles along a hovered port, systems
  turning once in 6 minutes. Operator step: none; the flight path needs `data/graph/flights.json`, which the next
  nightly's graph step writes (until then the source lens shows no comet). Also fixed: a tilt opened from the URL
  redrew forever. Spec `docs/specs/galaxy-motion.md`, section 12 has the measurements.
- **Videos and posts orbit their hub (D113, M50, issue #45).** At system and star level in the flat galaxy each hub's
  media bodies circle it, evenly spaced, one turn per 40 s (`ORBIT_MS` in `site/src/scripts/galaxy-core.ts`), each hub
  at its own phase; static fan under reduced motion and in the tilt; orbits alone redraw at 30 fps. Spec
  `docs/specs/media-orbits.md`, section 12 lists what was checked.

**Shipped 2026-10-25 (sources only; readers see it after the next nightly):**
- **miljan.rs is a community blog source (D112, M49, issue #40).** `miljan-rs` in `sources.yaml`, derived mode, the
  WordPress feed `https://miljan.rs/feed/` (10 posts back to 2024-12-06; no REST API). Operator step, one source
  alone as `docs/RUNBOOK.md` runs a backfill: `gh workflow run nightly -f pillars=blog -f only=miljan-rs`. After it,
  `ls("posts")` lists it and "XRechnung ZUGFeRD" finds the 2025-11-17 post; check both, then tick the spec's last
  Definition of Done item.

**Shipped 2026-10-24 (MCP 0.12.0, plugin 0.8.0; no page or data changed, no derive):**
- **Usage counts know unique users and where they are (D111, M48).** The published MCP keeps a random install id in
  `~/.cache/bc-observatory/install-id` and sends it as the user id; Application Insights now stores country and city.
  The privacy notice on the MCP page and in both READMEs says so. Operator step: `gh workflow run publish-mcp.yml --ref
  main` (D40), then check `user_Id`, `client_City` and `client_CountryOrRegion` on the first events (RUNBOOK "Usage counts
  (D110)").

**Shipped 2026-10-24 (MCP 0.11.0 published, plugin 0.7.0; no page or data changed, no derive):**
- **The MCP counts its tool calls (D110, M47).** A published build sends one `Obs.ToolCall` event per tool call to
  the Observatory's own Application Insights resource: tool, outcome, duration, client name and version, server version, a
  per-process session id. No argument, no device data. Off with `BC_OBSERVATORY_TELEMETRY=0`, `DO_NOT_TRACK=1`, `CI` or
  `BC_OBSERVATORY_LOCAL`. Privacy notice in both READMEs and on the MCP page (`#privacy`, live after the next Pages
  deploy). Operator steps done 2026-10-24: secret set; resource checked (West Europe, `AppEvents` 90 days, IP
  masking on); published via `publish-mcp` run 40097305611; first events seen in the portal, `client_IP` `0.0.0.0`, city,
  state and country empty. Two test rows carry `client` `release-check`: filter them out when reading usage. Advice not
  yet taken: lower the resource's daily cap from 100 GB (RUNBOOK "Usage counts (D110)").

**Shipped 2026-10-24 (MCP 0.10.0, plugin 0.6.0; no page or data changed, no derive):**
- **Business Central questions route to the MCP (D108, M46).** Tools are `bc_*`; titles and descriptions start "Business
  Central" with trigger phrases; the server instructions say use it FIRST, when to fall back and the coverage; every
  answer ends with its data date; empty answers end with `No match in the Observatory. ...`; a data source that does not
  answer is an `unreachable` error; `bc_status` tells down from no answer. Both READMEs have "Using this server" and a
  CLAUDE.md snippet. The iFacto playbook's PipelineAgent triage skill names the old tools: updated on its own branch.
  A Claude Code session that started before the publish keeps its plugin MCP on the old version until restarted.

**Shipped 2026-10-23 (security; no page or data changed, no derive):**
- **Node floor for the 21 Oct 2026 Node security releases** (Brotli decoder OOB write CVE-2026-111497, reachable through
  fetch's automatic `br` decompression in the nightly's blog fetches; TLS hostname bypass CVE-2026-105483/106069).
  `engines` is `^22.23.4 || ^24.22.1 || >=26.12.1` in the root, `site` and `packages/mcp`; `.nvmrc` `v22.23.4`;
  `setup-node` uses `check-latest` in pages, pr-validate and publish-mcp; `infra/mini/selfcheck.sh` fails below the
  floor. The Mini's `node@22` is 22.23.4. MCP 0.8.1 (engines only, no code change) published with provenance by
  `publish-mcp` run 39950185656; the plugin follows through `@latest`. Commits `8dbb3be8e6`, `4c2003621f`.

**Shipped 2026-10-21 (code only; no page or data changed, no derive):**
- **Plugin skills bcobs-\*, Copilot CLI install, D104** (`docs/specs/plugin-skill-prefix.md`, M42, issue #23). The
  plugin's four skills are `bcobs-lookup`, `bcobs-whats-new`, `bcobs-localization`, `bcobs-grounding` (plugin 0.4.0);
  the MCP page and both READMEs add `copilot plugin install waldo1001/waldo.BCObservatory:plugin`. Readers see the MCP
  page change once `pages.yml` deploys this push (it changes `site/**`; no derive). Operator steps (spec section 12):
  `npx -y @github/copilot@latest plugin install waldo1001/waldo.BCObservatory:plugin` (Node 22; time it; `plugin list`
  shows 0.4.0; `plugin uninstall bc-observatory` undoes it), and `claude plugin marketplace update bc-observatory`
  plus a session restart (the skill list shows `bc-observatory:bcobs-*`).
- **Lenses menu, Time first, D103** (`docs/specs/lens-menu-time-first.md`, M41, issue #21). The galaxy's Lenses menu
  opens with "this week" on top, then the versions and the other groups as before; "this week" is the first Tab stop
  in the menu (was the eighth). The spec's own edits wait in `docs/built/lens-menu-time-first.md` for the review.
  Operator steps: the site build on Node 22 and the browser checks of spec section 7 (steps 2, 3, 5).

**Shipped 2026-10-19, phase 1 (code; its push starts a derive on the Mini that changes no page, RUNBOOK "Derived data", D81):**
- **Topic link second chance, D102** (`docs/specs/topic-link-second-chance.md`, M40, issue #16). A video or post whose
  every topic link Opus dropped is linked once more by the nightly's topic linker, after its first-round calls and
  within the `topic_links` quota: its dropped hubs leave its candidates and go to Haiku as `rejected` with Opus's
  reasons; `second` on its record in `data/links/topics.json` keeps them, and there is no third pass. The new links
  join the review queue as usual. `topic_links.second` (`due`, `called`, `matched`) is in the nightly run report;
  `npm run link:topics` prints `rejected:` lines. Nothing readers see changes until links are kept by the review.
  The backfill (the spec's phase 2) ran on 2026-10-21 (`1d86ac3e72`, about $21): every due unit had its second pass,
  the review queue is empty, and 92 of 390 second-pass units gained a kept link; the numbers are in D102. Readers see
  the kept links after the 2026-10-22 nightly re-renders the topic pages (its `hubs` phase; a derive does not render
  them). Still open: spec section 7 command 2 after that nightly (before: 289 posts, 412 videos), written into D102;
  the 124 units newly due (the spec's risk 6) get their pass from the nightly. The spec's own edits wait in
  `docs/built/topic-link-second-chance.md` for the review.

**Shipped 2026-10-19, live after its Pages build (site only, no derive):**
- **Search newest first, D101** (`docs/specs/search-newest-first.md`, M39, issue #15). Built by waldo.Jarvis's League.
  The search page's dated tabs (Learn, Roadmap, Videos, Posts, Code changes, Weekly digests, Other) show a "Best match |
  Newest" switch, Best match by default, `?sort=date`; `byDate` and `search(..., { sort: "date" })` in the shared scorer;
  the MCP's `search` takes `sort: "date"` (MCP 0.8.0, plugin 0.3.2, README and `bc-whats-new` updated); a weekly digest's
  index record is dated by its week's Monday (`weekStart`), so it sorts and `whats_new` lists digests. Closed out
  2026-10-21 by the review the League's PR #17 missed (spec section 12): the site build (`search/index.html` +287
  bytes, nothing else grew, tar unchanged), the ten browser checks of section 7, the digest dates (written by the derive
  in the 2026-10-20 nightly) and the stdio calls of the 0.8.0 bundle all pass. MCP 0.8.0 was published the same day
  (`publish-mcp` run 39573494818, D40), and `npx -y bc-observatory@0.8.0` answers the section 7 calls against the live
  site. No operator step left.
- **Search survives the tilt, D100** (`docs/specs/tilt-keeps-search.md`, M38, issue #14). A search stays lit when a
  system is tilted: every thing on the planes the search hits (media, hubs, every object, countries; the live search
  now hands over every hit's id, not only its stars) keeps full strength and an accent ring, the rest dims to 0.3; the
  plane names read "10 of 164 match"; the tilted pane, a picked plane and the list per plane list only the hits, with
  "Clear the search"; clearing keeps the tilt, pick and zoom; a search typed while tilted stays tilted (flat levels
  still jump to the galaxy, D44); `#q=` with `system` or `star` opens that scope, tilt and plane included. Built by
  hand; the galaxy chunk grows 2,311 bytes (905 gzipped). Nothing waits on a nightly or a derive. Later (spec
  section 8): the other lenses on the tilted planes.
- **Tilt button, plane pick, tilted zoom, D99** (`docs/specs/galaxy-tilt-planes.md`, M37, issue #10). Tilt is one
  on/off button (the 600 ms slide kept); a click on a plane's plate, name or pane heading picks that plane (accent
  outline, the other three at 0.4, the pane lists only it; `#system=...&tilt=1&plane=media`), a second click shows all
  four; the tilted pane is four plane sections; no plane folds (the country and coverage lenses dim); wheel, pinch and
  −/+ zoom the tilted view (1 to 8) and a drag pans; core sample media rows show their titles. The League's build could
  not run the site build, so the review of PR #12 (2026-10-19) did: `npm run site:build` on Node 22, the browser checks
  1 to 9 of spec section 7 (all pass) and the chunk size (+1,149 bytes gzipped). No operator step left.
- **Learn row links, D98** (`docs/specs/learn-row-links.md`, M36, issue #8). On the search page a Learn article that a
  hub lists opens that hub at the article: the title links `<hub>/#learn=<path>`, and the page module (on every page)
  finds the article's link in the hub's Learn list by its URL, highlights its row, scrolls it to the centre and focuses
  the link; the breadcrumb keeps its text and opens learn.microsoft.com, marked ↗. The 4,588 articles without a hub keep
  a title to Learn, now marked ↗. No hub page changes (no id in the HTML); the page module grows 546 bytes plus a
  531-byte shared chunk. Built by the League (PR #9), which quarantined it when CI went red on an error in `main`
  (fixed by #11); the review of PR #9 ran section 7's browser checks on the built site and wrote the ship-time edits.
  No operator step.

**Shipped 2026-10-15, no derive needed (no page or data changed):**
- **MCP section aliases, D97** (`docs/specs/mcp-section-aliases.md`, M35, issue #3). On a page or page extension
  `get_object(..., section: "fields")` (also `columns`, `members`) now reads the `controls` section; a section word that
  matches nothing answers with `Did you mean "<key>"?` when a key is near; the `get_object` text, `bc-lookup` and the MCP
  README say `controls` on a page and point id checks to `search("page 25", kind: "page")`; the skill gains a web client
  URL line. Readers get it with MCP 0.7.2 and plugin 0.3.1 (also in `.claude-plugin/marketplace.json`, now tied to
  `plugin.json` by a test). MCP 0.7.2 was published on 2026-10-15 (the `publish-mcp` dispatch, D40). The bundle was
  built and driven once over stdio on 2026-10-15 (spec section 7): the four calls answer as
  specified.

**Shipped 2026-10-13, live after the derive the merge starts and its Pages build:**
- **Learn reader in the plugin, D96** (no spec, M34). The plugin connects Microsoft's Learn MCP
  (`microsoft-learn`, `https://learn.microsoft.com/api/mcp`) so an agent drills down from an observatory Learn hit to the
  page with `microsoft_docs_fetch(url)` and to AL samples with `microsoft_code_sample_search`; the skills (`bc-lookup`,
  `bc-grounding`, `bc-localization`) and the MCP server text (0.7.1) say when. Users get it when they update the plugin
  to 0.3.0. The server itself still never fetches Learn (D01).
- **MCP answer quality, D95** (`docs/specs/mcp-answer-quality.md`, M33). From the 2026-10-13 side-by-side test against
  the Microsoft Learn MCP. Same-named fields, events and procedures rank by their owner's layer and importance when the
  query asks for symbols (`field: VAT Bus. Posting Group`: Table 36 rank 12 to 4); a search with no keyword hit says
  so, a `kind:` query never pads with meaning hits and names the nearest symbols or the filter that removed them;
  question-shaped queries drop their question words and phrases meet summaries (IntegrationEvent vs BusinessEvent: 0
  hits to "Event types" in the top 3, hint to the Events hub); coded Learn ids (`RT0005`, `LC0234`) under
  `identifiers_rule: 2`; the members a country layer adds to a replaced W1 object are symbol rows with a country, and
  `get_object(type, id, "BE")` prints them. MCP `bc-observatory` 0.7.0. After the merge: the derive rewrites the
  symbol shards (+7,945 country rows, +92 KB gzipped); the first full nightly runs the rule-2 backfill
  (`learn_identifiers.rule: 2` in the run report) and its derive writes the coded ids into the Learn shard; the
  `RT0005` golden row lost its `pending` the same day (`4be1f4a584`). Deviations in the spec's section 13.

**Shipped 2026-10-12, live on the next Pages build:**
- **Galaxy controls, D92** (`docs/specs/galaxy-controls.md`, M30). Items D3 and D6 of the 2026-10-12 UX review, home
  page only. The galaxy's lens bar is one bar of two groups: left Questions, a Lenses menu with every lens in groups
  (versions with counts, this week, type, tier, coverage, and Country and Source entries that open the panel pickers)
  and a chip that names and clears the lens that is on; right List view, Tilt, zoom, panel, full screen and "?". One
  row at 1440 px with the panel open (was two), two at 1024 (was three plus the tools row), one 52 px row on a phone
  (was three, 124 px); Questions is the first Tab stop; arrow keys on the bar no longer fly the galaxy; every deep
  link lands as before. Captions take the spot around their star that covers the fewest other stars (caption-star
  pairs 370 to 81 on 84 states), plot labels are mono 10 px and give way, ports are packed on the border under the
  measured bar (port overlaps 30 to 0, over the bar 20 to 0). Galaxy chunk +3.1 KB raw (+1.1 KB gzipped), tar
  unchanged at 695.3 MB. `node scripts/galaxy-density.mjs` measures it; deviations in the spec's section 12.
- **Wayfinding, D90** (`docs/specs/wayfinding.md`, M28). One map of section names (`pipeline/lib/sections.ts`) read by
  the nav, crumbs, index titles and h1s, home cards, About, search groups and every `llms.txt`; crumbs follow the
  sections (`site/src/lib/crumbs.ts`) with the galaxy system as a chip in the identity row, so localization and source
  pages link their section index again and instrument pages sit under Galaxy / Instruments. The header is a 57 px bar
  with a Browse sheet (popover API, works without script) under 900 px and two tiers of 92.5 px from 900 px on every
  page; Theme and the finder are built by `chrome.ts`. Eight instruments with last night's numbers under the home
  galaxy and on `/objects/` (`site/src/lib/instruments.ts`), a "Further down" line ending the home page's first screen,
  Watch here / Read it here leading on video and post pages. Measured on the 2026-10-12 content: object pages 227
  bytes lighter, **tar 695.3 to 689.1 MB**, files 59,135 to 59,136. The section `llms.txt` headings change with the next
  nightly's derive stage.
- **Lists and media, D91** (`docs/specs/lists-and-media.md`, M29). Live after the derive that the merge triggers and its
  Pages build (until then change rows lack branch, major, object count and badges, video rows the review badge, and the
  Major facet is one pill). `/changes/`, `/videos/` and `/posts/` render their newest 50 rows and a closed title list of
  every other page, and load the rest from the search index's media shard on "Show 100 more" or a filter
  (`MediaList.astro`, `media-list.ts`, rows in `list-rows.ts`, tested); pills with counts that follow the other filters
  (Repository, Kind, breaking only, Major; Channel or Blog and Year), a click from all on keeps one pill (`pickPill`,
  amends D82 on lists), state in the query string; `/features/` filters by Wave, Status and Area and the tracker cells
  link into them; week cards on `/digests/` with the running week "in progress"; source cards on `/sources/`, and the AL
  Language extension's page says "changelog"; the post card's image is a 200 px column, hidden on phones. Media records
  gained the change and video facts the rows print (+58 KB). Local build on the 2026-10-12 content: **695.3 to 694.4 MB
  tar**, the three lists 1.49 MB to 376 KB, no object, video or post page changed, files +2. Later (spec section 8): a
  media shard per type, restoring "Show more" after Back, the pills on `/changes/week/`.
- **Learn search, D94** (`docs/specs/learn-search.md`, M32). `includeSourceInSymbolFile` found nothing because Learn
  articles had no search record and identifiers were never kept. The fetched stage now writes `meta.identifiers`
  (code spans, camelCase or PascalCase, at most 40); a nightly phase fills them once for the 8,050 items fetched
  before (`learn_identifiers` in the run report). The index writer adds `learn-<sha12>.json` (listed under `learn`,
  not `shards`); the site's search page has a "Learn articles" group after Start here, rows open learn.microsoft.com
  and link their hub; MCP search returns `type learn` hits with url and hub. Local build: 695.3 to 697.3 MB tar, no
  page grew. Live after the derive of the merge (titles and summaries), identifiers after the next nightly; agents
  after the next MCP release.
- **Object pages read like a reference, D89** (`docs/specs/object-page-reading.md`, M27). Items B1, B2, B3, B6, B8 of
  the UX review, all built in the browser by `site/src/scripts/object-page.ts` (pure helpers in `object-page-core.ts`,
  tested) from the existing module script of `Page.astro`: an "On this page" list with counts, sticky in the side column
  (a closed details on a phone) and a back-to-top button; filter, order and a compact one-line mode for member sections
  of 12+ rows; "Changed in" chips tied to the timeline's changed majors and the version transition pages; neighbourhood
  captions by name, a key line, legend-lit kinds and the explorer as the section's action; an "Ask your agent" button
  with copy buttons and a prompt. A search hit's hash (D86) always lands on a visible, opened row. Three build-time
  reductions (pill titles, captions, the closing paragraph): local build on the 2026-10-12 content **695.3 to 692.1 MB
  tar**, object HTML -3.34 MB with no page larger, Page module 3.3 to 16.3 KB once. Table 18's Fields 23,138 to 7,833 px.
  Later (spec section 8): the list on other page types, a per-procedure atlas call, filter state in the URL,
  `hidden="until-found"`, the light-theme contrast of pressed pill buttons.

**Shipped 2026-10-12, live for agents (`bc-observatory@0.4.0` published to npm 2026-10-12, run 38252289496):**
- **MCP sections, D93** (`docs/specs/mcp-sections.md`, M31): `get_object`, `cat` and `localization` return a page whole
  when it fits 30,000 characters and a compact view otherwise (frontmatter with long lists cut, the section keys with
  row counts, the first 5 rows of each section): Codeunit 80 "Sales-Post" 177,746 to 9,504 characters, Table 36 14,800,
  `localization("CZ")` 5,427. `section`, `offset` and `limit` read one section in slices of at most 30,000 characters
  (Codeunit 80's 530 events in five calls), `frontmatter` is a section, and `cat` of a symbol path from `search`
  (`objects/codeunit/80#event-OnAfterPostSalesDoc`) returns that member's row. The slicer is
  `packages/mcp/src/sections.ts`; `BC_OBSERVATORY_MAX_CHARS` changes the budget (0 = whole pages, as 0.3.0). Tool
  descriptions keep call forms and drop the scoring formula (3,095 to 3,066 characters with the section sentences).
  Server 0.4.0 and plugin 0.2.3 in the tree; the owner publishes with `gh workflow run publish-mcp.yml --ref main`,
  then `gh run watch` and `npm view bc-observatory version` (0.4.0). The site's object pages are unchanged (D88);
  `/mcp/` and `/mcp.md` say what the three tools do now. Deviations in the spec's section 12.

**Shipped 2026-10-12, live on the next Pages build (video Features tables after the next nightly's re-render):**
- **UX batch 1, bytes first, D88** (no spec, M26). The review behind it: `docs/research/2026-10-12-ux-review.md`,
  35 proposals A1 to G2 with measurements, and a byte budget at the end; the owner wants all of them within the Pages
  tar limit (D76). Batch 1 is the reductions and the small fixes: the video dialog is built on the first chip click
  (`stageDialogElement`), the footer's instrument links are one link to `/objects/#instruments`, the header lost its
  repeated `title` attributes and long pill title (and says "new this week" in every state), provenance is a closed
  details, the version timeline folds quiet majors into ranges (`timelineCols`, tested), one change pill per member
  (`markMembers`, tested), stat chips under 600 px, search hides empty tabs and the `.md` path, digest summaries
  pluralise, the home help paragraph became a "?" shortcut sheet in the galaxy tools, the phone's lens bar wraps and its
  system list is a closed details, a video Features table says a shared status once (E2, no LLM). Local build on the
  2026-10-12 content: **744.2 to 695.3 MB tar**, objects 501.3 to 455.2 MB, files unchanged. First Pages run after the merge
  (38221268301, 2026-10-12): 695.3 MB tar, 155.8 to 204.7 MB of headroom to 900 MB. Batches 2 and 3 are specs (see "Open specs" above once written).

**Shipped 2026-10-09, live after the next good nightly:**
- **Search, D86** (`docs/specs/search.md`, M24): one scorer for the site and the MCP in `packages/search` (parser,
  synonyms, layer order, importance, hints); `t36`, `cu 80`, `table 11300 BE`, `36`, `BE`, `custmer`, `client` and
  `Sales Header` land where a BC person expects; the MCP pins the exact band over its meaning fusion, tags hits
  `[keyword]`/`[meaning]`/`[both]`, filters by system, country, app, object type and kind, resolves captions and
  country objects in `get_object`, and `whats_new` stops at today. Page shards split by kind under hashed names in
  Cache Storage; a symbols index (fields, events, global procedures, enum values) with anchors on object pages; the
  palette answers `field:`, `event:`, `proc:` from it. The next nightly (or a derive) writes `data/index/` in the new
  shape: hashed `pages-*` names with `kind`, `symbols-manifest.json` and four symbol files, no `pages-1.json`; until
  then the site reads the old manifest as one objects kind and has no symbols. `bc-observatory@0.3.0` (one bundled
  `dist/server.js`, no MiniSearch) was published to npm on 2026-10-09; plugin 0.2.2 carries the skill advice.
  Deviations in the spec's section 13.

- **Galaxy key and star intro, D87** (no spec, M25): the key under the canvas shows on every level and lists only the
  marks that level draws (`legendItems`); the galaxy panel opens with one paragraph on what a star is, from the
  summary counts (`starIntro`); the panel stays open on the galaxy level until "Got it" (`localStorage`). Two of ten navigation suggestions made on
  2026-10-08; the other eight (the star panel winning over the lens panel first) are in that session's reply only.

**Shipped 2026-10-08, live after the next good nightly:**
- **AL extension changelog, D85** (`docs/specs/al-extension-changelog.md`, M23): a `vsmarketplace` source
  `al-language-extension` asks the gallery API (POST, no key) every night, reads the newest stable and pre-release
  changelog assets only when a track moved, merges them per version and writes `data/releases/al/snapshots|diffs/` on
  change; one `release` manifest item and page per version (`content/releases/al-<version>.md`, 62 on 2026-10-08),
  `/releases/` (home card, Changes lede; no nav entry: twelve wrapped the header), the search index, `whats_new` and the
  digest's Releases block. No content commit: the next nightly writes the snapshot and the 62 pages (no LLM).
  Deviations in the spec's section 12.
- **MCP page, D84** (no spec, M22): `/mcp/` and `/mcp.md`, "MCP" in the nav before "About"; seven asks, the nine tools,
  the four skills, five install blocks and "how it answers" (`site/src/lib/mcp.ts`, pinned to the server, the plugin
  and the README by `tests/unit/mcp.test.ts`). Nav labels "Objects" and "Countries" and a 12 px nav gap keep the
  header on one row at 1440 (73 px; eleven entries wrapped it to 121 px). About's agent section and the footer point
  there. Live on the next Pages build.
- **About page, D83** (`docs/specs/about-page.md`, M21): `/about/` and `/about.md`, "About" last in the nav and behind
  the wordmark's small line, the owner's Who and Why (`site/src/about/about.md`, hand-written, pinned by test), the
  pipeline as a telescope and the galaxy key as inline SVG (`Telescope.astro`, `GalaxyKey.astro`, stacked under
  1000 px), seven "for who" cards, the install commands under `#agents` (the home page lost its `<pre>`, the footer
  links there), live counts, `llms.txt` "Start here". No content change, no nightly needed: live on the next Pages
  build. Deviations in the spec's section 12.
- **Derive on push, D81** (`docs/specs/derive-on-push.md`, M19): `npm run nightly -- --stages derive` reruns the
  render block (digests, sources, indexes, graph) on committed content, no ingest, no LLM, no run report, and commits
  `content: derive <date> (<sha>)`. `nightly.yml` runs it on a push to main touching `pipeline/link|render|lib/**`,
  `schemas/**` or `config/**`, and by hand (stages `derive`). The galaxy hides the Code pill while `landed.json` has
  no `changes` key. Deviations in the spec's section 12.
- **Changes repo pills, D82** (`docs/specs/changes-repo-pills.md`, M20): `/changes/` has BCApps, AL-Go and BCQuality
  pills with counts, `?repo=` in the URL, "N of M shown" and kind counts that follow the filter; the D80 helpers live
  in `site/src/scripts/pills-core.ts`. No content commit. Deviations in the spec's section 12.
- **Week code changes, D80** (`docs/specs/week-code-changes.md`, M18): the this-week lens has Videos, Posts and Code
  pills (`#lens=landed&kinds=c`), the week's change pages grouped by kind with Breaking and Features open; the header
  pill reads "N new · M PRs"; "Changes" is in the nav; `/changes/week/`. The next nightly writes `landed.json` with a
  `changes` array (82 on 2026-10-08, 76 lighting a star). Deviations in the spec's section 12.
- **Roadmap link titles, D79** (`docs/specs/roadmap-link-titles.md`, M17): source pages and video Features tables
  print roadmap titles, not bare ids; source lists add area, status, GA and count, most-shown first. The next nightly
  rewrites 6 source and 61 video pages (no LLM). Deviations in the spec's section 12.

**Shipped 2026-10-07, live after the next good nightly:**
- **Review coverage, D77** (`docs/specs/review-coverage.md`, M15): pages without model text say `derived`
  (25,853 on a local render); every video, post and code change and the localization and digest narratives have an
  Opus review tied to the input hash (quotas `video_reviews`, `post_reviews`, `change_reviews`, `opus_reviews`). The
  backlog (about 615 videos, 600 posts, 1,080 changes, ~945 calls, ~$120) runs in the first unlimited nightly; a
  rejected review withholds the model text and marks the page `flagged`. Spec sections 12a and 12b.
- **Panel lists, D78** (`docs/specs/panel-lists.md`, M16): "Pick a localization" and "Pick a source" rows have a
  marker (localization dot, source kind) and the count of stars the lens lights; a `.g-list` row without a marker gets
  two columns. `node scripts/ui-sweep.mjs` after a galaxy change (RUNBOOK): 108 squeezed rows before, 0 after.
  Deviations in the spec's section 12.
- **Table columns keep their words, D74** (`docs/specs/table-columns.md`, M12): both phases on `dev/extract`. `td`
  wraps with `break-word`, markdown tables sit in `.table-scroll` and fill the width, pills never wrap; on
  `objects/table/32/` at 1280 Name/Type went from 89/76 to 136/99 px. The next nightly rewrites the 429 video pages
  with no verified evidence to a three-column Features table (no LLM). Deviations in the spec's section 12.
- **Atlas on pages, D75** (`docs/specs/atlas-on-pages.md`, M13): "Ask your agent" is one closing paragraph that
  names our call sections and sends agents to the atlas only for bodies and per-procedure edges; `bc-grounding`
  routes object-level callers to the observatory (plugin 0.2.1). The next nightly rewrites every object page once
  (text only, no LLM). Recount `git grep -l '^## Calls' origin/main -- content/objects` after it: expected 5,582
  (2,808 Called by); spec section 12.
- **Media rows, D73** (`docs/specs/media-rows.md`, M11): every video and post row in the galaxy panel is the title over
  the full width, then `[video|post] · source · date`, no star count. The source id rides in `landed.json`, `mb.top`
  and the layers `media`; the panel shows sources once the next nightly rewrites `data/graph/*`. Section 12 of the
  spec records the deviations.
- **Site size, D76** (`docs/specs/site-size.md`, M14): phases 1 and 2 on `dev/next`. The Pages check measures tar
  bytes (`scripts/site-size.ts`), with a table in the run summary, a warning from 800 MB and a failure from 900 MB;
  object pages lost their per-element scoping attributes and three repeated tags. Local build: tar 698.6 → 656.7 MB.
  Triggers, still open: tar bytes above **850 MB** start phase 3 (object markdown twins from GitHub raw, spec 4.4);
  above **900 MB** after that, or a bandwidth notice, means a new host (spec 4.5). Write the first CI number into
  spec section 12.
- **One version pill in the galaxy lens bar, D72** (`docs/specs/version-lens.md`, M10): both phases on `dev/next`.
  The seven "changed in BC<v>" pills are one pill for the remembered major plus a version menu with counts, labels
  from `config/versions.json`; the Objects atlas takes its majors from config; every printed version list goes
  through `versionRanges` ("BC24-26, BC28"). The next nightly rewrites about 25,400 object pages once (text only, no
  LLM): ship it on a night with no other content change. Section 12 of the spec records the deviations.
- **BC23 and BC24 history layout fix** (`pipeline/code/job.ts` `resolveApps`, `config/versions.json`): the first
  D62 backfill (run 37644205533) extracted those two majors without their base app, 1,406 objects instead of about
  9,000, because w1-23 and w1-24 keep it under `BaseApp/Source/Base Application` and a missing folder was only a
  warning. Configured paths are now candidate lists, a missing base app fails the item, and the code config is part
  of the code items' input hash, so the fix re-ran every code job through one `pillars=code unlimited=true` dispatch.
  The second run then kept the stale 23→24 and 24→25 diffs: derived files were keyed on commit and extractor only,
  which had not changed. `DERIVED_VERSION` 7 adds the object count to every derived input (`pipeline/code/diff.ts`),
  and a third dispatch rewrote them.
- **Source stage, D60** (`docs/specs/source-embed.md`, M5): phases 1 and 2 on main. Video pages play click-to-load
  with chapter seeking, post pages frame the blog when the nightly probe allows it (else a source card), evidence chips
  open the player at their second, list posters, mini-player, WordPress cards. Sections 13 and 14 of the spec record
  what was built and where it differs.
- **Code changes, D61** (`docs/specs/bcapps-pull-requests.md`, M6): every phase on main. Merged BCApps, AL-Go and
  BCQuality pull requests are pages under `content/changes/<repo>/<n>`, joined by exact file path to object pages,
  with "Recent changes" on object pages, a digest section, search, graph and `whats_new`. Section 12 of the spec records
  the deviations.
- **Galaxy views, D66** (`docs/specs/galaxy-views.md`, M8): all five phases on main. The galaxy on the Learn tree
  and namespace plots with ports and a lens bar (D), the neighbourhood explorer at `/neighbourhood/` (C), question
  entries on the home page, Tilt with namespace tiles as level of detail (A). The new summary, `landed.json` and
  `graph/layers/` appear with the first nightly that reaches the graph stage; until then the renderer reads the old
  summary and hides Tilt. Section 9 of the spec lists sizes and every deviation.
- **Nightly memory, D69**: the item-loop leak was the executor's idle workers multiplying one-second fallback timers
  while one long stage ran (70 MB to 8 GB in four minutes). Fixed with one shared timer and a test that counts them.
  If a run dies on memory again, read the heartbeat lines first (`gh run view <id> --log | grep heartbeat:`).

**M0 bootstrap is complete** (2026-10-06). The Mini runs the nightly as `bcobs` through the `macmini-bcobs` runner
(labels `self-hosted,macOS,ARM64,bcobs`, system LaunchDaemon). First nightly: 40 sources, 9,522 items discovered,
zero LLM calls, committed by github-actions[bot]; a second nightly found 0 changes and still committed its heartbeat.
Pages rebuilds after every successful nightly: https://waldo1001.github.io/waldo.BCObservatory/.
`mini-selfcheck.yml` passed on the Mini (Haiku ping with apiKeySource `none`, caption fetch, vault fetch).
Gates: `npm run typecheck`, `npm test` (61 tests), `npm run validate:sources`, `npm run lint:workflows`.

Deliberate deviations from PLAN, all small:
- Docs and guidelines share `pipeline/ingest/git-content.ts` (keys = repo path, input hash = git blob id); no per-file
  `docs.ts` / `guidelines.ts`. `TOC.md` and `includes/` are not items.
- yt-dlp and deno are installed per user for `bcobs` (`35-tools.sh`, uv tool) because brew would upgrade
  openssl@3/sqlite/readline/xz/ca-certificates that node@22 and Jarvis use. `10-brew.sh --brew-all` restores the plan.
- Headroom-to-quota mapping lives in `config/budget.json` (`headroom_scale`); only LLM quotas scale.
- Six WordPress.com-hosted blogs use `public-api.wordpress.com/wp/v2/sites/<host>/posts` (their `/wp-json` 404s);
  dvlprlife.com is feed-only.

## Next steps (M1, in order; agreed with the owner 2026-10-06)

1. ~~**Budget metering (D17).**~~ Done 2026-10-06 (`04f191d`). `llm.ts` meters every call's `total_cost_usd` and
   per-model tokens; the nightly allows `min(night cap - spent today, week cap - spent over 7 run dates)` and
   `complete()` throws `LlmBudgetExhausted` once that is used up. Caps agreed with the owner: **$10/night, $50/week**
   (API-equivalent dollars, `config/budget.json` `spend_caps`). The usage-guard token (D16) is added on top later,
   when a source exists that does not silently expire.
2. ~~**Stage executor**~~ Done 2026-10-06: `pipeline/orchestrator/execute.ts` runs planned items through every stage
   that has a handler in `pipeline/orchestrator/stages.ts` (empty until a pillar lands), charging each quota once
   per item. Stops: hard stop (06:35 local, or the window length for a daytime dispatch), `llm_calls_max`, spend
   cap, re-guard skip every 25 calls; infra errors abort, item errors `fail()` with backoff. Report: `execution`.
3. **Videos first (D18).** Partly done 2026-10-06:
   - Done: seed import (`npm run seed:videos`, 84 VTTs → `data/captions/microsoft/`, ids via `[videoId]` or
     `data/overrides/seed-videos.yaml`), Haiku extraction (`pipeline/extract/video.ts`, thinking off for facts),
     Sonnet summary (`pipeline/summarize/video.ts`), `linked` + `published` (`pipeline/render/video.ts`) →
     `content/videos/<videoId>.md` + `content/videos/llms.txt`. Registered in `pipeline/orchestrator/stages.ts`, so
     the nightly now works through the 82 remaining seed videos (12/night in reduced mode, ~$0.075 each).
   - A status stands only when its verbatim evidence states it; launch-event videos mostly say "introduced", so
     their features read "status not stated" until roadmap stubs (step 5) supply real status.
   - Done (same day): Microsoft channel reconcile (weekly `yt-dlp --flat-playlist`, 444 more videos, undated until
     `fetched`), caption fetch (`pipeline/caption/{ytdlp,fetch}.ts`, official tier only), Astro routes `/videos/`,
     `/videos/<id>/`, `/videos/<id>.md`, `/videos/llms.txt`, root `llms.txt` Sections block.
   - Done since: Opus `reviewed` handler; community video captions (D25); weekly `no-captions` retry (D25).
   - Nightly per night (reduced mode, no usage token): 40 captions (2 yt-dlp calls each, 5-10 s apart), 12 videos
     extracted + summarized + published. 82 seed + 444 reconciled videos ≈ 6 weeks at that pace; full quotas halve it.
   - Measured (claude -p, 2.1.287): Haiku extraction 9-min video $0.036 / 27 s, 35-min video $0.16 (4 calls);
     Sonnet summary ~$0.04. `npm run nightly -- --pillars video --only yt-microsoft --quota 2 --no-guard` is the
     local end-to-end check.
   - ~~Known gaps: `check:leak` and `validate:content` scripts point at files M0 never wrote.~~ Written (D24).
4. ~~Learn docs~~ Done 2026-10-06 (narratives fill in nightly):
   - `fetched` (`pipeline/fetch/git-page.ts`): Learn metadata for all 8,050 pages from the blobless mirrors, quota-free,
     batch blob prefetch. 1,146 pages carry `ms.search.form` (2,152 ids) for the M2 docs↔objects join.
   - Topic hubs (`pipeline/link/toc.ts`, `pipeline/render/topic.ts`): 605 hubs from both TOC.md files (depth ≤ 4,
     ≥ 2 pages), galaxy system by taxonomy alias, `content/topics/**` + `content/topics/llms.txt`, site routes.
     Generated reference pages (methods, diagnostics, API reference) are not in TOC hubs; they belong to M2.
   - `extracted` (`pipeline/extract/docs.ts`): Haiku, 8 pages per call via executor batch handlers, $0.008/page;
     reference pages declined. 3,385 pages to go.
   - Hub narratives (`pipeline/summarize/hub.ts`): Sonnet from member summaries + child narratives, ready at 80%,
     input-hash refresh, `hub_refresh` quota; $0.045/hub.
   - Opus `reviewed` for flagged videos (`pipeline/review/video.ts`), $0.13-0.16/review. Hub reviews (D07) not yet.
5. ~~Roadmap feature stubs and first Opus-reviewed hubs~~ Done 2026-10-06:
   - `pipeline/render/feature.ts`: 80 feature pages from the Microsoft 365 roadmap snapshot (`content/features/`,
     `schemas/frontmatter.feature.json`, site routes, `features/llms.txt`); status/wave/dates deterministic.
   - `pipeline/review/hub.ts`: Opus reviews hub narratives within `opus_reviews` ($0.10/hub); reviewed pages drop
     the machine-generated badge, rejected narratives are withheld (D21).

## Next (proposed, M1 wrap-up then M2)

- ~~Link roadmap features to the videos and Learn pages that cover them~~ Done 2026-10-06 (D22):
  `pipeline/link/roadmap.ts` (matcher, quota `roadmap_links`, nightly post-pass after stage execution),
  `pipeline/link/coverage.ts` (read side), feature pages get "Covered by" + `links.videos`/`links.learn`, video
  features get `status_source: roadmap` and `roadmap_ids`. State after the Opus review (2026-10-06, 536 units): 61 of 80
  features covered, 29 of 64 videos and 53 Learn pages linked, 142 of 572 video features take roadmap status. Opus
  dropped 40 of 185 video links and 57 of 120 Learn links ($4.74 for 66 features). The nightly re-renders published
  feature and video pages after linking. `npm run link:roadmap -- --videos N --docs N` measures on a temp copy.
  Opus review of the links (D23, `pipeline/review/coverage.ts`, quota `coverage_reviews`) runs after linking;
  `npm run link:roadmap -- --review N` prints every dropped link. Follow-ups: Learn "what's new" pages hit the
  3-per-ref cap and link nothing (they cover dozens of features legitimately); ~3,400 Learn pages still to extract
  will cost ~$9 of linking spread over nights.
- ~~`check:leak` + `validate:content` scripts~~ Done 2026-10-06 (D24): `pipeline/validate/{leak,content}.ts`, nightly
  gate before every commit, PR CI steps.
- ~~Community video captions into the vault~~ Done 2026-10-06 (D25): the vault was already cloned on the Mini with its
  deploy key (`infra/mini/60-vault.sh`, M0 gate 6), so no new security step. Community videos (7 channels, ~105
  discovered) now compete for the `captions`/`video_extract` quotas newest first. Weekly `no-captions` retry done.
- Weekly retry for `no-captions` skips; usage-guard token (D16) when a durable source exists.
- M2 code pillar, in progress (D27, D28): extractor (`pipeline/code/extract.ts`), code job
  (`pipeline/code/job.ts`, code items in the nightly, quota `code_jobs`), snapshots 28/29/30 W1 + overlays in
  `data/code/`, version and country diffs, timelines, deprecation radar (`pipeline/code/diff.ts`, nightly post-pass).
  Docs↔objects + drift report done (D29, `pipeline/code/docs-objects.ts`, first-party apps snapshot).
  Object pages (16,425) and localization pages (22) with site routes done (D30).
  BE/NL narratives wired (D31); they appear once 80% of their Learn LocalFunctionality pages are extracted (the
  unlimited run is working through the docs backlog). Next: deprecation radar in the weekly digest (M4), object family
  narratives, Learn reference pages (methods, diagnostics) as object hubs.
- M3 graph + galaxy home page done (D37); design brief generated (D38). Claude Design handoff in design/ (tokens.json,
  HANDOFF.md) and applied (D42): tokens as CSS variables, one page skeleton for every page type, version timeline and
  member change markers on objects, single-column country diff, source flight path, the galaxy (spiral layout, three
  zoom levels, side panel, keyboard, reduced motion), home and search. Still undesigned (stand-ins in
  site/src/lib/tokens.ts): light badges, mixed tier, video/blog/roadmap evidence, roadmap status, filters, galaxy
  level 4 (star to page). A visual pass by the owner on the live site is the next step.
  Source footprints and coverage heatmap done (D39).
- Galaxy captions follow zoom and the header search lights up the galaxy (D44). Relations between AL objects are
  derived and on every object page (D45), with a one-hop neighbourhood diagram (`site/src/components/Neighbourhood.astro`,
  inline SVG at build time from data/code/relations); a 2-hop view is deferred because it would ship the 6.9 MB
  relations file to the browser (per-type shards would fix that). Objects index + Ctrl+K finder (D46), the codebase atlas on /objects/ (D47), the version lens + deprecation radar
  pages (D48), the event explorer and the country heatmap (D49) are done: the 2026-10-07 plan is complete except the
  deferred 2-hop neighbourhood. Localization narratives tell the story per area with links into the code (D50);
  BE and NL are written, the other 20 countries follow in the nightly (~$0.18 each). A country's own objects now have
  pages too (D52). The site's bytes were then trimmed (D53): one shared stylesheet instead of the same CSS inlined
  into 20,744 pages, `is:global` styles on the three components whose scoped `data-astro-cid-*` attributes cost
  10-31% of a page, and the version lens split into one page per transition behind a 15 KB index. 364 MB of real
  bytes, 18,067 pages, 17 s build.
- ⚠️ Two nightlies failed on 2026-10-07 (runs 37547681311 and 37551643134), both the same way: the heap ran out,
  the wrapper restarted as designed, and the recovery commit hit the leak gate on
  `content/posts/bertverbeek-nl/1252.md`. **Nothing leaked to main** — the gate did its job, and the checkpoint
  gate also correctly skipped the one checkpoint that would have carried it. Three fixes went in afterwards:
  - **D55** the leak: the page, not the serialized extraction, is now what the repeat guard checks, and the byline
    moved between the title and the summary so the post's own words are never adjacent to ours. Note that pages
    already published keep the old layout until their item is re-published; they are leak-clean either way.
  - **D56** the OOM bound: a model call's output is capped at 64 MB, so a runaway `claude -p` stream fails that
    call instead of the run. This is a bound, not a diagnosis.
  - **D55** instrumentation: every post-loop phase logs `phase <name>: <ms>, heap <n> MB, rss <n> MB`. Both OOMs
    grew from ~133 MB at the last checkpoint to 8 GB about 6m45s later with nothing logged in between.
  **Run 37554068906 then succeeded** (02:34Z) after 5 OOMs and all 6 process attempts, each restart recovering and
  committing its work — which is the point of D55: the fault is now survivable. The `phase` lines located it:

  - **The OOM is in the item loop, not the post-loop.** Every one of the 5 OOMs follows a `committed: ... checkpoint
    N` line with no phase line in between. All the post-loop probing was in the wrong place.
  - **The heap grows ~120 MB per checkpoint, and checkpoints were ~6 s apart** (catch-up advances 50 item stages
    that fast): 654 → 775 → 905 MB in process 3, 703 → 813 → 935 MB in process 4, 704 → 830 MB in process 5. That
    is ~20 MB per second of item-loop execution, and 390 s of it is 7.8 GB — which is exactly the gap between the
    last logged checkpoint and the 8 GB OOM, every time.
  - **D56 was the wrong guess.** The output cap never fired once (0 hits in the log), so the `claude -p` stream was
    not the cause. The cap is still a sound bound; it is not the fix.
  - Ruled out by measurement: every post-loop phase (peak 1444 MB heap / 1749 MB rss, and the heap *falls* after
    roadmap-links), module-level caches in `validate/leak.ts` (there are none), and the id Sets in `execute.ts`
    (`touched`, `ended`, `visited`, `inBatch` hold short strings).
  - **Still not found** (2026-10-07, second round). Also ruled out by measurement since: both code job types
    (Code History 669 MB peak, BCApps with country apps 763 MB), oversized posts (the largest is 13k words) and the
    repeat scrub (one pass). Every dying process does a burst of cached work, then goes silent for ~6.5 minutes
    inside stages the heap guard cannot interrupt (the guard only checks between stages). **D59 added the
    instrumentation that will name it:** the item loop logs `heartbeat: heap …; N in flight: <item> <stage> <s>`
    every 30 s and whenever the heap crosses a gigabyte. Read the heartbeats of the next failing run before anything
    else; the climb lists the stage and the items in flight at each gigabyte. It did not recur in the light runs
    since, which says only that there was too little work to trigger it.
  - The checkpoint push that lost a race to a concurrent push used to stage files without committing them, so the
    rebase met a dirty index. Fixed in D58 (push-only does not stage, rebase autostashes), with a real-git test.

## This round (2026-10-07 afternoon, D58-D64)

- **Countries include their extension apps (D58).** DK and IN were empty because their whole localization is apps
  under `src/Apps/<CC>/`; on BC29, India 0 → 1,262 objects, Denmark 0 → 431, plus every other country's apps (and
  NA's for US/CA/MX). `EXTRACTOR_VERSION` 3 re-runs the code items, bcapps 29 and 30 first.
- **Catch-up ended after 2026-10-06** (D58): the backlogs were drained and the day had cost $68.75.
- **Older majors as diffs, BC23-27 (D62)**, from the sandbox history, kept as a skeleton plus a cached full copy;
  diffs are now compact (a changed member is a delta). At code_jobs 1 a night the history lands over ~8 nights.
- **Hybrid search in the MCP package (D63)**: `bc-observatory@0.2.0` published 2026-10-07 by the owner's go (run
  37585872702, signed provenance) and checked from the registry: a real MCP client on `npx -y bc-observatory@0.2.0`
  downloaded the pinned model, passed the SHA-256 checks and answered "who is allowed to see what" with the
  permission sets as keyword + semantic, in 3 s including the download.
- **Evidence chips (D64)** on feature pages; the flagged review badge no longer reads "unreviewed".
- **2-hop neighbourhood (D59)** on object pages, from per-type shards built at site build time.
- **yzhums.com** is in `sources.yaml` as `yzhums-com` with `enabled: false`: nothing is ingested and no page exists.
  It goes on only after Yun Zhu agrees (derived mode: set `enabled: true`; full text: also `full_text: true` and a
  consent block). The consent request draft is with the owner.
- **Jarvis budget handshake:** skipped by the owner for now (2026-10-07).
- Topic links (D43): videos and posts link to topic hubs, 40 calls a night (all of them during catch-up);
  `npm run link:topics -- --videos N --posts N` samples on a temp copy. Opus reviews them (D54, quota
  `topic_reviews` 15): `npm run review:topics -- --data <dir>` reviews a sample the linker wrote and prints every
  verdict with its reason. A dropped link is gone from the topic pages and the galaxy. The first nightly to produce
  `data/links/topics.json` has not finished yet, so the review starts on the run after it.
- M4 weekly digest + RSS done (D36).
- M4 MCP server + plugin done (D35). npm: bc-observatory@0.1.0 published 2026-10-06 (first publish by
  hand, `npx bc-observatory` verified from the registry). Later releases: bump packages/mcp/package.json and dispatch
  `publish-mcp` (trusted publisher, D40; it needs "Allow npm publish" ticked on npmjs.com). Announcement drafts: docs/announcement/v0.1-draft.md.
- M3 blogs pillar done (D34): 601 discovered posts flow through fetched (vault) → extracted (Haiku) → published.
- Catch-up mode until 2026-10-10 (D41): every scheduled run (00/06/12/18 UTC) is unlimited. To end it early, set
  `catch_up.until` to a past date in config/budget.json.
- 2026-10-06 evening: unlimited nightly on the Mini, concurrency 6, batch commits every 50 item stages. Two fixes
  made it actually parallel: incremental checkpoint leak gate (D26) and workers that stay until the plan is drained
  (D33). After it ends, the scheduled 01:00 nightly runs with normal caps.


## Execution notes (2026-10-06)

- The executor runs `concurrency` items at once (`config/budget.json`, default 3; `--concurrency N`). yt-dlp
  stages use the `youtube` lane: one item at a time, and a worker never waits on a busy lane (the item is parked and
  comes back first), so caption fetches overlap LLM work. `--night-cap` / `--week-cap` override the caps for one run.
- Background runs started from a Claude Code session die with the session; start long manual runs with `nohup`.

## Facts you will need

- Pushes made with `GITHUB_TOKEN` never trigger other workflows. The nightly's commits therefore reach Pages through
  `workflow_run` in `pages.yml`, and `pr-validate` does not run on bot commits.
- Owner-run provisioning output can arrive late in the chat; check timestamps before reacting to an old failure.
- Mini timezone is America/Los_Angeles; the pipeline always runs with `TZ=Europe/Brussels`. FileVault is off.
  uv 0.12.23 is installed via brew. jq is Apple's `/usr/bin/jq`.
- Jarvis has no refresh for its usage token (static env value). A login-scoped token will expire; the guard then
  runs `reduced`. M0 makes zero LLM calls, so the usage token can wait for M1.
- Astro 7 needs Node >= 22.12. This laptop defaults to Node 20 (pipeline is fine on 20); build the site with
  `~/.nvm/versions/node/v22.23.1/bin` on PATH.
- Mac Mini: `ssh mac-mini` (over Tailscale, user waldo), M4/24 GB, macOS 26.5, never sleeps. Has node 22
  at `/opt/homebrew/opt/node@22/bin` (keg-only; not on PATH in non-login shells), pm2, brew, git, gh (expired login),
  the Jarvis runner `~/actions-runner-jarvis` (labels `self-hosted,macmini`). Still missing until the gated steps run: `claude`, yt-dlp, deno for `bcobs` (uv is installed; ffmpeg is not needed).
  Jarvis uses the same Claude subscription (`CLAUDE_CODE_OAUTH_TOKEN`) and backs off above 60% / 70%.
- Reusable code: `/Users/waldo/SourceCode/Community/msdyn365-2026-release-wave-2` (see PLAN section 8).
- Research with URLs and numbers: `docs/research/2026-10-06-research-findings.md`.
- Owner rules: everything on the Claude subscription (never the API), owner approves every security/authentication
  step, be autonomous otherwise, GitHub Pages hosting, galaxy visualization, kick-ass UI via a Claude Design brief
  generated from real data (M3).
- Open owner decision: the release-wave repo is public with full transcripts and LLM cache committed.
