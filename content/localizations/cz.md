---
id: localization/cz
type: localization
title: Czech (CZ)
summary: "Czech (CZ) localization of Business Central 29. The code layer is small: a few fields on W1 tables for advance letters, non-deductible VAT and payment posting groups, plus upgrade plumbing. Learn documents the wider Czech functionality: advance payments, cash desk, banking documents, VAT date, fixed assets, Intrastat and more."
tier: official
language: en
tags:
  - localization
  - cz
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
  input_hash: 580b6bc5766250d47d5b62f136f3679d08f187a54ed58fcf3f71580ceb66de80
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-cz
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/104051
    - object/table/263
    - object/table/325
    - object/table/372
    - object/table/383
    - object/table/1250
    - object/table/1296
    - object/table/7604
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/czech-republic
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: CZ
version: "29"
w1_version: "29"
added_objects: 2
replaced_objects: 8
removed_objects: 0
added_fields: 6
added_events: 0
learn_folder: LocalFunctionality/Czech
---

# Czech (CZ)

> Czech (CZ) localization of Business Central 29. The code layer is small: a few fields on W1 tables for advance letters, non-deductible VAT and payment posting groups, plus upgrade plumbing. Learn documents the wider Czech functionality: advance payments, cash desk, banking documents, VAT date, fixed assets, Intrastat and more.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/czech-republic.md) · narrative **unreviewed** (machine-written)

## Overview

In this code layer the Czech version changes ten objects. Seven W1 tables are replaced or extended and two codeunits are added for upgrade. Six fields are added in total. No events or procedures are added. The extensions touch bank reconciliation, VAT posting setup, payment buffering, Intrastat, base calendar usage and the VAT date upgrade.

The fields reflect advance payments and VAT handling. Bank Statement Matching Buffer gets Letter Type and Letter No. Posted Payment Recon. Line gets Advance Letter Link Code. VAT Posting Setup gets Non-Ded. Sales VAT Account, and Detailed CV Ledg. Entry Buffer gets Non-Deductible VAT Amount ACY. Payment Buffer gets Vendor Posting Group.

Most Czech functionality is documented on Microsoft Learn and not in this layer. That covers advance letters for sales and purchases, cash desk, banking documents, compensation, VAT date, reverse charge, unreliable payer, fixed asset tax depreciation, Intrastat, statutory statements and accounting output reports. Several of these pages describe the Czech extensions (Core Localization Pack, Advance Payments, Cash Desk, Banking Documents) rather than base application code.

## Key points

- Advance payment links: Letter Type and Letter No. on Bank Statement Matching Buffer, and Advance Letter Link Code on Posted Payment Recon. Line.
- Non-deductible VAT: Non-Ded. Sales VAT Account on VAT Posting Setup and Non-Deductible VAT Amount ACY on Detailed CV Ledg. Entry Buffer.
- Vendor Posting Group on Payment Buffer supports payments with differing posting groups.
- Intrastat Jnl. Line is changed for Czech Intrastat; Learn describes the engine setup and CSV export for INSTATDESK and INSTATONLINE.
- Update VAT Date Field upgrade codeunit supports the Czech VAT date feature, which separates VAT date from posting date.
- Learn covers advance letters, cash desk, compensation, fixed asset tax depreciation, corrections posting (Red Storno) and statutory statements.
- No new events or procedures are added in this layer, so extensibility rests on the added fields.

Narrative written by Sonnet from the code diff and 60 Learn page summaries. In numbers: Czech (CZ) localization of Business Central in BC29: 2 objects of its own, 8 W1 objects changed (6 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [(no namespace)](#no-namespace) | 0 | 2 | 0 |
| [Bank](#bank) | 2 | 0 | 3 |
| [Finance](#finance) | 2 | 0 | 2 |
| [Foundation](#foundation) | 1 | 0 | 0 |
| [Inventory](#inventory) | 1 | 0 | 0 |
| [Purchases](#purchases) | 1 | 0 | 1 |
| [Upgrade](#upgrade) | 1 | 0 | 0 |

### (no namespace)

Adds upgrade plumbing: Upgrade - Local App and Local Upgrade Tag Definitions, which register upgrade tags for the Czech layer.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/104150 "Upgrade - Local App" (own), codeunit/11790 "Local Upgrade Tag Definitions" (own).

[All 2 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Bank

Adds advance letter reference fields to bank reconciliation tables. Bank Statement Matching Buffer gets Letter Type and Letter No., and Posted Payment Recon. Line gets Advance Letter Link Code.

Why: Learn describes advance payments and invoices that are paid before delivery, and linking payments to advance letters.

Objects: [table/1250 "Bank Statement Matching Buffer"](../objects/table/1250.md), [table/1296 "Posted Payment Recon. Line"](../objects/table/1296.md).

[All 2 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds non-deductible VAT fields. VAT Posting Setup gets Non-Ded. Sales VAT Account and Detailed CV Ledg. Entry Buffer gets Non-Deductible VAT Amount ACY.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/325 "VAT Posting Setup"](../objects/table/325.md), [table/383 "Detailed CV Ledg. Entry Buffer"](../objects/table/383.md).

[All 2 objects of Finance in the diff](?ns=Finance#country-diff)

### Foundation

Changes the Where Used Base Calendar table without adding fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/7604 "Where Used Base Calendar"](../objects/table/7604.md).

[All 1 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Inventory

Changes the Intrastat Jnl. Line table without adding fields, supporting the Czech Intrastat functionality.

Why: Learn says the Czech Intrastat feature adds engine setup, supplementary units, mandatory field configuration and CSV export for INSTATDESK and INSTATONLINE.

Objects: [table/263 "Intrastat Jnl. Line"](../objects/table/263.md).

[All 1 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Purchases

Adds Vendor Posting Group to Payment Buffer.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/372 "Payment Buffer"](../objects/table/372.md).

[All 1 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Upgrade

Changes the Update VAT Date Field upgrade codeunit for the Czech VAT date.

Why: Learn says the Czech VAT date is separate from the posting date for VAT reporting.

Objects: [codeunit/104051 "Update VAT Date Field"](../objects/codeunit/104051.md).

[All 1 objects of Upgrade in the diff](?ns=Upgrade#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/104051 "Update VAT Date Field"](../objects/codeunit/104051.md) | body changes only |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | 3 fields changed |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +1 fields |
| [table/372 "Payment Buffer"](../objects/table/372.md) | +1 fields |
| [table/383 "Detailed CV Ledg. Entry Buffer"](../objects/table/383.md) | +1 fields, 2 fields changed |
| [table/1250 "Bank Statement Matching Buffer"](../objects/table/1250.md) | +2 fields |
| [table/1296 "Posted Payment Recon. Line"](../objects/table/1296.md) | +1 fields |
| [table/7604 "Where Used Base Calendar"](../objects/table/7604.md) | 1 fields changed |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/11790 "Local Upgrade Tag Definitions"
- codeunit/104150 "Upgrade - Local App"

## Other versions

- BC30: 10 objects differ from W1 (6 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
