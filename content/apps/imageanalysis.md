---
id: app/imageanalysis
type: app
title: ImageAnalysis
summary: "ImageAnalysis (Microsoft.Utility): 22 objects in BC29-30 (8 permission set extensions, 3 pages, 3 codeunits, 3 permission sets, 2 tables, ...); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - administration
system: administration
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 179ba781a04c99e67c2bfed77f454e9ba275b7e080a6674e42eae241758840ba
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/ImageAnalysis/app
    title: src/Apps/W1/ImageAnalysis/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/2028
    - object/table/2029
    - object/tableextension/2025
    - object/page/2026
    - object/page/2027
    - object/page/2029
    - object/pageextension/2025
    - object/pageextension/2026
    - object/codeunit/2026
    - object/codeunit/2027
    - object/codeunit/2029
    - object/permissionset/4210
    - object/permissionset/4211
    - object/permissionset/4212
    - object/permissionsetextension/4209
    - object/permissionsetextension/6820
    - object/permissionsetextension/9453
    - object/permissionsetextension/27453
    - object/permissionsetextension/29582
    - object/permissionsetextension/31135
    - object/permissionsetextension/35981
    - object/permissionsetextension/42789
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: ImageAnalysis
namespace_root: Microsoft.Utility
present_in:
  - "29"
  - "30"
counts:
  objects: 22
  by_type:
    permissionsetextension: 8
    page: 3
    codeunit: 3
    permissionset: 3
    table: 2
    pageextension: 2
    tableextension: 1
  hubs: 1
  videos: 0
  posts: 0
---

# ImageAnalysis

> ImageAnalysis (Microsoft.Utility): 22 objects in BC29-30 (8 permission set extensions, 3 pages, 3 codeunits, 3 permission sets, 2 tables, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/ImageAnalysis/app` · namespace `Microsoft.Utility` · BC29-30 · system administration · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 5 objects

## Objects

22 objects, by type.

### Tables (2)

| Id | Name | Caption |
|---|---|---|
| 2028 | [MS - Image Analyzer Tags](../objects/table/2028.md) |  |
| 2029 | [MS - Img. Analyzer Blacklist](../objects/table/2029.md) | Image Analyzer Blocked Attributes |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 2025 | [MS - Image Analyzer Setup](../objects/tableextension/2025.md) |  |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 2026 | [Image Analysis Tags](../objects/page/2026.md) | Image Analyzer Attributes |
| 2027 | [Image Analysis Blacklist](../objects/page/2027.md) | Image Analyzer Blocked Attributes |
| 2029 | [Image Analyzer Wizard](../objects/page/2029.md) | Image Analyzer assisted setup guide |

### Page extensions (2)

| Id | Name | Caption |
|---|---|---|
| 2025 | [Image Analysis Setup Ext](../objects/pageextension/2025.md) |  |
| 2026 | [Item Picture Analyzer Ext](../objects/pageextension/2026.md) |  |

### Codeunits (3)

| Id | Name | Caption |
|---|---|---|
| 2026 | [Item Attr Populate](../objects/codeunit/2026.md) |  |
| 2027 | [Image Analyzer Ext. Mgt.](../objects/codeunit/2027.md) |  |
| 2029 | [Image Analysis Install](../objects/codeunit/2029.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4210 | [ImageAnalysis - Edit](../objects/permissionset/4210.md) | Image Analyzer - Edit |
| 4211 | [ImageAnalysis - Objects](../objects/permissionset/4211.md) | Image Analyzer - Objects |
| 4212 | [ImageAnalysis - Read](../objects/permissionset/4212.md) | Image Analyzer - Read |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 4209 | [D365 TEAM MEMBERImage Analyzer](../objects/permissionsetextension/4209.md) |  |
| 6820 | [D365 READImage Analyzer](../objects/permissionsetextension/6820.md) |  |
| 9453 | [D365 BUS PREMIUMImage Analyzer](../objects/permissionsetextension/9453.md) |  |
| 27453 | [INTELLIGENT CLOUDImage Analyzer](../objects/permissionsetextension/27453.md) |  |
| 29582 | [D365 BASIC ISVImage Analyzer](../objects/permissionsetextension/29582.md) |  |
| 31135 | [D365 BASICImage Analyzer](../objects/permissionsetextension/31135.md) |  |
| 35981 | [D365 BUS FULL ACCESSImage Analyzer](../objects/permissionsetextension/35981.md) |  |
| 42789 | [D365 FULL ACCESSImage Analyzer](../objects/permissionsetextension/42789.md) |  |

Source: [src/Apps/W1/ImageAnalysis/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/ImageAnalysis/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
