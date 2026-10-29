---
id: guideline/microsoft/knowledge/events/avoid-raising-events-inside-try-functions
type: guideline
title: Do not raise integration events inside a TryFunction
summary: A TryFunction catches all errors — including errors thrown by event subscribers. When an [IntegrationEvent] is raised inside a TryFunction body, any error a subscriber raises is silently swallowed by the TryFunction's error boundary.
tier: official
language: en
tags:
  - tryfunction
  - integration-event
  - subscriber
  - error-handling
  - silent-failure
  - event-publisher
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.819Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 80b3b344de9d4e6ca7ec1b57d072cbb10d0f0851
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.md
    title: "microsoft/BCQuality: Do not raise integration events inside a TryFunction"
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
repo_path: microsoft/knowledge/events/avoid-raising-events-inside-try-functions.md
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
  - TryFunction
---

# Do not raise integration events inside a TryFunction

> A TryFunction catches all errors — including errors thrown by event subscribers. When an [IntegrationEvent] is raised inside a TryFunction body, any error a subscriber raises is silently swallowed by the TryFunction's error boundary.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.md) · microsoft layer · events · BC all · tier official · derived

## Description

A `TryFunction` catches all errors — including errors thrown by event subscribers. When an `[IntegrationEvent]` is raised inside a `TryFunction` body, any error a subscriber raises is silently swallowed by the TryFunction's error boundary. The subscriber's logic fails, the caller sees no error, and the calling code continues as if nothing happened. Subscribers have no way to signal failure to the caller.

## Best Practice

Raise the integration event before entering the TryFunction scope. The event and its subscribers execute outside the error boundary, so subscriber errors propagate normally to the caller. Move only the operation that genuinely needs error isolation (such as an HTTP call or a posting step) inside the TryFunction.

See sample: [`avoid-raising-events-inside-try-functions.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.good.al).

## Anti Pattern

Raising an integration event inside a TryFunction body. Subscriber failures are caught and discarded by the TryFunction. The subscriber contract — that a subscriber can signal failure to the caller — is silently broken.

See sample: [`avoid-raising-events-inside-try-functions.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.bad.al).

## Examples

- [Good: avoid-raising-events-inside-try-functions.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.good.al)
- [Bad: avoid-raising-events-inside-try-functions.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
