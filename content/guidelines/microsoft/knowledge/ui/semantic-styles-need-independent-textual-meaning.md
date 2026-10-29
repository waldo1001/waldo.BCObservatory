---
id: guideline/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning
type: guideline
title: Semantic styles need independent textual meaning
summary: "Three Style values carry semantic meaning through color and must be backed by text that conveys the same meaning:"
tier: official
language: en
tags:
  - style
  - favorable
  - unfavorable
  - ambiguous
  - color
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:06.742Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: de03248e778f60deb5c3d56d5496c1b6266299d2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.md
    title: "microsoft/BCQuality: Semantic styles need independent textual meaning"
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
repo_path: microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.md
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
identifiers: []
---

# Semantic styles need independent textual meaning

> Three Style values carry semantic meaning through color and must be backed by text that conveys the same meaning:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Three `Style` values carry semantic meaning through color and must be backed by text that conveys the same meaning:

- `Favorable` (Bold + Green) — implies a positive outcome.
- `Unfavorable` (Bold + Italic + Red) — implies a negative outcome.
- `Ambiguous` (Yellow) — implies an uncertain or mixed outcome.

For accessibility, assume the style is completely invisible to the user. The semantic meaning must be independently determinable from at least one of:

1. The **field caption** matches the semantic meaning (e.g. caption "Error" with `Style = Unfavorable`, or "Profit" with `Style = Favorable`).
2. The **field value** communicates the meaning (e.g. value "Success!" with Favorable, a negative number with Unfavorable).
3. An **adjacent field** provides a textual representation of the semantic meaning (e.g. a "Status" column reads "High" / "Medium" / "Low" alongside a percentage field).

The rule applies equally whether `Style` is set to a literal value or to a variable that evaluates to a semantic style at runtime.

## Best Practice

When you reach for `Favorable`, `Unfavorable`, or `Ambiguous`, verify that the caption, value, or an adjacent column already conveys the same meaning. See sample: [`semantic-styles-need-independent-textual-meaning.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.good.al).

## Anti Pattern

Applying a semantic style for purely cosmetic emphasis (e.g. green company name for aesthetics), or using semantic colors where only the color reveals the threshold (e.g. confidence percentages with no qualitative label). See sample: [`semantic-styles-need-independent-textual-meaning.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.bad.al).

## Examples

- [Good: semantic-styles-need-independent-textual-meaning.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.good.al)
- [Bad: semantic-styles-need-independent-textual-meaning.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/semantic-styles-need-independent-textual-meaning.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
