---
id: object/interface/usage-data-processing
type: object
title: Interface "Usage Data Processing"
summary: Interface "Usage Data Processing" in Subscription Billing (Microsoft.SubscriptionBilling). 11 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - subscription billing
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 01d7de8c90f67d7813ab3a7343bf49c7b0bf0b9a3ea664d08e868d696c69b075
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Subscription%20Billing/app/Usage%20Based%20Billing/Interfaces/UsageDataProcessing.Interface.al
    title: src/Apps/W1/Subscription Billing/app/Usage Based Billing/Interfaces/UsageDataProcessing.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
object_type: interface
object_id: null
name: Usage Data Processing
namespace: Microsoft.SubscriptionBilling
app: Subscription Billing
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 11
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Usage Data Processing"

> Interface "Usage Data Processing" in Subscription Billing (Microsoft.SubscriptionBilling). 11 public procedures. Introduced in BC29, still in BC30.

Subscription Billing · Microsoft.SubscriptionBilling · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Subscription%20Billing/app/Usage%20Based%20Billing/Interfaces/UsageDataProcessing.Interface.al) · facts from BC29

## Procedures

- `ImportUsageData(var UsageDataImport: Record "Usage Data Import")`
- `ProcessUsageData(var UsageDataImport: Record "Usage Data Import")`: Process imported records in the connector-specific staging table: 1. Create Usage Data Supp. Customers if they do not exist. 2. Create Usage Data Supp. Subscriptions if they do not exist. 3. Validate Subscription Lines and check their dates. 4. Assign the Subscription to the staging table record if ...
- `ValidateImportedData(var UsageDataImport: Record "Usage Data Import")`: Validate that imported staging data exists before Usage Data Billing creation. Set an error on the Usage Data Import if no staging data is found.
- `CreateBillingData(var UsageDataImport: Record "Usage Data Import")`: Create Usage Data Billing records from the connector-specific staging table. Handle retry logic for previously failed staging records.
- `UpdateImportStatus(var UsageDataImport: Record "Usage Data Import")`: Check the connector-specific staging table for errors after billing creation and set the Usage Data Import status accordingly.
- `DeleteImportedData(var UsageDataImport: Record "Usage Data Import")`: Delete all connector-specific staging table records for a given Usage Data Import. Called when the Usage Data Import is deleted or reset.
- `UpdateSubscriptionHeaderNo(SupplierReference: Text[80]; SubscriptionHeaderNo: Code[20])`: Update the Subscription Header No. in the connector-specific staging table when a Supplier Subscription is connected to a Subscription.
- `OpenSupplierSettings(var UsageDataSupplier: Record "Usage Data Supplier")`: Open the connector-specific supplier settings page. Called when the user wants to view or edit settings for a particular Usage Data Supplier.
- `DeleteSupplierData(var UsageDataSupplier: Record "Usage Data Supplier")`: Delete connector-specific data associated with a Usage Data Supplier. Called when the Usage Data Supplier is deleted.
- `GetImportedLineCount(var UsageDataImport: Record "Usage Data Import"; OnlyErrors: Boolean): Integer`: Get the count of imported lines in the connector-specific staging table.
- `ShowImportedLines(var UsageDataImport: Record "Usage Data Import"; ShowOnlyErrors: Boolean)`: Open the connector-specific staging table page for the given Usage Data Import, optionally filtered to show only lines with errors.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
