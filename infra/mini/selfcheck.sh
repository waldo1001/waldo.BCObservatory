#!/usr/bin/env bash
# Runs AS bcobs inside a checkout of this repo: from mini-selfcheck.yml, or from 80-verify.sh via sudo -u bcobs.
# Tools, one uncached claude -p ping (subscription auth + model family), usage guard, one caption fetch from
# this IP, vault reachability, disk. The env file is sourced only into the subshells that need it.
set -euo pipefail
ENV_FILE="${BCOBS_ENV_FILE:-$HOME/.config/bcobservatory/env}"
export PATH="$HOME/.local/bin:/opt/homebrew/opt/node@22/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
cd "$(dirname "$0")/../.."
pin="$(node -p "require('./config/tooling.json').claude_code.pin ?? ''")"
fail=0
check() { local name="$1"; shift; local out; if out="$("$@" 2>&1)"; then echo "ok    $name: $(echo "$out" | tail -1)"; else echo "FAIL  $name:"; echo "$out" | tail -5 | sed 's/^/      /'; fail=1; fi; }
withenv() { ( set -a; . "$ENV_FILE"; set +a; [[ -z "${ANTHROPIC_API_KEY:-}" ]] || { echo "ANTHROPIC_API_KEY is set" >&2; exit 1; }; bash -c "$1" ); }

check "user" bash -c '[[ "$(id -un)" == bcobs ]] && id -un'
check "node" node -v
check "claude version" bash -c "v=\$(claude --version | cut -d' ' -f1); [[ -z '$pin' || \$v == '$pin' ]] && echo \$v || { echo \"claude \$v, pinned $pin\"; exit 1; }"
check "yt-dlp" yt-dlp --version
check "deno" bash -c 'deno --version | head -1'
check "env file mode" bash -c "[[ \$(stat -f %Lp '$ENV_FILE') == 600 ]] && echo 600"
check "npm ci (no scripts, no secrets)" bash -c 'npm ci --ignore-scripts --no-audit --no-fund --silent && echo installed'
check "claude -p ping" withenv "npm run -s llm:ping"
check "usage guard" withenv "npm run -s guard -- --dry-run 2>/dev/null"
scratch="$HOME/observatory/cache/selfcheck"
check "caption fetch (en-orig)" bash -c "mkdir -p '$scratch' && cd '$scratch' && rm -f ./*.vtt && yt-dlp -q --skip-download --write-auto-subs --sub-langs en-orig --sub-format vtt -o '%(id)s' 'https://www.youtube.com/watch?v=2N2NhNH7dsk' && ls ./*.vtt"
if [[ -d "$HOME/observatory/vault/.git" ]]; then check "vault fetch" git -C "$HOME/observatory/vault" fetch -q; else echo "skip  vault not cloned yet"; fi
echo "info  disk free $(df -h / | awk 'NR==2{print $4}'), clock $(TZ=Europe/Brussels date '+%Y-%m-%d %H:%M %Z')"
exit $fail
