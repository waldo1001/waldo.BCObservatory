---
id: guideline/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope
type: guideline
title: Reuse repeated filtered results within a correct cache scope
summary: A loop can ask the same filtered existence or calculation question for many rows sharing a business key, or two phases can ask it for the same rows. Unlike repeated primary-key Get calls, non-keyed filtered lookups are not automatically answered by the primary-key record cache.
tier: official
language: en
tags:
  - cache
  - dictionary
  - filtered-lookup
  - isempty
  - repeated-query
  - invalidation
  - scope
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:38.134Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b85bff06655a756a2c66495450a4eab2b557c639
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.md
    title: "microsoft/BCQuality: Reuse repeated filtered results within a correct cache scope"
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
repo_path: microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.md
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
  - IsEmpty
---

# Reuse repeated filtered results within a correct cache scope

> A loop can ask the same filtered existence or calculation question for many rows sharing a business key, or two phases can ask it for the same rows. Unlike repeated primary-key Get calls, non-keyed filtered lookups are not automatically answered by the primary-key record cache.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A loop can ask the same filtered existence or calculation question for many rows sharing a business key, or two phases can ask it for the same rows. Unlike repeated primary-key `Get` calls, non-keyed filtered lookups are not automatically answered by the primary-key record cache. Memoization can remove repeated AL and data-access work, but a cache keyed by too few inputs or kept past a data change returns the wrong answer. A single pass over lines with unknown, possibly distinct item numbers does not establish reuse.

## Best Practice

First reuse an already-loaded result if valid. Require evidence that complete lookup keys actually repeat, such as repeated queries for the same item in two passes over an unchanged line set (as in the sample), or measured cache hits. For a repeated, stable filtered lookup, keep a local dictionary for one operation, keyed by every input that affects the result (including company, filters, date, unit, currency, and quantity where applicable). Cache negative results as well as positive ones; distinguish a missing dictionary entry from an entry whose value is `false`. If underlying records can change during the run, update or invalidate the entry, or do not cache it. Bound entries or process in chunks when key cardinality is large. Check distinct complete keys, hits/misses, SQL work, AL time, and memory before adding a cache to a low-reuse workload. Use a temporary table for record-shaped values or multiple keys. See sample: [`cache-repeated-filtered-results-with-explicit-scope.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.good.al).

## Anti Pattern

Running the same filtered `IsEmpty` in two passes over the same unchanged lines (even when every item number is distinct within a pass), or caching a price by item alone when customer, variant, date, and quantity affect it. Do **not** infer a cache opportunity from a single pass with no established key reuse, such as visiting each distinct Item once; the [good sample](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.good.al) also shows this valid direct lookup. Do not equate each `Get` with a SQL round trip or automatically wrap a cached primary-key read in another dictionary; see [primary-key cache exceptions](primary-key-get-in-loop-is-transaction-cached.md). See sample: [`cache-repeated-filtered-results-with-explicit-scope.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.bad.al).

## References

- [Data access and caching](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-data-access).
- [Dictionary type and `Get`](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/dictionary/dictionary-data-type).

## Examples

- [Good: cache-repeated-filtered-results-with-explicit-scope.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.good.al)
- [Bad: cache-repeated-filtered-results-with-explicit-scope.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/cache-repeated-filtered-results-with-explicit-scope.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
