---
id: guideline/microsoft/knowledge/style/caption-required-on-page-fields
type: guideline
title: Page fields can inherit their source table field's `Caption`
summary: A page field bound to a table field inherits the source field's Caption unless the page overrides it. An inherited caption is valid, user-facing, and translatable; omitting a page-level Caption does not mean the control displays an internal identifier or loses translations.
tier: official
language: en
tags:
  - caption
  - page-field
  - source-field
  - inheritance
  - aa0225
  - aa0226
  - codecop
  - captionclass
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.819Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6381c4c4350d5d36bc973dc15ac1c161778ba3f6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/caption-required-on-page-fields.md
    title: "microsoft/BCQuality: Page fields can inherit their source table field's `Caption`"
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
    - change/bcquality/160
repo_path: microsoft/knowledge/style/caption-required-on-page-fields.md
layer: microsoft
kind: rule
domain: style
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
  - CaptionClass
  - ToolTip
---

# Page fields can inherit their source table field's `Caption`

> A page field bound to a table field inherits the source field's Caption unless the page overrides it. An inherited caption is valid, user-facing, and translatable; omitting a page-level Caption does not mean the control displays an internal identifier or loses translations.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/caption-required-on-page-fields.md) · microsoft layer · style · BC all · tier official · derived

## Description

A page field bound to a table field inherits the source field's `Caption` unless the page overrides it. An inherited caption is valid, user-facing, and translatable; omitting a page-level `Caption` does not mean the control displays an internal identifier or loses translations. CodeCop AA0225/AA0226 concern missing or empty captions, not a requirement to duplicate a caption already supplied by the source table field.

Redundant page-level captions compile successfully, so compiler-error recovery does not prevent an agent from adding them. This guidance prevents that false positive rather than replacing analyzer diagnostics.

Controls bound to variables or expressions cannot rely on table-field caption inheritance. For user-facing fields that need a label, supply a `Caption` or a `CaptionClass` that resolves to the intended caption. API pages are not human-facing UI; do not apply this UI-label guidance to their API contract names.

## Best Practice

Define the shared caption on the table field and let bound page fields inherit it. Add a page-level `Caption` only when there is no suitable inherited caption or the page genuinely needs different wording. Keep a valid `CaptionClass` rather than adding a redundant literal caption.

Before reporting a missing caption, inspect the binding and source field, including dependency symbols when needed. If the source definition is unavailable, do not treat an omitted page property as proof that the caption is missing. Caption and tooltip requirements are separate: do not add a `ToolTip` just because a caption is being reviewed; see [tooltip inheritance guidance](tooltip-required-on-page-fields.md).

See sample: [`caption-required-on-page-fields.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/caption-required-on-page-fields.good.al). Caption inheritance applies across BC versions; the sample uses BC24/runtime 13.0 or later to also define tooltips on its table fields.

## Anti Pattern

A user-facing field that needs a label but has no non-empty explicit or inherited caption and no resolving `CaptionClass` has a genuine labeling gap. This includes `Caption = '';` when no `CaptionClass` supplies the label. A variable name alone is not a translatable caption.

The opposite review defect is flagging a bound field solely because it omits a page-level `Caption`, or inserting a copy of the table field's caption to satisfy AA0225/AA0226. That adds redundant text and prevents subsequent table-caption changes from flowing through to the page.

See sample: [`caption-required-on-page-fields.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/caption-required-on-page-fields.bad.al).

## References

[Caption property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-caption-property) and [ToolTip property remarks documenting inheritance of both properties](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-tooltip-property).

## Examples

- [Good: caption-required-on-page-fields.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/caption-required-on-page-fields.good.al)
- [Bad: caption-required-on-page-fields.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/caption-required-on-page-fields.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#160 Clarify page field caption and tooltip inheritance](../../../../changes/bcquality/160.md), 2026-09-07

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
