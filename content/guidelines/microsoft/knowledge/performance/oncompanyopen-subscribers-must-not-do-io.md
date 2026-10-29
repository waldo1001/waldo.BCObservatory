---
id: guideline/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io
type: guideline
title: Session-open subscribers must not do I/O
summary: OnCompanyOpen, OnCompanyOpenCompleted, and System Initialization.OnAfterLogin run while the session is being created. The platform waits until every subscriber returns before the UI, an API call, or a background session can proceed.
tier: official
language: en
tags:
  - oncompanyopen
  - onafterlogin
  - session-start
  - httpclient
  - subscriber
  - login
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.902Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 95ac3d76b70a23e7934854766a833039795168bb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.md
    title: "microsoft/BCQuality: Session-open subscribers must not do I/O"
    date: "2026-09-14"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/148
    - change/bcquality/174
    - change/bcquality/153
  related:
    - to: object/codeunit/150
      title: codeunit 150 "System Initialization"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.md
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
  - OnCompanyOpen
  - OnCompanyOpenCompleted
  - HttpClient
  - FindSet
  - OnAfterLogin
  - CalcFields
---

# Session-open subscribers must not do I/O

> OnCompanyOpen, OnCompanyOpenCompleted, and System Initialization.OnAfterLogin run while the session is being created. The platform waits until every subscriber returns before the UI, an API call, or a background session can proceed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

`OnCompanyOpen`, `OnCompanyOpenCompleted`, and `System Initialization`.OnAfterLogin run while the session is being created. The platform waits until every subscriber returns before the UI, an API call, or a background session can proceed. `HttpClient` or a heavy `FindSet` here delays **every** session type, not just the user who "opened the company". Agents still put warmup sync, license checks, and HTTP probes on these events because they look like an application startup hook.

## Best Practice

Keep company-open subscribers to cheap in-memory work: set a flag, enqueue a job-queue entry, or `TaskScheduler.CreateTask`. Perform HTTP and large SQL after the session is running, in that background work. When the subscriber can run repeatedly, use `store-scheduled-task-id-to-avoid-duplicate-tasks.md` to avoid creating the same logical task more than once.

See sample: [`oncompanyopen-subscribers-must-not-do-io.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.good.al).

## Anti Pattern

An `OnAfterLogin` / `OnCompanyOpenCompleted` subscriber that calls `HttpClient` or scans a ledger. Detection signal: `HttpClient`, `FindSet`, or `CalcFields` inside a subscriber bound to those events.

See sample: [`oncompanyopen-subscribers-must-not-do-io.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.bad.al).

## Examples

- [Good: oncompanyopen-subscribers-must-not-do-io.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.good.al)
- [Bad: oncompanyopen-subscribers-must-not-do-io.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/oncompanyopen-subscribers-must-not-do-io.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)
- [codeunit 150 "System Initialization"](../../../../objects/codeunit/150.md) (possibly related: a code span names it)

## Changed by

- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
