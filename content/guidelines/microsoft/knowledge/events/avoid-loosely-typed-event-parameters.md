---
id: guideline/microsoft/knowledge/events/avoid-loosely-typed-event-parameters
type: guideline
title: Avoid loosely typed event parameters
summary: Passing RecordRef or xRec as event parameters weakens the contract. A RecordRef parameter erases the table type, so subscribers must inspect at run time which table they received and can be handed an unexpected one, losing compile-time checking and direct field access.
tier: official
language: en
tags:
  - recordref
  - xrec
  - type-safety
  - event-parameters
  - strong-typing
  - integration-event
  - clarity
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.638Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 894b1ad3fce04239b23252c54370e7ce75528885
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-loosely-typed-event-parameters.md
    title: "microsoft/BCQuality: Avoid loosely typed event parameters"
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
repo_path: microsoft/knowledge/events/avoid-loosely-typed-event-parameters.md
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
  - RecordRef
  - xRec
---

# Avoid loosely typed event parameters

> Passing RecordRef or xRec as event parameters weakens the contract. A RecordRef parameter erases the table type, so subscribers must inspect at run time which table they received and can be handed an unexpected one, losing compile-time checking and direct field access.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-loosely-typed-event-parameters.md) · microsoft layer · events · BC all · tier official · derived

## Description

Passing `RecordRef` or `xRec` as event parameters weakens the contract. A `RecordRef` parameter erases the table type, so subscribers must inspect at run time which table they received and can be handed an unexpected one, losing compile-time checking and direct field access. `xRec` — the previous version of a record — is context-dependent: it is meaningful inside a specific table or page trigger, but ambiguous once passed around as a parameter, and is often stale or empty outside the context that produced it. Prefer a concrete, strongly-typed record plus the specific values a subscriber actually needs, so the contract is explicit and the compiler enforces it.

## Best Practice

Give events concrete record types and explicit values, such as `(SalesLine: Record "Sales Line"; PreviousQuantity: Decimal)`, instead of a `RecordRef` or an `xRec` parameter. Subscribers then get type safety, field access, and an unambiguous contract.

See sample: [`avoid-loosely-typed-event-parameters.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-loosely-typed-event-parameters.good.al).

## Anti Pattern

Event parameters typed as `RecordRef` (no table type) or an `xRec`-style "previous record" (ambiguous, possibly stale) without strong justification. Detection: an event signature containing a `RecordRef` parameter, or a passed-through `xRec` record, where a concrete typed record and explicit values would serve.

See sample: [`avoid-loosely-typed-event-parameters.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-loosely-typed-event-parameters.bad.al).

## Examples

- [Good: avoid-loosely-typed-event-parameters.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-loosely-typed-event-parameters.good.al)
- [Bad: avoid-loosely-typed-event-parameters.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/avoid-loosely-typed-event-parameters.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
