---
id: app/external-storage-document-attachments
type: app
title: External Storage - Document Attachments
summary: "External Storage - Document Attachments (Microsoft.ExternalStorage): 11 objects in BC29-30 (3 codeunits, 2 pages, 2 reports, 1 table, 1 table extension, ...); no Learn hub documents its objects yet."
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
  at: "2026-10-19T01:07:00.885Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c8081606fc969a9fdf619ceb1f5aee9ae436b670d4f92051716760b04eca1a72
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/eb2bfe5258a473c969a6b85cdc98ce8524408706/src/Apps/W1/External%20Storage%20-%20Document%20Attachments/app
    title: src/Apps/W1/External Storage - Document Attachments/app (main)
    date: null
    commit: eb2bfe5258a473c969a6b85cdc98ce8524408706
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/8750
    - object/tableextension/8750
    - object/page/8750
    - object/page/8751
    - object/report/8752
    - object/report/8753
    - object/codeunit/8751
    - object/codeunit/8754
    - object/codeunit/8755
    - object/enumextension/8750
    - object/permissionset/8751
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: External Storage - Document Attachments
namespace_root: Microsoft.ExternalStorage
present_in:
  - "29"
  - "30"
counts:
  objects: 11
  by_type:
    codeunit: 3
    page: 2
    report: 2
    table: 1
    tableextension: 1
    enumextension: 1
    permissionset: 1
  hubs: 0
  videos: 0
  posts: 0
---

# External Storage - Document Attachments

> External Storage - Document Attachments (Microsoft.ExternalStorage): 11 objects in BC29-30 (3 codeunits, 2 pages, 2 reports, 1 table, 1 table extension, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/External Storage - Document Attachments/app` · namespace `Microsoft.ExternalStorage` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

11 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 8750 | [DA External Storage Setup](../objects/table/8750.md) | External Storage Setup |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 8750 | [Document Attachment Ext.Stor.](../objects/tableextension/8750.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 8750 | [DA External Storage Setup](../objects/page/8750.md) | External Storage Setup |
| 8751 | [Document Attachment - External](../objects/page/8751.md) | Document Attachments - External Storage |

### Reports (2)

| Id | Name | Caption |
|---|---|---|
| 8752 | [DA External Storage Sync](../objects/report/8752.md) | External Storage Synchronization |
| 8753 | [DA External Storage Migration](../objects/report/8753.md) | External Storage Migration |

### Codeunits (3)

| Id | Name | Caption |
|---|---|---|
| 8751 | [DA External Storage Impl.](../objects/codeunit/8751.md) |  |
| 8754 | [DA Feature Telemetry](../objects/codeunit/8754.md) |  |
| 8755 | [DA Ext. Storage Sync Worker](../objects/codeunit/8755.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 8750 | [DA Ext. Storage-File Scenario](../objects/enumextension/8750.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 8751 | [DA Ext. Stor. Admin](../objects/permissionset/8751.md) | DA - External Storage Admin |

Source: [src/Apps/W1/External Storage - Document Attachments/app](https://github.com/microsoft/BCApps/tree/eb2bfe5258a473c969a6b85cdc98ce8524408706/src/Apps/W1/External%20Storage%20-%20Document%20Attachments/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
