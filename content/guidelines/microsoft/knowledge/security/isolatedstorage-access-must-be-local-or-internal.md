---
id: guideline/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal
type: guideline
title: Procedures that read or write IsolatedStorage must not be public
summary: "IsolatedStorage partitions its data by extension: values written by one extension are unreadable to another. That guarantee assumes the owning extension does not voluntarily expose its storage through a public API."
tier: official
language: en
tags:
  - isolatedstorage
  - local
  - internal
  - public
  - getter
  - setter
  - encapsulation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.927Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 062c2026613aeb36a34aad27b513c0bee4c65584
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.md
    title: "microsoft/BCQuality: Procedures that read or write IsolatedStorage must not be public"
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
repo_path: microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.md
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
---

# Procedures that read or write IsolatedStorage must not be public

> IsolatedStorage partitions its data by extension: values written by one extension are unreadable to another. That guarantee assumes the owning extension does not voluntarily expose its storage through a public API.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.md) · microsoft layer · security · BC 24.. · tier official · derived

## Description

`IsolatedStorage` partitions its data by extension: values written by one extension are unreadable to another. That guarantee assumes the owning extension does not voluntarily expose its storage through a public API. A `public` procedure on a codeunit that calls `IsolatedStorage.Get`, `IsolatedStorage.Set`, `IsolatedStorage.SetEncrypted`, `IsolatedStorage.Contains`, or `IsolatedStorage.Delete` defeats the isolation: any other extension on the same tenant can call that procedure and obtain (or overwrite) the secret. The platform's per-extension boundary becomes a per-procedure boundary, and there is no per-procedure boundary.

## Best Practice

Mark every procedure that touches `IsolatedStorage` as `local` (visible only inside its containing object) or `internal` (visible only inside the owning extension). Provide consumers with a narrow, intent-specific API — for example, "send notification to configured webhook" rather than "give me the webhook secret." See sample: [`isolatedstorage-access-must-be-local-or-internal.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.good.al).

## Anti Pattern

A public `GetApiKey()` returning the stored value, or a public `SetApiKey(NewKey: Text)` that calls `IsolatedStorage.SetEncrypted`. Both turn the extension into a confused deputy that hands out (or accepts overwrites of) its own secrets on behalf of any caller on the tenant. Reviewers should flag any procedure whose body references `IsolatedStorage` and whose declaration omits `local` or `internal`. See sample: [`isolatedstorage-access-must-be-local-or-internal.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.bad.al).

## Examples

- [Good: isolatedstorage-access-must-be-local-or-internal.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.good.al)
- [Bad: isolatedstorage-access-must-be-local-or-internal.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/isolatedstorage-access-must-be-local-or-internal.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
