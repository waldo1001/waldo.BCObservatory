---
id: guideline/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index
type: guideline
title: Review overlapping keys as a portfolio
summary: Adding a secondary key to a frequently written table maintains another SQL index for every affected write. Several keys with the same leading fields might be serving distinct filters, sort orders, unique constraints, or SIFT aggregates; they might instead be redundant payload variants.
tier: official
language: en
tags:
  - overlapping-keys
  - redundant-index
  - includedfields
  - sift
  - write-amplification
  - index-portfolio
  - key
  - setrange
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:43.841Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 61ed36e2e58e306d143b19387ff03799e7e9c253
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.md
    title: "microsoft/BCQuality: Review overlapping keys as a portfolio"
    date: "2026-09-29"
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
    - change/bcquality/198
repo_path: microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.md
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
  - SQLIndex
  - MaintainSQLIndex
  - SumIndexFields
  - MaintainSIFTIndex
  - IncludedFields
---

# Review overlapping keys as a portfolio

> Adding a secondary key to a frequently written table maintains another SQL index for every affected write. Several keys with the same leading fields might be serving distinct filters, sort orders, unique constraints, or SIFT aggregates; they might instead be redundant payload variants.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Adding a secondary key to a frequently written table maintains another SQL index for every affected write. Several keys with the same leading fields might be serving distinct filters, sort orders, unique constraints, or SIFT aggregates; they might instead be redundant payload variants. A shared prefix, absent `SetCurrentKey` calls, or low usage in a short window is not proof that a key is unused.

## Best Practice

Before adding or removing a key, inventory keys from the table and installed extensions and identify each key's consumers and purpose: seek, ordering, uniqueness, or aggregation. Check `SQLIndex`, `MaintainSQLIndex`, `SumIndexFields`, and `MaintainSIFTIndex`, not only the AL key name. For *confirmed* payload-only variants on BC 19 or later, a single nonclustered key with `IncludedFields` can be a consolidation candidate (see [read-pattern key design](design-covering-keys-from-read-pattern.md)); an included field cannot replace a key column used for ordering or a maintained SIFT sum. Including the explicit payload does not prove that the resulting index covers every automatically selected field. Measure representative read and write workloads, including periodic reports, integrations, and other companies, before and after a supported extension/schema change. Retain a rollback path for a critical reader that regresses. See sample: [`review-overlapping-keys-before-adding-an-index.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.good.al).

## Anti Pattern

Keeping another customer/date key for each displayed field without checking whether the trailing fields support distinct operations. Conversely, merging `(Customer, Date)` with `(Customer, Item, Date)` merely because they share a prefix can regress item-selective queries; removing a unique key or a SIFT aggregate changes more than write cost. Do not report a key as unused solely because AL never calls `SetCurrentKey` on it. See sample: [`review-overlapping-keys-before-adding-an-index.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.bad.al).

## References

- [Table keys: benefits, costs, and constraints](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-table-keys).
- [IncludedFields property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-includedfields-property).
- [Manage index usage (BC 2026 release wave 1 and later)](https://learn.microsoft.com/en-us/dynamics365/business-central/manage-indexes).
- [SIFT read/write trade-off](choose-maintainsiftindex-by-read-write-ratio.md).

## Examples

- [Good: review-overlapping-keys-before-adding-an-index.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.good.al)
- [Bad: review-overlapping-keys-before-adding-an-index.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/review-overlapping-keys-before-adding-an-index.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
