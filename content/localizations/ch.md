---
id: localization/ch
type: localization
title: Switzerland (CH)
summary: Switzerland (CH) localization of Business Central 29. It covers Swiss electronic payments (QR-bill, ESR, LSV+, SEPA with Swiss rules), Swiss VAT statements with ciphers and VAT exchange rates, delivery reminders, quote management, physical inventory, and bank and post code directories. It answers how Swiss payment, VAT and document features are built.
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
  at: "2026-10-07T13:30:58.709Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: c495179c6b61cbdb9afee2b67e2f42953372f477318b67cc1f0e29e40ff465ac
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-ch
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
added_objects: 279
replaced_objects: 118
removed_objects: 0
added_fields: 196
added_events: 10
learn_folder: LocalFunctionality/Switzerland
---

# Switzerland (CH)

> Switzerland (CH) localization of Business Central 29. It covers Swiss electronic payments (QR-bill, ESR, LSV+, SEPA with Swiss rules), Swiss VAT statements with ciphers and VAT exchange rates, delivery reminders, quote management, physical inventory, and bank and post code directories. It answers how Swiss payment, VAT and document features are built.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/switzerland.md) · narrative **unreviewed** (machine-written)

## Overview

The Swiss layer centers on payments. QR-bill objects (codeunits 11502, 11512 to 11519, pages 11510 to 11518) create, scan, decode and print QR-bills and handle incoming documents. ESR (EsrMgt), LSV+ (LSVMgt, LSV journal pages) and DTA (DtaMgt) cover the older Swiss methods. Swiss rules are added to SEPA credit transfer and direct debit export, and to CAMT 053 and 054 import. Fields on vendor and customer bank accounts, journal lines and purchase headers carry ESR, giro, clearing and payment form data.

In finance, the Swiss VAT statement uses cipher codes (pages 11023 and 11024, codeunit 26100 "Update VAT-CH"). VAT entries, G/L accounts and currency exchange rates gain foreign currency and VAT exchange rate fields, and the Exch. Rate Adjustment report gets a valuation method and VAT entry adjustment. Provisional G/L balances and DACH report selections are also added. Many objects are shared with the German and Austrian layers (DACH).

Other additions are delivery reminders for vendors, sales quote management (quote status, subtotals, levels, positions), physical inventory orders, and Swiss post code and bank directory imports. Learn documents these under "Switzerland local functionality" and its sub-pages.

## Key points

- QR-bill management: generate, print, scan and import QR-bills, with IBAN/QR-IBAN, payment reference types and billing information (codeunit 11518 "Swiss QR-Bill Mgt.", page 11514 "Swiss QR-Bill Setup").
- ESR, LSV+ and DTA payment methods: ESR file import and printing, LSV collection journals with file export, DTA setup.
- SEPA credit transfer and direct debit exports with Swiss payment form and payment type fields on table 1226 "Payment Export Data", plus Swiss CAMT 053/054 import.
- Swiss VAT statement with VAT cipher setup, VAT exchange rate fields and VAT exchange rate adjustment on table 254 "VAT Entry" and the Exch. Rate Adjustment report.
- Delivery reminders for vendors: terms, levels, text, issue and test report, with own tables and pages.
- Sales quote management and posting changes: quote status, probability, subtotals, levels and positions on sales lines and archives.
- Foreign currency balances on G/L accounts and provisional balance view for journals.
- Imports of Swiss post codes and bank clearing numbers (Bank Directory).

