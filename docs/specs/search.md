# Search that finds what you mean: one scorer for the site and the MCP, symbols, lazy shards

Status: proposed, 2026-10-08. Decision: D86 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M24 (reserved). Owner: waldo.
Scope: the search box, the results page, the galaxy live search and the Ctrl+K palette on the site; the `search`,
`get_object` and `whats_new` tools of the MCP package; the page index records and their shards; a new symbols index
(fields, events, procedures, enum values); a shared query parser, synonym list and scorer under `packages/search/`;
the plugin skills' advice. Deterministic throughout, no model call added; the MCP keeps its D63 embeddings. Every
claim below was verified against the tree at `ad43cce25c` on 2026-10-08; every number was measured on the
committed `data/` of that commit with the command next to it. Not in scope: body-text search, vectors on the site,
LLM query rewriting, a `get_symbol` tool, Pagefind.

## 1. Goal

A reader who types what a Business Central person types gets the page they mean, first: `Sales Header` opens on
`Table 36 "Sales Header"`, `cu 80` on `Codeunit 80 "Sales-Post"`, `OnAfterPostSalesDoc` on that event in
Codeunit 80, `custmer` on Table 18, `BE` on the Belgium page. An agent asking the MCP gets the same order, with
the meaning search of D63 still catching paraphrases underneath. The site stops downloading 13 MB to answer one
keystroke.

### What is broken, with evidence

The site scorer (`site/src/scripts/search.ts:24-55`) was re-run in node over the committed index; the MCP was run in
local mode (`BC_OBSERVATORY_LOCAL`, keyword mode and hybrid with the cached potion-base-8M model).

| Query | Today | Cause |
|---|---|---|
| `Sales Header` (MCP hybrid) | eight table extensions first, `Table 36` at rank 39; keyword mode rank 13; site: Table 36 and `Table extension 8053` tie at 12.6 | five objects are named exactly "Sales Header" (`objects/table/36`, `tableextension/8053`, `10567-gb`, `18661-in`, `18838-in`); 43 titles contain it; every extension's summary says "extends Sales Header"; nothing ranks a base object above its extensions or a used object above an unused one |
| `customer`, `Item` (MCP) | Table 18 and Table 27 not in the top 50 | 474 titles contain "customer", 1,117 "item"; MiniSearch BM25 with `prefix` and `fuzzy: 0.15` (`packages/mcp/src/server.ts:96-101`) and caption boosts drown the exact name |
| `OnAfterPostSalesDoc`, `Posting Date`, `CopyToTempLines` | nothing relevant (semantic-only strangers) | the index holds title, summary and at most 8 tags per page (`pipeline/render/search.ts:47-59`); no event, field or procedure is indexed anywhere; `data/index/events.json` and `fields.json` exist for the palette only |
| `cu 80`, `t36`, `codeunit80` | Codeunit 6180 first; 0 hits; 0 hits | the abbreviations live only in the palette (`site/src/scripts/palette.ts:9`); the site's exact-reference rule needs the full type word (`search.ts:27-28`); the MCP has no reference rule at all |
| `36` | 2,180 rows contain "36"; "Microsoft 365" pages on top | numbers match as substrings; a bare number is never read as an id |
| `BE` | 3,153 hits ("best", "obsolete", ...) | no country-code rule; the Belgium page is one of thousands of substring hits |
| `sales headr`, `tables 36`, `salesheader`, `customers` | 0 / 9 without Table 36 / 2 / not Table 18 | no fuzzy, stemming or compound split on the site; the MCP's fuzzy 0.15 is too narrow for a 5-letter word |
| `type: object` + `system: finance` (MCP) | always "No pages match" | 0 of 25,645 object records carry `system` (`pageRecord`, `search.ts:55-59`); `bc-lookup/SKILL.md:10` recommends exactly this filter |
| `table 36 BE`, `get_object('table', 'VAT VIES Correction')` | nothing; "No table" | country pages sit at `objects/table/11300-be` with titles ending `(BE)`; the reference rule and `toolGetObject` (`server.ts:234-243`) match W1 paths and `"<name>"` at the end of the title only; 9,216 country records, 4,320 of them mislabelled `app: "Base Application"` |
| `how do I post a sales invoice from code` | bug-fix pull requests and posts | no intent handling; Codeunit 80 and the Sales hub never surface |

Structural causes:

- Two scorers for one index: the site's `score()` and the MCP's MiniSearch plus `resort()`/`fuse()`
  (`server.ts:162-182`). `packages/mcp/README.md:26` says "Ranking matches the site"; it does not, and
  `docs/specs/discovery.md:66` recorded that on 2026-10-07.
- The site downloads the whole index on every `/search/` view and on first focus of the header field
  (`loadRows`, `search.ts:57-66`; `live-search.ts:66`): 13,472,154 bytes raw, 1,251,682 gzipped (`stat`, `gzip -c |
  wc -c` on `data/index/pages-1.json` and `pages-2.json`), under the unhashed names `pages-1.json` and
  `pages-2.json`. GitHub Pages answers with `cache-control: max-age=600` (`curl -sI` on the manifest, 2026-10-08),
  so the browser revalidates every ten minutes; the manifest carries a sha256 per shard that nothing on the site uses.
- `whats_new` sorts by `date` descending (`server.ts:263`); a feature's date is its GA month, so `since: 2026-10-07`
  lists 2027 features first.
- Pagefind (D13, PLAN 4.7) was never built; `pipeline/render/search.ts:7-8` and `live-search.ts:3` still say so.

Numbers behind the design (2026-10-08, this commit):

