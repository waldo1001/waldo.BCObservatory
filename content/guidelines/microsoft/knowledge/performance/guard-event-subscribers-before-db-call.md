---
id: guideline/microsoft/knowledge/performance/guard-event-subscribers-before-db-call
type: guideline
title: Guard event subscribers with cheap checks before any database call
summary: Event subscribers fire on every event matching their signature — for OnAfterValidateEvent on a hot field like Sales Line.Quantity, that is every quantity edit by every user.
tier: official
language: en
tags:
  - event-subscriber
  - guard
  - db-call
  - frequently-fired
  - validate
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.166Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d56c716d4a28f5f557b7c6198e37368f7f14ad4e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guard-event-subscribers-before-db-call.md
    title: "microsoft/BCQuality: Guard event subscribers with cheap checks before any database call"
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
repo_path: microsoft/knowledge/performance/guard-event-subscribers-before-db-call.md
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
examples: 2
identifiers:
  - OnAfterValidateEvent
  - FindFirst
  - SetLoadFields
---

# Guard event subscribers with cheap checks before any database call

> Event subscribers fire on every event matching their signature — for OnAfterValidateEvent on a hot field like Sales Line.Quantity, that is every quantity edit by every user.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guard-event-subscribers-before-db-call.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Event subscribers fire on every event matching their signature — for `OnAfterValidateEvent` on a hot field like `Sales Line.Quantity`, that is every quantity edit by every user. Per the upstream guidance, "Keep event subscriber code lightweight" and "Avoid database operations in frequently-fired events — guard with cheap checks first." A `Get` or `FindFirst` at the top of such a subscriber pays a database round-trip on every fire, including the calls for which the subscriber's work was not needed.

## Best Practice

Open the subscriber with an in-memory predicate that filters out the calls the subscriber does not handle — record type, document type, status, parameter-passed flags. Only after the cheap guard passes should the body issue a database call, and only with `SetLoadFields` for the columns the body actually reads.

See sample: [`guard-event-subscribers-before-db-call.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guard-event-subscribers-before-db-call.good.al).

## Anti Pattern

`[EventSubscriber(...'OnAfterValidateEvent', 'Quantity', ...)] local procedure ... var Item: Record Item; begin Item.Get(Rec."No."); if Item.HasCustomPricing() then ...;` — `Item.Get` runs on every quantity change, including changes to lines whose `Type` is not `Item`. A pre-check `if Rec.Type <> Rec.Type::Item then exit;` ahead of the `Get` removes most of the calls.

See sample: [`guard-event-subscribers-before-db-call.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guard-event-subscribers-before-db-call.bad.al).

## Examples

- [Good: guard-event-subscribers-before-db-call.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guard-event-subscribers-before-db-call.good.al)
- [Bad: guard-event-subscribers-before-db-call.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/guard-event-subscribers-before-db-call.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
