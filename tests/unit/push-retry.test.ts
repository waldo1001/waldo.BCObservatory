import { test } from "node:test";
import assert from "node:assert/strict";
import { pushWithRetry } from "../../pipeline/orchestrator/nightly.js";

/** A fake git: `rejects` pushes fail before one succeeds; records every command. */
function fake(rejects: number, pullFails = false) {
  const calls: string[] = [];
  let left = rejects;
  const run = async (args: string[]) => {
    calls.push(args[0]);
    if (args[0] === "push" && left-- > 0) throw new Error("rejected: cannot lock ref");
    if (args[0] === "pull" && pullFails) throw new Error("CONFLICT");
    return "";
  };
  return { calls, run };
}
const noPause = async () => {};

test("a push that lands at once does not rebase", async () => {
  const f = fake(0);
  assert.equal(await pushWithRetry("/r", 6, f.run, noPause), 1);
  assert.deepEqual(f.calls, ["push"]);
});

test("two pushes racing the rebase: rebase and push again until it lands (run 37664505302)", async () => {
  const f = fake(2);
  assert.equal(await pushWithRetry("/r", 6, f.run, noPause), 3);
  assert.deepEqual(f.calls, ["push", "pull", "push", "pull", "push"]);
});

test("after the last attempt the rejection is thrown", async () => {
  const f = fake(10);
  await assert.rejects(pushWithRetry("/r", 3, f.run, noPause), /rejected/);
  assert.deepEqual(f.calls, ["push", "pull", "push", "pull", "push"]);
});

test("a rebase conflict is not retried", async () => {
  const f = fake(1, true);
  await assert.rejects(pushWithRetry("/r", 6, f.run, noPause), /CONFLICT/);
  assert.deepEqual(f.calls, ["push", "pull"]);
});
