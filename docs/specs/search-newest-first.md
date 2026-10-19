---
issue: 15
status: draft
---

# Search results can be ordered newest first, on the site and in the MCP

Status: proposed, 2026-10-19. Decision: D101 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M39
(reserved). Owner: waldo.
Scope: the search page's tabs (`site/src/scripts/search.ts`, `site/src/pages/search/index.astro`), the shared scorer
(`packages/search/src/score.ts`: a date comparator and a `sort` option), the MCP's `search` tool
(`packages/mcp/src/server.ts`, its README, the version), the search-index record of a weekly digest
(`pipeline/render/search.ts`), tests. Every claim below was verified against the tree at `ace8f2dd5d` (`origin/main`,
2026-10-19), and the numbers were measured on that commit's `data/index/` (`pages-hubs-f2e0ab140dfe.json`,
`pages-media-14890ecff798.json`, `learn-b7b29e805033.json`) with the shared scorer run offline (`search(idx, parseQuery(q,
{ countries: [] }), { kinds: ["page"] })` over the hubs and media shards). Not in scope: the header's live search and
the galaxy panel (they light stars, they do not list results), the palette, the `/videos/`, `/posts/` and `/changes/`
list pages (already newest first, `listOrder` in `site/src/scripts/list-rows.ts:24-29`, D91), publish times finer than
the day, and any change to how the scorer ranks by relevance.

## 1. Goal

The owner searched "Telemetry", opened the Posts tab to see what has been blogged about it, and found the posts out of
date order. They want posts and videos by date, or at least the option to order them newest first.

Why it happens: every group on the search page is in the scorer's order, score first and date only as the second key
(`byRank`, `packages/search/src/score.ts:434-436`, applied at `:464`; the page calls it once, `site/src/scripts/search.ts:247`,
and a tab renders its group in that order, `:124-132`). Scores come in bands: a word in a post's title is worth 3, in
its tags 2, in its summary 1, plus 1 for a page that is not an AL object (`score.ts:391`, the lift at `:368`). The date
only orders posts inside one band.

"Telemetry", Posts tab (25 hits: 10 at score 7, 1 at 6, 9 at 4, 1 at 3, 4 at 2):

| # today | score | date | title |
|---|---|---|---|
| 1 | 7 | 2026-10-16 | Community, Connection, and Business Central Telemetry at Summit NA 2026 |
| 2 | 7 | 2026-04-07 | BC Telemetry Buddy .. now with (community) knowledge |
| ... | 7 | 2026-02-24 to 2025-05-31 | eight more title matches |
| 11 | 6 | 2026-10-18 | "Dev X used 2k tokens with Opus" is not telemetry |
| 12 | 4 | 2026-07-22 | Use sqlServerSessionId to spot on blocking sessions in Dynamics 365 Business Central |

The newest post is 11th. On the Videos tab (38 hits) the newest, from 2026-10-01, is 26th. The same is true for other
words:

| query | tab | hits | newest in today's first 10 | newest of all | of the 10 newest, missing from today's first 10 |
|---|---|---|---|---|---|
| Telemetry | Posts | 25 | 2026-10-16 | 2026-10-18 | 8 |
| Telemetry | Videos | 38 | 2026-03-10 | 2026-10-01 | 10 |
| copilot | Posts | 107 | 2026-10-13 | 2026-10-18 | 8 |
| posting | Posts | 199 | 2026-09-01 | 2026-10-18 | 10 |
| posting | Videos | 72 | 2025-05-22 | 2026-10-01 | 10 |
| performance | Videos | 37 | 2026-05-26 | 2026-10-05 | 8 |
| agent | Posts | 125 | 2026-07-30 | 2026-10-16 | 10 |

Which tabs have dates (`date` of the index records, set from `published_at ?? ga_date ?? merged_at` and cut to the day,
`pipeline/render/search.ts:81-84`; Learn rows carry `ms.date`, `packages/search/src/learn.ts:13`):

