---
id: guideline/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access
type: guideline
title: Handle HttpClient platform failure before accessing the response
summary: AL HttpClient methods can fail before a usable HTTP response exists because of an invalid request, DNS or network failure, certificate validation, timeout, a disabled extension setting, or the response-size limit.
tier: official
language: en
tags:
  - httpclient
  - transport-failure
  - boolean-return
  - httpresponsemessage
  - content
  - runtime-error
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:52.727Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e3dd227fb4111aecf97166cccd076a802bb1b6bb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.md
    title: "microsoft/BCQuality: Handle HttpClient platform failure before accessing the response"
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
repo_path: microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.md
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
  - HttpResponseMessage
---

# Handle HttpClient platform failure before accessing the response

> AL HttpClient methods can fail before a usable HTTP response exists because of an invalid request, DNS or network failure, certificate validation, timeout, a disabled extension setting, or the response-size limit.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

AL `HttpClient` methods can fail before a usable HTTP response exists because of an invalid request, DNS or network failure, certificate validation, timeout, a disabled extension setting, or the response-size limit. When code captures the optional Boolean return value, `false` reports this platform or transport failure. The accompanying `HttpResponseMessage` is not safe to consume; accessing its content after the failed call can raise another error and obscure the original failure.

## Best Practice

When capturing the Boolean return value from `Get`, `Post`, `Put`, `Delete`, or `Send`, stop the current response-processing path immediately when it is `false`. Report or propagate the transport failure without reading status, headers, or content. Omitting the optional Boolean is also valid when fail-fast behavior is intended: the runtime then raises an error if the operation cannot execute.

See sample: [`handle-httpclient-platform-failure-before-response-access.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.good.al).

## Anti Pattern

Capturing a failed call in a Boolean and then reading `Response.Content()`, parsing the body, or otherwise treating `Response` as usable. Do not report omission of the Boolean by itself; that form deliberately delegates failure propagation to the runtime.

See sample: [`handle-httpclient-platform-failure-before-response-access.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.bad.al).

## References

- [HttpClient.Send method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpclient/httpclient-send-method)
- [Call external services with HttpClient](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient)

## Examples

- [Good: handle-httpclient-platform-failure-before-response-access.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.good.al)
- [Bad: handle-httpclient-platform-failure-before-response-access.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/handle-httpclient-platform-failure-before-response-access.bad.al)

## Changed by

- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
