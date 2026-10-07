---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-apps
type: topic
title: Integrating with Microsoft Power Apps
summary: "Integrating Business Central with Power Apps: how to build apps on Business Central data, best practices for canvas apps, sample apps on GitHub, and application lifecycle management for Power Platform solutions. It answers questions on design, development and delivery of Power Apps solutions."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:57.247Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8ec2a84301575f7208afc437979ce44dfe02ff2c704b3ccd584557a0687c3367
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-alm
    title: Application lifecycle management
    date: "2023-04-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-best-practices
    title: Best practices for Power Apps with Business Central
    date: "2023-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-overview
    title: Business Central and Power Apps
    date: "2023-05-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-samples
    title: Sample Power Apps for Business Central
    date: "2023-04-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-alm
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-best-practices
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-samples
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Power Apps
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1e8a92be635f0e32edf1e5b1dca470a5a06c0027dde0320e46df27410561c37c
narrative: generated
---

# Integrating with Microsoft Power Apps

> Integrating Business Central with Power Apps: how to build apps on Business Central data, best practices for canvas apps, sample apps on GitHub, and application lifecycle management for Power Platform solutions. It answers questions on design, development and delivery of Power Apps solutions.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Power Platform](../integrating-with-microsoft-power-platfor.md) > Integrating with Microsoft Power Apps · tier official · system integration · narrative reviewed by Opus

## Overview

This area covers using Power Apps with Business Central data. The introductory page describes what the integration allows: custom UI, AI Builder, augmented and mixed-reality technologies, a mobile app, and Teams integration.

For development guidance, the best practices page covers canvas apps: multi-environment handling, telemetry, error handling, explicit column selection, localization, currency support, image management, and when Power Apps is the right choice. The sample apps page points to GitHub repositories with example apps that show these practices.

For delivery, the application lifecycle management page explains how to keep AL and Power Platform artifacts in one repository using the Al-Go for GitHub template. Start with the overview page, then read the best practices, and look at the samples before setting up lifecycle workflows.

## Key points

- Power Apps can use Business Central data for custom UI, AI Builder, augmented and mixed-reality scenarios, the mobile app, and Teams integration.
- Best practices for canvas apps include multi-environment support, telemetry configuration, and error handling patterns.
- Use explicit column selection when building canvas apps against Business Central.
- Best practices also cover multi-language support, currency formatting, image management, and deciding when to use Power Apps.
- Sample apps in GitHub repositories include a warehouse helper app, a take order app, and a coffee MR app with mixed reality capabilities.
- Application lifecycle management stores AL and Power Platform artifacts in a single repository using the Al-Go for GitHub template.
- Al-Go workflows listed are CI/CD, Create Release, Publish to Environment, Pull Power Platform changes, and Push Power Platform changes.

## Learn pages

- [Application lifecycle management](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-alm): Learn how to use AL-Go to implement application lifecycle management (ALM) for your Power Apps
- [Best practices for Power Apps with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-best-practices): Learn how to best develop Power Apps for Business Central
- [Business Central and Power Apps](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-overview): Get an overview Business Central and Power Apps integration
- [Sample Power Apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-samples): Sample apps that give partners an easy way to get started with building Power Apps

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
