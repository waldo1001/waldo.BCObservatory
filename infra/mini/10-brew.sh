#!/usr/bin/env bash
# Machine-wide CLI tools (approved as automatic in PLAN 4.5). Additive only.
# Default: uv only. Installing yt-dlp or deno through brew upgrades shared libraries (openssl@3, sqlite, readline,
# xz, ca-certificates) that node@22 and Jarvis also use, so those two are installed per user by 35-tools.sh.
# --brew-all restores the original plan (yt-dlp deno uv via brew); --with-ffmpeg adds ffmpeg (not needed for captions).
source "$(dirname "$0")/lib.sh"
need_user "$(stat -f %Su /opt/homebrew)"
export PATH="/opt/homebrew/bin:$PATH" HOMEBREW_NO_INSTALLED_DEPENDENTS_CHECK=1 HOMEBREW_NO_ENV_HINTS=1 HOMEBREW_NO_INSTALL_CLEANUP=1
want=(uv)
[[ " $* " == *" --brew-all "* ]] && want+=(yt-dlp deno)
[[ " $* " == *" --with-ffmpeg "* ]] && want+=(ffmpeg)
missing=()
for f in "${want[@]}"; do brew list --formula "$f" >/dev/null 2>&1 && ok "$f installed" || missing+=("$f"); done
[[ ${#missing[@]} -eq 0 ]] && { ok "nothing to install"; exit 0; }
say "will install: ${missing[*]}"
plan="$(brew install --dry-run "${missing[@]}" 2>&1)"
echo "$plan" | sed 's/^/  /' | tail -20
if [[ "$plan" == *"Would upgrade"* && " $* " != *" --allow-upgrades "* ]]; then
  die "this install would upgrade shared dependencies; re-run with --allow-upgrades only if that is intended"
fi
gate "brew install ${missing[*]}" "$@"
brew install "${missing[@]}"
for f in "${missing[@]}"; do ok "$f: $($f --version 2>&1 | head -1)"; done
