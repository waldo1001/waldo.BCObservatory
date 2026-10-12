# Search finds Learn articles: identifiers from Learn's code spans, one lean Learn shard, site and MCP

Status: built, 2026-10-12 (section 12 records what was built and where it differs). Decision: D94. Milestone: M32.
Owner: waldo.
Scope: the fetched stage of git pages and a backfill phase in the full nightly (`pipeline/fetch/git-page.ts`,
`pipeline/orchestrator/nightly.ts`, `schemas/run-report.json`); the search index writer (`pipeline/render/search.ts`);
the shared scorer package (`packages/search`); the site's search page and index loader; the MCP `search` tool, its
description and the server instructions. Every claim below was verified against the tree at `04b705c8fb` on
2026-10-12. Not in scope: body text of Learn pages (D01: Learn stays canonical), pages of our own for Learn articles,
the Ctrl+K palette, the home live search, `get_object`, `cat`, `localization`, `whats_new`, `ls`.

## 1. Goal

On 2026-10-12 a search for `includeSourceInSymbolFile` returned nothing on the site and in the MCP, although Learn's
"Resource exposure policy setting" (`dev-itpro/developer/devenv-security-settings-and-ip-protection.md`) documents it.

- A search record holds name, title, caption, tags and summary of one page of ours (`packages/search/src/score.ts:34`).
  Learn articles are no pages of ours: they are evidence rows of the 605 topic hubs, so none had a record.
- The committed data already holds what a record needs for all 8,050 Learn items in `data/manifest/docs/`: title, url,
  `meta.description` (8,008), `meta.ms_date` (8,049), and for 3,385 an extraction with a summary and systems in
  `data/extract/docs/`. Summaries are model text: they name 25 distinct camelCase identifiers in all.
- Identifiers live in Learn's markdown, in code spans: on the 4,365 pages whose blobs the Mac's mirrors hold, 1,089
  distinct identifiers (case-folded) on 476 pages, p50 0, p99 8 per page, 34 KB in all.
- Only 3,462 Learn pages are listed by a hub (`links.learn` of a topic page). Most of the other 4,588 are reference
  sections the hubs do not cover: AL methods 1,848, diagnostics 922, API v2.0 358, properties 351, analyzers 281,
  API v1.0 237, triggers 151, attributes 41.

After: `includeSourceInSymbolFile`, `include source in symbol file`, `resourceExposurePolicy` and `allowDebugging`
find the Learn articles that document them, on the site (a "Learn articles" group) and in the MCP (`type learn`),
with each article's URL and the hub that lists it; hubs, objects and symbols rank as before.

## 2. Reader- and agent-facing behaviour, after

- **Site search page.** A "Learn articles" tab and group after "Start here" (five rows under All, up to 50 in its
  tab). A row: the article's title opening learn.microsoft.com in the same tab, the hub that lists it as a link to the
  hub page ("… › Development environment › Configure the development environment"), "Learn article", the official
  badge, ms.date and the summary. The Learn shard loads with the first non-empty query, after the hubs and media; the
  status line says "(loading AL objects…, Learn articles…)" meanwhile and the results so far stay usable. Other pages,
  the home live search and the palette never load it.
- **MCP `search`.** A Learn hit reads
  `- Resource exposure policy setting [learn, official, 2024-01-03] url=https://learn.microsoft.com/... [keyword]`,
  then `in: <hub label> (hub: <hub path>)` and the summary. The header adds "a Learn article's url opens on
  learn.microsoft.com, cat(hub) reads its hub" when a Learn hit is shown. `type: "learn"` returns Learn articles only.
  Learn hits rank by the shared scorer among the other pages; they are keyword hits only (not in the meaning list).
  `ls`, `whats_new`, `blog_footprint`, `get_object` and `cat` are unchanged.
- **Data.** `meta.identifiers` on every fetched Learn item; `data/index/learn-<sha12>.json` and a `learn` entry in
  `data/index/index-manifest.json`. No page under `content/` changes.

## 3. Decisions

Draft D94:

