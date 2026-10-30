---
issue: 60
status: draft
---

# The MCP counts which pages its answers point to

Status: proposed, 2026-10-30. Decision: D127 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M62
(reserved). Owner: waldo. Scope: `packages/mcp/src/telemetry.ts`, the `answer()` wrapper and five tools in
`packages/mcp/src/server.ts`, the privacy notice in five places, KQL in `docs/RUNBOOK.md`, an MCP and plugin release.
Every claim below was verified against the tree at `626e80f1e8` on 2026-10-30. Not in scope: query text in any form,
the website (it stays tracker-free, section 3), a nightly usage feed, the hosted server of D105.

## 1. Goal

The owner wants to know which Observatory resources people look up most, to decide which pages deserve work and
which sources to add. Today nothing says so:

- D110 sends one `Obs.ToolCall` per tool call with tool, outcome, duration, client and versions
  (`packages/mcp/src/telemetry.ts:54-56`), and D111 adds the install id (`:50`). The arguments are never sent: the
  `answer()` wrapper counts by tool name and outcome only (`packages/mcp/src/server.ts:648-672`).
- The notice promises exactly that: "It never sends your questions, paths, object ids or any other argument"
  (`packages/mcp/README.md:34`), "never your questions or anything else about this machine" (stderr line,
  `telemetry.ts:85`).
- The website has no telemetry at all: no beacon, analytics script or cookie in `site/src`. The only browser storage
  is `localStorage` for UI choices (`site/src/layouts/Base.astro:34`, `site/src/scripts/chrome.ts:13-23`,
  `galaxy.ts:1105-1108`, `install-tabs.ts:46,61`), and GitHub Pages gives the owner no visitor logs. The MCP is the
  only usage signal there is.

So `Obs.ToolCall` says "bc_search was called 400 times", never "table 36 Sales Header is what people come for".

**The legal line this spec draws.** What a user types (a query, a path, a free-text name) can hold anything: customer
names, e-mail addresses, pasted code. What the Observatory answers with is a page from a closed, public catalogue
(the index the server already downloads). A catalogue path is not personal data. Sent with no install id, no session
id and no location, it cannot be tied to a person either, so it adds no GDPR Art. 6 processing and no new ePrivacy
Art. 5(3) exposure beyond what D110 already carries (D110 spec, section 9 risk 1). This is not legal advice; the same
caveat as D110 applies.

After this change:
- Each answer from `bc_search`, `bc_cat`, `bc_get_object`, `bc_localization`, `bc_brief` and `bc_diff_object` sends
  one `Obs.Resource` event per page it points to (at most three per call), carrying the page's index id and nothing
  that identifies the user, the session or the place.
- A path that is not in the index is sent as `other`. What a user typed never leaves the machine, even as a path.
- `docs/RUNBOOK.md` has the KQL for "top resources this week", "by type", and "found vs read".
- The privacy notice says it, in all five places, and the off switches turn it off with the rest.

## 2. Reader- and agent-facing behaviour, after

Agents see no change: no tool output, description or instruction changes.

Users see the notice change. The new sentence, after "a random install id ... so repeat use counts as one user." in
`packages/mcp/README.md`:

> For the answers that point to Observatory pages, it also sends which pages they were (for example
> `objects/table/36`), in a separate event without the install id, the session id or your location, so the counts
> show what people look up, not who looked it up. A path you typed that is not an Observatory page is sent as
> `other`.

