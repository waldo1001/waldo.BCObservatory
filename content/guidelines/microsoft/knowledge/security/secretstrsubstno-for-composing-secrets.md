---
id: guideline/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets
type: guideline
title: Use SecretStrSubstNo to compose strings that contain secrets
summary: SecretStrSubstNo is the secret-preserving counterpart of StrSubstNo. It inserts SecretText arguments into %1, %2, and similar placeholders and returns SecretText without materializing the result as plain text.
tier: official
language: en
tags:
  - secretstrsubstno
  - secrettext
  - strsubstno
  - format
  - compose
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:57.740Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 988d2a68ca3e00b1f74216979f4d793659a5df01
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.md
    title: "microsoft/BCQuality: Use SecretStrSubstNo to compose strings that contain secrets"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/secrettext/secrettext-secretstrsubstno-method
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
    - change/bcquality/92
repo_path: microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.md
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
  - SecretStrSubstNo
  - StrSubstNo
  - SecretText
---

# Use SecretStrSubstNo to compose strings that contain secrets

> SecretStrSubstNo is the secret-preserving counterpart of StrSubstNo. It inserts SecretText arguments into %1, %2, and similar placeholders and returns SecretText without materializing the result as plain text.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.md) · microsoft layer · security · BC 23.. · tier official · derived

## Description

`SecretStrSubstNo` is the secret-preserving counterpart of `StrSubstNo`. It inserts `SecretText` arguments into `%1`, `%2`, and similar placeholders and returns `SecretText` without materializing the result as plain text. It is the right tool for values such as a `Token %1` authorization header or a URI with an API key placeholder.

## Best Practice

Compose every secret-bearing string through `SecretStrSubstNo`, ensure the format contains a placeholder for each secret, and keep the result as `SecretText`. Pass it to `HttpRequestMessage.SetSecretRequestUri`, `HttpHeaders.Add`, or `HttpContent.WriteFrom`. See sample: [`secretstrsubstno-for-composing-secrets.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.good.al).

## Anti Pattern

Keeping a credential in `Text` and inserting it with `StrSubstNo`, or calling `SecretStrSubstNo` with a format that has no placeholder for the secret. The first exposes the value as plain text; the second silently omits it. See sample: [`secretstrsubstno-for-composing-secrets.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.bad.al).

## Examples

- [Good: secretstrsubstno-for-composing-secrets.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.good.al)
- [Bad: secretstrsubstno-for-composing-secrets.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secretstrsubstno-for-composing-secrets.bad.al)

## Names

- [SecretText.SecretStrSubstNo(Text \[, SecretText,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/secrettext/secrettext-secretstrsubstno-method) (names SecretStrSubstNo)
- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
