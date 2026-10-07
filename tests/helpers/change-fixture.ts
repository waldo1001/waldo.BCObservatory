/** D61 test fixtures: a BC30 snapshot (W1, an app, BE) whose objects carry real BCApps paths. */
import { extractSource, loadParser } from "../../pipeline/code/extract.js";
import { writeSnapshot } from "../../pipeline/code/job.js";

const man = (major: string, cc: string, commit: string, app = "Base Application") => ({ major, country: cc, layer: (cc === "w1" || cc === "apps" ? "base" : "overlay") as "base" | "overlay", source: "bcapps", repo: "https://github.com/microsoft/BCApps", branch: "main", commit, build: null, apps: [app], files: 1, parse_errors: 0, ...(cc === "w1" || cc === "apps" ? {} : { absent: [] }) });

/** W1 table 3 and codeunit 80, an app's table 6100, BE's copy of table 3 and its own table 11300. */
export async function snapshotFixture(dataDir: string, commit = "c30"): Promise<void> {
  const p = await loadParser();
  const ex = (src: string, file: string, cc = "w1", app = "Base Application", ns = "Microsoft.Foundation.PaymentTerms") =>
    extractSource(p, `namespace ${ns};\n${src}`, { version: "30", country: cc, layer: cc === "w1" || cc === "apps" ? "base" : "overlay", app, file });
  writeSnapshot(dataDir, [
    ...ex(`table 3 "Payment Terms" { fields { field(1; Code; Code[10]) { } } }`, "src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al"),
    ...ex(`codeunit 80 "Sales-Post" { }`, "src/Layers/W1/BaseApp/Sales/Posting/SalesPost.Codeunit.al", "w1", "Base Application", "Microsoft.Sales.Posting"),
  ], man("30", "w1", commit));
  writeSnapshot(dataDir, ex(`table 6100 "E-Document" { }`, "src/Apps/W1/EDocument/app/src/EDocument.Table.al", "apps", "E-Document Core", "Microsoft.eServices.EDocument"), man("30", "apps", commit, "E-Document Core"));
  writeSnapshot(dataDir, [
    ...ex(`table 3 "Payment Terms" { fields { field(1; Code; Code[10]) { } field(11300; X; Text[10]) { } } }`, "src/Layers/BE/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al", "be"),
    ...ex(`table 11300 "BE Only" { }`, "src/Layers/BE/BaseApp/Local/BEOnly.Table.al", "be"),
  ], man("30", "be", commit));
}

