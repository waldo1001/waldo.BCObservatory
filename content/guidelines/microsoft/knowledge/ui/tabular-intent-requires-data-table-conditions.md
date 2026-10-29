---
id: guideline/microsoft/knowledge/ui/tabular-intent-requires-data-table-conditions
type: guideline
title: Tabular intent requires data-table conditions
summary: The most common accessibility bug in grid layouts is partially following the data-table conventions. A developer arranges fields with tabular intent — one field acts as a label or row header for another — but the grid does not satisfy all the data-table heuristic conditions.
tier: official
language: en
tags:
  - grid
  - fixed
  - tabular-intent
  - data-table
  - accidental-mix
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:08.224Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c02bbd94bae7014a8eab0ba1d4986bf2cf5d8090
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/tabular-intent-requires-data-table-conditions.md
    title: "microsoft/BCQuality: Tabular intent requires data-table conditions"
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
repo_path: microsoft/knowledge/ui/tabular-intent-requires-data-table-conditions.md
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

# Tabular intent requires data-table conditions

> The most common accessibility bug in grid layouts is partially following the data-table conventions. A developer arranges fields with tabular intent — one field acts as a label or row header for another — but the grid does not satisfy all the data-table heuristic conditions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/tabular-intent-requires-data-table-conditions.md) · microsoft layer · ui · BC all · tier official · derived

## Description

The most common accessibility bug in grid layouts is partially following the data-table conventions. A developer arranges fields with **tabular intent** — one field acts as a label or row header for another — but the grid does not satisfy all the data-table heuristic conditions. The client falls back to layout-table rendering, and the tabular relationships between fields are lost: a screen reader announces each field independently with no programmatic association.

Flag a grid as an accessibility issue when any of these are true:

- An editable field has `ShowCaption = false` and the grid does not meet all data-table conditions.
- Fields are arranged so that one field is clearly intended to label or describe another field (tabular data intent), but the grid does not meet all data-table conditions.

Both manifestations have the same root cause: tabular semantics were intended but the heuristic ultimately rendered the grid as a layout table.

## Anti Pattern

A single field that keeps its visible caption is enough to demote an entire would-be data-table grid into a layout table — and silently strip the labels off its sibling captionless fields. Either restructure to meet all three conditions, or restore captions on every editable field.

See sample: [`tabular-intent-requires-data-table-conditions.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/tabular-intent-requires-data-table-conditions.bad.al).

## Examples

- [Bad: tabular-intent-requires-data-table-conditions.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/tabular-intent-requires-data-table-conditions.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
