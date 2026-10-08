// Static site: copy the files as-is into dist/ (no bundling, no changes).
import { mkdirSync, copyFileSync, rmSync } from "node:fs";
const files = ["index.html", "swarm.js", "ethers.umd.min.js", "favicon.svg", "screenshot.png"];
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
for (const f of files) copyFileSync(f, `dist/${f}`);
console.log(`Copied ${files.length} files to dist/`);