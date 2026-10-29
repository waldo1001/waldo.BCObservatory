---
id: guideline/microsoft/knowledge/ui/cosmetic-styles-need-no-textual-context
type: guideline
title: Cosmetic styles need no textual context
summary: "A field's Style property controls text formatting. Some style values are purely cosmetic — they change visual appearance but do not convey semantic meaning. Cosmetic styles never require additional context and must not be reported as accessibility findings:"
tier: official
language: en
tags:
  - style
  - cosmetic
  - attention
  - strong
  - subordinate
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.229Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 02d2f1379686c15a6c5e2ce9560413fb8efad859
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/cosmetic-styles-need-no-textual-context.md
    title: "microsoft/BCQuality: Cosmetic styles need no textual context"
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
repo_path: microsoft/knowledge/ui/cosmetic-styles-need-no-textual-context.md
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
  - StandardAccent
  - StrongAccent
  - AttentionAccent
  - StyleExpr
---

# Cosmetic styles need no textual context

> A field's Style property controls text formatting. Some style values are purely cosmetic — they change visual appearance but do not convey semantic meaning. Cosmetic styles never require additional context and must not be reported as accessibility findings:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/cosmetic-styles-need-no-textual-context.md) · microsoft layer · ui · BC all · tier official · derived

## Description

A field's `Style` property controls text formatting. Some style values are purely **cosmetic** — they change visual appearance but do not convey semantic meaning. Cosmetic styles never require additional context and must not be reported as accessibility findings:

- `None`, `Standard`
- `StandardAccent` (Blue)
- `Strong` (Bold), `StrongAccent` (Blue + Bold)
- `Attention` (Red + Italic), `AttentionAccent` (Blue + Italic)
- `Subordinate` (Grey)

This list is exhaustive — every other named style on the platform either falls outside the cosmetic set or is one of the three semantic styles documented in `semantic-styles-need-independent-textual-meaning.md`.

The same rule applies whether the cosmetic style is set via `Style` directly or via a `StyleExpr` Text variable. If the resolved value at runtime is one of the cosmetic styles above, the field is safe.

## Best Practice

Use cosmetic styles freely for visual emphasis. Do not treat the use of `Attention`, `Strong`, or any other cosmetic value as an accessibility issue — the colors and weights are purely presentational and carry no meaning a screen reader needs to convey.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
