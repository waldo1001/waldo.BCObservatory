---
id: guideline/community/knowledge/appsource/use-invariant-date-literals
type: guideline
title: Use invariant date literals
summary: Write fixed dates in AL with the invariant yyyymmddD syntax. A locale-dependent text value parsed with Evaluate can change meaning or fail under another user's regional settings, which makes the Marketplace extension unreliable across markets.
tier: official
language: en
tags:
  - date-literal
  - invariant-date
  - dateformula
  - localization
  - appsourcecop
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:11.659Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c38476c78be5a6424492413fa4f213cb82fe9151
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/use-invariant-date-literals.md
    title: "microsoft/BCQuality: Use invariant date literals"
    date: "2026-09-14"
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
    - change/bcquality/142
repo_path: community/knowledge/appsource/use-invariant-date-literals.md
layer: community
kind: rule
domain: appsource
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
  - yyyymmddD
  - CalcDate
---

# Use invariant date literals

> Write fixed dates in AL with the invariant yyyymmddD syntax. A locale-dependent text value parsed with Evaluate can change meaning or fail under another user's regional settings, which makes the Marketplace extension unreliable across markets.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/use-invariant-date-literals.md) · community layer · appsource · BC all · tier official · derived

## Description

Write fixed dates in AL with the invariant `yyyymmddD` syntax. A locale-dependent text value parsed with `Evaluate` can change meaning or fail under another user's regional settings, which makes the Marketplace extension unreliable across markets.

## Best Practice

Represent a fixed date directly as an AL date literal, such as `20250131D`. Use `CalcDate` with a date formula when the value is relative rather than fixed.

See sample: [`use-invariant-date-literals.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/use-invariant-date-literals.good.al).

## Anti Pattern

Building a fixed date by passing localized text such as `01/02/2025` to `Evaluate`. Detection signal: `Evaluate` converting a hard-coded or label-backed formatted string into a `Date`.

See sample: [`use-invariant-date-literals.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/use-invariant-date-literals.bad.al).

## Examples

- [Good: use-invariant-date-literals.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/use-invariant-date-literals.good.al)
- [Bad: use-invariant-date-literals.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/use-invariant-date-literals.bad.al)

## Changed by

- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
