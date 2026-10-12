/**
 * Crumbs that follow the section tree (D90): Galaxy / section / parents / page. The galaxy system is not a crumb; it is
 * a chip in the identity row (systemChip), linked into the galaxy. Pure: imports the section map only.
 */
import { section, type SectionId } from "../../../pipeline/lib/sections.js";

export interface Crumb { label: string; href?: string }

/** Galaxy / section / parents / leaf. With no leaf (and no parents) the section is the current page (no href). */
export function trail(base: string, sectionId: SectionId | null, parents: Crumb[], leaf: string | null): Crumb[] {
  const out: Crumb[] = [{ label: "Galaxy", href: base }];
  if (sectionId) {
    const s = section(sectionId);
    out.push(leaf === null && parents.length === 0 ? { label: s.name } : { label: s.name, href: `${base}${s.path}` });
  }
  out.push(...parents);
  if (leaf !== null) out.push({ label: leaf });
  return out;
}

/** The identity chip, or null: no system, or the system is the section itself (localization and source pages). */
export function systemChip(system: string | null, sectionId: SectionId | null, label: string | null, base: string): Crumb | null {
  if (!system || !label) return null;
  if (sectionId && section(sectionId).system === system) return null;
  return { label, href: `${base}#system=${system}` };
}

/** F5: "context" when the context action opens the page's own stage (Watch here, Read it here), else "claude". */
export function actionOrder(context?: { opens?: "stage" } | null): "context" | "claude" {
  return context?.opens === "stage" ? "context" : "claude";
}
