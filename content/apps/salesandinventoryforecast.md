---
id: app/salesandinventoryforecast
type: app
title: SalesAndInventoryForecast
summary: "SalesAndInventoryForecast (Microsoft.Inventory): 29 objects in BC29-30 (8 permission set extensions, 6 codeunits, 4 page extensions, 3 tables, 3 pages, ...); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - inventory
system: inventory
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5dbf7d0c1148c9048f71bfa753d2709d7d59332d53c119402cad9b695996f294
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/SalesAndInventoryForecast/app
    title: src/Apps/W1/SalesAndInventoryForecast/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1850
    - object/table/1851
    - object/table/1853
    - object/tableextension/1854
    - object/page/1850
    - object/page/1851
    - object/page/1853
    - object/pageextension/1854
    - object/pageextension/1855
    - object/pageextension/1856
    - object/pageextension/1857
    - object/codeunit/1850
    - object/codeunit/1851
    - object/codeunit/1852
    - object/codeunit/1853
    - object/codeunit/1854
    - object/codeunit/1855
    - object/query/1850
    - object/permissionset/48057
    - object/permissionset/48058
    - object/permissionset/48059
    - object/permissionsetextension/4668
    - object/permissionsetextension/6323
    - object/permissionsetextension/16230
    - object/permissionsetextension/28528
    - object/permissionsetextension/32397
    - object/permissionsetextension/44824
    - object/permissionsetextension/46656
    - object/permissionsetextension/48056
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SalesAndInventoryForecast
namespace_root: Microsoft.Inventory
present_in:
  - "29"
  - "30"
counts:
  objects: 29
  by_type:
    permissionsetextension: 8
    codeunit: 6
    pageextension: 4
    table: 3
    page: 3
    permissionset: 3
    tableextension: 1
    query: 1
  hubs: 1
  videos: 0
  posts: 0
---

# SalesAndInventoryForecast

> SalesAndInventoryForecast (Microsoft.Inventory): 29 objects in BC29-30 (8 permission set extensions, 6 codeunits, 4 page extensions, 3 tables, 3 pages, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/SalesAndInventoryForecast/app` · namespace `Microsoft.Inventory` · BC29-30 · system inventory · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 4 objects

## Objects

29 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 1850 | [MS - Sales Forecast](../objects/table/1850.md) |  |
| 1851 | [MS - Sales Forecast Parameter](../objects/table/1851.md) |  |
| 1853 | [MS - Sales Forecast Setup](../objects/table/1853.md) |  |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 1854 | [ItemForecastExtension](../objects/tableextension/1854.md) |  |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 1850 | [Sales Forecast](../objects/page/1850.md) | Forecast |
| 1851 | [Sales Forecast No Chart](../objects/page/1851.md) | Forecast |
| 1853 | [Sales Forecast Setup Card](../objects/page/1853.md) | Sales and Inventory Forecast Setup |

### Page extensions (4)

| Id | Name | Caption |
|---|---|---|
| 1854 | [ItemCardForecastExtension](../objects/pageextension/1854.md) |  |
| 1855 | [ItemListForecastExtension](../objects/pageextension/1855.md) |  |
| 1856 | [PurchaseOrderForecastExtension](../objects/pageextension/1856.md) |  |
| 1857 | [PurchaseInvoiceForecastExt](../objects/pageextension/1857.md) |  |

### Codeunits (6)

| Id | Name | Caption |
|---|---|---|
| 1850 | [Sales Forecast Handler](../objects/codeunit/1850.md) |  |
| 1851 | [Sales Forecast Upgrade](../objects/codeunit/1851.md) |  |
| 1852 | [Sales Forecast Scheduler](../objects/codeunit/1852.md) |  |
| 1853 | [Sales Forecast Update](../objects/codeunit/1853.md) |  |
| 1854 | [Sales Forecast Notifier](../objects/codeunit/1854.md) |  |
| 1855 | [Sales Forecast Install](../objects/codeunit/1855.md) |  |

### Queries (1)

| Id | Name | Caption |
|---|---|---|
| 1850 | [Sales Forecast Query](../objects/query/1850.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 48057 | [SalesForecast - Edit](../objects/permissionset/48057.md) | SalesAndInventoryForecast - Edit |
| 48058 | [SalesForecast - Objects](../objects/permissionset/48058.md) | SalesAndInventoryForecast - Objects |
| 48059 | [SalesForecast - Read](../objects/permissionset/48059.md) | SalesAndInventoryForecast - Read |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 4668 | [D365 BASIC - Sales and Inventory Forecast](../objects/permissionsetextension/4668.md) |  |
| 6323 | [D365 FULL ACCESS - Sales and Inventory Forecast](../objects/permissionsetextension/6323.md) |  |
| 16230 | [D365 BUS PREMIUM - Sales and Inventory Forecast](../objects/permissionsetextension/16230.md) |  |
| 28528 | [D365 TEAM MEMBER - Sales and Inventory Forecast](../objects/permissionsetextension/28528.md) |  |
| 32397 | [D365 READ - Sales and Inventory Forecast](../objects/permissionsetextension/32397.md) |  |
| 44824 | [D365 BUS FULL ACCESS - Sales and Inventory Forecast](../objects/permissionsetextension/44824.md) |  |
| 46656 | [D365 BASIC ISV - Sales and Inventory Forecast](../objects/permissionsetextension/46656.md) |  |
| 48056 | [INTELLIGENT CLOUD - Sales and Inventory Forecast](../objects/permissionsetextension/48056.md) |  |

Source: [src/Apps/W1/SalesAndInventoryForecast/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/SalesAndInventoryForecast/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
