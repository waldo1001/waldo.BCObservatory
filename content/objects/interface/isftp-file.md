---
id: object/interface/isftp-file
type: object
title: Interface "ISFTP File"
summary: Interface "ISFTP File" in System Application (System.SFTPClient). 6 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: eeb21b7a79318e65ce2cee73287c184ba080e1cd41eb895938ca5520609f4deb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/SFTP%20Client/src/ISFTPFile.Interface.al
    title: src/System Application/App/SFTP Client/src/ISFTPFile.Interface.al (releases/29.x)
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
---

# Interface "ISFTP File"

> Interface "ISFTP File" in System Application (System.SFTPClient). 6 public procedures. Present since at least BC28, still in BC30.

System Application · System.SFTPClient · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/SFTP%20Client/src/ISFTPFile.Interface.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
