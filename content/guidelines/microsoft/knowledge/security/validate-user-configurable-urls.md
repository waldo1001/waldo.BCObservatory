---
id: guideline/microsoft/knowledge/security/validate-user-configurable-urls
type: guideline
title: Validate URLs that come from table fields before calling them
summary: "A URL stored in a table field is user-configurable: anyone with write access to the row can change it."
tier: official
language: en
tags:
  - ssrf
  - uri
  - url-validation
  - areurishavesamehost
  - isvaliduripattern
  - httpclient
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:57.905Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8f79b0474b02b7d9e4908fe0539768d5e7eda530
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-user-configurable-urls.md
    title: "microsoft/BCQuality: Validate URLs that come from table fields before calling them"
    date: "2026-09-09"
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
    - change/bcquality/174
repo_path: microsoft/knowledge/security/validate-user-configurable-urls.md
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
  - HttpClient
  - OnValidate
---

# Validate URLs that come from table fields before calling them

> A URL stored in a table field is user-configurable: anyone with write access to the row can change it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-user-configurable-urls.md) · microsoft layer · security · BC all · tier official · derived

## Description

A URL stored in a table field is user-configurable: anyone with write access to the row can change it. If that URL is then used as the target of an `HttpClient.Get`/`Post`, the extension becomes a server-side request forgery (SSRF) primitive — an attacker can redirect the call to an internal endpoint, to a metadata service, or to a malicious host that mirrors the legitimate API. The `Uri` codeunit from System Modules provides two validators built for this situation: `AreURIsHaveSameHost()` checks that two URLs share the same host (use when the hostname should not change — for example, the extension always talks to `api.contoso.com`). `IsValidURIPattern()` checks that a URL matches a wildcard pattern (use when the host varies but follows a predictable shape — for example `https://{store}.myshopify.com/...`).

## Best Practice

Before any `HttpClient` call whose URL came from a table field, call `Uri.AreURIsHaveSameHost(StoredUrl, ExpectedBaseUrl)` against a hard-coded expected base, or `Uri.IsValidURIPattern(StoredUrl, 'https://*.myshopify.com/*')` against a fixed pattern. Fail the call with an `Error` when the validator returns false. For webhook scenarios where the host is registered out-of-band, compare against the registered host stored alongside the URL. See sample: [`validate-user-configurable-urls.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-user-configurable-urls.good.al).

## Anti Pattern

`HttpClient.Get(Setup."Service URL", Response)` or `HttpClient.Post(WebhookSetup."Callback URL", Content, Response)` with no validation step in between. The extension will dutifully send the request — and any sensitive payload — to whatever host the attacker put in the field. Reviewers should flag any `HttpClient` call whose first argument is a record field, an `OnValidate`-mutable field, or a value sourced from a table read, unless a `Uri.AreURIsHaveSameHost` or `Uri.IsValidURIPattern` check precedes it. See sample: [`validate-user-configurable-urls.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-user-configurable-urls.bad.al).

## Examples

- [Good: validate-user-configurable-urls.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-user-configurable-urls.good.al)
- [Bad: validate-user-configurable-urls.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/validate-user-configurable-urls.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
