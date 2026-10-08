import { test } from "node:test";
import assert from "node:assert/strict";
import { pageToRecord, prepare, scoreRecord, parseQuery } from "@bc-observatory/search";
import { hitsFor, liveText, nodeIdOf } from "../../site/src/scripts/live-search.js";
import { byApp, exactHtml, groupHits, groupOf, hintsHtml, parse, rank, resultsHtml, statusLine, tabOf, typeParamOf, type Row } from "../../site/src/scripts/search.js";

const row = (path: string, type: string, title: string, system: string | null = "finance", over: Partial<Row> = {}): Row =>
  ({ path, type, title, summary: `${title} summary`, tier: "official", system, tags: [], ...(type === "object" ? { object_type: path.split("/")[1], object_id: Number(path.split("/")[2]) || null } : {}), ...over });
const idx = (rows: Row[]) => prepare(rows.map(pageToRecord));

test("index paths map to galaxy node ids by dropping the plural on the first segment", () => {
  assert.equal(nodeIdOf("objects/table/18"), "object/table/18");
  assert.equal(nodeIdOf("topics/business-central/finance"), "topic/business-central/finance");
  assert.equal(nodeIdOf("localizations/be"), "localization/be");
  assert.equal(nodeIdOf("videos/abc"), "video/abc");
});

test("hits split into stars, star-less pages counted per system, best first; an exact object reference wins", () => {
  const rows = [
    row("objects/table/18", "object", 'Table 18 "Customer"', "sales"),
    row("objects/table/1800", "object", 'Table 1800 "Customer Ledger Setup"', "sales"),
    row("topics/bc/sales/customers", "topic", "Manage customers", "sales"),
    row("videos/v1", "video", "Customer card deep dive", "sales"),
    row("objects/codeunit/80", "object", 'Codeunit 80 "Sales-Post"', "sales"),
  ];
  const stars = new Set(["object/table/18", "topic/bc/sales/customers"]);
  const h = hitsFor(idx(rows), "table 18", (id) => stars.has(id));
  assert.equal(h.ids[0], "object/table/18", "the exact reference scores highest");
  const c = hitsFor(idx(rows), "customer", (id) => stars.has(id));
  assert.deepEqual(c.ids.sort(), ["object/table/18", "topic/bc/sales/customers"]);
  assert.deepEqual(c.pages.map((r) => r.path).sort(), ["objects/table/1800", "videos/v1"]);
  assert.deepEqual(c.reach, { sales: 2 });
  assert.equal(c.total, 4);
  assert.equal(hitsFor(idx(rows), "zzz", () => true).total, 0);
});

// ---------------------------------------------------------------------------------------------- D65 tranche 2

const hub = (path: string, title: string, members: number, narrative: Row["narrative"], toc: string[], over: Partial<Row> = {}): Row =>
  row(`topics/business-central/${path}`, "topic", title, "sales", { summary: "A Learn section.", tags: toc.map((t) => t.toLowerCase()), members, narrative, path_label: toc.join(" › "), ...over });
const subscription = {
  billing: hub("sales/subscription-billing", "Subscription billing", 47, "reviewed", ["Business functionality", "Sales"]),
  setup: hub("set-up/set-up-subscription-billing", "Set up subscription billing", 12, "reviewed", ["Set up Business Central", "Set up sales"]),
  api: hub("cloud-migration-api/subscriptions", "Subscriptions", 5, "none", ["Administration", "Cloud Migration API"]),
  analytics: hub("sales/subscription-billing/analytics", "Subscription billing analytics", 18, "reviewed", ["Business functionality", "Sales", "Subscription billing"]),
  video: row("videos/v-srb", "video", "What's New: Subscription Billing (2024 release wave 2)", "sales", { summary: "Recurring invoicing.", tags: ["subscription billing"] }),
  codeunit: row("objects/codeunit/8005", "object", 'Codeunit 8005 "Create Subscription Header"', "sales", { summary: "Creates a subscription header.", app: "Subscription Billing" }),
  page: row("objects/page/8059", "object", 'Page 8059 "Service Objects"', "sales", { summary: "List of subscription service objects.", caption: "Subscriptions", app: "Subscription Billing" }),
};

