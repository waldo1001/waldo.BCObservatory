# MCP answers an agent can act on: symbols ranked by their owner, honest headers, country-added members, coded Learn ids, question-shaped queries

Status: proposed, 2026-10-13. Decision: D95 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M33
(reserved). Owner: waldo.
Scope: the shared scorer (`packages/search`), the MCP server (`packages/mcp`), the symbols index writer
(`pipeline/render/symbols-index.ts`), the Learn identifier rule and its backfill (`pipeline/fetch/git-page.ts`,
`pipeline/orchestrator/nightly.ts`), the plugin skills, the object frontmatter schema's descriptions, the MCP README
and the MCP page's tool texts, tests and the golden set. Every claim below was verified against the tree at
`c37ea42154` (`origin/main`, 2026-10-13); every number was measured on the committed `data/` of that commit with the
command next to it (Node 20.20.2 for the one-liners, the shared scorer bundled with esbuild from `packages/search`).
Not in scope: any page under `content/` (no renderer changes, no page rewritten, no byte on an object page), Learn
articles in the meaning (embedding) list (D94 holds: keyword only), a `get_symbol` tool, the members of country
table extensions (the country diffs carry none, section 8), Learn body text (D01), the site's results page beyond
what the shared scorer and its hints already change there.

## 1. Goal

On 2026-10-13 the owner ran 16 questions against the Microsoft Learn MCP and this MCP side by side and checked the
answers against BCApps at `ea08af5e` (the commit the object pages cite). Every object fact the observatory gave was
right: field 116 of Table 36, its 183 fields, the exact `OnAfterPostSalesDoc` signature, the 38 events of Codeunit 414,
the behaviour `PerformManualCheckAndRelease` describes. Six answers went wrong before the facts were reached, all in
search and navigation. The storage constraint the owner named in the same session binds the design: the Pages tar
(D76) was 689.1 MB after D90 and the Learn shard added 2.08 MB (D94); nothing here adds a page or a byte to a page.

### What is broken, with evidence

| Query (as the test ran it) | Today | Cause |
|---|---|---|
| `search("field: VAT Bus. Posting Group", object_type: "table", limit: 8)` | 92 hits, exact band 83; Table 30102 "Shpfy Shop" first (27.14), 30152 "Shpfy Catalog", 6922, 181, 6918, 6934, then Purchase Line 39 and Sales Line 37; Table 36 field 116 at **rank 12** (24.73), not shown | every one of the 83 scores 4 terms x 3 + 10 for the name; `lift` (`packages/search/src/score.ts:327`) gives a symbol no layer bonus (`symbol ? 0`) and no type prior, so a first-party app's field is not below a base table's; the tooltip text adds +1 per query word (`:344-350`), Shpfy Shop's tooltip repeats the field name ("Specifies which VAT. Bus. Posting Group is used"), Sales Header's is cut at 160 characters (`TEXT_MAX`, `pipeline/render/symbols-index.ts:36`) after "VAT"; importance (`:155-164`, inherited by symbols at `:53`: 0.87 for Table 36, 0.57 for Shpfy Shop) is worth at most 2 and loses to the text |
| `search("event: OnBeforeValidateWidgetCode", limit: 3)` (a name that does not exist) | `3 results, keyword (exact band: 0)` and three unrelated change pages tagged `[meaning]` | the keyword list is empty; the meaning list is pages only (`packages/mcp/src/server.ts:212`) and ignores the `event:` prefix; `how` reads "keyword" because `keyword.length` is 0 (`:234`); no hint rule says the band is empty (`packages/search/src/hints.ts` rules 1 to 5) |
| `get_object("table", "18", "BE")` | `(BE has no table of its own here; the W1 table applies.)` then the W1 page | the note fires whenever no page record carries `country: "be"` (`server.ts:287-292`); replaced W1 objects get no `-be` page by design (`pipeline/render/object.ts:141`, D52), yet BE replaces Table 18 with 3 added fields: `data/code/diffs/country/29-be.json` holds `11310 "Enterprise No." Text[50]`, `11311 "VAT Liable" Boolean`, `2000020 "Domiciliation No." Text[12]`, the event `OnBeforeValidateEnterpriseNo` and the procedure `FormatEnterpriseNo` |
| `search("field: Enterprise No.", country: "BE")`, `search("field: Domiciliation No.")` | 0 hits each | `renderSymbolsIndex` iterates `["w1", APPS]` only (`symbols-index.ts:54-67`: "country layers left out, D52"); no symbol row has a country, so `symbolToRecord` never sets one (`score.ts:47-60`) |
| `search("RT0005")`, `search("RT0005", type: "learn")` | 1 hit (a community post), hints `Did you mean "r 0005" (report 0005)?` and `"t 0005"`; with the filter: `No pages match` | identifiers come from single-backtick spans that pass `isIdentifier` (`pipeline/fetch/git-page.ts:71-73`: camelCase or PascalCase with a lowercase letter); `RT0005` has none, and the Learn page writes it bold in a table (`**RT0005**`); the row for `telemetry-long-running-sql-query-trace` carries `["eventID"]`; the parser reads `RT0005` as abbreviation `rt` + id 5 (`packages/search/src/parse.ts:40-46`) |
| `search("difference between IntegrationEvent and BusinessEvent")` | 0 hits; as `what is the difference between ...` still 0 hits and a hint for the hub "Migrating tables and fields between extensions" | every term must meet the record (`score.ts:397-404`); `difference` and `between` meet none of the pages that answer; a question is only `^(how|what|why|where|when|which)` or "changed in" (`parse.ts:52`), so the first form drops nothing; the hint's hub was found through "between". Underneath: `indexTokens` deduplicates (`normalize.ts:33-36`), so the article "Event types" (summary "... include business events, integration events, global events ...") is indexed as `event types in business central include events integration global ...`, and no phrase, quoted (`"integration event"`: 0 on that article) or a CamelCase alternate (`IntegrationEvent` → `integration event`: 0), can meet summary text; D94 met the same thing on tags and left Learn tags undeduplicated |
| frontmatter `counts.procedures: 657` under a summary saying "161 public procedures" (Table 36); 55 vs "8 public procedures" (Codeunit 414) | an agent reading the frontmatter and the sentence sees two numbers for one word | `counts.procedures` is `o.procedures.length` (`pipeline/render/object.ts:244`): public + local + event publishers + subscribers (161 + 102 + 394 + 0; 8 + 9 + 38 + 0); the summary prints `pub.length` (`:186-189, 225`); `schemas/frontmatter.object.json:124-153` describes none of the four required counts |

