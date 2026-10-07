---
id: topic/business-central/business-functionality/finance/set-up-and-use-e-documents
type: topic
title: Set up and use E-Documents
summary: "E-Documents in Business Central: how to set up, connect and use electronic invoices and business documents in sales and purchasing. It answers questions about service and workflow setup, Peppol formats, external access points, Microsoft 365 connectors, and extending the framework."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:05.029Z"
  flags: []
generated:
  at: "2026-10-07T16:30:41.512Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: de5f6315fc1c1c74725721329c76d04e681cd8a6d3562f2ddff3f4a26916d652
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-connectors
    title: Connect E-Documents to external access points
    date: "2025-07-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-connect-edocuments-microsoft365
    title: Connect e-documents to Microsoft 365 applications
    date: "2026-09-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-overview
    title: E-documents overview
    date: "2025-07-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments
    title: Extending the e-documents functionality
    date: "2025-01-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments
    title: Set Up E-documents
    date: "2025-07-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments-external
    title: Set up the E-Documents connector with external endpoints
    date: "2025-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments
    title: Use e-documents in sales
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments-purchase
    title: Use E-Documents in the purchase process
    date: "2026-09-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-connectors
    - https://learn.microsoft.com/dynamics365/business-central/finance-connect-edocuments-microsoft365
    - https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments-external
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments-purchase
  objects:
    - object/page/42
    - object/page/43
    - object/page/50
    - object/page/51
    - object/page/132
    - object/page/138
    - object/page/359
    - object/page/360
    - object/page/6103
    - object/page/6121
    - object/page/6133
    - object/page/6167
    - object/page/9301
    - object/page/9305
    - object/page/9307
    - object/page/9308
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos:
    - video/07G7aC14Y_w
    - video/GM0DNxu39LM
    - video/gVjrKPHlrgM
    - video/h6a8BVzvuZ4
    - video/hba7KVWrIwY
    - video/hL4PUhjyhNY
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10631
    - change/bcapps/10799
    - change/bcapps/11483
    - change/bcapps/9477
    - change/bcapps/9578
    - change/bcapps/9646
    - change/bcapps/9648
    - change/bcapps/9749
    - change/bcapps/9878
learn_toc_path:
  - Business functionality
  - Finance
  - Set up and use E-Documents
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 8
  code: 16
  video: 6
  blog: 0
  guideline: 0
bc_forms:
  - 42
  - 43
  - 50
  - 51
  - 132
  - 138
  - 359
  - 360
  - 6103
  - 6121
  - 6133
  - 6167
  - 9301
  - 9305
  - 9307
  - 9308
member_hash: 9652d43d8b60565d9824d5f02d18f9bb3544c31230257171f6de924ca490ad5f
narrative: generated
---

# Set up and use E-Documents

> E-Documents in Business Central: how to set up, connect and use electronic invoices and business documents in sales and purchasing. It answers questions about service and workflow setup, Peppol formats, external access points, Microsoft 365 connectors, and extending the framework.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Set up and use E-Documents · tier official · system finance · narrative reviewed by Opus

## Overview

The E-Documents app manages electronic invoices and other business documents in Business Central. It supports localization for multiple countries and can be extended for specific requirements. The overview page is the place to start, followed by the setup page, which covers e-document services, workflows and document sending profiles.

Connectivity has two sides. Connectors to external access points (Pagero, Avalara, Logiq, ExFlow, B2BRouter) are described in one page, and a second page covers installing the E-Document Core app and connector apps from Microsoft Marketplace. A separate page covers connecting to Outlook, SharePoint and OneDrive to import vendor invoices and receipts.

Day-to-day use is split into sales and purchase pages. Sales covers creating and sending e-invoices and credit memos and checking status and logs. Purchase covers receiving, matching and processing incoming documents. A page for developers describes the interfaces that localization apps and ISVs use to add formats and services.

## Key points

- Setup covers e-document services, workflows and document sending profiles, with PEPPOL BIS 3.0, Data Exchange formats and the clearance model (page lists version 24.0).
- External connectors listed: Pagero, Avalara, Logiq, ExFlow and B2BRouter, with OAuth 2.0 authentication.
- Endpoint connector setup needs the E-Document Core app plus connector apps from Microsoft Marketplace, then connection setup, GLN configuration, customer e-document setup and workflow configuration.
- Microsoft 365 connectors (Outlook, SharePoint, OneDrive) import vendor invoices and receipts for accounts payable, using E-Document Services and Service Integration V2.
- Sales: create and send e-invoices and credit memos in Peppol formats, and view e-document status and logs.
- Purchase: handles invoices, orders and credit memos, with automatic matching, Copilot purchase order matching, text-to-account mapping, item reference mapping and vendor configuration.
- Extensibility covers document format creation, service integration, async sending, batch processing, response handling and receiving (page lists 2025 release wave 1).

## Learn pages

