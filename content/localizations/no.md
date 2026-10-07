---
id: localization/no
type: localization
title: Norway (NO)
summary: Norway (NO) localization of Business Central 29. Covers Norwegian VAT codes, proportional VAT, electronic VAT returns and SAF-T export, remittance and OCR/KID electronic banking, EHF and PEPPOL e-invoicing, recurring orders and payroll import. Answers where Norway extends W1 tables, codeunits and reports.
tier: official
language: en
tags:
  - localization
  - "no"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: b6a8aaa8fb750443a06d62c058a419c067eeabb8a94db61f594a7e6e1660b44e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-no
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/2
    - object/codeunit/11
    - object/codeunit/12
    - object/codeunit/229
    - object/codeunit/392
    - object/codeunit/1221
    - object/codeunit/1605
    - object/codeunit/1620
    - object/codeunit/1752
    - object/codeunit/104000
    - object/enum/77
    - object/enum/306
    - object/page/42
    - object/page/43
    - object/page/44
    - object/page/255
    - object/page/256
    - object/page/435
    - object/page/447
    - object/page/507
    - object/page/6630
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/3
    - object/report/12
    - object/report/20
    - object/report/117
    - object/report/118
    - object/table/4
    - object/table/15
    - object/table/18
    - object/table/23
    - object/table/25
    - object/table/36
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/79
    - object/table/81
    - object/table/91
    - object/table/98
    - object/table/111
    - object/table/112
    - object/table/113
    - object/table/114
    - object/table/115
    - object/table/122
    - object/table/123
    - object/table/125
    - object/table/181
    - object/table/189
    - object/table/254
    - object/table/256
    - object/table/295
    - object/table/296
    - object/table/297
    - object/table/298
    - object/table/302
    - object/table/303
    - object/table/304
    - object/table/305
    - object/table/311
    - object/table/312
    - object/table/324
    - object/table/325
    - object/table/344
    - object/table/742
    - object/table/1200
    - object/table/1226
    - object/table/1381
    - object/table/1383
    - object/table/5107
    - object/table/5108
    - object/xmlport/1000
    - object/xmlport/1001
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/norway
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: "NO"
version: "29"
w1_version: "29"
added_objects: 278
replaced_objects: 75
removed_objects: 0
added_fields: 240
added_events: 5
learn_folder: LocalFunctionality/Norway
---

# Norway (NO)

> Norway (NO) localization of Business Central 29. Covers Norwegian VAT codes, proportional VAT, electronic VAT returns and SAF-T export, remittance and OCR/KID electronic banking, EHF and PEPPOL e-invoicing, recurring orders and payroll import. Answers where Norway extends W1 tables, codeunits and reports.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/norway.md) · narrative **unreviewed** (machine-written)

## Overview

The Norwegian layer adds a large block of finance and banking functionality. VAT is extended with a single VAT Code field on journals, ledger entries and lines (fields such as VAT Code, VAT Number and VAT Base Amount Type on table 81 "Gen. Journal Line" and table 254 "VAT Entry"), proportional deduction on table 325 "VAT Posting Setup", and VAT reporting codes with trade settlement and SAF-T fields on table 344 "VAT Reporting Code". Own codeunits implement SAF-T export (codeunit 10673 "Generate SAF-T File", codeunit 10692 "Generate SAF-T 1.3 File") and electronic VAT return submission (codeunits 10680 to 10691). Learn documents these under Norwegian VAT reporting, Setup and generate SAF-T files, Norwegian VAT Codes and Proportional VAT.

Payments and banking are covered by the Remittance module (objects 15000000 and up), which handles remittance accounts and agreements, payment suggestions, export to bank, return file import, error handling and the Waiting Journal. Vendor, journal and ledger entry tables get remittance, KID and Norges Bank fields. Norway also adds OCR payment import, KID setup on Sales & Receivables Setup, SEPA CT and pain.002/CAMT.054 import, and regulatory reporting codes.

Sales and service e-invoicing supports EHF and PEPPOL BIS 3.0. Customers and sales, reminder and finance charge documents get GLN, Account Code and E-Invoice fields, and own codeunits check and export documents. Other local features are recurring orders from blanket orders, payroll transaction import, and the Application always Allowed setting for applying entries in closed periods.

## Key points

- VAT: one VAT Code field on journals, entries and lines; proportional deduction via Calc. Prop. Deduction VAT and Proportional Deduction VAT % on VAT Posting Setup, with changes in Gen. Jnl.-Post Line and VAT Statement.
- SAF-T: mapping setup, data check, export card and files, supporting versions 1.20 and 1.30 per Learn.
- Electronic VAT return submission through ID-Porten with OAuth 2.0 setup, VAT periods and VAT statement mapping.
- Remittance payments: accounts, agreements, suggestions, test report, bank export (SEPA, Telepay, BBS), return file import and error pages.
- OCR and KID: OCR payment import into the cash receipt journal, OCR Journal - Test report, KID setup on sales documents, giro printing.
- EHF and PEPPOL 3.0 e-invoicing for sales, service, reminders and finance charge memos, using GLN, Account Code and E-Invoice fields and file path setup.
- Recurring orders: recurring groups, blanket order codes and a Create Recurring Orders batch job.
- Payroll import into general journals, and Application always Allowed for closed periods.

