---
id: guideline/microsoft/knowledge/security/validate-unauthenticated-response-before-use
type: guideline
title: Validate responses from unauthenticated endpoints before trusting them
summary: When AL calls an external endpoint that does not authenticate *itself* to the client, the response is fully attacker-influenceable — cleartext MITM, a spoofed or compromised host, DNS/redirect games, or simply a misbehaving public service.
tier: official
language: en
tags:
  - unauthenticated
  - ssrf
  - httpclient
  - soap
  - response-validation
  - integrity
  - size-limit
  - disablehttpscheck
  - temp-blob
  - vies
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:08.474Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ca09d5680f093e3cdfc0d028d8f508aa2dd98540
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-unauthenticated-response-before-use.md
    title: "microsoft/BCQuality: Validate responses from unauthenticated endpoints before trusting them"
    date: "2026-09-15"
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
    - change/bcquality/187
repo_path: microsoft/knowledge/security/validate-unauthenticated-response-before-use.md
layer: microsoft
kind: rule
domain: security
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
  - countryCode
  - vatNumber
  - SecretText
  - DisableHttpsCheck
---

# Validate responses from unauthenticated endpoints before trusting them

> When AL calls an external endpoint that does not authenticate *itself* to the client, the response is fully attacker-influenceable — cleartext MITM, a spoofed or compromised host, DNS/redirect games, or simply a misbehaving public service.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-unauthenticated-response-before-use.md) · microsoft layer · security · BC all · tier official · derived

## Description

When AL calls an external endpoint that does not authenticate *itself* to the client, the response is fully attacker-influenceable — cleartext MITM, a spoofed or compromised host, DNS/redirect games, or simply a misbehaving public service. Recognizing that a call is unauthenticated is the first review step, and the signals are BC-specific: a bare `HttpClient.Get`/`Post` with no `Authorization` header, no acquired OAuth token, and no client certificate; a SOAP request whose credentials are blank, such as `SOAP Web Service Request Mgt.SetGlobals(..., '', BlankSecretText)`; or any request issued after `DisableHttpsCheck()` over plain HTTP (for example the EU VIES VAT service, whose default endpoint is `http://`). Because the BC platform HTTP stack buffers the entire response body before AL is handed the stream or `Temp Blob`, the whole payload is already in memory by the time AL parses it — so the response must pass three checks in AL — **response size**, **schema compliance**, and **content integrity** — *before* any of it is written to tax, VAT, customer, or vendor tables.

## Best Practice

Before parsing or trusting a response from an unauthenticated endpoint, apply all three of these checks before the payload reaches business logic: (1) **Response size** — reject when the buffered `Temp Blob` length or `Content-Length` exceeds a small cap sized to the expected payload; (2) **Schema compliance** — require the specific scalar nodes/fields you expect in the expected shape, not merely "the body contains a truthy flag"; (3) **Content integrity** — when the protocol echoes the identifiers you queried (VIES echoes `countryCode`/`vatNumber`; a public-IP service echoes an IP string), require them to be present and to match the request, so a response carrying only `valid=true` cannot be accepted for an arbitrary input. On any failing check, raise an `Error` and record a security audit via `Audit Log.LogAuditMessage(...)` plus telemetry. See sample: [`validate-unauthenticated-response-before-use.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-unauthenticated-response-before-use.good.al). For validating the outbound target/host, see `validate-user-configurable-urls.md`; for authenticating outbound calls, see `prefer-oauth2-over-api-keys-for-external-http-calls.md`.

## Anti Pattern

Feeding the parsed response straight into business logic — load the XML/JSON, read a `valid` flag or an IP-shaped substring, then `Customer.Modify()` — trusting it purely because the HTTP call returned 2xx, with no size, shape, or echoed-identifier check. Reviewers should flag an unauthenticated outbound call (no `Authorization`/OAuth/cert, blank SOAP `SecretText`, or a request after `DisableHttpsCheck`) whose response is parsed and persisted without a preceding size cap, schema check, and request-to-response integrity check. Do NOT, however, demand a streaming or bounded read that aborts the transfer mid-download, nor a resolved-IP/DNS-rebinding check: the platform buffers the full body before AL sees it and AL has no connection-time or DNS hook, so an in-AL size check necessarily runs after buffering and host-rebinding defense belongs to the platform egress layer — raising those is a false positive. HTTPS is likewise not always enforceable (VIES is HTTP by design); the mitigation there is response validation, not scheme enforcement. See sample: [`validate-unauthenticated-response-before-use.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-unauthenticated-response-before-use.bad.al).

## Examples

- [Good: validate-unauthenticated-response-before-use.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-unauthenticated-response-before-use.good.al)
- [Bad: validate-unauthenticated-response-before-use.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-unauthenticated-response-before-use.bad.al)

## Changed by

- [#187 Code reviewer skill for recognizing and validating unauthenticated responses](../../../../changes/bcquality/187.md), 2026-09-16

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
