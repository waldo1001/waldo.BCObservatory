---
id: guideline/microsoft/knowledge/performance/query-results-bypass-primary-key-cache
type: guideline
title: Query results bypass the primary-key cache
summary: "The Business Central server caches primary-key Get calls within a transaction. Query objects do not use that primary-key cache: reopening a Query per lookup executes the query again; Read consumes rows from an open query, not a new query for each row."
tier: official
language: en
tags:
  - query
  - primary-key-cache
  - get
  - false-positive
  - n-plus-one
  - record-cache
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:15:35.028Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 52f590cd94936fc851f0ea98213be2dcdf7aba47
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/query-results-bypass-primary-key-cache.md
    title: "microsoft/BCQuality: Query results bypass the primary-key cache"
    date: "2026-09-29"
    commit: a56b272c6b950c2a423bbeda190585cd53beca2a
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
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/query-results-bypass-primary-key-cache.md
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
examples: 2
identifiers:
  - FindFirst
---

# Query results bypass the primary-key cache

> The Business Central server caches primary-key Get calls within a transaction. Query objects do not use that primary-key cache: reopening a Query per lookup executes the query again; Read consumes rows from an open query, not a new query for each row.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/query-results-bypass-primary-key-cache.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

The Business Central server caches primary-key `Get` calls within a transaction. Query objects do not use that primary-key cache: reopening a Query per lookup executes the query again; `Read` consumes rows from an open query, not a new query for each row. `avoid-get-inside-loop-on-large-table.md` is right when an unbounded inner `Get`/`FindFirst` joins two large sets. It is wrong as a blanket rewrite of repeated `Get` on the same keys. Replacing a cached `Get` with a Query reopened per call can be slower.

## Best Practice

Keep `Record.Get` for repeated lookups of the same primary keys in one transaction. Use a Query when the work is a true join or aggregation that the record API would express as nested scans. Do not flag a guarded `Get` on a repeating key as an N+1 solely because a Query could express the same columns.

See sample: [`query-results-bypass-primary-key-cache.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/query-results-bypass-primary-key-cache.good.al).

## Anti Pattern

Rewriting a helper that `Get`s Customer by `No.` on every sales line into a Query opened inside that helper. Distinct line customers still need a lookup; repeating customers were already served from the PK cache. The Query pays SQL every time.

See sample: [`query-results-bypass-primary-key-cache.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/query-results-bypass-primary-key-cache.bad.al).

## Examples

- [Good: query-results-bypass-primary-key-cache.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/query-results-bypass-primary-key-cache.good.al)
- [Bad: query-results-bypass-primary-key-cache.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/query-results-bypass-primary-key-cache.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a56b272, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
