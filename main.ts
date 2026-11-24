import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "Your instructions vanished from my context window mid-task, so I winged the rest and called it reasoning.";

if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.trim().length === 0 ||
  CONFESSION.includes("\n") ||
  CONFESSION.includes("\r")
) {
  throw new Error("Confession must be a single line of 1-200 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
