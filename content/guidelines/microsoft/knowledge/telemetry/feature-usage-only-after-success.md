---
id: guideline/microsoft/knowledge/telemetry/feature-usage-only-after-success
type: guideline
title: Call FeatureTelemetry.LogUsage only after successful use
summary: FeatureTelemetry.LogUsage means that a user successfully used the feature. An attempt belongs in the uptake funnel, while a failed operation belongs in LogError.
tier: official
language: en
tags:
  - featuretelemetry
  - logusage
  - logerror
  - success
  - tryfunction
  - feature-usage
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.171Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cc642d94cf4bd3da32f05ceec03431603f9c497b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-usage-only-after-success.md
    title: "microsoft/BCQuality: Call FeatureTelemetry.LogUsage only after successful use"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/telemetry/feature-usage-only-after-success.md
layer: microsoft
kind: rule
domain: telemetry
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
  - LogError
  - LogUsage
  - TryFunction
---

# Call FeatureTelemetry.LogUsage only after successful use

> FeatureTelemetry.LogUsage means that a user successfully used the feature. An attempt belongs in the uptake funnel, while a failed operation belongs in LogError.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-usage-only-after-success.md) · microsoft layer · telemetry · BC 18.. · tier official · derived

## Description

`FeatureTelemetry.LogUsage` means that a user successfully used the feature. An attempt belongs in the uptake funnel, while a failed operation belongs in `LogError`. Logging usage before checking the result inflates adoption metrics with failed attempts and makes usage telemetry disagree with the actual business outcome.

## Best Practice

Call `LogUsage` only after the operation has completed successfully. On a failure path, call `LogError` with the captured error text and call stack when the failure must be emitted explicitly. Use a past-tense event name for usage and a present-tense scenario name for errors.

See sample: [`feature-usage-only-after-success.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-usage-only-after-success.good.al).

## Anti Pattern

Calling `LogUsage` before a Boolean result, `TryFunction`, `Codeunit.Run`, or HTTP status has been checked, or calling it in both success and failure branches. Do not flag an attempt recorded with `LogUptake(...Used)`; unlike `LogUsage`, that state intentionally records an attempt.

See sample: [`feature-usage-only-after-success.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-usage-only-after-success.bad.al).

## Examples

- [Good: feature-usage-only-after-success.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-usage-only-after-success.good.al)
- [Bad: feature-usage-only-after-success.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-usage-only-after-success.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
