---
id: guideline/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename
type: guideline
title: Refresh `Last Date Modified` in both `OnModify` and `OnRename`
summary: Master tables carry a non-editable Last Date Modified field of type Date. It records when the record last changed and is refreshed by table triggers, not by the user. The refresh must happen in both OnModify and OnRename.
tier: official
language: en
tags:
  - last-date-modified
  - onmodify
  - onrename
  - audit-field
  - non-editable
  - stale-value
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:24.736Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f8b2a0d49be524f99222af8a0fea427265229f04
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.md
    title: "microsoft/BCQuality: Refresh `Last Date Modified` in both `OnModify` and `OnRename`"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-workdate-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/65
repo_path: microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.md
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
  - OnModify
  - OnRename
  - WorkDate
---

# Refresh `Last Date Modified` in both `OnModify` and `OnRename`

> Master tables carry a non-editable Last Date Modified field of type Date. It records when the record last changed and is refreshed by table triggers, not by the user. The refresh must happen in both OnModify and OnRename.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

Master tables carry a non-editable `Last Date Modified` field of type `Date`. It records when the record last changed and is refreshed by table triggers, not by the user. The refresh must happen in **both** `OnModify` and `OnRename`.

The reason is a BC-specific trap: renaming a record changes its primary key and fires `OnRename` — it does **not** fire `OnModify`. A table that updates `Last Date Modified` only in `OnModify` therefore leaves a stale date behind every rename. Downstream logic that keys on this field (incremental sync, integration deltas, "changed since" reports) then silently skips the renamed record. Assign `Today` (the system date), not `WorkDate`, because the field reflects the real modification moment.

## Best Practice

Both `OnModify` and `OnRename` set `"Last Date Modified" := Today();`, and the field is declared `Editable = false` so only the triggers maintain it.

See sample: [`set-last-date-modified-in-onmodify-and-onrename.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.good.al).

## Anti Pattern

Only `OnModify` assigns `Last Date Modified`. After a rename the value is stale, and any process that trusts it to detect changes misses the record.

See sample: [`set-last-date-modified-in-onmodify-and-onrename.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.bad.al).

## Examples

- [Good: set-last-date-modified-in-onmodify-and-onrename.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.good.al)
- [Bad: set-last-date-modified-in-onmodify-and-onrename.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/set-last-date-modified-in-onmodify-and-onrename.bad.al)

## Names

- [System.WorkDate(\[Date\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-workdate-method) (names WorkDate)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#65 Add data-modeling and appsource knowledge articles (MICROSOFT layer)](../../../../changes/bcquality/65.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
