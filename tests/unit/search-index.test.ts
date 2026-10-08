import { test } from "node:test";
import assert from "node:assert/strict";
import { captionOf, captionText } from "../../pipeline/render/object.js";
import { majorsText, pageRecord, pathLabel } from "../../pipeline/render/search.js";

test("a hub's record says where it sits, how big it is and whether its narrative was reviewed (D65 5.1)", () => {
  const r = pageRecord("topics/business-central/business-functionality/sales/subscription-billing", {
    type: "topic", title: "Subscription billing", summary: "Recurring invoicing.", tier: "official", system: "sales",
    learn_toc_path: ["Business functionality", "Sales", "Subscription billing"], narrative: "generated", review: { state: "reviewed" },
    coverage: { learn: 47, code: 27, video: 2, blog: 0, guideline: 0 },
  });
  assert.equal(r.path_label, "Business functionality › Sales", "the TOC path above the hub, without its own title");
  assert.deepEqual(r.tags, ["business functionality", "sales"], "the TOC words plus the system id, deduplicated");
  assert.equal(r.members, 76);
  assert.equal(r.narrative, "reviewed");
  assert.equal(r.stats, "47 Learn pages · 27 objects · 2 videos · reviewed");
  const bare = pageRecord("topics/x/subscriptions", { type: "topic", title: "Subscriptions", summary: "", tier: "official", system: "administration",
    learn_toc_path: ["Administration", "Cloud Migration API", "Subscriptions"], narrative: "none", review: { state: "unreviewed" }, coverage: { learn: 5, code: 0, video: 0, blog: 0 } });
  assert.equal(bare.narrative, "none");
  assert.equal(bare.stats, "5 Learn pages · no narrative");
  assert.equal(pageRecord("topics/y", { type: "topic", title: "Y", learn_toc_path: ["A", "Y"], narrative: "generated", review: { state: "unreviewed" }, coverage: { learn: 1 } }).narrative, "unreviewed");
  // D77: a derived hub has no narrative and ranks as none
  assert.equal(pageRecord("topics/z", { type: "topic", title: "Z", learn_toc_path: ["A", "Z"], narrative: "none", review: { state: "derived" }, coverage: { learn: 1 } }).narrative, "none");
});

test("long TOC paths keep their last two parts (D65 5.1, 11.4)", () => {
  assert.equal(pathLabel(["Business functionality", "Sales"]), "Business functionality › Sales");
  assert.equal(pathLabel(["Developer and IT-pro", "Administration", "Cloud migration", "Cloud Migration API"]), "… › Cloud migration › Cloud Migration API");
  assert.equal(pathLabel(["A very long single part that has more than forty characters"]), "A very long single part that has more than forty characters", "one part is never cut");
});

test("objects carry their caption and app, media their source, features their area, app pages their system (D65 5.1)", () => {
  const o = pageRecord("objects/page/8059", { type: "object", title: 'Page 8059 "Service Objects"', summary: "", tier: "official", object_type: "page", object_id: 8059, app: "Subscription Billing", caption: "Subscriptions" });
  assert.equal(o.caption, "Subscriptions");
  assert.equal(o.path_label, "Subscription Billing");
  assert.equal(pageRecord("objects/table/18", { type: "object", title: 'Table 18 "Customer"', object_type: "table", object_id: 18, app: "Base Application" }).caption, undefined, "no caption when it equals the name");
  assert.equal(pageRecord("videos/v", { type: "video", title: "V", channel: "yt-microsoft", source_name: "Microsoft Dynamics 365 Business Central (YouTube)" }).path_label, "Microsoft Dynamics 365 Business Central (YouTube)");
  assert.equal(pageRecord("posts/s/1", { type: "post", title: "P", source_id: "s", source_name: "think about IT" }).path_label, "think about IT");
  assert.equal(pageRecord("features/1", { type: "feature", title: "F", status: "preview", area: "Expense Agent" }).path_label, "Expense Agent");
  // tranche 3b writes these pages; the record is ready for them and harmless while none exist
  const app = pageRecord("apps/subscription-billing", { type: "app", title: "Subscription Billing", summary: "", tier: "official", system: "sales",
    counts: { objects: 372 }, links: { topics: ["topic/a", "topic/b"], videos: ["video/x"], posts: [] } });
  assert.equal(app.path_label, "Sales & Receivables");
  assert.equal(app.members, 375);
  assert.equal(app.stats, "372 objects · 2 Learn hubs · 1 video");
});

