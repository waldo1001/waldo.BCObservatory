---
id: object/interface/isftp-file
type: object
title: Interface "ISFTP File"
summary: Interface "ISFTP File" in System Application (System.SFTPClient). 6 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "28"
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
  input_hash: 83091b86ea651c5c3e372514da957d7d96ebbdf8a6f172d8a31e9a0d31c98206
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/SFTP%20Client/src/ISFTPFile.Interface.al
    title: src/System Application/App/SFTP Client/src/ISFTPFile.Interface.al (releases/29.x)
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
name: ISFTP File
namespace: System.SFTPClient
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
  procedures: 6
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
  implemented_by: 1
---

# Interface "ISFTP File"

> Interface "ISFTP File" in System Application (System.SFTPClient). 6 public procedures. Introduced in BC28, still in BC30.

System Application · System.SFTPClient · BC28-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/SFTP%20Client/src/ISFTPFile.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `MoveTo(Destination: Text): Boolean`
- `Name(): Text`
- `FullName(): Text`
- `IsDirectory(): Boolean`
- `Length(): BigInteger`
- `LastWriteTime(): DateTime`

## Implemented by

- [Codeunit 9761 "Dotnet SFTP File"](../codeunit/9761.md)

## Across versions

- Present in: BC28-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "ISFTP File")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
