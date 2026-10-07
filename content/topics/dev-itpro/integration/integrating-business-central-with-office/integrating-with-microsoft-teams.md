---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-teams
type: topic
title: Integrating with Microsoft Teams
summary: Integration of Business Central with Microsoft Teams, aimed at AL developers. It covers Teams cards, card details and tabs, customizing cards with the Brick field group and AL events, detecting Teams sessions, and FAQs on link unfurling, stage view, licensing and permissions.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:36.352Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 583c693863511cf7abc74110ae0fcf6e384e6166cc9d80d48334314fa800a3f7
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams
    title: Developing for Microsoft Teams Integration
    date: "2022-11-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-cards
    title: Developing for Microsoft Teams Using Metadata
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq-teams
    title: Frequently asked questions about Microsoft Teams integration with Business Central
    date: "2022-11-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-check-session
    title: Get session and environment information relevant to Teams development
    date: "2023-12-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-cards
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq-teams
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-check-session
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-business-central-with-office
    - topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-teams/tabs
  localizations: []
  videos:
    - video/_OClSlushOU
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating Business Central with Office apps and Microsoft 365
  - Integrating with Microsoft Teams
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-business-central-with-office
children:
  - topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-teams/tabs
coverage:
  learn: 6
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 046db4ac1675927d209c40e73faacdc542a406d6ea64db390f462ed3136a9f27
narrative: generated
---

# Integrating with Microsoft Teams

> Integration of Business Central with Microsoft Teams, aimed at AL developers. It covers Teams cards, card details and tabs, customizing cards with the Brick field group and AL events, detecting Teams sessions, and FAQs on link unfurling, stage view, licensing and permissions.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Teams · tier official · system integration · narrative reviewed by Opus

## Overview

This section explains how Business Central works inside Microsoft Teams and how to develop for it. The main development page introduces the building blocks: Teams cards, card details, Business Central tabs, the Brick field group, Teams-specific AL events and Graph API integration.

The other pages go deeper. One covers customizing which fields appear on cards shared in Teams, using field groups or event subscribers. Another shows how to get session and environment information, such as whether code runs in a Teams context. The FAQ covers link unfurling, stage view, licensing and permissions. The Tabs subtopic covers creating tabs programmatically through the Microsoft Graph API and customizing the recommended list pages.

Start with the development overview to see the pieces, then move to the metadata page for card customization or the Tabs subtopic for tab setup. Use the FAQ for licensing and permission questions.

## Key points

- Teams cards show Business Central records shared in Teams; the FAQ describes the link unfurling technology and adaptive cards behind them.
- The platform automatically selects card fields from the Brick field group, the Dropdown field group, or primary key fields.
- Cards can be customized with the Brick field group or with the OnBeforeGetPageSummary and OnAfterGetSummaryFields events; media fields are also covered.
- Business Central tabs can be created programmatically in channels and chats through the Microsoft Graph API.
- The recommended list pages shown when users configure a tab can be customized.
- Code can check CurrentClientType to know if it runs in Teams, and can detect Microsoft 365 license usage and whether M365 collaboration is enabled.
- The FAQ covers stage view, licensing requirements and permissions for cards and tabs.

## Subtopics

- [Tabs](integrating-with-microsoft-teams/tabs.md) (2 pages)

## More Learn pages

- [Developing for Microsoft Teams Integration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams): Provides an introduction to developing pages for Microsoft Teams integration.
- [Developing for Microsoft Teams Using Metadata](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-cards): Explains how to use metadata to add custom fields to a Business Central card in Teams
- [Frequently asked questions about Microsoft Teams integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-dev-faq-teams): Answers to typical questions about Teams and Business Central
- [Get session and environment information relevant to Teams development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-for-teams-check-session): Learn about AL code for getting session information that you cn use to influence runtime behavior of a Business Central card or tab in Teams.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Work Seamlessly with Microsoft Outlook, Excel, and Teams](../../../../videos/_OClSlushOU.md) (video): "Work Seamlessly with Microsoft Outlook, Excel, and Teams integration"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
