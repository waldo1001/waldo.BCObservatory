---
id: guideline/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext
type: guideline
title: "On-premises only: protect unavoidable SecretText.Unwrap calls"
summary: SecretText.Unwrap() is supported only for Business Central on-premises and exists for compatibility. It converts a protected value to plain Text, where debugger redaction no longer applies.
tier: official
language: en
tags:
  - nondebuggable
  - attribute
  - secrettext
  - unwrap
  - debugger
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:52.368Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ae973a10e9b86b044a4ccc1907d11fb8fbe5c02c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.md
    title: "microsoft/BCQuality: On-premises only: protect unavoidable SecretText.Unwrap calls"
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
    - change/bcquality/92
repo_path: microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.md
layer: microsoft
kind: rule
domain: security
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SecretText
---

# On-premises only: protect unavoidable SecretText.Unwrap calls

> SecretText.Unwrap() is supported only for Business Central on-premises and exists for compatibility. It converts a protected value to plain Text, where debugger redaction no longer applies.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.md) · microsoft layer · security · BC 23.. · tier official · derived

## Description

`SecretText.Unwrap()` is supported only for Business Central on-premises and exists for compatibility. It converts a protected value to plain `Text`, where debugger redaction no longer applies. `[NonDebuggable]` prevents the debugger from inspecting a procedure's parameters and locals, but it does not make the resulting `Text` safe to return, log, or pass through debuggable code.

## Best Practice

In SaaS, keep the value as `SecretText` and use secret-aware APIs instead of unwrapping. For an unavoidable on-premises legacy API that accepts only `Text`, keep the plain-text path as short as possible and mark every procedure in that path `[NonDebuggable]`. Do not return the unwrapped value. See sample: [`nondebuggable-required-when-unwrapping-secrettext.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.good.al).

## Anti Pattern

Calling `Unwrap()` in cloud-targeted code, or calling it in an on-premises procedure that is debuggable or returns the resulting `Text`. Both defeat the protection that `SecretText` provides. See sample: [`nondebuggable-required-when-unwrapping-secrettext.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.bad.al).

## Examples

- [Good: nondebuggable-required-when-unwrapping-secrettext.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.good.al)
- [Bad: nondebuggable-required-when-unwrapping-secrettext.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/nondebuggable-required-when-unwrapping-secrettext.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
