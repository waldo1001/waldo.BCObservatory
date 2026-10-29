---
id: guideline/microsoft/knowledge/performance/page-effective-filter-may-live-outside-the-diff
type: guideline
title: A page or lookup's effective filter may be defined outside the changed hunk
summary: The effective filter on a drill-down, lookup, or list result set is frequently defined outside any single changed hunk — on the table via a SourceTableView property or a TableRelation, or through SetRange/SetFilter calls in unchanged code that runs before the result is shown.
tier: official
language: en
tags:
  - filter
  - drilldown
  - lookup
  - sourcetableview
  - tablerelation
  - setrange
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.076Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 50eb014a29349a29a434d2d8f550c0e3337a41c6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-effective-filter-may-live-outside-the-diff.md
    title: "microsoft/BCQuality: A page or lookup's effective filter may be defined outside the changed hunk"
    date: "2026-07-17"
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
    - change/bcquality/112
repo_path: microsoft/knowledge/performance/page-effective-filter-may-live-outside-the-diff.md
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
examples: 0
identifiers:
  - SourceTableView
  - TableRelation
  - SetRange
  - SetFilter
---

# A page or lookup's effective filter may be defined outside the changed hunk

> The effective filter on a drill-down, lookup, or list result set is frequently defined outside any single changed hunk — on the table via a SourceTableView property or a TableRelation, or through SetRange/SetFilter calls in unchanged code that runs before the result is shown.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-effective-filter-may-live-outside-the-diff.md) · microsoft layer · performance · BC all · tier official · derived

## Description

The effective filter on a drill-down, lookup, or list result set is frequently defined outside any single changed hunk — on the table via a `SourceTableView` property or a `TableRelation`, or through `SetRange`/`SetFilter` calls in unchanged code that runs before the result is shown. The absence of a filter within the changed lines of a diff is therefore not evidence that the result set is unfiltered or that it will load an entire table.

## Best Practice

Do not assert that a drill-down, lookup, or list is "unfiltered" based only on the changed hunk. Confirm the effective filter by checking the page's `SourceTableView`, the field's `TableRelation`, and any `SetRange`/`SetFilter` in the surrounding (possibly unchanged) code before raising a finding about an unbounded result set.

## Anti Pattern

Concluding that a lookup or drill-down loads an unfiltered, full-table result set solely because no `SetRange`/`SetFilter` appears in the changed lines, when the filter is defined on the table, in a `TableRelation`, or in unchanged setup code.

## Changed by

- [#112 Add precision guards for systematic agent false-positive patterns](../../../../changes/bcquality/112.md), 2026-07-17

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
