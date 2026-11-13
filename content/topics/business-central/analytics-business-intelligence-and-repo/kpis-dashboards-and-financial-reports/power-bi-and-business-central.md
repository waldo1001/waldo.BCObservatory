---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-and-business-central
type: topic
title: Power BI and Business Central
summary: "Power BI and Business Central covers using Business Central data in Power BI: building dashboards and reports, embedding reports in Business Central pages, tracking KPIs with Power BI Goals, and analyzing semantic models in Excel. It answers questions about getting data out, viewing reports, and refreshing them."
tier: official
language: en
system: reporting
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
  input_hash: cc28cdea4398422b1b108a21fa0a8a3d68dad31dc29e42bb1bfaa43897123eef
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
    title: Power BI Goals for Business Central KPIs
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/powerbi-use-semantic-models-in-excel
    title: Use Business Central Power BI Semantic Models in Excel
    date: "2026-11-11"
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

> Power BI and Business Central covers using Business Central data in Power BI: building dashboards and reports, embedding reports in Business Central pages, tracking KPIs with Power BI Goals, and analyzing semantic models in Excel. It answers questions about getting data out, viewing reports, and refreshing them.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI and Business Central · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how Business Central and Power BI work together. It starts with an introduction to the integration: how data is exposed (API pages and OData), and the ways to consume it, including Power BI apps, Power BI Desktop, the Power Query connector, dataflows and datamarts, and embedded reports.

The other pages cover specific tasks. One describes viewing, analyzing and managing Power BI reports inside Business Central, with manual or scheduled refresh. One covers Power BI Goals for tracking KPIs with scorecards. One shows how to use Business Central Power BI semantic models in Excel through connected tables and pivot tables.

Start with the introduction to choose an approach, then go to the page for your task: working with reports in Business Central, KPI scorecards, or Excel analysis.

## Key points

- Business Central data reaches Power BI through API pages and OData, and the Power Query connector.
- Options include Power BI apps for Business Central, Power BI Desktop custom reports, dataflows and datamarts.
- Power BI reports can be embedded and viewed in Business Central pages.
- Reports that use Business Central data can be refreshed manually or on a schedule.
- Power BI Goals tracks KPIs with scorecards, connected goals and automated status rules.
- Goals supports Teams notifications and scorecard email subscriptions.
- Power BI semantic models can be used in Excel via live connection, connected tables and pivot tables.
- Reports, dashboards and scorecards can be shared.

## Learn pages

- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Power BI Goals for Business Central KPIs](https://learn.microsoft.com/dynamics365/business-central/track-kpis-with-power-bi-metrics): Track Business Central KPIs in Power BI scorecards, connect goals to report data, define automated status rules, and follow progress.
- [Use Business Central Power BI Semantic Models in Excel](https://learn.microsoft.com/dynamics365/business-central/powerbi-use-semantic-models-in-excel): Connect Excel to Business Central Power BI semantic models to create refreshable tables and PivotTables, and combine data with Power Pivot.
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
