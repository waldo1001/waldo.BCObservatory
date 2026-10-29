---
id: guideline/microsoft/knowledge/security/secrettext-for-credentials
type: guideline
title: Use SecretText for credentials, API keys, and tokens
summary: SecretText is the AL data type for values that should never appear in a debugger session, in a log, or in a variable watch.
tier: official
language: en
tags:
  - secrettext
  - credentials
  - api-key
  - token
  - debugger
  - unwrap
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:57.782Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6f5d368fc4daf4ad88d1f1cf9e51282557c3c5d6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-for-credentials.md
    title: "microsoft/BCQuality: Use SecretText for credentials, API keys, and tokens"
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
    - change/bcquality/92
repo_path: microsoft/knowledge/security/secrettext-for-credentials.md
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
  - ApiKey
  - ClientSecret
---

# Use SecretText for credentials, API keys, and tokens

> SecretText is the AL data type for values that should never appear in a debugger session, in a log, or in a variable watch.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-for-credentials.md) · microsoft layer · security · BC 23.. · tier official · derived

## Description

`SecretText` is the AL data type for values that should never appear in a debugger session, in a log, or in a variable watch. The compiler enforces two guarantees: a string literal cannot be assigned directly to a `SecretText` variable, and a `SecretText` cannot be assigned back to a `Text` or `Code` without an explicit `Unwrap` call. Together these prevent the two common accidents — embedding a secret in source code, and quietly converting a secret to plain text where the debugger can read it. Use `SecretText` for parameters, return values, and local variables that carry API keys, tokens, passwords, connection strings, or any other value an attacker with debugger access should not see.

## Best Practice

Declare credential-carrying parameters and variables as `SecretText` from the call site that retrieves the secret all the way to the call site that consumes it (typically an HTTP header or URI). Never round-trip through `Text`. On BC 24 and later, use the `SecretText` overload of `IsolatedStorage.Get` when retrieving stored secrets. See sample: [`secrettext-for-credentials.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-for-credentials.good.al).

## Anti Pattern

Holding a credential in a `Text` variable (`BearerToken: Text`) makes it visible in the debugger and in any error that prints the variable, and the compiler offers no help because the type was wrong from the start. Reviewers should flag any local or parameter named like a secret (`ApiKey`, `Token`, `Password`, `ClientSecret`) whose type is `Text` or `Code`. When the same value is visibly sent through an HTTP URI, header, or body, `secrettext-with-httpclient.md` is the more specific primary rule. See sample: [`secrettext-for-credentials.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-for-credentials.bad.al).

## Examples

- [Good: secrettext-for-credentials.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-for-credentials.good.al)
- [Bad: secrettext-for-credentials.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-for-credentials.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
