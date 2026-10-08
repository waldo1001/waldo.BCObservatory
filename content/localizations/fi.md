---
id: localization/fi
type: localization
title: Finland (FI)
summary: Finland (FI) localization of Business Central 29. It covers bank reference files and reference numbers, domestic and foreign payment files, SEPA pain.001.001.09 export, automatic account codes, Finnish Intrastat, VAT-VIES declaration, depreciation differences, and Finnish service reports.
tier: official
language: en
tags:
  - localization
  - fi
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:26:56.206Z"
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: fbb9900cbbc3ff2ddf6cf0fd1731a6fccdadfe1e9d6301bba411d74798074213
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-fi
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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

> Finland (FI) localization of Business Central 29. It covers bank reference files and reference numbers, domestic and foreign payment files, SEPA pain.001.001.09 export, automatic account codes, Finnish Intrastat, VAT-VIES declaration, depreciation differences, and Finnish service reports.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/finland.md) · narrative reviewed (checked by Opus)

## Overview

The Finnish layer is built mainly around electronic banking. Own objects in the 32000000 range handle bank reference file setup, import of customer payments (Import Ref. Payment), export of vendor payments (LUM and LMP reports), foreign payment types, and a Bank Nos Check codeunit. Reference No. fields are added to sales, reminder and journal tables, and payment message fields are added to purchase, ledger and payment buffer tables. Codeunit 13413 and report 13413 export SEPA credit transfers in pain.001.001.09.

Other local features are automatic account codes (tables 11203 and 11204, with an Auto. Acc. Group field on many lines), depreciation difference posting for fixed assets, Finnish Intrastat objects, VAT-VIES declaration support, a Print on Invoice flag on VAT posting groups, and a disregard payment discount at full payment option. Finnish service documents have their own reports.

Learn documents these under Finland Local Functionality, with pages on electronic banking, bank reference files, payment file generation, SEPA credit transfers, automatic account posting groups, Intrastat, VAT-VIES, and depreciation differences.

## Key points

- Bank reference files: setup, import of customer payments and linking to invoices by reference number, export of vendor payments in LUM and LMP formats
- SEPA credit transfer export in pain.001.001.09 through codeunit 13413 and report 13413
- Suggest Vendor Payments and Suggest Employee Payments are adapted, with payment message fields and domestic payment date handling
- Automatic account codes via Automatic Acc. Header and Line tables and an Auto. Acc. Group field on G/L accounts and document lines
- Depreciation difference between straight-line and declining balance posted by report 13402
- Finnish Intrastat report support with setup page extensions and export codeunits
- VAT-VIES declaration and VAT information printed on invoices through Print on Invoice flags
- Finnish service contract, quote, order and invoice reports

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

Adds the Finnish electronic banking stack: bank reference file setup, import and export of reference payments, foreign payment types, bank payment suggestion, bank number check, and SEPA credit transfer export in pain.001.001.09.

Why: Learn describes domestic and foreign payments in LM03 and LUM2 formats, and the new SEPA format pain.001.001.09 exported by codeunit and report 13413.

Objects: [codeunit/32000000 "Ref. Payment Management"](../objects/codeunit/32000000-fi.md) (own), [table/32000000 "Reference File Setup"](../objects/table/32000000-fi.md) (own), [report/32000000 "Import Ref. Payment"](../objects/report/32000000-fi.md) (own), [report/32000004 "Export Ref. Payment - LUM"](../objects/report/32000004-fi.md) (own), [report/32000006 "Export Ref. Payment - LMP"](../objects/report/32000006-fi.md) (own), [codeunit/13413 "Exp. SEPA CT pain.001.001.09"](../objects/codeunit/13413-fi.md) (own), [report/13413 "Exp. SEPA CT pain.001.001.09"](../objects/report/13413-fi.md) (own), [page/32000000 "Bank Reference File Setup"](../objects/page/32000000-fi.md) (own).

