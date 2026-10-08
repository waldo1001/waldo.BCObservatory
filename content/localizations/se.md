---
id: localization/se
type: localization
title: Sweden (SE)
summary: Sweden (SE) localization of Business Central 29. It covers SIE import and export of general ledger data, automatic account codes, EU third-party purchase trade for VAT and VIES, Swedish balance sheet and income statement reports, PEPPOL 3.0 additions, and Swedish-layout document reports.
tier: official
language: en
tags:
  - localization
  - se
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:30:38.215Z"
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 46eb480a94f6e34b2eba2e8ab341f2161ba66f8f6d2e4e03e4f7e0a2b490403a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-se
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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

> Sweden (SE) localization of Business Central 29. It covers SIE import and export of general ledger data, automatic account codes, EU third-party purchase trade for VAT and VIES, Swedish balance sheet and income statement reports, PEPPOL 3.0 additions, and Swedish-layout document reports.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/sweden.md) · narrative reviewed (checked by Opus)

## Overview

The Swedish layer runs as an extension on the W1 base application. Its main capabilities are SIE import and export (codeunits 5314 to 5318, report 5314 "Import SIE", page 5314 "SIE Setup Wizard", dimension pages and SIE tables), automatic account codes (tables 11203 and 11204 plus an "Auto. Acc. Group" field on G/L accounts, journal, sales and purchase lines), and EU third-party purchase trade.

Local reports include "SE Balance sheet" and "SE Income statement", plus report extensions for the VAT statement, VIES declaration and many sales, purchase and service documents. The code adds fields to W1 tables, for example "Plus Giro No." and "Registered Office" on Company Information, "EU 3-Party Trade" on purchase headers, and "Source Inv. No.", "Source Inv. VAT" and "Source Inv. Total" on sales headers. It also adds PEPPOL 3.0 subscribers and a Swedish format value, and an Intrastat management codeunit. Learn documents the SIE, automatic account, EU third-party and financial report topics under the "Sweden Local Functionality [SE]" overview.

## Key points

- SIE import and export of general ledger data with selectable dimensions and file types, set up through a wizard and integrated with audit file export setup.
- Automatic account codes and automatic account posting groups, with the Auto. Acc. Group field on G/L accounts and on journal, sales and purchase lines.
- EU 3-Party Trade on purchase documents and VAT statement lines supports Swedish VAT reporting and VIES declaration.
- Swedish Balance sheet and Income statement reports for banks and authorities.
- Source invoice fields on sales credit memos and an SRU code on G/L accounts.
- Company Information gets Plus Giro No. and Registered Office; Finance Charge Terms gets a multiple lines description option.
- PEPPOL 3.0 Swedish format with party info and subscribers; Swedish Intrastat management codeunit.
- SIE permission sets and extensions of standard permission sets, plus Swedish layouts for sales, purchase, service and reminder documents.

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

Adds SIE import and export (codeunits for standard accounts, data handling, checks and file generation, a setup wizard, dimension pages, an import report and an export format option), Swedish Balance sheet and Income statement reports, and automatic account tables. Also extends the VAT statement and VIES declaration reports and adds install and company size code handling.

Why: Learn describes SIE as the way to import and export general ledger data, and the balance sheet and income statement reports as the ones submitted to banks and authorities.

Objects: [codeunit/5316 "SIE Management"](../objects/codeunit/5316-se.md) (own), [codeunit/5318 "Generate File SIE"](../objects/codeunit/5318-se.md) (own), [report/5314 "Import SIE"](../objects/report/5314-se.md) (own), [page/5314 "SIE Setup Wizard"](../objects/page/5314-se.md) (own), [report/11290 "SE Balance sheet"](../objects/report/11290-se.md) (own), [report/11291 "SE Income statement"](../objects/report/11291-se.md) (own), [table/11203 "Automatic Acc. Header"](../objects/table/11203-se.md) (own), [table/11204 "Automatic Acc. Line"](../objects/table/11204-se.md) (own).

