---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/views
type: topic
title: Views
summary: "Views in Business Central AL development: how list page views define alternative filtering, sorting and layout, how to package analysis views in extensions, and how to migrate legacy Role Center views to modern list views. Answers questions about defining views on pages, page extensions and page customizations."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:43.589Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5efacc96f6750864f35079306bffa440c3b2de24696517d68e1fd132f62a1ca1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-analysis-view-package
    title: Export and Package Analysis Views
    date: "2026-10-08"
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

> Views in Business Central AL development: how list page views define alternative filtering, sorting and layout, how to package analysis views in extensions, and how to migrate legacy Role Center views to modern list views. Answers questions about defining views on pages, page extensions and page customizations.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Views · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Views on list pages give users alternative ways to see the same data, through filtering, sorting and layout changes. They can be defined in AL on page, page extension and page customization objects. A view can use a shared layout or its own custom layout.

The section has three pages. The main "Views" page explains the concept and where views are defined. "Migrating to modern list views" covers moving from legacy views created on Role Center pages to modern views, which improve personalization and consistency across navigation methods. "Export and Package Analysis Views" explains how to ship analysis views with an extension.

Start with the Views page for the basics. Read the migration page if you have older Role Center views. Read the analysis views page if you need to distribute Analysis Mode results as part of an app.

## Key points

- Views on list pages define alternative data views through filtering, sorting and layout changes.
- Views can be defined on page, page extension and page customization objects.
- A view can use a shared layout or a custom layout; modern views keep column layout per view.
- Modern views replace legacy views created on Role Center pages, with better personalization and consistency across navigation methods.
- The migration page references 2022 release wave 2, version 21, 2024 release wave 1 and version 24.
- Analysis views are exported as JSON definitions from the Analysis Mode editor.
- Packaged analysis views are referenced with the analysisviews construct and the DefinitionFile property in page, pageextension or pagecustomization objects.
- Packaged analysis views can be targeted at profiles through page customization and are locked read-only.

## Learn pages

- [Export and Package Analysis Views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-analysis-view-package): Learn how to export analysis views from Analysis Mode, add their definitions to AL projects, and package them in Business Central extensions.
- [Migrating to modern list views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy): Explains how to move from legacy views to modern list views in Business Central.
- [Views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views): Description of what views are and how they're defined in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
