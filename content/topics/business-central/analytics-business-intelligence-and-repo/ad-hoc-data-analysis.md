---
id: topic/business-central/analytics-business-intelligence-and-repo/ad-hoc-data-analysis
type: topic
title: Ad-hoc data analysis
summary: Ad-hoc data analysis in Business Central covers analyzing data directly from pages and lists without standard reports. It answers questions about sorting, searching, filtering, saved list views, data analysis mode with pivot, Excel open and edit, and exporting report datasets to Excel or XML.
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:53.461Z"
  flags: []
generated:
  at: "2026-10-07T16:30:41.512Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2773c6d6659820cc3266c4b7b93d469264f37bb1f956f58e641dd72c5cbcc9a5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-adhoc-analysis
    title: Ad-hoc data analysis
    date: "2024-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ad-hoc-data-analysis-by-functional-area
    title: Ad-hoc data analysis by functional area
    date: "2024-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    title: Analyze list page and query data using data analysis
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel
    title: Analyzing report data with Excel and XML
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-views
    title: Save and personalize List Views
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-enter-criteria-filters
    title: Sort, search, and filter data in lists, reports, or XMLports
    date: "2026-06-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
    title: Viewing and editing in Excel from Business Central
    date: "2026-01-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-adhoc-analysis
    - https://learn.microsoft.com/dynamics365/business-central/ad-hoc-data-analysis-by-functional-area
    - https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    - https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel
    - https://learn.microsoft.com/dynamics365/business-central/ui-views
    - https://learn.microsoft.com/dynamics365/business-central/ui-enter-criteria-filters
    - https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
  objects:
    - object/page/16
    - object/page/22
    - object/page/25
    - object/page/26
    - object/page/27
    - object/page/31
    - object/page/143
    - object/page/144
    - object/page/456
    - object/page/457
    - object/page/458
    - object/page/459
    - object/page/460
    - object/page/461
    - object/page/1480
    - object/page/9300
    - object/page/9301
    - object/page/9303
    - object/page/9304
    - object/page/9305
    - object/page/9306
    - object/page/9307
    - object/page/9309
    - object/page/9310
    - object/page/9311
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo
  localizations: []
  videos:
    - video/Afv-r-eDt90
    - video/c3paEbmDNmM
    - video/Fk6kWTe3f2Y
    - video/H7R_m8Ue38g
    - video/ijaOx9sSfkw
    - video/N7RE_UVeH1c
    - video/qmLVKyHRhNc
    - video/Rh1AFX9A1x4
    - video/SHOAw9GehdI
    - video/ZpzZ6El8GXY
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-2404641747766690790--5e5cc51257
    - post/thedynamicsexplorer-com/10122
    - post/thedynamicsexplorer-com/9995
    - post/thinkaboutit-be/7503
    - post/thinkaboutit-be/7537
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Ad-hoc data analysis
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children: []
coverage:
  learn: 7
  code: 25
  video: 10
  blog: 5
  guideline: 0
bc_forms:
  - 16
  - 22
  - 25
  - 26
  - 27
  - 31
  - 143
  - 144
  - 456
  - 457
  - 458
  - 459
  - 460
  - 461
  - 1480
  - 9300
  - 9301
  - 9303
  - 9304
  - 9305
  - 9306
  - 9307
  - 9309
  - 9310
  - 9311
member_hash: de044599812a6b0d108c6902394ae21eb6439d889201682a7c7925f172fe1d64
narrative: generated
---

# Ad-hoc data analysis

> Ad-hoc data analysis in Business Central covers analyzing data directly from pages and lists without standard reports. It answers questions about sorting, searching, filtering, saved list views, data analysis mode with pivot, Excel open and edit, and exporting report datasets to Excel or XML.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Ad-hoc data analysis · tier official · system reporting · narrative reviewed by Opus

## Overview

Ad-hoc data analysis is about exploring Business Central data straight from list pages and queries, instead of building or running a report. The tools range from basic ones (sort, search, filter, saved list views) to data analysis mode and Excel-based options.

Start with the overview page, then read the page on sorting, searching and filtering, which sets the base for everything else. Next, look at saving and personalizing list views, and at data analysis mode for grouping and pivoting. For work outside Business Central, use the Excel pages: Open in Excel and Edit in Excel for list data, and the Excel and XML export for report datasets. That export suits developers and advanced users who troubleshoot reports. A functional-area page links to analysis resources for specific areas.

## Key points

