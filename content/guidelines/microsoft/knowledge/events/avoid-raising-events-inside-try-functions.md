---
id: guideline/microsoft/knowledge/events/avoid-raising-events-inside-try-functions
type: guideline
title: Do not raise integration events inside a TryFunction whose result the caller consumes
summary: A TryFunction whose caller consumes its Boolean result catches all errors raised during its execution — including errors thrown by event subscribers.
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
  at: "2026-11-23T00:15:10.597Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d81d55406551318b05af45a91a7133474728f319
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.md
    title: "microsoft/BCQuality: Do not raise integration events inside a TryFunction whose result the caller consumes"
    date: "2026-11-17"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
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
    - change/bcquality/211
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

# Do not raise integration events inside a TryFunction whose result the caller consumes

> A TryFunction whose caller consumes its Boolean result catches all errors raised during its execution — including errors thrown by event subscribers.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.md) · microsoft layer · events · BC all · tier official · derived

## Description

A `TryFunction` whose caller consumes its Boolean result catches all errors raised during its execution — including errors thrown by event subscribers. When an `[IntegrationEvent]` is raised inside a `TryFunction` body, any error a subscriber raises is silently swallowed by the TryFunction's error boundary. The subscriber's logic fails, the caller sees no error, and the calling code continues as if nothing happened. Subscribers have no way to signal failure to the caller.

## Best Practice

When a call site uses the TryFunction's Boolean result, raise the integration event before entering the TryFunction scope. The event and its subscribers execute outside the error boundary, so subscriber errors propagate normally to the caller. Move only the operation that genuinely needs error isolation (such as an HTTP call or a posting step) inside the TryFunction.

A TryFunction that is only ever invoked as a bare statement, with its Boolean result ignored, activates no error boundary: subscriber errors raised in its body propagate like those of any ordinary procedure. Such a publisher path needs no change; see `microsoft/knowledge/error-handling/bare-tryfunction-call-propagates-errors.md`.

See sample: [`avoid-raising-events-inside-try-functions.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.good.al).

## Anti Pattern

Raising an integration event inside a TryFunction body that is invoked through an assignment or a conditional (for example `Success := TryDoWork();` or `if not TryDoWork() then`). Only that consumed-result call catches errors, so subscriber failures are caught and discarded and the subscriber contract — that a subscriber can signal failure to the caller — is silently broken. Resolve each call site of the TryFunction before flagging.

The event raise alone is not this anti-pattern. When every call site of the TryFunction is a bare statement, no try boundary is active and subscriber errors reach the caller as usual.

See sample: [`avoid-raising-events-inside-try-functions.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.bad.al).

## Examples

- [Good: avoid-raising-events-inside-try-functions.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.good.al)
- [Bad: avoid-raising-events-inside-try-functions.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-raising-events-inside-try-functions.bad.al)

## Changed by

- [#211 knowledge(error-handling): a bare \[TryFunction\] call propagates its error](../../../../changes/bcquality/211.md), 2026-11-17
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
