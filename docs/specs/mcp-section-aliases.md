---
issue: 3
status: draft
---

# A page's fields are its controls: section aliases, a not-found error that names the nearest key, and id checks pointed at search

Status: proposed, 2026-10-14. Decision: D97 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M35
(reserved). Owner: waldo.
Scope: the section finder and its not-found answer (`packages/mcp/src/sections.ts`), the `get_object` tool text
(`packages/mcp/src/server.ts`), the `bc-lookup` skill and the MCP README, version bumps (MCP 0.7.2, plugin 0.3.1), tests.
Every claim below was verified against the tree at `41f47fba38` (`origin/main`, 2026-10-14); the measurements were
taken on the committed `content/` of that commit with the command next to each. Not in scope: any page under
`content/` (no renderer change, no page rewritten, no byte on an object page, so no derive and no content commit), the
search scorer and its hints, a header-only read mode, a deep-link row on page objects, table-side synonyms (`columns`
on a table), Learn search.

## 1. Goal

On 2026-10-14 the owner pasted a chat in which an agent used `get_object` to confirm six page ids before building
Business Central web client links (`…&page=25&filter=…`). Its own report: six calls failed, the retry "returned only the
object header", and three ids (22, 27, 31) went into the links unchecked. The facts the observatory holds were right;
the agent lost its calls to a naming mismatch and then did not get the cheap path.

### What is broken, with evidence

| What happened | Cause (verified) |
|---|---|
| Six parallel `get_object("page", "<id>", section: "fields")` calls all answered `No section "fields" on objects/page/25. Sections: properties, controls, actions, trigger_subscribers, procedures, triggers, relations, pages, extended_by, calls, called_by, versions, learn, ask, frontmatter.` (reproduced on 2026-10-14 for Page 25 "Customer Ledger Entries") | the key of a page's `## Fields on this page` heading is `controls` (`packages/mcp/src/sections.ts:19`, `OBJECT_KEYS`; the heading is `pipeline/render/object.ts:461`). `findSection` (`sections.ts:165-170`) matches a key, a heading or the heading in snake_case, so `fields` meets nothing on a page (`fields_on_this_page` is not `fields`). The tool text names `section ('fields', 'events', 'procedures', 'calls', ...)` for every object (`packages/mcp/src/server.ts:444`), the skill repeats it (`plugin/skills/bc-lookup/SKILL.md:11`) and so does the README (`packages/mcp/README.md:44`). The not-found answer (`sections.ts:270`) lists all keys and no nearest one. Six calls went out in parallel, so the first answer could not teach the other five |
| The same pages' counts say `fields: 0` and `controls: 65` (Page 25) | `counts.fields` is the table's fields; a page has none of its own. Only the section key and the heading disagree with what an agent expects; the counts are right |
| The retry "returned only the object header: its title and the BC versions" | **Not reproduced.** `get_object("page", "25")` returns the whole page (25,253 bytes on disk, under the 30,000-character budget: properties, all 65 controls, 18 actions, calls, callers, versions, Learn pages). Pages 22 and 31 (33,455 and 42,302 bytes) return the compact view with the caption (`Customers`, `Items`), the card page (22 to 21, 31 to 30) and `present_in`. The likeliest cause: after the error the agent picked `section: "frontmatter"`, the cheapest-looking key in the list the error printed; frontmatter holds the title and `present_in` and nothing else the agent needed. This spec cannot confirm it without the transcript (section 9) |
| Pages 22, 27, 31 "went in unchecked" | all three exist: `search("page 27", kind: "page")` answers `Page 27 "Vendor List" (captioned "Vendors")` as its first hit in three lines, against 25,253 to 42,302 bytes for `get_object`. Nothing told the agent that search is the cheap id check for an object; the `get_object` text says it only for a field, event or procedure |
| The URL syntax came from Learn, not from the observatory | the observatory finds it: `search("Web client URL", type: "learn", mode: "keyword")` returns Microsoft's "Web client URL" article first (`…/dev-itpro/developer/devenv-web-client-urls`) and `search("link to a page in the web client")` returns the hub "Creating deep links". The skill never says so; the agent did not know which words to use |

Measured on `41f47fba38`:

| Measure | Value | Command |
|---|---|---|
| Page object pages | 5,997 | `ls content/objects/page \| wc -l` |
| of them with `## Fields on this page` | 5,958 | `grep -l "^## Fields on this page" content/objects/page/*.md \| wc -l` |
| Page extension pages | 2,130 | `ls content/objects/pageextension \| wc -l` |
| of them with `## Fields on this page` | 1,591 | same grep over `pageextension/` |
| Page objects over 30,000 characters (compact view, where `section` is needed) | 37 | `find content/objects/page -name '*.md' -size +30000c \| wc -l` |
| Table pages with `## Fields` | 3,798 | `grep -l "^## Fields$" content/objects/table/*.md \| wc -l` |
| `get_object` description length | 950 of the 1,000 cap (total of nine tools capped at 3,300) | `tests/unit/mcp.test.ts:170-171` |

