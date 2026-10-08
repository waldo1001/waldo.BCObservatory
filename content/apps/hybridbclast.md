---
id: app/hybridbclast
type: app
title: HybridBCLast
summary: "HybridBCLast (Microsoft.DataMigration): 20 objects in BC29-30 (9 codeunits, 4 permission set extensions, 3 tables, 2 table extensions, 2 pages); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - administration
system: administration
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b42ce4b7e6812dd7d055922a0171bb4135230d8d83e53e242e7cf7dcf540d68c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/HybridBCLast/app
    title: src/Apps/W1/HybridBCLast/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4018
    - object/table/4020
    - object/table/4037
    - object/tableextension/4001
    - object/tableextension/4038
    - object/page/40030
    - object/page/40031
    - object/codeunit/4020
    - object/codeunit/4021
    - object/codeunit/4023
    - object/codeunit/4024
    - object/codeunit/4026
    - object/codeunit/4028
    - object/codeunit/4029
    - object/codeunit/4055
    - object/codeunit/40030
    - object/permissionsetextension/4018
    - object/permissionsetextension/4019
    - object/permissionsetextension/4020
    - object/permissionsetextension/4021
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: HybridBCLast
namespace_root: Microsoft.DataMigration
present_in:
  - "29"
  - "30"
counts:
  objects: 20
  by_type:
    codeunit: 9
    permissionsetextension: 4
    table: 3
    tableextension: 2
    page: 2
  hubs: 0
  videos: 0
  posts: 0
---

# HybridBCLast

> HybridBCLast (Microsoft.DataMigration): 20 objects in BC29-30 (9 codeunits, 4 permission set extensions, 3 tables, 2 table extensions, 2 pages); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/HybridBCLast/app` · namespace `Microsoft.DataMigration` · BC29-30 · system administration · facts from the code pillar and the joins, nothing machine-written

## Objects

20 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 4018 | [Source Table Mapping](../objects/table/4018.md) |  |
| 4020 | [Hybrid BC Last Setup](../objects/table/4020.md) |  |
| 4037 | [Stg Incoming Document](../objects/table/4037.md) |  |

### Table extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4001 | [NAV Hybrid Replication Summary](../objects/tableextension/4001.md) |  |
| 4038 | [BC Last Cloud Setup](../objects/tableextension/4038.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 40030 | [Table Mappings](../objects/page/40030.md) |  |
| 40031 | [Table Field Mappings](../objects/page/40031.md) |  |

### Codeunits (9)

| Id | Name | Caption |
|---|---|---|
| 4020 | [Hybrid BC Last Wizard](../objects/codeunit/4020.md) |  |
| 4021 | [Hybrid BC Last Management](../objects/codeunit/4021.md) |  |
| 4023 | [Hybrid BC Last Install](../objects/codeunit/4023.md) |  |
| 4024 | [Hybrid BC Last Upgrade](../objects/codeunit/4024.md) |  |
| 4026 | [W1 Management](../objects/codeunit/4026.md) |  |
| 4028 | [W1 Data Load](../objects/codeunit/4028.md) |  |
| 4029 | [W1 Company Handler](../objects/codeunit/4029.md) |  |
| 4055 | [Execute Non-Company Upgrade](../objects/codeunit/4055.md) |  |
| 40030 | [Table and Field Move Mappings](../objects/codeunit/40030.md) |  |

### Permission set extensions (4)

| Id | Name | Caption |
|---|---|---|
| 4018 | [D365 BASIC - HBCL](../objects/permissionsetextension/4018.md) |  |
| 4019 | [D365 BASIC ISV - HBCL](../objects/permissionsetextension/4019.md) |  |
| 4020 | [D365 TEAM MEMBER - HBCL](../objects/permissionsetextension/4020.md) |  |
| 4021 | [INTELLIGENT CLOUD - HBCL](../objects/permissionsetextension/4021.md) |  |

Source: [src/Apps/W1/HybridBCLast/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/HybridBCLast/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
