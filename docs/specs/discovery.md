# Discovery: find the right hub, explain every field, point onward

Status: implemented, all four tranches, 2026-10-07 (sections 8.1 to 8.5 record what was built and where it differs). Decision: D65 (appended 2026-10-07). Owner: waldo.
Scope: four tranches, phased (section 8). All deterministic, no LLM call added. Written for a session that has not
seen the conversation behind it; every claim below was verified against the tree at `83fa4e764` on 2026-10-07.

## 1. Goal

A reader new to Subscription Billing types "subscription" and gets a starting point: the Learn hub for the feature,
with its path, its size and its review state, above the codeunits, videos and the other two hubs that happen to share
the word. The hub links the pages, reports and tables that implement it. A table page explains what each field is
for, in Microsoft's own words, and says where those words come from. Every page carries a short "Related" block
with a stated reason per link, so a wrong click bounces to the right place instead of to the back button. The
objects of a first-party app sit in the business system they belong to, not in "AL Development".

The data for most of this already exists in the repository and is not joined or not rendered. That is the point of
this spec: join and render first (tranches 1 to 3), extract what the parser walks past second (tranche 4).

### The walkthrough that fails today (the acceptance test of this spec)

1. Home page, type "subscription" in the header field. The galaxy lights 13 stars. The panel lists them by graph
   weight: "Sales", "Set up sales", "Built-in sales reports", "Subscription billing", ... "Subscriptions". No path,
   no size, no hint which one is the feature. The reader clicks "Subscriptions".
2. That hub is `Administration > Cloud Migration API > Subscriptions`: 5 API reference pages, no narrative, no
   link to anything called Subscription billing. Dead end.
3. Back, Enter: the search page. Flat list of 50. Videos first (their tags match), then codeunits 8005, 8006, 8032,
   ... The hub `Subscription billing` (47 Learn pages, Opus-reviewed narrative, 2 videos) is below them: it ties
   with the 5-page API hub and loses to any object whose summary mentions the word.
4. A table page, say `Table 8057 "Subscription Header"`: 64 fields, the Notes column empty on every row.

After this spec: step 1 shows "Subscription billing · Sales · 47 Learn pages · 27 objects · reviewed" first; step 2
shows a Related block "Subscription billing (Sales) — same title, different Learn section"; step 3 opens on a
"Start here" group with that hub on top; step 4 shows an Explanation per field with its provenance.

### Non-goals

- Machine-written prose on object pages. D07/D29 keep object pages "facts from the code pillar, nothing
  machine-written"; this spec adds Microsoft's own ToolTip and Caption strings, which are facts from the code.
