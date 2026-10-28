---
id: localization/se
type: localization
title: Sweden (SE)
summary: Sweden (SE) localization of Business Central 29. It covers SIE import and export of general ledger data, automatic account codes, EU third-party purchase reporting, Swedish balance sheet and income statement reports, PEPPOL 3.0 for Sweden, and Swedish extensions of document reports. It answers what Sweden adds to W1 and where Learn documents it.
tier: official
language: en
tags:
  - localization
  - se
review:
  state: reviewed
  by: opus
  at: "2026-10-28T10:39:54.944Z"
  flags: []
generated:
  at: "2026-10-28T10:42:34.480Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 106172eda94ba2655820b80c1a213b0a2b228cb040840ed52a0144489e2a67cf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-se
    date: null
    commit: 4c1c1638beb6d5da8540cc1f61889b80c7b3356f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/permissionset/1001
    - object/permissionset/1002
    - object/table/5
    - object/table/15
    - object/table/36
    - object/table/37
    - object/table/38
    - object/table/39
    - object/table/49
    - object/table/55
    - object/table/79
    - object/table/81
    - object/table/111
    - object/table/112
    - object/table/113
    - object/table/114
    - object/table/115
    - object/table/121
    - object/table/122
    - object/table/123
    - object/table/124
    - object/table/125
    - object/table/181
    - object/table/256
    - object/table/312
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/sweden
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: SE
version: "29"
w1_version: "29"
added_objects: 82
replaced_objects: 25
removed_objects: 0
added_fields: 32
added_events: 0
learn_folder: LocalFunctionality/Sweden
---

# Sweden (SE)

> Sweden (SE) localization of Business Central 29. It covers SIE import and export of general ledger data, automatic account codes, EU third-party purchase reporting, Swedish balance sheet and income statement reports, PEPPOL 3.0 for Sweden, and Swedish extensions of document reports. It answers what Sweden adds to W1 and where Learn documents it.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/sweden.md) · narrative reviewed (checked by Opus)

## Overview

The Swedish layer centres on the Standard Import Export (SIE) format. Codeunits 5314 to 5318 (Standard Account SIE, Data Handling SIE, SIE Management, Data Check SIE, Generate File SIE), the SIE Setup Wizard page, SIE dimension pages and extensions of the audit file export and G/L account mapping pages support SIE audit file export. Report 5314 Import SIE handles import. Learn documents both the current SIE functions and the dedicated SIE reports of earlier Swedish versions.

Automatic account codes use tables 11203 "Automatic Acc. Header" and 11204 "Automatic Acc. Line" and an Auto. Acc. Group field on G/L accounts, sales and purchase lines, journal lines, posted document lines and posting buffers. EU third-party purchases use an EU 3-Party Trade field on purchase headers, posted purchase invoice and credit memo headers and VAT statement lines. Learn describes VAT statement filtering and the VAT-VIES Declaration Tax Auth report for these transactions, and Sweden adds extensions of the VAT Statement and VAT-VIES declaration reports. Sweden also adds the reports SE Balance sheet and SE Income statement.

Other changes are smaller: Plus Giro number and registered office on Company Information, source invoice fields on sales headers and credit memos, a PEPPOL 3.0 format for Sweden, an Intrastat management codeunit, and Swedish report extensions for sales, purchase, service, reminder and other documents.

## Key points

- SIE import (report Import SIE) and SIE audit file export with a setup wizard, SIE dimensions and G/L account mapping
- Automatic account codes: automatic account groups on journals and sales and purchase documents, with allocation percentages and dimensions
- EU third-party purchase transactions marked with EU 3-Party Trade and reported through VAT statement filtering and the VAT-VIES Declaration Tax Auth report
- SE Balance sheet and SE Income statement reports filtered by date, accounts and global dimensions
- Company Information gains Plus Giro No. and Registered Office; G/L Account gains SRU-code
- PEPPOL 3.0 format for Sweden with party info and subscriber codeunits
- Swedish report extensions for sales, purchase, service, reminder and finance charge documents
- Sales and credit memo headers carry Source Inv. No., Source Inv. VAT and Source Inv. Total

