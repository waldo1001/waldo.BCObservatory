---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs/troubleshoot-web-services
type: topic
title: Troubleshoot web services
summary: Troubleshooting guides for Business Central web services (OData, API and SOAP). They answer questions about failed calls, HTTP status codes, OData error codes, how AL runtime exceptions map to OData errors, and which telemetry and debugging tools help find the cause.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:30.090Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d9bf00fe3b667712e7655b2e957b0c4f9a39427f090b4cc21b1608d9487ae80b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes
    title: Troubleshooting REST API/OData calls
    date: "2024-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting
    title: Troubleshooting web service errors (OData, API, and SOAP)
    date: "2024-01-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Troubleshooting
  - Troubleshooting guides (TSGs)
  - Troubleshoot web services
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 450c29b6fcb4306d7db5e3d415d0cf18871a4c874ff1e9fa376a1f3ba1977a61
narrative: generated
---

# Troubleshoot web services

> Troubleshooting guides for Business Central web services (OData, API and SOAP). They answer questions about failed calls, HTTP status codes, OData error codes, how AL runtime exceptions map to OData errors, and which telemetry and debugging tools help find the cause.

Path: [Development](../../../development.md) > [Troubleshooting](../../troubleshooting.md) > [Troubleshooting guides (TSGs)](../troubleshooting-guides-tsgs.md) > Troubleshoot web services · tier official · system development · narrative reviewed by Opus

## Overview

This section holds two troubleshooting guides for failed web service calls in Business Central. One is a general guide for OData, API and SOAP errors. The other focuses on REST API and OData calls.

The general guide helps you decide whether an error comes from the client, the network or the server endpoint. It points to HTTP status codes, web service telemetry, OData error codes, debugging tools, external service calls and comparing environments.

The REST API/OData guide goes deeper on error codes and maps AL runtime exceptions to the OData error messages they produce. Start with the general guide to locate the source of the failure. Then use the REST API/OData guide to interpret specific error responses.

## Key points

- Two pages: a general guide for OData, API and SOAP errors, and one specific to REST API/OData calls.
- First step is to identify whether the error originates from the client, network or server endpoint.
- HTTP status codes and OData error codes are the main signals for diagnosing a failed call.
- Web service telemetry is a key tool for investigating failures.
- The REST API/OData page maps AL runtime exceptions to OData error messages.
- The AL debugger and other debugging tools can be used to investigate server-side problems.
- Comparing environments and checking external service calls are listed as troubleshooting approaches.

## Learn pages

- [Troubleshooting REST API/OData calls](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes): Learn about how to troubleshoot Business Central web service errors of types REST API or OData.
- [Troubleshooting web service errors (OData, API, and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting): Learn about how to troubleshoot Business Central web service errors (OData, API, and SOAP).

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
