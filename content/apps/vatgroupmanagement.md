---
id: app/vatgroupmanagement
type: app
title: VATGroupManagement
summary: "VATGroupManagement (Microsoft.Finance): 51 objects in BC29-30 (11 codeunits, 9 pages, 8 permission set extensions, 5 page extensions, 5 enums, ...); documented by 1 Learn hub."
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
  at: "2026-10-07T21:10:59.019Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c88ae0b31c73cf327d0e5275fc5018739c9140debe695a38860a8ac669e276e1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/VATGroupManagement/app
    title: src/Apps/W1/VATGroupManagement/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4700
    - object/table/4701
    - object/table/4702
    - object/table/4703
    - object/tableextension/4700
    - object/tableextension/4701
    - object/tableextension/4703
    - object/page/4700
    - object/page/4701
    - object/page/4703
    - object/page/4704
    - object/page/4705
    - object/page/4706
    - object/page/4707
    - object/page/4708
    - object/page/4709
    - object/pageextension/4700
    - object/pageextension/4701
    - object/pageextension/4702
    - object/pageextension/4703
    - object/pageextension/4704
    - object/codeunit/4700
    - object/codeunit/4701
    - object/codeunit/4702
    - object/codeunit/4703
    - object/codeunit/4704
    - object/codeunit/4705
    - object/codeunit/4706
    - object/codeunit/4707
    - object/codeunit/4708
    - object/codeunit/4709
    - object/codeunit/4711
    - object/query/4700
    - object/enum/4700
    - object/enum/4701
    - object/enum/4703
    - object/enum/4704
    - object/enum/4705
    - object/permissionset/4708
    - object/permissionset/4709
    - object/permissionset/4710
    - object/permissionset/4711
    - object/permissionset/4712
    - object/permissionsetextension/4700
    - object/permissionsetextension/4701
    - object/permissionsetextension/4702
    - object/permissionsetextension/4703
    - object/permissionsetextension/4704
    - object/permissionsetextension/4705
    - object/permissionsetextension/4706
    - object/permissionsetextension/4707
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: VATGroupManagement
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 51
  by_type:
    codeunit: 11
    page: 9
    permissionsetextension: 8
    pageextension: 5
    enum: 5
    permissionset: 5
    table: 4
    tableextension: 3
    query: 1
  hubs: 1
  videos: 0
  posts: 0
---

# VATGroupManagement

