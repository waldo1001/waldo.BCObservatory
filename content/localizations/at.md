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
  at: "2026-10-07T01:08:41.552Z"
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

Objects: [table/5005270 "Delivery Reminder Header"](../objects/table/5005270-at.md) (own), [table/5005271 "Delivery Reminder Line"](../objects/table/5005271-at.md) (own), [codeunit/5005271 "Create Delivery Reminder"](../objects/codeunit/5005271-at.md) (own), [codeunit/5005270 "Issue Delivery Reminder"](../objects/codeunit/5005270-at.md) (own), [page/5005270 "Delivery Reminder"](../objects/page/5005270-at.md) (own), [report/5005272 "Delivery Reminder - Test"](../objects/report/5005272-at.md) (own), [report/11507 "Vendor Payments List"](../objects/report/11507-at.md) (own), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 55 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Finance

Adds VAT statement reports for Austria, VIES declaration XML, a configurable data export, G/L reports and setup information. Changes W1 posting, exchange rate adjustment and VAT statement preview objects with new fields, procedures and events.

Why: Learn documents VAT Statement AT and VIES XML for tax authority submission, and the G/L setup report for data access and auditability requirements.

Objects: [report/11110 "VAT Statement AT"](../objects/report/11110-at.md) (own), [report/11108 "VAT - VIES Declaration XML"](../objects/report/11108-at.md) (own), [report/11514 "G/L Setup Information"](../objects/report/11514-at.md) (own), [codeunit/11000 "Data Export Management"](../objects/codeunit/11000-at.md) (own), [table/11002 "Data Export"](../objects/table/11002-at.md) (own), [codeunit/11110 "Update VAT-AT"](../objects/codeunit/11110-at.md) (own), [table/596 "Exch. Rate Adjmt. Parameters"](../objects/table/596.md), [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md).

[All 51 objects of Finance in the diff](?ns=Finance#country-diff)

### Inventory

Adds physical inventory order and recording tables, place of dispatcher and receiver setup, and reports such as Crossborder Services and Item ABC Analysis. Changes Inventory Setup, Item Statistics Buffer and Intrastat related tables.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5005350 "Phys. Inventory Order Header"](../objects/table/5005350-at.md) (own), [table/5005351 "Phys. Inventory Order Line"](../objects/table/5005351-at.md) (own), [table/313 "Inventory Setup"](../objects/table/313.md), [table/11000 "Place of Dispatcher"](../objects/table/11000-at.md) (own), [table/11001 "Place of Receiver"](../objects/table/11001-at.md) (own), [report/11111 "Crossborder Services"](../objects/report/11111-at.md) (own), [report/11503 "Item ABC Analysis"](../objects/report/11503-at.md) (own), [table/5821 "Item Statistics Buffer"](../objects/table/5821.md).

[All 26 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Foundation

Adds DACH report selections, source code setup for delivery reminders and many Company Information fields (tax office, authorization numbers, place of dispatcher and receiver). Adds helpers in Format Address and Document-Print.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/26100 "DACH Report Selections"](../objects/table/26100-at.md) (own), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md), [table/242 "Source Code Setup"](../objects/table/242.md), [enumextension/26101 "Report Selection Usage Del. Rem."](../objects/enumextension/26101-at.md) (own), [enumextension/26102 "Report Sel. Usage Purch. DACH"](../objects/enumextension/26102-at.md) (own).

[All 16 objects of Foundation in the diff](?ns=Foundation#country-diff)

### FixedAssets

Adds Austrian fixed asset list and book value reports, and fields for premium depreciation on Fixed Asset. Adds a procedure in FA General Report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/11100 "Fixed Assets - List AT"](../objects/report/11100-at.md) (own), [report/11011 "Fixed Asset - Book Value 03"](../objects/report/11011-at.md) (own), [table/5600 "Fixed Asset"](../objects/table/5600.md), [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md), [table/5611 "Depreciation Book"](../objects/table/5611.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md).

[All 6 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### (no namespace)

Holds the Intrastat item list report and the data export setup table. Upgrade and sandbox cleanup codeunits are plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/11001 "Intrastat - Item List"](../objects/report/11001-at.md) (own), [table/11009 "Data Export Setup"](../objects/table/11009-at.md) (own).

