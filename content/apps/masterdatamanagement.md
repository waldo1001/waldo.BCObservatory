---
id: app/masterdatamanagement
type: app
title: MasterDataManagement
summary: "MasterDataManagement (Microsoft.Integration): 55 objects in BC29-30 (20 codeunits, 8 permission set extensions, 7 table extensions, 5 pages, 5 permission sets, ...); documented by 1 Learn hub; 1 video."
tier: official
language: en
tags:
  - first-party app
  - integration
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 18d1fddaee5d27b5cc38fc7c2464d423142d6a7fcabb6efd34aa801c2fc9d1d4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/MasterDataManagement/app
    title: src/Apps/W1/MasterDataManagement/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/7230
    - object/table/7231
    - object/table/7233
    - object/table/7234
    - object/tableextension/7234
    - object/tableextension/7235
    - object/tableextension/7244
    - object/tableextension/7245
    - object/tableextension/7246
    - object/tableextension/7250
    - object/tableextension/7251
    - object/page/7230
    - object/page/7232
    - object/page/7233
    - object/page/7234
    - object/page/7236
    - object/codeunit/7230
    - object/codeunit/7231
    - object/codeunit/7232
    - object/codeunit/7233
    - object/codeunit/7234
    - object/codeunit/7235
    - object/codeunit/7236
    - object/codeunit/7237
    - object/codeunit/7238
    - object/codeunit/7239
    - object/codeunit/7240
    - object/codeunit/7241
    - object/codeunit/7242
    - object/codeunit/7243
    - object/codeunit/7244
    - object/codeunit/7245
    - object/codeunit/7246
    - object/codeunit/7247
    - object/codeunit/7248
    - object/codeunit/7249
    - object/xmlport/7230
    - object/xmlport/7231
    - object/enum/7239
    - object/enumextension/7230
    - object/interface/imdm-data-source
    - object/interface/imdm-source-transport
    - object/permissionset/7230
    - object/permissionset/7231
    - object/permissionset/7232
    - object/permissionset/7233
    - object/permissionset/7242
    - object/permissionsetextension/7233
    - object/permissionsetextension/7234
    - object/permissionsetextension/7235
    - object/permissionsetextension/7236
    - object/permissionsetextension/7237
    - object/permissionsetextension/7238
    - object/permissionsetextension/7239
    - object/permissionsetextension/7240
  features: []
  topics:
    - topic/business-central/development-and-administration/synchronize-master-data-across-companies
  localizations: []
  videos:
    - video/BlkW7VC52c0
  posts: []
  guidelines: []
app: MasterDataManagement
namespace_root: Microsoft.Integration
present_in:
  - "29"
  - "30"
counts:
  objects: 55
  by_type:
    codeunit: 20
    permissionsetextension: 8
    tableextension: 7
    page: 5
    permissionset: 5
    table: 4
    xmlport: 2
    interface: 2
    enum: 1
    enumextension: 1
  hubs: 1
  videos: 1
  posts: 0
---

# MasterDataManagement

> MasterDataManagement (Microsoft.Integration): 55 objects in BC29-30 (20 codeunits, 8 permission set extensions, 7 table extensions, 5 pages, 5 permission sets, ...); documented by 1 Learn hub; 1 video.

First-party app · folder `src/Apps/W1/MasterDataManagement/app` · namespace `Microsoft.Integration` · BC29-30 · system integration · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Synchronize master data across companies](../topics/business-central/development-and-administration/synchronize-master-data-across-companies.md) (Development and administration): 6 objects

## Objects

55 objects, by type.

### Tables (4)

| Id | Name | Caption |
|---|---|---|
| 7230 | [Master Data Management Setup](../objects/table/7230.md) |  |
| 7231 | [Master Data Mgt. Coupling](../objects/table/7231.md) |  |
| 7233 | [Master Data Full Synch. R. Ln.](../objects/table/7233.md) | Master Data Full Synch. Review Line |
| 7234 | [Master Data Mgt. Subscriber](../objects/table/7234.md) |  |

### Table extensions (7)

| Id | Name | Caption |
|---|---|---|
| 7234 | [MasterDataMgtFieldMapping](../objects/tableextension/7234.md) |  |
| 7235 | [MasterDataMgtTableMapping](../objects/tableextension/7235.md) |  |
| 7244 | [MDM Customer](../objects/tableextension/7244.md) |  |
| 7245 | [MDM Vendor](../objects/tableextension/7245.md) |  |
| 7246 | [MDM Contact](../objects/tableextension/7246.md) |  |
| 7250 | [MDM Post Code](../objects/tableextension/7250.md) |  |
| 7251 | [MDM Currency Exch. Rate](../objects/tableextension/7251.md) |  |

### Pages (5)

