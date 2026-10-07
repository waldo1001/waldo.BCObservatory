---
id: topic/dev-itpro/integration/web-services/publishing-pages-and-codeunits-as-odata
type: topic
title: Publishing pages and codeunits as OData/SOAP web service endpoints
summary: Publishing pages, queries, and codeunits as OData and SOAP web service endpoints in Business Central. It answers questions on publishing steps, OData V4 bound actions, UI handling in web services, troubleshooting errors, and the SOAP feature key removed in version 30.0.
tier: official
language: en
system: service
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:08.742Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a7a158b82bf57de0eb0641b530e17d473a087a93415125d0ff8bb09f109fab14
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-bound-action
    title: Creating and Interacting with an OData V4 Bound Action
    date: "2021-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/handling-ui-interaction-when-working-with-web-Services
    title: Handling UI interaction when working with web services
    date: "2023-12-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/publish-web-service
    title: Publish a Web Service
    date: "2025-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting-soap-odata-ui-pages
    title: Troubleshooting errors in OData/SOAP web services on pages, queries, and codeunits.
    date: "2025-03-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-bound-action
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-disable-soap-microsoft-pages-feature-key
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/handling-ui-interaction-when-working-with-web-Services
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/publish-web-service
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting-soap-odata-ui-pages
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/web-services
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11342
learn_toc_path:
  - Integration
  - Web services
  - Publishing pages and codeunits as OData/SOAP web service endpoints
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/web-services
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: db282498532ebc21b5238e305261c1b7632511e39c4c2918f0b1e086519818bb
narrative: generated
---

# Publishing pages and codeunits as OData/SOAP web service endpoints

> Publishing pages, queries, and codeunits as OData and SOAP web service endpoints in Business Central. It answers questions on publishing steps, OData V4 bound actions, UI handling in web services, troubleshooting errors, and the SOAP feature key removed in version 30.0.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > Publishing pages and codeunits as OData/SOAP web service endpoints · tier official · system service · narrative reviewed by Opus

## Overview

This section explains how to expose Business Central objects as web services. The core page, Publish a Web Service, covers creating and publishing API, OData, and SOAP endpoints from the Web Services page, including URL formats and configuration options for exposed objects.

The other pages cover specific topics. One shows how to create OData V4 bound actions with the ServiceEnabled attribute and WebServiceActionContext. One explains how to handle dialogs and exceptions in web service calls with GUIALLOWED. One covers troubleshooting errors. One describes the feature key that controls SOAP publishing of Microsoft UI pages, which was deprecated and removed in version 30.0.

Start with Publish a Web Service to get an endpoint running. Then read the UI interaction page when code may show dialogs, and the troubleshooting page when calls fail. If you rely on SOAP over Microsoft pages, read the feature key page for migration guidance.

## Key points

- Publish a Web Service covers API, OData, and SOAP publishing through the Web Services page, with URL formats and options such as eTag calculations and the SystemId field.
- OData V4 bound actions expose procedures as web service actions using the ServiceEnabled attribute.
- WebServiceActionContext and WebServiceActionResultCode set the operation result and entity keys in a bound action.
- GUIALLOWED lets code suppress dialogs and user interaction when it runs through a web service.
- Errors can originate from the client, network, or server, so troubleshooting has to consider all three.
- Avoid Microsoft page APIs for web services and use the stable built-in APIs instead.
- The Disable SOAP web services on Microsoft UI pages feature key was deprecated and removed in version 30.0.
- The feature key page points to REST APIs or OData V4 as alternatives to SOAP on Microsoft pages and also covers per-tenant extension support.

## Learn pages

- [Creating and Interacting with an OData V4 Bound Action](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-bound-action): Document how to create and interact with an OData V4 Bound Action in AL.
- [Disable SOAP web services on Microsoft UI pages feature key](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-disable-soap-microsoft-pages-feature-key): Learn about the Disable SOAP web services on Microsoft UI pages feature key.
- [Handling UI interaction when working with web services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/handling-ui-interaction-when-working-with-web-Services): Describes how UI methods can make web service calls fail.
- [Publish a Web Service](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/publish-web-service): Explains how to publish page, query, and codeunits as web services.
- [Troubleshooting errors in OData/SOAP web services on pages, queries, and codeunits.](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting-soap-odata-ui-pages): Learn about how to troubleshoot Business Central web service errors on OData/SOAP endpoints on pages, queries, and codeunits.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11342 [29.x][ALL-E] Document Type is Quote in Document Attachment table (1173) after posting a Sales Invoice with attachmentsIntial Commit](../../../../changes/bcapps/11342.md) (code change): "Document attachments transferred after posting a sales invoice"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
