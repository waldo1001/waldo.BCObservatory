---
id: localization/fr
type: localization
title: France (FR)
summary: France localization of Business Central 29. It covers payment management with payment slips, RIB bank keys, SIREN/SIRET company data, fiscal period and year closing, FEC and XML audit exports, accelerated (derogatory) depreciation, VAT paid on debits, Intrastat/DEB and service declarations. It answers where French-specific behavior sits in code and on Learn.
tier: official
language: en
tags:
  - localization
  - fr
review:
  state: reviewed
  by: opus
  at: "2026-10-23T23:41:34.588Z"
  flags: []
generated:
  at: "2026-10-31T00:48:20.076Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 53008fc3f4286771848ea399393400be2a3de13f8f1ae5e455fea46ee372a464
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-fr
    date: null
    commit: 8e740e5061595dd231c4a2d9d453c86c84ec76ae
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/12
    - object/codeunit/80
    - object/codeunit/265
    - object/codeunit/358
    - object/codeunit/426
    - object/codeunit/1222
    - object/codeunit/1232
    - object/codeunit/1233
    - object/codeunit/5600
    - object/codeunit/5605
    - object/codeunit/5613
    - object/codeunit/5626
    - object/codeunit/5632
    - object/codeunit/5633
    - object/enum/8
    - object/page/131
    - object/page/133
    - object/page/370
    - object/page/5602
    - object/page/5610
    - object/page/5612
    - object/page/5613
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
added_objects: 283
replaced_objects: 70
removed_objects: 0
added_fields: 78
added_events: 10
learn_folder: LocalFunctionality/France
---

# France (FR)

> France localization of Business Central 29. It covers payment management with payment slips, RIB bank keys, SIREN/SIRET company data, fiscal period and year closing, FEC and XML audit exports, accelerated (derogatory) depreciation, VAT paid on debits, Intrastat/DEB and service declarations. It answers where French-specific behavior sits in code and on Learn.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/france.md) · narrative reviewed (checked by Opus)

## Overview

The French layer adds 283 objects of its own and changes many W1 objects. The largest block is payment management: payment classes, statuses, steps, slips, archives and payment addresses, with codeunits such as "Payment Management" (10860) and "Payment-Apply" (10861). It sits next to FR variants and a feature switch checked through Feature Key Management. Bank, customer and vendor bank accounts get RIB fields (Agency Code, RIB Key, RIB Checked).

Finance changes cover fiscal periods and years (Fiscally Closed, Fiscal Closing Date, Period Reopened Date on Accounting Period), posting date ranges on General Ledger Setup, G/L entry application (Applies-to ID, Letter, Letter Date), delayed unrealized VAT in Gen. Jnl.-Post Line, and audit exports in FEC and XML formats. Fixed assets get derogatory (accelerated) depreciation through new fields, posting procedures and reports. Company Information carries SIRET No., APE code, legal form and trade register data, and Contact carries SIREN No. with the same company data.

Sales adds VAT Paid on Debits, shipment-to-invoice linking, and French trial balance and journal reports. Intrastat objects with Obligation Level and CISD support DEB reporting, and separate local service declaration objects handle service declarations. Learn covers these topics in France pages, most with the [FR] suffix, and in the France local functionality overview. That overview also mentions a move to an extensions-based model in 2026 release wave 2 and e-invoicing with UBL 2.1, Factur-X and E-Reporting FR. Learn notes that the local G/L entry application is being deprecated in favor of a base app feature.

## Key points

- Payment management: payment classes, statuses, steps, slips, archives, payment addresses and export of payments by report or XMLport; setup parameters can be exported and imported.
- RIB fields (Agency Code, RIB Key, RIB Checked) on bank, customer bank and vendor bank accounts, with RIB Key codeunits.
- Fiscal periods and years: close and reopen periods, fiscal year closing, two open fiscal years, posting allowed from/to in General Ledger Setup.
- FEC export for tax audits with opening balances, plus a general ledger XML export, both built on the audit file export framework.
- Accelerated depreciation: derogatory depreciation book fields, FA posting group accounts, derogatory calculation and projected value reports.
- VAT Paid on Debits on sales documents, SIREN No. on Customer, Vendor and Contact, and SIRET validation on Company Information.
- G/L entry application with Letter and Letter Date (Learn says it is being deprecated in favor of a base app feature), and French customer and vendor journals and trial balances.
- Intrastat for DEB with Obligation Level and CISD, and a separate local service declaration export.

