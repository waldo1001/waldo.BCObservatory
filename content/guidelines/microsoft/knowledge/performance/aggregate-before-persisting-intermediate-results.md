---
id: guideline/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results
type: guideline
title: Aggregate source rows before persisting completed results
summary: A batch may repeatedly calculate the same group total while inserting and updating persistent working rows, even though only one completed result per group is needed.
tier: official
language: en
tags:
  - query
  - grouping
  - aggregate
  - intermediate-results
  - temporary-buffer
  - persistent-writes
  - calcsums
  - modify
  - method-sum
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:37.817Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bdff7ca465e66db9d1433dddf221f218017a46f0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.md
    title: "microsoft/BCQuality: Aggregate source rows before persisting completed results"
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
repo_path: microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.md
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
identifiers: []
---

# Aggregate source rows before persisting completed results

> A batch may repeatedly calculate the same group total while inserting and updating persistent working rows, even though only one completed result per group is needed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A batch may repeatedly calculate the same group total while inserting and updating persistent working rows, even though only one completed result per group is needed. An AL Query with `Method = Sum` groups by its other output columns, so the required grain can often be computed from qualifying source rows before writing final output. This is a data-path change, not a blanket replacement for posting or for intermediate rows needed for recovery or business behavior.

## Best Practice

Specify the output grain and whether absent groups should produce zero rows. Apply source filters (including cutoff dates), aggregate at exactly that grain, and write only completed results; a small temporary buffer can separate the query from persistent output, but streaming or bounded units may be better for large grouped sets. Avoid a one-to-many join that duplicates quantities or an extra output column that silently changes the grouping. Preserve security filters, signs, units, FlowFilters, relevant master-data restrictions, transaction/trigger behavior, and acceptable read consistency; a shared date cutoff does not create a snapshot. Compare complete keyed outputs and measure source reads, repeated calculations, temporary memory, and persistent writes. See sample: [`aggregate-before-persisting-intermediate-results.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.good.al).

## Anti Pattern

For an output that only needs one signed total per item/location with qualifying entries, summing the same source range and rewriting a persistent summary for *every* entry. Do not flag incremental persisted state that is required for locking, resumability, or downstream processing, or require an in-memory copy of all raw history to perform SQL grouping. See sample: [`aggregate-before-persisting-intermediate-results.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.bad.al).

## References

- [Aggregating data in query objects](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-query-totals-grouping).
- [Query performance](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-query-objects-and-performance).
- [Buffered inserts](preserve-buffered-inserts-by-separating-target-reads.md).

## Examples

- [Good: aggregate-before-persisting-intermediate-results.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.good.al)
- [Bad: aggregate-before-persisting-intermediate-results.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/aggregate-before-persisting-intermediate-results.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
