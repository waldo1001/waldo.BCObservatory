---
id: topic/dev-itpro/development/development-environment
type: topic
title: Development environment
summary: The Development environment section covers setting up and using the AL development environment for Business Central in Visual Studio Code. It answers questions on configuration, projects and workspaces, code analysis, compiling, publishing, debugging, testing, sandboxes, app.json and apps, and supporting tools.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d1421f14fc5083453c75f66704bf3401e7df6b29da6a46f146029a821e73cf4a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-resources
    title: Adding and Accessing Resources in Business Central extensions
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-data-for-extension
    title: Adding data for Extensions
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-code-analysis-performance-configuration
    title: AL Code Analysis Performance Configuration
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/diagnostics/diagnostics-overview
    title: AL diagnostics
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-extension-configuration
    title: AL Language extension configuration
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    title: Analyze AL Performance with the AL Profiler
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-test-application-example-purchase-invoice-discounts
    title: Application Testing Example to Test Purchase Invoice Discounts
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop
    title: AppSourceCop analyzer
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-attach-debug-next
    title: Attach and Debug Next in Business Central
    date: "2026-10-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-choosing-runtime
    title: Choose an AL Runtime Version for Business Central
    date: "2026-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/codecop
    title: CodeCop analyzer
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-compilation-scope-overview
    title: Compilation scope overview
    date: "2025-05-18"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    title: Debug AL Code in Visual Studio Code
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debug-upgrade-install-code
    title: Debug Upgrade and Install Code in AL
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-developing-for-multiple-platform-versions
    title: Develop for multiple platform versions
    date: "2024-03-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-directory-app-json
    title: Directory.app.props.json file
    date: "2025-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/app-faq-dependencies-libraries
    title: FAQ about Library & Dependency Apps in Business Central
    date: "2021-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages
    title: Inspecting pages
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-files
    title: JSON Files for AL Extension Projects
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-json-launch-file
    title: Launch JSON Settings for Business Central AL
    date: "2026-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migration-json-file
    title: Migration JSON file
    date: "2025-05-02"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-optimize-visual-studio-code
    title: Optimize Visual Studio code editing and building performance
    date: "2022-06-22"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/pertenantextensioncop
    title: PerTenantExtensionCop analyzer
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection
    title: Resource exposure policy setting
    date: "2024-01-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-rule-set-syntax-for-code-analysis-tools
    title: Ruleset for the code analysis tool
    date: "2022-06-24"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-running-container-development
    title: Running a container-based development environment
    date: "2023-10-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sandbox-overview
    title: Sandbox environments for Dynamics 365 Business Central development
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging-conditional-breakpoints
    title: Set Conditional Breakpoints in AL
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sign-extension
    title: Sign an app package file
    date: "2025-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging
    title: Snapshot debugging
    date: "2026-09-25"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-txt2al-tool
    title: The Txt2Al Conversion Tool
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development
    - topic/dev-itpro/development/development-environment/configure-the-development-environment
    - topic/dev-itpro/development/development-environment/configure-projects-and-workspaces
    - topic/dev-itpro/development/development-environment/code-analysis
    - topic/dev-itpro/development/development-environment/compile-publish-and-debug
    - topic/dev-itpro/development/development-environment/testing
    - topic/dev-itpro/development/development-environment/work-in-sandboxes
    - topic/dev-itpro/development/development-environment/working-with-apps
    - topic/dev-itpro/development/development-environment/other-tools
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/13761
    - post/sshadows-dk/https-sshadows-dk-blog-business-central-on-linux--f313e38282
    - post/vjeko-com/https-vjeko-com-2026-03-09-al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days--fb9c8e152a
    - post/yzhums-com/64148
    - post/yzhums-com/76570
  guidelines: []
  changes:
    - change/bcapps/10212
    - change/bcapps/6857
learn_toc_path:
  - Development
  - Development environment
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development
children:
  - topic/dev-itpro/development/development-environment/configure-the-development-environment
  - topic/dev-itpro/development/development-environment/configure-projects-and-workspaces
  - topic/dev-itpro/development/development-environment/code-analysis
  - topic/dev-itpro/development/development-environment/compile-publish-and-debug
  - topic/dev-itpro/development/development-environment/testing
  - topic/dev-itpro/development/development-environment/work-in-sandboxes
  - topic/dev-itpro/development/development-environment/working-with-apps
  - topic/dev-itpro/development/development-environment/other-tools
coverage:
  learn: 54
  code: 0
  video: 0
  blog: 5
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
member_hash: da49025aadcfcc611b6282b6727a1d16f1363db17eb2ece18a53b2c5ba32e22e
narrative: generated
---

