---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports
type: topic
title: How users work with reports
summary: "User-facing report tasks in Business Central: running, previewing, printing and scheduling reports, saving report and batch job settings, and choosing default printers. It answers how-to questions about request pages, output formats, saved options and printer selection."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-18T01:00:22.250Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 209bb8ac3124876d18c0a6be542fcc52aabbeb3ed40a904bdaa1963f1e6f826f
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

> User-facing report tasks in Business Central: running, previewing, printing and scheduling reports, saving report and batch job settings, and choosing default printers. It answers how-to questions about request pages, output formats, saved options and printer selection.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > How users work with reports · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes what users do with reports once they exist: run them, adjust their options, send them to a printer or file, and reuse their settings. It has three pages and no subtopics.

"Run and Print Reports in Business Central" is the main page. It covers finding, previewing, printing, scheduling and customizing reports, including request page options, file formats, printers, layouts and resource limits. "Manage Saved Settings for Reports and Batch Jobs" explains how to keep predefined options and filters for reuse. "Specify a Default Printer in Business Central" explains how printers are chosen automatically.

Start with the run and print page for the general flow. Then read the saved settings page if users repeat the same options, and the default printer page if printing needs to be set up for all users, one user or one report.

## Key points

- Reports can be previewed, printed, or saved as PDF, Word, Excel or XML.
- Reports can be scheduled, and scheduled runs are processed through the job queue.
- The run and print page also covers report layouts, request page options and resource limits (2020 release wave 1 is listed).
- Saved settings hold options and filters for reports and batch jobs, managed on the Report Settings page.
- Saved settings can be user-specific or shared with all users in a company, and can be copied and edited.
- Last used options and filters are also available as settings.
- Default printers can be set for all users, a specific user, or a specific report via Printer Management and Printer Selections pages.
- A printer selection hierarchy decides which printer applies, and users can override it on the report request page. Universal Print integration is mentioned.

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
