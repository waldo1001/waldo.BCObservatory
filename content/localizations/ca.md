---
id: localization/ca
type: localization
title: Canada (CA)
summary: Canada (CA) localization of Business Central 29. It covers sales tax and GST/HST calculation and reporting, GIFI codes, bank deposits and reconciliation, and EFT electronic payments. It also carries the North American (NA) report set and extra Mexico (SAT/CFDI, DIOT) objects. It answers what the Canadian layer adds to W1 tax, banking, sales and purchase objects.
tier: official
language: en
tags:
  - localization
  - ca
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:25:02.486Z"
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: ea17482323c0e35b83ac8ba6d8bee1551a62c166b8aae1fb9745419381490fc1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-ca
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/8
    - object/codeunit/11
    - object/codeunit/12
    - object/codeunit/57
    - object/codeunit/80
    - object/codeunit/90
    - object/codeunit/229
    - object/codeunit/333
    - object/codeunit/367
    - object/codeunit/398
    - object/codeunit/442
    - object/codeunit/444
    - object/codeunit/815
    - object/codeunit/816
    - object/codeunit/1752
    - object/codeunit/1814
    - object/codeunit/5912
    - object/codeunit/5986
    - object/codeunit/5987
    - object/codeunit/5988
    - object/codeunit/6620
    - object/codeunit/9025
    - object/enum/8
    - object/enum/85
    - object/enum/89
    - object/enum/1222
    - object/page/50
    - object/page/51
    - object/page/130
    - object/page/131
    - object/page/132
    - object/page/134
    - object/page/232
    - object/page/248
    - object/page/256
    - object/page/344
    - object/page/370
    - object/page/379
    - object/page/404
    - object/page/507
    - object/page/1284
    - object/page/1803
    - object/page/5743
    - object/page/9030
    - object/page/9036
    - object/permissionset/1001
    - object/permissionset/1002
    - object/permissionset/3602
    - object/permissionset/8824
    - object/report/24
    - object/report/29
    - object/report/35
    - object/report/110
    - object/report/120
    - object/report/202
    - object/report/319
    - object/report/322
    - object/report/402
    - object/report/1005
    - object/report/1303
    - object/report/1304
    - object/report/1305
    - object/report/1306
    - object/report/1307
    - object/report/1322
    - object/report/1401
    - object/report/1408
    - object/report/5900
    - object/report/5902
    - object/report/5915
    - object/table/3
    - object/table/9
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/21
    - object/table/23
    - object/table/25
    - object/table/27
    - object/table/32
    - object/table/36
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/44
    - object/table/79
    - object/table/81
    - object/table/84
    - object/table/92
    - object/table/93
    - object/table/98
    - object/table/110
    - object/table/111
    - object/table/112
    - object/table/113
    - object/table/114
    - object/table/115
    - object/table/120
    - object/table/122
    - object/table/123
    - object/table/124
    - object/table/125
    - object/table/181
    - object/table/204
    - object/table/222
    - object/table/242
    - object/table/254
    - object/table/270
    - object/table/271
    - object/table/272
    - object/table/273
    - object/table/287
    - object/table/288
    - object/table/289
    - object/table/290
    - object/table/309
    - object/table/312
    - object/table/318
    - object/table/319
    - object/table/320
    - object/table/322
    - object/table/325
    - object/table/327
    - object/table/1019
    - object/table/1200
    - object/table/1222
    - object/table/1224
    - object/table/1284
    - object/table/1381
    - object/table/1382
    - object/table/1383
    - object/table/1829
    - object/table/5107
    - object/table/5108
    - object/table/5109
    - object/table/5110
    - object/table/5200
    - object/table/5600
    - object/table/5740
    - object/table/5741
    - object/table/5744
    - object/table/5745
    - object/table/5800
    - object/table/5902
    - object/table/6661
    - object/table/8627
    - object/table/9054
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/canada
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: CA
version: "29"
w1_version: "29"
added_objects: 611
replaced_objects: 147
removed_objects: 0
added_fields: 526
added_events: 103
learn_folder: LocalFunctionality/Canada
---

# Canada (CA)

> Canada (CA) localization of Business Central 29. It covers sales tax and GST/HST calculation and reporting, GIFI codes, bank deposits and reconciliation, and EFT electronic payments. It also carries the North American (NA) report set and extra Mexico (SAT/CFDI, DIOT) objects. It answers what the Canadian layer adds to W1 tax, banking, sales and purchase objects.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/canada.md) · narrative reviewed (checked by Opus)

## Overview

The Canadian layer is built on the sales tax model: Tax Area, Tax Jurisdiction, Tax Detail and Tax Group. Codeunit 398 "Sales Tax Calculate" gains events and an external tax engine hook. Sales-Post and Purch.-Post gain procedures that post sales tax to G/L, and Purch.-Post also calculates and posts provincial sales tax. On the service side, Serv-Documents Mgt. adds sales tax calculation events and Serv-Posting Journals Mgt. adds an event for posting sales tax to G/L. Purchases add provincial tax area codes, GST/HST fields and a Tax To Be Expensed field. Learn documents sales tax, GST/HST reporting, use and purchase tax, unrealized sales tax and sales payment discounts.

Banking adds deposits, bank reconciliation worksheets and EFT export. The EFT export has codeunits for ACH, RB, Cecoban and IAT formats, with fields on Bank Account, Customer/Vendor Bank Account and Gen. Journal Line. GIFI codes are added to G/L Account and documented on Learn, including export of balances for tax preparation software. Also added are many NA reports (purchases, inventory, jobs, resources), Yodlee bank feeds, Ceridian payroll import, PEPPOL 3.0 NA and a Shopify tax match feature.

The package also holds Mexican objects: CFDI e-invoicing with PAC and SAT catalogs, DIOT, and many fields on sales, transfer and company tables. The code summary does not tie these to Canadian requirements, and no Learn page in the input covers them.

## Key points

- Sales tax engine: Tax Area, Tax Jurisdiction and Tax Detail changes, with an external tax engine interface and codeunit 398 events.
- GST/HST and provincial tax: GST/HST fields on G/L Entry, VAT Entry and Purchase Line, provincial tax area codes, and purchase/use tax handling.
- GIFI codes on G/L Account with a GIFI Codes page, documented on Learn for tax filing export.
- Deposits and bank reconciliation: Posted Deposit/Bank Rec. codeunits and permission sets, plus Navigate support for deposits.
- EFT electronic payments in ACH, RB, Cecoban and IAT formats via Export Payments/EFT codeunits and bank account fields.
- Check printing changes: Check Ledger Entry, Check Preview and Print Check Helper.
- NA report set for purchases, inventory, jobs and resources, plus Yodlee, Ceridian payroll and a Shopify tax match feature.
- Mexican CFDI, SAT and DIOT objects are also present in the code.

