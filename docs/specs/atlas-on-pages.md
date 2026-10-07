# Object pages show the call graph we already hold, and point to the atlas only for bodies

Status: proposed, 2026-10-07. Decision: D75 (reserved, appended to `docs/DECISIONS.md` at ship time). Owner: waldo.
Scope: object pages (markdown and site) and the `bc-grounding` skill. Every claim below was verified against the tree
at `3b9c29bd2` on 2026-10-07. Not in scope: procedure bodies (D10), any call from the pipeline to the hosted atlas
(D67 decision 1), a "Used by" list from declarations, event raise points, per-procedure edges, an MCP callers tool
(all in section 8), the BC30 graph (it arrives through the existing `linked` stage).

## 1. Goal

The owner opened enum 78 "Item Ledger Entry Type" and found an "Ask your agent" block that sends the reader to the
hosted bc-code-atlas, and expected the atlas's prepared facts on the page instead. Most of them are already in the
repository and not on any page:

- D67 reproduces the atlas's object-level call graph from our own checkouts. Committed:
  `data/code/graph/29/calls.json` (15,711 object edges, 1,350 unresolved; nightly checkpoint 9, 2026-10-07 20:52) and
  `data/code/graph/28/calls.json` (10,869 edges, 1,255 unresolved). No `data/code/graph/30/` yet: one `graph_jobs`
  slot a night, `narrative_order` 29, 28, 30 (`config/versions.json`).
- The renderer reads the graph (`readCalls`, `pipeline/render/object.ts:154`), renders "Calls", "Called by",
  "Implements" (`callSections`, `object.ts:498`) and hashes it into `input_hash` (`callSig`, `object.ts:232`). The
  nightly renders object pages every run (`renderCodePages`, `pipeline/orchestrator/nightly.ts:328`).
- Yet **0 of 25,644 object pages** carry `## Calls` (`git grep -l '^## Calls' -- content/objects | wc -l`).
  `content/objects/codeunit/80.md` was last written at 18:33, before the graph landed; the last finished run report
  (`data/manifest/_runs/2026-10-07.json`, started 16:38) has `code.pages.written: 0` and no `code.graph`. The run that
  committed the graph (checkpoints 9 and 10) has not written its post-loop yet.
- A read-only probe (2026-10-07, this spec's worktree, `renderCodePages("data", "content")` from the committed data,
  output discarded) wrote 25,588 pages: **5,582 gain `## Calls`, 2,808 gain `## Called by`**. Codeunit 80 "Sales-Post"
  lists Codeunit 28 "Error Message Management" (12 calls), Codeunit 6500 "Item Tracking Management" (9), and so on.
  The 25,588 includes D72's version-range rewrite, which is also still waiting for its first nightly.
- The page major is the preferred one (`narrative_order`: 29 first, `object.ts:115`), so a page reads the BC29 graph
  whenever the object exists in BC29. Only 145 pages are BC30-only (`git grep -l -- '- Present in: BC30$'`); they
  get edges when the BC30 graph lands. A fallback to an older graph would not help them (they are not in it), so
  this spec adds none.
- The block itself is now wrong in one clause: "Procedure bodies and the full call graph are not stored here (D10)"
  (`askYourAgent`, `object.ts:516-526`). It is also long (three paragraphs, a CLI line) and sits between "Recent
  changes" and "Across versions", above our own facts.
- The call graph does little for enum 78: 45 of the 15,711 BC29 edges target an enum, and the probe gave enum 78 no
  call section. Tables fare little better: 37 edges target a table (14 of them Table 77), because the pinned
  graphify-al fork resolves calls through codeunit variables and `Object::"Name"` arguments, not through Record
  variables (D67 section 7.2). What enums and tables need is "Used by" (section 8).

After this change:

- The call sections appear on the pages (phase 0: verify, and re-render once if the nightly does not do it).
- "Ask your agent" is one short paragraph at the very end of the page, says what we hold (the call sections above,
  per object, with their major) and sends an agent to the atlas only for what we do not: a procedure body and the
  calls of one procedure.
- The `bc-grounding` skill routes "who calls it, what does it call" at object level to the observatory first.

## 2. Reader- and agent-facing behaviour, after

### 2.1 Object page

The call sections stay where D67 put them (after "Extended by"). "Ask your agent" moves to the last section of the
page, after "Deprecations" (or after whichever section is last). Exact text, built from `o.type`, `o.name`, the
page's major and whether the page has a call section:

With a call section (Calls, Called by, Implements or Implemented by) on the page:

```
## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
```

Without one: the second sentence is left out. A country's own object keeps today's country note as a second
paragraph. The CLI line goes: the plugin connects the server, and the atlas's own CLI skill documents its CLI.

### 2.2 Site

The site renders the markdown (D45), so the block moves with it. The `calls` ring (`site/src/lib/relations.ts`
`callsFor`) already reads `data/code/graph/<major>/calls.json`; nothing changes there.

### 2.3 Agent (`plugin/skills/bc-grounding/SKILL.md`)

Routing table, second row becomes "Show me the procedure body, what does this one procedure call, find code by
meaning" → `bc-code-atlas`. First row gains "who calls it and what it calls, per object (BC28 and BC29 graphs)".
Step 1 ends: "The object page lists its calls and callers per object; for a body or one procedure's edges, it names
the atlas call ("Ask your agent")." `get_object` serves the markdown, so the MCP needs no code change.

## 3. Decisions

Draft D75: **The observatory shows what it holds before it points elsewhere.** Object pages carry the D67 call
sections from our own graph; the "Ask your agent" block is one closing paragraph that sends agents to bc-code-atlas
only for procedure bodies and per-procedure edges, which we do not store (D10) or aggregate away (D67 decision 4).
No fallback to another major's graph: a page reads the graph of its own major, and an object new in BC30 gets edges
when the BC30 graph lands.

Rejected:

| Option | Why not |
|---|---|
| Fall back to the nearest major with a graph | The 145 pages it would touch are BC30-only objects, absent from the BC29 graph by definition. |
| Cache atlas answers (bodies, neighbours) in the repository | D10 (no source text) and D67 decision 1 (the nightly never calls the hosted atlas). |
| Remove the block | Readers lose the one pointer to bodies; the owner chose to keep it, shortened, at the end. |
| Keep the CLI line | The plugin connects the server; the CLI is the atlas's own documentation. |

## 4. Contract

`pipeline/render/object.ts`:

```ts
/** "Ask your agent" (D67, D75): the closing pointer to bc-code-atlas, for bodies and per-procedure edges only. */
export function askYourAgent(o: Pick<AlObject, "type" | "name">, cc: string | null = null, graphMajor: string | null = null): string[]
```

- `graphMajor` is the page's major when `callSections` returned at least one line, else `null`.
- `renderObjectPage` calls it last, after every other section (today `object.ts:302`, before "Across versions").
- Country objects (`own`) never have call sections (`C` is undefined for them, `object.ts:198`), so they always get
  the short form plus the country note.

`plugin/skills/bc-grounding/SKILL.md`: the table row and step 1 as in 2.3.

No schema, data or config change. `PIPELINE_VERSION` is not bumped: the page text changes, and `writeIfChanged`
rewrites a page whose rendered text differs.

## 5. Test plan (write first)

`tests/unit/object-ask-agent.test.ts`:

1. `askYourAgent({type: "codeunit", name: "Sales-Post"}, null, "29")` → exactly the text of 2.1, one paragraph,
   with "from the BC29 call graph".
2. Same with `graphMajor` null → no "call sections above" sentence.
3. `cc = "be"` → the country note follows as its own paragraph; no call sentence.
4. Names with runs of whitespace are collapsed (as today); quotes are JSON-escaped.
5. No line matches `/CLI:/` and none matches `/full call graph/`.

`tests/unit/object-pages.test.ts`:

6. A page with calls: `## Ask your agent` is the last `## ` heading; "## Called by" comes before it (today's
   assertion at l.254 holds).
7. A page without calls: the block is still last and has no call sentence.

`tests/unit/change-pages.test.ts:133`: the regex expects `## Ask your agent` after "Recent changes"; it changes to
expect "## Across versions" (or the next section) there.

## 6. Tasks

Phase 0, no code (do it first, it may be all that is needed for the sections):

1. After the nightly that committed checkpoints 9 and 10 finishes (or the next one), count
   `git grep -l '^## Calls' origin/main -- content/objects | wc -l`. Expected about 5,582, and about 2,808 for
   `## Called by`. If so, phase 0 is done.
