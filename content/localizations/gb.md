---
id: localization/gb
type: localization
title: UnitedKingdom (GB)
summary: United Kingdom (GB) localization of Business Central 29. It covers Making Tax Digital VAT returns and fraud prevention headers, EC Sales List and reverse charge VAT, VAT audit reports, UK-layout sales and purchase documents, APACS check printing, BACS tables, Ideal Postcodes address lookup, and UK fixed asset depreciation periods.
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 1c35e606af9a2d519e0b3e7883ef26eaa8fc22420aef48ee16d604b8c8e31c40
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-gb
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
added_objects: 49
replaced_objects: 54
removed_objects: 0
added_fields: 49
added_events: 12
learn_folder: LocalFunctionality/UnitedKingdom
---

# UnitedKingdom (GB)

> United Kingdom (GB) localization of Business Central 29. It covers Making Tax Digital VAT returns and fraud prevention headers, EC Sales List and reverse charge VAT, VAT audit reports, UK-layout sales and purchase documents, APACS check printing, BACS tables, Ideal Postcodes address lookup, and UK fixed asset depreciation periods.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/united-kingdom.md) · narrative **unreviewed** (machine-written)

## Overview

The UK layer centres on VAT. It adds GovTalk and MTD objects (codeunits 10520 to 10528, tables 10520 to 10538, page 10523 "GovTalk Setup") for HMRC communication, submission and archiving of VAT returns. It also extends the W1 EC Sales List report 130, ECSL VAT Report Line table 362 and VAT Report Archive table 747 with XML submission handling and events. Reverse charge VAT is supported through fields on items, sales and purchase lines, posted lines and the setup tables, plus the "Reverse Charge Sales List" report. VAT Audit and VAT Entry Exception reports export CSV data.

Other local pieces are statutory fields on Company Information (supplementary VAT registration number, registered name and address, branch number), Intrastat and Brexit-related fields (shipment method code on ledger and journal lines, reported flags on Intrastat batches), and an "Invoice Receipt Date" on purchase documents and journals. Ideal Postcodes lookup adds the same three procedures (ShowPostcodeLookup, CopyAutocompleteFields, HandleAddressLookupVisibility) to customer, vendor, contact, employee, location and company pages. UK-layout sales and purchase document reports, a check preview page for APACS, and BACS ledger and register tables round out the layer.

Learn documents these under "United Kingdom local functionality [GB]", with separate pages on Making Tax Digital, fraud prevention data, reverse charges, VAT audit reports, check printing, remittance advice, postcode lookup, posting date warning, Brexit impact and straight-line depreciation.

## Key points

- Making Tax Digital: retrieve VAT obligations, suggest lines, release and submit VAT returns, and get liabilities and payments through HMRC, with MTD tables and GovTalk codeunits.
- Fraud prevention headers must be sent to HMRC; admins consent to sending device and user identification data.
- Reverse charge VAT uses Reverse Charge Applies on items, Reverse Charge fields on lines, setup fields for the posting group, and the Reverse Charge Sales List report.
- VAT Audit and VAT Entry Exception reports export customers, vendors, VAT entries and more in CSV format.
- Ideal Postcodes extension fills address fields on customer, vendor, bank account, contact, employee, location and company pages after API key setup.
- Check printing follows the APACS layout with a Check Preview GB page; remittance advice shows vendor invoice numbers.
- Fixed asset straight-line depreciation supports up to 13 accounting periods and 360, 365 or 366 day methods.
- Company Information holds statutory fields such as registered name, registered address and supplementary VAT registration number.

