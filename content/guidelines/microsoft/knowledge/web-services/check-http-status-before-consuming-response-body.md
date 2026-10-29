---
id: guideline/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body
type: guideline
title: Check HTTP status before consuming the response body
summary: A successful AL HttpClient call only confirms that the platform completed the HTTP exchange. The server can still return 4xx or 5xx, often with an error document whose shape differs from the expected success payload.
tier: official
language: en
tags:
  - httpclient
  - httpresponsemessage
  - issuccessstatuscode
  - httpstatuscode
  - response-body
  - json
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:52.603Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f92487073caa0abad369e7a7e26e3fdec1360f0a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.md
    title: "microsoft/BCQuality: Check HTTP status before consuming the response body"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/196
repo_path: microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.md
layer: microsoft
kind: rule
domain: web-services
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - HttpClient
---

# Check HTTP status before consuming the response body

> A successful AL HttpClient call only confirms that the platform completed the HTTP exchange. The server can still return 4xx or 5xx, often with an error document whose shape differs from the expected success payload.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

A successful AL `HttpClient` call only confirms that the platform completed the HTTP exchange. The server can still return `4xx` or `5xx`, often with an error document whose shape differs from the expected success payload. Parsing that body as business data can produce misleading parse errors, incomplete records, or decisions based on an error response.

## Best Practice

After handling any platform or transport failure, check `HttpResponseMessage.IsSuccessStatusCode()` or the expected `HttpStatusCode()` before interpreting the response body as a success payload. Handle non-success status explicitly and include safe diagnostic context when appropriate. A bounded error body may be read for diagnostics, but it must not enter the success parsing path.

See sample: [`check-http-status-before-consuming-response-body.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.good.al).

## Anti Pattern

Checking only the Boolean result of `Get`, `Post`, `Put`, `Delete`, or `Send` and then parsing `Response.Content()` as the expected payload. The Boolean can be `true` for any HTTP status, including authentication failures, throttling, validation errors, and server failures.

See sample: [`check-http-status-before-consuming-response-body.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.bad.al).

## References

- [HttpResponseMessage.IsSuccessStatusCode method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpresponsemessage/httpresponsemessage-issuccessstatuscode-method)
- [HttpClient data type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpclient/httpclient-data-type)

## Examples

- [Good: check-http-status-before-consuming-response-body.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.good.al)
- [Bad: check-http-status-before-consuming-response-body.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/check-http-status-before-consuming-response-body.bad.al)

## Changed by

- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
