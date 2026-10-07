import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { renderSearchIndex } from "../../pipeline/render/search.js";
import { toyModel } from "../helpers/toy-model.js";

const page = (fm: Record<string, unknown>, body: string) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\n${body}\n`;

function fixture(): string {
  const root = mkdtempSync(join(tmpdir(), "bcobs-mcp-"));
  const c = (p: string, fm: Record<string, unknown>, body: string) => writeText(join(root, "content", `${p}.md`), page(fm, body));
  c("objects/table/18", { id: "object/table/18", type: "object", title: 'Table 18 "Customer"', summary: "Customer master data, 165 fields.", tier: "official", object_type: "table", object_id: 18, app: "Base Application", tags: ["table"] }, "# Table 18 \"Customer\"\n\n## Fields");
  c("objects/codeunit/80", { id: "object/codeunit/80", type: "object", title: 'Codeunit 80 "Sales-Post"', summary: "Posts sales documents.", tier: "official", object_type: "codeunit", object_id: 80, app: "Base Application" }, "# Codeunit 80");
  c("localizations/be", { id: "localization/be", type: "localization", title: "Belgium (BE)", summary: "Belgian localization.", tier: "official", country: "BE" }, "# Belgium (BE)");
  c("posts/kauffmann-nl/1234", { id: "post/kauffmann-nl/1234", type: "post", title: "Designing agents", summary: "How the agent designer works.", tier: "community", source_id: "kauffmann-nl", published_at: "2026-10-01T08:00:00Z", system: "copilot" }, "# Designing agents");
  c("videos/AAAAAAAAAA1", { id: "video/AAAAAAAAAA1", type: "video", title: "What's new in posting", summary: "Posting preview.", tier: "official", channel: "yt-microsoft", published_at: "2026-09-01T00:00:00Z" }, "# Video");
  renderSearchIndex(join(root, "content"), join(root, "data"));
  writeJson(join(root, "data/code/diffs/version/28__29.json"), { objects: [{ key: "table/18", name: "Customer", change: "changed", fields: [{ id: "3", name: "Email", change: "added" }] }] });
  return root;
}

test("MCP server over stdio: every tool answers from a local checkout", async () => {
  const transport = new StdioClientTransport({ command: process.execPath, args: ["--import", "tsx", join(ROOT, "packages/mcp/src/server.ts")], env: { ...process.env, BC_OBSERVATORY_LOCAL: fixture() } as Record<string, string>, cwd: ROOT });
  const client = new Client({ name: "smoke", version: "0" });
  await client.connect(transport);
  try {
    const tools = (await client.listTools()).tools.map((t) => t.name).sort();
    assert.deepEqual(tools, ["blog_footprint", "cat", "diff_object", "feedback", "get_object", "localization", "ls", "search", "whats_new"]);
    const call = async (name: string, args: Record<string, unknown>) => ((await client.callTool({ name, arguments: args })).content as { text: string }[])[0].text;
    assert.match(await call("search", { query: "customer" }), /Table 18 "Customer".*path=objects\/table\/18/);
    assert.match(await call("search", { query: "agent", tier: "community" }), /Designing agents/);
    assert.match(await call("ls", {}), /objects\/ \(2 pages\)/);
    assert.match(await call("ls", { path: "objects/table" }), /objects\/table\/18: Table 18/);
    assert.match(await call("cat", { path: "localizations/be" }), /# Belgium \(BE\)/);
    assert.match(await call("get_object", { type: "codeunit", idOrName: "Sales-Post" }), /# Codeunit 80/);
    assert.match(await call("get_object", { type: "table", idOrName: "18" }), /## Fields/);
    assert.match(await call("get_object", { type: "table", idOrName: "99999" }), /Never invent object ids/);
    assert.match(await call("diff_object", { type: "table", id: "18", from: "28", to: "29" }), /changed[\s\S]*Email/);
    assert.match(await call("localization", { country: "BE" }), /Belgium/);
    const news = await call("whats_new", { since: "2026-09-15" });
    assert.match(news, /Designing agents/);
    assert.doesNotMatch(news, /posting/i, "dated before since");
    assert.match(await call("blog_footprint", { source: "kauffmann-nl" }), /kauffmann-nl: 1 items[\s\S]*copilot 1/);
    assert.match(await call("feedback", { path: "objects/table/18", message: "field 3 is wrong" }), /issues\/new\?title=Feedback/);
  } finally {
    await client.close();
  }
});

test("search is hybrid with a model: a synonym finds the page that keywords miss (D63)", async () => {
  const modelDir = mkdtempSync(join(tmpdir(), "bcobs-model-"));
  const t = toyModel({ customer: [1, 0, 0], client: [1, 0, 0], posts: [0, 1, 0], sales: [0, 1, 0], documents: [0, 1, 0], agent: [0, 0, 1] });
  writeText(join(modelDir, "tokenizer.json"), t.tokenizer);
  writeFileSync(join(modelDir, "model.safetensors"), t.bytes);
  writeJson(join(modelDir, "config.json"), t.config);
  const transport = new StdioClientTransport({ command: process.execPath, args: ["--import", "tsx", join(ROOT, "packages/mcp/src/server.ts")],
    env: { ...process.env, BC_OBSERVATORY_LOCAL: fixture(), BC_OBSERVATORY_MODEL_DIR: modelDir } as Record<string, string>, cwd: ROOT });
  const client = new Client({ name: "smoke", version: "0" });
  await client.connect(transport);
  try {
    const call = async (args: Record<string, unknown>) => ((await client.callTool({ name: "search", arguments: args })).content as { text: string }[])[0].text;
    const hybrid = await call({ query: "client" });
    assert.match(hybrid, /semantic/);
    assert.match(hybrid.split("\n")[1], /Table 18 "Customer"/, "the synonym ranks the Customer table first");
    assert.match(await call({ query: "client", mode: "keyword" }), /No pages match/, "keywords alone miss it");
    assert.match(await call({ query: "customer", mode: "keyword" }), /Table 18/);
  } finally {
    await client.close();
  }
});

test("without a model, search says so and stays keyword-only", async () => {
  const transport = new StdioClientTransport({ command: process.execPath, args: ["--import", "tsx", join(ROOT, "packages/mcp/src/server.ts")],
    env: { ...process.env, BC_OBSERVATORY_LOCAL: fixture(), BC_OBSERVATORY_MODEL_DIR: join(tmpdir(), "no-such-model-dir") } as Record<string, string>, cwd: ROOT });
  const client = new Client({ name: "smoke", version: "0" });
  await client.connect(transport);
  try {
    const text = ((await client.callTool({ name: "search", arguments: { query: "customer", mode: "semantic" } })).content as { text: string }[])[0].text;
    assert.match(text, /semantic search unavailable/);
    assert.match(text, /Table 18/, "keyword results instead");
  } finally {
    await client.close();
  }
});
