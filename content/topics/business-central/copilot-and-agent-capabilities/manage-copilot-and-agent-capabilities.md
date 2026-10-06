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
  at: "2026-10-06T12:48:04.649Z"
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
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Copilot and agent capabilities
  - Manage Copilot and agent capabilities
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
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

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 7771, 7772, 7775.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
