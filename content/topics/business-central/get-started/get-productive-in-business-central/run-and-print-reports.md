---
id: topic/business-central/get-started/get-productive-in-business-central/run-and-print-reports
type: topic
title: Run and print reports
summary: "Running and printing reports in Business Central: finding, previewing, printing, scheduling and saving reports, running batch jobs, setting default printers, managing saved report settings, and using test reports before posting. It answers how-to questions about output, printers and report options."
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
  input_hash: dcd6b1cb00912ad416f1f8fd45ea7d5e8a605ed6e2245ce6f7f2bb08727e0686
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    title: Manage Saved Settings for Reports and Batch Jobs
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-work-report
    title: Run and Print Reports in Business Central
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-run-batch-jobs
    title: Run Batch Jobs
    date: "2026-11-10"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-view-test-reports-posting
    title: View a Test Report Before You Post
    date: "2026-11-10"
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

> Running and printing reports in Business Central: finding, previewing, printing, scheduling and saving reports, running batch jobs, setting default printers, managing saved report settings, and using test reports before posting. It answers how-to questions about output, printers and report options.

Path: [Get started](../../get-started.md) > [Get productive in Business Central](../get-productive-in-business-central.md) > Run and print reports · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the everyday tasks around getting information out of Business Central. The main page, Run and Print Reports, explains how to find a report, set request page options, preview it, print it, save it to PDF, Word, Excel or XML, schedule it through the job queue, and work with report layouts and resource limits.

Related pages cover specific parts of that work. Saved settings let you keep options and filters for reports and batch jobs, for one user or for all users in a company. The default printer page explains how to set printers for all users, a specific user or a specific report. Run Batch Jobs covers data-processing tasks such as Adjust Exchange Rates, which can also be scheduled. The test report page shows how to check purchase or sales documents for errors before posting.

Start with Run and Print Reports for the general flow. Then go to the printer or saved settings pages if you need to standardize output, and to the batch job and test report pages for accounting routines.

## Key points

- Reports can be previewed, printed, or saved as PDF, Word, Excel or XML, and can be scheduled with job queue processing.
- The Run and Print Reports page also covers report layouts, request page options and resource limits.
- Saved settings are managed on the Report Settings page. They can be user-specific or shared, copied and edited, and can reuse the last used options and filters.
- Default printers can be set for all users, a specific user or a specific report using the Printer Management and Printer Selections pages.
- A printer selection hierarchy applies, and the default printer can be overridden on a report's request page.
- Universal Print integration is mentioned for printer setup.
- Batch jobs process data in bulk and handle periodic accounting tasks such as exchange rate adjustment and finance charge calculation. They use the Options FastTab and filters, and can be scheduled with job queues.
- The Test Report action on purchase and sales documents finds errors or missing information before posting, which helps prevent posting failures.

## Learn pages

- [Manage Saved Settings for Reports and Batch Jobs](https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings): Set up saved options and filters for Business Central reports and batch jobs, and share the settings with individual users or everyone in a company.
- [Run and Print Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-work-report): Run, preview, print, and schedule Business Central reports, apply filters and saved settings, choose layouts, and adjust report language and limits.
  - In the observatory: [Page 64 "Printer Selections"](../../../../objects/page/64.md), [Page 672 "Job Queue Entries"](../../../../objects/page/672.md), [Page 9652 "Report Layout Selection"](../../../../objects/page/9652.md), [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Run Batch Jobs](https://learn.microsoft.com/dynamics365/business-central/ui-how-run-batch-jobs): You run batch jobs to process data and update information, for example, to do periodic accounting activities, or to do calculations.
- [Specify a Default Printer in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Set default printers for users and reports in Business Central, understand printer selection priority, and override the printer when running a report.
  - In the observatory: [Page 2616 "Printer Management"](../../../../objects/page/2616.md), [Page 64 "Printer Selections"](../../../../objects/page/64.md)
- [View a Test Report Before You Post](https://learn.microsoft.com/dynamics365/business-central/ui-how-view-test-reports-posting): Before you post a document, for example, an order or a credit memo, you can test and review it to check for errors that might block posting.

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
