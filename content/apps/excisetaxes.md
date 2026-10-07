---
id: app/excisetaxes
type: app
title: ExciseTaxes
summary: "ExciseTaxes (Microsoft.ExciseTaxes): 46 objects in BC29-30 (8 table extensions, 7 pages, 7 page extensions, 6 enums, 5 tables, ...); documented by 2 Learn hubs; 1 video."
tier: official
language: en
tags:
  - first-party app
  - finance
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1b9bdd875f74e3a6596263f317961f0bcaebf532b84c77497c403c112098f139
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/ExciseTaxes/app
    title: src/Apps/W1/ExciseTaxes/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/7412
    - object/table/7413
    - object/table/7414
    - object/table/7415
    - object/table/7416
    - object/tableextension/7412
    - object/tableextension/7413
    - object/tableextension/7414
    - object/tableextension/7415
    - object/tableextension/7416
    - object/tableextension/7417
    - object/tableextension/7418
    - object/tableextension/7419
    - object/page/7412
    - object/page/7413
    - object/page/7414
    - object/page/7415
    - object/page/7416
    - object/page/7417
    - object/page/7418
    - object/pageextension/7412
    - object/pageextension/7413
    - object/pageextension/7414
    - object/pageextension/7415
    - object/pageextension/7416
    - object/pageextension/7417
    - object/pageextension/7419
    - object/report/7412
    - object/codeunit/7412
    - object/codeunit/7413
    - object/codeunit/7414
    - object/enum/7412
    - object/enum/7413
    - object/enum/7414
    - object/enum/7415
    - object/enum/7416
    - object/enum/7417
    - object/enumextension/7412
    - object/permissionset/7450
    - object/permissionset/7451
    - object/permissionset/7452
    - object/permissionset/7453
    - object/permissionsetextension/7454
    - object/permissionsetextension/7455
    - object/permissionsetextension/7456
    - object/permissionsetextension/7457
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central/set-up-finance
    - topic/business-central/business-functionality/finance
  localizations: []
  videos:
    - video/Cj_n5x3gN_Y
  posts: []
  guidelines: []
app: ExciseTaxes
namespace_root: Microsoft.ExciseTaxes
present_in:
  - "29"
  - "30"
counts:
  objects: 46
  by_type:
    tableextension: 8
    page: 7
    pageextension: 7
    enum: 6
    table: 5
    permissionset: 4
    permissionsetextension: 4
    codeunit: 3
    report: 1
    enumextension: 1
  hubs: 2
  videos: 1
  posts: 0
---

# ExciseTaxes

> ExciseTaxes (Microsoft.ExciseTaxes): 46 objects in BC29-30 (8 table extensions, 7 pages, 7 page extensions, 6 enums, 5 tables, ...); documented by 2 Learn hubs; 1 video.

First-party app · folder `src/Apps/W1/ExciseTaxes/app` · namespace `Microsoft.ExciseTaxes` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Set up finance](../topics/business-central/business-functionality/set-up-business-central/set-up-finance.md) (Business functionality > Set up Business Central): 4 objects
- [Finance](../topics/business-central/business-functionality/finance.md) (Business functionality): 2 objects

## Objects

46 objects, by type.

### Tables (5)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Excise Tax Type](../objects/table/7412.md) |  |
| 7413 | [Excise Tax Item/FA Rate](../objects/table/7413.md) | Excise Duty Rate |
| 7414 | [Excise Tax Entry Permission](../objects/table/7414.md) | Excise Tax Entry Type |
| 7415 | [Item Excise Tax](../objects/table/7415.md) |  |
| 7416 | [Excise Tax Rate](../objects/table/7416.md) | Excise Duty Rate |

### Table extensions (8)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Sustainability Batch Excise](../objects/tableextension/7412.md) |  |
| 7413 | [Excise Journal Line Ext](../objects/tableextension/7413.md) |  |
| 7414 | [Excise Taxes Trans. Log Ext](../objects/tableextension/7414.md) |  |
| 7415 | [Excise Item Ledger Entry Ext](../objects/tableextension/7415.md) |  |
| 7416 | [Excise FA Ledger Entry Ext](../objects/tableextension/7416.md) |  |
| 7417 | [Excise Item Ext](../objects/tableextension/7417.md) |  |
| 7418 | [Excise Fixed Asset Ext](../objects/tableextension/7418.md) |  |
| 7419 | [Excise Location Ext](../objects/tableextension/7419.md) |  |

