---
id: localization/no
type: localization
title: Norway (NO)
summary: Norway (NO) localization of Business Central 29. It covers remittance payments to vendors (Telepay, BBS, SEPA), OCR and KID for customer payments, EHF e-invoicing, Norwegian VAT codes with proportional deduction and trade settlement reporting, recurring orders, and SAF-T. Use it for questions on how Norway differs from W1.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 12e73606457c4bb81b7daac96ba238dfefb7809efbe28e6ef375244db82bb786
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-no
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
added_objects: 159
replaced_objects: 75
removed_objects: 0
added_fields: 240
added_events: 5
learn_folder: LocalFunctionality/Norway
---

# Norway (NO)

> Norway (NO) localization of Business Central 29. It covers remittance payments to vendors (Telepay, BBS, SEPA), OCR and KID for customer payments, EHF e-invoicing, Norwegian VAT codes with proportional deduction and trade settlement reporting, recurring orders, and SAF-T. Use it for questions on how Norway differs from W1.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/norway.md) · narrative **unreviewed** (machine-written)

## Overview

The Norwegian layer adds a large remittance module (objects in the 15000000 range) for electronic vendor payments. It has remittance agreements and accounts, payment orders, a waiting journal, return files and error pages, plus export and import reports for bank and BBS formats. Vendor, vendor template, journal and ledger tables get fields such as Remittance Account Code, KID, recipient references and payment type codes. Learn documents setup, suggestions, export, return import, cancellation and error codes.

On the receivables side the code adds KID setup fields to Sales & Receivables Setup, OCR payment import (OCR Setup, OCR journal test report) and EHF e-invoicing. EHF uses GLN, Account Code and E-Invoice fields on customers and sales, reminder and finance charge documents. Dedicated check and export codeunits cover sales, service, reminder and finance charge documents, and PEPPOL Management and Validation are extended for reminders and finance charge memos. Recurring groups and a Create Recurring Orders batch job generate sales orders from blanket orders.

For VAT, the layer adds VAT Code and VAT Number fields across ledger, journal and document tables, VAT periods, specifications and notes, proportional deduction in posting, and Trade Settlement 2017 and VAT Reconciliation reports. VAT Reporting Code carries a SAF-T VAT Code, which supports SAF-T generation. Service management receives page and table extensions with NO suffixes, and Norwegian service invoice and credit memo reports.

## Key points

- Remittance payments: agreements, accounts, payment orders, waiting journal, return files, errors, with Telepay, BBS and SEPA export
- KID numbers and OCR payment import into the cash receipt journal, with OCR Journal - Test report
- EHF e-invoicing via GLN, Account Code and E-Invoice fields, with checks and XML export for invoices, credit memos, reminders, finance charges and service documents
- Norwegian VAT Codes, one VAT code in journals, proportional VAT deduction, VAT periods, Trade Settlement 2017 and VAT Reconciliation reports
- Recurring groups and Create Recurring Orders batch job on blanket sales orders
- Application always Allowed setting in General Ledger Setup and User Setup for applying entries in closed periods
- SAF-T VAT code mapping on VAT Reporting Code, supported by SAF-T setup per Learn
- Extensibility events: OnAfterGetPaymentMeansInfo, OnBeforeImportPayments, OnBeforeImportReturnData, OnBefore/OnAfterUpdateGenJnlFields