test("scoring ranks the big reviewed hub first, demotes objects on a generic query, and counts the caption (D65 5.2, now the shared scorer of D86)", () => {
  const all = [...Object.values(subscription), hub("finance", "Finance", 256, "reviewed", ["Business functionality"], { summary: "Also covers subscription billing." })];
  const index = idx(all);
  const s = (r: Row, q = "subscription") => Math.round(scoreRecord(index, index.records.find((x) => x.id === r.path)!, parse(q, index)).s * 100) / 100;
  assert.equal(s(subscription.billing), 14.58, "title 3 + starts with 3 + log2(48) 5.58 + reviewed 2 + layer 1");
  assert.equal(s(subscription.setup), 9.7, "title 3 + log2(13) 3.7 + reviewed 2 + 1");
  assert.equal(s(subscription.api), 6.08, "a plural title meets by its stem: 3 x 0.75 + starts 3 x 0.75 + log2(6) 2.58 - no narrative 2 + 1");
  assert.equal(s(subscription.analytics), 13.25, "the parent's title in its tags does not count again: title 3 + starts 3 + log2(19) 4.25 + reviewed 2 + 1");
  assert.equal(s(all.at(-1)!), 4, "a big hub that has the word in its summary only gets no size bonus: 1 + reviewed 2 + 1");
  assert.equal(s(subscription.video), 6, "title 3 + tag 2 + 1");
  assert.equal(s(subscription.codeunit), 2.82, "(title 3 + summary 1 + app 0.5 + codeunit 0.2) x 0.6");
  assert.equal(s(subscription.page), 8.37, "(caption 3 x 0.75 + caption equals the plural 10 + summary 1 + app 0.5 + page 0.2) x 0.6: a caption does not lift");
  assert.equal(s(subscription.page, "page subscriptions"), 17.45, "a type word lifts the demotion: caption 3 + equals 10 + type 3 + summary 0.75 + 0.5 + 0.2");
  assert.equal(scoreRecord(index, index.records.find((x) => x.id === subscription.page.path)!, parseQuery("page 8059", { countries: [] })).s, 1000, "the exact reference fast path stays");
  const two = idx([row("objects/table/18", "object", 'Table 18 "Customer"'), row("objects/codeunit/1302", "object", 'Codeunit 1302 "Customer Mgt."')]);
  assert.deepEqual(rank(two, "customer").map((h) => h.r.id), ["objects/table/18", "objects/codeunit/1302"], "an object named exactly as the query wins its group");
  assert.deepEqual(rank(index, "subscription").map((h) => h.r.id), [subscription.billing, subscription.analytics, subscription.setup, subscription.page, subscription.api, subscription.video, all.at(-1)!, subscription.codeunit].map((r) => r.path));
});

test("results group in the fixed order with a status line, objects by app with Base Application first (D65 5.3)", () => {
  const rows = [...Object.values(subscription), row("features/1", "feature", "Subscription billing in more countries", "sales"),
    row("objects/table/18", "object", 'Table 18 "Customer"', "sales", { summary: "Subscription fields.", app: "Base Application" }),
    row("posts/x/1", "post", "Subscription billing tips", "sales", { tier: "community", date: "2026-01-01" }),
    row("posts/x/2", "post", "Subscription billing tricks", "sales", { tier: "community", date: "2026-02-01" }),
    row("changes/bcapps/1", "change", "#1 Subscription fix", "sales")];
  const groups = groupHits(rank(idx(rows), "subscription"));
  assert.deepEqual(groups.map((g) => g.def.id), ["start", "roadmap", "video", "post", "object", "change"]);
  assert.equal(groups[0].hits[0].r.id, subscription.billing.path, "Start here opens on the hub");
  assert.deepEqual(groups[3].hits.map((h) => h.r.id), ["posts/x/2", "posts/x/1"], "newest first within an equal score");
  assert.deepEqual(byApp(groups[4].hits).map(([a]) => a), ["Base Application", "Subscription Billing"]);
  assert.equal(statusLine("subscription", groups), '12 results for "subscription": 4 to start with, 1 roadmap, 1 video, 2 posts, 3 AL objects, 1 code change');
  assert.equal(statusLine("zzz", []), 'No results for "zzz".');
  assert.equal(groupOf({ type: "app" }), "start", "app pages (tranche 3b) land in Start here");
  assert.equal(groupOf({ type: "unknown" }), "other");
  const html = resultsHtml(groups, "/", "");
  assert.match(html, /<section class="sr-group" aria-labelledby="sr-start"><h2 class="section-title" id="sr-start">Start here <small>4<\/small>/);
  assert.match(html, /<span class="sr-path mono-meta">Business functionality › Sales<\/span>/, "the row says where the hub sits");
  assert.match(html, /Page 8059 &quot;Service Objects&quot;<\/a> <span class="sr-caption meta">captioned "Subscriptions"<\/span>/);
  assert.match(html, /<h3 class="sr-app">Base Application <small>1<\/small><\/h3>[\s\S]*<h3 class="sr-app">Subscription Billing <small>2<\/small><\/h3>/);
  assert.doesNotMatch(resultsHtml(groups, "/", "video"), /sr-start/, "a tab renders its own group only");
});