The "never sends" sentence becomes: "It never sends your questions or any other text you typed, and nothing about
your machine: ...". The stderr line (`telemetry.ts:85`) adds `, which Observatory pages answers point to (without any
id or location)` after `duration`; the plugin README (`plugin/README.md:70-76`), `site/src/lib/mcp.ts:164` and
`site/src/pages/mcp/index.astro:88` follow the README. The purpose sentence becomes "knowing how many people use which
tools and which pages, and from where, to decide what to build next."

## 3. Decisions

Draft D127:

> **D127 The MCP counts which pages its answers point to, unlinked (2026-10-30, M62).** At the owner's request
> ("which resources are most searched for, without breaking any laws"). Beside `Obs.ToolCall`, the server sends one
> `Obs.Resource` event per page an answer points to: `bc_search` its top three shown hits, `bc_cat`,
> `bc_get_object`, `bc_localization`, `bc_diff_object` the page they read, `bc_brief` the page it was given or its
> first hit. Properties: `tool`, `resource` (the index id, or `other` when the path is not in the index), `rank`,
> `mcpVersion`. No `ai.session.id`, no `ai.user.id`, no client name, `ai.location.ip` `0.0.0.0`, and the event time
> rounded down to the UTC hour, so a resource event cannot be joined to the user's `Obs.ToolCall` or placed on a map.
> Same off switches, the same 1,000-event budget per process, fire-and-forget. The notice names it in all five
> places. KQL in `docs/RUNBOOK.md`. Rejected: query text, raw or filtered to the index vocabulary; paths on
> `Obs.ToolCall`; a nightly usage feed; website counting. Spec `docs/specs/mcp-resource-counts.md`. MCP 0.14.0,
> plugin 0.10.0.

Rejected:
- **The raw query text.** The most insight, and the most risk: agents pass on what users paste, including customer
  names, e-mail addresses and code. That is personal and confidential data in an analytics store, needs a DPIA-style
  balancing test, and breaks the promise D110 made. Owner's choice, 2026-10-30.
- **Query terms filtered to the index vocabulary** (object names, ids, synonyms). Would show what people ask for
  that has no page yet. Rejected for now: the filter is the whole guarantee and is hard to test exhaustively (a
  customer called "Sales" is in the vocabulary). Section 8.
- **Paths on `Obs.ToolCall`.** One event instead of two, and per-user reading histories. But it turns the install id
  into a pseudonymous reading profile, which raises the GDPR bar and widens what an erase request covers. Owner's
  choice: unlinked.
- **One event per call with the paths as a list.** Fewer events, but KQL has to `mv-expand` a list and the rank is
  implicit. One event per path, at most three per call, keeps the queries flat.
- **Exact timestamps on `Obs.Resource`.** Both events leave the same process within milliseconds; an exact time
  would let anyone with portal access join a resource to the user's `Obs.ToolCall`. Rounding to the hour breaks
  that join except for a user who is alone in that hour (section 9 risk 1).
- **A nightly `data/usage/top.json`** (a "most looked up" list on the site). Needs a read credential for Application
  Insights on the Mini and a k-anonymity floor on what gets published. Owner's choice: saved KQL only. Section 8.
- **Counting on the website.** Possible without a secret (an ingestion-only connection string, a second resource
  and a daily cap), but a browser beacon falls under ePrivacy Art. 5(3) on the EDPB's Guidelines 2/2023 reading and
  would need a notice or a banner. Owner's choice, 2026-10-30: the site stays tracker-free.
- **The `bc_ls`, `bc_whats_new`, `bc_blog_footprint`, `bc_feedback` and `bc_status` answers.** Listings and status,
  not lookups; `bc_feedback`'s path is already a page the user read. Counting them adds noise.

## 4. Contract

### 4.1 Telemetry (`packages/mcp/src/telemetry.ts`)

```ts
export interface ResourceHit { tool: string; resource: string; rank: number }   // rank 1-based

/** D127: one Obs.Resource event; pure. No session, no user, no client, ip 0.0.0.0, time to the UTC hour. */
export function resourceEnvelope(h: ResourceHit, ctx: { iKey: string; version: string; now: Date }): object;
```

`createTelemetry()` (`:61`) returns a third method beside `track` and `notice`:

```ts
resources(tool: string, outcome: Outcome, paths: string[]): void
```

It sends nothing unless `outcome` is `ok`, takes at most the first three paths, maps each through the gate (4.2),
drops duplicates (two `other`s count once), and sends all of them in one POST (the body is already an array). Every
envelope counts against the same `sent < MAX_EVENTS` budget (`:13`, `:74`); when the budget runs out mid-call, the
rest is dropped. Off switches: `enabled` as today (`:64`, `telemetryEnabled` at `:30`).

Envelope, for `bc_get_object("table", "36")` at 2026-10-30T14:37:12Z:

```json
{
  "name": "Microsoft.ApplicationInsights.Event",
  "time": "2026-10-30T14:00:00.000Z",
  "iKey": "<iKey>",
  "tags": {
    "ai.cloud.role": "bc-observatory-mcp",
    "ai.cloud.roleInstance": "obs",
    "ai.location.ip": "0.0.0.0",
    "ai.application.ver": "0.14.0",
    "ai.internal.sdkVersion": "bc-observatory-mcp:0.14.0"
  },
  "data": { "baseType": "EventData", "baseData": { "ver": 2, "name": "Obs.Resource",
    "properties": { "tool": "bc_get_object", "resource": "objects/table/36", "mcpVersion": "0.14.0" },
    "measurements": { "rank": 1 } } }
}
```

### 4.2 The gate (`packages/mcp/src/server.ts`)

```ts
/** D127: a path that is in the loaded index, else "other". Nothing a user typed leaves the machine. */
export function resourceOf(path: string, ids: ReadonlySet<string>): string
```

`ids` is the set of `index.records` ids after `loadIndex()` (`server.ts:138-170`), built once per load (the same
records `byPath` maps at `:160`): pages, Learn articles (D94, `:152-154`) and symbol rows (`:159-167`). The path is
compared after the normalisation the tools already do (leading and trailing slashes, `.md`); an anchor
(`#event-OnAfterPost`) stays when the anchored id is a record, else the anchor is cut and the base path is checked.
Anything that is not a record id, including an empty string, becomes `other`. No truncation, no hashing: an id is
either a catalogue id or `other`.

