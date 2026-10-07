---
id: app/excelreports
type: app
title: ExcelReports
summary: "ExcelReports (Microsoft.Finance): 70 objects in BC29-30 (36 page extensions, 12 reports, 7 queries, 5 codeunits, 5 permission set extensions, ...); documented by 8 Learn hubs."
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
  input_hash: b0d0d0a0bc2c442b2699fd870dd243fee2a870d85ac4f71635f1d3f1de4bdd86
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/ExcelReports/app
    title: src/Apps/W1/ExcelReports/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4401
    - object/table/4402
    - object/table/4404
    - object/table/4405
    - object/pageextension/4401
    - object/pageextension/4402
    - object/pageextension/4403
    - object/pageextension/4405
    - object/pageextension/4406
    - object/pageextension/4407
    - object/pageextension/4408
    - object/pageextension/4412
    - object/pageextension/4414
    - object/pageextension/4415
    - object/pageextension/4416
    - object/pageextension/4417
    - object/pageextension/4418
    - object/pageextension/4419
    - object/pageextension/4420
    - object/pageextension/4421
    - object/pageextension/4422
    - object/pageextension/4423
    - object/pageextension/4425
    - object/pageextension/4426
    - object/pageextension/4427
    - object/pageextension/4428
    - object/pageextension/4429
    - object/pageextension/4430
    - object/pageextension/4431
    - object/pageextension/4432
    - object/pageextension/4433
    - object/pageextension/4434
    - object/pageextension/4435
    - object/pageextension/4436
    - object/pageextension/4437
    - object/pageextension/4438
    - object/pageextension/4439
    - object/pageextension/4440
    - object/pageextension/4441
    - object/pageextension/4442
    - object/report/4402
    - object/report/4403
    - object/report/4404
    - object/report/4405
    - object/report/4406
    - object/report/4407
    - object/report/4408
    - object/report/4409
    - object/report/4410
    - object/report/4411
    - object/report/4412
    - object/report/4413
    - object/codeunit/4404
    - object/codeunit/4405
    - object/codeunit/4406
    - object/codeunit/4410
    - object/codeunit/4412
    - object/query/4401
    - object/query/4402
    - object/query/4403
    - object/query/4404
    - object/query/4405
    - object/query/4406
    - object/query/4407
    - object/permissionset/4401
    - object/permissionsetextension/4400
    - object/permissionsetextension/4401
    - object/permissionsetextension/4402
    - object/permissionsetextension/4403
    - object/permissionsetextension/4404
  features: []
  topics:
    - topic/business-central/business-functionality/finance/financial-analytics/built-in-finance-reports
    - topic/business-central/business-functionality/fixed-assets/fixed-assets-analytics/fixed-assets-reports
    - topic/business-central/business-functionality/purchasing/purchasing-analytics/built-in-purchasing-reports
    - topic/business-central/business-functionality/sales/sales-analytics/built-in-sales-reports
    - topic/business-central/business-functionality/finance/accounting-for-costs
    - topic/business-central/business-functionality/finance/multi-site-and-international-organizatio/consolidate-financial-data-from-multiple
    - topic/business-central/analytics-business-intelligence-and-repo/built-in-reports/finance
    - topic/business-central/business-functionality/finance/financial-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: ExcelReports
namespace_root: Microsoft.Finance
present_in:
  - "29"
  - "30"
counts:
  objects: 70
  by_type:
    pageextension: 36
    report: 12
    query: 7
    codeunit: 5
    permissionsetextension: 5
    table: 4
    permissionset: 1
  hubs: 8
  videos: 0
  posts: 0
---

# ExcelReports

> ExcelReports (Microsoft.Finance): 70 objects in BC29-30 (36 page extensions, 12 reports, 7 queries, 5 codeunits, 5 permission set extensions, ...); documented by 8 Learn hubs.

