---
id: object/interface/secret-provider-v2
type: object
title: Interface "Secret Provider v2"
summary: Interface "Secret Provider v2" in System Application (System.Security). 2 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "24"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d671ad9ccd79eb268f8321b1fb72c498266107189fa017911738a7cca9a47e63
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Secrets/src/SecretProviderv2.Interface.al
    title: src/System Application/App/Secrets/src/SecretProviderv2.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Secret Provider v2
namespace: System.Security
app: System Application
extends: null
first_version: "24"
last_version: "30"
present_in:
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 2
---

# Interface "Secret Provider v2"

> Interface "Secret Provider v2" in System Application (System.Security). 2 public procedures. Introduced in BC24, still in BC30.

System Application · System.Security · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Secrets/src/SecretProviderv2.Interface.al) · facts from BC29

## Procedures

- `GetSecret(SecretName: Text; var SecretValue: Text): Boolean`
- `GetSecret(SecretName: Text; var SecretValue: SecretText): Boolean`: Retrieves a secret value.

## Implemented by

- [Codeunit 3800 "App Key Vault Secret Provider"](../codeunit/3800.md)
- [Codeunit 3802 "In Memory Secret Provider"](../codeunit/3802.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Secret Provider v2")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Secret Provider v2"`

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
