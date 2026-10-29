---
id: guideline/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true
type: guideline
title: Database trigger setup flags may only be set to true
summary: The OnDatabaseInsert, OnDatabaseModify, OnDatabaseDelete, and OnDatabaseRename events let one subscriber react to writes on any table, receiving the record as a RecordRef.
tier: official
language: en
tags:
  - getdatabasetabletriggersetup
  - onaftergetdatabasetabletriggersetup
  - globaltriggermanagement
  - global-triggers
  - ondatabaseinsert
  - ondatabasemodify
  - ondatabasedelete
  - ondatabaserename
  - change-log
  - var-parameter
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:28.995Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b850a52050ffd817ada532e5f6210c72b42f8cc9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.md
    title: "microsoft/BCQuality: Database trigger setup flags may only be set to true"
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
    - change/bcquality/213
  related:
    - to: object/codeunit/130630
      title: codeunit 130630 "No Transactions Subscriber"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/603
      title: codeunit 603 "Data Archive Db Subscriber"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/40043
      title: codeunit 40043 "GP Collect All Modifications"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/423
      title: codeunit 423 "Change Log Management"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.md
layer: microsoft
kind: rule
domain: events
bc_version:
  - 15..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnDatabaseInsert
  - OnDatabaseModify
  - OnDatabaseDelete
  - OnDatabaseRename
  - RecordRef
  - GlobalTriggerManagement
  - OnAfterGetDatabaseTableTriggerSetup
  - OnAfterOnDatabaseInsert
  - OnAfterOnDatabaseModify
  - OnAfterOnDatabaseDelete
  - OnAfterOnDatabaseRename
  - GetDatabaseTableTriggerSetup
---

# Database trigger setup flags may only be set to true

> The OnDatabaseInsert, OnDatabaseModify, OnDatabaseDelete, and OnDatabaseRename events let one subscriber react to writes on any table, receiving the record as a RecordRef.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.md) · microsoft layer · events · BC 15.. · tier official · derived

## Description

The `OnDatabaseInsert`, `OnDatabaseModify`, `OnDatabaseDelete`, and `OnDatabaseRename` events let one subscriber react to writes on any table, receiving the record as a `RecordRef`. They are opt-in per table through `GetDatabaseTableTriggerSetup(TableId; var OnDatabaseInsert; var OnDatabaseModify; var OnDatabaseDelete; var OnDatabaseRename)`, raised by the system codeunit `Global Triggers` (in the 2000000001..2000000010 range). Codeunit 49 `GlobalTriggerManagement` subscribes to it, collects the Dataverse integration and API webhook flags, raises its own integration event `OnAfterGetDatabaseTableTriggerSetup` with the same four `var` Booleans, and then, in the normal execution context only, adds the change log flags.

That the platform raises the database events for a table only when the matching flag ends up `true` is not stated on Microsoft Learn; it is inferred from the sources below. Learn states that subscribing to global triggers disables bulk SQL insert, modify, and delete for that table, so the answer is per table. A BCApps change log test notes that global trigger management may have cached the setup for a table. The `No Transactions Subscriber` test library sets all four flags for every table so that it sees every write.

The four Booleans are shared by every subscriber in the chain, and subscribers run in no particular order. A subscriber that assigns `false`, or assigns an expression that can be `false` such as `OnDatabaseModify := MySetup.Get(TableId)`, overwrites whatever another feature already set for that table if it runs after that feature. The table may then stop raising the database events, and features that rely on them (the change log, Dataverse synchronization, API webhook notifications, data archiving) stop working for it with no error. `GlobalTriggerManagement` asks the change log last, in the normal execution context only, and its comment says it does not want anyone to disable change log management. That ordering protects only the change log flags, and only against `OnAfterGetDatabaseTableTriggerSetup` subscribers. It does not protect the other features' flags, and it does not protect anything against another direct subscriber to `Global Triggers`.

## Best Practice

Prefer table-specific mechanisms when the set of tables is known. Learn advises avoiding global trigger subscribers in general because every opted-in table loses bulk SQL operations. Use the database events only when the set of tables is open-ended or configurable, and turn on only the operations and tables the feature needs.

Subscribe to `GlobalTriggerManagement`'s integration events, `OnAfterGetDatabaseTableTriggerSetup` to opt in and `OnAfterOnDatabaseInsert`, `OnAfterOnDatabaseModify`, `OnAfterOnDatabaseDelete`, or `OnAfterOnDatabaseRename` to react. Learn does not recommend subscribing directly to the events of system codeunits 2000000001..2000000010. Some Microsoft apps do, for example `Data Archive Db Subscriber`, `GP Collect All Modifications`, and the `No Transactions Subscriber` test library, and those subscriptions still compile and run.

