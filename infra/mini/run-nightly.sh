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
  rc=0
  npm run -s nightly -- --commit --push "$@" || rc=$?
  vault="${BCOBS_VAULT_DIR:-}"
  if [[ -n "$vault" && -d "$vault/.git" ]] && [[ -n "$(git -C "$vault" status --porcelain)" ]]; then
    git -C "$vault" add -A
    git -C "$vault" commit -q -m "vault: nightly $(date +%F)"
    git -C "$vault" push -q origin HEAD:main
  fi
  exit "$rc"
)
