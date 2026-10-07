---
id: localization/de
type: localization
title: Germany (DE)
summary: Germany (DE) localization of Business Central 29. It covers VAT reporting with ELMA5 and ELSTER, VIES/EU sales lists, e-invoicing (XRechnung, ZUGFeRD, Peppol BIS 3.0 DE), purchase delivery reminders, GoBD/GDPdU digital audit export, Intrastat, BilMoG exchange rate valuation and physical inventory orders.
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 689e2c731703428203f18e4271b4c3a10c2dd6bc94773ddb745c0c3dd279c8ba
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-de
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
added_objects: 217
replaced_objects: 63
removed_objects: 1
added_fields: 92
added_events: 4
learn_folder: LocalFunctionality/Germany
---

# Germany (DE)

> Germany (DE) localization of Business Central 29. It covers VAT reporting with ELMA5 and ELSTER, VIES/EU sales lists, e-invoicing (XRechnung, ZUGFeRD, Peppol BIS 3.0 DE), purchase delivery reminders, GoBD/GDPdU digital audit export, Intrastat, BilMoG exchange rate valuation and physical inventory orders.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/germany.md) · narrative **unreviewed** (machine-written)

## Overview

The German layer extends the W1 VAT Report framework (tables 740, 741, 743, codeunits 737, 740, 743, 744, report 741) with ELMA5 fields, correction and cancellation line types, and VIES ELMA XML export. Separate objects handle ELSTER sales VAT advance notifications (table 11021, Elster codeunits, XML report 11016) and local VAT reports such as VAT Statement Germany and VAT Statement Schedule. Learn documents this under VAT reporting, EU Sales List, and the VAT report setup and correction pages.

Other own functionality includes the Data Export objects for GoBD/GDPdU digital audits, delivery reminders for vendors (tables 5005270 onward, pages, issue and create codeunits, reports), physical inventory orders, and Intrastat extensions with a DE submission channel. E-documents are supported through XRechnung, ZUGFeRD and Peppol BIS 3.0 DE codeunits, enum extensions, and page and table extensions on sales and service documents.

W1 objects are extended with fields such as Registration No. on vendor and purchase documents, tax office fields on Company Information, BilMoG valuation parameters on the exchange rate adjustment, and DACH report selections. Four events were added: OnBeforeCheckPmtApplnAllowed, OnValidateVATReportPeriodOnAfterSetFilters, OnBeforeCalcColumnValue and one on Navigate.

## Key points

- VAT reports: ELMA5 export, corrective reports with cancellation and correction lines, VAT Report Setup fields for ZIVIT/transmission data
- ELSTER: Sales VAT Advance Notification card and list, electronic VAT declaration setup, XML file creation report 11016
- VIES/EU sales list via VIES ELMA XML and Export VIES Report; VAT-VIES declaration reports
- E-invoicing: XRechnung, ZUGFeRD and Peppol BIS 3.0 DE formats with a Buyer Reference setting on customers
- Delivery reminders for vendors: terms, levels, texts, create, issue, test report, ledger entries
- GoBD/GDPdU digital audit: Data Export record definitions, sources, table relations, Export Business Data report
- BilMoG valuation in Exch. Rate Adjmt. Parameters and a Correction posting check in Gen. Jnl.-Post Batch
- Intrastat DE extensions with submission channel, places of dispatch and receipt, physical inventory orders

