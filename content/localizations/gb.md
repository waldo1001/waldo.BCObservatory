---
id: localization/gb
type: localization
title: UnitedKingdom (GB)
summary: United Kingdom (GB) localization of Business Central 29. It covers Making Tax Digital VAT returns to HMRC, GovTalk and EC Sales List submission, reverse charge VAT, VAT audit reports, postcode address lookup, APACS check printing, UK sales and purchase report layouts, and 13-period straight-line depreciation.
tier: official
language: en
tags:
  - localization
  - gb
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 8c6faacd28d9ab48fd588c0b5c0eaa5d0311a65134ff6ed6b3d20c4decfb0a64
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-gb
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/80
    - object/codeunit/140
    - object/codeunit/1485
    - object/codeunit/5616
    - object/page/1
    - object/page/21
    - object/page/26
    - object/page/321
    - object/page/423
    - object/page/5050
    - object/page/5056
    - object/page/5200
    - object/page/5703
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/117
    - object/report/130
    - object/report/742
    - object/report/852
    - object/report/1401
    - object/table/23
    - object/table/25
    - object/table/27
    - object/table/32
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/79
    - object/table/81
    - object/table/83
    - object/table/98
    - object/table/113
    - object/table/115
    - object/table/123
    - object/table/125
    - object/table/169
    - object/table/181
    - object/table/262
    - object/table/263
    - object/table/274
    - object/table/288
    - object/table/290
    - object/table/296
    - object/table/298
    - object/table/311
    - object/table/312
    - object/table/362
    - object/table/746
    - object/table/747
    - object/table/1382
    - object/table/1383
    - object/table/1829
    - object/table/5612
    - object/table/5800
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/united-kingdom
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: GB
version: "29"
w1_version: "29"
added_objects: 263
replaced_objects: 54
removed_objects: 0
added_fields: 49
added_events: 12
learn_folder: LocalFunctionality/UnitedKingdom
---

# UnitedKingdom (GB)

> United Kingdom (GB) localization of Business Central 29. It covers Making Tax Digital VAT returns to HMRC, GovTalk and EC Sales List submission, reverse charge VAT, VAT audit reports, postcode address lookup, APACS check printing, UK sales and purchase report layouts, and 13-period straight-line depreciation.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/united-kingdom.md) · narrative **unreviewed** (machine-written)

## Overview

The UK layer adds 317 objects: 263 of its own and the rest changing W1 objects. The largest block is VAT reporting. Making Tax Digital (MTD) objects (codeunits 10530 to 10541, liability, payment and return tables, a fraud prevention header control add-in) handle HMRC connection, OAuth 2.0, period retrieval, return creation and submission, liabilities and payments. The older GovTalk codeunits and EC Sales List objects handle XML submission. Report 130 "EC Sales List" and table 747 "VAT Report Archive" gain procedures, fields and events for this.

Reverse charge VAT is supported by fields on items, item templates, sales and purchase lines, posted lines and the setup tables, plus checks in Sales-Post. Company Information gets statutory fields such as registered name and address and a supplementary VAT registration number. Address lookup is provided by two postcode providers (GetAddress.io and Ideal Postcodes, "IPC") with page extensions on many cards.

Learn documents these under the United Kingdom local functionality page, with separate pages for Making Tax Digital, fraud prevention data, reverse charges, VAT audit reports, APACS checks, remittance advice, posting date warning, statutory information, Ideal Postcodes and straight-line depreciation.

## Key points

- Making Tax Digital for VAT: retrieve obligations, create, release and submit returns, get liabilities and payments, with HMRC OAuth 2.0 setup.
- Fraud prevention headers for MTD, with tables for default, session and missing headers and a web client control add-in.
- Reverse charge VAT: Reverse Charge Applies on Item, Reverse Charge fields on sales and purchase lines, and setup fields for the posting group and domestic customers or vendors.
- Statutory data on Company Information: registered name and address, supplementary VAT registration, branch number and contact name.
- Postcode lookup through GetAddress.io and Ideal Postcodes providers, wired into customer, vendor, contact, employee, location and bank account cards.
- UK-specific reports: GB layouts for sales, purchase and reminder documents, VAT audit CSV export, check preview for APACS, FA projected value.
- BACS ledger entry and register tables, a posting date check, and Intrastat GB export management.

