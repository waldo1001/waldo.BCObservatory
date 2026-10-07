---
id: topic/dev-itpro/development/extensibility/embedding-power-bi
type: topic
title: Embedding Power BI
summary: Embedding Power BI covers how Business Central integrates with Power BI and how developers embed Power BI reports, scorecards, and dashboards in Business Central pages. It answers questions about the integration overview and about the embed framework, its pages, and context handling.
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c46f1e7f43172e8d19b6c1eda0b400eea09c5925c61668e49171481ba7ccb0d4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts
    title: Embed Power BI reports in pages
    date: "2025-05-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    title: Introduction to Business Central and Power BI
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extensibility
  localizations: []
  videos:
    - video/RU3D3RMAvVI
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Extensibility
  - Embedding Power BI
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extensibility
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 6316
  - 6317
member_hash: fd666723dde183299bb13c34badea087732eb72ba3120874e1447b01c0595e26
narrative: generated
---

# Embedding Power BI

> Embedding Power BI covers how Business Central integrates with Power BI and how developers embed Power BI reports, scorecards, and dashboards in Business Central pages. It answers questions about the integration overview and about the embed framework, its pages, and context handling.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Embedding Power BI · tier official · system reporting · **unreviewed** (machine-generated narrative)

## Overview

This section explains the connection between Business Central and Power BI. It has two pages and no subtopics. The introduction gives the general picture: building dashboards and reports, using the built-in Power BI apps, working with Power BI Desktop, and managing the integration across roles.

The second page is the developer-focused one. It describes how to embed Power BI reports, scorecards, and dashboards in Business Central pages using the Power BI embed framework. It names pages such as Power BI Embedded Report Part and Power BI Element Addin Host. It also covers context keywords and the SetCurrentListSelection and SetPageContext calls.

Start with the introduction to understand what is available and who manages it. Then move to the embedding page when you need to place Power BI content in a page or pass page context to a report.

## Key points

- Business Central and Power BI integration supports dashboards, reports, data visualization, and KPI tracking.
- Built-in Power BI apps are available, and Power BI Desktop integration is covered.
- The Power BI embed framework lets you embed reports, scorecards, and dashboards in Business Central pages.
- Relevant pages include Power BI Embedded Report Part and Power BI Element Addin Host.
- Embeddable content includes the Power BI Report part, dashboard tiles, and report visuals.
- Context keywords, SetCurrentListSelection, and SetPageContext handle context passed between a page and the embedded report.
- The embedding page references the 2022 release wave 2, 2023 release wave 2, and 2025 release wave 1.

## Learn pages

- [Embed Power BI reports in pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-power-bi-report-parts): Explains how to display Power BI reports on pages in Business Central
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Power BI Embedding (For Developers) (2025 release wave 1)](../../../../videos/RU3D3RMAvVI.md) (video): "power bi embedding; user control host; page type; control addin"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 6316, 6317.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