So on all but 37 page objects a bare `get_object` already returns everything and `section` is optional; the six calls
were a habit the tool text taught.

After this change:

- On a page or page extension, `section: "fields"`, `"columns"` and `"members"` read the `controls` section
  (`## Fields on this page`); a table keeps `fields` as its own section.
- A section word that matches nothing still answers with the keys, and now also with the nearest one(s) when there is one.
- The `get_object` text says which key a page uses and that `search("page 25", kind: "page")` is the cheap check that an
  id and a name go together.
- `bc-lookup` says the same, plus how to find Microsoft's Web client URL article for a deep link.

## 2. Reader- and agent-facing behaviour, after

`get_object("page", "25", section: "fields")` returns what `section: "controls"` returns today:

```
Page 25 "Customer Ledger Entries", section "controls": <site>/objects/page/25/

## Fields on this page
…
```

The first line already prints the resolved key (`sections.ts:272` uses `s.key`), so the agent sees that `controls` is the
name and needs no extra note.

An unresolved word with a near key:

```
No section "control" on objects/page/25. Did you mean "controls"? Sections: properties, controls, actions, …, frontmatter.
```

An unresolved word with none keeps today's text byte for byte (`tests/unit/mcp-sections.test.ts:142-147`, test 17):

```
No section "foo" on objects/codeunit/9. Sections: fields, events, procedures, countries, ask, frontmatter.
```

`get_object` tool text (the coder keeps it at or under 1,000 characters and the nine-tool total under 3,300):

> … A page over 30,000 characters comes back compact (frontmatter, the first 5 rows of each section, the section keys):
> pass section (the key the answer lists: 'fields' on a table, 'controls' on a page, 'events', 'calls', ...) with offset
> and limit to read one. To check that an id and a name go together, or that a field, event or procedure exists,
> search('page 25', kind: 'page') or search('event: <Name>') answers without the page. …

`bc-lookup` step 2 gains one sentence of the same, and a new line under step 1:

> For a web client link (`…?company=…&page=22&filter=…`): `search("Web client URL", type: "learn", mode: "keyword")` finds
> Microsoft's article; read its url with `microsoft_docs_fetch`. Confirm each page id with `search("page 22", kind:
> "page")`, one call per id, not `get_object`. A `No section` answer lists the keys: retry once with one of them before
> repeating the call for other objects.

## 3. Decisions

Draft D97 text (appended to `docs/DECISIONS.md` at ship time):

> **D97 Section words an agent types resolve on a page (2026-10-14, M35).** The page objects' `## Fields on this page`
> section is keyed `controls` (D93) and the `get_object` text, the skill and the README named `fields` for every
> object, so an agent that followed them got `No section "fields"` on a page, six times in parallel in the chat that
> prompted this. `findSection` now resolves `fields`, `columns` and `members` to `controls` when the page has a
> `controls` section and no section of that word; the not-found answer names the nearest key when one is within reach;
> the `get_object` text, `bc-lookup` and the README say 'controls' on a page and point id checks to
> `search(kind: "page")`. The 25 keys of D93 do not change. No page, no data file, no derive.

Rejected:

| Option | Why not |
|---|---|
| Rename the key to `fields` and keep `controls` as the alias | breaks the D93 contract and the test that pins the 25 keys to the 25 headings (`mcp-sections.test.ts:163-175`); every doc and spec that says `controls` changes; a page then has a `fields` key that is not a table's fields |
| Add the aliases to `OBJECT_KEYS` | the same test requires `Object.keys(OBJECT_KEYS)` to equal the headings the renderer emits; an alias there is a key that no heading has |
| Resolve any unknown word to its nearest key | a wrong guess answers silently with the wrong section. Only three fixed synonyms resolve; everything else gets a suggestion the agent confirms by retrying |
| Alias `fields` for every object type | tables, table extensions and enums have a `fields` or `values` section of their own; an alias must never shadow a real key. The rule fires only when the page has no section of that word |
| A header-only `section: "summary"` | a new surface to learn for a need `search(kind: "page")` already meets in three lines (section 1) |
| A web client deep-link row on every page object (`?page=22`) | adds a row to each of the 5,997 page objects, which sit under the Pages tar (D76), for a fact derivable from the id; the bytes-first rule asks for a measured case first |
| A hint naming the word that blocks a zero-hit query | see section 8 |

