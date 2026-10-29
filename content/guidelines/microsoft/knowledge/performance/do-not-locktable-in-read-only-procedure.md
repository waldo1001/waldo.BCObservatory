---
id: guideline/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure
type: guideline
title: Do not LockTable in a read-only procedure
summary: "LockTable is a transaction-wide signal: from the call onward, every read against that table in the same transaction acquires UPDLOCK."
tier: official
language: en
tags:
  - locktable
  - read-only
  - helper
  - contention
  - transaction
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.371Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2580144e0db6ecbb751cf2d464e2ac93b4ec103b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.md
    title: "microsoft/BCQuality: Do not LockTable in a read-only procedure"
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
repo_path: microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.md
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
  - LockTable
  - ReadIsolation
---

# Do not LockTable in a read-only procedure

> LockTable is a transaction-wide signal: from the call onward, every read against that table in the same transaction acquires UPDLOCK.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`LockTable` is a transaction-wide signal: from the call onward, every read against that table in the same transaction acquires `UPDLOCK`. Per the upstream guidance, "`LockTable()` before Modify/Insert/Delete in the same procedure is the correct pattern" — locking the read against the write that follows is what the call exists for. The anti-pattern is "`LockTable()` in read-only procedures — unnecessary lock contention": the procedure never writes, but the lock cost is paid by everyone sharing the transaction.

## Best Practice

Reserve `LockTable` for the read directly before a `Modify`, `Insert`, or `Delete` that depends on the read value. If a helper is sometimes called for reading and sometimes for writing, split it into separate read and write paths and call `LockTable` only on the write path. For read-only existence checks or lookups, the right primitive is `ReadIsolation` (see `prefer-readisolation-over-locktable-for-reads.md`).

See sample: [`do-not-locktable-in-read-only-procedure.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.good.al).

## Anti Pattern

A pure getter that opens with `Rec.LockTable();`. Every caller's transaction now acquires `UPDLOCK` on that table for every subsequent read until commit. The contention shows up as blocking on unrelated sessions whose own code path looks innocent — the locker is invisible to the blocked reader.

See sample: [`do-not-locktable-in-read-only-procedure.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.bad.al).

## Examples

- [Good: do-not-locktable-in-read-only-procedure.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.good.al)
- [Bad: do-not-locktable-in-read-only-procedure.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/do-not-locktable-in-read-only-procedure.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
