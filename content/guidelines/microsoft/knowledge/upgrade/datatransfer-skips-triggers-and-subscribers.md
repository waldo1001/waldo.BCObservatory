---
id: guideline/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers
type: guideline
title: "`DataTransfer` does not fire validation triggers or event subscribers"
summary: DataTransfer writes sets directly at the database layer, so row-based triggers and events do not run. CopyFields skips the table OnModify trigger and modification events; CopyRows skips the corresponding insert trigger and events.
tier: official
language: en
tags:
  - datatransfer
  - validate
  - onvalidate
  - onmodify
  - event-subscriber
  - derived-data
  - copyfields
  - business-logic
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-06T00:17:27.413Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 40c7200db8639e81976c3e0e1a14edf918ef8648
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.md
    title: "microsoft/BCQuality: `DataTransfer` does not fire validation triggers or event subscribers"
    date: "2026-11-05"
    commit: 9b72501fc3199e6f8c776b4fe3aeb1a11e5dfaee
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyrows-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/264
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
  - CopyRows
  - OnValidate
  - RunTrigger
---

# `DataTransfer` does not fire validation triggers or event subscribers

> DataTransfer writes sets directly at the database layer, so row-based triggers and events do not run. CopyFields skips the table OnModify trigger and modification events; CopyRows skips the corresponding insert trigger and events.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.md) · microsoft layer · upgrade · BC 21.. · tier official · derived

## Description

`DataTransfer` writes sets directly at the database layer, so row-based triggers and events do not run. `CopyFields` skips the table `OnModify` trigger and modification events; `CopyRows` skips the corresponding insert trigger and events. Direct field assignment does not call field `OnValidate` or its validation events: `Record.Validate(Field, Value)` runs field validation, while `Record.Modify(true)` separately runs the table `OnModify` trigger.

A field or table being newly introduced does not by itself prove that bypassing logic is safe. A new field can have validation logic that maintains derived data, and an existing table can already have triggers and subscribers that must observe writes, including subscribers in other extensions.

## Best Practice

Use `DataTransfer` when set-based transfer preserves the required result and row-level business logic can safely be skipped. Establish which field-validation, insert/modify, and subscriber logic is bypassed and verify that affected invariants and derived data remain correct or are populated explicitly by the migration. For existing load-bearing logic, record the specific bypass and how correctness was verified; intent or a comment alone is not proof of safety.

When field validation must run, loop through records and call `Validate(Field, Value)`. If the table's `OnModify` trigger must also run, follow with `Modify(true)`; `Modify(true)` does not retroactively validate assigned fields. The required business effects, not record count or field newness, determine whether a record loop is needed.

See sample: [`datatransfer-skips-triggers-and-subscribers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.good.al).

## Anti Pattern

Using `DataTransfer` when skipped validation, table triggers, or subscribers are required to keep related or derived data correct, including when the field being written is new. Replacing it with only `Modify(true)` is also incomplete when field validation is required. Missing documentation alone is not evidence of a functional defect; identify the required effect that would be lost.

See sample: [`datatransfer-skips-triggers-and-subscribers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.bad.al).

## References

- [Microsoft Learn: Transferring data between tables using DataTransfer](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-data-transfer) — row-based triggers and events are not executed.
- [Microsoft Learn: Record.Validate](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-validate-method) — runs field validation.
- [Microsoft Learn: Record.Modify](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modify-method) — `RunTrigger` controls the table `OnModify` trigger.

## Examples

- [Good: datatransfer-skips-triggers-and-subscribers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.good.al)
- [Bad: datatransfer-skips-triggers-and-subscribers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-skips-triggers-and-subscribers.bad.al)

## Names

- [DataTransfer.CopyFields() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method) (names CopyFields)
- [DataTransfer.CopyRows() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyrows-method) (names CopyRows)

## Changed by

- [#264 knowledge(upgrade): clarify DataTransfer defaults and bypass safety](../../../../changes/bcquality/264.md), 2026-11-05
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14
- [#87 Fix knowledge corpus integrity issues](../../../../changes/bcquality/87.md), 2026-07-13

---

From microsoft/BCQuality at 9b72501, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