[All 5 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Security

Extends the LOCAL and LOCAL READ permission sets, including delivery reminder permissions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionsetextension/5005270 "DR LOCAL"](../objects/permissionsetextension/5005270-at.md) (own), [permissionsetextension/5005271 "DR LOCAL READ"](../objects/permissionsetextension/5005271-at.md) (own), [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 4 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Changes the Export Contact and Export Segment Contact XMLports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md), [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### Sales

Adds the Customer Total-Balance report and changes Sales Line Archive.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/11003 "Customer Total-Balance"](../objects/report/11003-at.md) (own), [table/5108 "Sales Line Archive"](../objects/table/5108.md).

[All 2 objects of Sales in the diff](?ns=Sales#country-diff)

### Bank

Adds a SEPA credit transfer APC export file codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11100 "SEPA CT APC-Export File"](../objects/codeunit/11100-at.md) (own).

[All 1 objects of Bank in the diff](?ns=Bank#country-diff)

### Manufacturing

Adds a DACH page extension for the Manufacturing Manager role center.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/11010 "Manufacturing Manager RC DACH"](../objects/pageextension/11010-at.md) (own).

[All 1 objects of Manufacturing in the diff](?ns=Manufacturing#country-diff)

### Microsoft

Adds a Certificate table.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/11014 "Certificate"](../objects/table/11014-at.md) (own).

[All 1 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Utilities

Adds the GeneralMgt codeunit with local helper functions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11501 "GeneralMgt"](../objects/codeunit/11501-at.md) (own).

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

