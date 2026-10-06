#!/usr/bin/env bash
# Configure waldo1001/waldo.BCObservatory (and optionally create the private vault) on GitHub. Idempotent.
# Ported from the release-wave repo and extended (PLAN 4.4): Pages from Actions, only GitHub-owned actions,
# read-only default token, fork PR workflows need approval, squash only, no repository secrets at all.
#
#   scripts/setup-github.sh                    show current settings and what would change (read-only)
#   scripts/setup-github.sh --yes              apply to the public repo
#   scripts/setup-github.sh --yes --vault      also create waldo1001/waldo.BCObservatory-vault (private)
set -euo pipefail
REPO=waldo1001/waldo.BCObservatory
VAULT=waldo1001/waldo.BCObservatory-vault
APPLY=0; WITH_VAULT=0
for a in "$@"; do case "$a" in --yes) APPLY=1;; --vault) WITH_VAULT=1;; *) echo "unknown argument $a" >&2; exit 1;; esac; done
run() { if [[ $APPLY -eq 1 ]]; then "$@" >/dev/null; echo "  applied: ${*:1:6}"; else echo "  would run: ${*:1:8}"; fi; }

command -v gh >/dev/null || { echo "gh CLI not found" >&2; exit 1; }
LOGIN="$(gh api user --jq .login)"
[[ "$LOGIN" == "${REPO%%/*}" ]] || { echo "logged in as $LOGIN, owner is ${REPO%%/*}" >&2; exit 1; }
echo "gh: $LOGIN; mode: $([[ $APPLY -eq 1 ]] && echo APPLY || echo 'read-only plan')"

echo "== $REPO"
gh api "repos/$REPO" --jq '"  visibility \(.visibility), default branch \(.default_branch), squash \(.allow_squash_merge), merge \(.allow_merge_commit), rebase \(.allow_rebase_merge), wiki \(.has_wiki)"'
run gh repo edit "$REPO" --description "BC Observatory: an agent-first, cross-referenced knowledge base of Microsoft Dynamics 365 Business Central (docs, code, guidelines, videos, blogs)" \
  --add-topic business-central --add-topic dynamics-365 --add-topic al --add-topic knowledge-base --add-topic llms-txt --add-topic mcp --add-topic github-pages
run gh repo edit "$REPO" --enable-issues --enable-wiki=false --enable-projects=false --delete-branch-on-merge \
  --enable-squash-merge --enable-merge-commit=false --enable-rebase-merge=false

echo "== Pages (source: GitHub Actions)"
if cur="$(gh api "repos/$REPO/pages" --jq '"  current: \(.build_type) \(.html_url)"' 2>/dev/null)"; then
  echo "$cur"
  run gh api -X PUT "repos/$REPO/pages" -f build_type=workflow
else
  echo "  not enabled yet"
  run gh api -X POST "repos/$REPO/pages" -f build_type=workflow
fi
run gh repo edit "$REPO" --homepage "https://waldo1001.github.io/waldo.BCObservatory/"

echo "== Actions"
gh api "repos/$REPO/actions/permissions" --jq '"  current: enabled \(.enabled), allowed \(.allowed_actions)"'
gh api "repos/$REPO/actions/permissions/workflow" --jq '"  current: default token \(.default_workflow_permissions), approve PRs \(.can_approve_pull_request_reviews)"'
run gh api -X PUT "repos/$REPO/actions/permissions" -F enabled=true -f allowed_actions=selected
run gh api -X PUT "repos/$REPO/actions/permissions/selected-actions" -F github_owned_allowed=true -F verified_allowed=false
run gh api -X PUT "repos/$REPO/actions/permissions/workflow" -f default_workflow_permissions=read -F can_approve_pull_request_reviews=false
run gh api -X PUT "repos/$REPO/actions/permissions/fork-pr-contributor-approval" -f approval_policy=all_external_contributors

echo "== Secrets (must be none: the only secret lives in the Mini's env file)"
n="$(gh secret list --repo "$REPO" --json name --jq length)"
[[ "$n" == 0 ]] && echo "  ok: no repository secrets" || { echo "  STOP: $n repository secret(s) exist" >&2; exit 1; }

if [[ $WITH_VAULT -eq 1 ]]; then
  echo "== $VAULT (private)"
  if cur="$(gh repo view "$VAULT" --json visibility --jq '"  exists, \(.visibility)"' 2>/dev/null)"; then echo "$cur"; else
    run gh repo create "$VAULT" --private --description "BC Observatory private vault: community raw text and the LLM cache. Never public."
  fi
  run gh repo edit "$VAULT" --enable-issues=false --enable-wiki=false --enable-projects=false
fi
echo "done"
