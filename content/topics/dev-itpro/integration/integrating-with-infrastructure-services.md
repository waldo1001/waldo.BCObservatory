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
  at: "2026-10-07T15:52:42.721Z"
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
  objects:
    - object/page/1
    - object/page/119
    - object/page/774
    - object/page/6300
    - object/page/6301
    - object/page/6302
    - object/page/8930
    - object/page/9061
    - object/page/9062
    - object/page/9069
    - object/page/9800
    - object/page/9802
    - object/page/9807
    - object/page/9808
    - object/page/9816
    - object/page/9818
    - object/page/9855
    - object/page/9862
    - object/page/9868
    - object/page/9869
    - object/page/9871
    - object/page/9872
    - object/page/9873
    - object/page/9874
    - object/page/9875
    - object/page/9877
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
  code: 26
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

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1 "Company Information"](../../../objects/page/1.md) · on [Table 79 "Company Information"](../../../objects/table/79.md)
- [Page 119 "User Setup"](../../../objects/page/119.md) · on [Table 91 "User Setup"](../../../objects/table/91.md)
- [Page 774 "User Details"](../../../objects/page/774.md) · captioned "Users" · on [Table 774 "User Details"](../../../objects/table/774.md)
- [Page 6300 "Azure AD App Setup Wizard"](../../../objects/page/6300.md) · captioned "Set Up Microsoft Entra ID"
- [Page 6301 "Azure AD App Setup Part"](../../../objects/page/6301.md) · captioned "<Microsoft Entra application Setup Part>" · on [Table 6300 "Azure AD App Setup"](../../../objects/table/6300.md)
- [Page 6302 "Azure AD Access Dialog"](../../../objects/page/6302.md) · captioned "Microsoft Entra service permissions"
- [Page 8930 "Email View Policy List"](../../../objects/page/8930.md) · captioned "User Email View Policies" · on [Table 8930 "Email View Policy"](../../../objects/table/8930.md)
- [Page 9061 "Plan Configuration List"](../../../objects/page/9061.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../objects/table/9017.md)
- [Page 9062 "User Security Activities"](../../../objects/page/9062.md) · on [Table 9062 "User Security Status"](../../../objects/table/9062.md)
- [Page 9069 "Plan Configuration Card"](../../../objects/page/9069.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../objects/table/9017.md)
- [Page 9800 "Users"](../../../objects/page/9800.md)
- [Page 9802 "Permission Sets"](../../../objects/page/9802.md) · on [Table 9009 "Permission Set Buffer"](../../../objects/table/9009.md)
- [Page 9807 "User Card"](../../../objects/page/9807.md)
- [Page 9808 "User Permission Sets"](../../../objects/page/9808.md)
- [Page 9816 "Permission Set by User"](../../../objects/page/9816.md)
- [Page 9818 "User Security Status List"](../../../objects/page/9818.md) · captioned "User Security Status" · on [Table 9062 "User Security Status"](../../../objects/table/9062.md)
- [Page 9855 "Permission Set"](../../../objects/page/9855.md) · on [Table 9862 "PermissionSet Buffer"](../../../objects/table/9862.md)
- [Page 9862 "Expanded Permissions"](../../../objects/page/9862.md)
- [Page 9868 "Security Group Permission Sets"](../../../objects/page/9868.md)
- [Page 9869 "Security Group Members"](../../../objects/page/9869.md) · on [Table 9021 "Security Group Member Buffer"](../../../objects/table/9021.md)
- [Page 9871 "Security Groups"](../../../objects/page/9871.md) · on [Table 9022 "Security Group Buffer"](../../../objects/table/9022.md)
- [Page 9872 "New Security Group"](../../../objects/page/9872.md)
- [Page 9873 "Copy Security Group"](../../../objects/page/9873.md)
- [Page 9874 "Permission Set By Sec. Group"](../../../objects/page/9874.md) · captioned "Permission Set by Security Group"
- [Page 9875 "Permission Set Assignments"](../../../objects/page/9875.md)
- [Page 9877 "Security Group Lookup"](../../../objects/page/9877.md) · captioned "Available Security Groups" · on [Table 9022 "Security Group Buffer"](../../../objects/table/9022.md)

Learn also names 4 objects with no object page: page/9173, page/9830, page/9831, page/9838.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
