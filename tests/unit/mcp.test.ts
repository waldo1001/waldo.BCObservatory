import { test } from "node:test";
import assert from "node:assert/strict";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { renderSearchIndex } from "../../pipeline/render/search.js";
import { ASKS, ATLAS_URL, COPILOT_PLUGIN_CMD, LEARN_URL, PLUGIN_CMD, PLUGIN_SERVERS, SERVER_CMD, SKILLS, TOOLS, installSteps, mcpMarkdown } from "../../site/src/lib/mcp.js";
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

test("D104: the plugin's skills are bcobs-*, each named as its folder, and none names an old bc-* skill", () => {
  for (const d of readdirSync(new URL("plugin/skills/", root))) {
    assert.ok(d.startsWith("bcobs-"), d);
    const skill = read(`plugin/skills/${d}/SKILL.md`);
    assert.equal(skill.match(/^name: (.+)$/m)?.[1], d, `${d}/SKILL.md name`);
    assert.doesNotMatch(skill, /\bbc-(lookup|whats-new|localization|grounding)\b/, `${d}/SKILL.md names an old skill`);
  }
});

test("D96: the plugin connects Microsoft's Learn MCP at LEARN_URL, and bcobs-lookup routes a Learn hit to microsoft_docs_fetch", () => {
  const mcp = JSON.parse(read("plugin/.mcp.json"));
  assert.equal(mcp.mcpServers["microsoft-learn"].url, LEARN_URL);
  assert.equal(mcp.mcpServers["microsoft-learn"].type, "http");
  const lookup = read("plugin/skills/bcobs-lookup/SKILL.md");
  for (const n of ["microsoft_docs_fetch", "microsoft_code_sample_search", "microsoft_docs_search"]) assert.ok(lookup.includes(n), n);
  assert.ok(read("plugin/skills/bcobs-grounding/SKILL.md").includes("microsoft-learn"));
  assert.ok(read("plugin/skills/bcobs-localization/SKILL.md").includes("microsoft_docs_fetch"));
  assert.ok(JSON.stringify(installSteps("https://github.com/o/r")).includes(LEARN_URL));
});

test("what the plugin installs: PLUGIN_SERVERS is plugin/.mcp.json, and plugin/README.md and the twin name every server and skill (D96)", () => {
  const mcp = JSON.parse(read("plugin/.mcp.json")).mcpServers as Record<string, { command?: string; args?: string[]; url?: string }>;
  assert.deepEqual(PLUGIN_SERVERS.map((p) => p.name).sort(), Object.keys(mcp).sort());
  for (const p of PLUGIN_SERVERS) {
    const c = mcp[p.name];
    if (c.url) assert.equal(p.url, c.url, p.name);
    else assert.equal(p.command, [c.command, ...(c.args ?? [])].join(" "), p.name);
    assert.ok(p.by && p.for, `${p.name} says who runs it and what it is for`);
  }
  assert.equal(mcp["bc-observatory"].command, "npx");
  const readme = read("plugin/README.md");
  for (const p of PLUGIN_SERVERS) assert.ok(readme.includes(`\`${p.name}\``), `plugin/README.md names ${p.name}`);
  for (const d of readdirSync(new URL("plugin/skills/", root))) assert.ok(readme.includes(`\`${d}\``), `plugin/README.md names the skill ${d}`);
  for (const u of Object.values(mcp).map((c) => c.url).filter(Boolean)) assert.ok(readme.includes(u!), `plugin/README.md gives ${u}`);
  const plugin = JSON.parse(read("plugin/.claude-plugin/plugin.json")).version, server = JSON.parse(read("packages/mcp/package.json")).version;
  assert.ok(readme.includes(plugin) && readme.includes(server), `plugin/README.md says plugin ${plugin} and server ${server}`);
  const marketplace = JSON.parse(read(".claude-plugin/marketplace.json")).plugins.find((p: { name: string }) => p.name === "bc-observatory").version;
  assert.equal(marketplace, plugin, ".claude-plugin/marketplace.json carries the plugin version (D97: a release bumps both)");
  const md = mcpMarkdown({ server: "9.9.9", plugin: "8.8.8" }, "https://github.com/o/r", "https://example.test/x/");
  assert.ok(md.includes("## What the plugin installs"));
  for (const p of PLUGIN_SERVERS) assert.ok(md.includes(`\`${p.name}\``) && md.includes(p.command ?? p.url!), p.name);
  assert.ok(read("README.md").includes("plugin/README.md") && read("AGENTS.md").includes("plugin/README.md"), "README.md and AGENTS.md point to it");
});

