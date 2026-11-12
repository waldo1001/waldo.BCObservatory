---
id: topic/dev-itpro/integration/web-services
type: topic
title: Web services
summary: "Web services in Business Central: consuming and publishing OData, SOAP and API endpoints, securing them, and troubleshooting, tuning and monitoring them with telemetry. It answers questions on endpoint setup, authentication, errors, performance and the legacy integration records refactoring."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-11-03T01:02:12.823Z"
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 728a8c3a4061bc84762c12f21c12db9cae2a02e558407ac4c6fa31eb8e5d420e
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
    date: "2025-11-06"
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
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11563
    - change/bcapps/11745
    - change/bcapps/12324
    - change/bcapps/12606
    - change/bcapps/8051
    - change/bcapps/8698
    - change/bcapps/9914
    - change/bcquality/100
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
  blog: 0
  guideline: 0
bc_forms:
  - 812
member_hash: 059de4a5a07b7fb9ecf5db6c62e0fde637536d5a32547994b3a9c68747046252
narrative: generated
---

# Web services

> Web services in Business Central: consuming and publishing OData, SOAP and API endpoints, securing them, and troubleshooting, tuning and monitoring them with telemetry. It answers questions on endpoint setup, authentication, errors, performance and the legacy integration records refactoring.

Path: [Integration](../integration.md) > Web services · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers how external applications talk to Business Central through OData, SOAP and API endpoints. Subtopics split the work: publishing pages, queries and codeunits as endpoints, consuming OData and SOAP, a large set of API reference pages, and security (authentication, certificates, cipher suites, Azure service tags).

The section's own pages cover operations. Troubleshooting helps decide whether an error comes from the client, network or server, using HTTP status codes, OData error codes, telemetry and debugging. The performance page lists patterns and anti-patterns for endpoints and consumers, including Power BI. The telemetry page describes the logging of all SOAP, OData and API requests to partner telemetry.

Start with the publishing subtopic to expose an endpoint, then the OData, SOAP or API pages for the consuming side, and the security pages before going live. Use troubleshooting, performance and telemetry once calls are running. The Integration Management Refactoring Guidance page matters for extension developers still using legacy integration records.

## Key points

- Pages, queries and codeunits can be published as OData V4 or SOAP endpoints; the SOAP feature key was removed in version 30.0.
- OData pages cover JSON and AtomPub, the metadata document, filtering, modifying records, V4 unbound actions, transactional batches, and known limits.
- SOAP pages cover converting bookmark keys to record IDs, static proxies, finding company names with SystemService, and optional fields.
- Security options include basic, OAuth and service-to-service authentication, certificates, supported cipher suites for outgoing HTTPS, and Azure service tags for network restriction.
- Troubleshooting uses HTTP status codes, OData error codes, web service telemetry, debugging, and environment comparison.
- Performance guidance covers anti-patterns, performance patterns, API client and Power BI performance, and throughput handling.
- Web service telemetry logs all SOAP, OData and API requests, plus access key authentication and publish failures.
- Integration Management Refactoring Guidance explains replacing legacy integration records with system fields such as SystemId and SystemRowVersion, ahead of their removal in 2023 release wave 1.

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
- [Web Service Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-telemetry): Learn about how Business Central emits telemetry about web service requests
- [Web Services Terms of Use](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/webservices-terms-of-use): Terms of Use for Business Central APIs

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11563 [E-Documents Core] [Peppol] - Add PEPPOL Requested Delivery Period support (header + line)](../../../changes/bcapps/11563.md) (code change): "Add PEPPOL Requested Delivery Period support header + line"
- [#11745 Bug 648781: check the party identifier that the PEPPOL export will use](../../../changes/bcapps/11745.md) (code change): "PEPPOL validation now uses the same party identifier provider as export"
- [#12324 Obsolete Http Web Request Mgt. usage in public API (webhooks, OData)](../../../changes/bcapps/12324.md) (code change): "webhook and OData public APIs by replacing DotNet-based code with native HttpClient"
- [#12606 Obsolete Http Web Request Mgt. codeunit](../../../changes/bcapps/12606.md) (code change): "Http Web Request Mgt. codeunit and its test are marked obsolete"
- [#8051 [Edit in Excel] Expose ExternalizeODataObjectName and add Page Control Field publisher](../../../changes/bcapps/8051.md) (code change): "Exposes ExternalizeODataObjectName as public procedure for external apps"
- [#8698 [E-Documents Core] [Peppol] - Enabling EDI capabilities with E-Documents. PEPPOL Order Response Message Handling](../../../changes/bcapps/8698.md) (code change): "PEPPOL Order Response Message Handling. E-documents now track order responses and acknowledgements"
- [#9914 [APIV2] Return unapplied lines from the Vendor Payments API](../../../changes/bcapps/9914.md) (code change): "The Vendor Payments API now returns all payment lines in a batch, including unapplied payments"
- [#100 Add P0 integration and control add-in runtime guidance](../../../changes/bcquality/100.md) (code change): "Guidance and AL samples for linking API parts on SystemId and setting Multiplicity."
- [What's New: Server and Database - More Stable Web Services (2023 release wave 2)](../../../videos/sk5CaXnvvng.md) (video): "Editable Property Support in OData for Edit in Excel; HTTP 503 Return Code for Request Queue Timeout"
- [What's New: Web Services in Business Central (2024 release wave 1)](../../../videos/VpNQ-CYNrkM.md) (video): "Web Services in Business Central; OData; API performance; Web service queue; SOAP deprecation"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 812 "API Overview"](../../../objects/page/812.md) · on [Table 812 "API Overview Buffer"](../../../objects/table/812.md) · via [APIs](web-services/apis.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