> **D94 Search finds Learn articles by what they document.** On 2026-10-12 `includeSourceInSymbolFile` found nothing,
> although Learn documents it: Learn articles are evidence rows of the hubs, not pages, so no search record held them,
> and identifiers live in Learn's code spans, which nothing kept. The fetched stage now records `meta.identifiers`:
> single-backtick spans holding one camelCase or PascalCase word, outside code fences, first spelling once, at most 40
> per page (p99 is 8; only a font list passes 40). The 8,050 items fetched before that get them from a phase of the
> full nightly that reads each item's fetched blob from its mirror (`backfillIdentifiers`): no stage re-runs, no LLM,
> no quota, no page rewritten. The index writer adds one shard, `learn-<sha12>.json`: a row per fetched Learn article
> (URL under one base, title, the extraction's summary else Learn's description, ms.date, the hub that lists it or its
> reference section, a system of its own, the identifiers), listed under `learn` in the index manifest, not under
> `shards`, so readers of page records and MCP releases before D94 never see it. In `packages/search` a Learn record
> is a page of type `learn`, tier official, whose id is its URL (`hrefOf` returns it); its identifier tags also meet
> their CamelCase words; nothing else in the scorer changes and the golden set holds. The site shows a "Learn
> articles" group after "Start here" and loads the shard with the first query; the MCP returns `type learn` hits with
> the url and the hub. Cost: 2.0 MB on the Pages tar (695.3 to 697.3 MB, same content), no page grows. Rejected:
> indexing Learn body text (D01: Learn stays canonical; the index would carry its prose), pages of our own per article
> (8,050 pages for what Learn already serves), folding a version into the fetched stage's input hash (every item would
> go stale and re-enter extraction, an LLM stage), PageRecord objects in the shard (3.7 MB), listing the shard
> under `shards` (MCP 0.3.0 spreads every shard as page records and would fail), splitting CamelCase in every record's
> tags (hub tags are TOC titles; their rankings would move). Spec: `docs/specs/learn-search.md`.

Other choices:

- **Hub of an article.** A page several hubs list goes to a hub of its own docs set (`topics/dev-itpro/` for
  `dev-itpro/` URLs), then the deepest, then the first by path. The label is the hub's full TOC path, shortened like a
  topic's (`pathLabel`). Articles without a hub get their reference section's label from a fixed map of eight URL
  folders (`LEARN_SECTIONS`), else none.
- **System.** The extraction's first system when it differs from the hub's; else the hub's.
- **Ranking.** Learn records are pages to the scorer: title 3, tags 2, summary 1, a title equal to the query +10, +1
  as every non-object page. They interleave with the other pages in the MCP's flat list and sit in their own group on
  the site.

## 4. Contract

### 4.1 Identifiers (`pipeline/fetch/git-page.ts`)

