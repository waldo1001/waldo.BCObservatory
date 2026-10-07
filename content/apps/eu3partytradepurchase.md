---
id: app/eu3partytradepurchase
type: app
title: EU3PartyTradePurchase
summary: "EU3PartyTradePurchase (Microsoft.Finance): 25 objects in BC29-30 (11 page extensions, 7 codeunits, 5 table extensions, 1 enum, 1 permission set); no Learn hub documents its objects yet."
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
  input_hash: eb1f6459fdd3de7964b545b14b0600a0f4168f814be1d79525c898c014d31eb2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/EU3PartyTradePurchase/app
    title: src/Apps/W1/EU3PartyTradePurchase/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/tableextension/4881
    - object/tableextension/4882
    - object/tableextension/4883
    - object/tableextension/4884
    - object/tableextension/4886
    - object/pageextension/4881
    - object/pageextension/4882
    - object/pageextension/4883
    - object/pageextension/4884
    - object/pageextension/4885
    - object/pageextension/4886
    - object/pageextension/4887
    - object/pageextension/4888
    - object/pageextension/4889
    - object/pageextension/4890
    - object/pageextension/4891
    - object/codeunit/4881
    - object/codeunit/4882
    - object/codeunit/4883
    - object/codeunit/4884
    - object/codeunit/4885
    - object/codeunit/4888
    - object/codeunit/4889
    - object/enum/4881
    - object/permissionset/4880
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: EU3PartyTradePurchase
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 25
  by_type:
    pageextension: 11
    codeunit: 7
    tableextension: 5
    enum: 1
    permissionset: 1
  hubs: 0
  videos: 0
  posts: 0
---

# EU3PartyTradePurchase

> EU3PartyTradePurchase (Microsoft.Finance): 25 objects in BC29-30 (11 page extensions, 7 codeunits, 5 table extensions, 1 enum, 1 permission set); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/EU3PartyTradePurchase/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## Objects

25 objects, by type.

### Table extensions (5)

| Id | Name | Caption |
|---|---|---|
| 4881 | [EU3 VAT Statement Line](../objects/tableextension/4881.md) |  |
| 4882 | [EU3 Purch. Cr. Memo Hdr.](../objects/tableextension/4882.md) |  |
| 4883 | [EU3 Purch. Inv. Header](../objects/tableextension/4883.md) |  |
| 4884 | [EU3 Purchase Header](../objects/tableextension/4884.md) |  |
| 4886 | [EU3 VAT Setup](../objects/tableextension/4886.md) |  |

### Page extensions (11)

| Id | Name | Caption |
|---|---|---|
| 4881 | [EU3 VAT Statement](../objects/pageextension/4881.md) |  |
| 4882 | [EU3 VAT Stat. Prev. Line](../objects/pageextension/4882.md) |  |
| 4883 | [EU3 Blanket Purch. Order](../objects/pageextension/4883.md) |  |
| 4884 | [EU3 Posted Purch. Invoice](../objects/pageextension/4884.md) |  |
| 4885 | [EU3 Purch. Cr. Memo](../objects/pageextension/4885.md) |  |
| 4886 | [EU3 Purch. Invoice](../objects/pageextension/4886.md) |  |
| 4887 | [EU3 Purch. Order](../objects/pageextension/4887.md) |  |
| 4888 | [EU3 Purch. Quote](../objects/pageextension/4888.md) |  |
| 4889 | [EU3 Purch. Return Order](../objects/pageextension/4889.md) |  |
| 4890 | [EU3 Posted Purch. Cr. Memo](../objects/pageextension/4890.md) |  |
| 4891 | [EU3 VAT Setup](../objects/pageextension/4891.md) |  |

### Codeunits (7)

| Id | Name | Caption |
|---|---|---|
| 4881 | [EU3 Party Trade Feature Mgt.](../objects/codeunit/4881.md) |  |
| 4882 | [EU3 Req. Wksh. Subscribers](../objects/codeunit/4882.md) |  |
| 4883 | [EU3 Gen. Jnl. Subscribers](../objects/codeunit/4883.md) |  |
| 4884 | [EU3 Purch.-Get Drop Shpt Sbscr](../objects/codeunit/4884.md) |  |
| 4885 | [EU3 VAT Stat. Subscribers](../objects/codeunit/4885.md) |  |
| 4888 | [Upgrade EU3 Party Purchase](../objects/codeunit/4888.md) |  |
| 4889 | [Upg. Tag Def. EU3 Party Purch.](../objects/codeunit/4889.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4881 | [EU3 Party Trade Filter](../objects/enum/4881.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 4880 | [EU3PartyTrade - Objects](../objects/permissionset/4880.md) |  |

Source: [src/Apps/W1/EU3PartyTradePurchase/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/EU3PartyTradePurchase/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
