---
id: object/interface/mcp-server-features
type: object
title: Interface "MCP Server Features"
summary: Interface "MCP Server Features" in System Application (System.MCP). 7 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "29"
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
  input_hash: 17e8c921806e2421177b101b255fbda86b355d27d279722439922bd73fe16ac9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/MCP/src/Configuration/Interfaces/MCPServerFeatures.Interface.al
    title: src/System Application/App/MCP/src/Configuration/Interfaces/MCPServerFeatures.Interface.al (releases/29.x)
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
name: MCP Server Features
namespace: System.MCP
app: System Application
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 7
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "MCP Server Features"

> Interface "MCP Server Features" in System Application (System.MCP). 7 public procedures. Introduced in BC29, still in BC30.

System Application · System.MCP · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/MCP/src/Configuration/Interfaces/MCPServerFeatures.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `SetActive(ConfigId: Guid; Active: Boolean)`: Activates or deactivates the feature for the specified MCP configuration.
- `IsActive(ConfigId: Guid): Boolean`: Returns whether the feature is currently active for the specified MCP configuration.
- `HasSettings(): Boolean`: Returns whether the feature exposes additional settings (drives the Configure action).
- `OpenSettings(ConfigId: Guid)`: Opens the feature's settings dialog. No-op when HasSettings() returns false.
- `Description(): Text[500]`: Returns the description shown for the feature in the Server Features list.
- `LoadSystemTools(var MCPSystemTool: Record "MCP System Tool")`: Appends the feature's system tools to the buffer. Called only when the feature is active.
- `TryGetParentFeature(var ParentFeature: Enum "MCP Server Feature"): Boolean`: Returns true and the parent feature when this is a sub-feature. The Server Features list shows a sub-feature indented beneath its parent.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