# Development environment

> The Development environment section covers setting up and using the AL development environment for Business Central in Visual Studio Code. It answers questions on configuration, projects and workspaces, code analysis, compiling, publishing, debugging, testing, sandboxes, app.json and apps, and supporting tools.

Path: [Development](../development.md) > Development environment · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section is a set of subtopics that follow the AL development workflow. It starts with configuring the environment (VS Code AL Language extension settings, performance tuning, container and GitHub Codespaces setups, runtime targeting) and configuring projects and workspaces (multi-root workspaces, per-folder settings, project references in app.json).

Next come the day-to-day tasks: code analysis, compiling, publishing and debugging (breakpoints, attach and snapshot debugging, the AL Profiler, package signing), and testing (test codeunits, test pages, test runners, mocking HttpClient, performance testing, page scripting). Sandboxes and Working with apps cover environments (online versus container, Docker and BCContainerHelper, user plans and entitlements) and how apps are identified and packaged through app.json.

Start with Configure the development environment if you are setting up for the first time. Use Other tools (Page Inspection, Txt2Al, table data viewer) when you need to inspect pages or tables or convert C/AL code. The Code analysis subtopic has no summary here, so check its pages directly.

## Key points

- Configuration covers VS Code AL Language extension settings, performance tuning, container and GitHub Codespaces setups, runtime targeting, and resource exposure policy.
- Multi-root workspaces, per-folder settings, and project references in app.json are covered, including symbol resolution and recovery from publishing failures.
- Debugging topics include breakpoints, attach debugging, snapshot debugging, and the AL Profiler.
- Compile and publish pages also cover compilation scope, package signing, Entra authentication for on-premises, and RAD publishing.
- Testing covers AL test codeunits, test methods, handlers, test pages, test runners, mocking HttpClient calls, performance testing, page scripting, and app validation FAQs.
- Sandbox pages explain online versus container sandboxes, running containers with Docker and BCContainerHelper, and testing under different user plans and entitlements.
- Working with apps explains app.json settings (app ID, version, runtime version), bundling resources and data, and library and dependency apps.
- Other tools: Page Inspection, Txt2Al for converting C/AL objects (NAV 14 code) to AL, and the table data viewer for tenant tables.

## Subtopics

- [Configure the development environment](development-environment/configure-the-development-environment.md) (10 pages)
- [Configure projects and workspaces](development-environment/configure-projects-and-workspaces.md) (2 pages)
- [Code analysis](development-environment/code-analysis.md) (9 pages)
- [Compile, publish, and debug](development-environment/compile-publish-and-debug.md) (12 pages)
- [Testing](development-environment/testing.md) (11 pages)
- [Work in sandboxes](development-environment/work-in-sandboxes.md) (3 pages)
- [Working with apps](development-environment/working-with-apps.md) (5 pages)
- [Other tools](development-environment/other-tools.md) (3 pages)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10212 Add SetReferenceType method to SignedXml and SignedXmlImpl (#10139)](../../../changes/bcapps/10212.md) (code change): "SetReferenceType method is added to the SignedXml codeunit to allow callers"
- [#6857 [BC Idea][TableInformation] : Enhance Indexes List Part with SIFT details, visual indicators, and improved index management #6856](../../../changes/bcapps/6857.md) (code change): "Indexes List Part page gains SIFT details, visual indicators, and improved index management"
- [Be careful with Visual Studio Code extensions…](../../../posts/demiliani-com/13761.md) (community post): "Be careful with Visual Studio Code extensions"
- [Business Central on Linux? Here, hold my beer!](../../../posts/sshadows-dk/https-sshadows-dk-blog-business-central-on-linux--f313e38282.md) (community post): "Running Business Central on Linux via Wine required implementing missing Windows APIs"
- [AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days](../../../posts/vjeko-com/https-vjeko-com-2026-03-09-al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days--fb9c8e152a.md) (community post): "App pools now display accurate pool-wide consumption in Range Explorer and Assignment Explorer"
- [How to connect to Dynamics 365 Business Central On-Premises in VS Code (Use the On-Premises version for customization)](../../../posts/yzhums-com/64148.md) (community post): "configure VS Code to connect to a Business Central On-Premises environment for AL development"
- [Business Central 2026 release wave 2 (BC29): Retained DEV extensions (DEV extensions remain installed during environment update)](../../../posts/yzhums-com/76570.md) (community post): "DEV extensions published from VS Code or created with Designer"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 9 objects with no object page: page/149000, page/149001, page/149003, page/149004, page/149005, page/149006, page/149007, page/149008, page/149009.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
