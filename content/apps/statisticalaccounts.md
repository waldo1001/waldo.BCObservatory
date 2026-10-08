---
id: app/statisticalaccounts
type: app
title: StatisticalAccounts
summary: "StatisticalAccounts (Microsoft.Finance): 44 objects in BC29-30 (9 codeunits, 8 pages, 8 permission set extensions, 5 tables, 5 enum extensions, ...); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - finance
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 82d250483f8125baeedba715c07ed5778d16a9bc0c0735ff6fdafc05a3f0b08c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/StatisticalAccounts/app
    title: src/Apps/W1/StatisticalAccounts/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/2620
    - object/table/2630
    - object/table/2631
    - object/table/2632
    - object/table/2633
    - object/tableextension/2625
    - object/tableextension/2630
    - object/page/2623
    - object/page/2624
    - object/page/2629
    - object/page/2630
    - object/page/2631
    - object/page/2632
    - object/page/2633
    - object/page/2634
    - object/pageextension/2620
    - object/pageextension/2625
    - object/pageextension/2626
    - object/codeunit/2621
    - object/codeunit/2622
    - object/codeunit/2623
    - object/codeunit/2624
    - object/codeunit/2625
    - object/codeunit/2626
    - object/codeunit/2627
    - object/codeunit/2630
    - object/codeunit/2632
    - object/enumextension/2620
    - object/enumextension/2622
    - object/enumextension/2625
    - object/enumextension/2630
    - object/enumextension/2632
    - object/permissionset/2625
    - object/permissionset/2626
    - object/permissionset/2627
    - object/permissionset/2628
    - object/permissionsetextension/2163
    - object/permissionsetextension/2165
    - object/permissionsetextension/2627
    - object/permissionsetextension/2629
    - object/permissionsetextension/2630
    - object/permissionsetextension/2631
    - object/permissionsetextension/2632
    - object/permissionsetextension/2633
  features: []
  topics:
    - topic/business-central/business-functionality/finance/financial-analytics/financial-reporting
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: StatisticalAccounts
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 44
  by_type:
    codeunit: 9
    page: 8
    permissionsetextension: 8
    table: 5
    enumextension: 5
    permissionset: 4
    pageextension: 3
    tableextension: 2
  hubs: 1
  videos: 0
  posts: 0
---

# StatisticalAccounts

> StatisticalAccounts (Microsoft.Finance): 44 objects in BC29-30 (9 codeunits, 8 pages, 8 permission set extensions, 5 tables, 5 enum extensions, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/StatisticalAccounts/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Financial reporting](../topics/business-central/business-functionality/finance/financial-analytics/financial-reporting.md) (Business functionality > Finance > Financial analytics): 8 objects

## Objects

44 objects, by type.

### Tables (5)

| Id | Name | Caption |
|---|---|---|
| 2620 | [Stat. Acc. Balance Buffer](../objects/table/2620.md) | Statistical Account Balance |
| 2630 | [Statistical Acc. Journal Batch](../objects/table/2630.md) | Statistical Account Journal Batch |
| 2631 | [Statistical Acc. Journal Line](../objects/table/2631.md) | Statistical Account Journal |
| 2632 | [Statistical Account](../objects/table/2632.md) |  |
| 2633 | [Statistical Ledger Entry](../objects/table/2633.md) |  |

### Table extensions (2)

| Id | Name | Caption |
|---|---|---|
| 2625 | [StatAccAnalysisView](../objects/tableextension/2625.md) |  |
| 2630 | [StatAccSourceCodeSetup](../objects/tableextension/2630.md) |  |

### Pages (8)

