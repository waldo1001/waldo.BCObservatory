---
id: topic/dev-itpro/integration/web-services/odata
type: topic
title: OData
summary: "OData web services in Business Central: how to consume them in JSON and AtomPub, read the metadata document, filter data, modify records, call V4 unbound actions, run transactional batches, and troubleshoot or tune calls. It answers questions on URI syntax, supported operations, known limits, error codes and client performance."
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-08T01:01:49.909Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fe2f7254fb44cb96db9480ce62369477d707d755f8c868cdfc400d2db64bed19
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-json-document
    title: "How to: Use OData to Return-Obtain a JSON Document"
    date: "2024-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-an-atompub-document
    title: "How to: Use OData to Return-Obtain an AtomPub Document"
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-known-limitations
    title: Known OData Limitations
    date: "2022-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-unbound-action
    title: OData V4 Unbound Actions in Business Central
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-to-modify-data
    title: OData Web Services Data Modification
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-client-performance
    title: OData/API web service client performance
    date: "2023-07-03"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-service-metadata-edmx-document
    title: Use OData to Return and Obtain a Service Metadata Document
    date: "2025-12-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-containments-associations
    title: Using Containments and Associations
    date: "2024-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris
    title: Using Filter Expressions in OData URIs
    date: "2025-06-20"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-flowfilters-in-odata-uris
    title: Using FlowFilters in OData URIs
    date: "2024-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-batch
    title: Using OData transactional $batch requests
    date: "2023-04-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-with-queries-set-with-top-number-of-rows
    title: Using OData with Queries That are Set with a Top Number of Rows
    date: "2021-05-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-json-document
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-an-atompub-document
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-known-limitations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-unbound-action
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-to-modify-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-client-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-service-metadata-edmx-document
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-containments-associations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-flowfilters-in-odata-uris
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-batch
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-with-queries-set-with-top-number-of-rows
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/web-services
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/2565
    - post/thinkaboutit-be/7061
    - post/yzhums-com/48974
  guidelines: []
  changes:
    - change/bcapps/12324
    - change/bcapps/8051
learn_toc_path:
  - Integration
  - Web services
  - OData
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/web-services
children: []
coverage:
  learn: 14
  code: 0
  video: 0
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 874d34634bbd909ee523fecd2937970ee08aa309c231c470480275a3dd3e1034
narrative: generated
---

# OData

> OData web services in Business Central: how to consume them in JSON and AtomPub, read the metadata document, filter data, modify records, call V4 unbound actions, run transactional batches, and troubleshoot or tune calls. It answers questions on URI syntax, supported operations, known limits, error codes and client performance.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > OData · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers working with Business Central data through OData web services. It starts with the basics of consuming services: returning JSON or AtomPub (OData V3) documents, and getting the EDMX service metadata document that describes the entity data model. Containments and associations explain navigation between published pages.

Several pages cover querying and changing data. Filtering is described for OData URIs (with AL filter equivalents), for API/OData calls in general, and for FlowFilters on FlowFields. Data modification pages explain POST, PATCH and DELETE on writable pages, and OData V4 unbound actions let you call AL codeunit procedures published as web services. Transactional $batch requests group inner requests into one transaction.

For operations, use the performance guidelines, the troubleshooting page on error and HTTP status codes, the page on queries with a top number of rows, and the Known OData Limitations page. A sensible start is the metadata document and the filter pages, then data modification, then the limitations and performance pages.

## Key points

- JSON documents are consumed via URI parameters, with JSON-P callbacks supported; AtomPub documents apply to OData V3, including keyed entries and filtered feeds.
- The EDMX service metadata document defines the entity data model, so tools such as LINQ can query Business Central data.
- Writes use POST, PATCH and DELETE on writable pages; InsertAllowed, ModifyAllowed and DeleteAllowed control them, triggers run by operation type, and user permissions are enforced.
- OData V4 unbound actions call AL codeunit procedures published as web services, using HTTP POST with JSON parameters and OAuth authentication.
- Transactional $batch requests use the Isolation: snapshot header; if any inner request fails, all changes are reverted.
- Performance guidance: Data-Access-Intent ReadOnly, batch requests, $select, $filter, $top and server-driven paging.
- For queries with TopNumberOfRows, Max Page Size (odata.maxpagesize) must be greater than the TopNumberOfRows value to get correct counts.
- Known limits include no PATCH on collection properties, no OR filters on distinct fields, no lambda operators, and no deep insert or deep patch.

## Learn pages

- [How to: Use OData to Return-Obtain a JSON Document](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-json-document): Learn about how to use OData to obtain a JSON document
- [How to: Use OData to Return-Obtain an AtomPub Document](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-an-atompub-document): Learn how OData V3 clients can use Atom Publishing Protocol documents to interact with Business Central data
- [Known OData Limitations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-known-limitations): Learn about known limitations with Business Central OData.
- [OData V4 Unbound Actions in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-unbound-action): Create an OData V4 unbound action in AL, publish a codeunit as a web service, and send authenticated JSON requests to call its procedures in Business Central.
- [OData Web Services Data Modification](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-to-modify-data): Write to the database using an OData web service that exposes a writable page and implement it in on Microsoft SharePoint Online.
  - In the observatory: [Table 18 "Customer"](../../../../objects/table/18.md)
- [OData/API web service client performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-client-performance): Learn about how to develop efficient and fast OData/API web service clients for Business Central.
- [Troubleshooting REST API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes): Learn about how to troubleshoot Business Central web service errors of types REST API or OData.
- [Use OData to Return and Obtain a Service Metadata Document](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-service-metadata-edmx-document): Using OData to return and obtain a Service Metadata (EDMX) Document.
- [Using Containments and Associations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-containments-associations): Learn how to use containments and associations with OData for creating relationships between pages.
- [Using Filter Expressions in OData URIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris): Learn how to use filter expressions in OData URIs to limit results, map to AL filters, and see syntax examples.
- [Using filters with API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering): Learn how to use filters with API calls to get targeted information in return.
- [Using FlowFilters in OData URIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-flowfilters-in-odata-uris): Learn how to use FlowFilter expressions in OData URIs.
- [Using OData transactional $batch requests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-batch): How to specify that all inner requests in a certain OData $batch request are processed in a transactional way in Business Central.
- [Using OData with Queries That are Set with a Top Number of Rows](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-with-queries-set-with-top-number-of-rows): Learn about using queries that are set with a top number of rows.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12324 Obsolete Http Web Request Mgt. usage in public API (webhooks, OData)](../../../../changes/bcapps/12324.md) (code change): "Http Web Request Mgt usage is removed from webhook and OData"
- [#8051 [Edit in Excel] Expose ExternalizeODataObjectName and add Page Control Field publisher](../../../../changes/bcapps/8051.md) (code change): "exposes ExternalizeODataObjectName as public procedure for external apps to convert field and service names to OData format"
- [Business Central 2027 release wave 1: Preparing for OData Endpoint Removal](../../../../posts/aardvarklabs-blog/2565.md) (community post): "Pages exposed as OData web services will no longer be available"
- [Quick Tip: Say Goodbye to OData on Microsoft Pages in Business Central 2027 Wave 1 (version 30.0)](../../../../posts/thinkaboutit-be/7061.md) (community post): "Microsoft no longer allows exposing Microsoft-authored pages as OData endpoints"
- [Dynamics 365 Business Central: How to use the OData V4 IN operator in web service queries](../../../../posts/yzhums-com/48974.md) (community post): "OData V4 IN operator simplifies web service queries in Business Central"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
