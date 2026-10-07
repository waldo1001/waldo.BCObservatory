---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/actions
type: topic
title: Actions
summary: "Actions in Business Central AL pages: how to add, organize and promote actions, the modern action bar with split buttons, common promoted action groups, and prompt actions that launch Copilot. Answers questions on actionref syntax, action areas, placement guidelines and release-wave behavior changes."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:18.859Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0ffb401f134b2bfc8d059d163be545b2bf545dad23fa8498453553a4a01b8b70
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-action-bar-improvements
    title: Action bar improvements
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-user-interface
    title: Actions in the user interface
    date: "2025-01-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview
    title: Actions overview
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-actions-to-a-page
    title: Adding actions to a page
    date: "2025-11-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions-behavioral-changes
    title: Behavioral Changes for Promoted Actions
    date: "2022-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-common-promoted-action-groups
    title: Common Promoted Action Groups
    date: "2022-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-organizing-promoted-actions
    title: Organizing Promoted Actions
    date: "2022-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-pages-action-bar-improvements
    title: Pages with Action Bar Improvements
    date: "2022-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions
    title: Promoted actions
    date: "2024-07-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar
    title: Prompting using a floating action bar
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-action-bar-improvements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-user-interface
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-actions-to-a-page
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions-behavioral-changes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-common-promoted-action-groups
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-organizing-promoted-actions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-pages-action-bar-improvements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10979
learn_toc_path:
  - Development
  - Programming in the AL language
  - Pages and the user interface
  - Actions
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6040fdb53303e6be71482e6d4a51ec85423a87274a55ffd2b1d830e3ec669f89
narrative: generated
---

# Actions

> Actions in Business Central AL pages: how to add, organize and promote actions, the modern action bar with split buttons, common promoted action groups, and prompt actions that launch Copilot. Answers questions on actionref syntax, action areas, placement guidelines and release-wave behavior changes.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Actions · tier official · system development · narrative reviewed by Opus

## Overview

Actions are the commands users run from Business Central pages. This section explains how to define them in AL, place them in action areas and menus (Actions, New Document, Navigate, Report), and promote frequently used ones to the action bar. It also covers icons, keyboard shortcuts, the RunObject property and Power Automate flow integration.

The pages split into three groups. Basics: Actions overview, Adding actions to a page and Actions in the user interface (page-level and part-level actions, placement, split buttons). Promoted actions: Promoted actions, Organizing Promoted Actions, Common Promoted Action Groups and Behavioral Changes for Promoted Actions, which cover actionref syntax, legacy category syntax, grouping and visibility rules. Action bar changes: Action bar improvements, Pages with Action Bar Improvements, and Prompting using a floating action bar for Copilot prompt actions.

Start with Actions overview and Adding actions to a page. Then read Promoted actions and Organizing Promoted Actions. Check the behavioral changes page if you are migrating older code or see differences in visibility or personalization.

## Key points

- Actions are placed in areas and menus such as Actions, New Document, Navigate and Report, and can be grouped, given icons and keyboard shortcuts, and use RunObject.
- Promoted actions use actionref syntax with split button groups; the legacy PromotedCategory syntax is still supported, with gradual migration between styles.
- 2022 release wave 2 changed promoted action behavior: new actionref syntax, better personalization, different visibility inheritance and recursive group rendering.
- Promote only frequently used actions, organize by page type and user needs, and use subgroups when there are more than 7 actions.
- Common promoted groups give standard patterns, such as Home/Process, Posting, Release, Approve, Entry, and Report.
- In 2024 release wave 1 the modern action bar is default, with split buttons, a pinned Home tab, and a toggle for the legacy action bar.
- A list of pages updated with action bar improvements in 2022 release wave 2 (version 21.0) covers card, list, document and worksheet pages.
- Prompt actions launch Copilot PromptDialog pages from List, Card, Document, ListPart, StandardDialog, ListPlus and Worksheet pages, using a Sparkle image and capability registration (2024 release wave 1, runtime 13 and 14).

## Learn pages

- [Action bar improvements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-action-bar-improvements): Introducing the modern action bar in Dynamics 365 Business Central.
- [Actions in the user interface](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-user-interface): Learn about the guidelines for organizing actions when creating, extending, and customizing pages in Business Central.
- [Actions overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview): Learn more about displaying actions on the action bar for pages in Business Central.
- [Adding actions to a page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-actions-to-a-page): Create and display actions in the ribbon of all pages and group them together under Actions, Navigate, Reports tabs and preview it in the Windows Client.
- [Behavioral Changes for Promoted Actions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions-behavioral-changes): The promoted action framework has been redesigned with Dynamics 365 Business Central 2022 release wave 2.
- [Common Promoted Action Groups](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-common-promoted-action-groups): Learn about the common promoted action groups in Business Central, their characteristics, and how to use them.
- [Organizing Promoted Actions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-organizing-promoted-actions): Guidelines for which actions to promote in the action bar for Dynamics 365 Business Central
- [Pages with Action Bar Improvements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-pages-action-bar-improvements): Overview of pages in Dynamics 365 Business Central that contain the action bar improvements
- [Promoted actions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions): Promoted actions are configured to display on the Home tab for accessing quick daily actions in Dynamics 365 Business Central.
- [Prompting using a floating action bar](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar): Learn how to create prompt actions to promote AI capabilities in Business Central

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10979 [Master] Promote Excise Taxes action on Item card](../../../../../changes/bcapps/10979.md) (code change): "Excise Taxes action is now more prominent on the Item Card"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