2. If it is still 0, read that run's `data/manifest/_runs/<date>.json`: `code.pages` missing means the run
   stopped before the post-loop, or the `code-derived` block threw (its catch, `nightly.ts:332-334`, records
   "code derived: ..." in `errors`; `code-pages` runs through `phase`, not the heap-shed `optionalPhase`). Fix the cause, and meanwhile render once on the Mac from the committed data
   (`renderCodePages(dataDir, contentDir)`, about 11 s) and commit the object pages as one content commit, outside a
   live nightly, as D67 decision 11 did.

Phase 1, the block (one small code commit; the rewrite of every object page follows in the next nightly):

3. Tests 1 to 7 and the `change-pages` regex, red.
4. `askYourAgent` with `graphMajor`; `renderObjectPage` passes it and pushes the block last.
5. `bc-grounding` skill edits (2.3).
6. Ship on a night that already rewrites the object pages (D72's rewrite, if not yet landed), so readers see one
   rewrite, not two. Phase 1 rewrites about 25,600 pages: text only, no LLM.

## 7. Verification

- `npm test` (the three test files above), `npm run validate:content`.
- Render from the committed data in a scratch worktree, then: `git grep -l '^## Calls' -- content/objects | wc -l`
  ≥ 5,000; `codeunit/80.md` ends with "## Ask your agent" containing "from the BC29 call graph";
  `enum/78.md` ends with the short form; `git grep -c 'full call graph' -- content/objects` is 0.
- Site build with Node 22 (memory: prepend the nvm v22 bin); `/objects/codeunit/80/` shows the Calls list, the
  `calls` ring, and the block last.
- After the nightly: the same three greps on `origin/main`.

## 8. Later, not in this spec

- **"Used by" from declarations** (what enum 78 needs): fields, parameters and return types typed by this object
  are already extracted (`pipeline/code/extract.ts:229-230`, field types); variable sections are not. Type names
  only, no source text, so D10 holds. Declined for now by the owner (2026-10-07).
- **Record-variable calls**: the pinned graphify-al fork does not resolve `SalesHeader.InitRecord()`-style calls
  (37 table-target edges in BC29). An upstream question for Stefan, with D67's decision-12 message.
- **Event raise points and per-procedure calls**: graphify's intra-object edges (dropped by D67 decision 4) say
  which procedure raises each published event.
- **An offline `callers` MCP tool** over `calls.json`.

## 9. Risks and open questions

- **The nightly renders the sections by itself** and phase 0 finds nothing to do. Default: ship phase 1 anyway.
- **BC30 graph shifts the numbers** when it lands (the HANDOFF notes a manual control run shared the BC30
  checkout). Pages read their own major's graph; BC29 pages are unaffected.
- **Two rewrites in two nights** (D72, then this). Default: hold phase 1's merge until D72's rewrite has landed, or
  merge before that nightly so both ride one night; never ship it during a live nightly.
- **Readers lose the CLI line.** Default: accepted; the atlas's README carries it.

## 10. Files

Changed: `pipeline/render/object.ts`, `plugin/skills/bc-grounding/SKILL.md`, `tests/unit/object-ask-agent.test.ts`,
`tests/unit/object-pages.test.ts`, `tests/unit/change-pages.test.ts`; generated: `content/objects/**` (nightly).
New: none.

## 11. Definition of Done

- [ ] Phase 0 count recorded in section 12 (pages with Calls and Called by on `origin/main`).
- [ ] Tests 1 to 7 green; `validate:content` passes.
- [ ] No object page contains "full call graph" or "CLI:"; "## Ask your agent" is the last heading on every object page.
- [ ] `bc-grounding` routes object-level callers to the observatory.
- [ ] D75 appended to `docs/DECISIONS.md`; PLAN M13 row marked shipped; HANDOFF entry moved from "Open specs" to
      "Shipped"; this section 12 renamed "Built, deviations".

## 12. Proposed edits to other files (not applied)

`docs/DECISIONS.md`, appended at ship time: the D75 text of section 3.

`docs/PLAN.md` section 5, before `v0.2+`:

`| **M13 atlas on pages** | object pages show the D67 call sections from our own graph (verify the first render, re-render once if needed); "Ask your agent" shortened to one closing paragraph for bodies and per-procedure edges; bc-grounding routes object-level callers to the observatory (\`docs/specs/atlas-on-pages.md\`, D75, proposed) | half a day | none: deterministic, no LLM |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": see the entry added with this spec.
