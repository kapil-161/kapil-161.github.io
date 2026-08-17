#!/usr/bin/env node
/**
 * Render a local HTML file to PDF (letter size).
 *
 *   npm install   # once, installs devDependency playwright
 *   npx playwright install chromium
 *   node scripts/html-to-pdf.cjs <input.html> [output.pdf]
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

async function main() {
  const input = process.argv[2];
  if (!input) {
    console.error(
      "Usage: node scripts/html-to-pdf.cjs <input.html> [output.pdf]"
    );
    process.exit(1);
  }

  const absIn = path.resolve(input);
  if (!fs.existsSync(absIn)) {
    console.error("File not found:", absIn);
    process.exit(1);
  }

  const absOut = path.resolve(
    process.argv[3] ?? absIn.replace(/\.html?$/i, ".pdf")
  );

  const fileUrl = "file://" + absIn.split(path.sep).join("/");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: "networkidle" });
  await page.pdf({
    path: absOut,
    format: "Letter",
    printBackground: true,
    margin: {
      top: "0.45in",
      right: "0.65in",
      bottom: "0.45in",
      left: "0.65in",
    },
  });
  await browser.close();
  console.log("Wrote", absOut);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
