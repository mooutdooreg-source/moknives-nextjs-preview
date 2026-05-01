import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const legacyPages = [
  "contact.html",
  "edge-academy.html",
  "limited-drop.html",
  "mo-gear.html",
  "record-detail.html",
  "request-a-blade.html",
  "request-entry.html",
  "vanguard-request.html",
];

const targetDir = join(process.cwd(), "public", "legacy");
mkdirSync(targetDir, { recursive: true });

for (const page of legacyPages) {
  const source = join(process.cwd(), page);
  const target = join(targetDir, page);

  if (!existsSync(source)) {
    console.warn(`[legacy-sync] skipped missing file: ${page}`);
    continue;
  }

  copyFileSync(source, target);
  console.log(`[legacy-sync] copied ${page} -> public/legacy/${page}`);
}
