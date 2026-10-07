# Handoff — state of BC Observatory on 2026-10-06 (M0 complete)

Written at the end of the planning session so a fresh Claude Code session in this repository can continue
without the original conversation. Read in this order: `AGENTS.md` → this file → `docs/PLAN.md` →
`docs/DECISIONS.md` → `docs/research/2026-10-06-research-findings.md`.

## Open specs, not yet implemented (2026-10-07)

- **Discovery: find the right hub, explain every field, point onward**: `docs/specs/discovery.md`, decision D65,
  PLAN milestone M7. Status: tranche 1 (sections 4.1-4.5: field explanations, hubs joined to their objects, tables
  inheriting Learn links through their pages, first-party apps in their system) is built and committed on `dev/next`,
  not yet merged or run by a nightly; deviations in section 8.1 of the spec. Tranche 2 (sections 5.1-5.5: search
  ranks hubs first, groups results under tabs, shows path labels in the galaxy panel and the MCP) is committed on
  `dev/next` too, deviations in section 8.2. Tranches 3-4 (Related and app pages, page controls) have no code yet.

- **BC Code Atlas as a grounding partner**: `docs/specs/code-atlas.md`, decision D67, PLAN milestone M9. Status: phase
  0 on branch `dev/spec` (not yet merged), spike and later phases open, nothing installed. Stefan Maron's
  bc-code-atlas (hosted MCP: bodies, call graph, semantic code search) becomes the companion the plan promised in D10:
  the plugin connects it, a `bc-grounding` skill fixes who answers what, every object page names the
  `bcatlas_resolve_node` call that opens it, and the nightly reproduces the call graph from our own checkouts with the
  pinned graphify-al fork (edges only, EXTRACTED only, `data/code/graph/<major>/calls.json`). Phase 0 (section 6,
  tasks 1-3) needs no infrastructure and is built on `dev/spec`: the plugin (0.2.0) connects bc-code-atlas, the
  `bc-grounding` skill, and the "Ask your agent" block in `pipeline/render/object.ts`. Still owed for phase 0: tell
  Stefan (decision 12) before it ships, and one commit that re-renders the object pages outside a live nightly. The
  spike (task 4) must fill section 7 before phase 2; installs (Mini and Mac, graphify-al CLI only, no atlas servers)
  are section 4.7. Until phase 2 lands, object pages have no Calls / Called by.

## Where things stand

**Shipped 2026-10-07, live after the next good nightly:**
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
