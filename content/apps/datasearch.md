---
id: app/datasearch
type: app
title: DataSearch
summary: "DataSearch (Microsoft.Foundation): 18 objects in BC29-30 (7 pages, 6 codeunits, 3 tables, 2 permission set extensions); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - platform
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 15a54f83f2a101b9556abea1070684a14fc2b375da9a0b039437fc900701afa2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/DataSearch/app
    title: src/Apps/W1/DataSearch/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/2680
    - object/table/2681
    - object/table/2682
    - object/page/2680
    - object/page/2681
    - object/page/2682
    - object/page/2683
    - object/page/2684
    - object/page/2685
    - object/page/2686
    - object/codeunit/2680
    - object/codeunit/2681
    - object/codeunit/2682
    - object/codeunit/2684
    - object/codeunit/2685
    - object/codeunit/2687
    - object/permissionsetextension/2680
    - object/permissionsetextension/2681
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: DataSearch
namespace_root: Microsoft.Foundation
present_in:
  - "29"
  - "30"
counts:
  objects: 18
  by_type:
    page: 7
    codeunit: 6
    table: 3
    permissionsetextension: 2
  hubs: 0
  videos: 0
  posts: 0
---

# DataSearch

> DataSearch (Microsoft.Foundation): 18 objects in BC29-30 (7 pages, 6 codeunits, 3 tables, 2 permission set extensions); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/DataSearch/app` · namespace `Microsoft.Foundation` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

18 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 2680 | [Data Search Result](../objects/table/2680.md) |  |
| 2681 | [Data Search Setup (Table)](../objects/table/2681.md) | Search Setup (Table) |
| 2682 | [Data Search Setup (Field)](../objects/table/2682.md) | Search Setup (Field) |

### Pages (7)

| Id | Name | Caption |
|---|---|---|
| 2680 | [Data Search](../objects/page/2680.md) | Search in company data |
| 2681 | [Data Search lines](../objects/page/2681.md) | Results |
| 2682 | [Data Search Result Records](../objects/page/2682.md) | Search Result Records |
| 2683 | [Data Search Setup (Table) List](../objects/page/2683.md) | Enable tables for searching |
| 2684 | [Data Search Setup (Field) List](../objects/page/2684.md) | Enable fields for searching |
| 2685 | [Data Search Setup (Field) Part](../objects/page/2685.md) | Search Enabled Fields |
| 2686 | [Data Search Setup (Lists)](../objects/page/2686.md) | Enable lists for searching |

### Codeunits (6)

| Id | Name | Caption |
|---|---|---|
| 2680 | [Data Search in Table](../objects/codeunit/2680.md) |  |
| 2681 | [Data Search Defaults](../objects/codeunit/2681.md) |  |
| 2682 | [Data Search Events](../objects/codeunit/2682.md) |  |
| 2684 | [Data Search Invocation](../objects/codeunit/2684.md) |  |
| 2685 | [Data Search Object Mapping](../objects/codeunit/2685.md) |  |
| 2687 | [Data Search Setup Changes](../objects/codeunit/2687.md) |  |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 2680 | [Data Search Setup](../objects/permissionsetextension/2680.md) |  |
| 2681 | [Data Search](../objects/permissionsetextension/2681.md) |  |

Source: [src/Apps/W1/DataSearch/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/DataSearch/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
