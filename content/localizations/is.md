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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 355a17d62cbebfd64c947a53bff3beeeebc0706a979e21ad990f702a0c2d47a2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-is
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
added_objects: 7
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

Narrative written by Sonnet from the code diff and 8 Learn page summaries. In numbers: Iceland (IS) localization of Business Central in BC29: 7 objects of its own, 6 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 1 | 7 | 1 |
| [Sales](#sales) | 2 | 0 | 3 |
| [Security](#security) | 2 | 0 | 0 |
| [FixedAssets](#fixedassets) | 1 | 0 | 2 |

### Finance

Adds tables "IRS Numbers", "IRS Groups" and "IRS Types" and an IRS Number field on G/L Account for mapping accounts to tax authority codes. Adds the reports IRS notification, VAT Reconciliation A and VAT Balancing Report, and the table "IS Core App Setup" for the core app migration.

Why: Learn says the IRS mapping is needed to generate compliant data files for the tax authorities. The core app setup supports migration to the W1 model from version 24.0.

Objects: table/10900 "IRS Numbers" (own), table/10901 "IRS Groups" (own), table/10902 "IRS Types" (own), [table/15 "G/L Account"](../objects/table/15.md), report/10940 "VAT Reconciliation A" (own), report/10941 "VAT Balancing Report" (own), report/10913 "IRS notification" (own), table/10903 "IS Core App Setup" (own).

[All 8 objects of Finance in the diff](?ns=Finance#country-diff)

### Sales

Sales & Receivables Setup gets Electronic Invoicing and Credit Memo Nos. Paym. Disc. fields. Cust. Ledger Entry gets a Credit Memo Document field.

Why: Learn says that when invoices are printed several times, a government report confirming ERP compliance must be sent. The IRS Notification report prints the required statements.

Objects: [table/311 "Sales & Receivables Setup"](../objects/table/311.md), [table/21 "Cust. Ledger Entry"](../objects/table/21.md), report/10913 "IRS notification" (own).

[All 2 objects of Sales in the diff](?ns=Sales#country-diff)

### Security

The LOCAL and LOCAL READ permission sets are replaced to cover the Icelandic objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### FixedAssets

Depreciation Book gets two fields: Revalue in Year Purch. and Residual Value %.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5611 "Depreciation Book"](../objects/table/5611.md).

[All 1 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

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

Country-only objects have no object page yet (their ids repeat across countries).

- report/10913 "IRS notification"
- report/10940 "VAT Reconciliation A"
- report/10941 "VAT Balancing Report"
- table/10900 "IRS Numbers"
- table/10901 "IRS Groups"
- table/10902 "IRS Types"
- table/10903 "IS Core App Setup"

## Other versions

- BC30: 13 objects differ from W1 (6 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