Narrative written by Sonnet from the code diff and 42 Learn page summaries. In numbers: Norway (NO) localization of Business Central in BC29: 159 objects of its own, 75 W1 objects changed (240 fields and 5 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Purchases](#purchases) | 9 | 43 | 79 |
| [Sales](#sales) | 33 | 14 | 59 |
| [Finance](#finance) | 19 | 17 | 94 |
| [Service](#service) | 0 | 36 | 0 |
| [EServices](#eservices) | 0 | 35 | 0 |
| [Bank](#bank) | 5 | 8 | 5 |
| [Foundation](#foundation) | 4 | 1 | 2 |
| Microsoft | 0 | 3 | 0 |
| [Security](#security) | 3 | 0 | 1 |
| [Utilities](#utilities) | 1 | 1 | 0 |
| (no namespace) | 0 | 1 | 0 |
| Upgrade | 1 | 0 | 0 |

### Purchases

Adds the remittance module for electronic vendor payments: agreements, accounts, payment orders, waiting journal, return files and error pages, with suggestion, test, export, import and delete reports. Vendor, Vendor Templ., Vendor Ledger Entry and Purchase Header get remittance, KID, recipient reference and payment type fields. Purchase invoice and credit memo lines get VAT Code and VAT Number.

Why: Learn describes remittance for paying Norwegian and foreign vendors through bank formats such as Telepay and BBS, with settlement returns and error codes.

Objects: [table/23 "Vendor"](../objects/table/23.md), [table/1383 "Vendor Templ."](../objects/table/1383.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/38 "Purchase Header"](../objects/table/38.md), codeunit/15000002 "Remittance Tools" (own), codeunit/15000031 "Export Remittance" (own), page/15000002 "Remittance Payment Order" (own), report/15000001 "Suggest Remittance Payments" (own).

[All 52 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds KID setup and EHF fields (GLN, Account Code, E-Invoice) to customers, sales documents, reminders and finance charge memos. Extends PEPPOL Management and Validation for reminders and finance charges. Adds recurring groups and the Create Recurring Orders batch job, plus local customer and vendor-style reports.

Why: Learn documents EHF for public sector customers, KID numbers on sales documents, and recurring orders built from blanket orders.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [codeunit/1605 "PEPPOL Management"](../objects/codeunit/1605.md), [codeunit/1620 "PEPPOL Validation"](../objects/codeunit/1620.md), [table/36 "Sales Header"](../objects/table/36.md), [table/112 "Sales Invoice Header"](../objects/table/112.md), table/15000300 "Recurring Group" (own), report/15000300 "Create Recurring Orders" (own), codeunit/15000300 "Repeating Order to Order" (own).

[All 47 objects of Sales in the diff](?ns=Sales#country-diff)

### Finance

Adds Norwegian VAT handling: VAT Code and VAT Number on journals, entries and setup, VAT periods, specifications and notes, and proportional deduction in posting and VAT settlement. Adds Trade Settlement 2017 (report and xmlport), VAT Reconciliation and other local reports. Adds an Application always Allowed option.

Why: Learn covers Norwegian VAT codes, proportional VAT, electronic VAT returns, VAT reconciliation and applying entries in closed periods.

Objects: [table/325 "VAT Posting Setup"](../objects/table/325.md), [table/344 "VAT Reporting Code"](../objects/table/344.md), [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), codeunit/10600 "Norwegian VAT Tools" (own), report/10618 "Trade Settlement 2017" (own), xmlport/10618 "Trade Settlement 2017" (own), report/10630 "VAT Reconciliation" (own), [table/81 "Gen. Journal Line"](../objects/table/81.md).

[All 36 objects of Finance in the diff](?ns=Finance#country-diff)

### Service

Extends service documents, archives and setup with Norwegian fields through table and page extensions. Adds local service shipment, invoice and credit memo reports and codeunits for posting, printing and document management.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/10602 "Service Post Print NO" (own), codeunit/10650 "Serv. Document Mgt. NO" (own), report/10631 "Service - Invoice (NO)" (own), report/10632 "Service - Credit Memo (NO)" (own), report/10613 "Service - Shipment (NO)" (own), tableextension/10602 "Service Header NO" (own), tableextension/10612 "Service Invoice Header NO" (own), pageextension/10621 "Service Mgt. Setup NO" (own).

[All 36 objects of Service in the diff](?ns=Service#country-diff)

### EServices

Provides EHF e-invoice check and export codeunits for sales, service, reminder and finance charge documents, export header, line and transfer file tables, and batch reports that create electronic documents. Also holds OCR setup, OCR payment import and the OCR test journal.

Why: Learn describes EHF file creation for public sector customers, configurable file paths, and OCR payment setup and import.

Objects: codeunit/10628 "E-Invoice Export Common" (own), codeunit/10629 "E-Invoice Check Common" (own), report/10640 "Create Electronic Invoices" (own), report/10642 "Create Electronic Reminders" (own), table/10604 "E-Invoice Export Header" (own), xmlport/10601 "EHF Reminder 3.0" (own), table/15000100 "OCR Setup" (own), report/15000064 "OCR Payment - BBS" (own).

[All 35 objects of EServices in the diff](?ns=EServices#country-diff)

### Bank

Extends SEPA credit transfer export with events and procedures that move lines to the waiting journal and update journal fields. Adds regulatory reporting codes with a threshold amount, and imports of pain.002 and CAMT.054 files plus a Norwegian SEPA export file codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1221 "SEPA CT-Fill Export Buffer"](../objects/codeunit/1221.md), [table/1226 "Payment Export Data"](../objects/table/1226.md), [table/1200 "Bank Export/Import Setup"](../objects/table/1200.md), codeunit/10636 "Import Pain002" (own), codeunit/10637 "Import CAMT054" (own), codeunit/10638 "Norge SEPA CC-Export File" (own), table/10607 "Regulatory Reporting Code" (own), [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md).

[All 13 objects of Bank in the diff](?ns=Bank#country-diff)

### Foundation

Adds the enterprise register field and classification procedure to Company Information, sales order print procedures in Document-Print, and Norwegian SEPA CT09 code and name in Company-Initialize. Extends Report Selection Usage for service reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md), codeunit/10603 "Serv. Report Selection Mgt. NO" (own), [enum/77 "Report Selection Usage"](../objects/enum/77.md).

[All 5 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Security

Adds the Application always Allowed field to User Setup and changes the LOCAL and LOCAL READ permission sets.

Why: Learn explains this setting allows applying entries outside the allowed posting period.

Objects: [table/91 "User Setup"](../objects/table/91.md), [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 3 objects of Security in the diff](?ns=Security#country-diff)

### Utilities

Adds a DocumentTools codeunit and a ClassifySAFT procedure in data classification for SAF-T data.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/10601 "DocumentTools" (own), [codeunit/1752 "Data Class. Eval. Data Country"](../objects/codeunit/1752.md).

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

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/9997 "Upgrade Tag Def - Country"
- codeunit/10600 "Norwegian VAT Tools"
- codeunit/10601 "DocumentTools"
- codeunit/10602 "Service Post Print NO"
- codeunit/10603 "Serv. Report Selection Mgt. NO"
- codeunit/10610 "E-Invoice Document Encode"
- codeunit/10613 "E-Invoice Check Fin. Chrg.Memo"
- codeunit/10614 "E-Invoice Check Reminder"
- codeunit/10615 "E-Invoice Check Sales Invoice"
- codeunit/10616 "E-Invoice Check Sales Cr. Memo"
- codeunit/10617 "E-Invoice Check Iss. Fin.Chrg."
- codeunit/10618 "E-Invoice Check Iss. Reminder"
- codeunit/10619 "E-Invoice Export Sales Invoice"
- codeunit/10620 "E-Invoice Exp. Sales Cr. Memo"
- codeunit/10621 "E-Invoice Exp. Iss. Fin. Chrg."
- codeunit/10622 "E-Invoice Export Iss. Reminder"
- codeunit/10623 "E-Invoice Check Serv. Document"
- codeunit/10624 "E-Invoice Check Serv. Invoice"
- codeunit/10625 "E-Invoice Check Serv. Cr. Memo"
- codeunit/10626 "E-Invoice Export Serv. Invoice"
- codeunit/10627 "E-Invoice Exp. Serv. Cr. Memo"
- codeunit/10628 "E-Invoice Export Common"
- codeunit/10629 "E-Invoice Check Common"
- codeunit/10630 "Export EHF Reminder"
- codeunit/10635 "Import SEPA Common"
- codeunit/10636 "Import Pain002"
- codeunit/10637 "Import CAMT054"
- codeunit/10638 "Norge SEPA CC-Export File"
- codeunit/10640 "Serv. Event Subscribers NO"
- codeunit/10650 "Serv. Document Mgt. NO"
- codeunit/15000000 "Reset Remittance Payment Order"
- codeunit/15000001 "Remitt. journal - Check line"
- codeunit/15000002 "Remittance Tools"
- codeunit/15000003 "Print payment overview"
- codeunit/15000031 "Export Remittance"
- codeunit/15000210 "TestEmpolyees1-49"
- codeunit/15000220 "TestEmpolyees50-199"
- codeunit/15000230 "TestEmpolyeesUnlimited"
- codeunit/15000300 "Repeating Order to Order"
- page/10601 "Settled VAT Periods"
- page/10604 "VAT Periods"
- page/10607 "Regulatory Reporting Codes"
- page/10608 "Gen. Jnl. Line Reg. Rep. Codes"
- page/10697 "VAT Specifications"
- page/10698 "VAT Notes"
- page/15000000 "Remittance Info"
- page/15000001 "Payment Info"
- page/15000002 "Remittance Payment Order"
- page/15000003 "Payment Order Data"
- page/15000004 "Remittance Account Card"
- page/15000005 "Waiting Journal"
- page/15000006 "Remittance Account Overview"
- page/15000007 "Remittance Agreement Card"
- page/15000008 "Return Files"
- page/15000009 "Return File Setup List"
- page/15000010 "Remittance Agreement Overview"
- page/15000011 "Settlement Info"
- page/15000012 "Payment Order - Settl. Status"
- page/15000013 "Return Error"
- page/15000027 "Payment Type Codes Abroad"
- page/15000100 "OCR Setup"
- page/15000101 "OCR Return Info"
- page/15000300 "Recurring Groups Card"
- page/15000301 "Recurring Group Overview"
- page/15000302 "Recurring Entries"
- page/15000303 "Recurring Orders Overview"
- pageextension/10600 "Service Quote Archive NO"
- pageextension/10601 "Service Quote Archives NO"
- pageextension/10602 "Service Order Archive NO"
- pageextension/10603 "Service Order Archives NO"
- pageextension/10604 "Service Quote Archive Lines NO"
- pageextension/10605 "Service Order Archive Lines NO"
- pageextension/10606 "Service List Archive NO"
- pageextension/10607 "Service Credit Memo NO"
- pageextension/10608 "Service Invoice NO"
- pageextension/10611 "Service Credit Memo Subform NO"
- pageextension/10612 "Service Invoice Subform NO"
- pageextension/10613 "ServiceItemWorksheet Subf. NO"
- pageextension/10614 "Service Lines NO"
- pageextension/10615 "Posted Serv. Cr. Memo Subf. NO"
- pageextension/10616 "Posted Service Credit Memo NO"
- pageextension/10617 "Posted Service Credit Memos NO"
- pageextension/10618 "Posted Service Invoice NO"
- pageextension/10619 "Posted Service Invoices NO"
- pageextension/10620 "Posted ServiceInvoice Subf. NO"
- pageextension/10621 "Service Mgt. Setup NO"
- pageextension/10622 "Service Order NO"
- report/10601 "Trial Balance/Previous Period"
- report/10602 "Trade Settlement"
- report/10603 "G/L Register Customer/Vendor"
- report/10606 "Sales Order Picking List"
- report/10608 "Customer - Balance"
- report/10609 "Vendor - Balance"
- report/10610 "Customer - Collection List"
- report/10611 "Customer - Address List"
- report/10612 "Vendor - Address List"
- report/10613 "Service - Shipment (NO)"
- report/10614 "Cust. Ledger Entries on Hold"
- report/10616 "Customer - Open Entries"
- report/10617 "Vendor - Open Entries"
- report/10618 "Trade Settlement 2017"
- report/10630 "VAT Reconciliation"
- report/10631 "Service - Invoice (NO)"
- report/10632 "Service - Credit Memo (NO)"
- report/10640 "Create Electronic Invoices"
- report/10641 "Create Electronic Credit Memos"
- report/10642 "Create Electronic Reminders"
- report/10643 "Create Elec. Fin. Chrg. Memos"
- report/10644 "Create Elec. Service Invoices"
- report/10645 "Create Elec. Service Cr. Memos"
- report/15000000 "Rem. paym. order - man. export"
- report/15000001 "Suggest Remittance Payments"
- report/15000002 "Remittance Test Report"
- report/15000003 "Rem. payment order - Import"
- report/15000004 "Delete rem. payment order"
- report/15000005 "Waiting Jnl - paym. overview"
- report/15000006 "Rem. payment order status"
- report/15000050 "Remittance - export (Bank)"
- report/15000060 "Remittance - export (BBS)"
- report/15000061 "Rem. Payment Order - Export"
- report/15000062 "Remittance - Import (Bank)"
- report/15000063 "Remittance - Import (BBS)"
- report/15000064 "OCR Payment - BBS"
- report/15000065 "OCR Payment - Data Dialog"
- report/15000100 "OCR Journal - Test"
- report/15000300 "Create Recurring Orders"
- table/10601 "Settled VAT Period"
- table/10602 "VAT Code"
- table/10603 "VAT Period"
- table/10604 "E-Invoice Export Header"
- table/10605 "E-Invoice Export Line"
- table/10606 "E-Invoice Transfer File"
- table/10607 "Regulatory Reporting Code"
- table/10608 "Gen. Jnl. Line Reg. Rep. Code"
- table/10687 "VAT Specification"
- table/10688 "VAT Note"
- table/15000000 "Remittance Agreement"
- table/15000001 "Remittance Payment Order"
- table/15000002 "Payment Order Data"
- table/15000003 "Remittance Account"
- table/15000004 "Waiting Journal"
- table/15000005 "Return File"
- table/15000006 "Return File Setup"
- table/15000007 "Return Error"
- table/15000027 "Payment Type Code Abroad"
- table/15000100 "OCR Setup"
- table/15000300 "Recurring Group"
- table/15000301 "Recurring Post"
- tableextension/10600 "Service Header Archive NO"
- tableextension/10601 "Service Line Archive NO"
- tableextension/10602 "Service Header NO"
- tableextension/10603 "Service Line NO"
- tableextension/10607 "Service Cr.Memo Header NO"
- tableextension/10608 "Service Cr.Memo Line NO"
- tableextension/10610 "Service Invoice Line NO"
- tableextension/10611 "Service Mgt. Setup NO"
- tableextension/10612 "Service Invoice Header NO"
- xmlport/10601 "EHF Reminder 3.0"
- xmlport/10618 "Trade Settlement 2017"

## Other versions

- BC30: 234 objects differ from W1 (240 fields, 5 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
