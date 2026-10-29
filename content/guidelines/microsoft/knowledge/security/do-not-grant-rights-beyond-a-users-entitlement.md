---
id: guideline/microsoft/knowledge/security/do-not-grant-rights-beyond-a-users-entitlement
type: guideline
title: Do not grant rights beyond a user's entitlement
summary: Entitlements are license-level caps on what a user can access, derived automatically from the BC license tier. Permission sets are application-level grants administered on top of the entitlement.
tier: official
language: en
tags:
  - entitlement
  - permissionset
  - license
  - clipping
  - sandbox-drift
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:23.391Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bc9a4e84135df593ad9deaa7c94e617439cae805
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/do-not-grant-rights-beyond-a-users-entitlement.md
    title: "microsoft/BCQuality: Do not grant rights beyond a user's entitlement"
    date: "2026-07-14"
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
    - change/bcquality/49
repo_path: microsoft/knowledge/security/do-not-grant-rights-beyond-a-users-entitlement.md
layer: microsoft
kind: rule
domain: security
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

# Do not grant rights beyond a user's entitlement

> Entitlements are license-level caps on what a user can access, derived automatically from the BC license tier. Permission sets are application-level grants administered on top of the entitlement.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/do-not-grant-rights-beyond-a-users-entitlement.md) · microsoft layer · security · BC all · tier official · derived

## Description

Entitlements are license-level caps on what a user can access, derived automatically from the BC license tier. Permission sets are application-level grants administered on top of the entitlement. A permission set can only grant within the entitlement's boundaries; grants beyond those boundaries are silently clipped at runtime. This means a permission set authored and validated in a developer sandbox (with a broad license) can appear to work correctly there and fail silently in a customer tenant where users hold a narrower entitlement.

## Best Practice

When designing a permission set that ships with an extension, consult the entitlement model for the target user population before finalizing the grants. Every object and tabledata right the set expects to grant should be reachable within the intended entitlement tier; if it is not, the set needs to be scoped to licenses that permit it, or the feature needs a different access path.

## Anti Pattern

Authoring permission sets in a sandbox with full-license context and shipping them without verifying which entitlement tier customer users actually hold. The sets look complete in test; on a real customer they silently lose rights at runtime and the symptom is "the feature does not work for some users" with no obvious authorization error.

## Changed by

- [#49 Promote security knowledge from community to Microsoft layer](../../../../changes/bcquality/49.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
