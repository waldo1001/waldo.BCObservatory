---
id: guideline/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key
type: guideline
title: Every non-aggregated query column is a group key
summary: As soon as one query column sets Method to Sum, Count, Average, Min, or Max, the query groups its result by all other columns, including columns of other data items and columns that use a date method (Day, Month, Year). There is no explicit GROUP BY; the grouping is implied by the column list.
tier: official
language: en
tags:
  - query-totals
  - method
  - sum
  - count
  - average
  - group-by
  - grouping
  - aggregate
  - query-column
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:19.342Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c3eab6d50e1aa3b87dab3cf98374270f3fe8d563
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.md
    title: "microsoft/BCQuality: Every non-aggregated query column is a group key"
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
repo_path: microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.md
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
  - ColumnFilter
  - DataItemTableFilter
---

# Every non-aggregated query column is a group key

> As soon as one query column sets Method to Sum, Count, Average, Min, or Max, the query groups its result by all other columns, including columns of other data items and columns that use a date method (Day, Month, Year). There is no explicit GROUP BY; the grouping is implied by the column list.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.md) · microsoft layer · query · BC all · tier official · derived

## Description

As soon as one query column sets `Method` to `Sum`, `Count`, `Average`, `Min`, or `Max`, the query groups its result by all other columns, including columns of other data items and columns that use a date method (`Day`, `Month`, `Year`). There is no explicit GROUP BY; the grouping is implied by the column list. Adding a column "just to display it", such as a document number, a description, or a posting date, therefore silently changes the grain of the result: one total per customer becomes one total per customer per document, and the code that reads one row per customer reads the first partial total or adds duplicates.

Integer `Average` also uses integer division, so averages of `Integer` fields lose their fractional part.

## Best Practice

Treat the non-aggregated column list as the GROUP BY clause. Include only the columns that define the grain you want, and get descriptive values (names, descriptions) either from a column that is constant within the group or from a separate lookup after reading the totals. When a column is needed only for filtering, use `filter` elements or `ColumnFilter`/`DataItemTableFilter` instead of a `column`. Average `Decimal` fields, or compute the average in AL from `Sum` and `Count`.

See sample: [`every-non-aggregated-query-column-is-a-group-key.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.good.al).

## Anti Pattern

A totals query, meaning one with any aggregate `Method`, that also contains a `column` whose value varies within the intended group (document number, line number, entry number, posting date without a date method), while the query's name or consuming code expects one row per group, for example via a single `Read()` or a dictionary keyed by the group field.

See sample: [`every-non-aggregated-query-column-is-a-group-key.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.bad.al).

## References

[Aggregating data in query objects](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-query-totals-grouping) (an aggregate method groups the dataset by the other columns; integer Average uses integer division) and [Method property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-method-property) (date-method columns remain part of the group).

## Examples

- [Good: every-non-aggregated-query-column-is-a-group-key.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.good.al)
- [Bad: every-non-aggregated-query-column-is-a-group-key.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/every-non-aggregated-query-column-is-a-group-key.bad.al)

## Changed by

- [#230 Knowledge: report layouts and dataset contract, query join and grouping defaults](../../../../changes/bcquality/230.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
