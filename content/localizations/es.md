---
id: localization/es
type: localization
title: Spain (ES)
summary: Spain (ES) localization of Business Central 29. It covers the Cartera module (bills, bill groups, payment orders, factoring), SII VAT reporting, Equivalence Charge, VAT-based declarations (340, 347, 349), CCC bank codes, AEB electronic payments, and due date limits. Use it for questions on Spanish local fields, setup and objects.
tier: official
language: en
tags:
  - localization
  - es
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
  input_hash: c54b6f28797c9b856dfaed2ee470b3135f5d0c0cc617c22c8fc74eda45ca9931
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-es
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/3
    - object/codeunit/6
    - object/codeunit/11
    - object/codeunit/12
    - object/codeunit/13
    - object/codeunit/60
    - object/codeunit/70
    - object/codeunit/80
    - object/codeunit/90
    - object/codeunit/226
    - object/codeunit/227
    - object/codeunit/232
    - object/codeunit/398
    - object/codeunit/424
    - object/codeunit/597
    - object/codeunit/816
    - object/codeunit/906
    - object/codeunit/1222
    - object/codeunit/5342
    - object/codeunit/5987
    - object/codeunit/5988
    - object/codeunit/6620
    - object/enum/6
    - object/enum/77
    - object/enum/89
    - object/enum/256
    - object/enum/258
    - object/enum/347
    - object/enum/379
    - object/page/147
    - object/page/151
    - object/page/152
    - object/page/344
    - object/page/425
    - object/permissionset/1001
    - object/permissionset/1002
    - object/permissionset/1083
    - object/permissionset/2332
    - object/permissionset/4103
    - object/report/6
    - object/report/12
    - object/report/20
    - object/report/86
    - object/report/94
    - object/report/105
    - object/report/117
    - object/report/118
    - object/report/393
    - object/report/405
    - object/report/406
    - object/report/407
    - object/report/840
    - object/report/1307
    - object/report/1401
    - object/reportextension/6485
    - object/table/3
    - object/table/4
    - object/table/5
    - object/table/9
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/19
    - object/table/21
    - object/table/23
    - object/table/24
    - object/table/25
    - object/table/27
    - object/table/32
    - object/table/36
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/45
    - object/table/79
    - object/table/80
    - object/table/81
    - object/table/83
    - object/table/84
    - object/table/85
    - object/table/92
    - object/table/93
    - object/table/96
    - object/table/98
    - object/table/110
    - object/table/111
    - object/table/112
    - object/table/113
    - object/table/114
    - object/table/115
    - object/table/120
    - object/table/122
    - object/table/123
    - object/table/124
    - object/table/125
    - object/table/169
    - object/table/181
    - object/table/220
    - object/table/225
    - object/table/242
    - object/table/251
    - object/table/252
    - object/table/254
    - object/table/256
    - object/table/257
    - object/table/259
    - object/table/263
    - object/table/265
    - object/table/270
    - object/table/271
    - object/table/272
    - object/table/277
    - object/table/284
    - object/table/287
    - object/table/288
    - object/table/289
    - object/table/290
    - object/table/311
    - object/table/312
    - object/table/324
    - object/table/325
    - object/table/331
    - object/table/363
    - object/table/365
    - object/table/366
    - object/table/379
    - object/table/380
    - object/table/381
    - object/table/382
    - object/table/383
    - object/table/461
    - object/table/751
    - object/table/1207
    - object/table/1208
    - object/table/1381
    - object/table/1382
    - object/table/1383
    - object/table/5108
    - object/table/5110
    - object/table/5200
    - object/table/5205
    - object/table/9054
    - object/table/9060
    - object/xmlport/1000
    - object/xmlport/1001
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain/banking-and-payments
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: ES
version: "29"
w1_version: "29"
added_objects: 389
replaced_objects: 145
removed_objects: 0
added_fields: 314
added_events: 64
learn_folder: LocalFunctionality/Spain
---

# Spain (ES)

> Spain (ES) localization of Business Central 29. It covers the Cartera module (bills, bill groups, payment orders, factoring), SII VAT reporting, Equivalence Charge, VAT-based declarations (340, 347, 349), CCC bank codes, AEB electronic payments, and due date limits. Use it for questions on Spanish local fields, setup and objects.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/spain/banking-and-payments.md) · narrative **unreviewed** (machine-written)

## Overview

The Spanish layer adds 534 objects, of which 389 are its own. It adds 314 fields and 64 events on W1 objects. The largest block is Cartera: bills, bill groups and payment orders, with posting and closed documents, analysis fact boxes, export codeunits for N19, N32, N58, N34, N34.1 and factoring, and extra account fields on customer, vendor and bank posting groups. Posting codeunits such as Gen. Jnl.-Post Line, Sales-Post and Purch.-Post carry new events and procedures for Cartera bills and corrected invoices.

Tax reporting rests on SII (codeunits 10750 to 10759, many enums, SII Setup and History pages), No Taxable entries, and the 340, 347 and 349 declarations. VAT Entry, VAT Posting Setup, VAT Amount Line and sales and purchase lines gain Equivalence Charge (EC) and cash regime fields. Learn documents these, along with VERI*FACTU, Factura-E, ASC export and VAT statement templates.

Banking and master data changes include CCC bank code fields on company, bank, customer and vendor bank accounts, electronic payment fields, payment days and non-payment periods, payment term limits (Max. No. of Days till Due Date), transaction numbers, income statement closing and a chart of accounts equivalence tool. Service documents have ES extensions and reports.

## Key points

- Cartera module: receivable bills, bill groups, payment orders, factoring, with posted and closed documents and export codeunits for N19, N32, N58, N34 and N34.1.
- SII VAT reporting: XML creator, upload and job codeunits, scheme code and invoice type enums, SII Setup and SII History pages.
- VAT declarations 340, 347 and 349, plus No Taxable entries, operation codes and delivery operation codes.
- Equivalence Charge: EC % fields on sales and purchase lines, VAT Entry, VAT Posting Setup and VAT Amount Line.
- CCC bank code fields (bank, branch, control digits, account) on company, bank, customer and vendor bank accounts, with BuildCCC procedures.
- Due date control: Max. No. of Days till Due Date on payment terms, payment days and non-payment periods on company, customer and vendor.
- Corrected invoices, transaction numbers, Close Income Statement and Trial Balance changes, and the same external document number across fiscal years.
- VERI*FACTU, Factura-E, and the G/L accounts equivalence tool for chart of accounts changes.