Narrative written by Sonnet from the code diff and 30 Learn page summaries. In numbers: Germany (DE) localization of Business Central in BC29: 217 objects of its own, 63 W1 objects changed (92 fields and 4 events added), 1 W1 objects dropped. From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 33 | 37 | 49 |
| [Purchases](#purchases) | 9 | 46 | 11 |
| [eServices](#eservices) | 0 | 45 | 0 |
| [Inventory](#inventory) | 5 | 34 | 5 |
| [(no namespace)](#no-namespace) | 0 | 30 | 0 |
| [Foundation](#foundation) | 6 | 9 | 24 |
| [Peppol](#peppol) | 0 | 7 | 0 |
| [FixedAssets](#fixedassets) | 4 | 2 | 3 |
| [Security](#security) | 2 | 2 | 0 |
| [CRM](#crm) | 2 | 0 | 0 |
| [Sales](#sales) | 1 | 1 | 0 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [Manufacturing](#manufacturing) | 0 | 1 | 0 |
| [Microsoft](#microsoft) | 0 | 1 | 0 |
| [Service](#service) | 1 | 0 | 0 |
| [Utilities](#utilities) | 0 | 1 | 0 |

### Finance

Extends the W1 VAT Report framework with German fields, correction line types, ELMA5 and VIES ELMA XML export, and validation. It also adds the Data Export objects for digital audits, local VAT, VIES and G/L reports, and BilMoG exchange rate valuation.

Why: Learn describes ELMA5 VAT reports and corrections, BZSt-based EU sales lists, BilMoG valuation at year-end and GoBD/GDPdU audit exports.

Objects: [table/740 "VAT Report Header"](../objects/table/740.md), [table/741 "VAT Report Line"](../objects/table/741.md), [table/743 "VAT Report Setup"](../objects/table/743.md), [codeunit/743 "VAT Report Export"](../objects/codeunit/743.md), [codeunit/11001 "VIES ELMA Xml"](../objects/codeunit/11001-de.md) (own), [report/741 "VAT Report Suggest Lines"](../objects/report/741.md), [codeunit/597 "Exch. Rate Adjmt. Subscribers"](../objects/codeunit/597.md), [codeunit/11000 "Data Export Management"](../objects/codeunit/11000-de.md) (own).

[All 70 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds the delivery reminder feature as own tables, pages, codeunits and reports, plus archiving options in Purchases & Payables Setup. Registration No. is added to Vendor Templ. and Purchase Line gets old order fields. Vendor reports (total-balance, detailed aging, payments list) are added.

Why: Learn documents delivery reminder setup, terms, levels, generation, issuing and the Vendor Payments List report.

Objects: [table/5005270 "Delivery Reminder Header"](../objects/table/5005270-de.md) (own), [table/5005271 "Delivery Reminder Line"](../objects/table/5005271-de.md) (own), [codeunit/5005270 "Issue Delivery Reminder"](../objects/codeunit/5005270-de.md) (own), [codeunit/5005271 "Create Delivery Reminder"](../objects/codeunit/5005271-de.md) (own), [page/5005270 "Delivery Reminder"](../objects/page/5005270-de.md) (own), [report/5005340 "Create Delivery Reminder"](../objects/report/5005340-de.md) (own), [report/11507 "Vendor Payments List"](../objects/report/11507-de.md) (own), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 55 objects of Purchases in the diff](?ns=Purchases#country-diff)

### eServices

Implements German e-document support for XRechnung, ZUGFeRD and Peppol BIS 3.0 DE, including import and export codeunits, format enum extensions, and e-document fields on sales and service headers and pages.

Why: Learn covers e-invoicing setup in Germany with XRechnung, Peppol BIS 3 and ZUGFeRD, including the mandatory Buyer Reference.

Objects: [codeunit/13914 "XRechnung Format"](../objects/codeunit/13914-de.md) (own), [codeunit/13916 "Export XRechnung Document"](../objects/codeunit/13916-de.md) (own), [codeunit/13917 "Export ZUGFeRD Document"](../objects/codeunit/13917-de.md) (own), [codeunit/11035 "EDoc PEPPOL BIS 3.0 DE"](../objects/codeunit/11035-de.md) (own), [codeunit/13915 "Import XRechnung Document"](../objects/codeunit/13915-de.md) (own), [codeunit/13919 "Import ZUGFeRD Document"](../objects/codeunit/13919-de.md) (own), [enum/13914 "E-Document Buyer Reference"](../objects/enum/13914-de.md) (own), [pageextension/13914 "E-Document Customer Card DE"](../objects/pageextension/13914-de.md) (own).

[All 45 objects of eServices in the diff](?ns=eServices#country-diff)

### Inventory

Adds physical inventory orders and recordings as own tables, plus Intrastat report extensions for DE with submission channel, filters and places of dispatch and receipt. W1 tables for tariff numbers, transaction specification and Intrastat lines are changed.

Why: Learn describes Intrastat export and printing and setting up submission channels (IDEV or eSTATISTIK.CORE).

Objects: [codeunit/11029 "IntrastatReportManagementDE"](../objects/codeunit/11029-de.md) (own), [enum/11035 "Intrastat Submission Channel DE"](../objects/enum/11035-de.md) (own), [tableextension/11029 "Intrastat Report Line DE"](../objects/tableextension/11029-de.md) (own), [pageextension/11029 "Intrastat Report Subform DE"](../objects/pageextension/11029-de.md) (own), [table/5005350 "Phys. Inventory Order Header"](../objects/table/5005350-de.md) (own), [table/5005351 "Phys. Inventory Order Line"](../objects/table/5005351-de.md) (own), [table/11000 "Place of Dispatcher"](../objects/table/11000-de.md) (own), [table/313 "Inventory Setup"](../objects/table/313.md).

[All 39 objects of Inventory in the diff](?ns=Inventory#country-diff)

### (no namespace)

Contains the ELSTER VAT advance notification objects, electronic VAT declaration setup and buffer, XML creation report, Data Export Setup, and ELSTER permission set extensions. Upgrade and sandbox cleanup codeunits are also here.

Why: Learn explains exporting sales VAT advance notifications as XML to ELSTER using the ELSTER VAT Localization extension.

Objects: [table/11021 "Sales VAT Advance Notif."](../objects/table/11021-de.md) (own), [page/11016 "Sales VAT Adv. Notif. Card"](../objects/page/11016-de.md) (own), [page/11017 "Sales VAT Adv. Notif. List"](../objects/page/11017-de.md) (own), [codeunit/11023 "Elster Management"](../objects/codeunit/11023-de.md) (own), [codeunit/11021 "Elster - Initialize"](../objects/codeunit/11021-de.md) (own), [report/11016 "Create XML-File VAT Adv.Notif."](../objects/report/11016-de.md) (own), [table/11023 "Elec. VAT Decl. Setup"](../objects/table/11023-de.md) (own), [table/11009 "Data Export Setup"](../objects/table/11009-de.md) (own).

[All 30 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### Foundation

Adds tax office, company number and authorization fields to Company Information, and DACH report selections including delivery reminder usage. Document-Print, Format Address and Report Selection Mgt. get local procedures.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/26100 "DACH Report Selections"](../objects/table/26100-de.md) (own), [codeunit/229 "Document-Print"](../objects/codeunit/229.md), [codeunit/365 "Format Address"](../objects/codeunit/365.md), [codeunit/1901 "Report Selection Mgt."](../objects/codeunit/1901.md), [enumextension/26101 "Report Selection Usage Del. Rem."](../objects/enumextension/26101-de.md) (own), [table/242 "Source Code Setup"](../objects/table/242.md), [codeunit/11004 "Report Sel. Purch. Subscribers"](../objects/codeunit/11004-de.md) (own).

[All 15 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Peppol

Provides PEPPOL 3.0 DE codeunits for sales and service validation, document and party info, context and subscribers, plus a format enum extension.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/37400 "PEPPOL30 DE Sales Validation"](../objects/codeunit/37400-de.md) (own), [codeunit/37401 "PEPPOL30 DE Service Validation"](../objects/codeunit/37401-de.md) (own), [codeunit/37402 "PEPPOL30 DE Doc Info"](../objects/codeunit/37402-de.md) (own), [codeunit/37403 "PEPPOL30 DE Party Info"](../objects/codeunit/37403-de.md) (own), [codeunit/37404 "PEPPOL30 DE Context"](../objects/codeunit/37404-de.md) (own), [codeunit/37405 "PEPPOL30 DE Subscribers"](../objects/codeunit/37405-de.md) (own), [enumextension/37400 "PEPPOL 3.0 Format DE"](../objects/enumextension/37400-de.md) (own).

[All 7 objects of Peppol in the diff](?ns=Peppol#country-diff)

### FixedAssets

Adds fields to Fixed Asset for BWR depreciation book code and premium depreciation, local Fixed Asset book value report 11011 and the AT list report, and a procedure in FA General Report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5600 "Fixed Asset"](../objects/table/5600.md), [report/11011 "Fixed Asset - Book Value 03"](../objects/report/11011-de.md) (own), [report/11100 "Fixed Assets - List AT"](../objects/report/11100-de.md) (own), [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md), [table/5611 "Depreciation Book"](../objects/table/5611.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md).

[All 6 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Security

Extends the LOCAL and LOCAL READ permission sets and adds delivery reminder permission set extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md), [permissionsetextension/5005270 "DR LOCAL"](../objects/permissionsetextension/5005270-de.md) (own), [permissionsetextension/5005271 "DR LOCAL READ"](../objects/permissionsetextension/5005271-de.md) (own).

[All 4 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Changes the Export Contact and Export Segment Contact XML ports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [xmlport/5050 "Export Contact"](../objects/xmlport/5050.md), [xmlport/5051 "Export Segment Contact"](../objects/xmlport/5051.md).

[All 2 objects of CRM in the diff](?ns=CRM#country-diff)

### Sales

Adds the Customer Total-Balance report and changes Sales Line Archive.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/11003 "Customer Total-Balance"](../objects/report/11003-de.md) (own), [table/5108 "Sales Line Archive"](../objects/table/5108.md).

[All 2 objects of Sales in the diff](?ns=Sales#country-diff)

### ExpenseAgent

Adds a German expense event subscriber codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6917 "Expense Event Subscriber DE"](../objects/codeunit/6917-de.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### Manufacturing

Adds a DACH page extension for the Manufacturing Manager role center.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/11010 "Manufacturing Manager RC DACH"](../objects/pageextension/11010-de.md) (own).

[All 1 objects of Manufacturing in the diff](?ns=Manufacturing#country-diff)

### Microsoft

Adds a Certificate table.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/11014 "Certificate"](../objects/table/11014-de.md) (own).

[All 1 objects of Microsoft in the diff](?ns=Microsoft#country-diff)

### Service

Changes the Service - Credit Memo report with document number label and caption procedures.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [report/5912 "Service - Credit Memo"](../objects/report/5912.md).

[All 1 objects of Service in the diff](?ns=Service#country-diff)

### Utilities

Adds the GeneralMgt codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11501 "GeneralMgt"](../objects/codeunit/11501-de.md) (own).

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

217 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-de.md)
- [codeunit/1883 "Sandbox Cleanup local"](../objects/codeunit/1883-de.md)
- [codeunit/6917 "Expense Event Subscriber DE"](../objects/codeunit/6917-de.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-de.md)
- [codeunit/11000 "Data Export Management"](../objects/codeunit/11000-de.md)
- [codeunit/11001 "VIES ELMA Xml"](../objects/codeunit/11001-de.md)
- [codeunit/11004 "Report Sel. Purch. Subscribers"](../objects/codeunit/11004-de.md)
- [codeunit/11021 "Elster - Initialize"](../objects/codeunit/11021-de.md)
- [codeunit/11023 "Elster Management"](../objects/codeunit/11023-de.md)
- [codeunit/11029 "IntrastatReportManagementDE"](../objects/codeunit/11029-de.md)
- [codeunit/11031 "Intrastat Report Filter Rcpt."](../objects/codeunit/11031-de.md)
- [codeunit/11032 "Intrastat Report Filter Shpt."](../objects/codeunit/11032-de.md)
- [codeunit/11033 "Intrastat Report Reset Filter"](../objects/codeunit/11033-de.md)
- [codeunit/11034 "IntrastatReportDEUpgrade"](../objects/codeunit/11034-de.md)
- [codeunit/11035 "EDoc PEPPOL BIS 3.0 DE"](../objects/codeunit/11035-de.md)
- [codeunit/11036 "ZUGFeRD Report Integration"](../objects/codeunit/11036-de.md)
- [codeunit/11037 "E-Document Header Handler DE"](../objects/codeunit/11037-de.md)
- [codeunit/11038 "E-Document DE Helper"](../objects/codeunit/11038-de.md)
- [codeunit/11039 "E-Document XRechnung Handler"](../objects/codeunit/11039-de.md)
- [codeunit/11040 "E-Doc. PEPPOL BIS 3.0 DE Hdlr"](../objects/codeunit/11040-de.md)
- [codeunit/11041 "E-Document ZUGFeRD Handler"](../objects/codeunit/11041-de.md)
- [codeunit/11110 "Update VAT-AT"](../objects/codeunit/11110-de.md)
- [codeunit/11501 "GeneralMgt"](../objects/codeunit/11501-de.md)
- [codeunit/13914 "XRechnung Format"](../objects/codeunit/13914-de.md)
- [codeunit/13915 "Import XRechnung Document"](../objects/codeunit/13915-de.md)
- [codeunit/13916 "Export XRechnung Document"](../objects/codeunit/13916-de.md)
- [codeunit/13917 "Export ZUGFeRD Document"](../objects/codeunit/13917-de.md)
- [codeunit/13919 "Import ZUGFeRD Document"](../objects/codeunit/13919-de.md)
- [codeunit/13920 "ZUGFeRD Format"](../objects/codeunit/13920-de.md)
- [codeunit/13921 "EDoc PEPPOL Validation DE"](../objects/codeunit/13921-de.md)
- [codeunit/14060 "UPG Data Out Of Geo. Apps"](../objects/codeunit/14060-de.md)
- [codeunit/37400 "PEPPOL30 DE Sales Validation"](../objects/codeunit/37400-de.md)
- [codeunit/37401 "PEPPOL30 DE Service Validation"](../objects/codeunit/37401-de.md)
- [codeunit/37402 "PEPPOL30 DE Doc Info"](../objects/codeunit/37402-de.md)
- [codeunit/37403 "PEPPOL30 DE Party Info"](../objects/codeunit/37403-de.md)
- [codeunit/37404 "PEPPOL30 DE Context"](../objects/codeunit/37404-de.md)
- [codeunit/37405 "PEPPOL30 DE Subscribers"](../objects/codeunit/37405-de.md)
- [codeunit/104100 "Upg Local Functionality"](../objects/codeunit/104100-de.md)
- [codeunit/5005270 "Issue Delivery Reminder"](../objects/codeunit/5005270-de.md)
- [codeunit/5005271 "Create Delivery Reminder"](../objects/codeunit/5005271-de.md)
- [codeunit/5005272 "Deliv.-Rem. Ext. Text Transfer"](../objects/codeunit/5005272-de.md)
- [codeunit/5005273 "Iss. Delivery Remind. printed"](../objects/codeunit/5005273-de.md)
- [codeunit/5005274 "DR Data Class. Eval. Data"](../objects/codeunit/5005274-de.md)
- [codeunit/5005396 "Print Document Comfort"](../objects/codeunit/5005396-de.md)
- [codeunit/5005397 "Format Adress Comfort"](../objects/codeunit/5005397-de.md)
- [enum/11003 "Data Export File Encoding"](../objects/enum/11003-de.md)
- [enum/11035 "Intrastat Submission Channel DE"](../objects/enum/11035-de.md)
- [enum/13914 "E-Document Buyer Reference"](../objects/enum/13914-de.md)
- [enum/5005272 "Delivery Reminder Date Type"](../objects/enum/5005272-de.md)
- [enumextension/13914 "E-Document Format DE"](../objects/enumextension/13914-de.md)
- [enumextension/13915 "PEPPOL BIS 3.0 DE Read Draft"](../objects/enumextension/13915-de.md)
- [enumextension/13916 "ZUGFeRD EDoc Read into Draft"](../objects/enumextension/13916-de.md)
- [enumextension/13917 "XRechnung EDoc Read into Draft"](../objects/enumextension/13917-de.md)
- [enumextension/13919 "ZUGFeRD Structure Received"](../objects/enumextension/13919-de.md)
- [enumextension/26101 "Report Selection Usage Del. Rem."](../objects/enumextension/26101-de.md)
- [enumextension/26102 "Report Sel. Usage Purch. DACH"](../objects/enumextension/26102-de.md)
- [enumextension/37400 "PEPPOL 3.0 Format DE"](../objects/enumextension/37400-de.md)
- [page/784 "VAT Report Lines"](../objects/page/784-de.md)
- [page/11000 "Place of Dispatchers"](../objects/page/11000-de.md)
- [page/11001 "Place of Receivers"](../objects/page/11001-de.md)
- [page/11002 "Data Exports"](../objects/page/11002-de.md)
- [page/11003 "Data Export Record Definitions"](../objects/page/11003-de.md)
- [page/11004 "Data Export Record Source"](../objects/page/11004-de.md)
- [page/11007 "Data Export Table Relation"](../objects/page/11007-de.md)
- [page/11008 "Data Export Table Relation Sub"](../objects/page/11008-de.md)
- [page/11009 "Data Export Field List"](../objects/page/11009-de.md)
- [page/11014 "Data Export Record Types"](../objects/page/11014-de.md)
- [page/11016 "Sales VAT Adv. Notif. Card"](../objects/page/11016-de.md)
- [page/11017 "Sales VAT Adv. Notif. List"](../objects/page/11017-de.md)
- [page/11019 "Electronic VAT Decl. Setup"](../objects/page/11019-de.md)
- [page/11026 "Data Export Table Keys"](../objects/page/11026-de.md)
- [page/11027 "Data Export Record Fields"](../objects/page/11027-de.md)
- [page/11028 "Elec. VAT Decl. Overview"](../objects/page/11028-de.md)
- [page/35516 "Cash Receipt Journal FactBox"](../objects/page/35516-de.md)
- [page/35517 "Payment Journal FactBox"](../objects/page/35517-de.md)
- [page/5005270 "Delivery Reminder"](../objects/page/5005270-de.md)
- [page/5005271 "Delivery Reminder Sub."](../objects/page/5005271-de.md)
- [page/5005272 "Delivery Reminder List"](../objects/page/5005272-de.md)
- [page/5005273 "Issued Delivery Reminder"](../objects/page/5005273-de.md)
- [page/5005274 "Issued Delivery Reminder Sub"](../objects/page/5005274-de.md)
- [page/5005275 "Issued Delivery Reminders List"](../objects/page/5005275-de.md)
- [page/5005276 "Deliv. Reminder Ledger Entries"](../objects/page/5005276-de.md)
- [page/5005277 "Delivery Reminder Comment Line"](../objects/page/5005277-de.md)
- [page/5005278 "Deliv. Rem. Comment Line List"](../objects/page/5005278-de.md)
- [page/5005279 "Delivery Reminder Terms"](../objects/page/5005279-de.md)
- [page/5005280 "Delivery Reminder Terms List"](../objects/page/5005280-de.md)
- [page/5005281 "Delivery Reminder Levels"](../objects/page/5005281-de.md)
- [page/5005283 "Delivery Reminder Text"](../objects/page/5005283-de.md)
- [pageextension/11010 "Manufacturing Manager RC DACH"](../objects/pageextension/11010-de.md)
- [pageextension/11025 "Elster Small Bus. Owner RC"](../objects/pageextension/11025-de.md)
- [pageextension/11026 "Elster Acc. Mgr Role Center"](../objects/pageextension/11026-de.md)
- [pageextension/11027 "Elster VAT Statement Names"](../objects/pageextension/11027-de.md)
- [pageextension/11029 "Intrastat Report Subform DE"](../objects/pageextension/11029-de.md)
- [pageextension/11030 "Intrastat Report DE"](../objects/pageextension/11030-de.md)
- [pageextension/11031 "Intrastat Report Setup DE"](../objects/pageextension/11031-de.md)
- [pageextension/11035 "E-Doc Pstd Svc Cr.Memo DE"](../objects/pageextension/11035-de.md)
- [pageextension/11036 "E-Doc Item Charges DE"](../objects/pageextension/11036-de.md)
- [pageextension/11040 "E-Doc Sales Invoice DE"](../objects/pageextension/11040-de.md)
- [pageextension/11041 "E-Doc Sales Credit Memo DE"](../objects/pageextension/11041-de.md)
- [pageextension/11042 "E-Doc Sales Order DE"](../objects/pageextension/11042-de.md)
- [pageextension/13914 "E-Document Customer Card DE"](../objects/pageextension/13914-de.md)
- [pageextension/13916 "E-Doc Pstd Sales Invoice DE"](../objects/pageextension/13916-de.md)
- [pageextension/13917 "E-Doc Pstd Sales Cr.Memo DE"](../objects/pageextension/13917-de.md)
- [pageextension/13918 "E-Doc Service Invoice DE"](../objects/pageextension/13918-de.md)
- [pageextension/13919 "E-Doc Service Credit Memo DE"](../objects/pageextension/13919-de.md)
- [pageextension/13920 "E-Doc Service Order DE"](../objects/pageextension/13920-de.md)
- [pageextension/13921 "E-Doc Pstd Svc Invoice DE"](../objects/pageextension/13921-de.md)
- [pageextension/5005270 "SourceCodeSetupDACH"](../objects/pageextension/5005270-de.md)
- [pageextension/5005271 "DRVendorTemplCard"](../objects/pageextension/5005271-de.md)
- [pageextension/5005272 "DRPurchSetup"](../objects/pageextension/5005272-de.md)
- [pageextension/5005273 "DRExtendedText"](../objects/pageextension/5005273-de.md)
- [pageextension/5005274 "DRPurchMgrRoleCenter"](../objects/pageextension/5005274-de.md)
- [pageextension/5005275 "DRPurchAgentRoleCenter"](../objects/pageextension/5005275-de.md)
- [pageextension/5005276 "DRPurchaseOrder"](../objects/pageextension/5005276-de.md)
- [pageextension/5005277 "DRVendorCard"](../objects/pageextension/5005277-de.md)
- [permissionset/26001 "PURCHASE-DEL.REMIND."](../objects/permissionset/26001-de.md)
- [permissionsetextension/8697 "D365 BUS FULL ACCESS - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/8697-de.md)
- [permissionsetextension/9615 "D365 READ - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/9615-de.md)
- [permissionsetextension/11029 "Intrastat DE - Objects"](../objects/permissionsetextension/11029-de.md)
- [permissionsetextension/14181 "D365 FULL ACCESS - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/14181-de.md)
- [permissionsetextension/16295 "D365 BUS PREMIUM - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/16295-de.md)
- [permissionsetextension/21993 "INTELLIGENT CLOUD - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/21993-de.md)
- [permissionsetextension/32689 "D365 TEAM MEMBER - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/32689-de.md)
- [permissionsetextension/45801 "D365 BASIC ISV - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/45801-de.md)
- [permissionsetextension/46539 "D365 BASIC - ELSTER VAT Localization for Germany"](../objects/permissionsetextension/46539-de.md)
- [permissionsetextension/5005270 "DR LOCAL"](../objects/permissionsetextension/5005270-de.md)
- [permissionsetextension/5005271 "DR LOCAL READ"](../objects/permissionsetextension/5005271-de.md)
- [report/11001 "Intrastat - Item List"](../objects/report/11001-de.md)
- [report/11002 "G/L Total-Balance"](../objects/report/11002-de.md)
- [report/11003 "Customer Total-Balance"](../objects/report/11003-de.md)
- [report/11004 "Vendor Total-Balance"](../objects/report/11004-de.md)
- [report/11005 "VAT Statement Germany"](../objects/report/11005-de.md)
- [report/11006 "Vendor Detailed Aging"](../objects/report/11006-de.md)
- [report/11007 "VAT-Vies Declaration Tax - DE"](../objects/report/11007-de.md)
- [report/11008 "Export VIES Report"](../objects/report/11008-de.md)
- [report/11010 "VAT Statement Schedule"](../objects/report/11010-de.md)
- [report/11011 "Fixed Asset - Book Value 03"](../objects/report/11011-de.md)
- [report/11015 "Export Business Data"](../objects/report/11015-de.md)
- [report/11016 "Create XML-File VAT Adv.Notif."](../objects/report/11016-de.md)
- [report/11100 "Fixed Assets - List AT"](../objects/report/11100-de.md)
- [report/11108 "VAT - VIES Declaration XML"](../objects/report/11108-de.md)
- [report/11109 "Paragraph 131 Export"](../objects/report/11109-de.md)
- [report/11110 "VAT Statement AT"](../objects/report/11110-de.md)
- [report/11111 "Crossborder Services"](../objects/report/11111-de.md)
- [report/11112 "Update VAT Statement Template"](../objects/report/11112-de.md)
- [report/11500 "Provisional Trial Balance"](../objects/report/11500-de.md)
- [report/11503 "Item ABC Analysis"](../objects/report/11503-de.md)
- [report/11507 "Vendor Payments List"](../objects/report/11507-de.md)
- [report/11514 "G/L Setup Information"](../objects/report/11514-de.md)
- [report/11517 "Inventory Value (Help Report)"](../objects/report/11517-de.md)
- [report/5005272 "Delivery Reminder - Test"](../objects/report/5005272-de.md)
- [report/5005273 "Issued Delivery Reminder"](../objects/report/5005273-de.md)
- [report/5005340 "Create Delivery Reminder"](../objects/report/5005340-de.md)
- [report/5005341 "Issue Delivery Reminder"](../objects/report/5005341-de.md)
- [reportextension/13918 "Posted Sales Invoice"](../objects/reportextension/13918-de.md)
- [reportextension/13919 "Posted Sales Cr.Memo"](../objects/reportextension/13919-de.md)
- [reportextension/13920 "Posted Service Invoice"](../objects/reportextension/13920-de.md)
- [reportextension/13921 "Posted Service Cr. Memo"](../objects/reportextension/13921-de.md)
- [table/11000 "Place of Dispatcher"](../objects/table/11000-de.md)
- [table/11001 "Place of Receiver"](../objects/table/11001-de.md)
- [table/11002 "Data Export"](../objects/table/11002-de.md)
- [table/11003 "Data Export Record Definition"](../objects/table/11003-de.md)
- [table/11004 "Data Export Record Source"](../objects/table/11004-de.md)
- [table/11005 "Data Export Record Field"](../objects/table/11005-de.md)
- [table/11006 "Data Export Table Relation"](../objects/table/11006-de.md)
- [table/11007 "Data Export Record Type"](../objects/table/11007-de.md)
- [table/11008 "Data Export Buffer"](../objects/table/11008-de.md)
- [table/11009 "Data Export Setup"](../objects/table/11009-de.md)
- [table/11010 "Data Exp. Primary Key Buffer"](../objects/table/11010-de.md)
- [table/11014 "Certificate"](../objects/table/11014-de.md)
- [table/11015 "Key Buffer"](../objects/table/11015-de.md)
- [table/11016 "Number Series Buffer"](../objects/table/11016-de.md)
- [table/11021 "Sales VAT Advance Notif."](../objects/table/11021-de.md)
- [table/11023 "Elec. VAT Decl. Setup"](../objects/table/11023-de.md)
- [table/11027 "Elec. VAT Decl. Buffer"](../objects/table/11027-de.md)
- [table/26100 "DACH Report Selections"](../objects/table/26100-de.md)
- [table/5005270 "Delivery Reminder Header"](../objects/table/5005270-de.md)
- [table/5005271 "Delivery Reminder Line"](../objects/table/5005271-de.md)
- [table/5005272 "Issued Deliv. Reminder Header"](../objects/table/5005272-de.md)
- [table/5005273 "Issued Deliv. Reminder Line"](../objects/table/5005273-de.md)
- [table/5005274 "Delivery Reminder Ledger Entry"](../objects/table/5005274-de.md)
- [table/5005275 "Delivery Reminder Comment Line"](../objects/table/5005275-de.md)
- [table/5005276 "Delivery Reminder Term"](../objects/table/5005276-de.md)
- [table/5005277 "Delivery Reminder Level"](../objects/table/5005277-de.md)
- [table/5005278 "Delivery Reminder Text"](../objects/table/5005278-de.md)
- [table/5005350 "Phys. Inventory Order Header"](../objects/table/5005350-de.md)
- [table/5005351 "Phys. Inventory Order Line"](../objects/table/5005351-de.md)
- [table/5005352 "Phys. Invt. Recording Header"](../objects/table/5005352-de.md)
- [table/5005353 "Phys. Invt. Recording Line"](../objects/table/5005353-de.md)
- [table/5005354 "Post. Phys. Invt. Order Header"](../objects/table/5005354-de.md)
- [table/5005355 "Posted Phys. Invt. Order Line"](../objects/table/5005355-de.md)
- [table/5005356 "Posted Phys. Invt. Rec. Header"](../objects/table/5005356-de.md)
- [table/5005357 "Posted Phys. Invt. Rec. Line"](../objects/table/5005357-de.md)
- [table/5005358 "Phys. Inventory Comment Line"](../objects/table/5005358-de.md)
- [table/5005359 "Posted Phys. Invt. Track. Line"](../objects/table/5005359-de.md)
- [table/5005360 "Phys. Invt. Tracking Buffer"](../objects/table/5005360-de.md)
- [table/5005361 "Expect. Phys. Inv. Track. Line"](../objects/table/5005361-de.md)
- [table/5005362 "Post. Exp. Ph. In. Track. Line"](../objects/table/5005362-de.md)
- [table/5005363 "Phys. Invt. Diff. List Buffer"](../objects/table/5005363-de.md)
- [tableextension/11026 "Elster VAT Statement Name"](../objects/tableextension/11026-de.md)
- [tableextension/11029 "Intrastat Report Line DE"](../objects/tableextension/11029-de.md)
- [tableextension/11030 "Intrastat Report Header DE"](../objects/tableextension/11030-de.md)
- [tableextension/11031 "Intrastat Report Setup DE"](../objects/tableextension/11031-de.md)
- [tableextension/11036 "E-Doc Sales Header DE"](../objects/tableextension/11036-de.md)
- [tableextension/11037 "E-Doc Sales Invoice Header DE"](../objects/tableextension/11037-de.md)
- [tableextension/11038 "E-Doc Sales CrMemo Header DE"](../objects/tableextension/11038-de.md)
- [tableextension/11039 "E-Doc Service Header DE"](../objects/tableextension/11039-de.md)
- [tableextension/11040 "E-Doc Service Invoice Hdr DE"](../objects/tableextension/11040-de.md)
- [tableextension/11041 "E-Doc Service CrMemo Hdr DE"](../objects/tableextension/11041-de.md)
- [tableextension/11042 "E-Doc. Purchase Header DE"](../objects/tableextension/11042-de.md)
- [tableextension/13914 "E-Document Customer DE"](../objects/tableextension/13914-de.md)
- [tableextension/13915 "E-Document Service DE"](../objects/tableextension/13915-de.md)
- [tableextension/5005270 "SourceCodeSetupDACH"](../objects/tableextension/5005270-de.md)
- [tableextension/5005280 "DRVendor"](../objects/tableextension/5005280-de.md)
- [tableextension/5005281 "DRVendorTempl"](../objects/tableextension/5005281-de.md)
- [tableextension/5005282 "DRPurchSetup"](../objects/tableextension/5005282-de.md)
- [tableextension/5005283 "DRExtendedTextHeader"](../objects/tableextension/5005283-de.md)

## W1 objects it drops

- [page/742 "VAT Report Statement Subform"](../objects/page/742.md)

## Other versions

- BC30: 284 objects differ from W1 (92 fields, 4 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
