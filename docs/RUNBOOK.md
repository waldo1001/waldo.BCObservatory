# Runbook

Operational notes. Provisioning lives in `infra/mini/`; the nightly in `.github/workflows/nightly.yml`.

## Daily

- The nightly runs at 00:00 UTC on the Mac Mini runner (label `bcobs`). Check the run report in
  `data/manifest/_runs/<date>.json` or the workflow summary.
- `runner-health.yml` opens a pinned issue when the runner is offline or the nightly failed; it closes it again.

## Provisioning the Mac Mini

Run from the laptop; each script is idempotent and prints what it will do before any gated step.

```bash
infra/mini/00-preflight.sh        # read-only report
infra/mini/10-brew.sh             # uv only by default (no shared-library upgrades)
infra/mini/20-worker-user.sh      # sudo: creates bcobs
infra/mini/30-claude.sh           # installs claude for bcobs; asks for the setup-token (owner pastes)
infra/mini/35-tools.sh            # sudo: yt-dlp + deno for bcobs via uv (keeps Jarvis's brew libraries untouched)
infra/mini/40-runner.sh <token>   # registration token from: gh api -X POST repos/waldo1001/waldo.BCObservatory/actions/runners/registration-token -q .token
infra/mini/50-daemon.sh           # sudo: LaunchDaemon com.bcobservatory.runner
infra/mini/60-vault.sh            # clones the private vault with the deploy key
infra/mini/70-power.sh            # sudo: pmset -a autorestart 1
infra/mini/80-verify.sh           # end-to-end self-check
```

## Budget guard

`npm run guard -- --dry-run` prints the decision as JSON: `go`, `skip` (a window at or above 60 % for 5 hours or
70 % for 7 days) or `reduced` (usage unreadable). Without `--dry-run` it exits 0 / 3 / 4. Headroom is the number of
percentage points left before the nearer limit; `config/budget.json` maps it to a quota factor (`headroom_scale`).
Only LLM quotas scale; captions and code jobs do not. The token is `BCOBS_USAGE_OAUTH_TOKEN` (scope `user:profile`);
a `claude setup-token` token returns `unavailable:scope`.

## Recovery

- Nightly aborted mid-run: the next run validates and commits the partial tree first ("recover partial run").
- Runner offline: `ssh mac-mini 'sudo launchctl kickstart -k system/com.bcobservatory.runner'`.
- Budget guard says `unavailable`: the run continues in `reduced` mode (half quotas). Check the usage token in the
  env file; see `docs/PLAN.md` section 4.5.
- A community author asks for removal: set `enabled: false` (or delete the entry) in `sources.yaml`; the next nightly
  removes derived pages; rewrite history on request with `git filter-repo` on the vault.
