---
id: guideline/microsoft/knowledge/performance/use-textbuilder-for-string-concatenation-in-loops
type: guideline
title: Use AL TextBuilder for repeated text mutation
summary: AL TextBuilder is a reference type intended for modifying text without creating a new Text value for each change. Microsoft documents it as the performance-oriented AL primitive for concatenating many strings, including loop-built output.
tier: official
language: en
tags:
  - textbuilder
  - string-concatenation
  - loop
  - append
  - immutable-text
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:23.324Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: abd6acb9e26b7acf367781ca10e4eb2a4d5dbdef
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-textbuilder-for-string-concatenation-in-loops.md
    title: "microsoft/BCQuality: Use AL TextBuilder for repeated text mutation"
    date: "2026-07-14"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/textbuilder/textbuilder-appendline-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/use-textbuilder-for-string-concatenation-in-loops.md
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
examples: 0
identifiers:
  - TextBuilder
  - AppendLine
  - ToText
---

# Use AL TextBuilder for repeated text mutation

> AL TextBuilder is a reference type intended for modifying text without creating a new Text value for each change. Microsoft documents it as the performance-oriented AL primitive for concatenating many strings, including loop-built output.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-textbuilder-for-string-concatenation-in-loops.md) · microsoft layer · performance · BC all · tier official · derived

## Description

AL `TextBuilder` is a reference type intended for modifying text without creating a new `Text` value for each change. Microsoft documents it as the performance-oriented AL primitive for concatenating many strings, including loop-built output. `Append` and `AppendLine` build the value, and `ToText` returns the completed text.

## Best Practice

When a loop repeatedly appends fragments to one result, use a `TextBuilder` local and convert once after the loop. Keep ordinary `Text` expressions for a fixed, small number of fragments; this rule is about repeated mutation, not every concatenation.

## Anti Pattern

Building an unbounded export or message with `Result += Fragment` on every iteration when AL's `TextBuilder` directly represents the operation.

## Names

- [TextBuilder.AppendLine(\[Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/textbuilder/textbuilder-appendline-method) (names AppendLine)

## Changed by

- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
