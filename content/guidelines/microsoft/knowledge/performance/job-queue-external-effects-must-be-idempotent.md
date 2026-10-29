---
id: guideline/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent
type: guideline
title: Job queue external effects must be idempotent
summary: A job queue handler can successfully create something in an external system and then fail while updating Business Central. Business Central rolls back its database changes, but it cannot roll back the external request.
tier: official
language: en
tags:
  - job-queue
  - idempotency
  - retry
  - outbox
  - httpclient
  - external-effect
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.131Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 66bb11b466be32143c152fe12d83cb73d8b3c620
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.md
    title: "microsoft/BCQuality: Job queue external effects must be idempotent"
    date: "2026-09-15"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
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
repo_path: microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.md
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
  - SystemId
  - idempotencyKey
---

# Job queue external effects must be idempotent

> A job queue handler can successfully create something in an external system and then fail while updating Business Central. Business Central rolls back its database changes, but it cannot roll back the external request.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

A job queue handler can successfully create something in an external system and then fail while updating Business Central. Business Central rolls back its database changes, but it cannot roll back the external request. The same work can later run again through configured retries, recurrence, rescheduling, or manual restart. Without a way for the external system to recognize the repeated request, a later run can create a duplicate shipment, payment, notification, or other side effect.

## Best Practice

Use a stable request ID that exists before the job queue processes the outbox row. For example, include the outbox record's `SystemId` as an `idempotencyKey` value in the JSON body of every POST attempt. The external service must enforce uniqueness on that value: when it receives the key again, it returns the existing record instead of creating another one. Delete the outbox row only after the external call and all required local updates succeed.

A `Processed` flag set after the external call does not solve this failure window. If a later AL error rolls back that flag, the outbox row again looks unprocessed even though the external operation already happened.

See sample: [`job-queue-external-effects-must-be-idempotent.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.good.al).

## Anti Pattern

Sending a state-changing request from a job queue handler with no stable request ID understood by the external API. Specifically, look for this sequence: read an outbox row, call `HttpClient.Post` or another side-effecting API, update or delete local data, and propagate an error after which the same outbox row can be processed again. The key may be part of the request body, URI, headers, or an existing business key; a naturally idempotent remote operation is already safe and should not be flagged.

See sample: [`job-queue-external-effects-must-be-idempotent.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.bad.al).

## Examples

- [Good: job-queue-external-effects-must-be-idempotent.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.good.al)
- [Bad: job-queue-external-effects-must-be-idempotent.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/job-queue-external-effects-must-be-idempotent.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#184 Fix Job Queue knowledge sample links](../../../../changes/bcquality/184.md), 2026-09-15
- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