| Id | Name | Caption |
|---|---|---|
| 7230 | [Master Data Management Setup](../objects/page/7230.md) |  |
| 7232 | [MDM Connection Details](../objects/page/7232.md) | Cross-Environment Connection Setup |
| 7233 | [Master Data Synch. Tables](../objects/page/7233.md) | Synchronization Tables |
| 7234 | [Master Data Full Synch. Review](../objects/page/7234.md) | Master Data Initial Synchronization |
| 7236 | [Master Data Synch. Fields](../objects/page/7236.md) | Synchronization Fields |

### Codeunits (20)

| Id | Name | Caption |
|---|---|---|
| 7230 | [Master Data Mgt. Setup Default](../objects/codeunit/7230.md) |  |
| 7231 | [Integration Master Data Synch.](../objects/codeunit/7231.md) |  |
| 7232 | [MDM Inline Media](../objects/codeunit/7232.md) |  |
| 7233 | [Master Data Management](../objects/codeunit/7233.md) |  |
| 7234 | [MDM Contact Relation Cache](../objects/codeunit/7234.md) |  |
| 7235 | [Master Data Mgt. Table Couple](../objects/codeunit/7235.md) |  |
| 7236 | [Master Data Mgt. Tbl. Uncouple](../objects/codeunit/7236.md) |  |
| 7237 | [Master Data Mgt. Subscribers](../objects/codeunit/7237.md) |  |
| 7238 | [Master Data Mgt. Upgrade](../objects/codeunit/7238.md) |  |
| 7239 | [MDM Source Watermark](../objects/codeunit/7239.md) |  |
| 7240 | [MDM Local Data Source](../objects/codeunit/7240.md) |  |
| 7241 | [MDM Cross-Env Source API](../objects/codeunit/7241.md) |  |
| 7242 | [MDM Privacy Notice](../objects/codeunit/7242.md) |  |
| 7243 | [Master Data Mgt. Install](../objects/codeunit/7243.md) |  |
| 7244 | [MDM Source Connection](../objects/codeunit/7244.md) |  |
| 7245 | [MDM Cross-Env Change Detector](../objects/codeunit/7245.md) |  |
| 7246 | [MDM Source Capabilities](../objects/codeunit/7246.md) |  |
| 7247 | [MDM Http Source Transport](../objects/codeunit/7247.md) |  |
| 7248 | [MDM Source Response](../objects/codeunit/7248.md) |  |
| 7249 | [MDM Cross-Env Data Source](../objects/codeunit/7249.md) |  |

### XMLports (2)

| Id | Name | Caption |
|---|---|---|
| 7230 | [ExportMDMSetup](../objects/xmlport/7230.md) | Export Master Data Management Setup |
| 7231 | [ImportMDMSetup](../objects/xmlport/7231.md) | Import Master Data Management Setup |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 7239 | [MDM Data Source Type](../objects/enum/7239.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7230 | [Data Synch. Table Mapping Type](../objects/enumextension/7230.md) |  |

### Interfaces (2)

| Id | Name | Caption |
|---|---|---|
|  | [IMDM Data Source](../objects/interface/imdm-data-source.md) |  |
|  | [IMDM Source Transport](../objects/interface/imdm-source-transport.md) |  |

### Permission sets (5)

| Id | Name | Caption |
|---|---|---|
| 7230 | [Master Data Mgt. - Objects](../objects/permissionset/7230.md) |  |
| 7231 | [Master Data Mgt. - Read](../objects/permissionset/7231.md) |  |
| 7232 | [Master Data Mgt. - View](../objects/permissionset/7232.md) |  |
| 7233 | [Master Data Mgt.](../objects/permissionset/7233.md) |  |
| 7242 | [MDM Cross-Env Read](../objects/permissionset/7242.md) | Master Data Mgt. - Cross Environment |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 7233 | [D365 BASIC - Master Data Mgt.](../objects/permissionsetextension/7233.md) |  |
| 7234 | [D365 BASIC ISV - Master Data Mgt.](../objects/permissionsetextension/7234.md) |  |
| 7235 | [D365 BUS FULL ACCESS - Master Data Mgt.](../objects/permissionsetextension/7235.md) |  |
| 7236 | [D365 BUS PREMIUM - Master Data Mgt.](../objects/permissionsetextension/7236.md) |  |
| 7237 | [D365 FULL ACCESS - Master Data Mgt.](../objects/permissionsetextension/7237.md) |  |
| 7238 | [D365 READ - Master Data Mgt.](../objects/permissionsetextension/7238.md) |  |
| 7239 | [INTELLIGENT CLOUD - Master Data Mgt.](../objects/permissionsetextension/7239.md) |  |
| 7240 | [D365 TEAM MEMBER - Master Data Mgt.](../objects/permissionsetextension/7240.md) |  |

## Videos and posts

Videos and posts that name this app's objects by exact type and name.

- [Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)](../videos/BlkW7VC52c0.md) (video, 2025-10-06): names Page 7230 "Master Data Management Setup"

Source: [src/Apps/W1/MasterDataManagement/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/MasterDataManagement/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
