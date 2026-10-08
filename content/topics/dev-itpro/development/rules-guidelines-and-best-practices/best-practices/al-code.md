---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/al-code
type: topic
title: AL code
summary: "AL code best practices for Business Central extensions: naming conventions, file structure, formatting, deprecation with obsolete attributes and CLEAN symbols, prefix and suffix rules, and validation rules for Marketplace submission. It answers how to write, name, and retire AL code consistently."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:55.960Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3df0f02aa7c283b6ee9b02663a2e408ccfc8f086aac593e65273869201ac3b27
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-bestpracticesforalcode
    title: Best practices for AL code
    date: "2026-02-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    title: Best Practices for Deprecation of AL Code
    date: "2024-04-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-prefix-suffix
    title: Prefix and suffix for naming in extensions
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-overview
    title: Rules and guidelines for AL code
    date: "2023-04-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-bestpracticesforalcode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-prefix-suffix
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
  localizations: []
  videos: []
  posts:
    - post/thinkaboutit-be/8132
  guidelines: []
  changes:
    - change/bcapps/10559
    - change/bcapps/11036
    - change/bcapps/11609
    - change/bcapps/11682
    - change/bcapps/12078
    - change/bcapps/9700
    - change/bcquality/105
    - change/bcquality/128
    - change/bcquality/136
    - change/bcquality/147
    - change/bcquality/161
    - change/bcquality/193
    - change/bcquality/198
    - change/bcquality/65
    - change/bcquality/95
learn_toc_path:
  - Development
  - Rules, guidelines, and best practices
  - Best practices
  - AL code
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: ba956ebb86ef285878ddc0a53474259a24c07dfcd7d43b7bbd61833d0d693b78
narrative: generated
---

# AL code

> AL code best practices for Business Central extensions: naming conventions, file structure, formatting, deprecation with obsolete attributes and CLEAN symbols, prefix and suffix rules, and validation rules for Marketplace submission. It answers how to write, name, and retire AL code consistently.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > AL code · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section collects guidance for developers writing AL code in extensions. It covers day-to-day style (file and object naming, method declarations, variable naming, formatting, line length) and the rules an extension must meet when submitted to Marketplace.

The pages fit together by topic. The general best practices page sets the coding conventions. The prefix and suffix page explains how to register and use an affix so object names do not collide, and how AppSourceCop relates to it. The deprecation page shows how to retire code with obsolete properties and preprocessor directives, following the pattern Microsoft uses in the Base App. The rules and guidelines page lists critical and important validation requirements and common pitfalls.

Start with the general best practices page for conventions, then read the rules and guidelines page if you plan to submit to Marketplace. Use the prefix/suffix and deprecation pages when you name new objects or remove existing ones.

## Key points

- Best practices page covers file naming, object naming, method declaration, variable naming, code formatting, and line length.
- Deprecation uses the ObsoleteState, ObsoleteTag, and ObsoleteReason properties together with preprocessor directives.
- CLEAN version symbols (CLEAN15 to CLEAN18) are used in the deprecation guidance, matching how Microsoft obsoletes Base App code.
- A prefix or suffix on extension objects prevents name collisions and is needed for Marketplace submission standards.
- Affix registration and AppSourceCop are part of the prefix and suffix guidance.
- Rules and guidelines page lists critical and important validation requirements for Marketplace submissions.
- Rules topics include encryption, data classification, permission sets, translation, application area, and prefix/suffix.

## Learn pages

- [Best practices for AL code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-bestpracticesforalcode): Best practices for writing AL code for Business Central.
- [Best Practices for Deprecation of AL Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deprecation-guidelines): Description of best practices and guidelines for deprecating code in the Base App for Business Central.
- [Prefix and suffix for naming in extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-prefix-suffix): Use a prefix or suffix for names in your extension. This rule applies to all objects, including tables, pages, and codeunits. This topic explains the benefits and guidelines for using a prefix or suffix."
- [Rules and guidelines for AL code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/compliance/apptest-overview): Describing the steps you must go through to successfully submit your Dynamics 365 Business Central app to Marketplace.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10559 Ruleset hardening: promote AL0659 and AL0685 to Error](../../../../../changes/bcapps/10559.md) (code change): "AL0659 and AL0685 overrides are removed from base.ruleset.json"
- [#11036 Ruleset hardening: promote four compatibility rules to Error](../../../../../changes/bcapps/11036.md) (code change): "Rule enforcement becomes stricter going forward, requiring contributors to avoid these patterns"
- [#11609 [Main]-Reduce redundant record restriction checks in item journal line](../../../../../changes/bcapps/11609.md) (code change): "Record restriction checks in item journal operations are optimized"
- [#11682 [Expense Agent] Remove migration TODO and analyzer suppressions](../../../../../changes/bcapps/11682.md) (code change): "Replaced broad AA0073 suppression with compliant temporary-record variable names"
- [#12078 [29.x]Reduce allocations in the "Export to Execl" scenario (#11870)](../../../../../changes/bcapps/12078.md) (code change): "Reuses the default CellDecorator instead of creating new instances for each column-row combination"
- [#9700 Rename TempCustomMigrationTableBuffer back to CustomMigrationTableBuffer](../../../../../changes/bcapps/9700.md) (code change): "Removes the Temp prefix that violated AA0237 on a non-temporary variable"
- [#105 Promote validated community knowledge](../../../../../changes/bcquality/105.md) (code change): "Community AL best practice articles are promoted to Microsoft-endorsed knowledge"
- [#128 knowledge: improve review precision from BCApps PR 10080 feedback](../../../../../changes/bcquality/128.md) (code change): "Two knowledge articles revised after maintainers gave thumbs-down feedback"
- [#136 Add community knowledge: AL boolean operators do not short-circuit](../../../../../changes/bcquality/136.md) (code change): "AL boolean operators do not short-circuit"
- [#147 ShowMandatory + OnQueryClosePage Check](../../../../../changes/bcquality/147.md) (code change): "Two new UI community knowledge articles with code examples demonstrate best practices"
- [#161 AL methods limited during write transactions (RunModal, Codeunit.Run)](../../../../../changes/bcquality/161.md) (code change): "Recommended structure follows Base Application's Commit before Page.RunModal pattern"
- [#193 Clarify locale-safe DateFormula Evaluate inputs](../../../../../changes/bcquality/193.md) (code change): "Clarify locale-safe DateFormula Evaluate inputs. Adds a Microsoft Style article"
- [#198 Add BC performance knowledge from OptimAL learnings](../../../../../changes/bcquality/198.md) (code change): "Each new article has paired good and bad AL examples"
- [#65 Add data-modeling and appsource knowledge articles (MICROSOFT layer)](../../../../../changes/bcquality/65.md) (code change): "Seven remedial BCQuality knowledge articles added to the MICROSOFT layer covering data-modeling patterns, AppSource conventions, and styling best practices"
- [#95 style-review: calibrate analyzer-redundant rules to info; keep correctness bugs out of style scope](../../../../../changes/bcquality/95.md) (code change): "al-style-review skill recalibrates analyzer-redundant rules to info severity and clarifies domain boundaries"
- [BCQuality: A Shared Quality Bar for AL Code, Built for Agents](../../../../../posts/thinkaboutit-be/8132.md) (community post): "BCQuality is Microsoft's open repository of quality knowledge for AL code"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
