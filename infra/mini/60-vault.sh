#!/usr/bin/env bash
# sudo, gated: clone the private vault with the deploy key and prove a push works.
# Needs: the vault repo exists and the key printed by 20-worker-user.sh is added with write access.
source "$(dirname "$0")/lib.sh"
need_root
gate "clone $VAULT_SSH into $OBS_DIR/vault and push a test commit" "$@"
vault="$OBS_DIR/vault"
if [[ -d "$vault/.git" ]]; then
  as_bcobs git -C "$vault" pull -q --ff-only && ok "vault up to date"
else
  rmdir "$vault" 2>/dev/null || true
  as_bcobs git clone -q "$VAULT_SSH" "$vault"
  ok "vault cloned"
fi
as_bcobs git -C "$vault" config user.name "github-actions[bot]"
as_bcobs git -C "$vault" config user.email "41898282+github-actions[bot]@users.noreply.github.com"
# an empty clone has no branch yet; make it main before the first commit
as_bcobs bash -c "cd '$vault' && (git rev-parse -q --verify HEAD >/dev/null || git symbolic-ref HEAD refs/heads/main) && mkdir -p llm-cache captions/community posts && touch llm-cache/.keep captions/community/.keep posts/.keep && git add -A && (git diff --cached --quiet || git commit -q -m 'vault: layout') && git push -q origin HEAD:main"
ok "push to the vault works"
