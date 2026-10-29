---
id: guideline/microsoft/knowledge/ui/group-labeled-first-child-exception
type: guideline
title: Group-labeled first child exception
summary: "ShowCaption = false is acceptable on an editable field only when all of the following conditions are met:"
tier: official
language: en
tags:
  - show-caption
  - group
  - first-child
  - multiline
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:06.799Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1acdb3656818c410748679fe3f8aa92cd4b264f0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-labeled-first-child-exception.md
    title: "microsoft/BCQuality: Group-labeled first child exception"
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
repo_path: microsoft/knowledge/ui/group-labeled-first-child-exception.md
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

# Group-labeled first child exception

> ShowCaption = false is acceptable on an editable field only when all of the following conditions are met:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-labeled-first-child-exception.md) · microsoft layer · ui · BC all · tier official · derived

## Description

`ShowCaption = false` is acceptable on an editable field only when **all** of the following conditions are met:

1. The control is the **first visible field** in its parent group.
2. The field has `ShowCaption = false`.
3. The parent group has a visible caption: `ShowCaption` is true (the default) **and** the group has a non-empty `Caption` value.

When these three conditions hold, the group caption becomes the accessible label for the field. This works regardless of whether the field is multiline. The presence of `InstructionalText` on the field is irrelevant to this check.

## Best Practice

Do not second-guess this exception. If the three conditions are met, the pattern is acceptable — even if the group caption seems generic (e.g. "General Information") or does not exactly match the field name.

See sample: [`group-labeled-first-child-exception.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-labeled-first-child-exception.good.al).

## Anti Pattern

If the parent group has `ShowCaption = false` or no `Caption`, the first-child exception does not apply: the field has no accessible label anywhere.

See sample: [`group-labeled-first-child-exception.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-labeled-first-child-exception.bad.al).

## Examples

- [Good: group-labeled-first-child-exception.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-labeled-first-child-exception.good.al)
- [Bad: group-labeled-first-child-exception.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/group-labeled-first-child-exception.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
