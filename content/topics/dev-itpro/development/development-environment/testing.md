---
id: topic/dev-itpro/development/development-environment/testing
type: topic
title: Testing
summary: Testing in Business Central development covers writing AL test codeunits, test methods, handlers, test pages and test runners, running tests in Visual Studio Code, mocking HttpClient calls, performance testing, page scripting for acceptance tests, and app validation testing FAQs. It answers how-to and setup questions for automated testing.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ab37f4f7145a501576f100083f1740b60be12cd9e024681b607ab32953eb44ab
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient-mock-outbound-calls
    title: Mock outbound HttpClient web service calls during testing
    date: "2025-03-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-explorer-vscode
    title: Run AL Tests in Visual Studio Code
    date: "2026-03-05"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-scripting
    title: Use the page scripting tool for acceptance testing
    date: "2026-09-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient-mock-outbound-calls
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-explorer-vscode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-scripting
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
  localizations: []
  videos:
    - video/B8cWQGwajwQ
  posts:
    - post/yzhums-com/67705
  guidelines: []
  changes:
    - change/bcapps/13598
learn_toc_path:
  - Development
  - Development environment
  - Testing
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children: []
coverage:
  learn: 11
  code: 0
  video: 1
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
member_hash: fd16969a532538bd4b44aa2294f4195b5149dbf1b668b52ea8bd175ca8a159e0
narrative: generated
---

# Testing

> Testing in Business Central development covers writing AL test codeunits, test methods, handlers, test pages and test runners, running tests in Visual Studio Code, mocking HttpClient calls, performance testing, page scripting for acceptance tests, and app validation testing FAQs. It answers how-to and setup questions for automated testing.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Testing · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to build and run automated tests for Business Central code in AL. It starts with an overview of application testing, then covers the building blocks: test codeunits and test methods, handler methods that intercept UI such as messages and confirmations, test pages that simulate user interaction, and test runner codeunits that control execution and logging.

Practical pages show how to apply these. One example walks through testing purchase invoice discounts with test libraries and GIVEN-WHEN-THEN notation. Others cover running tests in Visual Studio Code with Test Explorer and code coverage, and mocking outbound HttpClient calls (on-premises only).

Beyond code-level tests, the page scripting tool records and replays web client interactions for acceptance testing, and the Performance Toolkit extension simulates workloads to find performance regressions. The FAQ covers testing expectations before submitting an app for validation. Start with the overview, then the test codeunits page.

## Key points

- Test codeunits and test methods use attributes such as TransactionModel and TestDataSource, plus properties TestIsolation and TestHandlers.
- Handler methods (MessageHandler, ConfirmHandler, StrMenuHandler, PageHandler, ModalPageHandler, ReportHandler) let tests run without user interaction.
- Test runner codeunits use the TestRunner subtype with OnRun, OnBeforeTestRun and OnAfterTestRun triggers for unattended runs and result logging.
- Test pages simulate user actions: read and change fields, filter data, invoke actions, navigate records, and access subpages.
- Mocking outbound HttpClient calls uses HttpClientHandler and HandlerFunctions attributes and is available on-premises only.
- Run AL Tests in VS Code uses Test Explorer with run profiles, code coverage and debugger integration (2026 release wave 1, version 28.0).
- The page scripting tool records and replays web client interactions, and the bc-replay script player runs them in pipelines.
- The Performance Toolkit lets ISVs and VARs simulate concurrent sessions, compare to baselines, and report through telemetry and Power BI.

## Learn pages

- [Application Testing Example to Test Purchase Invoice Discounts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts): Example to demonstrate the application testing scenario.
  - In the observatory: [Codeunit 70 "Purch.-Calc.Discount"](../../../../objects/codeunit/70.md)
- [Create Handler Methods for Automated Tests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods): Create test codeunits, test methods, and test pages to test your application. To automate tests, create special handler methods for UI interactions.
- [Create Test Runner Codeunits in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits): Learn how to create test runner codeunits in AL to manage the execution of test codeunits and integrate with test management or test reporting frameworks.
- [FAQ about Testing your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test): Get answers to some of your questions about testing when you build an app for Dynamics 365 Business Central
- [Mock outbound HttpClient web service calls during testing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient-mock-outbound-calls): Learn about how to test HttpClient web calls to external services without invoking the live/actual/remote service.
- [Performance Toolkit extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit): Test your extensions for performance regressions during the development process for Business Central apps.
- [Run AL Tests in Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-explorer-vscode): Learn how to use the Test Explorer in Visual Studio Code to discover and run AL tests for Business Central directly from the IDE.
- [Test Codeunits and Test Methods in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods): Learn how to create test codeunits and test methods in AL, set the SubType property to Test, and use the different test method attributes in Business Central.
- [Test pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages): This article explains the Test pages, their purpose and use.
- [Testing the application overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application): Learn about how to use automated tests in Business Central
- [Use the page scripting tool for acceptance testing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-scripting): Learn how to record, edit, replay, and automate page scripts in Business Central to validate business processes and user acceptance tests.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#13598 Fix concurrent initialization of My Notifications](../../../../changes/bcapps/13598.md) (code change): "Added five deterministic regression tests covering all three table helpers"
- [Business Central 2025 wave 2 (BC27): Record and edit easier with enhanced page scripting tool](../../../../posts/yzhums-com/67705.md) (community post): "page scripting tool, including improved script recording and editing"
- [In Preview: User Acceptance Testing with the Page Scripting Tool (2024 release wave 1)](../../../../videos/B8cWQGwajwQ.md) (video): "user acceptance testing; page scripting tool; script recording and playback"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 9 objects with no object page: page/149000, page/149001, page/149003, page/149004, page/149005, page/149006, page/149007, page/149008, page/149009.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
