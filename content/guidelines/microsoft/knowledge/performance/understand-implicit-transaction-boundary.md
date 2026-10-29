---
id: guideline/microsoft/knowledge/performance/understand-implicit-transaction-boundary
type: guideline
title: AL auto-commits when code execution completes
summary: In AL, write transactions are managed by the runtime, not by the developer. When AL code begins executing from an entry point — an outermost trigger, a codeunit invoked via Codeunit.Run, a report, a page action — the runtime opens a write transaction on the first database write.
tier: official
language: en
tags:
  - commit
  - transaction
  - implicit-commit
  - write-transaction
  - runtime
  - boundary
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:25.902Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: da9a1ebce19b9c7e43092e0118bdc39595dc494e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/understand-implicit-transaction-boundary.md
    title: "microsoft/BCQuality: AL auto-commits when code execution completes"
    date: "2026-04-23"
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
  changes: []
repo_path: microsoft/knowledge/performance/understand-implicit-transaction-boundary.md
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
examples: 0
identifiers: []
---

# AL auto-commits when code execution completes

> In AL, write transactions are managed by the runtime, not by the developer. When AL code begins executing from an entry point — an outermost trigger, a codeunit invoked via Codeunit.Run, a report, a page action — the runtime opens a write transaction on the first database write.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/understand-implicit-transaction-boundary.md) · microsoft layer · performance · BC all · tier official · derived

## Description

In AL, write transactions are managed by the runtime, not by the developer. When AL code begins executing from an entry point — an outermost trigger, a codeunit invoked via `Codeunit.Run`, a report, a page action — the runtime opens a write transaction on the first database write. When that execution completes without error, the runtime commits automatically; if that execution errors, uncommitted writes are rolled back. Explicit `Commit()` is not how write transactions are *started*; it is how a single execution is *split* into multiple transactions. Per the platform reference, "The Commit method separates write transactions in an AL code module."

## Best Practice

Default to no explicit `Commit()`. Let the runtime open and close the transaction around the execution. Reach for `Commit()` only when the execution has a real reason to persist partial progress — for example, a long batch that must release locks between checkpoints (see `avoid-commit-inside-loops.md`), or work that calls an external service and must persist the resulting handle before continuing with operations that may fail independently. If a stretch of work needs to either complete fully or have no effect, prefer `Codeunit.Run` over manual Commit choreography (see `codeunit-run-as-atomic-sub-operation.md`).

## Anti Pattern

Sprinkling `Commit()` defensively — at the end of a procedure, after every Modify, or "just to be safe" — reflects a SQL-style mental model that does not apply here. Every stray Commit shortens the rollback window: work before the Commit survives later errors the developer almost certainly intended to unwind. A Commit without a specific reason is a bug waiting to surface.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
