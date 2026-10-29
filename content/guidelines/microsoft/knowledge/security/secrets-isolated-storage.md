---
id: guideline/microsoft/knowledge/security/secrets-isolated-storage
type: guideline
title: A secret belongs in IsolatedStorage, never in a table field
summary: API keys, OAuth tokens, client secrets, and connection strings must not be stored in an ordinary table Text field — not even on a hidden setup table.
tier: official
language: en
tags:
  - isolatedstorage
  - secrets
  - api-key
  - oauth-token
  - connection-string
  - table-field
  - credentials
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:52.735Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: feb3c1c27cf9a088aa2892b20b013a2435bca2e5
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrets-isolated-storage.md
    title: "microsoft/BCQuality: A secret belongs in IsolatedStorage, never in a table field"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
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
    - change/bcquality/105
repo_path: microsoft/knowledge/security/secrets-isolated-storage.md
layer: microsoft
kind: rule
domain: security
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
  - DataClassification
  - IsolatedStorage
  - SetEncrypted
  - SecretText
  - DataScope
---

# A secret belongs in IsolatedStorage, never in a table field

> API keys, OAuth tokens, client secrets, and connection strings must not be stored in an ordinary table Text field — not even on a hidden setup table.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrets-isolated-storage.md) · microsoft layer · security · BC all · tier official · derived

## Description

API keys, OAuth tokens, client secrets, and connection strings must not be stored in an ordinary table `Text` field — not even on a hidden setup table. A regular field is exposed through record reads, page display, RapidStart and Excel export, report datasets, and surfaces in `DataClassification` review; anyone with table permission can read it. The correct home is `IsolatedStorage`, which is invisible to database queries, API pages, and configuration packages. The storage-*location* decision is the rule here; how to scope and encrypt the value once it is in IsolatedStorage is covered separately.

## Best Practice

Persist every credential in `IsolatedStorage`, write it at the point of capture, and read it only when needed. Prefer `SetEncrypted` when the value fits its documented length limit. On BC24 and later, carry the value through the `SecretText` overloads; on earlier releases, keep any required `Text` handling inside a `[NonDebuggable]` boundary. Choose the `DataScope` that matches the credential's lifetime. See `isolatedstorage-datascope-module-vs-company`, `isolatedstorage-setencrypted-for-sensitive-values`, and `secrettext-for-credentials` for those separate concerns.

See sample: [`secrets-isolated-storage.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrets-isolated-storage.good.al).

## Anti Pattern

A "Setup" or "Connection" table carrying a `Text` field named `API Key`, `Password`, or `Client Secret`. The value is now readable by any object with table permission, ships in RapidStart packages and Excel exports, and appears in record snapshots — a credential disclosure that no amount of encryption-in-transit elsewhere makes up for. Reviewer signal: a secret-shaped field declared on a table instead of an `IsolatedStorage` call.

See sample: [`secrets-isolated-storage.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrets-isolated-storage.bad.al).

## Examples

- [Good: secrets-isolated-storage.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrets-isolated-storage.good.al)
- [Bad: secrets-isolated-storage.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrets-isolated-storage.bad.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