[All 24 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds reference number, message and payment date fields to general journal lines, automatic account codes, Finnish G/L register report, currency exchange rate import and VIES declaration support. Codeunit 12 gets procedures to update imported and exported reference payments.

Why: Learn covers automatic account codes and the VAT-VIES declaration as Finnish requirements.

Objects: [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/181 "Posted Gen. Journal Line"](../objects/table/181.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/11203 "Automatic Acc. Header"](../objects/table/11203-fi.md) (own), [table/11204 "Automatic Acc. Line"](../objects/table/11204-fi.md) (own), [table/15 "G/L Account"](../objects/table/15.md), [report/13400 "G/L Register FI"](../objects/report/13400-fi.md) (own), [reportextension/13412 "FI VAT VIES Decl. Tax Auth"](../objects/reportextension/13412-fi.md) (own).

[All 19 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Extends vendor and payment buffer tables with message type, invoice messages, payment date and business identity code. Suggest Vendor Payments gets a domestic payment date procedure, and vendor bank accounts get SEPA and clearing code fields.

Why: Learn describes generating domestic or foreign payment files from Suggest Vendor Payments.

Objects: [report/393 "Suggest Vendor Payments"](../objects/report/393.md), [table/372 "Payment Buffer"](../objects/table/372.md), [table/475 "Vendor Payment Buffer"](../objects/table/475.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/23 "Vendor"](../objects/table/23.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 15 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Reference No. fields on invoices, customer ledger entries and reminders, with reference number setup in Sales & Receivables Setup. Also adds clearing code on customer banks and the disregard payment discount flag on customer entries.

Why: Learn explains reference numbers used to link customer payments to invoices.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [table/296 "Reminder Line"](../objects/table/296.md), [table/297 "Issued Reminder Header"](../objects/table/297.md), [table/298 "Issued Reminder Line"](../objects/table/298.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md).

[All 14 objects of Sales in the diff](?ns=Sales#country-diff)

### Inventory

Adds Finnish Intrastat reporting: management, export and totals codeunits, setup page extensions, a permission set extension and extra fields on Intrastat journal batch and line.

Why: Learn explains that EU companies must report trade with other EU countries and can file by file or manual form.

Objects: [codeunit/13406 "Intrastat Report Management FI"](../objects/codeunit/13406-fi.md) (own), [codeunit/13407 "Intrastat Report Exp. Ext. FI"](../objects/codeunit/13407-fi.md) (own), [codeunit/13408 "Intrastat Report Get Totals"](../objects/codeunit/13408-fi.md) (own), [pageextension/13407 "Intrastat Report Setup FI"](../objects/pageextension/13407-fi.md) (own), [pageextension/13408 "Intrastat Report FI"](../objects/pageextension/13408-fi.md) (own), [pageextension/13406 "Intrastat Report Setup Wzrd FI"](../objects/pageextension/13406-fi.md) (own), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md), [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md).

[All 10 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Service

Adds Finnish service document reports for contract, contract quote, quote, order and invoice, plus a document management codeunit and extensions of the posted service invoice.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/13411 "Service - Invoice (FI)"](../objects/report/13411-fi.md) (own), [report/13410 "Service Contract (FI)"](../objects/report/13410-fi.md) (own), [report/13412 "Service Contract Quote (FI)"](../objects/report/13412-fi.md) (own), [report/13414 "Service Quote (FI)"](../objects/report/13414-fi.md) (own), [report/13416 "Service Order (FI)"](../objects/report/13416-fi.md) (own), [codeunit/13410 "Serv. Document Mgt. FI"](../objects/codeunit/13410-fi.md) (own), [tableextension/13410 "Service Invoice Header FI"](../objects/tableextension/13410-fi.md) (own), [pageextension/13410 "Posted Service Invoice FI"](../objects/pageextension/13410-fi.md) (own).

[All 8 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Extends Company Information with company registration number, business identity code and registered home city. Adds the disregard payment discount flag on Payment Terms, SEPA Allowed on Country/Region and a depreciation difference source code.

Why: Learn describes the disregard payment discount option on payment terms for late full payments within tolerance.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/3 "Payment Terms"](../objects/table/3.md), [table/9 "Country/Region"](../objects/table/9.md), [table/242 "Source Code Setup"](../objects/table/242.md), [codeunit/13461 "Serv. Report Selection Mgt. FI"](../objects/codeunit/13461-fi.md) (own), [tableextension/13400 "SourceCodeSetupFI"](../objects/tableextension/13400-fi.md) (own), [pageextension/13400 "SourceCodeSetupFI"](../objects/pageextension/13400-fi.md) (own).

[All 7 objects of Foundation in the diff](?ns=Foundation#country-diff)

### FixedAssets

Adds depreciation difference calculation and posting with a report, a posting buffer, and new accounts on FA posting groups plus a posted flag on FA ledger entries.

Why: Learn says Finnish tax law requires posting the difference between straight-line and declining balance depreciation.

Objects: [report/13402 "Calc. and Post Depr. Diff."](../objects/report/13402-fi.md) (own), [table/13401 "Depr. Diff. Posting Buffer"](../objects/table/13401-fi.md) (own), [table/5606 "FA Posting Group"](../objects/table/5606.md), [table/5601 "FA Ledger Entry"](../objects/table/5601.md).

[All 4 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets to cover the Finnish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### (no namespace)

Adds the Intrastat file setup table for Finnish Intrastat export.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/13400 "Intrastat - File Setup"](../objects/table/13400-fi.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### HumanResources

Suggest Employee Payments is adapted for Finnish payment handling.

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
