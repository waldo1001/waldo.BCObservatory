---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
type: topic
title: Best practices
summary: "Best practices for developing Business Central extensions: AL code style and deprecation, restrictions to avoid, testing, performance, security, telemetry, connectivity app requirements, and user scenario documentation. It answers how to write, test, secure and submit extensions to Marketplace."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:54:34.022Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 433b81cfba098a94ac539db0a85a20f3f9c23b92227e68abd9569121c6a66d5c
evidence:
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
  guidelines: []
  changes:
    - change/bcapps/10514
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: eaa6ed8c79aa4a9f6ef08300f6537b69d953326e78b7456545701d47f00a6f3d
narrative: generated
---

# Best practices

> Best practices for developing Business Central extensions: AL code style and deprecation, restrictions to avoid, testing, performance, security, telemetry, connectivity app requirements, and user scenario documentation. It answers how to write, test, secure and submit extensions to Marketplace.

Path: [Development](../../development.md) > [Rules, guidelines, and best practices](../rules-guidelines-and-best-practices.md) > Best practices · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section collects guidance for developers building Business Central extensions. Five subtopics cover the core areas: AL code (naming, file structure, formatting, obsolete attributes and CLEAN symbols, prefix and suffix rules), Restrictions (what AL code should avoid), Testing (a Customer Rewards sample and the Application Test Toolkit), Performance (troubleshooting and AL guidance) and Security (the layered security model and Azure Key Vaults).

Three standalone pages cover other needs. One explains how to add custom telemetry signals for usage, errors and performance, using Application Insights or the Event Log. One lists requirements for connectivity apps in Business Central online. One sets rules for user scenario documentation that Microsoft validation teams use to test extensions.

Start with AL code for conventions, then Testing and the scenario documentation page if you plan to publish to Marketplace. Use Performance, Security and telemetry when hardening an app for production.

## Key points

- AL code pages cover naming, file structure, formatting, prefix and suffix rules, and deprecation with obsolete attributes and CLEAN symbols.
- Marketplace submission has validation rules for AL code and testing steps to complete before validation.
- Restrictions: avoid UI in web service objects, the obsolete OnCompanyOpen event, and the deprecated OnBeforeCompanyOpen and OnAfterCompanyOpen events, to prevent sign-in errors, login slowdowns and web service exceptions.
- Testing guidance uses a Customer Rewards sample extension tested with the Application Test Toolkit.
- Performance troubleshooting follows three steps: measure, locate the bottleneck, eliminate it. Guidance covers pages, web services, reports, AL code, data access and testing.
- Security covers authentication, authorization, encryption, auditing and change logging, plus Azure Key Vaults for extension secrets.
- Telemetry can be built into apps with custom signals for usage, errors and performance, sent to Application Insights or the Event Log.
- Connectivity apps listed in Business Central online need app compatibility, 85% test coverage, sales volume thresholds, onboarding framework use and regulatory compliance such as PSD2 licensing; the page references 2022 release wave 2.

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

- [#10514 Ruleset hardening: promote AS0022, AA0087, AW0003, AA0203, AL0717 to Error](../../../../changes/bcapps/10514.md) (code change): "Five AL analyzer rules moved back to Error severity in the ruleset hierarchy"
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

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