| group (tab) | records | dated | what the date is |
|---|---|---|---|
| Learn articles | 8,054 | 8,053 | Learn's `ms.date` (the article's last update), 2019-06-18 to 2026-10-13 |
| Roadmap | 97 | 97 | GA month, `YYYY-MM`, 2026-06 to 2027-04 |
| Videos | 619 | 619 | published, 2023-10-23 to 2026-10-12 |
| Posts | 619 | 619 | published, 2025-04-07 to 2026-10-18 |
| Code changes | 1,175 | 1,175 | merged, 2026-07-07 to 2026-10-16 |
| Other pages | 63 releases | 50 | released; `release` is the one type `GROUPS` does not map (`search.ts:33-49`) |
| Weekly digests | 6 | 0 | none: a digest carries only `week: 2026-W41` |
| Start here, AL objects, Localizations, Sources, symbols | | 0 | none by design (`pipeline/render/search.ts:80`: regenerated nightly is not news) |

The MCP has the same order (`search as rank`, `packages/mcp/src/server.ts:31`, called at `:236`) and fuses the non-exact
keyword hits with a meaning list (`:262-265`); nothing asks for newest first. `whats_new` is newest first but takes no
query (`:401-411`).

After this change:

- Every dated tab of the search page (Learn articles, Roadmap, Videos, Posts, Code changes, Weekly digests, Other pages)
  shows a switch **Best match | Newest** under the tabs. Best match, today's order, stays the default (the owner's pick,
  2026-10-19).
- **Newest** keeps the same hits and the same count, newest day first, the same day in best-match order, undated hits
  last; `?sort=date` in the URL keeps it.
- The MCP's `search` takes `sort: "date"`: the keyword matches newest first, so an agent can answer "what was blogged
  lately about X".
- A weekly digest's index record is dated by the Monday of its week, so the Weekly digests tab sorts too, and
  `whats_new` lists digests.
- Day, not time: the index keeps the day. The owner had no preference, so the change costs no new bytes for that.

## 2. Reader- and agent-facing behaviour, after

**Search page.** Below the tabs, above the status line, on a dated tab only:

```
[ Best match ] [ Newest ]        (a group "Order"; the pressed one in the accent, as a selected tab)
```

- Opening `search/?q=Telemetry&type=post`: Best match is pressed and the list is today's (first row "Community,
  Connection, and Business Central Telemetry at Summit NA 2026", 2026-10-16).
- Clicking **Newest**: the URL becomes `search/?q=Telemetry&type=post&sort=date`, the tab still says 25, and the rows read:

  | # | date | title | score |
  |---|---|---|---|
  | 1 | 2026-10-18 | "Dev X used 2k tokens with Opus" is not telemetry | 6 |
  | 2 | 2026-10-16 | Community, Connection, and Business Central Telemetry at Summit NA 2026 | 7 |
  | 3 | 2026-07-22 | Use sqlServerSessionId to spot on blocking sessions in Dynamics 365 Business Central | 4 |
  | 4 | 2026-05-28 | OptimAL – performance still matters | 4 |
  | 5 | 2026-04-17 | Dynamics 365 Business Central 2026 Wave 1. What's New in Performance. | 4 |
  | 6 | 2026-04-17 | My 2026 Tradeshow Schedule and Highlights | 2 (same day as 5: the better match first) |

  Every row already prints its date (`search.ts:115`), so the order can be read off the list.
- The choice stays while the reader moves between tabs in the page: Newest on Posts, then Videos, is Newest on Videos
  (first row 2026-10-01). The **All** tab and the undated tabs (Start here, AL objects, Fields, Events, Procedures, Enum
  values, Localizations, Sources) hide the switch and stay in best-match order; the URL carries `sort=date` only while
  a dated tab is open. Back on a dated tab, Newest is still pressed.
