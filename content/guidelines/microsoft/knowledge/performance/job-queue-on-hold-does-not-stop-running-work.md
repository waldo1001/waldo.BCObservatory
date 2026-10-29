---
id: guideline/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work
type: guideline
title: Putting a job queue entry on hold does not stop its current run
summary: The On Hold status prevents a job queue entry from starting again, but it does not cancel a run that is already in process. A long-running handler continues until it completes, fails, reaches a cancellation point implemented by the application, or its session is stopped externally.
tier: official
language: en
tags:
  - job-queue
  - on-hold
  - cancellation
  - in-process
  - long-running
  - stop-request
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.795Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b0411a843383209617cb6355eaf1ff5d0e9c9f59
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.md
    title: "microsoft/BCQuality: Putting a job queue entry on hold does not stop its current run"
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
repo_path: microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.md
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

# Putting a job queue entry on hold does not stop its current run

> The On Hold status prevents a job queue entry from starting again, but it does not cancel a run that is already in process. A long-running handler continues until it completes, fails, reaches a cancellation point implemented by the application, or its session is stopped externally.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

The On Hold status prevents a job queue entry from starting again, but it does not cancel a run that is already in process. A long-running handler continues until it completes, fails, reaches a cancellation point implemented by the application, or its session is stopped externally.

## Best Practice

Use On Hold to pause future scheduling. When a long-running operation must support graceful cancellation, store a separate application-owned stop request and check it before every bounded unit of work, including the first. Exit only at a point where completed work and the checkpoint are consistent. The code that resumes scheduling must clear the stop request before restarting the job. Use administrative session termination only when graceful cancellation is impossible.

See sample: [`job-queue-on-hold-does-not-stop-running-work.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.good.al).

## Anti Pattern

Polling the job queue entry's Status field from inside its handler and expecting a change to On Hold to cancel the active run. The status controls scheduling, not cooperative cancellation, so the handler can continue processing despite the operator's action.

See sample: [`job-queue-on-hold-does-not-stop-running-work.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.bad.al).

## Examples

- [Good: job-queue-on-hold-does-not-stop-running-work.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.good.al)
- [Bad: job-queue-on-hold-does-not-stop-running-work.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-on-hold-does-not-stop-running-work.bad.al)

## Changed by

- [#184 Fix Job Queue knowledge sample links](../../../../changes/bcquality/184.md), 2026-09-15
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
