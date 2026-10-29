---
id: guideline/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility
type: guideline
title: A `DropDown` field remains hidden when its lookup-page control is hidden
summary: A tableextension can append a field to the DropDown field group with addlast, but the client still omits that field when its control on the underlying lookup page has Visible = false. Changing only the table field group therefore compiles while producing no visible UI change.
tier: official
language: en
tags:
  - fieldgroup
  - dropdown
  - addlast
  - lookup-page
  - visible
  - tableextension
  - pageextension
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:03.246Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: afa2c34d0fc4caac566e1c15b8145e0beb1b7e47
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.md
    title: "microsoft/BCQuality: A `DropDown` field remains hidden when its lookup-page control is hidden"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.md
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
  - DropDown
---

# A `DropDown` field remains hidden when its lookup-page control is hidden

> A tableextension can append a field to the DropDown field group with addlast, but the client still omits that field when its control on the underlying lookup page has Visible = false. Changing only the table field group therefore compiles while producing no visible UI change.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A tableextension can append a field to the `DropDown` field group with `addlast`, but the client still omits that field when its control on the underlying lookup page has `Visible = false`. Changing only the table field group therefore compiles while producing no visible UI change. The field-group name is case-sensitive and must be written as `DropDown`.

## Best Practice

When adding a hidden field to a `DropDown` field group, also extend the page used for the lookup and make that field control visible. Verify the actual lookup page rather than assuming the table definition alone controls the drop-down.

See sample: [`dropdown-fieldgroup-respects-lookup-page-visibility.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.good.al).

## Anti Pattern

Adding the field with `addlast(DropDown; ...)` while leaving its lookup-page control hidden, then expecting the field to appear in the drop-down.

See sample: [`dropdown-fieldgroup-respects-lookup-page-visibility.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.bad.al).

## Reference

[Add a new FieldGroup to an existing table](https://learn.microsoft.com/en-us/training/modules/extend-modify-existing-table/add-field-group)

## Examples

- [Good: dropdown-fieldgroup-respects-lookup-page-visibility.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.good.al)
- [Bad: dropdown-fieldgroup-respects-lookup-page-visibility.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/dropdown-fieldgroup-respects-lookup-page-visibility.bad.al)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
