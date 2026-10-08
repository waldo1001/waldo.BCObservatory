---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/views
type: topic
title: Views
summary: "Views on Business Central list pages in AL: how to define alternative filtered, sorted and laid-out views, migrate legacy Role Center views to modern list views, and export and package analysis views in extensions. It answers questions about defining, migrating and distributing views."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:24.168Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c513b27cccf00fdcaf6007d27b61029786da3dad5751a241cc7abd730eee7066
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-analysis-view-package
    title: Export and package analysis views
    date: "2026-02-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy
    title: Migrating to modern list views
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views
    title: Views
    date: "2024-01-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-analysis-view-package
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views
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
  - Views
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 2abf969656796ef2fd980cebc3dbaee582b1bb985ccc495420aeaa6458d8ab28
narrative: generated
---

# Views

> Views on Business Central list pages in AL: how to define alternative filtered, sorted and laid-out views, migrate legacy Role Center views to modern list views, and export and package analysis views in extensions. It answers questions about defining, migrating and distributing views.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Views · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Views let a list page offer alternative ways of looking at its data, with their own filtering, sorting and layout changes. They can be defined on pages, page extensions and page customization objects. The Views page is the starting point for the concepts, including shared and custom layouts.

Modern list views replace the legacy views that were created on Role Center pages. The migration page explains how this gives a better user experience, personalization and consistency across navigation methods, and covers view composition, filters, sorting and column layout per view.

Analysis views are a separate topic. You can export an analysis view definition from the client in analysis mode and package it in an AL extension so it can be distributed with an app.

## Key points

- Views on list pages define alternative data views through filtering, sorting and layout changes.
- Views can be defined on pages, page extensions and page customization objects.
- Layouts can be shared or custom per view.
- Modern views replace legacy views created on Role Center pages.
- Migration to modern list views references 2022 release wave 2 and 2024 release wave 1 (versions 21 and 24).
- Each modern view can have its own filters, sorting and column layout.
- Analysis views are exported from the client in analysis mode as a JSON definition.
- Exported analysis views are packaged with the analysisviews construct and the DefinitionFile property, and can be locked.

## Learn pages

- [Export and package analysis views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-analysis-view-package): Learn how to export analysis views from Analysis Mode and package them as part of AL extensions in Business Central.
- [Migrating to modern list views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy): Explains how to move from legacy views to modern list views in Business Central.
- [Views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views): Description of what views are and how they're defined in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