test("every ask names a tool or the atlas, and the README's commands match", () => {
  const names = new Set(TOOLS.map((t) => t.name));
  for (const a of ASKS) for (const v of a.via.split(",")) { const w = v.trim().split(" ")[0]; assert.ok(names.has(w) || w === "bc-code-atlas" || w === "bc-observatory", a.via); }
  const readme = read("README.md");
  assert.ok(readme.includes(SERVER_CMD) && readme.includes(PLUGIN_CMD));
  assert.ok(readme.includes(COPILOT_PLUGIN_CMD) && read("plugin/README.md").includes(COPILOT_PLUGIN_CMD), "both READMEs give the Copilot CLI install (D104)");
});

test("the twin lists every tool, skill and install step, with the versions", () => {
  const md = mcpMarkdown({ server: "9.9.9", plugin: "8.8.8" }, "https://github.com/o/r", "https://example.test/x/");
  for (const t of TOOLS) assert.ok(md.includes(`**${t.name}**`));
  for (const s of SKILLS) assert.ok(md.includes(`**${s.name}**`));
  for (const s of installSteps("https://github.com/o/r")) assert.ok(md.includes(`### ${s.client}`) && md.includes(s.code));
  assert.ok(md.includes("9.9.9") && md.includes("8.8.8") && md.includes("[llms.txt](https://example.test/x/llms.txt)"));
  assert.ok(!md.includes("{{"));
  assert.equal(installSteps("https://github.com/o/r")[1].code, COPILOT_PLUGIN_CMD, "D104: Copilot CLI is install step 2");
  assert.ok(md.includes("## The plugin (Claude Code, GitHub Copilot CLI)"));
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
/** fixture() plus Codeunit 12 with 60 events: about 6,500 characters, over a 5,000-character budget (D93 test 4). */
function bigFixture(): string {
  const root = fixture();
  const events = Array.from({ length: 60 }, (_, i) => `- \`OnEvent${i + 1}(var GenJnlLine: Record "Gen. Journal Line")\` (integration): Raised at step ${i + 1} of posting.`);
  // plain YAML as the pipeline writes it, so the answer starts "---\nid: object/codeunit/12\n" like a real page
  const fm = ["id: object/codeunit/12", "type: object", 'title: Codeunit 12 "Gen. Jnl.-Post Line"', "summary: Posts journal lines.", "tier: official", "object_type: codeunit", "object_id: 12",
    "name: Gen. Jnl.-Post Line", "app: Base Application", "namespace: Microsoft.Finance.GeneralLedger.Posting"];
  writeText(join(root, "content", "objects/codeunit/12.md"), `---\n${fm.join("\n")}\n---\n\n# Codeunit 12 "Gen. Jnl.-Post Line"\n\n## Events published\n\n${events.join("\n")}\n`);
  renderSearchIndex(join(root, "content"), join(root, "data"));
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

test("D93: tool descriptions teach call forms, not the scoring formula, and the page tools take section, offset, limit", async () => {
  const { client } = await connect({ BC_OBSERVATORY_LOCAL: fixture() });
  try {
    const tools = (await client.listTools()).tools;
    const total = tools.reduce((n, t) => n + (t.description ?? "").length, 0);
    for (const t of tools) assert.ok((t.description ?? "").length <= 1000, `${t.name}: ${(t.description ?? "").length} characters`);
    assert.ok(total <= 3300, `the nine descriptions add up to ${total} characters`);
    const search = tools.find((t) => t.name === "search")!.description!;
    assert.ok(search.includes("'event: OnAfterPost'"), "the symbol prefixes stay");
    for (const v of ["topic", "app", "feature", "object", "localization", "video", "post", "change", "source", "digest", "release"]) assert.ok(search.includes(v), `type value ${v}`);
    assert.ok(!search.includes("+10") && !search.includes("title or caption 3"), "the scoring formula lives in the README");
    const getObject = tools.find((t) => t.name === "get_object")!.description!;
    assert.ok(getObject.includes("'controls'") && getObject.includes("kind: 'page'"), "D97: a page's key and the cheap id check");
    // phase B: the three page tools say how to read one section
    for (const name of ["get_object", "cat", "localization"]) {
      const t = tools.find((x) => x.name === name)!;
      for (const w of ["section", "offset", "limit"]) assert.ok(t.description!.includes(w), `${name} description: ${w}`);
      for (const w of ["section", "offset", "limit"]) assert.ok(w in (t.inputSchema.properties ?? {}), `${name} schema: ${w}`);
    }
  } finally {
    await client.close();
  }
});

test("D93: a page over the budget comes back compact; section, offset and limit page through it; a symbol path returns its row", async () => {
  const root = bigFixture();
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: root, BC_OBSERVATORY_MAX_CHARS: "5000" });
  try {
    const compact = await call("get_object", { type: "codeunit", idOrName: "12" });
    assert.ok(compact.startsWith("---\nid: object/codeunit/12\n"), compact.slice(0, 40));
    assert.ok(compact.includes("Compact view: this page is"));
    assert.ok(compact.includes('→ 55 more of 60: cat("objects/codeunit/12", section: "events", offset: 5)'));
    assert.ok(compact.length < 5000, String(compact.length));
    const slice = await call("get_object", { type: "codeunit", idOrName: "12", section: "events", offset: 50, limit: 5 });
    assert.match(slice, /^Codeunit 12 "Gen\. Jnl\.-Post Line", section "events": https:\/\/waldo1001\.github\.io\/waldo\.BCObservatory\/objects\/codeunit\/12\/\n/);
    assert.match(slice, /OnEvent51\([\s\S]*OnEvent55\(/);
    assert.ok(slice.endsWith('Rows 51-55 of 60. Next: cat("objects/codeunit/12", section: "events", offset: 55)\n'), slice.slice(-100));
    assert.ok((await call("cat", { path: "objects/codeunit/12", section: "events", offset: 58 })).endsWith("Rows 59-60 of 60.\n"));
    const member = await call("cat", { path: "objects/codeunit/12#event-OnEvent7" });
    assert.ok(member.startsWith('Codeunit 12 "Gen. Jnl.-Post Line", event OnEvent7:'), member.slice(0, 80));
    assert.ok(!member.includes("OnEvent8"));
    assert.equal(await call("localization", { country: "BE", section: "overview" }), 'No section "overview" on localizations/be. Sections: frontmatter.');
    assert.match(await call("cat", { path: "objects/codeunit/80#event-OnAfterPostSalesDoc" }), /# Codeunit 80/, "a symbol path without its row falls back to the page");
    assert.match(await call("get_object", { type: "table", idOrName: "18" }), /## Fields/, "a small page stays whole");
    assert.match(await call("get_object", { type: "codeunit", idOrName: "12", offset: 5 }), /^offset and limit read one section: cat\("objects\/codeunit\/12", section: "<key>", offset: 5\)\. Sections: events, frontmatter\.$/);
  } finally {
    await client.close();
  }
  for (const env of [{}, { BC_OBSERVATORY_MAX_CHARS: "0" }] as Record<string, string>[]) {
    const { client: c2, call: call2 } = await connect({ BC_OBSERVATORY_LOCAL: root, ...env });
    try {
      const whole = await call2("get_object", { type: "codeunit", idOrName: "12" });
      assert.ok(whole.startsWith("---\n") && whole.includes("OnEvent60(") && !whole.includes("Compact view:"), `whole page with ${JSON.stringify(env)}`);
      if (env.BC_OBSERVATORY_MAX_CHARS === "0") {
        const all = await call2("get_object", { type: "codeunit", idOrName: "12", section: "events" });
        assert.ok(all.includes("OnEvent1(") && all.includes("OnEvent60(") && !all.includes("Rows "), "with the budget off a section comes back whole");
      }
    } finally {
      await c2.close();
    }
  }
});

test("D86: references, filters, get_object by caption and country, hints", async () => {
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: fixture() });
  try {
    const t = await call("search", { query: "t18" });
    assert.match(t.split("\n")[0], /^1 results, keyword \(read one with cat\(path\)\):$/, "no meaning list: no exact band in the header (D95)");
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
    assert.match(pinned.split("\n")[0], /^1 results, keyword \(read one with cat\(path\)\):$/, "the toy model knows no 't18': the keyword list alone, so no exact band in the header (D95)");
    assert.match(pinned.split("\n")[1], /Table 18 "Customer".*\[(keyword|both)\]/);
    assert.match(hybrid.split("\n")[0], /^\d+ results, keyword \+ meaning \(exact band: \d+\) \(read one with cat\(path\)\):$/, "the exact band is named when the two lists meet");
    assert.match(buyer.split("\n")[0], /^No keyword match for "buyer"; \d+ pages by meaning only \(read one with cat\(path\)\):$/, "an empty keyword list says so (D95)");
    assert.doesNotMatch(buyer, /exact band/);
  } finally {
    await client.close();
  }
});

test("D101: search sort 'date' lists the keyword matches newest first, without the meaning list; 'newest' is no value", async () => {
  const modelDir = mkdtempSync(join(tmpdir(), "bcobs-model-"));
  const t = toyModel({ customer: [1, 0, 0], agent: [0, 0, 1], agents: [0, 0, 1] });
  writeText(join(modelDir, "tokenizer.json"), t.tokenizer);
  writeFileSync(join(modelDir, "model.safetensors"), t.bytes);
  writeJson(join(modelDir, "config.json"), t.config);
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: fixture(), BC_OBSERVATORY_MODEL_DIR: modelDir });
  try {
    const dated = await call("search", { query: "agent", sort: "date" });
    assert.match(dated.split("\n")[0], /^2 results, keyword, newest first/);
    const lines = dated.split("\n").filter((l) => l.startsWith("- "));
    assert.match(lines[0], /^- Agents everywhere/);
    assert.match(lines[1], /^- Designing agents/);
    assert.doesNotMatch(dated, /\[meaning\]/);
    const sem = await call("search", { query: "agent", sort: "date", mode: "semantic" });
    assert.match(sem.split("\n")[0], /^2 results, keyword, newest first \(sort "date" orders the keyword matches; mode "semantic" ignored\)/);
    assert.deepEqual(sem.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(0, 20)), lines.map((l) => l.slice(0, 20)));
    assert.match((await call("search", { query: "agent" })).split("\n")[0], /^\d+ results, keyword/, "today's answer");
    assert.doesNotMatch(await call("search", { query: "agent" }), /newest first/);
    let failed = false;
    try {
      const r = await client.callTool({ name: "search", arguments: { query: "agent", sort: "newest" } });
      failed = !!r.isError;
    } catch { failed = true; }
    assert.ok(failed, "sort: 'newest' fails the input schema");
  } finally {
    await client.close();
  }
});

