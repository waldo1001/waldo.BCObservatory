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
  writeText(join(dir, "topics/fin/gl.md"), page({ id: "topic/fin/gl", type: "topic", title: "General ledger", tier: "official", system: "finance", links: L({ topics: ["topic/fin"] }) }));
  writeText(join(dir, "objects/table/17.md"), page({ id: "object/table/17", type: "object", title: 'Table 17 "G/L Entry"', tier: "official", namespace: "Microsoft.Finance.GeneralLedger.Ledger", links: L({ topics: ["topic/fin/gl"], localizations: ["localization/be"] }) }));
  writeText(join(dir, "localizations/be.md"), page({ id: "localization/be", type: "localization", title: "Belgium (BE)", tier: "official", links: L({ objects: ["object/table/17"] }) }));
  writeText(join(dir, "posts/kauffmann-nl/1.md"), page({ id: "post/kauffmann-nl/1", type: "post", title: "A post", tier: "community", source_id: "kauffmann-nl", system: "finance", published_at: "2026-10-01", links: L() }));
  return dir;
}

test("namespaces map to galaxy systems", () => {
  assert.deepEqual([objectSystem("Microsoft.Sales.Customer"), objectSystem("Microsoft.Purchases.Vendor"), objectSystem("Microsoft.Foundation.NoSeries"), objectSystem(null)], ["sales", "purchasing", "platform", "development"]);
});

test("graph: typed edges from frontmatter links, deduplicated; a valid summary; the same layout every time", () => {
  const dir = content();
  const dataDir = join(dir, "..", "data");
  const r = renderGraph(dir, dataDir);
  const s = JSON.parse(readFileSync(join(dataDir, "graph/summary.json"), "utf8"));
  assert.ok(validate("graph", s).ok, JSON.stringify(validate("graph", s).errors));
  assert.deepEqual(s.edges.map((e: any) => `${e.s}|${e.t}|${e.type}`).sort(), ["localization/be|object/table/17|localizes", "object/table/17|topic/fin/gl|documents", "topic/fin/gl|topic/fin|relates"].sort().map((x) => { const [a, b, t] = x.split("|"); return a < b ? `${a}|${b}|${t}` : `${b}|${a}|${t}`; }).sort());
  assert.deepEqual(s.nodes.find((n: any) => n.id === "object/table/17").group, "finance");
  assert.equal(s.nodes.some((n: any) => n.type === "post"), false, "posts stay out of the summary");
  assert.ok(s.nodes.some((n: any) => n.id === "source/kauffmann-nl"));
  const full = readFileSync(join(dataDir, "graph/full.jsonl"), "utf8");
  assert.match(full, /"s":"post\/kauffmann-nl\/1","t":"source\/kauffmann-nl","type":"authored"/);
  assert.ok(r.ego >= 5);
  const first = readFileSync(join(dataDir, "graph/summary.json"), "utf8");
  assert.equal(renderGraph(dir, dataDir).written, 0, "same input, same layout: nothing rewritten");
  assert.equal(readFileSync(join(dataDir, "graph/summary.json"), "utf8"), first);
});
