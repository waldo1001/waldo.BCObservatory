---
id: guideline/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation
type: guideline
title: Use Codeunit.Run to bound an atomic sub-operation
summary: Codeunit.Run(ID) is the AL-idiomatic way to run a unit of work as an atomic sub-operation with its own transactional boundary. When the return value is captured — if Codeunit.Run(MyCodeunit) then ...
tier: official
language: en
tags:
  - codeunit-run
  - atomic
  - rollback
  - transaction
  - sub-transaction
  - try-pattern
  - implicit-commit
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:36.020Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8abdd20166696fefef954bdd7c9d9ff67dce709a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.md
    title: "microsoft/BCQuality: Use Codeunit.Run to bound an atomic sub-operation"
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
repo_path: microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.md
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
identifiers: []
---

# Use Codeunit.Run to bound an atomic sub-operation

> Codeunit.Run(ID) is the AL-idiomatic way to run a unit of work as an atomic sub-operation with its own transactional boundary. When the return value is captured — if Codeunit.Run(MyCodeunit) then ...

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`Codeunit.Run(ID)` is the AL-idiomatic way to run a unit of work as an atomic sub-operation with its own transactional boundary. When the return value is captured — `if Codeunit.Run(MyCodeunit) then ...` — the runtime treats the codeunit as a unit: on successful completion it performs an implicit commit of the codeunit's database changes; on error it rolls those changes back and the caller receives `false`. Per the platform reference, "any changes done to the database will be committed at the end of the codeunit, unless an error occurs." The caller decides how to react — compensate, surface an error, continue — without having to manage transactions by hand.

## Best Practice

When a piece of work must either complete fully or have no effect, put it in its own codeunit and invoke it via `Codeunit.Run`, capturing the return. Use `if not Codeunit.Run(X) then Error(...)` to abort and unwind; use the plain boolean branch to react to failure without aborting the caller. This replaces the SQL-style `BEGIN TRAN / COMMIT / ROLLBACK` habit with a pattern the AL runtime implements natively. Do not confuse `Codeunit.Run` with `[TryFunction]` — both catch errors, but only `Codeunit.Run` rolls back database changes on failure (see `use-tryfunction-for-error-catching-not-rollback.md`). Note that if the caller is already in a write transaction, the platform requires a `Commit()` before `Codeunit.Run` — the sub-operation cannot nest inside an open transaction (see `codeunit-run-requires-prior-commit-inside-transaction.md`).

See sample: [`codeunit-run-as-atomic-sub-operation.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.good.al).

## Anti Pattern

Inlining the work in the caller and sprinkling `Commit()` to simulate sub-transaction boundaries. The caller's enclosing transaction is fused to the sub-work; any Commit between checkpoints survives subsequent errors, and any errors after a Commit cannot be cleanly unwound. Per-row Commits (see `avoid-commit-inside-loops.md`) are a frequent symptom.

See sample: [`codeunit-run-as-atomic-sub-operation.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.bad.al).

## Examples

- [Good: codeunit-run-as-atomic-sub-operation.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.good.al)
- [Bad: codeunit-run-as-atomic-sub-operation.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-as-atomic-sub-operation.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
