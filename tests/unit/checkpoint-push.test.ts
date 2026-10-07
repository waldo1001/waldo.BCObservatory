/**
 * A checkpoint push that loses the race to another push rebases with the item loop still writing (D58). It used to
 * stage those files without committing them, and `git pull --rebase` then refused with a dirty index.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { commitTracked } from "../../pipeline/orchestrator/nightly.js";

// commitTracked commits through the pipeline's own git calls: on a CI runner without a global identity they need one
for (const [k, v] of Object.entries({ GIT_AUTHOR_NAME: "t", GIT_AUTHOR_EMAIL: "t@e", GIT_COMMITTER_NAME: "t", GIT_COMMITTER_EMAIL: "t@e" })) process.env[k] ??= v;
const g = (cwd: string, ...a: string[]) => execFileSync("git", ["-c", "user.name=t", "-c", "user.email=t@e", ...a], { cwd, stdio: "pipe" }).toString();

test("a lost push race rebases around the files the item loop is still writing", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-race-"));
  const origin = join(root, "origin.git");
  execFileSync("git", ["init", "-q", "--bare", "-b", "main", origin]);
  const seed = join(root, "seed");
  g(root, "clone", "-q", origin, seed);
  mkdirSync(join(seed, "content"), { recursive: true });
  writeFileSync(join(seed, "content/a.md"), "a\n");
  g(seed, "add", "-A"); g(seed, "commit", "-q", "-m", "seed"); g(seed, "push", "-q", "origin", "HEAD:main");

  const mini = join(root, "mini"), laptop = join(root, "laptop");
  g(root, "clone", "-q", origin, mini);
  g(root, "clone", "-q", origin, laptop);

  // the Mini writes and commits checkpoint 1
  writeFileSync(join(mini, "content/b.md"), "b\n");
  assert.equal(await commitTracked(mini, "content: checkpoint 1", false), true);
  // meanwhile a code push lands on main: the Mini's push will lose the race
  writeFileSync(join(laptop, "pipeline.ts"), "code\n");
  g(laptop, "add", "-A"); g(laptop, "commit", "-q", "-m", "fix: code"); g(laptop, "push", "-q", "origin", "HEAD:main");
  // and the item loop keeps writing: one new file, one changed tracked file, neither committed yet
  writeFileSync(join(mini, "content/c.md"), "c\n");
  writeFileSync(join(mini, "content/a.md"), "a changed\n");

  await commitTracked(mini, "", true); // push only

  const remote = g(mini, "log", "--format=%s", "origin/main");
  assert.deepEqual(remote.trim().split("\n"), ["content: checkpoint 1", "fix: code", "seed"], "rebased on the code push and pushed");
  assert.equal(readFileSync(join(mini, "content/a.md"), "utf8"), "a changed\n", "the item loop's edit survives");
  assert.ok(existsSync(join(mini, "content/c.md")), "the item loop's new file survives");
  assert.equal(g(mini, "diff", "--cached", "--name-only").trim(), "", "nothing was staged by the push");
  assert.equal(g(mini, "stash", "list").trim(), "", "no stash is left behind");
});
