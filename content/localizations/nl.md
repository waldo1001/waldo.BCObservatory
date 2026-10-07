---
id: localization/nl
type: localization
title: Netherlands (NL)
summary: Netherlands localization of Business Central 29. It covers Dutch telebanking (proposals, payment history, SEPA and BTL91/BBV/PAYMUL exports, bank statement import), cash and bank/giro journals, electronic VAT and ICP declarations through Digipoort, the tax authority audit file, CMR notes and Dutch post codes.
tier: official
language: en
tags:
  - localization
  - nl
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 95803e937ee2734d138a24eea1d8089afd78a15e6dd9c2f92296646beed9aa11
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-nl
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/230
    - object/codeunit/426
    - object/codeunit/1220
    - object/codeunit/1221
    - object/codeunit/1222
    - object/codeunit/1262
    - object/codeunit/104000
    - object/enum/89
    - object/page/49
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/12
    - object/table/9
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/21
    - object/table/23
    - object/table/25
    - object/table/36
    - object/table/38
    - object/table/39
    - object/table/79
    - object/table/80
    - object/table/81
    - object/table/98
    - object/table/112
    - object/table/114
    - object/table/122
    - object/table/124
    - object/table/181
    - object/table/242
    - object/table/254
    - object/table/256
    - object/table/262
    - object/table/263
    - object/table/270
    - object/table/277
    - object/table/287
    - object/table/288
    - object/table/311
    - object/table/381
    - object/table/1226
    - object/table/1228
    - object/table/1381
    - object/table/1383
    - object/table/5200
    - object/table/5222
    - object/xmlport/1000
    - object/xmlport/1001
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/netherlands
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: NL
version: "29"
w1_version: "29"
added_objects: 154
replaced_objects: 50
removed_objects: 0
added_fields: 81
added_events: 9
learn_folder: LocalFunctionality/Netherlands
---

# Netherlands (NL)

> Netherlands localization of Business Central 29. It covers Dutch telebanking (proposals, payment history, SEPA and BTL91/BBV/PAYMUL exports, bank statement import), cash and bank/giro journals, electronic VAT and ICP declarations through Digipoort, the tax authority audit file, CMR notes and Dutch post codes.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/netherlands.md) · narrative **unreviewed** (machine-written)

## Overview

The largest part of the Dutch layer is electronic banking. Transaction modes, payment proposals, payment history and export protocols (BTL91, BBV, PAYMUL, SEPA ISO 20022 credit transfer and direct debit) are own objects in the 11000000 range. Bank/Giro and Cash journals (CBG statements) support Rabobank and SEPA CAMT statement import and automatic reconciliation. Many W1 tables get Transaction Mode Code, bank account holder fields and payment-in-process fields. Learn covers this under Telebanking, Dutch Electronic Banking, SEPA and the three payment scenarios.

For tax reporting, the layer adds Elec. Tax Declaration tables, pages and reports (11403 to 11416). They create, submit and process responses for electronic VAT and ICP declarations. Communication goes through the Digipoort Communication interface, with on-premises and SaaS implementations. VAT Statement Line gets an Elec. Tax Decl. Category Code, and VAT Registration No. Format gets Dutch check algorithms. A Tax Authority Audit File report and an Export Financial Data to XML report are also included.

Other additions are CMR note reports for sales, transfer and return shipments, post code import and update with range tables, G/L entry apply and unapply fields, and a required-description option on G/L accounts. Service documents get Dutch table and page extensions. Event publishers exist on Customer, Vendor, Payment Tolerance Management, VAT Statement Line and VAT Registration No. Format.

## Key points

- Telebanking: payment and collection proposals, payment history, transaction modes, export protocols and docket reports.
- Export formats: BTL91 (ABN AMRO, Rabobank), BBV, PAYMUL and SEPA ISO 20022 pain.001 and pain.008 variants.
- Bank statement import: Rabobank ASCII formats and SEPA CAMT, posted via Bank/Giro Journal with automatic reconciliation.
- Cash and Bank/Giro journals (CBG Statement tables) with a test report and source codes in Source Code Setup.
- Electronic VAT and ICP declarations through Digipoort, with VAT category setup, certificates, error log and response messages.
- Tax Authority audit file (XAF) report and Export Financial Data to XML.
- CMR note reports for sales shipments, transfer shipments and purchase returns.
- Dutch post code import and update with Post Code Range tables; G/L entry apply and unapply fields on G/L Entry.

