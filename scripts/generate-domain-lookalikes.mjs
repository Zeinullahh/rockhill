import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = join(root, "PHISHING-DOMAIN-LOOKALIKES.md");
const outputPath = join(root, "PHISHING-DOMAIN-LOOKALIKES.json");
const targetCount = 100_000;
const baseTlds = [
  "com", "net", "org", "co", "io", "info", "site", "online", "xyz",
  "app", "dev", "shop", "store", "cloud", "tech", "live", "email",
  "support", "help", "pro", "biz", "me", "ai", "tv", "club",
  "world", "today",
];
const extraTld = "digital";

const source = readFileSync(sourcePath, "utf8");
const originalDomains = [...source.matchAll(/^([a-z0-9]+\.com)$/gm)].map((match) => match[1]);
if (originalDomains.length !== new Set(originalDomains).size) {
  throw new Error("The Markdown source contains duplicate domains.");
}

const stems = originalDomains.map((domain) => domain.slice(0, -4));
const domains = new Set();
for (const stem of stems) {
  for (const tld of baseTlds) domains.add(`${stem}.${tld}`);
}

const extrasNeeded = targetCount - domains.size;
if (extrasNeeded < 0 || extrasNeeded > stems.length) {
  throw new Error("The source count no longer fits the requested 100,000-domain output.");
}

// Spread the final TLD across the source list instead of favoring the first brands.
for (let index = 0; index < extrasNeeded; index++) {
  const sourceIndex = Math.floor(((index + 0.5) * stems.length) / extrasNeeded);
  domains.add(`${stems[sourceIndex]}.${extraTld}`);
}

if (domains.size !== targetCount) {
  throw new Error(`Expected ${targetCount} unique domains, got ${domains.size}.`);
}

const sortedDomains = [...domains].sort();
writeFileSync(outputPath, `${JSON.stringify(sortedDomains, null, 2)}\n`);
console.log(`Wrote ${sortedDomains.length} unique domains to ${outputPath}`);
