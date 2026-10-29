---
id: guideline/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads
type: guideline
title: Prefer ReadIsolation over LockTable for read-only scenarios
summary: Without read scale-out, LockTable causes subsequent reads of that table in the transaction to use UPDLOCK. With read scale-out, those reads use REPEATABLEREAD on the replica instead. ReadIsolation selects an isolation level for one record instance.
tier: official
language: en
tags:
  - readisolation
  - locktable
  - updlock
  - read-only
  - transaction-scope
  - isolation-level
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.208Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a82ec8b52226e5ab22537bf2cb62b65c838d41f5
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.md
    title: "microsoft/BCQuality: Prefer ReadIsolation over LockTable for read-only scenarios"
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
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.md
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
  - ReadCommitted
---

# Prefer ReadIsolation over LockTable for read-only scenarios

> Without read scale-out, LockTable causes subsequent reads of that table in the transaction to use UPDLOCK. With read scale-out, those reads use REPEATABLEREAD on the replica instead. ReadIsolation selects an isolation level for one record instance.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Without read scale-out, `LockTable` causes subsequent reads of that table in the transaction to use `UPDLOCK`. With read scale-out, those reads use `REPEATABLEREAD` on the replica instead. `ReadIsolation` selects an isolation level for one record instance. A helper that only reads should not broaden locking for the table merely to request committed data.

## Best Practice

For a read-only operation that specifically requires committed data, set `Rec.ReadIsolation := IsolationLevel::ReadCommitted` immediately before the read. If the default isolation is sufficient, set neither property. `ReadCommitted` can still block behind writers and does not guarantee that repeated reads stay unchanged; use the isolation level required by the operation. Reserve update locks for read-before-write logic, not read-only helpers.

See sample: [`prefer-readisolation-over-locktable-for-reads.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.good.al).

## Anti Pattern

`Rec.LockTable();` at the top of a helper that only reads, perhaps to "make sure the read is consistent". It takes stronger isolation than the helper needs and changes later reads of that table in the surrounding transaction or read-scale-out session.

See sample: [`prefer-readisolation-over-locktable-for-reads.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.bad.al).

## Examples

- [Good: prefer-readisolation-over-locktable-for-reads.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.good.al)
- [Bad: prefer-readisolation-over-locktable-for-reads.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-readisolation-over-locktable-for-reads.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
