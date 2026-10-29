---
id: guideline/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable
type: guideline
title: Use the IsHandled pattern to make base behaviour overridable
summary: AL has no method overriding, so a procedure that runs its body unconditionally cannot be replaced by an extension without editing base code.
tier: official
language: en
tags:
  - ishandled
  - overridable
  - onbefore
  - integration-event
  - extensibility
  - event-override
  - subscriber-hook
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.515Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6a6d6ab35ce09762562f166c34a0234c95357b72
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.md
    title: "microsoft/BCQuality: Use the IsHandled pattern to make base behaviour overridable"
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
repo_path: microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.md
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
  - OnBefore
  - OnAfter
---

# Use the IsHandled pattern to make base behaviour overridable

> AL has no method overriding, so a procedure that runs its body unconditionally cannot be replaced by an extension without editing base code.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.md) · microsoft layer · events · BC all · tier official · derived

## Description

AL has no method overriding, so a `procedure` that runs its body unconditionally cannot be replaced by an extension without editing base code. The established Business Central seam for substituting default behaviour is the `IsHandled` pattern: the routine raises an `OnBefore…` integration event carrying a `var IsHandled: Boolean`, then exits early when a subscriber has set it. This hands a partner a sanctioned hook to replace the logic instead of overwriting the routine. LLMs trained on languages with inheritance emit routines whose logic always runs and expose no `OnBefore`/`IsHandled` seam, so the behaviour silently cannot be overridden.

## Best Practice

Raise `OnBeforeX(…, IsHandled)` as the first step of the routine and guard with `if IsHandled then exit;` before any default logic runs. Declare the publisher `[IntegrationEvent(false, false)] local procedure OnBeforeX(…; var IsHandled: Boolean)` with an empty body, and keep `IsHandled` a `var` parameter so a subscriber can write to it. A subscriber that replaces the behaviour does its work and sets `IsHandled := true`; one that only augments leaves it untouched and guards with `if IsHandled then exit;` itself. Reserve the override hook for cases where a partner genuinely needs to replace logic — when the goal is only to react, a positive `OnAfter` event is the better seam.

See sample: [`use-ishandled-to-make-base-behaviour-overridable.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.good.al).

## Anti Pattern

Two shapes. First, a routine whose default logic always runs because there is no `OnBefore…`/`IsHandled` hook at all — extensions cannot change it without overwriting base code. Second, a routine that raises `OnBeforeX(IsHandled)` but omits the `if IsHandled then exit;` guard, so the default logic still executes after a subscriber set `IsHandled := true`, duplicating work and side effects. Detection: an `OnBefore` publisher with a `var IsHandled: Boolean` parameter whose caller never tests `IsHandled`, or a public routine doing non-trivial work with no overridable seam.

See sample: [`use-ishandled-to-make-base-behaviour-overridable.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.bad.al).

## Examples

- [Good: use-ishandled-to-make-base-behaviour-overridable.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.good.al)
- [Bad: use-ishandled-to-make-base-behaviour-overridable.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/use-ishandled-to-make-base-behaviour-overridable.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
