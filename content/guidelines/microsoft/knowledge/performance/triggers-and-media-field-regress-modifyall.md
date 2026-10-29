---
id: guideline/microsoft/knowledge/performance/triggers-and-media-field-regress-modifyall
type: guideline
title: Triggers, subscribers, and media fields can silently regress ModifyAll / DeleteAll
summary: ModifyAll and DeleteAll can limit SQL calls, but Microsoft documents that they revert to individual calls when the table has trigger code, related modify/delete/global/database event subscribers, active security filtering, Media or MediaSet fields, or fields added through companion tables.
tier: official
language: en
tags:
  - modifyall
  - deleteall
  - regression
  - triggers
  - media
  - security-filtering
  - companion-fields
  - subscriber
  - progress
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.825Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: dabeb31382e7f95d61e3d13ff901a3b384e51718
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/triggers-and-media-field-regress-modifyall.md
    title: "microsoft/BCQuality: Triggers, subscribers, and media fields can silently regress ModifyAll / DeleteAll"
    date: "2026-08-18"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/132
repo_path: microsoft/knowledge/performance/triggers-and-media-field-regress-modifyall.md
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
examples: 0
identifiers:
  - ModifyAll
  - DeleteAll
  - MediaSet
---

# Triggers, subscribers, and media fields can silently regress ModifyAll / DeleteAll

> ModifyAll and DeleteAll can limit SQL calls, but Microsoft documents that they revert to individual calls when the table has trigger code, related modify/delete/global/database event subscribers, active security filtering, Media or MediaSet fields, or fields added through companion tables.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/triggers-and-media-field-regress-modifyall.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`ModifyAll` and `DeleteAll` can limit SQL calls, but Microsoft documents that they [revert to individual calls](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-database-methods-and-performance-on-server#modifyall-and-deleteall) when the table has trigger code, related modify/delete/global/database event subscribers, active security filtering, `Media` or `MediaSet` fields, or fields added through companion tables. These conditions must be assessed from the target table and runtime context, not only from the visible bulk call.

## Best Practice

Before introducing a fallback condition, audit the `ModifyAll`/`DeleteAll` call sites that target the table and assess the regression cost. Once a bulk path already executes row by row, one explicit loop can be reasonable when it preserves the same trigger semantics and adds required per-row progress UX; consolidating several regressed bulk calls into one pass can also avoid repeated iteration. This is a narrow equivalence check, not a generic progress-dialog exemption: when no fallback condition applies, retain the bulk API.

## Anti Pattern

Adding a fallback condition to a hot table without auditing bulk-write call sites, or replacing a working bulk API with a per-row loop solely to show progress. The mirror anti-pattern is chaining several bulk calls on a table that already falls back, causing repeated row-by-row passes.

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
