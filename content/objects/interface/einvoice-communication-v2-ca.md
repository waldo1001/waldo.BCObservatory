---
id: object/interface/einvoice-communication-v2-ca
type: object
title: Interface "EInvoice Communication V2" (CA)
summary: Interface "EInvoice Communication V2" (CA) in the CA country layer (Microsoft.eServices.EDocument). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - ca layer
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
  input_hash: c1dc274dd03d7042f4e569e9a9e79775f1b78c2395e9353a6da2d2c39cb5052e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al
    title: src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/ca
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: EInvoice Communication V2
namespace: Microsoft.eServices.EDocument
app: Base Application
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
country: CA
counts:
  fields: 0
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "EInvoice Communication V2" (CA)

> Interface "EInvoice Communication V2" (CA) in the CA country layer (Microsoft.eServices.EDocument). 3 public procedures. Introduced in BC29, still in BC30.

CA country layer · Microsoft.eServices.EDocument · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al) · facts from BC29

An object of the [CA localization](../../localizations/ca.md), not part of W1.

## Procedures

- `InvokeMethodWithCertificate(Uri: Text; MethodName: Text; CertBase64: Text; CertPassword: SecretText): Text`
- `SignDataWithCertificate(OriginalString: Text; CertBase64: Text; CertPassword: SecretText): Text`: Signs data before sending it to PAC service.
- `AddParameters(Parameter: Variant)`: Adds a parameter to the request.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "EInvoice Communication V2")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A CA country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