- `pageIdentifiers(body)`: code spans `` `x` `` (not double-backticked) whose text is one word matching
  `/^[A-Za-z][A-Za-z0-9]*$/` with, for a lowercase start, a capital inside, or for an uppercase start, a lowercase
  letter and a capital after the first character; fenced blocks (``` or ~~~, indented or not) removed first;
  deduplicated case-insensitively keeping the first spelling; at most `IDENTIFIERS_MAX = 40`.
- `parsePage` returns `identifiers`; `gitPageFetched` writes `meta.identifiers` with the other metadata.
- `readBlobs(mirror, oids)`: one `git cat-file --batch`, `GIT_NO_LAZY_FETCH=1`, byte-exact; a missing blob is null.
- `backfillIdentifiers(manifest, mirrorsDir, pillars = ["docs"], prefetch = prefetchBlobs)`: items with a
  `stages.fetched.blob` and no `meta.identifiers` array; per mirror, prefetch the missing blobs (a failed fetch is
  split in halves, so one bad blob leaves only itself), read all, save `meta.identifiers` (an empty list marks an item
  done); nothing else on the item changes. Returns `{ items, filled, prefetched, missing, ms }`.

### 4.2 Nightly (`pipeline/orchestrator/nightly.ts`)

In the full run, phase `learn-identifiers` right before `renderDerived` (so the index reads the filled items), when
`--pillars` is absent or includes docs; an error goes to `errors`. `RunReport.learn_identifiers` and its schema entry
(`schemas/run-report.json`). The derive stage does not run it (no mirrors, no network in a derive).

### 4.3 Index (`pipeline/render/search.ts`, `packages/search/src/learn.ts`)

```ts
type LearnHub = [hubPath | "", label, system | null];
type LearnRow = [pathUnderBase, title, summary, msDate | null, hubIndex | -1, ownSystem?, identifiers?];
interface LearnShard { schema: "bcobs-learn@1"; base: "https://learn.microsoft.com/dynamics365/business-central/"; hubs: LearnHub[]; rows: LearnRow[] }
// index-manifest.json: { schema, pages, shards, learn?: { file: "learn-<sha12>.json", count, sha256 }, by_type }
```

Rows: docs items with a fetched stage and a state other than `skipped`, sorted by URL; trailing empties dropped;
hubs sorted by path, then label. `pages` and `by_type` count our pages only. The sweep removes an unlisted
`learn-*.json`. `learnRecords(doc)` returns `PageRecord`s `{ path: url, type: "learn", tier: "official", title,
summary, system?, date?, tags?, path_label?, hub? }`; `PageRecord.hub` is new. `hrefOf(base, id)` returns an
`http(s)://` id unchanged. In `normOf`, a `learn` record's tags go through `indexTokens(tag, true)` and are not
deduplicated across tags.

### 4.4 Site

`index-loader.ts`: `PageKind` gains `"learn"`; `loadPages(base, ["learn"])` reads `manifest.learn` (none: nothing),
appends `learnRecords(doc).map(pageToRecord)` to the shared index, prunes other `learn-*` entries from Cache Storage.
`search.ts`: group `{ id: "learn", label: "Learn articles", types: ["learn"], cap: 5 }` after `start`; `TYPE.learn =
"Learn article"`; rows link `hrefOf(base, path)` and, for a record with `hub`, the label as a link to the hub;
`mountSearch` starts the Learn load on the first non-empty query. `search/index.astro`: tab `learn` after `start`.

### 4.5 MCP (`packages/mcp/src/server.ts`)

`loadIndex` prepares the Learn records after the pages and before the symbols (`pages` keeps our pages only, so the
meaning list, `ls` and `whats_new` are unchanged); `learnLine` for Learn hits; one sentence in the search
description and in the instructions; `learn` in the description's type list.

## 5. Test plan (write first)

- `tests/unit/git-page.test.ts`: `pageIdentifiers` on a fixture page (spans, fences, indented fences, double ticks,
  non-identifiers, the Learn typo spelled twice, the cap); the stage writes `identifiers`; `backfillIdentifiers` on a
  blobless clone: prefetch, fill, untouched state and stages, an empty list, an item the stage filled, a never-fetched
  item, a blob the remote does not have, a second run, no mirror.
- `tests/unit/nightly.test.ts`: the full run reports `learn_identifiers` and the report validates.
- `tests/unit/search-index.test.ts`: `learnShard` (hub choice among three, a reference section, extraction before
  description, skipped and unfetched items out, trailing empties, plain text of includes and links);
  `renderSearchIndex` writes and lists the shard, leaves `shards` and `pages` alone, sweeps an older one, writes none
  without a docs manifest.
- `tests/unit/search-core.test.ts`: `learnRecords`; `hrefOf`; identifier, CamelCase words, quoted phrase, a
  PascalCase method; a hub tag is not split.
- `tests/unit/index-loader.test.ts`, `tests/unit/live-search.test.ts`, `tests/unit/mcp.test.ts`: section 4.4 and 4.5.
- Golden set (site and MCP): the index is rendered with the docs manifest and extractions linked in, so all 29 rows run
  with the 8,050 Learn records in the index; two rows added (`includeSourceInSymbolFile`, `resourceExposurePolicy`,
  top: the policy article); the MCP golden parser counts `url=` hits so every hit keeps its place.

## 6. Tasks

1. Identifiers and the backfill (4.1, 4.2) with their tests. 2. The shard and the package (4.3) with the golden set.
3. MCP (4.5). 4. Site (4.4). 5. Local index into the worktree, site build through the lock script, size, headless
browser check, discard `data/`. One commit per task.

## 7. Verification

- `npm run typecheck && npm test` per commit.
- The writer on the committed data into a temp dir: 8,050 rows, 574 hubs, 2,039,780 bytes without identifiers.
- The backfill on a copy of the docs manifest against the Mac's mirrors (read-only, no prefetch): 4,365 filled, 3,685
  missing (not local on the Mac), 2.5 to 7.2 s on a loaded machine; a second run reads only the missing ones.
- Rankings with and without the Learn records on 31 queries (`t18`, `Sales-Post`, `posting date`, `BE`, ...): the
  order of the other hits is the same in 30; the one that moved is section 12's typo case.
- Site build of the worktree with the local index; `scripts/site-size.ts` against the D88 baseline; headless Chromium
  on port 4206 for the eight queries of section 12.

## 8. Later, not in this spec

- `ms.search.keywords` (already in `meta.keywords`) as tags; identifiers from double-backtick spans and tables.
- Learn articles in the MCP's meaning list, in `whats_new` (Learn updates by ms.date) and in the palette.
- Labels for the 399 articles with neither a hub nor a known reference section.
- The plugin skills (`bc-lookup`) and the MCP page (`site/src/lib/mcp.ts`) saying that search covers Learn.

## 9. Risks and open questions

- **Blobs the Mini's mirrors lack.** The fetched stage prefetched every blob it read, so the Mini should hold all
  8,050; any it lacks are fetched once in batches of 1,000 (network, quota-free, like the fetched stage). Default:
  accept; `learn_identifiers.missing` in the run report says what is left for the next night.
- **Learn articles above hubs in the MCP's flat list.** A Learn title equal to the query is in the exact band ("job
  queue": two Learn articles titled "Job queue" now lead). Default: accept, it is the article that answers; the site
  groups them apart.
- **MCP releases before D94** ignore `learn`; agents get Learn hits from the first release with this server.
- **Merge overlap** with lists-and-media (`pipeline/render/search.ts`, `index-loader.ts`) and mcp-sections
  (`server.ts` description and instructions): all edits here are additive and local.

## 10. Files

Changed: `pipeline/fetch/git-page.ts`, `pipeline/orchestrator/nightly.ts`, `schemas/run-report.json`,
`pipeline/render/search.ts`, `packages/search/src/{types,anchors,score,index}.ts`, new `packages/search/src/learn.ts`,
`site/src/scripts/{index-loader,search}.ts`, `site/src/pages/search/index.astro`, `packages/mcp/src/server.ts`,
`tests/unit/{git-page,nightly,search-index,search-core,search-golden,index-loader,live-search,mcp,mcp-golden}.test.ts`,
`tests/helpers/search-golden.ts`, `tests/fixtures/search-golden.json`, this spec. Generated by the pipeline after the
merge: `data/manifest/docs/**` (identifiers), `data/index/learn-*.json`, `data/index/index-manifest.json`.

## 11. Definition of Done

- [x] Section 5 tests green; typecheck and the full suite green per commit.
- [x] The golden set holds with the Learn records in the index; two Learn rows added.
- [x] Local build measured against the D88 baseline; no page grew.
- [x] Headless browser check of the eight queries.
- [ ] D94 appended, M32 shipped in PLAN, HANDOFF entry (by the integrator, from section 12).
- [ ] After the merge: the derive writes the shard; the next nightly reports `learn_identifiers` and the shard
  carries identifiers.

## 12. Built, deviations (2026-10-12)

Built 2026-10-12 in four code commits on `build/learn-search` (from `04b705c8fb`): identifiers and the backfill
(`d0947da46b`), the shard and the package (`4297cbd8c0`), the MCP (`484f5c1544`), the site (`824fe3e76f`); then this
spec. Typecheck and the full suite were green on each commit's own tree (493 tests at the end, one skipped as before).

**Measured.**

- **Shard.** `learn-<sha12>.json` on the committed data: 8,050 rows, 574 hubs (566 topic hubs, 8 reference
  sections), 7,651 rows with a hub or section (3,462 by a hub, 4,189 by a section), 399 with neither; 1,738 rows
  carry a system of their own. 2,039,780 bytes without identifiers; 2,075,583 bytes with the identifiers of the
  4,365 blobs the Mac's mirrors hold (476 rows with identifiers, 34,628 bytes of them); about 400 KB gzipped. On the
  Mini, with every blob read, expect about 2.08 to 2.11 MB.
- **Pages tar.** Same content, local build of the worktree with that index, `scripts/site-size.ts`: **695.3 to
  697.3 MB** (729,118,720 to 731,197,440 bytes, +2,078,720), files 59,135 to 59,136, objects 455.2 MB unchanged,
  index 36.3 to 38.3 MB. Every file that differs: the Learn shard (+2,075,583), `index-manifest.json` (+157),
  `search/index.html` (+200, the tab), the index-loader bundle (+607), the search bundle (+478); the other `_astro`
  files only changed their hash. No other page grew.
- **Time.** The backfill over the 8,050 items took 2.5 s on the Mac (4,365 read and saved, 3,685 not local), 7.2 s
  on a loaded machine; a second run reads only what is missing. The Learn part of the index writer adds about 0.85 s
  (manifest 0.6 s, extractions 0.23 s). No LLM call, no quota, no network unless a blob is missing.
- **Rankings.** The golden set (31 rows, site and MCP) holds with the Learn records in the index: search median 0.6
  to 0.7 ms, max 23 to 25 ms (the 150 ms tripwire failed once at 152 and 464 ms while the machine's load average was
  38 to 60, and held on every rerun). On 31 queries with and without the Learn records, the other hits keep their
  exact order in 30.
- **Browser** (headless Chromium, `site/dist` under the base path on 127.0.0.1:4206, stopped after). An object page
  and the empty search page request no Learn shard. `includeSourceInSymbolFile`: 2 Learn articles, "Resource exposure
  policy setting" first, then "JSON Files for AL Extension Projects", each opening learn.microsoft.com and linking its
  hub. `include source in symbol file`: the same two (JSON files first: more of its tags carry the words).
  `resourceExposurePolicy`: 1 to start with (the hub "Configure the development environment"), 9 Learn articles
  with the policy article first. `allowDebugging`: 10 Learn articles, the policy article first. `t18`, `Sales-Post`
  and `BE`: no Learn hits, the same groups and rows as before. `posting date`: Start here 8 first as before, then 38
  Learn articles, then the other groups unchanged. `?type=learn` selects the tab; at 390 px no horizontal overflow.

**Deviations from the brief.**

- **The shard is listed under `learn`, not in `shards`.** MCP 0.3.0 spreads every entry of `shards` as page records
  (`all.push(...JSON.parse(shard))`), and so does the golden loader: a tuple document there would break every
  installed MCP. The site reads `shards` by kind, so either would have worked for it.
- **Tuple rows, not page records.** As the symbol shards: the URL prefix once, a hub's path, label and system once.
  Page-record objects (with the hub path and label on every row) measured 3.7 MB.
- **A reference-section label for articles without a hub.** 4,588 of the 8,050 articles have no hub; a fixed map of
  eight URL folders (`LEARN_SECTIONS`, "AL reference › Methods" and the like) labels 4,189 of them. 399 have no label.
- **The label is the hub's full TOC path**, title included ("… › Development environment › Configure the development
  environment"), so it names the hub; a topic's own label stops above its title.
- **Cap 40, not smaller.** p99 is 8, but 20 would cut `devenv-json-files.md` (23 identifiers, includeSourceInSymbolFile
  the 21st); only `ui-fonts.md` (153 font names) passes 40.
- **One scorer detail beyond CamelCase:** a Learn record's tag words are not deduplicated across tags, so a phrase
  ("include source in symbol file", quoted) holds when an earlier tag already holds "source". Other records unchanged.
- **Keyword only in the MCP.** Learn records are not in the meaning list (D63); `ls`, `whats_new` and `blog_footprint`
  read the site's pages only, as before.
- **A typo guess goes when the word exists.** D86 forgives a typo only when a word meets nothing else. `SetRange`
  met one community post through "strange"; now it meets nine Learn articles and the guess goes. That is the one query
  of 31 whose other hits changed.
- **Learn titles in the exact band.** A Learn title equal to the query is pinned in the MCP like any page's ("job
  queue": a Serbian local-functionality article and the developer article, both titled "Job queue", now lead; before,
  no hub matched and code changes led). The site shows them in their own group.
