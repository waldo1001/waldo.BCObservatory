---
id: guideline/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup
type: guideline
title: Registering a table does not delete anything — consider shipping a default setup
summary: AddAllowedTable only makes a table selectable on the Retention Policies page. Nothing is deleted until a Retention Policy Setup record exists for that table, names a Retention Period, and is enabled.
tier: official
language: en
tags:
  - retention-policy
  - retention-policy-setup
  - addallowedtable
  - findorcreateretentionperiod
  - retention-period
  - default-policy
  - unbounded-table-growth
  - opt-in-deletion
  - upgrade-tag
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:28.612Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b450b6f2a872829a137b717b8e47aff3f3920670
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.md
    title: "microsoft/BCQuality: Registering a table does not delete anything — consider shipping a default setup"
    date: "2026-10-05"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/3907
    - object/codeunit/3902
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/177
  related:
    - to: object/table/3905
      title: table 3905 "Retention Policy Log Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.md
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
  - AddAllowedTable
---

# Registering a table does not delete anything — consider shipping a default setup

> AddAllowedTable only makes a table selectable on the Retention Policies page. Nothing is deleted until a Retention Policy Setup record exists for that table, names a Retention Period, and is enabled.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.md) · microsoft layer · privacy · BC 22.. · tier official · derived

## Description

`AddAllowedTable` only makes a table selectable on the **Retention Policies** page. Nothing is deleted until a `Retention Policy Setup` record exists for that table, names a `Retention Period`, and is enabled. Registration alone is a valid pattern — several Microsoft apps register tables and leave the policy entirely to the administrator — but it means the table keeps growing until someone discovers the page, works out which of the extension's tables are safe to trim, and picks a period. Shipping a default setup is optional; where the extension's author knows a sensible period, it removes that discovery step. Microsoft's `Codeunit 3907 "Retention Policy Installer"` shows the shape — it registers `Retention Policy Log Entry`, then creates a setup record with a six-month period on first install, inserted disabled, guarded by an upgrade tag so a policy the administrator later deleted is not recreated on the next upgrade.

## Best Practice

When you ship a default, do it in the same install and upgrade routine that registers the table (see [`register-owned-log-tables-for-retention-policies.md`](register-owned-log-tables-for-retention-policies.md)), and create the `Retention Policy Setup` record: get the period code from `Codeunit "Retention Policy Setup".FindOrCreateRetentionPeriod`, which reuses an existing `Retention Period` with the requested enum value and otherwise creates one without colliding on an existing code (a hand-written lookup-then-insert fails when a period with the chosen code already exists for a different value), then `Validate` `"Table Id"`, `"Apply to all records"` and `"Retention Period"` before inserting. The codeunit that inserts the record needs `tabledata "Retention Policy Setup" = ri`. Gate the creation on an upgrade tag so it happens once per company rather than on every upgrade. Default to inserting with `Enabled` set to false: pre-creating the line puts a reviewed, sensible period in front of the administrator while leaving the decision to delete tenant data with them. Shipping the policy enabled is defensible for rows that are purely diagnostic and documented as transient — state that choice, and the default period, in the app's onboarding material either way.

See sample: [`ship-a-default-retention-policy-setup.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.good.al).

## Anti Pattern

Registering a table and then claiming, in a message, notification, label, teaching tip, or setup text, that its data is now cleaned up automatically. Registration only makes the table selectable; without an enabled `Retention Policy Setup` nothing is deleted, so the administrator is told a cleanup is running when none is, and the table grows unnoticed. Registration without a default setup is not itself a defect.

See sample: [`ship-a-default-retention-policy-setup.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.bad.al).

## References

- [Clean up data with retention policies](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-data-retention-policies) — retention periods, enabling a policy, and the job queue entry that applies it.
- [`RetentionPolicyInstaller.Codeunit.al`](https://github.com/microsoft/BCApps/blob/main/src/System%20Application/App/Retention%20Policy/src/Install/RetentionPolicyInstaller.Codeunit.al) in microsoft/BCApps — the platform's own register-then-create-disabled-setup pattern.

## Examples

- [Good: ship-a-default-retention-policy-setup.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.good.al)
- [Bad: ship-a-default-retention-policy-setup.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/ship-a-default-retention-policy-setup.bad.al)

## Names

- [codeunit 3907 "Retention Policy Installer"](../../../../objects/codeunit/3907.md) (names this object)
- [codeunit 3902 "Retention Policy Setup"](../../../../objects/codeunit/3902.md) (names this object)
- [table 3905 "Retention Policy Log Entry"](../../../../objects/table/3905.md) (possibly related: a code span names it)

## Changed by

- [#177 Add retention policy knowledge to the privacy domain](../../../../changes/bcquality/177.md), 2026-10-05

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
