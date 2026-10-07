---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-teams/tabs
type: topic
title: Tabs
summary: "Business Central tabs in Microsoft Teams: how to create them programmatically in channels and chats through the Microsoft Graph API, and how to customize the recommended list pages shown when users configure a tab. It answers setup and customization questions for developers."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:38.364Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c58641070da5aca0f5ea868729022bca4e7edfa19efa838ff340e3e61b5edc33
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-tab-content
    title: Add and remove recommended content for Business Central tabs
    date: "2023-12-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-tabs
    title: Create Business Central tabs for Teams
    date: "2023-12-28"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-tab-content
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-tabs
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-teams
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating Business Central with Office apps and Microsoft 365
  - Integrating with Microsoft Teams
  - Tabs
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-teams
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 8af6fecaab746cf5403737148d8cfb00b0ecf938195e36cf9d8edd184393bf09
narrative: generated
---

# Tabs

> Business Central tabs in Microsoft Teams: how to create them programmatically in channels and chats through the Microsoft Graph API, and how to customize the recommended list pages shown when users configure a tab. It answers setup and customization questions for developers.

Path: [Integration](../../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../../integrating-business-central-with-office.md) > [Integrating with Microsoft Teams](../integrating-with-microsoft-teams.md) > Tabs · tier official · system integration · narrative reviewed by Opus

## Overview

This section covers two tasks for Business Central tabs in Teams. One is creating tabs in code. The other is controlling which pages Business Central recommends to users when they set up a tab.

Tab creation uses the Microsoft Graph API. You send POST requests to the channel tab or chat tab endpoints, with proper authentication and the Business Central app ID. Recommended content is changed by subscribing to the OnAfterGetPageActions event, which lets you add or remove the list pages offered during tab configuration.

Start with the page on creating tabs if you want to automate tab deployment to channels or chats. Go to the recommended content page if you want to shape what users see when they pick a page for a tab.

## Key points

- Business Central tabs can be added to Teams channels and chats programmatically through the Microsoft Graph API.
- Creating a tab requires a POST request to the channel or chat tab endpoint.
- Requests need proper authentication and the Business Central app ID.
- Recommended content is customized by subscribing to the OnAfterGetPageActions event.
- The OnAfterGetPageActions event can add or remove list pages shown to users when they configure a tab.
- The section has two pages: one on creating tabs and one on recommended content.

## Learn pages

- [Add and remove recommended content for Business Central tabs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-tab-content): Learn how to add or remove pages listed as recommended content in the Business Central tab configuration window.
- [Create Business Central tabs for Teams](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-tabs): Learn how to use the Graph API to programmatically add a Business Central tab in a Teams channel or chaT.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