## 4. Contract

`packages/mcp/src/sections.ts`:

```ts
/** Words an agent types for a page's `controls` section (D97). */
export const CONTROL_WORDS = ["fields", "columns", "members"] as const;

export function findSection(p: ParsedPage, want: string): Section | null   // unchanged signature
// after the three existing lookups (key, heading, snake heading) and before `return null`:
//   if (CONTROL_WORDS.includes(w) and no section has key w) return p.sections.find((s) => s.key === "controls") ?? null;

/** Up to two section keys near `want`: the key starts with it, it starts with the key, either contains the other (4 or more
 *  characters), or the edit distance is 2 or less; `frontmatter` counts. Pure; no suggestion for an alias word. */
export function nearestKeys(p: ParsedPage, want: string): string[]
```

`sectionView` (`sections.ts:269-270`): when `findSection` is null, the answer is
`No section "<want>" on <path>. ` + (`Did you mean "<k1>"[ or "<k2>"]? ` when `nearestKeys` is not empty) +
`Sections: <keys>.` The edit distance helper is the one `packages/search` already exports (`editDistance`,
`normalize.ts`); if the MCP bundle cannot import it, a six-line local copy is acceptable.

No other function, schema, data file or frontmatter field changes. Example: for Page 25 `nearestKeys(p, "control")` is
`["controls"]`, `nearestKeys(p, "subscribers")` is `["trigger_subscribers"]`, `nearestKeys(p, "foo")` is `[]`.

## 5. Test plan (write first)

`tests/unit/mcp-sections.test.ts`, with a small inline page fixture `PG` (a `Properties` section, `Fields on this page`
with three rows, `Actions` with two, `Trigger event subscribers`, `Calls`) beside the existing codeunit fixture `P`:

| # | Call | Expected |
|---|---|---|
| 1 | `findSection(PG, w)?.key` for `fields`, `Fields`, `columns`, `MEMBERS`, `controls` | `controls` for all five |
| 2 | `findSection(P, "fields")?.key` (codeunit fixture, which has `fields`) and a table-like fixture with `## Fields` | `fields`: an alias never shadows a real key |
| 3 | `findSection(NOCTRL, "fields")` (a page-extension fixture with no layout section) | `null` |
| 4 | `view(PG, { section: "fields" })` | starts `Page 25 "Demo", section "controls": `, holds all three rows |
| 5 | `nearestKeys(PG, "control")`, `"subscribers"`, `"action"`, `"call"` | `["controls"]`, `["trigger_subscribers"]`, `["actions"]`, `["calls"]` |
| 6 | `nearestKeys(PG, "foo")`, `"zzzzzz"` | `[]` |
| 7 | `view(PG, { section: "control" })` | `No section "control" on <path>. Did you mean "controls"? Sections: <keys>.` |
| 8 | test 17 as it stands (`section: "foo"`) | unchanged, byte for byte |
| 9 | the `OBJECT_KEYS` test (`:163-175`) | passes unchanged: no key was added |

`tests/unit/mcp-sections.test.ts`, real-content test beside `:189`: over the committed `content/objects/page` and
`pageextension` pages (skip when `content/` is absent, as the neighbouring real-page tests do), every page that carries
`## Fields on this page` resolves `fields`, `columns` and `members` to `controls` (5,958 and 1,591 on `41f47fba38`), and
over `content/objects/table` every page with `## Fields` still resolves `fields` to `fields` (3,798).

`tests/unit/mcp.test.ts` (beside `:165`): the `get_object` description contains `'controls'` and `kind: 'page'`, stays at
or under 1,000 characters, and the nine descriptions stay at or under 3,300.

Skill and README text carry no test beyond the repository's existing doc checks; the coder runs the whole suite.

## 6. Tasks

One phase, one commit set, no content commit, no nightly impact.

1. Tests 1 to 9 and the real-content and description tests, failing.
2. `CONTROL_WORDS` and the alias branch in `findSection`.
3. `nearestKeys` and the not-found answer.
4. `get_object` description (`server.ts:444`): section 2 wording, within the length caps. If it is over, shorten the
   parenthetical `(frontmatter, the first 5 rows of each section, the section keys)`, not the `counts.procedures` sentence.
5. `plugin/skills/bc-lookup/SKILL.md` (step 2 and the web client line), `packages/mcp/README.md:44` (the section keys
   include `controls` on a page).
6. Versions: `VERSION` (`server.ts:38`) and `packages/mcp/package.json` to 0.7.2; `plugin/.claude-plugin/plugin.json`
   and `plugin/README.md:3` to plugin 0.3.1 with MCP 0.7.2.
