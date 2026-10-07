---
id: object/interface/peppol30-validation
type: object
title: Interface "PEPPOL30 Validation"
summary: Interface "PEPPOL30 Validation" in PEPPOL (Microsoft.Peppol). 5 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
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
  input_hash: 91b73973b01b96d4003530334359de28d68d7e0c448c26cd86ca4fe941be4dfe
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOL30Validation.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOL30Validation.Interface.al (releases/29.x)
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
name: PEPPOL30 Validation
namespace: Microsoft.Peppol
app: PEPPOL
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL30 Validation"

> Interface "PEPPOL30 Validation" in PEPPOL (Microsoft.Peppol). 5 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOL30Validation.Interface.al) · facts from BC29

## Procedures

- `ValidateDocument(RecordVariant: Variant)`
- `ValidateDocumentLines(RecordVariant: Variant)`: Validates all sales document lines for PEPPOL compliance. Checks line-specific requirements for electronic document transmission.
- `ValidateDocumentLine(RecordVariant: Variant)`: Validates an individual sales document line for PEPPOL compliance. Checks unit of measure codes, descriptions, tax categories, and other line-specific requirements.
- `ValidateLineTypeAndDescription(RecordVariant: Variant): Boolean`: Checks if a line has the required type and description for PEPPOL electronic documents. Validates that the line type and description meet PEPPOL requirements.
- `ValidatePostedDocument(RecordVariant: Variant)`: Validates a posted sales credit memo for PEPPOL compliance. Performs validation checks on the credit memo header and related data.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
