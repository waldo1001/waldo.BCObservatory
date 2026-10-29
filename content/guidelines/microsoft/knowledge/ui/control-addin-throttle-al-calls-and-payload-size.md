---
id: guideline/microsoft/knowledge/ui/control-addin-throttle-al-calls-and-payload-size
type: guideline
title: Serialize control add-in AL calls and keep payloads small
summary: InvokeExtensibilityMethod crosses from a control add-in into the Business Central service.
tier: official
language: en
tags:
  - control-add-in
  - invokeextensibilitymethod
  - success-callback
  - throttling
  - payload
  - reduced-functionality
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:01.697Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 92d29b5ac258449976e0a19c77e445fdab1b571b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-throttle-al-calls-and-payload-size.md
    title: "microsoft/BCQuality: Serialize control add-in AL calls and keep payloads small"
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
    - change/bcquality/100
repo_path: microsoft/knowledge/ui/control-addin-throttle-al-calls-and-payload-size.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 20..
technologies:
  - javascript
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - InvokeExtensibilityMethod
  - ClientServicesMaxUploadSize
---

# Serialize control add-in AL calls and keep payloads small

> InvokeExtensibilityMethod crosses from a control add-in into the Business Central service.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-throttle-al-calls-and-payload-size.md) · microsoft layer · ui · BC 20.. · tier official · derived

## Description

`InvokeExtensibilityMethod` crosses from a control add-in into the Business Central service. Repeated calls that outpace AL execution fill the communication channel, trigger reduced-functionality warnings, and can be queued, throttled, or rejected; an oversized single payload can also be rejected immediately. The success and error callbacks exist so the add-in can bound this traffic.

## Best Practice

Send byte-bounded chunks and invoke the next AL event only from the previous call's completion callback. Handle the error callback and stop until the caller explicitly retries or discards the failed chunk. There is no universal safe threshold, so measure the serialized argument array, reserve transport headroom below the server's `ClientServicesMaxUploadSize`, and reject an individual item that exceeds the configured budget.

See sample: [`control-addin-throttle-al-calls-and-payload-size.good.js`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-throttle-al-calls-and-payload-size.good.js).

## Anti Pattern

Calling `InvokeExtensibilityMethod` on an interval without tracking completion, recursively creating intervals, or serializing an entire unbounded dataset into one call. These patterns can overwhelm the client-service channel or exceed the upload limit.

See sample: [`control-addin-throttle-al-calls-and-payload-size.bad.js`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/control-addin-throttle-al-calls-and-payload-size.bad.js).

## Source

[Control add-in performance best practices](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-bestpractices), [InvokeExtensibilityMethod](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods/devenv-invokeextensibility-method), and [control add-in resiliency](https://learn.microsoft.com/dynamics365/business-central/across-controladdin-resiliency).

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
