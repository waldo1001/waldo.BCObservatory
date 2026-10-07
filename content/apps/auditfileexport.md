---
id: app/auditfileexport
type: app
title: AuditFileExport
summary: "AuditFileExport (Microsoft.Finance): 48 objects in BC29-30 (12 pages, 10 tables, 8 codeunits, 6 enums, 6 permission set extensions, ...); documented by 4 Learn hubs; 2 videos."
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
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3b7e378a72e3840e2978be0857f547cfebdfd7a9f9bb9842ced6078c2c479702
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/AuditFileExport/app
    title: src/Apps/W1/AuditFileExport/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/5260
    - object/table/5261
    - object/table/5262
    - object/table/5263
    - object/table/5264
    - object/table/5265
    - object/table/5266
    - object/table/5267
    - object/table/5268
    - object/table/5269
    - object/page/5260
    - object/page/5262
    - object/page/5263
    - object/page/5264
    - object/page/5265
    - object/page/5266
    - object/page/5267
    - object/page/5268
    - object/page/5269
    - object/page/5270
    - object/page/5271
    - object/page/5272
    - object/report/5260
    - object/codeunit/5260
    - object/codeunit/5261
    - object/codeunit/5262
    - object/codeunit/5263
    - object/codeunit/5264
    - object/codeunit/5265
    - object/codeunit/5266
    - object/codeunit/5267
    - object/enum/5260
    - object/enum/5261
    - object/enum/5262
    - object/enum/5263
    - object/enum/5264
    - object/enum/5265
    - object/interface/audit-file-export-data-check
    - object/interface/audit-file-export-data-handling
    - object/permissionset/5260
    - object/permissionset/5261
    - object/permissionset/5262
    - object/permissionsetextension/5260
    - object/permissionsetextension/5261
    - object/permissionsetextension/5262
    - object/permissionsetextension/5263
    - object/permissionsetextension/5264
    - object/permissionsetextension/5265
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/austria/general
    - topic/business-central/business-functionality/local-functionality/iceland/general
    - topic/business-central/business-functionality/finance/work-with-the-chart-of-accounts-and-gene
    - topic/business-central/business-functionality/local-functionality/denmark/auditing
  localizations: []
  videos:
    - video/hcu7T3qLdDA
    - video/205F8ljmInU
  posts: []
  guidelines: []
app: AuditFileExport
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 48
  by_type:
    page: 12
    table: 10
    codeunit: 8
    enum: 6
    permissionsetextension: 6
    permissionset: 3
    interface: 2
    report: 1
  hubs: 4
  videos: 2
  posts: 0
---

# AuditFileExport

> AuditFileExport (Microsoft.Finance): 48 objects in BC29-30 (12 pages, 10 tables, 8 codeunits, 6 enums, 6 permission set extensions, ...); documented by 4 Learn hubs; 2 videos.

