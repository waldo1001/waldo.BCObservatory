---
id: app/latepaymentpredictor
type: app
title: LatePaymentPredictor
summary: "LatePaymentPredictor (Microsoft.Finance): 31 objects in BC29-30 (8 codeunits, 6 page extensions, 6 permission set extensions, 3 pages, 3 permission sets, ...); documented by 3 Learn hubs."
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
  input_hash: efd837eb6c6658f6ae8c843ef89c04f357a1863e3529ef24ec195c5386293aba
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/LatePaymentPredictor/app
    title: src/Apps/W1/LatePaymentPredictor/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1950
    - object/table/1951
    - object/tableextension/1952
    - object/tableextension/1959
    - object/page/1950
    - object/page/1951
    - object/page/1954
    - object/pageextension/1953
    - object/pageextension/1955
    - object/pageextension/1956
    - object/pageextension/1957
    - object/pageextension/1958
    - object/pageextension/1959
    - object/codeunit/1950
    - object/codeunit/1951
    - object/codeunit/1952
    - object/codeunit/1954
    - object/codeunit/1955
    - object/codeunit/1956
    - object/codeunit/1957
    - object/codeunit/1958
    - object/query/1950
    - object/permissionset/8310
    - object/permissionset/8311
    - object/permissionset/8312
    - object/permissionsetextension/3216
    - object/permissionsetextension/3503
    - object/permissionsetextension/8309
    - object/permissionsetextension/26131
    - object/permissionsetextension/28676
    - object/permissionsetextension/38237
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
    - topic/business-central/business-functionality/finance/manage-payables
    - topic/business-central/business-functionality/finance/manage-receivables
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: LatePaymentPredictor
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 31
  by_type:
    codeunit: 8
    pageextension: 6
    permissionsetextension: 6
    page: 3
    permissionset: 3
    table: 2
    tableextension: 2
    query: 1
  hubs: 3
  videos: 0
  posts: 0
---

# LatePaymentPredictor

> LatePaymentPredictor (Microsoft.Finance): 31 objects in BC29-30 (8 codeunits, 6 page extensions, 6 permission set extensions, 3 pages, 3 permission sets, ...); documented by 3 Learn hubs.

First-party app · folder `src/Apps/W1/LatePaymentPredictor/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 3 objects
- [Manage payables](../topics/business-central/business-functionality/finance/manage-payables.md) (Business functionality > Finance): 3 objects
- [Manage receivables](../topics/business-central/business-functionality/finance/manage-receivables.md) (Business functionality > Finance): 3 objects

## Objects

31 objects, by type.

### Tables (2)

| Id | Name | Caption |
|---|---|---|
| 1950 | [LP Machine Learning Setup](../objects/table/1950.md) |  |
| 1951 | [LP ML Input Data](../objects/table/1951.md) |  |

### Table extensions (2)

| Id | Name | Caption |
|---|---|---|
| 1952 | [CustomerLedgerEntryLPP](../objects/tableextension/1952.md) |  |
| 1959 | [LPP Sales Header](../objects/tableextension/1959.md) |  |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 1950 | [LP Machine Learning Setup](../objects/page/1950.md) | Late Payment Prediction Setup |
| 1951 | [LP Prediction FactBox](../objects/page/1951.md) |  |
| 1954 | [LP - Invoices at Risk](../objects/page/1954.md) | Overdue invoices |

### Page extensions (6)

| Id | Name | Caption |
|---|---|---|
| 1953 | [LP - Overdue Customers Ext.](../objects/pageextension/1953.md) |  |
| 1955 | [LPP Sales Quote](../objects/pageextension/1955.md) |  |
| 1956 | [LPP Sales Order](../objects/pageextension/1956.md) |  |
| 1957 | [LPP Sales Invoice](../objects/pageextension/1957.md) |  |
| 1958 | [LPP Customer Ledger Entries](../objects/pageextension/1958.md) |  |
| 1959 | [LP Activities](../objects/pageextension/1959.md) |  |

### Codeunits (8)

| Id | Name | Caption |
|---|---|---|
| 1950 | [LP Prediction Mgt.](../objects/codeunit/1950.md) |  |
| 1951 | [LP Model Management](../objects/codeunit/1951.md) |  |
| 1952 | [LP Subscribers](../objects/codeunit/1952.md) |  |
| 1954 | [LP Feature Table Helper](../objects/codeunit/1954.md) |  |
| 1955 | [Late Payment Install](../objects/codeunit/1955.md) |  |
| 1956 | [LPP Scheduler](../objects/codeunit/1956.md) |  |
| 1957 | [LPP Update](../objects/codeunit/1957.md) |  |
| 1958 | [Late Payment Upgrade](../objects/codeunit/1958.md) |  |

### Queries (1)

| Id | Name | Caption |
|---|---|---|
| 1950 | [LPP Sales Invoice Header Input](../objects/query/1950.md) | Late Payment Model Input |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 8310 | [LatePayment - Edit](../objects/permissionset/8310.md) | LatePaymentPredictor - Edit |
| 8311 | [LatePayment - Objects](../objects/permissionset/8311.md) | LatePaymentPredictor - Objects |
| 8312 | [LatePayment - Read](../objects/permissionset/8312.md) | LatePaymentPredictor - Read |

### Permission set extensions (6)

| Id | Name | Caption |
|---|---|---|
| 3216 | [D365 BUS PREMIUM - Late Payment Prediction](../objects/permissionsetextension/3216.md) |  |
| 3503 | [D365 FULL ACCESS - Late Payment Prediction](../objects/permissionsetextension/3503.md) |  |
| 8309 | [INTELLIGENT CLOUD - Late Payment Prediction](../objects/permissionsetextension/8309.md) |  |
| 26131 | [D365 BASIC ISV - Late Payment Prediction](../objects/permissionsetextension/26131.md) |  |
| 28676 | [D365 BUS FULL ACCESS - Late Payment Prediction](../objects/permissionsetextension/28676.md) |  |
| 38237 | [D365 BASIC - Late Payment Prediction](../objects/permissionsetextension/38237.md) |  |

Source: [src/Apps/W1/LatePaymentPredictor/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/LatePaymentPredictor/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
