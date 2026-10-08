---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports
type: topic
title: Developing reports
summary: "Developing reports in AL for Business Central: report objects, datasets, layouts (Word, Excel, RDL), request pages, report extensions, substitution, obsoleting, telemetry, performance, testing and troubleshooting. It answers how to build, extend, format, expose, monitor and retire reports."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.945Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 053ebcb2229c2718ec1c7a7885354432a7e2a5c1e3edd457808fcc5e8e0fb756
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-create-custom-report-layout
    title: (Obsolete) Create and modify custom report layouts
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-import-and-export-report-layout
    title: (Obsolete) Import and Export Custom Report Layouts
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-change-layout-currently-used-report
    title: (Obsolete) Set the Layout Used by a Report
    date: "2022-03-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-update-report-layouts
    title: (Obsolete) Update Custom Report Layouts
    date: "2021-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-menusuite-functionality
    title: Add pages and reports to Tell me
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-add-barcodes
    title: Adding barcodes to reports
    date: "2021-04-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-define-customer-vendor-document-layouts
    title: Assign document layouts to customers or vendors
    date: "2024-11-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-fonts
    title: Available fonts
    date: "2025-02-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-barcode-fonts
    title: Barcode Fonts with Business Central Online
    date: "2021-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-howto-report-layout
    title: Creating a Word layout report
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-howto-excel-report-layout
    title: Creating an Excel layout report
    date: "2025-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-howto-rdl-report-layout
    title: Creating an RDL layout report
    date: "2025-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-multiple-report-layouts
    title: Defining multiple report layouts
    date: "2024-01-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    title: Design Word Layouts with the Business Central Add-in
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-custom-render
    title: Developing a Custom Report Render
    date: "2026-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-report-field-data
    title: Formatting field values in report datasets
    date: "2023-12-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-field-data
    title: Formatting the data in a field
    date: "2026-07-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts
    title: Get started creating report layouts
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-localization
    title: Localizing the report data formatting and caption strings
    date: "2023-01-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-saving-reusing-settings
    title: Manage Saved Settings for Reports and Batch Jobs
    date: "2021-12-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    title: Map Data Fields in Word Layouts
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-obsoletion
    title: Obsoleting reports
    date: "2025-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentprintready-event
    title: OnAfterDocumentPrintReady Event
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentready-event
    title: OnAfterDocumentReady Event
    date: "2023-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterintermediatedocumentready-event
    title: OnAfterIntermediateDocumentReady Event
    date: "2023-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onaftersetupprinters-event
    title: OnAfterSetupPrinters Event
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncustomdocumentmergerex-event
    title: OnCustomDocumentMergerEx event
    date: "2023-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ongetfilename-event
    title: OnGetFilename Event
    date: "2025-06-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts
    title: Report and document layouts overview
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/report-data-type
    title: Report data type
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-dataset
    title: Report dataset
    date: "2024-01-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-design-overview
    title: Report Design Overview
    date: "2023-12-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-discoverability
    title: Report discoverability
    date: "2024-03-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-example
    title: Report Extension Example
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object
    title: Report extension object
    date: "2024-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace
    title: Report Generation Telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object
    title: Report object
    date: "2024-09-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-performance
    title: Report performance
    date: "2024-01-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-report-properties
    title: Report Property Reference in AL
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-triggers
    title: Report Triggers and Runtime Operations
    date: "2021-05-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-obsoletion
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-dataset
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-design-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-example
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-substituting-reports
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-reports
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-request-pages-for-reports
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walktrough-designing-reports-multiple-tables
  objects:
    - object/page/21
    - object/page/2650
    - object/page/2750
    - object/page/2752
    - object/page/2753
    - object/page/2754
    - object/page/8900
    - object/page/9650
    - object/page/9652
    - object/page/9660
    - object/page/9666
    - object/page/9882
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/formatting-report-data
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-layouts
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-discoverability
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-triggers-and-events
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/al-language-reference-reports
  localizations: []
  videos:
    - video/eUkx_VCcyoU
    - video/M1S2_bgLd3Q
  posts:
    - post/thinkaboutit-be/7181
  guidelines: []
  changes:
    - change/bcapps/10270
    - change/bcapps/10404
    - change/bcapps/10489
    - change/bcapps/11137
    - change/bcapps/11211
    - change/bcapps/12242
    - change/bcapps/9428
    - change/bcapps/9433
    - change/bcapps/9453
    - change/bcapps/9580
    - change/bcapps/9949
    - change/bcquality/147
    - change/bcquality/183
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing reports
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/formatting-report-data
  - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-layouts
  - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-discoverability
  - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-triggers-and-events
  - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/how-users-work-with-reports
  - topic/dev-itpro/development/programming-in-the-al-language/developing-reports/al-language-reference-reports
coverage:
  learn: 54
  code: 12
  video: 2
  blog: 1
  guideline: 0
