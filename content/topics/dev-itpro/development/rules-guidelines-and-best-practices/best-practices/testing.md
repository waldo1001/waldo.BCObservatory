---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/testing
type: topic
title: Testing
summary: "Testing best practices for Business Central extensions: a Customer Rewards sample extension built and then tested with the Application Test Toolkit, plus the testing steps required before Marketplace validation. It answers questions about writing test codeunits and about pre-submission checks."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:13.086Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f74e5c4eb1c5a1ec27df7c5b6aa4fe4c70ca669a58dd1e643129559332660f40
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example
    title: Building an Advanced Sample Extension
    date: "2022-12-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example-test
    title: Test the advanced sample extension
    date: "2026-03-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-testingyourextension
    title: Testing your extension
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example-test
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-testingyourextension
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
  localizations: []
  videos:
    - video/EurgqGU1jG0
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Rules, guidelines, and best practices
  - Best practices
  - Testing
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
children: []
coverage:
  learn: 3
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 75d4b13edabb094c6bfaa4d84768e2b4ed6400d134dd3b0ffd88e878640ecc56
narrative: generated
---

# Testing

> Testing best practices for Business Central extensions: a Customer Rewards sample extension built and then tested with the Application Test Toolkit, plus the testing steps required before Marketplace validation. It answers questions about writing test codeunits and about pre-submission checks.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > Testing · tier official · system development · narrative reviewed by Opus

## Overview

This section covers testing extensions from two angles. Two pages follow one sample, a Customer Rewards extension. The first builds it with tables, table extensions, pages, page extensions, codeunits and events, and adds assisted setup, activation codes and reward levels. The second tests that sample with the Application Test Toolkit.

The third page is about submission. It lists what developers must test before sending an extension to Marketplace validation, including online environment testing, code signing, installation, user permissions, demo data and republishing.

Start with "Building an Advanced Sample Extension" to get the sample in place, then read "Test the advanced sample extension" for the test patterns. Use "Testing your extension" as a checklist before submitting.

## Key points

- The Customer Rewards sample adds reward level tracking to customers and shows how to develop, test and publish an extension.
- The sample uses tables, table extensions, pages, page extensions, codeunits, events, assisted setup and activation codes.
- Tests use the Application Test Toolkit with test codeunits and test methods.
- The testing walkthrough covers UI handlers, test pages, the asserterror statement and mock event subscribers.
- It also shows how to validate business logic in the sample.
- Before Marketplace validation, test in an online environment and verify code signing and installation.
- Pre-submission checks also include user permission testing, demo data import and republish testing.

## Learn pages

- [Building an Advanced Sample Extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example): Includes code for an advanced example extension using Business Central and AL in Visual Studio Code.
- [Test the advanced sample extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example-test): Includes test code for the advanced example extension.
- [Testing your extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-testingyourextension): Describing the steps you must go through to successfully submit your app to Marketplace.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [20260504 - Super fast tests covering 100% of your code](../../../../../videos/EurgqGU1jG0.md) (video): "automated testing; code coverage; interfaces; test patterns"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
