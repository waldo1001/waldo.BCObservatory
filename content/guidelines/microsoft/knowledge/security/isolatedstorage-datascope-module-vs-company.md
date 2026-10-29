---
id: guideline/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company
type: guideline
title: Pick the right IsolatedStorage DataScope for the secret's lifetime
summary: IsolatedStorage read and write methods take a DataScope parameter that decides which slice of storage the value belongs to. The choice is not a stylistic one — it changes which callers, in which company and under which user, can read the value back.
tier: official
language: en
tags:
  - isolatedstorage
  - datascope
  - module
  - company
  - user
  - scope
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.882Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a91e91f6ec4c6ad3aed3ec08e0843b7e02b77327
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.md
    title: "microsoft/BCQuality: Pick the right IsolatedStorage DataScope for the secret's lifetime"
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
repo_path: microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.md
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
  - DataScope
  - SetEncrypted
---

# Pick the right IsolatedStorage DataScope for the secret's lifetime

> IsolatedStorage read and write methods take a DataScope parameter that decides which slice of storage the value belongs to. The choice is not a stylistic one — it changes which callers, in which company and under which user, can read the value back.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.md) · microsoft layer · security · BC 24.. · tier official · derived

## Description

`IsolatedStorage` read and write methods take a `DataScope` parameter that decides which slice of storage the value belongs to. The choice is not a stylistic one — it changes which callers, in which company and under which user, can read the value back. Two scopes cover the common cases for app-level secrets: `DataScope::Module` stores the value once for the whole extension, isolated to that extension on the tenant — the right scope for app-specific secrets such as a global API key or service account. `DataScope::Company` stores the value per company, so each company on the tenant has its own slot — the right scope for company-specific secrets such as a per-company webhook URL or a per-company integration token. A per-user scope also exists for values that belong to an individual user.

## Best Practice

Choose `Module` when the secret is the same for every company and every user under the extension (a single tenant-wide API key). Choose `Company` when each company has its own integration credentials. Choose the user scope only when the secret is genuinely per-user. Use the same `DataScope` value on `Set`/`SetEncrypted`, `Get`, `Contains`, and `Delete` for the same key — mixing scopes for the same logical secret produces silent "not found" results. See sample: [`isolatedstorage-datascope-module-vs-company.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.good.al).

## Anti Pattern

Defaulting every call to `DataScope::Module` regardless of intent — storing a per-company webhook URL under `Module` means every company on the tenant shares the same URL. Or the inverse: storing a tenant-wide API key under `Company` means each company-switch effectively loses the key. Reviewers should look for cross-method inconsistency (`Set` under `Module`, `Get` under `Company`) and for scope choices that contradict the value's documented lifetime. See sample: [`isolatedstorage-datascope-module-vs-company.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.bad.al).

## Examples

- [Good: isolatedstorage-datascope-module-vs-company.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.good.al)
- [Bad: isolatedstorage-datascope-module-vs-company.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-datascope-module-vs-company.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
