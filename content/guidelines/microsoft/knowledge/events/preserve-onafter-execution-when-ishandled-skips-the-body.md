---
id: guideline/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body
type: guideline
title: Preserve OnAfter execution when IsHandled skips the body
summary: A routine that exposes both an OnBefore… event (with var IsHandled) and a paired OnAfter… event has a subtle trap. The common if IsHandled then exit; guard returns from the whole routine, so when a subscriber handles the OnBefore the OnAfter event never fires.
tier: official
language: en
tags:
  - ishandled
  - onafter
  - event-pairing
  - control-flow
  - guard
  - integration-event
  - side-effects
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:32.740Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 10b7fd14930d1482f526011a6516e87ef4bcfc43
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.md
    title: "microsoft/BCQuality: Preserve OnAfter execution when IsHandled skips the body"
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
repo_path: microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.md
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
  - OnAfterX
---

# Preserve OnAfter execution when IsHandled skips the body

> A routine that exposes both an OnBefore… event (with var IsHandled) and a paired OnAfter… event has a subtle trap. The common if IsHandled then exit; guard returns from the whole routine, so when a subscriber handles the OnBefore the OnAfter event never fires.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.md) · microsoft layer · events · BC all · tier official · derived

## Description

A routine that exposes both an `OnBefore…` event (with `var IsHandled`) and a paired `OnAfter…` event has a subtle trap. The common `if IsHandled then exit;` guard returns from the whole routine, so when a subscriber handles the OnBefore the OnAfter event never fires. Subscribers that depend on OnAfter — logging, downstream integration, dependent updates — then silently stop running whenever some other extension overrides the body. The fix is to skip only the default body, not the routine, so the OnAfter still publishes. The two seams are independent: overriding the work should not cancel the notification that the work happened.

## Best Practice

Wrap only the default work in `if not IsHandled then begin … end;` and keep the `OnAfterX(…)` raise after that block, outside the guard, so it always fires regardless of whether a subscriber handled the OnBefore. This keeps the override seam and the after-notification independent, which is what subscribers expect.

See sample: [`preserve-onafter-execution-when-ishandled-skips-the-body.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.good.al).

## Anti Pattern

Guarding with `if IsHandled then exit;` and placing the `OnAfterX` raise later in the same routine, so handling the OnBefore short-circuits the whole procedure and the OnAfter event is skipped along with the body. Detection: an `if IsHandled then exit;` in a routine that also raises a paired `OnAfter…` event after that point.

See sample: [`preserve-onafter-execution-when-ishandled-skips-the-body.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.bad.al).

## Examples

- [Good: preserve-onafter-execution-when-ishandled-skips-the-body.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.good.al)
- [Bad: preserve-onafter-execution-when-ishandled-skips-the-body.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/preserve-onafter-execution-when-ishandled-skips-the-body.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
