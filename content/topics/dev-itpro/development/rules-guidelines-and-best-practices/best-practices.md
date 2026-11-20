---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
type: topic
title: Best practices
summary: "Best practices for developing Business Central extensions: AL code conventions, restrictions, testing, performance, security, telemetry, connectivity app requirements and user scenario documentation. It answers how to write, test, secure, monitor and prepare extensions for Marketplace validation."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5fe5fd8d0f6dfa69645e38a5362bba72df4682847fc782d914256545d4cdb1c0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    title: Adding Telemetry to Your Business Central Application
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    title: Azure Key Vaults with Business Central
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-webservices
    title: Be careful about UI for web services
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-bestpracticesforalcode
    title: Best practices for AL code
    date: "2026-02-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    title: Best Practices for Deprecation of AL Code
    date: "2024-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extension-advanced-example
    title: Building an Advanced Sample Extension
    date: "2022-12-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem
    title: How to work with a performance problem
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application
    title: Layered security model in Business Central
    date: "2025-11-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncompanyopencompleted
    title: Moving from OnCompanyOpen
    date: "2022-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
    title: Performance Articles for AL Developers
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-prefix-suffix
    title: Prefix and suffix for naming in extensions
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-onbeforecompanyopen
    title: Replacing OnBeforeCompanyOpen and OnAfterCompanyOpen
    date: "2024-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/connectivity-apps-requirements
    title: Requirements for connectivity apps
    date: "2023-05-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-overview
    title: Rules and guidelines for AL code
    date: "2023-04-11"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-userscenario
    title: User scenario documentation
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/connectivity-apps-requirements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-userscenario
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/rules-guidelines-and-best-practices
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/al-code
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/restrictions
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/testing
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/performance
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/security
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/12368
    - post/demiliani-com/13908
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-june-7-13-2026--e3fab4ba38
    - post/miljan-rs/966
    - post/nataliekarolak-com/4271
    - post/stefanmaron-com/https-stefanmaron-com-posts-introducing-the-no-shortcuts-series-the-100-correct-way-to-develop-for-b--ea07ff0b07
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-68-always-use-field-validation--cd6c5b4b3a
    - post/thinkaboutit-be/8132
    - post/yzhums-com/75344
  guidelines: []
  changes:
    - change/bcapps/11870
    - change/bcquality/108
    - change/bcquality/114
    - change/bcquality/119
    - change/bcquality/130
    - change/bcquality/132
    - change/bcquality/133
    - change/bcquality/135
    - change/bcquality/175
    - change/bcquality/183
    - change/bcquality/196
    - change/bcquality/251
    - change/bcquality/98
learn_toc_path:
  - Development
  - Rules, guidelines, and best practices
  - Best practices
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/rules-guidelines-and-best-practices
children:
  - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/al-code
  - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/restrictions
  - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/testing
  - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/performance
  - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/security
coverage:
  learn: 17
  code: 0
  video: 0
  blog: 9
  guideline: 0
bc_forms: []
member_hash: eaa6ed8c79aa4a9f6ef08300f6537b69d953326e78b7456545701d47f00a6f3d
narrative: generated
---

# Best practices

> Best practices for developing Business Central extensions: AL code conventions, restrictions, testing, performance, security, telemetry, connectivity app requirements and user scenario documentation. It answers how to write, test, secure, monitor and prepare extensions for Marketplace validation.

Path: [Development](../../development.md) > [Rules, guidelines, and best practices](../rules-guidelines-and-best-practices.md) > Best practices · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects guidance for developers building Business Central extensions. Five subtopics cover AL code (naming, file structure, formatting, obsolete attributes and CLEAN symbols, prefix and suffix rules), restrictions (what code should avoid), testing, performance and security. Three pages at the top level cover telemetry, connectivity app requirements and user scenario documentation.

Most pages tie back to Marketplace submission. The AL code pages include validation rules, the testing pages list steps required before validation, and the user scenario page describes the step-by-step guides that Microsoft validation teams use to test extension functionality. Connectivity apps listed in Business Central online have extra requirements.

Start with the AL code subtopic to set conventions. Then read Testing and Performance while you build. Use the telemetry page to instrument the app for production monitoring. Before you submit, check the Restrictions, Security, user scenario and, where relevant, connectivity app pages.

## Key points

- AL code guidance covers naming conventions, file structure, formatting, prefix and suffix rules, and deprecation with obsolete attributes and CLEAN symbols.
- Restrictions: avoid UI in web service objects, the obsolete OnCompanyOpen event, and the deprecated OnBeforeCompanyOpen and OnAfterCompanyOpen events, to prevent sign-in errors, login slowdowns and web service exceptions.
- Testing uses a Customer Rewards sample extension and the Application Test Toolkit, and lists the testing steps required before Marketplace validation.
- Performance troubleshooting follows three steps: measure, locate the bottleneck, eliminate it. Guidance covers pages, web services, reports, AL code, data access and testing.
- Security covers authentication, authorization, encryption, auditing and change logging, and the use of Azure Key Vaults for extension secrets.
- Telemetry can be added with custom signals, Application Insights, Event Log logging, the LogMessage and SendTraceTag methods, and the feature usage system module.
- Connectivity apps listed in Business Central online must meet requirements including app compatibility, 85% test coverage, sales volume thresholds, regulatory compliance such as PSD2 licensing, and the onboarding framework (2022 release wave 2).
- User scenario documentation needs step-by-step guides with screenshots, prerequisite steps, demo data and rapid start packages, so validation teams can test the extension.

