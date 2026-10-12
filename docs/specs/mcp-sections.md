# Long MCP answers come back compact, and an agent reads one section at a time

Status: proposed, 2026-10-12. Decision: D93 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M31
(reserved). Owner: waldo.
Scope: the `get_object`, `cat` and `localization` tools of the MCP package (`packages/mcp`), their tool descriptions
and the `search` and `whats_new` descriptions, the plugin skills `bc-lookup`, `bc-grounding` and `bc-localization`,
the MCP page's tool texts (`site/src/lib/mcp.ts`), the package README, the MCP tests and the publish workflow's test
line. Review items G1 and G2 of `docs/research/2026-10-12-ux-review.md`. Every claim below was verified against the
tree at `bb3a37e016` on 2026-10-12; every number was measured on the committed `content/` and `data/` of that commit
(Node 22.23.1), with the command or file next to it. Not in scope: the pipeline and the page markdown (no page is
re-rendered), the site's object pages, new tools, a page cache in the server, structured (JSON) tool output, moving
the markdown twins (D76 phase 3), the `whats_new`, `search` and `blog_footprint` answer sizes.

## 1. Goal

An agent that asks for a large Business Central object gets an answer it can hold: the facts, a map of the page and
the first rows of every section, then exactly the section it needs, in slices that never cross the client's limit.
Every agent pays fewer tokens for tool descriptions that teach call forms rather than the scoring formula.

### What is broken, with evidence

**Where the server reads its data.** Nothing is bundled and nothing comes from GitHub raw:

- Index: `dataFile` (`packages/mcp/src/server.ts:52-55`) reads `<BC_OBSERVATORY_LOCAL>/data/<rel>` in local mode,
  else `${SITE}<rel>` with `SITE` defaulting to `https://waldo1001.github.io/waldo.BCObservatory/`
  (`server.ts:35`, `BC_OBSERVATORY_SITE` overrides). Shards are cached by sha256 under
  `~/.cache/bc-observatory/<sha12 of SITE>/` (`server.ts:45`, `72-78`) and reloaded once a day (`server.ts:81`).
- Pages: `pageMarkdown` (`server.ts:57-65`) reads `<LOCAL>/content/<path>.md`, else fetches `${SITE}<path>.md`, the
  site's markdown twin, which is the committed file byte for byte (`site/src/pages/objects/[...id].md.ts:10-11`).
  Pages are not cached; every call fetches the twin again.
- The npm package ships `dist` and `README.md` only (`packages/mcp/package.json` `files`); the model comes from
  Hugging Face, pinned by revision and SHA-256 (`server.ts:115-147`).
- `cat` strips an anchor and returns the whole page (`server.ts:243-246`); `get_object` returns
  `${note}${await pageMarkdown(...)}${also}` (`server.ts:279`); `localization` returns the whole country page
  (`server.ts:297-299`). Nothing slices.

So the slicing of this spec happens in the server over the twins it already reads; the Pages tar (D76: 695.3 MB after
D88, warning at 800 MB) gains no file and no byte on any object page.

**The client's limit.** Claude Code's MCP documentation (https://code.claude.com/docs/en/mcp, sections "MCP output
limits and warnings" and "Scale with MCP tool search", read 2026-10-12) says: it warns when a tool result exceeds
10,000 tokens, caps results at 25,000 tokens by default (`MAX_MCP_OUTPUT_TOKENS`), and saves any successful text result
over 50,000 characters to a file whatever its token count, so the model reads it back from disk. That is what the
review saw. A server may raise the 50,000 for one tool with `_meta["anthropic/maxResultSizeChars"]` (up to 500,000).

**Page sizes** (characters, `String.length` over every `*.md`; reproduce with:
`node -e 'const fs=require("fs"),p=require("path");const r=[];(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const q=p.join(d,e.name);e.isDirectory()?w(q):e.name.endsWith(".md")&&r.push([fs.readFileSync(q,"utf8").length,q])}})("content/objects");r.sort((a,b)=>b[0]-a[0]);for(const k of [1e4,25e3,3e4,4e4,5e4,1e5])console.log(k,r.filter(x=>x[0]>k).length);console.log(r.slice(0,10))'`,
and `"content"` for every section):

| `content/objects/**` (25,646 pages) | Value |
|---|---|
| median / p90 / p99 | 3,804 / 7,716 / 22,829 |
| over 10,000 / 25,000 / 30,000 / 40,000 / 50,000 / 100,000 / 150,000 | 1,515 / 221 / 140 / 56 / 31 / 10 / 7 |
| frontmatter, mean / largest | 1,760 / 11,198 (`table/81`, 9,434 of it `links`, 59 Learn URLs) |

| Largest ten objects | Characters | Biggest section (body, without its heading line) | Compact view (section 4) |
|---|---|---|---|
| Table 81 "Gen. Journal Line" | 188,493 | Events published, 107,589 (273 rows) | 14,133 |
| Table 37 "Sales Line" | 186,558 | Events published, 89,317 (418 rows) | 14,270 |
| Table 36 "Sales Header" | 182,895 | Events published, 88,918 (394 rows) | 14,800 |
| Codeunit 80 "Sales-Post" | 177,746 | Events published, 138,634 (530 rows) | 9,504 |
| Table 39 "Purchase Line" | 162,229 | Events published, 70,153 (420 rows) | 14,655 |
| Codeunit 6620 "Copy Document Mgt." | 159,210 | Events published, 135,500 (479 rows) | 7,501 |
| Codeunit 12 "Gen. Jnl.-Post Line" | 153,496 | Events published, 115,077 (498 rows) | 10,162 |
| Codeunit 90 "Purch.-Post" | 147,354 | Events published, 114,597 (498 rows) | 9,991 |
| Codeunit 22 "Item Jnl.-Post Line" | 134,239 | Events published, 81,264 (379 rows) | 9,275 |
| Table 38 "Purchase Header" | 133,306 | Events published, 47,291 (289 rows) | 14,445 |

Table 18 "Customer" is 91,142 characters (compact 13,718). The compact sizes come from a scratch implementation of
section 4's rules run over the committed content (not committed; `tests/unit/mcp-sections.test.ts` re-measures them).

The other tools have the same problem. Pages over 50,000 characters, across `content/`: **56** (objects 31,
localizations 10, topics 9, changes 3, apps 2, releases 1); over 30,000: **233** (objects 140, topics 30, videos 27,
localizations 18, changes 8, apps 7, digests 1, releases 1, sources 1). `localization("CZ")` returns 173,865
characters (`localizations/cz`, 1,769 own objects) and `cat("topics/business-central/business-functionality")`
390,338 (its frontmatter alone is 68,013, of which `links.objects` 36,792 and `bc_forms` 17,733).

**The review's numbers, checked** (local server, `BC_OBSERVATORY_LOCAL` on a checkout at this commit, MCP SDK client
1.32.1 over stdio, read-only):

| Review claim | Measured | Verdict |
|---|---|---|
| `get_object("codeunit", "80")` 177,746 characters, 925 lines, longest line 788 | 177,746; 925 newline-terminated lines (`wc -l`); 788 | right |
| `search("sales-post", limit 5)` about 1.5 KB | 1,562 characters (hybrid without a model), 1,546 keyword | right |
| G1's section list (properties, fields, keys, events, subscriptions, procedures, triggers, relations, calls, called_by, changes, versions, countries, deprecations) | object pages carry **25** distinct `## ` headings (table in 4.2); the list misses 11 (Values, Fields on this page, Actions, Trigger event subscribers, Referenced by, Pages and codeunits on this table, Extended by, Implements, Implemented by, Documented on Microsoft Learn, Ask your agent); no object page has a `###` line | incomplete |
| G2: the `search` description is about 1,900 characters | **1,495** (the whole `tools/list` entry with title and schema is 2,100) | wrong |
| G2: every session that has the server pays for the descriptions | Claude Code defers MCP tools by default and loads only tool names and server instructions at session start (same doc); in this spec session the bc-observatory tools were listed as deferred. Clients that load every tool upfront (and Claude Code with `ENABLE_TOOL_SEARCH=false`, or below the `auto` threshold) pay the whole `tools/list`: 6,056 characters for nine tools, 3,095 of them descriptions; the 706-character server instructions load in every Claude Code session | partly wrong |