- Semantic search (model2vec, PLAN v0.2+). The scoring changes here stay plain and deterministic (D35).
- A glossary or synonym dictionary. Captions and TOC path words cover the gap this spec is about ("Service
  Objects" page captioned "Subscriptions"); a glossary is a separate decision.
- Haiku-assigned "see also" links between hubs. Tranche 3 derives them from structure; if that is not enough the
  LLM route is a new decision with its own quota.

### Design intent

Evidence first. Every explanation names where it comes from: "ToolTip on `Page 8060 "Service Object"`", "same
title, different Learn section", "both documented in Subscription billing > Contracts". A reader or an agent can
check every link in one hop. Nothing is inferred by name matching outside the one place the code already does it
(video and post mentions, `pipeline/link/graph.ts`), and that place is not touched.

## 2. What is broken, with evidence

| Symptom | Root cause | Where |
|---|---|---|
| `Subscription billing` hub ranks below `Codeunit 8005` and ties with the 5-page API hub | Score per query word: title 3, tags 2, summary 1, plus 0.5 for any non-object. Hubs carry no `tags`. No weight for member count, narrative or review state | `site/src/scripts/search.ts:12-27`; records in `pipeline/render/search.ts:23-37` |
| The three "subscription" hubs are indistinguishable | Rows show title, type label, tier badge, summary. No TOC path, no page count, no narrative badge. Galaxy panel sorts stars by graph weight only | `search.ts:62-66`; `site/src/scripts/galaxy.ts:424-432` |
| Results page is one flat list of 50 | No grouping; a type `<select>` is the only structure | `site/src/pages/search/index.astro:12-16`; `search.ts:59-66` |
| The wrong hub has nothing to bounce off | `links.topics` = TOC parent and children only. No sibling, mirror or see-also concept anywhere in `pipeline/`, `site/`, `schemas/` | `pipeline/render/topic.ts:63-66`; `pipeline/link/toc.ts:75-130` |
| Hub prints "Learn's ms.search.form names these object ids (not yet joined to the code pillar)", `links.objects: []`, `coverage.code: 0` | The join exists: `data/index/docs-objects.json` has `by_doc` (1,592 docs → object keys) and `by_object` (2,382 objects). Hubs never read it | `topic.ts:64,68,95`; `pipeline/code/docs-objects.ts` |
| `Table 8057` has no Learn or topic links although its 4 pages carry 12 Learn pages and 3 hubs | Objects get `links.learn` from `by_object`; `ms.search.form` names pages and reports only (2,103 pages, 278 reports, 1 query, 0 tables, 0 codeunits). Tables are never reached through their pages | `pipeline/render/object.ts:155,192-196`; `topicsByUrl` at `object.ts:109-113` |
| Field Notes column empty | Renderer prints only obsolete state and `#if not CLEAN` guards. The extractor already stores `tooltip` per field and every property in `field.properties` (Caption, TableRelation, CalcFormula, FieldClass, OptionCaption, Editable, NotBlank) | `object.ts:211-215`; `pipeline/code/extract.ts:33,152` |
| 16 W1 fields lose their tooltip | `tooltip: props.ToolTip ?? null` matches the key `ToolTip` only; BCApps also spells `Tooltip` | `extract.ts:152` |
| Subscription Billing fields have no explanation at all | In that app the ToolTips sit on page controls. Page layout, controls and actions are not extracted: every page record has `fields: []`; the extractor header calls layout "v0.2" | `extract.ts:12`; `data/code/30/apps/objects-page-1.jsonl` |
| `Page 8059 "Service Objects"` sits under **AL Development** in the galaxy | `NS_SYSTEM` maps namespace segments to systems and has no entry for `subscriptionbilling`, `powerbireports`, `expenseagent`, `agent`, `datamigration`, `qualitymanagement`, `intercompany`, ...; `objectSystem` falls back to `development` | `pipeline/lib/systems.ts:5-19`; the site reuses it in `site/src/lib/page.ts:4,15-20` |
| MCP `search` ranks differently from the site | The MCP server builds its own MiniSearch over the same records (title 3, tagText 1.5, prefix, fuzzy) | `packages/mcp/src/server.ts:78-83` |

Numbers behind the table (2026-10-07, `data/code/30` unless said):

| Measure | Value |
|---|---|
| W1 tables / fields / fields with ToolTip | 1,702 / 30,774 / 12,946 (42%) |
| First-party apps tables / fields / with ToolTip | 930 / 23,536 / 1,362 (6%) |
| Subscription Billing tables / fields / with ToolTip | 44 / 1,068 / 51 (5%) |
| `Table 18 "Customer"` fields / with ToolTip | 165 / 104 |
| `Table 8057 "Subscription Header"` fields / with ToolTip (BC29) | 64 / 0 (BC30: 10) |
| First-party apps in `data/code/30/apps/manifest.json` | 102 (`apps` array of folder names), 6,924 objects |
| Namespaces under `apps` pages with no system: API 236, PowerBIReports 172, ExpenseAgent 149, DataMigration 108, SubscriptionBilling 90, QualityManagement 35, ... (BC29) | all → `development` |
| Hubs / with narrative / without | 605 / 556 / 49 |
| `Subscription billing` hub: Learn members / `bc_forms` ids / objects resolvable through `by_doc` across its subtree | 47 / 27 / 35 |
| Search index records / objects / topics / videos / posts / features | 22,695 / 20,744 / 605 / 617 / 594 / 80 |

Constraints that bind (docs/DECISIONS.md, `config/budget.json`): deterministic first, LLM last and only on deltas
(D12, D22, D43); $10 a night; `code_jobs: 1` per night, so an extractor change re-extracts one snapshot a night;
object pages carry no prompts (`generated.prompts: {}`, `object.ts:190`).

## 3. Reader-facing behaviour, after

### 3.1 Search results page (`/search/?q=subscription`)

Groups, in this fixed order, each with its own heading and count, empty groups omitted:

1. **Start here** — topic hubs and app pages. Up to 5, "Show N more". Row: title; second line `Sales › Subscription
   billing` (the TOC path without the hub's own title, or the app name for an app page); third line
   `47 Learn pages · 27 objects · 2 videos · reviewed` (the stats the hub page header already shows; `reviewed`,
   `unreviewed` or `no narrative`).
2. **Roadmap** — features, with status and GA date as today.
3. **Videos**, 4. **Community posts** — as today, newest first within equal score.
5. **AL objects** — grouped by app (`Subscription Billing`, `Base Application`, ...), 10 per app then "Show N
   more"; row shows `Page 8059 "Service Objects"` and, when the caption differs from the name, `captioned
   "Subscriptions"`.
6. **Localizations**, 7. **Sources**, 8. **Digests** — as today.

The type `<select>` becomes a row of tabs over the same groups ("All · Start here · Roadmap · Videos · Posts · AL
objects · ..."), each with its count; "All" shows the grouped view. The `type=` query parameter keeps working and
maps to a tab. The result cap is per group, not 50 overall. Keyboard: tabs are buttons in a `role="tablist"`,
arrow keys move between them; Enter opens the first result of the active group when focus is on the search field.

### 3.2 Galaxy search panel (home page)

The "Stars" list is ordered hubs and apps first (by `ev`, evidence count, descending), then roadmap features, then
objects (by weight). Every row gets a `<small>` with the path label: `Sales › Subscription billing`, `Subscription
Billing` (app), `Administration › Cloud Migration API › Subscriptions`. A one-line legend above the list names the
three dot shapes/types. "Systems with matching pages" and "Pages without a star" stay as they are. The live region
text adds the first hub: `13 stars, 406 pages without a star. First: Subscription billing (Sales).`

### 3.3 Topic hub page

- Header stats gain `27 AL objects` (links to the new section) once `links.objects` is filled.
- New body section **"Business Central pages and reports"** replaces the "not yet joined" sentence: one line per
  object, `[Page 8059 "Service Objects"](...) · captioned "Subscriptions" · on [Table 8057 "Subscription
  Header"](...)`, reports and queries without the "on" part. Objects whose Learn pages are the hub's own members
  come first, then those of its subtopics (marked `via Contracts`). Sorted by type then id.
- Sidebar gains **Related** (section 3.7).

### 3.4 Table page

The Fields table becomes:

| No. | Name | Type | Explanation | Notes |
|---|---|---|---|---|
| 3 | No. | Code[20] | Specifies the number of the subscription. <small>via Page 8060 "Service Object"</small> | NotBlank |
| 50 | Type | Enum "Service Object Type" | Specifies whether the subscription is for an item or a G/L account. | enum [Service Object Type](...) |
| 95 | Archived Sub. Lines exist | Boolean | — | FlowField: Exist(...) |

- Explanation: the field's own ToolTip; else (tranche 4) the ToolTip of a page control bound to the field, with
  `via Page N "Name"` in small type; else the Caption when it differs from the field name; else an em-dash.
- Notes: obsolete state and `#if not CLEANxx` as today, then `TableRelation X` (X linked when it resolves in the
  relations file), `FlowField: <CalcFormula>` or `FlowFilter`, `enum <Name>` (linked), `OptionCaption: a,b,c`,
  `not editable`, `NotBlank`, `AutoIncrement`, `DataClassification` when it is not the object's own.
- Enum pages: the Values table gains a Caption column.
- Events published: a `doc` line under the signature when the extractor captured one, as procedures already get.
- Header stats gain `12 Learn pages` through the pages on the table (section 4.3); the Neighbourhood already draws
  Learn nodes when `learn` is non-empty.

### 3.5 Page page (tranche 4)

- New section **"Fields on this page"**: control caption, bound field as a link to `table/<id>.md#fields` (anchor
  of the field row), ToolTip. Grouped by the `group`/`repeater` caption the control sits in, in source order.
- New section **"Actions"**: caption, ToolTip, `runs Report 8012 "..."` when `RunObject` resolves.
- The header line gains `captioned "Subscriptions"` when the page Caption differs from its name.

### 3.6 App page (tranche 3) — `/apps/subscription-billing/`

One page per first-party app. Header: the app folder name, namespace root, versions present (`BC29-30`), system.
Sections: "What Learn documents it" (hubs reached through the app's objects, by hub, with counts), "Objects" (a
table per type: id, name, caption), "Videos and posts" (items whose `objects_mentioned` resolve to this app's
objects), "Roadmap" (features whose title contains the app name, exact and case-insensitive, listed as "possibly
related" because this is the one name match), "Related" (other apps sharing a hub). The summary is deterministic:
`Subscription Billing (Microsoft.SubscriptionBilling): 372 objects in BC29-30 (44 tables, 90 pages, ...); documented
by 6 Learn hubs; 2 videos.` The app is a star in its system, with `ev` = hubs + videos + posts.

### 3.7 Related, on every information page

A sidebar block under "Connections" (object pages: under the Neighbourhood), heading "Related", up to 8 rows,
collapsed after 5 with "Show N more" like `EvidenceList`. Row: dot in the target's system colour, title, type as
`<small>`, and the reason as a second muted line. Reasons are fixed strings from a small set (section 6.1), so an
agent can filter on them. Nothing in the block is machine-written.

## 4. Tranche 1 — render and join what exists

Render-only plus one extractor fix. One nightly re-renders every object and topic page.

### 4.1 Field explanations — `pipeline/render/object.ts:211-215`

- Replace the Fields table header and row builder. A pure helper `fieldRow(f, ctx)` returns
  `{ explanation: string, provenance: string | null, notes: string[] }`; the renderer joins them. `ctx` carries the
  object, the relations lookup (for linking TableRelation and enum targets through the existing `link()` helper)
  and, from tranche 4, the field-docs map. Keep `cell()` escaping on every string; ToolTips contain `|` rarely but
  do contain quotes and `%1` placeholders, which are shown verbatim.
- Explanation precedence: `f.tooltip` → field-docs (tranche 4) → `f.properties.Caption` if it differs from `f.name`
  after trimming → `—`.
- Notes: existing obsolete/CLEAN text first, then in this order: TableRelation (`f.properties.TableRelation`,
  clipped at 300 by the extractor; resolve the first identifier before any `WHERE`/`IF` through the relations
  index for a link), `FlowField: <CalcFormula>` when `FieldClass` is `FlowField` (CalcFormula shown as stored, it is
  already whitespace-normalised), `FlowFilter`, enum type (the type string starts with `Enum `), `OptionCaption`,
  `Editable=false` → `not editable`, `NotBlank`, `AutoIncrement`, `DataClassification` when present on the field
  and different from the object's.
- Enum Values table (`object.ts:217`): add a Caption column from `v.properties.Caption`.
- Events published (`object.ts:218-226`): append `: ${cell(p.doc)}` when `p.doc` is set, same as procedures at 230.
- Extractor fix (`extract.ts:152`): `tooltip: props.ToolTip ?? props.Tooltip ?? null`. Bump `EXTRACTOR_VERSION` to
  `"4"` with the comment `// 4: Tooltip spelling; page controls (D65)` so the code items re-run (one snapshot a night,
  `code_jobs: 1`; D58 did the same for version 3). Until a snapshot is re-extracted, its pages render from the
  old records, which is fine: the renderer must not depend on the new fields being present.
- `data/index/fields.json` (`pipeline/render/objects-index.ts:22,61`) stays `field name → pages`; add a sibling
  `data/index/field-docs.json` only in tranche 4 (section 7.2). The MCP `get_object` reads the object page markdown
  (check `packages/mcp/src/server.ts` `toolGetObject`), so it picks the Explanation column up for free.

### 4.2 Hubs own their objects — `pipeline/render/topic.ts`

- `renderTopicPage` gets the docs-objects index (read `data/index/docs-objects.json` with `readJson` the way `pipeline/render/object.ts` already does for
  object pages; `pipeline/code/docs-objects.ts` only writes it, there is no shared loader yet: add one there). For the hub's members and its descendants' members (the hub data
  carries `members` per hub and `children`; walk `byId`), look each member's manifest id up in `by_doc` and collect
  `{ key, name, via: <hub id the member belongs to> }`.
- Frontmatter: `links.objects` = sorted distinct `object/<key>` ids (`object/page/8059`); `coverage.code` = their
  count. Keep `bc_forms` as is (it is the raw Learn signal and the drift report reads it).
- Body: replace the sentence at `topic.ts:95` with the section of 3.3. The page-to-table "on" part comes from the
  relations file of the preferred major (`loadConfig("versions")`, same choice `objects-index.ts` makes):
  `source_table` edges with `s = page/<id>`. Link targets are `../../../../objects/<type>/<id>.md` relative to the
  topic page; reuse `topicRel` depth like the media links at `topic.ts:90-91`.
- Graph (`pipeline/link/graph.ts:85-106`): `links.objects` on a topic already becomes a `mentions` edge
  (`fm.type` is neither object nor localization). Change that branch so a topic → object link is `documents`, the
  same type the object → topic direction uses; the galaxy's weight and brightness logic is unchanged.
- Validator (`pipeline/validate/content.ts:20`): add `"objects"` to `ID_LINKS`. `expectedId` maps `object/table/8057`
  to `content/objects/table/8057.md`, so no other change; the comment "objects wait for the code pillar" goes.
- Schema: `schemas/frontmatter.topic.json` `coverage.code` is already an integer; no change. `frontmatter.base.json`
  `links.objects` exists; no change.

### 4.3 Tables inherit Learn and topic links through their pages — `pipeline/render/object.ts:155,192-196`

- For `o.type === "table"`: pages on the table are already computed (`pagesOn`, the `source_table` edges used at
  `object.ts:248-254`). Union their `by_object` Learn entries and their `topicsByUrl` hubs into the table's
  `links.learn` and `links.topics`; keep the table's own (empty today) first.
- Body: a line under the header, `Learn documents this table through its pages: [Page 8059 "Service Objects"](...)
  (12 Learn pages), [Page 8060 "Service Object"](...) (9).` No per-URL list: the Neighbourhood and the page pages
  carry those.
- `evidence`: do not add the inherited Learn pages (evidence stays what names the object itself). The site's
  `Neighbourhood` receives `learn` from `links.learn`; check `site/src/pages/objects/[...id]/index.astro` passes
  the frontmatter list, not the evidence list.
- Graph: `links.topics` on an object already yields `documents` edges. Table 8057 gets 3; 1,702 W1 tables gain
  edges, which raises hub weights (`graph.ts:107-108` adds degree): expected and wanted, hubs get brighter where
  code exists.

### 4.4 First-party apps land in their system — `pipeline/lib/systems.ts:5-13`

Add to `NS_SYSTEM` (keys are lowercase namespace segments after the vendor):

| Segment | System | Why (Learn TOC branch that documents it) |
|---|---|---|
| `subscriptionbilling` | `sales` | Business functionality › Sales › Subscription billing |
| `powerbireports` | `reporting` | Business functionality › Reporting › Power BI |
| `expenseagent`, `agent`, `agents` | `copilot` | Copilot & agents |
| `datamigration` | `administration` | dev-itpro › Administration › Cloud migration |
| `intercompany` | `finance` | Finance › Multi-site › Manage intercompany transactions |
| `withholdingtax`, `excisetaxes` | `finance` | local finance features |
| `qualitymanagement` | `inventory` | Learn has it top-level under Business functionality; the content is inspections of inventory and production. Open question 11.3 |
| `externalfilestorage`, `externalstorage`, `email`, `device`, `privacy`, `visualization`, `shared` | `platform` | system features |
| `demodata`, `demotool` | `platform` | Contoso demo tooling (D58 excludes the country demo apps; W1's stay) |

Rule, as a comment above the map: *the Learn TOC branch that documents the app decides; `development` is for AL
and developer tooling only (`AIDevelopmentToolkit`, `AgentDesignExperience`, ...).* Leave `api` → `integration`.
`QualityManagement`, `Intercompany` and the two tax apps need one look at the current Learn TOC at implementation
time; the table is the proposal.

`config/taxonomy.json` aliases: add `"subscription billing"` to `sales`, `"power bi"` to `reporting` only if a
hub today lands wrongly; `systemFor` (`toc.ts:61-69`) inherits the parent's system otherwise, which is right for
"Subscription billing" (parent Sales). Do not add generic words.

Side effects: the galaxy relayout is deterministic (`d3-force@seed:42`); `data/graph/summary.json` changes; the
atlas facets (`site/src/scripts/atlas.ts`) read the same function. The site build reads `pipeline/lib/systems.ts`
directly (`site/src/lib/page.ts:4`), so one change serves both.

### 4.5 Tests (tranche 1)

- `tests/unit/code-extract.test.ts`: a fixture table with one `ToolTip` and one `Tooltip` field → both `tooltip` set.
- `tests/unit/object-page.test.ts` (new, or extend `code-job.test.ts` where `renderObjectPage` is exercised): a
  table with ToolTip, Caption ≠ name, TableRelation, FlowField, enum type, obsolete field → the five Explanation and
  Notes cases; an enum with captions; an event with `doc`.
- `tests/unit/topic-page.test.ts` (new): a hub with two members in a fixture `by_doc` → `links.objects`,
  `coverage.code`, the section text, the subtopic `via` marker.
- `tests/unit/graph.test.ts`: topic → object link becomes `documents`.
- Golden expectations: regenerate the fixtures the existing tests compare against; list them in the PR.

## 5. Tranche 2 — search that ranks hubs first and shows what a result is

Site and index only. No pipeline logic beyond the index records.

### 5.1 Index records — `pipeline/render/search.ts:16-37`

Extend `PageRecord` (additive; the MCP server's `storeFields` list at `server.ts:80` must name the new fields or it
drops them):

| Field | Types | Value |
|---|---|---|
| `path_label` | all | topic: `learn_toc_path` without the last element, joined with ` › `, left-truncated to the last two parts when longer than 40 characters; object: `app`; app page: its system label; feature: roadmap area; video: `channel` name; post: source name |
| `tags` | topic | the words of `learn_toc_path` plus the system id (topics have none today; `pageRecord` already copies up to 8 tags) |
| `caption` | object | `fm.caption` (new frontmatter field written by `object.ts` from `o.properties.Caption` when it differs from the name; add to `schemas/frontmatter.object.json` as optional string) |
| `members` | topic, app | `coverage.learn + coverage.code + coverage.video + coverage.blog` (app: objects + hubs + media) |
| `narrative` | topic | `"reviewed"`, `"unreviewed"`, `"none"` from `review.state` and `narrative` |

Record growth: about 60 bytes per topic row and 20 per object with a caption; the 8 MB shard limit holds (two
shards today, 22,695 rows).

### 5.2 Scoring — `site/src/scripts/search.ts:12-27`

Keep the exact object reference fast path (`table 18` → 1000). Then:

```
per query word w:  title 3 | caption 3 | tags 2 | summary 1   (every word must match somewhere, as today)
title starts with the whole query          +3
title equals the whole query               +10 (as today)
topic/app:  + log2(members + 1)            (47 members → +5.6; 5 members → +2.6)
topic:      narrative reviewed +2, unreviewed +0, none -2
object:     × 0.6 unless the query contains an object type word (table, page, codeunit, report, enum, query,
            xmlport, interface, permissionset, field, event) or a number, or the caption matched
non-object: +0.5 (as today)
```

Worked example for "subscription" (summary and title matches only, since only videos and posts have tags today):

| Row | Before | After |
|---|---|---|
| `Subscription billing` hub (title, 47 members, reviewed) | 4.5 | 3 + 3 + 5.6 + 2 + 0.5 = 14.1 |
| `Set up subscription billing` hub (title, 12 members, reviewed) | 4.5 | 3 + 3.7 + 2 + 0.5 = 9.2 |
| `Subscriptions` API hub (title, 5 members, none) | 4.5 | 3 + 2.6 − 2 + 0.5 = 4.1 |
| `What's New: Subscription Billing (2024 release wave 2)` video (title + tag) | 6.5 | 3 + 2 + 0.5 = 5.5 |
| `Codeunit 8005 "Create Subscription Header"` (title + summary) | 4 | (3 + 1) × 0.6 = 2.4 |
| `Page 8059 "Service Objects"` (summary only; caption "Subscriptions" matches) | 1 | 3 + 1 = 4 (no demotion) |

The function stays pure and synchronous; `tests/unit/live-search.test.ts` already imports `score`, extend it with
this table as assertions.

### 5.3 Grouped results page — `search.ts:49-70`, `site/src/pages/search/index.astro`

- `mountSearch` groups hits by a `groupOf(row)` (`topic`/`app` → `start`, `feature` → `roadmap`, `video`, `post`,
  `object`, `localization`, `source`, `digest`) in the fixed order of 3.1, renders each as `<section class="sr-group">`
  with `<h2>` and count, rows as today plus the new lines, per-group cap and "Show N more" (`<details>` like
  `EvidenceList`). Objects group by `app` inside their section (`Base Application` first, then alphabetical).
- Tabs replace the `<select>`: `<div role="tablist">` buttons with counts; `type=` query parameter maps to a tab
  (`start` covers `topic` and `app`). The existing URL contract (`?q=&type=`) keeps working for the MCP docs and
  the galaxy "All results" button (`galaxy.ts:428`).
- Status line: `312 results for "subscription": 3 to start with, 6 roadmap, 9 videos, 14 posts, 280 AL objects`.
- Styles in the page's `<style>` block as today; group headings use `.section-title`, rows keep `.row-title`,
  `.row-meta`, `.meta`, `.mono-meta`.

### 5.4 Galaxy panel — `site/src/scripts/galaxy.ts:424-432`, `site/src/scripts/live-search.ts:15-24`

- `hitsFor` returns the scored rows for the starred hits too (`stars: Row[]` next to `ids`), so the panel can show
  `path_label` and sort hubs by `members` (fallback `ev` on the node). Order: topics and apps, then features, then
  objects, then the rest; within a class by `members`/`ev`, then weight.
- `row()` gets an optional `<small class="g-path">` with the path label. One legend line above the Stars list.
- `nodeIdOf` handles the new `apps/<slug>` path → `app/<slug>` id (the generic rule `([a-z]+)s/` already does).
- Tests: `tests/unit/live-search.test.ts` for the order and the path label.

### 5.5 MCP — `packages/mcp/src/server.ts:78-83`

Add the new fields to `storeFields` and `caption` to `fields` with boost 3; boost `tagText` to 2 to match the site.
MiniSearch cannot express the member/narrative boosts in `searchOptions`; apply them in `toolSearch` as a re-sort
of the top 50 by `score × (1 + log2(members+1)/10)` with the narrative adjustment, so an agent asking for
"subscription" also gets the hub first. Document the formula in the tool description. `tests/unit/mcp.test.ts`
gets one assertion.

## 6. Tranche 3 — Related on every page, and app pages

### 6.1 `pipeline/link/related.ts` (new) → `data/links/related.json`

Deterministic, no LLM. Output: `{ schema: "bcobs-related@1", generated_by, pages: { [pageId]: { id, why }[] } }`,
at most 8 per page, ordered by `why` rank then title. The `why` strings are a closed set, each with its rule:

| Rank | `why` | Rule | Pages |
|---|---|---|---|
| 1 | `same title, different Learn section` | hub titles equal after lowercasing and trimming a trailing `s`, or share a word with IDF ≥ log(605/5) over hub titles and not on the stop list (`setup`, `set up`, `overview`, `general`, `reports`, `analytics`, `api`, `management`) | topic ↔ topic |
| 2 | `set-up guide for this feature` / `the feature this sets up` | `business-functionality/<x>` ↔ `set-up-business-central/set-up-<x>` by slug; also `<x>/set-up-<x>` children | topic ↔ topic |
| 3 | `both documented in <hub>` | objects that share a hub through `links.objects` (4.2); for a hub, other hubs sharing ≥ 2 objects | object ↔ object, topic ↔ topic |
| 4 | `same Learn section` | TOC siblings (same `parent`) | topic ↔ topic |
| 5 | `shares <n> videos/posts` | hubs linked to the same media (`data/links/topics.json`) | topic ↔ topic |
| 6 | `same app` | the app page for an object; the app's other hubs for an app | object → app, app ↔ topic |
| 7 | `implements <hub>` | an app → the hubs its objects are documented in | app → topic |

Inputs: `data/hubs/topics.json` (hub data, members, parent, children, titles), `data/index/docs-objects.json`,
`data/links/topics.json`, the apps manifest. All exist before any page renders in the nightly, so the stage runs in
`pipeline/orchestrator/nightly.ts` right after `code-derived` (line 285) as `phase("related", ...)`, and the
renderers and the graph read the file in the same run. Hub data is last night's when the TOC changed tonight; that
lag is one night and acceptable (the hubs phase at line 316 runs after the object pages anyway).

Rendering: the site reads `related.json` at build time (`site/src/lib/related.ts`, a loader like `relations.ts`)
and `Related.astro` draws the block (3.7) on topic, object, feature, video, post and app pages; the markdown pages
do not carry the list, so the validator and the frontmatter schemas are untouched and no page's `input_hash`
changes because a neighbour changed. The graph builder (`graph.ts`) adds `relates` edges from the file with `w: 0.5`
so Connections shows them without dominating the layout. `llms.txt` for agents: add one line per section index
pointing at `data/links/related.json` and its `why` vocabulary.

Tests: `tests/unit/related.test.ts` with a fixture of six hubs, four objects and one app covering every rule, the cap,
and the stop list ("Setup" never pairs).

### 6.2 App pages — type `app`

- `schemas/frontmatter.app.json`: base fields plus `app` (folder name), `namespace_root`, `system`, `present_in`,
  `counts: { objects, by_type: {...} }`, `links.topics`, `links.objects` (capped at 200, the page body lists all),
  `links.videos`, `links.posts`, `links.features`. `type: "app"`, `id: app/<slug>`; slug = folder name lowercased,
  spaces and dots to `-`.
- `pipeline/render/app.ts`: reads the apps manifest per major, the object pages' frontmatter under
  `content/objects/` (for names, captions and `links.topics`), `related.json`, the media mentions already resolved
  by the graph's `objectByName` (factor that map into `pipeline/link/mentions.ts` and reuse it), roadmap features by
  exact app-name containment. Writes `content/apps/<slug>.md`, `content/apps/llms.txt`. Runs in the nightly after
  `code-pages` and before `search-index`.
- Site: `site/src/content.config.ts` gets an `apps` collection; `site/src/pages/apps/index.astro` (list by system,
  with object counts) and `apps/[slug]/index.astro` (the page of 3.6; `Page.astro` with `kind="first-party app"`,
  `connections` on). `objects/index.astro` gains an "apps" facet linking to them.
- Graph: node type `app` in `schemas/graph.json` `type` enum and in `summaryNodes` (`graph.ts:144-148`) so every app
  is a star; `ev` = hubs + videos + posts.
- Search: `app` rows go into Start here (5.3), `TYPE["app"] = "first-party app"`.
- Validator: `expectedId` handles `apps/` through the `${type}s` rule; `content/apps` joins the sections list in
  `pipeline/validate/content.ts`; every renderer writes its own section `llms.txt` (`topic.ts`, `object.ts`, ...), so
  `app.ts` writes `content/apps/llms.txt` and the root `llms.txt` (grep `llms.txt` in `pipeline/` for where it is
  assembled) gains the section.
- Tests: `tests/unit/app-page.test.ts` on a fixture manifest with two apps.

## 7. Tranche 4 — page controls: explanations where Microsoft actually wrote them

### 7.1 Extractor — `pipeline/code/extract.ts`, `schemas/al-object.json`

- New per-page members, for `page`, `pageextension` (and later `report`, `reportextension` columns):
  - `controls[]`: `{ name, kind: "field" | "part" | "usercontrol" | "label", source_expr: string | null, caption,
    tooltip, group: string | null, properties: Record<string,string>, obsolete, clean? }`. Walk the `layout` node's
    `area`/`group`/`repeater`/`cuegroup`/`grid`/`fixed` containers recursively with `flat()` so `#if not CLEAN`
    regions keep their `clean` marks; `group` is the nearest container's Caption or name. For a pageextension the
    containers are `addfirst/addlast/addafter/addbefore/modify/movefirst/...`; record the anchor as `group`.
  - `actions[]`: `{ name, caption, tooltip, run_object: { type, name } | null, properties, obsolete, clean? }` from
    the `actions` node, same walk; `RunObject` values look like `Page "Service Object"` or `Report 8012` → parse
    type and name/id.
  - Properties go through the existing `properties()` (clipped at `PROP_MAX`); `tooltip = props.ToolTip ?? props.Tooltip ?? null`.
- Grammar: confirm the node type names in `@sshadows/tree-sitter-al` (pinned major 4, `config/tooling.json`) by
  dumping the tree of `tests/fixtures/al/` pages first; the extractor walks labelled nodes, not `.scm` queries.
- `schemas/al-object.json`: add `controls` and `actions` definitions; `schema` stays `al-object@1` with the new
  arrays optional, so old snapshots validate.
- `EXTRACTOR_VERSION` `"4"` (shared with 4.1). Size: W1 BC30 has 2,886 pages; at ~25 controls × ~200 bytes the
  page shard grows by roughly 15 MB per snapshot before gzip; `objects-page-N.jsonl` sharding already exists.
  Re-extraction order under `code_jobs: 1`: 30/apps, 30/w1, 29/apps, 29/w1, 28, then countries; about 30 nights
  if nothing else is scheduled. Write the order in `docs/RUNBOOK.md`.
- Memory: the page records are streamed by `iterSnapshot`; the relations pass (D51) keeps slim index entries, so
  `controls` must be excluded from the slim entry.

### 7.2 Field docs projection — `pipeline/code/field-docs.ts` (new) → `data/code/<major>/field-docs.json`

- For every page with a `SourceTable` (the `source_table` edge in the relations file), for every control with
  `kind: "field"` and a `tooltip`, parse `source_expr`: accept `Rec."Field Name"`, `Rec.FieldName`, `"Field Name"`,
  `FieldName`; reject expressions with `(`, `+`, `.` after the field (`Rec."No." + ...`, `Format(...)`, `CurrPage.
  ...`) and variables (not resolvable without code). Normalise with `unquote` and compare case-insensitively against
  the table's field names (and the fields of its tableextensions in the same major).
- Choose one tooltip per (table, field): Card and Document pages first, then List, then others; ties by lowest page
  id. Record `{ tooltip, page: "page/8060", control: "No." }`. Output `{ schema: "bcobs-field-docs@1", major,
  tables: { "table/8057": { "No.": {...} } } }`; one file per major, read by the renderer for the page's
  `source_major`.
- Also export `data/index/field-docs.json` for the preferred major (agents and the MCP) next to `fields.json`.
- Expected coverage after the apps and W1 snapshots are re-extracted: W1 table fields explained ~42% → ~80%;
  Subscription Billing ~5% → ~90% (every list and card control in BCApps carries a ToolTip by the repository's
  own rule). Measure and put the real numbers in the D65 text.

### 7.3 Renderer — `pipeline/render/object.ts`

- Table pages: 4.1 falls back to the projection (`via Page 8060 "Service Object"` linked).
- Page pages: the two sections of 3.5. The bound-field link needs a stable anchor per field row: render the Fields
  table rows as `<a id="field-3">`? Markdown tables cannot carry ids; instead give the table page an anchor list
  after the table, or link to `#fields` and rely on the browser find. Decision for the implementer: a `<!-- -->`
  free approach is to render the field number as `[3](#f3)` with an `<a id="f3"></a>` on the same row through a
  remark plugin in `site/astro.config.*`; if that is too much for a first pass, link to `#fields`.
- Tests: `tests/unit/code-extract.test.ts` with a fixture page (card, with a repeater, a group, `#if not CLEAN27`
  region, an action with RunObject) and a pageextension; `tests/unit/field-docs.test.ts` for the parser and the
  precedence.

## 8. Phases and ordering

| Phase | Content | Exit criterion |
|---|---|---|
| 1 | Tranche 1 (4.1–4.5): one PR, one nightly | `Table 18` shows 104 explanations; `Table 8057` has 12 Learn links and 3 hubs; the `Subscription billing` hub has `links.objects` (27) and the objects section; `Page 8059` and `Table 8057` are in `sales` in `data/graph/summary.json` |
| 2 | Tranche 2 (5.1–5.5): one PR, site build | search "subscription" shows Start here with the hub first; "service object" finds Page 8059 through its caption; MCP `search subscription` returns the hub first |
| 3a | Related (6.1): one PR | the Cloud Migration API hub's Related names the SRB hub with `same title, different Learn section`; `Subscription billing` lists `Set up subscription billing`; `Table 8057` lists `Table 8068`-class siblings with `both documented in ...` |
| 3b | App pages (6.2): one PR | `/apps/subscription-billing/` exists, is a star in `sales`, appears in Start here |
| 4a | Extractor (7.1): one PR, then ~30 re-extraction nights | `data/code/30/apps/objects-page-*.jsonl` records carry `controls` and `actions`; parse error count unchanged |
| 4b | Projection and renderer (7.2–7.3): one PR after 30/apps and 30/w1 are re-extracted | `Table 8057` fields show `via Page 8060 "Service Object"`; page pages have Fields and Actions sections; coverage numbers in D65 |

Phases 1 and 2 can ship the same week. 3a does not depend on 2. 3b depends on 4.2 (hub → objects). 4b depends on 4a
and on 4.1's helper.

### 8.1 Tranche 1 built (2026-10-07, `dev/next`), deviations

Verified locally by rendering the object and topic pages and the graph from the committed `data/` (outputs
discarded, no nightly): `Table 18` (BC29 facts) explains 109 of 165 fields, 105 by ToolTip and 4 by Caption (the 104
of the spec is the BC30 count); `Salesperson Code` shows its TableRelation, `Balance` its FlowField. `Table 8057` has
12 `links.learn` and 3 `links.topics`, its header line names Page 8059 (12) and Page 8060 (1). The `Subscription
billing` hub has 27 `links.objects` and `coverage.code` 27 and lists `Page 8059 "Service Objects" · captioned
"Subscriptions" · on Table 8057 "Subscription Header" · via Contracts`; 272 of 605 hubs get objects. In
`data/graph/summary.json` Page 8059 is in `sales` and `development` drops from 158 to 113 nodes; Table 8057 is not a
summary node (its page's namespace places it in `sales`). `validate:content` accepts the `object/...` ids.

Deviations from 4.1-4.5:

1. **No `EXTRACTOR_VERSION` bump.** The extractor reads `ToolTip` case-insensitively (`toolTipOf`), and the renderer
   falls back to the same lookup over `field.properties`, which already holds every property: records extracted
   before the fix explain their `Tooltip` fields today. Bumping to 4 now would re-extract every snapshot (about 30
   nights of `code_jobs: 1`) for 16 fields, and tranche 4 would need a second full cycle for `controls`; tranche 4
   bumps to 4 and picks the fix up.
2. **Explanation provenance.** A Caption fallback carries `<small>caption</small>`; the field's own ToolTip carries
   none. A one-line legend above the Fields table says so.
3. **TableRelation notes** link the targets the relations pass resolved for that field (`table_relation` edges with
   `via` = the field, up to 3) instead of parsing the first identifier again; a relation with a filter or a field
   keeps its source text in parentheses. Unresolved relations show the source text.
4. **Hub objects** come from the object pages under `content/objects/` (rendered before the hubs in the nightly) and
   the relations file of each object's `source_major`, not one preferred major, so a page only in BC30 still gets
   its table. Objects Learn names that have no object page are counted in one line, not linked. `via` names the
   direct subtopic. The section keeps the raw form ids only when nothing joins.
5. **Site:** the object page's Neighbourhood takes `links.learn` (titles from any object page's Learn evidence), not
   the evidence list, so inherited Learn pages show; object pages gain a "Learn pages" stat and the hub's "AL objects"
   stat links the new section.
6. **`NS_SYSTEM` extras** beyond the table in 4.4, by the same rule: `excelreports` (reporting), `dataadministration`
   (administration), `peppol` (integration), `utility` (platform). `demodata` → `platform` moves Contoso objects that
   `Microsoft.DemoData.Finance`-style namespaces used to place in business systems. Quality management hubs had no
   system: `config/taxonomy.json` gains the alias `quality management` on `inventory`, matching the app.

### 8.2 Tranche 2 built (2026-10-07, `dev/next`), deviations

Verified locally by rendering the object pages and the search index from the committed `data/` and `content/` (topic
pages as committed, so hubs still carry `coverage.code: 0`; outputs discarded, no nightly) and loading the built site in
headless Chrome: `/search/?q=subscription` reads `453 results for "subscription": 12 to start with, 13 videos, 12 posts,
384 AL objects, 32 code changes`, Start here opens on `Subscription billing` / `Business functionality › Sales` /
`47 Learn pages · 2 videos · reviewed`; `?type=video` opens the Videos tab. `service object` lists `Page 8059 "Service
Objects" captioned "Subscriptions"` under Subscription Billing (found by its name; `subscriptions` puts it first among
objects through the caption). Home `#q=subscription`: the first star is the hub with its path, the legend shows, the live
region reads `14 stars, 439 pages without a star. First: Subscription billing (Sales).` MCP keyword `search
subscription` returns the hub first. Ten queries of 11.2 checked: the feature hub leads Start here for subscription,
e-document, intercompany, item tracking, dimension and approval.

Deviations from 5.1-5.5:

1. **`path_label` follows 5.1** (the TOC path above the hub, without its own title, which the row already shows);
   the examples in 3.1/3.2 that include the title are not followed. Longer than 40 characters: `… › <last two>`.
2. **`stats`** (new record field) carries the row's third line (`47 Learn pages · 27 objects · 2 videos · reviewed`;
   app pages `372 objects · 6 Learn hubs · 2 videos`); 5.1 had only the sum `members`.
3. **Scoring.** The caption counts like the title, once per word (not title + caption); a hub's tags (its ancestors'
   titles) do not score a word already in its own title, or `Subscription billing analytics` outranks its parent;
   starts-with/equals test an object's name or caption, not `Page 8059 "..."`; the `log2(members+1)` bonus needs a
   title or tag match (summary-only, `Finance`, 256 pages, topped `e-document`); the caption does not lift the ×0.6
   demotion (it lifted `Permission set 6612 "FS - Objects"` above Page 8059 for `service object`). So the 5.2 table
   reads API hub 7.1 (starts-with applies) and Page 8059 4.2; the order is the spec's. Ties: newest, bigger hub, title.
4. **Groups:** `Code changes` (D61 `change` pages, not in 3.1) sits after AL objects; an `Other` tab shows only when an
   unknown type lands. Caps: All shows 5 / 10 / 10 per app with "Show N more" up to 50; a tab shows 50 (25 per app) up
   to 500 (200). Enter opens the first result of the active view.
5. **Galaxy order** within a class is score, then members/`ev`, then weight: members first put `Sales` (133 pages)
   above the feature hub. Star-less video and post rows use the media shapes the legend names.
6. **MCP:** the factor `(1 + log2(members+1)/10) × (reviewed 1.1 | unreviewed 1 | none 0.9)` re-sorts the keyword and
   the semantic top 50 each before the D63 fusion (the fused list carries ranks only); topic tags drop the hub's own
   title words, as on the site; results print `in: <path_label>`, the stats line and `captioned "..."`.
7. **Captions** (`object.ts` `captionText`): a Caption with `Comment`/`MaxLength` parts is its string literal, a
   `Locked = true` caption (94 objects, API entity names) is none; the field Explanation's Caption fallback uses it too.
8. **App pages (3b):** records of type `app` get `path_label` (system label), `members` and `stats`, and land in Start
   here; nothing writes such pages yet, so nothing changes until tranche 3b does.

### 8.3 Tranche 3 built (2026-10-07, `dev/spec`), deviations

Verified locally by re-rendering the object pages, then Related, the app pages and the graph from the committed
`data/` (outputs discarded, no nightly). `data/links/related.json`: 10,068 pages, 33,108 rows (by rank 1: 983, 2: 67,
3: 20,140, 4: 1,935, 5: 2,861, 6: 6,987, 7: 135), 3.6 MB. The Cloud Migration API `Subscriptions` hub lists
`Subscription billing` and the three other SRB hubs with `same title, different Learn section`; `Subscription
billing` lists `Set up subscription billing` (`set-up guide for this feature`); `Table 8057` lists six SRB tables
with `both documented in Set up sales > Set up subscription billing`, `Table 252` and its app (`same app`). `Table
8068` itself is not in 8057's eight: they share only `Contracts`, a larger hub; 8068's own list names 8002, 8052, 8059, ...
with `both documented in Sales > Subscription billing`. 96 app pages (6 of the 102 folders have no object page);
`app/subscription-billing` (372 objects, 5 hubs) is a star in `sales` with `ev` 5. `validate:content` passes.

Deviations from 6.1-6.2:

1. **Phase order.** `related` runs after `code-pages`, not after `code-derived`: a table's hubs come through its pages
   (4.3), and only the object pages carry them. `app-pages` follows it; both run before `search-index`.
2. **One reason per pair**, the best rank; the set-up slug rule is checked first and wins over shared title words.
   "Different Learn section" means neither is an ancestor of the other and they are not siblings. Title words: three
   or more letters, a trailing `s` trimmed, the stop list plus English function words.
3. **The closed set grew** (the file lists it in `why`): hub ↔ hub on objects reads `shares <n> AL objects`; videos
   and posts get `both linked to <hub>` (5) and `names objects of this app` (6); features and apps `app name in the
   feature title` (6); hub → app `implemented by <app>` (7); app ↔ app `both documented in <hub>` (3).
4. **Order inside a rank**: objects of the same AL type first, then more shared hubs, then the smaller hub (the one
   the reason names). At most 6 rows of one rank before the others get theirs, then filled to 8, so an object keeps
   its app row. The file carries `nodes` (`id: [title, kind, system]`) for the block, one page per line.
5. **Graph.** Related edges (`relates`, w 0.5) are in `full.jsonl` and the ego files, so Connections shows them, but
   not in `summary.json`, the node weights, `cross` or `sysedges`: in the summary they doubled it (963 KB to 1.76 MB)
   and they restate links that already weigh. App → object edges are `implements` and weigh nothing either, so the
   300 summary objects are unchanged; app → hub edges are `documents`. `full.jsonl` grows from 2.9 MB to 5.3 MB. Apps
   sit on their system's outer arc, the layout's place for nodes without a TOC position.
6. **Site.** `Related` is mounted once in `Page.astro` after the locator and Connections, so every information page
   gets it where the file has rows; on object pages that is the side column under the one-hop diagram.
7. **App pages.** "Videos and posts" keeps the exact `objects_mentioned` rule, so Subscription Billing lists none
   (its two videos are linked to the hub by link/topics.ts and name no object exactly). The markdown carries no
   Related list (6.1). The validator needed no code: it has no sections list and `expectedId` covers `apps/`;
   `frontmatter.base.json` gains `app` in `type` and `id`. Search records for apps are tranche 2's.

### 8.4 Tranche 4a built, deviations

Built 2026-10-07, on main. The bump re-ran every code job at once through an unlimited `pillars=code` dispatch (one
major takes under five minutes), so it did not compete with the BC23-28 backfill (D62). `EXTRACTOR_VERSION` is `"4"`; pages and page extensions carry `controls` and `actions`
(always present on those two types, `[]` when empty; absent on every other type and in older records);
`schemas/al-object.json` describes both, still `al-object@1`. Fixture `tests/fixtures/al/pages.al` (a card with a
group, a grid label, a `#if not CLEAN27` field, a part, a usercontrol and actions with `RunObject`; a list with a
repeater and cuegroup actions; a page extension with anchors and `modify`); parse errors on the fixtures unchanged
(0, 0, 1, and 0 on the new one).

Measured on the BCApps `main` checkout of the runner cache (`47f79360`, BC30), extracting W1 and the first-party apps
into a scratch directory, extractor 3 against 4:

| Measure | W1 | apps |
|---|---|---|
| page records / page extension records | 2,893 / 161 | 1,392 / 743 |
| controls / actions | 40,706 / 12,421 | 17,016 / 3,090 |
| field controls with a ToolTip | 12,285 of 39,194 (31%) | 8,599 of 15,916 (54%) |
| bytes per page record, 3 → 4 | 1,641 → 6,737 | 1,290 → 4,384 |
| bytes per page extension record, 3 → 4 | 683 → 1,765 | 710 → 1,889 |
| page shards, 3 → 4 | 4.7 → 19.5 MB | 1.8 → 6.1 MB (pages) + 0.5 → 1.4 MB (extensions) |
| whole snapshot, 3 → 4 | 43.7 → 58.6 MB (+34%) | 17.0 → 22.2 MB (+31%) |
| extraction time, 3 and 4 (two to three runs) | 8.6-11.0 s and 8.6-9.5 s | 3.3-4.0 s and 3.3-3.9 s |

About 250 bytes per control and 375 per action, as 7.1 estimated. Both snapshots gzip from 6.6 to 8.6 MB. The country
overlays add an estimated 7 MB (BC30, 1,306 overlay pages) and 11 MB (BC29, 1,891) at the W1 rate; skeletons
(BC23-27) do not grow. Extraction time does not move beyond run-to-run noise; peak memory of the scratch run rose from
535-625 MB to about 680 MB. The BC28 sandbox-history checkout extracts cleanly (3,013 page records, 40,271 controls,
12,401 actions, every record valid). Every page record re-extracted from the same checkout has the same `hash` as
under extractor 3 and is byte-identical once `controls` and `actions` are removed.

Deviations from 7.1:

1. **Controls and actions are not in the object hash.** `objectHash` leaves them out, so a page hashes as it did:
   re-extracting one major at a time does not mark every page changed against the majors not yet re-extracted, the
   BC23-27 skeletons stay comparable, overlays still drop a country copy identical to W1, and no version or country
   diff changes (`diff.ts` also drops both arrays on reading; test `page controls and actions (extractor 4) change
   no version or country diff`). The cost: a layout-only change is not a change in the timelines and diffs, exactly
   as before. Tranche 4b must add a signature of the controls to the object page's `input_hash`
   (`pipeline/render/object.ts`), which today takes `o.hash`.
2. **Shape additions.** Controls gain `kind: "modify"` for a page extension's `modify(X)` (it can set the ToolTip of
   a base control); actions gain `kind` (`action`, `customaction`, `systemaction`, `fileuploadaction`, `modify`) and
   `group`; `run_object` is `{ type, name, id }` with exactly one of `name`/`id` set (both null when the value was
   clipped). ToolTip and Caption sit in their own members and are removed from `properties` (any casing), so they are
   not stored twice; `RunObject` stays in `properties` as written.
3. **What is left out:** `systempart` (Links, Notes), containers themselves (their label is the members' `group`),
   promoted `actionref`s and separators, `move*` statements, views, and report and xmlport request pages.
4. **`group`** is the nearest container's Caption, else its name, else the area in its documented spelling
   (`area(factboxes)` → `FactBoxes`); captions are verbatim, `&Navigate` keeps its accelerator. In a page extension
   the anchor (`addafter(Name)`) is the group only for members directly under it; a group inside the anchor wins.
   Cuegroup actions (inside the layout) are in `actions` with the cuegroup as group.
5. **`source_expr`** is the binding as written for fields (`Rec."No."`, `Format(Rec.Status)`), the unquoted
   object name for a part or usercontrol, null for labels and `modify`; clipped at 300 like properties.
6. **`relations.ts` is unchanged:** its slim index entry was already `{ key, app, w1 }`, never the object.
7. **Re-extraction order and length.** One code item is a whole major (W1, apps and every country), so the order of
   7.1 by snapshot (30/apps, 30/w1, ...) is not something the queue can do, and it is far shorter than 30 nights. The
   planner sorts the undated code items by id: after the bump `code/bcapps/29` runs first, then `code/bcapps/30`,
   then `code/sandbox-history/23` to `28`, one a night (`code_jobs: 1`, not scaled by the guard). BC23-27 have never
   run and BC28 is already stale for extractor 3, so the bump adds exactly one night (bcapps/29) ahead of the D62
   backfill: eight nights for everything, 30/apps on the second. If the bump lands after BC23-27 ran at
   extractor 3, those five re-run for nothing (their skeletons do not change), so it is cheaper pushed early.
   `code/bcapps/30` follows BCApps `main` and goes stale whenever `main` moves, and it sorts before the
   sandbox-history items; on such nights it takes the slot (open question below, not caused by this tranche).
   Progress: `docs/RUNBOOK.md`, "Re-extraction after an extractor bump".

Open, for the owner: whether `code/bcapps/30` should yield to the backfill (for example by sorting stale items that
already have a snapshot after never-extracted ones), since otherwise the BC23-28 history lands only on nights when
neither BCApps branch moved.

### 8.5 Tranche 4b built, deviations

Built 2026-10-07, on main. `pipeline/code/field-docs.ts` (new) derives
`data/code/field-docs/<major>.json` (`bcobs-field-docs@1`, `schemas/field-docs.json`) in `refreshCodeDerived`, right
after the relations it joins through; `objects-index.ts` copies the preferred major's to `data/index/field-docs.json`.
Table and tableextension Fields fall back to it (`via [Page 8060 "Service Object"]`), pages and page extensions get
**Fields on this page** and **Actions**, and the object page `input_hash` gains `layout:` (controls and actions) and
`fd:` (the field docs a table uses). Verified by deriving and rendering from the committed `data/` (every major at
extractor 4; outputs discarded, no nightly): `Table 8057` (BC29 facts) explains 47 of its 64 fields
`via [Page 8060 "Service Object"]` (row `No.`: "Specifies the number of Subscription."); 5,958 of 5,997 page pages
get Fields on this page and 2,827 Actions, 1,591 of 2,130 page extension pages Fields; 7,214 table and tableextension
rows fall back to a bound control; `validate:content` passes. Checked again after the nightly of 2026-10-07 that
re-extracted BC30 (`909a88310`): same numbers.

| Table fields explained, BC30 (BC29 within a point) | own ToolTip | + bound control | + Caption |
|---|---|---|---|
| W1 (30,774 fields) | 12,962 (42%) | +2,660 → 15,622 (51%) | 18,593 (60%) |
| first-party apps (23,537) | 1,363 (6%) | +3,880 → 5,243 (22%) | 7,911 (34%) |
| Subscription Billing (1,068) | 51 (5%) | +860 → 911 (85%) | 923 (86%) |

BC30 projection: 18,978 field controls with a ToolTip on a page whose table resolves; 12,905 bind a field, 2,988 are
expressions or other records (`SalesLine."No."`, `Format(...)`, matrix arrays), 3,085 name no field (page variables,
`Rec.SystemCreatedAt`); 9,074 fields in 1,084 tables explained. The file is 1.9 MB per major.

Deviations from 7.2-7.3:

1. **W1 gains 9 points, not ~38.** 7.2 expected ~80%; W1 already carries its ToolTips on table fields, only 31% of its
   field controls have one (8.4), and the fields still without an explanation are mostly on no page. Subscription
   Billing lands at 85%, as expected.
2. **Path** `data/code/field-docs/<major>.json`, not `data/code/<major>/field-docs.json`: next to `relations/` and
   `deprecations/`, so a major's folder keeps holding only snapshots (several readers list it as country layers).
   Re-derived when the W1 or apps commit or extractor changes, or `FIELD_DOCS_VERSION`.
3. **Page extensions count.** Their controls bind to the base page's SourceTable, and tableextension fields sit under
   the base table, so tableextension pages get the `via Page extension ...` fallback too. A page extension's
   `modify(X)` ToolTip is not joined (it names a base control, not a field). Ranking: an obsolete or `#if not CLEAN`
   control or page after a current one, then Card/Document, List, others (no PageType = Card), then pages before page
   extensions, lowest id, source order.
4. **Fields on this page** is one table `Group | Control | Shows | ToolTip` with the group printed once per run, not
   a heading per group; every control kind is listed (part linked when its page resolves, add-in, label, `modifies`);
   a field control without a ToolTip shows its bound field's, marked `from the table field`. Bound fields link to
   `table/<id>.md#fields` (the 11.7 fallback). **Actions** is `Group | Action | ToolTip | Runs`, RunObject linked
   when the object has a page. `&` accelerators are stripped from captions and groups (`&&` reads `&`).
5. **Extras:** frontmatter `counts.controls` / `counts.actions` (optional in the schema) feed two site stats; the
   header line shows `captioned "..."` for every object whose Caption differs, not only pages.
6. **Size:** `content/objects` grows from 107.5 to 125.5 MB of markdown (+17%); a page page roughly triples (Page
   8060: 4.4 to 14.2 KB). The site build stays at about 1m16s for 28,812 pages.

Open, for the owner: whether the +18 MB of object markdown is acceptable or the Fields table should be capped on
very large pages; joining `modify(X)` ToolTips through the base page's control; the MCP reading
`data/index/field-docs.json` (another lane owns `packages/mcp`).

## 9. Files

| File | Change |
|---|---|
| `pipeline/render/object.ts` | Fields table with Explanation and Notes (4.1), enum captions, event docs; table inherits Learn/topic links through pages (4.3); `caption` frontmatter; page Fields/Actions sections (7.3) |
| `pipeline/render/topic.ts` | `links.objects`, `coverage.code`, objects section (4.2) |
| `pipeline/code/extract.ts` | `Tooltip` spelling, `EXTRACTOR_VERSION` 4, `controls`/`actions` (7.1) |
| `schemas/al-object.json` | `controls`, `actions` (7.1) |
| `pipeline/code/field-docs.ts` (new) | projection (7.2) |
| `pipeline/code/relations.ts` | slim entry excludes `controls`; no edge changes |
| `pipeline/lib/systems.ts` | `NS_SYSTEM` entries and the rule comment (4.4) |
| `config/taxonomy.json` | aliases only where needed (4.4) |
| `pipeline/link/graph.ts` | topic → object edge is `documents`; `relates` edges from `related.json`; `app` nodes in the summary (4.2, 6.1, 6.2) |
| `schemas/graph.json` | node type `app` |
| `pipeline/link/related.ts` (new) | Related stage (6.1) |
| `pipeline/link/mentions.ts` (new, factored out of `graph.ts`) | object-by-name resolution reused by app pages |
| `pipeline/render/app.ts` (new), `schemas/frontmatter.app.json` (new) | app pages (6.2) |
| `pipeline/render/search.ts` | `path_label`, `tags` for topics, `caption`, `members`, `narrative` (5.1) |
| `pipeline/render/objects-index.ts` | `field-docs.json` export (7.2) |
| `pipeline/orchestrator/nightly.ts` | `related` phase after `code-derived`; app pages after `code-pages` |
| `pipeline/validate/content.ts` | `objects` in `ID_LINKS`; `apps` section |
| `schemas/frontmatter.object.json` | optional `caption` |
| `site/src/scripts/search.ts` | scoring (5.2), grouping and tabs (5.3) |
| `site/src/pages/search/index.astro` | tabs, group markup and styles (5.3) |
| `site/src/scripts/live-search.ts`, `site/src/scripts/galaxy.ts` | ordered panel with path labels and legend (5.4) |
| `site/src/lib/related.ts` (new), `site/src/components/Related.astro` (new) | the Related block (3.7, 6.1) |
| `site/src/pages/{topics,objects,features,videos,posts}/**/index.astro` | mount `Related`; topic header stat for objects |
| `site/src/content.config.ts`, `site/src/pages/apps/index.astro`, `site/src/pages/apps/[slug]/index.astro` | app pages (6.2) |
| `site/src/pages/objects/index.astro` | apps facet |
| `packages/mcp/src/server.ts` | `storeFields`, `caption` boost, re-sort (5.5) |
| `docs/RUNBOOK.md` | re-extraction order and how to check progress |
| `docs/DECISIONS.md` | D65 at ship time (section 12) |
| `docs/PLAN.md` | a milestone row "M7 discovery" (M6 is the BCApps pull-request spec) citing this spec and D65 |
| `tests/unit/{code-extract,object-page,topic-page,graph,live-search,related,app-page,field-docs,mcp}.test.ts`, `tests/fixtures/al/*.al` | sections 4.5, 5.2, 5.4, 6.1, 6.2, 7.3 |

## 10. Verification

1. `npm run typecheck && npm test && npm run validate:content`; `npm run nightly -- --dry-run` (LLM_CACHE_ONLY) on
   the committed data, then diff `content/` and `data/index/`, `data/graph/`.
2. `content/objects/table/18.md`: 104 of 165 rows have an Explanation; the Notes column shows `TableRelation`
   for `Salesperson Code`, `FlowField` for `Balance`.
3. `content/objects/table/8057.md`: `links.learn` has 12 URLs, `links.topics` 3 ids, the header line names
   `Page 8059` and `Page 8060`; after 4b the `No.` row reads `via Page 8060 "Service Object"`.
4. `content/topics/business-central/business-functionality/sales/subscription-billing.md`: `links.objects` 27,
   `coverage.code` 27, the objects section lists `Page 8059 "Service Objects" · captioned "Subscriptions" · on Table
   8057 "Subscription Header"`; `npm run validate:content` accepts the `object/...` ids.
5. `data/graph/summary.json`: nodes `object/page/8059` (if in the top 300) and `topic/.../subscription-billing` have
   `group: "sales"`; `grep -c '"development"'` drops by the app object count; `data/links/related.json` has the
   Cloud Migration API `Subscriptions` → SRB hub entry with `same title, different Learn section`.
6. Site: `cd site && npm run build && npm run preview`. Search "subscription": Start here first, the hub's row shows
   `Sales › Subscription billing` and `47 Learn pages · 27 objects · 2 videos · reviewed`; tabs switch groups; the
   `?type=video` URL opens the Videos tab. Search "service object": `Page 8059` appears with `captioned
   "Subscriptions"`. Home page: type "subscription", the panel's first star is the hub with its path, the legend
   shows. Related block present on the API hub, the SRB hub, Table 8057, the Subscription Billing video, and a post.
   Check at 1440, 1024 and 390, dark and light; keyboard through the tabs and the Related "Show more".
7. MCP: `npx bc-observatory` in a scratch dir, `search {"query":"subscription"}` returns the hub first;
   `get_object` for `table/8057` output contains `Specifies` lines.
8. Budget and policy: the nightly run report shows `llm_calls` unchanged against the previous night; `npm run
   check:leak` is green (nothing community-derived is read or written by these stages).
9. Tranche 4 progress: `data/code/30/apps/manifest.json` `extractor` reads `4`; `grep -c '"controls":\[{' 
   data/code/30/apps/objects-page-1.jsonl` is in the hundreds; `parse_errors` not above the previous manifest.

## 11. Risks and open questions

1. **Re-extraction nights.** Tranche 4 holds the single `code_jobs` quota for about a month and competes with
   nothing else only if no other extractor change lands meanwhile. Mitigation: order 30/apps first (the Subscription
   Billing payoff), and add a manual entry point (`npm run code:job -- --major 30 --layer w1`, not present today; `pipeline/code/job.ts`
   exports the job function the nightly calls) for the Mini outside the nightly window if the owner wants it faster.
2. **Caption matches widen hits on common words.** "Name", "Description", "Type" are captions on thousands of
   fields but only page captions enter the index, and the ×0.6 object demotion bounds the effect. Measure before
   and after on ten queries: subscription, service object, e-document, intercompany, posting group, reminder,
   item tracking, dimension, approval, job queue.
3. **System placement of QualityManagement, Intercompany, WithholdingTax, ExciseTaxes** needs a look at the current
   Learn TOC; the table in 4.4 is the proposal, the rule is what matters.
4. **`path_label` length** for deep dev-itpro hubs. Left-truncate to the last two parts; the full path is on the
   hub page.
5. **Same-title heuristic** can pair unrelated hubs. The IDF threshold and the stop list are the guard; the test
   fixture must include "Setup" and "Overview" hubs that must not pair. If a wrong pair shows up in production, the
   fix is a stop-list word, not a hand override (no `data/overrides` entry for Related; it is derived).
6. **Hub weights jump** when 1,702 tables and 605 hubs gain `documents` edges: the galaxy's brightness scale is
   relative (`weight` per node), so the picture shifts toward hubs with code. That is the intended reading of the
   galaxy ("brightness = number of sources", D03); confirm visually before merging phase 1.
7. **Field anchors in markdown tables** (7.3) have no clean solution in plain markdown; the fallback `#fields`
   link is acceptable for the first pass.
8. **Agents reading `links.objects` on hubs** get 27 ids where there were none; the root `llms.txt` and
   `content/topics/llms.txt` should say that hubs now link objects and that `Related` lives in
   `data/links/related.json`.

## 12. D65, as appended to `docs/DECISIONS.md` (2026-10-07)

- **D65 Discovery: render the extracted explanations, join hubs to their objects, rank hubs by size, derive Related
  from structure, place first-party apps by the Learn branch that documents them.** The walkthrough "new to
  Subscription Billing, search 'subscription'" failed on four counts that were all joins or rendering: the field
  ToolTips the extractor stores (12,946 in W1 BC30) were never printed; the `ms.search.form` join in
  `docs-objects.json` was used by object pages but not by hubs, so hubs said "not yet joined"; tables, which Learn
  never names directly, inherited nothing from the pages on them; search scored a 47-page reviewed hub like a 5-page
  API index and below any codeunit whose summary held the word. Fixes, all deterministic (`docs/specs/discovery.md`):
  (a) Fields tables show Explanation (ToolTip, else a page control's ToolTip with the page named, else Caption) and
  structural Notes; the `Tooltip` spelling counts; `EXTRACTOR_VERSION` 4. (b) Hubs fill `links.objects` and
  `coverage.code` from `by_doc` and list their pages, reports and the tables behind them; tables take `links.learn`
  and `links.topics` from their pages; topic → object edges are `documents`. (c) Search records carry a path label,
  TOC words as tags, the object caption, member count and narrative state; the score adds `log2(members+1)` and a
  review bonus for hubs, demotes objects on generic queries, and the results page groups Start here / Roadmap /
  Videos / Posts / AL objects by app. (d) `data/links/related.json`, derived from the TOC, the object join, shared
  media and same-title-other-section, with a closed set of reasons, rendered as a Related block and `relates` edges;
  one page per first-party app. (e) `NS_SYSTEM` gains the first-party apps; `development` is for developer tooling
  only. (f) Page layout and actions are extracted (`controls`, `actions`), and a projection gives table fields the
  ToolTip of the control bound to them, Card before List, with the page as provenance: Subscription Billing
  fields explained 5% → N%, W1 42% → N%. No LLM call was added; the nightly's `llm_calls` is unchanged.