First-party app · folder `src/Apps/W1/ExcelReports/app` · namespace `Microsoft.Finance` · BC29-30 · system finance · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Built-in finance reports](../topics/business-central/business-functionality/finance/financial-analytics/built-in-finance-reports.md) (Business functionality > Finance > Financial analytics): 7 objects
- [Fixed assets reports](../topics/business-central/business-functionality/fixed-assets/fixed-assets-analytics/fixed-assets-reports.md) (Business functionality > Fixed assets > Fixed assets analytics): 3 objects
- [Built-in purchasing reports](../topics/business-central/business-functionality/purchasing/purchasing-analytics/built-in-purchasing-reports.md) (Business functionality > Purchasing > Purchasing analytics): 2 objects
- [Built-in sales reports](../topics/business-central/business-functionality/sales/sales-analytics/built-in-sales-reports.md) (Business functionality > Sales > Sales analytics): 2 objects
- [Accounting for costs](../topics/business-central/business-functionality/finance/accounting-for-costs.md) (Business functionality > Finance): 1 object
- [Consolidate financial data from multiple companies](../topics/business-central/business-functionality/finance/multi-site-and-international-organizatio/consolidate-financial-data-from-multiple.md) (Business functionality > Finance > Multi-site and international organizations): 1 object
- [Finance](../topics/business-central/analytics-business-intelligence-and-repo/built-in-reports/finance.md) (Analytics, business intelligence, and reporting > Built-in reports): 1 object
- [Financial analytics](../topics/business-central/business-functionality/finance/financial-analytics.md) (Business functionality > Finance): 1 object

## Objects

70 objects, by type.

### Tables (4)

| Id | Name | Caption |
|---|---|---|
| 4401 | [EXR Aging Report Buffer](../objects/table/4401.md) | Aging Report Buffer |
| 4402 | [EXR Trial Balance Buffer](../objects/table/4402.md) | Trial Balance Buffer |
| 4404 | [EXR Top Vendor Report Buffer](../objects/table/4404.md) | Top Vendor Data |
| 4405 | [EXR Top Customer Report Buffer](../objects/table/4405.md) | Top Customer Data |

### Page extensions (36)

| Id | Name | Caption |
|---|---|---|
| 4401 | [EXR Accountant Role Center](../objects/pageextension/4401.md) |  |
| 4402 | [EXT Bus. Manager Role Center](../objects/pageextension/4402.md) |  |
| 4403 | [EXT Company Detail](../objects/pageextension/4403.md) |  |
| 4405 | [EXRARRoleCenter](../objects/pageextension/4405.md) |  |
| 4406 | [EXRFinRoleCenter](../objects/pageextension/4406.md) |  |
| 4407 | [Fixed Asset List](../objects/pageextension/4407.md) |  |
| 4408 | [Business Unit List](../objects/pageextension/4408.md) |  |
| 4412 | [EXR Order Processor RC](../objects/pageextension/4412.md) |  |
| 4414 | [EXR Sales Invoice List](../objects/pageextension/4414.md) |  |
| 4415 | [EXR Sales Manager RC](../objects/pageextension/4415.md) |  |
| 4416 | [EXR Sales & Marketing Mgr. RC](../objects/pageextension/4416.md) |  |
| 4417 | [EXR Sales & Rel. Mgr. RC](../objects/pageextension/4417.md) |  |
| 4418 | [EXR Vendor List](../objects/pageextension/4418.md) |  |
| 4419 | [EXR Purchase Credit Memos](../objects/pageextension/4419.md) |  |
| 4420 | [EXR Purchasing Manager RC](../objects/pageextension/4420.md) |  |
| 4421 | [EXR Purchasing Agent RC](../objects/pageextension/4421.md) |  |
| 4422 | [EXR Fixed Asset Card](../objects/pageextension/4422.md) |  |
| 4423 | [EXR Accounting Manager RC](../objects/pageextension/4423.md) |  |
| 4425 | [EXR Accounting Periods](../objects/pageextension/4425.md) |  |
| 4426 | [EXR Bank Account List](../objects/pageextension/4426.md) |  |
| 4427 | [EXR Chart of Accounts](../objects/pageextension/4427.md) |  |
| 4428 | [EXR Currency Card](../objects/pageextension/4428.md) |  |
| 4429 | [EXR General Journal Batches](../objects/pageextension/4429.md) |  |
| 4430 | [EXR G/L Account Card](../objects/pageextension/4430.md) |  |
| 4431 | [EXR G/L Account List](../objects/pageextension/4431.md) |  |
| 4432 | [EXR G/L Registers](../objects/pageextension/4432.md) |  |
| 4433 | [EXR Budget](../objects/pageextension/4433.md) |  |
| 4434 | [EXR G/L Budget Names](../objects/pageextension/4434.md) |  |
| 4435 | [EXR Reminder](../objects/pageextension/4435.md) |  |
| 4436 | [EXR Acc. Rec. Admin RC](../objects/pageextension/4436.md) |  |
| 4437 | [EXR Acc. Pay. Coordinator RC](../objects/pageextension/4437.md) |  |
| 4438 | [EXR Customer List](../objects/pageextension/4438.md) |  |
| 4439 | [EXR CEO and President RC](../objects/pageextension/4439.md) |  |
| 4440 | [EXR Small Business Owner RC](../objects/pageextension/4440.md) |  |
| 4441 | [EXR Sales Credit Memos](../objects/pageextension/4441.md) |  |
| 4442 | [EXR Bookkeeper RC](../objects/pageextension/4442.md) |  |

