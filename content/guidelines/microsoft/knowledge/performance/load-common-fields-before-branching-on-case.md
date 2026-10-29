---
id: guideline/microsoft/knowledge/performance/load-common-fields-before-branching-on-case
type: guideline
title: Load common fields before branching on case
summary: When a known input determines which fields a subsequent record read will use, a single SetLoadFields containing every branch's fields loads unnecessary columns.
tier: official
language: en
tags:
  - setloadfields
  - case
  - conditional
  - branch
  - field-loading
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.307Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6a48663dfb035022d7cf0cfe55587640d6369d21
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-common-fields-before-branching-on-case.md
    title: "microsoft/BCQuality: Load common fields before branching on case"
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
repo_path: microsoft/knowledge/performance/load-common-fields-before-branching-on-case.md
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
  - FindFirst
  - FindSet
  - AddLoadFields
---

# Load common fields before branching on case

> When a known input determines which fields a subsequent record read will use, a single SetLoadFields containing every branch's fields loads unnecessary columns.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-common-fields-before-branching-on-case.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

When a known input determines which fields a subsequent record read will use, a single `SetLoadFields` containing every branch's fields loads unnecessary columns. Build the selection before `Get`, `FindFirst`, or `FindSet`: use `SetLoadFields` for fields common to every branch, then `AddLoadFields` for the selected branch. `SetLoadFields` replaces the current selection, while `AddLoadFields` preserves it.

## Best Practice

Call `SetLoadFields` with the common fields. In each branch, call `AddLoadFields` with that branch's normal fields and then perform the record read. This applies only when the discriminator is known before the read; branching on a field from an already-loaded row is too late to tailor that row's initial SQL projection.

See sample: [`load-common-fields-before-branching-on-case.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-common-fields-before-branching-on-case.good.al).

## Anti Pattern

A single top-level `SetLoadFields` enumerating every branch's fields, or a branch-local `SetLoadFields` that accidentally discards the common selection. Both make the declared load plan differ from the fields the selected path actually uses.

See sample: [`load-common-fields-before-branching-on-case.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-common-fields-before-branching-on-case.bad.al).

## Examples

- [Good: load-common-fields-before-branching-on-case.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-common-fields-before-branching-on-case.good.al)
- [Bad: load-common-fields-before-branching-on-case.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/load-common-fields-before-branching-on-case.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
