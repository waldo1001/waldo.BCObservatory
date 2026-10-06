#!/usr/bin/env bash
# Shared helpers for the Mac Mini provisioning scripts. Sourced, never run directly.
# Scripts run ON the Mini (copied there by infra/mini/remote.sh). Every script is idempotent and prints
# what it will change before it changes anything. Gated scripts refuse to run without --yes.
set -euo pipefail

BCOBS_USER=bcobs
BCOBS_HOME=/Users/bcobs
OBS_DIR="$BCOBS_HOME/observatory"
ENV_DIR="$BCOBS_HOME/.config/bcobservatory"
ENV_FILE="$ENV_DIR/env"
RUNNER_DIR="$BCOBS_HOME/actions-runner"
DAEMON_LABEL=com.bcobservatory.runner
DAEMON_PLIST="/Library/LaunchDaemons/$DAEMON_LABEL.plist"
REPO_URL=https://github.com/waldo1001/waldo.BCObservatory
VAULT_SSH=git@github-vault:waldo1001/waldo.BCObservatory-vault.git
BCOBS_PATH="$BCOBS_HOME/.local/bin:/opt/homebrew/opt/node@22/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd /   # bcobs cannot read the invoking admin's home; never depend on the caller's cwd
NODE=/opt/homebrew/opt/node@22/bin/node

say()  { printf '\033[1m==>\033[0m %s\n' "$*"; }
ok()   { printf '  \033[32mok\033[0m   %s\n' "$*"; }
warn() { printf '  \033[33mwarn\033[0m %s\n' "$*"; }
die()  { printf '  \033[31mstop\033[0m %s\n' "$*" >&2; exit 1; }

# tooling.json value, e.g. tooling claude_code.pin
tooling() { "$NODE" -p "const t=require('$HERE/tooling.json'); '$1'.split('.').reduce((o,k)=>o?.[k], t) ?? ''"; }

need_root() { [[ $EUID -eq 0 ]] || die "run with sudo (this step is approval-gated)"; }
need_user() { [[ "$(id -un)" == "$1" ]] || die "run as $1"; }
user_exists() { id "$BCOBS_USER" >/dev/null 2>&1; }
as_bcobs() { sudo -u "$BCOBS_USER" -H env -i HOME="$BCOBS_HOME" USER="$BCOBS_USER" PATH="$BCOBS_PATH" LANG=en_US.UTF-8 TZ=Europe/Brussels "$@"; }

# Gated steps print their plan and stop unless --yes was passed.
gate() {
  local what="$1"; shift
  if [[ " $* " != *" --yes "* ]]; then
    say "PLAN (nothing changed yet): $what"
    echo "  re-run with --yes to apply"
    exit 0
  fi
}
