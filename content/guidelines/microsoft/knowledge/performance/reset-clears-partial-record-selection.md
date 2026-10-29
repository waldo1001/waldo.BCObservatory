---
id: guideline/microsoft/knowledge/performance/reset-clears-partial-record-selection
type: guideline
title: Reset and empty SetLoadFields restore a full-row load
summary: SetLoadFields(...) sticks to the record variable until something clears it. Reset() "changes fields select for loading back to all", and SetLoadFields() with no arguments does the same. A later FindSet or Get then materializes every normal field.
tier: official
language: en
tags:
  - reset
  - setloadfields
  - partial-record
  - load-selection
  - findset
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.619Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d53aecb057087e952622506e02cd7ea8a9442ee2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/reset-clears-partial-record-selection.md
    title: "microsoft/BCQuality: Reset and empty SetLoadFields restore a full-row load"
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
repo_path: microsoft/knowledge/performance/reset-clears-partial-record-selection.md
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
  - FindSet
  - SetLoadFields
---

# Reset and empty SetLoadFields restore a full-row load

> SetLoadFields(...) sticks to the record variable until something clears it. Reset() "changes fields select for loading back to all", and SetLoadFields() with no arguments does the same. A later FindSet or Get then materializes every normal field.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/reset-clears-partial-record-selection.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`SetLoadFields(...)` sticks to the record variable until something clears it. `Reset()` "changes fields select for loading back to all", and `SetLoadFields()` with no arguments does the same. A later `FindSet` or `Get` then materializes every normal field. Agents often place `SetLoadFields` first, then `Reset` to apply new filters, and assume the partial selection survives. It does not.

## Best Practice

Call `Reset` (or empty `SetLoadFields()`) first when the variable must be reused, then call `SetLoadFields` with the fields the next read actually uses, then apply filters and read. After `Reset`, a new `SetLoadFields` is required; the previous list is gone.

See sample: [`reset-clears-partial-record-selection.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/reset-clears-partial-record-selection.good.al).

## Anti Pattern

`SetLoadFields(...)` followed by `Reset()` (or by parameterless `SetLoadFields()`) and then `FindSet` without restoring the load list. The filters look correct; the SQL still selects every column.

See sample: [`reset-clears-partial-record-selection.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/reset-clears-partial-record-selection.bad.al).

## Examples

- [Good: reset-clears-partial-record-selection.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/reset-clears-partial-record-selection.good.al)
- [Bad: reset-clears-partial-record-selection.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/reset-clears-partial-record-selection.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
