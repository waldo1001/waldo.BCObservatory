---
id: guideline/microsoft/knowledge/security/secrettext-with-httpclient
type: guideline
title: Set secret request URIs on HttpRequestMessage
summary: The secret URI API belongs to HttpRequestMessage, not HttpClient. HttpRequestMessage.SetSecretRequestUri(SecretText) keeps a credential-bearing URI protected, and the prepared request is sent with HttpClient.Send.
tier: official
language: en
tags:
  - secrettext
  - httpclient
  - setsecretrequesturi
  - containssecret
  - headers
  - http
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:57.832Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1395563ccecf7d3cc393234fb488b8cfaf3ce585
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-with-httpclient.md
    title: "microsoft/BCQuality: Set secret request URIs on HttpRequestMessage"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/secrettext/secrettext-secretstrsubstno-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpheaders/httpheaders-containssecret-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/108
    - change/bcquality/92
repo_path: microsoft/knowledge/security/secrettext-with-httpclient.md
layer: microsoft
kind: rule
domain: security
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - HttpRequestMessage
  - HttpClient
  - SecretText
  - SecretStrSubstNo
  - ContainsSecret
  - StrSubstNo
---

# Set secret request URIs on HttpRequestMessage

> The secret URI API belongs to HttpRequestMessage, not HttpClient. HttpRequestMessage.SetSecretRequestUri(SecretText) keeps a credential-bearing URI protected, and the prepared request is sent with HttpClient.Send.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-with-httpclient.md) · microsoft layer · security · BC 23.. · tier official · derived

## Description

The secret URI API belongs to `HttpRequestMessage`, not `HttpClient`. `HttpRequestMessage.SetSecretRequestUri(SecretText)` keeps a credential-bearing URI protected, and the prepared request is sent with `HttpClient.Send`. Companion APIs also accept `SecretText`, including `HttpHeaders.Add` for authorization headers and `HttpContent.WriteFrom` for secret request bodies.

## Best Practice

Compose a secret URI with `SecretStrSubstNo`, call `Request.SetSecretRequestUri(SecretUri)`, set the request method, and send the request with `HttpClient.Send(Request, Response)`. For authorization, get the request headers, add a `SecretText` value, and use `ContainsSecret` when checking for that header. See sample: [`secrettext-with-httpclient.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-with-httpclient.good.al).

## Anti Pattern

Holding a credential in `Text`, interpolating it with `StrSubstNo` or concatenation, and passing that plain text to `HttpClient.Get` or `HttpHeaders.Add`. The secret-aware request and header APIs remove the need to materialize the value as `Text`. This HTTP-sink rule supersedes the generic `secrettext-for-credentials.md` rule at the same location. See sample: [`secrettext-with-httpclient.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-with-httpclient.bad.al).

## Examples

- [Good: secrettext-with-httpclient.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-with-httpclient.good.al)
- [Bad: secrettext-with-httpclient.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/secrettext-with-httpclient.bad.al)

## Names

- [SecretText.SecretStrSubstNo(Text \[, SecretText,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/secrettext/secrettext-secretstrsubstno-method) (names SecretStrSubstNo)
- [HttpHeaders.ContainsSecret(Text) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpheaders/httpheaders-containssecret-method) (names ContainsSecret)
- [Text.StrSubstNo(Text \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/text/text-strsubstno-method) (names StrSubstNo)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
