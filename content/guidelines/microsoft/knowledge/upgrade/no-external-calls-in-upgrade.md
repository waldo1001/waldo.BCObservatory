---
id: guideline/microsoft/knowledge/upgrade/no-external-calls-in-upgrade
type: guideline
title: No external calls inside upgrade codeunits
summary: "Upgrade code runs in a constrained execution window: the tenant is mid-upgrade, no users are signed in, and a failure aborts the entire transaction."
tier: official
language: en
tags:
  - httpclient
  - dotnet
  - external-service
  - network-call
  - blocking
  - upgrade-rollback
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.911Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f04fb4068bdaf14e72420cd3b89c8b1482933078
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-external-calls-in-upgrade.md
    title: "microsoft/BCQuality: No external calls inside upgrade codeunits"
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
repo_path: microsoft/knowledge/upgrade/no-external-calls-in-upgrade.md
layer: microsoft
kind: rule
domain: upgrade
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
  - OnUpgradePerCompany
  - OnUpgradePerDatabase
---

# No external calls inside upgrade codeunits

> Upgrade code runs in a constrained execution window: the tenant is mid-upgrade, no users are signed in, and a failure aborts the entire transaction.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-external-calls-in-upgrade.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Upgrade code runs in a constrained execution window: the tenant is mid-upgrade, no users are signed in, and a failure aborts the entire transaction. An external HTTP call, DotNet interop call, or any other I/O to a system outside Business Central can hang or fail for reasons completely unrelated to the upgrade — DNS, expired credentials, a service that is itself being upgraded — and the upgrade fails with it. Rolling back from such a failure is hard because the upgrade pipeline assumes its work is deterministic.

The rule applies inside any codeunit with `Subtype = Upgrade` and to any procedure transitively invoked from `OnUpgrade...` triggers. The same calls in regular runtime code — pages, table triggers, normal codeunits, background jobs — are fine.

## Best Practice

Defer external calls to runtime code. If a piece of upgrade work conceptually needs data from an external service, set a flag or write a queue row during upgrade and have the runtime code make the call later (for example on first user sign-in or via job queue), where retries and degraded modes are tractable.

See sample: [`no-external-calls-in-upgrade.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-external-calls-in-upgrade.good.al).

## Anti Pattern

Calling `HttpClient.Get`, `HttpClient.Post`, or DotNet interop methods from `OnUpgradePerCompany`, `OnUpgradePerDatabase`, or any procedure they invoke.

See sample: [`no-external-calls-in-upgrade.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-external-calls-in-upgrade.bad.al).

## Examples

- [Good: no-external-calls-in-upgrade.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-external-calls-in-upgrade.good.al)
- [Bad: no-external-calls-in-upgrade.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-external-calls-in-upgrade.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
