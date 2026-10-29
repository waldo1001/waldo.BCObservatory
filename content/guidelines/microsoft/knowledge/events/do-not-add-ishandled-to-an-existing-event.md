---
id: guideline/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event
type: guideline
title: Do not add IsHandled to an existing event
summary: "Adding a var IsHandled: Boolean parameter to an event that already shipped without one silently changes the event's purpose — from a plain notification into an overridable seam."
tier: official
language: en
tags:
  - ishandled
  - semantic-change
  - event-contract
  - backward-compatibility
  - onbefore
  - integration-event
  - subscribers
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:27.260Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: df0c5e2c6fb2876f0a5d89959c1c067ced7dc804
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.md
    title: "microsoft/BCQuality: Do not add IsHandled to an existing event"
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
repo_path: microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.md
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
  - IsHandled
  - OnAfterCalculateTotal
  - OnBefore
---

# Do not add IsHandled to an existing event

> Adding a var IsHandled: Boolean parameter to an event that already shipped without one silently changes the event's purpose — from a plain notification into an overridable seam.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.md) · microsoft layer · events · BC all · tier official · derived

## Description

Adding a `var IsHandled: Boolean` parameter to an event that already shipped without one silently changes the event's purpose — from a plain notification into an overridable seam. Existing subscribers were written against a "notify" contract they never agreed to make skippable, so their behaviour can quietly become wrong or pointless. The safe move is to leave the existing event untouched and introduce a new `OnBefore…` event carrying `IsHandled` at the point you want to make overridable. Existing subscribers keep working against the original event; new subscribers opt into the override seam through the new one.

## Best Practice

Keep the existing event as-is and add a separate `OnBeforeX(…; var IsHandled: Boolean)` before the logic you want to make overridable. Two events with distinct, stable contracts are safer than one event whose meaning and signature were changed under its subscribers.

See sample: [`do-not-add-ishandled-to-an-existing-event.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.good.al).

## Anti Pattern

Mutating a shipped event — for example adding `var IsHandled` to `OnAfterCalculateTotal` — to retrofit override behaviour, which overloads the event's meaning and undermines existing subscribers. Detection: an `IsHandled` parameter added to a pre-existing event signature rather than introduced through a new dedicated `OnBefore` publisher.

See sample: [`do-not-add-ishandled-to-an-existing-event.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.bad.al).

## Examples

- [Good: do-not-add-ishandled-to-an-existing-event.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.good.al)
- [Bad: do-not-add-ishandled-to-an-existing-event.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-add-ishandled-to-an-existing-event.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
