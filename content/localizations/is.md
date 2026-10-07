---
id: localization/is
type: localization
title: Iceland (IS)
summary: Iceland (IS) localization for Business Central 29. It covers IRS number mapping of the chart of accounts for tax authority files, VAT reconciliation and balancing reports, the IRS Notification report for electronic invoicing, credit memo fields in sales, depreciation book fields, and the Iceland W1 core app setup.
tier: official
language: en
tags:
  - localization
  - is
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 0e488e5d3fc23f95d8dee5f4a4609b09c0068beaa3b79df9d8330b4835c39509
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-is
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

> Iceland (IS) localization for Business Central 29. It covers IRS number mapping of the chart of accounts for tax authority files, VAT reconciliation and balancing reports, the IRS Notification report for electronic invoicing, credit memo fields in sales, depreciation book fields, and the Iceland W1 core app setup.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/iceland.md) · narrative **unreviewed** (machine-written)

## Overview

The Icelandic layer adds three reports and four tables of its own. The IRS Numbers, IRS Groups and IRS Types tables, plus the IdaG/L Account field "IRS Number", let users map general ledger accounts to government account codes. Learn describes this under mapping IRS numbers to the chart of accounts and special data output for the tax authorities. Two VAT reports, "VAT Reconciliation A" and "VAT Balancing Report", support VAT reporting.

Sales changes are small. Sales & Receivables Setup gets an Electronic Invoicing field and a credit memo number series field for payment discounts, and Cust. Ledger Entry gets a Credit Memo Document field. The "IRS notification" report prints the legal statements that Learn says are required when invoices are printed more than once. Depreciation Book gains "Revalue in Year Purch." and "Residual Value %".

Table "IS Core App Setup" supports the move from the Icelandic localization to the W1 base app model, with features delivered as apps from version 24.0 and a one-time manual data migration. Learn also documents document deletion rules, registration numbers and printing VAT summary information. The code adds no events or procedures, and the LOCAL and LOCAL READ permission sets are replaced.

## Key points

- IRS numbers, groups and types map G/L accounts to tax authority codes via the new field on G/L Account.
- Reports: IRS notification, VAT Reconciliation A and VAT Balancing Report.
- Sales & Receivables Setup has an Electronic Invoicing option that ties into printing the IRS Notification report.
- Cust. Ledger Entry has a Credit Memo Document field, and setup has a credit memo number series for payment discounts.
- Depreciation Book adds Revalue in Year Purch. and Residual Value %.
- IS Core App Setup supports the one-time manual migration to the W1 core app model from version 24.0.
- Learn covers deletion of posted invoices and credit memos, registration numbers and the Always Show VAT Summary option.
- No events or procedures are added; permission sets LOCAL and LOCAL READ are replaced.

Narrative written by Sonnet from the code diff and 8 Learn page summaries. In numbers: Iceland (IS) localization of Business Central in BC29: 55 objects of its own, 6 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 1 | 39 | 1 |
| (no namespace) | 0 | 5 | 0 |
| Purchases | 0 | 5 | 0 |
| [Sales](#sales) | 2 | 2 | 3 |
| [FixedAssets](#fixedassets) | 1 | 2 | 2 |
| [Security](#security) | 2 | 0 | 0 |
| CRM | 0 | 1 | 0 |
| Foundation | 0 | 1 | 0 |

### Finance

Adds tables "IRS Numbers", "IRS Groups" and "IRS Types" and an IRS Number field on G/L Account for mapping accounts to tax authority codes. Adds the reports IRS notification, VAT Reconciliation A and VAT Balancing Report, and the table "IS Core App Setup" for the core app migration.

Why: Learn says the IRS mapping is needed to generate compliant data files for the tax authorities. The core app setup supports migration to the W1 model from version 24.0.

Objects: [table/10900 "IRS Numbers"](../objects/table/10900-is.md) (own), [table/10901 "IRS Groups"](../objects/table/10901-is.md) (own), [table/10902 "IRS Types"](../objects/table/10902-is.md) (own), [table/15 "G/L Account"](../objects/table/15.md), [report/10940 "VAT Reconciliation A"](../objects/report/10940-is.md) (own), [report/10941 "VAT Balancing Report"](../objects/report/10941-is.md) (own), [report/10913 "IRS notification"](../objects/report/10913-is.md) (own), [table/10903 "IS Core App Setup"](../objects/table/10903-is.md) (own).

[All 40 objects of Finance in the diff](?ns=Finance#country-diff)

### Sales

Sales & Receivables Setup gets Electronic Invoicing and Credit Memo Nos. Paym. Disc. fields. Cust. Ledger Entry gets a Credit Memo Document field.

Why: Learn says that when invoices are printed several times, a government report confirming ERP compliance must be sent. The IRS Notification report prints the required statements.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [report/10913 "IRS notification"](../objects/report/10913-is.md) (own).

[All 4 objects of Sales in the diff](?ns=Sales#country-diff)

### FixedAssets

Depreciation Book gets two fields: Revalue in Year Purch. and Residual Value %.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5611 "Depreciation Book"](../objects/table/5611.md).

[All 3 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

The LOCAL and LOCAL READ permission sets are replaced to cover the Icelandic objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

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

- BC30: 13 objects differ from W1 (6 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