bc_forms:
  - 21
  - 2650
  - 2750
  - 2752
  - 2753
  - 2754
  - 8900
  - 9650
  - 9652
  - 9660
  - 9666
  - 9882
member_hash: 86f764373eee65f2aaea2ba6017998ee632ccc264ede4a68720e19417f2f99bf
narrative: generated
---

# Developing reports

> Developing reports in AL for Business Central: report objects, datasets, layouts (Word, Excel, RDL), request pages, report extensions, substitution, obsoleting, telemetry, performance, testing and troubleshooting. It answers how to build, extend, format, expose, monitor and retire reports.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Developing reports · tier official · system development · narrative reviewed (checked by Opus)

## Overview

A report in AL is built from a dataset (data items and columns taken from tables), one or more layouts (Word, Excel, RDL or custom), and an optional request page where users set options and filters. The Reports overview, Report Design Overview and Report object pages introduce these parts, and the walkthrough on designing a report from multiple tables shows an RDL report from dataset to totals and an Excel layout.

Subtopics go deeper on single areas: formatting report data, report layouts, discoverability (how users find reports), triggers and events, and how users run, print and save reports. Further pages cover extending reports with report extension objects, substituting reports through an event, and obsoleting reports and layouts.

For running reports in production, the telemetry, performance and troubleshooting pages explain how to find slow or failing runs. The test reports page covers verifying output with a report dataset library. Start with Reports overview and Report object, then move to dataset and layouts.

## Key points

- A report combines a dataset (data items and columns), layouts (Excel, Word, RDL) and a request page.
- Report extension objects add columns, data items, triggers, request page elements and layouts to existing reports; a worked food inventory example shows the table and report extension code.
- Report substitution uses the OnAfterSubstituteReport event in Codeunit 44 ReportManagement; from 2021 release wave 1, report extensions are an alternative.
- Obsoleting reports uses ObsoleteReason, ObsoleteTag and ObsoleteState, with layout-level obsolescence from 2025 release wave 1; deprecation is also communicated via captions, search terms and help content.
- Request pages let users set options and filters before a report runs, using properties such as RequestFilterFields and SaveValues; teaching tips, help links and saved settings are also covered.
- Report generation telemetry tracks successful, failed and canceled runs, dataset and rendering time, SQL execution, and output formats, and supports performance analysis.
- Performance strategies include read scale-out, background scheduling and query optimization.
- Testing uses Codeunit 131007 Library - Report Dataset, with methods like RunReportAndLoad and AssertElementWithValueExists.

## Subtopics

- [Formatting report data](developing-reports/formatting-report-data.md) (3 pages)
- [Report layouts](developing-reports/report-layouts.md) (22 pages)
- [Report discoverability](developing-reports/report-discoverability.md) (2 pages)
- [Report triggers and events](developing-reports/report-triggers-and-events.md) (7 pages)
- [How users work with reports](developing-reports/how-users-work-with-reports.md) (3 pages)
- [AL language reference (reports)](developing-reports/al-language-reference-reports.md) (3 pages)

## More Learn pages

