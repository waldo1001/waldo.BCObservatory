---
id: topic/business-central/business-functionality/finance/set-up-and-use-e-documents
type: topic
title: Set up and use E-Documents
summary: "E-Documents in Business Central: how to set up the E-Document Core app and services, connect to external access points and Microsoft 365, send e-documents from sales, receive them in purchasing, and extend the framework. It answers setup, connector, workflow and process questions."
tier: official
language: en
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-08T01:01:49.909Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c8be5df9a21a370981162ee0397d60d5ef69a0682fb7e65f5bf1edacb2880e94
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
    date: "2026-11-03"
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
    date: "2026-11-03"
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
    date: "2026-11-03"
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
    - video/OvI9jaA1mJY
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10029
    - change/bcapps/10799
    - change/bcapps/11483
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
  video: 7
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

> E-Documents in Business Central: how to set up the E-Document Core app and services, connect to external access points and Microsoft 365, send e-documents from sales, receive them in purchasing, and extend the framework. It answers setup, connector, workflow and process questions.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Set up and use E-Documents · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

E-Documents covers electronic document handling in Business Central. The E-Document Core app is the foundation. It supports sales and purchase documents, local compliance, document status messaging, and PDF analysis for vendor credit notes with Copilot.

Start with the overview, then Set Up E-documents. That page covers the E-Documents Service, document sending profiles, workflows, data exchange definitions, Peppol format and the clearance model for countries such as Spain, Italy, Mexico and India. Next, choose a connection. You can use connectors for external access points (Pagero, Avalara, Logiq, ExFlow, B2BRouter), which are installed from Microsoft Marketplace. Or you can use Outlook, SharePoint and OneDrive to import vendor documents.

For daily work, one page covers sending e-invoices and credit memos from sales and checking status and logs. Another covers receiving vendor documents in purchasing and turning them into invoices, orders, credit memos or journal entries. Developers of localizations and ISV extensions can use the extending page for formats, service integration, async sending, batch processing and receiving.

## Key points

- The E-Document Core app is the foundation and supports multiple localizations.
- Set up involves the E-Documents Service, sending profiles, workflows and data exchange definitions; the clearance model applies to countries such as Spain, Italy, Mexico and India.
- External access point connectors include Pagero, Avalara, Logiq, ExFlow and B2BRouter, and use OAuth 2.0 authentication.
- Connector setup needs the E-Document Core app plus connector apps from Microsoft Marketplace, and includes connection setup, GLN configuration, customer e-document setup and workflow configuration.
- Outlook, SharePoint and OneDrive connectors import vendor invoices and receipts for accounts payable in online environments.
- Sales supports creating and sending e-invoices and credit memos in Peppol formats, with status and log views and email attachment sending.
- Purchasing receives e-documents automatically or by manual import, with vendor matching, error and warning handling, and optional AI-assisted matching with purchase orders.
- The extensibility framework (2025 release wave 1) provides interfaces for document formats, service integration, async sending, batch processing, response handling and receiving.

## Learn pages

