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
3. **Videos first (D18).** Seed import of the 84 VTTs from `prev/data/transcripts/raw` (`pipeline/caption/import-seed.ts`,
   46 carry `[videoId]`, 38 need id resolution + an override map), Microsoft channel reconcile
   (`yt-dlp --flat-playlist`) + caption fetch, Haiku extraction (port `prev/pipeline/02-extract`), quote check,
   Sonnet summary, video pages in `content/videos/` + their `llms.txt` section.
4. Learn docs: fetched stage (frontmatter, `ms.search.form`), topic hubs seeded from `TOC.md`, hub narratives from
   member summaries.
5. Roadmap feature stubs (deterministic) and first Opus-reviewed hubs; unreviewed pages ship with a badge.

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
