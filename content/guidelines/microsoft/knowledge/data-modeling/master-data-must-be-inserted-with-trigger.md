---
id: guideline/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger
type: guideline
title: Create master records with `Insert(true)` unless the caller does the trigger's work itself
summary: "Record.Insert() does not run OnInsert: RunTrigger defaults to false. On a standard master table that trigger initializes the record. Unless an OnBeforeInsert subscriber sets IsHandled, Customer.OnInsert assigns No. and No. Series from Sales & Receivables Setup when No."
tier: official
language: en
tags:
  - insert
  - runtrigger
  - oninsert
  - master-data
  - no-series
  - customer
  - item
  - import
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:29.405Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2e2c3a107af0bf46ad1f3d6f6651d668f151d665
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.md
    title: "microsoft/BCQuality: Create master records with `Insert(true)` unless the caller does the trigger's work itself"
    date: "2026-10-05"
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
    - change/bcquality/209
  related:
    - to: object/enum/28
      title: enum 28 "Costing Method"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/15
      title: table 15 "G/L Account"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.md
layer: microsoft
kind: rule
domain: data-modeling
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
  - OnInsert
  - RunTrigger
  - OnBeforeInsert
  - IsHandled
  - UpdateReferencedIds
  - CustomerDataMigrationFacade
  - ItemDataMigrationFacade
  - GLAccDataMigrationFacade
  - CopyItem
  - ExportItemData
  - SetDefaultSalesperson
  - UpdateDefaultDim
  - CreateNewItem
  - InitTargetItem
---

# Create master records with `Insert(true)` unless the caller does the trigger's work itself

> Record.Insert() does not run OnInsert: RunTrigger defaults to false. On a standard master table that trigger initializes the record. Unless an OnBeforeInsert subscriber sets IsHandled, Customer.OnInsert assigns No. and No. Series from Sales & Receivables Setup when No.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`Record.Insert()` does not run `OnInsert`: `RunTrigger` defaults to `false`. On a standard master table that trigger initializes the record. Unless an `OnBeforeInsert` subscriber sets `IsHandled`, `Customer.OnInsert` assigns `No.` and `No. Series` from Sales & Receivables Setup when `No.` is blank, then defaults `Invoice Disc. Code`, defaults a blank salesperson from the user's User Setup `"Salespers./Purch. Code"` when one is set, creates the contact when Marketing Setup has a `"Bus. Rel. Code for Customers"` (unless the insert comes from a contact or from a template with a contact), overwrites `Global Dimension 1/2 Code` from the customer's Default Dimension rows and clears them when there are none (`DimMgt.UpdateDefaultDim` creates no default dimensions), calls `UpdateReferencedIds`, and sets the last-modified timestamps. `Item.OnInsert` assigns `No.`, `No. Series`, and `Costing Method` when `No.` is blank and, blank or not, runs the same global-dimension update and `UpdateReferencedIds`.

A bare `Insert()` produces a row that looks complete but lacks what downstream code assumes: with a blank `No.` the key stays blank; with a supplied `No.` the contact, defaults, and timestamps are silently missing. This is the caller-side counterpart of [`master-table-no-from-number-series-in-oninsert`](master-table-no-from-number-series-in-oninsert.md): that design only works when callers run the trigger.

## Best Practice

When code creates a record in `Customer`, `Vendor`, `Item`, `G/L Account`, `Contact`, or a custom master with initializing `OnInsert` logic, call `Insert(true)`, then validate fields and `Modify(true)`. Importing from an external source is not an exception: BCApps' data-migration facades (`CustomerDataMigrationFacade`, `ItemDataMigrationFacade`, `GLAccDataMigrationFacade`) use `Insert(true)`. This is the "trigger does work the caller depends on" case of [`pass-false-to-insert-when-trigger-not-needed`](../performance/pass-false-to-insert-when-trigger-not-needed.md); the decision stays per call.

Legitimate `Insert()` calls, not in scope: temporary records and buffer or staging tables; a caller that visibly assigns what the trigger would and then applies a template (`CatalogItemManagement.CreateNewItem` sets `No.` and `Costing Method` before `Item.Insert()`) or copies from a source record (`CopyItem` transfers the source item's fields and assigns the target `No.` before `TargetItem.Insert()`); and an XMLport that round-trips complete rows exported from Business Central (`ExportItemData`). `Modify()` without the trigger is routine on masters for technical fields and is not covered. Upgrade code that bypasses triggers is covered by [`datatransfer-skips-triggers-and-subscribers`](../upgrade/datatransfer-skips-triggers-and-subscribers.md).

See sample: [`master-data-must-be-inserted-with-trigger.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.good.al).

## Anti Pattern

Code creates a non-temporary master record with `Init`, field assignments or `Validate` calls, and `Insert()`/`Insert(false)`, without itself assigning the number and the other fields `OnInsert` would set.

See sample: [`master-data-must-be-inserted-with-trigger.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.bad.al).

## References

- [Record.Insert(Boolean) method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-insert-boolean-method): "If this parameter is false, the code in the OnInsert trigger is not executed. The default value is false."
- BCApps `src/Layers/W1/BaseApp/Sales/Customer/Customer.Table.al`, `OnInsert`, lines 2432-2472; `src/Layers/W1/BaseApp/Inventory/Item/Item.Table.al`, `OnInsert`, from line 2587.
- BCApps `src/Layers/W1/BaseApp/Sales/Customer/Customer.Table.al`, `SetDefaultSalesperson`, lines 3848-3863; `src/Layers/W1/BaseApp/CRM/BusinessRelation/CustContUpdate.Codeunit.al`, `OnInsert`, lines 26-40.
- BCApps `src/Layers/W1/BaseApp/Finance/Dimension/DimensionManagement.Codeunit.al`, `UpdateDefaultDim`, lines 894-913.
- BCApps `src/Layers/W1/BaseApp/Inventory/Item/Catalog/CatalogItemManagement.Codeunit.al`, `CreateNewItem`, lines 545-565; `src/Layers/W1/BaseApp/Inventory/Item/CopyItem.Codeunit.al`, `InitTargetItem` and `CopyItem`, lines 107-133; `src/Layers/W1/BaseApp/Inventory/Item/ExportItemData.XmlPort.al`, line 405.
- BCApps `src/Layers/W1/BaseApp/System/DataMigration/`: `CustomerDataMigrationFacade.Codeunit.al` line 67, `ItemDataMigrationFacade.Codeunit.al` line 76, `GLAccDataMigrationFacade.Codeunit.al` line 77.

## Examples

- [Good: master-data-must-be-inserted-with-trigger.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.good.al)
- [Bad: master-data-must-be-inserted-with-trigger.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-data-must-be-inserted-with-trigger.bad.al)

## Names

- [enum 28 "Costing Method"](../../../../objects/enum/28.md) (possibly related: a code span names it)
- [table 15 "G/L Account"](../../../../objects/table/15.md) (possibly related: a code span names it)

## Changed by

- [#209 3 AL/BC patterns: Insert/Delete trigger defaults on master data and declined Confirm in OnValidate](../../../../changes/bcquality/209.md), 2026-10-05

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
