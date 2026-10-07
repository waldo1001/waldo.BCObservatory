---
id: localization/se
type: localization
title: Sweden (SE)
summary: Sweden (SE) localization of Business Central 29. It covers automatic account codes, EU third-party purchase transactions for VAT and VIES, SIE import and export of general ledger data, and Swedish balance sheet and income statement reports. It answers which tables and fields the Swedish layer adds.
tier: official
language: en
tags:
  - localization
  - se
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
  input_hash: 9db14714c96ec49f048a9441747399cb53ad431545fc735e0d6e6fe2632a5fd6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-se
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

> Sweden (SE) localization of Business Central 29. It covers automatic account codes, EU third-party purchase transactions for VAT and VIES, SIE import and export of general ledger data, and Swedish balance sheet and income statement reports. It answers which tables and fields the Swedish layer adds.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/sweden.md) · narrative **unreviewed** (machine-written)

## Overview

The Swedish layer adds four own tables and 32 fields on W1 tables. Automatic account codes use table 11203 "Automatic Acc. Header" and table 11204 "Automatic Acc. Line", with an "Auto. Acc. Group" field carried through sales, purchase, journal and posted document lines and the posting buffers. SIE import and export uses table 11207 "SIE Dimension" and table 11208 "SIE Import Buffer".

EU third-party trade is supported by an "EU 3-Party Trade" field on purchase headers, posted purchase invoice and credit memo headers, and VAT statement lines. Other additions are SRU-code on G/L accounts, source invoice fields on sales credit memos, "Plus Giro No." and "Registered Office" on company information, and two local permission sets.

Learn documents the local functionality on the Sweden Local Functionality page. It notes that the Swedish localization runs as an extension on the W1 base application from 2023 wave 1. Automatic account codes and EU third-party purchases moved to extensions from version 22.1. SIE is a preinstalled extension that needs the feature enabled.

## Key points

- Automatic account codes assign accounts during posting. Setup is through automatic account posting groups, with tables 11203 and 11204.
- The Auto. Acc. Group field is added to G/L accounts, sales and purchase lines, journal lines and posted lines.
- EU 3-Party Trade fields on purchase documents and VAT statement lines support Swedish VAT reporting and VIES.
- SIE import and export of general ledger data supports dimensions and file types: year-end, periodic and object balances.
- Swedish balance sheet and income statement reports can be printed for banks and authorities, with account filtering and a show all accounts option.
- Company Information gains Plus Giro No. and Registered Office. G/L Account gains SRU-code.
- Sales headers and credit memo headers gain Source Inv. No., Source Inv. VAT and Source Inv. Total.
- Permission sets LOCAL and LOCAL READ are replaced for Sweden.

Narrative written by Sonnet from the code diff and 7 Learn page summaries. In numbers: Sweden (SE) localization of Business Central in BC29: 82 objects of its own, 25 W1 objects changed (32 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 6 | 45 | 11 |
| [Purchases](#purchases) | 8 | 11 | 8 |
| [Sales](#sales) | 8 | 8 | 11 |
| Service | 0 | 8 | 0 |
| Peppol | 0 | 4 | 0 |
| [Foundation](#foundation) | 1 | 2 | 2 |
| Inventory | 0 | 2 | 0 |
| [Security](#security) | 2 | 0 | 0 |
| (no namespace) | 0 | 1 | 0 |
| CRM | 0 | 1 | 0 |

### Finance

Adds the automatic account tables (table 11203 "Automatic Acc. Header", table 11204 "Automatic Acc. Line") and the SIE tables (table 11207 "SIE Dimension", table 11208 "SIE Import Buffer"). Adds Auto. Acc. Group, SRU-code, Source Posting Date, VAT Base Amount (LCY) and EU 3-Party Trade fields to G/L accounts, journal lines, posting buffers and VAT statement lines.

Why: Learn describes automatic account codes as assigning accounts during posting. It describes SIE as the standard import export format for general ledger data. EU 3-Party Trade supports Swedish VAT reporting and VIES.

Objects: [table/11203 "Automatic Acc. Header"](../objects/table/11203-se.md) (own), [table/11204 "Automatic Acc. Line"](../objects/table/11204-se.md) (own), [table/11207 "SIE Dimension"](../objects/table/11207-se.md) (own), [table/11208 "SIE Import Buffer"](../objects/table/11208-se.md) (own), [table/15 "G/L Account"](../objects/table/15.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/181 "Posted Gen. Journal Line"](../objects/table/181.md), [table/256 "VAT Statement Line"](../objects/table/256.md).

[All 51 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds EU 3-Party Trade to purchase headers and posted purchase invoice and credit memo headers. Adds Auto. Acc. Group to purchase lines and posted lines, and Part. Pay. Nos. to Purchases & Payables Setup.

Why: Learn says the EU third-party purchase setup is for Swedish VAT reporting and VIES requirements.

Objects: [table/38 "Purchase Header"](../objects/table/38.md), [table/39 "Purchase Line"](../objects/table/39.md), [table/122 "Purch. Inv. Header"](../objects/table/122.md), [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md), [table/123 "Purch. Inv. Line"](../objects/table/123.md), [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md), [table/121 "Purch. Rcpt. Line"](../objects/table/121.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 19 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Auto. Acc. Group to sales lines and posted shipment, invoice and credit memo lines. Adds Source Inv. No., Source Inv. VAT and Source Inv. Total to sales headers and credit memo headers, and Multiple Lines Description to Finance Charge Terms.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/114 "Sales Cr.Memo Header"](../objects/table/114.md), [table/37 "Sales Line"](../objects/table/37.md), [table/113 "Sales Invoice Line"](../objects/table/113.md), [table/115 "Sales Cr.Memo Line"](../objects/table/115.md), [table/111 "Sales Shipment Line"](../objects/table/111.md), [table/5 "Finance Charge Terms"](../objects/table/5.md), [table/112 "Sales Invoice Header"](../objects/table/112.md).

[All 16 objects of Sales in the diff](?ns=Sales#country-diff)

### Foundation

Adds Plus Giro No. and Registered Office fields to Company Information.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md).

[All 3 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Security

Replaces the LOCAL and LOCAL READ permission sets so they cover the Swedish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

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

- BC30: 29 objects differ from W1 (32 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
