import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRelated, MAX, rankOf, serialize, WHY, type RelHub, type RelatedInput } from "../../pipeline/link/related.js";

const hub = (id: string, title: string, parent: string | null = null, children: string[] = [], system: string | null = "sales"): RelHub => ({ id, title, parent, children, system });
const SB = "topic/bf/sales/subscription-billing", INV = "topic/bf/sales/invoicing", SALES = "topic/bf/sales";
const SETUP = "topic/bf/set-up-business-central/set-up-subscription-billing", SETUP_ROOT = "topic/bf/set-up-business-central";
const API = "topic/dev/api/subscription-billings";

function fixture(): RelatedInput {
  return {
    hubs: [
      hub(SALES, "Sales", null, [SB, INV]),
      hub(SB, "Subscription billing", SALES),
      hub(INV, "Invoicing", SALES),
      hub(SETUP_ROOT, "Set up Business Central", null, [SETUP], null),
      hub(SETUP, "Set up subscription billing", SETUP_ROOT),
      hub("topic/dev/api", "API", null, [API], "integration"),
      hub(API, "Subscription billings", "topic/dev/api", [], "integration"),
      // "Setup" and "Overview" are on the stop list: equal titles in two sections that must never pair
      hub("topic/a", "Area A", null, ["topic/a/setup", "topic/a/overview"]), hub("topic/a/setup", "Setup", "topic/a"), hub("topic/a/overview", "Overview", "topic/a"),
      hub("topic/b", "Area B", null, ["topic/b/setup", "topic/b/overview"]), hub("topic/b/setup", "Setup", "topic/b"), hub("topic/b/overview", "Overview", "topic/b"),
    ],
    objects: [
      { id: "object/table/1", title: 'Table 1 "Subscription Header"', object_type: "table", topics: [SB], app: "Subscription Billing", system: "sales" },
      { id: "object/table/2", title: 'Table 2 "Subscription Line"', object_type: "table", topics: [SB, INV], app: "Subscription Billing", system: "sales" },
      { id: "object/page/3", title: 'Page 3 "Subscriptions"', object_type: "page", topics: [SB, INV], app: "Subscription Billing", system: "sales" },
      { id: "object/codeunit/4", title: 'Codeunit 4 "Post"', object_type: "codeunit", topics: [INV], app: null, system: "sales" },
    ],
    media: [
      { id: "video/v1", title: "Subscription billing in 10 minutes", kind: "video", objects: ["object/table/1"], system: "sales" },
      { id: "post/x/1", title: "A post on contracts", kind: "post", objects: [], system: "sales" },
    ],
    features: [{ id: "feature/1", title: "Subscription Billing: usage-based billing", system: "sales" }, { id: "feature/2", title: "Something else", system: "sales" }],
    hubMedia: new Map([[SB, ["video/v1", "post/x/1"]], [INV, ["video/v1"]], [API, ["post/x/1"]]]),
    apps: ["Subscription Billing", "Unused App"],
  };
}
const whys = (r: ReturnType<typeof buildRelated>, id: string) => Object.fromEntries((r.pages[id] ?? []).map((x) => [x.id, x.why]));