First-party app · folder `src/Apps/W1/AuditFileExport/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [General](../topics/business-central/business-functionality/local-functionality/austria/general.md) (Business functionality > Local functionality > Austria): 9 objects
- [General](../topics/business-central/business-functionality/local-functionality/iceland/general.md) (Business functionality > Local functionality > Iceland): 9 objects
- [Work with the chart of accounts and general ledger (G/L)](../topics/business-central/business-functionality/finance/work-with-the-chart-of-accounts-and-gene.md) (Business functionality > Finance): 9 objects
- [Auditing](../topics/business-central/business-functionality/local-functionality/denmark/auditing.md) (Business functionality > Local functionality > Denmark): 7 objects

## Objects

48 objects, by type.

### Tables (10)

| Id | Name | Caption |
|---|---|---|
| 5260 | [G/L Account Mapping Header](../objects/table/5260.md) | G/L Account Mapping |
| 5261 | [G/L Account Mapping Line](../objects/table/5261.md) |  |
| 5262 | [Standard Account Category](../objects/table/5262.md) |  |
| 5263 | [Standard Account](../objects/table/5263.md) |  |
| 5264 | [Audit File Export Setup](../objects/table/5264.md) |  |
| 5265 | [Audit File Export Header](../objects/table/5265.md) |  |
| 5266 | [Audit File Export Line](../objects/table/5266.md) |  |
| 5267 | [Audit File](../objects/table/5267.md) |  |
| 5268 | [Audit File Export Format Setup](../objects/table/5268.md) |  |
| 5269 | [Audit Export Data Type Setup](../objects/table/5269.md) |  |

### Pages (12)

| Id | Name | Caption |
|---|---|---|
| 5260 | [G/L Account Mapping](../objects/page/5260.md) |  |
| 5262 | [G/L Account Mapping Subpage](../objects/page/5262.md) | Lines |
| 5263 | [Standard Accounts](../objects/page/5263.md) |  |
| 5264 | [Audit File Export Setup](../objects/page/5264.md) |  |
| 5265 | [Standard Account Categories](../objects/page/5265.md) |  |
| 5266 | [Audit File Export Documents](../objects/page/5266.md) |  |
| 5267 | [Audit File Export Doc. Card](../objects/page/5267.md) | Audit File Export Document |
| 5268 | [Audit Files](../objects/page/5268.md) |  |
| 5269 | [Audit File Export Subpage](../objects/page/5269.md) | Lines |
| 5270 | [Audit File Export Format Setup](../objects/page/5270.md) |  |
| 5271 | [Audit Export Data Type Setup](../objects/page/5271.md) |  |
| 5272 | [G/L Acc. Mapping Card](../objects/page/5272.md) | G/L Account Mapping |

### Reports (1)

| Id | Name | Caption |
|---|---|---|
| 5260 | [Copy G/L Account Mapping](../objects/report/5260.md) |  |

### Codeunits (8)

| Id | Name | Caption |
|---|---|---|
| 5260 | [Audit Mapping Helper](../objects/codeunit/5260.md) |  |
| 5261 | [Audit File Export Mgt.](../objects/codeunit/5261.md) |  |
| 5262 | [Import Audit Data Mgt.](../objects/codeunit/5262.md) |  |
| 5263 | [Audit File Export Error Handl.](../objects/codeunit/5263.md) |  |
| 5264 | [Install Audit File Export](../objects/codeunit/5264.md) |  |
| 5265 | [Audit Line Export Runner](../objects/codeunit/5265.md) |  |
| 5266 | [Audit File Data Handling](../objects/codeunit/5266.md) |  |
| 5267 | [Audit File Data Check](../objects/codeunit/5267.md) |  |

### Enums (6)

| Id | Name | Caption |
|---|---|---|
| 5260 | [Standard Account Type](../objects/enum/5260.md) |  |
| 5261 | [G/L Acc. Mapping Period Type](../objects/enum/5261.md) |  |
| 5262 | [Audit File Export Format](../objects/enum/5262.md) |  |
| 5263 | [Audit Data Check Status](../objects/enum/5263.md) |  |
| 5264 | [Audit File Export Data Type](../objects/enum/5264.md) |  |
| 5265 | [Audit File Export Data Class](../objects/enum/5265.md) |  |

### Interfaces (2)

| Id | Name | Caption |
|---|---|---|
|  | [Audit File Export Data Check](../objects/interface/audit-file-export-data-check.md) |  |
|  | [Audit File Export Data Handling](../objects/interface/audit-file-export-data-handling.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 5260 | [Audit Export - Read](../objects/permissionset/5260.md) |  |
| 5261 | [Audit Export - Edit](../objects/permissionset/5261.md) |  |
| 5262 | [Audit Export - Objects](../objects/permissionset/5262.md) |  |

### Permission set extensions (6)

| Id | Name | Caption |
|---|---|---|
| 5260 | [D365 BASIC - Audit Export](../objects/permissionsetextension/5260.md) |  |
| 5261 | [D365 BASIC ISV - Audit Export](../objects/permissionsetextension/5261.md) |  |
| 5262 | [D365 READ - Audit Export](../objects/permissionsetextension/5262.md) |  |
| 5263 | [D365 TEAM MEMBER - Audit Exp.](../objects/permissionsetextension/5263.md) |  |
| 5264 | [INTELLIGENT CLOUD - Audit Exp.](../objects/permissionsetextension/5264.md) |  |
| 5265 | [LOCAL - Audit Export](../objects/permissionsetextension/5265.md) |  |

## Videos and posts

Videos and posts that name this app's objects by exact type and name.

- [What's New: The Danish Bookkeeping Act (2024 release wave 1)](../videos/hcu7T3qLdDA.md) (video, 2024-04-04): names Page 5266 "Audit File Export Documents"
- [What's New: The Danish Bookkeeping Act (2023 release wave 2)](../videos/205F8ljmInU.md) (video, 2023-12-11): names Page 5260 "G/L Account Mapping"

Source: [src/Apps/W1/AuditFileExport/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/AuditFileExport/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
