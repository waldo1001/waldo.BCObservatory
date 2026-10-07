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
  at: "2026-10-07T13:37:30.849Z"
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
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10680
    - change/bcapps/11016
    - change/bcapps/11171
    - change/bcapps/12133
    - change/bcapps/12194
    - change/bcquality/100
    - change/bcquality/149
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4cc591df9ed392d40fdbd824d2af29a0ad8b2630152dcb1497a0ce948eb96f88
narrative: generated
---

# Web services security

> Web services security in Business Central covers authentication options (basic, OAuth, service-to-service), certificates, supported cipher suites for outgoing HTTPS calls, and network restriction with Azure service tags. It answers questions on securing OData and SOAP endpoints and API integrations.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > Web services security · tier official · system integration · narrative reviewed by Opus

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
- [Walkthrough: Creating a console application that use OAuth to Authenticate Business Central Web Services (OData and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/walkthrough-authenticate-web-services-using-oauth): Learn how to use OAuth to authenticate Business Central web services (OData and SOAP) through a step-by-step guide
- [Web service security](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-security): Get the list of recommendations for how to secure web services in your Business Central solution.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10680 Maintenance update](../../../../changes/bcapps/10680.md) (code change): "Certificate validation enforcement added to Shopify authentication management"
- [#11016 [AI Business Solutions] Enforce allow-listed Redirect URIs, token audiences and authorities for OAuth2 integrations](../../../../changes/bcapps/11016.md) (code change): "enforce allow-listed Redirect URIs, token audiences and authorities for OAuth2"
- [#11171 [Security][Hardening] Validate integration URLs stored in setup tables](../../../../changes/bcapps/11171.md) (code change): "Integration endpoint URLs stored in setup tables are now validated against their expected host"
- [#12133 Block file scheme in Web Request Helper](../../../../changes/bcapps/12133.md) (code change): "Web Request Helper now rejects file:// URLs before creating HTTP requests"
- [#12194 Harden web request helpers: opt-in default credentials](../../../../changes/bcapps/12194.md) (code change): "Http Web Request Mgt. and SOAP Web Service Request Mgt. now disable default credentials"
- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md) (code change): "Extended web-services and UI reviewer detection capabilities"
- [#149 knowledge(web-services): under schema 2.0 an API enum field is a contract by member name, under 1.0 by caption](../../../../changes/bcquality/149.md) (code change): "API enum fields are published: under schema 2.0 by member name"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
