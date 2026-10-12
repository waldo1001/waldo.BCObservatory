# Object pages read like a reference: a section list, member filters, change chips, a clearer neighbourhood

Status: built 2026-10-12 on branch `build/object-page-reading` (section 12). Decision: D89 (appended to `docs/DECISIONS.md` at ship time). Milestone: M27
(reserved). Owner: waldo.
Scope: the browser-side reading aids of the 25,646 AL object pages, items B1, B2, B3 (the part batch 1 did not ship),
B6 and B8 of `docs/research/2026-10-12-ux-review.md`: one new pure module with tests, one new browser module mounted
from the existing module script of `site/src/layouts/Page.astro`, CSS in `site/src/styles/site.css` and
`site/src/components/Neighbourhood.astro`, and three build-time changes that make object pages smaller (the member
pill's `title`, the neighbourhood's node captions and its closing paragraph). Every claim below was verified against
the tree at `bb3a37e016` on 2026-10-12. Byte numbers were measured on a complete local build of exactly that commit
with the 2026-10-12 content (the "reference build"); page heights on the live site at 1280x900 (batch 1, D88,
deployed). Not in scope: the pipeline and `content/` (no renderer changes, the markdown twins and the MCP are
untouched), the "Ask your agent" paragraph itself (pinned by `tests/unit/object-ask-agent.test.ts`), the version
timeline's markup (batch 1, D88), the side column's one-hop diagram (`OneHop.astro`), every page type other than AL
objects, and the other review items (A, C, D, E, F, G; B4, B5, B7 shipped in D88).

## 1. Goal

Object pages are 89% of the site's pages (25,646 of 28,850; `objects/` holds 25,666 HTML files, 20 of them index
pages) and the longest ones are unreadable without the browser's find:

- **Table 18 "Customer"** is 42,090 px tall at 1280x900 (live, measured in the page: `document.documentElement
  .scrollHeight`; the review's 49,238 px was the pre-batch-1 build). Its main column has **19** `h2` sections, not
  18: the timeline, the neighbourhood and Evidence (components) plus 16 from the markdown. The eight stat tiles
  (`site/src/pages/objects/[...id]/index.astro:34-47`) point at seven distinct sections (`#events-published` twice);
  12 of the 19 sections have no tile. The side column is 987 px tall next to a 41,384 px main column
  (`site/src/layouts/Page.astro:58-73`; `.columns` aligns its children to the start, `site.css:102-104`), so 40,000
  px of it are empty.
- **Fields is 23,138 px of Table 18** (55%, 25.7 screens): 165 rows, median row 120 px, tallest 351 px, because the
  Explanation column (the field's ToolTip, `pipeline/render/object.ts:402-409`) is 172 px wide and wraps to three to
  fifteen lines, next to a 239 px Notes column. **Codeunit 80 "Sales-Post"** is 60,091 px; its Events published
  list is 46,041 px of it (530 events with their subscriber lists). Procedures and events are lists, a bullet per
  member with the signature in code and its doc after it (`object.ts:263-275`), not tables; only Fields, Fields on
  this page, Actions, Values and Properties are tables.
- **Change pills** are one span per member since D88 (`site/src/lib/versions.ts:92-98`), but nothing filters by
  version: Table 18's Fields carry pills for six majors (BC24 3 rows, BC25 23, BC26 84, BC27 10, BC28 45, BC29 4),
  and the timeline above says "84 fields changed" in BC26 with no way to see which.
- **The neighbourhood diagram** (`site/src/components/Neighbourhood.astro`) cuts every caption at 28 characters plus
  an ellipsis (`short`, line 14), and the caption is the full title, so the type, the id and the quote eat 9 to 21 of
  them (11 for `Table 379 "`, 21 for `Table extension 6450 "`): "Table 379 "Detailed Cust. Le…", "Codeunit 6450
  "Serv. Integra…". A legend exists (lines 45-47: one entry
  per kind with a line swatch, a link and a count), but four of its seven kinds (relates to, referenced by, pages,
  extended by) are the same solid grey line in the diagram and in the legend (lines 55-58, 65-68), and the marks
  (square, circle, colour, size) have no key. "Open in the neighbourhood explorer" is a plain `.btn` (line 48).
- **"Ask your agent"** is the last section of every object page (`object.ts:519-526`, 25,646 pages), 41,000 px
  below the actions row on Table 18.

Review claims that the tree contradicts (recorded here, nothing in the review file is edited): the labels are cut at
28 characters, not "about 18" (the name part shows at most 19); every node already carries its full name, ring and link
count in an SVG `<title>` (`Neighbourhood.astro:42`), so "full name in a title" exists; "no key for edge kinds" is
wrong as stated (the legend is a key), the real gap is identical swatches and unexplained marks; the design
handoff's "tabs over one table" (`design/HANDOFF.md:60-61`) does not match the page, which renders one table and two
lists in non-adjacent sections; "Fields alone is about 15 screens" is 25.7; the byte budget's "B3 markers, order of
10 MB" was mostly spent by batch 1, the remaining pill `title` attributes are 0.62 MB.

After this change:

- Every object page with six or more sections (17,506 pages), or a main column taller than four screens, has an
  **On this page** list of its sections with counts, sticky at the end of the side column on a wide screen, a closed
  `details` under the actions row on a narrow one, the current section marked, and a **back to top** button after
  the first screen (B1).
- Member sections of 12 rows or more (5,251 pages) get a **filter box**, an **order** select where an order means
  something, and a **compact** mode, on by default, that shows one line per row (the Explanation, ToolTip or list
  text clamped, a row opens on click, "Full text" opens all) (B2).
- Sections whose rows carry change pills (1,096 pages) get **Changed in** chips, one version at a time like the
  galaxy's version pill (D72), linked to the version transition page; the timeline's changed majors set them (B3).
- A search hit on `#field-<id>`, `#value-<ordinal>`, `#event-<Name>` or `#proc-<Name>` (D86) always lands on a
  visible, opened, highlighted row, also when a filter or a chip had hidden it.
- The neighbourhood names its nodes by name, explains its marks, lights a kind's lines from the legend, and its
  explorer link looks like the section's action (B6).
- An **Ask your agent** button in the actions row opens the closing paragraph's bc-code-atlas calls with copy
  buttons and a ready prompt (B8); the paragraph stays where it is.
- Object HTML shrinks by 3.34 MB (tar 695.3 to 692.1 MB on the same content), no object page grows, and the shared
  Page bundle grows once by about 12 KB (section 4.8).

## 2. Reader- and agent-facing behaviour, after

Agents: nothing changes. The markdown twins, `llms.txt`, the MCP and the search index are untouched; the "Ask your
agent" paragraph keeps its text (`object-ask-agent.test.ts` stays green unchanged). Readers without JavaScript see
today's page minus three build-time changes (no pill tooltip, name-only captions, a shorter closing paragraph).

Readers with JavaScript, on an object page (detected by `section.tl`, the version timeline, which every object page
has and no other page has):

**On this page (B1).**
- Wide layout (side column beside the main column): a `nav` at the end of the side column, heading "On this page" in
  the side column's heading style, one entry per `h2[id]` of the main column in page order: the heading's own text,
  then a count in mono when the section has one: `Fields 165`, `Keys 19`, `Events published 63`, `Procedures 71`,
  `Relations 104`, `Referenced by 170`, `Neighbourhood 311`, `Evidence 1`; no count for Across versions, Triggers,
  Countries that replace it, Ask your agent. The count is what the section lists (Procedures 71 public, while the
  tile says 160 procedures in all; Referenced by 50 listed plus "and 120 more objects", so 170). It sticks 16 px from
  the top for the whole page; the section whose heading last crossed a quarter of the viewport height is marked
  (`aria-current="location"`, accent left border); at the bottom of the page the last entry is marked.
- Narrow layout (one column): the same list inside a closed `details` directly after the actions row, summary
  "On this page · 19 sections"; choosing an entry closes it.
- A fixed button "↑ Top" (`aria-label="Back to top"`), bottom right, shown once the page is scrolled more than one
  viewport height; it scrolls to the top (smooth unless `prefers-reduced-motion`) and moves focus to the `h1`.
- Shown when the main column has 6 or more `h2` sections, or 3 or more and a height above four viewport heights.

**Member sections (B2).** For each of these `h2` ids with 12 or more rows (table rows in `tbody`, or top-level `li`):
Fields (`fields`, noun "fields"), Fields on this page (`fields-on-this-page`, "controls"), Actions (`actions`,
"actions"), Values (`values`, "values"), Keys (`keys`, "keys"), Events published (`events-published`, "events"),
Event subscriptions (`event-subscriptions`, "subscriptions"), Procedures (`procedures`, "procedures"). Directly before
the table wrapper or the list, a toolbar:
- a search input, placeholder `Filter 165 fields`, `aria-label` "Filter the fields": case-insensitive, every word
  must occur in the row's text (all cells; for list items including the nested subscriber list), whitespace
  collapsed. A status in mono, `aria-live="polite"`: `12 of 165` while filtered, empty otherwise. No rows: a muted
  line after the list, `No fields match.`
- an order select where the section has more than one order, `aria-label` "Order the fields": Fields "As declared",
  "No.", "Name", "Type", "Changed in, newest first"; Values "As declared", "Ordinal", "Name"; Events published and
  Procedures "As declared", "Name", "Changed in, newest first"; Event subscriptions "As declared", "Name". "Changed
  in" only when a row of the section has a pill. Grouped tables (Fields on this page, Actions) and Keys get no order:
  sorting would break the group column (`grouped`, `object.ts:420-423`).
- a toggle "Full text" (`aria-pressed`, a `.pill-btn`) where the section clamps: Fields (Explanation, Notes), Fields
  on this page (Shows, ToolTip), Actions (ToolTip), Events published and Procedures (the item). Compact is on by
  default: each clamped cell or item shows one line with an ellipsis, the first clamped column takes 45% of the table,
  a list item's nested subscriber list is hidden, and a list item's change pill is moved in front of its signature so
  it stays visible. A click in a row (not on a link or a button) opens that row; a clamped cell whose text is cut
  gets its full text as `title`. "Full text" turns compact off for the section.
- Sections under 12 rows get nothing; their anchors behave as today.

**Changed in (B3).** In a toolbar section where at least one row carries a change pill, a second toolbar line:
`Changed in` then single-select chips `All` (pressed by default), `BC24 3`, `BC25 23`, ... (oldest first, the number
is the rows of this section whose pill names that major, any change kind). Choosing a chip shows only those rows (with
the filter), choosing the pressed one returns to All, and a link follows the chips: `every object changed in BC26`
to `<base>code/versions/25__26/`, left out for the oldest major of the timeline. No chip line when every row carries
the same single major (it would filter nothing). The member pill keeps its text ("Δ BC25 Δ BC26", "+ BC25", "− BC25")
and loses its `title` in the HTML; the script sets the same title ("changed in BC25, BC26") on every pill of the
page. In the version timeline, the label of each changed major (`li.changed .v`) for which some section has a chip
becomes a button (`aria-label` "Show the members changed in BC26"): it sets that chip in every section that has it
(All in the others) and scrolls to the first such section. The chip counts are rows, so they can differ from the
timeline's text: BC24 says "4 fields changed", the chip says 3, because pills match members by current name
(`versions.ts:106-109`) and removed fields have no row.

**Anchors (D86).** On load, after the enhancements are mounted, and on every `hashchange` (the Ctrl+K finder sets
`location.href` on the same page, `palette.ts:134`): when the hash names an element, and that element is a row of a
toolbar section, the section's filter and chip are cleared if they hide it, the row is opened if the section is
compact, and the element is scrolled to the top (`scroll-margin-top: 16px`). Every `tr[id]` and `li[id]` that is the
`:target` gets the accent surface as background. The re-scroll on load also corrects the shift the compact mode
causes above a target the browser had already scrolled to.

**Neighbourhood (B6).**
- Node captions are the object's name: "Detailed Cust. Ledg. Entry", "Serv. Integration Mgt.", "Serv. Customer".
  Names and Learn titles over 30 characters keep today's cut at 28 plus "…" (AL caps most object names at 30; 566 of
  25,646 objects are longer, all of them enums, interfaces, permission set extensions, entitlements and one control
  add-in, measured on `data/index/objects.json` without the country suffix). The SVG
  `<title>` keeps the full label, ring and links, as today.
- Under the legend, one line (CSS generated content, no markup): "Square: a table. Circle: any other object, or a
  Learn page in its own colour. Colour: the object's galaxy system. Size: its number of links. Point at a kind to
  light its lines."
- Pointing at or focusing a legend entry dims every line and node to 15% except that kind's.
- "Open in the neighbourhood explorer →" has an accent border and accent text (the section's action; Open in Claude
  stays the page's one filled primary).
- The closing paragraph becomes "One hop out, from the extracted relations and call graph. Up to 40 shown; the
  sections below list them all." (was 290 characters, `Neighbourhood.astro:49`).

**Ask your agent (B8).** A button "Ask your agent" at the end of the actions row (`aria-expanded`,
`aria-controls="ask-pop"`). It opens a panel on its own line under the buttons, in flow: a copy of the section's
paragraphs, with a small "Copy" button after each `code` that starts with `bcatlas_`, and a button "Copy as a
prompt" that copies, for Table 18:

`For Table 18 "Customer" in Business Central, use bc-code-atlas: bcatlas_resolve_node(object_type: "table", object_name: "Customer"), then bcatlas_get_procedure_body or bcatlas_get_neighbors on the returned id.`

and for a country object the note's text appended after a space (Table 11300 "VAT VIES Correction" (BE): "... on the
returned id. A BE country object, not part of W1: the default corpus does not have it; bcatlas_list_countries shows
which countries the atlas has."). A copy button reads "Copied" for 1.5 s, "Copy failed" when neither the Clipboard API
nor the `execCommand("copy")` fallback works. Esc closes the panel and returns focus to the button; a click outside
the actions row closes it.

## 3. Decisions

**D89 Object pages read like a reference, built in the browser from the markup they already ship.** The object page
gets five reading aids, all mounted by one module (`site/src/scripts/object-page.ts`, its pure helpers in
`object-page-core.ts`, tested) from the existing module script of `Page.astro`, with their CSS in `site.css` and
`Neighbourhood.astro`, so no object page gains a byte (D88): an "On this page" list of the main column's sections with
counts, sticky at the end of the side column (narrow: a closed details under the actions) and a back-to-top button
(B1); a filter, an order and a compact one-line mode for member sections of 12 rows or more (B2); "Changed in" chips
per member section, single-select like the galaxy's version pill (D72), set also from the timeline's changed majors
and linked to the transition page, while the member pill drops its `title` from the HTML and gets it back from the
script (B3); name-only node captions, a CSS key of the marks, legend-lit kinds and an accent explorer action in the
neighbourhood, with a shorter closing paragraph (B6); an "Ask your agent" button that opens the closing paragraph's
calls with copy buttons and a prompt (B8). A hash naming a member row (D86) reveals, opens and scrolls to that row
whatever the filters hide. No tabs over the members. Measured on `bb3a37e016` with the 2026-10-12 content: object HTML
-3.34 MB (pill titles 0.62, captions 0.67, paragraph 2.05), no object page larger, Page bundle about +12 KB and CSS
+3 KB once; tar 695.3 to 692.1 MB.

Rejected, with the reason:

- **Tabs Fields / Procedures / Events** (design handoff section 4): the page has one table and two lists in different
  places (Table 18: sections 4, 6 and 8 of 19); a tab container would hide two thirds of the members from Ctrl+F and
  put every D86 anchor behind a tab switch, and the On this page list already jumps between them in one click. Free
  in bytes (a script could build it), rejected on reading.
- **A static On this page list**: about 600 bytes on 25,666 pages, 15 MB (D88's rejection).
- **A "Changed in" column instead of the pill**: an extra cell on 77,768 field rows (at least 10 bytes each,
  0.74 MB) and no column at all in the lists; the chips filter by version without one.
- **Pill text "25 26" without "BC"** (the review's first B3 idea): 63,434 bytes (31,717 "BC" tokens in 25,068 pills)
  for a visible change the chips no longer need, a day after batch 1 settled the text.
- **Expanding the cut captions by script on hover** (zero bytes): the cut text is still what a reader sees first and
  all a touch reader sees; name-only captions fit for every table, page, codeunit and report and save 0.67 MB.
- **A distinct dash pattern for each of seven kinds**: seven 1 px patterns are not told apart at 760 px; lighting a
  kind from its legend entry is.
- **The explorer link as `.btn primary`**: a second filled primary competes with Open in Claude, and the class costs 8
  bytes on 12,004 pages; a CSS rule on `.nb-actions .btn` costs nothing.
- **A positioned popover (absolute, or the `popover` attribute) or a `details.ask` menu for B8**: the `details`
  needs static markup on every page; an in-flow panel needs no positioning and works on a phone.
- **A lazy chunk (`import()`) for the object code**: a request waterfall on 25,646 pages to spare about 4.7 KB gzip,
  cached once, on 3,200 non-object pages.
- **A `js` class from the inline head script**, so compact mode applies before first paint: about 40 bytes on 28,850
  pages, 1.1 MB, for a shift below the fold.
- **Filter state in the URL**: it competes with the hash anchors that search hits use; later (section 8).

## 4. Contract

### 4.1 Files and mount

- `site/src/scripts/object-page-core.ts` (new): pure functions and constants, no DOM, no `node:` imports, importable
  from `tests/unit` the way `pills-core.ts` and `galaxy-core.ts` are.
- `site/src/scripts/object-page.ts` (new): `export function mountObjectPage(): void`. Returns at once unless
  `document.querySelector("section.tl")` exists. Order: member sections (B2, B3: they change heights), the timeline
  buttons (B3), the neighbourhood (B6), the ask panel (B8), the section list (B1, measured after compact mode), then
  `addEventListener("hashchange", reveal)` and `reveal()` when `location.hash` is set.
- `site/src/layouts/Page.astro:76-85`: the existing `<script>` gains `import { mountObjectPage } from
  "../scripts/object-page";` and one call `mountObjectPage();` after `mountStageDialog()`. No other `<script>`, no new
  component, no `<style>` in a new file: a component style becomes a new stylesheet `<link>` on every page (about 70
  bytes; `astro.config.mjs:9` sets `inlineStylesheets: "never"`). The module tag's `src` keeps its length (an
  8-character content hash).
- CSS: `site.css` (Base stylesheet, linked on every page) for B1, B2, B3, B8; the existing `<style is:global>` of
  `Neighbourhood.astro` for B6. Section 4.7 has the rules.

### 4.2 `object-page-core.ts`

```ts
export type Sym = "+" | "−" | "Δ";                 // U+002B, U+2212, U+0394, as versions.ts SYM writes them
export interface Change { sym: Sym; version: number }
export type Order = "source" | "no" | "name" | "type" | "changed";
export interface SectionDef { noun: string; orders: Order[]; clamp: string[] | "item" | null }
export const MIN_ROWS = 12;
export const MEMBER_SECTIONS: Record<string, SectionDef> = {
  fields:                { noun: "fields",        orders: ["source", "no", "name", "type", "changed"], clamp: ["Explanation", "Notes"] },
  "fields-on-this-page": { noun: "controls",      orders: [],                                          clamp: ["Shows", "ToolTip"] },
  actions:               { noun: "actions",       orders: [],                                          clamp: ["ToolTip"] },
  values:                { noun: "values",        orders: ["source", "no", "name"],                    clamp: null },
  keys:                  { noun: "keys",          orders: [],                                          clamp: null },
  "events-published":    { noun: "events",        orders: ["source", "name", "changed"],               clamp: "item" },
  "event-subscriptions": { noun: "subscriptions", orders: ["source", "name"],                          clamp: null },
  procedures:            { noun: "procedures",    orders: ["source", "name", "changed"],               clamp: "item" },
};
export const ORDER_LABEL: Record<Order, string> =
  { source: "As declared", no: "No.", name: "Name", type: "Type", changed: "Changed in, newest first" }; // values: "Ordinal" for no
export interface RowFacts { no: number | null; name: string; type: string; changes: Change[] }

/** B1: sections >= 3 and (sections >= 6 or mainHeight > 4 * viewport). */
export function tocWanted(sections: number, mainHeight: number, viewport: number): boolean;
/** B1: the leading number of the heading's <small> ("311 connected ...", "1,234 sources"); else tbody rows; else the
 *  top-level items, where an item "and <n> more ..." counts n; null when there is nothing to count or it is 0. */
export function sectionCount(s: { small?: string | null; rows?: number; items?: string[] }): number | null;
/** B1: the last index whose top <= line; 0 before the first; the last index when atBottom. */
export function currentSection(tops: number[], line: number, atBottom: boolean): number;
/** B2: lower-cased, whitespace collapsed; every word of the query occurs; an empty query matches. */
export function rowMatches(text: string, query: string): boolean;
/** B2: a list item's name: the code span up to "(", else the text up to " subscribes to " or ":", trimmed. */
export function listItemName(code: string | null, text: string): string;
/** B2: the indexes of the clamp columns by header text, "item" for lists, null when the section does not clamp. */
export function clampColumns(section: string, headers: string[]): number[] | "item" | null;
/** B2: the section's orders; "changed" only when a row has a change. */
export function orderOptions(section: string, hasChanges: boolean): Order[];
/** B2: a stable permutation of row indexes. no: numeric, nulls last; name, type: localeCompare("en", numeric,
 *  base sensitivity); changed: newest version first, rows without change last, then no, then source order. */
export function sortOrder(rows: RowFacts[], order: Order): number[];
/** B2, B3: per row, rowMatches(text, query) and (version null or a change in that version). */
export function visibleRows(rows: { text: string; changes: Change[] }[], query: string, version: number | null): boolean[];
/** D86: what to undo so a targeted row shows: a hidden row clears whatever is set; a compact section opens the row. */
export function revealPlan(t: { query: string; version: number | null; matchesQuery: boolean; matchesVersion: boolean; clamped: boolean }):
  { clearQuery: boolean; clearVersion: boolean; openRow: boolean };
/** B3: the changes of a pill's text, "Δ BC25 Δ BC26" -> two changes. */
export function parsePill(text: string): Change[];
/** B3: the title versions.ts wrote before D89, by change kind in order of first appearance: "changed in BC25, BC26". */
export function pillTitle(changes: Change[]): string;
/** B3: per major, oldest first, the rows naming it; null without changes or when every row names the same one major. */
export function versionChips(rows: Change[][]): { version: number; count: number }[] | null;
/** B3: `${base}code/versions/${v - 1}__${v}/`, null when v <= oldest (the timeline's first major). */
export function transitionHref(base: string, version: number, oldest: number): string | null;
/** B6: the ring of the i-th node from the class of the i-th `line.e` ("e relates" -> "relates"). */
export function ringsByNode(lineClasses: string[]): string[];
/** B8: the prompt of section 2: `For <title> in Business Central, use bc-code-atlas: <calls[0]>, then <calls[1..]
 *  joined by " or "> on the returned id.` plus " <note>"; no "then" clause with one call; "" without calls. */
export function agentPrompt(title: string, calls: string[], note: string | null): string;
```

Example `RowFacts` (Table 18, field 20): `{ no: 20, name: "Credit Limit (LCY)", type: "Decimal", changes: [{ sym: "Δ",
version: 26 }, { sym: "Δ", version: 28 }] }`.

### 4.3 `object-page.ts`, by item

- **Rows.** Table sections: `h2` then the following siblings up to the next `h2`; the first `div.table-scroll` holds
  the table (`wrapTables`, `site/src/lib/links.ts:27-30`); rows are `tbody` rows; No. from cell 0, name from cell 1's
  first text node (before the pill), type from cell 2. List sections: the first `ul` sibling, rows are its `li`
  children; name from `listItemName`. Each row's text is read once at mount (`textContent`); its changes from its
  `.pill` (`parsePill`).
- **Pill titles.** Every `.prose .pill` of the page, in any section and with or without a toolbar, gets
  `title = pillTitle(parsePill(text))` at mount (2,526 pages carry pills; 1,096 of them have a chip line).
- **Hiding** sets the `hidden` attribute on the `tr` or `li`. **Ordering** re-appends rows into their `tbody` or
  `ul` in `sortOrder`'s order; ids stay on the rows.
- **Compact.** Tables: the children of each clamp cell move into a `div.mt-x`; the table gets `mt-clamp`; the header
  cell of the first clamp column gets `mt-wide`. Lists: the item's child nodes before a nested `ul` move into a
  `div.mt-x`, its `.pill` becomes that div's first child; the `ul` gets `mt-clamp`. After one animation frame, every
  `.mt-x` with `scrollHeight > clientHeight + 1` gets `title` = its text. One `click` listener per table or list
  toggles `mt-open` on the row unless the target is inside an `a` or `button`.
- **Section list (B1).** Main column = `.columns > .main`; entries from its `h2[id]` (the component headings have
  ids `timeline`, `neighbourhood`, `evidence`; markdown headings have theirs). The label is the heading's own text
  nodes (without `small`). Its count: `sectionCount` with the `small` text, else the `tbody` rows of the first table
  in the section, else the `textContent` of the top-level `li` of the first `ul` in the section. Placement: wide
  when `side.offsetLeft > main.offsetLeft` (the columns wrap below 936 px of viewport: 560 + 280 + 48 + 2 x 24,
  `site.css:102-104` and the tokens; measured instead of a media query because a classic scrollbar moves the point);
  re-placed on `resize` in an animation frame. Wide: `nav.otp` appended to
  `.side`. Narrow: `details.otp-d` with the nav inserted after `.page .actions`, hidden while wide. Current section on
  `scroll` (passive, one animation frame): tops of the headings by `getBoundingClientRect`, `line = innerHeight / 4`,
  `atBottom = scrollY + innerHeight >= scrollHeight - 2`. The `h1` gets `tabindex="-1"` for the back-to-top focus.
- **Chips and timeline (B3).** One `div.pills.mt-v` (`role="group"`, `aria-label="Changed in"`) per chip section;
  chips are `button.pill-btn` with `aria-pressed` and `data-v` (the D82 look, `site.css:219-224`). The oldest major
  for `transitionHref` is the first number in the first `.tl .timeline .v` label ("BC23-25" gives 23). Changed
  timeline columns are single majors (`timelineCols` folds only quiet runs, `versions.ts:82-87`), so `.v` reads
  `BC<n>`; it is replaced by a `button.v` with the same text.
- **Reveal (D86).** `reveal()`: `id = decodeURIComponent(location.hash.slice(1))`; `t = document.getElementById(id)`;
  if `t` is a row of a toolbar section, apply `revealPlan` (clear the input and the chip, re-render, add `mt-open`);
  then `t.scrollIntoView({ block: "start" })` for any found target.
- **Neighbourhood (B6).** `svg = section.nb svg`; lines `svg.querySelectorAll("line.e")`; nodes = the svg's element
  children whose `localName` is `a` or `g`, in order. Lines and nodes are written from the same `placed` array in the
  same order (`Neighbourhood.astro:34` and `:36-43`, the centre `circle.me` between them), so node i gets class
  `r-<ringsByNode(...)[i]>`. Each legend `li` (ring from its `.sw` element's second class): `pointerenter` and
  `focusin` add `dim` to the svg and `on` to `.<ring>` lines and `.r-<ring>` nodes; `pointerleave` and `focusout`
  remove them.
- **Ask panel (B8).** From `#ask-your-agent`'s following `p` siblings: `calls` = text of the `code` elements of the
  first paragraph that start with `bcatlas_`; `note` = text of the second paragraph, if any; nothing is built without
  calls or without `.page .actions`. The panel holds `cloneNode(true)` of those paragraphs (they carry no ids). The
  title is the `h1` text. Copy: `navigator.clipboard.writeText`, else a temporary `textarea` and
  `document.execCommand("copy")`.

### 4.4 `site/src/lib/versions.ts`

`pill` (lines 94-98) drops the `title` attribute: `<span class="pill">Δ BC25 Δ BC26</span>`. The title text moves to
`pillTitle` in `object-page-core.ts` (same wording, same grouping). `markMembers` and `anchorMembers` are otherwise
unchanged, so the D86 anchors keep their shapes.

### 4.5 `site/src/lib/relations.ts`, `Neighbourhood.astro`, the object route

- `Lookup` (line 48) gains `name: string`; the object route sets it (`[...id]/index.astro:17`, `name:
  String(e.data.name)`, the frontmatter's `name`).
- `Neighbour` (line 47) gains `name: string | null`: the lookup's name for objects, `null` for Learn pages and for
  keys the lookup does not know (`neighbourhood`, lines 227 and 229).
- New `export function nodeCaption(n: { label: string; name: string | null }): string`: `n.name ?? n.label`, cut to
  28 characters plus "…" when longer than 30 (the rule `short` applies today).
- `Neighbourhood.astro`: `short` (line 14) goes; the caption (line 41) is `nodeCaption(n)`; the `<title>` (line 42)
  is unchanged; the paragraph (line 49) gets the text of section 2.

### 4.6 What does not change

The object route's markup apart from the lookup's `name`; `Page.astro`'s markup; `VersionTimeline.astro`; the
renderer and every file under `content/` and `data/`; `chrome.ts` (its `details.ask` wiring and timeline scroll run
after the Page module, `Base.astro:75-80` follows `Page.astro:76-85` in the document, and are not affected).

### 4.7 CSS (exact; minified 2,987 bytes, 1,158 gzip, measured with the repository's esbuild)

`site.css`, a new block after the page skeleton rules:

```css
/* D89 (B1): On this page, built by object-page.ts; a flex side column so a sticky child sticks for the whole page
   (a grid item's containing block is its grid area: measured, the grid side lets it scroll away) */
.columns:has(> .side .otp) > .side { align-self: stretch; display: flex; flex-direction: column; }
.columns:has(> .side .otp) > .side > * { min-width: 0; }
.otp { position: sticky; top: 16px; max-height: calc(100vh - 32px); overflow-y: auto; }
.otp ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 1px; font-size: 14px; }
.otp a { display: flex; justify-content: space-between; gap: 8px; padding: 4px 8px; border-left: 2px solid transparent; color: var(--text-2); text-decoration: none; }
.otp a:hover { color: var(--text); background: var(--surface); }
.otp a[aria-current] { color: var(--text); border-left-color: var(--accent); background: var(--surface); }
.otp-d { margin: -16px 0 24px; }
.otp-d > summary { cursor: pointer; min-height: 40px; display: flex; align-items: center; color: var(--link); font-size: 14px; }
.otp-d .otp { position: static; max-height: none; }
.otp-d .otp h2 { display: none; }
.totop { position: fixed; right: 16px; bottom: 16px; z-index: 30; min-height: 40px; padding: 0 14px; border: 1px solid var(--line-strong); border-radius: 999px; background: var(--surface); color: var(--text); font: 600 13px var(--font-ui); cursor: pointer; box-shadow: 0 6px 20px rgb(0 0 0 / .25); }
.totop:hover { border-color: var(--text-2); }
/* D89 (B2, B3): member toolbars, compact rows, change chips; the target row of a search hit (D86) */
.mt-bar { display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: center; margin: 8px 0 10px; }
.mt-bar input[type="search"] { flex: 1 1 200px; max-width: 320px; min-height: 36px; padding: 6px 10px; background: var(--surface); color: var(--text); border: 1px solid var(--line-strong); border-radius: var(--r-card); font: 400 14px var(--font-ui); }
.mt-bar select { min-height: 36px; padding: 0 8px; background: var(--surface); color: var(--text); border: 1px solid var(--line-strong); border-radius: var(--r-card); font: 400 13px var(--font-ui); }
.mt-n { font: 400 12px var(--font-mono); color: var(--muted); }
.mt-v { margin: 0; flex-basis: 100%; }
.mt-clamp th.mt-wide { width: 45%; }
.mt-clamp .mt-x { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; cursor: pointer; }
.mt-clamp .mt-open .mt-x { display: block; -webkit-line-clamp: none; cursor: auto; }
.mt-clamp > li:not(.mt-open) > ul { display: none; }
.prose tr[id], .prose li[id] { scroll-margin-top: 16px; }
.prose tr:target, .prose li:target { background: var(--accent-surface); }
.tl .timeline button.v { font: 500 13px var(--font-mono); color: var(--accent); background: none; border: 0; padding: 0; text-align: left; cursor: pointer; text-decoration: underline; text-underline-offset: 2px; }
/* D89 (B8): the Ask your agent panel, in flow under the actions row */
.ask-pop { flex-basis: 100%; padding: 12px 14px; border: 1px solid var(--line-strong); border-radius: var(--r-panel); background: var(--surface); font-size: 14px; }
.ask-pop p { margin: 0 0 10px; }
.ask-pop .pill-btn { min-height: 28px; margin-left: 4px; }
```

`Neighbourhood.astro`, appended to its `<style is:global>`:

```css
.nb svg.dim > a, .nb svg.dim > g, .nb svg.dim > .e { opacity: .15; transition: opacity var(--t-hover); }
.nb svg.dim > .on { opacity: 1; }
.nb-legend::after { content: "Square: a table. Circle: any other object, or a Learn page in its own colour. Colour: the object's galaxy system. Size: its number of links. Point at a kind to light its lines."; flex-basis: 100%; color: var(--muted); font-size: 13px; }
.nb-actions .btn { border-color: var(--accent); color: var(--accent); }
.nb-actions .btn::after { content: "→"; }
.nb-actions .btn:hover { color: var(--accent); text-decoration: underline; }
```

The accent text sits on the page background (light `#A85F00`, 4.5:1, the HANDOFF limit for 14 px and up; the button
is 14 px 600), not on `--accent-surface` (light 4.36:1, computed from the tokens).

### 4.8 Byte budget (binding)

Measured on the reference build (`bb3a37e016`, 2026-10-12 content): tar 729,118,720 bytes = 695.3 MB, 59,135 files
(`npx tsx scripts/site-size.ts site/dist`). HTML numbers from a Python pass over its 25,646 object pages that applies
the three build-time changes with the regexes of section 7 and sums the differences; tar from the per-file tar formula
of `scripts/site-size.ts` (512 + 512-byte blocks). JS and CSS from a 333-line prototype of the two modules and the CSS
of 4.7, bundled and minified with the repository's esbuild (`--bundle --minify --format=esm --target=es2022`). One byte
on every object page is 25,646 bytes; 100 bytes are 2.4 MB.

| Item | Per object page | Pages | Total | How measured |
|---|---|---|---|---|
| B1 On this page, back to top | 0 | 25,646 | 0 | built from the `h2`s by the script |
| B2 toolbars, compact rows, reveal | 0 | 5,251 have a section of 12+ rows | 0 | script; 189,124 rows in those sections |
| B3 chips, timeline buttons, pill titles restored | 0 | 1,096 have a chip line | 0 | script |
| B3 pill `title` dropped from the HTML | -26 average per pill; Table 18 -3,692, Codeunit 80 -2,315, Table 37 -5,485 | 2,526 (25,068 pills) | -653,511 B (-0.62 MB) | regex (a) |
| B6 name-only captions | -60 average; Table 18 -243, Table 37 -222 | 11,696 | -699,395 B (-0.67 MB) | regex (b) |
| B6 shorter closing paragraph | -179 | 12,004 | -2,148,716 B (-2.05 MB) | regex (c) |
| B6 key, lit kinds, explorer action | 0 | 12,004 | 0 | CSS, script |
| B8 Ask your agent | 0 | 25,646 | 0 | script clones the existing paragraph |
| **Object HTML** | never more than today | 25,646 | **-3,501,622 B (-3.34 MB)**; tar -3,465,728 | sum of the rows above |
| Page module JS (one file, every information page) | 0 (the `src` keeps its length) | 1 file | +11,656 B (prototype; 4,663 gzip); ceiling +16 KB; tar +11,776 | esbuild, prototype |
| CSS (`site.css`, `Neighbourhood.astro`) | 0 (no new `<link>`) | 2 files | +2,987 B (1,158 gzip); tar about +3,072 | esbuild |
| **Tar after, same content** | | | **725,667,840 B = 692.1 MB** (-3.3 MB) | 729,118,720 - 3,465,728 + 14,848 |

Today's shared files for comparison: Page module 3,313 B (plus its `source-stage` chunk 9,093), Base module 1,226
(plus `palette` 5,616), Base stylesheet 24,312, the object route's stylesheet 2,621. An object page carries exactly
three `<script>` tags (the inline theme script and two module tags) and four stylesheet `<link>`s; both counts stay.

Anchors under the budget: the D86 ids stay in the HTML on the rows (`versions.ts:123-130`); filtering hides rows
with the `hidden` attribute and ordering moves them, so `getElementById` always finds them, and `reveal` (4.3) clears
what hides the row, opens it and scrolls to it, on load and on `hashchange`.

## 5. Test plan (write first)

`tests/unit/object-page-core.test.ts` (new), importing `../../site/src/scripts/object-page-core.js`:

- `tocWanted`: `(19, 41384, 900)` true; `(6, 500, 900)` true; `(5, 3000, 900)` false; `(5, 3700, 900)` true;
  `(2, 99999, 900)` false.
- `sectionCount`: `{ small: "311 connected objects and pages" }` 311; `{ small: "1 sources" }` 1; `{ small: "1,234
  sources" }` 1234; `{ small: "obsolete pending since 26.0" }` null; `{ rows: 165 }` 165; `{ rows: 0 }` null;
  50 items `"x"` plus `"and 120 more objects (133 fields): data/code/relations/29.json"` 170; `["Page 21", "and 3 more
  pages", "Codeunit 5 (codeunit runs on it)"]` 5; `{}` null.
- `currentSection`: `([-900, -10, 300, 1200], 225, false)` 1; `([400, 900], 225, false)` 0; `([-5000, -3000, 100,
  400], 225, true)` 3.
- `rowMatches`: `("Sell-to  Customer No.", "SELL-TO customer")` true; `("Name Text[100]", "code")` false;
  `("anything", "  ")` true; `("20 Credit Limit (LCY) Decimal", "limit 20")` true.
- `listItemName`: `('OnAfterPostSalesDoc(var SalesHeader: Record "Sales Header")', "")` "OnAfterPostSalesDoc";
  `(null, 'CustomerOnAfterDelete subscribes to table "Customer" OnAfterDeleteEvent')` "CustomerOnAfterDelete";
  `(null, "Key1: No. (clustered)")` "Key1".
- `clampColumns`: `("fields", ["No.", "Name", "Type", "Explanation", "Notes"])` `[3, 4]`; `("fields-on-this-page",
  ["Group", "Control", "Shows", "ToolTip"])` `[2, 3]`; `("actions", ["Group", "Action", "ToolTip", "Runs"])` `[2]`;
  `("procedures", [])` and `("events-published", [])` `"item"`; `("values", ["Ordinal", "Name", "Caption",
  "Notes"])`, `("keys", [])` and `("unknown", [])` null.
- `orderOptions`: `("fields", true)` `["source", "no", "name", "type", "changed"]`; `("fields", false)` without
  `"changed"`; `("procedures", false)` `["source", "name"]`; `("keys", true)` `[]`; `("unknown", true)` `[]`.
- `sortOrder` on rows `[{ no: 3, name: "Search Name", type: "Code[100]", changes: Δ26, Δ27 }, { no: 1, name: "No.",
  type: "Code[20]", changes: Δ25, Δ26 }, { no: 20, name: "Credit Limit (LCY)", type: "Decimal", changes: Δ26, Δ28 },
  { no: 2, name: "Name", type: "Text[100]", changes: none }]`: source `[0, 1, 2, 3]`; no `[1, 3, 0, 2]`; name
  `[2, 3, 1, 0]`; type `[1, 0, 2, 3]` (numeric: Code[20] before Code[100]); changed `[2, 0, 1, 3]`; two rows with
  equal keys keep their source order.
- `visibleRows` on `[{ text: "1 No. Δ BC25 Δ BC26 Code[20] Specifies the number", changes: Δ25, Δ26 }, { text: "2
  Name Text[100] Specifies the name", changes: none }, { text: "20 Credit Limit (LCY) Δ BC26 Δ BC28 Decimal Specifies
  the maximum", changes: Δ26, Δ28 }]`: `("", null)` all true; `("specifies the n", null)` `[true, true, false]`;
  `("", 26)` `[true, false, true]`; `("credit", 25)` all false.
- `revealPlan`: hidden by the query in a compact section `{ query: "zzz", version: null, matchesQuery: false,
  matchesVersion: true, clamped: true }` gives `{ clearQuery: true, clearVersion: false, openRow: true }`; hidden by
  the chip `{ query: "", version: 26, matchesQuery: true, matchesVersion: false, clamped: false }` gives `{ false, true,
  false }`; hidden by the query with a chip set `{ query: "credit", version: 26, matchesQuery: false, matchesVersion:
  true, clamped: true }` gives `{ true, true, true }`; visible in a full-text section gives all false.
- `parsePill`: `"Δ BC25 Δ BC26"` two changes Δ 25, Δ 26; `"+ BC25"` one; `"− BC30"` (U+2212) one; `"+ BC24 Δ BC26"`
  two; `""` none.
- `pillTitle`: `[Δ25, Δ26]` "changed in BC25, BC26"; `[−25]` "removed in BC25" (the two strings
  `version-timeline.test.ts:38-39` pins today); `[+24, Δ26, Δ27]` "added in BC24; changed in BC26, BC27".
- `versionChips`: `[[Δ25, Δ26], [Δ26], [], [+27]]` `[{ 25, 1 }, { 26, 2 }, { 27, 1 }]`; `[[Δ26], [Δ26]]` null;
  `[[], []]` null; `[[Δ26], []]` `[{ 26, 1 }]`; a row naming 26 twice counts once.
- `transitionHref`: `("/b/", 26, 23)` "/b/code/versions/25__26/"; `("/b/", 24, 23)` "/b/code/versions/23__24/";
  `("/b/", 23, 23)` null.
- `ringsByNode`: `["e relates", "e relates", "e calls", "e learn"]` `["relates", "relates", "calls", "learn"]`.
- `agentPrompt`: `('Table 18 "Customer"', ['bcatlas_resolve_node(object_type: "table", object_name: "Customer")',
  "bcatlas_get_procedure_body", "bcatlas_get_neighbors"], null)` equals the Table 18 string of section 2; with the
  BE note equals the BE string of section 2; `(title, [], null)` "".

`tests/unit/relations.test.ts` (extended): `nodeCaption({ label: 'Table 379 "Detailed Cust. Ledg. Entry"', name:
"Detailed Cust. Ledg. Entry" })` "Detailed Cust. Ledg. Entry"; `({ label: "(v1.0) Create customer
defaultDimensions", name: null })` "(v1.0) Create customer defau…"; `({ label: "x", name: "A name of exactly thirty
chars" })` unchanged (30 characters).

`tests/unit/version-timeline.test.ts:38-40` (changed): the expected cells become `<td>Name <span
class="pill">Δ BC25 Δ BC26</span></td>` and `<td>Telex No. <span class="pill">− BC25</span></td>`; still one span
per member; and `assert.doesNotMatch(html, /title=/)`.

Unchanged and still green: `tests/unit/object-ask-agent.test.ts` (the paragraph), `tests/unit/live-search.test.ts`
(the D86 anchors, lines 150-170).

## 6. Tasks

No phase touches `content/` or `data/`; the three build-time changes rewrite object HTML on the next Pages build, not
in a nightly commit. Phases 2 and 3 in that order; phases 4 and 5 any time after phase 1.

**Phase 1, the module and On this page (B1), half a day.**
1. `object-page-core.test.ts` for `tocWanted`, `sectionCount`, `currentSection` (red), then those three in
   `object-page-core.ts` (green).
2. `object-page.ts` with `mountObjectPage`, the section list, back to top and `reveal` (plain scroll for now); the
   import in `Page.astro`; the B1 CSS in `site.css`.
3. Build; checks 7.1, 7.2 and the B1 part of 7.3. HTML of object pages unchanged (byte-identical, 7.2).

**Phase 2, member sections (B2), 1 to 1.5 days.**
4. Tests for `rowMatches`, `listItemName`, `clampColumns`, `orderOptions`, `sortOrder`, `visibleRows`, `revealPlan`,
   then the functions.
5. Toolbars, compact rows, ordering, the empty line, `reveal` with `revealPlan`; the B2 CSS.
6. Build; 7.3 B2 and anchor checks on Table 18, Codeunit 80, Page 21, Enum 89. Optional, not in CI: an `objects`
   pass in `scripts/ui-sweep.mjs` (same Playwright loading, same base-path server) asserting the sticky list's top at
   `scrollY` 20,000, the Fields height under 10,000 px and the `#field-20` reveal with a filter typed.

**Phase 3, change chips (B3), half a day. Rewrites the HTML of 2,526 object pages (the pill titles).**
7. Tests for `parsePill`, `pillTitle`, `versionChips`, `transitionHref`; the changed expectation in
   `version-timeline.test.ts`; then the functions and `pill` without `title` in `versions.ts`.
8. Pill titles set by the script on every pill, chip lines, the transition link, timeline buttons; the B3 CSS.
9. Build; 7.2 (2,526 pages smaller, none larger) and 7.3 B3.

**Phase 4, neighbourhood (B6), half a day. Rewrites the HTML of 12,004 object pages (captions, paragraph).**
10. `nodeCaption` test, then `Lookup.name`, `Neighbour.name`, `nodeCaption`, the route's lookup, the caption and the
    paragraph in `Neighbourhood.astro`.
11. `ringsByNode` test and function; the legend lighting in `object-page.ts`; the B6 CSS.
12. Build; 7.2 and 7.3 B6.

**Phase 5, Ask your agent (B8), two to three hours.**
13. `agentPrompt` test and function; the button and panel in `object-page.ts`; the B8 CSS.
14. Build; 7.3 B8.

**Close.** D89 appended to `docs/DECISIONS.md`, PLAN M27 row shipped, HANDOFF entry moved to "Where things stand"
with the measured tar and the Page bundle size, section 12 of this spec renamed "Built, deviations" with the numbers
of 7.2.

## 7. Verification

**7.1 Unit and types.** `npm run typecheck && npm test`.

**7.2 Build and bytes.** Node 22 for the site build (`PATH="$HOME/.nvm/versions/node/v22.23.1/bin:$PATH"`).
1. Before the phase's changes (or on the commit before them), build and keep the output: `npm run site:build && mv
   site/dist ../dist.before`.
2. Build the change: `npm run site:build && npx tsx scripts/site-size.ts site/dist`. On the 2026-10-12 content the
   tar is at most 692.2 MB after all phases (695.3 before); on other content compare with `../dist.before` measured
   the same way.
3. No object page grows (exit 1 lists the ones that did):

```bash
python3 - ../dist.before site/dist <<'EOF'
import os, sys
a, b = sys.argv[1], sys.argv[2]; grew, tot, n = [], 0, 0
for dp, _, fn in os.walk(os.path.join(b, "objects")):
    if "index.html" not in fn: continue
    p = os.path.join(dp, "index.html"); q = os.path.join(a, os.path.relpath(p, b))
    if not os.path.exists(q): continue
    d = os.path.getsize(p) - os.path.getsize(q); tot += d; n += 1
    if d > 0: grew.append((d, p))
print(n, "object pages, delta", tot, "bytes"); print("grew:", sorted(grew)[-10:]); sys.exit(1 if grew else 0)
EOF
```

   Expected deltas: phase 1, 2 and 5: 0; phase 3: -653,511 on 2,526 pages; phase 4: -2,848,111 on 12,004 pages
   (captions and paragraph), within 1% on the same content.
4. Markup census on the new build: `grep -rl 'class="pill" title=' site/dist/objects | wc -l` is 0 after phase 3;
   `grep -rl 'One hop out, from the extracted relations' site/dist/objects | wc -l` equals the pages with
   `<section class="nb"` after phase 4; `grep -c '<script' site/dist/objects/table/18/index.html` is 3 and `grep -c
   'rel="stylesheet"' site/dist/objects/table/18/index.html` is 4 before and after; `grep -c 'class="otp\|mt-bar\|ask-pop'
   site/dist/objects/table/18/index.html` is 0 (nothing static).
5. JS: `ls -l site/dist/_astro/Page.astro_astro_type_script_index_0_lang.*.js` against `../dist.before`: growth at
   most 16 KB (prototype 11,656 B); no new file under `_astro/` other than renamed hashes.

The regexes behind section 4.8's numbers, to reproduce them on `../dist.before`: (a) `(<span class="pill")
title="[^"]*"(>)` to `\1\2`; (b) in `<section class="nb"`, `<title>([^<]*)</title>(?:<rect[^>]*></rect>|<circle
[^>]*></circle>)<text[^>]*>([^<]*)</text>` with the caption replaced by the quoted name of the title (`^.*?
"(.*)" \(`, which also covers "Table extension 6450"), cut at 28 plus "…" over 30, HTML-escaped;
(c) `<p class="meta">One hop[^<]*</p>` to the new paragraph.

**7.3 Behaviour**, served under the base path (`python3 -m http.server` on a folder whose `waldo.BCObservatory`
links to `site/dist`, as `scripts/ui-sweep.mjs` does, or a browser), at 1280x900 and 375x812, dark and light:

- B1, Table 18: 19 entries, `Fields 165`, `Keys 19`, `Events published 63`, `Procedures 71`, `Relations 104`,
  `Referenced by 170`, `Neighbourhood 311`, `Evidence 1`; at `scrollY` 20,000 the list's top is 16 px; the marked
  entry follows the scroll; at the bottom Evidence is marked. 375 px: a closed "On this page · 19 sections" right
  under the actions; an entry jumps and closes it. "↑ Top" appears after one screen, scrolls up, focuses the title.
  Enum 89 (8 sections, a short page): the list too (8 >= 6); an object with 3 short sections: none.
- B2, Table 18 Fields: toolbar with "Filter 165 fields", the five orders, "Full text" not pressed; Fields height
  under 10,000 px (23,138 today); typing "posting group" shows `n of 165`; order Name puts "Address" first; a click
  on a row opens it, a click on a link inside does not. Codeunit 80: Events published under 20,000 px (46,041
  today), subscriber lists hidden until a row opens; filter "OnBeforePostSalesDoc" finds it. Page 21 "Customer Card":
  Fields on this page and Actions have filter and Full text, no order.
- Anchors: open `objects/table/18/#field-20`: the row "Credit Limit (LCY)" at the top, opened, highlighted. On Table
  18, type "zzz" into the Fields filter, then Ctrl+K `field:Credit Limit`, Enter: the filter empties, the row shows.
  Choose chip BC26 in Events published, then load `#event-OnAfterDeleteRelatedData` (a BC25 event): the chip returns
  to All. `#proc-AssistEdit` on Table 18 (a toolbar section) and `#value-3` on Enum 89 (8 values, no toolbar) still land.
- B3, Table 18: chips Fields `BC24 3`, `BC25 23`, `BC26 84`, `BC27 10`, `BC28 45`, `BC29 4`; BC26 shows `84 of 165`
  and "every object changed in BC26" to `code/versions/25__26/`; hovering a pill shows "changed in BC25, BC26". The
  timeline's BC26 label is a button: Fields at BC26, Events published (has BC26) at BC26, Procedures (has BC26) at
  BC26, scrolled to Fields. BC30 (unchanged) stays text.
- B6, Table 18: captions "Detailed Cust. Ledg. Entry", "Serv. Integration Mgt." with no ellipsis; the key line under
  the legend; pointing at "calls" leaves only the dotted lines and their nodes at full opacity; Tab onto a legend
  link does the same; the explorer button has the accent border and the arrow, AA in light theme.
- B8, Table 18: "Ask your agent" after "Source on GitHub"; opening shows the paragraph with three Copy buttons;
  Copy puts `bcatlas_resolve_node(object_type: "table", object_name: "Customer")` on the clipboard; "Copy as a
  prompt" puts the section 2 string; Esc closes and focuses the button. Table 11300-be: four Copy buttons, the prompt
  ends with the BE note.
- Without JavaScript (disabled in the browser): Table 18 renders as on `../dist.before` apart from the three
  build-time changes.

## 8. Later, not in this spec

- The same On this page list on topic hubs, localization pages and long video pages (the rule is generic; each page
  type needs its own visual check, and the back-to-top button would meet the video mini-player bottom right).
- A per-procedure atlas call on each Procedures row: `bcatlas_resolve_node` takes an optional `member` (its tool
  schema, read in this session), so a row could copy `bcatlas_resolve_node(object_type, object_name, member)`.
- Filter and chip state in the URL (`?f=`, `?v=`) without disturbing the hash anchors.
- `hidden="until-found"` on compact rows so the browser's find opens them (Chromium only on 2026-10-12).
- Light-theme contrast of `.pill-btn[aria-pressed="true"]`: accent `#A85F00` on `--accent-surface` `#FBF1DE` is
  4.36:1 at 12 px, under AA; the D82 pills on `/changes/` share it, and the chips here inherit it. A site-wide fix.
- Ordering the grouped tables (Fields on this page, Actions) within their groups.

## 9. Risks and open questions

Each with the default the coder takes when nobody answers.

- **The new closing paragraph is the owner's copy.** Default: ship "One hop out, from the extracted relations and
  call graph. Up to 40 shown; the sections below list them all." (2.05 MB of the 3.34). If the owner wants the old
  text, phase 4 still saves 0.67 MB.
- **Name-only captions drop the type from the label.** "No. Series" can be Table 308 or Page 456; the square or circle
  and the `<title>` tell them apart. Default: name only.
- **Compact on by default.** It changes what a reader sees first on 5,251 pages and is the main height saving.
  Default: on for every section with a clamp; "Full text" per section; no memory across pages.
- **Threshold.** `MIN_ROWS = 12` (Fields p90 is 37 rows, Procedures p90 11, Events p90 15 on the reference build).
  Default: 12.
- **Ctrl+F in compact mode** finds clamped text but cannot show it, and does not find hidden subscriber lists. The
  section filter matches the full text (`textContent` includes hidden nodes). Default: accept; "Full text" is the
  escape; `until-found` is in section 8.
- **The pill tooltip needs JavaScript now.** No-JS readers see "Δ BC25" without "changed in BC25". Default: accept
  (agents read the twins, which have no pills).
- **Layout shift.** Compact mode applies after the first paint on long pages; below the fold on a normal load, and
  `reveal` re-scrolls on a hash load. Default: accept (a pre-paint class costs 1.1 MB, section 3).
- **`:has()`** (Chromium 105, Safari 15.4, Firefox 121): without it the list sits at the end of the side column but
  does not stick. Default: accept.
- **Mount cost** on Codeunit 80 (530 events, about 1,100 moved nodes) and Table 37 (the largest page, 289,565 bytes).
  Default: measure in the browser's performance panel; above 50 ms on a laptop, build the compact wrappers in
  `requestIdleCallback` per section.
- **Clipboard** needs a secure context (GitHub Pages is https; a local http server falls back to `execCommand`).
  Default: as specified.
- **The prototype is a measurement, not the code.** The bundle ceiling is 16 KB raw; above it, look for duplicated
  helpers before cutting features.

## 10. Files

New: `docs/specs/object-page-reading.md` (this), `site/src/scripts/object-page-core.ts`,
`site/src/scripts/object-page.ts`, `tests/unit/object-page-core.test.ts`.

Changed: `site/src/layouts/Page.astro` (the module script), `site/src/styles/site.css`,
`site/src/components/Neighbourhood.astro`, `site/src/lib/relations.ts`, `site/src/lib/versions.ts`,
`site/src/pages/objects/[...id]/index.astro` (the lookup's `name`), `tests/unit/version-timeline.test.ts`,
`tests/unit/relations.test.ts`; optional `scripts/ui-sweep.mjs`; at close `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`.

## 11. Definition of Done

- Section 5's tests written first and green; `npm run typecheck`, `npm test` and the site build pass.
- 7.2: no object page larger than on the parent build; object HTML at least 3.2 MB smaller on the same content; tar
  recorded; the Page module's growth recorded and at most 16 KB; script and stylesheet tag counts unchanged; no
  static `otp`, `mt-bar` or `ask-pop` markup.
- 7.3: every listed check passes at 1280 and 375 px in both themes; the four D86 anchor kinds land on a visible,
  opened row with a filter or chip set.
- `object-ask-agent.test.ts` and `live-search.test.ts` unchanged and green.
- D89 appended to `docs/DECISIONS.md`; PLAN M27 row marked shipped; HANDOFF entry moved with the measured numbers;
  this spec's section 12 renamed "Built, deviations" with the numbers of 7.2 and any deviation.

## 12. Built, deviations

Built on `build/object-page-reading` from `04b705c8fb` (the same commit and content as the reference build of section
4.8), one commit per phase. Measured on a full local site build of the branch against the base build of
`04b705c8fb` (`waldo.BCObservatory-build-base/site/dist`), and in headless Chromium (Playwright) on the branch build
served under the base path.

### What was built, per phase

- **Phase 1 (B1), `fbcd235f44`.** `object-page-core.ts` with `tocWanted`, `sectionCount`, `currentSection`
  (tested first); `object-page.ts` with `mountObjectPage`, the section list (wide: `nav.otp` at the end of a flex side
  column, sticky; narrow: `details.otp-d` after the actions row, closed, closing on a pick; placement re-measured on
  `resize`), the current entry marked on `scroll`, back to top (smooth unless reduced motion, focuses the `h1`), and a
  plain `reveal`; the import and one call in `Page.astro`'s existing module script; the B1 CSS.
- **Phase 2 (B2), `ffa19a11ac`.** `rowMatches`, `listItemName`, `clampColumns`, `orderOptions`, `orderLabel`,
  `sortOrder`, `visibleRows`, `revealPlan`, `parsePill` (tested first); toolbars for the eight member sections of 12+
  rows: filter with `n of m` and the empty line, the order select, compact one-line rows with "Full text", a click
  that opens a row (not on a link, a button or the end of a text selection), titles on cut cells after one frame;
  `reveal` with `revealPlan` on load, `hashchange` and `popstate`; the B2 CSS.
- **Phase 3 (B3), `2e1c7ab341`.** `pillTitle`, `versionChips`, `transitionHref` (tested first); `pill` in
  `versions.ts` without `title` and `version-timeline.test.ts` changed to match (`doesNotMatch(/title=/)`); pill
  titles set by the script on every `.prose .pill`; the "Changed in" chip line with the transition link; the timeline's
  changed majors as buttons that set the chip in every section that has it and scroll to the first; the B3 CSS.
- **Phase 4 (B6), `9b7ce1a7e2`.** `nodeCaption` (tested in `relations.test.ts`), `Lookup.name`, `Neighbour.name`, the
  route's lookup carrying `name`, the caption and the new closing paragraph in `Neighbourhood.astro`; `ringsByNode`
  (tested) and the legend lighting; the B6 CSS in `Neighbourhood.astro`.
- **Phase 5 (B8), `c1e8731319`.** `agentPrompt` (tested first); the "Ask your agent" button and in-flow panel with a
  Copy button after each `bcatlas_` call and "Copy as a prompt", Clipboard API with the `execCommand` fallback,
  "Copied"/"Copy failed" for 1.5 s, Esc and a click outside the actions row close it; the B8 CSS.

Tests: 501 (500 pass, 1 skipped, as on the base), 17 new; `npm run typecheck` clean. `object-ask-agent.test.ts` and
`live-search.test.ts` unchanged and green.

### Deviations, with the reason

1. **`parsePill` moved to phase 2.** B2's "Changed in, newest first" order needs the row changes; phase 3 only adds
   `pillTitle`, `versionChips`, `transitionHref`. Ordering only.
2. **`orderLabel(section, order)` in the core**, exported and tested, for the Values' "Ordinal" label instead of a
   special case in the DOM module.
3. **`versionChips` returns null when every chip would show every row**, a generalisation of "every row names the same
   one major" (the reason the spec gives: it would filter nothing). Same result on every case of section 5; two rows
   both "Δ BC25 Δ BC26" now get no chip line either.
4. **`reveal` also runs on `popstate`.** Measured in Chromium: when the finder (`palette.ts`) sets `location.href` to
   the hash already in the URL, the browser fires `popstate` and no `hashchange`, so a second hit on a row hidden by a
   filter typed after the first would not reveal it. A new hash fires both; `reveal` is idempotent.
5. **CSS beyond 4.7** (all inside the one `/* D89 */` block of `site.css`): `.otp a` gets `align-items: baseline` (the
   mono count sat high); `.otp-d > summary::after` "▸"/"▾" (a `display: flex` summary loses its disclosure marker);
   `.pills.mt-v` instead of `.mt-v` (the D89 block sits before `.pills` in `site.css`, whose `margin` would win at equal
   specificity); `.mt-v a { font-size: 13px }` for the transition link; `.actions > button.btn { font-family: inherit;
   cursor: pointer }` (a button does not inherit the UI font, and "Ask your agent" is the actions row's only button).
   CSS is +3,228 B instead of +2,987.
6. **`relations.ts` imports `../../../pipeline/lib/systems.js` and `../scripts/explorer-core.js`** with the extension:
   the root `tsc` (node16 resolution) follows `relations.test.ts`'s import of `nodeCaption` and rejects extensionless
   relative imports. Vite resolves both forms; the build is unchanged.
7. **The 45% Explanation column is a request the table can only partly meet.** On Table 18 at 1280 px the other
   columns are at their min-content (Name 210 px: nowrap pills; Notes 207 px: an unbreakable `const(Database::Customer)));`),
   so Explanation gets 208 px (172 before). Compact rows are one line either way; an opened row wraps in 208 px.
8. **`agentPrompt` with one call** reads `For <title> in Business Central, use bc-code-atlas: <call>.` (the spec said
   only "no then clause").
9. **No `objects` pass in `scripts/ui-sweep.mjs`** (optional in 6.6). A Playwright script outside the repository ran
   every 7.3 check instead: 106 checks, 1280x900 and 375x812, dark and light, on the branch build, all pass.
10. **Page bundle +12,960 B**, 1,304 B over the prototype's 11,656 and under the 16 KB ceiling.

Mount cost (risk 9): `mountObjectPage` timed in the page, unthrottled: Codeunit 80 25 to 29 ms (one run 115), Table 37
37 to 48, Table 18 15 to 24; no long task in a `PerformanceObserver`. Of it, the member wrappers are 1 to 5 ms; the
rest is the page's layout, forced when the section list measures the main column. Under the 50 ms line, so no
`requestIdleCallback`. At a 4x CPU throttle it is 89 to 239 ms, most of it the same layout.

### Measured numbers (7.2)

| Measure | Base (`04b705c8fb`) | Branch | Change |
|---|---|---|---|
| Pages tar (`scripts/site-size.ts`) | 729,118,720 B = 695.3 MB | 725,667,840 B = 692.1 MB | -3,450,880 B (-3.3 MB) |
| `objects` section | 455.2 MB | 451.9 MB | -3.3 MB |
| Files | 59,135 | 59,135 | 0 |
| Object HTML, 25,666 `objects/**/index.html` | | | -3,501,622 B; 12,138 smaller, none larger |
| `objects/table/18/index.html` | 154,505 B | 150,391 B | -4,114 (pills -3,692, captions -243, paragraph -179) |
| `objects/codeunit/80/index.html` | 254,080 B | 251,384 B | -2,696 |
| `objects/enum/89/index.html` | 11,643 B | 11,458 B | -185 |
| `objects/table/37/index.html` | 289,565 B | 283,679 B | -5,886 |
| Page module (`Page.astro_astro_type_script_index_0_lang.*.js`) | 3,313 B (1,656 gzip) | 16,273 B (6,428 gzip) | +12,960 B (+4,772 gzip) |
| Base stylesheet (`site.css`) | 24,312 B | 27,001 B | +2,689 B |
| Object route stylesheet (`Neighbourhood.astro`) | 2,621 B | 3,160 B | +539 B |

The object HTML delta equals the sum of section 4.8 to the byte (pill titles -653,511, captions -699,395, paragraph
-2,148,716), and the tar equals its prediction (725,667,840 B). Census: `class="pill" title=` on 2,526 pages before,
0 after; the new paragraph on 12,004 pages, the pages with `<section class="nb"`; Table 18 keeps its script and
stylesheet tags (the same counts as the base); no static `otp`, `mt-bar` or `ask-pop`; `_astro/` holds 61 files on both
builds, the same names apart from three content hashes. Table 18 without JavaScript: its HTML equals the base's after
the three build-time changes, apart from the three asset hashes (same length).

7.3 on the branch build, Table 18 unless named: 19 entries with `Fields 165`, `Keys 19`, `Events published 63`,
`Procedures 71`, `Relations 104`, `Referenced by 170`, `Neighbourhood 311`, `Evidence 1`; the list's top 16 px at
`scrollY` 20,000; Evidence marked at the bottom; "↑ Top" scrolls up and focuses the title; at 375 px a closed "On
this page · 19 sections" under the actions that closes on a pick. Page 23,277 px tall (42,090 live); Fields 7,833 px (23,138); Codeunit 80 Events
published 14,973 px (46,041), subscriber lists hidden until a row opens; Table 37 Fields 12,915 px, Events published
11,837 px; chips `BC24 3`, `BC25 23`, `BC26 84`, `BC27 10`, `BC28 45`, `BC29 4`; BC26 shows `84 of 165` and links
`code/versions/25__26/`; the timeline's BC26 sets Fields, Events published and Procedures and scrolls to Fields, BC30
stays text; `#field-20`, `#proc-AssistEdit`, `#value-3` on Enum 89 and a BC25 event under chip BC26 all land on a
visible, opened, highlighted row; captions "Detailed Cust. Ledg. Entry", "Serv. Integration Mgt."; the legend lights
calls by pointer and relates by focus; Copy and "Copy as a prompt" put the section 2 strings on the clipboard, four
Copy buttons on Table 11300-be with the BE note in the prompt.

### For the integrator

- No data regeneration, no nightly effect: nothing under `content/` or `data/` changed. The HTML reductions (and the
  new pages' behaviour) arrive with the next Pages build: about -3.3 MB tar on the same content.
- Merge points with the parallel sessions: `site/src/layouts/Page.astro` (two lines and a comment inside the existing
  module script), `site/src/styles/site.css` (one block after `.prov dd`, before `/* markdown body */`).
- The shared build-lock script (`site-build.sh`) exits 1 after a successful build: `status=${pipestatus[1]}` fails in
  zsh ("read-only variable: status"). The build itself completed (28,899 pages).

### `docs/DECISIONS.md`, to append

- **D89 Object pages read like a reference, built in the browser from the markup they already ship.** Items B1, B2,
  B3 (the rest of it), B6 and B8 of the 2026-10-12 UX review, under D88's rule that no object page gains a byte. One
  module (`site/src/scripts/object-page.ts`, pure helpers in `object-page-core.ts`, tested), mounted from the
  existing module script of `Page.astro` on pages with a version timeline, CSS in `site.css` and
  `Neighbourhood.astro`: (1) an "On this page" list of the main column's sections with what each lists, sticky at the
  end of a flex side column (a grid item cannot stick past its grid area), a closed details under the actions on a
  narrow screen, and a back-to-top button; (2) member sections of 12 rows or more get a filter, an order where it
  means something and a compact one-line mode, on by default; (3) "Changed in" chips per member section, single-select
  like the version pill (D72), linked to `code/versions/<from>__<to>/` and set from the timeline's changed majors,
  while the member pill loses its `title` from the HTML and gets it back from the script; (4) the neighbourhood
  captions its nodes by name, explains its marks in a CSS line, lights a kind from its legend entry and shows the
  explorer link as the section's action, with a shorter closing paragraph; (5) an "Ask your agent" button opens the
  closing paragraph's calls with copy buttons and a prompt; the paragraph stays (D75). A hash naming a member row
  (D86) clears what hides it, opens it and scrolls to it, on load, on `hashchange` and on `popstate` (a finder hit on
  the hash already in the URL fires no `hashchange`). Measured on the 2026-10-12 content: object HTML 3.34 MB smaller
  (3,501,622 B, as the spec computed), no page larger, Page module +12.7 KB once (3,313 to 16,273 B), CSS +3.2 KB, tar
  695.3 to 692.1 MB; Table 18 "Customer" 154.5 to 150.4 KB and its Fields 23,138 to 7,833 px tall, Codeunit 80's
  Events published 46,041 to 14,973 px. Rejected: tabs over the members (one table and two lists in different places;
  they hide members from find and anchors); a static section list (15 MB); a "Changed in" column; dropping "BC" from
  the pill text; hover-expanded captions; seven dash patterns; a filled primary explorer button; a positioned popover;
  a lazy chunk; a pre-paint class (1.1 MB); filter state in the URL (later). Spec: `docs/specs/object-page-reading.md`.

### `docs/PLAN.md` section 5, the M27 row replaced

| **M27 object page reading** | On this page with counts and back to top, member filters, orders and a compact mode, Changed in chips tied to the timeline, a clearer neighbourhood (name captions, key, lit kinds, explorer action), Ask your agent in the actions row; all built in the browser, object HTML 3.34 MB smaller, tar 695.3 to 692.1 MB on the same content (`docs/specs/object-page-reading.md`, D89, shipped 2026-10-12) | 3 to 3.5 days in five phases | none: deterministic, no LLM |

### `docs/HANDOFF.md`

Remove the "Object pages read like a reference" entry from "Open specs, not yet implemented", and add under "Where
things stand":

**Shipped 2026-10-12, live on the next Pages build:**
- **Object pages read like a reference, D89** (`docs/specs/object-page-reading.md`, M27). Items B1, B2, B3, B6, B8 of
  the UX review, all built in the browser by `site/src/scripts/object-page.ts` (pure helpers in `object-page-core.ts`,
  tested) from the existing module script of `Page.astro`: an "On this page" list with counts, sticky in the side column
  (a closed details on a phone) and a back-to-top button; filter, order and a compact one-line mode for member sections
  of 12+ rows; "Changed in" chips tied to the timeline's changed majors and the version transition pages; neighbourhood
  captions by name, a key line, legend-lit kinds and the explorer as the section's action; an "Ask your agent" button
  with copy buttons and a prompt. A search hit's hash (D86) always lands on a visible, opened row. Three build-time
  reductions (pill titles, captions, the closing paragraph): local build on the 2026-10-12 content **695.3 to 692.1 MB
  tar**, object HTML -3.34 MB with no page larger, Page module 3.3 to 16.3 KB once. Table 18's Fields 23,138 to 7,833 px.
  Later (spec section 8): the list on other page types, a per-procedure atlas call, filter state in the URL,
  `hidden="until-found"`, the light-theme contrast of pressed pill buttons.

### `AGENTS.md`, `CONTENT-NOTICE.md`

No change: agents read the markdown twins and the MCP, which this change does not touch.
