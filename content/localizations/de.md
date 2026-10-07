---
id: localization/de
type: localization
title: Germany (DE)
summary: Germany (DE) localization of Business Central 29. It covers ELMA5 VAT reports and VIES/EU sales lists, corrective VAT reports, GoBD/GDPdU digital audit export, purchase delivery reminders, physical inventory orders, BilMoG exchange rate valuation and local reports. It answers where German VAT, audit and reminder functions live in code and on Learn.
tier: official
language: en
tags:
  - localization
  - de
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
  input_hash: 127e4229dc49312b2e71055741324a6ba57cd80323de25ef1595471f069f3f7a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-de
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/13
    - object/codeunit/229
    - object/codeunit/365
    - object/codeunit/597
    - object/codeunit/737
    - object/codeunit/740
    - object/codeunit/741
    - object/codeunit/743
    - object/codeunit/744
    - object/codeunit/1901
    - object/codeunit/5626
    - object/page/321
    - object/page/323
    - object/page/344
    - object/page/471
    - object/page/475
    - object/page/740
    - object/page/741
    - object/page/744
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/12
    - object/report/88
    - object/report/596
    - object/report/741
    - object/report/742
    - object/report/5912
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
    - object/table/737
    - object/table/740
    - object/table/741
    - object/table/743
    - object/table/744
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
    - topic/business-central/business-functionality/local-functionality/germany
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: DE
version: "29"
w1_version: "29"
added_objects: 128
replaced_objects: 63
removed_objects: 1
added_fields: 92
added_events: 4
learn_folder: LocalFunctionality/Germany
---

# Germany (DE)

> Germany (DE) localization of Business Central 29. It covers ELMA5 VAT reports and VIES/EU sales lists, corrective VAT reports, GoBD/GDPdU digital audit export, purchase delivery reminders, physical inventory orders, BilMoG exchange rate valuation and local reports. It answers where German VAT, audit and reminder functions live in code and on Learn.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/germany.md) · narrative **unreviewed** (machine-written)

## Overview

The German layer extends the W1 VAT report framework (tables 740, 741, 743, codeunits 737 to 744, report 741) with ELMA5 export, VIES ELMA XML, cancellation and correction line types, and company, tax office and registration fields. Learn documents this in "How to Create VAT Reports [DE]", "Correct VAT Reports [DE]", "How to Set Up VAT Reports [DE]", "EU Sales List in Germany" and "VAT Reporting in the German version". Local reports include VAT Statement Germany, VAT Statement Schedule and the VAT-VIES declaration. Sales VAT advance notifications use new fields on General Ledger Setup and VAT Statement Name.

The country also adds its own functional blocks. A data export module (tables 11002 to 11010, codeunit 11000, report 11015 "Export Business Data") supports GoBD/GDPdU digital audits. A delivery reminder module for purchases (tables 5005270 to 5005278, pages, codeunits and reports) covers terms, levels, text, creation, issuing and test reports. A physical inventory order module (tables 5005350 to 5005363) is also added. The "DACH" naming points to shared use with Austria and Switzerland, for example DACH Report Selections and several AT and CH reports.

W1 changes include Registration No. on vendor and purchase documents, tax office fields on Company Information, BilMoG valuation parameters on the exchange rate adjustment, a Correction check in Gen. Jnl.-Post Batch, premium depreciation fields on Fixed Asset, and a few events on posting, VAT report validation, Navigate and the VAT statement preview.

## Key points

- VAT reports: ELMA5 export, cancellation and correction lines, Suggest Lines and Correct Lines, extra fields on VAT Report Header, Line and Setup.
- EU sales list and VIES: VIES ELMA XML codeunit, Export VIES Report, VAT-VIES Declaration Tax DE report.
- Local VAT reports: VAT Statement Germany, VAT Statement Schedule and sales VAT advance notification setup (ELSTER export per Learn).
- Digital audit (GoBD/GDPdU): Data Export tables, pages and setup, plus Export Business Data report with period and date filter handling.
- Delivery reminders for purchases: terms, levels, text, vendor codes, create, issue and test report, with ledger entries.
- Currency exchange rate adjustment gets BilMoG valuation method, valuation date and due date parameters.
- Physical inventory orders, recordings and posted versions are added as new tables with number series on Inventory Setup.
- Company Information gains tax office, authorized number and place of dispatcher/receiver fields; vendors and purchase documents gain Registration No.

