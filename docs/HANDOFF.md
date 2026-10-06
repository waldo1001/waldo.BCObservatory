# Handoff — state of BC Observatory on 2026-10-06 (M0 complete)

Written at the end of the planning session so a fresh Claude Code session in this repository can continue
without the original conversation. Read in this order: `AGENTS.md` → this file → `docs/PLAN.md` →
`docs/DECISIONS.md` → `docs/research/2026-10-06-research-findings.md`.

## Where things stand

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
   - Open: Opus `reviewed` handler (flagged videos wait at `linked`); community video captions (need `check:leak`,
     D08); `no-captions` skips are terminal for now (PLAN wants a weekly retry).
   - Nightly per night (reduced mode, no usage token): 40 captions (2 yt-dlp calls each, 5-10 s apart), 12 videos
     extracted + summarized + published. 82 seed + 444 reconciled videos ≈ 6 weeks at that pace; full quotas halve it.
   - Measured (claude -p, 2.1.287): Haiku extraction 9-min video $0.036 / 27 s, 35-min video $0.16 (4 calls);
     Sonnet summary ~$0.04. `npm run nightly -- --pillars video --only yt-microsoft --quota 2 --no-guard` is the
     local end-to-end check.
   - Known gaps: `check:leak` and `validate:content` scripts point at files M0 never wrote.
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
- `check:leak` + `validate:content` scripts (M0 placeholders), then community video captions into the vault (D08).
- Weekly retry for `no-captions` skips; usage-guard token (D16) when a durable source exists.
- M2 code pillar: tree-sitter-al extractor, 28/29 W1 + country overlays, docs↔objects via `ms.search.form`
  (1,146 pages, 2,152 ids already recorded), object hubs for the generated reference pages.

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
