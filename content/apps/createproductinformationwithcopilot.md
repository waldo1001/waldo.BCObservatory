---
id: app/createproductinformationwithcopilot
type: app
title: CreateProductInformationWithCopilot
summary: "CreateProductInformationWithCopilot (Microsoft.Inventory): 19 objects in BC29-30 (10 codeunits, 2 pages, 2 page extensions, 2 enums, 1 table, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - inventory
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-16T00:52:24.356Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e02672dddb93e05361db00eb76e1abf45d5816c71ba12d2cb13bf28f203e7614
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/CreateProductInformationWithCopilot/app
    title: src/Apps/W1/CreateProductInformationWithCopilot/app (main)
    date: null
    commit: d2abc1d2ceae394331716c8183ef60e1534c2ce0
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/7339
    - object/tableextension/7410
    - object/page/7410
    - object/page/7411
    - object/pageextension/7330
    - object/pageextension/7331
    - object/codeunit/7330
    - object/codeunit/7331
    - object/codeunit/7332
    - object/codeunit/7333
    - object/codeunit/7340
    - object/codeunit/7341
    - object/codeunit/7342
    - object/codeunit/7343
    - object/codeunit/7345
    - object/codeunit/7346
    - object/enum/7331
    - object/enum/7332
    - object/enumextension/7330
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: CreateProductInformationWithCopilot
namespace_root: Microsoft.Inventory
present_in:
  - "29"
  - "30"
counts:
  objects: 19
  by_type:
    codeunit: 10
    page: 2
    pageextension: 2
    enum: 2
    table: 1
    tableextension: 1
    enumextension: 1
  hubs: 0
  videos: 0
  posts: 0
---

# CreateProductInformationWithCopilot

> CreateProductInformationWithCopilot (Microsoft.Inventory): 19 objects in BC29-30 (10 codeunits, 2 pages, 2 page extensions, 2 enums, 1 table, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/CreateProductInformationWithCopilot/app` · namespace `Microsoft.Inventory` · BC29-30 · system inventory · facts from the code pillar and the joins, nothing machine-written

## Objects

19 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 7339 | [Search API Response](../objects/table/7339.md) |  |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7410 | [Item Subst. Suggestion](../objects/tableextension/7410.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 7410 | [Item Subst. Suggestion](../objects/page/7410.md) | Item Substitution Suggestion |
| 7411 | [Item Subst. Suggestion Sub](../objects/page/7411.md) | Lines proposed by Copilot |

### Page extensions (2)

| Id | Name | Caption |
|---|---|---|
| 7330 | [Item Substitution Entry Ext.](../objects/pageextension/7330.md) |  |
| 7331 | [Item Card Ext.](../objects/pageextension/7331.md) |  |

### Codeunits (10)

| Id | Name | Caption |
|---|---|---|
| 7330 | [Item Subst. Suggestion Impl.](../objects/codeunit/7330.md) |  |
| 7331 | [Create Product Info. Install](../objects/codeunit/7331.md) |  |
| 7332 | [Create Product Info. Upgrade](../objects/codeunit/7332.md) |  |
| 7333 | [Search](../objects/codeunit/7333.md) |  |
| 7340 | [Create Product Info. Prompts](../objects/codeunit/7340.md) |  |
| 7341 | [Magic Function](../objects/codeunit/7341.md) |  |
| 7342 | [Suggest Substitutions Function](../objects/codeunit/7342.md) |  |
| 7343 | [Notification Manager](../objects/codeunit/7343.md) |  |
| 7345 | [Create Product Info. Utility](../objects/codeunit/7345.md) |  |
| 7346 | [Item Subst. Discont. Notif.](../objects/codeunit/7346.md) |  |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 7331 | [Search Confidence](../objects/enum/7331.md) |  |
| 7332 | [Search Style](../objects/enum/7332.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7330 | [Create Product Info Capability](../objects/enumextension/7330.md) |  |

Source: [src/Apps/W1/CreateProductInformationWithCopilot/app](https://github.com/microsoft/BCApps/tree/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/CreateProductInformationWithCopilot/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
