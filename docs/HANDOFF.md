# Handoff — state of BC Observatory on 2026-10-06 (end of session 2)

Written at the end of the planning session so a fresh Claude Code session in this repository can continue
without the original conversation. Read in this order: `AGENTS.md` → this file → `docs/PLAN.md` →
`docs/DECISIONS.md` → `docs/research/2026-10-06-research-findings.md`.

## Where things stand

Milestone **M0 bootstrap**: all code is written and committed (session 2, 2026-10-06). Gates: `npm run typecheck`,
`npm test` (61 tests, no network, no LLM), `npm run validate:sources`, `npm run lint:workflows`.

| Step | State | Where |
|---|---|---|
| 1 scaffold commit | done, pushed | `3c5e31c` |
| 2 `llm.ts` port (+ `quotes.ts`, `caption/vtt-clean.ts`) | done; one real Haiku ping verified apiKeySource `none` | `pipeline/lib/llm.ts`, `npm run llm:ping` |
| 3 manifest / queue / budget + usage guard | done | `pipeline/lib/{manifest,queue,budget}.ts`, `infra/mini/usage-guard.ts` |
| 4 ingest + orchestrator | done; live dry run: 40 sources, 0 failures, about 9.5k items in 9 s | `pipeline/ingest/*`, `pipeline/orchestrator/nightly.ts` |
| 5 Mini provisioning scripts | written; `10-brew` ran (uv only); gated steps 20-80 not run | `infra/mini/*`, `docs/RUNBOOK.md` |
| 6 workflows + `setup-github.sh` | written; settings not applied yet | `.github/workflows/*`, `scripts/setup-github.sh` |
| 7 placeholder site | builds locally on Node 22 | `site/` |

Deliberate deviations from PLAN, all small:
- Docs and guidelines share `pipeline/ingest/git-content.ts` (keys = repo path, input hash = git blob id); no per-file
  `docs.ts` / `guidelines.ts`. `TOC.md` and `includes/` are not items.
- yt-dlp and deno are installed per user for `bcobs` (`35-tools.sh`, uv tool) because brew would upgrade
  openssl@3/sqlite/readline/xz/ca-certificates that node@22 and Jarvis use. `10-brew.sh --brew-all` restores the plan.
- Headroom-to-quota mapping lives in `config/budget.json` (`headroom_scale`); only LLM quotas scale.
- Six WordPress.com-hosted blogs use `public-api.wordpress.com/wp/v2/sites/<host>/posts` (their `/wp-json` 404s);
  dvlprlife.com is feed-only.

## Next steps (M0, in order)

1. Owner: apply `scripts/setup-github.sh --yes --vault` (or approve it being run): Pages from Actions, GitHub-owned
   actions only, read-only token, fork PR approval, squash only, private vault repo.
2. Owner, in a terminal (sudo password, browser for the token), from the repo root:
   `infra/mini/remote.sh --sudo 20-worker-user.sh --yes` (prints the vault deploy key; add it with write access),
   `claude setup-token`, `... 30-claude.sh --yes` (paste at the hidden prompt), `... 35-tools.sh --yes`,
   `... 40-runner.sh "$(gh api -X POST repos/waldo1001/waldo.BCObservatory/actions/runners/registration-token -q .token)" --yes`,
   `... 50-daemon.sh --yes`, `... 60-vault.sh --yes`, `... 70-power.sh --yes`, then `... 80-verify.sh`.
3. Dispatch `nightly.yml` once (`stages: ingest`), check the run report commit and the Pages deploy, then let the
   schedule take over. M0 is done when the runner is online, a nightly commits a heartbeat and Pages serves the site.
4. M1: seed import of the 84 VTTs, Microsoft channel reconcile + captions, video extract/summarize, Learn fetched
   stage + topic hubs from `TOC.md`, roadmap feature stubs, first Opus-reviewed hubs.

## Facts you will need

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