test("D101: whats_new lists a weekly digest by the Monday of its week", async () => {
  const root = fixture();
  writeText(join(root, "content", "digests/2026-W41.md"), page({ id: "digest/2026-W41", type: "digest", title: "BC Observatory weekly: 2026-W41", summary: "Business Central, week 2026-W41.", tier: "mixed", week: "2026-W41" }, "# Digest"));
  renderSearchIndex(join(root, "content"), join(root, "data"));
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: root });
  try {
    assert.match(await call("whats_new", { since: "2026-10-01" }), /BC Observatory weekly: 2026-W41.*, 2026-10-05\]/);
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

/** fixture() plus a symbols index of Codeunit 80's events, as data/index/symbols-*.json carries them. */
function symbolsFixture(withBe = false): string {
  const root = fixture();
  // D95 phase B: what the BE layer adds to Table 18 "Customer", as rows with the country last and as the diff the MCP reads for the block
  const be = withBe ? { fields: [["table/18", "Enterprise No.", 11310, "Text[50]", "Specifies the enterprise number of the customer.", "be"], ["table/18", "Domiciliation No.", 2000020, "Text[12]", null, "be"]], events: [["table/18", "OnBeforeValidateEnterpriseNo", "integration", 0, null, null, "be"]] } : { fields: [], events: [] };
  if (withBe) { mkdirSync(join(root, "data/code/diffs/country"), { recursive: true }); copyFileSync(new URL("../fixtures/country-diff/29-be.json", import.meta.url), join(root, "data/code/diffs/country/29-be.json")); }
  const rows = [["codeunit/80", "OnAfterPostSalesDoc", "integration", 8, "Raised after posting a sales document.", null], ["codeunit/80", "OnAfterPostSalesDocDropShipment", "integration", 0, null, null], ...be.events];
  const fields = [["table/18", "VAT Bus. Posting Group", 110, "Code[20]", "Specifies the VAT specification."], ["table/18", "Posting Date", 99, "Date", "The posting date."], ...be.fields];
  const procs = [["codeunit/80", "L", 0, null, null, null], ["codeunit/80", "E", 0, null, null, null]];
  const shard = (kind: string, name: string, r: unknown[][]) => { writeJson(join(root, `data/index/symbols-${kind}-${name}.json`), { schema: "bcobs-symbols@1", rows: r }); return { file: `symbols-${kind}-${name}.json`, count: r.length, sha256: name }; };
  writeJson(join(root, "data/index/symbols-manifest.json"), { schema: "bcobs-symbols@1", major: "29", kinds: { events: shard("events", "aaaaaaaaaaaa", rows), fields: shard("fields", "bbbbbbbbbbbb", fields), procs: shard("procs", "cccccccccccc", procs) } });
  return root;
}

