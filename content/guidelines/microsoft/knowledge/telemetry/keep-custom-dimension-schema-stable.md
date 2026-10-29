---
id: guideline/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable
type: guideline
title: Treat custom dimension keys as a stable telemetry schema
summary: "Business Central prefixes AL custom-dimension keys with al in Application Insights, so an AL key named Result becomes alResult. Microsoft guidance treats telemetry definitions as an API: changing or removing a custom dimension can break dashboards and alerts."
tier: official
language: en
tags:
  - customdimensions
  - dimension-key
  - schema
  - pascalcase
  - kql
  - breaking-change
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.327Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9291219cc673cb37d179f8cabce2e50df126dd6d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.md
    title: "microsoft/BCQuality: Treat custom dimension keys as a stable telemetry schema"
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
repo_path: microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.md
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
  - alResult
  - RecordCount
---

# Treat custom dimension keys as a stable telemetry schema

> Business Central prefixes AL custom-dimension keys with al in Application Insights, so an AL key named Result becomes alResult. Microsoft guidance treats telemetry definitions as an API: changing or removing a custom dimension can break dashboards and alerts.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.md) · microsoft layer · telemetry · BC 17.. · tier official · derived

## Description

Business Central prefixes AL custom-dimension keys with `al` in Application Insights, so an AL key named `Result` becomes `alResult`. Microsoft guidance treats telemetry definitions as an API: changing or removing a custom dimension can break dashboards and alerts. PascalCase keys without spaces also compose cleanly in KQL; spaces force awkward bracket access and make queries harder to maintain.

## Best Practice

Choose stable PascalCase keys such as `Operation`, `Result`, and `RecordCount`. Keep the key set and meaning stable for a shipped event ID; add a new event ID or coordinate a schema migration when the meaning must change. Privacy guidance separately governs whether a dimension value may contain customer data.

See sample: [`keep-custom-dimension-schema-stable.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.good.al).

## Anti Pattern

Keys such as `'order no'` or `'result_code'`, or renaming/removing a key while retaining the same shipped event ID. A naming-only issue is advisory; changing an existing event's schema is the material compatibility defect. New keys on a new event ID are not a breaking change.

See sample: [`keep-custom-dimension-schema-stable.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.bad.al).

## Examples

- [Good: keep-custom-dimension-schema-stable.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.good.al)
- [Bad: keep-custom-dimension-schema-stable.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/telemetry/keep-custom-dimension-schema-stable.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
