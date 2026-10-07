---
id: localization/ca
type: localization
title: Canada (CA)
summary: Canada (CA) localization of Business Central 29. It covers sales tax with tax areas and jurisdictions, GST/HST, GIFI codes, deposits, bank reconciliation and EFT payment exports, plus NA-style reports. The code also carries Mexican CFDI e-invoicing objects. Use it for Canadian tax, banking and reporting questions.
tier: official
language: en
tags:
  - localization
  - ca
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: ac393dbaa88660218cf7cfbcda22bd793368f82809577cc525e2c6bb1f4fb440
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-ca
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
added_objects: 495
replaced_objects: 147
removed_objects: 0
added_fields: 526
added_events: 103
learn_folder: LocalFunctionality/Canada
---

# Canada (CA)

> Canada (CA) localization of Business Central 29. It covers sales tax with tax areas and jurisdictions, GST/HST, GIFI codes, deposits, bank reconciliation and EFT payment exports, plus NA-style reports. The code also carries Mexican CFDI e-invoicing objects. Use it for Canadian tax, banking and reporting questions.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/canada.md) · narrative **unreviewed** (machine-written)

## Overview

The Canadian layer is built on the North American sales tax model. Tax areas, tax jurisdictions and tax details drive tax calculation in sales, purchase and service documents. Codeunit 398 "Sales Tax Calculate" gains external tax engine hooks and many events. Sales-Post (80), Purch.-Post (90) and the service posting codeunits gain procedures and events for posting sales tax to the G/L. Purchases add provincial tax area codes, GST/HST fields and a Tax To Be Expensed field on purchase lines. Learn documents sales tax, GST/HST, use and purchase tax, unrealized sales tax with payment discounts, and GIFI codes.

Banking adds deposits, bank reconciliation worksheets and electronic funds transfer (EFT) export. Bank Account gets E-Pay and export format fields. Export codeunits exist for ACH, RB, Cecoban and IAT formats, built on the data exchange framework. Learn has pages for deposits and troubleshooting reports. The localization also holds a large set of NA reports across sales, purchases, inventory, projects and service.

The code also contains Mexican objects: CFDI e-invoicing, SAT catalogs, PAC web services and related fields on sales, transfer and company tables. This input does not tie them to Canadian Learn pages. Upgrade codeunits and profiles are plumbing.

## Key points

- Sales tax: tax areas and jurisdictions, with Country/Region, Round Tax and Use External Tax Engine fields on Tax Area, and external tax engine interface and enum.
- GST/HST: GST/HST fields on VAT Entry, G/L Entry and Purchase Line, a GST/HST Tax Type enum and a Provincial Tax Area Code on purchase documents.
- GIFI codes: GIFI Code field on G/L Account and a GIFI Codes page for tax reporting.
- Deposits and bank reconciliation: Deposit Nos. and Bank Rec. Adj. Doc. Nos. in General Ledger Setup, posted deposit and bank rec codeunits and pages.
- EFT export: Bank Account export format and EFT Export Code, with ACH, RB, Cecoban and IAT export codeunits.
- Posting extensibility: many OnBefore/OnAfter events around sales tax in Sales-Post, Purch.-Post, Serv-Documents Mgt. and Sales Tax Calculate.
- Mexican CFDI e-invoicing objects (SAT catalogs, PAC services, digital stamp fields) are present in the code.
- Customer, vendor and tax-related fields on G/L Entry, Gen. Journal Line, VAT Entry and Company Information (QST Registration No., Tax Area Code).

