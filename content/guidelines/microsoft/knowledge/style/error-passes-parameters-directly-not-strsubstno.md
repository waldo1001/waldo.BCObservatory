---
id: guideline/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno
type: guideline
title: Pass parameters directly to `Error()`, do not wrap with `StrSubstNo`
summary: Error() accepts a format string and a variable number of arguments — Error(SomeLabelErr, Arg1, Arg2). The platform performs the substitution itself, which is the path the translation pipeline understands.
tier: official
language: en
tags:
  - error
  - strsubstno
  - label
  - parameters
  - concatenation
  - aa0231
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.129Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0276192953ff2dd967e6761eb48d1499abd9c58e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.md
    title: "microsoft/BCQuality: Pass parameters directly to `Error()`, do not wrap with `StrSubstNo`"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.md
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
  - StrSubstNo
  - StrMenu
---

# Pass parameters directly to `Error()`, do not wrap with `StrSubstNo`

> Error() accepts a format string and a variable number of arguments — Error(SomeLabelErr, Arg1, Arg2). The platform performs the substitution itself, which is the path the translation pipeline understands.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.md) · microsoft layer · style · BC all · tier official · derived

## Description

`Error()` accepts a format string and a variable number of arguments — `Error(SomeLabelErr, Arg1, Arg2)`. The platform performs the substitution itself, which is the path the translation pipeline understands. Wrapping the same call as `Error(StrSubstNo(SomeLabelErr, Arg1, Arg2))` hides the placeholders from the platform and removes the format-string identity from the call-site, so analyzers cannot match the call to its label and translators lose the link between the formatted message and its template. The corresponding anti-pattern for hardcoded strings — `Error('Customer ' + CustomerNo + ' not found')` — is even worse: it builds an untranslatable, unanalyzable string at runtime.

## Best Practice

Declare a `Label` with the `Err` suffix and the appropriate `Comment` for placeholders, then call `Error(YourErr, arg1, arg2)`. The same rule applies to `Message`, `Confirm`, and other UI primitives: format string in, parameters as separate arguments, no `StrSubstNo` wrapper at the call site, no string concatenation. An `Error('')` (empty message) is acceptable when the calling code expects another layer to emit the actual diagnostic.

See sample: [`error-passes-parameters-directly-not-strsubstno.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.good.al).

## Anti Pattern

`Error(StrSubstNo(CustomerNotFoundErr, CustomerNo))` and `Error(CustomerNotFoundErr + ': ' + CustomerNo)` both defeat the translation and analysis machinery. Reviewers should treat `StrSubstNo` appearing as an argument to `Error`, `Message`, `Confirm`, or `StrMenu` as an unconditional signal to rewrite.

See sample: [`error-passes-parameters-directly-not-strsubstno.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.bad.al).

## Examples

- [Good: error-passes-parameters-directly-not-strsubstno.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.good.al)
- [Bad: error-passes-parameters-directly-not-strsubstno.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/error-passes-parameters-directly-not-strsubstno.bad.al)

## Names

- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)
- [Dialog.StrMenu(Text \[, Integer\] \[, Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method) (names StrMenu)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