test("D95: a kind: query with no hit says what is not there and never pads with pages; an empty keyword list is the first line", async () => {
  const modelDir = mkdtempSync(join(tmpdir(), "bcobs-model-"));
  const t = toyModel({ customer: [1, 0, 0], event: [0, 1, 0], widget: [0, 1, 0], posting: [0, 1, 0], buyer: [1, 0, 0] });
  writeText(join(modelDir, "tokenizer.json"), t.tokenizer);
  writeFileSync(join(modelDir, "model.safetensors"), t.bytes);
  writeJson(join(modelDir, "config.json"), t.config);
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: symbolsFixture(), BC_OBSERVATORY_MODEL_DIR: modelDir });
  try {
    const none = await call("search", { query: "event: OnBeforeValidateWidgetCode", limit: 3 });
    assert.match(none, /^No event named "OnBeforeValidateWidgetCode"\.$/, "the first sentence only: nothing is near");
    assert.doesNotMatch(none, /\[meaning\]|No pages match|results/);
    // longer than any name, so the stem and the typo rules meet nothing; the name it extends is the nearest
    const near = await call("search", { query: "event: OnAfterPostSalesDocDropShipmentQuux" });
    assert.match(near, /^No event named "OnAfterPostSalesDocDropShipmentQuux"\. Nearest events: OnAfterPostSalesDocDropShipment \(Codeunit 80 "Sales-Post"\)\. \(search "event: OnAfterPostSalesDocDropShipment"\)$/);
    assert.doesNotMatch(near, /\[meaning\]/);
    const found = await call("search", { query: "event: OnAfterPostSalesDoc" });
    assert.match(found.split("\n")[0], /^2 results, keyword \(read one/, "a kind: query skips the meaning list: a keyword header");
    assert.doesNotMatch(found, /\[meaning\]|\[both\]/);
    assert.match(await call("search", { query: "event: OnBeforeValidateWidgetCode", mode: "keyword" }), /^No event named /);
    const buyer = await call("search", { query: "buyer", limit: 3 });
    assert.match(buyer, /^No keyword match for "buyer"; \d pages by meaning only \(read one with cat\(path\)\):\n- .*\[meaning\]/);
    // a filter that leaves no hit although the name exists: no false "No event named", the filters are named
    assert.match(await call("search", { query: "event: OnAfterPostSalesDoc", object_type: "table" }), /^No event named "OnAfterPostSalesDoc" matches the filters \(object_type=table\); without them: 2 hits\.$/);
  } finally {
    await client.close();
  }
});

