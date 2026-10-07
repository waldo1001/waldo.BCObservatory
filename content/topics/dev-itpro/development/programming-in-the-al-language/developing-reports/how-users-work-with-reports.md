---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports
type: topic
title: How users work with reports
summary: "User-facing report handling in Business Central: running, previewing, printing, scheduling and saving reports, managing saved settings for reports and batch jobs, and choosing default printers. It answers how-to questions about report request pages, filters, layouts and printer selection."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:29.432Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f12a8498426dc1c2867ef1e84fa5f7ee76ddadf937f3cfb91526624881ce9b6f
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
    url: https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
    title: Specify a Default Printer
    date: "2024-11-05"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    - https://learn.microsoft.com/dynamics365/business-central/ui-work-report
    - https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
  objects: []
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
  code: 0
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

> User-facing report handling in Business Central: running, previewing, printing, scheduling and saving reports, managing saved settings for reports and batch jobs, and choosing default printers. It answers how-to questions about report request pages, filters, layouts and printer selection.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > How users work with reports · tier official · system development · narrative reviewed by Opus

## Overview

This section covers what users do with reports after developers have built them. It has three pages and no subtopics. They cover running reports, keeping reusable settings, and choosing where output is printed.

Start with "Run and print reports in Business Central". It explains how to run, preview, print and schedule a report, set filters, save output to a file, select a layout, and change language and format settings. Then read "Manage Saved Settings for Reports and Batch Jobs" to learn how to create, modify and share saved settings, so users get default options and filters on the request page. Finish with "Specify a Default Printer" to set printers for all print jobs or for specific reports.

## Key points

- Reports can be run, previewed, printed and scheduled from Business Central.
- Report output can be saved to files such as PDF, Word or Excel.
- Users set filters and pick a layout on the report request page, and can change language and format settings.
- Saved settings for reports and batch jobs can be created, modified and shared with other users.
- Saved settings configure default report options and filters.
- A default printer can be set for all print jobs or for specific reports.
- Printer selection can be set at user or global level, for cloud printers and PDF output.
- The printer page mentions universal print, email printers and print job sizing.

## Learn pages

- [Manage Saved Settings for Reports and Batch Jobs](https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings): Describes hwo the admin can set up predefined options and filters for a report and share those settings with one or all users.
- [Run and print reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-work-report): Learn how to add a report to the job queue and schedule it to run on a specific date and time.
- [Specify a Default Printer](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Learn about the different ways to set up printers to be used by default for print jobs.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 2650, 2750, 2752, 2753, 2754, 8900.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
