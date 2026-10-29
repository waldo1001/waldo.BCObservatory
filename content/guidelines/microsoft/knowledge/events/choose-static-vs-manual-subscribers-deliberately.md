---
id: guideline/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately
type: guideline
title: Choose static vs manual subscribers deliberately and bind manual ones with BindSubscription
summary: "An [EventSubscriber] codeunit is static by default (EventSubscriberInstance = StaticAutomatic): it is always bound, so it fires for every raise of the event in every session."
tier: official
language: en
tags:
  - event-subscriber
  - static-subscriber
  - manual-subscriber
  - bindsubscription
  - unbindsubscription
  - eventsubscriberinstance
  - scoped-binding
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.778Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 68c0dc399f7ca14c3bf85049054300ee7ba4daec
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.md
    title: "microsoft/BCQuality: Choose static vs manual subscribers deliberately and bind manual ones with BindSubscription"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-bindsubscription-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-unbindsubscription-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.md
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
  - BindSubscription
  - UnbindSubscription
  - SingleInstance
---

# Choose static vs manual subscribers deliberately and bind manual ones with BindSubscription

> An [EventSubscriber] codeunit is static by default (EventSubscriberInstance = StaticAutomatic): it is always bound, so it fires for every raise of the event in every session.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.md) · microsoft layer · events · BC all · tier official · derived

## Description

An `[EventSubscriber]` codeunit is static by default (`EventSubscriberInstance = StaticAutomatic`): it is always bound, so it fires for every raise of the event in every session. That is correct for always-on behaviour such as auditing, but wrong for behaviour that must be scoped — test isolation, a one-off migration, or a conditional override — because a static subscriber cannot be switched off. For scoped behaviour, set `EventSubscriberInstance = Manual` and activate the codeunit only while needed with `BindSubscription`, releasing it with `UnbindSubscription`. LLMs are largely unaware the manual model exists and default everything to static, producing always-on side effects that leak across unrelated operations and tests.

## Best Practice

Use a static subscriber for behaviour that genuinely applies all the time. For anything scoped, mark the codeunit `EventSubscriberInstance = Manual`, call `BindSubscription(SubscriberInstance)` at the start of the scope and `UnbindSubscription(SubscriberInstance)` at the end. A manual subscriber held only in a local variable unbinds automatically when that variable leaves scope, which suits test setup/teardown; a binding you intend to outlive a single call must be unbound explicitly. Keep subscriber methods `local` per CodeCop AA0207.

See sample: [`choose-static-vs-manual-subscribers-deliberately.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.good.al).

## Anti Pattern

Two shapes. First, a static subscriber used for behaviour that should be scoped — an always-on side effect (sending mail, writing extra records) that now fires for every event in every session and test with no way to disable it. Second, a manual subscriber that is bound with `BindSubscription` and never unbound: when the instance is held beyond the intended scope (for example on a `SingleInstance` codeunit), the binding leaks for the whole session and later unrelated operations keep hitting it. Detection: scoped side effects on a static subscriber, or a `BindSubscription` call with no matching `UnbindSubscription` and no scope that releases the instance.

See sample: [`choose-static-vs-manual-subscribers-deliberately.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.bad.al).

## Examples

- [Good: choose-static-vs-manual-subscribers-deliberately.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.good.al)
- [Bad: choose-static-vs-manual-subscribers-deliberately.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.bad.al)

## Names

- [Session.BindSubscription(Codeunit) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-bindsubscription-method) (names BindSubscription)
- [Session.UnbindSubscription(Codeunit) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-unbindsubscription-method) (names UnbindSubscription)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
