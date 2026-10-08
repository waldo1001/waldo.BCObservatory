---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
type: topic
title: Best practices
summary: "Best practices for developing Business Central extensions: AL code conventions, restrictions, testing, performance, security, telemetry, connectivity app requirements and user scenario documentation. It answers how to write, test, secure and prepare extensions for Marketplace validation."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:17:48.858Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b38733944098eb8264c6e17b535aa4be459e1b669fd078fbf9b714c6fdd03fc9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    title: Azure Key Vaults with Business Central
    date: "2021-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    title: Developing telemetry into your Business Central application
    date: "2024-02-09"
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
    - post/stefanmaron-com/https-stefanmaron-com-posts-introducing-the-no-shortcuts-series-the-100-correct-way-to-develop-for-b--ea07ff0b07
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-68-always-use-field-validation--cd6c5b4b3a
  guidelines: []
  changes:
    - change/bcapps/10675
    - change/bcapps/11870
    - change/bcquality/108
    - change/bcquality/114
    - change/bcquality/130
    - change/bcquality/132
    - change/bcquality/133
    - change/bcquality/135
    - change/bcquality/137
    - change/bcquality/175
    - change/bcquality/183
    - change/bcquality/196
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
  blog: 2
  guideline: 0
bc_forms: []
member_hash: eaa6ed8c79aa4a9f6ef08300f6537b69d953326e78b7456545701d47f00a6f3d
narrative: generated
---

# Best practices

> Best practices for developing Business Central extensions: AL code conventions, restrictions, testing, performance, security, telemetry, connectivity app requirements and user scenario documentation. It answers how to write, test, secure and prepare extensions for Marketplace validation.

Path: [Development](../../development.md) > [Rules, guidelines, and best practices](../rules-guidelines-and-best-practices.md) > Best practices · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section collects guidance for developers building Business Central extensions. Five subtopics cover AL code (naming, file structure, formatting, obsolete attributes, Marketplace validation rules), restrictions (what AL code should avoid), testing, performance and security.

Three pages sit directly in the hub. One explains how to add telemetry signals to an application. One lists requirements for connectivity apps published to Marketplace. One defines how to write user scenario documentation so Microsoft validation teams can test an extension.

Start with AL code best practices for the baseline conventions. Then read testing and the scenario documentation page if you plan to publish to Marketplace. Use the performance, security and telemetry pages when troubleshooting or hardening an extension.

## Key points

- AL code guidance covers naming conventions, file structure, formatting, prefix and suffix rules, and deprecation with obsolete attributes and CLEAN symbols.
- Restrictions: avoid UI in web service objects, the obsolete OnCompanyOpen event, and the deprecated OnBeforeCompanyOpen and OnAfterCompanyOpen events, to prevent sign-in errors, login slowdowns and web service exceptions.
- Testing uses a Customer Rewards sample extension tested with the Application Test Toolkit, plus pre-submission checks before Marketplace validation.
- Performance guidance gives a measure, locate, eliminate approach, diagnostic tools, and advice on pages, web services, reports, AL code and data access.
- Security covers authentication, authorization, encryption, auditing and change logging, and using Azure Key Vault for secrets when calling external web services.
- The telemetry page describes logmessage, sendtracetag, custom events, Application Insights integration, event log and feature telemetry.
- Connectivity apps need app compatibility, 85% test coverage, sales volume thresholds and regulatory compliance such as PSD2 licensing. The page references 2022 release wave 2.
- User scenario documentation needs step-by-step guides with screenshots, prerequisite steps, demo data and rapid start packages.

## Subtopics

- [AL code](best-practices/al-code.md) (4 pages)
- [Restrictions](best-practices/restrictions.md) (3 pages)
- [Testing](best-practices/testing.md) (3 pages)
- [Performance](best-practices/performance.md) (2 pages)
- [Security](best-practices/security.md) (2 pages)

## More Learn pages

- [Developing telemetry into your Business Central application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry): This article describes how to add code to application objects that enables you to gather telemetry.
- [Requirements for connectivity apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/connectivity-apps-requirements): Learn about connectivity apps, how they can increase business productivity, and how to get your app listed as a connectivity app.
- [User scenario documentation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-userscenario): Describing how to generate the required scenario document to get your app approved for Marketplace.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10675 Temporarily suppress AS0072 (ObsoleteTag 29.0) on 10 Base App elements for v30 prep](../../../../changes/bcapps/10675.md) (code change): "Pragmas temporarily suppress the AppSourceCop AS0072 error on elements"
- [#11870 Reduce allocations in the "Export to Execl" scenario](../../../../changes/bcapps/11870.md) (code change): "The Export to Excel scenario now allocates less memory by reusing objects"
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md) (code change): "AL review knowledge expanded with new guidance on telemetry, Query objects, AppSource, breaking changes, and security"
- [#114 Document the skill-vs-knowledge boundary so BC facts land in knowledge files](../../../../changes/bcquality/114.md) (code change): "Skills should contain mechanics while knowledge files hold Business Central facts"
- [#130 knowledge(performance): align SetLoadFields placement with AL Guidelines](../../../../changes/bcquality/130.md) (code change): "align SetLoadFields placement with AL Guidelines by placing filters before SetLoadFields"
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md) (code change): "BCQuality guidance refined to reduce false positives in event handling, UI testing, performance analysis"
- [#133 Add TransferFields SkipFieldsNotMatchingType guidance](../../../../changes/bcquality/133.md) (code change): "Good pattern: use explicit field-by-field mapping with Evaluate for type conversions to fail loudly"
- [#135 Correct severe misconception about SetCurrentKey in the knowledge base](../../../../changes/bcquality/135.md) (code change): "Using SetCurrentKey when sorting is unnecessary hurts performance"
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md) (code change): "20 community-authored guidance rules covering agent registration, permissions, profiles"
- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md) (code change): "Nine new AL/BC patterns document best practices for document distribution"
- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md) (code change): "Included bad and good AL code samples for each rule to guide developers"
- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md) (code change): "Strengthen review contracts and add AL reliability guidance. Adds seven AL reliability rules"
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md) (code change): "Guidance added for event and interface compatibility patterns, covering enum unknown value handling"
- [Introducing the “No Shortcuts” Series: The 100% Correct Way to Develop for Business Central](../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-introducing-the-no-shortcuts-series-the-100-correct-way-to-develop-for-b--ea07ff0b07.md) (community post): "Shortcuts in development create technical debt and upgrade problems tomorrow"
- [BC Friday Tips #68 Always Use Field Validation](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-68-always-use-field-validation--cd6c5b4b3a.md) (community post): "Always validate fields to ensure all business logic executes properly"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
