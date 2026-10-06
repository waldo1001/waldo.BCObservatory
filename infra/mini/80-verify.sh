#!/usr/bin/env bash
# sudo (to act as bcobs): end-to-end self-check. Changes nothing except a scratch caption file and the
# bcobs checkout of the public repo. Exit 1 on the first failed check.
source "$(dirname "$0")/lib.sh"
need_root
user_exists || die "user $BCOBS_USER missing"
pin="$(tooling claude_code.pin)"
check() { local name="$1"; shift; if out="$("$@" 2>&1)"; then ok "$name: $(echo "$out" | tail -1)"; else warn "$name failed:"; echo "$out" | tail -5 | sed 's/^/    /'; exit 1; fi; }

say "tools as $BCOBS_USER"
check node as_bcobs node -v
check claude as_bcobs bash -c "v=\$(claude --version | cut -d' ' -f1); [[ -z '$pin' || \$v == '$pin' ]] && echo \$v || { echo \"claude \$v, pinned $pin\"; exit 1; }"
check yt-dlp as_bcobs yt-dlp --version
check deno as_bcobs deno --version

say "public repo checkout"
repo="$OBS_DIR/repo"
if [[ -d "$repo/.git" ]]; then check pull as_bcobs git -C "$repo" pull -q --ff-only; else rmdir "$repo" 2>/dev/null || true; check clone as_bcobs git clone -q "$REPO_URL" "$repo"; fi
check "npm ci" as_bcobs bash -c "cd '$repo' && npm ci --ignore-scripts --no-audit --no-fund --silent && echo installed"

say "subscription + guard (env file sourced only here)"
withenv() { as_bcobs bash -c "set -a; . '$ENV_FILE'; set +a; cd '$repo' && $1"; }
check "env has no API key" as_bcobs bash -c "! grep -q '^ANTHROPIC_API_KEY' '$ENV_FILE' && echo clean"
check "claude -p ping" withenv "npm run -s llm:ping"
check "usage guard" withenv "npm run -s guard -- --dry-run 2>/dev/null"

say "captions from this IP"
scratch="$OBS_DIR/cache/verify"
check "yt-dlp en-orig" as_bcobs bash -c "mkdir -p '$scratch' && cd '$scratch' && rm -f *.vtt && yt-dlp -q --skip-download --write-auto-subs --sub-langs en-orig --sub-format vtt -o '%(id)s' 'https://www.youtube.com/watch?v=2N2NhNH7dsk' && ls *.vtt"

say "runner, vault, disk, clock"
if [[ -f "$DAEMON_PLIST" ]]; then
  check daemon bash -c "launchctl print system/$DAEMON_LABEL | awk '/state =/{print \$3; exit}' | grep -x running"
  check "runner listening" bash -c "grep -h 'Listening for Jobs' \$(ls -t $RUNNER_DIR/_diag/Runner_*.log | head -1) | tail -1"
else warn "daemon not installed yet"; fi
if [[ -d "$OBS_DIR/vault/.git" ]]; then check vault as_bcobs git -C "$OBS_DIR/vault" fetch -q; else warn "vault not cloned yet"; fi
ok "disk free: $(df -h / | awk 'NR==2{print $4}')"
ok "clock: $(TZ=Europe/Brussels date '+%Y-%m-%d %H:%M %Z')"
