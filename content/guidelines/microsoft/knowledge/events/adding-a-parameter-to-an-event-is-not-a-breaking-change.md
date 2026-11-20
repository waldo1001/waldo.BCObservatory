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
  - as0024
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:19:07.539Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 73c3dc549223629533e54ba5be2d84fa5bd2ce2e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/adding-a-parameter-to-an-event-is-not-a-breaking-change.md
    title: "microsoft/BCQuality: Adding a parameter to an event is not a breaking change"
    date: "2026-11-19"
    commit: dd49341915045164248349bd891b106ebb4b34cb
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

Adding a parameter to an existing event publisher does not break existing subscribers. AL binds a subscriber to a publisher by the event name, and the subscriber's parameter list only has to be a subset of the publisher's, matched by name and type. A subscriber that does not declare the new parameter keeps compiling and keeps binding — it simply ignores the addition. This holds for `IntegrationEvent` and `BusinessEvent` publishers at any position in the parameter list; appending is not required. The one exception concerns callers, not subscribers: a publisher declared without `local` or `internal` is also a public procedure that dependent extensions can raise, and a new required parameter breaks those callers under AppSourceCop AS0024 (see `add-new-event-parameters-at-the-end`). LLM reviewers often misreport the mere presence of a new event parameter as a "breaking event signature change" that breaks subscribers, which is incorrect.

## Best Practice

Do not flag the addition of a parameter to a `local` or `internal` event publisher as a breaking or signature-breaking change, whatever its position in the list, and never claim that an added parameter breaks existing subscribers. Genuine, separate concerns are covered by their own rules — a parameter added to a public event procedure, which breaks dependent extensions that raise it (`add-new-event-parameters-at-the-end`), or a parameter that carries no meaningful value — and should be raised on those grounds, not framed as a subscriber break.

## Changed by

- [#124 Add FP guards: field relocation to tableextension + event parameter addition (bug 642303)](../../../../changes/bcquality/124.md), 2026-08-04

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
