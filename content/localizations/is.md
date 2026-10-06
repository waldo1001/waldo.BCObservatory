---
id: localization/is
type: localization
title: Iceland (IS)
summary: "Iceland (IS) localization of Business Central in BC29: 7 objects of its own, 6 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet."
tier: official
language: en
tags:
  - localization
  - is
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:28:57.107Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ebd454f81c73876b735fca980f978a8aa6b0207d06454e9f59c428d284f9ba07
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-is
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/permissionset/1001
    - object/permissionset/1002
    - object/table/15
    - object/table/21
    - object/table/311
    - object/table/5611
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/iceland
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: IS
version: "29"
w1_version: "29"
added_objects: 7
replaced_objects: 6
removed_objects: 0
added_fields: 6
added_events: 0
learn_folder: LocalFunctionality/Iceland
---

# Iceland (IS)

> Iceland (IS) localization of Business Central in BC29: 7 objects of its own, 6 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/iceland.md)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 1 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 1 properties |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +1 fields |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +2 fields |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | +2 fields |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- report/10913 "IRS notification"
- report/10940 "VAT Reconciliation A"
- report/10941 "VAT Balancing Report"
- table/10900 "IRS Numbers"
- table/10901 "IRS Groups"
- table/10902 "IRS Types"
- table/10903 "IS Core App Setup"

## Other versions

- BC30: 13 objects differ from W1 (6 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
