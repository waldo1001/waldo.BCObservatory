---
id: guideline/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over
type: guideline
title: Reset IsHandled before publishing only when its value can carry over
summary: "A routine that raises an OnBefore… integration event with a var IsHandled: Boolean parameter passes that variable by reference, so a pre-existing true can affect the following control flow."
tier: official
language: en
tags:
  - ishandled
  - carry-over
  - loop-iteration
  - onbefore
  - reset
  - integration-event
  - control-flow
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.681Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 67d5111c31e826e35c8b2da627ab2fd64b5125b2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.md
    title: "microsoft/BCQuality: Reset IsHandled before publishing only when its value can carry over"
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
    - change/bcquality/132
repo_path: microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.md
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
identifiers: []
---

# Reset IsHandled before publishing only when its value can carry over

> A routine that raises an OnBefore… integration event with a var IsHandled: Boolean parameter passes that variable by reference, so a pre-existing true can affect the following control flow.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.md) · microsoft layer · events · BC all · tier official · derived

## Description

A routine that raises an `OnBefore…` integration event with a `var IsHandled: Boolean` parameter passes that variable by reference, so a pre-existing `true` can affect the following control flow. AL [automatically initializes Boolean variables to `false`](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-al-variables#initialization), so a freshly declared local Boolean passed to one event exactly once per procedure invocation is already deterministic. Initialization does not repeat for each loop iteration: a local declared outside a loop can carry `true` from one iteration to the next even when the source contains only one textual event raise. Outside a loop, reaching a later raise after `if IsHandled then exit;` also proves the value is `false`, provided that early exit is semantically correct and does not skip required downstream events.

## Best Practice

Reset `IsHandled := false;` before a raise only when the value might otherwise carry over as `true`: the same variable is reused after an earlier raise without a control-flow proof that it is false, a raise is re-entered by a loop, the value comes from an input parameter, field, or global, or earlier code seeds it. Prefer separate fresh locals when independent event seams need independent handled state. A reset on a guaranteed-false fresh local used by one non-looping raise, or before a later raise reached only after a semantically valid `if IsHandled then exit;`, can be retained for readability, but its absence is not a correctness finding.

See sample: [`reset-ishandled-only-when-the-value-can-carry-over.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.good.al).

## Anti Pattern

Raising `OnBeforeX(…, IsHandled)` when the variable can still be `true` from an earlier raise, an earlier loop iteration, or another source, so the publisher call starts with stale state. Do not match a single non-looping raise using a fresh local Boolean, or a later raise reached only after a semantically valid `if IsHandled then exit;` proves the value is false.

See sample: [`reset-ishandled-only-when-the-value-can-carry-over.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.bad.al).

## Examples

- [Good: reset-ishandled-only-when-the-value-can-carry-over.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.good.al)
- [Bad: reset-ishandled-only-when-the-value-can-carry-over.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/reset-ishandled-only-when-the-value-can-carry-over.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
