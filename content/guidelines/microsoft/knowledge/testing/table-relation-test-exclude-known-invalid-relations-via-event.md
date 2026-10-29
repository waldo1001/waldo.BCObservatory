---
id: guideline/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event
type: guideline
title: Exclude a known-valid TableRelation exception via OnAfterRemoveTableRelation
summary: Codeunit 134926 "Table Relation Test" (shipped in BCApps' test app — only consumers that depend on the BC test libraries can subscribe to it) reads Table Relations Metadata tenant-wide across every installed app, not just the current one, and validates each field's type and length against what its…
tier: official
language: en
tags:
  - table-relation-test
  - tablerelationsmetadata
  - onafterremovetablerelation
  - field-length
  - field-type
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:44.801Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3f7d77806ff413a2d3912cd044bdb3b78929e272
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.md
    title: "microsoft/BCQuality: Exclude a known-valid TableRelation exception via OnAfterRemoveTableRelation"
    date: "2026-09-29"
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
    - change/bcquality/159
repo_path: microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.md
layer: microsoft
kind: rule
domain: testing
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
  - OnAfterRemoveTableRelation
---

# Exclude a known-valid TableRelation exception via OnAfterRemoveTableRelation

> Codeunit 134926 "Table Relation Test" (shipped in BCApps' test app — only consumers that depend on the BC test libraries can subscribe to it) reads Table Relations Metadata tenant-wide across every installed app, not just the current one, and validates each field's type and length against what its…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.md) · microsoft layer · testing · BC all · tier official · derived

## Description

Codeunit 134926 "Table Relation Test" (shipped in BCApps' test app — only consumers that depend on the BC test libraries can subscribe to it) reads Table Relations Metadata tenant-wide across every installed app, not just the current one, and validates each field's type and length against what its relations require — but the exact rule depends on whether that field has an *unconditional* relation (a `Table Relations Metadata` row with `Condition Field No. = 0`) among its relations, or only *conditional* ones:

- If any relation is unconditional, the field's length must equal *exactly* the largest related field's length, and its type must exactly match the required type — resolved to `Text` when the related fields themselves mix `Code` and `Text`.
- If every relation for that field is conditional, the requirement relaxes: the field only needs to be *at least* as long as the largest related field (longer is accepted; only shorter fails), and when the required type is specifically `Code`, both a `Code` and a `Text` source field pass. That `Code`/`Text` tolerance is conditional-only — it does not apply on the unconditional side, and it does not extend to a required type of `Text` (a `Code` source field does not satisfy a required `Text`).

A field with a legitimate, intentional relation shape outside both of these tolerances has no per-field override in its own object definition; the check runs with no built-in escape hatch beyond them. The validation test method itself is `[Scope('OnPrem')]`: it only runs from an on-premises test surface, not from a cloud-targeted test app, so this whole exception mechanism — and the check it works around — is only reachable where that test can actually execute.

## Best Practice

Subscribe to `OnAfterRemoveTableRelation` and call the codeunit's own `RemoveTableRelation(TableRelationsMetadata, TableID, FieldID, RelatedTableID, RelatedFieldID)` to strike the one known-valid relation before the test evaluates it, scoped as narrowly as the exception actually is. Because the test itself is `[Scope('OnPrem')]`, do not recommend subscribing to it as a way to guard a cloud-targeted app's test suite — the subscription has no effect where the test never runs.

See sample: [`table-relation-test-exclude-known-invalid-relations-via-event.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.good.al).

## Anti Pattern

Excluding an entire table's relations (or disabling the whole test codeunit) to work around one known exception. This discards the check's coverage for every other relation on that table, or in the app, not just the one that needed an exception.

See sample: [`table-relation-test-exclude-known-invalid-relations-via-event.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.bad.al).

## Source

The `OnAfterRemoveTableRelation` exclusion technique is drawn from Luc van Vugt's "How-to: Test your Table Relations (2)": https://www.fluxxus.nl/index.php/bc/how-to-test-your-table-relations-2/. The codeunit/event signature, the `[Scope('OnPrem')]` boundary, and the tenant-wide `Table Relations Metadata` scope described above were verified directly against BCApps' `codeunit 134926 "Table Relation Test"` source, not taken from the post.

## Examples

- [Good: table-relation-test-exclude-known-invalid-relations-via-event.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.good.al)
- [Bad: table-relation-test-exclude-known-invalid-relations-via-event.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/table-relation-test-exclude-known-invalid-relations-via-event.bad.al)

## Changed by

- [#159 3 AL/BC testing patterns from an external BC testing expert's blog (Luc van Vugt, fluxxus.nl)](../../../../changes/bcquality/159.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