Measured on `c37ea42154` (commands in section 7):

| Measure | Value |
|---|---|
| Index records loaded as the MCP loads them (pages, Learn rows, symbols) | 160,111 |
| Symbol rows: fields / events | 55,930 (4,080,388 bytes) / 25,185 (2,473,931) (`data/index/symbols-manifest.json`) |
| Country diffs of major 29 / replaced W1 objects / replaced objects with at least one added public member | 22 / 1,878 / 1,370 |
| Added members of replaced objects, major 29, all countries: fields / events / global procedures | 5,811 / 581 / 1,493 (7,885 rows) |
| Tuple bytes of those rows with a country column, uncompressed | 497,796 (CA, MX and US are one NA layer: 50,211 each, so 100,422 of it is twins) |
| Learn rows (`learn-37bb84cbc43f.json`) / rows whose title or summary already holds a coded id / telemetry rows / analyzer rows | 8,050 / 1,224 / 83 / 285 |
| Learn blobs in this Mac's mirror / pages with a coded id outside code spans / distinct ids / where they stand (bold, table cell, code span, plain) | 470 / 8 / 35 / 35, 39, 1, 1 (a floor: the Mini holds every blob) |
| Golden rows (`tests/fixtures/search-golden.json`) / MCP package / plugin | 31 / `bc-observatory` 0.5.0 / 0.2.4 |

After this change:

- A field, event or procedure named like the query ranks by its owner: base application before first-party app
  before country layer, then importance; a tooltip never lifts a hit above its owner's standing. Table 36 field 116 is
  among the first three for `field: VAT Bus. Posting Group`.
- A `search` whose keyword list is empty says so in its first line, and a `kind:` query never pads with meaning hits.
  A symbol name that exists nowhere gets `No event named "...". Nearest: ...`.
- The members a country adds to a replaced W1 object are symbol rows with a country, found by `search(..., country)`;
  `get_object` with a country prints what the layer adds, from the diff, and never says the layer has nothing when it
  replaces the object. A W1 lookup says which layers replace the object and how much they add.
- A coded Learn identifier (telemetry event ids `RT0005`, `LC0234`; analyzer and diagnostic ids `AS0020`, `AL0281`;
  the same shape elsewhere) is indexed from code spans, bold spans and table cells, and the parser never reads one as
  an abbreviation.
- A question-shaped query (`what is`, `difference between`, `X vs Y`, `how to`, `when to use`) drops its question
  words, a phrase meets summary text, and the hint names the hub of the best Learn article.
- `counts.*` and "public procedures" are defined where an agent reads them. Nothing under `content/` changes.

## 2. Reader- and agent-facing behaviour, after

### 2.1 Ranking of same-named symbols (A)

`search("field: VAT Bus. Posting Group", object_type: "table", limit: 8)` returns, in this order of standing: the base
application's tables by importance (Table 15 "G/L Account" 0.97, Table 18 "Customer" 0.94, Table 23 "Vendor" 0.89,
Table 36 "Sales Header" 0.87, Table 39, Table 37, ...), then first-party apps (Expense, Shopify), then country layers.
Table 36 field 116 is within the first three of the keyword order and of the hybrid order (the exact band is pinned,
D86 4.2). The row text is unchanged: `- VAT Bus. Posting Group (field 116 of Table 36 "Sales Header", Code[20])
path=objects/table/36#field-116 [keyword]` then its tooltip.

The site's search page and the galaxy live search take the same order (one scorer, D86); nothing else moves: the 31
golden rows hold, `Posting Date` still lists Table 36 field 20 within its first five symbols.

### 2.2 Honest headers and the empty band (A)

- Keyword list empty, meaning list not (hybrid, a page query): the first line reads
  `No keyword match for "<query>"; <n> pages by meaning only (read one with cat(path)):` and the hits follow, each
  tagged `[meaning]`. `(exact band: 0)` is dropped from that line: it said what the sentence now says.
- A `kind:` query (`field:`, `event:`, `proc:`, `value:`) with no keyword hit: `No <kind> named "<name>".` then, when
  the index holds names near it, ` Nearest <kind>s: <a>, <b>, <c>.` as a hint line with `search` suggestions, and no
  meaning hits at all (symbols are never in the meaning list; padding a symbol question with pages misleads).
  `search("event: OnBeforeValidateWidgetCode")` → `No event named "OnBeforeValidateWidgetCode".` (nothing is near).
  `search("event: OnAfterPostSalesDocs")` → `No event named "OnAfterPostSalesDocs". Nearest events:
  OnAfterPostSalesDoc (Codeunit 80 "Sales-Post"), OnAfterPostSalesDocDropShipment (Codeunit 80 "Sales-Post").`
- A hybrid query with keyword hits keeps today's header: `12 results, keyword + meaning (exact band: 1) (read one with
  cat(path)):`.

### 2.3 Country-added members (B)

- `search("field: Enterprise No.", country: "BE")` →
  `- Enterprise No. (field 11310 of Table 18 "Customer", BE layer, Text[50]) path=objects/table/18#field-11310 [keyword]`.
  Without the filter the same row appears after any W1 or app field of that name (layer 2 ranks last, section 4.1);
  `search("Domiciliation No.")` finds field 2000020 of Table 18 in the BE layer and the BE pages that carry the word.
  A BE event row reads `- OnBeforeValidateEnterpriseNo (event of Table 18 "Customer", BE layer, integration,
  0 subscribers) path=objects/table/18#event-OnBeforeValidateEnterpriseNo`.
- `cat("objects/table/18#field-11310")` (the anchor is on the W1 page, where no such row exists today) answers from
  the diff: `Table 18 "Customer", field 11310 (added by the BE layer, not in W1):` and one table row
  `| 11310 | Enterprise No. | Text[50] | Caption "Enterprise No."; OptimizeForTextSearch | BE |`, then
  `W1 page: https://waldo1001.github.io/waldo.BCObservatory/objects/table/18/ · BE layer: localizations/be`.
