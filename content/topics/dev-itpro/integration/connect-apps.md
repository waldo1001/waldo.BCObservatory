---
id: topic/dev-itpro/integration/connect-apps
type: topic
title: Connect apps
summary: Connect apps covers building point-to-point integrations between Business Central and partner solutions through REST APIs. It answers questions on developing API pages and queries, authentication (OAuth 2.0, service-to-service), OData filters, batch requests and request headers.
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-18T00:56:54.350Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 55317451e0bc65f4df9fee68680b71affaf70ce76d2be1bf608b8a0e1b8ac632
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api
    title: Develop APIs with Pages and Queries
    date: "2026-10-08"
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
  changes:
    - change/bcapps/12064
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

> Connect apps covers building point-to-point integrations between Business Central and partner solutions through REST APIs. It answers questions on developing API pages and queries, authentication (OAuth 2.0, service-to-service), OData filters, batch requests and request headers.

Path: [Integration](../integration.md) > Connect apps · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

Connect apps is about building integrations that link Business Central to external partner solutions using REST APIs. The section starts with a getting-started page that explains authentication setup, exploring the APIs with Insomnia, and calling endpoints.

For developers who need their own endpoints, two pages cover custom APIs: one compares API pages (read-write) with API queries (read-only joined datasets), and the other walks through creating API pages in AL, including relationships and moving away from the deprecated ODataEDMType complex types.

The remaining pages support day-to-day API use: filter expressions in OData calls, tips on GET requests, language headers, batch requests and data access intent, and service-to-service authentication for unattended integrations. Start with the getting-started page, then pick the page that matches your task.

## Key points

- Connect apps create point-to-point connections between Business Central and partner solutions using REST APIs.
- Authentication options include Microsoft Entra ID with OAuth 2.0, basic authentication with a web service access key, and service-to-service authentication.
- Service-to-service authentication uses the OAuth 2.0 client credentials flow for unattended integrations, with API.ReadWrite.All and Automation.ReadWrite.All permissions and Microsoft Entra registration.
- API pages give read-write operations; API queries give read-only joined datasets. Both expose OData v4 endpoints, and webhooks are supported.
- Custom API pages in AL need APIVersion, APIPublisher and APIGroup, and use properties such as ODataKeyFields, SystemId, EntityName, EntityCaption and EntitySetCaption (API v2.0).
- Relationships are handled with parts and navigation properties; the ODataEDMType complex types are deprecated.
- Tips cover Accept-Language for localization, transactional OData $batch with Isolation: snapshot, and the Data-Access-Intent header with ReadOnly intent (from version 17.1).
- Filtering follows Microsoft REST API guidelines for property-based and range-based filter expressions.

## Learn pages

- [Develop APIs with Pages and Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api): Learn how to develop custom Business Central APIs with API pages and API queries, and find guidance for performance and troubleshooting.
- [Developing a custom API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api): Learn how to develop a custom API page by using an AL extension and accessing it to retrieve responses and make updates through the API.
- [Get started developing Connect apps for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps): Learn how to develop a Connect app for Business Central, including setting up Microsoft Entra authentication and exploring REST APIs with Insomnia.
- [Tips for working with the APIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips): Provides some tips about working with Business Central API.
- [Using filters with API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering): Learn how to use filters with API calls to get targeted information in return.
- [Using Service to Service Authentication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/automation-apis-using-s2s-authentication): Service-to-service authentication enables external services to connect as an application, without impersonating normal users.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12064 Support SharePoint paths containing hash and percent characters](../../../changes/bcapps/12064.md) (code change): "SharePoint connector now supports file paths containing hash and percent characters"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
