---
id: guideline/microsoft/knowledge/testing/test-one-when-per-test
type: guideline
title: Keep exactly one WHEN per test, with narrow exceptions for flow and defect-then-fix tests
summary: "This is a testing-design practice, not a BC platform requirement — no AL API enforces it, and it should not gate a change the way a platform-contradicted claim would. Each test procedure should contain exactly one [WHEN] block: one action that triggers the behaviour under test."
tier: official
language: en
tags:
  - when
  - single-action
  - bdd
  - atdd
  - given-when-then
  - flow-test
  - regression-test
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:46.628Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 69c3b37f4355d6bf681d3738cf8713e283645883
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-one-when-per-test.md
    title: "microsoft/BCQuality: Keep exactly one WHEN per test, with narrow exceptions for flow and defect-then-fix tests"
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
    - change/bcquality/157
repo_path: microsoft/knowledge/testing/test-one-when-per-test.md
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

# Keep exactly one WHEN per test, with narrow exceptions for flow and defect-then-fix tests

> This is a testing-design practice, not a BC platform requirement — no AL API enforces it, and it should not gate a change the way a platform-contradicted claim would. Each test procedure should contain exactly one [WHEN] block: one action that triggers the behaviour under test.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-one-when-per-test.md) · microsoft layer · testing · BC all · tier official · derived

## Description

This is a testing-design practice, not a BC platform requirement — no AL API enforces it, and it should not gate a change the way a platform-contradicted claim would. Each test procedure should contain exactly one `[WHEN]` block: one action that triggers the behaviour under test. A test with multiple WHENs — "do A, then do B, then check C" — is two or more tests in disguise. Splitting them gives failure isolation (a failing test points at one action, not an ambiguous sequence) and keeps each test readable as a single, falsifiable claim. A precondition action, such as posting a document so a ledger entry exists to assert against, belongs in `[GIVEN]`; only the action actually being asserted belongs in `[WHEN]`.

## Best Practice

Give each test one `[WHEN]` and one focused claim. A procedure name containing "And" or "Then" in the middle (`GetPrice_AndDiscount_ReturnsValues`) is a strong signal the test should be split.

See sample: [`test-one-when-per-test.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-one-when-per-test.good.al).

## Anti Pattern

A test that performs a first action, then a second unrelated action, then asserts on both — mixing two falsifiable claims into one procedure so a failure can't tell you which action broke.

See sample: [`test-one-when-per-test.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-one-when-per-test.bad.al).

## Flow tests — a deliberate exception

A flow test verifies the accumulated outcome of a genuinely multi-round business process (partial receipt then invoicing, several posting rounds against one document), where the sequence itself is the scenario — splitting it would lose the interaction under test. Multiple `[WHEN]` blocks are allowed only when the procedure name declares the flow, each `[WHEN]` is labelled as one round of a single scenario rather than an unrelated action, and the `[THEN]` asserts the accumulated end-state rather than assertions that decompose cleanly per action (if they do decompose cleanly, it is still two tests in disguise). Outside this shape, unit-level tests keep the strict one-WHEN rule.

## Defect-then-fix tests — a second, narrower exception

A test that reproduces a specific broken state and then verifies a subsequent action corrects it is not the same shape as an unrelated-action test, even though its `[THEN]` assertions decompose cleanly per step — clean decomposition is expected here, not a sign of two unrelated tests. This shape is permitted only when the second `[WHEN]` cannot be meaningfully tested without the first (the fix only affects the exact stale state the first action produced, so splitting would just re-run the first action inside a second test's `[GIVEN]`), and the procedure name communicates the before/after relationship.

## Examples

- [Good: test-one-when-per-test.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-one-when-per-test.good.al)
- [Bad: test-one-when-per-test.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-one-when-per-test.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