- `get_object("table", "18", "BE")` prints, before the W1 page (compact or whole, D93 unchanged):

  ```
  BE replaces Table 18 "Customer" (BC29): +3 fields, +1 event, +1 procedure; 1 key changed.
  Fields added: 11310 "Enterprise No." Text[50]; 11311 "VAT Liable" Boolean; 2000020 "Domiciliation No." Text[12]
  Events added: OnBeforeValidateEnterpriseNo(var Customer: Record Customer; xCustomer: Record Customer; CurrFieldNo: Integer; var IsHandled: Boolean) (integration)
  Procedures added: FormatEnterpriseNo(EnterpriseNo: Text; CountryCode: Code[10]): Text (local)
  Keys changed: Key14 (+Enterprise No.)
  Source: data/code/diffs/country/29-be.json; the BE page: localizations/be.
  ```

  Fields, events and procedures changed in the layer (not added) are counted in the first line (`n fields changed`)
  and listed only when the diff carries a `delta`; the block is capped at 40 member lines, then `... and n more:
  localization("BE", section: "w1_objects_this_country_changes")`.
- The note `(BE has no table of its own here; the W1 table applies.)` is printed only when the country's diff holds no
  entry for the object (BE and Table 11300 stay as today: a BE-only object has its own page).
- `get_object("table", "18")` without a country adds one line after the "Also in" line:
  `Replaced in: AU (+2 fields), BE (+3 fields, +1 event, +1 procedure), CA, ES, ..., US (+n fields).` (a layer with no
  added member is named without a count; the order is alphabetical).
- `localization("BE")` is unchanged (its table keeps the counts; the names are one `get_object` away).
- `bc-localization/SKILL.md` step 2 says: "`get_object(type, id, country)` prints what the layer adds to a W1 object
  (fields, events, procedures with ids and types) before the W1 page; `search("field: <name>", country: "BE")` finds
  a field a layer adds."

### 2.4 Coded Learn identifiers (C)

- `search("RT0005")` → first `- Analyzing Long Running Operation (SQL Query) Telemetry [learn, official, 2026-06-02]
  url=https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-long-running-sql-query-trace`,
  then the event-ids page and the authorization-trace article (its KQL names RT0005 in a code fence: not an
  identifier, D94, so it ranks by its summary only if it mentions the id), then the community post that already
  matched. `search("RT0005", type: "learn")` → the same Learn rows. No "Did you mean r 0005" hint.
- `search("AS0020")` and `search("AL0281")` keep their article first (found by title today) and gain the exact band:
  a title or an identifier tag equal to the query counts as the name (D86 `name` rule applies to Learn rows already
  for titles; an identifier equal to the whole query is added to `eqs`).
- `search("LC0234")` finds "Analyzing AppSource app validation trace telemetry" through its bold table cell.

### 2.5 Question-shaped queries (D)

- `search("difference between IntegrationEvent and BusinessEvent")` → the Learn article "Event types" and the
  "IntegrationEvent attribute" and "BusinessEvent attribute" articles in the first three, each `[keyword]`; then
  `Hint: For a concept, start with the hub: Events (cat("topics/dev-itpro/development/programming-in-the-al-language/events"))`.
  The hub is the one the best Learn hit is listed under, not a hub found through a dropped word.
- The same for `what is the difference between IntegrationEvent and BusinessEvent`, `IntegrationEvent vs
  BusinessEvent`, `IntegrationEvent versus BusinessEvent`, `how to use IntegrationEvent`, `when to use BusinessEvent`.
- `search("\"integration event\"")` (a quoted phrase) meets the summaries that hold the phrase, in either number.
- The hint for a what-changed question keeps its text (`For what changed, open the object's Versions section or
  Changes ...`); the concept hint is new wording for the other shapes.

### 2.6 Counts (documentation only)

- `schemas/frontmatter.object.json`: `counts.fields` "fields declared on the object"; `counts.procedures` "every
  procedure declared in the object: public, local, event publishers and event subscribers (the summary's 'public
  procedures' counts neither locals nor events)"; `counts.events` "published integration and business events";
  `counts.subscribers` "event subscriber procedures".
- `get_object`'s description gains: "`counts.procedures` in the frontmatter counts every procedure (public, local,
  events, subscribers); the summary's 'public procedures' excludes locals and events."
- `plugin/skills/bc-lookup/SKILL.md` step 2 gains the same sentence. No page is rewritten.

## 3. Decisions

Draft D95 for `docs/DECISIONS.md`:

