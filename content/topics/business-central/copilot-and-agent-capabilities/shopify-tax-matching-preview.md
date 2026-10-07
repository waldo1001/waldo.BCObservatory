---
id: topic/business-central/copilot-and-agent-capabilities/shopify-tax-matching-preview
type: topic
title: Shopify tax matching (preview)
summary: Shopify tax matching (preview) covers an AI-powered feature in Business Central US that maps tax information from Shopify orders to Tax Jurisdictions. It answers questions about what the feature does, how to enable and configure it per shop, and how to review, approve, undo and handle rate conflicts.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:17.119Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: acca85ac191cb985c08b020747648cb83552d45d7c1d56424675288c25f4168c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify-tax-matching-application-card
    title: Application card for Shopify Tax Matching
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-tax-matching
    title: Set up and use Shopify Tax Matching
    date: "2026-09-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/shopify-tax-matching-application-card
    - https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-tax-matching
  objects: []
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities
  localizations: []
  videos:
    - video/5OZ0g5IgC8Q
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10408
    - change/bcapps/10409
    - change/bcapps/11722
    - change/bcapps/11899
    - change/bcapps/9751
    - change/bcapps/9772
    - change/bcapps/9784
    - change/bcapps/9792
    - change/bcapps/9796
    - change/bcapps/9860
learn_toc_path:
  - Copilot and agent capabilities
  - Shopify tax matching (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/copilot-and-agent-capabilities
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 071b888cbfe701f4d2a9cb43121f620d432f1a9a592da3d8977e10abffab772a
narrative: generated
---

# Shopify tax matching (preview)

> Shopify tax matching (preview) covers an AI-powered feature in Business Central US that maps tax information from Shopify orders to Tax Jurisdictions. It answers questions about what the feature does, how to enable and configure it per shop, and how to review, approve, undo and handle rate conflicts.

Path: [Copilot and agent capabilities](../copilot-and-agent-capabilities.md) > Shopify tax matching (preview) · tier official · system integration · narrative reviewed by Opus

## Overview

Shopify Tax Matching is a preview feature for Business Central US. It reads tax information on Shopify orders and suggests Tax Jurisdictions, using tax line titles, rates and limited location data. This helps build the structured tax setup that Business Central needs.

The section has two pages. The application card describes what the feature does: validated suggestions, tax setup assistance, rate-conflict detection, and review and approval with configurable human review. The setup page covers the practical steps: enabling and configuring tax matching for each Shopify shop, reviewing suggestions, approving matches and managing rate conflicts.

Start with the application card to understand the scope and the role of human review. Then use the setup page to configure a shop.

## Key points

- The feature is AI-powered and applies to Business Central US.
- It suggests Tax Jurisdictions from Shopify tax line titles, rates and limited location data.
- Suggestions are validated, and rate conflicts are detected.
- Tax matching is enabled and configured per Shopify shop, with the Tax Matching Agent Enabled setting.
- Auto Create Tax Jurisdictions and Auto Create Tax Areas control whether setup records are created automatically.
- Tax Area Naming Pattern sets how created Tax Areas are named.
- Tax Match Review Mode sets how much human review is required.
- Approved matches can be reversed with Undo Approval.

## Learn pages

- [Application card for Shopify Tax Matching](https://learn.microsoft.com/dynamics365/business-central/shopify-tax-matching-application-card): Learn how Shopify Tax Matching uses AI, how Microsoft evaluated the feature, its limitations, and how to use it responsibly.
- [Set up and use Shopify Tax Matching](https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-tax-matching): Learn how to set up Shopify Tax Matching, review suggested tax jurisdiction matches, and approve tax setup for imported orders.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10408 Shopify Copilot Tax Matching Agent: matching engine and data model (stack 2/3)](../../../changes/bcapps/10408.md) (code change): "Shopify Copilot Tax Matching Agent adds a headless matching engine"
- [#10409 Shopify Copilot Tax Matching Agent: human-in-the-loop review + tests (stack 3/3)](../../../changes/bcapps/10409.md) (code change): "Shopify Copilot Tax Matching Agent adds a human-in-the-loop review experience"
- [#11722 [Shopify] Rename tax matching and add configurable processing limit](../../../changes/bcapps/11722.md) (code change): "Shopify Tax Matching feature is renamed to Shopify Tax Matching"
- [#11899 [Shopify] Tax matching fixes for country, Canadian HST, and zero-rate lines](../../../changes/bcapps/11899.md) (code change): "The Shopify Tax Matching Agent now correctly handles North American orders"
- [#9751 Extract invoice date into Invoice Date field and recover due date fro…](../../../changes/bcapps/9751.md) (code change): "Invoice Date is now extracted and populated in the purchase draft"
- [#9772 [PA][Pioneer]: Numeric line fields mis-extracted (discount, quantity, unit of measure)](../../../changes/bcapps/9772.md) (code change): "E-Document importer now preserves zero quantities instead of forcing them to 1"
- [#9784 [E-Document Formats] Fix defects in V2 draft migration for XRechnung, PINT A-NZ and Factura-E](../../../changes/bcapps/9784.md) (code change): "Fixed defects in V2 draft migration for XRechnung, PINT A-NZ, and Factura-E"
- [#9792 Migrate ZUGFeRD, PEPPOL BIS 3.0 DE, Factur-X FR and Peppol BIS 3.0 FR to the V2 draft import pipeline](../../../changes/bcapps/9792.md) (code change): "now migrated to the V2 draft import pipeline, enabling the draft-based workflow"
- [#9796 Show a message when an e-document file cannot be viewed or no data could be extracted](../../../changes/bcapps/9796.md) (code change): "E-document import handling now displays user-friendly messages when a PDF file cannot be displayed"
- [#9860 [Bug]: [DE] XRechnung/ZUGFeRD - Item Charge lines exported without a valid unit of measure code (BR-CL-23 / BR-23 on BT-130)](../../../changes/bcapps/9860.md) (code change): "Item charge lines are now correctly exported as allowances or charges in XRechnung and ZUGFeRD"
- [What's new: Shopify Tax Matching (preview) (2026 release wave 2)](../../../videos/5OZ0g5IgC8Q.md) (video): "Shopify Tax Matching AI Capability; Tax Area Code Auto-Population"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
