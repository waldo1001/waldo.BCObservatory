/**
 * The namespace treemap (D47, D66), shared by the codebase atlas in the browser (site/src/scripts/atlas.ts) and the
 * galaxy layout in the pipeline (pipeline/link/galaxy-layout.ts). No imports, so the site can use it as it is.
 */
export interface TreeNode<R> { name: string; path: string; children: Map<string, TreeNode<R>>; rows: R[]; count: number; x: number; y: number; w: number; h: number }

/** Namespace segments after the vendor: "Microsoft.Sales.Customer" -> ["Sales", "Customer"]; no namespace -> [app]. */
export const nsSegments = (namespace: string | null | undefined, app: string | null | undefined): string[] => {
  if (namespace) { const parts = namespace.split("."); return parts[0] === "Microsoft" || parts[0] === "System" ? parts.slice(1) : parts; }
  return [app ?? "(no namespace)"];
};

export function buildTree<R>(rows: R[], segments: (r: R) => string[], rootName = "All objects"): TreeNode<R> {
  const node = (name: string, path: string): TreeNode<R> => ({ name, path, children: new Map(), rows: [], count: 0, x: 0, y: 0, w: 0, h: 0 });
  const root = node(rootName, "");
  for (const r of rows) {
    let n = root;
    n.count++;
    for (const seg of segments(r)) {
      let c = n.children.get(seg);
      if (!c) { c = node(seg, n.path ? `${n.path}.${seg}` : seg); n.children.set(seg, c); }
      c.count++;
      n = c;
    }
    n.rows.push(r);
  }
  return root;
}
export const descendants = <R>(n: TreeNode<R>): R[] => [...n.rows, ...[...n.children.values()].flatMap((c) => descendants(c))];

export interface Box { count: number; path: string; x: number; y: number; w: number; h: number }
/** Squarified treemap (Bruls, Huizing, van Wijk) of a node's children into its rectangle. Largest first, ties by path. */
export function squarify<N extends Box>(children: N[], x: number, y: number, w: number, h: number): void {
  const items = [...children].sort((a, b) => b.count - a.count || a.path.localeCompare(b.path));
  const total = items.reduce((s, c) => s + c.count, 0) || 1;
  // area per counted item, fixed for the whole rectangle (the remaining rectangle shrinks, the unit does not)
  const unit = (w * h) / total;
  let row: N[] = [], rowSum = 0, cx = x, cy = y, cw = w, ch = h;
  // worst aspect ratio of the row's blocks when the row (total area S) lies along a side of length `side`
  const worst = (sum: number, side: number) => {
    const S = sum * unit;
    let worstR = 0;
    for (const n of row) { const a = n.count * unit; worstR = Math.max(worstR, (side * side * a) / (S * S), (S * S) / (side * side * a)); }
    return worstR;
  };
  const layoutRow = () => {
    const area = unit, rowArea = rowSum * area;
    if (cw >= ch) {
      const rw = rowArea / ch; let yy = cy;
      for (const n of row) { const nh = (n.count * area) / rw; Object.assign(n, { x: cx, y: yy, w: rw, h: nh }); yy += nh; }
      cx += rw; cw -= rw;
    } else {
      const rh = rowArea / cw; let xx = cx;
      for (const n of row) { const nw = (n.count * area) / rh; Object.assign(n, { x: xx, y: cy, w: nw, h: rh }); xx += nw; }
      cy += rh; ch -= rh;
    }
    row = []; rowSum = 0;
  };
  for (const n of items) {
    const side = Math.min(cw, ch);
    if (row.length) {
      const before = worst(rowSum, side);
      row.push(n); rowSum += n.count;
      const after = worst(rowSum, side);
      if (after > before) { row.pop(); rowSum -= n.count; layoutRow(); row.push(n); rowSum += n.count; }
    } else { row.push(n); rowSum = n.count; }
  }
  if (row.length) layoutRow();
}
