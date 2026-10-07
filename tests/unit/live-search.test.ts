import { test } from "node:test";
import assert from "node:assert/strict";
import { hitsFor, liveText, nodeIdOf } from "../../site/src/scripts/live-search.js";
import { byApp, groupHits, groupOf, rank, resultsHtml, score, statusLine, tabOf, typeParamOf, type Row } from "../../site/src/scripts/search.js";

const row = (path: string, type: string, title: string, system: string | null = "finance", over: Partial<Row> = {}): Row =>
  ({ path, type, title, summary: `${title} summary`, tier: "official", system, tags: [], ...over });

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
  const h = hitsFor(rows, "table 18", (id) => stars.has(id));
  assert.equal(h.ids[0], "object/table/18", "the exact reference scores highest");
  const c = hitsFor(rows, "customer", (id) => stars.has(id));
  assert.deepEqual(c.ids.sort(), ["object/table/18", "topic/bc/sales/customers"]);
  assert.deepEqual(c.pages.map((r) => r.path).sort(), ["objects/table/1800", "videos/v1"]);
  assert.deepEqual(c.reach, { sales: 2 });
  assert.equal(c.total, 4);
  assert.equal(hitsFor(rows, "zzz", () => true).total, 0);
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

test("scoring ranks the big reviewed hub first, demotes objects on a generic query, and counts the caption (D65 5.2)", () => {
  const s = (r: Row, q = "subscription") => Math.round(score(r, q) * 10) / 10;
  assert.equal(s(subscription.billing), 14.1, "title 3 + starts with 3 + log2(48) 5.6 + reviewed 2 + 0.5");
  assert.equal(s(subscription.setup), 9.2, "title 3 + log2(13) 3.7 + reviewed 2 + 0.5");
  assert.equal(s(subscription.api), 7.1, "title 3 + starts with 3 + log2(6) 2.6 - no narrative 2 + 0.5");
  assert.equal(s(subscription.analytics), 12.7, "the parent's title in its tags does not count again: title 3 + starts with 3 + log2(19) 4.2 + reviewed 2 + 0.5");
  assert.equal(s(hub("finance", "Finance", 256, "reviewed", ["Business functionality"], { summary: "Also covers subscription billing." })), 3.5, "a big hub that has the word in its summary only gets no size bonus: 1 + reviewed 2 + 0.5");
  assert.equal(s(subscription.video), 5.5, "title 3 + tag 2 + 0.5");
  assert.equal(s(subscription.codeunit), 2.4, "(title 3 + summary 1) x 0.6");
  assert.equal(s(subscription.page), 4.2, "(caption 3 + summary 1 + caption starts with 3) x 0.6");
  assert.equal(s(subscription.page, "page subscriptions"), 6, "a type word lifts the demotion: title (page) 3 + caption 3");
  assert.equal(score(subscription.page, "page 8059"), 1000, "the exact reference fast path stays");
  assert.ok(score(row("objects/table/18", "object", 'Table 18 "Customer"'), "customer") > score(row("objects/codeunit/1302", "object", 'Codeunit 1302 "Customer Mgt."'), "customer"), "an object named exactly as the query wins its group");
  const order = rank(Object.values(subscription), "subscription").map((h) => h.r.path);
  assert.deepEqual(order, [subscription.billing, subscription.analytics, subscription.setup, subscription.api, subscription.video, subscription.page, subscription.codeunit].map((r) => r.path));
});

test("results group in the fixed order with a status line, objects by app with Base Application first (D65 5.3)", () => {
  const rows = [...Object.values(subscription), row("features/1", "feature", "Subscription billing in more countries", "sales"),
    row("objects/table/18", "object", 'Table 18 "Customer"', "sales", { summary: "Subscription fields.", app: "Base Application" }),
    row("posts/x/1", "post", "Subscription billing tips", "sales", { tier: "community", date: "2026-01-01" }),
    row("posts/x/2", "post", "Subscription billing tricks", "sales", { tier: "community", date: "2026-02-01" }),
    row("changes/bcapps/1", "change", "#1 Subscription fix", "sales")];
  const groups = groupHits(rank(rows, "subscription"));
  assert.deepEqual(groups.map((g) => g.def.id), ["start", "roadmap", "video", "post", "object", "change"]);
  assert.equal(groups[0].hits[0].r.path, subscription.billing.path, "Start here opens on the hub");
  assert.deepEqual(groups[3].hits.map((h) => h.r.path), ["posts/x/2", "posts/x/1"], "newest first within an equal score");
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
  const h = hitsFor(rows, "subscription", (id) => stars.has(id), facts);
  assert.deepEqual(h.ids, ["app/subscription-billing", "topic/business-central/sales/subscription-billing", "topic/business-central/cloud-migration-api/subscriptions", "feature/9", "object/page/8059", "object/codeunit/8005"]);
  assert.equal(h.stars[1].path_label, "Business functionality › Sales");
  assert.deepEqual(h.pages.map((r) => r.path), ["videos/v-srb"]);
  assert.equal(liveText(h), "6 stars, 1 pages without a star. First: Subscription Billing (Sales & Receivables).");
  const hubOnly = hitsFor([subscription.billing], "subscription", () => true);
  assert.equal(liveText(hubOnly), "1 star, 0 pages without a star. First: Subscription billing (Sales).");
  assert.equal(nodeIdOf("apps/subscription-billing"), "app/subscription-billing");
});