- **The backfill runs in the full nightly only**, not in `derive` (a derive does no network and has no ingest).

**When readers see it.** The merge touches `pipeline/render/**` and `schemas/**`, so the push starts a derive on the
Mini (D81): it writes the Learn shard from the committed data (titles, summaries, hubs, no identifiers yet) and
commits `content: derive`, after which Pages deploys. From then on `includeSourceInSymbolFile`,
`resourceExposurePolicy` and `allowDebugging` already find the policy article (its extraction summary names them).
The next nightly fills `meta.identifiers` for every Learn item (phase `learn-identifiers`, `learn_identifiers` in the
run report), its render block rewrites the shard with them, and the nightly's Pages deploy brings the CamelCase-word
queries ("include source in symbol file") and identifiers that only Learn's bodies hold. Agents see Learn hits once
a bc-observatory release carries this server (0.3.0 ignores `learn`).

**For the integrator.** Append D94 (below) to `docs/DECISIONS.md`, the M32 row to `docs/PLAN.md`, the entry to
`docs/HANDOFF.md`. Overlaps: mcp-sections edits the same description and instructions strings in `server.ts`
(this branch adds one sentence to each and `learn` to the type list); lists-and-media edits
`pipeline/render/search.ts` and `index-loader.ts` (this branch adds a Learn block after the page shards and a
`learn` branch in `loadKind`). After the derive: `data/index/learn-*.json` exists with 8,050 rows and the Pages tar is
about 697 MB. After the next nightly: `learn_identifiers.filled` is about 8,050 with `missing` 0 (if not, the Mini's
mirrors lacked blobs it could not fetch; the next night retries). Release the MCP package (fold into the 0.4.0 that
mcp-sections plans).

