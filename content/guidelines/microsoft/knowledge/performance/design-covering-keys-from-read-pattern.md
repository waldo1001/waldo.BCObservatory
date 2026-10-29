---
id: guideline/microsoft/knowledge/performance/design-covering-keys-from-read-pattern
type: guideline
title: Design a read-pattern key and verify whether it covers the query
summary: A secondary key should serve a particular read, not a list of fields that happen to look important. The order of key fields affects which filters and sort orders it can support; IncludedFields supplies non-key payload columns without making them ordered key columns.
tier: official
language: en
tags:
  - includedfields
  - covering-index
  - secondary-key
  - filter
  - projection
  - selectivity
  - key
  - setrange
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:38.373Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0650086c6b0920625f394101d0c101431804385a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/design-covering-keys-from-read-pattern.md
    title: "microsoft/BCQuality: Design a read-pattern key and verify whether it covers the query"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/198
repo_path: microsoft/knowledge/performance/design-covering-keys-from-read-pattern.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - 19..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - IncludedFields
  - SetCurrentKey
  - SystemId
  - SetLoadFields
---

# Design a read-pattern key and verify whether it covers the query

> A secondary key should serve a particular read, not a list of fields that happen to look important. The order of key fields affects which filters and sort orders it can support; IncludedFields supplies non-key payload columns without making them ordered key columns.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/design-covering-keys-from-read-pattern.md) · microsoft layer · performance · BC 19.. · tier official · derived

## Description

A secondary key should serve a particular read, not a list of fields that happen to look important. The order of key fields affects which filters and sort orders it can support; `IncludedFields` supplies non-key payload columns without making them ordered key columns. `SetCurrentKey` sets an order, not an index hint (see [sort guidance](setcurrentkey-sets-sort-order-not-index-hint.md)). A key that supports the predicates is not necessarily a covering index, and coverage alone does not make a query selective.

## Best Practice

For a costly, frequent read, establish its equality and range filters, joins, required ordering, actual SQL projection, cardinality, and existing physical indexes. Test a key whose leading fields support the useful predicates; for example, customer equality followed by a posting-date range. On a nonclustered secondary key, consider `IncludedFields` for small payload fields read but not filtered or ordered. The sample's key supports customer/date filters and includes the explicit payload, but is **not demonstrated to cover the read**: Business Central also projects `SystemId` and system audit fields on partial records. Check the generated SQL, including automatically selected, clustered-key, and extension fields, against the physical index before claiming coverage. Adding more included fields has storage and write-maintenance costs; measure reads, sorts, lookups, latency, and writes before expanding it. The [Database Missing Indexes page](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/database-missing-indexes) supplies candidates, not a mandate to add every suggested key.

`IncludedFields` requires runtime 8.0 (BC 19) or later and cannot be set on a primary or clustered secondary key. An included field does not participate in `SetCurrentKey` matching or maintain a SIFT sum. If the item is also a selective predicate or required ordering column, evaluate it as a key field instead. Respect table-extension key field-ownership restrictions. See sample: [`design-covering-keys-from-read-pattern.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/design-covering-keys-from-read-pattern.good.al).

## Anti Pattern

Adding a key on output-only fields or requesting an unrelated `SetCurrentKey` ordering to "force" the optimizer to use that key, without establishing the read's filters or validating its plan. Likewise, calling an index covering just because it contains the fields explicitly listed in `SetLoadFields` ignores automatically projected columns. Do not report every uncovered read as a defect: a small table, a low-frequency query, or a write-heavy table may be better without another maintained index. See sample: [`design-covering-keys-from-read-pattern.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/design-covering-keys-from-read-pattern.bad.al).

## References

- [Table keys, included columns, and extension restrictions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-table-keys).
- [IncludedFields property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-includedfields-property).
- [Table keys and performance](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-table-keys-and-performance).

## Examples

- [Good: design-covering-keys-from-read-pattern.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/design-covering-keys-from-read-pattern.good.al)
- [Bad: design-covering-keys-from-read-pattern.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/design-covering-keys-from-read-pattern.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
