---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/restrictions
type: topic
title: Restrictions
summary: "Restrictions in Business Central development best practices covers what AL code should avoid: UI in web service objects, the obsolete OnCompanyOpen event, and the deprecated OnBeforeCompanyOpen and OnAfterCompanyOpen events. It answers questions on how to avoid sign-in errors, login slowdowns and web service exceptions."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 83ad3ae4dd373884c863e3e75851ff29096fcf42040fa94ff843d98576e6a505
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-webservices
    title: Be careful about UI for web services
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncompanyopencompleted
    title: Moving from OnCompanyOpen
    date: "2022-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-onbeforecompanyopen
    title: Replacing OnBeforeCompanyOpen and OnAfterCompanyOpen
    date: "2024-05-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-webservices
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncompanyopencompleted
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-onbeforecompanyopen
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Rules, guidelines, and best practices
  - Best practices
  - Restrictions
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 8dcac10e06917f9cbbe2a0b828ca6a2b51570b0e66d8ba3b5c82e32930301d7a
narrative: generated
---

# Restrictions

> Restrictions in Business Central development best practices covers what AL code should avoid: UI in web service objects, the obsolete OnCompanyOpen event, and the deprecated OnBeforeCompanyOpen and OnAfterCompanyOpen events. It answers questions on how to avoid sign-in errors, login slowdowns and web service exceptions.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > Restrictions · tier official · system development · **unreviewed** (machine-generated narrative)

## Overview

This section lists restrictions that developers should follow when writing extensions. One page deals with web services, where code must not show dialogs or message boxes. The other two deal with company-open and login events, which can slow or break sign-in when subscribers misbehave.

The two login pages are migration guides. One moves subscribers from the obsolete OnCompanyOpen event to the isolated OnAfterLogin event. The other gives patterns for removing OnBeforeCompanyOpen and OnAfterCompanyOpen to improve login performance.

Start with the page that matches your problem: web service UI errors, sign-in failures caused by subscriber errors, or slow login from the deprecated events.

## Key points

- Code in objects exposed as web services must not use UI elements such as dialogs, message boxes or confirmation dialogs, because they cause exceptions.
- GuiAllowed is the related check for deciding whether UI can be shown.
- OnCompanyOpen is obsolete; subscribers should move to the isolated OnAfterLogin event.
- Isolated events keep subscriber errors from causing sign-in failures.
- OnCompanyOpenCompleted is also named in the migration guidance.
- OnBeforeCompanyOpen and OnAfterCompanyOpen are deprecated; removing them improves login performance.
- Replacement patterns mentioned include OnCompanyInitialize and TaskScheduler.

## Learn pages

- [Be careful about UI for web services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-webservices): Describes restrictions on UI for web services.
- [Moving from OnCompanyOpen](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncompanyopencompleted): Explains why you should use OnAfterLogin instead of OnCompanyOpen.
- [Replacing OnBeforeCompanyOpen and OnAfterCompanyOpen](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-onbeforecompanyopen): Describes how to replace OnBeforeCompanyOpen and OnAfterCompanyOpen events.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
