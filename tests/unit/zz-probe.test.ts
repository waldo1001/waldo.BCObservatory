import { test } from "node:test";
import { spawnSync } from "node:child_process";
import { writeFileSync, existsSync, unlinkSync } from "node:fs";

const OUT = "probe-out.txt";
test("probe", () => {
  if (existsSync(OUT) && process.env.PROBE_CLEAN) { unlinkSync(OUT); return; }
  const r = spawnSync(process.execPath, ["--import", "tsx", "--test", "--test-reporter=spec", "tests/unit/mcp-sections.test.ts", "tests/unit/mcp.test.ts"], { encoding: "utf8" });
  writeFileSync(OUT, `${r.stdout}\n${r.stderr}`);
});
