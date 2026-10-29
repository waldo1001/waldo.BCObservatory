---
id: guideline/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion
type: guideline
title: Use DeleteAll for filtered bulk deletion
summary: DeleteAll(false) is eligible for a set-based SQL delete with the record variable's filters applied, but it is not guaranteed to stay one statement.
tier: official
language: en
tags:
  - deleteall
  - bulk-delete
  - sql
  - ondelete
  - trigger-bypass
  - security-filtering
  - media
  - companion-fields
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:43.849Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8c847b46aa4e3b70de11df585739caf8a4ff5b93
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.md
    title: "microsoft/BCQuality: Use DeleteAll for filtered bulk deletion"
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
    - change/bcquality/132
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.md
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
  - DeleteAll
  - MediaSet
  - RunTrigger
  - OnDelete
  - OnBeforeDelete
  - OnAfterDelete
  - FindSet
---

# Use DeleteAll for filtered bulk deletion

> DeleteAll(false) is eligible for a set-based SQL delete with the record variable's filters applied, but it is not guaranteed to stay one statement.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`DeleteAll(false)` is eligible for a set-based SQL delete with the record variable's filters applied, but it is not guaranteed to stay one statement. Microsoft documents that `DeleteAll` [reverts to individual calls](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-database-methods-and-performance-on-server#modifyall-and-deleteall) when the table has trigger code, related delete/global/database event subscribers, active security filtering, `Media` or `MediaSet` fields, or fields added through companion tables. Setting `RunTrigger` to false skips the base table `OnDelete` trigger, but [table-extension `OnBeforeDelete` and `OnAfterDelete` triggers still run](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-deleteall-method#remarks).

## Best Practice

Use filtered `DeleteAll(false)` for purpose-built staging or cleanup tables only after verifying that base-table `OnDelete` logic is unnecessary and that trigger code, related subscribers, security filtering, media fields, and companion fields do not add required per-row behavior or regress the bulk path. If deletion requires per-row business logic, keep an explicit triggered operation instead of simulating trigger execution separately.

See sample: [`use-deleteall-for-filtered-bulk-deletion.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.good.al).

## Anti Pattern

Iterating with `FindSet` + `Delete(false)` to clear a filtered staging batch that has no delete logic or fallback condition. The reverse mistake is assuming `DeleteAll` is always one SQL statement without checking the documented fallback conditions.

See sample: [`use-deleteall-for-filtered-bulk-deletion.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.bad.al).

## Examples

- [Good: use-deleteall-for-filtered-bulk-deletion.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.good.al)
- [Bad: use-deleteall-for-filtered-bulk-deletion.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-deleteall-for-filtered-bulk-deletion.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03
- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