[All 51 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds EU 3-Party Trade to purchase headers and posted invoice and credit memo headers, Auto. Acc. Group on purchase lines, and Part. Pay. Nos. on Purchases & Payables Setup. Adds a vendor card page extension and Swedish layouts for purchase documents.

Why: Learn explains EU third-party purchase transactions as a setup for Swedish VAT reporting and VIES requirements.

Objects: [table/38 "Purchase Header"](../objects/table/38.md), [table/39 "Purchase Line"](../objects/table/39.md), [table/122 "Purch. Inv. Header"](../objects/table/122.md), [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md), [pageextension/11292 "SE Vendor Card"](../objects/pageextension/11292-se.md) (own), [reportextension/11295 "SE Purchase - Invoice"](../objects/reportextension/11295-se.md) (own), [reportextension/11294 "SE Purchase - Credit Memo"](../objects/reportextension/11294-se.md) (own).

[All 19 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds source invoice fields (number, VAT, total) to sales headers and credit memo headers and Auto. Acc. Group to sales lines. Finance Charge Terms gets a multiple lines description field, and reminder, finance charge memo, statement and shipment reports get Swedish extensions.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/114 "Sales Cr.Memo Header"](../objects/table/114.md), [table/37 "Sales Line"](../objects/table/37.md), [table/5 "Finance Charge Terms"](../objects/table/5.md), [tableextension/11291 "SE Sales & Receivables Setup"](../objects/tableextension/11291-se.md) (own), [reportextension/11211 "SE Reminder"](../objects/reportextension/11211-se.md) (own), [reportextension/11292 "SE Finance Charge Memo"](../objects/reportextension/11292-se.md) (own), [reportextension/11228 "SE Statement"](../objects/reportextension/11228-se.md) (own).

[All 16 objects of Sales in the diff](?ns=Sales#country-diff)

### Service

Swedish report extensions for service orders, quotes, invoices, credit memos, shipments and service contracts.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [reportextension/11217 "SE Service Order"](../objects/reportextension/11217-se.md) (own), [reportextension/11216 "SE Service - Invoice"](../objects/reportextension/11216-se.md) (own), [reportextension/11215 "SE Service - Credit Memo"](../objects/reportextension/11215-se.md) (own), [reportextension/11218 "SE Service Quote"](../objects/reportextension/11218-se.md) (own), [reportextension/11219 "SE Service - Shipment"](../objects/reportextension/11219-se.md) (own), [reportextension/11225 "SE Service Contract"](../objects/reportextension/11225-se.md) (own), [reportextension/11226 "SE Service Contract Quote"](../objects/reportextension/11226-se.md) (own), [reportextension/11227 "SE Ser. Contract Quote-Detail"](../objects/reportextension/11227-se.md) (own).

[All 8 objects of Service in the diff](?ns=Service#country-diff)

### Peppol

Adds PEPPOL 3.0 Swedish support: a format enum extension, party info, subscribers and an initialize codeunit.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [enumextension/37450 "PEPPOL 3.0 Format SE"](../objects/enumextension/37450-se.md) (own), [codeunit/37451 "PEPPOL30 SE Party Info"](../objects/codeunit/37451-se.md) (own), [codeunit/37452 "PEPPOL30 SE Subscribers"](../objects/codeunit/37452-se.md) (own), [codeunit/37453 "PEPPOL30 SE Initialize"](../objects/codeunit/37453-se.md) (own).

[All 4 objects of Peppol in the diff](?ns=Peppol#country-diff)

### Foundation

Adds Plus Giro No. and Registered Office to Company Information, with a table extension and a page extension showing them.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md), [tableextension/11290 "SE Company Information"](../objects/tableextension/11290-se.md) (own), [pageextension/11294 "SE Company Information"](../objects/pageextension/11294-se.md) (own).

[All 3 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Inventory

Adds a Swedish Intrastat report management codeunit and a permission set extension for it.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/11298 "IntrastatReportManagementSE"](../objects/codeunit/11298-se.md) (own), [permissionsetextension/11298 "Intrastat SE - Objects"](../objects/permissionsetextension/11298-se.md) (own).

[All 2 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Security

Changes the W1 LOCAL and LOCAL READ permission sets for the Swedish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### (no namespace)

Extends the G/L Account Mapping card with SIE-related fields.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [pageextension/5326 "G/L Account Mapping Card SIE"](../objects/pageextension/5326-se.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### CRM

Adds a Swedish layout extension for the Contact Cover Sheet report.

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
