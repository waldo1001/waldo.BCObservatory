---
id: localization/nl
type: localization
title: Netherlands (NL)
summary: "Netherlands (NL) localization of Business Central in BC29: 144 objects of its own, 51 W1 objects changed (161 fields and 9 events added). From the code; country apps outside the Base Application are not included yet."
tier: official
language: en
tags:
  - localization
  - nl
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:22:15.880Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d968ccdb7d1f2d06c488da2f3fe331e300f85db79ac4b743f12407b10e57ef84
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-nl
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/230
    - object/codeunit/426
    - object/codeunit/1220
    - object/codeunit/1221
    - object/codeunit/1222
    - object/codeunit/1262
    - object/codeunit/104000
    - object/dotnet/unnamed
    - object/enum/89
    - object/page/49
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/12
    - object/table/9
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/21
    - object/table/23
    - object/table/25
    - object/table/36
    - object/table/38
    - object/table/39
    - object/table/79
    - object/table/80
    - object/table/81
    - object/table/98
    - object/table/112
    - object/table/114
    - object/table/122
    - object/table/124
    - object/table/181
    - object/table/242
    - object/table/254
    - object/table/256
    - object/table/262
    - object/table/263
    - object/table/270
    - object/table/277
    - object/table/287
    - object/table/288
    - object/table/311
    - object/table/381
    - object/table/1226
    - object/table/1228
    - object/table/1381
    - object/table/1383
    - object/table/5200
    - object/table/5222
    - object/xmlport/1000
    - object/xmlport/1001
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/netherlands
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: NL
version: "29"
w1_version: "29"
added_objects: 144
replaced_objects: 51
removed_objects: 0
added_fields: 161
added_events: 9
learn_folder: LocalFunctionality/Netherlands
---

# Netherlands (NL)

> Netherlands (NL) localization of Business Central in BC29: 144 objects of its own, 51 W1 objects changed (161 fields and 9 events added). From the code; country apps outside the Base Application are not included yet.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/netherlands.md)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/230 "GenJnlManagement"](../objects/codeunit/230.md) | +4 procedures |
| [codeunit/426 "Payment Tolerance Management"](../objects/codeunit/426.md) | +1 events, +1 procedures |
| [codeunit/1220 "SEPA CT-Export File"](../objects/codeunit/1220.md) | +1 procedures |
| [codeunit/1221 "SEPA CT-Fill Export Buffer"](../objects/codeunit/1221.md) | +1 events |
| [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md) | +4 procedures |
| [codeunit/1262 "Pre & Post Process XML Import"](../objects/codeunit/1262.md) | +1 procedures |
| [codeunit/104000 "Upgrade - BaseApp"](../objects/codeunit/104000.md) | +3 procedures, 1 properties |
| [dotnet/ ""](../objects/dotnet/unnamed.md) | body changes only |
| [enum/89 "Gen. Journal Template Type"](../objects/enum/89.md) | body changes only |
| [page/49 "Purchase Quote"](../objects/page/49.md) | +1 events, +1 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/12 "VAT Statement"](../objects/report/12.md) | +1 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +6 fields |
| [table/18 "Customer"](../objects/table/18.md) | +1 fields, +2 events, +1 procedures |
| [table/21 "Cust. Ledger Entry"](../objects/table/21.md) | +5 fields |
| [table/23 "Vendor"](../objects/table/23.md) | +1 fields, +2 events, +1 procedures |
| [table/25 "Vendor Ledger Entry"](../objects/table/25.md) | +5 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +2 fields |
| [table/38 "Purchase Header"](../objects/table/38.md) | +2 fields |
| [table/39 "Purchase Line"](../objects/table/39.md) | +1 fields |
| [table/79 "Company Information"](../objects/table/79.md) | +1 fields, 3 fields changed, +1 procedures |
| [table/80 "Gen. Journal Template"](../objects/table/80.md) | +1 fields |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +1 fields, +1 procedures |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +4 fields |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +2 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +2 fields |
| [table/122 "Purch. Inv. Header"](../objects/table/122.md) | +2 fields |
| [table/124 "Purch. Cr. Memo Hdr."](../objects/table/124.md) | +2 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +1 fields |
| [table/242 "Source Code Setup"](../objects/table/242.md) | +82 fields, 5 properties |
| [table/254 "VAT Entry"](../objects/table/254.md) | body changes only |
| [table/256 "VAT Statement Line"](../objects/table/256.md) | +1 fields, +1 events, +1 procedures |
| [table/262 "Intrastat Jnl. Batch"](../objects/table/262.md) | +2 fields |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | 2 fields changed |
| [table/270 "Bank Account"](../objects/table/270.md) | +8 fields, 2 fields changed, +1 procedures |
| [table/277 "Bank Account Posting Group"](../objects/table/277.md) | +1 fields |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +8 fields, 2 fields changed, +5 procedures |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +7 fields, 2 fields changed |
| [table/311 "Sales & Receivables Setup"](../objects/table/311.md) | +1 fields |
| [table/381 "VAT Registration No. Format"](../objects/table/381.md) | +1 events, +3 procedures |
| [table/1226 "Payment Export Data"](../objects/table/1226.md) | 1 fields changed, +1 procedures |
| [table/1228 "Payment Jnl. Export Error Text"](../objects/table/1228.md) | 1 fields changed |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +1 fields, 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/5200 "Employee"](../objects/table/5200.md) | +3 fields, 2 fields changed |
| [table/5222 "Employee Ledger Entry"](../objects/table/5222.md) | +5 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | 1 properties |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | 1 properties |

