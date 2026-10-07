---
id: app/sendtoemailprinter
type: app
title: SendToEmailPrinter
summary: "SendToEmailPrinter: 18 objects in BC29-30 (8 permission set extensions, 3 permission sets, 2 codeunits, 1 table, 1 page, ...); documented by 5 Learn hubs."
tier: official
language: en
tags:
  - first-party app
  - development
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 45ea2db0094970474614148dc195841ed5dfedf943fa728ebe83e4e17e9dfc4f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/SendToEmailPrinter/app
    title: src/Apps/W1/SendToEmailPrinter/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/2650
    - object/page/2650
    - object/pageextension/2651
    - object/codeunit/2650
    - object/codeunit/2651
    - object/enum/2650
    - object/enumextension/2650
    - object/permissionset/5658
    - object/permissionset/5659
    - object/permissionset/5660
    - object/permissionsetextension/5650
    - object/permissionsetextension/5651
    - object/permissionsetextension/5652
    - object/permissionsetextension/5653
    - object/permissionsetextension/5654
    - object/permissionsetextension/5655
    - object/permissionsetextension/5656
    - object/permissionsetextension/5657
  features: []
  topics:
    - topic/business-central/development-and-administration/administration-tasks-in-business-central
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports
    - topic/business-central/get-started/get-productive-in-business-central/run-and-print-reports
    - topic/business-central/business-functionality/set-up-business-central/set-up-printers
    - topic/business-central/analytics-business-intelligence-and-repo/use-reports-in-daily-work
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SendToEmailPrinter
namespace_root: null
present_in:
  - "29"
  - "30"
counts:
  objects: 18
  by_type:
    permissionsetextension: 8
    permissionset: 3
    codeunit: 2
    table: 1
    page: 1
    pageextension: 1
    enum: 1
    enumextension: 1
  hubs: 5
  videos: 0
  posts: 0
---

# SendToEmailPrinter

> SendToEmailPrinter: 18 objects in BC29-30 (8 permission set extensions, 3 permission sets, 2 codeunits, 1 table, 1 page, ...); documented by 5 Learn hubs.

First-party app · folder `src/Apps/W1/SendToEmailPrinter/app` · BC29-30 · system development · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Administration tasks in Business Central](../topics/business-central/development-and-administration/administration-tasks-in-business-central.md) (Development and administration): 2 objects
- [How users work with reports](../topics/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports.md) (Development > Programming in the AL language > Developing reports): 2 objects
- [Run and print reports](../topics/business-central/get-started/get-productive-in-business-central/run-and-print-reports.md) (Get started > Get productive in Business Central): 2 objects
- [Set up printers](../topics/business-central/business-functionality/set-up-business-central/set-up-printers.md) (Business functionality > Set up Business Central): 2 objects
- [Use reports in daily work](../topics/business-central/analytics-business-intelligence-and-repo/use-reports-in-daily-work.md) (Analytics, business intelligence, and reporting): 2 objects

## Objects

18 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 2650 | [Email Printer Settings](../objects/table/2650.md) |  |

### Pages (1)

| Id | Name | Caption |
|---|---|---|
| 2650 | [Email Printer Settings](../objects/page/2650.md) |  |

### Page extensions (1)

| Id | Name | Caption |
|---|---|---|
| 2651 | [Email Printer Management](../objects/pageextension/2651.md) |  |

### Codeunits (2)

| Id | Name | Caption |
|---|---|---|
| 2650 | [Setup Printers](../objects/codeunit/2650.md) |  |
| 2651 | [Document Print Ready](../objects/codeunit/2651.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 2650 | [Email Printer Paper Unit](../objects/enum/2650.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 2650 | [Email Printer Scenario](../objects/enumextension/2650.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 5658 | [SendToEmailPrinter - Edit](../objects/permissionset/5658.md) |  |
| 5659 | [SendToEmailPrinter - Objects](../objects/permissionset/5659.md) |  |
| 5660 | [SendToEmailPrinter - Read](../objects/permissionset/5660.md) |  |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 5650 | [D365 BASIC ISV - Send To Email Printer](../objects/permissionsetextension/5650.md) |  |
| 5651 | [D365 BASIC - Send To Email Printer](../objects/permissionsetextension/5651.md) |  |
| 5652 | [D365 BUS FULL ACCESS - Send To Email Printer](../objects/permissionsetextension/5652.md) |  |
| 5653 | [D365 BUS PREMIUM - Send To Email Printer](../objects/permissionsetextension/5653.md) |  |
| 5654 | [D365 FULL ACCESS - Send To Email Printer](../objects/permissionsetextension/5654.md) |  |
| 5655 | [D365 READ - Send To Email Printer](../objects/permissionsetextension/5655.md) |  |
| 5656 | [D365 TEAM MEMBER - Send To Email Printer](../objects/permissionsetextension/5656.md) |  |
| 5657 | [INTELLIGENT CLOUD - Send To Email Printer](../objects/permissionsetextension/5657.md) |  |

Source: [src/Apps/W1/SendToEmailPrinter/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/SendToEmailPrinter/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
