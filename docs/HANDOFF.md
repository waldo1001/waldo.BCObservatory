# Handoff — state of BC Observatory on 2026-10-06

Written at the end of the planning session so a fresh Claude Code session in this repository can continue
without the original conversation. Read in this order: `AGENTS.md` → this file → `docs/PLAN.md` →
`docs/DECISIONS.md` → `docs/research/2026-10-06-research-findings.md`.

## Where things stand

Milestone **M0 bootstrap** is in progress. Nothing is committed yet (the clone was empty; all files below are
untracked on `main`). Everything written so far passes `npm run typecheck` and `npm run validate:sources`.

Done:
- Root: `package.json` (npm workspaces `site`, `packages/*`; node >= 20 locally, 22 on the Mini/CI), `tsconfig.json`,
  `.gitignore`, `.nvmrc`, `.editorconfig`, `LICENSE` (MIT), `LICENSE-CONTENT` (CC BY 4.0), `CONTENT-NOTICE.md`,
  `CLAUDE.md`, `AGENTS.md`, `README.md`, `package-lock.json` (55 packages).
- `config/`: `taxonomy.json` (20 galaxy systems), `versions.json` (28/29/30), `countries.json` (BE, NL first),
  `models.json` (haiku/sonnet/opus roles), `budget.json` (nightly window, 60/70 guard, quotas), `tooling.json`.
- `schemas/`: `sources.json`, `manifest-item.json`, `frontmatter.base.json`, `graph.json`, `al-object.json`, `al-diff.json`.
  Per-type frontmatter schemas (`frontmatter.<type>.json`) and `schemas/llm/*` are NOT written yet.
- `sources.yaml`: 40 seed sources (9 official, 23 blogs in derived mode, waldo.be opted in, 8 channels, 1 discovery).
- `pipeline/lib/`: `paths.ts`, `fsx.ts`, `text.ts`, `log.ts`, `schema.ts` (Ajv 2020 + formats), `config.ts`.
- `pipeline/validate/`: `sources.ts` (schema + policy rules), `sources-cli.ts`.
- `docs/`: `PLAN.md` (the approved plan), `DECISIONS.md` (D01–D14), `RUNBOOK.md`, `research/`.

Not started: `pipeline/lib/llm.ts` port, manifest/queue/budget libs, ingest modules, orchestrator, `infra/mini/*`,
workflows, `site/` (Astro), `packages/mcp`, `plugin/`, `tests/`, the private vault repo, Mini provisioning.

## Next steps (M0, in order)

1. First commit of the scaffold (ask the owner; `main` is the default branch and still empty).
2. `pipeline/lib/llm.ts`: port from
   `/Users/waldo/SourceCode/Community/msdyn365-2026-release-wave-2/pipeline/lib/llm.ts` with three fixes
   (real model attribution from `modelUsage` by output tokens, drop the API backend, cache stores input refs + hashes;
   `LLM_CACHE_DEBUG=1` keeps prompts). Cache root = `LLM_CACHE_DIR` from `pipeline/lib/paths.ts` (the vault). Never `--bare`.
   Also port `lib/quotes.ts` and `01-clean-vtt` → `pipeline/caption/vtt-clean.ts`, with tests under `tests/`.
3. `pipeline/lib/{manifest,queue,budget}.ts` per PLAN 4.2/4.3/4.5; `infra/mini/usage-guard.ts`
   (GET https://api.anthropic.com/api/oauth/usage, header `anthropic-beta: oauth-2025-04-20`, Bearer login-scoped token;
   check `/Users/waldo/SourceCode/Community/waldo.Jarvis/specs/644-*.md` for the exact contract).
4. `pipeline/ingest/*.ts` (docs, code, guidelines, youtube RSS, blogs, roadmap; deterministic, no LLM) and
   `pipeline/orchestrator/nightly.ts` doing guard → ingest → run report → commit.
5. `infra/mini/00..80-*.sh` + LaunchDaemon plist + `run-nightly.sh` (PLAN 4.5). Gates that need the owner each time:
   sudo (user `bcobs`, daemon, pmset), `claude setup-token`, usage token, runner registration token, vault deploy key.
6. Workflows (PLAN 4.4): `nightly.yml`, `pages.yml`, `pr-validate.yml`, `runner-health.yml`, `mini-selfcheck.yml`;
   `scripts/setup-github.sh` (port from prev, extend: Pages source = Actions, fork approvals, squash, no secrets).
7. `site/` placeholder Astro project that builds and deploys; then M1 (seed import of the 84 VTTs from
   `prev/data/transcripts/raw`, Microsoft channel captions, Learn ingest, roadmap, first hubs).

## Facts you will need

- Mac Mini: `ssh mac-mini` (over Tailscale, user waldo), M4/24 GB, macOS 26.5, never sleeps. Has node 22
  at `/opt/homebrew/opt/node@22/bin` (keg-only; not on PATH in non-login shells), pm2, brew, git, gh (expired login),
  the Jarvis runner `~/actions-runner-jarvis` (labels `self-hosted,macmini`). Missing: `claude`, yt-dlp, ffmpeg, deno, uv.
  Jarvis uses the same Claude subscription (`CLAUDE_CODE_OAUTH_TOKEN`) and backs off above 60% / 70%.
- Reusable code: `/Users/waldo/SourceCode/Community/msdyn365-2026-release-wave-2` (see PLAN section 8).
- Research with URLs and numbers: `docs/research/2026-10-06-research-findings.md`.
- Owner rules: everything on the Claude subscription (never the API), owner approves every security/authentication
  step, be autonomous otherwise, GitHub Pages hosting, galaxy visualization, kick-ass UI via a Claude Design brief
  generated from real data (M3).
- Open owner decision: the release-wave repo is public with full transcripts and LLM cache committed.
