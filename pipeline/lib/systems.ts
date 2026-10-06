/**
 * Galaxy system of an AL object from its namespace (D37): the first segment after Microsoft that maps.
 * No imports, so the site uses it at build time too.
 */
export const NS_SYSTEM: Record<string, string> = {
  finance: "finance", bank: "finance", sales: "sales", purchases: "purchasing", inventory: "inventory", warehouse: "warehouse",
  manufacturing: "manufacturing", projects: "projects", service: "service", assembly: "assembly", fixedassets: "fixed-assets",
  crm: "crm", humanresources: "hr", sustainability: "sustainability", integration: "integration", api: "integration",
  edocument: "integration", eservices: "integration", agents: "copilot", copilot: "copilot", "ai": "copilot",
  utilities: "platform", foundation: "platform", system: "platform", upgrade: "platform", environment: "administration",
  security: "administration", "systemadmin": "administration", reporting: "reporting", powerbi: "reporting",
};

export function objectSystem(namespace: string | null | undefined): string {
  const parts = String(namespace ?? "").toLowerCase().split(".");
  for (const p of parts.slice(1)) if (NS_SYSTEM[p]) return NS_SYSTEM[p];
  return "development";
}

/** Area of an object for grouping: the first namespace segment after the vendor ("Microsoft.Sales.Customer" -> "Sales"), else its app. */
export function areaOf(namespace: string | null | undefined, app: string | null | undefined): string {
  if (namespace) { const p = namespace.split("."); return (p[0] === "Microsoft" || p[0] === "System" ? p[1] : p[0]) ?? p[0]; }
  return app ?? "(no namespace)";
}
