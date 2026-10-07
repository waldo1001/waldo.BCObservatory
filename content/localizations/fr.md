---
id: localization/fr
type: localization
title: France (FR)
summary: France localization of Business Central 29. It adds French payment management with payment slips, RIB bank keys, the FEC tax audit export, fiscal year closing, accelerated (derogatory) depreciation, SIREN/SIRET identifiers, DEB Intrastat and service declarations. It answers questions about local setup, posting rules and reports.
tier: official
language: en
tags:
  - localization
  - fr
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
  input_hash: a13b75ac316c186b741f0b921d29e7065dfd8028e74f1ba7e7883052d0177219
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-fr
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/12
    - object/codeunit/80
    - object/codeunit/358
    - object/codeunit/426
    - object/codeunit/1222
    - object/codeunit/1232
    - object/codeunit/1233
    - object/codeunit/5600
    - object/codeunit/5601
    - object/codeunit/5605
    - object/codeunit/5613
    - object/codeunit/5626
    - object/codeunit/5632
    - object/codeunit/5633
    - object/enum/8
    - object/enum/5601
    - object/enum/5602
    - object/enum/5603
    - object/enum/5606
    - object/enum/5615
    - object/page/131
    - object/page/133
    - object/page/370
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/117
    - object/report/1303
    - object/report/1306
    - object/report/1307
    - object/report/1401
    - object/report/5605
    - object/report/5606
    - object/report/5692
    - object/table/9
    - object/table/10
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/23
    - object/table/32
    - object/table/36
    - object/table/50
    - object/table/79
    - object/table/81
    - object/table/83
    - object/table/98
    - object/table/112
    - object/table/114
    - object/table/181
    - object/table/254
    - object/table/263
    - object/table/270
    - object/table/271
    - object/table/287
    - object/table/288
    - object/table/317
    - object/table/379
    - object/table/380
    - object/table/1207
    - object/table/1381
    - object/table/1383
    - object/table/5050
    - object/table/5200
    - object/table/5600
    - object/table/5601
    - object/table/5606
    - object/table/5611
    - object/table/5612
    - object/table/5624
    - object/xmlport/1000
    - object/xmlport/1001
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/france
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: FR
version: "29"
w1_version: "29"
added_objects: 240
replaced_objects: 71
removed_objects: 0
added_fields: 78
added_events: 6
learn_folder: LocalFunctionality/France
---

# France (FR)

> France localization of Business Central 29. It adds French payment management with payment slips, RIB bank keys, the FEC tax audit export, fiscal year closing, accelerated (derogatory) depreciation, SIREN/SIRET identifiers, DEB Intrastat and service declarations. It answers questions about local setup, posting rules and reports.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/france.md) · narrative **unreviewed** (machine-written)

## Overview

The French layer is dominated by payment management: payment classes, statuses, steps, payment slips (with archive), payment addresses and step ledgers. These come as FR objects (pages 10831 to 10854, codeunits 10831 to 10844) plus a second set of non-suffixed objects (codeunit 10860 "Payment Management", pages 10860 to 10882). Bank, customer and vendor bank accounts get French RIB fields (Agency Code, RIB Key, RIB Checked). Learn documents creating, posting, archiving and exporting payment slips, payment classes, payment addresses and parameter export/import.

Finance changes cover the FEC audit file export (codeunits 10826 to 10830, an Audit File Export format enum extension), fiscal period and fiscal year closing (new fields on table 50 "Accounting Period", table 98 "General Ledger Setup" posting ranges), G/L entry application (Applies-to ID, Letter, Letter Date on table 17 "G/L Entry"), delayed unrealized VAT, and local ledger reports such as journals, trial balances and the GL/Cust. Ledger Reconciliation. Fixed assets add derogatory (accelerated) depreciation through new fields on posting groups, depreciation books and ledger entries, and extra procedures in disposal and posting codeunits.

Elsewhere the country adds SIREN/SIRET and company registration fields on Company Information, Customer, Vendor and Contact, VAT Paid on Debits and goods/services text on sales invoices, DEB Intrastat objects, and French service declaration extensions. Learn also covers UBL 2.1 and Factur-X e-invoicing and E-Reporting FR, though the code listed here shows no dedicated objects for them.

## Key points

- Payment management: payment classes, statuses, steps, slips, archive, payment addresses and step ledgers, in FR and non-suffixed object sets
- RIB fields (Agency Code, RIB Key, RIB Checked) on Bank Account, Customer Bank Account and Vendor Bank Account, with RIB Key codeunits
- FEC tax audit export built on the Audit File Export framework, with opening balances and data checks
- Fiscal period and year closing: Fiscally Closed, Fiscal Closing Date and Period Reopened Date on Accounting Period, plus posting allowed range on General Ledger Setup
- Accelerated depreciation with derogatory books, posting group accounts and FA reports
- SIREN, SIRET, APE code, Trade Register, Legal Form and Stock Capital on Company Information, Contact, Customer and Vendor
- French sales invoice specifics: VAT Paid on Debits and goods/services text on standard sales reports
- DEB Intrastat reporting (obligation level) and French service declaration (DES) extensions

