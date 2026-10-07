---
id: topic/business-central/business-functionality/set-up-business-central/set-up-printers
type: topic
title: Set up printers
summary: "Printer setup in Business Central: Universal Print, Email Print, and browser printing, plus registering printers and choosing default printers. It answers questions on configuring printing for reports and documents in the web client, mobile app, or Teams."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:55.708Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f61b2b7d76a5ef26b4e6cc62464fc876ab9a4f5201169878cdc7c93d09565f97
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-overview
    title: Printer setup and management overview
    date: "2025-01-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-email
    title: Set Up Email Printers
    date: "2023-01-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print
    title: Set Up Universal Print Printers
    date: "2024-06-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
    title: Specify a Default Printer
    date: "2024-11-05"
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

> Printer setup in Business Central: Universal Print, Email Print, and browser printing, plus registering printers and choosing default printers. It answers questions on configuring printing for reports and documents in the web client, mobile app, or Teams.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up printers · tier official · system none · narrative reviewed by Opus

## Overview

Printing in Business Central can go through Universal Print cloud printers, email-enabled printers, or the browser. The overview page explains these options and how printers are registered and managed, so start there to choose an approach.

## Key points

- Three printing options: Universal Print for cloud printers, Email Print for email-enabled printers, and browser printing.
- Printing works for the web client, mobile app, and Teams.
- Email printers are set up on the Printer Management page with the Send to Email Printer extension; the page covers paper size selection and privacy settings (2020 release wave 1).
- Universal Print setup uses the Universal Print integration extension, the Printer Management page, and the universal print connector (2021 release wave 1).
- Universal Print guidance covers Azure configuration, print shares, printer authorization, and document conversion, for online and on-premises deployments.
- Default printers can be set for all print jobs or for specific reports.
- Default printer selections can be made at user or global level and apply to cloud printers and PDF output.

## Learn pages

- [Printer setup and management overview](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-overview): Learn about the different printer options in Business Central.
- [Set Up Email Printers](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-email): How-to description
- [Set Up Universal Print Printers](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print): Learn how you can use Universal Print to provide cloud printing in Business Central.
- [Specify a Default Printer](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Learn about the different ways to set up printers to be used by default for print jobs.

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