> **D95 An MCP answer names what it did not find, and a symbol stands where its owner stands.** The 2026-10-13
> side-by-side test against the Microsoft Learn MCP found every object fact right and six answers wrong before the
> facts: a field of Table 36 ranked 12th among 83 same-named fields because a tooltip repeating the name outweighed
> the owner (`lift` gave symbols no layer and the text +1 per word); a nonexistent event returned three meaning-only
> pages under a header reading "keyword"; `get_object("table", "18", "BE")` said BE has no table of its own although
> the BE diff records three added fields; `RT0005` found nothing because identifiers were camelCase code spans only
> and the parser read it as "report 5"; "difference between IntegrationEvent and BusinessEvent" found nothing because
> every word had to meet the record and `indexTokens` deduplicates, so no phrase could meet a summary; and
> `counts.procedures` was undefined next to "public procedures". Fixes, deterministic, no page under `content/`
> rewritten (the owner's storage line): (a) a symbol takes its owner's layer and type prior in `lift`, and a hit whose
> name equals the query takes no text points; (b) an empty keyword list says so first, a `kind:` query never pads
> with pages, and hint rule 6 names the nearest symbols; (c) the symbols writer adds the members a country layer adds
> to a replaced W1 object from `data/code/diffs/country/<major>-<cc>.json` as rows with a trailing country column
> (7,885 rows, about 0.5 MB raw for major 29), `symbolToRecord` makes them layer 2 under the W1 owner, `get_object`
> prints the layer's additions from the diff and `cat` of such an anchor answers from it; (d) coded identifiers
> (`^[A-Z]{2,3}\d{4}$`) join `meta.identifiers` from code spans, bold spans and table cells, backfilled like D94, and
> the parser treats them as terms; (e) a question-shaped query drops its question words, phrases match an ordered
> token stream (deduplication stays for postings), and the concept hint names the best Learn hit's hub; (f) the
> schema, the tool description and `bc-lookup` define `counts.*`. Rejected: a page per replaced country object (D52's
> reason: 1,878 pages on the tar); a "Country layers add" section on W1 object pages and names on the localization
> table (bytes on the biggest pages; the owner chose not now); Learn rows in the meaning list (D94 holds; the owner
> chose keyword only); indexing Learn body text (D01); a telemetry-id index of its own (the identifier rule covers
> it); an LLM query rewrite (no model call in search); splitting `counts` into new keys (25,646 pages rewritten for
> a definition). Spec: `docs/specs/mcp-answer-quality.md`.

Other choices, with what was rejected:

- **Text points on an exact name (A).** Rejected a weight cap (text at most 1 in all): a non-exact hit still earns its
  text points, and a cap keeps the owner's standing hostage to tooltip wording. Rejected dropping the tooltip from the
  shard (it is the row's explanation line).
- **Layer and prior for symbols (A).** The owner's `layer` (0, 1, 2) and `TYPE_PRIOR` (table 0.3 ...) already live on
  the symbol record; the change is `lift` reading them. Rejected a symbol-specific layer table.
- **No meaning hits on a `kind:` query (A).** Rejected keeping them under a "related pages" line: the test showed an
  agent reads three unrelated change pages as an answer about an event.
- **Country rows in the existing shards (B).** Rejected a separate `symbols-country-*` shard: the loader joins rows to
  owners by `pk` and reads columns by position, so a trailing column costs nothing and an installed 0.5.0 ignores it.
  Rejected rows for country table extensions: the diff carries no members for them (`countryDiff`,
  `pipeline/code/diff.ts:156-165`, writes `{key, name, change: "added", ns}`); section 8.
- **`get_object` reads the diff at call time (B).** Rejected rendering the block into the W1 page (bytes on 1,878
  pages) and a sidecar file per object (1,878 files on the tar). The diff files already ship under `data/code/diffs/
  country/` and are fetched like a shard, once a day.
- **Coded-id rule (C).** `^[A-Z]{2,3}\d{4}$`: telemetry (`RT`, `LC`, `AL`, `AW`), analyzers (`AS`, `AA`, `AW`, `PTE`
  is 3 letters), diagnostics (`AL`). Rejected `\d{3,5}`: `IRS1099` and years creep in. Bold spans and table cells
  are read because Learn writes event ids bold in dimension tables; plain-text ids are not (`plain: 1` of 35 on the
  local blobs, and prose repeats ids of other events).
- **Question words (D).** The existing `QUESTION_WORDS` set gains `difference`, `differences`, `between`, `vs`,
  `versus`, `compare`, `comparison`, `use`, `used`, `using`, `mean`, `means`; `and`, `or`, `the`, `of`, `in`, `to` are
  there already. A dropped word is recorded in `q.dropped`; a quoted phrase keeps every word. Rejected dropping them
  from every query: `Sales and Receivables Setup` is a name.
- **Ordered tokens for phrases (D).** `Norm` gains `seq` (the ordered, undeduplicated token list of name, title,
  caption and text) used by `phraseForm`; `main`, `tags`, `text` stay deduplicated for word scoring and postings.
  Rejected undeduplicating `text` (every word would score once per occurrence).

## 4. Contract

### 4.1 `packages/search/src/score.ts`

- `lift` (`:327`): `base + (objectish ? LAYER[r.layer] : 1) + (objectish ? 2 * r.importance : 0) + prior`, where
  `prior` is `TYPE_PRIOR[r.objectType]` for objects and symbols alike. Today's `symbol ? 0` goes.
- After `eq` is known (`:361`): when `eq > 0` the text contribution is removed from `s` (compute `textPts` in the term
  loop; `if (eq) s -= textPts`). `why` unchanged.
- `Norm.seq: string[]` (ordered tokens of name, title, caption, then text, `tokenize` not `indexTokens`); `best()`
  evaluates phrases against `seq` for every field (`main`, `tags` of a Learn row keep their own order already,
  `text`), words against the deduplicated lists as today.
- `eqs` of a Learn record: its title and each identifier tag as one-word names (`[tokenize(title), ...tags.map((t) =>
  tokenize(t))]`), so `AS0020` and `includeSourceInSymbolFile` are the exact band ("name").
- `symbolToRecord(kind, row, owner)`: a trailing country column (`row[5]` for fields, `row[6]` for events and procs,
  `row[4]` for values; a two-letter string) sets `country`, `app: "<CC> layer"`, `layer: 2`; without it, as today.
  `symbolLine` prints `, <CC> layer` after the owner for such a record (`field 11310 of Table 18 "Customer" · BE layer
  · Text[50]`).
- `search()` unchanged; `byRank` unchanged.

### 4.2 `packages/search/src/parse.ts` and `synonyms.ts`

- `isCodedId = (w: string) => /^[A-Z]{2,3}\d{4}$/.test(w)` exported from `normalize.ts`; in `parseQuery` the
  reference regex at `:40` is skipped for a whole query (or a word) that is a coded id; `tokenize` keeps it one token
  (it already does: `rt0005` is one token, `vocab` check in section 7).
- `q.question` is true for: `^(how|what|why|where|when|which|who|should|can|is|are|does|do)\b`, `\bchanged in\b`,
  `\bdifference(s)? between\b`, `\b(vs|versus)\b`, `^compare\b`, `^(how|when) to\b`. `q.dropped: string[]` lists the
  removed words. `QUESTION_WORDS` gains the words of section 3.
- `q.shape: "what-changed" | "how-to" | "concept" | null`: `what-changed` for "changed in"; `how-to` for `^how (do|to)`
  and `^when to`; `concept` for the rest of the question forms.

### 4.3 `packages/search/src/hints.ts`

- Rule 4 by shape: `what-changed` keeps today's text; `how-to` and `concept` read `For <how-to | a concept>, start
  with the hub: <title>` where the hub is, in order: the hub of the first Learn hit (`r.page.hub`, a path), else the
  best hub by `namedBy` over the terms that were not dropped. `path` is the hub path.
- Rule 6 (`kind` set, no hit): candidates are the symbol records of that kind whose lowercased name starts with the
  query's first five letters or is within edit distance 2 of it (`editDistance` from `normalize.ts`), at most 3, by
  distance then owner importance; text `No <kind> named "<raw>".` plus ` Nearest <kind>s: <name> (<owner title>), ...`
  when any; `query: "<kind>: <name>"` on the first. For a hit-less `kind:` query the server prints this line instead
  of `No pages match`.

### 4.4 `packages/mcp/src/server.ts`

- `toolSearch`: when `q.kind` is set, `semantic` stays empty (skip the model). Header forms (section 2.2): when
  `keyword.length === 0 && semantic.length` → `No keyword match for "<q>"; <n> pages by meaning only (read one with
  cat(path)):`; `(exact band: n)` printed only with `keyword + meaning`.
- `toolGetObject`: with a country and no `-cc` page record, load `code/diffs/country/<major>-<cc>.json` (`major` =
  `symbols-manifest.json`'s `major`, else the newest `<major>-<cc>` the index manifest names; cached like a shard with
  its sha from `data/code/diffs/country/manifest.json` if present, else by name for a day) and look up
  `objects[].key === "<type>/<id>"`: `change: "replaced"` prints the block of section 2.3 (`countryBlock(diffObject,
  cc, major)` in a new `packages/mcp/src/country.ts`, pure, tested); no entry prints today's note. Without a country,
  the "Replaced in" line comes from the same files' `summarize`-style counts, computed once per object at call time
  (22 files, read once a day).
- `toolCat` with an anchor the page lacks: before `(No row for ...)`, try the symbol index for a record at that id;
  when it has a country, answer from the diff (section 2.3). `anchorView` unchanged for rows the page has.
- Tool descriptions: `search` adds "a hit-less `kind:` query names the nearest symbols; a question drops its question
  words"; `get_object` adds the country block and the counts sentence (2.6). `site/src/lib/mcp.ts` mirrors them.
- Package version 0.6.0; `packages/mcp/README.md` "Ranking" paragraph gains one sentence on symbols and layers.

### 4.5 `pipeline/render/symbols-index.ts`

After the `["w1", APPS]` loop, for every `<major>-<cc>.json` under `data/code/diffs/country/` of the same `major`:
for each object with `change === "replaced"` whose W1 page key the pages map knows, each `fields[]` member with
`change === "added"` → `[pk, name, Number(id), to.type, cutText(to.properties?.ToolTip ?? null), cc]`; each
`procedures[]` member with `change === "added"`: `to.event` integration or business → `[pk, name, to.event, 0,
cutText(to.doc), to.obsolete?.state ?? null, cc]` into events; `to.scope === "global" && !to.event` → `[pk, name,
to.params.length, to.returns ?? null, cutText(to.doc), to.obsolete?.state ?? null, cc]` into procs. Values: a
country's added enum values when the diff carries `values[]` (check; else none). Sort as today, country rows after
W1 rows of the same pk (the comparator adds the column last). Manifest `schema` stays `bcobs-symbols@1` (rows only
gained a trailing column); `objects` counts W1 and app objects as today; a new `country_rows: { fields, events,
procs, values }` on the manifest says how many.

### 4.6 `pipeline/fetch/git-page.ts` and `pipeline/orchestrator/nightly.ts`

- `pageIdentifiers(body)`: after the code-span pass, a second pass over bold spans (`/\*\*([^*\n]+)\*\*/g`) and table
  cells (lines starting with `|`, split on `|`), keeping only matches of `isCodedId` on the whole trimmed span or on
  whole words of a cell; same `seen`, same `IDENTIFIERS_MAX`, order of first appearance after the code-span ones.
  `isCodedId` lives next to `isIdentifier`.
- `backfillIdentifiers`: items whose `meta.identifiers` were written before this rule need a rerun; add
  `meta.identifiers_rule: 2` on every item the fetched stage or the backfill writes from now on, and let the backfill
  take items with no `identifiers_rule` or a lower one (no stage re-runs, no page rewritten, D94's mechanism). The
  run report's `learn_identifiers` block gains `rule: 2`.

### 4.7 Data shapes

One field row with a country, in `symbols-fields-<sha12>.json`:

```json
["table/18", "Enterprise No.", 11310, "Text[50]", null, "be"]
```

One event row: `["table/18", "OnBeforeValidateEnterpriseNo", "integration", 0, null, null, "be"]`. Manifest addition:
`"country_rows": { "fields": 5811, "events": 581, "procs": 1493, "values": 0 }` (major 29, expected; the coder
writes the measured numbers into section 12).

## 5. Test plan (write first)

`tests/unit/search-core.test.ts`
- `lift`: two field records named "VAT Bus. Posting Group", owner A `layer 0, importance 0.87, text "Specifies the
  VAT specification..."`, owner B `layer 1, importance 0.57, text "Specifies which VAT Bus. Posting Group is used"`;
  `field: VAT Bus. Posting Group` → A before B; both `why` contain `name`.
- text on eq: a field named "Posting Date" with text "Specifies the posting date" and one named "Posting Date Filter"
  with no text; query `Posting Date` → the first has no text points (score equals the second's minus the starts
  difference), still first through `name` vs `starts`.
- `seq`: a page with summary "business events, integration events"; query `"integration event"` → score > 0; query
  `IntegrationEvent` → score > 0, `how` prefix 0.75.
- Learn `eqs`: a Learn row with tags `["AS0020"]`, title "AppSourceCop Error AS0020"; query `AS0020` → `why` has
  `name`; query `appsourcecop error as0020` → `name` too.
- parser: `RT0005` → one term `rt0005`, no warning, `ref` null; `rt 0005` → still the abbreviation path (unknown
  abbreviation); `difference between IntegrationEvent and BusinessEvent` → terms `integrationevent`, `businessevent`,
  `dropped` has `difference, between, and`, `question` true, `shape` `concept`; `IntegrationEvent vs BusinessEvent`
  → same two terms; `Sales and Receivables Setup` → `and` kept (no question); `"between the lines"` → the phrase keeps
  `between`.
- `symbolToRecord` with a trailing `"be"`: `country "be"`, `app "BE layer"`, `layer 2`, `symbolLine` prints `BE layer`.
- hints: rule 6 on a fixture with events `OnAfterPostSalesDoc` and `OnAfterPostSalesDocDropShipment`: query
  `event: OnAfterPostSalesDocs` → text `No event named "OnAfterPostSalesDocs". Nearest events: OnAfterPostSalesDoc
  (...), OnAfterPostSalesDocDropShipment (...)`, `query "event: OnAfterPostSalesDoc"`; `event: OnBeforeValidateWidgetCode`
  → the first sentence only. Rule 4 `concept`: a Learn row with `hub` → hint path is that hub; without Learn hits →
  `namedBy` over the kept terms (a hub titled "Migrating tables and fields between extensions" is not chosen for a
  query whose only match was the dropped word).

`tests/unit/symbols-index.test.ts`
- A fixture diff `29-be.json` with one replaced table (two added fields, one added integration event, one added
  global procedure, one added local procedure, one changed field) and one `added` object → rows: 2 fields, 1 event, 1
  proc, each with `"be"` last; the local procedure and the changed field produce none; `country_rows` on the manifest;
  a W1 row of the same pk sorts before the country row.

`tests/unit/mcp.test.ts`
- `search("event: OnBeforeValidateWidgetCode")` with the toy model → `^No event named "OnBeforeValidateWidgetCode"`;
  no `[meaning]` in the answer.
- A page query whose keyword list is empty with the toy model → `^No keyword match for`; every hit `[meaning]`.
- `get_object("table", "18", "BE")` on a fixture with `data/code/diffs/country/29-be.json` → starts with `BE replaces
  Table 18 "Customer" (BC29): +2 fields, +1 event, +1 procedure`; `get_object("table", "11300", "BE")` → the BE page as
  today; `get_object("table", "18")` → contains `Replaced in: BE (+2 fields, +1 event, +1 procedure)`.
- `cat("objects/table/18#field-11310")` on that fixture → `added by the BE layer`.
- `search("field: Enterprise No.", country: "BE")` → one hit, `BE layer`.

`tests/unit/git-page.test.ts`
- `pageIdentifiers` on a body with `` `allowDebugging` ``, `**RT0005**`, a table row `| eventId | **RT0006**This ... |`,
  a cell `| LC0234 | ...`, prose `RT0007`, a fence holding `RT0008` → `["allowDebugging", "RT0005", "RT0006", "LC0234"]`.
- `backfillIdentifiers` takes an item with `identifiers` but no `identifiers_rule`, leaves one with `identifiers_rule: 2`.

`tests/fixtures/search-golden.json` (rows added; both runners):
- `{ "q": "field: VAT Bus. Posting Group", "where": "first-symbol", "kind": "field", "name": "VAT Bus. Posting Group",
  "within": { "id": "objects/table/36#field-116", "n": 3 } }`
- `{ "q": "event: OnBeforeValidateWidgetCode", "where": "none", "hint": "no event named" }`
- `{ "q": "RT0005", "expect": "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-long-running-sql-query-trace", "where": "top" }`
  (pending until the backfill has run on the Mini: the row carries `pending` with that reason)
- `{ "q": "AS0020", "expect": "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0020", "where": "top" }`
- `{ "q": "difference between IntegrationEvent and BusinessEvent", "expect": "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types", "where": "top3", "hint": "start with the hub: Events", "hint_path": "topics/dev-itpro/development/programming-in-the-al-language/events" }`
- `{ "q": "field: Enterprise No. BE", "where": "first-symbol", "kind": "field", "name": "Enterprise No.", "within": { "id": "objects/table/18#field-11310", "n": 1 } }`
  (the golden root renders the symbols index from the committed `data/code/`, so the country rows exist in the test)

## 6. Tasks

Phases that ship alone, in this order; none rewrites a page under `content/`, none adds a model call.

1. **A: ranking and headers** (`score.ts`, `server.ts`, `hints.ts`, tests, golden rows 1 and 2, the counts texts of
   2.6, README, `site/src/lib/mcp.ts`, MCP 0.6.0). One PR.
2. **D: question-shaped queries and phrases** (`parse.ts`, `synonyms.ts`, `normalize.ts` `seq`, `hints.ts` rule 4,
   golden row 5). One PR; re-run the 31 golden rows in both runners and the site's headless sweep of D86 section 7.
3. **C: coded identifiers** (`git-page.ts`, `nightly.ts`, run-report schema, parser, Learn `eqs`, golden rows 3 and
   4). One PR; the next full nightly backfills (the Mac holds 470 of 8,050 blobs: the measured floor is 8 pages with
   35 ids; the Mini's run reports the real number in `learn_identifiers`), the derive after it rewrites the Learn
   shard (expected growth: tens of KB; 1,224 rows already name an id in their title or summary).
4. **B: country-added members** (`symbols-index.ts`, `score.ts` `symbolToRecord`/`symbolLine`, `server.ts`
   `toolGetObject`/`toolCat`, `packages/mcp/src/country.ts`, `bc-localization`, golden row 6, MCP 0.7.0). One PR; the
   derive the merge triggers writes the fields, events and procs shards once (about 7,885 rows, about 0.5 MB raw,
   section 7 measures the gzipped delta).

## 7. Verification

- `npm run typecheck && npm test` green per phase; `tests/unit/search-golden.test.ts` and `mcp-golden.test.ts` with
  the new rows; the 150 ms tripwire holds.
- Local MCP (`BC_OBSERVATORY_LOCAL=<worktree>`, `BC_OBSERVATORY_EMBEDDINGS=0` and once with the model) over an index
  rendered from the committed content (`goldenRoot`): the six queries of section 1 give the section 2 answers.
- Site: `npm run build` under Node 22 (`nvm`), then the headless check of D86 section 7 for `field: VAT Bus. Posting
  Group`, `RT0005`, `difference between IntegrationEvent and BusinessEvent`; the hints render.
- Bytes: `node scripts/site-size.ts` on the same content before and after phase 4; expected delta = the three symbol
  shards' growth only (about 0.5 MB raw; report the tar number next to 689.1 MB of D90); nothing else differs. The
  tar stays under the 800 MB warning.
- `npm run check:leak` before every commit on the Mini (unchanged rule).
- The numbers of section 1, reproduced on the commit named in the header:
  - country rows and bytes: a node script over `data/code/diffs/country/29-*.json` counting, per `change: "replaced"`
    object, members with `change: "added"` (fields; procedures with `to.event` as events; procedures with `to.scope`
    not `local` and no event as procs) and summing `JSON.stringify(row).length + 1` for the tuple of 4.7 with the
    country last → `{ countries: 22, replaced: 1878, objs: 1370, fields: 5811, events: 581, procs: 1493, bytes: 497796 }`.
  - today's rankings: bundle `packages/search/src/index.ts` with esbuild (`--bundle --platform=node --format=esm`),
    load `data/index/index-manifest.json`'s shards, the Learn shard and the symbol shards as `loadIndex` does
    (`server.ts:86-113`), then `search(prepare(...), parseQuery(q, { countries: countriesOf(index) }))`:
    `field: VAT Bus. Posting Group` → 92 hits, exact band 83, `objects/table/36#field-116` at 12; `RT0005` → 1 hit,
    hints `r 0005`, `t 0005`; `difference between IntegrationEvent and BusinessEvent` → 0; `scoreRecord` of the
    "Event types" Learn row for `IntegrationEvent` → 0, for `integration event` (two words) → 6.
  - coded ids on local blobs: for every `data/manifest/docs/**/*.json` with `stages.fetched.blob`, `git cat-file
    --batch` in `.cache/git-mirrors/<source>.git` with `GIT_NO_LAZY_FETCH=1`, then count `^[A-Z]{2,3}\d{4}$` matches in
    code spans, `**bold**` spans and `|` table cells outside fences → `{ local: 470, withId: 8, distinct: 35, where:
    { code: 1, bold: 35, cell: 39, plain: 1 } }`.
  - Learn rows naming a coded id already: `rows.filter(r => /\b[A-Z]{2,3}\d{4}\b/.test(r[1] + " " + r[2])).length`
    over `data/index/learn-37bb84cbc43f.json` → 1,224.

## 8. Later, not in this spec

- Members of country table extensions (BE's `tableextension/11310 "Location BE"` adds field 11311 "Branch No.";
  the diff writes such objects as `added` without members): extend `countryDiff` to carry them, then the same rows.
- "Extended by" on W1 pages leaves out country table extensions (`diff.ts:325-333` reads W1 and apps only): a page
  change, bytes, its own decision.
- A "Country layers add" section on W1 object pages and member names on the localization table: the owner's "not
  now" of 2026-10-13; the data and the `countryBlock` renderer of 4.4 make it a rendering task later.
- Learn rows in the meaning list (D94 keeps them keyword-only); embeddings for symbols.
- A `get_symbol(kind, name, owner?)` tool: `cat` of the anchor covers it.
- Identifiers from double-backtick spans and from the `ms.search.form` ids (D94 section 8).

## 9. Risks and open questions

- **Installed MCP 0.5.0 and the trailing column.** `symbolToRecord` reads `row[0..4]` by position and ignores a sixth
  element; `symbolRecords` skips rows whose owner is not loaded (a W1 pk always is). Default: no schema bump; the
  coder verifies with 0.5.0 from npm against the new shards before merging phase 4 (`npx bc-observatory@0.5.0` in
  local mode).
- **A W1 object with no page record** (none today: every W1 and app object of the pages' major has a page) would
  drop its country rows silently; acceptable.
- **Text points and the demotion.** Removing text points on `eq` lowers an exact symbol's score by at most the term
  count; the band test (`why` has `name`) does not read the score. Default: keep; the golden `Posting Date` row guards
  the W1 owners' order.
- **Question words in names.** `use` and `mean` are now question words: `Use Case`-like names lose a word only when
  the query is question-shaped (`q.question`), never otherwise. Default: as specified; a golden row for a plain query
  with "use" is not needed.
- **`seq` memory.** One more array per record (160,111 records): the ordered tokens of title, caption and summary,
  about the size of `text` again; measured in phase 2 (`process.memoryUsage()` before and after `prepare`), expected
  under 30 MB. If above 60 MB, build `seq` lazily per record on the first phrase query (the `NORM` cache already is).
- **Backfill rule 2 on the Mini.** The first full nightly after phase 3 rereads 8,050 blobs (D94 measured 2.5 s for
  4,365 on the Mac); the Learn shard changes once. Default: run it in the normal nightly; no unlimited run needed.
- **Pending golden row for RT0005.** Until the backfill has run, the committed `data/manifest/docs` lacks the id, so
  the row is `pending`; the coder flips it after the first nightly with `learn_identifiers.rule: 2`.
- **`get_object` reading 22 diff files for "Replaced in".** First call per day fetches them (about 22 requests to
  the site, each file a few hundred KB; `29-ru.json` is the largest); cached like shards. Default: fetch lazily on
  the first W1 lookup and keep in memory; if the delay shows (over 2 s on a cold cache), read only
  `data/code/diffs/country/manifest.json` summaries for the line and the full file only for the country asked.

## 10. Files

New: `packages/mcp/src/country.ts`, `tests/fixtures/country-diff/29-be.json` (the MCP and symbols fixtures), this
spec. Changed: `packages/search/src/{score,parse,synonyms,normalize,hints,types}.ts`, `packages/mcp/src/server.ts`,
`packages/mcp/README.md`, `packages/mcp/package.json`, `pipeline/render/symbols-index.ts`,
`pipeline/fetch/git-page.ts`, `pipeline/orchestrator/nightly.ts`, `schemas/run-report.json`,
`schemas/frontmatter.object.json` (descriptions only), `site/src/lib/mcp.ts`, `plugin/skills/{bc-lookup,
bc-localization}/SKILL.md`, `tests/unit/{search-core,symbols-index,mcp,git-page,mcp-golden,search-golden}.test.ts`,
`tests/fixtures/search-golden.json`, `docs/PLAN.md`, `docs/HANDOFF.md`; `docs/DECISIONS.md` at ship time. Generated
by the pipeline after the merges: `data/index/symbols-*.json`, `symbols-manifest.json`, `data/manifest/docs/**`
(identifiers), `data/index/learn-*.json`. No file under `content/`.

## 11. Definition of Done

- [ ] Section 5 tests green; typecheck and the full suite green per phase; the golden set holds with the new rows
      (RT0005 pending until the backfill).
- [ ] The six queries of section 1 answer as section 2 says, on a local MCP over a fresh index.
- [ ] `scripts/site-size.ts` before and after phase 4 recorded in section 12; nothing but the symbol shards differs;
      the tar stays under 800 MB.
- [ ] An installed `bc-observatory@0.5.0` still searches over the new shards (risk 1).
- [ ] D95 appended to `docs/DECISIONS.md` (text from section 3, with the measured numbers), M33 marked shipped in
      `docs/PLAN.md`, the HANDOFF entry moved to "Where things stand" with the deviations; this section renamed
      "Built, deviations".
- [ ] After the first full nightly: `learn_identifiers` reports `rule: 2`, the Learn shard carries `RT0005`, the
      pending golden row flipped.

## 12. Proposed edits to other files (not applied)

- `docs/DECISIONS.md`: the D95 text of section 3.
- `docs/PLAN.md` section 5, before the `v0.2+` row:
  `| **M33 MCP answer quality** | symbols ranked by their owner's layer and importance, no text points on an exact name; an empty keyword list named in the header, no meaning padding on a kind: query, nearest-symbol hints; country-added members of replaced W1 objects as symbol rows with a country and a get_object block from the diff; coded Learn ids (RT0005, AS0020) from code spans, bold spans and table cells with a rule-2 backfill; question-shaped queries drop their words and phrases meet summaries; counts.* defined (\`docs/specs/mcp-answer-quality.md\`, D95, proposed) | 3 to 4 days in four phases | none: deterministic, no LLM |`
- `docs/HANDOFF.md`, "Open specs, not yet implemented": the entry the spec session adds (section 7 of the skill).
- `plugin/skills/bc-lookup/SKILL.md` step 2: "The frontmatter's `counts.procedures` counts every procedure (public,
  local, events, subscribers); the summary's 'public procedures' excludes locals and events."
- `plugin/skills/bc-localization/SKILL.md` step 2: the sentence of section 2.3.
- `AGENTS.md`: no change (the MCP tool list is unchanged).

## 13. Built, deviations (2026-10-13)

Built 2026-10-13 on `build/mcp-answer-quality` from `d9da834993`, by Sonnet coding agents per phase with an Opus review of
the two scorer phases (A and D) and a fix commit for each review: `43c2f1417b` (A), `87155ed0d6` (D), `15751c578c` (A
review), `714b043d4b` (D review), `2052a38f8e` (C), `9deaec2bbc` (C: only coded-id tags are a name), `f1f88acf1d` (B).
Typecheck and the full suite green at the end: 606 tests, 605 pass, 1 skipped (the RT0005 golden row, pending until
the rule-2 backfill has run on the Mini); 45 golden rows hold in both runners (31 before); `validate:content` OK; the
MCP bundle builds. Not run here: `check:leak` (a Mini step), `scripts/site-size.ts` on a full build.

**Measured on the committed data (160,111 records, keyword mode).**

| Query | Before | After |
|---|---|---|
| `field: VAT Bus. Posting Group` (object_type table) | Table 36 field 116 at rank 12, Shpfy Shop first | rank 4: Tables 15, 18, 23, 36, 38, 39, 37, 81 (base tables by importance) |
| `posting`, `purchase`, `journal`, `customer`, `Posting Date` | | identical to before (guarded by golden `no_symbol_in_top` rows) |
| `event: OnBeforeValidateWidgetCode` (also as `kind: "event"`) | 3 meaning-only pages under "keyword (exact band: 0)" | `No event named "OnBeforeValidateWidgetCode".` |
| `difference between IntegrationEvent and BusinessEvent` (and `what is the ...`, `... vs ...`) | 0 hits | Event types in top 3, hint `For a concept, start with the hub: Events.` |
| `RT0005`, `LC0234` | 1 post with hints "r 0005", "t 0005" / 0 hits | no false hint; after the rule-2 backfill (4,364 local blobs): the telemetry article first, exact band |
| `get_object("table","18","BE")` | "(BE has no table of its own here ...)" | `BE replaces Table 18 "Customer" (BC29): +3 fields, +1 event, +1 procedure; 6 keys changed.` and the members |
| `search("Domiciliation No.")` | 0 symbol hits | field 2000020 of Table 18 "Customer", BE layer, first |

Symbol shards with country rows (7,945 rows): fields +5,811 (+357 KB raw, +71 KB gzip), events +581 (+50 / +6 KB),
procs +1,421 (+86 / +13 KB), values +132 (+5 / +1 KB): about +499 KB raw, +92 KB gzip on the Pages tar, no page touched.
Coded ids on the 4,364 local Learn blobs: 72 pages, 280 distinct ids (LC 152, RT 55, AS 25, AVS 20, AL 6; some noise
such as `FY2024`, `NAV2017`). Search latency on the golden set: median 0.7 ms, max 25 ms. Installed MCP 0.5.0 reads the
new shards without error (a country row shows as a W1 member without its label).

**Deviations.**

- **A.** Symbols get their owner's layer, the type prior and no text points on an exact name only when the query asks
  for symbols (a `kind:` prefix or parameter, a type word, a digit, a member word, an event-shaped word). Applied to
  every query, as first built, it put enum values named "Posting" or "Purchase" above Learn articles on the site and
  in the MCP (Opus review). The VAT golden row expects rank 4, not 3: three base tables are more important than
  Table 36. Rule 6 decides "no such symbol" on the unfiltered search: when only the filters emptied the list it says
  `No field named "..." matches the filters (object_type=codeunit); without them: n hits.`; no nearest list under 4
  letters. `(exact band: n)` is printed only with `keyword + meaning`. The `search` description was trimmed to stay in
  the D93 budget.
- **D.** `seq` is built per scored record and only for a field holding every phrase word (an eager `Norm.seq` cost
  +168 MB). Question openers are narrower than section 4.2: `is/are/can/could/should/do/does` open a question only
  before a pronoun (or an article in a query of 5+ words or ending in `?`), capital `IS` never, `compare` only as
  `compare X and|with|to|vs Y`, `vs` only between two content words and never in `VS Code` or `vs.`; `use/used/using`
  drop only after `to, I, we, you, it, can, should, between, and, or`. The first build turned "Is Enabled", "Compare
  List" and "VS Code" into questions (84 names ranked their own record lower; 2 now, both still in their top four).
  The concept and how-to hint takes the hub of a Learn hit in the first 10 and is left out when none qualifies.
  A quoted phrase now requires adjacency (`"layer public"` 10 → 0 hits).
- **C.** Only coded-id tags join a Learn record's names (all identifier tags first, which let `SetRange` and
  `AppSourceCop` rank a page that merely mentions them above the page about them). `AS0020` and `AL0281` stay plain
  matches: their pages write the id only in the H1. A type abbreviation keeps its reference (`cu0080` is Codeunit 80).
- **B.** Values have country rows too (132; the diffs carry `values[]`). Local procedures count in the block's first
  line, as in `summarize`; keys are matched by name, so renumbered keys count as changed (6 for Table 18 BE). Symbol
  hits are keyed by id and country, because CA, MX and US add the same field ids. The site publishes the diffs
  (`site/src/pages/code/diffs/country/[file].ts`), so remote mode reads them; it was checked by reading the code, not
  by a live fetch. On the site a country member opens the W1 page at the top (no anchor there).

**When readers see it.** The merge touches `pipeline/render/**`, so the push starts a derive that rewrites the symbol
shards (country rows). The first full nightly after it runs the rule-2 backfill and the derive after that writes the
coded ids into the Learn shard; then flip the RT0005 golden row. Publish `bc-observatory` 0.7.0 after the merge.
