---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/role-centers
type: topic
title: Role centers
summary: "Role centers in Business Central AL development: how to design a role center page, add navigation menus, build headlines and cues, create onboarding checklists, and a simple code example. It answers how-to questions about building a home page for a user profile."
tier: official
language: en
system: development
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
  input_hash: 725a51c056202e6ed6f91c64464a982f89ee0e907019c6330765c1d9caaebc2c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane
    title: Add Menus to Role Center Navigation
    date: "2026-11-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-role-center-headline
    title: Create a Role Center headline
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-cues-action-tiles
    title: Creating and Customizing Business Central Cues
    date: "2024-07-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist
    title: Get Users Started with the Checklist
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers
    title: Role Center Design in Business Central
    date: "2025-06-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example
    title: Simple Role Center Code Example in AL
    date: "2026-11-05"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-role-center-headline
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-cues-action-tiles
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/69067
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Pages and the user interface
  - Role centers
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 4151a27c0418b7d8bb9d56eb32a4bd6a0743e423b3ad80d2d0e8fa01917c1e29
narrative: generated
---

# Role centers

> Role centers in Business Central AL development: how to design a role center page, add navigation menus, build headlines and cues, create onboarding checklists, and a simple code example. It answers how-to questions about building a home page for a user profile.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Role centers · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

A role center is the home page and entry point for a user profile in Business Central. It combines navigation areas, an action bar, and content parts such as headlines and cues, so users reach the tasks and data relevant to their role quickly.

Start with "Role Center Design in Business Central" for the concepts and the parts a role center is made of. Then "Simple Role Center Code Example in AL" shows a working role center page and profile with cues, actions, and navigation. The remaining pages go deeper on single parts: navigation menus, headlines, cues and action tiles, and the onboarding checklist.

## Key points

- Role center design covers headline parts, data cues, action cues, wide cues, content parts, and navigation menus.
- Navigation menus and actions are added with AL area() controls: Sections, Embedding, Creation, Processing, and Reporting.
- Headlines use HeadlinePart pages with fields whose Expression property uses tags for title, payload, and emphasis; they support drill-down and dynamic visibility.
- Cues show numeric business data, often from flowfields, in normal or wide layouts with drill-down links; action tiles start tasks and can be styled.
- The checklist helps onboard new users with guided experience items, assisted setup, manual setup, tours, and spotlight tours (2021 release wave 1).
- The simple code example creates a role center page and profile with cues, action tiles, navigation actions, and application area configuration.

## Learn pages

- [Add Menus to Role Center Navigation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane): Learn how to add pages, reports, and actions to role center navigation menus, navigation bars, and action areas in Business Central.
  - In the observatory: [Page 143 "Posted Sales Invoices"](../../../../../objects/page/143.md), [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md), [Page 253 "Sales Journal"](../../../../../objects/page/253.md), [Page 424 "Customer Bank Account List"](../../../../../objects/page/424.md), [Page 5119 "Sales Cycles"](../../../../../objects/page/5119.md), [Page 6402 "Sales Document Entity"](../../../../../objects/page/6402.md)
- [Create a Role Center headline](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-role-center-headline): You can provide information and insights as headlines on Role Centers.
- [Creating and Customizing Business Central Cues](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-cues-action-tiles): Learn how to create Business Central cues and action tiles with AL, choose layouts, calculate cue values, and configure tile actions and images.
- [Get Users Started with the Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist): Learn how to customize the checklist that users can launch from the Welcome banner.
  - Checklist serves as onboarding platform where users access tasks by hitting Get started on Home page, revealing guided activities at their own pace.
  - Checklist content comprises setup tasks and learning material with progress indication that changes title and status to nudge users toward completion.
  - Checklist tasks point to pages, objects or external URLs in Business Central, enabling context-aware learning and gradual product exploration.
  - Checklist items reference Guided Experience Item records with types: Assisted Setup, Manual Setup, Learn, Tour, Spotlight Tour, Video, Application Feature.
  - Use Guided Experience codeunit facade functions to insert records: InsertManualSetup, InsertAssistedSetup, InsertLearnLink, InsertTour, InsertSpotlightTour, InsertVideo, InsertApplicationFeature.
  - Spotlight tours suppress other teaching tips and shine bright spotlight on core capabilities like Open in Excel or Share to Teams in sales scenarios.
  - Video type enables users to watch custom URL videos within Business Central window for feature explanation or training purposes.
  - Best practice: keep list to six items or less to avoid scrollbar, keep titles and descriptions short and include task benefits in descriptions.
  - In the observatory: [Table 1990 "Guided Experience Item"](../../../../../objects/table/1990.md), [Table 1991 "Checklist Item"](../../../../../objects/table/1991.md), [Table 1992 "Checklist Item Role"](../../../../../objects/table/1992.md), [Table 1993 "Checklist Item User"](../../../../../objects/table/1993.md)
- [Role Center Design in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers): Learn how to design Business Central role centers with navigation, actions, and page parts that help users focus on their daily tasks.
- [Simple Role Center Code Example in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example): Build a simple Business Central role center in AL with headline and cue parts, navigation actions, and a profile that references the page.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central Blog Series: Customize the Role Center](../../../../../posts/yzhums-com/69067.md) (community post): "Covers the error you get when adding an OnAction trigger to a Role Center page"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
