---
id: app/saf-t
type: app
title: SAF-T
summary: "SAF-T (Microsoft.Finance): 54 objects in BC29-30 (13 codeunits, 7 queries, 6 table extensions, 6 permission set extensions, 5 page extensions, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - finance
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3bf018c86a7380f5f6a8bdb8f054ae72dfffdd5be36f4afbade038177a041fa1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/SAF-T/app
    title: src/Apps/W1/SAF-T/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/5280
    - object/table/5281
    - object/tableextension/5280
    - object/tableextension/5281
    - object/tableextension/5282
    - object/tableextension/5283
    - object/tableextension/5284
    - object/tableextension/5285
    - object/page/5280
    - object/page/5281
    - object/page/5282
    - object/page/5283
    - object/pageextension/5280
    - object/pageextension/5281
    - object/pageextension/5282
    - object/pageextension/5283
    - object/pageextension/5285
    - object/codeunit/5280
    - object/codeunit/5281
    - object/codeunit/5282
    - object/codeunit/5283
    - object/codeunit/5284
    - object/codeunit/5285
    - object/codeunit/5286
    - object/codeunit/5287
    - object/codeunit/5288
    - object/codeunit/5289
    - object/codeunit/5290
    - object/codeunit/5291
    - object/codeunit/5292
    - object/query/5280
    - object/query/5281
    - object/query/5282
    - object/query/5283
    - object/query/5284
    - object/query/5285
    - object/query/5286
    - object/enum/5280
    - object/enumextension/5280
    - object/enumextension/5282
    - object/enumextension/5283
    - object/interface/createstandarddatasaft
    - object/interface/datachecksaft
    - object/interface/dataupgradesaft
    - object/interface/xmldatahandlingsaft
    - object/permissionset/5280
    - object/permissionset/5281
    - object/permissionset/5282
    - object/permissionsetextension/5280
    - object/permissionsetextension/5281
    - object/permissionsetextension/5282
    - object/permissionsetextension/5283
    - object/permissionsetextension/5284
    - object/permissionsetextension/5285
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SAF-T
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 54
  by_type:
    codeunit: 13
    query: 7
    tableextension: 6
    permissionsetextension: 6
    pageextension: 5
    page: 4
    interface: 4
    enumextension: 3
    permissionset: 3
    table: 2
    enum: 1
  hubs: 0
  videos: 0
  posts: 0
---

# SAF-T