test("related: every rule with its fixed reason, ordered by rank", () => {
  const r = buildRelated(fixture());
  // 1: same title (trailing s trimmed) in another Learn section
  assert.equal(whys(r, API)[SB], "same title, different Learn section");
  assert.equal(whys(r, SB)[API], "same title, different Learn section");
  // 2: set-up guide by slug, both ways; it wins over the shared title words
  assert.equal(whys(r, SB)[SETUP], "set-up guide for this feature");
  assert.equal(whys(r, SETUP)[SB], "the feature this sets up");
  // 3: objects sharing a hub (same type first, the most specific hub named); hubs sharing >= 2 objects
  assert.equal(r.pages["object/table/1"][0].id, "object/table/2", "a table's first sibling is a table");
  assert.equal(whys(r, "object/table/1")["object/table/2"], "both documented in Sales > Subscription billing");
  assert.equal(whys(r, SB)[INV], "shares 2 AL objects", "siblings that share objects carry the stronger reason");
  // 4: TOC siblings
  assert.equal(whys(r, "topic/a/setup")["topic/a/overview"], "same Learn section");
  // 5: shared media, and media on the same hub
  assert.equal(whys(r, API)[SB], "same title, different Learn section", "one reason per pair: the best");
  assert.equal(whys(r, "video/v1")["post/x/1"], "both linked to Sales > Subscription billing");
  // 6: the app of an object, of a video naming its objects, of a feature with its name in the title
  assert.equal(whys(r, "object/table/1")["app/subscription-billing"], "same app");
  assert.equal(whys(r, "object/codeunit/4")["app/subscription-billing"], undefined, "an object outside the app has no app row");
  assert.equal(whys(r, "video/v1")["app/subscription-billing"], "names objects of this app");
  assert.equal(whys(r, "feature/1")["app/subscription-billing"], "app name in the feature title");
  assert.equal(whys(r, "app/subscription-billing")["feature/1"], "app name in the feature title");
  assert.equal(whys(r, "feature/2")["app/subscription-billing"], undefined);
  // 7: an app and the hubs its objects are documented in
  assert.equal(whys(r, "app/subscription-billing")[SB], "implements Sales > Subscription billing");
  assert.equal(whys(r, SB)["app/subscription-billing"], "implemented by Subscription Billing");
  assert.equal(r.nodes["app/subscription-billing"]?.[1], "app");
  assert.equal(r.nodes["app/unused-app"], undefined, "an app without object pages has no node");
  // ranks never go down a list
  for (const [id, rows] of Object.entries(r.pages)) {
    const ranks = rows.map((x) => rankOf(x.why));
    assert.ok(ranks.every((n) => n > 0), `${id}: every reason is in the closed set`);
    assert.deepEqual(ranks, [...ranks].sort((a, b) => a - b), `${id}: ordered by rank`);
    assert.ok(rows.every((x) => x.id !== id && r.nodes[x.id]), `${id}: no self links, every target has a node`);
  }
});

test("related: the stop list keeps Setup and Overview apart; same-section hubs never get the title reason", () => {
  const r = buildRelated(fixture());
  assert.equal(whys(r, "topic/a/setup")["topic/b/setup"], undefined);
  assert.equal(whys(r, "topic/a/overview")["topic/b/overview"], undefined);
  assert.notEqual(whys(r, SB)[SALES], "same title, different Learn section");
});

test("related: a rare title word pairs hubs; a common one does not", () => {
  const f = fixture();
  // 605 hubs as in production, so IDF >= log(605/5) means a word in at most 5 hub titles
  for (let i = 0; i < 600; i++) f.hubs.push(hub(`topic/filler/${i}`, `Filler ${i} ${i < 6 ? "ledger" : ""}`.trim(), null, [], null));
  f.hubs.push(hub("topic/x/contracts", "Contracts and renewals", null, [], null), hub("topic/y/renewal", "Renewals", null, [], null));
  const r = buildRelated(f);
  assert.equal(whys(r, "topic/x/contracts")["topic/y/renewal"], "same title, different Learn section", "renewal: 2 of 615 titles");
  assert.equal(whys(r, "topic/filler/0")["topic/filler/1"], undefined, "ledger: 6 titles, below the IDF threshold");
});

test("related: at most MAX rows, PER_RANK of one rank before the other ranks", () => {
  const f = fixture();
  const kids = Array.from({ length: 10 }, (_, i) => `topic/big/k${i}`);
  f.hubs.push(hub("topic/big", "Big", null, kids), ...kids.map((k, i) => hub(k, `Kid ${String.fromCharCode(97 + i)}`, "topic/big")));
  const r = buildRelated(f);
  assert.equal(r.pages["topic/big/k0"].length, MAX);
  assert.ok(r.pages["topic/big/k0"].every((x) => x.why === "same Learn section"), "only one rank: filled up to MAX");
  // the file is valid JSON with one page per line, and lists the closed set
  const text = serialize(r);
  const parsed = JSON.parse(text);
  assert.equal(parsed.schema, "bcobs-related@1");
  assert.deepEqual(parsed.why, WHY.map(([, w]) => w));
  assert.ok(text.split("\n").some((l) => l.startsWith('"topic/big/k0":')));
});
