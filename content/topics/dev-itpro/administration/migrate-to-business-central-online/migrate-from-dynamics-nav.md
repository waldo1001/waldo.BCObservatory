---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-nav
type: topic
title: Migrate from Dynamics NAV
summary: "Migrating Dynamics NAV on-premises to Business Central online: the overall migration path through BC14, the BC14 reimplementation option, and converting C/AL customizations to AL extensions. It answers questions about route choice, data preparation and customization conversion."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:51.564Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bc47801209c4613462f7eeea5acad7fba8ed3eaed657462079fdf95ee03de3c7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-nav-customization-playbook
    title: Customization Migration Guide - Dynamics NAV to Business Central Online
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-nav
    title: Migrate Dynamics NAV to Business Central online
    date: "2026-05-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-nav-customization-playbook
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-nav
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online
  localizations: []
  videos: []
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-7706250162700204847--ff7a1d395b
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Dynamics NAV
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 03dfb8de0fc286d415d19882f489e5658576fb1e000fdda85d5fc028f5610df5
narrative: generated
---

# Migrate from Dynamics NAV

> Migrating Dynamics NAV on-premises to Business Central online: the overall migration path through BC14, the BC14 reimplementation option, and converting C/AL customizations to AL extensions. It answers questions about route choice, data preparation and customization conversion.

Path: [Administration](../../administration.md) > [Migrate to Business Central online](../migrate-to-business-central-online.md) > Migrate from Dynamics NAV · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers moving from Dynamics NAV to Business Central online. It has two pages: one on the overall migration, and one on migrating customizations.

The main page describes the route. You upgrade to BC14 first, then convert C/AL customizations to AL extensions. As an alternative, you can use the BC14 reimplementation tool. It also touches on data preparation and localization support.

The customization guide covers the code side. It explains the C/AL to AL conversion workflow and how different object types are handled, including the Txt2Al tool, page and table extensions, codeunit refactoring and event subscribers. Start with the migration page to choose a path, then use the customization guide to plan the code conversion.

## Key points

- The migration path goes through an upgrade to BC14 first.
- After the BC14 upgrade, C/AL customizations are converted to AL extensions.
- The BC14 reimplementation tool is an alternative to the full upgrade route.
- The migration page covers data preparation and localization support.
- The customization guide covers the C/AL to AL conversion workflow and handling of object types.
- The Txt2Al tool is part of the code conversion.
- Customizations are rebuilt as page extensions and table extensions, with codeunit refactoring and event subscribers.
- The pages mention versions 14, 20 and 25.

## Learn pages

- [Customization Migration Guide - Dynamics NAV to Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-nav-customization-playbook): Learn how to convert C/AL customizations to AL extensions when migrating from Dynamics NAV to Business Central online.
- [Migrate Dynamics NAV to Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-nav): Learn how to migrate from Dynamics NAV on-premises to Business Central online, including supported upgrade paths and key considerations.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [NAV to Business Central: What Actually Moves, and What Needs to Change?](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-7706250162700204847--ff7a1d395b.md) (community post): "Moving from Dynamics NAV to Business Central requires two separate projects: a technical upgrade through mandatory waypoints"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
