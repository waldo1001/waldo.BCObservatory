---
id: localization/fi
type: localization
title: Finland (FI)
summary: Finland (FI) localization of Business Central 29. It covers Finnish electronic banking with reference numbers and bank reference files (LM03, LUM2), SEPA pain.001.001.09 export, automatic account codes, depreciation differences, Intrastat, VAT on invoices and Finnish service documents.
tier: official
language: en
tags:
  - localization
  - fi
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 8f287c72312847cbbffa88cfd2de0004423311968aab2de24b972bae5253ef10
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-fi
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
added_objects: 42
replaced_objects: 49
removed_objects: 0
added_fields: 79
added_events: 0
learn_folder: LocalFunctionality/Finland
---

# Finland (FI)

> Finland (FI) localization of Business Central 29. It covers Finnish electronic banking with reference numbers and bank reference files (LM03, LUM2), SEPA pain.001.001.09 export, automatic account codes, depreciation differences, Intrastat, VAT on invoices and Finnish service documents.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/finland.md) · narrative **unreviewed** (machine-written)

## Overview

The Finnish layer centers on electronic banking. Own objects in the 32000000 range (table "Reference File Setup", "Ref. Payment - Imported", "Ref. Payment - Exported", "Foreign Payment Types", codeunit "Ref. Payment Management", reports "Import Ref. Payment", "Export Ref. Payment - LUM" and "Export Ref. Payment - LMP") import customer payments and export vendor payments. Reference numbers and payment message fields are added to sales, purchase, reminder and journal tables. "Suggest Vendor Payments" gains the procedure GetDomesticPaymentDate, and "Gen. Jnl.-Post Line" gains procedures to update imported and exported reference payments.

SEPA credit transfers use codeunit 13413 and report 13413 for the pain.001.001.09 format. Other additions are automatic account codes (tables "Automatic Acc. Header" and "Automatic Acc. Line", with an Auto. Acc. Group field on many lines and ledger tables), depreciation difference posting for fixed assets, Finnish Intrastat fields, VAT print flags on posting groups, and Finnish service reports.

Learn documents these under Finland Local Functionality, with pages on electronic banking, bank reference file setup, payment file generation, SEPA, payment discount handling, Intrastat, VAT-VIES, depreciation differences and automatic account posting groups. The code adds no events.

## Key points

- Bank reference files: setup, import of customer payments and export of vendor payments in LM03 and LUM2 formats via the 32000000-range tables, pages and reports.
- SEPA credit transfer export in pain.001.001.09 through codeunit 13413 and report 13413, with SEPA Allowed on Country/Region and SEPA Payment on Vendor Bank Account.
- Reference No. fields on sales invoices, reminders, customer ledger entries and journal lines; number series setup on Sales & Receivables Setup.
- Payment message fields (Message Type, Invoice Message, Payment Date) on purchase documents, vendor ledger entries and payment buffers, used by Suggest Vendor Payments.
- Automatic account codes via tables 11203 and 11204 and an Auto. Acc. Group field on G/L accounts and document lines.
- Depreciation difference posting with report 13402, FA Posting Group accounts and the Depr. Difference source code.
- Disregard payment discount at full payment flag on Payment Terms and Cust. Ledger Entry.
- Finnish service reports and document handling, plus Intrastat file setup and Business Identity Code on company and vendor.