test("D95 review: filters never read as an absence, the kind parameter counts, short names have no neighbours, the name is what was typed", async () => {
  const modelDir = mkdtempSync(join(tmpdir(), "bcobs-model-"));
  const t = toyModel({ customer: [1, 0, 0], event: [0, 1, 0], widget: [0, 1, 0], posting: [0, 1, 0] });
  writeText(join(modelDir, "tokenizer.json"), t.tokenizer);
  writeFileSync(join(modelDir, "model.safetensors"), t.bytes);
  writeJson(join(modelDir, "config.json"), t.config);
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: symbolsFixture(), BC_OBSERVATORY_MODEL_DIR: modelDir });
  try {
    // the field exists; the filters hide it (the spelling is not the name's: the search matches words)
    const hidden = await call("search", { query: "field: vat bus posting group", object_type: "codeunit" });
    assert.match(hidden, /^No field named "vat bus posting group" matches the filters \(object_type=codeunit\); without them: 1 hit\.$/);
    assert.doesNotMatch(hidden, /Nearest/);
    assert.match(await call("search", { query: "field: Posting Dat", object_type: "page" }), /^No field named "Posting Dat" matches the filters \(object_type=page\); without them: 1 hit\.$/);
    assert.match(await call("search", { query: "field: Posting Date", country: "be" }), /matches the filters \(country=be\)/);
    // without a filter it is found, and a name that is not there is an absence
    assert.match(await call("search", { query: "field: vat bus posting group" }), /^1 results, keyword/);
    assert.match(await call("search", { query: "field: Posting Date Xy" }), /^No field named "Posting Date Xy"\. Nearest fields: Posting Date \(Table 18 "Customer"\)/);
    // the nearest names respect the filters
    assert.match(await call("search", { query: "event: OnAfterPostSalesDocDropShipmentQuux" }), /Nearest events: OnAfterPostSalesDocDropShipment /);
    assert.match(await call("search", { query: "event: OnAfterPostSalesDocDropShipmentQuux", object_type: "table" }), /^No event named "OnAfterPostSalesDocDropShipmentQuux"\.$/);
    // the kind parameter does what the prefix does: no pages, the missing name says so, no meaning list
    for (const mode of ["hybrid", "keyword"] as const) {
      const none = await call("search", { query: "OnBeforeValidateWidgetCode", kind: "event", mode });
      assert.match(none, /^No event named "OnBeforeValidateWidgetCode"\.$/, mode);
    }
    assert.match(await call("search", { query: "OnAfterPostSalesDocDropShipmentQuux", kind: "event" }), /^No event named "OnAfterPostSalesDocDropShipmentQuux"\. Nearest events: OnAfterPostSalesDocDropShipment \(Codeunit 80 "Sales-Post"\)/);
    assert.match(await call("search", { query: "Customer", kind: "page" }), /^\d+ results/, "page is no symbol kind");
    // a name of one to three letters is near everything: no list
    assert.match(await call("search", { query: "proc: x" }), /^No procedure named "x"\.$/);
    // the type, country and version words are no part of the name
    assert.match(await call("search", { query: "event: OnAfterPostSalesDocDropShipmentQuux codeunit" }), /^No event named "OnAfterPostSalesDocDropShipmentQuux"\. Nearest events: OnAfterPostSalesDocDropShipment /);
    assert.match(await call("search", { query: "field: Posting Date Xy BE" }), /^No field named "Posting Date Xy"\. Nearest fields: Posting Date /);
    assert.match(await call("search", { query: "field: Posting Date Xy bc30" }), /^No field named "Posting Date Xy"\. Nearest fields: Posting Date /);
  } finally {
    await client.close();
  }
});

