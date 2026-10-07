---
id: localization/dk
type: localization
title: Denmark (DK)
summary: Denmark (DK) localization adds OIOUBL electronic invoicing, NemHandel registration status, electronic VAT return submission to skat.dk, SAF-T and Regnskab Basis export, FIK payment matching, digital vouchers, payroll import and a C5 data migration. It answers how Danish legal and e-invoicing needs are met in Business Central.
tier: official
language: en
tags:
  - localization
  - dk
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
  input_hash: 5fa3cbe89a94e8ce7b0a4b0bbd6819f05f9876df1fe84b0e766bc06a576baa1d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps
    title: country diff 29-dk
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/denmark
  localizations: []
  videos: []
  posts: []
  guidelines: []
country: DK
version: "29"
w1_version: "29"
added_objects: 431
replaced_objects: 0
removed_objects: 0
added_fields: 0
added_events: 0
learn_folder: LocalFunctionality/Denmark
---

# Denmark (DK)

> Denmark (DK) localization adds OIOUBL electronic invoicing, NemHandel registration status, electronic VAT return submission to skat.dk, SAF-T and Regnskab Basis export, FIK payment matching, digital vouchers, payroll import and a C5 data migration. It answers how Danish legal and e-invoicing needs are met in Business Central.

BC29 · country layer against W1 · Learn: [local functionality](../topics/business-central/business-functionality/local-functionality/denmark.md) · narrative **unreviewed** (machine-written)

## Overview

The Danish layer is made almost entirely of its own objects (431) plus table and page extensions; no W1 object is listed as changed. The largest blocks are the C5 data migration (codeunits, pages and xmlports with a "C5" prefix), the OIOUBL extension (check, export and subscriber codeunits, with table and page extensions on sales, reminder, finance charge memo and service documents), and the finance codeunits for electronic VAT declaration, SAF-T and Regnskab Basis export.

Bank-related code covers FIK: codeunits such as "FIKManagement", "FIK_MatchBankRecLines" and "FIK_ReadFile", fixed-width bank export, and page extensions on vendor, payment journal and payment reconciliation pages. Payroll import uses data exchange definitions and the "Data Exch. Imp.- Proløn" xmlport. The eServices area adds OIOUBL format handling for E-Documents, and NemHandel status checks via HTTP interfaces.

Learn documents this under Denmark local functionality: bookkeeping act compliance, digital vouchers, five-year retention, OIOUBL setup and creation, NemHandel registration and e-invoicing, SAF-T, Regnskab Basis, standard chart of accounts, electronic VAT returns, VAT reconciliation, VAT-VIES, Intrastat VAT number and payroll data definitions.

## Key points

- OIOUBL (UBL 2.0) XML export of sales and service invoices, credit memos, reminders and finance charge memos, with GLN, account code and profile code fields on customers.
- Electronic VAT return submission to skat.dk through the Danish Tax Agency VAT API, with setup page, communication logs, certificates and period retrieval.
- SAF-T audit file export and Regnskab Basis CSV export, both relying on mapping G/L accounts to the standard chart of accounts.
- FIK payment handling: matching of bank reconciliation and general journal lines, with FIK transaction text codes in the payment reconciliation journal.
- NemHandel registration status check and notification based on the CVR number in Company Information, plus E-Document support for OIOUBL.
- Digital vouchers and five-year data retention (daily export to Azure Blob Storage) support compliance with the Danish bookkeeping act.
- Payroll import for Danish providers such as Danløn and Dataløn through data exchange definitions into the general journal.
- C5 data migration wizard objects for importing from C5.

Narrative written by Sonnet from the code diff and 20 Learn page summaries. In numbers: Denmark (DK) localization of Business Central in BC29: 431 objects of its own, 0 W1 objects changed (0 fields and 0 events added). From the code; country apps outside the Base Application are not included yet.

## By area

