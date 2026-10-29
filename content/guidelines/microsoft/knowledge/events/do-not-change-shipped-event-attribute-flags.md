---
id: guideline/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags
type: guideline
title: Do not change shipped event attribute flags
summary: IncludeSender and, on Integration events, GlobalVarAccess have been event-contract flags since runtime 1.0. Removing sender or global access breaks subscribers, so AppSourceCop AS0021 prevents changing those flags from true to false.
tier: official
language: en
tags:
  - event-attribute
  - includesender
  - globalvaraccess
  - isolated-event
  - compatibility
  - integration-event
  - business-event
  - appsourcecop
  - as0021
  - as0101
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:27.345Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f613f3ad65d4f1d58a5370222aea6f874ee53a38
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.md
    title: "microsoft/BCQuality: Do not change shipped event attribute flags"
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
    - change/bcquality/98
repo_path: microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.md
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
  - IncludeSender
  - GlobalVarAccess
---

# Do not change shipped event attribute flags

> IncludeSender and, on Integration events, GlobalVarAccess have been event-contract flags since runtime 1.0. Removing sender or global access breaks subscribers, so AppSourceCop AS0021 prevents changing those flags from true to false.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.md) · microsoft layer · events · BC all · tier official · derived

## Description

`IncludeSender` and, on Integration events, `GlobalVarAccess` have been event-contract flags since runtime 1.0. Removing sender or global access breaks subscribers, so AppSourceCop AS0021 prevents changing those flags from `true` to `false`. On runtime 9.0 and later (Business Central 2022 release wave 1, BC20), `Isolated` also controls transaction, error, and rollback behavior; AS0101 prevents adding, removing, or changing that argument.

## Best Practice

Keep every available attribute argument exactly as shipped. If new subscribers need different sender/global exposure, publish a new event with the desired flags. Apply the same rule to `Isolated` only on BC20 or later, where that argument exists. Raise both events while the original contract is supported, and choose preferred flags only when designing a new event.

See sample: [`do-not-change-shipped-event-attribute-flags.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.good.al).

## Anti Pattern

Changing a shipped event's `IncludeSender` or `GlobalVarAccess` to modernize its design, including replacing `IncludeSender` with an explicit parameter. On BC20 or later, adding, removing, or toggling `Isolated` is equally contract-significant. Even a change that leaves old subscribers compiling can alter observable execution or exposure; version the event instead.

See sample: [`do-not-change-shipped-event-attribute-flags.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.bad.al).

## Examples

- [Good: do-not-change-shipped-event-attribute-flags.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.good.al)
- [Bad: do-not-change-shipped-event-attribute-flags.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/do-not-change-shipped-event-attribute-flags.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
