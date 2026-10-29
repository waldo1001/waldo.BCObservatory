---
id: guideline/microsoft/knowledge/performance/avoid-commit-inside-loops
type: guideline
title: Do not Commit inside loops
summary: Commit ends the current write transaction. Calling it inside a per-row loop usually produces one transaction per iteration and loses the ability to roll back the whole operation atomically; it also interferes with batching.
tier: official
language: en
tags:
  - commit
  - commit-in-loop
  - per-row-commit
  - checkpoint
  - bounded-checkpoint
  - watermark
  - topnumberofrows
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.066Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 011fd398b83303627248d0d99add0cc661412507
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-commit-inside-loops.md
    title: "microsoft/BCQuality: Do not Commit inside loops"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/query/queryinstance-topnumberofrows-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/132
    - change/bcquality/97
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/avoid-commit-inside-loops.md
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
  - FindSet
  - TopNumberOfRows
---

# Do not Commit inside loops

> Commit ends the current write transaction. Calling it inside a per-row loop usually produces one transaction per iteration and loses the ability to roll back the whole operation atomically; it also interferes with batching.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-commit-inside-loops.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Commit ends the current write transaction. Calling it inside a per-row loop usually produces one transaction per iteration and loses the ability to roll back the whole operation atomically; it also interferes with batching. Most loops need no explicit Commit at all — AL auto-commits the enclosing code module on successful completion (see `understand-implicit-transaction-boundary.md`).

A durability checkpoint inside an outer batch loop can be valid only when the same transaction persists a progress marker or state that makes retries strictly exclude completed work, the checkpoint follows a complete business unit, and errors propagate instead of being swallowed. Restart safety and bounded retrieval are separate requirements: a persisted watermark can make retries safe, but an outer `FindSet` over the full remaining tail with periodic commits still retrieves the complete set because [`FindSet` is not implemented as `TOP X`](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-database-methods-and-performance-on-server#get-find-findset-and-next).

## Best Practice

If the batch is large enough that a single transaction is untenable, use an ordered primary-key watermark and retrieve a bounded next-N key list. The sample uses a query capped by [`TopNumberOfRows`](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/query/queryinstance-topnumberofrows-method) to fill a temporary key buffer, then takes update locks and modifies only those exact keys. It does not reconstruct an inclusive first-to-last range that concurrent inserts could expand. Persist the last selected key in the same transaction as the completed chunk, then commit after the bounded helper returns. Use a stable key and define how a later run handles records inserted at or below an already committed watermark. Let errors escape so failed work is not recorded as complete. A `Codeunit.Run` boundary can also own a chunk when its implicit commit and error behavior fit the caller — see `codeunit-run-as-atomic-sub-operation.md`.

See sample: [`avoid-commit-inside-loops.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-commit-inside-loops.good.al).

## Anti Pattern

Placing Commit inside `repeat ... until Next() = 0` without persisted progress is almost always a mistake: retries re-enter already committed work, while the cost of starting a transaction on every row dominates the operation. A progress variable held only in memory is not restart-safe. A full-tail `FindSet` with a commit every N rows is not bounded retrieval, even if a persisted watermark makes it restart-safe. A capped query that discovers only an upper key and then re-reads an inclusive key range is not exact batching either; concurrent inserts inside that range can enlarge the checkpoint.

See sample: [`avoid-commit-inside-loops.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-commit-inside-loops.bad.al).

## Examples

- [Good: avoid-commit-inside-loops.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-commit-inside-loops.good.al)
- [Bad: avoid-commit-inside-loops.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-commit-inside-loops.bad.al)

## Names

- [Query.TopNumberOfRows(\[Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/query/queryinstance-topnumberofrows-method) (names TopNumberOfRows)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03
- [#97 Add per-row AL performance guidance](../../../../changes/bcquality/97.md), 2026-07-14
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
