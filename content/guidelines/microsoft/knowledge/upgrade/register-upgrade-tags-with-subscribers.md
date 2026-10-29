---
id: guideline/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers
type: guideline
title: Register upgrade tags that must be seeded for new companies
summary: SetUpgradeTag(Tag) directly records a completed per-company upgrade step; HasUpgradeTag(Tag) can then guard that step on later upgrades.
tier: official
language: en
tags:
  - upgrade-tag
  - event-subscriber
  - on-get-per-company-upgrade-tags
  - on-get-per-database-upgrade-tags
  - registration
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:10.009Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0bba7c275daa5df09ce4d52da32db0ef1b674b63
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.md
    title: "microsoft/BCQuality: Register upgrade tags that must be seeded for new companies"
    date: "2026-09-09"
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
    - change/bcquality/174
    - change/bcquality/93
repo_path: microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.md
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
  - OnGetPerCompanyUpgradeTags
  - SetUpgradeTag
  - SetAllUpgradeTags
  - HasDatabaseUpgradeTag
  - SetDatabaseUpgradeTag
  - HasUpgradeTag
  - OnInstallAppPerCompany
---

# Register upgrade tags that must be seeded for new companies

> SetUpgradeTag(Tag) directly records a completed per-company upgrade step; HasUpgradeTag(Tag) can then guard that step on later upgrades.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

`SetUpgradeTag(Tag)` directly records a completed per-company upgrade step; `HasUpgradeTag(Tag)` can then guard that step on later upgrades. The `OnGetPerCompanyUpgradeTags` subscriber serves a different path: it contributes tags to the list used by `SetAllUpgradeTags()` when a new company is initialized, marking historical upgrade steps complete so they do not run against a company that starts on the current schema.

Registration is not install-time seeding. When an extension is installed into an existing company and a tag must start as complete, the install code must call `SetUpgradeTag` explicitly. For new-company initialization, codeunit `Company Initialize` calls `SetAllUpgradeTags`, which obtains subscriber-provided per-company tags and inserts missing ones. Database-scoped upgrade steps use `HasDatabaseUpgradeTag`/`SetDatabaseUpgradeTag` and the corresponding per-database list.

## Best Practice

In the upgrade codeunit, guard work with `HasUpgradeTag` and call `SetUpgradeTag` only after successful completion. Seed the same tag explicitly from `OnInstallAppPerCompany` when first-install logic should not run as a later upgrade. Also add historical per-company tags to `OnGetPerCompanyUpgradeTags` so `SetAllUpgradeTags` marks them complete for newly created companies. Keep the tag definition shared so all paths use the exact same value.

See sample: [`register-upgrade-tags-with-subscribers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.good.al).

## Anti Pattern

Assuming an `OnGetPerCompanyUpgradeTags` subscriber sets tags during extension installation, or omitting the subscriber and allowing old upgrade steps to run when `SetAllUpgradeTags` initializes a new company. The subscriber supplies a list; only `SetAllUpgradeTags` or an explicit `SetUpgradeTag` call persists it.

See sample: [`register-upgrade-tags-with-subscribers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.bad.al).

## Examples

- [Good: register-upgrade-tags-with-subscribers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.good.al)
- [Bad: register-upgrade-tags-with-subscribers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/register-upgrade-tags-with-subscribers.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
