---
id: guideline/microsoft/knowledge/performance/calcfields-in-both-getrecord-triggers-is-not-redundant
type: guideline
title: CalcFields in both OnAfterGetRecord and OnAfterGetCurrRecord is not redundant
summary: OnAfterGetRecord fires once per row as the page loads records into the view; OnAfterGetCurrRecord fires when a record becomes the active/current record.
tier: official
language: en
tags:
  - calcfields
  - onaftergetrecord
  - onaftergetcurrrecord
  - page-lifecycle
  - flowfield
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.982Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 79c3b52e41e7af0df8c0688d10b049397d83557e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcfields-in-both-getrecord-triggers-is-not-redundant.md
    title: "microsoft/BCQuality: CalcFields in both OnAfterGetRecord and OnAfterGetCurrRecord is not redundant"
    date: "2026-07-17"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/112
repo_path: microsoft/knowledge/performance/calcfields-in-both-getrecord-triggers-is-not-redundant.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - OnAfterGetRecord
  - OnAfterGetCurrRecord
  - CalcFields
---

# CalcFields in both OnAfterGetRecord and OnAfterGetCurrRecord is not redundant

> OnAfterGetRecord fires once per row as the page loads records into the view; OnAfterGetCurrRecord fires when a record becomes the active/current record.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/calcfields-in-both-getrecord-triggers-is-not-redundant.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`OnAfterGetRecord` fires once per row as the page loads records into the view; `OnAfterGetCurrRecord` fires when a record becomes the active/current record. Calling `CalcFields` in both triggers is not duplicate or redundant work: the two triggers run at different points in the page lifecycle and serve different purposes — populating FlowFields for every displayed row versus refreshing them for the record the user has selected. The same `CalcFields` call appearing in both places is an intentional pattern, not copy-paste waste.

## Best Practice

Do not flag `CalcFields` appearing in both `OnAfterGetRecord` and `OnAfterGetCurrRecord` as duplicate, redundant, or removable. Treat each trigger's `CalcFields` on its own lifecycle merits.

## Anti Pattern

Recommending that a developer delete one of the two `CalcFields` calls because "the field is already calculated in the other trigger". The genuine per-row FlowField cost is addressed by the separate guidance on FlowField calculation in loops and on hidden FlowFields; it is not addressed by removing a lifecycle-correct `CalcFields`.

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)

## Changed by

- [#112 Add precision guards for systematic agent false-positive patterns](../../../../changes/bcquality/112.md), 2026-07-17

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
