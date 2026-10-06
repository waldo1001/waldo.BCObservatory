#!/usr/bin/env bash
# sudo: end-to-end verification after provisioning. Root-only checks (daemon, runner log), then the same
# self-check the weekly workflow runs, executed as bcobs from bcobs's own checkout of the public repo.
source "$(dirname "$0")/lib.sh"
need_root
user_exists || die "user $BCOBS_USER missing"
say "daemon and runner"
if [[ -f "$DAEMON_PLIST" ]]; then
  state="$(launchctl print "system/$DAEMON_LABEL" 2>/dev/null | awk '/state =/{print $3; exit}')"
  [[ "$state" == running ]] && ok "daemon running" || warn "daemon state: ${state:-not loaded}"
  log="$(ls -t "$RUNNER_DIR"/_diag/Runner_*.log 2>/dev/null | head -1)"
  [[ -n "$log" ]] && grep -q 'Listening for Jobs' "$log" && ok "runner listening for jobs" || warn "runner not listening yet"
else warn "daemon not installed yet (50-daemon.sh)"; fi
say "bcobs checkout of $REPO_URL"
repo="$OBS_DIR/repo"
if [[ -d "$repo/.git" ]]; then as_bcobs git -C "$repo" pull -q --ff-only; else rmdir "$repo" 2>/dev/null || true; as_bcobs git clone -q "$REPO_URL" "$repo"; fi
ok "$(as_bcobs git -C "$repo" log -1 --format='%h %s')"
say "self-check as $BCOBS_USER"
as_bcobs bash "$repo/infra/mini/selfcheck.sh"
