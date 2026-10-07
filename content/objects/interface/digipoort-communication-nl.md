---
id: object/interface/digipoort-communication-nl
type: object
title: Interface "DigiPoort Communication" (NL)
summary: Interface "DigiPoort Communication" (NL) in the NL country layer (Microsoft.Finance.VAT.Reporting). 2 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - nl layer
versions:
  introduced: "28"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0c99ad1bdf69af14e473bc64e96536211433ee62a87ee1fb54ef75582fcb4ccb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/NL/BaseApp/Local/Finance/VAT/Reporting/DigipoortCommunication.interface.al
    title: src/Layers/NL/BaseApp/Local/Finance/VAT/Reporting/DigipoortCommunication.interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/nl
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: DigiPoort Communication
namespace: Microsoft.Finance.VAT.Reporting
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
country: NL
counts:
  fields: 0
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "DigiPoort Communication" (NL)

> Interface "DigiPoort Communication" (NL) in the NL country layer (Microsoft.Finance.VAT.Reporting). 2 public procedures. Introduced in BC28, still in BC30.

NL country layer · Microsoft.Finance.VAT.Reporting · BC28-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/NL/BaseApp/Local/Finance/VAT/Reporting/DigipoortCommunication.interface.al) · facts from BC29

An object of the [NL localization](../../localizations/nl.md), not part of W1.

## Procedures

- `Deliver(Request: DotNet aanleverRequest; var Response: DotNet aanleverResponse; RequestUrl: Text; ClientCertificateBase64: Text; DotNet_SecureString: Codeunit DotNet_SecureString; ServiceCertificateBase64: Text; Timeout: Integer; UseCertificateSetup: boolean)`
- `GetStatus(Request: DotNet getStatussenProcesRequest; var StatusResultatQueue: DotNet Queue; ResponseUrl: Text; ClientCertificateBase64: Text; DotNet_SecureString: Codeunit DotNet_SecureString; ServiceCertificateBase64: Text; Timeout: Integer; UseCertificateSetup: boolean)`: Gets status from DigiPoort Service.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "DigiPoort Communication")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "DigiPoort Communication"`

A NL country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
