---
id: guideline/microsoft/knowledge/error-handling/page-boolean-triggers-default-to-true
type: guideline
title: Page record triggers return true by default; a missing exit(true) does not block the operation
summary: The Boolean page record triggers OnInsertRecord, OnModifyRecord, OnDeleteRecord, and OnQueryClosePage return true by default. When the trigger body omits an explicit return value, the platform treats the result as true and the operation proceeds.
tier: official
language: en
tags:
  - oninsertrecord
  - onmodifyrecord
  - ondeleterecord
  - onquerypage
  - boolean-trigger
  - exit
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.663Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f637fae97c537556229ad43fbaffde75647a39f4
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/page-boolean-triggers-default-to-true.md
    title: "microsoft/BCQuality: Page record triggers return true by default; a missing exit(true) does not block the operation"
    date: "2026-07-17"
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
    - change/bcquality/112
repo_path: microsoft/knowledge/error-handling/page-boolean-triggers-default-to-true.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - OnInsertRecord
  - OnModifyRecord
  - OnDeleteRecord
  - OnQueryClosePage
---

# Page record triggers return true by default; a missing exit(true) does not block the operation

> The Boolean page record triggers OnInsertRecord, OnModifyRecord, OnDeleteRecord, and OnQueryClosePage return true by default. When the trigger body omits an explicit return value, the platform treats the result as true and the operation proceeds.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/page-boolean-triggers-default-to-true.md) · microsoft layer · error-handling · BC all · tier official · derived

## Description

The Boolean page record triggers `OnInsertRecord`, `OnModifyRecord`, `OnDeleteRecord`, and `OnQueryClosePage` return `true` by default. When the trigger body omits an explicit return value, the platform treats the result as `true` and the operation proceeds. Only an explicit `exit(false)` — or a reachable code path that returns `false` — cancels the insert, modify, delete, or page close.

This is a defined exception to the ordinary Boolean method rule, where the default return is `false`. Reviewers unfamiliar with the exception sometimes read a page record trigger that has no `exit(true)` and conclude the operation is blocked; it is not.

## Best Practice

Do not claim that a missing `exit(true)` blocks or prevents an insert, modify, or delete, and do not recommend adding `exit(true)` "to let the operation proceed" — that is already the default. Evaluate these triggers only for an explicit or reachable `exit(false)`/false-returning path that would cancel the operation unintentionally.

## Anti Pattern

Flagging `OnInsertRecord`, `OnModifyRecord`, `OnDeleteRecord`, or `OnQueryClosePage` as defective because it "does not return `true`", or asserting that inserts/modifies/deletes will silently fail without an explicit `exit(true)`. The default return already permits the operation.

## Changed by

- [#112 Add precision guards for systematic agent false-positive patterns](../../../../changes/bcquality/112.md), 2026-07-17

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
