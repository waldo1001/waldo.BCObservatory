---
id: localization/be
type: localization
title: Belgium (BE)
summary: Belgium (BE) localization of Business Central 29. It covers Belgian VAT reporting with non-deductible VAT, Intrastat, CODA bank statements, electronic banking (domestic, international, SEPA payments), domiciliation direct debits, enterprise numbers, legal ledger reports and PEPPOL 3.0. It answers where Belgian-specific setup, fields and reports live.
tier: official
language: en
tags:
  - localization
  - be
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:23:40.147Z"
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: fedd902790aa373511189b417cb49b28240a53c3c1ebd839bba157ebdc2ba100
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-be
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/12
    - object/codeunit/46
    - object/codeunit/57
    - object/codeunit/90
    - object/codeunit/205
    - object/codeunit/816
    - object/codeunit/1605
    - object/codeunit/5760
    - object/codeunit/9998
    - object/codeunit/104000
    - object/codeunit/104059
    - object/enum/89
    - object/page/161
    - object/page/371
    - object/page/400
    - object/page/474
    - object/page/475
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/12
    - object/report/20
    - object/report/840
    - object/reportextension/6485
    - object/table/9
    - object/table/10
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/23
    - object/table/36
    - object/table/38
    - object/table/39
    - object/table/49
    - object/table/55
    - object/table/79
    - object/table/81
    - object/table/98
    - object/table/110
    - object/table/111
    - object/table/112
    - object/table/114
    - object/table/120
    - object/table/121
    - object/table/122
    - object/table/123
    - object/table/124
    - object/table/125
    - object/table/179
    - object/table/181
    - object/table/189
    - object/table/213
    - object/table/242
    - object/table/254
    - object/table/256
    - object/table/258
    - object/table/259
    - object/table/260
    - object/table/262
    - object/table/263
    - object/table/270
    - object/table/287
    - object/table/288
    - object/table/290
    - object/table/295
    - object/table/297
    - object/table/302
    - object/table/304
    - object/table/311
    - object/table/382
    - object/table/846
    - object/table/1207
    - object/table/1381
    - object/table/1383
    - object/table/5050
    - object/table/5107
    - object/table/5109
    - object/table/6650
    - object/table/6660
    - object/xmlport/1010
    - object/xmlport/1011
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/belgium
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: BE
version: "29"
w1_version: "29"
added_objects: 129
replaced_objects: 80
removed_objects: 0
added_fields: 101
added_events: 18
learn_folder: LocalFunctionality/Belgium
---

# Belgium (BE)

> Belgium (BE) localization of Business Central 29. It covers Belgian VAT reporting with non-deductible VAT, Intrastat, CODA bank statements, electronic banking (domestic, international, SEPA payments), domiciliation direct debits, enterprise numbers, legal ledger reports and PEPPOL 3.0. It answers where Belgian-specific setup, fields and reports live.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/belgium.md) · narrative reviewed (checked by Opus)

## Overview

Belgium adds a large set of own objects on top of W1. Electronic banking (tables and codeunits in the 2000000 range) handles payment journals, export protocols, payment file reports and checks, domiciliation journals, and CODA import, application and posting. Learn documents these under Belgian Electronic Banking, Belgian electronic payments, Belgian CODA Bank Statements and Belgian Direct Debit Using Domiciliation.

For tax and statutory reporting, the country adds VAT reports (VAT form, annual listing, VAT-VIES disk, Intervat helper), manual VAT corrections, representatives, legal ledgers (sales, purchase, general, centralization, financial), a trial balance and the Link to Accon export. W1 tables get Enterprise No. fields, non-deductible VAT fields and Intrastat fields. Intrastat is implemented through extensions to the Intrastat report and tariff number import reports.

Other layers cover service documents (BE reports and header extensions), PEPPOL 3.0 validation and payment discount compensation, Shopify enterprise number mapping, journal template names made mandatory with upgrade tags, and cash flow VAT base amounts. The code also adds 18 events on W1 objects, for example in VAT Statement, Customer, Vendor and Country/Region.

## Key points

