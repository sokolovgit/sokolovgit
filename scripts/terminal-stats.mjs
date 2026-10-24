import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [libDir, user, outDir] = process.argv.slice(2);
const { generateSvg } = await import(pathToFileURL(resolve(libDir, "src/index.js")).href);

mkdirSync(outDir, { recursive: true });
const svg = await generateSvg({ type: "stats", themeName: "mac", githubId: user, scale: 0.8 });
writeFileSync(resolve(outDir, "terminal-stats.svg"), svg);