## Subtopics

- [AL code](best-practices/al-code.md) (4 pages)
- [Restrictions](best-practices/restrictions.md) (3 pages)
- [Testing](best-practices/testing.md) (3 pages)
- [Performance](best-practices/performance.md) (2 pages)
- [Security](best-practices/security.md) (2 pages)

## More Learn pages

- [Adding Telemetry to Your Business Central Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry): Instrument Business Central applications with telemetry to analyze usage, troubleshoot problems, and collect events in Application Insights or Windows logs.
- [Requirements for connectivity apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/connectivity-apps-requirements): Learn about connectivity apps, how they can increase business productivity, and how to get your app listed as a connectivity app.
- [User scenario documentation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-userscenario): Describing how to generate the required scenario document to get your app approved for Marketplace.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11870 Reduce allocations in the "Export to Execl" scenario](../../../../changes/bcapps/11870.md) (code change): "The Export to Excel scenario now allocates less memory by reusing objects"
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md) (code change): "AL review knowledge expanded with new guidance on telemetry, Query objects, AppSource, breaking changes, and security"
- [#114 Document the skill-vs-knowledge boundary so BC facts land in knowledge files](../../../../changes/bcquality/114.md) (code change): "Skills should contain mechanics while knowledge files hold Business Central facts"
- [#119 Add batch-2 FP guards: sentence-case action captions + PK Get is transaction-cached](../../../../changes/bcquality/119.md) (code change): "Action captions that express imperative commands should use sentence case"
- [#130 knowledge(performance): align SetLoadFields placement with AL Guidelines](../../../../changes/bcquality/130.md) (code change): "align SetLoadFields placement with AL Guidelines by placing filters before SetLoadFields"
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md) (code change): "BCQuality guidance refined to reduce false positives in event handling, UI testing, performance analysis"
- [#133 Add TransferFields SkipFieldsNotMatchingType guidance](../../../../changes/bcquality/133.md) (code change): "Good pattern: use explicit field-by-field mapping with Evaluate for type conversions to fail loudly"
- [#135 Correct severe misconception about SetCurrentKey in the knowledge base](../../../../changes/bcquality/135.md) (code change): "Using SetCurrentKey when sorting is unnecessary hurts performance"
- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md) (code change): "Nine new AL/BC patterns document best practices for document distribution"
- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md) (code change): "Included bad and good AL code samples for each rule to guide developers"
- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md) (code change): "Strengthen review contracts and add AL reliability guidance. Adds seven AL reliability rules"
- [#251 Clarify 20-character limit for assignable permission set names](../../../../changes/bcquality/251.md) (code change): "Includes best practice showing full names with prefix/affix must fit 20 characters"
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md) (code change): "Guidance added for event and interface compatibility patterns, covering enum unknown value handling"
- [Vibe coding: yes or no?](../../../../posts/demiliani-com/12368.md) (community post): "ai-assisted coding; developer skills; code quality; llm tools"
- [GitHub Copilot sessions: obtaining tips for better usage.](../../../../posts/demiliani-com/13908.md) (community post): "GitHub Copilot sessions: obtaining tips for better usage"
- [Weekly Review: Business Central AL Development – June 7–13, 2026](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-june-7-13-2026--e3fab4ba38.md) (community post): "AL performance hot paths improve dramatically by batching stream I/O, using TextBuilder"
- [When “Errors” Don’t Stop the Process: A Hidden Risk in Business Central](../../../../posts/miljan-rs/966.md) (community post): "Safe usage pattern: validate first with error collection"
- [Get the new BCQuality plugin for VS Code!](../../../../posts/nataliekarolak-com/4271.md) (community post): "helps AI agents and AL developers generate better code for Business Central"
- [Introducing the “No Shortcuts” Series: The 100% Correct Way to Develop for Business Central](../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-introducing-the-no-shortcuts-series-the-100-correct-way-to-develop-for-b--ea07ff0b07.md) (community post): "Shortcuts in development create technical debt and upgrade problems tomorrow"
- [BC Friday Tips #68 Always Use Field Validation](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-68-always-use-field-validation--cd6c5b4b3a.md) (community post): "Field validation in Business Central extensions ensures all business logic runs"
- [BCQuality: A Shared Quality Bar for AL Code, Built for Agents](../../../../posts/thinkaboutit-be/8132.md) (community post): "organizes domain-specific rules in markdown files filtered by BC version"
- [Dynamics 365 Business Central: Suggested Abbreviations](../../../../posts/yzhums-com/75344.md) (community post): "Gives file-naming abbreviations for AL object types"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
