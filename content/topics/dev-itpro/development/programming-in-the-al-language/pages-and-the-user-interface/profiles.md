---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/profiles
type: topic
title: Profiles
summary: "Profiles in Business Central AL development: how to define user roles that control which pages and reports a user sees. It answers questions about profile objects, profile extensions, page customization objects, and creating or moving profiles through the client."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:51.589Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 56c3b273565a837b5eeda1fe72bc383986e6ff5444aab7b7885cd5a439a43869
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles
    title: Designing Profiles
    date: "2021-04-01"
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
    title: Using the client to create profiles
    date: "2024-09-30"
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
  guidelines: []
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 8b015f2762d8fcd39a462fec3dc0a0cb94bc1955747bf63ec1f60e80132c978f
narrative: generated
---

# Profiles

> Profiles in Business Central AL development: how to define user roles that control which pages and reports a user sees. It answers questions about profile objects, profile extensions, page customization objects, and creating or moving profiles through the client.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Profiles · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Profiles (roles) tailor the Business Central experience by setting which pages and reports are available and which role center a user gets. In AL you build them with profile objects, profile extension objects, and page customization objects. The client offers a user interface alternative to writing this in code.

Start with Designing Profiles for the overall picture, including role centers, profile extensions, and translation support. The Profile object page explains the properties that define a profile: RoleCenter, Enabled, Promoted, and Customizations. The Page customization object page covers changing layout and actions for specific profiles. It offers more limited extensibility than page extensions. Using the client to create profiles covers the no-code route, with export and import of profile packages.

## Key points

- A profile object sets a role center and can list optional page customizations. Its properties include RoleCenter, Enabled, Promoted and Customizations.
- Page customization objects change page layout and actions for specific profiles and apply only to the role centers they target.
- Page customization objects cannot add variables, procedures or triggers, so they are less extensible than page extensions. The Learn page lists runtime 16.
- Page customizations can cover actions, field additions, group management, editable fields and views.
- Profile extension objects are another AL building block for profiles, and translation is supported.
- The client lets you create profiles, profile extensions and page customizations without writing AL code. The Learn page lists 2024 release wave 2.
- Profiles created in the client can be exported and imported as a profile package.

## Learn pages

- [Designing Profiles](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles): Gives an overview of profiles and page customizations.
- [Page customization object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object): The page customization object in Business Central allows you to add changes to the layout and actions on page that are accessible for a profile.
- [Profile object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object): Description of the profile object, which allows you to build an individual experience for each user profile.
- [Using the client to create profiles](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-design-profiles-using-client): Gives an overview of how to create profiles by using the client together with Visual Studio Code.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Step-by-Step Guide to Page Customizations for Business Central in AL](../../../../../posts/aardvarklabs-blog/2523.md) (community post): "A profile definition links customizations to a role center and applies them"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
