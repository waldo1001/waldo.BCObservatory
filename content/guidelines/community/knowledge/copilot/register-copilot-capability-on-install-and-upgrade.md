---
id: guideline/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade
type: guideline
title: Register a Copilot capability on install and on upgrade
summary: Every extension that calls the AI module must register its Copilot Capability enum value with codeunit Copilot Capability; using a capability that the calling extension has not registered raises an error.
tier: official
language: en
tags:
  - copilot-capability
  - registercapability
  - iscapabilityregistered
  - install-codeunit
  - upgrade-codeunit
  - onupgradeperdatabase
  - enumextension
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:18.718Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 20e28cc296081fe9f6c52d60a59650865e3fa3f6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.md
    title: "microsoft/BCQuality: Register a Copilot capability on install and on upgrade"
    date: "2026-10-20"
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
    - change/bcquality/229
  related:
    - to: object/codeunit/7773
      title: codeunit 7773 "Copilot Capability"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.md
layer: community
kind: rule
domain: copilot
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnInstallAppPerDatabase
  - IsCapabilityRegistered
  - OnUpgradePerDatabase
  - SetCopilotCapability
  - RegisterCapability
---

# Register a Copilot capability on install and on upgrade

> Every extension that calls the AI module must register its Copilot Capability enum value with codeunit Copilot Capability; using a capability that the calling extension has not registered raises an error.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.md) · community layer · copilot · BC 23.. · tier official · derived

## Description

Every extension that calls the AI module must register its `Copilot Capability` enum value with codeunit `Copilot Capability`; using a capability that the calling extension has not registered raises an error. The usual sample registers it in `OnInstallAppPerDatabase`, but install code does not run when an already-installed extension is upgraded to a version that introduces the capability. On those tenants the Copilot action fails, and the capability is missing from the **Copilot & agent capabilities** page, so administrators cannot see or control it.

This applies to Copilot features built on the AI module, such as PromptDialog experiences and AOAI calls. Agent SDK registration is covered by the Agents domain.

## Best Practice

Put the registration in one procedure, guarded by `IsCapabilityRegistered`, and call it from both `OnInstallAppPerDatabase` and `OnUpgradePerDatabase`, optionally behind an upgrade tag. Pass the availability (`Preview` or `Generally Available`), a learn-more URL, and on BC27 and later the billing type that matches the Azure OpenAI resource the code uses. Follow Microsoft's sample and register only when `EnvironmentInformation.IsSaaSInfrastructure()` is true if the feature is online-only.

See sample: [`register-copilot-capability-on-install-and-upgrade.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.good.al).

## Anti Pattern

An extension that adds a `Copilot Capability` enum extension value and calls `SetCopilotCapability` with it, but registers the capability only from an install codeunit, or never registers it. Detection signal: a `RegisterCapability` call reachable from `OnInstallAppPerDatabase` with no equivalent path from an upgrade codeunit.

Do not flag registration that is shared through a helper called from both triggers, or an extension version whose first release already contains the capability, if the review has evidence that no earlier version was ever published.

See sample: [`register-copilot-capability-on-install-and-upgrade.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.bad.al).

## References

[Build the Copilot capability in AL, Registering an AI capability](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/ai-build-capability-in-al#registering-an-ai-capability): unregistered capabilities throw an error; the registering codeunit can be of type Install or Upgrade; billing type applies from 2025 release wave 2. Install code not running on upgrade is covered in `microsoft/knowledge/upgrade/install-code-does-not-run-on-version-upgrade.md`.

## Examples

- [Good: register-copilot-capability-on-install-and-upgrade.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.good.al)
- [Bad: register-copilot-capability-on-install-and-upgrade.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/register-copilot-capability-on-install-and-upgrade.bad.al)

## Names

- [codeunit 7773 "Copilot Capability"](../../../../objects/codeunit/7773.md) (possibly related: a code span names it)

## Changed by

- [#229 Knowledge: Community Copilot domain (System.AI features) and review skill](../../../../changes/bcquality/229.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