> VATGroupManagement (Microsoft.Finance): 51 objects in BC29-30 (11 codeunits, 9 pages, 8 permission set extensions, 5 page extensions, 5 enums, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/VATGroupManagement/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 13 objects

## Objects

51 objects, by type.

### Tables (4)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Group Approved Member](../objects/table/4700.md) |  |
| 4701 | [VAT Group Calculation](../objects/table/4701.md) | VAT Group Member Calculation |
| 4702 | [VAT Group Submission Header](../objects/table/4702.md) |  |
| 4703 | [VAT Group Submission Line](../objects/table/4703.md) |  |

### Table extensions (3)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Report Header Extension](../objects/tableextension/4700.md) |  |
| 4701 | [VAT Report Setup Extension](../objects/tableextension/4701.md) |  |
| 4703 | [VAT Stmt. Rep. Line Extension](../objects/tableextension/4703.md) |  |

### Pages (9)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Group Submission Lines](../objects/page/4700.md) |  |
| 4701 | [VAT Group Submissions](../objects/page/4701.md) |  |
| 4703 | [VAT Group Approved Member List](../objects/page/4703.md) | VAT Group Approved Members |
| 4704 | [VAT Group Member Calculation](../objects/page/4704.md) |  |
| 4705 | [VAT Group Setup Guide](../objects/page/4705.md) | VAT Group Management |
| 4706 | [VAT Group Sub. Lines Subform](../objects/page/4706.md) | VAT Group Submission Lines |
| 4707 | [VAT Group Submission](../objects/page/4707.md) |  |
| 4708 | [VAT Group Submission List](../objects/page/4708.md) | VAT Group Submissions |
| 4709 | [VAT Reports Configuration Part](../objects/page/4709.md) | VAT Reports Configuration |

### Page extensions (5)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Period List Extension](../objects/pageextension/4700.md) |  |
| 4701 | [VAT Report Extension](../objects/pageextension/4701.md) |  |
| 4702 | [VAT Report List Extension](../objects/pageextension/4702.md) |  |
| 4703 | [VAT Report Setup Extension](../objects/pageextension/4703.md) |  |
| 4704 | [VAT Rep. Stmt. Sub. Extension](../objects/pageextension/4704.md) |  |

### Codeunits (11)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Group Communication](../objects/codeunit/4700.md) |  |
| 4701 | [VAT Group Helper Functions](../objects/codeunit/4701.md) |  |
| 4702 | [VAT Group Upgrade Tags](../objects/codeunit/4702.md) |  |
| 4703 | [VAT Group Retrieve From Sub.](../objects/codeunit/4703.md) |  |
| 4704 | [VAT Group Serialization](../objects/codeunit/4704.md) |  |
| 4705 | [VAT Group Submission Status](../objects/codeunit/4705.md) |  |
| 4706 | [VAT Group Submit To Represent.](../objects/codeunit/4706.md) |  |
| 4707 | [VAT Group Sub. Status JobQueue](../objects/codeunit/4707.md) |  |
| 4708 | [VAT Group Settlement](../objects/codeunit/4708.md) |  |
| 4709 | [VAT Group Upgrade](../objects/codeunit/4709.md) |  |
| 4711 | [Install VAT Group](../objects/codeunit/4711.md) |  |

### Queries (1)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Group Submission Status](../objects/query/4700.md) |  |

### Enums (5)

| Id | Name | Caption |
|---|---|---|
| 4700 | [VAT Group Authentication Type OnPrem](../objects/enum/4700.md) |  |
| 4701 | [VAT Group Role](../objects/enum/4701.md) |  |
| 4703 | [VAT Group BC Version](../objects/enum/4703.md) |  |
| 4704 | [VAT Group Auth Type OnPrem](../objects/enum/4704.md) |  |
| 4705 | [VAT Group Auth Type Saas](../objects/enum/4705.md) |  |

### Permission sets (5)

| Id | Name | Caption |
|---|---|---|
| 4708 | [VAT Group Represent.](../objects/permissionset/4708.md) | VAT Group Representative |
| 4709 | [VAT Group Member](../objects/permissionset/4709.md) |  |
| 4710 | [VATGroupManagement - Edit](../objects/permissionset/4710.md) | VAT Group Management - Edit |
| 4711 | [VATGroupManagement - Objects](../objects/permissionset/4711.md) |  |
| 4712 | [VATGroupManagement - Read](../objects/permissionset/4712.md) |  |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 4700 | [D365 BASIC ISV - VAT Group Management](../objects/permissionsetextension/4700.md) |  |
| 4701 | [D365 BASIC - VAT Group Management](../objects/permissionsetextension/4701.md) |  |
| 4702 | [D365 BUS FULL ACCESS - VAT Group Management](../objects/permissionsetextension/4702.md) |  |
| 4703 | [D365 BUS PREMIUM - VAT Group Management](../objects/permissionsetextension/4703.md) |  |
| 4704 | [D365 FULL ACCESS - VAT Group Management](../objects/permissionsetextension/4704.md) |  |
| 4705 | [D365 READ - VAT Group Management](../objects/permissionsetextension/4705.md) |  |
| 4706 | [D365 TEAM MEMBER - VAT Group Management](../objects/permissionsetextension/4706.md) |  |
| 4707 | [INTELLIGENT CLOUD - VAT Group Management](../objects/permissionsetextension/4707.md) |  |

Source: [src/Apps/W1/VATGroupManagement/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/VATGroupManagement/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
