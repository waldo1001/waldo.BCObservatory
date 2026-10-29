---
id: guideline/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code
type: guideline
title: Pin asserterror to a specific error with ExpectedError and ExpectedErrorCode
summary: asserterror passes when the guarded statement raises any error at all.
tier: official
language: en
tags:
  - asserterror
  - expectederror
  - expectederrorcode
  - negative-test
  - error-code
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:44.526Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9ebf3f84900cdfffe979be05b36714d28a4ee3b1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.md
    title: "microsoft/BCQuality: Pin asserterror to a specific error with ExpectedError and ExpectedErrorCode"
    date: "2026-09-29"
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
    - change/bcquality/159
    - change/bcquality/174
    - change/bcquality/62
repo_path: microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.md
layer: microsoft
kind: rule
domain: testing
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
  - TestField
  - ExpectedError
---

# Pin asserterror to a specific error with ExpectedError and ExpectedErrorCode

> asserterror passes when the guarded statement raises any error at all.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.md) · microsoft layer · testing · BC all · tier official · derived

## Description

`asserterror` passes when the guarded statement raises any error at all. That is too permissive for a negative test: a typo, a missing setup record, or a permission failure all raise errors, so a bare `asserterror` can go green while never exercising the rule it claims to verify — false confidence that the validation works. Constrain it. `Assert.ExpectedError(text)` checks the message of the error that was actually raised, and `Assert.ExpectedErrorCode(code)` checks its error code. Together they assert that the specific failure occurred, turning "something went wrong" into "the right thing went wrong for the right reason".

## Best Practice

Follow every `asserterror` with a verification of the error it expects, and prefer the reusable `Library Assert` helpers over hardcoded literals. For a mandatory-field check, `Assert.ExpectedTestFieldError(FieldCaption, ExpectedValue)` encapsulates both the message and the `TestField` code, so the test survives caption or code changes and does not repeat that knowledge in every method. For other errors, pair `Assert.ExpectedError` with a stable substring — ideally a shared `Label`, not an inline sentence — and, where known, `Assert.ExpectedErrorCode`. When a needed check is missing from the shared library, extend `Library Assert` (or your own assert library) with a helper rather than hardcoding message text and codes across tests; matching on a code or an invariant fragment keeps the test from going blind to the wrong error when a caption is localized.

See sample: [`asserterror-needs-expectederror-and-code.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.good.al).

## Anti Pattern

`asserterror DoInvalid();` with nothing after it. The test asserts only that the call failed somehow; swap the validation for a different bug and the test still passes, certifying a guard that may no longer fire. A negative test that cannot tell one error from another verifies almost nothing.

Not an instance of this anti-pattern: a trailing `asserterror Error(SomeLabel)` used purely as an end-of-test rollback sentinel to undo a lazily-initialized shared fixture's scratch changes (see `commit-shared-test-fixture-inside-lazy-initialize.md`). That `Error` call exists to force a rollback, not to verify that a specific failure occurred — the sentinel's own text is not meant to be asserted against, and adding an `ExpectedError` there would just duplicate the label without checking anything the test doesn't already control.

See sample: [`asserterror-needs-expectederror-and-code.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.bad.al).

## Examples

- [Good: asserterror-needs-expectederror-and-code.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.good.al)
- [Bad: asserterror-needs-expectederror-and-code.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/asserterror-needs-expectederror-and-code.bad.al)

## Changed by

- [#159 3 AL/BC testing patterns from an external BC testing expert's blog (Luc van Vugt, fluxxus.nl)](../../../../changes/bcquality/159.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#62 Add testing knowledge: UI handlers, table relations, asserterror, fixtures (P1+P2)](../../../../changes/bcquality/62.md), 2026-07-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
