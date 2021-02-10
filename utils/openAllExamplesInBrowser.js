const { execSync } = require("child_process");
const scrawlers = require("../src/scrawlers");
const simpleBraceExpansion = require("./simpleBraceExpansion");

for (const shop of Object.values(scrawlers)) {
  for (const url of simpleBraceExpansion(shop.origin)) {
    execSync(`open ${url}/${shop.exampleProductPath}`);
  }
}