7. Release the MCP as the 0.7.1 release was (the owner publishes; the coder lists the command in the hand-off).

## 7. Verification

```bash
npm run typecheck && npm test
npm run build -w packages/mcp      # or the repository's script for packages/mcp/build.ts; yields dist/server.js
```

Then drive the built bundle over stdio against the checkout, not the plugin's in-session server (an MCP started
earlier keeps its start version): start `BC_OBSERVATORY_LOCAL=$PWD node packages/mcp/dist/server.js`, call
`get_object` with `("page", "22", section: "fields", limit: 3)` (expect the `controls` header and three rows, under
5,000 characters), `("page", "25", section: "control")` (expect the `Did you mean "controls"?` line),
`("table", "36", section: "fields", limit: 2)` (unchanged) and `("codeunit", "80", section: "fields")` (expect the old
answer, no suggestion that is not a near key).

## 8. Later, not in this spec

- **A zero-hit answer that names the blocking word.** `search("web client URL page parameter filter deep link", type:
  "learn")` answers `No pages match … Try fewer words`; the same query without `type` returns the hub "Creating deep
  links" first. Every term must meet the record (`packages/search/src/score.ts`, the AND rule D95 section 1 describes),
  and `link` is probably the word no Learn summary carries (inferred from the summaries, not traced in the scorer). A hint naming the one word that, left out, produces hits would have saved the
  agent a guess. It changes `packages/search/src/hints.ts` (shared with the site) and the golden set, so it is its own
  decision.
- `columns` and `members` on tables and table extensions (`fields`), and `layout` on pages.
- Whether the compact view's footer line should print a `fields` alias hint on pages. Not needed once the aliases resolve.

## 9. Risks and open questions

| Risk or question | Default the coder takes |
|---|---|
| The "header only" retry is unexplained (section 1) | Do nothing for it. If the owner finds the transcript and the call was not `section: "frontmatter"`, open a follow-up; this spec fixes the failures that are reproducible |
| A page extension has no `controls` section (539 of 2,130 have none, by the grep above) and the agent asks for `fields` | `findSection` returns null; the not-found answer lists the keys; `nearestKeys` offers none for `fields` (an alias word never gets a suggestion). Acceptable: the key list is the answer |
| `members` is an English word an agent may mean for an object's events or procedures | it resolves to `controls` only on a page that has no section called `members`; the printed `section "controls"` header tells the agent what it got. If a later test of agent calls shows confusion, drop `members` |
| The description cap (1,000 characters, 950 today) | the coder trims the parenthetical as task 4 says; the cap tests stay as they are |

## 10. Files

New: `docs/specs/mcp-section-aliases.md` (this file).
Changed: `packages/mcp/src/sections.ts`, `packages/mcp/src/server.ts`, `packages/mcp/package.json`,
`packages/mcp/README.md`, `plugin/skills/bc-lookup/SKILL.md`, `plugin/.claude-plugin/plugin.json`, `plugin/README.md`,
`tests/unit/mcp-sections.test.ts`, `tests/unit/mcp.test.ts`, and at ship time `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`.

## 11. Definition of Done

- [ ] Tests of section 5 pass; `npm run typecheck && npm test` is green.
- [ ] `get_object("page", "22", section: "fields", limit: 3)` returns the `controls` rows against the built bundle.
- [ ] `get_object` description at or under 1,000 characters; nine-tool total at or under 3,300.
- [ ] `OBJECT_KEYS` unchanged; test 17 unchanged and green.
- [ ] No file under `content/` or `data/` changed (`git diff --stat origin/main -- content data` is empty).
- [ ] MCP 0.7.2 and plugin 0.3.1 in the four places of task 6.
- [ ] D97 appended to `docs/DECISIONS.md`; M35 row in `docs/PLAN.md` set to shipped; `docs/HANDOFF.md` entry moved from
      "Open specs" to "Where things stand"; this section renamed "Built, deviations".

## 12. Proposed edits to other files (not applied)

`docs/DECISIONS.md`: the D97 text of section 3.

`docs/PLAN.md` section 5, after M34: `| **M35 MCP section aliases** | `fields`, `columns` and `members` resolve to a page's controls section; the not-found answer names the nearest key; the `get_object` text, `bc-lookup` and the README say 'controls' on a page and point id checks to `search(kind: "page")`, with a web client URL line (`docs/specs/mcp-section-aliases.md`, D97, proposed) | half a day | none: deterministic, no LLM, no page changes |`

`docs/HANDOFF.md`, "Open specs": the entry registered with this spec; at ship time it moves to "Where things stand".

`AGENTS.md` and `CONTENT-NOTICE.md`: no change.
