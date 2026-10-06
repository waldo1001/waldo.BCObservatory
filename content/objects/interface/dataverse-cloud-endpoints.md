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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 90af16370b2c48cf5d1f2839ae56a339e8c20418edd42ddabdcb0b7156a89d62
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al
    title: src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
---

# Interface "Dataverse Cloud Endpoints"

> Interface "Dataverse Cloud Endpoints" in Base Application (Microsoft.Integration.Dataverse). 4 public procedures. Introduced in BC29, still in BC30, changed in BC30.

Base Application · Microsoft.Integration.Dataverse · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetOAuthAuthorityUrl(): Text`: Gets the OAuth authority URL used for the authorization code flow (delegated user sign-in).
- `GetClientCredentialsTokenAuthorityUrl(): Text`: Gets the OAuth authority URL used for the client credentials flow (service-to-service tokens).
- `GetGlobalDiscoveryScope(): Text`: Gets the OAuth scope requested when acquiring a token for the Dataverse Global Discovery service.
- `GetGlobalDiscoveryApiUrl(): Text`: Gets the Dataverse Global Discovery service instances endpoint used to enumerate environments.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: BC30

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
