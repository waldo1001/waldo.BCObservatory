---
id: guideline/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops
type: guideline
title: Avoid cloning records before Modify or Delete in loops
summary: Microsoft's AL database-method performance guidance states that cloning an iterated record before Modify or Delete restarts the SQL SELECT and issues an extra SQL statement for every row.
tier: official
language: en
tags:
  - clone
  - clone-before-write
  - copy
  - gettable
  - by-value
  - copied-record
  - writing-helper
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.014Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 20f27eea7269a74e7b410429a178eb833f349e0a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.md
    title: "microsoft/BCQuality: Avoid cloning records before Modify or Delete in loops"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/recordref/recordref-gettable-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/97
repo_path: microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.md
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
  - RecordRef
  - GetTable
  - ModifyAll
  - DeleteAll
---

# Avoid cloning records before Modify or Delete in loops

> Microsoft's AL database-method performance guidance states that cloning an iterated record before Modify or Delete restarts the SQL SELECT and issues an extra SQL statement for every row.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Microsoft's [AL database-method performance guidance](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-database-methods-and-performance-on-server#insert-modify-delete-and-locktable) states that cloning an iterated record before `Modify` or `Delete` restarts the SQL `SELECT` and issues an extra SQL statement for every row. The runtime treats `Record.Copy`, `RecordRef.GetTable`, and passing a record by value to a writing helper as clones in this situation.

## Best Practice

Use `FindSet(true)` when the loop writes the traversed rows, and call `Modify` or `Delete` on that iterating record variable. If generic code is required, open and iterate the `RecordRef` directly instead of calling `GetTable` for each typed record. Keep a per-row loop when validation or row-specific behavior is required; this rule does not imply that `ModifyAll` or `DeleteAll` is equivalent.

See sample: [`avoid-cloning-records-before-modify-delete-in-loops.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.good.al).

## Anti Pattern

Inside an active traversal, copy the current row, convert it with `RecordRef.GetTable`, or pass it without `var` to a helper, then call `Modify` or `Delete` on that clone. Do not flag read-only snapshots, temporary records, or copies used to write a different target table; the documented extra-statement concern is clone-before-write on the traversed table.

See sample: [`avoid-cloning-records-before-modify-delete-in-loops.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.bad.al).

## Examples

- [Good: avoid-cloning-records-before-modify-delete-in-loops.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.good.al)
- [Bad: avoid-cloning-records-before-modify-delete-in-loops.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-cloning-records-before-modify-delete-in-loops.bad.al)

## Names

- [RecordRef.GetTable(Record) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/recordref/recordref-gettable-method) (names GetTable)
- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#97 Add per-row AL performance guidance](../../../../changes/bcquality/97.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
