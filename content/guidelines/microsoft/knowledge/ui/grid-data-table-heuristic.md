---
id: guideline/microsoft/knowledge/ui/grid-data-table-heuristic
type: guideline
title: Grid and fixed-layout data-table heuristic
summary: "Business Central renders grid() and fixed() layouts in two modes. The mode is chosen automatically by a client heuristic. A grid renders as a data table (HTML <table> with row/column semantics) only when all of the following are true:"
tier: official
language: en
tags:
  - grid
  - fixed
  - data-table
  - heuristic
  - show-caption
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:06.707Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1f82a525d1f9c755283cab8ccb7ed3c69dfaa0c0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/grid-data-table-heuristic.md
    title: "microsoft/BCQuality: Grid and fixed-layout data-table heuristic"
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
repo_path: microsoft/knowledge/ui/grid-data-table-heuristic.md
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
examples: 1
identifiers:
  - ShowCaption
---

# Grid and fixed-layout data-table heuristic

> Business Central renders grid() and fixed() layouts in two modes. The mode is chosen automatically by a client heuristic. A grid renders as a data table (HTML <table> with row/column semantics) only when all of the following are true:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/grid-data-table-heuristic.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Business Central renders `grid()` and `fixed()` layouts in two modes. The mode is chosen automatically by a client heuristic. A grid renders as a **data table** (HTML `<table>` with row/column semantics) only when **all** of the following are true:

- All direct children of the grid/fixed are groups (no loose fields).
- Every child of every group is a field (no nested groups or other controls).
- All fields have `ShowCaption = false`.

The heuristic checks field captions only — group `ShowCaption` is not part of the check. A group with a visible caption inside a data-table grid does **not** break the heuristic and is not a violation. However, groups in a data table should also have `ShowCaption = false` for correct visual presentation.

Any grid or fixed layout that does not meet all three conditions renders as a layout table (visual column arrangement, no table semantics).

## Best Practice

If you intend a grid or fixed layout to render as a data table, satisfy all three conditions and verify the resulting markup matches your intent. If you do not need tabular semantics, prefer simple groups over grid or fixed layouts — they reflow better and produce correct semantic markup automatically.

See sample: [`grid-data-table-heuristic.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/grid-data-table-heuristic.good.al).

## Examples

- [Good: grid-data-table-heuristic.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/grid-data-table-heuristic.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
