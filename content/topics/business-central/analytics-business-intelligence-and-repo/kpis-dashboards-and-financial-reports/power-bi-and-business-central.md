---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-and-business-central
type: topic
title: Power BI and Business Central
summary: Power BI and Business Central covers how to bring Business Central data into Power BI, embed reports in Business Central pages, track KPIs with metrics and scorecards, and analyze Power BI semantic models in Excel. It answers questions about setup, refresh, sharing, and reporting options.
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ee172b81c41506a9d2214f23dff0b4ff3c7db92fde771de299dc820afb37c6e7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    title: Introduction to Business Central and Power BI
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/track-kpis-with-power-bi-metrics
    title: Track your business KPIs with Power BI metrics
    date: "2024-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/powerbi-use-semantic-models-in-excel
    title: Use Power BI Semantic Models in Excel for Dynamics 365 Business Central Reporting
    date: "2025-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi
    title: Working with Power BI reports in Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/track-kpis-with-power-bi-metrics
    - https://learn.microsoft.com/dynamics365/business-central/powerbi-use-semantic-models-in-excel
    - https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi
  objects:
    - object/page/6316
    - object/page/6317
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports
  localizations: []
  videos:
    - video/DVgclv3alZU
    - video/F_pssS0FtUc
    - video/fy96_jdL1PQ
    - video/gMyp9JkXf9g
    - video/hSJW3LiOBxg
  posts:
    - post/thinkaboutit-be/7226
    - post/thinkaboutit-be/7753
    - post/yzhums-com/74390
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - KPIs, dashboards, and financial reports
  - Power BI and Business Central
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports
children: []
coverage:
  learn: 4
  code: 2
  video: 5
  blog: 3
  guideline: 0
bc_forms:
  - 6316
  - 6317
member_hash: 2b248b8b4750223ab51092d87e49e43ccdc138cc10bb7d3d785384a3ffb8612f
narrative: generated
---

# Power BI and Business Central

> Power BI and Business Central covers how to bring Business Central data into Power BI, embed reports in Business Central pages, track KPIs with metrics and scorecards, and analyze Power BI semantic models in Excel. It answers questions about setup, refresh, sharing, and reporting options.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI and Business Central · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how Power BI works with Business Central. It starts with an introduction to the integration: retrieving Business Central data for dashboards and reports, using Power BI apps, embedding reports in Business Central pages, and building custom reports in Power BI Desktop. Data is exposed through API pages and OData, and options such as dataflows, datamarts and the Power Query connector are mentioned.

The other pages cover specific tasks. One covers working with Power BI reports inside Business Central, including viewing, analyzing, managing, sharing, and manual or scheduled refresh. One covers Power BI metrics for tracking KPIs with scorecards, status rules and alerts. One covers using Power BI semantic models in Excel for ad-hoc reporting with Pivot Tables and Tables.

Start with the introduction to see which approach fits your needs. Then go to the page for the task you have: working with reports in Business Central, KPI tracking, or Excel analysis.

## Key points

- Business Central data can be retrieved for Power BI through API pages and OData, with a Power Query connector, dataflows and datamarts also covered.
- Power BI apps for Business Central and embedded Power BI reports let users see reports inside Business Central pages.
- Power BI Desktop can be used to build custom reports on Business Central data.
- Reports in Business Central can be refreshed manually or on a schedule, and can be shared.
- Power BI metrics provide scorecards, connected metrics, automated status rules and alerting, including Teams alerts (2023 release wave 2).
- Scorecards can be embedded in Business Central.
- Power BI semantic models can be used in Excel to create Pivot Tables and Tables connected to Business Central Power BI apps.
- Excel use involves the Power Pivot add-in and model relationships for ad-hoc cross-functional analysis.

## Learn pages

- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Track your business KPIs with Power BI metrics](https://learn.microsoft.com/dynamics365/business-central/track-kpis-with-power-bi-metrics): Get an overview of using Power BI to get business intelligence and KPIs from your Business Central data.
- [Use Power BI Semantic Models in Excel for Dynamics 365 Business Central Reporting](https://learn.microsoft.com/dynamics365/business-central/powerbi-use-semantic-models-in-excel): Describes how to utilize connections Power BI semantic models in Excel for Business Central reporting.
- [Working with Power BI reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi): Get insight, business intelligence, and key performance indicators from your Business Central data with Power BI.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [How to Install and Configure Power BI Monitor for Business Central](../../../../posts/thinkaboutit-be/7226.md) (community post): "Power BI Monitor extension enables Business Central users to manage Power BI resources directly through Business Central"
- [Which Power BI License Do You Need for Business Central?](../../../../posts/thinkaboutit-be/7753.md) (community post): "Power BI Pro is required for any practical use of Power BI with Business Central"
- [Business Central 2026 release wave 1 (BC28.2): Use new APIs for analyzing approval workflows for auditors and IT staff](../../../../posts/yzhums-com/74390.md) (community post): "Organizations can integrate with Power BI, Copilot Studio, and MCP Server for analytics"
- [What's New: Enhanced Power BI and Excel with Business Central (2026 release wave 1)](../../../../videos/DVgclv3alZU.md) (video): "Excel as Client for Power BI Semantic Models; Agentic Excel Capabilities"
- [Get Low-Friction Go-Lives and Optimize Your Investments with Telemetry Data](../../../../videos/F_pssS0FtUc.md) (video): "Business Central Usage App; DAU/WAU/MAU Report; Sessions Report; User Locations Report"
- [Episode 520: Reports, Dashboards, and Scorecards: A Complete Guide to Reporting in Business Central](../../../../videos/fy96_jdL1PQ.md) (video): "PowerBI integration and reporting; PowerBI Data Modeling; PowerBI Dashboards; PowerBI Scorecards"
- [What's New: Excel Reports for Finance and Sales (2024 release wave 1)](../../../../videos/gMyp9JkXf9g.md) (video): "Excel reports; trial balance; accounts receivable; accounts payable; aging reports"
- [What's New: Power BI and Reporting for Developers (2023 release wave 2)](../../../../videos/hSJW3LiOBxg.md) (video): "power bi integration; analytical reports"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6316 "Sustainability Report Power BI"](../../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
