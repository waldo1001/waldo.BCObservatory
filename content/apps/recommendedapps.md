---
id: app/recommendedapps
type: app
title: RecommendedApps
summary: "RecommendedApps (System.Environment): 9 objects in BC29-30 (3 permission sets, 2 pages, 2 codeunits, 1 table, 1 enum); documented by 2 Learn hubs."
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
  at: "2026-10-07T21:10:59.019Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ef2f64f4f0c648fc44169569b1c1a514cebe07ab3ae8dda77f0dace813f88158
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/RecommendedApps/app
    title: src/Apps/W1/RecommendedApps/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4750
    - object/page/4750
    - object/page/4751
    - object/codeunit/4750
    - object/codeunit/4751
    - object/enum/4750
    - object/permissionset/4751
    - object/permissionset/4752
    - object/permissionset/4753
  features: []
  topics:
    - topic/dev-itpro/administration/onboard-your-customers
    - topic/dev-itpro/administration/prepare-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: RecommendedApps
namespace_root: System.Environment
present_in:
  - "29"
  - "30"
counts:
  objects: 9
  by_type:
    permissionset: 3
    page: 2
    codeunit: 2
    table: 1
    enum: 1
  hubs: 2
  videos: 0
  posts: 0
---

# RecommendedApps

> RecommendedApps (System.Environment): 9 objects in BC29-30 (3 permission sets, 2 pages, 2 codeunits, 1 table, 1 enum); documented by 2 Learn hubs.

First-party app · folder `src/Apps/W1/RecommendedApps/app` · namespace `System.Environment` · BC29-30 · system administration · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Onboard your customers](../topics/dev-itpro/administration/onboard-your-customers.md) (Administration): 3 objects
- [Prepare Business Central](../topics/dev-itpro/administration/prepare-business-central.md) (Administration): 3 objects

## Objects

9 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 4750 | [Recommended Apps](../objects/table/4750.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 4750 | [Recommended Apps List](../objects/page/4750.md) | Recommended Apps |
| 4751 | [Recommended App Card](../objects/page/4751.md) |  |

### Codeunits (2)

| Id | Name | Caption |
|---|---|---|
| 4750 | [Recommended Apps](../objects/codeunit/4750.md) |  |
| 4751 | [Recommended Apps Impl.](../objects/codeunit/4751.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4750 | [App Recommended By](../objects/enum/4750.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4751 | [RecommApps - Edit](../objects/permissionset/4751.md) | RecommendedApps - Edit |
| 4752 | [RecommApps - Objects](../objects/permissionset/4752.md) | RecommendedApps - Objects |
| 4753 | [RecommApps - Read](../objects/permissionset/4753.md) | RecommendedApps - Read |

Source: [src/Apps/W1/RecommendedApps/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/RecommendedApps/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
