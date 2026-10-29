---
id: guideline/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them
type: guideline
title: Extend published interfaces; do not edit them
summary: Adding a method to a shipped interface changes the contract every implementing codeunit must satisfy. Implementers can live in dependent extensions, so the addition breaks code the interface publisher cannot update; AppSourceCop reports AS0066.
tier: official
language: en
tags:
  - published-interface
  - interface-method
  - breaking-change
  - interface-extends
  - versioned-interface
  - appsourcecop
  - as0066
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:33.787Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4f04d67d3586d161a735fef7dfc6a355b4e1abcb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.md
    title: "microsoft/BCQuality: Extend published interfaces; do not edit them"
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
repo_path: microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.md
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

# Extend published interfaces; do not edit them

> Adding a method to a shipped interface changes the contract every implementing codeunit must satisfy. Implementers can live in dependent extensions, so the addition breaks code the interface publisher cannot update; AppSourceCop reports AS0066.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.md) · microsoft layer · interfaces · BC 16.. · tier official · derived

## Description

Adding a method to a shipped interface changes the contract every implementing codeunit must satisfy. Implementers can live in dependent extensions, so the addition breaks code the interface publisher cannot update; AppSourceCop reports AS0066. Interface inheritance is available from runtime 14.0 (Business Central 2024 release wave 2, BC25), but the original interface must remain unchanged.

## Best Practice

On BC25 or later, declare a new interface that `extends` the published interface and add the new method there. Existing implementers remain valid for the original contract, while new implementers opt in to the extended contract. For targets BC16 through BC24, where interface inheritance is unavailable, publish a new or versioned sibling interface instead.

See sample: [`extend-published-interfaces-dont-edit-them.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.good.al).

## Anti Pattern

Adding a procedure directly to an interface that has already shipped. Every dependent implementation must immediately add that procedure, so an otherwise compatible app update breaks its implementers.

See sample: [`extend-published-interfaces-dont-edit-them.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.bad.al).

## Examples

- [Good: extend-published-interfaces-dont-edit-them.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.good.al)
- [Bad: extend-published-interfaces-dont-edit-them.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/extend-published-interfaces-dont-edit-them.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
