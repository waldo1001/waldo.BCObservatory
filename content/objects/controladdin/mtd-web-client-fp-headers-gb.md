---
id: object/controladdin/mtd-web-client-fp-headers-gb
type: object
title: Control add-in "MTD Web Client FP Headers" (GB)
summary: Control add-in "MTD Web Client FP Headers" (GB) in the GB country layer. 2 public procedures. Introduced in BC29, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 833b75c32c0d1b95cbee698afb1cd6f9cc90ec15f59d9e799c75afba6101d881
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/GB/UKMakingTaxDigital/app/src/FraudPrevention/MTDWebClientFPHeaders.ControlAddIn.al
    title: src/Apps/GB/UKMakingTaxDigital/app/src/FraudPrevention/MTDWebClientFPHeaders.ControlAddIn.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
last_version: "30"
present_in:
  - "29"
  - "30"
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

> Control add-in "MTD Web Client FP Headers" (GB) in the GB country layer. 2 public procedures. Introduced in BC29, still in BC30.

GB country layer · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/GB/UKMakingTaxDigital/app/src/FraudPrevention/MTDWebClientFPHeaders.ControlAddIn.al) · facts from BC29

An object of the [GB localization](../../localizations/gb.md), not part of W1.

## Procedures

- `Run(PublicIPServiceURL: Text)`
- `TestExternalPublicIPService(PublicIPServiceURL: Text)`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "MTD Web Client FP Headers")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A GB country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
