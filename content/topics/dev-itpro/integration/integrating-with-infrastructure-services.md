---
id: topic/dev-itpro/integration/integrating-with-infrastructure-services
type: topic
title: Integrating with infrastructure services
summary: "Integration of Business Central with infrastructure services: Microsoft Entra ID, security groups, user and license setup, multifactor authentication, Azure service tags, Application Insights telemetry, and Universal Print. It answers questions on access control, network restrictions, monitoring, and printing setup."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:41.815Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f76815929a06c4b8315450a7e24a6e3ecb4bb4285c2bea150361a05f6ad311c2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-security-groups
    title: Control Access Using Security Groups
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    title: Create users according to licenses
    date: "2026-07-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-infrastructure-overview
    title: Integrating with infrastructure services
    date: "2024-02-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    title: Monitoring and Analyzing Telemetry
    date: "2025-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/multifactor-authentication
    title: Multifactor authentication (MFA) for Business Central
    date: "2023-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print
    title: Set Up Universal Print Printers
    date: "2024-06-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-service-tags
    title: Use Azure security service tags
    date: "2025-07-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-security-groups
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-infrastructure-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/multifactor-authentication
    - https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-service-tags
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12064
learn_toc_path:
  - Integration
  - Integrating with infrastructure services
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1
  - 119
  - 774
  - 6300
  - 6301
  - 6302
  - 8930
  - 9061
  - 9062
  - 9069
  - 9173
  - 9800
  - 9802
  - 9807
  - 9808
  - 9816
  - 9818
  - 9830
  - 9831
  - 9838
  - 9855
  - 9862
  - 9868
  - 9869
  - 9871
  - 9872
  - 9873
  - 9874
  - 9875
  - 9877
member_hash: 13ef2685022706c7b7a6ea8b64191faeb4bfc4c5959f22d9a0eb31205e98db27
narrative: generated
---

# Integrating with infrastructure services

> Integration of Business Central with infrastructure services: Microsoft Entra ID, security groups, user and license setup, multifactor authentication, Azure service tags, Application Insights telemetry, and Universal Print. It answers questions on access control, network restrictions, monitoring, and printing setup.

Path: [Integration](../integration.md) > Integrating with infrastructure services · tier official · system integration · narrative reviewed by Opus

## Overview

This area covers how Business Central connects to Azure and identity infrastructure. It spans identity and access (users by license, security groups, multifactor authentication), network control (Azure security service tags), monitoring (telemetry), and printing (Universal Print).

The section has no subtopics. The page "Integrating with infrastructure services" is the entry point and introduces Entra ID, service tags, Application Insights, and Universal Print. From there, pick the page for your task: creating users according to licenses and controlling access with security groups for permissions; the MFA page for added sign-in security; the service tags page for firewall rules; the telemetry page for monitoring; and the Universal Print page for printer setup.

Several pages cover both online and on-premises deployments, and some mention delegated admin access. Check the deployment type on each page before you apply a setup.

## Key points

- Security groups apply permissions to all members, support Microsoft Entra ID and Windows Active Directory, and allow company-specific and multi-company access.
- Users are created according to licenses, with permission sets, license assignment, security groups, user groups, and delegated admin covered for online and on-premises.
- MFA through Microsoft Entra ID supports phone call, text message, mobile app notification, and one-time password, with conditional access policy support.
- The Dynamics365BusinessCentral Azure service tag restricts network access to and from Business Central in firewall and network security group rules.
- Telemetry can be enabled at environment and app level, viewed in Power BI, analyzed with KQL, and used for alerts and custom telemetry.
- Universal Print setup uses the Universal Print integration extension, printer management page, universal print connector, print shares, and printer authorization.
- Universal Print setup involves configuration in Azure and applies to online and on-premises deployments.

## Learn pages

- [Control Access Using Security Groups](https://learn.microsoft.com/dynamics365/business-central/ui-security-groups): This article describes how to use security groups to define user permissions.
- [Create users according to licenses](https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions): Describes how to add users to Business Central online or on-premises based on licenses.
- [Integrating with infrastructure services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-infrastructure-overview): Learn how Business Central integrates with infrastructure services.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.
- [Multifactor authentication (MFA) for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/multifactor-authentication): This article explains how to add multifactor authentication (MFA) when your solution uses Microsoft Entra ID as authentication mechanism.
- [Set Up Universal Print Printers](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print): Learn how you can use Universal Print to provide cloud printing in Business Central.
- [Use Azure security service tags](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-service-tags): List of Azure service tags for Dynamics 365 Business Central

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12064 Support SharePoint paths containing hash and percent characters](../../../changes/bcapps/12064.md) (code change): "SharePoint connector now supports file paths containing hash and percent characters"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1, 119, 774, 6300, 6301, 6302, 8930, 9061, 9062, 9069, 9173, 9800, 9802, 9807, 9808, 9816, 9818, 9830, 9831, 9838, 9855, 9862, 9868, 9869, 9871, 9872, 9873, 9874, 9875, 9877.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
