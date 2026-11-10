---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/actions
type: topic
title: Actions
summary: "Actions in Business Central AL pages: how to add, organize and promote actions, the action bar (split buttons, Home tab, legacy toggle), actionref syntax, common promoted groups, and prompt actions for Copilot. Answers questions on action design and placement rules."
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
  input_hash: 23629b03fb936640c1664dc7b9ce2ffddace8ad23a047e92e1073e06f3d5acd9
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview
    title: Page Actions Overview in Business Central
    date: "2025-05-15"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-actions-to-a-page
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions-behavioral-changes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-common-promoted-action-groups
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-organizing-promoted-actions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-pages-action-bar-improvements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/56521
    - post/yzhums-com/62513
    - post/yzhums-com/64155
  guidelines: []
  changes:
    - change/bcapps/10979
    - change/bcquality/207
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
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 6040fdb53303e6be71482e6d4a51ec85423a87274a55ffd2b1d830e3ec669f89
narrative: generated
---

# Actions

> Actions in Business Central AL pages: how to add, organize and promote actions, the action bar (split buttons, Home tab, legacy toggle), actionref syntax, common promoted groups, and prompt actions for Copilot. Answers questions on action design and placement rules.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Actions · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

Actions are the commands users run from a page. This section explains how to define them in AL (action areas, groups, icons, keyboard shortcuts, the RunObject property) and how they are laid out in menus such as Actions, Creation, Navigation and Reports. It also covers Power Automate flow integration.

Promoted actions are the main theme. Pages cover the actionref syntax and split buttons, the legacy category syntax and migration between the two, the behavioral changes in 2022 release wave 2 (visibility inheritance, group merging, recursive group rendering), and design guidance: promote only frequently used actions, vary by page type, and use subgroups beyond 7 actions. A page on common promoted groups (Home/Process, Entity, Approve, Entry, and others) gives standard patterns.

Two release-specific pages complete the area: the modern action bar became the default in 2024 release wave 1 with a legacy option, and prompt actions in a floating action bar launch Copilot PromptDialog pages. Start with "Page Actions Overview" and "Adding actions to a page", then read "Promoted actions" and "Organizing Promoted Actions".

## Key points

- Actions can be placed in the Actions (processing), Creation, Navigation and Reports menus; the RunObject property, icons and keyboard shortcuts are set when adding them.
- Promoted actions use actionref syntax with split button groups; the legacy PromotedCategory syntax is still supported and can be migrated gradually.
- 2022 release wave 2 changed promoted action behavior: new actionref syntax, different visibility inheritance, recursive group rendering and group merging.
- Guidance: promote only frequently used actions, tailor by page type, and use subgroups when there are more than 7 actions.
- Common promoted groups include Home/Process, Entity, Approve, Entry, Incoming Document and Item Availability by.
- In 2024 release wave 1 the modern action bar is default, with split buttons, a pinned Home tab and a toggle for the legacy action bar.
- A page lists the pages updated with action bar improvements in 2022 release wave 2 (version 21.0).
- Prompt actions with the Sparkle image launch Copilot PromptDialog pages from List, Card, Document, ListPart, StandardDialog, ListPlus and Worksheet pages (runtime 13 and 14 noted).

## Learn pages

- [Action bar improvements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-action-bar-improvements): Introducing the modern action bar in Dynamics 365 Business Central.
- [Actions in the user interface](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-user-interface): Learn about the guidelines for organizing actions when creating, extending, and customizing pages in Business Central.
- [Adding actions to a page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-actions-to-a-page): Create and display actions in the ribbon of all pages and group them together under Actions, Navigate, Reports tabs and preview it in the Windows Client.
- [Behavioral Changes for Promoted Actions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions-behavioral-changes): The promoted action framework has been redesigned with Dynamics 365 Business Central 2022 release wave 2.
- [Common Promoted Action Groups](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-common-promoted-action-groups): Learn about the common promoted action groups in Business Central, their characteristics, and how to use them.
- [Organizing Promoted Actions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-organizing-promoted-actions): Guidelines for which actions to promote in the action bar for Dynamics 365 Business Central
- [Page Actions Overview in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actions-overview): Learn how to organize Business Central page actions into menus and groups so that users can find tasks, open pages, and run reports or flows.
- [Pages with Action Bar Improvements](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-pages-action-bar-improvements): Overview of pages in Dynamics 365 Business Central that contain the action bar improvements
- [Promoted actions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-promoted-actions): Promoted actions are configured to display on the Home tab for accessing quick daily actions in Dynamics 365 Business Central.
- [Prompting using a floating action bar](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar): Learn how to create prompt actions to promote AI capabilities in Business Central

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10979 [Master] Promote Excise Taxes action on Item card](../../../../../changes/bcapps/10979.md) (code change): "Excise Taxes action is now more prominent on the Item Card"
- [#207 2 AL/BC UI patterns: client-expression in-list (AL0573) and Role Center AccessByPermission](../../../../../changes/bcquality/207.md) (code change): "in-list set-membership tests in client expressions such as Visible or Enabled on actions"
- [Dynamics 365 Business Central: How to hide/disable New, Edit (Edit List), and Delete actions on the page](../../../../../posts/yzhums-com/56521.md) (community post): "hide or disable the New, Edit and Delete actions"
- [Business Central 2025 wave 1 (BC26): Running objects in actions defaults to UI descriptors on target object](../../../../../posts/yzhums-com/62513.md) (community post): "Running objects in actions defaults to UI descriptors on target object"
- [Dynamics 365 Business Central: Overview of all available action (button) icons/images](../../../../../posts/yzhums-com/64155.md) (community post): "Icons are added to actions using the Image property in AL code"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