Narrative written by Sonnet from the code diff and 8 Learn page summaries. In numbers: Canada (CA) localization of Business Central in BC29: 611 objects of its own, 147 W1 objects changed (526 fields and 103 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 28 | 104 | 84 |
| [eServices](#eservices) | 0 | 124 | 0 |
| [Bank](#bank) | 14 | 108 | 22 |
| [Sales](#sales) | 35 | 74 | 237 |
| [Purchases](#purchases) | 24 | 42 | 66 |
| [Inventory](#inventory) | 10 | 31 | 75 |
| [Service](#service) | 8 | 31 | 0 |
| [Integration](#integration) | 0 | 23 | 0 |
| [(no namespace)](#no-namespace) | 0 | 22 | 0 |
| [Projects](#projects) | 2 | 15 | 4 |
| [Foundation](#foundation) | 10 | 6 | 26 |
| [Payroll](#payroll) | 0 | 14 | 0 |
| [Utilities](#utilities) | 6 | 5 | 0 |
| [Peppol](#peppol) | 0 | 5 | 0 |
| [IO](#io) | 4 | 0 | 1 |
| [Microsoft](#microsoft) | 0 | 4 | 0 |
| [Security](#security) | 4 | 0 | 0 |
| [HumanResources](#humanresources) | 1 | 2 | 2 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [FixedAssets](#fixedassets) | 1 | 0 | 9 |

### Finance

Core sales tax engine: events and external tax engine procedures in Sales Tax Calculate, the Sales Tax Journal, and an External Tax Engine interface. Fields are added to Tax Area, Tax Jurisdiction, Tax Detail, G/L Account (GIFI Code), VAT Entry (GST/HST) and journal lines. Gen. Jnl.-Post Line gains unrealized VAT and EFT checks.

Why: Learn documents sales tax with up to four jurisdictions per document, GST/HST reporting, unrealized sales tax and GIFI codes for tax filing.

Objects: [codeunit/398 "Sales Tax Calculate"](../objects/codeunit/398.md), [table/318 "Tax Area"](../objects/table/318.md), [table/320 "Tax Jurisdiction"](../objects/table/320.md), [table/322 "Tax Detail"](../objects/table/322.md), [table/15 "G/L Account"](../objects/table/15.md), [table/254 "VAT Entry"](../objects/table/254.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [page/10101 "Sales Tax Journal"](../objects/page/10101-ca.md) (own).

[All 132 objects of Finance in the diff](?ns=Finance#country-diff)

### eServices

Mexican CFDI e-invoicing objects: E-Invoice Mgt., PAC communication codeunits, SAT catalog pages, a CFDI wizard and export accounts.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10145 "E-Invoice Mgt."](../objects/codeunit/10145-ca.md) (own), [codeunit/10146 "EInvoice Communication"](../objects/codeunit/10146-ca.md) (own), [codeunit/27030 "SAT Utilities"](../objects/codeunit/27030-ca.md) (own), [page/10457 "MX Electronic Invoice Setup"](../objects/page/10457-ca.md) (own), [page/27010 "Mexican CFDI Wizard"](../objects/page/27010-ca.md) (own), [codeunit/27000 "Export Accounts"](../objects/codeunit/27000-ca.md) (own), [interface/einvoice communication v2 "EInvoice Communication V2"](../objects/interface/einvoice-communication-v2-ca.md) (own), [page/10455 "PAC Web Services"](../objects/page/10455-ca.md) (own).

[All 124 objects of eServices in the diff](?ns=eServices#country-diff)

### Bank

Adds EFT export (ACH, RB, Cecoban, IAT), deposits, bank reconciliation, and check changes. Bank Account gets many e-pay fields, and Check Ledger Entry and Bank Account Card are extended.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/270 "Bank Account"](../objects/table/270.md), [codeunit/10098 "Generate EFT"](../objects/codeunit/10098-ca.md) (own), [codeunit/10090 "Export Payments (ACH)"](../objects/codeunit/10090-ca.md) (own), [codeunit/10091 "Export Payments (RB)"](../objects/codeunit/10091-ca.md) (own), [codeunit/10331 "EFT Export Mgt"](../objects/codeunit/10331-ca.md) (own), [table/272 "Check Ledger Entry"](../objects/table/272.md), [page/370 "Bank Account Card"](../objects/page/370.md), [report/10408 "Bank Reconciliation"](../objects/report/10408-ca.md) (own).

[All 122 objects of Bank in the diff](?ns=Bank#country-diff)

### Sales

Sales tax calculation and posting on sales documents, with tax area, tax exemption and rounding fields. Adds NA statistics pages and post codeunits, and adds retention and CFDI/e-document fields on headers and lines.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [table/36 "Sales Header"](../objects/table/36.md), [table/37 "Sales Line"](../objects/table/37.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md), [table/18 "Customer"](../objects/table/18.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md), [page/10038 "Sales Order Stats."](../objects/page/10038-ca.md) (own).

[All 109 objects of Sales in the diff](?ns=Sales#country-diff)

### Purchases

Purchase posting adds provincial sales tax, GST/HST and expense or capitalize handling. Purchase Header, Line and Vendor get tax fields, and NA purchase reports and statistics are added. DIOT page extensions are included.

Why: Learn documents use tax and purchase tax setup for purchases from vendors without local presence.

Objects: [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), [table/39 "Purchase Line"](../objects/table/39.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/23 "Vendor"](../objects/table/23.md), [codeunit/444 "Purchase-Post Prepayments"](../objects/codeunit/444.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [page/10043 "Purchase Stats."](../objects/page/10043-ca.md) (own), [report/10085 "Aged Accounts Payable NA"](../objects/report/10085-ca.md) (own).

[All 66 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Inventory

Adds NA inventory reports, vendor locations, and SAT/CFDI fields on Item, Transfer Header and shipment tables.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/27 "Item"](../objects/table/27.md), [table/5740 "Transfer Header"](../objects/table/5740.md), [table/5744 "Transfer Shipment Header"](../objects/table/5744.md), [report/10139 "Inventory Valuation"](../objects/report/10139-ca.md) (own), [report/10138 "Inventory to G/L Reconcile"](../objects/report/10138-ca.md) (own), [table/10013 "Vendor Location"](../objects/table/10013-ca.md) (own), [page/10013 "Vendor Locations"](../objects/page/10013-ca.md) (own), [table/5741 "Transfer Line"](../objects/table/5741.md).

[All 41 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Service

Service documents get sales tax calculation events, external tax engine support and NA page and table extensions. Statistics pages and sales tax reports are added.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5988 "Serv-Documents Mgt."](../objects/codeunit/5988.md), [codeunit/5987 "Serv-Posting Journals Mgt."](../objects/codeunit/5987.md), [codeunit/10288 "Serv-Documents Mgt. NA"](../objects/codeunit/10288-ca.md) (own), [table/5902 "Service Line"](../objects/table/5902.md), [report/10470 "Service Order-Sales Tax"](../objects/report/10470-ca.md) (own), [page/10053 "Service Stats."](../objects/page/10053-ca.md) (own), [report/5915 "Service Document - Test"](../objects/report/5915.md).

[All 39 objects of Service in the diff](?ns=Service#country-diff)

### Integration

Shopify tax match feature that matches order tax lines to tax areas and jurisdictions, with review pages, events and table extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/30471 "Shpfy TMA Matcher"](../objects/codeunit/30471-ca.md) (own), [codeunit/30472 "Shpfy Tax Area Builder"](../objects/codeunit/30472-ca.md) (own), [page/30471 "Shpfy TMA Review"](../objects/page/30471-ca.md) (own), [tableextension/30470 "Shpfy TMA Shop"](../objects/tableextension/30470-ca.md) (own), [pageextension/30470 "Shpfy TMA Shop Card"](../objects/pageextension/30470-ca.md) (own), [codeunit/30470 "Shpfy TMA Register"](../objects/codeunit/30470-ca.md) (own), [enum/30471 "Shpfy Tax Match Review Mode"](../objects/enum/30471-ca.md) (own).

[All 23 objects of Integration in the diff](?ns=Integration#country-diff)

### (no namespace)

Bank reconciliation and deposit permission sets, role profiles, bank reconciliation report, CFDI Subject to Tax objects and upgrade codeunits.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/10408 "Bank Reconciliation"](../objects/report/10408-ca.md) (own), [permissionset/27004 "BANKREC-POST"](../objects/permissionset/27004-ca.md) (own), [permissionset/27002 "BANKDEPOSIT-POST"](../objects/permissionset/27002-ca.md) (own), [codeunit/10124 "BankRec-Printed"](../objects/codeunit/10124-ca.md) (own), [table/27008 "CFDI Subject to Tax"](../objects/table/27008-ca.md) (own), [profile/credit manager "CREDIT MANAGER"](../objects/profile/credit-manager-ca.md) (own).

[All 22 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Projects

NA job and resource reports, plus extra budget fields on the Job Difference Buffer.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/1019 "Job Difference Buffer"](../objects/table/1019.md), [report/10210 "Job Actual to Budget (Cost)"](../objects/report/10210-ca.md) (own), [report/10211 "Job Actual to Budget (Price)"](../objects/report/10211-ca.md) (own), [report/10216 "Job List"](../objects/report/10216-ca.md) (own), [report/10220 "Job Cost Transaction Detail"](../objects/report/10220-ca.md) (own).

[All 17 objects of Projects in the diff](?ns=Projects#country-diff)

### Foundation

Company Information gets Canada fields (QST Registration No., provincial tax area) and an IsCanada check. Source Code Setup and No. Series Line are extended, and Navigate finds deposits.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/242 "Source Code Setup"](../objects/table/242.md), [page/344 "Navigate"](../objects/page/344.md), [table/309 "No. Series Line"](../objects/table/309.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md).

[All 16 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Payroll

Ceridian payroll import: setup table and page, import xmlport and codeunits, and permission set extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1666 "MS Ceridian Payroll import"](../objects/codeunit/1666-ca.md) (own), [codeunit/1668 "MS Ceridian Payroll Mgt."](../objects/codeunit/1668-ca.md) (own), [page/1665 "MS - Ceridian Payroll Setup"](../objects/page/1665-ca.md) (own), [table/1665 "MS Ceridian Payroll Setup"](../objects/table/1665-ca.md) (own), [xmlport/1661 "Import Ceridian Payroll"](../objects/xmlport/1661-ca.md) (own).

[All 14 objects of Payroll in the diff](?ns=Payroll#country-diff)

### Utilities

Document totals, copy document and assisted setup are adjusted for sales tax lines and retention. Adds a Data Dictionary report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/57 "Document Totals"](../objects/codeunit/57.md), [codeunit/6620 "Copy Document Mgt."](../objects/codeunit/6620.md), [codeunit/1814 "Assisted Setup Subscribers"](../objects/codeunit/1814.md), [page/1803 "Assisted Company Setup Wizard"](../objects/page/1803.md), [report/10315 "Data Dictionary"](../objects/report/10315-ca.md) (own).

[All 11 objects of Utilities in the diff](?ns=Utilities#country-diff)

### Peppol

PEPPOL 3.0 North America format with install, upgrade and subscriber codeunits, and an enum extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/37350 "PEPPOL30 NA"](../objects/codeunit/37350-ca.md) (own), [codeunit/37353 "PEPPOL30 NA Subscribers"](../objects/codeunit/37353-ca.md) (own), [enumextension/37350 "PEPPOL 3.0 Format NA"](../objects/enumextension/37350-ca.md) (own).

[All 5 objects of Peppol in the diff](?ns=Peppol#country-diff)

### IO

Data exchange definitions are extended for EFT export, with checks of EFT file type and a new definition type enum value. Config. Setup gets a Tax Area Code.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/1222 "Data Exch. Def"](../objects/table/1222.md), [table/1224 "Data Exch. Mapping"](../objects/table/1224.md), [enum/1222 "Data Exchange Definition Type"](../objects/enum/1222.md), [table/8627 "Config. Setup"](../objects/table/8627.md).

[All 4 objects of IO in the diff](?ns=IO#country-diff)

### Microsoft

B10 Adjustment table and page, and Declaration 347 and 349 label reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/10240 "B10 Adjustment"](../objects/table/10240-ca.md) (own), [page/10240 "B10 Adjustments"](../objects/page/10240-ca.md) (own), [report/14022 "Declaration 347 Labels"](../objects/report/14022-ca.md) (own), [report/14023 "Declaration 349 Labels"](../objects/report/14023-ca.md) (own).

[All 4 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Security

Local and payables journal permission sets are changed.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [permissionset/3602 "Payables Journals - Post"](../objects/permissionset/3602.md), [permissionset/8824 "Payables Journals - Edit"](../objects/permissionset/8824.md).

[All 4 objects of Security in the diff](?ns=Security#country-diff)

### HumanResources

Employee gets RFC No. and License No. fields. HR and Payroll role center pages are added.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md), [page/36600 "Human Resources Role Center"](../objects/page/36600-ca.md) (own), [page/36601 "Payroll Role Center"](../objects/page/36601-ca.md) (own).

[All 3 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

### ExpenseAgent

Adds an Expense Event Subscriber CA codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6916 "Expense Event Subscriber CA"](../objects/codeunit/6916-ca.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### FixedAssets

Fixed Asset gets vehicle and SAT transport fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md).

[All 1 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/8 "AccSchedManagement"](../objects/codeunit/8.md) | +1 events, +4 procedures |
| [codeunit/11 "Gen. Jnl.-Check Line"](../objects/codeunit/11.md) | +1 procedures |
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +2 events, +10 procedures |
| [codeunit/57 "Document Totals"](../objects/codeunit/57.md) | +1 events, +2 procedures |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +12 events, +8 procedures |
| [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md) | +14 events, +11 procedures |
| [codeunit/229 "Document-Print"](../objects/codeunit/229.md) | +1 procedures |
| [codeunit/333 "Req. Wksh.-Make Order"](../objects/codeunit/333.md) | +2 events, +2 procedures |
| [codeunit/367 "CheckManagement"](../objects/codeunit/367.md) | +2 procedures |
| [codeunit/398 "Sales Tax Calculate"](../objects/codeunit/398.md) | +39 events, +56 procedures, 1 properties |
| [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md) | +1 events, +3 procedures |
| [codeunit/444 "Purchase-Post Prepayments"](../objects/codeunit/444.md) | +3 procedures |
| [codeunit/815 "Sales Post Invoice"](../objects/codeunit/815.md) | +1 procedures |
| [codeunit/816 "Purch. Post Invoice"](../objects/codeunit/816.md) | +1 procedures |
| [codeunit/1752 "Data Class. Eval. Data Country"](../objects/codeunit/1752.md) | +1 procedures |
| [codeunit/1814 "Assisted Setup Subscribers"](../objects/codeunit/1814.md) | +1 procedures |
| [codeunit/5912 "ServLedgEntries-Post"](../objects/codeunit/5912.md) | body changes only |
| [codeunit/5986 "Serv-Amounts Mgt."](../objects/codeunit/5986.md) | +1 procedures |
| [codeunit/5987 "Serv-Posting Journals Mgt."](../objects/codeunit/5987.md) | +1 events, +1 procedures |
| [codeunit/5988 "Serv-Documents Mgt."](../objects/codeunit/5988.md) | +4 events, +6 procedures |
| [codeunit/6620 "Copy Document Mgt."](../objects/codeunit/6620.md) | +3 procedures |
| [codeunit/9025 "Small Business Report Catalog"](../objects/codeunit/9025.md) | 1 procedures changed |
| [enum/8 "Country/Region Address Format"](../objects/enum/8.md) | body changes only |
| [enum/85 "Acc. Schedule Line Totaling Type"](../objects/enum/85.md) | body changes only |
| [enum/89 "Gen. Journal Template Type"](../objects/enum/89.md) | body changes only |
| [enum/1222 "Data Exchange Definition Type"](../objects/enum/1222.md) | body changes only |
| [page/50 "Purchase Order"](../objects/page/50.md) | +1 procedures |
| [page/51 "Purchase Invoice"](../objects/page/51.md) | +1 procedures |
| [page/130 "Posted Sales Shipment"](../objects/page/130.md) | +1 procedures |
| [page/131 "Posted Sales Shpt. Subform"](../objects/page/131.md) | 2 properties |
| [page/132 "Posted Sales Invoice"](../objects/page/132.md) | +1 events, +1 procedures |
| [page/134 "Posted Sales Credit Memo"](../objects/page/134.md) | +1 events, +1 procedures |
| [page/232 "Apply Customer Entries"](../objects/page/232.md) | +1 events |
| [page/248 "VAT Registration Config"](../objects/page/248.md) | 2 properties |
| [page/256 "Payment Journal"](../objects/page/256.md) | +1 events, +4 procedures |
| [page/344 "Navigate"](../objects/page/344.md) | +1 events, +4 procedures |
| [page/370 "Bank Account Card"](../objects/page/370.md) | +2 events, +4 procedures |
| [page/379 "Bank Acc. Reconciliation"](../objects/page/379.md) | +2 procedures |
| [page/404 "Check Preview"](../objects/page/404.md) | +1 events, +1 procedures |
| [page/507 "Blanket Sales Order"](../objects/page/507.md) | body changes only |
| [page/1284 "Outstanding Bank Transactions"](../objects/page/1284.md) | body changes only |
| [page/1803 "Assisted Company Setup Wizard"](../objects/page/1803.md) | +1 procedures |
| [page/5743 "Posted Transfer Shipment"](../objects/page/5743.md) | +1 procedures |
| [page/9030 "Account Manager Activities"](../objects/page/9030.md) | body changes only |
| [page/9036 "Bookkeeper Activities"](../objects/page/9036.md) | body changes only |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [permissionset/3602 "Payables Journals - Post"](../objects/permissionset/3602.md) | 1 properties |
| [permissionset/8824 "Payables Journals - Edit"](../objects/permissionset/8824.md) | 1 properties |
| [report/24 "Sales Taxes Collected"](../objects/report/24.md) | 2 properties |
| [report/29 "Export Acc. Sched. to Excel"](../objects/report/29.md) | +1 procedures |
| [report/35 "Document Entries"](../objects/report/35.md) | +1 procedures |
| [report/110 "Customer - Labels"](../objects/report/110.md) | 2 properties |
| [report/120 "Aged Accounts Receivable"](../objects/report/120.md) | 2 properties |
| [report/202 "Sales Document - Test"](../objects/report/202.md) | +2 events, +2 procedures |
| [report/319 "Payments on Hold"](../objects/report/319.md) | 2 properties |
| [report/322 "Aged Accounts Payable"](../objects/report/322.md) | 2 properties |
| [report/402 "Purchase Document - Test"](../objects/report/402.md) | +1 procedures |
| [report/1005 "Job Journal - Test"](../objects/report/1005.md) | 2 properties |
| [report/1303 "Standard Sales - Draft Invoice"](../objects/report/1303.md) | +1 events, +2 procedures |
| [report/1304 "Standard Sales - Quote"](../objects/report/1304.md) | +2 events, +2 procedures |
| [report/1305 "Standard Sales - Order Conf."](../objects/report/1305.md) | +1 events, +2 procedures |
| [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md) | +2 events, +2 procedures |
| [report/1307 "Standard Sales - Credit Memo"](../objects/report/1307.md) | +2 events, +2 procedures |
| [report/1322 "Standard Purchase - Order"](../objects/report/1322.md) | +1 procedures |
| [report/1401 "Check"](../objects/report/1401.md) | +1 procedures, 3 procedures changed |
| [report/1408 "Bank Acc. Recon. - Test"](../objects/report/1408.md) | +1 events |
| [report/5900 "Service Order"](../objects/report/5900.md) | +1 events |
| [report/5902 "Service Quote"](../objects/report/5902.md) | +1 events, +1 procedures |
| [report/5915 "Service Document - Test"](../objects/report/5915.md) | +1 events, +3 procedures |
| [table/3 "Payment Terms"](../objects/table/3.md) | +1 fields |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +3 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +2 fields |
| [table/18 "Customer"](../objects/table/18.md) | +18 fields, +1 procedures |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +26 fields, +7 procedures |
| [table/23 "Vendor"](../objects/table/23.md) | +13 fields, +1 procedures |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +2 fields |
| [table/27 "Item"](../objects/table/27.md) | +7 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | body changes only |
| [table/36 "Sales Header"](../objects/table/36.md) | +31 fields, +7 procedures |
| [table/37 "Sales Line"](../objects/table/37.md) | +5 fields, 1 fields changed, +5 procedures, 1 procedures changed |
| [table/38 "Purchase Header"](../objects/table/38.md) | +9 fields, +3 procedures |
| [table/39 "Purchase Line"](../objects/table/39.md) | +4 fields, 1 fields changed, +3 events, +7 procedures |
| [table/44 "Sales Comment Line"](../objects/table/44.md) | +8 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +17 fields, 3 fields changed, +3 procedures |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +21 fields |
| [table/84 "Acc. Schedule Name"](../objects/table/84.md) | +1 fields |
| [table/92 "Customer Posting Group"](../objects/table/92.md) | +1 procedures |
| [table/93 "Vendor Posting Group"](../objects/table/93.md) | +1 procedures |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +18 fields, 1 fields changed, +1 procedures |
| [table/110 "Sales Shipment Header"](../objects/table/110.md) | +43 fields, +3 procedures |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +3 fields, +1 procedures |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +37 fields, +4 procedures |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +4 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +36 fields, +4 procedures |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +3 fields |
| [table/120 "Purch. Rcpt. Header"](../objects/table/120.md) | +1 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +6 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +2 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +6 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +2 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +21 fields |
| [table/204 "Unit of Measure"](../objects/table/204.md) | +2 fields |
| [table/222 "Ship-to Address"](../objects/table/222.md) | +2 fields, +1 procedures |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +2 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +3 fields, 1 fields changed, +1 procedures |
| [table/270 "Bank Account"](../objects/table/270.md) | +16 fields, 3 fields changed, +3 procedures, 1 properties |
| [table/271 "Bank Account Ledger Entry"](../objects/table/271.md) | +1 procedures |
| [table/272 "Check Ledger Entry"](../objects/table/272.md) | +2 fields, 2 fields changed, +4 procedures |
| [table/273 "Bank Acc. Reconciliation"](../objects/table/273.md) | +2 procedures, 1 properties |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +2 fields, 2 fields changed |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +2 fields, 2 fields changed, +1 events |
| [table/289 "Payment Method"](../objects/table/289.md) | +2 fields |
| [table/290 "VAT Amount Line"](../objects/table/290.md) | +1 fields, +2 procedures |
| [table/309 "No. Series Line"](../objects/table/309.md) | +3 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +2 fields |
| [table/318 "Tax Area"](../objects/table/318.md) | +3 fields |
| [table/319 "Tax Area Line"](../objects/table/319.md) | 1 fields changed |
| [table/320 "Tax Jurisdiction"](../objects/table/320.md) | +3 fields |
| [table/322 "Tax Detail"](../objects/table/322.md) | +1 fields, 3 fields changed, +2 procedures |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +4 fields, 1 fields changed |
| [table/327 "Tax Jurisdiction Translation"](../objects/table/327.md) | +1 fields |
| [table/1019 "Job Difference Buffer"](../objects/table/1019.md) | +4 fields |
| [table/1200 "Bank Export/Import Setup"](../objects/table/1200.md) | 1 fields changed |
| [table/1222 "Data Exch. Def"](../objects/table/1222.md) | +2 procedures, 1 procedures changed |
| [table/1224 "Data Exch. Mapping"](../objects/table/1224.md) | 2 procedures changed |
| [table/1284 "Outstanding Bank Transaction"](../objects/table/1284.md) | +2 fields, 1 fields changed, +2 procedures |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +12 fields, 1 fields changed |
| [table/1382 "Item Templ."](../objects/table/1382.md) | +5 fields |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +11 fields, 1 fields changed |
| [table/1829 "Consolidation Account"](../objects/table/1829.md) | +2 procedures |
| [table/5107 "Sales Header Archive"](../objects/table/5107.md) | +5 fields |
| [table/5108 "Sales Line Archive"](../objects/table/5108.md) | +1 fields |
| [table/5109 "Purchase Header Archive"](../objects/table/5109.md) | +4 fields |
| [table/5110 "Purchase Line Archive"](../objects/table/5110.md) | +2 fields |
| [table/5200 "Employee"](../objects/table/5200.md) | +2 fields, 2 fields changed |
| [table/5600 "Fixed Asset"](../objects/table/5600.md) | +9 fields |
| [table/5740 "Transfer Header"](../objects/table/5740.md) | +18 fields |
| [table/5741 "Transfer Line"](../objects/table/5741.md) | +2 fields |
| [table/5744 "Transfer Shipment Header"](../objects/table/5744.md) | +40 fields, +3 procedures |
| [table/5745 "Transfer Shipment Line"](../objects/table/5745.md) | +2 fields |
| [table/5800 "Item Charge"](../objects/table/5800.md) | +1 fields |
| [table/5902 "Service Line"](../objects/table/5902.md) | +1 procedures |
| [table/6661 "Return Receipt Line"](../objects/table/6661.md) | +1 fields |
| [table/8627 "Config. Setup"](../objects/table/8627.md) | +1 fields, 1 fields changed |
| [table/9054 "Finance Cue"](../objects/table/9054.md) | +2 fields |

## Objects of its own

611 objects only this country has.

- [codeunit/400 "ExternalTaxEngineDefault"](../objects/codeunit/400-ca.md)
- [codeunit/1267 "Password Helper"](../objects/codeunit/1267-ca.md)
- [codeunit/1450 "MS - Yodlee Service Mgt."](../objects/codeunit/1450-ca.md)
- [codeunit/1451 "MS - Yodlee Import Bank Feed"](../objects/codeunit/1451-ca.md)
- [codeunit/1452 "MS - Yodlee Service Upgrade"](../objects/codeunit/1452-ca.md)
- [codeunit/1453 "MS - Yodlee Account Cleanup"](../objects/codeunit/1453-ca.md)
- [codeunit/1454 "Yodlee Install"](../objects/codeunit/1454-ca.md)
- [codeunit/1458 "Yodlee API Strings"](../objects/codeunit/1458-ca.md)
- [codeunit/1666 "MS Ceridian Payroll import"](../objects/codeunit/1666-ca.md)
- [codeunit/1667 "Ceridian Install"](../objects/codeunit/1667-ca.md)
- [codeunit/1668 "MS Ceridian Payroll Mgt."](../objects/codeunit/1668-ca.md)
- [codeunit/5968 "Serv. Sales Tax Calculate"](../objects/codeunit/5968-ca.md)
- [codeunit/6916 "Expense Event Subscriber CA"](../objects/codeunit/6916-ca.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-ca.md)
- [codeunit/10001 "Shipment Line - Edit"](../objects/codeunit/10001-ca.md)
- [codeunit/10011 "Ship-Post (Yes/No)"](../objects/codeunit/10011-ca.md)
- [codeunit/10012 "Ship-Post + Print"](../objects/codeunit/10012-ca.md)
- [codeunit/10021 "Invoice-Post (Yes/No)"](../objects/codeunit/10021-ca.md)
- [codeunit/10022 "Invoice-Post + Print"](../objects/codeunit/10022-ca.md)
- [codeunit/10025 "Paragraph Handling"](../objects/codeunit/10025-ca.md)
- [codeunit/10059 "Serv. Event Subscribers NA"](../objects/codeunit/10059-ca.md)
- [codeunit/10090 "Export Payments (ACH)"](../objects/codeunit/10090-ca.md)
- [codeunit/10091 "Export Payments (RB)"](../objects/codeunit/10091-ca.md)
- [codeunit/10092 "Export Payments (Cecoban)"](../objects/codeunit/10092-ca.md)
- [codeunit/10093 "Export Payments (IAT)"](../objects/codeunit/10093-ca.md)
- [codeunit/10094 "Export EFT (ACH)"](../objects/codeunit/10094-ca.md)
- [codeunit/10095 "Export EFT (RB)"](../objects/codeunit/10095-ca.md)
- [codeunit/10096 "Export EFT (Cecoban)"](../objects/codeunit/10096-ca.md)
- [codeunit/10097 "Export EFT (IAT)"](../objects/codeunit/10097-ca.md)
- [codeunit/10098 "Generate EFT"](../objects/codeunit/10098-ca.md)
- [codeunit/10100 "Post Sales Tax Jnl"](../objects/codeunit/10100-ca.md)
- [codeunit/10101 "Post- Print Sales Tax Jnl"](../objects/codeunit/10101-ca.md)
- [codeunit/10102 "Manage Sales Tax Journal"](../objects/codeunit/10102-ca.md)
- [codeunit/10124 "BankRec-Printed"](../objects/codeunit/10124-ca.md)
- [codeunit/10125 "Posted Bank Rec.-Delete"](../objects/codeunit/10125-ca.md)
- [codeunit/10126 "Bank Acc. Ledg. Entry-Reset"](../objects/codeunit/10126-ca.md)
- [codeunit/10127 "Bank Rec. Wksh. Notification"](../objects/codeunit/10127-ca.md)
- [codeunit/10130 "Bank Reconciliation Mgt."](../objects/codeunit/10130-ca.md)
- [codeunit/10143 "Deposit-Printed"](../objects/codeunit/10143-ca.md)
- [codeunit/10144 "Posted Deposit-Delete"](../objects/codeunit/10144-ca.md)
- [codeunit/10145 "E-Invoice Mgt."](../objects/codeunit/10145-ca.md)
- [codeunit/10146 "EInvoice Communication"](../objects/codeunit/10146-ca.md)
- [codeunit/10148 "Sales Tax Amount Line Calc"](../objects/codeunit/10148-ca.md)
- [codeunit/10150 "O365 Tax Settings Management"](../objects/codeunit/10150-ca.md)
- [codeunit/10151 "E-Invoice Cancel Request Batch"](../objects/codeunit/10151-ca.md)
- [codeunit/10152 "Serv.EInv.Cancel Request Batch"](../objects/codeunit/10152-ca.md)
- [codeunit/10154 "Bank Recon. - Test Subscribers"](../objects/codeunit/10154-ca.md)
- [codeunit/10174 "EInvoice OnPrem Communication"](../objects/codeunit/10174-ca.md)
- [codeunit/10175 "EInvoice SaaS Communication"](../objects/codeunit/10175-ca.md)
- [codeunit/10200 "EFT Recipient Bank Account Mgt"](../objects/codeunit/10200-ca.md)
- [codeunit/10202 "Entry Application Management"](../objects/codeunit/10202-ca.md)
- [codeunit/10250 "Bulk Vendor Remit Reporting"](../objects/codeunit/10250-ca.md)
- [codeunit/10288 "Serv-Documents Mgt. NA"](../objects/codeunit/10288-ca.md)
- [codeunit/10320 "Exp. Launcher EFT"](../objects/codeunit/10320-ca.md)
- [codeunit/10321 "Exp. Validation EFT"](../objects/codeunit/10321-ca.md)
- [codeunit/10322 "Exp. Writing EFT"](../objects/codeunit/10322-ca.md)
- [codeunit/10323 "Exp. External Data EFT"](../objects/codeunit/10323-ca.md)
- [codeunit/10324 "Exp. User Feedback EFT"](../objects/codeunit/10324-ca.md)
- [codeunit/10325 "Exp. Pre-Mapping Head EFT"](../objects/codeunit/10325-ca.md)
- [codeunit/10326 "Exp. Mapping Head EFT US"](../objects/codeunit/10326-ca.md)
- [codeunit/10327 "Exp. Pre-Mapping Det EFT US"](../objects/codeunit/10327-ca.md)
- [codeunit/10328 "Exp. Mapping Det EFT US"](../objects/codeunit/10328-ca.md)
- [codeunit/10329 "Exp. Pre-Mapping Foot EFT"](../objects/codeunit/10329-ca.md)
- [codeunit/10330 "Exp. Mapping Foot EFT US"](../objects/codeunit/10330-ca.md)
- [codeunit/10331 "EFT Export Mgt"](../objects/codeunit/10331-ca.md)
- [codeunit/10332 "Exp. Mapping Head EFT CA"](../objects/codeunit/10332-ca.md)
- [codeunit/10333 "Exp. Mapping Head EFT MX"](../objects/codeunit/10333-ca.md)
- [codeunit/10334 "Exp. Mapping Det EFT RB"](../objects/codeunit/10334-ca.md)
- [codeunit/10335 "Exp. Mapping Det EFT MX"](../objects/codeunit/10335-ca.md)
- [codeunit/10336 "Exp. Mapping Foot EFT CA"](../objects/codeunit/10336-ca.md)
- [codeunit/10337 "Exp. Mapping Foot EFT MX"](../objects/codeunit/10337-ca.md)
- [codeunit/10338 "Exp. Pre-Mapping Det EFT CA"](../objects/codeunit/10338-ca.md)
- [codeunit/10339 "Exp. Pre-Mapping Det EFT MX"](../objects/codeunit/10339-ca.md)
- [codeunit/10340 "EFT Values"](../objects/codeunit/10340-ca.md)
- [codeunit/10401 "Print Check Helper"](../objects/codeunit/10401-ca.md)
- [codeunit/10461 "Transfer Shpt. Header - Edit"](../objects/codeunit/10461-ca.md)
- [codeunit/10749 "Serv. Document Print NA"](../objects/codeunit/10749-ca.md)
- [codeunit/27000 "Export Accounts"](../objects/codeunit/27000-ca.md)
- [codeunit/27001 "Export Accounts Xml Helper"](../objects/codeunit/27001-ca.md)
- [codeunit/27006 "Service E-Invoice Mgt."](../objects/codeunit/27006-ca.md)
- [codeunit/27020 "DIOT - Initialize"](../objects/codeunit/27020-ca.md)
- [codeunit/27021 "DIOT Data Management"](../objects/codeunit/27021-ca.md)
- [codeunit/27022 "DIOT Subscribers"](../objects/codeunit/27022-ca.md)
- [codeunit/27030 "SAT Utilities"](../objects/codeunit/27030-ca.md)
- [codeunit/27031 "Update SAT Payment Catalogs"](../objects/codeunit/27031-ca.md)
- [codeunit/27032 "Update CFDI Fields Sales Doc"](../objects/codeunit/27032-ca.md)
- [codeunit/27033 "Upgrade DIOT"](../objects/codeunit/27033-ca.md)
- [codeunit/27090 "Serv. Export Accounts"](../objects/codeunit/27090-ca.md)
- [codeunit/27091 "Update CFDI Fields Serv. Doc"](../objects/codeunit/27091-ca.md)
- [codeunit/30470 "Shpfy TMA Register"](../objects/codeunit/30470-ca.md)
- [codeunit/30471 "Shpfy TMA Matcher"](../objects/codeunit/30471-ca.md)
- [codeunit/30472 "Shpfy Tax Area Builder"](../objects/codeunit/30472-ca.md)
- [codeunit/30473 "Shpfy TMA Events"](../objects/codeunit/30473-ca.md)
- [codeunit/30474 "Shpfy Tax Match Function"](../objects/codeunit/30474-ca.md)
- [codeunit/30475 "Shpfy TMA Install"](../objects/codeunit/30475-ca.md)
- [codeunit/30476 "Shpfy TMA Notify"](../objects/codeunit/30476-ca.md)
- [codeunit/30477 "Shpfy TMA Activity Log"](../objects/codeunit/30477-ca.md)
- [codeunit/30478 "Shpfy TMA Upgrade"](../objects/codeunit/30478-ca.md)
- [codeunit/37350 "PEPPOL30 NA"](../objects/codeunit/37350-ca.md)
- [codeunit/37351 "PEPPOL30 NA Install"](../objects/codeunit/37351-ca.md)
- [codeunit/37352 "PEPPOL30 NA Upgrade"](../objects/codeunit/37352-ca.md)
- [codeunit/37353 "PEPPOL30 NA Subscribers"](../objects/codeunit/37353-ca.md)
- [codeunit/104151 "UPG. MX CFDI"](../objects/codeunit/104151-ca.md)
- [codeunit/104152 "UPG. Data Exchange Definition"](../objects/codeunit/104152-ca.md)
- [codeunit/104153 "Upgrade - EFT"](../objects/codeunit/104153-ca.md)
- [codeunit/104154 "Upgrade - Sales Tax"](../objects/codeunit/104154-ca.md)
- [codeunit/104155 "Upgrade CFDI RFC Number"](../objects/codeunit/104155-ca.md)
- [codeunit/104156 "Upgrade VAT Setup NA"](../objects/codeunit/104156-ca.md)
- [enum/398 "Sales Tax Country"](../objects/enum/398-ca.md)
- [enum/399 "External Tax Engine"](../objects/enum/399-ca.md)
- [enum/10012 "Sales Tax Document Area"](../objects/enum/10012-ca.md)
- [enum/10025 "GST HST Tax Type"](../objects/enum/10025-ca.md)
- [enum/27030 "DIOT Type of Operation"](../objects/enum/27030-ca.md)
- [enum/30471 "Shpfy Tax Match Review Mode"](../objects/enum/30471-ca.md)
- [enumextension/30470 "Shpfy TMA Cap."](../objects/enumextension/30470-ca.md)
- [enumextension/37350 "PEPPOL 3.0 Format NA"](../objects/enumextension/37350-ca.md)
- [interface/einvoice communication v2 "EInvoice Communication V2"](../objects/interface/einvoice-communication-v2-ca.md)
- [interface/external tax engine "External Tax Engine"](../objects/interface/external-tax-engine-ca.md)
- [page/1450 "MS - Yodlee Bank Service Setup"](../objects/page/1450-ca.md)
- [page/1451 "MS - Yodlee Account Linking"](../objects/page/1451-ca.md)
- [page/1452 "MS - Yodlee Get Latest Stmt"](../objects/page/1452-ca.md)
- [page/1453 "MS - Yodlee NonLinked Accounts"](../objects/page/1453-ca.md)
- [page/1454 "MS - Yodlee Terms of use"](../objects/page/1454-ca.md)
- [page/1458 "MS - Yodlee Access Consent"](../objects/page/1458-ca.md)
- [page/1460 "MS - Yodlee Edit Account"](../objects/page/1460-ca.md)
- [page/1665 "MS - Ceridian Payroll Setup"](../objects/page/1665-ca.md)
- [page/10000 "Import Budget Information"](../objects/page/10000-ca.md)
- [page/10007 "Customer Credit Information"](../objects/page/10007-ca.md)
- [page/10009 "Customer Order Header Status"](../objects/page/10009-ca.md)
- [page/10010 "Customer Order Lines Status"](../objects/page/10010-ca.md)
- [page/10011 "Customer Order Header Part"](../objects/page/10011-ca.md)
- [page/10012 "Customer Order Lines Part"](../objects/page/10012-ca.md)
- [page/10013 "Vendor Locations"](../objects/page/10013-ca.md)
- [page/10017 "GIFI Codes"](../objects/page/10017-ca.md)
- [page/10025 "Customer Order Status"](../objects/page/10025-ca.md)
- [page/10026 "Sales Order Shipment"](../objects/page/10026-ca.md)
- [page/10027 "Sales Order Shipment Subform"](../objects/page/10027-ca.md)
- [page/10028 "Sales Order Invoice"](../objects/page/10028-ca.md)
- [page/10029 "Sales Order Invoice Subform"](../objects/page/10029-ca.md)
- [page/10038 "Sales Order Stats."](../objects/page/10038-ca.md)
- [page/10039 "Purchase Order Stats."](../objects/page/10039-ca.md)
- [page/10040 "Sales Tax Lines Subform"](../objects/page/10040-ca.md)
- [page/10041 "Sales Invoice Stats."](../objects/page/10041-ca.md)
- [page/10042 "Sales Stats."](../objects/page/10042-ca.md)
- [page/10043 "Purchase Stats."](../objects/page/10043-ca.md)
- [page/10044 "Sales Credit Memo Stats."](../objects/page/10044-ca.md)
- [page/10045 "Purchase Invoice Stats."](../objects/page/10045-ca.md)
- [page/10046 "Purch. Credit Memo Stats."](../objects/page/10046-ca.md)
- [page/10052 "Service Order Stats."](../objects/page/10052-ca.md)
- [page/10053 "Service Stats."](../objects/page/10053-ca.md)
- [page/10056 "Service Invoice Stats."](../objects/page/10056-ca.md)
- [page/10057 "Service Credit Memo Stats."](../objects/page/10057-ca.md)
- [page/10060 "Sales Tax Lines Serv. Subform"](../objects/page/10060-ca.md)
- [page/10100 "Account Identifiers"](../objects/page/10100-ca.md)
- [page/10101 "Sales Tax Journal"](../objects/page/10101-ca.md)
- [page/10125 "Posted Bank Rec. Worksheet"](../objects/page/10125-ca.md)
- [page/10126 "Posted Bank Rec. Chk Lines Sub"](../objects/page/10126-ca.md)
- [page/10127 "Posted Bank Rec. Dep Lines Sub"](../objects/page/10127-ca.md)
- [page/10128 "Posted Bank Rec. Adj Lines Sub"](../objects/page/10128-ca.md)
- [page/10129 "Posted Bank Rec. List"](../objects/page/10129-ca.md)
- [page/10130 "Bank Comment Sheet"](../objects/page/10130-ca.md)
- [page/10131 "Bank Comment List"](../objects/page/10131-ca.md)
- [page/10134 "Posted Bank Rec. Lines"](../objects/page/10134-ca.md)
- [page/10143 "Posted Deposit"](../objects/page/10143-ca.md)
- [page/10144 "Posted Deposit Subform"](../objects/page/10144-ca.md)
- [page/10147 "Posted Deposit List"](../objects/page/10147-ca.md)
- [page/10148 "Posted Deposit Lines"](../objects/page/10148-ca.md)
- [page/10150 "O365 Tax Settings Card"](../objects/page/10150-ca.md)
- [page/10151 "O365 Tax Settings List"](../objects/page/10151-ca.md)
- [page/10240 "B10 Adjustments"](../objects/page/10240-ca.md)
- [page/10350 "BC O365 Tax Settings Card"](../objects/page/10350-ca.md)
- [page/10351 "BC O365 Tax Settings List"](../objects/page/10351-ca.md)
- [page/10352 "BC O365 Tax Settings"](../objects/page/10352-ca.md)
- [page/10353 "BC O365 Tax Settings Part"](../objects/page/10353-ca.md)
- [page/10452 "Service Order Stats. Dyn"](../objects/page/10452-ca.md)
- [page/10455 "PAC Web Services"](../objects/page/10455-ca.md)
- [page/10456 "PAC Web Service Details"](../objects/page/10456-ca.md)
- [page/10457 "MX Electronic Invoice Setup"](../objects/page/10457-ca.md)
- [page/10458 "MX Electroninc - CompanyInfo"](../objects/page/10458-ca.md)
- [page/10459 "MX Electroninc - GLSetup"](../objects/page/10459-ca.md)
- [page/10461 "Posted Transfer Shpt. - Update"](../objects/page/10461-ca.md)
- [page/10807 "Sales Tax Setup Wizard"](../objects/page/10807-ca.md)
- [page/10810 "Generate EFT Files"](../objects/page/10810-ca.md)
- [page/10811 "Generate EFT File Lines"](../objects/page/10811-ca.md)
- [page/27000 "Export Electr. Accounting"](../objects/page/27000-ca.md)
- [page/27001 "SAT Account Codes"](../objects/page/27001-ca.md)
- [page/27002 "SAT Payment Method Codes"](../objects/page/27002-ca.md)
- [page/27003 "CFDI Cancellation Reasons"](../objects/page/27003-ca.md)
- [page/27004 "CFDI Export Codes"](../objects/page/27004-ca.md)
- [page/27006 "CFDI Relation Documents"](../objects/page/27006-ca.md)
- [page/27007 "CFDI Transport Operators"](../objects/page/27007-ca.md)
- [page/27008 "CFDI Subjects to Tax"](../objects/page/27008-ca.md)
- [page/27009 "SAT Addresses"](../objects/page/27009-ca.md)
- [page/27010 "Mexican CFDI Wizard"](../objects/page/27010-ca.md)
- [page/27011 "SAT Payment Terms Subform"](../objects/page/27011-ca.md)
- [page/27012 "SAT Payment Methods Subform"](../objects/page/27012-ca.md)
- [page/27013 "SAT Item Subform"](../objects/page/27013-ca.md)
- [page/27014 "SAT Customer Subform"](../objects/page/27014-ca.md)
- [page/27015 "SAT CFDI Document Information"](../objects/page/27015-ca.md)
- [page/27016 "SAT Tax Schemas"](../objects/page/27016-ca.md)
- [page/27017 "SAT Payment Terms"](../objects/page/27017-ca.md)
- [page/27018 "SAT Payment Methods"](../objects/page/27018-ca.md)
- [page/27019 "SAT Weight Unit of Measures"](../objects/page/27019-ca.md)
- [page/27021 "SAT Federal Motor Transports"](../objects/page/27021-ca.md)
- [page/27022 "SAT Trailer Types"](../objects/page/27022-ca.md)
- [page/27023 "SAT Permission Types"](../objects/page/27023-ca.md)
- [page/27024 "SAT Hazardous Materials"](../objects/page/27024-ca.md)
- [page/27025 "SAT Packaging Types"](../objects/page/27025-ca.md)
- [page/27026 "SAT States"](../objects/page/27026-ca.md)
- [page/27027 "SAT Municipalities"](../objects/page/27027-ca.md)
- [page/27028 "SAT Localities"](../objects/page/27028-ca.md)
- [page/27029 "SAT Suburb List"](../objects/page/27029-ca.md)
- [page/27030 "DIOT Concepts"](../objects/page/27030-ca.md)
- [page/27031 "DIOT Concept Links"](../objects/page/27031-ca.md)
- [page/27032 "DIOT Setup Wizard"](../objects/page/27032-ca.md)
- [page/27033 "DIOT Country/Region Data"](../objects/page/27033-ca.md)
- [page/27034 "Setup Vendor DIOT Type"](../objects/page/27034-ca.md)
- [page/27038 "SAT Transfer Reasons"](../objects/page/27038-ca.md)
- [page/27039 "SAT Material Types"](../objects/page/27039-ca.md)
- [page/27040 "SAT Classifications"](../objects/page/27040-ca.md)
- [page/27041 "SAT Relationship Types"](../objects/page/27041-ca.md)
- [page/27042 "SAT Use Codes"](../objects/page/27042-ca.md)
- [page/27043 "SAT Units Of Measure"](../objects/page/27043-ca.md)
- [page/27044 "SAT Country Codes"](../objects/page/27044-ca.md)
- [page/27045 "SAT International Trade Terms"](../objects/page/27045-ca.md)
- [page/27046 "SAT Custom Units"](../objects/page/27046-ca.md)
- [page/27047 "SAT Customs Regimes"](../objects/page/27047-ca.md)
- [page/27048 "SAT Customs Document Types"](../objects/page/27048-ca.md)
- [page/30471 "Shpfy TMA Review"](../objects/page/30471-ca.md)
- [page/30479 "Shpfy TMA Order Tax Lines Part"](../objects/page/30479-ca.md)
- [page/36600 "Human Resources Role Center"](../objects/page/36600-ca.md)
- [page/36601 "Payroll Role Center"](../objects/page/36601-ca.md)
- [page/36603 "Credit & Collections Mgr. RC"](../objects/page/36603-ca.md)
- [page/36623 "Credit Manager Activities"](../objects/page/36623-ca.md)
- [page/36626 "Sales Order Shipment List"](../objects/page/36626-ca.md)
- [page/36628 "Sales Order Invoice List"](../objects/page/36628-ca.md)
- [page/36629 "Customer List - Collections"](../objects/page/36629-ca.md)
- [page/36630 "Customer List - Credit Mgmt."](../objects/page/36630-ca.md)
- [page/36631 "Customer List - Order Status"](../objects/page/36631-ca.md)
- [page/36632 "Comment Sheet Part"](../objects/page/36632-ca.md)
- [page/36640 "Order Header Status Factbox"](../objects/page/36640-ca.md)
- [page/36641 "Order Lines Status Factbox"](../objects/page/36641-ca.md)
- [page/36642 "Customer Credit FactBox"](../objects/page/36642-ca.md)
- [page/36740 "Sales Tax Lines Subform Dyn"](../objects/page/36740-ca.md)
- [pageextension/10002 "SourceCodeSetupNA"](../objects/pageextension/10002-ca.md)
- [pageextension/10011 "Service Order Archive NA"](../objects/pageextension/10011-ca.md)
- [pageextension/10012 "Posted Service Credit Memo NA"](../objects/pageextension/10012-ca.md)
- [pageextension/10013 "Posted Service Credit Memos NA"](../objects/pageextension/10013-ca.md)
- [pageextension/10014 "Posted Service Invoice NA"](../objects/pageextension/10014-ca.md)
- [pageextension/10015 "Posted Service Invoices NA"](../objects/pageextension/10015-ca.md)
- [pageextension/10016 "Posted Service Inv.Update NA"](../objects/pageextension/10016-ca.md)
- [pageextension/10020 "Service Credit Memo NA"](../objects/pageextension/10020-ca.md)
- [pageextension/10021 "Service Credit Memos NA"](../objects/pageextension/10021-ca.md)
- [pageextension/10022 "Service Invoice NA"](../objects/pageextension/10022-ca.md)
- [pageextension/10023 "Service Invoices NA"](../objects/pageextension/10023-ca.md)
- [pageextension/10024 "Service Order NA"](../objects/pageextension/10024-ca.md)
- [pageextension/10025 "Service Orders NA"](../objects/pageextension/10025-ca.md)
- [pageextension/10026 "Service Quote NA"](../objects/pageextension/10026-ca.md)
- [pageextension/10027 "Service Quotes NA"](../objects/pageextension/10027-ca.md)
- [pageextension/10028 "Service Invoice Subform NA"](../objects/pageextension/10028-ca.md)
- [pageextension/10029 "ReservationWkshFactBoxNA"](../objects/pageextension/10029-ca.md)
- [pageextension/27030 "DIOT Purch. & Payables Setup"](../objects/pageextension/27030-ca.md)
- [pageextension/27031 "DIOT Vendor Card"](../objects/pageextension/27031-ca.md)
- [pageextension/27032 "DIOT General Journal"](../objects/pageextension/27032-ca.md)
- [pageextension/27033 "DIOT Purchase Invoice"](../objects/pageextension/27033-ca.md)
- [pageextension/27035 "DIOT Purchase Journal"](../objects/pageextension/27035-ca.md)
- [pageextension/27036 "DIOT Payment Journal"](../objects/pageextension/27036-ca.md)
- [pageextension/27037 "DIOT VAT Entries"](../objects/pageextension/27037-ca.md)
- [pageextension/27038 "DIOT VAT Posting Setup"](../objects/pageextension/27038-ca.md)
- [pageextension/30470 "Shpfy TMA Shop Card"](../objects/pageextension/30470-ca.md)
- [pageextension/30476 "Shpfy TMA Sales Order"](../objects/pageextension/30476-ca.md)
- [pageextension/30478 "Shpfy TMA Order Tax Lines"](../objects/pageextension/30478-ca.md)
- [pageextension/30479 "Shpfy TMA Order"](../objects/pageextension/30479-ca.md)
- [permissionset/27000 "BANKDEC-EDIT"](../objects/permissionset/27000-ca.md)
- [permissionset/27001 "BANKDEPOSIT-EDIT"](../objects/permissionset/27001-ca.md)
- [permissionset/27002 "BANKDEPOSIT-POST"](../objects/permissionset/27002-ca.md)
- [permissionset/27003 "BANKDEPOSIT-POSTED"](../objects/permissionset/27003-ca.md)
- [permissionset/27004 "BANKREC-POST"](../objects/permissionset/27004-ca.md)
- [permissionset/27005 "BANKREC-POSTED"](../objects/permissionset/27005-ca.md)
- [permissionset/30470 "Shpfy TMA"](../objects/permissionset/30470-ca.md)
- [permissionsetextension/6959 "INTELLIGENT CLOUD - Ceridian Payroll"](../objects/permissionsetextension/6959-ca.md)
- [permissionsetextension/8332 "D365 BUS PREMIUM - Ceridian Payroll"](../objects/permissionsetextension/8332-ca.md)
- [permissionsetextension/12900 "D365 BUS PREMIUM - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/12900-ca.md)
- [permissionsetextension/14538 "D365 BUS FULL ACCESS - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/14538-ca.md)
- [permissionsetextension/14867 "D365 FULL ACCESS - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/14867-ca.md)
- [permissionsetextension/15360 "D365 TEAM MEMBER - Ceridian Payroll"](../objects/permissionsetextension/15360-ca.md)
- [permissionsetextension/16465 "D365 READ - Ceridian Payroll"](../objects/permissionsetextension/16465-ca.md)
- [permissionsetextension/19183 "D365 TEAM MEMBER - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/19183-ca.md)
- [permissionsetextension/21619 "INTELLIGENT CLOUD - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/21619-ca.md)
- [permissionsetextension/27030 "D365 BASIC - DIOT - Localization for Mexico"](../objects/permissionsetextension/27030-ca.md)
- [permissionsetextension/27031 "D365 BASIC ISV - DIOT - Localization for Mexico"](../objects/permissionsetextension/27031-ca.md)
- [permissionsetextension/27032 "D365 BUS FULL ACCESS - DIOT - Localization for Mexico"](../objects/permissionsetextension/27032-ca.md)
- [permissionsetextension/27033 "D365 BUS PREMIUM - DIOT - Localization for Mexico"](../objects/permissionsetextension/27033-ca.md)
- [permissionsetextension/27034 "D365 FULL ACCESS - DIOT - Localization for Mexico"](../objects/permissionsetextension/27034-ca.md)
- [permissionsetextension/27035 "D365 READ - DIOT - Localization for Mexico"](../objects/permissionsetextension/27035-ca.md)
- [permissionsetextension/27036 "D365 TEAM MEMBER - DIOT - Localization for Mexico"](../objects/permissionsetextension/27036-ca.md)
- [permissionsetextension/27037 "INTELLIGENT CLOUD - DIOT - Localization for Mexico"](../objects/permissionsetextension/27037-ca.md)
- [permissionsetextension/30000 "D365 BASIC ISV - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/30000-ca.md)
- [permissionsetextension/33090 "D365 FULL ACCESS - Ceridian Payroll"](../objects/permissionsetextension/33090-ca.md)
- [permissionsetextension/39041 "D365 READ - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/39041-ca.md)
- [permissionsetextension/41638 "D365 BASIC ISV - Ceridian Payroll"](../objects/permissionsetextension/41638-ca.md)
- [permissionsetextension/45740 "D365 BUS FULL ACCESS - Ceridian Payroll"](../objects/permissionsetextension/45740-ca.md)
- [permissionsetextension/48543 "D365 BASIC - Envestnet Yodlee Bank Feeds"](../objects/permissionsetextension/48543-ca.md)
- [permissionsetextension/49679 "D365 BASIC - Ceridian Payroll"](../objects/permissionsetextension/49679-ca.md)
- [profile/credit manager "CREDIT MANAGER"](../objects/profile/credit-manager-ca.md)
- [profile/hr manager "HR MANAGER"](../objects/profile/hr-manager-ca.md)
- [profile/payroll administrator "PAYROLL ADMINISTRATOR"](../objects/profile/payroll-administrator-ca.md)
- [report/10000 "Account Schedule Layout"](../objects/report/10000-ca.md)
- [report/10001 "Budget"](../objects/report/10001-ca.md)
- [report/10002 "Chart of Accounts"](../objects/report/10002-ca.md)
- [report/10003 "Closing Trial Balance"](../objects/report/10003-ca.md)
- [report/10004 "Account Balances by GIFI Code"](../objects/report/10004-ca.md)
- [report/10005 "Export GIFI Info. to Excel"](../objects/report/10005-ca.md)
- [report/10007 "Consolidated Trial Balance"](../objects/report/10007-ca.md)
- [report/10008 "Consolidated Trial Balance (4)"](../objects/report/10008-ca.md)
- [report/10009 "Cross Reference by Account No."](../objects/report/10009-ca.md)
- [report/10010 "Cross Reference by Source"](../objects/report/10010-ca.md)
- [report/10017 "Currency Balances - Rec./Pay."](../objects/report/10017-ca.md)
- [report/10018 "General Ledger Worksheet"](../objects/report/10018-ca.md)
- [report/10019 "G/L Register"](../objects/report/10019-ca.md)
- [report/10021 "Trial Balance Detail/Summary"](../objects/report/10021-ca.md)
- [report/10022 "Trial Balance"](../objects/report/10022-ca.md)
- [report/10023 "Trial Balance, per Global Dim."](../objects/report/10023-ca.md)
- [report/10025 "Trial Balance, Spread G. Dim."](../objects/report/10025-ca.md)
- [report/10026 "Trial Balance, Spread Periods"](../objects/report/10026-ca.md)
- [report/10030 "Budget Amount by Period"](../objects/report/10030-ca.md)
- [report/10031 "Budget from History"](../objects/report/10031-ca.md)
- [report/10040 "Aged Accounts Receivable NA"](../objects/report/10040-ca.md)
- [report/10041 "Cash Applied"](../objects/report/10041-ca.md)
- [report/10042 "Customer Account Detail"](../objects/report/10042-ca.md)
- [report/10043 "Customer Comment List"](../objects/report/10043-ca.md)
- [report/10044 "Customer Labels NA"](../objects/report/10044-ca.md)
- [report/10045 "Customer Listing"](../objects/report/10045-ca.md)
- [report/10046 "Customer Register"](../objects/report/10046-ca.md)
- [report/10047 "Customer Sales Statistics"](../objects/report/10047-ca.md)
- [report/10048 "Customer/Item Statistics"](../objects/report/10048-ca.md)
- [report/10049 "Cust./Item Stat. by Salespers."](../objects/report/10049-ca.md)
- [report/10050 "Daily Invoicing Report"](../objects/report/10050-ca.md)
- [report/10051 "Drop Shipment Status"](../objects/report/10051-ca.md)
- [report/10052 "Item Status by Salesperson"](../objects/report/10052-ca.md)
- [report/10053 "Open Customer Entries"](../objects/report/10053-ca.md)
- [report/10054 "Open Sales Invoices by Job"](../objects/report/10054-ca.md)
- [report/10055 "Outstanding Sales Order Aging"](../objects/report/10055-ca.md)
- [report/10056 "Outstanding Sales Order Status"](../objects/report/10056-ca.md)
- [report/10057 "Projected Cash Receipts"](../objects/report/10057-ca.md)
- [report/10059 "Salesperson Commissions"](../objects/report/10059-ca.md)
- [report/10060 "Salesperson Statistics by Inv."](../objects/report/10060-ca.md)
- [report/10061 "Ship-To Address Listing"](../objects/report/10061-ca.md)
- [report/10069 "Sales Blanket Order"](../objects/report/10069-ca.md)
- [report/10070 "Sales Invoice (Pre-Printed)"](../objects/report/10070-ca.md)
- [report/10071 "Customer Stmt. (Pre-Printed)"](../objects/report/10071-ca.md)
- [report/10072 "Customer Statements"](../objects/report/10072-ca.md)
- [report/10073 "Sales Credit Memo NA"](../objects/report/10073-ca.md)
- [report/10074 "Sales Invoice NA"](../objects/report/10074-ca.md)
- [report/10075 "Sales Order"](../objects/report/10075-ca.md)
- [report/10076 "Sales Quote NA"](../objects/report/10076-ca.md)
- [report/10077 "Sales Shipment NA"](../objects/report/10077-ca.md)
- [report/10078 "Shipping Labels"](../objects/report/10078-ca.md)
- [report/10079 "UPS COD Tags"](../objects/report/10079-ca.md)
- [report/10080 "Sales Shipment per Package"](../objects/report/10080-ca.md)
- [report/10081 "Return Authorization"](../objects/report/10081-ca.md)
- [report/10082 "Return Receipt"](../objects/report/10082-ca.md)
- [report/10083 "Export Electronic Payments"](../objects/report/10083-ca.md)
- [report/10084 "Void/Transmit Elec. Payments"](../objects/report/10084-ca.md)
- [report/10085 "Aged Accounts Payable NA"](../objects/report/10085-ca.md)
- [report/10086 "Cash Application"](../objects/report/10086-ca.md)
- [report/10088 "Cash Requirements by Due Date"](../objects/report/10088-ca.md)
- [report/10089 "Payment Journal - Test"](../objects/report/10089-ca.md)
- [report/10091 "Item Statistics by Purchaser"](../objects/report/10091-ca.md)
- [report/10092 "Open Purchase Invoices by Job"](../objects/report/10092-ca.md)
- [report/10093 "Open Vendor Entries"](../objects/report/10093-ca.md)
- [report/10094 "Outstanding Order Stat. by PO"](../objects/report/10094-ca.md)
- [report/10095 "Outstanding Purch. Order Aging"](../objects/report/10095-ca.md)
- [report/10096 "Outstanding Purch.Order Status"](../objects/report/10096-ca.md)
- [report/10098 "Projected Cash Payments"](../objects/report/10098-ca.md)
- [report/10100 "Purchaser Stat. by Invoice"](../objects/report/10100-ca.md)
- [report/10101 "Reconcile AP to GL"](../objects/report/10101-ca.md)
- [report/10102 "Top __ Vendor List"](../objects/report/10102-ca.md)
- [report/10103 "Vendor Account Detail"](../objects/report/10103-ca.md)
- [report/10104 "Vendor Comment List"](../objects/report/10104-ca.md)
- [report/10105 "Vendor Labels"](../objects/report/10105-ca.md)
- [report/10106 "Vendor - Listing"](../objects/report/10106-ca.md)
- [report/10107 "Vendor Purchase Statistics"](../objects/report/10107-ca.md)
- [report/10108 "AP - Vendor Register"](../objects/report/10108-ca.md)
- [report/10113 "Vendor/Item Statistics"](../objects/report/10113-ca.md)
- [report/10114 "Vendor Item Stat. by Purchaser"](../objects/report/10114-ca.md)
- [report/10119 "Purchase Blanket Order"](../objects/report/10119-ca.md)
- [report/10120 "Purchase Credit Memo NA"](../objects/report/10120-ca.md)
- [report/10121 "Purchase Invoice NA"](../objects/report/10121-ca.md)
- [report/10122 "Purchase Order"](../objects/report/10122-ca.md)
- [report/10123 "Purchase Quote NA"](../objects/report/10123-ca.md)
- [report/10124 "Purchase Receipt NA"](../objects/report/10124-ca.md)
- [report/10125 "Purchase Order (Pre-Printed)"](../objects/report/10125-ca.md)
- [report/10126 "Return Order Confirm"](../objects/report/10126-ca.md)
- [report/10127 "Return Shipment"](../objects/report/10127-ca.md)
- [report/10130 "Availability Projection"](../objects/report/10130-ca.md)
- [report/10131 "Availability Status"](../objects/report/10131-ca.md)
- [report/10132 "Back Order Fill by Customer"](../objects/report/10132-ca.md)
- [report/10133 "Back Order Fill by Item"](../objects/report/10133-ca.md)
- [report/10135 "Item Sales Statistics"](../objects/report/10135-ca.md)
- [report/10136 "Item Transaction Detail"](../objects/report/10136-ca.md)
- [report/10137 "Inventory Labels"](../objects/report/10137-ca.md)
- [report/10138 "Inventory to G/L Reconcile"](../objects/report/10138-ca.md)
- [report/10139 "Inventory Valuation"](../objects/report/10139-ca.md)
- [report/10140 "Issue History"](../objects/report/10140-ca.md)
- [report/10141 "Item Comment List"](../objects/report/10141-ca.md)
- [report/10142 "Item Cost and Price List"](../objects/report/10142-ca.md)
- [report/10143 "Item List"](../objects/report/10143-ca.md)
- [report/10144 "Item Register"](../objects/report/10144-ca.md)
- [report/10145 "Item Sales by Customer"](../objects/report/10145-ca.md)
- [report/10146 "Item Turnover"](../objects/report/10146-ca.md)
- [report/10147 "Items by Sales Tax Group"](../objects/report/10147-ca.md)
- [report/10148 "List Price Sheet"](../objects/report/10148-ca.md)
- [report/10149 "Location List"](../objects/report/10149-ca.md)
- [report/10150 "Over Stock"](../objects/report/10150-ca.md)
- [report/10151 "Physical Inventory Count"](../objects/report/10151-ca.md)
- [report/10152 "Picking List by Item"](../objects/report/10152-ca.md)
- [report/10153 "Picking List by Order"](../objects/report/10153-ca.md)
- [report/10155 "Purchase Advice"](../objects/report/10155-ca.md)
- [report/10156 "Purchase Order Status"](../objects/report/10156-ca.md)
- [report/10157 "Sales History"](../objects/report/10157-ca.md)
- [report/10158 "Sales Order Status"](../objects/report/10158-ca.md)
- [report/10159 "Sales Promotion"](../objects/report/10159-ca.md)
- [report/10160 "Serial Number Sold History"](../objects/report/10160-ca.md)
- [report/10161 "Serial Number Status/Aging"](../objects/report/10161-ca.md)
- [report/10162 "Top __ Inventory Items"](../objects/report/10162-ca.md)
- [report/10163 "Vendor Purchases by Item"](../objects/report/10163-ca.md)
- [report/10164 "Item/Vendor Catalog"](../objects/report/10164-ca.md)
- [report/10165 "List Price Sheet V16"](../objects/report/10165-ca.md)
- [report/10166 "Sales Promotion V16"](../objects/report/10166-ca.md)
- [report/10195 "Cost Breakdown"](../objects/report/10195-ca.md)
- [report/10197 "Resource List"](../objects/report/10197-ca.md)
- [report/10198 "Resource Register"](../objects/report/10198-ca.md)
- [report/10199 "Resource Statistics"](../objects/report/10199-ca.md)
- [report/10200 "Resource Usage"](../objects/report/10200-ca.md)
- [report/10210 "Job Actual to Budget (Cost)"](../objects/report/10210-ca.md)
- [report/10211 "Job Actual to Budget (Price)"](../objects/report/10211-ca.md)
- [report/10212 "Completed Jobs"](../objects/report/10212-ca.md)
- [report/10213 "Customer Jobs (Cost)"](../objects/report/10213-ca.md)
- [report/10214 "Customer Jobs (Price)"](../objects/report/10214-ca.md)
- [report/10215 "Job Cost Budget"](../objects/report/10215-ca.md)
- [report/10216 "Job List"](../objects/report/10216-ca.md)
- [report/10217 "Job Register"](../objects/report/10217-ca.md)
- [report/10219 "Job Cost Suggested Billing"](../objects/report/10219-ca.md)
- [report/10220 "Job Cost Transaction Detail"](../objects/report/10220-ca.md)
- [report/10307 "Country/Region List"](../objects/report/10307-ca.md)
- [report/10308 "Currency List"](../objects/report/10308-ca.md)
- [report/10310 "Language List"](../objects/report/10310-ca.md)
- [report/10312 "Reason Code List"](../objects/report/10312-ca.md)
- [report/10315 "Data Dictionary"](../objects/report/10315-ca.md)
- [report/10321 "Sales Tax Area List"](../objects/report/10321-ca.md)
- [report/10322 "Sales Tax Detail by Area"](../objects/report/10322-ca.md)
- [report/10323 "Sales Tax Detail List"](../objects/report/10323-ca.md)
- [report/10324 "Sales Tax Group List"](../objects/report/10324-ca.md)
- [report/10325 "Sales Tax Jurisdiction List"](../objects/report/10325-ca.md)
- [report/10326 "Assign Tax Area to Customer"](../objects/report/10326-ca.md)
- [report/10327 "Assign Tax Area to Vendor"](../objects/report/10327-ca.md)
- [report/10328 "Assign Tax Area to Location"](../objects/report/10328-ca.md)
- [report/10400 "Check Translation Management"](../objects/report/10400-ca.md)
- [report/10401 "Check (Stub/Stub/Check)"](../objects/report/10401-ca.md)
- [report/10403 "Deposit"](../objects/report/10403-ca.md)
- [report/10408 "Bank Reconciliation"](../objects/report/10408-ca.md)
- [report/10409 "Bank Account - Reconcile"](../objects/report/10409-ca.md)
- [report/10411 "Check (Stub/Check/Stub)"](../objects/report/10411-ca.md)
- [report/10412 "Check (Check/Stub/Stub)"](../objects/report/10412-ca.md)
- [report/10413 "Three Checks per Page"](../objects/report/10413-ca.md)
- [report/10470 "Service Order-Sales Tax"](../objects/report/10470-ca.md)
- [report/10471 "Service Quote-Sales Tax"](../objects/report/10471-ca.md)
- [report/10473 "Service Credit Memo-Sales Tax"](../objects/report/10473-ca.md)
- [report/10474 "Service Invoice-Sales Tax"](../objects/report/10474-ca.md)
- [report/10476 "Elec. Sales Credit Memo MX"](../objects/report/10476-ca.md)
- [report/10477 "Elec. Sales Invoice MX"](../objects/report/10477-ca.md)
- [report/10478 "Elec. Service Cr Memo MX"](../objects/report/10478-ca.md)
- [report/10479 "Elec. Service Invoice MX"](../objects/report/10479-ca.md)
- [report/10480 "Electronic Carta Porte MX"](../objects/report/10480-ca.md)
- [report/10485 "Service Document - Test NA"](../objects/report/10485-ca.md)
- [report/10500 "GST/HST Internet File Transfer"](../objects/report/10500-ca.md)
- [report/11380 "Export Electronic Payment File"](../objects/report/11380-ca.md)
- [report/11383 "ExportElecPayments - Word"](../objects/report/11383-ca.md)
- [report/14022 "Declaration 347 Labels"](../objects/report/14022-ca.md)
- [report/14023 "Declaration 349 Labels"](../objects/report/14023-ca.md)
- [report/14030 "Official journal ledger Summ."](../objects/report/14030-ca.md)
- [report/27030 "Create DIOT Report"](../objects/report/27030-ca.md)
- [table/1450 "MS - Yodlee Bank Service Setup"](../objects/table/1450-ca.md)
- [table/1451 "MS - Yodlee Bank Acc. Link"](../objects/table/1451-ca.md)
- [table/1452 "MS - Yodlee Data Exchange Def"](../objects/table/1452-ca.md)
- [table/1453 "MS - Yodlee Bank Session"](../objects/table/1453-ca.md)
- [table/1665 "MS Ceridian Payroll Setup"](../objects/table/1665-ca.md)
- [table/10000 "PAC Web Service"](../objects/table/10000-ca.md)
- [table/10001 "PAC Web Service Detail"](../objects/table/10001-ca.md)
- [table/10002 "Document Header"](../objects/table/10002-ca.md)
- [table/10003 "Document Line"](../objects/table/10003-ca.md)
- [table/10004 "MX Electronic Invoicing Setup"](../objects/table/10004-ca.md)
- [table/10010 "IRS 1099 Form-Box"](../objects/table/10010-ca.md)
- [table/10011 "Sales Tax Amount Line"](../objects/table/10011-ca.md)
- [table/10012 "Sales Tax Amount Difference"](../objects/table/10012-ca.md)
- [table/10013 "Vendor Location"](../objects/table/10013-ca.md)
- [table/10015 "GIFI Code"](../objects/table/10015-ca.md)
- [table/10016 "IRS 1099 Adjustment"](../objects/table/10016-ca.md)
- [table/10040 "Data Dictionary Info"](../objects/table/10040-ca.md)
- [table/10100 "Account Identifier"](../objects/table/10100-ca.md)
- [table/10122 "Bank Comment Line"](../objects/table/10122-ca.md)
- [table/10123 "Posted Bank Rec. Header"](../objects/table/10123-ca.md)
- [table/10124 "Posted Bank Rec. Line"](../objects/table/10124-ca.md)
- [table/10139 "Item Location Variant Buffer"](../objects/table/10139-ca.md)
- [table/10143 "Posted Deposit Header"](../objects/table/10143-ca.md)
- [table/10144 "Posted Deposit Line"](../objects/table/10144-ca.md)
- [table/10240 "B10 Adjustment"](../objects/table/10240-ca.md)
- [table/10300 "ACH US Header"](../objects/table/10300-ca.md)
- [table/10301 "ACH US Detail"](../objects/table/10301-ca.md)
- [table/10302 "ACH US Footer"](../objects/table/10302-ca.md)
- [table/10303 "ACH RB Header"](../objects/table/10303-ca.md)
- [table/10304 "ACH RB Detail"](../objects/table/10304-ca.md)
- [table/10305 "ACH RB Footer"](../objects/table/10305-ca.md)
- [table/10306 "ACH Cecoban Header"](../objects/table/10306-ca.md)
- [table/10307 "ACH Cecoban Detail"](../objects/table/10307-ca.md)
- [table/10308 "ACH Cecoban Footer"](../objects/table/10308-ca.md)
- [table/10807 "Sales Tax Setup Wizard"](../objects/table/10807-ca.md)
- [table/10810 "EFT Export"](../objects/table/10810-ca.md)
- [table/10811 "EFT Export Workset"](../objects/table/10811-ca.md)
- [table/27000 "SAT Account Code"](../objects/table/27000-ca.md)
- [table/27001 "SAT Payment Method Code"](../objects/table/27001-ca.md)
- [table/27003 "CFDI Cancellation Reason"](../objects/table/27003-ca.md)
- [table/27004 "CFDI Export Code"](../objects/table/27004-ca.md)
- [table/27005 "CFDI Documents"](../objects/table/27005-ca.md)
- [table/27006 "CFDI Relation Document"](../objects/table/27006-ca.md)
- [table/27007 "CFDI Transport Operator"](../objects/table/27007-ca.md)
- [table/27008 "CFDI Subject to Tax"](../objects/table/27008-ca.md)
- [table/27009 "SAT Address"](../objects/table/27009-ca.md)
- [table/27010 "SAT Classification"](../objects/table/27010-ca.md)
- [table/27011 "SAT Relationship Type"](../objects/table/27011-ca.md)
- [table/27012 "SAT Use Code"](../objects/table/27012-ca.md)
- [table/27013 "SAT Unit of Measure"](../objects/table/27013-ca.md)
- [table/27014 "SAT Country Code"](../objects/table/27014-ca.md)
- [table/27016 "SAT Tax Scheme"](../objects/table/27016-ca.md)
- [table/27017 "SAT Payment Term"](../objects/table/27017-ca.md)
- [table/27018 "SAT Payment Method"](../objects/table/27018-ca.md)
- [table/27019 "SAT Weight Unit of Measure"](../objects/table/27019-ca.md)
- [table/27020 "SAT MX Resources"](../objects/table/27020-ca.md)
- [table/27021 "SAT Federal Motor Transport"](../objects/table/27021-ca.md)
- [table/27022 "SAT Trailer Type"](../objects/table/27022-ca.md)
- [table/27023 "SAT Permission Type"](../objects/table/27023-ca.md)
- [table/27024 "SAT Hazardous Material"](../objects/table/27024-ca.md)
- [table/27025 "SAT Packaging Type"](../objects/table/27025-ca.md)
- [table/27026 "SAT State"](../objects/table/27026-ca.md)
- [table/27027 "SAT Municipality"](../objects/table/27027-ca.md)
- [table/27028 "SAT Locality"](../objects/table/27028-ca.md)
- [table/27029 "SAT Suburb"](../objects/table/27029-ca.md)
- [table/27030 "DIOT Concept"](../objects/table/27030-ca.md)
- [table/27031 "DIOT Concept Link"](../objects/table/27031-ca.md)
- [table/27032 "DIOT Report Buffer"](../objects/table/27032-ca.md)
- [table/27033 "DIOT Report Vendor Buffer"](../objects/table/27033-ca.md)
- [table/27037 "SAT Material Type"](../objects/table/27037-ca.md)
- [table/27038 "SAT Transfer Reason"](../objects/table/27038-ca.md)
- [table/27039 "DIOT Country/Region Data"](../objects/table/27039-ca.md)
- [table/27045 "SAT International Trade Term"](../objects/table/27045-ca.md)
- [table/27046 "SAT Customs Unit"](../objects/table/27046-ca.md)
- [table/27047 "SAT Customs Regime"](../objects/table/27047-ca.md)
- [table/27048 "SAT Customs Document Type"](../objects/table/27048-ca.md)
- [table/36623 "Credit Manager Cue"](../objects/table/36623-ca.md)
- [tableextension/10002 "SourceCodeSetupNA"](../objects/tableextension/10002-ca.md)
- [tableextension/10010 "Service Header Archive NA"](../objects/tableextension/10010-ca.md)
- [tableextension/10011 "Service Header NA"](../objects/tableextension/10011-ca.md)
- [tableextension/10012 "Service Cr.Memo Header NA"](../objects/tableextension/10012-ca.md)
- [tableextension/10013 "Service Invoice Header NA"](../objects/tableextension/10013-ca.md)
- [tableextension/10014 "Service Line NA"](../objects/tableextension/10014-ca.md)
- [tableextension/10015 "Location NA"](../objects/tableextension/10015-ca.md)
- [tableextension/10016 "Serv. G/L Account"](../objects/tableextension/10016-ca.md)
- [tableextension/10019 "Serv. Sales Tax Amount Diff."](../objects/tableextension/10019-ca.md)
- [tableextension/10027 "Mfg. Item NA"](../objects/tableextension/10027-ca.md)
- [tableextension/10154 "Oustanding Bank Transaction"](../objects/tableextension/10154-ca.md)
- [tableextension/27030 "DIOT Purch. & Payables Setup"](../objects/tableextension/27030-ca.md)
- [tableextension/27031 "DIOT Vendor"](../objects/tableextension/27031-ca.md)
- [tableextension/27032 "DIOT Gen. Journal Line"](../objects/tableextension/27032-ca.md)
- [tableextension/27033 "DIOT Purchase Header"](../objects/tableextension/27033-ca.md)
- [tableextension/27034 "DIOT Purch. Inv. Header"](../objects/tableextension/27034-ca.md)
- [tableextension/27036 "DIOT VAT Entry"](../objects/tableextension/27036-ca.md)
- [tableextension/27037 "DIOT VAT Posting Setup"](../objects/tableextension/27037-ca.md)
- [tableextension/30470 "Shpfy TMA Shop"](../objects/tableextension/30470-ca.md)
- [tableextension/30476 "Shpfy TMA Order Header"](../objects/tableextension/30476-ca.md)
- [tableextension/30477 "Shpfy TMA Sales Header"](../objects/tableextension/30477-ca.md)
- [tableextension/30480 "Shpfy TMA Order Tax Line"](../objects/tableextension/30480-ca.md)
- [tableextension/30481 "Shpfy TMA Tax Jurisdiction"](../objects/tableextension/30481-ca.md)
- [xmlport/1661 "Import Ceridian Payroll"](../objects/xmlport/1661-ca.md)
- [xmlport/27003 "CFDI Cancellation Reason"](../objects/xmlport/27003-ca.md)
- [xmlport/27004 "CFDI Export Code"](../objects/xmlport/27004-ca.md)
- [xmlport/27008 "CFDI Subject to Tax"](../objects/xmlport/27008-ca.md)
- [xmlport/27010 "SAT Classification"](../objects/xmlport/27010-ca.md)
- [xmlport/27011 "SAT Relationship Type"](../objects/xmlport/27011-ca.md)
- [xmlport/27012 "SAT Use Code"](../objects/xmlport/27012-ca.md)
- [xmlport/27013 "SAT Unit of Measure"](../objects/xmlport/27013-ca.md)
- [xmlport/27014 "SAT Country Code"](../objects/xmlport/27014-ca.md)
- [xmlport/27015 "SAT Payment Method"](../objects/xmlport/27015-ca.md)
- [xmlport/27016 "SAT Tax Scheme"](../objects/xmlport/27016-ca.md)
- [xmlport/27017 "SAT Payment Term"](../objects/xmlport/27017-ca.md)
- [xmlport/27019 "SAT Weight Unit Of Measure"](../objects/xmlport/27019-ca.md)
- [xmlport/27021 "SAT Federal Motor Transport"](../objects/xmlport/27021-ca.md)
- [xmlport/27022 "SAT Trailer Type"](../objects/xmlport/27022-ca.md)
- [xmlport/27023 "SAT Permission Type"](../objects/xmlport/27023-ca.md)
- [xmlport/27024 "SAT Hazardous Material"](../objects/xmlport/27024-ca.md)
- [xmlport/27025 "SAT Packaging Type"](../objects/xmlport/27025-ca.md)
- [xmlport/27026 "SAT State"](../objects/xmlport/27026-ca.md)
- [xmlport/27027 "SAT Municipality"](../objects/xmlport/27027-ca.md)
- [xmlport/27028 "SAT Locality"](../objects/xmlport/27028-ca.md)
- [xmlport/27029 "SAT Suburb"](../objects/xmlport/27029-ca.md)
- [xmlport/27038 "SAT Transfer Reason"](../objects/xmlport/27038-ca.md)
- [xmlport/27039 "SAT Material Type"](../objects/xmlport/27039-ca.md)
- [xmlport/27045 "SAT International Trade Term"](../objects/xmlport/27045-ca.md)
- [xmlport/27046 "SAT Customs Unit"](../objects/xmlport/27046-ca.md)
- [xmlport/27047 "SAT Customs Regime"](../objects/xmlport/27047-ca.md)
- [xmlport/27048 "SAT Customs Document Type"](../objects/xmlport/27048-ca.md)

## Other versions

- BC30: 759 objects differ from W1 (526 fields, 104 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
