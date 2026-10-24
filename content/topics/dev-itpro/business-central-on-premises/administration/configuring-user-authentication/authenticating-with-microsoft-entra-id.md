---
id: topic/dev-itpro/business-central-on-premises/administration/configuring-user-authentication/authenticating-with-microsoft-entra-id
type: topic
title: Authenticating with Microsoft Entra ID
summary: Microsoft Entra ID authentication for Business Central on-premises. It covers the available protocols (OpenID Connect and WS-Federation), how to configure each, and how they relate across versions. Use it to choose a method, set up single sign-on, or plan a migration.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:08.949Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b196cf64bce03955116ed020b90d3076c6eb52b6a20572c53a7f113dfe3d4e4c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-overview
    title: Authenticating Business Central Users with Microsoft Entra ID
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-openid-connect
    title: Configure Microsoft Entra authentication with OpenID Connect
    date: "2025-01-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-active-directory
    title: User Authentication with Microsoft Entra ID for Single Sign-on
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-openid-connect
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-active-directory
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration/configuring-user-authentication
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Configuring user authentication
  - Authenticating with Microsoft Entra ID
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration/configuring-user-authentication
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1bdd7b5764f5d203925f8e39e765010c4995ac790224de2707107b47b7f681d3
narrative: generated
---

# Authenticating with Microsoft Entra ID

> Microsoft Entra ID authentication for Business Central on-premises. It covers the available protocols (OpenID Connect and WS-Federation), how to configure each, and how they relate across versions. Use it to choose a method, set up single sign-on, or plan a migration.

Path: [Business Central on-premises](../../../business-central-on-premises.md) > [Administration](../../administration.md) > [Configuring user authentication](../configuring-user-authentication.md) > Authenticating with Microsoft Entra ID · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section explains how Business Central on-premises users can sign in through Microsoft Entra ID. It starts with an overview page that compares the two protocols, OpenID Connect and WS-Federation, and describes migration paths. It also notes the effect on Excel add-in, Power BI, Outlook add-in and service-to-service scenarios.

Two configuration pages follow. One covers OpenID Connect setup, which includes the Entra tenant, application, security certificates, single sign-on, multitenant deployment and OData web services. The other covers WS-Federation, which applies to version 21 and earlier and is replaced by OpenID Connect in version 22 and later.

Start with the overview page to choose a protocol for your version. Then follow the matching configuration page.

## Key points

- Two protocols are described: OpenID Connect and WS-Federation.
- WS-Federation applies to version 21 and earlier and is replaced by OpenID Connect in version 22 and later.
- The OpenID Connect page covers versions 20 to 22 and the 2022 release wave 1.
- OpenID Connect setup involves the Entra tenant and application, security certificates, single sign-on, multitenant deployment and OData web services.
- WS-Federation setup steps: create an Entra tenant, register an application, associate users, configure the server instance, then set up web clients and tenants.
- WS-Federation setup also covers web service accounts.
- The overview covers migration paths and effects on Excel, Power BI, Outlook add-in and service-to-service authentication.

## Learn pages

- [Authenticating Business Central Users with Microsoft Entra ID](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-overview): Get an overview about using Microsoft Entra authentication in Business Central.
  - Microsoft Entra ID provides cloud-based identity and access for Business Central applications
  - Microsoft Entra authentication enables single sign-on integration with Excel, Outlook, Power BI, and Power Automate
  - Status: OpenID Connect supported from version 20; WS-Federation deprecated in favor of OpenID Connect
  - Version 19 and earlier support only WS-Federation authentication
  - Step: To switch version 20 or 21 from WS-Federation to OpenID Connect, enable ID tokens on registered application in Azure portal
  - Step: Configure server with ValidAudiences parameter and webserver with AadApplicationId and AadAuthorityUri parameters
- [Configure Microsoft Entra authentication with OpenID Connect](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-openid-connect): Learn how to authentication Business Central users by using Microsoft Entra ID with OpenID Connect.
  - Prerequisite: Obtain and set up security certificates on Business Central deployment for secure WAN connections
  - Step: Create Microsoft Entra tenant by signing up for Microsoft 365 plan or Azure subscription
  - Step: Register Business Central application in Microsoft Entra tenant specifying name, account types, and redirect URI
  - Step: Set ID tokens for implicit grant and hybrid flows in application authentication settings
  - Step: Associate each Microsoft Entra user accessing Business Central with account having authentication email
  - Step: Configure server instance credential type to AccessControlService and set Microsoft Entra settings
  - Step: Configure web server components with AAD application ID and authority URI
  - For multitenant deployments using different Azure tenants, register app on one tenant and make it multitenant
- [User Authentication with Microsoft Entra ID for Single Sign-on](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-active-directory): Associate an existing Microsoft account with user account to achieve single sign-on between the Web client and Microsoft 365.
  - Status: WS-Federation support deprecated; removed in 2023 release wave 1 (version 22) and later
  - Status: OpenID Connect introduced in 2022 release wave 1 (version 20); recommended replacement
  - Prerequisite: Security certificates required on server and client computers to secure connections
  - Step: Create or obtain Microsoft Entra tenant for managing user accounts and app registration
  - Step: Register Business Central application in Microsoft Entra tenant with redirect URI and application ID
  - Step: Associate each Business Central user with their Microsoft Entra user principal name as authentication email
  - Step: Configure server instance with WS-Federation login endpoint and metadata location parameters
  - Limit: WS-Federation no longer supported in version 22 and later; must migrate to OpenID Connect

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
