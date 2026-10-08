import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";
import { lintWorkflow } from "../../scripts/check-workflows.js";

const SHA = "3d3c42e5aac5ba805825da76410c181273ba90b1";
const wf = (on: string, runsOn: string, run = "echo hi") =>
  `on:\n${on}\njobs:\n  j:\n    runs-on: ${runsOn}\n    steps:\n      - uses: actions/checkout@${SHA}\n      - run: ${run}\n`;

test("self-hosted jobs reject pull_request triggers and non-main pushes", () => {
  assert.deepEqual(lintWorkflow("ok", wf("  schedule:\n    - cron: '0 0 * * *'\n  workflow_dispatch:", "[self-hosted, bcobs]")), []);
  assert.match(lintWorkflow("pr", wf("  pull_request:", "[self-hosted, bcobs]"))[0], /must not trigger on pull_request/);
  assert.match(lintWorkflow("tgt", wf("  pull_request_target:", "self-hosted"))[0], /pull_request_target/);
  assert.match(lintWorkflow("push", wf("  push:\n    branches: [main, dev]", "[self-hosted, bcobs]"))[0], /exactly branches: \[main\]/);
  assert.deepEqual(lintWorkflow("hosted", wf("  pull_request:", "ubuntu-latest")), []);
});

test("no expressions inside run scripts, actions pinned by SHA", () => {
  assert.match(lintWorkflow("inj", wf("  workflow_dispatch:", "ubuntu-latest", "echo ${{ github.event.issue.title }}"))[0], /inside run/);
  const tag = "on:\n  workflow_dispatch:\njobs:\n  j:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v7\n";
  assert.match(lintWorkflow("tag", tag)[0], /full commit SHA/);
});

test("the repository's own workflows pass the lint", () => {
  const dir = resolve(ROOT, ".github", "workflows");
  for (const f of readdirSync(dir)) assert.deepEqual(lintWorkflow(f, readFileSync(resolve(dir, f), "utf8")), [], f);
});

test("nightly.yml (D81): a push to main on the render paths runs the derive stage; derive is a dispatch choice", () => {
  const y = readFileSync(resolve(ROOT, ".github", "workflows", "nightly.yml"), "utf8");
  assert.match(y, /push:\n\s+branches: \[main\]\n\s+paths: \["pipeline\/link\/\*\*", "pipeline\/render\/\*\*", "pipeline\/lib\/\*\*", "schemas\/\*\*", "config\/\*\*"\]/);
  assert.match(y, /options: \[all, ingest, derive\]/);
  assert.match(y, /STAGES: \$\{\{ github\.event_name == 'push' && 'derive' \|\| inputs\.stages \|\| 'all' \}\}/);
  assert.match(y, /"\$STAGES" == derive/);
  assert.match(y, /cancel-in-progress: false/, "a queued nightly is never cancelled by a derive");
  // the derive commit touches content/ and data/ only: no trigger path may cover them, or it would trigger itself
  for (const p of y.match(/paths: \[(.*)\]/)![1].split(",")) assert.ok(!/content|data/.test(p), p);
});
