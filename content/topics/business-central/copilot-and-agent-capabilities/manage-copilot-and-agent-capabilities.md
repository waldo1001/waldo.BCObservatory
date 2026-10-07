---
id: topic/business-central/copilot-and-agent-capabilities/manage-copilot-and-agent-capabilities
type: topic
title: Manage Copilot and agent capabilities
summary: "Administration of Copilot and agent capabilities in Business Central: the Copilot & agent capabilities page, feature activation, user permissions, cross-geography data movement, Bing Search, Azure OpenAI data handling, and troubleshooting. It answers questions on configuring, controlling and fixing these features."
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-06T12:48:04.649Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b02707a957dfb597ea401f089456b3fb943db49308f0a787297bbfb007a8c45c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/azure-openai-data
    title: Azure OpenAI Service and Business Central data
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ai-search-web-copilot
    title: Bing Search for Copilot features in Business Central (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/enable-ai
    title: Configure Copilot and agent capabilities
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ai-copilot-data-movement
    title: Data movement across geographies for Business Central Copilot and agent capabilities
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ai-copilot-troubleshooting
    title: Troubleshoot Copilot and agent capabilities
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/azure-openai-data
    - https://learn.microsoft.com/dynamics365/business-central/ai-search-web-copilot
    - https://learn.microsoft.com/dynamics365/business-central/enable-ai
    - https://learn.microsoft.com/dynamics365/business-central/ai-copilot-data-movement
    - https://learn.microsoft.com/dynamics365/business-central/ai-copilot-troubleshooting
  objects:
    - object/page/7771
    - object/page/7772
    - object/page/7775
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/9esVS6I4wrY
    - video/BrMKx3wqYac
    - video/nnCLAqEM0Bs
    - video/UQmuMPRlHek
  posts:
    - post/demiliani-com/13563
    - post/demiliani-com/15935
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-45-hide-agents-icon--83847372e0
  guidelines: []
learn_toc_path:
  - Copilot and agent capabilities
  - Manage Copilot and agent capabilities
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 5
  code: 3
  video: 4
  blog: 3
  guideline: 0
bc_forms:
  - 7771
  - 7772
  - 7775
member_hash: 8b521b33df12495a755dae19a349b2cc15d682d07ecae7bcc14cde515694d884
narrative: generated
---

# Manage Copilot and agent capabilities

> Administration of Copilot and agent capabilities in Business Central: the Copilot & agent capabilities page, feature activation, user permissions, cross-geography data movement, Bing Search, Azure OpenAI data handling, and troubleshooting. It answers questions on configuring, controlling and fixing these features.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Manage Copilot and agent capabilities · tier official · system copilot · narrative reviewed by Opus

## Overview

This section is for administrators who control how Copilot and agent capabilities behave in Business Central. The central page is "Configure Copilot and agent capabilities". It describes the Copilot & agent capabilities page, where you turn features on or off, manage user access through permissions, set feedback controls, select the agent model, and manage data movement and Bing Search.

Three pages go deeper on specific topics. One covers data movement across geographies and the Allow data movement setting. One covers the Bing Search setting, which is in preview. One explains how Azure OpenAI Service handles prompts and business data. The troubleshooting page covers common problems such as Copilot not appearing or activation errors.

Start with the configuration page. Then read the data movement and Azure OpenAI pages if compliance or data residency questions come up. Use the troubleshooting page when a feature is missing or will not activate.

## Key points

- The Copilot & agent capabilities page is where administrators activate or deactivate features, manage user permissions, control feedback, and choose the agent model.
- Data movement across geographies applies when Azure OpenAI Service is in a different geography than the Business Central environment. Consent is managed with the Allow data movement setting.
- The data movement page also covers EU Data Boundary compliance and data residency commitments.
- Azure OpenAI Service processes prompts and business data per request, isolated between users. Data is stored up to 24 hours for abuse monitoring and never used for model training.
- Bing Search (preview) is controlled by the Enable Bing Search setting. It applies to Chat with Copilot and Autofill with Copilot from update 26.3 (sandbox) and 27.0 (production).
- Troubleshooting covers Copilot not appearing on pages, activation errors, and missing Microsoft AI features when embed apps are installed.
- Troubleshooting checks include personalization settings, the privacy notice agreement, and Feature Management.

## Learn pages

- [Azure OpenAI Service and Business Central data](https://learn.microsoft.com/dynamics365/business-central/azure-openai-data): Understand how Azure OpenAI Service processes Business Central data when using Copilot. Learn security, privacy, and compliance aspects.
- [Bing Search for Copilot features in Business Central (preview)](https://learn.microsoft.com/dynamics365/business-central/ai-search-web-copilot): Learn which Business Central Copilot features use Bing Search and how administrators enable the integration.
- [Configure Copilot and agent capabilities](https://learn.microsoft.com/dynamics365/business-central/enable-ai): Learn how to control Copilot and agent features in Business Central, including deactivation, user access, and data governance controls.
- [Data movement across geographies for Business Central Copilot and agent capabilities](https://learn.microsoft.com/dynamics365/business-central/ai-copilot-data-movement): Learn how data that's used in copilot features in Dynamics 365 Business Central moves across geographies where Azure OpenAI Service isn't available by default.
- [Troubleshoot Copilot and agent capabilities](https://learn.microsoft.com/dynamics365/business-central/ai-copilot-troubleshooting): Learn how to fix common issues that you might encounter while working with Copilot and agent capabilities in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central: how many Copilot Credits my Agent consumes?](../../../posts/demiliani-com/13563.md) (community post): "Users can monitor credit consumption directly in Business Central through the Agent page"
- [Dynamics 365 Business Central (and friends): where does your Copilot prompt go?](../../../posts/demiliani-com/15935.md) (community post): "The Allow data movement toggle appears only when Business Central environment location differs from Copilot processing geography"
- [BC Friday Tips #45 Hide Agents Icon](../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-45-hide-agents-icon--83847372e0.md) (community post): "hide this icon by deactivating Agents in Copilot & agent capabilities"
- [Getting Started With Agents: Billing Agents in Business Central - Configure "Pay as You Go" (2025)](../../../videos/9esVS6I4wrY.md) (video): "Pay-as-you-go billing for agents; Agent consumption monitoring"
- [Introducing: AI Consumption Billing for Business Central (2025 release wave 1)](../../../videos/BrMKx3wqYac.md) (video): "ai consumption billing; sales order agent; copilot studio messages"
- [What's New: Understanding Copilot Credit Consumptions for Your Business Central Agent](../../../videos/nnCLAqEM0Bs.md) (video): "Understanding Copilot Credit Consumptions for Your Business Central Agent; copilot credits; consumption monitoring; agent tasks"
- [What's New: Setting Up Copilot in Business Central - Tips for Admins (2024 release wave 2)](../../../videos/UQmuMPRlHek.md) (video): "Setting Up Copilot in Business Central; copilot setup; ai capabilities"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 7771 "Copilot Not Available"](../../../objects/page/7771.md)
- [Page 7772 "Copilot Deactivate Capability"](../../../objects/page/7772.md)
- [Page 7775 "Copilot AI Capabilities"](../../../objects/page/7775.md) · captioned "Copilot & agent capabilities"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
