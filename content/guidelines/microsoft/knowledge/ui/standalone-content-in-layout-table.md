---
id: guideline/microsoft/knowledge/ui/standalone-content-in-layout-table
type: guideline
title: Standalone content in a layout-table grid
summary: A non-editable field with ShowCaption = false is acceptable inside a layout-table grid only when the field is standalone content — it displays a value that is meaningful on its own (for example a status message or a description) and is not intended to label or be labeled by another field in the…
tier: official
language: en
tags:
  - grid
  - fixed
  - layout-table
  - standalone-content
  - show-caption
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:07.736Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 63f8d580d2840fedb169f3fc08f0c979d2f29bfb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/standalone-content-in-layout-table.md
    title: "microsoft/BCQuality: Standalone content in a layout-table grid"
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
repo_path: microsoft/knowledge/ui/standalone-content-in-layout-table.md
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

# Standalone content in a layout-table grid

> A non-editable field with ShowCaption = false is acceptable inside a layout-table grid only when the field is standalone content — it displays a value that is meaningful on its own (for example a status message or a description) and is not intended to label or be labeled by another field in the…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/standalone-content-in-layout-table.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A non-editable field with `ShowCaption = false` is acceptable inside a layout-table grid **only when** the field is **standalone content** — it displays a value that is meaningful on its own (for example a status message or a description) and is **not** intended to label or be labeled by another field in the grid.

Layout tables have no `<th>` column headers, so a captionless field that is meant to participate in a tabular relationship with a neighbour has no accessible label at all.

## Best Practice

Reserve `ShowCaption = false` in a layout-table grid for non-editable, free-standing content cells. If a field's role is to label or annotate another field in the same grid, restructure the grid to meet the data-table conditions (see `grid-data-table-heuristic.md`) instead of hiding the caption.

See sample: [`standalone-content-in-layout-table.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/standalone-content-in-layout-table.good.al).

## Examples

- [Good: standalone-content-in-layout-table.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/standalone-content-in-layout-table.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
