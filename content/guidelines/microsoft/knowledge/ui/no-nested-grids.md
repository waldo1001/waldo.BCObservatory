---
id: guideline/microsoft/knowledge/ui/no-nested-grids
type: guideline
title: Nested grids are not supported
summary: A grid nested inside another grid is not a supported pattern in Business Central. Even if an inner grid independently meets the data-table heuristic, the outer grid fails because its groups contain non-field children (the inner grids). The result is broken table semantics for both layers.
tier: official
language: en
tags:
  - grid
  - nested-grid
  - fixed
  - data-table
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:06.835Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d678809f2cc98b09c04a3d71ccf012b7a2bd1fb9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/no-nested-grids.md
    title: "microsoft/BCQuality: Nested grids are not supported"
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
repo_path: microsoft/knowledge/ui/no-nested-grids.md
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
identifiers: []
---

# Nested grids are not supported

> A grid nested inside another grid is not a supported pattern in Business Central. Even if an inner grid independently meets the data-table heuristic, the outer grid fails because its groups contain non-field children (the inner grids). The result is broken table semantics for both layers.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/no-nested-grids.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A grid nested inside another grid is not a supported pattern in Business Central. Even if an inner grid independently meets the data-table heuristic, the outer grid fails because its groups contain non-field children (the inner grids). The result is broken table semantics for both layers.

Always flag a nested grid as a violation. The fix is to restructure the page so there is at most one grid in any branch of the layout tree, choosing either a data-table or a layout-table arrangement.

## Anti Pattern

Wrapping a working data-table grid inside another grid in an attempt to compose two tabular regions side by side. The outer grid silently degrades to layout-table rendering, the inner grid's headers are no longer associated with the outer structure, and editable fields with `ShowCaption = false` lose their labels.

See sample: [`no-nested-grids.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/no-nested-grids.bad.al).

## Examples

- [Bad: no-nested-grids.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/no-nested-grids.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
