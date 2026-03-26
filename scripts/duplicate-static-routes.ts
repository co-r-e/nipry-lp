import path from "node:path";
import { copyFile, mkdir, readdir } from "node:fs/promises";

const OUT_DIR = path.join(process.cwd(), "out");
const EXCLUDED_HTML = new Set(["index.html", "404.html", "_not-found.html"]);

async function collectHtmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "_next") return [];
        return collectHtmlFiles(entryPath);
      }

      if (entry.isFile() && entry.name.endsWith(".html")) {
        return [entryPath];
      }

      return [];
    }),
  );

  return files.flat();
}

async function main(): Promise<void> {
  const htmlFiles = await collectHtmlFiles(OUT_DIR);

  for (const htmlFile of htmlFiles) {
    const relativePath = path.relative(OUT_DIR, htmlFile);
    const fileName = path.basename(relativePath);
    if (EXCLUDED_HTML.has(fileName)) continue;

    const routePath = relativePath.slice(0, -".html".length);
    const targetPath = path.join(OUT_DIR, routePath, "index.html");

    await mkdir(path.dirname(targetPath), { recursive: true });
    await copyFile(htmlFile, targetPath);

    console.log(`Created ${path.relative(process.cwd(), targetPath)}`);
  }
}

main().catch((error) => {
  console.error("Failed to duplicate static routes:", error);
  process.exit(1);
});