Narrative written by Sonnet from the code diff and 12 Learn page summaries. In numbers: Finland (FI) localization of Business Central in BC29: 42 objects of its own, 49 W1 objects changed (79 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 0 | 24 | 0 |
| [Purchases](#purchases) | 15 | 0 | 32 |
| [Sales](#sales) | 14 | 0 | 17 |
| [Finance](#finance) | 9 | 4 | 17 |
| [Service](#service) | 0 | 8 | 0 |
| [Foundation](#foundation) | 4 | 3 | 6 |
| [FixedAssets](#fixedassets) | 2 | 2 | 3 |
| [Inventory](#inventory) | 2 | 0 | 4 |
| [Security](#security) | 2 | 0 | 0 |
| [(no namespace)](#no-namespace) | 0 | 1 | 0 |
| [HumanResources](#humanresources) | 1 | 0 | 0 |

### Bank

Adds the Finnish bank reference file solution: setup table and page, imported and exported reference payment tables, import and apply pages, and export reports for LUM and LMP formats. Also adds SEPA export (codeunit and report 13403 and 13413) and a bank number check codeunit.

Why: Learn describes electronic banking with LM03 and LUM2 formats, linking customer payments to invoices and exporting vendor payments to bank files. SEPA export uses the new pain.001.001.09 format.

Objects: [table/32000000 "Reference File Setup"](../objects/table/32000000-fi.md) (own), [codeunit/32000000 "Ref. Payment Management"](../objects/codeunit/32000000-fi.md) (own), [report/32000000 "Import Ref. Payment"](../objects/report/32000000-fi.md) (own), [report/32000004 "Export Ref. Payment - LUM"](../objects/report/32000004-fi.md) (own), [report/32000006 "Export Ref. Payment - LMP"](../objects/report/32000006-fi.md) (own), [codeunit/13413 "Exp. SEPA CT pain.001.001.09"](../objects/codeunit/13413-fi.md) (own), [report/13413 "Exp. SEPA CT pain.001.001.09"](../objects/report/13413-fi.md) (own), [table/32000001 "Ref. Payment - Imported"](../objects/table/32000001-fi.md) (own).

[All 24 objects of Bank in the diff](?ns=Bank#country-diff)

### Purchases

Adds payment message fields (Message Type, Invoice Message, Payment Date) to purchase documents, vendor ledger entries and payment buffers. Adds Business Identity Code to vendors, SEPA Payment and Clearing Code to vendor bank accounts, and Bank Batch Nos. to setup. Suggest Vendor Payments gets GetDomesticPaymentDate.

Why: Learn explains that vendor payments are suggested and then exported to domestic or foreign payment files.

Objects: [report/393 "Suggest Vendor Payments"](../objects/report/393.md), [table/372 "Payment Buffer"](../objects/table/372.md), [table/475 "Vendor Payment Buffer"](../objects/table/475.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/122 "Purch. Inv. Header"](../objects/table/122.md), [table/23 "Vendor"](../objects/table/23.md).

[All 15 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Reference No. to sales invoice headers, customer ledger entries and reminders, with reference number series fields on Sales & Receivables Setup. Adds Clearing Code to customer bank accounts and Auto. Acc. Group to lines. Sales-Post Prepayments gains PostCustomerEntry.

Why: Reference numbers let incoming customer payments be matched to invoices, as described in the electronic banking page.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [table/296 "Reminder Line"](../objects/table/296.md), [table/297 "Issued Reminder Header"](../objects/table/297.md), [table/298 "Issued Reminder Line"](../objects/table/298.md), [codeunit/442 "Sales-Post Prepayments"](../objects/codeunit/442.md).

[All 14 objects of Sales in the diff](?ns=Sales#country-diff)

### Finance

Adds automatic account headers and lines, Auto. Acc. Group on G/L accounts, journal lines and posting buffers, and reference and message fields on journal lines. Gen. Jnl.-Post Line gains procedures to update imported and exported reference payments. Adds a Print on Invoice flag on VAT posting groups, report G/L Register FI and a currency exchange rate codeunit.

Why: Learn documents automatic account codes and posting groups, and printing VAT information per line on invoices.

Objects: [table/11203 "Automatic Acc. Header"](../objects/table/11203-fi.md) (own), [table/11204 "Automatic Acc. Line"](../objects/table/11204-fi.md) (own), [table/15 "G/L Account"](../objects/table/15.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/181 "Posted Gen. Journal Line"](../objects/table/181.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/323 "VAT Business Posting Group"](../objects/table/323.md), [table/324 "VAT Product Posting Group"](../objects/table/324.md).

[All 13 objects of Finance in the diff](?ns=Finance#country-diff)

### Service

Adds Finnish service reports for contracts, contract quotes, quotes, orders and invoices. Also adds a service document management codeunit, a Posted Service Invoice page extension and a Service Invoice Header table extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/13411 "Service - Invoice (FI)"](../objects/report/13411-fi.md) (own), [report/13410 "Service Contract (FI)"](../objects/report/13410-fi.md) (own), [report/13412 "Service Contract Quote (FI)"](../objects/report/13412-fi.md) (own), [report/13414 "Service Quote (FI)"](../objects/report/13414-fi.md) (own), [report/13416 "Service Order (FI)"](../objects/report/13416-fi.md) (own), [codeunit/13410 "Serv. Document Mgt. FI"](../objects/codeunit/13410-fi.md) (own), [tableextension/13410 "Service Invoice Header FI"](../objects/tableextension/13410-fi.md) (own), [pageextension/13410 "Posted Service Invoice FI"](../objects/pageextension/13410-fi.md) (own).

[All 8 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Adds company registration fields (Company Reg. No., Business Identity Code, Registered Home City) to Company Information, SEPA Allowed to Country/Region, and the disregard payment discount flag to Payment Terms. Adds Depr. Difference to Source Code Setup and a service report selection codeunit.

Why: Learn describes the disregard payment discount option as accepting full payment after the discount date within tolerance.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/9 "Country/Region"](../objects/table/9.md), [table/3 "Payment Terms"](../objects/table/3.md), [table/242 "Source Code Setup"](../objects/table/242.md), [tableextension/13400 "SourceCodeSetupFI"](../objects/tableextension/13400-fi.md) (own), [pageextension/13400 "SourceCodeSetupFI"](../objects/pageextension/13400-fi.md) (own), [codeunit/13461 "Serv. Report Selection Mgt. FI"](../objects/codeunit/13461-fi.md) (own).

[All 7 objects of Foundation in the diff](?ns=Foundation#country-diff)

### FixedAssets

Adds the Calc. and Post Depr. Diff. report, a posting buffer table, depreciation difference accounts on FA Posting Group and a posted flag on FA Ledger Entry.

Why: Learn states Finnish tax law requires posting the difference between straight-line and declining balance depreciation to the general ledger.

Objects: [report/13402 "Calc. and Post Depr. Diff."](../objects/report/13402-fi.md) (own), [table/13401 "Depr. Diff. Posting Buffer"](../objects/table/13401-fi.md) (own), [table/5606 "FA Posting Group"](../objects/table/5606.md), [table/5601 "FA Ledger Entry"](../objects/table/5601.md).

[All 4 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Inventory

Adds Finnish Intrastat fields: reported receipt and shipment flags on journal batches, and Unit of Measure and Quantity 2 on journal lines.

Why: Learn explains that EU companies must report trade with other EU countries to the Intrastat authorities.

Objects: [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md).

[All 2 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets so they cover the Finnish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### (no namespace)

Adds the Intrastat - File Setup table for the Finnish Intrastat file.

Why: Learn describes file submission as one way to file Finnish Intrastat reports.

Objects: [table/13400 "Intrastat - File Setup"](../objects/table/13400-fi.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### HumanResources

Changes the Suggest Employee Payments report for the Finnish payment handling.

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

42 objects only this country has.

- [codeunit/13403 "Export SEPA Payment File"](../objects/codeunit/13403-fi.md)
- [codeunit/13410 "Serv. Document Mgt. FI"](../objects/codeunit/13410-fi.md)
- [codeunit/13413 "Exp. SEPA CT pain.001.001.09"](../objects/codeunit/13413-fi.md)
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
- [pageextension/13410 "Posted Service Invoice FI"](../objects/pageextension/13410-fi.md)
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
- [tableextension/13410 "Service Invoice Header FI"](../objects/tableextension/13410-fi.md)

## Other versions

- BC30: 92 objects differ from W1 (79 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