Narrative written by Sonnet from the code diff and 15 Learn page summaries. In numbers: UnitedKingdom (GB) localization of Business Central in BC29: 49 objects of its own, 54 W1 objects changed (49 fields and 12 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 12 | 25 | 9 |
| [Sales](#sales) | 10 | 6 | 9 |
| [Purchases](#purchases) | 10 | 4 | 12 |
| [Inventory](#inventory) | 8 | 0 | 7 |
| [Foundation](#foundation) | 2 | 5 | 10 |
| [Bank](#bank) | 2 | 3 | 1 |
| [(no namespace)](#no-namespace) | 0 | 4 | 0 |
| [CRM](#crm) | 2 | 0 | 0 |
| [FixedAssets](#fixedassets) | 2 | 0 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| [CashFlow](#cashflow) | 1 | 0 | 0 |
| [FixedAsset](#fixedasset) | 0 | 1 | 0 |
| [HumanResources](#humanresources) | 1 | 0 | 0 |
| [Projects](#projects) | 1 | 0 | 1 |
| [RoleCenters](#rolecenters) | 1 | 0 | 0 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Finance

Adds the GovTalk and Making Tax Digital framework (setup, message, MTD liability, payment and return tables, submission codeunits) and extends the VAT report objects. It changes EC Sales List (report 130) with XML creation, adds reverse charge fields, and adds VAT Audit, VAT Entry Exception and Reverse Charge Sales List reports.

Why: Learn explains that MTD requires VAT returns and fraud prevention headers to be exchanged with HMRC, and that VAT audit reports export data as CSV.

Objects: [codeunit/10522 "Submit VAT Declaration Request"](../objects/codeunit/10522-gb.md) (own), [codeunit/10524 "Create VAT Declaration Request"](../objects/codeunit/10524-gb.md) (own), [table/10523 "GovTalk Setup"](../objects/table/10523-gb.md) (own), [table/10533 "MTD-Liability"](../objects/table/10533-gb.md) (own), [report/130 "EC Sales List"](../objects/report/130.md), [table/747 "VAT Report Archive"](../objects/table/747.md), [report/10512 "VAT Audit"](../objects/report/10512-gb.md) (own), [report/10529 "Reverse Charge Sales List"](../objects/report/10529-gb.md) (own).

[All 37 objects of Finance in the diff](?ns=Finance#country-diff)

### Sales

Adds reverse charge fields on sales lines and posted lines, setup fields in Sales & Receivables Setup, and a reverse charge check in Sales-Post. Adds UK-layout quote, order confirmation, invoice, credit memo and blanket order reports, plus a finance charge interest rate table.

Why: Learn describes reverse charge VAT as a measure against carousel fraud on certain electronic goods.

Objects: [table/37 "Sales Line"](../objects/table/37.md), [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [codeunit/80 "Sales-Post"](../objects/codeunit/80.md), [report/10572 "Sales - Invoice GB"](../objects/report/10572-gb.md) (own), [report/10573 "Sales - Credit Memo GB"](../objects/report/10573-gb.md) (own), [report/10570 "Sales - Quote GB"](../objects/report/10570-gb.md) (own), [report/10571 "Order Confirmation GB"](../objects/report/10571-gb.md) (own), [table/10555 "Fin. Charge Interest Rate"](../objects/table/10555-gb.md) (own).

[All 16 objects of Sales in the diff](?ns=Sales#country-diff)

### Purchases

Adds reverse charge fields on purchase lines and setup, an Invoice Receipt Date on purchase headers and vendor ledger entries, and an exclusion flag for payment practice reporting on vendors. Adds UK-layout purchase order, invoice, credit memo and blanket order reports and postcode lookup on the vendor card.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/39 "Purchase Line"](../objects/table/39.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md), [table/38 "Purchase Header"](../objects/table/38.md), [table/25 "Vendor Ledger Entry"](../objects/table/25.md), [table/23 "Vendor"](../objects/table/23.md), [report/10577 "Purchase - Invoice GB"](../objects/report/10577-gb.md) (own), [report/10576 "Order GB"](../objects/report/10576-gb.md) (own), [page/26 "Vendor Card"](../objects/page/26.md).

[All 14 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Inventory

Adds Reverse Charge Applies to items and item templates, Shipment Method Code to item ledger and journal lines, Freight/Insurance to item charges, and reported flags to Intrastat batches. Location Card gets postcode lookup.

Why: Learn links the Reverse Charge Applies field to reverse charge setup and notes Intrastat and location code relevance after Brexit.

Objects: [table/27 "Item"](../objects/table/27.md), [table/1382 "Item Templ."](../objects/table/1382.md), [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md), [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/83 "Item Journal Line"](../objects/table/83.md), [table/5800 "Item Charge"](../objects/table/5800.md), [page/5703 "Location Card"](../objects/page/5703.md).

[All 8 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Foundation

Adds statutory fields to Company Information (supplementary VAT registration, registered name and address, branch number, contact name) and an Ideal Postcodes lookup with business logic, search, configuration and service pages.

Why: Learn says the statutory information is required by law and the postcode extension uses the Ideal Postcodes API.

Objects: [table/79 "Company Information"](../objects/table/79.md), [page/1 "Company Information"](../objects/page/1.md), [codeunit/10500 "Postcode Business Logic"](../objects/codeunit/10500-gb.md) (own), [page/10500 "Postcode Search"](../objects/page/10500-gb.md) (own), [page/10501 "Postcode Configuration Page"](../objects/page/10501-gb.md) (own), [page/10502 "Postcode Service Lookup"](../objects/page/10502-gb.md) (own), [table/10501 "Postcode Notification Memory"](../objects/table/10501-gb.md) (own).

[All 7 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Bank

Adds BACS ledger entry and register tables, a Check Preview GB page, a Reconciled field on bank reconciliation lines, and an employee balancing type procedure in the Check report.

Why: Learn states that check printing uses the APACS specification layout.

Objects: [page/10510 "Check Preview GB"](../objects/page/10510-gb.md) (own), [report/1401 "Check"](../objects/report/1401.md), [table/10550 "BACS Ledger Entry"](../objects/table/10550-gb.md) (own), [table/10551 "BACS Register"](../objects/table/10551-gb.md) (own), [table/274 "Bank Acc. Reconciliation Line"](../objects/table/274.md).

[All 5 objects of Bank in the diff](?ns=Bank#country-diff)

### (no namespace)

Adds the EC Sales List submit codeunit for the UK ECSL flow.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/142 "EC Sales List Submit"](../objects/codeunit/142-gb.md) (own).

[All 4 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### CRM

Contact Card and Contact Alternative Address Card get postcode lookup procedures.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [page/5050 "Contact Card"](../objects/page/5050.md), [page/5056 "Contact Alt. Address Card"](../objects/page/5056.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### FixedAssets

Depreciation Calculation and FA Depreciation Book are changed to support UK straight-line depreciation across accounting periods.

Why: Learn describes up to 13 accounting periods and 360, 365 or 366 day methods.

Objects: [codeunit/5616 "Depreciation Calculation"](../objects/codeunit/5616.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md).

[All 2 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

The LOCAL and LOCAL READ permission sets are changed to cover the UK objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CashFlow

Cash Flow Dimensions - Detail report is changed for the UK.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/852 "Cash Flow Dimensions - Detail"](../objects/report/852.md).

[All 1 objects of CashFlow in the diff](?ns=CashFlow#country-diff)

### FixedAsset

Adds the FA - Projected Value report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/10560 "FA - Projected Value"](../objects/report/10560-gb.md) (own).

[All 1 objects of FixedAsset in the diff](?ns=FixedAsset#country-diff)

### HumanResources

Employee Card gets postcode lookup procedures.

Why: Learn lists employees among the records that Ideal Postcodes can fill.

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

Adds Local Application Management, a UK-specific utility codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/10529 "Local Application Management"](../objects/codeunit/10529-gb.md) (own).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

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

49 objects only this country has.

- [codeunit/141 "EC Sales List Populate XML"](../objects/codeunit/141-gb.md)
- [codeunit/142 "EC Sales List Submit"](../objects/codeunit/142-gb.md)
- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-gb.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-gb.md)
- [codeunit/10500 "Postcode Business Logic"](../objects/codeunit/10500-gb.md)
- [codeunit/10520 "GovTalkMessageManagement"](../objects/codeunit/10520-gb.md)
- [codeunit/10521 "HMRC GovTalk Message Scheduler"](../objects/codeunit/10521-gb.md)
- [codeunit/10522 "Submit VAT Declaration Request"](../objects/codeunit/10522-gb.md)
- [codeunit/10523 "GovTalk Setup"](../objects/codeunit/10523-gb.md)
- [codeunit/10524 "Create VAT Declaration Request"](../objects/codeunit/10524-gb.md)
- [codeunit/10527 "HMRCSubmissionHelpers"](../objects/codeunit/10527-gb.md)
- [codeunit/10528 "GovTalk VAT Report Validate"](../objects/codeunit/10528-gb.md)
- [codeunit/10529 "Local Application Management"](../objects/codeunit/10529-gb.md)
- [codeunit/104150 "UPG GB"](../objects/codeunit/104150-gb.md)
- [enumextension/10400 "VAT Report Status"](../objects/enumextension/10400-gb.md)
- [page/10500 "Postcode Search"](../objects/page/10500-gb.md)
- [page/10501 "Postcode Configuration Page"](../objects/page/10501-gb.md)
- [page/10502 "Postcode Service Lookup"](../objects/page/10502-gb.md)
- [page/10510 "Check Preview GB"](../objects/page/10510-gb.md)
- [page/10523 "GovTalk Setup"](../objects/page/10523-gb.md)
- [report/10511 "VAT Entry Exception Report"](../objects/report/10511-gb.md)
- [report/10512 "VAT Audit"](../objects/report/10512-gb.md)
- [report/10529 "Reverse Charge Sales List"](../objects/report/10529-gb.md)
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
- [table/10501 "Postcode Notification Memory"](../objects/table/10501-gb.md)
- [table/10520 "GovTalkMessage"](../objects/table/10520-gb.md)
- [table/10523 "GovTalk Setup"](../objects/table/10523-gb.md)
- [table/10524 "GovTalk Message Parts"](../objects/table/10524-gb.md)
- [table/10533 "MTD-Liability"](../objects/table/10533-gb.md)
- [table/10534 "MTD-Payment"](../objects/table/10534-gb.md)
- [table/10535 "MTD-Return Details"](../objects/table/10535-gb.md)
- [table/10536 "MTD-Missing Fraud Prev. Hdr"](../objects/table/10536-gb.md)
- [table/10537 "MTD-Default Fraud Prev. Hdr"](../objects/table/10537-gb.md)
- [table/10538 "MTD-Session Fraud Prev. Hdr"](../objects/table/10538-gb.md)
- [table/10550 "BACS Ledger Entry"](../objects/table/10550-gb.md)
- [table/10551 "BACS Register"](../objects/table/10551-gb.md)
- [table/10555 "Fin. Charge Interest Rate"](../objects/table/10555-gb.md)
- [table/10560 "Accounting Period GB"](../objects/table/10560-gb.md)
- [table/10561 "Payment Period Setup"](../objects/table/10561-gb.md)
- [table/10562 "Payment Application Buffer"](../objects/table/10562-gb.md)

## Other versions

- BC30: 104 objects differ from W1 (49 fields, 12 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
