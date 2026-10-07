---
id: app/external-file-storage-azure-file-service-connector
type: app
title: External File Storage - Azure File Service Connector
summary: "External File Storage - Azure File Service Connector (System.ExternalFileStorage): 12 objects in BC29-30 (3 permission sets, 2 pages, 2 permission set extensions, 1 table, 1 codeunit, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - platform
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c5d86c8cb2003711f5d509f207b4731b594d1d96c5153a8bf2194cd2b94567d5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/External%20File%20Storage%20-%20Azure%20File%20Service%20Connector/app
    title: src/Apps/W1/External File Storage - Azure File Service Connector/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4570
    - object/page/4570
    - object/page/4571
    - object/codeunit/4570
    - object/enum/4570
    - object/enumextension/4570
    - object/permissionset/4570
    - object/permissionset/4571
    - object/permissionset/4572
    - object/permissionsetextension/4570
    - object/permissionsetextension/4571
    - object/entitlement/ext-file-share-connector
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: External File Storage - Azure File Service Connector
namespace_root: System.ExternalFileStorage
present_in:
  - "29"
  - "30"
counts:
  objects: 12
  by_type:
    permissionset: 3
    page: 2
    permissionsetextension: 2
    table: 1
    codeunit: 1
    enum: 1
    enumextension: 1
    entitlement: 1
  hubs: 0
  videos: 0
  posts: 0
---

# External File Storage - Azure File Service Connector

> External File Storage - Azure File Service Connector (System.ExternalFileStorage): 12 objects in BC29-30 (3 permission sets, 2 pages, 2 permission set extensions, 1 table, 1 codeunit, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/External File Storage - Azure File Service Connector/app` · namespace `System.ExternalFileStorage` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

12 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 4570 | [Ext. File Share Account](../objects/table/4570.md) | Azure File Share Account |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 4570 | [Ext. File Share Account](../objects/page/4570.md) | Azure File Share Account |
| 4571 | [Ext. File Share Account Wizard](../objects/page/4571.md) | Setup Azure File Share Account |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 4570 | [Ext. File Share Connector Impl](../objects/codeunit/4570.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4570 | [Ext. File Share Auth. Type](../objects/enum/4570.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4570 | [Ext. File Share Connector](../objects/enumextension/4570.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4570 | [Ext. File Share - Objects](../objects/permissionset/4570.md) | File Share - Objects |
| 4571 | [Ext. File Share - Read](../objects/permissionset/4571.md) | File Share - Read |
| 4572 | [Ext. File Share - Edit](../objects/permissionset/4572.md) | File Share - Edit |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4570 | [File Storage - Admin - Ext. File Share](../objects/permissionsetextension/4570.md) |  |
| 4571 | [File Storage - Edit - Ext. File Share](../objects/permissionsetextension/4571.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Ext. File Share Connector](../objects/entitlement/ext-file-share-connector.md) |  |

Source: [src/Apps/W1/External File Storage - Azure File Service Connector/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/External%20File%20Storage%20-%20Azure%20File%20Service%20Connector/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