> SAF-T (Microsoft.Finance): 54 objects in BC29-30 (13 codeunits, 7 queries, 6 table extensions, 6 permission set extensions, 5 page extensions, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/SAF-T/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## Objects

54 objects, by type.

### Tables (2)

| Id | Name | Caption |
|---|---|---|
| 5280 | [Missing Field SAF-T](../objects/table/5280.md) |  |
| 5281 | [Source Code SAF-T](../objects/table/5281.md) | SAF-T Source Code |

### Table extensions (6)

| Id | Name | Caption |
|---|---|---|
| 5280 | [Company Contact SAF-T](../objects/tableextension/5280.md) |  |
| 5281 | [Source Code SAF-T](../objects/tableextension/5281.md) |  |
| 5282 | [Dimension SAF-T](../objects/tableextension/5282.md) |  |
| 5283 | [Audit File Export Setup SAF-T](../objects/tableextension/5283.md) |  |
| 5284 | [Audit File Export Header SAF-T](../objects/tableextension/5284.md) |  |
| 5285 | [VAT Posting Setup SAF-T](../objects/tableextension/5285.md) |  |

### Pages (4)

| Id | Name | Caption |
|---|---|---|
| 5280 | [SAF-T Wizard](../objects/page/5280.md) | SAF-T Setup Guide |
| 5281 | [Data Check SAF-T](../objects/page/5281.md) |  |
| 5282 | [Source Codes SAF-T](../objects/page/5282.md) | SAF-T Source Codes |
| 5283 | [VAT Posting Setup SAF-T](../objects/page/5283.md) |  |

### Page extensions (5)

| Id | Name | Caption |
|---|---|---|
| 5280 | [Company Contact SAF-T](../objects/pageextension/5280.md) |  |
| 5281 | [Source Codes SAF-T](../objects/pageextension/5281.md) |  |
| 5282 | [Dimensions SAF-T](../objects/pageextension/5282.md) |  |
| 5283 | [Audit Export Doc. Card SAF-T](../objects/pageextension/5283.md) |  |
| 5285 | [Audit File Export Setup SAF-T](../objects/pageextension/5285.md) |  |

### Codeunits (13)

| Id | Name | Caption |
|---|---|---|
| 5280 | [SAF-T Data Mgt.](../objects/codeunit/5280.md) |  |
| 5281 | [Audit Data Handling SAF-T](../objects/codeunit/5281.md) |  |
| 5282 | [Xml Data Handling SAF-T](../objects/codeunit/5282.md) |  |
| 5283 | [Create Standard Data SAF-T](../objects/codeunit/5283.md) |  |
| 5284 | [Data Upgrade SAF-T](../objects/codeunit/5284.md) |  |
| 5285 | [Audit Data Check SAF-T](../objects/codeunit/5285.md) |  |
| 5286 | [Data Check Mgt. SAF-T](../objects/codeunit/5286.md) |  |
| 5287 | [Data Check SAF-T](../objects/codeunit/5287.md) |  |
| 5288 | [Install SAF-T](../objects/codeunit/5288.md) |  |
| 5289 | [Generate File SAF-T](../objects/codeunit/5289.md) |  |
| 5290 | [Xml Helper SAF-T](../objects/codeunit/5290.md) |  |
| 5291 | [Mapping Helper SAF-T](../objects/codeunit/5291.md) |  |
| 5292 | [Xml Helper SAF-T Public](../objects/codeunit/5292.md) |  |

### Queries (7)

| Id | Name | Caption |
|---|---|---|
| 5280 | [Qty. Item Ledger Entry SAF-T](../objects/query/5280.md) |  |
| 5281 | [Cust. Ledger Entry SAF-T](../objects/query/5281.md) |  |
| 5282 | [Vendor Ledger Entry SAF-T](../objects/query/5282.md) |  |
| 5283 | [Item Ledger Entry SAF-T](../objects/query/5283.md) |  |
| 5284 | [G/L Entry SAF-T](../objects/query/5284.md) |  |
| 5285 | [FA Ledger Entry SAF-T](../objects/query/5285.md) |  |
| 5286 | [G/L Entry By Trans. SAF-T](../objects/query/5286.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 5280 | [SAF-T Modification](../objects/enum/5280.md) |  |

### Enum extensions (3)

| Id | Name | Caption |
|---|---|---|
| 5280 | [Audit File Export Format SAF-T](../objects/enumextension/5280.md) |  |
| 5282 | [Audit Export Data Type SAF-T](../objects/enumextension/5282.md) |  |
| 5283 | [Partner Type SAF-T](../objects/enumextension/5283.md) |  |

### Interfaces (4)

| Id | Name | Caption |
|---|---|---|
|  | [CreateStandardDataSAFT](../objects/interface/createstandarddatasaft.md) |  |
|  | [DataCheckSAFT](../objects/interface/datachecksaft.md) |  |
|  | [DataUpgradeSAFT](../objects/interface/dataupgradesaft.md) |  |
|  | [XmlDataHandlingSAFT](../objects/interface/xmldatahandlingsaft.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 5280 | [SAF-T - Edit](../objects/permissionset/5280.md) |  |
| 5281 | [SAF-T - Read](../objects/permissionset/5281.md) |  |
| 5282 | [SAF-T Objects](../objects/permissionset/5282.md) |  |

### Permission set extensions (6)

| Id | Name | Caption |
|---|---|---|
| 5280 | [D365 BASIC - SAF-T](../objects/permissionsetextension/5280.md) |  |
| 5281 | [D365 BASIC ISV - SAF-T](../objects/permissionsetextension/5281.md) |  |
| 5282 | [D365 READ - SAF-T](../objects/permissionsetextension/5282.md) |  |
| 5283 | [D365 TEAM MEMBER - SAF-T](../objects/permissionsetextension/5283.md) |  |
| 5284 | [INTELLIGENT CLOUD - SAF-T](../objects/permissionsetextension/5284.md) |  |
| 5285 | [LOCAL - SAF-T](../objects/permissionsetextension/5285.md) |  |

Source: [src/Apps/W1/SAF-T/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/SAF-T/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
