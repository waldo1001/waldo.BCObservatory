---
id: guideline/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop
type: guideline
title: Use CalcSums for stored-field totals, not as a shortcut for FlowFields
summary: CalcFields evaluates a FlowField for one record; CalcSums totals stored numeric fields in a filtered source table. They do not generally answer the same question. A loop that adds a normal source field for one total can often use one CalcSums, possibly backed by a compatible SIFT index.
tier: official
language: en
tags:
  - calcfields
  - calcsums
  - loop
  - flowfield
  - source-field
  - sumindexfields
  - aggregation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:38.215Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fff5e252f0a9c173a3d0f2d9146b7ab5243b577e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.md
    title: "microsoft/BCQuality: Use CalcSums for stored-field totals, not as a shortcut for FlowFields"
    date: "2026-09-29"
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
    - change/bcquality/198
    - change/bcquality/174
repo_path: microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.md
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
  - CalcFields
  - CalcSums
  - CalcFormula
  - SumIndexFields
  - SetAutoCalcFields
---

# Use CalcSums for stored-field totals, not as a shortcut for FlowFields

> CalcFields evaluates a FlowField for one record; CalcSums totals stored numeric fields in a filtered source table. They do not generally answer the same question. A loop that adds a normal source field for one total can often use one CalcSums, possibly backed by a compatible SIFT index.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`CalcFields` evaluates a FlowField for one record; `CalcSums` totals stored numeric fields in a filtered source table. They do not generally answer the same question. A loop that adds a normal source field for one total can often use one `CalcSums`, possibly backed by a compatible SIFT index. A loop that adds calculated FlowFields cannot be replaced with `CalcSums` on those FlowFields: each `CalcFormula` may depend on its parent record, FlowFilters, and the selected parent set. `CalcFields` requests can also use a recent calculation cache, so source-level call counts are not SQL statement counts.

## Best Practice

When only one total over stored source fields is needed, set the source-table filters and call `CalcSums` on those fields; select an appropriate current key with `SumIndexFields` when relying on SIFT, and measure the read/write trade-off. If the inputs are FlowFields, derive any proposed source aggregation from their `CalcFormula`, including the selected parent set and FlowFilters, and verify equivalent results before replacing the loop. When every row needs its own FlowField value, [use `SetAutoCalcFields`](use-setautocalcfields-for-per-row-flowfields.md) where appropriate rather than replacing row values with one total. See [SIFT trade-offs](choose-maintainsiftindex-by-read-write-ratio.md).

See sample: [`calcsums-instead-of-calcfields-in-loop.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.good.al).

## Anti Pattern

Looping over filtered `Cust. Ledger Entry` records and adding the stored `"Sales (LCY)"` field when the only output is its total. The opposite mistake is proposing `Customer.CalcSums(Balance)` as a generic replacement for adding selected customers' FlowField balances; that changes or fails to express the required calculation.

See sample: [`calcsums-instead-of-calcfields-in-loop.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.bad.al).

## References

- [CalcFields and CalcSums operate on different field calculations](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-calcfields-calcsums-fielderror-fieldname-init-testfield-and-validate-methods).
- [Record.CalcSums](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method).

## Examples

- [Good: calcsums-instead-of-calcfields-in-loop.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.good.al)
- [Bad: calcsums-instead-of-calcfields-in-loop.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcsums-instead-of-calcfields-in-loop.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [Record.CalcSums(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method) (names CalcSums)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
