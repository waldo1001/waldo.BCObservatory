---
id: guideline/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects
type: guideline
title: Set DataAccessIntent ReadOnly on analytical objects
summary: DataAccessIntent was introduced at runtime 5.0 (BC 16) and has no effect in earlier versions. Reports, API pages (PageType = API with Editable = false), and queries that only read can run against a read replica when DataAccessIntent = ReadOnly.
tier: official
language: en
tags:
  - dataaccessintent
  - read-only
  - read-scale-out
  - report
  - api-page
  - query
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:41.348Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 943242d8653804454d7b59c2552c702afb8c0a6b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.md
    title: "microsoft/BCQuality: Set DataAccessIntent ReadOnly on analytical objects"
    date: "2026-09-09"
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
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - 16..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - DataAccessIntent
---

# Set DataAccessIntent ReadOnly on analytical objects

> DataAccessIntent was introduced at runtime 5.0 (BC 16) and has no effect in earlier versions. Reports, API pages (PageType = API with Editable = false), and queries that only read can run against a read replica when DataAccessIntent = ReadOnly.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.md) · microsoft layer · performance · BC 16.. · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`DataAccessIntent` was introduced at runtime 5.0 (BC 16) and has no effect in earlier versions. Reports, API pages (`PageType = API` with `Editable = false`), and queries that only read can run against a read replica when `DataAccessIntent = ReadOnly`. For queries, replica routing only applies when the query is exposed via OData/API; running a query in AL code is unaffected. Without the property these objects hit the primary replica and compete with posting. Agents omit it because the default is read-write and the object "only reads" in AL. The replica routing is a metadata switch, not something the compiler infers from the absence of `Modify`.

## Best Practice

On report objects and `PageType = API` pages with `Editable = false` that never write, set `DataAccessIntent = ReadOnly`. For query objects, set it when the query is consumed via OData or an API endpoint. Keep the default on objects that insert, modify, or call a write codeunit from a processing-only report.

See sample: [`dataaccessintent-readonly-on-analytical-objects.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.good.al).

## Anti Pattern

A listing report or API query with no `DataAccessIntent` that scans G/L or sales lines. The object is read-only in practice and still loads the primary.

See sample: [`dataaccessintent-readonly-on-analytical-objects.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.bad.al).

## Examples

- [Good: dataaccessintent-readonly-on-analytical-objects.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.good.al)
- [Bad: dataaccessintent-readonly-on-analytical-objects.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/dataaccessintent-readonly-on-analytical-objects.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
