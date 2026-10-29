---
id: guideline/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert
type: guideline
title: A master table's `No.` primary key comes from a number series in `OnInsert`
summary: In Business Central, a master table (Customer, Vendor, Item, and any custom equivalent) uses a single primary-key field named No. of type Code[20]. It is populated from a number series — configured on the feature's application-area setup table — inside the table's OnInsert trigger, but only when No.
tier: official
language: en
tags:
  - no-series
  - primary-key
  - code20
  - oninsert
  - autoincrement
  - number-assignment
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.857Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 69476ff66ff1b3a3e92036a6792e72d63a809d28
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.md
    title: "microsoft/BCQuality: A master table's `No.` primary key comes from a number series in `OnInsert`"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
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
repo_path: microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.md
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
  - AutoIncrement
  - SystemId
  - TestField
---

# A master table's `No.` primary key comes from a number series in `OnInsert`

> In Business Central, a master table (Customer, Vendor, Item, and any custom equivalent) uses a single primary-key field named No. of type Code[20]. It is populated from a number series — configured on the feature's application-area setup table — inside the table's OnInsert trigger, but only when No.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

In Business Central, a master table (Customer, Vendor, Item, and any custom equivalent) uses a single primary-key field named `No.` of type `Code[20]`. It is populated from a number series — configured on the feature's application-area setup table — inside the table's `OnInsert` trigger, but only when `No.` is still blank (so a user may still type a manual number when the series allows it). The record also keeps a non-editable `No. Series` `Code[20]` field recording which series produced the number.

This is not an `Integer` `AutoIncrement` key, a GUID, or the `SystemId`. Those are surrogate/system identifiers that users never see and cannot quote; BC's whole document flow — lookups, filtering, printed references, telephone support — depends on a short, human-readable, business-controlled `No.`. Use the modern assignment API described in `use-no-series-codeunit-not-noseriesmanagement.md`.

## Best Practice

`No.` `Code[20]` is the sole primary key; a non-editable `No. Series` `Code[20]` field records the source series. `OnInsert` checks `if "No." = ''`, reads the setup table, `TestField`s the configured series, stores it in `No. Series`, and assigns `No.` from the series.

See sample: [`master-table-no-from-number-series-in-oninsert.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.good.al).

## Anti Pattern

An `Integer` `AutoIncrement` (or GUID / `SystemId`) primary key used as the business key, with no `OnInsert` number assignment. Records get an opaque identifier no user can reference, and the master no longer participates in the standard numbering and manual-entry behavior every other BC master follows.

See sample: [`master-table-no-from-number-series-in-oninsert.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.bad.al).

## Examples

- [Good: master-table-no-from-number-series-in-oninsert.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.good.al)
- [Bad: master-table-no-from-number-series-in-oninsert.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/master-table-no-from-number-series-in-oninsert.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#65 Add data-modeling and appsource knowledge articles (MICROSOFT layer)](../../../../changes/bcquality/65.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
