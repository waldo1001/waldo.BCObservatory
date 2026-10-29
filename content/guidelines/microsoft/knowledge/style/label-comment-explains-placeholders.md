---
id: guideline/microsoft/knowledge/style/label-comment-explains-placeholders
type: guideline
title: Document each Label placeholder with the Comment parameter
summary: Label and TextConst strings that contain placeholders (%1, %2, …) need a Comment parameter that names what each placeholder is. Translators do not see the call site, so without the Comment they cannot disambiguate 'Customer %1 not found in %2.'
tier: official
language: en
tags:
  - label
  - comment
  - placeholder
  - strsubstno
  - translation
  - aa0470
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.204Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 63be79e370cf59208c203c531c70aba9a84f95ad
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-comment-explains-placeholders.md
    title: "microsoft/BCQuality: Document each Label placeholder with the Comment parameter"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/style/label-comment-explains-placeholders.md
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
  - TextConst
---

# Document each Label placeholder with the Comment parameter

> Label and TextConst strings that contain placeholders (%1, %2, …) need a Comment parameter that names what each placeholder is. Translators do not see the call site, so without the Comment they cannot disambiguate 'Customer %1 not found in %2.'

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-comment-explains-placeholders.md) · microsoft layer · style · BC all · tier official · derived

## Description

`Label` and `TextConst` strings that contain placeholders (`%1`, `%2`, …) need a `Comment` parameter that names what each placeholder is. Translators do not see the call site, so without the Comment they cannot disambiguate `'Customer %1 not found in %2.'` — is `%2` a location code, a posting date, a company name? The pattern is `Comment = '%1 = <description>, %2 = <description>'`. The Comment is not required when the placeholder meaning is obvious from the surrounding text — `'Customer %1'` is unambiguously a Customer No. — but for any non-trivial label the Comment is a hard requirement.

## Best Practice

Write the Comment in the form `'%1 = Customer No., %2 = Sales Header No.'` — one entry per placeholder, matched by ordinal, named in the vocabulary of the BC domain. When the label is reused across multiple call sites, the Comment names the canonical meaning all call sites must conform to.

See sample: [`label-comment-explains-placeholders.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-comment-explains-placeholders.good.al).

## Anti Pattern

A label with two or more placeholders and no Comment, leaving the translator to guess. Equally bad is a Comment that only restates the placeholders (`'%1 and %2 are values'`) without naming what they are. Both fail in translation: the localized string ends up grammatically or semantically wrong, and the bug surfaces only in a non-English tenant.

See sample: [`label-comment-explains-placeholders.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-comment-explains-placeholders.bad.al).

## Examples

- [Good: label-comment-explains-placeholders.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-comment-explains-placeholders.good.al)
- [Bad: label-comment-explains-placeholders.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/label-comment-explains-placeholders.bad.al)

## Names

- [Record.TestField(Any, TextConst) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method) (names TextConst)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