Narrative written by Sonnet from the code diff and 46 Learn page summaries. In numbers: Spain (ES) localization of Business Central in BC29: 389 objects of its own, 145 W1 objects changed (314 fields and 64 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 48 | 113 | 100 |
| [Sales](#sales) | 27 | 78 | 64 |
| [Purchases](#purchases) | 28 | 57 | 64 |
| [EServices](#eservices) | 0 | 83 | 0 |
| [Service](#service) | 2 | 28 | 0 |
| [Foundation](#foundation) | 9 | 4 | 15 |
| [Bank](#bank) | 11 | 1 | 53 |
| [Microsoft](#microsoft) | 0 | 11 | 0 |
| [(no namespace)](#no-namespace) | 0 | 7 | 0 |
| [Inventory](#inventory) | 7 | 0 | 10 |
| [Security](#security) | 5 | 2 | 0 |
| [CashFlow](#cashflow) | 2 | 1 | 0 |
| [Utilities](#utilities) | 1 | 2 | 0 |
| [HumanResources](#humanresources) | 2 | 0 | 3 |
| [RoleCenters](#rolecenters) | 1 | 1 | 4 |
| [AccountantPortal](#accountantportal) | 0 | 1 | 0 |
| [Integration](#integration) | 1 | 0 | 0 |
| [Projects](#projects) | 1 | 0 | 1 |

### Finance

Changes Gen. Jnl.-Post Line, Gen. Jnl.-Post Batch and the journal tables with Cartera events, auto-invoice and transaction fields. Adds EC and cash regime fields on VAT Entry, VAT Posting Setup and VAT Amount Line. It also extends VAT Statement, Trial Balance and Close Income Statement, and adds No Taxable and Cartera codeunits.

Why: Learn describes EC tracking, 340/347/349 declarations, transaction numbers and income statement closing as local requirements.

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/254 "VAT Entry"](../objects/table/254.md), [table/325 "VAT Posting Setup"](../objects/table/325.md), [table/290 "VAT Amount Line"](../objects/table/290.md), [report/12 "VAT Statement"](../objects/report/12.md), [report/94 "Close Income Statement"](../objects/report/94.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), codeunit/7000000 "CarteraManagement" (own).

[All 161 objects of Finance in the diff](?ns=Finance#country-diff)

### Sales

Adds Cartera bill fields and CCC fields on customer ledger and bank account tables. Adds bill account fields on Customer Posting Group, and corrected invoice and EC fields on sales documents. Adds bill group pages and export codeunits for N19, N32, N58 and factoring.

Why: Learn documents corrective invoices, the receivables Cartera module and EC.

Objects: [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [table/92 "Customer Posting Group"](../objects/table/92.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [table/36 "Sales Header"](../objects/table/36.md), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [codeunit/226 "CustEntry-Apply Posted Entries"](../objects/codeunit/226.md), codeunit/7000092 "Bill group - Export N19" (own), page/7000009 "Bill Groups" (own).

[All 105 objects of Sales in the diff](?ns=Sales#country-diff)

### Purchases

Adds payment order pages, N34 and N34.1 export codeunits, and bill and autodocument fields on vendor ledger entries. Extends purchase documents with corrected invoice, auto-invoice and EC fields, and vendor bank accounts with CCC and electronic payment fields.

Why: Learn documents the payments Cartera module, AEB N34.1 electronic payments and same external document numbers across fiscal years.

Objects: [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), codeunit/7000090 "Payment order - Export N34" (own), codeunit/7000060 "PO - Export N34.1" (own), page/7000050 "Payment Orders" (own), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 85 objects of Purchases in the diff](?ns=Purchases#country-diff)

### EServices

Adds the SII framework: XML creator, job management, upload and retry codeunits, scheme code and invoice type enums, and setup and history pages. Also adds electronic payment management and creation codeunits.

Why: Learn covers SII setup and invoice types, and VERI*FACTU as an SII alternative.

Objects: codeunit/10750 "SII XML Creator" (own), codeunit/10756 "SII Management" (own), codeunit/10752 "SII Doc. Upload Management" (own), page/10751 "SII Setup" (own), page/10752 "SII History" (own), codeunit/10721 "Create Electronic Payments" (own), codeunit/10701 "Elect. Pmts Management" (own), enum/10700 "SII Sales Special Scheme Code" (own).

[All 83 objects of EServices in the diff](?ns=EServices#country-diff)

### Service

Adds ES extensions on service headers, lines and posted documents, edit codeunits and update pages, and Spanish service order, invoice and credit memo reports. Service posting creates bills.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5987 "Serv-Posting Journals Mgt."](../objects/codeunit/5987.md), codeunit/10763 "Service Document Subscr. ES" (own), codeunit/10789 "Service Posting Subscr. ES" (own), tableextension/10790 "Service Header ES" (own), report/10792 "Service Invoice (ES)" (own), report/10790 "Service Order (ES)" (own), codeunit/10768 "Service Invoice Header - Edit" (own), page/10768 "Posted Serv. Invoice - Update" (own).

[All 30 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Extends Payment Terms with due date limit fields, and Company Information with CNAE and CCC fields. Adds Post Code county code, Country/Region VAT number digits and Category Code. Navigate finds Cartera documents.

Why: Learn explains legal limits on payment delays and NACE code entry.

Objects: [table/3 "Payment Terms"](../objects/table/3.md), [table/79 "Company Information"](../objects/table/79.md), [page/344 "Navigate"](../objects/page/344.md), [table/9 "Country/Region"](../objects/table/9.md), [table/225 "Post Code"](../objects/table/225.md), table/7000009 "Category Code" (own), [table/242 "Source Code Setup"](../objects/table/242.md), [table/265 "Document Entry"](../objects/table/265.md).

[All 13 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Bank

Bank Account gains CCC, E-Pay and bill group fields, with totals procedures. Payment Method gets Cartera fields, bank posting groups get bill accounts, and SEPA and direct debit objects get events and fields. Check report amount-in-words is changed.

Why: Learn documents CCC codes and electronic payment setup.

Objects: [table/270 "Bank Account"](../objects/table/270.md), [table/289 "Payment Method"](../objects/table/289.md), [table/277 "Bank Account Posting Group"](../objects/table/277.md), [table/1207 "Direct Debit Collection"](../objects/table/1207.md), [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md), report/7000005 "Bank - Risk" (own), [report/1401 "Check"](../objects/report/1401.md), [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md).

[All 12 objects of Bank in the diff](?ns=Bank#country-diff)

### Microsoft

Adds the G/L accounts equivalence tool tables, historic account tables, buffers and import/export xmlports for chart of accounts changes and consolidation.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/10720 "G/L Accounts Equivalence Tool" (own), table/10721 "Historic G/L Account" (own), table/10722 "New G/L Account" (own), xmlport/10720 "G/L Importing Tool" (own), xmlport/10700 "Hist. Consolid. Import/Export" (own), table/10700 "Inc. Stmt. Clos. Buffer" (own), table/10703 "Acc. Schedule Buffer" (own), enum/10727 "ES Document Situation" (own).

[All 11 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### (no namespace)

Holds the Post Payment Order report and SII activity cue extension. Other objects are upgrade and sandbox cleanup plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: report/7000080 "Post Payment Order" (own), pageextension/7000030 "SII O365 Activities" (own).

[All 7 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Inventory

Adds shipment method fields on item journal and ledger entries, Intrastat fields, a cost regulation percentage on Item, and port/airport on Transport Method.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/263 "Intrastat Jnl. Line"](../objects/table/263.md), [table/83 "Item Journal Line"](../objects/table/83.md), [table/27 "Item"](../objects/table/27.md), [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/259 "Transport Method"](../objects/table/259.md), [table/284 "Area"](../objects/table/284.md), [table/1382 "Item Templ."](../objects/table/1382.md).

[All 7 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Security

Changes local permission sets and adds SII permission set extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: permissionsetextension/1001 "SII LOCAL" (own), permissionsetextension/7000002 "SII LOCAL READ" (own), [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [permissionset/1083 "Bank Accounts - View"](../objects/permissionset/1083.md), [permissionset/4103 "General Ledger Journals - Edit"](../objects/permissionset/4103.md).

[All 7 objects of Security in the diff](?ns=Security#country-diff)

### CashFlow

Suggest Worksheet Lines splits sales and purchase invoices by installments. A service extension adds an event for service lines.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/840 "Suggest Worksheet Lines"](../objects/report/840.md), codeunit/7000034 "Serv. SuggestWorksheetLines ES" (own), [reportextension/6485 "Serv. Suggest Worksheet Lines"](../objects/reportextension/6485.md).

[All 3 objects of CashFlow in the diff](?ns=CashFlow#country-diff)

### Utilities

Copy Document Mgt. adds checks and ledger entry updates for Cartera bills. Adds Localization Management and SII data classification.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6620 "Copy Document Mgt."](../objects/codeunit/6620.md), codeunit/10760 "Localization Management" (own), codeunit/7000030 "SII DataClass EvalData Country" (own).

[All 3 objects of Utilities in the diff](?ns=Utilities#country-diff)

### HumanResources

Employee gains first, middle and last name fields with an upgrade procedure from old name fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md), [table/5205 "Employee Relative"](../objects/table/5205.md).

[All 2 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

### RoleCenters

Cue tables gain Cartera document counts, and an SII activities cue is added.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/9060 "SB Owner Cue"](../objects/table/9060.md), tableextension/7000043 "SII Activities Cue" (own).

[All 2 objects of RoleCenters in the diff](?ns=RoleCenters#country-diff)

### AccountantPortal

Adds SII cues to the accountant portal activities.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: pageextension/7000041 "SII AccountantPortal Act. Cues" (own).

[All 1 objects of AccountantPortal in the diff](?ns=AccountantPortal#country-diff)

### Integration

CRM Synch. Helper is changed for Spain.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5342 "CRM Synch. Helper"](../objects/codeunit/5342.md).

[All 1 objects of Integration in the diff](?ns=Integration#country-diff)

### Projects

Job Ledger Entry gets a Shipment Method Code field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/169 "Job Ledger Entry"](../objects/table/169.md).

[All 1 objects of Projects in the diff](?ns=Projects#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/3 "G/L Account-Indent"](../objects/codeunit/3.md) | +1 procedures |
| [codeunit/6 "Fiscal Year-Close"](../objects/codeunit/6.md) | +1 procedures |
| [codeunit/11 "Gen. Jnl.-Check Line"](../objects/codeunit/11.md) | body changes only |
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +27 events, +58 procedures, 1 procedures changed |
| [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md) | +1 events, +3 procedures |
| [codeunit/60 "Sales-Calc. Discount"](../objects/codeunit/60.md) | +1 events, +2 procedures |
| [codeunit/70 "Purch.-Calc.Discount"](../objects/codeunit/70.md) | +1 events, +2 procedures |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +2 events, +2 procedures |
| [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md) | +2 events, +2 procedures |
| [codeunit/226 "CustEntry-Apply Posted Entries"](../objects/codeunit/226.md) | +1 events, +4 procedures |
| [codeunit/227 "VendEntry-Apply Posted Entries"](../objects/codeunit/227.md) | +1 events, +3 procedures |
| [codeunit/232 "Gen. Jnl.-Post+Print"](../objects/codeunit/232.md) | +1 events |
| [codeunit/398 "Sales Tax Calculate"](../objects/codeunit/398.md) | +1 procedures |
| [codeunit/424 "Export Analysis View"](../objects/codeunit/424.md) | +1 procedures |
| [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md) | +6 procedures |
| [codeunit/816 "Purch. Post Invoice"](../objects/codeunit/816.md) | +1 procedures |
| [codeunit/906 "SO Activities Calculate"](../objects/codeunit/906.md) | +1 events |
| [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md) | +2 events |
| [codeunit/5342 "CRM Synch. Helper"](../objects/codeunit/5342.md) | 1 procedures changed |
| [codeunit/5987 "Serv-Posting Journals Mgt."](../objects/codeunit/5987.md) | +1 events, +2 procedures |
| [codeunit/5988 "Serv-Documents Mgt."](../objects/codeunit/5988.md) | +1 procedures |
| [codeunit/6620 "Copy Document Mgt."](../objects/codeunit/6620.md) | +4 procedures, 1 properties |
| [enum/6 "Gen. Journal Document Type"](../objects/enum/6.md) | body changes only |
| [enum/77 "Report Selection Usage"](../objects/enum/77.md) | body changes only |
| [enum/89 "Gen. Journal Template Type"](../objects/enum/89.md) | body changes only |
| [enum/256 "VAT Statement Line Type"](../objects/enum/256.md) | body changes only |
| [enum/258 "VAT Statement Line Amount Type"](../objects/enum/258.md) | body changes only |
| [enum/347 "Report Selection Usage Purchase"](../objects/enum/347.md) | body changes only |
| [enum/379 "Detailed CV Ledger Entry Type"](../objects/enum/379.md) | body changes only |
| [page/147 "Posted Purchase Credit Memos"](../objects/page/147.md) | body changes only |
| [page/151 "Customer Statistics"](../objects/page/151.md) | +5 procedures |
| [page/152 "Vendor Statistics"](../objects/page/152.md) | +3 procedures |
| [page/344 "Navigate"](../objects/page/344.md) | +1 events, +2 procedures |
| [page/425 "Vendor Bank Account Card"](../objects/page/425.md) | +1 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [permissionset/1083 "Bank Accounts - View"](../objects/permissionset/1083.md) | 1 properties |
| [permissionset/2332 "D365 GLOBAL DIM MGT"](../objects/permissionset/2332.md) | 1 properties |
| [permissionset/4103 "General Ledger Journals - Edit"](../objects/permissionset/4103.md) | 1 properties |
| [report/6 "Trial Balance"](../objects/report/6.md) | +11 procedures |
| [report/12 "VAT Statement"](../objects/report/12.md) | +2 events, +10 procedures |
| [report/20 "Calc. and Post VAT Settlement"](../objects/report/20.md) | 1 properties |
| [report/86 "Adjust Add. Reporting Currency"](../objects/report/86.md) | 1 properties |
| [report/94 "Close Income Statement"](../objects/report/94.md) | +2 events, +3 procedures, 1 properties |
| [report/105 "Customer - Summary Aging"](../objects/report/105.md) | 1 procedures changed |
| [report/117 "Reminder"](../objects/report/117.md) | +1 procedures |
| [report/118 "Finance Charge Memo"](../objects/report/118.md) | +1 procedures |
| [report/393 "Suggest Vendor Payments"](../objects/report/393.md) | +1 procedures |
| [report/405 "Order"](../objects/report/405.md) | +1 procedures |
| [report/406 "Purchase - Invoice"](../objects/report/406.md) | +1 procedures |
| [report/407 "Purchase - Credit Memo"](../objects/report/407.md) | +1 procedures |
| [report/840 "Suggest Worksheet Lines"](../objects/report/840.md) | +3 procedures |
| [report/1307 "Standard Sales - Credit Memo"](../objects/report/1307.md) | +1 procedures |
| [report/1401 "Check"](../objects/report/1401.md) | +9 procedures |
| [reportextension/6485 "Serv. Suggest Worksheet Lines"](../objects/reportextension/6485.md) | +1 events |
| [table/3 "Payment Terms"](../objects/table/3.md) | +3 fields, +2 events, +2 procedures |
| [table/4 "Currency"](../objects/table/4.md) | +3 fields |
| [table/5 "Finance Charge Terms"](../objects/table/5.md) | +2 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields, +2 procedures |
| [table/15 "G/L Account"](../objects/table/15.md) | +3 fields, 1 fields changed, +1 events, +1 procedures |
| [table/17 "G/L Entry"](../objects/table/17.md) | +2 fields |
| [table/18 "Customer"](../objects/table/18.md) | +3 fields |
| [table/19 "Cust. Invoice Disc."](../objects/table/19.md) | +1 procedures |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +8 fields, 2 fields changed, +1 events, +5 procedures |
| [table/23 "Vendor"](../objects/table/23.md) | +3 fields |
| [table/24 "Vendor Invoice Disc."](../objects/table/24.md) | +1 procedures |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +10 fields, +1 events, +2 procedures |
| [table/27 "Item"](../objects/table/27.md) | +1 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | +1 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +5 fields, +2 events, +2 procedures |
| [table/37 "Sales Line"](../objects/table/37.md) | +3 fields, 1 procedures changed |
| [table/38 "Purchase Header"](../objects/table/38.md) | +7 fields, +1 procedures |
| [table/39 "Purchase Line"](../objects/table/39.md) | +3 fields |
| [table/45 "G/L Register"](../objects/table/45.md) | +1 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +8 fields, 3 fields changed, +2 procedures |
| [table/80 "Gen. Journal Template"](../objects/table/80.md) | 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +11 fields, +3 procedures |
| [table/83 "Item Journal Line"](../objects/table/83.md) | +2 fields |
| [table/84 "Acc. Schedule Name"](../objects/table/84.md) | +1 fields |
| [table/85 "Acc. Schedule Line"](../objects/table/85.md) | +4 fields, 2 fields changed |
| [table/92 "Customer Posting Group"](../objects/table/92.md) | +8 fields, +6 procedures |
| [table/93 "Vendor Posting Group"](../objects/table/93.md) | +3 fields, +3 procedures |
| [table/96 "G/L Budget Entry"](../objects/table/96.md) | +2 fields |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +5 fields, 1 fields changed, +1 procedures |
| [table/110 "Sales Shipment Header"](../objects/table/110.md) | +3 fields |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +2 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +3 fields, +1 events, +2 procedures |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +2 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +4 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +2 fields |
| [table/120 "Purch. Rcpt. Header"](../objects/table/120.md) | +4 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +4 fields, +1 events, +3 procedures |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +2 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +4 fields, +1 procedures |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +2 fields |
| [table/169 "Job Ledger Entry"](../objects/table/169.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +22 fields |
| [table/220 "Business Unit"](../objects/table/220.md) | +1 fields, 1 fields changed |
| [table/225 "Post Code"](../objects/table/225.md) | +1 fields, +2 procedures |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +1 fields |
| [table/251 "Gen. Product Posting Group"](../objects/table/251.md) | +1 fields |
| [table/252 "General Posting Setup"](../objects/table/252.md) | +2 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +6 fields, +2 events, +11 procedures |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields |
| [table/257 "VAT Statement Name"](../objects/table/257.md) | +1 fields |
| [table/259 "Transport Method"](../objects/table/259.md) | +1 fields |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | +3 fields, 4 fields changed |
| [table/265 "Document Entry"](../objects/table/265.md) | +1 fields |
| [table/270 "Bank Account"](../objects/table/270.md) | +40 fields, 2 fields changed, +2 events, +10 procedures |
| [table/271 "Bank Account Ledger Entry"](../objects/table/271.md) | +1 fields |
| [table/272 "Check Ledger Entry"](../objects/table/272.md) | 1 fields changed |
| [table/277 "Bank Account Posting Group"](../objects/table/277.md) | +5 fields |
| [table/284 "Area"](../objects/table/284.md) | +1 fields |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +5 fields, 2 fields changed, +2 procedures |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +6 fields, 2 fields changed, +2 procedures |
| [table/289 "Payment Method"](../objects/table/289.md) | +5 fields |
| [table/290 "VAT Amount Line"](../objects/table/290.md) | +6 fields, +2 events, +6 procedures |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +4 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +5 fields |
| [table/324 "VAT Product Posting Group"](../objects/table/324.md) | +1 fields |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +5 fields, 4 fields changed, +1 events, +3 procedures |
| [table/331 "Adjust Exchange Rate Buffer"](../objects/table/331.md) | +1 fields |
| [table/363 "Analysis View"](../objects/table/363.md) | 1 fields changed |
| [table/365 "Analysis View Entry"](../objects/table/365.md) | +2 fields |
| [table/366 "Analysis View Budget Entry"](../objects/table/366.md) | +2 fields |
| [table/379 "Detailed Cust. Ledg. Entry"](../objects/table/379.md) | +5 fields |
| [table/380 "Detailed Vendor Ledg. Entry"](../objects/table/380.md) | +5 fields |
| [table/381 "VAT Registration No. Format"](../objects/table/381.md) | +1 fields, +1 events, +3 procedures |
| [table/382 "CV Ledger Entry Buffer"](../objects/table/382.md) | +5 fields |
| [table/383 "Detailed CV Ledg. Entry Buffer"](../objects/table/383.md) | +5 fields, 2 fields changed |
| [table/461 "Prepayment Inv. Line Buffer"](../objects/table/461.md) | +1 fields |
| [table/751 "Standard General Journal Line"](../objects/table/751.md) | +1 fields |
| [table/1207 "Direct Debit Collection"](../objects/table/1207.md) | +2 fields, +1 procedures |
| [table/1208 "Direct Debit Collection Entry"](../objects/table/1208.md) | 1 fields changed |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +3 fields, 1 fields changed |
| [table/1382 "Item Templ."](../objects/table/1382.md) | +1 fields |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +2 fields, 1 fields changed |
| [table/5108 "Sales Line Archive"](../objects/table/5108.md) | +4 fields |
| [table/5110 "Purchase Line Archive"](../objects/table/5110.md) | +4 fields |
| [table/5200 "Employee"](../objects/table/5200.md) | +3 fields, 5 fields changed, +1 procedures, 1 properties |
| [table/5205 "Employee Relative"](../objects/table/5205.md) | 3 fields changed |
| [table/9054 "Finance Cue"](../objects/table/9054.md) | +4 fields |
| [table/9060 "SB Owner Cue"](../objects/table/9060.md) | +4 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | +1 procedures |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | +1 procedures |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/1883 "Sandbox Cleanup local"
- codeunit/9997 "Upgrade Tag Def - Country"
- codeunit/10700 "Due Date-Adjust"
- codeunit/10701 "Elect. Pmts Management"
- codeunit/10710 "Serv. Make 349 Declaration"
- codeunit/10721 "Create Electronic Payments"
- codeunit/10740 "No Taxable Mgt."
- codeunit/10741 "Serv. No Taxable Mgt."
- codeunit/10750 "SII XML Creator"
- codeunit/10751 "SII Job Management"
- codeunit/10752 "SII Doc. Upload Management"
- codeunit/10753 "SII Job Upload Pending Docs."
- codeunit/10754 "SII Job Retry Comm. Error"
- codeunit/10755 "SII Initial Doc. Upload"
- codeunit/10756 "SII Management"
- codeunit/10757 "SII Recreate Missing Entries"
- codeunit/10758 "SII Scheme Code Mgt."
- codeunit/10759 "Serv. SII Management"
- codeunit/10760 "Localization Management"
- codeunit/10762 "Service History Subscr. ES"
- codeunit/10763 "Service Document Subscr. ES"
- codeunit/10765 "Sales Invoice Header - Edit"
- codeunit/10767 "Purch. Cr. Memo Hdr. - Edit"
- codeunit/10768 "Service Invoice Header - Edit"
- codeunit/10769 "Service Cr. Memo Header - Edit"
- codeunit/10788 "Sales Document Subscr. ES"
- codeunit/10789 "Service Posting Subscr. ES"
- codeunit/10791 "Serv. Report Selection Mgt. ES"
- codeunit/10840 "No Taxable - Generate Entries"
- codeunit/104100 "UPG SII"
- codeunit/104102 "Upg No Taxable"
- codeunit/104107 "Upg Report Selections"
- codeunit/7000000 "CarteraManagement"
- codeunit/7000001 "G/L Reg.-Docs."
- codeunit/7000003 "BG/PO-Post and Print"
- codeunit/7000004 "Document-Move"
- codeunit/7000005 "Invoice-Split Payment"
- codeunit/7000006 "Document-Post"
- codeunit/7000007 "Document-Misc"
- codeunit/7000008 "Document-Edit"
- codeunit/7000009 "Posted Cartera Doc.- Edit"
- codeunit/7000010 "Company-Initialize Cartera"
- codeunit/7000026 "SII Purchase Subscribers"
- codeunit/7000027 "SII Sales Subscribers"
- codeunit/7000029 "SII VAT Subscribers"
- codeunit/7000030 "SII DataClass EvalData Country"
- codeunit/7000034 "Serv. SuggestWorksheetLines ES"
- codeunit/7000035 "Serv. Invoice-Split Payment"
- codeunit/7000060 "PO - Export N34.1"
- codeunit/7000089 "Bill group - Export factoring"
- codeunit/7000090 "Payment order - Export N34"
- codeunit/7000091 "Bill group - Export N58"
- codeunit/7000092 "Bill group - Export N19"
- codeunit/7000093 "Bill group - Export N32"
- enum/10700 "SII Sales Special Scheme Code"
- enum/10701 "SII Purch. Special Scheme Code"
- enum/10702 "SII Sales Upload Scheme Code"
- enum/10703 "SII Purch. Upload Scheme Code"
- enum/10704 "SII Operation Date Type"
- enum/10705 "SII Tax Period"
- enum/10706 "SII Sales Invoice Type"
- enum/10707 "SII Purch. Invoice Type"
- enum/10708 "SII Sales Credit Memo Type"
- enum/10709 "SII Purch. Credit Memo Type"
- enum/10710 "SII ID Type"
- enum/10711 "SII Document Status"
- enum/10712 "SII Sales Upload Invoice Type"
- enum/10713 "SII Purch. Upload Invoice Type"
- enum/10714 "SII Sales Upload Credit Memo Type"
- enum/10715 "SII Purch. Upload Cr. Memo Type"
- enum/10721 "SII Exemption Code"
- enum/10722 "ES Bill Type"
- enum/10723 "ES Document Status"
- enum/10724 "Cartera Document Status"
- enum/10727 "ES Document Situation"
- enum/10755 "SII Doc. Upload State Document Source"
- enum/10756 "SII Doc. Upload State Document Type"
- enum/7000000 "Cartera Document Type"
- enum/7000025 "Cartera Document Doc. Type"
- enum/7000026 "Cartera Dealing Type"
- enum/7000045 "Report Selection Usage Cartera"
- enumextension/20 "G/L Account Report Type ES"
- page/10700 "Payment Days"
- page/10701 "Non-Payment Periods"
- page/10704 "Transference Format"
- page/10705 "Copy Data Transference Format"
- page/10706 "Statistical Codes"
- page/10710 "XML Transference Format"
- page/10734 "G/L Account Selection"
- page/10735 "Gen. Prod. Post. Gr. Selection"
- page/10736 "Customer/Vendor Warnings 349"
- page/10737 "Gen. Prod. Post. Selection 340"
- page/10738 "Rev. Chg. Post. Selection 340"
- page/10740 "No Taxable Entries"
- page/10744 "340 Declaration Lines"
- page/10745 "Operation Codes"
- page/10751 "SII Setup"
- page/10752 "SII History"
- page/10753 "Recreate Missing SII Entries"
- page/10765 "Posted Sales Invoice - Update"
- page/10767 "Posted Purch. Cr.Memo - Update"
- page/10768 "Posted Serv. Invoice - Update"
- page/10769 "Posted Serv. Cr. Memo - Update"
- page/10770 "SII Sales Doc. Scheme Codes"
- page/10771 "SII Purch. Doc. Scheme Codes"
- page/35290 "Rec. Docs Analysis Fact Box"
- page/35291 "BG Analysis Fact Box"
- page/35292 "Post. BG Analysis LCY Fact Box"
- page/35293 "Post. BG Analysis Non LCY FB"
- page/35294 "Closed BG Analysis LCY FB"
- page/35295 "Closed BG Analysis Non LCY FB"
- page/35296 "Closed Docs Analysis LCY FB"
- page/35297 "Closed Docs Analysis NonLCY FB"
- page/35298 "Pmt Orders Analysis Fact Box"
- page/35299 "Post. PO Analysis LCY Fact Box"
- page/35300 "Post. PO Analysis Non LCY FB"
- page/35301 "Closed PO Analysis LCY FB"
- page/35302 "Closed PO Analysis Non LCY FB"
- page/35303 "Bank Account Information FB"
- page/35304 "Cartera Receiv. Statistics FB"
- page/35305 "Cartera Payables Statistics FB"
- page/35306 "Cartera Fact. Statistics FB"
- page/36848 "Bank Cat.Post.Rec.Bills Matrix"
- page/36850 "Bank Cat.Post.Pay.Bills Matrix"
- page/7000001 "Receivables Cartera Docs"
- page/7000002 "Payables Cartera Docs"
- page/7000003 "Cartera Documents"
- page/7000004 "Docs. in BG Subform"
- page/7000005 "Docs. in Posted BG Subform"
- page/7000006 "Posted Cartera Documents"
- page/7000007 "Closed Cartera Documents"
- page/7000008 "Docs. in Closed BG Subform"
- page/7000009 "Bill Groups"
- page/7000010 "Receivable Closed Cartera Docs"
- page/7000011 "Bill Groups List"
- page/7000012 "Posted Bill Groups"
- page/7000013 "Payable Closed Cartera Docs"
- page/7000014 "Posted Bill Groups List"
- page/7000015 "Closed Bill Groups"
- page/7000017 "Closed Bill Groups List"
- page/7000018 "Bank Account Selection"
- page/7000019 "Documents Analysis"
- page/7000020 "Bill Groups Analysis"
- page/7000021 "Posted Bill Groups Analysis"
- page/7000022 "Closed Bill Groups Analysis"
- page/7000023 "Category Codes"
- page/7000024 "BG/PO Comment List"
- page/7000025 "BG/PO Comment Sheet"
- page/7000026 "Operation Fees"
- page/7000029 "Documents Maturity"
- page/7000030 "Documents Maturity Lines"
- page/7000031 "Bill Groups Maturity"
- page/7000032 "BG/PO Maturity Lines"
- page/7000033 "Posted Bill Groups Maturity"
- page/7000034 "Posted Bill Gr. Maturity Lines"
- page/7000036 "Cartera Journal"
- page/7000037 "Check Discount Credit Limit"
- page/7000040 "Cartera Setup"
- page/7000041 "Cartera Source Cd. Setup"
- page/7000044 "Closed Documents Analysis"
- page/7000045 "Report Selection - Cartera"
- page/7000048 "Installments"
- page/7000049 "Fee Ranges"
- page/7000050 "Payment Orders"
- page/7000051 "Payment Orders List"
- page/7000052 "Payment Orders Maturity"
- page/7000053 "Payment Orders Analysis"
- page/7000054 "Posted Payment Orders"
- page/7000055 "Posted Payment Orders List"
- page/7000057 "Posted Payment Orders Maturity"
- page/7000058 "Post. Pmt. Ord. Maturity Lin."
- page/7000059 "Post. Payment Orders Analysis"
- page/7000060 "Closed Payment Orders"
- page/7000061 "Closed Payment Orders List"
- page/7000062 "Closed Pmt. Ord. Analysis"
- page/7000063 "Customer Ratings"
- page/7000064 "Posted Bill Group Select."
- page/7000065 "Posted Payment Orders Select."
- page/7000066 "Bank Cat. Posted Receiv. Bills"
- page/7000067 "Posted Bills"
- page/7000068 "Posted Bills Analysis"
- page/7000069 "Posted Receiv. Bills Maturity"
- page/7000070 "Posted Bills Maturity Lin."
- page/7000071 "Bank Cat. Posted Payable Bills"
- page/7000072 "Posted Payable Bills Maturity"
- page/7000073 "Suffixes"
- page/7000075 "Docs. in PO Subform"
- page/7000076 "Docs. in Posted PO Subform"
- page/7000077 "Docs. in Closed PO Subform"
- pageextension/10710 "Service Order Archive ES"
- pageextension/10730 "Service Order ES"
- pageextension/10731 "Posted Service Credit Memos ES"
- pageextension/10732 "Posted Service Credit Memo ES"
- pageextension/10733 "Service Invoice ES"
- pageextension/10735 "Service Credit Memo ES"
- pageextension/10736 "Posted Service Inv. Update ES"
- pageextension/10737 "Posted Service Invoices ES"
- pageextension/10738 "Posted Service Invoice ES"
- pageextension/7000000 "SII Purchase Credit Memo"
- pageextension/7000001 "SII Purchase Invoice"
- pageextension/7000002 "SII Purchase Order"
- pageextension/7000003 "SII Purchase Return Order"
- pageextension/7000004 "SII Posted Purch. Credit Memo"
- pageextension/7000005 "SII Posted Purchase Invoice"
- pageextension/7000006 "SII Sales Credit Memo"
- pageextension/7000007 "SII Sales Invoice"
- pageextension/7000008 "SII Sales Order"
- pageextension/7000009 "SII Sales Return Order"
- pageextension/7000010 "SII Posted Sales Credit Memo"
- pageextension/7000011 "SII Posted Sales Invoice"
- pageextension/7000027 "SII Payment Methods"
- pageextension/7000030 "SII O365 Activities"
- pageextension/7000031 "SII Accountant Activities"
- pageextension/7000032 "SII Account Manager Activities"
- pageextension/7000033 "SII Acc. Payables Activities"
- pageextension/7000035 "SII Acc. Receivable Activities"
- pageextension/7000036 "SII VAT Clauses"
- pageextension/7000037 "SII VAT Posting Setup"
- pageextension/7000039 "SII Bookkeeper Activities"
- pageextension/7000040 "SII Finance Manager RC"
- pageextension/7000041 "SII AccountantPortal Act. Cues"
- pageextension/7000042 "SII PostedPurchaseCreditMemos"
- pageextension/7000043 "SII Posted Purchase Invoices"
- pageextension/7000045 "SII VAT Posting Setup Card"
- pageextension/7000046 "SII Posted Sales Credit Memos"
- pageextension/7000047 "SII Posted Sales Invoices"
- pageextension/7000048 "SII Pstd. Sales Cr.Memo Update"
- pageextension/7000049 "SII SO Processor Activities"
- pageextension/7000051 "SII Posted Purch.CrMemo Update"
- permissionsetextension/1001 "SII LOCAL"
- permissionsetextension/7000002 "SII LOCAL READ"
- report/10700 "Set Period Trans. Nos."
- report/10702 "Customer - Annual Declaration"
- report/10703 "Vendor - Annual Declaration"
- report/10704 "Sales Invoice Book"
- report/10705 "Purchases Invoice Book"
- report/10706 "Account - Official Acc. Book"
- report/10707 "Make 347 Declaration"
- report/10708 "Make 347 Declaration Labels"
- report/10709 "Make 349 Declaration Labels"
- report/10710 "Make 349 Declaration"
- report/10711 "Detail Account Statement"
- report/10712 "Purchases - AutoInvoice"
- report/10713 "Purchases - AutoCredit Memo"
- report/10714 "AutoInvoices List"
- report/10715 "Telematic VAT Declaration"
- report/10716 "Official Acc.Summarized Book"
- report/10717 "Normalized Account Schedule"
- report/10718 "XML VAT Declaration"
- report/10720 "Export Schedules to ASC format"
- report/10721 "Export Electronic Payments"
- report/10722 "Void Electronic Payments"
- report/10723 "Main Accounting Book"
- report/10725 "Detail Acc. Stat.- C&O Entries"
- report/10740 "Long Term Sales Invoices"
- report/10741 "Long Term Purchase Invoices"
- report/10742 "Test VAT Registration Number"
- report/10743 "Make 340 Declaration"
- report/10746 "Not Fully Applied Cash Pmts."
- report/10747 "Customer - Overdue Payments"
- report/10748 "Vendor - Overdue Payments"
- report/10790 "Service Order (ES)"
- report/10791 "Service Credit Memo (ES)"
- report/10792 "Service Invoice (ES)"
- report/7000000 "Bill Group Listing"
- report/7000001 "Posted Bill Group Listing"
- report/7000002 "Closed Bill Group Listing"
- report/7000003 "Receivable Bill"
- report/7000004 "Bank - Summ. Bill Group"
- report/7000005 "Bank - Risk"
- report/7000006 "Customer - Due Payments"
- report/7000007 "Vendor - Due Payments"
- report/7000008 "Bill Group - Test"
- report/7000009 "Payment Order - Test"
- report/7000010 "Payment Order Listing"
- report/7000011 "Posted Payment Order Listing"
- report/7000012 "Closed Payment Order Listing"
- report/7000050 "Notice Assignment Credits"
- report/7000060 "PO - Export N34.1"
- report/7000061 "Void PO - Export"
- report/7000080 "Post Payment Order"
- report/7000082 "Settle Docs. in Posted PO"
- report/7000083 "Redraw Payable Bills"
- report/7000084 "Partial Settl.- Receivable"
- report/7000085 "Partial Settl. - Payable"
- report/7000086 "Batch Settl. Posted Bill Grs."
- report/7000087 "Batch Settl. Posted POs"
- report/7000089 "Bill group - Export factoring"
- report/7000090 "Payment order - Export N34"
- report/7000091 "Bill group - Export N58"
- report/7000092 "Bill group - Export N19"
- report/7000093 "Bill group - Export N32"
- report/7000094 "Categorize Posted Documents"
- report/7000095 "Categorize Documents"
- report/7000096 "Redraw Receivable Bills"
- report/7000097 "Reject Docs."
- report/7000098 "Settle Docs. in Post. Bill Gr."
- report/7000099 "Post Bill Group"
- table/10700 "Inc. Stmt. Clos. Buffer"
- table/10701 "Payment Day"
- table/10702 "Non-Payment Period"
- table/10703 "Acc. Schedule Buffer"
- table/10704 "Sales/Purch. Book VAT Buffer"
- table/10705 "AEAT Transference Format"
- table/10706 "Statistical Code"
- table/10710 "AEAT Transference Format XML"
- table/10720 "G/L Accounts Equivalence Tool"
- table/10721 "Historic G/L Account"
- table/10722 "New G/L Account"
- table/10723 "G/L Acc. Equiv. Tool Setup"
- table/10724 "History of Equivalences COA"
- table/10725 "Hist. G/L Account (An. View)"
- table/10726 "G/L Account Buffer"
- table/10727 "Selected G/L Accounts"
- table/10730 "Gen. Prod. Post. Group Buffer"
- table/10731 "Selected Gen. Prod. Post. Gr."
- table/10732 "Customer/Vendor Warning 349"
- table/10733 "Selected Gen. Prod. Post. 340"
- table/10734 "Selected Rev. Charge Grp. 340"
- table/10740 "No Taxable Entry"
- table/10743 "Customer Cash Buffer"
- table/10744 "340 Declaration Line"
- table/10745 "Operation Code"
- table/10750 "SII History"
- table/10751 "SII Setup"
- table/10752 "SII Doc. Upload State"
- table/10753 "SII Session"
- table/10754 "SII Missing Entries State"
- table/10755 "SII Sales Document Scheme Code"
- table/10756 "SII Purch. Doc. Scheme Code"
- table/10799 "SII Sending State"
- table/7000002 "Cartera Doc."
- table/7000003 "Posted Cartera Doc."
- table/7000004 "Closed Cartera Doc."
- table/7000005 "Bill Group"
- table/7000006 "Posted Bill Group"
- table/7000007 "Closed Bill Group"
- table/7000008 "BG/PO Comment Line"
- table/7000009 "Category Code"
- table/7000010 "Operation Fee"
- table/7000011 "Doc. Post. Buffer"
- table/7000012 "BG/PO Post. Buffer"
- table/7000013 "Cartera Report Selections"
- table/7000014 "Customer Pmt. Address"
- table/7000015 "Vendor Pmt. Address"
- table/7000016 "Cartera Setup"
- table/7000018 "Installment"
- table/7000019 "Fee Range"
- table/7000020 "Payment Order"
- table/7000021 "Posted Payment Order"
- table/7000022 "Closed Payment Order"
- table/7000023 "Customer Rating"
- table/7000024 "Suffix"
- tableextension/254 "SII VAT Entry"
- tableextension/10710 "Service Header Archive ES"
- tableextension/10711 "Service Line Archive ES"
- tableextension/10790 "Service Header ES"
- tableextension/10791 "Service Line ES"
- tableextension/10792 "Service Invoice Header ES"
- tableextension/10793 "Service Invoice Line ES"
- tableextension/10794 "Service Cr.Memo Header ES"
- tableextension/10795 "Service Cr.Memo Line ES"
- tableextension/10796 "Service Shipment Header ES"
- tableextension/7000000 "SourceCodeSetupES"
- tableextension/7000012 "SII Purchase Header"
- tableextension/7000013 "SII Purchase Line"
- tableextension/7000014 "SII Purch. Inv. Header"
- tableextension/7000015 "SII Purch. Inv. Line"
- tableextension/7000016 "SII Purch. Cr. Memo Hdr."
- tableextension/7000017 "SII Purch. Cr. Memo Line"
- tableextension/7000018 "SII Vendor Ledger Entry"
- tableextension/7000019 "SII Sales Header"
- tableextension/7000020 "SII Sales Line"
- tableextension/7000021 "SII Sales Inv. Header"
- tableextension/7000022 "SII Sales Inv. Line"
- tableextension/7000023 "SII Sales Cr. Memo Header"
- tableextension/7000024 "SII Sales Cr. Memo Line"
- tableextension/7000025 "SII Cust. Ledger Entry"
- tableextension/7000026 "SII Payment Method"
- tableextension/7000028 "SII Gen. Journal Line"
- tableextension/7000029 "SII VAT Clause"
- tableextension/7000030 "SII VAT Posting Setup"
- tableextension/7000031 "SII Finance Cue"
- tableextension/7000040 "SII No Taxable Entry"
- tableextension/7000043 "SII Activities Cue"
- tableextension/7000045 "SII Purchase Cue"
- tableextension/7000046 "SII Sales Cue"
- xmlport/10700 "Hist. Consolid. Import/Export"
- xmlport/10720 "G/L Importing Tool"

## Other versions

- BC30: 530 objects differ from W1 (314 fields, 63 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
