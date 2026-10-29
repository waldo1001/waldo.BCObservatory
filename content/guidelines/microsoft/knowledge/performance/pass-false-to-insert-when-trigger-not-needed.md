---
id: guideline/microsoft/knowledge/performance/pass-false-to-insert-when-trigger-not-needed
type: guideline
title: Pass false to Insert/Modify/Delete when the table triggers do not need to fire
summary: Insert(true), Modify(true), and Delete(true) run the table's OnInsert/OnModify/OnDelete trigger; the (false) form skips it.
tier: official
language: en
tags:
  - insert
  - modify
  - delete
  - trigger
  - run-trigger
  - write-parameters
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.036Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4fc83c4ed02e46c2eeb781fe71996aa5c8a2cd0c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-false-to-insert-when-trigger-not-needed.md
    title: "microsoft/BCQuality: Pass false to Insert/Modify/Delete when the table triggers do not need to fire"
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
repo_path: microsoft/knowledge/performance/pass-false-to-insert-when-trigger-not-needed.md
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
examples: 1
identifiers:
  - OnInsert
  - OnModify
  - OnDelete
---

# Pass false to Insert/Modify/Delete when the table triggers do not need to fire

> Insert(true), Modify(true), and Delete(true) run the table's OnInsert/OnModify/OnDelete trigger; the (false) form skips it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-false-to-insert-when-trigger-not-needed.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`Insert(true)`, `Modify(true)`, and `Delete(true)` run the table's `OnInsert`/`OnModify`/`OnDelete` trigger; the `(false)` form skips it. Per the upstream guidance, the trigger form should be used "only when needed" — every row whose write fires a trigger pays that cost, even when the trigger has nothing useful to add for the current call site. For tight bulk write paths the difference compounds linearly with row count.

## Best Practice

Reach for the `(false)` form when the calling code already enforces the invariants the trigger would, or when the trigger is empty for the current table/extension. Use `(true)` when the trigger does work the caller depends on (number-series allocation, validation, cascading writes). Decide per call, not by code style: a default of "always `true`" makes bulk writes pay for triggers they did not need, and a default of "always `false`" silently skips validation the trigger was put there to enforce.

See sample: [`pass-false-to-insert-when-trigger-not-needed.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-false-to-insert-when-trigger-not-needed.good.al).

## Anti Pattern

Looping over thousands of rows and calling `Modify(true)` on each, when the table's `OnModify` trigger does nothing relevant for the operation. The trigger cost is paid per row; the user-visible behavior is identical to the `(false)` form. The mirror is using `(false)` for an operation that depends on trigger-side defaulting and silently producing rows that fail downstream validation.

## Examples

- [Good: pass-false-to-insert-when-trigger-not-needed.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/pass-false-to-insert-when-trigger-not-needed.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
