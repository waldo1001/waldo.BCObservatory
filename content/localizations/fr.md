---
id: localization/fr
type: localization
title: France (FR)
summary: France (FR) localization of Business Central 29. It covers payment management with payment slips, RIB bank details and SEPA, French general ledger reports, fiscal period and year closing, FEC and XML ledger exports, accelerated (derogatory) depreciation, SIREN/SIRET fields, and French sales invoice specifics.
tier: official
language: en
tags:
  - localization
  - fr
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
  input_hash: 53fe936d17c0c9b8a60c8fcf9faf8251e5863b63574f834ef07073f0da897ecc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-fr
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/12
    - object/codeunit/80
    - object/codeunit/358
    - object/codeunit/426
    - object/codeunit/1222
    - object/codeunit/1232
    - object/codeunit/1233
    - object/codeunit/5600
    - object/codeunit/5601
    - object/codeunit/5605
    - object/codeunit/5613
    - object/codeunit/5626
    - object/codeunit/5632
    - object/codeunit/5633
    - object/enum/8
    - object/enum/5601
    - object/enum/5602
    - object/enum/5603
    - object/enum/5606
    - object/enum/5615
    - object/page/131
    - object/page/133
    - object/page/370
    - object/permissionset/1001
    - object/permissionset/1002
    - object/report/117
    - object/report/1303
    - object/report/1306
    - object/report/1307
    - object/report/1401
    - object/report/5605
    - object/report/5606
    - object/report/5692
    - object/table/9
    - object/table/10
    - object/table/15
    - object/table/17
    - object/table/18
    - object/table/23
    - object/table/32
    - object/table/36
    - object/table/50
    - object/table/79
    - object/table/81
    - object/table/83
    - object/table/98
    - object/table/112
    - object/table/114
    - object/table/181
    - object/table/254
    - object/table/263
    - object/table/270
    - object/table/271
    - object/table/287
    - object/table/288
    - object/table/317
    - object/table/379
    - object/table/380
    - object/table/1207
    - object/table/1381
    - object/table/1383
    - object/table/5050
    - object/table/5200
    - object/table/5600
    - object/table/5601
    - object/table/5606
    - object/table/5611
    - object/table/5612
    - object/table/5624
    - object/xmlport/1000
    - object/xmlport/1001
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/france
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: FR
version: "29"
w1_version: "29"
added_objects: 98
replaced_objects: 71
removed_objects: 0
added_fields: 78
added_events: 6
learn_folder: LocalFunctionality/France
---

# France (FR)

> France (FR) localization of Business Central 29. It covers payment management with payment slips, RIB bank details and SEPA, French general ledger reports, fiscal period and year closing, FEC and XML ledger exports, accelerated (derogatory) depreciation, SIREN/SIRET fields, and French sales invoice specifics.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/france.md) · narrative **unreviewed** (machine-written)

## Overview

The French layer adds a full payment management module: payment classes, statuses, steps, payment slips with archive, payment addresses, and reports such as Bill, Draft, Remittance, Withdraw, Transfer and SEPA ISO20022. Bank, customer and vendor bank account tables get Agency Code, RIB Key and RIB Checked fields, and codeunit 10801 "RIB Key" handles the key. Learn documents this under Payment Management [FR], Set Up Payment Classes [FR], Create Payment Slips [FR] and How to Export Payments.

In finance, the code adds French trial balance, journal and detail reports for G/L, customers, vendors and banks, FR account schedules, G/L entry application (Applies-to ID, Letter, Letter Date), reconciliation reports, and XML and audit exports. Accounting Period and General Ledger Setup carry fiscal closing and posting range logic, supported by codeunit 10862 "Fiscal Year-FiscalClose". Fixed assets gain derogatory (accelerated) depreciation through new fields on FA Posting Group, Depreciation Book and FA Depreciation Book, plus extra procedures in disposal, depreciation and posting codeunits.

Company Information, Contact, Customer and Vendor carry French identifiers (SIREN, SIRET, APE Code, Trade Register, Legal Form, Stock Capital). Sales invoice and credit memo reports get goods/services and VAT paid on debits text. Learn also covers UBL 2.1 and Factur-X e-invoicing, e-reporting and DEB declarations.