test("a Caption with Comment or Locked parts is read as the reader sees it (D65 5.1)", () => {
  assert.equal(captionText("Subscriptions"), "Subscriptions");
  assert.equal(captionText("'Human Resources', Comment = 'Use same translation as ''Profile Description'' '"), "Human Resources");
  assert.equal(captionText("'It''s mine', MaxLength = 30"), "It's mine");
  assert.equal(captionText("'agedAccountsReceivable', Locked = true"), null, "an API entity name is no caption");
  assert.equal(captionOf({ name: "Service Objects", properties: { Caption: "Subscriptions" } } as any), "Subscriptions");
  assert.equal(captionOf({ name: "Customer", properties: { Caption: "'Customer', Comment = 'x'" } } as any), null, "equal to the name once the comment is gone");
});

test("an AL extension release is dated by its release, pre-release while no stable upload exists, labelled with its wave (D85, test 22)", () => {
  const r = pageRecord("releases/al-30.0", {
    type: "release", title: "AL Language extension 30.0", summary: "AL Language extension 30.0 for Business Central 2027 release wave 1 (BC30).", tier: "official",
    system: "development", tags: ["markdown page fields"], published_at: "2026-10-01", prerelease: true, wave: "2027 release wave 1", major: "30",
  });
  assert.deepEqual([r.type, r.date, r.status, r.path_label], ["release", "2026-10-01", "prerelease", "2027 release wave 1 (BC30)"]);
  const old = pageRecord("releases/al-9.4", { type: "release", title: "AL Language extension 9.4", summary: "", tier: "official", published_at: "2022-08-08", prerelease: false, wave: "2022 release wave 1", major: null });
  assert.deepEqual([old.status, old.path_label], ["released", "2022 release wave 1"]);
  const undated = pageRecord("releases/al-16.4", { type: "release", title: "AL Language extension 16.4", summary: "", tier: "official", published_at: null, prerelease: true, wave: null, major: null });
  assert.deepEqual([undated.date, undated.path_label], [undefined, undefined]);
});

test("objects carry their name, namespace, system, majors, inbound and subscribers; a country object sits in its layer (D86 4.3)", () => {
  const fm = { type: "object", title: 'Table 36 "Sales Header"', summary: "", tier: "official", object_type: "table", object_id: 36, name: "Sales Header", app: "Base Application",
    namespace: "Microsoft.Sales.Document", present_in: ["23", "24", "25", "26", "27", "28", "29", "30"], links: { learn: new Array(22).fill("u") },
    relations: { out: 83, referenced_by: 82, pages: 19, extended_by: 7, event_subscribers: 94, calls: 38, called_by: 0 } };
  const r = pageRecord("objects/table/36", fm);
  assert.deepEqual({ name: r.name, app: r.app, namespace: r.namespace, system: r.system, present_in: r.present_in, inbound: r.inbound, subscribers: r.subscribers, country: r.country, path_label: r.path_label },
    { name: "Sales Header", app: "Base Application", namespace: "Microsoft.Sales.Document", system: "sales", present_in: "23-30", inbound: 217, subscribers: 94, country: undefined, path_label: "Base Application" },
    "inbound = referenced_by 82 + called_by 0 + pages 19 + event_subscribers 94 + Learn pages 22");
  const be = pageRecord("objects/table/11300-be", { type: "object", title: 'Table 11300 "VAT VIES Correction" (BE)', object_type: "table", object_id: 11300, name: "VAT VIES Correction", app: "Base Application",
    country: "BE", namespace: "Microsoft.Finance.VAT.Reporting", present_in: ["28", "30"] });
  assert.equal(be.app, "BE layer", "not 'Base Application'");
  assert.equal(be.path_label, "BE layer");
  assert.equal(be.country, "be");
  assert.equal(be.system, "finance");
  assert.equal(be.present_in, "28 30", "a gap lists the majors");
  assert.equal(be.inbound, 0);
  assert.equal(majorsText(["29"]), "29");
  assert.equal(majorsText(undefined), null);
});
