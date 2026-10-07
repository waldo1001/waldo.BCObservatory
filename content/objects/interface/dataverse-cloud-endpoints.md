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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 70f593b4f2432a86a687a929f5d1aa0f42333ce705cc412eed8694947f660df9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al
    title: src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
---

# Interface "Dataverse Cloud Endpoints"

> Interface "Dataverse Cloud Endpoints" in Base Application (Microsoft.Integration.Dataverse). 4 public procedures. Introduced in BC29, still in BC30, changed in BC30.

Base Application · Microsoft.Integration.Dataverse · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Integration/Dataverse/DataverseCloudEndpoints.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetOAuthAuthorityUrl(): Text`: Gets the OAuth authority URL used for the authorization code flow (delegated user sign-in).
- `GetClientCredentialsTokenAuthorityUrl(): Text`: Gets the OAuth authority URL used for the client credentials flow (service-to-service tokens).
- `GetGlobalDiscoveryScope(): Text`: Gets the OAuth scope requested when acquiring a token for the Dataverse Global Discovery service.
- `GetGlobalDiscoveryApiUrl(): Text`: Gets the Dataverse Global Discovery service instances endpoint used to enumerate environments.

## Recent changes

- 2026-09-22 [#11171 [Security][Hardening] Validate integration URLs stored in setup tables](../../changes/bcapps/11171.md) (main, BC30, fix)
- 2026-07-09 [#9127 Add Dataverse Cloud endpoints override for sovereign clouds](../../changes/bcapps/9127.md) (main, BC30, feature, added)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Dataverse Cloud Endpoints")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Dataverse Cloud Endpoints"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: BC30

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
