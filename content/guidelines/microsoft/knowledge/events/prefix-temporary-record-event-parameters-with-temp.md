---
id: guideline/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp
type: guideline
title: Prefix temporary record event parameters with Temp
summary: When a record passed to an event is a temporary record — an in-memory buffer not persisted to the database — its parameter name must start with Temp.
tier: official
language: en
tags:
  - temporary-record
  - naming
  - event-parameters
  - buffer
  - temp-prefix
  - integration-event
  - conventions
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:32.856Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 08370bf3c98905e96e64873622dfcb0562f86d01
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.md
    title: "microsoft/BCQuality: Prefix temporary record event parameters with Temp"
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
repo_path: microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.md
layer: microsoft
kind: rule
domain: events
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Prefix temporary record event parameters with Temp

> When a record passed to an event is a temporary record — an in-memory buffer not persisted to the database — its parameter name must start with Temp.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.md) · microsoft layer · events · BC all · tier official · derived

## Description

When a record passed to an event is a temporary record — an in-memory buffer not persisted to the database — its parameter name must start with `Temp`. The prefix is the only reliable signal a subscriber has that writes to the record will not reach the database and that the data is scoped to the current call. Without it, subscribers may treat buffer data as persisted: calling `Modify` or `Insert` expecting durability, or reading it as the authoritative table, which leads to silent data loss and confusing behaviour. The `temporary` keyword sits on the variable declaration and is not visible at the subscriber, so the name has to carry the meaning.

## Best Practice

Name temporary record parameters with a `Temp` prefix, for example `var TempSalesLineBuffer: Record "Sales Line" temporary`, so every subscriber sees immediately that the record is an in-memory buffer and treats writes accordingly.

See sample: [`prefix-temporary-record-event-parameters-with-temp.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.good.al).

## Anti Pattern

A temporary record parameter named without the `Temp` prefix (`var SalesLineBuffer: Record "Sales Line" temporary`), so subscribers cannot tell the record is non-persistent and may rely on writes that are silently discarded. Detection: an event parameter declared `temporary` whose name does not start with `Temp`.

See sample: [`prefix-temporary-record-event-parameters-with-temp.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.bad.al).

## Examples

- [Good: prefix-temporary-record-event-parameters-with-temp.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.good.al)
- [Bad: prefix-temporary-record-event-parameters-with-temp.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefix-temporary-record-event-parameters-with-temp.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
