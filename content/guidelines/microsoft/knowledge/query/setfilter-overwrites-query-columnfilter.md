---
id: guideline/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter
type: guideline
title: SetFilter and SetRange overwrite Query ColumnFilter
summary: ColumnFilter on a Query column or filter row defines a dynamic filter. A runtime SetFilter or SetRange on that same column or filter row replaces the ColumnFilter; it does not combine the two conditions.
tier: official
language: en
tags:
  - query
  - columnfilter
  - setfilter
  - setrange
  - filter-precedence
  - runtime-filter
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.005Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9f9dd7ad9ec54c6299aad0b068df2df7ce1f9bd9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.md
    title: "microsoft/BCQuality: SetFilter and SetRange overwrite Query ColumnFilter"
    date: "2026-09-15"
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
    - change/bcquality/186
repo_path: microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.md
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
  - SetFilter
  - SetRange
  - DataItemTableFilter
---

# SetFilter and SetRange overwrite Query ColumnFilter

> ColumnFilter on a Query column or filter row defines a dynamic filter. A runtime SetFilter or SetRange on that same column or filter row replaces the ColumnFilter; it does not combine the two conditions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.md) · microsoft layer · query · BC all · tier official · derived

## Description

`ColumnFilter` on a Query column or filter row defines a dynamic filter. A runtime `SetFilter` or `SetRange` on that same column or filter row replaces the `ColumnFilter`; it does not combine the two conditions. Rows excluded by the declarative filter can therefore reappear when the runtime filter omits that restriction.

## Best Practice

Place invariant restrictions in `DataItemTableFilter`, which runtime filters cannot overwrite. When a `ColumnFilter` is intentionally replaceable, make each runtime `SetFilter` or `SetRange` express the complete required condition before `Open()`.

See sample: [`setfilter-overwrites-query-columnfilter.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.good.al).

## Anti Pattern

Apply `SetFilter` or `SetRange` to a column or filter row and rely on its existing `ColumnFilter` to remain effective. The runtime call replaces that filter and can admit rows that the query definition appeared to exclude.

See sample: [`setfilter-overwrites-query-columnfilter.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.bad.al).

## References

Filtering in Query objects — https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-query-filters

## Examples

- [Good: setfilter-overwrites-query-columnfilter.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.good.al)
- [Bad: setfilter-overwrites-query-columnfilter.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/setfilter-overwrites-query-columnfilter.bad.al)

## Changed by

- [#186 Add Query filter semantics guidance](../../../../changes/bcquality/186.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
