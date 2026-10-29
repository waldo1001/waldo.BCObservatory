---
id: guideline/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience
type: guideline
title: Choose TelemetryScope by who must receive the signal
summary: TelemetryScope::ExtensionPublisher sends a custom trace only to the Application Insights resource configured by the extension publisher. TelemetryScope::All also sends it to the environment's telemetry, where the customer or partner operating the tenant can query it.
tier: official
language: en
tags:
  - telemetryscope
  - extensionpublisher
  - all
  - audience
  - logmessage
  - application-insights
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.959Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c60887cf901c3ebca110dfe507b607ef3faccc05
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.md
    title: "microsoft/BCQuality: Choose TelemetryScope by who must receive the signal"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.md
layer: microsoft
kind: rule
domain: telemetry
bc_version:
  - 17..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ExtensionPublisher
  - DataClassification
---

# Choose TelemetryScope by who must receive the signal

> TelemetryScope::ExtensionPublisher sends a custom trace only to the Application Insights resource configured by the extension publisher. TelemetryScope::All also sends it to the environment's telemetry, where the customer or partner operating the tenant can query it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.md) · microsoft layer · telemetry · BC 17.. · tier official · derived

## Description

`TelemetryScope::ExtensionPublisher` sends a custom trace only to the Application Insights resource configured by the extension publisher. `TelemetryScope::All` also sends it to the environment's telemetry, where the customer or partner operating the tenant can query it. The compiler accepts either value, so a plausible-looking scope can silently hide an actionable signal from tenant operators or expose publisher-only implementation noise to them.

## Best Practice

Use `ExtensionPublisher` for internal diagnostics that only the app publisher can interpret, such as cache behavior or private algorithm state. Use `All` for signals the tenant operator can act on, such as an integration failure, quota warning, or setup problem. Decide the audience independently from `DataClassification`; privacy guidance still governs whether the payload may be emitted at all.

See sample: [`choose-telemetry-scope-by-audience.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.good.al).

## Anti Pattern

Defaulting every call to `All`, including low-level implementation diagnostics, or defaulting every call to `ExtensionPublisher` and thereby hiding customer-actionable failures from environment telemetry. Review only when the message and surrounding branch make the intended audience clear; an ambiguous diagnostic is not enough to infer the wrong scope.

See sample: [`choose-telemetry-scope-by-audience.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.bad.al).

## Examples

- [Good: choose-telemetry-scope-by-audience.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.good.al)
- [Bad: choose-telemetry-scope-by-audience.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/choose-telemetry-scope-by-audience.bad.al)

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