test("D94: search finds Learn articles by an identifier they document, with their url and hub; type learn filters; ls and whats_new stay pages", async () => {
  const root = fixture();
  const base = "https://learn.microsoft.com/dynamics365/business-central/", sec = "dev-itpro/developer/devenv-security-settings-and-ip-protection";
  writeText(join(root, "content", "topics/dev-itpro/configure.md"), page({ id: "topic/dev-itpro/configure", type: "topic", title: "Configure the development environment", summary: "Setting up AL.", tier: "official", system: "administration",
    learn_toc_path: ["Development", "Configure the development environment"], links: { learn: [`${base}${sec}`] }, coverage: { learn: 1, code: 0, video: 0, blog: 0 } }, "# Configure"));
  writeJson(join(root, "data/manifest/docs/learn-devitpro/sec.json"), { id: `docs/learn-devitpro/${sec}.md`, pillar: "docs", source: "learn-devitpro", tier: "official", title: "Resource exposure policy setting",
    url: `${base}${sec}`, state: "fetched", stages: { fetched: { at: "2026-10-01T00:00:00.000Z", blob: "b" } }, attempts: 0, meta: { description: "Control access to your extension's source.", ms_date: "2026-10-05", identifiers: ["allowDebugging", "includeSourceInSymbolFile"] } });
  renderSearchIndex(join(root, "content"), join(root, "data"));
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: root });
  try {
    const hit = await call("search", { query: "includeSourceInSymbolFile" });
    assert.match(hit, /^1 results, keyword \(read one with cat\(path\); a Learn article's url reads with the Learn MCP's microsoft_docs_fetch \(the plugin connects it\), else open it on learn\.microsoft\.com; cat\(hub\) reads its hub\):\n/);
    assert.match(hit, new RegExp(`^- Resource exposure policy setting \\[learn, official, 2026-10-05\\] url=${base}${sec} \\[keyword\\]\\n  in: Development › Configure the development environment \\(hub: topics/dev-itpro/configure\\)\\n  Control access to your extension's source\\.$`, "m"));
    assert.match(await call("search", { query: "include source in symbol file" }), /url=https:\/\/learn\.microsoft\.com\/.*devenv-security-settings-and-ip-protection/, "its CamelCase words");
    assert.match(await call("search", { query: "configure", type: "learn" }), /^No pages match/, "type learn: Learn articles only");
    assert.match(await call("search", { query: "allow debugging", type: "learn" }), /^1 results/);
    assert.doesNotMatch(await call("search", { query: "customer" }), /url=/, "an ordinary query is as it was");
    assert.doesNotMatch(await call("ls", {}), /learn/, "a Learn article is no page to browse");
    assert.doesNotMatch(await call("whats_new", { since: "2026-10-01" }), /Resource exposure/, "nor news");
  } finally {
    await client.close();
  }
});

