---
id: object/interface/dataverse-cloud-endpoints
type: object
title: Interface "Dataverse Cloud Endpoints"
summary: Interface "Dataverse Cloud Endpoints" in Base Application (Microsoft.Integration.Dataverse). 4 public procedures. Introduced in BC29, still in BC30, changed in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "29"
  last_changed: "30"
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 71876a905816579f82c04f080075c56187434a58f693478508a2190536240c9c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al
    title: src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
    - change/bcapps/11171
    - change/bcapps/9127
object_type: interface
object_id: null
name: Dataverse Cloud Endpoints
namespace: Microsoft.Integration.Dataverse
app: Base Application
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in:
  - "30"
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 4
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
  implemented_by: 2
---

# Interface "Dataverse Cloud Endpoints"

> Interface "Dataverse Cloud Endpoints" in Base Application (Microsoft.Integration.Dataverse). 4 public procedures. Introduced in BC29, still in BC30, changed in BC30.

Base Application · Microsoft.Integration.Dataverse · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetOAuthAuthorityUrl(): Text`: Gets the OAuth authority URL used for the authorization code flow (delegated user sign-in).
- `GetClientCredentialsTokenAuthorityUrl(): Text`: Gets the OAuth authority URL used for the client credentials flow (service-to-service tokens).
- `GetGlobalDiscoveryScope(): Text`: Gets the OAuth scope requested when acquiring a token for the Dataverse Global Discovery service.
- `GetGlobalDiscoveryApiUrl(): Text`: Gets the Dataverse Global Discovery service instances endpoint used to enumerate environments.

## Implemented by

- [Codeunit 7208 "Commercial Dataverse Endpoints"](../codeunit/7208.md)
- [Enum 7207 "Dataverse Cloud"](../enum/7207.md)

## Recent changes

- 2026-09-22 [#11171 [Security][Hardening] Validate integration URLs stored in setup tables](../../changes/bcapps/11171.md) (main, BC30, fix)
- 2026-07-09 [#9127 Add Dataverse Cloud endpoints override for sovereign clouds](../../changes/bcapps/9127.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: BC30

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Dataverse Cloud Endpoints")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
