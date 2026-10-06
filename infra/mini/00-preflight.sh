#!/usr/bin/env bash
# Read-only report of the Mini. Changes nothing. Exit 2 when FileVault is on (an unattended reboot would wait
# at the unlock screen, so autorestart would not bring the runner back).
source "$(dirname "$0")/lib.sh"
export PATH="/opt/homebrew/bin:$PATH"
rc=0
say "system"
ok "$(sw_vers -productName) $(sw_vers -productVersion), $(uname -m), $(sysctl -n hw.memsize | awk '{printf "%d GB", $1/1073741824}')"
ok "disk free on /: $(df -h / | awk 'NR==2{print $4}')"
ok "timezone: $(readlink /etc/localtime | sed 's#.*/zoneinfo/##')  (pipeline uses TZ=Europe/Brussels regardless)"
ok "uptime:$(uptime | sed 's/.*up/ up/' | cut -d, -f1-2)"
fv="$(fdesetup status 2>/dev/null || echo unknown)"
if [[ "$fv" == *"On"* ]]; then warn "FileVault: $fv"; rc=2; else ok "FileVault: $fv"; fi
ok "pmset: $(pmset -g | awk '/ sleep /{print "sleep "$2} / autorestart /{print "autorestart "$2}' | paste -sd, -)"

say "tools"
for t in brew git gh jq yt-dlp ffmpeg deno uv; do
  if command -v "$t" >/dev/null; then ok "$t: $($t --version 2>&1 | head -1)"; else warn "$t: missing"; fi
done
if [[ -x "$NODE" ]]; then ok "node: $("$NODE" -v) at $NODE"; else warn "node@22 missing at $NODE"; fi

say "neighbours"
if [[ -d "$HOME/actions-runner-jarvis" ]]; then ok "Jarvis runner present: ~/actions-runner-jarvis (labels stay separate)"; else warn "Jarvis runner not found"; fi
if command -v tailscale >/dev/null; then ok "tailscale: $(tailscale status --self 2>/dev/null | head -1 | awk '{print $2, $4}')"; else ok "tailscale CLI not on PATH (ssh works, so the tailnet is up)"; fi

say "BC Observatory state"
if user_exists; then ok "user $BCOBS_USER exists (uid $(id -u $BCOBS_USER))"; else warn "user $BCOBS_USER: not created yet (20-worker-user.sh)"; fi
[[ -f "$DAEMON_PLIST" ]] && ok "daemon installed: $DAEMON_PLIST" || warn "daemon not installed yet (50-daemon.sh)"
launchctl print "system/$DAEMON_LABEL" >/dev/null 2>&1 && ok "daemon loaded" || warn "daemon not loaded"
exit $rc