Descriptions today (characters, from `tools/list`): search 1,495, get_object 521, whats_new 363, blog_footprint 144,
diff_object 132, feedback 123, cat 112, localization 104, ls 101. Claude Code cuts each description and the server
instructions at 2,048 characters and advises putting the critical details first (same doc); none is cut today.

Three stale statements found on the way: `docs/specs/site-size.md:114-115` says the MCP `cat` "reads the npm
package's own copy today" (it fetches the site twin, `server.ts:64`); `docs/HANDOFF.md:42-43` says
`bc-observatory@0.3.0` "is ready to publish" (npm lists 0.3.0 published 2026-10-09T16:12:24Z, `npm view
bc-observatory time`); `site/src/lib/mcp.ts:73` says the server caches "`index/` and the page markdown" by hash
(only the index shards are).

After this change:

- `get_object`, `cat` and `localization` return a page verbatim when it fits 30,000 characters, as today. A longer
  page comes back as a compact view: Codeunit 80 "Sales-Post" in 9,504 characters, Table 36 "Sales Header" in 14,800
  (the largest of the 140 objects), `localizations/cz` in 5,427.
- `section`, `offset` and `limit` read one section of any page in row slices; no answer exceeds 30,000 characters
  (largest measured 29,845) and the longest section on the site takes 11 calls.
- `cat` of a symbol path from `search` (`objects/codeunit/80#event-OnAfterPostSalesDoc`) returns that member's row
  (1,382 characters) instead of the 177,746-character page.
- Tool descriptions lose the scoring formula: 3,095 to 2,465 characters with G2 alone, 3,066 after G1 adds the
  section sentences.

## 2. Reader- and agent-facing behaviour, after

### 2.1 Tools

| Tool | Parameters after | What changes |
|---|---|---|
| `get_object` | `type`, `idOrName`, `country?`, `section?`, `offset?`, `limit?` | page view (verbatim or compact), or a section, through `pageView` (4.1) |
| `cat` | `path`, `section?`, `offset?`, `limit?` | same; a path with `#field-`, `#event-`, `#proc-` or `#value-` returns that member |
| `localization` | `country`, `section?`, `offset?`, `limit?` | same over `localizations/<cc>` |
| `search`, `whats_new` | unchanged | shorter descriptions (phase A) |

The other five tools are unchanged. New environment variable: `BC_OBSERVATORY_MAX_CHARS` (default 30000; `0` turns
the budget off and every page and section comes back whole, the 0.3.0 behaviour; values from 1 to 4,999 become
5,000).

### 2.2 Example: the compact view (no `section`)

Request: `{"name": "get_object", "arguments": {"type": "codeunit", "idOrName": "80"}}`. Response, 9,504 characters,
abridged here only where marked `[...]`:

```
---
id: object/codeunit/80
type: object
title: Codeunit 80 "Sales-Post"
summary: Codeunit 80 "Sales-Post" in Base Application (Microsoft.Sales.Posting). 81 public procedures, 530 events, 2 event subscribers. Present since at least BC23, still in BC30, changed in BC24-29.
tier: official
[... every other key verbatim, `generated` dropped; lists under 600 characters kept whole ...]
relations:
  [...]
  calls: 52
  called_by: 27
  implements: 0
---

# Codeunit 80 "Sales-Post"

> Codeunit 80 "Sales-Post" in Base Application (Microsoft.Sales.Posting). 81 public procedures, 530 events, 2 event subscribers. Present since at least BC23, still in BC30, changed in BC24-29.

Base Application · Microsoft.Sales.Posting · BC23-30 · [source at ea08af5e](https://github.com/microsoft/BCApps/blob/[...]/SalesPost.Codeunit.al) · facts from BC29

Compact view: this page is 177,746 characters and one answer holds 30,000, so each section shows its first 5 rows. Sections: properties (2), events (530), subscriptions (2), procedures (81), triggers, relations (1), calls (50), called_by (27), changes (3), versions (2), countries, deprecations (3), ask, frontmatter. Read one with cat("objects/codeunit/80", section: "<key>"); offset and limit page through a long one.

## Properties
| Property | Value |
|---|---|
| TableNo | Sales Header |
| Permissions | TableData "Sales Header" = rimd, TableData "Sales Line" = rimd, [... cut at 200 characters]…

## Events published
- `OnBeforeUpdateSalesOrderLineIfExist(DocumentNo: Code[20]; var IsHandled: Boolean)` (integration): Raised before updating a sales order line from a posted sales return order.
- `OnBeforePostLines(var SalesLine: Record "Sales Line"; SalesHeader: Record "Sales Header"; [... cut at 200 characters]…
[... three more rows ...]
→ 525 more of 530: cat("objects/codeunit/80", section: "events", offset: 5)

[... Event subscriptions, Procedures, Triggers, Relations, Calls, Called by, Recent changes, Across versions the same way ...]

## Countries that replace it
[AU](../../localizations/au.md), [CA](../../localizations/ca.md), [...], [US](../../localizations/us.md)

## Deprecations
- procedure OnAfterGetAmountsForDeferral: Pending 27.0 (#if not CLEAN27), "This event is never raised."
- procedure OnGetPostingPreviewDocumentNos: Pending 27.0 (#if not CLEAN27), "This event is no longer used."
- procedure OnSetPostingPreviewDocumentNo: Pending 27.0 (#if not CLEAN27), "This event is no longer used."
Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent
Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. [... the whole paragraph, 443 characters, under the 800-character prose limit]
```

The answer starts with `---\nid: object/codeunit/80\n` like today's, so `tests/unit/mcp-golden.test.ts:50-57`
keeps passing unchanged. In a Table 18 "Customer" answer the cut lists look like this:

```
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-online-maps
    [... four more ...]
    # … 25 more; section: "frontmatter"
```

### 2.3 Example: `section` with `limit`

Request: `{"name": "get_object", "arguments": {"type": "codeunit", "idOrName": "80", "section": "events", "limit": 2}}`.
Response (788 characters; the second row is cut here for the spec only):

```
Codeunit 80 "Sales-Post", section "events": https://waldo1001.github.io/waldo.BCObservatory/objects/codeunit/80/

## Events published

- `OnBeforeUpdateSalesOrderLineIfExist(DocumentNo: Code[20]; var IsHandled: Boolean)` (integration): Raised before updating a sales order line from a posted sales return order.
- `OnBeforePostLines(var SalesLine: Record "Sales Line"; [...])` (integration): Raised before posting sales lines.

Rows 1-2 of 530. Next: cat("objects/codeunit/80", section: "events", offset: 2)
```

Without `limit`, the same request returns rows 1-91 in 29,473 characters and ends with `Rows 1-91 of 530. Next:
cat("objects/codeunit/80", section: "events", offset: 91)`; the whole section takes five calls (29,473, 29,623,
29,600, 29,756 and 21,221 characters, the last ending `Rows 423-530 of 530.`). A section that fits the budget comes back verbatim, exactly as on the page:
`section: "calls"` on Codeunit 80 is 8,622 characters and ends with the page's own `- and 2 more:
data/code/graph/29/calls.json`.

### 2.4 Example: `offset`

Request: `{"name": "cat", "arguments": {"path": "objects/codeunit/80", "section": "events", "offset": 528}}`. Response:

```
Codeunit 80 "Sales-Post", section "events": https://waldo1001.github.io/waldo.BCObservatory/objects/codeunit/80/

## Events published

- `OnBeforeArchiveRelatedJob(SalesHeader: Record "Sales Header"; var IsHandled: Boolean)` (integration)
- `OnSyncSurPlusItemTrackingOnBeforeModifyQtyToHandleInvoice(var SalesLine: Record "Sales Line"; var SalesHeader: Record "Sales Header"; var IsHandled: Boolean; var ReservationEntry: Record "Reservation Entry")` (integration)

Rows 529-530 of 530.
```

A table section repeats its header in every slice: `cat("objects/table/36", section: "fields", offset: 172)`
starts with `## Fields`, then `| No. | Name | Type | Explanation | Notes |` and `|---|---|---|---|---|`, then rows 173
to 183 and `Rows 173-183 of 183.` (1,849 characters; the first slice held rows 1-172 in 29,545).

### 2.5 Example: `localization` with `section`, `limit`

Request: `{"name": "localization", "arguments": {"country": "CZ", "section": "objects_of_its_own", "limit": 3}}`.
Response (493 characters):

```
Czech (CZ), section "objects_of_its_own": https://waldo1001.github.io/waldo.BCObservatory/localizations/cz/

## Objects of its own

1769 objects only this country has.

- [codeunit/11700 "Acc. Schedule Management CZL"](../objects/codeunit/11700-cz.md)
- [codeunit/11701 "Format Document Mgt. CZL"](../objects/codeunit/11701-cz.md)
- [codeunit/11702 "User Handler CZA"](../objects/codeunit/11702-cz.md)

Rows 1-3 of 1769. Next: cat("localizations/cz", section: "objects_of_its_own", offset: 3)
```

### 2.6 Example: a symbol path

Request: `{"name": "cat", "arguments": {"path": "objects/codeunit/80#event-OnAfterPostSalesDoc"}}` (the path `search`
prints for that event). Response, 1,382 characters (signature and subscriber list cut here for the spec only):

```
Codeunit 80 "Sales-Post", event OnAfterPostSalesDoc: https://waldo1001.github.io/waldo.BCObservatory/objects/codeunit/80/#event-OnAfterPostSalesDoc

## Events published
- `OnAfterPostSalesDoc(var SalesHeader: Record "Sales Header"; [...]; PreviewMode: Boolean)` (integration): Raised after posting a sales document.
  - subscribers: [Codeunit 1508 "Notification Lifecycle Handler"](../codeunit/1508.md) OnAfterSalesPost, [...]
```

`cat("objects/table/36#field-20")` (297 characters):

```
Table 36 "Sales Header", field 20: https://waldo1001.github.io/waldo.BCObservatory/objects/table/36/#field-20

## Fields
| No. | Name | Type | Explanation | Notes |
|---|---|---|---|---|
| 20 | Posting Date | Date | Specifies the date when the posting of the sales document will be recorded. |  |
```

`#proc-<Name>` returns every overload; `#value-<ordinal>` the enum value's row. Of the 123,210 symbols in
`data/index/symbols-*.json`, 123,126 resolve to a row on their object's page; 84 do not (for example `table/242`
fields 2 to 6: the page lists field 1 only). Those answer `(No row for #field-2 on this page.)`, a blank line and the
page view.

### 2.7 Errors and the frontmatter

- `section: "fields"` on Codeunit 80: `No section "fields" on objects/codeunit/80. Sections: properties, events,
  subscriptions, procedures, triggers, relations, calls, called_by, changes, versions, countries, deprecations, ask,
  frontmatter.`
- `offset` or `limit` without `section`: `offset and limit read one section: cat("objects/codeunit/80", section:
  "<key>", offset: 5). Sections: ...` (same list).
- `section: "frontmatter"` returns the whole YAML between `---` lines when it fits, else line slices with the same
  `Rows a-b of n. Next: ...` line (the frontmatter of `topics/business-central/business-functionality`, 68,013
  characters, takes three calls).
- A section key also matches the heading text and its snake_case form, case-insensitively: `"Events published"`,
  `"events_published"` and `"EVENTS"` all read `events`.
- These are plain text answers, like today's `No table "..."` (`server.ts:283`), not MCP errors.

### 2.8 Tool descriptions (exact text)

Phase A (G2). `search`, 896 characters:

> Search every page, and the fields, published events, global procedures and enum values of AL objects, ranked like
> the site's search. Takes names ('Sales Header'), references ('t36', 'cu 80', 'table 11300 BE'), bare ids ('36') and
> symbol prefixes ('event: OnAfterPost', 'field: Posting Date', 'proc: CopyToTempLines'); a symbol hit's path ends in
> its anchor (#event-<Name>, #field-<id>, #proc-<Name>, #value-<ordinal>). Hybrid by default: exact matches stay on
> top and the rest is fused with a meaning ranking; each hit says [keyword], [meaning] or [both]; mode 'keyword' or
> 'semantic' for one list. Filters: type (topic, app, feature, object, localization, video, post, change, source,
> digest, release), tier (official, community), system (finance, sales, ... or an alias such as 'g/l'), country
> ('BE'), app ('Subscription Billing'), object_type ('table'), kind (page, field, event, proc, value).

`whats_new`, 332 characters:

> Videos, posts, roadmap features, AL extension releases (type 'release') and merged pull requests of BCApps, AL-Go
> and BCQuality (type 'change') dated on or after a date (YYYY-MM-DD) up to today, newest first. A roadmap feature's
> date is its GA month: features after today are counted at the end and listed with include_future: true.

What leaves the descriptions: the per-word weights (title or caption 3, tags 2, summary 1), "+10", the layer and
importance order and the hub rule. They stay in `packages/mcp/README.md:19-28`, where they already are; no skill gets
them, because no call depends on them. What stays, because an agent without the plugin needs it to form a call: the
reference forms, the symbol prefixes and anchors, the hit tags, the modes and every filter with its values. The
server instructions (`server.ts:332`, 706 characters) stay as they are: they are the one text Claude Code loads in
every session and its tool search reads them to find the server.

Phase B (G1), with `B` the budget formatted `30,000` (`BUDGET.toLocaleString("en-US")`, or the default's when the
budget is off). `search` gains `; cat(path) reads that member alone` after the anchor parenthesis (931 characters).

`get_object`, 775 characters:

> An AL object of W1, a Microsoft first-party app or a country layer by type and id, reference, name or caption:
> ('table', '18'), ('table', 't36'), ('table', '36-be'), ('codeunit', 'Sales-Post'), ('page', 'Customers'), or with
> country 'BE'. Returns its page: fields, keys, events, procedures, calls, obsolete state, versions, countries, Learn
> pages; a W1 object wins over its country twins unless a country is given, and two candidates are listed with their
> paths. A page over ${B} characters comes back compact (frontmatter, the first 5 rows of each section, the section
> keys): pass section ('fields', 'events', 'procedures', 'calls', ...) with offset and limit to read one. To check
> that a field, event or procedure exists, search('event: <Name>') answers without the page.

`cat`, 323 characters:

> A page's markdown by its path from search or ls: frontmatter with evidence and links, then the body. A page over
> ${B} characters comes back compact with its section keys; section (or 'frontmatter'), offset and limit read one
> part. A symbol path ('objects/codeunit/80#event-OnAfterPostSalesDoc') returns that member's row.

`localization`, 205 characters:

> What a country layer (BE, NL, DE, ...) adds to or changes in W1, with its Learn local functionality hub. Over ${B}
> characters it comes back compact; section, offset and limit read one section, as in cat.

Totals (all nine descriptions): 3,095 today, 2,465 after phase A, 3,066 after phase B.

### 2.9 Plugin skills

Phase A, `plugin/skills/bc-lookup/SKILL.md:10`: the `type` list becomes `(object, topic, app, feature, localization,
video, post, change, source, digest, release)`; nothing else (the skill already carries the forms and prefixes the
description keeps).

Phase B:

- `bc-lookup/SKILL.md:11` (step 2) becomes: "`get_object(type, idOrName, country?)` for an AL object by id, reference
  (`t36`, `36-be`), name or caption: fields, keys, events published, public procedures, calls, obsolete state,
  versions it exists in, countries that replace it, Learn pages naming it. When it lists candidates, pick one by its
  path. A page over 30,000 characters (Table 36, Codeunit 80 and about 140 more) comes back compact: the frontmatter,
  the first 5 rows of each section and the section keys; read the part you need with `section` (`fields`, `events`,
  `procedures`, `calls`, ...) and page with `offset` and `limit` as the answer's last line says. To check that a
  field, event or procedure exists, `search("event: OnAfterPostSalesDoc")` is cheaper than the page, and `cat` of the
  hit's path (`objects/codeunit/80#event-OnAfterPostSalesDoc`) returns just that member."
- `bc-lookup/SKILL.md:12` (step 3) appends: "`cat` takes the same `section`, `offset` and `limit`."
- `bc-grounding/SKILL.md:15` (step 1) becomes: "Observatory first for identity and context: `get_object(type,
  idOrName)` gives id, fields, events, public procedures, obsolete state, versions, countries and Learn pages; for a
  large object it is a compact view, and `section: "calls"` or `section: "called_by"` reads the object's calls and
  callers. For a body or one procedure's edges, the page names the atlas call (`section: "ask"`)."
- `bc-localization/SKILL.md:8` (step 1) appends: "18 of the 22 country pages are over 30,000 characters and come
  back compact; `localization(country, section: "objects_of_its_own")` with `offset` and `limit` lists a country's
  own objects, `section: "by_area"` its areas."
- `bc-whats-new` is unchanged.

### 2.10 The MCP page and the README

`site/src/lib/mcp.ts` (D84), `TOOLS` `what` texts (examples unchanged, so `tests/unit/mcp.test.ts:17-21` holds):

- `cat` (line 19): "A page's markdown: frontmatter with evidence and links, then the body. A long page comes back compact with its
  section keys; section, offset and limit read one part, and a symbol's path returns just that member."
- `get_object` (line 20): append "A large object comes back compact; read one section with section, offset and
  limit."
- `localization` (line 22): append "Large countries come back compact, as with cat."
- "How it answers" (line 73), first sentence becomes: "The server fetches `index/` from the published site over HTTPS
  and caches it by hash in `~/.cache/bc-observatory/` (refreshed daily), and reads a page's markdown twin when you
  ask for it; a page over 30,000 characters comes back as a compact view with its section keys."

These are two single pages (`/mcp/` and `/mcp.md`), a few hundred bytes; no object page changes (D88).

`packages/mcp/README.md`, after the `get_object` paragraph (lines 38-39), a new paragraph:

> `cat`, `get_object` and `localization` return a page as it is when it fits 30,000 characters. A longer page
> (Codeunit 80 "Sales-Post" is 177,746) comes back as a compact view: the frontmatter with long lists cut, the title
> block, the section keys with their row counts and the first 5 rows of each section. `section` reads one section
> (`fields`, `events`, `procedures`, `calls`, ..., or `frontmatter`), `offset` and `limit` page through it by rows, and
> no answer exceeds 30,000 characters. A symbol's path from `search` (`objects/codeunit/80#event-OnAfterPostSalesDoc`)
> returns just that member. `BC_OBSERVATORY_MAX_CHARS` changes the limit (`0` returns every page whole, as before
> 0.4.0).

## 3. Decisions

Draft D93 for `docs/DECISIONS.md`:

> **D93 Long pages come back compact, and the MCP server slices them, not the site.** `get_object`, `cat` and
> `localization` return a page verbatim when it fits 30,000 characters (`BC_OBSERVATORY_MAX_CHARS`, 0 = no limit),
> else a compact view: the frontmatter without `generated` and with each list cut to its first 600 characters, the
> title block, one line with every section key and its row count, the first 5 rows of each section (200 characters a
> row) and one `→ n more of m: cat(path, section, offset)` line per cut section. `section`, `offset` and `limit` read
> one section by rows (a table row, or a list item with its indented lines), never more than the budget per answer;
> `frontmatter` is a section; a symbol path (`objects/codeunit/80#event-OnAfterPostSalesDoc`) returns that member's
> row. Keys are fixed for the 25 object-page headings (`events`, `subscriptions`, `calls`, `called_by`, `changes`,
> `versions`, `countries`, `learn`, ...) and the snake_case heading elsewhere. Why: Claude Code saves a result over
> 50,000 characters to a file and warns above 10,000 tokens; 56 pages were over 50,000 and 233 over 30,000 on
> 2026-10-12, Codeunit 80 "Sales-Post" 177,746 (compact 9,504), Table 36 "Sales Header" 182,895 (compact 14,800, the
> largest object). The server already reads the markdown twins (`server.ts:57-65`), so the Pages tar gains nothing.
> Tool descriptions keep call forms, filters and values and lose the scoring formula (3,095 to 2,465 characters, 3,066
> with the section sentences). `bc-observatory@0.4.0`: the 233 answers change shape, a minor bump under 0.x.
> Rejected: a compact view for every page (changes 28,617 answers that fit today), 20 preview rows (Table 39 at
> 30,927, three pages over the budget), `_meta["anthropic/maxResultSizeChars"]` (raises Claude Code's file
> threshold to 500,000, not the tokens), section files on the site (bytes and files on the tar, D76, D88), a
> `get_section` tool (a tenth tool for what three parameters do), JSON output (agents read the markdown; the page is
> the contract). Spec: `docs/specs/mcp-sections.md`.

Rejected, with reasons:

| Option | Why not |
|---|---|
| Compact view for every page, whatever its size (the review's proposal) | 28,617 of 28,850 answers fit today and would change shape; an agent then needs two calls for a 4 KB page. The budget rule changes only the 233 that do not fit. |
| A budget of 45,000 (just under the 50,000-character file threshold) | A 45,000-character answer is about 11,000 to 15,000 tokens (an estimate at three to four characters a token; no tokenizer was run), over Claude Code's 10,000-token warning; 30,000 stays under it at three characters a token or more. Owners of large-context clients set `BC_OBSERVATORY_MAX_CHARS`. |
| 10 or 20 preview rows | Measured over the 233 pages: 5 rows give a largest compact view of 15,741 (median 9,058, Table 36 14,800); 10 rows 21,114 (median 11,431); 20 rows 30,927 (Table 39), three pages over the budget. Five rows show what a section holds; the section call shows the rest. |
| Cut every frontmatter list at N items | `present_in` (8 items), `countries` (up to 19) and `links.localizations` are facts agents ask for; cutting by count hid BC28-30 in a five-item draft. Cutting by size (600 characters, at least 3 items) keeps every list of short ids whole and cuts URL and object lists only. |
| `_meta["anthropic/maxResultSizeChars"]` up to 500,000 | It stops Claude Code from saving the result to a file but puts about 45,000 tokens of Codeunit 80 into the context (estimate); other clients ignore it. |
| Section files or a sliced index on the site | Adds files and bytes to the Pages tar (D76 warning at 800 MB, D88 "nothing adds bytes to object pages"); the server slices for free. |
| A `get_section` or `outline` tool | Three optional parameters on three tools do it; a tenth tool is one more description in every upfront client. The compact view is the outline. |
| Structured JSON (`structuredContent`) | Agents read markdown; the page is the contract the site, the twins and the tests share. Later if a client asks. |
| Continuation lines in `get_object`'s own form | `cat(path, ...)` is one form that works for W1, app and country objects and for every page type; `get_object` and `localization` take the same parameters for agents that stay with them. |
| A page cache in the server | Paging Codeunit 80's events fetches its 178 KB twin five times; GitHub Pages serves it compressed and fast. Later. |

## 4. Contract

### 4.1 `packages/mcp/src/sections.ts` (new, pure, no I/O)

Bundled into `dist/server.js` by `packages/mcp/build.ts` like `embed.ts`; imported in `server.ts` as `./sections.js`.

```ts
export const DEFAULT_BUDGET = 30_000, MIN_BUDGET = 5_000;
export const PREVIEW_ROWS = 5, ROW_CLIP = 200, PROSE_CLIP = 800, HEAD_LINE_MAX = 120;
export const FM_LIST_CHARS = 600, FM_LIST_MIN = 3, RESERVE = 300;
export const OBJECT_KEYS: Record<string, string>;            // table 4.2
export interface Row { lines: string[]; table: [string, string] | null; group: string | null }
export interface Section { heading: string; key: string; lines: string[]; head: string[]; rows: Row[]; tail: string[] }
export interface ParsedPage { frontmatter: string; preamble: string; sections: Section[] }
export interface ViewArgs { section?: string; offset?: number; limit?: number }
export function budgetOf(env: string | undefined): number;   // undefined, "" or NaN -> 30000; "0" -> Infinity; 1..4999 -> 5000
export function sectionKey(heading: string): string;         // OBJECT_KEYS[heading] ?? snake_case(heading)
export function parsePage(md: string): ParsedPage;
export function findSection(p: ParsedPage, want: string): Section | null;  // "frontmatter" gives the pseudo-section
export function compactFrontmatter(yaml: string): string;
export function compactView(md: string, path: string, budget: number): string;
export function sectionView(md: string, path: string, want: string, offset: number | undefined, limit: number | undefined, budget: number, site: string): string;
export function anchorView(md: string, path: string, anchor: string, site: string): string | null;
export function pageView(md: string, path: string, a: ViewArgs, budget: number, site: string): string;
```

`path` is the clean page path (`objects/codeunit/80`, `localizations/cz`), with an optional `#anchor` for `pageView`.
`site` is the server's `SITE` (ends in `/`). Characters are `String.length` (UTF-16 code units), as everywhere above.

**Parsing (`parsePage`).** The frontmatter is the text between the first line `---` and the next line `---` (empty
when the page has none). The body is split at lines starting with `## ` outside fenced code blocks (a line starting
with three backticks toggles a fence); the text before the first `## ` is the preamble (title, summary, locator,
and the country, extends or "Learn documents this table through its pages" lines). Trailing blank lines of a section
are dropped. A key used twice on a page gets `_2`, `_3` (three pages have one: `releases/al-10.0` `new_uicop_rule`,
`al-16.0` `aldoc_improvements`, `al-17.0` `al_language_changes`). Inside a section, outside fences:

1. a line starting with `|` followed by a separator line (`|---`, `| :--`) is a table header (both lines); the `|`
   lines after it are rows carrying that header;
2. a line starting with `- ` is a row, except `- and <n> more...` (the renderer's cap note, `REL_CAP = 50` at
   `pipeline/render/object.ts:163`), which is text;
3. a line indented by two or more spaces right after a row belongs to that row (`  - subscribers: ...`);
4. a `### ` line is the group of the rows after it;
5. any other line is head before the first row; after a row it is kept with the previous row when another row follows
   (blank lines between rows are dropped), else it is tail. No text of the page is lost by slicing.

`frontmatter` is a pseudo-section with no heading whose rows are its lines.

**Section keys.** `findSection` matches, case-insensitively, the key, the heading, or `snake_case(want)` against
`snake_case(heading)`. `snake_case`: lower case, every run of characters other than `a-z0-9` becomes `_`, trimmed.

**Compact view (`compactView`).** Exactly:

```
---
<compactFrontmatter(frontmatter)>
---

<preamble>

Compact view: this page is <len> characters and one answer holds <budget>, so each section shows its first 5 rows. Sections: <key> (<rows>), ..., <key>, frontmatter. Read one with cat("<path>", section: "<key>"); offset and limit page through a long one.

## <heading>                      one block per section, in page order
<first head line that is not blank, not a table line and not a ### line, when at most 120 characters>
<the group line, when it differs from the last one printed>
<the table header, when it differs from the last one printed>
<the first line of each of the first 5 rows, cut at 200 characters with "…">
→ <rows - 5> more of <rows>: cat("<path>", section: "<key>", offset: 5)       when rows > 5
<the tail's non-blank lines, cut at 800 characters with "… (section: "<key>")"> when rows <= 5
```

A section without rows prints its non-blank head lines, cut at 800 characters with `… (section: "<key>")`. Numbers
in the intro use `toLocaleString("en-US")`. The key list shows `(<rows>)` for sections that have rows. Runs of three
or more newlines collapse to two; the view ends with one newline.

**Frontmatter (`compactFrontmatter`).** The top-level `generated:` block is dropped. Every YAML block list (items
`- ` at one indent, an item including its deeper-indented lines) whose text exceeds 600 characters keeps its leading
items up to 600 characters, at least 3, and then one line `<indent># … <k> more; section: "frontmatter"`; lists
inside kept items follow the same rule. Every other line is verbatim, so the result parses as YAML (checked on all
233 pages over the budget). The pipeline writes block style with two-space indents (`toYaml(fm, { lineWidth: 0 })`,
`object.ts:312`), which this rule relies on.

**Section view (`sectionView`).** The first line is `<title>, section "<key>": <site><path>/`, `<title>` being the
preamble's `# ` line without the `# `, else the path. Then:

- Verbatim when `offset` is 0 or absent and `limit` absent and the verbatim answer fits the budget, and for a
  section without rows (offset and limit ignored): first line, a blank line, `## <heading>`, the section's lines as
  on the page (`---`, the YAML, `---` for `frontmatter`).
- Else: first line, blank, `## <heading>` (none for `frontmatter`), blank; at offset 0 the head; then rows `offset` to `offset + limit - 1`,
  each preceded by its group line and its table header when they differ from the last printed (the head counts as
  printed); stop before a row that would take the answer past `budget - 300` characters (always at least one row);
  then a blank line and the status line:
  - rows remain: `Rows <a>-<b> of <n>. Next: cat("<path>", section: "<key>", offset: <b>)`;
  - last row reached, no tail: `Rows <a>-<b> of <n>.`;
  - last row reached, `limit` absent and the tail fits: the tail, a blank line, `Rows <a>-<b> of <n>.`;
  - else: `Rows <a>-<b> of <n>. The section's closing text: cat("<path>", section: "<key>", offset: <n>)`.
- `offset >= n`: first line, blank, `## <heading>`, the tail; with no tail, `No rows after <n> in section "<key>" of
  <path>.`
- Unknown section: `No section "<want>" on <path>. Sections: <keys>, frontmatter.`

**Anchors (`anchorView`).** `#field-<id>` and `#value-<ordinal>` (the symbols index's keys,
`packages/search/src/score.ts:49`) match rows of the `fields` and `values` sections whose line starts
`| <id> |`; `#event-<Name>` and `#proc-<Name>` match rows of `events` and `procedures` that start ``- `<Name>(``,
every overload. Answer: `<title>, <field|value|event|procedure> <key>: <site><path>/<anchor>`, a blank line,
`## <heading>`, the table header for table sections, the matching rows with their continuation lines. No section or
no matching row: `null`.

**Dispatcher (`pageView`)**, in order:

1. the path has `#`: `anchorView`; on `null`, `(No row for <anchor> on this page.)`, a blank line and `pageView` of
   the path without the anchor and without arguments; `section`, `offset` and `limit` are ignored with an anchor;
2. `section` given: `sectionView`;
3. `offset` or `limit` without `section`: `offset and limit read one section: cat("<path>", section: "<key>",
   offset: <offset or 0>). Sections: <keys>, frontmatter.`;
4. `md.length <= budget`: `md` unchanged (today's answer, byte for byte);
5. else `compactView`.

Pure functions; `Infinity` as the budget makes 4 always true and the verbatim rule of `sectionView` always apply.

### 4.2 Section keys of object pages

`OBJECT_KEYS`, from the headings `pipeline/render/object.ts` emits (lines 257-311, 403, 460, 479, 506-509, 522). Pages
and largest section measured over `content/objects/**`:

| Heading | Key | Pages | Largest section (characters with its heading line, page) |
|---|---|---|---|
| Properties | `properties` | 18,522 | 573 |
| Fields | `fields` | 4,938 | 43,654 (`table/27`) |
| Fields on this page | `controls` | 7,549 | 28,225 (`page/6405`) |
| Actions | `actions` | 3,588 | 38,433 (`page/8901`) |
| Keys | `keys` | 3,824 | 1,945 |
| Values | `values` | 1,596 | 10,026 |
| Events published | `events` | 3,599 | 138,655 (`codeunit/80`, 530 rows) |
| Trigger event subscribers | `trigger_subscribers` | 376 | 9,227 (`table/36`) |
| Event subscriptions | `subscriptions` | 1,699 | 38,047 (`codeunit/6516`, 285 rows) |
| Procedures | `procedures` | 11,853 | 32,076 (`table/37`) |
| Triggers | `triggers` | 10,379 | 223 |
| Relations | `relations` | 7,840 | 8,823 (`table/18`) |
| Referenced by | `referenced_by` | 875 | 9,400 |
| Pages and codeunits on this table | `pages` | 2,979 | 5,037 |
| Extended by | `extended_by` | 848 | 3,982 |
| Calls | `calls` | 5,611 | 8,510 (`codeunit/80`) |
| Called by | `called_by` | 2,824 | 10,978 |
| Implements | `implements` | 402 | 294 |
| Implemented by | `implemented_by` | 94 | 3,585 |
| Recent changes | `changes` | 3,108 | 4,174 |
| Across versions | `versions` | 25,646 | 414 |
| Countries that replace it | `countries` | 569 | 762 |
| Documented on Microsoft Learn | `learn` | 1,863 | 2,723 |
| Deprecations | `deprecations` | 1,236 | 12,919 (`codeunit/22`) |
| Ask your agent | `ask` | 25,646 | 601 |

Other page types use `snake_case(heading)`: `objects_of_its_own`, `by_area` (localizations),
`business_central_pages_and_reports` (topics), `al_objects_touched` (changes), `objects` (apps). The largest rowless
section anywhere is under 20,000 characters, the largest row 2,409 (`objects/page/1518`), so a row always fits a slice.

### 4.3 `packages/mcp/src/server.ts`

- `const BUDGET = budgetOf(process.env.BC_OBSERVATORY_MAX_CHARS);` next to `SITE` (line 35); `B` for descriptions as in
  2.8. `VERSION` (line 34): `"0.3.1"` after phase A alone, `"0.4.0"` after phase B.
- `toolCat(a: { path: string } & ViewArgs)`: `const clean = a.path.replace(/^\/+|\/+$/g, "").replace(/\.md$/, "")`
  (the anchor stays on `clean`), `return pageView(await pageMarkdown(clean.replace(/#.*$/, "")), clean, a, BUDGET, SITE)`.
- `toolGetObject(a: { type: string; idOrName: string; country?: string } & ViewArgs)`: line 279 becomes
  `return \`${note}${pageView(await pageMarkdown(pick[0].id), pick[0].id, a, BUDGET, SITE)}${a.section ? "" : also}\``.
  The candidate list (line 281) and the not-found line (283) are unchanged; `section` is ignored on them. The note and
  the `also` line (under 200 characters) come on top of the budget.
- `toolLocalization(a: { country: string } & ViewArgs)`: `const p = \`localizations/${a.country.toLowerCase()}\`;
  return pageView(await pageMarkdown(p), p, a, BUDGET, SITE)`.
- Schemas: `get_object` `{ type, idOrName, country?, ...VIEW }`, `cat` `{ path, ...VIEW }`, `localization`
  `{ country, ...VIEW }` with `const VIEW = { section: z.string().optional(), offset: z.number().int().min(0).max(100000).optional(), limit: z.number().int().min(1).max(5000).optional() }`.
  What a client sees for `get_object` (zod 4 through the SDK, as the probe printed today's schemas):

```json
{"type":"object","properties":{"type":{"type":"string"},"idOrName":{"type":"string"},"country":{"type":"string","minLength":2,"maxLength":2},"section":{"type":"string"},"offset":{"type":"integer","minimum":0,"maximum":100000},"limit":{"type":"integer","minimum":1,"maximum":5000}},"required":["type","idOrName"],"$schema":"http://json-schema.org/draft-07/schema#"}
```

  `cat`: `{"type":"object","properties":{"path":{"type":"string"},"section":...,"offset":...,"limit":...},"required":["path"],...}`;
  `localization`: `{"properties":{"country":{"type":"string","minLength":2,"maxLength":2},"section":...,"offset":...,"limit":...},"required":["country"],...}`.
- Descriptions as 2.8. The header comment (lines 2-19) gains one sentence: "Long pages come back compact
  (sections.ts, D93)."

Server 0.3.0 ignores the new arguments: a `cat` call with `section` on today's server returned the whole 35,659-character
`localizations/be` with no error (probe, 2026-10-12). Skills that mention `section` therefore do no harm to a client
still on 0.3.0.

### 4.4 Versions and release

| Item | Today | Phase A alone | Phase B (with or after A) |
|---|---|---|---|
| `packages/mcp/package.json:3` and `server.ts:34` | 0.3.0 (published 2026-10-09) | 0.3.1 | 0.4.0 |
| `plugin/.claude-plugin/plugin.json:3` and `.claude-plugin/marketplace.json:9` | 0.2.2 | 0.2.3 | 0.2.4 (0.2.3 if A and B ship together) |
| `tests/unit/mcp-build.test.ts:22` | literal `"0.3.0"` | compares `package.json` with `server.ts`'s `VERSION` | same |
| `.github/workflows/publish-mcp.yml:31` | `npx tsx --test tests/unit/mcp.test.ts` | same | `npx tsx --test tests/unit/mcp.test.ts tests/unit/mcp-sections.test.ts` |

Why 0.4.0: under 0.x a minor bump says the output changed; 233 answers change shape, the parameters are additive.
Every client configured with `bc-observatory@latest` (the plugin's `plugin/.mcp.json:5`, the README, the MCP page)
gets it at a later server start. The owner publishes: `gh workflow run publish-mcp.yml --ref main`, then
`gh run watch` and `npm view bc-observatory version` (the workflow skips a version already on npm,
`publish-mcp.yml:36-40`). The plugin has no publish step: the marketplace serves `plugin/` from `main`.

The MCP page reads the server version from `packages/mcp/package.json` at build time
(`site/src/pages/mcp/index.astro:13`), so between the merge and the publish it shows a version npm does not have yet;
dispatch the publish right after the merge (as with 0.3.0).

### 4.5 Bytes on the Pages tar

| Change | Files | Bytes |
|---|---|---|
| Slicing, compact view, anchors | none on the site | 0 (server only) |
| `/mcp/` and `/mcp.md` texts (2.10) | 2 existing files | about +300 each |
| Object pages, indexes, twins | none | 0 |

## 5. Test plan (write first)

All tests read only; no network, no model.

**Test 1, `tests/unit/mcp-sections.test.ts` (new), on a hand-built page.** The fixture `P` (4,151 characters):
frontmatter `id: object/codeunit/9`, `type: object`, `title: Codeunit 9 "Demo"`, `tags: [codeunit]`, `links.learn`
with 30 URLs `https://learn.microsoft.com/dynamics365/business-central/demo-page-01` to `-30`, a `generated` block
(`at`, `input_hash: abc`), `present_in: ["29", "30"]`; body `# Codeunit 9 "Demo"`, `> Demo summary.`; `## Fields`
with the line `Explanation: the field's ToolTip.`, the five-column header and 12 rows `| <i> | Field <i> | Code[20] |
Specifies field <i>. |  |`; `## Events published` with 8 rows ``- `OnEvent<i>(var Rec: Record "Demo")` (integration):
Raised <i>.``, the first followed by `  - subscribers: [Codeunit 1 "X"](../codeunit/1.md) OnEvent1Sub`;
`## Procedures` with ``- `P1()` ``, ``- `P1(X: Integer)` ``, ``- `P2()`: Does two.`` and then `Plus 3 local
procedures.`; `## Countries that replace it` with `[BE](../../localizations/be.md)` and the `Source: AL metadata ...`
line; `## Ask your agent` with `Procedure bodies are not stored here (D10).`. `S = "https://example.test/x/"`,
path `objects/codeunit/9`.

| # | Call | Expected |
|---|---|---|
| 1 | `parsePage(P)` | keys `fields, events, procedures, countries, ask`; rows 12, 8, 3, 0, 0; events row 1 has 2 lines; procedures tail `["", "Plus 3 local procedures."]` |
| 2 | `sectionKey` | `"Events published"` → `events`; `"Fields on this page"` → `controls`; `"Objects of its own"` → `objects_of_its_own`; two `"Bug fixes"` headings on one page → `bug_fixes`, `bug_fixes_2` |
| 3 | `findSection(p, x)` for `events`, `Events published`, `EVENTS`, `events_published` | the events section each time; `foo` → `null` |
| 4 | `budgetOf` | `undefined` → 30000, `""` → 30000, `"abc"` → 30000, `"0"` → `Infinity`, `"1200"` → 5000, `"45000"` → 45000 |
| 5 | `pageView(P, path, {}, 30000, S)` | `=== P` |
| 6 | `pageView(P, path, {}, 2000, S)` (compact) | starts `---\nid: object/codeunit/9\n`; no `generated:`; `links.learn` keeps `demo-page-01` to `-07` then `    # … 23 more; section: "frontmatter"`; `present_in` whole; contains `Sections: fields (12), events (8), procedures (3), countries, ask, frontmatter.`; fields rows 1-5 and `→ 7 more of 12: cat("objects/codeunit/9", section: "fields", offset: 5)`; events rows 1-5 without the subscribers line and `→ 3 more of 8: ...offset: 5)`; procedures 3 rows then `Plus 3 local procedures.`; the frontmatter between the `---` lines parses with `yaml`'s `parse` |
| 7 | `pageView(P, path, { section: "fields" }, 30000, S)` | `Codeunit 9 "Demo", section "fields": https://example.test/x/objects/codeunit/9/\n\n## Fields\n\nExplanation: the field's ToolTip.\n\n| No. ...` with all 12 rows, nothing after the last row |
| 8 | `{ section: "Events published", offset: 2, limit: 3 }` | rows `OnEvent3`, `OnEvent4`, `OnEvent5`, no legend, last line `Rows 3-5 of 8. Next: cat("objects/codeunit/9", section: "events", offset: 5)` |
| 9 | `{ section: "fields", offset: 10 }` | the table header, rows 11 and 12, last line `Rows 11-12 of 12.` |
| 10 | `{ section: "procedures", offset: 3 }` | `## Procedures` then `Plus 3 local procedures.` |
| 11 | `{ section: "countries", offset: 1 }` | verbatim (a rowless section ignores offset), includes the `Source:` line |
| 12 | `{ section: "events" }` with budget 600 | rows 1 and 2 (row 1 with its subscribers line), `Rows 1-2 of 8. Next: ... offset: 2)`; length <= 600 |
| 13 | path `objects/codeunit/9#event-OnEvent1` | `Codeunit 9 "Demo", event OnEvent1: https://example.test/x/objects/codeunit/9/#event-OnEvent1\n\n## Events published\n- \`OnEvent1(...)\` ...\n  - subscribers: ...\n` |
| 14 | `#proc-P1` | both overloads, not `P2` |
| 15 | `#field-3` | the header and the row `\| 3 \| Field 3 \|`, not `\| 13` |
| 16 | `#event-Nope` | starts `(No row for #event-Nope on this page.)\n\n---\nid: object/codeunit/9` |
| 17 | `{ section: "foo" }` | `No section "foo" on objects/codeunit/9. Sections: fields, events, procedures, countries, ask, frontmatter.` |
| 18 | `{ offset: 5 }` | `offset and limit read one section: cat("objects/codeunit/9", section: "<key>", offset: 5). Sections: fields, events, procedures, countries, ask, frontmatter.` |
| 19 | `{ section: "frontmatter" }` | first line, blank, `---`, the whole YAML including `generated`, `---` |
| 20 | `{ section: "frontmatter", limit: 4 }` | lines `id:`, `type:`, `title:`, `tags:` then `Rows 1-4 of 43. Next: cat("objects/codeunit/9", section: "frontmatter", offset: 4)` |
| 21 | a page with a fenced block holding `## Not a heading` and `- not a row` | one section; the fenced lines are head text, not a heading or a row |

**Test 2, same file, the headings pin.** Every `"## <heading>"` string literal in `pipeline/render/object.ts` before
the `// ---...--- localizations` marker (line 527; regex `/"## ([^"]+)"/g` on the text before it: 26 literals, 25
distinct, `Procedures` twice at lines 275-276) has an entry in `OBJECT_KEYS`, and `OBJECT_KEYS` has no other entry. A renamed heading fails here, not in
an agent.

**Test 3, same file, real data** (committed `content/`, about 2 s):

- `compactView` of `objects/codeunit/80` is under 12,000 characters, `objects/table/18` and `objects/table/36` under
  16,000; each starts with `---\nid: object/`; Codeunit 80's contains `→ 525 more of 530: cat("objects/codeunit/80",
  section: "events", offset: 5)` while the page still has 530 events (skip that assertion with a message when the
  count in the page's `counts.events` differs).
- Every `content/**/*.md` over 30,000 characters (233 at `bb3a37e016`; the test prints the count): the compact view is
  under 20,000 (largest 15,741) and its frontmatter parses; every section and `frontmatter`, read from offset 0 by
  following the `Next:` offsets, gives answers of at most 30,000 characters (largest 29,845), covers every row exactly
  once (the `Rows a-b` lines add up to the section's rows) and takes at most 30 calls (largest 11).
- Anchors: `#event-OnAfterPostSalesDoc` on Codeunit 80 and `#field-20` on Table 36 resolve; of the symbols in
  `data/index/symbols-*.json` at least 99.5% resolve on their page (123,126 of 123,210 today; the test prints the
  misses' first five).

**Test 4, `tests/unit/mcp.test.ts`, over stdio.** A new `bigFixture()` calls `fixture()`, adds
`objects/codeunit/12.md` (`title: Codeunit 12 "Gen. Jnl.-Post Line"`, `object_type: codeunit`, `object_id: 12`,
`name: Gen. Jnl.-Post Line`, `app: Base Application`, `namespace: Microsoft.Finance.GeneralLedger.Posting`,
`summary: Posts journal lines.`, `tier: official`, a body `# Codeunit 12 "Gen. Jnl.-Post Line"`, a blank line,
`## Events published`, a blank line and 60 rows
``- `OnEvent<i>(var GenJnlLine: Record "Gen. Journal Line")` (integration): Raised at step <i> of posting.``) and
re-runs `renderSearchIndex`; the existing tests keep `fixture()` (its `ls` count, line 91, stays 7). Connect with
`BC_OBSERVATORY_MAX_CHARS=5000`:

- `get_object {type: "codeunit", idOrName: "12"}` starts `---\nid: object/codeunit/12\n`, contains `Compact view: this
  page is` and `→ 55 more of 60: cat("objects/codeunit/12", section: "events", offset: 5)`, length under 5,000;
- `get_object {..., section: "events", offset: 50, limit: 5}` matches `/^Codeunit 12 "Gen\. Jnl\.-Post Line", section
  "events": https:\/\/waldo1001\.github\.io\/waldo\.BCObservatory\/objects\/codeunit\/12\/\n/` and ends with
  `Rows 51-55 of 60. Next: cat("objects/codeunit/12", section: "events", offset: 55)`;
- `cat {path: "objects/codeunit/12", section: "events", offset: 58}` ends `Rows 59-60 of 60.`;
- `cat {path: "objects/codeunit/12#event-OnEvent7"}` starts `Codeunit 12 "Gen. Jnl.-Post Line", event OnEvent7:`
  and does not contain `OnEvent8`;
- `localization {country: "BE", section: "overview"}` is `No section "overview" on localizations/be. Sections:
  frontmatter.`;
- the line-95 and line-97 assertions still hold (`cat` of `objects/codeunit/80#event-OnAfterPostSalesDoc` on the small
  fixture falls back to the page, which has `# Codeunit 80`).

A second connection without the variable set and one with `BC_OBSERVATORY_MAX_CHARS=0`: `get_object {type:
"codeunit", idOrName: "12"}` returns the page whole in both (it is about 6,500 characters, under 30,000) and, with `0`,
`section: "events"` returns all 60 rows.

**Test 5, `tests/unit/mcp.test.ts`, descriptions** (phase A, extended in B): from `listTools`, every description is at
most 1,000 characters and the nine add up to at most 3,300; `search`'s contains `'event: OnAfterPost'` and each of the
11 type values, and neither `+10` nor `title or caption 3`. Phase B adds: `get_object`, `cat` and `localization`
descriptions contain `section`, `offset` and `limit`; `get_object`'s schema lists `section`, `offset`, `limit`.

**Test 6, `tests/unit/mcp-golden.test.ts`, real content.** Lines 50-57 unchanged (compact answers start with the
frontmatter). Added: `get_object {type: "codeunit", idOrName: "Sales-Post"}` contains `Compact view:` and is under
30,000 characters; `cat {path: "objects/codeunit/80#event-OnAfterPostSalesDoc"}` matches `/^Codeunit 80 "Sales-Post",
event OnAfterPostSalesDoc: /` and is under 5,000; `get_object {type: "table", idOrName: "36", section: "fields",
offset: 5, limit: 3}` matches `/Rows 6-8 of \d+\. Next: cat\("objects\/table\/36", section: "fields", offset: 8\)$/`.

**Test 7, `tests/unit/mcp-build.test.ts:22`.** `pkg.version` equals the `VERSION` literal read from
`packages/mcp/src/server.ts` (`/const VERSION = "([^"]+)"/`); the bundle contains `Compact view:` (phase B).

## 6. Tasks

No phase rewrites a page, touches the pipeline or needs a nightly. Phase A and phase B ship alone, in either order.

**Phase A, G2: descriptions (1 to 2 hours).**

1. Test 5 (phase A part) and test 7, red.
2. `server.ts`: the `search` and `whats_new` descriptions of 2.8.
3. `bc-lookup/SKILL.md:10` type list (2.9).
4. Versions (4.4): 0.3.1 and plugin 0.2.3 when A ships alone; skip when B follows within three days (open question 9).
5. Gates: `npm run typecheck && npm test`.

**Phase B, G1: sections (1.5 days).**

1. Tests 1, 2 and 3 against an empty `sections.ts` that exports the signatures: red.
2. `packages/mcp/src/sections.ts` (4.1, 4.2) until tests 1-3 pass.
3. Tests 4, 6 and the phase B part of 5: red. `server.ts` wiring (4.3): `BUDGET`, three tools, schemas,
   descriptions. Green.
4. Skills (2.9), `site/src/lib/mcp.ts` (2.10), `packages/mcp/README.md` (2.10).
5. Versions and the workflow line (4.4).
6. Verification (section 7), then the ship edits of section 12.

## 7. Verification

```bash
npm run typecheck && npm test                                         # tests 1-7
npx tsx --test tests/unit/mcp.test.ts tests/unit/mcp-sections.test.ts  # what publish-mcp runs after phase B
npm run build --workspace=bc-observatory && grep -c 'Compact view:' packages/mcp/dist/server.js   # 1 or more
echo '{}' | node packages/mcp/dist/server.js                           # starts and waits on stdio; Ctrl+C
export PATH="$HOME/.nvm/versions/node/v22.23.1/bin:$PATH"; (cd site && npm run build)   # Node 22; /mcp/ shows the new texts
npx tsx scripts/site-size.ts site/dist                                 # tar within noise of the last Pages run (no object page changed)
```

Real-data check by hand, local server (`BC_OBSERVATORY_LOCAL=$PWD node --import tsx packages/mcp/src/server.ts`
through an MCP client, as `tests/unit/mcp.test.ts:76-82` does): `get_object codeunit 80` under 10,000 characters;
`section: "events"` five calls to the end; `localization CZ` under 6,000; `cat topics/business-central/business-functionality`
under 9,000.

After the owner's publish: `npm view bc-observatory version` prints 0.4.0; in a Claude Code session with the plugin,
`get_object("codeunit", "80")` arrives inline (no "saved to a file" message) and the agent can follow a `Next:` line.
Before committing, `git status` shows only the files of section 10 (nothing under `content/` or `data/`).

## 8. Later, not in this spec

- A page cache in the server (paging a section refetches the twin each call).
- `whats_new` with `limit: 100`, `search` with `limit: 50` and `ls` with 200 files are not budgeted; not measured here.
- If D76 phase 3 fires (object twins served from `raw.githubusercontent.com`), `pageMarkdown` must fetch objects
  there; the slicer does not care where the markdown comes from.
- `structuredContent` with section metadata; MCP resources per section; an exact token budget with a tokenizer.
- The 84 symbols whose row is missing from their page (`table/242` fields 2-6, `table/231` field 5900, ...): a
  pipeline question, not an MCP one.

## 9. Risks and open questions

| Risk / question | Default the coder takes |
|---|---|
| 1. Budget: 30,000 or closer to the 50,000-character file threshold | 30,000 (under the 10,000-token warning at three characters a token); `BC_OBSERVATORY_MAX_CHARS` for other needs |
| 2. Compact view only over the budget, or for every page | over the budget only (28,617 answers stay byte for byte) |
| 3. Preview rows | 5 |
| 4. An agent relied on the whole page from `get_object` for a large object | the 0.4.0 bump, the README sentence, `BC_OBSERVATORY_MAX_CHARS=0`; the compact view names every section and the exact next call |
| 5. A client with a smaller limit than 30,000 characters | not known for the clients on the MCP page; the variable covers it |
| 6. The renderer renames a heading | test 2 fails at once; add the key, keep the old key as an alias in `findSection` for one release |
| 7. A symbol path whose row is not on the page (84 today) | the fallback note and the page view; listed under Later |
| 8. Prose interleaved with rows on release pages | kept with the previous row (4.1 rule 5), so slices lose nothing; release sections fit the budget and come back verbatim anyway |
| 9. Publish G2 alone as 0.3.1, or once with G1 | build A first; publish once as 0.4.0 with plugin 0.2.3 if B is merged within three days of A, else publish A as 0.3.1 |
| 10. Continuation lines say `cat(...)` also in `get_object` and `localization` answers | yes, one form; the descriptions say `get_object` and `localization` take the same parameters |
| 11. Trim the 706-character server instructions too | no: Claude Code loads them every session and its tool search uses them to find the server |
| 12. The section key `ask` for "Ask your agent", `learn` for Learn | as table 4.2; the heading text works too |

## 10. Files

New: `packages/mcp/src/sections.ts`, `tests/unit/mcp-sections.test.ts`.

Changed: `packages/mcp/src/server.ts`, `packages/mcp/package.json`, `packages/mcp/README.md`,
`plugin/skills/bc-lookup/SKILL.md`, `plugin/skills/bc-grounding/SKILL.md`, `plugin/skills/bc-localization/SKILL.md`,
`plugin/.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `site/src/lib/mcp.ts`,
`tests/unit/mcp.test.ts`, `tests/unit/mcp-golden.test.ts`, `tests/unit/mcp-build.test.ts`,
`.github/workflows/publish-mcp.yml` (line 31), and at ship time `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, `AGENTS.md`, `docs/specs/site-size.md` (line 115), this spec (section 12 renamed).

## 11. Definition of Done

- [ ] Tests 1-7 pass in `npm test`; `npm run typecheck` is clean; `publish-mcp.yml:31` runs `mcp-sections.test.ts`.
- [ ] `get_object("codeunit", "80")` answers in under 10,000 characters on the local server, starting with its
      frontmatter; `section: "events"` reads all 530 events in five answers of at most 30,000 characters.
- [ ] `cat("objects/codeunit/80#event-OnAfterPostSalesDoc")` returns that event alone.
- [ ] Descriptions as 2.8; the nine add up to 2,465 characters after phase A (3,066 after phase B), each under 1,000.
- [ ] Skills, `site/src/lib/mcp.ts` and the package README say what 2.9 and 2.10 say; the site builds.
- [ ] Versions as 4.4; the owner has dispatched `publish-mcp` and `npm view bc-observatory version` shows the new one.
- [ ] `docs/DECISIONS.md` D93 appended, PLAN M31 row marked shipped, HANDOFF entry moved from "Open specs" to shipped,
      section 12 applied and renamed "Built, deviations".

## 12. Proposed edits to other files (not applied)

- `docs/DECISIONS.md`: the D93 text of section 3, with the measured numbers of the build.
- `docs/PLAN.md` section 5, before the `v0.2+` row (line 440):
  `| **M31 MCP sections** | long pages come back compact from get_object, cat and localization (frontmatter with long lists cut, section keys with row counts, the first 5 rows of each section), section, offset and limit read a section in slices of at most 30,000 characters, a symbol path returns its member's row, tool descriptions keep call forms and drop the scoring formula; bc-observatory 0.4.0, plugin 0.2.3 or 0.2.4 (\`docs/specs/mcp-sections.md\`, D93, proposed) | 2 days in two phases | none: deterministic, no LLM, no site bytes |`
- `docs/PLAN.md:374-375` (4.7 MCP): `cat(path)` becomes `cat(path, section?, offset?, limit?)`,
  `get_object(type, idOrName, version?, country?)` becomes `get_object(type, idOrName, country?, section?, offset?,
  limit?)`, `localization(cc, version?)` becomes `localization(cc, section?, offset?, limit?)`; add after the tool
  list: "A page over 30,000 characters comes back compact with its section keys (D93)."
- `docs/HANDOFF.md` "Open specs, not yet implemented":
  `- **MCP sections**: \`docs/specs/mcp-sections.md\`, D93, M31. Status: proposed 2026-10-12, nothing implemented. Start with phase A (descriptions, two hours) or phase B task 1: \`tests/unit/mcp-sections.test.ts\` from section 5 against an empty \`packages/mcp/src/sections.ts\`. Until it lands: \`get_object("codeunit", "80")\` returns 177,746 characters, which Claude Code saves to a file (56 pages are over its 50,000-character threshold, 233 over 30,000), \`localization("CZ")\` 173,865, and \`cat\` of a symbol path returns the whole page.`
- `docs/HANDOFF.md:42-43`: "`bc-observatory@0.3.0` ... is ready to publish" becomes "was published 2026-10-09".
- `AGENTS.md:29-35` ("The MCP server ... serves exactly these: ..."): after "ranks like the site's own search", append "; a page over 30,000 characters
  comes back compact, and `section`, `offset` and `limit` read one section (D93)".
- `docs/specs/site-size.md:114-115`: "(verify; it reads the npm package's own copy today)" becomes "(it fetches the
  site twin, `packages/mcp/src/server.ts:64`; phase 3 must point it at the raw URL)".