125 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-at.md)
- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-at.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-at.md)
- [codeunit/11000 "Data Export Management"](../objects/codeunit/11000-at.md)
- [codeunit/11004 "Report Sel. Purch. Subscribers"](../objects/codeunit/11004-at.md)
- [codeunit/11100 "SEPA CT APC-Export File"](../objects/codeunit/11100-at.md)
- [codeunit/11110 "Update VAT-AT"](../objects/codeunit/11110-at.md)
- [codeunit/11501 "GeneralMgt"](../objects/codeunit/11501-at.md)
- [codeunit/104100 "Upg Local Functionality"](../objects/codeunit/104100-at.md)
- [codeunit/5005270 "Issue Delivery Reminder"](../objects/codeunit/5005270-at.md)
- [codeunit/5005271 "Create Delivery Reminder"](../objects/codeunit/5005271-at.md)
- [codeunit/5005272 "Deliv.-Rem. Ext. Text Transfer"](../objects/codeunit/5005272-at.md)
- [codeunit/5005273 "Iss. Delivery Remind. printed"](../objects/codeunit/5005273-at.md)
- [codeunit/5005274 "DR Data Class. Eval. Data"](../objects/codeunit/5005274-at.md)
- [codeunit/5005396 "Print Document Comfort"](../objects/codeunit/5005396-at.md)
- [codeunit/5005397 "Format Adress Comfort"](../objects/codeunit/5005397-at.md)
- [enum/11003 "Data Export File Encoding"](../objects/enum/11003-at.md)
- [enum/5005272 "Delivery Reminder Date Type"](../objects/enum/5005272-at.md)
- [enumextension/26101 "Report Selection Usage Del. Rem."](../objects/enumextension/26101-at.md)
- [enumextension/26102 "Report Sel. Usage Purch. DACH"](../objects/enumextension/26102-at.md)
- [page/11000 "Place of Dispatchers"](../objects/page/11000-at.md)
- [page/11001 "Place of Receivers"](../objects/page/11001-at.md)
- [page/11002 "Data Exports"](../objects/page/11002-at.md)
- [page/11003 "Data Export Record Definitions"](../objects/page/11003-at.md)
- [page/11004 "Data Export Record Source"](../objects/page/11004-at.md)
- [page/11007 "Data Export Table Relation"](../objects/page/11007-at.md)
- [page/11008 "Data Export Table Relation Sub"](../objects/page/11008-at.md)
- [page/11009 "Data Export Field List"](../objects/page/11009-at.md)
- [page/11014 "Data Export Record Types"](../objects/page/11014-at.md)
- [page/11026 "Data Export Table Keys"](../objects/page/11026-at.md)
- [page/11027 "Data Export Record Fields"](../objects/page/11027-at.md)
- [page/35516 "Cash Receipt Journal FactBox"](../objects/page/35516-at.md)
- [page/35517 "Payment Journal FactBox"](../objects/page/35517-at.md)
- [page/5005270 "Delivery Reminder"](../objects/page/5005270-at.md)
- [page/5005271 "Delivery Reminder Sub."](../objects/page/5005271-at.md)
- [page/5005272 "Delivery Reminder List"](../objects/page/5005272-at.md)
- [page/5005273 "Issued Delivery Reminder"](../objects/page/5005273-at.md)
- [page/5005274 "Issued Delivery Reminder Sub"](../objects/page/5005274-at.md)
- [page/5005275 "Issued Delivery Reminders List"](../objects/page/5005275-at.md)
- [page/5005276 "Deliv. Reminder Ledger Entries"](../objects/page/5005276-at.md)
- [page/5005277 "Delivery Reminder Comment Line"](../objects/page/5005277-at.md)
- [page/5005278 "Deliv. Rem. Comment Line List"](../objects/page/5005278-at.md)
- [page/5005279 "Delivery Reminder Terms"](../objects/page/5005279-at.md)
- [page/5005280 "Delivery Reminder Terms List"](../objects/page/5005280-at.md)
- [page/5005281 "Delivery Reminder Levels"](../objects/page/5005281-at.md)
- [page/5005283 "Delivery Reminder Text"](../objects/page/5005283-at.md)
- [pageextension/11010 "Manufacturing Manager RC DACH"](../objects/pageextension/11010-at.md)
- [pageextension/5005270 "SourceCodeSetupDACH"](../objects/pageextension/5005270-at.md)
- [pageextension/5005271 "DRVendorTemplCard"](../objects/pageextension/5005271-at.md)
- [pageextension/5005272 "DRPurchSetup"](../objects/pageextension/5005272-at.md)
- [pageextension/5005273 "DRExtendedText"](../objects/pageextension/5005273-at.md)
- [pageextension/5005274 "DRPurchMgrRoleCenter"](../objects/pageextension/5005274-at.md)
- [pageextension/5005275 "DRPurchAgentRoleCenter"](../objects/pageextension/5005275-at.md)
- [pageextension/5005276 "DRPurchaseOrder"](../objects/pageextension/5005276-at.md)
- [pageextension/5005277 "DRVendorCard"](../objects/pageextension/5005277-at.md)
- [permissionsetextension/5005270 "DR LOCAL"](../objects/permissionsetextension/5005270-at.md)
- [permissionsetextension/5005271 "DR LOCAL READ"](../objects/permissionsetextension/5005271-at.md)
- [report/11001 "Intrastat - Item List"](../objects/report/11001-at.md)
- [report/11002 "G/L Total-Balance"](../objects/report/11002-at.md)
- [report/11003 "Customer Total-Balance"](../objects/report/11003-at.md)
- [report/11004 "Vendor Total-Balance"](../objects/report/11004-at.md)
- [report/11005 "VAT Statement Germany"](../objects/report/11005-at.md)
- [report/11006 "Vendor Detailed Aging"](../objects/report/11006-at.md)
- [report/11007 "VAT-Vies Declaration Tax - DE"](../objects/report/11007-at.md)
- [report/11010 "VAT Statement Schedule"](../objects/report/11010-at.md)
- [report/11011 "Fixed Asset - Book Value 03"](../objects/report/11011-at.md)
- [report/11015 "Export Business Data"](../objects/report/11015-at.md)
- [report/11100 "Fixed Assets - List AT"](../objects/report/11100-at.md)
- [report/11108 "VAT - VIES Declaration XML"](../objects/report/11108-at.md)
- [report/11109 "Paragraph 131 Export"](../objects/report/11109-at.md)
- [report/11110 "VAT Statement AT"](../objects/report/11110-at.md)
- [report/11111 "Crossborder Services"](../objects/report/11111-at.md)
- [report/11112 "Update VAT Statement Template"](../objects/report/11112-at.md)
- [report/11500 "Provisional Trial Balance"](../objects/report/11500-at.md)
- [report/11503 "Item ABC Analysis"](../objects/report/11503-at.md)
- [report/11507 "Vendor Payments List"](../objects/report/11507-at.md)
- [report/11514 "G/L Setup Information"](../objects/report/11514-at.md)
- [report/11517 "Inventory Value (Help Report)"](../objects/report/11517-at.md)
- [report/5005272 "Delivery Reminder - Test"](../objects/report/5005272-at.md)
- [report/5005273 "Issued Delivery Reminder"](../objects/report/5005273-at.md)
- [report/5005340 "Create Delivery Reminder"](../objects/report/5005340-at.md)
- [report/5005341 "Issue Delivery Reminder"](../objects/report/5005341-at.md)
- [table/11000 "Place of Dispatcher"](../objects/table/11000-at.md)
- [table/11001 "Place of Receiver"](../objects/table/11001-at.md)
- [table/11002 "Data Export"](../objects/table/11002-at.md)
- [table/11003 "Data Export Record Definition"](../objects/table/11003-at.md)
- [table/11004 "Data Export Record Source"](../objects/table/11004-at.md)
- [table/11005 "Data Export Record Field"](../objects/table/11005-at.md)
- [table/11006 "Data Export Table Relation"](../objects/table/11006-at.md)
- [table/11007 "Data Export Record Type"](../objects/table/11007-at.md)
- [table/11008 "Data Export Buffer"](../objects/table/11008-at.md)
- [table/11009 "Data Export Setup"](../objects/table/11009-at.md)
- [table/11010 "Data Exp. Primary Key Buffer"](../objects/table/11010-at.md)
- [table/11014 "Certificate"](../objects/table/11014-at.md)
- [table/11015 "Key Buffer"](../objects/table/11015-at.md)
- [table/11016 "Number Series Buffer"](../objects/table/11016-at.md)
- [table/26100 "DACH Report Selections"](../objects/table/26100-at.md)
- [table/5005270 "Delivery Reminder Header"](../objects/table/5005270-at.md)
- [table/5005271 "Delivery Reminder Line"](../objects/table/5005271-at.md)
- [table/5005272 "Issued Deliv. Reminder Header"](../objects/table/5005272-at.md)
- [table/5005273 "Issued Deliv. Reminder Line"](../objects/table/5005273-at.md)
- [table/5005274 "Delivery Reminder Ledger Entry"](../objects/table/5005274-at.md)
- [table/5005275 "Delivery Reminder Comment Line"](../objects/table/5005275-at.md)
- [table/5005276 "Delivery Reminder Term"](../objects/table/5005276-at.md)
- [table/5005277 "Delivery Reminder Level"](../objects/table/5005277-at.md)
- [table/5005278 "Delivery Reminder Text"](../objects/table/5005278-at.md)
- [table/5005350 "Phys. Inventory Order Header"](../objects/table/5005350-at.md)
- [table/5005351 "Phys. Inventory Order Line"](../objects/table/5005351-at.md)
- [table/5005352 "Phys. Invt. Recording Header"](../objects/table/5005352-at.md)
- [table/5005353 "Phys. Invt. Recording Line"](../objects/table/5005353-at.md)
- [table/5005354 "Post. Phys. Invt. Order Header"](../objects/table/5005354-at.md)
- [table/5005355 "Posted Phys. Invt. Order Line"](../objects/table/5005355-at.md)
- [table/5005356 "Posted Phys. Invt. Rec. Header"](../objects/table/5005356-at.md)
- [table/5005357 "Posted Phys. Invt. Rec. Line"](../objects/table/5005357-at.md)
- [table/5005358 "Phys. Inventory Comment Line"](../objects/table/5005358-at.md)
- [table/5005359 "Posted Phys. Invt. Track. Line"](../objects/table/5005359-at.md)
- [table/5005360 "Phys. Invt. Tracking Buffer"](../objects/table/5005360-at.md)
- [table/5005361 "Expect. Phys. Inv. Track. Line"](../objects/table/5005361-at.md)
- [table/5005362 "Post. Exp. Ph. In. Track. Line"](../objects/table/5005362-at.md)
- [table/5005363 "Phys. Invt. Diff. List Buffer"](../objects/table/5005363-at.md)
- [tableextension/5005270 "SourceCodeSetupDACH"](../objects/tableextension/5005270-at.md)
- [tableextension/5005280 "DRVendor"](../objects/tableextension/5005280-at.md)
- [tableextension/5005281 "DRVendorTempl"](../objects/tableextension/5005281-at.md)
- [tableextension/5005282 "DRPurchSetup"](../objects/tableextension/5005282-at.md)
- [tableextension/5005283 "DRExtendedTextHeader"](../objects/tableextension/5005283-at.md)

## Other versions

- BC30: 172 objects differ from W1 (58 fields, 3 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