Narrative written by Sonnet from the code diff and 8 Learn page summaries. In numbers: Canada (CA) localization of Business Central in BC29: 495 objects of its own, 147 W1 objects changed (526 fields and 103 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [eServices](#eservices) | 0 | 124 | 0 |
| [Sales](#sales) | 35 | 74 | 237 |
| [Finance](#finance) | 28 | 73 | 84 |
| [Bank](#bank) | 14 | 80 | 22 |
| [Purchases](#purchases) | 24 | 35 | 66 |
| [Inventory](#inventory) | 10 | 31 | 75 |
| [Service](#service) | 8 | 31 | 0 |
| [Projects](#projects) | 2 | 15 | 4 |
| [Foundation](#foundation) | 10 | 6 | 26 |
| [(no namespace)](#no-namespace) | 0 | 15 | 0 |
| [Utilities](#utilities) | 6 | 5 | 0 |
| [IO](#io) | 4 | 0 | 1 |
| [Microsoft](#microsoft) | 0 | 4 | 0 |
| [Security](#security) | 4 | 0 | 0 |
| [HumanResources](#humanresources) | 1 | 2 | 2 |
| [FixedAssets](#fixedassets) | 1 | 0 | 9 |

### eServices

Adds the E-Invoice management and communication codeunits (on-prem and SaaS), cancel request batches, SAT catalog update codeunits, and SAT and CFDI catalog pages and tables. These are the Mexican CFDI e-invoicing objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/10145 "E-Invoice Mgt." (own), codeunit/10146 "EInvoice Communication" (own), codeunit/10174 "EInvoice OnPrem Communication" (own), codeunit/10175 "EInvoice SaaS Communication" (own), codeunit/27030 "SAT Utilities" (own), codeunit/27031 "Update SAT Payment Catalogs" (own), page/10457 "MX Electronic Invoice Setup" (own), interface/einvoice communication v2 "EInvoice Communication V2" (own).

[All 124 objects of eServices in the diff](?ns=eServices#country-diff)

### Sales

Adds fields to sales headers, lines and posted documents for sales tax rounding, tax exemption, UPS zone and electronic document stamping. Sales-Post and Sales-Post Prepayments gain sales tax procedures and events. Adds order status pages, statistics pages and shipment and invoice posting codeunits.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md), [table/36 "Sales Header"](../objects/table/36.md), [table/37 "Sales Line"](../objects/table/37.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), [table/114 "Sales Cr.Memo Header"](../objects/table/114.md), [table/18 "Customer"](../objects/table/18.md), [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md).

[All 109 objects of Sales in the diff](?ns=Sales#country-diff)

### Finance

Adds the sales tax engine: sales tax journal, tax calculation with external tax engine hooks, and GIFI codes. Adds tax and EFT-related fields to G/L Account, journal lines, VAT Entry, Tax Area and General Ledger Setup. Gen. Jnl.-Post Line gains unrealized VAT procedures and events.

Why: Learn documents sales tax, GST/HST, unrealized sales tax and GIFI codes as the Canadian tax reporting requirements.

Objects: [codeunit/398 "Sales Tax Calculate"](../objects/codeunit/398.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/318 "Tax Area"](../objects/table/318.md), [table/320 "Tax Jurisdiction"](../objects/table/320.md), [table/322 "Tax Detail"](../objects/table/322.md), [table/254 "VAT Entry"](../objects/table/254.md), [table/15 "G/L Account"](../objects/table/15.md), [table/98 "General Ledger Setup"](../objects/table/98.md).

[All 101 objects of Finance in the diff](?ns=Finance#country-diff)

### Bank

Adds deposits, bank reconciliation worksheets and EFT export through ACH, RB, Cecoban and IAT codeunits and data exchange mapping codeunits. Bank Account, Check Ledger Entry and Bank Account Card gain fields and procedures for electronic payments and checks.

Why: Learn has pages on creating deposits and on printing troubleshooting reports.

Objects: [table/270 "Bank Account"](../objects/table/270.md), codeunit/10098 "Generate EFT" (own), codeunit/10090 "Export Payments (ACH)" (own), codeunit/10091 "Export Payments (RB)" (own), codeunit/10331 "EFT Export Mgt" (own), codeunit/10130 "Bank Reconciliation Mgt." (own), [table/272 "Check Ledger Entry"](../objects/table/272.md), [page/370 "Bank Account Card"](../objects/page/370.md).

[All 94 objects of Bank in the diff](?ns=Bank#country-diff)

### Purchases

Adds provincial tax area, GST/HST, tax exemption and expense-or-capitalize fields to purchase documents. Purch.-Post gains provincial sales tax posting procedures and events. Adds NA purchase reports and statistics pages.

Why: Learn covers use tax and purchase tax setup and GST/HST with provincial sales tax.

Objects: [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/39 "Purchase Line"](../objects/table/39.md), [table/23 "Vendor"](../objects/table/23.md), [codeunit/444 "Purchase-Post Prepayments"](../objects/codeunit/444.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [page/50 "Purchase Order"](../objects/page/50.md), report/10121 "Purchase Invoice NA" (own).

[All 59 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Inventory

Adds CFDI and transport fields to transfer documents and SAT classification fields to Item. Adds NA inventory reports such as valuation, availability and physical inventory count.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5744 "Transfer Shipment Header"](../objects/table/5744.md), [table/5740 "Transfer Header"](../objects/table/5740.md), [table/27 "Item"](../objects/table/27.md), report/10139 "Inventory Valuation" (own), report/10131 "Availability Status" (own), table/10013 "Vendor Location" (own), codeunit/10461 "Transfer Shpt. Header - Edit" (own), [table/5741 "Transfer Line"](../objects/table/5741.md).

[All 41 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Service

Adds sales tax calculation and external tax engine handling to service posting codeunits, plus NA table and page extensions, statistics pages and sales tax service reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5988 "Serv-Documents Mgt."](../objects/codeunit/5988.md), [codeunit/5987 "Serv-Posting Journals Mgt."](../objects/codeunit/5987.md), codeunit/10288 "Serv-Documents Mgt. NA" (own), report/10470 "Service Order-Sales Tax" (own), tableextension/10014 "Service Line NA" (own), pageextension/10024 "Service Order NA" (own), page/10052 "Service Order Stats." (own), [table/5902 "Service Line"](../objects/table/5902.md).

[All 39 objects of Service in the diff](?ns=Service#country-diff)

### Projects

Adds NA job and resource reports such as job actual to budget, cost breakdown and resource usage. Adds budget fields to Job Difference Buffer.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/1019 "Job Difference Buffer"](../objects/table/1019.md), report/10210 "Job Actual to Budget (Cost)" (own), report/10211 "Job Actual to Budget (Price)" (own), report/10195 "Cost Breakdown" (own), report/10216 "Job List" (own), report/10200 "Resource Usage" (own).

[All 17 objects of Projects in the diff](?ns=Projects#country-diff)

### Foundation

Company Information gains Canadian tax identifiers, such as QST Registration No. and provincial tax area, with an IsCanada procedure. Also adds No. Series Line fields, deposit and bank rec source codes, and SAT fields on units of measure and countries.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/242 "Source Code Setup"](../objects/table/242.md), [table/309 "No. Series Line"](../objects/table/309.md), [table/204 "Unit of Measure"](../objects/table/204.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [page/344 "Navigate"](../objects/page/344.md).

[All 16 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Holds upgrade codeunits for CFDI, EFT and sales tax setup, the bank reconciliation report and printing codeunit, and role profiles for credit manager, HR manager and payroll administrator.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: report/10408 "Bank Reconciliation" (own), codeunit/10124 "BankRec-Printed" (own), profile/credit manager "CREDIT MANAGER" (own), table/27008 "CFDI Subject to Tax" (own), xmlport/27008 "CFDI Subject to Tax" (own).

[All 15 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Utilities

Document Totals and Copy Document Mgt. gain sales tax procedures. Adds a data dictionary report and table, paragraph handling and entry application codeunits.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/57 "Document Totals"](../objects/codeunit/57.md), [codeunit/6620 "Copy Document Mgt."](../objects/codeunit/6620.md), codeunit/10202 "Entry Application Management" (own), report/10315 "Data Dictionary" (own), table/10040 "Data Dictionary Info" (own), [codeunit/1814 "Assisted Setup Subscribers"](../objects/codeunit/1814.md).

[All 11 objects of Utilities in the diff](?ns=Utilities#country-diff)

### IO

Data Exch. Def gains procedures for EFT payment codeunits and export file type checks. Config. Setup gets a Tax Area Code.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/1222 "Data Exch. Def"](../objects/table/1222.md), [table/1224 "Data Exch. Mapping"](../objects/table/1224.md), [table/8627 "Config. Setup"](../objects/table/8627.md), [enum/1222 "Data Exchange Definition Type"](../objects/enum/1222.md).

[All 4 objects of IO in the diff](?ns=IO#country-diff)

### Microsoft

Holds a few leftover objects, such as the B10 Adjustment table and page and declaration label reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/10240 "B10 Adjustment" (own), page/10240 "B10 Adjustments" (own), report/14022 "Declaration 347 Labels" (own), report/14023 "Declaration 349 Labels" (own).

[All 4 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets and the payables journal permission sets so the Canadian objects are covered.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [permissionset/3602 "Payables Journals - Post"](../objects/permissionset/3602.md), [permissionset/8824 "Payables Journals - Edit"](../objects/permissionset/8824.md).

[All 4 objects of Security in the diff](?ns=Security#country-diff)

### HumanResources

Adds RFC No. and License No. fields to Employee, plus Human Resources and Payroll role centers.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md), page/36600 "Human Resources Role Center" (own), page/36601 "Payroll Role Center" (own).

[All 3 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

### FixedAssets

Adds vehicle and SAT transport classification fields to Fixed Asset, such as licence plate, gross weight and trailer type.

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

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/400 "ExternalTaxEngineDefault"
- codeunit/5968 "Serv. Sales Tax Calculate"
- codeunit/9997 "Upgrade Tag Def - Country"
- codeunit/10001 "Shipment Line - Edit"
- codeunit/10011 "Ship-Post (Yes/No)"
- codeunit/10012 "Ship-Post + Print"
- codeunit/10021 "Invoice-Post (Yes/No)"
- codeunit/10022 "Invoice-Post + Print"
- codeunit/10025 "Paragraph Handling"
- codeunit/10059 "Serv. Event Subscribers NA"
- codeunit/10090 "Export Payments (ACH)"
- codeunit/10091 "Export Payments (RB)"
- codeunit/10092 "Export Payments (Cecoban)"
- codeunit/10093 "Export Payments (IAT)"
- codeunit/10094 "Export EFT (ACH)"
- codeunit/10095 "Export EFT (RB)"
- codeunit/10096 "Export EFT (Cecoban)"
- codeunit/10097 "Export EFT (IAT)"
- codeunit/10098 "Generate EFT"
- codeunit/10100 "Post Sales Tax Jnl"
- codeunit/10101 "Post- Print Sales Tax Jnl"
- codeunit/10102 "Manage Sales Tax Journal"
- codeunit/10124 "BankRec-Printed"
- codeunit/10125 "Posted Bank Rec.-Delete"
- codeunit/10126 "Bank Acc. Ledg. Entry-Reset"
- codeunit/10127 "Bank Rec. Wksh. Notification"
- codeunit/10130 "Bank Reconciliation Mgt."
- codeunit/10143 "Deposit-Printed"
- codeunit/10144 "Posted Deposit-Delete"
- codeunit/10145 "E-Invoice Mgt."
- codeunit/10146 "EInvoice Communication"
- codeunit/10148 "Sales Tax Amount Line Calc"
- codeunit/10150 "O365 Tax Settings Management"
- codeunit/10151 "E-Invoice Cancel Request Batch"
- codeunit/10152 "Serv.EInv.Cancel Request Batch"
- codeunit/10174 "EInvoice OnPrem Communication"
- codeunit/10175 "EInvoice SaaS Communication"
- codeunit/10200 "EFT Recipient Bank Account Mgt"
- codeunit/10202 "Entry Application Management"
- codeunit/10250 "Bulk Vendor Remit Reporting"
- codeunit/10288 "Serv-Documents Mgt. NA"
- codeunit/10320 "Exp. Launcher EFT"
- codeunit/10321 "Exp. Validation EFT"
- codeunit/10322 "Exp. Writing EFT"
- codeunit/10323 "Exp. External Data EFT"
- codeunit/10324 "Exp. User Feedback EFT"
- codeunit/10325 "Exp. Pre-Mapping Head EFT"
- codeunit/10326 "Exp. Mapping Head EFT US"
- codeunit/10327 "Exp. Pre-Mapping Det EFT US"
- codeunit/10328 "Exp. Mapping Det EFT US"
- codeunit/10329 "Exp. Pre-Mapping Foot EFT"
- codeunit/10330 "Exp. Mapping Foot EFT US"
- codeunit/10331 "EFT Export Mgt"
- codeunit/10332 "Exp. Mapping Head EFT CA"
- codeunit/10333 "Exp. Mapping Head EFT MX"
- codeunit/10334 "Exp. Mapping Det EFT RB"
- codeunit/10335 "Exp. Mapping Det EFT MX"
- codeunit/10336 "Exp. Mapping Foot EFT CA"
- codeunit/10337 "Exp. Mapping Foot EFT MX"
- codeunit/10338 "Exp. Pre-Mapping Det EFT CA"
- codeunit/10339 "Exp. Pre-Mapping Det EFT MX"
- codeunit/10340 "EFT Values"
- codeunit/10401 "Print Check Helper"
- codeunit/10461 "Transfer Shpt. Header - Edit"
- codeunit/10749 "Serv. Document Print NA"
- codeunit/27000 "Export Accounts"
- codeunit/27001 "Export Accounts Xml Helper"
- codeunit/27006 "Service E-Invoice Mgt."
- codeunit/27030 "SAT Utilities"
- codeunit/27031 "Update SAT Payment Catalogs"
- codeunit/27032 "Update CFDI Fields Sales Doc"
- codeunit/27090 "Serv. Export Accounts"
- codeunit/27091 "Update CFDI Fields Serv. Doc"
- codeunit/104151 "UPG. MX CFDI"
- codeunit/104152 "UPG. Data Exchange Definition"
- codeunit/104153 "Upgrade - EFT"
- codeunit/104154 "Upgrade - Sales Tax"
- codeunit/104155 "Upgrade CFDI RFC Number"
- codeunit/104156 "Upgrade VAT Setup NA"
- enum/398 "Sales Tax Country"
- enum/399 "External Tax Engine"
- enum/10012 "Sales Tax Document Area"
- enum/10025 "GST HST Tax Type"
- interface/einvoice communication v2 "EInvoice Communication V2"
- interface/external tax engine "External Tax Engine"
- page/10000 "Import Budget Information"
- page/10007 "Customer Credit Information"
- page/10009 "Customer Order Header Status"
- page/10010 "Customer Order Lines Status"
- page/10011 "Customer Order Header Part"
- page/10012 "Customer Order Lines Part"
- page/10013 "Vendor Locations"
- page/10017 "GIFI Codes"
- page/10025 "Customer Order Status"
- page/10026 "Sales Order Shipment"
- page/10027 "Sales Order Shipment Subform"
- page/10028 "Sales Order Invoice"
- page/10029 "Sales Order Invoice Subform"
- page/10038 "Sales Order Stats."
- page/10039 "Purchase Order Stats."
- page/10040 "Sales Tax Lines Subform"
- page/10041 "Sales Invoice Stats."
- page/10042 "Sales Stats."
- page/10043 "Purchase Stats."
- page/10044 "Sales Credit Memo Stats."
- page/10045 "Purchase Invoice Stats."
- page/10046 "Purch. Credit Memo Stats."
- page/10052 "Service Order Stats."
- page/10053 "Service Stats."
- page/10056 "Service Invoice Stats."
- page/10057 "Service Credit Memo Stats."
- page/10060 "Sales Tax Lines Serv. Subform"
- page/10100 "Account Identifiers"
- page/10101 "Sales Tax Journal"
- page/10125 "Posted Bank Rec. Worksheet"
- page/10126 "Posted Bank Rec. Chk Lines Sub"
- page/10127 "Posted Bank Rec. Dep Lines Sub"
- page/10128 "Posted Bank Rec. Adj Lines Sub"
- page/10129 "Posted Bank Rec. List"
- page/10130 "Bank Comment Sheet"
- page/10131 "Bank Comment List"
- page/10134 "Posted Bank Rec. Lines"
- page/10143 "Posted Deposit"
- page/10144 "Posted Deposit Subform"
- page/10147 "Posted Deposit List"
- page/10148 "Posted Deposit Lines"
- page/10150 "O365 Tax Settings Card"
- page/10151 "O365 Tax Settings List"
- page/10240 "B10 Adjustments"
- page/10350 "BC O365 Tax Settings Card"
- page/10351 "BC O365 Tax Settings List"
- page/10352 "BC O365 Tax Settings"
- page/10353 "BC O365 Tax Settings Part"
- page/10452 "Service Order Stats. Dyn"
- page/10455 "PAC Web Services"
- page/10456 "PAC Web Service Details"
- page/10457 "MX Electronic Invoice Setup"
- page/10458 "MX Electroninc - CompanyInfo"
- page/10459 "MX Electroninc - GLSetup"
- page/10461 "Posted Transfer Shpt. - Update"
- page/10807 "Sales Tax Setup Wizard"
- page/10810 "Generate EFT Files"
- page/10811 "Generate EFT File Lines"
- page/27000 "Export Electr. Accounting"
- page/27001 "SAT Account Codes"
- page/27002 "SAT Payment Method Codes"
- page/27003 "CFDI Cancellation Reasons"
- page/27004 "CFDI Export Codes"
- page/27006 "CFDI Relation Documents"
- page/27007 "CFDI Transport Operators"
- page/27008 "CFDI Subjects to Tax"
- page/27009 "SAT Addresses"
- page/27010 "Mexican CFDI Wizard"
- page/27011 "SAT Payment Terms Subform"
- page/27012 "SAT Payment Methods Subform"
- page/27013 "SAT Item Subform"
- page/27014 "SAT Customer Subform"
- page/27015 "SAT CFDI Document Information"
- page/27016 "SAT Tax Schemas"
- page/27017 "SAT Payment Terms"
- page/27018 "SAT Payment Methods"
- page/27019 "SAT Weight Unit of Measures"
- page/27021 "SAT Federal Motor Transports"
- page/27022 "SAT Trailer Types"
- page/27023 "SAT Permission Types"
- page/27024 "SAT Hazardous Materials"
- page/27025 "SAT Packaging Types"
- page/27026 "SAT States"
- page/27027 "SAT Municipalities"
- page/27028 "SAT Localities"
- page/27029 "SAT Suburb List"
- page/27038 "SAT Transfer Reasons"
- page/27039 "SAT Material Types"
- page/27040 "SAT Classifications"
- page/27041 "SAT Relationship Types"
- page/27042 "SAT Use Codes"
- page/27043 "SAT Units Of Measure"
- page/27044 "SAT Country Codes"
- page/27045 "SAT International Trade Terms"
- page/27046 "SAT Custom Units"
- page/27047 "SAT Customs Regimes"
- page/27048 "SAT Customs Document Types"
- page/36600 "Human Resources Role Center"
- page/36601 "Payroll Role Center"
- page/36603 "Credit & Collections Mgr. RC"
- page/36623 "Credit Manager Activities"
- page/36626 "Sales Order Shipment List"
- page/36628 "Sales Order Invoice List"
- page/36629 "Customer List - Collections"
- page/36630 "Customer List - Credit Mgmt."
- page/36631 "Customer List - Order Status"
- page/36632 "Comment Sheet Part"
- page/36640 "Order Header Status Factbox"
- page/36641 "Order Lines Status Factbox"
- page/36642 "Customer Credit FactBox"
- page/36740 "Sales Tax Lines Subform Dyn"
- pageextension/10002 "SourceCodeSetupNA"
- pageextension/10011 "Service Order Archive NA"
- pageextension/10012 "Posted Service Credit Memo NA"
- pageextension/10013 "Posted Service Credit Memos NA"
- pageextension/10014 "Posted Service Invoice NA"
- pageextension/10015 "Posted Service Invoices NA"
- pageextension/10016 "Posted Service Inv.Update NA"
- pageextension/10020 "Service Credit Memo NA"
- pageextension/10021 "Service Credit Memos NA"
- pageextension/10022 "Service Invoice NA"
- pageextension/10023 "Service Invoices NA"
- pageextension/10024 "Service Order NA"
- pageextension/10025 "Service Orders NA"
- pageextension/10026 "Service Quote NA"
- pageextension/10027 "Service Quotes NA"
- pageextension/10028 "Service Invoice Subform NA"
- pageextension/10029 "ReservationWkshFactBoxNA"
- profile/credit manager "CREDIT MANAGER"
- profile/hr manager "HR MANAGER"
- profile/payroll administrator "PAYROLL ADMINISTRATOR"
- report/10000 "Account Schedule Layout"
- report/10001 "Budget"
- report/10002 "Chart of Accounts"
- report/10003 "Closing Trial Balance"
- report/10004 "Account Balances by GIFI Code"
- report/10005 "Export GIFI Info. to Excel"
- report/10007 "Consolidated Trial Balance"
- report/10008 "Consolidated Trial Balance (4)"
- report/10009 "Cross Reference by Account No."
- report/10010 "Cross Reference by Source"
- report/10017 "Currency Balances - Rec./Pay."
- report/10018 "General Ledger Worksheet"
- report/10019 "G/L Register"
- report/10021 "Trial Balance Detail/Summary"
- report/10022 "Trial Balance"
- report/10023 "Trial Balance, per Global Dim."
- report/10025 "Trial Balance, Spread G. Dim."
- report/10026 "Trial Balance, Spread Periods"
- report/10030 "Budget Amount by Period"
- report/10031 "Budget from History"
- report/10040 "Aged Accounts Receivable NA"
- report/10041 "Cash Applied"
- report/10042 "Customer Account Detail"
- report/10043 "Customer Comment List"
- report/10044 "Customer Labels NA"
- report/10045 "Customer Listing"
- report/10046 "Customer Register"
- report/10047 "Customer Sales Statistics"
- report/10048 "Customer/Item Statistics"
- report/10049 "Cust./Item Stat. by Salespers."
- report/10050 "Daily Invoicing Report"
- report/10051 "Drop Shipment Status"
- report/10052 "Item Status by Salesperson"
- report/10053 "Open Customer Entries"
- report/10054 "Open Sales Invoices by Job"
- report/10055 "Outstanding Sales Order Aging"
- report/10056 "Outstanding Sales Order Status"
- report/10057 "Projected Cash Receipts"
- report/10059 "Salesperson Commissions"
- report/10060 "Salesperson Statistics by Inv."
- report/10061 "Ship-To Address Listing"
- report/10069 "Sales Blanket Order"
- report/10070 "Sales Invoice (Pre-Printed)"
- report/10071 "Customer Stmt. (Pre-Printed)"
- report/10072 "Customer Statements"
- report/10073 "Sales Credit Memo NA"
- report/10074 "Sales Invoice NA"
- report/10075 "Sales Order"
- report/10076 "Sales Quote NA"
- report/10077 "Sales Shipment NA"
- report/10078 "Shipping Labels"
- report/10079 "UPS COD Tags"
- report/10080 "Sales Shipment per Package"
- report/10081 "Return Authorization"
- report/10082 "Return Receipt"
- report/10083 "Export Electronic Payments"
- report/10084 "Void/Transmit Elec. Payments"
- report/10085 "Aged Accounts Payable NA"
- report/10086 "Cash Application"
- report/10088 "Cash Requirements by Due Date"
- report/10089 "Payment Journal - Test"
- report/10091 "Item Statistics by Purchaser"
- report/10092 "Open Purchase Invoices by Job"
- report/10093 "Open Vendor Entries"
- report/10094 "Outstanding Order Stat. by PO"
- report/10095 "Outstanding Purch. Order Aging"
- report/10096 "Outstanding Purch.Order Status"
- report/10098 "Projected Cash Payments"
- report/10100 "Purchaser Stat. by Invoice"
- report/10101 "Reconcile AP to GL"
- report/10102 "Top __ Vendor List"
- report/10103 "Vendor Account Detail"
- report/10104 "Vendor Comment List"
- report/10105 "Vendor Labels"
- report/10106 "Vendor - Listing"
- report/10107 "Vendor Purchase Statistics"
- report/10108 "AP - Vendor Register"
- report/10113 "Vendor/Item Statistics"
- report/10114 "Vendor Item Stat. by Purchaser"
- report/10119 "Purchase Blanket Order"
- report/10120 "Purchase Credit Memo NA"
- report/10121 "Purchase Invoice NA"
- report/10122 "Purchase Order"
- report/10123 "Purchase Quote NA"
- report/10124 "Purchase Receipt NA"
- report/10125 "Purchase Order (Pre-Printed)"
- report/10126 "Return Order Confirm"
- report/10127 "Return Shipment"
- report/10130 "Availability Projection"
- report/10131 "Availability Status"
- report/10132 "Back Order Fill by Customer"
- report/10133 "Back Order Fill by Item"
- report/10135 "Item Sales Statistics"
- report/10136 "Item Transaction Detail"
- report/10137 "Inventory Labels"
- report/10138 "Inventory to G/L Reconcile"
- report/10139 "Inventory Valuation"
- report/10140 "Issue History"
- report/10141 "Item Comment List"
- report/10142 "Item Cost and Price List"
- report/10143 "Item List"
- report/10144 "Item Register"
- report/10145 "Item Sales by Customer"
- report/10146 "Item Turnover"
- report/10147 "Items by Sales Tax Group"
- report/10148 "List Price Sheet"
- report/10149 "Location List"
- report/10150 "Over Stock"
- report/10151 "Physical Inventory Count"
- report/10152 "Picking List by Item"
- report/10153 "Picking List by Order"
- report/10155 "Purchase Advice"
- report/10156 "Purchase Order Status"
- report/10157 "Sales History"
- report/10158 "Sales Order Status"
- report/10159 "Sales Promotion"
- report/10160 "Serial Number Sold History"
- report/10161 "Serial Number Status/Aging"
- report/10162 "Top __ Inventory Items"
- report/10163 "Vendor Purchases by Item"
- report/10164 "Item/Vendor Catalog"
- report/10165 "List Price Sheet V16"
- report/10166 "Sales Promotion V16"
- report/10195 "Cost Breakdown"
- report/10197 "Resource List"
- report/10198 "Resource Register"
- report/10199 "Resource Statistics"
- report/10200 "Resource Usage"
- report/10210 "Job Actual to Budget (Cost)"
- report/10211 "Job Actual to Budget (Price)"
- report/10212 "Completed Jobs"
- report/10213 "Customer Jobs (Cost)"
- report/10214 "Customer Jobs (Price)"
- report/10215 "Job Cost Budget"
- report/10216 "Job List"
- report/10217 "Job Register"
- report/10219 "Job Cost Suggested Billing"
- report/10220 "Job Cost Transaction Detail"
- report/10307 "Country/Region List"
- report/10308 "Currency List"
- report/10310 "Language List"
- report/10312 "Reason Code List"
- report/10315 "Data Dictionary"
- report/10321 "Sales Tax Area List"
- report/10322 "Sales Tax Detail by Area"
- report/10323 "Sales Tax Detail List"
- report/10324 "Sales Tax Group List"
- report/10325 "Sales Tax Jurisdiction List"
- report/10326 "Assign Tax Area to Customer"
- report/10327 "Assign Tax Area to Vendor"
- report/10328 "Assign Tax Area to Location"
- report/10400 "Check Translation Management"
- report/10401 "Check (Stub/Stub/Check)"
- report/10403 "Deposit"
- report/10408 "Bank Reconciliation"
- report/10409 "Bank Account - Reconcile"
- report/10411 "Check (Stub/Check/Stub)"
- report/10412 "Check (Check/Stub/Stub)"
- report/10413 "Three Checks per Page"
- report/10470 "Service Order-Sales Tax"
- report/10471 "Service Quote-Sales Tax"
- report/10473 "Service Credit Memo-Sales Tax"
- report/10474 "Service Invoice-Sales Tax"
- report/10476 "Elec. Sales Credit Memo MX"
- report/10477 "Elec. Sales Invoice MX"
- report/10478 "Elec. Service Cr Memo MX"
- report/10479 "Elec. Service Invoice MX"
- report/10480 "Electronic Carta Porte MX"
- report/10485 "Service Document - Test NA"
- report/10500 "GST/HST Internet File Transfer"
- report/11380 "Export Electronic Payment File"
- report/11383 "ExportElecPayments - Word"
- report/14022 "Declaration 347 Labels"
- report/14023 "Declaration 349 Labels"
- report/14030 "Official journal ledger Summ."
- table/10000 "PAC Web Service"
- table/10001 "PAC Web Service Detail"
- table/10002 "Document Header"
- table/10003 "Document Line"
- table/10004 "MX Electronic Invoicing Setup"
- table/10010 "IRS 1099 Form-Box"
- table/10011 "Sales Tax Amount Line"
- table/10012 "Sales Tax Amount Difference"
- table/10013 "Vendor Location"
- table/10015 "GIFI Code"
- table/10016 "IRS 1099 Adjustment"
- table/10040 "Data Dictionary Info"
- table/10100 "Account Identifier"
- table/10122 "Bank Comment Line"
- table/10123 "Posted Bank Rec. Header"
- table/10124 "Posted Bank Rec. Line"
- table/10139 "Item Location Variant Buffer"
- table/10143 "Posted Deposit Header"
- table/10144 "Posted Deposit Line"
- table/10240 "B10 Adjustment"
- table/10300 "ACH US Header"
- table/10301 "ACH US Detail"
- table/10302 "ACH US Footer"
- table/10303 "ACH RB Header"
- table/10304 "ACH RB Detail"
- table/10305 "ACH RB Footer"
- table/10306 "ACH Cecoban Header"
- table/10307 "ACH Cecoban Detail"
- table/10308 "ACH Cecoban Footer"
- table/10807 "Sales Tax Setup Wizard"
- table/10810 "EFT Export"
- table/10811 "EFT Export Workset"
- table/27000 "SAT Account Code"
- table/27001 "SAT Payment Method Code"
- table/27003 "CFDI Cancellation Reason"
- table/27004 "CFDI Export Code"
- table/27005 "CFDI Documents"
- table/27006 "CFDI Relation Document"
- table/27007 "CFDI Transport Operator"
- table/27008 "CFDI Subject to Tax"
- table/27009 "SAT Address"
- table/27010 "SAT Classification"
- table/27011 "SAT Relationship Type"
- table/27012 "SAT Use Code"
- table/27013 "SAT Unit of Measure"
- table/27014 "SAT Country Code"
- table/27016 "SAT Tax Scheme"
- table/27017 "SAT Payment Term"
- table/27018 "SAT Payment Method"
- table/27019 "SAT Weight Unit of Measure"
- table/27020 "SAT MX Resources"
- table/27021 "SAT Federal Motor Transport"
- table/27022 "SAT Trailer Type"
- table/27023 "SAT Permission Type"
- table/27024 "SAT Hazardous Material"
- table/27025 "SAT Packaging Type"
- table/27026 "SAT State"
- table/27027 "SAT Municipality"
- table/27028 "SAT Locality"
- table/27029 "SAT Suburb"
- table/27037 "SAT Material Type"
- table/27038 "SAT Transfer Reason"
- table/27045 "SAT International Trade Term"
- table/27046 "SAT Customs Unit"
- table/27047 "SAT Customs Regime"
- table/27048 "SAT Customs Document Type"
- table/36623 "Credit Manager Cue"
- tableextension/10002 "SourceCodeSetupNA"
- tableextension/10010 "Service Header Archive NA"
- tableextension/10011 "Service Header NA"
- tableextension/10012 "Service Cr.Memo Header NA"
- tableextension/10013 "Service Invoice Header NA"
- tableextension/10014 "Service Line NA"
- tableextension/10015 "Location NA"
- tableextension/10016 "Serv. G/L Account"
- tableextension/10019 "Serv. Sales Tax Amount Diff."
- tableextension/10027 "Mfg. Item NA"
- xmlport/27003 "CFDI Cancellation Reason"
- xmlport/27004 "CFDI Export Code"
- xmlport/27008 "CFDI Subject to Tax"
- xmlport/27010 "SAT Classification"
- xmlport/27011 "SAT Relationship Type"
- xmlport/27012 "SAT Use Code"
- xmlport/27013 "SAT Unit of Measure"
- xmlport/27014 "SAT Country Code"
- xmlport/27015 "SAT Payment Method"
- xmlport/27016 "SAT Tax Scheme"
- xmlport/27017 "SAT Payment Term"
- xmlport/27019 "SAT Weight Unit Of Measure"
- xmlport/27021 "SAT Federal Motor Transport"
- xmlport/27022 "SAT Trailer Type"
- xmlport/27023 "SAT Permission Type"
- xmlport/27024 "SAT Hazardous Material"
- xmlport/27025 "SAT Packaging Type"
- xmlport/27026 "SAT State"
- xmlport/27027 "SAT Municipality"
- xmlport/27028 "SAT Locality"
- xmlport/27029 "SAT Suburb"
- xmlport/27038 "SAT Transfer Reason"
- xmlport/27039 "SAT Material Type"
- xmlport/27045 "SAT International Trade Term"
- xmlport/27046 "SAT Customs Unit"
- xmlport/27047 "SAT Customs Regime"
- xmlport/27048 "SAT Customs Document Type"

## Other versions

- BC30: 642 objects differ from W1 (526 fields, 104 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
