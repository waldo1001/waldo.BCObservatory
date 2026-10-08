---
id: app/external-file-storage-sharepoint-connector
type: app
title: External File Storage - SharePoint Connector
summary: "External File Storage - SharePoint Connector (System.ExternalFileStorage): 16 objects in BC29-30 (4 codeunits, 3 permission sets, 2 pages, 2 enums, 2 permission set extensions, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - platform
system: platform
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ac13784ae06dc56f5fc7e30adcdb52df7f7b489d5e9d33537e404f96ad134be9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/External%20File%20Storage%20-%20SharePoint%20Connector/app
    title: src/Apps/W1/External File Storage - SharePoint Connector/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4580
    - object/page/4580
    - object/page/4581
    - object/codeunit/4580
    - object/codeunit/4608
    - object/codeunit/4609
    - object/codeunit/4610
    - object/enum/4580
    - object/enum/4585
    - object/enumextension/4580
    - object/permissionset/4580
    - object/permissionset/4581
    - object/permissionset/4582
    - object/permissionsetextension/4580
    - object/permissionsetextension/4581
    - object/entitlement/ext-sharepoint-connector
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: External File Storage - SharePoint Connector
namespace_root: System.ExternalFileStorage
present_in:
  - "29"
  - "30"
counts:
  objects: 16
  by_type:
    codeunit: 4
    permissionset: 3
    page: 2
    enum: 2
    permissionsetextension: 2
    table: 1
    enumextension: 1
    entitlement: 1
  hubs: 0
  videos: 0
  posts: 0
---

# External File Storage - SharePoint Connector

> External File Storage - SharePoint Connector (System.ExternalFileStorage): 16 objects in BC29-30 (4 codeunits, 3 permission sets, 2 pages, 2 enums, 2 permission set extensions, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/External File Storage - SharePoint Connector/app` · namespace `System.ExternalFileStorage` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

16 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 4580 | [Ext. SharePoint Account](../objects/table/4580.md) | SharePoint Account |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 4580 | [Ext. SharePoint Account](../objects/page/4580.md) | SharePoint Account |
| 4581 | [Ext. SharePoint Account Wizard](../objects/page/4581.md) | Setup SharePoint Account |

### Codeunits (4)

| Id | Name | Caption |
|---|---|---|
| 4580 | [Ext. SharePoint Connector Impl](../objects/codeunit/4580.md) |  |
| 4608 | [Ext. SharePoint Upgrade](../objects/codeunit/4608.md) |  |
| 4609 | [Ext. SharePoint REST Helper](../objects/codeunit/4609.md) |  |
| 4610 | [Ext. SharePoint Graph Helper](../objects/codeunit/4610.md) |  |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 4580 | [Ext. SharePoint Path Format](../objects/enum/4580.md) |  |
| 4585 | [Ext. SharePoint Auth Type](../objects/enum/4585.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4580 | [Ext. SharePoint Connector](../objects/enumextension/4580.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4580 | [Ext. SharePoint - Objects](../objects/permissionset/4580.md) | SharePoint - Objects |
| 4581 | [Ext. SharePoint - Read](../objects/permissionset/4581.md) | SharePoint - Read |
| 4582 | [Ext. SharePoint - Edit](../objects/permissionset/4582.md) | SharePoint - Edit |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4580 | [File Storage - Admin - Ext. SharePoint](../objects/permissionsetextension/4580.md) |  |
| 4581 | [File Storage - Edit - Ext. SharePoint](../objects/permissionsetextension/4581.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Ext. SharePoint Connector](../objects/entitlement/ext-sharepoint-connector.md) |  |

Source: [src/Apps/W1/External File Storage - SharePoint Connector/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/External%20File%20Storage%20-%20SharePoint%20Connector/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
