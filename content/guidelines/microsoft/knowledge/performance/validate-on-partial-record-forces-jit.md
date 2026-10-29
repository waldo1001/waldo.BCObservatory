---
id: guideline/microsoft/knowledge/performance/validate-on-partial-record-forces-jit
type: guideline
title: Validate on a partial record forces JIT loads
summary: Validate runs the field's OnValidate trigger and TableRelation lookups. Those code paths routinely touch other fields on the same record.
tier: official
language: en
tags:
  - validate
  - setloadfields
  - jit-load
  - table-relation
  - onvalidate
  - partial-record
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:44.279Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2b87c2abd5fe3fdb18a8ebfaafaa2c9b08995192
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/validate-on-partial-record-forces-jit.md
    title: "microsoft/BCQuality: Validate on a partial record forces JIT loads"
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
repo_path: microsoft/knowledge/performance/validate-on-partial-record-forces-jit.md
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
  - OnValidate
  - SetLoadFields
  - AddLoadFields
---

# Validate on a partial record forces JIT loads

> Validate runs the field's OnValidate trigger and TableRelation lookups. Those code paths routinely touch other fields on the same record.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/validate-on-partial-record-forces-jit.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`Validate` runs the field's `OnValidate` trigger and TableRelation lookups. Those code paths routinely touch other fields on the same record. On a partial row those extra fields are not loaded, so the platform JIT-loads them — often the rest of the row — plus any related-table reads the trigger performs. Distinct from `skip-setloadfields-on-write-and-transferfields.md`: the write may be `Modify(false)`; `Validate` is what blows the partial load. Agents that combine `SetLoadFields` with `Validate` in a loop produce slower code than an unoptimized assignment.

## Best Practice

In a partial-record loop, assign fields directly when trigger side effects are not required. If `Validate` is required, do not use `SetLoadFields` on that iterator, or `AddLoadFields` every field the validate path can touch before the read.

See sample: [`validate-on-partial-record-forces-jit.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/validate-on-partial-record-forces-jit.good.al).

## Anti Pattern

`SetLoadFields` on a handful of columns, then `Validate` inside the loop. The load list looks optimal; runtime JIT and TableRelation I/O dominate. The signal is `Validate(` on a record that still has a `SetLoadFields` in the same procedure.

See sample: [`validate-on-partial-record-forces-jit.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/validate-on-partial-record-forces-jit.bad.al).

## Examples

- [Good: validate-on-partial-record-forces-jit.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/validate-on-partial-record-forces-jit.good.al)
- [Bad: validate-on-partial-record-forces-jit.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/validate-on-partial-record-forces-jit.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
