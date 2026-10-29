---
id: guideline/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table
type: guideline
title: Avoid Get / FindFirst inside a loop on a large inner table
summary: "A Get or FindFirst against another persistent table inside a loop can produce an N+1 access pattern: one outer query followed by repeated inner lookups. Server and primary-key caches can satisfy some Get calls, so a source-level Get is not proof of one SQL round-trip."
tier: official
language: en
tags:
  - n-plus-one
  - get
  - findfirst
  - loop
  - inner-lookup
  - large-table
  - item-get
  - query
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:37.888Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 08c73a9e8126c8fdf73061e775083c82d5ac1429
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.md
    title: "microsoft/BCQuality: Avoid Get / FindFirst inside a loop on a large inner table"
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
    - change/bcquality/174
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.md
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
  - SetLoadFields
---

# Avoid Get / FindFirst inside a loop on a large inner table

> A Get or FindFirst against another persistent table inside a loop can produce an N+1 access pattern: one outer query followed by repeated inner lookups. Server and primary-key caches can satisfy some Get calls, so a source-level Get is not proof of one SQL round-trip.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A `Get` or `FindFirst` against another persistent table inside a loop can produce an N+1 access pattern: one outer query followed by repeated inner lookups. Server and primary-key caches can satisfy some `Get` calls, so a source-level `Get` is not proof of one SQL round-trip. The concern is an unbounded loop whose lookup keys are not known to repeat or remain cached.

## Best Practice

Use a query object to join the outer and inner tables when the relationship and filters can be expressed as one query. If complete lookup keys repeat and the result remains valid, a [scoped cache](cache-repeated-filtered-results-with-explicit-scope.md) can reduce lookups to one per distinct key; do not assume primary-key `Get` calls each hit SQL (see [transaction caching](primary-key-get-in-loop-is-transaction-cached.md)). `SetLoadFields` can reduce the columns transferred by unavoidable inner reads, but it does not eliminate the N+1 shape and must not be presented as doing so.

See sample: [`avoid-get-inside-loop-on-large-table.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.good.al).

## Anti Pattern

Iterating production BOM lines and calling `Item.Get(BOMLine."No.")` for each line when the same result can be produced by a query joining Production BOM Line to Item. Partial loading alone is only a payload mitigation for this pattern.

See sample: [`avoid-get-inside-loop-on-large-table.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.bad.al).

## Examples

- [Good: avoid-get-inside-loop-on-large-table.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.good.al)
- [Bad: avoid-get-inside-loop-on-large-table.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-get-inside-loop-on-large-table.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