test("the type= parameter maps to a tab and back (D65 5.3)", () => {
  assert.equal(tabOf(null), "");
  assert.equal(tabOf("topic"), "start");
  assert.equal(tabOf("app"), "start");
  assert.equal(tabOf("start"), "start");
  assert.equal(tabOf("feature"), "roadmap");
  assert.equal(tabOf("video"), "video");
  assert.equal(tabOf("change"), "change");
  assert.equal(tabOf("nonsense"), "");
  assert.equal(typeParamOf("roadmap"), "feature");
  assert.equal(typeParamOf("start"), "start");
});

test("the galaxy panel lists hubs and apps first, then features, then objects, each with its path label (D65 5.4)", () => {
  const rows = [subscription.codeunit, subscription.page, row("features/9", "feature", "Subscription billing usage data", "sales"), subscription.api, subscription.billing,
    row("apps/subscription-billing", "app", "Subscription Billing", "sales", { members: 400, path_label: "Sales & Receivables" }), subscription.video];
  const stars = new Set(rows.filter((r) => r.type !== "video").map((r) => nodeIdOf(r.path)));
  const facts = (id: string) => (id === "object/codeunit/8005" ? { ev: 0, weight: 50 } : { ev: 1, weight: 1 });
  const h = hitsFor(idx(rows), "subscription", (id) => stars.has(id), facts);
  assert.deepEqual(h.ids, ["app/subscription-billing", "topic/business-central/sales/subscription-billing", "topic/business-central/cloud-migration-api/subscriptions", "feature/9", "object/page/8059", "object/codeunit/8005"]);
  assert.equal(h.stars[1].path_label, "Business functionality › Sales");
  assert.deepEqual(h.pages.map((r) => r.path), ["videos/v-srb"]);
  assert.equal(liveText(h), "6 stars, 1 pages without a star. First: Subscription Billing (Sales & Receivables).");
  const hubOnly = hitsFor(idx([subscription.billing]), "subscription", () => true);
  assert.equal(liveText(hubOnly), "1 star, 0 pages without a star. First: Subscription billing (Sales).");
  assert.equal(nodeIdOf("apps/subscription-billing"), "app/subscription-billing");
});

// ---------------------------------------------------------------------------------------------- D86 on the results page

