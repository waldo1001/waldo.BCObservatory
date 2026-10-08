import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { renderSearchIndex } from "../../pipeline/render/search.js";
import { ASKS, ATLAS_URL, PLUGIN_CMD, SERVER_CMD, SKILLS, TOOLS, installSteps, mcpMarkdown } from "../../site/src/lib/mcp.js";
import { toyModel } from "../helpers/toy-model.js";

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

// ---------------------------------------------------------------------------------------------- the server over stdio
// (D35, D63, D65; restored after D84, now on the shared scorer of D86)

const page = (fm: Record<string, unknown>, body: string) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\n${body}\n`;

function fixture(): string {
  const root = mkdtempSync(join(tmpdir(), "bcobs-mcp-"));
  const c = (p: string, fm: Record<string, unknown>, body: string) => writeText(join(root, "content", `${p}.md`), page(fm, body));
  c("objects/table/18", { id: "object/table/18", type: "object", title: 'Table 18 "Customer"', summary: "Customer master data, 165 fields.", tier: "official", object_type: "table", object_id: 18, name: "Customer", app: "Base Application", namespace: "Microsoft.Sales.Customer", tags: ["table"], relations: { referenced_by: 260, pages: 30, event_subscribers: 18 } }, "# Table 18 \"Customer\"\n\n## Fields");
  c("objects/codeunit/80", { id: "object/codeunit/80", type: "object", title: 'Codeunit 80 "Sales-Post"', summary: "Posts sales documents.", tier: "official", object_type: "codeunit", object_id: 80, name: "Sales-Post", app: "Base Application", namespace: "Microsoft.Sales.Posting" }, "# Codeunit 80");
  c("objects/table/11300-be", { id: "object/table/11300-be", type: "object", title: 'Table 11300 "VAT VIES Correction" (BE)', summary: "BE VAT.", tier: "official", object_type: "table", object_id: 11300, name: "VAT VIES Correction", app: "Base Application", country: "BE", namespace: "Microsoft.Finance.VAT.Reporting" }, "# Table 11300 BE");
  c("objects/page/21", { id: "object/page/21", type: "object", title: 'Page 21 "Customer Card"', summary: "A card.", tier: "official", object_type: "page", object_id: 21, name: "Customer Card", app: "Base Application", namespace: "Microsoft.Sales.Customer" }, "# Page 21");
  c("objects/page/22", { id: "object/page/22", type: "object", title: 'Page 22 "Customer List"', summary: "A list.", tier: "official", object_type: "page", object_id: 22, name: "Customer List", caption: "Customers", app: "Base Application", namespace: "Microsoft.Sales.Customer" }, "# Page 22");
  c("localizations/be", { id: "localization/be", type: "localization", title: "Belgium (BE)", summary: "Belgian localization.", tier: "official", country: "BE" }, "# Belgium (BE)");
  c("posts/kauffmann-nl/1234", { id: "post/kauffmann-nl/1234", type: "post", title: "Designing agents", summary: "How the agent designer works.", tier: "community", source_id: "kauffmann-nl", published_at: "2026-10-01T08:00:00Z", system: "copilot" }, "# Designing agents");
  c("changes/bcapps/12207", { id: "change/bcapps/12207", type: "change", title: "#12207 [MCP] Prepare Data Query Tools for billing", summary: "Data query tools get billing hooks.", tier: "official", source_id: "bcapps-prs", merged_at: "2026-10-07T11:29:33Z", change_kind: "feature", tags: ["feature", "main", "codeunit data query tools"] }, "# #12207");
  c("videos/AAAAAAAAAA1", { id: "video/AAAAAAAAAA1", type: "video", title: "What's new in posting", summary: "Posting preview.", tier: "official", channel: "yt-microsoft", published_at: "2026-09-01T00:00:00Z" }, "# Video");
  c("features/9999", { id: "feature/9999", type: "feature", title: "Agents everywhere", summary: "A roadmap feature.", tier: "official", status: "planned", ga_date: "2099-04-01" }, "# Feature");
  // D65: three hubs that share the word, an object whose name has it, a page that has it only in its caption
  c("topics/business-central/business-functionality/sales/subscription-billing", { id: "topic/business-central/business-functionality/sales/subscription-billing", type: "topic", title: "Subscription billing", summary: "Recurring invoicing for contracts.", tier: "official", system: "sales",
    learn_toc_path: ["Business functionality", "Sales", "Subscription billing"], narrative: "generated", review: { state: "reviewed" }, coverage: { learn: 47, code: 27, video: 2, blog: 0 } }, "# Subscription billing");
  c("topics/business-central/dev-itpro/cloud-migration-api/subscriptions", { id: "topic/business-central/dev-itpro/cloud-migration-api/subscriptions", type: "topic", title: "Subscriptions", summary: "Cloud migration API reference.", tier: "official", system: "administration",
    learn_toc_path: ["Administration", "Cloud Migration API", "Subscriptions"], narrative: "none", review: { state: "unreviewed" }, coverage: { learn: 5, code: 0, video: 0, blog: 0 } }, "# Subscriptions");
  c("objects/codeunit/8005", { id: "object/codeunit/8005", type: "object", title: 'Codeunit 8005 "Create Subscription Header"', summary: "Creates a subscription header from a sales line.", tier: "official", object_type: "codeunit", object_id: 8005, name: "Create Subscription Header", app: "Subscription Billing" }, "# Codeunit 8005");
  c("objects/page/8059", { id: "object/page/8059", type: "object", title: 'Page 8059 "Service Objects"', summary: "A list page.", tier: "official", object_type: "page", object_id: 8059, name: "Service Objects", app: "Subscription Billing", caption: "Subscriptions" }, "# Page 8059");
  renderSearchIndex(join(root, "content"), join(root, "data"));
  writeJson(join(root, "data/code/diffs/version/28__29.json"), { objects: [{ key: "table/18", name: "Customer", change: "changed", fields: [{ id: "3", name: "Email", change: "added" }] }] });
  return root;
}
const connect = async (env: Record<string, string>) => {
  const transport = new StdioClientTransport({ command: process.execPath, args: ["--import", "tsx", join(ROOT, "packages/mcp/src/server.ts")], env: { ...process.env, ...env } as Record<string, string>, cwd: ROOT });
  const client = new Client({ name: "smoke", version: "0" });
  await client.connect(transport);
  const call = async (name: string, args: Record<string, unknown>) => ((await client.callTool({ name, arguments: args })).content as { text: string }[])[0].text;
  return { client, call };
};

test("MCP server over stdio: every tool answers from a local checkout", async () => {
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: fixture() });
  try {
    const tools = (await client.listTools()).tools.map((t) => t.name).sort();
    assert.deepEqual(tools, ["blog_footprint", "cat", "diff_object", "feedback", "get_object", "localization", "ls", "search", "whats_new"]);
    assert.match(await call("search", { query: "customer" }), /Table 18 "Customer".*path=objects\/table\/18 \[keyword\]/);
    assert.match(await call("search", { query: "agent", tier: "community" }), /Designing agents/);
    assert.match(await call("ls", {}), /objects\/ \(7 pages\)/);
    assert.match(await call("ls", {}), /changes\/ \(1 pages\)/);
    assert.match(await call("ls", { path: "objects/table" }), /objects\/table\/18: Table 18/);
    assert.match(await call("cat", { path: "localizations/be" }), /# Belgium \(BE\)/);
    assert.match(await call("cat", { path: "objects/codeunit/80#event-OnAfterPostSalesDoc" }), /# Codeunit 80/, "a symbol path reads its object's page");
    assert.match(await call("get_object", { type: "codeunit", idOrName: "Sales-Post" }), /# Codeunit 80/);
    assert.match(await call("get_object", { type: "table", idOrName: "18" }), /## Fields/);
    assert.match(await call("get_object", { type: "table", idOrName: "99999" }), /Never invent object ids/);
    assert.match(await call("diff_object", { type: "table", id: "18", from: "28", to: "29" }), /changed[\s\S]*Email/);
    assert.match(await call("localization", { country: "BE" }), /Belgium/);
    const news = await call("whats_new", { since: "2026-09-15" });
    assert.match(news, /Designing agents/);
    assert.match(news, /#12207 \[MCP\] Prepare Data Query Tools/, "change pages are news by merge date (AC7)");
    assert.doesNotMatch(news, /posting/i, "dated before since");
    assert.doesNotMatch(news, /Agents everywhere/, "nothing dated after today (D86)");
    assert.match(news, /1 roadmap feature scheduled after today: pass include_future: true$/);
    assert.match(await call("whats_new", { since: "2026-09-15", include_future: true }), /^3 items[\s\S]*Agents everywhere/);
    assert.match(await call("search", { query: "billing", type: "change" }), /changes\/bcapps\/12207/);
    assert.match(await call("search", { query: "data query tools", type: "change", mode: "keyword" }), /#12207/, "by object name");
    assert.match(await call("blog_footprint", { source: "kauffmann-nl" }), /kauffmann-nl: 1 items[\s\S]*copilot 1/);
    const sub = await call("search", { query: "subscription", mode: "keyword" });
    assert.match(sub.split("\n")[1], /^- Subscription billing \[topic/, "the reviewed 47-page hub first (D65)");
    assert.match(sub, /in: Business functionality › Sales\n  47 Learn pages · 27 objects · 2 videos · reviewed/, "where it sits and how big it is");
    assert.match(await call("search", { query: "subscriptions", type: "object", mode: "keyword" }), /Page 8059 "Service Objects" \(captioned "Subscriptions"\)/, "found by its caption");
    assert.match(await call("feedback", { path: "objects/table/18", message: "field 3 is wrong" }), /issues\/new\?title=Feedback/);
  } finally {
    await client.close();
  }
});

test("D86: references, filters, get_object by caption and country, hints", async () => {
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: fixture() });
  try {
    const t = await call("search", { query: "t18" });
    assert.match(t.split("\n")[0], /^1 results, keyword \(exact band: 1\)/);
    assert.match(t.split("\n")[1], /^- Table 18 "Customer"/);
    assert.match((await call("search", { query: "cu 80" })).split("\n")[1], /Codeunit 80 "Sales-Post"/);
    assert.match((await call("search", { query: "BE" })).split("\n")[1], /Belgium \(BE\)/);
    assert.match((await call("search", { query: "table 11300" })).split("\n")[1], /VAT VIES Correction" \(BE\)/);
    assert.match((await call("search", { query: "client", mode: "keyword" })).split("\n")[1], /Table 18 "Customer"/, "the synonym list, no model needed");
    assert.match((await call("search", { query: "customer", system: "sales", type: "object" })).split("\n")[1], /Table 18 "Customer"/, "objects carry their system");
    assert.match(await call("search", { query: "customer", system: "g/l" }), /^No pages match/, "a system by its alias");
    assert.match(await call("search", { query: "vat", country: "be" }), /VAT VIES Correction/);
    assert.match(await call("search", { query: "subscription", app: "subscription billing", object_type: "page" }), /^1 results[\s\S]*Page 8059/);
    assert.match(await call("search", { query: "cx 80" }), /^No pages match[\s\S]*Hint: Did you mean "cu 80" \(codeunit 80\)\? \(search "cu 80"\)/);
    assert.match(await call("get_object", { type: "page", idOrName: "Customers" }), /# Page 22/, "by caption");
    assert.match(await call("get_object", { type: "table", idOrName: "VAT VIES Correction" }), /# Table 11300 BE/);
    assert.match(await call("get_object", { type: "table", idOrName: "VAT VIES Correction (BE)" }), /# Table 11300 BE/);
    assert.match(await call("get_object", { type: "table", idOrName: "11300", country: "BE" }), /# Table 11300 BE/);
    assert.match(await call("get_object", { type: "table", idOrName: "11300-be" }), /# Table 11300 BE/);
    assert.match(await call("get_object", { type: "table", idOrName: "t18" }), /## Fields/);
    assert.match(await call("get_object", { type: "t", idOrName: "customer" }), /## Fields/, "type abbreviations and names are case-insensitive");
  } finally {
    await client.close();
  }
});

test("search is hybrid with a model: exact band pinned, the rest fused with meaning, every hit says how it was found (D63, D86)", async () => {
  const modelDir = mkdtempSync(join(tmpdir(), "bcobs-model-"));
  const t = toyModel({ customer: [1, 0, 0], client: [1, 0, 0], buyer: [1, 0, 0], posts: [0, 1, 0], sales: [0, 1, 0], documents: [0, 1, 0], agent: [0, 0, 1] });
  writeText(join(modelDir, "tokenizer.json"), t.tokenizer);
  writeFileSync(join(modelDir, "model.safetensors"), t.bytes);
  writeJson(join(modelDir, "config.json"), t.config);
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: fixture(), BC_OBSERVATORY_MODEL_DIR: modelDir });
  try {
    const hybrid = await call("search", { query: "client" });
    assert.match(hybrid, /keyword \+ meaning/);
    assert.match(hybrid.split("\n")[1], /Table 18 "Customer".*\[both\]/, "the synonym and the meaning agree");
    const buyer = await call("search", { query: "buyer" });
    assert.match(buyer.split("\n")[1], /"Customer[^"]*".*\[meaning\]/, "a word no synonym knows: found by meaning only");
    assert.match(await call("search", { query: "buyer", mode: "keyword" }), /No pages match/, "keywords alone miss it");
    const pinned = await call("search", { query: "t18" });
    assert.match(pinned.split("\n")[0], /\(exact band: 1\)/);
    assert.match(pinned.split("\n")[1], /Table 18 "Customer".*\[(keyword|both)\]/);
  } finally {
    await client.close();
  }
});

test("without a model, search says so and stays keyword-only", async () => {
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: fixture(), BC_OBSERVATORY_MODEL_DIR: join(tmpdir(), "no-such-model-dir") });
  try {
    const text = await call("search", { query: "customer", mode: "semantic" });
    assert.match(text, /semantic search unavailable/);
    assert.match(text, /Table 18/, "keyword results instead");
  } finally {
    await client.close();
  }
});

test("reciprocal rank fusion (k = 60) and the filters of a search call", async () => {
  const { fuse, keepOf } = await import("../../packages/mcp/src/server.js");
  assert.deepEqual(fuse([["a", "b", "c"], ["c", "a"]]), ["a", "c", "b"]);
  const keep = keepOf({ query: "x", system: "G/L", country: "BE", object_type: "t" });
  assert.equal(keep({ id: "o", kind: "page", type: "object", name: "", title: "", layer: 2, importance: 0, system: "finance", country: "be", objectType: "table" }), true);
  assert.equal(keep({ id: "o", kind: "page", type: "object", name: "", title: "", layer: 0, importance: 0, system: "finance", country: null, objectType: "table" }), false);
});