### 4.3 The wrapper and the tools

`answer()` (`server.ts:651`) keeps its signature for tools that return a string. A tool that knows its pages returns
`{ text: string; resources: string[] }` instead; `answer` reads `text` where it reads the string today, computes the
outcome exactly as now (`:657`, `:663`, `:666`), calls `track` as now and then `telemetry.resources(tool, outcome,
resources)`. A tool that throws sends no resource. `answer` gets a fourth injectable parameter for tests, like `track`.

| Tool | Resources | Where |
|---|---|---|
| `bc_search` | ids of the first three hits in `shown`, in the order printed | `toolSearch`, `server.ts:285` (returns at `:346-347`) |
| `bc_cat` | the requested path (with anchor) | `toolCat`, `:473` |
| `bc_get_object` | `pick[0].id` when one object matched | `toolGetObject`, `:508`, `:545` |
| `bc_localization` | `localizations/<cc>` | `toolLocalization`, `:572-575` |
| `bc_diff_object` | `objects/<type>/<id>` | `toolDiffObject`, `:561` |
| `bc_brief` | `a.path`, else the first hit's path | `toolBrief`, `:442` |

The tools return their `{ text, resources }` to the wrapper only; the unit tests that call the tool functions
directly and compare strings need a small helper (`textOf`) or must read `.text`. The coder picks the smaller diff and
says which in section 12.

### 4.4 KQL (`docs/RUNBOOK.md`, after the D111 queries at `:191-197`)

```kusto
// top 25 resources this week (D127, 0.14.0 and later)
customEvents | where timestamp > ago(7d) and name == "Obs.Resource"
| extend resource = tostring(customDimensions.resource) | where resource != "other"
| summarize hits = count() by resource | top 25 by hits
// by kind of page
customEvents | where timestamp > ago(30d) and name == "Obs.Resource"
| extend resource = tostring(customDimensions.resource)
| extend kind = case(resource startswith "https://learn.", "learn", resource == "other", "other", tostring(split(resource, "/")[0]))
| summarize hits = count() by kind | order by hits desc
// found vs read: shown as a search hit, and read with bc_cat or bc_get_object
customEvents | where timestamp > ago(30d) and name == "Obs.Resource"
| extend resource = tostring(customDimensions.resource), tool = tostring(customDimensions.tool)
| summarize found = countif(tool == "bc_search"), read = countif(tool in ("bc_cat", "bc_get_object", "bc_localization", "bc_brief")) by resource
| where resource != "other" | top 25 by read
```

Release-check rows: `Obs.Resource` has no `client`, so a release check must use a path that is not a page
(`other`), or the owner filters by the release hour. Section 9 risk 3.

## 5. Test plan (write first)

In `tests/unit/mcp-telemetry.test.ts`, with its `recorder()` (`:15-19`):

1. **Envelope shape.** `resourceEnvelope({ tool: "bc_get_object", resource: "objects/table/36", rank: 1 },
   { iKey, version: "0.14.0", now: new Date("2026-10-30T14:37:12.345Z") })` deep-equals the example in 4.1: `time`
   `2026-10-30T14:00:00.000Z`, `ai.location.ip` `0.0.0.0`, and no `ai.session.id`, `ai.user.id` key or `client`
   property (assert the keys are absent, not only empty).
2. **Only `ok` sends.** `resources("bc_search", "nomatch", ["objects/table/36"])` and `"error"` and `"notfound"` send
   nothing; `"ok"` sends one POST.
3. **At most three, one POST.** Five paths send one POST with three envelopes, ranks 1, 2, 3.
4. **Shared budget.** With 999 tool calls tracked, `resources` with three paths sends one envelope; then nothing.
5. **Off switches.** With `BC_OBSERVATORY_TELEMETRY=0`, `DO_NOT_TRACK=1`, `CI=true`, `BC_OBSERVATORY_LOCAL=x` or no
   connection string, `resources` sends nothing (the same table as the D110 off test).
