---
id: guideline/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum
type: guideline
title: Set DefaultImplementation on an enum so an unmapped value still resolves to an interface
summary: An enum that implements an interface maps each declared value to a codeunit through the Implementation property. A declared value, including one supplied by an enum extension, can omit that mapping.
tier: official
language: en
tags:
  - interface
  - defaultimplementation
  - enum-implements-interface
  - fallback
  - extensible-enum
  - implementation-property
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:34.332Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a5c3bb6a5ecf8218960550b1a059b516045a1a02
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.md
    title: "microsoft/BCQuality: Set DefaultImplementation on an enum so an unmapped value still resolves to an interface"
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
    - change/bcquality/93
repo_path: microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.md
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
identifiers:
  - DefaultImplementation
---

# Set DefaultImplementation on an enum so an unmapped value still resolves to an interface

> An enum that implements an interface maps each declared value to a codeunit through the Implementation property. A declared value, including one supplied by an enum extension, can omit that mapping.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.md) · microsoft layer · interfaces · BC 16.. · tier official · derived

## Description

An `enum` that `implements` an interface maps each declared value to a codeunit through the `Implementation` property. A declared value, including one supplied by an enum extension, can omit that mapping. Assigning that value to an interface variable then fails at runtime unless the enum provides `DefaultImplementation`. This property is for declared but unmapped values; an ordinal that is no longer declared is a different case covered by `handle-unknown-enum-ordinals-with-unknownvalueimplementation`.

## Best Practice

On any extensible enum that implements an interface, set `DefaultImplementation = <Interface> = <Codeunit>;` at the enum level, pointing at a safe implementation. Values with their own `Implementation` keep using it; declared values without one resolve to the default. Do not rely on this property for persisted ordinals that match no declared enum value.

See sample: [`set-defaultimplementation-on-enum.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.good.al).

## Anti Pattern

An extensible `enum ... implements <Interface>` where at least one value sets no `Implementation` and the enum declares no `DefaultImplementation`. Code that assigns that value to an interface variable and invokes a method throws at the call site, and because the enum is extensible the failing value can be introduced by a third party long after the consumer ships. Detection signal: an enum that implements an interface, has a `value(...)` with no `Implementation`, and no enum-level `DefaultImplementation`. Add a `DefaultImplementation` mapping to close the gap.

See sample: [`set-defaultimplementation-on-enum.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.bad.al).

## Examples

- [Good: set-defaultimplementation-on-enum.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.good.al)
- [Bad: set-defaultimplementation-on-enum.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/set-defaultimplementation-on-enum.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
