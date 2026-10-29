---
id: guideline/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint
type: guideline
title: SetCurrentKey is not a SQL index hint for record reads
summary: A common misconception is that SetCurrentKey tells SQL Server which index to use for a filtered FindSet/FindFirst query. It does not.
tier: official
language: en
tags:
  - setcurrentkey
  - sort
  - order-by
  - index
  - key
  - query-optimizer
  - hint
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:43.657Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ea99299924917bc3e303126dd1a61fb035e6339a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.md
    title: "microsoft/BCQuality: SetCurrentKey is not a SQL index hint for record reads"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/198
    - change/bcquality/174
    - change/bcquality/135
repo_path: microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.md
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
  - SetCurrentKey
  - FindSet
  - FindFirst
  - SumIndexFields
  - CalcSums
  - SetRange
  - SetFilter
  - FindLast
---

# SetCurrentKey is not a SQL index hint for record reads

> A common misconception is that SetCurrentKey tells SQL Server which index to use for a filtered FindSet/FindFirst query. It does not.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A common misconception is that `SetCurrentKey` tells SQL Server which index to use for a filtered `FindSet`/`FindFirst` query. It does not. For record iteration, `SetCurrentKey` changes the `ORDER BY` clause of the generated SQL statement; it does not add an index hint, and the SQL Server query optimizer is free to ignore the named key entirely. A distinct use is selecting an appropriate key with `SumIndexFields` before `CalcSums` so the platform can use a compatible SIFT aggregate (see [SIFT and SQL Server](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-sift-and-sql-server)).

The optimizer picks the index from the `WHERE` clause (your `SetRange`/`SetFilter`) together with table statistics and estimated cost. In practice it almost never chooses an index just because that key appears in `ORDER BY`. So calling `SetCurrentKey` to "steer" the plan toward an index is a no-op for index selection — and can make things worse: an `ORDER BY` that the query does not otherwise need can push the optimizer toward a less selective index or add a Sort operator to the plan.

Selectivity comes from having the right index available (a key on the table whose leading fields cover the filter) and from filtering on those fields — not from `SetCurrentKey`.

## Best Practice

For a record-iteration read, decide `SetCurrentKey` on one question: **do I need the result set in a specific order?**

- If yes — you iterate rows in a defined sequence, or rely on `FindFirst`/`FindLast`/`Next` returning a particular row — call `SetCurrentKey` for that sort. The order is a functional requirement, and the `ORDER BY` is justified.
- If no — omit `SetCurrentKey`. Let the optimizer choose the cheapest plan for your filters; it may pick a better index and skip a sort.

To make a filtered read fast, ensure a key (index) exists on the table whose leading fields cover the filter, and filter on those fields with `SetRange`/`SetFilter`. That is what lets the optimizer seek. Defining the key creates the index; `SetCurrentKey` is not required to make the optimizer use it.

For a stored-field `CalcSums` instead of iteration, consider a matching current key with the summed field in `SumIndexFields`, as documented for SIFT; do not classify that call as an unnecessary `ORDER BY` on a row iterator (see [stored-field totals](calcsums-instead-of-calcfields-in-loop.md)).

See sample: [`setcurrentkey-sets-sort-order-not-index-hint.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.good.al).

## Anti Pattern

Adding `SetCurrentKey` to a filtered read purely in the belief that it forces SQL Server to seek a particular index, when the code never uses the resulting order. This does nothing for index selection and only appends an `ORDER BY` the query does not need, risking an unnecessary sort. Remove the `SetCurrentKey`; rely on the filters and an existing covering key instead.

See sample: [`setcurrentkey-sets-sort-order-not-index-hint.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.bad.al).

## Examples

- [Good: setcurrentkey-sets-sort-order-not-index-hint.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.good.al)
- [Bad: setcurrentkey-sets-sort-order-not-index-hint.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/setcurrentkey-sets-sort-order-not-index-hint.bad.al)

## Names

- [Record.CalcSums(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcsums-method) (names CalcSums)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#135 Correct severe misconception about SetCurrentKey in the knowledge base](../../../../changes/bcquality/135.md), 2026-08-23

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
