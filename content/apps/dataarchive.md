---
id: app/dataarchive
type: app
title: DataArchive
summary: "DataArchive (System.DataAdministration): 15 objects in BC29-30 (4 pages, 4 codeunits, 3 tables, 3 permission sets, 1 permission set extension); documented by 1 Learn hub."
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
  input_hash: 2e260e3ed01a7f254b32ebf23d52dee95d778b3aa79277177849fc85dabbf4bd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/DataArchive/app
    title: src/Apps/W1/DataArchive/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/600
    - object/table/601
    - object/table/602
    - object/page/630
    - object/page/631
    - object/page/632
    - object/page/633
    - object/codeunit/603
    - object/codeunit/605
    - object/codeunit/608
    - object/codeunit/609
    - object/permissionset/629
    - object/permissionset/632
    - object/permissionset/633
    - object/permissionsetextension/630
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central/control-your-data
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: DataArchive
namespace_root: System.DataAdministration
present_in:
  - "29"
  - "30"
counts:
  objects: 15
  by_type:
    page: 4
    codeunit: 4
    table: 3
    permissionset: 3
    permissionsetextension: 1
  hubs: 1
  videos: 0
  posts: 0
---

# DataArchive

> DataArchive (System.DataAdministration): 15 objects in BC29-30 (4 pages, 4 codeunits, 3 tables, 3 permission sets, 1 permission set extension); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/DataArchive/app` · namespace `System.DataAdministration` · BC29-30 · system administration · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Control your data](../topics/business-central/development-and-administration/administration-tasks-in-business-central/control-your-data.md) (Development and administration > Administration tasks in Business Central): 2 objects

## Objects

15 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 600 | [Data Archive](../objects/table/600.md) |  |
| 601 | [Data Archive Table](../objects/table/601.md) | Data Archive |
| 602 | [Data Archive Media Field](../objects/table/602.md) |  |

### Pages (4)

| Id | Name | Caption |
|---|---|---|
| 630 | [Data Archive List](../objects/page/630.md) |  |
| 631 | [Data Archive Table List](../objects/page/631.md) | Data Archive Tables |
| 632 | [Data Archive Table ListPart](../objects/page/632.md) | Data Archive Tables |
| 633 | [Data Archive - New Archive](../objects/page/633.md) | New Data Archive |

### Codeunits (4)

| Id | Name | Caption |
|---|---|---|
| 603 | [Data Archive Db Subscriber](../objects/codeunit/603.md) |  |
| 605 | [Data Archive Provider](../objects/codeunit/605.md) |  |
| 608 | [Data Archive Export To Excel](../objects/codeunit/608.md) |  |
| 609 | [Data Archive Export to CSV](../objects/codeunit/609.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 629 | [Data Archive - Read](../objects/permissionset/629.md) |  |
| 632 | [Data Archive - View](../objects/permissionset/632.md) |  |
| 633 | [DataArchive - Objects](../objects/permissionset/633.md) | Data Archive - Objects |

### Permission set extensions (1)

| Id | Name | Caption |
|---|---|---|
| 630 | [Data Archive - View](../objects/permissionsetextension/630.md) |  |

Source: [src/Apps/W1/DataArchive/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/DataArchive/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
