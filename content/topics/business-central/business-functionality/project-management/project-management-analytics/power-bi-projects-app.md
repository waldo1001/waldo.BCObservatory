---
id: topic/business-central/business-functionality/project-management/project-management-analytics/power-bi-projects-app
type: topic
title: Power BI projects app
summary: The Power BI Projects app section covers the project analytics reports, the underlying semantic model, and the KPI and measure reference for Business Central projects. It answers questions about budget performance, profitability, realization, invoiced sales, tasks, timelines, and how the data is modeled.
tier: official
language: en
system: projects
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:46.107Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 454b59b417fbce2700052323843d1f2e5575d5b049a07a10567fd58588343437
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
    title: Project Invoiced Sales by Customer (Power BI report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-type
    title: Project Invoiced Sales by Type (Power BI report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-overview
    title: Project Overview (Power BI report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-performance-to-budget
    title: Project Performance to Budget (Power BI Report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-profitability
    title: Project Profitability (Power BI report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-realization
    title: Project Realization (Power BI report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-tasks
    title: Project Tasks (Power BI report)
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-timeline
    title: Project Timeline (Power BI report)
    date: "2025-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-kpis
    title: Projects KPIs and measures (Power BI)
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
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/project-management/project-management-analytics
  localizations: []
  videos:
    - video/6lUli23t3fU
  posts: []
  guidelines: []
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
  code: 0
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

> The Power BI Projects app section covers the project analytics reports, the underlying semantic model, and the KPI and measure reference for Business Central projects. It answers questions about budget performance, profitability, realization, invoiced sales, tasks, timelines, and how the data is modeled.

Path: [Business functionality](../../../business-functionality.md) > [Project management](../../project-management.md) > [Project management analytics](../project-management-analytics.md) > Power BI projects app · tier official · system projects · narrative reviewed by Opus

## Overview

The Power BI Projects app gives leadership, project managers, and team members analytics on project performance, budget adherence, profitability, and invoiced sales. CFOs also use the Project Realization report. The section has one page describing the app and its reports, one page for the semantic model, one for the KPIs and measures, and a page for each report.

The semantic model stores project ledger entries, planning lines, and purchase transactions as fact tables. Dimension tables for projects, resources, tasks, and customers surround them in a star schema. The KPI and measures reference lists the measures built on this model, such as Project Count, Tasks Count, Completed percentage, Invoiced percentage, Realization percentage, and budget variance.

Start with the app overview page to see which reports exist. Then open the report page that matches your question. Use the semantic model and KPI pages when you need to know where a number comes from or want to build your own reports.

## Key points

- The app overview lists the Project Performance to Budget, Project Profitability, Project Overview, Project Invoiced Sales by Type, and Project Invoiced Sales by Customer reports.
- Project Performance to Budget compares Total Usage Cost with Total Budget Cost and shows Total Cost Variance to Budget, so project managers can keep projects under budget.
- Project Profitability shows invoiced and usage profit margins and budget profit per project, comparing costs against prices to find high and low performing projects.
- Project Realization compares invoiced to usage prices (Realization %, Realization Variance) to show which projects need invoicing.
- Project Overview gives high-level metrics: completed, invoiced, and realization percentages, actual profit, budget comparison, and project count.
- Project Tasks gives task-level actual price, cost, profit, profit margin, realization, and billable metrics.
- Project Timeline tracks task starting and ending dates, durations, and critical paths.
- Invoiced Sales by Type splits sales into resources, items, and G/L accounts. Invoiced Sales by Customer splits sales values per project and customer.

## Learn pages

- [Power BI Projects app page (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app): The Power BI Projects app contains reports for an organization's project reporting requirements.
- [Power BI Projects app semantic model](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-app-semantic-model): Learn about the project tables and fields in the Power BI Projects app semantic model for Business Central reporting and analysis.
- [Project Invoiced Sales by Customer (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-customer): The Project Invoiced Sales by Customer report describes your sales activities based on each project for specific customers.
- [Project Invoiced Sales by Type (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-invoiced-sales-by-type): The Project Invoiced Sales by Type report describes your sales activities based on each project and each type of sales line.
- [Project Overview (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-overview): The Project Overview report highlights key high-level information about your organization's project activity.
- [Project Performance to Budget (Power BI Report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-performance-to-budget): The Project Performance to Budget report helps you ensure your projects stay under budget.
- [Project Profitability (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-profitability): The Project Profitability report highlights cost and pricing information for each project.
- [Project Realization (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-realization): The Project Realization report showcases the completion for each project.
- [Project Tasks (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-tasks): The Project Tasks report breaks down each project and their tasks.
- [Project Timeline (Power BI report)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-project-timeline): The Project Timeline monitors project timelines to ensure timely delivery, with insights into task durations, start and end dates, and critical paths.
- [Projects KPIs and measures (Power BI)](https://learn.microsoft.com/dynamics365/business-central/projects-powerbi-kpis): The Projects App KPIs provides a page to clearly identify all KPIs and Measures used in the Projects Report.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Power BI for Projects and Inventory (2025 release wave 2)](../../../../../videos/6lUli23t3fU.md) (video): "Project Power BI App Open Source; Project Profitability Analysis"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 36951, 37033, 37034, 37035, 37036, 37037, 37038, 37039, 37062, 37106.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
