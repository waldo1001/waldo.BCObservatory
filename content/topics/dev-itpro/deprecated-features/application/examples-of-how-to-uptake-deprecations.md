---
id: topic/dev-itpro/deprecated-features/application/examples-of-how-to-uptake-deprecations
type: topic
title: Examples of how to uptake deprecations
summary: Examples of moving off deprecated Business Central features. Covers the North American bank reconciliation and deposits removal, the move from user groups to permission sets or security groups, and the move from legacy views to modern list views.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:06.778Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 34a91dfb4bb5b56b16bab0ee503804abfa1a544a4bc0f09f6a9914d8a287b185
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-na-bank-rec
    title: Deprecated bank reconciliation and deposits features in the North American version
    date: "2023-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-user-groups
    title: Migrate from User Groups to Permission Sets or Security Groups
    date: "2023-08-24"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-na-bank-rec
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-user-groups
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy
  objects: []
  features: []
  topics:
    - topic/dev-itpro/deprecated-features/application
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Deprecated features
  - Application
  - Examples of how to uptake deprecations
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/deprecated-features/application
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 65331994cc05e0b5803f213be0a762fe7c24a550304c050abb2fb55632e9ab50
narrative: generated
---

# Examples of how to uptake deprecations

> Examples of moving off deprecated Business Central features. Covers the North American bank reconciliation and deposits removal, the move from user groups to permission sets or security groups, and the move from legacy views to modern list views.

Path: [Deprecated features](../../deprecated-features.md) > [Application](../application.md) > Examples of how to uptake deprecations · tier official · system none · narrative reviewed by Opus

## Overview

This section gives worked uptake guidance for three deprecations in the Application area. Each page explains what is being removed or replaced and how to migrate, and some include code examples for extensions.

The pages are independent of each other. Pick the one matching the feature you rely on: the North American bank reconciliation worksheet and deposits, user groups used for permission management, or legacy views created on Role Center pages.

Start with the page for your affected feature, check the release wave or version it mentions, and follow its migration path.

## Key points

- NA bank reconciliation worksheet and deposits features were removed in 2023 release wave 2; the migration path is to standard reconciliations and bank deposits.
- The bank page covers bank ledger entries, bank deposits and posted reconciliations.
- User groups are deprecated in favor of permission sets and security groups for managing permissions in extensions.
- The user group page gives migration guidance and code examples, including access control, user assignment and tenant permission sets.
- Modern views replace legacy views created on Role Center pages.
- Modern views offer better user experience, personalization and consistency across navigation methods.
- Modern views cover view composition, filters, sorting and column layout per view.
- The modern list views page references 2022 release wave 2, 2024 release wave 1, version 21 and version 24.

## Learn pages

- [Deprecated bank reconciliation and deposits features in the North American version](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-na-bank-rec): If you're using the deprecated Bank Reconciliation Worksheet and Deposits features in the US, CA, and MX versions, this article can help you understand what to do after you upgrade to 2023 release wave 2.
- [Migrate from User Groups to Permission Sets or Security Groups](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/deprecated-features-user-groups): This article describes why we've deprecated user groups, and provides developers with examples of how they can uptake the change in their extensions.
- [Migrating to modern list views](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-views-legacy): Explains how to move from legacy views to modern list views in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