- Electronic banking: payment journals, export protocols, domestic, international, SEPA and non-Euro SEPA payment files, with check codeunits and error logs
- CODA bank statements: import, application to ledger entries, financial journal transfer and posting; bank account fields Protocol No. and Version Code
- Domiciliation direct debit: journals, suggestions, test and file reports; Customer fields Domiciliation No. and VAT Liable
- Belgian VAT: VAT form and Intervat declaration, annual listing, VAT-VIES disk, manual VAT corrections, representatives
- Non-deductible VAT: % Non deductible VAT on G/L Account, amounts on VAT Entry, purchase lines and posting buffers
- Enterprise No. and Branch No. on Company Information, customers, vendors, contacts and document headers
- Intrastat: simplified and extended declarations, tariff number setup and import, OneGate export, Intrastat Establishment No.
- Legal reports: sales, purchase, general, centralization and financial ledgers, trial balance, Link to Accon export; PEPPOL 3.0 BE

Narrative written by Sonnet from the code diff and 38 Learn page summaries. In numbers: Belgium (BE) localization of Business Central in BC29: 129 objects of its own, 80 W1 objects changed (101 fields and 18 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 5 | 55 | 4 |
| [Finance](#finance) | 21 | 27 | 38 |
| [Inventory](#inventory) | 5 | 13 | 8 |
| [Purchases](#purchases) | 17 | 1 | 16 |
| [Sales](#sales) | 16 | 2 | 20 |
| [Service](#service) | 0 | 11 | 0 |
| [Peppol](#peppol) | 0 | 10 | 0 |
| [Foundation](#foundation) | 4 | 3 | 13 |
| [(no namespace)](#no-namespace) | 0 | 5 | 0 |
| [CashFlow](#cashflow) | 3 | 0 | 1 |
| Upgrade | 3 | 0 | 0 |
| [Integration](#integration) | 0 | 2 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| [CRM](#crm) | 1 | 0 | 1 |
| [Text](#text) | 1 | 0 | 0 |
| [Utilities](#utilities) | 1 | 0 | 0 |
| [Warehouse](#warehouse) | 1 | 0 | 0 |

### Bank

Adds the Belgian electronic banking stack: payment journal templates, batches and lines, export protocols, check codeunits for domestic, international, SEPA and non-Euro SEPA payments, and payment file reports. Also adds domiciliation journals and CODA statement import, application and posting. Bank Account gets Protocol No., Version Code and Interbank Clearing Code.

Why: Learn explains that the setup supports electronic payments, CODA statements and domiciliation direct debits, with export protocols defining the payment file formats.

Objects: [table/2000001 "Payment Journal Line"](../objects/table/2000001-be.md) (own), [codeunit/2000000 "PmtJrnlManagement"](../objects/codeunit/2000000-be.md) (own), [report/2000005 "File SEPA Payments"](../objects/report/2000005-be.md) (own), [report/2000030 "Import CODA Statement"](../objects/report/2000030-be.md) (own), [codeunit/2000040 "Coda Import Management"](../objects/codeunit/2000040-be.md) (own), [table/2000040 "CODA Statement"](../objects/table/2000040-be.md) (own), [report/2000021 "File Domiciliations"](../objects/report/2000021-be.md) (own), [table/2000022 "Domiciliation Journal Line"](../objects/table/2000022-be.md) (own).

[All 60 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds Belgian VAT handling: VAT form, annual listing, VAT-VIES disk, VAT statement reports, manual VAT corrections and representatives. Also adds legal ledger reports and Link to Accon. W1 VAT Statement and VAT Entry gain non-deductible VAT and Enterprise No. fields, and G/L Entry gets application fields.

Why: Learn documents monthly or quarterly VAT declarations, annual listings, manual VAT corrections and general ledger entry application for Belgium.

Objects: [report/11307 "VAT - Form"](../objects/report/11307-be.md) (own), [report/11308 "VAT Annual Listing"](../objects/report/11308-be.md) (own), [table/11301 "Manual VAT Correction"](../objects/table/11301-be.md) (own), [report/12 "VAT Statement"](../objects/report/12.md), [table/254 "VAT Entry"](../objects/table/254.md), [table/256 "VAT Statement Line"](../objects/table/256.md), [table/17 "G/L Entry"](../objects/table/17.md), [report/11313 "Link to Accon"](../objects/report/11313-be.md) (own).

[All 48 objects of Finance in the diff](?ns=Finance#country-diff)

### Inventory

Implements Belgian Intrastat through Intrastat report extensions, tariff number import reports and fields on Tariff Number and Intrastat lines. Adds conversion factor, unit of measure and supplementary unit fields, plus batch flags for reporting systems.

Why: Learn describes simplified and extended declarations and export to the OneGate portal.

Objects: [codeunit/11346 "IntrastatReportManagementBE"](../objects/codeunit/11346-be.md) (own), [table/260 "Tariff Number"](../objects/table/260.md), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md), [pageextension/11346 "Intrastat Report BE"](../objects/pageextension/11346-be.md) (own), [report/11333 "Import Tariff Numbers Part 1"](../objects/report/11333-be.md) (own), [report/11332 "Import Tariff Numbers Part 2"](../objects/report/11332-be.md) (own), [tableextension/11346 "Intrastat Report Header BE"](../objects/tableextension/11346-be.md) (own), [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md).

[All 18 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Purchases

Adds non-deductible VAT percentages and amount procedures on purchase lines and posted lines. Adds Enterprise No. on purchase headers and vendors, Suggest Payments on Vendor, an Export Protocol Code on vendor bank accounts, and the Purchase Ledger report.

Why: Learn explains vendor setup for automatic payment suggestions and non-deductible VAT for expense accounts.

Objects: [table/39 "Purchase Line"](../objects/table/39.md), [table/23 "Vendor"](../objects/table/23.md), [table/123 "Purch. Inv. Line"](../objects/table/123.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), [report/11301 "Purchase Ledger"](../objects/report/11301-be.md) (own), [table/38 "Purchase Header"](../objects/table/38.md), [page/161 "Purchase Statistics"](../objects/page/161.md).

[All 18 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Enterprise No. to sales documents, reminders and finance charge memos. Customer gets VAT Liable and Domiciliation No. PEPPOL Management gains payment discount compensation procedures, and the Sales Ledger report is added.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/18 "Customer"](../objects/table/18.md), [table/36 "Sales Header"](../objects/table/36.md), [codeunit/1605 "PEPPOL Management"](../objects/codeunit/1605.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [report/11300 "Sales Ledger"](../objects/report/11300-be.md) (own), [table/1381 "Customer Templ."](../objects/table/1381.md), [codeunit/854 "Sales Post Invoice Events BE"](../objects/codeunit/854-be.md) (own), [table/112 "Sales Invoice Header"](../objects/table/112.md).

[All 18 objects of Sales in the diff](?ns=Sales#country-diff)

### Service

Adds Belgian service invoice, credit memo, shipment and test reports, with table extensions on service headers and archive. Codeunits manage service lines and documents.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/11321 "Service - Invoice (BE)"](../objects/report/11321-be.md) (own), [report/11322 "Service - Credit Memo (BE)"](../objects/report/11322-be.md) (own), [report/11323 "Service - Shipment (BE)"](../objects/report/11323-be.md) (own), [report/11325 "Service Document - Test (BE)"](../objects/report/11325-be.md) (own), [codeunit/11309 "Service Line Mgt. BE"](../objects/codeunit/11309-be.md) (own), [codeunit/11350 "Serv. Document Mgt. BE"](../objects/codeunit/11350-be.md) (own), [tableextension/11300 "Service Header BE"](../objects/tableextension/11300-be.md) (own).

[All 11 objects of Service in the diff](?ns=Service#country-diff)

### Peppol

Adds PEPPOL 3.0 Belgian format support with validation for sales and service documents, tax, payment and monetary info, a discount (Escompte) codeunit, subscribers and an upgrade codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/37312 "PEPPOL30 BE Initialize"](../objects/codeunit/37312-be.md) (own), [codeunit/37314 "PEPPOL30 BE Subscribers"](../objects/codeunit/37314-be.md) (own), [codeunit/37311 "PEPPOL30 BE Sales Validation"](../objects/codeunit/37311-be.md) (own), [codeunit/37310 "PEPPOL30 BE Service Validation"](../objects/codeunit/37310-be.md) (own), [codeunit/37315 "PEPPOL30 BE Tax Info"](../objects/codeunit/37315-be.md) (own), [codeunit/37316 "PEPPOL30 BE Escompte"](../objects/codeunit/37316-be.md) (own), [codeunit/37318 "PEPPOL30 BE Monetary Info"](../objects/codeunit/37318-be.md) (own), [enumextension/37310 "PEPPOL 3.0 Format BE"](../objects/enumextension/37310-be.md) (own).

[All 10 objects of Peppol in the diff](?ns=Peppol#country-diff)

### Foundation

Adds Belgian company identifiers to Company Information: enterprise and branch numbers, Intrastat establishment number and XML sequence numbers. Country/Region gets ISO, IBAN and SEPA fields, and Source Code Setup gets financial and domiciliation journal codes.

Why: Learn describes enterprise numbers issued by the Crossroads Bank for Enterprises and the Intrastat establishment number.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/9 "Country/Region"](../objects/table/9.md), [table/242 "Source Code Setup"](../objects/table/242.md), [tableextension/11307 "SourceCodeSetupBE"](../objects/tableextension/11307-be.md) (own), [pageextension/11307 "SourceCodeSetupBE"](../objects/pageextension/11307-be.md) (own), [table/10 "Shipment Method"](../objects/table/10.md), [codeunit/11311 "Serv. Report Selection Mgt. BE"](../objects/codeunit/11311-be.md) (own).

[All 7 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Holds the Transaction Coding table and page used with CODA, plus a copy-invoice-number-to-payment-reference codeunit and ISO code upgrade plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/2000043 "Transaction Coding"](../objects/table/2000043-be.md) (own), [page/2000045 "Transaction Coding"](../objects/page/2000045-be.md) (own), [codeunit/104153 "Copy Inv. No. To Pmt. Ref"](../objects/codeunit/104153-be.md) (own).

[All 5 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### CashFlow

Cash flow suggestions compute a VAT base amount for sales, purchase and service lines and ledger entries. Cash Flow Worksheet Line gets a VAT Base Amount field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/840 "Suggest Worksheet Lines"](../objects/report/840.md), [table/846 "Cash Flow Worksheet Line"](../objects/table/846.md), [reportextension/6485 "Serv. Suggest Worksheet Lines"](../objects/reportextension/6485.md).

[All 3 objects of CashFlow in the diff](?ns=CashFlow#country-diff)

### Integration

Shopify integration maps the Belgian enterprise number as company tax ID through an enum extension and a codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/30461 "Shpfy Enterprise No. BE"](../objects/codeunit/30461-be.md) (own), [enumextension/30461 "Shpfy Comp. Tax Id Mapping BE"](../objects/enumextension/30461-be.md) (own).

[All 2 objects of Integration in the diff](?ns=Integration#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets to include Belgian objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Contact gets an Enterprise No. field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5050 "Contact"](../objects/table/5050.md).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### Text

Selection filter helpers gain procedures for bank accounts and EB payment journals.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/46 "SelectionFilterManagement"](../objects/codeunit/46.md).

[All 1 objects of Text in the diff](?ns=Text#country-diff)

### Utilities

Document Totals gains procedures and an event to calculate non-deductible VAT in purchase totals.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/57 "Document Totals"](../objects/codeunit/57.md).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

### Warehouse

Whse.-Post Receipt gets a procedure to get the source journal template, supporting mandatory journal template names.

Why: Learn describes making journal templates mandatory in the Belgian version.

Objects: [codeunit/5760 "Whse.-Post Receipt"](../objects/codeunit/5760.md).

[All 1 objects of Warehouse in the diff](?ns=Warehouse#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +1 procedures, 1 procedures changed |
| [codeunit/46 "SelectionFilterManagement"](../objects/codeunit/46.md) | +2 procedures |
| [codeunit/57 "Document Totals"](../objects/codeunit/57.md) | +1 events, +2 procedures |
| [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md) | +2 events |
| [codeunit/205 "Alt. Cust. VAT Reg. Doc. Impl."](../objects/codeunit/205.md) | +1 procedures |
| [codeunit/816 "Purch. Post Invoice"](../objects/codeunit/816.md) | +1 procedures |
| [codeunit/1605 "PEPPOL Management"](../objects/codeunit/1605.md) | +7 procedures |
| [codeunit/5760 "Whse.-Post Receipt"](../objects/codeunit/5760.md) | +1 procedures |
| [codeunit/9998 "Upgrade Tag Definitions"](../objects/codeunit/9998.md) | +17 procedures |
| [codeunit/104000 "Upgrade - BaseApp"](../objects/codeunit/104000.md) | +5 procedures |
| [codeunit/104059 "Serv. Upgrade BaseApp"](../objects/codeunit/104059.md) | body changes only |
| [enum/89 "Gen. Journal Template Type"](../objects/enum/89.md) | body changes only |
| [page/161 "Purchase Statistics"](../objects/page/161.md) | +2 procedures |
| [page/371 "Bank Account List"](../objects/page/371.md) | +1 procedures |
| [page/400 "Purchase Invoice Statistics"](../objects/page/400.md) | +2 procedures |
| [page/474 "VAT Statement Preview"](../objects/page/474.md) | +1 procedures |
| [page/475 "VAT Statement Preview Line"](../objects/page/475.md) | +1 events, +5 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/12 "VAT Statement"](../objects/report/12.md) | +2 events, +6 procedures |
| [report/20 "Calc. and Post VAT Settlement"](../objects/report/20.md) | +5 procedures |
| [report/840 "Suggest Worksheet Lines"](../objects/report/840.md) | +7 procedures |
| [reportextension/6485 "Serv. Suggest Worksheet Lines"](../objects/reportextension/6485.md) | +1 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +3 fields, +1 events, +1 procedures |
| [table/10 "Shipment Method"](../objects/table/10.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +2 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +6 fields |
| [table/18 "Customer"](../objects/table/18.md) | +3 fields, +1 events, +1 procedures |
| [table/23 "Vendor"](../objects/table/23.md) | +2 fields, +1 events, +2 procedures |
| [table/36 "Sales Header"](../objects/table/36.md) | +2 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +1 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +2 fields, +1 events, +5 procedures |
| [table/49 "Invoice Post. Buffer"](../objects/table/49.md) | +5 fields |
| [table/55 "Invoice Posting Buffer"](../objects/table/55.md) | +3 fields, +1 procedures |
| [table/79 "Company Information"](../objects/table/79.md) | +7 fields, 3 fields changed, +1 procedures |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +3 fields, +1 procedures |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +5 fields, 1 fields changed |
| [table/110 "Sales Shipment Header"](../objects/table/110.md) | +1 fields, +2 events |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +1 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +1 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +1 fields |
| [table/120 "Purch. Rcpt. Header"](../objects/table/120.md) | +1 fields |
| [table/121 "Purch. Rcpt. Line"](../objects/table/121.md) | +1 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +1 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +1 fields, +2 procedures |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +1 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +1 fields, +1 procedures |
| [table/179 "Reversal Entry"](../objects/table/179.md) | +1 events |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +3 fields |
| [table/189 "VAT Setup"](../objects/table/189.md) | 1 fields changed |
| [table/213 "Alt. Cust. VAT Reg."](../objects/table/213.md) | +1 fields, +1 events |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +2 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +5 fields |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +3 fields, 1 fields changed, +1 procedures |
| [table/258 "Transaction Type"](../objects/table/258.md) | 1 fields changed |
| [table/259 "Transport Method"](../objects/table/259.md) | 1 fields changed |
| [table/260 "Tariff Number"](../objects/table/260.md) | +3 fields |
| [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md) | +2 fields |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | +3 fields |
| [table/270 "Bank Account"](../objects/table/270.md) | +3 fields, 2 fields changed |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +1 fields, 2 fields changed |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +1 fields, 2 fields changed |
| [table/290 "VAT Amount Line"](../objects/table/290.md) | +1 fields |
| [table/295 "Reminder Header"](../objects/table/295.md) | +1 fields |
| [table/297 "Issued Reminder Header"](../objects/table/297.md) | +1 fields |
| [table/302 "Finance Charge Memo Header"](../objects/table/302.md) | +1 fields |
| [table/304 "Issued Fin. Charge Memo Header"](../objects/table/304.md) | +1 fields |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +1 fields |
| [table/382 "CV Ledger Entry Buffer"](../objects/table/382.md) | +1 fields |
| [table/846 "Cash Flow Worksheet Line"](../objects/table/846.md) | +1 fields |
| [table/1207 "Direct Debit Collection"](../objects/table/1207.md) | +1 fields, +1 procedures |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +3 fields, 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +2 fields, 1 fields changed |
| [table/5050 "Contact"](../objects/table/5050.md) | +1 fields |
| [table/5107 "Sales Header Archive"](../objects/table/5107.md) | +1 fields |
| [table/5109 "Purchase Header Archive"](../objects/table/5109.md) | +1 fields |
| [table/6650 "Return Shipment Header"](../objects/table/6650.md) | +1 fields |
| [table/6660 "Return Receipt Header"](../objects/table/6660.md) | +1 fields, +2 events |
| [xmlport/1010 "SEPA DD pain.008.001.02"](../objects/xmlport/1010.md) | +1 events |
| [xmlport/1011 "SEPA DD pain.008.001.08"](../objects/xmlport/1011.md) | +1 events |

## Objects of its own

129 objects only this country has.

- [codeunit/854 "Sales Post Invoice Events BE"](../objects/codeunit/854-be.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-be.md)
- [codeunit/11300 "VATLogicalTests"](../objects/codeunit/11300-be.md)
- [codeunit/11308 "INTERVAT Helper"](../objects/codeunit/11308-be.md)
- [codeunit/11309 "Service Line Mgt. BE"](../objects/codeunit/11309-be.md)
- [codeunit/11310 "VAT Amount Line Mgt. BE"](../objects/codeunit/11310-be.md)
- [codeunit/11311 "Serv. Report Selection Mgt. BE"](../objects/codeunit/11311-be.md)
- [codeunit/11346 "IntrastatReportManagementBE"](../objects/codeunit/11346-be.md)
- [codeunit/11350 "Serv. Document Mgt. BE"](../objects/codeunit/11350-be.md)
- [codeunit/30461 "Shpfy Enterprise No. BE"](../objects/codeunit/30461-be.md)
- [codeunit/37310 "PEPPOL30 BE Service Validation"](../objects/codeunit/37310-be.md)
- [codeunit/37311 "PEPPOL30 BE Sales Validation"](../objects/codeunit/37311-be.md)
- [codeunit/37312 "PEPPOL30 BE Initialize"](../objects/codeunit/37312-be.md)
- [codeunit/37313 "PEPPOL30 BE Upgrade"](../objects/codeunit/37313-be.md)
- [codeunit/37314 "PEPPOL30 BE Subscribers"](../objects/codeunit/37314-be.md)
- [codeunit/37315 "PEPPOL30 BE Tax Info"](../objects/codeunit/37315-be.md)
- [codeunit/37316 "PEPPOL30 BE Escompte"](../objects/codeunit/37316-be.md)
- [codeunit/37317 "PEPPOL30 BE Payment Info"](../objects/codeunit/37317-be.md)
- [codeunit/37318 "PEPPOL30 BE Monetary Info"](../objects/codeunit/37318-be.md)
- [codeunit/104151 "ISO Code UPG.BE"](../objects/codeunit/104151-be.md)
- [codeunit/104153 "Copy Inv. No. To Pmt. Ref"](../objects/codeunit/104153-be.md)
- [codeunit/2000000 "PmtJrnlManagement"](../objects/codeunit/2000000-be.md)
- [codeunit/2000001 "CheckPaymJnlLine"](../objects/codeunit/2000001-be.md)
- [codeunit/2000002 "Check Domestic Payments"](../objects/codeunit/2000002-be.md)
- [codeunit/2000003 "Check International Payments"](../objects/codeunit/2000003-be.md)
- [codeunit/2000004 "Check SEPA Payments"](../objects/codeunit/2000004-be.md)
- [codeunit/2000005 "Check Non Euro SEPA Payments"](../objects/codeunit/2000005-be.md)
- [codeunit/2000020 "DomiciliationJnlManagement"](../objects/codeunit/2000020-be.md)
- [codeunit/2000021 "File Domiciliations"](../objects/codeunit/2000021-be.md)
- [codeunit/2000040 "Coda Import Management"](../objects/codeunit/2000040-be.md)
- [codeunit/2000041 "CODA Write Statements"](../objects/codeunit/2000041-be.md)
- [codeunit/2000042 "Post Coded Bank Statement"](../objects/codeunit/2000042-be.md)
- [enum/277 "VAT Stmt. Line Document Type"](../objects/enum/277-be.md)
- [enumextension/30461 "Shpfy Comp. Tax Id Mapping BE"](../objects/enumextension/30461-be.md)
- [enumextension/37310 "PEPPOL 3.0 Format BE"](../objects/enumextension/37310-be.md)
- [page/11300 "Financial Journal"](../objects/page/11300-be.md)
- [page/11301 "VAT VIES Correction"](../objects/page/11301-be.md)
- [page/11303 "Manual VAT Correction List"](../objects/page/11303-be.md)
- [page/11306 "Representative Card"](../objects/page/11306-be.md)
- [page/11307 "Representative List"](../objects/page/11307-be.md)
- [page/11308 "Electronic Banking Setup"](../objects/page/11308-be.md)
- [page/2000000 "EB Payment Journal Templates"](../objects/page/2000000-be.md)
- [page/2000001 "EB Payment Journal"](../objects/page/2000001-be.md)
- [page/2000002 "IBLC/BLWI Transaction Codes"](../objects/page/2000002-be.md)
- [page/2000003 "EB Payment Journal Batches"](../objects/page/2000003-be.md)
- [page/2000005 "Export Protocols"](../objects/page/2000005-be.md)
- [page/2000006 "Export Check Error Logs"](../objects/page/2000006-be.md)
- [page/2000020 "Domicil. Journal Templates"](../objects/page/2000020-be.md)
- [page/2000021 "Domiciliation Journal Batches"](../objects/page/2000021-be.md)
- [page/2000022 "Domiciliation Journal"](../objects/page/2000022-be.md)
- [page/2000040 "CODA Statement"](../objects/page/2000040-be.md)
- [page/2000041 "CODA Statement Lines"](../objects/page/2000041-be.md)
- [page/2000042 "CODA Statement List"](../objects/page/2000042-be.md)
- [page/2000043 "CODA Statement Info"](../objects/page/2000043-be.md)
- [page/2000045 "Transaction Coding"](../objects/page/2000045-be.md)
- [pageextension/11307 "SourceCodeSetupBE"](../objects/pageextension/11307-be.md)
- [pageextension/11310 "VAT Specification Subform BE"](../objects/pageextension/11310-be.md)
- [pageextension/11346 "Intrastat Report BE"](../objects/pageextension/11346-be.md)
- [pageextension/11347 "Intrastat Report Subform BE"](../objects/pageextension/11347-be.md)
- [pageextension/11348 "Intrastat Report Item Card BE"](../objects/pageextension/11348-be.md)
- [pageextension/11349 "Intrastat Report FA Card BE"](../objects/pageextension/11349-be.md)
- [pageextension/11350 "Intrastat Report Tariff Ns. BE"](../objects/pageextension/11350-be.md)
- [permissionsetextension/11346 "Intrastat BE - Objects"](../objects/permissionsetextension/11346-be.md)
- [report/11300 "Sales Ledger"](../objects/report/11300-be.md)
- [report/11301 "Purchase Ledger"](../objects/report/11301-be.md)
- [report/11302 "General Ledger"](../objects/report/11302-be.md)
- [report/11303 "Centralization Ledger"](../objects/report/11303-be.md)
- [report/11304 "Financial Ledger"](../objects/report/11304-be.md)
- [report/11306 "Trial Balance - Debit/Credit"](../objects/report/11306-be.md)
- [report/11307 "VAT - Form"](../objects/report/11307-be.md)
- [report/11308 "VAT Annual Listing"](../objects/report/11308-be.md)
- [report/11309 "VAT Annual Listing - Disk"](../objects/report/11309-be.md)
- [report/11310 "VAT Statement Lines"](../objects/report/11310-be.md)
- [report/11311 "VAT Statement Summary"](../objects/report/11311-be.md)
- [report/11312 "Checklist Revenue and VAT"](../objects/report/11312-be.md)
- [report/11313 "Link to Accon"](../objects/report/11313-be.md)
- [report/11315 "VAT-VIES Declaration Disk BE"](../objects/report/11315-be.md)
- [report/11321 "Service - Invoice (BE)"](../objects/report/11321-be.md)
- [report/11322 "Service - Credit Memo (BE)"](../objects/report/11322-be.md)
- [report/11323 "Service - Shipment (BE)"](../objects/report/11323-be.md)
- [report/11325 "Service Document - Test (BE)"](../objects/report/11325-be.md)
- [report/11332 "Import Tariff Numbers Part 2"](../objects/report/11332-be.md)
- [report/11333 "Import Tariff Numbers Part 1"](../objects/report/11333-be.md)
- [report/2000001 "File Domestic Payments"](../objects/report/2000001-be.md)
- [report/2000002 "File International Payments"](../objects/report/2000002-be.md)
- [report/2000004 "Payment Journal Post"](../objects/report/2000004-be.md)
- [report/2000005 "File SEPA Payments"](../objects/report/2000005-be.md)
- [report/2000006 "File Non Euro SEPA Payments"](../objects/report/2000006-be.md)
- [report/2000007 "File SEPA 001.001.09 Pmts"](../objects/report/2000007-be.md)
- [report/2000008 "File FCY SEPA 001.001.09 Pmts"](../objects/report/2000008-be.md)
- [report/2000019 "Suggest Vendor Payments EB"](../objects/report/2000019-be.md)
- [report/2000020 "Domiciliation Journal - Test"](../objects/report/2000020-be.md)
- [report/2000021 "File Domiciliations"](../objects/report/2000021-be.md)
- [report/2000022 "Create Gen. Jnl. Lines"](../objects/report/2000022-be.md)
- [report/2000030 "Import CODA Statement"](../objects/report/2000030-be.md)
- [report/2000039 "Suggest domicilations"](../objects/report/2000039-be.md)
- [report/2000040 "CODA Statement - Test"](../objects/report/2000040-be.md)
- [report/2000041 "CODA Statement - List"](../objects/report/2000041-be.md)
- [report/2000058 "Initialise CODA Stmt. Lines"](../objects/report/2000058-be.md)
- [report/2000059 "Post CODA Stmt. Lines"](../objects/report/2000059-be.md)
- [table/11300 "VAT VIES Correction"](../objects/table/11300-be.md)
- [table/11301 "Manual VAT Correction"](../objects/table/11301-be.md)
- [table/11303 "VAT Summary Buffer"](../objects/table/11303-be.md)
- [table/11306 "Electronic Banking Setup"](../objects/table/11306-be.md)
- [table/11307 "G/L Entry Application Buffer"](../objects/table/11307-be.md)
- [table/11308 "Representative"](../objects/table/11308-be.md)
- [table/2000000 "Payment Journal Template"](../objects/table/2000000-be.md)
- [table/2000001 "Payment Journal Line"](../objects/table/2000001-be.md)
- [table/2000002 "Paym. Journal Batch"](../objects/table/2000002-be.md)
- [table/2000003 "IBLC/BLWI Transaction Code"](../objects/table/2000003-be.md)
- [table/2000005 "Export Protocol"](../objects/table/2000005-be.md)
- [table/2000006 "Export Check Error Log"](../objects/table/2000006-be.md)
- [table/2000020 "Domiciliation Journal Template"](../objects/table/2000020-be.md)
- [table/2000021 "Domiciliation Journal Batch"](../objects/table/2000021-be.md)
- [table/2000022 "Domiciliation Journal Line"](../objects/table/2000022-be.md)
- [table/2000040 "CODA Statement"](../objects/table/2000040-be.md)
- [table/2000041 "CODA Statement Line"](../objects/table/2000041-be.md)
- [table/2000042 "CODA Statement Source Line"](../objects/table/2000042-be.md)
- [table/2000043 "Transaction Coding"](../objects/table/2000043-be.md)
- [tableextension/11300 "Service Header BE"](../objects/tableextension/11300-be.md)
- [tableextension/11301 "Service Cr.Memo Header BE"](../objects/tableextension/11301-be.md)
- [tableextension/11303 "Service Invoice Header BE"](../objects/tableextension/11303-be.md)
- [tableextension/11305 "Service Shipment Header BE"](../objects/tableextension/11305-be.md)
- [tableextension/11307 "SourceCodeSetupBE"](../objects/tableextension/11307-be.md)
- [tableextension/11308 "Service Header Archive BE"](../objects/tableextension/11308-be.md)
- [tableextension/11310 "Location BE"](../objects/tableextension/11310-be.md)
- [tableextension/11346 "Intrastat Report Header BE"](../objects/tableextension/11346-be.md)
- [tableextension/11347 "Intrastat Report Line BE"](../objects/tableextension/11347-be.md)
- [tableextension/11348 "Intrastat Report Tariff Nr. BE"](../objects/tableextension/11348-be.md)

## Other versions

- BC28: 184 objects differ from W1 (101 fields, 18 events added)
- BC30: 209 objects differ from W1 (101 fields, 18 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
