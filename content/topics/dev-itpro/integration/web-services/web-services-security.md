---
id: topic/dev-itpro/integration/web-services/web-services-security
type: topic
title: Web services security
summary: Web services security in Business Central covers authentication options (basic, OAuth, service-to-service), certificates, supported cipher suites for outgoing HTTPS calls, and network restriction with Azure service tags. It answers questions on securing OData and SOAP endpoints and API integrations.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:43.200Z"
  flags: []
generated:
  at: "2026-10-26T06:43:56.210Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f5d038b53afc37737913ac6d800d4cedf5ff85d2fec9bb7b3096f5a2daf61d9c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-supported-cipher-suites
    title: Supported cipher suites
    date: "2021-05-19"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth
    title: Using OAuth to authenticate Business Central Web Services
    date: "2025-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment
    title: Using Security Certificates with Business Central on-premises
    date: "2024-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/automation-apis-using-s2s-authentication
    title: Using Service to Service Authentication
    date: "2025-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/walkthrough-authenticate-web-services-using-oauth
    title: "Walkthrough: Creating a console application that use OAuth to Authenticate Business Central Web Services (OData and SOAP)"
    date: "2022-01-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-security
    title: Web service security
    date: "2024-02-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-supported-cipher-suites
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-service-tags
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/automation-apis-using-s2s-authentication
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/walkthrough-authenticate-web-services-using-oauth
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-security
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/web-services
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/63801
  guidelines: []
  changes:
    - change/bcapps/11171
    - change/bcapps/11967
    - change/bcapps/12133
    - change/bcapps/12194
learn_toc_path:
  - Integration
  - Web services
  - Web services security
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/web-services
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 4cc591df9ed392d40fdbd824d2af29a0ad8b2630152dcb1497a0ce948eb96f88
narrative: generated
---

# Web services security

> Web services security in Business Central covers authentication options (basic, OAuth, service-to-service), certificates, supported cipher suites for outgoing HTTPS calls, and network restriction with Azure service tags. It answers questions on securing OData and SOAP endpoints and API integrations.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > Web services security · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section explains how to secure access to Business Central web services. The main Web service security page gives best practices and lists the authentication options: basic authentication, OAuth, service-to-service authentication, and certificate-based security. Start there to choose an approach.

Detailed pages follow for each option. The OAuth page covers OAuth 2.0 concepts, user impersonation, service-to-service use, and token lifetimes, and a walkthrough builds a console application that gets tokens through Microsoft Entra ID to call OData. The service-to-service page covers unattended integrations with the client credentials flow. For on-premises, a page covers X.509 certificates and chain trust. Two further pages cover supported cipher suites for outgoing HTTPS calls and the Dynamics365BusinessCentral Azure service tag for firewall and network security group rules.

## Key points

- Authentication options include basic authentication, OAuth, service-to-service authentication, and certificate-based security.
- OAuth 2.0 for OData and SOAP supports user impersonation and service-to-service scenarios, with access and refresh token lifetime management.
- Service-to-service authentication uses the OAuth 2.0 client credentials flow for unattended integrations and requires a Microsoft Entra registration.
- S2S permissions named in the docs include API.ReadWrite.All and Automation.ReadWrite.All; the page references versions 17.0, 18.3, 18.11 and 19.5.
- The walkthrough builds a console app using Microsoft Entra ID, Visual Studio, delegated permissions, and the OData V4 endpoint.
- On-premises security certificates use X.509 with chain trust or peer trust, including Server and Client Authentication and SSL for web services.
- The Dynamics365BusinessCentral Azure service tag restricts network access to and from Business Central through firewall and network security group rules.
- A separate page lists the TLS protocols and cipher suites supported for outgoing HTTPS calls to external APIs.

## Learn pages

- [Supported cipher suites](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-supported-cipher-suites): Lists the cipher suites that are supported for external APIs called from Business Central.
- [Use Azure security service tags](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-service-tags): List of Azure service tags for Dynamics 365 Business Central
- [Using OAuth to authenticate Business Central Web Services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth): Learn how to set up OAuth for Business Central web services, including OData and SOAP, and secure your integrations.
- [Using Security Certificates with Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment): Learn how to use security certificates to help secure connections with Business Central.
- [Using Service to Service Authentication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/automation-apis-using-s2s-authentication): Service-to-service authentication enables external services to connect as an application, without impersonating normal users.
  - Status: S2S authentication generally available for Business Central automation APIs online version 17.0 and on-premises versions 18.11 and 19.5 and later.
  - Status: S2S authentication generally available for Business Central APIs v1.0 and v2.0 online version 18.3 and on-premises versions 18.11 and 19.5 and later.
  - Service-to-service authentication uses OAuth 2.0 Client Credentials flow for integrations running without user interaction; supports scheduled tasks on version 21.2 and later.
  - Step: Register Microsoft Entra application with unique name, specify supported account types, optionally add redirect URI for OAuthLanding.htm file.
  - Step: Create client secret for registered application by selecting Certificates and secrets, New client secret, adding description, selecting duration, selecting Add.
  - Step: Grant API.ReadWrite.All and Automation.ReadWrite.All permissions to Dynamics 365 Business Central API via API permissions, Add a permission, Microsoft APIs.
  - Step: Set up Microsoft Entra application in Business Central by searching Microsoft Entra applications, selecting New, entering Client ID, Description, setting State to Enabled, assigning permissions.
  - Limit: Applications cannot be assigned SUPER permission set; use least-privilege principle and assign only required permissions for integration.
- [Walkthrough: Creating a console application that use OAuth to Authenticate Business Central Web Services (OData and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/walkthrough-authenticate-web-services-using-oauth): Learn how to use OAuth to authenticate Business Central web services (OData and SOAP) through a step-by-step guide
- [Web service security](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-security): Get the list of recommendations for how to secure web services in your Business Central solution.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11171 [Security][Hardening] Validate integration URLs stored in setup tables](../../../../changes/bcapps/11171.md) (code change): "Integration endpoint URLs stored in setup tables are now validated against their expected host and scheme"
- [#11967 Block Edit in Excel for pages based on the User table](../../../../changes/bcapps/11967.md) (code change): "prevent authentication corruption when users are edited via Excel"
- [#12133 Block file scheme in Web Request Helper](../../../../changes/bcapps/12133.md) (code change): "prevent unauthorized local file access through crafted URLs"
- [#12194 Harden web request helpers: opt-in default credentials](../../../../changes/bcapps/12194.md) (code change): "preventing unintended transmission of Business Central service account credentials"
- [Dynamics 365 Business Central Blog Series: REST API web services (APIs)](../../../../posts/yzhums-com/63801.md) (community post): "OAuth 2.0 authentication is required for API access as Basic Auth was removed"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
