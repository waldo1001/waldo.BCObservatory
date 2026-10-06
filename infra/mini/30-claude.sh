#!/usr/bin/env bash
# sudo, gated: native Claude Code for bcobs (pinned version, auto-update off) and the 0600 env file.
# Prompts (hidden) for CLAUDE_CODE_OAUTH_TOKEN from `claude setup-token`, and optionally for the login-scoped
# BCOBS_USAGE_OAUTH_TOKEN (scope user:profile). Enter keeps an existing value. Tokens are never echoed.
source "$(dirname "$0")/lib.sh"
need_root
user_exists || die "run 20-worker-user.sh first"
ver="$(tooling claude_code.pin)"; [[ -n "$ver" ]] || ver="$(tooling claude_code.min)"
gate "install claude $ver for $BCOBS_USER and write $ENV_FILE (0600)" "$@"

have="$(as_bcobs bash -c 'command -v claude >/dev/null && claude --version 2>/dev/null | cut -d" " -f1' || true)"
if [[ "$have" == "$ver" ]]; then ok "claude $ver already installed"; else
  as_bcobs bash -c "curl -fsSL https://claude.ai/install.sh | bash -s $ver" >/dev/null
  ok "claude $(as_bcobs claude --version 2>/dev/null)"
fi

existing() { [[ -f "$ENV_FILE" ]] && grep -E "^$1=" "$ENV_FILE" | head -1 | cut -d= -f2- || true; }
read -r -s -p "CLAUDE_CODE_OAUTH_TOKEN (claude setup-token; Enter keeps current): " tok; echo
[[ -n "$tok" ]] || tok="$(existing CLAUDE_CODE_OAUTH_TOKEN)"
[[ -n "$tok" && "$tok" != *[[:space:]]* ]] || die "no valid CLAUDE_CODE_OAUTH_TOKEN"
read -r -s -p "BCOBS_USAGE_OAUTH_TOKEN (optional, scope user:profile; Enter keeps current or leaves unset): " usage; echo
[[ -n "$usage" ]] || usage="$(existing BCOBS_USAGE_OAUTH_TOKEN)"

umask 077
tmp="$(mktemp "$ENV_DIR/.env.XXXXXX")"
{
  echo "# BC Observatory runtime env. Read only by infra/mini/run-nightly.sh. Never commit, never print."
  echo "CLAUDE_CODE_OAUTH_TOKEN=$tok"
  [[ -n "$usage" ]] && echo "BCOBS_USAGE_OAUTH_TOKEN=$usage"
  echo "BCOBS_VAULT_DIR=$OBS_DIR/vault"
  echo "BCOBS_CACHE_DIR=$OBS_DIR/cache"
  echo "TZ=Europe/Brussels"
  echo "DISABLE_AUTOUPDATER=1"
  echo "PATH=$BCOBS_PATH"
} > "$tmp"
unset tok usage
chown "$BCOBS_USER":staff "$tmp"; chmod 600 "$tmp"; mv "$tmp" "$ENV_FILE"
grep -q '^ANTHROPIC_API_KEY' "$ENV_FILE" && die "ANTHROPIC_API_KEY must never be set"
for rc in .zshrc .zprofile .bashrc .profile; do
  [[ -f "$BCOBS_HOME/$rc" ]] && grep -q 'ANTHROPIC_API_KEY' "$BCOBS_HOME/$rc" && die "ANTHROPIC_API_KEY found in $rc"
done
ok "$ENV_FILE written (0600, owner $BCOBS_USER); no ANTHROPIC_API_KEY anywhere"
