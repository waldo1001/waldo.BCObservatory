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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b27c85302f8b2b0e832a527ef8628af836524a48d1e4f84a18146dffd8993416
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/SAF-T/app/src/ExportEngineSAFT/XmlDataHandlingSAFT.Interface.al
    title: src/Apps/W1/SAF-T/app/src/ExportEngineSAFT/XmlDataHandlingSAFT.Interface.al (releases/29.x)
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
---

# Interface "XmlDataHandlingSAFT"

> Interface "XmlDataHandlingSAFT" in SAF-T. 8 public procedures. Introduced in BC29, still in BC30.

SAF-T · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/SAF-T/app/src/ExportEngineSAFT/XmlDataHandlingSAFT.Interface.al) · facts from BC29

## Procedures

- `GetAuditFileNamespace(var Prefix: Text; var Uri: Text)`
- `GetHeaderModificationAllowed(var AddPrevSiblingsAllowed: Boolean; var AddNextSiblingsAllowed: Boolean; var AddChildNodesAllowed: Boolean; var SetNameValueAllowed: Boolean; var RemoveNodeAllowed: Boolean)`: Defines if the child nodes of the Header node can be modified/removed or other child nodes can be added.
- `GetNodeModificationAllowed(AuditFileExportDataType: Enum "Audit File Export Data Type"; var AddPrevSiblingsAllowed: Boolean; var AddNextSiblingsAllowed: Boolean; var AddChildNodesAllowed: Boolean; var SetNameValueAllowed: Boolean; var RemoveNodeAllowed: Boolean)`: Defines if the child nodes of the MasterFiles node can be modified/removed or other child nodes can be added. The function is used to enchance the performance of the export process by allowing the specific modifications of the specific nodes.
- `GetPrevSiblingsToAdd(RecRef: RecordRef; XPath: Text; NamespaceUri: Text; var Params: Dictionary of [Text, Text]): XmlNodeList`: Returns the list of the nodes which should be added before the selected node.
- `GetNextSiblingsToAdd(RecRef: RecordRef; XPath: Text; NamespaceUri: Text; var Params: Dictionary of [Text, Text]): XmlNodeList`: Returns the list of the nodes which should be added after the selected node.
- `GetChildNodesToAdd(RecRef: RecordRef; XPath: Text; NamespaceUri: Text; var Params: Dictionary of [Text, Text]): XmlNodeList`: Returns the list of the nodes which should be added as child nodes of the selected node.
- `SetCurrXmlElementNameValue(var Name: Text; var Content: Text; var EmptyContentAllowed: Boolean; RecRef: RecordRef; XPath: Text; var Params: Dictionary of [Text, Text])`: Returns updated name and value of the selected node.
- `RemoveCurrentXmlElement(RecRef: RecordRef; XPath: Text; var Params: Dictionary of [Text, Text]): Boolean`: Defines if the selected node should not be added.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
