---
id: guideline/microsoft/knowledge/ui/show-caption-false-allowed-on-non-editable-fields
type: guideline
title: ShowCaption = false on non-editable fields
summary: "When a field is explicitly non-editable (Editable = false), it serves as content rather than as a form field. In that case, ShowCaption = false is acceptable: there is no input control whose label could be lost."
tier: official
language: en
tags:
  - show-caption
  - non-editable
  - content
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:07.421Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2b830bc3559ae0b26699c93907cb66b35e52de63
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-false-allowed-on-non-editable-fields.md
    title: "microsoft/BCQuality: ShowCaption = false on non-editable fields"
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
repo_path: microsoft/knowledge/ui/show-caption-false-allowed-on-non-editable-fields.md
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

# ShowCaption = false on non-editable fields

> When a field is explicitly non-editable (Editable = false), it serves as content rather than as a form field. In that case, ShowCaption = false is acceptable: there is no input control whose label could be lost.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-false-allowed-on-non-editable-fields.md) · microsoft layer · ui · BC all · tier official · derived

## Description

When a field is explicitly non-editable (`Editable = false`), it serves as content rather than as a form field. In that case, `ShowCaption = false` is acceptable: there is no input control whose label could be lost. The combination signals to a reviewer (and to the platform) that the field displays a value standalone — for example a status message or a description that is meaningful on its own.

This exception does **not** extend to dynamically editable fields. A field with `Editable = SomeBooleanExpression` may be editable at runtime and must keep its caption.

## Best Practice

If you want to hide a field's caption, pair `ShowCaption = false` with a literal `Editable = false`. Use this pattern only for content fields that do not act as labels for other fields in the same layout container.

See sample: [`show-caption-false-allowed-on-non-editable-fields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-false-allowed-on-non-editable-fields.good.al).

## Examples

- [Good: show-caption-false-allowed-on-non-editable-fields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-false-allowed-on-non-editable-fields.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
