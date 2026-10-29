---
id: topic/dev-itpro/development/programming-in-the-al-language/calling-external-services
type: topic
title: Calling external services
summary: "Learn section Development > Programming in the AL language > Calling external services: 8 Microsoft Learn pages. Index of what Learn documents here, linked to Learn."
tier: official
language: en
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T22:03:43.939Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: eead9e120b94f7d5b45a58b449ef229542f62f87c6394cb33d7c415a93f0762e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    title: Azure Function Integration Telemetry
    date: "2022-08-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient
    title: Call external services with the HttpClient data type
    date: "2026-03-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpclient/httpclient-data-type
    title: HttpClient data type
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/attributes/devenv-httpclienthandler-attribute
    title: HttpClientHandler attribute
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient-mock-outbound-calls
    title: Mock outbound HttpClient web service calls during testing
    date: "2025-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-trace
    title: Outgoing Web Service Request Trace
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-supported-cipher-suites
    title: Supported cipher suites
    date: "2021-05-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting
    title: Troubleshooting web service errors (OData, API, and SOAP)
    date: "2024-01-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpclient/httpclient-data-type
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/attributes/devenv-httpclienthandler-attribute
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient-mock-outbound-calls
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-supported-cipher-suites
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
  localizations: []
  videos:
    - video/qNHUj3ZEang
  posts:
    - post/aardvarklabs-blog/2953
    - post/demiliani-com/13588
    - post/demiliani-com/13640
    - post/demiliani-com/14203
    - post/kauffmann-nl/8332
    - post/wingate365-com/https-blog-wingate365-com-2026-06-graph-api-email-account-types-for-d365-html--562e57de51
    - post/yzhums-com/56046
    - post/yzhums-com/63735
    - post/yzhums-com/64775
    - post/yzhums-com/65391
    - post/yzhums-com/65525
    - post/yzhums-com/65533
  guidelines: []
  changes:
    - change/bcapps/10755
    - change/bcapps/11612
    - change/bcapps/11993
    - change/bcapps/12140
    - change/bcapps/12194
    - change/bcapps/12755
    - change/bcapps/5833
    - change/bcapps/8499
    - change/bcapps/9744
    - change/bcapps/9748
learn_toc_path:
  - Development
  - Programming in the AL language
  - Calling external services
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children: []
coverage:
  learn: 8
  code: 0
  video: 1
  blog: 12
  guideline: 0
bc_forms: []
member_hash: eead9e120b94f7d5b45a58b449ef229542f62f87c6394cb33d7c415a93f0762e
narrative: none
---

# Calling external services

> Learn section Development > Programming in the AL language > Calling external services: 8 Microsoft Learn pages. Index of what Learn documents here, linked to Learn.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Calling external services · tier official · system development · no narrative yet

## Learn pages

- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Learn about telemetry on Azure Function integrations with Business Central
  - Azure Function integration telemetry tracks calls from Business Central to Azure Functions.
  - Request succeeded event has eventId AL0000I74 with HTTP status code.
  - Request failed event has eventId AL0000I7P and includes status code and function host URL.
  - Authorization failed event has eventId AL0000I75 with error text explaining failure reason.
  - Common dimensions include function host URL, tenant ID, environment name, and company name.
  - Sample KQL queries help analyze and alert on Azure Function integration failures.
- [Call external services with the HttpClient data type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient): Learn about how to call external services using the HttpClient datatype.
- [HttpClient data type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/httpclient/httpclient-data-type): Provides a data type for sending HTTP requests and receiving HTTP responses from a resource identified by a URI.
- [HttpClientHandler attribute](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/attributes/devenv-httpclienthandler-attribute): Specifies that the method is an HttpClientHandler method, which catches and handles HTTP requests in test executions.
- [Mock outbound HttpClient web service calls during testing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-httpclient-mock-outbound-calls): Learn about how to test HttpClient web calls to external services without invoking the live/actual/remote service.
- [Outgoing Web Service Request Trace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-trace): Learn about the outgoing web service request telemetry in Business Central
  - Outgoing web service telemetry (RT0019) tracks HTTPClient calls made by AL code to external services, including endpoint, method, status code.
  - Dimensions record timeout set by NavHttpClientMaxTimeout server setting or TimeOut method call, with method call taking precedence over server setting.
  - Limit: httpReturnCode dimension deprecated in version 17.2; use httpStatusCode instead for http status codes returned from requests.
  - httpRequestError dimension (added version 29.0) distinguishes failure types: name resolution, connection failures, certificate validation, timeout.
  - Event includes extension ID, name, publisher, version; object ID, name, type making request; server execution time and total time for request completion.
  - Stack trace dimension (added version 20.1) and client type (added version 21.3) help trace external service calls to AL code locations.
  - HTTP headers captured in telemetry; sample KQL extracts Authorization header from parsed httpHeaders JSON to analyze authentication methods used.
