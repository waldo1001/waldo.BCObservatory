---
id: localization/ch
type: localization
title: Switzerland (CH)
summary: Switzerland (CH) localization of Business Central 29. It covers Swiss electronic payments (ESR, LSV+, DTA/EZAG, Swiss SEPA, QR-bill), Swiss VAT statements with ciphers and VAT exchange rates, delivery reminders, quote management, physical inventory orders and Swiss reports. It answers where local fields, reports and setup live.
tier: official
language: en
tags:
  - localization
  - ch
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
  input_hash: 3165e939f997d6af71aac289bd3a9bf2fb42c86f6a597e6e37c6eb28281c76df
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-ch
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/2
    - object/codeunit/6
    - object/codeunit/12
    - object/codeunit/13
    - object/codeunit/17
    - object/codeunit/80
    - object/codeunit/90
    - object/codeunit/229
    - object/codeunit/365
    - object/codeunit/426
    - object/codeunit/597
    - object/codeunit/884
    - object/codeunit/1221
    - object/codeunit/1223
    - object/codeunit/1233
    - object/codeunit/1240
    - object/codeunit/1261
    - object/codeunit/1901
    - object/codeunit/5063
    - object/codeunit/5626
    - object/codeunit/104000
    - object/enum/37
    - object/page/46
    - object/page/47
    - object/page/95
    - object/page/96
    - object/page/131
    - object/page/135
    - object/page/256
    - object/page/344
    - object/page/425
    - object/page/426
    - object/page/471
    - object/page/475
    - object/page/508
    - object/page/5160
    - object/page/5163
    - object/page/6631
    - object/permissionset/1001
    - object/permissionset/1002
    - object/permissionset/3602
    - object/permissionset/8824
    - object/report/208
    - object/report/210
    - object/report/393
    - object/report/404
    - object/report/405
    - object/report/406
    - object/report/407
    - object/report/408
    - object/report/410
    - object/report/596
    - object/report/6631
    - object/report/6641
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
    - object/table/79
    - object/table/81
    - object/table/83
    - object/table/85
    - object/table/98
    - object/table/111
    - object/table/113
    - object/table/115
    - object/table/122
    - object/table/124
    - object/table/179
    - object/table/181
    - object/table/225
    - object/table/242
    - object/table/254
    - object/table/256
    - object/table/257
    - object/table/260
    - object/table/263
    - object/table/274
    - object/table/285
    - object/table/287
    - object/table/288
    - object/table/311
    - object/table/312
    - object/table/313
    - object/table/324
    - object/table/325
    - object/table/330
    - object/table/372
    - object/table/475
    - object/table/596
    - object/table/743
    - object/table/746
    - object/table/1207
    - object/table/1226
    - object/table/1381
    - object/table/1382
    - object/table/1383
    - object/table/5107
    - object/table/5108
    - object/table/5109
    - object/table/5110
    - object/table/5600
    - object/table/5611
    - object/table/5612
    - object/table/5821
    - object/xmlport/1000
    - object/xmlport/1001
    - object/xmlport/5050
    - object/xmlport/5051
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/switzerland
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: CH
version: "29"
w1_version: "29"
added_objects: 223
replaced_objects: 118
removed_objects: 0
added_fields: 196
added_events: 10
learn_folder: LocalFunctionality/Switzerland
---

# Switzerland (CH)

> Switzerland (CH) localization of Business Central 29. It covers Swiss electronic payments (ESR, LSV+, DTA/EZAG, Swiss SEPA, QR-bill), Swiss VAT statements with ciphers and VAT exchange rates, delivery reminders, quote management, physical inventory orders and Swiss reports. It answers where local fields, reports and setup live.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/switzerland.md) · narrative **unreviewed** (machine-written)

## Overview

The Swiss layer is large: 341 objects, of which 223 are its own and the rest replace or extend W1 objects. Payments are the core. Own codeunits EsrMgt, DtaMgt, LSVMgt, BankMgt and the Swiss SEPA export codeunits support ESR payment slips, LSV+ direct debit collections, DTA/EZAG files and Swiss SEPA credit transfer and direct debit. W1 tables such as Vendor Bank Account, Gen. Journal Line and Payment Export Data get Swiss fields (ESR type, clearing number, payment form, reference number, ESR/ISR coding line).

