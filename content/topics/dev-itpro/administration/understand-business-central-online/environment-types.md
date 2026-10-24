---
id: topic/dev-itpro/administration/understand-business-central-online/environment-types
type: topic
title: Environment types
summary: "Environment types in Business Central online: production, sandbox, preview, test and demo environments. It answers questions about which environment to use, how to create trials or partner sandboxes, how to preview major updates, and how quotas apply."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:21.770Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8245c44315487475348d91410d04efb1be2bdc3e9f8b4cebd6f62adc6bde7f81
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-extend-enhancements
    title: Add enhancements to Business Central demo environments
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment
    title: Prepare demonstration environments for Business Central
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/preview-environments
    title: Prepare for Major Updates with Preview Environments
    date: "2025-11-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/test-environment
    title: Preparing test environments of Business Central
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/environment-types
    title: Production and Sandbox Environments
    date: "2024-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-mdx
    title: Set up Microsoft 365 and Business Central demo environments with MDX
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-trial
    title: Use trial and sandbox demo environments
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/preview-environments
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/test-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/environment-types
  objects:
    - object/page/2500
    - object/page/20350
  features: []
  topics:
    - topic/dev-itpro/administration/understand-business-central-online
    - topic/dev-itpro/administration/understand-business-central-online/environment-types/demo-environments
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Understand Business Central online
  - Environment types
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/understand-business-central-online
children:
  - topic/dev-itpro/administration/understand-business-central-online/environment-types/demo-environments
coverage:
  learn: 7
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2500
  - 2502
  - 20350
member_hash: 77b8910ccbd9095c34727e3a0b5b16e9250215ba2facec88b923e08941cde388
narrative: generated
---

# Environment types

> Environment types in Business Central online: production, sandbox, preview, test and demo environments. It answers questions about which environment to use, how to create trials or partner sandboxes, how to preview major updates, and how quotas apply.

Path: [Administration](../../administration.md) > [Understand Business Central online](../understand-business-central-online.md) > Environment types · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section describes the kinds of environments you can run in Business Central online and what each is for. Production and sandbox environments are the core pair, and the sandbox page covers partner sandboxes for lower-cost nonproduction use, with full premium functionality and storage and environment quotas that depend on licenses.

Other pages cover specific purposes. Preview environments let you test major updates before release by creating or updating a sandbox to a preview version, during public preview or early access preview. The test environments page explains 30-day trials created via Partner Center and dedicated environments for resellers and partners who test or demonstrate functionality.

The Demo environments subtopic goes further on demos. It compares an MDX demo environment, a prospect trial and a sandbox, and explains setup and enhancements such as Contoso Coffee demo data, connectivity apps, and Sales and Field Service integrations. Start with Production and Sandbox Environments, then go to the page that matches your goal.

## Key points

- Production and sandbox environments serve different uses in Business Central online.
- Partner sandboxes offer a cost-effective option for nonproduction scenarios with full premium functionality.
- Storage quota and environment quota are based on licenses.
- Preview environments test major updates before release, in public preview or early access preview periods.
- A preview is made by creating a sandbox or updating an existing one to a preview version, and feedback can be submitted.
- Test environments can be 30-day trials created via Partner Center, or dedicated environments for resellers and partners.
- Demo environments subtopic compares an MDX demo environment, a prospect trial and a sandbox.
- Demo enhancements include Contoso Coffee demo data, connectivity apps, and Sales and Field Service integrations.

## Subtopics

- [Demo environments](environment-types/demo-environments.md) (4 pages)

## More Learn pages

- [Prepare for Major Updates with Preview Environments](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/preview-environments): Learn how to use preview sandboxes to help prepare for the next major update of Business Central online.
  - Preview environments are sandbox environments created on or updated to a preview version of Business Central.
  - Status: Public preview runs in March and September before major updates, with environments deleted 30 days after GA.
  - Status: Early access preview coincides with update period; only Partner Sandbox license tenants can participate.
  - Limit: Early access preview environments auto-update every Sunday to latest build; failed updates result in auto-deletion.
  - During early access preview, environments can only transfer to another tenant with Partner Sandbox license.
  - Limit: Preview environments cannot be updated to a different version; data must be exported before preview period ends.
  - Sandbox copies of production enable testing new functionality with existing data, setup, and customizations.
  - Testing extensions in preview sandbox verifies compatibility and functionality before major version release.
- [Preparing test environments of Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/test-environment): Get an overview of your options for deploying test environments for Dynamics 365 Business Central for performance testing.
  - Partners can create test environments for testing or pre-sales demonstrations.
  - Test environments based on free 30-day trials require CSP access in Partner Center.
  - Step: In Partner Center, create new test customer with test domain like contoso.onmicrosoft.com.
  - Step: Subscribe to Dynamics 365 Business Central Premium Trial providing 25 licenses for 30 days.
  - Step: Create test user and assign 1 Premium license; may take 10 minutes for licenses to display.
  - Environment created automatically when first logging in with user credentials to Business Central.
- [Production and Sandbox Environments](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/environment-types): Learn about the differences between production and sandbox environments for Dynamics 365 Business Central.
  - Production environments managed via admin center or Administration Center API.
  - Partner Sandbox license available to partners with valid MPN ID for nonproduction scenarios.
  - Limit: Partner Sandbox license strictly for partner nonproduction use; cannot be used for customers or production.
  - Five Partner Sandbox licenses grant one production plus three sandbox environments with 105 GB storage.
  - Each five additional Partner Sandbox licenses add three sandbox environments and 25 GB storage.
  - Partner Sandbox licenses available via experience.dynamics.com; payment by credit card or invoice for over 500 dollars.
  - Sandbox environments can have production data copied in for testing and demonstration purposes.
  - In the observatory: [Codeunit 1886 "Environment Cleanup"](../../../../objects/codeunit/1886.md), [Codeunit 8912 "Environment Cleanup Subs"](../../../../objects/codeunit/8912.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 2500 "Extension Management"](../../../../objects/page/2500.md) · via [Demo environments](environment-types/demo-environments.md)
- [Page 20350 "Connectivity Apps"](../../../../objects/page/20350.md) · on [Table 20350 "Connectivity App"](../../../../objects/table/20350.md) · via [Demo environments](environment-types/demo-environments.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
