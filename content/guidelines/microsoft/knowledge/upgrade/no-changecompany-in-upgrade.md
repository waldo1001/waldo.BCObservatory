---
id: guideline/microsoft/knowledge/upgrade/no-changecompany-in-upgrade
type: guideline
title: Upgrade code must not use ChangeCompany
summary: "The platform upgrades each company in its own context: OnUpgradePerCompany (like the other PerCompany upgrade and install triggers) runs once per company, in a separate system session opened for that company, while PerDatabase triggers run in a session that opens no company."
tier: official
language: en
tags:
  - changecompany
  - cross-company
  - onupgradepercompany
  - onupgradeperdatabase
  - feature-data-update
  - taskscheduler
  - multi-company
  - company-context
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:35.865Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3295bbad423d6607b7b2fe9cbe147793a267f2cd
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-changecompany-in-upgrade.md
    title: "microsoft/BCQuality: Upgrade code must not use ChangeCompany"
    date: "2026-10-02"
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
    - change/bcquality/210
  related:
    - to: object/interface/feature-data-update
      title: interface "Feature Data Update"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/2612
      title: codeunit 2612 "Update Feature Data"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/upgrade/no-changecompany-in-upgrade.md
layer: microsoft
kind: rule
domain: upgrade
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
  - OnUpgradePerCompany
  - PerCompany
  - PerDatabase
  - ChangeCompany
  - UpdateData
  - AfterUpdate
  - IsDataUpdateRequired
  - ReviewData
  - OnUpgradePerDatabase
  - RecordRef
---

# Upgrade code must not use ChangeCompany

> The platform upgrades each company in its own context: OnUpgradePerCompany (like the other PerCompany upgrade and install triggers) runs once per company, in a separate system session opened for that company, while PerDatabase triggers run in a session that opens no company.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-changecompany-in-upgrade.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

The platform upgrades each company in its own context: `OnUpgradePerCompany` (like the other `PerCompany` upgrade and install triggers) runs once per company, in a separate system session opened for that company, while `PerDatabase` triggers run in a session that opens no company. Calling `ChangeCompany(<name>)` in upgrade code reaches from the company being upgraded into another company. Cross-company work bypasses the platform's per-company execution boundary, making execution order and migration ownership difficult to reason about and potentially repeating work. A cross-company read cannot assume that the other company's migration has already run, so it can observe pre-upgrade or post-upgrade data. Per-company upgrade tags are set for the current company only, so a tag set after writing to company B is recorded for company A, which can cause B's own session to repeat the migration. Execution context does not move with `ChangeCompany`: table triggers and trigger-event subscribers still run in the calling company (see `changecompany-runs-triggers-in-the-calling-company`). Data and side effects then land in different companies, and an error in another company's data aborts the current company's upgrade. The same applies to the migration path of a feature-switch data update: the `UpdateData` and `AfterUpdate` methods of a `Feature Data Update` implementation. Feature Management runs them for one company's status row, either as a task scheduled in that company or in the current session. The interface's preflight methods, `IsDataUpdateRequired` and `ReviewData`, are a separate phase that reports scope before any update is scheduled.

## Best Practice

Upgrade code operates only on the company it is running in. Put per-company data migration in `OnUpgradePerCompany` (or a helper reachable only from it), guard it with a per-company upgrade tag, and let the platform invoke it for every company. Reserve `OnUpgradePerDatabase` for tables with `DataPerCompany = false` and other database-wide state; it needs no `ChangeCompany`. A feature data update implements `UpdateData` and `AfterUpdate` against the current company only. Its read-only preflight may use `ChangeCompany` to count or inspect rows in other companies, because it migrates nothing. When code outside the upgrade pipeline must start work in other companies, schedule it in each company with `TaskScheduler.CreateTask` and the company name, as Feature Management does, rather than writing there through `ChangeCompany`. The scheduled task runs in the target company, so triggers, events, permissions, and upgrade tags all use that company.

See sample: [`no-changecompany-in-upgrade.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-changecompany-in-upgrade.good.al).

## Anti Pattern

A loop over the `Company` table in `OnUpgradePerDatabase` or `OnUpgradePerCompany` that calls `ChangeCompany(Company.Name)` on a record or `RecordRef` and then reads, inserts, modifies, or deletes data. Another form is a `Feature Data Update` implementation whose `UpdateData` or `AfterUpdate` does the same to update every company from one task. On these paths reads are not exempt: they observe another company whose upgrade state is unknown.

Detection signal: `Record.ChangeCompany(<name>)` or `RecordRef.ChangeCompany(<name>)` with a company-name argument in a codeunit with `Subtype = Upgrade` or in any procedure transitively reachable from its upgrade triggers, or in a `Feature Data Update` implementation's `UpdateData` or `AfterUpdate` or any procedure transitively reachable from them. Do not flag `ChangeCompany` in `IsDataUpdateRequired`, `ReviewData`, or helpers reachable only from them; a helper shared with `UpdateData` or `AfterUpdate` is in scope. Do not flag the parameterless `ChangeCompany()`, which only points the variable back at the current company, or `ChangeCompany` in ordinary runtime code; `changecompany-runs-triggers-in-the-calling-company` governs that.

See sample: [`no-changecompany-in-upgrade.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-changecompany-in-upgrade.bad.al).

## References

- Upgrading extensions, Upgrade triggers: `PerCompany` triggers run once per company, each in its own system session for that company — https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-upgrading-extensions
- Record.ChangeCompany method, Remarks: triggers still run in the current company — https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-changecompany-method
- Interface "Feature Data Update" — https://learn.microsoft.com/en-us/dynamics365/business-central/application/system-application/interface/system.environment.configuration.feature-data-update
- `FeatureManagementImpl.UpdateData` calls the interface's `UpdateData` then `AfterUpdate`; `ReviewData` calls `IsDataUpdateRequired` and `ReviewData` — https://github.com/microsoft/BCApps/blob/main/src/System%20Application/App/Feature%20Key/src/FeatureManagementImpl.Codeunit.al
- `FeatureManagementImpl.CreateTask` schedules `Update Feature Data` with `TaskScheduler.CreateTask` for the status row's company — https://github.com/microsoft/BCApps/blob/main/src/System%20Application/App/Feature%20Key/src/FeatureManagementImpl.Codeunit.al

## Examples

- [Good: no-changecompany-in-upgrade.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-changecompany-in-upgrade.good.al)
- [Bad: no-changecompany-in-upgrade.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/no-changecompany-in-upgrade.bad.al)

## Names

- [interface "Feature Data Update"](../../../../objects/interface/feature-data-update.md) (possibly related: a code span names it)
- [codeunit 2612 "Update Feature Data"](../../../../objects/codeunit/2612.md) (possibly related: a code span names it)

## Changed by

- [#210 knowledge(upgrade): upgrade code must not use ChangeCompany](../../../../changes/bcquality/210.md), 2026-10-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
