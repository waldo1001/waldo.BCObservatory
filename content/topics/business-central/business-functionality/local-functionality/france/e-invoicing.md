---
id: topic/business-central/business-functionality/local-functionality/france/e-invoicing
type: topic
title: E-invoicing
summary: E-invoicing for France in Business Central covers electronic invoicing with UBL 2.1 and Factur-X, and E-Reporting for transactions outside mandatory B2B e-invoicing. It answers questions about formats, incoming invoice import, and submitting transactions to the tax authority via partner platforms.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:57:04.924Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
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
    - change/bcapps/10342
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

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > E-invoicing · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the French local functionality for meeting the electronic invoicing reform. It has two pages.\n\nThe first page explains how to enable electronic invoicing with UBL 2.1 and Factur-X for B2B transactions using the E-Reporting FR extension. It covers PEPPOL BIS 3.0 support, import of incoming Factur-X and PEPPOL BIS 3.0 invoices, and validation against French business rules. The second page explains the E-Reporting FR e-document format. It is used for transactions outside the mandatory B2B e-invoicing scope, such as B2C, cross-border, exports and intra-community sales.\n\nStart with the UBL 2.1 and Factur-X page if you need to send or receive B2B invoices. Move to the E-Reporting page if you must report other transactions to the tax authority through a partner-dissemination platform such as Pagero or Avalara.

## Key points

- Electronic invoicing for France is enabled through the E-Reporting FR extension.
- Supported formats include UBL 2.1 invoice generation, PEPPOL BIS 3.0, and Factur-X PDF/A-3 hybrid invoices.
- Incoming Factur-X and PEPPOL BIS 3.0 invoices can be imported.
- E-invoices are validated against French business rules.
- The E-Reporting FR e-document format covers B2C, cross-border, export and intra-community transactions.
- E-reporting data is submitted to the tax authority through partner-dissemination platforms such as Pagero or Avalara.
- E-reporting generates an XML payload and tracks the Service Status and E-Reporting Acceptance Date.
- Both batch and individual submission workflows are supported, and an E-Reporting Transaction Type is available.

## Learn pages

- [Enable electronic invoicing with UBL 2.1 and Factur-X [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/enable-electronic-invoicing-france): Enable French e-invoicing in Business Central with UBL 2.1 (PEPPOL BIS 3.0) and Factur-X, ensuring DGFIP B2B compliance.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 143 "Posted Sales Invoices"](../../../../../objects/page/143.md), [Page 1500 "Workflows"](../../../../../objects/page/1500.md), [Page 306 "Report Selection - Sales"](../../../../../objects/page/306.md), [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 359 "Document Sending Profiles"](../../../../../objects/page/359.md)
- [Use the E-Document Format for E-Reporting [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/electronic-reporting-france): Learn how to send French e-reporting transactions by using the E-Reporting FR format and an e-document service.
  - In the observatory: [Page 21 "Customer Card"](../../../../../objects/page/21.md), [Page 26 "Vendor Card"](../../../../../objects/page/26.md), [Page 6103 "E-Document Services"](../../../../../objects/page/6103.md), [Page 6122 "E-Documents"](../../../../../objects/page/6122.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10342 Add GLN information to XRechnung and ZUGFeRD exports](../../../../../changes/bcapps/10342.md) (code change): "GLN identifiers with schemeID 0088 are now included in German XRechnung"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
