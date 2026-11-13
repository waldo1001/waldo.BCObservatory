---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports
type: topic
title: How users work with reports
summary: How end users run, print, schedule and configure reports in Business Central. It answers questions about report request pages, saved settings for reports and batch jobs, and choosing default printers.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9ab14755f3bb90119af5157224253aaaec5cc6dd09434e59d5962d30c568c419
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
    - https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    - https://learn.microsoft.com/dynamics365/business-central/ui-work-report
    - https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
  objects:
    - object/page/2650
    - object/page/2750
    - object/page/2752
    - object/page/2753
    - object/page/2754
    - object/page/8900
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing reports
  - How users work with reports
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/developing-reports
children: []
coverage:
  learn: 3
  code: 6
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2650
  - 2750
  - 2752
  - 2753
  - 2754
  - 8900
member_hash: 37f583483e31a653d01a6e3986cd2204cf7dfb063ea171b2970393250f292c61
narrative: generated
---

# How users work with reports

> How end users run, print, schedule and configure reports in Business Central. It answers questions about report request pages, saved settings for reports and batch jobs, and choosing default printers.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > How users work with reports · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes the user side of reports in Business Central: what a person sees and can set when they open a report or batch job. It has no subtopics, only three pages that cover separate parts of the workflow.

Start with "Run and Print Reports in Business Central" for the basics: finding and opening a report, using the request page and filters, previewing, printing, printing to file, and scheduling through the job queue. Then use "Manage Saved Settings for Reports and Batch Jobs" to keep options and filters for reuse, per user or shared across a company. Use "Specify a Default Printer in Business Central" to control which printer a report or user gets by default.

## Key points

- Reports can be found, opened, previewed, printed, printed to file or scheduled from the request page.
- Request pages offer filters, output options, printer selection, report layouts, and language and format settings.
- Reports can be scheduled to run through the job queue.
- Saved settings store options and filters for reports and batch jobs, and are managed on the Report Settings page.
- Saved settings can be user-specific or shared with all users in a company, and can be copied and edited.
- Last used options and filters are available as saved settings.
- Default printers can be set for all users, a specific user, or a specific report using the Printer Management and Printer Selections pages.
- A printer selection hierarchy applies, and the default can be overridden on the report request page; Universal Print integration is covered.

## Learn pages

- [Manage Saved Settings for Reports and Batch Jobs](https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings): Set up saved options and filters for Business Central reports and batch jobs, and share the settings with individual users or everyone in a company.
- [Run and Print Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-work-report): Run, preview, print, and schedule Business Central reports, apply filters and saved settings, choose layouts, and adjust report language and limits.
  - In the observatory: [Page 64 "Printer Selections"](../../../../../objects/page/64.md), [Page 672 "Job Queue Entries"](../../../../../objects/page/672.md), [Page 9652 "Report Layout Selection"](../../../../../objects/page/9652.md), [Page 9660 "Report Layouts"](../../../../../objects/page/9660.md)
- [Specify a Default Printer in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Set default printers for users and reports in Business Central, understand printer selection priority, and override the printer when running a report.
  - In the observatory: [Page 2616 "Printer Management"](../../../../../objects/page/2616.md), [Page 64 "Printer Selections"](../../../../../objects/page/64.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 2650 "Email Printer Settings"](../../../../../objects/page/2650.md) · on [Table 2650 "Email Printer Settings"](../../../../../objects/table/2650.md)
- [Page 2750 "Universal Printer Settings"](../../../../../objects/page/2750.md) · on [Table 2751 "Universal Printer Settings"](../../../../../objects/table/2751.md)
- [Page 2752 "Add Universal Printers Wizard"](../../../../../objects/page/2752.md) · captioned "Add Universal Print Printers"
- [Page 2753 "Universal Print Shares List"](../../../../../objects/page/2753.md) · captioned "Print Shares" · on [Table 2752 "Universal Print Share Buffer"](../../../../../objects/table/2752.md)
- [Page 2754 "Universal Printer Tray List"](../../../../../objects/page/2754.md) · captioned "Universal Printer Trays" · on [Table 823 "Name/Value Buffer"](../../../../../objects/table/823.md)
- [Page 8900 "Administrator Main Role Center"](../../../../../objects/page/8900.md) · captioned "Administrator Role Center"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
