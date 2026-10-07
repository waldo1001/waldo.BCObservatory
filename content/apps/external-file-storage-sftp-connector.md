---
id: app/external-file-storage-sftp-connector
type: app
title: External File Storage - SFTP Connector
summary: "External File Storage - SFTP Connector (System.ExternalFileStorage): 12 objects in BC29-30 (3 permission sets, 2 pages, 2 permission set extensions, 1 table, 1 codeunit, ...); no Learn hub documents its objects yet."
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
  input_hash: bd8203a99f15b764eb271af90e34a8d279bae69aaf39050c703c051d4fd3bfcb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/External%20File%20Storage%20-%20SFTP%20Connector/app
    title: src/Apps/W1/External File Storage - SFTP Connector/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4621
    - object/page/4621
    - object/page/4622
    - object/codeunit/4621
    - object/enum/4621
    - object/enumextension/4621
    - object/permissionset/4621
    - object/permissionset/4622
    - object/permissionset/4623
    - object/permissionsetextension/4621
    - object/permissionsetextension/4622
    - object/entitlement/ext-sftp-connector
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: External File Storage - SFTP Connector
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

# External File Storage - SFTP Connector

> External File Storage - SFTP Connector (System.ExternalFileStorage): 12 objects in BC29-30 (3 permission sets, 2 pages, 2 permission set extensions, 1 table, 1 codeunit, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/External File Storage - SFTP Connector/app` · namespace `System.ExternalFileStorage` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

12 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 4621 | [Ext. SFTP Account](../objects/table/4621.md) | SFTP Account |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 4621 | [Ext. SFTP Account](../objects/page/4621.md) | SFTP Account |
| 4622 | [Ext. SFTP Account Wizard](../objects/page/4622.md) | Setup SFTP Account |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 4621 | [Ext. SFTP Connector Impl](../objects/codeunit/4621.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4621 | [Ext. SFTP Auth Type](../objects/enum/4621.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4621 | [Ext. SFTP Connector](../objects/enumextension/4621.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4621 | [Ext. SFTP - Edit](../objects/permissionset/4621.md) | SFTP - Edit |
| 4622 | [Ext. SFTP - Objects](../objects/permissionset/4622.md) | SFTP - Objects |
| 4623 | [Ext. SFTP - Read](../objects/permissionset/4623.md) | SFTP - Read |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4621 | [File Storage - Admin - Ext. SFTP](../objects/permissionsetextension/4621.md) |  |
| 4622 | [File Storage - Edit - Ext. SFTP](../objects/permissionsetextension/4622.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Ext. SFTP Connector](../objects/entitlement/ext-sftp-connector.md) |  |

Source: [src/Apps/W1/External File Storage - SFTP Connector/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/External%20File%20Storage%20-%20SFTP%20Connector/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
