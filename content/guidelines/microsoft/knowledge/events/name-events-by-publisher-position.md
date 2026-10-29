---
id: guideline/microsoft/knowledge/events/name-events-by-publisher-position
type: guideline
title: Name events by publisher position
summary: An event name should tell a subscriber where in the publisher the event fires.
tier: official
language: en
tags:
  - event-naming
  - onbefore
  - onafter
  - conventions
  - discoverability
  - integration-event
  - publisher
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:32.876Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fc9409867f6f50a5eeaace433e9866c3d7e0d09d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-events-by-publisher-position.md
    title: "microsoft/BCQuality: Name events by publisher position"
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
repo_path: microsoft/knowledge/events/name-events-by-publisher-position.md
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
  - MyCustomEvent
  - BeforePost
  - OnBeforePostSalesLine
  - OnAfterPostSalesLine
  - OnPostSalesLineOnAfterCalcAmounts
  - PostSalesLine
  - MyCustomSalesEvent
  - SalesLineEvent
  - OnBefore
---

# Name events by publisher position

> An event name should tell a subscriber where in the publisher the event fires.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-events-by-publisher-position.md) · microsoft layer · events · BC all · tier official · derived

## Description

An event name should tell a subscriber where in the publisher the event fires. The convention encodes the position: an event at the very start of a procedure or trigger is `OnBefore<Name>`; one at the very end is `OnAfter<Name>`; one in the middle names both the host routine and the local boundary, as `On<Name>OnBefore<Context>` or `On<Name>OnAfter<Context>`. Consistent, position-encoding names make events discoverable and predictable, and let developers and tooling reason about firing order without reading the publisher. Ad-hoc names such as `MyCustomEvent` or `BeforePost` hide where the event fires and break the conventions the ecosystem relies on.

## Best Practice

Name by position: `OnBeforePostSalesLine` and `OnAfterPostSalesLine` at the routine boundaries, and `OnPostSalesLineOnAfterCalcAmounts` for an event raised partway through `PostSalesLine` after an amount calculation. The name alone then tells a subscriber both the host routine and the exact point it runs.

See sample: [`name-events-by-publisher-position.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-events-by-publisher-position.good.al).

## Anti Pattern

Ad-hoc event names that omit the host routine or the before/after position (`MyCustomSalesEvent`, `BeforePost`, `SalesLineEvent`), leaving subscribers unable to tell when the event fires relative to the publisher's logic. Detection: publisher names that do not follow the `OnBefore`/`OnAfter<Routine>` or `On<Routine>OnBefore`/`OnAfter<Context>` patterns.

See sample: [`name-events-by-publisher-position.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-events-by-publisher-position.bad.al).

## Examples

- [Good: name-events-by-publisher-position.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-events-by-publisher-position.good.al)
- [Bad: name-events-by-publisher-position.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-events-by-publisher-position.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
