---
id: guideline/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation
type: guideline
title: Handle unknown enum ordinals with UnknownValueImplementation
summary: "An enum ordinal can remain in persisted data after the enum extension that declared it is uninstalled. The ordinal is then unknown: it matches no currently declared enum value. DefaultImplementation does not cover this case; it covers declared values that have no explicit interface implementation."
tier: official
language: en
tags:
  - unknownvalueimplementation
  - unknown-enum-value
  - persisted-ordinal
  - enum-extension
  - extension-uninstall
  - interface-fallback
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:34.298Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: de508109bbea17f4ab6a82e9a2b5727b968e73a7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.md
    title: "microsoft/BCQuality: Handle unknown enum ordinals with UnknownValueImplementation"
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
repo_path: microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.md
layer: microsoft
kind: rule
domain: interfaces
bc_version:
  - 18..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - DefaultImplementation
  - UnknownValueImplementation
---

# Handle unknown enum ordinals with UnknownValueImplementation

> An enum ordinal can remain in persisted data after the enum extension that declared it is uninstalled. The ordinal is then unknown: it matches no currently declared enum value. DefaultImplementation does not cover this case; it covers declared values that have no explicit interface implementation.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.md) · microsoft layer · interfaces · BC 18.. · tier official · derived

## Description

An enum ordinal can remain in persisted data after the enum extension that declared it is uninstalled. The ordinal is then unknown: it matches no currently declared enum value. `DefaultImplementation` does not cover this case; it covers declared values that have no explicit interface implementation. `UnknownValueImplementation`, available from runtime 7.0 (Business Central 2021 release wave 1, BC18), provides the distinct interface implementation for an unknown ordinal.

## Best Practice

On BC18 or later, set `UnknownValueImplementation = <Interface> = <Codeunit>;` on an enum that implements an interface and can be persisted. Use an implementation that reports a clear domain error or safely contains the unknown state. Keep `DefaultImplementation` separately when declared but unmapped values also need a fallback.

See sample: [`handle-unknown-enum-ordinals-with-unknownvalueimplementation.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.good.al).

## Anti Pattern

Defining only `DefaultImplementation` and assuming it also handles a stored ordinal whose enum value has disappeared. After an enum extension is uninstalled, converting that unknown ordinal to the interface can produce a technical runtime error instead of controlled handling.

See sample: [`handle-unknown-enum-ordinals-with-unknownvalueimplementation.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.bad.al).

## Examples

- [Good: handle-unknown-enum-ordinals-with-unknownvalueimplementation.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.good.al)
- [Bad: handle-unknown-enum-ordinals-with-unknownvalueimplementation.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/handle-unknown-enum-ordinals-with-unknownvalueimplementation.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
