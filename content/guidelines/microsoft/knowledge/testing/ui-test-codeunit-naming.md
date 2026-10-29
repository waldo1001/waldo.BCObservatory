---
id: guideline/microsoft/knowledge/testing/ui-test-codeunit-naming
type: guideline
title: Separate UI-layer and logic-layer tests into different codeunits
summary: A test codeunit that drives pages through TestPage — opening pages, reading FactBox parts, triggering field OnValidate through the page — is testing a different layer than a codeunit that calls business-logic procedures directly.
tier: official
language: en
tags:
  - ui-test
  - testpage
  - naming
  - suffix
  - codeunit
  - page-testing
  - team-convention
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:51.625Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0790f37f38a035e72dbe2096e1432727b632c8ff
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/ui-test-codeunit-naming.md
    title: "microsoft/BCQuality: Separate UI-layer and logic-layer tests into different codeunits"
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
repo_path: microsoft/knowledge/testing/ui-test-codeunit-naming.md
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
  - TestPage
  - OnValidate
---

# Separate UI-layer and logic-layer tests into different codeunits

> A test codeunit that drives pages through TestPage — opening pages, reading FactBox parts, triggering field OnValidate through the page — is testing a different layer than a codeunit that calls business-logic procedures directly.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/ui-test-codeunit-naming.md) · microsoft layer · testing · BC all · tier official · derived

## Description

A test codeunit that drives pages through `TestPage` — opening pages, reading FactBox parts, triggering field `OnValidate` through the page — is testing a different layer than a codeunit that calls business-logic procedures directly. Readers need to know which layer a given test exercises without opening it, and a single codeunit that mixes both kinds of test hides that distinction: a failure could mean the logic broke, the page broke, or both. The `_UT` suffix and adjacent-object-ID pairing below are one team's naming convention for making that split visible, not a BCApps-wide naming standard — BCApps itself uses `UT` for unit tests generally, not specifically to mean "UI layer," and does not treat adjacent object IDs as a semantic pairing mechanism. Apply the suffix only on a project that has explicitly adopted this convention.

## Best Practice

Keep UI-layer (`TestPage`-driven) and logic-layer tests in separate codeunits regardless of naming. Projects that adopt a `_UT`-style suffix convention should apply it consistently to every UI-layer test codeunit, keep the corresponding logic-only codeunit unsuffixed, and document the convention where the team's other naming rules live.

See sample: [`ui-test-codeunit-naming.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/ui-test-codeunit-naming.good.al).

## Anti Pattern

One codeunit that mixes a direct logic-call test and a `TestPage`-driven test side by side — a failing test no longer tells a reader which layer actually broke. On a project that has adopted the `_UT` convention, a UI-layer codeunit missing the suffix is also an instance of this anti-pattern; on a project that has not adopted it, the suffix itself is not required.

See sample: [`ui-test-codeunit-naming.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/ui-test-codeunit-naming.bad.al).

## Examples

- [Good: ui-test-codeunit-naming.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/ui-test-codeunit-naming.good.al)
- [Bad: ui-test-codeunit-naming.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/ui-test-codeunit-naming.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
