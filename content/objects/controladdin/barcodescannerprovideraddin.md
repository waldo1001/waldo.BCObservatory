---
id: object/controladdin/barcodescannerprovideraddin
type: object
title: Control add-in "BarcodeScannerProviderAddIn"
summary: Control add-in "BarcodeScannerProviderAddIn" in System Application (System.Device). 2 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b719f9e06bbb454b38daafbbb0241dab4148f77c593cfe8f29363262b39db1b1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/BarcodeScannerProviderAddIn.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/BarcodeScannerProviderAddIn.ControlAddIn.al (releases/29.x)
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
name: BarcodeScannerProviderAddIn
namespace: System.Device
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
  procedures: 2
  events: 0
  subscribers: 0
---

# Control add-in "BarcodeScannerProviderAddIn"

> Control add-in "BarcodeScannerProviderAddIn" in System Application (System.Device). 2 public procedures. Present since at least BC28, still in BC30.

System Application · System.Device · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/BarcodeScannerProviderAddIn.ControlAddIn.al) · facts from BC29

## Procedures

- `RequestBarcodeScannerAsync()`: This method is used to request the barcode scanner.
- `RequestBarcodeScannerAsync(IntentAction: Text; IntentCategory: Text; DataString: Text; DataFormat: Text)`: This method is used to request the barcode scanner.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