Narrative written by Sonnet from the code diff and 30 Learn page summaries. In numbers: Germany (DE) localization of Business Central in BC29: 128 objects of its own, 63 W1 objects changed (92 fields and 4 events added), 1 W1 objects dropped. From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 33 | 37 | 49 |
| [Purchases](#purchases) | 9 | 46 | 11 |
| [Inventory](#inventory) | 5 | 21 | 5 |
| [Foundation](#foundation) | 6 | 9 | 24 |
| [(no namespace)](#no-namespace) | 0 | 7 | 0 |
| [FixedAssets](#fixedassets) | 4 | 2 | 3 |
| [Security](#security) | 2 | 2 | 0 |
| [CRM](#crm) | 2 | 0 | 0 |
| [Sales](#sales) | 1 | 1 | 0 |
| [Manufacturing](#manufacturing) | 0 | 1 | 0 |
| [Microsoft](#microsoft) | 0 | 1 | 0 |
| [Service](#service) | 1 | 0 | 0 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Finance

Extends the VAT report framework with ELMA5 and VIES ELMA XML export, cancellation and correction lines, and added setup and header fields. Adds a data export module for digital audits, local reports (VAT Statement Germany, Schedule, VIES, G/L Total-Balance), BilMoG exchange rate adjustment parameters, and a payment application check in Gen. Jnl.-Post Batch.

Why: Learn explains that ELMA5 is used to file VAT and EU sales lists, that the digital audit follows GoBD/GDPdU, and that year-end exchange rate adjustment uses the BilMoG valuation method.

Objects: [table/740 "VAT Report Header"](../objects/table/740.md), [table/741 "VAT Report Line"](../objects/table/741.md), [table/743 "VAT Report Setup"](../objects/table/743.md), [codeunit/743 "VAT Report Export"](../objects/codeunit/743.md), codeunit/11001 "VIES ELMA Xml" (own), [report/741 "VAT Report Suggest Lines"](../objects/report/741.md), codeunit/11000 "Data Export Management" (own), report/11015 "Export Business Data" (own).

[All 70 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds the delivery reminder feature: header, line, issued and ledger tables, terms, levels, text, pages, create and issue codeunits and reports. Adds archive options on Purchases & Payables Setup, Registration No. on Vendor Templ., and local vendor reports.

Why: Learn describes delivery reminders as a way to track supplier delivery performance.

Objects: table/5005270 "Delivery Reminder Header" (own), table/5005271 "Delivery Reminder Line" (own), codeunit/5005271 "Create Delivery Reminder" (own), codeunit/5005270 "Issue Delivery Reminder" (own), page/5005270 "Delivery Reminder" (own), report/5005340 "Create Delivery Reminder" (own), report/5005341 "Issue Delivery Reminder" (own), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 55 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Inventory

Adds physical inventory orders and recordings with posted and tracking tables, place of dispatcher and receiver tables, and number series fields on Inventory Setup. Also adds Item ABC Analysis, Crossborder Services and inventory value reports, and changes Intrastat related tables.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/5005350 "Phys. Inventory Order Header" (own), table/5005351 "Phys. Inventory Order Line" (own), table/5005352 "Phys. Invt. Recording Header" (own), [table/313 "Inventory Setup"](../objects/table/313.md), table/11000 "Place of Dispatcher" (own), table/11001 "Place of Receiver" (own), report/11503 "Item ABC Analysis" (own), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md).

[All 26 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Foundation

Adds tax office, authorization and dispatcher fields to Company Information, DACH report selections with new usages, and address formatting for tax offices. Adds Delivery Reminder source code and print procedures in Document-Print.

Why: Learn notes company registration numbers on reports come from Company Information.

Objects: [table/79 "Company Information"](../objects/table/79.md), table/26100 "DACH Report Selections" (own), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md), [table/242 "Source Code Setup"](../objects/table/242.md), enumextension/26101 "Report Selection Usage Del. Rem." (own), enumextension/26102 "Report Sel. Usage Purch. DACH" (own).

[All 15 objects of Foundation in the diff](?ns=Foundation#country-diff)

### (no namespace)

Holds the VAT Report Lines page, the Data Export Setup table, the Intrastat item list report, and upgrade and sandbox cleanup plumbing.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: page/784 "VAT Report Lines" (own), table/11009 "Data Export Setup" (own), report/11001 "Intrastat - Item List" (own).

[All 7 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### FixedAssets

Adds fields for BWR depreciation book and premium depreciation on Fixed Asset, an exclude reclassification entries procedure in FA General Report, and local book value and list reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md), report/11011 "Fixed Asset - Book Value 03" (own), [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md), report/11100 "Fixed Assets - List AT" (own).

[All 6 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Extends the LOCAL and LOCAL READ permission sets, with extensions for delivery reminder permissions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), permissionsetextension/5005270 "DR LOCAL" (own), permissionsetextension/5005271 "DR LOCAL READ" (own).

[All 4 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Changes the Export Contact and Export Segment Contact XMLports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md), [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### Sales

Adds a Customer Total-Balance report and changes Sales Line Archive.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: report/11003 "Customer Total-Balance" (own), [table/5108 "Sales Line Archive"](../objects/table/5108.md).

[All 2 objects of Sales in the diff](?ns=Sales#country-diff)

### Manufacturing

Adds a page extension for the Manufacturing Manager role center.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: pageextension/11010 "Manufacturing Manager RC DACH" (own).

[All 1 objects of Manufacturing in the diff](?ns=Manufacturing#country-diff)

### Microsoft

Adds a Certificate table.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: table/11014 "Certificate" (own).

[All 1 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Service

Service Credit Memo report gets procedures for the document caption and number label.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/5912 "Service - Credit Memo"](../objects/report/5912.md).

[All 1 objects of Service in the diff](?ns=Service#country-diff)

### Utilities

Adds the GeneralMgt codeunit with local helper functions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: codeunit/11501 "GeneralMgt" (own).

[All 1 objects of Utilities in the diff](?ns=Utilities#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/13 "Gen. Jnl.-Post Batch"](../objects/codeunit/13.md) | +1 events, +5 procedures |
| [codeunit/229 "Document-Print"](../objects/codeunit/229.md) | +2 procedures |
| [codeunit/365 "Format Address"](../objects/codeunit/365.md) | +2 procedures |
| [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md) | +5 procedures |
| [codeunit/737 "VAT Report Mgt."](../objects/codeunit/737.md) | body changes only |
| [codeunit/740 "VAT Report Mediator"](../objects/codeunit/740.md) | +2 procedures |
| [codeunit/741 "VAT Report Release/Reopen"](../objects/codeunit/741.md) | +1 procedures |
| [codeunit/743 "VAT Report Export"](../objects/codeunit/743.md) | +9 procedures |
| [codeunit/744 "VAT Report Validate"](../objects/codeunit/744.md) | +1 events, +4 procedures |
| [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md) | +1 procedures |
| [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md) | +1 procedures |
| [page/321 "ECSL Report"](../objects/page/321.md) | 2 properties |
| [page/323 "EC Sales List Reports"](../objects/page/323.md) | 4 properties |
| [page/344 "Navigate"](../objects/page/344.md) | +1 events |
| [page/471 "VAT Product Posting Groups"](../objects/page/471.md) | +1 procedures |
| [page/475 "VAT Statement Preview Line"](../objects/page/475.md) | +1 events, +2 procedures, 1 properties |
| [page/740 "VAT Report"](../objects/page/740.md) | 4 properties |
| [page/741 "VAT Report Subform"](../objects/page/741.md) | +1 procedures, 2 properties |
| [page/744 "VAT Report List"](../objects/page/744.md) | 3 properties |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/12 "VAT Statement"](../objects/report/12.md) | 1 properties |
| [report/88 "VAT- VIES Declaration Disk"](../objects/report/88.md) | +2 procedures, 2 properties |
| [report/596 "Exch. Rate Adjustment"](../objects/report/596.md) | +2 procedures |
| [report/741 "VAT Report Suggest Lines"](../objects/report/741.md) | +13 procedures, 1 properties |
| [report/742 "VAT Report Request Page"](../objects/report/742.md) | body changes only |
| [report/5912 "Service - Credit Memo"](../objects/report/5912.md) | +2 procedures |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +1 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +1 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +2 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +23 fields, 3 fields changed |
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
| [table/737 "VAT Return Period"](../objects/table/737.md) | 2 fields changed, 1 properties |
| [table/740 "VAT Report Header"](../objects/table/740.md) | +18 fields, 14 fields changed, +11 procedures |
| [table/741 "VAT Report Line"](../objects/table/741.md) | +12 fields, 3 fields changed, +9 procedures |
| [table/743 "VAT Report Setup"](../objects/table/743.md) | +10 fields, 1 fields changed |
| [table/744 "VAT Report Line Relation"](../objects/table/744.md) | body changes only |
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
- codeunit/11001 "VIES ELMA Xml"
- codeunit/11004 "Report Sel. Purch. Subscribers"
- codeunit/11110 "Update VAT-AT"
- codeunit/11501 "GeneralMgt"
- codeunit/14060 "UPG Data Out Of Geo. Apps"
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
- page/784 "VAT Report Lines"
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
- report/11008 "Export VIES Report"
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

## W1 objects it drops

- [page/742 "VAT Report Statement Subform"](../objects/page/742.md)

## Other versions

- BC30: 192 objects differ from W1 (92 fields, 4 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
