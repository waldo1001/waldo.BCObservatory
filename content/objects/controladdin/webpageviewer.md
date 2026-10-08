---
id: object/controladdin/webpageviewer
type: object
title: Control add-in "WebPageViewer"
summary: Control add-in "WebPageViewer" in System Application (System.Integration). 11 public procedures. Introduced in BC24, still in BC30.
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
  input_hash: 1958e3b7cd6ed5773a0bbfa143714d92b98ed996ad4ea209266d3cb91abdefaf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/WebPageViewer.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/WebPageViewer.ControlAddin.al (releases/29.x)
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
name: WebPageViewer
namespace: System.Integration
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
  procedures: 11
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 2
  implements: 0
---

# Control add-in "WebPageViewer"

> Control add-in "WebPageViewer" in System Application (System.Integration). 11 public procedures. Introduced in BC24, still in BC30.

System Application · System.Integration · BC24-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/WebPageViewer.ControlAddin.al) · facts from BC29

## Procedures

- `InitializeIFrame(Ratio: Text)`: Function that initializes iframe Call this before SetContent or Navigate.
- `InitializeFullIFrame()`: Function that initializes iframe, ignoring ratio values Call this before SetContent or Navigate.
- `SetContent(Html: Text)`: Function that sets the content html
- `SetContent(Html: Text; JavaScript: Text)`: Function that sets the content html and executes some JavaScript
- `Navigate(Url: Text)`: Function that sets the content url
- `Navigate(Url: Text; Method: Text; Data: Text)`: Function that sets the content url with parameter data
- `PostMessage(Message: Text; TargetOrigin: Text; ConvertToJson: Boolean)`: Function to post a message to parent window.
- `LinksOpenInNewWindow()`: Function to force hyperlinks to open in a new page
- `InvokeEvent(Data: Text)`: Function to trigger a WebPageViewerEvent with custom data
- `SubscribeToEvent(EventName: Text; Origin: Text)`: Function to subscribe to window events and trigger a WebPageViewerEvent with the data provided by the event
- `SetCallbacksFromSubscribedEventToIgnore(EventName: Text; CallbackResults: JsonArray)`: Function to ignore callbacks occuring due to subscribed events. This will improve performance by telling client not to send messages back to server if not required.

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 4010 "Intelligent Cloud"](../page/4010.md) (1 call: `NavigateToUrl → Navigate`)
- [Page 4353 "Custom Agent Instructions Part"](../page/4353.md) (1 call: `FillAddIn → SetContent`)

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "WebPageViewer")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
