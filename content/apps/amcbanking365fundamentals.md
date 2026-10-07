---
id: app/amcbanking365fundamentals
type: app
title: AMCBanking365Fundamentals
summary: "AMCBanking365Fundamentals (Microsoft.Bank): 56 objects in BC29-30 (20 codeunits, 9 permission set extensions, 7 pages, 6 table extensions, 5 page extensions, ...); documented by 3 Learn hubs."
tier: official
language: en
tags:
  - first-party app
  - finance
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2ff626214e349c7c2b43a0026b09147fbb41b0e506f1677bbc850b82bc9bb8cb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/AMCBanking365Fundamentals/app
    title: src/Apps/W1/AMCBanking365Fundamentals/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/20100
    - object/table/20101
    - object/table/20102
    - object/tableextension/20103
    - object/tableextension/20104
    - object/tableextension/20105
    - object/tableextension/20106
    - object/tableextension/20107
    - object/tableextension/20108
    - object/page/20100
    - object/page/20101
    - object/page/20102
    - object/page/20105
    - object/page/20106
    - object/page/20107
    - object/page/20109
    - object/pageextension/20103
    - object/pageextension/20104
    - object/pageextension/20108
    - object/pageextension/20110
    - object/pageextension/20111
    - object/codeunit/20105
    - object/codeunit/20106
    - object/codeunit/20107
    - object/codeunit/20109
    - object/codeunit/20111
    - object/codeunit/20112
    - object/codeunit/20113
    - object/codeunit/20114
    - object/codeunit/20115
    - object/codeunit/20116
    - object/codeunit/20117
    - object/codeunit/20118
    - object/codeunit/20119
    - object/codeunit/20120
    - object/codeunit/20124
    - object/codeunit/20125
    - object/codeunit/20126
    - object/codeunit/20127
    - object/codeunit/20128
    - object/codeunit/20129
    - object/xmlport/20101
    - object/enum/20100
    - object/enum/20101
    - object/permissionset/20109
    - object/permissionset/20111
    - object/permissionset/20114
    - object/permissionsetextension/20100
    - object/permissionsetextension/20101
    - object/permissionsetextension/20102
    - object/permissionsetextension/20103
    - object/permissionsetextension/20104
    - object/permissionsetextension/20105
    - object/permissionsetextension/20106
    - object/permissionsetextension/20107
    - object/permissionsetextension/20108
  features: []
  topics:
    - topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically/collect-payments-with-sepa-direct-debit
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
    - topic/business-central/business-functionality/set-up-business-central/set-up-banking
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: AMCBanking365Fundamentals
namespace_root: Microsoft.Bank
present_in:
  - "29"
  - "30"
counts:
  objects: 56
  by_type:
    codeunit: 20
    permissionsetextension: 9
    page: 7
    tableextension: 6
    pageextension: 5
    table: 3
    permissionset: 3
    enum: 2
    xmlport: 1
  hubs: 3
  videos: 0
  posts: 0
---

# AMCBanking365Fundamentals

> AMCBanking365Fundamentals (Microsoft.Bank): 56 objects in BC29-30 (20 codeunits, 9 permission set extensions, 7 pages, 6 table extensions, 5 page extensions, ...); documented by 3 Learn hubs.

First-party app · folder `src/Apps/W1/AMCBanking365Fundamentals/app` · namespace `Microsoft.Bank` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Collect payments with SEPA direct debit](../topics/business-central/business-functionality/general-business-functionality/exchange-data-electronically/collect-payments-with-sepa-direct-debit.md) (Business functionality > General business functionality > Exchange data electronically): 10 objects
- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 10 objects
- [Set up banking](../topics/business-central/business-functionality/set-up-business-central/set-up-banking.md) (Business functionality > Set up Business Central): 10 objects

## Objects

56 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 20100 | [AMC Bank Banks](../objects/table/20100.md) | AMC Banking Banks |
| 20101 | [AMC Banking Setup](../objects/table/20101.md) |  |
| 20102 | [AMC Bank Pmt. Type](../objects/table/20102.md) | AMC Banking Payment types |

### Table extensions (6)

| Id | Name | Caption |
|---|---|---|
| 20103 | [AMC Bank Bank Account ext.](../objects/tableextension/20103.md) |  |
| 20104 | [AMC Bank Paym. Method Ext](../objects/tableextension/20104.md) |  |
| 20105 | [AMC Bank Credit Trs. Entry Ext](../objects/tableextension/20105.md) |  |
| 20106 | [AMC Bank Activity Log ext.](../objects/tableextension/20106.md) |  |
| 20107 | [AMC Bank Credit Trs. Reg. Ext](../objects/tableextension/20107.md) |  |
| 20108 | [AMC Bank Paym. Exp. Data Ext](../objects/tableextension/20108.md) |  |

### Pages (7)

