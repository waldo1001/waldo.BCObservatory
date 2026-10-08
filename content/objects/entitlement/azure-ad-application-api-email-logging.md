---
id: object/entitlement/azure-ad-application-api-email-logging
type: object
title: Entitlement "Azure AD Application Api Email Logging"
summary: Entitlement "Azure AD Application Api Email Logging" in EmailLogging (Microsoft.CRM.EmailLoggin). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - emaillogging
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a4c02618f09af93bf16da52e464a2e22e0b3ce3c2ecd2484ce0678a765b943c0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EmailLogging/app/src/entitlements/AzureADApplicationApiEmailLogging.Entitlement.al
    title: src/Apps/W1/EmailLogging/app/src/entitlements/AzureADApplicationApiEmailLogging.Entitlement.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
object_type: entitlement
object_id: null
name: Azure AD Application Api Email Logging
namespace: Microsoft.CRM.EmailLoggin
app: EmailLogging
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 0
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
---

# Entitlement "Azure AD Application Api Email Logging"

> Entitlement "Azure AD Application Api Email Logging" in EmailLogging (Microsoft.CRM.EmailLoggin). Introduced in BC29, still in BC30.

EmailLogging · Microsoft.CRM.EmailLoggin · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EmailLogging/app/src/entitlements/AzureADApplicationApiEmailLogging.Entitlement.al) · facts from BC29

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "Azure AD Application Api Email Logging")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
