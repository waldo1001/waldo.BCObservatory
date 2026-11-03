---
id: topic/dev-itpro/integration/web-services/publishing-pages-and-codeunits-as-odata
type: topic
title: Publishing pages and codeunits as OData/SOAP web service endpoints
summary: Publishing Business Central pages, queries, and codeunits as OData V4 or SOAP web service endpoints. It answers questions on publishing, bound actions, UI handling in web service calls, troubleshooting errors, and the SOAP feature key removed in version 30.0.
tier: official
language: en
system: service
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-03T01:02:13.361Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0badbba87a156ada005af1f0423b840f2bd2d7c6a5d371a5866d15ecda9329c3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-bound-action
    title: Creating and Interacting with an OData V4 Bound Action
    date: "2026-10-29"
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
    title: Publish a Web Service in Business Central
    date: "2026-10-29"
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
    - change/bcapps/10992
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

> Publishing Business Central pages, queries, and codeunits as OData V4 or SOAP web service endpoints. It answers questions on publishing, bound actions, UI handling in web service calls, troubleshooting errors, and the SOAP feature key removed in version 30.0.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > Publishing pages and codeunits as OData/SOAP web service endpoints · tier official · system service · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to expose pages, queries, and codeunits as web service endpoints, using OData V4 or SOAP. The main page describes publishing on the Web Services page and notes that API pages and API queries should be used for new integrations instead of standard web service publication.

Other pages cover specific tasks. One walks through creating an OData V4 bound action that copies unposted sales invoices and is called with HTTP POST. Another explains how to use GUIALLOWED to suppress dialogs and handle exceptions when code runs through a web service. A troubleshooting page explains that errors can come from the client, network, or server, and advises against relying on Microsoft page APIs in favor of stable built-in APIs.

Start with the publishing page to understand the endpoints. Then read the UI handling and bound action pages if you write AL code for them. Check the feature key page if you still use SOAP on Microsoft UI pages, since it was deprecated and removed in version 30.0.

## Key points

- Pages, queries, and codeunits are published on the Web Services page and become OData V4 or SOAP endpoints.
- For new integrations, use API pages and API queries instead of standard web service publication.
- OData V4 bound actions run AL procedures on specific records and are called via HTTP POST.
- Bound actions use the ServiceEnabled attribute, WebServiceActionContext, and the ODataKeyFields property on the page.
- Use GUIALLOWED to suppress dialogs and user interaction when code runs through a web service.
- The Disable SOAP web services on Microsoft UI pages feature key was deprecated and removed in version 30.0; migrate to REST APIs or OData.
- Web service errors can originate from the client, network, or server, so troubleshoot each layer.
- Avoid exposing Microsoft pages as APIs; prefer stable built-in APIs.

## Learn pages

- [Creating and Interacting with an OData V4 Bound Action](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-and-interacting-with-odatav4-bound-action): Create an OData V4 bound action in AL, publish its page, and call it with an authenticated POST request to copy an existing sales invoice in Business Central.
  - In the observatory: [Codeunit 6620 "Copy Document Mgt."](../../../../objects/codeunit/6620.md)
- [Disable SOAP web services on Microsoft UI pages feature key](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-disable-soap-microsoft-pages-feature-key): Learn about the Disable SOAP web services on Microsoft UI pages feature key.
- [Handling UI interaction when working with web services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/handling-ui-interaction-when-working-with-web-Services): Describes how UI methods can make web service calls fail.
- [Publish a Web Service in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/publish-web-service): Publish OData V4 and SOAP web services in Business Central. Choose supported objects, set permissions, verify service URLs, and unpublish services.
  - In the observatory: [Page 21 "Customer Card"](../../../../objects/page/21.md), [Page 810 "Web Services"](../../../../objects/page/810.md)
- [Troubleshooting errors in OData/SOAP web services on pages, queries, and codeunits.](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting-soap-odata-ui-pages): Learn about how to troubleshoot Business Central web service errors on OData/SOAP endpoints on pages, queries, and codeunits.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10992 [Extensibility Request] issue 30420: add service post and send events](../../../../changes/bcapps/10992.md) (code change): "extension points that allow integrations to support additional service"
- [#11342 [29.x][ALL-E] Document Type is Quote in Document Attachment table (1173) after posting a Sales Invoice with attachmentsIntial Commit](../../../../changes/bcapps/11342.md) (code change): "Document attachments transferred after posting a sales invoice"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
