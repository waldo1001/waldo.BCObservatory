---
id: topic/business-central/business-functionality/local-functionality/india/tds-for-customer
type: topic
title: TDS for customer
summary: TDS for customer in the India localization covers setting up Tax Deducted at Source under the Income Tax Act, 1961, calculating TDS on customer payments, and tracking TDS certificates. It answers questions on TDS setup data, which documents calculate TDS, and how to assign, update or rectify certificates.
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:44.046Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 01d512f0dcdb387ac662a2be1c32f2d9cbcadfdd895c2135075628cf338d4c87
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-for-Customer-Overview
    title: Set Up TDS by Customer Based on the Income Tax Act, 1961 Provisions
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Certificate-Update
    title: TDS Certificate Tracking
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Calculation-for-Customer
    title: TDS for Customer
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-for-Customer-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Certificate-Update
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Calculation-for-Customer
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - TDS for customer
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d4ff17c90e7d6642726b02f3a2d436c004614c19f98c18c58bfed46f8874ca51
narrative: generated
---

# TDS for customer

> TDS for customer in the India localization covers setting up Tax Deducted at Source under the Income Tax Act, 1961, calculating TDS on customer payments, and tracking TDS certificates. It answers questions on TDS setup data, which documents calculate TDS, and how to assign, update or rectify certificates.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > TDS for customer · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section describes how Business Central's India localization handles TDS deducted by customers from payments made to the company. It has three pages and no subtopics: one for setup, one for calculation, and one for certificate tracking.

Start with the setup page. It covers the master data TDS depends on: TDS rates, tax accounting periods and quarters, T.A.N., assessee codes, sections, concessional codes, posting setup, and customer, location, company and state data. Next, the TDS for Customer page explains how TDS is calculated and tracked on payments and certificates receivable, using General Journal, Cash Receipt Voucher, Bank Receipt Voucher, Cash Receipt Journal and Sales Invoice documents. Finally, TDS Certificate Tracking explains how to manage certificate details against customer ledger entries after TDS has been posted.

## Key points

- Setup is based on the Income Tax Act, 1961 and includes TDS rates by section and assessee code.
- Setup also needs tax accounting periods and quarters, T.A.N. numbers, TDS sections, and concessional codes for government-authorized rates.
- Posting setup and customer, location, company and state master data are part of the configuration.
- TDS can be calculated and tracked from General Journal, Cash Receipt Voucher, Bank Receipt Voucher, Cash Receipt Journal and Sales Invoice documents.
- The TDS for Customer page covers the TDS Section Code, TDS Base Amount calculation, TDS Customer Allowed Sections, Location Code and T.A.N. No.
- TDS certificates can be assigned, updated and rectified against customer ledger entries.
- Certificate tracking distinguishes TDS Certificate Receivable from TDS Certificate Received.

## Learn pages

- [Set Up TDS by Customer Based on the Income Tax Act, 1961 Provisions](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-for-Customer-Overview): Set up customer TDS classifications and related transaction defaults for tracking tax deductions in the India localization of Business Central.
- [TDS Certificate Tracking](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Certificate-Update): Track and update TDS certificates for customer transactions, including certificate details and related actions in Business Central for India.
  - In the observatory: [Page 18663 "Update TDS Certificate Details (IN)"](../../../../../objects/page/18663-in.md)
- [TDS for Customer](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Calculation-for-Customer): Calculate and track TDS on customer transactions, and review illustrative payment and accounting entries in the India localization of Business Central.
  - In the observatory: [Page 18553 "Bank Receipt Voucher (IN)"](../../../../../objects/page/18553-in.md), [Page 18555 "Cash Receipt Voucher (IN)"](../../../../../objects/page/18555-in.md), [Page 255 "Cash Receipt Journal"](../../../../../objects/page/255.md), [Page 39 "General Journal"](../../../../../objects/page/39.md), [Page 43 "Sales Invoice"](../../../../../objects/page/43.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
