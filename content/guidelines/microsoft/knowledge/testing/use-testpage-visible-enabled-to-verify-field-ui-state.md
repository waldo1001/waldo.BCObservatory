---
id: guideline/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state
type: guideline
title: Verify field visibility and enabled state with TestPage.Visible()/.Enabled()
summary: A UI test codeunit does not need to inspect table or page properties indirectly to confirm a field is shown or enabled under given conditions.
tier: official
language: en
tags:
  - testpage
  - visible
  - enabled
  - ui-state
  - headless-test
  - field-verification
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.571Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ff6bd869dddf89305b76ed4e73be58510925fad2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.md
    title: "microsoft/BCQuality: Verify field visibility and enabled state with TestPage.Visible()/.Enabled()"
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
repo_path: microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.md
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
  - TestPage
---

# Verify field visibility and enabled state with TestPage.Visible()/.Enabled()

> A UI test codeunit does not need to inspect table or page properties indirectly to confirm a field is shown or enabled under given conditions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.md) · microsoft layer · testing · BC all · tier official · derived

## Description

A UI test codeunit does not need to inspect table or page properties indirectly to confirm a field is shown or enabled under given conditions. The `TestPage` object exposes a `Visible()` and an `Enabled()` function on each field, reflecting the page's actual rendered state, callable directly from a `[Test]` procedure. `Enabled()` and `Editable()` are distinct states — this article covers visibility/enabled state specifically; see `use-testpage-editable-to-verify-field-editability.md` for verifying whether a field can actually be changed.

## Best Practice

Open the `TestPage`, navigate to the relevant record if needed, then assert against `TestPageField.Visible()` and `TestPageField.Enabled()` to verify the field's shown/enabled state, rather than checking an unrelated table/page property or skipping the check.

See sample: [`use-testpage-visible-enabled-to-verify-field-ui-state.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.good.al).

## Anti Pattern

A test that opens the `TestPage` but never asserts against `Visible()`/`Enabled()` on the field in question — confirming only that the page opens, not that the field behaves as expected.

See sample: [`use-testpage-visible-enabled-to-verify-field-ui-state.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.bad.al).

## Examples

- [Good: use-testpage-visible-enabled-to-verify-field-ui-state.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.good.al)
- [Bad: use-testpage-visible-enabled-to-verify-field-ui-state.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-testpage-visible-enabled-to-verify-field-ui-state.bad.al)

## Changed by

- [#158 3 AL/BC patterns from CURABIS's internal automated-testing training material](../../../../changes/bcquality/158.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
