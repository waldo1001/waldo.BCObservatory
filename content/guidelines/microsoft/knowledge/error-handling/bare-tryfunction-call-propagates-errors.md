---
id: guideline/microsoft/knowledge/error-handling/bare-tryfunction-call-propagates-errors
type: guideline
title: A bare call to a [TryFunction] propagates its error; it is not a swallowed failure
summary: A bare call to a [TryFunction] procedure propagates errors like any ordinary method call.
tier: official
language: en
tags:
  - tryfunction
  - try-method
  - bare-call
  - error-propagation
  - swallowed-error
  - try-prefix
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T00:15:45.369Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a9cf99a40ed6462196368d0f2305ec87cc5ace6d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/bare-tryfunction-call-propagates-errors.md
    title: "microsoft/BCQuality: A bare call to a [TryFunction] propagates its error; it is not a swallowed failure"
    date: "2026-11-17"
    commit: dd49341915045164248349bd891b106ebb4b34cb
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
  changes: []
  related:
    - to: object/codeunit/6240
      title: codeunit 6240 "Xml Validation"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/error-handling/bare-tryfunction-call-propagates-errors.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - TrySetValidatedDocument
  - TryAddValidationSchema
  - TryValidateAgainstSchema
---

# A bare call to a [TryFunction] propagates its error; it is not a swallowed failure

> A bare call to a [TryFunction] procedure propagates errors like any ordinary method call.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/bare-tryfunction-call-propagates-errors.md) · microsoft layer · error-handling · BC all · tier official · derived

## Description

A bare call to a `[TryFunction]` procedure propagates errors like any ordinary method call. When the caller ignores the Boolean result, the platform does not treat the invocation as a try-method call: an error raised inside it stops the caller exactly as an unattributed procedure would, and nothing is caught or converted to `false`. Calling a try-API this way — for example the System Application `Xml Validation` procedures `TrySetValidatedDocument`, `TryAddValidationSchema`, and `TryValidateAgainstSchema` — is therefore a legitimate way to let a validation error reach the user. Reviewers who know only that try methods "catch errors" misread such a call as a silent failure.

## Best Practice

Treat a bare call to a `[TryFunction]` as a throwing call. Do not report that its failure is swallowed, ignored, or invisible to the caller, and do not ask the author to capture the result only to re-raise it: when the error should propagate, the bare call already does so and keeps the original error text, code, and call stack. Recommend consuming the result only when the surrounding code visibly expects to continue past or handle the failure; that case is owned by `microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md`.

A `Try` name prefix is a convention, not a semantic. Resolve the called procedure's declaration before reasoning about its error behaviour. A `Try`-named procedure without `[TryFunction]` is an ordinary Boolean method; whether ignoring its result loses a failure depends on its body, not on its name.

## Anti Pattern

Review findings that flag a bare `[TryFunction]` call whose surrounding code and documentation intend the error to propagate, for example: "the Try-prefixed calls ignore their Boolean return value, so a parse or validation failure is silently swallowed", "the caller can never learn whether validation succeeded", or "the try semantics never activate, so errors escape as ordinary exceptions". The first two claims are false; the third describes the intended behaviour, not a defect.

Recommending `if not Try...() then Error(GetLastErrorText())` as the fix is part of the same false positive. It adds code, replaces the original error with a re-raised copy, and can move unsanitized customer content into the error message (see `microsoft/knowledge/privacy/getlasterrortext-customer-content-in-errors.md`).

## References

- [Handling errors using try methods](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-handling-errors-using-try-methods): "If a try method call doesn't use the return value, the try method operates like an ordinary method, and errors are exposed as usual."
- [System Application `Xml Validation` codeunit](https://github.com/microsoft/BCApps/blob/main/src/System%20Application/App/XML%20Validation/src/XmlValidation.Codeunit.al): every `Try*` procedure is declared `[TryFunction]`.

## Names

- [codeunit 6240 "Xml Validation"](../../../../objects/codeunit/6240.md) (possibly related: a code span names it)

---

From microsoft/BCQuality at dd49341, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