VAT is handled with VAT cipher setup, cipher fields on VAT Posting Setup and VAT Statement Line, VAT-specific exchange rate fields on Currency Exchange Rate, and extra VAT Entry fields for foreign currency amounts. The exchange rate adjustment is extended with a valuation method and VAT entry adjustment. Other areas are delivery reminders for vendors, quote management with archived quote variants and subtotals on sales lines, physical inventory orders, and DACH-shared Data Export and report selection objects.

Learn documents this under "Switzerland local functionality". It has pages for Swiss electronic payments, ESR, LSV+, QR-Bill Management, the Swiss VAT statement, VAT exchange rate adjustment, delivery reminders, G/L balances, inventory, and purchase and sales documents.

## Key points

- ESR: import ESR payment files into cash receipt journals with automatic application by reference number, and print ESR invoices and coupons (reports 3010532, 3010533).
- LSV+ direct debit: LSV journal and setup pages, suggest collection, close collection, export LSV file, and post LSV payments through the cash receipt journal.
- Swiss SEPA credit transfer and direct debit exports, CAMT 053/054 import, DTA and EZAG files, and a Bank Directory imported from SIX clearing files.
- QR-bill management is documented in Learn, with IBAN and QR-IBAN support.
- Swiss VAT statement uses VAT ciphers (pages 11023, 11024), cipher fields on VAT Posting Setup, and VAT exchange rates set on Currency Exchange Rate. An older VAT statement report remains.
- Vendor delivery reminders: terms, levels, texts, create, issue and test report, with their own tables and pages.
- Quote management: quote status, probability and variants on Sales Header and Sales Line, subtotals and titles on lines, plus quote analysis.
- Provisional G/L balance and foreign currency balance fields on G/L Account and G/L Entry, plus Swiss post code import and physical inventory orders.