6. **Notice.** The stderr notice contains `pages` and `without any id or location`; the five notice files contain the
   new README sentence's key phrase `not who looked it up` (the test that checks the five places today extends).

Also in `tests/unit/mcp-telemetry.test.ts`, beside the existing `answer()` test (`:136-151`, which injects `track`):

7. **The gate.** With ids `{ "objects/table/36", "objects/codeunit/80#event-OnAfterPostSalesDoc",
   "https://learn.microsoft.com/x" }`: `objects/table/36` -> itself; `/objects/table/36.md` -> `objects/table/36`;
   `objects/codeunit/80#event-OnAfterPostSalesDoc` -> itself; `objects/table/36#field-999` -> `objects/table/36`;
   `customers/acme-nv` -> `other`; `jan@acme.be` -> `other`; `""` -> `other`.
8. **No typed text leaves.** Through `answer()` with a recording `resources`: a tool that returns
   `{ text, resources: ["Sales Header for ACME NV"] }` passes `other`, never the string. And over the real
   `toolSearch` on the fixture root `tests/unit/mcp-golden.test.ts:23` uses (`BC_OBSERVATORY_LOCAL`), with `resources` injected: `bc_search("ACME NV sales header")` records only record ids; serialise
   every POST body and assert `ACME` is not in it.
9. **Per tool.** `bc_get_object("table", "36")` on the fixture records `["objects/table/36"]`; `bc_cat` with a missing
   page records nothing (outcome `notfound`); `bc_ls` records nothing.

## 6. Tasks

Phase 1, one PR (no content pages are rewritten):

1. Tests 1-9, failing.
2. `resourceEnvelope` and `resources()` in `telemetry.ts`; update the file's header comment (`:1-6`) to name D127.
3. `resourceOf` and the id set in `server.ts`, rebuilt on each `loadIndex()`.
4. `answer()` reads `{ text, resources }`; the six tools in 4.3 return it; update the D110 comment at `:648-650`.
5. The notice in five places (section 2); the RUNBOOK's "Region and retention" bullet (`docs/RUNBOOK.md:165-167`)
   already lists them.
6. KQL (4.4) into `docs/RUNBOOK.md`, and a line in "After a publish" (`:173`): `customEvents | where name ==
   "Obs.Resource" | take 5`, expect no `user_Id`, no `session_Id`, empty city and country, time on the hour.
7. Version bump, every place the current versions live (`git grep -n '0\.13\.0' -- ':!package-lock.json' ':!docs/'
   ':!content/' ':!data/'` and the same for `0\.9\.0` at `626e80f1e8`):
   - MCP 0.13.0 -> 0.14.0: `packages/mcp/package.json:3`, `packages/mcp/src/server.ts:44`, `plugin/README.md:3`,
     `package-lock.json` (by `npm install`).
   - Plugin 0.9.0 -> 0.10.0: `plugin/.claude-plugin/plugin.json:3`, `.claude-plugin/marketplace.json:9`,
     `plugin/README.md:3`.
   Re-run both greps at build time; another spec may have bumped first.
8. Ship-time edits (section 11), then publish with `gh workflow run publish-mcp.yml --ref main` (D40) once merged.

## 7. Verification

