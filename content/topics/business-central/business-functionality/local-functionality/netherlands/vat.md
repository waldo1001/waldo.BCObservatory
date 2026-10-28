---
id: topic/business-central/business-functionality/local-functionality/netherlands/vat
type: topic
title: VAT
summary: "Dutch VAT functionality in Business Central: setting up and submitting electronic VAT and ICP declarations through Digipoort, configuring VAT declaration categories, and creating an audit file (XAF) for the Dutch tax authority. It answers setup, submission and audit file questions for the Netherlands."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:37.310Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a13e628db4ca066a1862d4b78cd4a923934e7bfc36fb73979c0075a83cdec8b7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-create-an-audit-file-for-the-tax-authority
    title: Create an Audit File for the Dutch Tax Authority
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-electronic-vat-and-icp-declarations
    title: Set Up Dutch Electronic VAT and ICP Declarations
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-vat-categories
    title: Set Up Dutch VAT Declaration Categories
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/electronic-vat-and-icp-declarations
    title: Submit Electronic VAT and ICP Declarations in the Netherlands
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-create-an-audit-file-for-the-tax-authority
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-electronic-vat-and-icp-declarations
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-vat-categories
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/electronic-vat-and-icp-declarations
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/netherlands
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Netherlands
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/netherlands
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 065c0c9b960bd4b06a81dc23976c5e73474932995b49f5f9815ec132fc5fa222
narrative: generated
---

# VAT

> Dutch VAT functionality in Business Central: setting up and submitting electronic VAT and ICP declarations through Digipoort, configuring VAT declaration categories, and creating an audit file (XAF) for the Dutch tax authority. It answers setup, submission and audit file questions for the Netherlands.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Netherlands](../netherlands.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the Netherlands-specific VAT tasks in Business Central. It has four pages with no subtopics: two on setting up electronic declarations, one on submitting them, and one on the audit file.

Start with the setup page for electronic VAT and ICP declarations, which covers certificates, Digipoort endpoints, fiscal entity and tax contact settings. Then set up the VAT declaration categories, which map VAT statement data to the XML elements of the DigitalTaxDecl format. After that, the submission page explains how to send VAT and ICP declarations to the Dutch tax authorities and process the response messages.

The audit file page is separate. It describes creating an audit file from general ledger journal entries for a chosen fiscal year period, for tax authority examinations or for data exchange between companies.

## Key points

- Electronic VAT and ICP declarations need certificates, Digipoort endpoints and tax declaration parameters to be configured first.
- Setup also includes the fiscal entity and tax contact configuration.
- VAT category codes, category and subcategory combinations, and box number mappings link VAT statement data to XML elements in the DigitalTaxDecl format.
- The VAT declaration categories page covers DigitalTaxDecl version support and optional fields.
- Declarations go to the Dutch tax authorities through Digipoort, using XBRL format or the Digital Tax Declaration app.
- Submission uses certificate-based authentication (PKIoverheid certificates) and includes processing of response messages.
- The audit file is based on general ledger journal entries for a specified fiscal year period, with start date, end date and an option to exclude the begin balance.
- The audit file is exported as an XAF file.

## Learn pages

- [Create an Audit File for the Dutch Tax Authority](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-create-an-audit-file-for-the-tax-authority): Create a Dutch tax authority audit file from general ledger transactions in Business Central, and choose the reporting dates and opening balance options.
  - In the observatory: [Report 11412 "Tax Authority - Audit File (NL)"](../../../../../objects/report/11412-nl.md)
- [Set Up Dutch Electronic VAT and ICP Declarations](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-electronic-vat-and-icp-declarations): Set up Dutch electronic VAT and ICP declarations in Business Central, including contact details, Digipoort service endpoints, and certificate settings.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 11410 "Elec. Tax Declaration Setup (NL)"](../../../../../objects/page/11410-nl.md)
- [Set Up Dutch VAT Declaration Categories](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-vat-categories): Map Dutch VAT statement amounts to electronic declaration categories, or use box numbers for VAT returns that use the DigitalTaxDecl reporting version.
- [Submit Electronic VAT and ICP Declarations in the Netherlands](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/electronic-vat-and-icp-declarations): With the eXtensible Business Reporting Language (XBRL) reporter, you can submit the ICP declaration or the VAT declaration in the required XML format.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 11410 "Elec. Tax Declaration Setup (NL)"](../../../../../objects/page/11410-nl.md), [Page 11411 "Elec. Tax Declaration Card (NL)"](../../../../../objects/page/11411-nl.md), [Page 11416 "Elec. Tax Decl. Response Msgs. (NL)"](../../../../../objects/page/11416-nl.md), [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
