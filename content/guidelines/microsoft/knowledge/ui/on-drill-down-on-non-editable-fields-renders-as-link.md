---
id: guideline/microsoft/knowledge/ui/on-drill-down-on-non-editable-fields-renders-as-link
type: guideline
title: OnDrillDown on non-editable fields renders as a link
summary: The Business Central client renders non-editable fields that have an OnDrillDown trigger as HTML <a> (anchor) elements. Screen readers correctly announce these as links. OnDrillDown on a non-editable field is therefore not an accessibility issue — the platform handles the semantics.
tier: official
language: en
tags:
  - on-drill-down
  - link
  - non-editable
  - accessibility
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.712Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c27503d49608fe3cf5bc13ed40d7b464df739f11
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/on-drill-down-on-non-editable-fields-renders-as-link.md
    title: "microsoft/BCQuality: OnDrillDown on non-editable fields renders as a link"
    date: "2026-05-21"
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
  changes: []
repo_path: microsoft/knowledge/ui/on-drill-down-on-non-editable-fields-renders-as-link.md
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
examples: 0
identifiers:
  - OnDrillDown
---

# OnDrillDown on non-editable fields renders as a link

> The Business Central client renders non-editable fields that have an OnDrillDown trigger as HTML <a> (anchor) elements. Screen readers correctly announce these as links. OnDrillDown on a non-editable field is therefore not an accessibility issue — the platform handles the semantics.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/on-drill-down-on-non-editable-fields-renders-as-link.md) · microsoft layer · ui · BC all · tier official · derived

## Description

The Business Central client renders non-editable fields that have an `OnDrillDown` trigger as HTML `<a>` (anchor) elements. Screen readers correctly announce these as links. `OnDrillDown` on a non-editable field is therefore **not** an accessibility issue — the platform handles the semantics.

Do not flag `OnDrillDown` usage as an accessibility issue. The combination of `Editable = false` and `OnDrillDown` is the standard BC pattern for navigable, screen-reader-friendly value cells in list and card pages.

## Best Practice

Use `OnDrillDown` freely on non-editable fields when you want users to navigate from a value to a related record or detail page. No additional ARIA attributes or accessible-name workarounds are required.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
