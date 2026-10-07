---
id: localization/at
type: localization
title: Austria (AT)
summary: Austria (AT) localization of Business Central 29. It covers vendor delivery reminders, VAT statement and VIES reporting, the vendor payments list, G/L setup information, a data export, physical inventory orders and fixed asset reports. Use it to see what Austria adds to W1 and where Learn documents it.
tier: official
language: en
tags:
  - localization
  - at
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
  input_hash: b6d62f2e2cca38f9321e33ef2b01ef6bc078af0983f282cd542bad8fe2d7a060
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-at
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/2
    - object/codeunit/13
    - object/codeunit/229
    - object/codeunit/365
    - object/codeunit/597
    - object/codeunit/1901
    - object/codeunit/5626
    - object/codeunit/104000
    - object/page/344
    - object/page/471
    - object/page/475
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/12
    - object/report/596
    - object/table/15
    - object/table/23
    - object/table/38
    - object/table/39
    - object/table/79
    - object/table/81
    - object/table/98
    - object/table/122
    - object/table/124
    - object/table/242
    - object/table/254
    - object/table/257
    - object/table/260
    - object/table/263
    - object/table/285
    - object/table/312
    - object/table/313
    - object/table/324
    - object/table/325
    - object/table/596
    - object/table/743
    - object/table/746
    - object/table/1383
    - object/table/5108
    - object/table/5109
    - object/table/5110
    - object/table/5600
    - object/table/5611
    - object/table/5612
    - object/table/5821
    - object/xmlport/5050
    - object/xmlport/5051
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/austria
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: AT
version: "29"
w1_version: "29"
added_objects: 125
replaced_objects: 47
removed_objects: 0
added_fields: 58
added_events: 3
learn_folder: LocalFunctionality/Austria
---

# Austria (AT)

> Austria (AT) localization of Business Central 29. It covers vendor delivery reminders, VAT statement and VIES reporting, the vendor payments list, G/L setup information, a data export, physical inventory orders and fixed asset reports. Use it to see what Austria adds to W1 and where Learn documents it.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/austria.md) · narrative **unreviewed** (machine-written)

## Overview

The Austrian layer is shared with the DACH region, so many objects carry German or Swiss names (for example "VAT Statement Germany" and "Report Sel. Usage Purch. DACH"). The largest own feature is the delivery reminder process for vendors. It has header, line, issued and ledger entry tables, terms, levels and text setup, create and issue codeunits, test and issued reports, and page extensions on the vendor, purchase setup, purchase order and role centers. Learn documents setup, generation, manual creation, issuing and test reports.

VAT reporting is the second main area. Report 11110 "VAT Statement AT" and report 11108 "VAT - VIES Declaration XML" support the VAT statement and VIES declaration, with FDF and XML export and Finanz Online integration per Learn. W1 tables get fields such as Registration No. on vendor and purchase documents, tax office and authorization fields on Company Information, and VAT advance notification fields on General Ledger Setup and VAT Statement Name. A configurable data export (tables 11002 to 11010) and report 11514 "G/L Setup Information" support data access and auditability requirements.

Other additions are physical inventory order tables, place of dispatcher and receiver setup, fixed asset reports and depreciation fields, valuation methods in exchange rate adjustment, and a SEPA credit transfer export codeunit. W1 extensibility changes are small: 3 events and 25 added procedures.

## Key points

- Delivery reminders for vendors: header, line, issued, ledger entry, terms, levels and text tables, with create and issue codeunits and test reports.
- VAT reporting: report 11110 VAT Statement AT and report 11108 VAT - VIES Declaration XML, with FDF and XML export per Learn.
- Vendor Payments List (report 11507) prints by vendor or chronologically, with foreign currency and posting information layouts.
- G/L Setup Information report 11514 lets users review master data, posting groups, VAT setup and number series.
- Configurable data export with its own tables, pages and codeunit 11000 "Data Export Management".
- Physical inventory orders and recordings as own tables 5005350 to 5005363, with setup number series on Inventory Setup.
- Company Information gains tax office, authorization number, place of dispatcher and receiver fields.
- Exchange rate adjustment gains a valuation method and period end date, plus fixed asset fields for premium depreciation.

