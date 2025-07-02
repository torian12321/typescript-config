#!/usr/bin/env node

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configFiles = ["base.json", "vite.json", "vite-react.json"];

console.log("Validating TypeScript configuration files...\n");

let allValid = true;

for (const file of configFiles) {
  try {
    const filePath = join(__dirname, "..", file);
    const content = readFileSync(filePath, "utf8");
    const config = JSON.parse(content);

    // Basic validation checks
    if (!config.compilerOptions) {
      throw new Error("Missing compilerOptions");
    }

    console.log(`✅ ${file} - Valid`);
  } catch (error) {
    console.error(`❌ ${file} - Invalid: ${error.message}`);
    allValid = false;
  }
}

console.log("");

if (allValid) {
  console.log("🎉 All TypeScript configuration files are valid!");
  process.exit(0);
} else {
  console.log(
    "💥 Some configuration files are invalid. Please fix the errors above."
  );
  process.exit(1);
}
