---
id: topic/business-central/analytics-business-intelligence-and-repo/use-reports-in-daily-work
type: topic
title: Use reports in daily work
summary: "Using reports in Business Central daily work: finding, running, previewing, printing, scheduling and saving reports, plus saved settings, layouts, default printers, the Report Inbox, bookmarks and dataset export. It answers how-to questions for end users and advanced users."
tier: official
language: en
system: reporting
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
  input_hash: 60c02d41cc3ce64bdb0a33cfae413874559ef3012d8c3e9bacfa387946f5e53d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel
    title: Analyze Report Datasets with Excel and XML
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-bookmarks
    title: Bookmark a Page or Report on Your Role Center
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout
    title: Set the Layout Used by a Report in Business Central
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-work-report-inbox
    title: Share and Export Reports with the Report Inbox
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-use-reports
    title: Use Business Central Reports in Your Daily Work
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel
    - https://learn.microsoft.com/dynamics365/business-central/ui-bookmarks
    - https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    - https://learn.microsoft.com/dynamics365/business-central/ui-work-report
    - https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-work-report-inbox
    - https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports
    - https://learn.microsoft.com/dynamics365/business-central/reports-use-reports
  objects:
    - object/page/680
    - object/page/2650
    - object/page/2750
    - object/page/2752
    - object/page/2753
    - object/page/2754
    - object/page/8900
    - object/page/9650
    - object/page/9652
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo
  localizations: []
  videos:
    - video/6zj34hjbpGU
    - video/z7UTBiCNOo8
  posts:
    - post/yzhums-com/76763
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Use reports in daily work
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children: []
coverage:
  learn: 8
  code: 9
  video: 2
  blog: 1
  guideline: 0
bc_forms:
  - 680
  - 2650
  - 2750
  - 2752
  - 2753
  - 2754
  - 8900
  - 9650
  - 9652
member_hash: bffb8f0e8486bc5dae7eb4fc923d54e569ba0217b81a8e8da23beff106f1b547
narrative: generated
---

# Use reports in daily work

> Using reports in Business Central daily work: finding, running, previewing, printing, scheduling and saving reports, plus saved settings, layouts, default printers, the Report Inbox, bookmarks and dataset export. It answers how-to questions for end users and advanced users.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Use reports in daily work · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers what a user does with reports day to day. It starts with a general guide (Report Explorer, scheduling, saved settings, default printers, layouts, Report Inbox) and then has one page for each task.

For running reports, "Run and Print Reports" explains request pages, filters, options, preview, printing, saving to PDF, Word, Excel or XML, and scheduling to the job queue. "Manage Saved Settings" lets users keep filters and options for reuse, per user or shared across a company. "Set the Layout Used by a Report" and "Specify a Default Printer" control how a report looks and where it prints.

Scheduled output is handled in the Report Inbox, where users download, share, or open files in OneDrive. Other pages cover bookmarking reports on a role center and exporting datasets to Excel or XML for diagnosis and ad-hoc analysis. Start with "Use Business Central Reports in Your Daily Work" and then "Run and Print Reports".

## Key points

- Report request pages set filters and options; reports can be previewed, printed, saved to PDF, Word, Excel or XML, or scheduled to the job queue.
- Saved settings keep options and filters for reports and batch jobs, either user-specific or shared with all users in a company, and can be copied and edited on the Report Settings page.
- Report layouts can be set as a company default, chosen temporarily on the request page, or managed on the Report Layouts and Report Layout Selection pages; they cover branding, themes and header/footer layouts.
- Default printers can be set for all users, a specific user, or a specific report via Printer Management and Printer Selections, and overridden on the request page; Universal Print is mentioned.
- The Report Inbox holds scheduled reports; users can download, share, delete, and open them in OneDrive, and files have expiration dates.
- Bookmark icon or the Tell Me window adds pages and reports to the role center, and bookmarks can be removed.
- Datasets can be exported to Excel (data only) or XML, with a Report Metadata worksheet and filter display, for developers diagnosing issues (2021 release wave 1 update 18.3 and 2021 release wave 2).

