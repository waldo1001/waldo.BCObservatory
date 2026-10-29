---
id: guideline/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers
type: guideline
title: "`DataTransfer` does not fire validation triggers or event subscribers"
summary: DataTransfer writes sets directly at the database layer, so row-based triggers and events do not run. For CopyFields, that includes the table OnModify trigger and OnBeforeModifyEvent/OnAfterModifyEvent; direct field assignment also does not call field OnValidate or its validation events.
tier: official
language: en
tags:
  - datatransfer
  - validate-trigger
  - event-subscriber
  - side-effects
  - business-logic
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:08.913Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 33173dacf64d6eb0310ee67728ad449cb18c4401
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.md
    title: "microsoft/BCQuality: `DataTransfer` does not fire validation triggers or event subscribers"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/93
    - change/bcquality/87
repo_path: microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.md
layer: microsoft
kind: rule
domain: upgrade
bc_version:
  - 21..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - DataTransfer
  - CopyFields
  - OnModify
  - OnBeforeModifyEvent
  - OnAfterModifyEvent
  - OnValidate
---

# `DataTransfer` does not fire validation triggers or event subscribers

> DataTransfer writes sets directly at the database layer, so row-based triggers and events do not run. For CopyFields, that includes the table OnModify trigger and OnBeforeModifyEvent/OnAfterModifyEvent; direct field assignment also does not call field OnValidate or its validation events.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.md) · microsoft layer · upgrade · BC 21.. · tier official · derived

## Description

`DataTransfer` writes sets directly at the database layer, so row-based triggers and events do not run. For `CopyFields`, that includes the table `OnModify` trigger and `OnBeforeModifyEvent`/`OnAfterModifyEvent`; direct field assignment also does not call field `OnValidate` or its validation events. These are separate behaviors: `Record.Validate(Field, Value)` runs field validation, while `Record.Modify(true)` runs the table `OnModify` trigger. Calling `Modify(true)` does not retroactively validate assigned fields.

For *new fields and tables added in the same change* this is fine: nothing yet depends on the validation. For *pre-existing fields with validation logic*, `DataTransfer` quietly bypasses business logic that may be load-bearing for posting, calculation, or integration scenarios.

## Best Practice

Use `DataTransfer` when set-based transfer is safe and row-level business logic is intentionally unnecessary — initial population of a new field is the canonical case. When an existing field's validation must run, loop through records and call `Validate(Field, Value)`; if the table's modify trigger must also run, follow with `Modify(true)`. If performance requires `DataTransfer`, document exactly which field-validation and row-modification triggers or subscribers are intentionally bypassed and verify that derived data remains correct.

See sample: [`datatransfer-skips-triggers-and-subscribers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.good.al).

## Anti Pattern

Reaching for `DataTransfer` to update an existing field with non-trivial `OnValidate` or `OnModify` logic, without confirming that both validation and row-modification subscribers can be skipped. Replacing it with only `Modify(true)` is also incomplete when field validation is required; call `Validate` for that field first.

See sample: [`datatransfer-skips-triggers-and-subscribers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.bad.al).

## Examples

- [Good: datatransfer-skips-triggers-and-subscribers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.good.al)
- [Bad: datatransfer-skips-triggers-and-subscribers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.bad.al)

## Names

- [DataTransfer.CopyFields() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method) (names CopyFields)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14
- [#87 Fix knowledge corpus integrity issues](../../../../changes/bcquality/87.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
