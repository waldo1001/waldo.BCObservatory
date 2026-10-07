---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/role-centers
type: topic
title: Role centers
summary: "Role centers in AL: how to design role-tailored home pages with navigation menus, cues, action tiles, and headlines, plus a simple code example and a user onboarding checklist. It answers questions about building and customizing Role Center pages and their parts."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:18.489Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c9fd27854df44fd36b65f13e5c78c931171412bb6aa02a21cd8bed13b35a2a8c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane
    title: Adding Menus to the Navigation Area
    date: "2022-08-08"
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

> Role centers in AL: how to design role-tailored home pages with navigation menus, cues, action tiles, and headlines, plus a simple code example and a user onboarding checklist. It answers questions about building and customizing Role Center pages and their parts.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Role centers · tier official · system development · narrative reviewed by Opus

## Overview

A Role Center is the home page tailored to a user profile. It combines a navigation area, an action bar, and a content area with parts such as cues and headlines. The pages here cover each of those pieces and how to build them in AL.

Start with "Designing Role Centers" for the overall structure, performance optimization with page background tasks, and mobile considerations. "Simple Role Center Code Example in AL" then shows a working page with sections, embedding, and processing, creation, and reporting action areas.

The other pages go into specific parts. "Adding Menus to the Navigation Area" covers the navigation menu, navigation bar, and actions on Role Centers and page extensions. "Creating and Customizing Cues" covers Cue tables, CardPart pages, and action tiles. "Create a Role Center headline" covers HeadlinePart pages. "Get Users Started with the Checklist" covers onboarding with guided experience items, assisted setup, and tours.

## Key points

- Navigation menus, the navigation bar, and actions are defined with area() and action() controls in AL, on Role Centers and page extensions, with support for submenus.
- Cues are based on a Cue table with FlowField or normal fields, shown through CardPart pages using cuegroup controls, with an optional wide layout.
- Action tiles can be added to cue groups to start operations from the Role Center.
- Headlines use the HeadlinePart page type, with fields whose Expression property uses tags for title, payload, and emphasis to show rotating text.
- Headlines support drill-down, interactive behavior, and dynamic visibility.
- Designing Role Centers covers the content area, performance (page background tasks), and mobile considerations (2021 release wave 1).
- The checklist onboards users with guided experience items, assisted setup, manual setup, tours, and spotlight tours (2021 release wave 1).
- A simple AL example shows a custom Role Center with a posted invoices section, embedded sales and services actions, and processing, creation, and reporting action areas.

## Learn pages

- [Adding Menus to the Navigation Area](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-menus-to-navigation-pane): Enable users to quickly navigate and perform actions by adding the menu items to the navigation area.
- [Create a Role Center headline](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-create-role-center-headline): You can provide information and insights as headlines on Role Centers.
- [Creating and Customizing Cues](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-cues-action-tiles): Get an overview of cues and action tiles and the tasks involved in customizing them on Role Centers.
- [Designing Role Centers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-role-centers): Learn how to create user-focused home pages called role centers that boost productivity and streamline navigation.
- [Get Users Started with the Checklist](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-checklist): Learn how to customize the checklist that users can launch from the Welcome banner.
- [Simple Role Center Code Example in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-simple-role-center-example): Learn from a complete AL code example that builds a simple Role Center page and a profile that assigns the Role Center to users in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