- [Obsoleting reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-obsoletion): Learn how to obsolete Business Central reports.
- [Report dataset](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-dataset): The dataset determines the data extracted to print or display the information from the database.
- [Report Design Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-design-overview): Design a report by defining the dataset and designing the layout. Report object is composed of dataset, layout, request page, properties, triggers and code.
- [Report Extension Example](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-example): Reports are used to print or display information from a database.
- [Report extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object): The report extension object in AL for Business Central allows you to create an extension of an existing report.
- [Report Generation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace): Learn about the report telemetry in Business Central.
- [Report object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object): The report object in AL for Business Central allows to create a new report.
- [Report performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-performance): Provides information for developers to help improve performance for Business Central reports.
- [Reports overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports): Use reports to display information from database to structure and summarize information and print documents, such as invoices.
- [Substituting Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-substituting-reports): Learn how to substitute one report for another in Business Central by handling the OnAfterSubstituteReport event, and how report extensions compare.
- [Test reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-reports): How to validate if a report produces correct data
- [Troubleshooting reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting): Learn about how to troubleshoot Business Central reports
- [Using request pages with reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-request-pages-for-reports): Introducing how to work with request pages with Business Central reports.
- [Walkthrough - Designing a report from multiple tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walktrough-designing-reports-multiple-tables): This walkthrough shows you how to design a report from multiple tables.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10270 [Quality Management] Repair and improve XML documentation of procedures](../../../../changes/bcapps/10270.md) (code change): "XML documentation for Quality Management procedures has been repaired and improved"
- [#10404 Deliverable 638799: Requisitions in Base App - add layout to report + minor fixes](../../../../changes/bcapps/10404.md) (code change): "Word document layout added to Spend Request Document report"
- [#10489 MSlenejennum/647452/new header and footer layouts and report themes](../../../../changes/bcapps/10489.md) (code change): "New composite report parts management codeunit seeds 11 header/footer designs and 3 themes"
- [#11137 Composite Report Parts: seed via a report extension instead of install/upgrade code](../../../../changes/bcapps/11137.md) (code change): "Report extension replaces SeedPart-based install/upgrade code for seeding"
- [#11211 [Bug 649379] Composite layout stress-test fixes, part resolution source and status action captions](../../../../changes/bcapps/11211.md) (code change): "Report layout creation and management now prevents duplicate names"
- [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12242.md) (code change): "Power BI report deployment is now available to all companies"
- [#9428 637301 Report layout override lifecycle](../../../../changes/bcapps/9428.md) (code change): "Report layout overrides for extension-installed layouts now write Tenant Report Layout Override records"
- [#9433 636017 Move Item Price List and Res. Price List report action tooltip…](../../../../changes/bcapps/9433.md) (code change): "Report action tooltips for Item Price List and Res. Price List reports are moved"
- [#9453 [Bug 642248] Header/Footer Theme Assignment: persist selected layout (missing Rec.Modify)](../../../../changes/bcapps/9453.md) (code change): "A data-persistence bug on the Header/Footer Theme Assignment page is fixed by adding a missing Rec.Modify() call"
- [#9580 636017 Move Manufacturing report action tooltips to report objects](../../../../changes/bcapps/9580.md) (code change): "Tooltips for 7 manufacturing reports moved from pages to reports. Leverages the 2025 release wave 1 feature"
- [#9949 [Bug 645022] UI improvements for report themes and header/footers (composite layout)](../../../../changes/bcapps/9949.md) (code change): "Report layout administration pages now decode composite layout references, add description fields"
- [#147 ShowMandatory + OnQueryClosePage Check](../../../../changes/bcquality/147.md) (code change): "ShowMandatory property draws an asterisk but doesn't enforce requirements"
- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md) (code change): "Nine reporting rules and guidance articles have been added to the BCQuality"
- [Quick Tip: Deep Dive into Report Objects and Layouts @BC TechDays 2025](../../../../posts/thinkaboutit-be/7181.md) (community post): "Reports combine three layers: data dataset, presentation layout, and user input"
- [What's New: AL Language (2025 release wave 1)](../../../../videos/eUkx_VCcyoU.md) (video): "reports; strings; json; yaml; testing; Report Tooltips; Excel Layout"
- [What's New: Server and Database (2025 release wave 2)](../../../../videos/M1S2_bgLd3Q.md) (video): "Server and Database analysis mode semantic search advanced tell me document reporting"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 21 "Customer Card"](../../../../objects/page/21.md) · on [Table 18 "Customer"](../../../../objects/table/18.md) · via [Report layouts](developing-reports/report-layouts.md)
- [Page 2650 "Email Printer Settings"](../../../../objects/page/2650.md) · on [Table 2650 "Email Printer Settings"](../../../../objects/table/2650.md) · via [How users work with reports](developing-reports/how-users-work-with-reports.md)
- [Page 2750 "Universal Printer Settings"](../../../../objects/page/2750.md) · on [Table 2751 "Universal Printer Settings"](../../../../objects/table/2751.md) · via [How users work with reports](developing-reports/how-users-work-with-reports.md)
- [Page 2752 "Add Universal Printers Wizard"](../../../../objects/page/2752.md) · captioned "Add Universal Print Printers" · via [How users work with reports](developing-reports/how-users-work-with-reports.md)
- [Page 2753 "Universal Print Shares List"](../../../../objects/page/2753.md) · captioned "Print Shares" · on [Table 2752 "Universal Print Share Buffer"](../../../../objects/table/2752.md) · via [How users work with reports](developing-reports/how-users-work-with-reports.md)
- [Page 2754 "Universal Printer Tray List"](../../../../objects/page/2754.md) · captioned "Universal Printer Trays" · on [Table 823 "Name/Value Buffer"](../../../../objects/table/823.md) · via [How users work with reports](developing-reports/how-users-work-with-reports.md)
- [Page 8900 "Administrator Main Role Center"](../../../../objects/page/8900.md) · captioned "Administrator Role Center" · via [How users work with reports](developing-reports/how-users-work-with-reports.md)
- [Page 9650 "Custom Report Layouts"](../../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../../objects/table/9650.md) · via [Report layouts](developing-reports/report-layouts.md)
- [Page 9652 "Report Layout Selection"](../../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../../objects/table/9651.md) · via [Report layouts](developing-reports/report-layouts.md)
- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md) · via [Report layouts](developing-reports/report-layouts.md)
- [Page 9666 "Report Theme and Header/Footer"](../../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts" · via [Report layouts](developing-reports/report-layouts.md)
- [Page 9882 "Report Res. Govern. Settings"](../../../../objects/page/9882.md) · captioned "Report Limits and Settings" · via [Formatting report data](developing-reports/formatting-report-data.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
