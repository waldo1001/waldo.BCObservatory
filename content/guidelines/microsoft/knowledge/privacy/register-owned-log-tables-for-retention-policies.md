---
id: guideline/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies
type: guideline
title: Extension-owned log tables must be registered as retention-policy allowed tables
summary: The retention policy engine only ever deletes from tables that appear in its allowed-tables list, and an extension may register only tables it owns — it cannot add a base application table or a table from another extension. Registration is a call to Codeunit "Reten. Pol.
tier: official
language: en
tags:
  - retention-policy
  - allowed-tables
  - addallowedtable
  - reten-pol-allowed-tables
  - onrefreshallowedtables
  - append-only-table
  - log-table-growth
  - deleteall
  - mandatory-minimum-retention
  - install-upgrade-codeunit
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:28.479Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1e3bc924bdf6a9659e655b28c27c9cd3d7a10471
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.md
    title: "microsoft/BCQuality: Extension-owned log tables must be registered as retention-policy allowed tables"
    date: "2026-10-05"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/3905
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/177
repo_path: microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - 22..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SystemCreatedAt
  - OnInstallAppPerCompany
  - OnUpgradePerCompany
  - IsAllowedTable
  - ForceUpdate
  - MandatoryMinRetenDays
  - AddTableFilterToJsonArray
  - AddAllowedTable
  - JsonArray
  - DeleteAll
  - OnRefreshAllowedTables
---

# Extension-owned log tables must be registered as retention-policy allowed tables

> The retention policy engine only ever deletes from tables that appear in its allowed-tables list, and an extension may register only tables it owns — it cannot add a base application table or a table from another extension. Registration is a call to Codeunit "Reten. Pol.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.md) · microsoft layer · privacy · BC 22.. · tier official · derived

## Description

The retention policy engine only ever deletes from tables that appear in its allowed-tables list, and an extension may register only tables it owns — it cannot add a base application table or a table from another extension. Registration is a call to `Codeunit "Reten. Pol. Allowed Tables".AddAllowedTable`, passing the table ID and the field number of the Date or DateTime field that ages each record (`SystemCreatedAt` is the usual choice). Until that call has run in a company, the table cannot be selected on the **Retention Policies** page at all, so an activity log, integration log, or archive table the extension writes to grows with no supported way for an administrator to trim it. The registration is stored per company and is not part of the table's metadata — it exists only because install or upgrade code put it there.

## Best Practice

Register every table the extension owns that accumulates rows over time: activity and audit logs, integration and API request logs, archived documents. Call a shared routine from both the install codeunit (`OnInstallAppPerCompany`) and an upgrade codeunit (`OnUpgradePerCompany`), because install code does not run when an existing installation moves to a new version — registration added only to install code never reaches tenants that already have the app. Guard the routine with `IsAllowedTable` and an upgrade tag so repeated runs are idempotent, but keep a force path past the tag: the **Retention Policies** pages raise `Reten. Pol. Allowed Tables.OnRefreshAllowedTables`, and the platform's own installers (System Application, Base Application, Shopify) subscribe to it and re-run registration with `ForceUpdate`. A routine that exits whenever the tag is set cannot take part in that refresh, so the upgrade tag should gate one-time setup only, not re-registration. Pass `MandatoryMinRetenDays` when the data must survive a minimum period for audit or support reasons; the platform then rejects any shorter period an administrator configures. When only a subset of rows should ever expire, build the filter with `AddTableFilterToJsonArray` and pass it to the `AddAllowedTable` overload that takes a `JsonArray` — a filter added as locked cannot be removed later by the administrator.

Registering a table only makes it eligible; the policy itself is a separate concern, covered by [`ship-a-default-retention-policy-setup.md`](ship-a-default-retention-policy-setup.md).

See sample: [`register-owned-log-tables-for-retention-policies.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.good.al).

## Anti Pattern

An extension-owned table that only grows — the app inserts into it but never deletes from it — with no `AddAllowedTable` call anywhere in the app. The name is not a reliable signal: an "Incoming Data" buffer-history table grows the same way an "Activity Log" does, and such tables have reached hundreds of gigabytes on customer tenants. A variant is a table cleaned by hand-rolled code — a job queue codeunit or scheduled task running `DeleteAll` against a hard-coded date window: the deletion happens outside the **Retention Policy Log**, the administrator has no page on which to lengthen, shorten, or disable it, and the table is invisible during a data-retention review. The same defect in slower form is registration performed only in the install codeunit: new tenants are covered, every existing tenant stays unregistered after the upgrade.

See sample: [`register-owned-log-tables-for-retention-policies.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.bad.al).

## References

- [Clean up data with retention policies](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-data-retention-policies), section *Include your extension in a retention policy*.
- [`RetenPolAllowedTables.Codeunit.al`](https://github.com/microsoft/BCApps/blob/main/src/System%20Application/App/Retention%20Policy/src/Retention%20Policy%20Allowed%20Tables/RetenPolAllowedTables.Codeunit.al) in microsoft/BCApps — the `AddAllowedTable` overloads, `IsAllowedTable`, `AddTableFilterToJsonArray`, and `OnRefreshAllowedTables`.

## Examples

- [Good: register-owned-log-tables-for-retention-policies.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.good.al)
- [Bad: register-owned-log-tables-for-retention-policies.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/register-owned-log-tables-for-retention-policies.bad.al)

## Names

- [codeunit 3905 "Reten. Pol. Allowed Tables"](../../../../objects/codeunit/3905.md) (names this object)

## Changed by

- [#177 Add retention policy knowledge to the privacy domain](../../../../changes/bcquality/177.md), 2026-10-05

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