## Key points

- Payment management: payment classes, statuses, steps, slips, archive, payment addresses, and export or import of setup parameters
- RIB bank details (Agency Code, RIB Key, RIB Checked) on bank, customer and vendor bank accounts, validated by codeunit 10801
- French G/L reports: Journals, G/L, customer, vendor and bank trial balances, FR account schedules, ledger reconciliations
- Fiscal periods and years: fiscal close and reopen of accounting periods, posting date ranges, two open fiscal years, year-end closing
- Audit exports: FEC format and XML export of G/L entries, with opening balances via Detailed Balance on G/L Account
- Accelerated depreciation using derogatory posting types and separate accounting and tax depreciation books
- SIREN and SIRET validation on Company Information, Customer, Vendor and Contact
- Sales documents show VAT Paid on Debits and goods/services indications; delayed unrealized VAT handled in Gen. Jnl.-Post Line

Narrative written by Sonnet from the code diff and 34 Learn page summaries. In numbers: France (FR) localization of Business Central in BC29: 98 objects of its own, 71 W1 objects changed (78 fields and 6 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [Bank](#bank) | 10 | 59 | 5 |
| [Finance](#finance) | 8 | 23 | 20 |
| [FixedAssets](#fixedassets) | 21 | 2 | 13 |
| [Sales](#sales) | 14 | 6 | 11 |
| [Purchases](#purchases) | 5 | 3 | 9 |
| [Foundation](#foundation) | 6 | 1 | 12 |
| (no namespace) | 0 | 4 | 0 |
| [Inventory](#inventory) | 3 | 0 | 2 |
| [Security](#security) | 2 | 0 | 0 |
| [CRM](#crm) | 1 | 0 | 5 |
| [HumanResources](#humanresources) | 1 | 0 | 1 |

### Bank

Adds the French payment management module: payment classes, statuses, steps, payment headers and lines, archives, addresses, and many pages and reports for bills, drafts, remittances, withdrawals, transfers and SEPA ISO20022. Bank Account gets RIB fields, and French bank account trial balance and journal reports are added. SEPA codeunits get extra events and a payment line check.

Why: Learn explains payment classes with statuses and steps that drive slips for vendors and customers, with SEPA export and archiving of processed slips.

Objects: [codeunit/10860 "Payment Management"](../objects/codeunit/10860-fr.md) (own), [table/10865 "Payment Header"](../objects/table/10865-fr.md) (own), [table/10866 "Payment Line"](../objects/table/10866-fr.md) (own), [table/10860 "Payment Class"](../objects/table/10860-fr.md) (own), [codeunit/10801 "RIB Key"](../objects/codeunit/10801-fr.md) (own), [table/270 "Bank Account"](../objects/table/270.md), [report/10883 "SEPA ISO20022"](../objects/report/10883-fr.md) (own), [codeunit/1233 "SEPA DD-Check Line"](../objects/codeunit/1233.md).

[All 69 objects of Bank in the diff](?ns=Bank#country-diff)

### Finance

Adds French G/L reports (journals, trial balances, account statement), FR account schedules, G/L entry application, ledger reconciliation reports and XML export of entries. General Ledger Setup, G/L Entry and Gen. Journal Line get fields for posting ranges, letters and delayed unrealized VAT, with matching procedures in Gen. Jnl.-Post Line.

Why: Learn describes these as required French reports and tax audit exports, plus apply and unapply of G/L entries (flagged as being replaced).

Objects: [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md), [table/81 "Gen. Journal Line"](../objects/table/81.md), [table/98 "General Ledger Setup"](../objects/table/98.md), [table/17 "G/L Entry"](../objects/table/17.md), [codeunit/10862 "Fiscal Year-FiscalClose"](../objects/codeunit/10862-fr.md) (own), [report/10803 "G/L Trial Balance"](../objects/report/10803-fr.md) (own), [report/10820 "Export G/L Entries to XML"](../objects/report/10820-fr.md) (own), [xmlport/10800 "Export G/L Entries"](../objects/xmlport/10800-fr.md) (own).

[All 31 objects of Finance in the diff](?ns=Finance#country-diff)

### FixedAssets

Implements accelerated (derogatory) depreciation with new fields on FA Posting Group, Depreciation Book and FA Depreciation Book, derogatory posting types in enums, and extra logic in disposal, depreciation and journal posting codeunits. Adds professional tax on Fixed Asset and two French reports.

Why: Learn says accelerated depreciation computes differences between tax and accounting books using derogatory posting types.

Objects: [table/5606 "FA Posting Group"](../objects/table/5606.md), [table/5611 "Depreciation Book"](../objects/table/5611.md), [table/5612 "FA Depreciation Book"](../objects/table/5612.md), [codeunit/5605 "Calculate Disposal"](../objects/codeunit/5605.md), [report/5692 "Calculate Depreciation"](../objects/report/5692.md), [codeunit/5633 "FA Jnl.-Post Batch"](../objects/codeunit/5633.md), [report/10886 "FA - Proj. Value (Derogatory)"](../objects/report/10886-fr.md) (own), [report/10812 "Fixed Asset-Professional Tax"](../objects/report/10812-fr.md) (own).

[All 23 objects of FixedAssets in the diff](?ns=FixedAssets#country-diff)

### Sales

Adds SIREN No. and payment-in-progress fields on Customer, RIB fields on customer bank accounts, and VAT Paid on Debits on sales headers. Standard invoice and credit memo reports get goods/services and VAT on debits texts. Shipment-to-invoice links get their own table and pages, and French customer trial balance and journal reports are added.

Why: Learn covers SIREN setup, VAT paid on debts printing and automatic goods or services indication on French invoices.

Objects: [table/18 "Customer"](../objects/table/18.md), [table/36 "Sales Header"](../objects/table/36.md), [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md), [report/1303 "Standard Sales - Draft Invoice"](../objects/report/1303.md), [table/10825 "Shipment Invoiced"](../objects/table/10825-fr.md) (own), [page/10837 "Invoices bound by Shipment"](../objects/page/10837-fr.md) (own), [report/10805 "Customer Trial Balance FR"](../objects/report/10805-fr.md) (own), [table/287 "Customer Bank Account"](../objects/table/287.md).

[All 20 objects of Sales in the diff](?ns=Sales#country-diff)

### Purchases

Adds SIREN No., payment-in-progress and payment reporting exclusion fields on Vendor, RIB fields on vendor bank accounts, and French vendor trial balance and journal reports.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/23 "Vendor"](../objects/table/23.md), [table/288 "Vendor Bank Account"](../objects/table/288.md), [report/10807 "Vendor Trial Balance FR"](../objects/report/10807-fr.md) (own), [report/10808 "Vendor Detail Trial Balance FR"](../objects/report/10808-fr.md) (own), [report/10814 "Vendor Journal"](../objects/report/10814-fr.md) (own), [table/1383 "Vendor Templ."](../objects/table/1383.md).

[All 8 objects of Purchases in the diff](?ns=Purchases#country-diff)

### Foundation

Company Information gets French identity fields and SIRET validation with an event. Accounting Period gets fiscal close, reopen and posting range logic. Date filter and navigate helpers are extended, and Country/Region gets SEPA Allowed.

Why: Learn explains fiscal closing of periods and years, with two open fiscal years allowed, and the company data needed for e-invoicing and DEB.

Objects: [table/79 "Company Information"](../objects/table/79.md), [table/50 "Accounting Period"](../objects/table/50.md), [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md), [table/9 "Country/Region"](../objects/table/9.md), [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-fr.md) (own), [table/10 "Shipment Method"](../objects/table/10.md).

[All 7 objects of Foundation in the diff](?ns=Foundation#country-diff)

### Inventory

Adds Shipment Method Code to Item Ledger Entry and Item Journal Line, and changes the Intrastat journal line for French trade declarations.

Why: Learn lists the Intrastat journal fields needed for the DEB declaration of trade in goods.

Objects: [table/32 "Item Ledger Entry"](../objects/table/32.md), [table/83 "Item Journal Line"](../objects/table/83.md), [table/263 "Intrastat Jnl. Line"](../objects/table/263.md).

[All 3 objects of Inventory in the diff](?ns=Inventory#country-diff)

### Security

Changes the LOCAL and LOCAL READ permission sets to cover the French objects.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md), [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md).

[All 2 objects of Security in the diff](?ns=Security#country-diff)

### CRM

Contact gets Trade Register, APE Code, Legal Form, Stock Capital and SIREN No., with procedures that keep the customer SIREN in sync.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5050 "Contact"](../objects/table/5050.md).

[All 1 objects of CRM in the diff](?ns=CRM#country-diff)

### HumanResources

Employee gets a Marital Status field, backed by a local enum.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/5200 "Employee"](../objects/table/5200.md).

[All 1 objects of HumanResources in the diff](?ns=HumanResources#country-diff)

## W1 objects this country changes

| Object | Changes |
|---|---|
| [codeunit/12 "Gen. Jnl.-Post Line"](../objects/codeunit/12.md) | +9 procedures |
| [codeunit/80 "Sales-Post"](../objects/codeunit/80.md) | +1 events, +1 procedures |
| [codeunit/358 "DateFilter-Calc"](../objects/codeunit/358.md) | +3 procedures |
| [codeunit/426 "Payment Tolerance Management"](../objects/codeunit/426.md) | +1 procedures, 1 procedures changed |
| [codeunit/1222 "SEPA CT-Prepare Source"](../objects/codeunit/1222.md) | +1 events |
| [codeunit/1232 "SEPA DD-Prepare Source"](../objects/codeunit/1232.md) | +1 events |
| [codeunit/1233 "SEPA DD-Check Line"](../objects/codeunit/1233.md) | +1 events, +1 procedures, 2 procedures changed |
| [codeunit/5600 "FA Insert Ledger Entry"](../objects/codeunit/5600.md) | +3 procedures |
| [codeunit/5601 "FA Insert G/L Account"](../objects/codeunit/5601.md) | +1 procedures |
| [codeunit/5605 "Calculate Disposal"](../objects/codeunit/5605.md) | +5 procedures |
| [codeunit/5613 "Calculate Acq. Cost Depr."](../objects/codeunit/5613.md) | +1 procedures |
| [codeunit/5626 "FA General Report"](../objects/codeunit/5626.md) | +1 procedures |
| [codeunit/5632 "FA Jnl.-Post Line"](../objects/codeunit/5632.md) | +3 procedures |
| [codeunit/5633 "FA Jnl.-Post Batch"](../objects/codeunit/5633.md) | +2 procedures |
| [enum/8 "Country/Region Address Format"](../objects/enum/8.md) | body changes only |
| [enum/5601 "FA Ledger Entry FA Posting Type"](../objects/enum/5601.md) | body changes only |
| [enum/5602 "FA Journal Line FA Posting Type"](../objects/enum/5602.md) | body changes only |
| [enum/5603 "Gen. Journal Line FA Posting Type"](../objects/enum/5603.md) | body changes only |
| [enum/5606 "FA Posting Group Account Type"](../objects/enum/5606.md) | body changes only |
| [enum/5615 "FA Allocation Type"](../objects/enum/5615.md) | body changes only |
| [page/131 "Posted Sales Shpt. Subform"](../objects/page/131.md) | +1 procedures |
| [page/133 "Posted Sales Invoice Subform"](../objects/page/133.md) | +1 procedures |
| [page/370 "Bank Account Card"](../objects/page/370.md) | +1 procedures |
| [permissionset/1001 "LOCAL"](../objects/permissionset/1001.md) | 3 properties |
| [permissionset/1002 "LOCAL READ"](../objects/permissionset/1002.md) | 3 properties |
| [report/117 "Reminder"](../objects/report/117.md) | 1 properties |
| [report/1303 "Standard Sales - Draft Invoice"](../objects/report/1303.md) | +4 procedures |
| [report/1306 "Standard Sales - Invoice"](../objects/report/1306.md) | +3 procedures |
| [report/1307 "Standard Sales - Credit Memo"](../objects/report/1307.md) | +3 procedures |
| [report/1401 "Check"](../objects/report/1401.md) | +3 procedures |
| [report/5605 "Fixed Asset - Book Value 01"](../objects/report/5605.md) | +2 procedures |
| [report/5606 "Fixed Asset - Book Value 02"](../objects/report/5606.md) | +2 procedures |
| [report/5692 "Calculate Depreciation"](../objects/report/5692.md) | +1 procedures |
| [table/9 "Country/Region"](../objects/table/9.md) | +1 fields |
| [table/10 "Shipment Method"](../objects/table/10.md) | +1 procedures |
| [table/15 "G/L Account"](../objects/table/15.md) | +1 fields |
| [table/17 "G/L Entry"](../objects/table/17.md) | +3 fields |
| [table/18 "Customer"](../objects/table/18.md) | +3 fields, +1 procedures |
| [table/23 "Vendor"](../objects/table/23.md) | +3 fields |
| [table/32 "Item Ledger Entry"](../objects/table/32.md) | +1 fields |
| [table/36 "Sales Header"](../objects/table/36.md) | +1 fields |
| [table/50 "Accounting Period"](../objects/table/50.md) | +3 fields, +1 events, +8 procedures |
| [table/79 "Company Information"](../objects/table/79.md) | +8 fields, 3 fields changed, +1 events, +6 procedures |
| [table/81 "Gen. Journal Line"](../objects/table/81.md) | +6 fields, +1 procedures |
| [table/83 "Item Journal Line"](../objects/table/83.md) | +1 fields |
| [table/98 "General Ledger Setup"](../objects/table/98.md) | +4 fields, 1 fields changed, +1 procedures |
| [table/112 "Sales Invoice Header"](../objects/table/112.md) | +1 fields |
| [table/114 "Sales Cr.Memo Header"](../objects/table/114.md) | +1 fields |
| [table/181 "Posted Gen. Journal Line"](../objects/table/181.md) | +6 fields |
| [table/254 "VAT Entry"](../objects/table/254.md) | +2 procedures |
| [table/263 "Intrastat Jnl. Line"](../objects/table/263.md) | body changes only |
| [table/270 "Bank Account"](../objects/table/270.md) | +4 fields, 2 fields changed |
| [table/271 "Bank Account Ledger Entry"](../objects/table/271.md) | body changes only |
| [table/287 "Customer Bank Account"](../objects/table/287.md) | +3 fields, 2 fields changed |
| [table/288 "Vendor Bank Account"](../objects/table/288.md) | +3 fields, 2 fields changed |
| [table/317 "Payable Vendor Ledger Entry"](../objects/table/317.md) | +1 fields |
| [table/379 "Detailed Cust. Ledg. Entry"](../objects/table/379.md) | +1 fields |
| [table/380 "Detailed Vendor Ledg. Entry"](../objects/table/380.md) | +1 fields |
| [table/1207 "Direct Debit Collection"](../objects/table/1207.md) | +1 fields, +1 procedures |
| [table/1381 "Customer Templ."](../objects/table/1381.md) | +1 fields, 1 fields changed |
| [table/1383 "Vendor Templ."](../objects/table/1383.md) | +1 fields, 1 fields changed |
| [table/5050 "Contact"](../objects/table/5050.md) | +5 fields, +2 procedures |
| [table/5200 "Employee"](../objects/table/5200.md) | +1 fields, 2 fields changed |
| [table/5600 "Fixed Asset"](../objects/table/5600.md) | +1 fields |
| [table/5601 "FA Ledger Entry"](../objects/table/5601.md) | +1 fields |
| [table/5606 "FA Posting Group"](../objects/table/5606.md) | +5 fields, +4 procedures |
| [table/5611 "Depreciation Book"](../objects/table/5611.md) | +3 fields, +3 procedures |
| [table/5612 "FA Depreciation Book"](../objects/table/5612.md) | +2 fields, 1 fields changed |
| [table/5624 "FA Reclass. Journal Line"](../objects/table/5624.md) | +1 fields |
| [xmlport/1000 "SEPA CT pain.001.001.03"](../objects/xmlport/1000.md) | body changes only |
| [xmlport/1001 "SEPA CT pain.001.001.09"](../objects/xmlport/1001.md) | body changes only |

## Objects of its own

98 objects only this country has.

- [codeunit/355 "Local Navigate Handler"](../objects/codeunit/355-fr.md)
- [codeunit/9997 "Upgrade Tag Def - Country"](../objects/codeunit/9997-fr.md)
- [codeunit/10801 "RIB Key"](../objects/codeunit/10801-fr.md)
- [codeunit/10802 "FR AccSchedManagement"](../objects/codeunit/10802-fr.md)
- [codeunit/10842 "G/L Entry Application"](../objects/codeunit/10842-fr.md)
- [codeunit/10860 "Payment Management"](../objects/codeunit/10860-fr.md)
- [codeunit/10861 "Payment-Apply"](../objects/codeunit/10861-fr.md)
- [codeunit/10862 "Fiscal Year-FiscalClose"](../objects/codeunit/10862-fr.md)
- [codeunit/10881 "Update Dtld. CV Ledger Entries"](../objects/codeunit/10881-fr.md)
- [codeunit/104101 "UPG.FR"](../objects/codeunit/104101-fr.md)
- [enum/5226 "Employee Marital Status"](../objects/enum/5226-fr.md)
- [enum/10862 "Payment Step Action Type"](../objects/enum/10862-fr.md)
- [page/10800 "FR Account Schedule Names"](../objects/page/10800-fr.md)
- [page/10801 "FR Account Schedule"](../objects/page/10801-fr.md)
- [page/10818 "Fiscal Year Closing Steps"](../objects/page/10818-fr.md)
- [page/10837 "Invoices bound by Shipment"](../objects/page/10837-fr.md)
- [page/10838 "Shipments bound by Invoice"](../objects/page/10838-fr.md)
- [page/10860 "Payment Class List"](../objects/page/10860-fr.md)
- [page/10861 "Payment Status List"](../objects/page/10861-fr.md)
- [page/10862 "View/Edit Payment Line"](../objects/page/10862-fr.md)
- [page/10863 "Payment Report"](../objects/page/10863-fr.md)
- [page/10864 "Payment Class"](../objects/page/10864-fr.md)
- [page/10865 "Payment Status"](../objects/page/10865-fr.md)
- [page/10866 "Payment Steps"](../objects/page/10866-fr.md)
- [page/10867 "Payment Step Card"](../objects/page/10867-fr.md)
- [page/10868 "Payment Slip"](../objects/page/10868-fr.md)
- [page/10869 "Payment Slip Subform"](../objects/page/10869-fr.md)
- [page/10870 "Payment Slip List"](../objects/page/10870-fr.md)
- [page/10871 "Payment Line Modification"](../objects/page/10871-fr.md)
- [page/10872 "Payment Lines List"](../objects/page/10872-fr.md)
- [page/10873 "Payment Steps List"](../objects/page/10873-fr.md)
- [page/10874 "Payment Step Ledger"](../objects/page/10874-fr.md)
- [page/10875 "Payment Addresses"](../objects/page/10875-fr.md)
- [page/10876 "Payment Bank"](../objects/page/10876-fr.md)
- [page/10877 "Payment Slip Archive"](../objects/page/10877-fr.md)
- [page/10878 "Payment Slip Subform Archive"](../objects/page/10878-fr.md)
- [page/10879 "Payment Slip List Archive"](../objects/page/10879-fr.md)
- [page/10880 "Payment Lines Archive List"](../objects/page/10880-fr.md)
- [page/10881 "Payment Bank Archive"](../objects/page/10881-fr.md)
- [page/10882 "Payment Step Ledger List"](../objects/page/10882-fr.md)
- [report/10800 "G/L Journal"](../objects/report/10800-fr.md)
- [report/10801 "Journals"](../objects/report/10801-fr.md)
- [report/10803 "G/L Trial Balance"](../objects/report/10803-fr.md)
- [report/10804 "G/L Detail Trial Balance"](../objects/report/10804-fr.md)
- [report/10805 "Customer Trial Balance FR"](../objects/report/10805-fr.md)
- [report/10806 "Customer Detail Trial Balance"](../objects/report/10806-fr.md)
- [report/10807 "Vendor Trial Balance FR"](../objects/report/10807-fr.md)
- [report/10808 "Vendor Detail Trial Balance FR"](../objects/report/10808-fr.md)
- [report/10809 "Bank Account Trial Balance"](../objects/report/10809-fr.md)
- [report/10810 "Bank Acc. Detail Trial Balance"](../objects/report/10810-fr.md)
- [report/10811 "FR Account Schedule"](../objects/report/10811-fr.md)
- [report/10812 "Fixed Asset-Professional Tax"](../objects/report/10812-fr.md)
- [report/10813 "Customer Journal"](../objects/report/10813-fr.md)
- [report/10814 "Vendor Journal"](../objects/report/10814-fr.md)
- [report/10815 "Bank Account Journal"](../objects/report/10815-fr.md)
- [report/10820 "Export G/L Entries to XML"](../objects/report/10820-fr.md)
- [report/10842 "G/L Account Statement"](../objects/report/10842-fr.md)
- [report/10843 "Recapitulation Form"](../objects/report/10843-fr.md)
- [report/10860 "Payment List"](../objects/report/10860-fr.md)
- [report/10861 "GL/Cust. Ledger Reconciliation"](../objects/report/10861-fr.md)
- [report/10862 "Suggest Vendor Payments FR"](../objects/report/10862-fr.md)
- [report/10863 "GL/Vend. Ledger Reconciliation"](../objects/report/10863-fr.md)
- [report/10864 "Suggest Customer Payments"](../objects/report/10864-fr.md)
- [report/10865 "Bill"](../objects/report/10865-fr.md)
- [report/10866 "Draft"](../objects/report/10866-fr.md)
- [report/10867 "Remittance"](../objects/report/10867-fr.md)
- [report/10868 "Draft notice"](../objects/report/10868-fr.md)
- [report/10869 "Draft recapitulation"](../objects/report/10869-fr.md)
- [report/10870 "Withdraw notice"](../objects/report/10870-fr.md)
- [report/10871 "Withdraw recapitulation"](../objects/report/10871-fr.md)
- [report/10872 "Duplicate parameter"](../objects/report/10872-fr.md)
- [report/10873 "Archive Payment Slips"](../objects/report/10873-fr.md)
- [report/10876 "EC Sales List - Services"](../objects/report/10876-fr.md)
- [report/10880 "ETEBAC Files"](../objects/report/10880-fr.md)
- [report/10881 "Withdraw"](../objects/report/10881-fr.md)
- [report/10882 "Transfer"](../objects/report/10882-fr.md)
- [report/10883 "SEPA ISO20022"](../objects/report/10883-fr.md)
- [report/10886 "FA - Proj. Value (Derogatory)"](../objects/report/10886-fr.md)
- [table/10800 "FR Acc. Schedule Name"](../objects/table/10800-fr.md)
- [table/10801 "FR Acc. Schedule Line"](../objects/table/10801-fr.md)
- [table/10825 "Shipment Invoiced"](../objects/table/10825-fr.md)
- [table/10860 "Payment Class"](../objects/table/10860-fr.md)
- [table/10861 "Payment Status"](../objects/table/10861-fr.md)
- [table/10862 "Payment Step"](../objects/table/10862-fr.md)
- [table/10863 "Payment Step Ledger"](../objects/table/10863-fr.md)
- [table/10864 "Payment Post. Buffer"](../objects/table/10864-fr.md)
- [table/10865 "Payment Header"](../objects/table/10865-fr.md)
- [table/10866 "Payment Line"](../objects/table/10866-fr.md)
- [table/10867 "Payment Header Archive"](../objects/table/10867-fr.md)
- [table/10868 "Payment Line Archive"](../objects/table/10868-fr.md)
- [table/10869 "Bank Account Buffer"](../objects/table/10869-fr.md)
- [table/10870 "Payment Address"](../objects/table/10870-fr.md)
- [table/10871 "Unreal. CV Ledg. Entry Buffer"](../objects/table/10871-fr.md)
- [table/10880 "Payment Period Setup"](../objects/table/10880-fr.md)
- [table/10881 "Payment Application Buffer"](../objects/table/10881-fr.md)
- [tableextension/10810 "SourceCodeFR"](../objects/tableextension/10810-fr.md)
- [xmlport/10800 "Export G/L Entries"](../objects/xmlport/10800-fr.md)
- [xmlport/10863 "Import/Export Parameters"](../objects/xmlport/10863-fr.md)

## Other versions

- BC30: 169 objects differ from W1 (78 fields, 6 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
