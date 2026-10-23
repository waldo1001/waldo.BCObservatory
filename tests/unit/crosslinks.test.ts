import { test } from "node:test";
import assert from "node:assert/strict";
import {
  applyCrossLinks, buildCrossLinks, crossLinkSection, isCertain, MAX_DOCS_VIA, MAX_NAMED_PER_LEARN, MAX_ROWS, MAX_SHARERS, serializeCrossLinks,
  type CrossLinkInput,
} from "../../pipeline/link/crosslinks.js";
import { objectIndexFromRows } from "../../pipeline/link/mentions.js";
import { validate } from "../../pipeline/lib/schema.js";

const COPY = "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-environments-copy";
const SALES_DOC = "https://learn.microsoft.com/dynamics365/business-central/sales-invoice";
const FABRIC = "https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring";

const objects = objectIndexFromRows([
  ["codeunit/1886", "codeunit", 1886, "Environment Cleanup", "System Application"],
  ["codeunit/8912", "codeunit", 8912, "Env. Cleanup Subscribers", "System Application"],
  ["table/36", "table", 36, "Sales Header", "Base Application"],
  ["page/43", "page", 43, "Sales Invoice", "Base Application"],
  ["permissionset/48530", "permissionset", 48530, "Fabric Exp Admin", "Fabric"],
]);

function fixture(over: Partial<CrossLinkInput> = {}): CrossLinkInput {
  return {
    learn: [
      { url: COPY, title: "Copy an environment", objects: [], identifiers: [] },
      // the extraction names an object; a D94 identifier names an event whose only owner is codeunit 8912
      { url: SALES_DOC, title: "Invoice sales", objects: [{ type: "table", name: "Sales Header" }], identifiers: ["OnAfterCleanupEnvironment"] },
      { url: FABRIC, title: "Set up Business Central data mirroring to Microsoft Fabric", objects: [{ type: "permissionset", name: "Fabric Exp Admin" }], identifiers: [] },
    ],
    documented: new Map([["object/page/43", [{ url: SALES_DOC, title: "Invoice sales" }]]]),
    objects,
    eventOwners: new Map<string, string | null>([["onaftercleanupenvironment", "object/codeunit/8912"], ["onafterinsertevent", null]]),
    titles: new Map([
      ["object/codeunit/1886", 'Codeunit 1886 "Environment Cleanup"'], ["object/codeunit/8912", 'Codeunit 8912 "Env. Cleanup Subscribers"'],
      ["object/table/36", 'Table 36 "Sales Header"'], ["object/page/43", 'Page 43 "Sales Invoice"'],
      ["object/permissionset/48530", 'Permission set 48530 "Fabric Exp Admin"'],
    ]),
    changes: [
      { id: "change/bcapps/1", title: "#1 Truncate during environment copy", objects: ["object/codeunit/1886"] },
      { id: "change/bcapps/2", title: "#2 Sales header fix", objects: ["object/table/36"] },
    ],
    media: [
      { id: "video/v1", title: "Fabric launch", kind: "video", objects: ["object/permissionset/48530"] },
      { id: "post/a/1", title: "Fabric the way it should be", kind: "post", objects: ["object/permissionset/48530"] },
    ],
    overrides: [
      { from: "object/codeunit/1886", to: COPY, label: "documents", why: "the cleanup this codeunit raises runs when an environment is copied", evidence: { by: "waldo", at: "2026-10-23" } },
    ],
    model: [],
    ...over,
  };
}

const rows = (r: ReturnType<typeof buildCrossLinks>, id: string) => r.pages[id] ?? [];
const row = (r: ReturnType<typeof buildCrossLinks>, id: string, to: string) => rows(r, id).find((x) => x.to === to);

