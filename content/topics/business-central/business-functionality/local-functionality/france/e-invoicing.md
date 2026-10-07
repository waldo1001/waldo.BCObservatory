---
id: topic/business-central/business-functionality/local-functionality/france/e-invoicing
type: topic
title: E-invoicing
summary: "E-invoicing for France in Business Central: how to enable electronic invoicing with UBL 2.1 (PEPPOL BIS 3.0) or Factur-X, and how to use the E-Reporting FR e-document format. It answers setup and compliance questions about French e-invoicing reform, PDP delivery and tax authority reporting."
tier: official
language: en
system: localization
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 94d6cb0e0de5c63a55d123f3f57daa4e21e95a41c27f36068e8cf2d93e436bd4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/enable-electronic-invoicing-france
    title: Enable electronic invoicing with UBL 2.1 and Factur-X [FR]
    date: "2026-06-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/electronic-reporting-france
    title: Use the E-Document Format for E-Reporting [FR]
    date: "2026-06-23"
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

> E-invoicing for France in Business Central: how to enable electronic invoicing with UBL 2.1 (PEPPOL BIS 3.0) or Factur-X, and how to use the E-Reporting FR e-document format. It answers setup and compliance questions about French e-invoicing reform, PDP delivery and tax authority reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > E-invoicing · tier official · system localization · **unreviewed** (machine-generated narrative)

## Overview

This section covers the French e-invoicing localization in Business Central. It has two pages and no subtopics. Both rely on the e-document framework: you configure an e-document service and a workflow, and documents are exported automatically.

The first page explains how to enable electronic invoicing with UBL 2.1 (PEPPOL BIS 3.0) or Factur-X to meet the French e-invoicing reform. It covers setup of company information, customers, vendors, e-document services and workflows for automatic export and delivery to a PDP.

The second page covers the E-Reporting FR e-document format. It generates structured XML for transactions that must be reported to the tax authority, and describes setup for PDPs such as Pagero and Avalara. Start with the invoicing page, then move to e-reporting if you have transactions that need reporting.

## Key points

- Supported invoice formats: UBL 2.1 (PEPPOL BIS 3.0) and Factur-X (PDF/A-3).
- Setup covers company information, customers, vendors, e-document services and workflows.
- French identifiers such as SIRET and SIREN are supported, along with electronic address configuration.
- Invoices can be exported automatically through a workflow and delivered to a PDP.
- The E-Reporting FR format generates structured XML for transactions requiring tax authority reporting.
- E-reporting setup is described for PDPs such as Pagero and Avalara.
- E-reporting features include transaction categorization, batch submissions and tracking of tax authority acceptance.

## Learn pages

- [Enable electronic invoicing with UBL 2.1 and Factur-X [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/enable-electronic-invoicing-france): Enable French e-invoicing in Business Central with UBL 2.1 (PEPPOL BIS 3.0) and Factur-X, ensuring DGFIP B2B compliance.
- [Use the E-Document Format for E-Reporting [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/electronic-reporting-france): Learn how to send French e-reporting transactions by using the E-Reporting FR format and an e-document service.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
