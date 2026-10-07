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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 95425d4809a5d2f4e9e4dbb7a240a9bf9d72f989d67996ffd92d778abd81e0b1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EnforcedDigitalVouchers/app/src/Implementation/DigitalVoucherCheck.Interface.al
    title: src/Apps/W1/EnforcedDigitalVouchers/app/src/Implementation/DigitalVoucherCheck.Interface.al (releases/29.x)
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
---

# Interface "Digital Voucher Check"

> Interface "Digital Voucher Check" in EnforcedDigitalVouchers (Microsoft.EServices.EDocument). 2 public procedures. Introduced in BC29, still in BC30.

EnforcedDigitalVouchers · Microsoft.EServices.EDocument · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EnforcedDigitalVouchers/app/src/Implementation/DigitalVoucherCheck.Interface.al) · facts from BC29

## Procedures

- `CheckVoucherIsAttachedToDocument(var ErrorMessageMgt: Codeunit "Error Message Management"; DigitalVoucherEntryType: Enum "Digital Voucher Entry Type"; RecRef: RecordRef)`
- `GenerateDigitalVoucherForPostedDocument(DigitalVoucherEntryType: Enum "Digital Voucher Entry Type"; RecRef: RecordRef)`: Generate voucher and attach to the posted document.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
