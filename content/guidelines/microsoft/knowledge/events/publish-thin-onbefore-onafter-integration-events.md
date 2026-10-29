---
id: guideline/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events
type: guideline
title: Publish thin OnBefore/OnAfter integration events to expose extension points
summary: "A key operation — a posting, release, or validation routine — becomes a hard wall for partners when it ships no integration events: the only way to change it is to overwrite or duplicate the base code."
tier: official
language: en
tags:
  - integration-event
  - onbefore
  - onafter
  - extension-point
  - thin-publisher
  - publisher-body
  - extensibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.463Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 526f1362ea1d6aa4a93a5c230629b813ca4195ac
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.md
    title: "microsoft/BCQuality: Publish thin OnBefore/OnAfter integration events to expose extension points"
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
repo_path: microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.md
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
  - OnBeforeX
  - OnAfterX
  - OnBefore
  - OnAfter
---

# Publish thin OnBefore/OnAfter integration events to expose extension points

> A key operation — a posting, release, or validation routine — becomes a hard wall for partners when it ships no integration events: the only way to change it is to overwrite or duplicate the base code.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.md) · microsoft layer · events · BC all · tier official · derived

## Description

A key operation — a posting, release, or validation routine — becomes a hard wall for partners when it ships no integration events: the only way to change it is to overwrite or duplicate the base code. The Business Central remedy is to raise thin `OnBeforeX`/`OnAfterX` integration events at the operation's boundaries, passing `var Rec` and the relevant parameters so subscribers have what they need. An equally common defect is the inverse: putting business logic *inside* the publisher method body. An event publisher is a hook, not a procedure — its body must be empty, and the platform even forbids variables, return values, and code other than comments in it. LLMs both omit the extension points and, when they do add an event, wrongly fill its body with logic.

## Best Practice

Wrap the operation's core with events: raise `OnBeforeX(var Rec, var IsHandled)` before the default work and `OnAfterX(var Rec)` once it succeeds, at the natural boundaries of the routine. Declare each publisher `[IntegrationEvent(false, false)] local procedure` with an empty body and let the calling routine — never the publisher — own the logic. Pass records by `var` so subscribers can read and adjust them, and include the parameters a subscriber would need to act. This gives partners a stable seam without touching base code.

See sample: [`publish-thin-onbefore-onafter-integration-events.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.good.al).

## Anti Pattern

Business logic placed inside an `[IntegrationEvent]` publisher method, so the "event" actually mutates state every time it is raised — defeating the hook and surprising every reader — or a core operation that exposes no extension points at all, forcing partners to overwrite or duplicate it. Detection: an `[IntegrationEvent]`/`[BusinessEvent]` method whose body contains statements rather than being empty, or a posting/validation routine with no surrounding `OnBefore`/`OnAfter` publishers.

See sample: [`publish-thin-onbefore-onafter-integration-events.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.bad.al).

## Examples

- [Good: publish-thin-onbefore-onafter-integration-events.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.good.al)
- [Bad: publish-thin-onbefore-onafter-integration-events.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/publish-thin-onbefore-onafter-integration-events.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
