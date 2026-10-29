---
id: guideline/microsoft/knowledge/style/api-page-delayedinsert-true
type: guideline
title: Set `DelayedInsert = true` on API pages
summary: "On a normal page, DelayedInsert = false is the default: the record is inserted into the table as soon as the user enters the first field, and subsequent fields are written via Modify triggers."
tier: official
language: en
tags:
  - api-page
  - delayedinsert
  - insert-trigger
  - validation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.639Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: abe3fd623584109665258fb7491768a24dcec465
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-delayedinsert-true.md
    title: "microsoft/BCQuality: Set `DelayedInsert = true` on API pages"
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
repo_path: microsoft/knowledge/style/api-page-delayedinsert-true.md
layer: microsoft
kind: rule
domain: style
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
  - OnInsert
  - OnValidate
  - DelayedInsert
---

# Set `DelayedInsert = true` on API pages

> On a normal page, DelayedInsert = false is the default: the record is inserted into the table as soon as the user enters the first field, and subsequent fields are written via Modify triggers.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-delayedinsert-true.md) · microsoft layer · style · BC all · tier official · derived

## Description

On a normal page, `DelayedInsert = false` is the default: the record is inserted into the table as soon as the user enters the first field, and subsequent fields are written via `Modify` triggers. That model does not work for an API endpoint, where the consumer sends a complete JSON payload in a single request and expects exactly one `Insert` to fire with all fields already populated. `DelayedInsert = true` defers the insert until every field on the page has been assigned, so the `OnInsert` trigger runs once with the full record and `OnValidate` triggers on individual fields run in a predictable order. The convention is that API pages always set `DelayedInsert = true`.

## Best Practice

Declare `DelayedInsert = true` on every page with `PageType = API`. The setting plays well with `Modify(true)` and `Insert(true)` calls inside `OnInsert` and avoids the half-populated record states that otherwise reach validation logic.

See sample: [`api-page-delayedinsert-true.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-delayedinsert-true.good.al).

## Anti Pattern

Omitting `DelayedInsert` (which defaults to `false`) on an API page. Validation triggers fire on a partially populated record, mandatory-field errors come back to the caller for fields the JSON payload was about to supply, and the API surface produces failures that have no analogue in the UI page model.

See sample: [`api-page-delayedinsert-true.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-delayedinsert-true.bad.al).

## Examples

- [Good: api-page-delayedinsert-true.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-delayedinsert-true.good.al)
- [Bad: api-page-delayedinsert-true.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/api-page-delayedinsert-true.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
