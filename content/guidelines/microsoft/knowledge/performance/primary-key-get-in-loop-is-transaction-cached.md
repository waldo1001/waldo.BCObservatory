---
id: guideline/microsoft/knowledge/performance/primary-key-get-in-loop-is-transaction-cached
type: guideline
title: A primary-key Get() in a per-row helper is not an N+1 to cache manually
summary: The Business Central server caches primary-key reads within a transaction. Repeated Record.Get(<primary key>) calls for the same key are served from that cache rather than re-queried, so a guarded if not Rec.Get(...) then exit; inside a per-row helper is not a genuine N+1 pattern.
tier: official
language: en
tags:
  - get
  - primary-key
  - record-cache
  - transaction
  - n-plus-one
  - dictionary-cache
  - over-engineering
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:43.918Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3594a057be4248be308e60faa9345ee009d92a5e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/primary-key-get-in-loop-is-transaction-cached.md
    title: "microsoft/BCQuality: A primary-key Get() in a per-row helper is not an N+1 to cache manually"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/198
    - change/bcquality/119
  related:
    - to: object/table/7302
      title: table 7302 "Bin Content"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/performance/primary-key-get-in-loop-is-transaction-cached.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - FindSet
  - FindFirst
---

# A primary-key Get() in a per-row helper is not an N+1 to cache manually

> The Business Central server caches primary-key reads within a transaction. Repeated Record.Get(<primary key>) calls for the same key are served from that cache rather than re-queried, so a guarded if not Rec.Get(...) then exit; inside a per-row helper is not a genuine N+1 pattern.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/primary-key-get-in-loop-is-transaction-cached.md) · microsoft layer · performance · BC all · tier official · derived

## Description

The Business Central server caches primary-key reads within a transaction. Repeated `Record.Get(<primary key>)` calls for the same key are served from that cache rather than re-queried, so a guarded `if not Rec.Get(...) then exit;` inside a per-row helper is not a genuine N+1 pattern. When each row legitimately carries a distinct key — for example one `Bin Content` row per bin, so `Bin.Get` and `BinType.Get` see a different bin each iteration — the `Get` must run per row regardless, and there is nothing to hoist.

Reviewers sometimes see two `Get` calls inside a routine that runs once per row and recommend wrapping them in a `Dictionary` cache. Without evidence of a material additional cost, that duplicates the server's built-in record cache and adds state that must be invalidated. Filtered, non-keyed reads are a different case (see [repeated filtered results](cache-repeated-filtered-results-with-explicit-scope.md)).

## Best Practice

Treat a primary-key `Get()` — especially a guarded `if not Rec.Get(...) then exit;` — as a transaction-cached read, not as proof of N+1 SQL. Do not recommend a manual cache solely from source-level call counts. If profiling shows repeated AL work or cache misses are material and the complete result can be reused safely, assess an explicitly scoped cache on its own merits. Investigate genuinely repeated non-keyed queries (`FindSet`/`FindFirst` with filters, `Count`) separately.

## Anti Pattern

Reporting repeated primary-key `Get` calls (such as `Bin.Get` and `BinType.Get`) inside a per-row helper as one SQL round trip per call, or recommending a `Dictionary` without measuring reuse and cost. Per-row keys often differ, and the server can satisfy repeated keys from its transaction cache.

## Names

- [table 7302 "Bin Content"](../../../../objects/table/7302.md) (possibly related: a code span names it)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#119 Add batch-2 FP guards: sentence-case action captions + PK Get is transaction-cached](../../../../changes/bcquality/119.md), 2026-07-22

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
