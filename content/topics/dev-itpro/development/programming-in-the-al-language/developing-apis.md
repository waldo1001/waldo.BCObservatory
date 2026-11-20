---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-apis
type: topic
title: Developing APIs
summary: "Developing APIs in AL for Business Central: API page and API query types, building custom REST/OData v4 endpoints, Connect app basics, filters, request tips, troubleshooting, performance and web service telemetry. It answers how to build, call, tune and diagnose web service APIs."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 61f6e59b51ebed8eb69ce1f11ddfd1d8bb53fcf74b483d876c08b7b0cfc3cedb
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
    title: Web Service Telemetry in Business Central
    date: "2026-11-17"
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
    - video/QGIr_XPp8lk
  posts:
    - post/aardvarklabs-blog/4082
  guidelines: []
  changes:
    - change/bcapps/10130
    - change/bcapps/11701
    - change/bcapps/13554
    - change/bcapps/13622
    - change/bcapps/13824
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

> Developing APIs in AL for Business Central: API page and API query types, building custom REST/OData v4 endpoints, Connect app basics, filters, request tips, troubleshooting, performance and web service telemetry. It answers how to build, call, tune and diagnose web service APIs.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Developing APIs · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers building and consuming REST APIs in Business Central with AL. API pages give versioned, OData v4 enabled, webhook-capable endpoints with create, read, update and delete operations. API queries join data from several sources and expose it as read-only endpoints. Both use properties such as APIPublisher, APIGroup and APIVersion.

Start with "Develop APIs with Pages and Queries" for the overview, then "API page type" and "API query type" for the object types. "Developing a custom API" is a walkthrough for API pages: key fields, SystemId, entity names, relationships through parts and navigation properties, and moving away from the deprecated ODataEDMType complex types. "Get started developing Connect apps" covers authentication (Microsoft Entra ID with OAuth 2.0, or basic authentication with a web service access key) and exploring endpoints with Insomnia.

The remaining pages support day-to-day work with the APIs: tips on GET requests, Accept-Language, OData $batch and the Data-Access-Intent header; filter expressions; error and status code troubleshooting; performance patterns and anti-patterns; and web service telemetry for SOAP, OData and API traffic.

## Key points

- API page type creates versioned, OData v4 enabled REST endpoints with webhook support and CRUD; InsertAllowed and ModifyAllowed properties control writes.
- API query type joins data from different sources and exposes it read-only, using APIPublisher, APIGroup and version properties.
- The custom API walkthrough covers API v2.0 pages, ODataKeyFields, SystemId, EntityName, EntityCaption and EntitySetCaption, and parts and navigation properties for relationships.
- Connect apps (2022 release wave 1) make point-to-point connections to partner solutions; authentication uses Microsoft Entra ID with OAuth 2.0 or basic authentication with a web service access key.
- API tips cover Accept-Language for localization, transactional OData $batch with Isolation: snapshot, and Data-Access-Intent set to ReadOnly (2020 release wave 2, version 17.1).
- Filtering follows Microsoft REST API guidelines, with property-based and range-based filter expressions.
- Troubleshooting maps AL runtime exceptions to OData error codes and HTTP status codes, using the AL debugger and telemetry.
- Performance depends on both the server endpoint and the consumer; guidance lists patterns, anti-patterns and Power BI considerations.

## Learn pages

- [API page type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-pagetype): Description of the API page type used for exposing web service endpoints.
- [API query type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api-querytype): Description of the API query type used for exposing and viewing web service endpoints.
  - In the observatory: [Query 20000 "APIV1 - Customer Sales"](../../../../objects/query/20000.md)
- [Develop APIs with Pages and Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-api): Learn how to develop custom Business Central APIs with API pages and API queries, and find guidance for performance and troubleshooting.
- [Developing a custom API](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-custom-api): Learn how to develop a custom API page by using an AL extension and accessing it to retrieve responses and make updates through the API.
- [Get started developing Connect apps for Dynamics 365 Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps): Learn how to develop a Connect app for Business Central, including setting up Microsoft Entra authentication and exploring REST APIs with Insomnia.
- [Tips for working with the APIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-tips): Provides some tips about working with Business Central API.
- [Troubleshooting REST API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes): Learn about how to troubleshoot Business Central web service errors of types REST API or OData.
- [Using filters with API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering): Learn how to use filters with API calls to get targeted information in return.
- [Web Service Performance (OData, API, and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-performance): Learn about how performance of Business Central web services (OData, API, and SOAP)
- [Web Service Telemetry in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry): Monitor Business Central web service requests with telemetry to analyze endpoint usage, HTTP failures, access key authentication, and publishing errors.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10130 [ExpenseAgent] Expose VatSpecifications on Expense API Page](../../../../changes/bcapps/10130.md) (code change): "The Expense API page now exposes VAT specifications through a new part"
- [#11701 [MCP] Hide codeunit APIs from Available APIs dropdown (AB#650771)](../../../../changes/bcapps/11701.md) (code change): "Codeunit API options are hidden from the MCP Configuration Available APIs dropdown"
- [#13554 Add procedures to import configuration packages and manage table operations in Fabric API](../../../../changes/bcapps/13554.md) (code change): "The Fabric API now supports resetting and removing tables"
- [#13622 [Main]- Edit in Excel insert fails on Price List Lines (Page 7001) — Unit of Measure Code validated before Product No. is set causing NavTestFieldException on Price Asset (Table 7003)](../../../../changes/bcapps/13622.md) (code change): "Edit in Excel inserts to Price List Lines now validate against the current row values"
- [#13824 Implement namespace normalization for Fabric Data and Logging in setup pages and platform management](../../../../changes/bcapps/13824.md) (code change): "Fabric namespace fields on the setup pages and API now convert entered values to lowercase"
- [#9725 [Master] - Slice 626127: [Excise Tax][VENDOR] Multiple Excise Taxes per Item](../../../../changes/bcapps/9725.md) (code change): "Item Excise Tax API page (7417)"
- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md) (code change): "2 web-services articles: keep consumer-provided key fields editable on insert"
- [Business Central’s New API Overview: A Modern Replacement for Web Services](../../../../posts/aardvarklabs-blog/4082.md) (community post): "AL-defined APIs are the future direction Microsoft is moving toward"
- [What's New: Extending E-Documents with New Interface (2025 release wave 1)](../../../../videos/QGIr_XPp8lk.md) (video): "I document sender interface; I document response handler interface"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
