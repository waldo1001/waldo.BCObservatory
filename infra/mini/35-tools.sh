#!/usr/bin/env bash
# sudo (acts as bcobs), gated: yt-dlp (with the JS challenge solver) and deno for bcobs only, via uv tool
# into /Users/bcobs/.local/bin. Leaves the shared Homebrew prefix untouched. Re-run to upgrade yt-dlp.
source "$(dirname "$0")/lib.sh"
need_root
user_exists || die "run 20-worker-user.sh first"
command -v /opt/homebrew/bin/uv >/dev/null || die "run 10-brew.sh first (uv)"
min="$(tooling yt_dlp.min)"
gate "uv tool install yt-dlp[default] (>= $min) and deno for $BCOBS_USER" "$@"
# macOS ships Python 3.9; yt-dlp needs >= 3.10, so uv uses its own managed Python (downloaded once, per user)
py="$(tooling python)"; [[ -n "$py" ]] || py=3.12
as_bcobs /opt/homebrew/bin/uv tool install --upgrade --python "$py" "yt-dlp[default]>=$min" >/dev/null
as_bcobs /opt/homebrew/bin/uv tool install --upgrade --python "$py" deno >/dev/null
ok "yt-dlp $(as_bcobs yt-dlp --version)"
ok "$(as_bcobs deno --version | head -1)"
