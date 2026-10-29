---
id: guideline/microsoft/knowledge/upgrade/datatransfer-for-bulk-init
type: guideline
title: Use `DataTransfer` for bulk updates on large tables
summary: Tables that can contain more than 300,000 records, and any newly added field on an existing table, should be initialized with DataTransfer rather than a repeat ... Modify ... until Next() = 0 loop.
tier: official
language: en
tags:
  - datatransfer
  - large-dataset
  - bulk-update
  - modifyall
  - copyfields
  - new-field
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:08.509Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 830dbdb000881e5c9efb28a45932afcaf3b03737
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.md
    title: "microsoft/BCQuality: Use `DataTransfer` for bulk updates on large tables"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addsourcefilter-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addconstantvalue-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addfieldvalue-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
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
  - AddSourceFilter
  - AddConstantValue
  - AddFieldValue
---

# Use `DataTransfer` for bulk updates on large tables

> Tables that can contain more than 300,000 records, and any newly added field on an existing table, should be initialized with DataTransfer rather than a repeat ... Modify ... until Next() = 0 loop.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.md) · microsoft layer · upgrade · BC 21.. · tier official · derived

## Description

Tables that can contain more than 300,000 records, and any newly added field on an existing table, should be initialized with `DataTransfer` rather than a `repeat ... Modify ... until Next() = 0` loop. `DataTransfer` issues a single set-based statement to the database; the loop/modify pattern issues one round-trip per row and accumulates write locks for the duration of the upgrade. On the volumes that drive upgrade pain — ledger entries, item ledger entries, price list lines — the difference is the upgrade running for minutes instead of hours.

## Best Practice

For a bulk update use a `DataTransfer` variable: call `SetTables(Database::"...", Database::"...")` (source and destination may be the same table), add filters with `AddSourceFilter`, set the target value with `AddConstantValue` (or copy a source field with `AddFieldValue`), and execute with `CopyFields()`. To express multiple distinct updates against the same table, `Clear` the `DataTransfer` between executions and configure the next one.

See sample: [`datatransfer-for-bulk-init.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.good.al).

## Anti Pattern

Iterating with `FindSet(true) ... repeat ... Modify() ... until Next() = 0` to set a single field across an entire large table. On 300k+ rows this is the canonical slow-upgrade footgun.

See sample: [`datatransfer-for-bulk-init.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.bad.al).

## See also

- `datatransfer-skips-triggers-and-subscribers.md` — `DataTransfer` does not raise field validation triggers or event subscribers; if a row needs validation logic, `DataTransfer` is the wrong tool.

## Examples

- [Good: datatransfer-for-bulk-init.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.good.al)
- [Bad: datatransfer-for-bulk-init.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/datatransfer-for-bulk-init.bad.al)

## Names

- [DataTransfer.AddSourceFilter(Integer, Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addsourcefilter-method) (names AddSourceFilter)
- [DataTransfer.AddConstantValue(Any, Integer) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addconstantvalue-method) (names AddConstantValue)
- [DataTransfer.AddFieldValue(Integer, Integer) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-addfieldvalue-method) (names AddFieldValue)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#87 Fix knowledge corpus integrity issues](../../../../changes/bcquality/87.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
