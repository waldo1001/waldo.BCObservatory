---
id: guideline/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification
type: guideline
title: Every `Session.LogMessage` call must specify `DataClassification`
summary: Session.LogMessage writes a record to the telemetry pipeline. The platform requires the call to carry an explicit DataClassification argument so that the entry can be routed and retained correctly downstream — telemetry consumers, GDPR exports, and Application Insights dashboards all rely on it.
tier: official
language: en
tags:
  - session-logmessage
  - telemetry
  - data-classification
  - verbosity
  - telemetry-scope
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:50.373Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2febcaee35980acc23a37ef3d6ab3f0698d305ec
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.md
    title: "microsoft/BCQuality: Every `Session.LogMessage` call must specify `DataClassification`"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.md
layer: microsoft
kind: rule
domain: privacy
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
  - DataClassification
  - TelemetryScope
---

# Every `Session.LogMessage` call must specify `DataClassification`

> Session.LogMessage writes a record to the telemetry pipeline. The platform requires the call to carry an explicit DataClassification argument so that the entry can be routed and retained correctly downstream — telemetry consumers, GDPR exports, and Application Insights dashboards all rely on it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`Session.LogMessage` writes a record to the telemetry pipeline. The platform requires the call to carry an explicit `DataClassification` argument so that the entry can be routed and retained correctly downstream — telemetry consumers, GDPR exports, and Application Insights dashboards all rely on it. The compiler accepts overloads without the parameter (the two-argument and three-argument shapes that omit it), but for any telemetry that ships to customers, the `DataClassification`-bearing overload is the correct one.

## Best Practice

Use the overload that takes `Verbosity`, `DataClassification`, and `TelemetryScope`. For payload-free operational telemetry that does not embed customer data, `DataClassification::SystemMetadata` is the right value. Choose `TelemetryScope::ExtensionPublisher` for telemetry meant for the publishing partner only; `TelemetryScope::All` also forwards to the customer's tenant telemetry.

See sample: [`session-logmessage-requires-dataclassification.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.good.al).

## Anti Pattern

Calling `Session.LogMessage('0003', 'Operation completed', Verbosity::Normal)` — the overload omits `DataClassification` and leaves the platform without the information needed to classify the entry. Detection signal: a `Session.LogMessage` call whose argument list ends at `Verbosity`.

See sample: [`session-logmessage-requires-dataclassification.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.bad.al).

## Examples

- [Good: session-logmessage-requires-dataclassification.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.good.al)
- [Bad: session-logmessage-requires-dataclassification.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/session-logmessage-requires-dataclassification.bad.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
