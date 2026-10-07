---
id: topic/dev-itpro/development/programming-in-the-al-language/language-elements/objects
type: topic
title: Objects
summary: "AL object types in Business Central: tables, pages, codeunits, reports, queries, XMLports, control add-ins, permission sets, profiles, entitlements, and their extension objects. It answers questions about object syntax, properties, triggers, keys, how to extend existing objects, and how to write and run tests with test codeunits and test runners."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:17:34.764Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8f72b3be4453e1dbe7a0ae1aa0dd63b759996016c2b6a325c1ebca16f9748301
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/properties/devenv-properties
    title: AL Properties Overview for Business Central
    date: "2026-08-21"
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

> AL object types in Business Central: tables, pages, codeunits, reports, queries, XMLports, control add-ins, permission sets, profiles, entitlements, and their extension objects. It answers questions about object syntax, properties, triggers, keys, how to extend existing objects, and how to write and run tests with test codeunits and test runners.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Language elements](../language-elements.md) > Objects · tier official · system development · narrative reviewed by Opus

## Overview

This section documents the object types available in the AL language, one page per object. It covers data objects (table, table extension, table keys, query, XMLport), user interface objects (page, page extension, page customization, control add-in, profile, profile extension), logic and output objects (codeunit, report), and security and licensing objects (permission set, permission set extension, entitlement).

Two pages cover testing: test codeunits with test methods, and test runner codeunits that control how tests execute. A general AL Properties Overview explains property syntax and how properties apply to objects and their elements.

Start with the Table, Page, and Codeunit object pages for the core model. Then move to the extension objects when you need to change existing objects without modifying them. Use the Properties Overview as a reference when you need to know what a property controls.

## Key points

- Table object defines fields, keys, triggers and metadata; the Extensible property and field tooltips are covered, as is Integer to BigInteger migration.
- Table keys cover primary, secondary, unique, and clustered keys, plus included fields (IncludedFields) for query performance.
- Page extension uses addfirst, addlast, addafter, addbefore, modify, and the move keywords; page customization is more limited (no variables, procedures, or triggers) and applies only to specified profiles.
- Codeunits hold reusable business logic with an OnRun trigger; test codeunits use test and handler methods, TransactionModel, TestIsolation, and TestHandlers.
- Test runner codeunits use the TestRunner subtype with OnBeforeTestRun and OnAfterTestRun triggers to run tests unattended and log results.
- Reports support RDL, Word, and Excel layouts with request pages; XMLports import and export XML data.
- Permission sets use Assignable, Permissions, IncludedPermissionSets, and ExcludedPermissionSets; permission set extensions add permissions to existing sets when an extension is installed.
- Entitlements define which objects customers can use based on licenses or Microsoft Entra roles, supporting Marketplace app monetization.

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

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
