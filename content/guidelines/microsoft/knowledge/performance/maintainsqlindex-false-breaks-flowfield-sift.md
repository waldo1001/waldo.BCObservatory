---
id: guideline/microsoft/knowledge/performance/maintainsqlindex-false-breaks-flowfield-sift
type: guideline
title: MaintainSQLIndex = false on a key disables SIFT for FlowFields that depend on it
summary: MaintainSQLIndex = false on a key tells the platform not to materialize that key as a SQL index. Per the upstream guidance, when a FlowField's source key carries that property, "SIFT cannot function, COUNT/SUM will table-scan."
tier: official
language: en
tags:
  - maintainsqlindex
  - key
  - sift
  - flowfield
  - sum
  - count
  - table-scan
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
  input_hash: 8898e4417be6c210f05e87976483dfb5139cc948
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/maintainsqlindex-false-breaks-flowfield-sift.md
    title: "microsoft/BCQuality: MaintainSQLIndex = false on a key disables SIFT for FlowFields that depend on it"
    date: "2026-09-09"
    commit: a56b272c6b950c2a423bbeda190585cd53beca2a
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
repo_path: microsoft/knowledge/performance/maintainsqlindex-false-breaks-flowfield-sift.md
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
examples: 1
identifiers:
  - CalcFormula
  - CalcFields
  - CalcSums
---

# MaintainSQLIndex = false on a key disables SIFT for FlowFields that depend on it

> MaintainSQLIndex = false on a key tells the platform not to materialize that key as a SQL index. Per the upstream guidance, when a FlowField's source key carries that property, "SIFT cannot function, COUNT/SUM will table-scan."

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/maintainsqlindex-false-breaks-flowfield-sift.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`MaintainSQLIndex = false` on a key tells the platform not to materialize that key as a SQL index. Per the upstream guidance, when a FlowField's source key carries that property, "SIFT cannot function, COUNT/SUM will table-scan." The flag is sometimes set to save write-path cost on a rarely-queried key, but if a `CalcFormula` aggregates through that exact key, the FlowField loses its index — every `CalcFields`/`CalcSums`/list-page filter that triggers it runs without one.

## Best Practice

When changing a key property to `MaintainSQLIndex = false`, find every FlowField whose `CalcFormula` filters on that key and verify another key covers the same fields. When adding a FlowField whose source table has only a `MaintainSQLIndex = false` key for its filter columns, add a fully-indexed key (or accept that the FlowField cannot ride SIFT and reshape the design — see `flowfield-source-key-needs-sumindexfields.md`).

See sample: [`maintainsqlindex-false-breaks-flowfield-sift.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/maintainsqlindex-false-breaks-flowfield-sift.bad.al).

## Anti Pattern

A FlowField whose `CalcFormula`'s `WHERE` columns line up with a key that has `MaintainSQLIndex = false`. The schema looks correct — the key exists, the SumIndexFields are listed — but at runtime the platform has no SQL index to use, and the aggregation table-scans on every invocation.

## Examples

- [Bad: maintainsqlindex-false-breaks-flowfield-sift.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/maintainsqlindex-false-breaks-flowfield-sift.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [Record.CalcSums(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method) (names CalcSums)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a56b272, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