Narrative written by Sonnet from the code diff and 15 Learn page summaries. In numbers: UnitedKingdom (GB) localization of Business Central in BC29: 263 objects of its own, 54 W1 objects changed (49 fields and 12 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 12 | 126 | 9 |
| [Foundation](#foundation) | 2 | 55 | 10 |
| [(no namespace)](#no-namespace) | 0 | 40 | 0 |
| [Sales](#sales) | 10 | 15 | 9 |
| [Purchases](#purchases) | 10 | 10 | 12 |
| [Inventory](#inventory) | 8 | 3 | 7 |
| [Bank](#bank) | 2 | 4 | 1 |
| [FixedAssets](#fixedassets) | 2 | 1 | 0 |
| [SalesPurch](#salespurch) | 0 | 3 | 0 |
| [CashFlow](#cashflow) | 1 | 1 | 0 |
| [CRM](#crm) | 2 | 0 | 0 |
| [FixedAsset](#fixedasset) | 0 | 2 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [HumanResources](#humanresources) | 1 | 0 | 0 |
| [Projects](#projects) | 1 | 0 | 1 |
| [RoleCenters](#rolecenters) | 1 | 0 | 0 |
| [Utilities](#utilities) | 0 | 1 | 0 |
| [VATReporting](#vatreporting) | 0 | 1 | 0 |

### Finance

Holds the VAT submission logic: GovTalk codeunits for HMRC messaging, EC Sales List XML creation and submission, reverse charge VAT codeunits, VAT Audit GB and the Reports GB subscribers. It extends the EC Sales List report, VAT Report Archive and ECSL VAT Report Line with XML procedures, fields and events.

Why: Learn describes VAT audit CSV exports and reverse charge VAT to prevent carousel fraud on certain goods.

Objects: [report/130 "EC Sales List"](../objects/report/130.md), [table/747 "VAT Report Archive"](../objects/table/747.md), [table/362 "ECSL VAT Report Line"](../objects/table/362.md), [codeunit/10519 "EC Sales List Submit GB"](../objects/codeunit/10519-gb.md) (own), [codeunit/10525 "EC Sales List XML"](../objects/codeunit/10525-gb.md) (own), [codeunit/10544 "VAT Audit GB"](../objects/codeunit/10544-gb.md) (own), [codeunit/10549 "Reverse Charge VAT GB"](../objects/codeunit/10549-gb.md) (own), [codeunit/10568 "GovTalk"](../objects/codeunit/10568-gb.md) (own).

[All 138 objects of Finance in the diff](?ns=Finance#country-diff)

### Foundation

Adds UK postcode address lookup with GetAddress.io and Ideal Postcodes (IPC) providers, configuration and search pages, and page extensions on many cards. Company Information gets registered name and address and other statutory fields.

Why: Learn says statutory information must be entered on Company Information, and the Ideal Postcodes extension fills address fields from a postcode.

Objects: [table/79 "Company Information"](../objects/table/79.md), [page/1 "Company Information"](../objects/page/1.md), [codeunit/10500 "Postcode Business Logic"](../objects/codeunit/10500-gb.md) (own), [codeunit/9092 "Postcode Service GetAddress.io"](../objects/codeunit/9092-gb.md) (own), [codeunit/9400 "IPC Management"](../objects/codeunit/9400-gb.md) (own), [page/10500 "Postcode Search"](../objects/page/10500-gb.md) (own), [page/9400 "IPC Config"](../objects/page/9400-gb.md) (own), [pageextension/9403 "IPC Company Information"](../objects/pageextension/9403-gb.md) (own).

[All 57 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Contains the Making Tax Digital implementation: connection, OAuth 2.0, period retrieval, return content, validation and submission, plus liabilities, payments and return details tables and pages. It also includes fraud prevention header handling and a web client control add-in.

Why: Learn explains that MTD for VAT requires an HMRC connection and fraud prevention headers with user consent.

Objects: [codeunit/10530 "MTD Mgt."](../objects/codeunit/10530-gb.md) (own), [codeunit/10531 "MTD Create Return Content"](../objects/codeunit/10531-gb.md) (own), [codeunit/10532 "MTD Submit Return"](../objects/codeunit/10532-gb.md) (own), [codeunit/10537 "MTD Connection"](../objects/codeunit/10537-gb.md) (own), [codeunit/10538 "MTD OAuth 2.0 Mgt"](../objects/codeunit/10538-gb.md) (own), [codeunit/10541 "MTD Fraud Prevention Mgt."](../objects/codeunit/10541-gb.md) (own), [controladdin/mtd web client fp headers "MTD Web Client FP Headers"](../objects/controladdin/mtd-web-client-fp-headers-gb.md) (own), [table/10530 "MTD Liability"](../objects/table/10530-gb.md) (own).

[All 40 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Sales

Adds reverse charge fields to sales lines, posted lines and Sales & Receivables Setup, with a Sales-Post check. Provides GB layouts for quote, order confirmation, invoice, credit memo and blanket order, plus a finance charge interest rate table.

Why: Reverse charge applies to specified goods, as described in the Learn reverse charge page.

Objects: [table/37 "Sales Line"](../objects/table/37.md), [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [report/10572 "Sales - Invoice GB"](../objects/report/10572-gb.md) (own), [report/10573 "Sales - Credit Memo GB"](../objects/report/10573-gb.md) (own), [report/10571 "Order Confirmation GB"](../objects/report/10571-gb.md) (own), [report/10570 "Sales - Quote GB"](../objects/report/10570-gb.md) (own), [table/10555 "Fin. Charge Interest Rate"](../objects/table/10555-gb.md) (own).

[All 25 objects of Sales in the diff](?ns=Sales#country-diff)

### Purchases

Adds reverse charge fields on purchase lines and posted purchase lines, domestic vendor warnings, and setup fields. Vendor and Vendor Templ. get an Exclude from Pmt. Pract. Rep. field, and purchase headers get Invoice Receipt Date. Provides GB purchase document reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/39 "Purchase Line"](../objects/table/39.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md), [table/23 "Vendor"](../objects/table/23.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [report/10577 "Purchase - Invoice GB"](../objects/report/10577-gb.md) (own), [report/10576 "Order GB"](../objects/report/10576-gb.md) (own), [table/288 "Vendor Bank Account"](../objects/table/288.md).

[All 20 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Inventory

Adds Reverse Charge Applies to Item and Item Templ., Shipment Method Code on item ledger and journal lines, and Freight/Insurance on Item Charge. Intrastat GB codeunits manage export and the batch gets arrivals and dispatches reported flags.

Why: Learn's Brexit page covers Intrastat reporting and location handling for UK trade.

Objects: [table/27 "Item"](../objects/table/27.md), [table/1382 "Item Templ."](../objects/table/1382.md), [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md), [codeunit/10501 "Intrastat Report Management GB"](../objects/codeunit/10501-gb.md) (own), [codeunit/10502 "Intrastat Report Exp. Ext. GB"](../objects/codeunit/10502-gb.md) (own), [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/5800 "Item Charge"](../objects/table/5800.md), [table/83 "Item Journal Line"](../objects/table/83.md).

[All 11 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Bank

Adds BACS ledger entry and register tables, a Check Preview GB page, and an employee balancing type procedure in the Check report. Bank Acc. Reconciliation Line gets a Reconciled field.

Why: Learn documents check printing to the APACS specification from payment journals.

Objects: [page/10510 "Check Preview GB"](../objects/page/10510-gb.md) (own), [report/1401 "Check"](../objects/report/1401.md), [table/10550 "BACS Ledger Entry"](../objects/table/10550-gb.md) (own), [table/10551 "BACS Register"](../objects/table/10551-gb.md) (own), [table/274 "Bank Acc. Reconciliation Line"](../objects/table/274.md), [reportextension/10582 "Bank Account - List"](../objects/reportextension/10582-gb.md) (own).

[All 6 objects of Bank in the diff](?ns=Bank#country-diff)

### FixedAssets

Changes depreciation calculation and FA Depreciation Book to support UK straight-line depreciation across accounting periods, and extends the projected value report.

Why: Learn describes up to 13 accounting periods with 360, 365 or 366 day methods.

Objects: [codeunit/5616 "Depreciation Calculation"](../objects/codeunit/5616.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md), [reportextension/10583 "Fixed Asset - Projected Value"](../objects/reportextension/10583-gb.md) (own).

[All 3 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### SalesPurch

Adds the Posting Date Check codeunit and setup fields on Sales & Receivables Setup and Purchases & Payables Setup.

Why: Learn describes a warning when the posting date differs from the work date.

Objects: [codeunit/10504 "Posting Date Check"](../objects/codeunit/10504-gb.md) (own), [tableextension/10511 "Sales & Receivables Setup"](../objects/tableextension/10511-gb.md) (own), [tableextension/10510 "Purchases & Payables Setup"](../objects/tableextension/10510-gb.md) (own).

[All 3 objects of SalesPurch in the diff](?ns=SalesPurch#country-diff)

### CashFlow

Provides a report extension and a change to the Cash Flow Dimensions - Detail report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/852 "Cash Flow Dimensions - Detail"](../objects/report/852.md), [reportextension/10589 "Cash Flow Dimensions - Detail"](../objects/reportextension/10589-gb.md) (own).

[All 2 objects of CashFlow in the diff](?ns=CashFlow#country-diff)

### CRM

Contact Card and Contact Alt. Address Card get postcode lookup procedures.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [page/5050 "Contact Card"](../objects/page/5050.md), [page/5056 "Contact Alt. Address Card"](../objects/page/5056.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### FixedAsset

Adds FA - Projected Value reports, including a GB layout version.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/10560 "FA - Projected Value"](../objects/report/10560-gb.md) (own), [report/10605 "FA - Projected Value GB"](../objects/report/10605-gb.md) (own).

[All 2 objects of FixedAsset in the diff](?ns=FixedAsset#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### ExpenseAgent

Adds an Expense Event Subscriber GB codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6921 "Expense Event Subscriber GB"](../objects/codeunit/6921-gb.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### HumanResources

Employee Card gets postcode lookup procedures.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [page/5200 "Employee Card"](../objects/page/5200.md).

[All 1 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

### Projects

Job Ledger Entry gets a Shipment Method Code field.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/169 "Job Ledger Entry"](../objects/table/169.md).

[All 1 objects of Projects in the diff](?ns=Projects#country-diff)

### RoleCenters

Rolecenter Selector Mgt. gets a procedure that adds role center overview setup after login.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1485 "Rolecenter Selector Mgt."](../objects/codeunit/1485.md).

[All 1 objects of RoleCenters in the diff](?ns=RoleCenters#country-diff)

### Utilities

Adds the Local Application Management codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10529 "Local Application Management"](../objects/codeunit/10529-gb.md) (own).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

### VATReporting

Extends the VAT Statement page for the UK.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/10548 "VAT Statement"](../objects/pageextension/10548-gb.md) (own).

[All 1 objects of VATReporting in the diff](?ns=VATReporting#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +1 procedures |
| [codeunit/140 "EC Sales List Suggest Lines"](../objects/codeunit/140.md) | +1 events, +1 procedures |
| [codeunit/1485 "Rolecenter Selector Mgt."](../objects/codeunit/1485.md) | +1 procedures |
| [codeunit/5616 "Depreciation Calculation"](../objects/codeunit/5616.md) | body changes only |
| [page/1 "Company Information"](../objects/page/1.md) | +4 procedures |
| [page/21 "Customer Card"](../objects/page/21.md) | +3 procedures |
| [page/26 "Vendor Card"](../objects/page/26.md) | +3 procedures |
| [page/321 "ECSL Report"](../objects/page/321.md) | +1 events, +1 procedures |
| [page/423 "Customer Bank Account Card"](../objects/page/423.md) | +3 procedures |
| [page/5050 "Contact Card"](../objects/page/5050.md) | +3 procedures |
| [page/5056 "Contact Alt. Address Card"](../objects/page/5056.md) | +3 procedures |
| [page/5200 "Employee Card"](../objects/page/5200.md) | +3 procedures |
| [page/5703 "Location Card"](../objects/page/5703.md) | +3 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/117 "Reminder"](../objects/report/117.md) | 1 properties |
| [report/130 "EC Sales List"](../objects/report/130.md) | +4 events, +9 procedures |
| [report/742 "VAT Report Request Page"](../objects/report/742.md) | +2 events, +1 procedures |
| [report/852 "Cash Flow Dimensions - Detail"](../objects/report/852.md) | 1 properties |
| [report/1401 "Check"](../objects/report/1401.md) | +1 procedures |
| [table/23 "Vendor"](../objects/table/23.md) | +1 fields |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +1 fields |
| [table/27 "Item"](../objects/table/27.md) | +1 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | +1 fields |
| [table/37 "Sales Line"](../objects/table/37.md) | +2 fields, +2 procedures |
| [table/38 "Purchase Header"](../objects/table/38.md) | +1 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +1 fields, +1 procedures |
| [table/79 "Company Information"](../objects/table/79.md) | +10 fields, 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +1 fields |
| [table/83 "Item Journal Line"](../objects/table/83.md) | +1 fields |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +2 fields |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +2 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +2 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +2 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +2 fields |
| [table/169 "Job Ledger Entry"](../objects/table/169.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +1 fields |
| [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md) | +2 fields |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | body changes only |
| [table/274 "Bank Acc. Reconciliation Line"](../objects/table/274.md) | +1 fields |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +1 fields, 2 fields changed |
| [table/290 "VAT Amount Line"](../objects/table/290.md) | +1 fields |
| [table/296 "Reminder Line"](../objects/table/296.md) | body changes only |
| [table/298 "Issued Reminder Line"](../objects/table/298.md) | body changes only |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +3 fields, 1 fields changed |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +2 fields, 1 fields changed |
| [table/362 "ECSL VAT Report Line"](../objects/table/362.md) | +2 fields, 1 fields changed |
| [table/746 "VAT Reports Configuration"](../objects/table/746.md) | +1 fields |
| [table/747 "VAT Report Archive"](../objects/table/747.md) | +1 fields, +4 events |
| [table/1382 "Item Templ."](../objects/table/1382.md) | +1 fields |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/1829 "Consolidation Account"](../objects/table/1829.md) | +1 procedures |
| [table/5612 "FA Depreciation Book"](../objects/table/5612.md) | body changes only |
| [table/5800 "Item Charge"](../objects/table/5800.md) | +1 fields |

## Objects of its own

263 objects only this country has.

- [codeunit/141 "EC Sales List Populate XML"](../objects/codeunit/141-gb.md)
- [codeunit/142 "EC Sales List Submit"](../objects/codeunit/142-gb.md)
- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-gb.md)
- [codeunit/6921 "Expense Event Subscriber GB"](../objects/codeunit/6921-gb.md)
- [codeunit/9092 "Postcode Service GetAddress.io"](../objects/codeunit/9092-gb.md)
- [codeunit/9093 "Postcode GetAddress.io Upgrade"](../objects/codeunit/9093-gb.md)
- [codeunit/9094 "UK Postcode Install"](../objects/codeunit/9094-gb.md)
- [codeunit/9099 "Postcode Business Logic GB"](../objects/codeunit/9099-gb.md)
- [codeunit/9400 "IPC Management"](../objects/codeunit/9400-gb.md)
- [codeunit/9401 "IPC Address Lookup Helper"](../objects/codeunit/9401-gb.md)
- [codeunit/9403 "IPC Provider"](../objects/codeunit/9403-gb.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-gb.md)
- [codeunit/10500 "Postcode Business Logic"](../objects/codeunit/10500-gb.md)
- [codeunit/10501 "Intrastat Report Management GB"](../objects/codeunit/10501-gb.md)
- [codeunit/10502 "Intrastat Report Exp. Ext. GB"](../objects/codeunit/10502-gb.md)
- [codeunit/10503 "GovTalk Subscribers"](../objects/codeunit/10503-gb.md)
- [codeunit/10504 "Posting Date Check"](../objects/codeunit/10504-gb.md)
- [codeunit/10510 "GovTalk Validate VAT Report"](../objects/codeunit/10510-gb.md)
- [codeunit/10511 "HMRC GovTalk Msg. Scheduler"](../objects/codeunit/10511-gb.md)
- [codeunit/10519 "EC Sales List Submit GB"](../objects/codeunit/10519-gb.md)
- [codeunit/10520 "GovTalkMessageManagement"](../objects/codeunit/10520-gb.md)
- [codeunit/10521 "HMRC GovTalk Message Scheduler"](../objects/codeunit/10521-gb.md)
- [codeunit/10522 "Submit VAT Declaration Request"](../objects/codeunit/10522-gb.md)
- [codeunit/10523 "GovTalk Setup"](../objects/codeunit/10523-gb.md)
- [codeunit/10524 "Create VAT Declaration Request"](../objects/codeunit/10524-gb.md)
- [codeunit/10525 "EC Sales List XML"](../objects/codeunit/10525-gb.md)
- [codeunit/10526 "Feature - GovTalk"](../objects/codeunit/10526-gb.md)
- [codeunit/10527 "HMRCSubmissionHelpers"](../objects/codeunit/10527-gb.md)
- [codeunit/10528 "GovTalk VAT Report Validate"](../objects/codeunit/10528-gb.md)
- [codeunit/10529 "Local Application Management"](../objects/codeunit/10529-gb.md)
- [codeunit/10530 "MTD Mgt."](../objects/codeunit/10530-gb.md)
- [codeunit/10531 "MTD Create Return Content"](../objects/codeunit/10531-gb.md)
- [codeunit/10532 "MTD Submit Return"](../objects/codeunit/10532-gb.md)
- [codeunit/10533 "MTD Validate Return"](../objects/codeunit/10533-gb.md)
- [codeunit/10534 "MTD Manual Receive Period"](../objects/codeunit/10534-gb.md)
- [codeunit/10535 "MTD Auto Receive Period"](../objects/codeunit/10535-gb.md)
- [codeunit/10536 "MTD Receive Submitted"](../objects/codeunit/10536-gb.md)
- [codeunit/10537 "MTD Connection"](../objects/codeunit/10537-gb.md)
- [codeunit/10538 "MTD OAuth 2.0 Mgt"](../objects/codeunit/10538-gb.md)
- [codeunit/10539 "MTD Install"](../objects/codeunit/10539-gb.md)
- [codeunit/10540 "MTD Upgrade"](../objects/codeunit/10540-gb.md)
- [codeunit/10541 "MTD Fraud Prevention Mgt."](../objects/codeunit/10541-gb.md)
- [codeunit/10544 "VAT Audit GB"](../objects/codeunit/10544-gb.md)
- [codeunit/10547 "HMRC Submission Helpers"](../objects/codeunit/10547-gb.md)
- [codeunit/10549 "Reverse Charge VAT GB"](../objects/codeunit/10549-gb.md)
- [codeunit/10552 "Reverse Charge VAT Subscribers"](../objects/codeunit/10552-gb.md)
- [codeunit/10553 "Feature - Reverse Charge VAT"](../objects/codeunit/10553-gb.md)
- [codeunit/10554 "Upgrade Reverse Charge VAT"](../objects/codeunit/10554-gb.md)
- [codeunit/10556 "Upg. Tag Reverse Charge VAT"](../objects/codeunit/10556-gb.md)
- [codeunit/10557 "Reverse Charge VAT Procedures"](../objects/codeunit/10557-gb.md)
- [codeunit/10561 "GovTalk Helper Procedures"](../objects/codeunit/10561-gb.md)
- [codeunit/10568 "GovTalk"](../objects/codeunit/10568-gb.md)
- [codeunit/10569 "GovTalk Message Management"](../objects/codeunit/10569-gb.md)
- [codeunit/10575 "Gov Talk Setup"](../objects/codeunit/10575-gb.md)
- [codeunit/10580 "Feature - Reports GB"](../objects/codeunit/10580-gb.md)
- [codeunit/10581 "Reports Subscribers"](../objects/codeunit/10581-gb.md)
- [codeunit/10583 "Upg. Tag Reports GB"](../objects/codeunit/10583-gb.md)
- [codeunit/10584 "Reports GB"](../objects/codeunit/10584-gb.md)
- [codeunit/10585 "Sandbox Cleanup"](../objects/codeunit/10585-gb.md)
- [codeunit/10586 "Submit VAT Declaration Req."](../objects/codeunit/10586-gb.md)
- [codeunit/10588 "Upg. Tag GovTalk"](../objects/codeunit/10588-gb.md)
- [codeunit/10589 "Create VAT Declaration Req."](../objects/codeunit/10589-gb.md)
- [codeunit/10592 "Reports GB Helper Procedures"](../objects/codeunit/10592-gb.md)
- [codeunit/104150 "UPG GB"](../objects/codeunit/104150-gb.md)
- [controladdin/mtd web client fp headers "MTD Web Client FP Headers"](../objects/controladdin/mtd-web-client-fp-headers-gb.md)
- [enumextension/10400 "VAT Report Status"](../objects/enumextension/10400-gb.md)
- [enumextension/10504 "VAT Report Status GB"](../objects/enumextension/10504-gb.md)
- [enumextension/10553 "Feature - Reverse Charge VAT"](../objects/enumextension/10553-gb.md)
- [enumextension/10554 "Feature - GovTalk"](../objects/enumextension/10554-gb.md)
- [enumextension/10580 "Feature - ReportsGB"](../objects/enumextension/10580-gb.md)
- [page/9142 "GetAddress.io Config"](../objects/page/9142-gb.md)
- [page/9400 "IPC Config"](../objects/page/9400-gb.md)
- [page/9402 "IPC Address Lookup"](../objects/page/9402-gb.md)
- [page/10500 "Postcode Search"](../objects/page/10500-gb.md)
- [page/10501 "Postcode Configuration Page"](../objects/page/10501-gb.md)
- [page/10502 "Postcode Service Lookup"](../objects/page/10502-gb.md)
- [page/10503 "Postcode Configuration Page GB"](../objects/page/10503-gb.md)
- [page/10504 "Gov Talk Setup"](../objects/page/10504-gb.md)
- [page/10505 "Postcode Search GB"](../objects/page/10505-gb.md)
- [page/10506 "Postcode Service Lookup GB"](../objects/page/10506-gb.md)
- [page/10510 "Check Preview GB"](../objects/page/10510-gb.md)
- [page/10523 "GovTalk Setup"](../objects/page/10523-gb.md)
- [page/10530 "MTD Liabilities"](../objects/page/10530-gb.md)
- [page/10531 "MTD Payments"](../objects/page/10531-gb.md)
- [page/10532 "MTD Return Details"](../objects/page/10532-gb.md)
- [page/10538 "MTD Web Client FP Headers"](../objects/page/10538-gb.md)
- [pageextension/9401 "IPC Vendor Card"](../objects/pageextension/9401-gb.md)
- [pageextension/9402 "IPC Bank Account Card"](../objects/pageextension/9402-gb.md)
- [pageextension/9403 "IPC Company Information"](../objects/pageextension/9403-gb.md)
- [pageextension/9404 "IPC Contact Alt. Address Card"](../objects/pageextension/9404-gb.md)
- [pageextension/9405 "IPC Contact Card"](../objects/pageextension/9405-gb.md)
- [pageextension/9406 "IPC Customer Bank Account Card"](../objects/pageextension/9406-gb.md)
- [pageextension/9407 "IPC Customer Card"](../objects/pageextension/9407-gb.md)
- [pageextension/9408 "IPC Employee Card"](../objects/pageextension/9408-gb.md)
- [pageextension/9409 "IPC Location Card"](../objects/pageextension/9409-gb.md)
- [pageextension/9410 "IPC Resource Card"](../objects/pageextension/9410-gb.md)
- [pageextension/9411 "IPC Ship-to Address"](../objects/pageextension/9411-gb.md)
- [pageextension/10504 "ECSL Report"](../objects/pageextension/10504-gb.md)
- [pageextension/10519 "VAT Report Log"](../objects/pageextension/10519-gb.md)
- [pageextension/10525 "VAT Reports Configuration"](../objects/pageextension/10525-gb.md)
- [pageextension/10526 "Company Information"](../objects/pageextension/10526-gb.md)
- [pageextension/10530 "MTD Return Period Card"](../objects/pageextension/10530-gb.md)
- [pageextension/10538 "MTD OAuth 2.0 Setup"](../objects/pageextension/10538-gb.md)
- [pageextension/10539 "MTD Report Setup"](../objects/pageextension/10539-gb.md)
- [pageextension/10548 "VAT Statement"](../objects/pageextension/10548-gb.md)
- [pageextension/10549 "General Ledger Setup"](../objects/pageextension/10549-gb.md)
- [pageextension/10552 "Item Card"](../objects/pageextension/10552-gb.md)
- [pageextension/10553 "Item List"](../objects/pageextension/10553-gb.md)
- [pageextension/10554 "Item Templ. Card"](../objects/pageextension/10554-gb.md)
- [pageextension/10556 "Purchases & Payables Setup"](../objects/pageextension/10556-gb.md)
- [pageextension/10557 "Sales & Receivables Setup"](../objects/pageextension/10557-gb.md)
- [pageextension/10580 "Report Layouts GB"](../objects/pageextension/10580-gb.md)
- [permissionset/9400 "IdealPostcodes Read"](../objects/permissionset/9400-gb.md)
- [permissionset/9401 "IdealPostcodes View"](../objects/permissionset/9401-gb.md)
- [permissionset/10500 "Making Tax Digital - Full"](../objects/permissionset/10500-gb.md)
- [permissionset/10501 "Making Tax Digital - Read"](../objects/permissionset/10501-gb.md)
- [permissionset/10502 "Making Tax Digital - RM"](../objects/permissionset/10502-gb.md)
- [permissionset/10504 "GovTalk - Objects Full"](../objects/permissionset/10504-gb.md)
- [permissionset/10519 "GovTalk - Objects Read"](../objects/permissionset/10519-gb.md)
- [permissionset/10525 "GovTalk - Objects RM"](../objects/permissionset/10525-gb.md)
- [permissionset/10526 "GovTalk - Objects X"](../objects/permissionset/10526-gb.md)
- [permissionset/10544 "VAT Reporting - Objects"](../objects/permissionset/10544-gb.md)
- [permissionset/10549 "Reverse Charge VAT - Objects"](../objects/permissionset/10549-gb.md)
- [permissionset/10595 "Reports GB - Objects"](../objects/permissionset/10595-gb.md)
- [permissionsetextension/1317 "D365 BASIC ISV - Making Tax Digital Localization for United Kingdom"](../objects/permissionsetextension/1317-gb.md)
- [permissionsetextension/9402 "Int. Cloud - IdealPostcodes"](../objects/permissionsetextension/9402-gb.md)
- [permissionsetextension/9404 "IdealPostcodes Local"](../objects/permissionsetextension/9404-gb.md)
- [permissionsetextension/9405 "IdealPostcodes Local Read"](../objects/permissionsetextension/9405-gb.md)
- [permissionsetextension/9406 "D365 TEAM M. IdealPostcodes"](../objects/permissionsetextension/9406-gb.md)
- [permissionsetextension/9407 "D365 READ - IdealPostcodes"](../objects/permissionsetextension/9407-gb.md)
- [permissionsetextension/9408 "D365 FULL - IdealPostcodes"](../objects/permissionsetextension/9408-gb.md)
- [permissionsetextension/9409 "D365 BUS PREMIUM - IdealPostcodes"](../objects/permissionsetextension/9409-gb.md)
- [permissionsetextension/9410 "D365 BUS FULL IdealPostcodes"](../objects/permissionsetextension/9410-gb.md)
- [permissionsetextension/9411 "D365 BASIC ISV - IdealPostcodes"](../objects/permissionsetextension/9411-gb.md)
- [permissionsetextension/9412 "D365 BASIC - IdealPostcodes"](../objects/permissionsetextension/9412-gb.md)
- [permissionsetextension/10500 "Intrastat GB - Objects"](../objects/permissionsetextension/10500-gb.md)
- [permissionsetextension/10501 "GetAddress.io UK Postcodes Local"](../objects/permissionsetextension/10501-gb.md)
- [permissionsetextension/10502 "GetAddress.io UK Postcodes Local Read"](../objects/permissionsetextension/10502-gb.md)
- [permissionsetextension/10504 "GOVTALK D365 BUS FULL ACCESS"](../objects/permissionsetextension/10504-gb.md)
- [permissionsetextension/10519 "GOVTALK D365 SETUP"](../objects/permissionsetextension/10519-gb.md)
- [permissionsetextension/10525 "GOVTALK LOCAL"](../objects/permissionsetextension/10525-gb.md)
- [permissionsetextension/10526 "GOVTALK LOCAL READ"](../objects/permissionsetextension/10526-gb.md)
- [permissionsetextension/10544 "D365 BASIC ISV - VAT Reporting"](../objects/permissionsetextension/10544-gb.md)
- [permissionsetextension/10545 "D365 BASIC - VAT Reporting"](../objects/permissionsetextension/10545-gb.md)
- [permissionsetextension/10546 "D365 READ - VAT Reporting"](../objects/permissionsetextension/10546-gb.md)
- [permissionsetextension/10547 "D365 TEAM MEMBER - VAT Reporting"](../objects/permissionsetextension/10547-gb.md)
- [permissionsetextension/10548 "D365 INTELLIGENT CLOUD - VAT Reporting"](../objects/permissionsetextension/10548-gb.md)
- [permissionsetextension/10549 "D365 BASIC ISV - Reverse Charge VAT"](../objects/permissionsetextension/10549-gb.md)
- [permissionsetextension/10552 "D365 BASIC - Reverse Charge VAT"](../objects/permissionsetextension/10552-gb.md)
- [permissionsetextension/10553 "D365 INTELLIGENT CLOUD - Reverse Charge VAT"](../objects/permissionsetextension/10553-gb.md)
- [permissionsetextension/10554 "D365 READ - Reverse Charge VAT"](../objects/permissionsetextension/10554-gb.md)
- [permissionsetextension/10556 "D365 TEAM MEMBER - Reverse Charge VAT"](../objects/permissionsetextension/10556-gb.md)
- [permissionsetextension/10568 "D365 BASIC ISV - GovTalk"](../objects/permissionsetextension/10568-gb.md)
- [permissionsetextension/10569 "D365 BASIC - GovTalk"](../objects/permissionsetextension/10569-gb.md)
- [permissionsetextension/10575 "D365 READ - GovTalk"](../objects/permissionsetextension/10575-gb.md)
- [permissionsetextension/10580 "D365 TEAM MEMBER - GovTalk"](../objects/permissionsetextension/10580-gb.md)
- [permissionsetextension/10581 "Intelligent Cloud - GovTalk"](../objects/permissionsetextension/10581-gb.md)
- [permissionsetextension/10590 "D365 BASIC ISV - Reports GB"](../objects/permissionsetextension/10590-gb.md)
- [permissionsetextension/10591 "D365 BASIC - Reports GB"](../objects/permissionsetextension/10591-gb.md)
- [permissionsetextension/10592 "D365 INTELLIGENT CLOUD - Reports GB"](../objects/permissionsetextension/10592-gb.md)
- [permissionsetextension/10593 "D365 READ - Reports GB"](../objects/permissionsetextension/10593-gb.md)
- [permissionsetextension/10594 "D365 TEAM MEMBER - Reports GB"](../objects/permissionsetextension/10594-gb.md)
- [permissionsetextension/11107 "D365 READ - GetAddress.io UK Postcodes"](../objects/permissionsetextension/11107-gb.md)
- [permissionsetextension/13912 "D365 TEAM MEMBER - Making Tax Digital Localization for United Kingdom"](../objects/permissionsetextension/13912-gb.md)
- [permissionsetextension/17113 "D365 BASIC - Making Tax Digital Localization for United Kingdom"](../objects/permissionsetextension/17113-gb.md)
- [permissionsetextension/20193 "D365 BUS FULL ACCESS - GetAddress.io UK Postcodes"](../objects/permissionsetextension/20193-gb.md)
- [permissionsetextension/22056 "D365 BASIC ISV - GetAddress.io UK Postcodes"](../objects/permissionsetextension/22056-gb.md)
- [permissionsetextension/23252 "D365 BASIC - GetAddress.io UK Postcodes"](../objects/permissionsetextension/23252-gb.md)
- [permissionsetextension/29153 "INTELLIGENT CLOUD - Making Tax Digital Localization for United Kingdom"](../objects/permissionsetextension/29153-gb.md)
- [permissionsetextension/30556 "D365 BUS PREMIUM - GetAddress.io UK Postcodes"](../objects/permissionsetextension/30556-gb.md)
- [permissionsetextension/36928 "INTELLIGENT CLOUD - GetAddress.io UK Postcodes"](../objects/permissionsetextension/36928-gb.md)
- [permissionsetextension/47413 "D365 FULL ACCESS - GetAddress.io UK Postcodes"](../objects/permissionsetextension/47413-gb.md)
- [permissionsetextension/47548 "D365 READ - Making Tax Digital Localization for United Kingdom"](../objects/permissionsetextension/47548-gb.md)
- [permissionsetextension/49708 "D365 TEAM MEMBER - GetAddress.io UK Postcodes"](../objects/permissionsetextension/49708-gb.md)
- [query/10504 "EU VAT Entries GB"](../objects/query/10504-gb.md)
- [report/10511 "VAT Entry Exception Report"](../objects/report/10511-gb.md)
- [report/10512 "VAT Audit"](../objects/report/10512-gb.md)
- [report/10529 "Reverse Charge Sales List"](../objects/report/10529-gb.md)
- [report/10530 "Get MTD Records"](../objects/report/10530-gb.md)
- [report/10544 "VAT Audit GB"](../objects/report/10544-gb.md)
- [report/10545 "VAT Entry Exception Report GB"](../objects/report/10545-gb.md)
- [report/10549 "Reverse Charge Sales List GB"](../objects/report/10549-gb.md)
- [report/10560 "FA - Projected Value"](../objects/report/10560-gb.md)
- [report/10570 "Sales - Quote GB"](../objects/report/10570-gb.md)
- [report/10571 "Order Confirmation GB"](../objects/report/10571-gb.md)
- [report/10572 "Sales - Invoice GB"](../objects/report/10572-gb.md)
- [report/10573 "Sales - Credit Memo GB"](../objects/report/10573-gb.md)
- [report/10574 "Blanket Sales Order GB"](../objects/report/10574-gb.md)
- [report/10576 "Order GB"](../objects/report/10576-gb.md)
- [report/10577 "Purchase - Invoice GB"](../objects/report/10577-gb.md)
- [report/10578 "Purchase - Credit Memo GB"](../objects/report/10578-gb.md)
- [report/10579 "Blanket Purchase Order GB"](../objects/report/10579-gb.md)
- [report/10580 "Purchase Credit Memo"](../objects/report/10580-gb.md)
- [report/10581 "Purchase Invoice"](../objects/report/10581-gb.md)
- [report/10582 "Sales - Credit Memo"](../objects/report/10582-gb.md)
- [report/10583 "Sales - Invoice"](../objects/report/10583-gb.md)
- [report/10600 "OrderGB"](../objects/report/10600-gb.md)
- [report/10601 "Blanket Purch. Order GB"](../objects/report/10601-gb.md)
- [report/10602 "Blanket Order Sales GB"](../objects/report/10602-gb.md)
- [report/10603 "Order Confirmation"](../objects/report/10603-gb.md)
- [report/10604 "Sales Quote GB"](../objects/report/10604-gb.md)
- [report/10605 "FA - Projected Value GB"](../objects/report/10605-gb.md)
- [reportextension/10504 "EC Sales List"](../objects/reportextension/10504-gb.md)
- [reportextension/10580 "Purchase Document - Test"](../objects/reportextension/10580-gb.md)
- [reportextension/10581 "Sales Document - Test"](../objects/reportextension/10581-gb.md)
- [reportextension/10582 "Bank Account - List"](../objects/reportextension/10582-gb.md)
- [reportextension/10583 "Fixed Asset - Projected Value"](../objects/reportextension/10583-gb.md)
- [reportextension/10584 "Reminder"](../objects/reportextension/10584-gb.md)
- [reportextension/10585 "Finance Charge Memo"](../objects/reportextension/10585-gb.md)
- [reportextension/10586 "Sales - Shipment"](../objects/reportextension/10586-gb.md)
- [reportextension/10587 "Purchase - Quote"](../objects/reportextension/10587-gb.md)
- [reportextension/10588 "Purchase - Receipt"](../objects/reportextension/10588-gb.md)
- [reportextension/10589 "Cash Flow Dimensions - Detail"](../objects/reportextension/10589-gb.md)
- [table/9092 "Postcode GetAddress.io Config"](../objects/table/9092-gb.md)
- [table/9401 "IPC Address Lookup"](../objects/table/9401-gb.md)
- [table/9402 "IPC Config"](../objects/table/9402-gb.md)
- [table/10500 "Postcode Notif. Memory"](../objects/table/10500-gb.md)
- [table/10501 "Postcode Notification Memory"](../objects/table/10501-gb.md)
- [table/10504 "GovTalk Message"](../objects/table/10504-gb.md)
- [table/10519 "GovTalk Msg. Parts"](../objects/table/10519-gb.md)
- [table/10520 "GovTalkMessage"](../objects/table/10520-gb.md)
- [table/10523 "GovTalk Setup"](../objects/table/10523-gb.md)
- [table/10524 "GovTalk Message Parts"](../objects/table/10524-gb.md)
- [table/10525 "Gov Talk Setup"](../objects/table/10525-gb.md)
- [table/10530 "MTD Liability"](../objects/table/10530-gb.md)
- [table/10531 "MTD Payment"](../objects/table/10531-gb.md)
- [table/10532 "MTD Return Details"](../objects/table/10532-gb.md)
- [table/10533 "MTD-Liability"](../objects/table/10533-gb.md)
- [table/10534 "MTD-Payment"](../objects/table/10534-gb.md)
- [table/10535 "MTD-Return Details"](../objects/table/10535-gb.md)
- [table/10536 "MTD-Missing Fraud Prev. Hdr"](../objects/table/10536-gb.md)
- [table/10537 "MTD-Default Fraud Prev. Hdr"](../objects/table/10537-gb.md)
- [table/10538 "MTD-Session Fraud Prev. Hdr"](../objects/table/10538-gb.md)
- [table/10539 "MTD Missing Fraud Prev. Hdr"](../objects/table/10539-gb.md)
- [table/10540 "MTD Default Fraud Prev. Hdr"](../objects/table/10540-gb.md)
- [table/10541 "MTD Session Fraud Prev. Hdr"](../objects/table/10541-gb.md)
- [table/10550 "BACS Ledger Entry"](../objects/table/10550-gb.md)
- [table/10551 "BACS Register"](../objects/table/10551-gb.md)
- [table/10555 "Fin. Charge Interest Rate"](../objects/table/10555-gb.md)
- [table/10560 "Accounting Period GB"](../objects/table/10560-gb.md)
- [table/10561 "Payment Period Setup"](../objects/table/10561-gb.md)
- [table/10562 "Payment Application Buffer"](../objects/table/10562-gb.md)
- [tableextension/10504 "Company Information"](../objects/tableextension/10504-gb.md)
- [tableextension/10510 "Purchases & Payables Setup"](../objects/tableextension/10510-gb.md)
- [tableextension/10511 "Sales & Receivables Setup"](../objects/tableextension/10511-gb.md)
- [tableextension/10525 "ECSL VAT Report Line"](../objects/tableextension/10525-gb.md)
- [tableextension/10526 "VAT Report Archive"](../objects/tableextension/10526-gb.md)
- [tableextension/10539 "MTD Report Setup"](../objects/tableextension/10539-gb.md)
- [tableextension/10549 "General Ledger Setup"](../objects/tableextension/10549-gb.md)
- [tableextension/10552 "VAT Amount Line"](../objects/tableextension/10552-gb.md)
- [tableextension/10553 "Item"](../objects/tableextension/10553-gb.md)
- [tableextension/10554 "Item Templ."](../objects/tableextension/10554-gb.md)
- [tableextension/10556 "Purchase Line"](../objects/tableextension/10556-gb.md)
- [tableextension/10557 "Purch. Cr. Memo Line"](../objects/tableextension/10557-gb.md)
- [tableextension/10558 "Purch. Inv. Line"](../objects/tableextension/10558-gb.md)
- [tableextension/10559 "Purchases & Payables Setup"](../objects/tableextension/10559-gb.md)
- [tableextension/10563 "Sales Line"](../objects/tableextension/10563-gb.md)
- [tableextension/10564 "Sales Cr.Memo Line"](../objects/tableextension/10564-gb.md)
- [tableextension/10565 "Sales Invoice Line"](../objects/tableextension/10565-gb.md)
- [tableextension/10566 "Sales & Receivables Setup"](../objects/tableextension/10566-gb.md)
- [tableextension/10567 "Sales Header"](../objects/tableextension/10567-gb.md)
- [tableextension/10568 "Purchase Header"](../objects/tableextension/10568-gb.md)
- [tableextension/10569 "VAT Reports Configuration"](../objects/tableextension/10569-gb.md)

## Other versions

- BC30: 318 objects differ from W1 (49 fields, 12 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
