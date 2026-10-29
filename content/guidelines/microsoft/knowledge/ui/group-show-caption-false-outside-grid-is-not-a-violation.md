---
id: guideline/microsoft/knowledge/ui/group-show-caption-false-outside-grid-is-not-a-violation
type: guideline
title: Group ShowCaption = false outside grid/fixed is a layout choice
summary: In a standard Card or Document page, a group with ShowCaption = false is a layout choice, not an accessibility violation.
tier: official
language: en
tags:
  - group
  - show-caption
  - card
  - document
  - layout
  - accessibility
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.650Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fba4bfda8230c9d8970b7b5c5ee58160a0525566
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-show-caption-false-outside-grid-is-not-a-violation.md
    title: "microsoft/BCQuality: Group ShowCaption = false outside grid/fixed is a layout choice"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/ui/group-show-caption-false-outside-grid-is-not-a-violation.md
layer: microsoft
kind: rule
domain: ui
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
  - ShowCaption
---

# Group ShowCaption = false outside grid/fixed is a layout choice

> In a standard Card or Document page, a group with ShowCaption = false is a layout choice, not an accessibility violation.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-show-caption-false-outside-grid-is-not-a-violation.md) · microsoft layer · ui · BC all · tier official · derived

## Description

In a standard Card or Document page, a group with `ShowCaption = false` is a layout choice, not an accessibility violation. Only flag `ShowCaption` issues as documented in the grid/fixed-layout and field-level `ShowCaption` rules — `show-caption-on-editable-fields.md`, `grid-data-table-heuristic.md`, `tabular-intent-requires-data-table-conditions.md`.

The heuristic in BC's client uses **field** captions to decide between data-table and layout-table rendering. A captionless group (outside a grid or fixed layout) does not strip labels from its child fields — each field retains its own caption.

## Best Practice

Reserve accessibility findings for hidden **field** labels and grid-semantics problems. Do not raise a finding merely because a `group` block has `ShowCaption = false` in an ordinary Card or Document page layout.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