### Pages (7)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Excise Tax Item/FA Rates](../objects/page/7412.md) | Excise Duty Rates |
| 7413 | [Excise Tax Entry Permissions](../objects/page/7413.md) | Excise Tax Entry Types |
| 7414 | [Excise Tax Types](../objects/page/7414.md) |  |
| 7415 | [Excise Tax Type Card](../objects/page/7415.md) |  |
| 7416 | [Item Excise Taxes](../objects/page/7416.md) | Excise Taxes |
| 7417 | [Item Excise Tax API](../objects/page/7417.md) | Item Excise Tax |
| 7418 | [Excise Tax Rates](../objects/page/7418.md) | Excise Duty Rates |

### Page extensions (7)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Excise Fixed Asset Card Ext](../objects/pageextension/7412.md) |  |
| 7413 | [Excise Journal Batch Ext](../objects/pageextension/7413.md) |  |
| 7414 | [Excise Journal Line Ext](../objects/pageextension/7414.md) |  |
| 7415 | [Excise Item Card Ext](../objects/pageextension/7415.md) |  |
| 7416 | [Excise Tax Trans Log Ext](../objects/pageextension/7416.md) |  |
| 7417 | [Excise Location Card Ext](../objects/pageextension/7417.md) |  |
| 7419 | [Excise Item Ledger Entries Ext](../objects/pageextension/7419.md) |  |

### Reports (1)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Create Excise Tax Jnl. Entries](../objects/report/7412.md) | Generate Excise Tax Journal Entries |

### Codeunits (3)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Excise Tax Calculation](../objects/codeunit/7412.md) |  |
| 7413 | [Excise Tax Trans Subscriber](../objects/codeunit/7413.md) |  |
| 7414 | [Excise Tax Upgrade](../objects/codeunit/7414.md) |  |

### Enums (6)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Excise Entry Type](../objects/enum/7412.md) |  |
| 7413 | [Excise Source Type](../objects/enum/7413.md) |  |
| 7414 | [Excise Tax Basis](../objects/enum/7414.md) |  |
| 7415 | [Excise Calculation Type](../objects/enum/7415.md) |  |
| 7416 | [Excise Bonded Handling](../objects/enum/7416.md) |  |
| 7417 | [Excise Bonded Loc. Treatment](../objects/enum/7417.md) | Bonded Location Treatment |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7412 | [Sust. Excise Document Type](../objects/enumextension/7412.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 7450 | [ExciseTaxes - Objects](../objects/permissionset/7450.md) | Excise Taxes - Objects |
| 7451 | [ExciseTaxes - Read](../objects/permissionset/7451.md) | Excise Taxes - Read |
| 7452 | [ExciseTaxes - Edit](../objects/permissionset/7452.md) | Excise Taxes - Edit |
| 7453 | [ExciseTaxes - Admin](../objects/permissionset/7453.md) | Excise Taxes - Admin |

### Permission set extensions (4)

| Id | Name | Caption |
|---|---|---|
| 7454 | [D365 BASIC ExciseTaxes](../objects/permissionsetextension/7454.md) |  |
| 7455 | [D365 BUS FULL ACCESS ExciseTaxes](../objects/permissionsetextension/7455.md) |  |
| 7456 | [D365 READ ExciseTaxes](../objects/permissionsetextension/7456.md) |  |
| 7457 | [D365 TEAM MEMBER ExciseTaxes](../objects/permissionsetextension/7457.md) |  |

## Videos and posts

Videos and posts that name this app's objects by exact type and name.

- [What's New: Excise Taxes (2026 release wave 1)](../videos/Cj_n5x3gN_Y.md) (video, 2026-04-01): names Page 7414 "Excise Tax Types"

Source: [src/Apps/W1/ExciseTaxes/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/ExciseTaxes/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
