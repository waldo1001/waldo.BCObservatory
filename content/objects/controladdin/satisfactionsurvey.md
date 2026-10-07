---
id: object/controladdin/satisfactionsurvey
type: object
title: Control add-in "SatisfactionSurvey"
summary: Control add-in "SatisfactionSurvey" in System Application (System.Feedback). 11 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - controladdin
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
  input_hash: 64bd444705d2326f992ee8b023748851b2d2b8310487bc66cb84aae4146d4012
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/SatisfactionSurvey.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/SatisfactionSurvey.ControlAddin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: SatisfactionSurvey
namespace: System.Feedback
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
  procedures: 11
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Control add-in "SatisfactionSurvey"

> Control add-in "SatisfactionSurvey" in System Application (System.Feedback). 11 public procedures. Present since at least BC28, still in BC30.

System Application · System.Feedback · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/SatisfactionSurvey.ControlAddin.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
