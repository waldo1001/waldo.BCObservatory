---
id: object/controladdin/videoplayer
type: object
title: Control add-in "VideoPlayer"
summary: Control add-in "VideoPlayer" in System Application (System.Media). 4 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: "24"
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
  input_hash: 16309ff8ce0008009ce71a796ccf150409f965c34bc766796b63372ad6d55ff6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/VideoPlayer.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/VideoPlayer.ControlAddin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: VideoPlayer
namespace: System.Media
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
  procedures: 4
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
---

# Control add-in "VideoPlayer"

> Control add-in "VideoPlayer" in System Application (System.Media). 4 public procedures. Introduced in BC24, still in BC30.

System Application · System.Media · BC24-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/VideoPlayer.ControlAddin.al) · facts from BC29

## Procedures

- `SetFrameAttribute(AttributeName: Text; AttributeValue: Text)`: Used to set the attribute to control how video is played
- `RemoveAttribute(AttributeName: Text)`: Removes specified attribute
- `SetWidth(VideoWidth: Integer)`: Set prefered video width
- `SetHeight(VideoHeight: Integer)`: Set Video Height

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "VideoPlayer")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
