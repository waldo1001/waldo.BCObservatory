---
id: guideline/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in
type: guideline
title: Hidden page FlowFields still calculate unless visible-only calculation is enabled
summary: By default, a FlowField used directly as a page control's source is calculated when the page loads even when Visible = false or its visibility expression evaluates to false. The hidden control can therefore issue an aggregate query that no user sees.
tier: official
language: en
tags:
  - flowfield
  - visible
  - page-control
  - calculate-only-visible-flowfields
  - feature-management
  - hidden-field
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.222Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7db17d34bb4f46f94ea7b84691c85cb8b26d4192
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.md
    title: "microsoft/BCQuality: Hidden page FlowFields still calculate unless visible-only calculation is enabled"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Hidden page FlowFields still calculate unless visible-only calculation is enabled

> By default, a FlowField used directly as a page control's source is calculated when the page loads even when Visible = false or its visibility expression evaluates to false. The hidden control can therefore issue an aggregate query that no user sees.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.md) · microsoft layer · performance · BC all · tier official · derived

## Description

By default, a FlowField used directly as a page control's source is calculated when the page loads even when `Visible = false` or its visibility expression evaluates to false. The hidden control can therefore issue an aggregate query that no user sees. Business Central 26 introduced the **Calculate only visible FlowFields** feature-management option; only environments with that option enabled skip calculation for controls that are not visible.

## Best Practice

On BC 26 and later, enable and verify the visible-only FlowField feature before relying on `Visible` to suppress calculation. When the target environment does not guarantee that option, avoid binding an expensive FlowField directly to a usually-hidden control: calculate it only in the branch that displays it and bind the page control to a variable. Do not flag a hidden FlowField when the v26 feature is known to be enabled or the FlowField is cheap and intentionally preloaded.

See sample: [`hidden-flowfields-still-calculate-before-bc26-opt-in.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.good.al).

## Anti Pattern

Adding a costly Sum or Lookup FlowField to a page with `Visible = SomeRareMode` and assuming the hidden state prevents its query on all supported versions. The review signal is the direct FlowField source plus conditional or false visibility, not visibility alone.

See sample: [`hidden-flowfields-still-calculate-before-bc26-opt-in.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.bad.al).

## Examples

- [Good: hidden-flowfields-still-calculate-before-bc26-opt-in.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.good.al)
- [Bad: hidden-flowfields-still-calculate-before-bc26-opt-in.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/hidden-flowfields-still-calculate-before-bc26-opt-in.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
