---
id: localization/se
type: localization
title: Sweden (SE)
summary: "Sweden (SE) localization of Business Central in BC29: 4 objects of its own, 25 W1 objects changed (32 fields and 0 events added). From the code; country apps outside the Base Application are not included yet."
tier: official
language: en
tags:
  - localization
  - se
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:28:57.107Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bf2edc8eb6f4bed883eefdcab8471d3d666e7aadc104df0f929c5c9380b890fe
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-se
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/permissionset/1001
    - object/permissionset/1002
    - object/table/5
    - object/table/15
    - object/table/36
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/49
    - object/table/55
    - object/table/79
    - object/table/81
    - object/table/111
    - object/table/112
    - object/table/113
    - object/table/114
    - object/table/115
    - object/table/121
    - object/table/122
    - object/table/123
    - object/table/124
    - object/table/125
    - object/table/181
    - object/table/256
    - object/table/312
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/sweden
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: SE
version: "29"
w1_version: "29"
added_objects: 4
replaced_objects: 25
removed_objects: 0
added_fields: 32
added_events: 0
learn_folder: LocalFunctionality/Sweden
---

# Sweden (SE)

> Sweden (SE) localization of Business Central in BC29: 4 objects of its own, 25 W1 objects changed (32 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/sweden.md)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 1 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 1 properties |
| [table/5 "Finance Charge Terms"](../objects/table/5.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +2 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +3 fields |
| [table/37 "Sales Line"](../objects/table/37.md) | +1 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +1 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +1 fields |
| [table/49 "Invoice Post. Buffer"](../objects/table/49.md) | +2 fields |
| [table/55 "Invoice Posting Buffer"](../objects/table/55.md) | +2 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +2 fields, 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +2 fields |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +1 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | body changes only |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +1 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +3 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +1 fields |
| [table/121 "Purch. Rcpt. Line"](../objects/table/121.md) | +1 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +1 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +1 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +1 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +2 fields |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +1 fields |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- table/11203 "Automatic Acc. Header"
- table/11204 "Automatic Acc. Line"
- table/11207 "SIE Dimension"
- table/11208 "SIE Import Buffer"

## Other versions

- BC30: 29 objects differ from W1 (32 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
