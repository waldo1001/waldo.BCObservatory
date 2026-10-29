---
id: guideline/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields
type: guideline
title: Skip SetLoadFields on write and copy paths
summary: "SetLoadFields is a read optimization. The platform's partial-record usage guidelines list the operations that require every field to already be present: Insert, Delete, Rename, TransferFields, and copying a record into a temporary table."
tier: official
language: en
tags:
  - setloadfields
  - partial-record
  - jit-load
  - modify
  - insert
  - transferfields
  - write-path
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.713Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 41a0ad8c7eb0e522a2fc20a6eba631f2d0c13bb1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.md
    title: "microsoft/BCQuality: Skip SetLoadFields on write and copy paths"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.md
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
  - SetLoadFields
  - TransferFields
  - FindSet
---

# Skip SetLoadFields on write and copy paths

> SetLoadFields is a read optimization. The platform's partial-record usage guidelines list the operations that require every field to already be present: Insert, Delete, Rename, TransferFields, and copying a record into a temporary table.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`SetLoadFields` is a read optimization. The platform's [partial-record usage guidelines](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-partial-records#usage-guidelines) list the operations that require every field to already be present: `Insert`, `Delete`, `Rename`, `TransferFields`, and copying a record into a temporary table. When those operations run on a partial record, the platform issues a just-in-time load of the missing fields. That extra round-trip costs more than loading the full row on the original `FindSet` or `Get`. Note: `Modify` itself is **not** in this list — a `Modify(false)` that only touches loaded fields is safe with a partial record.

## Best Practice

Omit `SetLoadFields` on loops whose body performs a documented full-load operation (`Insert`, `Delete`, `Rename`, `TransferFields`, or assignment into a temporary record) on the same record variable, so the initial read already materializes every field those operations need.

See sample: [`skip-setloadfields-on-write-and-transferfields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.good.al).

## Anti Pattern

Calling `SetLoadFields` immediately before a `FindSet` whose body performs `Delete`, `Rename`, `TransferFields`, or copies the record into a temporary table. The review signal is a partial-record setup on a record variable that feeds one of these documented full-load operations in the same iteration.

See sample: [`skip-setloadfields-on-write-and-transferfields.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.bad.al).

## Examples

- [Good: skip-setloadfields-on-write-and-transferfields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.good.al)
- [Bad: skip-setloadfields-on-write-and-transferfields.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/skip-setloadfields-on-write-and-transferfields.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
