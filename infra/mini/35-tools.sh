#!/usr/bin/env bash
# sudo (acts as bcobs), gated: yt-dlp (with the JS challenge solver), deno and graphify-al (D67, the call graph of
# the code pillar's `linked` stage) for bcobs only, via uv tool into /Users/bcobs/.local/bin. Leaves the shared
# Homebrew prefix untouched. Re-run to upgrade yt-dlp, or to move graphify-al to the ref pinned in tooling.json.
source "$(dirname "$0")/lib.sh"
need_root
user_exists || die "run 20-worker-user.sh first"
command -v /opt/homebrew/bin/uv >/dev/null || die "run 10-brew.sh first (uv)"
min="$(tooling yt_dlp.min)"
graphify_spec="$(tooling graphify_al.spec)"
graphify_ref="$(tooling graphify_al.ref)"
[[ -n "$graphify_spec" && -n "$graphify_ref" ]] || die "tooling.json has no graphify_al.spec / graphify_al.ref"
gate "uv tool install yt-dlp[default] (>= $min), deno and graphify-al @ ${graphify_ref:0:12} for $BCOBS_USER" "$@"
# macOS ships Python 3.9; yt-dlp needs >= 3.10, so uv uses its own managed Python (downloaded once, per user)
py="$(tooling python)"; [[ -n "$py" ]] || py=3.12
gpy="$(tooling graphify_al.python)"; [[ -n "$gpy" ]] || gpy="$py"
as_bcobs /opt/homebrew/bin/uv tool install --upgrade --python "$py" "yt-dlp[default]>=$min" >/dev/null
as_bcobs /opt/homebrew/bin/uv tool install --upgrade --python "$py" deno >/dev/null
# the fork has no releases: a git URL pinned by commit (PEP 508 direct reference with the `al` extra)
as_bcobs /opt/homebrew/bin/uv tool install --upgrade --python "$gpy" "$graphify_spec" >/dev/null
ok "yt-dlp $(as_bcobs yt-dlp --version)"
ok "$(as_bcobs deno --version | head -1)"
ok "$(as_bcobs graphify --version) @ ${graphify_ref:0:12}"
as_bcobs /opt/homebrew/bin/uv tool list --show-version-specifiers | grep -q "$graphify_ref" || die "uv tool list does not show graphify-al at $graphify_ref"
