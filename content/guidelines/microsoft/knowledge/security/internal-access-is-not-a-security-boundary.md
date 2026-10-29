---
id: guideline/microsoft/knowledge/security/internal-access-is-not-a-security-boundary
type: guideline
title: Access Internal is API hygiene, not an authorization boundary
summary: Access = Internal controls compile-time symbol visibility. It does not prevent runtime access through mechanisms such as RecordRef, TransferFields, or Codeunit.Run, and internalsVisibleTo deliberately grants compile-time access to named companion apps.
tier: official
language: en
tags:
  - access
  - internal
  - internalsvisibleto
  - recordref
  - codeunit-run
  - security-boundary
  - authorization
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.750Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8f57e225681e30f8988dee02cd036d0b0967726a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/internal-access-is-not-a-security-boundary.md
    title: "microsoft/BCQuality: Access Internal is API hygiene, not an authorization boundary"
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
repo_path: microsoft/knowledge/security/internal-access-is-not-a-security-boundary.md
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
  - RecordRef
  - TransferFields
  - internalsVisibleTo
---

# Access Internal is API hygiene, not an authorization boundary

> Access = Internal controls compile-time symbol visibility. It does not prevent runtime access through mechanisms such as RecordRef, TransferFields, or Codeunit.Run, and internalsVisibleTo deliberately grants compile-time access to named companion apps.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/internal-access-is-not-a-security-boundary.md) · microsoft layer · security · BC all · tier official · derived

## Description

`Access = Internal` controls compile-time symbol visibility. It does not prevent runtime access through mechanisms such as `RecordRef`, `TransferFields`, or `Codeunit.Run`, and `internalsVisibleTo` deliberately grants compile-time access to named companion apps. Microsoft explicitly documents that access modifiers cannot be used as a security boundary.

## Best Practice

Use `internal` to keep implementation details out of the supported API, but enforce sensitive operations with permissions, entitlements, and explicit authorization checks appropriate to the operation. Treat `internalsVisibleTo` as a same-publisher development/testability relationship, not as a trust grant for secrets or elevated data access.

See sample: [`internal-access-is-not-a-security-boundary.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/internal-access-is-not-a-security-boundary.good.al).

## Anti Pattern

Placing privileged work in an internal codeunit and claiming that other extensions cannot invoke it, or exposing an app to a different publisher through `internalsVisibleTo` because `internal` is assumed to protect the underlying operation. The access modifier narrows supported callers; it does not authenticate runtime callers.

See sample: [`internal-access-is-not-a-security-boundary.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/internal-access-is-not-a-security-boundary.bad.al).

## Examples

- [Good: internal-access-is-not-a-security-boundary.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/internal-access-is-not-a-security-boundary.good.al)
- [Bad: internal-access-is-not-a-security-boundary.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/internal-access-is-not-a-security-boundary.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
