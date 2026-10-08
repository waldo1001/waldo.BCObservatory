---
id: localization/au
type: localization
title: Australia (AU)
summary: Australia (AU) localization of Business Central 29. It covers GST posting and settlement, Business Activity Statements (BAS), withholding tax (WHT), ABN handling, tax invoices and adjustment notes, EFT payments, post-dated checks, address validation and cost-plus pricing. It answers where AU tax, banking and reporting behavior differs from W1.
tier: official
language: en
tags:
  - localization
  - au
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:24:37.396Z"
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 836303623cf2e7a653b12c45ef4c01b9460a69f248c8ac40b4b828a97de58a4e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-au
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/12
    - object/codeunit/13
    - object/codeunit/17
    - object/codeunit/20
    - object/codeunit/80
    - object/codeunit/81
    - object/codeunit/82
    - object/codeunit/90
    - object/codeunit/103
    - object/codeunit/226
    - object/codeunit/227
    - object/codeunit/358
    - object/codeunit/365
    - object/codeunit/367
    - object/codeunit/370
    - object/codeunit/442
    - object/codeunit/444
    - object/codeunit/740
    - object/codeunit/815
    - object/codeunit/816
    - object/codeunit/1217
    - object/codeunit/1303
    - object/codeunit/1313
    - object/codeunit/1373
    - object/codeunit/1797
    - object/codeunit/5804
    - object/enum/8
    - object/enum/77
    - object/enum/89
    - object/enum/180
    - object/enum/740
    - object/page/10
    - object/page/29
    - object/page/118
    - object/page/161
    - object/page/248
    - object/page/256
    - object/page/323
    - object/page/576
    - object/page/737
    - object/page/738
    - object/page/740
    - object/page/742
    - object/page/744
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/8
    - object/report/20
    - object/report/113
    - object/report/114
    - object/report/292
    - object/report/310
    - object/report/393
    - object/report/402
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
    - object/table/45
    - object/table/49
    - object/table/55
    - object/table/79
    - object/table/81
    - object/table/83
    - object/table/92
    - object/table/93
    - object/table/98
    - object/table/112
    - object/table/113
    - object/table/114
    - object/table/115
    - object/table/120
    - object/table/122
    - object/table/123
    - object/table/124
    - object/table/125
    - object/table/156
    - object/table/179
    - object/table/181
    - object/table/187
    - object/table/225
    - object/table/242
    - object/table/254
    - object/table/256
    - object/table/270
    - object/table/271
    - object/table/272
    - object/table/288
    - object/table/290
    - object/table/311
    - object/table/312
    - object/table/330
    - object/table/379
    - object/table/380
    - object/table/383
    - object/table/461
    - object/table/740
    - object/table/743
    - object/table/746
    - object/table/1381
    - object/table/1382
    - object/table/1383
    - object/table/5050
    - object/table/5107
    - object/table/5109
    - object/table/5600
    - object/table/5800
    - object/table/6650
    - object/table/6660
    - object/table/7001
    - object/table/7002
    - object/table/7022
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/australia
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: AU
version: "29"
w1_version: "29"
added_objects: 171
replaced_objects: 121
removed_objects: 0
added_fields: 468
added_events: 22
learn_folder: LocalFunctionality/Australia
---

# Australia (AU)

> Australia (AU) localization of Business Central 29. It covers GST posting and settlement, Business Activity Statements (BAS), withholding tax (WHT), ABN handling, tax invoices and adjustment notes, EFT payments, post-dated checks, address validation and cost-plus pricing. It answers where AU tax, banking and reporting behavior differs from W1.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/australia.md) · narrative reviewed (checked by Opus)

## Overview

The AU layer is large: 292 objects, about 468 added fields, 218 procedures and 22 events. The main capabilities are GST (including full GST on prepayments and ACY amount fields), the BAS (own BAS setup, calculation sheet, export and business unit objects, plus BAS fields on G/L, VAT and journal tables), and withholding tax (own WHT posting groups, WHT entries, WHTManagement codeunit 28040, settlement and certificate reports). Posting codeunits such as Gen. Jnl.-Post Line, Sales-Post and Purch.-Post are extended with WHT and GST procedures.

Other local features: ABN on company, customer, vendor and contact records with validation, adjustment notes with BAS adjustment fields, posted tax invoice and credit memo pages and reports, EFT payment files and register, post-dated checks, Australian address validation with counties and barcode printing, and cost-plus pricing on price lines. An AU subscriber for the expense agent and incoming document vendor lookup by ABN are also present.

Learn documents these under Australia local functionality: Australian Tax overview, Withholding Tax, ABN and adjustment notes, GST on prepayments, BAS business units, EFT, addresses, Payment Times Reporting, and electronic invoicing with Peppol PINT A-NZ.

## Key points