Narrative written by Sonnet from the code diff and 34 Learn page summaries. In numbers: France (FR) localization of Business Central in BC29: 283 objects of its own, 70 W1 objects changed (78 fields and 10 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 10 | 159 | 5 |
| [Finance](#finance) | 8 | 56 | 20 |
| [Sales](#sales) | 14 | 25 | 11 |
| [FixedAssets](#fixedassets) | 19 | 12 | 13 |
| [Inventory](#inventory) | 3 | 10 | 2 |
| [Purchases](#purchases) | 5 | 5 | 9 |
| [Foundation](#foundation) | 6 | 2 | 12 |
| [(no namespace)](#no-namespace) | 0 | 6 | 0 |
| [Service](#service) | 0 | 6 | 0 |
| [Environment](#environment) | 1 | 1 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| [CRM](#crm) | 1 | 0 | 5 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [HumanResources](#humanresources) | 1 | 0 | 1 |

### Bank

Adds the French payment management module: payment classes, statuses, steps, slips, archives, payment addresses and bank pages, with FR and base-named page and codeunit pairs. Bank Account gets RIB fields and National Issuer No. SEPA direct debit codeunits get events for payment lines, and the Check report gets French amount-in-words procedures.

Why: Learn describes payment slips as the way to manage customer and vendor payments and to generate payment files for the bank.

Objects: [codeunit/10860 "Payment Management"](../objects/codeunit/10860-fr.md) (own), [codeunit/10837 "Payment Management FR"](../objects/codeunit/10837-fr.md) (own), [codeunit/10861 "Payment-Apply"](../objects/codeunit/10861-fr.md) (own), [table/270 "Bank Account"](../objects/table/270.md), [codeunit/10801 "RIB Key"](../objects/codeunit/10801-fr.md) (own), [page/10843 "Payment Slip FR"](../objects/page/10843-fr.md) (own), [codeunit/1233 "SEPA DD-Check Line"](../objects/codeunit/1233.md), [report/1401 "Check"](../objects/report/1401.md).

[All 169 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Changes Gen. Jnl.-Post Line for delayed unrealized VAT and derogatory entries, and adds fields to Gen. Journal Line, G/L Entry and General Ledger Setup. Adds FEC and XML audit export codeunits with page extensions, G/L entry application, fiscal year closing and French account schedules.

Why: Learn documents fiscal closing, posting period limits, FEC export for tax audits and G/L entry application for French accounting.

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/98 "General Ledger Setup"](../objects/table/98.md), [table/17 "G/L Entry"](../objects/table/17.md), [codeunit/10826 "Generate File FEC"](../objects/codeunit/10826-fr.md) (own), [codeunit/10811 "Generate File XML"](../objects/codeunit/10811-fr.md) (own), [codeunit/10862 "Fiscal Year-FiscalClose"](../objects/codeunit/10862-fr.md) (own), [codeunit/10842 "G/L Entry Application"](../objects/codeunit/10842-fr.md) (own), [page/10818 "Fiscal Year Closing Steps"](../objects/page/10818-fr.md) (own).

[All 64 objects of Finance in the diff](?ns=Finance#country-diff)

### Sales

Adds VAT Paid on Debits to sales headers and posted invoices and credit memos, SIREN No. on Customer, and payment reporting fields. Adds shipment-invoice linking (Shipment Invoiced table and two pages), Sales-Post event, French customer journal and trial balance reports, and changes to standard sales invoice reports.

Why: Learn describes SIREN No. and VAT Paid on Debits as French sales invoice specifics.

Objects: [table/18 "Customer"](../objects/table/18.md), [table/36 "Sales Header"](../objects/table/36.md), [table/10825 "Shipment Invoiced"](../objects/table/10825-fr.md) (own), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md), [report/10805 "Customer Trial Balance FR"](../objects/report/10805-fr.md) (own), [report/10813 "Customer Journal"](../objects/report/10813-fr.md) (own), [pageextension/10810 "Sales Invoice"](../objects/pageextension/10810-fr.md) (own).

[All 39 objects of Sales in the diff](?ns=Sales#country-diff)

### FixedAssets

Implements accelerated (derogatory) depreciation: fields on depreciation book, FA depreciation book and FA posting group, new procedures in disposal, ledger entry and depreciation codeunits. Adds professional tax on Fixed Asset and French book value and projected value reports.

Why: Learn explains that accelerated depreciation posts the difference between tax and accounting depreciation books.

Objects: [table/5611 "Depreciation Book"](../objects/table/5611.md), [table/5606 "FA Posting Group"](../objects/table/5606.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md), [codeunit/5613 "Calculate Acq. Cost Depr."](../objects/codeunit/5613.md), [codeunit/5600 "FA Insert Ledger Entry"](../objects/codeunit/5600.md), [codeunit/5633 "FA Jnl.-Post Batch"](../objects/codeunit/5633.md), [report/10817 "FA-Proj. Value (Derogatory) FR"](../objects/report/10817-fr.md) (own), [table/5600 "Fixed Asset"](../objects/table/5600.md).

[All 31 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Inventory

Supports Intrastat reporting for the Declaration of Trade in Goods: filter codeunits for receipts and shipments, an Obligation Level enum, and extensions on the Intrastat report and Company Information. Shipment Method Code is added to item ledger and item journal lines.

Why: Learn lists CISD, obligation levels and transaction specification filters as requirements for DEB reporting.

Objects: [codeunit/10851 "IntrastatReportManagementFR"](../objects/codeunit/10851-fr.md) (own), [codeunit/10853 "Intrastat Rep. Filter Rcpt. FR"](../objects/codeunit/10853-fr.md) (own), [codeunit/10854 "Intrastat Rep. Filter Shpt. FR"](../objects/codeunit/10854-fr.md) (own), [enum/10851 "Obligation Level"](../objects/enum/10851-fr.md) (own), [tableextension/10851 "Intrastat Report Header FR"](../objects/tableextension/10851-fr.md) (own), [pageextension/10852 "Intrastat Report FR"](../objects/pageextension/10852-fr.md) (own), [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/83 "Item Journal Line"](../objects/table/83.md).

[All 13 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Purchases

Adds SIREN No., payment in progress and payment reporting exclusion to Vendor, RIB fields to Vendor Bank Account, and a Due Date on Payable Vendor Ledger Entry. Adds French vendor journal and trial balance reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/23 "Vendor"](../objects/table/23.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [report/10814 "Vendor Journal"](../objects/report/10814-fr.md) (own), [report/10807 "Vendor Trial Balance FR"](../objects/report/10807-fr.md) (own), [report/10808 "Vendor Detail Trial Balance FR"](../objects/report/10808-fr.md) (own), [table/317 "Payable Vendor Ledger Entry"](../objects/table/317.md), [table/1383 "Vendor Templ."](../objects/table/1383.md), [pageextension/10841 "Vendor Bank Account Card"](../objects/pageextension/10841-fr.md) (own).

[All 10 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Foundation

Company Information gets trade register, APE code, legal form, stock capital, SIRET and CISD fields, with SIRET validation procedures. Accounting Period gets fiscal closing fields and procedures, and DateFilter-Calc gets period checks. Country/Region gets a SEPA Allowed field.

Why: Learn documents period closing and reopening using Fiscally Closed, Fiscal Closing Date and Period Reopened Date.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/50 "Accounting Period"](../objects/table/50.md), [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md), [table/9 "Country/Region"](../objects/table/9.md), [codeunit/10833 "Local Navigate Handler FR"](../objects/codeunit/10833-fr.md) (own), [table/10 "Shipment Method"](../objects/table/10.md).

[All 8 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Mostly upgrade plumbing, plus a permission set for payment management (FR-PMS), a source code extension and an Employee Marital Status enum.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/10800 "FR-PMS"](../objects/permissionset/10800-fr.md) (own), [enum/5226 "Employee Marital Status"](../objects/enum/5226-fr.md) (own), [tableextension/10810 "SourceCodeFR"](../objects/tableextension/10810-fr.md) (own).

[All 6 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Service

Adds local service declaration management and export codeunits, with setup page and wizard extensions and a permission set extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10890 "Local Service Declaration Mgt."](../objects/codeunit/10890-fr.md) (own), [codeunit/10891 "Local Export Serv. Decl."](../objects/codeunit/10891-fr.md) (own), [codeunit/10892 "Local Serv. Decl. Exp. Ext."](../objects/codeunit/10892-fr.md) (own), [pageextension/10890 "Local Serv. Decl. Setup"](../objects/pageextension/10890-fr.md) (own), [pageextension/10891 "Local Serv. Decl. Setup Wizard"](../objects/pageextension/10891-fr.md) (own), [permissionsetextension/10890 "Serv. Decl. FR - Objects"](../objects/permissionsetextension/10890-fr.md) (own).

[All 6 objects of Service in the diff](?ns=Service#country-diff)

### Environment

Adds a feature management codeunit for Sales FR and a procedure in Feature Key Management that tells whether payment management is enabled.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/265 "Feature Key Management"](../objects/codeunit/265.md), [codeunit/10821 "Sales FR Feature Mgt."](../objects/codeunit/10821-fr.md) (own).

[All 2 objects of Environment in the diff](?ns=Environment#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets to include French objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Contact gets trade register, APE code, legal form, stock capital and SIREN No., with procedures to keep the customer SIREN in sync.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5050 "Contact"](../objects/table/5050.md).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### ExpenseAgent

Adds an Expense Event Subscriber FR codeunit for the expense agent.

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
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +11 procedures |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +1 events, +1 procedures |
| [codeunit/265 "Feature Key Management"](../objects/codeunit/265.md) | +1 procedures |
| [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md) | +3 procedures |
| [codeunit/426 "Payment Tolerance Management"](../objects/codeunit/426.md) | +1 procedures, 1 procedures changed |
| [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md) | +1 events |
| [codeunit/1232 "SEPA DD-Prepare Source"](../objects/codeunit/1232.md) | +1 events, +1 procedures |
| [codeunit/1233 "SEPA DD-Check Line"](../objects/codeunit/1233.md) | +1 events, +1 procedures, 1 procedures changed |
| [codeunit/5600 "FA Insert Ledger Entry"](../objects/codeunit/5600.md) | +7 procedures, 1 procedures changed |
| [codeunit/5605 "Calculate Disposal"](../objects/codeunit/5605.md) | +4 procedures, 1 procedures changed |
| [codeunit/5613 "Calculate Acq. Cost Depr."](../objects/codeunit/5613.md) | +1 procedures |
| [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md) | +1 procedures, 1 procedures changed |
| [codeunit/5632 "FA Jnl.-Post Line"](../objects/codeunit/5632.md) | 3 procedures changed |
| [codeunit/5633 "FA Jnl.-Post Batch"](../objects/codeunit/5633.md) | +2 procedures, 1 procedures changed |
| [enum/8 "Country/Region Address Format"](../objects/enum/8.md) | body changes only |
| [page/131 "Posted Sales Shpt. Subform"](../objects/page/131.md) | +1 procedures |
| [page/133 "Posted Sales Invoice Subform"](../objects/page/133.md) | +1 procedures |
| [page/370 "Bank Account Card"](../objects/page/370.md) | +1 procedures |
| [page/5602 "Fixed Asset Statistics"](../objects/page/5602.md) | body changes only |
| [page/5610 "Depreciation Book Card"](../objects/page/5610.md) | body changes only |
| [page/5612 "FA Posting Group Card"](../objects/page/5612.md) | body changes only |
| [page/5613 "FA Posting Groups"](../objects/page/5613.md) | body changes only |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/117 "Reminder"](../objects/report/117.md) | 1 properties |
| [report/1303 "Standard Sales - Draft Invoice"](../objects/report/1303.md) | +1 events, +4 procedures |
| [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md) | +1 events, +3 procedures |
| [report/1307 "Standard Sales - Credit Memo"](../objects/report/1307.md) | +1 events, +3 procedures |
| [report/1401 "Check"](../objects/report/1401.md) | +3 procedures |
| [report/5605 "Fixed Asset - Book Value 01"](../objects/report/5605.md) | +1 procedures, 2 procedures changed |
| [report/5606 "Fixed Asset - Book Value 02"](../objects/report/5606.md) | +1 procedures, 2 procedures changed |
| [report/5692 "Calculate Depreciation"](../objects/report/5692.md) | 1 procedures changed |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/10 "Shipment Method"](../objects/table/10.md) | +1 procedures |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +3 fields |
| [table/18 "Customer"](../objects/table/18.md) | +3 fields, +1 events, +1 procedures |
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
| [table/5606 "FA Posting Group"](../objects/table/5606.md) | +5 fields |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | +3 fields, +1 procedures, 2 procedures changed |
| [table/5612 "FA Depreciation Book"](../objects/table/5612.md) | +2 fields, 1 fields changed |
| [table/5624 "FA Reclass. Journal Line"](../objects/table/5624.md) | +1 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | body changes only |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | body changes only |

## Objects of its own

283 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-fr.md)
- [codeunit/5866 "Accelerated Depr. Feature"](../objects/codeunit/5866-fr.md)
- [codeunit/5867 "Upg. Tag Accelerated Depr."](../objects/codeunit/5867-fr.md)
- [codeunit/5871 "Upgrade Derogatory Linkage"](../objects/codeunit/5871-fr.md)
- [codeunit/5872 "Derog. Linkage Corrective Run"](../objects/codeunit/5872-fr.md)
- [codeunit/6920 "Expense Event Subscriber FR"](../objects/codeunit/6920-fr.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-fr.md)
- [codeunit/10800 "Substitute Report"](../objects/codeunit/10800-fr.md)
- [codeunit/10801 "RIB Key"](../objects/codeunit/10801-fr.md)
- [codeunit/10802 "FR AccSchedManagement"](../objects/codeunit/10802-fr.md)
- [codeunit/10803 "FA Reports FR"](../objects/codeunit/10803-fr.md)
- [codeunit/10804 "Install XML"](../objects/codeunit/10804-fr.md)
- [codeunit/10805 "Data Check XML"](../objects/codeunit/10805-fr.md)
- [codeunit/10806 "Data Handling XML"](../objects/codeunit/10806-fr.md)
- [codeunit/10807 "Sales FR Helper Procedures"](../objects/codeunit/10807-fr.md)
- [codeunit/10810 "Upg. Tag Sales FR"](../objects/codeunit/10810-fr.md)
- [codeunit/10811 "Generate File XML"](../objects/codeunit/10811-fr.md)
- [codeunit/10812 "Feature - Sales FR"](../objects/codeunit/10812-fr.md)
- [codeunit/10813 "Page Visibility XML"](../objects/codeunit/10813-fr.md)
- [codeunit/10815 "Sales FR"](../objects/codeunit/10815-fr.md)
- [codeunit/10821 "Sales FR Feature Mgt."](../objects/codeunit/10821-fr.md)
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
- [codeunit/10845 "Install Payment Management FR"](../objects/codeunit/10845-fr.md)
- [codeunit/10851 "IntrastatReportManagementFR"](../objects/codeunit/10851-fr.md)
- [codeunit/10853 "Intrastat Rep. Filter Rcpt. FR"](../objects/codeunit/10853-fr.md)
- [codeunit/10854 "Intrastat Rep. Filter Shpt. FR"](../objects/codeunit/10854-fr.md)
- [codeunit/10855 "Intrastat Rep. Reset Filter FR"](../objects/codeunit/10855-fr.md)
- [codeunit/10857 "IntrastatReportFRUpgrade"](../objects/codeunit/10857-fr.md)
- [codeunit/10860 "Payment Management"](../objects/codeunit/10860-fr.md)
- [codeunit/10861 "Payment-Apply"](../objects/codeunit/10861-fr.md)
- [codeunit/10862 "Fiscal Year-FiscalClose"](../objects/codeunit/10862-fr.md)
- [codeunit/10879 "Page Visibility FEC"](../objects/codeunit/10879-fr.md)
- [codeunit/10881 "Update Dtld. CV Ledger Entries"](../objects/codeunit/10881-fr.md)
- [codeunit/10890 "Local Service Declaration Mgt."](../objects/codeunit/10890-fr.md)
- [codeunit/10891 "Local Export Serv. Decl."](../objects/codeunit/10891-fr.md)
- [codeunit/10892 "Local Serv. Decl. Exp. Ext."](../objects/codeunit/10892-fr.md)
- [codeunit/104101 "UPG.FR"](../objects/codeunit/104101-fr.md)
- [enum/5226 "Employee Marital Status"](../objects/enum/5226-fr.md)
- [enum/10831 "Payment Step Action Type FR"](../objects/enum/10831-fr.md)
- [enum/10851 "Obligation Level"](../objects/enum/10851-fr.md)
- [enum/10862 "Payment Step Action Type"](../objects/enum/10862-fr.md)
- [enumextension/5869 "Feature - Accelerated Depr."](../objects/enumextension/5869-fr.md)
- [enumextension/10800 "Feature - Sales FR"](../objects/enumextension/10800-fr.md)
- [enumextension/10803 "Audit File Export Format XML"](../objects/enumextension/10803-fr.md)
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
- [pageextension/10803 "Audit Export Doc. Card XML"](../objects/pageextension/10803-fr.md)
- [pageextension/10804 "Audit Export Format Setup XML"](../objects/pageextension/10804-fr.md)
- [pageextension/10805 "Audit File Export Setup XML"](../objects/pageextension/10805-fr.md)
- [pageextension/10806 "Customer Card"](../objects/pageextension/10806-fr.md)
- [pageextension/10807 "Posted Sales Credit Memo"](../objects/pageextension/10807-fr.md)
- [pageextension/10808 "Posted Sales Invoice"](../objects/pageextension/10808-fr.md)
- [pageextension/10809 "Sales Credit Memo"](../objects/pageextension/10809-fr.md)
- [pageextension/10810 "Sales Invoice"](../objects/pageextension/10810-fr.md)
- [pageextension/10811 "Sales Order"](../objects/pageextension/10811-fr.md)
- [pageextension/10812 "Contact Card"](../objects/pageextension/10812-fr.md)
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
- [permissionset/10807 "XML - Objects"](../objects/permissionset/10807-fr.md)
- [permissionset/10808 "XML Audit - Export"](../objects/permissionset/10808-fr.md)
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
- [table/10842 "Unreal. CV Ledg. Buffer FR"](../objects/table/10842-fr.md)
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
- [tableextension/10800 "Customer"](../objects/tableextension/10800-fr.md)
- [tableextension/10801 "Sales Header"](../objects/tableextension/10801-fr.md)
- [tableextension/10802 "Sales Cr.Memo Header"](../objects/tableextension/10802-fr.md)
- [tableextension/10803 "Audit File Export Header XML"](../objects/tableextension/10803-fr.md)
- [tableextension/10804 "Sales Invoice Header"](../objects/tableextension/10804-fr.md)
- [tableextension/10805 "Contact"](../objects/tableextension/10805-fr.md)
- [tableextension/10810 "SourceCodeFR"](../objects/tableextension/10810-fr.md)
- [tableextension/10826 "Audit File Export Header FEC"](../objects/tableextension/10826-fr.md)
- [tableextension/10831 "Bank Account"](../objects/tableextension/10831-fr.md)
- [tableextension/10832 "Customer"](../objects/tableextension/10832-fr.md)
- [tableextension/10833 "Customer Bank Account"](../objects/tableextension/10833-fr.md)
- [tableextension/10834 "General Ledger Setup"](../objects/tableextension/10834-fr.md)
- [tableextension/10835 "Vendor"](../objects/tableextension/10835-fr.md)
- [tableextension/10836 "Vendor Bank Account"](../objects/tableextension/10836-fr.md)
- [tableextension/10837 "Payment Gen. Journal Line"](../objects/tableextension/10837-fr.md)
- [tableextension/10838 "Payment Posted Gen. Jnl. Line"](../objects/tableextension/10838-fr.md)
- [tableextension/10839 "Payment Direct Debit Coll. FR"](../objects/tableextension/10839-fr.md)
- [tableextension/10840 "Payable Vendor Ledg. Entry FR"](../objects/tableextension/10840-fr.md)
- [tableextension/10851 "Intrastat Report Header FR"](../objects/tableextension/10851-fr.md)
- [tableextension/10852 "Company Information FR"](../objects/tableextension/10852-fr.md)
- [xmlport/10800 "Export G/L Entries"](../objects/xmlport/10800-fr.md)
- [xmlport/10803 "Export G/L Entries FR"](../objects/xmlport/10803-fr.md)
- [xmlport/10831 "Import/Export Parameters FR"](../objects/xmlport/10831-fr.md)
- [xmlport/10863 "Import/Export Parameters"](../objects/xmlport/10863-fr.md)

## Other versions

- BC30: 353 objects differ from W1 (78 fields, 10 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
