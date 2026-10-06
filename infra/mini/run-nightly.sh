#!/usr/bin/env bash
# Called by .github/workflows/nightly.yml on the bcobs runner, inside the checkout.
# Dependencies install WITHOUT secrets (npm ci --ignore-scripts); the env file is sourced only into the
# orchestrator's subshell, never exported to the job. Extra arguments pass through to the orchestrator.
set -euo pipefail
ENV_FILE="${BCOBS_ENV_FILE:-$HOME/.config/bcobservatory/env}"
export PATH="$HOME/.local/bin:/opt/homebrew/opt/node@22/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
# the code pillar's post-pass reads ~1 GB of snapshots; Node's default heap (~4 GB) is not enough headroom
export NODE_OPTIONS="--max-old-space-size=8192"
cd "${GITHUB_WORKSPACE:-$(git rev-parse --show-toplevel)}"
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
npm ci --ignore-scripts --no-audit --no-fund --silent
[[ -f "$ENV_FILE" ]] || { echo "missing $ENV_FILE (run infra/mini/30-claude.sh)" >&2; exit 1; }
(
  set -a; . "$ENV_FILE"; set +a
  [[ -z "${ANTHROPIC_API_KEY:-}" ]] || { echo "ANTHROPIC_API_KEY must never be set" >&2; exit 1; }
  # the vault is pushed even when the nightly exits non-zero (aborted at a subscription limit, leak block): its raw
  # text belongs in the private repository either way; the exit code is passed on afterwards
  # a run that stops on a full heap (stop reason "memory") or still dies of it (exit 134) has committed its
  # checkpoints: start a fresh process at once, so a long unlimited run is not capped by one process's memory
  restarts="${BCOBS_MEMORY_RESTARTS:-6}"
  for ((attempt = 0; ; attempt++)); do
    rc=0
    npm run -s nightly -- --commit --push "$@" || rc=$?
    report="$(ls -t data/manifest/_runs/*.json 2>/dev/null | head -1 || true)"
    stop="$( [[ -n "$report" ]] && node -e 'const r=require(process.argv[1]); process.stdout.write(String(r.execution?.stop_reason ?? ""))' "$PWD/$report" || true)"
    if (( attempt < restarts )) && { [[ $rc -eq 0 && "$stop" == "memory" ]] || [[ $rc -eq 134 ]]; }; then
      echo "nightly stopped on memory (exit $rc, stop ${stop:-none}); fresh process $((attempt + 1))/$restarts" >&2
      continue
    fi
    break
  done
  vault="${BCOBS_VAULT_DIR:-}"
  if [[ -n "$vault" && -d "$vault/.git" ]] && [[ -n "$(git -C "$vault" status --porcelain)" ]]; then
    git -C "$vault" add -A
    git -C "$vault" commit -q -m "vault: nightly $(date +%F)"
    git -C "$vault" push -q origin HEAD:main
  fi
  exit "$rc"
)