**`docs/DECISIONS.md`**: the D94 text of section 3, as quoted there, ending "Spec: `docs/specs/learn-search.md`."

**`docs/PLAN.md`**, after M31:

| **M32 Learn search** | identifiers from Learn's code spans at fetch time and a one-time quota-free backfill in the nightly; one Learn shard (8,050 tuple rows, 2.0 MB) under `learn` in the index manifest; Learn records of type learn in the shared scorer, identifier tags that meet their CamelCase words; a "Learn articles" group and tab on the search page, loaded with the first query; MCP search returns type learn with url and hub (`docs/specs/learn-search.md`, D94, shipped 2026-10-12) | 1 day | none: deterministic, no LLM |

**`docs/HANDOFF.md`**, under "Where things stand", a new "Shipped 2026-10-12" bullet:

- **Learn search, D94** (`docs/specs/learn-search.md`, M32). `includeSourceInSymbolFile` found nothing because Learn
  articles had no search record and identifiers were never kept. The fetched stage now writes `meta.identifiers`
  (code spans, camelCase or PascalCase, at most 40); a nightly phase fills them once for the 8,050 items fetched
  before (`learn_identifiers` in the run report). The index writer adds `learn-<sha12>.json` (listed under `learn`,
  not `shards`); the site's search page has a "Learn articles" group after Start here, rows open learn.microsoft.com
  and link their hub; MCP search returns `type learn` hits with url and hub. Local build: 695.3 to 697.3 MB tar, no
  page grew. Live after the derive of the merge (titles and summaries), identifiers after the next nightly; agents
  after the next MCP release.
