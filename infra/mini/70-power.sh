#!/usr/bin/env bash
# sudo, gated: restart automatically after a power failure. Refuses while FileVault is on.
source "$(dirname "$0")/lib.sh"
need_root
[[ "$(fdesetup status)" == *"Off"* ]] || die "FileVault is on: an unattended reboot would wait at the unlock screen"
gate "pmset -a autorestart 1" "$@"
pmset -a autorestart 1
ok "$(pmset -g | awk '/ autorestart /{print "autorestart "$2}')"
