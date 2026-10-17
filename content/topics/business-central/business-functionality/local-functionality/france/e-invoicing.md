---
id: topic/business-central/business-functionality/local-functionality/france/e-invoicing
type: topic
title: E-invoicing
summary: E-invoicing for France in Business Central covers electronic invoicing with UBL 2.1 and Factur-X, and E-Reporting for transactions outside mandatory B2B e-invoicing. It answers questions about formats, incoming invoice import, and submitting transactions to the tax authority via partner platforms.
tier: official
language: en
system: localization
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T01:13:14.128Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5969bb5e91f97d5c927c3a246196289296d18348bb0408c79e152aadf1382dd0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/enable-electronic-invoicing-france
    title: Enable electronic invoicing with UBL 2.1 and Factur-X [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/electronic-reporting-france
    title: Use the E-Document Format for E-Reporting [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/enable-electronic-invoicing-france
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/electronic-reporting-france
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/france
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9355
learn_toc_path:
  - Business functionality
  - Local functionality
  - France
  - E-invoicing
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/france
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 95e8dd3ddbc5fd20fe35a5ffeeb9df0d63ec2781be3ae8054eba58f3ee9bcdc6
narrative: generated
---

# E-invoicing

> E-invoicing for France in Business Central covers electronic invoicing with UBL 2.1 and Factur-X, and E-Reporting for transactions outside mandatory B2B e-invoicing. It answers questions about formats, incoming invoice import, and submitting transactions to the tax authority via partner platforms.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > E-invoicing · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the French local functionality for meeting the electronic invoicing reform. It has two pages, both based on the E-Reporting FR extension and the e-document framework.

The first page explains how to enable electronic invoicing with UBL 2.1 and Factur-X for B2B transactions, including PEPPOL BIS 3.0 support, import of incoming invoices, and French business rule validation. The second page explains the E-Reporting FR e-document format, used for transactions outside the mandatory B2B e-invoicing scope, such as B2C, cross-border, exports and intra-community sales.

Start with the UBL 2.1 and Factur-X page if you need to send or receive B2B invoices. Move to the E-Reporting page if you must report other transactions to the tax authority through a partner-dissemination platform such as Pagero or Avalara.

## Key points

- Electronic invoicing for France is enabled through the E-Reporting FR extension.
- Supported outgoing formats include UBL 2.1 and Factur-X PDF/A-3 hybrid invoices, plus PEPPOL BIS 3.0.
- Incoming Factur-X and PEPPOL BIS 3.0 invoices can be imported.
- French business rules are validated for e-invoices.
- E-Reporting FR e-document format covers B2C, cross-border, exports and intra-community transactions.
- E-reporting data is submitted via partner-dissemination platforms such as Pagero or Avalara.
- E-reporting generates an XML payload and tracks Service Status and E-Reporting Acceptance Date.
- Both batch and individual submission workflows are supported, with an E-Reporting Transaction Type.

## Learn pages

- [Enable electronic invoicing with UBL 2.1 and Factur-X [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/enable-electronic-invoicing-france): Enable French e-invoicing in Business Central with UBL 2.1 (PEPPOL BIS 3.0) and Factur-X, ensuring DGFIP B2B compliance.
- [Use the E-Document Format for E-Reporting [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/electronic-reporting-france): Learn how to send French e-reporting transactions by using the E-Reporting FR format and an e-document service.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9355 [master] [FR] [E-document] Changed place for "SIRET No." and exposed codeunit for export Factur-X](../../../../../changes/bcapps/9355.md) (code change): "Export Factur-X Document codeunit in the French E-Document app"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
