---
id: guideline/microsoft/knowledge/interfaces/prefer-interface-over-case-branching
type: guideline
title: Prefer an interface with enum-backed implementation over a case statement for variant behaviour
summary: When behaviour varies by a discrete "type" — a shipping method, a posting strategy, a payment provider — the obvious first draft is a case over an enum with one branch per variant. That branch logic gets copied to every call site, and every new variant means editing all of them.
tier: official
language: en
tags:
  - interface
  - enum-implements-interface
  - polymorphism
  - implementation-property
  - case-statement
  - variant-behavior
  - dispatch
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:34.290Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b96b5e8966e7d239c613bd84bd0f4cf23f402307
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/prefer-interface-over-case-branching.md
    title: "microsoft/BCQuality: Prefer an interface with enum-backed implementation over a case statement for variant behaviour"
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
repo_path: microsoft/knowledge/interfaces/prefer-interface-over-case-branching.md
layer: microsoft
kind: rule
domain: interfaces
bc_version:
  - 16..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Prefer an interface with enum-backed implementation over a case statement for variant behaviour

> When behaviour varies by a discrete "type" — a shipping method, a posting strategy, a payment provider — the obvious first draft is a case over an enum with one branch per variant. That branch logic gets copied to every call site, and every new variant means editing all of them.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/prefer-interface-over-case-branching.md) · microsoft layer · interfaces · BC 16.. · tier official · derived

## Description

When behaviour varies by a discrete "type" — a shipping method, a posting strategy, a payment provider — the obvious first draft is a `case` over an enum with one branch per variant. That branch logic gets copied to every call site, and every new variant means editing all of them. AL interfaces (Business Central 2020 release wave 1) combined with enum-with-implementation replace that with automatic dispatch: an `interface` declares the contract, an `enum` that `implements` it maps each value to a codeunit, and the consumer assigns the enum value to an interface variable and calls the method. Adding a variant becomes a new enum value plus a new implementation codeunit — zero consumer edits. LLMs trained on older AL reach for the `case` block by default and rarely model a variant set as an interface.

## Best Practice

Declare an `interface` with the method signatures only (no bodies). Define an `enum` that `implements` the interface and set `Implementation = <Interface> = <Codeunit>;` on each value, pointing at a codeunit that `implements` the same interface. In the consumer, declare a variable of the interface type, assign the enum value to it, and call the method — the platform dispatches to the codeunit mapped to that value. New variants plug in by adding an enum value and its implementation; existing call sites are untouched. The open/closed boundary lives at the enum, not scattered across `case` blocks.

See sample: [`prefer-interface-over-case-branching.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/prefer-interface-over-case-branching.good.al).

## Anti Pattern

A `case "Shipping Method" of` block that selects behaviour inline, duplicated across the call sites that need it. Each new method forces a synchronized edit to every block, and a missed branch is a silent gap. Detection signal: a `case` statement over an enum value whose branches choose between variant computations or strategies, especially when the same shape appears in more than one procedure. Replace the enum with one that `implements` an interface, move each branch body into an implementation codeunit, and let dispatch happen through an interface variable.

See sample: [`prefer-interface-over-case-branching.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/prefer-interface-over-case-branching.bad.al).

## Examples

- [Good: prefer-interface-over-case-branching.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/prefer-interface-over-case-branching.good.al)
- [Bad: prefer-interface-over-case-branching.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/prefer-interface-over-case-branching.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
