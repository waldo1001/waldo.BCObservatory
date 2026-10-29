---
id: guideline/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii
type: guideline
title: "`FeatureTelemetry` `CustomDimensions` follow the same privacy rules as `Session.LogMessage`"
summary: Codeunit "Feature Telemetry" is the second telemetry surface in AL. Its methods — LogUsage(), LogUptake() and LogError() — each accept a CustomDimensions dictionary parameter whose contents are sent to telemetry as-is.
tier: official
language: en
tags:
  - feature-telemetry
  - customdimensions
  - logusage
  - loguptake
  - logerror
  - pii
  - euii
  - eupi
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:49.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f34804b6b607ff33346395a390b7f5f2232b5c27
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.md
    title: "microsoft/BCQuality: `FeatureTelemetry` `CustomDimensions` follow the same privacy rules as `Session.LogMessage`"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-customdimensions-method
  objects:
    - object/codeunit/8703
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.md
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
  - FeatureTelemetry
  - CustomDimensions
  - CustomerContent
  - LogUptake
  - LogUsage
---

# `FeatureTelemetry` `CustomDimensions` follow the same privacy rules as `Session.LogMessage`

> Codeunit "Feature Telemetry" is the second telemetry surface in AL. Its methods — LogUsage(), LogUptake() and LogError() — each accept a CustomDimensions dictionary parameter whose contents are sent to telemetry as-is.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

`Codeunit "Feature Telemetry"` is the second telemetry surface in AL. Its methods — `LogUsage()`, `LogUptake()` and `LogError()` — each accept a `CustomDimensions` dictionary parameter whose contents are sent to telemetry as-is. The platform does not classify per-dimension values for you, so any customer or employee data placed into the dictionary is logged verbatim. The privacy rules that apply to `Session.LogMessage` message text apply to every value in `CustomDimensions`: no customer or employee names, email addresses, phone numbers (`CustomerContent`/EUII); no employee codes, user IDs or user security IDs (EUPI); no user-provided content (addresses, descriptions, notes); no `GetLastErrorText()` output.

## Best Practice

Pass only non-personal context through `CustomDimensions` — feature names, status enums, counts, error codes, durations. For uptake or usage signals that do not need per-call context, prefer the parameterless overload of `LogUptake`/`LogUsage` over a `CustomDimensions` dictionary that risks accreting PII over time.

See sample: [`featuretelemetry-customdimensions-no-pii.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.good.al).

## Anti Pattern

`CustomDimensions.Add('EmployeeNo', ExpenseHeader."Employee No.")` followed by `FeatureTelemetry.LogUsage(...)` — the employee number is a pseudonymous user identifier (EUPI) and is now in telemetry. Same pattern with `'UserName'`, `'CustomerEmail'`, `'AttachmentName'` etc.

See sample: [`featuretelemetry-customdimensions-no-pii.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.bad.al).

## Examples

- [Good: featuretelemetry-customdimensions-no-pii.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.good.al)
- [Bad: featuretelemetry-customdimensions-no-pii.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-customdimensions-no-pii.bad.al)

## Names

- [codeunit 8703 "Feature Telemetry"](../../../../objects/codeunit/8703.md) (names this object)
- [ErrorInfo.CustomDimensions(\[Dictionary of \[Text, Text\]\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-customdimensions-method) (names CustomDimensions)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
