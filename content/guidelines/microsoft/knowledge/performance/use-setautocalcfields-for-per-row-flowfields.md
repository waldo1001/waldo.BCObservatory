---
id: guideline/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields
type: guideline
title: Use SetAutoCalcFields when each iterated row needs a FlowField
summary: Record.SetAutoCalcFields has been available since runtime 1.0 and makes the specified FlowFields calculate as records are retrieved. Microsoft's AL database-method performance guidance uses it to remove an explicit CalcFields call from every iteration when each row's FlowField drives a branch.
tier: official
language: en
tags:
  - setautocalcfields
  - calcfields
  - calcsums
  - flowfield
  - loop
  - per-row
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:43.778Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e23cc98e31a70219bc1c8a4864c78dc01b168551
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.md
    title: "microsoft/BCQuality: Use SetAutoCalcFields when each iterated row needs a FlowField"
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
    - change/bcquality/97
repo_path: microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.md
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
  - SetAutoCalcFields
  - FindSet
  - CalcFormula
---

# Use SetAutoCalcFields when each iterated row needs a FlowField

> Record.SetAutoCalcFields has been available since runtime 1.0 and makes the specified FlowFields calculate as records are retrieved. Microsoft's AL database-method performance guidance uses it to remove an explicit CalcFields call from every iteration when each row's FlowField drives a branch.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`Record.SetAutoCalcFields` has been available since runtime 1.0 and makes the specified FlowFields calculate as records are retrieved. Microsoft's [AL database-method performance guidance](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-database-methods-and-performance-on-server#setautocalcfields) uses it to remove an explicit `CalcFields` call from every iteration when each row's FlowField drives a branch. This is different from `CalcSums`, which returns a total for the filtered set rather than a value for each row.

## Best Practice

Call `SetAutoCalcFields` before `FindSet` when every returned row needs the same FlowField for a comparison, branch, or per-record action. For one total of a **stored source field**, consider `CalcSums` instead (see [stored-field totals versus FlowFields](calcsums-instead-of-calcfields-in-loop.md)). If the required result is a total of selected FlowField values, derive the underlying source filters from `CalcFormula`; do not sum the FlowField directly with `CalcSums`.

See sample: [`use-setautocalcfields-for-per-row-flowfields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.good.al).

## Anti Pattern

Calling `CalcFields` inside the loop when every iteration reads the same FlowField. A compatible recent result can be cached, so do not equate each call with a SQL statement. Do not replace row-specific decisions with `CalcSums`; an aggregate cannot preserve which rows met the condition.

See sample: [`use-setautocalcfields-for-per-row-flowfields.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.bad.al).

## Examples

- [Good: use-setautocalcfields-for-per-row-flowfields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.good.al)
- [Bad: use-setautocalcfields-for-per-row-flowfields.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setautocalcfields-for-per-row-flowfields.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [Record.CalcSums(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method) (names CalcSums)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#97 Add per-row AL performance guidance](../../../../changes/bcquality/97.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
