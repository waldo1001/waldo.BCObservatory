---
id: topic/dev-itpro/development/programming-in-the-al-language/language-elements/objects
type: topic
title: Objects
summary: "AL object types in Business Central: tables, pages, codeunits, queries, reports, XMLports, control add-ins, profiles, permission sets, entitlements, and their extension objects. It answers questions about what each object is for, its key properties and triggers, and how to extend or test it."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.960Z"
  flags: []
generated:
  at: "2026-10-07T21:13:11.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c8882d28d054339b71daa7e2df4b6aefabe18a83d727cfb473206aae827e621a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-properties
    title: AL Properties Overview for Business Central
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-codeunit-object
    title: Codeunit object
    date: "2025-05-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-object
    title: Control add-in object
    date: "2025-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits
    title: Create Test Runner Codeunits in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object
    title: Entitlement object
    date: "2025-03-19"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object
    title: Page extension object
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-object
    title: Page object
    date: "2024-04-26"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object
    title: Permission set object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-ext-object
    title: Profile extension object
    date: "2024-09-30"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object
    title: Query object
    date: "2024-11-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object
    title: Report object
    date: "2024-09-16"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-keys
    title: Table keys
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object
    title: Table object
    date: "2026-06-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods
    title: Test Codeunits and Test Methods in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-object
    title: XMLport object
    date: "2024-11-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-properties
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-codeunit-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-keys
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-object
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/language-elements
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/186
learn_toc_path:
  - Development
  - Programming in the AL language
  - Language elements
  - Objects
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/language-elements
children: []
coverage:
  learn: 19
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a90ae453d889eef5dd857be2b9f06a5916dd665df9b4f6dd8f70f0276050a8d5
narrative: generated
---

# Objects

> AL object types in Business Central: tables, pages, codeunits, queries, reports, XMLports, control add-ins, profiles, permission sets, entitlements, and their extension objects. It answers questions about what each object is for, its key properties and triggers, and how to extend or test it.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Language elements](../language-elements.md) > Objects · tier official · system development · narrative reviewed by Opus

## Overview

This section is the reference for AL object types. Most pages cover one object: its purpose, syntax, main properties and triggers. A properties overview and a page on table keys support them. Data objects include table, table extension, query, report and XMLport. UI objects include page, page extension, page customization and control add-in. Logic is held in codeunits, including test codeunits and test runner codeunits. Profiles, permission sets and entitlements define user experiences and access.

## Key points

- AL Properties Overview explains how properties control the behavior of objects and elements such as fields, actions, data items and columns. Start there for general property concepts.
- Table and table extension objects cover fields, keys, triggers and the Extensible property. Table keys covers primary, secondary, unique and clustered keys, and IncludedFields.
- Page objects use SourceTable, layout sections, actions and views. Page extensions change pages with the addfirst, addlast, addafter, addbefore, modify, movefirst, movelast, moveafter and movebefore keywords.
- Page customization changes layout and actions only for specified profiles, with no variables, procedures or triggers. It is more limited than a page extension.
- Profile and profile extension objects set a role center and optional page customizations for a user experience.
- Permission set and permission set extension objects define and compose permissions. They use Assignable, IncludedPermissionSets and ExcludedPermissionSets. Extensions can add permissions to existing sets.
- Entitlement objects define which objects customers can use based on licenses or Microsoft Entra roles. They support Marketplace app transactability.
- Test codeunits and test runner codeunits cover test methods, handlers, TransactionModel and TestIsolation. Runners add OnBeforeTestRun and OnAfterTestRun for unattended runs.

## Learn pages

- [AL Properties Overview for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-properties): Explore AL properties for tables, pages, reports, queries, and other objects in Dynamics 365 Business Central development.
- [Codeunit object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-codeunit-object): Describes the codeunit object, which is a container for business logic in AL for Business Central.
- [Control add-in object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-object): Description of the control add-in object type in AL for Business Central.
- [Create Test Runner Codeunits in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits): Learn how to create test runner codeunits in AL to manage the execution of test codeunits and integrate with test management or test reporting frameworks.
- [Entitlement object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object): Discover how to define and use entitlement objects in AL for Business Central.
- [Page customization object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-customization-object): The page customization object in Business Central allows you to add changes to the layout and actions on page that are accessible for a profile.
- [Page extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-ext-object): Extend page objects with page extension objects in AL for Business Central.
- [Page object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-object): Description of the page object and its syntax in AL for Business Central.
- [Permission Set Extension Object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object): Description of the permission set extension object in AL for Business Central.
- [Permission set object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object): Describes the permission set object, which sets permissions on objects in AL for Business Central.
- [Profile extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-ext-object): Description of the profile extension object, which allows you to modify an individual experience for each user profile.
- [Profile object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-profile-object): Description of the profile object, which allows you to build an individual experience for each user profile.
- [Query object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object): Description of the AL query object.
- [Report object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object): The report object in AL for Business Central allows to create a new report.
- [Table extension object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object): This article describes the table extension object in AL for Business Central.
- [Table keys](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-keys): Learn about table keys in AL, including primary and secondary keys, and how to define keys in table objects and table extension objects.
- [Table object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object): This article describes the structure, object limits, and extensibility of the table object in AL for Business Central.
- [Test Codeunits and Test Methods in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods): Learn how to create test codeunits and test methods in AL, set the SubType property to Test, and use the different test method attributes in Business Central.
- [XMLport object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-object): XMLport objects are used to export and import data between an external source and Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#186 Add Query filter semantics guidance](../../../../../changes/bcquality/186.md) (code change): "DataItemTableFilter remains active when runtime filters target the same field"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
