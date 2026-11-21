---
id: guideline/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics
type: guideline
title: Consume a TryFunction return value when the caller handles the failure
summary: A [TryFunction] catches errors only when the caller uses its Boolean return value. An assignment or conditional makes the invocation a try-method call; a bare call is treated as an ordinary procedure call and exposes errors as usual.
tier: official
language: en
tags:
  - tryfunction
  - try-method
  - boolean-return
  - ignored-return-value
  - error-propagation
  - dead-failure-branch
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-21T00:15:56.434Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1c58e453303d8edd057eed0dd1b020198000b3d9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md
    title: "microsoft/BCQuality: Consume a TryFunction return value when the caller handles the failure"
    date: "2026-11-17"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/debugger/debugger-getlasterrortext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-getlasterrorcode-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-getlasterrorobject-method
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
identifiers:
  - GetLastErrorText
  - GetLastErrorCode
  - GetLastErrorObject
---

# Consume a TryFunction return value when the caller handles the failure

> A [TryFunction] catches errors only when the caller uses its Boolean return value. An assignment or conditional makes the invocation a try-method call; a bare call is treated as an ordinary procedure call and exposes errors as usual.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md) · microsoft layer · error-handling · BC 13.. · tier official · derived

## Description

A `[TryFunction]` catches errors only when the caller uses its Boolean return value. An assignment or conditional makes the invocation a try-method call; a bare call is treated as an ordinary procedure call and exposes errors as usual. The attribute alone does not make every invocation non-throwing, so code that handles the failure of a bare call never sees that failure: the error leaves the procedure before the handling runs.

## Best Practice

When the caller must continue, log, count, or translate the failure, consume the result directly: assign it to a Boolean or use the call in an `if` condition. Handle `false` immediately while the last-error state still describes that failure.

When the error should simply propagate, a bare call is correct and needs no change; see `microsoft/knowledge/error-handling/bare-tryfunction-call-propagates-errors.md`.

See sample: [`ignored-tryfunction-return-disables-try-semantics.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.good.al).

## Anti Pattern

Calling a `[TryFunction]` procedure as a standalone statement while the surrounding code expects the failure to be caught. Detect it from code, not from the call shape alone: the bare call is followed by a `GetLastErrorText`, `GetLastErrorCode`, or `GetLastErrorObject` check, a failure branch, failure logging, or a `false`/failure result; or it sits in a loop that is meant to continue past failed items. None of that handling sees the call's error, because the error stops the procedure first.

A bare call with no such handling is intended propagation, not this anti-pattern.

See sample: [`ignored-tryfunction-return-disables-try-semantics.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.bad.al).

## See also

`microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.md` owns transaction rollback expectations after a try method has actually caught an error.

## References

- [Handling errors using try methods](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-handling-errors-using-try-methods): "If a try method call uses the return value in an `OK:=` statement or a conditional statement such as `if-then`, errors are caught."

## Examples

- [Good: ignored-tryfunction-return-disables-try-semantics.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.good.al)
- [Bad: ignored-tryfunction-return-disables-try-semantics.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.bad.al)

## Names

- [Debugger.GetLastErrorText() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/debugger/debugger-getlasterrortext-method) (names GetLastErrorText)
- [System.GetLastErrorCode() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-getlasterrorcode-method) (names GetLastErrorCode)
- [System.GetLastErrorObject() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-getlasterrorobject-method) (names GetLastErrorObject)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
