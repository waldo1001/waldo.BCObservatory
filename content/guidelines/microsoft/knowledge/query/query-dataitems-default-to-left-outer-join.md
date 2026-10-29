---
id: guideline/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join
type: guideline
title: A lower query data item without SqlJoinType is a left outer join
summary: When a lower dataitem in a query sets DataItemLink but omits SqlJoinType, the join is LeftOuterJoin.
tier: official
language: en
tags:
  - sqljointype
  - left-outer-join
  - inner-join
  - dataitemlink
  - query-dataitem
  - null-columns
  - join
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:19.447Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a0d1a5da1c01f9aedc58d1f6f8f365717c5edf35
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.md
    title: "microsoft/BCQuality: A lower query data item without SqlJoinType is a left outer join"
    date: "2026-10-20"
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
    - change/bcquality/230
repo_path: microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.md
layer: microsoft
kind: rule
domain: query
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
  - DataItemLink
  - SqlJoinType
  - LeftOuterJoin
  - InnerJoin
---

# A lower query data item without SqlJoinType is a left outer join

> When a lower dataitem in a query sets DataItemLink but omits SqlJoinType, the join is LeftOuterJoin.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.md) · microsoft layer · query · BC all · tier official · derived

## Description

When a lower `dataitem` in a query sets `DataItemLink` but omits `SqlJoinType`, the join is `LeftOuterJoin`. Before subsequent filtering, it keeps every row of the upper data item, including rows with no matching record below; for those rows the lower data item's columns are null and are read in AL as blank or zero. Developers coming from SQL, where a plain `JOIN` is an inner join, can incorrectly count these unmatched rows as sales documents or ledger entries.

The final dataset also depends on filters. A null-rejecting child filter applied in the SQL `WHERE` clause removes unmatched rows: for example, `DataItemTableFilter = "Document Type" = const(Order), Status = const(Open)` on Sales Header rejects the null child rows of customers without matching orders. In that case, changing only the join to `InnerJoin` does not fix a row-selection defect; both joins return the same rows.

## Best Practice

Prefer an explicit `SqlJoinType` to communicate intent. Use `InnerJoin` when only matched rows are meaningful. Keep `LeftOuterJoin` when unmatched upper rows are intended, for example to list customers with zero sales, and make the consuming code handle the blank lower columns. A null-rejecting child filter is also a valid way to exclude unmatched rows; evaluate the effective filters and consuming code before reporting a missing join type as a defect.

See sample: [`query-dataitems-default-to-left-outer-join.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.good.al).

## Anti Pattern

A query whose lower data item has a `DataItemLink` and no `SqlJoinType`, where unmatched rows survive the effective filters and are consumed as matches, counted as documents or entries, or read without handling blank lower values. Require evidence of a wrong result, not just a missing property or a suggestive query name.

Do not flag an explicit `SqlJoinType = LeftOuterJoin`, an implicit one where the consumer clearly expects and handles unmatched rows, or a query whose null-rejecting child filters already eliminate unmatched rows. The clean companion includes both an explicit inner join and an implicit outer join constrained by such a filter.

See sample: [`query-dataitems-default-to-left-outer-join.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.bad.al).

## References

[Linking and joining data items to define the query dataset](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-query-links-joins#how-to-link-and-join-data-items) (by default, SqlJoinType is LeftOuterJoin; unmatched rows get null values), [SqlJoinType property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-sqljointype-property), and [Filtering in Query objects](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-query-filters) (data-item filters restrict the resulting dataset).

## Examples

- [Good: query-dataitems-default-to-left-outer-join.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.good.al)
- [Bad: query-dataitems-default-to-left-outer-join.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/query-dataitems-default-to-left-outer-join.bad.al)

## Changed by

- [#230 Knowledge: report layouts and dataset contract, query join and grouping defaults](../../../../changes/bcquality/230.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
