---
id: topic/business-central/business-functionality/project-management/project-management-analytics/power-bi-projects-app
type: topic
title: Power BI projects app
summary: The Power BI Projects app covers project analytics reports, the underlying semantic model, and the KPI and measure reference for Business Central projects. It answers questions about budget performance, profitability, realization, invoiced sales, task progress, and timelines.
tier: official
language: en
system: projects
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
  input_hash: 145a7e3184862a55885afcda94c7ec0d841d76006ea2bd4b443a46feb48849d6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app
    title: Power BI Projects app page (Power BI report)
    date: "2026-09-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app-semantic-model
    title: Power BI Projects app semantic model
    date: "2026-07-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-customer
    title: Project Invoiced Sales by Customer Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-type
    title: Project Invoiced Sales by Type Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-overview
    title: Project Overview Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-performance-to-budget
    title: Project Performance to Budget Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-profitability
    title: Project Profitability Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-realization
    title: Project Realization Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-tasks
    title: Project Tasks for Project Managers Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-timeline
    title: Project Timeline Power BI Report
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-kpis
    title: Projects KPIs and Measures (Power BI)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app-semantic-model
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-customer
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-type
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-overview
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-performance-to-budget
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-profitability
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-realization
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-tasks
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-timeline
    - https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-kpis
  objects:
    - object/page/36951
    - object/page/37033
    - object/page/37034
    - object/page/37035
    - object/page/37036
    - object/page/37037
    - object/page/37038
    - object/page/37039
    - object/page/37062
    - object/page/37106
  features: []
  topics:
    - topic/business-central/business-functionality/project-management/project-management-analytics
  localizations: []
  videos:
    - video/6lUli23t3fU
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10158
learn_toc_path:
  - Business functionality
  - Project management
  - Project management analytics
  - Power BI projects app
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/project-management/project-management-analytics
children: []
coverage:
  learn: 11
  code: 10
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 36951
  - 37033
  - 37034
  - 37035
  - 37036
  - 37037
  - 37038
  - 37039
  - 37062
  - 37106
member_hash: 7a8f07ed28f41c6de3ea66d084c827bdcc1823a2c52faa2fb28abda9534d1628
narrative: generated
---

# Power BI projects app

> The Power BI Projects app covers project analytics reports, the underlying semantic model, and the KPI and measure reference for Business Central projects. It answers questions about budget performance, profitability, realization, invoiced sales, task progress, and timelines.

Path: [Business functionality](../../../business-functionality.md) > [Project management](../../project-management.md) > [Project management analytics](../project-management-analytics.md) > Power BI projects app · tier official · system projects · narrative **unreviewed** (model text not yet checked)

## Overview

The Power BI Projects app gives leadership, project managers, and team members a set of Power BI reports on project performance, budget adherence, profitability, and invoiced sales. Each report has its own page describing the metrics it shows and who uses it.

The reports are: Project Overview, Project Performance to Budget, Project Profitability, Project Realization, Project Invoiced Sales by Type, Project Invoiced Sales by Customer, Project Tasks for Project Managers, and Project Timeline. They draw on a semantic model built as a star schema, with fact tables for project ledger entries, planning lines, and purchase transactions, and dimension tables for projects, resources, tasks, and customers.

Start with the app page for an overview of the reports, then open the report that matches your question. Use the semantic model page to understand the data structure, and the KPIs and measures reference to look up how a measure such as Realization percentage or Budget variance is defined.

## Key points

- Project Performance to Budget compares budgeted cost with actual usage cost, showing Completed (%), Total Cost Variance to Budget and its percentage.
- Project Profitability shows invoiced and usage profit margins and budget profit to help leadership find high and low performing projects.
- Project Realization compares billable prices from planning with recorded usage, using Realization (%) and Realization Variance to find projects where prices do not cover usage costs.
- Project Overview shows KPIs such as Realization, Total Usage Profit, Total Usage Profit Margin, Total Invoiced Profit, and Total Usage Cost.
- Two invoiced sales reports exist: by Type (resource, item, G/L account) and by Customer (Invoiced %, Total Invoiced Price, Total Billable Price).
- Project Tasks for Project Managers gives task-level metrics for usage price, cost, profit, margin, realization, and invoiced price.
- Project Timeline shows task start and end dates and duration in days and weeks from planning lines, to spot scheduling issues.
- The semantic model is a star schema with fact tables (ledger entries, planning lines, purchases) and dimensions (projects, resources, tasks, customers).

## Learn pages

