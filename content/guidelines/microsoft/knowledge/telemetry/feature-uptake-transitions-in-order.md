---
id: guideline/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order
type: guideline
title: Emit FeatureTelemetry uptake states in lifecycle order
summary: FeatureTelemetry.LogUptake accepts Discovered, Set up, Used, and Undiscovered, but the platform records the forward transition only as Discovered to Set up to Used. If the first call for a feature is Set up or Used, no uptake telemetry is emitted. Undiscovered is the explicit reset from any state.
tier: official
language: en
tags:
  - featuretelemetry
  - loguptake
  - discovered
  - set-up
  - used
  - uptake-status
  - lifecycle
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.094Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ae632f922a5788f5eec3e610400cc6a56b2d54c8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.md
    title: "microsoft/BCQuality: Emit FeatureTelemetry uptake states in lifecycle order"
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
repo_path: microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.md
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
identifiers: []
---

# Emit FeatureTelemetry uptake states in lifecycle order

> FeatureTelemetry.LogUptake accepts Discovered, Set up, Used, and Undiscovered, but the platform records the forward transition only as Discovered to Set up to Used. If the first call for a feature is Set up or Used, no uptake telemetry is emitted. Undiscovered is the explicit reset from any state.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.md) · microsoft layer · telemetry · BC 18.. · tier official · derived

## Description

`FeatureTelemetry.LogUptake` accepts `Discovered`, `Set up`, `Used`, and `Undiscovered`, but the platform records the forward transition only as `Discovered` to `Set up` to `Used`. If the first call for a feature is `Set up` or `Used`, no uptake telemetry is emitted. `Undiscovered` is the explicit reset from any state.

## Best Practice

Log `Discovered` when the user encounters the feature, `Set up` after its setup is completed, and `Used` when the user attempts it. Keep the same feature name throughout the funnel. Review ordering only when the changed repository context shows the feature's lifecycle; a single isolated `Used` call cannot prove that earlier states are absent elsewhere.

See sample: [`feature-uptake-transitions-in-order.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.good.al).

## Anti Pattern

Introducing a feature whose only uptake call jumps directly to `Set up` or `Used`, or using different feature-name literals for successive states. The calls compile and run, but the funnel silently omits the invalid transition.

See sample: [`feature-uptake-transitions-in-order.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.bad.al).

## Examples

- [Good: feature-uptake-transitions-in-order.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.good.al)
- [Bad: feature-uptake-transitions-in-order.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/feature-uptake-transitions-in-order.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
