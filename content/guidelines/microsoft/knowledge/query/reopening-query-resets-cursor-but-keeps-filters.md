---
id: guideline/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters
type: guideline
title: Reopening a Query resets its cursor but keeps its filters
summary: Calling Open() on an already open query first closes the current dataset and opens it again. The next Read() starts at the first row; it does not continue from the previous cursor. Reopening also retains filters previously applied to the query variable.
tier: official
language: en
tags:
  - query
  - open
  - close
  - clear
  - cursor
  - filters
  - reuse
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.352Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0d7ca470aa1079f4a5a66d7ae327ee229af56a1f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.md
    title: "microsoft/BCQuality: Reopening a Query resets its cursor but keeps its filters"
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
repo_path: microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.md
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
identifiers: []
---

# Reopening a Query resets its cursor but keeps its filters

> Calling Open() on an already open query first closes the current dataset and opens it again. The next Read() starts at the first row; it does not continue from the previous cursor. Reopening also retains filters previously applied to the query variable.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.md) · microsoft layer · query · BC all · tier official · derived

## Description

Calling `Open()` on an already open query first closes the current dataset and opens it again. The next `Read()` starts at the first row; it does not continue from the previous cursor. Reopening also retains filters previously applied to the query variable. Only `Clear(QueryVariable)` resets those filters, so reuse can unexpectedly reread the first row or carry an old filter into a logically separate operation.

## Best Practice

Open once for one read pass. Close after the pass, and call `Clear(QueryVariable)` before reusing the variable for a logically independent query whose filters must start empty. Set the next pass's filters explicitly before reopening.

See sample: [`reopening-query-resets-cursor-but-keeps-filters.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.good.al).

## Anti Pattern

Calling `Open()` inside or between reads to "advance" or "start fresh", or reusing the same query variable for a new operation while assuming `Open()` cleared old filters. The code compiles but can repeatedly process the first row or silently omit rows behind a retained filter.

See sample: [`reopening-query-resets-cursor-but-keeps-filters.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.bad.al).

## Examples

- [Good: reopening-query-resets-cursor-but-keeps-filters.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.good.al)
- [Bad: reopening-query-resets-cursor-but-keeps-filters.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/reopening-query-resets-cursor-but-keeps-filters.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
