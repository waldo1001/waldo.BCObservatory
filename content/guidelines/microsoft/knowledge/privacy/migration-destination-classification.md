---
id: guideline/microsoft/knowledge/privacy/migration-destination-classification
type: guideline
title: In data migration code, classify the destination — not the migration itself
summary: Migration codeunits such as HybridSL, HybridGP, and HybridBC exist to copy sensitive data — TINs, Federal IDs, social security numbers, financial records — from a source system into Business Central.
tier: official
language: en
tags:
  - data-migration
  - hybridsl
  - hybridgp
  - hybridbc
  - destination-classification
  - ssn
  - tin
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:24.232Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: afb8e8dd7b8f3abaff08fc738ed6ad82a30bc840
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/migration-destination-classification.md
    title: "microsoft/BCQuality: In data migration code, classify the destination — not the migration itself"
    date: "2026-05-21"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes: []
repo_path: microsoft/knowledge/privacy/migration-destination-classification.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - HybridSL
  - HybridGP
  - HybridBC
  - DataClassification
  - EndUserIdentifiableInformation
  - CustomerContent
  - SystemMetadata
  - ToBeClassified
---

# In data migration code, classify the destination — not the migration itself

> Migration codeunits such as HybridSL, HybridGP, and HybridBC exist to copy sensitive data — TINs, Federal IDs, social security numbers, financial records — from a source system into Business Central.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/migration-destination-classification.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

Migration codeunits such as `HybridSL`, `HybridGP`, and `HybridBC` exist to copy sensitive data — TINs, Federal IDs, social security numbers, financial records — from a source system into Business Central. The fact that PII flows through these codeunits is the entire point of their existence, not a defect. The privacy concern is whether the destination field where the data lands carries the correct `DataClassification`. If it does, the migration is doing its job; if it doesn't, the right fix is on the destination table field, never on the migration code that writes to it.

## Best Practice

When reviewing a migration codeunit, trace each `Dest."<Field>" := Source."<Field>"` assignment to the destination field's `DataClassification`. Confirm that fields receiving PII (SSNs, Federal IDs, customer names, addresses) are classified `EndUserIdentifiableInformation` or `CustomerContent` as appropriate — and not left as `SystemMetadata` or `ToBeClassified`.

## Anti Pattern

Flagging the migration code itself for "processing sensitive data" or recommending that it filter, hash, or skip PII fields — these tables exist to migrate that data. The actionable finding is always on the destination field's classification, not on the migration's assignment statement.

## Names

- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