- Sorting, searching and filtering are the base tools. Filters support operators (>, <, =, <>, |, .., &, *, ?) and tokens such as %me, %user, %mycustomers, %myitems and %myvendors.
- Search comes in a modern word-matching mode and a legacy exact-matching mode.
- List views save filter setups. You can rename, remove, personalize and bookmark them on the Role Center, and they are reusable across devices.
- Data analysis mode works on list page and query data. It has a Columns pane, an Analysis Filters pane, row groups, pivot mode and date hierarchies. You can add fields from related tables and keep several analysis views.
- Analysis views can be bookmarked to the Role Center.
- Open in Excel and Edit in Excel let you export list data, or change it and publish it back to Business Central. They support filters, the Excel add-in and multiple environments.
- Report datasets can be exported as data-only Excel workbooks or XML files. The Excel export includes a report metadata worksheet and filter information.
- A page of links points to ad-hoc analysis resources by functional area.

## Learn pages

- [Ad-hoc data analysis](https://learn.microsoft.com/dynamics365/business-central/reports-adhoc-analysis): Provides an overview of features that support ad-hoc data analyses in Business Central.
- [Ad-hoc data analysis by functional area](https://learn.microsoft.com/dynamics365/business-central/ad-hoc-data-analysis-by-functional-area): Provides an overview of functional area specific landing pages for ad-hoc data analysis in Business Central.
- [Analyze list page and query data using data analysis](https://learn.microsoft.com/dynamics365/business-central/analysis-mode): Learn how to use the analysis mode in Business Central to analyze data.
- [Analyzing report data with Excel and XML](https://learn.microsoft.com/dynamics365/business-central/report-analyze-excel): Learn how to use Excel and XML to analyze a report dataset.
- [Save and personalize List Views](https://learn.microsoft.com/dynamics365/business-central/ui-views): Learn how to create your own views for filtered lists and how to save, rename, and manage those views.
- [Sort, search, and filter data in lists, reports, or XMLports](https://learn.microsoft.com/dynamics365/business-central/ui-enter-criteria-filters): Learn to work efficiently in lists by searching across your data, sorting columns, and refining results using filter symbols and keyboard shortcuts.
- [Viewing and editing in Excel from Business Central](https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel): Learn how to open pages in Microsoft Excel from Business Central for better data analysis.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Analysis Mode killed half the Excel exports on your client's shared drive](../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-2404641747766690790--5e5cc51257.md) (community post): "lets users group, filter, and pivot data on Business Central list pages"
- [Dynamics 365 Business Central – Month End Accruals for GRNI Purchase Orders and Unposted Purchase Invoices](../../../posts/thedynamicsexplorer-com/10122.md) (community post): "Use Purchase Lines page with Analysis Mode to filter unposted invoices"
- [Dynamics GP to Business Central – The Arrival of Smartlist Features via “Add Fields from Related Tables in Analysis Mode”](../../../posts/thedynamicsexplorer-com/9995.md) (community post): "Add fields from related tables in Analysis mode after activating it"
- [How Do I: Analyze List Pages and Data Using Analysis Mode in Business Central](../../../posts/thinkaboutit-be/7503.md) (community post): "Analysis Mode is a built-in Business Central feature that lets users interactively explore list data"
- [How Do I: Replace Reports with Analysis Mode in Business Central](../../../posts/thinkaboutit-be/7537.md) (community post): "Analysis Mode works best for answering questions rather than producing"
- [What's New: Enhanced Analysis Mode (2026 release wave 1)](../../../videos/Afv-r-eDt90.md) (video): "analysis mode; analysis views; al extensions; page extensions"
- [What's New: Server and Database - New Reporting Capabilities (2023 release wave 2)](../../../videos/c3paEbmDNmM.md) (video): "Data Analysis on Queries; Server-Side Analysis Views on Queries"
- [Deploy Analysis Views with AL Code in Business Central 2026 Wave 1 (No Manual Setup)](../../../videos/Fk6kWTe3f2Y.md) (video): "Analysis views packaged in AL extensions; Ad hoc analysis mode"
- [Business Central v29: System Audit Fields Now Available in Analysis Mode](../../../videos/H7R_m8Ue38g.md) (video): "System audit fields in profile customization; Audit fields in analysis mode"
- [What's Cooking in Business Central: Wanna Filter on Totals in Analysis Mode?](../../../videos/ijaOx9sSfkw.md) (video): "analysis mode; data analysis; filtering; totals; aggregated columns"
- [What's Cooking in Business Central: Wanna Export Data to Excel in Analysis Mode?](../../../videos/N7RE_UVeH1c.md) (video): "Excel Export via Right-Click; Excel Export via Data Analysis Tab Menu"
- [Introducing: Analyze Data on Lists and Queries (2023 release wave 2)](../../../videos/qmLVKyHRhNc.md) (video): "Analyze data on list pages; Share data analysis; Analysis menu"
- [What's New: Data Analysis (2025 release wave 1)](../../../videos/Rh1AFX9A1x4.md) (video): "analysis mode; related tables; data analysis; excel export; list pages"
- [What's New: Data Analysis (2025 release wave 2)](../../../videos/SHOAw9GehdI.md) (video): "data analysis; analysis mode; copilot; analysis assist; pivot; date hierarchy"
- [What's new: Data Analysis (2026 release wave 2)](../../../videos/ZpzZ6El8GXY.md) (video): "System fields in analysis mode; Bookmark analysis tab"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 16 "Chart of Accounts"](../../../objects/page/16.md) · on [Table 15 "G/L Account"](../../../objects/table/15.md)
- [Page 22 "Customer List"](../../../objects/page/22.md) · captioned "Customers" · on [Table 18 "Customer"](../../../objects/table/18.md)
- [Page 25 "Customer Ledger Entries"](../../../objects/page/25.md) · on [Table 21 "Cust. Ledger Entry"](../../../objects/table/21.md)
- [Page 26 "Vendor Card"](../../../objects/page/26.md) · on [Table 23 "Vendor"](../../../objects/table/23.md)
- [Page 27 "Vendor List"](../../../objects/page/27.md) · captioned "Vendors" · on [Table 23 "Vendor"](../../../objects/table/23.md)
- [Page 31 "Item List"](../../../objects/page/31.md) · captioned "Items" · on [Table 27 "Item"](../../../objects/table/27.md)
- [Page 143 "Posted Sales Invoices"](../../../objects/page/143.md) · on [Table 112 "Sales Invoice Header"](../../../objects/table/112.md)
- [Page 144 "Posted Sales Credit Memos"](../../../objects/page/144.md) · on [Table 114 "Sales Cr.Memo Header"](../../../objects/table/114.md)
- [Page 456 "No. Series"](../../../objects/page/456.md) · on [Table 308 "No. Series"](../../../objects/table/308.md)
- [Page 457 "No. Series Lines"](../../../objects/page/457.md) · on [Table 309 "No. Series Line"](../../../objects/table/309.md)
- [Page 458 "No. Series Relationships"](../../../objects/page/458.md) · on [Table 310 "No. Series Relationship"](../../../objects/table/310.md)
- [Page 459 "Sales & Receivables Setup"](../../../objects/page/459.md) · on [Table 311 "Sales & Receivables Setup"](../../../objects/table/311.md)
- [Page 460 "Purchases & Payables Setup"](../../../objects/page/460.md) · on [Table 312 "Purchases & Payables Setup"](../../../objects/table/312.md)
- [Page 461 "Inventory Setup"](../../../objects/page/461.md) · on [Table 313 "Inventory Setup"](../../../objects/table/313.md)
- [Page 1480 "Excel Centralized Depl. Wizard"](../../../objects/page/1480.md) · captioned "Excel Add-in Centralized Deployment" · on [Table 1480 "Edit in Excel Settings"](../../../objects/table/1480.md)
- [Page 9300 "Sales Quotes"](../../../objects/page/9300.md) · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9301 "Sales Invoice List"](../../../objects/page/9301.md) · captioned "Sales Invoices" · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9303 "Blanket Sales Orders"](../../../objects/page/9303.md) · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9304 "Sales Return Order List"](../../../objects/page/9304.md) · captioned "Sales Return Orders" · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9305 "Sales Order List"](../../../objects/page/9305.md) · captioned "Sales Orders" · on [Table 36 "Sales Header"](../../../objects/table/36.md)
- [Page 9306 "Purchase Quotes"](../../../objects/page/9306.md) · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9307 "Purchase Order List"](../../../objects/page/9307.md) · captioned "Purchase Orders" · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9309 "Purchase Credit Memos"](../../../objects/page/9309.md) · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9310 "Blanket Purchase Orders"](../../../objects/page/9310.md) · on [Table 38 "Purchase Header"](../../../objects/table/38.md)
- [Page 9311 "Purchase Return Order List"](../../../objects/page/9311.md) · captioned "Purchase Return Orders" · on [Table 38 "Purchase Header"](../../../objects/table/38.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
