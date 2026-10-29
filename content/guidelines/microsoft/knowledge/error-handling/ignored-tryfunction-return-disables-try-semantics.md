---
id: guideline/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics
type: guideline
title: Consume a TryFunction return value to enable try semantics
summary: A procedure marked [TryFunction] catches errors only when the caller uses its Boolean return value. An assignment or conditional makes the invocation a try-method call; a bare call is treated as an ordinary procedure call and exposes errors as usual.
tier: official
language: en
tags:
  - tryfunction
  - try-method
  - boolean-return
  - ignored-return-value
  - error-propagation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.503Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 902528bc48d67b994a30e7e0746ea206b3d2828c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md
    title: "microsoft/BCQuality: Consume a TryFunction return value to enable try semantics"
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
    - change/bcquality/108
    - change/bcquality/99
repo_path: microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - 13..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Consume a TryFunction return value to enable try semantics

> A procedure marked [TryFunction] catches errors only when the caller uses its Boolean return value. An assignment or conditional makes the invocation a try-method call; a bare call is treated as an ordinary procedure call and exposes errors as usual.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md) · microsoft layer · error-handling · BC 13.. · tier official · derived

## Description

A procedure marked `[TryFunction]` catches errors only when the caller uses its Boolean return value. An assignment or conditional makes the invocation a try-method call; a bare call is treated as an ordinary procedure call and exposes errors as usual. The attribute alone does not make every invocation non-throwing.

## Best Practice

Consume the result directly: assign it to a Boolean or use the call in an `if` condition. Handle `false` immediately while the last-error state still describes that failure.

See sample: [`ignored-tryfunction-return-disables-try-semantics.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.good.al).

## Anti Pattern

Calling a `[TryFunction]` procedure as a standalone statement and assuming the attribute suppresses its errors. The call has ordinary error semantics because its Boolean result is ignored.

See sample: [`ignored-tryfunction-return-disables-try-semantics.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.bad.al).

## See also

`microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.md` owns transaction rollback expectations after a try method has actually caught an error.

## Examples

- [Good: ignored-tryfunction-return-disables-try-semantics.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.good.al)
- [Bad: ignored-tryfunction-return-disables-try-semantics.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
