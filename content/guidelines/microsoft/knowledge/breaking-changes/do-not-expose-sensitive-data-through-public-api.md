---
id: guideline/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api
type: guideline
title: Do not widen access to expose sensitive data through a public API
summary: Every member you make publicly reachable becomes a contract you must keep — and when that member returns a secret, the contract leaks the secret.
tier: official
language: en
tags:
  - sensitive-data
  - secrettext
  - token
  - credential
  - public-api
  - access-boundary
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.609Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cb3f77207d0c3a0065c4c37ce1360e9a16e02c49
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.md
    title: "microsoft/BCQuality: Do not widen access to expose sensitive data through a public API"
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
    - change/bcquality/93
repo_path: microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.md
layer: microsoft
kind: rule
domain: breaking-changes
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
  - SecretText
---

# Do not widen access to expose sensitive data through a public API

> Every member you make publicly reachable becomes a contract you must keep — and when that member returns a secret, the contract leaks the secret.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.md) · microsoft layer · breaking-changes · BC 23.. · tier official · derived

## Description

Every member you make publicly reachable becomes a contract you must keep — and when that member returns a secret, the contract leaks the secret. Widening access to a credential happens in several shapes: a public getter that returns a raw token or password, an event whose parameter carries a secret to every subscriber, or a global variable holding a key that an extension can read. Once such a surface ships, removing it is itself a breaking change, so the exposure is hard to walk back. Sensitive material — tokens, passwords, connection secrets, `SecretText` values, security internals — must stay inside `internal` or `local` members. Public surfaces should expose only non-sensitive business data. LLMs often add a convenient `GetToken()` getter without recognizing it as a permanent security boundary breach.

## Best Practice

Keep secrets in `internal` or `local` members, and prefer the `SecretText` type so the value cannot be read back or logged. Where callers genuinely need a credential, pass it inward (a setter) rather than handing it outward (a getter). Public API should return only non-sensitive data — a masked reference, a status, a business identifier — never the raw secret. Treat each public member as a lasting commitment and keep the security-sensitive surface as small as possible.

See sample: [`do-not-expose-sensitive-data-through-public-api.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.good.al).

## Anti Pattern

A public `GetAccessToken()` that returns the raw token (or an event parameter carrying a credential to all subscribers), turning a secret into a de-facto public API any dependent can consume. Detection: a non-`local` procedure, event parameter, or global variable that surfaces a token, password, key, or other credential. Keep the secret internal and expose only non-sensitive data.

See sample: [`do-not-expose-sensitive-data-through-public-api.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.bad.al).

## Examples

- [Good: do-not-expose-sensitive-data-through-public-api.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.good.al)
- [Bad: do-not-expose-sensitive-data-through-public-api.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/do-not-expose-sensitive-data-through-public-api.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
