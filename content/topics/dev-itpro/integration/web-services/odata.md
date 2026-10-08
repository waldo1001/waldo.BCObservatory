---
id: topic/dev-itpro/integration/web-services/odata
type: topic
title: OData
summary: "OData web services in Business Central: how to query, filter, modify and batch data, publish metadata, handle limits, tune performance and troubleshoot errors. It answers questions about URI construction, JSON and AtomPub formats, unbound actions, FlowFilters, containments, associations, paging and error codes."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:00.498Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c9237c0184ca9fea3f08c0d21fadb55fe8d63be33d98603d5f09e9b4ddf8b8d8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-unbound-action
    title: Creating and interacting with an OData V4 unbound action
    date: "2024-07-23"
    commit: null
    t: null
    quote: null
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-unbound-action
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-json-document
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-an-atompub-document
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-known-limitations
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
  guidelines: []
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
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 874d34634bbd909ee523fecd2937970ee08aa309c231c470480275a3dd3e1034
narrative: generated
---

# OData

> OData web services in Business Central: how to query, filter, modify and batch data, publish metadata, handle limits, tune performance and troubleshoot errors. It answers questions about URI construction, JSON and AtomPub formats, unbound actions, FlowFilters, containments, associations, paging and error codes.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > OData · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers consuming Business Central data through OData web services. It includes reading data as JSON or AtomPub (V3), getting the EDMX service metadata document, and navigating between published pages with containments and associations. Several pages deal with filtering: filter expressions in OData URIs, general filters for API/OData calls, and FlowFilters for FlowField calculations.

Writing data is covered by the data modification page (POST, PATCH, DELETE on writable pages), the OData V4 unbound action guide, and the transactional $batch page, which runs inner requests in one transaction. Performance guidance, the TopNumberOfRows and Max Page Size page, and the known limitations page help you avoid surprises at scale.

Start with the metadata and JSON pages to learn the URI patterns. Then read the filtering and data modification pages. Check Known OData Limitations and the troubleshooting page before you build a client, or when a call fails.

## Key points

- Data can be returned as JSON (with JSON-P callbacks) or, for OData V3, as AtomPub documents with keyed entries and filtered feeds.
- The service metadata document is EDMX. It defines the entity data model and can be used by tools such as LINQ.
- Writes use POST, PATCH and DELETE on writable pages. The InsertAllowed, ModifyAllowed and DeleteAllowed properties and user permissions apply, and triggers run by operation type.
- OData V4 unbound actions expose AL procedures through web service registration and are not bound to a specific entity.
- Transactional $batch requests use the Isolation: snapshot header. If any inner request fails, all changes are reverted.
- Performance tips: Data-Access-Intent ReadOnly, batching, $select, $filter, $top and server-driven paging.
- For queries with TopNumberOfRows, set Max Page Size (odata.maxpagesize) higher than that value to get correct result counts.
- Known limitations include no PATCH on collection properties, no OR filters on distinct fields, no lambda operators and no deep insert or deep patching.

## Learn pages

- [Creating and interacting with an OData V4 unbound action](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-unbound-action): Describing how to create and interact with an OData V4 Unbound Action in AL.
- [How to: Use OData to Return-Obtain a JSON Document](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-json-document): Learn about how to use OData to obtain a JSON document
- [How to: Use OData to Return-Obtain an AtomPub Document](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-an-atompub-document): Learn how OData V3 clients can use Atom Publishing Protocol documents to interact with Business Central data
- [Known OData Limitations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-known-limitations): Learn about known limitations with Business Central OData.
- [OData Web Services Data Modification](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-to-modify-data): Write to the database using an OData web service that exposes a writable page and implement it in on Microsoft SharePoint Online.
- [OData/API web service client performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/odata-client-performance): Learn about how to develop efficient and fast OData/API web service clients for Business Central.
- [Troubleshooting REST API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes): Learn about how to troubleshoot Business Central web service errors of types REST API or OData.
- [Use OData to Return and Obtain a Service Metadata Document](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/return-obtain-service-metadata-edmx-document): Using OData to return and obtain a Service Metadata (EDMX) Document.
- [Using Containments and Associations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-containments-associations): Learn how to use containments and associations with OData for creating relationships between pages.
- [Using Filter Expressions in OData URIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris): Learn how to use filter expressions in OData URIs to limit results, map to AL filters, and see syntax examples.
- [Using filters with API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-connect-apps-filtering): Learn how to use filters with API calls to get targeted information in return.
- [Using FlowFilters in OData URIs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-flowfilters-in-odata-uris): Learn how to use FlowFilter expressions in OData URIs.
- [Using OData transactional $batch requests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-batch): How to specify that all inner requests in a certain OData $batch request are processed in a transactional way in Business Central.
- [Using OData with Queries That are Set with a Top Number of Rows](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-odata-with-queries-set-with-top-number-of-rows): Learn about using queries that are set with a top number of rows.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2027 release wave 1: Preparing for OData Endpoint Removal](../../../../posts/aardvarklabs-blog/2565.md) (community post): "Pages exposed as OData web services will no longer be available from Microsoft-managed pages"
- [Quick Tip: Say Goodbye to OData on Microsoft Pages in Business Central 2027 Wave 1 (version 30.0)](../../../../posts/thinkaboutit-be/7061.md) (community post): "Microsoft no longer allows exposing Microsoft-authored pages as OData endpoints"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
