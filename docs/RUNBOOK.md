# Runbook

Operational notes. Provisioning lives in `infra/mini/`; the nightly in `.github/workflows/nightly.yml`.

## Daily

- The nightly runs at 00:00 UTC on the Mac Mini runner (label `bcobs`). Check the run report in
  `data/manifest/_runs/<date>.json` or the workflow summary.
- `runner-health.yml` opens a pinned issue when the runner is offline or the nightly failed; it closes it again.
- Derived data (D81). A push to main that touches `pipeline/link|render|lib/**`, `schemas/**` or `config/**` runs
  `nightly` with stages `derive` on the Mini: the render block only (digests, sources, indexes, graph), no ingest, no
  LLM, no run report, about a minute with `npm ci`; it commits `content: derive <date> (<sha>)` when something
  changed. By hand: Actions → nightly → Run workflow → stages `derive`, or `gh workflow run nightly -f stages=derive`.
  A change to the orchestrator itself is not a trigger path: start a derive by hand after one.

## Provisioning the Mac Mini

Run from the laptop; each script is idempotent and prints what it will do before any gated step.

```bash
infra/mini/00-preflight.sh        # read-only report
infra/mini/10-brew.sh             # uv only by default (no shared-library upgrades)
infra/mini/20-worker-user.sh      # sudo: creates bcobs
infra/mini/30-claude.sh           # installs claude for bcobs; asks for the setup-token (owner pastes)
infra/mini/35-tools.sh            # sudo: yt-dlp, deno, graphify-al for bcobs via uv (keeps Jarvis's brew libraries untouched)
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

## Code changes (D61)

- Token: the nightly workflow passes the Actions token as step env `GITHUB_TOKEN` (1,000 requests an hour, no secret).
  Manual and backfill runs read `BCOBS_GITHUB_TOKEN` from the Mini env file (a fine-grained PAT, public read only,
  optional). Without a token the limit is 60 an hour: enough for a normal night, not for a backfill. An exhausted
  limit holds the items (no attempt counted) and leaves the listing cursor; the next run continues by itself.
- State: `data/state/github-prs.json` (cursor and ETag per source and branch, and per activity list). Delete a source's
  entry to list it again from the backfill horizon.
- Backfill (three months, about 1,400 merged pull requests on BCApps, 1,100 items, a few hundred Haiku calls): one
  dispatched run, `gh workflow run nightly -f pillars=change -f only=bcapps-prs,al-go-prs,bcquality-prs -f unlimited=true`,
  or on the Mini `BCOBS_GITHUB_TOKEN=... npm run nightly -- --pillars change --only bcapps-prs --unlimited --commit --push`.
  Without it the nightly quotas (`change_fetch` 60, `changes` 40) take about a month.
- A pull request classified wrongly: the rules are constants in `pipeline/changes/classify.ts`, each with a test;
  bump `CHANGE_VERSION` in `pipeline/ingest/github-prs.ts` to re-fetch every change after a rule change.
- The weekly narrative (`data/changes/narratives/<week>.json`) is one Sonnet call when a week's changes move
  (`quotas.change_narrative`); delete the file to have it written again.

## Re-extraction after an extractor bump

- A new `EXTRACTOR_VERSION` (`pipeline/code/extract.ts`) changes every code item's `input_hash` (`<sha>:x<n>`), so
  the next ingest marks each one stale. One code item is one major: W1, the first-party apps and every country.
  `code_jobs: 1` runs one a night, in id order (`code/bcapps/29`, `code/bcapps/30`, `code/sandbox-history/23` ...
  `28`); items a major does not use (`code/bcapps/28`, `onprem-history`, `sandbox-history/29-30`) never compete.
  Extractor 4 (D65, page controls) therefore takes about eight nights, with the D62 backfill of BC23-28; a night
  on which `bcapps/30` (BCApps `main`) or `bcapps/29` moved goes to that item first.
- Progress: `data/manifest/code/<source>/<major>.json` (`state`, `input_hash` ending in `:x4`), and
  `data/code/<major>/<cc>/manifest.json` `extractor` (`"4"`) and `parse_errors` (not above the previous manifest).
  For extractor 4: `grep -c '"controls":\[{' data/code/30/apps/objects-page-1.jsonl` is about 1,400 (BC30 apps, measured on a scratch run).
- Until a major is re-extracted its records lack the new members; readers must not depend on them. Version and
  country diffs ignore page controls and actions, so they do not churn while majors are at different extractors.

## Call graph (D67, graphify-al)

- The code pillar's `linked` stage runs `graphify update` (the fork pinned in `config/tooling.json` `graphify_al`) on
  the snapshot checkout in the cache and writes `data/code/graph/<major>/calls.json` + `manifest.json`. One graph a
  night (`quotas.graph_jobs`, lane `cpu`), 29 before 28 before 30; `graphify-out/` stays in the cache.
- Scope: `config/versions.json` `callgraph.apps` (true = W1 app folders + `src/Apps/W1/*/app`, false = W1 only) and
  the static rules in `config/graphify.ignore`. Changing either, bumping the pin or `CALLGRAPH_VERSION` puts every
  published snapshot item back at `linked` on the next ingest (no re-extraction). A run with unchanged inputs does
  not start graphify. Numbers per run: `data/code/graph/<major>/manifest.json` (wall, max RSS, graph.json bytes) and
  the run summary line "Call graph: ...". Without graphify on PATH the item is held, not failed.
- Move the pin: update `graphify_al.ref` and `.spec`, regenerate `tests/fixtures/graphify/graph.json`, then on the
  Mini `infra/mini/35-tools.sh --yes` and the `mini-selfcheck` workflow (`ok graphify-al: graphify <v> @ <sha>`).

## Local development (developer Mac)

```bash
uv tool install --python 3.12 "graphifyy[al] @ git+https://github.com/StefanMaron/graphify-al@<ref>"   # spec from config/tooling.json
uv tool list --show-version-specifiers | grep graphify   # shows the pinned rev
BCOBS_CACHE_DIR=$HOME/.cache/bcobs npm run nightly -- --dry-run --pillars code   # the fetch stage creates the sparse checkout
uv tool uninstall graphifyy   # to remove
```

Panel list sweep (D78): after a change to `site/src/scripts/galaxy.ts`, `Galaxy.astro`, `explorer.ts` or the panel CSS,
build the site (Node 22) and run `node scripts/ui-sweep.mjs`. It serves `site/dist` on port 4188, visits 15 galaxy
panel states at 1440 and 390 px and fails on any row label squeezed into the marker column. Playwright is not a
dependency: point `PLAYWRIGHT_DIR` at a `node_modules` that holds it (default: the npx cache); without it the sweep
skips with exit 0.

## Atlas in your own Claude Code

- `claude mcp add --transport http bc-code-atlas https://bc-code-atlas.stefanmaron.dev/mcp` (user scope), or install
  the plugin, which connects it next to `bc-observatory`; `claude mcp remove bc-code-atlas` undoes it. VS Code:
  `.vscode/mcp.json` with `{"servers": {"bc-code-atlas": {"type": "http", "url": "https://bc-code-atlas.stefanmaron.dev/mcp"}}}`.
- Etiquette (D67 decision 1): it is one person's server. Resolve, don't search; one or two calls per question; never
  `bcatlas_request_version` unasked. Nothing scheduled (nightly, selfcheck, workflows) ever calls it.

## Pages (D76)

- The `pages` workflow's step "Size budget" runs `npx tsx scripts/site-size.ts site/dist --json site-size.json` and
  writes a table to the run summary: tar bytes (what `upload-pages-artifact` uploads, computed exactly: headers,
  512-byte blocks, long names, directories), apparent bytes (sum of file sizes), files, headroom to 900 MB, and the
  ten largest sections. MB = 2^20 bytes. Run the same line locally after `npm run site:build`.
- Thresholds: under 800 MB nothing; from 800 MB a `::warning::` annotation (the build still deploys); from 900 MB
  the step fails and nothing deploys. GitHub refuses a published site above 1 GB.
- Triggers (`docs/specs/site-size.md` 4.4, 4.5, also in HANDOFF): tar bytes above 850 MB means phase 3, the object
  markdown twins served from `raw.githubusercontent.com` at the build's commit (about 120 MB, 25,600 files); above
  900 MB after that, or a bandwidth notice from GitHub, means a new host (Cloudflare Pages paid, or object storage
  behind a CDN): write that spec then.
- Before adding a component to every object page, keep its `<style>` `is:global` under one wrapper class (D53,
  D76): a scoped style puts a `data-astro-cid-*` attribute on every element it covers, on 25,000 pages.

## Recovery

- Nightly aborted mid-run: the next run validates and commits the partial tree first ("recover partial run").
- Runner offline: `ssh mac-mini 'sudo launchctl kickstart -k system/com.bcobservatory.runner'`.
- Budget guard says `unavailable`: the run continues in `reduced` mode (half quotas). Check the usage token in the
  env file; see `docs/PLAN.md` section 4.5.
- A community author asks for removal: set `enabled: false` (or delete the entry) in `sources.yaml`; the next nightly
  removes derived pages; rewrite history on request with `git filter-repo` on the vault.