test("crosslinks: an override links the cleanup codeunit to Copy an environment, both ways, as certain", () => {
  const r = buildCrossLinks(fixture());
  assert.deepEqual(row(r, "object/codeunit/1886", COPY), { to: COPY, title: "Copy an environment", label: "documents", why: "the cleanup this codeunit raises runs when an environment is copied", by: "override" });
  assert.equal(r.learn[COPY]?.find((x) => x.to === "object/codeunit/1886")?.label, "documents", "the Learn side knows the codeunit");
  assert.ok(isCertain(row(r, "object/codeunit/1886", COPY)!));
});

test("crosslinks: Learn names an object (extraction) or an event with one owner (identifier)", () => {
  const r = buildCrossLinks(fixture());
  assert.equal(row(r, "object/table/36", SALES_DOC)?.label, "names");
  assert.equal(row(r, "object/table/36", SALES_DOC)?.why, "names this object");
  assert.equal(r.learn[SALES_DOC]?.find((x) => x.to === "object/table/36")?.why, 'Learn page names Table 36 "Sales Header"');
  assert.equal(row(r, "object/codeunit/8912", SALES_DOC)?.why, "names OnAfterCleanupEnvironment");
  assert.equal(row(r, "object/page/43", SALES_DOC), undefined, "a page docs-objects already joins gets no second row");
  assert.equal(row(r, "object/permissionset/48530", FABRIC)?.label, "names");
});

test("crosslinks: a change touching a documented object is only possibly related to that Learn page", () => {
  const r = buildCrossLinks(fixture());
  const x = row(r, "change/bcapps/1", COPY)!;
  assert.equal(x.label, "possibly related");
  assert.equal(x.why, 'touches Codeunit 1886 "Environment Cleanup"', "the target's title is in the link already");
  assert.equal(isCertain(x), false);
  const links = applyCrossLinks({ learn: [], objects: ["object/codeunit/1886"] }, rows(r, "change/bcapps/1"));
  assert.deepEqual(links.learn, [], "possibly related never lands in links.learn");
  assert.equal(links.related?.length, 1);
});

test("crosslinks: videos and posts reach Learn through the objects they name, and each other through a shared object", () => {
  const r = buildCrossLinks(fixture());
  assert.equal(row(r, "video/v1", FABRIC)?.label, "possibly related");
  assert.equal(row(r, "video/v1", FABRIC)?.why, 'names Permission set 48530 "Fabric Exp Admin"');
  assert.equal(row(r, "video/v1", "post/a/1")?.why, 'both name Permission set 48530 "Fabric Exp Admin"');
  assert.equal(row(r, "post/a/1", "video/v1")?.label, "possibly related");
});

test("crosslinks: an object shared by more than MAX_SHARERS media pairs none of them", () => {
  const media = Array.from({ length: MAX_SHARERS + 1 }, (_, i) => ({ id: `post/a/${i}`, title: `P${i}`, kind: "post" as const, objects: ["object/table/36"] }));
  const r = buildCrossLinks(fixture({ media }));
  assert.equal(rows(r, "post/a/0").filter((x) => x.to.startsWith("post/")).length, 0);
});

test("crosslinks: overrides win, certain rows come first, at most MAX_ROWS per page", () => {
  const overrides = [
    { from: "change/bcapps/1", to: COPY, label: "documents" as const, why: "owner checked", evidence: { by: "waldo", at: "2026-10-23" } },
    ...Array.from({ length: MAX_ROWS + 3 }, (_, i) => ({ from: "object/table/36", to: `post/a/${i}`, label: "possibly related" as const, why: `w${i}`, evidence: { by: "waldo", at: "2026-10-23" } })),
  ];
  const r = buildCrossLinks(fixture({ overrides }));
  assert.equal(row(r, "change/bcapps/1", COPY)?.by, "override", "the override replaces the generated row with the same target");
  assert.equal(rows(r, "change/bcapps/1").filter((x) => x.to === COPY).length, 1);
  const t36 = rows(r, "object/table/36");
  assert.equal(t36.length, MAX_ROWS);
  assert.equal(t36[0].label, "names", "certain rows first");
});

