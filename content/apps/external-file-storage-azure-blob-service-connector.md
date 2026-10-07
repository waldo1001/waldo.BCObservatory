---
id: app/external-file-storage-azure-blob-service-connector
type: app
title: External File Storage - Azure Blob Service Connector
summary: "External File Storage - Azure Blob Service Connector (System.ExternalFileStorage): 13 objects in BC29-30 (3 pages, 3 permission sets, 2 permission set extensions, 1 table, 1 codeunit, ...); no Learn hub documents its objects yet."
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
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 883b3a38e5a1462eb4f462f481146e53275cf567d967f66f126d5c766e8187a3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/External%20File%20Storage%20-%20Azure%20Blob%20Service%20Connector/app
    title: src/Apps/W1/External File Storage - Azure Blob Service Connector/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4560
    - object/page/4560
    - object/page/4561
    - object/page/4562
    - object/codeunit/4560
    - object/enum/4560
    - object/enumextension/4560
    - object/permissionset/4560
    - object/permissionset/4561
    - object/permissionset/4562
    - object/permissionsetextension/4560
    - object/permissionsetextension/4561
    - object/entitlement/ext-blob-storage-connector
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: External File Storage - Azure Blob Service Connector
namespace_root: System.ExternalFileStorage
present_in:
  - "29"
  - "30"
counts:
  objects: 13
  by_type:
    page: 3
    permissionset: 3
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

# External File Storage - Azure Blob Service Connector

> External File Storage - Azure Blob Service Connector (System.ExternalFileStorage): 13 objects in BC29-30 (3 pages, 3 permission sets, 2 permission set extensions, 1 table, 1 codeunit, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/External File Storage - Azure Blob Service Connector/app` · namespace `System.ExternalFileStorage` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

13 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 4560 | [Ext. Blob Storage Account](../objects/table/4560.md) | Azure Blob Storage Account |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 4560 | [Ext. Blob Storage Account](../objects/page/4560.md) | Azure Blob Storage Account |
| 4561 | [Ext. Blob Stor. Account Wizard](../objects/page/4561.md) | Setup Azure Blob Storage Account |
| 4562 | [Ext. Blob Sto Container Lookup](../objects/page/4562.md) | Container Lookup |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 4560 | [Ext. Blob Sto. Connector Impl.](../objects/codeunit/4560.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4560 | [Ext. Blob Storage Auth. Type](../objects/enum/4560.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4560 | [Ext. Blob Storage Connector](../objects/enumextension/4560.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4560 | [Ext. Blob Stor. - Objects](../objects/permissionset/4560.md) | Blob Storage - Objects |
| 4561 | [Ext. Blob Stor. - Read](../objects/permissionset/4561.md) | Blob Storage - Read |
| 4562 | [Ext. Blob Stor. - Edit](../objects/permissionset/4562.md) | Blob Storage - Edit |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4560 | [File Storage - Admin - Ext. Blob Storage](../objects/permissionsetextension/4560.md) |  |
| 4561 | [File Storage - Edit - Ext. Blob Storage](../objects/permissionsetextension/4561.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Ext. Blob Storage Connector](../objects/entitlement/ext-blob-storage-connector.md) |  |

Source: [src/Apps/W1/External File Storage - Azure Blob Service Connector/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/External%20File%20Storage%20-%20Azure%20Blob%20Service%20Connector/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
