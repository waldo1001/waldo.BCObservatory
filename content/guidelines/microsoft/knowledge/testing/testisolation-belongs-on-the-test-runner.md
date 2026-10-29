---
id: guideline/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner
type: guideline
title: Configure TestIsolation on the test runner
summary: TestIsolation is a property of a Subtype = TestRunner codeunit, not of the test codeunit being executed. Its default is Disabled. Codeunit rolls back database changes after each test codeunit and Function after each test method, including changes that the code under test explicitly committed.
tier: official
language: en
tags:
  - testisolation
  - testrunner
  - autocommit
  - commit
  - rollback
  - test-order
  - database-state
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:00.826Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f296d51eed2f85295147c03cbd6048b8660d96c3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.md
    title: "microsoft/BCQuality: Configure TestIsolation on the test runner"
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
repo_path: microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.md
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
  - TestIsolation
  - AutoCommit
  - TransactionModel
---

# Configure TestIsolation on the test runner

> TestIsolation is a property of a Subtype = TestRunner codeunit, not of the test codeunit being executed. Its default is Disabled. Codeunit rolls back database changes after each test codeunit and Function after each test method, including changes that the code under test explicitly committed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.md) · microsoft layer · testing · BC all · tier official · derived

## Description

`TestIsolation` is a property of a `Subtype = TestRunner` codeunit, not of the test codeunit being executed. Its default is `Disabled`. `Codeunit` rolls back database changes after each test codeunit and `Function` after each test method, including changes that the code under test explicitly committed. Without runner isolation, an `AutoCommit` test can leave data behind and make later tests order-dependent.

## Best Practice

Run independent suites with `TestIsolation = Codeunit` or `Function`, choosing the narrowest boundary the runner supports. Pair this with the appropriate method-level `TransactionModel`: `AutoCommit` permits code under test to commit, while runner isolation still restores the database afterward. Keep isolation disabled only for an intentionally shared-state suite whose ordering and cleanup are explicit.

See sample: [`testisolation-belongs-on-the-test-runner.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.good.al).

## Anti Pattern

An `AutoCommit` test exercises committed writes under a test runner that omits `TestIsolation` or sets it to `Disabled`, then assumes the database is restored automatically. This article owns runner-level rollback; `transactionmodel-attribute-governs-test-transactions.md` separately owns the method attribute.

See sample: [`testisolation-belongs-on-the-test-runner.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.bad.al).

## Examples

- [Good: testisolation-belongs-on-the-test-runner.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.good.al)
- [Bad: testisolation-belongs-on-the-test-runner.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/testisolation-belongs-on-the-test-runner.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