- [Connect E-Documents to external access points](https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-connectors): Learn how to set up E-Documents in Business Central to send and receive electronic documents with different external access points.
- [Connect e-documents to Microsoft 365 applications](https://learn.microsoft.com/dynamics365/business-central/finance-connect-edocuments-microsoft365): Learn how to integrate e-documents with Microsoft 365 applications.
- [E-documents overview](https://learn.microsoft.com/dynamics365/business-central/finance-edocuments-overview): Learn about e-documents in Business Central and how they streamline business transactions with automated document management and local compliance features.
- [Extending the e-documents functionality](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments): Learn how to extend e-documents functionality with specific requirements.
  - In the observatory: [Codeunit 6109 "E-Document Import Helper"](../../../../objects/codeunit/6109.md), [Codeunit 6115 "E-Document Error Helper"](../../../../objects/codeunit/6115.md), [Codeunit 6148 "E-Document Helper"](../../../../objects/codeunit/6148.md), [Enum 6101 "E-Document Format"](../../../../objects/enum/6101.md), [Enum 6121 "E-Document Type"](../../../../objects/enum/6121.md), [Enum 6128 "E-Document Processing Phase"](../../../../objects/enum/6128.md)
- [Set Up E-documents](https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments): Learn how to set up e-documents in Business Central with step-by-step configuration of services, formats, workflows, and document sending profiles.
  - In the observatory: [Page 132 "Posted Sales Invoice"](../../../../objects/page/132.md), [Page 1500 "Workflows"](../../../../objects/page/1500.md), [Page 1505 "Workflow Templates"](../../../../objects/page/1505.md)
- [Set up the E-Documents connector with external endpoints](https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-edocuments-external): This article explains how to set up E-Documents functionality when connected to external endpoints.
  - In the observatory: [Page 1 "Company Information"](../../../../objects/page/1.md), [Page 36954 "Customers"](../../../../objects/page/36954.md)
- [Use e-documents in sales](https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments): Learn how to use e-documents functionality that is related to sales.
  - In the observatory: [Page 143 "Posted Sales Invoices"](../../../../objects/page/143.md), [Page 6125 "E-Document Logs"](../../../../objects/page/6125.md), [Page 6135 "E-Document Service Status"](../../../../objects/page/6135.md)
- [Use E-Documents in the purchase process](https://learn.microsoft.com/dynamics365/business-central/finance-how-use-edocuments-purchase): Learn how to set up vendors and handle purchase invoices, orders, and credit memos using e-documents in Dynamics 365 Business Central.
  - In the observatory: [Page 1251 "Text-to-Account Mapping"](../../../../objects/page/1251.md), [Page 35603 "Vendors (RU)"](../../../../objects/page/35603-ru.md), [Page 460 "Purchases & Payables Setup"](../../../../objects/page/460.md), [Page 56 "Purchase Orders"](../../../../objects/page/56.md), [Page 6105 "Inbound E-Documents"](../../../../objects/page/6105.md), [Page 6122 "E-Documents"](../../../../objects/page/6122.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10029 [Main]-Import of e-documents with format ZUGfERD & XRECHNUNG fail with error message You cannot insert a purchase line without a purchase header in German localisation](../../../../changes/bcapps/10029.md) (code change): "Import of e-documents with format ZUGfERD & XRECHNUNG fail with error message"
- [#10799 Remove OnPrem scope from Table 1226 "Payment Export Data".SetSwissExport](../../../../changes/bcapps/10799.md) (code change): "Payment Export Data table is now callable from Cloud extensions"
- [#11483 [E-Documents Core] - Linkage & Traceability](../../../../changes/bcapps/11483.md) (code change): "E-Documents module now provides linkage and traceability"
- [#9578 [E-Documents Core] - Enabling remittance advice export via E-Documents (payment journal + posted payments)](../../../../changes/bcapps/9578.md) (code change): "E-Documents now supports exporting remittance advice from payment journals and posted vendor payments"
- [#9646 [Bug]: [DE] XRechnung/ZUGFeRD — no posting-time error when SELLER CONTACT (BG-6) source data is incomplete, producing non-compliant e-invoices](../../../../changes/bcapps/9646.md) (code change): "E-Document posting now validates that seller contact information"
- [#9648 [master]-[BE] [PEPPOL] There is a problem between the totals on the invoice printout and the XML PEPPOL with Payment discount](../../../../changes/bcapps/9648.md) (code change): "Fixed discrepancy between invoice printout and PEPPOL XML totals"
- [#9749 OIOUBL fixes after schematron update](../../../../changes/bcapps/9749.md) (code change): "OIOUBL export now correctly handles discounts by reporting them with proper VAT categories"
- [#9878 Add buyer order reference to ZUGFeRD export](../../../../changes/bcapps/9878.md) (code change): "ZUGFeRD export now includes the buyer order reference"
- [What's new in E-Documents: Overview (2026 release wave 2)](../../../../videos/07G7aC14Y_w.md) (video): "EDI functionality in Business Central; Purchase order EDI document type; Sales order"
- [What's New: E-Documents Connectors (2025 release wave 1)](../../../../videos/GM0DNxu39LM.md) (video): "e-documents; connectors; appsource; electronic invoicing; integration setup"
- [What's New: E-Documents ZUGFeRD Format (2025 release wave 2)](../../../../videos/gVjrKPHlrgM.md) (video): "ZUGFeRD Format Support; PDF/A-3 Format for Long-term Archival"
- [What's New: E-Documents and Clearance Model (2025 release wave 2)](../../../../videos/h6a8BVzvuZ4.md) (video): "Clearance model for e-documents; E-document workflow orchestration"
- [What's New: E-Documents (2024 release wave 2)](../../../../videos/hba7KVWrIwY.md) (video): "e-documents; electronic invoicing; avalara; pagero; b2b; b2g; connectors"
- [What's New: E-Documents Localizations (2025 release wave 1)](../../../../videos/hL4PUhjyhNY.md) (video): "e-documents; localizations; peppol; factura; ubl; pdf/a"
- [What's New: Payables Agent (2026 release wave 1)](../../../../videos/OvI9jaA1mJY.md) (video): "Inbound e-documents list enhancements"

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
