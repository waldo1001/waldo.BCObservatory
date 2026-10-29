---
id: guideline/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext
type: guideline
title: FeatureTelemetry.LogError emits more than caller custom dimensions
summary: FeatureTelemetry.LogError emits its ErrorText as the telemetry message and adds it as alErrorText. The overloads with ErrorCallStack also add alErrorCallStack.
tier: official
language: en
tags:
  - featuretelemetry
  - logerror
  - errortext
  - errorcallstack
  - alerrortext
  - alerrorcallstack
  - customdimensions
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:49.491Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 64a9b12f0c80cb889bf35acc75279ea742d982eb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.md
    title: "microsoft/BCQuality: FeatureTelemetry.LogError emits more than caller custom dimensions"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-customdimensions-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/99
repo_path: microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - 18..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ErrorText
  - alErrorText
  - ErrorCallStack
  - alErrorCallStack
  - CustomDimensions
  - SystemMetadata
  - LogError
---

# FeatureTelemetry.LogError emits more than caller custom dimensions

> FeatureTelemetry.LogError emits its ErrorText as the telemetry message and adds it as alErrorText. The overloads with ErrorCallStack also add alErrorCallStack.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.md) · microsoft layer · privacy · BC 18.. · tier official · derived

## Description

`FeatureTelemetry.LogError` emits its `ErrorText` as the telemetry message and adds it as `alErrorText`. The overloads with `ErrorCallStack` also add `alErrorCallStack`. These dimensions are produced in addition to the caller-supplied `CustomDimensions` dictionary, and the Feature Telemetry implementation sends the event as `SystemMetadata`.

## Best Practice

Review the dedicated error arguments as telemetry payload. Capture `GetLastErrorText(true)` when scrubbed platform error text is sufficient, and pass `GetLastErrorCallStack()` only as a call stack. Keep custom dimensions non-personal too.

See sample: [`featuretelemetry-logerror-implicit-errortext.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.good.al).

## Anti Pattern

Approving a `LogError` call because its explicit dictionary contains only safe values while it passes unsanitized `GetLastErrorText()` or arbitrary context through `ErrorText` or `ErrorCallStack`. Those arguments become telemetry dimensions outside the dictionary.

See sample: [`featuretelemetry-logerror-implicit-errortext.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.bad.al).

## Examples

- [Good: featuretelemetry-logerror-implicit-errortext.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.good.al)
- [Bad: featuretelemetry-logerror-implicit-errortext.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/featuretelemetry-logerror-implicit-errortext.bad.al)

## Names

- [ErrorInfo.CustomDimensions(\[Dictionary of \[Text, Text\]\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-customdimensions-method) (names CustomDimensions)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
