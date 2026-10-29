---
id: guideline/microsoft/knowledge/ui/show-caption-on-editable-fields
type: guideline
title: ShowCaption on editable fields
summary: ShowCaption must remain true (the default) on editable fields unless the field matches one of the officially supported "magic patterns". Fields are editable by default.
tier: official
language: en
tags:
  - show-caption
  - editable
  - accessibility
  - label
  - instructional-text
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:07.602Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 604ace04c49db61a720ac0e8663b4eaad288bfed
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-on-editable-fields.md
    title: "microsoft/BCQuality: ShowCaption on editable fields"
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
repo_path: microsoft/knowledge/ui/show-caption-on-editable-fields.md
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
examples: 2
identifiers:
  - ShowCaption
  - InstructionalText
---

# ShowCaption on editable fields

> ShowCaption must remain true (the default) on editable fields unless the field matches one of the officially supported "magic patterns". Fields are editable by default.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-on-editable-fields.md) · microsoft layer · ui · BC all · tier official · derived

## Description

`ShowCaption` must remain true (the default) on editable fields unless the field matches one of the officially supported "magic patterns". Fields are editable by default. Setting `ShowCaption = false` on an editable field is almost always an accessibility bug: without a visible caption, screen reader users lose the label that identifies the field, and sighted users lose a visual cue.

A field whose `Editable` property is a Boolean expression (e.g. `Editable = IsEditable`) is dynamically editable and must be treated as a form field — `ShowCaption = false` on such a field is also a violation.

## Best Practice

Leave `ShowCaption` at its default on editable fields. If a caption would be visually redundant, rely on one of the documented magic patterns (group-labeled first child, repeater column, PromptDialog prompt input) rather than removing the caption.

See sample: [`show-caption-on-editable-fields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-on-editable-fields.good.al).

## Anti Pattern

The `InstructionalText` property on a field renders as HTML placeholder text and is **not** a substitute for a caption — it disappears once the user types and is not reliably announced by screen readers.

See sample: [`show-caption-on-editable-fields.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-on-editable-fields.bad.al).

## Examples

- [Good: show-caption-on-editable-fields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-on-editable-fields.good.al)
- [Bad: show-caption-on-editable-fields.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/show-caption-on-editable-fields.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
