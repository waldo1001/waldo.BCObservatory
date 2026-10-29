---
id: guideline/microsoft/knowledge/privacy/in-memory-data-not-a-privacy-concern
type: guideline
title: In-memory variables, dictionaries, lists and temporary tables are not a privacy concern
summary: AL runs in a managed server environment.
tier: official
language: en
tags:
  - in-memory
  - dictionary
  - list
  - temporary-table
  - variable
  - memory-dump
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:24.107Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 38fb6f263d58c8ece29e29d9dd583f8251bea891
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/in-memory-data-not-a-privacy-concern.md
    title: "microsoft/BCQuality: In-memory variables, dictionaries, lists and temporary tables are not a privacy concern"
    date: "2026-05-21"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
  changes: []
repo_path: microsoft/knowledge/privacy/in-memory-data-not-a-privacy-concern.md
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
identifiers: []
---

# In-memory variables, dictionaries, lists and temporary tables are not a privacy concern

> AL runs in a managed server environment.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/in-memory-data-not-a-privacy-concern.md) · microsoft layer · privacy · BC all · tier official · derived

## Description

AL runs in a managed server environment. Local variables, `Dictionary`, `List`, temporary `Record` variables, and other in-process data structures exist only for the duration of the request or session and are released by the runtime when it ends — they are not persisted, not visible across sessions, and not exposed outside the server process. Memory dumps are not a realistic threat vector against Business Central's hosted architecture, so holding business data (emails, names, addresses, document content) in these structures while processing a request is normal and expected.

## Best Practice

Use whatever in-memory shape (`Dictionary`, `List`, temporary tables, plain variables) the algorithm needs. The privacy review applies to *persistent* surfaces — table fields, telemetry, outgoing HTTP — not to per-request memory.

## Anti Pattern

Flagging a `Dictionary of [Text, Text]` populated with customer emails, or a temporary `Record Customer` holding rows mid-processing, as a privacy leak. These structures are scoped to the request and do not leave the server's memory.

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
