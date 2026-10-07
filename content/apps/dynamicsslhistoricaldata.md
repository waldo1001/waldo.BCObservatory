---
id: app/dynamicsslhistoricaldata
type: app
title: DynamicsSLHistoricalData
summary: "DynamicsSLHistoricalData (Microsoft.DataMigration): 69 objects in BC29-30 (34 tables, 17 queries, 8 page extensions, 5 pages, 2 permission set extensions, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - administration
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bc67a42f93efe4ec3f03fc0eab41591be60415e871a51c105b2fb82352959db1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/DynamicsSLHistoricalData/app
    title: src/Apps/W1/DynamicsSLHistoricalData/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/42800
    - object/table/42801
    - object/table/42802
    - object/table/42803
    - object/table/42804
    - object/table/42805
    - object/table/42806
    - object/table/42807
    - object/table/42808
    - object/table/42809
    - object/table/42810
    - object/table/42811
    - object/table/42812
    - object/table/42813
    - object/table/42814
    - object/table/42815
    - object/table/42816
    - object/table/42817
    - object/table/42818
    - object/table/42819
    - object/table/42820
    - object/table/42821
    - object/table/42822
    - object/table/42823
    - object/table/42824
    - object/table/42825
    - object/table/42826
    - object/table/42827
    - object/table/42828
    - object/table/42829
    - object/table/42830
    - object/table/42831
    - object/table/42832
    - object/table/42833
    - object/page/42800
    - object/page/42801
    - object/page/42802
    - object/page/42803
    - object/page/42804
    - object/pageextension/42800
    - object/pageextension/42801
    - object/pageextension/42802
    - object/pageextension/42803
    - object/pageextension/42804
    - object/pageextension/42805
    - object/pageextension/42806
    - object/pageextension/42807
    - object/codeunit/42800
    - object/query/42800
    - object/query/42801
    - object/query/42802
    - object/query/42803
    - object/query/42804
    - object/query/42805
    - object/query/42806
    - object/query/42807
    - object/query/42808
    - object/query/42809
    - object/query/42810
    - object/query/42811
    - object/query/42812
    - object/query/42813
    - object/query/42814
    - object/query/42815
    - object/query/42816
    - object/enum/42800
    - object/permissionset/42801
    - object/permissionsetextension/42800
    - object/permissionsetextension/42801
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: DynamicsSLHistoricalData
namespace_root: Microsoft.DataMigration
present_in:
  - "29"
  - "30"
counts:
  objects: 69
  by_type:
    table: 34
    query: 17
    pageextension: 8
    page: 5
    permissionsetextension: 2
    codeunit: 1
    enum: 1
    permissionset: 1
  hubs: 0
  videos: 0
  posts: 0
---

# DynamicsSLHistoricalData

