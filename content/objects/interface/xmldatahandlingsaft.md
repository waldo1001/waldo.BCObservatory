---
id: object/interface/xmldatahandlingsaft
type: object
title: Interface "XmlDataHandlingSAFT"
summary: Interface "XmlDataHandlingSAFT" in SAF-T. 8 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - saf-t
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 04c7c1716b5c03847d30b60d5688fee04b2a70b315073dc57c834aef87a7f937
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SAF-T/app/src/ExportEngineSAFT/XmlDataHandlingSAFT.Interface.al
    title: src/Apps/W1/SAF-T/app/src/ExportEngineSAFT/XmlDataHandlingSAFT.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
name: XmlDataHandlingSAFT
namespace: null
app: SAF-T
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
  procedures: 8
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 2
---

# Interface "XmlDataHandlingSAFT"

> Interface "XmlDataHandlingSAFT" in SAF-T. 8 public procedures. Introduced in BC29, still in BC30.

SAF-T · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SAF-T/app/src/ExportEngineSAFT/XmlDataHandlingSAFT.Interface.al) · facts from BC29

## Procedures

- `GetAuditFileNamespace(var Prefix: Text; var Uri: Text)`
- `GetHeaderModificationAllowed(var AddPrevSiblingsAllowed: Boolean; var AddNextSiblingsAllowed: Boolean; var AddChildNodesAllowed: Boolean; var SetNameValueAllowed: Boolean; var RemoveNodeAllowed: Boolean)`: Defines if the child nodes of the Header node can be modified/removed or other child nodes can be added.
- `GetNodeModificationAllowed(AuditFileExportDataType: Enum "Audit File Export Data Type"; var AddPrevSiblingsAllowed: Boolean; var AddNextSiblingsAllowed: Boolean; var AddChildNodesAllowed: Boolean; var SetNameValueAllowed: Boolean; var RemoveNodeAllowed: Boolean)`: Defines if the child nodes of the MasterFiles node can be modified/removed or other child nodes can be added. The function is used to enchance the performance of the export process by allowing the specific modifications of the specific nodes.
- `GetPrevSiblingsToAdd(RecRef: RecordRef; XPath: Text; NamespaceUri: Text; var Params: Dictionary of [Text, Text]): XmlNodeList`: Returns the list of the nodes which should be added before the selected node.
- `GetNextSiblingsToAdd(RecRef: RecordRef; XPath: Text; NamespaceUri: Text; var Params: Dictionary of [Text, Text]): XmlNodeList`: Returns the list of the nodes which should be added after the selected node.
- `GetChildNodesToAdd(RecRef: RecordRef; XPath: Text; NamespaceUri: Text; var Params: Dictionary of [Text, Text]): XmlNodeList`: Returns the list of the nodes which should be added as child nodes of the selected node.
- `SetCurrXmlElementNameValue(var Name: Text; var Content: Text; var EmptyContentAllowed: Boolean; RecRef: RecordRef; XPath: Text; var Params: Dictionary of [Text, Text])`: Returns updated name and value of the selected node.
- `RemoveCurrentXmlElement(RecRef: RecordRef; XPath: Text; var Params: Dictionary of [Text, Text]): Boolean`: Defines if the selected node should not be added.

## Implemented by

- [Codeunit 5282 "Xml Data Handling SAF-T"](../codeunit/5282.md)
- [Enum 5280 "SAF-T Modification"](../enum/5280.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "XmlDataHandlingSAFT")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "XmlDataHandlingSAFT"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
