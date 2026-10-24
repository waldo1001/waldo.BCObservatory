---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/role-centers
type: topic
title: Role centers
summary: "Role centers in AL: how to design role-tailored home pages, add navigation menus, build cues and headlines, and set up a user onboarding checklist. It answers questions about structuring a Role Center page and its parts, with a simple code example."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.963Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9abae9238523853ef7310dcfe9471429aaf96ef888e165c49febafbfb52e5ea5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane
    title: Add Menus to Role Center Navigation
    date: "2026-10-06"
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
    title: Creating and Customizing Cues
    date: "2024-07-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers
    title: Designing Role Centers
    date: "2025-06-21"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example
    title: Simple Role Center Code Example in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-role-center-headline
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-cues-action-tiles
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
  localizations: []
  videos: []
  posts: []
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4151a27c0418b7d8bb9d56eb32a4bd6a0743e423b3ad80d2d0e8fa01917c1e29
narrative: generated
---

# Role centers

> Role centers in AL: how to design role-tailored home pages, add navigation menus, build cues and headlines, and set up a user onboarding checklist. It answers questions about structuring a Role Center page and its parts, with a simple code example.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Role centers · tier official · system development · narrative reviewed (checked by Opus)

## Overview

A Role Center is the role-tailored home page in Business Central. It combines navigation, an action bar, and a content area holding parts such as cues and headlines. The section starts with a design overview that also covers performance (page background tasks) and mobile considerations.

The other pages each cover one building block. One page shows how to use area() controls to define navigation menus, navigation bar links, and the Creation, Processing and Reporting action areas. Another covers Cues and Action tiles, built from a Cue table and a CardPart page with a cuegroup control. A third covers headlines, built on HeadlinePart pages with the Expression property. A further page covers the onboarding checklist, with guided experience items, assisted setup, and tours.

Start with Designing Role Centers for the concepts, then read the simple AL code example to see a full Role Center page with sections, embedding, and action areas. Use the menu, cue, headline and checklist pages as needed to extend it.

## Key points

- Designing Role Centers covers navigation menus, action bar, content area, cues, headlines, and page background tasks, plus performance and mobile considerations (2021 release wave 1).
- Navigation is defined with area() controls: navigation menu sections, navigation bar links, and action areas for Creation, Processing and Reporting.
- Menus can group pages, reports and codeunits, using page groups and submenus.
- Cues are designed on a Cue table with FlowField or Normal fields, shown through a CardPart page with a cuegroup control; wide layout and Action tiles are supported.
- Headlines use HeadlinePart pages with fields that rotate text via the Expression property, using tags for title, payload and emphasis; they support drill-down and dynamic visibility.
- The checklist helps onboard users with guided experience items: assisted setup, manual setup, tours and spotlight tours (2021 release wave 1).
- A simple AL example shows a custom Role Center with a posted invoices section, embedded sales and service actions, and processing, creation and reporting actions.

## Learn pages

- [Add Menus to Role Center Navigation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane): Learn how to add pages, reports, and actions to Role Center navigation menus, navigation bars, and action areas in Business Central.
  - In the observatory: [Page 143 "Posted Sales Invoices"](../../../../../objects/page/143.md), [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md), [Page 253 "Sales Journal"](../../../../../objects/page/253.md), [Page 424 "Customer Bank Account List"](../../../../../objects/page/424.md), [Page 5119 "Sales Cycles"](../../../../../objects/page/5119.md), [Page 6402 "Sales Document Entity"](../../../../../objects/page/6402.md)
- [Create a Role Center headline](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-role-center-headline): You can provide information and insights as headlines on Role Centers.
- [Creating and Customizing Cues](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-cues-action-tiles): Get an overview of cues and action tiles and the tasks involved in customizing them on Role Centers.
  - In the observatory: [Page 43 "Sales Invoice"](../../../../../objects/page/43.md)
- [Designing Role Centers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers): Learn how to create user-focused home pages called role centers that boost productivity and streamline navigation.
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
- [Simple Role Center Code Example in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example): Learn from a complete AL code example that builds a simple Role Center page and a profile that assigns the Role Center to users in Business Central.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
