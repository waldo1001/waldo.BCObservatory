---
id: topic/business-central/business-functionality/local-functionality/netherlands/vat
type: topic
title: VAT
summary: "VAT in the Dutch (NL) version of Business Central: setting up and submitting electronic VAT and ICP declarations through Digipoort, configuring VAT categories, and creating an audit file for the Dutch tax authority. It answers setup, certificate, submission and audit file questions."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:30.259Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bb75bed5a3d6ad183bd60358d60e482a7a081d2b3edbc7ed0340c52dca3f01e3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-create-an-audit-file-for-the-tax-authority
    title: Create an Audit File for Tax Authority [NL]
    date: "2025-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-electronic-vat-and-icp-declarations
    title: Electronic VAT and ICP Declarations [NL]
    date: "2026-05-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-vat-categories
    title: How to Set Up VAT Categories
    date: "2025-03-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/electronic-vat-and-icp-declarations
    title: Submit electronic VAT & ICP declarations [NL]
    date: "2026-05-08"
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

> VAT in the Dutch (NL) version of Business Central: setting up and submitting electronic VAT and ICP declarations through Digipoort, configuring VAT categories, and creating an audit file for the Dutch tax authority. It answers setup, certificate, submission and audit file questions.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Netherlands](../netherlands.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the Netherlands-specific VAT tasks. It has four pages and no subtopics. Two pages deal with preparing the electronic declarations: configuring Digipoort and certificates, and mapping VAT categories to XML elements. One page covers submitting the declarations, and one covers the audit file.

A practical order is: set up Digipoort endpoints, the PKIoverheid certificate, the service certificate and the fiscal entity details; set up VAT categories and subcategories; then create and submit VAT and ICP declarations and process the responses from the tax authority. The audit file is a separate task that can be done independently when tax inspectors need data.

Start with "Electronic VAT and ICP Declarations [NL]" if you are preparing to file for the first time. Start with "Create an Audit File for Tax Authority [NL]" if you only need to hand over ledger data.

## Key points

- Electronic VAT and ICP setup requires Digipoort endpoint URLs, a PKIoverheid certificate, a service certificate and tax authority (fiscal entity) information.
- VAT category codes are set up as category and subcategory combinations that map to XML elements in the electronic VAT declaration.
- Declarations are created in XBRL format and submitted to the tax authorities through Digipoort.
- VAT declarations are reported monthly or quarterly; ICP declarations are reported quarterly.
- Submission includes certificate management and processing of response messages from the tax authority.
- The audit file is built from general ledger journal entries for a selected fiscal period.
- The audit file creation can exclude begin balances and exports in XAF format.

## Learn pages

- [Create an Audit File for Tax Authority [NL]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-create-an-audit-file-for-the-tax-authority): Learn how to create an audit file for the tax authority with the Dutch version of Business Central.
- [Electronic VAT and ICP Declarations [NL]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-electronic-vat-and-icp-declarations): Learn how to set up electronic VAT and ICP declarations in the Dutch Version.
- [How to Set Up VAT Categories](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-set-up-vat-categories): Learn how to set up VAT category codes for all XML elements required in the electronic VAT declaration.
- [Submit electronic VAT & ICP declarations [NL]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/electronic-vat-and-icp-declarations): With the eXtensible Business Reporting Language (XBRL) reporter, you can submit the ICP declaration or the VAT declaration in the required XML format.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
