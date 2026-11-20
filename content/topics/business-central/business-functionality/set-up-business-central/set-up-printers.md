---
id: topic/business-central/business-functionality/set-up-business-central/set-up-printers
type: topic
title: Set up printers
summary: "Printer setup in Business Central: cloud-based printing options (Universal Print, email printing, browser printing), how to set up email and Universal Print printers, and how to specify default printers for users and reports. It answers questions about registering printers and choosing which printer is used."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d08cfacb96a7f53cd2bc190e3bedd81730c5e5fa8d2d4fe00c00396269d78ca1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-overview
    title: Printer Setup and Management Overview
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-email
    title: Set Up Email Printers in Business Central
    date: "2026-11-12"
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

> Printer setup in Business Central: cloud-based printing options (Universal Print, email printing, browser printing), how to set up email and Universal Print printers, and how to specify default printers for users and reports. It answers questions about registering printers and choosing which printer is used.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up printers · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how Business Central prints documents and reports using cloud-enabled options. The overview page introduces Universal Print, email printing, and browser printing, and explains printer registration.

Two setup pages cover the printer types in detail. Email printer setup sends print jobs to email-enabled printers and needs the Send to Email Printer extension. Universal Print setup covers integration for Business Central online and on-premises, including Azure app registration, printer sharing, and troubleshooting access issues.

Once printers exist, the default printer page explains how to choose which one is used. Start with the overview to pick a printing option, then follow the matching setup page, and finish with the default printer settings.

## Key points

- Cloud printing options are Universal Print, email printing, and browser printing.
- Email printers need the Send to Email Printer extension. The setup covers paper size selection and print job privacy.
- Universal Print integration works for Business Central online and on-premises. It needs Azure app registration and printer sharing.
- Universal Print gives centralized printer management, document conversion, and print job creation.
- The Universal Print page includes troubleshooting for common access issues.
- Default printers can be set for all users, a specific user, or a specific report.
- Defaults are managed on the Printer Management and Printer Selections pages and follow a selection hierarchy.
- A user can override the default printer on a report request page.

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
