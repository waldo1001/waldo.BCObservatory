---
id: topic/dev-itpro/development/extensibility/extending-al-objects
type: topic
title: Extending AL objects
summary: Extending AL objects covers how extensions change existing Business Central objects without modifying base code. It answers questions about page, table, report, enum and permission set extensions, event types, and application areas.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:28.884Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 19dcc93eca7fac792136d6f2b120e4c721d8e97ddbd72d94291837096c604be8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types
    title: Event types
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-application-areas
    title: Extending Application Areas
    date: "2025-01-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extensible-enums
    title: Extensible Enums
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object
    title: Page extension object
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    title: Permission Set Extension Object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object
    title: Report extension object
    date: "2024-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
    title: Table extension object
    date: "2024-04-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-application-areas
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extensible-enums
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extensibility
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9217
learn_toc_path:
  - Development
  - Extensibility
  - Extending AL objects
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extensibility
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9ebfd0c8a95564cad3895173960c88fe73af3e7b6e4de945b95a59be2bfcd58c
narrative: generated
---

# Extending AL objects

> Extending AL objects covers how extensions change existing Business Central objects without modifying base code. It answers questions about page, table, report, enum and permission set extensions, event types, and application areas.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Extending AL objects · tier official · system development · narrative reviewed by Opus

## Overview

This section explains the AL extension objects used to customize Business Central. Each page covers one kind of object: page extensions, table extensions, report extensions, extensible enums with enumextension, and permission set extensions. Further pages cover event types and extending application areas.

Start with the object type you want to change. Page extension, table extension and report extension describe syntax and what can be added, such as controls, actions, fields, keys, triggers, data items and layouts. Event types is the place to learn how to publish, raise and subscribe to events when behavior must change through code. Extensible enums and permission set extensions cover adding enum values and adding permissions to existing sets. Extending Application Areas covers how to show or hide functionality for different experience tiers.

## Key points

- Page extensions add or change layout controls and actions with addfirst, addlast, addafter, addbefore, modify, and the move keywords (movefirst, movelast, moveafter, movebefore).
- Table extensions add fields, define keys and write trigger code without changing the base table.
- Report extensions add columns, data items, triggers, request page elements and multiple report layouts.
- Extensible enums use the Extensible property and the enumextension object so other extensions can add values. Display order follows declaration.
- Permission set extensions add permissions to existing sets, and the permissions are assigned automatically when the extension is installed.
- Event types include business events, integration events, global events, and database and page trigger events. The page explains how to publish, raise and subscribe to them.
- Application areas are extended by adding fields to the Application Area Setup table and subscribing to the OnGetExperienceAppArea and OnValidateApplicationAreas events.

## Learn pages

- [Event types](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-event-types): Business Central supports different types of events including BusinessEvent, IntegrationEvent, Global, and trigger events.
- [Extending Application Areas](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-application-areas): Learn about extending application areas in Business Central.
- [Extensible Enums](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extensible-enums): Overview of the enumeration type and the concept of extending them.
- [Page extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object): Extend page objects with page extension objects in AL for Business Central.
- [Permission Set Extension Object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object): Description of the permission set extension object in AL for Business Central.
- [Report extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object): The report extension object in AL for Business Central allows you to create an extension of an existing report.
- [Table extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object): This article describes the table extension object in AL for Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9217 [Extensibility][SubscriptionBilling]: Make IsLineAttachedToBillingLine accessible from external apps in Sales Line and Purchase Line](../../../../changes/bcapps/9217.md) (code change): "IsLineAttachedToBillingLine procedure visibility changed from internal to public"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
