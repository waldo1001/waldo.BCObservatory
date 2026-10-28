---
id: localization/is
type: localization
title: Iceland (IS)
summary: Iceland (IS) localization of Business Central 29, delivered as the IS Core app on top of W1. It covers IRS number mapping to the chart of accounts, tax authority reports, VAT summary on documents, electronic invoicing for single-copy invoices, registration numbers, and deletion of posted invoices and credit memos.
tier: official
language: en
tags:
  - localization
  - is
review:
  state: reviewed
  by: opus
  at: "2026-10-28T10:37:38.968Z"
  flags: []
generated:
  at: "2026-10-28T10:42:34.480Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 39bbcf23aa78efae63df1d8855512ca5369b9a63648fc4693dc11e58d6f76e32
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-is
    date: null
    commit: 4c1c1638beb6d5da8540cc1f61889b80c7b3356f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/permissionset/1001
    - object/permissionset/1002
    - object/table/15
    - object/table/21
    - object/table/311
    - object/table/5611
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/iceland
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: IS
version: "29"
w1_version: "29"
added_objects: 55
replaced_objects: 6
removed_objects: 0
added_fields: 6
added_events: 0
learn_folder: LocalFunctionality/Iceland
---

# Iceland (IS)

> Iceland (IS) localization of Business Central 29, delivered as the IS Core app on top of W1. It covers IRS number mapping to the chart of accounts, tax authority reports, VAT summary on documents, electronic invoicing for single-copy invoices, registration numbers, and deletion of posted invoices and credit memos.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/iceland.md) · narrative reviewed (checked by Opus)

## Overview

The Icelandic layer is the IS Core app, available from version 24.0. It moves Icelandic localization data from the W1 base app during upgrade. Codeunits "IS Core", "IS Core Install", "IS Core Upgrade" and "Enable IS Core App", plus table 10903 "IS Core App Setup", handle installation and enablement.

Main local capabilities are IRS numbers, groups and types (tables 10900 to 10902 and 14600 to 14602, with pages 14600 to 14602). The field "IRS Number" is added to table 15 "G/L Account". Reports "IS IRS Details" and "IS Trial Balance - IRS Number" support the tax authority data output. VAT reports include "IS VAT Reconciliation A" and "IS VAT Balancing Report". Report "IS IRS notification" supports the single-copy electronic invoicing declaration, enabled by an "Electronic Invoicing" field on table 311 "Sales & Receivables Setup".

Report extensions add the "Always Show VAT Summary" option on purchase and sales documents. Codeunit 14606 "IS Docs Retention Period" and an enum extension support deletion of posted invoices and credit memos under retention rules. Learn documents these topics in the Icelandic local functionality pages.

## Key points

- IS Core app, from version 24.0, carries the Icelandic localization and transfers localization data from W1 on upgrade.
- IRS numbers are mapped to G/L accounts through the new field IRS Number on table 15, with IRS Groups, Numbers and Types setup pages.
- Tax authority reports: IS IRS Details and IS Trial Balance - IRS Number, showing balances at a date.
- VAT reports: IS VAT Reconciliation A and IS VAT Balancing Report, with enums for report period and VAT entries filter.
- Electronic Invoicing flag on Sales & Receivables Setup and the IRS notification report declare single-copy invoices under Regulation No. 598/1999.
- Always Show VAT Summary is added to purchase invoice, purchase credit memo, order and blanket sales order reports.
- Deletion of posted invoices and credit memos follows a Document Retention Period and an Allow Document Deletion Before date.
- Depreciation Book gets the fields Residual Value % and Revalue in Year Purch.

