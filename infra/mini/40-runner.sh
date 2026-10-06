#!/usr/bin/env bash
# sudo, gated: second, repo-scoped Actions runner for bcobs (label bcobs). The registration token is short-lived
# and minted on the laptop: gh api -X POST repos/waldo1001/waldo.BCObservatory/actions/runners/registration-token -q .token
source "$(dirname "$0")/lib.sh"
need_root
user_exists || die "run 20-worker-user.sh first"
token="${1:-}"; [[ "$token" != --* && -n "$token" ]] || die "usage: 40-runner.sh <registration-token> --yes"
ver="$(tooling actions_runner.version)"
gate "install actions runner $ver in $RUNNER_DIR, register as macmini-bcobs (labels self-hosted,bcobs)" "$@"
if [[ -f "$RUNNER_DIR/.runner" ]]; then ok "runner already configured"; exit 0; fi
pkg="actions-runner-osx-arm64-$ver.tar.gz"
url="https://github.com/actions/runner/releases/download/v$ver/$pkg"
expected="$(curl -fsSL "https://api.github.com/repos/actions/runner/releases/tags/v$ver" | "$NODE" -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{const m=JSON.parse(s).body.match(/BEGIN SHA osx-arm64 -->([0-9a-f]{64})/);console.log(m?m[1]:"")})')"
[[ -n "$expected" ]] || die "no published sha256 for $pkg"
install -d -o "$BCOBS_USER" -g staff -m 700 "$RUNNER_DIR"
as_bcobs bash -c "cd '$RUNNER_DIR' && curl -fsSLo '$pkg' '$url' && echo '$expected  $pkg' | shasum -a 256 -c - && tar xzf '$pkg' && rm '$pkg'"
ok "runner $ver downloaded, sha256 verified"
as_bcobs bash -c "cd '$RUNNER_DIR' && ./config.sh --unattended --replace --url '$REPO_URL' --token '$token' --name macmini-bcobs --labels bcobs --work _work" >/dev/null
echo "$BCOBS_PATH" > "$RUNNER_DIR/.path"
printf 'LANG=en_US.UTF-8\nTZ=Europe/Brussels\n' > "$RUNNER_DIR/.env"
chown "$BCOBS_USER":staff "$RUNNER_DIR/.path" "$RUNNER_DIR/.env"
ok "registered macmini-bcobs; start it with 50-daemon.sh"
