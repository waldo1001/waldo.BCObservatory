#!/usr/bin/env bash
# sudo, gated: hidden standard user bcobs (no GUI login, random password discarded), its directories,
# and the ed25519 deploy key for the private vault. Prints the public key for the owner to add.
source "$(dirname "$0")/lib.sh"
need_root
gate "create hidden standard user $BCOBS_USER, $OBS_DIR/{repo,vault,cache,logs}, ~/.ssh/bcobs_vault" "$@"
if user_exists; then
  ok "user $BCOBS_USER exists"
else
  pw="$(openssl rand -base64 32)"
  sysadminctl -addUser "$BCOBS_USER" -fullName "BC Observatory" -password "$pw" -home "$BCOBS_HOME" -shell /bin/zsh
  unset pw
  dscl . create "/Users/$BCOBS_USER" IsHidden 1
  createhomedir -c -u "$BCOBS_USER" >/dev/null
  ok "created $BCOBS_USER (hidden, standard, password discarded)"
fi
dseditgroup -o checkmember -m "$BCOBS_USER" admin >/dev/null 2>&1 && die "$BCOBS_USER must not be an admin"
chmod 700 "$BCOBS_HOME"
for d in "$OBS_DIR" "$OBS_DIR/repo" "$OBS_DIR/vault" "$OBS_DIR/cache" "$OBS_DIR/logs" "$BCOBS_HOME/.config" "$ENV_DIR" "$BCOBS_HOME/.ssh"; do
  install -d -o "$BCOBS_USER" -g staff -m 700 "$d"
done
ok "directories under $OBS_DIR"

key="$BCOBS_HOME/.ssh/bcobs_vault"
[[ -f "$key" ]] || as_bcobs ssh-keygen -q -t ed25519 -N "" -C "bcobs@mini vault deploy key" -f "$key"
cat > "$BCOBS_HOME/.ssh/config" <<CFG
Host github-vault
  HostName github.com
  User git
  IdentityFile $key
  IdentitiesOnly yes
CFG
# pin GitHub's host keys from the meta API over HTTPS instead of trusting first use
curl -fsSL https://api.github.com/meta | "$NODE" -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).ssh_keys.map(k=>"github.com "+k).join("\n")))' > "$BCOBS_HOME/.ssh/known_hosts"
chown "$BCOBS_USER":staff "$BCOBS_HOME/.ssh/config" "$BCOBS_HOME/.ssh/known_hosts"
chmod 600 "$BCOBS_HOME/.ssh/config" "$BCOBS_HOME/.ssh/known_hosts"
ok "ssh config + pinned github.com host keys"
say "vault deploy key (add with write access to waldo1001/waldo.BCObservatory-vault):"
cat "$key.pub"