| Id | Name | Caption |
|---|---|---|
| 2623 | [Stat. Account Balance](../objects/page/2623.md) | Statistical Account Balance |
| 2624 | [Stat. Account Balance Lines](../objects/page/2624.md) | Lines |
| 2629 | [Stat. Acc. Reverse Entries](../objects/page/2629.md) | Reverse Entries |
| 2630 | [Statistical Acc. Journal Batch](../objects/page/2630.md) | Statistical Account Journal Batch |
| 2631 | [Statistical Account Card](../objects/page/2631.md) | Statistical account |
| 2632 | [Statistical Account List](../objects/page/2632.md) | Statistical Accounts |
| 2633 | [Statistical Accounts Journal](../objects/page/2633.md) | Statistical Account Journal |
| 2634 | [Statistical Ledger Entry List](../objects/page/2634.md) | Statistical Account Ledger Entries |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 2620 | [Stat. Acc. BC Role Center](../objects/pageextension/2620.md) |  |
| 2625 | [StatAccAnalysisView](../objects/pageextension/2625.md) |  |
| 2626 | [Stat. Acc. Analysis By Dim.](../objects/pageextension/2626.md) |  |

### Codeunits (9)

| Id | Name | Caption |
|---|---|---|
| 2621 | [Stat. Acc. Analysis View Mgt.](../objects/codeunit/2621.md) |  |
| 2622 | [Stat. Acc. Fin Reporting Mgt](../objects/codeunit/2622.md) |  |
| 2623 | [Stat. Acc. Jnl Check Line](../objects/codeunit/2623.md) |  |
| 2624 | [Stat. Acc. Jnl. Line Post](../objects/codeunit/2624.md) |  |
| 2625 | [Stat. Acc. Demo Data](../objects/codeunit/2625.md) |  |
| 2626 | [Stat. Acc. Post. Batch](../objects/codeunit/2626.md) |  |
| 2627 | [Stat. Acc. Telemetry](../objects/codeunit/2627.md) |  |
| 2630 | [Stat. Acc. Reverse Entry](../objects/codeunit/2630.md) |  |
| 2632 | [Stat. Acc. Allocation Account](../objects/codeunit/2632.md) |  |

### Enum extensions (5)

| Id | Name | Caption |
|---|---|---|
| 2620 | [Stat Acc Analysis Dim. Option](../objects/enumextension/2620.md) |  |
| 2622 | [Stat. Acc. Line Totaling Type](../objects/enumextension/2622.md) |  |
| 2625 | [Stat. Acc. Rev. Entry](../objects/enumextension/2625.md) |  |
| 2630 | [Stat. Analys. Acc. Source](../objects/enumextension/2630.md) |  |
| 2632 | [StatAccBreakdownAccount](../objects/enumextension/2632.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 2625 | [Statistical Accounts - Edit](../objects/permissionset/2625.md) | Statistical Accounts - View |
| 2626 | [Statistical Accounts - Objects](../objects/permissionset/2626.md) |  |
| 2627 | [Statistical Accounts - Read](../objects/permissionset/2627.md) |  |
| 2628 | [Statistical Accounts](../objects/permissionset/2628.md) |  |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 2163 | [D365 BUS PREMIUM - Statistical Accounts](../objects/permissionsetextension/2163.md) |  |
| 2165 | [D365 READ - Statistical Accounts](../objects/permissionsetextension/2165.md) |  |
| 2627 | [INTELLIGENT CLOUD - Statistical Account](../objects/permissionsetextension/2627.md) |  |
| 2629 | [D365 BASIC - Statistical Accounts](../objects/permissionsetextension/2629.md) |  |
| 2630 | [D365 BASIC ISV - Statistical Accounts](../objects/permissionsetextension/2630.md) |  |
| 2631 | [D365 BUS FULL ACCESS - Statistical Accounts](../objects/permissionsetextension/2631.md) |  |
| 2632 | [D365 FULL ACCESS - Statistical Accounts](../objects/permissionsetextension/2632.md) |  |
| 2633 | [D365 TEAM MEMBER - Statistical Accounts](../objects/permissionsetextension/2633.md) |  |

Source: [src/Apps/W1/StatisticalAccounts/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/StatisticalAccounts/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
