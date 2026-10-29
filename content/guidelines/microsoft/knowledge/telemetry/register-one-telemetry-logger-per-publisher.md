---
id: guideline/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher
type: guideline
title: Register exactly one Telemetry Logger implementation per publisher
summary: The Telemetry and Feature Telemetry codeunits reach an extension publisher's telemetry through an implementation of the "Telemetry Logger" interface registered with "Telemetry Loggers".OnRegisterTelemetryLogger. The platform requires exactly one registration per app publisher.
tier: official
language: en
tags:
  - telemetry-logger
  - interface
  - register
  - publisher
  - featuretelemetry
  - onregistertelemetrylogger
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.657Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d282dc42911eb1ca0e5786cff34bca510e3daecf
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.md
    title: "microsoft/BCQuality: Register exactly one Telemetry Logger implementation per publisher"
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
  related:
    - to: object/codeunit/8703
      title: codeunit 8703 "Feature Telemetry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/interface/telemetry-logger
      title: interface "Telemetry Logger"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.md
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
  - LogMessage
  - FeatureTelemetry
---

# Register exactly one Telemetry Logger implementation per publisher

> The Telemetry and Feature Telemetry codeunits reach an extension publisher's telemetry through an implementation of the "Telemetry Logger" interface registered with "Telemetry Loggers".OnRegisterTelemetryLogger. The platform requires exactly one registration per app publisher.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.md) · microsoft layer · telemetry · BC 18.. · tier official · derived

## Description

The `Telemetry` and `Feature Telemetry` codeunits reach an extension publisher's telemetry through an implementation of the `"Telemetry Logger"` interface registered with `"Telemetry Loggers".OnRegisterTelemetryLogger`. The platform requires exactly one registration per app publisher. No registration prevents the module from working as expected; multiple registrations make the destination ambiguous and produce platform error telemetry.

## Best Practice

Place one internal logger implementation in one app for the publisher, forward its `LogMessage` method to `Session.LogMessage`, and register it from one event subscriber. Companion apps with the same publisher reuse that registration instead of each adding another. Evaluate absence only with repository or app-family context; a single-file diff cannot prove that no logger exists elsewhere.

See sample: [`register-one-telemetry-logger-per-publisher.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.good.al).

## Anti Pattern

Adding `FeatureTelemetry` calls to a complete app with no logger registration, or registering two logger implementations for apps that share the same publisher. The calls compile, but the telemetry module reports the missing or duplicate registration instead of behaving as intended.

See sample: [`register-one-telemetry-logger-per-publisher.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.bad.al).

## Examples

- [Good: register-one-telemetry-logger-per-publisher.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.good.al)
- [Bad: register-one-telemetry-logger-per-publisher.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/register-one-telemetry-logger-per-publisher.bad.al)

## Names

- [codeunit 8703 "Feature Telemetry"](../../../../objects/codeunit/8703.md) (possibly related: a code span names it)
- [interface "Telemetry Logger"](../../../../objects/interface/telemetry-logger.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
