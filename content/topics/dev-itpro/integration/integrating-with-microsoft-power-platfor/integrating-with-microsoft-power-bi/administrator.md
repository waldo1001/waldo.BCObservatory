---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/administrator
type: topic
title: Administrator
summary: "Administrator guidance for Power BI integration with Business Central: how to enable it (licensing, API pages, OData web services, online and on-premises setup) and how the integration architecture works. It answers setup and architecture questions."
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
  input_hash: 98f792755aa11bcf4517671c8d9cd8cf3711341aea8201eb4f686f787a33ab52
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    title: Enabling Power BI integration with Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
    title: Power BI Integration Architecture for Business Central
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/72067
  guidelines: []
  changes:
    - change/bcapps/13164
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Power BI
  - Administrator
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: b919f6b7c823a96f44f4f36dcb7acabb498da1d090ce0536908152b53491293e
narrative: generated
---

# Administrator

> Administrator guidance for Power BI integration with Business Central: how to enable it (licensing, API pages, OData web services, online and on-premises setup) and how the integration architecture works. It answers setup and architecture questions.

Path: [Integration](../../../integration.md) > [Integrating with Microsoft Power Platform](../../integrating-with-microsoft-power-platfor.md) > [Integrating with Microsoft Power BI](../integrating-with-microsoft-power-bi.md) > Administrator · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for administrators who need to connect Business Central data to Power BI. It has two pages: one on enabling the integration and one on the architecture behind it.

The enabling page covers licensing (Power BI free and Pro), how data is exposed through API pages and OData web services, and the configuration differences between online and on-premises deployments. It also mentions dataflows and Power BI apps. It is dated 2022.

The architecture page explains the components and workflow: Power BI connectors, embedded report viewing in a FactBox, report management, and default Power BI reports on role centers. It also covers read-only database replicas and database read scale-out. Start with the architecture page for the big picture, then use the enabling page for setup.

## Key points

- Two pages: enabling Power BI integration and the integration architecture.
- Licensing covered: Power BI free and Power BI Pro licenses.
- Business Central data reaches Power BI through API pages and OData web services.
- Setup differs between online and on-premises deployments.
- Dataflows and Power BI apps are mentioned as part of the enabling page.
- Architecture includes Power BI connectors, embedded report viewing in a FactBox, and report management.
- Default Power BI reports can appear on role centers.
- Read-only database replica and database read scale-out are part of the architecture.

## Learn pages

- [Enabling Power BI integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup): Learn how to set up the connection to Power BI. With Power BI reports, you can get insights, business intelligence, and key performance indicators from your data.
  - In the observatory: [Page 810 "Web Services"](../../../../../objects/page/810.md)
- [Power BI Integration Architecture for Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview): Understand the components, data connections, read-only database access, and user workflow that support Power BI integration with Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#13164 Inventory and Sustainability Power BI reports missing from Role Explorer despite being searchable](../../../../../changes/bcapps/13164.md) (code change): "Sustainability and Inventory Valuation Power BI reports now appear in Role Explorer"
- [Business Central 2026 release wave 1 (BC28.2): Power BI Report Deployments (Centralized Management of Power BI Apps)](../../../../../posts/yzhums-com/72067.md) (community post): "Power BI Report Deployments page, enabling centralized management and batch deployment"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
