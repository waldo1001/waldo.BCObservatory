import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeText } from "../../pipeline/lib/fsx.js";
import { validate } from "../../pipeline/lib/schema.js";
import { objectSystem, renderGraph } from "../../pipeline/link/graph.js";

const page = (fm: Record<string, unknown>) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\nbody\n`;
const L = (o: Record<string, string[]> = {}) => ({ learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], ...o });

function content(): string {
  const dir = join(mkdtempSync(join(tmpdir(), "bcobs-graph-")), "content");
  writeText(join(dir, "topics/fin.md"), page({ id: "topic/fin", type: "topic", title: "Finance", tier: "official", system: "finance", links: L({ topics: ["topic/fin/gl"] }) }));
  writeText(join(dir, "topics/fin/gl.md"), page({ id: "topic/fin/gl", type: "topic", title: "General ledger", tier: "official", system: "finance", links: L({ topics: ["topic/fin"], learn: ["https://learn.microsoft.com/a", "https://learn.microsoft.com/b", "https://learn.microsoft.com/c"], posts: ["post/kauffmann-nl/1"], objects: ["object/table/17"] }) }));
  writeText(join(dir, "objects/table/17.md"), page({ id: "object/table/17", type: "object", title: 'Table 17 "G/L Entry"', tier: "official", object_type: "table", name: "G/L Entry", namespace: "Microsoft.Finance.GeneralLedger.Ledger", changed_in: ["29"], links: L({ topics: ["topic/fin/gl"], localizations: ["localization/be"] }) }));
  writeText(join(dir, "localizations/be.md"), page({ id: "localization/be", type: "localization", title: "Belgium (BE)", tier: "official", links: L({ objects: ["object/table/17"] }) }));
  writeText(join(dir, "posts/kauffmann-nl/1.md"), page({ id: "post/kauffmann-nl/1", type: "post", title: "A post", tier: "community", source_id: "kauffmann-nl", system: "finance", published_at: "2026-10-01", objects_mentioned: ["table G/L Entry", "table G/L Entries"], links: L({ topics: ["topic/fin/gl"], objects: ["object/table/17"] }) }));
  // a source page (blogs and channels have one) belongs to the Sources system, whichever page is read first
  writeText(join(dir, "sources/yt-x.md"), page({ id: "source/yt-x", type: "source", title: "A channel", tier: "community", links: L() }));
  return dir;
}

test("namespaces map to galaxy systems", () => {
  // D65: a first-party app sits in the system of the Learn branch that documents it; development keeps developer tooling
  assert.deepEqual(["Microsoft.SubscriptionBilling", "Microsoft.PowerBIReports", "Microsoft.ExpenseAgent", "Microsoft.Agent.SalesOrderAgent", "Microsoft.DataMigration.GP", "Microsoft.QualityManagement.Integration", "System.Email", "System.TestTools.AITestToolkit"].map(objectSystem),
    ["sales", "reporting", "copilot", "copilot", "administration", "inventory", "platform", "development"]);
  assert.deepEqual([objectSystem("Microsoft.Sales.Customer"), objectSystem("Microsoft.Purchases.Vendor"), objectSystem("Microsoft.Foundation.NoSeries"), objectSystem(null)], ["sales", "purchasing", "platform", "development"]);
});

test("graph: typed edges from frontmatter links, deduplicated; a valid summary; the same layout every time", () => {
  const dir = content();
  const dataDir = join(dir, "..", "data");
  const r = renderGraph(dir, dataDir);
  const s = JSON.parse(readFileSync(join(dataDir, "graph/summary.json"), "utf8"));
  assert.ok(validate("graph", s).ok, JSON.stringify(validate("graph", s).errors));
  assert.deepEqual(s.edges.map((e: any) => `${e.s}|${e.t}|${e.type}`).sort(), ["localization/be|object/table/17|localizes", "object/table/17|topic/fin/gl|documents", "topic/fin/gl|topic/fin|relates"].sort().map((x) => { const [a, b, t] = x.split("|"); return a < b ? `${a}|${b}|${t}` : `${b}|${a}|${t}`; }).sort());
  assert.equal(s.edges.find((e: any) => e.type === "documents").w, 2, "the hub's links.objects and the object's links.topics are one documents edge (D65), not a second mentions edge");
  assert.deepEqual(s.nodes.find((n: any) => n.id === "object/table/17").group, "finance");
  assert.equal(s.nodes.some((n: any) => n.type === "post"), false, "posts stay out of the summary");
  assert.ok(s.nodes.some((n: any) => n.id === "source/kauffmann-nl"));
  assert.equal(s.nodes.find((n: any) => n.id === "source/yt-x").group, "sources");
  const full = readFileSync(join(dataDir, "graph/full.jsonl"), "utf8");
  assert.match(full, /"s":"post\/kauffmann-nl\/1","t":"source\/kauffmann-nl","type":"authored"/);
  const mentions = full.split("\n").filter((l) => l.includes('"type":"mentions"'));
  assert.equal(mentions.length, 1, "links.objects and the mentioned names give one mentions edge (D67)");
  assert.match(mentions[0], /"w":1\b/);
  assert.ok(r.ego >= 5);
  const gl = s.nodes.find((n: any) => n.id === "topic/fin/gl");
  assert.deepEqual([gl.ev, gl.cs], [4, 0.25], "3 Learn pages + 1 community post");
  assert.deepEqual(s.nodes.find((n: any) => n.id === "object/table/17").cv, ["29"]);
  assert.deepEqual(s.touches, { "source/kauffmann-nl": ["object/table/17", "topic/fin/gl"] }, "where the blog touches the galaxy: its links and the object it names exactly (not the near-miss)");
  assert.deepEqual(s.reach, { "source/kauffmann-nl": { finance: 1 } });
  const first = readFileSync(join(dataDir, "graph/summary.json"), "utf8");
  assert.equal(renderGraph(dir, dataDir).written, 0, "same input, same layout: nothing rewritten");
  assert.equal(readFileSync(join(dataDir, "graph/summary.json"), "utf8"), first);
});

test("graph: an app page is a star in its system; Related rows become light relates edges (D65)", () => {
  const dir = content();
  const dataDir = join(dir, "..", "data");
  writeText(join(dir, "apps/finance-app.md"), page({ id: "app/finance-app", type: "app", title: "Finance App", tier: "official", system: "finance", links: L({ topics: ["topic/fin/gl"], objects: ["object/table/17"], posts: ["post/kauffmann-nl/1"] }) }));
  writeText(join(dataDir, "links/related.json"), JSON.stringify({ schema: "bcobs-related@1", nodes: {}, pages: { "object/table/17": [{ id: "app/finance-app", why: "same app" }, { id: "topic/fin", why: "x" }], "topic/fin": [{ id: "topic/fin/gl", why: "already linked" }] } }));
  renderGraph(dir, dataDir);
  const s = JSON.parse(readFileSync(join(dataDir, "graph/summary.json"), "utf8"));
  assert.ok(validate("graph", s).ok, JSON.stringify(validate("graph", s).errors));
  const app = s.nodes.find((n: any) => n.id === "app/finance-app");
  assert.equal(app.group, "finance");
  assert.equal(app.ev, 2, "ev = hubs + videos + posts");
  const key = (e: any) => `${e.s}|${e.t}|${e.type}`;
  const edges = new Map(s.edges.map((e: any) => [key(e), e]));
  assert.equal((edges.get("app/finance-app|topic/fin/gl|documents") as any)?.type, "documents");
  assert.equal((edges.get("app/finance-app|object/table/17|implements") as any)?.type, "implements");
  assert.equal(edges.has("object/table/17|topic/fin|relates"), false, "Related edges stay out of the summary");
  const full = readFileSync(join(dataDir, "graph/full.jsonl"), "utf8").trim().split("\n").map((l) => JSON.parse(l));
  assert.deepEqual(full.find((e: any) => e.s === "object/table/17" && e.t === "topic/fin"), { s: "object/table/17", t: "topic/fin", type: "relates", w: 0.5 }, "a Related row is a relates edge of weight 0.5 in full.jsonl");
  const ego = JSON.parse(readFileSync(join(dataDir, "graph/ego/topic/fin.json"), "utf8"));
  assert.ok(ego.edges.some((e: any) => e.s === "object/table/17" && e.type === "relates"), "and in the ego graph Connections draws");
  const before = JSON.parse(readFileSync(join(dataDir, "graph/summary.json"), "utf8")).nodes.find((n: any) => n.id === "topic/fin").weight;
  writeText(join(dataDir, "links/related.json"), JSON.stringify({ pages: {} }));
  renderGraph(dir, dataDir);
  assert.equal(JSON.parse(readFileSync(join(dataDir, "graph/summary.json"), "utf8")).nodes.find((n: any) => n.id === "topic/fin").weight, before, "Related adds no weight");
  assert.equal((edges.get("topic/fin|topic/fin/gl|relates") as any)?.w, 2, "a pair that already has a relates edge keeps it, not a second one");
  assert.equal(edges.has("app/finance-app|object/table/17|relates"), false, "app and object are already one implements edge: Related adds no second edge");
});
