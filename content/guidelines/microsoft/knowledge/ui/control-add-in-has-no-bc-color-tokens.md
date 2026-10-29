---
id: guideline/microsoft/knowledge/ui/control-add-in-has-no-bc-color-tokens
type: guideline
title: Control add-ins cannot use BC color tokens or theming
summary: A JavaScript control add-in has no access to Business Central's color tokens or theming system. The BC client will not push theme variables, accent colors, or high-contrast palettes into the add-in's iframe.
tier: official
language: en
tags:
  - control-add-in
  - color-tokens
  - theming
  - high-contrast
  - forced-colors
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.129Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ac396e2da207d4ebc11875577984bf3bea0a4528
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-add-in-has-no-bc-color-tokens.md
    title: "microsoft/BCQuality: Control add-ins cannot use BC color tokens or theming"
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
repo_path: microsoft/knowledge/ui/control-add-in-has-no-bc-color-tokens.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - all
technologies:
  - al
  - javascript
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# Control add-ins cannot use BC color tokens or theming

> A JavaScript control add-in has no access to Business Central's color tokens or theming system. The BC client will not push theme variables, accent colors, or high-contrast palettes into the add-in's iframe.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-add-in-has-no-bc-color-tokens.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A JavaScript control add-in has no access to Business Central's color tokens or theming system. The BC client will not push theme variables, accent colors, or high-contrast palettes into the add-in's iframe. As a result, the add-in must handle Windows contrast themes independently — for example by responding to the `forced-colors` CSS media query or an equivalent mechanism, and by ensuring its own contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text and UI components) against the backgrounds it draws.

## Best Practice

Style control add-ins with explicit colors that are known to meet contrast requirements, and add a `forced-colors` (or equivalent) branch so that Windows high-contrast users see a usable rendering. Do not assume that the add-in inherits BC's theme — verify the rendered output in default, dark, and high-contrast themes.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
