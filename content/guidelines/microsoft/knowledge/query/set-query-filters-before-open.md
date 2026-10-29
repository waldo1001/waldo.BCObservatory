---
id: guideline/microsoft/knowledge/query/set-query-filters-before-open
type: guideline
title: Set Query filters before Open
summary: Query.SetFilter and Query.SetRange automatically close an open query dataset. A call placed after Open() therefore does not refine the rows already being read; it ends that dataset.
tier: official
language: en
tags:
  - query
  - setfilter
  - setrange
  - open
  - read
  - dataset
  - filter-order
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.407Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bb82e9d731dd362d665e12e4fc003a600e8c2e7f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/set-query-filters-before-open.md
    title: "microsoft/BCQuality: Set Query filters before Open"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/query/set-query-filters-before-open.md
layer: microsoft
kind: rule
domain: query
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
  - SetFilter
  - SetRange
---

# Set Query filters before Open

> Query.SetFilter and Query.SetRange automatically close an open query dataset. A call placed after Open() therefore does not refine the rows already being read; it ends that dataset.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/set-query-filters-before-open.md) · microsoft layer · query · BC all · tier official · derived

## Description

`Query.SetFilter` and `Query.SetRange` automatically close an open query dataset. A call placed after `Open()` therefore does not refine the rows already being read; it ends that dataset. The next `Read()` has no open dataset unless the code explicitly calls `Open()` again, so a plausible filter change can turn a working loop into an empty or failing read sequence without a compiler diagnostic.

## Best Practice

Apply every filter before `Open()`, then read the dataset to completion and call `Close()`. When a later branch needs different filters, close or clear the query, set the new filters, and open a new dataset deliberately.

See sample: [`set-query-filters-before-open.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/set-query-filters-before-open.good.al).

## Anti Pattern

`Query.Open()` followed by `SetFilter` or `SetRange` and then `Read()` under the assumption that the filter updates the open cursor. Refiltering after `Open()` is valid only when the code intentionally opens a fresh dataset afterward.

See sample: [`set-query-filters-before-open.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/set-query-filters-before-open.bad.al).

## Examples

- [Good: set-query-filters-before-open.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/set-query-filters-before-open.good.al)
- [Bad: set-query-filters-before-open.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/set-query-filters-before-open.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
