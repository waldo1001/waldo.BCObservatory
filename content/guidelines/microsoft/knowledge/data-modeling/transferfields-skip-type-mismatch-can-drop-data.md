---
id: guideline/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data
type: guideline
title: Do not use SkipFieldsNotMatchingType to hide required TransferFields mismatches
summary: Record.TransferFields copies values between fields with matching field numbers. Without SkipFieldsNotMatchingType (or with it false), a type mismatch between two fields in the same extension raises a runtime error at the point of transfer.
tier: official
language: en
tags:
  - transferfields
  - skipfieldsnotmatchingtype
  - type-mismatch
  - field-mapping
  - data-transfer
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:25.324Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7f288b2836b94d4106e712517bf702b43c5e7ab7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.md
    title: "microsoft/BCQuality: Do not use SkipFieldsNotMatchingType to hide required TransferFields mismatches"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - 16..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SkipFieldsNotMatchingType
  - InitPrimaryKeyFields
  - TransferFields
---

# Do not use SkipFieldsNotMatchingType to hide required TransferFields mismatches

> Record.TransferFields copies values between fields with matching field numbers. Without SkipFieldsNotMatchingType (or with it false), a type mismatch between two fields in the same extension raises a runtime error at the point of transfer.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.md) · microsoft layer · data-modeling · BC 16.. · tier official · derived

## Description

`Record.TransferFields` copies values between fields with matching field numbers. Without `SkipFieldsNotMatchingType` (or with it `false`), a type mismatch between two fields in the same extension raises a runtime error at the point of transfer. Setting `SkipFieldsNotMatchingType` to `true` removes that error: the field is skipped instead, and the rest of the transfer completes normally. The caller gets no indication that a field was not copied.

## Best Practice

Use `TransferFields(Source)` only when every field the destination requires, including primary key fields, is guaranteed to share a matching field number and type with the source; this form defaults `InitPrimaryKeyFields` to `true`. Fields with no matching field number, and fields whose types differ across extensions, are skipped regardless of `SkipFieldsNotMatchingType` — that parameter only governs same-extension type mismatches. If the destination depends on a field that falls into either case, map and validate it explicitly in code rather than relying on `TransferFields` to catch the gap. Use `SkipFieldsNotMatchingType = true` only when skipping same-extension type mismatches is an intentional, documented part of the transfer contract.

See sample: [`transferfields-skip-type-mismatch-can-drop-data.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.good.al).

## Anti Pattern

Using `TransferFields(Source, InitPrimaryKeyFields, true)` as a generic way to make two evolving table schemas transfer without errors, when the destination depends on every required source field being copied. A type change on either table can turn a previously transferred field into a silently skipped one without making the transfer itself fail.

See sample: [`transferfields-skip-type-mismatch-can-drop-data.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.bad.al).

## Examples

- [Good: transferfields-skip-type-mismatch-can-drop-data.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.good.al)
- [Bad: transferfields-skip-type-mismatch-can-drop-data.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/transferfields-skip-type-mismatch-can-drop-data.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
