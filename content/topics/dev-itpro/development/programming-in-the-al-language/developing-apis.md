---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-apis
type: topic
title: Developing APIs
summary: Developing APIs in Business Central covers building REST/OData v4 web services in AL with API pages (read-write) and API queries (read-only). It answers questions on custom API development, authentication, filtering, request tips, troubleshooting, performance and telemetry.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:17.835Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7db8b76dc0f6009911d7bf5f51338f73c04b8248b5045129509fd706d10827e2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api
    title: API developer overview
    date: "2025-02-07"
    commit: null
    t: null
    quote: null
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-pagetype
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-querytype
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
  videos: []
  posts:
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-66-api-v2-app--9c066fb579
  guidelines: []
  changes:
    - change/bcapps/10130
    - change/bcapps/11701
    - change/bcapps/9725
    - change/bcquality/149
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
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 198bbaa7e4c9ee4e788121e511fb23fa78de1ec0a3f9625833096531ab5a506e
narrative: generated
---

# Developing APIs

> Developing APIs in Business Central covers building REST/OData v4 web services in AL with API pages (read-write) and API queries (read-only). It answers questions on custom API development, authentication, filtering, request tips, troubleshooting, performance and telemetry.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Developing APIs · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section explains how to expose Business Central data to external systems through REST web services. The two building blocks are the API page type, which supports create, read, update and delete with versioning and webhooks, and the API query type, which joins data from several sources in read-only mode. Both are OData v4.

Start with the API developer overview, then read the API page and API query pages to choose a type. "Developing a custom API" walks through building an API page in AL, including APIVersion, APIPublisher and APIGroup, relationships through parts and navigation properties, and moving away from deprecated ODataEDMType complex types. The Connect apps page covers authentication and calling the APIs with Insomnia.

The remaining pages support running APIs in practice: tips on requests and headers, filter expressions, error and status code troubleshooting, performance patterns and anti-patterns, and web service telemetry for monitoring usage, failures and access key authentication.

## Key points

- API pages give read-write OData v4 endpoints with versioning and webhook support; API queries give read-only access that can join data from different sources.
- Custom API pages in AL need properties such as APIVersion, APIPublisher and APIGroup, plus ODataKeyFields, SystemId, EntityName, EntityCaption and EntitySetCaption.
- Relationships are handled with parts and navigation properties; ODataEDMType complex types are deprecated.
- Connect apps can authenticate with Microsoft Entra ID (OAuth 2.0) or basic authentication with a web service access key; Insomnia can be used to explore the APIs.
- Request tips include the Accept-Language header, OData $batch requests, transactional batches with Isolation: snapshot, and the Data-Access-Intent header for ReadOnly intent.
- Filtering follows Microsoft REST API guidelines for property-based and range-based filters.
- Troubleshooting maps AL runtime exceptions to OData error codes and HTTP status codes, using the AL debugger and telemetry.
- Web service telemetry logs SOAP, OData and API requests, including access key authentication and publish failures; the performance page covers patterns and anti-patterns.

## Learn pages

- [API developer overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api): Use APIs to expose information from the database into versioned, OData v4 enabled REST web services.
- [API page type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-pagetype): Description of the API page type used for exposing web service endpoints.
- [API query type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-querytype): Description of the API query type used for exposing and viewing web service endpoints.
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
- [#149 knowledge(web-services): under schema 2.0 an API enum field is a contract by member name, under 1.0 by caption](../../../../changes/bcquality/149.md) (code change): "Schema 2.0 uses strongly typed enums with member names in metadata"
- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md) (code change): "2 web-services articles: keep consumer-provided key fields editable on insert"
- [BC Friday Tips #66 API v2 app](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-66-api-v2-app--9c066fb579.md) (community post): "Use it to see how Microsoft designs standard APIs and copy objects"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
