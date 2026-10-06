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
# Claude OAuth tokens are one ~108-character word. Terminal copies often wrap them over two lines, which once split a
# token across both prompts. So: strip whitespace, keep reading continuation lines of the same paste until the token
# is long enough, and validate before anything is written.
TOKEN_MIN_LEN=100
read_token() { # $1 = prompt; sets TOKEN
  local line=""
  read -r -s -p "$1" line || true; echo
  TOKEN="${line//[[:space:]]/}"
  while [[ -n "$TOKEN" && ${#TOKEN} -lt $TOKEN_MIN_LEN ]]; do
    read -r -s -t 2 line || break # a wrapped paste's second line is already buffered
    TOKEN+="${line//[[:space:]]/}"
  done
}
valid_token() { [[ "$1" =~ ^sk-ant-[A-Za-z0-9]+-[A-Za-z0-9_-]+$ && ${#1} -ge $TOKEN_MIN_LEN ]]; }

read_token "CLAUDE_CODE_OAUTH_TOKEN (claude setup-token; Enter keeps current): "
tok="$TOKEN"; [[ -n "$tok" ]] || tok="$(existing CLAUDE_CODE_OAUTH_TOKEN)"
valid_token "$tok" || die "CLAUDE_CODE_OAUTH_TOKEN missing or incomplete (${#tok} chars, expected sk-ant-... of >= $TOKEN_MIN_LEN); nothing written"
read_token "BCOBS_USAGE_OAUTH_TOKEN (optional, scope user:profile; Enter keeps a valid current value or leaves unset): "
usage="$TOKEN"
[[ -z "$usage" ]] || valid_token "$usage" || die "BCOBS_USAGE_OAUTH_TOKEN looks incomplete (${#usage} chars); nothing written"
if [[ -z "$usage" ]]; then
  usage="$(existing BCOBS_USAGE_OAUTH_TOKEN)"
  if [[ -n "$usage" ]] && ! valid_token "$usage"; then warn "dropping an invalid stored BCOBS_USAGE_OAUTH_TOKEN"; usage=""; fi
fi

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
grep -q "^BCOBS_USAGE_OAUTH_TOKEN=" "$ENV_FILE" && ok "usage token set" || ok "usage token not set: the guard runs reduced until M1"
# prove the subscription token with one tiny Haiku call (token read from the env file, never from argv)
out="$(as_bcobs bash -c "set -a; . '$ENV_FILE'; set +a; claude -p 'Reply with the word ok.' --model haiku --output-format json --tools '' --strict-mcp-config --no-session-persistence --disable-slash-commands" 2>&1 || true)"
if [[ "$out" == *'"is_error":false'* ]]; then ok "claude -p authenticated on the subscription"; else
  die "claude -p failed with this token: $(echo "$out" | grep -oE '"result":"[^"]{0,160}' | head -1 || echo "$out" | tail -1 | cut -c1-160)"
fi