Narrative written by Sonnet from the code diff and 34 Learn page summaries. In numbers: Switzerland (CH) localization of Business Central in BC29: 223 objects of its own, 118 W1 objects changed (196 fields and 10 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 25 | 51 | 45 |
| [Purchases](#purchases) | 24 | 51 | 32 |
| [Bank](#bank) | 9 | 54 | 4 |
| [Sales](#sales) | 27 | 11 | 63 |
| [Inventory](#inventory) | 9 | 25 | 22 |
| [Foundation](#foundation) | 10 | 11 | 27 |
| [(no namespace)](#no-namespace) | 0 | 7 | 0 |
| [FixedAssets](#fixedassets) | 4 | 2 | 3 |
| [Security](#security) | 4 | 2 | 0 |
| [Service](#service) | 0 | 4 | 0 |
| [CRM](#crm) | 2 | 0 | 0 |
| [Microsoft](#microsoft) | 0 | 2 | 0 |
| Upgrade | 1 | 1 | 0 |
| [Utilities](#utilities) | 1 | 1 | 0 |
| [EServices](#eservices) | 1 | 0 | 0 |
| [IO](#io) | 1 | 0 | 0 |
| [Manufacturing](#manufacturing) | 0 | 1 | 0 |

### Finance

Adds Swiss VAT statement handling with cipher setup, VAT Entry foreign currency fields, and a VAT exchange rate adjustment inside the exchange rate adjustment run (valuation method, VAT entry adjustment). G/L Account gets foreign currency balance fields and a provisional balance page. Gen. Journal Line gets ESR fields. It also carries shared DACH Data Export objects and total-balance reports.

Why: Learn says Swiss VAT uses official Federal Tax Administration exchange rates for foreign currency VAT and supports foreign currency balances on bank accounts.

Objects: [table/254 "VAT Entry"](../objects/table/254.md), [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md), [report/596 "Exch. Rate Adjustment"](../objects/report/596.md), [table/596 "Exch. Rate Adjmt. Parameters"](../objects/table/596.md), [table/325 "VAT Posting Setup"](../objects/table/325.md), page/11023 "VAT Cipher Codes" (own), page/11024 "VAT Cipher Setup" (own), page/11500 "G/L Acc. Provisional Balance" (own).

[All 76 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds vendor bank account fields for Swiss payment forms, ESR type, clearing and giro numbers, and ESR reference fields on Purchase Header. Suggest Vendor Payments gets summarized variants. It adds the delivery reminder feature with its own tables, pages, codeunits and role center extensions, plus vendor reports.

Why: Learn documents delivery reminders to vendors (setup, creation, issue) and the Vendor Payments List report.

Objects: [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [report/393 "Suggest Vendor Payments"](../objects/report/393.md), [table/475 "Vendor Payment Buffer"](../objects/table/475.md), codeunit/5005270 "Issue Delivery Reminder" (own), codeunit/5005271 "Create Delivery Reminder" (own), page/5005270 "Delivery Reminder" (own), report/11507 "Vendor Payments List" (own).

[All 75 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Bank

Adds Swiss electronic payment support: ESR, DTA/EZAG, LSV+ and Swiss SEPA credit transfer and direct debit export, CAMT 053/054 import, and a Bank Directory. Payment Export Data and SEPA check and fill codeunits get Swiss payment type logic. ESR invoice, coupon and payment order reports are included.

Why: Learn describes ESR, LSV+ and SEPA credit transfer as the Swiss electronic payment methods, and Bank Directory import from SIX clearing files.

Objects: codeunit/3010531 "EsrMgt" (own), codeunit/3010831 "LSVMgt" (own), codeunit/3010541 "DtaMgt" (own), codeunit/11520 "Swiss SEPA CT-Export File" (own), codeunit/11530 "Swiss SEPA DD-Export File" (own), [table/1226 "Payment Export Data"](../objects/table/1226.md), page/3010831 "LSV Setup" (own), page/11501 "Bank Directory" (own).

[All 63 objects of Bank in the diff](?ns=Bank#country-diff)

### Sales

Adds quote management on sales documents: quote status, probability, follow-up and competitor fields, line titles, positions and subtotals, plus archive copies. It adds LSV number on Cust. Ledger Entry, Liq. Payment Terms Code on customers, setup fields for invoice rounding and shipment handling, and Swiss customer reports.

Why: Learn describes subtotals, begin and end totals in quotes and orders, invoice rounding for payment discounts and optional shipment printing.

Objects: [table/37 "Sales Line"](../objects/table/37.md), [table/36 "Sales Header"](../objects/table/36.md), codeunit/3010801 "QuoteMgt" (own), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/287 "Customer Bank Account"](../objects/table/287.md), report/3010801 "Quote Analysis" (own), [table/21 "Cust. Ledger Entry"](../objects/table/21.md).

[All 38 objects of Sales in the diff](?ns=Sales#country-diff)

### Inventory

Adds physical inventory orders and recording as new tables, customer and salesperson fields on item ledger and journal entries, default location code and blocking fields on Item, and Swiss item reports such as ABC analysis and ranking.

Why: Learn says Swiss inventory uses default location codes from the item card, tracks invoices with multiple shipments and stores customer and salesperson information.

Objects: [table/27 "Item"](../objects/table/27.md), [table/83 "Item Journal Line"](../objects/table/83.md), [table/32 "Item Ledger Entry"](../objects/table/32.md), table/5005350 "Phys. Inventory Order Header" (own), table/5005351 "Phys. Inventory Order Line" (own), [table/313 "Inventory Setup"](../objects/table/313.md), report/11503 "Item ABC Analysis" (own), report/11517 "Inventory Value (Help Report)" (own).

[All 34 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Foundation

Extends Company Information with Swiss fields (tax office, authorized numbers, place of dispatcher). It adds DACH report selections, Swiss post code import with priority field, format address changes, and Swiss SEPA code constants in Company-Initialize.

Why: Learn documents importing the Swiss post code file from Swiss Post.

Objects: [table/79 "Company Information"](../objects/table/79.md), [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md), [codeunit/365 "Format Address"](../objects/codeunit/365.md), table/26100 "DACH Report Selections" (own), report/11502 "Import Post Codes" (own), [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md), [table/225 "Post Code"](../objects/table/225.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md).

[All 21 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Holds Swiss SEPA direct debit pain.008 xmlport, Data Export Setup, an Intrastat item list report and upgrade or sandbox plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: xmlport/11501 "SEPA DD pain.008.001.02.ch03" (own), table/11009 "Data Export Setup" (own), report/11001 "Intrastat - Item List" (own).

[All 7 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### FixedAssets

Adds fields to Fixed Asset for a BWR depreciation book and premium depreciation. It adds book value and list reports (one shared with Austria) and a procedure on FA General Report to exclude reclassification entries.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md), report/11011 "Fixed Asset - Book Value 03" (own), [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md), report/11100 "Fixed Assets - List AT" (own).

[All 6 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Adds local permission set extensions for delivery reminders and changes the LOCAL and LOCAL READ sets and two payables journal sets.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), permissionsetextension/5005270 "DR LOCAL" (own), permissionsetextension/5005271 "DR LOCAL READ" (own), [permissionset/3602 "Payables Journals - Post"](../objects/permissionset/3602.md), [permissionset/8824 "Payables Journals - Edit"](../objects/permissionset/8824.md).

[All 6 objects of Security in the diff](?ns=Security#country-diff)

### Service

Adds Swiss fields to service lines and invoice lines via table extensions, a service document management codeunit, and a service bank payment codeunit for ESR service invoices.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/11524 "Serv. Document Mgt. CH" (own), tableextension/11550 "Service Line CH" (own), tableextension/11551 "Service Invoice Line CH" (own), tableextension/11552 "Service Line Archive CH" (own).

[All 4 objects of Service in the diff](?ns=Service#country-diff)

### CRM

Changes the Export Contact and Export Segment Contact xmlports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md), [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### Microsoft

Adds a Certificate table and an ELM interop input page.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/11014 "Certificate" (own), page/35563 "ELM Interop Input" (own).

[All 2 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Utilities

Adds a GeneralMgt codeunit and extends ArchiveManagement with procedures to archive sales documents with quote status.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5063 "ArchiveManagement"](../objects/codeunit/5063.md), codeunit/11501 "GeneralMgt" (own).

[All 2 objects of Utilities in the diff](?ns=Utilities#country-diff)

### EServices

Changes the ReadSoft OCR Master Data Sync codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/884 "ReadSoft OCR Master Data Sync"](../objects/codeunit/884.md).

[All 1 objects of EServices in the diff](?ns=EServices#country-diff)

### IO

Extends Read Data Exch. from File with XML procedures to split payments per invoice, check invoices and read or write amount nodes, used for bank file import.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1240 "Read Data Exch. from File"](../objects/codeunit/1240.md).

[All 1 objects of IO in the diff](?ns=IO#country-diff)

### Manufacturing

Adds a page extension for the Manufacturing Manager role center shared by the DACH countries.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: pageextension/11010 "Manufacturing Manager RC DACH" (own).

[All 1 objects of Manufacturing in the diff](?ns=Manufacturing#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md) | +4 procedures |
| [codeunit/6 "Fiscal Year-Close"](../objects/codeunit/6.md) | +1 procedures |
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +1 procedures |
| [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md) | +1 events, +5 procedures |
| [codeunit/17 "Gen. Jnl.-Post Reverse"](../objects/codeunit/17.md) | body changes only |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +1 events, +3 procedures |
| [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md) | +1 events, +1 procedures |
| [codeunit/229 "Document-Print"](../objects/codeunit/229.md) | +3 procedures |
| [codeunit/365 "Format Address"](../objects/codeunit/365.md) | +2 procedures |
| [codeunit/426 "Payment Tolerance Management"](../objects/codeunit/426.md) | +1 procedures |
| [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md) | +14 procedures, 1 properties |
| [codeunit/884 "ReadSoft OCR Master Data Sync"](../objects/codeunit/884.md) | body changes only |
| [codeunit/1221 "SEPA CT-Fill Export Buffer"](../objects/codeunit/1221.md) | +4 procedures |
| [codeunit/1223 "SEPA CT-Check Line"](../objects/codeunit/1223.md) | +3 procedures |
| [codeunit/1233 "SEPA DD-Check Line"](../objects/codeunit/1233.md) | 1 procedures changed |
| [codeunit/1240 "Read Data Exch. from File"](../objects/codeunit/1240.md) | +7 procedures |
| [codeunit/1261 "Imp. SEPA CAMT Bank Rec. Lines"](../objects/codeunit/1261.md) | +3 procedures |
| [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md) | +1 procedures |
| [codeunit/5063 "ArchiveManagement"](../objects/codeunit/5063.md) | +3 procedures |
| [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md) | +1 procedures |
| [codeunit/104000 "Upgrade - BaseApp"](../objects/codeunit/104000.md) | +1 procedures, 1 properties |
| [enum/37 "Sales Line Type"](../objects/enum/37.md) | body changes only |
| [page/46 "Sales Order Subform"](../objects/page/46.md) | +2 procedures |
| [page/47 "Sales Invoice Subform"](../objects/page/47.md) | +2 procedures |
| [page/95 "Sales Quote Subform"](../objects/page/95.md) | +2 procedures |
| [page/96 "Sales Cr. Memo Subform"](../objects/page/96.md) | +2 procedures |
| [page/131 "Posted Sales Shpt. Subform"](../objects/page/131.md) | +1 procedures |
| [page/135 "Posted Sales Cr. Memo Subform"](../objects/page/135.md) | +1 procedures |
| [page/256 "Payment Journal"](../objects/page/256.md) | +1 procedures |
| [page/344 "Navigate"](../objects/page/344.md) | +1 events |
| [page/425 "Vendor Bank Account Card"](../objects/page/425.md) | +3 procedures |
| [page/426 "Vendor Bank Account List"](../objects/page/426.md) | body changes only |
| [page/471 "VAT Product Posting Groups"](../objects/page/471.md) | +1 procedures |
| [page/475 "VAT Statement Preview Line"](../objects/page/475.md) | +1 events, +2 procedures, 1 properties |
| [page/508 "Blanket Sales Order Subform"](../objects/page/508.md) | +2 procedures |
| [page/5160 "Sales Order Archive Subform"](../objects/page/5160.md) | +2 procedures |
| [page/5163 "Sales Quote Archive Subform"](../objects/page/5163.md) | +2 procedures |
| [page/6631 "Sales Return Order Subform"](../objects/page/6631.md) | +2 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [permissionset/3602 "Payables Journals - Post"](../objects/permissionset/3602.md) | 1 properties |
| [permissionset/8824 "Payables Journals - Edit"](../objects/permissionset/8824.md) | 1 properties |
| [report/208 "Sales - Shipment"](../objects/report/208.md) | +2 procedures |
| [report/210 "Blanket Sales Order"](../objects/report/210.md) | +2 procedures |
| [report/393 "Suggest Vendor Payments"](../objects/report/393.md) | +4 procedures |
| [report/404 "Purchase - Quote"](../objects/report/404.md) | +2 procedures |
| [report/405 "Order"](../objects/report/405.md) | +2 procedures |
| [report/406 "Purchase - Invoice"](../objects/report/406.md) | +2 procedures |
| [report/407 "Purchase - Credit Memo"](../objects/report/407.md) | +2 procedures |
| [report/408 "Purchase - Receipt"](../objects/report/408.md) | +2 procedures |
| [report/410 "Blanket Purchase Order"](../objects/report/410.md) | +2 procedures |
| [report/596 "Exch. Rate Adjustment"](../objects/report/596.md) | +3 procedures |
| [report/6631 "Return Order Confirmation"](../objects/report/6631.md) | +2 procedures |
| [report/6641 "Return Order"](../objects/report/6641.md) | +2 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | 1 properties |
| [table/15 "G/L Account"](../objects/table/15.md) | +5 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +1 fields |
| [table/18 "Customer"](../objects/table/18.md) | +1 fields |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +1 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +2 fields |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +1 fields |
| [table/27 "Item"](../objects/table/27.md) | +5 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | +3 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +9 fields, 2 fields changed, +2 procedures |
| [table/37 "Sales Line"](../objects/table/37.md) | +8 fields, +4 events, +2 procedures |
| [table/38 "Purchase Header"](../objects/table/38.md) | +6 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +2 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +25 fields, 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +7 fields, +1 procedures |
| [table/83 "Item Journal Line"](../objects/table/83.md) | +7 fields |
| [table/85 "Acc. Schedule Line"](../objects/table/85.md) | 2 fields changed |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +3 fields, 2 fields changed, +1 procedures |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +5 fields |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +7 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +7 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +1 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +1 fields |
| [table/179 "Reversal Entry"](../objects/table/179.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +7 fields |
| [table/225 "Post Code"](../objects/table/225.md) | +1 fields |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +1 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +8 fields |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields |
| [table/257 "VAT Statement Name"](../objects/table/257.md) | +1 fields |
| [table/260 "Tariff Number"](../objects/table/260.md) | 1 fields changed |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | 4 fields changed |
| [table/274 "Bank Acc. Reconciliation Line"](../objects/table/274.md) | +1 fields |
| [table/285 "Transaction Specification"](../objects/table/285.md) | 1 fields changed |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +1 fields, 3 fields changed, +1 procedures |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +11 fields, 2 fields changed, +1 procedures |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +5 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +3 fields |
| [table/313 "Inventory Setup"](../objects/table/313.md) | +2 fields |
| [table/324 "VAT Product Posting Group"](../objects/table/324.md) | +1 procedures |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +3 fields, 1 fields changed |
| [table/330 "Currency Exchange Rate"](../objects/table/330.md) | +2 fields |
| [table/372 "Payment Buffer"](../objects/table/372.md) | +1 fields |
| [table/475 "Vendor Payment Buffer"](../objects/table/475.md) | +1 fields, +1 events |
| [table/596 "Exch. Rate Adjmt. Parameters"](../objects/table/596.md) | +3 fields |
| [table/743 "VAT Report Setup"](../objects/table/743.md) | +3 fields |
| [table/746 "VAT Reports Configuration"](../objects/table/746.md) | 1 fields changed |
| [table/1207 "Direct Debit Collection"](../objects/table/1207.md) | +1 fields, +1 procedures |
| [table/1226 "Payment Export Data"](../objects/table/1226.md) | +2 fields, 1 fields changed, +3 procedures |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +1 fields, 1 fields changed |
| [table/1382 "Item Templ."](../objects/table/1382.md) | +2 fields |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +2 fields, 1 fields changed |
| [table/5107 "Sales Header Archive"](../objects/table/5107.md) | +10 fields |
| [table/5108 "Sales Line Archive"](../objects/table/5108.md) | +8 fields |
| [table/5109 "Purchase Header Archive"](../objects/table/5109.md) | +1 fields |
| [table/5110 "Purchase Line Archive"](../objects/table/5110.md) | body changes only |
| [table/5600 "Fixed Asset"](../objects/table/5600.md) | +3 fields |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | 1 fields changed |
| [table/5612 "FA Depreciation Book"](../objects/table/5612.md) | 1 properties |
| [table/5821 "Item Statistics Buffer"](../objects/table/5821.md) | +3 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | +1 procedures |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | +1 procedures |
| [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md) | 1 properties |
| [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md) | 1 properties |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/355 "Local Navigate Handler"
- codeunit/1883 "Sandbox Cleanup local"
- codeunit/9997 "Upgrade Tag Def - Country"
- codeunit/11000 "Data Export Management"
- codeunit/11004 "Report Sel. Purch. Subscribers"
- codeunit/11110 "Update VAT-AT"
- codeunit/11500 "BankMgt"
- codeunit/11501 "GeneralMgt"
- codeunit/11503 "CHMgt"
- codeunit/11515 "CH Report Management"
- codeunit/11520 "Swiss SEPA CT-Export File"
- codeunit/11521 "SEPA CAMT 053 Bank Rec. Lines"
- codeunit/11522 "SEPA CAMT 054 Bank Rec. Lines"
- codeunit/11523 "Serv. Bank Payment Mgt."
- codeunit/11524 "Serv. Document Mgt. CH"
- codeunit/11530 "Swiss SEPA DD-Export File"
- codeunit/14060 "UPG Data Out Of Geo. Apps"
- codeunit/26100 "Update VAT-CH"
- codeunit/35517 "CH Upgrade Tag Def."
- codeunit/104100 "Upg Local Functionality"
- codeunit/3010531 "EsrMgt"
- codeunit/3010541 "DtaMgt"
- codeunit/3010801 "QuoteMgt"
- codeunit/3010831 "LSVMgt"
- codeunit/5005270 "Issue Delivery Reminder"
- codeunit/5005271 "Create Delivery Reminder"
- codeunit/5005272 "Deliv.-Rem. Ext. Text Transfer"
- codeunit/5005273 "Iss. Delivery Remind. printed"
- codeunit/5005274 "DR Data Class. Eval. Data"
- codeunit/5005396 "Print Document Comfort"
- codeunit/5005397 "Format Adress Comfort"
- enum/11003 "Data Export File Encoding"
- enum/11503 "SEPA CT Batch Booking"
- enum/5005272 "Delivery Reminder Date Type"
- enumextension/26101 "Report Selection Usage Del. Rem."
- enumextension/26102 "Report Sel. Usage Purch. DACH"
- page/11000 "Place of Dispatchers"
- page/11001 "Place of Receivers"
- page/11002 "Data Exports"
- page/11003 "Data Export Record Definitions"
- page/11004 "Data Export Record Source"
- page/11007 "Data Export Table Relation"
- page/11008 "Data Export Table Relation Sub"
- page/11009 "Data Export Field List"
- page/11014 "Data Export Record Types"
- page/11023 "VAT Cipher Codes"
- page/11024 "VAT Cipher Setup"
- page/11026 "Data Export Table Keys"
- page/11027 "Data Export Record Fields"
- page/11500 "G/L Acc. Provisional Balance"
- page/11501 "Bank Directory"
- page/35516 "Cash Receipt Journal FactBox"
- page/35517 "Payment Journal FactBox"
- page/35561 "Modify Posting Day Input"
- page/35562 "Modify Document Number Input"
- page/35563 "ELM Interop Input"
- page/3010531 "ESR Setup"
- page/3010532 "ESR Setup List"
- page/3010541 "DTA Setup"
- page/3010542 "DTA Setup List"
- page/3010543 "DTA EZAG Pictures"
- page/3010830 "LSV Setup List"
- page/3010831 "LSV Setup"
- page/3010832 "LSV Journal List"
- page/3010834 "LSV Journal"
- page/3010835 "LSV Journal Line List"
- page/5005270 "Delivery Reminder"
- page/5005271 "Delivery Reminder Sub."
- page/5005272 "Delivery Reminder List"
- page/5005273 "Issued Delivery Reminder"
- page/5005274 "Issued Delivery Reminder Sub"
- page/5005275 "Issued Delivery Reminders List"
- page/5005276 "Deliv. Reminder Ledger Entries"
- page/5005277 "Delivery Reminder Comment Line"
- page/5005278 "Deliv. Rem. Comment Line List"
- page/5005279 "Delivery Reminder Terms"
- page/5005280 "Delivery Reminder Terms List"
- page/5005281 "Delivery Reminder Levels"
- page/5005283 "Delivery Reminder Text"
- pageextension/11010 "Manufacturing Manager RC DACH"
- pageextension/11553 "Bank Export/Import Setup CH"
- pageextension/5005270 "SourceCodeSetupDACH"
- pageextension/5005271 "DRVendorTemplCard"
- pageextension/5005272 "DRPurchSetup"
- pageextension/5005273 "DRExtendedText"
- pageextension/5005274 "DRPurchMgrRoleCenter"
- pageextension/5005275 "DRPurchAgentRoleCenter"
- pageextension/5005276 "DRPurchaseOrder"
- pageextension/5005277 "DRVendorCard"
- permissionsetextension/5005270 "DR LOCAL"
- permissionsetextension/5005271 "DR LOCAL READ"
- report/11001 "Intrastat - Item List"
- report/11002 "G/L Total-Balance"
- report/11003 "Customer Total-Balance"
- report/11004 "Vendor Total-Balance"
- report/11005 "VAT Statement Germany"
- report/11006 "Vendor Detailed Aging"
- report/11007 "VAT-Vies Declaration Tax - DE"
- report/11010 "VAT Statement Schedule"
- report/11011 "Fixed Asset - Book Value 03"
- report/11015 "Export Business Data"
- report/11100 "Fixed Assets - List AT"
- report/11108 "VAT - VIES Declaration XML"
- report/11109 "Paragraph 131 Export"
- report/11110 "VAT Statement AT"
- report/11111 "Crossborder Services"
- report/11112 "Update VAT Statement Template"
- report/11500 "Provisional Trial Balance"
- report/11502 "Import Post Codes"
- report/11503 "Item ABC Analysis"
- report/11504 "Import Bank Directory"
- report/11505 "SR Item Acc Sheet Net Change"
- report/11506 "SR Item Acc Sheet Inv. Value"
- report/11507 "Vendor Payments List"
- report/11509 "Vendor Payment Order"
- report/11512 "Sales Picking List"
- report/11514 "G/L Setup Information"
- report/11517 "Inventory Value (Help Report)"
- report/11518 "Old Swiss VAT Statement"
- report/11521 "SR G/L Entries Foreign Currenc"
- report/11529 "SR Account Interest"
- report/11535 "SR Cust. Orders per Period"
- report/11537 "SR Cust. Due Amount per Period"
- report/11539 "SR Cust. Ranking"
- report/11540 "SR Cust. - Balance to Date"
- report/11553 "SR Ven. Due Amount per Period"
- report/11554 "SR Vendor Orders per Period"
- report/11557 "SR Vendor Ranking"
- report/11559 "SR Vendor - Balance to Date"
- report/11561 "SR Vendor Payment Advice"
- report/11563 "SR G/L Acc Sheet Bal Account"
- report/11564 "SR G/L Acc Sheet Foreign Curr"
- report/11565 "SR G/L Acc Sheet Reportig Cur"
- report/11566 "SR G/L Acc Sheet Posting Info"
- report/11567 "SR G/L Acc Sheet VAT Info"
- report/11568 "SR Cust. Paymt List Standard"
- report/11569 "SR Cust. Paymt List FCY Amount"
- report/11570 "SR Cust. Paymt List Posting In"
- report/11577 "SR Item Ranking"
- report/11581 "SR Item Vendor Shipping Rem."
- report/26100 "Swiss VAT Statement"
- report/3010531 "Customer ESR Journal"
- report/3010532 "Sales Invoice ESR"
- report/3010533 "ESR Coupon"
- report/3010534 "Service - Invoice ESR"
- report/3010535 "Service - ESR Coupon"
- report/3010541 "DTA File"
- report/3010542 "EZAG File"
- report/3010543 "DTA Payment Order"
- report/3010544 "EZAG Payment Order"
- report/3010545 "DTA Payment Journal"
- report/3010546 "DTA Suggest Vendor Payments"
- report/3010801 "Quote Analysis"
- report/3010831 "LSV Suggest Collection"
- report/3010832 "LSV Collection Journal"
- report/3010833 "LSV Close Collection"
- report/3010834 "Write LSV File"
- report/3010835 "LSV Collection Order"
- report/3010836 "LSV Collection Authorisation"
- report/3010837 "LSV Customerbank List"
- report/3010838 "LSV Collection Advice"
- report/3010839 "LSV Write DebitDirect File"
- report/5005272 "Delivery Reminder - Test"
- report/5005273 "Issued Delivery Reminder"
- report/5005340 "Create Delivery Reminder"
- report/5005341 "Issue Delivery Reminder"
- table/11000 "Place of Dispatcher"
- table/11001 "Place of Receiver"
- table/11002 "Data Export"
- table/11003 "Data Export Record Definition"
- table/11004 "Data Export Record Source"
- table/11005 "Data Export Record Field"
- table/11006 "Data Export Table Relation"
- table/11007 "Data Export Record Type"
- table/11008 "Data Export Buffer"
- table/11009 "Data Export Setup"
- table/11010 "Data Exp. Primary Key Buffer"
- table/11014 "Certificate"
- table/11015 "Key Buffer"
- table/11016 "Number Series Buffer"
- table/11017 "VAT Cipher Code"
- table/11018 "VAT Cipher Setup"
- table/11500 "Bank Directory"
- table/11501 "VAT Currency Adjustment Buffer"
- table/26100 "DACH Report Selections"
- table/3010531 "ESR Setup"
- table/3010541 "DTA Setup"
- table/3010831 "LSV Setup"
- table/3010832 "LSV Journal"
- table/3010834 "LSV Journal Line"
- table/5005270 "Delivery Reminder Header"
- table/5005271 "Delivery Reminder Line"
- table/5005272 "Issued Deliv. Reminder Header"
- table/5005273 "Issued Deliv. Reminder Line"
- table/5005274 "Delivery Reminder Ledger Entry"
- table/5005275 "Delivery Reminder Comment Line"
- table/5005276 "Delivery Reminder Term"
- table/5005277 "Delivery Reminder Level"
- table/5005278 "Delivery Reminder Text"
- table/5005350 "Phys. Inventory Order Header"
- table/5005351 "Phys. Inventory Order Line"
- table/5005352 "Phys. Invt. Recording Header"
- table/5005353 "Phys. Invt. Recording Line"
- table/5005354 "Post. Phys. Invt. Order Header"
- table/5005355 "Posted Phys. Invt. Order Line"
- table/5005356 "Posted Phys. Invt. Rec. Header"
- table/5005357 "Posted Phys. Invt. Rec. Line"
- table/5005358 "Phys. Inventory Comment Line"
- table/5005359 "Posted Phys. Invt. Track. Line"
- table/5005360 "Phys. Invt. Tracking Buffer"
- table/5005361 "Expect. Phys. Inv. Track. Line"
- table/5005362 "Post. Exp. Ph. In. Track. Line"
- table/5005363 "Phys. Invt. Diff. List Buffer"
- tableextension/11550 "Service Line CH"
- tableextension/11551 "Service Invoice Line CH"
- tableextension/11552 "Service Line Archive CH"
- tableextension/11553 "Bank Export/Import Setup CH"
- tableextension/5005270 "SourceCodeSetupDACH"
- tableextension/5005280 "DRVendor"
- tableextension/5005281 "DRVendorTempl"
- tableextension/5005282 "DRPurchSetup"
- tableextension/5005283 "DRExtendedTextHeader"
- xmlport/11501 "SEPA DD pain.008.001.02.ch03"

## Other versions

- BC30: 341 objects differ from W1 (196 fields, 10 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
