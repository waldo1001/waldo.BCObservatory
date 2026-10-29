---
id: guideline/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events
type: guideline
title: Prefer this over IncludeSender in new codeunit events
summary: When designing a new publisher, setting IncludeSender to true on [IntegrationEvent] or [BusinessEvent] gives subscribers the publishing object as an implicit sender parameter.
tier: official
language: en
tags:
  - this-keyword
  - includesender
  - sender
  - codeunit
  - self-reference
  - integration-event
  - type-safety
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:32.831Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2af8daa6b19594a84778655be86b84e20b2690b0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.md
    title: "microsoft/BCQuality: Prefer this over IncludeSender in new codeunit events"
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
    - change/bcquality/98
repo_path: microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.md
layer: microsoft
kind: rule
domain: events
bc_version:
  - 25..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - IncludeSender
---

# Prefer this over IncludeSender in new codeunit events

> When designing a new publisher, setting IncludeSender to true on [IntegrationEvent] or [BusinessEvent] gives subscribers the publishing object as an implicit sender parameter.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.md) · microsoft layer · events · BC 25.. · tier official · derived

## Description

When designing a new publisher, setting `IncludeSender` to `true` on `[IntegrationEvent]` or `[BusinessEvent]` gives subscribers the publishing object as an implicit sender parameter. From Business Central 2024 release wave 2, a codeunit can instead pass itself explicitly with the `this` keyword as a normal, strongly-typed `Sender` parameter. Explicit passing makes the sender visible and typed in the signature. This is new-event design guidance only: never change `IncludeSender` on an event that has already shipped.

## Best Practice

For a new event, declare the publisher `[IntegrationEvent(false, false)]` with an explicit `Sender: Codeunit "…"` parameter and raise it with `this`, for example `OnBeforeProcessOrder(OrderNo, this);`. Subscribers then receive a typed sender they can call directly.

See sample: [`prefer-this-over-includesender-in-codeunit-events.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.good.al).

## Anti Pattern

Designing a new codeunit event with `[IntegrationEvent(true, …)]` solely to hand subscribers the publisher instance, where `this` could be passed explicitly as a typed parameter. Do not apply this rule by mutating a shipped event's attribute flags.

See sample: [`prefer-this-over-includesender-in-codeunit-events.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.bad.al).

## Examples

- [Good: prefer-this-over-includesender-in-codeunit-events.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.good.al)
- [Bad: prefer-this-over-includesender-in-codeunit-events.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-this-over-includesender-in-codeunit-events.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