Narrative written by Sonnet from the code diff and 34 Learn page summaries. In numbers: Switzerland (CH) localization of Business Central in BC29: 279 objects of its own, 118 W1 objects changed (196 fields and 10 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 9 | 106 | 4 |
| [Finance](#finance) | 25 | 52 | 45 |
| [Purchases](#purchases) | 24 | 52 | 32 |
| [Sales](#sales) | 27 | 11 | 63 |
| [Inventory](#inventory) | 9 | 25 | 22 |
| [Foundation](#foundation) | 10 | 12 | 27 |
| [(no namespace)](#no-namespace) | 0 | 8 | 0 |
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

### Bank

Adds the Swiss payment stack: QR-bill (encode, decode, image, setup wizard, scan, billing info), ESR, DTA and LSV management, a Bank Directory, and Swiss SEPA CT and DD export files. It also adds CAMT 053 and 054 import and Swiss fields and checks on the W1 SEPA codeunits and Payment Export Data.

Why: Learn describes ESR, LSV+, SEPA credit transfers and QR-bills with IBAN and QR-IBAN as the Swiss electronic payment methods, and bank clearing number import from SIX Interbank Clearing files.

Objects: [table/1226 "Payment Export Data"](../objects/table/1226.md), [codeunit/11518 "Swiss QR-Bill Mgt."](../objects/codeunit/11518-ch.md) (own), [codeunit/11513 "Swiss QR-Bill Encode"](../objects/codeunit/11513-ch.md) (own), [codeunit/11512 "Swiss QR-Bill Decode"](../objects/codeunit/11512-ch.md) (own), [page/11514 "Swiss QR-Bill Setup"](../objects/page/11514-ch.md) (own), [codeunit/3010531 "EsrMgt"](../objects/codeunit/3010531-ch.md) (own), [codeunit/3010831 "LSVMgt"](../objects/codeunit/3010831-ch.md) (own), [codeunit/11520 "Swiss SEPA CT-Export File"](../objects/codeunit/11520-ch.md) (own).

[All 115 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds the Swiss VAT statement with cipher setup and codes, VAT exchange rate fields on VAT Entry and G/L Account, and the Exch. Rate Adjustment changes. It also adds provisional G/L balance, data export objects and ESR fields on journal lines. Some objects are shared with Germany and Austria.

Why: Learn says Swiss VAT uses official exchange rates for foreign currency and adjusts VAT amounts for payment discounts, and describes foreign currency balances and temporary journal balances.

Objects: [table/254 "VAT Entry"](../objects/table/254.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md), [report/596 "Exch. Rate Adjustment"](../objects/report/596.md), [table/596 "Exch. Rate Adjmt. Parameters"](../objects/table/596.md), [page/11023 "VAT Cipher Codes"](../objects/page/11023-ch.md) (own), [page/11024 "VAT Cipher Setup"](../objects/page/11024-ch.md) (own), [codeunit/26100 "Update VAT-CH"](../objects/codeunit/26100-ch.md) (own).

[All 77 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds ESR, giro, clearing and payment form fields to Vendor Bank Account, reference fields on Purchase Header, and Suggest Vendor Payments changes. It adds a full delivery reminder feature for vendors, with tables, pages, codeunits and enum, and Swiss vendor reports.

Why: Learn documents delivery reminders (codes, terms, levels, text, generation, issue, test report) and the Vendor Payments List report.

Objects: [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [report/393 "Suggest Vendor Payments"](../objects/report/393.md), [codeunit/5005271 "Create Delivery Reminder"](../objects/codeunit/5005271-ch.md) (own), [codeunit/5005270 "Issue Delivery Reminder"](../objects/codeunit/5005270-ch.md) (own), [page/5005270 "Delivery Reminder"](../objects/page/5005270-ch.md) (own), [page/5005273 "Issued Delivery Reminder"](../objects/page/5005273-ch.md) (own), [report/11507 "Vendor Payments List"](../objects/report/11507-ch.md) (own).

[All 76 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds quote management fields (probability, follow-up, competition, validity) to Sales Header and archive. It adds position, level, subtotal and classification fields to sales lines and posted lines, posting description events, and Swiss customer reports.

Why: Learn lists subtotals with begin and end totals, enhanced posting descriptions and invoice rounding with payment discounts for Swiss sales documents.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/37 "Sales Line"](../objects/table/37.md), [codeunit/3010801 "QuoteMgt"](../objects/codeunit/3010801-ch.md) (own), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [table/5107 "Sales Header Archive"](../objects/table/5107.md), [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [report/3010801 "Quote Analysis"](../objects/report/3010801-ch.md) (own).

[All 38 objects of Sales in the diff](?ns=Sales#country-diff)

### Inventory

Adds a physical inventory order feature with its own tables, plus fields on Item, Item Ledger Entry and Item Journal Line for default location, customer and salesperson. It also adds Swiss item reports and dispatcher and receiver places.

Why: Learn says Swiss inventory uses default location codes from the item card and tracks invoices with multiple shipments.

Objects: [table/27 "Item"](../objects/table/27.md), [table/83 "Item Journal Line"](../objects/table/83.md), [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/313 "Inventory Setup"](../objects/table/313.md), [table/5005350 "Phys. Inventory Order Header"](../objects/table/5005350-ch.md) (own), [table/5005351 "Phys. Inventory Order Line"](../objects/table/5005351-ch.md) (own), [report/11503 "Item ABC Analysis"](../objects/report/11503-ch.md) (own), [table/11000 "Place of Dispatcher"](../objects/table/11000-ch.md) (own).

[All 34 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Foundation

Extends Company Information with Swiss fields including tax office data and authorized numbers. Adds DACH report selections, address formatting for the tax office, post code priority and a post code import report.

Why: Learn describes importing the latest Swiss Post post code file into the Post Code table.

Objects: [table/79 "Company Information"](../objects/table/79.md), [report/11502 "Import Post Codes"](../objects/report/11502-ch.md) (own), [table/225 "Post Code"](../objects/table/225.md), [table/26100 "DACH Report Selections"](../objects/table/26100-ch.md) (own), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md), [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md), [tableextension/11511 "Swiss QR-Bill Company Info."](../objects/tableextension/11511-ch.md) (own).

[All 22 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Holds the Swiss SEPA direct debit pain.008.001.02.ch03 XMLport, the PURCHASE-DEL.REMIND. permission set, data export setup and the Intrastat item list report. Upgrade and sandbox cleanup codeunits are not covered.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/11501 "SEPA DD pain.008.001.02.ch03"](../objects/xmlport/11501-ch.md) (own), [table/11009 "Data Export Setup"](../objects/table/11009-ch.md) (own), [report/11001 "Intrastat - Item List"](../objects/report/11001-ch.md) (own), [permissionset/26001 "PURCHASE-DEL.REMIND."](../objects/permissionset/26001-ch.md) (own).

[All 8 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### FixedAssets

Adds Swiss depreciation fields on Fixed Asset (BWR depreciation book, premium depreciation) and a Swiss book value report. Also changes FA General Report to exclude reclassification entries.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md), [report/11011 "Fixed Asset - Book Value 03"](../objects/report/11011-ch.md) (own), [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md).

[All 6 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Adds permission set extensions for delivery reminders and changes the LOCAL and LOCAL READ sets and the payables journal sets.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [permissionsetextension/5005270 "DR LOCAL"](../objects/permissionsetextension/5005270-ch.md) (own), [permissionsetextension/5005271 "DR LOCAL READ"](../objects/permissionsetextension/5005271-ch.md) (own), [permissionset/3602 "Payables Journals - Post"](../objects/permissionset/3602.md), [permissionset/8824 "Payables Journals - Edit"](../objects/permissionset/8824.md).

[All 6 objects of Security in the diff](?ns=Security#country-diff)

### Service

Adds Swiss fields through table extensions on service lines, service invoice lines and service line archive. Also adds a service document management codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11524 "Serv. Document Mgt. CH"](../objects/codeunit/11524-ch.md) (own), [tableextension/11550 "Service Line CH"](../objects/tableextension/11550-ch.md) (own), [tableextension/11551 "Service Invoice Line CH"](../objects/tableextension/11551-ch.md) (own), [tableextension/11552 "Service Line Archive CH"](../objects/tableextension/11552-ch.md) (own).

[All 4 objects of Service in the diff](?ns=Service#country-diff)

### CRM

Changes the Export Contact and Export Segment Contact XMLports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md), [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### Microsoft

Adds an ELM Interop Input page and a Certificate table.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [page/35563 "ELM Interop Input"](../objects/page/35563-ch.md) (own), [table/11014 "Certificate"](../objects/table/11014-ch.md) (own).

[All 2 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Utilities

Adds a general management codeunit and archive procedures that archive sales documents together with the quote status.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5063 "ArchiveManagement"](../objects/codeunit/5063.md), [codeunit/11501 "GeneralMgt"](../objects/codeunit/11501-ch.md) (own).

[All 2 objects of Utilities in the diff](?ns=Utilities#country-diff)

### EServices

Changes the ReadSoft OCR master data sync codeunit for the Swiss layer.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/884 "ReadSoft OCR Master Data Sync"](../objects/codeunit/884.md).

[All 1 objects of EServices in the diff](?ns=EServices#country-diff)

### IO

Adds XML handling procedures to Read Data Exch. from File, used to split payments per invoice and read amount nodes in bank files.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1240 "Read Data Exch. from File"](../objects/codeunit/1240.md).

[All 1 objects of IO in the diff](?ns=IO#country-diff)

### Manufacturing

Adds a page extension for the Manufacturing Manager role center shared with the DACH layers.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/11010 "Manufacturing Manager RC DACH"](../objects/pageextension/11010-ch.md) (own).

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

279 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-ch.md)
- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-ch.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-ch.md)
- [codeunit/11000 "Data Export Management"](../objects/codeunit/11000-ch.md)
- [codeunit/11004 "Report Sel. Purch. Subscribers"](../objects/codeunit/11004-ch.md)
- [codeunit/11110 "Update VAT-AT"](../objects/codeunit/11110-ch.md)
- [codeunit/11500 "BankMgt"](../objects/codeunit/11500-ch.md)
- [codeunit/11501 "GeneralMgt"](../objects/codeunit/11501-ch.md)
- [codeunit/11502 "Swiss QR-Bill Purchases"](../objects/codeunit/11502-ch.md)
- [codeunit/11503 "CHMgt"](../objects/codeunit/11503-ch.md)
- [codeunit/11504 "Swiss QR - Setup Mgt."](../objects/codeunit/11504-ch.md)
- [codeunit/11512 "Swiss QR-Bill Decode"](../objects/codeunit/11512-ch.md)
- [codeunit/11513 "Swiss QR-Bill Encode"](../objects/codeunit/11513-ch.md)
- [codeunit/11514 "Swiss QR-Bill Image Mgt."](../objects/codeunit/11514-ch.md)
- [codeunit/11515 "CH Report Management"](../objects/codeunit/11515-ch.md)
- [codeunit/11516 "Swiss QR-Bill Incoming Doc"](../objects/codeunit/11516-ch.md)
- [codeunit/11517 "Swiss QR-Bill Install"](../objects/codeunit/11517-ch.md)
- [codeunit/11518 "Swiss QR-Bill Mgt."](../objects/codeunit/11518-ch.md)
- [codeunit/11519 "Swiss QR-Bill Billing Info"](../objects/codeunit/11519-ch.md)
- [codeunit/11520 "Swiss SEPA CT-Export File"](../objects/codeunit/11520-ch.md)
- [codeunit/11521 "SEPA CAMT 053 Bank Rec. Lines"](../objects/codeunit/11521-ch.md)
- [codeunit/11522 "SEPA CAMT 054 Bank Rec. Lines"](../objects/codeunit/11522-ch.md)
- [codeunit/11523 "Serv. Bank Payment Mgt."](../objects/codeunit/11523-ch.md)
- [codeunit/11524 "Serv. Document Mgt. CH"](../objects/codeunit/11524-ch.md)
- [codeunit/11530 "Swiss SEPA DD-Export File"](../objects/codeunit/11530-ch.md)
- [codeunit/14060 "UPG Data Out Of Geo. Apps"](../objects/codeunit/14060-ch.md)
- [codeunit/26100 "Update VAT-CH"](../objects/codeunit/26100-ch.md)
- [codeunit/35517 "CH Upgrade Tag Def."](../objects/codeunit/35517-ch.md)
- [codeunit/104100 "Upg Local Functionality"](../objects/codeunit/104100-ch.md)
- [codeunit/3010531 "EsrMgt"](../objects/codeunit/3010531-ch.md)
- [codeunit/3010541 "DtaMgt"](../objects/codeunit/3010541-ch.md)
- [codeunit/3010801 "QuoteMgt"](../objects/codeunit/3010801-ch.md)
- [codeunit/3010831 "LSVMgt"](../objects/codeunit/3010831-ch.md)
- [codeunit/5005270 "Issue Delivery Reminder"](../objects/codeunit/5005270-ch.md)
- [codeunit/5005271 "Create Delivery Reminder"](../objects/codeunit/5005271-ch.md)
- [codeunit/5005272 "Deliv.-Rem. Ext. Text Transfer"](../objects/codeunit/5005272-ch.md)
- [codeunit/5005273 "Iss. Delivery Remind. printed"](../objects/codeunit/5005273-ch.md)
- [codeunit/5005274 "DR Data Class. Eval. Data"](../objects/codeunit/5005274-ch.md)
- [codeunit/5005396 "Print Document Comfort"](../objects/codeunit/5005396-ch.md)
- [codeunit/5005397 "Format Adress Comfort"](../objects/codeunit/5005397-ch.md)
- [enum/11003 "Data Export File Encoding"](../objects/enum/11003-ch.md)
- [enum/11503 "SEPA CT Batch Booking"](../objects/enum/11503-ch.md)
- [enum/11510 "Swiss QR-Bill Address Type"](../objects/enum/11510-ch.md)
- [enum/11511 "Swiss QR-Bill IBAN Type"](../objects/enum/11511-ch.md)
- [enum/11512 "Swiss QR-Bill Payment Reference Type"](../objects/enum/11512-ch.md)
- [enum/11513 "Swiss QR-Bill Umlaut Encoding"](../objects/enum/11513-ch.md)
- [enum/11515 "Swiss QR-Bill Reports"](../objects/enum/11515-ch.md)
- [enum/11516 "Swiss QR-Bill Billing Detail"](../objects/enum/11516-ch.md)
- [enum/5005272 "Delivery Reminder Date Type"](../objects/enum/5005272-ch.md)
- [enumextension/26101 "Report Selection Usage Del. Rem."](../objects/enumextension/26101-ch.md)
- [enumextension/26102 "Report Sel. Usage Purch. DACH"](../objects/enumextension/26102-ch.md)
- [page/11000 "Place of Dispatchers"](../objects/page/11000-ch.md)
- [page/11001 "Place of Receivers"](../objects/page/11001-ch.md)
- [page/11002 "Data Exports"](../objects/page/11002-ch.md)
- [page/11003 "Data Export Record Definitions"](../objects/page/11003-ch.md)
- [page/11004 "Data Export Record Source"](../objects/page/11004-ch.md)
- [page/11007 "Data Export Table Relation"](../objects/page/11007-ch.md)
- [page/11008 "Data Export Table Relation Sub"](../objects/page/11008-ch.md)
- [page/11009 "Data Export Field List"](../objects/page/11009-ch.md)
- [page/11014 "Data Export Record Types"](../objects/page/11014-ch.md)
- [page/11023 "VAT Cipher Codes"](../objects/page/11023-ch.md)
- [page/11024 "VAT Cipher Setup"](../objects/page/11024-ch.md)
- [page/11026 "Data Export Table Keys"](../objects/page/11026-ch.md)
- [page/11027 "Data Export Record Fields"](../objects/page/11027-ch.md)
- [page/11500 "G/L Acc. Provisional Balance"](../objects/page/11500-ch.md)
- [page/11501 "Bank Directory"](../objects/page/11501-ch.md)
- [page/11502 "Swiss QR-Bill Create Vend Bank"](../objects/page/11502-ch.md)
- [page/11510 "Swiss QR-Bill Scan"](../objects/page/11510-ch.md)
- [page/11511 "Swiss QR-Bill Manual Print"](../objects/page/11511-ch.md)
- [page/11512 "Swiss QR-Bill Print Select Doc"](../objects/page/11512-ch.md)
- [page/11513 "Swiss QR-Bill Billing Info"](../objects/page/11513-ch.md)
- [page/11514 "Swiss QR-Bill Setup"](../objects/page/11514-ch.md)
- [page/11515 "Swiss QR-Bill Layout"](../objects/page/11515-ch.md)
- [page/11516 "Swiss QR-Bill Setup Wizard"](../objects/page/11516-ch.md)
- [page/11517 "Swiss QR-Bill Reports"](../objects/page/11517-ch.md)
- [page/11518 "Swiss QR-Bill Billing Details"](../objects/page/11518-ch.md)
- [page/35516 "Cash Receipt Journal FactBox"](../objects/page/35516-ch.md)
- [page/35517 "Payment Journal FactBox"](../objects/page/35517-ch.md)
- [page/35561 "Modify Posting Day Input"](../objects/page/35561-ch.md)
- [page/35562 "Modify Document Number Input"](../objects/page/35562-ch.md)
- [page/35563 "ELM Interop Input"](../objects/page/35563-ch.md)
- [page/3010531 "ESR Setup"](../objects/page/3010531-ch.md)
- [page/3010532 "ESR Setup List"](../objects/page/3010532-ch.md)
- [page/3010541 "DTA Setup"](../objects/page/3010541-ch.md)
- [page/3010542 "DTA Setup List"](../objects/page/3010542-ch.md)
- [page/3010543 "DTA EZAG Pictures"](../objects/page/3010543-ch.md)
- [page/3010830 "LSV Setup List"](../objects/page/3010830-ch.md)
- [page/3010831 "LSV Setup"](../objects/page/3010831-ch.md)
- [page/3010832 "LSV Journal List"](../objects/page/3010832-ch.md)
- [page/3010834 "LSV Journal"](../objects/page/3010834-ch.md)
- [page/3010835 "LSV Journal Line List"](../objects/page/3010835-ch.md)
- [page/5005270 "Delivery Reminder"](../objects/page/5005270-ch.md)
- [page/5005271 "Delivery Reminder Sub."](../objects/page/5005271-ch.md)
- [page/5005272 "Delivery Reminder List"](../objects/page/5005272-ch.md)
- [page/5005273 "Issued Delivery Reminder"](../objects/page/5005273-ch.md)
- [page/5005274 "Issued Delivery Reminder Sub"](../objects/page/5005274-ch.md)
- [page/5005275 "Issued Delivery Reminders List"](../objects/page/5005275-ch.md)
- [page/5005276 "Deliv. Reminder Ledger Entries"](../objects/page/5005276-ch.md)
- [page/5005277 "Delivery Reminder Comment Line"](../objects/page/5005277-ch.md)
- [page/5005278 "Deliv. Rem. Comment Line List"](../objects/page/5005278-ch.md)
- [page/5005279 "Delivery Reminder Terms"](../objects/page/5005279-ch.md)
- [page/5005280 "Delivery Reminder Terms List"](../objects/page/5005280-ch.md)
- [page/5005281 "Delivery Reminder Levels"](../objects/page/5005281-ch.md)
- [page/5005283 "Delivery Reminder Text"](../objects/page/5005283-ch.md)
- [pageextension/11010 "Manufacturing Manager RC DACH"](../objects/pageextension/11010-ch.md)
- [pageextension/11510 "Swiss QR-Bill Incoming Doc"](../objects/pageextension/11510-ch.md)
- [pageextension/11511 "Swiss QR-Bill Incoming Docs"](../objects/pageextension/11511-ch.md)
- [pageextension/11512 "Swiss QR-Bill Company Info."](../objects/pageextension/11512-ch.md)
- [pageextension/11513 "Swiss QR-Bill Payment Method"](../objects/pageextension/11513-ch.md)
- [pageextension/11514 "Swiss QR-Bill Vend.BankAccCard"](../objects/pageextension/11514-ch.md)
- [pageextension/11515 "Swiss QR-Bill Purchase Journal"](../objects/pageextension/11515-ch.md)
- [pageextension/11516 "Swiss QR-Bill Purchase Invoice"](../objects/pageextension/11516-ch.md)
- [pageextension/11517 "Swiss QR-Bill Purchase Order"](../objects/pageextension/11517-ch.md)
- [pageextension/11518 "Swiss QR-Bill Bank Account"](../objects/pageextension/11518-ch.md)
- [pageextension/11553 "Bank Export/Import Setup CH"](../objects/pageextension/11553-ch.md)
- [pageextension/5005270 "SourceCodeSetupDACH"](../objects/pageextension/5005270-ch.md)
- [pageextension/5005271 "DRVendorTemplCard"](../objects/pageextension/5005271-ch.md)
- [pageextension/5005272 "DRPurchSetup"](../objects/pageextension/5005272-ch.md)
- [pageextension/5005273 "DRExtendedText"](../objects/pageextension/5005273-ch.md)
- [pageextension/5005274 "DRPurchMgrRoleCenter"](../objects/pageextension/5005274-ch.md)
- [pageextension/5005275 "DRPurchAgentRoleCenter"](../objects/pageextension/5005275-ch.md)
- [pageextension/5005276 "DRPurchaseOrder"](../objects/pageextension/5005276-ch.md)
- [pageextension/5005277 "DRVendorCard"](../objects/pageextension/5005277-ch.md)
- [permissionset/26001 "PURCHASE-DEL.REMIND."](../objects/permissionset/26001-ch.md)
- [permissionsetextension/11501 "D365 BASIC ISV - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11501-ch.md)
- [permissionsetextension/11502 "D365 BASIC - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11502-ch.md)
- [permissionsetextension/11503 "D365 BUS FULL ACCESS - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11503-ch.md)
- [permissionsetextension/11504 "D365 BUS PREMIUM - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11504-ch.md)
- [permissionsetextension/11505 "D365 FULL ACCESS - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11505-ch.md)
- [permissionsetextension/11506 "D365 READ - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11506-ch.md)
- [permissionsetextension/11507 "D365 TEAM MEMBER - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11507-ch.md)
- [permissionsetextension/11508 "INTELLIGENT CLOUD - QR-Bill Management for Switzerland"](../objects/permissionsetextension/11508-ch.md)
- [permissionsetextension/5005270 "DR LOCAL"](../objects/permissionsetextension/5005270-ch.md)
- [permissionsetextension/5005271 "DR LOCAL READ"](../objects/permissionsetextension/5005271-ch.md)
- [report/11001 "Intrastat - Item List"](../objects/report/11001-ch.md)
- [report/11002 "G/L Total-Balance"](../objects/report/11002-ch.md)
- [report/11003 "Customer Total-Balance"](../objects/report/11003-ch.md)
- [report/11004 "Vendor Total-Balance"](../objects/report/11004-ch.md)
- [report/11005 "VAT Statement Germany"](../objects/report/11005-ch.md)
- [report/11006 "Vendor Detailed Aging"](../objects/report/11006-ch.md)
- [report/11007 "VAT-Vies Declaration Tax - DE"](../objects/report/11007-ch.md)
- [report/11010 "VAT Statement Schedule"](../objects/report/11010-ch.md)
- [report/11011 "Fixed Asset - Book Value 03"](../objects/report/11011-ch.md)
- [report/11015 "Export Business Data"](../objects/report/11015-ch.md)
- [report/11100 "Fixed Assets - List AT"](../objects/report/11100-ch.md)
- [report/11108 "VAT - VIES Declaration XML"](../objects/report/11108-ch.md)
- [report/11109 "Paragraph 131 Export"](../objects/report/11109-ch.md)
- [report/11110 "VAT Statement AT"](../objects/report/11110-ch.md)
- [report/11111 "Crossborder Services"](../objects/report/11111-ch.md)
- [report/11112 "Update VAT Statement Template"](../objects/report/11112-ch.md)
- [report/11500 "Provisional Trial Balance"](../objects/report/11500-ch.md)
- [report/11502 "Import Post Codes"](../objects/report/11502-ch.md)
- [report/11503 "Item ABC Analysis"](../objects/report/11503-ch.md)
- [report/11504 "Import Bank Directory"](../objects/report/11504-ch.md)
- [report/11505 "SR Item Acc Sheet Net Change"](../objects/report/11505-ch.md)
- [report/11506 "SR Item Acc Sheet Inv. Value"](../objects/report/11506-ch.md)
- [report/11507 "Vendor Payments List"](../objects/report/11507-ch.md)
- [report/11509 "Vendor Payment Order"](../objects/report/11509-ch.md)
- [report/11510 "Swiss QR-Bill Print"](../objects/report/11510-ch.md)
- [report/11512 "Sales Picking List"](../objects/report/11512-ch.md)
- [report/11514 "G/L Setup Information"](../objects/report/11514-ch.md)
- [report/11517 "Inventory Value (Help Report)"](../objects/report/11517-ch.md)
- [report/11518 "Old Swiss VAT Statement"](../objects/report/11518-ch.md)
- [report/11521 "SR G/L Entries Foreign Currenc"](../objects/report/11521-ch.md)
- [report/11529 "SR Account Interest"](../objects/report/11529-ch.md)
- [report/11535 "SR Cust. Orders per Period"](../objects/report/11535-ch.md)
- [report/11537 "SR Cust. Due Amount per Period"](../objects/report/11537-ch.md)
- [report/11539 "SR Cust. Ranking"](../objects/report/11539-ch.md)
- [report/11540 "SR Cust. - Balance to Date"](../objects/report/11540-ch.md)
- [report/11553 "SR Ven. Due Amount per Period"](../objects/report/11553-ch.md)
- [report/11554 "SR Vendor Orders per Period"](../objects/report/11554-ch.md)
- [report/11557 "SR Vendor Ranking"](../objects/report/11557-ch.md)
- [report/11559 "SR Vendor - Balance to Date"](../objects/report/11559-ch.md)
- [report/11561 "SR Vendor Payment Advice"](../objects/report/11561-ch.md)
- [report/11563 "SR G/L Acc Sheet Bal Account"](../objects/report/11563-ch.md)
- [report/11564 "SR G/L Acc Sheet Foreign Curr"](../objects/report/11564-ch.md)
- [report/11565 "SR G/L Acc Sheet Reportig Cur"](../objects/report/11565-ch.md)
- [report/11566 "SR G/L Acc Sheet Posting Info"](../objects/report/11566-ch.md)
- [report/11567 "SR G/L Acc Sheet VAT Info"](../objects/report/11567-ch.md)
- [report/11568 "SR Cust. Paymt List Standard"](../objects/report/11568-ch.md)
- [report/11569 "SR Cust. Paymt List FCY Amount"](../objects/report/11569-ch.md)
- [report/11570 "SR Cust. Paymt List Posting In"](../objects/report/11570-ch.md)
- [report/11577 "SR Item Ranking"](../objects/report/11577-ch.md)
- [report/11581 "SR Item Vendor Shipping Rem."](../objects/report/11581-ch.md)
- [report/26100 "Swiss VAT Statement"](../objects/report/26100-ch.md)
- [report/3010531 "Customer ESR Journal"](../objects/report/3010531-ch.md)
- [report/3010532 "Sales Invoice ESR"](../objects/report/3010532-ch.md)
- [report/3010533 "ESR Coupon"](../objects/report/3010533-ch.md)
- [report/3010534 "Service - Invoice ESR"](../objects/report/3010534-ch.md)
- [report/3010535 "Service - ESR Coupon"](../objects/report/3010535-ch.md)
- [report/3010541 "DTA File"](../objects/report/3010541-ch.md)
- [report/3010542 "EZAG File"](../objects/report/3010542-ch.md)
- [report/3010543 "DTA Payment Order"](../objects/report/3010543-ch.md)
- [report/3010544 "EZAG Payment Order"](../objects/report/3010544-ch.md)
- [report/3010545 "DTA Payment Journal"](../objects/report/3010545-ch.md)
- [report/3010546 "DTA Suggest Vendor Payments"](../objects/report/3010546-ch.md)
- [report/3010801 "Quote Analysis"](../objects/report/3010801-ch.md)
- [report/3010831 "LSV Suggest Collection"](../objects/report/3010831-ch.md)
- [report/3010832 "LSV Collection Journal"](../objects/report/3010832-ch.md)
- [report/3010833 "LSV Close Collection"](../objects/report/3010833-ch.md)
- [report/3010834 "Write LSV File"](../objects/report/3010834-ch.md)
- [report/3010835 "LSV Collection Order"](../objects/report/3010835-ch.md)
- [report/3010836 "LSV Collection Authorisation"](../objects/report/3010836-ch.md)
- [report/3010837 "LSV Customerbank List"](../objects/report/3010837-ch.md)
- [report/3010838 "LSV Collection Advice"](../objects/report/3010838-ch.md)
- [report/3010839 "LSV Write DebitDirect File"](../objects/report/3010839-ch.md)
- [report/5005272 "Delivery Reminder - Test"](../objects/report/5005272-ch.md)
- [report/5005273 "Issued Delivery Reminder"](../objects/report/5005273-ch.md)
- [report/5005340 "Create Delivery Reminder"](../objects/report/5005340-ch.md)
- [report/5005341 "Issue Delivery Reminder"](../objects/report/5005341-ch.md)
- [table/11000 "Place of Dispatcher"](../objects/table/11000-ch.md)
- [table/11001 "Place of Receiver"](../objects/table/11001-ch.md)
- [table/11002 "Data Export"](../objects/table/11002-ch.md)
- [table/11003 "Data Export Record Definition"](../objects/table/11003-ch.md)
- [table/11004 "Data Export Record Source"](../objects/table/11004-ch.md)
- [table/11005 "Data Export Record Field"](../objects/table/11005-ch.md)
- [table/11006 "Data Export Table Relation"](../objects/table/11006-ch.md)
- [table/11007 "Data Export Record Type"](../objects/table/11007-ch.md)
- [table/11008 "Data Export Buffer"](../objects/table/11008-ch.md)
- [table/11009 "Data Export Setup"](../objects/table/11009-ch.md)
- [table/11010 "Data Exp. Primary Key Buffer"](../objects/table/11010-ch.md)
- [table/11014 "Certificate"](../objects/table/11014-ch.md)
- [table/11015 "Key Buffer"](../objects/table/11015-ch.md)
- [table/11016 "Number Series Buffer"](../objects/table/11016-ch.md)
- [table/11017 "VAT Cipher Code"](../objects/table/11017-ch.md)
- [table/11018 "VAT Cipher Setup"](../objects/table/11018-ch.md)
- [table/11500 "Bank Directory"](../objects/table/11500-ch.md)
- [table/11501 "VAT Currency Adjustment Buffer"](../objects/table/11501-ch.md)
- [table/11510 "Swiss QR-Bill Buffer"](../objects/table/11510-ch.md)
- [table/11511 "Swiss QR-Bill Billing Info"](../objects/table/11511-ch.md)
- [table/11512 "Swiss QR-Bill Setup"](../objects/table/11512-ch.md)
- [table/11513 "Swiss QR-Bill Layout"](../objects/table/11513-ch.md)
- [table/11514 "Swiss QR-Bill Reports"](../objects/table/11514-ch.md)
- [table/11518 "Swiss QR-Bill Billing Detail"](../objects/table/11518-ch.md)
- [table/26100 "DACH Report Selections"](../objects/table/26100-ch.md)
- [table/3010531 "ESR Setup"](../objects/table/3010531-ch.md)
- [table/3010541 "DTA Setup"](../objects/table/3010541-ch.md)
- [table/3010831 "LSV Setup"](../objects/table/3010831-ch.md)
- [table/3010832 "LSV Journal"](../objects/table/3010832-ch.md)
- [table/3010834 "LSV Journal Line"](../objects/table/3010834-ch.md)
- [table/5005270 "Delivery Reminder Header"](../objects/table/5005270-ch.md)
- [table/5005271 "Delivery Reminder Line"](../objects/table/5005271-ch.md)
- [table/5005272 "Issued Deliv. Reminder Header"](../objects/table/5005272-ch.md)
- [table/5005273 "Issued Deliv. Reminder Line"](../objects/table/5005273-ch.md)
- [table/5005274 "Delivery Reminder Ledger Entry"](../objects/table/5005274-ch.md)
- [table/5005275 "Delivery Reminder Comment Line"](../objects/table/5005275-ch.md)
- [table/5005276 "Delivery Reminder Term"](../objects/table/5005276-ch.md)
- [table/5005277 "Delivery Reminder Level"](../objects/table/5005277-ch.md)
- [table/5005278 "Delivery Reminder Text"](../objects/table/5005278-ch.md)
- [table/5005350 "Phys. Inventory Order Header"](../objects/table/5005350-ch.md)
- [table/5005351 "Phys. Inventory Order Line"](../objects/table/5005351-ch.md)
- [table/5005352 "Phys. Invt. Recording Header"](../objects/table/5005352-ch.md)
- [table/5005353 "Phys. Invt. Recording Line"](../objects/table/5005353-ch.md)
- [table/5005354 "Post. Phys. Invt. Order Header"](../objects/table/5005354-ch.md)
- [table/5005355 "Posted Phys. Invt. Order Line"](../objects/table/5005355-ch.md)
- [table/5005356 "Posted Phys. Invt. Rec. Header"](../objects/table/5005356-ch.md)
- [table/5005357 "Posted Phys. Invt. Rec. Line"](../objects/table/5005357-ch.md)
- [table/5005358 "Phys. Inventory Comment Line"](../objects/table/5005358-ch.md)
- [table/5005359 "Posted Phys. Invt. Track. Line"](../objects/table/5005359-ch.md)
- [table/5005360 "Phys. Invt. Tracking Buffer"](../objects/table/5005360-ch.md)
- [table/5005361 "Expect. Phys. Inv. Track. Line"](../objects/table/5005361-ch.md)
- [table/5005362 "Post. Exp. Ph. In. Track. Line"](../objects/table/5005362-ch.md)
- [table/5005363 "Phys. Invt. Diff. List Buffer"](../objects/table/5005363-ch.md)
- [tableextension/11510 "Swiss QR-Bill Incoming Doc"](../objects/tableextension/11510-ch.md)
- [tableextension/11511 "Swiss QR-Bill Company Info."](../objects/tableextension/11511-ch.md)
- [tableextension/11512 "Swiss QR-Bill Payment Method"](../objects/tableextension/11512-ch.md)
- [tableextension/11513 "Swiss QR-Bill Purchase Header"](../objects/tableextension/11513-ch.md)
- [tableextension/11514 "Swiss QR-Bill Gen Journal Line"](../objects/tableextension/11514-ch.md)
- [tableextension/11515 "Swiss QR-Bill Bank Account"](../objects/tableextension/11515-ch.md)
- [tableextension/11550 "Service Line CH"](../objects/tableextension/11550-ch.md)
- [tableextension/11551 "Service Invoice Line CH"](../objects/tableextension/11551-ch.md)
- [tableextension/11552 "Service Line Archive CH"](../objects/tableextension/11552-ch.md)
- [tableextension/11553 "Bank Export/Import Setup CH"](../objects/tableextension/11553-ch.md)
- [tableextension/5005270 "SourceCodeSetupDACH"](../objects/tableextension/5005270-ch.md)
- [tableextension/5005280 "DRVendor"](../objects/tableextension/5005280-ch.md)
- [tableextension/5005281 "DRVendorTempl"](../objects/tableextension/5005281-ch.md)
- [tableextension/5005282 "DRPurchSetup"](../objects/tableextension/5005282-ch.md)
- [tableextension/5005283 "DRExtendedTextHeader"](../objects/tableextension/5005283-ch.md)
- [xmlport/11501 "SEPA DD pain.008.001.02.ch03"](../objects/xmlport/11501-ch.md)

## Other versions

- BC30: 341 objects differ from W1 (196 fields, 10 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
