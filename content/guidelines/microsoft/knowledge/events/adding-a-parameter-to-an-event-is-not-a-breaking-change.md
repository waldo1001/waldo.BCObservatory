---
id: guideline/microsoft/knowledge/events/adding-a-parameter-to-an-event-is-not-a-breaking-change
type: guideline
title: Adding a parameter to an event is not a breaking change
summary: Adding a parameter to an existing event publisher does not break existing subscribers. AL binds a subscriber to a publisher by the event name, and the subscriber's parameter list only has to be a subset of the publisher's, matched by name and type.
tier: official
language: en
tags:
  - event-parameters
  - signature
  - subscriber-binding
  - backward-compatibility
  - integration-event
  - breaking-change
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.300Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 330f9bf24531015c7593c2e9cd67c06f3894bd04
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/adding-a-parameter-to-an-event-is-not-a-breaking-change.md
    title: "microsoft/BCQuality: Adding a parameter to an event is not a breaking change"
    date: "2026-08-04"
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
    - change/bcquality/124
repo_path: microsoft/knowledge/events/adding-a-parameter-to-an-event-is-not-a-breaking-change.md
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
examples: 0
identifiers:
  - IntegrationEvent
  - BusinessEvent
---

# Adding a parameter to an event is not a breaking change

> Adding a parameter to an existing event publisher does not break existing subscribers. AL binds a subscriber to a publisher by the event name, and the subscriber's parameter list only has to be a subset of the publisher's, matched by name and type.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/adding-a-parameter-to-an-event-is-not-a-breaking-change.md) · microsoft layer · events · BC all · tier official · derived

## Description

Adding a parameter to an existing event publisher does not break existing subscribers. AL binds a subscriber to a publisher by the event name, and the subscriber's parameter list only has to be a subset of the publisher's, matched by name and type. A subscriber that does not declare the new parameter keeps compiling and keeps binding — it simply ignores the addition. This holds for `IntegrationEvent` and `BusinessEvent` publishers, and even more plainly for `local` events. Appending the new parameter at the end keeps the change a clean, reviewable addition (see `add-new-event-parameters-at-the-end`). LLM reviewers often misreport the mere presence of a new event parameter as a "breaking event signature change" that breaks subscribers, which is incorrect.

## Best Practice

Do not flag the addition of a parameter to an event publisher as a breaking or signature-breaking change, and do not claim it breaks existing subscribers. Genuine, separate concerns are covered by their own rules — a parameter inserted in the middle of the list rather than appended (`add-new-event-parameters-at-the-end`), or a parameter that carries no meaningful value — and should be raised on those grounds, not framed as a backward-compatibility break.

## Changed by

- [#124 Add FP guards: field relocation to tableextension + event parameter addition (bug 642303)](../../../../changes/bcquality/124.md), 2026-08-04

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