| Id | Name | Caption |
|---|---|---|
| 20100 | [AMC Bank Bank Name List](../objects/page/20100.md) | AMC Banking Bank Name List |
| 20101 | [AMC Banking Setup](../objects/page/20101.md) |  |
| 20102 | [AMC Bank Pmt. Types](../objects/page/20102.md) | AMC Banking Payment Types |
| 20105 | [AMC Bank Assisted Setup](../objects/page/20105.md) | AMC Banking 365 Fundamentals Assisted Setup |
| 20106 | [AMC Bank Assist Bank Account](../objects/page/20106.md) |  |
| 20107 | [AMC Bank Webcall Log](../objects/page/20107.md) | AMC Banking 365 Webservice Log |
| 20109 | [AMC Bank Signup to Service](../objects/page/20109.md) | AMC Banking Signup webservice |

### Page extensions (5)

| Id | Name | Caption |
|---|---|---|
| 20103 | [AMC Bank Bank Account Card](../objects/pageextension/20103.md) |  |
| 20104 | [AMC Bank Paym. Meth. Page Ext](../objects/pageextension/20104.md) |  |
| 20108 | [AMC Bank Credit Trf. Reg. Ext](../objects/pageextension/20108.md) |  |
| 20110 | [AMC Bank Stmt Line Det. Ext](../objects/pageextension/20110.md) |  |
| 20111 | [AMC Bank Bank Account Page Ext](../objects/pageextension/20111.md) |  |

### Codeunits (20)

| Id | Name | Caption |
|---|---|---|
| 20105 | [AMC Banking Mgt.](../objects/codeunit/20105.md) |  |
| 20106 | [AMC Bank Exp. CT Launcher](../objects/codeunit/20106.md) |  |
| 20107 | [AMC Bank Exp. CT Valid.](../objects/codeunit/20107.md) |  |
| 20109 | [AMC Bank Upg. Notification](../objects/codeunit/20109.md) |  |
| 20111 | [AMC Bank Exp. CT Feedback](../objects/codeunit/20111.md) |  |
| 20112 | [AMC Bank Exp. CT Pre-Map](../objects/codeunit/20112.md) |  |
| 20113 | [AMC Bank Exp. CT Hndl](../objects/codeunit/20113.md) |  |
| 20114 | [AMC Bank Imp.STMT. Hndl](../objects/codeunit/20114.md) |  |
| 20115 | [AMC Bank Imp.BankList Hndl](../objects/codeunit/20115.md) |  |
| 20116 | [AMC Bank Install](../objects/codeunit/20116.md) |  |
| 20117 | [AMC Bank Assisted Mgt.](../objects/codeunit/20117.md) |  |
| 20118 | [AMC Bank Service Request Mgt.](../objects/codeunit/20118.md) |  |
| 20119 | [AMC Bank Upgrade](../objects/codeunit/20119.md) |  |
| 20120 | [AMC Bank Exp. CT Write](../objects/codeunit/20120.md) |  |
| 20124 | [AMC Bank REST Request Mgt.](../objects/codeunit/20124.md) |  |
| 20125 | [AMC Bank Import Statement](../objects/codeunit/20125.md) |  |
| 20126 | [AMC Bank Process Statement](../objects/codeunit/20126.md) |  |
| 20127 | [AMC Bank Imp.-Pre-Process](../objects/codeunit/20127.md) |  |
| 20128 | [AMC Bank Imp.-Post-Process](../objects/codeunit/20128.md) |  |
| 20129 | [AMC Bank PrePost Proc](../objects/codeunit/20129.md) |  |

### XMLports (1)

| Id | Name | Caption |
|---|---|---|
| 20101 | [AMC Bank Export CT](../objects/xmlport/20101.md) | AMC Banking Export CreditTransfer |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 20100 | [AMCBankWebLogStatus](../objects/enum/20100.md) |  |
| 20101 | [AMCBankOwnreference](../objects/enum/20101.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 20109 | [AMC Banking- Objects](../objects/permissionset/20109.md) |  |
| 20111 | [AMC Banking - Edit](../objects/permissionset/20111.md) |  |
| 20114 | [AMC Banking - Read](../objects/permissionset/20114.md) |  |

### Permission set extensions (9)

| Id | Name | Caption |
|---|---|---|
| 20100 | [D365 BASIC - AMC](../objects/permissionsetextension/20100.md) |  |
| 20101 | [D365 BASIC ISV - AMC](../objects/permissionsetextension/20101.md) |  |
| 20102 | [D365 BUS FULL ACCESS - AMC](../objects/permissionsetextension/20102.md) |  |
| 20103 | [D365 BUS PREMIUM - AMC](../objects/permissionsetextension/20103.md) |  |
| 20104 | [D365 FULL ACCESS - AMC](../objects/permissionsetextension/20104.md) |  |
| 20105 | [D365 READ - AMC](../objects/permissionsetextension/20105.md) |  |
| 20106 | [D365 TEAM MEMBER - AMC](../objects/permissionsetextension/20106.md) |  |
| 20107 | [INTELLIGENT CLOUD - AMC](../objects/permissionsetextension/20107.md) |  |
| 20108 | [D365 BANKING - AMC](../objects/permissionsetextension/20108.md) |  |

Source: [src/Apps/W1/AMCBanking365Fundamentals/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/AMCBanking365Fundamentals/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
