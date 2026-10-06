---
id: localization/cz
type: localization
title: Czech (CZ)
summary: "Czech (CZ) localization of Business Central in BC29: 2 objects of its own, 8 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet."
tier: official
language: en
tags:
  - localization
  - cz
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:22:15.880Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 46bd7078f0e484bb3bca556a45087412eedb22e273b04d119c0afb83a5e40646
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-cz
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/104051
    - object/table/263
    - object/table/325
    - object/table/372
    - object/table/383
    - object/table/1250
    - object/table/1296
    - object/table/7604
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/czech-republic
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: CZ
version: "29"
w1_version: "29"
added_objects: 2
replaced_objects: 8
removed_objects: 0
added_fields: 6
added_events: 0
learn_folder: LocalFunctionality/Czech
---

# Czech (CZ)

> Czech (CZ) localization of Business Central in BC29: 2 objects of its own, 8 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/czech-republic.md)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/104051 "Update VAT Date Field"](../objects/codeunit/104051.md) | body changes only |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | 3 fields changed |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +1 fields |
| [table/372 "Payment Buffer"](../objects/table/372.md) | +1 fields |
| [table/383 "Detailed CV Ledg. Entry Buffer"](../objects/table/383.md) | +1 fields, 2 fields changed |
| [table/1250 "Bank Statement Matching Buffer"](../objects/table/1250.md) | +2 fields |
| [table/1296 "Posted Payment Recon. Line"](../objects/table/1296.md) | +1 fields |
| [table/7604 "Where Used Base Calendar"](../objects/table/7604.md) | 1 fields changed |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/11790 "Local Upgrade Tag Definitions"
- codeunit/104150 "Upgrade - Local App"

## Other versions

- BC30: 10 objects differ from W1 (6 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
