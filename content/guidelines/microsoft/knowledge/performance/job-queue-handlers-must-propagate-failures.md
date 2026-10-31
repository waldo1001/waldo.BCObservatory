---
id: guideline/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures
type: guideline
title: Job queue handlers must propagate execution failures
summary: The job queue dispatcher can mark an entry as failed, record the error, and apply its configured retry behavior only when the handler terminates with an error.
tier: official
language: en
tags:
  - job-queue
  - error-propagation
  - tryfunction
  - retry
  - dispatcher
  - job-queue-log
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:15:35.028Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 361fc7d4f523b786e32e5cf6d58a713ca2393093
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.md
    title: "microsoft/BCQuality: Job queue handlers must propagate execution failures"
    date: "2026-09-15"
    commit: a56b272c6b950c2a423bbeda190585cd53beca2a
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
repo_path: microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.md
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
  - TryFunction
---

# Job queue handlers must propagate execution failures

> The job queue dispatcher can mark an entry as failed, record the error, and apply its configured retry behavior only when the handler terminates with an error.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

The job queue dispatcher can mark an entry as failed, record the error, and apply its configured retry behavior only when the handler terminates with an error. A handler that catches a failed `TryFunction` or Boolean-returning operation and then returns normally reports success to the dispatcher, even though its work did not complete.

## Best Practice

Let an error that invalidates the whole run propagate out of the job queue entry point. Add context only when it helps an operator diagnose the failure and does not expose sensitive data. Per-item failures may be collected deliberately, but the batch must persist or emit an observable aggregate outcome instead of silently treating incomplete work as success.

See sample: [`job-queue-handlers-must-propagate-failures.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.good.al).

## Anti Pattern

Calling a `TryFunction`, `Codeunit.Run`, or another Boolean-returning operation from a job queue handler and using `exit` or normal fall-through on failure without recording an intentional partial-success outcome. The dispatcher sees a successful return, so the entry's status and log do not represent the failed work and configured retries are not applied.

See sample: [`job-queue-handlers-must-propagate-failures.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.bad.al).

## Examples

- [Good: job-queue-handlers-must-propagate-failures.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.good.al)
- [Bad: job-queue-handlers-must-propagate-failures.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-handlers-must-propagate-failures.bad.al)

## Changed by

- [#184 Fix Job Queue knowledge sample links](../../../../changes/bcquality/184.md), 2026-09-15
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14

---

From microsoft/BCQuality at a56b272, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