## Objects of its own

Country-only objects have no object page yet (their ids repeat across countries).

- codeunit/1883 "Sandbox Cleanup local"
- codeunit/9997 "Upgrade Tag Def - Country"
- codeunit/11400 "Local Functionality Mgt."
- codeunit/11401 "Post Code Management"
- codeunit/11402 "Post Code Lookup - Table"
- codeunit/11404 "Import SEPA CAMT"
- codeunit/11405 "Process CBG Statement Lines"
- codeunit/11406 "Imp. SEPA CAMT Pre-Mapping"
- codeunit/11407 "Imp. SEPA CAMT Post-Mapping"
- codeunit/11408 "Imp. Bank Trans. Data Updates"
- codeunit/11409 "Elec. Tax Declaration Mgt."
- codeunit/11411 "Serv. Post Code Mgt."
- codeunit/11412 "Serv. Document Mgt. NL"
- codeunit/104170 "UPG SEPA NL"
- codeunit/104171 "Elec. Tax. Decl. Upgrade"
- codeunit/11000000 "Process Proposal Lines"
- codeunit/11000001 "Financial Interface Telebank"
- codeunit/11000002 "CBG Journal Telebank Interface"
- codeunit/11000005 "Import Protocol Management"
- codeunit/11000006 "CBG Statement Reconciliation"
- codeunit/11000007 "Check BTL91"
- codeunit/11000008 "Check BBV"
- codeunit/11000009 "Check PAYMUL"
- codeunit/11000010 "Check SEPA ISO20022"
- codeunit/11000011 "Check SEPA Pain 008.001.02"
- codeunit/11000012 "Report Checksum"
- codeunit/11000052 "Digipoort Onprem Communication"
- codeunit/11000053 "Digipoort SaaS Communication"
- codeunit/11000054 "Digipoort Communication"
- enum/11409 "Elec. Tax Declaration Period"
- enum/11000006 "CBG Statement Information Type"
- enum/11000007 "CBG Statement Line Account Type"
- interface/digipoort communication "DigiPoort Communication"
- page/11400 "Bank/Giro Journal"
- page/11401 "Bank/Giro Journal Subform"
- page/11402 "Bank/Giro Journal List"
- page/11403 "Cash Journal"
- page/11404 "Cash Journal Subform"
- page/11405 "Cash Journal List"
- page/11406 "Freely Transferable Maximums"
- page/11407 "Post Code Ranges"
- page/11408 "Post Code Updates"
- page/11409 "Gen. Journal Templ. List (CBG)"
- page/11410 "Elec. Tax Declaration Setup"
- page/11411 "Elec. Tax Declaration Card"
- page/11412 "Elec. Tax Declaration List"
- page/11413 "Elec. Tax Decl. Line Subform"
- page/11414 "Elec. Tax Decl. VAT Categ."
- page/11415 "Elec. Tax Decl. Error Log"
- page/11416 "Elec. Tax Decl. Response Msgs."
- page/35001 "Bank/Giro Jnl. Subf. Info"
- page/11000000 "Telebank - Bank Overview"
- page/11000001 "Telebank Proposal"
- page/11000002 "Proposal Detail Line"
- page/11000003 "Detail Line Subform"
- page/11000004 "Detail Lines"
- page/11000005 "Payment History Card"
- page/11000006 "Payment History Line Overview"
- page/11000007 "Payment History List"
- page/11000008 "Payment History Line Subform"
- page/11000009 "Payment History Line Detail"
- page/11000010 "Transaction Mode List"
- page/11000011 "Transaction Mode Card"
- page/11000012 "Export Protocols"
- page/11000014 "CBG Statement Line Add. Info."
- page/11000015 "Import Protocols"
- page/11000016 "Import Protocol List"
- page/11000017 "AL Objects (Telebanking)"
- pageextension/11400 "SourceCodeSetupNL"
- pageextension/11450 "Service Contract NL"
- pageextension/11451 "Service Contract Quote NL"
- pageextension/11452 "Service Credit Memo NL"
- pageextension/11453 "Service Invoice NL"
- pageextension/11454 "Service Order NL"
- pageextension/11455 "Service Quote NL"
- pageextension/11456 "Posted Service Credit Memo NL"
- pageextension/11457 "Posted Service Invoice NL"
- pageextension/11458 "Filed Service Contract NL"
- pageextension/11460 "Service Quote Archive NL"
- pageextension/11461 "Service Order Archive NL"
- query/11400 "Data Exch. Find Column No."
- query/11401 "CountPartnerTypes"
- report/11400 "CBG Posting - Test"
- report/11401 "CMR - Sales Shipment"
- report/11402 "CMR - Transfer Shipment"
- report/11403 "Create Elec. VAT Declaration"
- report/11404 "Create Elec. ICP Declaration"
- report/11405 "Submit Elec. Tax Declaration"
- report/11406 "Process Response Messages"
- report/11408 "Receive Response Messages"
- report/11409 "VAT- VIES Decl. Tax Auth NL"
- report/11410 "CMR - Return Shipment"
- report/11412 "Tax Authority - Audit File"
- report/11414 "Import Post Codes"
- report/11415 "Import Post Codes Update"
- report/11420 "Export Financial Data to XML"
- report/11000000 "Get Proposal Entries"
- report/11000001 "Proposal Overview"
- report/11000002 "Payment History Overview"
- report/11000003 "Paymt. History - Change Status"
- report/11000004 "Docket"
- report/11000007 "Export BTL91-ABN AMRO"
- report/11000008 "Export BBV"
- report/11000009 "Export PAYMUL"
- report/11000010 "Export BTL91-RABO"
- report/11000011 "Export SEPA ISO20022"
- report/11000012 "SEPA ISO20022 Pain 01.01.03"
- report/11000013 "SEPA ISO20022 Pain 008.001.02"
- report/11000014 "SEPA ISO20022 Pain 01.01.09"
- report/11000015 "SEPA ISO20022 Pain 008.001.08"
- report/11000021 "Import Rabobank mut.asc"
- report/11000022 "Import Rabobank vvmut.asc"
- report/11000023 "Import Rabobank ASCII"
- table/11307 "G/L Entry Application Buffer"
- table/11400 "CBG Statement"
- table/11401 "CBG Statement Line"
- table/11403 "Reporting ICP"
- table/11404 "Audit File Buffer"
- table/11405 "Freely Transferable Maximum"
- table/11406 "Post Code Range"
- table/11407 "Post Code Update Log Entry"
- table/11408 "Elec. Tax Declaration Setup"
- table/11409 "Elec. Tax Declaration Header"
- table/11410 "Elec. Tax Declaration Line"
- table/11411 "Elec. Tax Decl. VAT Category"
- table/11412 "Elec. Tax Decl. Error Log"
- table/11413 "Elec. Tax Decl. Response Msg."
- table/11000000 "Proposal Line"
- table/11000001 "Payment History"
- table/11000002 "Payment History Line"
- table/11000003 "Detail Line"
- table/11000004 "Transaction Mode"
- table/11000005 "Export Protocol"
- table/11000006 "CBG Statement Line Add. Info."
- table/11000007 "Import Protocol"
- table/11000008 "Reconciliation Buffer"
- table/11000009 "Payment History Export Buffer"
- tableextension/11400 "SourceCodeSetupNL"
- tableextension/11450 "Service Contract Header NL"
- tableextension/11451 "Service Header NL"
- tableextension/11453 "Service Cr.Memo Header NL"
- tableextension/11454 "Service Invoice Header NL"
- tableextension/11455 "Filed Serv. Contract Header NL"
- tableextension/11460 "Service Header Archive NL"

## Other versions

- BC28: 202 objects differ from W1 (165 fields, 9 events added)
- BC30: 195 objects differ from W1 (161 fields, 9 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
