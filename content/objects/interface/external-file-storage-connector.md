---
id: object/interface/external-file-storage-connector
type: object
title: Interface "External File Storage Connector"
summary: Interface "External File Storage Connector" in System Application (System.ExternalFileStorage). 17 public procedures. Introduced in BC26, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "26"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 26a618d48251a2163e209ebbd77c8d2a702bb35444f7da334d50a0a788f008a5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/External%20File%20Storage/src/Connector/ExternalFileStorageConnector.Interface.al
    title: src/System Application/App/External File Storage/src/Connector/ExternalFileStorageConnector.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
first_version: "26"
last_version: "30"
present_in:
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
  procedures: 17
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

# Interface "External File Storage Connector"

> Interface "External File Storage Connector" in System Application (System.ExternalFileStorage). 17 public procedures. Introduced in BC26, still in BC30.

System Application · System.ExternalFileStorage · BC26-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/External%20File%20Storage/src/Connector/ExternalFileStorageConnector.Interface.al) · facts from BC29

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

## Implemented by

- [Enum 9450 "Ext. File Storage Connector"](../enum/9450.md)

## Across versions

- Present in: BC26-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "External File Storage Connector")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