test("crosslinks: model rows are labelled possibly related and never certain", () => {
  const r = buildCrossLinks(fixture({ model: [{ unit: "object/codeunit/8912", picks: [{ url: COPY, reason: "subscribes to the environment cleanup events" }] }] }));
  const x = row(r, "object/codeunit/8912", COPY)!;
  assert.deepEqual(x, { to: COPY, title: "Copy an environment", label: "possibly related", why: "subscribes to the environment cleanup events", by: "model" });
  assert.equal(isCertain(x), false);
});

test("crosslinks: certain rows land in the matching links list; related validates in the frontmatter schema", () => {
  const r = buildCrossLinks(fixture());
  const links = applyCrossLinks({ learn: [], objects: [], videos: [], posts: [] }, rows(r, "object/codeunit/1886"));
  assert.deepEqual(links.learn, [COPY]);
  const fm = { links, id: "object/codeunit/1886" };
  const v = validate("frontmatter.base", { id: "object/x", type: "object", title: "t", summary: "s", tier: "official", language: "en", review: { state: "derived" }, generated: { at: "x", pipeline: "0" }, evidence: [], links: fm.links });
  assert.equal(v.ok, true, v.errors.join("; "));
});

test("crosslinks: the page sections split certain and possibly related, with page-relative links", () => {
  const r = buildCrossLinks(fixture({ model: [{ unit: "video/v1", picks: [{ url: COPY, reason: "r" }] }] }));
  const lines = crossLinkSection(rows(r, "video/v1"), "../").join("\n");
  assert.match(lines, /## Possibly related/);
  assert.match(lines, /- \[Fabric the way it should be\]\(\.\.\/posts\/a\/1\.md\) — possibly related: both name Permission set 48530 "Fabric Exp Admin"/);
  assert.match(lines, /\(model-linked\)/);
  const certain = crossLinkSection(rows(r, "object/codeunit/1886"), "../../").join("\n");
  assert.match(certain, /## Linked pages\n\n- \[Copy an environment\]\(https:\/\/learn\.microsoft\.com\/.*environments-copy\) — documents: the cleanup/);
  assert.equal(crossLinkSection([], "../").length, 0);
});

test("crosslinks: the file is one page per line and stable", () => {
  const r = buildCrossLinks(fixture());
  const a = serializeCrossLinks(r), b = serializeCrossLinks(buildCrossLinks(fixture()));
  assert.equal(a, b);
  assert.ok(a.split("\n").some((l) => l.startsWith('"object/codeunit/1886":')));
  assert.doesNotThrow(() => JSON.parse(a));
});

test("crosslinks: a Learn page naming more than MAX_NAMED_PER_LEARN objects is a list and names none", () => {
  const many = Array.from({ length: MAX_NAMED_PER_LEARN + 1 }, (_, i) => [`table/${1000 + i}`, "table", 1000 + i, `T${i}`, "Base Application"] as [string, string, number, string, string]);
  const idx = objectIndexFromRows(many);
  const list = { url: "https://learn.microsoft.com/deleted-objects", title: "Deleted objects", objects: many.map(([, t, , n]) => ({ type: t, name: n })), identifiers: [] };
  const r = buildCrossLinks(fixture({ objects: idx, learn: [list], documented: new Map(), overrides: [] }));
  assert.equal(r.learn[list.url], undefined);
  assert.ok(Object.values(r.pages).every((rows) => rows.every((x) => x.to !== list.url)));
});

test("crosslinks: an object on more than MAX_DOCS_VIA Learn pages leads no change to them", () => {
  const many = new Map([["object/table/36", Array.from({ length: MAX_DOCS_VIA + 1 }, (_, i) => ({ url: `https://learn.microsoft.com/p${i}`, title: `P${i}` }))]]);
  const r = buildCrossLinks(fixture({ documented: many, learn: [], overrides: [] }));
  assert.equal((r.pages["change/bcapps/2"] ?? []).filter((x) => x.to.startsWith("https:")).length, 0);
});
