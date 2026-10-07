---
id: app/microsoftuniversalprint
type: app
title: MicrosoftUniversalPrint
summary: "MicrosoftUniversalPrint (System.Device): 24 objects in BC29-30 (8 permission set extensions, 4 pages, 4 permission sets, 3 codeunits, 2 tables, ...); documented by 5 Learn hubs."
tier: official
language: en
tags:
  - first-party app
  - platform
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:10:59.019Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e7b65e7ec9c0eace6ce0cb48820d17a867d3ad20f9b3e1775dd0490ae5b5b71e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/MicrosoftUniversalPrint/app
    title: src/Apps/W1/MicrosoftUniversalPrint/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/2751
    - object/table/2752
    - object/page/2750
    - object/page/2752
    - object/page/2753
    - object/page/2754
    - object/pageextension/2751
    - object/codeunit/2750
    - object/codeunit/2751
    - object/codeunit/2752
    - object/enum/2750
    - object/enum/2751
    - object/permissionset/2752
    - object/permissionset/2757
    - object/permissionset/2758
    - object/permissionset/2759
    - object/permissionsetextension/2750
    - object/permissionsetextension/2751
    - object/permissionsetextension/2752
    - object/permissionsetextension/2753
    - object/permissionsetextension/2754
    - object/permissionsetextension/2755
    - object/permissionsetextension/2756
    - object/permissionsetextension/2757
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
app: MicrosoftUniversalPrint
namespace_root: System.Device
present_in:
  - "29"
  - "30"
counts:
  objects: 24
  by_type:
    permissionsetextension: 8
    page: 4
    permissionset: 4
    codeunit: 3
    table: 2
    enum: 2
    pageextension: 1
  hubs: 5
  videos: 0
  posts: 0
---

# MicrosoftUniversalPrint

> MicrosoftUniversalPrint (System.Device): 24 objects in BC29-30 (8 permission set extensions, 4 pages, 4 permission sets, 3 codeunits, 2 tables, ...); documented by 5 Learn hubs.

First-party app · folder `src/Apps/W1/MicrosoftUniversalPrint/app` · namespace `System.Device` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Administration tasks in Business Central](../topics/business-central/development-and-administration/administration-tasks-in-business-central.md) (Development and administration): 6 objects
- [How users work with reports](../topics/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports.md) (Development > Programming in the AL language > Developing reports): 6 objects
- [Run and print reports](../topics/business-central/get-started/get-productive-in-business-central/run-and-print-reports.md) (Get started > Get productive in Business Central): 6 objects
- [Set up printers](../topics/business-central/business-functionality/set-up-business-central/set-up-printers.md) (Business functionality > Set up Business Central): 6 objects
- [Use reports in daily work](../topics/business-central/analytics-business-intelligence-and-repo/use-reports-in-daily-work.md) (Analytics, business intelligence, and reporting): 6 objects

## Objects

24 objects, by type.

### Tables (2)

| Id | Name | Caption |
|---|---|---|
| 2751 | [Universal Printer Settings](../objects/table/2751.md) |  |
| 2752 | [Universal Print Share Buffer](../objects/table/2752.md) |  |

### Pages (4)

| Id | Name | Caption |
|---|---|---|
| 2750 | [Universal Printer Settings](../objects/page/2750.md) |  |
| 2752 | [Add Universal Printers Wizard](../objects/page/2752.md) | Add Universal Print Printers |
| 2753 | [Universal Print Shares List](../objects/page/2753.md) | Print Shares |
| 2754 | [Universal Printer Tray List](../objects/page/2754.md) | Universal Printer Trays |

### Page extensions (1)

| Id | Name | Caption |
|---|---|---|
| 2751 | [Universal Printer Management](../objects/pageextension/2751.md) |  |

### Codeunits (3)

| Id | Name | Caption |
|---|---|---|
| 2750 | [Universal Printer Setup](../objects/codeunit/2750.md) |  |
| 2751 | [Universal Print Document Ready](../objects/codeunit/2751.md) |  |
| 2752 | [Universal Print Graph Helper](../objects/codeunit/2752.md) |  |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 2750 | [Universal Printer Paper Unit](../objects/enum/2750.md) |  |
| 2751 | [Universal Printer Orientation](../objects/enum/2751.md) |  |

### Permission sets (4)

| Id | Name | Caption |
|---|---|---|
| 2752 | [UniversalPrint - Objects](../objects/permissionset/2752.md) | Microsoft Universal Print - Objects |
| 2757 | [UniversalPrint - Edit](../objects/permissionset/2757.md) | MicrosoftUniversalPrint - Edit |
| 2758 | [MS Universal Print - Admin](../objects/permissionset/2758.md) |  |
| 2759 | [UniversalPrint - Read](../objects/permissionset/2759.md) | Microsoft Universal Print - Read |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 2750 | [D365 BASIC ISV - Microsoft Universal Print](../objects/permissionsetextension/2750.md) |  |
| 2751 | [D365 BASIC - Microsoft Universal Print](../objects/permissionsetextension/2751.md) |  |
| 2752 | [D365 BUS FULL ACCESS - Microsoft Universal Print](../objects/permissionsetextension/2752.md) |  |
| 2753 | [D365 BUS PREMIUM - Microsoft Universal Print](../objects/permissionsetextension/2753.md) |  |
| 2754 | [D365 FULL ACCESS - Microsoft Universal Print](../objects/permissionsetextension/2754.md) |  |
| 2755 | [D365 READ - Microsoft Universal Print](../objects/permissionsetextension/2755.md) |  |
| 2756 | [D365 TEAM MEMBER - Microsoft Universal Print](../objects/permissionsetextension/2756.md) |  |
| 2757 | [INTELLIGENT CLOUD - Microsoft Universal Print](../objects/permissionsetextension/2757.md) |  |

Source: [src/Apps/W1/MicrosoftUniversalPrint/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/MicrosoftUniversalPrint/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
