---
id: guideline/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error
type: guideline
title: Pass a Label directly as the first Error argument
summary: Error method trace telemetry includes the AL error string only when the first Error argument is a Label or TextConst. Wrapping a label in StrSubstNo, or concatenating labels or text, produces a dynamic Text first argument.
tier: official
language: en
tags:
  - strsubstno
  - error
  - telemetry
  - pii
  - prebuild
  - text-variable
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:44.423Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f4a25f3a9fbcba6154c053f0c0c311816cb5fbd6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.md
    title: "microsoft/BCQuality: Pass a Label directly as the first Error argument"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method
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
    - change/bcquality/92
repo_path: microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - 20..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - TextConst
  - StrSubstNo
---

# Pass a Label directly as the first Error argument

> Error method trace telemetry includes the AL error string only when the first Error argument is a Label or TextConst. Wrapping a label in StrSubstNo, or concatenating labels or text, produces a dynamic Text first argument.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.md) · microsoft layer · privacy · BC 20.. · tier official · derived

## Description

Error method trace telemetry includes the AL error string only when the first `Error` argument is a `Label` or `TextConst`. Wrapping a label in `StrSubstNo`, or concatenating labels or text, produces a dynamic `Text` first argument. In that case the actual string is not emitted as the telemetry message; the platform emits its generic guidance instead. CodeCop AA0231 flags both shapes because the label identity and data-classification context are lost.

## Best Practice

Declare the complete message as a `Label` or `TextConst` and pass it directly to `Error`, followed by substitution values. The client receives the formatted message while telemetry retains the static message template without using the dynamic values as its message. Independently review whether each substitution value is appropriate to show to the current user.

See sample: [`avoid-strsubstno-prebuild-before-error.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.good.al).

## Anti Pattern

`Error(StrSubstNo(CustomerInvalidErr, Customer."No."))` and `Error(HeaderErr + DetailErr)` both make the first argument dynamic. They reduce error telemetry quality; they do not cause that composed string to be logged verbatim as the telemetry message.

See sample: [`avoid-strsubstno-prebuild-before-error.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.bad.al).

## Examples

- [Good: avoid-strsubstno-prebuild-before-error.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.good.al)
- [Bad: avoid-strsubstno-prebuild-before-error.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/avoid-strsubstno-prebuild-before-error.bad.al)

## Names

- [Record.TestField(Any, TextConst) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method) (names TextConst)
- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
