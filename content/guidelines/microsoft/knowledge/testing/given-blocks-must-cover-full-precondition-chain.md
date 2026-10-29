---
id: guideline/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain
type: guideline
title: Cover the full precondition chain in GIVEN, not just the primary record
summary: A [GIVEN] block is only correct if it sets up every precondition the code under test actually reads, not just the record the scenario is "about." For most master-data tests, creating the primary record is enough.
tier: official
language: en
tags:
  - given
  - test-setup
  - posting
  - report
  - request-page
  - precondition
  - completeness
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:46.264Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b34adfebc400d00fd629d3bfb55e2d1ef34c74e2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.md
    title: "microsoft/BCQuality: Cover the full precondition chain in GIVEN, not just the primary record"
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
    - change/bcquality/157
repo_path: microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.md
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
identifiers: []
---

# Cover the full precondition chain in GIVEN, not just the primary record

> A [GIVEN] block is only correct if it sets up every precondition the code under test actually reads, not just the record the scenario is "about." For most master-data tests, creating the primary record is enough.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.md) · microsoft layer · testing · BC all · tier official · derived

## Description

A `[GIVEN]` block is only correct if it sets up every precondition the code under test actually reads, not just the record the scenario is "about." For most master-data tests, creating the primary record is enough. For posting routines and reports it usually is not: an incomplete `[GIVEN]` produces a test that either fails with a setup error unrelated to the scenario, or worse, passes without ever reaching the logic it claims to verify.

## Best Practice

For a posting test, set up the full posting-group chain the document requires (e.g. customer/vendor posting group, gen. business/product posting group, VAT posting setup), the setup records the specific posting path reads, and an explicit date when the path is date-sensitive — a missing link surfaces as an unrelated G/L error, not a meaningful test failure. For a report test that claims to verify filtering or dataset logic, include both a record that should be included and one that should be excluded, plus any request-page parameter or FlowField the report's logic branches on. A report test that only claims to run without error is exempt from the include/exclude pairing, but it must say so in its scenario name or comment — an unlabelled single-record `[GIVEN]` is ambiguous about which claim it is making, and that ambiguity is itself the defect.

See sample: [`given-blocks-must-cover-full-precondition-chain.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.good.al).

## Anti Pattern

A posting test whose `[GIVEN]` creates only the sales header, relying on whatever posting groups happen to exist in the test company. A report test whose `[GIVEN]` creates only matching records, so the report "passes" whether or not its filter logic does anything at all.

See sample: [`given-blocks-must-cover-full-precondition-chain.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.bad.al).

## Examples

- [Good: given-blocks-must-cover-full-precondition-chain.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.good.al)
- [Bad: given-blocks-must-cover-full-precondition-chain.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/given-blocks-must-cover-full-precondition-chain.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
