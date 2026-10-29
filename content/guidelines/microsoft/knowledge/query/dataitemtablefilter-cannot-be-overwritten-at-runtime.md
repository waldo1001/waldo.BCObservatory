---
id: guideline/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime
type: guideline
title: DataItemTableFilter cannot be overwritten at runtime
summary: DataItemTableFilter defines a static filter on a Query dataitem. A runtime SetFilter or SetRange on the same source field does not replace that filter.
tier: official
language: en
tags:
  - query
  - dataitemtablefilter
  - setfilter
  - setrange
  - static-filter
  - filter-precedence
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:08.362Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6a96db1c7c5020f36f2f189400343067d7147ecb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.md
    title: "microsoft/BCQuality: DataItemTableFilter cannot be overwritten at runtime"
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
repo_path: microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.md
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
  - DataItemTableFilter
  - SetFilter
  - SetRange
---

# DataItemTableFilter cannot be overwritten at runtime

> DataItemTableFilter defines a static filter on a Query dataitem. A runtime SetFilter or SetRange on the same source field does not replace that filter.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.md) · microsoft layer · query · BC all · tier official · derived

## Description

`DataItemTableFilter` defines a static filter on a Query dataitem. A runtime `SetFilter` or `SetRange` on the same source field does not replace that filter. The static and runtime filters are combined with AND, so contradictory values produce an empty dataset instead of broadening or replacing the query definition.

## Best Practice

Keep only invariant restrictions in `DataItemTableFilter`. Expose caller-selectable fields through a column or filter row and apply their values with `SetFilter` or `SetRange` before `Open()`. When both filter types intentionally target the same field, ensure their intersection represents the required dataset.

See sample: [`dataitemtablefilter-cannot-be-overwritten-at-runtime.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.good.al).

## Anti Pattern

Define a static filter in `DataItemTableFilter`, then apply a contradictory runtime filter to the same source field while expecting the runtime filter to replace the static one. Both filters remain effective and the query returns no rows.

See sample: [`dataitemtablefilter-cannot-be-overwritten-at-runtime.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.bad.al).

## References

Filtering in Query objects — https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-query-filters

## Examples

- [Good: dataitemtablefilter-cannot-be-overwritten-at-runtime.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.good.al)
- [Bad: dataitemtablefilter-cannot-be-overwritten-at-runtime.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/query/dataitemtablefilter-cannot-be-overwritten-at-runtime.bad.al)

## Changed by

- [#186 Add Query filter semantics guidance](../../../../changes/bcquality/186.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
