---
id: app/qbmigration
type: app
title: QBMigration
summary: "QBMigration: 41 objects in BC29-30 (13 codeunits, 9 pages, 8 tables, 8 permission set extensions, 3 permission sets); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - development
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2e8317a4549b0a6860aece5974d9a4068bb521bdac8e778ca2886d83be8f199a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/QBMigration/app
    title: src/Apps/W1/QBMigration/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1911
    - object/table/1912
    - object/table/1913
    - object/table/1914
    - object/table/1915
    - object/table/1916
    - object/table/1917
    - object/table/1918
    - object/page/1830
    - object/page/1911
    - object/page/1912
    - object/page/1913
    - object/page/1914
    - object/page/1915
    - object/page/1916
    - object/page/1918
    - object/page/1919
    - object/codeunit/1830
    - object/codeunit/1831
    - object/codeunit/1911
    - object/codeunit/1912
    - object/codeunit/1913
    - object/codeunit/1914
    - object/codeunit/1915
    - object/codeunit/1916
    - object/codeunit/1917
    - object/codeunit/1918
    - object/codeunit/1919
    - object/codeunit/1920
    - object/codeunit/1921
    - object/permissionset/27225
    - object/permissionset/27226
    - object/permissionset/27227
    - object/permissionsetextension/1632
    - object/permissionsetextension/3998
    - object/permissionsetextension/16491
    - object/permissionsetextension/20875
    - object/permissionsetextension/26134
    - object/permissionsetextension/27224
    - object/permissionsetextension/44603
    - object/permissionsetextension/46049
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: QBMigration
namespace_root: null
present_in:
  - "29"
  - "30"
counts:
  objects: 41
  by_type:
    codeunit: 13
    page: 9
    table: 8
    permissionsetextension: 8
    permissionset: 3
  hubs: 1
  videos: 0
  posts: 0
---

# QBMigration

> QBMigration: 41 objects in BC29-30 (13 codeunits, 9 pages, 8 tables, 8 permission set extensions, 3 permission sets); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/QBMigration/app` · BC29-30 · system development · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 16 objects

## Objects

41 objects, by type.

### Tables (8)

| Id | Name | Caption |
|---|---|---|
| 1911 | [MigrationQB Account](../objects/table/1911.md) |  |
| 1912 | [MigrationQB Customer](../objects/table/1912.md) |  |
| 1913 | [MigrationQB CustomerTrans](../objects/table/1913.md) |  |
| 1914 | [MigrationQB Vendor](../objects/table/1914.md) |  |
| 1915 | [MigrationQB VendorTrans](../objects/table/1915.md) |  |
| 1916 | [MigrationQB Item](../objects/table/1916.md) |  |
| 1917 | [MigrationQB Config](../objects/table/1917.md) |  |
| 1918 | [MigrationQB Account Setup](../objects/table/1918.md) |  |

### Pages (9)

| Id | Name | Caption |
|---|---|---|
| 1830 | [MS - QBO Data Migration](../objects/page/1830.md) | QuickBooks Online Migration Setup |
| 1911 | [MigrationQB AccountTable](../objects/page/1911.md) | Account Table |
| 1912 | [MigrationQB CustomerTable](../objects/page/1912.md) | Customer Table |
| 1913 | [MigrationQB CustomerTrans](../objects/page/1913.md) | Customer Transactions |
| 1914 | [MigrationQB VendorTable](../objects/page/1914.md) | Vendor Table |
| 1915 | [MigrationQB VendorTrans](../objects/page/1915.md) | Vendor Transactions |
| 1916 | [MigrationQB ItemTable](../objects/page/1916.md) | Item Table |
| 1918 | [MigrationQB Posting Accounts](../objects/page/1918.md) | Posting Accounts |
| 1919 | [MigrationQB Default Accounts](../objects/page/1919.md) | QuickBooks Migration Setup |

### Codeunits (13)

| Id | Name | Caption |
|---|---|---|
| 1830 | [MigrateQBO Wizard Integration](../objects/codeunit/1830.md) |  |
| 1831 | [MigrationQB Upgrade](../objects/codeunit/1831.md) |  |
| 1911 | [MigrationQB Account Migrator](../objects/codeunit/1911.md) |  |
| 1912 | [MigrationQB Customer Migrator](../objects/codeunit/1912.md) |  |
| 1913 | [MigrationQB Vendor Migrator](../objects/codeunit/1913.md) |  |
| 1914 | [MigrationQB Wizard Integration](../objects/codeunit/1914.md) |  |
| 1915 | [MigrationQB Dashboard Mgt](../objects/codeunit/1915.md) |  |
| 1916 | [MigrationQB Mgt](../objects/codeunit/1916.md) |  |
| 1917 | [MigrationQB Helper Functions](../objects/codeunit/1917.md) |  |
| 1918 | [MigrationQB Data Loader](../objects/codeunit/1918.md) |  |
| 1919 | [MigrationQB Data Reader](../objects/codeunit/1919.md) |  |
| 1920 | [MigrationQB Item Migrator](../objects/codeunit/1920.md) |  |
| 1921 | [QB Migration Install](../objects/codeunit/1921.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 27225 | [QBMigration - Edit](../objects/permissionset/27225.md) | QB Migration - Edit |
| 27226 | [QBMigration - Objects](../objects/permissionset/27226.md) | QB Migration - Objects |
| 27227 | [QBMigration - Read](../objects/permissionset/27227.md) | QB Migration - Read |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 1632 | [D365 BASIC ISVQuickBooks Data Migration](../objects/permissionsetextension/1632.md) |  |
| 3998 | [D365 BUS FULL ACCESSQuickBooks Data Migration](../objects/permissionsetextension/3998.md) |  |
| 16491 | [D365 TEAM MEMBERQuickBooks Data Migration](../objects/permissionsetextension/16491.md) |  |
| 20875 | [D365 READQuickBooks Data Migration](../objects/permissionsetextension/20875.md) |  |
| 26134 | [D365 FULL ACCESSQuickBooks Data Migration](../objects/permissionsetextension/26134.md) |  |
| 27224 | [INTELLIGENT CLOUDQuickBooks Data Migration](../objects/permissionsetextension/27224.md) |  |
| 44603 | [D365 BUS PREMIUMQuickBooks Data Migration](../objects/permissionsetextension/44603.md) |  |
| 46049 | [D365 BASICQuickBooks Data Migration](../objects/permissionsetextension/46049.md) |  |

Source: [src/Apps/W1/QBMigration/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/QBMigration/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
