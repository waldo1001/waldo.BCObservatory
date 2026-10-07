---
id: object/interface/irs-1099-create-form-docs-us
type: object
title: Interface "IRS 1099 Create Form Docs" (US)
summary: Interface "IRS 1099 Create Form Docs" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, gone after BC29.
tier: official
language: en
tags:
  - interface
  - us layer
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
  input_hash: 052841c7cdfc9cda1fe9e682370b81fb9a25132df74b7fae5204e849d7f62ad5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/US/IRSForms/app/src/Interface/IRS1099CreateFormDocs.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099CreateFormDocs.Interface.al (releases/29.x)
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
    - localization/us
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: IRS 1099 Create Form Docs
namespace: Microsoft.Finance.VAT.Reporting
app: IRSForms
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
country: US
counts:
  fields: 0
  procedures: 1
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IRS 1099 Create Form Docs" (US)

> Interface "IRS 1099 Create Form Docs" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 1 public procedures. Introduced in BC29, gone after BC29.

US country layer · Microsoft.Finance.VAT.Reporting · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/US/IRSForms/app/src/Interface/IRS1099CreateFormDocs.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `CreateFormDocs(var TempVendFormBoxBuffer: Record "IRS 1099 Vend. Form Box Buffer" temporary; IRS1099CalcParameters: Record "IRS 1099 Calc. Params")`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