- [Supported cipher suites](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-supported-cipher-suites): Lists the cipher suites that are supported for external APIs called from Business Central.
- [Troubleshooting web service errors (OData, API, and SOAP)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting): Learn about how to troubleshoot Business Central web service errors (OData, API, and SOAP).

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10755 Migrate Http Web Request Mgt. callers to native HttpClient](../../../../changes/bcapps/10755.md) (code change): "Migrate Http Web Request Mgt. callers to native HttpClient"
- [#11612 Multiple runs of email retrieval on the same emails don't persist again](../../../../changes/bcapps/11612.md) (code change): "Email retrieval no longer creates duplicate entries when the same emails are retrieved"
- [#11993 Enable HTTP requests before Expense Agent setup](../../../../changes/bcapps/11993.md) (code change): "The setup wizard enables HTTP client requests for the Expense Agent extension"
- [#12140 [Email - SMTP Connector] Fix OAuth Base64URL token parsing](../../../../changes/bcapps/12140.md) (code change): "OAuth2 SMTP authentication now correctly decodes Base64URL tokens"
- [#12194 Harden web request helpers: opt-in default credentials](../../../../changes/bcapps/12194.md) (code change): "Http Web Request Mgt. and SOAP Web Service Request Mgt. now disable default credentials"
- [#12755 Flow Service Management: use native HttpClient instead of Web Request Helper](../../../../changes/bcapps/12755.md) (code change): "Flow Service Management.GetEnvironments now calls the endpoint through native AL HttpClient"
- [#5833 Add Microsoft Graph API Support to SharePoint Connector](../../../../changes/bcapps/5833.md) (code change): "SharePoint Connector now supports Microsoft Graph API as an alternative to REST API"
- [#8499 Adding `IsVerifiedDomain` to the `AzureADTenant` module](../../../../changes/bcapps/8499.md) (code change): "checks whether a domain is among the tenant's verified domains"
- [#9744 [Email - Outlook REST API] Skip attachments without contentBytes in RetrieveEmails](../../../../changes/bcapps/9744.md) (code change): "Attachments without contentBytes (item and reference attachments) are now skipped"
- [#9748 Image Analyzer: use Computer Vision v3.2 instead of retiring v1.0](../../../../changes/bcapps/9748.md) (code change): "The Image Analyzer app switches from the retiring Computer Vision v1.0 to v3.2 API"
- [How to Use External APIs in Business Central](../../../../posts/aardvarklabs-blog/2953.md) (community post): "explains how to consume external APIs from within Business Central by making HTTP requests using the HttpClient"
- [Dynamics 365 Business Central: new strict URI validation in AL Http Client](../../../../posts/demiliani-com/13588.md) (community post): "Cloud environments enforce this without bypass options"
- [Dynamics 365 Business Central: using SFTP from AL (the native way)](../../../../posts/demiliani-com/13640.md) (community post): "native SFTP Client codeunit for connecting to SFTP servers from AL code"
- [Why your Business Central job queue needs idempotent external effects when integrating external systems.](../../../../posts/demiliani-com/14203.md) (community post): "Job queue entries that call external APIs"
- [OAuth library for the Rest Client](../../../../posts/kauffmann-nl/8332.md) (community post): "OAuth library for Business Central's Rest Client module has been released on GitHub"
- [Graph API Email account types for D365 BC](../../../../posts/wingate365-com/https-blog-wingate365-com-2026-06-graph-api-email-account-types-for-d365-html--562e57de51.md) (community post): "enables Business Central guest users to send email from their home domain addresses using Microsoft Graph API"
- [Dynamics 365 Business Central: Generate barcode through external services/APIs (Telepen, Swiss QR Code, QR codes with colors, images or text……)](../../../../posts/yzhums-com/56046.md) (community post): "external APIs like QuickChart can generate QR codes and other barcode types through HTTP requests in AL code"
- [Dynamics 365 Business Central Blog Series: Integrate Business Central with SharePoint](../../../../posts/yzhums-com/63735.md) (community post): "uploading SharePoint files through AL and Graph API, saving reports to SharePoint"
- [Dynamics 365 Business Central: Integrate with Microsoft Dataverse via APIs (Not using the standard Dataverse connector)](../../../../posts/yzhums-com/64775.md) (community post): "authenticating with OAuth 2.0 and implementing GET, POST, PATCH, and DELETE operations to synchronize data"
- [Dynamics 365 Business Central: How to set Allow HttpClient Requests for multiple extensions (selected extensions) at the same time](../../../../posts/yzhums-com/65391.md) (community post): "Allow HttpClient Requests must be enabled per extension to allow outbound HTTP calls"
- [Dynamics 365 Business Central: How to quickly check if a Url is secure (Use https) via AL](../../../../posts/yzhums-com/65525.md) (community post): "Use codeunit 1299 Web Request Helper and its IsSecureHttpUrl procedure to validate URL security"
- [Dynamics 365 Business Central: Automatically enable Allow HttpClient Requests after custom extension/app installation](../../../../posts/yzhums-com/65533.md) (community post): "Apps calling external services through HttpClient need Allow HttpClient Requests enabled"
- [What's Cooking in Business Central: Cookies and Collectible Errors in the REST Client](../../../../videos/qNHUj3ZEang.md) (video): "Cookie Support in REST Client; Collectible Errors in REST Client"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
