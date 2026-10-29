---
id: guideline/microsoft/knowledge/performance/findset-true-applies-updlock-on-read
type: guideline
title: FindSet(true) applies UpdLock on the read; the two-parameter form is obsolete
summary: FindSet() and FindSet(false) are read-only — no locking. Per the upstream guidance, FindSet(true) "signifies the intent is to modify records" and "sets ReadIsolation::UpdLock on the record before finding rows."
tier: official
language: en
tags:
  - findset
  - updlock
  - readisolation
  - locking
  - modify
  - obsolete-syntax
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.308Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3ab780a7dd6ef9d19995196fc7c6be8b044602a8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/findset-true-applies-updlock-on-read.md
    title: "microsoft/BCQuality: FindSet(true) applies UpdLock on the read; the two-parameter form is obsolete"
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
repo_path: microsoft/knowledge/performance/findset-true-applies-updlock-on-read.md
layer: microsoft
kind: rule
domain: performance
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
  - UpdLock
---

# FindSet(true) applies UpdLock on the read; the two-parameter form is obsolete

> FindSet() and FindSet(false) are read-only — no locking. Per the upstream guidance, FindSet(true) "signifies the intent is to modify records" and "sets ReadIsolation::UpdLock on the record before finding rows."

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/findset-true-applies-updlock-on-read.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`FindSet()` and `FindSet(false)` are read-only — no locking. Per the upstream guidance, `FindSet(true)` "signifies the intent is to modify records" and "sets `ReadIsolation::UpdLock` on the record before finding rows." That is exactly the right shape when the loop body modifies each row: the read takes the same lock the modification will need, avoiding the deadlock window between an unlocked read and a later upgrade. The older two-parameter form `FindSet(ForUpdate, UpdateKey)` is obsolete — only the single-parameter signature should appear in new code.

## Best Practice

Use `FindSet(true)` only when the loop body genuinely modifies the iterated rows; use `FindSet()` (or `FindSet(false)`) when the loop only reads. Do not write `FindSet(true, true)` or `FindSet(true, false)` — the two-parameter form is the obsolete signature.

See sample: [`findset-true-applies-updlock-on-read.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/findset-true-applies-updlock-on-read.good.al).

## Anti Pattern

`FindSet(true)` on a loop that does not modify the iterated rows takes an `UpdLock` the work does not need; competing readers and writers stall against a lock the loop never uses. The mirror anti-pattern is `FindSet()` (no parameter) on a loop that *does* modify each row — the read takes a shared lock, the `Modify` then needs to upgrade, and the gap between them is a deadlock candidate.

See sample: [`findset-true-applies-updlock-on-read.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/findset-true-applies-updlock-on-read.bad.al).

## Examples

- [Good: findset-true-applies-updlock-on-read.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/findset-true-applies-updlock-on-read.good.al)
- [Bad: findset-true-applies-updlock-on-read.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/findset-true-applies-updlock-on-read.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
