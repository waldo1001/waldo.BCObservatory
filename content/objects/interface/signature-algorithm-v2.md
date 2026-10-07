---
id: object/interface/signature-algorithm-v2
type: object
title: Interface "Signature Algorithm v2"
summary: Interface "Signature Algorithm v2" in System Application (System.Security.Encryption). 5 public procedures. Introduced in BC24, still in BC30.
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2fb4879dd451cf7f01f677441cf65513be960a5d25c3733fedfc21a9fe08c03b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Cryptography%20Management/src/SignatureAlgorithmv2.Interface.al
    title: src/System Application/App/Cryptography Management/src/SignatureAlgorithmv2.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Signature Algorithm v2
namespace: System.Security.Encryption
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Signature Algorithm v2"

> Interface "Signature Algorithm v2" in System Application (System.Security.Encryption). 5 public procedures. Introduced in BC24, still in BC30.

System Application · System.Security.Encryption · BC24-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Cryptography%20Management/src/SignatureAlgorithmv2.Interface.al) · facts from BC29

## Procedures

- `GetInstance(var DotNetAsymmetricAlgorithm: DotNet AsymmetricAlgorithm)`
- `FromSecretXmlString(XmlString: SecretText)`
- `SignData(DataInStream: InStream; HashAlgorithm: Enum "Hash Algorithm"; SignatureOutStream: OutStream)`
- `ToSecretXmlString(IncludePrivateParameters: Boolean): SecretText`
- `VerifyData(DataInStream: InStream; HashAlgorithm: Enum "Hash Algorithm"; SignatureInStream: InStream): Boolean`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Signature Algorithm v2")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Signature Algorithm v2"`

## Across versions

- Present in: BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
