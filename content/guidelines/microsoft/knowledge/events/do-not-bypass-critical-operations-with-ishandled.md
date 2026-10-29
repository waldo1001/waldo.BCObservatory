---
id: guideline/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled
type: guideline
title: Do not bypass critical operations with IsHandled
summary: The IsHandled override pattern lets a subscriber skip the guarded code entirely.
tier: official
language: en
tags:
  - ishandled
  - critical-operations
  - posting
  - data-integrity
  - ledger
  - integration-event
  - safety
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:27.311Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7eff65fd40dd6d8f3e3bc25755ca43a0100f0072
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.md
    title: "microsoft/BCQuality: Do not bypass critical operations with IsHandled"
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
repo_path: microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.md
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

# Do not bypass critical operations with IsHandled

> The IsHandled override pattern lets a subscriber skip the guarded code entirely.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.md) · microsoft layer · events · BC all · tier official · derived

## Description

The IsHandled override pattern lets a subscriber skip the guarded code entirely. A critical operation is one that cannot stand as an independent, self-contained unit — code whose partial execution or omission leaves the system inconsistent (imbalanced ledgers, orphaned documents, gaps in a number series, or skipped permission checks). That is acceptable around a pure, side-effect-free calculation, but dangerous around critical operations — posting, ledger-entry creation, number-series consumption, and referential-integrity or permission validation. Wrapping those in `OnBeforeX(…; var IsHandled); if IsHandled then exit;` lets any subscriber silently suppress them, risking imbalanced ledgers, orphaned documents, skipped permission checks, or duplicated numbers — corruption that surfaces far from the subscriber that caused it. Make the calculation overridable, not the commit: expose the value computation through IsHandled, or offer a regular `OnAfter…` event to adjust results, while the critical work runs unconditionally.

## Best Practice

Scope IsHandled to a safe value-calculation block and run the critical operations unconditionally afterwards; or expose a positive `OnAfter…` event for subscribers to adjust results, rather than a bypass around the commit.

See sample: [`do-not-bypass-critical-operations-with-ishandled.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.good.al).

## Anti Pattern

An `OnBefore…` IsHandled guard wrapping a posting or ledger routine — `if IsHandled then exit;` around the code that creates ledger entries and updates document status — letting subscribers skip the commit. Detection: an `if IsHandled then exit;` whose skipped body performs posting, ledger writes, number-series consumption, or integrity and permission validation.

See sample: [`do-not-bypass-critical-operations-with-ishandled.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.bad.al).

## Examples

- [Good: do-not-bypass-critical-operations-with-ishandled.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.good.al)
- [Bad: do-not-bypass-critical-operations-with-ishandled.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-bypass-critical-operations-with-ishandled.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
