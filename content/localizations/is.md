---
id: localization/is
type: localization
title: Iceland (IS)
summary: Iceland (IS) localization for Business Central 29 delivered as the IS Core app. It covers IRS number mapping of the chart of accounts, VAT reconciliation and balancing reports, document retention rules for deleting posted invoices and credit memos, and electronic invoicing notification. It answers questions about Icelandic tax authority reporting and local setup.
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: a107fbbe75e19c3f0018871ee2f9f578f9b9bdbc9caf5f750b2a6e75d55a7c83
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-is
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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

> Iceland (IS) localization for Business Central 29 delivered as the IS Core app. It covers IRS number mapping of the chart of accounts, VAT reconciliation and balancing reports, document retention rules for deleting posted invoices and credit memos, and electronic invoicing notification. It answers questions about Icelandic tax authority reporting and local setup.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/iceland.md) · narrative **unreviewed** (machine-written)

## Overview

The Iceland layer centres on IS IRS mapping. New tables (IS IRS Groups, IS IRS Numbers, IS IRS Types, with legacy IRS Numbers, IRS Groups and IRS Types tables) and pages let users define tax authority codes. The field "IRS Number" on G/L Account maps posting accounts to them. Learn describes this as the basis for compliant data files and reports for the tax authorities.

Local reports include IS VAT Reconciliation A, IS VAT Balancing Report, IS IRS Details, IS Trial Balance - IRS Number and IS IRS notification. Report extensions adjust purchase order, purchase invoice, purchase credit memo and blanket sales order layouts. Sales & Receivables Setup gains "Electronic Invoicing" and "Credit Memo Nos. Paym. Disc." fields, and Learn explains that the IRS Notification report prints the legal statement needed when invoices are printed several times.

The localization is packaged as the IS Core app, with table "IS Core App Setup", codeunits "IS Core Install", "IS Core Upgrade" and "Enable IS Core App", and permission sets. Codeunit "IS Docs Retention Period" with an enum extension supports document deletion rules. Learn documents the migration to the app model from version 24.0 as a one-time manual data migration. Depreciation Book gains "Residual Value %" and "Revalue in Year Purch.".

## Key points

- IRS numbers, groups and types map G/L accounts to tax authority codes via the "IRS Number" field on G/L Account
- Reports: IS VAT Reconciliation A, IS VAT Balancing Report, IS IRS Details, IS Trial Balance - IRS Number
- Electronic Invoicing option in Sales & Receivables Setup and the IS IRS notification report for single-copy invoice legal statements
- Document retention: posted invoices and credit memos may be deleted only when older than seven years at fiscal year start (v24.0 onward with the new localization enabled)
- Depreciation Book gains Residual Value % and Revalue in Year Purch. fields
- IS Core app with install, upgrade and enable codeunits; migration from the old localization is a one-time manual process
- Role center, vendor, customer, contact and company info pages are extended, and IS permission sets with extensions for standard sets are provided

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

Adds the IRS mapping tables and pages, the "IRS Number" field on G/L Account, and local VAT and IRS reports. It also holds the IS Core app setup, install and upgrade codeunits, the retention period codeunit, enums for VAT report periods and entries filters, role center extensions and permission sets.

Why: Learn explains that IRS numbers mapped to general ledger accounts produce compliant data files and reports for the tax authorities, and that posted documents can be deleted only after the seven-year retention period.

Objects: [table/14600 "IS IRS Groups"](../objects/table/14600-is.md) (own), [table/14601 "IS IRS Numbers"](../objects/table/14601-is.md) (own), [table/14602 "IS IRS Types"](../objects/table/14602-is.md) (own), [table/15 "G/L Account"](../objects/table/15.md), [report/14601 "IS VAT Reconciliation A"](../objects/report/14601-is.md) (own), [report/14600 "IS VAT Balancing Report"](../objects/report/14600-is.md) (own), [report/14603 "IS IRS Details"](../objects/report/14603-is.md) (own), [report/14605 "IS Trial Balance - IRS Number"](../objects/report/14605-is.md) (own).

[All 40 objects of Finance in the diff](?ns=Finance#country-diff)

### (no namespace)

Extends the G/L Account and Sales & Receivables Setup tables, posted purchase invoice and credit memo pages, and the Small Business Owner role center with Icelandic fields and actions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [tableextension/14602 "IS G/L Account"](../objects/tableextension/14602-is.md) (own), [tableextension/14603 "IS Sales & Receivables Setup"](../objects/tableextension/14603-is.md) (own), [pageextension/14609 "IS Posted Purchase Invoice"](../objects/pageextension/14609-is.md) (own), [pageextension/14604 "IS Posted Purch. Credit Memo"](../objects/pageextension/14604-is.md) (own), [pageextension/14607 "IS Small Business Owner RC"](../objects/pageextension/14607-is.md) (own).

[All 5 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Purchases

Extends the vendor card and adjusts the purchase order, purchase invoice, purchase credit memo and blanket sales order report layouts for Icelandic needs.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/14610 "IS Vendor Card"](../objects/pageextension/14610-is.md) (own), [reportextension/14600 "IS Order"](../objects/reportextension/14600-is.md) (own), [reportextension/14602 "IS Purchase Invoice"](../objects/reportextension/14602-is.md) (own), [reportextension/14601 "IS Purch Credit Memo"](../objects/reportextension/14601-is.md) (own), [reportextension/14603 "IS Blanket Sales Order"](../objects/reportextension/14603-is.md) (own).

[All 5 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds the fields "Electronic Invoicing" and "Credit Memo Nos. Paym. Disc." to Sales & Receivables Setup and "Credit Memo Document" to Cust. Ledger Entry. The setup and customer card pages are extended.

Why: Learn states that the Electronic Invoicing setting drives printing of the IRS Notification report with the required legal statements on invoices.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), [pageextension/14606 "IS Sales & Receivables Setup"](../objects/pageextension/14606-is.md) (own), [pageextension/14611 "IS Customer Card"](../objects/pageextension/14611-is.md) (own).

[All 4 objects of Sales in the diff](?ns=Sales#country-diff)

### FixedAssets

Adds "Residual Value %" and "Revalue in Year Purch." to the Depreciation Book table and shows them on the Depreciation Book Card.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5611 "Depreciation Book"](../objects/table/5611.md), [tableextension/14601 "IS Depreciation Book"](../objects/tableextension/14601-is.md) (own), [pageextension/14603 "IS Depreciation Book Card"](../objects/pageextension/14603-is.md) (own).

[All 3 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Changes the W1 LOCAL and LOCAL READ permission sets to cover the Icelandic objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Extends the Contact Card with Icelandic fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/14612 "IS Contact Card"](../objects/pageextension/14612-is.md) (own).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### Foundation

Extends the Company Information page with Icelandic fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

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
