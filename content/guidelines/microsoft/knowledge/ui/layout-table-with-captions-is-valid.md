---
id: guideline/microsoft/knowledge/ui/layout-table-with-captions-is-valid
type: guideline
title: Layout-table grids with visible captions are valid
summary: A grid or fixed layout that does not meet all three data-table conditions renders as a layout table. A layout table where editable fields keep their visible captions is not an accessibility violation. Each field is labeled by its own caption — this is a valid, accessible pattern.
tier: official
language: en
tags:
  - grid
  - fixed
  - layout-table
  - show-caption
  - false-positive
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.673Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 53caaec5ac6c659830ce4a9c85f0185f4c802cbe
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/layout-table-with-captions-is-valid.md
    title: "microsoft/BCQuality: Layout-table grids with visible captions are valid"
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
repo_path: microsoft/knowledge/ui/layout-table-with-captions-is-valid.md
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
identifiers: []
---

# Layout-table grids with visible captions are valid

> A grid or fixed layout that does not meet all three data-table conditions renders as a layout table. A layout table where editable fields keep their visible captions is not an accessibility violation. Each field is labeled by its own caption — this is a valid, accessible pattern.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/layout-table-with-captions-is-valid.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A grid or fixed layout that does not meet all three data-table conditions renders as a **layout table**. A layout table where editable fields keep their visible captions is not an accessibility violation. Each field is labeled by its own caption — this is a valid, accessible pattern.

Do not flag a grid or fixed layout as an accessibility issue merely because it does not meet the data-table heuristic. The violation is hidden labels in a non-data-table grid, not the layout choice itself.

## Best Practice

When reviewing a grid or fixed layout, first check whether it meets all data-table conditions. If yes, `ShowCaption = false` on fields is correct. If no, allow editable fields to keep their captions and only flag the cases enumerated in `tabular-intent-requires-data-table-conditions.md`.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
