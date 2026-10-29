---
id: guideline/microsoft/knowledge/testing/test-feature-scenario-tags
type: guideline
title: Tag test codeunits with FEATURE, SCENARIO, GIVEN, WHEN, and THEN comments
summary: "Test codeunits are easier to trust and to review when they carry a four-level comment structure taken from Behaviour-/Acceptance-Test-Driven Development: [FEATURE] once at the top of the codeunit naming the functional area under test, [SCENARIO] above each test procedure stating one falsifiable…"
tier: official
language: en
tags:
  - feature
  - scenario
  - given
  - when
  - then
  - tags
  - bdd
  - atdd
  - comments
  - subtype-test
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:37.714Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 89198fb4cc676a2f501302a1bd9b2706a5db7d8c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-feature-scenario-tags.md
    title: "microsoft/BCQuality: Tag test codeunits with FEATURE, SCENARIO, GIVEN, WHEN, and THEN comments"
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
    - change/bcquality/202
    - change/bcquality/157
repo_path: microsoft/knowledge/testing/test-feature-scenario-tags.md
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

# Tag test codeunits with FEATURE, SCENARIO, GIVEN, WHEN, and THEN comments

> Test codeunits are easier to trust and to review when they carry a four-level comment structure taken from Behaviour-/Acceptance-Test-Driven Development: [FEATURE] once at the top of the codeunit naming the functional area under test, [SCENARIO] above each test procedure stating one falsifiable…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-feature-scenario-tags.md) · microsoft layer · testing · BC all · tier official · derived

## Description

Test codeunits are easier to trust and to review when they carry a four-level comment structure taken from Behaviour-/Acceptance-Test-Driven Development: `[FEATURE]` once at the top of the codeunit naming the functional area under test, `[SCENARIO]` above each test procedure stating one falsifiable business claim in plain language, and `[GIVEN]`/`[WHEN]`/`[THEN]` marking the precondition, action, and assertion inside the test body. Without these tags a test procedure is an opaque block of AL that only reveals its intent by being read line by line; a reviewer or product owner cannot scan a codeunit and know what business behaviour it covers.

## Best Practice

Put `[FEATURE]` as a comment before the codeunit's opening brace, naming the domain rather than the object — Microsoft's own guidance allows setting it once for the whole codeunit, inherited by every test in it. Put `[SCENARIO]`, matching the current BCApps corpus, as the first comment inside each test procedure's body (after `begin`), describing the scenario in business language that complements — not duplicates — the procedure name, followed by `[GIVEN]` marking the precondition setup, `[WHEN]` marking the single action under test, and `[THEN]` marking the assertions. The procedure name stays the machine-readable identity shown in test-runner output; the `[SCENARIO]` comment stays the human-readable one. Neither replaces the other.

See sample: [`test-feature-scenario-tags.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-feature-scenario-tags.good.al).

## Anti Pattern

A test procedure with no `[FEATURE]`/`[SCENARIO]`/`[GIVEN]`/`[WHEN]`/`[THEN]` structure, setup mixed freely with assertions, and a procedure name like `Test1` that says nothing about what is being verified. Nothing in the codeunit tells a reader what business rule it exists to protect.

See sample: [`test-feature-scenario-tags.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-feature-scenario-tags.bad.al).

## Examples

- [Good: test-feature-scenario-tags.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-feature-scenario-tags.good.al)
- [Bad: test-feature-scenario-tags.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/test-feature-scenario-tags.bad.al)

## Changed by

- [#202 Restore deterministic review fixture coverage](../../../../changes/bcquality/202.md), 2026-09-29
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
