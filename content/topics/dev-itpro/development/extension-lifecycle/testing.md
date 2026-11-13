---
id: topic/dev-itpro/development/extension-lifecycle/testing
type: topic
title: Testing
summary: "Testing in Business Central covers writing automated tests in AL: test codeunits, test methods, test pages, handler methods and test runner codeunits. It also covers the Performance Toolkit, an application testing example, and an FAQ on testing apps before validation."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5b6f257cab4a075b04127433e205f8caadca97e2c2e71aa84f20e50f8c1649ba
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
    - video/aNRzlbxVPWE
    - video/eUkx_VCcyoU
    - video/EurgqGU1jG0
    - video/hNom9ZZuca0
    - video/JI9OpaBx0nk
    - video/qlFEdXPjX6A
    - video/xr8C3c6WhOI
  posts:
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-07-al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing--1510616044
    - post/gerardorenteria-blog/11565
    - post/jpearson-blog/1590
    - post/sshadows-dk/https-sshadows-dk-blog-your-tests-all-pass--ed8005b620
    - post/stefanmaron-com/https-stefanmaron-com-posts-weekly-recap-2026-08-14--fcd92522cc
    - post/waldo-be/318755
  guidelines: []
  changes:
    - change/al-go/2342
    - change/al-go/2343
    - change/al-go/2457
    - change/bcapps/10055
    - change/bcapps/10065
    - change/bcapps/11637
    - change/bcapps/11654
    - change/bcapps/11712
    - change/bcapps/11747
    - change/bcapps/12325
    - change/bcapps/12463
    - change/bcapps/12557
    - change/bcapps/13824
    - change/bcapps/8924
    - change/bcapps/9293
    - change/bcquality/141
    - change/bcquality/159
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
  video: 7
  blog: 6
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

> Testing in Business Central covers writing automated tests in AL: test codeunits, test methods, test pages, handler methods and test runner codeunits. It also covers the Performance Toolkit, an application testing example, and an FAQ on testing apps before validation.

Path: [Development](../../development.md) > [Extension lifecycle](../extension-lifecycle.md) > Testing · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to build and run automated tests for Business Central code. It starts with an overview of application testing, then goes into the building blocks: test codeunits and test methods, test pages that simulate user interaction, handler methods that intercept UI such as messages, confirmations, pages and reports, and test runner codeunits that control unattended execution.

A worked example shows how to test purchase invoice discount calculations, using test libraries, the Assert codeunit and GIVEN-WHEN-THEN notation. The Performance Toolkit extension covers a different need: simulating realistic workloads to find performance regressions. The FAQ answers questions about testing an app before validation submission.

Start with the testing overview, then read the test codeunits and test methods page. Use the purchase invoice example to see the pieces together, and the FAQ if you are preparing an app for validation.

## Key points

- Test codeunits and test methods use attributes such as TransactionModel and TestDataSource, plus the TestIsolation and TestHandlers properties; the page mentions runtime 16 and runtime 18.
- Handler methods (MessageHandler, ConfirmHandler, StrMenuHandler, PageHandler, ModalPageHandler, ReportHandler) let tests run without user interaction.
- Test runner codeunits use the TestRunner subtype with OnRun, OnBeforeTestRun and OnAfterTestRun triggers for preprocessing, postprocessing and result logging.
- Test pages simulate user actions: read and change fields, access subpages, filter data, invoke actions and navigate records.
- The purchase invoice discount example uses Library - Random, Library - Purchase, the Assert codeunit and GIVEN-WHEN-THEN notation.
- The ASSERTERROR keyword is part of the best practices for repeatable automated tests.
- The Performance Toolkit lets ISVs and VARs define test suites and scenarios, simulate concurrent sessions, compare to a baseline, and use telemetry and Power BI reporting.
- The FAQ covers testing environments, versions, coverage, upgrades and multi-country testing before validation submission.

## Learn pages

- [Application Testing Example to Test Purchase Invoice Discounts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts): Example to demonstrate the application testing scenario.
  - In the observatory: [Codeunit 70 "Purch.-Calc.Discount"](../../../../objects/codeunit/70.md)
