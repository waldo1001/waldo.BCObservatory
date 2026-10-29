---
id: guideline/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity
type: guideline
title: Match telemetry Verbosity to the signal's actual severity
summary: Verbosity becomes the Application Insights severityLevel and participates in on-premises diagnostic trace filtering. Critical represents abnormal termination, Error a severe error, Warning a warning, Normal a non-error event, and Verbose detailed tracing.
tier: official
language: en
tags:
  - verbosity
  - severitylevel
  - critical
  - error
  - warning
  - normal
  - verbose
  - logmessage
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.531Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cec444ac6b7f437bcca4ad98568d82dddd52a2b6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.md
    title: "microsoft/BCQuality: Match telemetry Verbosity to the signal's actual severity"
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
repo_path: microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.md
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
  - severityLevel
  - TryFunction
---

# Match telemetry Verbosity to the signal's actual severity

> Verbosity becomes the Application Insights severityLevel and participates in on-premises diagnostic trace filtering. Critical represents abnormal termination, Error a severe error, Warning a warning, Normal a non-error event, and Verbose detailed tracing.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.md) · microsoft layer · telemetry · BC 17.. · tier official · derived

## Description

`Verbosity` becomes the Application Insights `severityLevel` and participates in on-premises diagnostic trace filtering. `Critical` represents abnormal termination, `Error` a severe error, `Warning` a warning, `Normal` a non-error event, and `Verbose` detailed tracing. Logging a caught failure as `Normal` is not cosmetic: severity-based alerts miss it, and an on-premises service configured to emit only warnings and above can drop it completely.

## Best Practice

Use `Error` for failed operations that need investigation and `Critical` only for abnormal termination or equivalent loss of service. Use `Warning` for degraded but completed behavior, `Normal` for successful business events, and `Verbose` for detailed diagnostics. Judge the outcome, not the procedure name: an expected optional lookup miss can legitimately remain `Normal` or `Verbose`.

See sample: [`match-verbosity-to-signal-severity.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.good.al).

## Anti Pattern

A `Session.LogMessage` in a failed `TryFunction`, failed `Codeunit.Run`, unsuccessful HTTP response, or other explicit failure branch that uses `Verbosity::Normal` or `Verbose` without evidence that the failure is expected and benign.

See sample: [`match-verbosity-to-signal-severity.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.bad.al).

## Examples

- [Good: match-verbosity-to-signal-severity.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.good.al)
- [Bad: match-verbosity-to-signal-severity.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/match-verbosity-to-signal-severity.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
