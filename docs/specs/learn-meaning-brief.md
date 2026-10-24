---
issue: 34
status: implemented
---

# brief finds Learn articles by meaning

Status: implemented, 2026-10-23 (PR #35, merged to main in 7719dd946f, published in MCP 0.10.0 and plugin 0.6.0 with
D108 on 2026-10-24). Decision: D107. Milestone: M45. Owner: waldo. Built in the same session as D106, on branch `build/layered-answers-p7` (stacked on #33),
at the owner's request ("do this task here").
Scope: `packages/mcp/src/server.ts` (Learn vectors, `learnByMeaning`), `packages/mcp/src/brief.ts` (a labelled meaning
step), `scripts/check-never-less.ts`, tests. Every claim below was measured on 2026-10-23 with the committed Learn
shard (8,054 rows) and potion-base-8M at revision bf8b0566. Not in scope: search's own meaning list (D63 stays pages
only), a bigger model, calling the Learn MCP from the server.

## 1. Goal

D106's never-less check (`tests/fixtures/never-less.json`) asks that every Business Central Learn URL the Learn MCP
returned for an acceptance question is reachable from `brief`. Keyword hits and word overlap reached 5 of the 16 URLs:
Learn's concept pages ("How to work with VAT on sales and purchases", "Event types", "Events in AL") share too few words
with the questions, and the D63 meaning list covers pages, not Learn rows.

After this change:
- The MCP embeds the Learn rows (title, summary, documented identifiers) with the model it already loads for search.
- `brief` adds up to five Learn articles found by meaning, each marked `(found by meaning)`, after the keyword and
  word hits. Without a model (embeddings off, offline, tests) nothing changes.
- Measured: unreachable Learn URLs drop from 11 to 8 of 16 (env-copy 1, fabric 1, vat-purchase 1, vat-sales 2,
  sales-post-events 2, be-purchase-ledger 1).

## 2. Behaviour, after

`brief("VAT Prod. Posting Group purchase lines Prices Including VAT")` now lists, in "How it works (Learn)",
"Set up value-added tax" and "How to work with VAT on sales and purchases" with `(found by meaning)`.
`brief("Sales-Post events")` lists "Event types". `brief("BE Purchase Ledger")` lists the Belgian deferrals page, not
the French or Russian ledger pages the plain meaning list put first.

## 3. Decisions

**D107 (draft).** `brief` reaches Learn by meaning as well as by words: the D63 static model embeds the Learn rows, a
row counts at cosine 0.45 or more, its score gains 0.05 per query word its title, summary or identifiers hold,
generated report pages lose 0.2 unless the query asks for a report, a local-functionality page gains 0.1 for the
country the query names and loses 0.3 for any other (or when no country is named). Up to five per brief, labelled.
Rejected: the meaning list alone (ranked "Set up value-added tax" 3rd but "Work with VAT" 11th and put the French
ledger pages first for a Belgian question); top three (missed "Event types" at 5th); a bigger model (the MCP stays
light, D63); calling the Learn MCP from the server (D96: the plugin connects it, the agent calls it).

## 4. Contract

- `server.ts`: `LEARN_MEANING_MIN = 0.45`, `LEARN_WORD_BONUS = 0.05`, `learnVectors(m)` (cached per index load),
  `learnByMeaning(query, limit = 5): Promise<PageRecord[]>`.
- `brief.ts`: `BriefDeps.learnByMeaning?`, `MEANING = 5`; labels `(found by words)` and `(found by meaning)`.
- `npm run check:never-less` uses the model when `BC_OBSERVATORY_MODEL_DIR` is set.

## 5. Test plan (written first)

- `tests/unit/mcp-brief.test.ts`: an injected meaning lookup adds a labelled Learn line; without one, none.
- `tests/unit/mcp.test.ts` "D107": over stdio with a toy model where "purchase tax" and "VAT" share a vector, `brief`
  finds the VAT Learn article by meaning; with `BC_OBSERVATORY_EMBEDDINGS=0` it does not.

## 6. Tasks

