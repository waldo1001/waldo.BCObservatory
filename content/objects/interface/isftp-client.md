---
id: object/interface/isftp-client
type: object
title: Interface "ISFTP Client"
summary: Interface "ISFTP Client" in System Application (System.SFTPClient). 16 public procedures. Introduced in BC28, still in BC30, changed in BC29.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "28"
  last_changed: "29"
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
  input_hash: 37b54e4a437136fc0dde3e9af8d45395e1a9165b6d3d2c22bf5e1790d60dea2f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/SFTP%20Client/src/ISFTPClient.Interface.al
    title: src/System Application/App/SFTP Client/src/ISFTPClient.Interface.al (releases/29.x)
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
    - change/bcapps/9360
object_type: interface
object_id: null
name: ISFTP Client
namespace: System.SFTPClient
app: System Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in:
  - "29"
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 16
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "ISFTP Client"

> Interface "ISFTP Client" in System Application (System.SFTPClient). 16 public procedures. Introduced in BC28, still in BC30, changed in BC29.

System Application · System.SFTPClient · BC28-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/SFTP%20Client/src/ISFTPClient.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `SftpClient(Host: Text; Port: Integer; UserName: Text; Password: SecretText): Boolean`
- `SftpClient(Host: Text; Port: Integer; UserName: Text; PrivateKey: InStream): Boolean`
- `SftpClient(HostName: Text; Port: Integer; Username: Text; PrivateKey: InStream; Passphrase: SecretText): Boolean`
- `GetOperationException(var ExceptionType: Enum "SFTP Exception Type"; var ExceptionMessage: Text; var ServerFingerprintSHA256Param: Text)`
- `Disconnect()`
- `IsConnected(): Boolean`
- `Exists(Path: Text; var Exists: Boolean): Boolean`
- `Delete(Path: Text): Boolean`
- `WorkingDirectory(var Result: Text): Boolean`
- `SetWorkingDirectory(Path: Text): Boolean`
- `ListDirectory(Path: Text; var Result: List of [Interface "ISFTP File"]): Boolean`
- `ReadAllBytes(Path: Text; var Bytes: Dotnet Array): Boolean`
- `WriteAllBytes(Path: Text; Bytes: Dotnet Array): Boolean`
- `Get(Path: Text; var Result: Interface "ISFTP File"): Boolean`
- `CreateDirectory(Path: Text): Boolean`
- `SetSHA256Fingerprints(FingerPrints: List of [Text])`

## Recent changes

- 2026-08-12 [#9360 Harden SFTP Client module (security review phase 1)](../../changes/bcapps/9360.md) (main, BC30, fix)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "ISFTP Client")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "ISFTP Client"`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
