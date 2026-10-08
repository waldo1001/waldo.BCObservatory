---
id: app/bankaccrecwithai
type: app
title: BankAccRecWithAI
summary: "BankAccRecWithAI (Microsoft.Bank): 12 objects in BC29-30 (3 tables, 3 pages, 3 codeunits, 2 page extensions, 1 enum extension); no Learn hub documents its objects yet."
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
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1fb382ce063f32ad15f4c07e3382ebc74332283c8dbd62ed50d7014a7c82321f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/BankAccRecWithAI/app
    title: src/Apps/W1/BankAccRecWithAI/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/7250
    - object/table/7251
    - object/table/7252
    - object/page/7250
    - object/page/7251
    - object/page/7252
    - object/pageextension/7253
    - object/pageextension/7254
    - object/codeunit/7250
    - object/codeunit/7251
    - object/codeunit/7252
    - object/enumextension/7250
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: BankAccRecWithAI
namespace_root: Microsoft.Bank
present_in:
  - "29"
  - "30"
counts:
  objects: 12
  by_type:
    table: 3
    page: 3
    codeunit: 3
    pageextension: 2
    enumextension: 1
  hubs: 0
  videos: 0
  posts: 0
---

# BankAccRecWithAI

> BankAccRecWithAI (Microsoft.Bank): 12 objects in BC29-30 (3 tables, 3 pages, 3 codeunits, 2 page extensions, 1 enum extension); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/BankAccRecWithAI/app` · namespace `Microsoft.Bank` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## Objects

12 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 7250 | [Bank Acc. Rec. AI Proposal](../objects/table/7250.md) |  |
| 7251 | [Bank Acc. Rec. AI Prop. Buf.](../objects/table/7251.md) |  |
| 7252 | [Trans. to G/L Acc. Jnl. Batch](../objects/table/7252.md) |  |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 7250 | [Bank Acc. Rec. AI Proposal](../objects/page/7250.md) | Reconcile with Copilot |
| 7251 | [Bank Acc. Rec. AI Proposal Sub](../objects/page/7251.md) | Match Proposals |
| 7252 | [Trans. To GL Acc. AI Proposal](../objects/page/7252.md) | Copilot Proposals for Posting Differences to G/L Accounts |

### Page extensions (2)

| Id | Name | Caption |
|---|---|---|
| 7253 | [BankAccReconciliationExt](../objects/pageextension/7253.md) |  |
| 7254 | [BankAccReconciliationListExt](../objects/pageextension/7254.md) |  |

### Codeunits (3)

| Id | Name | Caption |
|---|---|---|
| 7250 | [Bank Rec. AI Matching Impl.](../objects/codeunit/7250.md) |  |
| 7251 | [Bank Acc. Rec. Trans. to Acc.](../objects/codeunit/7251.md) |  |
| 7252 | [Bank Acc. Rec. AI Install](../objects/codeunit/7252.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7250 | [Bank Rec. Copilot Capability](../objects/enumextension/7250.md) |  |

Source: [src/Apps/W1/BankAccRecWithAI/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/BankAccRecWithAI/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
