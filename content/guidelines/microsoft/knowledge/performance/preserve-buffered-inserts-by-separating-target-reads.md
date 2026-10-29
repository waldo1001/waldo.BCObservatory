---
id: guideline/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads
type: guideline
title: Keep eligible inserts together instead of re-reading their target
summary: Business Central can automatically buffer eligible Insert calls. Find/Calc on the target table, Modify/Delete on it, or Commit flushes pending inserts; consuming the Insert return value, or BLOB/AutoIncrement fields on the target, prevents buffering.
tier: official
language: en
tags:
  - buffered-inserts
  - bulk-inserts
  - findlast
  - insert
  - target-table
  - commit
  - staging
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:43.626Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7459ee438de6e1723a9994e2e3fb8d8b93fe5cfe
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.md
    title: "microsoft/BCQuality: Keep eligible inserts together instead of re-reading their target"
    date: "2026-09-29"
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
    - change/bcquality/198
repo_path: microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.md
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
  - InsertAll
  - FindLast
---

# Keep eligible inserts together instead of re-reading their target

> Business Central can automatically buffer eligible Insert calls. Find/Calc on the target table, Modify/Delete on it, or Commit flushes pending inserts; consuming the Insert return value, or BLOB/AutoIncrement fields on the target, prevents buffering.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Business Central can automatically buffer eligible `Insert` calls. `Find`/`Calc` on the **target** table, `Modify`/`Delete` on it, or `Commit` flushes pending inserts; consuming the `Insert` return value, or BLOB/AutoIncrement fields on the target, prevents buffering. A source-table read is not itself a target-table flush. There is no general `InsertAll` replacement for an AL loop.

## Best Practice

When writing completed rows to an application-owned data-only table, allocate a collision-free run or range once, prepare every field before each `Insert`, and keep the insert sequence free of intervening target-table reads and writes. Let the owning business transaction determine the commit point. Trace called procedures and events as well as the visible loop; inspect actual SQL batches and writes, then test failures, retries, and any concurrent writers. The sample assumes an exclusive new run ID and no required trigger, validation, number-series, or subscriber effects. See sample: [`preserve-buffered-inserts-by-separating-target-reads.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.good.al).

## Anti Pattern

Calling `FindLast` on the target for every row to allocate its next line number, inserting an incomplete row and immediately modifying it, or committing each iteration of an otherwise eligible insert sequence. Moving a shared `FindLast` out of the loop without concurrency-safe allocation is **not** a valid fix. Do not recommend skipping required triggers or persistence steps in sales documents, journals, or posting ledgers just to obtain buffering; repeated `Modify` calls do not automatically batch like eligible inserts. See sample: [`preserve-buffered-inserts-by-separating-target-reads.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.bad.al).

## References

- [Bulk inserts and flush/non-buffering conditions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-bulk-inserts).
- [Transaction checkpoints and restart safety](avoid-commit-inside-loops.md).

## Examples

- [Good: preserve-buffered-inserts-by-separating-target-reads.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.good.al)
- [Bad: preserve-buffered-inserts-by-separating-target-reads.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/preserve-buffered-inserts-by-separating-target-reads.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
