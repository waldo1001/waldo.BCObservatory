---
id: app/reviewglentries
type: app
title: ReviewGLEntries
summary: "ReviewGLEntries (Microsoft.Finance): 29 objects in BC29-30 (8 permission set extensions, 4 permission sets, 3 tables, 3 pages, 3 page extensions, ...); documented by 1 Learn hub."
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
  input_hash: 548c698e23bc0c68cf83114312e3f25c354355c929c9f03423b292b48bbb1044
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/ReviewGLEntries/app
    title: src/Apps/W1/ReviewGLEntries/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/22216
    - object/table/22217
    - object/table/22218
    - object/tableextension/22210
    - object/tableextension/22211
    - object/page/22206
    - object/page/22207
    - object/page/22208
    - object/pageextension/22204
    - object/pageextension/22205
    - object/pageextension/22220
    - object/codeunit/22200
    - object/codeunit/22201
    - object/enum/22201
    - object/enum/22202
    - object/enum/22203
    - object/interface/g-l-entry-reviewer
    - object/permissionset/22217
    - object/permissionset/22218
    - object/permissionset/22219
    - object/permissionset/22220
    - object/permissionsetextension/22212
    - object/permissionsetextension/22213
    - object/permissionsetextension/22214
    - object/permissionsetextension/22215
    - object/permissionsetextension/22216
    - object/permissionsetextension/22217
    - object/permissionsetextension/22218
    - object/permissionsetextension/22219
  features: []
  topics:
    - topic/business-central/business-functionality/finance/work-with-the-chart-of-accounts-and-gene
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: ReviewGLEntries
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 29
  by_type:
    permissionsetextension: 8
    permissionset: 4
    table: 3
    page: 3
    pageextension: 3
    enum: 3
    tableextension: 2
    codeunit: 2
    interface: 1
  hubs: 1
  videos: 0
  posts: 0
---

# ReviewGLEntries

> ReviewGLEntries (Microsoft.Finance): 29 objects in BC29-30 (8 permission set extensions, 4 permission sets, 3 tables, 3 pages, 3 page extensions, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/ReviewGLEntries/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Work with the chart of accounts and general ledger (G/L)](../topics/business-central/business-functionality/finance/work-with-the-chart-of-accounts-and-gene.md) (Business functionality > Finance): 1 object

## Objects

29 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 22216 | [G/L Entry Review Entry](../objects/table/22216.md) |  |
| 22217 | [G/L Entry Review Setup](../objects/table/22217.md) |  |
| 22218 | [G/L Entry Review Log](../objects/table/22218.md) |  |

### Table extensions (2)

| Id | Name | Caption |
|---|---|---|
| 22210 | [G/L Account Review Policy](../objects/tableextension/22210.md) |  |
| 22211 | [G/L Entry Review](../objects/tableextension/22211.md) |  |

### Pages (3)

| Id | Name | Caption |
|---|---|---|
| 22206 | [G/L Entry Review Setup](../objects/page/22206.md) |  |
| 22207 | [Review G/L Entries](../objects/page/22207.md) |  |
| 22208 | [Reviewed G/L Entries](../objects/page/22208.md) |  |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 22204 | [General Ledger Entries Review](../objects/pageextension/22204.md) |  |
| 22205 | [G/L Account Card Review Option](../objects/pageextension/22205.md) |  |
| 22220 | [Chart of Accounts Review](../objects/pageextension/22220.md) |  |

### Codeunits (2)

| Id | Name | Caption |
|---|---|---|
| 22200 | [Review G/L Entry](../objects/codeunit/22200.md) |  |
| 22201 | [Upgrade](../objects/codeunit/22201.md) |  |

### Enums (3)

| Id | Name | Caption |
|---|---|---|
| 22201 | [G/L Account Review Policy](../objects/enum/22201.md) |  |
| 22202 | [G/L Entry Reviewer](../objects/enum/22202.md) |  |
| 22203 | [Review Policy Type](../objects/enum/22203.md) |  |

### Interfaces (1)

| Id | Name | Caption |
|---|---|---|
|  | [G/L Entry Reviewer](../objects/interface/g-l-entry-reviewer.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 22217 | [D365 GL Review](../objects/permissionset/22217.md) |  |
| 22218 | [Review G/L Entries - Objects](../objects/permissionset/22218.md) |  |
| 22219 | [Review G/L Entries - Read](../objects/permissionset/22219.md) |  |
| 22220 | [Review G/L Entries - View](../objects/permissionset/22220.md) |  |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 22212 | [INTELLIGENT CLOUD - Review G/L Entries](../objects/permissionsetextension/22212.md) |  |
| 22213 | [D365 TEAM MEMBER - Review G/L Entries](../objects/permissionsetextension/22213.md) |  |
| 22214 | [D365 READ - Review G/L Entries](../objects/permissionsetextension/22214.md) |  |
| 22215 | [D365 FULL ACCESS - Review G/L Entries](../objects/permissionsetextension/22215.md) |  |
| 22216 | [D365 BUS PREMIUM - Review G/L Entries](../objects/permissionsetextension/22216.md) |  |
| 22217 | [D365 BUS FULL ACCESS - Review G/L Entries](../objects/permissionsetextension/22217.md) |  |
| 22218 | [D365 BASIC - Review G/L Entries](../objects/permissionsetextension/22218.md) |  |
| 22219 | [D365 BASIC ISV - Review G/L Entries](../objects/permissionsetextension/22219.md) |  |

Source: [src/Apps/W1/ReviewGLEntries/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/ReviewGLEntries/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
