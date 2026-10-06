#!/usr/bin/env bash
# Laptop side: copy the provisioning scripts to the Mini and run one of them there.
#   infra/mini/remote.sh 00-preflight.sh
#   infra/mini/remote.sh --sudo 20-worker-user.sh --yes     (prompts for the Mini's sudo password)
set -euo pipefail
HOST="${BCOBS_MINI_HOST:-mac-mini}"
here="$(cd "$(dirname "$0")" && pwd)"
sudo=""
if [[ "${1:-}" == "--sudo" ]]; then sudo="sudo "; shift; fi
script="${1:?usage: remote.sh [--sudo] <script> [args...]}"; shift
ssh "$HOST" 'mkdir -p ~/bcobs-provision && chmod 700 ~/bcobs-provision'
shopt -s nullglob
files=("$here"/*.sh "$here"/*.plist "$here/../../config/tooling.json")
scp -q "${files[@]}" "$HOST":bcobs-provision/
ssh -t "$HOST" "${sudo}bash ~/bcobs-provision/$script $(printf '%q ' "$@")"
