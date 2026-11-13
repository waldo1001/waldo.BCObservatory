---
id: guideline/microsoft/knowledge/upgrade/datatransfer-for-bulk-init
type: guideline
title: Prefer `DataTransfer` for set-based upgrade field updates
summary: DataTransfer performs supported field initialization and field-to-field copies using set-based SQL instead of per-record AL writes.
tier: official
language: en
tags:
  - datatransfer
  - findset
  - modify
  - bulk-update
  - copyfields
  - new-field
  - modifyall
  - field-copy
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T00:13:31.718Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a56f85f7e993a09248d364c89a3d3f0d05f6383a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.md
    title: "microsoft/BCQuality: Prefer `DataTransfer` for set-based upgrade field updates"
    date: "2026-11-05"
    commit: 416f1308b6a2b507d0ac29e33b53d321b5d0a170
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-settables-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addsourcefilter-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addconstantvalue-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addfieldvalue-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addjoin-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
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
    - change/bcquality/87
repo_path: microsoft/knowledge/upgrade/datatransfer-for-bulk-init.md
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
  - SetTables
  - AddSourceFilter
  - AddConstantValue
  - AddFieldValue
  - AddJoin
  - ModifyAll
---

# Prefer `DataTransfer` for set-based upgrade field updates

> DataTransfer performs supported field initialization and field-to-field copies using set-based SQL instead of per-record AL writes.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.md) · microsoft layer · upgrade · BC 21.. · tier official · derived

## Description

`DataTransfer` performs supported field initialization and field-to-field copies using set-based SQL instead of per-record AL writes. In the Microsoft Learn field-copy example, `CopyFields` issues at most two SQL queries in total where the record-based version issues three per row, measured at about 200 times faster; that is one measured example, not a guarantee for every upgrade. There is no minimum record count for using it; the benefit of avoiding per-row work grows with the data, and an upgrade must handle the data in each company. BCQuality recommends choosing a safe set-based operation during design, without waiting for the table to become large.

## Best Practice

In upgrade code, prefer `DataTransfer` over an otherwise equivalent `FindSet ... Modify ... Next` loop, regardless of current record count. An equivalent loop on a table without realistic growth, such as a configuration table holding a few rows per company, still contradicts this preference, but it is not the Anti Pattern below. Use `SetTables` (the same table for an in-place update), `AddSourceFilter`, `AddConstantValue` or `AddFieldValue`, then `CopyFields`. As a precaution, `Clear` the variable before reusing it for a different transfer; the referenced documentation does not describe reuse.

Check that the tables and fields are supported and that the filters and field mappings preserve the intended result. Non-SQL, system, and virtual tables are not supported; the destination must not be audited or obsolete. For cross-table field copies, use `AddJoin` on source fields that identify source rows uniquely; the runtime rejects non-unique joins. Only matching destination rows are updated. Before bypassing row-level logic, apply [the trigger and subscriber guidance](datatransfer-skips-triggers-and-subscribers.md); a newly added field alone does not establish that the bypass is safe.

Keep record-based processing when required validation, table triggers, subscribers, or transformations cannot be preserved by the transfer; the trigger and subscriber guidance owns findings about logic a transfer skips. A value computed once and applied to a filtered set can still be a `DataTransfer` constant. Explain a non-obvious constraint rather than choosing a loop solely because the current table is small. An equivalent `ModifyAll` call, new or existing, is not a violation merely because it does not use `DataTransfer`, although its documented row-by-row fallback conditions still apply. Neither is a `Get`/`Modify` update of one known record.

See sample: [`datatransfer-for-bulk-init.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.good.al).

## Anti Pattern

An upgrade loop that only assigns a constant or copies a field and calls `Modify` on a table whose rows are not bounded by design and can realistically reach large volumes, such as ledger, entry, document-line, or log tables, when an equivalent `DataTransfer` is supported and no required per-row effects would be lost. Assuming that `DataTransfer` is available only above a row-count threshold is also incorrect. Do not infer a material performance defect from an operation whose row count is bounded by design (for example, one setup record) or from the absence of `DataTransfer` alone; the preference does not justify dropping required business logic. A `DataTransfer` that skips required validation, triggers, or subscribers is a defect under [the trigger and subscriber guidance](datatransfer-skips-triggers-and-subscribers.md), not under this article.

See sample: [`datatransfer-for-bulk-init.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.bad.al).

## References

- [Microsoft Learn: Transferring data between tables using DataTransfer](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-data-transfer) — set-based operations, the measured `CopyFields` example, supported tables, and source-join uniqueness.
- [Use ModifyAll only for equivalent bulk assignments](../performance/prefer-modifyall-over-per-row-modify.md) — the existing set-based alternative and its semantic constraints.
- [Triggers, subscribers, and media fields can silently regress ModifyAll / DeleteAll](../performance/triggers-and-media-field-regress-modifyall.md) — conditions under which `ModifyAll` runs row by row.

## Examples

- [Good: datatransfer-for-bulk-init.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.good.al)
- [Bad: datatransfer-for-bulk-init.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.bad.al)

## Names

- [DataTransfer.CopyFields() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method) (names CopyFields)
- [DataTransfer.SetTables(Integer, Integer) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-settables-method) (names SetTables)
- [DataTransfer.AddSourceFilter(Integer, Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addsourcefilter-method) (names AddSourceFilter)
- [DataTransfer.AddConstantValue(Any, Integer) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addconstantvalue-method) (names AddConstantValue)
- [DataTransfer.AddFieldValue(Integer, Integer) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addfieldvalue-method) (names AddFieldValue)
- [DataTransfer.AddJoin(Integer, Integer) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addjoin-method) (names AddJoin)
- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#264 knowledge(upgrade): clarify DataTransfer defaults and bypass safety](../../../../changes/bcquality/264.md), 2026-11-05
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#87 Fix knowledge corpus integrity issues](../../../../changes/bcquality/87.md), 2026-07-13

---

From microsoft/BCQuality at 416f130, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
