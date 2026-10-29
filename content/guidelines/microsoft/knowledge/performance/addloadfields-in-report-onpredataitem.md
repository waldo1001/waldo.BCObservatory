---
id: guideline/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem
type: guideline
title: Add trigger-only report fields in OnPreDataItem
summary: Report dataitem field selection is calculated at compile time and once per dataitem type during execution. Fields referenced by dataset columns are selected automatically; fields used only in triggers are not.
tier: official
language: en
tags:
  - report
  - addloadfields
  - onpredataitem
  - dataitem
  - partial-record
  - layout
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:34.440Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b72fc416767d2fb91dbfe4d210dca9345d95d471
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.md
    title: "microsoft/BCQuality: Add trigger-only report fields in OnPreDataItem"
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
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.md
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
  - AddLoadFields
  - OnPreDataItem
---

# Add trigger-only report fields in OnPreDataItem

> Report dataitem field selection is calculated at compile time and once per dataitem type during execution. Fields referenced by dataset columns are selected automatically; fields used only in triggers are not.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Report dataitem field selection is calculated at compile time and once per dataitem type during execution. Fields referenced by dataset columns are selected automatically; fields used only in triggers are not. Use `AddLoadFields` in `OnPreDataItem` to supplement the automatic selection with normal fields that trigger code needs.

## Best Practice

When a dataitem trigger needs an extra field, add that field in `OnPreDataItem` before iteration starts. This supplements the compiler-selected fields and avoids the first just-in-time load and enumerator update when the trigger reads the extra field.

See sample: [`addloadfields-in-report-onpredataitem.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.good.al).

## Anti Pattern

Listing every dataset column in `AddLoadFields`, or omitting a known trigger-only field because the dataset already uses other fields. The former is redundant; the latter causes a just-in-time load on first access and can cause repeated loads when the record is copied or passed by value.

See sample: [`addloadfields-in-report-onpredataitem.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.bad.al).

## Examples

- [Good: addloadfields-in-report-onpredataitem.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.good.al)
- [Bad: addloadfields-in-report-onpredataitem.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/addloadfields-in-report-onpredataitem.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