test("D95 phase B: get_object prints what a country layer adds, cat answers for a member only the layer has, search finds it with its layer", async () => {
  const { client, call } = await connect({ BC_OBSERVATORY_LOCAL: symbolsFixture(true), BC_OBSERVATORY_EMBEDDINGS: "0" });
  try {
    const be = await call("get_object", { type: "table", idOrName: "18", country: "BE" });
    assert.match(be, /^BE replaces Table 18 "Customer" \(BC29\): \+2 fields, \+1 event, \+2 procedures; 1 field changed, 1 key changed\.\n/);
    assert.match(be, /\nFields added: 11310 "Enterprise No\." Text\[50\]; 2000020 "Domiciliation No\." Text\[12\]\n/);
    assert.match(be, /\nSource: data\/code\/diffs\/country\/29-be\.json; the BE page: localizations\/be\.\n\n---\nid: "object\/table\/18"\n/, "the block, then the W1 page as today");
    assert.doesNotMatch(be, /has no table of its own/);
    // a BE-only object keeps its own page, no block
    const own = await call("get_object", { type: "table", idOrName: "11300", country: "BE" });
    assert.match(own, /# Table 11300 BE/);
    assert.doesNotMatch(own, /replaces/);
    // a country the object is not replaced in: today's note
    assert.match(await call("get_object", { type: "codeunit", idOrName: "80", country: "BE" }), /^\(BE has no codeunit of its own here; the W1 codeunit applies\.\)/);
    assert.match(await call("get_object", { type: "table", idOrName: "18", country: "NL" }), /^\(NL has no table of its own here; the W1 table applies\.\)/);
    // without a country: the layers that replace it, after the Also-in line
    const w1 = await call("get_object", { type: "table", idOrName: "18" });
    assert.match(w1, /Replaced in: BE \(\+2 fields, \+1 event, \+2 procedures\)\.$/);
    assert.doesNotMatch(await call("get_object", { type: "codeunit", idOrName: "80" }), /Replaced in/);
    assert.doesNotMatch(await call("get_object", { type: "table", idOrName: "18", section: "fields" }), /Replaced in/);
    // cat of a member the W1 page lacks answers from the diff
    const cat = await call("cat", { path: "objects/table/18#field-11310" });
    assert.match(cat, /^Table 18 "Customer", field 11310 \(added by the BE layer, not in W1\):\n\| No\. \| Name \| Type \| Properties \| Layer \|\n\|---\|---\|---\|---\|---\|\n\| 11310 \| Enterprise No\. \| Text\[50\] \|/);
    assert.match(cat, /\| BE \|\n\nW1 page: .*objects\/table\/18\/ · BE layer: localizations\/be\n$/);
    assert.match(await call("cat", { path: "objects/table/18#event-OnBeforeValidateEnterpriseNo" }), /event OnBeforeValidateEnterpriseNo \(added by the BE layer/);
    assert.match(await call("cat", { path: "objects/table/18#field-424242" }), /^\(No row for #field-424242 on this page\.\)/, "no such member anywhere: as before");
    // search: one hit, its layer named
    const hit = await call("search", { query: "field: Enterprise No.", country: "BE" });
    assert.match(hit, /^1 results, keyword[^\n]*\n- Enterprise No\. \(field 11310 of Table 18 "Customer", BE layer, Text\[50\]\) path=objects\/table\/18#field-11310 \[keyword\]\n  Specifies the enterprise number of the customer\.$/m);
    assert.match(await call("search", { query: "Domiciliation No." }), /Domiciliation No\. \(field 2000020 of Table 18 "Customer", BE layer/);
    assert.match(await call("search", { query: "event: OnBeforeValidateEnterpriseNo" }), /event of Table 18 "Customer", BE layer, integration, 0 subscribers/);
    assert.match(await call("search", { query: "field: Enterprise No.", country: "NL" }), /^No field named|^No pages match/, "the filter by country hides it elsewhere");
  } finally {
    await client.close();
  }
});
