import { test } from "node:test";
import assert from "node:assert/strict";
import { siteLinks, wrapTables } from "../../site/src/lib/links.js";

test("wrapTables (D74): each table sits in a .table-scroll wrapper and stays a table", () => {
  assert.equal(wrapTables("<p>x</p><table><tr><td>a</td></tr></table>"),
    `<p>x</p><div class="table-scroll"><table><tr><td>a</td></tr></table></div>`);
  const two = wrapTables("<table><tr><td>1</td></tr></table>\n<h2>b</h2>\n<table class=\"t\"><tr><td>2</td></tr></table>");
  assert.equal(two.match(/<div class="table-scroll"><table/g)?.length, 2);
  assert.equal(two.match(/<\/table><\/div>/g)?.length, 2);
});

test("wrapTables (D74): no table, or a table already wrapped, leaves the html unchanged", () => {
  assert.equal(wrapTables("<p>no table here</p>"), "<p>no table here</p>");
  const once = wrapTables("<p>x</p><table><tr><td>a</td></tr></table>");
  assert.equal(wrapTables(once), once);
  const handWrapped = `<div class="table-scroll"><table><tr><td>a</td></tr></table></div>`;
  assert.equal(wrapTables(handWrapped), handWrapped);
});

test("siteLinks resolves a relative .md link to the page directory URL", () => {
  assert.equal(siteLinks(`<a href="../features/1.md#x">f</a>`, "/b/", "videos/V1"), `<a href="/b/features/1/#x">f</a>`);
});