- [Power BI Projects app page (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app): The Power BI Projects app contains reports for an organization's project reporting requirements.
- [Power BI Projects app semantic model](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app-semantic-model): Learn about the project tables and fields in the Power BI Projects app semantic model for Business Central reporting and analysis.
  - In the observatory: [Table 15 "G/L Account"](../../../../../objects/table/15.md), [Table 156 "Resource"](../../../../../objects/table/156.md), [Table 18 "Customer"](../../../../../objects/table/18.md), [Table 27 "Item"](../../../../../objects/table/27.md), [Table 39 "Purchase Line"](../../../../../objects/table/39.md), [Table 5722 "Item Category"](../../../../../objects/table/5722.md)
- [Project Invoiced Sales by Customer Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-customer): The Project Invoiced Sales by Customer report describes your sales activities based on each project for specific customers.
  - In the observatory: [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md), [Table 169 "Job Ledger Entry"](../../../../../objects/table/169.md)
- [Project Invoiced Sales by Type Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-type): The Project Invoiced Sales by Type report describes your sales activities based on each project and each type of sales line.
  - In the observatory: [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md), [Table 169 "Job Ledger Entry"](../../../../../objects/table/169.md)
- [Project Overview Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-overview): Review project counts, usage costs, profit, and realization in Business Central with the Project Overview Power BI report for managers and leaders.
  - In the observatory: [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md), [Table 169 "Job Ledger Entry"](../../../../../objects/table/169.md)
- [Project Performance to Budget Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-performance-to-budget): Compare project usage costs with budgeted costs in Business Central, and identify variances with the Project Performance to Budget Power BI report.
  - In the observatory: [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md), [Table 169 "Job Ledger Entry"](../../../../../objects/table/169.md)
- [Project Profitability Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-profitability): Compare project usage, budgeted, and invoiced costs and prices in Business Central with the Project Profitability Power BI report for project leaders.
  - In the observatory: [Table 1001 "Job Task"](../../../../../objects/table/1001.md), [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md)
- [Project Realization Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-realization): Compare billable project prices with usage prices in Business Central, and analyze realization and price variances with the Project Realization report.
  - In the observatory: [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md)
- [Project Tasks for Project Managers Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-tasks): Analyze usage costs, prices, profit, realization, and budgets by project task in Business Central with the Project Tasks Power BI report.
- [Project Timeline Power BI Report](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-timeline): Review project task start dates, end dates, and durations derived from planning lines in Business Central with the Project Timeline Power BI report.
  - In the observatory: [Table 1001 "Job Task"](../../../../../objects/table/1001.md), [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md)
- [Projects KPIs and Measures (Power BI)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-kpis): Explore project KPIs and measures in the Business Central Power BI Projects app semantic model, including formulas and the data used in calculations.
  - In the observatory: [Table 1001 "Job Task"](../../../../../objects/table/1001.md), [Table 1003 "Job Planning Line"](../../../../../objects/table/1003.md), [Table 167 "Job"](../../../../../objects/table/167.md), [Table 169 "Job Ledger Entry"](../../../../../objects/table/169.md), [Table 39 "Purchase Line"](../../../../../objects/table/39.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10158 Add details to project sales tooltip](../../../../../changes/bcapps/10158.md) (code change): "Project Sales by Project chart now displays project description and customer name"
- [What's New: Power BI for Projects and Inventory (2025 release wave 2)](../../../../../videos/6lUli23t3fU.md) (video): "Project Profitability Analysis; Project Invoice Sales by Type"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 36951 "PowerBI Reports Setup"](../../../../../objects/page/36951.md) · captioned "Power BI Reports Setup" · on [Table 36951 "PowerBI Reports Setup"](../../../../../objects/table/36951.md)
- [Page 37033 "Projects Overview"](../../../../../objects/page/37033.md) · captioned "Projects Overview (Power BI)"
- [Page 37034 "Project Tasks"](../../../../../objects/page/37034.md) · captioned "Project Tasks (Power BI)"
- [Page 37035 "Project Profitability"](../../../../../objects/page/37035.md) · captioned "Project Profitability (Power BI)"
- [Page 37036 "Project Realization"](../../../../../objects/page/37036.md) · captioned "Project Realization (Power BI)"
- [Page 37037 "Project Performance to Budget"](../../../../../objects/page/37037.md) · captioned "Project Performance to Budget (Power BI)"
- [Page 37038 "Project Invoiced Sales by Type"](../../../../../objects/page/37038.md) · captioned "Project Invoiced Sales by Type (Power BI)"
- [Page 37039 "Project Invd. Sales by Cust."](../../../../../objects/page/37039.md) · captioned "Project Invoiced Sales by Customer (Power BI)"
- [Page 37062 "Projects Report"](../../../../../objects/page/37062.md) · captioned "Projects Report (Power BI)"
- [Page 37106 "Project Timeline"](../../../../../objects/page/37106.md) · captioned "Project Timeline (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
