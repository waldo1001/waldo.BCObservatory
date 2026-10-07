---
id: object/interface/signature-algorithm-v2
type: object
title: Interface "Signature Algorithm v2"
summary: Interface "Signature Algorithm v2" in System Application (System.Security.Encryption). 5 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
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
  input_hash: e52050da0cebbe625b8a5daeecabc775d2f08496bb6388601beacf2494f15f61
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Cryptography%20Management/src/SignatureAlgorithmv2.Interface.al
    title: src/System Application/App/Cryptography Management/src/SignatureAlgorithmv2.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

> Interface "Signature Algorithm v2" in System Application (System.Security.Encryption). 5 public procedures. Present since at least BC28, still in BC30.

System Application · System.Security.Encryption · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Cryptography%20Management/src/SignatureAlgorithmv2.Interface.al) · facts from BC29

## Procedures

- `GetInstance(var DotNetAsymmetricAlgorithm: DotNet AsymmetricAlgorithm)`
- `FromSecretXmlString(XmlString: SecretText)`
- `SignData(DataInStream: InStream; HashAlgorithm: Enum "Hash Algorithm"; SignatureOutStream: OutStream)`
- `ToSecretXmlString(IncludePrivateParameters: Boolean): SecretText`
- `VerifyData(DataInStream: InStream; HashAlgorithm: Enum "Hash Algorithm"; SignatureInStream: InStream): Boolean`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
