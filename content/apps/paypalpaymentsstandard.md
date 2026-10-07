---
id: app/paypalpaymentsstandard
type: app
title: PayPalPaymentsStandard
summary: "PayPalPaymentsStandard (Microsoft.Bank): 22 objects in BC29-30 (8 permission set extensions, 4 pages, 4 codeunits, 3 tables, 3 permission sets); documented by 1 Learn hub."
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
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 421d6702015f0ee2e2cce2b8bfd93309a456868f0f5960fc59067bcd57251ef6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/PayPalPaymentsStandard/app
    title: src/Apps/W1/PayPalPaymentsStandard/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1070
    - object/table/1071
    - object/table/1077
    - object/page/1070
    - object/page/1071
    - object/page/1073
    - object/page/1074
    - object/codeunit/1070
    - object/codeunit/1072
    - object/codeunit/1073
    - object/codeunit/1075
    - object/permissionset/45615
    - object/permissionset/45616
    - object/permissionset/45617
    - object/permissionsetextension/6558
    - object/permissionsetextension/6848
    - object/permissionsetextension/17957
    - object/permissionsetextension/20369
    - object/permissionsetextension/33975
    - object/permissionsetextension/44784
    - object/permissionsetextension/45614
    - object/permissionsetextension/48840
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: PayPalPaymentsStandard
namespace_root: Microsoft.Bank
present_in:
  - "29"
  - "30"
counts:
  objects: 22
  by_type:
    permissionsetextension: 8
    page: 4
    codeunit: 4
    table: 3
    permissionset: 3
  hubs: 1
  videos: 0
  posts: 0
---

# PayPalPaymentsStandard

> PayPalPaymentsStandard (Microsoft.Bank): 22 objects in BC29-30 (8 permission set extensions, 4 pages, 4 codeunits, 3 tables, 3 permission sets); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/PayPalPaymentsStandard/app` · namespace `Microsoft.Bank` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 6 objects

## Objects

22 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 1070 | [MS - PayPal Standard Account](../objects/table/1070.md) | PayPal Payments Standard Account |
| 1071 | [MS - PayPal Standard Template](../objects/table/1071.md) | PayPal Payments Standard Account Template |
| 1077 | [MS - PayPal Transaction](../objects/table/1077.md) |  |

### Pages (4)

| Id | Name | Caption |
|---|---|---|
| 1070 | [MS - PayPal Standard Setup](../objects/page/1070.md) | PayPal Payments Standard Setup |
| 1071 | [MS - PayPal Standard Template](../objects/page/1071.md) | PayPal Payments Standard Template |
| 1073 | [MS - PayPal Standard Accounts](../objects/page/1073.md) | PayPal Payments Standard Accounts |
| 1074 | [MS - PayPal Standard Settings](../objects/page/1074.md) | PayPal |

### Codeunits (4)

| Id | Name | Caption |
|---|---|---|
| 1070 | [MS - PayPal Standard Mgt.](../objects/codeunit/1070.md) |  |
| 1072 | [MS - PayPal Create Demo Data](../objects/codeunit/1072.md) |  |
| 1073 | [MS - PayPal Webhook Management](../objects/codeunit/1073.md) |  |
| 1075 | [MS - PayPal Transactions Mgt.](../objects/codeunit/1075.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 45615 | [PayPal - Edit](../objects/permissionset/45615.md) | PayPal Payments Standard - Edit |
| 45616 | [PayPal - Objects](../objects/permissionset/45616.md) | PayPal Payments Standard - Objects |
| 45617 | [PayPal - Read](../objects/permissionset/45617.md) | PayPal Payments Standard - Read |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 6558 | [D365 TEAM MEMBER - PayPal Payments Standard](../objects/permissionsetextension/6558.md) |  |
| 6848 | [D365 BASIC - PayPal Payments Standard](../objects/permissionsetextension/6848.md) |  |
| 17957 | [D365 BASIC ISV - PayPal Payments Standard](../objects/permissionsetextension/17957.md) |  |
| 20369 | [D365 BUS FULL ACCESS - PayPal Payments Standard](../objects/permissionsetextension/20369.md) |  |
| 33975 | [D365 BUS PREMIUM - PayPal Payments Standard](../objects/permissionsetextension/33975.md) |  |
| 44784 | [D365 READ - PayPal Payments Standard](../objects/permissionsetextension/44784.md) |  |
| 45614 | [INTELLIGENT CLOUD - PayPal Payments Standard](../objects/permissionsetextension/45614.md) |  |
| 48840 | [D365 FULL ACCESS - PayPal Payments Standard](../objects/permissionsetextension/48840.md) |  |

Source: [src/Apps/W1/PayPalPaymentsStandard/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/PayPalPaymentsStandard/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
