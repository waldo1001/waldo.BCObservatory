---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/profiles
type: topic
title: Profiles
summary: Profiles in Business Central cover how to tailor the client to user roles, either in AL with profile, profile extension and page customization objects, or in the web client without code. It answers questions about defining role centers, changing page layout and actions per profile, and moving profiles between environments.
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
  input_hash: 11dbca02eac8ad7fb6c37feaf5faeb41e40ffd549bc0f297fb0cb3befb29e5b0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles
    title: Designing Profiles in Business Central
    date: "2026-11-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object
    title: Page customization object
    date: "2025-08-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object
    title: Profile object
    date: "2024-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles-using-client
    title: Using the Client to Create Profiles
    date: "2026-11-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles-using-client
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/2523
    - post/yzhums-com/68731
  guidelines: []
  changes:
    - change/bcquality/207
learn_toc_path:
  - Development
  - Programming in the AL language
  - Pages and the user interface
  - Profiles
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 8b015f2762d8fcd39a462fec3dc0a0cb94bc1955747bf63ec1f60e80132c978f
narrative: generated
---

# Profiles

> Profiles in Business Central cover how to tailor the client to user roles, either in AL with profile, profile extension and page customization objects, or in the web client without code. It answers questions about defining role centers, changing page layout and actions per profile, and moving profiles between environments.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Profiles · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

A profile defines the experience for a specific kind of user. In AL, the profile object sets a role center and can point to page customizations that change layout and actions for that profile. The design page explains how profile objects, profile extension objects and page customization objects work together to fit users' daily tasks, and it also mentions translation of profiles.

The page customization object is a lighter alternative to a page extension. It can add layout and action changes, but it cannot hold variables, procedures or triggers, and it applies only to the role centers you specify. It is described for runtime 16.

If you prefer not to write AL, the client-based page explains how to create profiles and page customizations in the web client, and how to export and import profile packages across environments. A good starting order is the design overview, then the profile object and page customization object references, then the client page if you work without code.

## Key points

- The profile object specifies a role center and optional page customizations through properties such as RoleCenter, Enabled, Promoted and Customizations.
- Page customization objects add layout and action changes, such as field additions, group management, editable fields and views, for specific profiles.
- Page customization objects cannot contain variables, procedures or triggers, so extensibility is more limited than page extensions.
- Page customizations apply only to the role centers specified, and the page notes runtime 16.
- Profile extension objects are part of profile design alongside profile and page customization objects.
- Profiles and page customizations can be created in the web client without AL code.
- Profile packages can be exported and imported to move profiles between environments, as described for 2024 release wave 2 (version 25.0).
- Profile design also covers translating profiles.

## Learn pages

- [Designing Profiles in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles): Learn how to use AL profiles, profile extensions, and page customizations to tailor Business Central pages to user roles and translate profile text.
- [Page customization object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object): The page customization object in Business Central allows you to add changes to the layout and actions on page that are accessible for a profile.
- [Profile object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object): Description of the profile object, which allows you to build an individual experience for each user profile.
- [Using the Client to Create Profiles](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles-using-client): Learn how to create, export, modify, and import Business Central profiles and page customizations by using the client and Visual Studio Code.
  - In the observatory: [Page 22 "Customer List"](../../../../../objects/page/22.md), [Page 9022 "Business Manager Role Center"](../../../../../objects/page/9022.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#207 2 AL/BC UI patterns: client-expression in-list (AL0573) and Role Center AccessByPermission](../../../../../changes/bcquality/207.md) (code change): "AccessByPermission for permission gating on Role Centers"
- [Step-by-Step Guide to Page Customizations for Business Central in AL](../../../../../posts/aardvarklabs-blog/2523.md) (community post): "Page customization objects in AL change a page's layout for a specific profile"
- [Dynamics 365 Business Central: How to get current Profile (Role) info (Profile ID, Display Name, Source, Role Center ID, etc.) via AL](../../../../../posts/yzhums-com/68731.md) (community post): "retrieve current user profile information including Profile ID"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
