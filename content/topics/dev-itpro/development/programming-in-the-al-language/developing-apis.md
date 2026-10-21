---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-apis
type: topic
title: Developing APIs
summary: Developing APIs covers how to build, call, troubleshoot and monitor REST/OData APIs in Business Central using AL API pages and API queries. It answers questions about API design properties, filters, batch requests, error codes, performance, telemetry and Connect app authentication.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-21T00:49:06.669Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: da1ae0cf81442acea3766ed49f1ee11c16b68ba0f51d4dbf75a87b35956e8eb6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-pagetype
    title: API page type
    date: "2026-09-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-querytype
    title: API query type
    date: "2026-09-21"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes
    title: Troubleshooting REST API/OData calls
    date: "2024-02-06"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-performance
    title: Web Service Performance (OData, API, and SOAP)
    date: "2023-07-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry
    title: Web Service Telemetry
    date: "2023-06-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-pagetype
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-querytype
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
  localizations: []
  videos:
    - video/oN0XfuCe6Qg
  posts:
    - post/thinkaboutit-be/7061
  guidelines: []
  changes:
    - change/bcapps/10130
    - change/bcapps/11701
    - change/bcapps/9725
    - change/bcquality/156
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing APIs
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children: []
coverage:
  learn: 10
  code: 0
  video: 1
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 198bbaa7e4c9ee4e788121e511fb23fa78de1ec0a3f9625833096531ab5a506e
narrative: generated
---

# Developing APIs

> Developing APIs covers how to build, call, troubleshoot and monitor REST/OData APIs in Business Central using AL API pages and API queries. It answers questions about API design properties, filters, batch requests, error codes, performance, telemetry and Connect app authentication.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Developing APIs · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to expose Business Central data as RESTful, OData v4-enabled web services. API pages give read-write access with versioning and webhook support. API queries join data from several sources and expose it read-only. Both rely on properties such as APIPublisher, APIGroup and APIVersion.
The pages fit together as a path. Start with "Develop APIs with Pages and Queries" for the overview, then the API page type and API query type pages for the object details. "Developing a custom API" is a walkthrough covering relationships, parts and navigation properties. "Get started developing Connect apps" covers authentication and exploring endpoints with Insomnia.
Once an API exists, the remaining pages cover use and operation. They include tips (Accept-Language, OData $batch, Data-Access-Intent), filter expressions, troubleshooting with HTTP and OData error codes, performance patterns and anti-patterns, and web service telemetry.

## Key points

- API page type creates versioned, webhook-supported, OData v4 REST services with create, read, update and delete operations; InsertAllowed and ModifyAllowed control writes.
- API query type joins data from different sources and exposes it as read-only, using APIPublisher, APIGroup and version properties.
- Custom API pages need APIVersion, APIPublisher and APIGroup, and use ODataKeyFields, SystemId, EntityName, EntityCaption and EntitySetCaption; the walkthrough covers API v2.0 and moving away from deprecated ODataEDMType complex types.
- Connect apps use REST APIs with Microsoft Entra ID, OAuth 2.0 or basic authentication (web service access key); Insomnia can be used to explore endpoints.
- API tips cover GET requests, the Accept-Language header, transactional OData $batch with Isolation: snapshot, and Data-Access-Intent set to ReadOnly (2020 release wave 2, version 17.1).
- Filtering follows Microsoft REST API guidelines for property-based and range-based filters.
- Troubleshooting maps AL runtime exceptions to OData error messages and HTTP status codes, with the AL debugger and telemetry as aids.
- Performance depends on both the server endpoint and the consumer (including Power BI); web service telemetry logs SOAP, OData and API requests, access key authentication and publish failures.

## Learn pages

- [API page type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-pagetype): Description of the API page type used for exposing web service endpoints.
- [API query type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-querytype): Description of the API query type used for exposing and viewing web service endpoints.
- [Develop APIs with Pages and Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api): Learn how to develop custom Business Central APIs with API pages and API queries, and find guidance for performance and troubleshooting.
- [Developing a custom API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api): Learn how to develop a custom API page by using an AL extension and accessing it to retrieve responses and make updates through the API.
- [Get started developing Connect apps for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps): Learn how to develop a Connect app for Business Central, including setting up Microsoft Entra authentication and exploring REST APIs with Insomnia.
- [Tips for working with the APIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips): Provides some tips about working with Business Central API.
- [Troubleshooting REST API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes): Learn about how to troubleshoot Business Central web service errors of types REST API or OData.
- [Using filters with API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering): Learn how to use filters with API calls to get targeted information in return.
- [Web Service Performance (OData, API, and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-performance): Learn about how performance of Business Central web services (OData, API, and SOAP)
- [Web Service Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry): Learn about how Business Central emits telemetry about web service requests

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10130 [ExpenseAgent] Expose VatSpecifications on Expense API Page](../../../../changes/bcapps/10130.md) (code change): "The Expense API page now exposes VAT specifications through a new part"
- [#11701 [MCP] Hide codeunit APIs from Available APIs dropdown (AB#650771)](../../../../changes/bcapps/11701.md) (code change): "Codeunit API options are hidden from the MCP Configuration Available APIs dropdown"
- [#9725 [Master] - Slice 626127: [Excise Tax][VENDOR] Multiple Excise Taxes per Item](../../../../changes/bcapps/9725.md) (code change): "Item Excise Tax API page (7417)"
- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md) (code change): "2 web-services articles: keep consumer-provided key fields editable on insert"
- [Quick Tip: Say Goodbye to OData on Microsoft Pages in Business Central 2027 Wave 1 (version 30.0)](../../../../posts/thinkaboutit-be/7061.md) (community post): "Developers must audit current integrations, migrate to custom extensions or query objects"
- [What's Cooking in Business Central: External File Storage Module](../../../../videos/oN0XfuCe6Qg.md) (video): "External File Storage API Methods; Storage Browser"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
