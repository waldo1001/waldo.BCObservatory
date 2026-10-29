---
id: guideline/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction
type: guideline
title: Commit before Codeunit.Run when the caller already holds a write transaction
summary: "Codeunit.Run cannot nest inside an open write transaction. Per the platform reference, \"If you're already in a transaction you must commit first before calling Codeunit.Run.\" The platform enforces this at runtime: the first call dies with an error, not at compile time."
tier: official
language: en
tags:
  - codeunit-run
  - commit
  - write-transaction
  - nesting
  - loop
  - runtime-error
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 936ae5b0baaeced7404f4b4757f81b6698035b34
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.md
    title: "microsoft/BCQuality: Commit before Codeunit.Run when the caller already holds a write transaction"
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
repo_path: microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.md
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
  - CommitBehavior
---

# Commit before Codeunit.Run when the caller already holds a write transaction

> Codeunit.Run cannot nest inside an open write transaction. Per the platform reference, "If you're already in a transaction you must commit first before calling Codeunit.Run." The platform enforces this at runtime: the first call dies with an error, not at compile time.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`Codeunit.Run` cannot nest inside an open write transaction. Per the platform reference, "If you're already in a transaction you must commit first before calling `Codeunit.Run`." The platform enforces this at runtime: the first call dies with an error, not at compile time. The rule most often surfaces in a loop that pairs outer-scope writes — progress records, audit log entries, failure markers — with a per-item `Codeunit.Run`: the first outer write opens a transaction, the subsequent `Codeunit.Run` throws. `[CommitBehavior]` does not silence this, because the implicit commit inside `Codeunit.Run` is exempt from the attribute: "The `CommitBehavior` only applies to explicit commits, not implicit commits done as part of [Codeunit.Run]." `[TryFunction]` is not a substitute either: a try method catches errors but does not open its own rollback boundary (see `use-tryfunction-for-error-catching-not-rollback.md`).

## Best Practice

For the `Codeunit.Run` atomic-sub-operation pattern (see `codeunit-run-as-atomic-sub-operation.md`) to work in a loop, keep the outer scope **read-only**. Move per-iteration writes — progress updates, logging, audit entries — into the sub-codeunit so they commit or roll back together with the per-item work. If logging must live outside the atomic boundary, defer it: collect failure info in memory during the loop (a `List of [Text]`, a temporary record, local variables) and write it in one pass after the loop ends, when no outer write transaction is open.

See sample: [`codeunit-run-requires-prior-commit-inside-transaction.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.good.al).

## Anti Pattern

Inserting `Commit()` before each `Codeunit.Run` to silence the runtime error. The error goes away, but the outer scope now commits per iteration — the behavior `avoid-commit-inside-loops.md` exists to warn against. Attempting to silence the implicit commit inside the sub-codeunit with `[CommitBehavior(CommitBehavior::Ignore)]` also fails: the attribute does not apply to `Codeunit.Run`'s implicit commit. Conditioning the Commit on `Database.IsInWriteTransaction()` (runtime 11.0+) is another version of the same trap — the method has legitimate uses for diagnostics and library code that genuinely cannot control its caller, but branching production flow on runtime transaction state typically signals unclear ownership that would be better fixed by restructuring the caller so transaction state is predictable.

See sample: [`codeunit-run-requires-prior-commit-inside-transaction.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.bad.al).

## Examples

- [Good: codeunit-run-requires-prior-commit-inside-transaction.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.good.al)
- [Bad: codeunit-run-requires-prior-commit-inside-transaction.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/codeunit-run-requires-prior-commit-inside-transaction.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
