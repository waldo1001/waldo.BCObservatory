---
id: guideline/microsoft/knowledge/ui/show-caption-in-repeater-allowed
type: guideline
title: ShowCaption inside a repeater is harmless
summary: Fields inside a repeater() control are labeled by their column headers, not by their own captions. ShowCaption = false on a field inside a repeater is harmless and should not be flagged.
tier: official
language: en
tags:
  - show-caption
  - repeater
  - column-header
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:07.550Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f81762f2a7309f0e314d1e31fe0aa9e058a1fa90
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-repeater-allowed.md
    title: "microsoft/BCQuality: ShowCaption inside a repeater is harmless"
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
repo_path: microsoft/knowledge/ui/show-caption-in-repeater-allowed.md
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

# ShowCaption inside a repeater is harmless

> Fields inside a repeater() control are labeled by their column headers, not by their own captions. ShowCaption = false on a field inside a repeater is harmless and should not be flagged.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-repeater-allowed.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Fields inside a `repeater()` control are labeled by their **column headers**, not by their own captions. `ShowCaption = false` on a field inside a repeater is harmless and should not be flagged.

This is the explicit behaviour of the Business Central client: a repeater renders as a tabular list whose column headings come from each field's `Caption` (or source-table caption), and individual row cells do not announce a per-cell caption.

## Best Practice

Inside a repeater, you may set `ShowCaption = false` on fields without losing accessibility. The column header still provides the label for every cell in that column. Outside a repeater, the rules in `show-caption-on-editable-fields.md` apply.

See sample: [`show-caption-in-repeater-allowed.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-repeater-allowed.good.al).

## Examples

- [Good: show-caption-in-repeater-allowed.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-in-repeater-allowed.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