Narrative written by Sonnet from the code diff and 13 Learn page summaries. In numbers: Austria (AT) localization of Business Central in BC29: 125 objects of its own, 47 W1 objects changed (58 fields and 3 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Purchases](#purchases) | 9 | 46 | 11 |
| [Finance](#finance) | 16 | 35 | 12 |
| [Inventory](#inventory) | 5 | 21 | 5 |
| [Foundation](#foundation) | 7 | 9 | 27 |
| [FixedAssets](#fixedassets) | 4 | 2 | 3 |
| [(no namespace)](#no-namespace) | 0 | 5 | 0 |
| [Security](#security) | 2 | 2 | 0 |
| [CRM](#crm) | 2 | 0 | 0 |
| [Sales](#sales) | 1 | 1 | 0 |
| [Bank](#bank) | 0 | 1 | 0 |
| [Manufacturing](#manufacturing) | 0 | 1 | 0 |
| [Microsoft](#microsoft) | 0 | 1 | 0 |
| Upgrade | 1 | 0 | 0 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Purchases

Adds the full delivery reminder process for vendors: tables, create and issue codeunits, pages, test and issued reports, and page extensions on vendor, purchase setup, purchase order and role centers. Also adds Registration No. on vendor templates, archiving options on Purchases & Payables Setup, and reports such as Vendor Payments List and Vendor Total-Balance.

Why: Learn describes delivery reminders as a way to track and notify vendors about overdue deliveries, and documents the Vendor Payments List report.

Objects: table/5005270 "Delivery Reminder Header" (own), table/5005271 "Delivery Reminder Line" (own), codeunit/5005271 "Create Delivery Reminder" (own), codeunit/5005270 "Issue Delivery Reminder" (own), page/5005270 "Delivery Reminder" (own), report/5005272 "Delivery Reminder - Test" (own), report/11507 "Vendor Payments List" (own), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 55 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Finance

Adds VAT statement reports for Austria, VIES declaration XML, a configurable data export, G/L reports and setup information. Changes W1 posting, exchange rate adjustment and VAT statement preview objects with new fields, procedures and events.

Why: Learn documents VAT Statement AT and VIES XML for tax authority submission, and the G/L setup report for data access and auditability requirements.

Objects: report/11110 "VAT Statement AT" (own), report/11108 "VAT - VIES Declaration XML" (own), report/11514 "G/L Setup Information" (own), codeunit/11000 "Data Export Management" (own), table/11002 "Data Export" (own), codeunit/11110 "Update VAT-AT" (own), [table/596 "Exch. Rate Adjmt. Parameters"](../objects/table/596.md), [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md).

[All 51 objects of Finance in the diff](?ns=Finance#country-diff)

### Inventory

Adds physical inventory order and recording tables, place of dispatcher and receiver setup, and reports such as Crossborder Services and Item ABC Analysis. Changes Inventory Setup, Item Statistics Buffer and Intrastat related tables.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/5005350 "Phys. Inventory Order Header" (own), table/5005351 "Phys. Inventory Order Line" (own), [table/313 "Inventory Setup"](../objects/table/313.md), table/11000 "Place of Dispatcher" (own), table/11001 "Place of Receiver" (own), report/11111 "Crossborder Services" (own), report/11503 "Item ABC Analysis" (own), [table/5821 "Item Statistics Buffer"](../objects/table/5821.md).

[All 26 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Foundation

Adds DACH report selections, source code setup for delivery reminders and many Company Information fields (tax office, authorization numbers, place of dispatcher and receiver). Adds helpers in Format Address and Document-Print.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), table/26100 "DACH Report Selections" (own), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md), [table/242 "Source Code Setup"](../objects/table/242.md), enumextension/26101 "Report Selection Usage Del. Rem." (own), enumextension/26102 "Report Sel. Usage Purch. DACH" (own).

[All 16 objects of Foundation in the diff](?ns=Foundation#country-diff)

### FixedAssets

Adds Austrian fixed asset list and book value reports, and fields for premium depreciation on Fixed Asset. Adds a procedure in FA General Report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: report/11100 "Fixed Assets - List AT" (own), report/11011 "Fixed Asset - Book Value 03" (own), [table/5600 "Fixed Asset"](../objects/table/5600.md), [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md), [table/5611 "Depreciation Book"](../objects/table/5611.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md).

[All 6 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### (no namespace)

Holds the Intrastat item list report and the data export setup table. Upgrade and sandbox cleanup codeunits are plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: report/11001 "Intrastat - Item List" (own), table/11009 "Data Export Setup" (own).

[All 5 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Security

Extends the LOCAL and LOCAL READ permission sets, including delivery reminder permissions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: permissionsetextension/5005270 "DR LOCAL" (own), permissionsetextension/5005271 "DR LOCAL READ" (own), [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 4 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Changes the Export Contact and Export Segment Contact XMLports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md), [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### Sales

Adds the Customer Total-Balance report and changes Sales Line Archive.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: report/11003 "Customer Total-Balance" (own), [table/5108 "Sales Line Archive"](../objects/table/5108.md).

[All 2 objects of Sales in the diff](?ns=Sales#country-diff)

### Bank

Adds a SEPA credit transfer APC export file codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/11100 "SEPA CT APC-Export File" (own).

[All 1 objects of Bank in the diff](?ns=Bank#country-diff)

### Manufacturing

Adds a DACH page extension for the Manufacturing Manager role center.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: pageextension/11010 "Manufacturing Manager RC DACH" (own).

[All 1 objects of Manufacturing in the diff](?ns=Manufacturing#country-diff)

### Microsoft

Adds a Certificate table.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/11014 "Certificate" (own).

[All 1 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Utilities

Adds the GeneralMgt codeunit with local helper functions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/11501 "GeneralMgt" (own).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/2 "Company-Initialize"](../objects/codeunit/2.md) | +2 procedures |
| [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md) | +1 events, +5 procedures |
| [codeunit/229 "Document-Print"](../objects/codeunit/229.md) | +2 procedures |
| [codeunit/365 "Format Address"](../objects/codeunit/365.md) | +2 procedures |
| [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md) | +5 procedures |
| [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md) | +1 procedures |
| [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md) | +1 procedures |
| [codeunit/104000 "Upgrade - BaseApp"](../objects/codeunit/104000.md) | 1 properties |
| [page/344 "Navigate"](../objects/page/344.md) | +1 events |
| [page/471 "VAT Product Posting Groups"](../objects/page/471.md) | +1 procedures |
| [page/475 "VAT Statement Preview Line"](../objects/page/475.md) | +1 events, +2 procedures, 1 properties |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/12 "VAT Statement"](../objects/report/12.md) | 1 properties |
| [report/596 "Exch. Rate Adjustment"](../objects/report/596.md) | +2 procedures |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +1 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +1 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +2 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +26 fields, 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +1 procedures |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +2 fields, 2 fields changed |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +1 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +1 fields |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +1 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +1 fields |
| [table/257 "VAT Statement Name"](../objects/table/257.md) | +1 fields |
| [table/260 "Tariff Number"](../objects/table/260.md) | 1 fields changed |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | 4 fields changed |
| [table/285 "Transaction Specification"](../objects/table/285.md) | 1 fields changed |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +3 fields |
| [table/313 "Inventory Setup"](../objects/table/313.md) | +2 fields |
| [table/324 "VAT Product Posting Group"](../objects/table/324.md) | +1 procedures |
| [table/325 "VAT Posting Setup"](../objects/table/325.md) | +1 fields, 1 fields changed |
| [table/596 "Exch. Rate Adjmt. Parameters"](../objects/table/596.md) | +3 fields |
| [table/743 "VAT Report Setup"](../objects/table/743.md) | +3 fields |
| [table/746 "VAT Reports Configuration"](../objects/table/746.md) | 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/5108 "Sales Line Archive"](../objects/table/5108.md) | body changes only |
| [table/5109 "Purchase Header Archive"](../objects/table/5109.md) | +1 fields |
| [table/5110 "Purchase Line Archive"](../objects/table/5110.md) | body changes only |
| [table/5600 "Fixed Asset"](../objects/table/5600.md) | +3 fields |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | 1 fields changed |
| [table/5612 "FA Depreciation Book"](../objects/table/5612.md) | 1 properties |
| [table/5821 "Item Statistics Buffer"](../objects/table/5821.md) | +3 fields |
| [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md) | 1 properties |
| [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md) | 1 properties |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/355 "Local Navigate Handler"
- codeunit/1883 "Sandbox Cleanup local"
- codeunit/9997 "Upgrade Tag Def - Country"
- codeunit/11000 "Data Export Management"
- codeunit/11004 "Report Sel. Purch. Subscribers"
- codeunit/11100 "SEPA CT APC-Export File"
- codeunit/11110 "Update VAT-AT"
- codeunit/11501 "GeneralMgt"
- codeunit/104100 "Upg Local Functionality"
- codeunit/5005270 "Issue Delivery Reminder"
- codeunit/5005271 "Create Delivery Reminder"
- codeunit/5005272 "Deliv.-Rem. Ext. Text Transfer"
- codeunit/5005273 "Iss. Delivery Remind. printed"
- codeunit/5005274 "DR Data Class. Eval. Data"
- codeunit/5005396 "Print Document Comfort"
- codeunit/5005397 "Format Adress Comfort"
- enum/11003 "Data Export File Encoding"
- enum/5005272 "Delivery Reminder Date Type"
- enumextension/26101 "Report Selection Usage Del. Rem."
- enumextension/26102 "Report Sel. Usage Purch. DACH"
- page/11000 "Place of Dispatchers"
- page/11001 "Place of Receivers"
- page/11002 "Data Exports"
- page/11003 "Data Export Record Definitions"
- page/11004 "Data Export Record Source"
- page/11007 "Data Export Table Relation"
- page/11008 "Data Export Table Relation Sub"
- page/11009 "Data Export Field List"
- page/11014 "Data Export Record Types"
- page/11026 "Data Export Table Keys"
- page/11027 "Data Export Record Fields"
- page/35516 "Cash Receipt Journal FactBox"
- page/35517 "Payment Journal FactBox"
- page/5005270 "Delivery Reminder"
- page/5005271 "Delivery Reminder Sub."
- page/5005272 "Delivery Reminder List"
- page/5005273 "Issued Delivery Reminder"
- page/5005274 "Issued Delivery Reminder Sub"
- page/5005275 "Issued Delivery Reminders List"
- page/5005276 "Deliv. Reminder Ledger Entries"
- page/5005277 "Delivery Reminder Comment Line"
- page/5005278 "Deliv. Rem. Comment Line List"
- page/5005279 "Delivery Reminder Terms"
- page/5005280 "Delivery Reminder Terms List"
- page/5005281 "Delivery Reminder Levels"
- page/5005283 "Delivery Reminder Text"
- pageextension/11010 "Manufacturing Manager RC DACH"
- pageextension/5005270 "SourceCodeSetupDACH"
- pageextension/5005271 "DRVendorTemplCard"
- pageextension/5005272 "DRPurchSetup"
- pageextension/5005273 "DRExtendedText"
- pageextension/5005274 "DRPurchMgrRoleCenter"
- pageextension/5005275 "DRPurchAgentRoleCenter"
- pageextension/5005276 "DRPurchaseOrder"
- pageextension/5005277 "DRVendorCard"
- permissionsetextension/5005270 "DR LOCAL"
- permissionsetextension/5005271 "DR LOCAL READ"
- report/11001 "Intrastat - Item List"
- report/11002 "G/L Total-Balance"
- report/11003 "Customer Total-Balance"
- report/11004 "Vendor Total-Balance"
- report/11005 "VAT Statement Germany"
- report/11006 "Vendor Detailed Aging"
- report/11007 "VAT-Vies Declaration Tax - DE"
- report/11010 "VAT Statement Schedule"
- report/11011 "Fixed Asset - Book Value 03"
- report/11015 "Export Business Data"
- report/11100 "Fixed Assets - List AT"
- report/11108 "VAT - VIES Declaration XML"
- report/11109 "Paragraph 131 Export"
- report/11110 "VAT Statement AT"
- report/11111 "Crossborder Services"
- report/11112 "Update VAT Statement Template"
- report/11500 "Provisional Trial Balance"
- report/11503 "Item ABC Analysis"
- report/11507 "Vendor Payments List"
- report/11514 "G/L Setup Information"
- report/11517 "Inventory Value (Help Report)"
- report/5005272 "Delivery Reminder - Test"
- report/5005273 "Issued Delivery Reminder"
- report/5005340 "Create Delivery Reminder"
- report/5005341 "Issue Delivery Reminder"
- table/11000 "Place of Dispatcher"
- table/11001 "Place of Receiver"
- table/11002 "Data Export"
- table/11003 "Data Export Record Definition"
- table/11004 "Data Export Record Source"
- table/11005 "Data Export Record Field"
- table/11006 "Data Export Table Relation"
- table/11007 "Data Export Record Type"
- table/11008 "Data Export Buffer"
- table/11009 "Data Export Setup"
- table/11010 "Data Exp. Primary Key Buffer"
- table/11014 "Certificate"
- table/11015 "Key Buffer"
- table/11016 "Number Series Buffer"
- table/26100 "DACH Report Selections"
- table/5005270 "Delivery Reminder Header"
- table/5005271 "Delivery Reminder Line"
- table/5005272 "Issued Deliv. Reminder Header"
- table/5005273 "Issued Deliv. Reminder Line"
- table/5005274 "Delivery Reminder Ledger Entry"
- table/5005275 "Delivery Reminder Comment Line"
- table/5005276 "Delivery Reminder Term"
- table/5005277 "Delivery Reminder Level"
- table/5005278 "Delivery Reminder Text"
- table/5005350 "Phys. Inventory Order Header"
- table/5005351 "Phys. Inventory Order Line"
- table/5005352 "Phys. Invt. Recording Header"
- table/5005353 "Phys. Invt. Recording Line"
- table/5005354 "Post. Phys. Invt. Order Header"
- table/5005355 "Posted Phys. Invt. Order Line"
- table/5005356 "Posted Phys. Invt. Rec. Header"
- table/5005357 "Posted Phys. Invt. Rec. Line"
- table/5005358 "Phys. Inventory Comment Line"
- table/5005359 "Posted Phys. Invt. Track. Line"
- table/5005360 "Phys. Invt. Tracking Buffer"
- table/5005361 "Expect. Phys. Inv. Track. Line"
- table/5005362 "Post. Exp. Ph. In. Track. Line"
- table/5005363 "Phys. Invt. Diff. List Buffer"
- tableextension/5005270 "SourceCodeSetupDACH"
- tableextension/5005280 "DRVendor"
- tableextension/5005281 "DRVendorTempl"
- tableextension/5005282 "DRPurchSetup"
- tableextension/5005283 "DRExtendedTextHeader"

## Other versions

- BC30: 172 objects differ from W1 (58 fields, 3 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