Narrative written by Sonnet from the code diff and 8 Learn page summaries. In numbers: Iceland (IS) localization of Business Central in BC29: 55 objects of its own, 6 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 1 | 39 | 1 |
| [(no namespace)](#no-namespace) | 0 | 5 | 0 |
| [Purchases](#purchases) | 0 | 5 | 0 |
| [Sales](#sales) | 2 | 2 | 3 |
| [FixedAssets](#fixedassets) | 1 | 2 | 2 |
| [Security](#security) | 2 | 0 | 0 |
| [CRM](#crm) | 0 | 1 | 0 |
| [Foundation](#foundation) | 0 | 1 | 0 |

### Finance

Adds IRS Groups, Numbers and Types tables and pages, the IS Core install/upgrade codeunits and IS Core App Setup, and the document retention codeunit. Adds IRS and VAT reports (IRS Details, Trial Balance - IRS Number, IRS notification, VAT Reconciliation A, VAT Balancing Report). Adds the IRS Number field to G/L Account and extends role centers and the chart of accounts.

Why: Learn explains that IRS numbers must be mapped to G/L accounts to meet tax authority reporting, and that posted invoices can be deleted only per retention and fiscal year rules.

Objects: [table/15 "G/L Account"](../objects/table/15.md), [table/10900 "IRS Numbers"](../objects/table/10900-is.md) (own), [table/10901 "IRS Groups"](../objects/table/10901-is.md) (own), [table/10902 "IRS Types"](../objects/table/10902-is.md) (own), [report/14603 "IS IRS Details"](../objects/report/14603-is.md) (own), [report/14605 "IS Trial Balance - IRS Number"](../objects/report/14605-is.md) (own), [report/14601 "IS VAT Reconciliation A"](../objects/report/14601-is.md) (own), [codeunit/14606 "IS Docs Retention Period"](../objects/codeunit/14606-is.md) (own).

[All 40 objects of Finance in the diff](?ns=Finance#country-diff)

### (no namespace)

Extends the G/L Account and Sales & Receivables Setup tables, and posted purchase invoice, credit memo and small business owner role center pages.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [tableextension/14602 "IS G/L Account"](../objects/tableextension/14602-is.md) (own), [tableextension/14603 "IS Sales & Receivables Setup"](../objects/tableextension/14603-is.md) (own), [pageextension/14609 "IS Posted Purchase Invoice"](../objects/pageextension/14609-is.md) (own), [pageextension/14604 "IS Posted Purch. Credit Memo"](../objects/pageextension/14604-is.md) (own), [pageextension/14607 "IS Small Business Owner RC"](../objects/pageextension/14607-is.md) (own).

[All 5 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Purchases

Extends the vendor card, which holds the registration number. Report extensions for order, purchase invoice and purchase credit memo add the VAT summary option. A further extension covers the blanket sales order report.

Why: Learn says the Always Show VAT Summary option prints VAT details even with a single VAT identifier.

Objects: [pageextension/14610 "IS Vendor Card"](../objects/pageextension/14610-is.md) (own), [reportextension/14602 "IS Purchase Invoice"](../objects/reportextension/14602-is.md) (own), [reportextension/14601 "IS Purch Credit Memo"](../objects/reportextension/14601-is.md) (own), [reportextension/14600 "IS Order"](../objects/reportextension/14600-is.md) (own), [reportextension/14603 "IS Blanket Sales Order"](../objects/reportextension/14603-is.md) (own).

[All 5 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds fields to Sales & Receivables Setup (Electronic Invoicing, Credit Memo Nos. Paym. Disc.) and to Cust. Ledger Entry (Credit Memo Document). Extends the setup page and customer card, which holds the registration number.

Why: Learn describes electronic invoicing as a requirement for single-copy invoices, declared with the IRS notification report.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [pageextension/14606 "IS Sales & Receivables Setup"](../objects/pageextension/14606-is.md) (own), [pageextension/14611 "IS Customer Card"](../objects/pageextension/14611-is.md) (own).

[All 4 objects of Sales in the diff](?ns=Sales#country-diff)

### FixedAssets

Adds Residual Value % and Revalue in Year Purch. to Depreciation Book, shown on the depreciation book card.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5611 "Depreciation Book"](../objects/table/5611.md), [tableextension/14601 "IS Depreciation Book"](../objects/tableextension/14601-is.md) (own), [pageextension/14603 "IS Depreciation Book Card"](../objects/pageextension/14603-is.md) (own).

[All 3 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Changes the W1 LOCAL and LOCAL READ permission sets. The IS Core permission sets and extensions of standard sets are in the Finance area.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Extends the contact card for Icelandic data.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/14612 "IS Contact Card"](../objects/pageextension/14612-is.md) (own).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### Foundation

Extends Company Information, where the company registration number is stored.

Why: Learn says registration numbers on company information populate sales documents and payment exports.

Objects: [pageextension/14608 "IS Company Info"](../objects/pageextension/14608-is.md) (own).

[All 1 objects of Foundation in the diff](?ns=Foundation#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 1 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 1 properties |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +1 fields |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +2 fields |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | +2 fields |

## Objects of its own

55 objects only this country has.

- [codeunit/14600 "IS Core"](../objects/codeunit/14600-is.md)
- [codeunit/14601 "IS Core Install"](../objects/codeunit/14601-is.md)
- [codeunit/14602 "IS Core Upgrade"](../objects/codeunit/14602-is.md)
- [codeunit/14606 "IS Docs Retention Period"](../objects/codeunit/14606-is.md)
- [codeunit/14611 "Enable IS Core App"](../objects/codeunit/14611-is.md)
- [enum/14600 "IS VAT Rec. Report Period"](../objects/enum/14600-is.md)
- [enum/14601 "IS VAT Entries Filter"](../objects/enum/14601-is.md)
- [enumextension/14600 "IS Docs - Retention Definition"](../objects/enumextension/14600-is.md)
- [page/14600 "IS IRS Groups"](../objects/page/14600-is.md)
- [page/14601 "IS IRS Numbers"](../objects/page/14601-is.md)
- [page/14602 "IS IRS Types"](../objects/page/14602-is.md)
- [pageextension/14600 "IS Accounting Manager RC"](../objects/pageextension/14600-is.md)
- [pageextension/14601 "IS Bookkeeper Role Center"](../objects/pageextension/14601-is.md)
- [pageextension/14602 "IS Chart of Accounts"](../objects/pageextension/14602-is.md)
- [pageextension/14603 "IS Depreciation Book Card"](../objects/pageextension/14603-is.md)
- [pageextension/14604 "IS Posted Purch. Credit Memo"](../objects/pageextension/14604-is.md)
- [pageextension/14605 "IS Finance Manager RC"](../objects/pageextension/14605-is.md)
- [pageextension/14606 "IS Sales & Receivables Setup"](../objects/pageextension/14606-is.md)
- [pageextension/14607 "IS Small Business Owner RC"](../objects/pageextension/14607-is.md)
- [pageextension/14608 "IS Company Info"](../objects/pageextension/14608-is.md)
- [pageextension/14609 "IS Posted Purchase Invoice"](../objects/pageextension/14609-is.md)
- [pageextension/14610 "IS Vendor Card"](../objects/pageextension/14610-is.md)
- [pageextension/14611 "IS Customer Card"](../objects/pageextension/14611-is.md)
- [pageextension/14612 "IS Contact Card"](../objects/pageextension/14612-is.md)
- [permissionset/14600 "IS Core - Objects"](../objects/permissionset/14600-is.md)
- [permissionset/14601 "IS Core - Read"](../objects/permissionset/14601-is.md)
- [permissionset/14602 "IS Core - Edit"](../objects/permissionset/14602-is.md)
- [permissionsetextension/14604 "D365 BASIC - IS Core"](../objects/permissionsetextension/14604-is.md)
- [permissionsetextension/14605 "D365 BASIC ISV - IS Core"](../objects/permissionsetextension/14605-is.md)
- [permissionsetextension/14606 "D365 READ - IS Core"](../objects/permissionsetextension/14606-is.md)
- [permissionsetextension/14607 "D365 Team Member - IS Core"](../objects/permissionsetextension/14607-is.md)
- [permissionsetextension/14608 "INTELLIGENT CLOUD - IS Core"](../objects/permissionsetextension/14608-is.md)
- [permissionsetextension/14609 "LOCAL - IS Core"](../objects/permissionsetextension/14609-is.md)
- [report/10913 "IRS notification"](../objects/report/10913-is.md)
- [report/10940 "VAT Reconciliation A"](../objects/report/10940-is.md)
- [report/10941 "VAT Balancing Report"](../objects/report/10941-is.md)
- [report/14600 "IS VAT Balancing Report"](../objects/report/14600-is.md)
- [report/14601 "IS VAT Reconciliation A"](../objects/report/14601-is.md)
- [report/14603 "IS IRS Details"](../objects/report/14603-is.md)
- [report/14605 "IS Trial Balance - IRS Number"](../objects/report/14605-is.md)
- [report/14608 "IS IRS notification"](../objects/report/14608-is.md)
- [reportextension/14600 "IS Order"](../objects/reportextension/14600-is.md)
- [reportextension/14601 "IS Purch Credit Memo"](../objects/reportextension/14601-is.md)
- [reportextension/14602 "IS Purchase Invoice"](../objects/reportextension/14602-is.md)
- [reportextension/14603 "IS Blanket Sales Order"](../objects/reportextension/14603-is.md)
- [table/10900 "IRS Numbers"](../objects/table/10900-is.md)
- [table/10901 "IRS Groups"](../objects/table/10901-is.md)
- [table/10902 "IRS Types"](../objects/table/10902-is.md)
- [table/10903 "IS Core App Setup"](../objects/table/10903-is.md)
- [table/14600 "IS IRS Groups"](../objects/table/14600-is.md)
- [table/14601 "IS IRS Numbers"](../objects/table/14601-is.md)
- [table/14602 "IS IRS Types"](../objects/table/14602-is.md)
- [tableextension/14601 "IS Depreciation Book"](../objects/tableextension/14601-is.md)
- [tableextension/14602 "IS G/L Account"](../objects/tableextension/14602-is.md)
- [tableextension/14603 "IS Sales & Receivables Setup"](../objects/tableextension/14603-is.md)

## Other versions

- BC30: 61 objects differ from W1 (6 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
