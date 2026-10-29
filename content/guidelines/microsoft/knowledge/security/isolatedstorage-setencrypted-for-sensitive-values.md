---
id: guideline/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values
type: guideline
title: Prefer IsolatedStorage.SetEncrypted over Set for sensitive values
summary: "IsolatedStorage exposes two write entry points: Set stores the value as-is, and SetEncrypted stores it encrypted at rest."
tier: official
language: en
tags:
  - isolatedstorage
  - setencrypted
  - encryption
  - secret
  - storage
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.963Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6f221291543ff4761d80411cb208ef661742f7e3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.md
    title: "microsoft/BCQuality: Prefer IsolatedStorage.SetEncrypted over Set for sensitive values"
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
repo_path: microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.md
layer: microsoft
kind: rule
domain: security
bc_version:
  - 24..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - IsolatedStorage
  - SetEncrypted
  - SecretText
  - ApiKey
  - ClientSecret
---

# Prefer IsolatedStorage.SetEncrypted over Set for sensitive values

> IsolatedStorage exposes two write entry points: Set stores the value as-is, and SetEncrypted stores it encrypted at rest.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.md) · microsoft layer · security · BC 24.. · tier official · derived

## Description

`IsolatedStorage` exposes two write entry points: `Set` stores the value as-is, and `SetEncrypted` stores it encrypted at rest. Both are scoped per extension, but only `SetEncrypted` adds the additional protection that the value is not readable from the underlying storage by anything that bypasses the AL `IsolatedStorage` API. The choice between them is by intent: configuration that is not sensitive (a user preference, a default flag) can use `Set`; anything that would harm the tenant if leaked — API keys, tokens, connection strings, OAuth client secrets — uses `SetEncrypted`.

## Best Practice

Use the `SecretText` overloads of `IsolatedStorage.SetEncrypted` and `IsolatedStorage.Get` for values that meet the definition of a secret. Check the optional Boolean result when storage failure needs a controlled error; encrypted values are subject to the documented storage-size limit. See sample: [`isolatedstorage-setencrypted-for-sensitive-values.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.good.al).

## Anti Pattern

`IsolatedStorage.Set('ApiKey', ApiKeyValue, DataScope::Module)` — the key is now sitting in storage unencrypted, and any future incident that exposes the underlying storage exposes the key. Reviewers should flag any `IsolatedStorage.Set` whose key name or surrounding context suggests a secret (`ApiKey`, `Token`, `Password`, `Secret`, `ClientSecret`). See sample: [`isolatedstorage-setencrypted-for-sensitive-values.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.bad.al).

## Examples

- [Good: isolatedstorage-setencrypted-for-sensitive-values.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.good.al)
- [Bad: isolatedstorage-setencrypted-for-sensitive-values.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-setencrypted-for-sensitive-values.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
