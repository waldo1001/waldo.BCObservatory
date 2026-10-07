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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts:
    hub-localization: 2
  input_hash: 9eb4173f3a353ba0a57da897f0a16a7dbc856067e94d598a3669e4263e7901a8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-se
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
added_objects: 4
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

Narrative written by Sonnet from the code diff and 7 Learn page summaries. In numbers: Sweden (SE) localization of Business Central in BC29: 4 objects of its own, 25 W1 objects changed (32 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Finance](#finance) | 6 | 4 | 11 |
| [Purchases](#purchases) | 8 | 0 | 8 |
| [Sales](#sales) | 8 | 0 | 11 |
| [Security](#security) | 2 | 0 | 0 |
| [Foundation](#foundation) | 1 | 0 | 2 |

### Finance

Adds the automatic account tables (table 11203 "Automatic Acc. Header", table 11204 "Automatic Acc. Line") and the SIE tables (table 11207 "SIE Dimension", table 11208 "SIE Import Buffer"). Adds Auto. Acc. Group, SRU-code, Source Posting Date, VAT Base Amount (LCY) and EU 3-Party Trade fields to G/L accounts, journal lines, posting buffers and VAT statement lines.

Why: Learn describes automatic account codes as assigning accounts during posting. It describes SIE as the standard import export format for general ledger data. EU 3-Party Trade supports Swedish VAT reporting and VIES.

Objects: table/11203 "Automatic Acc. Header" (own), table/11204 "Automatic Acc. Line" (own), table/11207 "SIE Dimension" (own), table/11208 "SIE Import Buffer" (own), [table/15 "G/L Account"](../objects/table/15.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/181 "Posted Gen. Journal Line"](../objects/table/181.md), [table/256 "VAT Statement Line"](../objects/table/256.md).

[All 10 objects of Finance in the diff](?ns=Finance#country-diff)

### Purchases

Adds EU 3-Party Trade to purchase headers and posted purchase invoice and credit memo headers. Adds Auto. Acc. Group to purchase lines and posted lines, and Part. Pay. Nos. to Purchases & Payables Setup.

Why: Learn says the EU third-party purchase setup is for Swedish VAT reporting and VIES requirements.

Objects: [table/38 "Purchase Header"](../objects/table/38.md), [table/39 "Purchase Line"](../objects/table/39.md), [table/122 "Purch. Inv. Header"](../objects/table/122.md), [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md), [table/123 "Purch. Inv. Line"](../objects/table/123.md), [table/125 "Purch. Cr. Memo Line"](../objects/table/125.md), [table/121 "Purch. Rcpt. Line"](../objects/table/121.md), [table/312 "Purchases & Payables Setup"](../objects/table/312.md).

[All 8 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Sales

Adds Auto. Acc. Group to sales lines and posted shipment, invoice and credit memo lines. Adds Source Inv. No., Source Inv. VAT and Source Inv. Total to sales headers and credit memo headers, and Multiple Lines Description to Finance Charge Terms.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/36 "Sales Header"](../objects/table/36.md), [table/114 "Sales Cr.Memo Header"](../objects/table/114.md), [table/37 "Sales Line"](../objects/table/37.md), [table/113 "Sales Invoice Line"](../objects/table/113.md), [table/115 "Sales Cr.Memo Line"](../objects/table/115.md), [table/111 "Sales Shipment Line"](../objects/table/111.md), [table/5 "Finance Charge Terms"](../objects/table/5.md), [table/112 "Sales Invoice Header"](../objects/table/112.md).

[All 8 objects of Sales in the diff](?ns=Sales#country-diff)

### Security

Replaces the LOCAL and LOCAL READ permission sets so they cover the Swedish objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### Foundation

Adds Plus Giro No. and Registered Office fields to Company Information.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/79 "Company Information"](../objects/table/79.md).

[All 1 objects of Foundation in the diff](?ns=Foundation#country-diff)

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

Country-only objects have no object page yet (their ids repeat across countries).

- table/11203 "Automatic Acc. Header"
- table/11204 "Automatic Acc. Line"
- table/11207 "SIE Dimension"
- table/11208 "SIE Import Buffer"

## Other versions

- BC30: 29 objects differ from W1 (32 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
