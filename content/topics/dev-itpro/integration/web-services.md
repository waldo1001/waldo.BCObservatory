---
id: topic/dev-itpro/integration/web-services
type: topic
title: Web services
summary: "Business Central web services: OData, SOAP and API endpoints, how to publish and consume them, secure them, monitor them with telemetry, and tune or troubleshoot them. It answers questions on endpoint types, authentication, publishing, errors, performance and terms of use."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-11-21T01:00:51.939Z"
  flags: []
generated:
  at: "2026-11-27T01:05:12.074Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c21861a3109857d931ce86bead2db1f94d1c42570cf90434f4119e185cdbd9c8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v1.0/
    title: (v1.0) API (v1.0) for Dynamics 365 Business Central
    date: "2024-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_abcanalysissetup
    title: abcAnalysisSetup resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_accountcategory
    title: accountCategory resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_accountingperiod
    title: accountingPeriod resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/api-analytics-overview
    title: Analytics API overview
    date: "2026-06-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/
    title: API (v2.0) for Dynamics 365 Business Central
    date: "2026-08-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/api-endpoint-structure
    title: API endpoint structure
    date: "2025-07-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/api-overview
    title: API Overview Page in Business Central
    date: "2026-09-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_assemblyheader
    title: assemblyHeader resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_assemblyline
    title: assemblyLine resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_balancesheetgeneralledgerentry
    title: balanceSheetGeneralLedgerEntry resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_bin
    title: bin resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/administration-center-api
    title: Business Central Administration Center API
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_businessunit
    title: businessUnit resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_calendarentry
    title: calendarEntry resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_capacityledgerentry
    title: capacityLedgerEntry resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_closeincomestmtsourcecode
    title: closeIncomeStmtSourceCode resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_closeopportunitycode
    title: closeOpportunityCode resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_closinggeneralledgerentry
    title: closingGeneralLedgerEntry resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloudmigrationapi/cloud-migration-api-overview
    title: Cloud Migration API Overview
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_company
    title: company resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-services
    title: Compare REST APIs, OData, and SOAP web services in Business Central
    date: "2024-02-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_contact
    title: contact resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/api/dynamics_subscriptions_create
    title: Create subscriptions (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-bound-action
    title: Creating and Interacting with an OData V4 Bound Action
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_customer
    title: customer resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_customer
    title: customer resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_customerledgerentry
    title: customerLedgerEntry resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_customerledgerentry
    title: customerLedgerEntry resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_datesetup
    title: dateSetup resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/api/dynamics_subscriptions_delete
    title: Delete subscriptions (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_detailedcustomerledgerentry
    title: detailedCustomerLedgerEntry resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_detailedvendorledgerentry
    title: detailedVendorLedgerEntry resource type (Beta)
    date: "2024-05-31"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_dimension
    title: dimension resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_dimensionsetentry
    title: dimensionSetEntry resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_dimensionsetentry
    title: dimensionSetEntry resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/financereportsapi/resources/dynamics_dimensionvalue
    title: dimensionValue resource type (Beta)
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-disable-soap-microsoft-pages-feature-key
    title: Disable SOAP web services on Microsoft UI pages feature key
    date: "2025-03-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-analytics/resources/dynamics_dynamicdimension
    title: dynamicDimension resource type
    date: "2026-06-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-services
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integration-record-refactoring
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/webservices-terms-of-use
  objects:
    - object/page/812
  features: []
  topics:
    - topic/dev-itpro/integration
    - topic/dev-itpro/integration/web-services/web-services-security
    - topic/dev-itpro/integration/web-services/apis
    - topic/dev-itpro/integration/web-services/odata
    - topic/dev-itpro/integration/web-services/publishing-pages-and-codeunits-as-odata
    - topic/dev-itpro/integration/web-services/soap
  localizations: []
  videos:
    - video/sk5CaXnvvng
    - video/VpNQ-CYNrkM
  posts:
    - post/aardvarklabs-blog/1826
  guidelines: []
  changes:
    - change/bcapps/12324
    - change/bcapps/12606
    - change/bcapps/8051
    - change/bcapps/8698
    - change/bcapps/9737
    - change/bcapps/9751
    - change/bcapps/9772
    - change/bcapps/9784
    - change/bcapps/9796
    - change/bcapps/9872
learn_toc_path:
  - Integration
  - Web services
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children:
  - topic/dev-itpro/integration/web-services/web-services-security
  - topic/dev-itpro/integration/web-services/apis
  - topic/dev-itpro/integration/web-services/odata
  - topic/dev-itpro/integration/web-services/publishing-pages-and-codeunits-as-odata
  - topic/dev-itpro/integration/web-services/soap
coverage:
  learn: 294
  code: 1
  video: 2
  blog: 1
  guideline: 0
bc_forms:
  - 812
member_hash: 059de4a5a07b7fb9ecf5db6c62e0fde637536d5a32547994b3a9c68747046252
narrative: generated
---

# Web services

> Business Central web services: OData, SOAP and API endpoints, how to publish and consume them, secure them, monitor them with telemetry, and tune or troubleshoot them. It answers questions on endpoint types, authentication, publishing, errors, performance and terms of use.

Path: [Integration](../integration.md) > Web services · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers how external systems connect to Business Central through web services. The three endpoint types are OData, SOAP and APIs. Subtopics cover consuming OData (JSON and AtomPub) and SOAP, publishing pages, queries and codeunits as endpoints, the APIs subtopic (261 pages), and security.\n\nFive pages sit directly in the hub. Four cover cross-cutting operations: troubleshooting errors, performance guidance, web service telemetry, and the terms of use. The fifth gives refactoring guidance for replacing legacy integration records with system fields such as SystemId and SystemModifiedAt.\n\nTo start, read the publishing subtopic if you need to expose an object, or the OData, SOAP or APIs subtopic if you are consuming one. Then read web services security to choose authentication. Use the troubleshooting, performance and telemetry pages once calls are running.

## Key points

- Subtopics: Web services security (7 pages), APIs (261), OData (14), Publishing pages and codeunits as OData/SOAP endpoints (5), SOAP (4).
- Security covers basic, OAuth and service-to-service authentication, certificates, supported cipher suites for outgoing HTTPS calls, and network restriction with Azure service tags.
- OData pages cover JSON and AtomPub, the metadata document, filtering, modifying records, V4 unbound actions, transactional batches, and error codes.
- Publishing covers pages, queries and codeunits as OData V4 or SOAP endpoints, including bound actions. The SOAP feature key was removed in version 30.0.
- SOAP pages cover converting bookmark keys to record IDs, keeping data with static proxies, finding company names with SystemService, and handling optional fields.
- Troubleshooting guidance helps decide whether an error comes from the client, the network or the server endpoint. It uses HTTP status codes, telemetry, OData error codes and debugging.
- Performance guidance gives patterns and anti-patterns for the server endpoint and the consumer, including API client and Power BI performance.
- Web service telemetry tracks incoming SOAP, OData and API requests, access key usage and publish failures.

## Subtopics

- [Web services security](web-services/web-services-security.md) (7 pages)
- [APIs](web-services/apis.md) (261 pages)
- [OData](web-services/odata.md) (14 pages)
- [Publishing pages and codeunits as OData/SOAP web service endpoints](web-services/publishing-pages-and-codeunits-as-odata.md) (5 pages)
- [SOAP](web-services/soap.md) (4 pages)

## More Learn pages

- [Compare REST APIs, OData, and SOAP web services in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-services): Compare the features of REST APIs, SOAP, and OData web services and know how to create and maintain these services.
- [Integration Management Refactoring Guidance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integration-record-refactoring): This article offers guidance for refactoring the code in your Marketplace app or per-tenant extension to use system fields rather than integration records.
  - In the observatory: [Codeunit 49 "GlobalTriggerManagement"](../../../objects/codeunit/49.md)
- [Troubleshooting web service errors (OData, API, and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting): Learn about how to troubleshoot Business Central web service errors (OData, API, and SOAP).
- [Web Service Performance (OData, API, and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-performance): Learn about how performance of Business Central web services (OData, API, and SOAP)
- [Web Service Telemetry in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry): Monitor Business Central web service requests with telemetry to analyze endpoint usage, HTTP failures, access key authentication, and publishing errors.
- [Web Services Terms of Use](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/webservices-terms-of-use): Terms of Use for Business Central APIs

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12324 Obsolete Http Web Request Mgt. usage in public API (webhooks, OData)](../../../changes/bcapps/12324.md) (code change): "webhook and OData public APIs by replacing DotNet-based code with native HttpClient"
- [#12606 Obsolete Http Web Request Mgt. codeunit](../../../changes/bcapps/12606.md) (code change): "Http Web Request Mgt. codeunit and its test are marked obsolete"
- [#8051 [Edit in Excel] Expose ExternalizeODataObjectName and add Page Control Field publisher](../../../changes/bcapps/8051.md) (code change): "Exposes ExternalizeODataObjectName as public procedure for external apps"
- [#8698 [E-Documents Core] [Peppol] - Enabling EDI capabilities with E-Documents. PEPPOL Order Response Message Handling](../../../changes/bcapps/8698.md) (code change): "PEPPOL Order Response Message Handling. E-documents now track order responses and acknowledgements"
- [#9737 [E-Document] Move Data Exchange definitions from labels to app resource files](../../../changes/bcapps/9737.md) (code change): "Move Data Exchange definitions from labels to app resource files"
- [#9751 Extract invoice date into Invoice Date field and recover due date fro…](../../../changes/bcapps/9751.md) (code change): "Invoice Date field is mapped from extracted invoice date in both ADI and MLLM readers"
- [#9772 [PA][Pioneer]: Numeric line fields mis-extracted (discount, quantity, unit of measure)](../../../changes/bcapps/9772.md) (code change): "E-Document importer now preserves zero quantities instead of forcing them to 1"
- [#9784 [E-Document Formats] Fix defects in V2 draft migration for XRechnung, PINT A-NZ and Factura-E](../../../changes/bcapps/9784.md) (code change): "Fix defects in V2 draft migration for XRechnung, PINT A-NZ and Factura-E"
- [#9796 Show a message when an e-document file cannot be viewed or no data could be extracted](../../../changes/bcapps/9796.md) (code change): "E-document import handling now displays user-friendly messages when a PDF file cannot be displayed"
- [#9872 Add missing telemetry event IDs to E-Document Session.LogMessage calls](../../../changes/bcapps/9872.md) (code change): "Added missing telemetry event IDs to 21 Session.LogMessage calls in E-Document"
- [How to Work with JSON in Business Central’s AL Code](../../../posts/aardvarklabs-blog/1826.md) (community post): "Working with JSON in Business Central AL involves understanding JSON structures"
- [What's New: Server and Database - More Stable Web Services (2023 release wave 2)](../../../videos/sk5CaXnvvng.md) (video): "web services; odata; http status codes; error handling"
- [What's New: Web Services in Business Central (2024 release wave 1)](../../../videos/VpNQ-CYNrkM.md) (video): "cookies support; http client; odata; api performance; web service queue"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 812 "API Overview"](../../../objects/page/812.md) · on [Table 812 "API Overview Buffer"](../../../objects/table/812.md) · via [APIs](web-services/apis.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
