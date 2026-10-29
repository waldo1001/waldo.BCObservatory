---
id: guideline/microsoft/knowledge/security/integrationevent-must-not-expose-secrets
type: guideline
title: Do not pass credentials or secrets through IntegrationEvent parameters
summary: "[IntegrationEvent] publishes a hook that any extension can subscribe to. Every parameter of the event signature is visible to every subscriber — including var parameters, which subscribers can both read and modify."
tier: official
language: en
tags:
  - integrationevent
  - eventsubscriber
  - secrets
  - credentials
  - publisher
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.664Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bd6a226241ddc22ecccb9fa8e69916f05a9b40fe
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-must-not-expose-secrets.md
    title: "microsoft/BCQuality: Do not pass credentials or secrets through IntegrationEvent parameters"
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
repo_path: microsoft/knowledge/security/integrationevent-must-not-expose-secrets.md
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
  - IsHandled
  - ApiKey
  - SecretText
---

# Do not pass credentials or secrets through IntegrationEvent parameters

> [IntegrationEvent] publishes a hook that any extension can subscribe to. Every parameter of the event signature is visible to every subscriber — including var parameters, which subscribers can both read and modify.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-must-not-expose-secrets.md) · microsoft layer · security · BC all · tier official · derived

## Description

`[IntegrationEvent]` publishes a hook that any extension can subscribe to. Every parameter of the event signature is visible to every subscriber — including `var` parameters, which subscribers can both read and modify. A publisher that includes an API key, password, bearer token, or other secret in the event signature hands that secret to every subscriber on the tenant, including subscribers in extensions the publisher has no relationship with. There is no permission or partner-only filter that limits who may subscribe.

## Best Practice

Restrict event payloads to the non-sensitive context a subscriber legitimately needs: the business record being processed (a `Customer`), the operation being performed, an `IsHandled` flag that lets a subscriber skip the default behaviour, and a mutable payload object whose contents the publisher controls. Authentication is handled by the publisher before or after the event, never inside the parameters. See sample: [`integrationevent-must-not-expose-secrets.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-must-not-expose-secrets.good.al).

## Anti Pattern

`[IntegrationEvent(false, false)] procedure OnBeforeSendRequest(var ApiKey: Text; var Password: Text; var RequestUrl: Text)` — any extension on the tenant can subscribe, read `ApiKey` and `Password`, and persist them elsewhere. Reviewers should flag any event parameter whose name or type suggests a secret (`ApiKey`, `Token`, `Password`, `Secret`, `Credential`, `SecretText` — even `SecretText` should not flow through an event surface). See sample: [`integrationevent-must-not-expose-secrets.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-must-not-expose-secrets.bad.al).

## Examples

- [Good: integrationevent-must-not-expose-secrets.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-must-not-expose-secrets.good.al)
- [Bad: integrationevent-must-not-expose-secrets.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-must-not-expose-secrets.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
