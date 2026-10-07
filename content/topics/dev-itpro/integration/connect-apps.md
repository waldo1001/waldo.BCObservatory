---
id: topic/dev-itpro/integration/connect-apps
type: topic
title: Connect apps
summary: Connect apps covers building integrations with Business Central through REST APIs and OData. It answers questions about creating custom API pages and queries, authenticating (Microsoft Entra ID, basic auth, service-to-service OAuth 2.0), filtering, and request tips such as batching and localization.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:33.901Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8437bfd47c83ee1ca15a180b1d138c20e872524ef72311d02e82bed05539731f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api
    title: API developer overview
    date: "2025-02-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api
    title: Developing a custom API
    date: "2024-11-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps
    title: Get started developing Connect apps for Dynamics 365 Business Central
    date: "2026-06-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips
    title: Tips for working with the APIs
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering
    title: Using filters with API/OData calls
    date: "2026-03-23"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/automation-apis-using-s2s-authentication
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Connect apps
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 8b44d3c4b42940a42001b1109b957abbe92c636ad9a0324c4e370e7b69a490f8
narrative: generated
---

# Connect apps

> Connect apps covers building integrations with Business Central through REST APIs and OData. It answers questions about creating custom API pages and queries, authenticating (Microsoft Entra ID, basic auth, service-to-service OAuth 2.0), filtering, and request tips such as batching and localization.

Path: [Integration](../integration.md) > Connect apps · tier official · system integration · narrative reviewed by Opus

## Overview

This section is for developers who connect external services to Business Central using REST web services. It starts with an overview of the two ways to build APIs: API pages for read-write access and API queries for read-only access. A walkthrough then shows how to write a custom API page in AL.

The getting-started page covers authentication setup and trying calls with the Insomnia REST client. The service-to-service page covers unattended integrations with OAuth 2.0 client credentials. Two further pages cover day-to-day use: filtering OData calls and tips on headers and batch requests.

Start with the API developer overview, then the getting-started page to set up authentication and make a first call. Use the custom API page when the standard APIs do not expose the data you need.

## Key points

- API pages support read-write operations. API queries are read-only and can span multiple tables. Webhooks are supported.
- Custom API pages in AL need APIVersion, APIPublisher and APIGroup. They also use properties such as ODataKeyFields, SystemId, EntityName, EntityCaption and EntitySetCaption.
- Relationships are modeled with parts and navigation properties. The deprecated ODataEDMType complex types should be replaced.
- Getting started covers Microsoft Entra ID (OAuth 2.0) and basic authentication with a web service access key, and testing with Insomnia.
- Service-to-service authentication uses the OAuth 2.0 client credentials flow, with a Microsoft Entra registration and the API.ReadWrite.All and Automation.ReadWrite.All permissions.
- Tips cover the Accept-Language header, OData $batch requests, transactional batches with Isolation: snapshot, and the Data-Access-Intent header with ReadOnly.
- Filtering follows Microsoft REST API guidelines for property-based and range-based filter expressions in OData queries.

## Learn pages

- [API developer overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api): Use APIs to expose information from the database into versioned, OData v4 enabled REST web services.
- [Developing a custom API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api): Learn how to develop a custom API page by using an AL extension and accessing it to retrieve responses and make updates through the API.
- [Get started developing Connect apps for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps): Learn how to develop a Connect app for Business Central, including setting up Microsoft Entra authentication and exploring REST APIs with Insomnia.
- [Tips for working with the APIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips): Provides some tips about working with Business Central API.
- [Using filters with API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering): Learn how to use filters with API calls to get targeted information in return.
- [Using Service to Service Authentication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/automation-apis-using-s2s-authentication): Service-to-service authentication enables external services to connect as an application, without impersonating normal users.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
