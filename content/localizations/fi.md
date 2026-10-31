---
id: localization/fi
type: localization
title: Finland (FI)
summary: Finland (FI) localization of Business Central 29. It covers electronic banking with bank reference files (domestic LM03, foreign LUM2), SEPA pain.001.001.09 export, reference numbers, automatic account codes, Intrastat, VAT-VIES declaration, depreciation differences and Finnish service reports.
tier: official
language: en
tags:
  - localization
  - fi
review:
  state: reviewed
  by: opus
  at: "2026-10-17T01:02:52.180Z"
  flags: []
generated:
  at: "2026-10-31T00:48:20.076Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: c36a7da45a3a55164571c02f6ff54440046c7c37a1f0c4fbc778215ccf6a68c0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-fi
    date: null
    commit: 8e740e5061595dd231c4a2d9d453c86c84ec76ae
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/12
    - object/codeunit/442
    - object/page/132
    - object/page/134
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/393
    - object/report/394
    - object/table/3
    - object/table/9
    - object/table/15
    - object/table/17
    - object/table/21
    - object/table/23
    - object/table/25
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/49
    - object/table/55
    - object/table/79
    - object/table/81
    - object/table/111
    - object/table/112
    - object/table/113
    - object/table/115
    - object/table/121
    - object/table/122
    - object/table/123
    - object/table/125
    - object/table/181
    - object/table/242
    - object/table/262
    - object/table/263
    - object/table/287
    - object/table/288
    - object/table/296
    - object/table/297
    - object/table/298
    - object/table/311
    - object/table/312
    - object/table/317
    - object/table/323
    - object/table/324
    - object/table/372
    - object/table/475
    - object/table/1383
    - object/table/5601
    - object/table/5606
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/finland
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: FI
version: "29"
w1_version: "29"
added_objects: 56
replaced_objects: 49
removed_objects: 0
added_fields: 79
added_events: 0
learn_folder: LocalFunctionality/Finland
---

# Finland (FI)

> Finland (FI) localization of Business Central 29. It covers electronic banking with bank reference files (domestic LM03, foreign LUM2), SEPA pain.001.001.09 export, reference numbers, automatic account codes, Intrastat, VAT-VIES declaration, depreciation differences and Finnish service reports.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/finland.md) · narrative reviewed (checked by Opus)

## Overview

Finland adds a large electronic banking layer, mostly in objects numbered 32000000 and up. It imports customer payments and exports vendor payments through bank reference files, with domestic (LM03) and foreign (LUM2) formats. It also adds SEPA credit transfer export in pain.001.001.09 format. Reference numbers, message fields and payment dates are added to journal lines, ledger entries, payment buffers, sales, reminder and purchase documents. Learn covers this in "Electronic banking in Finland", "Generate Payment Files (FI)", "Set Up Bank Reference Files (FI)" and "SEPA credit transfer payments (FI)".

Other local features are automatic account codes (tables 11203 and 11204, with an Auto. Acc. Group field on many lines and buffers), the option to disregard payment discounts at full payment, and posting of depreciation differences between straight-line and declining balance methods. Finnish Intrastat reporting, the VAT-VIES declaration and VAT information on invoices are also covered. Business Identity Code fields sit on Company Information and Vendor. Finnish service documents and contract reports are provided as own reports.

The code changes 41 W1 tables with 79 added fields and a few procedures in Gen. Jnl.-Post Line, Sales-Post Prepayments and Suggest Vendor Payments. No events are added. Learn documents the features under "Finland Local Functionality".

## Key points

- Bank reference files: import of customer payments and export of vendor payments, domestic (LM03) and foreign (LUM2), set up in page 32000000 "Bank Reference File Setup".
- SEPA credit transfer export in pain.001.001.09 through codeunit 13413 and report 13413, with SEPA Payment and Clearing Code fields on bank accounts and SEPA Allowed on Country/Region.
- Reference numbers are added to Gen. Journal Line, Cust. Ledger Entry, Sales Invoice Header and reminders, with number series set up in Sales & Receivables Setup.
- Automatic account codes (tables 11203 and 11204) with an Auto. Acc. Group field on G/L Account, document lines and posting buffers.
- Disregard payment discount at full payment, a field on Payment Terms and Cust. Ledger Entry.
- Depreciation differences posted with report 13402 "Calc. and Post Depr. Diff.", using new FA Posting Group accounts.
- Finnish Intrastat report extensions, VAT-VIES declaration report extension and the G/L Register FI report.
- Finnish service reports for invoices, orders, quotes and contracts.

