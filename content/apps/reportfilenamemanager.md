---
id: app/reportfilenamemanager
type: app
title: ReportFilenameManager
summary: "ReportFilenameManager (Microsoft.Foundation): 49 objects in BC30 (17 codeunits, 11 pages, 7 enums, 6 tables, 3 page extensions, ...); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - platform
system: platform
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-28T10:46:30.808Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e5454582dbe6aa0c7c4191015f3fd1058ed2bb42b9a2ee5e40e2295b0e84fc52
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/ReportFilenameManager/app
    title: src/Apps/W1/ReportFilenameManager/app (main)
    date: null
    commit: d2abc1d2ceae394331716c8183ef60e1534c2ce0
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/8125
    - object/table/8127
    - object/table/8128
    - object/table/8129
    - object/table/8130
    - object/table/8131
    - object/tableextension/8125
    - object/page/8125
    - object/page/8126
    - object/page/8127
    - object/page/8128
    - object/page/8129
    - object/page/8130
    - object/page/8131
    - object/page/8132
    - object/page/8133
    - object/page/8134
    - object/page/8135
    - object/pageextension/8125
    - object/pageextension/8126
    - object/pageextension/8127
    - object/reportextension/8125
    - object/reportextension/8126
    - object/codeunit/8125
    - object/codeunit/8126
    - object/codeunit/8127
    - object/codeunit/8128
    - object/codeunit/8129
    - object/codeunit/8131
    - object/codeunit/8132
    - object/codeunit/8133
    - object/codeunit/8134
    - object/codeunit/8135
    - object/codeunit/8136
    - object/codeunit/8137
    - object/codeunit/8138
    - object/codeunit/8139
    - object/codeunit/8140
    - object/codeunit/8141
    - object/codeunit/8142
    - object/enum/8125
    - object/enum/8126
    - object/enum/8127
    - object/enum/8128
    - object/enum/8129
    - object/enum/8130
    - object/enum/8131
    - object/interface/report-filename-placeholder
    - object/permissionset/8125
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: ReportFilenameManager
namespace_root: Microsoft.Foundation
present_in:
  - "30"
counts:
  objects: 49
  by_type:
    codeunit: 17
    page: 11
    enum: 7
    table: 6
    pageextension: 3
    reportextension: 2
    tableextension: 1
    interface: 1
    permissionset: 1
  hubs: 0
  videos: 0
  posts: 0
---

# ReportFilenameManager

> ReportFilenameManager (Microsoft.Foundation): 49 objects in BC30 (17 codeunits, 11 pages, 7 enums, 6 tables, 3 page extensions, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/ReportFilenameManager/app` · namespace `Microsoft.Foundation` · BC30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

49 objects, by type.

### Tables (6)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Pattern](../objects/table/8125.md) |  |
| 8127 | [Report Filename Table Buffer](../objects/table/8127.md) |  |
| 8128 | [Report Filename Plh. Buffer](../objects/table/8128.md) | Report Filename Placeholder Buffer |
| 8129 | [Report Filename Record Buffer](../objects/table/8129.md) |  |
| 8130 | [Report Filename Setup](../objects/table/8130.md) |  |
| 8131 | [Report Filename Route Buffer](../objects/table/8131.md) |  |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Report Inbox](../objects/tableextension/8125.md) |  |

### Pages (11)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Patterns](../objects/page/8125.md) |  |
| 8126 | [Report Filename Pattern Card](../objects/page/8126.md) | Report Filename Pattern |
| 8127 | [Report Filename Preview](../objects/page/8127.md) | Example File Name |
| 8128 | [Report Filename Placeholders](../objects/page/8128.md) | Available Placeholders |
| 8129 | [Report Filename Report Lookup](../objects/page/8129.md) | Reports |
| 8130 | [Report Filename Table Lookup](../objects/page/8130.md) | Tables |
| 8131 | [Report Filename Field Lookup](../objects/page/8131.md) | Fields |
| 8132 | [Report Filename Test](../objects/page/8132.md) | Test Pattern |
| 8133 | [Report Filename Record Lookup](../objects/page/8133.md) | Choose a Record to Test Against |
| 8134 | [Report Filename Setup](../objects/page/8134.md) |  |
| 8135 | [Report Filename Routes](../objects/page/8135.md) | Output Routes |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Report Inbox](../objects/pageextension/8125.md) |  |
| 8126 | [Report Filename Inbox Part](../objects/pageextension/8126.md) |  |
| 8127 | [Report Filename Fin. Rep. Ov.](../objects/pageextension/8127.md) |  |

### Report extensions (2)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Acc. Schedule](../objects/reportextension/8125.md) |  |
| 8126 | [Report Filename Exp. Excel](../objects/reportextension/8126.md) |  |

### Codeunits (17)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Mgt.](../objects/codeunit/8125.md) |  |
| 8126 | [Report Filename Subscribers](../objects/codeunit/8126.md) |  |
| 8127 | [Report Filename Context](../objects/codeunit/8127.md) |  |
| 8128 | [Report Filename Preview Mgt.](../objects/codeunit/8128.md) |  |
| 8129 | [Report Filename Plh. Mgt.](../objects/codeunit/8129.md) |  |
| 8131 | [Report Filename Company Plh.](../objects/codeunit/8131.md) |  |
| 8132 | [Report Filename Created Plh.](../objects/codeunit/8132.md) |  |
| 8133 | [Report Filename User Plh.](../objects/codeunit/8133.md) |  |
| 8134 | [Report Filename Report Plh.](../objects/codeunit/8134.md) |  |
| 8135 | [Report Filename Total Plh.](../objects/codeunit/8135.md) |  |
| 8136 | [Report Filename Inbox Mgt.](../objects/codeunit/8136.md) |  |
| 8137 | [Report Filename Inbox Sub.](../objects/codeunit/8137.md) |  |
| 8138 | [Report Filename Fin. Rep. Sub.](../objects/codeunit/8138.md) |  |
| 8139 | [Report Filename Doc. Kind Plh.](../objects/codeunit/8139.md) |  |
| 8140 | [Report Filename Guided Exp.](../objects/codeunit/8140.md) |  |
| 8141 | [Report Filename Period Plh.](../objects/codeunit/8141.md) |  |
| 8142 | [Report Filename Excel Sub.](../objects/codeunit/8142.md) |  |

### Enums (7)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Output Route](../objects/enum/8125.md) |  |
| 8126 | [Report Filename Date Format](../objects/enum/8126.md) |  |
| 8127 | [Report Filename Plh. Source](../objects/enum/8127.md) | Report Filename Placeholder Source |
| 8128 | [Report Filename Placeholder](../objects/enum/8128.md) |  |
| 8129 | [Report Filename Run Scope](../objects/enum/8129.md) |  |
| 8130 | [Report Filename Criterion](../objects/enum/8130.md) |  |
| 8131 | [Report Filename Refusal](../objects/enum/8131.md) |  |

### Interfaces (1)

| Id | Name | Caption |
|---|---|---|
|  | [Report Filename Placeholder](../objects/interface/report-filename-placeholder.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 8125 | [Report Filename Mgr.](../objects/permissionset/8125.md) | Report Filename Manager |

Source: [src/Apps/W1/ReportFilenameManager/app](https://github.com/microsoft/BCApps/tree/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/ReportFilenameManager/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