- [Create Handler Methods for Automated Tests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-handler-methods): Create test codeunits, test methods, and test pages to test your application. To automate tests, create special handler methods for UI interactions.
- [Create Test Runner Codeunits in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testrunner-codeunits): Learn how to create test runner codeunits in AL to manage the execution of test codeunits and integrate with test management or test reporting frameworks.
- [FAQ about Testing your Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-test): Get answers to some of your questions about testing when you build an app for Dynamics 365 Business Central
- [Performance Toolkit extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-performance-toolkit): Test your extensions for performance regressions during the development process for Business Central apps.
- [Test Codeunits and Test Methods in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-codeunits-and-test-methods): Learn how to create test codeunits and test methods in AL, set the SubType property to Test, and use the different test method attributes in Business Central.
- [Test pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-pages): This article explains the Test pages, their purpose and use.
- [Testing the application overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-testing-application): Learn about how to use automated tests in Business Central

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2342 Fix incremental builds poisoning buildMode-specific artifacts (#2337)](../../../../changes/al-go/2342.md) (code change): "Fixed incremental builds in AL-Go that were corrupting buildMode-specific artifacts"
- [#2343 RunTests action](../../../../changes/al-go/2343.md) (code change): "new RunTests action that runs tests with AlTool"
- [#2457 Fixing codeunit discovery on PowerShell 5 for RunTests action.](../../../../changes/al-go/2457.md) (code change): "Fixed codeunit discovery in the RunTests action"
- [#10055 Fix: migrating a document attachment deletes shared Tenant Media](../../../../changes/bcapps/10055.md) (code change): "Introduces three new unit tests verifying shared media protection"
- [#10065 [Quality Management] Quality Inspection User assignment fixes](../../../../changes/bcapps/10065.md) (code change): "Tests for user assignment added to the misc test codeunit"
- [#11637 [Master]- Create Documents on Recurring Billing ignores the Partner filter and fails when a vendor billing proposal exists](../../../../changes/bcapps/11637.md) (code change): "Create Documents on Recurring Billing now respects the Partner filter. New tests added"
- [#11654 Repair and re-enable Expense Agent permission and posted-history tests](../../../../changes/bcapps/11654.md) (code change): "Expense Agent tests were repaired and re-enabled. The fixes cover permission checks"
- [#11712 [Master] - Bug 624708: [Expense Management] Users sync - There should be a configuration wizard to ask if the Employees should be created behind if no match is found](../../../../changes/bcapps/11712.md) (code change): "Expense user synchronization gets new logic in the Expense User table. Tests were added"
- [#11747 [master][Subscription Billing] Sales-Explode BOM fails for foreign-currency customers](../../../../changes/bcapps/11747.md) (code change): "Fixed a Sales Line does not exist error when exploding an Assembly BOM. Added test coverage"
- [#12325 [Expense tests] Re-enable reviewed APIs and consolidate Expense fixes](../../../../changes/bcapps/12325.md) (code change): "Clean test codeunit execution is turned on"
- [#12463 Fix Email upgrade writing during no-transaction upgrade test](../../../../changes/bcapps/12463.md) (code change): "Email Installer no longer re-registers email tables based on allowed-table"
- [#12557 Implement first-party app authentication for Microsoft Fabric Export](../../../../changes/bcapps/12557.md) (code change): "tests are extended"
- [#13824 Implement namespace normalization for Fabric Data and Logging in setup pages and platform management](../../../../changes/bcapps/13824.md) (code change): "Added comprehensive tests validating lowercase normalization behavior"
- [#8924 [QM] Fixed overflow runtime error](../../../../changes/bcapps/8924.md) (code change): "Adds a regression test in the miscellaneous QM tests codeunit"
- [#9293 [Bug][SubscriptionBilling] Process Usage Data Billing uses lines marked Processing Status = Error (currency mismatch)](../../../../changes/bcapps/9293.md) (code change): "Six new tests added covering the corrected behavior"
- [#141 knowledge(testing): license-entitlement failures on posted tables in a SaaS test run are environmental](../../../../changes/bcquality/141.md) (code change): "Provides good and bad code samples showing the distinction"
- [#159 3 AL/BC testing patterns from an external BC testing expert's blog (Luc van Vugt, fluxxus.nl)](../../../../changes/bcquality/159.md) (code change): "AL testing patterns from an external BC testing expert's blog"
- [AL EventLens 0.1.6: the handler lens, and a fix that needed fixing](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-07-al-eventlens-0-1-6-the-handler-lens-and-a-fix-that-needed-fixing--1510616044.md) (community post): "Handler lens shows test usage counts above handler functions such as MessageHandler, ConfirmHandler and PageHandler"
- [AL Language extension for Microsoft Dynamics 365 Business Central version 16.2.1869542 (New version)](../../../../posts/gerardorenteria-blog/11565.md) (community post): "Testing enhancements enable HTTP request mocking with TestHttpRequestPolicy"
- [Why do all my tests show up twice in the test explorer?](../../../../posts/jpearson-blog/1590.md) (community post): "Tests show up twice in the VS Code test explorer when the pre-release AL Language extension"
- [Your Tests All Pass. I Have Bad News.](../../../../posts/sshadows-dk/https-sshadows-dk-blog-your-tests-all-pass--ed8005b620.md) (community post): "Mutation testing is a technique that validates test quality by intentionally breaking code"
- [Weekly Recap: August 7-14](../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-weekly-recap-2026-08-14--fcd92522cc.md) (community post): "AL Runner shipped 85 PRs fixing emulation-to-real-BC divergences in rename propagation"
- [Agent Maron & waldo: Mission AL Runner](../../../../posts/waldo-be/318755.md) (community post): "AL code tests outside Business Central using Rust and an in-memory database"
- [Getting Started With Agent Testing: How to Write Agent Evals in AL (Part 2)](../../../../videos/aNRzlbxVPWE.md) (video): "Agent task flow mapping; multi-turn conversation testing; Test library data creation"
- [What's New: AL Language (2025 release wave 1)](../../../../videos/eUkx_VCcyoU.md) (video): "testing; http client; call stack; HTTP Client Handler for Testing"
- [20260504 - Super fast tests covering 100% of your code](../../../../videos/EurgqGU1jG0.md) (video): "automated testing; code coverage; test patterns; Fast automated testing framework"
- [What's new: Testability Enhancements (2026 release wave 2)](../../../../videos/hNom9ZZuca0.md) (video): "Data-driven Testing in AL"
- [Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)](../../../../videos/JI9OpaBx0nk.md) (video): "outbound http testing; mocking; HTTP client handler; test isolation; request interception"
- [What's New: AL Language (2025 release wave 2)](../../../../videos/qlFEdXPjX6A.md) (video): "AI Test Type; Required Test Isolation Property; Cancellation Token Propagation in VS Code"
- [What's New : AL-Go for GitHub on Quality and Testability (2025 release wave 1)](../../../../videos/xr8C3c6WhOI.md) (video): "Page Scripting Tests in AL-Go Workflow"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 9 objects with no object page: page/149000, page/149001, page/149003, page/149004, page/149005, page/149006, page/149007, page/149008, page/149009.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
