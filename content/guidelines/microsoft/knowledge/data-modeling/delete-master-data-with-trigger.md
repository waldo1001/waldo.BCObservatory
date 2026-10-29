---
id: guideline/microsoft/knowledge/data-modeling/delete-master-data-with-trigger
type: guideline
title: Delete master and reference data with `Delete(true)` so the owning table's `OnDelete` decides
summary: Record.Delete() and Record.DeleteAll() do not run OnDelete unless RunTrigger is true; the default is false. On a master or reference table, OnDelete is where Business Central decides whether the delete is safe and removes what the record owns.
tier: official
language: en
tags:
  - delete
  - deleteall
  - runtrigger
  - ondelete
  - master-data
  - currency
  - cleanup
  - data-migration
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:29.191Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6e3467ce8ca686329335ff986d8493872f7b314c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/delete-master-data-with-trigger.md
    title: "microsoft/BCQuality: Delete master and reference data with `Delete(true)` so the owning table's `OnDelete` decides"
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
    - to: object/table/330
      title: table 330 "Currency Exchange Rate"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/92
      title: table 92 "Customer Posting Group"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/1812
      title: codeunit 1812 "Data Migration Del G/L Account"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/15
      title: table 15 "G/L Account"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/delete-master-data-with-trigger.md
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
  - OnDelete
  - RunTrigger
  - MoveEntries
  - OnBeforeDelete
  - OnAfterDelete
  - CatalogItemManagement
  - JobArchiveManagement
  - MoveGLEntries
  - MoveCustEntries
  - OnRun
  - DeleteGLAccounts
---

# Delete master and reference data with `Delete(true)` so the owning table's `OnDelete` decides

> Record.Delete() and Record.DeleteAll() do not run OnDelete unless RunTrigger is true; the default is false. On a master or reference table, OnDelete is where Business Central decides whether the delete is safe and removes what the record owns.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/delete-master-data-with-trigger.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`Record.Delete()` and `Record.DeleteAll()` do not run `OnDelete` unless `RunTrigger` is `true`; the default is `false`. On a master or reference table, `OnDelete` is where Business Central decides whether the delete is safe and removes what the record owns. `Currency.OnDelete` refuses the delete while any **open** customer, vendor, or employee ledger entry uses the code, then deletes the currency's `Currency Exchange Rate` rows itself. `Customer.OnDelete` refuses when a job bills the customer, calls codeunit 361 `MoveEntries` (which refuses while ledger entries fall in an unclosed fiscal year or are still open, and otherwise detaches the closed history), and removes default dimensions, related data, and the contact link.

A cleanup, migration, or "remove obsolete codes" routine that calls `Delete()`/`DeleteAll()` without `true` on such a table skips all of it (only `OnBeforeDelete`/`OnAfterDelete` triggers in table extensions still run): it can remove a currency that open entries still use, and leaves exchange rates and other dependents orphaned. That a record *looks* obsolete — a superseded currency nobody posts in any more — is no evidence the guard would pass, and keeping a record that closed history still refers to is often the better choice. Where the master has a `Blocked` field, blocking it is an alternative to deleting it; `Currency` has none.

## Best Practice

Outside the owning table's own triggers, delete master and reference records with `Delete(true)`/`DeleteAll(true)` and let `OnDelete` raise its error, as BCApps does when it removes items (`CatalogItemManagement`, `NewItem.Delete(true)`). This is the "trigger does work the caller depends on" case of [`pass-false-to-insert-when-trigger-not-needed`](../performance/pass-false-to-insert-when-trigger-not-needed.md); a hand-written reference check is no substitute for the guard.

Legitimate `false` deletes, not in scope: the owning table's own `OnDelete` cascade removing its dependents (`Currency.OnDelete` itself calls `CurrExchRate.DeleteAll()`; see [`owning-table-must-delete-dependents-in-ondelete`](owning-table-must-delete-dependents-in-ondelete.md)); temporary records and buffers; deleting and immediately re-inserting the same primary key to restore or recreate a record, where dependents stay valid (`JobArchiveManagement` restoring a project from its archive; codeunit 1812 recreating each `"Customer Posting Group"` with the same `Code`); and a data-migration or setup reset in a company with no posted entries that removes master rows and their setup references as one rebuild, such as codeunit 1812 `"Data Migration Del G/L Account"`, whose `DeleteAll()` bypasses `"G/L Account".OnDelete`'s `MoveGLEntries` guard — acceptable only because no postings exist yet. Posted ledger entries are not master data; see [`do-not-modify-or-delete-posted-ledger-entries`](../finance/do-not-modify-or-delete-posted-ledger-entries.md).

See sample: [`delete-master-data-with-trigger.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/delete-master-data-with-trigger.good.al).

## Anti Pattern

Code outside the owning table's `OnDelete` calls `Delete()`/`DeleteAll()` (or `false`) on a non-temporary master or reference table — `Currency`, `Customer`, `Vendor`, `Item`, `G/L Account`, or a custom equivalent with an `OnDelete` guard or cascade — typically from a filter on codes judged obsolete, outside a same-key delete-and-reinsert or a no-postings migration/setup rebuild.

See sample: [`delete-master-data-with-trigger.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/delete-master-data-with-trigger.bad.al).

## References

- [Record.Delete method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-delete-method) and [Record.DeleteAll method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-deleteall-method): `RunTrigger` "The default value is false."; the DeleteAll note adds that setting it to false "only affects the OnDelete trigger" — table-extension `OnBeforeDelete`/`OnAfterDelete` still run.
- BCApps `src/Layers/W1/BaseApp/Finance/Currency/Currency.Table.al`, `OnDelete`, lines 797-820.
- BCApps `src/Layers/W1/BaseApp/Sales/Customer/Customer.Table.al`, `OnDelete`, lines 2401-2430; `src/Layers/W1/BaseApp/Utilities/MoveEntries.Codeunit.al`, `MoveCustEntries`, lines 126-167.
- BCApps `src/Layers/W1/BaseApp/Inventory/Item/Catalog/CatalogItemManagement.Codeunit.al`, line 419.
- BCApps `src/Layers/W1/BaseApp/System/DataMigration/DataMigrationDelGLAccount.Codeunit.al`, `OnRun` lines 18-32 and `DeleteGLAccounts` lines 34-42 (rebuild); lines 53-56 (same-key delete and re-insert); `src/Layers/W1/BaseApp/Finance/GeneralLedger/Account/GLAccount.Table.al`, `OnDelete`, line 1144 (`MoveGLEntries`).
- BCApps `src/Layers/W1/BaseApp/Projects/Project/Archive/JobArchiveManagement.Codeunit.al`, lines 212-219 (restore: `Job.Delete()`, then re-insert the same `No.`).

## Examples

- [Good: delete-master-data-with-trigger.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/delete-master-data-with-trigger.good.al)
- [Bad: delete-master-data-with-trigger.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/delete-master-data-with-trigger.bad.al)

## Names

- [table 330 "Currency Exchange Rate"](../../../../objects/table/330.md) (possibly related: a code span names it)
- [table 92 "Customer Posting Group"](../../../../objects/table/92.md) (possibly related: a code span names it)
- [codeunit 1812 "Data Migration Del G/L Account"](../../../../objects/codeunit/1812.md) (possibly related: a code span names it)
- [table 15 "G/L Account"](../../../../objects/table/15.md) (possibly related: a code span names it)

## Changed by

- [#209 3 AL/BC patterns: Insert/Delete trigger defaults on master data and declined Confirm in OnValidate](../../../../changes/bcquality/209.md), 2026-10-05

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
