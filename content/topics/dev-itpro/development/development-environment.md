---
id: topic/dev-itpro/development/development-environment
type: topic
title: Development environment
summary: "Development environment for Business Central AL work: setting up VS Code, projects and workspaces, sandboxes, compiling, publishing, debugging, code analysis, testing, app packaging and extra tools. It answers setup, configuration, and day-to-day development workflow questions."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:01:01.729Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 884e848f809c04fe926ef7a6bd70b7fca8c83dbbd5d9e62af86a6bf5e663c7de
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
    - change/bcapps/10449
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

> Development environment for Business Central AL work: setting up VS Code, projects and workspaces, sandboxes, compiling, publishing, debugging, code analysis, testing, app packaging and extra tools. It answers setup, configuration, and day-to-day development workflow questions.

Path: [Development](../development.md) > Development environment · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers everything needed to build AL extensions for Business Central, from preparing the tools to checking the finished app. It starts with configuring the AL Language extension in Visual Studio Code, including performance tuning, container and GitHub Codespaces setups, runtime targeting, and resource exposure policy.

From there the pages follow the development cycle. Projects and workspaces cover multi-root workspaces and project references in app.json. Sandboxes explain online versus container environments. Working with apps covers app identity, runtime version, and packaging. Compile, publish, and debug covers breakpoints, snapshot debugging, the AL Profiler, and package signing. Code analysis and Testing support quality checks. Other tools adds Page Inspection, Txt2Al, and the table data viewer.

A good starting point is Configure the development environment, then Work in sandboxes if you need a container-based setup. Go to Compile, publish, and debug or Testing once a project is running.

## Key points

- Configure the development environment covers AL Language extension settings, performance tuning, container and GitHub Codespaces setups, runtime targeting, and resource exposure policy.
- Projects and workspaces: multi-root workspaces, per-folder settings, and project references in app.json, including symbol resolution and recovery from publishing failures.
- Sandboxes: online and container sandboxes differ; containers run with Docker and BCContainerHelper; extensions can be tested under different user plans and entitlements.
- Compile, publish, and debug covers breakpoints, attach and snapshot debugging, the AL Profiler, compilation scope, package signing, Entra authentication for on-premises, and RAD publishing.
- Testing covers test codeunits, methods, test pages, handlers, test runners, running tests in VS Code, mocking HttpClient calls, performance testing, and UI acceptance testing with page scripting.
- Working with apps covers app identity in app.json, runtime version choice, packaging resources and data, and library and dependency apps.
- Other tools: Page Inspection for page structure and data sources, Txt2Al for converting C/AL objects to AL (such as NAV 14 code), and the table data viewer for tenant tables.
- Code analysis is a separate subtopic with 9 pages; open it directly for analyzer details.

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
- [#10449 Remove permission set ref and move the Page Inspector changes to BCApps](../../../changes/bcapps/10449.md) (code change): "Page Inspector changes are moved from Platform into BCApps"
- [Be careful with Visual Studio Code extensions…](../../../posts/demiliani-com/13761.md) (community post): "Be careful with Visual Studio Code extensions"
- [Business Central on Linux? Here, hold my beer!](../../../posts/sshadows-dk/https-sshadows-dk-blog-business-central-on-linux--f313e38282.md) (community post): "Running Business Central on Linux via Wine required implementing missing Windows APIs"
- [AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days](../../../posts/vjeko-com/https-vjeko-com-2026-03-09-al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days--fb9c8e152a.md) (community post): "App pools now display accurate pool-wide consumption in Range Explorer and Assignment Explorer"
- [How to connect to Dynamics 365 Business Central On-Premises in VS Code (Use the On-Premises version for customization)](../../../posts/yzhums-com/64148.md) (community post): "configure VS Code to connect to a Business Central On-Premises environment for AL development"
- [Business Central 2026 release wave 2 (BC29): Retained DEV extensions (DEV extensions remain installed during environment update)](../../../posts/yzhums-com/76570.md) (community post): "DEV extensions published from VS Code or created with Designer"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 9 objects with no object page: page/149000, page/149001, page/149003, page/149004, page/149005, page/149006, page/149007, page/149008, page/149009.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
