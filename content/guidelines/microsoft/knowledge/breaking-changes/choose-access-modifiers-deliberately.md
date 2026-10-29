---
id: guideline/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately
type: guideline
title: Choose access modifiers deliberately
summary: "Access is a decision about what you are willing to support forever. The moment a procedure or object is reachable from another extension — no local, or a removed [Scope('OnPrem')] — it becomes a contract: callers bind to it, and changing or removing it later is a breaking change."
tier: official
language: en
tags:
  - access-modifier
  - internal
  - local
  - public
  - protected
  - scope
  - encapsulation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.012Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 678663128e380e5f0d8c05a164d286d76dea8ece
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.md
    title: "microsoft/BCQuality: Choose access modifiers deliberately"
    date: "2026-09-09"
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
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.md
layer: microsoft
kind: rule
domain: breaking-changes
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ValidateOrder
  - PostOrder
---

# Choose access modifiers deliberately

> Access is a decision about what you are willing to support forever. The moment a procedure or object is reachable from another extension — no local, or a removed [Scope('OnPrem')] — it becomes a contract: callers bind to it, and changing or removing it later is a breaking change.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.md) · microsoft layer · breaking-changes · BC all · tier official · derived

## Description

Access is a decision about what you are willing to support forever. The moment a procedure or object is reachable from another extension — no `local`, or a removed `[Scope('OnPrem')]` — it becomes a contract: callers bind to it, and changing or removing it later is a breaking change. The safe default is the narrowest access that works. Use `local` for implementation detail confined to one object, `internal` for code shared within the app but not exposed to consumers, and `protected var` for state intended as an inheritance point for extension objects. Reserve `public` for the deliberate, supported entry points you intend to maintain as a stable API. LLMs tend to make everything public "to be safe," which inverts the rule and turns every helper into an accidental contract.

## Best Practice

Start everything `local` or `internal` and promote a member to `public` only when you have decided to support it as a stable contract. Expose a small, intentional surface — the supported entry point — and keep validation, posting, and helper routines `internal` for in-app reuse or `local` when single-object. Do not drop `[Scope('OnPrem')]` without intent, since that too widens the contract. Every public member is a maintenance commitment; spend them deliberately.

See sample: [`choose-access-modifiers-deliberately.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.good.al).

## Anti Pattern

Declaring every procedure `public` by default, so internal helpers like `ValidateOrder` and `PostOrder` become a de-facto API that consumers bind to and that can no longer be changed freely. Detection: an object where implementation-detail procedures carry no access modifier or are `public` without a reason to support them externally. Default them to `internal`/`local` and make only the intended entry point public.

See sample: [`choose-access-modifiers-deliberately.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.bad.al).

## Examples

- [Good: choose-access-modifiers-deliberately.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.good.al)
- [Bad: choose-access-modifiers-deliberately.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/choose-access-modifiers-deliberately.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
