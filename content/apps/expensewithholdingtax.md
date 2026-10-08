---
id: app/expensewithholdingtax
type: app
title: ExpenseWithholdingTax
summary: "ExpenseWithholdingTax (Microsoft.ExpenseTaxIntegration): 11 objects in BC29-30 (3 table extensions, 3 page extensions, 2 codeunits, 1 table, 1 enum, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - development
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d48203ae05ec3b42000fe71d7b17ecda59216cb6d62fdb74f07bfa3135feac19
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/ExpenseWithholdingTax/app
    title: src/Apps/W1/ExpenseWithholdingTax/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/7059
    - object/tableextension/7055
    - object/tableextension/7056
    - object/tableextension/7057
    - object/pageextension/7055
    - object/pageextension/7056
    - object/pageextension/7058
    - object/codeunit/7056
    - object/codeunit/7057
    - object/enum/7055
    - object/permissionset/7058
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: ExpenseWithholdingTax
namespace_root: Microsoft.ExpenseTaxIntegration
present_in:
  - "29"
  - "30"
counts:
  objects: 11
  by_type:
    tableextension: 3
    pageextension: 3
    codeunit: 2
    table: 1
    enum: 1
    permissionset: 1
  hubs: 0
  videos: 0
  posts: 0
---

# ExpenseWithholdingTax

> ExpenseWithholdingTax (Microsoft.ExpenseTaxIntegration): 11 objects in BC29-30 (3 table extensions, 3 page extensions, 2 codeunits, 1 table, 1 enum, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/ExpenseWithholdingTax/app` · namespace `Microsoft.ExpenseTaxIntegration` · BC29-30 · system development · facts from the code pillar and the joins, nothing machine-written

## Objects

11 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 7059 | [WHT Exp. Report Buffer](../objects/table/7059.md) | Expense Report Withholding Tax Buffer |

### Table extensions (3)

| Id | Name | Caption |
|---|---|---|
| 7055 | [WHT Expense Category Ext](../objects/tableextension/7055.md) |  |
| 7056 | [WHT Tax Posting Setup Ext](../objects/tableextension/7056.md) |  |
| 7057 | [WHT Threshold Accumulator Ext](../objects/tableextension/7057.md) |  |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 7055 | [WHT Expense Categories](../objects/pageextension/7055.md) |  |
| 7056 | [WHT Tax Posting Setup](../objects/pageextension/7056.md) |  |
| 7058 | [WHT General Journal](../objects/pageextension/7058.md) |  |

### Codeunits (2)

| Id | Name | Caption |
|---|---|---|
| 7056 | [WHT Expense Category Mgt.](../objects/codeunit/7056.md) |  |
| 7057 | [WHT Exp. Report Post Handler](../objects/codeunit/7057.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 7055 | [Withholding Selection Mode](../objects/enum/7055.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 7058 | [Exp. Withholding Tax](../objects/permissionset/7058.md) | Expense Withholding Tax |

Source: [src/Apps/W1/ExpenseWithholdingTax/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/ExpenseWithholdingTax/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
