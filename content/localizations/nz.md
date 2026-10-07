---
id: localization/nz
type: localization
title: NewZealand (NZ)
summary: New Zealand localization of Business Central 29. It adds GST posting with BAS reporting, withholding tax (WHT), IRD numbers and adjustment notes, tax invoices, EFT bank payments, post-dated checks, cost-plus pricing and NZ address handling. It answers which objects, fields and reports carry these local features.
tier: official
language: en
tags:
  - localization
  - nz
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 3ebae0feebff0ca5e816da646a67726f5b5b50080db7268ed063951ed44cbc88
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-nz
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
    - object/page/10
    - object/page/29
    - object/page/118
    - object/page/161
    - object/page/248
    - object/page/256
    - object/page/323
    - object/page/576
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/8
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
    - topic/business-central/business-functionality/local-functionality/new-zealand
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: NZ
version: "29"
w1_version: "29"
added_objects: 170
replaced_objects: 109
removed_objects: 0
added_fields: 459
added_events: 21
learn_folder: LocalFunctionality/NewZealand
---

# NewZealand (NZ)

> New Zealand localization of Business Central 29. It adds GST posting with BAS reporting, withholding tax (WHT), IRD numbers and adjustment notes, tax invoices, EFT bank payments, post-dated checks, cost-plus pricing and NZ address handling. It answers which objects, fields and reports carry these local features.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/new-zealand.md) · narrative **unreviewed** (machine-written)

## Overview

The NZ layer is built mostly on an APAC code base shared with Australia, so many objects and fields carry ABN, BAS and GST names. It adds 170 own objects and changes W1 objects, with 459 fields, 210 procedures and 21 events added. The main areas are GST and BAS (BAS Management, BAS setup pages, GST entries, settlement fields on VAT Entry), withholding tax (WHTManagement, WHT posting groups, WHT Entry, certificates and settlement), and tax invoices and tax credit memos (TaxInvoiceManagement, posted tax document pages and reports).

Posting is extended through added procedures in Gen. Jnl.-Post Line, Sales-Post, Purch.-Post, the prepayment codeunits and the invoice posting codeunits. They handle WHT, full GST on prepayments, ACY amounts and adjustment applies-to. Setup sits in General Ledger Setup (Enable GST, Enable WHT, Enable IRD No., Enable Tax Invoices), Sales & Receivables Setup and Purchases & Payables Setup.

Banking adds EFT Management, EFT Register, the Transfer EFT Register and Create EFT File reports, and post-dated checks. Learn documents the local features: Addresses in New Zealand, withholding tax setup and settlement, IRD numbers and adjustment notes, GST posting and prepayments, EFT, cost-plus pricing, statutory financial reports, and e-invoicing with Peppol PINT A-NZ.

## Key points

- GST posting with BAS: BAS Management codeunit, BAS setup and calculation sheet pages, BAS fields on G/L Entry and VAT Entry, and the Calculate GST Settlement report.
- Withholding tax: WHT business and product posting groups, WHT revenue types and posting setup, WHT Entry, WHT certificate reports, and the Calc. and Post WHT Settlement report.
- IRD numbers and adjustment notes: IRD No. on Company Information, Customer, Vendor and Contact, plus Adjustment, BAS Adjustment and Adjustment Applies-to fields on journal lines, documents and ledger entries.
- Full GST on prepayments and ACY VAT amounts: extra fields on sales and purchase lines, plus procedures in the prepayment posting codeunits.
- Tax invoices and tax credit memos: TaxInvoiceManagement, posted tax invoice and credit memo pages, and the tax invoice reports.
- EFT payments: EFT fields on Bank Account, Vendor and journal lines, EFT Register, Transfer EFT Register and Create EFT File.
- Post-dated checks, check installments, and the AU/NZ Statement and back-dated aged receivables and payables reports.
- Cost-plus pricing fields (Published Price, Cost, Cost-plus %) on price list lines, and NZ address handling with AMAS and counties.

