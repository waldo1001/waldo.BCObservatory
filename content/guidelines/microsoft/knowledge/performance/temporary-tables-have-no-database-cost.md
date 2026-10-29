---
id: guideline/microsoft/knowledge/performance/temporary-tables-have-no-database-cost
type: guideline
title: Temporary tables avoid SQL I/O, not in-memory work
summary: A temporary table stores its rows in Business Central Server memory instead of a physical SQL table. Its reads and writes therefore do not incur SQL round-trips, locking, or SIFT maintenance.
tier: official
language: en
tags:
  - temporary-table
  - in-memory
  - findset
  - findfirst
  - get
  - no-db-cost
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:43.756Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a392e0bd647d6d88977055246f1b03005e19a711
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/temporary-tables-have-no-database-cost.md
    title: "microsoft/BCQuality: Temporary tables avoid SQL I/O, not in-memory work"
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
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/temporary-tables-have-no-database-cost.md
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
  - SetLoadFields
---

# Temporary tables avoid SQL I/O, not in-memory work

> A temporary table stores its rows in Business Central Server memory instead of a physical SQL table. Its reads and writes therefore do not incur SQL round-trips, locking, or SIFT maintenance.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/temporary-tables-have-no-database-cost.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A temporary table stores its rows in Business Central Server memory instead of a physical SQL table. Its reads and writes therefore do not incur SQL round-trips, locking, or SIFT maintenance. They still allocate memory and execute record filtering, key lookup, sorting, insertion, and iteration in the service tier; those costs grow with the temporary dataset and access pattern.

## Best Practice

Do not apply SQL-specific findings such as missing `SetLoadFields`, lock contention, or N+1 database round-trips to a temporary record. Still assess memory volume and repeated scans or lookups. In a matrix, if each cell re-sums the same group, calculate the totals once at the complete group key and reuse them; invalidate or adjust totals if cells change. For a pure key-to-value collection, consider an AL `Dictionary`; keep a temporary table when record fields, keys, filtering, or ordered iteration are required. Measure AL time and peak memory, not just SQL time.

See sample: [`temporary-tables-have-no-database-cost.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/temporary-tables-have-no-database-cost.good.al).

## Anti Pattern

Claiming that every temporary-table access pattern is free because no SQL is involved. A nested scan over a large in-memory buffer can still dominate service-tier CPU, while adding `SetLoadFields` to that buffer addresses a database cost that does not exist.

See sample: [`temporary-tables-have-no-database-cost.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/temporary-tables-have-no-database-cost.bad.al).

## Examples

- [Good: temporary-tables-have-no-database-cost.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/temporary-tables-have-no-database-cost.good.al)
- [Bad: temporary-tables-have-no-database-cost.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/temporary-tables-have-no-database-cost.bad.al)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
