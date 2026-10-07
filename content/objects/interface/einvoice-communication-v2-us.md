---
id: object/interface/einvoice-communication-v2-us
type: object
title: Interface "EInvoice Communication V2" (US)
summary: Interface "EInvoice Communication V2" (US) in the US country layer (Microsoft.eServices.EDocument). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - us layer
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2cfda32b555a3eb207a276b19bf8d1bcb26149449a181a043c3d0d4bd2efaf59
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al
    title: src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/us
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
country: US
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

# Interface "EInvoice Communication V2" (US)

> Interface "EInvoice Communication V2" (US) in the US country layer (Microsoft.eServices.EDocument). 3 public procedures. Introduced in BC29, still in BC30.

US country layer · Microsoft.eServices.EDocument · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/NA/BaseApp/Local/eServices/EDocument/EInvoiceCommunicationV2.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `InvokeMethodWithCertificate(Uri: Text; MethodName: Text; CertBase64: Text; CertPassword: SecretText): Text`
- `SignDataWithCertificate(OriginalString: Text; CertBase64: Text; CertPassword: SecretText): Text`: Signs data before sending it to PAC service.
- `AddParameters(Parameter: Variant)`: Adds a parameter to the request.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
