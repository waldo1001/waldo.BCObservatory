---
id: guideline/microsoft/knowledge/security/validatetablerelation-false-on-user-input
type: guideline
title: Handle free-form input when ValidateTableRelation is false
summary: ValidateTableRelation = false intentionally lets a user keep free-form input even when it does not match TableRelation. This is supported for scenarios such as accepting a new vendor name and handling it in OnValidate.
tier: official
language: en
tags:
  - validatetablerelation
  - tablerelation
  - field
  - validation
  - input
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:57.641Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6a3a4f4a1561ba24c122229231cec7b6955ac9f7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validatetablerelation-false-on-user-input.md
    title: "microsoft/BCQuality: Handle free-form input when ValidateTableRelation is false"
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
    - change/bcquality/92
repo_path: microsoft/knowledge/security/validatetablerelation-false-on-user-input.md
layer: microsoft
kind: rule
domain: security
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
  - TableRelation
  - OnValidate
---

# Handle free-form input when ValidateTableRelation is false

> ValidateTableRelation = false intentionally lets a user keep free-form input even when it does not match TableRelation. This is supported for scenarios such as accepting a new vendor name and handling it in OnValidate.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validatetablerelation-false-on-user-input.md) · microsoft layer · security · BC all · tier official · derived

## Description

`ValidateTableRelation = false` intentionally lets a user keep free-form input even when it does not match `TableRelation`. This is supported for scenarios such as accepting a new vendor name and handling it in `OnValidate`. The risk is not the property itself; it is leaving downstream code to assume that every value identifies an existing related record.

## Best Practice

Keep the default validation when values must exist in the related table. When free-form values are intentional, set both `ValidateTableRelation = false` and `TestTableRelation = false`, then add compensating `OnValidate` logic that normalizes, validates, creates, or otherwise handles unmatched input. Document that downstream code must not assume the relation exists. See sample: [`validatetablerelation-false-on-user-input.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validatetablerelation-false-on-user-input.good.al).

## Anti Pattern

`ValidateTableRelation = false` on a user-facing field with no intentional handling for unmatched values, or leaving `TestTableRelation = true` so database relation tests reject values the UI deliberately accepts. See sample: [`validatetablerelation-false-on-user-input.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validatetablerelation-false-on-user-input.bad.al).

## Examples

- [Good: validatetablerelation-false-on-user-input.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validatetablerelation-false-on-user-input.good.al)
- [Bad: validatetablerelation-false-on-user-input.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validatetablerelation-false-on-user-input.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
