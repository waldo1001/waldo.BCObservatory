import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { ASKS, ATLAS_URL, PLUGIN_CMD, SERVER_CMD, SKILLS, TOOLS, installSteps, mcpMarkdown } from "../../site/src/lib/mcp.js";

const root = new URL("../../", import.meta.url);
const read = (p: string) => readFileSync(new URL(p, root), "utf8");

test("the tool list is the server's registerTool list, in order", () => {
  const registered = [...read("packages/mcp/src/server.ts").matchAll(/registerTool\("(\w+)"/g)].map((m) => m[1]);
  assert.deepEqual(TOOLS.map((t) => t.name), registered);
  for (const t of TOOLS) assert.ok(t.example.startsWith(`${t.name}(`), t.example);
});

test("the skill list is the plugin's skills folder, and the atlas URL is the plugin's", () => {
  const dirs = readdirSync(new URL("plugin/skills/", root)).sort();
  assert.deepEqual(SKILLS.map((s) => s.name).sort(), dirs);
  const mcp = JSON.parse(read("plugin/.mcp.json"));
  assert.equal(mcp.mcpServers["bc-code-atlas"].url, ATLAS_URL);
  assert.deepEqual(mcp.mcpServers["bc-observatory"].args, ["-y", "bc-observatory@latest"]);
});

test("every ask names a tool or the atlas, and the README's commands match", () => {
  const names = new Set(TOOLS.map((t) => t.name));
  for (const a of ASKS) for (const v of a.via.split(",")) { const w = v.trim().split(" ")[0]; assert.ok(names.has(w) || w === "bc-code-atlas", a.via); }
  const readme = read("README.md");
  assert.ok(readme.includes(SERVER_CMD) && readme.includes(PLUGIN_CMD));
});

test("the twin lists every tool, skill and install step, with the versions", () => {
  const md = mcpMarkdown({ server: "9.9.9", plugin: "8.8.8" }, "https://github.com/o/r", "https://example.test/x/");
  for (const t of TOOLS) assert.ok(md.includes(`**${t.name}**`));
  for (const s of SKILLS) assert.ok(md.includes(`**${s.name}**`));
  for (const s of installSteps("https://github.com/o/r")) assert.ok(md.includes(`### ${s.client}`) && md.includes(s.code));
  assert.ok(md.includes("9.9.9") && md.includes("8.8.8") && md.includes("[llms.txt](https://example.test/x/llms.txt)"));
  assert.ok(!md.includes("{{"));
});
