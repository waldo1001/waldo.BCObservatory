---
id: app/automaticaccountcodes
type: app
title: AutomaticAccountCodes
summary: "AutomaticAccountCodes (Microsoft.Finance): 46 objects in BC29-30 (14 page extensions, 13 table extensions, 8 permission set extensions, 3 tables, 3 pages, ...); no Learn hub documents its objects yet."
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
  input_hash: d39719154c3fc0cb76e368a28a3d4fa0a1620e8466b7aa17ec5fbefaf3390184
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/AutomaticAccountCodes/app
    title: src/Apps/W1/AutomaticAccountCodes/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4850
    - object/table/4851
    - object/table/4857
    - object/tableextension/4851
    - object/tableextension/4852
    - object/tableextension/4853
    - object/tableextension/4854
    - object/tableextension/4855
    - object/tableextension/4856
    - object/tableextension/4857
    - object/tableextension/4858
    - object/tableextension/4859
    - object/tableextension/4860
    - object/tableextension/4862
    - object/tableextension/4863
    - object/tableextension/4864
    - object/page/4850
    - object/page/4851
    - object/page/4852
    - object/pageextension/4854
    - object/pageextension/4855
    - object/pageextension/4856
    - object/pageextension/4857
    - object/pageextension/4858
    - object/pageextension/4859
    - object/pageextension/4860
    - object/pageextension/4861
    - object/pageextension/4862
    - object/pageextension/4863
    - object/pageextension/4864
    - object/pageextension/4865
    - object/pageextension/4866
    - object/pageextension/4867
    - object/codeunit/4850
    - object/enum/4853
    - object/permissionset/4850
    - object/permissionset/4851
    - object/permissionset/4852
    - object/permissionsetextension/4850
    - object/permissionsetextension/4851
    - object/permissionsetextension/4852
    - object/permissionsetextension/4853
    - object/permissionsetextension/4854
    - object/permissionsetextension/4855
    - object/permissionsetextension/4856
    - object/permissionsetextension/4857
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: AutomaticAccountCodes
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 46
  by_type:
    pageextension: 14
    tableextension: 13
    permissionsetextension: 8
    table: 3
    page: 3
    permissionset: 3
    codeunit: 1
    enum: 1
  hubs: 0
  videos: 0
  posts: 0
---

# AutomaticAccountCodes

> AutomaticAccountCodes (Microsoft.Finance): 46 objects in BC29-30 (14 page extensions, 13 table extensions, 8 permission set extensions, 3 tables, 3 pages, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/AutomaticAccountCodes/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## Objects

46 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 4850 | [Automatic Account Header](../objects/table/4850.md) |  |
| 4851 | [Automatic Account Line](../objects/table/4851.md) |  |
| 4857 | [Auto. Acc. Page Setup](../objects/table/4857.md) |  |

### Table extensions (13)

| Id | Name | Caption |
|---|---|---|
| 4851 | [AutoAcc Gen. Journal Line](../objects/tableextension/4851.md) |  |
| 4852 | [AutoAcc G/L Account](../objects/tableextension/4852.md) |  |
| 4853 | [AutoAcc. Invoice Post. Buffer](../objects/tableextension/4853.md) |  |
| 4854 | [AutoAcc Invoice Posting Buffer](../objects/tableextension/4854.md) |  |
| 4855 | [Auto Posted Gen. Journal Line](../objects/tableextension/4855.md) |  |
| 4856 | [AutoAcc Purchase Line](../objects/tableextension/4856.md) |  |
| 4857 | [AutoAcc Purch. Cr. Memo Line](../objects/tableextension/4857.md) |  |
| 4858 | [AutoAcc Purch. Inv. Line](../objects/tableextension/4858.md) |  |
| 4859 | [AutoAcc Purch. Rcpt. Line](../objects/tableextension/4859.md) |  |
| 4860 | [AutoAcc Sales Cr.Memo Line](../objects/tableextension/4860.md) |  |
| 4862 | [AutoAcc Sales Invoice Line](../objects/tableextension/4862.md) |  |
| 4863 | [AutoAcc Sales Line](../objects/tableextension/4863.md) |  |
| 4864 | [AutoAcc Sales Shipment Line](../objects/tableextension/4864.md) |  |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 4850 | [Automatic Account Header](../objects/page/4850.md) | Automatic Account Groups |
| 4851 | [Automatic Account Line](../objects/page/4851.md) |  |
| 4852 | [Automatic Account List](../objects/page/4852.md) | Automatic Account Groups |

### Page extensions (14)

| Id | Name | Caption |
|---|---|---|
| 4854 | [AutoAcc General Journal](../objects/pageextension/4854.md) |  |
| 4855 | [AutoAcc G/L Account Card](../objects/pageextension/4855.md) |  |
| 4856 | [AA Post. Purch. Inv. Subform](../objects/pageextension/4856.md) |  |
| 4857 | [AA Post Sales Cr. Memo Subform](../objects/pageextension/4857.md) |  |
| 4858 | [AA Post. Sales Invoice Subform](../objects/pageextension/4858.md) |  |
| 4859 | [AutoAcc Purchase Order Subform](../objects/pageextension/4859.md) |  |
| 4860 | [AA Purch. Return Order Subform](../objects/pageextension/4860.md) |  |
| 4861 | [AA Purch. Cr. Memo Subform](../objects/pageextension/4861.md) |  |
| 4862 | [AutoAcc Purch. Invoice Subform](../objects/pageextension/4862.md) |  |
| 4863 | [AutoAcc Sales Cr. Memo Subform](../objects/pageextension/4863.md) |  |
| 4864 | [AutoAcc Sales Invoice Subform](../objects/pageextension/4864.md) |  |
| 4865 | [AutoAcc Sales Order Subform](../objects/pageextension/4865.md) |  |
| 4866 | [AA Sales Return Order Subform](../objects/pageextension/4866.md) |  |
| 4867 | [AA Post. Prc. Cr. Memo Subform](../objects/pageextension/4867.md) |  |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 4850 | [AA Codes Posting Helper](../objects/codeunit/4850.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4853 | [AAC Page Setup Key](../objects/enum/4853.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4850 | [AAC - Objects](../objects/permissionset/4850.md) | AutomaticAccountCodes - Objects |
| 4851 | [AAC - Read](../objects/permissionset/4851.md) | AutomaticAccountCodes - Read |
| 4852 | [AAC - Edit](../objects/permissionset/4852.md) | AutomaticAccountCodes - Edit |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 4850 | [D365 BASIC - AAC](../objects/permissionsetextension/4850.md) |  |
| 4851 | [D365 BASIC ISV - AAC](../objects/permissionsetextension/4851.md) |  |
| 4852 | [D365 BUS FULL ACCESS - AAC](../objects/permissionsetextension/4852.md) |  |
| 4853 | [D365 BUS PREMIUM - AAC](../objects/permissionsetextension/4853.md) |  |
| 4854 | [D365 FULL ACCESS - AAC](../objects/permissionsetextension/4854.md) |  |
| 4855 | [D365 READ - AAC](../objects/permissionsetextension/4855.md) |  |
| 4856 | [D365 TEAM MEMBER - AAC](../objects/permissionsetextension/4856.md) |  |
| 4857 | [INTELLIGENT CLOUD - AAC](../objects/permissionsetextension/4857.md) |  |

Source: [src/Apps/W1/AutomaticAccountCodes/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/AutomaticAccountCodes/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
