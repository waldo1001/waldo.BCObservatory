---
id: guideline/microsoft/knowledge/interfaces/guard-interface-casts-with-is
type: guideline
title: Guard optional interface casts with `is`
summary: From runtime 15.0, AL can type-test an interface or Variant with is and cast it to another interface with as. The test is non-throwing, but as raises a runtime error when the underlying codeunit does not implement the target interface.
tier: official
language: en
tags:
  - interface
  - is-operator
  - as-operator
  - type-test
  - cast
  - variant
  - runtime-error
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:03.035Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ad9c38e2f8c8746438243912949ddbaf917a189b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/guard-interface-casts-with-is.md
    title: "microsoft/BCQuality: Guard optional interface casts with `is`"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/interfaces/guard-interface-casts-with-is.md
layer: microsoft
kind: rule
domain: interfaces
bc_version:
  - 25..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Guard optional interface casts with `is`

> From runtime 15.0, AL can type-test an interface or Variant with is and cast it to another interface with as. The test is non-throwing, but as raises a runtime error when the underlying codeunit does not implement the target interface.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/guard-interface-casts-with-is.md) · microsoft layer · interfaces · BC 25.. · tier official · derived

## Description

From runtime 15.0, AL can type-test an interface or `Variant` with `is` and cast it to another interface with `as`. The test is non-throwing, but `as` raises a runtime error when the underlying codeunit does not implement the target interface. This matters when an extended capability is optional or implementations can come from other extensions.

## Best Practice

Use `is` to establish that the value supports the target interface before using `as`. Cast directly only where the target implementation is an invariant guaranteed by the surrounding contract.

See sample: [`guard-interface-casts-with-is.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/guard-interface-casts-with-is.good.al).

## Anti Pattern

Using `as` unconditionally for an optional extended interface. An otherwise valid implementation of the base interface then fails at runtime merely because it does not implement the additional contract.

See sample: [`guard-interface-casts-with-is.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/guard-interface-casts-with-is.bad.al).

## Reference

[Understand type testing and casting operators for interfaces](https://learn.microsoft.com/en-us/training/modules/business-central-interfaces/type-testing)

## Examples

- [Good: guard-interface-casts-with-is.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/guard-interface-casts-with-is.good.al)
- [Bad: guard-interface-casts-with-is.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/interfaces/guard-interface-casts-with-is.bad.al)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