- GST: Enable GST (Australia) and Full GST on Prepayment on General Ledger Setup, ACY VAT amount fields on lines, GST sales and purchase entry pages, and a GST settlement report.
- BAS: own BAS setup, calculation sheet, business unit, XML field and export objects, with BAS Doc. No. and BAS Version fields on G/L Entry, VAT Entry and journal lines.
- Withholding tax: WHT business and product posting groups, revenue types, WHT posting setup, WHT Entry page, settlement report and certificates, with WHT fields on vendors, items, resources and documents.
- ABN: ABN and ABN Division Part No. on company, customer, vendor and contact records; incoming documents can find a vendor by ABN.
- Adjustment notes: Adjustment, BAS Adjustment and Adjustment Applies-to fields on journals, ledger entries and sales and purchase documents.
- Tax invoices and credit memos: posted sales and purchase tax invoice and credit memo pages, number series in setup tables, and printing reports.
- Banking: EFT register, Create EFT File and Transfer EFT Register, post-dated checks, deposit slip and bank reconciliation reports.
- Addresses and pricing: county and post code validation with AMAS and barcode support; Cost-plus % and Published Price on price lines.

Narrative written by Sonnet from the code diff and 29 Learn page summaries. In numbers: Australia (AU) localization of Business Central in BC29: 171 objects of its own, 121 W1 objects changed (468 fields and 22 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 39 | 135 | 171 |
| [Purchases](#purchases) | 26 | 4 | 137 |
| [Sales](#sales) | 26 | 1 | 123 |
| [Foundation](#foundation) | 10 | 9 | 10 |
| [Bank](#bank) | 5 | 10 | 9 |
| [Inventory](#inventory) | 6 | 2 | 4 |
| [(no namespace)](#no-namespace) | 0 | 3 | 0 |
| [Text](#text) | 0 | 3 | 0 |
| [Pricing](#pricing) | 2 | 0 | 8 |
| [Security](#security) | 2 | 0 | 0 |
| [Service](#service) | 0 | 2 | 0 |
| [CRM](#crm) | 1 | 0 | 4 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [FixedAssets](#fixedassets) | 1 | 0 | 1 |
| [Integration](#integration) | 1 | 0 | 0 |
| [IO](#io) | 1 | 0 | 0 |
| [Projects](#projects) | 1 | 0 | 1 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Finance

Core of the AU layer: GST and ACY amounts, BAS setup, calculation and export, withholding tax (WHT) posting, settlement and entries, tax invoice management, post-dated checks, and many local reports. Gen. Jnl.-Post Line, Post Batch, Post Reverse, VAT Report objects, General Ledger Setup, G/L Entry, VAT Entry and journal line tables gain fields, events and procedures.

Why: Learn describes GST posting for BAS reporting, WHT withheld from vendors without an ABN and remitted to the ATO, and BAS group consolidation across business units.

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/98 "General Ledger Setup"](../objects/table/98.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/254 "VAT Entry"](../objects/table/254.md), [codeunit/11601 "BAS Management"](../objects/codeunit/11601-au.md) (own), [codeunit/28040 "WHTManagement"](../objects/codeunit/28040-au.md) (own), [report/11603 "Calculate GST Settlement"](../objects/report/11603-au.md) (own), [page/28044 "WHT Entry"](../objects/page/28044-au.md) (own).

[All 174 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Purchase documents and posted documents get ABN, WHT, adjustment, tax document and ACY GST fields. Purch.-Post, prepayment posting and invoice posting add WHT and full GST procedures. Purchases & Payables Setup holds GST groups, tax invoice number series and post-dated check settings.

Why: Learn covers ABN on vendors, WHT for vendors without an ABN, and GST on prepayments.

Objects: [table/38 "Purchase Header"](../objects/table/38.md), [table/39 "Purchase Line"](../objects/table/39.md), [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), [codeunit/444 "Purchase-Post Prepayments"](../objects/codeunit/444.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md), [table/23 "Vendor"](../objects/table/23.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [codeunit/816 "Purch. Post Invoice"](../objects/codeunit/816.md).

[All 30 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Sales documents and posted documents get WHT, adjustment, tax document type and ACY GST fields. Sales-Post and prepayment posting add WHT and full GST procedures, and tax invoice number series checks are added to posting. Includes the AU/NZ Statement report and S/T exemption fields.

Why: Learn documents adjustment notes for GST compliance and posted tax invoice and credit memo viewing.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/37 "Sales Line"](../objects/table/37.md), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md), [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/18 "Customer"](../objects/table/18.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [report/17110 "AU/NZ Statement"](../objects/report/17110-au.md) (own).

[All 27 objects of Sales in the diff](?ns=Sales#country-diff)

### Foundation

Company Information gets ABN, tax period, WHT registration and RDO fields. Country/Region gets address validation and AMAS settings. Own counties, address buffer tables and Format Address and DateFilter-Calc procedures support tax invoices, barcodes and local periods.

Why: Learn describes handling of postal codes with multiple cities and same-named cities in different states, and ABN validation.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/9 "Country/Region"](../objects/table/9.md), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md), [table/28004 "County"](../objects/table/28004-au.md) (own), [page/28003 "Counties"](../objects/page/28003-au.md) (own), [table/28002 "Address Buffer"](../objects/table/28002-au.md) (own), [codeunit/28020 "Report Management APAC"](../objects/codeunit/28020-au.md) (own).

[All 19 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Bank

Adds EFT payments (bank account EFT fields, EFT register, Create EFT File and Transfer EFT Register), post-dated check fields, and AU reports such as deposit slip, bank reconciliation, bank cash flow comparison and back-dated aged balances. Bank reconciliation posting can post unrealized WHT.

Why: Learn documents EFT vendor payments with bank file export and several bank reports.

Objects: [table/270 "Bank Account"](../objects/table/270.md), [codeunit/11603 "EFT Management"](../objects/codeunit/11603-au.md) (own), [table/11609 "EFT Register"](../objects/table/11609-au.md) (own), [report/11608 "Create EFT File"](../objects/report/11608-au.md) (own), [report/11607 "Transfer EFT Register"](../objects/report/11607-au.md) (own), [report/28023 "Deposit Slip"](../objects/report/28023-au.md) (own), [report/28021 "Bank Account Reconciliation"](../objects/report/28021-au.md) (own), [codeunit/370 "Bank Acc. Reconciliation Post"](../objects/codeunit/370.md).

[All 15 objects of Bank in the diff](?ns=Bank#country-diff)

### Inventory

Adds WHT Product Posting Group to Item, Item Template and Item Charge, a vendor exchange rate (ACY) field on item journal lines, and cost-plus price update logic in ItemCostManagement. Adds Stock Card and Stock Movement reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5804 "ItemCostManagement"](../objects/codeunit/5804.md), [table/27 "Item"](../objects/table/27.md), [table/1382 "Item Templ."](../objects/table/1382.md), [table/5800 "Item Charge"](../objects/table/5800.md), [table/83 "Item Journal Line"](../objects/table/83.md), [report/14311 "Stock Card"](../objects/report/14311-au.md) (own), [report/28022 "Stock Movement"](../objects/report/28022-au.md) (own).

[All 8 objects of Inventory in the diff](?ns=Inventory#country-diff)

### (no namespace)

Adds the BAS Export codeunit and the G/L-BAS permission set, plus a source code table extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11604 "BAS Export"](../objects/codeunit/11604-au.md) (own), [permissionset/11600 "G/L-BAS"](../objects/permissionset/11600-au.md) (own), [tableextension/28160 "SourcecodeAPAC"](../objects/tableextension/28160-au.md) (own).

[All 3 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Text

Own barcode management codeunit and two reports (BarCode Checking, BarCode Batch Job) supporting barcode printing on addresses.

Why: Learn lists barcode printing among the Australian address features.

Objects: [codeunit/28001 "BarCode Management"](../objects/codeunit/28001-au.md) (own), [report/28000 "BarCode Checking"](../objects/report/28000-au.md) (own), [report/28001 "BarCode Batch Job"](../objects/report/28001-au.md) (own).

[All 3 objects of Text in the diff](?ns=Text#country-diff)

### Pricing

Price List Line and Price Worksheet Line gain Published Price, Cost, Cost-plus % and Discount Amount fields, with procedures to update unit price by cost-plus percentage.

Why: Learn has a page on determining sales price by cost plus percentage.

Objects: [table/7001 "Price List Line"](../objects/table/7001.md), [table/7022 "Price Worksheet Line"](../objects/table/7022.md).

[All 2 objects of Pricing in the diff](?ns=Pricing#country-diff)

### Security

The LOCAL and LOCAL READ permission sets are changed to cover AU objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### Service

Adds an APAC service document management codeunit and a service manager role center page extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11612 "Serv. Document Mgt. APAC"](../objects/codeunit/11612-au.md) (own), [pageextension/28041 "Serv.ServiceMgrRoleCenter APAC"](../objects/pageextension/28041-au.md) (own).

[All 2 objects of Service in the diff](?ns=Service#country-diff)

### CRM

Contact gets ABN, Registered, ABN Division Part No. and IRD No. fields.

Why: Learn covers ABN entry and validation.

Objects: [table/5050 "Contact"](../objects/table/5050.md).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### ExpenseAgent

Adds the Expense Event Subscriber AU codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6915 "Expense Event Subscriber AU"](../objects/codeunit/6915-au.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### FixedAssets

Fixed Asset gets a WHT Product Posting Group field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md).

[All 1 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Integration

Data Migration Facade Helper gets a procedure that creates a county when needed.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1797 "Data Migration Facade Helper"](../objects/codeunit/1797.md).

[All 1 objects of Integration in the diff](?ns=Integration#country-diff)

### IO

Pre-map Incoming Purch. Doc adds FindVendorByABN and an event after setting incoming document header data, so vendors can be matched by ABN.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1217 "Pre-map Incoming Purch. Doc"](../objects/codeunit/1217.md).

[All 1 objects of IO in the diff](?ns=IO#country-diff)

### Projects

Resource gets a WHT Product Posting Group field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/156 "Resource"](../objects/table/156.md).

[All 1 objects of Projects in the diff](?ns=Projects#country-diff)

### Utilities

Adds the CodeUnit Selection page.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [page/28001 "CodeUnit Selection"](../objects/page/28001-au.md) (own).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +4 events, +37 procedures |
| [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md) | +6 procedures |
| [codeunit/17 "Gen. Jnl.-Post Reverse"](../objects/codeunit/17.md) | +2 procedures |
| [codeunit/20 "Posting Preview Event Handler"](../objects/codeunit/20.md) | +2 procedures, 1 procedures changed |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +9 procedures, 1 properties |
| [codeunit/81 "Sales-Post (Yes/No)"](../objects/codeunit/81.md) | +1 procedures |
| [codeunit/82 "Sales-Post + Print"](../objects/codeunit/82.md) | +1 procedures |
| [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md) | +1 events, +15 procedures, 1 properties |
| [codeunit/103 "Cust. Entry-Edit"](../objects/codeunit/103.md) | +1 events, +1 procedures |
| [codeunit/226 "CustEntry-Apply Posted Entries"](../objects/codeunit/226.md) | +2 procedures, 1 properties |
| [codeunit/227 "VendEntry-Apply Posted Entries"](../objects/codeunit/227.md) | +2 procedures, 1 properties |
| [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md) | +3 procedures |
| [codeunit/365 "Format Address"](../objects/codeunit/365.md) | +10 procedures |
| [codeunit/367 "CheckManagement"](../objects/codeunit/367.md) | +1 procedures |
| [codeunit/370 "Bank Acc. Reconciliation Post"](../objects/codeunit/370.md) | +1 procedures |
| [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md) | +10 procedures |
| [codeunit/444 "Purchase-Post Prepayments"](../objects/codeunit/444.md) | +11 procedures |
| [codeunit/740 "VAT Report Mediator"](../objects/codeunit/740.md) | +3 procedures |
| [codeunit/815 "Sales Post Invoice"](../objects/codeunit/815.md) | +3 procedures |
| [codeunit/816 "Purch. Post Invoice"](../objects/codeunit/816.md) | +3 procedures |
| [codeunit/1217 "Pre-map Incoming Purch. Doc"](../objects/codeunit/1217.md) | +1 events, +1 procedures |
| [codeunit/1303 "Correct Posted Sales Invoice"](../objects/codeunit/1303.md) | +1 events, +1 procedures |
| [codeunit/1313 "Correct Posted Purch. Invoice"](../objects/codeunit/1313.md) | +1 events, +1 procedures |
| [codeunit/1373 "Batch Posting Print Mgt."](../objects/codeunit/1373.md) | +1 procedures |
| [codeunit/1797 "Data Migration Facade Helper"](../objects/codeunit/1797.md) | +1 procedures |
| [codeunit/5804 "ItemCostManagement"](../objects/codeunit/5804.md) | +1 events, +2 procedures |
| [enum/8 "Country/Region Address Format"](../objects/enum/8.md) | body changes only |
| [enum/77 "Report Selection Usage"](../objects/enum/77.md) | body changes only |
| [enum/89 "Gen. Journal Template Type"](../objects/enum/89.md) | body changes only |
| [enum/180 "Reversal Entry Type"](../objects/enum/180.md) | body changes only |
| [enum/740 "VAT Report Configuration"](../objects/enum/740.md) | body changes only |
| [page/10 "Countries/Regions"](../objects/page/10.md) | +1 procedures |
| [page/29 "Vendor Ledger Entries"](../objects/page/29.md) | body changes only |
| [page/118 "General Ledger Setup"](../objects/page/118.md) | +5 procedures |
| [page/161 "Purchase Statistics"](../objects/page/161.md) | 2 procedures changed |
| [page/248 "VAT Registration Config"](../objects/page/248.md) | 2 properties |
| [page/256 "Payment Journal"](../objects/page/256.md) | +1 events |
| [page/323 "EC Sales List Reports"](../objects/page/323.md) | 1 properties |
| [page/576 "VAT Specification Subform"](../objects/page/576.md) | +4 procedures |
| [page/737 "VAT Return Period List"](../objects/page/737.md) | 1 properties |
| [page/738 "VAT Return Period Card"](../objects/page/738.md) | 1 properties |
| [page/740 "VAT Report"](../objects/page/740.md) | 2 properties |
| [page/742 "VAT Report Statement Subform"](../objects/page/742.md) | +1 procedures, 1 properties |
| [page/744 "VAT Report List"](../objects/page/744.md) | 2 properties |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/8 "Budget"](../objects/report/8.md) | +1 procedures |
| [report/20 "Calc. and Post VAT Settlement"](../objects/report/20.md) | +1 events, +4 procedures |
| [report/113 "Customer/Item Sales"](../objects/report/113.md) | +1 procedures, 2 properties |
| [report/114 "Salesperson - Sales Statistics"](../objects/report/114.md) | 1 properties |
| [report/292 "Copy Sales Document"](../objects/report/292.md) | +1 events |
| [report/310 "Vendor - Labels"](../objects/report/310.md) | 1 procedures changed |
| [report/393 "Suggest Vendor Payments"](../objects/report/393.md) | +1 procedures |
| [report/402 "Purchase Document - Test"](../objects/report/402.md) | +1 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +2 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +3 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +6 fields |
| [table/18 "Customer"](../objects/table/18.md) | +10 fields |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +9 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +12 fields |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +12 fields |
| [table/27 "Item"](../objects/table/27.md) | +1 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | body changes only |
| [table/36 "Sales Header"](../objects/table/36.md) | +9 fields, +4 procedures |
| [table/37 "Sales Line"](../objects/table/37.md) | +11 fields, +1 events, +13 procedures |
| [table/38 "Purchase Header"](../objects/table/38.md) | +12 fields, +1 events, +6 procedures |
| [table/39 "Purchase Line"](../objects/table/39.md) | +10 fields, +1 events, +16 procedures |
| [table/45 "G/L Register"](../objects/table/45.md) | +2 fields, +1 procedures |
| [table/49 "Invoice Post. Buffer"](../objects/table/49.md) | +12 fields |
| [table/55 "Invoice Posting Buffer"](../objects/table/55.md) | +10 fields, +1 procedures |
| [table/79 "Company Information"](../objects/table/79.md) | +7 fields, 3 fields changed, +4 events |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +38 fields, +2 events, +4 procedures |
| [table/83 "Item Journal Line"](../objects/table/83.md) | +1 fields |
| [table/92 "Customer Posting Group"](../objects/table/92.md) | +1 fields |
| [table/93 "Vendor Posting Group"](../objects/table/93.md) | +2 fields |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +22 fields, 1 fields changed, +4 procedures |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +12 fields |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +10 fields, +1 procedures |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +15 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +9 fields, +1 procedures |
| [table/120 "Purch. Rcpt. Header"](../objects/table/120.md) | +7 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +12 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +9 fields, +1 procedures |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +15 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +8 fields, +1 procedures |
| [table/156 "Resource"](../objects/table/156.md) | +1 fields |
| [table/179 "Reversal Entry"](../objects/table/179.md) | +4 procedures |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +38 fields |
| [table/187 "VAT Posting Parameters"](../objects/table/187.md) | +1 fields |
| [table/225 "Post Code"](../objects/table/225.md) | 1 fields changed |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +1 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +15 fields, +2 procedures |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields |
| [table/270 "Bank Account"](../objects/table/270.md) | +5 fields, 2 fields changed |
| [table/271 "Bank Account Ledger Entry"](../objects/table/271.md) | +1 fields |
| [table/272 "Check Ledger Entry"](../objects/table/272.md) | +3 fields |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +1 fields, 2 fields changed |
| [table/290 "VAT Amount Line"](../objects/table/290.md) | +9 fields, +5 procedures |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +12 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +16 fields |
| [table/330 "Currency Exchange Rate"](../objects/table/330.md) | +2 fields, +2 procedures |
| [table/379 "Detailed Cust. Ledg. Entry"](../objects/table/379.md) | +1 fields |
| [table/380 "Detailed Vendor Ledg. Entry"](../objects/table/380.md) | +1 fields |
| [table/383 "Detailed CV Ledg. Entry Buffer"](../objects/table/383.md) | +2 fields, 2 fields changed |
| [table/461 "Prepayment Inv. Line Buffer"](../objects/table/461.md) | +2 fields |
| [table/740 "VAT Report Header"](../objects/table/740.md) | +4 fields |
| [table/743 "VAT Report Setup"](../objects/table/743.md) | +1 fields |
| [table/746 "VAT Reports Configuration"](../objects/table/746.md) | +3 fields |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +8 fields, 1 fields changed |
| [table/1382 "Item Templ."](../objects/table/1382.md) | +1 fields |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +9 fields, 1 fields changed |
| [table/5050 "Contact"](../objects/table/5050.md) | +4 fields |
| [table/5107 "Sales Header Archive"](../objects/table/5107.md) | +5 fields |
| [table/5109 "Purchase Header Archive"](../objects/table/5109.md) | +7 fields |
| [table/5600 "Fixed Asset"](../objects/table/5600.md) | +1 fields |
| [table/5800 "Item Charge"](../objects/table/5800.md) | +1 fields |
| [table/6650 "Return Shipment Header"](../objects/table/6650.md) | +4 fields |
| [table/6660 "Return Receipt Header"](../objects/table/6660.md) | +7 fields |
| [table/7001 "Price List Line"](../objects/table/7001.md) | +4 fields, +1 procedures |
| [table/7002 "Sales Price"](../objects/table/7002.md) | +4 fields, +1 procedures |
| [table/7022 "Price Worksheet Line"](../objects/table/7022.md) | +4 fields, +1 procedures |

## Objects of its own

171 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-au.md)
- [codeunit/6915 "Expense Event Subscriber AU"](../objects/codeunit/6915-au.md)
- [codeunit/11600 "ABN Management"](../objects/codeunit/11600-au.md)
- [codeunit/11601 "BAS Management"](../objects/codeunit/11601-au.md)
- [codeunit/11602 "Import Subsidiary"](../objects/codeunit/11602-au.md)
- [codeunit/11603 "EFT Management"](../objects/codeunit/11603-au.md)
- [codeunit/11604 "BAS Export"](../objects/codeunit/11604-au.md)
- [codeunit/11612 "Serv. Document Mgt. APAC"](../objects/codeunit/11612-au.md)
- [codeunit/17100 "Recurring Amount - Distribute"](../objects/codeunit/17100-au.md)
- [codeunit/28000 "Post Code Check"](../objects/codeunit/28000-au.md)
- [codeunit/28001 "BarCode Management"](../objects/codeunit/28001-au.md)
- [codeunit/28002 "Serv. Post Code Check"](../objects/codeunit/28002-au.md)
- [codeunit/28020 "Report Management APAC"](../objects/codeunit/28020-au.md)
- [codeunit/28040 "WHTManagement"](../objects/codeunit/28040-au.md)
- [codeunit/28041 "G/L Reg.-WHT Entries"](../objects/codeunit/28041-au.md)
- [codeunit/28042 "Service Format Address APAC"](../objects/codeunit/28042-au.md)
- [codeunit/28066 "Purch. Cr. Memo Hdr. - Edit"](../objects/codeunit/28066-au.md)
- [codeunit/28070 "TaxInvoiceManagement"](../objects/codeunit/28070-au.md)
- [codeunit/28071 "Purch. Tax Inv.-Printed"](../objects/codeunit/28071-au.md)
- [codeunit/28072 "Sales Tax Inv.-Printed"](../objects/codeunit/28072-au.md)
- [codeunit/28073 "Purch. Tax Cr.Memo-Printed"](../objects/codeunit/28073-au.md)
- [codeunit/28074 "Sales Tax Cr.Memo-Printed"](../objects/codeunit/28074-au.md)
- [codeunit/28090 "PostDatedCheckMgt"](../objects/codeunit/28090-au.md)
- [page/11600 "BAS Setup"](../objects/page/11600-au.md)
- [page/11601 "BAS Calculation Sheet"](../objects/page/11601-au.md)
- [page/11602 "BAS Calc. Schedule Fields"](../objects/page/11602-au.md)
- [page/11603 "BAS Calc. Schedule List"](../objects/page/11603-au.md)
- [page/11604 "BAS Business Units"](../objects/page/11604-au.md)
- [page/11605 "BAS ATO Receipt"](../objects/page/11605-au.md)
- [page/11606 "BAS Calc. Sheet Entries"](../objects/page/11606-au.md)
- [page/11607 "BAS Comment Lines"](../objects/page/11607-au.md)
- [page/11608 "BAS Setup Names"](../objects/page/11608-au.md)
- [page/11609 "BAS Setup Preview"](../objects/page/11609-au.md)
- [page/11610 "BAS Setup Preview Subform"](../objects/page/11610-au.md)
- [page/11611 "BAS - XML Field IDs"](../objects/page/11611-au.md)
- [page/11612 "BAS XML Field Setup Names"](../objects/page/11612-au.md)
- [page/11613 "BAS Business Units-Settlement"](../objects/page/11613-au.md)
- [page/11614 "BAS - XML Field IDs Setup"](../objects/page/11614-au.md)
- [page/11615 "EFT Register"](../objects/page/11615-au.md)
- [page/17101 "Amount Distribution"](../objects/page/17101-au.md)
- [page/28001 "CodeUnit Selection"](../objects/page/28001-au.md)
- [page/28003 "Counties"](../objects/page/28003-au.md)
- [page/28040 "WHT Business Posting Group"](../objects/page/28040-au.md)
- [page/28041 "WHT Product Posting Group"](../objects/page/28041-au.md)
- [page/28042 "WHT Revenue Types"](../objects/page/28042-au.md)
- [page/28043 "WHT Posting Setup"](../objects/page/28043-au.md)
- [page/28044 "WHT Entry"](../objects/page/28044-au.md)
- [page/28066 "Posted Purch. Cr.Memo - Update"](../objects/page/28066-au.md)
- [page/28071 "Posted Sales Tax Invoice"](../objects/page/28071-au.md)
- [page/28072 "Posted Sales Tax Inv. Subform"](../objects/page/28072-au.md)
- [page/28073 "Posted Sales Tax Credit Memo"](../objects/page/28073-au.md)
- [page/28074 "Posted Sales Tax Cr. Memo Sub"](../objects/page/28074-au.md)
- [page/28075 "Posted Purchase Tax Invoice"](../objects/page/28075-au.md)
- [page/28076 "Posted Purch. Tax Inv. Subform"](../objects/page/28076-au.md)
- [page/28077 "Posted Purch. Tax Credit Memo"](../objects/page/28077-au.md)
- [page/28078 "Posted Purch. Tax Cr. Memo Sub"](../objects/page/28078-au.md)
- [page/28079 "Posted Purch. Tax Invoices"](../objects/page/28079-au.md)
- [page/28080 "Posted Purch. Tax Cr. Memos"](../objects/page/28080-au.md)
- [page/28081 "Posted Sales Tax Invoices"](../objects/page/28081-au.md)
- [page/28082 "Posted Sales Tax Cr. Memos"](../objects/page/28082-au.md)
- [page/28090 "Post Dated Checks"](../objects/page/28090-au.md)
- [page/28091 "Post Dated Checks List"](../objects/page/28091-au.md)
- [page/28092 "Post Dated Checks-Purchases"](../objects/page/28092-au.md)
- [page/28093 "Post Dated Checks List-Purch."](../objects/page/28093-au.md)
- [page/28164 "GST Purchase Entries"](../objects/page/28164-au.md)
- [page/28165 "GST Sales Entries"](../objects/page/28165-au.md)
- [page/28166 "GST Purchase Entries Preview"](../objects/page/28166-au.md)
- [page/28167 "GST Sales Entries Preview"](../objects/page/28167-au.md)
- [pageextension/28040 "SourceCodeSetupAPAC"](../objects/pageextension/28040-au.md)
- [pageextension/28041 "Serv.ServiceMgrRoleCenter APAC"](../objects/pageextension/28041-au.md)
- [permissionset/11600 "G/L-BAS"](../objects/permissionset/11600-au.md)
- [report/11600 "Withholding Summary"](../objects/report/11600-au.md)
- [report/11603 "Calculate GST Settlement"](../objects/report/11603-au.md)
- [report/11604 "BAS-Update"](../objects/report/11604-au.md)
- [report/11605 "Export BAS Setup to Excel"](../objects/report/11605-au.md)
- [report/11606 "Print BAS Export File"](../objects/report/11606-au.md)
- [report/11607 "Transfer EFT Register"](../objects/report/11607-au.md)
- [report/11608 "Create EFT File"](../objects/report/11608-au.md)
- [report/14303 "WHT Certificate"](../objects/report/14303-au.md)
- [report/14304 "WHT certificate preprint"](../objects/report/14304-au.md)
- [report/14305 "WHT Certificate TH - Copy"](../objects/report/14305-au.md)
- [report/14306 "WHT certificate preprint Copy"](../objects/report/14306-au.md)
- [report/14307 "WHT PND 1"](../objects/report/14307-au.md)
- [report/14308 "WHT PND 2"](../objects/report/14308-au.md)
- [report/14309 "WHT PND 3"](../objects/report/14309-au.md)
- [report/14310 "WHT Report - PND 53"](../objects/report/14310-au.md)
- [report/14311 "Stock Card"](../objects/report/14311-au.md)
- [report/16626 "Certificate of Creditable tax"](../objects/report/16626-au.md)
- [report/16627 "Monthly Remittance Return WHT"](../objects/report/16627-au.md)
- [report/16628 "Annual Information Return WHT"](../objects/report/16628-au.md)
- [report/16629 "Quarterly VAT Return"](../objects/report/16629-au.md)
- [report/16630 "E-Filing"](../objects/report/16630-au.md)
- [report/16631 "Monthly VAT Declaration"](../objects/report/16631-au.md)
- [report/16632 "WHT E-Filing"](../objects/report/16632-au.md)
- [report/17109 "Transaction Detail Report"](../objects/report/17109-au.md)
- [report/17110 "AU/NZ Statement"](../objects/report/17110-au.md)
- [report/17111 "Items Received & Not Invoiced"](../objects/report/17111-au.md)
- [report/17116 "Aged Acc. Rec. (BackDating)"](../objects/report/17116-au.md)
- [report/17117 "Aged Acc. Pay. (BackDating)"](../objects/report/17117-au.md)
- [report/28000 "BarCode Checking"](../objects/report/28000-au.md)
- [report/28001 "BarCode Batch Job"](../objects/report/28001-au.md)
- [report/28020 "Bank Detail Cashflow Compare"](../objects/report/28020-au.md)
- [report/28021 "Bank Account Reconciliation"](../objects/report/28021-au.md)
- [report/28022 "Stock Movement"](../objects/report/28022-au.md)
- [report/28023 "Deposit Slip"](../objects/report/28023-au.md)
- [report/28024 "Balance Sheet"](../objects/report/28024-au.md)
- [report/28025 "Income Statement"](../objects/report/28025-au.md)
- [report/28026 "Financial Analysis Report"](../objects/report/28026-au.md)
- [report/28027 "VAT Report - Vendor"](../objects/report/28027-au.md)
- [report/28028 "VAT Report - Customer"](../objects/report/28028-au.md)
- [report/28029 "Purchase Receipts"](../objects/report/28029-au.md)
- [report/28040 "WHT Certificate - Other"](../objects/report/28040-au.md)
- [report/28041 "Calc. and Post WHT Settlement"](../objects/report/28041-au.md)
- [report/28043 "WHT Certificate - Other Copy"](../objects/report/28043-au.md)
- [report/28070 "Pending Sales Tax Invoice"](../objects/report/28070-au.md)
- [report/28071 "Purch. - Tax Invoice"](../objects/report/28071-au.md)
- [report/28072 "Sales - Tax Invoice"](../objects/report/28072-au.md)
- [report/28073 "Purch. - Tax Cr. Memo"](../objects/report/28073-au.md)
- [report/28074 "Sales - Tax Cr. Memo"](../objects/report/28074-au.md)
- [report/28090 "Post Dated Checks"](../objects/report/28090-au.md)
- [report/28091 "Create Check Installments"](../objects/report/28091-au.md)
- [report/28092 "PDC Acknowledgement Receipt"](../objects/report/28092-au.md)
- [report/28140 "Adjust Settlement Exch. Rates"](../objects/report/28140-au.md)
- [report/28160 "G/L Journal"](../objects/report/28160-au.md)
- [report/28161 "Journals"](../objects/report/28161-au.md)
- [report/28162 "G/L Trial Balance"](../objects/report/28162-au.md)
- [report/28163 "G/L Detail Trial Balance"](../objects/report/28163-au.md)
- [report/28164 "GST Purchase Report"](../objects/report/28164-au.md)
- [report/28165 "GST Sales Report"](../objects/report/28165-au.md)
- [report/28166 "BAS - Import/Export"](../objects/report/28166-au.md)
- [report/28167 "BAS - Import/Export Setup"](../objects/report/28167-au.md)
- [table/11600 "BAS Setup"](../objects/table/11600-au.md)
- [table/11601 "BAS Calculation Sheet"](../objects/table/11601-au.md)
- [table/11602 "BAS XML Field ID"](../objects/table/11602-au.md)
- [table/11603 "BAS Business Unit"](../objects/table/11603-au.md)
- [table/11604 "BAS Calc. Sheet Entry"](../objects/table/11604-au.md)
- [table/11605 "BAS Comment Line"](../objects/table/11605-au.md)
- [table/11606 "BAS Setup Name"](../objects/table/11606-au.md)
- [table/11607 "BAS XML Field Setup Name"](../objects/table/11607-au.md)
- [table/11608 "BAS XML Field ID Setup"](../objects/table/11608-au.md)
- [table/11609 "EFT Register"](../objects/table/11609-au.md)
- [table/16608 "Temp WHT Entry - EFiling"](../objects/table/16608-au.md)
- [table/28002 "Address Buffer"](../objects/table/28002-au.md)
- [table/28003 "Address ID"](../objects/table/28003-au.md)
- [table/28004 "County"](../objects/table/28004-au.md)
- [table/28040 "WHT Business Posting Group"](../objects/table/28040-au.md)
- [table/28041 "WHT Product Posting Group"](../objects/table/28041-au.md)
- [table/28042 "WHT Revenue Types"](../objects/table/28042-au.md)
- [table/28043 "WHT Posting Setup"](../objects/table/28043-au.md)
- [table/28044 "WHT Entry"](../objects/table/28044-au.md)
- [table/28045 "WHT Certificate Buffer"](../objects/table/28045-au.md)
- [table/28046 "Temp WHT Entry"](../objects/table/28046-au.md)
- [table/28070 "Tax Posting Buffer"](../objects/table/28070-au.md)
- [table/28071 "Sales Tax Invoice Header"](../objects/table/28071-au.md)
- [table/28072 "Sales Tax Invoice Line"](../objects/table/28072-au.md)
- [table/28073 "Sales Tax Cr.Memo Header"](../objects/table/28073-au.md)
- [table/28074 "Sales Tax Cr.Memo Line"](../objects/table/28074-au.md)
- [table/28075 "Purch. Tax Inv. Header"](../objects/table/28075-au.md)
- [table/28076 "Purch. Tax Inv. Line"](../objects/table/28076-au.md)
- [table/28077 "Purch. Tax Cr. Memo Hdr."](../objects/table/28077-au.md)
- [table/28078 "Purch. Tax Cr. Memo Line"](../objects/table/28078-au.md)
- [table/28079 "Tax Document Buffer Build"](../objects/table/28079-au.md)
- [table/28080 "Tax Document Buffer"](../objects/table/28080-au.md)
- [table/28090 "Post Dated Check Line"](../objects/table/28090-au.md)
- [table/28160 "GST Purchase Entry"](../objects/table/28160-au.md)
- [table/28161 "GST Sales Entry"](../objects/table/28161-au.md)
- [tableextension/28040 "SourceCodeSetupAPAC"](../objects/tableextension/28040-au.md)
- [tableextension/28072 "Serv. Sales Tax Invoice Line"](../objects/tableextension/28072-au.md)
- [tableextension/28074 "Serv. Sales Tax Cr.Memo Line"](../objects/tableextension/28074-au.md)
- [tableextension/28160 "SourcecodeAPAC"](../objects/tableextension/28160-au.md)
- [xmlport/16630 "WHT-EFiling"](../objects/xmlport/16630-au.md)

## Other versions

- BC30: 292 objects differ from W1 (468 fields, 22 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