Narrative written by Sonnet from the code diff and 27 Learn page summaries. In numbers: Netherlands (NL) localization of Business Central in BC29: 154 objects of its own, 50 W1 objects changed (81 fields and 9 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 9 | 74 | 9 |
| [Finance](#finance) | 13 | 39 | 15 |
| [Service](#service) | 0 | 18 | 0 |
| [Foundation](#foundation) | 3 | 11 | 4 |
| [Purchases](#purchases) | 9 | 1 | 21 |
| [Sales](#sales) | 8 | 1 | 22 |
| [Inventory](#inventory) | 2 | 5 | 2 |
| (no namespace) | 0 | 4 | 0 |
| [HumanResources](#humanresources) | 2 | 0 | 8 |
| [Security](#security) | 2 | 0 | 0 |
| [IO](#io) | 1 | 0 | 0 |
| Upgrade | 1 | 0 | 0 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Bank

Adds the Dutch telebanking stack: proposals, payment history, transaction modes, export and import protocols, SEPA checks and CAMT import. It also adds the Bank/Giro Journal with CBG statement processing and reconciliation. Bank Account gets account holder, Proposal, Payment History and Creditor Identifier fields.

Why: Learn describes telebanking, payment files, direct debit files and bank statement import as the Dutch electronic banking functionality.

Objects: [codeunit/11000000 "Process Proposal Lines"](../objects/codeunit/11000000-nl.md) (own), [codeunit/11000001 "Financial Interface Telebank"](../objects/codeunit/11000001-nl.md) (own), [codeunit/11404 "Import SEPA CAMT"](../objects/codeunit/11404-nl.md) (own), [codeunit/11405 "Process CBG Statement Lines"](../objects/codeunit/11405-nl.md) (own), [page/11000001 "Telebank Proposal"](../objects/page/11000001-nl.md) (own), [page/11000005 "Payment History Card"](../objects/page/11000005-nl.md) (own), [page/11400 "Bank/Giro Journal"](../objects/page/11400-nl.md) (own), [table/270 "Bank Account"](../objects/table/270.md).

[All 83 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds electronic tax declarations (VAT and ICP) with Digipoort communication, tax declaration tables and pages, VIES and audit file reports. It also adds the cash journal. G/L Entry gets open and application fields. General Ledger Setup, VAT Statement Line, VAT Registration No. Format and Payment Tolerance Management are extended.

Why: Learn explains that electronic VAT and ICP declarations are submitted as XBRL through Digipoort with certificates, and that G/L entries can be applied and unapplied.

Objects: [codeunit/11409 "Elec. Tax Declaration Mgt."](../objects/codeunit/11409-nl.md) (own), [codeunit/11000054 "Digipoort Communication"](../objects/codeunit/11000054-nl.md) (own), [interface/digipoort communication "DigiPoort Communication"](../objects/interface/digipoort-communication-nl.md) (own), [report/11403 "Create Elec. VAT Declaration"](../objects/report/11403-nl.md) (own), [report/11404 "Create Elec. ICP Declaration"](../objects/report/11404-nl.md) (own), [report/11412 "Tax Authority - Audit File"](../objects/report/11412-nl.md) (own), [table/17 "G/L Entry"](../objects/table/17.md), [table/256 "VAT Statement Line"](../objects/table/256.md).

[All 52 objects of Finance in the diff](?ns=Finance#country-diff)

### Service

Adds Dutch table and page extensions on service headers, contracts, quotes, orders and their posted, filed and archive versions. It adds a service document management codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11412 "Serv. Document Mgt. NL"](../objects/codeunit/11412-nl.md) (own), [tableextension/11451 "Service Header NL"](../objects/tableextension/11451-nl.md) (own), [tableextension/11450 "Service Contract Header NL"](../objects/tableextension/11450-nl.md) (own), [pageextension/11454 "Service Order NL"](../objects/pageextension/11454-nl.md) (own), [pageextension/11453 "Service Invoice NL"](../objects/pageextension/11453-nl.md) (own), [pageextension/11450 "Service Contract NL"](../objects/pageextension/11450-nl.md) (own).

[All 18 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Adds Dutch post code management with range and update log tables and import reports. Company Information gets Fiscal Entity No. Country/Region gets SEPA Allowed, and Source Code Setup gets Cash Journal and Bank Journal codes.

Why: Learn describes subscribing to and importing post code data and monthly updates, with date validation and gap checking.

Objects: [codeunit/11401 "Post Code Management"](../objects/codeunit/11401-nl.md) (own), [table/11406 "Post Code Range"](../objects/table/11406-nl.md) (own), [table/11407 "Post Code Update Log Entry"](../objects/table/11407-nl.md) (own), [report/11414 "Import Post Codes"](../objects/report/11414-nl.md) (own), [report/11415 "Import Post Codes Update"](../objects/report/11415-nl.md) (own), [page/11407 "Post Code Ranges"](../objects/page/11407-nl.md) (own), [table/79 "Company Information"](../objects/table/79.md), [table/242 "Source Code Setup"](../objects/table/242.md).

[All 14 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Purchases

Adds Transaction Mode Code and bank account fields to the vendor, purchase header and posted purchase documents. Vendor Bank Account gets account holder and national bank code fields, and Vendor Ledger Entry gets payment-in-process fields. A CMR return shipment report is included.

Why: Learn describes CMR notes for purchase returns and the use of transaction modes for vendor payments.

Objects: [table/23 "Vendor"](../objects/table/23.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/122 "Purch. Inv. Header"](../objects/table/122.md), [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md), [report/11410 "CMR - Return Shipment"](../objects/report/11410-nl.md) (own), [table/1383 "Vendor Templ."](../objects/table/1383.md).

[All 10 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Transaction Mode Code and bank account fields to the customer, sales header and posted sales documents. Customer Bank Account gets account holder fields and Direct Debit Mandate ID. Cust. Ledger Entry gets payment-in-process fields, and a CMR sales shipment report is included.

Why: Learn describes CMR notes for sales shipments and SEPA direct debit through transaction modes.

Objects: [table/18 "Customer"](../objects/table/18.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [table/36 "Sales Header"](../objects/table/36.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), [table/114 "Sales Cr.Memo Header"](../objects/table/114.md), [report/11401 "CMR - Sales Shipment"](../objects/report/11401-nl.md) (own), [table/1381 "Customer Templ."](../objects/table/1381.md).

[All 9 objects of Sales in the diff](?ns=Sales#country-diff)

### Inventory

Adds a CMR transfer shipment report. The Intrastat journal batch gets Export Date and Export Time fields.

Why: Learn describes CMR notes for transfer shipments.

Objects: [report/11402 "CMR - Transfer Shipment"](../objects/report/11402-nl.md) (own), [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md).

[All 7 objects of Inventory in the diff](?ns=Inventory#country-diff)

### HumanResources

Employee gets Transaction Mode Code, bank name and bank city. Employee Ledger Entry gets the same payment-in-process and filter fields as customer and vendor entries.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md), [table/5222 "Employee Ledger Entry"](../objects/table/5222.md).

[All 2 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

### Security

The LOCAL and LOCAL READ permission sets are changed to cover the Dutch objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### IO

Pre & Post Process XML Import gets a CheckBankAccNo procedure for bank account number checks during import.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1262 "Pre & Post Process XML Import"](../objects/codeunit/1262.md).

[All 1 objects of IO in the diff](?ns=IO#country-diff)

### Utilities

Adds Local Functionality Mgt., a codeunit for Dutch local functionality.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11400 "Local Functionality Mgt."](../objects/codeunit/11400-nl.md) (own).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/230 "GenJnlManagement"](../objects/codeunit/230.md) | +4 procedures |
| [codeunit/426 "Payment Tolerance Management"](../objects/codeunit/426.md) | +1 events, +1 procedures |
| [codeunit/1220 "SEPA CT-Export File"](../objects/codeunit/1220.md) | +1 procedures |
| [codeunit/1221 "SEPA CT-Fill Export Buffer"](../objects/codeunit/1221.md) | +1 events |
| [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md) | +4 procedures |
| [codeunit/1262 "Pre & Post Process XML Import"](../objects/codeunit/1262.md) | +1 procedures |
| [codeunit/104000 "Upgrade - BaseApp"](../objects/codeunit/104000.md) | +3 procedures, 1 properties |
| [enum/89 "Gen. Journal Template Type"](../objects/enum/89.md) | body changes only |
| [page/49 "Purchase Quote"](../objects/page/49.md) | +1 events, +1 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/12 "VAT Statement"](../objects/report/12.md) | +1 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +6 fields |
| [table/18 "Customer"](../objects/table/18.md) | +1 fields, +2 events, +1 procedures |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +5 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +1 fields, +2 events, +1 procedures |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +5 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +2 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +2 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +1 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +1 fields, 3 fields changed, +1 procedures |
| [table/80 "Gen. Journal Template"](../objects/table/80.md) | +1 fields |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +1 fields, +1 procedures |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +4 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +2 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +2 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +2 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +2 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +1 fields |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +2 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | body changes only |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields, +1 events, +1 procedures |
| [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md) | +2 fields |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | 2 fields changed |
| [table/270 "Bank Account"](../objects/table/270.md) | +8 fields, 2 fields changed, +1 procedures |
| [table/277 "Bank Account Posting Group"](../objects/table/277.md) | +1 fields |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +8 fields, 2 fields changed, +5 procedures |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +7 fields, 2 fields changed |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +1 fields |
| [table/381 "VAT Registration No. Format"](../objects/table/381.md) | +1 events, +3 procedures |
| [table/1226 "Payment Export Data"](../objects/table/1226.md) | 1 fields changed, +1 procedures |
| [table/1228 "Payment Jnl. Export Error Text"](../objects/table/1228.md) | 1 fields changed |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +1 fields, 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/5200 "Employee"](../objects/table/5200.md) | +3 fields, 2 fields changed |
| [table/5222 "Employee Ledger Entry"](../objects/table/5222.md) | +5 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | 1 properties |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | 1 properties |

## Objects of its own

154 objects only this country has.

- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-nl.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-nl.md)
- [codeunit/11400 "Local Functionality Mgt."](../objects/codeunit/11400-nl.md)
- [codeunit/11401 "Post Code Management"](../objects/codeunit/11401-nl.md)
- [codeunit/11402 "Post Code Lookup - Table"](../objects/codeunit/11402-nl.md)
- [codeunit/11404 "Import SEPA CAMT"](../objects/codeunit/11404-nl.md)
- [codeunit/11405 "Process CBG Statement Lines"](../objects/codeunit/11405-nl.md)
- [codeunit/11406 "Imp. SEPA CAMT Pre-Mapping"](../objects/codeunit/11406-nl.md)
- [codeunit/11407 "Imp. SEPA CAMT Post-Mapping"](../objects/codeunit/11407-nl.md)
- [codeunit/11408 "Imp. Bank Trans. Data Updates"](../objects/codeunit/11408-nl.md)
- [codeunit/11409 "Elec. Tax Declaration Mgt."](../objects/codeunit/11409-nl.md)
- [codeunit/11411 "Serv. Post Code Mgt."](../objects/codeunit/11411-nl.md)
- [codeunit/11412 "Serv. Document Mgt. NL"](../objects/codeunit/11412-nl.md)
- [codeunit/11420 "Validate Elec. Tax Declaration"](../objects/codeunit/11420-nl.md)
- [codeunit/11421 "Create Elec. Tax Declaration"](../objects/codeunit/11421-nl.md)
- [codeunit/11422 "Submit Elec. Tax Declaration"](../objects/codeunit/11422-nl.md)
- [codeunit/11423 "Digital Tax. Decl. Mgt."](../objects/codeunit/11423-nl.md)
- [codeunit/11424 "Receive Elec. Tax Declaration"](../objects/codeunit/11424-nl.md)
- [codeunit/11425 "Digital Tax Decl. Install"](../objects/codeunit/11425-nl.md)
- [codeunit/11426 "Intrastat Report Management NL"](../objects/codeunit/11426-nl.md)
- [codeunit/11427 "Intrastat Report Exp. Ext. NL"](../objects/codeunit/11427-nl.md)
- [codeunit/104170 "UPG SEPA NL"](../objects/codeunit/104170-nl.md)
- [codeunit/104171 "Elec. Tax. Decl. Upgrade"](../objects/codeunit/104171-nl.md)
- [codeunit/11000000 "Process Proposal Lines"](../objects/codeunit/11000000-nl.md)
- [codeunit/11000001 "Financial Interface Telebank"](../objects/codeunit/11000001-nl.md)
- [codeunit/11000002 "CBG Journal Telebank Interface"](../objects/codeunit/11000002-nl.md)
- [codeunit/11000005 "Import Protocol Management"](../objects/codeunit/11000005-nl.md)
- [codeunit/11000006 "CBG Statement Reconciliation"](../objects/codeunit/11000006-nl.md)
- [codeunit/11000007 "Check BTL91"](../objects/codeunit/11000007-nl.md)
- [codeunit/11000008 "Check BBV"](../objects/codeunit/11000008-nl.md)
- [codeunit/11000009 "Check PAYMUL"](../objects/codeunit/11000009-nl.md)
- [codeunit/11000010 "Check SEPA ISO20022"](../objects/codeunit/11000010-nl.md)
- [codeunit/11000011 "Check SEPA Pain 008.001.02"](../objects/codeunit/11000011-nl.md)
- [codeunit/11000012 "Report Checksum"](../objects/codeunit/11000012-nl.md)
- [codeunit/11000052 "Digipoort Onprem Communication"](../objects/codeunit/11000052-nl.md)
- [codeunit/11000053 "Digipoort SaaS Communication"](../objects/codeunit/11000053-nl.md)
- [codeunit/11000054 "Digipoort Communication"](../objects/codeunit/11000054-nl.md)
- [enum/11409 "Elec. Tax Declaration Period"](../objects/enum/11409-nl.md)
- [enum/11000006 "CBG Statement Information Type"](../objects/enum/11000006-nl.md)
- [enum/11000007 "CBG Statement Line Account Type"](../objects/enum/11000007-nl.md)
- [interface/digipoort communication "DigiPoort Communication"](../objects/interface/digipoort-communication-nl.md)
- [page/11400 "Bank/Giro Journal"](../objects/page/11400-nl.md)
- [page/11401 "Bank/Giro Journal Subform"](../objects/page/11401-nl.md)
- [page/11402 "Bank/Giro Journal List"](../objects/page/11402-nl.md)
- [page/11403 "Cash Journal"](../objects/page/11403-nl.md)
- [page/11404 "Cash Journal Subform"](../objects/page/11404-nl.md)
- [page/11405 "Cash Journal List"](../objects/page/11405-nl.md)
- [page/11406 "Freely Transferable Maximums"](../objects/page/11406-nl.md)
- [page/11407 "Post Code Ranges"](../objects/page/11407-nl.md)
- [page/11408 "Post Code Updates"](../objects/page/11408-nl.md)
- [page/11409 "Gen. Journal Templ. List (CBG)"](../objects/page/11409-nl.md)
- [page/11410 "Elec. Tax Declaration Setup"](../objects/page/11410-nl.md)
- [page/11411 "Elec. Tax Declaration Card"](../objects/page/11411-nl.md)
- [page/11412 "Elec. Tax Declaration List"](../objects/page/11412-nl.md)
- [page/11413 "Elec. Tax Decl. Line Subform"](../objects/page/11413-nl.md)
- [page/11414 "Elec. Tax Decl. VAT Categ."](../objects/page/11414-nl.md)
- [page/11415 "Elec. Tax Decl. Error Log"](../objects/page/11415-nl.md)
- [page/11416 "Elec. Tax Decl. Response Msgs."](../objects/page/11416-nl.md)
- [page/35001 "Bank/Giro Jnl. Subf. Info"](../objects/page/35001-nl.md)
- [page/11000000 "Telebank - Bank Overview"](../objects/page/11000000-nl.md)
- [page/11000001 "Telebank Proposal"](../objects/page/11000001-nl.md)
- [page/11000002 "Proposal Detail Line"](../objects/page/11000002-nl.md)
- [page/11000003 "Detail Line Subform"](../objects/page/11000003-nl.md)
- [page/11000004 "Detail Lines"](../objects/page/11000004-nl.md)
- [page/11000005 "Payment History Card"](../objects/page/11000005-nl.md)
- [page/11000006 "Payment History Line Overview"](../objects/page/11000006-nl.md)
- [page/11000007 "Payment History List"](../objects/page/11000007-nl.md)
- [page/11000008 "Payment History Line Subform"](../objects/page/11000008-nl.md)
- [page/11000009 "Payment History Line Detail"](../objects/page/11000009-nl.md)
- [page/11000010 "Transaction Mode List"](../objects/page/11000010-nl.md)
- [page/11000011 "Transaction Mode Card"](../objects/page/11000011-nl.md)
- [page/11000012 "Export Protocols"](../objects/page/11000012-nl.md)
- [page/11000014 "CBG Statement Line Add. Info."](../objects/page/11000014-nl.md)
- [page/11000015 "Import Protocols"](../objects/page/11000015-nl.md)
- [page/11000016 "Import Protocol List"](../objects/page/11000016-nl.md)
- [page/11000017 "AL Objects (Telebanking)"](../objects/page/11000017-nl.md)
- [pageextension/11400 "SourceCodeSetupNL"](../objects/pageextension/11400-nl.md)
- [pageextension/11426 "Intrastat Report Subform NL"](../objects/pageextension/11426-nl.md)
- [pageextension/11450 "Service Contract NL"](../objects/pageextension/11450-nl.md)
- [pageextension/11451 "Service Contract Quote NL"](../objects/pageextension/11451-nl.md)
- [pageextension/11452 "Service Credit Memo NL"](../objects/pageextension/11452-nl.md)
- [pageextension/11453 "Service Invoice NL"](../objects/pageextension/11453-nl.md)
- [pageextension/11454 "Service Order NL"](../objects/pageextension/11454-nl.md)
- [pageextension/11455 "Service Quote NL"](../objects/pageextension/11455-nl.md)
- [pageextension/11456 "Posted Service Credit Memo NL"](../objects/pageextension/11456-nl.md)
- [pageextension/11457 "Posted Service Invoice NL"](../objects/pageextension/11457-nl.md)
- [pageextension/11458 "Filed Service Contract NL"](../objects/pageextension/11458-nl.md)
- [pageextension/11460 "Service Quote Archive NL"](../objects/pageextension/11460-nl.md)
- [pageextension/11461 "Service Order Archive NL"](../objects/pageextension/11461-nl.md)
- [permissionsetextension/11426 "Intrastat NL - Objects"](../objects/permissionsetextension/11426-nl.md)
- [query/11400 "Data Exch. Find Column No."](../objects/query/11400-nl.md)
- [query/11401 "CountPartnerTypes"](../objects/query/11401-nl.md)
- [report/11400 "CBG Posting - Test"](../objects/report/11400-nl.md)
- [report/11401 "CMR - Sales Shipment"](../objects/report/11401-nl.md)
- [report/11402 "CMR - Transfer Shipment"](../objects/report/11402-nl.md)
- [report/11403 "Create Elec. VAT Declaration"](../objects/report/11403-nl.md)
- [report/11404 "Create Elec. ICP Declaration"](../objects/report/11404-nl.md)
- [report/11405 "Submit Elec. Tax Declaration"](../objects/report/11405-nl.md)
- [report/11406 "Process Response Messages"](../objects/report/11406-nl.md)
- [report/11408 "Receive Response Messages"](../objects/report/11408-nl.md)
- [report/11409 "VAT- VIES Decl. Tax Auth NL"](../objects/report/11409-nl.md)
- [report/11410 "CMR - Return Shipment"](../objects/report/11410-nl.md)
- [report/11412 "Tax Authority - Audit File"](../objects/report/11412-nl.md)
- [report/11414 "Import Post Codes"](../objects/report/11414-nl.md)
- [report/11415 "Import Post Codes Update"](../objects/report/11415-nl.md)
- [report/11420 "Export Financial Data to XML"](../objects/report/11420-nl.md)
- [report/11000000 "Get Proposal Entries"](../objects/report/11000000-nl.md)
- [report/11000001 "Proposal Overview"](../objects/report/11000001-nl.md)
- [report/11000002 "Payment History Overview"](../objects/report/11000002-nl.md)
- [report/11000003 "Paymt. History - Change Status"](../objects/report/11000003-nl.md)
- [report/11000004 "Docket"](../objects/report/11000004-nl.md)
- [report/11000007 "Export BTL91-ABN AMRO"](../objects/report/11000007-nl.md)
- [report/11000008 "Export BBV"](../objects/report/11000008-nl.md)
- [report/11000009 "Export PAYMUL"](../objects/report/11000009-nl.md)
- [report/11000010 "Export BTL91-RABO"](../objects/report/11000010-nl.md)
- [report/11000011 "Export SEPA ISO20022"](../objects/report/11000011-nl.md)
- [report/11000012 "SEPA ISO20022 Pain 01.01.03"](../objects/report/11000012-nl.md)
- [report/11000013 "SEPA ISO20022 Pain 008.001.02"](../objects/report/11000013-nl.md)
- [report/11000014 "SEPA ISO20022 Pain 01.01.09"](../objects/report/11000014-nl.md)
- [report/11000015 "SEPA ISO20022 Pain 008.001.08"](../objects/report/11000015-nl.md)
- [report/11000021 "Import Rabobank mut.asc"](../objects/report/11000021-nl.md)
- [report/11000022 "Import Rabobank vvmut.asc"](../objects/report/11000022-nl.md)
- [report/11000023 "Import Rabobank ASCII"](../objects/report/11000023-nl.md)
- [table/11307 "G/L Entry Application Buffer"](../objects/table/11307-nl.md)
- [table/11400 "CBG Statement"](../objects/table/11400-nl.md)
- [table/11401 "CBG Statement Line"](../objects/table/11401-nl.md)
- [table/11403 "Reporting ICP"](../objects/table/11403-nl.md)
- [table/11404 "Audit File Buffer"](../objects/table/11404-nl.md)
- [table/11405 "Freely Transferable Maximum"](../objects/table/11405-nl.md)
- [table/11406 "Post Code Range"](../objects/table/11406-nl.md)
- [table/11407 "Post Code Update Log Entry"](../objects/table/11407-nl.md)
- [table/11408 "Elec. Tax Declaration Setup"](../objects/table/11408-nl.md)
- [table/11409 "Elec. Tax Declaration Header"](../objects/table/11409-nl.md)
- [table/11410 "Elec. Tax Declaration Line"](../objects/table/11410-nl.md)
- [table/11411 "Elec. Tax Decl. VAT Category"](../objects/table/11411-nl.md)
- [table/11412 "Elec. Tax Decl. Error Log"](../objects/table/11412-nl.md)
- [table/11413 "Elec. Tax Decl. Response Msg."](../objects/table/11413-nl.md)
- [table/11000000 "Proposal Line"](../objects/table/11000000-nl.md)
- [table/11000001 "Payment History"](../objects/table/11000001-nl.md)
- [table/11000002 "Payment History Line"](../objects/table/11000002-nl.md)
- [table/11000003 "Detail Line"](../objects/table/11000003-nl.md)
- [table/11000004 "Transaction Mode"](../objects/table/11000004-nl.md)
- [table/11000005 "Export Protocol"](../objects/table/11000005-nl.md)
- [table/11000006 "CBG Statement Line Add. Info."](../objects/table/11000006-nl.md)
- [table/11000007 "Import Protocol"](../objects/table/11000007-nl.md)
- [table/11000008 "Reconciliation Buffer"](../objects/table/11000008-nl.md)
- [table/11000009 "Payment History Export Buffer"](../objects/table/11000009-nl.md)
- [tableextension/11400 "SourceCodeSetupNL"](../objects/tableextension/11400-nl.md)
- [tableextension/11450 "Service Contract Header NL"](../objects/tableextension/11450-nl.md)
- [tableextension/11451 "Service Header NL"](../objects/tableextension/11451-nl.md)
- [tableextension/11453 "Service Cr.Memo Header NL"](../objects/tableextension/11453-nl.md)
- [tableextension/11454 "Service Invoice Header NL"](../objects/tableextension/11454-nl.md)
- [tableextension/11455 "Filed Serv. Contract Header NL"](../objects/tableextension/11455-nl.md)
- [tableextension/11460 "Service Header Archive NL"](../objects/tableextension/11460-nl.md)

## Other versions

- BC28: 194 objects differ from W1 (81 fields, 9 events added)
- BC30: 194 objects differ from W1 (81 fields, 9 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
