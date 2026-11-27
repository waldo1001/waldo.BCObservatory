---
id: app/saftmodificationdk
type: app
title: SAFTModificationDK
summary: "SAFTModificationDK (Microsoft.Finance): 23 objects in BC29 (8 codeunits, 6 permission set extensions, 3 permission sets, 2 pages, 2 enum extensions, ...); no Learn hub documents its objects yet."
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
  at: "2026-11-27T00:54:34.767Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2ca76a8b220dc3c6336105c858496b73722023e77005c074e80a7e99b59bd278
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/34e1078527c84ba7c885b871a9be47229ba9e4f4/src/Apps/W1/SAFTModificationDK/app
    title: src/Apps/W1/SAFTModificationDK/app (releases/29.x)
    date: null
    commit: 34e1078527c84ba7c885b871a9be47229ba9e4f4
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/13687
    - object/page/13687
    - object/page/13688
    - object/pageextension/13687
    - object/codeunit/13687
    - object/codeunit/13688
    - object/codeunit/13689
    - object/codeunit/13694
    - object/codeunit/13695
    - object/codeunit/13696
    - object/codeunit/13697
    - object/codeunit/13698
    - object/enumextension/13687
    - object/enumextension/13695
    - object/permissionset/13687
    - object/permissionset/13688
    - object/permissionset/13689
    - object/permissionsetextension/13687
    - object/permissionsetextension/13688
    - object/permissionsetextension/13689
    - object/permissionsetextension/13695
    - object/permissionsetextension/13696
    - object/permissionsetextension/13697
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SAFTModificationDK
namespace_root: Microsoft.Finance
present_in:
  - "29"
counts:
  objects: 23
  by_type:
    codeunit: 8
    permissionsetextension: 6
    permissionset: 3
    page: 2
    enumextension: 2
    table: 1
    pageextension: 1
  hubs: 0
  videos: 0
  posts: 0
---

# SAFTModificationDK

> SAFTModificationDK (Microsoft.Finance): 23 objects in BC29 (8 codeunits, 6 permission set extensions, 3 permission sets, 2 pages, 2 enum extensions, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/SAFTModificationDK/app` · namespace `Microsoft.Finance` · BC29 · system finance · facts from the code pillar and the joins, nothing machine-written

## Objects

23 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 13687 | [Imported SAF-T File DK](../objects/table/13687.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 13687 | [RB Accounting File](../objects/page/13687.md) |  |
| 13688 | [Imported SAF-T Files DK](../objects/page/13688.md) | Import SAF-T Files |

### Page extensions (1)

| Id | Name | Caption |
|---|---|---|
| 13687 | [Audit File Export Docs. DK](../objects/pageextension/13687.md) |  |

### Codeunits (8)

| Id | Name | Caption |
|---|---|---|
| 13687 | [Create Standard Data SAF-T DK](../objects/codeunit/13687.md) |  |
| 13688 | [Install SAF-T DK](../objects/codeunit/13688.md) |  |
| 13689 | [Xml Data Handling SAF-T DK](../objects/codeunit/13689.md) |  |
| 13694 | [SAF-T Notification Mgt. DK](../objects/codeunit/13694.md) |  |
| 13695 | [Standard Account DK](../objects/codeunit/13695.md) |  |
| 13696 | [Standard Tax Code DK](../objects/codeunit/13696.md) |  |
| 13697 | [Data Check SAF-T DK](../objects/codeunit/13697.md) |  |
| 13698 | [Regnskab Basis Export](../objects/codeunit/13698.md) |  |

### Enum extensions (2)

| Id | Name | Caption |
|---|---|---|
| 13687 | [SAF-T Modification DK](../objects/enumextension/13687.md) |  |
| 13695 | [Standard Account Type SAF-T DK](../objects/enumextension/13695.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 13687 | [SAF-T Objects DK](../objects/permissionset/13687.md) |  |
| 13688 | [SAF-T DK - Read](../objects/permissionset/13688.md) |  |
| 13689 | [SAF-T DK - Edit](../objects/permissionset/13689.md) |  |

### Permission set extensions (6)

| Id | Name | Caption |
|---|---|---|
| 13687 | [D365 BASIC ISV - SAF-T DK](../objects/permissionsetextension/13687.md) |  |
| 13688 | [D365 BASIC - SAF-T DK](../objects/permissionsetextension/13688.md) |  |
| 13689 | [D365 READ - SAF-T DK](../objects/permissionsetextension/13689.md) |  |
| 13695 | [D365 TEAM MEMBER - SAF-T DK](../objects/permissionsetextension/13695.md) |  |
| 13696 | [INTELLIGENT CLOUD - SAF-T DK](../objects/permissionsetextension/13696.md) |  |
| 13697 | [LOCAL - SAF-T DK](../objects/permissionsetextension/13697.md) |  |

Source: [src/Apps/W1/SAFTModificationDK/app](https://github.com/microsoft/BCApps/tree/34e1078527c84ba7c885b871a9be47229ba9e4f4/src/Apps/W1/SAFTModificationDK/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