- [Connect E-Documents to external access points](https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-connectors): Learn how to set up E-Documents in Business Central to send and receive electronic documents with different external access points.
- [Connect e-documents to Microsoft 365 applications](https://learn.microsoft.com/dynamics365/business-central/finance-connect-edocuments-microsoft365): Learn how to integrate e-documents with Microsoft 365 applications.
- [E-documents overview](https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-overview): Learn about e-documents in Business Central and how they streamline business transactions with automated document management and local compliance features.
- [Extending the e-documents functionality](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments): Learn how to extend e-documents functionality with specific requirements.
- [Set Up E-documents](https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments): Learn how to set up e-documents in Business Central with step-by-step configuration of services, formats, workflows, and document sending profiles.
- [Set up the E-Documents connector with external endpoints](https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments-external): This article explains how to set up E-Documents functionality when connected to external endpoints.
- [Use e-documents in sales](https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments): Learn how to use e-documents functionality that is related to sales.
- [Use E-Documents in the purchase process](https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments-purchase): Learn how to set up vendors and handle purchase invoices, orders, and credit memos using e-documents in Dynamics 365 Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10631 Integration/main to releases 29.x 31a860b5](../../../../changes/bcapps/10631.md) (code change): "E-document import helpers and providers updated to support additional validation scenarios"
- [#10799 Remove OnPrem scope from Table 1226 "Payment Export Data".SetSwissExport](../../../../changes/bcapps/10799.md) (code change): "Payment Export Data table is now callable from Cloud extensions"
- [#11483 [E-Documents Core] - Linkage & Traceability](../../../../changes/bcapps/11483.md) (code change): "E-Documents module now provides linkage and traceability by adding lookup functions"
- [#9477 [main]-Invalid SEPA export file format when SEPA Non-Euro Export enabled](../../../../changes/bcapps/9477.md) (code change): "SEPA credit transfer export format is corrected when SEPA Non-Euro Export is enabled"
- [#9578 [E-Documents Core] - Enabling remittance advice export via E-Documents (payment journal + posted payments)](../../../../changes/bcapps/9578.md) (code change): "E-Documents now supports exporting remittance advice from payment journals and posted vendor payments"
- [#9646 [Bug]: [DE] XRechnung/ZUGFeRD — no posting-time error when SELLER CONTACT (BG-6) source data is incomplete, producing non-compliant e-invoices](../../../../changes/bcapps/9646.md) (code change): "E-Document posting now validates that seller contact information"
- [#9648 [master]-[BE] [PEPPOL] There is a problem between the totals on the invoice printout and the XML PEPPOL with Payment discount](../../../../changes/bcapps/9648.md) (code change): "Fixed discrepancy between invoice printout and PEPPOL XML totals"
- [#9749 OIOUBL fixes after schematron update](../../../../changes/bcapps/9749.md) (code change): "OIOUBL export now correctly handles discounts by reporting them with proper VAT categories"
- [#9878 Add buyer order reference to ZUGFeRD export](../../../../changes/bcapps/9878.md) (code change): "ZUGFeRD export now includes the buyer order reference"
- [What's new in E-Documents: Overview (2026 release wave 2)](../../../../videos/07G7aC14Y_w.md) (video): "EDI functionality in Business Central; Purchase order EDI document type; Sales order automatic creation from EDI"
- [What's New: E-Documents Connectors (2025 release wave 1)](../../../../videos/GM0DNxu39LM.md) (video): "e-documents; connectors; appsource; electronic invoicing; integration setup"
- [What's New: E-Documents ZUGFeRD Format (2025 release wave 2)](../../../../videos/gVjrKPHlrgM.md) (video): "e-documents; zugferd; pdf-a3; germany; invoicing; hybrid documents"
- [What's New: E-Documents and Clearance Model (2025 release wave 2)](../../../../videos/h6a8BVzvuZ4.md) (video): "Clearance model for e-documents; E-document workflow orchestration"
- [What's New: E-Documents (2024 release wave 2)](../../../../videos/hba7KVWrIwY.md) (video): "e-documents; electronic invoicing; avalara; pagero; b2b; b2g; connectors"
- [What's New: E-Documents Localizations (2025 release wave 1)](../../../../videos/hL4PUhjyhNY.md) (video): "e-documents; localizations; peppol; factura; ubl; pdf/a; electronic invoicing"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 42 "Sales Order"](../../../../objects/page/42.md) · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 43 "Sales Invoice"](../../../../objects/page/43.md) · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 50 "Purchase Order"](../../../../objects/page/50.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 51 "Purchase Invoice"](../../../../objects/page/51.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 132 "Posted Sales Invoice"](../../../../objects/page/132.md) · on [Table 112 "Sales Invoice Header"](../../../../objects/table/112.md)
- [Page 138 "Posted Purchase Invoice"](../../../../objects/page/138.md) · on [Table 122 "Purch. Inv. Header"](../../../../objects/table/122.md)
- [Page 359 "Document Sending Profiles"](../../../../objects/page/359.md) · on [Table 60 "Document Sending Profile"](../../../../objects/table/60.md)
- [Page 360 "Document Sending Profile"](../../../../objects/page/360.md) · on [Table 60 "Document Sending Profile"](../../../../objects/table/60.md)
- [Page 6103 "E-Document Services"](../../../../objects/page/6103.md) · on [Table 6103 "E-Document Service"](../../../../objects/table/6103.md)
- [Page 6121 "E-Document"](../../../../objects/page/6121.md) · on [Table 6121 "E-Document"](../../../../objects/table/6121.md)
- [Page 6133 "E-Document Service"](../../../../objects/page/6133.md) · on [Table 6103 "E-Document Service"](../../../../objects/table/6103.md)
- [Page 6167 "E-Doc. Order Line Matching"](../../../../objects/page/6167.md) · captioned "Purchase Order Matching" · on [Table 6121 "E-Document"](../../../../objects/table/6121.md)
- [Page 9301 "Sales Invoice List"](../../../../objects/page/9301.md) · captioned "Sales Invoices" · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 9305 "Sales Order List"](../../../../objects/page/9305.md) · captioned "Sales Orders" · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 9307 "Purchase Order List"](../../../../objects/page/9307.md) · captioned "Purchase Orders" · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 9308 "Purchase Invoices"](../../../../objects/page/9308.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
