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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c1dc274dd03d7042f4e569e9a9e79775f1b78c2395e9353a6da2d2c39cb5052e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al
    title: src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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

CA country layer · Microsoft.eServices.EDocument · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al) · facts from BC29

An object of the [CA localization](../../localizations/ca.md), not part of W1.

## Procedures

- `InvokeMethodWithCertificate(Uri: Text; MethodName: Text; CertBase64: Text; CertPassword: SecretText): Text`
- `SignDataWithCertificate(OriginalString: Text; CertBase64: Text; CertPassword: SecretText): Text`: Signs data before sending it to PAC service.
- `AddParameters(Parameter: Variant)`: Adds a parameter to the request.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
