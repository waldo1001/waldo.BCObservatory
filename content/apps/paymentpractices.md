---
id: app/paymentpractices
type: app
title: PaymentPractices
summary: "PaymentPractices (Microsoft.Finance): 40 objects in BC29-30 (13 codeunits, 6 permission set extensions, 5 pages, 4 tables, 3 enums, ...); documented by 2 Learn hubs."
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
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 69736a985d480bf9f8303d8be40b21fff598394bc10fe7ca6acd110c9f6926fd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/PaymentPractices/app
    title: src/Apps/W1/PaymentPractices/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/685
    - object/table/686
    - object/table/687
    - object/table/688
    - object/tableextension/681
    - object/page/685
    - object/page/686
    - object/page/687
    - object/page/688
    - object/page/689
    - object/pageextension/681
    - object/report/685
    - object/codeunit/680
    - object/codeunit/681
    - object/codeunit/682
    - object/codeunit/683
    - object/codeunit/685
    - object/codeunit/686
    - object/codeunit/687
    - object/codeunit/688
    - object/codeunit/689
    - object/codeunit/690
    - object/codeunit/691
    - object/codeunit/692
    - object/codeunit/693
    - object/enum/680
    - object/enum/685
    - object/enum/686
    - object/interface/paymentpracticedatagenerator
    - object/interface/paymentpracticelinesaggregator
    - object/interface/paymentpracticeschemehandler
    - object/permissionset/685
    - object/permissionset/686
    - object/permissionset/687
    - object/permissionsetextension/688
    - object/permissionsetextension/689
    - object/permissionsetextension/690
    - object/permissionsetextension/691
    - object/permissionsetextension/692
    - object/permissionsetextension/693
  features: []
  topics:
    - topic/business-central/business-functionality/finance/financial-analytics/built-in-finance-analysis-tools
    - topic/business-central/business-functionality/purchasing
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: PaymentPractices
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 40
  by_type:
    codeunit: 13
    permissionsetextension: 6
    page: 5
    table: 4
    enum: 3
    interface: 3
    permissionset: 3
    tableextension: 1
    pageextension: 1
    report: 1
  hubs: 2
  videos: 0
  posts: 0
---

# PaymentPractices

> PaymentPractices (Microsoft.Finance): 40 objects in BC29-30 (13 codeunits, 6 permission set extensions, 5 pages, 4 tables, 3 enums, ...); documented by 2 Learn hubs.

First-party app · folder `src/Apps/W1/PaymentPractices/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Built-in finance analysis tools](../topics/business-central/business-functionality/finance/financial-analytics/built-in-finance-analysis-tools.md) (Business functionality > Finance > Financial analytics): 5 objects
- [Purchasing](../topics/business-central/business-functionality/purchasing.md) (Business functionality): 5 objects

## Objects

40 objects, by type.

### Tables (4)

| Id | Name | Caption |
|---|---|---|
| 685 | [Payment Period](../objects/table/685.md) |  |
| 686 | [Payment Practice Data](../objects/table/686.md) |  |
| 687 | [Payment Practice Header](../objects/table/687.md) |  |
| 688 | [Payment Practice Line](../objects/table/688.md) |  |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 681 | [Paym. Prac. Vend. Ledg. Entry](../objects/tableextension/681.md) |  |

### Pages (5)

| Id | Name | Caption |
|---|---|---|
| 685 | [Payment Periods](../objects/page/685.md) |  |
| 686 | [Payment Practice Data List](../objects/page/686.md) |  |
| 687 | [Payment Practice Card](../objects/page/687.md) | Payment Practice |
| 688 | [Payment Practice Lines](../objects/page/688.md) | Lines |
| 689 | [Payment Practice List](../objects/page/689.md) | Payment Practices |

### Page extensions (1)

| Id | Name | Caption |
|---|---|---|
| 681 | [Paym. Prac. Vend. Ledg. Entr.](../objects/pageextension/681.md) |  |

### Reports (1)

| Id | Name | Caption |
|---|---|---|
| 685 | [Payment Practice](../objects/report/685.md) |  |

### Codeunits (13)

| Id | Name | Caption |
|---|---|---|
| 680 | [Paym. Prac. Standard Handler](../objects/codeunit/680.md) |  |
| 681 | [Paym. Prac. Dispute Ret. Hdlr](../objects/codeunit/681.md) |  |
| 682 | [Paym. Prac. Small Bus. Handler](../objects/codeunit/682.md) |  |
| 683 | [Upgrade Payment Practices](../objects/codeunit/683.md) |  |
| 685 | [Paym. Prac. Period Aggregator](../objects/codeunit/685.md) |  |
| 686 | [Paym. Prac. Size Aggregator](../objects/codeunit/686.md) |  |
| 687 | [Install Payment Practices](../objects/codeunit/687.md) |  |
| 688 | [Payment Practice Builders](../objects/codeunit/688.md) |  |
| 689 | [Payment Practices](../objects/codeunit/689.md) |  |
| 690 | [Paym. Prac. CV Generator](../objects/codeunit/690.md) |  |
| 691 | [Paym. Prac. Vendor Generator](../objects/codeunit/691.md) |  |
| 692 | [Paym. Prac. Cust. Generator](../objects/codeunit/692.md) |  |
| 693 | [Payment Practice Math](../objects/codeunit/693.md) |  |

### Enums (3)

| Id | Name | Caption |
|---|---|---|
| 680 | [Paym. Prac. Reporting Scheme](../objects/enum/680.md) |  |
| 685 | [Paym. Prac. Aggregation Type](../objects/enum/685.md) |  |
| 686 | [Paym. Prac. Header Type](../objects/enum/686.md) |  |

### Interfaces (3)

| Id | Name | Caption |
|---|---|---|
|  | [PaymentPracticeDataGenerator](../objects/interface/paymentpracticedatagenerator.md) |  |
|  | [PaymentPracticeLinesAggregator](../objects/interface/paymentpracticelinesaggregator.md) |  |
|  | [PaymentPracticeSchemeHandler](../objects/interface/paymentpracticeschemehandler.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 685 | [Paym. Prac. Objects](../objects/permissionset/685.md) |  |
| 686 | [Paym. Prac. Read](../objects/permissionset/686.md) |  |
| 687 | [Paym. Prac. Edit](../objects/permissionset/687.md) |  |

### Permission set extensions (6)

| Id | Name | Caption |
|---|---|---|
| 688 | [D365 BASIC ISV - Paym. Prac.](../objects/permissionsetextension/688.md) |  |
| 689 | [D365 BASIC - Paym. Prac.](../objects/permissionsetextension/689.md) |  |
| 690 | [D365 READ - Paym. Prac.](../objects/permissionsetextension/690.md) |  |
| 691 | [D365 TEAM MEMBER - Paym. Prac.](../objects/permissionsetextension/691.md) |  |
| 692 | [INTELLIGENT CLOUD - Paym. Prac.](../objects/permissionsetextension/692.md) |  |
| 693 | [LOCAL - Paym. Prac.](../objects/permissionsetextension/693.md) |  |

Source: [src/Apps/W1/PaymentPractices/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/PaymentPractices/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
