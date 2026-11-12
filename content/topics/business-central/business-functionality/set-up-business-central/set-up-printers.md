---
id: topic/business-central/business-functionality/set-up-business-central/set-up-printers
type: topic
title: Set up printers
summary: "Printer setup in Business Central: sending print jobs through Universal Print, email printers, or browser printing, and choosing default printers. It answers questions about configuring each printer type and deciding which printer a report uses."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fb52141354536c76bd9f7cf7c5d1b3bf3818008f97bc9be4c7bceaf555e6b75c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-overview
    title: Printer Setup and Management Overview
    date: "2025-01-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-email
    title: Set Up Email Printers in Business Central
    date: "2023-01-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print
    title: Set Up Universal Print Printers in Business Central
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
    title: Specify a Default Printer in Business Central
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-overview
    - https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-email
    - https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print
    - https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
  objects:
    - object/page/2616
    - object/page/2650
    - object/page/2750
    - object/page/2752
    - object/page/2753
    - object/page/2754
    - object/page/8900
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up printers
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 4
  code: 7
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2616
  - 2650
  - 2750
  - 2752
  - 2753
  - 2754
  - 8900
member_hash: 41ce356e97c8fe61c1bbdb119cb41767b58208c7a446298ac23befec00f6faeb
narrative: generated
---

# Set up printers

> Printer setup in Business Central: sending print jobs through Universal Print, email printers, or browser printing, and choosing default printers. It answers questions about configuring each printer type and deciding which printer a report uses.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up printers · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how Business Central sends print jobs to printers. The options are cloud-enabled printers through Universal Print, printers reached by email address, and browser printing. The Printer Management page is where printers are managed.

The overview page introduces the options and the related extensions (Universal Print Integration and Send to Email Printer). Two setup pages then cover each printer type: email printers (paper size, printer device configuration, print job privacy) and Universal Print (Azure app registration, printer sharing, troubleshooting access issues, online and on-premises).

The last page covers default printers: for all users, a specific user, or a specific report. It also describes the selection hierarchy and how a user can override the default on the report request page. Start with the overview, then follow the setup page for your printer type, then set defaults.

## Key points

- Three ways to print: Universal Print, email printers, and browser printing.
- Universal Print needs the Universal Print Integration extension and an Azure app registration; it works for online and on-premises Business Central.
- Universal Print setup covers printer sharing, centralized management, document conversion, print job creation, and troubleshooting access issues.
- Email printing uses the Send to Email Printer extension and the printer's email address, with paper size and print job privacy settings.
- Printers are managed on the Printer Management page.
- Default printers can be set for all users, a specific user, or a specific report via Printer Management and Printer Selections.
- A printer selection hierarchy decides which default applies, and users can override it on the report request page.

## Learn pages

- [Printer Setup and Management Overview](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-overview): Compare Universal Print, email printing, and browser printing in Business Central, and find the setup steps for the printers your organization uses.
- [Set Up Email Printers in Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-email): Set up email-enabled printers in Business Central to send reports and documents directly to a printer, and choose the paper size for print jobs.
  - In the observatory: [Page 2616 "Printer Management"](../../../../objects/page/2616.md), [Page 2650 "Email Printer Settings"](../../../../objects/page/2650.md)
- [Set Up Universal Print Printers in Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print): Set up Universal Print, share printers with licensed users, and add the printers to Business Central online or on-premises for cloud printing.
- [Specify a Default Printer in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Set default printers for users and reports in Business Central, understand printer selection priority, and override the printer when running a report.
  - In the observatory: [Page 2616 "Printer Management"](../../../../objects/page/2616.md), [Page 64 "Printer Selections"](../../../../objects/page/64.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 2616 "Printer Management"](../../../../objects/page/2616.md)
- [Page 2650 "Email Printer Settings"](../../../../objects/page/2650.md) · on [Table 2650 "Email Printer Settings"](../../../../objects/table/2650.md)
- [Page 2750 "Universal Printer Settings"](../../../../objects/page/2750.md) · on [Table 2751 "Universal Printer Settings"](../../../../objects/table/2751.md)
- [Page 2752 "Add Universal Printers Wizard"](../../../../objects/page/2752.md) · captioned "Add Universal Print Printers"
- [Page 2753 "Universal Print Shares List"](../../../../objects/page/2753.md) · captioned "Print Shares" · on [Table 2752 "Universal Print Share Buffer"](../../../../objects/table/2752.md)
- [Page 2754 "Universal Printer Tray List"](../../../../objects/page/2754.md) · captioned "Universal Printer Trays" · on [Table 823 "Name/Value Buffer"](../../../../objects/table/823.md)
- [Page 8900 "Administrator Main Role Center"](../../../../objects/page/8900.md) · captioned "Administrator Role Center"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
