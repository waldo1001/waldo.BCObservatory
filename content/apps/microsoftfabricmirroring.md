---
id: app/microsoftfabricmirroring
type: app
title: MicrosoftFabricMirroring
summary: "MicrosoftFabricMirroring (Microsoft.FabricExport): 38 objects in BC29-30 (18 pages, 13 codeunits, 3 tables, 3 permission sets, 1 enum); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - development
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-30T01:04:48.899Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 984576a26338366134688cbe139d69ff593b24754bf8647de32a4482338f14d4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/MicrosoftFabricMirroring/app
    title: src/Apps/W1/MicrosoftFabricMirroring/app (main)
    date: null
    commit: d2abc1d2ceae394331716c8183ef60e1534c2ce0
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/48500
    - object/table/48501
    - object/table/48533
    - object/page/48502
    - object/page/48503
    - object/page/48504
    - object/page/48505
    - object/page/48506
    - object/page/48507
    - object/page/48508
    - object/page/48509
    - object/page/48510
    - object/page/48511
    - object/page/48512
    - object/page/48513
    - object/page/48514
    - object/page/48515
    - object/page/48516
    - object/page/48517
    - object/page/48518
    - object/page/48519
    - object/codeunit/48500
    - object/codeunit/48520
    - object/codeunit/48521
    - object/codeunit/48522
    - object/codeunit/48523
    - object/codeunit/48524
    - object/codeunit/48525
    - object/codeunit/48526
    - object/codeunit/48527
    - object/codeunit/48528
    - object/codeunit/48529
    - object/codeunit/48535
    - object/codeunit/48536
    - object/enum/48534
    - object/permissionset/48530
    - object/permissionset/48531
    - object/permissionset/48532
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: MicrosoftFabricMirroring
namespace_root: Microsoft.FabricExport
present_in:
  - "29"
  - "30"
counts:
  objects: 38
  by_type:
    page: 18
    codeunit: 13
    table: 3
    permissionset: 3
    enum: 1
  hubs: 1
  videos: 0
  posts: 0
---

# MicrosoftFabricMirroring

> MicrosoftFabricMirroring (Microsoft.FabricExport): 38 objects in BC29-30 (18 pages, 13 codeunits, 3 tables, 3 permission sets, 1 enum); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/MicrosoftFabricMirroring/app` · namespace `Microsoft.FabricExport` · BC29-30 · system development · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Microsoft Fabric](../topics/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric.md) (Analytics, business intelligence, and reporting > Analyze data in business intelligence tools): 9 objects

## Objects

38 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 48500 | [Fabric Config Package Line](../objects/table/48500.md) |  |
| 48501 | [Fabric Config Package](../objects/table/48501.md) |  |
| 48533 | [Fabric Table Claim](../objects/table/48533.md) |  |

### Pages (18)

| Id | Name | Caption |
|---|---|---|
| 48502 | [Fabric API Tables](../objects/page/48502.md) |  |
| 48503 | [Fabric API Companies](../objects/page/48503.md) |  |
| 48504 | [Fabric API Config Packages](../objects/page/48504.md) |  |
| 48505 | [Fabric API Export Summary](../objects/page/48505.md) |  |
| 48506 | [Fabric API Export Details](../objects/page/48506.md) |  |
| 48507 | [Fabric API Setup](../objects/page/48507.md) |  |
| 48508 | [Fabric Platform Companies](../objects/page/48508.md) | Fabric Company Configuration |
| 48509 | [Fabric Platform Export Details](../objects/page/48509.md) | Fabric Synchronization Details |
| 48510 | [Fabric Platform Export Summary](../objects/page/48510.md) | Fabric Synchronization Overview |
| 48511 | [Fabric Platform Setup](../objects/page/48511.md) | Microsoft Fabric Mirroring Setup (Preview) |
| 48512 | [Fabric Platform Tables](../objects/page/48512.md) | Fabric Table Configuration |
| 48513 | [Fabric Config Package Card](../objects/page/48513.md) | Fabric Config Package |
| 48514 | [Fabric Config Package Subform](../objects/page/48514.md) | Fabric Config Package Lines |
| 48515 | [Fabric Config Packages](../objects/page/48515.md) | Fabric Configuration Packages |
| 48516 | [Fabric Platform Name Lookup](../objects/page/48516.md) | Select |
| 48517 | [Fabric Companies FactBox](../objects/page/48517.md) | Companies to Synchronize |
| 48518 | [Fabric Tables FactBox](../objects/page/48518.md) | Tables to Synchronize |
| 48519 | [Fabric Platform Setup Wizard](../objects/page/48519.md) | Set Up Microsoft Fabric Mirroring (Preview) |

### Codeunits (13)

| Id | Name | Caption |
|---|---|---|
| 48500 | [Fabric Env. Cleanup Subs.](../objects/codeunit/48500.md) |  |
| 48520 | [Fabric Platform Mgt](../objects/codeunit/48520.md) |  |
| 48521 | [Fabric Config Package Mgt](../objects/codeunit/48521.md) |  |
| 48522 | [Fabric Install](../objects/codeunit/48522.md) |  |
| 48523 | [Fabric Platform Lookup State](../objects/codeunit/48523.md) |  |
| 48524 | [Fabric Platform Credential Mgt](../objects/codeunit/48524.md) |  |
| 48525 | [Fabric Platform Http Client](../objects/codeunit/48525.md) |  |
| 48526 | [Fabric Platform Admin Client](../objects/codeunit/48526.md) |  |
| 48527 | [Fabric Platform Telemetry](../objects/codeunit/48527.md) |  |
| 48528 | [Fabric Upgrade](../objects/codeunit/48528.md) |  |
| 48529 | [Fabric Privacy Notice](../objects/codeunit/48529.md) |  |
| 48535 | [Fabric Table Validation](../objects/codeunit/48535.md) |  |
| 48536 | [Fabric Field Validation](../objects/codeunit/48536.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 48534 | [Fabric Table Claim Source](../objects/enum/48534.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 48530 | [Fabric Exp Admin](../objects/permissionset/48530.md) | MS Fabric Mirroring - Admin |
| 48531 | [Fabric Exp Read](../objects/permissionset/48531.md) | MS Fabric Mirroring - Read |
| 48532 | [Fabric Exp Activate](../objects/permissionset/48532.md) | MS Fabric Mirroring - Activate |

Source: [src/Apps/W1/MicrosoftFabricMirroring/app](https://github.com/microsoft/BCApps/tree/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/MicrosoftFabricMirroring/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
