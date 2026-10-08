---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-automat
type: topic
title: Integrating with Microsoft Power Automate
summary: "Power Automate integration with Business Central: how administrators set up access and permissions, how to create automated and instant flows, and how to manage existing flows. It answers questions about triggers, actions, the Business Central connector, Teams integration, and flow management."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:03.316Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b90f5a0b2c8d9c85e30bad22ab12c49cae7ce69dcf3c3effc7299c6def7856c4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/manage-power-automate-flows
    title: Manage Power Automate Flows
    date: "2024-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    title: Power Automate Integration Overview
    date: "2025-08-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/automate-workflows
    title: Set up automated workflows
    date: "2023-04-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/instant-flows
    title: Set Up Instant Flows
    date: "2023-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-setup
    title: Set Up Power Automate Integration
    date: "2023-05-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/manage-power-automate-flows
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/automate-workflows
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/instant-flows
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-setup
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
  localizations: []
  videos:
    - video/6Zb7VAvLVm4
    - video/T63y0F_38SI
    - video/YTA8c2XyTX4
  posts:
    - post/aardvarklabs-blog/2907
    - post/aardvarklabs-blog/3579
    - post/aardvarklabs-blog/3631
  guidelines: []
  changes:
    - change/bcapps/10010
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Power Automate
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
children: []
coverage:
  learn: 5
  code: 0
  video: 3
  blog: 3
  guideline: 0
bc_forms: []
member_hash: d83985e3f53052e05e48c65c878b806990be809f7b8b581f42a7ef7809a3e59f
narrative: generated
---

# Integrating with Microsoft Power Automate

> Power Automate integration with Business Central: how administrators set up access and permissions, how to create automated and instant flows, and how to manage existing flows. It answers questions about triggers, actions, the Business Central connector, Teams integration, and flow management.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Power Platform](../integrating-with-microsoft-power-platfor.md) > Integrating with Microsoft Power Automate · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

Power Automate integration brings no code/low code workflows to Business Central. Flows can be automated, started by Business Central events, or instant, started manually by a user. Both types use the Business Central connector with triggers and actions to connect to cloud services.

The pages follow a natural order. Start with the integration overview for concepts, then the setup page, where administrators control access through permissions and privacy notice agreements. Next, choose the guide for the flow type: automated workflows (triggers, actions, dynamic content, adaptive cards, Teams) or instant flows (the For a selected record trigger and manual flows). Finally, the manage page covers editing and monitoring flows that already exist.

## Key points

- Two flow types: automated flows triggered by Business Central events, and instant flows triggered on demand by users.
- Administrators control access to Power Automate features through the Allow Action Automate permission, permission sets, and privacy consent.
- The Automate action group in Business Central is where users reach flow features; telemetry tracking is mentioned in the setup page.
- Automated flows are built from triggers, actions, and dynamic content, and can use adaptive cards and Microsoft Teams integration.
- Instant flows can use the For a selected record trigger, flow templates, flow parameters, and Power Automate environments.
- Existing flows can be edited, inspected for details and history, and managed from Power Automate or the Manage Flows interface in Business Central.
- Manage Flows covers run-only permissions and process insights.

## Learn pages

- [Manage Power Automate Flows](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/manage-power-automate-flows): Learn to manage Power Automate flows for Business Central online.
- [Power Automate Integration Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview): This article provides an overview of how Power Automate and Business Central integrate.
- [Set up automated workflows](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/automate-workflows): Learn how to give your customers access to automated workflows, so they can run Power Automate flows from inside Business Central online.
- [Set Up Instant Flows](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/instant-flows): Learn how users can run instant flows from inside Business Central online due to the integration with Power Automate.
- [Set Up Power Automate Integration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-setup): Learn how to enable Power Automate for Business Central users.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10010 Add Report Inbox API pages for automated report retrieval](../../../../changes/bcapps/10010.md) (code change): "allowing Power Platform and OData clients to discover and download scheduled report outputs"
- [Debugging Business Event Subscriptions in Business Central](../../../../posts/aardvarklabs-blog/2907.md) (community post): "Business Event Subscriptions page lists all subscriptions, events, and notification URLs"
- [Creating a Low-Cost RFID System with Business Central and Power Automate](../../../../posts/aardvarklabs-blog/3579.md) (community post): "Power Automate acts as middleware between the ESP32 and Business Central"
- [Using Power Automate for Business Central SFTP](../../../../posts/aardvarklabs-blog/3631.md) (community post): "Using Power Automate for Business Central SFTP handles file uploads"
- [What's New: Business Central Integration with Power Platform including Power BI(2024 release wave 2)](../../../../videos/6Zb7VAvLVm4.md) (video): "Job Queue Business Event and Templates; Power Automate New Designer Support"
- [Introducing: Create Power Automate Flows with Copilot (2024 release wave 1)](../../../../videos/T63y0F_38SI.md) (video): "Create Power Automate Flows with Copilot; natural language; automation"
- [What's New: Dataverse & Dynamics 365 App Integration (2023 release wave 2) Part 2](../../../../videos/YTA8c2XyTX4.md) (video): "Business Events via Power Automate; Data Change Events via Power Automate"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
