import { test } from "node:test";
import assert from "node:assert/strict";
import { buildTopicHubs, parseToc, resolveHref, systemFor } from "../../pipeline/link/toc.js";
import type { SourceDef } from "../../pipeline/lib/config.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";

const SMB = { id: "learn-smb-docs", kind: "docs-git", url: "https://learn.microsoft.com/dynamics365/business-central/", repo: "r", paths: ["business-central/"] } as SourceDef;
const page = (path: string): ManifestItem => ({
  id: `docs/learn-smb-docs/${path}`, pillar: "docs", source: "learn-smb-docs", tier: "official", title: path, state: "fetched", stages: {}, attempts: 0,
  url: `https://learn.microsoft.com/dynamics365/business-central/${path.replace(/^business-central\//, "").replace(/\.md$/, "")}`,
});
const DEV = (p: string): ManifestItem => ({ ...page(p), id: `docs/learn-devitpro/${p}`, source: "learn-devitpro", url: `https://learn.microsoft.com/dynamics365/business-central/${p.replace(/\.md$/, "")}` });

const TOC = `---
ms.service: x
---
# [Docs home](index.yml)
# Business functionality
## Finance
### [Posting groups](finance-posting-groups.md)
### [Dimensions](finance-dimensions.md)
<!-- ### [Hidden](finance-hidden.md) -->
### General ledger
#### [Chart of accounts](finance-chart-of-accounts.md)
#### Deep group
##### Deeper
###### [Very deep](finance-very-deep.md)
## Tiny
### [Only one](tiny.md)
## Developer bits
### [Admin center](/dynamics365/business-central/dev-itpro/administration/tenant-admin-center?toc=/x)
### [External](https://example.com/x)
### [Nested](sub/TOC.md)
`;
const SUB = `# [Sub page](sub-page.md)\n# [Other sub page](sub-other.md)\n`;

test("TOC parsing: links, groups, comments and frontmatter", () => {
  const t = parseToc(TOC);
  assert.deepEqual(t.map((n) => [n.title, n.href]), [["Docs home", "index.yml"], ["Business functionality", null]]);
  const fin = t[1].children[0];
  assert.deepEqual(fin.children.map((c) => c.title), ["Posting groups", "Dimensions", "General ledger"]);
});

test("hrefs resolve to canonical Learn URLs, nested TOCs and nothing else", () => {
  assert.deepEqual(resolveHref("finance-posting-groups.md", "business-central/TOC.md", SMB), { url: "https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups" });
  assert.deepEqual(resolveHref("/en-us/dynamics365/business-central/dev-itpro/x/y?toc=/a", "business-central/TOC.md", SMB), { url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/x/y" });
  assert.deepEqual(resolveHref("sub/TOC.md", "business-central/TOC.md", SMB), { toc: "business-central/sub/TOC.md" });
  assert.equal(resolveHref("https://example.com", "business-central/TOC.md", SMB), null);
  assert.equal(resolveHref("/partner-center/x", "business-central/TOC.md", SMB), null);
  assert.equal(resolveHref("index.yml", "business-central/TOC.md", SMB), null);
});

test("galaxy system: the hub's own title wins over its ancestors, unknown inherits null", () => {
  assert.equal(systemFor(["Business functionality", "Finance"]), "finance");
  assert.equal(systemFor(["Finance", "Telemetry"]), "platform");
  assert.equal(systemFor(["Get started", "Buy"]), null);
});

test("hubs: depth and size limits, deep pages fold up, cross-repo links and nested TOCs count", async () => {
  const items = ["finance-posting-groups.md", "finance-dimensions.md", "finance-chart-of-accounts.md", "finance-very-deep.md", "tiny.md", "sub/sub-page.md", "sub/sub-other.md"]
    .map((p) => page(`business-central/${p}`));
  items.push(DEV("dev-itpro/administration/tenant-admin-center.md"));
  const read = async (p: string) => (p === "business-central/TOC.md" ? TOC : p === "business-central/sub/TOC.md" ? SUB : null);
  const hubs = await buildTopicHubs([{ source: SMB, tocPath: "business-central/TOC.md", read }], items);
  const ids = hubs.map((h) => h.id);
  assert.ok(ids.includes("topic/business-central/business-functionality/finance"));
  assert.ok(!ids.some((i) => i.includes("tiny")), "a one-page group is not a hub");
  assert.ok(!ids.some((i) => i.includes("deeper")), "groups below depth 4 fold into their hub");
  const gl = hubs.find((h) => h.id.endsWith("/finance/general-ledger"))!;
  assert.deepEqual(gl.members.sort(), ["docs/learn-smb-docs/business-central/finance-chart-of-accounts.md", "docs/learn-smb-docs/business-central/finance-very-deep.md"]);
  const fin = hubs.find((h) => h.id.endsWith("/finance"))!;
  assert.deepEqual([fin.system, fin.members.length, fin.children], ["finance", 4, [gl.id]]);
  assert.equal(gl.system, "finance", "general ledger is a finance alias");
  const dev = hubs.find((h) => h.id.endsWith("/developer-bits"))!;
  assert.deepEqual(dev.members.sort(), ["docs/learn-devitpro/dev-itpro/administration/tenant-admin-center.md", "docs/learn-smb-docs/business-central/sub/sub-other.md", "docs/learn-smb-docs/business-central/sub/sub-page.md"]);
  assert.match(fin.member_hash, /^[0-9a-f]{64}$/);
});
