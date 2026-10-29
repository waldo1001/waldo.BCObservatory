---
id: guideline/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls
type: guideline
title: Prefer OAuth2 over API keys for external HTTP calls
summary: External HTTP integrations from AL can authenticate using OAuth 2.0 (client-credentials for service-to-service, authorization-code for user-delegated), API keys, basic authentication, or credentials in URLs.
tier: official
language: en
tags:
  - oauth2
  - api-key
  - authentication
  - httpclient
  - token-refresh
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:52.520Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cf0db17e4c261361909a959c86d1c75b03a228be
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.md
    title: "microsoft/BCQuality: Prefer OAuth2 over API keys for external HTTP calls"
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
    - change/bcquality/49
repo_path: microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.md
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
  - OAuth2
  - AcquireTokenWithClientCredentials
  - AcquireAuthorizationCodeTokenFromCache
  - SecretText
---

# Prefer OAuth2 over API keys for external HTTP calls

> External HTTP integrations from AL can authenticate using OAuth 2.0 (client-credentials for service-to-service, authorization-code for user-delegated), API keys, basic authentication, or credentials in URLs.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.md) · microsoft layer · security · BC all · tier official · derived

## Description

External HTTP integrations from AL can authenticate using OAuth 2.0 (client-credentials for service-to-service, authorization-code for user-delegated), API keys, basic authentication, or credentials in URLs. The mechanisms differ substantially in the blast radius of a leaked secret and in how cleanly tokens can be rotated. OAuth-issued tokens expire on their own schedule and rotate cleanly; API keys and basic-auth passwords typically have to be rotated manually and usually live unencrypted in a configuration table. When the partner supports OAuth, the difference is a material security improvement, not a stylistic preference.

## Best Practice

When the partner supports OAuth, use the platform `OAuth2` codeunit (`AcquireTokenWithClientCredentials` for service-to-service, `AcquireAuthorizationCodeTokenFromCache` for user-delegated flows) rather than hand-rolled token acquisition. Carry tokens and client secrets as `SecretText`, persist them only in IsolatedStorage, and refresh tokens proactively — on a buffer before the documented expiry — so routine calls never block on a token refresh.

See sample: [`prefer-oauth2-over-api-keys-for-external-http-calls.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.good.al).

## Anti Pattern

Accepting an API-key or basic-auth integration because it is the first option documented, even when the partner supports OAuth. The shared secret usually ends up in a setup-table `Text` field, rotation becomes a manual operation that rarely happens, and a single disclosure exposes every tenant using the extension.

See sample: [`prefer-oauth2-over-api-keys-for-external-http-calls.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.bad.al).

## Examples

- [Good: prefer-oauth2-over-api-keys-for-external-http-calls.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.good.al)
- [Bad: prefer-oauth2-over-api-keys-for-external-http-calls.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/prefer-oauth2-over-api-keys-for-external-http-calls.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#49 Promote security knowledge from community to Microsoft layer](../../../../changes/bcquality/49.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