> DynamicsSLHistoricalData (Microsoft.DataMigration): 69 objects in BC29-30 (34 tables, 17 queries, 8 page extensions, 5 pages, 2 permission set extensions, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/DynamicsSLHistoricalData/app` · namespace `Microsoft.DataMigration` · BC29-30 · system administration · facts from the code pillar and the joins, nothing machine-written

## Objects

69 objects, by type.

### Tables (34)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL Hist. APAdjust](../objects/table/42800.md) |  |
| 42801 | [SL Hist. APDoc](../objects/table/42801.md) |  |
| 42802 | [SL Hist. APTran](../objects/table/42802.md) |  |
| 42803 | [SL Hist. ARAdjust](../objects/table/42803.md) |  |
| 42804 | [SL Hist. ARDoc](../objects/table/42804.md) |  |
| 42805 | [SL Hist. ARTran](../objects/table/42805.md) |  |
| 42806 | [SL Hist. Batch](../objects/table/42806.md) |  |
| 42807 | [SL Hist. LotSerT](../objects/table/42807.md) |  |
| 42808 | [SL Hist. INTran](../objects/table/42808.md) |  |
| 42809 | [SL Hist. POReceipt](../objects/table/42809.md) |  |
| 42810 | [SL Hist. POTran](../objects/table/42810.md) |  |
| 42811 | [SL Hist. PurchOrd](../objects/table/42811.md) |  |
| 42812 | [SL Hist. PurOrdDet](../objects/table/42812.md) |  |
| 42813 | [SL Hist. SOHeader](../objects/table/42813.md) |  |
| 42814 | [SL Hist. SOLine](../objects/table/42814.md) |  |
| 42815 | [SL Hist. SOShipHeader](../objects/table/42815.md) |  |
| 42816 | [SL Hist. SOShipLine](../objects/table/42816.md) |  |
| 42817 | [SL Hist. SOShipLot](../objects/table/42817.md) |  |
| 42818 | [SL Hist. SOType](../objects/table/42818.md) |  |
| 42819 | [SL Hist. GLTran](../objects/table/42819.md) |  |
| 42820 | [SL Hist. Migration Step Status](../objects/table/42820.md) |  |
| 42821 | [SL Hist. Migration Cur. Status](../objects/table/42821.md) |  |
| 42822 | [SL Hist. GLSetup](../objects/table/42822.md) |  |
| 42823 | [SL Hist. GLTran Archive](../objects/table/42823.md) |  |
| 42824 | [SL Hist. APTran Archive](../objects/table/42824.md) |  |
| 42825 | [SL Hist. ARTran Archive](../objects/table/42825.md) |  |
| 42826 | [SL Hist. APDoc Archive](../objects/table/42826.md) |  |
| 42827 | [SL Hist. ARDoc Archive](../objects/table/42827.md) |  |
| 42828 | [SL Hist. INTran Archive](../objects/table/42828.md) |  |
| 42829 | [SL Hist. LotSerT Archive](../objects/table/42829.md) |  |
| 42830 | [SL Hist. PJTran](../objects/table/42830.md) |  |
| 42831 | [SL Hist. PJTranEx](../objects/table/42831.md) |  |
| 42832 | [SL Hist. PJProj](../objects/table/42832.md) |  |
| 42833 | [SL Hist. PJEmploy](../objects/table/42833.md) |  |

### Pages (5)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL Hist. GLTran Entries](../objects/page/42800.md) | SL Historical Journal Transaction Entries |
| 42801 | [SL Hist. ARTran Entries](../objects/page/42801.md) | SL Historical Accounts Receivable Transaction Entries |
| 42802 | [SL Hist. APTran Entries](../objects/page/42802.md) | SL Historical Accounts Payable Transaction Entries |
| 42803 | [SL Hist. Batch Entries](../objects/page/42803.md) | SL Historical Batch Entries |
| 42804 | [SL Hist. PJTran Entries](../objects/page/42804.md) | SL Historical Project Transaction Entries |

### Page extensions (8)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL Hist. G/L Account Card](../objects/pageextension/42800.md) |  |
| 42801 | [SL Hist. Chart of Accounts](../objects/pageextension/42801.md) |  |
| 42802 | [SL Hist. Customer List](../objects/pageextension/42802.md) |  |
| 42803 | [SL Hist. Customer Card](../objects/pageextension/42803.md) |  |
| 42804 | [SL Hist. Vendor List](../objects/pageextension/42804.md) |  |
| 42805 | [SL Hist. Vendor Card](../objects/pageextension/42805.md) |  |
| 42806 | [SL Hist. Project List](../objects/pageextension/42806.md) |  |
| 42807 | [SL Hist. Project Card](../objects/pageextension/42807.md) |  |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL Hist. Migration Status Mgmt](../objects/codeunit/42800.md) |  |

### Queries (17)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL Hist. Shippers](../objects/query/42800.md) | Dynamics SL Shippers |
| 42801 | [SL Hist. InventoryTransactions](../objects/query/42801.md) | Dynamics SL Inventory Transactions |
| 42802 | [SL Hist. OpenARDocuments](../objects/query/42802.md) | Dynamics SL Open Accounts Receivable Documents |
| 42803 | [SL Hist. APDocuments](../objects/query/42803.md) | Dynamics SL Accounts Payable Documents |
| 42804 | [SL Hist. ARDocuments](../objects/query/42804.md) | Dynamics SL Accounts Receivable Documents |
| 42805 | [SL Hist. POReceiptLineItems](../objects/query/42805.md) | Dynamics SL Purchase Order Receipt Line Items |
| 42806 | [SL Hist. POReceiptDocuments](../objects/query/42806.md) | Dynamics SL Purchase Order Receipt Documents |
| 42807 | [SL Hist. ARInvoiceDocuments](../objects/query/42807.md) | Dynamics SL AR Invoice Documents |
| 42808 | [SL Hist. SalesOrderLineItems](../objects/query/42808.md) | Dynamics SL Sales Order Line Items |
| 42809 | [SL Hist. SalesOrders](../objects/query/42809.md) | Dynamics SL Sales Orders |
| 42810 | [SL Hist. SalesOrderQuotes](../objects/query/42810.md) | Dynamics SL Sales Order Quotes |
| 42811 | [SL Hist. SalesOrderReturns](../objects/query/42811.md) | Dynamics SL Sales Order Returns |
| 42812 | [SL Hist. ShipperLineItems](../objects/query/42812.md) | Dynamics SL Shipper Line Items |
| 42813 | [SL Hist. ARTransactions](../objects/query/42813.md) | Dynamics SL Accounts Receivable Transactions |
| 42814 | [SL Hist. APTransactions](../objects/query/42814.md) | Dynamics SL Accounts Payable Transactions |
| 42815 | [SL Hist. GLTransactions](../objects/query/42815.md) | Dynamics SL General Ledger Transactions |
| 42816 | [SL Hist. Batch](../objects/query/42816.md) | Dynamics SL Batches |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL Hist. Migration Step Type](../objects/enum/42800.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 42801 | [SL Historical Querys](../objects/permissionset/42801.md) | SL Historical Transactions |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 42800 | [SL D365 Basic Ext.](../objects/permissionsetextension/42800.md) |  |
| 42801 | [SL D365 Full Access Ext.](../objects/permissionsetextension/42801.md) |  |

Source: [src/Apps/W1/DynamicsSLHistoricalData/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/DynamicsSLHistoricalData/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
