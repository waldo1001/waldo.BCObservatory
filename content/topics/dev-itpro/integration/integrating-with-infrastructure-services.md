---
id: topic/dev-itpro/integration/integrating-with-infrastructure-services
type: topic
title: Integrating with infrastructure services
summary: "Integration of Business Central with Azure and Microsoft infrastructure services: Entra ID users, licenses and security groups, multifactor authentication, Azure security service tags, Application Insights telemetry, and Universal Print. It answers setup and access-control questions for online and on-premises deployments."
tier: official
language: en
system: integration
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
  input_hash: 2db64266647a3f8d2dccfab5ec45611e0a07b61d1c63f901ad88fe6be8a9bcd8
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
    date: "2026-11-02"
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
  videos:
    - video/2vUCR16b85o
    - video/qqWj_2uM0ek
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
  video: 2
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

> Integration of Business Central with Azure and Microsoft infrastructure services: Entra ID users, licenses and security groups, multifactor authentication, Azure security service tags, Application Insights telemetry, and Universal Print. It answers setup and access-control questions for online and on-premises deployments.

Path: [Integration](../integration.md) > Integrating with infrastructure services · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how Business Central connects to surrounding infrastructure. The pages fall into three groups: identity and access (creating users by license, security groups, multifactor authentication), network control (Azure security service tags), and operations and output (telemetry monitoring and Universal Print printers).

For identity, start with "Create users according to licenses" to add users, assign permission sets and licenses, then use "Control Access Using Security Groups" to manage permissions for many users at once. The MFA page explains the extra verification options available through Microsoft Entra ID.

For network and operations, the service tag page shows how to use the Dynamics365BusinessCentral tag in firewall and network security group rules. The telemetry page covers enabling, viewing and alerting on data, and the Universal Print page covers Azure configuration and printer setup in Business Central. The hub page itself is a short index of these topics.

## Key points

- Users can be created and imported from Microsoft 365, then given permission sets and licenses; delegated admin users and user status are also covered.
- Security groups apply permissions to all members, support Microsoft Entra ID and Windows Active Directory, and allow company-specific and multi-company access.
- MFA through Microsoft Entra ID supports phone call, text message, mobile app notification and one-time password, with conditional access policies.
- The Dynamics365BusinessCentral Azure service tag restricts network access to and from Business Central environments in firewall and network security group rules.
- Telemetry can be enabled at environment and app level, viewed in Power BI, analyzed with KQL, and used for alerts and custom telemetry.
- Universal Print setup uses the Universal Print integration extension, the printer management page, a connector, print shares and printer authorization, for online and on-premises.
- Security group pages list versions 25.11, 26.5 and 27.4; telemetry is tied to 2020 release wave 2 and Universal Print to 2021 release wave 1.

## Learn pages

- [Control Access Using Security Groups](https://learn.microsoft.com/dynamics365/business-central/ui-security-groups): This article describes how to use security groups to define user permissions.
- [Create users according to licenses](https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions): Describes how to add users to Business Central online or on-premises based on licenses.
- [Integrating with infrastructure services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-infrastructure-overview): Learn how Business Central integrates with infrastructure services.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.
  - Telemetry can be enabled at environment level or per-extension level to collect operational data in Azure Application Insights.
  - With Business Central 2020 release wave 2 and later, publishers can set Application Insights connection strings in app.json manifest files.
  - Telemetry data is stored in Application Insights Logs tables called traces and pageViews for analysis via Kusto query language.
  - Both online and on-premises Business Central instances can emit telemetry to Azure Application Insights.
  - Free Power BI apps analyze Business Central telemetry; one app covers environments while another covers apps and extensions.
  - Permissions: AL developers can create custom telemetry messages using Feature Telemetry codeunit or LogMessage method from Session class.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../objects/codeunit/8703.md)
- [Multifactor authentication (MFA) for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/multifactor-authentication): This article explains how to add multifactor authentication (MFA) when your solution uses Microsoft Entra ID as authentication mechanism.
- [Set Up Universal Print Printers](https://learn.microsoft.com/dynamics365/business-central/admin-printer-setup-universal-print): Learn how you can use Universal Print to provide cloud printing in Business Central.
- [Use Azure security service tags](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-service-tags): List of Azure service tags for Dynamics 365 Business Central

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12064 Support SharePoint paths containing hash and percent characters](../../../changes/bcapps/12064.md) (code change): "SharePoint connector now supports file paths containing hash and percent characters"
- [Store Files Outside Business Central Using External File Accounts (BC 2025 Wave 1)](../../../videos/2vUCR16b85o.md) (video): "external file storage; azure blob storage; file shares; storage accounts"
- [20260420 - What is GitOps and why should you care](../../../videos/qqWj_2uM0ek.md) (video): "GitOps infrastructure as code; devops; pull-based deployment"

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