- Clicking **Best match** removes `sort` from the URL and restores today's order.
- The tab's caps stay: 50 rows open, up to 500 behind "Show N more", then "and N more: add a word to narrow the search"
  (`listHtml`, `search.ts:119-122`; the tab's 50 and 500 at `:129`). Under Newest they are the 50 and 500 newest of **all** matches, not the newest of the
  best 500.
- Enter in the field still opens the first row of the active group (`search.ts:279-283`): under Newest, the newest.
- **Roadmap** under Newest: the latest GA month first, so features planned for 2027 lead; each row shows its status and
  GA month. **Learn articles** under Newest: the most recently updated first (Learn's `ms.date`). **Other pages**: the
  releases newest first, the 13 undated releases last.
- A link `search/?q=x&type=object&sort=date`: no switch, best-match order, and the first run drops `sort` from the URL.

**MCP `search`.** New parameter `sort`, `"match"` (default, today) or `"date"`:

```
search(query: "Telemetry", type: "post", sort: "date", limit: 3)

3 results, keyword, newest first (read one with cat(path)):
- "Dev X used 2k tokens with Opus" is not telemetry [post, community, 2026-10-18] path=posts/tine-staric-net/https-tine-staric-net-blog-2026-harness-telemetry--954ee179b7 [keyword]
  in: Tech Adventures in Business Central
  ...
- Community, Connection, and Business Central Telemetry at Summit NA 2026 [post, community, 2026-10-16] path=posts/aardvarklabs-blog/4119 [keyword]
  in: Aardvark Labs
  ...
- Use sqlServerSessionId to spot on blocking sessions in Dynamics 365 Business Central [post, community, 2026-07-22] path=posts/duiliotacconi-com/2074 [keyword]
  in: Duilio Tacconi
  ...
```

- `sort: "date"` orders every keyword match the filters keep (not only the first 50), newest day first, the same day
  best match first, undated pages last; `limit` then takes the newest N.
- The meaning list is not used: a date list has no room for pages that share no word with the query, and fusion order
  would be thrown away anyway. `mode: "keyword"` and `"hybrid"` give the same answer under `sort: "date"`; `mode:
  "semantic"` says so in the header: `3 results, keyword, newest first (sort "date" orders the keyword matches; mode
  "semantic" ignored) (read one with cat(path)):`.
- Without a `type`, the list mixes types: dated pages first, newest first; hubs and objects (undated) after them. A GA
  month (`2026-10`) sorts after every day of that month (`2026-10-05`): a string compare, accepted.
- The hints work as today.
- The tool description gains one sentence (section 4).

**Weekly digests (phase 2).** `digests/2026-W41` gets `date: "2026-10-05"` in the index, the Monday of 2026-W41 (the
digest covers 2026-10-05 to 2026-10-11). Its search row shows the date, the Weekly digests tab sorts by it, the MCP
search line prints it, and `whats_new(since: "2026-10-01")` lists the W41, W42 and W43 digests among the videos and
posts. The running week's digest (W43, dated 2026-10-19) is never after today.

## 3. Decisions

Draft D101 (section 13 holds the text to append):

- One switch, Best match | Newest, on every dated tab; Best match is the default (owner, 2026-10-19).
- Newest reorders the same hits; the count, the caps and the "add a word" line stay. It sorts before the cap.
- The order key is the record's `date` string as the index holds it (a day, a GA month for a feature), compared as a
  string, newest first; ties keep `byRank`; undated hits last. One comparator, `byDate` in `packages/search`, used by
  the site and the MCP, as `byRank` is (D86).
- The MCP gets `sort: "match" | "date"` on `search`; `"date"` orders the keyword matches and skips the meaning list.
  MCP 0.8.0 (a new parameter), plugin 0.3.2 (its skill text changes).
- A weekly digest is dated by the Monday of its ISO week, in the index only (no page changes).

Rejected, with the reason:

- **Newest as the default on Posts and Videos.** Owner's pick was Best match. Also, weak matches rise: of the 10 newest
  "Telemetry" posts only 3 have the word in their title, and for "posting" none do.
- **Always newest, no switch.** Relevance order would be gone from those tabs.
- **Full publish time** (`published_at` is a full timestamp on all 619 posts and 619 videos). About +25 KB raw in the
  media shard, every date consumer (`list-rows.ts:26,41,49,56,84`, `whats_new`) would have to cut it again, and some
  video times are a placeholder noon. Same-day ties are real (9 of the 20 newest "Telemetry" videos share a day), but
  ordering them by match is a better tie-break than by the minute. Owner: no preference, so the cheaper option.
- **Filtering Newest down to title matches.** The tab's count would no longer match its list, and "Newest" would mean
  two things at once.
- **Sorting only the first 500 (or 50) by date.** Newest has to find the newest of all matches.
- **Pinning the exact band above the date order.** A date list is a date list; the All tab keeps "Exactly this"
  (`exactHtml`, `search.ts:139-161`).
- **The switch on All.** Each group on All previews its 10 best (`cap`, `search.ts:33-49`); a date preview would
  show the newest weak matches instead. (Section 9 lets the owner flip it.)
- **Sorting the MCP's fused list by date.** Meaning-only hits that share no word with the query would rise by date.
- **A separate MCP tool, or a query on `whats_new`.** `search` already has the filters; one parameter is cheaper than
  a tool and keeps one place to ask.
- **Digests ordered by their path** (`2026-W41`). Fine within the tab, but in a mixed MCP list `"2026-W41"` sorts above
  every `"2026-10-05"` ("W" > "1").
- **Digests dated by their Sunday.** The running week's digest (W43) would be dated 2026-10-25, after today, and
  `whats_new` would count it as "roadmap features scheduled after today" (`server.ts:406-408`).
- **A Releases group of its own.** Not asked for; section 8.

## 4. Contract

**`packages/search/src/score.ts`**

```ts
const newer = (a: string, b: string) => (a < b ? 1 : a > b ? -1 : 0);
/** Date first (newest; a day, or a feature's GA month), then byRank; a hit without a date after every dated one (D101). */
export const byDate = (a: Hit, b: Hit) => newer(a.r.date ?? "", b.r.date ?? "") || byRank(a, b);

export function search(index: Index, q: ParsedQuery, opts: { limit?: number; kinds?: SearchRecord["kind"][];
  filter?: (r: SearchRecord) => boolean; sort?: "match" | "date" } = {}): Hit[]
// :464 becomes: hits.sort(opts.sort === "date" ? byDate : byRank);  the limit applies after the sort, as today
```

`""` sorts after every date (`newer("", "2026-10-05") === 1`), so undated hits come last.

**`site/src/scripts/search.ts`**

```ts
export interface GroupDef { id: string; label: string; types: string[]; cap: number; one: string; many: string; dated?: true }
// dated: true on learn, roadmap, video, post, change, digest, other
export type Sort = "" | "date";
/** The `sort=` query parameter: "date" is Newest, anything else Best match. */
export const sortOf = (p: string | null): Sort => (p === "date" ? "date" : "");
/** Whether a tab carries the Best match | Newest switch: a dated group, never All. */
export const showsSort = (tab: string): boolean => !!GROUPS.find((g) => g.id === tab)?.dated;
/** resultsHtml gains `sort`: on a dated tab under "date", that group's hits are `[...hits].sort(byDate)` before listHtml. */
export function resultsHtml(groups: Group[], base: string, tab: string, sort: Sort = ""): string
```

`mountSearch` (`search.ts:184-287`): `let sort = sortOf(params.get("sort"))` next to `tab`; `run()` writes
`url.searchParams.set("sort", "date")` when `sort && showsSort(tab)`, else deletes it, next to the `type` line
(`:241`), and passes `sort` to `resultsHtml` (`:253`); a `paintSort()` beside `paintTabs` sets the switch's
`hidden = !showsSort(tab)` and each button's `aria-pressed`; a click on a switch button sets `sort` and calls `run()`.

**`site/src/pages/search/index.astro`**, after the tablist (`:17-19`):

```html
<div class="sr-sort" role="group" aria-label="Order" hidden>
  <button type="button" data-sort="" aria-pressed="true">Best match</button>
  <button type="button" data-sort="date" aria-pressed="false">Newest</button>
</div>
```

CSS next to the `.sr-tabs` rules (`:35-41`): `.sr-sort` as `.sr-tabs` (flex, wrap, gap 6px, margin 0 0 12px); its
buttons the tab buttons' box and font; `[aria-pressed="true"]` uses the accent as `[aria-selected="true"]` does;
`:focus-visible` the same outline. One page grows by the markup (about 250 bytes); no other page changes.

**`packages/mcp/src/server.ts`**

- `SearchArgs` (`:216-219`) gains `sort?: "match" | "date"`; the tool's `inputSchema` (`:438`) gains
  `sort: z.enum(["match", "date"]).optional()`.
- `toolSearch` (`:231`): `const byDay = a.sort === "date"`; `rank(index!, q, { filter: keep, ...(byDay ? { sort: "date" } : {}) })`;
  the meaning list only when `mode !== "keyword" && !kind && !byDay` (`:246`); under `byDay`, `order = keyword`;
  the header's `how` becomes `"keyword, newest first"` under `byDay`, followed by the semantic note when `a.mode ===
  "semantic"`.
- The description (`:437`) gains, after the mode sentence: `sort 'date': newest first by day (a roadmap feature by its
  GA month, a Learn article by its last update, a weekly digest by its week's Monday), undated pages last; it orders the
  keyword matches only.`
- `whats_new`'s description (`:450`) gains `weekly digests (type 'digest', dated by the Monday of their week)`.
- `VERSION` (`:38`) `0.8.0`.

**`pipeline/render/search.ts`** (phase 2)

```ts
/** The Monday of an ISO week id ("2026-W41" -> "2026-10-05"), UTC; null when the id is not one (D101). */
export function weekStart(id: string): string | null
// pageRecord (:79-84): const date = fm.published_at ?? fm.ga_date ?? fm.merged_at
//   ?? (fm.type === "digest" && typeof fm.week === "string" ? weekStart(fm.week) ?? undefined : undefined);
```

`weekStart` lives here, not in `pipeline/render/digest.ts`, which imports the summarize and ingest modules
(`digest.ts:8-27`); a test ties it to `isoWeek` (`digest.ts:32-44`). Example record after phase 2:

```json
{ "path": "digests/2026-W41", "type": "digest", "title": "BC Observatory weekly: 2026-W41",
  "summary": "Business Central, week 2026-W41 (2026-10-05 to 2026-10-11): ...", "tier": "mixed",
  "date": "2026-10-05", "tags": ["digest"] }
```

## 5. Test plan (write first)

`tests/unit/search-core.test.ts` (the scorer):

1. `byDate` over three hits (date `2026-10-18` s 6, `2026-10-16` s 7, no date s 7) orders 10-18, 10-16, undated.
2. Two hits on `2026-04-17`, s 4 and s 2: s 4 first (the `byRank` tie-break).
3. `"2027-04"` before `"2026-10-05"`; `"2026-10-05"` before `"2026-10"` (string compare, documented in section 2).
4. A fixture of three posts that all match one word: the oldest is the title match, the two newer match only in the
   summary. `search(i, p(word), { sort: "date", limit: 2 })` returns the two newest; `search(i, p(word), { limit: 2 })`
   returns the title match first, as today.
5. The existing scorer tests stay green unchanged (`byRank` is the default).

`tests/unit/live-search.test.ts` (the page; `row` and `idx` at `:7-9`):

6. Rows: a post titled with the word and dated 2025-05-31, a post with the word only in its summary dated 2026-10-18,
   a video of each kind. `resultsHtml(groups, "/", "post", "date")` lists the 2026-10-18 post first;
   `resultsHtml(groups, "/", "post")` lists the 2025-05-31 post first.
7. `resultsHtml(groups, "/", "", "date")` (All) keeps best-match order in every group.
8. A tab `other` with a dated release and an undated one: under `"date"` the undated one is last.
9. `showsSort` is true for `learn`, `roadmap`, `video`, `post`, `change`, `digest`, `other`, and false for `""`, `start`,
   `object`, `field`, `event`, `proc`, `value`, `localization`, `source`.
10. `sortOf("date") === "date"`; `sortOf("match")`, `sortOf(null)`, `sortOf("")`, `sortOf("Date")` are `""`.
11. 600 dated post rows that all match one word, with the newest given the weakest score: under `"date"` the post tab's
    first row is the newest of the 600, and the "Show 450 more" and "and 100 more" lines count as today.

`tests/unit/mcp.test.ts` (the fixture at `:87-109` has the post "Designing agents", 2026-10-01, and the feature "Agents
everywhere", GA 2099-04):

12. `search({ query: "agent", sort: "date" })`: the header matches `/^2 results, keyword, newest first/`; the first hit
    line is "Agents everywhere", the second "Designing agents"; no line is tagged `[meaning]`, also with the model dir
    of the D63 test (`:263`).
13. `search({ query: "agent", sort: "date", mode: "semantic" })`: same order, the header names the ignored mode.
14. `search({ query: "agent" })` answers as today (an existing assertion, or one added that pins today's first line).
15. `search({ query: "agent", sort: "newest" })` fails the input schema (the SDK reports an invalid argument).

`tests/unit/search-index.test.ts` and `tests/unit/mcp.test.ts` (phase 2):

16. `weekStart("2026-W41") === "2026-10-05"`, `"2026-W43"` → `"2026-10-19"`, `"2026-W01"` → `"2025-12-29"`, `"2020-W53"`
    → `"2020-12-28"`; `weekStart("2026-10")`, `weekStart("2026-W54")`, `weekStart("x")` are null; for every Monday of
    2026, `weekStart(isoWeek(d).id) === isoWeek(d).start` (`isoWeek` imported from `pipeline/render/digest.ts`, as `tests/unit/digest.test.ts:10` does).
17. `pageRecord("digests/2026-W41", { type: "digest", title: "t", summary: "s", tier: "mixed", week: "2026-W41" }).date`
    is `"2026-10-05"`; a digest without `week` has no `date`; a post with a `week` key takes its date from
    `published_at` only.
18. MCP: a fixture root from `fixture()` plus `content/digests/2026-W41.md` (type digest, week 2026-W41), rendered
    again: `whats_new({ since: "2026-10-01" })` lists the digest with `, 2026-10-05]`; the existing `whats_new`
    assertions at `:147-153` run on the plain fixture and stay unchanged.

## 6. Tasks

Three phases, each can ship alone, in this order. No LLM anywhere; no content page changes.

**Phase 1, the site and the shared scorer** (no derive: none of the nightly's push paths, `.github/workflows/nightly.yml:9`).

1. Write tests 1-11; `npm test`, see them fail.
2. `packages/search/src/score.ts`: `byDate`, the `sort` option of `search`.
3. `site/src/scripts/search.ts`: `dated` on the seven groups, `Sort`, `sortOf`, `showsSort`, the `sort` argument of
   `resultsHtml`, and in `mountSearch` the state, the URL, `paintSort` and the click handler; the file's header
   comment gains one sentence (D101).
4. `site/src/pages/search/index.astro`: the switch markup and CSS (section 4).
5. Verification (section 7, site part).

**Phase 2, digests dated** (touches `pipeline/render/**`: the push starts a derive, D81, which rewrites the hubs shard
once: 6 records gain a `date`, so the shard's hash and file name change; no page under `content/` changes).

6. Tests 16-18; `weekStart` and the digest date in `pageRecord`.
7. Check `gh run list --workflow nightly --limit 1` before the push (`bcobs-shipping-discipline`); after the derive,
   the real-data check of section 7.

**Phase 3, the MCP** (one release covers the `sort` parameter and the `whats_new` text of phase 2).

8. Tests 12-15; `SearchArgs`, the schema, `toolSearch`, both descriptions (section 4).
9. `packages/mcp/README.md`: one paragraph after the hybrid one (`:30-36`) on `sort: "date"`.
10. `plugin/skills/bc-whats-new/SKILL.md`: after step 1 (`:8`), a step for a topic: `search("<words>", type: "post"
    or "video", sort: "date")` for what was published lately about it, `whats_new` for everything since a day.
11. Versions, every place they live today (`git grep -n '0\.7\.2' -- ':!package-lock.json' ':!docs/'` and the same for
    `0\.3\.1`; `package-lock.json` does not carry the workspace's version): MCP `0.7.2` → `0.8.0` in
    `packages/mcp/package.json:3`, `packages/mcp/src/server.ts:38`, `plugin/README.md:3`; plugin `0.3.1` → `0.3.2` in
    `plugin/.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json:9`, `plugin/README.md:3`. Tests tie them:
    `tests/unit/mcp-build.test.ts:24` (package and `VERSION`), `tests/unit/mcp.test.ts:56-57` (the plugin README).
12. Verification (section 7, MCP part). The release itself is the owner's step after the merge: `gh workflow run
    publish-mcp.yml --ref main` (D40; it needs "Allow npm publish" ticked on npmjs.com).

## 7. Verification

- `npm run typecheck && npm test` after each phase.
- Site build: Node >= 22.12 (`npm run site:build`; on waldo's Mac prepend nvm's v22 bin, the shell defaults to v20).
  `npx tsx scripts/site-size.ts site/dist` before and after: only `search/index.html` grows (expect under 400 bytes);
  report the search chunk's delta in D101 (`gzip -c`).
- In a browser, or headless Playwright against `site/dist` served under `/waldo.BCObservatory/`:
  1. `search/?q=Telemetry&type=post`: the switch shows, Best match pressed; the first row is dated 2026-10-16.
  2. Click Newest: the URL gains `sort=date`; the first row is "\"Dev X used 2k tokens with Opus\" is not telemetry"
     (2026-10-18), the second 2026-10-16; the row dates never increase down the list (read the dates of `.rows li`);
     the Posts tab still says 25.
  3. Click the Videos tab: Newest stays pressed, the first video is dated 2026-10-01, the URL has `type=video&sort=date`.
  4. Click All: the switch is hidden and the URL has no `sort`; click Posts: Newest is pressed again.
  5. AL objects tab: no switch.
  6. `search/?q=agent&type=feature&sort=date`: the Roadmap rows' GA months never increase down the list.
  7. Load `search/?q=Telemetry&type=post&sort=date` directly: Newest pressed, newest first.
  8. `search/?q=Telemetry&type=object&sort=date`: no switch, and `sort` is gone from the URL.
  9. Keyboard: Tab reaches the switch after the tabs, Space and Enter press a button, `aria-pressed` flips.
  10. At 375 px wide the switch wraps under the tabs with no horizontal scroll.
- Phase 2, after the derive: the hubs shard's six digest records carry `date` 2026-09-14 (W38), 2026-09-21, 2026-09-28,
  2026-10-05, 2026-10-12, 2026-10-19 (W43); `search/?q=digest&type=digest&sort=date` lists W43 first.
- Phase 3: build the MCP bundle and drive `dist/server.js` over stdio against the repository as
  `tests/unit/mcp-golden.test.ts` starts it: `search("Telemetry", type: "post", sort: "date", limit: 3)` answers the
  three lines of section 2 (as of that day's data); `search("Telemetry", type: "video", sort: "date", limit: 1)` is the
  newest Telemetry video; `search("Telemetry", type: "post")` answers as before; `whats_new(since: "2026-10-01")` lists
  digests. After the owner publishes, the same calls through `npx -y bc-observatory@0.8.0`.

## 8. Later, not in this spec

- A date range on search (`since` on the MCP, a "this year" pill on the page), now that a date order exists.
- A Releases group and tab of its own, instead of "Other pages".
- Newest in the header's live-search panel and the palette.
- Publish times finer than the day, if same-day ties ever matter.

## 9. Risks and open questions

Each with the default the coder takes when nobody answers:

1. **Roadmap under Newest puts the furthest-future features first.** Default: yes, the date descending, as everywhere;
   each row shows its status.
2. **Learn's date is its last update, not its first publication.** Default: the switch still says Newest; the row shows
   the date it sorts by.
3. **The switch on All.** Default: none (section 3). If the owner wants it, All under Newest sorts each dated group and
   leaves the others alone; tests 7 and 9 change with it.
4. **Weak matches rise under Newest** (only 3 of the 10 newest "Telemetry" posts have the word in their title). Default:
   by design; the reader chose the order, and the "add a word" line stays.
5. **`whats_new` starts listing digests (phase 2).** Default: yes, a digest is the week's news in one page. If the owner
   does not want that, `whats_new` skips `type === "digest"` unless `type: "digest"` is asked for (one line, one test).
6. **"Other pages" is dated because it holds only releases today.** Default: dated; a future type that lands there
   undated sorts last under Newest.
7. **Same-day order.** Default: best match (9 of the 20 newest "Telemetry" videos share a day).
8. **MCP version.** Default: 0.8.0 (a new parameter); the plugin 0.3.2.
9. **The sort state across tabs** lives in the page only; the URL carries it on a dated tab. Default as written.

## 10. Files

New: none.

Changed: `packages/search/src/score.ts`, `site/src/scripts/search.ts`, `site/src/pages/search/index.astro`,
`pipeline/render/search.ts`, `packages/mcp/src/server.ts`, `packages/mcp/README.md`, `packages/mcp/package.json`,
`plugin/README.md`, `plugin/.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`,
`plugin/skills/bc-whats-new/SKILL.md`, `AGENTS.md` (one clause), `tests/unit/search-core.test.ts`,
`tests/unit/live-search.test.ts`, `tests/unit/mcp.test.ts`, `tests/unit/search-index.test.ts`; at ship time
`docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec. Generated by the phase 2 derive (not by hand):
`data/index/pages-hubs-*.json`, `data/index/index-manifest.json`.

## 11. Definition of Done

- [ ] Tests 1-18 pass; `npm run typecheck` is clean.
- [ ] The site builds; `scripts/site-size.ts` shows only `search/index.html` grew; the byte deltas are in D101.
- [ ] Section 7's browser checks 1-10 pass on the built site.
- [ ] After the phase 2 derive the six digest records carry the dates of section 7, and no page under `content/` changed.
- [ ] The MCP bundle answers the section 7 calls over stdio; MCP 0.8.0 and plugin 0.3.2 in every place of task 11.
- [ ] `AGENTS.md`, `packages/mcp/README.md` and `bc-whats-new` say what `sort: "date"` does.
- [ ] D101 appended to docs/DECISIONS.md; PLAN M39 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/search-newest-first.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).
- [ ] The owner's step, after the merge: `gh workflow run publish-mcp.yml --ref main` (D40).

## 12. Proposed edits to other files (not applied)

**`docs/DECISIONS.md`**, appended:

```
- **D101 Search results can be ordered newest first (2026-10-19).** The search page's dated tabs (Learn articles,
  Roadmap, Videos, Posts, Code changes, Weekly digests, Other pages) carry a switch "Best match | Newest" under the tabs.
  Best match, the scorer's order, stays the default (owner); Newest (`?sort=date`) reorders the same hits by their day,
  newest first, the same day by best match, undated last, before the 50 and 500 caps. All and the undated tabs have no
  switch. The shared scorer gains `byDate` and `search(..., { sort: "date" })` (packages/search), so the site and the
  MCP sort alike; the MCP's `search` gains `sort: "match" | "date"`, which orders the keyword matches and skips the
  meaning list (MCP 0.8.0, plugin 0.3.2). A weekly digest's index record is dated by the Monday of its ISO week, so it
  sorts, prints its date and shows in `whats_new`. The day, not the time: the index keeps the day and the owner had no
  preference. Rejected: Newest as the default (of the 10 newest "Telemetry" posts only 3 have the word in their title),
  no switch, full publish times (+25 KB, every date consumer cuts again), filtering Newest to title matches, the switch
  on All (its groups preview the best 10), sorting the fused MCP list (meaning-only hits would rise), a new tool,
  digests by path (a week id outsorts every date in a mixed list) or by Sunday (the running week would be after today).
  Measured: <bytes>. Spec: docs/specs/search-newest-first.md.
```

**`docs/PLAN.md`** section 5, a row before `v0.2+`:

```
| **M39 Search newest first** | a "Best match \| Newest" switch on the search page's dated tabs (Learn, Roadmap, Videos, Posts, Code changes, Weekly digests, Other), Best match by default, `?sort=date`; `byDate` and `sort` in the shared scorer; the MCP's `search(sort: "date")` (MCP 0.8.0, plugin 0.3.2); weekly digests dated by their week's Monday in the index (`docs/specs/search-newest-first.md`, D101, proposed) | 1 day in three phases | none: deterministic, no LLM, no page changes; one derive rewrites the hubs shard |
```

**`docs/HANDOFF.md`** "Open specs, not yet implemented" (replacing "None open."):

```
- **Search newest first, D101** (`docs/specs/search-newest-first.md`, M39, issue #15). Status: proposed 2026-10-19,
  nothing implemented. Start with phase 1, task 1: tests 1-11 (scorer `byDate` and `sort`, the page's switch). Three
  phases ship alone: the site and scorer (no derive), digests dated (one derive rewrites the hubs shard), the MCP
  (0.8.0, the owner publishes). Until it lands, the Posts and Videos tabs order by match only: for "Telemetry" the
  newest post is 11th and the newest video 26th.
```

At ship time the entry moves to "Where things stand" with what was built.

**`AGENTS.md`**, the MCP sentence (`search covers fields, events and procedures (...) and ranks like the site's own
search`) gains `; sort: 'date' lists the matches newest first (D101)`.
