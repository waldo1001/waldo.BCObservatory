---
id: guideline/microsoft/knowledge/data-modeling/check-post-line-batch-pattern
type: guideline
title: Split posting routines into Check Line / Post Line / Post Batch
summary: Business Central's own journal-based posting routines consistently follow a three-codeunit split, each with one primary responsibility — Codeunit "Gen. Jnl.-Check Line" / "Gen. Jnl.-Post Line" / "Gen.
tier: official
language: en
tags:
  - posting-routine
  - check-line
  - post-line
  - post-batch
  - companion-codeunit
  - yes-no-wrapper
  - journal
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.995Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e6b1229edf45c560d8fa950dc6536eb3559d567b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-post-line-batch-pattern.md
    title: "microsoft/BCQuality: Split posting routines into Check Line / Post Line / Post Batch"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/11
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/156
  related:
    - to: object/codeunit/12
      title: codeunit 12 "Gen. Jnl.-Post Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/13
      title: codeunit 13 "Gen. Jnl.-Post Batch"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/check-post-line-batch-pattern.md
layer: microsoft
kind: rule
domain: data-modeling
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

# Split posting routines into Check Line / Post Line / Post Batch

> Business Central's own journal-based posting routines consistently follow a three-codeunit split, each with one primary responsibility — Codeunit "Gen. Jnl.-Check Line" / "Gen. Jnl.-Post Line" / "Gen.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-post-line-batch-pattern.md) · microsoft layer · data-modeling · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Business Central's own journal-based posting routines consistently follow a three-codeunit split, each with one primary responsibility — `Codeunit "Gen. Jnl.-Check Line"` / `"Gen. Jnl.-Post Line"` / `"Gen. Jnl.-Post Batch"` for the general journal, and the same `<Journal>-Check Line` / `<Journal>-Post Line` / `<Journal>-Post Batch` shape repeated for Item, Resource, Job, Fixed Asset, Insurance, and Cost Accounting journals: `Check Line` validates one line, `Post Line` posts exactly one journal line — `Gen. Jnl.-Post Line` itself can write more than one G/L Entry per call (a balancing entry, VAT, currency rounding, deferrals), so "exactly one line" describes its input, not a one-entry-out guarantee — and `Post Batch` loops both across the journal. A document posting routine (posting one document at a time) calls `Post Line` directly and skips `Post Batch`. This is the standard shape to evaluate a new journal-based posting routine against, not a platform-enforced constraint — a routine with a genuinely different transaction/reuse shape may legitimately organize itself differently, and the three codeunits' responsibilities are a useful default split, not a guarantee that every implementation keeps them non-overlapping. But a new routine that blurs this split without a specific reason either misses functionality other code expects to call directly, or exposes an interaction surface it shouldn't.

## Best Practice

`Check Line` reads setup/dimension data only on its first call and shows no UI beyond errors. `Post Line` only operates on the record passed to it — never the Journal table — so it can be called directly by other posting code, including a document posting routine. `Post Batch` is the only one of the three that reads and updates the Journal table, and it is the only one invoked from the Post action on a journal page. A `-Post` document codeunit is never called directly from a page; a page calls a `-Post (Yes/No)` confirmation wrapper instead, so the same `-Post` codeunit can also run unattended from a batch-posting report.

See sample: [`check-post-line-batch-pattern.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-post-line-batch-pattern.good.al).

## Anti Pattern

A single monolithic posting codeunit that reads the Journal table, validates lines, writes ledger entries, and shows confirmation dialogs all in one procedure. It cannot be reused by another posting routine without fabricating journal records, and it cannot run unattended because it insists on user interaction.

See sample: [`check-post-line-batch-pattern.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-post-line-batch-pattern.bad.al).

## Examples

- [Good: check-post-line-batch-pattern.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-post-line-batch-pattern.good.al)
- [Bad: check-post-line-batch-pattern.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-post-line-batch-pattern.bad.al)

## Names

- [codeunit 11 "Gen. Jnl.-Check Line"](../../../../objects/codeunit/11.md) (names this object)
- [codeunit 12 "Gen. Jnl.-Post Line"](../../../../objects/codeunit/12.md) (possibly related: a code span names it)
- [codeunit 13 "Gen. Jnl.-Post Batch"](../../../../objects/codeunit/13.md) (possibly related: a code span names it)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
