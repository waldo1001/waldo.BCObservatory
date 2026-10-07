---
id: object/controladdin/barcodescannerprovideraddin
type: object
title: Control add-in "BarcodeScannerProviderAddIn"
summary: Control add-in "BarcodeScannerProviderAddIn" in System Application (System.Device). 2 public procedures. Introduced in BC24, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c03eb50f6c7dce03ec744a83305241ec25993539bce4f88ea96cbcfe56780d6c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/ControlAddIns/src/BarcodeScannerProviderAddIn.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/BarcodeScannerProviderAddIn.ControlAddIn.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: BarcodeScannerProviderAddIn
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Control add-in "BarcodeScannerProviderAddIn"

> Control add-in "BarcodeScannerProviderAddIn" in System Application (System.Device). 2 public procedures. Introduced in BC24, still in BC30.

System Application · System.Device · BC24-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/ControlAddIns/src/BarcodeScannerProviderAddIn.ControlAddIn.al) · facts from BC29

## Procedures

- `RequestBarcodeScannerAsync()`: This method is used to request the barcode scanner.
- `RequestBarcodeScannerAsync(IntentAction: Text; IntentCategory: Text; DataString: Text; DataFormat: Text)`: This method is used to request the barcode scanner.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "controladdin", object_name: "BarcodeScannerProviderAddIn")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node controladdin "BarcodeScannerProviderAddIn"`

## Across versions

- Present in: BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
