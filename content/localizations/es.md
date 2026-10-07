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
  at: "2026-10-07T01:08:41.552Z"
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

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/254 "VAT Entry"](../objects/table/254.md), [table/325 "VAT Posting Setup"](../objects/table/325.md), [table/290 "VAT Amount Line"](../objects/table/290.md), [report/12 "VAT Statement"](../objects/report/12.md), [report/94 "Close Income Statement"](../objects/report/94.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [codeunit/7000000 "CarteraManagement"](../objects/codeunit/7000000-es.md) (own).

[All 161 objects of Finance in the diff](?ns=Finance#country-diff)

### Sales

Adds Cartera bill fields and CCC fields on customer ledger and bank account tables. Adds bill account fields on Customer Posting Group, and corrected invoice and EC fields on sales documents. Adds bill group pages and export codeunits for N19, N32, N58 and factoring.

Why: Learn documents corrective invoices, the receivables Cartera module and EC.

Objects: [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [table/92 "Customer Posting Group"](../objects/table/92.md), [table/287 "Customer Bank Account"](../objects/table/287.md), [table/36 "Sales Header"](../objects/table/36.md), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [codeunit/226 "CustEntry-Apply Posted Entries"](../objects/codeunit/226.md), [codeunit/7000092 "Bill group - Export N19"](../objects/codeunit/7000092-es.md) (own), [page/7000009 "Bill Groups"](../objects/page/7000009-es.md) (own).

[All 105 objects of Sales in the diff](?ns=Sales#country-diff)

### Purchases

Adds payment order pages, N34 and N34.1 export codeunits, and bill and autodocument fields on vendor ledger entries. Extends purchase documents with corrected invoice, auto-invoice and EC fields, and vendor bank accounts with CCC and electronic payment fields.

Why: Learn documents the payments Cartera module, AEB N34.1 electronic payments and same external document numbers across fiscal years.

Objects: [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/38 "Purchase Header"](../objects/table/38.md), [codeunit/90 "Purch.-Post"](../objects/codeunit/90.md), [codeunit/7000090 "Payment order - Export N34"](../objects/codeunit/7000090-es.md) (own), [codeunit/7000060 "PO - Export N34.1"](../objects/codeunit/7000060-es.md) (own), [page/7000050 "Payment Orders"](../objects/page/7000050-es.md) (own), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 85 objects of Purchases in the diff](?ns=Purchases#country-diff)

### EServices

Adds the SII framework: XML creator, job management, upload and retry codeunits, scheme code and invoice type enums, and setup and history pages. Also adds electronic payment management and creation codeunits.

Why: Learn covers SII setup and invoice types, and VERI*FACTU as an SII alternative.

Objects: [codeunit/10750 "SII XML Creator"](../objects/codeunit/10750-es.md) (own), [codeunit/10756 "SII Management"](../objects/codeunit/10756-es.md) (own), [codeunit/10752 "SII Doc. Upload Management"](../objects/codeunit/10752-es.md) (own), [page/10751 "SII Setup"](../objects/page/10751-es.md) (own), [page/10752 "SII History"](../objects/page/10752-es.md) (own), [codeunit/10721 "Create Electronic Payments"](../objects/codeunit/10721-es.md) (own), [codeunit/10701 "Elect. Pmts Management"](../objects/codeunit/10701-es.md) (own), [enum/10700 "SII Sales Special Scheme Code"](../objects/enum/10700-es.md) (own).

[All 83 objects of EServices in the diff](?ns=EServices#country-diff)

### Service

Adds ES extensions on service headers, lines and posted documents, edit codeunits and update pages, and Spanish service order, invoice and credit memo reports. Service posting creates bills.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/5987 "Serv-Posting Journals Mgt."](../objects/codeunit/5987.md), [codeunit/10763 "Service Document Subscr. ES"](../objects/codeunit/10763-es.md) (own), [codeunit/10789 "Service Posting Subscr. ES"](../objects/codeunit/10789-es.md) (own), [tableextension/10790 "Service Header ES"](../objects/tableextension/10790-es.md) (own), [report/10792 "Service Invoice (ES)"](../objects/report/10792-es.md) (own), [report/10790 "Service Order (ES)"](../objects/report/10790-es.md) (own), [codeunit/10768 "Service Invoice Header - Edit"](../objects/codeunit/10768-es.md) (own), [page/10768 "Posted Serv. Invoice - Update"](../objects/page/10768-es.md) (own).

[All 30 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Extends Payment Terms with due date limit fields, and Company Information with CNAE and CCC fields. Adds Post Code county code, Country/Region VAT number digits and Category Code. Navigate finds Cartera documents.

Why: Learn explains legal limits on payment delays and NACE code entry.

Objects: [table/3 "Payment Terms"](../objects/table/3.md), [table/79 "Company Information"](../objects/table/79.md), [page/344 "Navigate"](../objects/page/344.md), [table/9 "Country/Region"](../objects/table/9.md), [table/225 "Post Code"](../objects/table/225.md), [table/7000009 "Category Code"](../objects/table/7000009-es.md) (own), [table/242 "Source Code Setup"](../objects/table/242.md), [table/265 "Document Entry"](../objects/table/265.md).

[All 13 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Bank

Bank Account gains CCC, E-Pay and bill group fields, with totals procedures. Payment Method gets Cartera fields, bank posting groups get bill accounts, and SEPA and direct debit objects get events and fields. Check report amount-in-words is changed.

Why: Learn documents CCC codes and electronic payment setup.

Objects: [table/270 "Bank Account"](../objects/table/270.md), [table/289 "Payment Method"](../objects/table/289.md), [table/277 "Bank Account Posting Group"](../objects/table/277.md), [table/1207 "Direct Debit Collection"](../objects/table/1207.md), [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md), [report/7000005 "Bank - Risk"](../objects/report/7000005-es.md) (own), [report/1401 "Check"](../objects/report/1401.md), [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md).

[All 12 objects of Bank in the diff](?ns=Bank#country-diff)

### Microsoft

Adds the G/L accounts equivalence tool tables, historic account tables, buffers and import/export xmlports for chart of accounts changes and consolidation.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/10720 "G/L Accounts Equivalence Tool"](../objects/table/10720-es.md) (own), [table/10721 "Historic G/L Account"](../objects/table/10721-es.md) (own), [table/10722 "New G/L Account"](../objects/table/10722-es.md) (own), [xmlport/10720 "G/L Importing Tool"](../objects/xmlport/10720-es.md) (own), [xmlport/10700 "Hist. Consolid. Import/Export"](../objects/xmlport/10700-es.md) (own), [table/10700 "Inc. Stmt. Clos. Buffer"](../objects/table/10700-es.md) (own), [table/10703 "Acc. Schedule Buffer"](../objects/table/10703-es.md) (own), [enum/10727 "ES Document Situation"](../objects/enum/10727-es.md) (own).

[All 11 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### (no namespace)

Holds the Post Payment Order report and SII activity cue extension. Other objects are upgrade and sandbox cleanup plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/7000080 "Post Payment Order"](../objects/report/7000080-es.md) (own), [pageextension/7000030 "SII O365 Activities"](../objects/pageextension/7000030-es.md) (own).

[All 7 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Inventory

Adds shipment method fields on item journal and ledger entries, Intrastat fields, a cost regulation percentage on Item, and port/airport on Transport Method.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/263 "Intrastat Jnl. Line"](../objects/table/263.md), [table/83 "Item Journal Line"](../objects/table/83.md), [table/27 "Item"](../objects/table/27.md), [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/259 "Transport Method"](../objects/table/259.md), [table/284 "Area"](../objects/table/284.md), [table/1382 "Item Templ."](../objects/table/1382.md).

[All 7 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Security

Changes local permission sets and adds SII permission set extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionsetextension/1001 "SII LOCAL"](../objects/permissionsetextension/1001-es.md) (own), [permissionsetextension/7000002 "SII LOCAL READ"](../objects/permissionsetextension/7000002-es.md) (own), [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [permissionset/1083 "Bank Accounts - View"](../objects/permissionset/1083.md), [permissionset/4103 "General Ledger Journals - Edit"](../objects/permissionset/4103.md).

[All 7 objects of Security in the diff](?ns=Security#country-diff)

### CashFlow

Suggest Worksheet Lines splits sales and purchase invoices by installments. A service extension adds an event for service lines.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/840 "Suggest Worksheet Lines"](../objects/report/840.md), [codeunit/7000034 "Serv. SuggestWorksheetLines ES"](../objects/codeunit/7000034-es.md) (own), [reportextension/6485 "Serv. Suggest Worksheet Lines"](../objects/reportextension/6485.md).

[All 3 objects of CashFlow in the diff](?ns=CashFlow#country-diff)

### Utilities

Copy Document Mgt. adds checks and ledger entry updates for Cartera bills. Adds Localization Management and SII data classification.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6620 "Copy Document Mgt."](../objects/codeunit/6620.md), [codeunit/10760 "Localization Management"](../objects/codeunit/10760-es.md) (own), [codeunit/7000030 "SII DataClass EvalData Country"](../objects/codeunit/7000030-es.md) (own).

[All 3 objects of Utilities in the diff](?ns=Utilities#country-diff)

### HumanResources

Employee gains first, middle and last name fields with an upgrade procedure from old name fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md), [table/5205 "Employee Relative"](../objects/table/5205.md).

[All 2 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

### RoleCenters

Cue tables gain Cartera document counts, and an SII activities cue is added.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/9060 "SB Owner Cue"](../objects/table/9060.md), [tableextension/7000043 "SII Activities Cue"](../objects/tableextension/7000043-es.md) (own).

[All 2 objects of RoleCenters in the diff](?ns=RoleCenters#country-diff)

### AccountantPortal

Adds SII cues to the accountant portal activities.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/7000041 "SII AccountantPortal Act. Cues"](../objects/pageextension/7000041-es.md) (own).

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

389 objects only this country has.

- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-es.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-es.md)
- [codeunit/10700 "Due Date-Adjust"](../objects/codeunit/10700-es.md)
- [codeunit/10701 "Elect. Pmts Management"](../objects/codeunit/10701-es.md)
- [codeunit/10710 "Serv. Make 349 Declaration"](../objects/codeunit/10710-es.md)
- [codeunit/10721 "Create Electronic Payments"](../objects/codeunit/10721-es.md)
- [codeunit/10740 "No Taxable Mgt."](../objects/codeunit/10740-es.md)
- [codeunit/10741 "Serv. No Taxable Mgt."](../objects/codeunit/10741-es.md)
- [codeunit/10750 "SII XML Creator"](../objects/codeunit/10750-es.md)
- [codeunit/10751 "SII Job Management"](../objects/codeunit/10751-es.md)
- [codeunit/10752 "SII Doc. Upload Management"](../objects/codeunit/10752-es.md)
- [codeunit/10753 "SII Job Upload Pending Docs."](../objects/codeunit/10753-es.md)
- [codeunit/10754 "SII Job Retry Comm. Error"](../objects/codeunit/10754-es.md)
- [codeunit/10755 "SII Initial Doc. Upload"](../objects/codeunit/10755-es.md)
- [codeunit/10756 "SII Management"](../objects/codeunit/10756-es.md)
- [codeunit/10757 "SII Recreate Missing Entries"](../objects/codeunit/10757-es.md)
- [codeunit/10758 "SII Scheme Code Mgt."](../objects/codeunit/10758-es.md)
- [codeunit/10759 "Serv. SII Management"](../objects/codeunit/10759-es.md)
- [codeunit/10760 "Localization Management"](../objects/codeunit/10760-es.md)
- [codeunit/10762 "Service History Subscr. ES"](../objects/codeunit/10762-es.md)
- [codeunit/10763 "Service Document Subscr. ES"](../objects/codeunit/10763-es.md)
- [codeunit/10765 "Sales Invoice Header - Edit"](../objects/codeunit/10765-es.md)
- [codeunit/10767 "Purch. Cr. Memo Hdr. - Edit"](../objects/codeunit/10767-es.md)
- [codeunit/10768 "Service Invoice Header - Edit"](../objects/codeunit/10768-es.md)
- [codeunit/10769 "Service Cr. Memo Header - Edit"](../objects/codeunit/10769-es.md)
- [codeunit/10788 "Sales Document Subscr. ES"](../objects/codeunit/10788-es.md)
- [codeunit/10789 "Service Posting Subscr. ES"](../objects/codeunit/10789-es.md)
- [codeunit/10791 "Serv. Report Selection Mgt. ES"](../objects/codeunit/10791-es.md)
- [codeunit/10840 "No Taxable - Generate Entries"](../objects/codeunit/10840-es.md)
- [codeunit/104100 "UPG SII"](../objects/codeunit/104100-es.md)
- [codeunit/104102 "Upg No Taxable"](../objects/codeunit/104102-es.md)
- [codeunit/104107 "Upg Report Selections"](../objects/codeunit/104107-es.md)
- [codeunit/7000000 "CarteraManagement"](../objects/codeunit/7000000-es.md)
- [codeunit/7000001 "G/L Reg.-Docs."](../objects/codeunit/7000001-es.md)
- [codeunit/7000003 "BG/PO-Post and Print"](../objects/codeunit/7000003-es.md)
- [codeunit/7000004 "Document-Move"](../objects/codeunit/7000004-es.md)
- [codeunit/7000005 "Invoice-Split Payment"](../objects/codeunit/7000005-es.md)
- [codeunit/7000006 "Document-Post"](../objects/codeunit/7000006-es.md)
- [codeunit/7000007 "Document-Misc"](../objects/codeunit/7000007-es.md)
- [codeunit/7000008 "Document-Edit"](../objects/codeunit/7000008-es.md)
- [codeunit/7000009 "Posted Cartera Doc.- Edit"](../objects/codeunit/7000009-es.md)
- [codeunit/7000010 "Company-Initialize Cartera"](../objects/codeunit/7000010-es.md)
- [codeunit/7000026 "SII Purchase Subscribers"](../objects/codeunit/7000026-es.md)
- [codeunit/7000027 "SII Sales Subscribers"](../objects/codeunit/7000027-es.md)
- [codeunit/7000029 "SII VAT Subscribers"](../objects/codeunit/7000029-es.md)
- [codeunit/7000030 "SII DataClass EvalData Country"](../objects/codeunit/7000030-es.md)
- [codeunit/7000034 "Serv. SuggestWorksheetLines ES"](../objects/codeunit/7000034-es.md)
- [codeunit/7000035 "Serv. Invoice-Split Payment"](../objects/codeunit/7000035-es.md)
- [codeunit/7000060 "PO - Export N34.1"](../objects/codeunit/7000060-es.md)
- [codeunit/7000089 "Bill group - Export factoring"](../objects/codeunit/7000089-es.md)
- [codeunit/7000090 "Payment order - Export N34"](../objects/codeunit/7000090-es.md)
- [codeunit/7000091 "Bill group - Export N58"](../objects/codeunit/7000091-es.md)
- [codeunit/7000092 "Bill group - Export N19"](../objects/codeunit/7000092-es.md)
- [codeunit/7000093 "Bill group - Export N32"](../objects/codeunit/7000093-es.md)
- [enum/10700 "SII Sales Special Scheme Code"](../objects/enum/10700-es.md)
- [enum/10701 "SII Purch. Special Scheme Code"](../objects/enum/10701-es.md)
- [enum/10702 "SII Sales Upload Scheme Code"](../objects/enum/10702-es.md)
- [enum/10703 "SII Purch. Upload Scheme Code"](../objects/enum/10703-es.md)
- [enum/10704 "SII Operation Date Type"](../objects/enum/10704-es.md)
- [enum/10705 "SII Tax Period"](../objects/enum/10705-es.md)
- [enum/10706 "SII Sales Invoice Type"](../objects/enum/10706-es.md)
- [enum/10707 "SII Purch. Invoice Type"](../objects/enum/10707-es.md)
- [enum/10708 "SII Sales Credit Memo Type"](../objects/enum/10708-es.md)
- [enum/10709 "SII Purch. Credit Memo Type"](../objects/enum/10709-es.md)
- [enum/10710 "SII ID Type"](../objects/enum/10710-es.md)
- [enum/10711 "SII Document Status"](../objects/enum/10711-es.md)
- [enum/10712 "SII Sales Upload Invoice Type"](../objects/enum/10712-es.md)
- [enum/10713 "SII Purch. Upload Invoice Type"](../objects/enum/10713-es.md)
- [enum/10714 "SII Sales Upload Credit Memo Type"](../objects/enum/10714-es.md)
- [enum/10715 "SII Purch. Upload Cr. Memo Type"](../objects/enum/10715-es.md)
- [enum/10721 "SII Exemption Code"](../objects/enum/10721-es.md)
- [enum/10722 "ES Bill Type"](../objects/enum/10722-es.md)
- [enum/10723 "ES Document Status"](../objects/enum/10723-es.md)
- [enum/10724 "Cartera Document Status"](../objects/enum/10724-es.md)
- [enum/10727 "ES Document Situation"](../objects/enum/10727-es.md)
- [enum/10755 "SII Doc. Upload State Document Source"](../objects/enum/10755-es.md)
- [enum/10756 "SII Doc. Upload State Document Type"](../objects/enum/10756-es.md)
- [enum/7000000 "Cartera Document Type"](../objects/enum/7000000-es.md)
- [enum/7000025 "Cartera Document Doc. Type"](../objects/enum/7000025-es.md)
- [enum/7000026 "Cartera Dealing Type"](../objects/enum/7000026-es.md)
- [enum/7000045 "Report Selection Usage Cartera"](../objects/enum/7000045-es.md)
- [enumextension/20 "G/L Account Report Type ES"](../objects/enumextension/20-es.md)
- [page/10700 "Payment Days"](../objects/page/10700-es.md)
- [page/10701 "Non-Payment Periods"](../objects/page/10701-es.md)
- [page/10704 "Transference Format"](../objects/page/10704-es.md)
- [page/10705 "Copy Data Transference Format"](../objects/page/10705-es.md)
- [page/10706 "Statistical Codes"](../objects/page/10706-es.md)
- [page/10710 "XML Transference Format"](../objects/page/10710-es.md)
- [page/10734 "G/L Account Selection"](../objects/page/10734-es.md)
- [page/10735 "Gen. Prod. Post. Gr. Selection"](../objects/page/10735-es.md)
- [page/10736 "Customer/Vendor Warnings 349"](../objects/page/10736-es.md)
- [page/10737 "Gen. Prod. Post. Selection 340"](../objects/page/10737-es.md)
- [page/10738 "Rev. Chg. Post. Selection 340"](../objects/page/10738-es.md)
- [page/10740 "No Taxable Entries"](../objects/page/10740-es.md)
- [page/10744 "340 Declaration Lines"](../objects/page/10744-es.md)
- [page/10745 "Operation Codes"](../objects/page/10745-es.md)
- [page/10751 "SII Setup"](../objects/page/10751-es.md)
- [page/10752 "SII History"](../objects/page/10752-es.md)
- [page/10753 "Recreate Missing SII Entries"](../objects/page/10753-es.md)
- [page/10765 "Posted Sales Invoice - Update"](../objects/page/10765-es.md)
- [page/10767 "Posted Purch. Cr.Memo - Update"](../objects/page/10767-es.md)
- [page/10768 "Posted Serv. Invoice - Update"](../objects/page/10768-es.md)
- [page/10769 "Posted Serv. Cr. Memo - Update"](../objects/page/10769-es.md)
- [page/10770 "SII Sales Doc. Scheme Codes"](../objects/page/10770-es.md)
- [page/10771 "SII Purch. Doc. Scheme Codes"](../objects/page/10771-es.md)
- [page/35290 "Rec. Docs Analysis Fact Box"](../objects/page/35290-es.md)
- [page/35291 "BG Analysis Fact Box"](../objects/page/35291-es.md)
- [page/35292 "Post. BG Analysis LCY Fact Box"](../objects/page/35292-es.md)
- [page/35293 "Post. BG Analysis Non LCY FB"](../objects/page/35293-es.md)
- [page/35294 "Closed BG Analysis LCY FB"](../objects/page/35294-es.md)
- [page/35295 "Closed BG Analysis Non LCY FB"](../objects/page/35295-es.md)
- [page/35296 "Closed Docs Analysis LCY FB"](../objects/page/35296-es.md)
- [page/35297 "Closed Docs Analysis NonLCY FB"](../objects/page/35297-es.md)
- [page/35298 "Pmt Orders Analysis Fact Box"](../objects/page/35298-es.md)
- [page/35299 "Post. PO Analysis LCY Fact Box"](../objects/page/35299-es.md)
- [page/35300 "Post. PO Analysis Non LCY FB"](../objects/page/35300-es.md)
- [page/35301 "Closed PO Analysis LCY FB"](../objects/page/35301-es.md)
- [page/35302 "Closed PO Analysis Non LCY FB"](../objects/page/35302-es.md)
- [page/35303 "Bank Account Information FB"](../objects/page/35303-es.md)
- [page/35304 "Cartera Receiv. Statistics FB"](../objects/page/35304-es.md)
- [page/35305 "Cartera Payables Statistics FB"](../objects/page/35305-es.md)
- [page/35306 "Cartera Fact. Statistics FB"](../objects/page/35306-es.md)
- [page/36848 "Bank Cat.Post.Rec.Bills Matrix"](../objects/page/36848-es.md)
- [page/36850 "Bank Cat.Post.Pay.Bills Matrix"](../objects/page/36850-es.md)
- [page/7000001 "Receivables Cartera Docs"](../objects/page/7000001-es.md)
- [page/7000002 "Payables Cartera Docs"](../objects/page/7000002-es.md)
- [page/7000003 "Cartera Documents"](../objects/page/7000003-es.md)
- [page/7000004 "Docs. in BG Subform"](../objects/page/7000004-es.md)
- [page/7000005 "Docs. in Posted BG Subform"](../objects/page/7000005-es.md)
- [page/7000006 "Posted Cartera Documents"](../objects/page/7000006-es.md)
- [page/7000007 "Closed Cartera Documents"](../objects/page/7000007-es.md)
- [page/7000008 "Docs. in Closed BG Subform"](../objects/page/7000008-es.md)
- [page/7000009 "Bill Groups"](../objects/page/7000009-es.md)
- [page/7000010 "Receivable Closed Cartera Docs"](../objects/page/7000010-es.md)
- [page/7000011 "Bill Groups List"](../objects/page/7000011-es.md)
- [page/7000012 "Posted Bill Groups"](../objects/page/7000012-es.md)
- [page/7000013 "Payable Closed Cartera Docs"](../objects/page/7000013-es.md)
- [page/7000014 "Posted Bill Groups List"](../objects/page/7000014-es.md)
- [page/7000015 "Closed Bill Groups"](../objects/page/7000015-es.md)
- [page/7000017 "Closed Bill Groups List"](../objects/page/7000017-es.md)
- [page/7000018 "Bank Account Selection"](../objects/page/7000018-es.md)
- [page/7000019 "Documents Analysis"](../objects/page/7000019-es.md)
- [page/7000020 "Bill Groups Analysis"](../objects/page/7000020-es.md)
- [page/7000021 "Posted Bill Groups Analysis"](../objects/page/7000021-es.md)
- [page/7000022 "Closed Bill Groups Analysis"](../objects/page/7000022-es.md)
- [page/7000023 "Category Codes"](../objects/page/7000023-es.md)
- [page/7000024 "BG/PO Comment List"](../objects/page/7000024-es.md)
- [page/7000025 "BG/PO Comment Sheet"](../objects/page/7000025-es.md)
- [page/7000026 "Operation Fees"](../objects/page/7000026-es.md)
- [page/7000029 "Documents Maturity"](../objects/page/7000029-es.md)
- [page/7000030 "Documents Maturity Lines"](../objects/page/7000030-es.md)
- [page/7000031 "Bill Groups Maturity"](../objects/page/7000031-es.md)
- [page/7000032 "BG/PO Maturity Lines"](../objects/page/7000032-es.md)
- [page/7000033 "Posted Bill Groups Maturity"](../objects/page/7000033-es.md)
- [page/7000034 "Posted Bill Gr. Maturity Lines"](../objects/page/7000034-es.md)
- [page/7000036 "Cartera Journal"](../objects/page/7000036-es.md)
- [page/7000037 "Check Discount Credit Limit"](../objects/page/7000037-es.md)
- [page/7000040 "Cartera Setup"](../objects/page/7000040-es.md)
- [page/7000041 "Cartera Source Cd. Setup"](../objects/page/7000041-es.md)
- [page/7000044 "Closed Documents Analysis"](../objects/page/7000044-es.md)
- [page/7000045 "Report Selection - Cartera"](../objects/page/7000045-es.md)
- [page/7000048 "Installments"](../objects/page/7000048-es.md)
- [page/7000049 "Fee Ranges"](../objects/page/7000049-es.md)
- [page/7000050 "Payment Orders"](../objects/page/7000050-es.md)
- [page/7000051 "Payment Orders List"](../objects/page/7000051-es.md)
- [page/7000052 "Payment Orders Maturity"](../objects/page/7000052-es.md)
- [page/7000053 "Payment Orders Analysis"](../objects/page/7000053-es.md)
- [page/7000054 "Posted Payment Orders"](../objects/page/7000054-es.md)
- [page/7000055 "Posted Payment Orders List"](../objects/page/7000055-es.md)
- [page/7000057 "Posted Payment Orders Maturity"](../objects/page/7000057-es.md)
- [page/7000058 "Post. Pmt. Ord. Maturity Lin."](../objects/page/7000058-es.md)
- [page/7000059 "Post. Payment Orders Analysis"](../objects/page/7000059-es.md)
- [page/7000060 "Closed Payment Orders"](../objects/page/7000060-es.md)
- [page/7000061 "Closed Payment Orders List"](../objects/page/7000061-es.md)
- [page/7000062 "Closed Pmt. Ord. Analysis"](../objects/page/7000062-es.md)
- [page/7000063 "Customer Ratings"](../objects/page/7000063-es.md)
- [page/7000064 "Posted Bill Group Select."](../objects/page/7000064-es.md)
- [page/7000065 "Posted Payment Orders Select."](../objects/page/7000065-es.md)
- [page/7000066 "Bank Cat. Posted Receiv. Bills"](../objects/page/7000066-es.md)
- [page/7000067 "Posted Bills"](../objects/page/7000067-es.md)
- [page/7000068 "Posted Bills Analysis"](../objects/page/7000068-es.md)
- [page/7000069 "Posted Receiv. Bills Maturity"](../objects/page/7000069-es.md)
- [page/7000070 "Posted Bills Maturity Lin."](../objects/page/7000070-es.md)
- [page/7000071 "Bank Cat. Posted Payable Bills"](../objects/page/7000071-es.md)
- [page/7000072 "Posted Payable Bills Maturity"](../objects/page/7000072-es.md)
- [page/7000073 "Suffixes"](../objects/page/7000073-es.md)
- [page/7000075 "Docs. in PO Subform"](../objects/page/7000075-es.md)
- [page/7000076 "Docs. in Posted PO Subform"](../objects/page/7000076-es.md)
- [page/7000077 "Docs. in Closed PO Subform"](../objects/page/7000077-es.md)
- [pageextension/10710 "Service Order Archive ES"](../objects/pageextension/10710-es.md)
- [pageextension/10730 "Service Order ES"](../objects/pageextension/10730-es.md)
- [pageextension/10731 "Posted Service Credit Memos ES"](../objects/pageextension/10731-es.md)
- [pageextension/10732 "Posted Service Credit Memo ES"](../objects/pageextension/10732-es.md)
- [pageextension/10733 "Service Invoice ES"](../objects/pageextension/10733-es.md)
- [pageextension/10735 "Service Credit Memo ES"](../objects/pageextension/10735-es.md)
- [pageextension/10736 "Posted Service Inv. Update ES"](../objects/pageextension/10736-es.md)
- [pageextension/10737 "Posted Service Invoices ES"](../objects/pageextension/10737-es.md)
- [pageextension/10738 "Posted Service Invoice ES"](../objects/pageextension/10738-es.md)
- [pageextension/7000000 "SII Purchase Credit Memo"](../objects/pageextension/7000000-es.md)
- [pageextension/7000001 "SII Purchase Invoice"](../objects/pageextension/7000001-es.md)
- [pageextension/7000002 "SII Purchase Order"](../objects/pageextension/7000002-es.md)
- [pageextension/7000003 "SII Purchase Return Order"](../objects/pageextension/7000003-es.md)
- [pageextension/7000004 "SII Posted Purch. Credit Memo"](../objects/pageextension/7000004-es.md)
- [pageextension/7000005 "SII Posted Purchase Invoice"](../objects/pageextension/7000005-es.md)
- [pageextension/7000006 "SII Sales Credit Memo"](../objects/pageextension/7000006-es.md)
- [pageextension/7000007 "SII Sales Invoice"](../objects/pageextension/7000007-es.md)
- [pageextension/7000008 "SII Sales Order"](../objects/pageextension/7000008-es.md)
- [pageextension/7000009 "SII Sales Return Order"](../objects/pageextension/7000009-es.md)
- [pageextension/7000010 "SII Posted Sales Credit Memo"](../objects/pageextension/7000010-es.md)
- [pageextension/7000011 "SII Posted Sales Invoice"](../objects/pageextension/7000011-es.md)
- [pageextension/7000027 "SII Payment Methods"](../objects/pageextension/7000027-es.md)
- [pageextension/7000030 "SII O365 Activities"](../objects/pageextension/7000030-es.md)
- [pageextension/7000031 "SII Accountant Activities"](../objects/pageextension/7000031-es.md)
- [pageextension/7000032 "SII Account Manager Activities"](../objects/pageextension/7000032-es.md)
- [pageextension/7000033 "SII Acc. Payables Activities"](../objects/pageextension/7000033-es.md)
- [pageextension/7000035 "SII Acc. Receivable Activities"](../objects/pageextension/7000035-es.md)
- [pageextension/7000036 "SII VAT Clauses"](../objects/pageextension/7000036-es.md)
- [pageextension/7000037 "SII VAT Posting Setup"](../objects/pageextension/7000037-es.md)
- [pageextension/7000039 "SII Bookkeeper Activities"](../objects/pageextension/7000039-es.md)
- [pageextension/7000040 "SII Finance Manager RC"](../objects/pageextension/7000040-es.md)
- [pageextension/7000041 "SII AccountantPortal Act. Cues"](../objects/pageextension/7000041-es.md)
- [pageextension/7000042 "SII PostedPurchaseCreditMemos"](../objects/pageextension/7000042-es.md)
- [pageextension/7000043 "SII Posted Purchase Invoices"](../objects/pageextension/7000043-es.md)
- [pageextension/7000045 "SII VAT Posting Setup Card"](../objects/pageextension/7000045-es.md)
- [pageextension/7000046 "SII Posted Sales Credit Memos"](../objects/pageextension/7000046-es.md)
- [pageextension/7000047 "SII Posted Sales Invoices"](../objects/pageextension/7000047-es.md)
- [pageextension/7000048 "SII Pstd. Sales Cr.Memo Update"](../objects/pageextension/7000048-es.md)
- [pageextension/7000049 "SII SO Processor Activities"](../objects/pageextension/7000049-es.md)
- [pageextension/7000051 "SII Posted Purch.CrMemo Update"](../objects/pageextension/7000051-es.md)
- [permissionsetextension/1001 "SII LOCAL"](../objects/permissionsetextension/1001-es.md)
- [permissionsetextension/7000002 "SII LOCAL READ"](../objects/permissionsetextension/7000002-es.md)
- [report/10700 "Set Period Trans. Nos."](../objects/report/10700-es.md)
- [report/10702 "Customer - Annual Declaration"](../objects/report/10702-es.md)
- [report/10703 "Vendor - Annual Declaration"](../objects/report/10703-es.md)
- [report/10704 "Sales Invoice Book"](../objects/report/10704-es.md)
- [report/10705 "Purchases Invoice Book"](../objects/report/10705-es.md)
- [report/10706 "Account - Official Acc. Book"](../objects/report/10706-es.md)
- [report/10707 "Make 347 Declaration"](../objects/report/10707-es.md)
- [report/10708 "Make 347 Declaration Labels"](../objects/report/10708-es.md)
- [report/10709 "Make 349 Declaration Labels"](../objects/report/10709-es.md)
- [report/10710 "Make 349 Declaration"](../objects/report/10710-es.md)
- [report/10711 "Detail Account Statement"](../objects/report/10711-es.md)
- [report/10712 "Purchases - AutoInvoice"](../objects/report/10712-es.md)
- [report/10713 "Purchases - AutoCredit Memo"](../objects/report/10713-es.md)
- [report/10714 "AutoInvoices List"](../objects/report/10714-es.md)
- [report/10715 "Telematic VAT Declaration"](../objects/report/10715-es.md)
- [report/10716 "Official Acc.Summarized Book"](../objects/report/10716-es.md)
- [report/10717 "Normalized Account Schedule"](../objects/report/10717-es.md)
- [report/10718 "XML VAT Declaration"](../objects/report/10718-es.md)
- [report/10720 "Export Schedules to ASC format"](../objects/report/10720-es.md)
- [report/10721 "Export Electronic Payments"](../objects/report/10721-es.md)
- [report/10722 "Void Electronic Payments"](../objects/report/10722-es.md)
- [report/10723 "Main Accounting Book"](../objects/report/10723-es.md)
- [report/10725 "Detail Acc. Stat.- C&O Entries"](../objects/report/10725-es.md)
- [report/10740 "Long Term Sales Invoices"](../objects/report/10740-es.md)
- [report/10741 "Long Term Purchase Invoices"](../objects/report/10741-es.md)
- [report/10742 "Test VAT Registration Number"](../objects/report/10742-es.md)
- [report/10743 "Make 340 Declaration"](../objects/report/10743-es.md)
- [report/10746 "Not Fully Applied Cash Pmts."](../objects/report/10746-es.md)
- [report/10747 "Customer - Overdue Payments"](../objects/report/10747-es.md)
- [report/10748 "Vendor - Overdue Payments"](../objects/report/10748-es.md)
- [report/10790 "Service Order (ES)"](../objects/report/10790-es.md)
- [report/10791 "Service Credit Memo (ES)"](../objects/report/10791-es.md)
- [report/10792 "Service Invoice (ES)"](../objects/report/10792-es.md)
- [report/7000000 "Bill Group Listing"](../objects/report/7000000-es.md)
- [report/7000001 "Posted Bill Group Listing"](../objects/report/7000001-es.md)
- [report/7000002 "Closed Bill Group Listing"](../objects/report/7000002-es.md)
- [report/7000003 "Receivable Bill"](../objects/report/7000003-es.md)
- [report/7000004 "Bank - Summ. Bill Group"](../objects/report/7000004-es.md)
- [report/7000005 "Bank - Risk"](../objects/report/7000005-es.md)
- [report/7000006 "Customer - Due Payments"](../objects/report/7000006-es.md)
- [report/7000007 "Vendor - Due Payments"](../objects/report/7000007-es.md)
- [report/7000008 "Bill Group - Test"](../objects/report/7000008-es.md)
- [report/7000009 "Payment Order - Test"](../objects/report/7000009-es.md)
- [report/7000010 "Payment Order Listing"](../objects/report/7000010-es.md)
- [report/7000011 "Posted Payment Order Listing"](../objects/report/7000011-es.md)
- [report/7000012 "Closed Payment Order Listing"](../objects/report/7000012-es.md)
- [report/7000050 "Notice Assignment Credits"](../objects/report/7000050-es.md)
- [report/7000060 "PO - Export N34.1"](../objects/report/7000060-es.md)
- [report/7000061 "Void PO - Export"](../objects/report/7000061-es.md)
- [report/7000080 "Post Payment Order"](../objects/report/7000080-es.md)
- [report/7000082 "Settle Docs. in Posted PO"](../objects/report/7000082-es.md)
- [report/7000083 "Redraw Payable Bills"](../objects/report/7000083-es.md)
- [report/7000084 "Partial Settl.- Receivable"](../objects/report/7000084-es.md)
- [report/7000085 "Partial Settl. - Payable"](../objects/report/7000085-es.md)
- [report/7000086 "Batch Settl. Posted Bill Grs."](../objects/report/7000086-es.md)
- [report/7000087 "Batch Settl. Posted POs"](../objects/report/7000087-es.md)
- [report/7000089 "Bill group - Export factoring"](../objects/report/7000089-es.md)
- [report/7000090 "Payment order - Export N34"](../objects/report/7000090-es.md)
- [report/7000091 "Bill group - Export N58"](../objects/report/7000091-es.md)
- [report/7000092 "Bill group - Export N19"](../objects/report/7000092-es.md)
- [report/7000093 "Bill group - Export N32"](../objects/report/7000093-es.md)
- [report/7000094 "Categorize Posted Documents"](../objects/report/7000094-es.md)
- [report/7000095 "Categorize Documents"](../objects/report/7000095-es.md)
- [report/7000096 "Redraw Receivable Bills"](../objects/report/7000096-es.md)
- [report/7000097 "Reject Docs."](../objects/report/7000097-es.md)
- [report/7000098 "Settle Docs. in Post. Bill Gr."](../objects/report/7000098-es.md)
- [report/7000099 "Post Bill Group"](../objects/report/7000099-es.md)
- [table/10700 "Inc. Stmt. Clos. Buffer"](../objects/table/10700-es.md)
- [table/10701 "Payment Day"](../objects/table/10701-es.md)
- [table/10702 "Non-Payment Period"](../objects/table/10702-es.md)
- [table/10703 "Acc. Schedule Buffer"](../objects/table/10703-es.md)
- [table/10704 "Sales/Purch. Book VAT Buffer"](../objects/table/10704-es.md)
- [table/10705 "AEAT Transference Format"](../objects/table/10705-es.md)
- [table/10706 "Statistical Code"](../objects/table/10706-es.md)
- [table/10710 "AEAT Transference Format XML"](../objects/table/10710-es.md)
- [table/10720 "G/L Accounts Equivalence Tool"](../objects/table/10720-es.md)
- [table/10721 "Historic G/L Account"](../objects/table/10721-es.md)
- [table/10722 "New G/L Account"](../objects/table/10722-es.md)
- [table/10723 "G/L Acc. Equiv. Tool Setup"](../objects/table/10723-es.md)
- [table/10724 "History of Equivalences COA"](../objects/table/10724-es.md)
- [table/10725 "Hist. G/L Account (An. View)"](../objects/table/10725-es.md)
- [table/10726 "G/L Account Buffer"](../objects/table/10726-es.md)
- [table/10727 "Selected G/L Accounts"](../objects/table/10727-es.md)
- [table/10730 "Gen. Prod. Post. Group Buffer"](../objects/table/10730-es.md)
- [table/10731 "Selected Gen. Prod. Post. Gr."](../objects/table/10731-es.md)
- [table/10732 "Customer/Vendor Warning 349"](../objects/table/10732-es.md)
- [table/10733 "Selected Gen. Prod. Post. 340"](../objects/table/10733-es.md)
- [table/10734 "Selected Rev. Charge Grp. 340"](../objects/table/10734-es.md)
- [table/10740 "No Taxable Entry"](../objects/table/10740-es.md)
- [table/10743 "Customer Cash Buffer"](../objects/table/10743-es.md)
- [table/10744 "340 Declaration Line"](../objects/table/10744-es.md)
- [table/10745 "Operation Code"](../objects/table/10745-es.md)
- [table/10750 "SII History"](../objects/table/10750-es.md)
- [table/10751 "SII Setup"](../objects/table/10751-es.md)
- [table/10752 "SII Doc. Upload State"](../objects/table/10752-es.md)
- [table/10753 "SII Session"](../objects/table/10753-es.md)
- [table/10754 "SII Missing Entries State"](../objects/table/10754-es.md)
- [table/10755 "SII Sales Document Scheme Code"](../objects/table/10755-es.md)
- [table/10756 "SII Purch. Doc. Scheme Code"](../objects/table/10756-es.md)
- [table/10799 "SII Sending State"](../objects/table/10799-es.md)
- [table/7000002 "Cartera Doc."](../objects/table/7000002-es.md)
- [table/7000003 "Posted Cartera Doc."](../objects/table/7000003-es.md)
- [table/7000004 "Closed Cartera Doc."](../objects/table/7000004-es.md)
- [table/7000005 "Bill Group"](../objects/table/7000005-es.md)
- [table/7000006 "Posted Bill Group"](../objects/table/7000006-es.md)
- [table/7000007 "Closed Bill Group"](../objects/table/7000007-es.md)
- [table/7000008 "BG/PO Comment Line"](../objects/table/7000008-es.md)
- [table/7000009 "Category Code"](../objects/table/7000009-es.md)
- [table/7000010 "Operation Fee"](../objects/table/7000010-es.md)
- [table/7000011 "Doc. Post. Buffer"](../objects/table/7000011-es.md)
- [table/7000012 "BG/PO Post. Buffer"](../objects/table/7000012-es.md)
- [table/7000013 "Cartera Report Selections"](../objects/table/7000013-es.md)
- [table/7000014 "Customer Pmt. Address"](../objects/table/7000014-es.md)
- [table/7000015 "Vendor Pmt. Address"](../objects/table/7000015-es.md)
- [table/7000016 "Cartera Setup"](../objects/table/7000016-es.md)
- [table/7000018 "Installment"](../objects/table/7000018-es.md)
- [table/7000019 "Fee Range"](../objects/table/7000019-es.md)
- [table/7000020 "Payment Order"](../objects/table/7000020-es.md)
- [table/7000021 "Posted Payment Order"](../objects/table/7000021-es.md)
- [table/7000022 "Closed Payment Order"](../objects/table/7000022-es.md)
- [table/7000023 "Customer Rating"](../objects/table/7000023-es.md)
- [table/7000024 "Suffix"](../objects/table/7000024-es.md)
- [tableextension/254 "SII VAT Entry"](../objects/tableextension/254-es.md)
- [tableextension/10710 "Service Header Archive ES"](../objects/tableextension/10710-es.md)
- [tableextension/10711 "Service Line Archive ES"](../objects/tableextension/10711-es.md)
- [tableextension/10790 "Service Header ES"](../objects/tableextension/10790-es.md)
- [tableextension/10791 "Service Line ES"](../objects/tableextension/10791-es.md)
- [tableextension/10792 "Service Invoice Header ES"](../objects/tableextension/10792-es.md)
- [tableextension/10793 "Service Invoice Line ES"](../objects/tableextension/10793-es.md)
- [tableextension/10794 "Service Cr.Memo Header ES"](../objects/tableextension/10794-es.md)
- [tableextension/10795 "Service Cr.Memo Line ES"](../objects/tableextension/10795-es.md)
- [tableextension/10796 "Service Shipment Header ES"](../objects/tableextension/10796-es.md)
- [tableextension/7000000 "SourceCodeSetupES"](../objects/tableextension/7000000-es.md)
- [tableextension/7000012 "SII Purchase Header"](../objects/tableextension/7000012-es.md)
- [tableextension/7000013 "SII Purchase Line"](../objects/tableextension/7000013-es.md)
- [tableextension/7000014 "SII Purch. Inv. Header"](../objects/tableextension/7000014-es.md)
- [tableextension/7000015 "SII Purch. Inv. Line"](../objects/tableextension/7000015-es.md)
- [tableextension/7000016 "SII Purch. Cr. Memo Hdr."](../objects/tableextension/7000016-es.md)
- [tableextension/7000017 "SII Purch. Cr. Memo Line"](../objects/tableextension/7000017-es.md)
- [tableextension/7000018 "SII Vendor Ledger Entry"](../objects/tableextension/7000018-es.md)
- [tableextension/7000019 "SII Sales Header"](../objects/tableextension/7000019-es.md)
- [tableextension/7000020 "SII Sales Line"](../objects/tableextension/7000020-es.md)
- [tableextension/7000021 "SII Sales Inv. Header"](../objects/tableextension/7000021-es.md)
- [tableextension/7000022 "SII Sales Inv. Line"](../objects/tableextension/7000022-es.md)
- [tableextension/7000023 "SII Sales Cr. Memo Header"](../objects/tableextension/7000023-es.md)
- [tableextension/7000024 "SII Sales Cr. Memo Line"](../objects/tableextension/7000024-es.md)
- [tableextension/7000025 "SII Cust. Ledger Entry"](../objects/tableextension/7000025-es.md)
- [tableextension/7000026 "SII Payment Method"](../objects/tableextension/7000026-es.md)
- [tableextension/7000028 "SII Gen. Journal Line"](../objects/tableextension/7000028-es.md)
- [tableextension/7000029 "SII VAT Clause"](../objects/tableextension/7000029-es.md)
- [tableextension/7000030 "SII VAT Posting Setup"](../objects/tableextension/7000030-es.md)
- [tableextension/7000031 "SII Finance Cue"](../objects/tableextension/7000031-es.md)
- [tableextension/7000040 "SII No Taxable Entry"](../objects/tableextension/7000040-es.md)
- [tableextension/7000043 "SII Activities Cue"](../objects/tableextension/7000043-es.md)
- [tableextension/7000045 "SII Purchase Cue"](../objects/tableextension/7000045-es.md)
- [tableextension/7000046 "SII Sales Cue"](../objects/tableextension/7000046-es.md)
- [xmlport/10700 "Hist. Consolid. Import/Export"](../objects/xmlport/10700-es.md)
- [xmlport/10720 "G/L Importing Tool"](../objects/xmlport/10720-es.md)

## Other versions

- BC30: 530 objects differ from W1 (314 fields, 63 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
