---
id: app/saleslinessuggestions
type: app
title: SalesLinesSuggestions
summary: "SalesLinesSuggestions (Microsoft.Sales): 44 objects in BC29-30 (21 codeunits, 6 pages, 6 enums, 4 tables, 3 page extensions, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - sales
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 372e3f7ef42d96541010e6faafbe5332d5db49e5e86738878177d6543c9c7147
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/SalesLinesSuggestions/app
    title: src/Apps/W1/SalesLinesSuggestions/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/7275
    - object/table/7276
    - object/table/7277
    - object/table/7278
    - object/page/7275
    - object/page/7276
    - object/page/7280
    - object/page/7286
    - object/page/7289
    - object/page/7290
    - object/pageextension/7277
    - object/pageextension/7278
    - object/pageextension/7279
    - object/codeunit/7275
    - object/codeunit/7276
    - object/codeunit/7277
    - object/codeunit/7278
    - object/codeunit/7279
    - object/codeunit/7280
    - object/codeunit/7281
    - object/codeunit/7282
    - object/codeunit/7284
    - object/codeunit/7286
    - object/codeunit/7287
    - object/codeunit/7288
    - object/codeunit/7289
    - object/codeunit/7290
    - object/codeunit/7291
    - object/codeunit/7292
    - object/codeunit/7293
    - object/codeunit/7294
    - object/codeunit/7295
    - object/codeunit/7296
    - object/codeunit/7297
    - object/enum/7275
    - object/enum/7276
    - object/enum/7277
    - object/enum/7278
    - object/enum/7279
    - object/enum/7280
    - object/enumextension/7275
    - object/interface/documentlookupsubtype
    - object/interface/file-handler
    - object/interface/salesazureopenaitools
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SalesLinesSuggestions
namespace_root: Microsoft.Sales
present_in:
  - "29"
  - "30"
counts:
  objects: 44
  by_type:
    codeunit: 21
    page: 6
    enum: 6
    table: 4
    pageextension: 3
    interface: 3
    enumextension: 1
  hubs: 0
  videos: 0
  posts: 0
---

# SalesLinesSuggestions

> SalesLinesSuggestions (Microsoft.Sales): 44 objects in BC29-30 (21 codeunits, 6 pages, 6 enums, 4 tables, 3 page extensions, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/SalesLinesSuggestions/app` · namespace `Microsoft.Sales` · BC29-30 · system sales · facts from the code pillar and the joins, nothing machine-written

## Objects

44 objects, by type.

### Tables (4)

| Id | Name | Caption |
|---|---|---|
| 7275 | [Sales Line AI Suggestions](../objects/table/7275.md) | Sales Line AI Suggestion |
| 7276 | [Search API Response](../objects/table/7276.md) |  |
| 7277 | [Attachment Mapping](../objects/table/7277.md) |  |
| 7278 | [Mapping Cache](../objects/table/7278.md) |  |

### Pages (6)

| Id | Name | Caption |
|---|---|---|
| 7275 | [Sales Line AI Suggestions](../objects/page/7275.md) | Suggest Sales Lines |
| 7276 | [Sales Line AI Suggestions Sub](../objects/page/7276.md) | Lines proposed by Copilot |
| 7280 | [Item Search Setup](../objects/page/7280.md) |  |
| 7286 | [Item Info. From File](../objects/page/7286.md) | Mapped & Selected column values in the file |
| 7289 | [Attachment Mapping Part](../objects/page/7289.md) | Attachment Mapping |
| 7290 | [Sales Line From Attachment](../objects/page/7290.md) | Suggest sales lines from file |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 7277 | [Sales Invoice Sub Form Ext](../objects/pageextension/7277.md) |  |
| 7278 | [Sales Order Sub Form Ext](../objects/pageextension/7278.md) |  |
| 7279 | [Sales Quote Sub Form Ext](../objects/pageextension/7279.md) |  |

### Codeunits (21)

| Id | Name | Caption |
|---|---|---|
| 7275 | [Sales Lines Suggestions Impl.](../objects/codeunit/7275.md) |  |
| 7276 | [SLS Prompts](../objects/codeunit/7276.md) |  |
| 7277 | [Sales Line Suggestions Install](../objects/codeunit/7277.md) |  |
| 7278 | [Sales Line Suggestions Upgrade](../objects/codeunit/7278.md) |  |
| 7279 | [Notification Manager](../objects/codeunit/7279.md) |  |
| 7280 | [Sales Line Utility](../objects/codeunit/7280.md) |  |
| 7281 | [BlanketSalesOrderLookup](../objects/codeunit/7281.md) |  |
| 7282 | [Search](../objects/codeunit/7282.md) |  |
| 7284 | [Magic Function](../objects/codeunit/7284.md) |  |
| 7286 | [SalesInvoiceLookup](../objects/codeunit/7286.md) |  |
| 7287 | [SalesOrderLookup](../objects/codeunit/7287.md) |  |
| 7288 | [SalesQuoteLookup](../objects/codeunit/7288.md) |  |
| 7289 | [SalesShipmentLookup](../objects/codeunit/7289.md) |  |
| 7290 | [Prepare Sales Line For Copying](../objects/codeunit/7290.md) |  |
| 7291 | [Search Items With Filters Func](../objects/codeunit/7291.md) |  |
| 7292 | [Sales Line From Attachment](../objects/codeunit/7292.md) |  |
| 7293 | [Csv Handler](../objects/codeunit/7293.md) |  |
| 7294 | [File Handler Factory](../objects/codeunit/7294.md) |  |
| 7295 | [File Handler Result](../objects/codeunit/7295.md) |  |
| 7296 | [Lookup Items From Csv Function](../objects/codeunit/7296.md) |  |
| 7297 | [Mapping Cache Management](../objects/codeunit/7297.md) |  |

### Enums (6)

| Id | Name | Caption |
|---|---|---|
| 7275 | [File Handler Type](../objects/enum/7275.md) |  |
| 7276 | [Search Confidence](../objects/enum/7276.md) |  |
| 7277 | [Search Style](../objects/enum/7277.md) |  |
| 7278 | [Column Action](../objects/enum/7278.md) |  |
| 7279 | [Document Lookup Types](../objects/enum/7279.md) |  |
| 7280 | [Column Type](../objects/enum/7280.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7275 | [Sales Lines Copilot Capability](../objects/enumextension/7275.md) |  |

### Interfaces (3)

| Id | Name | Caption |
|---|---|---|
|  | [DocumentLookupSubType](../objects/interface/documentlookupsubtype.md) |  |
|  | [File Handler](../objects/interface/file-handler.md) |  |
|  | [SalesAzureOpenAITools](../objects/interface/salesazureopenaitools.md) |  |

Source: [src/Apps/W1/SalesLinesSuggestions/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/SalesLinesSuggestions/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
