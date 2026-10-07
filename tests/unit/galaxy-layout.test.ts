import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { writeText } from "../../pipeline/lib/fsx.js";
import { validate } from "../../pipeline/lib/schema.js";
import { buildTree, nsSegments, squarify } from "../../pipeline/lib/treemap.js";
import { layoutGalaxy, namespacePlots, systemChain, type LayoutInput } from "../../pipeline/link/galaxy-layout.js";
import { LAYOUT, renderGraph } from "../../pipeline/link/graph.js";

const page = (fm: Record<string, unknown>) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\nbody\n`;
const L = (o: Record<string, string[]> = {}) => ({ learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], ...o });
const GOLDEN = resolve("tests/fixtures/graph/golden-summary.json");

test("system chain: the heaviest pair at the core, each arm takes the system closest to its end, tails last", () => {
  const w = new Map([["a|b", 10], ["b|c", 6], ["a|d", 5], ["c|d", 1], ["a|loc", 99]]);
  assert.deepEqual(systemChain(["d", "c", "b", "a", "loc"], w, ["loc"]), [
    { id: "a", arm: 0, k: 0 }, { id: "d", arm: 0, k: 1 }, { id: "loc", arm: 0, k: 2 },
    { id: "b", arm: 1, k: 0 }, { id: "c", arm: 1, k: 1 },
  ]);
});

test("treemap: squarify fills the rectangle, largest first; namespace segments drop the vendor", () => {
  assert.deepEqual(nsSegments("Microsoft.Sales.Customer", "Base Application"), ["Sales", "Customer"]);
  assert.deepEqual(nsSegments(null, "Shopify"), ["Shopify"]);
  const tree = buildTree(["a.x", "a.x", "a.y", "b.z"], (r) => r.split("."));
  const kids = [...tree.children.values()];
  squarify(kids, 0, 0, 100, 50);
  assert.equal(Math.round(kids.reduce((s, k) => s + k.w * k.h, 0)), 5000);
  const a = kids.find((k) => k.name === "a")!, b = kids.find((k) => k.name === "b")!;
  assert.ok(a.w * a.h > b.w * b.h);
});

test("namespace plots: every object placed inside its plot, most connected nearest the centre", () => {
  const info: LayoutInput["objects"] = new Map([
    ["o/1", { ns: "Microsoft.Finance.GL", app: null, degree: 1 }], ["o/2", { ns: "Microsoft.Finance.GL", app: null, degree: 9 }],
    ["o/3", { ns: "Microsoft.Finance.VAT", app: null, degree: 0 }], ["o/4", { ns: "Microsoft.Finance", app: null, degree: 0 }],
  ]);
  const { pos, plots } = namespacePlots([...info.keys()], info, 10, -50, 80, 100);
  assert.equal(pos.size, 4);
  assert.deepEqual(plots.map((p) => p[0]).sort(), ["Finance", "Finance.GL", "Finance.VAT"]);
  for (const [id, p] of pos) {
    const plot = plots.find((x) => x[0] === (info.get(id)!.ns ?? "").replace(/^Microsoft\./, ""))!;
    assert.ok(p.x >= plot[1] && p.x <= plot[1] + plot[3] && p.y >= plot[2] && p.y <= plot[2] + plot[4], `${id} inside ${plot[0]}`);
  }
  const d = (id: string) => Math.hypot(pos.get(id)!.x, pos.get(id)!.y);
  assert.ok(d("o/2") <= d("o/1"), "the most connected object sits nearest the system centre");
});

test("layout: the same positions whatever the input order", () => {
  const nodes = [
    { id: "topic/a", type: "topic", group: "finance" }, { id: "topic/a/b", type: "topic", group: "finance" }, { id: "topic/a/c", type: "topic", group: "finance" },
    { id: "object/table/1", type: "object", group: "finance" }, { id: "object/table/2", type: "object", group: "finance" },
    { id: "feature/9", type: "feature", group: "finance" }, { id: "topic/s", type: "topic", group: "sales" }, { id: "source/x", type: "source", group: "sources" },
  ];
  const base = (n: typeof nodes): LayoutInput => ({
    systems: [{ id: "sales" }, { id: "finance" }, { id: "sources" }], nodes: n,
    parent: new Map([["topic/a", null], ["topic/a/b", "topic/a"], ["topic/a/c", "topic/a"], ["topic/s", null]]),
    tocOrder: new Map([["topic/a", 0], ["topic/a/c", 1], ["topic/a/b", 2], ["topic/s", 3]]),
    objects: new Map([["object/table/1", { ns: "Microsoft.Finance.GL", app: null, degree: 2 }], ["object/table/2", { ns: "Microsoft.Finance.VAT", app: null, degree: 1 }]]),
    weights: new Map([["finance|sales", 3]]),
  });
  const a = layoutGalaxy(base(nodes)), b = layoutGalaxy(base([...nodes].reverse()));
  assert.deepEqual([...a.pos].sort(), [...b.pos].sort());
  assert.deepEqual(a.systems, b.systems);
  assert.equal(a.pos.size, nodes.length, "every node placed");
  // hubs on the left, objects on the right of their system centre; TOC order: c before b
  const fin = a.systems.find((s) => s.id === "finance")!;
  assert.ok(a.pos.get("topic/a/b")!.x < fin.x && a.pos.get("object/table/1")!.x > fin.x);
  const ang = (id: string) => Math.atan2(a.pos.get(id)!.y - fin.y, a.pos.get(id)!.x - fin.x + 1e-9);
  assert.ok((ang("topic/a/c") + 2 * Math.PI) % (2 * Math.PI) < (ang("topic/a/b") + 2 * Math.PI) % (2 * Math.PI), "siblings in TOC order around the arc");
});

/** A small galaxy: Finance with a two-level hub tree and three namespaces, Sales with a cross edge, a week of media. */
function fixture(): { content: string; data: string } {
  const root = mkdtempSync(join(tmpdir(), "bcobs-galaxy-"));
  const content = join(root, "content"), data = join(root, "data");
  const w = (p: string, fm: Record<string, unknown>) => writeText(join(content, p), page(fm));
  w("topics/fin.md", { id: "topic/fin", type: "topic", title: "Finance", tier: "official", system: "finance", parent: null, links: L({ topics: ["topic/fin/gl", "topic/fin/vat"] }) });
  w("topics/fin/gl.md", { id: "topic/fin/gl", type: "topic", title: "General ledger", tier: "official", system: "finance", parent: "topic/fin", links: L({ topics: ["topic/fin"], learn: ["https://learn.microsoft.com/a"], videos: ["video/v1"] }) });
  w("topics/fin/vat.md", { id: "topic/fin/vat", type: "topic", title: "VAT", tier: "official", system: "finance", parent: "topic/fin", links: L({ topics: ["topic/fin"], posts: ["post/blog/1"] }) });
  w("topics/sales.md", { id: "topic/sales", type: "topic", title: "Sales", tier: "official", system: "sales", parent: null, links: L() });
  w("objects/table/17.md", { id: "object/table/17", type: "object", title: 'Table 17 "G/L Entry"', tier: "official", object_type: "table", object_id: 17, name: "G/L Entry", namespace: "Microsoft.Finance.GeneralLedger.Ledger", changed_in: ["29"], links: L({ topics: ["topic/fin/gl"] }) });
  w("objects/table/15.md", { id: "object/table/15", type: "object", title: 'Table 15 "G/L Account"', tier: "official", object_type: "table", object_id: 15, name: "G/L Account", namespace: "Microsoft.Finance.GeneralLedger.Account", links: L({ topics: ["topic/fin/gl"] }) });
  w("objects/table/325.md", { id: "object/table/325", type: "object", title: 'Table 325 "VAT Posting Setup"', tier: "official", object_type: "table", object_id: 325, name: "VAT Posting Setup", namespace: "Microsoft.Finance.VAT.Setup", links: L({ topics: ["topic/fin/vat"] }) });
  w("objects/table/18.md", { id: "object/table/18", type: "object", title: 'Table 18 "Customer"', tier: "official", object_type: "table", object_id: 18, name: "Customer", namespace: "Microsoft.Sales.Customer", links: L({ topics: ["topic/sales"] }) });
  w("objects/table/37.md", { id: "object/table/37", type: "object", title: 'Table 37 "Sales Line"', tier: "official", object_type: "table", object_id: 37, name: "Sales Line", namespace: "Microsoft.Sales.Document", links: L() });
  w("videos/v1.md", { id: "video/v1", type: "video", title: "GL in 10 minutes", tier: "official", channel: "yt-ms", system: "finance", published_at: "2026-10-05", objects_mentioned: ["table G/L Entry"], links: L({ topics: ["topic/fin/gl"] }) });
  w("posts/blog/1.md", { id: "post/blog/1", type: "post", title: "VAT dates", tier: "community", source_id: "blog", system: "finance", published_at: "2026-09-20", links: L({ topics: ["topic/fin/vat"] }) });
  w("features/9.md", { id: "feature/9", type: "feature", title: "A roadmap feature", tier: "official", system: "finance", ga_date: "2026-11", links: L() });
  const json = (p: string, v: unknown) => writeText(join(data, p), JSON.stringify(v));
  json("code/relations/29.json", {
    schema: "al-relations@1", major: "29", stats: {}, unresolved: [], dead_events: { count: 0 },
    edges: [
      { s: "table/17", t: "table/15", k: "table_relation", via: "G/L Account No." },
      { s: "table/18", t: "table/15", k: "table_relation", via: "Customer Posting Group" },
      { s: "table/37", t: "table/18", k: "table_relation", via: "Sell-to Customer No." },
      { s: "table/37", t: "table/325", k: "calc_formula", via: "VAT %" },
    ],
    events: { "table/17": { OnAfterCopyGLEntry: { kind: "integration", obsolete: null, subs: [] }, OnAfterDeleteEvent: { kind: "trigger_event", obsolete: null, subs: [] } } },
  });
  json("code/timelines/table.json", { versions: ["28", "29"], objects: { "325": { name: "VAT Posting Setup", versions: ["28", "29"], introduced: "28", changed: [], obsoleted: [{ version: "29", state: "Pending", tag: "29.0" }], removed: null } } });
  json("hubs/topics.json", { hubs: 4, topics: [{ id: "topic/fin" }, { id: "topic/fin/vat" }, { id: "topic/fin/gl" }, { id: "topic/sales" }] });
  return { content, data };
}

test("graph (D66): valid summary and landed week, star fields, golden positions, nothing rewritten on a second run", () => {
  const { content, data } = fixture();
  const opts = { today: "2026-10-07", major: "29" };
  const r = renderGraph(content, data, "", opts);
  const s = JSON.parse(readFileSync(join(data, "graph/summary.json"), "utf8"));
  const landed = JSON.parse(readFileSync(join(data, "graph/landed.json"), "utf8"));
  assert.ok(validate("graph", s).ok, JSON.stringify(validate("graph", s).errors));
  assert.ok(validate("landed", landed).ok, JSON.stringify(validate("landed", landed).errors));
  assert.equal(s.layout, LAYOUT);
  const n = (id: string) => s.nodes.find((x: any) => x.id === id);
  // the video names Table 17 exactly: evidence on the object, a media body on the hub that links it
  assert.equal(n("object/table/17").ev, 1);
  assert.deepEqual(n("topic/fin/gl").mb, { n: 1, top: [["video/v1", "v", "2026-10-05"]] });
  assert.deepEqual(n("object/table/17").ec, 1, "trigger events are not published events");
  assert.deepEqual(n("object/table/325").ob, ["29"]);
  // Table 18 (sales) points into finance: a port with the object at the far end
  assert.deepEqual(n("object/table/18").cross, [["finance", 1, "table_relation", ["object/table/15"]]]);
  assert.deepEqual(landed, { anchor: "2026-10-07", days: 7, items: [["video/v1", "v", "2026-10-05", ["object/table/17", "topic/fin/gl"]]] }, "the post of 09-20 is older than the week");
  const fin = s.systems.find((x: any) => x.id === "finance");
  assert.deepEqual(fin.tree, [["topic/fin", "topic/fin/gl"], ["topic/fin", "topic/fin/vat"]]);
  assert.deepEqual(fin.plots.map((p: any) => [p[0], p[5]]).sort(), [["Finance.GeneralLedger.Account", 1], ["Finance.GeneralLedger.Ledger", 1], ["Finance.VAT.Setup", 1]]);
  // golden: positions and system geometry (regenerate with BCOBS_UPDATE_GOLDEN=1 after a deliberate layout change)
  const golden = { systems: s.systems.map(({ tree: _t, ...x }: any) => x), positions: Object.fromEntries(s.nodes.map((x: any) => [x.id, [x.x, x.y]])) };
  if (process.env.BCOBS_UPDATE_GOLDEN) writeFileSync(GOLDEN, `${JSON.stringify(golden, null, 1)}\n`);
  assert.deepEqual(golden, JSON.parse(readFileSync(GOLDEN, "utf8")));
  assert.ok(r.landed === 1);
  assert.equal(renderGraph(content, data, "", opts).written, 0, "same input, same output: nothing rewritten");
});
