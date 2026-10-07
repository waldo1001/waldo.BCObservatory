import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { appSlug, firstPartyApps } from "../../pipeline/lib/apps.js";
import { writeText } from "../../pipeline/lib/fsx.js";
import { validate } from "../../pipeline/lib/schema.js";
import { renderAppPages } from "../../pipeline/render/app.js";
import { expectedId } from "../../pipeline/validate/content.js";

const page = (fm: Record<string, unknown>) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\nbody\n`;
const L = (o: Record<string, string[]> = {}) => ({ learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], ...o });
const HUB = "topic/bf/sales/subscription-billing";

function fixture(): { dataDir: string; contentDir: string } {
  const root = mkdtempSync(join(tmpdir(), "bcobs-apps-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  writeText(join(dataDir, "code/29/apps/manifest.json"), JSON.stringify({ apps: ["Subscription Billing", "Shopify"] }));
  writeText(join(dataDir, "code/30/apps/manifest.json"), JSON.stringify({ apps: ["Subscription Billing", "Shopify", "Empty App"], repo: "https://github.com/microsoft/BCApps", commit: "abc123", branch: "main" }));
  writeText(join(dataDir, "hubs/topics.json"), JSON.stringify({ topics: [{ id: HUB, title: "Subscription billing", breadcrumb: ["Business functionality", "Sales"], parent: null, children: [], members: [] }] }));
  writeText(join(contentDir, "topics/bf/sales/subscription-billing.md"), page({ id: HUB, type: "topic", title: "Subscription billing", links: L() }));
  const obj = (type: string, id: number, name: string, app: string, ns: string, topics: string[] = [], caption?: string) =>
    writeText(join(contentDir, `objects/${type}/${id}.md`), page({ id: `object/${type}/${id}`, type: "object", title: `${type[0].toUpperCase()}${type.slice(1)} ${id} "${name}"`, object_type: type, object_id: id, name, ...(caption ? { caption } : {}), namespace: ns, app, present_in: ["29", "30"], links: L({ topics }) }));
  obj("table", 8057, "Subscription Header", "Subscription Billing", "Microsoft.SubscriptionBilling", [HUB]);
  obj("page", 8059, "Service Objects", "Subscription Billing", "Microsoft.SubscriptionBilling", [HUB], "Subscriptions");
  obj("codeunit", 8005, "Create Subscription Header", "Subscription Billing", "Microsoft.SubscriptionBilling");
  obj("table", 30100, "Shpfy Shop", "Shopify", "Microsoft.Integration.Shopify");
  // a W1 object is no app's
  obj("table", 18, "Customer", "Base Application", "Microsoft.Sales.Customer", [HUB]);
  writeText(join(contentDir, "videos/v1.md"), page({ id: "video/v1", type: "video", title: "Subscriptions demo", published_at: "2026-09-01", objects_mentioned: ["table Subscription Header", "table Customer"], links: L() }));
  writeText(join(contentDir, "posts/blog/p1.md"), page({ id: "post/blog/p1", type: "post", title: "Shopify tips", published_at: "2026-08-01", objects_mentioned: ["table Shpfy Shop"], links: L() }));
  writeText(join(contentDir, "features/1.md"), page({ id: "feature/1", type: "feature", title: "Shopify connector: B2B catalogs", status: "ga", ga_date: "2026-10", links: L() }));
  return { dataDir, contentDir };
}

test("apps: folder names from the apps snapshots, slugs lower-cased with spaces and dots to dashes", () => {
  const { dataDir } = fixture();
  assert.deepEqual([...firstPartyApps(dataDir)], [["Subscription Billing", ["29", "30"]], ["Shopify", ["29", "30"]], ["Empty App", ["30"]]]);
  assert.deepEqual(["Subscription Billing", "Email - SMTP API", "SAF-T", "My.App v2"].map(appSlug), ["subscription-billing", "email-smtp-api", "saf-t", "my-app-v2"]);
});

test("app pages: objects by type, the hubs that document them, media by exact name, roadmap by name; valid frontmatter", () => {
  const { dataDir, contentDir } = fixture();
  const run = renderAppPages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  assert.deepEqual(run, { apps: 2, written: 2, removed: 0 }, "an app without object pages gets no page");
  const sb = matter(readFileSync(join(contentDir, "apps/subscription-billing.md"), "utf8"));
  const fm = sb.data;
  assert.ok(validate("frontmatter.app", fm).ok, JSON.stringify(validate("frontmatter.app", fm).errors));
  assert.equal(fm.id, "app/subscription-billing");
  assert.equal(fm.system, "sales");
  assert.equal(fm.namespace_root, "Microsoft.SubscriptionBilling");
  assert.deepEqual(fm.present_in, ["29", "30"]);
  assert.deepEqual(fm.counts, { objects: 3, by_type: { table: 1, page: 1, codeunit: 1 }, hubs: 1, videos: 1, posts: 0 });
  assert.deepEqual(fm.links.objects, ["object/table/8057", "object/page/8059", "object/codeunit/8005"]);
  assert.deepEqual(fm.links.topics, [HUB]);
  assert.deepEqual(fm.links.videos, ["video/v1"]);
  assert.deepEqual(fm.links.features, []);
  assert.equal(fm.summary, "Subscription Billing (Microsoft.SubscriptionBilling): 3 objects in BC29-30 (1 table, 1 page, 1 codeunit); documented by 1 Learn hub; 1 video.");
  assert.equal(fm.evidence[0].url, "https://github.com/microsoft/BCApps/tree/abc123/src/Apps/W1/Subscription%20Billing/app");
  assert.match(sb.content, /\[Subscription billing\]\(\.\.\/topics\/bf\/sales\/subscription-billing\.md\) \(Business functionality > Sales\): 2 objects/);
  assert.match(sb.content, /\| 8059 \| \[Service Objects\]\(\.\.\/objects\/page\/8059\.md\) \| Subscriptions \|/);
  assert.match(sb.content, /\[Subscriptions demo\]\(\.\.\/videos\/v1\.md\) \(video, 2026-09-01\): names Table 8057 "Subscription Header"/);
  const shop = matter(readFileSync(join(contentDir, "apps/shopify.md"), "utf8")).data;
  assert.equal(shop.system, "integration");
  assert.deepEqual(shop.links.posts, ["post/blog/p1"]);
  assert.deepEqual(shop.links.features, ["feature/1"], "a feature whose title holds the app name, case-insensitive");
  assert.match(readFileSync(join(contentDir, "apps/shopify.md"), "utf8"), /## Roadmap\n\nPossibly related/);
  assert.match(readFileSync(join(contentDir, "apps/llms.txt"), "utf8"), /- \[Subscription Billing\]\(subscription-billing\.md\): 3 objects, 1 Learn hubs, system sales/);
  // unchanged input: nothing rewritten; an app that leaves every snapshot loses its page
  assert.equal(renderAppPages(dataDir, contentDir, new Date("2026-10-08T00:00:00Z")).written, 0);
  writeText(join(dataDir, "code/29/apps/manifest.json"), JSON.stringify({ apps: ["Subscription Billing"] }));
  writeText(join(dataDir, "code/30/apps/manifest.json"), JSON.stringify({ apps: ["Subscription Billing"], repo: "https://github.com/microsoft/BCApps", commit: "abc123", branch: "main" }));
  assert.equal(renderAppPages(dataDir, contentDir).removed, 1);
  assert.equal(existsSync(join(contentDir, "apps/shopify.md")), false);
});

test("validate:content places app pages under content/apps/ by the `${type}s` rule", () => {
  assert.equal(expectedId("/c", "/c/apps/subscription-billing.md", "app"), "app/subscription-billing");
  assert.equal(expectedId("/c", "/c/objects/subscription-billing.md", "app"), null);
});