Narrative written by Sonnet from the code diff and 7 Learn page summaries. In numbers: Sweden (SE) localization of Business Central in BC29: 82 objects of its own, 25 W1 objects changed (32 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 6 | 45 | 11 |
| [Purchases](#purchases) | 8 | 11 | 8 |
| [Sales](#sales) | 8 | 8 | 11 |
| [Service](#service) | 0 | 8 | 0 |
| [Peppol](#peppol) | 0 | 4 | 0 |
| [Foundation](#foundation) | 1 | 2 | 2 |
| [Inventory](#inventory) | 0 | 2 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| [(no namespace)](#no-namespace) | 0 | 1 | 0 |
| [CRM](#crm) | 0 | 1 | 0 |

### Finance

Adds SIE import and audit file export (codeunits, setup wizard, dimension pages, import buffers), automatic account tables, SE Balance sheet and SE Income statement reports, and extensions for the VAT Statement and VAT-VIES reports. Also adds role center extensions, company size codes and install/event codeunits.

Why: Learn explains SIE as the Swedish standard import/export format for general ledger data, and the balance sheet and income statement reports are for Swedish authorities and banks.

Objects: [codeunit/5316 "SIE Management"](../objects/codeunit/5316-se.md) (own), [codeunit/5318 "Generate File SIE"](../objects/codeunit/5318-se.md) (own), [page/5314 "SIE Setup Wizard"](../objects/page/5314-se.md) (own), [report/5314 "Import SIE"](../objects/report/5314-se.md) (own), [report/11290 "SE Balance sheet"](../objects/report/11290-se.md) (own), [report/11291 "SE Income statement"](../objects/report/11291-se.md) (own), [table/11203 "Automatic Acc. Header"](../objects/table/11203-se.md) (own), [reportextension/11230 "SE VAT Statement"](../objects/reportextension/11230-se.md) (own).

[All 51 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds EU 3-Party Trade to purchase headers and posted purchase documents, Auto. Acc. Group to purchase lines, and Part. Pay. Nos. to Purchases & Payables Setup. Adds Swedish purchase report layouts and a vendor card extension.

Why: Learn describes EU third-party purchases as purchases from one EU country sent to another without entering Sweden, to be reported separately for VAT.

Objects: [table/38 "Purchase Header"](../objects/table/38.md), [table/122 "Purch. Inv. Header"](../objects/table/122.md), [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md), [table/39 "Purchase Line"](../objects/table/39.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md), [pageextension/11292 "SE Vendor Card"](../objects/pageextension/11292-se.md) (own), [reportextension/11295 "SE Purchase - Invoice"](../objects/reportextension/11295-se.md) (own), [reportextension/11294 "SE Purchase - Credit Memo"](../objects/reportextension/11294-se.md) (own).

[All 19 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds source invoice fields to sales headers and credit memo headers, Auto. Acc. Group to sales lines and posted lines, and a multiple lines description on Finance Charge Terms. Adds Swedish reminder, finance charge, statement and shipment layouts.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/114 "Sales Cr.Memo Header"](../objects/table/114.md), [table/37 "Sales Line"](../objects/table/37.md), [table/113 "Sales Invoice Line"](../objects/table/113.md), [table/5 "Finance Charge Terms"](../objects/table/5.md), [tableextension/11291 "SE Sales & Receivables Setup"](../objects/tableextension/11291-se.md) (own), [reportextension/11211 "SE Reminder"](../objects/reportextension/11211-se.md) (own), [reportextension/11292 "SE Finance Charge Memo"](../objects/reportextension/11292-se.md) (own).

[All 16 objects of Sales in the diff](?ns=Sales#country-diff)

### Service

Provides Swedish layouts for service orders, quotes, invoices, credit memos, shipments and service contracts through report extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [reportextension/11217 "SE Service Order"](../objects/reportextension/11217-se.md) (own), [reportextension/11216 "SE Service - Invoice"](../objects/reportextension/11216-se.md) (own), [reportextension/11215 "SE Service - Credit Memo"](../objects/reportextension/11215-se.md) (own), [reportextension/11218 "SE Service Quote"](../objects/reportextension/11218-se.md) (own), [reportextension/11225 "SE Service Contract"](../objects/reportextension/11225-se.md) (own), [reportextension/11226 "SE Service Contract Quote"](../objects/reportextension/11226-se.md) (own), [reportextension/11227 "SE Ser. Contract Quote-Detail"](../objects/reportextension/11227-se.md) (own), [reportextension/11219 "SE Service - Shipment"](../objects/reportextension/11219-se.md) (own).

[All 8 objects of Service in the diff](?ns=Service#country-diff)

### Peppol

Adds a PEPPOL 3.0 format for Sweden through an enum extension, with codeunits for party information, event subscribers and initialization.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [enumextension/37450 "PEPPOL 3.0 Format SE"](../objects/enumextension/37450-se.md) (own), [codeunit/37451 "PEPPOL30 SE Party Info"](../objects/codeunit/37451-se.md) (own), [codeunit/37452 "PEPPOL30 SE Subscribers"](../objects/codeunit/37452-se.md) (own), [codeunit/37453 "PEPPOL30 SE Initialize"](../objects/codeunit/37453-se.md) (own).

[All 4 objects of Peppol in the diff](?ns=Peppol#country-diff)

### Foundation

Adds Plus Giro No. and Registered Office to Company Information, with a table extension and page extension showing them.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [tableextension/11290 "SE Company Information"](../objects/tableextension/11290-se.md) (own), [pageextension/11294 "SE Company Information"](../objects/pageextension/11294-se.md) (own).

[All 3 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Inventory

Adds an Intrastat report management codeunit for Sweden and a permission set extension for it.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11298 "IntrastatReportManagementSE"](../objects/codeunit/11298-se.md) (own), [permissionsetextension/11298 "Intrastat SE - Objects"](../objects/permissionsetextension/11298-se.md) (own).

[All 2 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Security

Changes the W1 LOCAL and LOCAL READ permission sets to cover the Swedish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### (no namespace)

Extends the G/L Account Mapping Card page with SIE mapping information.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/5326 "G/L Account Mapping Card SIE"](../objects/pageextension/5326-se.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### CRM

Provides a Swedish layout for the Contact Cover Sheet report.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [reportextension/11220 "SE Contact - Cover Sheet"](../objects/reportextension/11220-se.md) (own).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 1 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 1 properties |
| [table/5 "Finance Charge Terms"](../objects/table/5.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +2 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +3 fields |
| [table/37 "Sales Line"](../objects/table/37.md) | +1 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +1 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +1 fields |
| [table/49 "Invoice Post. Buffer"](../objects/table/49.md) | +2 fields |
| [table/55 "Invoice Posting Buffer"](../objects/table/55.md) | +2 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +2 fields, 3 fields changed |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +2 fields |
| [table/111 "Sales Shipment Line"](../objects/table/111.md) | +1 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | body changes only |
| [table/113 "Sales Invoice Line"](../objects/table/113.md) | +1 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +3 fields |
| [table/115 "Sales Cr.Memo Line"](../objects/table/115.md) | +1 fields |
| [table/121 "Purch. Rcpt. Line"](../objects/table/121.md) | +1 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +1 fields |
| [table/123 "Purch. Inv. Line"](../objects/table/123.md) | +1 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +1 fields |
| [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +2 fields |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields |
| [table/312 "Purchases & Payables Setup"](../objects/table/312.md) | +1 fields |

## Objects of its own

82 objects only this country has.

- [codeunit/5314 "Standard Account SIE"](../objects/codeunit/5314-se.md)
- [codeunit/5315 "Data Handling SIE"](../objects/codeunit/5315-se.md)
- [codeunit/5316 "SIE Management"](../objects/codeunit/5316-se.md)
- [codeunit/5317 "Data Check SIE"](../objects/codeunit/5317-se.md)
- [codeunit/5318 "Generate File SIE"](../objects/codeunit/5318-se.md)
- [codeunit/11294 "Import Company Size Codes"](../objects/codeunit/11294-se.md)
- [codeunit/11295 "Install SE Core"](../objects/codeunit/11295-se.md)
- [codeunit/11296 "SECore Event Subscribers"](../objects/codeunit/11296-se.md)
- [codeunit/11297 "SECore InitReport Subscribers"](../objects/codeunit/11297-se.md)
- [codeunit/11298 "IntrastatReportManagementSE"](../objects/codeunit/11298-se.md)
- [codeunit/37451 "PEPPOL30 SE Party Info"](../objects/codeunit/37451-se.md)
- [codeunit/37452 "PEPPOL30 SE Subscribers"](../objects/codeunit/37452-se.md)
- [codeunit/37453 "PEPPOL30 SE Initialize"](../objects/codeunit/37453-se.md)
- [enum/5314 "File Type SIE"](../objects/enum/5314-se.md)
- [enumextension/5314 "Standard Account Type SIE"](../objects/enumextension/5314-se.md)
- [enumextension/5315 "Audit File Export Format SIE"](../objects/enumextension/5315-se.md)
- [enumextension/37450 "PEPPOL 3.0 Format SE"](../objects/enumextension/37450-se.md)
- [page/5314 "SIE Setup Wizard"](../objects/page/5314-se.md)
- [page/5315 "Dimensions SIE"](../objects/page/5315-se.md)
- [page/5316 "Temp Dimension Selection SIE"](../objects/page/5316-se.md)
- [pageextension/5314 "Audit Export Doc. Card SIE"](../objects/pageextension/5314-se.md)
- [pageextension/5315 "Audit Export Format Setup SIE"](../objects/pageextension/5315-se.md)
- [pageextension/5316 "Audit File Export Setup SIE"](../objects/pageextension/5316-se.md)
- [pageextension/5318 "G/L Acc. Mapping Subpage SIE"](../objects/pageextension/5318-se.md)
- [pageextension/5326 "G/L Account Mapping Card SIE"](../objects/pageextension/5326-se.md)
- [pageextension/11290 "SE CEO and President RC"](../objects/pageextension/11290-se.md)
- [pageextension/11291 "SE Small Business Owner RC"](../objects/pageextension/11291-se.md)
- [pageextension/11292 "SE Vendor Card"](../objects/pageextension/11292-se.md)
- [pageextension/11293 "SE Accounting Manager RC"](../objects/pageextension/11293-se.md)
- [pageextension/11294 "SE Company Information"](../objects/pageextension/11294-se.md)
- [pageextension/11295 "SE Company Sizes"](../objects/pageextension/11295-se.md)
- [permissionset/5314 "SIE - Read"](../objects/permissionset/5314-se.md)
- [permissionset/5315 "SIE - Edit"](../objects/permissionset/5315-se.md)
- [permissionset/5316 "SIE - Objects"](../objects/permissionset/5316-se.md)
- [permissionset/11210 "SECore - Objects"](../objects/permissionset/11210-se.md)
- [permissionsetextension/5314 "D365 BASIC ISV - SIE"](../objects/permissionsetextension/5314-se.md)
- [permissionsetextension/5315 "D365 BASIC - SIE"](../objects/permissionsetextension/5315-se.md)
- [permissionsetextension/5316 "D365 READ - SIE"](../objects/permissionsetextension/5316-se.md)
- [permissionsetextension/5317 "D365 TEAM MEMBER - SIE"](../objects/permissionsetextension/5317-se.md)
- [permissionsetextension/5318 "INTELLIGENT CLOUD - SIE"](../objects/permissionsetextension/5318-se.md)
- [permissionsetextension/5319 "LOCAL - SIE"](../objects/permissionsetextension/5319-se.md)
- [permissionsetextension/11298 "Intrastat SE - Objects"](../objects/permissionsetextension/11298-se.md)
- [report/5314 "Import SIE"](../objects/report/5314-se.md)
- [report/11290 "SE Balance sheet"](../objects/report/11290-se.md)
- [report/11291 "SE Income statement"](../objects/report/11291-se.md)
- [reportextension/11210 "SE Purchase - Receipt"](../objects/reportextension/11210-se.md)
- [reportextension/11211 "SE Reminder"](../objects/reportextension/11211-se.md)
- [reportextension/11212 "SE Return Order Confirmation"](../objects/reportextension/11212-se.md)
- [reportextension/11213 "SE Sales - Shipment"](../objects/reportextension/11213-se.md)
- [reportextension/11214 "SE Return Order"](../objects/reportextension/11214-se.md)
- [reportextension/11215 "SE Service - Credit Memo"](../objects/reportextension/11215-se.md)
- [reportextension/11216 "SE Service - Invoice"](../objects/reportextension/11216-se.md)
- [reportextension/11217 "SE Service Order"](../objects/reportextension/11217-se.md)
- [reportextension/11218 "SE Service Quote"](../objects/reportextension/11218-se.md)
- [reportextension/11219 "SE Service - Shipment"](../objects/reportextension/11219-se.md)
- [reportextension/11220 "SE Contact - Cover Sheet"](../objects/reportextension/11220-se.md)
- [reportextension/11221 "SE Finance Charge Memo - Test"](../objects/reportextension/11221-se.md)
- [reportextension/11222 "SE Purchase - Return Shipment"](../objects/reportextension/11222-se.md)
- [reportextension/11223 "SE Sales - Return Receipt"](../objects/reportextension/11223-se.md)
- [reportextension/11224 "SE Reminder - Test"](../objects/reportextension/11224-se.md)
- [reportextension/11225 "SE Service Contract"](../objects/reportextension/11225-se.md)
- [reportextension/11226 "SE Service Contract Quote"](../objects/reportextension/11226-se.md)
- [reportextension/11227 "SE Ser. Contract Quote-Detail"](../objects/reportextension/11227-se.md)
- [reportextension/11228 "SE Statement"](../objects/reportextension/11228-se.md)
- [reportextension/11229 "SE VAT VIES Decl. Tax Auth"](../objects/reportextension/11229-se.md)
- [reportextension/11230 "SE VAT Statement"](../objects/reportextension/11230-se.md)
- [reportextension/11290 "SE Blanket Purchase Order"](../objects/reportextension/11290-se.md)
- [reportextension/11291 "SE Blanket Sales Order"](../objects/reportextension/11291-se.md)
- [reportextension/11292 "SE Finance Charge Memo"](../objects/reportextension/11292-se.md)
- [reportextension/11293 "SE Order"](../objects/reportextension/11293-se.md)
- [reportextension/11294 "SE Purchase - Credit Memo"](../objects/reportextension/11294-se.md)
- [reportextension/11295 "SE Purchase - Invoice"](../objects/reportextension/11295-se.md)
- [reportextension/11296 "SE Purchase - Quote"](../objects/reportextension/11296-se.md)
- [table/5314 "Import Buffer SIE"](../objects/table/5314-se.md)
- [table/5315 "Dimension SIE"](../objects/table/5315-se.md)
- [table/11203 "Automatic Acc. Header"](../objects/table/11203-se.md)
- [table/11204 "Automatic Acc. Line"](../objects/table/11204-se.md)
- [table/11207 "SIE Dimension"](../objects/table/11207-se.md)
- [table/11208 "SIE Import Buffer"](../objects/table/11208-se.md)
- [tableextension/5314 "Audit File Export Header SIE"](../objects/tableextension/5314-se.md)
- [tableextension/11290 "SE Company Information"](../objects/tableextension/11290-se.md)
- [tableextension/11291 "SE Sales & Receivables Setup"](../objects/tableextension/11291-se.md)

## Other versions

- BC30: 107 objects differ from W1 (32 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
