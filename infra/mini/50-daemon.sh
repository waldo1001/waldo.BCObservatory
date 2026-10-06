#!/usr/bin/env bash
# sudo, gated: install and start the runner LaunchDaemon (UserName bcobs).
source "$(dirname "$0")/lib.sh"
need_root
[[ -f "$RUNNER_DIR/.runner" ]] || die "run 40-runner.sh first"
gate "install $DAEMON_PLIST and bootstrap it in the system domain" "$@"
plutil -lint "$HERE/$DAEMON_LABEL.plist" >/dev/null
install -o root -g wheel -m 644 "$HERE/$DAEMON_LABEL.plist" "$DAEMON_PLIST"
launchctl bootout "system/$DAEMON_LABEL" 2>/dev/null || true
launchctl bootstrap system "$DAEMON_PLIST"
launchctl enable "system/$DAEMON_LABEL"
sleep 5
launchctl print "system/$DAEMON_LABEL" | awk '/state =/{print "  state: "$3; exit}'
tail -3 "$OBS_DIR/logs/runner.out.log" 2>/dev/null | sed 's/^/  /' || true
