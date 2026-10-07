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

## Source stage previews (D60)

- The nightly's `preview-probe` phase GETs up to `quotas.preview_probes` (80) published posts with no record or a
  record older than `preview_ttl_days` (30); a failed probe is retried after 3 days and keeps the record it had.
  Records live in `data/preview/posts/<source>/<key>.json`, the host summary in `data/preview/hosts.json`. The run
  report's `previews` field counts them; a host whose framing went from allowed to refused is named in the plan note.
- Backfill or re-probe outside the nightly: `npm run probe:previews -- [--limit N] [--source id] [--force]`. It
  writes records only, unless a vault checkout is present: a render without the vault skips the repeat check (D55).
  The next nightly renders every post whose page preview no longer matches its record (`pendingPreviewPages`).
- Channel avatars (`data/preview/channels.json`) are asked from yt-dlp once per channel every 30 days in the same
  phase; `data/preview/icons.json` (favicon or avatar per source, opt-outs applied) is rewritten every run and is
  what the site reads. `npm run probe:previews -- --limit 0` refreshes avatars and icons only; `--no-channels` skips yt-dlp.
- An author asks not to be framed or previewed: `embed: false` on their entry in `sources.yaml`. A host or a single
  video the operator turns off: `data/overrides/embeds.yaml` (`hosts: { example.com: { frame: false, poster: false,
  reason, at } }`, `videos: [{ id, reason, at }]`). Both are applied when pages render, so no re-probe is needed:
  the next nightly re-renders the video pages and every post whose preview no longer matches.

## Recovery

- Nightly aborted mid-run: the next run validates and commits the partial tree first ("recover partial run").
- Runner offline: `ssh mac-mini 'sudo launchctl kickstart -k system/com.bcobservatory.runner'`.
- Budget guard says `unavailable`: the run continues in `reduced` mode (half quotas). Check the usage token in the
  env file; see `docs/PLAN.md` section 4.5.
- A community author asks for removal: set `enabled: false` (or delete the entry) in `sources.yaml`; the next nightly
  removes derived pages; rewrite history on request with `git filter-repo` on the vault.
