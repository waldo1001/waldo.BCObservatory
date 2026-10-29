---
id: guideline/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events
type: guideline
title: Prefer reusing or extending existing events
summary: Before adding a publisher, check whether an event already fires at that point in the code. Two related smells signal that you should reuse or extend instead of adding one.
tier: official
language: en
tags:
  - event-reuse
  - duplication
  - consecutive-events
  - extension-point
  - onbefore
  - integration-event
  - maintainability
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.000Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d2e272b09cbcc6871e0e87046df9f79b583d68f3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.md
    title: "microsoft/BCQuality: Prefer reusing or extending existing events"
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
repo_path: microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.md
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
identifiers:
  - OnBeforeProcessOrderWithCustomer
  - OnBeforeProcessOrder
---

# Prefer reusing or extending existing events

> Before adding a publisher, check whether an event already fires at that point in the code. Two related smells signal that you should reuse or extend instead of adding one.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.md) · microsoft layer · events · BC all · tier official · derived

## Description

Before adding a publisher, check whether an event already fires at that point in the code. Two related smells signal that you should reuse or extend instead of adding one. The first is a brand-new event placed directly next to an existing one — two consecutive event raises with no logic between them, which gives subscribers two seams where one belongs. The second is a near-duplicate event that differs from an existing one only by an extra parameter. Both bloat the publisher surface and leave subscribers unsure which event to pick. Prefer subscribing to the existing event, or extending it by appending the parameter you need, over introducing a parallel one.

## Best Practice

When the data you need is already exposed at an existing event, subscribe to it. When the event lacks a parameter, extend that event by appending the parameter at the end — one publisher, one raise — rather than adding a second event beside it.

See sample: [`prefer-reusing-or-extending-existing-events.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.good.al).

## Anti Pattern

Adding a second event raise immediately after an existing one, or creating `OnBeforeProcessOrderWithCustomer` next to `OnBeforeProcessOrder` just to add a single parameter. Detection: two consecutive `OnBefore…`/`OnAfter…` raises with no logic between them, or near-duplicate event names differing only by a parameter-describing suffix.

See sample: [`prefer-reusing-or-extending-existing-events.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.bad.al).

## Examples

- [Good: prefer-reusing-or-extending-existing-events.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.good.al)
- [Bad: prefer-reusing-or-extending-existing-events.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/prefer-reusing-or-extending-existing-events.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