| Measure | Value | Command |
|---|---|---|
| Index records / objects / with `system` / country objects | 28,784 / 25,645 / 0 / 9,216 | node over `data/index/pages-*.json` |
| Objects named exactly "customer" / "sales header" | 2 (table/18, tableextension/10832-fr) / 5 | same |
| BC29 (the pages' major, `narrative_order[0]`) W1 + apps: objects / fields / enum values / global procedures / published events | 16,352 / 55,929 / 6,145 / 35,949 / 25,185 (25,181 integration, 4 business) | node over `data/code/29/{w1,apps}/objects-*.jsonl` |
| BC30 same | 16,420 / 56,016 / 6,172 / 36,002 / 24,986 | same, `30` |
| Symbol tuple bytes, BC29, tooltips cut at 160 chars: fields / events / procs / values | 4,077,636 / 2,523,030 / 2,965,741 / 289,542 (9,855,949 in all) | same one-liner, `JSON.stringify` per row |
| Importance inputs on object frontmatter: Table 18 `referenced_by` / `pages` / `event_subscribers` / `links.learn` | 260 / 30 / 18 / 30 | `content/objects/table/18.md:146-157` |
| Table 36: same | 82 / 19 / 94 / 22 | `table/36.md:146-151` |
| Codeunit 80: `called_by` / `event_subscribers` | 27 / 83 | `codeunit/80.md:103-108` |

After this change:

- `t36`, `table 36`, `codeunit80`, `cu 80`, `page 21` open on the object; `table 11300 BE` on `objects/table/11300-be`.
- `Sales Header`, `customer`, `Customer Card`, `Sales-Post` put the base object first; extensions and country
  twins follow; `customers`, `custmer` and `client` find Table 18 too.
- `OnAfterPostSalesDoc` lands on Codeunit 80 at that event; `Posting Date` lists the fields of that name, the
  important tables first; `proc: CopyToTempLines` lands on the procedure.
- `36` lists Table 36, Page 36, Codeunit 36 and so on, never "Microsoft 365"; `BE` opens the Belgium page.
- The MCP returns the same order, says per hit whether it came from keywords or meaning, filters objects by
  system, country, app and object type, resolves captions and country objects in `get_object`, and `whats_new`
  does not start with next year's roadmap.
- A query on `/search/` fetches a few hundred kilobytes before the first results, and nothing twice.

## 2. Reader- and agent-facing behaviour, after

### 2.1 The results page `/search/`

The grouped page of D65 stays (Start here, Roadmap, Videos, Community posts, AL objects by app, Code changes,
Localizations, Sources, Digests, Other; `site/src/scripts/search.ts:72-83`). Changes:

- **Exact block.** When the parsed query is an object reference, a bare number or a `kind:` query, a block
  `Exactly this` opens the page above the groups: the referenced object (and its country twins, "also in BE, NL"
  as links), the objects carrying that id across types for a bare number, or the symbols for a `kind:` query.
- **Objects in order.** Within an app group, base app before first-party app before country layer, then
  importance, then title. The group's app headings keep "Base Application" first; a country object's heading is
  `BE layer`, not "Base Application".
- **Three symbol groups**, after AL objects: `Fields`, `Events`, `Procedures` (and `Enum values` only when the
  values shard is built, section 4.4). A row reads `Posting Date` · `field 20 of Table 36 "Sales Header" · Date` ·
  the tooltip (cut at 160 characters); an event row `OnAfterPostSalesDoc` · `event of Codeunit 80 "Sales-Post" ·
  integration · 8 subscribers` · the doc line; a procedure row the name, the owner, `3 parameters`, its doc line.
  The row links to `objects/codeunit/80/#event-OnAfterPostSalesDoc` (section 4.5). The tabs row gains the three.
- **Forgiving words.** Plurals (`tables`, `customers`), one typo in a word of five letters or more (`custmer`,
  `headr`), hyphens kept (`Sales-Post`), synonyms from the committed list (`client` → customer, `cu` → codeunit,
  `G/L` → general ledger, `FA` → fixed asset). A match through a synonym or a typo says so in the row's meta
  (`matched "customer"`), so a reader learns the word.
- **Did you mean.** Under the status line, when nothing matched or only weak matches did: up to three suggestions
  as links that re-run the search (`cx 80` → "Did you mean `cu 80` (codeunit 80)?"; `t999999` → "No table 999999.
  Nearest ids: table 99999x ..."; `custmer` → "custmer: no page; customer (474 pages)"). A question-shaped query
  (`how do I ...`, `what changed in ... in BC30`) gets one hint: "For what changed, open the object's Versions
  section or [Changes](/changes/); for how-to, start with the hub" with the best hub linked.
- **Status line** keeps its shape (`search.ts:115-119`) and adds the symbol counts: `312 results for "posting
  date": 3 to start with, 9 videos, 14 posts, 80 AL objects, 61 fields, 12 events`.
- **Placeholder** of the header field (`site/src/layouts/Base.astro:52`): `Search: t18, Sales-Post,
  OnAfterPostSalesDoc, BE`.

### 2.2 Loading on the site

- `/search/`: the two manifests (unhashed, revalidated), then the `hubs` and `media` page shards (section 4.3)
  and the `objects` shards, from Cache Storage when their hashed names are already stored; first paint after the
  hubs and media shards (about 250 KB gzipped), the object groups fill in when their shards arrive. The symbol
  shards load after the first paint in an idle callback, or at once for a `kind:` query; the symbol groups
  appear when they arrive. The status line says `loading AL objects…` / `loading symbols…` while it waits.
- Home page live search (D44): the hubs and media shards on focus (as today, `live-search.ts:66`); the objects
  shards when the query parses to a reference, a number or a type word, or once the reader has typed three
  characters (300 ms after the last keystroke). Symbols never: a symbol has no star; the panel lists the owning
  object instead when a `kind:` query is typed.
- Palette (D46): the objects shards on open (replaces `objects.json` for the palette; the atlas and the events
  page keep `objects.json`, `site/src/scripts/atlas.ts:112`, `events.ts:46`); the matching symbol shard on a
  `field:`, `event:` or `proc:` prefix.
- Nothing is fetched twice in a browser session: hashed shard names are stored in Cache Storage (section 4.6).

### 2.3 The MCP

- `search(query, type?, tier?, system?, country?, app?, object_type?, kind?, limit?, mode?)`. Keyword order is the
  site's. `mode: "hybrid"` (default) pins the exact band (section 4.2) on top and fuses the rest with the D63
  meaning ranking by reciprocal rank; `keyword` is the shared scorer alone; `semantic` the meaning list alone.
  Each hit line ends with `[keyword]`, `[meaning]` or `[both]`. A symbol hit prints
  `- OnAfterPostSalesDoc (event of Codeunit 80 "Sales-Post", integration, 8 subscribers) path=objects/codeunit/80#event-OnAfterPostSalesDoc`
  then its signature line. The header says `12 results, keyword + meaning (exact band: 1)`.
- `system` matches objects (their records carry one); `country` (`BE`), `app` (`Subscription Billing`),
  `object_type` (`table`) and `kind` (`page | field | event | proc | value`) are new; all case-insensitive.
- `get_object(type, idOrName, country?)` accepts `t36`, `36`, `36-be`, `Sales Header`, `Customer Card` (a caption),
  `VAT VIES Correction` and `VAT VIES Correction (BE)`; with two candidates (a W1 object and a country twin, or
  a name used by two objects of the type) it lists them with their paths instead of returning the first by path order.
- `whats_new(since, type?, limit?)` lists nothing dated after today; a trailing line says `N roadmap features
  scheduled after today: pass include_future: true` (new optional flag).
- The tool descriptions name the formula in one sentence each and the type list includes `app`, `source`,
  `digest` and `release` (D85).
- Skills: `plugin/skills/bc-lookup/SKILL.md:10` adds `country`, `app`, `object_type`, `kind` and the reference
  forms; `bc-whats-new/SKILL.md:10` says "search the exact name or `t36`, then `diff_object`"; `bc-localization/
  SKILL.md:9-10` stops claiming country-only objects have no page and recommends `search(name, country: "BE")`.

## 3. Decisions

Draft D86 for `docs/DECISIONS.md`:

> **D86 One deterministic scorer, a symbols index, lazy hashed shards.** Site and MCP rank with the same code:
> `packages/search` (private workspace package, zero dependencies) parses the query (`t36`, `cu 80`, `table 36
> BE`, bare numbers as ids, `field:`/`event:`/`proc:` prefixes, `bc30`, country codes, quoted phrases, plurals, one
> typo from five letters, a committed synonym list) and scores page and symbol records with the D65 rules plus a
> layer order (base app, first-party app, country) and an importance signal (an object's references, callers,
> pages, subscribers and Learn pages, log-normalised per type). The MCP pins the exact band on top and fuses the
> rest with the D63 meaning ranking; MiniSearch goes. A symbols index (fields, events, global procedures, enum
> values of the pages' major, W1 and apps, tuple rows in content-hashed files) makes `OnAfterPostSalesDoc` and
> `Posting Date` answerable; object pages get per-member anchors at site build. Page shards are split by kind
> (hubs, media, objects) under content-hashed names; the site keeps them in Cache Storage and loads objects and
> symbols only when the query asks. Deterministic did-you-mean hints. Rejected: Pagefind (its BM25 replaces
> ours and body text of 25k templated object pages is noise), vectors on the site (9 MB), LLM query rewriting,
> appending meaning hits after every keyword hit (buries D63's paraphrase wins), a bare number as a version, a
> published search package. Spec: `docs/specs/search.md`.

Rejected, with reasons:

| Option | Why not |
|---|---|
| Pagefind (D13's promise) | Its BM25 ranking replaces the hub-first, exact-reference and layer rules, or they must be faked as filters; indexing body text of 25,645 templated object pages adds minutes to the build and noise to every query; a new dependency and build step. D13 is amended: the site searches its own index. |
| Precomputed vectors on the site | 28,784 × 256 int8 ≈ 7 MB plus a 2 MB vocabulary for a paraphrase feature the MCP already offers; the owner kept it out (2026-10-08). Listed under later. |
| Full body text | 198 MB of markdown, 89% of it object pages whose bodies are tables of the same symbols the symbols index covers directly. |
| LLM query rewriting or intent classification | Search is a read path; D12, D22 and D43 keep model calls to the nightly on deltas. Hints are rules. |
| Meaning hits appended after all keyword hits | Simple, but a paraphrase ("stock counting at the end of the year") then never outranks ten weak keyword hits on "stock", "year". The exact band pinned, the rest fused, keeps D63's wins. |
| A bare number as a version (`29`) | On this site a number is an object id first (`36`); the version word is `bc29` or `v29`. |
| `@bc-observatory/search` published to npm | Two releases per change for one consumer; the MCP bundles it instead (esbuild). |
| Keeping MiniSearch in the MCP next to the shared scorer | Two orders again. The shared scorer has prefix, fuzzy and synonyms; MiniSearch leaves the MCP and the unused root dependency. |
| A `get_symbol` tool | `search(kind: "event")` with the object name covers it; later if agents ask. |

## 4. Contract

### 4.1 `packages/search/` (new, private workspace package)

```
packages/search/package.json   {"name":"@bc-observatory/search","private":true,"type":"module","exports":{".":"./src/index.ts"}}
packages/search/src/index.ts   re-exports
packages/search/src/types.ts   SearchRecord, SymbolRow types, ParsedQuery, Hit, Hint, Index
packages/search/src/parse.ts   parseQuery, ABBR, TYPE_WORDS, countries from config at call site
packages/search/src/normalize.ts tokenize, stem, fold
packages/search/src/synonyms.ts  SYNONYMS, ABBR: hand-edited, reviewed by PR, never generated (header comment says so)
packages/search/src/score.ts   prepare, search, scoreRecord, importance, fuzzyCandidates
packages/search/src/hints.ts   hints
packages/search/src/anchors.ts anchorOf, symbolId
```

No build step: the site (Vite) and the tests (`tsx`) transpile the `.ts` through the workspace symlink, the same
way `site/src/lib/page.ts:4` imports `pipeline/lib/systems` today; the MCP bundles it (4.7). Nothing in the package
imports `node:*`; the root `typecheck` adds `tsc -p packages/search/tsconfig.json --noEmit` (`lib: ["ES2022",
"DOM"]`, strict).

```ts
export interface Term { text: string; stem: string; alts: string[]; phrase: boolean; numeric: boolean }
export interface ParsedQuery {
  raw: string;
  ref: { type: ObjectType; id: number; country: string | null } | null;   // t36, cu 80, codeunit80, table 36 BE
  number: number | null;        // a bare number: an id across types, never a substring
  types: ObjectType[];          // type words anywhere, singular or plural, abbreviations when standalone
  kind: "field" | "event" | "proc" | "value" | null;                       // field:, event:, proc:/procedure:, value:
  major: string | null;         // bc30, bc 30, v29; never a bare number
  countries: string[];          // BE, NL: uppercase in the raw query, or any case next to a reference or type word
  question: boolean;            // starts with how/what/why/where/when/which or contains "changed in"
  terms: Term[];                // everything else, normalised, stemmed, synonym-expanded; quoted phrases stay one term
  warnings: string[];           // "unknown abbreviation cx" and the like, input to hints
}
export function parseQuery(raw: string, opts: { countries: string[] }): ParsedQuery;
```

Parsing rules, in order: quoted phrases; a `kind:` prefix at the start; the reference `^(abbr|type)\s*(\d+)(\s+cc)?$`
(`ABBR` is the palette's table, `palette.ts:9`, plus `cod`, `tab`, `pag`, `rep`, `xml`, `enu`, `pse`); type words
(`TYPE_WORDS`: the 18 types, their plurals, and an abbreviation only when it is a whole token followed by digits
or alone); version `^(bc|v)\s?(2[3-9]|3\d)$`; country codes from `config/countries.json`; the rest tokenised by
`tokenize()` (NFKD, lowercase, split on anything but letters, digits, `.`, `-`, `/` inside a token, drop
one-character tokens unless numeric), `stem()` for tokens of five letters or more (`ies→y`, `es`, `s`, `ing`,
`ed`), CamelCase alternates (`OnAfterPostSalesDoc` → `on after post sales doc`) so prefix typing works on symbols,
synonym alternates from `SYNONYMS`.

```ts
export interface SearchRecord {
  id: string;                 // page path, or "objects/codeunit/80#event-OnAfterPostSalesDoc"
  kind: "page" | "field" | "event" | "proc" | "value";
  type: string;               // page type; for a symbol the owner's object type
  name: string;               // the object's name, the hub's title, the symbol's name
  title: string;              // display
  caption?: string; text?: string; tags?: string[];
  objectType?: string; objectId?: number | null; country?: string | null; app?: string | null;
  layer: 0 | 1 | 2;           // 0 base app and every non-object page, 1 first-party app, 2 country layer
  importance: number;         // 0..1 (section 4.2), symbols inherit their owner's
  system?: string; date?: string; members?: number; narrative?: "reviewed" | "unreviewed" | "none"; major?: string;
  owner?: { path: string; title: string };                       // symbols
  extra?: Record<string, string | number | null>;                // symbol facts for the row (field id, type, subscribers, params)
}
export interface Index { records: SearchRecord[]; postings: Map<string, Uint32Array>; vocab: Map<string, number>; byType: Map<string, number[]>; maxInbound: Map<string, number> }
export interface Hit { r: SearchRecord; s: number; why: string[]; band: "exact" | "match" }
export function prepare(records: SearchRecord[], prev?: Index): Index;        // postings over name, title, caption, tags; `prev` appends a lazily loaded shard
export function search(index: Index, q: ParsedQuery, opts?: { limit?: number; kinds?: SearchRecord["kind"][]; filter?: (r: SearchRecord) => boolean }): Hit[];
export function scoreRecord(index: Index, r: SearchRecord, q: ParsedQuery): { s: number; why: string[] };   // pure; the unit tests pin it
export function pageToRecord(p: PageRecord): SearchRecord;
export function symbolToRecord(kind: SymbolKind, row: unknown[], owner: SearchRecord): SearchRecord;
export function hints(index: Index, q: ParsedQuery, hits: Hit[]): Hint[];     // Hint { text: string; query?: string; path?: string }
export const anchorOf = (kind: SymbolKind, key: string | number) => `#${kind}-${key}`;   // #field-20, #event-OnAfterPostSalesDoc, #proc-CopyToTempLines, #value-3
```

### 4.2 Scoring

Additive, per record; `why` collects the rules that fired. Every term must match somewhere (as today,
`search.ts:32-41`), through one of: exact token 1.0, prefix (term of three letters or more) 0.75, stem 0.75,
synonym alternate 0.8 of the form it matched, fuzzy 0.5. Fuzzy candidates come from the index vocabulary bucketed
by first letter and length ±2, Damerau-Levenshtein ≤ 1 (≤ 2 from nine letters), only for terms of five letters or
more with no exact, prefix or stem posting; scoring then touches posting candidates only, never every record.

| Rule | Points | Keeps / changes |
|---|---|---|
| Reference: `q.ref` names this object (type, id, country) | 1000 | keeps `search.ts:27-28`, now with abbreviations and countries; a reference without a country also lists the country twins at 900 |
| Bare number equals `objectId` | 8, plus a type prior table 0.3, page 0.2, codeunit 0.2, report 0.1, others 0 | new; a number never matches a substring in any field |
| Per term: name/title 3, caption 3, tags 2, text 1, times the match form | as today | the hub-tag rule (a word in the hub's own title does not score in its tags, `search.ts:37`, `server.ts:73-78`) lives once, in `prepare()` |
| Name equals the whole query / starts with it | +10 / +3 | keeps `search.ts:43-45`; applies to symbol names too |
| Hub or app named by the query: `log2(members+1)`; hub narrative reviewed +2, unreviewed 0, none −2 | as today | keeps `search.ts:48-49` |
| Layer: base app and every non-object page +1, first-party app +0.5, country 0; a country named in the query +3 for its objects and −1 for other countries' | new | replaces the blanket +0.5 for non-objects (`search.ts:53`) |
| Importance: `+2 × importance`, `importance = log2(1 + inbound) / log2(1 + maxInbound[objectType])`, `inbound = referenced_by + called_by + pages + event_subscribers + learn` from the record; events add `0.5 × log2(1+subscribers)/log2(1+maxSubscribers)` capped at 1; symbols inherit the owner's | new | Table 18 inbound 338, Table 36 217, Codeunit 80 110 |
| Object demotion ×0.6 on a generic query | as today, lifted by a digit, a type word, or an exact name/caption match | `search.ts:52`; the exact-name lift is new (so `customer` keeps Table 18 at full score) |
| Symbol gate: symbols score only when `q.kind` is set, a term matches a symbol name by exact or prefix token, or a term is event-shaped (`^on[a-z]`) | new | 120k symbol rows would flood generic queries otherwise |
| Type prior for ties among objects: table 0.3, page 0.2, codeunit 0.2, report 0.1 | new | small, documented, last before title |

Band: `s >= 1000` or an exact-name match (`+10` fired) is `exact`; the MCP pins the exact band above its fusion.
Order: score, then date (newest), then members, then importance, then title (`rank()`, `search.ts:98-101`).

Worked example, `customer` (query has no digit or type word):

| Record | Points | Score |
|---|---|---|
| `Table 18 "Customer"` (inbound 338 = max for tables) | 3 + 10 + 2 × 1.0 + 1 (base) | 16.0, exact band, demotion lifted |
| `Table extension 10832 "Customer" (FR)` | 3 + 10 + 2 × 0.1 + 0 (country) | 13.2, exact band |
| `Table 21 "Cust. Ledger Entry"` (caption "Customer Ledger Entry", inbound ≈ 180) | (3 + 2 × 0.93 + 1) × 0.6 | 3.5 |
| hub `Register new customers` (reviewed, 12 members; "customers" stems to the term) | 3 × 0.75 + 3.7 + 2 + 1 | 8.95, Start here |

`Sales Header`: Table 36 = 6 + 10 + 2 × 0.93 + 1 + 0.3 = 19.2; `Table extension 8053 "Sales Header"` = 6 + 10 +
2 × 0.05 + 0.5 = 16.6; `18661-in` = 16.1; `Table 37 "Sales Line"` = 3 + 2 × 0.9 + 1 + 0.3 = 6.1. The coder pins the
real values in the golden test once `maxInbound` is measured; the order above is the requirement.

Budget: `prepare()` once per shard set (about 150 ms for 150k records, off the keystroke path); `search()` median
under 20 ms and maximum under 50 ms per golden query on a laptop; the CI tripwire asserts 150 ms.

MCP hybrid: `exact = keyword.filter(band === "exact")` in keyword order, then `fuse([keywordRest, semantic], 60)`
(the existing `fuse`, `server.ts:162-166`) for the rest; `resort()` and `startFactor()` go (their job is in the
score). Hit tags: `[keyword]`, `[meaning]`, `[both]`.

### 4.3 Page records and shards (`pipeline/render/search.ts`)

Additive record fields for objects (`pageRecord`, `search.ts:55-59`): `name` (`fm.name`), `country` (`fm.country`,
lowercase), `namespace`, `system: objectSystem(fm.namespace)` (`pipeline/lib/systems.ts:27`, the rule
`site/src/lib/page.ts:14` already applies), `inbound` (the sum of 4.2 from `fm.relations` and `links.learn.length`),
`subscribers` (`fm.relations.event_subscribers`); a country object's `app` and `path_label` become `BE layer`
(`objects-index.ts:37` prints the same). The MCP's `storeFields` (`server.ts:98`) is replaced by the shared record.

Shards split by kind, content-hashed names, written only when changed and swept when unlisted (as `search.ts:103-121`):

```
data/index/index-manifest.json      bcobs-index@1 + per shard "kind": "hubs" | "media" | "objects"
data/index/pages-hubs-<sha12>.json     topic, app, feature, localization, source, digest, release (D85)   ≈ 0.8 MB raw
data/index/pages-media-<sha12>.json    video, post, change                                               ≈ 1.3 MB raw
data/index/pages-objects-<n>-<sha12>.json  object, 8 MiB cap as today                                     ≈ 11.4 MB raw in two files
```

`sha12 = sha256(text).slice(0, 12)` (`pipeline/lib/text.ts`). The MCP's loader (`server.ts:81-93`) already caches by
the manifest's sha256 and fetches `index/${s.file}`; it keeps working with hashed names and the `kind` field.
Example object record:

```json
{"path":"objects/table/36","type":"object","title":"Table 36 \"Sales Header\"","summary":"Table 36 \"Sales Header\" in Base Application (Microsoft.Sales.Document). 183 fields, 161 public procedures, 394 events. Present since at least BC23, still in BC30, changed in BC24-29.","tier":"official","tags":["table","base application"],"object_type":"table","object_id":36,"name":"Sales Header","app":"Base Application","namespace":"Microsoft.Sales.Document","system":"sales","obsolete":null,"path_label":"Base Application","inbound":217,"subscribers":94}
```

### 4.4 Symbols index (`pipeline/render/symbols-index.ts`, new)

```
data/index/symbols-manifest.json
  { "schema": "bcobs-symbols@1", "major": "29", "commit": "<w1 manifest commit>", "built_at": "...", "objects": 16352,
    "kinds": { "fields": { "file": "symbols-fields-<sha12>.json", "count": 55929, "sha256": "...", "bytes": 4077636 },
               "events": {...}, "procs": {...}, "values": {...} } }
data/index/symbols-<kind>-<sha12>.json   { "schema": "bcobs-symbols@1", "kind": "fields", "major": "29", "count": n, "rows": [...] }
```

| Kind | Row | Source (al-object@1 record) |
|---|---|---|
| fields | `[pk, name, id, type, tooltip≤160 or null]` | `fields[]` of table and tableextension |
| events | `[pk, name, "integration" or "business", subscribers, doc or null, obsoleteState or null]` | `procedures[]` with `event` integration or business; `subscribers` from `events.json` rows of the same major, else 0 |
| procs | `[pk, name, paramCount, returnType or null, doc or null, obsoleteState or null]` | `procedures[]` with `scope: "global"` and no `event` |
| values | `[pk, name, ordinal, caption or null]` | `values[]` of enum and enumextension |

`pk` is the object page key (`table/36`), W1 and apps of the pages' major (`narrative_order[0]`, the rule of
`objects-index.ts:51-52`), country layers excluded (ids repeat per country, D52). Rows sorted by `pk`, then id or
name; a quiet night rewrites nothing. The builder reuses `iterSnapshot` and `objectKey` and an exported
`objectPagesByKey(contentDir)` extracted from `renderObjectsIndex` (`objects-index.ts:14-15, 56-61`), so both
builders read the 25k frontmatters once. Measured BC29 sizes (section 1): 4.1 / 2.5 / 3.0 / 0.3 MB raw, every file
under the 8 MiB shard cap; about 2 MB gzipped in all. If a kind ever passes 8 MiB the manifest's `file` becomes a
`files[]` list; the loader handles both. Nightly: a `symbols-index` phase right after `objects-index`
(`pipeline/orchestrator/nightly.ts:438`), same `try/catch` and `errors.push` shape. Example rows:

```json
["table/36","Posting Date",20,"Date","Specifies the date when the posting of the sales document will be recorded."]
["codeunit/80","OnAfterPostSalesDoc","integration",8,"Raised after posting a sales document.",null]
["codeunit/80","CopyToTempLines",2,null,null,null]
```

### 4.5 Anchors on object pages (site build, no content change)

Object pages carry section anchors only (`#fields`, `#events-published`, `#procedures`, `#values`; Astro's
slugger). `anchorMembers(html)` in `site/src/lib/versions.ts` next to `markMembers` (`versions.ts:65-76`, the
same two regexes: the field table's `<td>id</td><td>name</td>` and `<li><code>Name(`), applied in
`site/src/pages/objects/[...id]/index.astro:30`, adds `id="field-<id>"` on the field row, `id="event-<Name>"` under
"Events published", `id="proc-<Name>"` under "Procedures", `id="value-<ordinal>"` under "Values". AL has no
overloading, so names are unique per object. The markdown twins keep their section anchors; the MCP prints the
member name, which is what an agent greps for.

### 4.6 Loader on the site (`site/src/scripts/index-loader.ts`, new)

```ts
export function loadPages(base: string, kinds: ("hubs" | "media" | "objects")[]): Promise<Index>;   // manifest once per document, shards once, prepare() appends
export function loadSymbols(base: string, kinds: SymbolKind[]): Promise<Index>;
export function kindsFor(q: ParsedQuery): SymbolKind[];                        // pure: field: -> fields, event: or ^on[a-z] -> events, proc: -> procs, value: -> values, else all
```

One module-level promise per shard name shared by the search page, the live search, the palette and the explorer
(`explorer.ts:63-70`, which keeps calling `findObjects`; that becomes a wrapper over `search()` with
`kinds: ["page"]`, `filter: type === "object"`). Cache: `caches.open("bcobs-index-v1")`; manifests fetched with
`cache: "no-cache"` (revalidated by ETag, 570 bytes); a hashed shard is served from the cache when present, else
fetched and `put`; after a load, cached names the manifests no longer list are deleted; a 404 on a hashed shard
(deploy race) refetches the manifest once; without `caches` (some private windows) plain `fetch`. Replaces
`loadRows` (`search.ts:57-66`), the palette's loader (`palette.ts:60-62`) and `getRows` in `explorer.ts:70`.

### 4.7 MCP package (`packages/mcp`)

- `tsconfig.json`: `noEmit: true`, no `rootDir`, no `outDir` (typecheck only). New `packages/mcp/build.ts`
  (run with `tsx`): esbuild `bundle: true, platform: "node", format: "esm", target: "node20"`, entry
  `src/server.ts`, outfile `dist/server.js`, `external: Object.keys(pkg.dependencies)` read from `package.json`
  (never `--packages=external`, which would leave the bare `@bc-observatory/search` import in the bundle), then
  `chmod 755`. `scripts.build = "tsc -p tsconfig.json --noEmit && tsx build.ts"`; `bin` and `files` unchanged;
  `dist/` becomes one file. `esbuild` (0.28.2 is already in the root `node_modules` through Astro;
  `package-lock.json:2213`) is declared as a devDependency of the package. `minisearch` leaves
  `packages/mcp/package.json` and the root `package.json` (nothing under `pipeline/`, `scripts/` or `infra/`
  imports it). Version `0.3.0`. The publish workflow (`.github/workflows/publish-mcp.yml:26-40`) needs no change.
- Tool schemas (zod): `search { query, type?, tier?, system?, country?, app?, object_type?, kind?, limit? (1..50),
  mode? }`; `get_object { type, idOrName, country? (2 letters) }`; `whats_new { since, type?, limit?, include_future? }`.
- `toolGetObject`: `parseQuery(idOrName)` first (reference, number, `36-be`); then exact `name`, then `caption`,
  then the name with a trailing ` (CC)` stripped, all case-insensitive, within `object_type` and the optional
  country; two or more candidates → a list of `title path=...` lines.

## 5. Test plan (write first)

All tests are read-only over the committed `data/` and `content/`, no network, no model (local mode without
`BC_OBSERVATORY_MODEL_DIR` turns embeddings off, `server.ts:125`).

Golden set `tests/fixtures/search-golden.json`: `{ q, expect, where, hint?, covers }` with `where` one of `top`
(first overall), `top3`, `first-object` (first in the AL objects group; first `type: object` hit in the MCP list),
`first-symbol`, `none`.

| q | expect | where | covers |
|---|---|---|---|
| `table 36` | objects/table/36 | top | reference, as today |
| `t36` | objects/table/36 | top | abbreviation |
| `cu 80` | objects/codeunit/80 | top | abbreviation with a space |
| `codeunit80` | objects/codeunit/80 | top | no space |
| `page 21` | objects/page/21 | top | reference |
| `table 11300 BE` | objects/table/11300-be | top | country reference (`Table 11300 "VAT VIES Correction" (BE)`, a BE-only id) |
| `table 11300` | objects/table/11300-be | top | an id that exists only in a country layer |
| `36` | objects/table/36 | first-object; no path containing `360` or `36623` above it | bare number, no substring |
| `BE` | localizations/be | top | country code alone |
| `Sales Header` | objects/table/36 | first-object | base before the four extensions named the same |
| `"Sales Header"` | objects/table/36 | first-object | phrase |
| `customer` | objects/table/18 | first-object and top3 | exact name beats 474 title matches |
| `customers` | objects/table/18 | first-object | stemming |
| `custmer` | objects/table/18 | first-object | one typo |
| `client` | objects/table/18 | first-object | synonym list |
| `Customer Card` | objects/page/21 | first-object | two-word name |
| `Sales-Post` | objects/codeunit/80 | first-object | hyphen kept |
| `subscription` | topics/business-central/business-functionality/sales/subscription-billing | top | D65 hub rule survives (`tests/unit/mcp.test.ts:63`) |
| `page subscriptions` | objects/page/8059 | first-object | caption plus type word |
| `OnAfterPostSalesDoc` | objects/codeunit/80#event-OnAfterPostSalesDoc | top | event by name |
| `event: OnAfterPost` | objects/codeunit/80#event-OnAfterPostSalesDoc | top3 | prefix on a symbol name under a kind |
| `Posting Date` | a field named exactly "Posting Date"; `objects/table/36#field-20` within the first 5 symbols | first-symbol | field by name, owners by importance |
| `field:Posting Date` | same | first-symbol | kind prefix |
| `proc: CopyToTempLines` | objects/codeunit/80#proc-CopyToTempLines | top | global procedure |
| `bc30 sales` | the first hit's `major` or `present_in` includes 30 | top | version word as a filter |
| `t999999` | none, hint matches `/no table 999999/i` | none | missing id hint |
| `cx 80` | hint matches `/cu 80|codeunit 80/i` | none or top | unknown abbreviation hint |
| `how do I post a sales invoice` | hint names the Sales hub | any | question hint |

Tests:

1. `tests/unit/search-core.test.ts`: a parser table (every form of section 4.1, including `t` alone staying a
   word and `in`/`be` lowercase staying words); `tokenize`/`stem`; synonym expansion; `scoreRecord` worked values
   of 4.2 on hand-built records (replaces `tests/unit/live-search.test.ts:46-58` and `tests/unit/palette.test.ts`,
   which move to the shared scorer with new numbers, not bit-for-bit); `hints` rules 1-5; `anchorOf`.
2. `tests/unit/search-golden.test.ts`: `prepare()` over the committed page shards and symbol shards, every golden
   row, timing printed per query (median and max; assert max < 150 ms); skips with a message while
   `data/index/symbols-manifest.json` is absent (before the first nightly after phase C).
3. `tests/unit/mcp-golden.test.ts`: the server as `mcp.test.ts:44` spawns it, `BC_OBSERVATORY_LOCAL` = the repo;
   `search` in keyword and default mode for the golden rows; `get_object` for `("table","Sales Header")`,
   `("codeunit","Sales-Post")`, `("page","Customer Card")` (caption), `("table","VAT VIES Correction")`,
   `("table","11300", country "BE")`, `("table","t36")`; `search("customer", system: "sales")` returns Table 18;
   `whats_new(since: today)` holds nothing dated after today.
4. `tests/unit/mcp-build.test.ts`: runs `build.ts` to a temp outfile and asserts the bundle has a shebang and no
   `from "@bc-observatory/search"`, `"./embed.js"` or `"minisearch"` import.
5. `tests/unit/symbols-index.test.ts`: over the AL fixture of `tests/unit/objects-index.test.ts:12`: row shapes,
   sorting, country exclusion, tooltip cut, the manifest, unchanged input rewrites nothing, a stale file is swept.
6. `tests/unit/search-index.test.ts` (extend): the new object fields, `BE layer` for a country object, kind per
   shard, hashed names, the sweep.
7. `tests/unit/index-loader.test.ts`: `kindsFor`; the cache logic with a fake `caches` (hit, miss, 404 refetch,
   prune).
8. `tests/unit/mcp.test.ts` (keep): the fixture tests, with the hybrid "client" case now passing through the
   synonym in keyword mode and still through meaning with the toy model.

## 6. Tasks

Phase A ships alone with a site build; the next nightly rewrites `data/index/` (additive fields, hashed names) and
no content page. Phases B to D each ship alone.

**A. One scorer (site and MCP)**
1. `packages/search`: types, normalize, parse, synonyms (seed: the palette's `ABBR`, the taxonomy aliases of
   `config/taxonomy.json` as system synonyms, and about 40 BC pairs: client/customer, supplier/vendor,
   G/L/general ledger, FA/fixed asset, cust./customer, vend./vendor, no./number, qty./quantity, amt./amount, jnl./
   journal, ledger entry/entries, SKU/stockkeeping unit, UoM/unit of measure, PO/purchase order, SO/sales order),
   score, hints, anchors; test 1.
2. `pipeline/render/search.ts`: the object fields of 4.3 (shard split and hashing wait for B); test 6 part one.
3. Site: `search.ts` keeps groups, status and DOM and calls `parseQuery` + `search`; the exact block; forgiving-
   word meta; did-you-mean line; `live-search.ts` and `palette.ts` over the shared scorer (`findObjects` wrapper
   for `explorer.ts:500`); placeholder text.
4. MCP: shared scorer, exact band plus fusion, `[keyword]`/`[meaning]`/`[both]`, filters, `get_object` resolver,
   `whats_new` future dates, descriptions; `build.ts`, tsconfig, dependencies, 0.3.0; tests 3 (page rows only), 4, 8.
5. Golden fixture with the symbol rows marked `pending: "phase C"` and skipped by the runners.

**B. Hashed lazy shards**
6. `search.ts` (pipeline): kind split, `pages-<kind>-...-<sha12>.json`, manifest `kind`, sweep; test 6 part two.
7. `index-loader.ts` with Cache Storage; search page, live search, palette and explorer on it; test 7.

**C. Symbols**
8. `symbols-index.ts`, `objectPagesByKey` extraction, nightly phase; test 5.
9. `anchorMembers` on object pages; symbol groups and tabs on `/search/`; palette `field:`/`event:`/`proc:` over
   the symbol shards; MCP `kind` filter and symbol lines; golden symbol rows live; test 2.

**D. Words**
10. Skills (2.3), `packages/mcp/README.md:19-29`, `docs/PLAN.md:366-367` (4.7 "Search"), the stale comments
    (`pipeline/render/search.ts:7-8`, `live-search.ts:3`), `docs/DECISIONS.md` D86, PLAN M24 row status, HANDOFF.

## 7. Verification

```bash
npm run typecheck && npm test                                   # tests 1-8; test 2 prints the timings
node --import tsx -e 'import("./pipeline/render/search.ts").then(m => m.renderSearchIndex("content", "data"))'   # then: ls data/index; git status data/index (hashed names, old names gone)
node --import tsx -e 'import("./pipeline/render/symbols-index.ts").then(m => console.log(m.renderSymbolsIndex("content", "data")))'
BC_OBSERVATORY_LOCAL=$PWD npx tsx packages/mcp/src/server.ts     # then over stdio: search {"query":"Sales Header"}, {"query":"t36"}, {"query":"OnAfterPostSalesDoc"}, {"query":"customer","system":"sales"}; get_object {"type":"table","idOrName":"VAT VIES Correction"}
npm run build --workspace=bc-observatory && echo '{}' | node packages/mcp/dist/server.js   # the bundle starts; grep -c '@bc-observatory/search' packages/mcp/dist/server.js prints 0
export PATH="$HOME/.nvm/versions/node/v22.12.0/bin:$PATH"; cd site && npm run build && npm run preview   # Node 22 (bcobs-local-site-build-node22)
# headless: /search/?q=Sales%20Header (Table 36 first under Base Application), ?q=t36 (exact block), ?q=OnAfterPostSalesDoc (Events group, link ends #event-OnAfterPostSalesDoc and the anchor exists on the object page), ?q=custmer (meta says matched "customer"), ?q=cx%2080 (hint)
# network tab on /search/?q=customer: two manifests, pages-hubs, pages-media, then pages-objects; a reload fetches the manifests only
npx tsx scripts/site-size.ts                                      # within noise of the last run (D76): the index files move, they do not grow beyond the symbol shards (~10 MB raw)
git checkout -- data content && git clean -fdq data content       # discard the local renders before committing (bcobs-shipping-discipline)
```

## 8. Later, not in this spec

Vectors on the site; body-text search; a `get_symbol` tool; symbols of the country layers (ids repeat; needs a
`(pk, country)` key); the explorer and the atlas on the shared loader; search analytics (nothing is logged today
and nothing will be without a decision); a glossary page generated from the synonym list.

## 9. Risks and open questions

| Risk / question | Default the coder takes |
|---|---|
| Cache Storage unavailable or quota denied | plain `fetch`; the browser's HTTP cache does what it can |
| A symbol shard passes 8 MiB (tooltips grow) | cut tooltips to 100 characters first, then `files[]` per kind |
| `maxInbound` per type makes a small type (xmlport) rank its only member at 1.0 | importance is only +2 and applies within a type's ties mostly; accept, note in the golden run |
| Fusion band: a weak exact-name hit (an obscure object named exactly the query) pins above a strong hub | the band is keyword-ordered, hubs with the exact title are in it too; accept |
| Old plugin or MCP versions (0.2.x) read the new manifest | they read `shards[].file` and `sha256` only; hashed names keep working; they ignore `kind` |
| The pages' major moves from 29 to 30 (`narrative_order`) | the symbols follow `narrative_order[0]` like `objects.json`; one night of difference is fine |
| A reference `table 36 BE` when the BE layer has no table 36 | the W1 page with a hint "BE has no table 36 of its own; the W1 table applies" |
| The explorer's `findObjects` signature | kept as a wrapper; the explorer moves to the loader in a later tranche |
| `t` as a word in free text ("t account") | `t` is an abbreviation only when followed by digits |
| Where the synonym list lives | `packages/search/src/synonyms.ts`, hand-edited, header comment says so; not `config/*.json` because JSON imports behave differently in Vite, tsx and esbuild under NodeNext |

## 10. Files

New: `packages/search/{package.json,tsconfig.json,src/index.ts,src/types.ts,src/parse.ts,src/normalize.ts,
src/synonyms.ts,src/score.ts,src/hints.ts,src/anchors.ts}`, `pipeline/render/symbols-index.ts`,
`site/src/scripts/index-loader.ts`, `packages/mcp/build.ts`, `tests/fixtures/search-golden.json`,
`tests/unit/{search-core,search-golden,mcp-golden,mcp-build,symbols-index,index-loader}.test.ts`.

Changed: `pipeline/render/search.ts`, `pipeline/render/objects-index.ts`, `pipeline/orchestrator/nightly.ts`,
`site/src/scripts/{search,live-search,palette,explorer}.ts`, `site/src/pages/search/index.astro`,
`site/src/lib/versions.ts`, `site/src/pages/objects/[...id]/index.astro`, `site/src/layouts/Base.astro`,
`packages/mcp/{src/server.ts,tsconfig.json,package.json,README.md}`, root `package.json` (workspace already covers
`packages/*`; `minisearch` removed; `typecheck` gains the search package), `tests/unit/{live-search,palette,
search-index,mcp}.test.ts`, `plugin/skills/{bc-lookup,bc-whats-new,bc-localization}/SKILL.md`, `docs/PLAN.md`,
`docs/DECISIONS.md`, `docs/HANDOFF.md`.

## 11. Definition of Done

- [ ] Tests 1-8 pass in CI; test 2 prints timings with max under 150 ms; `npm run typecheck` covers the three packages.
- [ ] The golden set passes on the site scorer and on the MCP in keyword and default mode.
- [ ] `/search/?q=customer` fetches the manifests and the hubs and media shards before the first paint; a reload fetches manifests only.
- [ ] `data/index/` on `origin/main` after a nightly holds hashed shard names with `kind`, the symbols manifest and four symbol files; no `pages-1.json`.
- [ ] Object pages carry `id="field-20"`, `id="event-OnAfterPostSalesDoc"`, `id="proc-CopyToTempLines"` (headless check on Table 36 and Codeunit 80).
- [ ] `bc-observatory@0.3.0` builds to one `dist/server.js` without MiniSearch and starts over stdio.
- [ ] `docs/DECISIONS.md` D86 appended, PLAN M24 row marked built, HANDOFF entry removed, this section renamed "Built, deviations" with what differs.

## 12. Proposed edits to other files (not applied)

- `docs/DECISIONS.md`: the D86 text of section 3.
- `docs/PLAN.md` section 5, before `v0.2+`:
  `| **M24 search** | one deterministic scorer for the site and the MCP (parser with abbreviations, references, countries, kinds, plurals, one typo, a committed synonym list; layer order and an importance signal), the MCP's D63 meaning ranking fused under a pinned exact band, page shards split by kind under hashed names loaded lazily from Cache Storage, a symbols index of fields, events, global procedures and enum values with per-member anchors on object pages, MCP filters by system, country, app, object type and kind, `get_object` by caption and country, did-you-mean hints (`docs/specs/search.md`, D86, proposed) | 5 to 7 days in four phases | none: deterministic, no LLM |`
- `docs/PLAN.md:366-367` (4.7 "Search"): replace the Pagefind sentence with "the site searches its own index with
  `packages/search` (D86); the MCP uses the same scorer and fuses the D63 meaning ranking under the exact band".
- `docs/HANDOFF.md` "Open specs, not yet implemented": the entry this spec session adds (see the commit).
- `AGENTS.md` line "The MCP server ... serves exactly these": add "search covers fields, events and procedures
  (`data/index/symbols-*.json`, D86)" once phase C lands.
