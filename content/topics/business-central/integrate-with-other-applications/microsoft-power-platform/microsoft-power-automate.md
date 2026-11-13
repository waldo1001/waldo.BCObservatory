---
id: topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-automate
type: topic
title: Microsoft Power Automate
summary: "Power Automate integration with Business Central: building automated and instant flows with the Business Central connector, using flows in the client, and troubleshooting failed runs, response size limits and missing web services."
tier: official
language: en
system: integration
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
  input_hash: cb6e1d18920e25486d0872e126162d2272cf0759a05ec74e87ec54003aa96e06
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    title: Power Automate Integration Overview
    date: "2025-08-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot
    title: Troubleshoot Business Central Power Automate Workflows
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow
    title: Use Power Automate flows in Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    - https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow
  objects:
    - object/page/1500
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-power-platform
  localizations: []
  videos:
    - video/EVntnDFE1R4
    - video/T63y0F_38SI
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Power Platform
  - Microsoft Power Automate
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-power-platform
children: []
coverage:
  learn: 3
  code: 1
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 1500
member_hash: 0507adde4f3afd8a19987abfc594f37db4ca42271a73be551ac43fe2b0858998
narrative: generated
---

# Microsoft Power Automate

> Power Automate integration with Business Central: building automated and instant flows with the Business Central connector, using flows in the client, and troubleshooting failed runs, response size limits and missing web services.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Power Platform](../microsoft-power-platform.md) > Microsoft Power Automate · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

Power Automate adds no code/low code workflows to Business Central. Flows connect Business Central to cloud services through the Business Central connector, using triggers (such as record creation or changes) and actions to carry out business tasks.

The section has three pages. The integration overview explains the basics: automated flows started by events and instant flows started manually by a user. The page on using flows in Business Central describes the flow types available (automated, approval, scheduled and instant) and how event-triggered workflows work. The troubleshooting page covers what to check when a flow does not run as expected.

Start with the overview to understand the concepts, then read the usage page to pick a flow type. Use the troubleshooting page when flows fail, responses are too large, or a required web service is not published.

## Key points

- Power Automate gives no code/low code workflows that connect Business Central to cloud services.
- Automated flows run on events such as record creation or changes; instant flows are triggered manually by a user.
- Flow types named in the usage page: automated, approval, scheduled and instant.
- Flows use the Business Central connector with triggers and actions.
- Troubleshooting covers flow execution failures, response size limits and missing web service configuration.
- Troubleshooting also touches webhook and collection notifications, approval triggers and web service publishing.

## Learn pages

- [Power Automate Integration Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview): This article provides an overview of how Power Automate and Business Central integrate.
- [Troubleshoot Business Central Power Automate Workflows](https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot): Learn how to troubleshoot the connection between Business Central and Power Automate when you build an automated workflow.
  - In the observatory: [Codeunit 1544 "Workflow Webhook Subscription"](../../../../objects/codeunit/1544.md), [Page 6403 "Sales Document Line Entity"](../../../../objects/page/6403.md), [Page 6405 "Purchase Document Line Entity"](../../../../objects/page/6405.md)
- [Use Power Automate flows in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow): Use Power Automate flows to create, edit, and manage business processes. Boost productivity with easy automation.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Business Central Integration with Power Platform (2023 release wave 2)](../../../../videos/EVntnDFE1R4.md) (video): "Approval Workflow Templates in Power Automate; Automated Flow Templates Based on Business Events"
- [Introducing: Create Power Automate Flows with Copilot (2024 release wave 1)](../../../../videos/T63y0F_38SI.md) (video): "power automate; copilot; flow creation; natural language; power platform integration"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1500 "Workflows"](../../../../objects/page/1500.md) · on [Table 1500 "Workflow Buffer"](../../../../objects/table/1500.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