Narrative written by Sonnet from the code diff and 42 Learn page summaries. In numbers: Norway (NO) localization of Business Central in BC29: 278 objects of its own, 75 W1 objects changed (240 fields and 5 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 19 | 108 | 94 |
| [Purchases](#purchases) | 9 | 45 | 79 |
| [Sales](#sales) | 33 | 16 | 59 |
| [Service](#service) | 0 | 36 | 0 |
| [EServices](#eservices) | 0 | 35 | 0 |
| [Bank](#bank) | 5 | 9 | 5 |
| [Peppol](#peppol) | 0 | 12 | 0 |
| [Foundation](#foundation) | 4 | 5 | 2 |
| [Security](#security) | 3 | 2 | 1 |
| [Payroll](#payroll) | 0 | 4 | 0 |
| Microsoft | 0 | 3 | 0 |
| (no namespace) | 0 | 2 | 0 |
| [Utilities](#utilities) | 1 | 1 | 0 |
| Upgrade | 1 | 0 | 0 |

### Finance

Adds Norwegian VAT codes, proportional VAT deduction and VAT Code/VAT Number fields on journal lines, VAT entries, G/L accounts and VAT setup. Includes SAF-T export (mapping, data check, export, enums, setup wizard) and electronic VAT return objects. Gen. Jnl.-Post Line and the VAT Statement and VAT settlement reports gain procedures for proportional and non-deductible VAT.

Why: Learn describes proportional VAT for assets used for both deductible and non-deductible purposes, SAF-T files required by Norwegian authorities, and electronic VAT returns sent via ID-Porten.

Objects: [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/325 "VAT Posting Setup"](../objects/table/325.md), [table/344 "VAT Reporting Code"](../objects/table/344.md), [table/254 "VAT Entry"](../objects/table/254.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [codeunit/10673 "Generate SAF-T File"](../objects/codeunit/10673-no.md) (own), [codeunit/10692 "Generate SAF-T 1.3 File"](../objects/codeunit/10692-no.md) (own), [codeunit/10685 "Elec. VAT Submit Return"](../objects/codeunit/10685-no.md) (own).

[All 127 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

The Remittance module for vendor payments: remittance accounts and agreements, payment orders, Waiting Journal, return files and errors, suggestion and export reports. Vendor, vendor template, vendor ledger entry and purchase header tables get remittance, KID and Norges Bank fields. Also local vendor reports.

Why: Learn documents electronic vendor payments through TelePay or Remittance formats, with bank processing and settlement returns.

Objects: [table/23 "Vendor"](../objects/table/23.md), [table/1383 "Vendor Templ."](../objects/table/1383.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/38 "Purchase Header"](../objects/table/38.md), [codeunit/15000002 "Remittance Tools"](../objects/codeunit/15000002-no.md) (own), [codeunit/15000031 "Export Remittance"](../objects/codeunit/15000031-no.md) (own), [report/15000001 "Suggest Remittance Payments"](../objects/report/15000001-no.md) (own), [page/15000002 "Remittance Payment Order"](../objects/page/15000002-no.md) (own).

[All 54 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds GLN, Account Code and E-Invoice fields on customers, sales documents, reminders and finance charge memos, plus KID and e-invoice path fields on Sales & Receivables Setup. PEPPOL codeunits get reminder and finance charge procedures. Recurring orders are added with recurring groups and a batch job.

Why: Learn explains EHF documents for public sector customers and recurring orders created from blanket orders.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/36 "Sales Header"](../objects/table/36.md), [table/18 "Customer"](../objects/table/18.md), [codeunit/1605 "PEPPOL Management"](../objects/codeunit/1605.md), [codeunit/1620 "PEPPOL Validation"](../objects/codeunit/1620.md), [codeunit/392 "Reminder-Make"](../objects/codeunit/392.md), [table/15000300 "Recurring Group"](../objects/table/15000300-no.md) (own), [report/15000300 "Create Recurring Orders"](../objects/report/15000300-no.md) (own).

[All 49 objects of Sales in the diff](?ns=Sales#country-diff)

### Service

Table and page extensions add the Norwegian fields to service headers, lines, invoices, credit memos and archives. Own codeunits handle posting and printing, and local service invoice, credit memo and shipment reports are added.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10650 "Serv. Document Mgt. NO"](../objects/codeunit/10650-no.md) (own), [codeunit/10640 "Serv. Event Subscribers NO"](../objects/codeunit/10640-no.md) (own), [codeunit/10602 "Service Post Print NO"](../objects/codeunit/10602-no.md) (own), [report/10631 "Service - Invoice (NO)"](../objects/report/10631-no.md) (own), [report/10632 "Service - Credit Memo (NO)"](../objects/report/10632-no.md) (own), [report/10613 "Service - Shipment (NO)"](../objects/report/10613-no.md) (own), [tableextension/10602 "Service Header NO"](../objects/tableextension/10602-no.md) (own), [tableextension/10611 "Service Mgt. Setup NO"](../objects/tableextension/10611-no.md) (own).

[All 36 objects of Service in the diff](?ns=Service#country-diff)

### EServices

EHF e-invoicing: check and export codeunits for sales and service invoices, credit memos, reminders and finance charge memos, plus batch reports to create electronic documents. Also OCR setup and OCR payment reports, and an export header/line/transfer file table set.

Why: Learn describes EHF XML files for public sector customers and OCR payment import with KID numbers.

Objects: [codeunit/10610 "E-Invoice Document Encode"](../objects/codeunit/10610-no.md) (own), [codeunit/10619 "E-Invoice Export Sales Invoice"](../objects/codeunit/10619-no.md) (own), [codeunit/10628 "E-Invoice Export Common"](../objects/codeunit/10628-no.md) (own), [codeunit/10629 "E-Invoice Check Common"](../objects/codeunit/10629-no.md) (own), [report/10640 "Create Electronic Invoices"](../objects/report/10640-no.md) (own), [table/10604 "E-Invoice Export Header"](../objects/table/10604-no.md) (own), [page/15000100 "OCR Setup"](../objects/page/15000100-no.md) (own), [report/15000100 "OCR Journal - Test"](../objects/report/15000100-no.md) (own).

[All 35 objects of EServices in the diff](?ns=EServices#country-diff)

### Bank

Extends SEPA credit transfer export with Norwegian handling (events and procedures to move lines to the Waiting Journal), adds regulatory reporting codes with a threshold amount, and imports pain.002 and CAMT.054 files.

Why: Learn documents bank export to SEPA, Telepay and BBS formats.

Objects: [codeunit/1221 "SEPA CT-Fill Export Buffer"](../objects/codeunit/1221.md), [table/1226 "Payment Export Data"](../objects/table/1226.md), [table/1200 "Bank Export/Import Setup"](../objects/table/1200.md), [table/10607 "Regulatory Reporting Code"](../objects/table/10607-no.md) (own), [codeunit/10636 "Import Pain002"](../objects/codeunit/10636-no.md) (own), [codeunit/10637 "Import CAMT054"](../objects/codeunit/10637-no.md) (own), [codeunit/10638 "Norge SEPA CC-Export File"](../objects/codeunit/10638-no.md) (own), [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md).

[All 14 objects of Bank in the diff](?ns=Bank#country-diff)

### Peppol

Adds the Norwegian PEPPOL 3.0 format, with management, payment and subscriber codeunits, export codeunits for sales and service documents, and invoice and credit memo XMLports.

Why: Learn covers PEPPOL BIS Billing 3.0 and the E-Documents framework for Norwegian e-invoicing.

Objects: [codeunit/37350 "PEPPOL30 NO Management"](../objects/codeunit/37350-no.md) (own), [codeunit/37351 "PEPPOL30 NO Subscribers"](../objects/codeunit/37351-no.md) (own), [enumextension/37350 "PEPPOL 3.0 Format NO"](../objects/enumextension/37350-no.md) (own), [xmlport/37355 "Sales Invoice - PEPPOL30 NO"](../objects/xmlport/37355-no.md) (own), [xmlport/37356 "Sales Cr.Memo - PEPPOL30 NO"](../objects/xmlport/37356-no.md) (own), [codeunit/37357 "Exp. Sales Inv. PEPPOL30 NO"](../objects/codeunit/37357-no.md) (own), [codeunit/37358 "Exp. Sales CrM. PEPPOL30 NO"](../objects/codeunit/37358-no.md) (own).

[All 12 objects of Peppol in the diff](?ns=Peppol#country-diff)

### Foundation

Company Information gets an enterprise register field and classification procedure. Document-Print and Report Selection Usage gain Norwegian sales order printing, and Company-Initialize provides the Norwegian SEPA CT code. SAF-T extensions hold source code and company contact data.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md), [enum/77 "Report Selection Usage"](../objects/enum/77.md), [tableextension/10680 "SAF-T Source Code"](../objects/tableextension/10680-no.md) (own), [tableextension/10684 "SAF-T Company Contact"](../objects/tableextension/10684-no.md) (own).

[All 9 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Security

Adds the Application always Allowed setting to User Setup, extends the LOCAL and LOCAL READ permission sets, and extends the electronic VAT OAuth 2.0 setup.

Why: Learn describes Application always Allowed for applying entries outside the allowed posting period.

Objects: [table/91 "User Setup"](../objects/table/91.md), [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [tableextension/10688 "Elec. VAT OAuth 2.0. Setup"](../objects/tableextension/10688-no.md) (own), [pageextension/10698 "Electronic VAT OAuth 2.0 Setup"](../objects/pageextension/10698-no.md) (own).

[All 5 objects of Security in the diff](?ns=Security#country-diff)

### Payroll

Payroll integration codeunit and general journal extensions for importing payroll transactions into journals.

Why: Learn describes importing payroll from Huldt & Lillevik Lønn and Visma via Payroll Data Definitions.

Objects: [codeunit/10609 "Payroll Integration (NO)"](../objects/codeunit/10609-no.md) (own), [pageextension/10609 "NO General Journal"](../objects/pageextension/10609-no.md) (own), [pageextension/10610 "NO General Journal Setup"](../objects/pageextension/10610-no.md) (own), [tableextension/10609 "ImportDimCodes"](../objects/tableextension/10609-no.md) (own).

[All 4 objects of Payroll in the diff](?ns=Payroll#country-diff)

### Utilities

DocumentTools helper codeunit, and data classification of SAF-T data.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10601 "DocumentTools"](../objects/codeunit/10601-no.md) (own), [codeunit/1752 "Data Class. Eval. Data Country"](../objects/codeunit/1752.md).

[All 2 objects of Utilities in the diff](?ns=Utilities#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md) | +2 procedures |
| [codeunit/11 "Gen. Jnl.-Check Line"](../objects/codeunit/11.md) | +1 procedures |
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +6 procedures |
| [codeunit/229 "Document-Print"](../objects/codeunit/229.md) | +2 procedures |
| [codeunit/392 "Reminder-Make"](../objects/codeunit/392.md) | +3 procedures |
| [codeunit/1221 "SEPA CT-Fill Export Buffer"](../objects/codeunit/1221.md) | +2 events, +4 procedures |
| [codeunit/1605 "PEPPOL Management"](../objects/codeunit/1605.md) | +1 events, +11 procedures |
| [codeunit/1620 "PEPPOL Validation"](../objects/codeunit/1620.md) | +3 procedures |
| [codeunit/1752 "Data Class. Eval. Data Country"](../objects/codeunit/1752.md) | +1 procedures |
| [codeunit/104000 "Upgrade - BaseApp"](../objects/codeunit/104000.md) | body changes only |
| [enum/77 "Report Selection Usage"](../objects/enum/77.md) | body changes only |
| [enum/306 "Report Selection Usage Sales"](../objects/enum/306.md) | body changes only |
| [page/42 "Sales Order"](../objects/page/42.md) | +2 procedures |
| [page/43 "Sales Invoice"](../objects/page/43.md) | +1 procedures |
| [page/44 "Sales Credit Memo"](../objects/page/44.md) | +2 procedures |
| [page/255 "Cash Receipt Journal"](../objects/page/255.md) | +1 events |
| [page/256 "Payment Journal"](../objects/page/256.md) | +1 events |
| [page/435 "Reminder Lines"](../objects/page/435.md) | +1 procedures |
| [page/447 "Finance Charge Memo Lines"](../objects/page/447.md) | +1 procedures |
| [page/507 "Blanket Sales Order"](../objects/page/507.md) | +1 procedures |
| [page/6630 "Sales Return Order"](../objects/page/6630.md) | +2 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/3 "G/L Register"](../objects/report/3.md) | body changes only |
| [report/12 "VAT Statement"](../objects/report/12.md) | +3 procedures |
| [report/20 "Calc. and Post VAT Settlement"](../objects/report/20.md) | +1 procedures |
| [report/117 "Reminder"](../objects/report/117.md) | 1 properties |
| [report/118 "Finance Charge Memo"](../objects/report/118.md) | 2 properties |
| [table/4 "Currency"](../objects/table/4.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +2 fields |
| [table/18 "Customer"](../objects/table/18.md) | +2 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +32 fields |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +4 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +5 fields |
| [table/37 "Sales Line"](../objects/table/37.md) | +3 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +3 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +2 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +2 fields, 3 fields changed, +1 procedures |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +33 fields, +1 procedures |
| [table/91 "User Setup"](../objects/table/91.md) | +1 fields |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +2 fields |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +1 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +4 fields |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +3 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +4 fields, +1 procedures |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +3 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +1 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +2 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +2 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +33 fields |
| [table/189 "VAT Setup"](../objects/table/189.md) | 1 fields changed |
| [table/254 "VAT Entry"](../objects/table/254.md) | +3 fields |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +2 fields |
| [table/295 "Reminder Header"](../objects/table/295.md) | +3 fields, +2 procedures |
| [table/296 "Reminder Line"](../objects/table/296.md) | +1 fields |
| [table/297 "Issued Reminder Header"](../objects/table/297.md) | +4 fields, +1 procedures |
| [table/298 "Issued Reminder Line"](../objects/table/298.md) | +1 fields |
| [table/302 "Finance Charge Memo Header"](../objects/table/302.md) | +3 fields, +2 procedures |
| [table/303 "Finance Charge Memo Line"](../objects/table/303.md) | +1 fields |
| [table/304 "Issued Fin. Charge Memo Header"](../objects/table/304.md) | +4 fields, +1 procedures |
| [table/305 "Issued Fin. Charge Memo Line"](../objects/table/305.md) | +1 fields |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +10 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +1 fields |
| [table/324 "VAT Product Posting Group"](../objects/table/324.md) | +1 fields |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +8 fields, 2 fields changed |
| [table/344 "VAT Reporting Code"](../objects/table/344.md) | +7 fields |
| [table/742 "VAT Statement Report Line"](../objects/table/742.md) | +2 fields |
| [table/1200 "Bank Export/Import Setup"](../objects/table/1200.md) | +1 fields |
| [table/1226 "Payment Export Data"](../objects/table/1226.md) | +4 fields, 1 fields changed |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +2 fields, 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +32 fields, 1 fields changed |
| [table/5107 "Sales Header Archive"](../objects/table/5107.md) | +3 fields |
| [table/5108 "Sales Line Archive"](../objects/table/5108.md) | +1 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | +1 procedures |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | +1 procedures |

## Objects of its own

278 objects only this country has.

- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-no.md)
- [codeunit/10600 "Norwegian VAT Tools"](../objects/codeunit/10600-no.md)
- [codeunit/10601 "DocumentTools"](../objects/codeunit/10601-no.md)
- [codeunit/10602 "Service Post Print NO"](../objects/codeunit/10602-no.md)
- [codeunit/10603 "Serv. Report Selection Mgt. NO"](../objects/codeunit/10603-no.md)
- [codeunit/10609 "Payroll Integration (NO)"](../objects/codeunit/10609-no.md)
- [codeunit/10610 "E-Invoice Document Encode"](../objects/codeunit/10610-no.md)
- [codeunit/10613 "E-Invoice Check Fin. Chrg.Memo"](../objects/codeunit/10613-no.md)
- [codeunit/10614 "E-Invoice Check Reminder"](../objects/codeunit/10614-no.md)
- [codeunit/10615 "E-Invoice Check Sales Invoice"](../objects/codeunit/10615-no.md)
- [codeunit/10616 "E-Invoice Check Sales Cr. Memo"](../objects/codeunit/10616-no.md)
- [codeunit/10617 "E-Invoice Check Iss. Fin.Chrg."](../objects/codeunit/10617-no.md)
- [codeunit/10618 "E-Invoice Check Iss. Reminder"](../objects/codeunit/10618-no.md)
- [codeunit/10619 "E-Invoice Export Sales Invoice"](../objects/codeunit/10619-no.md)
- [codeunit/10620 "E-Invoice Exp. Sales Cr. Memo"](../objects/codeunit/10620-no.md)
- [codeunit/10621 "E-Invoice Exp. Iss. Fin. Chrg."](../objects/codeunit/10621-no.md)
- [codeunit/10622 "E-Invoice Export Iss. Reminder"](../objects/codeunit/10622-no.md)
- [codeunit/10623 "E-Invoice Check Serv. Document"](../objects/codeunit/10623-no.md)
- [codeunit/10624 "E-Invoice Check Serv. Invoice"](../objects/codeunit/10624-no.md)
- [codeunit/10625 "E-Invoice Check Serv. Cr. Memo"](../objects/codeunit/10625-no.md)
- [codeunit/10626 "E-Invoice Export Serv. Invoice"](../objects/codeunit/10626-no.md)
- [codeunit/10627 "E-Invoice Exp. Serv. Cr. Memo"](../objects/codeunit/10627-no.md)
- [codeunit/10628 "E-Invoice Export Common"](../objects/codeunit/10628-no.md)
- [codeunit/10629 "E-Invoice Check Common"](../objects/codeunit/10629-no.md)
- [codeunit/10630 "Export EHF Reminder"](../objects/codeunit/10630-no.md)
- [codeunit/10635 "Import SEPA Common"](../objects/codeunit/10635-no.md)
- [codeunit/10636 "Import Pain002"](../objects/codeunit/10636-no.md)
- [codeunit/10637 "Import CAMT054"](../objects/codeunit/10637-no.md)
- [codeunit/10638 "Norge SEPA CC-Export File"](../objects/codeunit/10638-no.md)
- [codeunit/10640 "Serv. Event Subscribers NO"](../objects/codeunit/10640-no.md)
- [codeunit/10650 "Serv. Document Mgt. NO"](../objects/codeunit/10650-no.md)
- [codeunit/10670 "SAF-T Installation"](../objects/codeunit/10670-no.md)
- [codeunit/10671 "SAF-T XML Import"](../objects/codeunit/10671-no.md)
- [codeunit/10672 "SAF-T Mapping Helper"](../objects/codeunit/10672-no.md)
- [codeunit/10673 "Generate SAF-T File"](../objects/codeunit/10673-no.md)
- [codeunit/10674 "SAF-T XML Helper"](../objects/codeunit/10674-no.md)
- [codeunit/10675 "SAF-T Export Mgt."](../objects/codeunit/10675-no.md)
- [codeunit/10676 "SAF-T Export Error Handler"](../objects/codeunit/10676-no.md)
- [codeunit/10677 "SAF-T Export Check"](../objects/codeunit/10677-no.md)
- [codeunit/10678 "SAF-T Upgrade"](../objects/codeunit/10678-no.md)
- [codeunit/10679 "SAF-T Data Check"](../objects/codeunit/10679-no.md)
- [codeunit/10680 "Elec. VAT OAuth Mgt."](../objects/codeunit/10680-no.md)
- [codeunit/10681 "Electronic VAT Installation"](../objects/codeunit/10681-no.md)
- [codeunit/10682 "SAF-T Subscribers"](../objects/codeunit/10682-no.md)
- [codeunit/10683 "Elec. VAT Data Mgt."](../objects/codeunit/10683-no.md)
- [codeunit/10684 "Elec. VAT Create Content"](../objects/codeunit/10684-no.md)
- [codeunit/10685 "Elec. VAT Submit Return"](../objects/codeunit/10685-no.md)
- [codeunit/10686 "Elec. VAT Validate Return"](../objects/codeunit/10686-no.md)
- [codeunit/10687 "Elec. VAT Connection Mgt."](../objects/codeunit/10687-no.md)
- [codeunit/10688 "Elec. VAT Logging Mgt."](../objects/codeunit/10688-no.md)
- [codeunit/10689 "Elec. VAT XML Helper"](../objects/codeunit/10689-no.md)
- [codeunit/10690 "Elec. VAT Get Response"](../objects/codeunit/10690-no.md)
- [codeunit/10691 "Elec. VAT Upgrade"](../objects/codeunit/10691-no.md)
- [codeunit/10692 "Generate SAF-T 1.3 File"](../objects/codeunit/10692-no.md)
- [codeunit/37350 "PEPPOL30 NO Management"](../objects/codeunit/37350-no.md)
- [codeunit/37351 "PEPPOL30 NO Subscribers"](../objects/codeunit/37351-no.md)
- [codeunit/37352 "PEPPOL30 NO Install"](../objects/codeunit/37352-no.md)
- [codeunit/37353 "PEPPOL30 NO Upgrade"](../objects/codeunit/37353-no.md)
- [codeunit/37354 "PEPPOL30 NO Payment"](../objects/codeunit/37354-no.md)
- [codeunit/37357 "Exp. Sales Inv. PEPPOL30 NO"](../objects/codeunit/37357-no.md)
- [codeunit/37358 "Exp. Sales CrM. PEPPOL30 NO"](../objects/codeunit/37358-no.md)
- [codeunit/37359 "Exp. Serv.Inv. PEPPOL30 NO"](../objects/codeunit/37359-no.md)
- [codeunit/37360 "Exp. Serv.CrM. PEPPOL30 NO"](../objects/codeunit/37360-no.md)
- [codeunit/15000000 "Reset Remittance Payment Order"](../objects/codeunit/15000000-no.md)
- [codeunit/15000001 "Remitt. journal - Check line"](../objects/codeunit/15000001-no.md)
- [codeunit/15000002 "Remittance Tools"](../objects/codeunit/15000002-no.md)
- [codeunit/15000003 "Print payment overview"](../objects/codeunit/15000003-no.md)
- [codeunit/15000031 "Export Remittance"](../objects/codeunit/15000031-no.md)
- [codeunit/15000210 "TestEmpolyees1-49"](../objects/codeunit/15000210-no.md)
- [codeunit/15000220 "TestEmpolyees50-199"](../objects/codeunit/15000220-no.md)
- [codeunit/15000230 "TestEmpolyeesUnlimited"](../objects/codeunit/15000230-no.md)
- [codeunit/15000300 "Repeating Order to Order"](../objects/codeunit/15000300-no.md)
- [enum/10670 "SAF-T Mapping Type"](../objects/enum/10670-no.md)
- [enum/10671 "SAF-T Mapping Range"](../objects/enum/10671-no.md)
- [enum/10672 "SAF-T Mapping Source Type"](../objects/enum/10672-no.md)
- [enum/10673 "SAF-T Data Check status"](../objects/enum/10673-no.md)
- [enum/10674 "SAF-T Version"](../objects/enum/10674-no.md)
- [enumextension/37350 "PEPPOL 3.0 Format NO"](../objects/enumextension/37350-no.md)
- [page/10601 "Settled VAT Periods"](../objects/page/10601-no.md)
- [page/10604 "VAT Periods"](../objects/page/10604-no.md)
- [page/10607 "Regulatory Reporting Codes"](../objects/page/10607-no.md)
- [page/10608 "Gen. Jnl. Line Reg. Rep. Codes"](../objects/page/10608-no.md)
- [page/10670 "SAF-T Mapping Setup Card"](../objects/page/10670-no.md)
- [page/10671 "SAF-T Std. Account Categories"](../objects/page/10671-no.md)
- [page/10672 "SAF-T Grouping Categories"](../objects/page/10672-no.md)
- [page/10673 "SAF-T Groupings"](../objects/page/10673-no.md)
- [page/10674 "SAF-T Setup Wizard"](../objects/page/10674-no.md)
- [page/10675 "SAF-T Standard Accounts"](../objects/page/10675-no.md)
- [page/10677 "SAF-T G/L Mapping Subpage"](../objects/page/10677-no.md)
- [page/10678 "SAF-T VAT Posting Setup"](../objects/page/10678-no.md)
- [page/10679 "SAF-T Mapping Setup"](../objects/page/10679-no.md)
- [page/10680 "SAF-T Mapping Source"](../objects/page/10680-no.md)
- [page/10685 "SAF-T Source Codes"](../objects/page/10685-no.md)
- [page/10686 "SAF-T Exports"](../objects/page/10686-no.md)
- [page/10687 "SAF-T Export Card"](../objects/page/10687-no.md)
- [page/10688 "SAF-T Export Subpage"](../objects/page/10688-no.md)
- [page/10689 "SAF-T Data Check"](../objects/page/10689-no.md)
- [page/10690 "SAF-T Setup"](../objects/page/10690-no.md)
- [page/10691 "SAF-T Export Files"](../objects/page/10691-no.md)
- [page/10692 "Electronic VAT Setup Card"](../objects/page/10692-no.md)
- [page/10696 "Elec. VAT Submission Wizard"](../objects/page/10696-no.md)
- [page/10697 "VAT Specifications"](../objects/page/10697-no.md)
- [page/10698 "VAT Notes"](../objects/page/10698-no.md)
- [page/15000000 "Remittance Info"](../objects/page/15000000-no.md)
- [page/15000001 "Payment Info"](../objects/page/15000001-no.md)
- [page/15000002 "Remittance Payment Order"](../objects/page/15000002-no.md)
- [page/15000003 "Payment Order Data"](../objects/page/15000003-no.md)
- [page/15000004 "Remittance Account Card"](../objects/page/15000004-no.md)
- [page/15000005 "Waiting Journal"](../objects/page/15000005-no.md)
- [page/15000006 "Remittance Account Overview"](../objects/page/15000006-no.md)
- [page/15000007 "Remittance Agreement Card"](../objects/page/15000007-no.md)
- [page/15000008 "Return Files"](../objects/page/15000008-no.md)
- [page/15000009 "Return File Setup List"](../objects/page/15000009-no.md)
- [page/15000010 "Remittance Agreement Overview"](../objects/page/15000010-no.md)
- [page/15000011 "Settlement Info"](../objects/page/15000011-no.md)
- [page/15000012 "Payment Order - Settl. Status"](../objects/page/15000012-no.md)
- [page/15000013 "Return Error"](../objects/page/15000013-no.md)
- [page/15000027 "Payment Type Codes Abroad"](../objects/page/15000027-no.md)
- [page/15000100 "OCR Setup"](../objects/page/15000100-no.md)
- [page/15000101 "OCR Return Info"](../objects/page/15000101-no.md)
- [page/15000300 "Recurring Groups Card"](../objects/page/15000300-no.md)
- [page/15000301 "Recurring Group Overview"](../objects/page/15000301-no.md)
- [page/15000302 "Recurring Entries"](../objects/page/15000302-no.md)
- [page/15000303 "Recurring Orders Overview"](../objects/page/15000303-no.md)
- [pageextension/10600 "Service Quote Archive NO"](../objects/pageextension/10600-no.md)
- [pageextension/10601 "Service Quote Archives NO"](../objects/pageextension/10601-no.md)
- [pageextension/10602 "Service Order Archive NO"](../objects/pageextension/10602-no.md)
- [pageextension/10603 "Service Order Archives NO"](../objects/pageextension/10603-no.md)
- [pageextension/10604 "Service Quote Archive Lines NO"](../objects/pageextension/10604-no.md)
- [pageextension/10605 "Service Order Archive Lines NO"](../objects/pageextension/10605-no.md)
- [pageextension/10606 "Service List Archive NO"](../objects/pageextension/10606-no.md)
- [pageextension/10607 "Service Credit Memo NO"](../objects/pageextension/10607-no.md)
- [pageextension/10608 "Service Invoice NO"](../objects/pageextension/10608-no.md)
- [pageextension/10609 "NO General Journal"](../objects/pageextension/10609-no.md)
- [pageextension/10610 "NO General Journal Setup"](../objects/pageextension/10610-no.md)
- [pageextension/10611 "Service Credit Memo Subform NO"](../objects/pageextension/10611-no.md)
- [pageextension/10612 "Service Invoice Subform NO"](../objects/pageextension/10612-no.md)
- [pageextension/10613 "ServiceItemWorksheet Subf. NO"](../objects/pageextension/10613-no.md)
- [pageextension/10614 "Service Lines NO"](../objects/pageextension/10614-no.md)
- [pageextension/10615 "Posted Serv. Cr. Memo Subf. NO"](../objects/pageextension/10615-no.md)
- [pageextension/10616 "Posted Service Credit Memo NO"](../objects/pageextension/10616-no.md)
- [pageextension/10617 "Posted Service Credit Memos NO"](../objects/pageextension/10617-no.md)
- [pageextension/10618 "Posted Service Invoice NO"](../objects/pageextension/10618-no.md)
- [pageextension/10619 "Posted Service Invoices NO"](../objects/pageextension/10619-no.md)
- [pageextension/10620 "Posted ServiceInvoice Subf. NO"](../objects/pageextension/10620-no.md)
- [pageextension/10621 "Service Mgt. Setup NO"](../objects/pageextension/10621-no.md)
- [pageextension/10622 "Service Order NO"](../objects/pageextension/10622-no.md)
- [pageextension/10677 "SAF-T VAT Reporting Code"](../objects/pageextension/10677-no.md)
- [pageextension/10681 "SAF-T Analysis"](../objects/pageextension/10681-no.md)
- [pageextension/10682 "SAF-T Tax Setup List"](../objects/pageextension/10682-no.md)
- [pageextension/10683 "SAF-T Tax Setup Card"](../objects/pageextension/10683-no.md)
- [pageextension/10684 "SAF-T Source Codes"](../objects/pageextension/10684-no.md)
- [pageextension/10686 "Elec. VAT Reporting Codes"](../objects/pageextension/10686-no.md)
- [pageextension/10689 "SAF-T Company Contact"](../objects/pageextension/10689-no.md)
- [pageextension/10691 "SAF-T Customer Card"](../objects/pageextension/10691-no.md)
- [pageextension/10692 "SAF-T Vendor Card"](../objects/pageextension/10692-no.md)
- [pageextension/10693 "SAF-T Bank Account Card"](../objects/pageextension/10693-no.md)
- [pageextension/10694 "SAF-T Cust. Bank Account Card"](../objects/pageextension/10694-no.md)
- [pageextension/10695 "SAF-T Vend. Bank Account Card"](../objects/pageextension/10695-no.md)
- [pageextension/10697 "Elec. VAT Report"](../objects/pageextension/10697-no.md)
- [pageextension/10698 "Electronic VAT OAuth 2.0 Setup"](../objects/pageextension/10698-no.md)
- [permissionset/10681 "Elec. VAT - Read"](../objects/permissionset/10681-no.md)
- [permissionset/10682 "Elec. VAT - Edit"](../objects/permissionset/10682-no.md)
- [permissionsetextension/6342 "D365 FULL ACCESS - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/6342-no.md)
- [permissionsetextension/10683 "D365 BASIC ISV - Electronic VAT Submission"](../objects/permissionsetextension/10683-no.md)
- [permissionsetextension/10684 "D365 BASIC - Electronic VAT Submission"](../objects/permissionsetextension/10684-no.md)
- [permissionsetextension/10685 "D365 READ - Electronic VAT Submission"](../objects/permissionsetextension/10685-no.md)
- [permissionsetextension/10686 "D365 TEAM MEMBER - Electronic VAT Submission"](../objects/permissionsetextension/10686-no.md)
- [permissionsetextension/10687 "INTELLIGENT CLOUD - Electronic VAT Submission"](../objects/permissionsetextension/10687-no.md)
- [permissionsetextension/10688 "LOCAL - Electronic VAT Submission"](../objects/permissionsetextension/10688-no.md)
- [permissionsetextension/16345 "D365 BASIC ISV - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/16345-no.md)
- [permissionsetextension/17471 "INTELLIGENT CLOUD - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/17471-no.md)
- [permissionsetextension/20604 "D365 TEAM MEMBER - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/20604-no.md)
- [permissionsetextension/32369 "D365 BUS PREMIUM - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/32369-no.md)
- [permissionsetextension/34688 "D365 BUS FULL ACCESS - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/34688-no.md)
- [permissionsetextension/44314 "D365 READ - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/44314-no.md)
- [permissionsetextension/49778 "D365 BASIC - Standard Audit File - Tax Localization for Norway"](../objects/permissionsetextension/49778-no.md)
- [query/10670 "SAF-T G/L Entry By Trans."](../objects/query/10670-no.md)
- [report/10601 "Trial Balance/Previous Period"](../objects/report/10601-no.md)
- [report/10602 "Trade Settlement"](../objects/report/10602-no.md)
- [report/10603 "G/L Register Customer/Vendor"](../objects/report/10603-no.md)
- [report/10606 "Sales Order Picking List"](../objects/report/10606-no.md)
- [report/10608 "Customer - Balance"](../objects/report/10608-no.md)
- [report/10609 "Vendor - Balance"](../objects/report/10609-no.md)
- [report/10610 "Customer - Collection List"](../objects/report/10610-no.md)
- [report/10611 "Customer - Address List"](../objects/report/10611-no.md)
- [report/10612 "Vendor - Address List"](../objects/report/10612-no.md)
- [report/10613 "Service - Shipment (NO)"](../objects/report/10613-no.md)
- [report/10614 "Cust. Ledger Entries on Hold"](../objects/report/10614-no.md)
- [report/10616 "Customer - Open Entries"](../objects/report/10616-no.md)
- [report/10617 "Vendor - Open Entries"](../objects/report/10617-no.md)
- [report/10618 "Trade Settlement 2017"](../objects/report/10618-no.md)
- [report/10630 "VAT Reconciliation"](../objects/report/10630-no.md)
- [report/10631 "Service - Invoice (NO)"](../objects/report/10631-no.md)
- [report/10632 "Service - Credit Memo (NO)"](../objects/report/10632-no.md)
- [report/10640 "Create Electronic Invoices"](../objects/report/10640-no.md)
- [report/10641 "Create Electronic Credit Memos"](../objects/report/10641-no.md)
- [report/10642 "Create Electronic Reminders"](../objects/report/10642-no.md)
- [report/10643 "Create Elec. Fin. Chrg. Memos"](../objects/report/10643-no.md)
- [report/10644 "Create Elec. Service Invoices"](../objects/report/10644-no.md)
- [report/10645 "Create Elec. Service Cr. Memos"](../objects/report/10645-no.md)
- [report/10671 "SAF-T Copy Mapping"](../objects/report/10671-no.md)
- [report/15000000 "Rem. paym. order - man. export"](../objects/report/15000000-no.md)
- [report/15000001 "Suggest Remittance Payments"](../objects/report/15000001-no.md)
- [report/15000002 "Remittance Test Report"](../objects/report/15000002-no.md)
- [report/15000003 "Rem. payment order - Import"](../objects/report/15000003-no.md)
- [report/15000004 "Delete rem. payment order"](../objects/report/15000004-no.md)
- [report/15000005 "Waiting Jnl - paym. overview"](../objects/report/15000005-no.md)
- [report/15000006 "Rem. payment order status"](../objects/report/15000006-no.md)
- [report/15000050 "Remittance - export (Bank)"](../objects/report/15000050-no.md)
- [report/15000060 "Remittance - export (BBS)"](../objects/report/15000060-no.md)
- [report/15000061 "Rem. Payment Order - Export"](../objects/report/15000061-no.md)
- [report/15000062 "Remittance - Import (Bank)"](../objects/report/15000062-no.md)
- [report/15000063 "Remittance - Import (BBS)"](../objects/report/15000063-no.md)
- [report/15000064 "OCR Payment - BBS"](../objects/report/15000064-no.md)
- [report/15000065 "OCR Payment - Data Dialog"](../objects/report/15000065-no.md)
- [report/15000100 "OCR Journal - Test"](../objects/report/15000100-no.md)
- [report/15000300 "Create Recurring Orders"](../objects/report/15000300-no.md)
- [table/10601 "Settled VAT Period"](../objects/table/10601-no.md)
- [table/10602 "VAT Code"](../objects/table/10602-no.md)
- [table/10603 "VAT Period"](../objects/table/10603-no.md)
- [table/10604 "E-Invoice Export Header"](../objects/table/10604-no.md)
- [table/10605 "E-Invoice Export Line"](../objects/table/10605-no.md)
- [table/10606 "E-Invoice Transfer File"](../objects/table/10606-no.md)
- [table/10607 "Regulatory Reporting Code"](../objects/table/10607-no.md)
- [table/10608 "Gen. Jnl. Line Reg. Rep. Code"](../objects/table/10608-no.md)
- [table/10670 "SAF-T Setup"](../objects/table/10670-no.md)
- [table/10671 "SAF-T Mapping Category"](../objects/table/10671-no.md)
- [table/10672 "SAF-T Mapping"](../objects/table/10672-no.md)
- [table/10673 "SAF-T Export Setup"](../objects/table/10673-no.md)
- [table/10674 "SAF-T G/L Account Mapping"](../objects/table/10674-no.md)
- [table/10676 "SAF-T Mapping Range"](../objects/table/10676-no.md)
- [table/10677 "SAF-T Mapping Source"](../objects/table/10677-no.md)
- [table/10681 "SAF-T Source Code"](../objects/table/10681-no.md)
- [table/10682 "SAF-T Export Header"](../objects/table/10682-no.md)
- [table/10683 "SAF-T Export Line"](../objects/table/10683-no.md)
- [table/10684 "SAF-T Missing Field"](../objects/table/10684-no.md)
- [table/10685 "SAF-T Export File"](../objects/table/10685-no.md)
- [table/10686 "Elec. VAT Setup"](../objects/table/10686-no.md)
- [table/10687 "VAT Specification"](../objects/table/10687-no.md)
- [table/10688 "VAT Note"](../objects/table/10688-no.md)
- [table/15000000 "Remittance Agreement"](../objects/table/15000000-no.md)
- [table/15000001 "Remittance Payment Order"](../objects/table/15000001-no.md)
- [table/15000002 "Payment Order Data"](../objects/table/15000002-no.md)
- [table/15000003 "Remittance Account"](../objects/table/15000003-no.md)
- [table/15000004 "Waiting Journal"](../objects/table/15000004-no.md)
- [table/15000005 "Return File"](../objects/table/15000005-no.md)
- [table/15000006 "Return File Setup"](../objects/table/15000006-no.md)
- [table/15000007 "Return Error"](../objects/table/15000007-no.md)
- [table/15000027 "Payment Type Code Abroad"](../objects/table/15000027-no.md)
- [table/15000100 "OCR Setup"](../objects/table/15000100-no.md)
- [table/15000300 "Recurring Group"](../objects/table/15000300-no.md)
- [table/15000301 "Recurring Post"](../objects/table/15000301-no.md)
- [tableextension/10600 "Service Header Archive NO"](../objects/tableextension/10600-no.md)
- [tableextension/10601 "Service Line Archive NO"](../objects/tableextension/10601-no.md)
- [tableextension/10602 "Service Header NO"](../objects/tableextension/10602-no.md)
- [tableextension/10603 "Service Line NO"](../objects/tableextension/10603-no.md)
- [tableextension/10607 "Service Cr.Memo Header NO"](../objects/tableextension/10607-no.md)
- [tableextension/10608 "Service Cr.Memo Line NO"](../objects/tableextension/10608-no.md)
- [tableextension/10609 "ImportDimCodes"](../objects/tableextension/10609-no.md)
- [tableextension/10610 "Service Invoice Line NO"](../objects/tableextension/10610-no.md)
- [tableextension/10611 "Service Mgt. Setup NO"](../objects/tableextension/10611-no.md)
- [tableextension/10612 "Service Invoice Header NO"](../objects/tableextension/10612-no.md)
- [tableextension/10675 "SAF-T VAT Code"](../objects/tableextension/10675-no.md)
- [tableextension/10676 "SAF-T VAT Reporting Code"](../objects/tableextension/10676-no.md)
- [tableextension/10678 "SAF-T Analysis"](../objects/tableextension/10678-no.md)
- [tableextension/10679 "SAF-T Tax Setup"](../objects/tableextension/10679-no.md)
- [tableextension/10680 "SAF-T Source Code"](../objects/tableextension/10680-no.md)
- [tableextension/10684 "SAF-T Company Contact"](../objects/tableextension/10684-no.md)
- [tableextension/10686 "Elec. VAT Reporting Code"](../objects/tableextension/10686-no.md)
- [tableextension/10687 "Elec. VAT Code"](../objects/tableextension/10687-no.md)
- [tableextension/10688 "Elec. VAT OAuth 2.0. Setup"](../objects/tableextension/10688-no.md)
- [tableextension/10689 "Elec. VAT Posting Setup"](../objects/tableextension/10689-no.md)
- [tableextension/10690 "Elec. VAT Report Header"](../objects/tableextension/10690-no.md)
- [xmlport/10601 "EHF Reminder 3.0"](../objects/xmlport/10601-no.md)
- [xmlport/10618 "Trade Settlement 2017"](../objects/xmlport/10618-no.md)
- [xmlport/37355 "Sales Invoice - PEPPOL30 NO"](../objects/xmlport/37355-no.md)
- [xmlport/37356 "Sales Cr.Memo - PEPPOL30 NO"](../objects/xmlport/37356-no.md)

## Other versions

- BC30: 353 objects differ from W1 (240 fields, 5 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