One phase: the server lookup, the brief step, the check script, the tests. No page or data change, no site bytes.

## 7. Verification

`npm test`; `BC_OBSERVATORY_MODEL_DIR=… npm run check:never-less` with and without the model (11 → 8 unreachable on
2026-10-23, before the first D106 nightly).

## 8. Later, not in this spec

The remaining 8 URLs rank between 12th and 250th by meaning with this model ("Managing VAT rate changes", "Production
and sandbox environments", the Belgium local-functionality hub). Reaching them needs either the D106 cross-links and key
facts after the nightly, a stronger model, or relaxing the never-less rule to Learn's top results: an owner decision.

Owner decision of 2026-10-23: the never-less gate is a curated `must_reach` list per question (the Learn pages that
answer it, chosen among what Learn returned, confirmed in PR #35); Learn's full result list stays in the fixture as a
coverage report, never a gate, since Learn's own ranking is noisy (its first hit for the purchase-line VAT question
was "Managing VAT rate changes") and drifts. The environment-copy precautions list lives on "Production and sandbox
environments", so `data/overrides/links.yaml` links Codeunits 1886 and 8912 to it ("documents"). On the committed tree
with the model: 2 of 6 questions hold, must-reach misses 2 (environment-types until the nightly re-renders the
codeunit pages; "Work with VAT" for the sales-line question), coverage 8 of 16.

## 9. Risks and open questions

- Noise: a meaning hit can be off topic ("Quality management setup" for a Fabric setup question at cosine 0.62). It is
  labelled `(found by meaning)`, so an agent can weigh it. Default: keep the floor at 0.45.
- First call cost: embedding 8,054 Learn rows takes about a second, once per index load.

## 10. Files

Changed: `packages/mcp/src/server.ts`, `packages/mcp/src/brief.ts`, `scripts/check-never-less.ts`,
`tests/unit/mcp.test.ts`, `tests/unit/mcp-brief.test.ts`, `docs/{PLAN,HANDOFF}.md`. New: this spec.

## 11. Definition of Done

- [x] Tests of section 5 pass; `npm test` green.
- [x] Measured: 11 → 8 unreachable Learn URLs of 16.
- [ ] D107 appended to docs/DECISIONS.md (done 2026-10-24); PLAN M45 marked shipped (done); HANDOFF move waits for the D106 nightly; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/learn-meaning-brief.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Built, deviations (2026-10-23; status applied 2026-10-24)

Built by hand in the D106 session on `build/layered-answers-p7`, stacked on #33, as PR #35 (merged into the stack, then
to main with D106 in 7719dd946f). Published in MCP 0.10.0 and plugin 0.6.0 together with D108 (2026-10-24); 0.9.0 was
never published. Checks at merge: `npm test` 712 of 713 (1 skipped), typecheck.

As specified: `LEARN_MEANING_MIN = 0.45` and `LEARN_WORD_BONUS = 0.05` (`packages/mcp/src/server.ts:376,378`),
`learnByMeaning(query, limit = 5)` (`:397`), `MEANING = 5` (`packages/mcp/src/brief.ts:40`), labels `(found by words)` and
`(found by meaning)`. Measured: unreachable Learn URLs 11 to 8 of 16.

Deviations:
- **The never-less gate changed shape** (owner decision of 2026-10-23, section 8): each question has a curated
  `must_reach` list in `tests/fixtures/never-less.json` (7 entries); Learn's full result list stays as a coverage
  report, never a gate.
- **Two curated links rode along**: `data/overrides/links.yaml` links Codeunits 1886 and 8912 to "Production and sandbox
  environments" ("documents"), because the environment-copy precautions live there.
- Not reached, as section 8 says: the remaining 8 URLs need the D106 nightly data, a stronger model or an owner call.
  The HANDOFF entry stays under "Open specs" with D106's until the first nightly and `check:never-less` have run.

## 13. Proposed edits to other files (applied 2026-10-24: DECISIONS D107; PLAN and HANDOFF were applied with the spec)

DECISIONS D107: the text of section 3. PLAN M45 row and HANDOFF entry: applied with this spec.