1. `npm test` green, including the new tests and `tests/unit/specs-frontmatter.test.ts`.
2. `npm run build -w packages/mcp` (or the repo's MCP build script) succeeds; the bundle has no connection string
   locally, so it sends nothing.
3. **Local catcher**, as D110 check 3: run the built server with `BC_OBSERVATORY_LOCAL` unset, a test connection
   string pointing at a local HTTP catcher (`IngestionEndpoint=http://127.0.0.1:<port>/`) and a stdio client that
   calls `bc_search("ACME NV sales header")`, `bc_get_object("table", "36")` and `bc_cat("customers/acme")`. Expect:
   one `Obs.ToolCall` per call, `Obs.Resource` envelopes for the first two calls only (the third is `notfound`),
   `grep -c ACME` on the caught bodies is 0, and no `Obs.Resource` has `ai.session.id` or `ai.user.id`.
4. After the publish: in the portal, `customEvents | where name == "Obs.Resource" | take 5` shows `user_Id` and
   `session_Id` empty, `client_City` and `client_CountryOrRegion` empty, timestamps on the hour. A filled city means
   the `ai.location.ip` tag did not stick: unpublish by the RUNBOOK's emergency-off steps.

## 8. Later, not in this spec

- **What people look for that has no page.** Query terms filtered to the index vocabulary, or only the outcome
  `nomatch` with the query's parsed kind (`event:`, `proc:`, an object type), never its words.
- **A "most looked up" list on the site**, from a nightly read of the counts with a floor (a resource shows only with
  at least 5 hits in the week, never a count from one user).
- **The hosted server of D105**: send `Obs.Resource` the same way, and its notice must name it.
- **Website counting**: its own spec, with a second Application Insights resource, a daily cap and an ePrivacy
  read; the owner declined it on 2026-10-30.

## 9. Risks and open questions

1. **A lone user in an hour.** With few users, a resource event in an hour with one `Obs.ToolCall` session can still
   be matched to that session by the hour. Default: accept. The data is a public catalogue path; the owner does not
   join the two events (purpose limitation, stated in the notice: "not who looked it up"). If volume stays very low,
   rounding to the UTC day is the fallback (Application Insights accepts back-dated events within its ingestion
   window; the coder checks the documented limit before choosing the day).
2. **The IP reaches the ingestion endpoint.** As with every HTTPS request, and as D110/D111 say. The `ai.location.ip`
   tag `0.0.0.0` stops Application Insights from deriving a location for these events; IP masking on the resource
   (D111) keeps the address out of storage. Default: accept, same as D110.
3. **Release-check rows.** `Obs.Resource` carries no `client`, so the `release-check` filter of D110 does not apply.
   Default: the release check calls a missing page (`other`, then `notfound`, so nothing is sent) or reads the
   counts from the day after.
4. **A page id that names a person.** Community post paths carry an author's slug (public, already on the site).
   Counting reads of a public post is not processing about the reader. Default: count them.
5. **Event volume.** At most three extra events per search call; the daily cap of about 1 GB (`docs/RUNBOOK.md:163-164`)
   and the 1,000-event budget per process bound it. Default: no sampling.
6. **Numbers.** D127 and M62 were reserved from origin/main and every worktree at `626e80f1e8` on 2026-10-30 (highest
   in use D126, M61).

## 10. Files

New: none (tests extend existing files).

Changed: `packages/mcp/src/telemetry.ts`, `packages/mcp/src/server.ts`, `packages/mcp/README.md`,
`packages/mcp/package.json`, `package-lock.json`, `plugin/README.md`, `plugin/.claude-plugin/plugin.json`,
`.claude-plugin/marketplace.json`, `site/src/lib/mcp.ts`, `site/src/pages/mcp/index.astro`, `docs/RUNBOOK.md`,
`tests/unit/mcp-telemetry.test.ts`; at ship time `docs/DECISIONS.md`,
`docs/PLAN.md`, `docs/HANDOFF.md`.

## 11. Definition of Done

- [ ] Tests 1-9 exist, failed before the change and pass after; `npm test` green.
- [ ] `Obs.Resource` envelopes carry no `ai.session.id`, `ai.user.id` or `client`, carry `ai.location.ip` `0.0.0.0`,
      and their time is on the UTC hour (test 1).
- [ ] A path not in the index is sent as `other` (tests 7, 8); the catcher check of section 7.3 finds no query text.
- [ ] The six tools of 4.3 send their resources on `ok` only; the other tools send none.
- [ ] The notice sentence of section 2 is in all five places, and the stderr line names pages.
- [ ] The KQL of 4.4 and the after-publish line are in `docs/RUNBOOK.md`.
- [ ] MCP 0.14.0 and plugin 0.10.0 in every place the greps of task 7 list; published with `publish-mcp` after merge.
- [ ] D127 appended to docs/DECISIONS.md; PLAN M62 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/mcp-resource-counts.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Proposed edits to other files (not applied)

`docs/DECISIONS.md`: append the D127 text of section 3.

`docs/PLAN.md` section 5, a row before `v0.2+` (applied with this spec as `proposed`; the builder marks it shipped):

`| **M62 Resource counts** | one unlinked `Obs.Resource` event per page an MCP answer points to, `other` for paths not in the index, notice in five places, KQL in the RUNBOOK, MCP 0.14.0 (`docs/specs/mcp-resource-counts.md`, D127, proposed) | half a day | none: no model |`

`docs/HANDOFF.md`, "Open specs" (applied with this spec; the builder moves it to "Where things stand"): the entry
for D127 as written there.

`AGENTS.md`, `CONTENT-NOTICE.md`: no change.