Narrative written by Sonnet from the code diff and 26 Learn page summaries. In numbers: NewZealand (NZ) localization of Business Central in BC29: 170 objects of its own, 109 W1 objects changed (459 fields and 21 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 27 | 136 | 162 |
| [Purchases](#purchases) | 26 | 4 | 137 |
| [Sales](#sales) | 26 | 1 | 123 |
| [Foundation](#foundation) | 10 | 9 | 10 |
| [Bank](#bank) | 5 | 10 | 9 |
| [Inventory](#inventory) | 6 | 2 | 4 |
| [Text](#text) | 0 | 3 | 0 |
| [Pricing](#pricing) | 2 | 0 | 8 |
| [Security](#security) | 2 | 0 | 0 |
| [Service](#service) | 0 | 2 | 0 |
| [(no namespace)](#no-namespace) | 0 | 1 | 0 |
| [CRM](#crm) | 1 | 0 | 4 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [FixedAssets](#fixedassets) | 1 | 0 | 1 |
| [Integration](#integration) | 1 | 0 | 0 |
| [IO](#io) | 1 | 0 | 0 |
| [Projects](#projects) | 1 | 0 | 1 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Finance

Adds GST and BAS handling, with BAS Management, the BAS setup, calculation sheet and ATO receipt pages, and GST sales and purchase entry pages. Adds withholding tax (WHTManagement, WHT posting groups, revenue types, posting setup, WHT Entry), tax invoice management and the posted tax document pages. W1 tables get BAS, WHT, adjustment and ACY fields, and General Ledger Setup gets the enable switches. Posting codeunits get WHT and GST procedures and a few events. Many local reports are added, including GST settlement, WHT certificates, balance sheet and income statement.

Why: Learn describes GST as reported in the Business Activity Statement. WHT is withheld from vendors without IRD numbers and remitted through the BAS. Adjustment notes adjust GST claims when consideration changes.

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/98 "General Ledger Setup"](../objects/table/98.md), [table/254 "VAT Entry"](../objects/table/254.md), [codeunit/11601 "BAS Management"](../objects/codeunit/11601-nz.md) (own), [codeunit/28040 "WHTManagement"](../objects/codeunit/28040-nz.md) (own), [table/81 "Gen. Journal Line"](../objects/table/81.md), [page/28044 "WHT Entry"](../objects/page/28044-nz.md) (own), [report/11603 "Calculate GST Settlement"](../objects/report/11603-nz.md) (own).

[All 163 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Vendor, purchase document and posted document tables get ABN, IRD No., WHT group, adjustment, tax document and ACY amount fields. Purchases & Payables Setup gets GST groups, WHT certificate numbering, tax invoice number series and post-dated check settings. Purch.-Post and the prepayment codeunits get WHT and full GST procedures. Adds the Items Received & Not Invoiced and Purchase Receipts reports.

Why: Learn explains that vendors without IRD numbers have WHT withheld according to WHT Posting Setup.

Objects: [table/38 "Purchase Header"](../objects/table/38.md), [table/39 "Purchase Line"](../objects/table/39.md), [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), [codeunit/444 "Purchase-Post Prepayments"](../objects/codeunit/444.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md), [table/23 "Vendor"](../objects/table/23.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [codeunit/816 "Purch. Post Invoice"](../objects/codeunit/816.md).

[All 30 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Customer and sales document tables get IRD No., sales tax exemption, WHT, adjustment, tax document type and ACY fields. Sales-Post, prepayment and invoice posting codeunits get WHT and full GST procedures. Sales & Receivables Setup gets tax invoice number series and post-dated check settings. Adds the AU/NZ Statement report.

Why: Learn covers GST on prepayments and adjustment notes (credit memos) for sales.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/37 "Sales Line"](../objects/table/37.md), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md), [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/18 "Customer"](../objects/table/18.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [report/17110 "AU/NZ Statement"](../objects/report/17110-nz.md) (own).

[All 27 objects of Sales in the diff](?ns=Sales#country-diff)

### Foundation

Company Information gets ABN, IRD No., WHT Registration ID, RDO Code and tax period fields. Address handling adds counties, address buffer and ID tables, AMAS and address validation settings on Country/Region, and barcode and tax document address procedures in Format Address. DateFilter-Calc gets period verification procedures.

Why: Learn explains that NZ postal codes can have multiple cities and that addresses use the Delivery Point Identifier (DPID) for validation and barcodes.

Objects: [table/79 "Company Information"](../objects/table/79.md), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [table/28004 "County"](../objects/table/28004-nz.md) (own), [table/9 "Country/Region"](../objects/table/9.md), [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md), [codeunit/28020 "Report Management APAC"](../objects/codeunit/28020-nz.md) (own), [table/28002 "Address Buffer"](../objects/table/28002-nz.md) (own), [table/242 "Source Code Setup"](../objects/table/242.md).

[All 19 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Bank

Adds EFT: EFT fields on Bank Account, EFT Management, EFT Register and the reports to transfer and create EFT files. Adds post-dated check fields on bank ledger entries, a deposit slip report, bank reconciliation and cash flow compare reports, and back-dated aged balance reports. Bank Acc. Reconciliation Post gets unrealized WHT posting.

Why: Learn documents EFT for vendor payments, compare bank cash flow, and the bank reconciliation and deposit slip reports.

Objects: [codeunit/11603 "EFT Management"](../objects/codeunit/11603-nz.md) (own), [table/11609 "EFT Register"](../objects/table/11609-nz.md) (own), [report/11608 "Create EFT File"](../objects/report/11608-nz.md) (own), [report/11607 "Transfer EFT Register"](../objects/report/11607-nz.md) (own), [table/270 "Bank Account"](../objects/table/270.md), [table/272 "Check Ledger Entry"](../objects/table/272.md), [report/28021 "Bank Account Reconciliation"](../objects/report/28021-nz.md) (own), [codeunit/370 "Bank Acc. Reconciliation Post"](../objects/codeunit/370.md).

[All 15 objects of Bank in the diff](?ns=Bank#country-diff)

### Inventory

Item, Item Template, Item Charge and Item Journal Line get a WHT Product Posting Group or ACY exchange rate field. ItemCostManagement gets cost-plus price update procedures and an event. Adds the Stock Card and Stock Movement reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5804 "ItemCostManagement"](../objects/codeunit/5804.md), [table/27 "Item"](../objects/table/27.md), [table/1382 "Item Templ."](../objects/table/1382.md), [table/5800 "Item Charge"](../objects/table/5800.md), [report/14311 "Stock Card"](../objects/report/14311-nz.md) (own), [report/28022 "Stock Movement"](../objects/report/28022-nz.md) (own), [table/83 "Item Journal Line"](../objects/table/83.md).

[All 8 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Text

Adds barcode support with BarCode Management and reports for barcode checking and batch jobs, used with address barcodes.

Why: Learn links address barcodes to the DPID.

Objects: [codeunit/28001 "BarCode Management"](../objects/codeunit/28001-nz.md) (own), [report/28000 "BarCode Checking"](../objects/report/28000-nz.md) (own), [report/28001 "BarCode Batch Job"](../objects/report/28001-nz.md) (own).

[All 3 objects of Text in the diff](?ns=Text#country-diff)

### Pricing

Price List Line and Price Worksheet Line get Published Price, Cost, Cost-plus % and Discount Amount fields. Procedures update the unit price from the cost-plus percentage.

Why: Learn documents determining the sales price by cost plus percentage.

Objects: [table/7001 "Price List Line"](../objects/table/7001.md), [table/7022 "Price Worksheet Line"](../objects/table/7022.md).

[All 2 objects of Pricing in the diff](?ns=Pricing#country-diff)

### Security

The LOCAL and LOCAL READ permission sets are changed to cover the NZ objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### Service

Adds a service document management codeunit for APAC and a Service Manager role center page extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11612 "Serv. Document Mgt. APAC"](../objects/codeunit/11612-nz.md) (own), [pageextension/28041 "Serv.ServiceMgrRoleCenter APAC"](../objects/pageextension/28041-nz.md) (own).

[All 2 objects of Service in the diff](?ns=Service#country-diff)

### (no namespace)

A table extension on source code setup for APAC adds local source codes.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [tableextension/28160 "SourcecodeAPAC"](../objects/tableextension/28160-nz.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### CRM

Contact gets ABN, Registered, ABN Division Part No. and IRD No. fields.

Why: Learn covers entering IRD numbers for tax compliance.

Objects: [table/5050 "Contact"](../objects/table/5050.md).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### ExpenseAgent

Adds an NZ expense event subscriber codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6977 "Expense Event Subscriber NZ"](../objects/codeunit/6977-nz.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### FixedAssets

Fixed Asset gets a WHT Product Posting Group field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md).

[All 1 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Integration

The Data Migration Facade Helper gets a procedure to create a county when needed.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1797 "Data Migration Facade Helper"](../objects/codeunit/1797.md).

[All 1 objects of Integration in the diff](?ns=Integration#country-diff)

### IO

The incoming purchase document pre-mapping gets a vendor lookup by ABN and a new event after incoming document header data is set.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1217 "Pre-map Incoming Purch. Doc"](../objects/codeunit/1217.md).

[All 1 objects of IO in the diff](?ns=IO#country-diff)

### Projects

Resource gets a WHT Product Posting Group field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/156 "Resource"](../objects/table/156.md).

[All 1 objects of Projects in the diff](?ns=Projects#country-diff)

### Utilities

Adds a CodeUnit Selection page.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [page/28001 "CodeUnit Selection"](../objects/page/28001-nz.md) (own).

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
| [page/10 "Countries/Regions"](../objects/page/10.md) | +1 procedures |
| [page/29 "Vendor Ledger Entries"](../objects/page/29.md) | body changes only |
| [page/118 "General Ledger Setup"](../objects/page/118.md) | +5 procedures |
| [page/161 "Purchase Statistics"](../objects/page/161.md) | 2 procedures changed |
| [page/248 "VAT Registration Config"](../objects/page/248.md) | 2 properties |
| [page/256 "Payment Journal"](../objects/page/256.md) | +1 events |
| [page/323 "EC Sales List Reports"](../objects/page/323.md) | 1 properties |
| [page/576 "VAT Specification Subform"](../objects/page/576.md) | +4 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/8 "Budget"](../objects/report/8.md) | +1 procedures |
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

170 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-nz.md)
- [codeunit/6977 "Expense Event Subscriber NZ"](../objects/codeunit/6977-nz.md)
- [codeunit/11600 "ABN Management"](../objects/codeunit/11600-nz.md)
- [codeunit/11601 "BAS Management"](../objects/codeunit/11601-nz.md)
- [codeunit/11602 "Import Subsidiary"](../objects/codeunit/11602-nz.md)
- [codeunit/11603 "EFT Management"](../objects/codeunit/11603-nz.md)
- [codeunit/11612 "Serv. Document Mgt. APAC"](../objects/codeunit/11612-nz.md)
- [codeunit/12200 "Tax Invoice Renaming Subscr."](../objects/codeunit/12200-nz.md)
- [codeunit/17100 "Recurring Amount - Distribute"](../objects/codeunit/17100-nz.md)
- [codeunit/28000 "Post Code Check"](../objects/codeunit/28000-nz.md)
- [codeunit/28001 "BarCode Management"](../objects/codeunit/28001-nz.md)
- [codeunit/28002 "Serv. Post Code Check"](../objects/codeunit/28002-nz.md)
- [codeunit/28020 "Report Management APAC"](../objects/codeunit/28020-nz.md)
- [codeunit/28040 "WHTManagement"](../objects/codeunit/28040-nz.md)
- [codeunit/28041 "G/L Reg.-WHT Entries"](../objects/codeunit/28041-nz.md)
- [codeunit/28042 "Service Format Address APAC"](../objects/codeunit/28042-nz.md)
- [codeunit/28066 "Purch. Cr. Memo Hdr. - Edit"](../objects/codeunit/28066-nz.md)
- [codeunit/28070 "TaxInvoiceManagement"](../objects/codeunit/28070-nz.md)
- [codeunit/28071 "Purch. Tax Inv.-Printed"](../objects/codeunit/28071-nz.md)
- [codeunit/28072 "Sales Tax Inv.-Printed"](../objects/codeunit/28072-nz.md)
- [codeunit/28073 "Purch. Tax Cr.Memo-Printed"](../objects/codeunit/28073-nz.md)
- [codeunit/28074 "Sales Tax Cr.Memo-Printed"](../objects/codeunit/28074-nz.md)
- [codeunit/28090 "PostDatedCheckMgt"](../objects/codeunit/28090-nz.md)
- [page/11600 "BAS Setup"](../objects/page/11600-nz.md)
- [page/11601 "BAS Calculation Sheet"](../objects/page/11601-nz.md)
- [page/11602 "BAS Calc. Schedule Fields"](../objects/page/11602-nz.md)
- [page/11603 "BAS Calc. Schedule List"](../objects/page/11603-nz.md)
- [page/11604 "BAS Business Units"](../objects/page/11604-nz.md)
- [page/11605 "BAS ATO Receipt"](../objects/page/11605-nz.md)
- [page/11606 "BAS Calc. Sheet Entries"](../objects/page/11606-nz.md)
- [page/11607 "BAS Comment Lines"](../objects/page/11607-nz.md)
- [page/11608 "BAS Setup Names"](../objects/page/11608-nz.md)
- [page/11609 "BAS Setup Preview"](../objects/page/11609-nz.md)
- [page/11610 "BAS Setup Preview Subform"](../objects/page/11610-nz.md)
- [page/11611 "BAS - XML Field IDs"](../objects/page/11611-nz.md)
- [page/11612 "BAS XML Field Setup Names"](../objects/page/11612-nz.md)
- [page/11613 "BAS Business Units-Settlement"](../objects/page/11613-nz.md)
- [page/11614 "BAS - XML Field IDs Setup"](../objects/page/11614-nz.md)
- [page/11615 "EFT Register"](../objects/page/11615-nz.md)
- [page/17101 "Amount Distribution"](../objects/page/17101-nz.md)
- [page/28001 "CodeUnit Selection"](../objects/page/28001-nz.md)
- [page/28003 "Counties"](../objects/page/28003-nz.md)
- [page/28040 "WHT Business Posting Group"](../objects/page/28040-nz.md)
- [page/28041 "WHT Product Posting Group"](../objects/page/28041-nz.md)
- [page/28042 "WHT Revenue Types"](../objects/page/28042-nz.md)
- [page/28043 "WHT Posting Setup"](../objects/page/28043-nz.md)
- [page/28044 "WHT Entry"](../objects/page/28044-nz.md)
- [page/28066 "Posted Purch. Cr.Memo - Update"](../objects/page/28066-nz.md)
- [page/28071 "Posted Sales Tax Invoice"](../objects/page/28071-nz.md)
- [page/28072 "Posted Sales Tax Inv. Subform"](../objects/page/28072-nz.md)
- [page/28073 "Posted Sales Tax Credit Memo"](../objects/page/28073-nz.md)
- [page/28074 "Posted Sales Tax Cr. Memo Sub"](../objects/page/28074-nz.md)
- [page/28075 "Posted Purchase Tax Invoice"](../objects/page/28075-nz.md)
- [page/28076 "Posted Purch. Tax Inv. Subform"](../objects/page/28076-nz.md)
- [page/28077 "Posted Purch. Tax Credit Memo"](../objects/page/28077-nz.md)
- [page/28078 "Posted Purch. Tax Cr. Memo Sub"](../objects/page/28078-nz.md)
- [page/28079 "Posted Purch. Tax Invoices"](../objects/page/28079-nz.md)
- [page/28080 "Posted Purch. Tax Cr. Memos"](../objects/page/28080-nz.md)
- [page/28081 "Posted Sales Tax Invoices"](../objects/page/28081-nz.md)
- [page/28082 "Posted Sales Tax Cr. Memos"](../objects/page/28082-nz.md)
- [page/28090 "Post Dated Checks"](../objects/page/28090-nz.md)
- [page/28091 "Post Dated Checks List"](../objects/page/28091-nz.md)
- [page/28092 "Post Dated Checks-Purchases"](../objects/page/28092-nz.md)
- [page/28093 "Post Dated Checks List-Purch."](../objects/page/28093-nz.md)
- [page/28164 "GST Purchase Entries"](../objects/page/28164-nz.md)
- [page/28165 "GST Sales Entries"](../objects/page/28165-nz.md)
- [page/28166 "GST Purchase Entries Preview"](../objects/page/28166-nz.md)
- [page/28167 "GST Sales Entries Preview"](../objects/page/28167-nz.md)
- [pageextension/28040 "SourceCodeSetupAPAC"](../objects/pageextension/28040-nz.md)
- [pageextension/28041 "Serv.ServiceMgrRoleCenter APAC"](../objects/pageextension/28041-nz.md)
- [report/11600 "Withholding Summary"](../objects/report/11600-nz.md)
- [report/11603 "Calculate GST Settlement"](../objects/report/11603-nz.md)
- [report/11604 "BAS-Update"](../objects/report/11604-nz.md)
- [report/11605 "Export BAS Setup to Excel"](../objects/report/11605-nz.md)
- [report/11606 "Print BAS Export File"](../objects/report/11606-nz.md)
- [report/11607 "Transfer EFT Register"](../objects/report/11607-nz.md)
- [report/11608 "Create EFT File"](../objects/report/11608-nz.md)
- [report/14303 "WHT Certificate"](../objects/report/14303-nz.md)
- [report/14304 "WHT certificate preprint"](../objects/report/14304-nz.md)
- [report/14305 "WHT Certificate TH - Copy"](../objects/report/14305-nz.md)
- [report/14306 "WHT certificate preprint Copy"](../objects/report/14306-nz.md)
- [report/14307 "WHT PND 1"](../objects/report/14307-nz.md)
- [report/14308 "WHT PND 2"](../objects/report/14308-nz.md)
- [report/14309 "WHT PND 3"](../objects/report/14309-nz.md)
- [report/14310 "WHT Report - PND 53"](../objects/report/14310-nz.md)
- [report/14311 "Stock Card"](../objects/report/14311-nz.md)
- [report/16626 "Certificate of Creditable tax"](../objects/report/16626-nz.md)
- [report/16627 "Monthly Remittance Return WHT"](../objects/report/16627-nz.md)
- [report/16628 "Annual Information Return WHT"](../objects/report/16628-nz.md)
- [report/16629 "Quarterly VAT Return"](../objects/report/16629-nz.md)
- [report/16630 "E-Filing"](../objects/report/16630-nz.md)
- [report/16631 "Monthly VAT Declaration"](../objects/report/16631-nz.md)
- [report/16632 "WHT E-Filing"](../objects/report/16632-nz.md)
- [report/17109 "Transaction Detail Report"](../objects/report/17109-nz.md)
- [report/17110 "AU/NZ Statement"](../objects/report/17110-nz.md)
- [report/17111 "Items Received & Not Invoiced"](../objects/report/17111-nz.md)
- [report/17116 "Aged Acc. Rec. (BackDating)"](../objects/report/17116-nz.md)
- [report/17117 "Aged Acc. Pay. (BackDating)"](../objects/report/17117-nz.md)
- [report/28000 "BarCode Checking"](../objects/report/28000-nz.md)
- [report/28001 "BarCode Batch Job"](../objects/report/28001-nz.md)
- [report/28020 "Bank Detail Cashflow Compare"](../objects/report/28020-nz.md)
- [report/28021 "Bank Account Reconciliation"](../objects/report/28021-nz.md)
- [report/28022 "Stock Movement"](../objects/report/28022-nz.md)
- [report/28023 "Deposit Slip"](../objects/report/28023-nz.md)
- [report/28024 "Balance Sheet"](../objects/report/28024-nz.md)
- [report/28025 "Income Statement"](../objects/report/28025-nz.md)
- [report/28026 "Financial Analysis Report"](../objects/report/28026-nz.md)
- [report/28027 "VAT Report - Vendor"](../objects/report/28027-nz.md)
- [report/28028 "VAT Report - Customer"](../objects/report/28028-nz.md)
- [report/28029 "Purchase Receipts"](../objects/report/28029-nz.md)
- [report/28040 "WHT Certificate - Other"](../objects/report/28040-nz.md)
- [report/28041 "Calc. and Post WHT Settlement"](../objects/report/28041-nz.md)
- [report/28043 "WHT Certificate - Other Copy"](../objects/report/28043-nz.md)
- [report/28070 "Pending Sales Tax Invoice"](../objects/report/28070-nz.md)
- [report/28071 "Purch. - Tax Invoice"](../objects/report/28071-nz.md)
- [report/28072 "Sales - Tax Invoice"](../objects/report/28072-nz.md)
- [report/28073 "Purch. - Tax Cr. Memo"](../objects/report/28073-nz.md)
- [report/28074 "Sales - Tax Cr. Memo"](../objects/report/28074-nz.md)
- [report/28090 "Post Dated Checks"](../objects/report/28090-nz.md)
- [report/28091 "Create Check Installments"](../objects/report/28091-nz.md)
- [report/28092 "PDC Acknowledgement Receipt"](../objects/report/28092-nz.md)
- [report/28140 "Adjust Settlement Exch. Rates"](../objects/report/28140-nz.md)
- [report/28160 "G/L Journal"](../objects/report/28160-nz.md)
- [report/28161 "Journals"](../objects/report/28161-nz.md)
- [report/28162 "G/L Trial Balance"](../objects/report/28162-nz.md)
- [report/28163 "G/L Detail Trial Balance"](../objects/report/28163-nz.md)
- [report/28164 "GST Purchase Report"](../objects/report/28164-nz.md)
- [report/28165 "GST Sales Report"](../objects/report/28165-nz.md)
- [report/28166 "BAS - Import/Export"](../objects/report/28166-nz.md)
- [report/28167 "BAS - Import/Export Setup"](../objects/report/28167-nz.md)
- [table/11600 "BAS Setup"](../objects/table/11600-nz.md)
- [table/11601 "BAS Calculation Sheet"](../objects/table/11601-nz.md)
- [table/11602 "BAS XML Field ID"](../objects/table/11602-nz.md)
- [table/11603 "BAS Business Unit"](../objects/table/11603-nz.md)
- [table/11604 "BAS Calc. Sheet Entry"](../objects/table/11604-nz.md)
- [table/11605 "BAS Comment Line"](../objects/table/11605-nz.md)
- [table/11606 "BAS Setup Name"](../objects/table/11606-nz.md)
- [table/11607 "BAS XML Field Setup Name"](../objects/table/11607-nz.md)
- [table/11608 "BAS XML Field ID Setup"](../objects/table/11608-nz.md)
- [table/11609 "EFT Register"](../objects/table/11609-nz.md)
- [table/16608 "Temp WHT Entry - EFiling"](../objects/table/16608-nz.md)
- [table/28002 "Address Buffer"](../objects/table/28002-nz.md)
- [table/28003 "Address ID"](../objects/table/28003-nz.md)
- [table/28004 "County"](../objects/table/28004-nz.md)
- [table/28040 "WHT Business Posting Group"](../objects/table/28040-nz.md)
- [table/28041 "WHT Product Posting Group"](../objects/table/28041-nz.md)
- [table/28042 "WHT Revenue Types"](../objects/table/28042-nz.md)
- [table/28043 "WHT Posting Setup"](../objects/table/28043-nz.md)
- [table/28044 "WHT Entry"](../objects/table/28044-nz.md)
- [table/28045 "WHT Certificate Buffer"](../objects/table/28045-nz.md)
- [table/28046 "Temp WHT Entry"](../objects/table/28046-nz.md)
- [table/28070 "Tax Posting Buffer"](../objects/table/28070-nz.md)
- [table/28071 "Sales Tax Invoice Header"](../objects/table/28071-nz.md)
- [table/28072 "Sales Tax Invoice Line"](../objects/table/28072-nz.md)
- [table/28073 "Sales Tax Cr.Memo Header"](../objects/table/28073-nz.md)
- [table/28074 "Sales Tax Cr.Memo Line"](../objects/table/28074-nz.md)
- [table/28075 "Purch. Tax Inv. Header"](../objects/table/28075-nz.md)
- [table/28076 "Purch. Tax Inv. Line"](../objects/table/28076-nz.md)
- [table/28077 "Purch. Tax Cr. Memo Hdr."](../objects/table/28077-nz.md)
- [table/28078 "Purch. Tax Cr. Memo Line"](../objects/table/28078-nz.md)
- [table/28079 "Tax Document Buffer Build"](../objects/table/28079-nz.md)
- [table/28080 "Tax Document Buffer"](../objects/table/28080-nz.md)
- [table/28090 "Post Dated Check Line"](../objects/table/28090-nz.md)
- [table/28160 "GST Purchase Entry"](../objects/table/28160-nz.md)
- [table/28161 "GST Sales Entry"](../objects/table/28161-nz.md)
- [tableextension/28040 "SourceCodeSetupAPAC"](../objects/tableextension/28040-nz.md)
- [tableextension/28072 "Serv. Sales Tax Invoice Line"](../objects/tableextension/28072-nz.md)
- [tableextension/28074 "Serv. Sales Tax Cr.Memo Line"](../objects/tableextension/28074-nz.md)
- [tableextension/28160 "SourcecodeAPAC"](../objects/tableextension/28160-nz.md)
- [xmlport/16630 "WHT-EFiling"](../objects/xmlport/16630-nz.md)

## Other versions

- BC30: 279 objects differ from W1 (459 fields, 21 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
