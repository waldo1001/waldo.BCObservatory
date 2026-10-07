---
id: object/controladdin/mtd-web-client-fp-headers-gb
type: object
title: Control add-in "MTD Web Client FP Headers" (GB)
summary: Control add-in "MTD Web Client FP Headers" (GB) in the GB country layer. 2 public procedures. Introduced in BC29, gone after BC29.
tier: official
language: en
tags:
  - controladdin
  - gb layer
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
  input_hash: a081ce25bcbb2742c04282a713074afe07ee88fc1ba0367d63bd5225a2f2625a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/GB/UKMakingTaxDigital/app/src/FraudPrevention/MTDWebClientFPHeaders.ControlAddIn.al
    title: src/Apps/GB/UKMakingTaxDigital/app/src/FraudPrevention/MTDWebClientFPHeaders.ControlAddIn.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/gb
  videos: []
  posts: []
  guidelines: []
object_type: controladdin
object_id: null
name: MTD Web Client FP Headers
namespace: null
app: UKMakingTaxDigital
extends: null
first_version: "29"
last_version: "29"
present_in:
  - "29"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
country: GB
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

# Control add-in "MTD Web Client FP Headers" (GB)

> Control add-in "MTD Web Client FP Headers" (GB) in the GB country layer. 2 public procedures. Introduced in BC29, gone after BC29.

GB country layer · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/GB/UKMakingTaxDigital/app/src/FraudPrevention/MTDWebClientFPHeaders.ControlAddIn.al) · facts from BC29

An object of the [GB localization](../../localizations/gb.md), not part of W1.

## Procedures

- `Run(PublicIPServiceURL: Text)`
- `TestExternalPublicIPService(PublicIPServiceURL: Text)`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