Narrative written by Sonnet from the code diff and 34 Learn page summaries. In numbers: France (FR) localization of Business Central in BC29: 240 objects of its own, 71 W1 objects changed (78 fields and 6 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 10 | 153 | 5 |
| [Finance](#finance) | 8 | 42 | 20 |
| [FixedAssets](#fixedassets) | 21 | 7 | 13 |
| [Sales](#sales) | 14 | 8 | 11 |
| [Inventory](#inventory) | 3 | 10 | 2 |
| [Purchases](#purchases) | 5 | 5 | 9 |
| [Foundation](#foundation) | 6 | 2 | 12 |
| [(no namespace)](#no-namespace) | 0 | 6 | 0 |
| [Service](#service) | 0 | 6 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| [CRM](#crm) | 1 | 0 | 5 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [HumanResources](#humanresources) | 1 | 0 | 1 |

### Bank

Adds the French payment management feature: payment classes, statuses, steps, payment slips with archive, payment bank and addresses, step ledgers. Adds RIB key fields to table 270 "Bank Account", plus SEPA check and Check report changes for French amount text.

Why: Learn describes payment classes, steps and slips used to manage bills of exchange, checks and SEPA transfers, and export of payment files.

Objects: [codeunit/10860 "Payment Management"](../objects/codeunit/10860-fr.md) (own), [codeunit/10837 "Payment Management FR"](../objects/codeunit/10837-fr.md) (own), [codeunit/10801 "RIB Key"](../objects/codeunit/10801-fr.md) (own), [table/270 "Bank Account"](../objects/table/270.md), [codeunit/10861 "Payment-Apply"](../objects/codeunit/10861-fr.md) (own), [page/10864 "Payment Class"](../objects/page/10864-fr.md) (own), [page/10868 "Payment Slip"](../objects/page/10868-fr.md) (own), [report/1401 "Check"](../objects/report/1401.md).

[All 163 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds FEC audit export, French trial balance and journal reports, fiscal year closing, G/L entry application and delayed unrealized VAT. Extends Gen. Jnl.-Post Line and journal line tables with derogatory and VAT realization fields, and G/L Setup with posting ranges.

Why: Learn documents FEC export for tax audits, fiscal period closing with two open fiscal years, and year-end closing entries.

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [codeunit/10826 "Generate File FEC"](../objects/codeunit/10826-fr.md) (own), [codeunit/10862 "Fiscal Year-FiscalClose"](../objects/codeunit/10862-fr.md) (own), [codeunit/10842 "G/L Entry Application"](../objects/codeunit/10842-fr.md) (own), [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/98 "General Ledger Setup"](../objects/table/98.md), [table/17 "G/L Entry"](../objects/table/17.md), [report/10803 "G/L Trial Balance"](../objects/report/10803-fr.md) (own).

[All 50 objects of Finance in the diff](?ns=Finance#country-diff)

### FixedAssets

Adds derogatory (accelerated) depreciation: fields on FA Posting Group, Depreciation Book, FA Depreciation Book and FA Ledger Entry, derogatory posting types in enums, and procedures in disposal, depreciation and posting codeunits. Adds professional tax reports.

Why: Learn explains accelerated depreciation as the difference between tax and accounting depreciation books.

Objects: [table/5606 "FA Posting Group"](../objects/table/5606.md), [table/5611 "Depreciation Book"](../objects/table/5611.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md), [codeunit/5605 "Calculate Disposal"](../objects/codeunit/5605.md), [codeunit/5613 "Calculate Acq. Cost Depr."](../objects/codeunit/5613.md), [codeunit/5633 "FA Jnl.-Post Batch"](../objects/codeunit/5633.md), [report/5692 "Calculate Depreciation"](../objects/report/5692.md), [report/10817 "FA-Proj. Value (Derogatory) FR"](../objects/report/10817-fr.md) (own).

[All 28 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Sales

Adds SIREN No. and payment reporting fields on Customer, VAT Paid on Debits on sales headers, goods and services text procedures on standard sales invoice reports, and French customer ledger reports. Adds shipment-invoice linking via table 10825 "Shipment Invoiced".

Why: Learn covers customer SIREN numbers, printing VAT on debits and automatic goods/services indication on invoices.

Objects: [table/18 "Customer"](../objects/table/18.md), [table/36 "Sales Header"](../objects/table/36.md), [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md), [report/1303 "Standard Sales - Draft Invoice"](../objects/report/1303.md), [table/10825 "Shipment Invoiced"](../objects/table/10825-fr.md) (own), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [report/10805 "Customer Trial Balance FR"](../objects/report/10805-fr.md) (own), [table/287 "Customer Bank Account"](../objects/table/287.md).

[All 22 objects of Sales in the diff](?ns=Sales#country-diff)

### Inventory

Adds DEB Intrastat support: codeunits for filtering receipts and shipments, an obligation level enum, and extensions on the Intrastat report and company information. Adds Shipment Method Code on item entries.

Why: Learn describes DEB reporting that needs company information and Intrastat fields filled in, with obligation level filters.

Objects: [codeunit/10851 "IntrastatReportManagementFR"](../objects/codeunit/10851-fr.md) (own), [codeunit/10853 "Intrastat Rep. Filter Rcpt. FR"](../objects/codeunit/10853-fr.md) (own), [codeunit/10854 "Intrastat Rep. Filter Shpt. FR"](../objects/codeunit/10854-fr.md) (own), [enum/10851 "Obligation Level"](../objects/enum/10851-fr.md) (own), [tableextension/10851 "Intrastat Report Header FR"](../objects/tableextension/10851-fr.md) (own), [pageextension/10852 "Intrastat Report FR"](../objects/pageextension/10852-fr.md) (own), [table/32 "Item Ledger Entry"](../objects/table/32.md).

[All 13 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Purchases

Adds RIB fields on Vendor Bank Account, SIREN No. and payment fields on Vendor, plus vendor trial balance and journal reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/288 "Vendor Bank Account"](../objects/table/288.md), [table/23 "Vendor"](../objects/table/23.md), [report/10814 "Vendor Journal"](../objects/report/10814-fr.md) (own), [report/10807 "Vendor Trial Balance FR"](../objects/report/10807-fr.md) (own), [report/10808 "Vendor Detail Trial Balance FR"](../objects/report/10808-fr.md) (own), [table/1383 "Vendor Templ."](../objects/table/1383.md), [table/317 "Payable Vendor Ledger Entry"](../objects/table/317.md).

[All 10 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Foundation

Extends Company Information with French registration fields and SIRET validation with an event, and Accounting Period with fiscal closing logic. Adds a SEPA Allowed flag on Country/Region and date filter helpers.

Why: Learn notes that company information such as SIRET and SIREN is needed for e-invoicing and DEB reporting.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/50 "Accounting Period"](../objects/table/50.md), [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md), [table/9 "Country/Region"](../objects/table/9.md), [codeunit/10833 "Local Navigate Handler FR"](../objects/codeunit/10833-fr.md) (own), [table/10 "Shipment Method"](../objects/table/10.md).

[All 8 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Holds mostly upgrade code, the FR-PMS permission set, a source code table extension and an Employee Marital Status enum.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/10800 "FR-PMS"](../objects/permissionset/10800-fr.md) (own), [tableextension/10810 "SourceCodeFR"](../objects/tableextension/10810-fr.md) (own), [enum/5226 "Employee Marital Status"](../objects/enum/5226-fr.md) (own).

[All 6 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Service

Adds local service declaration (DES) management and export codeunits, with setup page extensions and a permission set extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10890 "Local Service Declaration Mgt."](../objects/codeunit/10890-fr.md) (own), [codeunit/10891 "Local Export Serv. Decl."](../objects/codeunit/10891-fr.md) (own), [codeunit/10892 "Local Serv. Decl. Exp. Ext."](../objects/codeunit/10892-fr.md) (own), [pageextension/10890 "Local Serv. Decl. Setup"](../objects/pageextension/10890-fr.md) (own), [pageextension/10891 "Local Serv. Decl. Setup Wizard"](../objects/pageextension/10891-fr.md) (own).

[All 6 objects of Service in the diff](?ns=Service#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets to include French objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Adds French registration fields (Trade Register, APE Code, Legal Form, Stock Capital, SIREN No.) to Contact, with procedures to keep the customer SIREN number in sync.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5050 "Contact"](../objects/table/5050.md).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### ExpenseAgent

Adds an FR expense event subscriber codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6920 "Expense Event Subscriber FR"](../objects/codeunit/6920-fr.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### HumanResources

Adds a Marital Status field to Employee.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md).

[All 1 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +9 procedures |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +1 events, +1 procedures |
| [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md) | +3 procedures |
| [codeunit/426 "Payment Tolerance Management"](../objects/codeunit/426.md) | +1 procedures, 1 procedures changed |
| [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md) | +1 events |
| [codeunit/1232 "SEPA DD-Prepare Source"](../objects/codeunit/1232.md) | +1 events |
| [codeunit/1233 "SEPA DD-Check Line"](../objects/codeunit/1233.md) | +1 events, +1 procedures, 2 procedures changed |
| [codeunit/5600 "FA Insert Ledger Entry"](../objects/codeunit/5600.md) | +3 procedures |
| [codeunit/5601 "FA Insert G/L Account"](../objects/codeunit/5601.md) | +1 procedures |
| [codeunit/5605 "Calculate Disposal"](../objects/codeunit/5605.md) | +5 procedures |
| [codeunit/5613 "Calculate Acq. Cost Depr."](../objects/codeunit/5613.md) | +1 procedures |
| [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md) | +1 procedures |
| [codeunit/5632 "FA Jnl.-Post Line"](../objects/codeunit/5632.md) | +3 procedures |
| [codeunit/5633 "FA Jnl.-Post Batch"](../objects/codeunit/5633.md) | +2 procedures |
| [enum/8 "Country/Region Address Format"](../objects/enum/8.md) | body changes only |
| [enum/5601 "FA Ledger Entry FA Posting Type"](../objects/enum/5601.md) | body changes only |
| [enum/5602 "FA Journal Line FA Posting Type"](../objects/enum/5602.md) | body changes only |
| [enum/5603 "Gen. Journal Line FA Posting Type"](../objects/enum/5603.md) | body changes only |
| [enum/5606 "FA Posting Group Account Type"](../objects/enum/5606.md) | body changes only |
| [enum/5615 "FA Allocation Type"](../objects/enum/5615.md) | body changes only |
| [page/131 "Posted Sales Shpt. Subform"](../objects/page/131.md) | +1 procedures |
| [page/133 "Posted Sales Invoice Subform"](../objects/page/133.md) | +1 procedures |
| [page/370 "Bank Account Card"](../objects/page/370.md) | +1 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/117 "Reminder"](../objects/report/117.md) | 1 properties |
| [report/1303 "Standard Sales - Draft Invoice"](../objects/report/1303.md) | +4 procedures |
| [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md) | +3 procedures |
| [report/1307 "Standard Sales - Credit Memo"](../objects/report/1307.md) | +3 procedures |
| [report/1401 "Check"](../objects/report/1401.md) | +3 procedures |
| [report/5605 "Fixed Asset - Book Value 01"](../objects/report/5605.md) | +2 procedures |
| [report/5606 "Fixed Asset - Book Value 02"](../objects/report/5606.md) | +2 procedures |
| [report/5692 "Calculate Depreciation"](../objects/report/5692.md) | +1 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/10 "Shipment Method"](../objects/table/10.md) | +1 procedures |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +3 fields |
| [table/18 "Customer"](../objects/table/18.md) | +3 fields, +1 procedures |
| [table/23 "Vendor"](../objects/table/23.md) | +3 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | +1 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +1 fields |
| [table/50 "Accounting Period"](../objects/table/50.md) | +3 fields, +1 events, +8 procedures |
| [table/79 "Company Information"](../objects/table/79.md) | +8 fields, 3 fields changed, +1 events, +6 procedures |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +6 fields, +1 procedures |
| [table/83 "Item Journal Line"](../objects/table/83.md) | +1 fields |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +4 fields, 1 fields changed, +1 procedures |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +1 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +6 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +2 procedures |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | body changes only |
| [table/270 "Bank Account"](../objects/table/270.md) | +4 fields, 2 fields changed |
| [table/271 "Bank Account Ledger Entry"](../objects/table/271.md) | body changes only |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +3 fields, 2 fields changed |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +3 fields, 2 fields changed |
| [table/317 "Payable Vendor Ledger Entry"](../objects/table/317.md) | +1 fields |
| [table/379 "Detailed Cust. Ledg. Entry"](../objects/table/379.md) | +1 fields |
| [table/380 "Detailed Vendor Ledg. Entry"](../objects/table/380.md) | +1 fields |
| [table/1207 "Direct Debit Collection"](../objects/table/1207.md) | +1 fields, +1 procedures |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +1 fields, 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/5050 "Contact"](../objects/table/5050.md) | +5 fields, +2 procedures |
| [table/5200 "Employee"](../objects/table/5200.md) | +1 fields, 2 fields changed |
| [table/5600 "Fixed Asset"](../objects/table/5600.md) | +1 fields |
| [table/5601 "FA Ledger Entry"](../objects/table/5601.md) | +1 fields |
| [table/5606 "FA Posting Group"](../objects/table/5606.md) | +5 fields, +4 procedures |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | +3 fields, +3 procedures |
| [table/5612 "FA Depreciation Book"](../objects/table/5612.md) | +2 fields, 1 fields changed |
| [table/5624 "FA Reclass. Journal Line"](../objects/table/5624.md) | +1 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | body changes only |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | body changes only |

## Objects of its own

240 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-fr.md)
- [codeunit/6920 "Expense Event Subscriber FR"](../objects/codeunit/6920-fr.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-fr.md)
- [codeunit/10800 "Substitute Report"](../objects/codeunit/10800-fr.md)
- [codeunit/10801 "RIB Key"](../objects/codeunit/10801-fr.md)
- [codeunit/10802 "FR AccSchedManagement"](../objects/codeunit/10802-fr.md)
- [codeunit/10803 "FA Reports FR"](../objects/codeunit/10803-fr.md)
- [codeunit/10826 "Generate File FEC"](../objects/codeunit/10826-fr.md)
- [codeunit/10827 "Data Handling FEC"](../objects/codeunit/10827-fr.md)
- [codeunit/10828 "Data Check FEC"](../objects/codeunit/10828-fr.md)
- [codeunit/10829 "Install FEC"](../objects/codeunit/10829-fr.md)
- [codeunit/10830 "Library - Test FEC"](../objects/codeunit/10830-fr.md)
- [codeunit/10831 "Feature - PaymentMgt FR"](../objects/codeunit/10831-fr.md)
- [codeunit/10833 "Local Navigate Handler FR"](../objects/codeunit/10833-fr.md)
- [codeunit/10834 "Payment-Apply FR"](../objects/codeunit/10834-fr.md)
- [codeunit/10835 "Payment Management Feature FR"](../objects/codeunit/10835-fr.md)
- [codeunit/10837 "Payment Management FR"](../objects/codeunit/10837-fr.md)
- [codeunit/10838 "PaymentMgt Subscribers FR"](../objects/codeunit/10838-fr.md)
- [codeunit/10839 "RIB Key FR"](../objects/codeunit/10839-fr.md)
- [codeunit/10840 "Upgrade Payment Management FR"](../objects/codeunit/10840-fr.md)
- [codeunit/10841 "Upg. Tag Payment Management FR"](../objects/codeunit/10841-fr.md)
- [codeunit/10842 "G/L Entry Application"](../objects/codeunit/10842-fr.md)
- [codeunit/10843 "Payment Management Subscriber"](../objects/codeunit/10843-fr.md)
- [codeunit/10844 "Payment Data Migration FR"](../objects/codeunit/10844-fr.md)
- [codeunit/10851 "IntrastatReportManagementFR"](../objects/codeunit/10851-fr.md)
- [codeunit/10853 "Intrastat Rep. Filter Rcpt. FR"](../objects/codeunit/10853-fr.md)
- [codeunit/10854 "Intrastat Rep. Filter Shpt. FR"](../objects/codeunit/10854-fr.md)
- [codeunit/10855 "Intrastat Rep. Reset Filter FR"](../objects/codeunit/10855-fr.md)
- [codeunit/10857 "IntrastatReportFRUpgrade"](../objects/codeunit/10857-fr.md)
- [codeunit/10860 "Payment Management"](../objects/codeunit/10860-fr.md)
- [codeunit/10861 "Payment-Apply"](../objects/codeunit/10861-fr.md)
- [codeunit/10862 "Fiscal Year-FiscalClose"](../objects/codeunit/10862-fr.md)
- [codeunit/10881 "Update Dtld. CV Ledger Entries"](../objects/codeunit/10881-fr.md)
- [codeunit/10890 "Local Service Declaration Mgt."](../objects/codeunit/10890-fr.md)
- [codeunit/10891 "Local Export Serv. Decl."](../objects/codeunit/10891-fr.md)
- [codeunit/10892 "Local Serv. Decl. Exp. Ext."](../objects/codeunit/10892-fr.md)
- [codeunit/104101 "UPG.FR"](../objects/codeunit/104101-fr.md)
- [enum/5226 "Employee Marital Status"](../objects/enum/5226-fr.md)
- [enum/10831 "Payment Step Action Type FR"](../objects/enum/10831-fr.md)
- [enum/10851 "Obligation Level"](../objects/enum/10851-fr.md)
- [enum/10862 "Payment Step Action Type"](../objects/enum/10862-fr.md)
- [enumextension/10826 "Audit File Export Format FEC"](../objects/enumextension/10826-fr.md)
- [enumextension/10831 "Feature - PaymentMgt FR"](../objects/enumextension/10831-fr.md)
- [page/10800 "FR Account Schedule Names"](../objects/page/10800-fr.md)
- [page/10801 "FR Account Schedule"](../objects/page/10801-fr.md)
- [page/10818 "Fiscal Year Closing Steps"](../objects/page/10818-fr.md)
- [page/10831 "Payment Addresses FR"](../objects/page/10831-fr.md)
- [page/10832 "Payment Bank Archive FR"](../objects/page/10832-fr.md)
- [page/10833 "Payment Bank FR"](../objects/page/10833-fr.md)
- [page/10834 "Payment Class FR"](../objects/page/10834-fr.md)
- [page/10835 "Payment Class List FR"](../objects/page/10835-fr.md)
- [page/10836 "Payment Line Modification FR"](../objects/page/10836-fr.md)
- [page/10837 "Invoices bound by Shipment"](../objects/page/10837-fr.md)
- [page/10838 "Shipments bound by Invoice"](../objects/page/10838-fr.md)
- [page/10839 "Payment Lines Archive List FR"](../objects/page/10839-fr.md)
- [page/10840 "Payment Lines List FR"](../objects/page/10840-fr.md)
- [page/10841 "Payment Report FR"](../objects/page/10841-fr.md)
- [page/10842 "Payment Slip Archive FR"](../objects/page/10842-fr.md)
- [page/10843 "Payment Slip FR"](../objects/page/10843-fr.md)
- [page/10845 "Payment Slip List Archive FR"](../objects/page/10845-fr.md)
- [page/10846 "Payment Slip List FR"](../objects/page/10846-fr.md)
- [page/10847 "Payment Slip Subform ArchiveFR"](../objects/page/10847-fr.md)
- [page/10848 "Payment Slip Subform FR"](../objects/page/10848-fr.md)
- [page/10849 "Payment Status FR"](../objects/page/10849-fr.md)
- [page/10850 "Payment Status List FR"](../objects/page/10850-fr.md)
- [page/10851 "Payment Step Card FR"](../objects/page/10851-fr.md)
- [page/10852 "Payment Step Ledger FR"](../objects/page/10852-fr.md)
- [page/10853 "Payment Step Ledger List FR"](../objects/page/10853-fr.md)
- [page/10854 "Payment Steps FR"](../objects/page/10854-fr.md)
- [page/10855 "Payment Steps List FR"](../objects/page/10855-fr.md)
- [page/10857 "View/Edit Payment Line FR"](../objects/page/10857-fr.md)
- [page/10860 "Payment Class List"](../objects/page/10860-fr.md)
- [page/10861 "Payment Status List"](../objects/page/10861-fr.md)
- [page/10862 "View/Edit Payment Line"](../objects/page/10862-fr.md)
- [page/10863 "Payment Report"](../objects/page/10863-fr.md)
- [page/10864 "Payment Class"](../objects/page/10864-fr.md)
- [page/10865 "Payment Status"](../objects/page/10865-fr.md)
- [page/10866 "Payment Steps"](../objects/page/10866-fr.md)
- [page/10867 "Payment Step Card"](../objects/page/10867-fr.md)
- [page/10868 "Payment Slip"](../objects/page/10868-fr.md)
- [page/10869 "Payment Slip Subform"](../objects/page/10869-fr.md)
- [page/10870 "Payment Slip List"](../objects/page/10870-fr.md)
- [page/10871 "Payment Line Modification"](../objects/page/10871-fr.md)
- [page/10872 "Payment Lines List"](../objects/page/10872-fr.md)
- [page/10873 "Payment Steps List"](../objects/page/10873-fr.md)
- [page/10874 "Payment Step Ledger"](../objects/page/10874-fr.md)
- [page/10875 "Payment Addresses"](../objects/page/10875-fr.md)
- [page/10876 "Payment Bank"](../objects/page/10876-fr.md)
- [page/10877 "Payment Slip Archive"](../objects/page/10877-fr.md)
- [page/10878 "Payment Slip Subform Archive"](../objects/page/10878-fr.md)
- [page/10879 "Payment Slip List Archive"](../objects/page/10879-fr.md)
- [page/10880 "Payment Lines Archive List"](../objects/page/10880-fr.md)
- [page/10881 "Payment Bank Archive"](../objects/page/10881-fr.md)
- [page/10882 "Payment Step Ledger List"](../objects/page/10882-fr.md)
- [pageextension/10826 "Audit Export Doc. Card FEC"](../objects/pageextension/10826-fr.md)
- [pageextension/10827 "Audit Export Format Setup FEC"](../objects/pageextension/10827-fr.md)
- [pageextension/10828 "Audit File Export Setup FEC"](../objects/pageextension/10828-fr.md)
- [pageextension/10831 "Accounting Manager Role Center"](../objects/pageextension/10831-fr.md)
- [pageextension/10832 "Acc. Payables Coordinator RC"](../objects/pageextension/10832-fr.md)
- [pageextension/10833 "Acc. Receivables Adm. RC"](../objects/pageextension/10833-fr.md)
- [pageextension/10834 "Bank Account Card"](../objects/pageextension/10834-fr.md)
- [pageextension/10835 "Bookkeeper Role Center"](../objects/pageextension/10835-fr.md)
- [pageextension/10836 "Cash Receipt Journal"](../objects/pageextension/10836-fr.md)
- [pageextension/10837 "Customer Bank Account Card"](../objects/pageextension/10837-fr.md)
- [pageextension/10838 "Customer Card"](../objects/pageextension/10838-fr.md)
- [pageextension/10839 "Finance Manager Role Center"](../objects/pageextension/10839-fr.md)
- [pageextension/10840 "Small Business Owner RC"](../objects/pageextension/10840-fr.md)
- [pageextension/10841 "Vendor Bank Account Card"](../objects/pageextension/10841-fr.md)
- [pageextension/10842 "Vendor Card"](../objects/pageextension/10842-fr.md)
- [pageextension/10843 "Payment Report"](../objects/pageextension/10843-fr.md)
- [pageextension/10844 "Payment Slip"](../objects/pageextension/10844-fr.md)
- [pageextension/10845 "View/Edit Payment Line"](../objects/pageextension/10845-fr.md)
- [pageextension/10851 "Intrastat Report Subform FR"](../objects/pageextension/10851-fr.md)
- [pageextension/10852 "Intrastat Report FR"](../objects/pageextension/10852-fr.md)
- [pageextension/10890 "Local Serv. Decl. Setup"](../objects/pageextension/10890-fr.md)
- [pageextension/10891 "Local Serv. Decl. Setup Wizard"](../objects/pageextension/10891-fr.md)
- [permissionset/10800 "FR-PMS"](../objects/permissionset/10800-fr.md)
- [permissionset/10801 "FA Reports FR - Objects"](../objects/permissionset/10801-fr.md)
- [permissionset/10826 "FEC - Objects"](../objects/permissionset/10826-fr.md)
- [permissionset/10837 "Payment Management FR - Full"](../objects/permissionset/10837-fr.md)
- [permissionset/10838 "Payment Mgt FR - Objects X"](../objects/permissionset/10838-fr.md)
- [permissionset/10839 "Payment Management FR - Read"](../objects/permissionset/10839-fr.md)
- [permissionset/10840 "Payment Management FR - RM"](../objects/permissionset/10840-fr.md)
- [permissionsetextension/10827 "D365 BASIC ISV - FEC"](../objects/permissionsetextension/10827-fr.md)
- [permissionsetextension/10828 "D365 BASIC - FEC"](../objects/permissionsetextension/10828-fr.md)
- [permissionsetextension/10829 "D365 READ - FEC"](../objects/permissionsetextension/10829-fr.md)
- [permissionsetextension/10830 "D365 TEAM MEMBER - FEC"](../objects/permissionsetextension/10830-fr.md)
- [permissionsetextension/10831 "INTELLIGENT CLOUD - FEC"](../objects/permissionsetextension/10831-fr.md)
- [permissionsetextension/10832 "LOCAL - FEC"](../objects/permissionsetextension/10832-fr.md)
- [permissionsetextension/10833 "D365 READ - Payment Management FR"](../objects/permissionsetextension/10833-fr.md)
- [permissionsetextension/10834 "D365 TEAM MEMBER - Payment Management FR"](../objects/permissionsetextension/10834-fr.md)
- [permissionsetextension/10835 "LOCAL"](../objects/permissionsetextension/10835-fr.md)
- [permissionsetextension/10836 "LOCAL READ"](../objects/permissionsetextension/10836-fr.md)
- [permissionsetextension/10837 "D365 BASIC ISV - Payment Management FR"](../objects/permissionsetextension/10837-fr.md)
- [permissionsetextension/10838 "D365 BASIC - Payment Management FR"](../objects/permissionsetextension/10838-fr.md)
- [permissionsetextension/10851 "Intrastat FR - Objects"](../objects/permissionsetextension/10851-fr.md)
- [permissionsetextension/10890 "Serv. Decl. FR - Objects"](../objects/permissionsetextension/10890-fr.md)
- [report/10800 "G/L Journal"](../objects/report/10800-fr.md)
- [report/10801 "Journals"](../objects/report/10801-fr.md)
- [report/10803 "G/L Trial Balance"](../objects/report/10803-fr.md)
- [report/10804 "G/L Detail Trial Balance"](../objects/report/10804-fr.md)
- [report/10805 "Customer Trial Balance FR"](../objects/report/10805-fr.md)
- [report/10806 "Customer Detail Trial Balance"](../objects/report/10806-fr.md)
- [report/10807 "Vendor Trial Balance FR"](../objects/report/10807-fr.md)
- [report/10808 "Vendor Detail Trial Balance FR"](../objects/report/10808-fr.md)
- [report/10809 "Bank Account Trial Balance"](../objects/report/10809-fr.md)
- [report/10810 "Bank Acc. Detail Trial Balance"](../objects/report/10810-fr.md)
- [report/10811 "FR Account Schedule"](../objects/report/10811-fr.md)
- [report/10812 "Fixed Asset-Professional Tax"](../objects/report/10812-fr.md)
- [report/10813 "Customer Journal"](../objects/report/10813-fr.md)
- [report/10814 "Vendor Journal"](../objects/report/10814-fr.md)
- [report/10815 "Bank Account Journal"](../objects/report/10815-fr.md)
- [report/10817 "FA-Proj. Value (Derogatory) FR"](../objects/report/10817-fr.md)
- [report/10818 "Fixed Asset-Professional TaxFR"](../objects/report/10818-fr.md)
- [report/10820 "Export G/L Entries to XML"](../objects/report/10820-fr.md)
- [report/10831 "Archive Payment Slips FR"](../objects/report/10831-fr.md)
- [report/10834 "Bill FR"](../objects/report/10834-fr.md)
- [report/10836 "Draft FR"](../objects/report/10836-fr.md)
- [report/10837 "Draft notice FR"](../objects/report/10837-fr.md)
- [report/10838 "Draft recapitulation FR"](../objects/report/10838-fr.md)
- [report/10839 "Duplicate parameter FR"](../objects/report/10839-fr.md)
- [report/10840 "ETEBAC Files FR"](../objects/report/10840-fr.md)
- [report/10841 "GL/Cust Ledger Reconciliation"](../objects/report/10841-fr.md)
- [report/10842 "G/L Account Statement"](../objects/report/10842-fr.md)
- [report/10843 "Recapitulation Form"](../objects/report/10843-fr.md)
- [report/10844 "GL/Vend Ledger Reconciliation"](../objects/report/10844-fr.md)
- [report/10845 "Payment List FR"](../objects/report/10845-fr.md)
- [report/10846 "Recapitulation Form FR"](../objects/report/10846-fr.md)
- [report/10847 "Remittance FR"](../objects/report/10847-fr.md)
- [report/10848 "SEPA ISO20022 FR"](../objects/report/10848-fr.md)
- [report/10849 "Suggest Cust. Payments"](../objects/report/10849-fr.md)
- [report/10850 "Suggest Vend. Payments"](../objects/report/10850-fr.md)
- [report/10851 "Withdraw FR"](../objects/report/10851-fr.md)
- [report/10852 "Withdraw notice FR"](../objects/report/10852-fr.md)
- [report/10853 "Withdraw recapitulation FR"](../objects/report/10853-fr.md)
- [report/10860 "Payment List"](../objects/report/10860-fr.md)
- [report/10861 "GL/Cust. Ledger Reconciliation"](../objects/report/10861-fr.md)
- [report/10862 "Suggest Vendor Payments FR"](../objects/report/10862-fr.md)
- [report/10863 "GL/Vend. Ledger Reconciliation"](../objects/report/10863-fr.md)
- [report/10864 "Suggest Customer Payments"](../objects/report/10864-fr.md)
- [report/10865 "Bill"](../objects/report/10865-fr.md)
- [report/10866 "Draft"](../objects/report/10866-fr.md)
- [report/10867 "Remittance"](../objects/report/10867-fr.md)
- [report/10868 "Draft notice"](../objects/report/10868-fr.md)
- [report/10869 "Draft recapitulation"](../objects/report/10869-fr.md)
- [report/10870 "Withdraw notice"](../objects/report/10870-fr.md)
- [report/10871 "Withdraw recapitulation"](../objects/report/10871-fr.md)
- [report/10872 "Duplicate parameter"](../objects/report/10872-fr.md)
- [report/10873 "Archive Payment Slips"](../objects/report/10873-fr.md)
- [report/10876 "EC Sales List - Services"](../objects/report/10876-fr.md)
- [report/10880 "ETEBAC Files"](../objects/report/10880-fr.md)
- [report/10881 "Withdraw"](../objects/report/10881-fr.md)
- [report/10882 "Transfer"](../objects/report/10882-fr.md)
- [report/10883 "SEPA ISO20022"](../objects/report/10883-fr.md)
- [report/10886 "FA - Proj. Value (Derogatory)"](../objects/report/10886-fr.md)
- [reportextension/10856 "Payment List"](../objects/reportextension/10856-fr.md)
- [reportextension/10857 "GL/Vend. Ledger Reconciliation"](../objects/reportextension/10857-fr.md)
- [reportextension/10858 "Archive Payment Slips"](../objects/reportextension/10858-fr.md)
- [reportextension/10859 "GL/Cust. Ledger Reconciliation"](../objects/reportextension/10859-fr.md)
- [table/10800 "FR Acc. Schedule Name"](../objects/table/10800-fr.md)
- [table/10801 "FR Acc. Schedule Line"](../objects/table/10801-fr.md)
- [table/10825 "Shipment Invoiced"](../objects/table/10825-fr.md)
- [table/10831 "Bank Account Buffer FR"](../objects/table/10831-fr.md)
- [table/10832 "Payment Address FR"](../objects/table/10832-fr.md)
- [table/10833 "Payment Class FR"](../objects/table/10833-fr.md)
- [table/10834 "Payment Header Archive FR"](../objects/table/10834-fr.md)
- [table/10835 "Payment Header FR"](../objects/table/10835-fr.md)
- [table/10836 "Payment Line Archive FR"](../objects/table/10836-fr.md)
- [table/10837 "Payment Line FR"](../objects/table/10837-fr.md)
- [table/10838 "Payment Post. Buffer FR"](../objects/table/10838-fr.md)
- [table/10839 "Payment Status FR"](../objects/table/10839-fr.md)
- [table/10840 "Payment Step FR"](../objects/table/10840-fr.md)
- [table/10841 "Payment Step Ledger FR"](../objects/table/10841-fr.md)
- [table/10860 "Payment Class"](../objects/table/10860-fr.md)
- [table/10861 "Payment Status"](../objects/table/10861-fr.md)
- [table/10862 "Payment Step"](../objects/table/10862-fr.md)
- [table/10863 "Payment Step Ledger"](../objects/table/10863-fr.md)
- [table/10864 "Payment Post. Buffer"](../objects/table/10864-fr.md)
- [table/10865 "Payment Header"](../objects/table/10865-fr.md)
- [table/10866 "Payment Line"](../objects/table/10866-fr.md)
- [table/10867 "Payment Header Archive"](../objects/table/10867-fr.md)
- [table/10868 "Payment Line Archive"](../objects/table/10868-fr.md)
- [table/10869 "Bank Account Buffer"](../objects/table/10869-fr.md)
- [table/10870 "Payment Address"](../objects/table/10870-fr.md)
- [table/10871 "Unreal. CV Ledg. Entry Buffer"](../objects/table/10871-fr.md)
- [table/10880 "Payment Period Setup"](../objects/table/10880-fr.md)
- [table/10881 "Payment Application Buffer"](../objects/table/10881-fr.md)
- [tableextension/10810 "SourceCodeFR"](../objects/tableextension/10810-fr.md)
- [tableextension/10826 "Audit File Export Header FEC"](../objects/tableextension/10826-fr.md)
- [tableextension/10831 "Bank Account"](../objects/tableextension/10831-fr.md)
- [tableextension/10832 "Customer"](../objects/tableextension/10832-fr.md)
- [tableextension/10833 "Customer Bank Account"](../objects/tableextension/10833-fr.md)
- [tableextension/10834 "General Ledger Setup"](../objects/tableextension/10834-fr.md)
- [tableextension/10835 "Vendor"](../objects/tableextension/10835-fr.md)
- [tableextension/10836 "Vendor Bank Account"](../objects/tableextension/10836-fr.md)
- [tableextension/10851 "Intrastat Report Header FR"](../objects/tableextension/10851-fr.md)
- [tableextension/10852 "Company Information FR"](../objects/tableextension/10852-fr.md)
- [xmlport/10800 "Export G/L Entries"](../objects/xmlport/10800-fr.md)
- [xmlport/10831 "Import/Export Parameters FR"](../objects/xmlport/10831-fr.md)
- [xmlport/10863 "Import/Export Parameters"](../objects/xmlport/10863-fr.md)

## Other versions

- BC30: 169 objects differ from W1 (78 fields, 6 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
