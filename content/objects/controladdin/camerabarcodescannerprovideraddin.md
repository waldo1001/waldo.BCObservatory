---
id: object/controladdin/camerabarcodescannerprovideraddin
type: object
title: Control add-in "CameraBarcodeScannerProviderAddIn"
summary: Control add-in "CameraBarcodeScannerProviderAddIn" in System Application (System.Device). 3 public procedures. Introduced in BC24, still in BC30, changed in BC26.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: "24"
  last_changed: "26"
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
  input_hash: 3db2f3cbd9e358ee5f6b2aa2ef664d28a9ff01600fd80bee32d81fd389df8778
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/CameraBarcodeScannerProviderAddIn.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/CameraBarcodeScannerProviderAddIn.ControlAddIn.al (releases/29.x)
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
name: CameraBarcodeScannerProviderAddIn
namespace: System.Device
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
changed_in:
  - "26"
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 1
  implements: 0
---

# Control add-in "CameraBarcodeScannerProviderAddIn"

> Control add-in "CameraBarcodeScannerProviderAddIn" in System Application (System.Device). 3 public procedures. Introduced in BC24, still in BC30, changed in BC26.

System Application · System.Device · BC24-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/CameraBarcodeScannerProviderAddIn.ControlAddIn.al) · facts from BC29

## Procedures

- `RequestBarcodeAsync()`: This method is used to request the camera barcode scanner.
- `RequestBarcodeAsync(ShowFlipCameraButton: Boolean; ShowTorchButton: Boolean; ResultDisplayDuration: Integer)`: This method is used to request the camera barcode scanner.
- `RequestBarcodeAsync(BarcodeFormats: Text; ShowFlipCameraButton: Boolean; ShowTorchButton: Boolean; ResultDisplayDuration: Integer)`: This method is used to request the camera barcode scanner.

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 6510 "Item Tracking Lines"](../page/6510.md) (1 call: `ScanMultipleOnMobileDevice → RequestBarcodeAsync`)

## Across versions

- Present in: BC24-30
- Changed (declaration) in: BC26

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "CameraBarcodeScannerProviderAddIn")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