Narrative written by Sonnet from the code diff and 12 Learn page summaries. In numbers: Finland (FI) localization of Business Central in BC29: 56 objects of its own, 49 W1 objects changed (79 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 0 | 24 | 0 |
| [Finance](#finance) | 9 | 10 | 17 |
| [Purchases](#purchases) | 15 | 0 | 32 |
| [Sales](#sales) | 14 | 0 | 17 |
| [Inventory](#inventory) | 2 | 8 | 4 |
| [Service](#service) | 0 | 8 | 0 |
| [Foundation](#foundation) | 4 | 3 | 6 |
| [FixedAssets](#fixedassets) | 2 | 2 | 3 |
| [Security](#security) | 2 | 0 | 0 |
| [(no namespace)](#no-namespace) | 0 | 1 | 0 |
| [HumanResources](#humanresources) | 1 | 0 | 0 |

### Bank

Adds the Finnish electronic banking suite: reference file setup, import and export pages, reference payment management codeunit, and own tables for imported and exported reference payments and foreign payment types. It also adds SEPA payment file export (pain.001.001.09), a suggest bank payments report and LUM and LMP export reports.

Why: Learn describes bank reference files for importing customer payments and exporting domestic and foreign vendor payments, and SEPA credit transfer export in pain.001.001.09.

Objects: [codeunit/32000000 "Ref. Payment Management"](../objects/codeunit/32000000-fi.md) (own), [table/32000000 "Reference File Setup"](../objects/table/32000000-fi.md) (own), [page/32000000 "Bank Reference File Setup"](../objects/page/32000000-fi.md) (own), [report/32000000 "Import Ref. Payment"](../objects/report/32000000-fi.md) (own), [report/32000004 "Export Ref. Payment - LUM"](../objects/report/32000004-fi.md) (own), [report/32000006 "Export Ref. Payment - LMP"](../objects/report/32000006-fi.md) (own), [codeunit/13413 "Exp. SEPA CT pain.001.001.09"](../objects/codeunit/13413-fi.md) (own), [report/32000003 "Suggest Bank Payments"](../objects/report/32000003-fi.md) (own).

[All 24 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds reference, message and payment date fields to general journal lines and posted lines. Adds automatic account tables, the G/L Register FI report, currency exchange rate import and VIES declaration support. Gen. Jnl.-Post Line gets procedures to update imported and exported reference payments.

Why: Learn documents automatic account codes and posting groups, and the VAT-VIES declaration for reporting to Finnish tax authorities.

Objects: [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/181 "Posted Gen. Journal Line"](../objects/table/181.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/11203 "Automatic Acc. Header"](../objects/table/11203-fi.md) (own), [table/11204 "Automatic Acc. Line"](../objects/table/11204-fi.md) (own), [table/15 "G/L Account"](../objects/table/15.md), [reportextension/13412 "FI VAT VIES Decl. Tax Auth"](../objects/reportextension/13412-fi.md) (own), [codeunit/13420 "FICore VIES Decl. Feature"](../objects/codeunit/13420-fi.md) (own).

[All 19 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds message type, invoice message, payment date and balance account fields to payment buffers, vendor ledger entries and purchase documents. Adds Business Identity Code on Vendor, and SEPA Payment and Clearing Code on Vendor Bank Account. Suggest Vendor Payments gets a domestic payment date procedure.

Why: Learn covers generating domestic and foreign vendor payment files from suggested vendor payments.

Objects: [report/393 "Suggest Vendor Payments"](../objects/report/393.md), [table/372 "Payment Buffer"](../objects/table/372.md), [table/475 "Vendor Payment Buffer"](../objects/table/475.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/23 "Vendor"](../objects/table/23.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 15 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Reference No. to sales invoices, customer ledger entries and reminders, with reference number setup fields in Sales & Receivables Setup. Adds the disregard payment discount field to customer ledger entries and Auto. Acc. Group to lines. Sales-Post Prepayments gets a PostCustomerEntry procedure.

Why: Learn describes disregarding payment discounts when payment is received in full within the tolerance date.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md), [table/296 "Reminder Line"](../objects/table/296.md), [table/297 "Issued Reminder Header"](../objects/table/297.md), [table/298 "Issued Reminder Line"](../objects/table/298.md).

[All 14 objects of Sales in the diff](?ns=Sales#country-diff)

### Inventory

Provides Finnish Intrastat report support with management, export and totals codeunits, and extensions of the Intrastat report setup pages. Intrastat journal batch and line tables get reported flags, unit of measure and a second quantity.

Why: Learn explains printing Finnish Intrastat reports for EU trade reporting, by file submission or manual form entry.

Objects: [codeunit/13406 "Intrastat Report Management FI"](../objects/codeunit/13406-fi.md) (own), [codeunit/13407 "Intrastat Report Exp. Ext. FI"](../objects/codeunit/13407-fi.md) (own), [codeunit/13408 "Intrastat Report Get Totals"](../objects/codeunit/13408-fi.md) (own), [pageextension/13408 "Intrastat Report FI"](../objects/pageextension/13408-fi.md) (own), [pageextension/13407 "Intrastat Report Setup FI"](../objects/pageextension/13407-fi.md) (own), [tableextension/13406 "Intrastat Report Setup FI"](../objects/tableextension/13406-fi.md) (own), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md), [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md).

[All 10 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Service

Adds Finnish layouts for service invoice, order, quote, contract and contract quote reports, with a service document management codeunit. It also extends the service invoice header and posted service invoice page.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/13411 "Service - Invoice (FI)"](../objects/report/13411-fi.md) (own), [report/13416 "Service Order (FI)"](../objects/report/13416-fi.md) (own), [report/13414 "Service Quote (FI)"](../objects/report/13414-fi.md) (own), [report/13410 "Service Contract (FI)"](../objects/report/13410-fi.md) (own), [report/13412 "Service Contract Quote (FI)"](../objects/report/13412-fi.md) (own), [codeunit/13410 "Serv. Document Mgt. FI"](../objects/codeunit/13410-fi.md) (own), [tableextension/13410 "Service Invoice Header FI"](../objects/tableextension/13410-fi.md) (own), [pageextension/13410 "Posted Service Invoice FI"](../objects/pageextension/13410-fi.md) (own).

[All 8 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Adds company registration number, Business Identity Code and registered home city to Company Information. Adds the disregard payment discount field to Payment Terms, SEPA Allowed to Country/Region, and a depreciation difference source code.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/3 "Payment Terms"](../objects/table/3.md), [table/9 "Country/Region"](../objects/table/9.md), [table/242 "Source Code Setup"](../objects/table/242.md), [codeunit/13461 "Serv. Report Selection Mgt. FI"](../objects/codeunit/13461-fi.md) (own), [tableextension/13400 "SourceCodeSetupFI"](../objects/tableextension/13400-fi.md) (own), [pageextension/13400 "SourceCodeSetupFI"](../objects/pageextension/13400-fi.md) (own).

[All 7 objects of Foundation in the diff](?ns=Foundation#country-diff)

### FixedAssets

Adds posting of depreciation differences with a calculation report and a posting buffer table. FA Posting Group gets difference accounts and FA Ledger Entry gets a posted flag.

Why: Learn states the tax requirement to calculate and post accumulated depreciation differences between straight-line and declining balance methods.

Objects: [report/13402 "Calc. and Post Depr. Diff."](../objects/report/13402-fi.md) (own), [table/13401 "Depr. Diff. Posting Buffer"](../objects/table/13401-fi.md) (own), [table/5606 "FA Posting Group"](../objects/table/5606.md), [table/5601 "FA Ledger Entry"](../objects/table/5601.md).

[All 4 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets to cover the Finnish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### (no namespace)

Adds the Intrastat - File Setup table for Finnish Intrastat file export.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/13400 "Intrastat - File Setup"](../objects/table/13400-fi.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### HumanResources

Changes the Suggest Employee Payments report for Finnish payment handling.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/394 "Suggest Employee Payments"](../objects/report/394.md).

[All 1 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +2 procedures |
| [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md) | +1 procedures |
| [page/132 "Posted Sales Invoice"](../objects/page/132.md) | 1 properties |
| [page/134 "Posted Sales Credit Memo"](../objects/page/134.md) | 1 properties |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 4 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/393 "Suggest Vendor Payments"](../objects/report/393.md) | +1 procedures |
| [report/394 "Suggest Employee Payments"](../objects/report/394.md) | body changes only |
| [table/3 "Payment Terms"](../objects/table/3.md) | +1 fields |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | body changes only |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +2 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +1 fields |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +4 fields |
| [table/37 "Sales Line"](../objects/table/37.md) | +1 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +3 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +1 fields |
| [table/49 "Invoice Post. Buffer"](../objects/table/49.md) | +1 fields |
| [table/55 "Invoice Posting Buffer"](../objects/table/55.md) | +1 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +3 fields, 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +6 fields |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +1 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +1 fields |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +1 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +1 fields |
| [table/121 "Purch. Rcpt. Line"](../objects/table/121.md) | +1 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +3 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +1 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +6 fields |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +1 fields |
| [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md) | +2 fields |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | +2 fields |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +1 fields, 2 fields changed |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +2 fields, 2 fields changed |
| [table/296 "Reminder Line"](../objects/table/296.md) | +1 fields |
| [table/297 "Issued Reminder Header"](../objects/table/297.md) | +1 fields |
| [table/298 "Issued Reminder Line"](../objects/table/298.md) | +1 fields |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +6 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +1 fields |
| [table/317 "Payable Vendor Ledger Entry"](../objects/table/317.md) | +1 fields |
| [table/323 "VAT Business Posting Group"](../objects/table/323.md) | +1 fields |
| [table/324 "VAT Product Posting Group"](../objects/table/324.md) | +1 fields |
| [table/372 "Payment Buffer"](../objects/table/372.md) | +6 fields |
| [table/475 "Vendor Payment Buffer"](../objects/table/475.md) | +6 fields |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/5601 "FA Ledger Entry"](../objects/table/5601.md) | +1 fields |
| [table/5606 "FA Posting Group"](../objects/table/5606.md) | +2 fields |

## Objects of its own

56 objects only this country has.

- [codeunit/13403 "Export SEPA Payment File"](../objects/codeunit/13403-fi.md)
- [codeunit/13406 "Intrastat Report Management FI"](../objects/codeunit/13406-fi.md)
- [codeunit/13407 "Intrastat Report Exp. Ext. FI"](../objects/codeunit/13407-fi.md)
- [codeunit/13408 "Intrastat Report Get Totals"](../objects/codeunit/13408-fi.md)
- [codeunit/13410 "Serv. Document Mgt. FI"](../objects/codeunit/13410-fi.md)
- [codeunit/13411 "FICore InitReport Subscribers"](../objects/codeunit/13411-fi.md)
- [codeunit/13413 "Exp. SEPA CT pain.001.001.09"](../objects/codeunit/13413-fi.md)
- [codeunit/13415 "Currency Exch. Rate Import"](../objects/codeunit/13415-fi.md)
- [codeunit/13420 "FICore VIES Decl. Feature"](../objects/codeunit/13420-fi.md)
- [codeunit/13461 "Serv. Report Selection Mgt. FI"](../objects/codeunit/13461-fi.md)
- [codeunit/32000000 "Ref. Payment Management"](../objects/codeunit/32000000-fi.md)
- [codeunit/32000001 "Currency Exchange Rate"](../objects/codeunit/32000001-fi.md)
- [codeunit/32000002 "Bank Nos Check"](../objects/codeunit/32000002-fi.md)
- [page/32000000 "Bank Reference File Setup"](../objects/page/32000000-fi.md)
- [page/32000001 "Ref. Payment - Import"](../objects/page/32000001-fi.md)
- [page/32000002 "Apply Ref. Payment"](../objects/page/32000002-fi.md)
- [page/32000004 "Ref. Payment - Export"](../objects/page/32000004-fi.md)
- [page/32000005 "Payment Method Codes"](../objects/page/32000005-fi.md)
- [page/32000006 "Bank Payments to send"](../objects/page/32000006-fi.md)
- [page/32000007 "Input Dialog"](../objects/page/32000007-fi.md)
- [pageextension/13400 "SourceCodeSetupFI"](../objects/pageextension/13400-fi.md)
- [pageextension/13406 "Intrastat Report Setup Wzrd FI"](../objects/pageextension/13406-fi.md)
- [pageextension/13407 "Intrastat Report Setup FI"](../objects/pageextension/13407-fi.md)
- [pageextension/13408 "Intrastat Report FI"](../objects/pageextension/13408-fi.md)
- [pageextension/13410 "Posted Service Invoice FI"](../objects/pageextension/13410-fi.md)
- [pageextension/13414 "Currencies FI"](../objects/pageextension/13414-fi.md)
- [permissionsetextension/13406 "Intrastat FI - Objects"](../objects/permissionsetextension/13406-fi.md)
- [report/13400 "G/L Register FI"](../objects/report/13400-fi.md)
- [report/13402 "Calc. and Post Depr. Diff."](../objects/report/13402-fi.md)
- [report/13403 "Export SEPA Payment File"](../objects/report/13403-fi.md)
- [report/13410 "Service Contract (FI)"](../objects/report/13410-fi.md)
- [report/13411 "Service - Invoice (FI)"](../objects/report/13411-fi.md)
- [report/13412 "Service Contract Quote (FI)"](../objects/report/13412-fi.md)
- [report/13413 "Exp. SEPA CT pain.001.001.09"](../objects/report/13413-fi.md)
- [report/13414 "Service Quote (FI)"](../objects/report/13414-fi.md)
- [report/13416 "Service Order (FI)"](../objects/report/13416-fi.md)
- [report/32000000 "Import Ref. Payment"](../objects/report/32000000-fi.md)
- [report/32000001 "Ref. Payment Imported"](../objects/report/32000001-fi.md)
- [report/32000003 "Suggest Bank Payments"](../objects/report/32000003-fi.md)
- [report/32000004 "Export Ref. Payment - LUM"](../objects/report/32000004-fi.md)
- [report/32000005 "Payment"](../objects/report/32000005-fi.md)
- [report/32000006 "Export Ref. Payment - LMP"](../objects/report/32000006-fi.md)
- [reportextension/13412 "FI VAT VIES Decl. Tax Auth"](../objects/reportextension/13412-fi.md)
- [table/11203 "Automatic Acc. Header"](../objects/table/11203-fi.md)
- [table/11204 "Automatic Acc. Line"](../objects/table/11204-fi.md)
- [table/13400 "Intrastat - File Setup"](../objects/table/13400-fi.md)
- [table/13401 "Depr. Diff. Posting Buffer"](../objects/table/13401-fi.md)
- [table/32000000 "Reference File Setup"](../objects/table/32000000-fi.md)
- [table/32000001 "Ref. Payment - Imported"](../objects/table/32000001-fi.md)
- [table/32000002 "Ref. Payment - Exported"](../objects/table/32000002-fi.md)
- [table/32000003 "Foreign Payment Types"](../objects/table/32000003-fi.md)
- [table/32000004 "Ref. Payment - Exported Buffer"](../objects/table/32000004-fi.md)
- [tableextension/13400 "SourceCodeSetupFI"](../objects/tableextension/13400-fi.md)
- [tableextension/13406 "Intrastat Report Setup FI"](../objects/tableextension/13406-fi.md)
- [tableextension/13410 "Service Invoice Header FI"](../objects/tableextension/13410-fi.md)
- [tableextension/13413 "VAT Entry FI"](../objects/tableextension/13413-fi.md)

## Other versions

- BC30: 106 objects differ from W1 (79 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
