import { test } from "node:test";
import assert from "node:assert/strict";
import { actionOrder, systemChip, trail } from "../../site/src/lib/crumbs.js";
import { section } from "../../pipeline/lib/sections.js";

const B = "/b/";

test("trail: Galaxy / section / parents / page, the section by its one name (D90)", () => {
  assert.deepEqual(trail(B, "objects", [{ label: "tables", href: "/b/objects/table/" }], 'Table 18 "Customer"'), [
    { label: "Galaxy", href: "/b/" }, { label: "AL objects", href: "/b/objects/" }, { label: "tables", href: "/b/objects/table/" }, { label: 'Table 18 "Customer"' },
  ]);
  // the system crumb used to swallow a section crumb with the same label: localization and source pages lost theirs
  assert.deepEqual(trail(B, "localizations", [], "Belgium (BE)")[1], { label: "Localizations", href: "/b/localizations/" });
  assert.deepEqual(trail(B, "sources", [], "Aardvark Labs")[1], { label: "Sources", href: "/b/sources/" });
  assert.deepEqual(trail(B, "features", [], "A feature")[1], { label: "Roadmap", href: "/b/features/" });
});

test("trail: a section index is the current page; no section is Galaxy / page", () => {
  assert.deepEqual(trail(B, "objects", [], null), [{ label: "Galaxy", href: "/b/" }, { label: "AL objects" }]);
  assert.deepEqual(trail(B, null, [], "Search"), [{ label: "Galaxy", href: "/b/" }, { label: "Search" }]);
});

test("trail: instrument pages sit under Galaxy / Instruments, which points at the instruments strip", () => {
  const t = trail(B, "instruments", [{ label: "Version lens", href: "/b/code/versions/" }], "BC28 to BC29");
  assert.deepEqual(t.map((c) => c.label), ["Galaxy", "Instruments", "Version lens", "BC28 to BC29"]);
  assert.equal(t[1].href, `/b/${section("instruments").path}`);
  assert.equal(t[1].href, "/b/#instruments");
});

test("systemChip: the galaxy system as a link, except where the system is the section itself", () => {
  assert.deepEqual(systemChip("sales", "objects", "Sales & Receivables", B), { label: "Sales & Receivables", href: "/b/#system=sales" });
  assert.equal(systemChip("localization", "localizations", "Localizations", B), null);
  assert.equal(systemChip("sources", "sources", "Sources", B), null);
  assert.deepEqual(systemChip("localization", "objects", "Localizations", B), { label: "Localizations", href: "/b/#system=localization" });
  assert.equal(systemChip(null, "objects", null, B), null);
  assert.deepEqual(systemChip("finance", null, "Finance", B), { label: "Finance", href: "/b/#system=finance" });
});

test("actionOrder: the page's own stage leads, Open in Claude everywhere else (F5)", () => {
  assert.equal(actionOrder({ opens: "stage" }), "context");
  assert.equal(actionOrder({}), "claude");
  assert.equal(actionOrder(undefined), "claude");
  assert.equal(actionOrder(null), "claude");
});
