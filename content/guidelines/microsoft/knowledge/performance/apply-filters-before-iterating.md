---
id: guideline/microsoft/knowledge/performance/apply-filters-before-iterating
type: guideline
title: Apply SetRange/SetFilter before iterating, not as an if-test inside the loop
summary: A SetRange or SetFilter placed before FindSet narrows the result set at the database. The same condition expressed as an if inside the loop body filters in AL, after every row has crossed the boundary.
tier: official
language: en
tags:
  - setrange
  - setfilter
  - filter
  - loop
  - early
  - dataset
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:34.477Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4c64be23cfcd6f9b26d35fa8cb8cae1b04bcfa3a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-filters-before-iterating.md
    title: "microsoft/BCQuality: Apply SetRange/SetFilter before iterating, not as an if-test inside the loop"
    date: "2026-09-09"
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
    - change/bcquality/174
    - change/bcquality/135
repo_path: microsoft/knowledge/performance/apply-filters-before-iterating.md
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
  - SetRange
  - SetFilter
  - FindSet
  - SetCurrentKey
---

# Apply SetRange/SetFilter before iterating, not as an if-test inside the loop

> A SetRange or SetFilter placed before FindSet narrows the result set at the database. The same condition expressed as an if inside the loop body filters in AL, after every row has crossed the boundary.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-filters-before-iterating.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A `SetRange` or `SetFilter` placed before `FindSet` narrows the result set at the database. The same condition expressed as an `if` inside the loop body filters in AL, after every row has crossed the boundary. Per the upstream guidance, "apply `SetRange`/`SetFilter` as early as possible to reduce dataset" and "more specific filters = better performance." On a production-scale table the difference is the difference between scanning a subset and scanning the whole table.

## Best Practice

Move every predicate that can be expressed as an equality or range filter into a `SetRange` or `SetFilter` ahead of the find. Make sure a key (index) exists whose leading fields cover the filter so the optimizer can seek; note that `SetCurrentKey` only sets sort order and is not an index hint (see `setcurrentkey-sets-sort-order-not-index-hint.md`). The loop body should then contain only the work that depends on per-row state.

See sample: [`apply-filters-before-iterating.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-filters-before-iterating.good.al).

## Anti Pattern

`if Customer.FindSet() then repeat if Customer."Country/Region Code" = 'US' then ProcessCustomer(Customer); until Customer.Next() = 0;` — the loop pays for every row in the table and discards the non-matching ones in AL. The intent is the same as a `SetRange("Country/Region Code", 'US')` ahead of the find, but the cost is not.

See sample: [`apply-filters-before-iterating.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-filters-before-iterating.bad.al).

## Examples

- [Good: apply-filters-before-iterating.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-filters-before-iterating.good.al)
- [Bad: apply-filters-before-iterating.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/apply-filters-before-iterating.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#135 Correct severe misconception about SetCurrentKey in the knowledge base](../../../../changes/bcquality/135.md), 2026-08-23

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
