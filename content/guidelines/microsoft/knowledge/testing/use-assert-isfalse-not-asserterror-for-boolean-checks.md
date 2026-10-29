---
id: guideline/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks
type: guideline
title: Use Assert.IsFalse to check a boolean result, not asserterror around Assert.IsTrue
summary: asserterror exists to assert that a statement raises a runtime error; it is not a general-purpose way to invert a boolean check.
tier: official
language: en
tags:
  - assert
  - isfalse
  - istrue
  - asserterror
  - boolean-check
  - negative-test
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:45.324Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 182a62b5553a3c254e711443c73d1861b7b43858
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.md
    title: "microsoft/BCQuality: Use Assert.IsFalse to check a boolean result, not asserterror around Assert.IsTrue"
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
repo_path: microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.md
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
identifiers: []
---

# Use Assert.IsFalse to check a boolean result, not asserterror around Assert.IsTrue

> asserterror exists to assert that a statement raises a runtime error; it is not a general-purpose way to invert a boolean check.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.md) · microsoft layer · testing · BC all · tier official · derived

## Description

`asserterror` exists to assert that a statement raises a runtime error; it is not a general-purpose way to invert a boolean check. Wrapping `asserterror Assert.IsTrue(SomeFunc(), Msg)` to verify that `SomeFunc()` returns `false` tests whether `Assert.IsTrue`'s own error-raising behavior fired, not the value `SomeFunc()` actually returned.

## Best Practice

When the code under test returns a `Boolean` rather than raising an error, assert the value directly with `Assert.IsFalse(SomeFunc(), Msg)` (or `Assert.IsTrue` for the positive case). Reserve `asserterror` for statements expected to actually raise an error.

See sample: [`use-assert-isfalse-not-asserterror-for-boolean-checks.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.good.al).

## Anti Pattern

`asserterror Assert.IsTrue(SomeFunc(), Msg);` to verify `SomeFunc()` is `false`. It passes today because `Assert.IsTrue` happens to raise an error on failure, but it verifies the assertion helper's error-raising behavior, not the value under test.

See sample: [`use-assert-isfalse-not-asserterror-for-boolean-checks.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.bad.al).

## Source

Drawn from Luc van Vugt's "TDD in NAV – ASSERTERROR or IsFalse": https://www.fluxxus.nl/index.php/bc/tdd-in-nav-asserterror-or-isfalse/. The post's own example and reasoning — reserve `asserterror` for the product code actually raising an error, use `Assert.IsFalse`/`Assert.IsTrue` to check a boolean the test framework itself computes — carries over directly; the overlap with `asserterror-needs-expectederror-and-code.md` below is this repository's own addition, not from the source.

## Scope

This rule and `asserterror-needs-expectederror-and-code.md` can both match `asserterror Assert.IsTrue(SomeFunc(), Msg);` with nothing after it — the generic rule sees a bare `asserterror`, this one sees `asserterror` wrapping an `Assert.IsTrue`/`Assert.IsFalse` call used to invert a boolean. This rule wins for that shape: the fix is to replace the construct with a direct `Assert.IsFalse`/`Assert.IsTrue` call, not to add `Assert.ExpectedError`/`Assert.ExpectedErrorCode` after it. `asserterror-needs-expectederror-and-code.md` still applies on its own to every other bare `asserterror`, including one guarding `Assert.IsTrue`/`Assert.IsFalse` where the intent genuinely is to assert that the guarded call itself raises an error (for example, asserting that a validation helper errors before it can even return a boolean).

## Examples

- [Good: use-assert-isfalse-not-asserterror-for-boolean-checks.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.good.al)
- [Bad: use-assert-isfalse-not-asserterror-for-boolean-checks.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-assert-isfalse-not-asserterror-for-boolean-checks.bad.al)

## Changed by

- [#159 3 AL/BC testing patterns from an external BC testing expert's blog (Luc van Vugt, fluxxus.nl)](../../../../changes/bcquality/159.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