In the setup subscriber, only turn flags on: `if IsTracked(TableId) then OnDatabaseModify := true;`, or `OnDatabaseModify := OnDatabaseModify or IsTracked(TableId);` as `Change Log Management` does. A statement such as `if not OnDatabaseDelete then OnDatabaseDelete := false;`, which appears in BCApps, cannot clear a flag and is not this anti-pattern. In the handler, check `RecRef.Number` against the feature's own setup and skip temporary records, because the events also fire for every table another feature opted in.

See sample: [`database-trigger-setup-flags-may-only-be-set-to-true.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.good.al).

## Anti Pattern

In a subscriber to `GetDatabaseTableTriggerSetup` (`Global Triggers`) or `OnAfterGetDatabaseTableTriggerSetup` (`GlobalTriggerManagement`), any assignment to one of the four `var` flags that can store `false` when the flag was already `true`. This includes a literal `false`, an assignment from a lookup or Boolean expression without `or` on the flag's current value, and `Clear` on the parameter.

BCApps has this shape in two places, which shows the mechanism rather than an exception to it. The demo data generator assigns `OnDatabaseInsert := IsTableIDIncludedIntoFullPack(TableId)` while it collects table IDs. The test library `Backup Management` assigns all four flags from its own lookup. Both clear flags set by other features, and both run only in demo-data generation or test sessions where that is accepted. Production and extension code has no such session boundary.

See sample: [`database-trigger-setup-flags-may-only-be-set-to-true.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.bad.al).

## References

- [Transitioning from codeunit 1 to system codeunits](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/transition-from-codeunit1): v14-era upgrade guidance. `GetDatabaseTableTriggerSetup` and `OnDatabase*` moved to codeunit 49 `GlobalTriggerManagement`, and Learn advises against subscribing directly to system codeunits 2000000001..2000000010.
- [How to refactor use of integration records to system fields](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integration-record-refactoring): subscribers to codeunit 49 hurt performance, and subscribing to global triggers disables bulk SQL insert, modify, and delete for that table.
- [Event types, global events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types#global-events): the codeunit 49 integration events. [Subscribing to events](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-subscribing-to-events): subscribers run one at a time in no particular order.
- [GlobalTriggerManagement.Codeunit.al](https://github.com/microsoft/BCApps/blob/main/src/Layers/W1/BaseApp/GlobalTriggerManagement.Codeunit.al): the `Global Triggers` setup subscriber and its signature (lines 51-52), the change log ordering and comment in the normal execution context (62-64), `OnAfterGetDatabaseTableTriggerSetup` (173-174), and `OnAfterOnDatabase*` (178-194).
- Inference sources: [ChangeLog.Codeunit.al](https://github.com/microsoft/BCApps/blob/main/src/Layers/W1/Tests/Misc/ChangeLog.Codeunit.al) line 2087 (setup cached per table) and [NoTransactionsSubscriber.Codeunit.al](https://github.com/microsoft/BCApps/blob/main/src/Apps/W1/LibraryNoTransactions/app/NoTransactionsSubscriber.Codeunit.al) lines 4-11 (all four flags on).
- Only-true assignments in BCApps: `ChangeLogManagement.Codeunit.al` lines 85-88 (`or`), `APIWebhookNotificationMgt.Codeunit.al` 224-227, `CRMIntegrationManagement.Codeunit.al` 3748-3753, `MasterDataManagement.Codeunit.al` 1511-1516, `DataArchiveDbSubscriber.Codeunit.al` 27-32, and `GPCollectAllModifications.codeunit.al` 11-21.
- Flag-clearing assignments in demo and test code: [CreateDemonstrationData.Codeunit.al](https://github.com/microsoft/BCApps/blob/main/src/Layers/W1/DemoTool/CreateDemonstrationData.Codeunit.al) lines 343-344 (also the CZ layer line 353 and the IN layer line 357) and [BackupManagement.Codeunit.al](https://github.com/microsoft/BCApps/blob/main/src/Layers/W1/Tests/TestLibraries/BackupManagement.Codeunit.al) lines 470-476.

## Examples

- [Good: database-trigger-setup-flags-may-only-be-set-to-true.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.good.al)
- [Bad: database-trigger-setup-flags-may-only-be-set-to-true.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/database-trigger-setup-flags-may-only-be-set-to-true.bad.al)

## Names

- [codeunit 130630 "No Transactions Subscriber"](../../../../objects/codeunit/130630.md) (possibly related: a code span names it)
- [codeunit 603 "Data Archive Db Subscriber"](../../../../objects/codeunit/603.md) (possibly related: a code span names it)
- [codeunit 40043 "GP Collect All Modifications"](../../../../objects/codeunit/40043.md) (possibly related: a code span names it)
- [codeunit 423 "Change Log Management"](../../../../objects/codeunit/423.md) (possibly related: a code span names it)

## Changed by

- [#213 knowledge(events): database trigger setup flags may only be set to true](../../../../changes/bcquality/213.md), 2026-10-05

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