| Area | W1 objects changed | Own objects | Fields added |
|---|---|---|---|
| [DataMigration](#datamigration) | 0 | 121 | 0 |
| [EServices](#eservices) | 0 | 90 | 0 |
| [Finance](#finance) | 0 | 85 | 0 |
| [Bank](#bank) | 0 | 51 | 0 |
| [Sales](#sales) | 0 | 46 | 0 |
| [Service](#service) | 0 | 21 | 0 |
| [Foundation](#foundation) | 0 | 5 | 0 |
| [eServices](#eservices) | 0 | 4 | 0 |
| [Payroll](#payroll) | 0 | 4 | 0 |
| [(no namespace)](#no-namespace) | 0 | 1 | 0 |
| [ExpenseAgent](#expenseagent) | 0 | 1 | 0 |
| [Inventory](#inventory) | 0 | 1 | 0 |
| [IO](#io) | 0 | 1 | 0 |

### DataMigration

Adds a full C5 data migration toolset: migrator codeunits for customers, vendors, items, ledger accounts and ledger transactions, a schema reader, unzip and data loader, a dashboard, and many C5 source pages.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/1860 "C5 Data Migration Mgt."](../objects/codeunit/1860-dk.md) (own), [codeunit/1861 "C5 Wizard Integration"](../objects/codeunit/1861-dk.md) (own), [codeunit/1868 "C5 Data Loader"](../objects/codeunit/1868-dk.md) (own), [codeunit/1863 "C5 Schema Reader"](../objects/codeunit/1863-dk.md) (own), [codeunit/1866 "C5 CustTable Migrator"](../objects/codeunit/1866-dk.md) (own), [codeunit/1864 "C5 VendTable Migrator"](../objects/codeunit/1864-dk.md) (own), [codeunit/1867 "C5 Item Migrator"](../objects/codeunit/1867-dk.md) (own), [page/1860 "C5 CustTable"](../objects/page/1860-dk.md) (own).

[All 121 objects of DataMigration in the diff](?ns=DataMigration#country-diff)

### EServices

Adds the OIOUBL engine: check codeunits, XML export codeunits for sales, service, reminder and finance charge documents, and subscribers. Also adds NemHandel status management and a digital voucher implementation.

Why: Danish public sector customers require OIOUBL electronic documents, and Danish regulation requires NemHandelsregisteret registration and digital vouchers.

Objects: [codeunit/13625 "OIOUBL-Document Encode"](../objects/codeunit/13625-dk.md) (own), [codeunit/13636 "OIOUBL-Export Sales Invoice"](../objects/codeunit/13636-dk.md) (own), [codeunit/13637 "OIOUBL-Export Sales Cr. Memo"](../objects/codeunit/13637-dk.md) (own), [codeunit/13646 "OIOUBL-Management"](../objects/codeunit/13646-dk.md) (own), [codeunit/13628 "Nemhandel Status Mgt."](../objects/codeunit/13628-dk.md) (own), [codeunit/13621 "Digital Voucher DK Impl."](../objects/codeunit/13621-dk.md) (own), [codeunit/13910 "OIOUBL Format"](../objects/codeunit/13910-dk.md) (own), [enum/13608 "Nemhandel Company Status"](../objects/enum/13608-dk.md) (own).

[All 90 objects of EServices in the diff](?ns=EServices#country-diff)

### Finance

Adds electronic VAT declaration (SKAT API, XML, cryptography, Azure Key Vault, setup and log pages), SAF-T export with standard accounts and tax codes, ECSL export file and Regnskab Basis export.

Why: Learn describes electronic VAT return submission to skat.dk, SAF-T export for the tax authorities and Regnskab Basis export using the standard chart of accounts.

Objects: [codeunit/13612 "Elec. VAT Decl. SKAT API"](../objects/codeunit/13612-dk.md) (own), [codeunit/13613 "Elec. VAT Decl. Submit"](../objects/codeunit/13613-dk.md) (own), [codeunit/13606 "Elec. VAT Decl. Create"](../objects/codeunit/13606-dk.md) (own), [page/13605 "Elec. VAT Decl. Setup"](../objects/page/13605-dk.md) (own), [codeunit/13689 "Xml Data Handling SAF-T DK"](../objects/codeunit/13689-dk.md) (own), [codeunit/13697 "Data Check SAF-T DK"](../objects/codeunit/13697-dk.md) (own), [codeunit/13698 "Regnskab Basis Export"](../objects/codeunit/13698-dk.md) (own), [codeunit/13695 "Standard Account DK"](../objects/codeunit/13695-dk.md) (own).

[All 85 objects of Finance in the diff](?ns=Finance#country-diff)

### Bank

Adds FIK payment handling: matching of bank reconciliation and general journal lines, file reading, payment export and fixed-width bank export. Page and table extensions add FIK fields to vendor, purchase, journal and reconciliation objects.

Why: Learn explains FIK transaction text codes that describe automatic payment application results in the payment reconciliation journal.

Objects: [codeunit/13650 "FIKManagement"](../objects/codeunit/13650-dk.md) (own), [codeunit/13651 "FIK_MatchBankRecLines"](../objects/codeunit/13651-dk.md) (own), [codeunit/13652 "FIK_MatchGenJournalLines"](../objects/codeunit/13652-dk.md) (own), [codeunit/13654 "FIK_ReadFile"](../objects/codeunit/13654-dk.md) (own), [codeunit/13653 "PaymentExportManagement"](../objects/codeunit/13653-dk.md) (own), [codeunit/13660 "Export BankData Fixed Width"](../objects/codeunit/13660-dk.md) (own), [pageextension/13620 "PaymentReconciliationJournal"](../objects/pageextension/13620-dk.md) (own), [table/13625 "FIKUplift"](../objects/table/13625-dk.md) (own).

[All 51 objects of Bank in the diff](?ns=Bank#country-diff)

### Sales

Extends sales, reminder and finance charge memo tables and pages with OIOUBL fields, such as customer GLN, account code and profile code, on documents and posted documents.

Why: Learn states that customers need GLN, account code and profile code information for OIOUBL invoicing.

Objects: [tableextension/13634 "OIOUBL-Customer"](../objects/tableextension/13634-dk.md) (own), [pageextension/13652 "OIOUBL-Customer Card"](../objects/pageextension/13652-dk.md) (own), [tableextension/13630 "OIOUBL-Sales Invoice Header"](../objects/tableextension/13630-dk.md) (own), [tableextension/13632 "OIOUBL-Sales Cr.Memo Header"](../objects/tableextension/13632-dk.md) (own), [pageextension/13666 "OIOUBL-Sales Receivables Setup"](../objects/pageextension/13666-dk.md) (own), [tableextension/13636 "OIOUBL-Reminder Header"](../objects/tableextension/13636-dk.md) (own), [tableextension/13641 "OIOUBL-FinChrgMemoHeader"](../objects/tableextension/13641-dk.md) (own), [pageextension/13655 "OIOUBL-Sales Invoice"](../objects/pageextension/13655-dk.md) (own).

[All 46 objects of Sales in the diff](?ns=Sales#country-diff)

### Service

Extends service documents, archives, posted documents and service setup with OIOUBL fields so service invoices and credit memos can be exported.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [tableextension/13652 "OIOUBL-Service Header"](../objects/tableextension/13652-dk.md) (own), [tableextension/13654 "OIOUBL-Service Mgt. Setup"](../objects/tableextension/13654-dk.md) (own), [pageextension/13672 "OIOUBL-Service Mgt. Setup"](../objects/pageextension/13672-dk.md) (own), [tableextension/13655 "OIOUBL-Service Invoice Header"](../objects/tableextension/13655-dk.md) (own), [tableextension/13657 "OIOUBL-Service Cr.Memo Header"](../objects/tableextension/13657-dk.md) (own), [pageextension/13674 "OIOUBL-Service Order"](../objects/pageextension/13674-dk.md) (own), [pageextension/13676 "OIOUBL-Service Invoice"](../objects/pageextension/13676-dk.md) (own), [pageextension/13678 "OIOUBL-Service Credit Memo"](../objects/pageextension/13678-dk.md) (own).

[All 21 objects of Service in the diff](?ns=Service#country-diff)

### Foundation

Adds OIOUBL fields to payment terms, company information and country/region, with matching page extensions.

Why: Learn lists payment terms and OIOUBL profile selection as part of OIOUBL setup.

Objects: [tableextension/13640 "OIOUBL-Payment Terms"](../objects/tableextension/13640-dk.md) (own), [pageextension/13653 "OIOUBL-Payment Terms"](../objects/pageextension/13653-dk.md) (own), [tableextension/13659 "OIOUBL-Company Information"](../objects/tableextension/13659-dk.md) (own), [tableextension/13660 "OIOUBL-Country/Region"](../objects/tableextension/13660-dk.md) (own), [pageextension/13645 "OIOUBL-Country/Regions"](../objects/pageextension/13645-dk.md) (own).

[All 5 objects of Foundation in the diff](?ns=Foundation#country-diff)

### eServices

Integrates OIOUBL with E-Documents: a format enum extension, a draft import codeunit and a handler codeunit.

Why: Learn describes setting up NemHandel e-invoicing through E-Document Services with OIOUBL or Peppol BIS 3 formats.

Objects: [codeunit/13913 "E-Document OIOUBL Handler"](../objects/codeunit/13913-dk.md) (own), [codeunit/13911 "EDoc Import OIOUBL"](../objects/codeunit/13911-dk.md) (own), [enumextension/13910 "E-Doc. OIOUBL Format"](../objects/enumextension/13910-dk.md) (own), [enumextension/13911 "OIOUBL EDoc Read into Draft"](../objects/enumextension/13911-dk.md) (own).

[All 4 objects of eServices in the diff](?ns=eServices#country-diff)

### Payroll

Adds import of Danish payroll provider files: a data exchange definition import codeunit, a setup page, a general journal page extension and the Proløn import xmlport.

Why: Learn describes importing payroll transactions from providers like Danløn and Dataløn through the general journal.

Objects: [codeunit/13640 "ImportPayrollDataExchDef"](../objects/codeunit/13640-dk.md) (own), [page/13640 "Setup DK Payroll Service"](../objects/page/13640-dk.md) (own), [pageextension/13641 "DK General Journal"](../objects/pageextension/13641-dk.md) (own), [xmlport/13600 "Data Exch. Imp.- Proløn"](../objects/xmlport/13600-dk.md) (own).

[All 4 objects of Payroll in the diff](?ns=Payroll#country-diff)

### (no namespace)

Holds the C5 Data Loader Status table used by the C5 migration.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [table/1902 "C5 Data Loader Status"](../objects/table/1902-dk.md) (own).

[All 1 objects of (no namespace) in the diff](?ns=(no%20namespace)#country-diff)

### ExpenseAgent

Adds an Expense Event Subscriber DK codeunit for the Danish layer of the expense agent.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [codeunit/6918 "Expense Event Subscriber DK"](../objects/codeunit/6918-dk.md) (own).

[All 1 objects of ExpenseAgent in the diff](?ns=ExpenseAgent#country-diff)

### Inventory

Extends the Item Charge table with OIOUBL fields.

Why: Learn lists item charge setup as part of the OIOUBL extension setup.

Objects: [tableextension/13651 "OIOUBL-Item Charge"](../objects/tableextension/13651-dk.md) (own).

[All 1 objects of Inventory in the diff](?ns=Inventory#country-diff)

### IO

Extends the Record Export Buffer table with OIOUBL-specific handling for exported files.

Why: not explained by a Learn page in the input; the code shows the change, not the requirement.

Objects: [tableextension/13661 "OIOUBL-Record Export Buffer"](../objects/tableextension/13661-dk.md) (own).

[All 1 objects of IO in the diff](?ns=IO#country-diff)

## Objects of its own

431 objects only this country has.

- [codeunit/1860 "C5 Data Migration Mgt."](../objects/codeunit/1860-dk.md)
- [codeunit/1861 "C5 Wizard Integration"](../objects/codeunit/1861-dk.md)
- [codeunit/1862 "C5 LedTable Migrator"](../objects/codeunit/1862-dk.md)
- [codeunit/1863 "C5 Schema Reader"](../objects/codeunit/1863-dk.md)
- [codeunit/1864 "C5 VendTable Migrator"](../objects/codeunit/1864-dk.md)
- [codeunit/1865 "C5 Helper Functions"](../objects/codeunit/1865-dk.md)
- [codeunit/1866 "C5 CustTable Migrator"](../objects/codeunit/1866-dk.md)
- [codeunit/1867 "C5 Item Migrator"](../objects/codeunit/1867-dk.md)
- [codeunit/1868 "C5 Data Loader"](../objects/codeunit/1868-dk.md)
- [codeunit/1869 "C5 Unzip"](../objects/codeunit/1869-dk.md)
- [codeunit/1870 "C5 Migr. Dashboard Mgt"](../objects/codeunit/1870-dk.md)
- [codeunit/1871 "C5 LedTrans Migrator"](../objects/codeunit/1871-dk.md)
- [codeunit/1872 "C5 Telemetry"](../objects/codeunit/1872-dk.md)
- [codeunit/1898 "C5 Install"](../objects/codeunit/1898-dk.md)
- [codeunit/6918 "Expense Event Subscriber DK"](../objects/codeunit/6918-dk.md)
- [codeunit/13600 "DKCore Upgrade Tags"](../objects/codeunit/13600-dk.md)
- [codeunit/13601 "DK Core Event Subscribers"](../objects/codeunit/13601-dk.md)
- [codeunit/13602 "Upgrade Local Permission Set"](../objects/codeunit/13602-dk.md)
- [codeunit/13603 "Install DK Core"](../objects/codeunit/13603-dk.md)
- [codeunit/13604 "Elec. VAT Decl. Archiving"](../objects/codeunit/13604-dk.md)
- [codeunit/13605 "Elec. VAT Decl. Http Comm."](../objects/codeunit/13605-dk.md)
- [codeunit/13606 "Elec. VAT Decl. Create"](../objects/codeunit/13606-dk.md)
- [codeunit/13607 "Elec. VAT Decl. Cryptography"](../objects/codeunit/13607-dk.md)
- [codeunit/13608 "Nemhandel Status Page Bckgrnd"](../objects/codeunit/13608-dk.md)
- [codeunit/13609 "Upd. Registered with Nemhandel"](../objects/codeunit/13609-dk.md)
- [codeunit/13610 "Elec. VAT Decl. Get Periods"](../objects/codeunit/13610-dk.md)
- [codeunit/13611 "Elec. VAT Decl. Install"](../objects/codeunit/13611-dk.md)
- [codeunit/13612 "Elec. VAT Decl. SKAT API"](../objects/codeunit/13612-dk.md)
- [codeunit/13613 "Elec. VAT Decl. Submit"](../objects/codeunit/13613-dk.md)
- [codeunit/13614 "Elec. VAT Decl. Validate"](../objects/codeunit/13614-dk.md)
- [codeunit/13615 "Elec. VAT Decl. Check Builder"](../objects/codeunit/13615-dk.md)
- [codeunit/13616 "Elec. VAT Decl. Submit Builder"](../objects/codeunit/13616-dk.md)
- [codeunit/13617 "Elec. VAT Decl. Period Builder"](../objects/codeunit/13617-dk.md)
- [codeunit/13618 "Elec. VAT Decl. Xml"](../objects/codeunit/13618-dk.md)
- [codeunit/13619 "Elec. VAT Decl. Http Response"](../objects/codeunit/13619-dk.md)
- [codeunit/13620 "Elec. VAT Decl. Check Status"](../objects/codeunit/13620-dk.md)
- [codeunit/13621 "Digital Voucher DK Impl."](../objects/codeunit/13621-dk.md)
- [codeunit/13622 "OIOUBL-Subscribers"](../objects/codeunit/13622-dk.md)
- [codeunit/13624 "OIOUBL-Initialize"](../objects/codeunit/13624-dk.md)
- [codeunit/13625 "OIOUBL-Document Encode"](../objects/codeunit/13625-dk.md)
- [codeunit/13626 "OIOUBL-Sales-Post Subscriber"](../objects/codeunit/13626-dk.md)
- [codeunit/13627 "OIOUBL-Sales Post Print Sub."](../objects/codeunit/13627-dk.md)
- [codeunit/13628 "Nemhandel Status Mgt."](../objects/codeunit/13628-dk.md)
- [codeunit/13629 "OIOUBL-Check Sales Header"](../objects/codeunit/13629-dk.md)
- [codeunit/13630 "OIOUBL-Check Fin. Charge Memo"](../objects/codeunit/13630-dk.md)
- [codeunit/13631 "OIOUBL-Check Reminder"](../objects/codeunit/13631-dk.md)
- [codeunit/13632 "OIOUBL-Check Sales Invoice"](../objects/codeunit/13632-dk.md)
- [codeunit/13633 "OIOUBL-Check Sales Cr. Memo"](../objects/codeunit/13633-dk.md)
- [codeunit/13634 "OIOUBL-Check Issued Fin. Chrg"](../objects/codeunit/13634-dk.md)
- [codeunit/13635 "OIOUBL-Check Issued Reminder"](../objects/codeunit/13635-dk.md)
- [codeunit/13636 "OIOUBL-Export Sales Invoice"](../objects/codeunit/13636-dk.md)
- [codeunit/13637 "OIOUBL-Export Sales Cr. Memo"](../objects/codeunit/13637-dk.md)
- [codeunit/13638 "OIOUBL-Exp. Issued Fin. Chrg"](../objects/codeunit/13638-dk.md)
- [codeunit/13639 "OIOUBL-Export Issued Reminder"](../objects/codeunit/13639-dk.md)
- [codeunit/13640 "ImportPayrollDataExchDef"](../objects/codeunit/13640-dk.md)
- [codeunit/13641 "OIOUBL-Check Service Invoice"](../objects/codeunit/13641-dk.md)
- [codeunit/13642 "OIOUBL-Check Service Cr. Memo"](../objects/codeunit/13642-dk.md)
- [codeunit/13643 "OIOUBL-Export Service Invoice"](../objects/codeunit/13643-dk.md)
- [codeunit/13644 "OIOUBL-Export Service Cr.Memo"](../objects/codeunit/13644-dk.md)
- [codeunit/13645 "Digital Voucher DK Install."](../objects/codeunit/13645-dk.md)
- [codeunit/13646 "OIOUBL-Management"](../objects/codeunit/13646-dk.md)
- [codeunit/13647 "OIOUBL-Service-Post Subscriber"](../objects/codeunit/13647-dk.md)
- [codeunit/13648 "OIOUBL-Common Logic"](../objects/codeunit/13648-dk.md)
- [codeunit/13649 "OIOUBL-Check Service Header"](../objects/codeunit/13649-dk.md)
- [codeunit/13650 "FIKManagement"](../objects/codeunit/13650-dk.md)
- [codeunit/13651 "FIK_MatchBankRecLines"](../objects/codeunit/13651-dk.md)
- [codeunit/13652 "FIK_MatchGenJournalLines"](../objects/codeunit/13652-dk.md)
- [codeunit/13653 "PaymentExportManagement"](../objects/codeunit/13653-dk.md)
- [codeunit/13654 "FIK_ReadFile"](../objects/codeunit/13654-dk.md)
- [codeunit/13655 "FIK Demodata"](../objects/codeunit/13655-dk.md)
- [codeunit/13656 "FIK Data Migration"](../objects/codeunit/13656-dk.md)
- [codeunit/13657 "FIKSubscribers"](../objects/codeunit/13657-dk.md)
- [codeunit/13658 "Http Client Nemhandel Status"](../objects/codeunit/13658-dk.md)
- [codeunit/13659 "Http Response Msg Nemhandel"](../objects/codeunit/13659-dk.md)
- [codeunit/13660 "Export BankData Fixed Width"](../objects/codeunit/13660-dk.md)
- [codeunit/13661 "OIOUBL-Sales Invoice Line Sub."](../objects/codeunit/13661-dk.md)
- [codeunit/13662 "OIOUBL-Sales Line Suscriber"](../objects/codeunit/13662-dk.md)
- [codeunit/13663 "OIOUBL-Fin Charg Memo Line Sub"](../objects/codeunit/13663-dk.md)
- [codeunit/13664 "OIOUBL-Reminder Line Sub"](../objects/codeunit/13664-dk.md)
- [codeunit/13665 "OIOUBL-Reminder Issue Sub"](../objects/codeunit/13665-dk.md)
- [codeunit/13666 "OIOUBL-Fin Charg Memo Iss Sub"](../objects/codeunit/13666-dk.md)
- [codeunit/13667 "OIOUBL-File Events"](../objects/codeunit/13667-dk.md)
- [codeunit/13668 "Elec. VAT Decl. Az. Key Vault"](../objects/codeunit/13668-dk.md)
- [codeunit/13669 "Elec. VAT Decl. Upgrade"](../objects/codeunit/13669-dk.md)
- [codeunit/13672 "Exp. Flat File Validation"](../objects/codeunit/13672-dk.md)
- [codeunit/13673 "FIK Install"](../objects/codeunit/13673-dk.md)
- [codeunit/13687 "Create Standard Data SAF-T DK"](../objects/codeunit/13687-dk.md)
- [codeunit/13688 "Install SAF-T DK"](../objects/codeunit/13688-dk.md)
- [codeunit/13689 "Xml Data Handling SAF-T DK"](../objects/codeunit/13689-dk.md)
- [codeunit/13690 "MS - ECSL Report Export File"](../objects/codeunit/13690-dk.md)
- [codeunit/13691 "Setup VAT Reports Config DK"](../objects/codeunit/13691-dk.md)
- [codeunit/13694 "SAF-T Notification Mgt. DK"](../objects/codeunit/13694-dk.md)
- [codeunit/13695 "Standard Account DK"](../objects/codeunit/13695-dk.md)
- [codeunit/13696 "Standard Tax Code DK"](../objects/codeunit/13696-dk.md)
- [codeunit/13697 "Data Check SAF-T DK"](../objects/codeunit/13697-dk.md)
- [codeunit/13698 "Regnskab Basis Export"](../objects/codeunit/13698-dk.md)
- [codeunit/13910 "OIOUBL Format"](../objects/codeunit/13910-dk.md)
- [codeunit/13911 "EDoc Import OIOUBL"](../objects/codeunit/13911-dk.md)
- [codeunit/13913 "E-Document OIOUBL Handler"](../objects/codeunit/13913-dk.md)
- [enum/13604 "Elec. VAT Decl. Request Type"](../objects/enum/13604-dk.md)
- [enum/13605 "Elec. VAT Decl. Rep. Frequency"](../objects/enum/13605-dk.md)
- [enum/13608 "Nemhandel Company Status"](../objects/enum/13608-dk.md)
- [enum/13620 "Payment Type Validation"](../objects/enum/13620-dk.md)
- [enumextension/13687 "SAF-T Modification DK"](../objects/enumextension/13687-dk.md)
- [enumextension/13695 "Standard Account Type SAF-T DK"](../objects/enumextension/13695-dk.md)
- [enumextension/13910 "E-Doc. OIOUBL Format"](../objects/enumextension/13910-dk.md)
- [enumextension/13911 "OIOUBL EDoc Read into Draft"](../objects/enumextension/13911-dk.md)
- [interface/elec. vat decl. communication "Elec. VAT Decl. Communication"](../objects/interface/elec-vat-decl-communication-dk.md)
- [interface/elec. vat decl. payload builder "Elec. VAT Decl. Payload Builder"](../objects/interface/elec-vat-decl-payload-builder-dk.md)
- [interface/elec. vat decl. response "Elec. VAT Decl. Response"](../objects/interface/elec-vat-decl-response-dk.md)
- [interface/http client nemhandel status "Http Client Nemhandel Status"](../objects/interface/http-client-nemhandel-status-dk.md)
- [interface/http response msg nemhandel "Http Response Msg Nemhandel"](../objects/interface/http-response-msg-nemhandel-dk.md)
- [page/1860 "C5 CustTable"](../objects/page/1860-dk.md)
- [page/1861 "C5 VendTable"](../objects/page/1861-dk.md)
- [page/1862 "C5 InvenTable"](../objects/page/1862-dk.md)
- [page/1863 "C5 LedTable"](../objects/page/1863-dk.md)
- [page/1864 "C5 CN8Code"](../objects/page/1864-dk.md)
- [page/1867 "C5 InvenItemGroup"](../objects/page/1867-dk.md)
- [page/1868 "C5 InvenPriceGroup"](../objects/page/1868-dk.md)
- [page/1869 "C5 Payment"](../objects/page/1869-dk.md)
- [page/1874 "C5 Employee"](../objects/page/1874-dk.md)
- [page/1882 "C5 Delivery"](../objects/page/1882-dk.md)
- [page/1883 "C5 CustDiscGroup"](../objects/page/1883-dk.md)
- [page/1884 "C5 ProcCode"](../objects/page/1884-dk.md)
- [page/1885 "C5 InvenDiscGroup"](../objects/page/1885-dk.md)
- [page/1886 "C5 VendDiscGroup"](../objects/page/1886-dk.md)
- [page/1888 "C5 InvenPrice"](../objects/page/1888-dk.md)
- [page/1890 "C5 InvenTrans"](../objects/page/1890-dk.md)
- [page/1891 "C5 CustGroup"](../objects/page/1891-dk.md)
- [page/1892 "C5 CustTrans"](../objects/page/1892-dk.md)
- [page/1893 "C5 VendGroup"](../objects/page/1893-dk.md)
- [page/1894 "C5 VendTrans"](../objects/page/1894-dk.md)
- [page/1898 "C5 InvenBOM List"](../objects/page/1898-dk.md)
- [page/1899 "C5 CustTable List"](../objects/page/1899-dk.md)
- [page/1900 "C5 VendTable List"](../objects/page/1900-dk.md)
- [page/1901 "C5 InvenTable List"](../objects/page/1901-dk.md)
- [page/1902 "C5 LedTrans List"](../objects/page/1902-dk.md)
- [page/1903 "C5 LedTable List"](../objects/page/1903-dk.md)
- [page/1904 "C5 Company Settings"](../objects/page/1904-dk.md)
- [page/1905 "C5 VendContact"](../objects/page/1905-dk.md)
- [page/1906 "C5 CustContact"](../objects/page/1906-dk.md)
- [page/13605 "Elec. VAT Decl. Setup"](../objects/page/13605-dk.md)
- [page/13606 "Elec. VAT Decl. Comm. Logs"](../objects/page/13606-dk.md)
- [page/13640 "Setup DK Payroll Service"](../objects/page/13640-dk.md)
- [page/13645 "OIOUBL-Profile List"](../objects/page/13645-dk.md)
- [page/13646 "OIOUBL-setup"](../objects/page/13646-dk.md)
- [page/13647 "OIOUBL-Company Info. Setup"](../objects/page/13647-dk.md)
- [page/13687 "RB Accounting File"](../objects/page/13687-dk.md)
- [page/13688 "Imported SAF-T Files DK"](../objects/page/13688-dk.md)
- [pageextension/1900 "Data Migration Overview Ext."](../objects/pageextension/1900-dk.md)
- [pageextension/13601 "CompanyInformationExt"](../objects/pageextension/13601-dk.md)
- [pageextension/13602 "GeneralLedgerSetupExt"](../objects/pageextension/13602-dk.md)
- [pageextension/13605 "VendorCardExt"](../objects/pageextension/13605-dk.md)
- [pageextension/13608 "Company Info. Nemhandel Status"](../objects/pageextension/13608-dk.md)
- [pageextension/13609 "Companies Nemhandel Status"](../objects/pageextension/13609-dk.md)
- [pageextension/13610 "CompanyInformation"](../objects/pageextension/13610-dk.md)
- [pageextension/13611 "VendorCard"](../objects/pageextension/13611-dk.md)
- [pageextension/13612 "VendorLedgerEntries"](../objects/pageextension/13612-dk.md)
- [pageextension/13613 "GeneralJournal"](../objects/pageextension/13613-dk.md)
- [pageextension/13614 "PurchaseQuote"](../objects/pageextension/13614-dk.md)
- [pageextension/13615 "PurchaseOrder"](../objects/pageextension/13615-dk.md)
- [pageextension/13616 "PurchaseInvoice"](../objects/pageextension/13616-dk.md)
- [pageextension/13617 "PostedPurchaseInvoice"](../objects/pageextension/13617-dk.md)
- [pageextension/13618 "PaymentJournal"](../objects/pageextension/13618-dk.md)
- [pageextension/13619 "PaymentMethods"](../objects/pageextension/13619-dk.md)
- [pageextension/13620 "PaymentReconciliationJournal"](../objects/pageextension/13620-dk.md)
- [pageextension/13621 "PaymentApplication"](../objects/pageextension/13621-dk.md)
- [pageextension/13622 "PmtReconciliationJournals"](../objects/pageextension/13622-dk.md)
- [pageextension/13623 "CustLedgerEntries"](../objects/pageextension/13623-dk.md)
- [pageextension/13624 "GeneralLedgerSetup"](../objects/pageextension/13624-dk.md)
- [pageextension/13628 "Accountant Activit. Nemhandel"](../objects/pageextension/13628-dk.md)
- [pageextension/13629 "O365 Activities Nemhandel"](../objects/pageextension/13629-dk.md)
- [pageextension/13630 "Sales Mgr. Activit. Nemhandel"](../objects/pageextension/13630-dk.md)
- [pageextension/13631 "SO Processor Activ. Nemhandel"](../objects/pageextension/13631-dk.md)
- [pageextension/13632 "User Security Activ. Nemhandel"](../objects/pageextension/13632-dk.md)
- [pageextension/13635 "OIOUBL-Service Order Archive"](../objects/pageextension/13635-dk.md)
- [pageextension/13641 "DK General Journal"](../objects/pageextension/13641-dk.md)
- [pageextension/13645 "OIOUBL-Country/Regions"](../objects/pageextension/13645-dk.md)
- [pageextension/13646 "OIOUBL-Posted Sales Invoice"](../objects/pageextension/13646-dk.md)
- [pageextension/13647 "OIOUBL-Posted Sales Inv Sub"](../objects/pageextension/13647-dk.md)
- [pageextension/13648 "OIOUBL-PostedSalesCreditMemo"](../objects/pageextension/13648-dk.md)
- [pageextension/13649 "OIOUBL-PostedSalesCrMemoSub"](../objects/pageextension/13649-dk.md)
- [pageextension/13650 "OIOUBL-Posted Sales Invoices"](../objects/pageextension/13650-dk.md)
- [pageextension/13651 "OIOUBL-PostedSalesCreditMemos"](../objects/pageextension/13651-dk.md)
- [pageextension/13652 "OIOUBL-Customer Card"](../objects/pageextension/13652-dk.md)
- [pageextension/13653 "OIOUBL-Payment Terms"](../objects/pageextension/13653-dk.md)
- [pageextension/13654 "OIOUBL-Sales Order"](../objects/pageextension/13654-dk.md)
- [pageextension/13655 "OIOUBL-Sales Invoice"](../objects/pageextension/13655-dk.md)
- [pageextension/13656 "OIOUBL-Reminder"](../objects/pageextension/13656-dk.md)
- [pageextension/13657 "OIOUBL-ReminderLines"](../objects/pageextension/13657-dk.md)
- [pageextension/13658 "OIOUBL-IssuedReminder"](../objects/pageextension/13658-dk.md)
- [pageextension/13659 "OIOUBL-Issued Reminder Lines"](../objects/pageextension/13659-dk.md)
- [pageextension/13660 "OIOUBL-Sales Credit Memo"](../objects/pageextension/13660-dk.md)
- [pageextension/13661 "OIOUBL-Finance Charge Memo"](../objects/pageextension/13661-dk.md)
- [pageextension/13662 "OIOUBL-FinChrgMemoLines"](../objects/pageextension/13662-dk.md)
- [pageextension/13663 "OIOUBL-IssuedFinanceChargeMemo"](../objects/pageextension/13663-dk.md)
- [pageextension/13664 "OIOUBL-IssuedFinChrgMemoLines"](../objects/pageextension/13664-dk.md)
- [pageextension/13665 "OIOUBL-IssuedFinChrgMemoList"](../objects/pageextension/13665-dk.md)
- [pageextension/13666 "OIOUBL-Sales Receivables Setup"](../objects/pageextension/13666-dk.md)
- [pageextension/13667 "OIOUBL-Sales Order Subform"](../objects/pageextension/13667-dk.md)
- [pageextension/13668 "OIOUBL-Sales Invoice Subform"](../objects/pageextension/13668-dk.md)
- [pageextension/13669 "OIOUBL-Currencies"](../objects/pageextension/13669-dk.md)
- [pageextension/13670 "OIOUBL-Blanked Sales Order"](../objects/pageextension/13670-dk.md)
- [pageextension/13671 "OIOUBL-BlanketSalesOrderSub"](../objects/pageextension/13671-dk.md)
- [pageextension/13672 "OIOUBL-Service Mgt. Setup"](../objects/pageextension/13672-dk.md)
- [pageextension/13673 "OIOUBL-Sales Order Archive"](../objects/pageextension/13673-dk.md)
- [pageextension/13674 "OIOUBL-Service Order"](../objects/pageextension/13674-dk.md)
- [pageextension/13675 "OIOUBL-Service Lines"](../objects/pageextension/13675-dk.md)
- [pageextension/13676 "OIOUBL-Service Invoice"](../objects/pageextension/13676-dk.md)
- [pageextension/13677 "OIOUBL-Service Invoice Subform"](../objects/pageextension/13677-dk.md)
- [pageextension/13678 "OIOUBL-Service Credit Memo"](../objects/pageextension/13678-dk.md)
- [pageextension/13679 "OIOUBL-Service Credit Memo Sub"](../objects/pageextension/13679-dk.md)
- [pageextension/13680 "OIOUBL-Posted Service Cr Memo"](../objects/pageextension/13680-dk.md)
- [pageextension/13681 "OIOUBL-Posted Srv Cr Memo Sub"](../objects/pageextension/13681-dk.md)
- [pageextension/13682 "OIOUBL-Posted Service Invoice"](../objects/pageextension/13682-dk.md)
- [pageextension/13683 "OIOUBL-Posted Serv Invoice Sub"](../objects/pageextension/13683-dk.md)
- [pageextension/13684 "OIOUBL-Sales Return Order"](../objects/pageextension/13684-dk.md)
- [pageextension/13685 "OIOUBL-Sales Return Order Sub"](../objects/pageextension/13685-dk.md)
- [pageextension/13686 "OIOUBL-Sales Cr. Memo Subform"](../objects/pageextension/13686-dk.md)
- [pageextension/13687 "Audit File Export Docs. DK"](../objects/pageextension/13687-dk.md)
- [pageextension/13691 "VATDK-Sales Order"](../objects/pageextension/13691-dk.md)
- [pageextension/13692 "VATDK-Sales Invoice"](../objects/pageextension/13692-dk.md)
- [pageextension/13693 "VATDK-Sales Credit Memo"](../objects/pageextension/13693-dk.md)
- [pageextension/13694 "VATDK-Purchase Quote"](../objects/pageextension/13694-dk.md)
- [pageextension/13695 "VATDK-Purchase Order"](../objects/pageextension/13695-dk.md)
- [pageextension/13696 "VATDK-Blanket Sales Order"](../objects/pageextension/13696-dk.md)
- [pageextension/13697 "VATDK-Blanket Purchase Order"](../objects/pageextension/13697-dk.md)
- [pageextension/13698 "VATDK-Purchase Invoice"](../objects/pageextension/13698-dk.md)
- [pageextension/13910 "OIOUBL Sustainability Setup"](../objects/pageextension/13910-dk.md)
- [permissionset/13608 "Nemhandel Status Objects DK"](../objects/permissionset/13608-dk.md)
- [permissionset/13610 "Elec. VAT Decl. Objects"](../objects/permissionset/13610-dk.md)
- [permissionset/13611 "Elec. VAT Decl. Read"](../objects/permissionset/13611-dk.md)
- [permissionset/13612 "Elec. VAT Decl. Edit"](../objects/permissionset/13612-dk.md)
- [permissionset/13625 "Digital Voucher DK - Objects"](../objects/permissionset/13625-dk.md)
- [permissionset/13687 "SAF-T Objects DK"](../objects/permissionset/13687-dk.md)
- [permissionset/13688 "SAF-T DK - Read"](../objects/permissionset/13688-dk.md)
- [permissionset/13689 "SAF-T DK - Edit"](../objects/permissionset/13689-dk.md)
- [permissionset/13910 "EDoc. OIOUBL Format"](../objects/permissionset/13910-dk.md)
- [permissionset/13911 "EDocOIOUBL - Read"](../objects/permissionset/13911-dk.md)
- [permissionset/13912 "EDocOIOUBL - Edit"](../objects/permissionset/13912-dk.md)
- [permissionsetextension/2316 "D365 TEAM MEMBER - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/2316-dk.md)
- [permissionsetextension/4305 "D365 BASIC - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/4305-dk.md)
- [permissionsetextension/6432 "D365 BUS FULL ACCESS - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/6432-dk.md)
- [permissionsetextension/8351 "D365 TEAM MEMBER - OIOUBL"](../objects/permissionsetextension/8351-dk.md)
- [permissionsetextension/8390 "D365 BUS PREMIUM - C5 2012 Data Migration"](../objects/permissionsetextension/8390-dk.md)
- [permissionsetextension/8401 "INTELLIGENT CLOUD - OIOUBL"](../objects/permissionsetextension/8401-dk.md)
- [permissionsetextension/9722 "D365 BUS PREMIUM - OIOUBL"](../objects/permissionsetextension/9722-dk.md)
- [permissionsetextension/13608 "D365 BASIC ISV - Nemhandel Status"](../objects/permissionsetextension/13608-dk.md)
- [permissionsetextension/13609 "D365 BASIC - Nemhandel Status"](../objects/permissionsetextension/13609-dk.md)
- [permissionsetextension/13613 "D365 BASIC ISV - Elec. VAT Decl."](../objects/permissionsetextension/13613-dk.md)
- [permissionsetextension/13614 "D365 BASIC - Elec. VAT Decl."](../objects/permissionsetextension/13614-dk.md)
- [permissionsetextension/13615 "D365 Read - Elec. VAT Decl."](../objects/permissionsetextension/13615-dk.md)
- [permissionsetextension/13616 "D365 TEAM MEMBER - Elec. VAT Decl."](../objects/permissionsetextension/13616-dk.md)
- [permissionsetextension/13617 "INTELLIGENT CLOUD - Elec. VAT Decl."](../objects/permissionsetextension/13617-dk.md)
- [permissionsetextension/13618 "LOCAL - Elec. VAT Decl."](../objects/permissionsetextension/13618-dk.md)
- [permissionsetextension/13621 "D365 BASIC - Dig. Voucher DK"](../objects/permissionsetextension/13621-dk.md)
- [permissionsetextension/13622 "D365 BASIC ISV - Dig. Voucher DK"](../objects/permissionsetextension/13622-dk.md)
- [permissionsetextension/13623 "D365 READ - Dig. Voucher DK"](../objects/permissionsetextension/13623-dk.md)
- [permissionsetextension/13624 "D365 TEAM MEMBER - Dig. Voucher DK"](../objects/permissionsetextension/13624-dk.md)
- [permissionsetextension/13626 "INTELLIGENT CLOUD - Dig. Voucher DK"](../objects/permissionsetextension/13626-dk.md)
- [permissionsetextension/13628 "D365 READ - Nemhandel Status"](../objects/permissionsetextension/13628-dk.md)
- [permissionsetextension/13629 "D365 TEAM MEMBER - Nemhandel Status"](../objects/permissionsetextension/13629-dk.md)
- [permissionsetextension/13630 "INTELL. CLOUD - Nemhandel Status"](../objects/permissionsetextension/13630-dk.md)
- [permissionsetextension/13631 "LOCAL - Nemhandel Status"](../objects/permissionsetextension/13631-dk.md)
- [permissionsetextension/13687 "D365 BASIC ISV - SAF-T DK"](../objects/permissionsetextension/13687-dk.md)
- [permissionsetextension/13688 "D365 BASIC - SAF-T DK"](../objects/permissionsetextension/13688-dk.md)
- [permissionsetextension/13689 "D365 READ - SAF-T DK"](../objects/permissionsetextension/13689-dk.md)
- [permissionsetextension/13695 "D365 TEAM MEMBER - SAF-T DK"](../objects/permissionsetextension/13695-dk.md)
- [permissionsetextension/13696 "INTELLIGENT CLOUD - SAF-T DK"](../objects/permissionsetextension/13696-dk.md)
- [permissionsetextension/13697 "LOCAL - SAF-T DK"](../objects/permissionsetextension/13697-dk.md)
- [permissionsetextension/13910 "D365 Read - OIOUBL Format"](../objects/permissionsetextension/13910-dk.md)
- [permissionsetextension/13911 "D365 Basic - OIOUBL Format"](../objects/permissionsetextension/13911-dk.md)
- [permissionsetextension/17036 "D365 BASIC - C5 2012 Data Migration"](../objects/permissionsetextension/17036-dk.md)
- [permissionsetextension/17140 "D365 READ - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/17140-dk.md)
- [permissionsetextension/17777 "D365 FULL ACCESS - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/17777-dk.md)
- [permissionsetextension/23761 "D365 READ - OIOUBL"](../objects/permissionsetextension/23761-dk.md)
- [permissionsetextension/24718 "D365 READ - C5 2012 Data Migration"](../objects/permissionsetextension/24718-dk.md)
- [permissionsetextension/25311 "D365 BUS FULL ACCESS - C5 2012 Data Migration"](../objects/permissionsetextension/25311-dk.md)
- [permissionsetextension/25457 "D365 TEAM MEMBER - C5 2012 Data Migration"](../objects/permissionsetextension/25457-dk.md)
- [permissionsetextension/25738 "D365 BASIC ISV - C5 2012 Data Migration"](../objects/permissionsetextension/25738-dk.md)
- [permissionsetextension/26650 "D365 BUS FULL ACCESS - OIOUBL"](../objects/permissionsetextension/26650-dk.md)
- [permissionsetextension/28353 "INTELLIGENT CLOUD - C5 2012 Data Migration"](../objects/permissionsetextension/28353-dk.md)
- [permissionsetextension/28755 "D365 FULL ACCESS - C5 2012 Data Migration"](../objects/permissionsetextension/28755-dk.md)
- [permissionsetextension/33527 "D365 BUS PREMIUM - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/33527-dk.md)
- [permissionsetextension/34450 "D365 FULL ACCESS - OIOUBL"](../objects/permissionsetextension/34450-dk.md)
- [permissionsetextension/43222 "D365 BASIC ISV - OIOUBL"](../objects/permissionsetextension/43222-dk.md)
- [permissionsetextension/43588 "D365 BASIC ISV - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/43588-dk.md)
- [permissionsetextension/45333 "D365 BASIC - OIOUBL"](../objects/permissionsetextension/45333-dk.md)
- [permissionsetextension/47088 "INTELLIGENT CLOUD - Payment and Reconciliation Formats (DK)"](../objects/permissionsetextension/47088-dk.md)
- [report/13630 "OIOUBL-Create Elec. Invoices"](../objects/report/13630-dk.md)
- [report/13631 "OIOUBL-Create Elec. Cr. Memos"](../objects/report/13631-dk.md)
- [report/13632 "OIOUBL-Create Elec. Reminders"](../objects/report/13632-dk.md)
- [report/13633 "OIOUBL-Create E-Fin Chrg Memos"](../objects/report/13633-dk.md)
- [report/13634 "OIOUBL-Create Elec. Srv. Inv."](../objects/report/13634-dk.md)
- [report/13635 "OIOUBL-Create Elec Srv Cr Memo"](../objects/report/13635-dk.md)
- [reportextension/13601 "CancelFALedgerEntriesExt"](../objects/reportextension/13601-dk.md)
- [reportextension/13602 "CopyDepreciationBookExt"](../objects/reportextension/13602-dk.md)
- [reportextension/13603 "CopyFAEntriestoGLBudgetExt"](../objects/reportextension/13603-dk.md)
- [reportextension/13604 "FinanceChargeMemoExt"](../objects/reportextension/13604-dk.md)
- [reportextension/13605 "IndexFixedAssetsExt"](../objects/reportextension/13605-dk.md)
- [reportextension/13606 "ReminderExt"](../objects/reportextension/13606-dk.md)
- [reportextension/13607 "StatementExt"](../objects/reportextension/13607-dk.md)
- [table/1860 "C5 CustTable"](../objects/table/1860-dk.md)
- [table/1861 "C5 VendTable"](../objects/table/1861-dk.md)
- [table/1862 "C5 InvenTable"](../objects/table/1862-dk.md)
- [table/1863 "C5 LedTable"](../objects/table/1863-dk.md)
- [table/1864 "C5 CN8Code"](../objects/table/1864-dk.md)
- [table/1865 "C5 Department"](../objects/table/1865-dk.md)
- [table/1866 "C5 InvenDiscGroup"](../objects/table/1866-dk.md)
- [table/1867 "C5 InvenItemGroup"](../objects/table/1867-dk.md)
- [table/1868 "C5 Centre"](../objects/table/1868-dk.md)
- [table/1869 "C5 VatGroup"](../objects/table/1869-dk.md)
- [table/1870 "C5 UnitCode"](../objects/table/1870-dk.md)
- [table/1871 "C5 ItemTrackGroup"](../objects/table/1871-dk.md)
- [table/1872 "C5 Purpose"](../objects/table/1872-dk.md)
- [table/1873 "C5 Payment"](../objects/table/1873-dk.md)
- [table/1874 "C5 Employee"](../objects/table/1874-dk.md)
- [table/1880 "C5 InvenPriceGroup"](../objects/table/1880-dk.md)
- [table/1881 "C5 VendDiscGroup"](../objects/table/1881-dk.md)
- [table/1882 "C5 Delivery"](../objects/table/1882-dk.md)
- [table/1883 "C5 CustDiscGroup"](../objects/table/1883-dk.md)
- [table/1884 "C5 ProcCode"](../objects/table/1884-dk.md)
- [table/1885 "C5 InvenCustDisc"](../objects/table/1885-dk.md)
- [table/1886 "C5 Country"](../objects/table/1886-dk.md)
- [table/1887 "C5 Schema Parameters"](../objects/table/1887-dk.md)
- [table/1888 "C5 InvenPrice"](../objects/table/1888-dk.md)
- [table/1890 "C5 InvenTrans"](../objects/table/1890-dk.md)
- [table/1891 "C5 CustGroup"](../objects/table/1891-dk.md)
- [table/1892 "C5 CustTrans"](../objects/table/1892-dk.md)
- [table/1893 "C5 VendGroup"](../objects/table/1893-dk.md)
- [table/1894 "C5 VendTrans"](../objects/table/1894-dk.md)
- [table/1895 "C5 ExchRate"](../objects/table/1895-dk.md)
- [table/1896 "C5 InvenLocation"](../objects/table/1896-dk.md)
- [table/1897 "C5 LedTrans"](../objects/table/1897-dk.md)
- [table/1898 "C5 InvenBOM"](../objects/table/1898-dk.md)
- [table/1899 "C5 CustContact"](../objects/table/1899-dk.md)
- [table/1901 "C5 VendContact"](../objects/table/1901-dk.md)
- [table/1902 "C5 Data Loader Status"](../objects/table/1902-dk.md)
- [table/13604 "Elec. VAT Decl. Parameters"](../objects/table/13604-dk.md)
- [table/13605 "Elec. VAT Decl. Setup"](../objects/table/13605-dk.md)
- [table/13606 "Elec. VAT Decl. Communication"](../objects/table/13606-dk.md)
- [table/13625 "FIKUplift"](../objects/table/13625-dk.md)
- [table/13630 "OIOUBL-Profile"](../objects/table/13630-dk.md)
- [table/13673 "OIOUBL-Tax Group Buffer"](../objects/table/13673-dk.md)
- [table/13687 "Imported SAF-T File DK"](../objects/table/13687-dk.md)
- [table/13910 "OIOUBL E-Doc. Export Session"](../objects/table/13910-dk.md)
- [tableextension/13608 "Company Info. Nemhandel Status"](../objects/tableextension/13608-dk.md)
- [tableextension/13610 "CustLedgerEntry"](../objects/tableextension/13610-dk.md)
- [tableextension/13611 "Vendor"](../objects/tableextension/13611-dk.md)
- [tableextension/13612 "VendorLedgerEntry"](../objects/tableextension/13612-dk.md)
- [tableextension/13613 "PurchaseHeader"](../objects/tableextension/13613-dk.md)
- [tableextension/13614 "CompanyInformation"](../objects/tableextension/13614-dk.md)
- [tableextension/13615 "GeneralJournalLine"](../objects/tableextension/13615-dk.md)
- [tableextension/13616 "GeneralLedgerSetup"](../objects/tableextension/13616-dk.md)
- [tableextension/13617 "PurchaseInvoiceHeader"](../objects/tableextension/13617-dk.md)
- [tableextension/13618 "BankAccReconcilation"](../objects/tableextension/13618-dk.md)
- [tableextension/13619 "BankAccRecLine"](../objects/tableextension/13619-dk.md)
- [tableextension/13620 "PaymentMethod"](../objects/tableextension/13620-dk.md)
- [tableextension/13621 "PaymentBuffer"](../objects/tableextension/13621-dk.md)
- [tableextension/13622 "PaymentExportData"](../objects/tableextension/13622-dk.md)
- [tableextension/13623 "BankStatementMatchingBuffer"](../objects/tableextension/13623-dk.md)
- [tableextension/13624 "VendorPaymentBuffer"](../objects/tableextension/13624-dk.md)
- [tableextension/13630 "OIOUBL-Sales Invoice Header"](../objects/tableextension/13630-dk.md)
- [tableextension/13631 "OIOUBL-Sales Invoice Line"](../objects/tableextension/13631-dk.md)
- [tableextension/13632 "OIOUBL-Sales Cr.Memo Header"](../objects/tableextension/13632-dk.md)
- [tableextension/13633 "OIOUBL-Sales Cr.Memo Line"](../objects/tableextension/13633-dk.md)
- [tableextension/13634 "OIOUBL-Customer"](../objects/tableextension/13634-dk.md)
- [tableextension/13635 "OIOUBL-Service Header Archive"](../objects/tableextension/13635-dk.md)
- [tableextension/13636 "OIOUBL-Reminder Header"](../objects/tableextension/13636-dk.md)
- [tableextension/13637 "OIOUBL-Reminder Line"](../objects/tableextension/13637-dk.md)
- [tableextension/13638 "OIOUBL-Issued Reminder Header"](../objects/tableextension/13638-dk.md)
- [tableextension/13639 "OIOUBL-Issued Reminder Line"](../objects/tableextension/13639-dk.md)
- [tableextension/13640 "OIOUBL-Payment Terms"](../objects/tableextension/13640-dk.md)
- [tableextension/13641 "OIOUBL-FinChrgMemoHeader"](../objects/tableextension/13641-dk.md)
- [tableextension/13642 "OIOUBL-Fin. Charge Memo Line"](../objects/tableextension/13642-dk.md)
- [tableextension/13643 "OIOUBL-IssuedFinChrgMemoHeader"](../objects/tableextension/13643-dk.md)
- [tableextension/13644 "OIOUBL-IssuedFinChargeMemoLine"](../objects/tableextension/13644-dk.md)
- [tableextension/13645 "OIOUBL-Sales&Receivables Setup"](../objects/tableextension/13645-dk.md)
- [tableextension/13646 "OIOUBL-Sales Header"](../objects/tableextension/13646-dk.md)
- [tableextension/13647 "OIOUBL-Sales Line"](../objects/tableextension/13647-dk.md)
- [tableextension/13648 "OIOUBL-Currency"](../objects/tableextension/13648-dk.md)
- [tableextension/13649 "OIOUBL-Sales Header Archive"](../objects/tableextension/13649-dk.md)
- [tableextension/13650 "OIOUBL-Sales Line Archive"](../objects/tableextension/13650-dk.md)
- [tableextension/13651 "OIOUBL-Item Charge"](../objects/tableextension/13651-dk.md)
- [tableextension/13652 "OIOUBL-Service Header"](../objects/tableextension/13652-dk.md)
- [tableextension/13653 "tableextension20001"](../objects/tableextension/13653-dk.md)
- [tableextension/13654 "OIOUBL-Service Mgt. Setup"](../objects/tableextension/13654-dk.md)
- [tableextension/13655 "OIOUBL-Service Invoice Header"](../objects/tableextension/13655-dk.md)
- [tableextension/13656 "OIOUBL-Service Invoice Line"](../objects/tableextension/13656-dk.md)
- [tableextension/13657 "OIOUBL-Service Cr.Memo Header"](../objects/tableextension/13657-dk.md)
- [tableextension/13658 "OIOUBL-Service Cr.Memo Line"](../objects/tableextension/13658-dk.md)
- [tableextension/13659 "OIOUBL-Company Information"](../objects/tableextension/13659-dk.md)
- [tableextension/13660 "OIOUBL-Country/Region"](../objects/tableextension/13660-dk.md)
- [tableextension/13661 "OIOUBL-Record Export Buffer"](../objects/tableextension/13661-dk.md)
- [tableextension/13662 "OIOUBL-Service Line Archive"](../objects/tableextension/13662-dk.md)
- [tableextension/13910 "OIOUBL Sustainability Setup"](../objects/tableextension/13910-dk.md)
- [xmlport/1860 "C5 LedTable"](../objects/xmlport/1860-dk.md)
- [xmlport/1861 "C5 Centre"](../objects/xmlport/1861-dk.md)
- [xmlport/1862 "C5 CN8Code"](../objects/xmlport/1862-dk.md)
- [xmlport/1863 "C5 CustDiscGroup"](../objects/xmlport/1863-dk.md)
- [xmlport/1864 "C5 CustTable"](../objects/xmlport/1864-dk.md)
- [xmlport/1865 "C5 Delivery"](../objects/xmlport/1865-dk.md)
- [xmlport/1866 "C5 Department"](../objects/xmlport/1866-dk.md)
- [xmlport/1867 "C5 Employee"](../objects/xmlport/1867-dk.md)
- [xmlport/1868 "C5 InvenCustDisc"](../objects/xmlport/1868-dk.md)
- [xmlport/1869 "C5 InvenDiscGroup"](../objects/xmlport/1869-dk.md)
- [xmlport/1870 "C5 InvenItemGroup"](../objects/xmlport/1870-dk.md)
- [xmlport/1871 "C5 InvenPrcGroup"](../objects/xmlport/1871-dk.md)
- [xmlport/1872 "C5 InvenPrice"](../objects/xmlport/1872-dk.md)
- [xmlport/1873 "C5 InvenTable"](../objects/xmlport/1873-dk.md)
- [xmlport/1874 "C5 ItemTrackGroup"](../objects/xmlport/1874-dk.md)
- [xmlport/1875 "C5 Payment"](../objects/xmlport/1875-dk.md)
- [xmlport/1876 "C5 ProcCode"](../objects/xmlport/1876-dk.md)
- [xmlport/1877 "C5 Purpose"](../objects/xmlport/1877-dk.md)
- [xmlport/1878 "C5 UnitCode"](../objects/xmlport/1878-dk.md)
- [xmlport/1879 "C5 VatGroup"](../objects/xmlport/1879-dk.md)
- [xmlport/1880 "C5 VendDiscGroup"](../objects/xmlport/1880-dk.md)
- [xmlport/1881 "C5 VendTable"](../objects/xmlport/1881-dk.md)
- [xmlport/1886 "C5 Country"](../objects/xmlport/1886-dk.md)
- [xmlport/1890 "C5 InvenTrans"](../objects/xmlport/1890-dk.md)
- [xmlport/1891 "C5 CustGroup"](../objects/xmlport/1891-dk.md)
- [xmlport/1892 "C5 CustTrans"](../objects/xmlport/1892-dk.md)
- [xmlport/1893 "C5 VendGroup"](../objects/xmlport/1893-dk.md)
- [xmlport/1894 "C5 VendTrans"](../objects/xmlport/1894-dk.md)
- [xmlport/1895 "C5 Exch. Rate"](../objects/xmlport/1895-dk.md)
- [xmlport/1896 "InvenLocationXmlPort"](../objects/xmlport/1896-dk.md)
- [xmlport/1897 "C5 LedTrans"](../objects/xmlport/1897-dk.md)
- [xmlport/1898 "C5 InvenBOM"](../objects/xmlport/1898-dk.md)
- [xmlport/1899 "C5 CustContact"](../objects/xmlport/1899-dk.md)
- [xmlport/1901 "C5 VendContact"](../objects/xmlport/1901-dk.md)
- [xmlport/13600 "Data Exch. Imp.- Proløn"](../objects/xmlport/13600-dk.md)

## Other versions

- BC30: 432 objects differ from W1 (0 fields, 0 events added)

Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).