test("the results page: Exactly this, country layers after the apps, symbol groups, the did-you-mean line (D86 2.1)", () => {
  const rows = [
    row("objects/table/36", "object", 'Table 36 "Sales Header"', "sales", { app: "Base Application", name: "Sales Header", inbound: 217 }),
    row("objects/table/36-be", "object", 'Table 36 "Sales Header" (BE)', "sales", { app: "BE layer", country: "be", name: "Sales Header", object_id: 36 }),
    row("objects/table/36-nl", "object", 'Table 36 "Sales Header" (NL)', "sales", { app: "NL layer", country: "nl", name: "Sales Header", object_id: 36 }),
    row("objects/tableextension/8053", "object", 'Table extension 8053 "Sales Header"', "sales", { app: "Subscription Billing", name: "Sales Header" }),
    row("objects/page/36", "object", 'Page 36 "Assembly BOM"', "inventory", { app: "Base Application" }),
    row("localizations/be", "localization", "Belgium (BE)", null, { country: "BE" }),
  ];
  const index = idx(rows);
  const q = parse("t36", index), hits = rank(index, q);
  const exact = exactHtml(q, hits, "/b/");
  assert.match(exact, /<h2 class="section-title" id="sr-exact">Exactly this<\/h2>/);
  assert.match(exact, /href="\/b\/objects\/table\/36\/">Table 36 &quot;Sales Header&quot;<\/a>/);
  assert.match(exact, /also in <a href="\/b\/objects\/table\/36-be\/">BE<\/a>, <a href="\/b\/objects\/table\/36-nl\/">NL<\/a>/);
  assert.match(exactHtml(parse("36", index), rank(index, "36"), "/b/"), /Table 36[\s\S]*Page 36/, "a bare number lists the id across types");
  assert.equal(exactHtml(parse("sales header", index), rank(index, "sales header"), "/b/"), "", "words get no exact block");
  assert.match(exactHtml(parse("BE", index), rank(index, "BE"), "/b/"), /Exactly this[\s\S]*href="\/b\/localizations\/be\/">Belgium \(BE\)/, "a country code alone opens on its localization page");
  const groups = groupHits(rank(index, "Sales Header"));
  assert.deepEqual(byApp(groups.find((g) => g.def.id === "object")!.hits).map(([a]) => a), ["Base Application", "Subscription Billing", "BE layer", "NL layer"]);
  assert.equal(groupOf({ type: "object", kind: "event" }), "event");
  assert.equal(groupOf({ type: "object", kind: "page" }), "object");
  assert.equal(hintsHtml([{ text: 'Did you mean "cu 80" (codeunit 80)?', query: "cu 80" }], "/b/"), '<p class="sr-hints"><a href="/b/search/?q=cu%2080" data-q="cu 80">Did you mean &quot;cu 80&quot; (codeunit 80)?</a></p>');
  assert.equal(hintsHtml([{ text: "For how-to, start with the hub: Sales.", path: "topics/sales" }], "/b/"), '<p class="sr-hints">For how-to, start with the hub: <a href="/b/topics/sales/">Sales</a>.</p>');
  assert.equal(hintsHtml([], "/b/"), "");
});

test("object pages anchor every field, value, published event and procedure (D86 4.5)", async () => {
  const cwd = process.cwd();
  process.chdir(new URL("../../site/", import.meta.url).pathname); // versions.ts reads ../config at import
  const { anchorMembers } = await import("../../site/src/lib/versions.js");
  process.chdir(cwd);
  const html = `<h2 id="fields">Fields</h2>\n<table><tbody>\n<tr>\n<td>20</td>\n<td>Posting Date</td>\n</tr>\n</tbody></table>
<h2 id="events-published">Events published</h2>\n<ul>\n<li><code>OnAfterPostSalesDoc(var SalesHeader: Record "Sales Header")</code> (integration)</li>\n</ul>
<h2 id="procedures">Procedures</h2>\n<ul>\n<li><code>CopyToTempLines(SalesHeader: Record "Sales Header")</code>: copies</li>\n</ul>
<h2 id="values">Values</h2>\n<table><tbody>\n<tr>\n<td>3</td>\n<td>Credit Memo</td>\n</tr>\n</tbody></table>
<h2 id="keys">Keys</h2>\n<table><tbody>\n<tr>\n<td>1</td>\n<td>PK</td>\n</tr>\n</tbody></table>
<h2 id="event-subscriptions">Event subscriptions</h2>\n<ul>\n<li><code>OnX(a)</code></li>\n</ul>`;
  const out = anchorMembers(html);
  assert.match(out, /<tr id="field-20">\n<td>20<\/td>/);
  assert.match(out, /<li id="event-OnAfterPostSalesDoc"><code>OnAfterPostSalesDoc\(/);
  assert.match(out, /<li id="proc-CopyToTempLines"><code>CopyToTempLines\(/);
  assert.match(out, /<tr id="value-3">/);
  assert.doesNotMatch(out, /id="field-1"|id="value-1"/, "other tables keep their rows plain");
  assert.match(out, /<li><code>OnX\(/, "subscriptions are not published events");
});
