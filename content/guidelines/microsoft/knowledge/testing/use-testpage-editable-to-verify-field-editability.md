---
id: guideline/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability
type: guideline
title: Verify field editability with TestPage.Editable(), opened in edit mode
summary: Whether a field can actually be changed is a distinct state from whether it is shown or enabled — Editable() and Enabled() are separate TestField functions.
tier: official
language: en
tags:
  - testpage
  - editable
  - openedit
  - ui-state
  - field-verification
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.522Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f94c792f92da0f4a8abcc27f0cda1639cbb5b832
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.md
    title: "microsoft/BCQuality: Verify field editability with TestPage.Editable(), opened in edit mode"
    date: "2026-09-29"
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
    - change/bcquality/158
repo_path: microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.md
layer: microsoft
kind: rule
domain: testing
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
  - TestField
  - TestPage
---

# Verify field editability with TestPage.Editable(), opened in edit mode

> Whether a field can actually be changed is a distinct state from whether it is shown or enabled — Editable() and Enabled() are separate TestField functions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.md) · microsoft layer · testing · BC all · tier official · derived

## Description

Whether a field can actually be changed is a distinct state from whether it is shown or enabled — `Editable()` and `Enabled()` are separate `TestField` functions. Verifying editability also requires opening the `TestPage` with `OpenEdit()`, not `OpenView()`: `OpenView()` opens the page in view mode, so it does not exercise the field's own conditional editability logic the way an actual edit-mode session does.

## Best Practice

Open the `TestPage` with `OpenEdit()`, navigate to the relevant record, then assert against `TestPageField.Editable()` to verify whether the field can be changed under the given precondition.

See sample: [`use-testpage-editable-to-verify-field-editability.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.good.al).

## Anti Pattern

Asserting `Enabled()` (or checking nothing at all) when the actual claim is about editability, or opening the page with `OpenView()` when the field's editability depends on business logic that only applies in edit mode.

See sample: [`use-testpage-editable-to-verify-field-editability.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.bad.al).

## Examples

- [Good: use-testpage-editable-to-verify-field-editability.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.good.al)
- [Bad: use-testpage-editable-to-verify-field-editability.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-editable-to-verify-field-editability.bad.al)

## Changed by

- [#158 3 AL/BC patterns from CURABIS's internal automated-testing training material](../../../../changes/bcquality/158.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
