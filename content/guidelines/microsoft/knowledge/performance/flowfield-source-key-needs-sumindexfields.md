---
id: guideline/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields
type: guideline
title: A FlowField needs a source-table key that covers its CalcFormula
summary: A FlowField is computed by SQL on demand.
tier: official
language: en
tags:
  - flowfield
  - sumindexfields
  - sift
  - key
  - calcformula
  - aa0232
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.957Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fdedc4264c2832c311e1908fe789acdab6aea303
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.md
    title: "microsoft/BCQuality: A FlowField needs a source-table key that covers its CalcFormula"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.md
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
  - CalcFormula
  - SumIndexFields
  - CalcFields
  - CalcSums
---

# A FlowField needs a source-table key that covers its CalcFormula

> A FlowField is computed by SQL on demand.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A FlowField is computed by SQL on demand. CodeCop AA0232 — "FlowFields should be indexed with SumIndexFields on corresponding keys" — captures the indexing requirement: the source table must declare a key that includes the fields the `CalcFormula` filters on, with the aggregated field listed in that key's `SumIndexFields`. When that alignment is in place, the platform answers `CalcFields`/`CalcSums` from SIFT; without it, the same query falls back to a row-by-row aggregation on what is often a ledger-scale table. Per the upstream guidance, "Missing SIFT indices cause performance issues on List pages."

## Best Practice

When introducing or changing a FlowField, walk the `CalcFormula`'s `WHERE` clause field by field and verify the source table has a key whose key fields cover those filters, with the aggregated field in `SumIndexFields`. The same applies when the destination side of the FlowField filter is a list-page column: the page filter triggers the FlowField on every visible row, and only SIFT keeps that affordable.

See sample: [`flowfield-source-key-needs-sumindexfields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.good.al).

## Anti Pattern

A `sum` FlowField against a large source table with no matching SIFT key. Each calculation aggregates rows directly; on a ledger-sized source the FlowField becomes the slowest column on every page that displays it. Pointing an existing FlowField's `CalcFormula` at a larger source table without verifying the new source's keys is the same trap a step removed — the upstream review guidance flags it as "CalcFormula changed to larger source table".

See sample: [`flowfield-source-key-needs-sumindexfields.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.bad.al).

## Examples

- [Good: flowfield-source-key-needs-sumindexfields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.good.al)
- [Bad: flowfield-source-key-needs-sumindexfields.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/flowfield-source-key-needs-sumindexfields.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [Record.CalcSums(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method) (names CalcSums)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
