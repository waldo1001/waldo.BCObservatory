---
id: guideline/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique
type: guideline
title: Telemetry event IDs must be stable, unique, and non-placeholder
summary: "The first parameter of Session.LogMessage is the event ID. Telemetry consumers — Application Insights queries, KQL dashboards, alert rules, support runbooks — pivot on this ID to filter and aggregate events. The contract works only when the ID is:"
tier: official
language: en
tags:
  - telemetry
  - logmessage
  - event-id
  - sessionlogmessage
  - observability
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.757Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4850db5063f607c63cdda60297a11ab9f5fa5646
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.md
    title: "microsoft/BCQuality: Telemetry event IDs must be stable, unique, and non-placeholder"
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
repo_path: microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.md
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
identifiers: []
---

# Telemetry event IDs must be stable, unique, and non-placeholder

> The first parameter of Session.LogMessage is the event ID. Telemetry consumers — Application Insights queries, KQL dashboards, alert rules, support runbooks — pivot on this ID to filter and aggregate events. The contract works only when the ID is:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.md) · microsoft layer · telemetry · BC 17.. · tier official · derived

## Description

The first parameter of `Session.LogMessage` is the **event ID**. Telemetry consumers — Application Insights queries, KQL dashboards, alert rules, support runbooks — pivot on this ID to filter and aggregate events. The contract works only when the ID is:

- **Stable** across releases: the same logical event keeps the same ID, so existing queries continue to match it.
- **Unique** within the extension's telemetry catalogue: two different events MUST NOT share an ID, or downstream consumers cannot distinguish them.
- **Non-placeholder**: literal IDs like `'0000'`, `'1234'`, `'TODO'`, or `'XX0000'` are placeholders that collide with other placeholder-using extensions, are unsearchable, and indicate the catalogue entry was never registered.

The convention used by Microsoft first-party AL code is a short prefix identifying the publisher or feature followed by a numeric suffix — for example `'AL0001'`, `'CUST0042'`, `'SHPFY-0007'`. The exact format is up to the extension; the requirements are stability, uniqueness, and that the chosen ID is registered in whatever catalogue or wiki the extension's telemetry consumers reference.

## Best Practice

Assign each `Session.LogMessage` call a real, registered event ID drawn from the extension's catalogue. Treat the ID as part of the public contract of the event — renaming it is a breaking change for consumers. Keep IDs short, deterministic, and free of personal or environment-specific tokens.

See sample: [`telemetry-event-id-stable-unique.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.good.al).

## Anti Pattern

Calling `Session.LogMessage('0000', ...)` (or `'1234'`, `'TODO'`, an empty string, a GUID generated at runtime, or any other placeholder) leaves the event unsearchable and indistinguishable from every other event using the same placeholder. The catalogue entry never gets created because the developer "will fix it later", and the placeholder ships.

See sample: [`telemetry-event-id-stable-unique.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.bad.al).

## Examples

- [Good: telemetry-event-id-stable-unique.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.good.al)
- [Bad: telemetry-event-id-stable-unique.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/telemetry-event-id-stable-unique.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
