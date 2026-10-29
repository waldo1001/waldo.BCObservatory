---
id: guideline/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs
type: guideline
title: Use a job queue category to serialize conflicting jobs
summary: Different job queue entries can run at the same time. When two jobs update the same exclusive resource, concurrent execution can cause lock contention, deadlocks, or conflicting results.
tier: official
language: en
tags:
  - job-queue
  - category-code
  - concurrency
  - waiting
  - serialization
  - locking
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.211Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 190fb5e82401e2f1add66606060ae1e6738e1dc7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.md
    title: "microsoft/BCQuality: Use a job queue category to serialize conflicting jobs"
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
    - change/bcquality/184
    - change/bcquality/148
repo_path: microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.md
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

# Use a job queue category to serialize conflicting jobs

> Different job queue entries can run at the same time. When two jobs update the same exclusive resource, concurrent execution can cause lock contention, deadlocks, or conflicting results.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Different job queue entries can run at the same time. When two jobs update the same exclusive resource, concurrent execution can cause lock contention, deadlocks, or conflicting results. Within one company, entries with the same Job Queue Category Code are serialized: while one runs, another entry in that category waits.

## Best Practice

Assign the same non-empty Job Queue Category Code to job queue entries in the same company that must not overlap, regardless of which codeunit they run. Define categories around the shared resource or exclusivity requirement, not merely around object names. Leave independent jobs in different categories so they can still run concurrently. A category does not serialize work across companies or environments, or coordinate workers outside the job queue dispatcher. Protect shared external or cross-company resources with a separate application-level locking mechanism.

See sample: [`job-queue-category-code-serializes-conflicting-jobs.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.good.al).

## Anti Pattern

Creating or configuring multiple job queue entries that update the same exclusive resource while leaving their Job Queue Category Code empty or different. Do not flag jobs merely because they touch the same tables; the rule applies when their operation requires mutual exclusion.

See sample: [`job-queue-category-code-serializes-conflicting-jobs.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.bad.al).

## Examples

- [Good: job-queue-category-code-serializes-conflicting-jobs.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.good.al)
- [Bad: job-queue-category-code-serializes-conflicting-jobs.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-category-code-serializes-conflicting-jobs.bad.al)

## Changed by

- [#184 Fix Job Queue knowledge sample links](../../../../changes/bcquality/184.md), 2026-09-15
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