### Reports (12)

| Id | Name | Caption |
|---|---|---|
| 4402 | [EXR Aged Accounts Rec Excel](../objects/report/4402.md) | Aged Accounts Receivable (Excel) |
| 4403 | [EXR Aged Acc Payable Excel](../objects/report/4403.md) | Aged Accounts Payable (Excel) |
| 4404 | [EXR Vendor Top List](../objects/report/4404.md) | Vendor - Top List (Excel) |
| 4405 | [EXR Trial Balance Excel](../objects/report/4405.md) | Trial Balance (Excel) |
| 4406 | [EXR Trial BalanceBudgetExcel](../objects/report/4406.md) | Trial Balance/Budget (Excel) |
| 4407 | [EXR Trial Bal. Prev Year Excel](../objects/report/4407.md) | Trial Balance/Previous Year (Excel) |
| 4408 | [EXR Trial Bal by Period Excel](../objects/report/4408.md) | Trial Balance by Period (Excel) |
| 4409 | [EXR Customer Top List](../objects/report/4409.md) | Customer - Top List (Excel) |
| 4410 | [EXR Consolidated Trial Balance](../objects/report/4410.md) | Consolidated Trial Balance (Excel) |
| 4411 | [EXR Fixed Asset Details Excel](../objects/report/4411.md) | Fixed Asset Details (Excel) |
| 4412 | [EXR Fixed Asset Analysis Excel](../objects/report/4412.md) | Fixed Asset Analysis (Excel) |
| 4413 | [EXR Fixed Asset Projected](../objects/report/4413.md) | Fixed Asset Projected Value (Excel) |

### Codeunits (5)

| Id | Name | Caption |
|---|---|---|
| 4404 | [EXT Top Vendor Caption Handler](../objects/codeunit/4404.md) |  |
| 4405 | [EXT Top Cust. Caption Handler](../objects/codeunit/4405.md) |  |
| 4406 | [EXT Aged Acc. Caption Handler](../objects/codeunit/4406.md) |  |
| 4410 | [Trial Balance](../objects/codeunit/4410.md) |  |
| 4412 | [Excel Reports Telemetry](../objects/codeunit/4412.md) |  |

### Queries (7)

| Id | Name | Caption |
|---|---|---|
| 4401 | [EXR Top Vendor Balance](../objects/query/4401.md) | Top Vendor Balance |
| 4402 | [EXR Top Vendor Purchase](../objects/query/4402.md) | Top Vendor Purchase |
| 4403 | [EXR Top Customer Balance](../objects/query/4403.md) | Top Customer Balance |
| 4404 | [EXR Top Customer Sales](../objects/query/4404.md) | Top Customer Sale |
| 4405 | [EXR Trial Balance](../objects/query/4405.md) |  |
| 4406 | [EXR Trial Balance Budget](../objects/query/4406.md) |  |
| 4407 | [EXR Trial Balance BU](../objects/query/4407.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 4401 | [Excel Reports - Objects](../objects/permissionset/4401.md) |  |

### Permission set extensions (5)

| Id | Name | Caption |
|---|---|---|
| 4400 | [D365 BASIC ISV - FE Reports](../objects/permissionsetextension/4400.md) |  |
| 4401 | [D365 BUS FULL ACCESS - FE Reports](../objects/permissionsetextension/4401.md) |  |
| 4402 | [D365 BUS PREMIUM - FE Reports](../objects/permissionsetextension/4402.md) |  |
| 4403 | [D365 FULL ACCESS - FE Reports](../objects/permissionsetextension/4403.md) |  |
| 4404 | [D365 READ - FE Reports](../objects/permissionsetextension/4404.md) |  |

Source: [src/Apps/W1/ExcelReports/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/ExcelReports/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
