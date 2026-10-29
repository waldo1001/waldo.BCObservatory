---
id: guideline/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts
type: guideline
title: Treat local and internal events as subscriber contracts
summary: The local and internal access modifiers on Business and Integration event publishers restrict who can raise the procedure; they do not prevent dependent extensions from subscribing.
tier: official
language: en
tags:
  - local-event
  - internal-event
  - event-subscriber
  - compatibility
  - access-modifier
  - integration-event
  - business-event
  - parameter-name
  - var-parameter
  - appsourcecop
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.549Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 004819b3daf2220dd8b323e6ba4e8740e35895c7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.md
    title: "microsoft/BCQuality: Treat local and internal events as subscriber contracts"
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
repo_path: microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.md
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
  - internalsVisibleTo
---

# Treat local and internal events as subscriber contracts

> The local and internal access modifiers on Business and Integration event publishers restrict who can raise the procedure; they do not prevent dependent extensions from subscribing.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.md) · microsoft layer · events · BC all · tier official · derived

## Description

The `local` and `internal` access modifiers on Business and Integration event publishers restrict who can raise the procedure; they do not prevent dependent extensions from subscribing. Once shipped, the event name and each existing parameter's name, type/subtype, and value-versus-`var` passing mode are compatibility contracts even when the publisher is not public. Parameter order is not a subscriber contract because subscribers bind the parameters they use by name. This differs from `[InternalEvent]`, which is module-only except for modules named by `internalsVisibleTo`.

## Best Practice

Preserve a shipped Business or Integration event's identity and every existing parameter's name, type/subtype, and passing mode regardless of the procedure access modifier. AS0025 protects names and types, while AS0063 and AS0077 protect removal and addition of `var`. New parameters may be added at any position on a `local` or `internal` event because subscribers can omit them; public event procedures follow the stricter caller contract described by `add-new-event-parameters-at-the-end`.

See sample: [`treat-local-and-internal-events-as-subscriber-contracts.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.good.al).

## Anti Pattern

Renaming or removing an existing parameter, changing its type/subtype, or adding/removing its `var` modifier because the event publisher procedure is `local` or `internal`. AppSourceCop checks these subscriber-breaking changes because dependent event subscribers can still bind to the event. Reordering unchanged parameters, or inserting a new parameter among them, is not this anti-pattern.

See sample: [`treat-local-and-internal-events-as-subscriber-contracts.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.bad.al).

## Examples

- [Good: treat-local-and-internal-events-as-subscriber-contracts.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.good.al)
- [Bad: treat-local-and-internal-events-as-subscriber-contracts.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/treat-local-and-internal-events-as-subscriber-contracts.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
