---
id: topic/business-central/get-started/get-productive-in-business-central/run-and-print-reports
type: topic
title: Run and print reports
summary: Running, previewing, printing and scheduling reports, and running batch jobs and XMLports, in Business Central. It answers questions about saving report output to PDF, Word or Excel, saved settings for reports and batch jobs, default printers, and test reports before posting sales or purchase documents.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:43.476Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f79b44e3786b93106f1e5c6518cce08ba8150d0f8b5c941656dd64928bfbc0bc
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    title: Manage Saved Settings for Reports and Batch Jobs
    date: "2021-12-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-work-report
    title: Run and print reports in Business Central
    date: "2025-03-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-run-batch-jobs
    title: Run Batch Jobs and XMLports
    date: "2021-04-01"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-view-test-reports-posting
    title: View a Test Report Before Posting a Sales or Purchase Document
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    - https://learn.microsoft.com/dynamics365/business-central/ui-work-report
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-run-batch-jobs
    - https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-view-test-reports-posting
  objects:
    - object/page/672
    - object/page/676
    - object/page/682
    - object/page/2650
    - object/page/2750
    - object/page/2752
    - object/page/2753
    - object/page/2754
    - object/page/8900
  features: []
  topics:
    - topic/business-central/get-started/get-productive-in-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Get productive in Business Central
  - Run and print reports
toc_file: business-central/TOC.md
parent: topic/business-central/get-started/get-productive-in-business-central
children: []
coverage:
  learn: 5
  code: 9
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 672
  - 676
  - 682
  - 2650
  - 2750
  - 2752
  - 2753
  - 2754
  - 8900
member_hash: 555b48f8d719ea2bc0a825f53bc67f1b26c286ccc4c1ad26c9828f09656af507
narrative: generated
---

# Run and print reports

> Running, previewing, printing and scheduling reports, and running batch jobs and XMLports, in Business Central. It answers questions about saving report output to PDF, Word or Excel, saved settings for reports and batch jobs, default printers, and test reports before posting sales or purchase documents.

Path: [Get started](../../get-started.md) > [Get productive in Business Central](../get-productive-in-business-central.md) > Run and print reports · tier official · system none · narrative reviewed by Opus

## Overview

This section covers the everyday work of getting information out of Business Central and processing data in bulk. The main page explains how to run a report, set filters, preview it, print it, schedule it, save it to a file, pick a layout, and change language and format settings.

Related pages build on that. Saved settings let you keep and share report and batch job options so you do not re-enter filters each time. The default printer page explains how to set a printer for all print jobs or for specific reports. A separate page covers running batch jobs and XMLports, such as exchange rate adjustment and calculation tasks. The test report page shows how to check a sales or purchase document before posting.

Start with "Run and print reports in Business Central" for the basics. Then use the saved settings and default printer pages to cut repeated setup, and the batch job and test report pages for the matching tasks.

## Key points

- Reports can be run, previewed, printed, scheduled, or saved as PDF, Word or Excel files.
- Report options include filters, layout selection, and language and format settings.
- Saved settings for reports and batch jobs can be created, modified and shared with other users.
- Default printers can be set for all print jobs or for specific reports, at user or global level.
- Printer options include cloud printers, Universal Print, email printers and PDF output.
- Batch jobs process data in batches, for example adjusting exchange rates, periodic accounting activities, calculating finance charges and calculating unit prices.
- The Test Report action on a sales or purchase document finds errors or missing information that would block posting.

## Learn pages

- [Manage Saved Settings for Reports and Batch Jobs](https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings): Describes hwo the admin can set up predefined options and filters for a report and share those settings with one or all users.
- [Run and print reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-work-report): Learn how to add a report to the job queue and schedule it to run on a specific date and time.
- [Run Batch Jobs and XMLports](https://learn.microsoft.com/dynamics365/business-central/ui-how-run-batch-jobs): You run batch jobs to process data and update information, for example, to do periodic accounting activities, or to do calculations.
- [Specify a Default Printer](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Learn about the different ways to set up printers to be used by default for print jobs.
- [View a Test Report Before Posting a Sales or Purchase Document](https://learn.microsoft.com/dynamics365/business-central/ui-how-view-test-reports-posting): Before you post a document, for example, an order or a credit memo, you can test and review it to check for errors that might block posting.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 672 "Job Queue Entries"](../../../../objects/page/672.md) · on [Table 472 "Job Queue Entry"](../../../../objects/table/472.md)
- [Page 676 "Schedule a Job"](../../../../objects/page/676.md) · on [Table 472 "Job Queue Entry"](../../../../objects/table/472.md)
- [Page 682 "Schedule a Report"](../../../../objects/page/682.md) · on [Table 472 "Job Queue Entry"](../../../../objects/table/472.md)
- [Page 2650 "Email Printer Settings"](../../../../objects/page/2650.md) · on [Table 2650 "Email Printer Settings"](../../../../objects/table/2650.md)
- [Page 2750 "Universal Printer Settings"](../../../../objects/page/2750.md) · on [Table 2751 "Universal Printer Settings"](../../../../objects/table/2751.md)
- [Page 2752 "Add Universal Printers Wizard"](../../../../objects/page/2752.md) · captioned "Add Universal Print Printers"
- [Page 2753 "Universal Print Shares List"](../../../../objects/page/2753.md) · captioned "Print Shares" · on [Table 2752 "Universal Print Share Buffer"](../../../../objects/table/2752.md)
- [Page 2754 "Universal Printer Tray List"](../../../../objects/page/2754.md) · captioned "Universal Printer Trays" · on [Table 823 "Name/Value Buffer"](../../../../objects/table/823.md)
- [Page 8900 "Administrator Main Role Center"](../../../../objects/page/8900.md) · captioned "Administrator Role Center"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
