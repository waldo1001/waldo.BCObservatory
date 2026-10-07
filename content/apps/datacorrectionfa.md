---
id: app/datacorrectionfa
type: app
title: DataCorrectionFA
summary: "DataCorrectionFA (Microsoft.FixedAssets): 15 objects in BC29-30 (6 permission set extensions, 4 permission sets, 2 codeunits, 1 table, 1 table extension, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - fixed-assets
system: fixed-assets
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2712943e60bad8e1ce289e34199d5ff0316838d86b339b2246214b7c368bb070
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/DataCorrectionFA/app
    title: src/Apps/W1/DataCorrectionFA/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/6090
    - object/tableextension/6091
    - object/page/6090
    - object/codeunit/6090
    - object/codeunit/6091
    - object/permissionset/6090
    - object/permissionset/6091
    - object/permissionset/6095
    - object/permissionset/6097
    - object/permissionsetextension/6091
    - object/permissionsetextension/6092
    - object/permissionsetextension/6093
    - object/permissionsetextension/6094
    - object/permissionsetextension/6095
    - object/permissionsetextension/6096
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: DataCorrectionFA
namespace_root: Microsoft.FixedAssets
present_in:
  - "29"
  - "30"
counts:
  objects: 15
  by_type:
    permissionsetextension: 6
    permissionset: 4
    codeunit: 2
    table: 1
    tableextension: 1
    page: 1
  hubs: 0
  videos: 0
  posts: 0
---

# DataCorrectionFA

> DataCorrectionFA (Microsoft.FixedAssets): 15 objects in BC29-30 (6 permission set extensions, 4 permission sets, 2 codeunits, 1 table, 1 table extension, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/DataCorrectionFA/app` · namespace `Microsoft.FixedAssets` · BC29-30 · system fixed-assets · facts from the code pillar and the joins, nothing machine-written

## Objects

15 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 6090 | [FA Ledg. Entry w. Issue](../objects/table/6090.md) | FA Ledger Entry |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 6091 | [FA Setup Entries with issues](../objects/tableextension/6091.md) |  |

### Pages (1)

| Id | Name | Caption |
|---|---|---|
| 6090 | [FA Ledger Entries Issues](../objects/page/6090.md) | FA Ledger Entries with rounding issues |

### Codeunits (2)

| Id | Name | Caption |
|---|---|---|
| 6090 | [FA Ledger Entries Scan](../objects/codeunit/6090.md) |  |
| 6091 | [FA Card Notifications](../objects/codeunit/6091.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 6090 | [Troubleshoot FA Ledger Entries](../objects/permissionset/6090.md) |  |
| 6091 | [FATS - Edit](../objects/permissionset/6091.md) |  |
| 6095 | [FATS - Read](../objects/permissionset/6095.md) |  |
| 6097 | [FATS - Objects](../objects/permissionset/6097.md) | FATS- Objects |

### Permission set extensions (6)

| Id | Name | Caption |
|---|---|---|
| 6091 | [D365 AUTOMATION - FATS](../objects/permissionsetextension/6091.md) |  |
| 6092 | [D365 BASIC ISV - FATS](../objects/permissionsetextension/6092.md) |  |
| 6093 | [D365 BUS FULL ACCESS - FATS](../objects/permissionsetextension/6093.md) |  |
| 6094 | [D365 BUS PREMIUM - FATS](../objects/permissionsetextension/6094.md) |  |
| 6095 | [D365 FA, EDIT - FATS](../objects/permissionsetextension/6095.md) |  |
| 6096 | [D365 FULL ACCESS - FATS](../objects/permissionsetextension/6096.md) |  |

Source: [src/Apps/W1/DataCorrectionFA/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/DataCorrectionFA/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
