---
id: app/uksendremittanceadvice
type: app
title: UKSendRemittanceAdvice
summary: "UKSendRemittanceAdvice (Microsoft.Purchases): 4 objects in BC29-30 (2 page extensions, 1 codeunit, 1 permission set); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - purchasing
system: purchasing
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-19T01:07:00.885Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: aebf0ed6d3ea1056a1a23e1cadc3957cc106cff9c4f2ff4e17a3f888ac4208bf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/eb2bfe5258a473c969a6b85cdc98ce8524408706/src/Apps/W1/UKSendRemittanceAdvice/app
    title: src/Apps/W1/UKSendRemittanceAdvice/app (main)
    date: null
    commit: eb2bfe5258a473c969a6b85cdc98ce8524408706
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/pageextension/4022
    - object/pageextension/4023
    - object/codeunit/4031
    - object/permissionset/4022
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: UKSendRemittanceAdvice
namespace_root: Microsoft.Purchases
present_in:
  - "29"
  - "30"
counts:
  objects: 4
  by_type:
    pageextension: 2
    codeunit: 1
    permissionset: 1
  hubs: 0
  videos: 0
  posts: 0
---

# UKSendRemittanceAdvice

> UKSendRemittanceAdvice (Microsoft.Purchases): 4 objects in BC29-30 (2 page extensions, 1 codeunit, 1 permission set); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/UKSendRemittanceAdvice/app` · namespace `Microsoft.Purchases` · BC29-30 · system purchasing · facts from the code pillar and the joins, nothing machine-written

## Objects

4 objects, by type.

### Page extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4022 | [SendPmtJnlRemitAdvice](../objects/pageextension/4022.md) |  |
| 4023 | [SendVendLedgerEntryRemitAdvice](../objects/pageextension/4023.md) |  |

### Codeunits (1)

| Id | Name | Caption |
|---|---|---|
| 4031 | [SetupRemittanceReports](../objects/codeunit/4031.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 4022 | [UKSRA - Objects](../objects/permissionset/4022.md) | UK Send Remittance Advice - Objects |

Source: [src/Apps/W1/UKSendRemittanceAdvice/app](https://github.com/microsoft/BCApps/tree/eb2bfe5258a473c969a6b85cdc98ce8524408706/src/Apps/W1/UKSendRemittanceAdvice/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
