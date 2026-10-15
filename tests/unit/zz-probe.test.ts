import { test } from "node:test";
import { spawnSync } from "node:child_process";
import { writeFileSync, readdirSync } from "node:fs";

test("probe", () => {
  const env = { ...process.env };
  delete env.NODE_TEST_CONTEXT;
  const files = readdirSync("tests", { withFileTypes: true }).filter((d) => d.isDirectory()).flatMap((d) =>
    readdirSync(`tests/${d.name}`).filter((f) => f.endsWith(".test.ts") && f !== "zz-probe.test.ts").map((f) => `tests/${d.name}/${f}`));
  const r = spawnSync(process.execPath, ["--import", "tsx", "--test", "--test-reporter=spec", ...files], { encoding: "utf8", env, maxBuffer: 1 << 28 });
  const out = `${r.stdout}\n${r.stderr}`;
  const i = out.indexOf("failing tests:");
  writeFileSync("probe-out.txt", `${out.split("\n").filter((l) => l.startsWith("✖") || l.startsWith("ℹ pass") || l.startsWith("ℹ fail")).join("\n")}\n${i >= 0 ? out.slice(i, i + 6000) : "no failures"}`);
});
