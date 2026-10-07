---
id: topic/dev-itpro/development/extension-lifecycle/testing
type: topic
title: Testing
summary: Testing in Business Central covers writing automated AL tests (test codeunits, test methods, test pages, handler methods, test runners), a worked purchase invoice discount example, an app testing FAQ, and the Performance Toolkit extension for workload and regression testing.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:42.420Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 86787e416513475f7cb35fb60175fdcb8db24b949551e81a01e3aec7e8e62ef5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts
    title: Application Testing Example to Test Purchase Invoice Discounts
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods
    title: Create Handler Methods for Automated Tests
    date: "2026-08-24"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test
    title: FAQ about Testing your Business Central App
    date: "2022-08-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit
    title: Performance Toolkit extension
    date: "2024-02-21"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages
    title: Test pages
    date: "2022-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application
    title: Testing the application overview
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extension-lifecycle
  localizations: []
  videos:
    - video/9CW5mydS9Vs
    - video/JI9OpaBx0nk
    - video/Q-oazDEucLE
  posts:
    - post/stefanmaron-com/https://stefanmaron.com/posts/unittestswithoutbaseapp/
  guidelines: []
learn_toc_path:
  - Development
  - Extension lifecycle
  - Testing
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extension-lifecycle
children: []
coverage:
  learn: 8
  code: 0
  video: 3
  blog: 1
  guideline: 0
bc_forms:
  - 149000
  - 149001
  - 149003
  - 149004
  - 149005
  - 149006
  - 149007
  - 149008
  - 149009
member_hash: 37eaacdc440725b9b1569176af3dedeec3ec255d2233b55eca64d7b9cf551080
narrative: generated
---

# Testing

> Testing in Business Central covers writing automated AL tests (test codeunits, test methods, test pages, handler methods, test runners), a worked purchase invoice discount example, an app testing FAQ, and the Performance Toolkit extension for workload and regression testing.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Testing · tier official · system development · narrative reviewed by Opus

## Overview

This section explains how to test Business Central extensions. It starts with an application testing overview that introduces test codeunits, test methods, test runner codeunits, test pages, UI handlers and the ASSERTERROR keyword, and gives best practices for automated, repeatable tests.

The detail pages follow from there. Test codeunits and test methods describe the attributes and properties that structure a test. Test pages simulate user interaction with pages. Handler methods intercept messages, confirmations, pages and reports so tests run without a user. Test runner codeunits run test codeunits unattended with pre- and postprocessing and result logging. The purchase invoice discount example ties these together using test libraries and GIVEN-WHEN-THEN notation.

For app-level questions, the FAQ covers what testing is expected, including version, country and upgrade testing. The Performance Toolkit extension is for ISVs and VARs who need to simulate workloads and check performance regressions. Start with the overview, then read the example.

## Key points

- Test codeunits and test methods in AL use attributes such as TransactionModel and TestDataSource, plus the TestIsolation and TestHandlers properties; the page mentions runtime 16 and runtime 18.
- Handler methods include MessageHandler, ConfirmHandler, StrMenuHandler, PageHandler, ModalPageHandler and ReportHandler, so UI interactions need no user.
- Test runner codeunits use the TestRunner subtype with OnRun, OnBeforeTestRun and OnAfterTestRun triggers to run tests unattended and log results.
- Test pages simulate user actions: read or change fields, access subpages, filter data, invoke actions and navigate records.
- The purchase invoice discount example uses Library - Random, Library - Purchase, the Assert codeunit and GIVEN-WHEN-THEN notation.
- The FAQ covers complete coverage, automated and manual testing, country-specific testing, upgrade testing and Docker testing.
- The Performance Toolkit supports test suite configuration, scenario definition, concurrent session simulation, baseline comparison, telemetry integration and Power BI reporting.

## Learn pages

- [Application Testing Example to Test Purchase Invoice Discounts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts): Example to demonstrate the application testing scenario.
- [Create Handler Methods for Automated Tests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods): Create test codeunits, test methods, and test pages to test your application. To automate tests, create special handler methods for UI interactions.
- [Create Test Runner Codeunits in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits): Learn how to create test runner codeunits in AL to manage the execution of test codeunits and integrate with test management or test reporting frameworks.
- [FAQ about Testing your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test): Get answers to some of your questions about testing when you build an app for Dynamics 365 Business Central
- [Performance Toolkit extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit): Test your extensions for performance regressions during the development process for Business Central apps.
- [Test Codeunits and Test Methods in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods): Learn how to create test codeunits and test methods in AL, set the SubType property to Test, and use the different test method attributes in Business Central.
- [Test pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages): This article explains the Test pages, their purpose and use.
- [Testing the application overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application): Learn about how to use automated tests in Business Central

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [You don't need the base app to run your unit tests](../../../../posts/stefanmaron-com/https://stefanmaron.com/posts/unittestswithoutbaseapp/.md) (community post): "Unit tests for self-contained Business Central logic do not require the base application"
- [Microsoft presents: Tests, dependencies, runners and evals for BC applications](../../../../videos/9CW5mydS9Vs.md) (video): "deterministic testing; propagated dependencies; application test library"
- [Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)](../../../../videos/JI9OpaBx0nk.md) (video): "outbound http testing; mocking; HTTP client handler; test isolation; request interception"
- [20260601 - From No Tests to Safe Refactors Debug Logging + AI Agents for Legacy AL](../../../../videos/Q-oazDEucLE.md) (video): "Test-driven development with AI agents; Automated path coverage verification; Approval testing"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 149000, 149001, 149003, 149004, 149005, 149006, 149007, 149008, 149009.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
