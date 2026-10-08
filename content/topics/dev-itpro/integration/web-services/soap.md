---
id: topic/dev-itpro/integration/web-services/soap
type: topic
title: SOAP
summary: "SOAP web services in Business Central: how to consume them from client applications. It answers questions about converting bookmark keys to record IDs, keeping data when using static proxies, finding company names with SystemService, and handling optional fields."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:58.266Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cdbcc6fc1ac570b4ecdddfbda4fd114d59e4574fb68033b5c8397f905b615880
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/GetRecIdFromKey-operation
    title: GetRecIdFromKey
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/preserving-data-when-working-with-a-statically-generated-proxy
    title: Preserving Data When Working with a Statically Generated Proxy
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-systemservice-to-find-companies
    title: Use SystemService to Find Companies
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-properties-to-indicate-field-value
    title: Using Properties Indicate the Presence of a Value in a Field
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/GetRecIdFromKey-operation
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/preserving-data-when-working-with-a-statically-generated-proxy
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-systemservice-to-find-companies
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-properties-to-indicate-field-value
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/web-services
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/11654
  guidelines: []
learn_toc_path:
  - Integration
  - Web services
  - SOAP
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/web-services
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 9aa1f3edba197b5586f439fa5d8b256ee1a551d64a8a275a5c1392b1a9ba83e5
narrative: generated
---

# SOAP

> SOAP web services in Business Central: how to consume them from client applications. It answers questions about converting bookmark keys to record IDs, keeping data when using static proxies, finding company names with SystemService, and handling optional fields.

Path: [Integration](../../integration.md) > [Web services](../web-services.md) > SOAP · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers practical topics for developers who call Business Central SOAP web services from client code. The pages are standalone how-to and reference topics, with no subtopics.

Start with Use SystemService to Find Companies if your client needs a company name before it calls other web services. Then read the pages on proxies and optional fields, which explain how generated client code behaves. GetRecIdFromKey is a reference for converting a bookmark key into a record ID.

## Key points

- GetRecIdFromKey converts a bookmark key, which holds primary key and concurrency information, into a record ID for web service operations.
- With a statically generated SOAP proxy, data can be lost. Avoid this by regenerating the proxy whenever the client application builds.
- The SystemService SOAP web service has a Companies method that lists the companies in a Business Central database.
- Use SystemService to get company names before accessing other web services.
- Optional fields in web service clients use Boolean *Specified properties for .NET value types.
- For reference types, a null value indicates that a field has no value.

## Learn pages

- [GetRecIdFromKey](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/GetRecIdFromKey-operation)
- [Preserving Data When Working with a Statically Generated Proxy](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/preserving-data-when-working-with-a-statically-generated-proxy)
- [Use SystemService to Find Companies](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-systemservice-to-find-companies)
- [Using Properties Indicate the Presence of a Value in a Field](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/use-properties-to-indicate-field-value): Using properties with Visual Studio to indicate the presence of a value in a field.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central 2025 Wave 1 release: the state of SOAP deprecation.](../../../../posts/demiliani-com/11654.md) (community post): "SOAP web services for Microsoft UI pages, disabling this capability by default while allowing re-enablement via Feature Management"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
