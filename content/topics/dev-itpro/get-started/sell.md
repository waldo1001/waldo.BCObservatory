---
id: topic/dev-itpro/get-started/sell
type: topic
title: Sell
summary: The Sell section covers how partners resell Business Central Online, sell apps through Marketplace, onboard customers, and customize the product. It answers questions about reseller enrollment, licensing, app plans and entitlements, onboarding tools, and configuration packages.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:04.817Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5c7feb81888fbf9a03ba4d126a8e6f02f37200b2856249f6cda8f7bf18c007eb
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-customizing-overview
    title: Customizing Business Central
    date: "2021-06-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/get-started-online
    title: Get started as a reseller of Business Central Online
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences
    title: Onboarding experiences
    date: "2025-01-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sell-apps-appsource
    title: Selling Business Central apps through Marketplace
    date: "2024-04-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages
    title: Set Up Company Configuration Packages
    date: "2025-12-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-customizing-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/get-started-online
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sell-apps-appsource
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages
  objects:
    - object/page/2500
    - object/page/8610
    - object/page/8613
    - object/page/8614
    - object/page/8615
    - object/page/8620
    - object/page/8632
  features: []
  topics:
    - topic/dev-itpro/get-started
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Sell
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/get-started
children: []
coverage:
  learn: 5
  code: 7
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2500
  - 2502
  - 8610
  - 8613
  - 8614
  - 8615
  - 8620
  - 8632
member_hash: f0167aa20d54310833678e3422060eddc2a21de0c60859fb20295332ee52c400
narrative: generated
---

# Sell

> The Sell section covers how partners resell Business Central Online, sell apps through Marketplace, onboard customers, and customize the product. It answers questions about reseller enrollment, licensing, app plans and entitlements, onboarding tools, and configuration packages.

Path: [Get started](../get-started.md) > Sell · tier official · system none · narrative reviewed (checked by Opus)

## Overview

Sell is a set of pages for partners and administrators who bring Business Central to customers. It covers becoming a reseller of Business Central Online, selling apps commercially through Marketplace, helping new customers get productive, and tailoring the product to their needs.

The pages fit together along the sales path. Start with the reseller guide for partner enrollment, go-to-market, customer onboarding, and how licensing differs from on-premises. Then use the configuration packages page to speed up standard company setups, and the onboarding experiences page to guide new users. The Marketplace page is for partners who distribute apps, and the customization page covers tailoring the interface and features.

## Key points

- Reseller guide covers Microsoft Partner Network, Cloud Solution Provider, the indirect reseller model, delegated administrator access, and Partner Center.
- The reseller guide also explains licensing differences from on-premises and customer onboarding.
- Company configuration packages are reusable deployment templates, built with configuration templates, a worksheet, a questionnaire, master data import, and RapidStart file export.
- Onboarding tools for partners include a welcome banner, onboarding checklist, teaching tips, in-app tours, and signup context.
- Selling apps through Marketplace involves enabling transactability, defining plans, creating entitlements, and managing per-user licensing.
- Marketplace topics include side-by-side support, free trials, and pricing models; the page references 2023 release wave 2.
- Customization options include profiles, experience settings, colored cue indicators, app installation, and page personalization.

## Learn pages

- [Customizing Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-customizing-overview): Read about the different ways of customizing Business Central to improve access to functionality and features you need most as suits your daily work.
- [Get started as a reseller of Business Central Online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/get-started-online): Learn about how to get started as a reselling partner of Dynamics 365 Business Central online, how to become a partner, and how to onboard customers.
  - Prerequisite: Resellers must have a Microsoft Partner ID and enroll in the Cloud Solution Provider program to sell Business Central online.
  - Resellers access Microsoft go-to-market benefits, marketing assets, and branding resources through Partner Network.
  - Resellers can create trial environments from content at cdx.transform.microsoft.com for demonstration purposes.
  - Both internal admins and delegated admins can assign licenses to users in Microsoft 365 admin center to move from trial to paid subscription.
  - Permissions: Resellers serve as administrators of customer tenants and are the first line of support for triaging and resolving issues.
  - In online model, resellers order through indirect provider portals and manage customers in Partner Center; no license file generation needed.
  - CSP program region availability restricts resellers to selling offers within their company's geographic region.
- [Onboarding experiences](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/onboarding-experiences): As a partner, you can get your customers up to speed in a hurry with the right onboarding story. Learn about checklists and teaching tips in the onboarding framework.
  - Onboarding framework provides consistent experience for introducing users to the product itself across all users
  - Framework includes four components: welcome banner, checklist, teaching tips and tours, and signup context parameter
  - Welcome banner helps new users by presenting consistent onboarding without blocking product exploration
  - Teaching tips and tours educate users about pages and concepts in a sequential manner
  - Signup context enables partners to create customer-centric onboarding by passing profile information to Business Central
- [Selling Business Central apps through Marketplace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sell-apps-appsource): Learn how to enable transactability in Marketplace and through CSP for Business Central apps.
- [Set Up Company Configuration Packages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/set-up-standard-company-configuration-packages): Streamline your implementation process by turning a set of company types you use with most customers into company configuration packages available for reuse.
  - Configuration packages contain setup data for a company that can be reused when creating new companies.
  - Limit: Tables with posted entries like customer, vendor, and item ledger entries cannot be imported into configuration packages.
  - Permissions: Export requires Direct Read permissions; import requires Direct Insert and Direct Modify permissions for all included tables.
  - Limit: Both databases must have the same schema with identical table structure, primary keys, and field data types for successful import.
  - Limit: Special characters like percent, ampersand, and angle brackets in field names can cause XML processor to remove them and create duplicate names.
  - BLOB fields use base64 encoding by default; manual conversion required before export if using different encoding.
  - Configuration questionnaires gather setup information from customers by converting setup table fields into formatted questions.
  - Configuration templates provide default settings for master data import like customers, vendors, contacts, or items.
  - In the observatory: [Page 8611 "Config. Question Area"](../../../objects/page/8611.md), [Page 8624 "Config. Package Fields"](../../../objects/page/8624.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 2500 "Extension Management"](../../../objects/page/2500.md)
- [Page 8610 "Config. Questionnaire"](../../../objects/page/8610.md) · captioned "Configuration Questionnaire" · on [Table 8610 "Config. Questionnaire"](../../../objects/table/8610.md)
- [Page 8613 "Config. Question Areas"](../../../objects/page/8613.md) · on [Table 8611 "Config. Question Area"](../../../objects/table/8611.md)
- [Page 8614 "Config. Package Card"](../../../objects/page/8614.md) · on [Table 8623 "Config. Package"](../../../objects/table/8623.md)
- [Page 8615 "Config. Packages"](../../../objects/page/8615.md) · captioned "Configuration Packages" · on [Table 8623 "Config. Package"](../../../objects/table/8623.md)
- [Page 8620 "Config. Template List"](../../../objects/page/8620.md) · captioned "Configuration Templates" · on [Table 8618 "Config. Template Header"](../../../objects/table/8618.md)
- [Page 8632 "Config. Worksheet"](../../../objects/page/8632.md) · captioned "Configuration Worksheet" · on [Table 8622 "Config. Line"](../../../objects/table/8622.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
