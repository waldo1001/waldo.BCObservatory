---
id: object/interface/isftp-client
type: object
title: Interface "ISFTP Client"
summary: Interface "ISFTP Client" in System Application (System.SFTPClient). 16 public procedures. Present since at least BC28, still in BC30, changed in BC29.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
  last_changed: "29"
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
  input_hash: 4a2e718afbd3cf25e5ea45923f3a6aa58b257d216377d180d0f9da0d724cdbb6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/SFTP%20Client/src/ISFTPClient.Interface.al
    title: src/System Application/App/SFTP Client/src/ISFTPClient.Interface.al (releases/29.x)
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

> Interface "ISFTP Client" in System Application (System.SFTPClient). 16 public procedures. Present since at least BC28, still in BC30, changed in BC29.

System Application · System.SFTPClient · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/SFTP%20Client/src/ISFTPClient.Interface.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: BC29

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
