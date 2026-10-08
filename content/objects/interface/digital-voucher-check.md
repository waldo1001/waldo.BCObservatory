---
id: object/interface/digital-voucher-check
type: object
title: Interface "Digital Voucher Check"
summary: Interface "Digital Voucher Check" in EnforcedDigitalVouchers (Microsoft.EServices.EDocument). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - enforceddigitalvouchers
versions:
  introduced: "29"
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
  input_hash: f1a51a637d7883e374ff281e047bb5fd27ecd1e16e579bf2a87f3f06838030d9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/EnforcedDigitalVouchers/app/src/Implementation/DigitalVoucherCheck.Interface.al
    title: src/Apps/W1/EnforcedDigitalVouchers/app/src/Implementation/DigitalVoucherCheck.Interface.al (releases/29.x)
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
name: Digital Voucher Check
namespace: Microsoft.EServices.EDocument
app: EnforcedDigitalVouchers
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
  procedures: 2
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
  implemented_by: 6
---

# Interface "Digital Voucher Check"

> Interface "Digital Voucher Check" in EnforcedDigitalVouchers (Microsoft.EServices.EDocument). 2 public procedures. Introduced in BC29, still in BC30.

EnforcedDigitalVouchers · Microsoft.EServices.EDocument · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/EnforcedDigitalVouchers/app/src/Implementation/DigitalVoucherCheck.Interface.al) · facts from BC29

## Procedures

- `CheckVoucherIsAttachedToDocument(var ErrorMessageMgt: Codeunit "Error Message Management"; DigitalVoucherEntryType: Enum "Digital Voucher Entry Type"; RecRef: RecordRef)`
- `GenerateDigitalVoucherForPostedDocument(DigitalVoucherEntryType: Enum "Digital Voucher Entry Type"; RecRef: RecordRef)`: Generate voucher and attach to the posted document.

## Implemented by

- [Codeunit 5580 "Voucher Attachment Check"](../codeunit/5580.md)
- [Codeunit 5581 "Voucher Attach Or Note Check"](../codeunit/5581.md)
- [Codeunit 5582 "Voucher No Check"](../codeunit/5582.md)
- [Codeunit 5583 "Voucher Unknown Check"](../codeunit/5583.md)
- [Codeunit 5588 "Voucher E-Document Check"](../codeunit/5588.md)
- [Enum 5580 "Digital Voucher Check Type"](../enum/5580.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Digital Voucher Check")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