## Learn pages

- [Analyze Report Datasets with Excel and XML](https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel): Learn how to export Business Central report datasets to Excel or XML, inspect raw report data, and give users permission to export datasets.
- [Bookmark a Page or Report on Your Role Center](https://learn.microsoft.com/dynamics365/business-central/ui-bookmarks): Add bookmarks to the navigation menu on your Business Central Role Center so you can quickly open frequently used pages, reports, and business tasks.
- [Manage Saved Settings for Reports and Batch Jobs](https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings): Set up saved options and filters for Business Central reports and batch jobs, and share the settings with individual users or everyone in a company.
- [Run and Print Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-work-report): Run, preview, print, and schedule Business Central reports, apply filters and saved settings, choose layouts, and adjust report language and limits.
  - In the observatory: [Page 64 "Printer Selections"](../../../objects/page/64.md), [Page 672 "Job Queue Entries"](../../../objects/page/672.md), [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md), [Page 9660 "Report Layouts"](../../../objects/page/9660.md)
- [Set the Layout Used by a Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout): Learn how to select the default report layout for each company, temporarily use another layout, and distinguish layout selection from reusable branding.
- [Share and Export Reports with the Report Inbox](https://learn.microsoft.com/dynamics365/business-central/ui-work-report-inbox): Download scheduled Business Central reports from the Report Inbox, open or share copies in OneDrive, and delete reports from your Role Center.
  - In the observatory: [Page 672 "Job Queue Entries"](../../../objects/page/672.md), [Page 682 "Schedule a Report"](../../../objects/page/682.md)
- [Specify a Default Printer in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-specify-printer-selection-reports): Set default printers for users and reports in Business Central, understand printer selection priority, and override the printer when running a report.
  - In the observatory: [Page 2616 "Printer Management"](../../../objects/page/2616.md), [Page 64 "Printer Selections"](../../../objects/page/64.md)
- [Use Business Central Reports in Your Daily Work](https://learn.microsoft.com/dynamics365/business-central/reports-use-reports): Find Business Central reports, run and schedule them, choose printers and layouts, reuse saved settings, and export report data for analysis.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central: How to quickly copy a report layout (Create a copy of the selected layout)](../../../posts/yzhums-com/76763.md) (community post): "Users can quickly copy an existing layout by selecting it, toggling 'Save Changes to Copy'"
- [How Business Central Integrates with Microsoft Excel (2025)](../../../videos/6zj34hjbpGU.md) (video): "Pivot table creation; Pivot chart visualization; Data connection refresh"
- [What's Cooking in Business Central: Excel Reports that Become Generally Available](../../../videos/z7UTBiCNOo8.md) (video): "Report Customization in Excel; Slicer Controls for Report Filtering"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 680 "Report Inbox"](../../../objects/page/680.md) · on [Table 477 "Report Inbox"](../../../objects/table/477.md)
- [Page 2650 "Email Printer Settings"](../../../objects/page/2650.md) · on [Table 2650 "Email Printer Settings"](../../../objects/table/2650.md)
- [Page 2750 "Universal Printer Settings"](../../../objects/page/2750.md) · on [Table 2751 "Universal Printer Settings"](../../../objects/table/2751.md)
- [Page 2752 "Add Universal Printers Wizard"](../../../objects/page/2752.md) · captioned "Add Universal Print Printers"
- [Page 2753 "Universal Print Shares List"](../../../objects/page/2753.md) · captioned "Print Shares" · on [Table 2752 "Universal Print Share Buffer"](../../../objects/table/2752.md)
- [Page 2754 "Universal Printer Tray List"](../../../objects/page/2754.md) · captioned "Universal Printer Trays" · on [Table 823 "Name/Value Buffer"](../../../objects/table/823.md)
- [Page 8900 "Administrator Main Role Center"](../../../objects/page/8900.md) · captioned "Administrator Role Center"
- [Page 9650 "Custom Report Layouts"](../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../objects/table/9650.md)
- [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../objects/table/9651.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
