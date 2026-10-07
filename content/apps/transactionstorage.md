---
id: app/transactionstorage
type: app
title: TransactionStorage
summary: "TransactionStorage (System.DataAdministration): 18 objects in BC29-30 (7 codeunits, 5 tables, 3 permission sets, 1 page, 1 enum, ...); no Learn hub documents its objects yet."
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
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c36da002dc8599935ae69b9fb610814422f78dfb0a69fc567f576c62af735292
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/TransactionStorage/app
    title: src/Apps/W1/TransactionStorage/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/6201
    - object/table/6202
    - object/table/6203
    - object/table/6204
    - object/table/6205
    - object/page/6200
    - object/codeunit/6202
    - object/codeunit/6203
    - object/codeunit/6204
    - object/codeunit/6205
    - object/codeunit/6206
    - object/codeunit/6207
    - object/codeunit/6242
    - object/enum/6201
    - object/permissionset/6200
    - object/permissionset/6201
    - object/permissionset/6202
    - object/permissionsetextension/6203
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: TransactionStorage
namespace_root: System.DataAdministration
present_in:
  - "29"
  - "30"
counts:
  objects: 18
  by_type:
    codeunit: 7
    table: 5
    permissionset: 3
    page: 1
    enum: 1
    permissionsetextension: 1
  hubs: 0
  videos: 0
  posts: 0
---

# TransactionStorage

> TransactionStorage (System.DataAdministration): 18 objects in BC29-30 (7 codeunits, 5 tables, 3 permission sets, 1 page, 1 enum, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/TransactionStorage/app` · namespace `System.DataAdministration` · BC29-30 · system administration · facts from the code pillar and the joins, nothing machine-written

## Objects

18 objects, by type.

### Tables (5)

| Id | Name | Caption |
|---|---|---|
| 6201 | [Transaction Storage Setup](../objects/table/6201.md) |  |
| 6202 | [Transact. Storage Task Entry](../objects/table/6202.md) |  |
| 6203 | [Transact. Storage Export State](../objects/table/6203.md) |  |
| 6204 | [Transact. Storage Table Entry](../objects/table/6204.md) |  |
| 6205 | [Trans. Storage Export Data](../objects/table/6205.md) |  |

### Pages (1)

| Id | Name | Caption |
|---|---|---|
| 6200 | [Transaction Storage Setup](../objects/page/6200.md) |  |

### Codeunits (7)

| Id | Name | Caption |
|---|---|---|
| 6202 | [Transact. Storage Export Data](../objects/codeunit/6202.md) |  |
| 6203 | [Transact. Storage Export](../objects/codeunit/6203.md) |  |
| 6204 | [Trans. Storage Error Handler](../objects/codeunit/6204.md) |  |
| 6205 | [Transaction Storage ABS](../objects/codeunit/6205.md) |  |
| 6206 | [Transaction Storage Upgrade](../objects/codeunit/6206.md) |  |
| 6207 | [Trans. Storage Schedule Task](../objects/codeunit/6207.md) |  |
| 6242 | [Trans. Storage Posting State](../objects/codeunit/6242.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 6201 | [Trans. Storage Export Status](../objects/enum/6201.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 6200 | [Trans. Stor. - Read](../objects/permissionset/6200.md) |  |
| 6201 | [Transact. Storage Objects](../objects/permissionset/6201.md) |  |
| 6202 | [Trans. Stor. - Edit](../objects/permissionset/6202.md) |  |

### Permission set extensions (1)

| Id | Name | Caption |
|---|---|---|
| 6203 | [D365 BASIC - Transact. Storage](../objects/permissionsetextension/6203.md) |  |

Source: [src/Apps/W1/TransactionStorage/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/TransactionStorage/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
