---
id: topic/business-central/analytics-business-intelligence-and-repo/use-reports-in-daily-work
type: topic
title: Use reports in daily work
summary: Running and managing Business Central reports in daily work. It answers questions on finding, previewing, printing and scheduling reports, saved settings, layouts, default printers, the Report Inbox, bookmarks, and exporting datasets to Excel or XML for analysis.
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-22T01:00:28.230Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 88f62c35cb4f552320ab07f3f0f8205a57aed1c406bfa000c139962bad04602a
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
    date: "2026-11-12"
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
    date: "2026-11-12"
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
    date: "2026-11-12"
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

> Running and managing Business Central reports in daily work. It answers questions on finding, previewing, printing and scheduling reports, saved settings, layouts, default printers, the Report Inbox, bookmarks, and exporting datasets to Excel or XML for analysis.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Use reports in daily work · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the everyday tasks around standard reports in Business Central. The entry page, "Use Business Central Reports in Your Daily Work", introduces the main ideas: the Report Explorer for finding reports, the request page for setting options and filters, scheduling, the Report Inbox, saved settings, and layouts.

The other pages go deeper on each task. "Run and Print Reports" covers previewing, printing, saving to PDF, Word, Excel or XML, scheduling through job queue processing, and resource limits. Saved settings, layout selection, and default printer pages cover how to adjust a report to a user or company. The Report Inbox page covers downloading, sharing, and OneDrive export of scheduled output. Two pages cover bookmarking reports on a role center and exporting datasets for inspection.

Start with the overview page, then "Run and Print Reports". Move to layouts, saved settings, and printer pages when you need to standardize output for a company or user. The dataset export page suits developers and advanced users diagnosing report issues.

## Key points

- Report Explorer helps find available reports; the request page sets options and filters before running.
- Reports can be previewed, printed, or saved as PDF, Word, Excel, or XML, and can be scheduled through job queue processing.
- Saved settings can be user-specific or shared, can be copied and edited, and can reuse last used options and filters via the Report Settings page.
- Report layouts can be set as the default per company, chosen temporarily on the request page, or managed on the Report Layouts and Report Layout Selection pages; they cover composite branding, themes, and header/footer layouts.
- Default printers can be set for all users, a specific user, or a specific report via Printer Management and Printer Selections; the request page can override them, and Universal Print is supported.
- The Report Inbox holds scheduled reports; users can download, share, delete, or open them in OneDrive, and files have expiration dates.
- Datasets can be exported to Excel (data only) or XML, with a Report Metadata worksheet and filter display, to diagnose issues during report creation or changes.
- Pages and reports can be bookmarked on the role center from the target page or the Tell Me window, and managed through personalization.

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
- [Page 9650 "Custom Report Layouts"](../../../objects/page/9650.md) · captioned "Custom Report Layouts (Obsoleted)" · on [Table 9650 "Custom Report Layout"](../../../objects/table/9650.md)
- [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md) · captioned "Report Layout Selection (Obsoleted)" · on [Table 9651 "Report Layout Selection"](../../../objects/table/9651.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
