---
id: object/interface/external-file-storage-connector
type: object
title: Interface "External File Storage Connector"
summary: Interface "External File Storage Connector" in System Application (System.ExternalFileStorage). 17 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8440d1e297be67b6b9deb3bf9d70d323bb93cffabb91cc2f8623065816bf5021
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/External%20File%20Storage/src/Connector/ExternalFileStorageConnector.Interface.al
    title: src/System Application/App/External File Storage/src/Connector/ExternalFileStorageConnector.Interface.al (releases/29.x)
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
name: External File Storage Connector
namespace: System.ExternalFileStorage
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
  procedures: 17
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "External File Storage Connector"

> Interface "External File Storage Connector" in System Application (System.ExternalFileStorage). 17 public procedures. Present since at least BC28, still in BC30.

System Application · System.ExternalFileStorage · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/External%20File%20Storage/src/Connector/ExternalFileStorageConnector.Interface.al) · facts from BC29

## Procedures

- `ListFiles(AccountId: Guid; Path: Text; FilePaginationData: Codeunit "File Pagination Data"; var TempFileAccountContent: Record "File Account Content" temporary)`
- `GetFile(AccountId: Guid; Path: Text; Stream: InStream)`: Gets a file from the provided account.
- `CreateFile(AccountId: Guid; Path: Text; Stream: InStream)`: Gets a file to the provided account.
- `CopyFile(AccountId: Guid; SourcePath: Text; TargetPath: Text)`: Copies as file inside the provided account.
- `MoveFile(AccountId: Guid; SourcePath: Text; TargetPath: Text)`: Move as file inside the provided account.
- `FileExists(AccountId: Guid; Path: Text): Boolean`: Checks if a file exists on the provided account.
- `DeleteFile(AccountId: Guid; Path: Text)`: Deletes a file exists on the provided account.
- `ListDirectories(AccountId: Guid; Path: Text; FilePaginationData: Codeunit "File Pagination Data"; var TempFileAccountContent: Record "File Account Content" temporary)`: Gets a List of Directories stored on the provided account.
- `CreateDirectory(AccountId: Guid; Path: Text)`: Creates a directory on the provided account.
- `DirectoryExists(AccountId: Guid; Path: Text): Boolean`: Checks if a directory exists on the provided account.
- `DeleteDirectory(AccountId: Guid; Path: Text)`: Deletes a directory exists on the provided account.
- `GetAccounts(var TempAccounts: Record "File Account" temporary)`: Gets the file accounts registered for the connector.
- `ShowAccountInformation(AccountId: Guid)`: Shows the information for a file account.
- `RegisterAccount(var TempFileAccount: Record "File Account" temporary): Boolean`: Registers a file account for the connector.
- `DeleteAccount(AccountId: Guid): Boolean`: Deletes a file account for the connector.
- `GetLogoAsBase64(): Text`: Provides a custom logo for the connector that shows in the Setup File Account Guide.
- `GetDescription(): Text[250]`: Provides a more detailed description of the connector.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
